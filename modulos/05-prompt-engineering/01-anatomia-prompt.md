---
titulo: "Anatomía de un buen prompt: el marco de Anthropic"
modulo: "05-prompt-engineering"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Anatomía de un buen prompt: el marco de Anthropic

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Enumerar los **componentes** de un prompt bien construido según las buenas prácticas de Anthropic.
- [ ] Ordenarlos de forma que Claude los aproveche al máximo.
- [ ] Reescribir un prompt pobre aplicando el marco.

## Prerrequisitos

- Módulo 02, lección 04 (Descripción). Este módulo profundiza en lo que allí se introdujo.

## Contexto

La diferencia entre una respuesta mediocre y una excelente rara vez está en el modelo: está en el prompt. Anthropic propone un marco sencillo de componentes que, ordenados bien, cubren el 90 % de los casos.

## Contenido principal

### 1. Los componentes

Un prompt completo suele incluir, en este orden:

1. **Rol / contexto:** quién es Claude aquí y para qué.
2. **Tarea:** qué quieres exactamente.
3. **Material:** los datos o el texto sobre el que trabajar (a menudo en etiquetas, ver lección 06).
4. **Restricciones:** longitud, tono, formato, qué evitar.
5. **Ejemplos** (si aplica): muestras de la salida deseada (lección 04).
6. **Formato de salida:** cómo quieres el resultado.

### 2. Por qué el orden importa

Poner el material **antes** de la pregunta ayuda a Claude a "leer primero, responder después". Las instrucciones largas al final, junto a la petición concreta, se siguen mejor. No es rígido, pero es un buen punto de partida.

### 3. No todos los prompts necesitan todo

Para una pregunta trivial, basta la tarea. El marco es una **lista de verificación**: cuanto más importante o complejo el resultado, más componentes conviene incluir.

## Ejemplo aplicado

Prompt pobre: `Resume esto.`

Aplicando el marco:
```
Eres un analista que prepara informes para dirección (rol).
Resume el siguiente texto (tarea).

<texto>
[...]
</texto>

Máximo 150 palabras, en español, con 3 puntos clave (restricciones/formato).
```

## Ejercicio práctico

1. Toma un prompt tuyo que diera resultados flojos.
2. Reescríbelo aplicando los seis componentes (los que apliquen).
3. **Criterio de éxito:** la nueva respuesta es claramente mejor y más ajustada.

## Errores comunes

- **Empezar por la pregunta y pegar el material al final** sin separarlo: Claude se pierde.
- **Omitir el formato de salida** y luego quejarse del formato.

## Resumen en 3 frases

1. Un buen prompt combina rol, tarea, material, restricciones, ejemplos y formato.
2. El orden ayuda: material primero, petición y restricciones al final.
3. No todo prompt necesita todos los componentes; úsalo como lista de verificación según la complejidad.

## Recursos para profundizar

- `prompting-best-practices` (catálogo) — guía oficial de Anthropic.
- Módulo 02, lección 04 — la base de la Descripción.

## Siguiente lección

➡️ `02-claridad-contexto-formato`

## Fuentes

- [docs.claude.com — prompt engineering](https://docs.claude.com) — consultado 2026-06-14.
