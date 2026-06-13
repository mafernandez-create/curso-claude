---
titulo: "Qué es un LLM y cómo funciona a grandes rasgos"
modulo: "01-fundamentos-ia"
orden: 1
creado: 2026-04-23
revisado: 2026-06-13
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 30
---

# Qué es un LLM y cómo funciona a grandes rasgos

!!! objetivo "Al terminar sabrás…"
    Explicar, sin tecnicismos, qué es un LLM y por qué funciona prediciendo el siguiente *token* — y, sobre todo, qué **no** hace por sí solo.

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar con tus palabras qué es un Large Language Model (LLM) a una persona sin formación técnica.
- [ ] Describir la idea central del funcionamiento: predicción del siguiente *token*.
- [ ] Distinguir qué hace un LLM de lo que **no** hace (no razona simbólicamente, no consulta una base de datos, no "entiende" en el sentido humano).
- [ ] Reconocer por qué la escala (parámetros, datos, cómputo) es un factor clave.

## Prerrequisitos

- Ninguno. Esta es la primera lección del curso.
- Ayuda haber usado alguna vez Claude, ChatGPT, Gemini o similar, aunque no es obligatorio.

## Contexto

La mayor parte del material sobre Claude se centra en **cómo usarlo**: prompts, skills, agentes, integraciones. Pero si no tienes un modelo mental sólido de **qué es** un LLM por debajo, cada nueva feature se aprende de memoria y se olvida en cuanto Anthropic publica la siguiente. Peor: acabas atribuyendo al modelo capacidades mágicas o, al contrario, desconfiando de él cuando falla por razones predecibles.

Esta lección es la base sobre la que se apoya todo lo demás. No necesitas matemáticas: solo una intuición correcta.

## Contenido principal

### 1. Qué es un LLM

Un **Large Language Model** (modelo grande de lenguaje) es un sistema estadístico entrenado sobre enormes cantidades de texto para aprender a producir texto plausible ante una entrada. "Grande" hace referencia a dos cosas:

- El **tamaño del modelo** (miles de millones de parámetros, las "perillas" internas que se ajustan durante el entrenamiento).
- El **volumen de datos** con los que se entrena (cientos de miles de millones de palabras procedentes de libros, web pública, código, conversaciones, etc.).

Claude, GPT, Gemini, Llama o Mistral son todos LLMs. Lo que los diferencia son los datos usados, las decisiones de arquitectura, el proceso de alineación posterior y la escala.

Un LLM **no es**:
- Una base de datos que "recuerda" los textos con los que se entrenó.
- Un motor de búsqueda que consulta internet en tiempo real (a menos que le conectes una herramienta que lo haga).
- Un razonador simbólico al estilo de Prolog o un demostrador de teoremas.

Es más parecido a una **función estadística muy compleja**: introduces texto, obtienes texto que, según lo aprendido, es una continuación plausible.

### 2. La idea central: predecir el siguiente token

Aquí está el 80% de la intuición. Todo lo que hace un LLM en su núcleo es:

> Dado un trozo de texto, predecir cuál es el siguiente fragmento de texto (*token*) más probable. Repetir.

Un **token** no es exactamente una palabra: suele ser una subunidad (una palabra corta entera, o una raíz, o un sufijo). Por ejemplo, "cantando" podría partirse en "cant" + "ando". Los modelos trabajan con tokens porque así manejan vocabularios manejables y toleran palabras raras.

Cuando escribes a Claude *"la capital de Francia es"*, el modelo no "sabe" geografía como lo sabrías tú. Lo que ocurre es:

1. Convierte tu texto en tokens.
2. Calcula, para **cada uno de los ~100.000 tokens posibles** de su vocabulario, una probabilidad de ser el siguiente.
3. En los datos de entrenamiento, tras millones de frases que empiezan igual, el token " París" resulta el más probable.
4. Lo elige (o muestrea entre los más probables) y lo emite.
5. Vuelve al paso 1 con el texto ampliado, y así hasta que decide parar.

