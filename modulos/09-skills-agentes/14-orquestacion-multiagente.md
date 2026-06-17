---
titulo: "Orquestación multi-agente: patrones"
modulo: "09-skills-agentes"
orden: 14
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 40
---

# Orquestación multi-agente: patrones

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Reconocer **patrones** habituales de orquestación de varios agentes.
- [ ] Elegir el patrón adecuado para una tarea.
- [ ] Entender la figura del agente **coordinador**.

## Prerrequisitos

- Lecciones 12–13 del módulo.

## Contexto

Cuando una tarea es grande y tiene partes, un **agente coordinador** puede repartir el trabajo entre varios subagentes y luego juntar los resultados. Conocer los patrones te ayuda a estructurar ese reparto.

## Contenido principal

### 1. El coordinador

Un agente principal que **planifica**, **reparte** subtareas a subagentes y **sintetiza** sus resultados en una respuesta final. No hace todo el detalle: orquesta.

### 2. Patrones habituales

- **Fan-out / paralelo:** repartir subtareas **independientes** a varios subagentes a la vez (explorar varias carpetas, investigar varios temas) y juntar. Ahorra tiempo cuando no hay dependencias.
- **Pipeline (cadena):** el resultado de un paso alimenta al siguiente (investigar → redactar → revisar). Para trabajo secuencial.
- **Verificación adversarial:** un subagente produce y otro **critica/verifica**, para mayor fiabilidad (útil en revisiones).
- **Panel de perspectivas:** varios subagentes abordan lo mismo desde **ángulos distintos** y se sintetiza lo mejor de cada uno.

### 3. Síntesis: el paso clave

Tras recoger los resultados, el coordinador **integra**: deduplica, resuelve contradicciones y produce una respuesta coherente. Sin una buena síntesis, tienes piezas sueltas, no una solución.

## Ejemplo aplicado

Revisión de un cambio grande:
1. **Fan-out:** subagentes que revisan, cada uno, una dimensión (bugs, seguridad, rendimiento).
2. **Verificación:** otro subagente intenta refutar cada hallazgo.
3. **Síntesis:** el coordinador junta los hallazgos confirmados en un informe.

## Ejercicio práctico

1. Toma una tarea grande tuya.
2. Decide qué patrón encaja (paralelo, pipeline, verificación, panel) y cómo repartirías el trabajo.
3. **Criterio de éxito:** describes una orquestación con reparto y síntesis claros.

## Errores comunes

- **Paralelizar tareas dependientes:** si una necesita el resultado de otra, va en pipeline, no en paralelo.
- **Olvidar la síntesis:** recoger resultados no es integrarlos.

## Resumen en 3 frases

1. Un coordinador planifica, reparte subtareas a subagentes y sintetiza los resultados.
2. Patrones: fan-out (paralelo), pipeline (cadena), verificación adversarial y panel de perspectivas.
3. La síntesis final —deduplicar e integrar— es lo que convierte las piezas en una solución.

## Recursos para profundizar

- `book-building-agentic` (catálogo) — sistemas agénticos.
- `introduction-subagents` (catálogo).

## Siguiente lección

➡️ `15-antipatrones-subagentes`

## Fuentes

- [docs.claude.com — agentes](https://docs.claude.com) — consultado 2026-06-14.
