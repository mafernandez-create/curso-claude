/**
 * Middleware de autenticación para Cloudflare Pages.
 *
 * Sustituye al Basic Auth anterior por un formulario de login propio con
 * sesión por cookie, y soporta varios usuarios con identidad individual
 * (necesaria para el historial de avance por persona).
 *
 * Variables de entorno requeridas (dashboard de Cloudflare Pages):
 *   AUTH_USERS   Lista de credenciales "usuario:contraseña" separadas por ";".
 *                Ejemplo: "javier:secreto1;manolo:secreto2"
 *   AUTH_SECRET  Cadena aleatoria larga (≥32 chars) para firmar las cookies
 *                de sesión con HMAC-SHA256.
 *
 * Si falta configuración responde HTTP 500 (fail closed).
 *
 * Rutas que gestiona el propio middleware:
 *   POST /acceso         — valida credenciales y crea la sesión (30 días).
 *   GET  /salir          — cierra la sesión y vuelve al login.
 *   GET  /admin/accesos  — panel con las conexiones y accesos de los demás
 *                          usuarios. SOLO accesible para el usuario
 *                          administrador (env.AUTH_ADMIN, por defecto
 *                          "manolo").
 *
 * Cookies:
 *   curso_session — token firmado "usuario.expiración.firma" (HttpOnly).
 *   curso_user    — nombre del usuario autenticado, legible por JS para que
 *                   assets/progreso.js guarde el avance de cada persona.
 *   curso_act     — marcador efímero (1 h) para no registrar más de un
 *                   evento de actividad por hora en el log de accesos.
 *
 * Registro de accesos (binding KV "CURSO_KV", ver wrangler.toml):
 *   - "inicio de sesión": cada login correcto.
 *   - "actividad": como mucho una vez por hora mientras se navega.
 *   Si el binding no existe, la autenticación funciona igual y simplemente
 *   no se registra nada.
 */

const SESSION_COOKIE = "curso_session";
const USER_COOKIE = "curso_user";
const ACTIVITY_COOKIE = "curso_act";
const SESSION_DAYS = 30;
const MAX_EVENTOS = 200;

const adminUser = (env) => (env.AUTH_ADMIN || "manolo").trim().toLowerCase();

