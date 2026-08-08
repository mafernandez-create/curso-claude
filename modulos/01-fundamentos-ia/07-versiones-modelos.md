---
titulo: "Versiones: leyendo el número del modelo"
modulo: "01-fundamentos-ia"
orden: 7
creado: 2026-05-09
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 15
---

# Versiones: leyendo el número del modelo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir las **dos dimensiones** que componen un modelo Claude: familia (Opus/Sonnet/Haiku) y generación (3, 3.5, 4, 4.5, 4.6, 4.7, 4.8, 5).
- [ ] Leer e interpretar un **identificador de modelo** completo (formato API).
- [ ] Distinguir los **dos formatos de ID** (sin fecha, que ya es snapshot fijo; y con fecha + alias de conveniencia) y saber cuál está pineado por sí solo.
- [ ] Anticipar el ciclo de vida de un modelo: lanzamiento, actualizaciones menores y deprecación.

## Prerrequisitos

- Lección 06: [La familia de modelos Claude](06-familia-modelos-claude.md). Sin entender Opus/Sonnet/Haiku, esta lección queda incompleta.

## Contexto

La lección anterior cubrió la dimensión **horizontal** de Claude: tres tamaños dentro de una generación. Esta cubre la dimensión **vertical**: cómo evolucionan esos tamaños con el tiempo. Saber leer un identificador de modelo es trivial, pero saber **cuándo fijar una versión y cuándo no** es la diferencia entre un sistema en producción estable y uno que se rompe la noche que Anthropic publica una actualización.

## Contenido principal

### 1. Las dos dimensiones de un modelo Claude

Cualquier modelo Claude se identifica por una combinación de:

- **Familia** (lección 06): Opus, Sonnet o Haiku — el tamaño/capacidad.
- **Generación**: el número de versión, p. ej. 3, 3.5, 4, 4.5, 4.6, 4.7, 4.8, 5.

El nombre amigable que verás en la web o en la documentación combina ambas: **Claude Opus 4.7**, **Claude Sonnet 4.6**, **Claude Haiku 4.5**, etc.

### 2. Major y minor: qué significan

El número de versión sigue una convención **major.minor**:

- **Major** (3 → 4 → 5…) implica un salto grande: nueva generación de pre-entrenamiento, posibles cambios de arquitectura, capacidades cualitativamente nuevas. No es solo "un poco mejor": es otra base.
- **Minor** (4 → 4.5 → 4.6 → 4.7) implica mejora incremental sobre la misma base: refinamiento de fine-tuning, RLHF/CAI más afinado, correcciones de comportamiento, a veces extensión de ventana de contexto. Misma generación, mejor versión.

Como regla práctica:
- Cambio **minor**: suele ser drop-in, casi sin sorpresas.
- Cambio **major**: revisar prompts y evaluaciones; el comportamiento puede haber cambiado en cosas sutiles que rompen tu pipeline.

**Un caso real, con su matiz.** Anthropic describe **Sonnet 5** como una actualización *drop-in* desde Sonnet 4.6: en general, el código que ya funcionaba sigue funcionando. Pero "drop-in" viene con letra pequeña, y son exactamente **tres cambios de comportamiento** que conviene revisar antes de migrar:

1. El *extended thinking* manual (`thinking: {budget_tokens: N}`) se retira y **devuelve error 400**.
2. Fijar `temperature`, `top_p` o `top_k` a un valor **distinto del de por defecto** también devuelve **400** (omitirlos o dejarlos en su valor por defecto sí se acepta).
3. El *adaptive thinking* pasa a estar **activado por defecto** — no es un error, es un cambio de comportamiento que puede alterar coste y latencia sin que toques nada.

Moraleja: "drop-in" no significa "no mires nada". Significa que la migración es barata **si has comprobado esa lista corta**. Lo ves en detalle en el Módulo 07.

