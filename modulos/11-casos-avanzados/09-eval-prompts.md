---
titulo: "Proyecto: Pipeline de evaluación de prompts (evals)"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: media
tiempo_estimado_horas: 8
---

# Pipeline de evaluación de prompts (evals)

## Descripción

Un sistema para **medir objetivamente** qué prompt o configuración funciona mejor: defines un conjunto de casos con respuesta esperada (o criterio), ejecutas variantes y comparas resultados. Sustituye el "a ojo" por números.

> Nota: el título del banco lo llamaba "fine-tuning ligero"; en la práctica, para la mayoría de casos lo que aporta valor es **evaluación sistemática de prompts**, no entrenar el modelo. Eso es lo que cubre este proyecto.

## Objetivos

- [ ] Construir un **dataset de evaluación** (entradas + criterio de acierto).
- [ ] Ejecutar varias variantes de prompt/configuración sobre el dataset.
- [ ] Puntuar automáticamente (exact match, criterio, o **LLM-as-judge**).
- [ ] Decidir con datos qué variante es mejor.

## Stack y prerrequisitos

- SDK de Anthropic.
- Módulos 05 (prompting) y 07 (API).

## Arquitectura propuesta

```text
Dataset (caso → esperado) × Variantes de prompt → ejecutar → puntuar → tabla comparativa
```

## Pasos

### 1. Preparación
- Reúne 20-50 casos representativos con su criterio de éxito.

### 2. Núcleo
- Ejecuta cada variante sobre todos los casos; recoge salidas.
- Implementa el evaluador (regla exacta o un juez LLM con rúbrica).

### 3. Análisis
- Tabla con tasa de acierto por variante; identifica la ganadora.

### 4. Refinamiento
- Amplía casos difíciles; revisa falsos positivos del juez.

## Criterios de éxito

- [ ] Comparas ≥2 variantes con una métrica clara.
- [ ] La decisión se justifica con la tabla, no por intuición.
- [ ] Documentadas las limitaciones del evaluador.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `claude-cookbooks` (evals) — catálogo.
- [docs.claude.com — evaluaciones](https://docs.claude.com) — consultado 2026-06-14.
