---
titulo: "RAG en AWS: Knowledge Bases for Bedrock"
modulo: "10-cloud"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# RAG en AWS: Knowledge Bases for Bedrock

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué resuelven las **Knowledge Bases** de Bedrock.
- [ ] Entender el flujo **ingesta → recuperación → generación** con Claude.
- [ ] Decidir cuándo usar esta opción gestionada frente a montar tu propio RAG.

> **Nota:** los detalles de configuración (orígenes, vector stores, parámetros) cambian; consulta la documentación de AWS para lo vigente.

## Prerrequisitos

- Lección 04 del módulo. Conviene el concepto de RAG (Módulo 08/11).

## Contexto

**RAG** (Retrieval-Augmented Generation) es darle a Claude información de tus documentos en el momento de responder. AWS ofrece **Knowledge Bases for Bedrock**, una forma gestionada de montar ese flujo sin programar toda la tubería.

## Contenido principal

### 1. Qué es una Knowledge Base

Un servicio que **ingiere tus documentos**, los **indexa** (embeddings en un almacén vectorial) y, en cada consulta, **recupera** los fragmentos relevantes para que Claude responda con ellos. AWS gestiona la parte pesada (chunking, embeddings, búsqueda).

### 2. El flujo

```text
Documentos → ingesta/indexado → (consulta) → recuperación → Claude genera respuesta
```

Tú conectas un origen de datos (por ejemplo, almacenamiento en AWS), defines el índice y consultas. Claude recibe el contexto recuperado y responde fundamentado en él.

### 3. Gestionado vs. propio

- **Knowledge Base (gestionado):** rápido de montar, menos código, integrado en AWS. Menos control fino.
- **RAG propio:** máximo control (chunking, reranking, almacén), más trabajo. Lo verás en el Módulo 11.

## Ejemplo aplicado

Una empresa con manuales en AWS crea una Knowledge Base sobre ellos. Su app pregunta "¿cuál es la garantía del producto X?"; el servicio recupera los fragmentos del manual y Claude responde citándolos, sin que el equipo programe la tubería de embeddings.

## Ejercicio práctico

1. Enumera 3 documentos que pondrías en una Knowledge Base.
2. Decide: ¿te compensa la opción gestionada o un RAG propio? Justifícalo.
3. **Criterio de éxito:** explicas el flujo ingesta→recuperación→generación y cuándo conviene lo gestionado.

## Errores comunes

- **Esperar magia sin buenos documentos:** la calidad del RAG depende de la calidad y estructura de las fuentes.
- **Ignorar permisos:** la Knowledge Base necesita acceso IAM a los orígenes de datos.

## Resumen en 3 frases

1. Knowledge Bases for Bedrock es RAG gestionado: ingiere, indexa y recupera tus documentos para Claude.
2. El flujo es ingesta→recuperación→generación; AWS gestiona embeddings y búsqueda.
3. Conviene cuando quieres montar RAG rápido sin programar la tubería; para control fino, RAG propio.

## Recursos para profundizar

- Documentación de AWS sobre Knowledge Bases for Bedrock.
- Módulo 11 (RAG propio y casos avanzados).

## Siguiente lección

➡️ `06-bedrock-agents`

## Fuentes

- [docs.claude.com — Bedrock](https://docs.claude.com) — consultado 2026-06-14.
