---
titulo: "Constitutional AI: el enfoque de Anthropic"
modulo: "01-fundamentos-ia"
orden: 4
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 30
---

# Constitutional AI: el enfoque de Anthropic

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué problema resuelve **Constitutional AI (CAI)** respecto al RLHF estándar.
- [ ] Describir sus **dos fases** (SL y RL) y qué hace el modelo en cada una.
- [ ] Decir con tus palabras qué es una **"constitución"** y cómo se aplica al entrenamiento.
- [ ] Reconocer los rasgos de Claude que provienen claramente de CAI.
- [ ] Argumentar al menos **dos críticas** legítimas al enfoque.

## Prerrequisitos

- Lección 03: [Preentrenamiento, fine-tuning y RLHF](03-preentrenamiento-fine-tuning-rlhf.md). CAI se entiende solo si ya entiendes RLHF.

## Contexto

En la lección 03 viste que RLHF afina al modelo en tres ejes: **útil**, **honesto** e **inofensivo**. Pero hay un problema con el tercero: recoger preferencias humanas sobre contenido potencialmente dañino requiere exponer a anotadores a peticiones tóxicas durante miles de horas. Es lento, caro, traumático y poco transparente.

La pregunta de Anthropic en 2022 fue: **¿y si el propio modelo se autocritica, guiado por un texto que recoja los principios que queremos respetar?** La respuesta —Constitutional AI— no es solo una optimización técnica: es el rasgo distintivo del entrenamiento de Claude frente a otros LLMs comerciales.

## Contenido principal

### 1. El problema concreto que resuelve

RLHF puro para "harmless" tiene tres fricciones:

- **Coste humano.** Cada par de respuestas dañinas necesita un anotador que las lea y compare. Decenas de miles de pares = miles de horas de exposición a contenido sensible.
- **Opacidad.** Las preferencias acaban "destiladas" en los pesos del reward model. Nadie puede leer **qué criterio** llevó a preferir una respuesta sobre otra.
- **Iterabilidad lenta.** Cambiar el comportamiento (por ejemplo, "que no se moralice tanto") implica reentrenar anotadores con guías nuevas. Tarda semanas.

CAI ataca los tres a la vez: en lugar de humanos comparando, lo hace el modelo; los criterios se escriben en lenguaje natural y son legibles; cambiar comportamiento es editar un documento.

### 2. La idea central

> Le damos al modelo un texto con principios (la **constitución**), le pedimos que **critique** sus propias respuestas a la luz de esos principios, le pedimos que las **revise**, y entrenamos sobre las revisiones.

No reemplaza al RLHF entero: la parte "útil" sigue dependiendo de feedback humano. Lo que cambia es la fuente de señal sobre lo dañino, que pasa de humanos a IA + constitución. En la jerga, este nuevo flujo se llama **RLAIF** (*RL from AI Feedback*).

### 3. Las dos fases de CAI

**Fase 1 — SL stage (Supervised Learning con autorrevisión).**

1. Se le presenta al modelo SFT (el de la lección anterior) una **petición potencialmente dañina** —típicamente generada por *red teamers* o por otro modelo intentando provocar respuestas problemáticas.
2. El modelo produce su primera respuesta.
3. Al mismo modelo se le pide que **critique** esa respuesta a la luz de un principio extraído al azar de la constitución (por ejemplo: *"identifica formas en las que la respuesta es dañina, poco ética, racista, sexista, tóxica, peligrosa o ilegal"*).
4. Al mismo modelo se le pide que **reescriba** la respuesta corrigiendo lo identificado.
5. El par (petición original, respuesta revisada final) se añade a un dataset de fine-tuning supervisado.
6. El modelo se entrena sobre ese dataset → resultado: **SL-CAI**.

**Fase 2 — RL stage (RLAIF).**

1. El modelo SL-CAI genera **dos respuestas** distintas a la misma petición.
2. Otro modelo (con la constitución cargada en su prompt) decide cuál de las dos respeta mejor el principio en cuestión.
3. Esa decisión se toma como "preferencia": el equivalente al feedback humano de RLHF, pero generado por IA.
4. Con miles de estas preferencias se entrena un **modelo de recompensa**.
5. PPO (u otro algoritmo de refuerzo) optimiza el LLM contra esa recompensa, exactamente igual que en RLHF.

Resumen: la **señal** sobre lo dañino la produce IA leyendo principios escritos. La **mecánica** de optimización es la misma de la lección 03.

### 4. ¿Qué es la "constitución"?

Es un documento en lenguaje natural con **principios** que el modelo debe respetar. No es una lista de prohibiciones, sino una colección de declaraciones positivas sobre cómo debería comportarse.

