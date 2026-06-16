---
titulo: "Construir un RAG básico: retrieval + generación"
modulo: "07-api-claude"
orden: 13
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 60
---

# Construir un RAG básico: retrieval + generación

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es **RAG** (Retrieval-Augmented Generation) y qué problema resuelve.
- [ ] Describir las **fases** de un RAG básico.
- [ ] Esbozar un RAG sobre tus propios documentos.

## Prerrequisitos

- Lecciones 01–06 del módulo.

## Contexto

El modelo no conoce **tus** documentos privados ni la información posterior a su entrenamiento. **RAG** resuelve esto: antes de responder, **recuperas** los fragmentos relevantes de tu corpus y se los das a Claude como contexto. Así responde **basándose en tus datos**, con citas.

## Contenido principal

### 1. La idea de RAG

En vez de esperar que el modelo "sepa" tu información, se la **aportas en el momento**: buscas en tus documentos lo relevante para la pregunta y lo incluyes en el prompt. Generación *aumentada* por recuperación.

### 2. Las fases

1. **Indexar** (una vez): trocear los documentos en fragmentos y guardarlos de forma que se puedan buscar (lección 14: embeddings + base vectorial).
2. **Recuperar** (por consulta): dada la pregunta, encontrar los fragmentos más relevantes.
3. **Generar:** enviar a Claude la pregunta + esos fragmentos, pidiéndole responder **solo con ese contexto** y **citar** las fuentes.

### 3. Por qué citar

Pedir que cite de qué fragmento sale cada afirmación hace la respuesta **verificable** y reduce el riesgo de que invente. Es el corazón de un RAG fiable.

## Ejemplo aplicado

Estructura del prompt de generación:
```
Responde la pregunta usando ÚNICAMENTE el contexto. Si no está, dilo.
Cita el documento de cada afirmación.

<contexto>
[fragmentos recuperados]
</contexto>

Pregunta: ¿Cuál es la política de devoluciones?
```

## Ejercicio práctico

1. Reúne unos documentos tuyos (10+).
2. Esboza las tres fases: cómo los trocearías, cómo buscarías y cómo montarías el prompt.
3. (Avanzado) Implementa una versión mínima por consola.
4. **Criterio de éxito:** describes un RAG que responde con tus datos y cita fuentes (es la entrega del módulo).

## Errores comunes

- **Meter documentos enteros sin recuperar:** desperdicias contexto y dinero; recupera solo lo relevante.
- **No exigir que cite ni que se limite al contexto:** invita a inventar.

## Resumen en 3 frases

1. RAG aporta a Claude los fragmentos relevantes de tu corpus para que responda con tus datos.
2. Tiene tres fases: indexar, recuperar y generar con el contexto recuperado.
3. Pedir que responda solo con el contexto y cite fuentes lo hace fiable y verificable.

## Recursos para profundizar

- `claude-cookbooks` (catálogo) — recetas de RAG.
- Lección 14 del módulo — embeddings y bases vectoriales.

## Siguiente lección

➡️ `14-embeddings-vectoriales`

## Fuentes

- [docs.claude.com — RAG y embeddings](https://docs.claude.com) — consultado 2026-06-14.
