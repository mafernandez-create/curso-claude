---
titulo: "Comandos slash personalizados"
modulo: "06-claude-code"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Comandos slash personalizados

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué son los **comandos slash** y para qué sirven los personalizados.
- [ ] Crear un comando propio para una tarea que repites.
- [ ] Decidir qué merece convertirse en comando.

## Prerrequisitos

- Lección 04 del módulo (CLAUDE.md).

## Contexto

Si una y otra vez le pides a Claude Code lo mismo ("revisa el diff buscando bugs", "prepara el commit siguiendo nuestras convenciones"), puedes encapsular esa instrucción en un **comando slash** y ejecutarlo con `/nombre`. Es como una macro de prompts.

## Contenido principal

### 1. Qué son

Los comandos slash se invocan escribiendo `/` seguido del nombre. Hay comandos integrados y puedes crear los **tuyos**: un comando personalizado es un archivo con un prompt (las instrucciones) que se ejecuta al invocarlo.

### 2. Cómo se crean (idea general)

Se definen como archivos en una carpeta de configuración del proyecto (o de tu usuario). Cada archivo contiene el prompt que quieres reutilizar; el nombre del archivo se convierte en el nombre del comando. Pueden aceptar argumentos. Consulta la doc oficial para la ubicación y el formato exactos, que pueden variar entre versiones.

### 3. Qué merece ser un comando

- Tareas que repites **igual** muchas veces (revisar, formatear, generar un tipo de informe).
- Flujos con varios pasos que siempre haces igual.
- Convenciones de equipo que quieres aplicar de forma consistente (lección 15).

## Ejemplo aplicado

Un comando `/revisa` cuyo prompt sea:
```
Revisa los cambios actuales (git diff) buscando bugs, casos límite no
cubiertos y problemas de seguridad. Lista los hallazgos por gravedad.
No modifiques nada, solo informa.
```
A partir de ahí, escribir `/revisa` lanza esa revisión sin reescribir el prompt.

## Ejercicio práctico

1. Identifica una instrucción que repitas en Claude Code.
2. Conviértela en un comando slash personalizado (sigue la doc para la ubicación).
3. Úsalo dos veces.
4. **Criterio de éxito:** ejecutas la tarea con `/tu-comando` sin reescribir el prompt.

## Errores comunes

- **Crear comandos para todo:** solo lo que repites de verdad; si no, acumulas ruido.
- **Prompts vagos dentro del comando:** un comando es tan bueno como el prompt que contiene (Módulo 05).

## Resumen en 3 frases

1. Los comandos slash personalizados encapsulan un prompt reutilizable que invocas con `/nombre`.
2. Se definen como archivos con el prompt; consulta la doc para ubicación y formato actuales.
3. Conviértelos a partir de tareas que repites igual muchas veces.

## Recursos para profundizar

- [docs.claude.com — comandos slash](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 04, lección 11 — biblioteca de prompts (de donde saldrán muchos comandos).

## Siguiente lección

➡️ `08-hooks`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