export const onRequest = async ({ request, env, next }) => {
  if (!env.AUTH_USERS || !env.AUTH_SECRET) {
    return new Response(
      "Autenticación no configurada. Define AUTH_USERS y AUTH_SECRET como variables de entorno en Cloudflare Pages.",
      { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  const url = new URL(request.url);

  if (url.pathname === "/salir") {
    return logoutResponse();
  }

  if (url.pathname === "/acceso" && request.method === "POST") {
    return handleLogin(request, env);
  }

  const session = await readSession(request, env);
  if (!session) {
    return loginPage(url.pathname + url.search, null);
  }

  if (url.pathname === "/admin/accesos") {
    return adminAccesos(request, env, session.user);
  }

  // Registro de actividad (máx. una vez por hora, controlado por cookie).
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  if (!cookies[ACTIVITY_COOKIE]) {
    await registrarEvento(env, request, session.user, "actividad");
    const resp = await next();
    const conCookie = new Response(resp.body, resp);
    conCookie.headers.append(
      "Set-Cookie",
      `${ACTIVITY_COOKIE}=1; Path=/; Max-Age=3600; Secure; SameSite=Lax`,
    );
    return conCookie;
  }

  return next();
};

/* ------------------------------------------------------------------ */
/* Login                                                               */
/* ------------------------------------------------------------------ */

const handleLogin = async (request, env) => {
  let form;
  try {
    form = await request.formData();
  } catch {
    return loginPage("/", "Petición no válida. Inténtalo de nuevo.");
  }

  const user = String(form.get("usuario") || "").trim().toLowerCase();
  const pass = String(form.get("contrasena") || "");
  const nextPath = sanitizeNext(String(form.get("next") || "/"));

  const users = parseUsers(env.AUTH_USERS);
  const expected = users.get(user);

  if (!expected || !safeEqual(pass, expected)) {
    return loginPage(nextPath, "Usuario o contraseña incorrectos.");
  }

  await registrarEvento(env, request, user, "inicio de sesión");

  const expires = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const token = await signToken(user, expires, env.AUTH_SECRET);
  const cookieExpiry = new Date(expires).toUTCString();

  return new Response(null, {
    status: 303,
    headers: appendCookies(
      new Headers({ Location: nextPath }),
      [
        `${SESSION_COOKIE}=${token}; Path=/; Expires=${cookieExpiry}; HttpOnly; Secure; SameSite=Lax`,
        `${USER_COOKIE}=${encodeURIComponent(user)}; Path=/; Expires=${cookieExpiry}; Secure; SameSite=Lax`,
      ],
    ),
  });
};

const logoutResponse = () =>
  new Response(null, {
    status: 303,
    headers: appendCookies(new Headers({ Location: "/" }), [
      `${SESSION_COOKIE}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Lax`,
      `${USER_COOKIE}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax`,
    ]),
  });

const appendCookies = (headers, cookies) => {
  for (const c of cookies) headers.append("Set-Cookie", c);
  return headers;
};

/* ------------------------------------------------------------------ */
/* Sesión (token firmado con HMAC-SHA256)                              */
/* ------------------------------------------------------------------ */

const readSession = async (request, env) => {
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;

  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [user, expStr, sig] = parts;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Date.now()) return null;

  const expectedSig = await hmacHex(`${user}.${expStr}`, env.AUTH_SECRET);
  if (!safeEqual(sig, expectedSig)) return null;

  // El usuario debe seguir existiendo en AUTH_USERS (permite revocar acceso).
  if (!parseUsers(env.AUTH_USERS).has(user)) return null;

  return { user };
};

const signToken = async (user, expires, secret) => {
  const payload = `${user}.${expires}`;
  const sig = await hmacHex(payload, secret);
  return `${payload}.${sig}`;
};

const hmacHex = async (message, secret) => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

const parseUsers = (raw) => {
  const map = new Map();
  for (const pair of raw.split(";")) {
    const sep = pair.indexOf(":");
    if (sep <= 0) continue;
    map.set(pair.slice(0, sep).trim().toLowerCase(), pair.slice(sep + 1));
  }
  return map;
};

const parseCookies = (header) => {
  const out = {};
  for (const part of header.split(";")) {
    const sep = part.indexOf("=");
    if (sep < 0) continue;
    out[part.slice(0, sep).trim()] = part.slice(sep + 1).trim();
  }
  return out;
};

// Solo rutas internas absolutas; evita open redirects tipo "//evil.com".
const sanitizeNext = (next) =>
  next.startsWith("/") && !next.startsWith("//") ? next : "/";

const safeEqual = (a, b) => {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
};

/* ------------------------------------------------------------------ */
/* Pantalla de acceso                                                  */
/* ------------------------------------------------------------------ */

const loginPage = (nextPath, error) => {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Acceso — Mi Curso de Claude</title>
<style>
  :root {
    --morado: #5e35b1;
    --morado-oscuro: #4527a0;
    --naranja: #ff6e40;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--morado) 0%, var(--morado-oscuro) 100%);
    padding: 1rem;
  }
  .tarjeta {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,.3);
    padding: 2.5rem 2rem;
    width: 100%;
    max-width: 380px;
  }
  .logo {
    width: 56px; height: 56px;
    border-radius: 14px;
    background: var(--morado);
    color: #fff;
    font-size: 1.8rem;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1rem;
  }
  h1 { font-size: 1.3rem; text-align: center; color: #1a1a2e; margin-bottom: .35rem; }
  .sub { text-align: center; color: #777; font-size: .85rem; margin-bottom: 1.6rem; }
  label { display: block; font-size: .8rem; font-weight: 600; color: #444; margin: .9rem 0 .3rem; }
  input {
    width: 100%;
    padding: .65rem .8rem;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
  }
  input:focus { outline: none; border-color: var(--morado); }
  button {
    width: 100%;
    margin-top: 1.4rem;
    padding: .75rem;
    border: none;
    border-radius: 8px;
    background: var(--morado);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
  }
  button:hover { background: var(--morado-oscuro); }
  .error {
    background: #fdecea;
    color: #b3261e;
    border-radius: 8px;
    padding: .6rem .8rem;
    font-size: .85rem;
    margin-bottom: .4rem;
    text-align: center;
  }
  .pie { text-align: center; color: #aaa; font-size: .75rem; margin-top: 1.5rem; }
</style>
</head>
<body>
  <main class="tarjeta">
    <div class="logo">🎓</div>
    <h1>Mi Curso de Claude</h1>
    <p class="sub">Identifícate para acceder al curso</p>
    ${error ? `<p class="error">${error}</p>` : ""}
    <form method="POST" action="/acceso">
      <input type="hidden" name="next" value="${escapeHtml(nextPath)}">
      <label for="usuario">Usuario</label>
      <input id="usuario" name="usuario" type="text" autocomplete="username"
             autocapitalize="none" autocorrect="off" required autofocus>
      <label for="contrasena">Contraseña</label>
      <input id="contrasena" name="contrasena" type="password"
             autocomplete="current-password" required>
      <button type="submit">Entrar</button>
    </form>
    <p class="pie">Acceso privado · sesión de ${SESSION_DAYS} días</p>
  </main>
</body>
</html>`;

  return new Response(html, {
    status: 401,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]),
  );

/* ------------------------------------------------------------------ */
/* Registro de conexiones y accesos (Cloudflare KV)                    */
/* ------------------------------------------------------------------ */

const registrarEvento = async (env, request, user, tipo) => {
  if (!env.CURSO_KV) return; // sin binding KV no se registra nada
  try {
    const key = `accesos:${user}`;
    const lista = JSON.parse((await env.CURSO_KV.get(key)) || "[]");
    lista.unshift({
      fecha: new Date().toISOString(),
      tipo,
      ip: request.headers.get("CF-Connecting-IP") || "—",
      pais: (request.cf && request.cf.country) || "—",
      dispositivo: resumenDispositivo(request.headers.get("User-Agent") || ""),
    });
    await env.CURSO_KV.put(key, JSON.stringify(lista.slice(0, MAX_EVENTOS)));
  } catch {
    // El registro nunca debe romper la navegación.
  }
};

const resumenDispositivo = (ua) => {
  const so = /iPhone|iPad/.test(ua)
    ? "iPhone/iPad"
    : /Android/.test(ua)
      ? "Android"
      : /Macintosh/.test(ua)
        ? "Mac"
        : /Windows/.test(ua)
          ? "Windows"
          : /Linux/.test(ua)
            ? "Linux"
            : "Otro";
  const nav = /Edg\//.test(ua)
    ? "Edge"
    : /Chrome\//.test(ua)
      ? "Chrome"
      : /Safari\//.test(ua)
        ? "Safari"
        : /Firefox\//.test(ua)
          ? "Firefox"
          : /curl/i.test(ua)
            ? "curl"
            : "otro navegador";
  return `${so} · ${nav}`;
};

/* ------------------------------------------------------------------ */
/* Panel /admin/accesos (solo el usuario administrador)                */
/* ------------------------------------------------------------------ */

const adminAccesos = async (request, env, user) => {
  if (user !== adminUser(env)) {
    return new Response(
      paginaSimple(
        "Acceso restringido",
        "Esta página solo está disponible para el administrador del curso.",
        '<a href="/">← Volver al curso</a>',
      ),
      {
        status: 403,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
      },
    );
  }

  const usuarios = [...parseUsers(env.AUTH_USERS).keys()].filter(
    (u) => u !== adminUser(env),
  );

  let secciones = "";
  if (!env.CURSO_KV) {
    secciones =
      '<p class="aviso">El almacén de registros (KV) no está configurado: revisa el binding CURSO_KV en wrangler.toml.</p>';
  } else {
    for (const u of usuarios) {
      let eventos = [];
      try {
        eventos = JSON.parse((await env.CURSO_KV.get(`accesos:${u}`)) || "[]");
      } catch {}
      const filas = eventos.length
        ? eventos
            .map(
              (e) => `<tr>
                <td><time datetime="${escapeHtml(e.fecha)}">${escapeHtml(e.fecha)}</time></td>
                <td>${escapeHtml(e.tipo)}</td>
                <td>${escapeHtml(e.dispositivo || "—")}</td>
                <td>${escapeHtml(e.ip || "—")} (${escapeHtml(e.pais || "—")})</td>
              </tr>`,
            )
            .join("")
        : '<tr><td colspan="4">Sin registros todavía.</td></tr>';
      const nombre = u.charAt(0).toUpperCase() + u.slice(1);
      secciones += `
        <h2>Conexiones y accesos de ${escapeHtml(nombre)}</h2>
        <table>
          <thead><tr><th>Fecha y hora</th><th>Tipo</th><th>Dispositivo</th><th>IP (país)</th></tr></thead>
          <tbody>${filas}</tbody>
        </table>`;
    }
  }

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Accesos — Mi Curso de Claude</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
         margin: 0; padding: 2rem 1rem; background: #f5f3fa; color: #1a1a2e; }
  main { max-width: 760px; margin: 0 auto; }
  h1 { color: #4527a0; font-size: 1.4rem; }
  h2 { font-size: 1.05rem; margin-top: 2rem; }
  .sub { color: #777; font-size: .85rem; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px;
          overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,.06); font-size: .85rem; }
  th, td { text-align: left; padding: .55rem .7rem; border-bottom: 1px solid #eee; }
  th { background: #5e35b1; color: #fff; font-weight: 600; }
  tr:last-child td { border-bottom: none; }
  .aviso { background: #fdecea; color: #b3261e; padding: .7rem 1rem; border-radius: 8px; }
  .pie { margin-top: 2rem; font-size: .8rem; }
  a { color: #5e35b1; }
</style>
</head>
<body>
<main>
  <h1>📋 Registro de accesos</h1>
  <p class="sub">Se registra cada inicio de sesión y, como máximo una vez por hora,
  la actividad de navegación. Solo el administrador puede ver esta página.
  Se conservan los últimos ${MAX_EVENTOS} eventos por usuario.</p>
  ${secciones}
  <p class="pie"><a href="/">← Volver al curso</a> · <a href="/salir">Cerrar sesión</a></p>
</main>
<script>
  // Convierte las fechas ISO (UTC) a la hora local del navegador.
  document.querySelectorAll("time").forEach((t) => {
    const d = new Date(t.getAttribute("datetime"));
    if (!isNaN(d)) t.textContent = d.toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" });
  });
</script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
};

const paginaSimple = (titulo, mensaje, extra) => `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(titulo)}</title>
<style>body{font-family:"Inter",-apple-system,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;background:#f5f3fa;color:#1a1a2e}
main{text-align:center;max-width:420px;padding:2rem}h1{color:#4527a0;font-size:1.2rem}a{color:#5e35b1}</style></head>
<body><main><h1>${escapeHtml(titulo)}</h1><p>${escapeHtml(mensaje)}</p><p>${extra || ""}</p></main></body></html>`;
