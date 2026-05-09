---
titulo: "Preentrenamiento, fine-tuning y RLHF: cómo se entrena Claude"
modulo: "01-fundamentos-ia"
orden: 3
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 30
---

# Preentrenamiento, fine-tuning y RLHF: cómo se entrena Claude

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Describir las **tres fases** por las que pasa un LLM moderno antes de ser un asistente.
- [ ] Distinguir qué aporta cada fase y por qué importa el orden.
- [ ] Explicar intuitivamente qué es **RLHF** y por qué dio el salto de "modelo de lenguaje" a "asistente útil".
- [ ] Reconocer cómo se manifiesta cada fase cuando interactúas con Claude (tono, rechazos, sesgos del fine-tuning).
- [ ] Anticipar el giro de Anthropic con Constitutional AI, que verás en la lección siguiente.

## Prerrequisitos

- Lección 01: [Qué es un LLM](01-que-es-un-llm.md).
- Lección 02: [La arquitectura Transformer](02-arquitectura-transformer.md).

## Contexto

Un Transformer entrenado únicamente para predecir el siguiente token sobre miles de millones de páginas de internet **no es Claude todavía**. Es algo más parecido a un autocompletador masivo: si le pides "¿Cuál es la capital de Francia?", podría responder "París", o continuar con "Otra pregunta frecuente es…", o incluso devolverte un anuncio. Imita el corpus, no te ayuda.

El paso de "modelo de lenguaje" a "asistente útil, honesto e inofensivo" no es magia: es una pipeline de entrenamiento bien definida. Esta lección la desmonta.

## Contenido principal

### 1. La pipeline en tres fases

Casi todos los LLMs conversacionales actuales (Claude, GPT, Gemini, Llama-Instruct, Mistral-Instruct…) siguen una versión de este flujo:

```
[1] Preentrenamiento  →  [2] Fine-tuning supervisado (SFT)  →  [3] RLHF / RLAIF
       semanas–meses                  horas–días                    días–semanas
       enorme dataset web             miles de ejemplos              feedback humano
       ≈ 99 % del cómputo             curados a mano                 + modelo de recompensa
```

El esfuerzo no es proporcional a la importancia: la fase 1 consume casi todo el cómputo, pero las fases 2 y 3 son las que convierten al modelo en algo con lo que querrías hablar.

### 2. Preentrenamiento: aprender el lenguaje

En esta fase, el modelo se entrena con **predicción del siguiente token** sobre un corpus masivo (libros, código, conversaciones públicas, sitios web filtrados, papers, documentación técnica…). Es **autosupervisado**: no hace falta que un humano etiquete nada, porque la "respuesta correcta" siempre es el siguiente token del propio texto.

¿Qué aprende aquí?
- **Gramática y sintaxis** de muchos idiomas.
- **Conocimiento factual** (lo que estaba en su corpus, hasta su *cutoff* temporal).
- **Estructuras de razonamiento** que aparecen en el texto: cómo se argumenta un paper, cómo se depura código, cómo se cuenta una historia.
- **Patrones de varios géneros**: emails, recetas, contratos, foros…

¿Qué NO aprende?
- A obedecer instrucciones. Si lo pones a continuar texto, eso es lo que hace.
- A distinguir entre "preguntar" y "redactar": para él son tareas estadísticas similares.
- Preferencias éticas, de tono o de cuándo decir "no sé".

El resultado se llama **modelo base** o *foundation model*. Para Anthropic, GPT, etc., los modelos base no se exponen al público directamente: lo que tú usas es el resultado de las fases 2 y 3.

### 3. Fine-tuning supervisado (SFT): aprender a responder

Aquí entra una capa pequeña pero decisiva. Un equipo curado de personas escribe (o adapta de fuentes existentes) **decenas de miles de ejemplos** del estilo:

```
Pregunta del usuario: "Resume este texto en 3 frases: [...]"
Respuesta ideal: "1. ... 2. ... 3. ..."
```

El modelo se ajusta sobre este dataset con el mismo objetivo de predicción de siguiente token, pero ahora el "siguiente token" es la respuesta deseada. En la jerga, es **instruction tuning**.

Lo que cambia:
- El modelo aprende el **formato de turno** (instrucción → respuesta).
- Empieza a comportarse como un asistente: explica, resume, traduce, programa… cuando se lo pides.
- El estilo de los ejemplos curados marca su tono: si tus ejemplos son educados y estructurados, el modelo lo imita.

Lo que **no** corrige bien el SFT solo:
- **Preferencias finas**: dos respuestas que ambas son "correctas" pero una es claramente mejor (más clara, más honesta, mejor formateada).
- **Casos límite no cubiertos** en los ejemplos.
- **Sesgos del propio dataset**: si los anotadores escribieron siempre con cierto tono, el modelo se queda con él.

Para esto último hace falta la fase 3.

