---
titulo: "Tu primera sesión: anatomía de un turno"
modulo: "06-claude-code"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Tu primera sesión: anatomía de un turno

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Describir cómo transcurre un **turno** en Claude Code: instrucción → plan → herramientas → resultado.
- [ ] Interpretar lo que ves (lecturas de archivos, ediciones, comandos).
- [ ] Dar buenas instrucciones iniciales.

## Prerrequisitos

- Lección 02 (instalación) completada.

## Contexto

Trabajar con Claude Code no es como chatear: es **dirigir a un agente**. Entender qué hace en cada turno te permite confiar, supervisar e intervenir en el momento adecuado.

## Contenido principal

### 1. El ciclo de un turno

1. **Tu instrucción:** le pides algo ("añade validación al formulario de registro").
2. **Exploración:** lee los archivos relevantes para entender el contexto.
3. **Acción:** edita ficheros, ejecuta comandos (tests, build) — pidiéndote permiso para lo sensible.
4. **Verificación y resumen:** comprueba el resultado y te cuenta qué hizo.

### 2. Qué ves por pantalla

Verás a Claude **leer** archivos, **editar** con diffs, y **ejecutar** comandos con su salida. No es opaco: puedes seguir cada paso y parar si algo no va por buen camino.

### 3. Dar buenas instrucciones

- Sé concreto sobre el **objetivo** y el **resultado esperado**.
- Si la tarea es grande, deja que **planifique** primero (lección 06).
- Dale contexto del proyecto en `CLAUDE.md` (lección 04) para no repetirlo.

## Ejemplo aplicado

Primera instrucción típica en un proyecto nuevo:
```
Explora este repositorio y dime en 5 puntos qué hace, qué tecnología
usa y cómo se ejecuta. No cambies nada todavía.
```
Es una buena forma de empezar: que entienda el proyecto antes de tocarlo.

## Ejercicio práctico

1. Abre Claude Code en un proyecto (o en una carpeta con unos archivos).
2. Pídele que **explore y resuma** sin modificar nada.
3. Luego pídele un cambio pequeño y observa el ciclo completo.
4. **Criterio de éxito:** identificas las fases del turno y sabes cuándo intervenir.

## Errores comunes

- **Pedir cambios grandes sin contexto:** mejor que explore primero.
- **No leer los diffs:** revisa lo que edita antes de aceptar.

## Resumen en 3 frases

1. Un turno de Claude Code va de tu instrucción a explorar, actuar y verificar.
2. Todo el proceso es visible: lecturas, ediciones y comandos con su salida.
3. Empieza pidiéndole que explore y resuma antes de hacer cambios.

## Recursos para profundizar

- `claude-code-in-action` (catálogo).
- Lección 04 del módulo — CLAUDE.md.

## Siguiente lección

➡️ `04-claude-md`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