> **La 5ª generación (actualizado a julio 2026).** Anthropic ya publica modelos de **generación 5**. Algunos con nombres nuevos —**Fable 5** (su modelo más capaz, para tareas de días) y **Mythos 5**— y otros conservando la nomenclatura clásica: **Sonnet 5** (`claude-sonnet-5`, 30 jun 2026). Anthropic lo presenta como "la siguiente generación" de la familia Sonnet; aun así, y pese al salto de número, la propia documentación lo describe como actualización *drop-in* desde Sonnet 4.6 (con los tres matices de la sección anterior).
>
> El acceso a Fable 5 y Mythos 5 quedó **suspendido el 12 de junio de 2026** por una directiva de control de exportación de EE. UU. Los controles se levantaron el **30 de junio** y **Fable 5** volvió a estar disponible globalmente el **1 de julio**. La restauración de **Mythos 5 fue distinta**: se aprobó antes (26 de junio) y **solo para un conjunto de organizaciones de EE. UU.**, no de forma global. Confirma siempre el estado vigente en la documentación. Para el día a día, la referencia de este curso sigue siendo **Opus 4.8** (4.x). Más detalle en la [lección 06](06-familia-modelos-claude.md).

### 3. El identificador en la API: dos formatos

Aquí está el punto que más ha cambiado, y donde más te van a engañar los tutoriales antiguos. Hay **dos formatos de identificador**, según la generación del modelo.

**Generación 4.6 en adelante (lo actual): ID sin fecha.**

```
claude-sonnet-5
claude-opus-4-8
claude-opus-4-7
```

Anatomía (el minor se omite en releases *major*, como Sonnet 5):

```
claude-opus-4-8
  │     │   │ │
  │     │   │ └── Minor.
  │     │   └──── Major.
  │     └──────── Familia.
  └────────────── Producto.
```

Lo esencial, y es contraintuitivo: **ese ID sin fecha YA es un snapshot fijo**. No es un puntero que se mueva al "último y mejor" — apunta a un modelo concreto y congelado. Anthropic **no cambia los pesos de un ID que ya existe**: cuando hay una versión nueva, sale con un **ID nuevo**. Así que con estos modelos, poner `claude-sonnet-5` en tu código ya es reproducible por sí solo, sin fecha ni nada más.

**Antes de la 4.6: ID con fecha + alias de conveniencia.**

Los modelos anteriores llevan la fecha del snapshot dentro del ID:

```
claude-haiku-4-5-20251001
claude-sonnet-4-5-20250929
```

Anatomía del formato con fecha:

```
claude-haiku-4-5-20251001
  │     │   │ │     │
  │     │   │ │     └── Snapshot: fecha del modelo concreto (YYYYMMDD).
  │     │   │ └──────── Minor.
  │     │   └────────── Major.
  │     └────────────── Familia.
  └──────────────────── Producto.
```

Y aquí sí existe un **alias de conveniencia** sin fecha —por ejemplo `claude-haiku-4-5`— que **resuelve al snapshot con fecha más reciente** de esa versión. Es cómodo, y es justo lo peligroso en producción: el alias **se mueve solo** cuando Anthropic publica un snapshot nuevo de esa versión.

> **⚠️ Lo que dicen los tutoriales antiguos y ya no vale.** Verás por ahí alias con sufijo `-latest` (`claude-opus-latest` y parecidos). En el esquema actual de Anthropic **no existen**: los modelos de hoy van sin fecha y el ID ya es el snapshot; los anteriores usan el alias sin fecha del tipo `claude-haiku-4-5`. Comprueba siempre el formato vigente en la [documentación oficial](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions).

### 4. Reproducibilidad en producción: qué significa "pinear" hoy

La decisión más importante de la lección, y cambia según el formato que uses.

**Si usas un modelo de la 4.6 en adelante** (`claude-sonnet-5`, `claude-opus-4-8`): **ya estás pineado**. El ID es el snapshot; no hay ningún puntero móvil del que protegerte. Cuando salga una versión nueva tendrá un ID nuevo, y serás tú quien decida cuándo migrar. No hay nada extra que "fijar".

**Si usas un modelo anterior a la 4.6** (p. ej. Haiku 4.5): la decisión es real. El alias `claude-haiku-4-5` se mueve solo al último snapshot; el ID con fecha `claude-haiku-4-5-20251001` no. Para producción, **usa el ID con fecha**.

| Contexto | Qué usar | Por qué |
|---|---|---|
| Explorar / prototipar con modelo pre-4.6 | Alias `claude-haiku-4-5` | Siempre el snapshot más reciente, sin tocar código |
| Producción con modelo pre-4.6 | ID con fecha `…-20251001` | No se mueve bajo tus pies |
| Cualquier modelo 4.6+ | El ID sin fecha | Ya es un snapshot fijo |

