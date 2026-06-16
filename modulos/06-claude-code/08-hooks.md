---
titulo: "Hooks: automatizar pasos del ciclo"
modulo: "06-claude-code"
orden: 8
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Hooks: automatizar pasos del ciclo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué son los **hooks** y en qué se diferencian de un comando slash.
- [ ] Imaginar hooks útiles para tu flujo (formatear, ejecutar tests, avisos).
- [ ] Entender que el hook lo ejecuta la herramienta, no el modelo.

## Prerrequisitos

- Lección 07 del módulo (comandos slash).

## Contexto

Un comando slash lo invocas tú. Un **hook** se dispara **solo**, de forma automática, cuando ocurre cierto evento (por ejemplo, "después de que Claude edite un archivo, formatéalo"). Son la forma de garantizar que ciertos pasos se hagan **siempre**, sin depender de acordarte.

## Contenido principal

### 1. Qué es un hook

Es una **acción automática asociada a un evento** del ciclo de Claude Code. A diferencia del modelo (que "decide"), el hook es un comando que la **herramienta ejecuta de forma determinista** cuando se cumple su condición. Esa diferencia es clave: si quieres que algo pase *siempre*, un hook lo garantiza; una instrucción en el prompt, no del todo.

### 2. Ejemplos de uso

- **Formatear** el código automáticamente tras cada edición.
- **Ejecutar los tests** después de terminar una tarea.
- **Avisar** (sonido, notificación) cuando Claude termina o necesita tu atención.
- **Validar** que no se toquen archivos prohibidos.

### 3. Cómo se configuran (idea general)

Se definen en la configuración de Claude Code, asociando un **evento** (antes/después de una herramienta, al terminar, etc.) a un **comando** que se ejecuta. El formato exacto está en la documentación oficial; conviene seguirla porque puede cambiar entre versiones.

### 4. Hooks vs. comandos vs. CLAUDE.md

- **CLAUDE.md:** instrucciones que el modelo *debería* seguir.
- **Comando slash:** un prompt que *tú* invocas.
- **Hook:** una acción que la herramienta *ejecuta sola* ante un evento. Es lo más fiable para garantizar pasos.

## Ejemplo aplicado

Un hook "después de editar un archivo `.js`, ejecuta el formateador". Así, sin que tú ni Claude tengáis que acordaros, el código queda siempre con el formato correcto.

## Ejercicio práctico

1. Piensa un paso que quieras que ocurra **siempre** (formatear, testear, avisar).
2. Configúralo como hook siguiendo la doc oficial.
3. Comprueba que se dispara solo en el momento esperado.
4. **Criterio de éxito:** el paso ocurre automáticamente sin que lo pidas.

## Errores comunes

- **Confundir hook con instrucción de prompt:** si necesitas garantía, usa un hook.
- **Hooks lentos o ruidosos:** que no entorpezcan el flujo; mídelos.

## Resumen en 3 frases

1. Un hook es una acción automática que la herramienta ejecuta ante un evento del ciclo.
2. Sirve para garantizar pasos que deben ocurrir siempre (formatear, testear, avisar).
3. A diferencia de un prompt, el hook es determinista: lo ejecuta la herramienta, no el modelo.

## Recursos para profundizar

- [docs.claude.com — hooks de Claude Code](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `09-integracion-ide`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
