// hypothesis-config.js — Configuración del cliente de Hypothes.is.
//
// Se carga ANTES de embed.js (orden controlado en mkdocs.yml) para que la
// función global `hypothesisConfig` exista cuando el embed la consulte.
//
// Efecto: al abrir el sidebar, el desplegable de grupos aparece ya
// enfocado en el grupo privado del curso, no en "Public". Reduce la
// probabilidad de anotar públicamente por error.
//
// IMPORTANTE: el `focus.group` de abajo es un PLACEHOLDER. Reemplázalo por
// el ID real del grupo privado de Hypothes.is una vez creado.
//
// Cómo obtener el ID:
//   1. Ir a https://hypothes.is/groups/new y crear un grupo privado.
//   2. Tras crearlo, la URL es https://hypothes.is/groups/<GRUPO_ID>/<slug>.
//   3. Copiar el segmento <GRUPO_ID> (suele tener 8 caracteres alfanuméricos).
//   4. Reemplazar la cadena __GRUPO_PRIVADO_PENDIENTE__ aquí abajo.

window.hypothesisConfig = function () {
  return {
    // Grupo en el que se enfoca el sidebar al abrirse.
    // Mientras el placeholder esté presente, el sidebar se abre en "Public"
    // y conviene NO anotar hasta haberlo reemplazado.
    focus: {
      group: "__GRUPO_PRIVADO_PENDIENTE__"
    },
    // Marca de aplicación que aparece en algunas vistas de Hypothes.is.
    appType: "via"
  };
};
