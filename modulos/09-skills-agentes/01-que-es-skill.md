---
titulo: "Qué es una Skill y cuándo usarla"
modulo: "09-skills-agentes"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 20
---

# Qué es una Skill y cuándo usarla

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es una **Skill** y qué aporta.
- [ ] Distinguir cuándo conviene crear una.
- [ ] Conectar este concepto con las Skills de oficina del Módulo 03.

## Prerrequisitos

- Módulo 03, lección 04 (Skills preconfiguradas). Módulo 06 (Claude Code).

## Contexto

En el Módulo 03 usaste Skills ya hechas (Excel, Word…). Ahora aprenderás a **crear las tuyas**. Una Skill empaqueta **conocimiento e instrucciones especializadas** que Claude carga **solo cuando la tarea lo requiere**, en lugar de tenerlo todo siempre en el prompt.

## Contenido principal

### 1. Qué es una Skill

Es una **carpeta** con un archivo principal (`SKILL.md`) que contiene instrucciones para una tarea concreta, y opcionalmente recursos (scripts, plantillas, documentos). Claude la "aprende" cuando tu petición encaja con su propósito.

### 2. La idea clave: carga bajo demanda

No metes todo el conocimiento en el system prompt (lo saturaría). En su lugar, la Skill vive aparte y se **activa cuando hace falta**. Así Claude solo carga las instrucciones de "generar facturas" cuando le pides una factura, no en cada conversación.

### 3. Cuándo crear una

- Tienes un **procedimiento especializado** que repites (un tipo de informe, un flujo concreto).
- Requiere **instrucciones detalladas** que no querrías repetir cada vez.
- Quieres **compartirlo** o reutilizarlo en muchos proyectos.

Para algo puntual, un buen prompt basta (lección 02).

## Ejemplo aplicado

Una Skill "informe-incidencia" que, cuando pides "redacta el informe de la incidencia de hoy", aporta el formato exacto de tu empresa, los apartados obligatorios y el tono. No tienes que explicar nada de eso cada vez: la Skill lo sabe.

## Ejercicio práctico

1. Identifica un procedimiento especializado que repitas.
2. Decide si merece ser una Skill (instrucciones detalladas + reutilización).
3. **Criterio de éxito:** sabes qué es una Skill y reconoces un buen candidato.

## Errores comunes

- **Hacer una Skill para algo trivial:** un prompt basta.
- **Meter el conocimiento en el system prompt:** lo satura; para eso están las Skills.

## Resumen en 3 frases

1. Una Skill empaqueta instrucciones y recursos especializados en una carpeta con un SKILL.md.
2. Su clave es la carga bajo demanda: Claude la activa solo cuando la tarea encaja.
3. Conviene cuando repites un procedimiento detallado o quieres reutilizarlo y compartirlo.

## Recursos para profundizar

- `introduction-agent-skills` (catálogo) — curso oficial.
- [docs.claude.com — Agent Skills](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `02-skill-vs-tool-vs-comando`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