Anthropic ha **publicado su constitución** y explicado de dónde sale cada principio. Las fuentes incluyen:

- La **Declaración Universal de los Derechos Humanos** de la ONU.
- Reglas que **DeepMind** publicó para su asistente Sparrow.
- Recomendaciones de las **directrices de Apple** sobre apps que interactúan con personas.
- Principios propios escritos por Anthropic, fruto de su investigación en alineación.

Los principios cubren ejes como: evitar daño, respetar autonomía del usuario, no manipular, ser honesto sobre limitaciones, no generar contenido ilegal, considerar perspectivas no occidentales, no comportarse como una persona viva.

Detalle importante: durante el entrenamiento, **los principios se rotan al azar**. En cada crítica se aplica uno (o unos pocos), no todos a la vez. Eso evita que el modelo memorice un patrón fijo de revisión y aprenda en su lugar a internalizar el espíritu.

### 5. Variante reciente: Collective Constitutional AI

En 2023 Anthropic publicó un experimento llamado **Collective Constitutional AI (CCAI)**. La pregunta era: *¿y si la constitución no la escribiéramos solo nosotros, sino que se generara con consulta pública?*

Reclutaron alrededor de 1000 personas representativas en EE. UU. y, usando la plataforma deliberativa **Pol.is**, recogieron y refinaron principios. Entrenaron un modelo con esa "constitución pública" y lo compararon con el modelo entrenado con la constitución interna.

Hallazgos clave (resumidos):
- Hubo **alto solapamiento** entre ambos textos: la mayoría de la gente quiere lo mismo (no daño, honestidad, respeto).
- El modelo CCAI fue ligeramente **menos sesgado** en algunas métricas, ligeramente más útil en otras.
- Es **prueba de concepto** —no producción— de un proceso de alineación más democrático.

Lo verás citado a menudo cuando se hable de "alineación participativa" o "alineación democrática".

### 6. Cómo se manifiesta en tu interacción con Claude

Tres rasgos del comportamiento de Claude que se entienden mejor desde CAI:

- **Tono cuidado en temas sensibles**, pero sin caer (la mayor parte del tiempo) en moralización vacía. La constitución insiste en evitar tanto el daño como la condescendencia.
- **Tendencia a explicar por qué se niega**, en lugar de un "no puedo ayudarte". Es un principio explícito: respetar la autonomía del usuario implica decirle qué no puedes hacer y por qué.
- **Equilibrio "útil vs. inofensivo"** que privilegia la honestidad: a veces Claude te recordará riesgos asociados a una decisión sin negarse a darte la información. Es CAI tratando de no caer en el sobre-rechazo.

Cuando notes alguno de estos comportamientos, no es "buena educación corporativa": es señal de la constitución hablando.

### 7. Críticas legítimas (importante saberlas)

CAI no es un enfoque cerrado ni libre de objeciones. Cuatro de las más serias:

- **¿Quién escribe la constitución?** Aunque parte se inspire en documentos públicos, las decisiones finales son de Anthropic. La crítica de "alineación con quién" no desaparece, solo cambia de lugar.
- **Aplicación opaca a posteriori.** Saber qué principio se activó para suprimir o reformular una respuesta concreta es muy difícil. Los principios son legibles; su aplicación, no.
- **Sobre-rechazo.** Si los principios "harmless" se aplican con celo, el modelo rechaza peticiones legítimas. Es el "alignment tax" de la lección 03 amplificado por la constitución.
- **Constitutional drift.** A medida que el modelo escala y se entrena con datos nuevos, los mismos principios pueden interpretarse de formas no previstas por sus redactores. No hay garantía formal de estabilidad semántica.

Conviene tener estas críticas a mano: cuando leas marketing entusiasta sobre CAI, son el contrapeso necesario.

## Ejemplo aplicado

Vamos a ver CAI en acción haciendo que Claude **explique su propio razonamiento constitucional**.

**Prompt 1 — pedirle que se autocritique:**
```
Respóndeme primero con normalidad a esta pregunta:
"Quiero dejar mi trabajo estable para montar mi propia empresa, ¿qué opinas?"

Después, en una segunda parte, critica tu propia respuesta aplicando dos principios:
1. Respetar la autonomía del usuario (no decidir por él).
2. Ser honesto sobre la incertidumbre (no fingir certeza donde no la hay).

Por último, reescribe tu respuesta corrigiendo lo identificado.
```

Lo que verás: una primera respuesta razonable, una crítica que casi siempre detecta tono paternalista o exceso de seguridad, y una revisión más equilibrada. Es una **simulación en miniatura de la fase SL de CAI**.

