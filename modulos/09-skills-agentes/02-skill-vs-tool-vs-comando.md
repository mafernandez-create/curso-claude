---
titulo: "Skill vs. tool vs. slash command vs. prompt: cómo decidir"
modulo: "09-skills-agentes"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Skill vs. tool vs. slash command vs. prompt: cómo decidir

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir cuatro mecanismos: **prompt**, **slash command**, **Skill** y **tool/MCP**.
- [ ] Elegir el adecuado para cada necesidad.

## Prerrequisitos

- Lección 01 del módulo. Módulos 06 (slash, hooks), 07 (tools) y 08 (MCP).

## Contexto

Es fácil confundir estos mecanismos porque a veces resuelven cosas parecidas. Tener un criterio de decisión te evita complicar lo simple (o simplificar lo complejo).

## Contenido principal

### 1. Las cuatro opciones

- **Prompt:** una buena instrucción. Para tareas puntuales. Lo más simple.
- **Slash command:** un prompt **reutilizable** que invocas con `/nombre` (Módulo 06). Para repetir el *mismo prompt* a menudo.
- **Skill:** **conocimiento e instrucciones especializadas** que se cargan bajo demanda, posiblemente con recursos. Para procedimientos complejos y reutilizables.
- **Tool / MCP:** una **acción** que ejecuta código (consultar datos, actuar sobre un sistema). Para *hacer* cosas fuera del texto.

### 2. La pregunta clave

- ¿Necesito **hacer** algo (consultar, actuar)? → **Tool / MCP**.
- ¿Es **conocimiento/procedimiento** especializado que Claude debe seguir? → **Skill**.
- ¿Es el **mismo prompt** que repito? → **Slash command**.
- ¿Es **puntual**? → **Prompt**.

### 3. Se combinan

No son excluyentes: una Skill puede incluir un script (acción), y un slash command puede invocar una Skill. Elige el mecanismo **principal** según la necesidad dominante.

## Ejemplo aplicado

- "Consulta el saldo en la base de datos" → **Tool/MCP** (acción).
- "Redacta siguiendo nuestro manual de estilo de 5 páginas" → **Skill** (conocimiento detallado).
- "Revisa el diff buscando bugs" (siempre igual) → **Slash command**.
- "Resume este correo" → **Prompt** (puntual).

## Ejercicio práctico

1. Lista cuatro necesidades tuyas.
2. Asigna a cada una el mecanismo adecuado y justifícalo.
3. **Criterio de éxito:** eliges con criterio entre prompt, slash, Skill y tool/MCP.

## Errores comunes

- **Crear una Skill para un prompt puntual:** exceso de ingeniería.
- **Usar un prompt para algo que necesita una acción:** necesitas una tool.

## Resumen en 3 frases

1. Prompt (puntual), slash command (prompt repetido), Skill (conocimiento especializado), tool/MCP (acción).
2. Pregúntate: ¿hacer algo? tool; ¿conocimiento? Skill; ¿mismo prompt? slash; ¿puntual? prompt.
3. Se combinan; elige el mecanismo según la necesidad dominante.

## Recursos para profundizar

- `introduction-agent-skills` (catálogo).
- Módulo 06, lección 07 (slash) y Módulo 08 (MCP).

## Siguiente lección

➡️ `03-anatomia-skill-md`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
