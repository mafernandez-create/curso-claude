---
titulo: "La arquitectura Transformer: intuición sin matemáticas"
modulo: "01-fundamentos-ia"
orden: 2
creado: 2026-05-08
revisado: 2026-05-08
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 40
---

# La arquitectura Transformer: intuición sin matemáticas

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar con tus palabras qué problema resuelve el Transformer respecto a las arquitecturas anteriores (RNN, LSTM).
- [ ] Describir intuitivamente qué es el mecanismo de **atención** y por qué es el corazón del modelo.
- [ ] Reconocer los tres ingredientes que aparecen una y otra vez: atención, múltiples cabezas y apilamiento de capas.
- [ ] Distinguir Transformer *encoder*, *decoder* y *encoder-decoder*, y situar a Claude como decoder-only.
- [ ] Identificar cuándo te conviene saber esto en tu día a día con Claude (límite de contexto, coste, prompts).

## Prerrequisitos

- Lección 01 del módulo: [Qué es un LLM y cómo funciona a grandes rasgos](01-que-es-un-llm.md).
- Idea básica de qué es un *token* (subunidad de texto, no necesariamente una palabra).

## Contexto

En la lección anterior llegamos a una idea: un LLM predice el siguiente token. Pero esa intuición no explica **cómo** lo predice. ¿Por qué los modelos de hace una década apenas podían escribir un párrafo coherente y los actuales redactan, traducen y programan? La diferencia tiene un nombre: la arquitectura **Transformer**, presentada en el paper *Attention Is All You Need* (Vaswani et al., 2017).

No vas a programar uno, ni te van a preguntar derivadas en una entrevista. Pero entender la intuición te ayuda a interpretar tres cosas muy concretas: por qué Claude tiene un **límite de contexto**, por qué los prompts largos son **caros**, y por qué a veces el modelo "pierde el hilo" en mitad de un documento.

## Contenido principal

### 1. El problema previo: leer palabra a palabra no escala

Antes de 2017, los modelos de lenguaje dominantes eran las **redes recurrentes** (RNN) y sus variantes mejoradas (LSTM, GRU). Procesaban el texto **secuencialmente**: leían un token, actualizaban un "estado interno" que resumía lo visto hasta ahí, leían el siguiente, y así sucesivamente.

Tenía dos defectos graves:

- **Memoria corta.** Por mucho que se intentara, el estado interno olvidaba lo que pasó al principio de un texto largo. Si la frase 50 dependía de la 1, mala suerte.
- **No paralelizable.** Como el token *n* dependía del estado al procesar el *n−1*, no podías repartir el trabajo entre miles de GPUs. El cuello de botella era la propia secuencialidad.

El Transformer resuelve ambos a la vez con una idea: en lugar de leer palabra a palabra arrastrando un resumen, deja que **cada token mire directamente a todos los demás**. Eso es la atención.

### 2. La idea central: atención

Imagina que estás traduciendo esta frase al inglés:

> "El médico atendió al paciente porque **estaba** preocupado."

¿Quién estaba preocupado, el médico o el paciente? Para resolver "estaba", tu cerebro **vuelve atrás** y mira a los candidatos: "médico", "paciente". Pondera contexto. Decide.

El mecanismo de **atención** hace exactamente eso, pero matematizado. Para cada token que el modelo está procesando:

1. El token formula una especie de **pregunta** ("¿quién es relevante para mí ahora?").
2. Cada otro token de la secuencia presenta una **etiqueta** que dice "yo soy esto".
3. El modelo compara la pregunta con todas las etiquetas y produce un **peso** de relevancia para cada token.
4. Luego mezcla la información de los demás tokens, **ponderada por esos pesos**, y la incorpora a la representación del token actual.

En la jerga técnica esos tres roles se llaman *query*, *key* y *value*. No los necesitas memorizar: lo que importa es que cada token, en cada capa, **reconfigura su significado** mirando al resto.

Una propiedad crucial: esta operación es **paralelizable**. Todos los tokens "se miran" a la vez. Por eso los Transformers escalan tan bien en GPU: en lugar de una cadena secuencial, son un montón de comparaciones independientes que un acelerador devora.

### 3. Self-attention: mirarse a uno mismo

Cuando los tokens que se miran pertenecen **a la misma secuencia** (el propio texto que estás procesando), hablamos de **self-attention** (autoatención). Es lo que permite que en *"El gato persiguió al ratón hasta que **se** cansó"*, el "se" pueda enlazar con "gato" cuatro tokens antes.

Toda la magia conversacional de Claude se apoya en esto: cada token de tu prompt y de la respuesta puede, en principio, atender a cualquier otro token dentro de la **ventana de contexto**. Y aquí aparece la primera consecuencia práctica:

> **El coste computacional de la atención crece aproximadamente con el cuadrado de la longitud del contexto.** Doblar el contexto cuadruplica el trabajo.

