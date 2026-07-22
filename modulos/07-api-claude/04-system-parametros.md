---
titulo: "System prompts y parámetros de la petición"
modulo: "07-api-claude"
orden: 4
creado: 2026-06-14
revisado: 2026-07-20
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# System prompts y parámetros de la petición

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Enviar un **system prompt** por API.
- [ ] Usar correctamente `max_tokens`.
- [ ] Entender por qué **temperature/top_p/top_k ya no se ajustan** en los modelos actuales.

> **⚠️ Actualización (julio 2026):** el plan original listaba `temperature` entre los parámetros habituales. En los modelos actuales (Opus 4.7/4.8, **Sonnet 5**, Fable 5) **los parámetros de sampling ya no se pueden ajustar**: fijar `temperature`, `top_p` o `top_k` a un valor **distinto del de por defecto** devuelve **error 400**. Omitirlos, o dejarlos en su valor por defecto, sí se acepta. Esta lección refleja el estado vigente.

## Prerrequisitos

- Lecciones 02 o 03 del módulo.

## Contexto

Una petición a la API tiene, además de los mensajes, unos parámetros que controlan el comportamiento. Conviene saber cuáles importan hoy y cuáles han desaparecido.

## Contenido principal

### 1. System prompt

Se envía en el campo `system` (no como un mensaje). Define el marco (rol, reglas, tono):
```python
client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    system="Eres un asistente que responde en español, conciso y sin jerga.",
    messages=[{"role": "user", "content": "Explícame qué es la API."}],
)
```

### 1b. `system` también dentro de `messages` (novedad 2026)

Además del campo `system` de la petición, la Messages API permite ahora incluir **entradas `system` dentro del array `messages`**. ¿Para qué? Para **actualizar las instrucciones a mitad de una tarea larga** —por ejemplo, cambiar permisos, ajustar el presupuesto de tokens o dar nuevo contexto de entorno a un agente en marcha— **sin romper el prompt cache** (lección sobre caching) y **sin tener que meterlo en un turno de usuario**.

Idea clave: el `system` de la petición fija el marco inicial; las entradas `system` intercaladas permiten **reencuadrar sobre la marcha** en flujos agénticos. Para tareas normales de pregunta-respuesta no lo necesitas; gana valor en agentes de larga duración. Consulta la sintaxis exacta en [docs.claude.com](https://docs.claude.com).

### 2. `max_tokens`

Limita la **longitud de la respuesta**. Si te quedas corto, la respuesta se corta. Orientación: ~16000 para respuestas normales; para respuestas largas, usa **streaming** (lección 05) y sube el límite.

### 3. Los parámetros de sampling, ya no ajustables

`temperature`, `top_p` y `top_k` regulaban la "aleatoriedad". En los modelos recientes **ya no se pueden ajustar**: fijarlos a un valor no por defecto devuelve un **error 400** (así ocurre, por ejemplo, en Sonnet 5). Para guiar el comportamiento —más creativo o más determinista— se usa ahora el **prompting** (instrucciones claras) y, donde aplica, el parámetro `effort` y el razonamiento adaptativo (lección 12). Si ves tutoriales antiguos que ajustan `temperature`, están desfasados.

## Ejemplo aplicado

Forzar concisión sin `temperature`: se hace por prompt.
```python
system="Responde en una sola frase, sin preámbulos."
```

## Ejercicio práctico

1. Haz una llamada con un `system` que fije tono y formato.
2. Comprueba qué pasa si pones un `max_tokens` muy bajo (se corta).
3. **Criterio de éxito:** controlas el comportamiento por system + prompting, sin parámetros de sampling.

## Errores comunes

- **Fijar `temperature`/`top_p` a un valor distinto del de por defecto:** error 400 en los modelos actuales. Elimínalos de la petición (omitirlos sí se acepta).
- **`max_tokens` demasiado bajo:** la respuesta se trunca.

## Resumen en 3 frases

1. El system prompt va en el campo `system` y fija el marco de la conversación.
2. `max_tokens` limita la respuesta; para respuestas largas, usa streaming.
3. Los parámetros de sampling (temperature, top_p, top_k) ya no se ajustan —fijarlos a un valor no por defecto da 400—: hoy se guía con prompting y effort.

## Recursos para profundizar

- [docs.claude.com — parámetros y migración de modelos](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `05-streaming`

## Fuentes

- [docs.claude.com — Messages API](https://docs.claude.com) — consultado 2026-06-14.
- [Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) — parámetros de sampling y error 400 — consultado 2026-07-20.
