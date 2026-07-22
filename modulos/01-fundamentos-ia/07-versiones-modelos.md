---
titulo: "Versiones: leyendo el número del modelo"
modulo: "01-fundamentos-ia"
orden: 7
creado: 2026-05-09
revisado: 2026-07-20
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 15
---

# Versiones: leyendo el número del modelo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir las **dos dimensiones** que componen un modelo Claude: familia (Opus/Sonnet/Haiku) y generación (3, 3.5, 4, 4.5, 4.6, 4.7, 4.8, 5).
- [ ] Leer e interpretar un **identificador de modelo** completo (formato API).
- [ ] Distinguir entre **alias** y **snapshot fijo (pinned)** y elegir cuándo usar cada uno.
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

### 3. El identificador completo en la API

En la API verás identificadores con esta forma (las cifras concretas dependen del modelo y la fecha):

```
claude-opus-4-7-20260301
claude-sonnet-4-6-20251115
claude-haiku-4-5-20251001
```

Anatomía:

```
claude-opus-4-7-20260301
  │     │   │ │     │
  │     │   │ │     └── Snapshot: fecha del modelo concreto (YYYYMMDD).
  │     │   │ └──────── Minor.
  │     │   └────────── Major.
  │     └────────────── Familia.
  └──────────────────── Producto.
```

El sufijo de fecha es lo que se llama **snapshot**: una versión congelada y reproducible del modelo. Dos snapshots con el mismo `4-7` pueden diferir en cosas pequeñas (parche de comportamiento, recalibración de seguridad, etc.).

> **⚠️ Cambio de formato a partir de la generación 4.6.** Los modelos publicados desde entonces usan un **identificador sin fecha** que, pese a no llevar sufijo, **ya es un snapshot fijo** — no un puntero que se mueve solo. Por eso verás `claude-sonnet-5` u `claude-opus-4-8` a secas.
>
> Esto es importante para lo que viene ahora: en estos modelos **no necesitas añadir una fecha para tener reproducibilidad**, porque el propio ID ya la garantiza. Los IDs con fecha que ves arriba corresponden a la nomenclatura anterior, que sigue vigente para los modelos que la usaban.

Junto a los snapshots existen **alias** sin fecha:

```
claude-opus-4-7-latest
claude-opus-latest
```

Estos resuelven al snapshot más reciente del modelo correspondiente. Cómodos para explorar; peligrosos para producción.

### 4. Alias vs snapshot fijo: cuándo usar cada uno

Esto es la decisión más importante de esta lección.

**Usa alias (`-latest`) cuando:**
- Estás explorando, jugando, prototipando.
- Quieres siempre el modelo más reciente sin actualizar tu código.
- El coste de un cambio de comportamiento no detectado es bajo.

**Usa snapshot fijo cuando:**
- Tienes el modelo en producción real.
- Has hecho evaluaciones (golden set de prompts) sobre un snapshot concreto.
- Un cambio inesperado de comportamiento puede romper a tus usuarios o tus métricas.

En los modelos con ID con fecha, "snapshot fijo" significa escribir la fecha (`-20260301`). En los de la generación 4.6 en adelante, el ID sin fecha (`claude-sonnet-5`) **ya es el snapshot fijo**: lo que debes evitar en producción es el alias `-latest`, no la ausencia de fecha.

La trampa típica: prototipas con alias, todo funciona, y subes a producción sin pinear. Tres meses después Anthropic publica un snapshot que cambia el formato de las respuestas de tu prompt clave en un 5% de los casos. Tu pipeline se rompe sin que hayas tocado código.

> **Regla:** lo que va a producción se pinea a un snapshot. Las actualizaciones se promueven manualmente, tras evaluación.

### 5. Ciclo de vida de un modelo

Un modelo Claude pasa típicamente por estas fases:

1. **Lanzamiento.** Aparece en docs y API. Anthropic publica model card, benchmarks y diferencias respecto a la versión anterior.
2. **Actualizaciones menores.** Aparecen nuevos snapshots para la misma versión major.minor (parches de comportamiento, no cambios disruptivos).
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

Imagínate que estás escribiendo un script en Python que usa la Claude API para clasificar tickets de soporte. Acabas de lanzarlo a producción.

**Mal ejemplo (alias):**
```python
response = client.messages.create(
    model="claude-haiku-latest",
    ...
)
```

Funciona hoy, pero la próxima vez que Anthropic publique un nuevo snapshot, **tu código pasa a invocarlo automáticamente**, sin que lo hayas validado.

**Buen ejemplo (snapshot pinned):**
```python
MODEL = "claude-haiku-4-5-20251001"  # snapshot validado el 2026-01-15

response = client.messages.create(
    model=MODEL,
    ...
)
```

Cualquier cambio de modelo es una **decisión consciente**: actualizas la constante, vuelves a evaluar, confirmas que tu suite de pruebas sigue pasando, y publicas. Si rompe, lo sabes antes de que lo sepan tus usuarios.

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

- **Usar `-latest` en producción.** El error más caro y más frecuente. Lo que funciona hoy puede romper sin tocar código.
- **Suponer que un cambio minor no rompe nada.** En general no rompe nada gordo, pero puede haber ajustes finos en formato, longitud o tono que afecten a prompts muy específicos. Evalúa siempre.
- **Memorizar IDs.** Caducan. Memoriza la **fuente** (docs.claude.com), no la lista.
- **Confundir versión con familia.** "Sonnet" no es una versión, es un tamaño. "4.7" no es un tamaño, es una versión. Para identificar un modelo necesitas las dos cosas (más el snapshot, si quieres reproducibilidad).
- **No suscribirse a avisos de deprecación.** Es un fallo silencioso garantizado. Anthropic anuncia con tiempo, pero hay que escuchar.

## Resumen en 3 frases

1. Un modelo Claude se identifica por **familia** (Opus/Sonnet/Haiku), **generación** (major.minor) y opcionalmente **snapshot** (fecha YYYYMMDD).
2. Para explorar usa alias `-latest`; para producción **pinea siempre a un snapshot** validado y promueve cambios manualmente.
3. La lista de modelos vigentes la mantiene Anthropic en `docs.claude.com`; no la memorices, conviértela en tu primera consulta de cada proyecto nuevo.

## Recursos para profundizar

- [docs.claude.com — Models overview](https://docs.claude.com/en/docs/about-claude/models/overview) — la lista canónica de modelos vigentes.
- [Anthropic — Pricing](https://www.anthropic.com/pricing) — precios por modelo, útil para confirmar versiones activas.
- [Anthropic News](https://www.anthropic.com/news) — donde se anuncian releases y deprecaciones.
- [Anthropic — Deprecation policy](https://docs.claude.com/) — política y plazos al deprecar modelos. Buscar "deprecation" en la documentación.
- 🎙️ El Test de Turing — "Opus 4.8: Lo analizamos a fondo ¿Mejora?" (Ep. 157) — ejemplo divulgativo de cómo se analiza una versión nueva.

## Siguiente lección

➡️ `08-limitaciones-llm.md` — Limitaciones fundamentales: alucinaciones, cutoff, sesgo.

## Fuentes

- [docs.claude.com — Models overview](https://docs.claude.com/en/docs/about-claude/models/overview) — consultado 2026-05-09.
- [Anthropic — Pricing](https://www.anthropic.com/pricing) — consultado 2026-05-09.
- [Anthropic News](https://www.anthropic.com/news) — consultado 2026-05-09.
- [Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) — generación 5 y cambios de comportamiento al migrar — consultado 2026-07-20.
