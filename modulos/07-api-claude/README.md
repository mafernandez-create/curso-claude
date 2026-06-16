# Módulo 07 — API de Claude

**Eje:** Desarrollador
**Tiempo estimado:** 10–15 h
**Prerrequisitos:** Módulo 05 (prompting) y Python o TypeScript básico.
**Última actualización:** 2026-06-14 (módulo completo en borrador; L04 y L12 actualizadas al estado de 2026)

## Objetivo

Construir aplicaciones propias con la Claude API. Cubre desde la primera llamada hasta patrones de producción: tool use, streaming, RAG, caching, batch, gestión de errores. Al terminar debes ser capaz de construir un chatbot propio con RAG sobre tus documentos.

## Lecciones

| Nº | Título | Estado | Tiempo |
|----|--------|--------|--------|
| 01 | [Arquitectura de la Claude API: Messages, modelos, tokens](01-arquitectura-api.md) | borrador | 30 min |
| 02 | [Primeros pasos con el SDK de Python](02-sdk-python.md) | borrador | 30 min |
| 03 | [Primeros pasos con el SDK de TypeScript](03-sdk-typescript.md) | borrador | 30 min |
| 04 | [System prompts y parámetros de la petición](04-system-parametros.md) | borrador | 25 min |
| 05 | [Streaming de respuestas](05-streaming.md) | borrador | 25 min |
| 06 | [Tool use (function calling): fundamentos](06-tool-use-fundamentos.md) | borrador | 45 min |
| 07 | [Tool use avanzado: múltiples herramientas y bucle de agente](07-tool-use-avanzado.md) | borrador | 35 min |
| 08 | [Vision: procesar imágenes con Claude](08-vision.md) | borrador | 30 min |
| 09 | [Procesamiento de PDFs](09-pdfs.md) | borrador | 25 min |
| 10 | [Prompt caching en la API: casos y ahorros](10-prompt-caching-api.md) | borrador | 30 min |
| 11 | [Batch API: procesamiento masivo a bajo coste](11-batch-api.md) | borrador | 25 min |
| 12 | [Razonamiento en la API: adaptive thinking y effort](12-extended-thinking-api.md) | borrador | 25 min |
| 13 | [Construir un RAG básico: retrieval + generación](13-rag-basico.md) | borrador | 60 min |
| 14 | [Embeddings y bases vectoriales: visión general](14-embeddings-vectoriales.md) | borrador | 30 min |
| 15 | [Gestión de errores y rate limits](15-errores-rate-limits.md) | borrador | 25 min |
| 16 | [Monitorización y logging en producción](16-monitorizacion-logging.md) | borrador | 30 min |
| 17 | [Costes: cómo estimarlos y reducirlos](17-costes.md) | borrador | 25 min |

## Recursos clave

Del catálogo:
- `building-with-claude-api` ⭐ (curso oficial).
- `docs-claude` y `platform-claude-docs` — documentación.
- `claude-cookbooks` ⭐ — recetas ejecutables.
- `claude-quickstarts` — proyectos base.
- `anthropic-sdk-python` — SDK oficial.
- `book-prompt-eng-llms`, `book-ai-engineering` — libros.

## Entrega

Un **chatbot propio con RAG** sobre un corpus de documentos tuyos. Debe cumplir:
- Interfaz mínima (CLI es suficiente).
- Retrieval sobre al menos 10 documentos tuyos.
- Generación con Claude usando el contexto recuperado.
- Citación de fuentes en la respuesta.
- Tests manuales documentados de al menos 5 casos.

Guardar el código en repositorio aparte y documentar aquí el diseño (`modulos/07-api-claude/proyecto-rag.md`).
