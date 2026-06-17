---
titulo: "Diseñar buenas description para el triggering"
modulo: "09-skills-agentes"
orden: 8
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Diseñar buenas description para el triggering

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar por qué la **description** decide si una Skill se activa.
- [ ] Escribir descriptions que se disparen **cuando toca** (y no cuando no).
- [ ] Diagnosticar problemas de *triggering*.

## Prerrequisitos

- Lecciones 03 y 06 del módulo.

## Contexto

Una Skill perfecta es inútil si **no se activa cuando hace falta** (o se activa de más). El responsable de ese comportamiento es la **description** del frontmatter. Es, con diferencia, lo que más cuidado merece.

## Contenido principal

### 1. Qué hace la description

Es lo único de la Skill que Claude tiene **siempre en contexto** (nivel 1, lección 04). A partir de ella decide si la tarea actual encaja con la Skill. Si la description es clara sobre **qué hace** y **cuándo usarla**, el triggering acierta.

### 2. Cómo escribir una buena description

- Di **qué hace** la Skill, en concreto.
- Di **cuándo usarla**, con las situaciones o palabras que la disparan: "úsala cuando el usuario pida X, Y o Z".
- Incluye **sinónimos y formas naturales** de pedirlo (la gente no usa siempre las mismas palabras).
- Evita ser tan amplia que se dispare con cualquier cosa, o tan estrecha que no se active nunca.

### 3. Diagnosticar el triggering

- **No se activa cuando debería:** la description es demasiado estrecha o no incluye cómo lo pide la gente. Amplíala con más situaciones/sinónimos.
- **Se activa de más:** es demasiado amplia. Acótala a sus casos reales.

## Ejemplo aplicado

Mala: `description: Ayuda con documentos.` (vaga → triggering errático).

Buena: `description: Redacta actas de reunión con el formato de la empresa. Úsala cuando el usuario pida un acta, resumir una reunión en formato de acta, o documentar acuerdos y tareas de una reunión.`

## Ejercicio práctico

1. Escribe la description de una Skill tuya con "qué hace" y "cuándo usarla".
2. Pruébala con **tres** formas distintas de pedir lo mismo.
3. Ajusta hasta que se active en las tres.
4. **Criterio de éxito:** la Skill se dispara con peticiones naturales variadas, no solo con la frase exacta.

## Errores comunes

- **Description que solo describe, sin "cuándo":** falla el triggering.
- **Probar solo con la frase literal:** prueba variantes naturales.

## Resumen en 3 frases

1. La description es lo que Claude usa para decidir si activar una Skill; es la pieza crítica.
2. Una buena description dice qué hace y cuándo usarla, con situaciones y sinónimos.
3. Si no se activa, amplíala; si se activa de más, acótala.

## Recursos para profundizar

- [docs.claude.com — triggering de Skills](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 05 (Prompt Engineering) — claridad en las instrucciones.

## Siguiente lección

➡️ `09-testing-skills`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
