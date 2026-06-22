---
titulo: "La familia de modelos Claude: Opus, Sonnet, Haiku"
modulo: "01-fundamentos-ia"
orden: 6
creado: 2026-05-09
revisado: 2026-06-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 28
---

# La familia de modelos Claude: Opus, Sonnet, Haiku

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar por qué Anthropic ofrece **tres tamaños** de modelo en cada generación.
- [ ] Caracterizar **Opus**, **Sonnet** y **Haiku** por capacidad, latencia y coste relativos.
- [ ] Decidir **qué modelo usar** para un caso concreto sin tener que probarlos todos.
- [ ] Anticipar el coste relativo entre los tres y razonar el trade-off.
- [ ] Reconocer que la elección óptima cambia con cada generación nueva.

## Prerrequisitos

- Lecciones 01–05 del módulo. Especialmente útil tener clara la idea de "leyes de escalado" (lección 01) y el hecho de que el *prompting* puede compensar parte de la diferencia entre modelos (lecciones 03 y 04).

## Contexto

Cuando abres Claude por primera vez, te encuentras con tres nombres extraños: **Opus**, **Sonnet** y **Haiku**. No son versiones (eso es la lección 07): son **niveles** dentro de la misma generación. Esta lección te explica la lógica detrás de la división y te da criterios para elegir bien sin tener que memorizar tablas.

## Contenido principal

### 1. Por qué tres tamaños y no uno solo

Un único modelo "que valga para todo" sería ideal pero económicamente absurdo. Las tareas que un usuario le pide a un LLM tienen una distribución muy desigual:

- **Tareas simples y de alto volumen**: clasificar emails, resumir párrafos cortos, extraer entidades. Si las hace un modelo enorme, tiras dinero y latencia.
- **Tareas complejas y de bajo volumen**: razonamiento profundo sobre código, análisis de un caso jurídico, investigación abierta. Aquí el modelo más pequeño puede no llegar.
- **El grueso del trabajo real** suele ir por en medio: respuestas conversacionales, generación de texto medianamente cuidada, chat con contexto.

Anthropic resuelve esto con **tres puntos** en la curva coste/capacidad, todos entrenados en la misma generación con la misma constitución y el mismo enfoque. La idea es: dentro de una generación, eliges el tamaño en función del trabajo, no de "cuál es mejor".

### 2. Opus: el más capaz

**Opus** es el tamaño tope de gama. Razona mejor en tareas de varios pasos, mantiene contextos largos con más fidelidad, comete menos errores en operaciones complejas (código denso, razonamiento multipaso, análisis de documentos).

A cambio:
- Es **el más caro por token**, en órdenes de magnitud sobre Haiku.
- Es **el más lento** en latencia (tarda más en responder).
- Tiene cupos más estrictos en planes con límites.

Cuándo usarlo:
- Tareas donde un error te cuesta mucho más que el coste extra del modelo.
- Razonamiento complejo, planificación multipaso, código no trivial.
- Análisis sobre documentos largos donde mantener coherencia es crítico.
- Cualquier caso donde Sonnet "casi llega" pero falla justo donde no puede.

### 3. Sonnet: el equilibrio

**Sonnet** es el modelo de uso general. La regla práctica de Anthropic, vista repetidamente en sus comunicaciones, es que el **Sonnet de la generación N** suele alcanzar o superar al **Opus de la generación N–1**, a una fracción del coste y la latencia.

Esto tiene una consecuencia importante: si vienes de Opus 3 y cambias a Sonnet 4.6, **subes** de capacidad y **bajas** de coste a la vez. La intuición "Opus es siempre lo mejor" deja de ser correcta cuando comparas entre generaciones.

Cuándo usarlo (que suele ser el caso por defecto):
- Conversación general, escritura, análisis estructurado, código de complejidad media.
- Productos de cara al usuario donde la latencia importa.
- Cualquier flujo donde quieras Opus pero no puedas pagarlo.

### 4. Haiku: el rápido y barato

**Haiku** es el modelo más pequeño y rápido. Pensado para:
- **Latencia muy baja**: aplicaciones donde el usuario percibe inmediatamente cualquier retraso.
- **Volumen masivo**: clasificación de millones de mensajes, moderación, extracción rutinaria.
- **Coste como factor dominante**: tareas donde llamas miles o millones de veces al día.

Pierde frente a Sonnet en razonamiento complejo, contexto muy largo y tareas con múltiples saltos lógicos. A cambio: es **mucho más barato** y **mucho más rápido**.

