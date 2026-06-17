---
titulo: "Recursos bundled: scripts, references y assets"
modulo: "09-skills-agentes"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Recursos bundled: scripts, references y assets

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir los tipos de **recursos** que una Skill puede incluir.
- [ ] Saber cuándo poner algo como recurso en vez de en el cuerpo.
- [ ] Organizar la carpeta de una Skill.

## Prerrequisitos

- Lección 04 del módulo (progressive disclosure).

## Contexto

Una Skill es una **carpeta**, no solo un archivo. Además del `SKILL.md`, puede incluir recursos que se cargan o ejecutan **bajo demanda** (nivel 3). Esto mantiene el cuerpo ligero y permite Skills potentes.

## Contenido principal

### 1. Tipos de recursos

- **References (referencias):** documentos de apoyo (una guía larga, una especificación, ejemplos) que Claude **lee** solo cuando el procedimiento lo pide. Ideal para detalle que no cabe en el cuerpo.
- **Scripts:** código **ejecutable** que la Skill puede correr (lección 07). Útil para tareas deterministas (procesar un archivo, generar algo).
- **Assets:** archivos que la Skill **usa o produce** (plantillas, imágenes, ficheros base).

### 2. Cuándo usar un recurso

Si algo es **largo** (una guía de 10 páginas) o **ejecutable** (un script), no va en el cuerpo: va como recurso. El cuerpo del SKILL.md **apunta** a ese recurso y dice cuándo usarlo.

### 3. Organización de la carpeta

Una estructura típica:
```
mi-skill/
  SKILL.md          (frontmatter + instrucciones)
  references/       (documentos de apoyo)
  scripts/          (código ejecutable)
  assets/           (plantillas, ficheros)
```
(Los nombres concretos pueden variar; sigue la convención de la documentación oficial.)

## Ejemplo aplicado

Skill "generar-presupuesto":
- `SKILL.md`: cómo elaborar el presupuesto.
- `references/tarifas.md`: la tabla de tarifas (larga), que se lee solo al calcular.
- `assets/plantilla.xlsx`: la plantilla base sobre la que se rellena.

## Ejercicio práctico

1. Para una Skill tuya, decide qué iría como reference, qué como script y qué como asset.
2. Esboza la estructura de carpeta.
3. **Criterio de éxito:** separas el detalle pesado y lo ejecutable del cuerpo del SKILL.md.

## Errores comunes

- **Pegar documentos largos en el cuerpo:** ponlos como references.
- **No indicar cuándo usar cada recurso:** el cuerpo debe apuntar a ellos.

## Resumen en 3 frases

1. Una Skill es una carpeta que puede incluir references (leer), scripts (ejecutar) y assets (usar/producir).
2. El detalle largo o ejecutable va como recurso, no en el cuerpo, y se carga bajo demanda.
3. El SKILL.md apunta a esos recursos e indica cuándo usarlos.

## Recursos para profundizar

- `anthropic-skills` (catálogo) — ejemplos con recursos.
- [docs.claude.com — recursos de Skills](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `06-primera-skill`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
