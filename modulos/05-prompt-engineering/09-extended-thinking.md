---
titulo: "Razonamiento del modelo: adaptive thinking y effort"
modulo: "05-prompt-engineering"
orden: 9
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Razonamiento del modelo: adaptive thinking y effort

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender cómo razonan internamente los modelos actuales de Claude (*adaptive thinking*).
- [ ] Conocer el parámetro **effort** y para qué sirve.
- [ ] Saber por qué el antiguo "budget de tokens de pensamiento" ya no se usa.

> **⚠️ Actualización importante (2026):** el plan original hablaba de "extended thinking" con un presupuesto fijo de tokens (`budget_tokens`). Eso ha cambiado. En los modelos actuales (Opus 4.6+, Opus 4.8, Sonnet 4.6, Fable 5) el razonamiento es **adaptativo** y se regula con el parámetro **effort**, no con un budget fijo.

## Prerrequisitos

- Lección 05 del módulo (Chain-of-Thought).

## Contexto

Los modelos modernos pueden "pensar" antes de responder. Antes había que reservarles manualmente un presupuesto de tokens para ello; ahora lo gestionan solos según la dificultad de la tarea. Esta lección explica el modelo actual.

## Contenido principal

### 1. Adaptive thinking

Es razonamiento **interno y automático**: el modelo decide cuándo y cuánto pensar según lo difícil que sea lo que le pides. No tienes que activarlo con un número de tokens; en la API se indica con `thinking: {type: "adaptive"}` y por interfaz ocurre de forma transparente.

### 2. El parámetro `effort`

Regula **cuánto esfuerzo** dedica el modelo (y, con ello, el gasto de tokens y la latencia). Niveles habituales: `low`, `medium`, `high` y, en los modelos punteros, `xhigh` y `max`.
- **low/medium:** tareas rápidas o sencillas.
- **high:** lo más adecuado para la mayoría del trabajo que requiere intelecto.
- **xhigh/max:** problemas muy difíciles o agénticos, cuando la calidad importa más que el coste.

### 3. Por qué desapareció el budget fijo

El presupuesto manual de tokens de pensamiento (`budget_tokens`) se ha **eliminado** en los modelos recientes (da error en Opus 4.7/4.8 y Fable 5; está obsoleto en 4.6 y Sonnet 4.6). El razonamiento adaptativo + `effort` lo sustituye y rinde mejor. Si lees tutoriales antiguos que usan `budget_tokens`, están desfasados.

## Ejemplo aplicado

Por interfaz no configuras nada: el modelo razona solo cuando hace falta. Por API (Módulo 07), para una tarea compleja:
```
thinking: { type: "adaptive" }
output_config: { effort: "high" }
```

## Ejercicio práctico

1. Plantea por interfaz un problema difícil (lógica, varios pasos) y observa que la respuesta es más cuidada.
2. Anota un caso donde te interesaría "más esfuerzo" y otro donde prima la rapidez.
3. **Criterio de éxito:** explicas con tus palabras qué es adaptive thinking y para qué sirve `effort`.

## Errores comunes

- **Usar `budget_tokens`:** está obsoleto/da error en los modelos actuales. Usa adaptive thinking + effort.
- **Poner siempre `max`:** gasta más sin mejorar en tareas que no lo necesitan; `high` suele ser el punto óptimo.

## Resumen en 3 frases

1. Los modelos actuales razonan de forma adaptativa: deciden solos cuándo y cuánto pensar.
2. El parámetro `effort` (low→max) regula el esfuerzo, el coste y la latencia.
3. El antiguo presupuesto fijo de tokens de pensamiento quedó obsoleto y se sustituye por adaptive thinking + effort.

## Recursos para profundizar

- Módulo 07 (API) — cómo enviar `thinking` y `effort`.
- [docs.claude.com — adaptive thinking y effort](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `10-prompt-caching`

## Fuentes

- [docs.claude.com — adaptive thinking / effort / migración](https://docs.claude.com) — consultado 2026-06-14.