Cuándo usarlo:
- Backends de búsqueda semántica, etiquetado, ranking.
- Front-ends donde respondes en cuestión de cientos de milisegundos.
- Pre-filtros antes de pasar los casos difíciles a un modelo mayor (ver patrón "router" más abajo).

### 5. Las metáforas: por qué se llaman así

No es decoración. Anthropic eligió los nombres con intención:

- **Haiku** — la forma poética japonesa breve. Tres versos, máxima concisión. Asocia "rápido y compacto".
- **Sonnet** — el soneto, forma media de catorce versos. Equilibrio entre estructura y libertad. Asocia "uso general".
- **Opus** — del latín *obra*, usado para composiciones musicales mayores. Asocia "obra completa, ambiciosa".

Estos nombres se mantienen entre generaciones. Lo que cambia es el número de versión (Sonnet 3, Sonnet 3.5, Sonnet 4.6…). Lo verás en la lección 07.

### 6. Cómo elegir en la práctica

Una heurística que funciona casi siempre:

1. **Empieza por Sonnet.** Es el punto óptimo para el 80% de los casos.
2. Si **falla** (no llega en calidad), sube a Opus.
3. Si **funciona pero es caro o lento** para tu volumen, baja a Haiku.

Esto evita el error frecuente de "voy directo a Opus por si acaso", que infla coste y latencia sin necesidad. La iteración Sonnet → Opus o Sonnet → Haiku te permite ver el delta real.

### 7. Patrones de combinación

En cuanto un sistema deja de ser un chat ocasional, suele tener sentido combinar tamaños. Tres patrones útiles:

- **Router**: un Haiku decide qué modelo usar para cada petición (peticiones triviales → Haiku, normales → Sonnet, complejas → Opus). Optimiza coste agregado.
- **Cascada**: Sonnet intenta primero. Si su respuesta no supera ciertas reglas de calidad (longitud, formato, comprobaciones), reintenta con Opus. Resultado: Opus solo se invoca cuando hace falta.
- **Pre/post-procesado**: Haiku limpia o estructura la entrada antes de pasarla a Sonnet/Opus, y procesa la salida después (formateo, validación, anonimización).

Estos patrones se desarrollan en el módulo 07 (API) y 11 (casos avanzados).

### 8. Una advertencia: lo "óptimo" cambia con cada generación

La frontera de capacidades se mueve hacia abajo. Lo que hoy requiere Opus, mañana lo hace Sonnet con un coste menor. Lo que hoy es trabajo de Sonnet, mañana lo hace Haiku.

Por eso **revisa tu elección cada vez que sale una generación nueva**, especialmente si tu uso es a escala. Mantenerse en Opus por inercia es uno de los errores más caros y más comunes.

### 9. Más allá del trío: la 5ª generación (Fable 5, Mythos 5)

> **Actualización (junio 2026).** El trío Opus/Sonnet/Haiku sigue siendo la base, pero Anthropic ha empezado a introducir **modelos de 5ª generación con nombres nuevos**, fuera de la nomenclatura poética clásica.

**Claude Fable 5** se presenta como el modelo **más capaz** de Anthropic, pensado para el trabajo de conocimiento y la programación más difíciles: tareas **ambiciosas y de larga duración** (agentes que trabajan de forma autónoma durante días, migraciones de código complejas, investigación profunda, lectura de diagramas y documentos densos). Se posiciona **por encima de Opus 4.8**. Como salvaguarda, en dominios sensibles (ciberseguridad, biología) las consultas se redirigen automáticamente a Opus 4.8. Junto a él se anunció **Mythos 5**, otro modelo de la misma generación.

**Salvedad importante de disponibilidad:** tras una **directiva de control de exportación del gobierno de EE. UU. (12 de junio de 2026)**, el acceso a Fable 5 y Mythos 5 quedó **suspendido**. Es una situación **volátil y cambiante**: antes de contar con estos modelos, **comprueba su disponibilidad y condiciones vigentes** en la documentación oficial. Para el trabajo del día a día, el modelo de referencia sigue siendo **Opus 4.8**.

Qué te llevas de aquí: la familia ya no son solo tres tamaños; conviene saber que existe una capa superior (5ª generación) para tareas excepcionalmente largas y complejas, aunque su disponibilidad dependa del momento y la región.

## Ejemplo aplicado

Imagina tres tareas reales y razonemos qué modelo elegir:

**Tarea 1**: clasificar 50.000 emails al día en "soporte / ventas / spam / otros".

→ **Haiku**. Es clasificación simple, alto volumen, latencia y coste son los factores dominantes. Sonnet sería sobre-ingeniería; Opus, despilfarro.

