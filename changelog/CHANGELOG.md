# Changelog del curso

Registro de cambios del repositorio. Formato basado en [Keep a Changelog](https://keepachangelog.com/es/) adaptado a un curso vivo.

Tipos de entrada:
- `Añadido` — contenido o recursos nuevos.
- `Actualizado` — contenido existente modificado.
- `Obsoleto` — marcado como desfasado (NO borrado).
- `Corregido` — correcciones puntuales.
- `Eliminado` — solo para casos excepcionales; normalmente se marca `Obsoleto`.

---

## 2026-04-24 — Publicación del curso como sitio web

### Añadido
- `mkdocs.yml` — configuración de [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) en español, con búsqueda, modo oscuro y navegación completa por los 14 módulos.
- `requirements.txt` — dependencia `mkdocs-material`.
- `docs/` — carpeta con enlaces simbólicos al contenido real (sin duplicar ficheros). **No editar directamente.**
- `.github/workflows/deploy.yml` — despliegue automático a GitHub Pages en cada push a `main`.
- `.gitignore` — excluye `site/`, macOS y overrides locales.
- Repo publicado en https://github.com/mafernandez-create/curso-claude.
- Sitio en vivo: https://mafernandez-create.github.io/curso-claude/.

### Actualizado
- `README.md` — instrucciones para consultar el curso online y localmente con `mkdocs serve`.

---

## 2026-04-23 — Primera lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/01-que-es-un-llm.md` — lección inicial sobre qué es un LLM y cómo funciona a grandes rasgos (predicción de siguiente token, parámetros/datos/cómputo, qué NO hace un LLM). Incluye ejercicio de divulgación a público no técnico. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 01 pasa de `pendiente` a `borrador` y se enlaza.

---

## 2026-04-23 — Ficha detallada de repositorios GitHub

### Añadido
- `recursos/github-repositorios.md` — archivo dedicado con reseñas de los 7 repos oficiales de Anthropic y las 8 listas awesome principales de la comunidad. Separa oficiales de comunidad y propone orden de exploración.

### Actualizado
- `README.md` — índice de recursos ahora incluye el nuevo archivo.
- `CLAUDE.md` — estructura del repo descrita incluye el nuevo archivo.

---

## 2026-04-23 — Creación del proyecto

### Añadido
- Estructura inicial del repositorio (CLAUDE.md, README, plan de estudio).
- Catálogo inicial de 52 recursos en `recursos/enlaces.yaml`.
- Archivos temáticos: cursos externos, libros, newsletters, creadores en español, papers, comunidades.
- 14 módulos con sus respectivos README y plan de lecciones.
- Plantillas: lección, nota técnica, resumen de paper, proyecto práctico.
- Skills personalizadas para Claude Code: `actualizar-recursos`, `generar-leccion`, `resumir-paper`.
- Comandos slash: `/verificar-enlaces`, `/resumen-semanal`, `/nuevo-modulo`.

### Modelo de referencia inicial
- Claude Opus 4.7 (vigente a fecha de creación).

---

<!--
Plantilla para añadir nuevas entradas:

## YYYY-MM-DD — [título opcional del bloque]

### Añadido
- ...

### Actualizado
- ...

### Obsoleto
- ...

### Corregido
- ...
-->