De esta mecánica tan simple emergen comportamientos sorprendentemente sofisticados cuando la escala es suficiente: resumir, traducir, programar, analizar. Pero también emergen las limitaciones que verás en lecciones posteriores (alucinaciones, errores de conteo, sensibilidad al fraseo).

### 3. Parámetros, datos y cómputo: por qué la escala importa

Un LLM se define por tres magnitudes:

- **Parámetros**: los pesos internos del modelo. Claude, GPT-4 y similares trabajan en el rango de cientos de miles de millones. Más parámetros → mayor capacidad representacional, pero también mayor coste.
- **Datos de entrenamiento**: cuántos tokens únicos ha "leído" el modelo durante el preentrenamiento.
- **Cómputo**: cuántas operaciones matemáticas se han invertido en entrenarlo, medido habitualmente en *FLOPs*.

A partir de cierto umbral, escalar estas tres variables **de forma equilibrada** produce mejoras cualitativas: tareas que el modelo pequeño no podía hacer pasan a ser resolubles por el grande. Es el fenómeno de las **capacidades emergentes**, objeto de debate activo: no está claro si son saltos reales o artefactos de cómo medimos.

Las leyes de escalado (Kaplan et al., 2020) formalizaron esta observación. No son leyes físicas: son regularidades empíricas que han guiado la última década de inversión en IA.

### 4. Qué NO hace un LLM por sí solo

Es tan importante como lo que sí hace:

- **No aprende de tus conversaciones.** Salvo que el proveedor haga fine-tuning con tus datos (cosa que Anthropic no hace por defecto con tus chats), cada conversación empieza desde cero. Lo que tú percibes como "memoria" entre turnos es el historial de la conversación que se le reinyecta como contexto en cada turno.
- **No consulta internet.** Salvo que se le añada una herramienta de búsqueda o un conector específico.
- **No ejecuta código.** Salvo que se le conecte a un entorno de ejecución (como hacen Claude Code, los artefactos o los intérpretes de código).
- **No garantiza veracidad.** Produce texto plausible, no texto verdadero. Cuando lo plausible coincide con lo verdadero es porque los datos de entrenamiento estaban bien alineados con la realidad en ese punto.

Todo lo que "parece" que hace más allá de predecir tokens es en realidad **texto que describe una acción** + **un sistema externo que interpreta ese texto y la ejecuta**. Esa distinción es clave para el Módulo 08 (MCP) y el 09 (agentes).

## Ejemplo aplicado

Abre Claude (web, app o terminal) y prueba esta secuencia, observando lo que ocurre:

**Prompt 1:**
```
Completa esta frase con la palabra más probable: "El gato se subió al ___"
```

Claude responderá algo como "tejado", "árbol" o similar. Reflexiona: no ha visto a ningún gato. Simplemente, en su corpus de entrenamiento, estas continuaciones aparecen con alta frecuencia tras ese inicio.

**Prompt 2:**
```
Tengo 17 manzanas. Doy 3 a Ana, luego 5 a Luis, y compro otras 8. ¿Cuántas tengo?
```

Claude responderá 17 (17 − 3 − 5 + 8 = 17). Pero aquí la lección no es si acierta: es que está haciendo este cálculo mediante predicción de tokens, no mediante una calculadora interna. Por eso modelos más pequeños fallan en aritmética larga y los grandes aciertan casi siempre en la corta, aunque sin garantía formal. Con extended thinking o herramientas de cálculo, esta limitación se mitiga.

**Prompt 3:**
```
Inventa una referencia bibliográfica sobre "el impacto de la luz lunar en la productividad del teletrabajo".
```

Probablemente Claude te dará una referencia con aspecto perfectamente creíble: autor, año, editorial, páginas. Casi con total seguridad será **falsa**. Es un ejemplo canónico de **alucinación**: texto plausible sin anclaje en la realidad. Lo estudiarás a fondo en la lección 08 del módulo.

## Ejercicio práctico

