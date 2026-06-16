---
titulo: "Arquitectura de la Claude API: Messages, modelos y tokens"
modulo: "07-api-claude"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Arquitectura de la Claude API: Messages, modelos y tokens

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar el papel central del endpoint **Messages**.
- [ ] Entender que la API es **sin estado** (stateless) y qué implica.
- [ ] Identificar los **modelos** y cómo se factura por **tokens**.

## Prerrequisitos

- Módulo 05 (prompting). Python o TypeScript básico.

## Contexto

Todo lo que hace la API de Claude pasa por un único endpoint: **`/v1/messages`**. Tool use, visión, streaming o salidas estructuradas son funciones *de ese* endpoint, no APIs separadas. Entender esta arquitectura simplifica todo lo demás.

## Contenido principal

### 1. El endpoint Messages

Envías una lista de **mensajes** (roles `user` y `assistant` alternados) y recibes la respuesta del modelo. La primera petición debe empezar por `user`.

### 2. Sin estado

La API **no recuerda** conversaciones: en cada llamada envías **todo el historial** que quieres que el modelo tenga en cuenta. La "memoria" de una conversación la gestionas tú reenviando los mensajes anteriores.

### 3. Modelos y tokens

Eliges el modelo con su identificador exacto. Los actuales (mediados de 2026):

| Modelo | ID | Para qué |
|---|---|---|
| Opus 4.8 | `claude-opus-4-8` | Máxima capacidad (por defecto) |
| Sonnet 4.6 | `claude-sonnet-4-6` | Equilibrio velocidad/precio |
| Haiku 4.5 | `claude-haiku-4-5` | Rápido y económico |

Se factura por **tokens** de entrada y de salida (precios distintos). Un token ≈ ¾ de palabra (Módulo 01, L01). Por eso el tamaño del prompt y de la respuesta determina el coste.

> **Nota:** los IDs y precios cambian; verifica siempre en [docs.claude.com](https://docs.claude.com) y [claude.com/pricing](https://claude.com/pricing).

## Ejemplo aplicado

Estructura conceptual de una petición:
```
POST /v1/messages
{
  "model": "claude-opus-4-8",
  "max_tokens": 1024,
  "messages": [
    { "role": "user", "content": "Hola, ¿qué puedes hacer?" }
  ]
}
```

## Ejercicio práctico

1. Identifica, para un caso tuyo, qué modelo elegirías y por qué.
2. Explica con tus palabras qué significa que la API sea "sin estado".
3. **Criterio de éxito:** sabes qué envías en cada llamada y cómo se factura.

## Errores comunes

- **Esperar que la API "recuerde":** debes reenviar el historial tú.
- **Inventar IDs de modelo con sufijos de fecha:** usa el ID exacto de la doc.

## Resumen en 3 frases

1. Toda la API gira en torno al endpoint Messages; las funciones avanzadas son parte de él.
2. Es sin estado: en cada llamada envías el historial que quieres que el modelo considere.
3. Eliges modelo por su ID exacto y pagas por tokens de entrada y salida.

## Recursos para profundizar

- `building-with-claude-api` (catálogo).
- [docs.claude.com — Messages API](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `02-sdk-python`

## Fuentes

- [docs.claude.com — API](https://docs.claude.com) — consultado 2026-06-14.
