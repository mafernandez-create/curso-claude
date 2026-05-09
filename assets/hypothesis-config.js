// hypothesis-config.js — Configuración del cliente de Hypothes.is.
//
// Se carga ANTES de embed.js (orden controlado en mkdocs.yml) para que la
// función global `hypothesisConfig` exista cuando el embed la consulte.
//
// Efecto: al abrir el sidebar, el desplegable de grupos aparece ya
// enfocado en el grupo privado del curso, no en "Public". Reduce la
// probabilidad de anotar públicamente por error.
//
// Grupo privado vinculado:
//   https://hypothes.is/groups/GMWBEiXG/curso-claude
//
// Si en el futuro cambias de grupo, reemplaza el ID en `focus.group`
// por el segmento <GRUPO_ID> de la URL del nuevo grupo.

window.hypothesisConfig = function () {
  return {
    // Grupo en el que se enfoca el sidebar al abrirse.
    focus: {
      group: "GMWBEiXG"
    },
    // Marca de aplicación que aparece en algunas vistas de Hypothes.is.
    appType: "via"
  };
};
