---
titulo: "Debugging de respuestas erróneas"
modulo: "05-prompt-engineering"
orden: 13
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Debugging de respuestas erróneas

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Diagnosticar **por qué** una respuesta salió mal.
- [ ] Aplicar una rutina de corrección paso a paso.
- [ ] Cerrar el módulo con una checklist de prompting.

## Prerrequisitos

- Todo el módulo 05.

## Contexto

Cuando una respuesta no es la que esperabas, la reacción típica es repetir el prompt esperando suerte. Mejor es **diagnosticar**: casi siempre el fallo está en el prompt, no en el modelo, y es identificable.

## Contenido principal

### 1. Las cuatro causas habituales

1. **Instrucción ambigua** → la respuesta interpreta otra cosa. (Arregla: claridad, lección 02.)
2. **Falta contexto** → respuesta genérica o equivocada de marco. (Arregla: contexto.)
3. **Formato no especificado** → sale en un formato que no querías. (Arregla: formato / etiquetas.)
4. **Tarea demasiado grande** → respuesta superficial o incompleta. (Arregla: divide en pasos.)

### 2. Rutina de corrección

1. **Lee la respuesta como si fueras Claude:** ¿qué entendió de tu prompt?
2. **Localiza la pata que falló** (claridad / contexto / formato / tamaño).
3. **Corrige solo eso** y vuelve a probar.
4. Si persiste, **divide la tarea** o añade un ejemplo (few-shot).

### 3. Pídele ayuda a Claude para depurar

Puedes preguntarle directamente: *"¿qué parte de mi instrucción es ambigua?"* o *"¿qué información te falta para hacerlo bien?"*. A menudo te dice exactamente qué arreglar.

## Ejemplo aplicado

Respuesta demasiado larga y genérica a "háblame de marketing":
- Diagnóstico: falta contexto + falta tamaño/formato.
- Corrección: `Soy dueño de una cafetería de barrio. Dame 3 acciones de marketing local de bajo coste, en una lista, máximo 2 líneas cada una.`

## Ejercicio práctico

1. Recupera una respuesta que te decepcionó.
2. Diagnostica cuál de las cuatro causas falló.
3. Corrige esa pata y vuelve a probar.
4. **Criterio de éxito:** arreglas la respuesta cambiando el prompt, no repitiéndolo a ciegas.

## Checklist final de prompting (cierre del módulo)

- [ ] ¿Está clara la **tarea**?
- [ ] ¿He dado el **contexto** necesario?
- [ ] ¿He especificado el **formato**?
- [ ] ¿He separado las partes con **etiquetas** si era largo?
- [ ] ¿Necesita **ejemplos** (few-shot)?
- [ ] ¿La tarea es del **tamaño** adecuado o debería dividirla?

## Resumen en 3 frases

1. Casi todas las respuestas malas vienen del prompt, no del modelo, y la causa es identificable.
2. Diagnostica cuál de las cuatro patas falló (claridad, contexto, formato, tamaño) y corrige solo esa.
3. Puedes pedirle a Claude que te diga qué es ambiguo o qué le falta para hacerlo bien.

## Recursos para profundizar

- Todo el módulo 05.
- `prompting-best-practices` (catálogo).

## Siguiente lección

➡️ Has terminado el Módulo 05. Continúa con el Módulo 06 (Claude Code).

## Fuentes

- [docs.claude.com — prompt engineering](https://docs.claude.com) — consultado 2026-06-14.
