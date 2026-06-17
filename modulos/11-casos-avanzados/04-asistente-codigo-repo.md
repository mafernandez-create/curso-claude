---
titulo: "Proyecto: Asistente de código sobre tu propio repositorio"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: alta
tiempo_estimado_horas: 12
---

# Asistente de código sobre tu propio repositorio

## Descripción

Un asistente que responde preguntas y propone cambios sobre **tu repositorio**: entiende su estructura, encuentra el código relevante y explica o modifica con contexto. Puedes apoyarte en Claude Code (Módulo 06) o construirlo con la API.

## Objetivos

- [ ] Indexar/recuperar el código relevante para una pregunta.
- [ ] Responder con referencias a archivo y línea.
- [ ] Proponer diffs revisables (no aplicar sin revisión).
- [ ] Comparar tu solución con lo que hace Claude Code.

## Stack y prerrequisitos

- SDK de Anthropic o Claude Code.
- Acceso de lectura al repo; opcional vector store para RAG de código.
- Módulos 06 (Claude Code) y 07 (API).

## Arquitectura propuesta

```text
Pregunta → recuperar archivos relevantes (búsqueda/RAG) → prompt con código → Claude → respuesta/diff con refs
```

## Pasos

### 1. Preparación
- Decide vía: Claude Code directo o API + recuperación propia.

### 2. Núcleo
- Recuperación de archivos por nombre/contenido; pasa fragmentos como contexto.
- Prompt que exige citar `archivo:línea` y proponer cambios como diff.

### 3. Pruebas
- 10 preguntas reales sobre tu repo; valida exactitud de las referencias.

### 4. Refinamiento
- Mejora la recuperación; añade límites para repos grandes.

## Criterios de éxito

- [ ] Responde con referencias correctas a tu código.
- [ ] Los diffs propuestos son aplicables y razonables.
- [ ] Comparación escrita con la experiencia de Claude Code.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- Módulo 06 (Claude Code); `claude-cookbooks` — catálogo.
- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
