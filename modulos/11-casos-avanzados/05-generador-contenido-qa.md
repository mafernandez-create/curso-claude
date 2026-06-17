---
titulo: "Proyecto: Generador de contenido editorial con control de calidad"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: media
tiempo_estimado_horas: 8
---

# Generador de contenido editorial con control de calidad

## Descripción

Un pipeline que **genera y luego revisa** contenido (artículos, fichas, posts) en dos fases: un agente redacta y otro **critica/verifica** contra una rúbrica antes de aprobar. Aplica el patrón generador-crítico.

## Objetivos

- [ ] Definir una **rúbrica** de calidad explícita.
- [ ] Implementar fase de generación y fase de revisión.
- [ ] Iterar hasta cumplir la rúbrica o marcar para revisión humana.
- [ ] Aprender el patrón generador-evaluador.

## Stack y prerrequisitos

- SDK de Anthropic.
- Módulos 05 (prompting) y 09 (subagentes/orquestación).

## Arquitectura propuesta

```text
Brief → generador → borrador → crítico (rúbrica) → ¿aprueba? → publica/borrador final
                          ↑________ iterar si no cumple ________|
```

## Pasos

### 1. Preparación
- Escribe la rúbrica (exactitud, tono, longitud, estructura, fuentes).

### 2. Núcleo
- Prompt de generación con el brief y las convenciones.
- Prompt de revisión que puntúa contra la rúbrica y devuelve correcciones.

### 3. Pruebas
- Genera 5 piezas; comprueba que el crítico detecta fallos reales.

### 4. Refinamiento
- Ajusta rúbrica y número máximo de iteraciones.

## Criterios de éxito

- [ ] El crítico rechaza piezas que incumplen la rúbrica.
- [ ] Las piezas aprobadas cumplen tono y estructura definidos.
- [ ] Documentado el efecto del control de calidad (antes/después).

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- Módulo 09; `claude-cookbooks` — catálogo.
- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