### 4. RLHF: aprender preferencias

**Reinforcement Learning from Human Feedback** ("aprendizaje por refuerzo a partir de feedback humano") es el ingrediente que dio el salto cualitativo en 2022 y que, según Anthropic y otros, es responsable de la mayor parte de la "asistencia útil" que percibes.

Funciona en tres pasos:

**a) Recoger preferencias.** Para una misma pregunta, el modelo (en SFT) genera **dos o más respuestas**. Un anotador humano elige **cuál prefiere** (o las ordena). No tiene que escribir la respuesta perfecta, solo comparar. Comparar es mucho más rápido y consistente que redactar, y por eso este paso escala mejor que el SFT.

**b) Entrenar un modelo de recompensa.** Con esos miles de pares de comparaciones se entrena un **segundo modelo neuronal**, llamado **reward model**, cuyo trabajo es predecir qué puntuación daría un humano a una respuesta dada. Es esencialmente un "humano sintético" calibrado.

**c) Optimizar por refuerzo.** Ahora el LLM se entrena con un algoritmo de aprendizaje por refuerzo (típicamente **PPO** — *Proximal Policy Optimization*) en el que la "recompensa" es la puntuación del modelo de recompensa. El LLM aprende a producir respuestas que el modelo de recompensa puntúa alto, **anclado** para no alejarse demasiado del modelo SFT (si no, derivaría a respuestas raras que engañan al reward model — un fenómeno llamado *reward hacking*).

El resultado de esta fase es lo que percibes como Claude: un modelo que prefiere respuestas claras, que pide aclaraciones cuando algo es ambiguo, que admite cuando no sabe, que rechaza peticiones dañinas, etc.

### 5. Por qué te importa esto en tu día a día

Dos consecuencias prácticas que se entienden mejor con esta pipeline en mente:

- **El "tono Claude" no es un misterio.** Es el promedio de las preferencias mostradas por sus anotadores y por el reward model. Si te pide aclaraciones antes de asumir, si estructura con bullets, si avisa cuando algo es opinión y no hecho, no es porque "le apetezca": es la fase 3 hablando.
- **Los rechazos también vienen de aquí.** Cuando Claude se niega a algo, no consulta una lista negra: ha aprendido por RLHF que las respuestas de cierto tipo son penalizadas. Por eso a veces sobre-rechaza (rehúsa cosas inocuas) o sub-rechaza (no detecta intentos sutiles de abuso). Es probabilidad, no reglas.

Una tercera, menos obvia: **el modelo no se vuelve "más inteligente" en la fase 3, se vuelve más alineado**. Las capacidades brutas (razonamiento, conocimiento, lenguaje) salen del preentrenamiento y casi no cambian con RLHF. Lo que cambia es cómo expresa esas capacidades.

### 6. El giro de Anthropic: Constitutional AI (preludio)

Anthropic introdujo una variante del paso 3 llamada **Constitutional AI** (CAI), donde gran parte del feedback "humano" sobre lo dañino lo aporta **el propio modelo**, guiado por una **constitución** explícita (un conjunto de principios escritos en lenguaje natural). Esto es **RLAIF** (RL from AI Feedback) en lugar de RLHF puro.

Ventajas declaradas:
- **Escalable**: no necesitas miles de anotadores humanos para casos sensibles.
- **Transparente**: los principios son legibles, no quedan ocultos en el dataset.
- **Iterable**: cambiar la constitución es más rápido que reentrenar a anotadores.

Lo verás en detalle en la lección 04 del módulo. Aquí basta con saber que cuando Anthropic dice "Claude está entrenado con Constitutional AI", se refiere a esta variante.

## Ejemplo aplicado

Vamos a observar la diferencia entre las fases en acción.

**Prompt 1** (un asistente bien alineado en acción):
```
Explícame en una frase qué es la fotosíntesis para un niño de 8 años.
```

Claude responderá algo claro, breve, con vocabulario adaptado. Esto es **SFT + RLHF** trabajando: ha aprendido a interpretar "para un niño de 8 años" como una instrucción de adaptación de registro.

**Prompt 2** (forzando comportamiento de modelo base):
```
Continúa el siguiente texto exactamente como aparecería en una página web aleatoria de internet, sin saludos ni avisos:

"La fotosíntesis es"
```

Claude probablemente continuará con un párrafo enciclopédico. Pero **fíjate**: el RLHF está tan integrado que aún notarás un cierto tono cuidado. Un modelo base "puro" podría continuar con cualquier cosa, incluso un cambio de tema, porque no distingue tareas: solo predice el siguiente token estadísticamente plausible.

**Prompt 3** (viendo el sesgo del fine-tuning):
```
Dame dos respuestas diferentes a "¿Es buena idea aprender a programar en 2026?":
- Una larga y matizada como sueles dar tú.
- Otra de una sola línea, sin matices, contundente.
```