Por eso los modelos tienen un límite de tokens (la "ventana"), por eso los prompts largos son caros, y por eso existen técnicas como *prompt caching* o *attention sparsa* para mitigarlo. Lo profundizarás en los módulos 05 y 07.

### 4. Múltiples cabezas: varias perspectivas a la vez

Una sola operación de atención produce un único patrón de relevancia. Pero las relaciones lingüísticas son muchas: sintácticas, semánticas, de correferencia, de causa, de tiempo… Resolver todas con un solo "filtro" sería pobre.

Solución: **multi-head attention**. En cada capa, el modelo ejecuta **varias atenciones en paralelo**, cada una con su propio juego de parámetros. Es como tener varios analistas leyendo el mismo párrafo, cada uno con un foco distinto: uno atiende a quién hace qué, otro a relaciones temporales, otro a sentimiento. Sus salidas se combinan.

No hay garantía de que cada cabeza se especialice limpiamente en una función interpretable; eso es objeto de la investigación de **interpretabilidad** (Módulo 13). Pero el efecto agregado es claro: el modelo capta relaciones más ricas que con una sola cabeza.

### 5. Apilar capas: refinar el significado

Una capa Transformer (atención + un pequeño bloque de procesamiento llamado *feed-forward*) ya da resultados decentes. Pero los modelos modernos **apilan decenas o cientos** de capas, una encima de la otra.

La intuición:

- En las capas bajas, el modelo trabaja con representaciones **superficiales** (qué palabra es, qué forma tiene).
- En las capas medias, emergen relaciones **sintácticas y semánticas** locales (sujeto-verbo, sentido de una frase).
- En las altas, aparecen patrones **abstractos**: tono, intención, estructura argumental, planificación de la respuesta.

Cada capa toma como entrada las representaciones refinadas por la anterior. Es una destilación progresiva. Modelos del tamaño de Claude tienen muchas decenas de capas; el número exacto no es público.

### 6. Encoder, decoder y por qué Claude es decoder-only

El Transformer original tenía dos mitades:

- Un **encoder** que leía el texto de entrada (por ejemplo, una frase en francés) y producía una representación rica de él.
- Un **decoder** que generaba el texto de salida token a token (la traducción al inglés), atendiendo tanto a lo ya generado como a la representación del encoder.

Esta arquitectura encoder-decoder sigue viva en sistemas de traducción y similares. Pero la familia de modelos generativos a la que pertenecen Claude, GPT y la mayoría de LLMs conversacionales es **decoder-only**: solo hay decoder. La entrada del usuario y la salida del modelo viven **en la misma secuencia** que el modelo extiende token a token.

Hay una restricción importante en el decoder: cuando genera el token *n*, solo puede atender a los tokens *anteriores* (1 hasta *n−1*). No puede mirar al futuro porque no existe todavía. A esto se le llama **atención causal** o **enmascarada**. Es lo que convierte un Transformer en un generador de texto en lugar de un mero codificador.

### 7. Y todo esto, ¿por qué emergió en Claude?

Tres ideas para cerrar el panorama:

- **Posición.** Como la atención no es secuencial, hace falta inyectar de algún modo la posición de cada token (si "no" va antes o después de "es" cambia mucho el significado). Se hace con *positional encodings*. Hay variantes (absolutas, relativas, RoPE…); las modernas, como las de Claude, usan esquemas que permiten extender la ventana de contexto.
- **Escala.** Un Transformer pequeño no escribe maravillas. Un Transformer grande, entrenado con suficiente texto y cómputo, sí. Las **leyes de escalado** que viste en la lección 01 fueron las que justificaron empíricamente invertir en hacerlos enormes.
- **Alineación posterior.** El Transformer entrenado en bruto (predicción de siguiente token sobre internet) no es Claude todavía. Falta el paso de **fine-tuning + RLHF + Constitutional AI** que lo convierte en un asistente útil, honesto e inofensivo. Eso es la lección 03 del módulo.

## Ejemplo aplicado

Vamos a ver la atención **en acción** sin tocar código.

**Prompt:**
```
Lee esta frase y dime, sin más explicación, a qué palabra se refiere "ella":

"Marta llamó a su madre porque ella estaba preocupada por la noticia."
```

Claude probablemente responderá que "ella" es ambiguo: puede ser Marta o la madre. El modelo, al procesar "ella", evalúa la relevancia de cada token previo. Tanto "Marta" como "madre" reciben pesos altos; el modelo no puede desambiguar sin más contexto. Esto es atención **detectando ambigüedad real del lenguaje**, no un fallo.

Ahora prueba esta variante:

```
Lee esta frase y dime, sin más explicación, a qué palabra se refiere "ella":

"Marta llamó a su madre porque ella había leído una mala crítica sobre el restaurante de Marta."
```

Aquí la pista contextual ("crítica sobre el restaurante de Marta") debería desplazar el peso de la atención hacia "madre". Si Claude lo resuelve correctamente, ha sido la atención multi-capa la que ha conectado información distante de la frase.

