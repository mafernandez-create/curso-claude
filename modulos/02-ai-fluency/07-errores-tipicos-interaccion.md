---
titulo: "Errores típicos de interacción y cómo detectarlos"
modulo: "02-ai-fluency"
orden: 7
creado: 2026-07-22
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Errores típicos de interacción y cómo detectarlos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Reconocer los **seis patrones de interacción** que más rendimiento destruyen.
- [ ] Diagnosticar cuál te está pasando **mientras ocurre**, no al terminar.
- [ ] Aplicar la corrección concreta de cada uno.
- [ ] Entender por qué **insistir** suele empeorar la conversación en lugar de arreglarla.

## Prerrequisitos

- Lecciones 03 a 06 del módulo: las cuatro dimensiones. Esta lección es el reverso práctico — qué aspecto tiene cada fallo en una conversación real.

## Contexto

Las lecciones anteriores describen las cuatro dimensiones en positivo. Esta las mira desde el otro lado: los patrones concretos que aparecen en una conversación cuando algo va mal.

Son patrones **de interacción**, no de prompt. La diferencia importa: un mal prompt se corrige reescribiéndolo, pero estos fallos se acumulan a lo largo de la conversación y no se arreglan escribiendo mejor el siguiente mensaje. A menudo la corrección es **empezar de nuevo**.

## Contenido principal

### 1. La espiral de reformulación

**Qué parece:** pides algo, no te convence, reformulas, sigue sin convencerte, reformulas otra vez. Cinco intentos después estás peor que al principio y llevas veinte minutos.

**Qué pasa en realidad:** cada intento fallido se queda en el contexto. El modelo ve tus cuatro versiones anteriores y las respuestas que rechazaste, y tiende a producir variaciones sobre lo mismo. La conversación se ha encajonado.

**Corrección:** cuando lleves **dos** intentos fallidos, para. Conversación nueva, y en el primer mensaje incluye lo que aprendiste de los fallos ("necesito X, y específicamente **no** quiero Y ni Z"). Casi siempre sale a la primera.

**Señal temprana:** te descubres cambiando adjetivos ("más conciso", "más directo", "más natural") en vez de cambiar la instrucción.

### 2. El contexto que se da por supuesto

**Qué parece:** la respuesta es correcta en abstracto pero no sirve para tu caso. Genérica, como sacada de un manual.

**Qué pasa:** el modelo no conoce tu empresa, tu sector, tu cliente, tu restricción ni la conversación que tuviste ayer. Tú tienes todo eso tan presente que no lo escribes.

**Corrección:** antes de pedir, pregúntate qué sabe alguien que acaba de entrar en tu despacho. Todo lo demás hay que ponerlo. El contexto que más rinde: para qué es, quién lo va a leer, qué restricciones hay y qué se ha descartado ya.

**Señal temprana:** la respuesta serviría igual para un competidor tuyo.

### 3. La complacencia

**Qué parece:** estás de acuerdo con el modelo en todo. Cada respuesta confirma lo que pensabas. Sales de la conversación más seguro de tu idea que al entrar.

**Qué pasa:** si has planteado la pregunta con tu conclusión dentro ("¿por qué X es mejor que Y?"), has pedido argumentos a favor, no un análisis. Y los tendrás, bien escritos.

**Corrección:** haz la pregunta simétrica. En vez de "¿por qué X es mejor?", pregunta "compara X e Y" o, mejor, "dame los tres argumentos más fuertes **contra** X". Si vas a decidir algo con esto, pide explícitamente el caso contrario.

**Señal temprana:** llevas media conversación asintiendo. Es el momento de sospechar, no de celebrar.

### 4. El pozo del contexto largo

**Qué parece:** una conversación larga que iba bien empieza a degradarse. El modelo olvida una restricción que diste al principio, se contradice o repite algo ya resuelto.

**Qué pasa:** en contextos muy largos, la información del medio se aprovecha peor que la del principio y la del final. Tu restricción del mensaje número tres está enterrada.

**Corrección:** en conversaciones largas, **repite lo esencial** cuando cambies de fase ("recuerda: máximo 200 palabras y sin mencionar precios"). Y cuando la conversación haya cumplido su propósito, ciérrala y abre una nueva con un resumen del estado, en vez de arrastrar el historial entero.

**Señal temprana:** tienes que corregir dos veces la misma cosa.

### 5. La delegación por inercia

**Qué parece:** abres el chat para todo por costumbre. Incluidas cosas que harías más rápido a mano.

**Qué pasa:** el coste de escribir un buen prompt, leer, evaluar y corregir supera al de hacer la tarea. Pero como el trabajo se siente distinto —más ligero, más entretenido— no lo percibes como pérdida de tiempo.

**Corrección:** la heurística de la lección 03. Si la tarea te lleva menos de lo que tardarías en explicarla, hazla. La opción "sin IA" sigue existiendo.

**Señal temprana:** acabas la jornada con sensación de haber trabajado mucho y poco hecho.

### 6. La aceptación silenciosa

**Qué parece:** nada. Ese es el problema. La respuesta llega bien escrita, la copias, la pegas y sigues.

