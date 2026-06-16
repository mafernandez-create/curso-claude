---
titulo: "Qué es Claude Code y cuándo usarlo"
modulo: "06-claude-code"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 20
---

# Qué es Claude Code y cuándo usarlo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es **Claude Code** y en qué se diferencia de usar Claude por la web.
- [ ] Reconocer las tareas en las que brilla y aquellas en las que no aporta.
- [ ] Situarlo entre las distintas formas de usar Claude.

## Prerrequisitos

- Módulo 05 (Prompt Engineering).
- Nociones básicas de terminal y Git (no hace falta ser programador experto).

## Contexto

Claude Code es Claude trabajando **dentro de tu entorno de desarrollo**: en la terminal, con acceso a tus archivos y a herramientas como Git. No es un chat donde copias y pegas código, sino un **agente** que lee tu proyecto, propone cambios, ejecuta comandos (con tu permiso) y verifica resultados.

## Contenido principal

### 1. Del chat al agente en tu máquina

En la web, Claude no ve tus archivos: le pegas código y te devuelve texto. Claude Code, en cambio, **opera sobre tu repositorio**: abre ficheros, los edita, lanza pruebas, hace commits. Es la diferencia entre pedir consejo y tener a alguien trabajando contigo en el proyecto.

### 2. Cuándo brilla

- Cambios que tocan **varios archivos** de un proyecto.
- Tareas con **verificación** (ejecutar tests, ver que algo compila).
- Refactors, depuración, automatizar tareas repetitivas de código.
- Explorar y entender un código que no conoces.

### 3. Cuándo no es la herramienta

- Una pregunta conceptual suelta (la web va sobrada).
- Si no tienes un proyecto/entorno donde trabajar.
- Tareas no técnicas: ahí usa la interfaz o Cowork (módulos 03–04).

### 4. Dónde encaja

| Forma de usar Claude | Para qué |
|---|---|
| Web / app / móvil | Uso general, escritura, análisis |
| Claude Code (terminal/IDE) | **Desarrollo en tu proyecto** |
| API | Integrarlo en tus propias aplicaciones (Módulo 07) |

## Ejercicio práctico

1. Anota tres tareas técnicas tuyas recientes.
2. Marca cuáles se beneficiarían de un agente con acceso a tus archivos.
3. **Criterio de éxito:** distingues qué tareas son para Claude Code y cuáles para la web.

## Errores comunes

- **Usarlo como un chat** (pegar código en vez de dejar que lea el proyecto): desperdicias su mayor ventaja.
- **Forzarlo para todo:** para una duda rápida, la web es más ágil.

## Resumen en 3 frases

1. Claude Code es Claude operando dentro de tu entorno: lee tus archivos, edita, ejecuta y verifica.
2. Brilla en cambios multi-archivo, tareas verificables y exploración de código.
3. Para preguntas sueltas o tareas no técnicas, la web o Cowork son mejores.

## Recursos para profundizar

- `claude-code-in-action` (catálogo) — curso oficial.
- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `02-instalacion`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
