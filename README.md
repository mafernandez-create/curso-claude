# Mi Curso de Claude — Formación completa y viva

> Base de conocimiento personal sobre Claude (Anthropic) diseñada para crecer contigo y mantenerse actualizada en el tiempo.

**Última revisión del índice:** 2026-04-24
**Modelo de referencia actual:** Claude Opus 4.7
**Sitio web del curso (privado):** https://curso-claude.pages.dev/

---

## Ver el curso como sitio web

El curso se publica como sitio estático generado con [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) y alojado en **Cloudflare Pages**. Está protegido con **HTTP Basic Auth** (usuario + contraseña) — solo tú entras.

- **Online (privado):** https://curso-claude.pages.dev/ — al abrirlo el navegador te pedirá usuario y contraseña.
  - Usuario: `villabotijo`
  - Contraseña: guardada en tu gestor de contraseñas. Si la pierdes, se rota desde el dashboard de Cloudflare Pages → Settings → Variables and Secrets → `BASIC_AUTH_PASS`.
- **Local (sin auth):** desde la raíz del repo, ejecuta:
  ```bash
  pip3 install --user -r requirements.txt   # primera vez
  python3 -m mkdocs serve                   # abre http://localhost:8000
  ```
  Cualquier cambio en los `.md` se refleja en caliente.

Cada `git push` a `main` dispara un deploy automático en Cloudflare Pages (tarda ~90 segundos).

Los contenidos siguen siendo Markdown editable en `modulos/`, `recursos/`, etc. La carpeta `docs/` solo contiene enlaces simbólicos para que MkDocs los encuentre; **no edites nada dentro de `docs/`**. La carpeta `functions/` contiene la middleware de Basic Auth que Cloudflare Pages ejecuta en cada petición.

---

## Cómo usar este repositorio

Este proyecto está pensado para abrirse con **Claude Code** en la raíz. El fichero `CLAUDE.md` contiene las instrucciones maestras que Claude lee al iniciar cada sesión. A partir de ahí, puedes:

- **Estudiar** siguiendo el orden propuesto en [plan-de-estudio.md](./plan-de-estudio.md).
- **Consultar recursos** en la carpeta [recursos/](./recursos/).
- **Generar contenido nuevo** pidiéndole a Claude Code que redacte lecciones concretas.
- **Mantenerlo actualizado** invocando las skills de `.claude/skills/`.

## Arranque rápido

1. Clona o descomprime este repositorio en tu máquina.
2. Abre la carpeta raíz con Claude Code (`claude` desde la terminal dentro del directorio).
3. Pregúntale: *"¿Por dónde empiezo según el plan de estudio?"*
4. Claude leerá `CLAUDE.md` y `plan-de-estudio.md` y te orientará.

## Índice de módulos

| Nº | Módulo | Eje | Estado inicial |
|----|--------|-----|----------------|
| 00 | [Guía del proyecto](./modulos/00-guia-proyecto/) | Meta | Plan definido |
| 01 | [Fundamentos de IA y LLMs](./modulos/01-fundamentos-ia/) | Base | Plan definido |
| 02 | [AI Fluency: alfabetización IA](./modulos/02-ai-fluency/) | Base | Plan definido |
| 03 | [Claude como usuario: interfaz y features](./modulos/03-claude-basico/) | Usuario | Plan definido |
| 04 | [Productividad con Claude](./modulos/04-productividad/) | Usuario | Plan definido |
| 05 | [Prompt Engineering avanzado](./modulos/05-prompt-engineering/) | Transversal | Plan definido |
| 06 | [Claude Code](./modulos/06-claude-code/) | Dev | Plan definido |
| 07 | [API de Claude](./modulos/07-api-claude/) | Dev | Plan definido |
| 08 | [Model Context Protocol (MCP)](./modulos/08-mcp/) | Dev | Plan definido |
| 09 | [Skills y subagentes](./modulos/09-skills-agentes/) | Dev | Plan definido |
| 10 | [Claude en AWS Bedrock y Google Vertex AI](./modulos/10-cloud/) | Dev | Plan definido |
| 11 | [Casos prácticos avanzados](./modulos/11-casos-avanzados/) | Integración | Plan definido |
| 12 | [Formación y docencia](./modulos/12-formacion-docencia/) | Formador | Plan definido |
| 13 | [Seguridad, ética y alineación](./modulos/13-seguridad-etica/) | Transversal | Plan definido |

> El estado "Plan definido" significa que el módulo tiene objetivos, temas y recursos asignados, pero las lecciones concretas se redactarán progresivamente según el avance del estudio.

## Recursos catalogados

Ver la carpeta [recursos/](./recursos/) para el catálogo completo:

- **[enlaces.yaml](./recursos/enlaces.yaml)** — Base de datos principal (fuente de verdad).
- [cursos-externos.md](./recursos/cursos-externos.md)
- [libros.md](./recursos/libros.md)
- [github-repositorios.md](./recursos/github-repositorios.md)
- [newsletters.md](./recursos/newsletters.md)
- [creadores-espanol.md](./recursos/creadores-espanol.md)
- [papers-investigacion.md](./recursos/papers-investigacion.md)
- [comunidades.md](./recursos/comunidades.md)

## Skills y comandos disponibles

En `.claude/`:
- **Skills**: `actualizar-recursos`, `generar-leccion`, `resumir-paper`.
- **Comandos slash**: `/verificar-enlaces`, `/resumen-semanal`, `/nuevo-modulo`.

Consulta sus ficheros individuales para ver cuándo y cómo se usan.

## Plan de mantenimiento

El curso se mantiene vivo con estas rutinas:

- **Semanal (5 min)**: `/resumen-semanal` para captar novedades de Anthropic.
- **Mensual (15 min)**: `/verificar-enlaces` para detectar URLs rotas.
- **Trimestral (1 h)**: revisión de módulos completos, marcando como `obsoleto` lo desfasado.
- **Tras cada release mayor de Claude**: revisión de los módulos 03, 05, 06 y 07.

## Registro de cambios

Ver [changelog/CHANGELOG.md](./changelog/CHANGELOG.md).

---

## Licencia y uso

Este repositorio es una **base de conocimiento personal**. El contenido original (lecciones, notas, plan de estudio) es libre para tu uso privado. Los recursos externos referenciados están sujetos a sus propias licencias y condiciones.
