---
titulo: "Few-shot prompting: cuándo y cómo"
modulo: "05-prompt-engineering"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Few-shot prompting: cuándo y cómo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **few-shot** (dar ejemplos) y por qué funciona.
- [ ] Construir buenos ejemplos y saber cuántos usar.
- [ ] Reconocer cuándo el few-shot ayuda y cuándo sobra.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

A veces describir lo que quieres es más difícil que **mostrarlo**. El few-shot consiste en dar a Claude uno o varios ejemplos de entrada→salida para que copie el patrón. Es una de las técnicas más potentes y menos usadas.

## Contenido principal

### 1. Qué es y por qué funciona

"Zero-shot" es pedir sin ejemplos. "Few-shot" es incluir ejemplos del resultado deseado. Los ejemplos comunican formato, tono y nivel de detalle **mejor que cualquier descripción**, porque eliminan la ambigüedad.

### 2. Cómo construirlos

- Usa ejemplos **representativos** de lo que quieres, incluido algún caso límite.
- Mantén un **formato consistente** entre ejemplos (mismo patrón entrada/salida).
- Delimita los ejemplos claramente (etiquetas, ver lección 06).
- **2–3 ejemplos** suelen bastar; más no siempre es mejor.

### 3. Cuándo NO hace falta

Para tareas simples y bien descritas, los ejemplos solo alargan el prompt. Úsalos cuando el formato sea específico, el tono importe, o el zero-shot te dé resultados inconsistentes.

## Ejemplo aplicado

```
Clasifica el sentimiento. Ejemplos:

Texto: "El envío llegó tarde y roto." → Negativo
Texto: "Servicio impecable, repetiré." → Positivo
Texto: "Cumple, sin más." → Neutro

Texto: "Me encantó la atención pero el precio es alto." →
```

El patrón de los ejemplos fija exactamente el formato de salida (una palabra).

## Ejercicio práctico

1. Elige una tarea con formato específico (clasificar, extraer, dar un estilo concreto).
2. Resuélvela en zero-shot y luego con 2–3 ejemplos.
3. **Criterio de éxito:** la versión few-shot es más consistente con el formato que querías.

## Errores comunes

- **Ejemplos incoherentes entre sí:** confunden en vez de guiar.
- **Demasiados ejemplos:** alargan el coste sin mejorar; suele bastar con pocos.

## Resumen en 3 frases

1. El few-shot da ejemplos de entrada→salida para que Claude copie el patrón.
2. Comunica formato y tono mejor que una descripción; 2–3 ejemplos consistentes bastan.
3. Úsalo cuando el formato es específico o el zero-shot es inconsistente; sáltalo en tareas simples.

## Recursos para profundizar

- `prompting-best-practices` (catálogo).
- Lección 06 del módulo — delimitar ejemplos con etiquetas.

## Siguiente lección

➡️ `05-chain-of-thought`

## Fuentes

- [docs.claude.com — prompt engineering](https://docs.claude.com) — consultado 2026-06-14.
