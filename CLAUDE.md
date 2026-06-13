# CLAUDE.md — Instrucciones maestras del proyecto

> Este archivo guía a Claude Code cuando trabaja dentro de este repositorio. Léelo siempre al inicio de una sesión.

## Propósito del proyecto

Este es un **curso estructurado, vivo y actualizable** sobre Claude (Anthropic), organizado como una base de conocimiento personal. No es un libro cerrado: es un sistema pensado para crecer con el tiempo, incorporar novedades de Anthropic y adaptarse a mis necesidades de aprendizaje.

El curso cubre cuatro ejes transversales:
1. **Usuario general**: productividad, workflows, uso cotidiano de Claude.
2. **Desarrollador**: API, Claude Code, MCP, agentes.
3. **Formador/educador**: enseñar Claude a otras personas.
4. **Fundamentos y seguridad**: comprensión técnica, ética y alineación.

## Cómo está organizado el repositorio

```
mi-curso-claude/
├── CLAUDE.md                 ← este archivo
├── README.md                 ← índice navegable
├── plan-de-estudio.md        ← ruta de aprendizaje recomendada
├── recursos/                 ← catálogo de fuentes externas
│   ├── enlaces.yaml          ← base de datos principal con metadatos
│   ├── libros.md
│   ├── github-repositorios.md
│   ├── cursos-externos.md
│   ├── newsletters.md
│   ├── creadores-espanol.md
│   ├── papers-investigacion.md
│   └── comunidades.md
├── modulos/                  ← contenido pedagógico
│   ├── 00-guia-proyecto/
│   ├── 01-fundamentos-ia/
│   ├── 02-ai-fluency/
│   ├── 03-claude-basico/
│   ├── 04-productividad/
│   ├── 05-prompt-engineering/
│   ├── 06-claude-code/
│   ├── 07-api-claude/
│   ├── 08-mcp/
│   ├── 09-skills-agentes/
│   ├── 10-cloud/
│   ├── 11-casos-avanzados/
│   ├── 12-formacion-docencia/
│   └── 13-seguridad-etica/
├── plantillas/               ← plantillas reutilizables
│   ├── leccion.md
│   ├── nota-tecnica.md
│   ├── resumen-paper.md
│   └── proyecto-practico.md
├── changelog/
│   └── CHANGELOG.md          ← registro de cambios del curso
└── .claude/
    ├── skills/               ← skills personalizadas del proyecto
    └── commands/             ← comandos slash disponibles
```

## Convenciones a respetar siempre

### 1. Idioma
- Todo el contenido pedagógico se redacta en **español** (castellano neutro).
- Se respetan los términos técnicos en inglés cuando son estándar de la industria (p. ej. "prompt", "skill", "agent", "hook", "MCP", "RAG"). No se traducen forzadamente.
- Si aparece un término técnico nuevo, se explica la primera vez que se menciona en cada documento.

### 2. Fechas y versiones
- **Cada lección o nota técnica debe incluir cabecera con metadatos**:
  ```yaml
  ---
  titulo: "..."
  modulo: "06-claude-code"
  creado: 2026-04-23
  revisado: 2026-04-23
  modelo_referencia: "Claude Opus 4.7"
  estado: borrador | revisado | obsoleto
  ---
  ```
- Al actualizar un archivo, se actualiza siempre el campo `revisado` con la fecha en formato ISO (`YYYY-MM-DD`).
- Si un contenido deja de ser válido (p. ej. una feature se rediseña), se marca `estado: obsoleto` y se crea una versión nueva en lugar de borrar la antigua, para preservar el historial.

### 3. Fuentes y citas
- Toda afirmación técnica importante debe tener **fuente**. Formato al final del archivo:
  ```markdown
  ## Fuentes
  - [docs.claude.com — Prompting best practices](https://docs.claude.com/...) — consultado 2026-04-23
  - Anthropic, "Claude 101" course (Skilljar) — consultado 2026-04-20
  ```
