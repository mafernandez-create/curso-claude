# Changelog del curso

Registro de cambios del repositorio. Formato basado en [Keep a Changelog](https://keepachangelog.com/es/) adaptado a un curso vivo.

Tipos de entrada:
- `Añadido` — contenido o recursos nuevos.
- `Actualizado` — contenido existente modificado.
- `Obsoleto` — marcado como desfasado (NO borrado).
- `Corregido` — correcciones puntuales.
- `Eliminado` — solo para casos excepcionales; normalmente se marca `Obsoleto`.

---

## 2026-06-14 — Módulo 08 (MCP): 15 lecciones redactadas

### Añadido
- `modulos/08-mcp/` — las 15 lecciones del módulo, en borrador: qué resuelve MCP, arquitectura cliente/servidor/transports, los tres primitivos (Tools/Resources/Prompts), probar y construir servidores, definir tools, resources, prompts, sampling, notifications, transports, seguridad/control de acceso, integración con Claude, ecosistema de la comunidad y buenas prácticas.

### Actualizado
- `modulos/08-mcp/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado` (detalles del SDK MCP volátiles; remitidos a la spec oficial).

---

## 2026-06-14 — Módulo 07 (API de Claude): 17 lecciones redactadas

### Añadido
- `modulos/07-api-claude/` — las 17 lecciones del módulo, en borrador: arquitectura de la API, SDKs Python/TS, system y parámetros, streaming, tool use (fundamentos y avanzado), visión, PDFs, prompt caching, batch, razonamiento, RAG, embeddings/vectoriales, errores/rate limits, monitorización y costes. Con ejemplos de código del SDK.

### Actualizado (importante)
- Lección 04: los parámetros de sampling (`temperature`/`top_p`/`top_k`) se eliminaron en los modelos actuales (dan 400); se guía con prompting.
- Lección 12: `budget_tokens` sustituido por `thinking: {type:"adaptive"}` + `effort`.
- `modulos/07-api-claude/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 06 (Claude Code): 15 lecciones redactadas

### Añadido
- `modulos/06-claude-code/` — las 15 lecciones del módulo, en borrador: qué es y cuándo usarlo, instalación, primera sesión, CLAUDE.md, permisos, plan mode, comandos slash, hooks, integración IDE, GitHub, higiene de Git con IA, repos grandes/contexto, costes, patrones/antipatrones y uso en equipo.

### Actualizado
- `modulos/06-claude-code/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado` (detalles de producto/CLI volátiles; remitidos a docs oficiales).

---

## 2026-06-14 — Módulo 05 (Prompt Engineering): 13 lecciones redactadas

### Añadido
- `modulos/05-prompt-engineering/` — las 13 lecciones del módulo, en borrador: anatomía del prompt, claridad/contexto/formato, system vs. user, few-shot, chain-of-thought, XML tags, role prompting, formato de salida, razonamiento del modelo, prompt caching, evaluación, antipatrones y debugging.

### Actualizado (importante)
- Lección 08 reescrita: el **prefill** está obsoleto en los modelos actuales (da error); se enseña la alternativa vigente (instrucciones + structured outputs).
- Lección 09 reescrita: **adaptive thinking + effort** sustituyen al antiguo `budget_tokens`.
- `modulos/05-prompt-engineering/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 04 (Productividad): 11 lecciones redactadas

### Añadido
- `modulos/04-productividad/` — las 11 lecciones del módulo, en borrador: IA como colaborador, diseño de workflows, Cowork, navegador (Chrome), Excel, Word/PowerPoint, Slack, plugins y tareas programadas, escribir mejor, análisis de documentos/PDF y biblioteca de prompts. Estructura según plantilla; datos de producto volátiles remitidos a docs oficiales.

### Actualizado
- `modulos/04-productividad/README.md` — las 11 lecciones pasan de `pendiente` a `borrador` y se enlazan.
- Contenido sincronizado a la app Next.js (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 03 (Claude básico): 10 lecciones redactadas

### Añadido
- `modulos/03-claude-basico/` — las 10 lecciones del módulo, en borrador: interfaz (web/desktop/móvil), conversaciones vs. Projects, Artefactos, Skills de oficina, modo Investigación, conectores, memoria de conversaciones, estilos personalizados, planes y límites de uso. Estructura según la plantilla del curso; datos volátiles (precios, límites) sin cifras concretas, remitiendo a la web oficial.

### Actualizado
- `modulos/03-claude-basico/README.md` — las 10 lecciones pasan de `pendiente` a `borrador` y se enlazan.
- Contenido sincronizado a la app Next.js (base de datos Supabase) vía `extraer-contenido` + `seed`.

### Pendiente de confirmación
- Revisión de Manolo antes de marcar las lecciones como `revisado` (las features de producto cambian; conviene contrastar con docs.claude.com actuales).

---

## 2026-06-12 — Registro de accesos visible solo para Manolo

### Añadido
- `wrangler.toml` — binding del namespace KV `CURSO_KV` (id `61fe6c03…`) para persistir el registro de accesos.
- `functions/_middleware.js` — registro de eventos por usuario en KV: cada **inicio de sesión** y, como máximo una vez por hora, un evento de **actividad** (con fecha, dispositivo aproximado, IP y país). Nuevo panel **`/admin/accesos`** que muestra las conexiones y accesos de Javier; solo accesible con la sesión del administrador (`AUTH_ADMIN`, por defecto `manolo`) — cualquier otro usuario recibe 403. Se conservan los últimos 200 eventos por usuario y el registro nunca interrumpe la navegación si KV no está disponible.
- `assets/progreso.js` — enlace "Registro de accesos" en la página "Mi progreso", visible únicamente cuando la sesión es de Manolo (la restricción real la impone el servidor).

---

## 2026-06-12 — Acceso multiusuario, progreso individual y podcasts en español

### Añadido
- `functions/_middleware.js` reescrito: el Basic Auth de usuario único se sustituye por una **pantalla de login propia** con sesión por cookie firmada (HMAC-SHA256, 30 días) y soporte para **varios usuarios** (Javier y Manolo). Credenciales en la variable de entorno `AUTH_USERS` de Cloudflare Pages (formato `usuario:contraseña;usuario:contraseña`) más un `AUTH_SECRET` para firmar cookies. Nuevas rutas `/acceso` (login) y `/salir` (logout). Las contraseñas **no** se guardan en el repositorio.
- `assets/progreso.js` — **historial de avance por usuario**: botón "Marcar como completada" en cada lección y resumen por módulos en la nueva página "Mi progreso". El avance se guarda en localStorage, con clave separada por usuario (cookie `curso_user` que deja el middleware). La lista de lecciones se deriva del índice de búsqueda de MkDocs, sin manifiesto manual. Limitación documentada: el almacenamiento es por navegador/dispositivo (sin sincronización entre iPhone y ordenador); el plan B si hiciera falta es Cloudflare KV.
- `mi-progreso.md` (+ symlink en `docs/`) — página "Mi progreso" añadida a la navegación.
- Recursos nuevos en `recursos/enlaces.yaml` (catálogo pasa de 64 a 66): `podcast-el-test-de-turing` (El Test de Turing — IA aplicada a negocio) y `podcast-ia-pocho-costa` (Inteligencia Artificial, de Pocho Costa). URLs verificadas el 2026-06-12.

### Actualizado
- `recursos/creadores-espanol.md` — nueva sección "Podcasts" con fichas de ambos.
- `modulos/01-fundamentos-ia/README.md` y `modulos/04-productividad/README.md` — los dos podcasts enlazados como contenido extra en español en "Recursos clave".
- `mkdocs.yml` — carga `assets/progreso.js` y añade "Mi progreso" a la navegación.

### Notas
- En Cloudflare Pages hay que definir `AUTH_USERS` y `AUTH_SECRET` y eliminar las antiguas `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` (el middleware falla cerrado si faltan las nuevas).

---

## 2026-05-09 — Módulo 02 (AI Fluency): primeras 4 lecciones

### Añadido
- `modulos/02-ai-fluency/01-que-es-alfabetizacion-ia.md` — definición operativa de alfabetización IA, diferencias con tech literacy clásica, por qué importa ahora, las 4 D como avance, señales de infra/sobre-alfabetización. Incluye autoevaluación inicial (1–5) en las cuatro dimensiones.
- `modulos/02-ai-fluency/02-framework-4-dimensiones.md` — presentación detallada del framework: Delegación, Descripción, Discernimiento, Diligencia. Por qué son cuatro y no tres ni cinco, cómo diagnosticar qué dimensión falla en una interacción concreta, cómo encaja con otros frameworks de prompting.
- `modulos/02-ai-fluency/03-delegacion.md` — espectro de cinco niveles de autonomía (de 0 sin IA a 5 totalmente autónoma), tres heurísticas (coste manual, coste de error, criterio humano), patrones de buena y mala delegación, distinción crítica entre delegar tarea y delegar responsabilidad.
- `modulos/02-ai-fluency/04-descripcion.md` — cinco componentes esenciales del prompt (contexto, tarea, restricciones, ejemplos, cláusula de incertidumbre), antes/después comparado, iterar prompt vs iterar conversación, rol explícito y formato exacto.

### Actualizado
- `modulos/02-ai-fluency/README.md` — lecciones 01–04 pasan de `pendiente` a `borrador` y se enlazan.
- `mkdocs.yml` — Módulo 02 ahora tiene sub-navegación con sus cuatro primeras lecciones, igual estructura que Módulo 01.

### Pendiente
- Lecciones 05–08 del módulo 02 (Discernimiento, Diligencia, errores típicos, casos aplicados). Se redactarán cuando el lector retome.

---

## 2026-05-09 — Novena lección del Módulo 01 (módulo completo en borrador)

### Añadido
- `modulos/01-fundamentos-ia/09-cuando-no-usar-llm.md` — lección de cierre del módulo. Plantea el problema del péndulo (sobreuso/infrauso), siete categorías donde un LLM es la herramienta equivocada (precisión absoluta, reproducibilidad estricta, criticidad sin verificación, herramienta especializada superior, dependencia de información actual, coste de prompt > coste manual, ground truth verificable), tres heurísticas rápidas de decisión, contraste con patrones donde sí brilla, y enlaza con la entrega del módulo. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 09 pasa de `pendiente` a `borrador` y se enlaza. Cabecera marca el módulo como "completo en borrador".
- `mkdocs.yml` — añadida la lección 09 a la navegación del Módulo 01.

### Notas
- El **Módulo 01 — Fundamentos de IA y LLMs** queda con sus 9 lecciones redactadas en estado `borrador`. Entrega del módulo (ensayo de 500–800 palabras) sigue pendiente del lector.

---

## 2026-05-09 — Octava lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/08-limitaciones-llm.md` — lección sobre las tres limitaciones canónicas (alucinación, cutoff, sesgo) más cuatro secundarias importantes (ventana de contexto/lost-in-the-middle, aritmética, long tail, no-determinismo, sensibilidad al fraseo, privacidad). Para cada una: qué es, por qué pasa, cómo se manifiesta, mitigaciones reales y mitigaciones que no funcionan. Cierra con regla operativa "borrador sí, decisión final no" y lista de tareas que nunca delegar sin verificación. Ejercicio: diseñar un mini-protocolo de uso para una pregunta concreta del lector. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 08 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 08 a la navegación del Módulo 01.

---

## 2026-05-09 — Séptima lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/07-versiones-modelos.md` — lección breve sobre cómo leer un identificador de modelo Claude (familia + generación major.minor + snapshot YYYYMMDD), distinción entre alias (`-latest`) y snapshot fijo, ciclo de vida de un modelo y advertencias para producción. Incluye ejercicio de ir a docs.claude.com y copiar IDs vigentes. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 07 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 07 a la navegación del Módulo 01.

---

## 2026-05-09 — Sexta lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/06-familia-modelos-claude.md` — lección sobre los tres tamaños (Opus, Sonnet, Haiku) dentro de cada generación: por qué tres y no uno, caracterización de cada uno por capacidad/latencia/coste, heurística práctica de elección (empezar por Sonnet), patrones de combinación (router, cascada, pre/post-procesado), y advertencia clave: el Sonnet de la generación N suele igualar al Opus de la N–1. Incluye ejercicio con tabla volumen/coste-de-error/latencia para tres tareas reales del lector. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 06 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 06 a la navegación del Módulo 01.

---

## 2026-05-09 — Quinta lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/05-historia-anthropic.md` — lección contextual sobre Anthropic: origen (salida de OpenAI en 2021, equipo fundador con los Amodei, Tom Brown, Jack Clark, Jared Kaplan, Chris Olah), forma jurídica PBC, cronología de modelos Claude (1 → 4.7), financiación (Amazon y Google como inversores principales), posicionamiento frente a competidores (OpenAI, Google DeepMind, Meta, Mistral/xAI), decisiones distintivas (closed weights, foco enterprise, multi-cloud, Responsible Scaling Policy) y críticas habituales. Incluye ejercicio de lectura crítica del RSP. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 05 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 05 a la navegación del Módulo 01.

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
