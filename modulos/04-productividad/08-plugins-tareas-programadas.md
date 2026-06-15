---
titulo: "Plugins y tareas programadas"
modulo: "04-productividad"
orden: 8
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Plugins y tareas programadas

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué son los **plugins/integraciones** y las **tareas programadas**.
- [ ] Imaginar automatizaciones útiles para tu caso (informes recurrentes, avisos).
- [ ] Aplicar las precauciones de una tarea que se ejecuta sola.

> **Nota:** los nombres y la disponibilidad de estas funciones cambian y dependen del plan. Esta lección explica el *concepto*; consulta [docs.claude.com](https://docs.claude.com) para el estado actual. Este curso mismo usa una tarea programada semanal como ejemplo real (ver `docs/retroalimentacion-dinamica.md`).

## Prerrequisitos

- Lecciones 03 (Cowork) y 07 (Slack) del módulo.

## Contexto

Hasta ahora tú inicias cada interacción. Dos funciones cambian eso: los **plugins** (conectar Claude con más herramientas y capacidades) y las **tareas programadas** (que Claude haga algo **por sí solo, a una hora fijada**, sin que estés delante).

## Contenido principal

### 1. Plugins / integraciones

Amplían lo que Claude puede hacer conectándolo con servicios o capacidades extra. La idea es la misma que los conectores (Módulo 03, L06): das acceso, y Claude usa esa herramienta cuando la tarea lo pide.

### 2. Tareas programadas

Defines una tarea ("cada lunes, resume las novedades de estas fuentes y envíame el informe") y se **ejecuta automáticamente** en el momento indicado. Ideal para lo recurrente: informes, recordatorios, vigilancia de fuentes.

### 3. Precauciones de lo automático

Una tarea que corre sola requiere más cuidado:
- **Que proponga, no que actúe a ciegas:** para acciones con efectos, mejor que prepare un borrador y tú confirmes (justo lo que hace la rutina semanal de este curso).
- **Revisa sus resultados periódicamente:** una automatización mal calibrada falla en silencio.

## Ejemplo aplicado

El propio curso lo usa: una tarea programada **cada lunes** revisa fuentes (incluidos los podcasts), detecta novedades y deja un **informe de propuestas** — sin aplicar nada hasta que una persona lo confirma. Es el patrón recomendado: automatizar la detección, no la decisión.

## Ejercicio práctico

1. Piensa una tarea **recurrente** tuya (un resumen semanal, un recordatorio).
2. Descríbela como una tarea programada: qué hace, cuándo, qué entrega.
3. Decide qué parte puede ser automática y cuál necesita tu confirmación.
4. **Criterio de éxito:** separas con claridad "detectar/preparar" (automatizable) de "decidir/enviar" (confirmas tú).

## Errores comunes

- **Automatizar la decisión, no solo la preparación:** deja la última palabra a una persona en lo que tenga efectos.
- **Olvidarte de la tarea:** revísala de vez en cuando para que no degrade.

## Resumen en 3 frases

1. Los plugins amplían las capacidades de Claude; las tareas programadas hacen que actúe solo a una hora fijada.
2. Son ideales para lo recurrente: informes, avisos, vigilancia de fuentes.
3. Automatiza la detección y la preparación, pero deja la decisión y las acciones con efectos a una persona.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — automatización y tareas.
- `docs/retroalimentacion-dinamica.md` — ejemplo real en este curso.

## Siguiente lección

➡️ `09-escribir-mejor`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
