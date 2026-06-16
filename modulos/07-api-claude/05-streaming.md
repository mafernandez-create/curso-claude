---
titulo: "Streaming de respuestas"
modulo: "07-api-claude"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Streaming de respuestas

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **streaming** y por qué se usa.
- [ ] Implementar una respuesta en streaming con el SDK.
- [ ] Saber cuándo el streaming es **necesario**.

## Prerrequisitos

- Lección 02 o 03 del módulo.

## Contexto

Sin streaming, esperas a que la respuesta esté **completa** antes de recibir nada. Con streaming, recibes el texto **a medida que se genera**, token a token, como ves escribir a Claude en la web.

## Contenido principal

### 1. Por qué streaming

- **Experiencia:** el usuario ve la respuesta aparecer, sin esperar en blanco.
- **Necesidad técnica:** en respuestas largas (`max_tokens` alto), una llamada sin streaming puede **agotar el tiempo de conexión**. Por eso, para salidas grandes, el streaming no es un lujo: es obligatorio.

### 2. Implementación (Python)

```python
with client.messages.stream(
    model="claude-opus-4-8",
    max_tokens=4096,
    messages=[{"role": "user", "content": "Escribe un relato corto."}],
) as stream:
    for texto in stream.text_stream:
        print(texto, end="", flush=True)
    final = stream.get_final_message()  # mensaje completo al terminar
```

### 3. TypeScript

Mismo concepto con `client.messages.stream({...})` y, si solo quieres el resultado final con protección de timeout, el helper `finalMessage()`.

## Ejemplo aplicado

Un chat de terminal que muestra la respuesta apareciendo en vivo: usa `text_stream` para imprimir cada fragmento según llega.

## Ejercicio práctico

1. Convierte una llamada normal en una con streaming.
2. Imprime el texto a medida que llega.
3. **Criterio de éxito:** ves la respuesta aparecer progresivamente y obtienes el mensaje final.

## Errores comunes

- **No usar streaming con `max_tokens` alto:** riesgo de timeout.
- **Olvidar recoger el mensaje final** cuando lo necesitas completo (`get_final_message()` / `finalMessage()`).

## Resumen en 3 frases

1. El streaming entrega la respuesta a medida que se genera, no al final.
2. Mejora la experiencia y es necesario para respuestas largas (evita timeouts).
3. Con el SDK se usa `messages.stream(...)` y un helper para obtener el mensaje completo.

## Recursos para profundizar

- [docs.claude.com — streaming](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `06-tool-use-fundamentos`

## Fuentes

- [docs.claude.com — streaming](https://docs.claude.com) — consultado 2026-06-14.
