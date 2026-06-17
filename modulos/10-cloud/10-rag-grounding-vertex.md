---
titulo: "RAG y grounding en Vertex AI"
modulo: "10-cloud"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# RAG y grounding en Vertex AI

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué ofrece **Vertex AI** para fundamentar (grounding) respuestas en tus datos.
- [ ] Entender el flujo de **RAG gestionado** en GCP con Claude.
- [ ] Comparar a alto nivel con las Knowledge Bases de Bedrock.

> **Nota:** los productos de RAG/grounding de Vertex evolucionan; consulta la documentación de Google Cloud para nombres y capacidades vigentes.

## Prerrequisitos

- Lección 09 del módulo y lección 05 (RAG en Bedrock).

## Contexto

Igual que AWS ofrece Knowledge Bases, Google Cloud ofrece capacidades para **fundamentar (grounding)** las respuestas en tus datos: recuperar información tuya y dársela al modelo para que responda con ella. El concepto es el mismo RAG.

## Contenido principal

### 1. Grounding: el concepto

**Grounding** es anclar la respuesta del modelo en fuentes concretas (tus documentos, datos o búsqueda), reduciendo invención y aumentando trazabilidad. RAG es la técnica habitual para lograrlo.

### 2. RAG gestionado en GCP

Vertex AI ofrece componentes para construir RAG: indexar tus documentos, recuperarlos por similitud y pasarlos a Claude como contexto. Como en Bedrock, GCP gestiona buena parte de la tubería (embeddings, búsqueda) según el producto que uses.

### 3. Flujo

```text
Documentos → indexado en GCP → (consulta) → recuperación → Claude responde fundamentado
```

### 4. Comparación a alto nivel

- **Bedrock (Knowledge Bases) y Vertex (grounding/RAG):** misma idea, distinto cloud y herramientas.
- Elige por **dónde viven tus datos** y tu organización, no por el nombre del producto.

## Ejemplo aplicado

Una empresa en GCP indexa sus políticas internas en Vertex. Ante "¿cuántos días de vacaciones tengo?", el sistema recupera la política y Claude responde citándola, con grounding en el documento real.

## Ejercicio práctico

1. Describe 3 fuentes que fundamentarían las respuestas en tu caso.
2. Compara: si tus datos están en GCP, ¿usarías Vertex; si en AWS, Knowledge Bases? Justifícalo.
3. **Criterio de éxito:** explicas grounding/RAG en Vertex y que la elección depende de dónde viven los datos.

## Errores comunes

- **Creer que grounding elimina toda invención:** la reduce; sigue requiriendo buenas fuentes y verificación.
- **Mezclar herramientas de dos clouds sin necesidad:** añade complejidad.

## Resumen en 3 frases

1. Grounding es anclar las respuestas en tus fuentes; RAG es la técnica para lograrlo.
2. Vertex ofrece componentes de RAG gestionado en GCP, equivalentes en idea a las Knowledge Bases de Bedrock.
3. Elige plataforma por dónde viven tus datos y tu organización.

## Recursos para profundizar

- Documentación de Google Cloud sobre grounding/RAG en Vertex.
- Lección 05 (Knowledge Bases) y Módulo 11 (RAG propio).

## Siguiente lección

➡️ `11-comparativa-plataformas`

## Fuentes

- [docs.claude.com — Vertex](https://docs.claude.com) — consultado 2026-06-14.
