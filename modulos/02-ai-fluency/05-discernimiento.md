---
titulo: "Discernimiento: cómo evaluar lo que te responde"
modulo: "02-ai-fluency"
orden: 5
creado: 2026-07-22
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Discernimiento: cómo evaluar lo que te responde

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar por qué **fluidez y veracidad son independientes** en un LLM, y por qué eso rompe tu intuición.
- [ ] Aplicar el **mapa de sospecha**: dónde mirar primero según el tipo de respuesta.
- [ ] Usar cuatro técnicas concretas de verificación, sabiendo qué detecta cada una.
- [ ] Entender por qué **quien genera no puede evaluarse a sí mismo**, y qué hacer al respecto.
- [ ] Calibrar tu esfuerzo de verificación al **coste de equivocarte**, en vez de verificarlo todo o nada.

## Prerrequisitos

- Lección 02: [El framework de las 4 dimensiones](02-framework-4-dimensiones.md). Discernimiento es la tercera D.
- Muy recomendable la [lección 08 del Módulo 01](../01-fundamentos-ia/08-limitaciones-llm.md): allí se explica **por qué** el modelo se equivoca (alucinación, cutoff, sesgo). Aquí se explica **qué haces tú** al respecto.

## Contexto

Delegaste bien y describiste bien. La respuesta ya está en pantalla. Esta es la dimensión donde se pierde más dinero y más credibilidad, porque es la única que **no tiene prisa por reclamarte atención**: el texto llega ordenado, seguro y bien escrito, y todo en él te invita a aceptarlo.

Discernimiento no es desconfianza. Desconfiar de todo es tan inútil como confiar en todo: te cuesta el tiempo que venías a ahorrar. Es **saber dónde mirar**.

## Contenido principal

### 1. La trampa de la plausibilidad

En un texto escrito por una persona, la forma es una pista de la sustancia. Si alguien redacta con precisión, cita fuentes y estructura bien el argumento, normalmente es porque sabe del tema. Aprendiste a leer esa señal y funciona.

Con un LLM esa correlación **se rompe**. El modelo produce la forma de una respuesta experta tanto si tiene el contenido como si no. Una cita inventada tiene exactamente el mismo aspecto que una real: autor verosímil, año plausible, revista que existe. Un razonamiento con un salto lógico en el paso cuatro se lee igual de fluido que uno correcto.

Dicho de otro modo: **la confianza del texto no es evidencia de nada**. Es la única señal que tu cerebro lleva décadas entrenado para leer, y aquí no sirve. Esto no se arregla "estando atento": hay que sustituir la intuición por un procedimiento.

### 2. Las tres formas de equivocarse

Conviene separarlas porque se detectan de manera distinta.

**Error factual.** Un dato falso: una cifra, una fecha, una cita, una función que no existe, una atribución equivocada. Es el más fácil de detectar *si te molestas*, porque es verificable contra una fuente externa. También es el más peligroso, porque es el que se propaga a tu informe.

**Error de razonamiento.** Los datos son correctos pero la inferencia no se sostiene: correlación presentada como causa, una conclusión más fuerte de lo que aguanta la evidencia, un paso intermedio que falta. No se detecta buscando en Google: se detecta **leyendo el argumento paso a paso** y preguntando "¿esto se sigue de lo anterior?".

**Sesgo y omisión.** Lo que hay puede ser cierto, pero falta algo, o el encuadre inclina el resultado. Es el más difícil, porque **no puedes ver lo que no está**. Se detecta preguntando activamente: ¿qué perspectiva falta aquí? ¿a quién beneficia este marco?

### 3. El mapa de sospecha: dónde mirar primero

No revises linealmente. Ve directo a las zonas de alta probabilidad de error:

| Zona | Por qué falla | Qué haces |
|---|---|---|
| **Cifras y fechas** | El modelo predice tokens, no calcula ni recuerda con precisión | Verifica contra fuente; recalcula tú |
| **Citas, referencias y autorías** | Zona clásica de invención con formato perfecto | Búscala. Si no aparece, no existe |
| **Todo lo posterior al cutoff** | Sencillamente no lo sabe | Exige fuente con fecha, o usa búsqueda |
| **Temas de nicho** (*long tail*) | Poca cobertura en el corpus, más invención | Sube el listón de verificación |
| **Nombres propios poco comunes** | Se confunden y se cruzan entre sí | Confirma identidad antes de seguir |
| **Lo que confirma lo que ya querías oír** | Tu propio sesgo baja la guardia | Es donde más despacio hay que ir |