Reflexiona: lo que parece "comprensión" es la composición de muchísimas operaciones de atención apiladas. No hay un módulo "resolutor de pronombres". Es atención todo el camino.

## Ejercicio práctico

1. Coge un párrafo cualquiera de tu trabajo o de un libro (5–8 frases) y elige **tres palabras** dentro de él: una sustantiva (un nombre), una conectora (un pronombre o conjunción) y una verbal.
2. Para cada una, escribe a mano qué **otras dos palabras del párrafo** son las más relevantes para entender su significado en ese contexto. Justifica la elección en una frase.
3. Pásale el párrafo a Claude con este prompt:

   ```
   Para la palabra "X" dentro del siguiente párrafo, lista las dos palabras del párrafo que aportan más contexto para interpretarla y explica por qué en una frase. Repite para "Y" y "Z".

   <párrafo aquí>
   ```

4. Compara las respuestas con tu análisis. ¿Coinciden? ¿Hay alguna donde Claude haya identificado una conexión que tú no viste, o al revés?

**Criterio de éxito:** has terminado cuando puedes describir en voz alta, sin notas, qué es la atención y por qué se llama así, usando esta tarea como ejemplo. Si para explicarlo recurres a "magia" o "la red neuronal", todavía no lo tienes.

## Errores comunes

- **Confundir "atención" con "concentración" del modelo.** No es que Claude "se concentre" más en unas palabras: es una operación matemática que asigna pesos. La metáfora antropomórfica es útil al explicar, peligrosa al razonar.
- **Asumir que el modelo "ve" toda la conversación a la vez sin coste.** La atención escala cuadráticamente con el contexto. Cada token añadido encarece el procesamiento de **todos** los anteriores. De ahí los precios por token y la necesidad de prompt caching.
- **Pensar que Transformer = LLM.** El Transformer es una arquitectura. Hay Transformers de visión (ViT), de audio, de código, de proteínas (AlphaFold). Los LLM son una aplicación dominante, no la única.
- **Sobreinterpretar las "cabezas de atención".** Es tentador imaginar que cada cabeza hace algo limpio e interpretable ("la cabeza 7 detecta sujetos"). La realidad es más sucia: la mayoría son polisemánticas y solo algunas presentan patrones legibles. La interpretabilidad mecanicista de Anthropic trabaja en abrir esa caja negra.
- **Creer que más capas = mejor.** A partir de cierto punto, profundizar sin aumentar también datos y cómputo no compensa. El equilibrio entre parámetros, datos y cómputo (leyes de escalado) lo verás en la lección 03.

## Resumen en 3 frases

1. El Transformer reemplaza el procesamiento secuencial por **atención**: cada token mira directamente a todos los demás, en paralelo, lo que escala mucho mejor en GPU.
2. La arquitectura combina **self-attention**, **múltiples cabezas** que miran en paralelo con focos distintos y **muchas capas apiladas** que refinan progresivamente el significado.
3. Claude es un Transformer **decoder-only** con atención causal: genera token a token mirando solo al pasado, y todo lo que parece "comprensión" es la composición de estas operaciones a gran escala.

## Recursos para profundizar

- [Jay Alammar — *The Illustrated Transformer*](https://jalammar.github.io/illustrated-transformer/) — la explicación visual canónica. Si solo tienes 30 minutos extra, gástalos aquí.
- [3Blue1Brown — *Attention in transformers, visually explained*](https://www.3blue1brown.com/lessons/attention) — vídeo con animaciones excelentes; complementa muy bien al post anterior.
- *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024), capítulos 1–3 — ver `recursos/libros.md`.
- [Hugging Face — *How do Transformers work?*](https://huggingface.co/learn/llm-course/chapter1/4) — capítulo del LLM Course con foco práctico.
- [Anthropic — *A Mathematical Framework for Transformer Circuits*](https://transformer-circuits.pub/2021/framework/index.html) — para cuando ya domines lo básico y quieras meter la cabeza en interpretabilidad. Avanzado.

## Siguiente lección

➡️ `03-preentrenamiento-fine-tuning-rlhf.md` — Preentrenamiento, fine-tuning y RLHF: cómo Claude pasa de "Transformer en bruto" a asistente útil.

## Fuentes

- Vaswani et al. (2017). *Attention Is All You Need.* arXiv:1706.03762. Ver `recursos/papers-investigacion.md`.
- Alammar, J. (2018). *The Illustrated Transformer.* https://jalammar.github.io/illustrated-transformer/ — consultado 2026-05-08.
- Alammar, J. & Grootendorst, M. (2024). *Hands-On Large Language Models*. O'Reilly. Ver `recursos/libros.md`.
- [Hugging Face — LLM Course, capítulo 1](https://huggingface.co/learn/llm-course/chapter1) — consultado 2026-05-08.
- [Anthropic — Transformer Circuits Thread](https://transformer-circuits.pub/) — consultado 2026-05-08.
