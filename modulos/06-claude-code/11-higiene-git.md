---
titulo: "Higiene de Git con IA: ramas, PRs y revisión de diffs generados"
modulo: "06-claude-code"
orden: 11
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Higiene de Git con IA: ramas, PRs y revisión de diffs generados

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Aplicar buenas prácticas de Git cuando parte del código lo genera una IA.
- [ ] Mantener cambios **pequeños y revisables**.
- [ ] Revisar con criterio un diff generado por Claude.

## Prerrequisitos

- Lección 10 del módulo.

## Contexto

Que una IA genere código rápido tiene un riesgo: producir cambios grandes y difíciles de revisar. La **higiene de Git** —ramas, commits pequeños, PRs claros— es aún más importante cuando trabajas con un agente, porque es tu forma de mantener el control sobre lo que entra al proyecto.

## Contenido principal

### 1. Cambios pequeños y enfocados

Pide a Claude Code cambios **acotados**: una tarea, una rama, un PR. Un PR de 2000 líneas no lo revisa nadie bien. Si una tarea es grande, divídela en varias entregas pequeñas. Cuanto más pequeño el diff, mejor lo revisas.

### 2. Ramas y mensajes

- Trabaja en **ramas**, no directamente sobre la principal.
- Mensajes de commit **claros** que expliquen el *qué* y el *porqué*.
- Un PR = un cambio con sentido propio.

### 3. Revisar un diff generado: qué mirar

- **¿Hace lo que pedí, y solo eso?** La IA a veces "mejora" cosas no pedidas.
- **Casos límite y errores:** ¿maneja entradas vacías, fallos?
- **Seguridad:** ¿introduce secretos, dependencias dudosas?
- **Encaje con el proyecto:** ¿sigue las convenciones del `CLAUDE.md`?

La revisión es tuya: que la IA escriba no te exime de entender lo que entra.

## Ejemplo aplicado

En vez de "reescribe todo el módulo de pagos", trabaja por partes:
```
Hagamos esto en pasos pequeños, cada uno su propio commit:
1) extraer la validación a una función,
(revisamos) 2) añadir tests, (revisamos) 3) refactor del flujo.
```

## Ejercicio práctico

1. Pide a Claude Code un cambio dividido en **2–3 commits pequeños**.
2. Revisa cada diff con la lista de la sección 3.
3. **Criterio de éxito:** cada commit es pequeño, claro y lo entiendes del todo.

## Errores comunes

- **PRs enormes:** imposibles de revisar bien; divide.
- **Aceptar "mejoras" no pedidas:** pide ceñirse a lo solicitado.

## Resumen en 3 frases

1. Con código generado por IA, la higiene de Git (ramas, commits pequeños, PRs claros) es tu control de calidad.
2. Mantén los cambios acotados: un PR enorme no se revisa bien.
3. Revisa cada diff comprobando que hace lo pedido, cubre errores, es seguro y respeta las convenciones.

## Recursos para profundizar

- Lección 10 del módulo — GitHub.
- Módulo 13 (Seguridad) — riesgos en dependencias y secretos.

## Siguiente lección

➡️ `12-repos-grandes-contexto`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