La última fila es la importante y la que menos se practica. Cuando una respuesta te da la razón, **la revisas menos**. Si le has contado al modelo cuál es tu producto, tu hipótesis o tu bando, has instalado ese sesgo en la conversación.

### 4. Cuatro técnicas que funcionan

**Leer en alto.** Ridículamente simple y sorprendentemente eficaz para errores de razonamiento. La lectura silenciosa salta; la voz obliga a procesar cada frase. Los saltos lógicos suenan raros aunque se lean bien.

**Verificar lo verificable, no lo verosímil.** Coge las tres afirmaciones más concretas del texto —las que tienen número, nombre o fecha— y compruébalas. Si las tres se sostienen, la fiabilidad del resto sube. Si una falla, trata el conjunto como sospechoso.

**Pedir la fuente por separado.** No "¿esto es verdad?" (te dirá que sí), sino "¿de dónde sale este dato exactamente?". Una fuente localizable se comprueba en treinta segundos. Un "según diversos estudios" es una señal de alarma, no una fuente.

**Reformular la pregunta en conversación nueva.** Si un dato importa, pregúntalo otra vez desde cero, sin el contexto anterior y sin insinuar la respuesta que esperas. Si obtienes algo distinto, has encontrado terreno inestable. No prueba cuál es correcta: prueba que hay que ir a la fuente.

Lo que **no** funciona, por si acaso: preguntarle si está seguro (ajusta el tono, no el contenido), pedirle "no inventes" (no tiene forma fiable de saber si lo hace), y fiarte de su nivel de seguridad aparente.

### 5. Quien genera no puede evaluarse a sí mismo

Este es el principio que más rendimiento da y el menos aplicado.

Si le pides al modelo que revise su propio trabajo **en la misma conversación**, tiende a validarlo. No por terquedad: todo lo que escribió antes está en su contexto como premisa, y la coherencia con el propio texto compite con la fidelidad a los hechos. El resultado suele ser "está correcto" con matices cosméticos.

Lo que sí funciona es separar los papeles:

- **Conversación nueva**, sin el historial de generación.
- **Instrucción de refutar**, no de revisar. "Busca los fallos de este texto" da fallos; "revísalo" da un visto bueno.
- **Ante la duda, marcar como no confirmado.** Si el evaluador puede empatar, empata siempre a favor de lo escrito.

Y un matiz que cuesta aprender: **verificar la fuente no es verificar lo que has escrito**. Puedes partir de fuentes impecables y aun así deformarlas al resumir —sobreafirmar un matiz, perder una condición, mezclar dos casos—. Son dos revisiones distintas, y la segunda es la que se salta todo el mundo.

### 6. Verificación proporcional al riesgo

Verificarlo todo con el mismo rigor es imposible y además innecesario. Calibra:

| Si el output… | Esfuerzo de verificación |
|---|---|
| Es para ti, y un error se nota enseguida | Lectura rápida. Casi nada |
| Va a otra persona pero es reversible | Leer en alto + comprobar datos concretos |
| Va a un cliente, un pliego o publicación | Verificación completa + evaluador independiente |
| Sostiene una decisión con dinero, salud o derechos | Todo lo anterior **y** fuente primaria en cada afirmación |

La pregunta que ordena la escala: **¿qué pasa si esto está mal y nadie lo detecta?** Si la respuesta es "nada grave", ahorra tiempo. Si es "pierdo un cliente" o "alguien toma una decisión equivocada", ahí es donde se justifica el rato.

## Ejemplo aplicado

Le pides a Claude una comparativa técnica entre dos materiales para una propuesta a cliente. Devuelve tres párrafos bien escritos con una tabla de valores.

**Mapa de sospecha.** La tabla tiene siete cifras y dos referencias a normas. Ahí voy primero.

