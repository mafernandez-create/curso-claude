---
titulo: "Embeddings y bases vectoriales: visión general"
modulo: "07-api-claude"
orden: 14
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Embeddings y bases vectoriales: visión general

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es un **embedding** y para qué sirve.
- [ ] Entender qué hace una **base de datos vectorial**.
- [ ] Conectar ambos con la fase de *retrieval* del RAG.

## Prerrequisitos

- Lección 13 del módulo.

## Contexto

Para "recuperar lo relevante" (fase clave del RAG) necesitas **buscar por significado**, no por palabras exactas. Los **embeddings** y las **bases vectoriales** son la maquinaria que lo hace posible.

## Contenido principal

### 1. Qué es un embedding

Es una **representación numérica** (un vector de números) del significado de un texto. Textos con significado parecido tienen vectores **cercanos**. Así, "devolver un producto" y "política de reembolsos" quedan próximos aunque no compartan palabras.

### 2. La base de datos vectorial

Es un almacén pensado para guardar esos vectores y, dada una consulta, encontrar rápidamente los **más cercanos**. Es lo que permite, ante una pregunta, recuperar los fragmentos de documento semánticamente más relevantes.

> **Nota:** Anthropic recomienda proveedores de embeddings de terceros (la generación de embeddings no es el foco de la Claude API). Hay varias bases vectoriales populares; elige según tu caso. Consulta la doc para opciones actuales.

### 3. Cómo encaja en el RAG

1. **Indexar:** generas el embedding de cada fragmento y lo guardas en la base vectorial.
2. **Recuperar:** generas el embedding de la pregunta y pides a la base los fragmentos más cercanos.
3. Esos fragmentos son el **contexto** que pasas a Claude (lección 13).

## Ejemplo aplicado

Buscas "¿puedo cancelar mi pedido?" y, aunque tus documentos digan "anulación de compras", el embedding las acerca y recuperas el fragmento correcto.

## Ejercicio práctico

1. Explica con tus palabras por qué la búsqueda por embeddings es mejor que por palabras exactas para un RAG.
2. Esboza qué guardarías en la base vectorial de tu corpus.
3. **Criterio de éxito:** entiendes el papel de embeddings y base vectorial en el retrieval.

## Errores comunes

- **Confundir embeddings con la generación:** los embeddings buscan; Claude genera.
- **Trozos demasiado grandes o pequeños:** el tamaño del fragmento afecta a la calidad del retrieval; experimenta.

## Resumen en 3 frases

1. Un embedding es un vector que representa el significado de un texto; los parecidos quedan cerca.
2. Una base vectorial guarda esos vectores y encuentra los más cercanos a una consulta.
3. Juntos hacen la recuperación semántica que alimenta de contexto al RAG.

## Recursos para profundizar

- [docs.claude.com — embeddings](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 08 (MCP) — otra vía para dar datos externos a Claude.

## Siguiente lección

➡️ `15-errores-rate-limits`

## Fuentes

- [docs.claude.com — embeddings](https://docs.claude.com) — consultado 2026-06-14.
