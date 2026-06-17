---
titulo: "Anatomía de SKILL.md: frontmatter y cuerpo"
modulo: "09-skills-agentes"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Anatomía de SKILL.md: frontmatter y cuerpo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Describir la estructura de un archivo **SKILL.md**.
- [ ] Escribir un **frontmatter** correcto (name, description).
- [ ] Redactar un **cuerpo** con instrucciones claras.

> **Nota:** el formato exacto del frontmatter puede evolucionar; consulta la documentación oficial de Agent Skills para los campos vigentes.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

Una Skill es, en esencia, su `SKILL.md`. Tiene dos partes: un **frontmatter** (metadatos) y un **cuerpo** (las instrucciones). Saber qué va en cada parte es la base para crear Skills.

## Contenido principal

### 1. El frontmatter

Es un bloque de metadatos al inicio del archivo (en formato YAML). Los dos campos esenciales:
- **`name`:** identificador de la Skill.
- **`description`:** **una frase clave** que dice qué hace la Skill y **cuándo** usarla. Es lo que Claude lee para decidir si activarla (lección 08). De su calidad depende que la Skill se dispare cuando toca.

```markdown
---
name: informe-incidencia
description: Redacta informes de incidencia con el formato de la empresa. Úsala cuando el usuario pida documentar una incidencia o avería.
---
```

### 2. El cuerpo

Tras el frontmatter, en Markdown normal, van las **instrucciones**: el procedimiento, el formato, las reglas, ejemplos. Es lo que Claude lee **una vez activada** la Skill. Escríbelo claro y específico, como si instruyeras a un compañero.

### 3. Conciso pero completo

El cuerpo debe tener lo necesario, sin paja. Si es muy largo, considera mover detalles a **recursos aparte** que se carguen bajo demanda (lección 04 y 05).

## Ejemplo aplicado

```markdown
---
name: informe-incidencia
description: Redacta informes de incidencia con el formato corporativo. Úsala cuando el usuario quiera documentar una incidencia o avería.
---

# Informe de incidencia

Cuando te pidan un informe de incidencia, produce un documento con estos apartados:
1. Resumen (2-3 líneas).
2. Cronología de los hechos.
3. Impacto.
4. Causa raíz.
5. Acciones correctivas (con responsable y fecha).

Tono neutro y factual. No especules sobre culpables.
```

## Ejercicio práctico

1. Escribe el frontmatter (name + description) de una Skill tuya.
2. Redacta un cuerpo con el procedimiento.
3. **Criterio de éxito:** tu SKILL.md tiene una description clara y un cuerpo específico.

## Errores comunes

- **Description vaga:** la Skill no se activará cuando toca (lección 08).
- **Cuerpo enorme:** mueve detalles a recursos bundled.

## Resumen en 3 frases

1. Un SKILL.md tiene frontmatter (metadatos) y cuerpo (instrucciones).
2. El frontmatter incluye `name` y, sobre todo, una `description` que diga qué hace y cuándo usarla.
3. El cuerpo son las instrucciones del procedimiento, claras y concisas.

## Recursos para profundizar

- `anthropic-skills` (catálogo) — repo oficial de Skills, con ejemplos reales.
- [docs.claude.com — formato de Skills](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `04-progressive-disclosure`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