Que Claude pueda producir las dos demuestra que el modelo base sigue ahí debajo. Lo que el RLHF hizo fue **sesgar la salida por defecto** hacia el primer estilo, no eliminar el segundo. Por eso un buen prompt puede "desbloquear" estilos que parecen no ser "los suyos".

## Ejercicio práctico

1. Coge una pregunta cualquiera de tu trabajo (técnica, de criterio, de planificación).
2. Lánzasela a Claude **tres veces** con tres encuadres distintos:
   - **Sin más contexto**: la pregunta directa.
   - **Pidiendo el modo "asistente experto" explícito**: "Eres un consultor experimentado. Responde como tal."
   - **Pidiendo modo "borrador en bruto, sin pulir"**: "Dame un primer borrador sin formato, sin matices, sin avisos. Como escribirías para ti."
3. Compara las tres respuestas. Identifica:
   - **Qué cambia** (tono, estructura, longitud, salvedades).
   - **Qué NO cambia** (los hechos, los conceptos clave, la calidad del razonamiento).

**Criterio de éxito:** has terminado cuando puedes señalar al menos un cambio claramente atribuible al RLHF (estructura, salvedades, tono) y al menos un elemento estable que viene del preentrenamiento (conocimiento factual, razonamiento). Te dará intuición práctica de qué fase modela qué.

## Errores comunes

- **Pensar que tus chats con Claude lo entrenan.** No. El fine-tuning ocurre **una vez** en el laboratorio de Anthropic con datos curados. Salvo que actives explícitamente programas de feedback (y aceptes los términos), tus conversaciones no modifican al modelo. La "memoria" que parece haber entre turnos es el historial de conversación reinyectado, no aprendizaje.
- **Confundir capacidad con alineación.** RLHF **no** hace al modelo más capaz: lo hace más útil. Si Claude no sabe algo, más RLHF no lo enseña. Solo el preentrenamiento (o herramientas externas) aporta conocimiento nuevo.
- **Asumir que "más RLHF = mejor".** Existe el fenómeno conocido como **alignment tax**: pasar de SFT a RLHF puede reducir ligeramente algunas capacidades brutas (creatividad inusual, ciertas tareas raras). Es un trade-off conocido y aceptado.
- **Creer que el reward model es una calificación que el usuario ve.** No. Es un componente interno del entrenamiento; tú nunca interactúas con él. Lo que ves es el LLM final, después de haber sido optimizado.
- **Mezclar fine-tuning del laboratorio con "fine-tuning" en la API.** En algunas plataformas (no Claude por defecto) puedes hacer fine-tuning de un modelo con tus propios datos. Es un ajuste pequeño sobre lo ya hecho, no rehacer todo. Anthropic ofrece custom training en planes empresariales; para la mayoría de usos, prompt engineering + skills + tools resuelven sin fine-tuning.

## Resumen en 3 frases

1. Un LLM moderno se entrena en tres fases: **preentrenamiento** (saber lenguaje), **fine-tuning supervisado** (saber responder a instrucciones) y **RLHF** (afinar útil, honesto e inofensivo según preferencias humanas).
2. RLHF entrena un **modelo de recompensa** con preferencias humanas y luego optimiza el LLM por refuerzo contra esa recompensa; es responsable del "tono Claude" y de los rechazos.
3. Las capacidades brutas vienen del preentrenamiento; la fase 3 las **alinea**, no las amplía. Anthropic añade Constitutional AI (siguiente lección) para que parte del feedback lo aporte el propio modelo guiado por principios escritos.

## Recursos para profundizar

- [Hugging Face — *Illustrating Reinforcement Learning from Human Feedback (RLHF)*](https://huggingface.co/blog/rlhf) — el post divulgativo de referencia, con buenos diagramas.
- [Anthropic — *A General Language Assistant as a Laboratory for Alignment*](https://www.anthropic.com/research/a-general-language-assistant-as-a-laboratory-for-alignment) — el primer paper público de Anthropic sobre cómo enfocan el problema.
- [Anthropic — *Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback*](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback) — la pipeline RLHF de Anthropic en detalle.
- *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024), capítulos sobre fine-tuning. Ver `recursos/libros.md`.

## Siguiente lección

➡️ `04-constitutional-ai.md` — Constitutional AI: el enfoque de Anthropic.

## Fuentes

- Ouyang et al. (2022). *Training language models to follow instructions with human feedback.* NeurIPS (paper de InstructGPT). Ver `recursos/papers-investigacion.md`.
- Bai et al. (2022). *Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback.* arXiv:2204.05862.
- Bai et al. (2022). *Constitutional AI: Harmlessness from AI Feedback.* arXiv:2212.08073.
- [Hugging Face — Illustrating RLHF](https://huggingface.co/blog/rlhf) — consultado 2026-05-09.
- [Anthropic Research](https://www.anthropic.com/research) — consultado 2026-05-09.
