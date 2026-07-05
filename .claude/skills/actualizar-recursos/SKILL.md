---
name: actualizar-recursos
description: >
  Escanea las novedades oficiales de Anthropic (news, research, docs) y propone
  qué incorporar al curso, dejando un informe en changelog/novedades-YYYY-MM-DD.md.
  Úsala cuando Manolo diga "actualiza el curso con lo nuevo", "¿qué novedades hay?"
  o cuando la corra la rutina semanal programada. NO aplica cambios al contenido:
  solo propone; el visto bueno lo da Manolo.
---

# Skill: actualizar-recursos

> Genera el informe de novedades del curso. **No toca el contenido del curso.**
> Separa generación (esta skill) de aprobación (Manolo). Fuente de la regla:
> `CLAUDE.md` → "Cuando yo te pida 'actualiza el curso con lo nuevo'".

## Cuándo se dispara

- Manolo lo pide explícitamente ("actualiza el curso con lo nuevo", "¿qué hay nuevo de Anthropic?").
- La rutina semanal programada (launchd/cron) la invoca de forma desatendida.

## Qué produce (definición de "hecho")

Un archivo `changelog/novedades-YYYY-MM-DD.md` (fecha de hoy en ISO) con:

1. Cabecera con estado `PENDIENTE DE CONFIRMAR` (Manolo lo cambia al revisarlo).
2. Una sección por novedad, cada una con: **Resumen** (parafraseado, sin citas >15
   palabras), **Fuente** (URL oficial + fecha de consulta) y **Encaja en:** (módulo/s
   del curso donde iría).
3. Una nota final recordando que **nada se aplica al curso hasta el visto bueno de Manolo**.

Y, si el envío por correo está configurado (ver más abajo), el digest de ese informe
llega al buzón de Manolo.

## Procedimiento

1. **Lee el estado previo.** Mira el último `changelog/novedades-*.md`: si tiene
   propuestas sin confirmar, NO las repitas; este informe solo recoge lo nuevo desde
   entonces (respeta el patrón de los informes existentes).
2. **Escanea las fuentes oficiales** (preferir Anthropic sobre fuentes secundarias):
   - `https://www.anthropic.com/news` — novedades de producto y modelos.
   - `https://www.anthropic.com/research` — investigación.
   - `https://docs.claude.com/` y sus *release notes* — cambios en la documentación/API.
   Usa WebSearch/WebFetch. Registra fecha de consulta.
3. **Filtra por relevancia para el curso.** Para cada novedad, decide si aporta a algún
   módulo (00–13). Descarta ruido de marketing. Ante la duda, inclúyela marcada como
   "relevancia por confirmar".
4. **Contrasta con lo que ya hay.** Consulta `recursos/enlaces.yaml` para no proponer
   recursos ya catalogados y para enlazar correctamente.
5. **VERIFICA antes de proponer.** Toda afirmación con datos (versiones de modelo,
   benchmarks, fechas, precios, features) pasa por el subagente `verificador-resultados`.
   Resuelve o marca explícitamente todo lo que quede como CONTRADICTED / NOT CONFIRMED.
   No propongas como cierto nada sin verificar (principio de honestidad epistémica).
6. **Redacta** `changelog/novedades-YYYY-MM-DD.md` con el formato descrito arriba,
   imitando la estructura de los informes previos.
7. **Envía el digest** (opcional, si hay SMTP configurado):
   `python3 scripts/enviar-digest.py changelog/novedades-YYYY-MM-DD.md`
   El script envía por correo o, si no hay credenciales, avisa y no falla.
8. **NO edites** módulos, README de módulos ni `enlaces.yaml`. Eso se hace en un paso
   posterior, solo tras el visto bueno de Manolo.

## Qué NO hacer

- ❌ No aplicar propuestas al contenido del curso (eso lo confirma Manolo).
- ❌ No inventar features/benchmarks/versiones: si no está verificado, se marca como tal.
- ❌ No reproducir texto literal largo de las fuentes (máx. 15 palabras por cita).
- ❌ No repetir propuestas de informes anteriores aún sin confirmar.

## Fuentes de las reglas
- `CLAUDE.md` del proyecto (secciones "actualiza el curso con lo nuevo" y "Principios de contenido").
- `~/.claude/CLAUDE.md` (regla global de verificación con `verificador-resultados`).
