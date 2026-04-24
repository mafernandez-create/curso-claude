/**
 * Basic Auth middleware for Cloudflare Pages.
 *
 * Reads BASIC_AUTH_USER and BASIC_AUTH_PASS from the project's
 * environment variables / secrets and requires them for every request.
 *
 * If the credentials are missing, responds with HTTP 500 (fail closed).
 * If the credentials are present but not provided (or invalid), responds
 * with HTTP 401 + WWW-Authenticate so the browser prompts for user/pass.
 *
 * Uses a length-aware constant-time comparison to reduce timing-oracle risk.
 */

export const onRequest = async ({ request, env, next }) => {
  const expectedUser = env.BASIC_AUTH_USER;
  const expectedPass = env.BASIC_AUTH_PASS;

  if (!expectedUser || !expectedPass) {
    return new Response(
      "Basic Auth credentials not configured. Set BASIC_AUTH_USER and BASIC_AUTH_PASS as environment variables in Cloudflare Pages.",
      { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  const authHeader = request.headers.get("Authorization") || "";
  if (!authHeader.toLowerCase().startsWith("basic ")) {
    return unauthorized();
  }

  let decoded;
  try {
    decoded = atob(authHeader.slice(6).trim());
  } catch {
    return unauthorized();
  }

  const sep = decoded.indexOf(":");
  if (sep < 0) return unauthorized();

  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);

  if (!safeEqual(user, expectedUser) || !safeEqual(pass, expectedPass)) {
    return unauthorized();
  }

  return next();
};

const unauthorized = () =>
  new Response("Autenticación requerida.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Curso Claude", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const safeEqual = (a, b) => {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
};