La trampa típica (solo con modelos **pre-4.6**): prototipas con el alias, funciona, subes a producción sin fijar la fecha. Meses después Anthropic publica un snapshot nuevo, el alias salta a él, y tu pipeline se comporta distinto sin que hayas tocado una línea.

> **Un matiz honesto sobre "reproducible".** Fijar el ID congela los **pesos** del modelo, no toda la infraestructura que lo sirve (router, clasificadores de seguridad, lógica de muestreo). Esa capa puede cambiar y producir diferencias pequeñas de comportamiento aunque el ID sea el mismo. Fijar el ID reduce el riesgo; no lo elimina del todo.

> **Regla:** lo que va a producción se sirve desde un ID que no se mueva — con fecha si es un modelo pre-4.6, o el ID sin fecha si es 4.6+. Los cambios de versión se promueven a mano, tras evaluar.

### 5. Ciclo de vida de un modelo

Un modelo Claude pasa típicamente por estas fases:

1. **Lanzamiento.** Aparece en docs y API. Anthropic publica model card, benchmarks y diferencias respecto a la versión anterior.
2. **Actualizaciones.** En los modelos pre-4.6 aparecían nuevos snapshots con fecha para la misma versión (y el alias sin fecha saltaba al más reciente). Desde la 4.6, una versión actualizada **sale con un ID nuevo**, no como snapshot bajo el mismo ID.
3. **Sucesión.** Sale una versión posterior (4.6 → 4.7). Las dos coexisten un tiempo.
4. **Deprecación anunciada.** Anthropic anuncia que un modelo dejará de estar disponible en una fecha concreta, con plazo razonable.
5. **Retirada efectiva.** El modelo deja de servir peticiones; los snapshots dejan de ser invocables.

Implicación para ti: si pineas a un snapshot, **estás obligado a vigilar avisos de deprecación**. Anthropic publica esto en su documentación y en sus newsletters; no es razonable enterarse el día que tu sistema empieza a dar errores.

### 6. Cómo saber qué está vigente hoy

No memorices versiones — quedan obsoletas en meses. En su lugar:

- **Documentación oficial**: https://docs.claude.com/en/docs/about-claude/models/overview es la lista canónica, con tabla de modelos vigentes, IDs exactos y estado de deprecación.
- **Página de pricing**: https://www.anthropic.com/pricing — útil para confirmar precio por modelo activo.
- **Anthropic News**: https://www.anthropic.com/news — anuncios de releases y deprecaciones.

Si tienes Claude Code o cualquier integración instalada, suele estar ya configurada con el modelo recomendado vigente al momento de la instalación. En este curso, el **modelo de referencia** es **Claude Opus 4.8** (lo verás en el frontmatter de cada lección).

## Ejemplo aplicado

Imagínate que estás escribiendo un script en Python que usa la Claude API para clasificar tickets de soporte con **Haiku 4.5** (un modelo pre-4.6, con ID por fecha). Acabas de lanzarlo a producción.

**Mal ejemplo (alias de conveniencia):**
```python
response = client.messages.create(
    model="claude-haiku-4-5",  # alias: apunta al snapshot más reciente
    ...
)
```

Funciona hoy, pero la próxima vez que Anthropic publique un snapshot nuevo de esa versión, el alias **salta a él automáticamente** y tu código lo invoca sin que lo hayas validado.

**Buen ejemplo (ID con fecha):**
```python
MODEL = "claude-haiku-4-5-20251001"  # snapshot validado el 2026-01-15

response = client.messages.create(
    model=MODEL,
    ...
)
```

Cualquier cambio de modelo es una **decisión consciente**: actualizas la constante, vuelves a evaluar, confirmas que tu suite de pruebas sigue pasando, y publicas. Si rompe, lo sabes antes de que lo sepan tus usuarios.

**Y si usaras un modelo 4.6+** (`claude-opus-4-8`), no tendrías este problema: ese ID ya es un snapshot fijo. El equivalente al "mal ejemplo" ahí no existe, porque no hay alias que se mueva.