**Tarea 2**: redactar borradores de respuestas de soporte personalizadas, tono cuidado, basadas en el historial del cliente.

→ **Sonnet**. Necesitas más calidad de escritura y contexto que Haiku, pero no razonamiento profundo. Es el caso típico Sonnet.

**Tarea 3**: revisar un contrato de 60 páginas e identificar cláusulas problemáticas razonando sobre dependencias entre artículos.

→ **Opus**. Razonamiento sostenido, contexto largo coherente, coste de equivocarse alto. Aquí pagar el extra compensa.

Patrón observable: a medida que sube la **complejidad de razonamiento** y baja el **volumen**, subes en la familia.

## Ejercicio práctico

1. Identifica **tres tareas** de tu trabajo donde podrías usar Claude.
2. Para cada una, completa esta tabla mentalmente y luego escríbela:

| Tarea | Volumen estimado/día | Coste de error | Latencia tolerable | Modelo elegido |
|-------|----------------------|----------------|--------------------|----------------|
| ...   | ...                  | ...            | ...                | ...            |

3. Justifica cada elección en una frase. Si las tres caen en el mismo modelo, sospecha: o tu trabajo es muy homogéneo o estás eligiendo por inercia.

**Criterio de éxito:** acabas con al menos dos modelos distintos en la columna final. Si no, vuelve a la tabla y pregúntate si en alguna tarea puedes bajar a Haiku o subir a Opus.

## Errores comunes

- **"Opus siempre es mejor."** En la misma generación sí, pero entre generaciones no: el Sonnet de la generación N suele igualar o superar al Opus de la N–1. Y para muchas tareas, Sonnet basta. Pagar Opus para clasificar correos es un mal uso del dinero.
- **Confundir tamaño con versión.** Sonnet 3.5 y Sonnet 4.6 son el mismo "tamaño" (tope medio) pero generaciones distintas. La diferencia entre ellas puede ser mayor que entre Sonnet y Haiku de la misma generación.
- **Elegir modelo sin medir.** "Me parece que Opus va mejor" no es base. Mide latencia, coste y calidad real (idealmente con un set fijo de prompts) antes de comprometer una elección a escala.
- **Olvidar el coste a volumen.** Una diferencia de 5x en precio por token es invisible si haces 10 llamadas al día y catastrófica si haces 100.000.
- **No revisar al cambiar de generación.** Lo óptimo de hoy es subóptimo en 6 meses. Vuelve a evaluar.

## Resumen en 3 frases

1. Anthropic ofrece **tres tamaños** dentro de cada generación —**Haiku** (rápido, barato), **Sonnet** (equilibrio, default), **Opus** (máxima capacidad, más caro y lento)— para cubrir el rango coste/capacidad sin obligarte a un modelo único.
2. La heurística práctica es **empezar por Sonnet** y desplazarse a Opus si falla en calidad o a Haiku si sobra capacidad para tu volumen.
3. La elección óptima **cambia con cada generación**: Sonnet de la generación N suele igualar al Opus de la N–1, así que revisar tu elección periódicamente es el hábito que más coste te ahorra a escala.

## Recursos para profundizar

- [docs.claude.com — Models overview](https://docs.claude.com/en/docs/about-claude/models/overview) — tabla actualizada con capacidades, ventana de contexto y precios por modelo.
- [Anthropic — Pricing](https://www.anthropic.com/pricing) — referencia oficial de precios por token.
- [Anthropic — Model cards](https://www.anthropic.com/research) — información detallada por modelo (busca el más reciente).
- [Anthropic — Claude Fable](https://www.anthropic.com/claude/fable) — la 5ª generación (verifica disponibilidad vigente).
- 🎙️ El Test de Turing — "Claude Fable 5: El MEJOR modelo y una ESTAFA" (Ep. 158) — análisis divulgativo del modelo y sus límites de uso.

## Siguiente lección

➡️ `07-versiones-modelos.md` — Versiones: leyendo el número del modelo.

## Fuentes

- [docs.claude.com — Models](https://docs.claude.com/) — consultado 2026-05-09.
- [Anthropic — Pricing](https://www.anthropic.com/pricing) — consultado 2026-05-09.
- [Anthropic — Model cards y blog de releases](https://www.anthropic.com/news) — consultado 2026-05-09.
- [Anthropic — Claude Fable](https://www.anthropic.com/claude/fable) y [Anthropic News](https://www.anthropic.com/news) — Fable 5 / Mythos 5 y directiva de exportación — consultado 2026-06-22.