**Qué pasa:** es el fallo de discernimiento en estado puro, y el único de esta lista que **no da ninguna señal mientras ocurre**. Se manifiesta después, cuando alguien detecta el error en lo que enviaste.

**Corrección:** un gesto fijo antes de usar cualquier salida en algo que sale de tu equipo — subrayar cifras y nombres, leer la conclusión en alto. Que sea un hábito, no una decisión que tomas cada vez, porque la decisión se salta justo cuando hay prisa.

**Señal temprana:** no la hay. Por eso tiene que ser un procedimiento.

### 7. Tabla de diagnóstico rápido

| Lo que notas | Patrón | Dimensión | Qué haces ahora |
|---|---|---|---|
| Llevo 4 intentos y voy a peor | Espiral de reformulación | Descripción | Conversación nueva con los "no quiero" |
| Correcto pero no me sirve | Contexto supuesto | Descripción | Añade destinatario, propósito y restricciones |
| Estoy de acuerdo en todo | Complacencia | Discernimiento | Pide el caso contrario |
| Olvida lo que dije antes | Pozo de contexto largo | Descripción | Repite lo esencial o abre conversación nueva |
| Trabajo mucho, avanzo poco | Delegación por inercia | Delegación | Vuelve a la heurística del coste |
| Me detectaron un error | Aceptación silenciosa | Discernimiento | Instaura un gesto fijo de verificación |

## Ejemplo aplicado

Necesitas una descripción de producto para catálogo. Pides una, sale genérica. Pides "más comercial", sale peor. Pides "más técnica pero comercial", sale confusa. Cuarto intento: "como la segunda pero sin tanto adjetivo".

**Diagnóstico:** espiral de reformulación (patrón 1) sobre un problema de contexto supuesto (patrón 2). Llevas cuatro intentos ajustando el tono cuando el problema es que el modelo no sabe qué producto es, para quién, ni frente a qué alternativa se vende.

**Corrección.** Conversación nueva:

```
Descripción de producto para catálogo B2B de material de construcción.

Producto: [ficha técnica pegada]
Lector: jefe de compras de una distribuidora, conoce el sector,
compara por precio y plazo de servicio.
Compite contra: [alternativa], que es más barata pero con peor plazo.
Extensión: 80-100 palabras.
No quiero: adjetivos vacíos ("innovador", "líder"), ni promesas
de rendimiento que no estén en la ficha.
```

Sale utilizable a la primera. Lo que sobraba no era precisión en el tono: era información.

## Ejercicio práctico

1. Revisa tus **tres últimas conversaciones largas** con Claude (o cualquier LLM).
2. Identifica en cada una si aparece alguno de los seis patrones. Anota en qué mensaje empezó.
3. Para el patrón que más te repita, escribe **la corrección concreta** que aplicarás la próxima vez.
4. Ponla en práctica en tu siguiente conversación real y compara.

**Criterio de éxito:** identificas **tu** patrón dominante — el que te sale por defecto — y no solo "todos un poco". Si las tres conversaciones fueron impecables, mira conversaciones donde el resultado no te gustó, no las que recuerdas con buen sabor.

## Errores comunes

- **Insistir en vez de reiniciar.** Es lo más contraintuitivo de esta lección: cuando una conversación se tuerce, seguir escribiendo la hunde más. El historial fallido pesa.
- **Tratar todo como problema de prompt.** Algunos de estos patrones son de delegación (no había que pedirlo) o de discernimiento (no había que aceptarlo). Reescribir el prompt no los toca.
- **Diagnosticar solo al final.** El valor está en detectarlo **durante**. Al terminar ya has pagado el tiempo.
- **Creer que la complacencia es señal de buen prompt.** Que te dé la razón con elegancia no valida tu idea; a menudo significa que la pregunta ya la contenía.

## Resumen en 3 frases

1. Los seis patrones que más rendimiento destruyen son de **interacción**, no de prompt: se acumulan a lo largo de la conversación y no se arreglan escribiendo mejor el siguiente mensaje.
2. Cinco dan señal temprana —insistencia, respuestas genéricas, acuerdo total, olvidos, sensación de no avanzar— y conviene aprender a leerlas **en directo**; la sexta, la aceptación silenciosa, no avisa y por eso exige un procedimiento fijo.
3. Ante una conversación torcida, la corrección más eficaz casi nunca es insistir: es **empezar de nuevo** llevándote lo aprendido, incluido lo que **no** quieres.

## Recursos para profundizar

- [Módulo 05, lección 12](../05-prompt-engineering/12-antipatrones.md) — antipatrones al nivel del prompt (complementa esta lección, que va al nivel de la conversación).
- [Módulo 05, lección 13](../05-prompt-engineering/13-debugging-respuestas.md) — depurar respuestas que no salen como esperas.
- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — el framework que estos patrones ponen a prueba.

## Siguiente lección

➡️ `08-casos-aplicados.md` — Casos aplicados: trabajo, estudio, creatividad.

## Fuentes

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — consultado 2026-07-22.
- [docs.claude.com — prompt engineering y contextos largos](https://docs.claude.com/) — consultado 2026-07-22.