**Verificar lo verificable.** Compruebo las dos normas: una existe con ese código, la otra tiene el número cambiado. Primera bandera. De las siete cifras, elijo las tres que sostienen la conclusión.

**Pedir la fuente por separado.** "¿De qué documento y qué página sale este valor?" Dos tienen documento localizable. La tercera se justifica con "valores típicos del sector": eso no es un dato, es un relleno. Segunda bandera.

**Razonamiento.** Leo en alto la conclusión. Compara dos valores medidos —lo dice el propio texto— en condiciones de ensayo distintas. La comparación no se sostiene aunque ambas cifras sean ciertas. Tercera bandera, y la más grave: no es un dato falso, es una inferencia inválida, y es exactamente lo que iba a ir en la propuesta.

**Decisión.** El texto sirve como estructura, no como contenido. Me quedo el esqueleto, sustituyo los datos por los de las fichas técnicas y elimino la conclusión comparativa hasta tener valores homogéneos.

Tiempo invertido: quince minutos. Alternativa: enviar al cliente una comparación inválida con una norma inexistente.

## Ejercicio práctico

1. Recupera una respuesta **que hayas usado de verdad** en las últimas semanas — algo que enviaste, publicaste o sobre lo que decidiste.
2. Aplica el mapa de sospecha: subraya toda cifra, fecha, nombre propio y referencia.
3. Verifica **tres** de esas afirmaciones contra fuente externa.
4. Lee la conclusión en alto y pregúntate si se sigue de lo que la precede.
5. Anota: ¿cuántos fallos encuentras? ¿de qué tipo (factual, razonamiento, sesgo)?

**Criterio de éxito:** encuentras al menos un fallo, o confirmas que las tres afirmaciones se sostienen citando **dónde** lo has comprobado. Si tu conclusión es "estaba todo bien" sin poder decir contra qué lo verificaste, no has hecho el ejercicio: has vuelto a leerlo.

## Errores comunes

- **Confundir revisar con verificar.** Releer es comprobar que suena bien. Verificar es contrastar contra algo externo al texto. Solo lo segundo detecta invenciones.
- **Verificar solo lo que suena raro.** Los errores peligrosos son los que suenan perfectos. Si tu criterio es la extrañeza, se te escapan justo los caros.
- **Preguntarle al modelo si acertó.** En la misma conversación tenderá a confirmarse. Si vas a usar IA para evaluar, que sea sin el historial y con instrucción de refutar.
- **Verificar todo con el mismo rigor.** Insostenible: acabas abandonando el hábito entero. Calibra por consecuencia.
- **Bajar la guardia cuando te da la razón.** Es el punto ciego más caro, y se agrava si le contaste de qué lado estás.
- **Detenerse en los datos y no revisar el razonamiento.** Todos los datos pueden ser ciertos y la conclusión no seguirse. Ese error no lo detecta ninguna búsqueda.

## Resumen en 3 frases

1. En un LLM, **fluidez y veracidad son independientes**: la seguridad del texto no es evidencia de nada, así que hay que sustituir la intuición por un procedimiento.
2. Discernir es **saber dónde mirar** —cifras, citas, lo posterior al cutoff, los temas de nicho y, sobre todo, lo que confirma lo que ya querías oír— y verificar contra algo externo al texto.
3. **Quien genera no se evalúa a sí mismo**: para lo que importa, evaluador independiente, instrucción de refutar en vez de revisar, y esfuerzo proporcional a lo que cuesta equivocarse.

## Recursos para profundizar

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — la sección de Discernment con sus propios ejercicios.
- [Anthropic — Reducing hallucinations](https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) — técnicas del lado del prompt para reducir invenciones.
- [Módulo 01, lección 08](../01-fundamentos-ia/08-limitaciones-llm.md) — por qué se producen estos errores.
- [Módulo 05, lección 11](../05-prompt-engineering/11-evaluacion-prompts.md) — cuando el discernimiento hay que sistematizarlo en evaluaciones repetibles.

## Siguiente lección

➡️ `06-diligencia.md` — Diligencia: uso responsable y ético.

## Fuentes

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — consultado 2026-07-22.
- [docs.claude.com — Reduce hallucinations](https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) — consultado 2026-07-22.
