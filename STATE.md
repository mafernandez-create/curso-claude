# STATE.md — curso-claude

> El agente olvida; este archivo no. Actualízalo al final de cada sesión.

## Última ejecución

2026-08-08 · Incorporado todo el material pendiente de julio y completado el curso: 161/161 lecciones redactadas (borrador). Fusionado el PR #5 a `main`.

## En curso

- Nada abierto. El curso está completo en borrador; el siguiente ciclo natural es que Manolo **estudie y suba lecciones de `borrador` a `revisado`** a medida que las valida.

## Completado recientemente

- **Novedades de julio (3 informes, cerrados)** → release de Sonnet 5 aplicado a los módulos 01/05/07 (con corrección de dos errores factuales: Fable 5/Mythos 5 ya restaurados y asimétricamente; parámetros de sampling no "eliminados" sino no ajustables), 4 episodios de podcast enlazados, y Claude for Teachers en el módulo 12 como referencia de diseño (no disponible en España).
- **Corregido el esquema de IDs de modelo** en `01/07`: los alias `-latest` no existen; desde la 4.6 el ID sin fecha ya es snapshot fijo.
- **Redactadas las 7 lecciones que faltaban** (módulo 00 completo + módulo 02 lecciones 05–08). El curso queda completo en borrador.
- **`progreso.md` reparado**: llevaba desde el 29 abr marcando como "sin redactar" lecciones que existían desde mayo.
- **Higiene del repo**: `trusted-sources.md` versionado, `.claude/settings.json` a `.gitignore`, borrados `AGENTS.md` y `.agents/` (copias corruptas Claude→Codex).

## Escalado a humanos

- **Confirmación de contenido:** por diseño, aplicar novedades al curso lo aprueba solo Manolo. No hay nada esperando ahora mismo.
- **Decisiones abiertas (del `CLAUDE.md` raíz, no de este proyecto):** consolidar `curso-claude` vs `curso-claude-app`; consolidar el `placsp` duplicado.
- **Del informe del 20 jul quedan sin aplicar** (opcionales): reflexión sobre el uso (M04), valores por idioma (M05), papers J-space y GRAM (M13), y cambios menores de API.

## Lecciones aprendidas (aquí, no en el chat)

- 2026-08-08 · **Verificar la fuente no es verificar lo escrito.** Al aplicar el informe de Sonnet 5, las fuentes salieron 41/41 pero una segunda pasada de `verificador-resultados` sobre el propio diff encontró 10 afirmaciones contradichas (unas introducidas al redactar, otras preexistentes). Desde entonces: tras editar contenido, pasar el `git diff` por el verificador antes de cerrar.
- 2026-08-08 · **`gh pr merge --delete-branch` puede fallar el paso local** si hay archivos sin trackear que colisionan con el merge, dejando el working tree en un estado confuso aunque el merge remoto haya ido bien. Comprobar `origin/main` antes de asustarse; sincronizar con `git merge --ff-only` tras resolver la colisión.
- 2026-08-08 · **`docs/` sirve el sitio vía symlinks** a las carpetas de la raíz (`docs/modulos -> ../modulos`, etc.). Editar en la raíz es correcto; no existe copia duplicada que sincronizar.