- Se prefiere la documentación oficial de Anthropic sobre fuentes secundarias.
- Nunca se reproducen textos literales largos de las fuentes (>15 palabras). Se parafrasea y se cita.

### 4. Nombres de archivo
- `kebab-case`, en minúsculas, sin tildes, máximo ~50 caracteres.
- Prefijos numéricos `NN-` para ordenar lecciones dentro de cada módulo.
- Ejemplo: `modulos/06-claude-code/03-comandos-personalizados.md`.

### 5. Formato de lección
Cada lección sigue la plantilla de `plantillas/leccion.md` y contiene al menos:
1. **Metadatos** (frontmatter YAML)
2. **Objetivos de aprendizaje**
3. **Prerrequisitos**
4. **Contenido principal**
5. **Ejercicio práctico**
6. **Recursos para profundizar**
7. **Fuentes**

## Cómo trabajar en este proyecto

### Al iniciar cualquier sesión

1. Lee `CLAUDE.md` (este archivo).
2. Lee `progreso.md` para saber por dónde voy: qué lección está marcada como `🔵 Siguiente` y qué llevo completado. Es la fuente de verdad sobre mi avance, no `plan-de-estudio.md`.
3. Si te pregunto *"¿por dónde sigo?"* o equivalente, contesta con la lección concreta marcada como `🔵 Siguiente` en `progreso.md`. Si esa lección está como `📝 Sin redactar todavía`, propón redactarla.

### Cuando yo te diga "marca la lección X del módulo Y como completada"

1. Edita `progreso.md`:
   - Cambia el icono de esa fila a `✅` y añade la fecha de hoy.
   - Marca la **siguiente** lección del módulo como `🔵 Siguiente` (la que tenga el orden inmediatamente superior dentro del mismo módulo, o la lección 01 del siguiente módulo si era la última).
   - Actualiza el bloque de cabecera (`Última actualización` y `Próxima lección`).
   - Recalcula el contador de avance del módulo en la tabla "Mapa de módulos" y el total al final.
2. Si el módulo entero queda completado, mueve su entrada al "Histórico de módulos completados" con la fecha de cierre.
3. No toques `bitacora.md` salvo que yo te lo pida explícitamente.

### Cuando yo te pida "redacta la lección X"
1. Lee la plantilla `plantillas/leccion.md`.
2. Consulta el README del módulo correspondiente para ver el lugar que ocupa en la secuencia.
3. Consulta `recursos/enlaces.yaml` para ver qué fuentes hay disponibles sobre el tema.
4. Redacta siguiendo las convenciones anteriores.
5. Actualiza el README del módulo si hace falta.
6. Añade una entrada en `changelog/CHANGELOG.md`.

### Cuando yo te pida "actualiza el curso con lo nuevo"
1. Usa la skill `actualizar-recursos` (ver `.claude/skills/actualizar-recursos/`).
2. Revisa:
   - `anthropic.com/news` (novedades de producto)
   - `anthropic.com/research` (investigación)
   - `docs.claude.com` (cambios en documentación)
3. Propón actualizaciones concretas, no las apliques sin confirmación.
4. **Quién confirma:** las actualizaciones propuestas (tanto las de esta orden como las de la rutina semanal programada, que deja sus informes en `changelog/novedades-YYYY-MM-DD.md`) **solo las confirma Manolo**. No apliques una propuesta al contenido del curso hasta que conste su visto bueno.

### Cuando yo te pida "verifica enlaces"
1. Usa el comando `/verificar-enlaces` (ver `.claude/commands/`).
2. Recorre `recursos/enlaces.yaml` y comprueba HTTP 200 en cada URL.
3. Genera un informe en `changelog/enlaces-revisados-YYYY-MM-DD.md`.

### Cuando yo te pida "añade un nuevo recurso"
1. Añade entrada en `recursos/enlaces.yaml` con todos sus metadatos.
2. Si encaja en algún módulo, enlázalo desde el README de ese módulo.
3. Actualiza el archivo temático correspondiente (`libros.md`, `newsletters.md`, etc.).

