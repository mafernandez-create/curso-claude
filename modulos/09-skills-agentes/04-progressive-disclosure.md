---
titulo: "Progressive disclosure: los tres niveles de carga"
modulo: "09-skills-agentes"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Progressive disclosure: los tres niveles de carga

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar la **divulgación progresiva** (*progressive disclosure*) de una Skill.
- [ ] Identificar los **tres niveles** de carga de información.
- [ ] Diseñar Skills que no saturen el contexto.

## Prerrequisitos

- Lección 03 del módulo. Módulo 01, lección 01 (contexto y tokens).

## Contexto

El gran truco de las Skills es **no cargar todo de golpe**. La información se revela **por niveles**, según hace falta, para mantener el contexto ligero. Esto se llama *progressive disclosure*.

## Contenido principal

### 1. Nivel 1: la description (siempre en contexto)

La **`description`** del frontmatter está disponible **siempre**, de forma muy ligera. Es lo que permite a Claude saber que la Skill existe y **decidir si activarla**. Cuesta muy pocos tokens.

### 2. Nivel 2: el cuerpo del SKILL.md (al activarse)

Cuando la Skill se considera relevante, Claude **lee el cuerpo** del `SKILL.md` con las instrucciones completas. Solo entonces ocupa contexto, y solo si de verdad se necesita.

### 3. Nivel 3: recursos bundled (bajo demanda)

Si la Skill incluye **recursos** (un documento de referencia largo, un script, plantillas), estos se cargan **solo cuando el procedimiento los requiere** (lección 05). El detalle pesado vive aparte y se trae justo a tiempo.

### 4. Por qué importa

Así puedes tener **muchas Skills** sin saturar el contexto: solo pagas el coste de cada una cuando se usa. Diseña pensando en niveles: lo imprescindible arriba, el detalle abajo.

## Ejemplo aplicado

Una Skill de análisis financiero:
- **Nivel 1:** description ("analiza estados financieros; úsala cuando…").
- **Nivel 2:** SKILL.md con el procedimiento de análisis.
- **Nivel 3:** un documento de referencia con las fórmulas y ratios, que se carga solo si el análisis las necesita.

## Ejercicio práctico

1. Para una Skill tuya, decide qué va en cada nivel.
2. Comprueba que el nivel 1 (description) es suficiente para decidir activarla.
3. **Criterio de éxito:** tu Skill no carga el detalle pesado hasta que se necesita.

## Errores comunes

- **Meterlo todo en el cuerpo (nivel 2):** ocupa contexto aunque no haga falta; usa recursos (nivel 3).
- **Description pobre (nivel 1):** sin ella, Claude no sabe cuándo activar la Skill.

## Resumen en 3 frases

1. Las Skills revelan información por niveles para no saturar el contexto (progressive disclosure).
2. Nivel 1: la description (siempre); nivel 2: el cuerpo (al activarse); nivel 3: recursos (bajo demanda).
3. Diseñar por niveles te permite tener muchas Skills pagando su coste solo cuando se usan.

## Recursos para profundizar

- [docs.claude.com — progressive disclosure](https://docs.claude.com) — consultado 2026-06-14.
- `anthropic-skills` (catálogo).

## Siguiente lección

➡️ `05-recursos-bundled`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
