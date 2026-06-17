---
titulo: "Proyecto: Agente autónomo que investiga un tema y produce un informe"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: alta
tiempo_estimado_horas: 15
---

# Agente autónomo que investiga un tema y produce un informe

## Descripción

Un agente que, dado un tema, **planifica**, busca información (web u otras fuentes), la sintetiza y produce un **informe estructurado** con fuentes. Pone en práctica el bucle agéntico: planificar → actuar con herramientas → observar → repetir.

## Objetivos

- [ ] Implementar un bucle agéntico con **tool use** (Módulo 07).
- [ ] Dar al agente una herramienta de búsqueda/lectura.
- [ ] Generar un informe con secciones y citas.
- [ ] Controlar el coste y poner límites de iteraciones.

## Stack y prerrequisitos

- SDK de Anthropic; tool use.
- Una herramienta de búsqueda (API de búsqueda o web fetch) y de lectura.
- Módulos 07 (tool use) y 09 (agentes).

## Arquitectura propuesta

```text
Tema → plan → [buscar → leer → tomar notas]* → síntesis → informe + fuentes
                     ↑__________ bucle con tope de pasos __________|
```

## Pasos

### 1. Preparación
- Define las herramientas (buscar, leer) y sus esquemas. Configura claves.

### 2. Núcleo agéntico
- Prompt de sistema que pida planificar, usar herramientas y citar.
- Implementa el bucle: el modelo pide herramienta → ejecutas → devuelves resultado → repite.

### 3. Síntesis
- Tras N pasos o "suficiente información", pide un informe estructurado con citas.

### 4. Refinamiento
- Límite de pasos y de tokens. Verificación de citas. Manejo de errores de herramienta.

## Criterios de éxito

- [ ] Produce un informe coherente con fuentes verificables.
- [ ] Respeta el tope de pasos y no entra en bucles.
- [ ] Documentado el coste de una ejecución típica.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `book-building-agentic`; `claude-cookbooks` (agents) — catálogo.
- [docs.claude.com — tool use](https://docs.claude.com) — consultado 2026-06-14.
