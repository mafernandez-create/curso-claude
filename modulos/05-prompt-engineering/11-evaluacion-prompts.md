---
titulo: "Evaluación sistemática de prompts"
modulo: "05-prompt-engineering"
orden: 11
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 40
---

# Evaluación sistemática de prompts

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar por qué "probar un par de veces" no basta para validar un prompt.
- [ ] Montar una **evaluación sencilla** con casos de prueba y criterios.
- [ ] Comparar dos versiones de un prompt con objetividad.

## Prerrequisitos

- Lecciones 01–04 del módulo.

## Contexto

Cuando un prompt va a usarse muchas veces (en un workflow, en una app por API), ajustarlo "a ojo" es arriesgado: puede funcionar con tu ejemplo y fallar con otros. La evaluación sistemática consiste en probarlo contra **varios casos** con **criterios claros**.

## Contenido principal

### 1. Por qué evaluar

Un prompt es como una pequeña pieza de software: una versión puede mejorar un caso y empeorar otro. Sin medir, no sabes si tu "mejora" lo es de verdad.

### 2. Cómo montar una evaluación simple

1. Reúne un **conjunto de casos** representativos (entradas reales, incluidos casos límite).
2. Define el **criterio de éxito** de cada caso (qué sería una buena respuesta).
3. Pasa el prompt por todos los casos y **anota** aciertos y fallos.
4. Cambia el prompt y repite: compara resultados sobre **los mismos casos**.

### 3. Criterios objetivos

Siempre que puedas, usa criterios **verificables** ("¿incluye los 3 campos?", "¿la cifra es correcta?") en vez de impresiones ("suena bien"). Para tareas subjetivas, puedes incluso pedir a Claude que evalúe según una rúbrica que tú definas.

## Ejemplo aplicado

Evaluar un prompt de clasificación de sentimiento:
- 10 frases de prueba con su etiqueta correcta conocida.
- Criterio: % de aciertos.
- Versión A: 7/10. Cambias el prompt (añades un ejemplo neutro). Versión B: 9/10 → mejora confirmada sobre los mismos casos.

## Ejercicio práctico

1. Elige un prompt que uses repetidamente.
2. Crea 5 casos de prueba con su resultado esperado.
3. Evalúa dos versiones del prompt sobre esos 5 casos.
4. **Criterio de éxito:** decides cuál versión es mejor con datos, no por intuición.

## Errores comunes

- **Probar solo con el caso fácil:** incluye casos límite.
- **Cambiar el prompt y los casos a la vez:** no sabrás a qué atribuir la diferencia.

## Resumen en 3 frases

1. Para prompts que se usan mucho, "probar un par de veces" no basta.
2. Evalúa contra varios casos representativos con criterios verificables.
3. Compara versiones sobre los mismos casos para saber si una mejora lo es de verdad.

## Recursos para profundizar

- `building-with-claude-api` (catálogo) — evaluación de prompts.
- Módulo 07 (API) — evaluaciones a escala.

## Siguiente lección

➡️ `12-antipatrones`

## Fuentes

- [docs.claude.com — evaluar prompts](https://docs.claude.com) — consultado 2026-06-14.
