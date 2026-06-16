---
titulo: "Gestión de errores y rate limits"
modulo: "07-api-claude"
orden: 15
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Gestión de errores y rate limits

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Reconocer los **errores** más comunes de la API y qué significan.
- [ ] Distinguir errores **reintentables** de los que no lo son.
- [ ] Usar el **reintento automático** del SDK y las excepciones tipadas.

## Prerrequisitos

- Lección 02 o 03 del módulo.

## Contexto

Una app de producción debe **anticipar fallos**: límites de uso, errores temporales del servicio, peticiones mal formadas. Gestionarlos bien es la diferencia entre una app frágil y una robusta.

## Contenido principal

### 1. Errores habituales

| Código | Significado | ¿Reintentar? |
|---|---|---|
| 400 | Petición mal formada | No (corrige el código) |
| 401 | Clave inválida o ausente | No |
| 429 | Límite de tasa (rate limit) | Sí, esperando |
| 500 / 529 | Error o saturación del servicio | Sí, con espera |

### 2. Reintentables vs. no

- **No reintentables (4xx salvo 429):** el problema es tu petición; reintentar no ayuda.
- **Reintentables (429, 5xx):** son temporales; reintentar con **espera creciente** (backoff) suele resolverlo.

### 3. El SDK te ayuda

- El SDK **reintenta automáticamente** 429 y 5xx con backoff (configurable con `max_retries`).
- Usa las **excepciones tipadas** (`RateLimitError`, `BadRequestError`, etc.) en vez de mirar el texto del error:
```python
try:
    resp = client.messages.create(...)
except anthropic.RateLimitError:
    ...  # esperar / encolar
except anthropic.APIStatusError as e:
    ...  # otros errores de la API
```

## Ejemplo aplicado

Ante un pico de tráfico que provoca 429, el SDK espera y reintenta solo; tú decides si además quieres encolar peticiones para no saturar.

## Ejercicio práctico

1. Envuelve una llamada en un manejo de errores con excepciones tipadas.
2. Distingue en tu código un 400 (corregir) de un 429 (reintentar).
3. **Criterio de éxito:** tu código no se rompe ante un error temporal.

## Errores comunes

- **Reintentar un 400:** no se arregla solo; revisa la petición.
- **Detectar errores por el texto del mensaje:** usa las clases de excepción.

## Resumen en 3 frases

1. Los errores 4xx (salvo 429) son de tu petición; 429 y 5xx son temporales y reintentables.
2. El SDK reintenta 429/5xx con backoff automáticamente (`max_retries`).
3. Maneja los fallos con las excepciones tipadas, no leyendo el texto del error.

## Recursos para profundizar

- [docs.claude.com — errores y rate limits](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `16-monitorizacion-logging`

## Fuentes

- [docs.claude.com — errores](https://docs.claude.com) — consultado 2026-06-14.
