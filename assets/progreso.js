/**
 * progreso.js — Historial de avance del curso por usuario.
 *
 * Funciona junto al middleware de autenticación (functions/_middleware.js),
 * que deja en la cookie `curso_user` el nombre del usuario autenticado.
 * El avance se guarda en localStorage bajo una clave por usuario, de modo
 * que Javier y Manolo tienen historiales independientes aunque compartan
 * dispositivo.
 *
 * Limitación conocida (decisión de diseño): localStorage es por navegador,
 * así que el avance marcado en el iPhone no se ve desde el ordenador. Si
 * algún día hace falta sincronización, el plan B documentado es guardar el
 * progreso en Cloudflare KV a través del middleware.
 *
 * Dos comportamientos:
 *  1. En cada lección (modulos/NN-modulo/NN-leccion/) inyecta un botón
 *     "Marcar como completada" bajo el título.
 *  2. En la página "Mi progreso" (div#progreso-app) pinta el resumen por
 *     módulos. La lista de lecciones se deriva del índice de búsqueda de
 *     MkDocs (search/search_index.json), así no hay que mantener un
 *     manifiesto a mano: toda lección añadida a la navegación aparece sola.
 */
(function () {
  "use strict";

  // El sitio se sirve en la raíz del dominio tanto en local (mkdocs serve)
  // como en Cloudflare Pages.
  var SEARCH_INDEX_URL = "/search/search_index.json";
  var LESSON_RE = /^modulos\/[^/]+\/\d{2}-[^/]+\/$/;

  var MODULOS = {
    "00-guia-proyecto": "00 · Guía del proyecto",
    "01-fundamentos-ia": "01 · Fundamentos de IA y LLMs",
    "02-ai-fluency": "02 · AI Fluency",
    "03-claude-basico": "03 · Claude básico",
    "04-productividad": "04 · Productividad",
    "05-prompt-engineering": "05 · Prompt Engineering",
    "06-claude-code": "06 · Claude Code",
    "07-api-claude": "07 · API de Claude",
    "08-mcp": "08 · MCP",
    "09-skills-agentes": "09 · Skills y subagentes",
    "10-cloud": "10 · Cloud (AWS / GCP)",
    "11-casos-avanzados": "11 · Casos avanzados",
    "12-formacion-docencia": "12 · Formación y docencia",
    "13-seguridad-etica": "13 · Seguridad y ética",
  };

  /* ---------------- Usuario y almacenamiento ---------------- */

  function usuarioActual() {
    var m = document.cookie.match(/(?:^|;\s*)curso_user=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : "invitado";
  }

  function claveStorage() {
    return "curso-progreso:" + usuarioActual();
  }

  function cargarProgreso() {
    try {
      return JSON.parse(localStorage.getItem(claveStorage())) || {};
    } catch (e) {
      return {};
    }
  }

  function guardarProgreso(p) {
    localStorage.setItem(claveStorage(), JSON.stringify(p));
  }

  function hoyISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function capitalizar(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* ---------------- Detección de la lección actual ---------------- */

  // Normaliza el pathname a la forma "modulos/NN-modulo/NN-leccion/".
  function leccionActual() {
    var path = location.pathname
      .replace(/index\.html$/, "")
      .replace(/^\//, "");
    return LESSON_RE.test(path) ? path : null;
  }

  /* ---------------- Botón en cada lección ---------------- */

  function montarBoton(leccion) {
    var articulo = document.querySelector(".md-content__inner");
    if (!articulo) return;

    var caja = document.createElement("div");
    caja.className = "cc-progreso-caja";

    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "cc-progreso-boton";

    function pintar() {
      var fecha = cargarProgreso()[leccion];
      if (fecha) {
        boton.textContent = "✅ Completada el " + fecha + " (pulsa para desmarcar)";
        boton.classList.add("completada");
      } else {
        boton.textContent = "Marcar como completada";
        boton.classList.remove("completada");
      }
    }

    boton.addEventListener("click", function () {
      var progreso = cargarProgreso();
      if (progreso[leccion]) {
        delete progreso[leccion];
      } else {
        progreso[leccion] = hoyISO();
      }
      guardarProgreso(progreso);
      pintar();
    });

    var nota = document.createElement("span");
    nota.className = "cc-progreso-usuario";
    nota.textContent = "Avance de " + capitalizar(usuarioActual());

    caja.appendChild(boton);
    caja.appendChild(nota);

    var h1 = articulo.querySelector("h1");
    if (h1 && h1.nextSibling) {
      h1.parentNode.insertBefore(caja, h1.nextSibling);
    } else {
      articulo.insertBefore(caja, articulo.firstChild);
    }
    pintar();
  }

  /* ---------------- Página "Mi progreso" ---------------- */

  function montarResumen(contenedor) {
    fetch(SEARCH_INDEX_URL)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (indice) {
        var lecciones = (indice.docs || [])
          .filter(function (d) {
            return d.location && LESSON_RE.test(d.location);
          })
          .map(function (d) {
            return { ruta: d.location, titulo: d.title };
          })
          .sort(function (a, b) {
            return a.ruta < b.ruta ? -1 : 1;
          });
        pintarResumen(contenedor, lecciones);
      })
      .catch(function (e) {
        contenedor.innerHTML =
          "<p>No se pudo cargar el índice de lecciones (" + e.message + ").</p>";
      });
  }

  function pintarResumen(contenedor, lecciones) {
    var progreso = cargarProgreso();
    var usuario = capitalizar(usuarioActual());

    // Agrupar por módulo.
    var porModulo = {};
    lecciones.forEach(function (l) {
      var dir = l.ruta.split("/")[1];
      (porModulo[dir] = porModulo[dir] || []).push(l);
    });

    var totalHechas = lecciones.filter(function (l) {
      return progreso[l.ruta];
    }).length;
    var pct = lecciones.length
      ? Math.round((100 * totalHechas) / lecciones.length)
      : 0;

    // El enlace al registro de accesos solo se pinta para el administrador
    // (Manolo); el endpoint /admin/accesos lo verifica además en servidor.
    var enlaceAdmin =
      usuarioActual() === "manolo"
        ? ' · <a href="/admin/accesos">Registro de accesos</a>'
        : "";

    var html =
      '<div class="cc-resumen-cabecera">' +
      "<h2>Avance de " + usuario + "</h2>" +
      "<p><strong>" + totalHechas + " de " + lecciones.length +
      "</strong> lecciones publicadas completadas (" + pct + " %)." +
      ' · <a href="/salir">Cerrar sesión</a>' + enlaceAdmin + "</p>" +
      '<div class="cc-barra"><div class="cc-barra-relleno" style="width:' +
      pct + '%"></div></div>' +
      "</div>";

    Object.keys(porModulo)
      .sort()
      .forEach(function (dir) {
        var filas = porModulo[dir];
        var hechas = filas.filter(function (l) {
          return progreso[l.ruta];
        }).length;
        html +=
          "<h3>" + (MODULOS[dir] || dir) +
          ' <span class="cc-contador">' + hechas + "/" + filas.length +
          "</span></h3><ul class=\"cc-lista\">";
        filas.forEach(function (l) {
          var fecha = progreso[l.ruta];
          html +=
            "<li>" + (fecha ? "✅" : "⚪") +
            ' <a href="/' + l.ruta + '">' + l.titulo + "</a>" +
            (fecha ? ' <span class="cc-fecha">' + fecha + "</span>" : "") +
            "</li>";
        });
        html += "</ul>";
      });

    html +=
      '<p class="cc-nota">El avance se guarda en este navegador y por usuario. ' +
      "Si entras desde otro dispositivo, allí verás el avance que marques en él.</p>";

    contenedor.innerHTML = html;
  }

  /* ---------------- Estilos ---------------- */

  function inyectarEstilos() {
    var css =
      ".cc-progreso-caja{display:flex;align-items:center;gap:.8em;margin:.6em 0 1.2em;flex-wrap:wrap}" +
      ".cc-progreso-boton{border:1.5px solid var(--md-primary-fg-color);background:transparent;color:var(--md-primary-fg-color);border-radius:2em;padding:.35em 1em;font:inherit;font-size:.75em;font-weight:600;cursor:pointer}" +
      ".cc-progreso-boton.completada{background:var(--md-primary-fg-color);color:var(--md-primary-bg-color)}" +
      ".cc-progreso-usuario{font-size:.7em;color:var(--md-default-fg-color--light)}" +
      ".cc-barra{height:.5em;border-radius:.25em;background:var(--md-default-fg-color--lightest);overflow:hidden;margin:.8em 0 1.5em}" +
      ".cc-barra-relleno{height:100%;background:var(--md-primary-fg-color)}" +
      ".cc-contador{font-size:.7em;font-weight:400;color:var(--md-default-fg-color--light)}" +
      ".cc-lista{list-style:none;padding-left:0}" +
      ".cc-lista li{margin:.25em 0}" +
      ".cc-fecha{font-size:.75em;color:var(--md-default-fg-color--light)}" +
      ".cc-nota{font-size:.75em;color:var(--md-default-fg-color--light);margin-top:2em}";
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ---------------- Arranque ---------------- */

  function iniciar() {
    inyectarEstilos();
    var leccion = leccionActual();
    if (leccion) montarBoton(leccion);
    var app = document.getElementById("progreso-app");
    if (app) montarResumen(app);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
