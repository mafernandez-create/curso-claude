---
titulo: "Proyecto: Orquestador multi-agente para una tarea compleja"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: alta
tiempo_estimado_horas: 20
---

# Orquestador multi-agente para una tarea compleja

## Descripción

El proyecto cumbre del módulo: un **sistema de varios agentes** que se reparten una tarea grande. Un orquestador descompone el problema, lanza subagentes especializados (cada uno con su contexto) y **sintetiza** sus resultados. Pone en práctica todo el Módulo 09.

## Objetivos

- [ ] Diseñar la descomposición de una tarea compleja en subtareas.
- [ ] Implementar un orquestador que reparte y recoge resultados.
- [ ] Usar subagentes especializados con contexto acotado.
- [ ] Sintetizar y verificar el resultado final.

## Stack y prerrequisitos

- SDK de Anthropic o Claude Code (subagentes).
- Módulo 09 (subagentes y orquestación) — imprescindible.

## Arquitectura propuesta

```text
Tarea → orquestador (plan) → [subagente A | subagente B | subagente C] → resultados → síntesis → verificación → salida
```

## Pasos

### 1. Preparación
- Elige una tarea real que se beneficie de paralelizar (p. ej. auditar varios módulos, investigar varias fuentes).

### 2. Núcleo
- Orquestador que descompone y lanza subagentes (en paralelo cuando sean independientes).
- Cada subagente devuelve resultado **estructurado**.

### 3. Síntesis y verificación
- Combina resultados; un agente verificador revisa coherencia y errores.

### 4. Refinamiento
- Control de coste, límites por subagente, manejo de fallos parciales.

## Criterios de éxito

- [ ] La tarea se completa repartida entre agentes con resultado coherente.
- [ ] Hay una fase de verificación que detecta errores.
- [ ] Documentada la comparación frente a hacerlo con un solo agente.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- Módulo 09; `book-building-agentic`; `claude-cookbooks` — catálogo.
- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
