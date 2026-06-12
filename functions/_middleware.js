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
 *   POST /acceso  — valida credenciales y crea la sesión (30 días).
 *   GET  /salir   — cierra la sesión y vuelve al login.
 *
 * Cookies:
 *   curso_session — token firmado "usuario.expiración.firma" (HttpOnly).
 *   curso_user    — nombre del usuario autenticado, legible por JS para que
 *                   assets/progreso.js guarde el avance de cada persona.
 */

const SESSION_COOKIE = "curso_session";
const USER_COOKIE = "curso_user";
const SESSION_DAYS = 30;

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
