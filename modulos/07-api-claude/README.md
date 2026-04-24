# Módulo 07 — API de Claude

**Eje:** Desarrollador
**Tiempo estimado:** 10–15 h
**Prerrequisitos:** Módulo 05 (prompting) y Python o TypeScript básico.
**Última actualización:** 2026-04-23

## Objetivo

Construir aplicaciones propias con la Claude API. Cubre desde la primera llamada hasta patrones de producción: tool use, streaming, RAG, caching, batch, gestión de errores. Al terminar debes ser capaz de construir un chatbot propio con RAG sobre tus documentos.

## Lecciones

| Nº | Título | Estado | Tiempo |
|----|--------|--------|--------|
| 01 | Arquitectura de la Claude API: Messages, modelos, tokens | pendiente | 30 min |
| 02 | Primeros pasos con el SDK de Python | pendiente | 30 min |
| 03 | Primeros pasos con el SDK de TypeScript | pendiente | 30 min |
| 04 | System prompts y parámetros (temperature, max_tokens…) | pendiente | 25 min |
| 05 | Streaming de respuestas | pendiente | 25 min |
| 06 | Tool use (function calling): fundamentos | pendiente | 45 min |
| 07 | Tool use avanzado: múltiples tools, paralelismo | pendiente | 35 min |
| 08 | Vision: procesar imágenes con Claude | pendiente | 30 min |
| 09 | Procesamiento de PDFs | pendiente | 25 min |
| 10 | Prompt caching en la API: casos y ahorros | pendiente | 30 min |
| 11 | Batch API: procesamiento masivo a bajo coste | pendiente | 25 min |
| 12 | Extended thinking en la API | pendiente | 25 min |
| 13 | Construir un RAG básico: retrieval + generación | pendiente | 60 min |
| 14 | Embeddings y bases vectoriales: visión general | pendiente | 30 min |
| 15 | Gestión de errores y rate limits | pendiente | 25 min |
| 16 | Monitorización y logging en producción | pendiente | 30 min |
| 17 | Costes: cómo estimarlos y reducirlos | pendiente | 25 min |

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
