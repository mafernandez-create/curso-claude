---
titulo: "Subagentes: qué son y cuándo usarlos"
modulo: "09-skills-agentes"
orden: 12
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Subagentes: qué son y cuándo usarlos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es un **subagente** y qué problema resuelve.
- [ ] Reconocer las tareas que se benefician de subagentes.
- [ ] Entender el concepto de **contexto aislado**.

## Prerrequisitos

- Módulo 06, lección 12 (repos grandes y contexto).

## Contexto

Un agente trabaja en un único hilo con un contexto que se va llenando. Para tareas grandes, eso se queda corto. Los **subagentes** permiten **delegar** partes del trabajo a "agentes ayudantes" con su propio contexto, que devuelven solo la conclusión.

## Contenido principal

### 1. Qué es un subagente

Es un agente que el **agente principal** lanza para una subtarea concreta (explorar una parte del código, investigar un tema, revisar algo). Trabaja en su **propio contexto aislado** y devuelve al principal **solo el resultado**, no todo lo que leyó por el camino.

### 2. La ventaja: contexto limpio

El subagente puede leer mucho (decenas de archivos, varias fuentes) sin **ensuciar el contexto del agente principal**: este recibe únicamente la conclusión. Así el agente principal mantiene la visión global sin saturarse de detalle.

### 3. Cuándo usarlos

- **Exploración amplia:** buscar algo en un repo grande o en muchas fuentes.
- **Trabajo paralelo:** varias subtareas independientes a la vez.
- **Tareas que generan mucho "ruido":** cuyo detalle no necesitas conservar, solo su resultado.

## Ejemplo aplicado

En un repositorio enorme, el agente principal lanza un subagente: "explora la carpeta `pagos/` y dime cómo funciona el flujo de cobro". El subagente lee 20 archivos y devuelve un resumen de 10 líneas. El principal sigue con ese resumen, sin haber cargado los 20 archivos.

## Ejercicio práctico

1. Identifica una tarea tuya con mucha exploración cuyo detalle no necesitas conservar.
2. Explica cómo un subagente la abordaría devolviendo solo la conclusión.
3. **Criterio de éxito:** entiendes el valor del contexto aislado de un subagente.

## Errores comunes

- **Usar subagentes para tareas triviales:** añaden complejidad sin ganancia (lección 15).
- **Esperar que el subagente "recuerde" tu contexto:** trabaja aislado; dale las instrucciones que necesite.

## Resumen en 3 frases

1. Un subagente es un agente ayudante que el principal lanza para una subtarea, con su propio contexto.
2. Su ventaja es devolver solo la conclusión, manteniendo limpio el contexto del agente principal.
3. Útil para exploración amplia, trabajo paralelo y tareas que generan mucho detalle prescindible.

## Recursos para profundizar

- `introduction-subagents` (catálogo) — curso oficial.
- Módulo 06, lección 12 — gestión de contexto.
- 🎙️ Inteligencia Artificial (Pocho Costa) — "Dejá de escribir prompts: pensá en sistemas de IA" — introducción divulgativa al salto de prompts a sistemas/agentes.
- 🎙️ Inteligencia Artificial (Pocho Costa) — "De ChatGPT a Agentes de IA: El salto que pocos dan" — generativa vs. agéntica con casos reales.

## Siguiente lección

➡️ `13-contexto-subagentes`

## Fuentes

- [docs.claude.com — subagentes](https://docs.claude.com) — consultado 2026-06-14.