## Principios de contenido

1. **Honestidad epistémica**: si algo no está verificado o es opinión, se marca como tal. No inventamos prestaciones, benchmarks ni features.
2. **Criterio sobre cantidad**: una lección corta y bien fundamentada vale más que diez párrafos genéricos.
3. **Ejemplos reales sobre teoría**: todo concepto se acompaña de un ejemplo aplicable.
4. **Independencia comercial**: se nombran herramientas de terceros cuando son útiles, pero sin promociones.

## Qué NO hacer

- ❌ No crear contenido nuevo sin consultar primero `recursos/enlaces.yaml`.
- ❌ No borrar archivos marcados como `obsoleto`; se conservan como histórico.
- ❌ No reproducir texto literal largo de blogs, libros o documentación (máx. 15 palabras por cita).
- ❌ No usar tono promocional ni "marketinero".
- ❌ No asumir capacidades de Claude basándote en memoria. Verifica siempre con documentación actual.

## Mantenimiento recomendado

- **Semanal**: escanear novedades de Anthropic y actualizar `changelog/`.
- **Mensual**: ejecutar `/verificar-enlaces` y actualizar URLs rotas.
- **Trimestral**: revisar módulos completos, marcar como `obsoleto` lo que haya quedado desfasado y reescribir.
- **Cada release mayor de Claude** (p. ej. nuevo Opus): revisar módulos 03, 05, 06 y 07.

---

## Estilo y metodología de formación (Kit de Estilo)

> Este curso adopta el aspecto y la metodología del curso modelo *Ferroplast* mediante un
> Kit de Estilo. El kit completo de referencia vive en el repo `formacion-red-comercial/kit-estilo-formacion/`.
> El aspecto se aplica vía `assets/extra.css` (cargado en `mkdocs.yml`).

### Aspecto visual (design tokens)
Colores de marca y superficies, ya implementados en `assets/extra.css`:

```css
--brand-primary: #003366;   --brand-accent: #E67E22;
--background:    #F8FAFC;    --surface:      #FFFFFF;   --foreground: #1a1a1a;
--success:       #166534;    --error:        #991b1b;   --action-blue: #1a56db;
--radius-card: 12-16px;      --radius-btn: 8px;
```

- Tipografía **Inter**, cuerpo ~18px, line-height 1.8. Iconos: emoji legibles.
- Tarjetas/tablas redondeadas; botones (`.md-button`) altos; foco visible de 3px.
- Se conserva el modo oscuro del curso (el `extra.css` ajusta los colores para que contrasten).

### Buenas prácticas de accesibilidad (recomendadas)
Este curso es de público general, así que las reglas senior del modelo se aplican como
buenas prácticas, no como obligación: cuerpo ≥ 16px, contraste AA, el color nunca como única
señal (añadir icono/texto), `alt` en imágenes, navegable por teclado.

### Estructura y plantilla de lección
Mantener la estructura de `modulos/NN-tema/`. Cada lección, además de su frontmatter habitual,
sigue el molde del kit: **Objetivo** (1 frase) → **Contenido** en bloques cortos → **Resumen**
(3-5 puntos) → **Reto/autoevaluación** → **Siguiente paso**.

### Ayudas a la formación en markdown (MkDocs)
Usar admonitions con estas clases (ya estiladas en `extra.css`):

```markdown
!!! objetivo "Al terminar sabrás…"
    …

!!! resumen "Lo esencial"
    - …

??? reto "Pon a prueba lo aprendido"
    1. … (respuesta tras pensarlo)

[Siguiente lección →](...){ .md-button .md-button--primary }
```

### Principio rector
Cada cosa debe entenderse sin explicación previa. Simplicidad de uso por encima de la
sofisticación. Lecciones cortas, feedback en positivo, una idea por bloque.
