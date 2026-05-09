# Changelog del curso

Registro de cambios del repositorio. Formato basado en [Keep a Changelog](https://keepachangelog.com/es/) adaptado a un curso vivo.

Tipos de entrada:
- `Añadido` — contenido o recursos nuevos.
- `Actualizado` — contenido existente modificado.
- `Obsoleto` — marcado como desfasado (NO borrado).
- `Corregido` — correcciones puntuales.
- `Eliminado` — solo para casos excepcionales; normalmente se marca `Obsoleto`.

---

## 2026-05-09 — Cuarta lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/04-constitutional-ai.md` — lección sobre Constitutional AI: el problema que resuelve respecto al RLHF puro, las dos fases (SL con autocrítica + RL con RLAIF), qué es la "constitución" y de dónde salen sus principios, la variante Collective Constitutional AI, cómo se manifiesta en Claude y críticas legítimas (sesgo de redactores, opacidad de aplicación, sobre-rechazo, constitutional drift). Incluye ejercicio donde el lector escribe su propio principio y observa el trade-off útil/inofensivo. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 04 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 04 a la navegación del Módulo 01.

---

## 2026-05-09 — Hypothes.is: grupo privado configurado

### Actualizado
- `assets/hypothesis-config.js` — reemplazado el placeholder por el GRUPO_ID real (`GMWBEiXG`, grupo `curso-claude`). Al abrir el sidebar de Hypothes.is en cualquier lección, ya queda enfocado en el grupo privado en lugar de "Public".
- `README.md` — sección "Anotaciones" actualizada: el setup ya no incluye reemplazar placeholder; ahora solo pide cuenta + entrar al grupo privado.

---

## 2026-05-09 — Hypothes.is con grupo privado por defecto (pendiente de ID)

### Añadido
- `assets/hypothesis-config.js` — define `window.hypothesisConfig` con `focus.group` para que el sidebar de Hypothes.is se enfoque en un grupo privado del usuario al abrirse, en lugar del grupo "Public". Reduce el riesgo de anotar públicamente por error.
- `docs/assets` — symlink a `../assets` para que MkDocs sirva el archivo bajo `/assets/` en el sitio.

### Actualizado
- `mkdocs.yml` — `extra_javascript` ahora carga `assets/hypothesis-config.js` ANTES de `embed.js` (orden importa: el embed consulta `window.hypothesisConfig` al arrancar). Ambos scripts cargan síncronos para garantizar el orden.
- `README.md` — sección "Anotaciones" reescrita con el nuevo flujo: el setup ahora incluye reemplazar `__GRUPO_PRIVADO_PENDIENTE__` por el ID real del grupo privado.

### Pendiente
- **Reemplazar el placeholder `__GRUPO_PRIVADO_PENDIENTE__` en `assets/hypothesis-config.js`** por el ID real del grupo privado de Hypothes.is una vez creado. Hasta entonces, el sidebar arranca en "Public" y conviene no anotar.

---

## 2026-05-09 — Anotaciones inline con Hypothes.is

### Añadido
- `mkdocs.yml` — bloque `extra_javascript` que carga `https://hypothes.is/embed.js` (async). El sitio público muestra ahora el sidebar de Hypothes.is en cada página, permitiendo subrayar texto y dejar notas inline.
- `README.md` — sección **"Anotaciones (Hypothes.is)"** con setup paso a paso (cuenta + grupo privado obligatorio para mantener notas privadas), uso, alternativa con extensión de navegador y nota de privacidad sobre el JS de terceros.

### Actualizado
- `mkdocs.yml` — desactivada la feature `navigation.instant`. Es incompatible con la integración de Hypothes.is (los scripts de terceros que se enganchan al ciclo de vida de la página se rompen con la navegación tipo SPA). El coste es transiciones de página un pelín más lentas; el beneficio es que las anotaciones funcionan al cambiar de lección.

### Notas
- Las notas se guardan en servidores de Hypothes.is, no en este repo. Para mantenerlas privadas hay que crear y usar un grupo privado tras el registro; las anotaciones por defecto son públicas en el feed global.

---

## 2026-05-09 — Tercera lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/03-preentrenamiento-fine-tuning-rlhf.md` — lección sobre las tres fases del entrenamiento de un LLM moderno: preentrenamiento autosupervisado, fine-tuning supervisado (SFT / instruction tuning) y RLHF (modelo de recompensa + PPO). Incluye preludio a Constitutional AI y ejercicio comparativo de tres encuadres de prompt sobre la misma pregunta. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 03 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 03 a la navegación del Módulo 01.

---

## 2026-05-08 — Script de arranque local

### Añadido
- `iniciar-curso.sh` — script ejecutable en la raíz que comprueba dependencias, arranca el servidor MkDocs (`http://127.0.0.1:8000/`) y abre el navegador automáticamente. Avisa si el puerto 8000 ya está ocupado.

---

## 2026-05-08 — Segunda lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/02-arquitectura-transformer.md` — lección sobre la arquitectura Transformer con intuición sin matemáticas: del problema de las RNN al mecanismo de atención, multi-head, apilamiento de capas y por qué Claude es decoder-only. Incluye ejercicio sobre resolución de pronombres como ejemplo práctico de atención. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 02 pasa de `pendiente` a `borrador` y se enlaza.

---

## 2026-04-29 — Lecciones nuevas sobre GitHub en Módulos 06 y 09

### Añadido
- Módulo 06 — nueva lección 11: *"Higiene de Git con IA: ramas, PRs y revisión de diffs generados"* (35 min). Cubre el hueco práctico entre la integración Claude Code↔GitHub (lección 10) y el manejo de repos grandes (ahora 12). Las lecciones 11–14 se desplazan a 12–15.
- Módulo 09 — nueva lección 11: *"Publicar tu Skill (o MCP server) en GitHub: estructura del repo y descubribilidad"* (30 min). Apoya la entrega del módulo (*"una skill propia publicable"*). Las lecciones 11–14 se desplazan a 12–15.

### Actualizado
- `progreso.md` — contadores corregidos por módulo (el conteo previo era erróneo: solo capturaba lecciones 01–09 por una regex defectuosa). Total real: **161 lecciones planificadas** (no 118).

### Notas
- Los huecos quedan reservados con título y duración estimada; lecciones aún sin redactar (`📝`).

---

## 2026-04-29 — Sistema de seguimiento de progreso

### Añadido
- `progreso.md` — fuente única de verdad sobre mi avance: cabecera con próxima lección, mapa de los 14 módulos con contadores, detalle por lección del módulo activo, histórico de módulos completados.
- `bitacora.md` — diario libre para apuntes, dudas y conexiones por sesión.

### Actualizado
- `CLAUDE.md` — añadidas instrucciones para que Claude Code lea `progreso.md` al inicio de cada sesión y mantenga el archivo al día cuando le diga *"marca la lección X como completada"*.
- `mkdocs.yml` — `progreso.md` y `bitacora.md` quedan excluidos del sitio web (privados, solo en el repo).

---

## 2026-04-24 — Migración a Cloudflare Pages con protección Basic Auth

### Añadido
- `functions/_middleware.js` — middleware de Cloudflare Pages Functions que exige HTTP Basic Auth en cada petición. Credenciales almacenadas en variables de entorno (`BASIC_AUTH_USER` en plaintext, `BASIC_AUTH_PASS` como secret) configuradas en el dashboard de Cloudflare Pages.
- Proyecto `curso-claude` creado en Cloudflare Pages con auto-deploy desde el repo.
- Sitio privado en https://curso-claude.pages.dev/ (pide usuario y contraseña).

### Eliminado
- `.github/workflows/deploy.yml` — el deploy lo hace Cloudflare Pages directamente desde el repo; ya no necesitamos GitHub Actions.
- GitHub Pages del repo desactivado (la URL `https://mafernandez-create.github.io/curso-claude/` ya no sirve contenido).

### Actualizado
- `README.md` — reemplaza la URL pública de GitHub Pages por la URL privada de Cloudflare Pages, documenta usuario/contraseña y cómo rotarla.

### Notas
- Motivo del cambio: GitHub Pages sobre repo público no permite autenticación nativa. Cloudflare Pages con middleware de Basic Auth es 100 % gratis (sin tarjeta) y cumple la necesidad de "solo para mí".
- Zero Trust con One-Time PIN quedó descartado porque Cloudflare pide método de pago incluso en el plan Free.

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