1. Escribe, en **150–200 palabras**, una explicación de qué es un LLM dirigida a un familiar tuyo sin formación técnica. Debe responder a:
   - ¿Qué hace Claude cuando le escribo algo?
   - ¿Por qué a veces se equivoca con seguridad?
   - ¿Por qué no es "internet" ni "una base de datos"?
2. Léele tu explicación a esa persona (o imagínala leyéndola). Si tiene que hacerte más de **dos preguntas de aclaración**, reescribe.

**Criterio de éxito:** tu explicación no usa las palabras "parámetros", "transformer", "tokens" ni "atención" — todas ellas son implementación, no esencia. Si las necesitas, no has interiorizado la idea todavía.

## Errores comunes

- **Confundir LLM con IA.** Un LLM es un tipo de sistema de IA. Hay muchos sistemas de IA que no son LLMs (visión por computador clásica, motores de recomendación, optimización combinatoria…). Usar "IA" y "LLM" como sinónimos te cerrará puertas en conversaciones técnicas.
- **Creer que más parámetros siempre es mejor.** Para muchas tareas, un modelo pequeño bien ajustado supera a uno grande genérico. La familia Claude (Haiku, Sonnet, Opus) existe precisamente para cubrir diferentes puntos de esta curva coste/capacidad.
- **Atribuir intencionalidad.** Expresiones como "Claude ha decidido…" o "Claude quiere…" son antropomorfizaciones útiles como atajo, peligrosas como modelo mental. El modelo no tiene intención; tiene una distribución de probabilidad sobre tokens.
- **Asumir que si entiende algo una vez, lo entiende siempre.** Un cambio menor en el prompt puede desplazar la salida a una región muy distinta. Reproducibilidad ≠ determinismo.

!!! resumen "Lo esencial en 3 frases"
    1. Un LLM es un sistema estadístico que, dado un texto, predice repetidamente el siguiente token más probable según lo aprendido de un gran corpus.
    2. Toda la aparente sofisticación (resumir, programar, razonar) emerge de esta mecánica simple cuando se escala en parámetros, datos y cómputo.
    3. Lo que parece memoria, cálculo, búsqueda o ejecución son siempre **texto generado** + **sistema externo que lo interpreta**; el modelo por sí solo solo produce texto.

??? reto "Pon a prueba lo aprendido"
    1. En una frase: ¿qué hace un LLM en su núcleo?
       *(Predecir el siguiente token más probable, una y otra vez.)*
    2. ¿Por qué Claude puede darte una cita bibliográfica con aspecto creíble pero falsa?
       *(Genera texto plausible, no verdadero: es una alucinación.)*
    3. Verdadero o falso: un LLM "recuerda" tus conversaciones anteriores por defecto.
       *(Falso. Cada conversación parte de cero; lo que parece memoria es el historial reinyectado como contexto.)*

## Recursos para profundizar

- [Anthropic Research](https://www.anthropic.com/research) — blog de investigación oficial; selecciona los posts etiquetados como introductorios.
- [Hugging Face — LLM Course](https://huggingface.co/learn) — curso gratuito con buena base conceptual y práctica.
- *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024) — explicaciones visuales excelentes. Ver `recursos/libros.md`.
- [3Blue1Brown — But what is a neural network?](https://www.3blue1brown.com/lessons/neural-networks) — intuición visual de la base que hay debajo.

## Siguiente lección

La arquitectura Transformer: intuición sin matemáticas.

[Siguiente: La arquitectura Transformer →](02-arquitectura-transformer.md){ .md-button .md-button--primary }

## Fuentes

- [docs.claude.com — Documentación oficial de Anthropic](https://docs.claude.com/) — consultado 2026-04-23.
- [Anthropic Research](https://www.anthropic.com/research) — consultado 2026-04-23.
- Kaplan et al. (2020). *Scaling Laws for Neural Language Models.* arXiv:2001.08361. Ver `recursos/papers-investigacion.md`.
- Alammar, J. & Grootendorst, M. (2024). *Hands-On Large Language Models*. O'Reilly. Ver `recursos/libros.md`.