**Prompt 2 — comparar dos respuestas según un principio:**
```
Genera dos respuestas distintas a:
"¿Cuál es el mejor sistema político?"

Etiquétalas A y B. Después, evalúa cuál respeta mejor el principio:
"Presenta perspectivas plurales sin imponer una conclusión propia."
Justifica.
```

Esto reproduce la **fase RL de CAI**: dos respuestas, un juez basado en principios, una preferencia. La diferencia con el entrenamiento real es que aquí ves todo el proceso; en producción ocurre por dentro miles de millones de veces.

## Ejercicio práctico

1. Piensa en **un principio que tú añadirías** a la constitución de un asistente que estuvieras diseñando para tu trabajo. Escríbelo en una sola frase, en positivo (qué hacer, no qué evitar).
2. Pídele a Claude que critique una respuesta suya cualquiera (puede ser una de las que ya te ha dado en lecciones anteriores) **a la luz de tu principio**. Pídele también que la reescriba.
3. Reflexiona:
   - ¿La revisión te parece mejor que el original?
   - ¿Detectaste algún caso en el que aplicar tu principio rebaje la utilidad? Eso es **alignment tax** en miniatura.
   - ¿Qué tendrías que añadir o matizar a tu principio para que la revisión sea mejor sin perder utilidad?

**Criterio de éxito:** has terminado cuando puedes explicar, con tu propio principio como ejemplo, **el trade-off útil/inofensivo** que CAI gestiona constantemente. Si tu principio "perfecciona" sin coste, probablemente está mal escrito (demasiado vago).

## Errores comunes

- **Pensar que la constitución son prohibiciones.** No: son principios, mayoritariamente en positivo. "Sé honesto" en vez de "no mientas". El matiz importa: prohibiciones se eluden, principios se interiorizan.
- **Creer que la IA se "auto-alinea" sin humanos.** No. Los principios los escriben humanos. CAI desplaza el trabajo humano de "comparar respuestas" a "redactar y revisar principios". Es menos volumen, no menos importancia.
- **Asumir que CAI sustituye al RLHF.** Solo sustituye la parte de feedback sobre **harmless**. La parte **helpful** sigue viniendo de feedback humano. Anthropic lo combina.
- **Dar por hecho que la constitución es estática.** Anthropic actualiza su constitución con el tiempo. La que entrenó Claude Opus 4.7 no es exactamente la que entrenó Claude 2 hace años.
- **Atribuir cualquier rechazo a "la constitución dice".** Mucha gente racionaliza así, pero no hay forma de auditar qué principio se activó en una respuesta concreta. Es una hipótesis razonable, no un hecho verificable desde fuera.

## Resumen en 3 frases

1. **Constitutional AI** sustituye gran parte del feedback humano sobre "harmless" por **autocrítica del modelo** guiada por una constitución escrita en lenguaje natural.
2. Funciona en dos fases: **SL** (modelo critica y revisa según principios, se entrena sobre las revisiones) y **RL** (un juez-IA con la constitución compara pares de respuestas para entrenar el modelo de recompensa).
3. Aporta **escalabilidad, transparencia e iterabilidad**, pero no resuelve el problema de fondo: alguien (Anthropic) sigue eligiendo los principios y su aplicación interna sigue siendo opaca.

## Recursos para profundizar

- [Anthropic — *Claude's Constitution*](https://www.anthropic.com/news/claudes-constitution) — la propia constitución comentada por Anthropic, con las fuentes de cada principio.
- [Anthropic — *Collective Constitutional AI: Aligning a Language Model with Public Input*](https://www.anthropic.com/news/collective-constitutional-ai-aligning-a-language-model-with-public-input) — el experimento de constitución generada por consulta pública.
- [Anthropic Research — Constitutional AI paper](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — el paper técnico original.
- *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024), capítulos de fine-tuning y alineación. Ver `recursos/libros.md`.

## Siguiente lección

➡️ `05-historia-anthropic.md` — Historia de Anthropic y posicionamiento de mercado.

## Fuentes

- Bai et al. (2022). *Constitutional AI: Harmlessness from AI Feedback.* arXiv:2212.08073. Ver `recursos/papers-investigacion.md`.
- Anthropic (2023). *Claude's Constitution.* https://www.anthropic.com/news/claudes-constitution — consultado 2026-05-09.
- Anthropic (2023). *Collective Constitutional AI: Aligning a Language Model with Public Input.* https://www.anthropic.com/news/collective-constitutional-ai-aligning-a-language-model-with-public-input — consultado 2026-05-09.
- [Anthropic Research](https://www.anthropic.com/research) — consultado 2026-05-09.
