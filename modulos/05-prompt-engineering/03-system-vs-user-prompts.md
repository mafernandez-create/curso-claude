---
titulo: "System prompts vs. user prompts"
modulo: "05-prompt-engineering"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# System prompts vs. user prompts

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir el **system prompt** del **user prompt** y para qué sirve cada uno.
- [ ] Decidir qué instrucciones van en uno y cuáles en el otro.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

En la interfaz hablas con Claude en un solo cuadro, pero por debajo (y sobre todo en la API) hay dos canales distintos: el **system prompt** (instrucciones de marco, persistentes) y el **user prompt** (la petición concreta de cada turno). Saber separarlos mejora el control.

## Contenido principal

### 1. El system prompt

Define **el marco**: quién es Claude, su rol, las reglas que aplican a toda la conversación, el tono. Es el lugar de "eres un asistente jurídico que responde en términos llanos y nunca da consejo legal definitivo".

### 2. El user prompt

Es **la petición** de cada turno: "resume este contrato", "y ahora compáralo con el anterior". Cambia en cada mensaje; el system prompt se mantiene.

### 3. Qué va en cada uno

- **System:** rol, reglas permanentes, tono, restricciones globales, formato por defecto.
- **User:** la tarea concreta, el material de ese turno, matices puntuales.

En la interfaz, las **instrucciones de un Project** (Módulo 03, L02) cumplen el papel del system prompt. En la API se envía explícitamente (lo verás en el Módulo 07).

## Ejemplo aplicado

- **System:** `Eres un editor en español. Respondes con correcciones concretas, conservas la voz del autor y nunca reescribes el texto entero.`
- **User (turno 1):** `Revisa este párrafo: [...]`
- **User (turno 2):** `Ahora hazlo un 20 % más corto.`

El marco (editor que no reescribe) se mantiene en ambos turnos sin repetirlo.

## Ejercicio práctico

1. Toma una tarea recurrente.
2. Separa qué es "marco" (system) y qué es "petición" (user).
3. Configúralo como instrucciones de un Project y prueba dos peticiones.
4. **Criterio de éxito:** no repites el marco en cada mensaje y las respuestas lo respetan.

## Errores comunes

- **Meter la tarea concreta en el system prompt:** lo satura y resta flexibilidad.
- **Repetir el marco en cada user prompt:** para eso está el system.

## Resumen en 3 frases

1. El system prompt fija el marco persistente; el user prompt es la petición de cada turno.
2. Rol, reglas y tono van en system; tarea y material, en user.
3. En la interfaz, las instrucciones de un Project hacen de system prompt.

## Recursos para profundizar

- Módulo 03, lección 02 — Projects.
- Módulo 07 (API) — cómo se envía el system prompt por API.

## Siguiente lección

➡️ `04-few-shot`

## Fuentes

- [docs.claude.com — system prompts](https://docs.claude.com) — consultado 2026-06-14.
