---
titulo: "Proyecto: Chatbot personalizado con RAG sobre tu conocimiento"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: media
tiempo_estimado_horas: 10
---

# Chatbot personalizado con RAG sobre tu conocimiento

## Descripción

Construirás un chatbot que responde **fundamentado en tus propios documentos** (notas, manuales, PDFs) usando RAG: recupera los fragmentos relevantes y se los pasa a Claude para que responda con ellos y cite la fuente.

## Objetivos

- [ ] Montar una tubería RAG: ingesta → embeddings → recuperación → generación.
- [ ] Integrar Claude (Messages API, Módulo 07) como generador.
- [ ] Devolver respuestas con **citas** a los documentos de origen.
- [ ] Aprender los puntos críticos del RAG: chunking, recuperación y prompt.

## Stack y prerrequisitos

- Python o TypeScript; SDK de Anthropic.
- Un almacén vectorial (local como FAISS/Chroma, o gestionado).
- Módulos 07 (API) y nociones de embeddings.
- Clave de API (`ANTHROPIC_API_KEY`) en variable de entorno.

## Arquitectura propuesta

```text
Documentos → chunking → embeddings → vector store
Pregunta → embedding → top-k fragmentos → prompt con contexto → Claude → respuesta + citas
```

## Pasos

### 1. Preparación del entorno
- Instala el SDK y el vector store. Configura la clave por entorno.

### 2. Ingesta
- Trocea (chunking) tus documentos con solape razonable; guarda metadatos (fuente, sección).
- Genera embeddings e indexa.

### 3. Recuperación + generación
- Para cada pregunta, recupera top-k fragmentos; constrúyelos como contexto.
- Prompt con instrucción: "responde solo con el contexto; si no está, dilo; cita la fuente".

### 4. Refinamiento
- Ajusta tamaño de chunk, k y el prompt. Añade reranking si mejora.

## Criterios de éxito

- [ ] Responde preguntas sobre tus documentos con citas correctas.
- [ ] Cuando la respuesta no está en las fuentes, lo admite (no inventa).
- [ ] Pruebas manuales documentadas con 10 preguntas reales.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `claude-cookbooks` (RAG) — catálogo.
- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
