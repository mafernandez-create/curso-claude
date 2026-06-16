---
titulo: "Costes: cómo estimarlos y reducirlos"
modulo: "07-api-claude"
orden: 17
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Costes: cómo estimarlos y reducirlos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Estimar el **coste** de una funcionalidad antes de construirla.
- [ ] Aplicar palancas para **reducirlo** sin perder calidad.
- [ ] Cerrar el módulo con la entrega (proyecto RAG).

> **Nota:** los precios cambian; consulta [claude.com/pricing](https://claude.com/pricing) para cifras actuales.

## Prerrequisitos

- Lecciones 10 (caching), 11 (batch) y 12 (effort) del módulo.

## Contexto

En producción, el coste por tokens se acumula. Estimarlo antes y optimizarlo después evita sorpresas en la factura y hace tu app sostenible.

## Contenido principal

### 1. Estimar el coste

Coste ≈ (tokens de entrada × precio entrada) + (tokens de salida × precio salida), por llamada, multiplicado por el volumen. Para medir tokens **antes**, usa el contador de tokens del SDK (`count_tokens`) en lugar de estimar a ojo.

### 2. Palancas para reducir

- **Modelo adecuado:** Haiku o Sonnet para tareas simples; Opus solo donde aporta (Módulo 01, L06).
- **Prompt caching** (L10): reutiliza prefijos grandes repetidos.
- **Batch API** (L11): ~50 % menos para trabajo masivo sin urgencia.
- **`effort` ajustado** (L12): no uses el máximo esfuerzo para todo.
- **Contexto justo:** no envíes documentos enteros si basta un fragmento (RAG, L13).
- **`max_tokens` realista:** respuestas tan largas como necesites, no más.

### 3. Mide en producción

Con el logging de la lección 16 (tokens por llamada) calculas el coste real y detectas qué funcionalidades se disparan. Optimiza las que más pesan.

## Ejemplo aplicado

Un asistente que respondía con Opus a todo pasa las preguntas simples a Haiku y cachea el manual común: misma utilidad, factura mucho menor.

## Ejercicio práctico

1. Para una funcionalidad tuya, estima tokens de entrada/salida con `count_tokens`.
2. Identifica **dos palancas** para reducir su coste.
3. **Criterio de éxito:** sabes estimar y reducir el coste con criterio.

## Entrega del módulo

Construye el **chatbot con RAG** descrito en el README del módulo (retrieval sobre 10+ documentos tuyos, generación con contexto, citas y 5 casos de prueba) y documenta el diseño en `proyecto-rag.md`.

## Errores comunes

- **Opus para todo:** caro sin necesidad; ajusta el modelo a la tarea.
- **Estimar a ojo:** usa `count_tokens` para cifras reales.

## Resumen en 3 frases

1. Estima el coste por tokens (entrada+salida) × volumen, midiendo con `count_tokens`.
2. Reduce con: modelo adecuado, caching, batch, effort ajustado y contexto justo.
3. Mide en producción para optimizar lo que más pesa.

## Recursos para profundizar

- [claude.com/pricing](https://claude.com/pricing) — consultado 2026-06-14.
- Lecciones 10, 11 y 12 del módulo.

## Siguiente lección

➡️ Has terminado el Módulo 07. Continúa con el Módulo 08 (MCP).

## Fuentes

- [docs.claude.com — token counting y pricing](https://docs.claude.com) — consultado 2026-06-14.