## Ejercicio práctico

1. Entra en https://docs.claude.com/en/docs/about-claude/models/overview.
2. Identifica:
   - El modelo Opus vigente más reciente (nombre + ID exacto del último snapshot).
   - El modelo Sonnet vigente más reciente.
   - El modelo Haiku vigente más reciente.
   - Si hay modelos marcados como **deprecated** o con fecha de retirada.
3. Anota los IDs en una nota: te ahorrarán tiempo cada vez que arranques un proyecto nuevo.

**Criterio de éxito:** sales del ejercicio con tres IDs concretos copiados, no con frases tipo "el último Opus". Si no copiaste IDs literales, repite.

## Errores comunes

- **Usar el alias de conveniencia en producción** (en modelos pre-4.6, del tipo `claude-haiku-4-5` sin fecha). El error más caro y frecuente: lo que funciona hoy puede cambiar sin tocar código cuando el alias salta a un snapshot nuevo.
- **Buscar un alias `-latest` que no existe** o **poner fecha a un modelo 4.6+.** El esquema cambió: los modelos actuales van sin fecha y el ID ya está pineado. No inventes sufijos; comprueba el formato en la doc.
- **Suponer que un cambio minor no rompe nada.** En general no rompe nada gordo, pero puede haber ajustes finos en formato, longitud o tono que afecten a prompts muy específicos. Evalúa siempre.
- **Memorizar IDs.** Caducan. Memoriza la **fuente** (docs.claude.com), no la lista.
- **Confundir versión con familia.** "Sonnet" no es una versión, es un tamaño. "4.7" no es un tamaño, es una versión. Para identificar un modelo necesitas las dos cosas (y, en los modelos pre-4.6, la fecha del snapshot si quieres reproducibilidad estricta).
- **No suscribirse a avisos de deprecación.** Es un fallo silencioso garantizado. Anthropic anuncia con tiempo, pero hay que escuchar.

## Resumen en 3 frases

1. Un modelo Claude se identifica por **familia** (Opus/Sonnet/Haiku) y **generación** (major.minor); desde la 4.6 el ID va **sin fecha** y ya es un snapshot fijo, mientras que los modelos anteriores llevan la fecha en el ID y ofrecen además un alias de conveniencia que se mueve.
2. Para producción, sirve desde un ID que **no se mueva**: el ID con fecha en modelos pre-4.6, o directamente el ID sin fecha en los 4.6+ (que ya está pineado). Promueve los cambios de versión a mano, tras evaluar.
3. La lista de modelos vigentes la mantiene Anthropic en `docs.claude.com`; no la memorices, conviértela en tu primera consulta de cada proyecto nuevo.

## Recursos para profundizar

- [docs.claude.com — Models overview](https://docs.claude.com/en/docs/about-claude/models/overview) — la lista canónica de modelos vigentes.
- [Anthropic — Pricing](https://www.anthropic.com/pricing) — precios por modelo, útil para confirmar versiones activas.
- [Anthropic News](https://www.anthropic.com/news) — donde se anuncian releases y deprecaciones.
- [Anthropic — Deprecation policy](https://docs.claude.com/) — política y plazos al deprecar modelos. Buscar "deprecation" en la documentación.
- [Model IDs and versioning](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions) — el esquema de IDs y por qué los IDs sin fecha ya son snapshots fijos.
- 🎙️ El Test de Turing — "Opus 4.8: Lo analizamos a fondo ¿Mejora?" (Ep. 157) — ejemplo divulgativo de cómo se analiza una versión nueva.

## Siguiente lección

➡️ `08-limitaciones-llm.md` — Limitaciones fundamentales: alucinaciones, cutoff, sesgo.

## Fuentes

- [docs.claude.com — Models overview](https://docs.claude.com/en/docs/about-claude/models/overview) — consultado 2026-05-09.
- [Anthropic — Pricing](https://www.anthropic.com/pricing) — consultado 2026-05-09.
- [Anthropic News](https://www.anthropic.com/news) — consultado 2026-05-09.
- [Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) — generación 5 y cambios de comportamiento al migrar — consultado 2026-07-20.
- [Model IDs and versioning](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions) — formato de IDs con y sin fecha, alias e IDs pineados — consultado 2026-07-22.
