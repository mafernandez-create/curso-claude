---
titulo: "Razonamiento en la API: adaptive thinking y effort"
modulo: "07-api-claude"
orden: 12
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Razonamiento en la API: adaptive thinking y effort

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Activar el **razonamiento** del modelo por API con `thinking`.
- [ ] Regular el esfuerzo con `effort`.
- [ ] Saber por qué `budget_tokens` ya no se usa.

> **⚠️ Actualización (2026):** el plan original hablaba de "extended thinking" con `budget_tokens`. En los modelos actuales (Opus 4.7/4.8, Fable 5) eso **da error**; se usa **adaptive thinking** + `effort`. Esta lección refleja lo vigente (coherente con el Módulo 05, L09).

## Prerrequisitos

- Módulo 05, lección 09. Lección 04 del módulo.

## Contexto

Los modelos actuales razonan internamente cuando la tarea lo requiere. Por API controlas ese comportamiento con dos piezas: activar el razonamiento adaptativo y ajustar el esfuerzo.

## Contenido principal

### 1. Activar el razonamiento

```python
client.messages.create(
    model="claude-opus-4-8", max_tokens=16000,
    thinking={"type": "adaptive"},
    messages=[{"role":"user","content":"Resuelve este problema paso a paso..."}],
)
```
Con `thinking: {type: "adaptive"}` el modelo decide cuándo y cuánto pensar.

### 2. El parámetro `effort`

Va dentro de `output_config` y regula el esfuerzo (y, con él, coste y latencia):
```python
output_config={"effort": "high"}  # low | medium | high | (xhigh | max en modelos punteros)
```
- `low`/`medium`: tareas rápidas o sencillas.
- `high`: lo adecuado para la mayoría del trabajo exigente.
- `xhigh`/`max`: problemas muy difíciles o agénticos.

### 3. Adiós a `budget_tokens`

El presupuesto fijo de tokens de pensamiento (`budget_tokens`) **se eliminó** en los modelos recientes (error en Opus 4.7/4.8 y Fable 5; obsoleto en 4.6 y Sonnet 4.6). Adaptive thinking + `effort` lo sustituye y rinde mejor. No lo uses en código nuevo.

## Ejemplo aplicado

Para una tarea de análisis compleja, combinas razonamiento adaptativo y esfuerzo alto:
```python
thinking={"type":"adaptive"}, output_config={"effort":"high"}
```
Para una clasificación trivial, ni razonamiento ni esfuerzo alto: gastarías de más.

## Ejercicio práctico

1. Haz una llamada con `thinking` adaptativo y `effort` alto en un problema difícil.
2. Compara coste/tiempo con la misma tarea a `effort` bajo.
3. **Criterio de éxito:** ajustas el esfuerzo a la dificultad, sin usar `budget_tokens`.

## Errores comunes

- **Usar `budget_tokens`:** error/obsoleto en los modelos actuales.
- **`max` para todo:** gasta más sin mejorar en tareas que no lo necesitan.

## Resumen en 3 frases

1. Por API, el razonamiento se activa con `thinking: {type: "adaptive"}`.
2. `effort` (low→max) regula el esfuerzo, el coste y la latencia.
3. `budget_tokens` quedó obsoleto: hoy es adaptive thinking + effort.

## Recursos para profundizar

- Módulo 05, lección 09.
- [docs.claude.com — adaptive thinking y effort](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `13-rag-basico`

## Fuentes

- [docs.claude.com — adaptive thinking](https://docs.claude.com) — consultado 2026-06-14.
