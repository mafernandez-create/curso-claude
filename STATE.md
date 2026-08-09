# STATE.md — curso-claude

> El agente olvida; este archivo no. Actualízalo al final de cada sesión.

## Última ejecución

2026-08-09 · Creada la rutina cloud que envía una lección cada dos días. Queda **desactivada** a la espera de que Manolo pegue la API key (ver abajo).

2026-08-08 · Completado el curso (161/161, borrador) y fusionado el PR #5. Construido y probado el script de envío de lecciones por correo, para poder estudiar desde el iPhone sin encender el Mac.

## En curso

**Envío de una lección por correo cada dos días — a medio montar.**

- ✅ Hecho: `scripts/enviar-leccion.py`. Elige la lección **por fecha y sin guardar estado**
  (`índice = días transcurridos ÷ 2`; si no toca, sale sin enviar), convierte el Markdown a
  HTML legible en móvil (con los colores del Kit de Estilo) y envía por **SMTP** (local) o
  **Resend** (pensado para la rutina cloud). Probado: la lección 1/161 llegó a
  villabotijo@gmail.com el 2026-08-08.
- ✅ Hecho: **rutina cloud creada** — `trig_01Wx398UDbyc57pGxxKrDZBL`,
  "Curso de Claude — una lección cada dos días (07:00)". Cron diario `0 5 * * *` (UTC);
  clona el repo público, ejecuta el script con `--desde 2026-08-08 --cada 2` y sale sin
  hacer nada los días que no tocan.
- 🔴 **DESACTIVADA a propósito** (`enabled: false`). Le falta la API key: el prompt lleva
  el marcador `PEGA_AQUI_LA_KEY`. Manolo debe sustituirlo por la clave de Resend y activar
  la rutina desde claude.ai → *Programado*. Se dejó así porque el clasificador de seguridad
  bloquea (con razón) que un agente escriba credenciales en la configuración.
- ⏸️ Pendiente de Manolo: **confirmar que se lee bien en el iPhone** (recibió la lección 1
  el 2026-08-08). Si hay que retocar el CSS, se toca el script y la rutina lo recoge sola,
  porque clona el repo en cada ejecución.
- Ritmo: 161 lecciones a una cada dos días ≈ **11 meses**. El orden es el natural del repo:
  módulo 00 (guía) → 01 → … → 13. Si Manolo prefiere arrancar en el 01, basta cambiar el
  `--desde` o saltar índices.
- ⚠️ El cron es UTC: `0 5` son las 07:00 en horario de verano y las **06:00 en invierno**.
  Afecta igual a las demás rutinas.

## Completado recientemente

- **Novedades de julio (3 informes, cerrados)** → release de Sonnet 5 aplicado a los módulos 01/05/07 (con corrección de dos errores factuales: Fable 5/Mythos 5 ya restaurados y asimétricamente; parámetros de sampling no "eliminados" sino no ajustables), 4 episodios de podcast enlazados, y Claude for Teachers en el módulo 12 como referencia de diseño (no disponible en España).
- **Corregido el esquema de IDs de modelo** en `01/07`: los alias `-latest` no existen; desde la 4.6 el ID sin fecha ya es snapshot fijo.
- **Redactadas las 7 lecciones que faltaban** (módulo 00 completo + módulo 02 lecciones 05–08). El curso queda completo en borrador.
- **`progreso.md` reparado**: llevaba desde el 29 abr marcando como "sin redactar" lecciones que existían desde mayo.
- **Higiene del repo**: `trusted-sources.md` versionado, `.claude/settings.json` a `.gitignore`, borrados `AGENTS.md` y `.agents/` (copias corruptas Claude→Codex).

## Escalado a humanos

- ⚠️ **Seguridad — la API key de Resend está en texto plano** dentro del prompt de varias
  rutinas cloud (Informe sectorial GPF, Informe diario de prensa, etc.). Se detectó el
  2026-08-08 al inspeccionarlas. Manolo decidió reutilizarla por ahora, pero **conviene
  rotarla** en resend.com y actualizar las rutinas que la usan. Pendiente.

- **Confirmación de contenido:** por diseño, aplicar novedades al curso lo aprueba solo Manolo. No hay nada esperando ahora mismo.
- **Decisiones abiertas (del `CLAUDE.md` raíz, no de este proyecto):** consolidar `curso-claude` vs `curso-claude-app`; consolidar el `placsp` duplicado.
- **Del informe del 20 jul quedan sin aplicar** (opcionales): reflexión sobre el uso (M04), valores por idioma (M05), papers J-space y GRAM (M13), y cambios menores de API.

## Lecciones aprendidas (aquí, no en el chat)

- 2026-08-08 · **Verificar la fuente no es verificar lo escrito.** Al aplicar el informe de Sonnet 5, las fuentes salieron 41/41 pero una segunda pasada de `verificador-resultados` sobre el propio diff encontró 10 afirmaciones contradichas (unas introducidas al redactar, otras preexistentes). Desde entonces: tras editar contenido, pasar el `git diff` por el verificador antes de cerrar.
- 2026-08-08 · **`gh pr merge --delete-branch` puede fallar el paso local** si hay archivos sin trackear que colisionan con el merge, dejando el working tree en un estado confuso aunque el merge remoto haya ido bien. Comprobar `origin/main` antes de asustarse; sincronizar con `git merge --ff-only` tras resolver la colisión.
- 2026-08-08 · **`docs/` sirve el sitio vía symlinks** a las carpetas de la raíz (`docs/modulos -> ../modulos`, etc.). Editar en la raíz es correcto; no existe copia duplicada que sincronizar.
