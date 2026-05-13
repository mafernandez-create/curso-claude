---
titulo: "El framework de las 4 dimensiones (Anthropic)"
modulo: "02-ai-fluency"
orden: 2
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 30
---

# El framework de las 4 dimensiones (Anthropic)

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Nombrar las **4 dimensiones** del framework de AI Fluency y describir cada una en una frase.
- [ ] Explicar por qué las cuatro son **necesarias y complementarias**, no sustitutivas.
- [ ] Diagnosticar en una interacción concreta **qué dimensión está fallando**.
- [ ] Mapear el resto del módulo (lecciones 03–06) sobre el framework.

## Prerrequisitos

- Lección 01: [Qué es alfabetización IA](01-que-es-alfabetizacion-ia.md). Sin esa lección, las 4D suenan a checklist; con ella, son lo que organiza la fluencia.

## Contexto

Hay decenas de "frameworks de prompting" circulando: marcos de letras (RTF, CO-STAR, RICE…), listas de buenas prácticas, hojas de trucos. La mayoría son útiles para tareas concretas pero **dejan fuera la mitad del trabajo**: lo que pasa **antes** de pedir (decidir si pedir) y **después** de recibir (evaluar y actuar).

El framework de Anthropic —las **4 D**— intenta cubrir el ciclo completo. No te enseña prompts virales, sino las cuatro competencias que tienes que cultivar para usar IA con criterio en cualquier contexto.

## Contenido principal

### 1. Las 4D, en una frase cada una

| Dimensión | Pregunta clave | Lección dedicada |
|-----------|----------------|------------------|
| **Delegación** | ¿Esta tarea tiene sentido para una IA, y con qué autonomía? | 03 |
| **Descripción** | ¿Cómo se lo pido para que entienda lo que necesito? | 04 |
| **Discernimiento** | ¿La respuesta es buena, o solo lo parece? | 05 |
| **Diligencia** | ¿Qué hago con la respuesta de forma responsable? | 06 |

Las cuatro forman un ciclo. Antes-durante-después-consecuencias. Saltarse una rompe el conjunto.

### 2. Delegación: la pregunta que se salta todo el mundo

Antes de escribir un solo prompt, hay una decisión que muchos no se hacen: **¿debería hacer esto con IA?** Y si la respuesta es sí, **¿con qué nivel de autonomía?**

Decisiones típicas de delegación:
- **Hacerlo yo solo** (la IA aporta menos que el coste de prompting).
- **Hacerlo yo con IA como apoyo** (borradores, brainstorming, revisión).
- **Que la IA lo haga y yo lo revise** (delegación con verificación).
- **Que la IA lo haga sin mi revisión** (poco frecuente y peligroso, salvo en cosas muy reversibles).

Errores típicos al fallar en delegación:
- Pedirle a Claude que haga algo que tú haces más rápido a mano.
- Delegar decisiones que requieren juicio profesional sin verificar.
- No decidir nivel de autonomía: empiezas con verificación y acabas confiando ciegamente.

### 3. Descripción: el arte del prompt

Aquí cae lo que la mayoría llama "prompt engineering". Pero en este framework no es un fin en sí mismo: es **una de las cuatro patas**. Sin las otras tres, escribir prompts perfectos no te hace fluente.

Componentes de una buena descripción:
- **Contexto**: quién eres, para qué quieres la respuesta, a qué público va dirigida.
- **Tarea explícita**: qué quieres exactamente.
- **Restricciones**: longitud, tono, formato, cosas a evitar.
- **Ejemplos** (cuando ayudan): few-shot.
- **Cláusula de incertidumbre**: "si no estás seguro, dilo / pregúntame".

Errores típicos al fallar en descripción:
- Prompts genéricos ("escríbeme algo sobre X").
- Asumir que el modelo conoce tu contexto privado.
- No especificar formato y luego protestar por el formato recibido.
- Sobrecargar el prompt con instrucciones contradictorias.

### 4. Discernimiento: leer la respuesta con criterio

La respuesta llega. ¿Y ahora qué? Mucha gente la copia, la pega y se va. Pero la IA puede equivocarse de tres formas que hay que saber detectar:

- **Errores factuales.** Datos falsos, citas inventadas, atribuciones erróneas (lección 08 del módulo 01).
- **Errores de razonamiento.** El argumento parece coherente pero el paso N → N+1 no se sostiene.
- **Sesgos.** Asunciones implícitas (de género, de cultura, de viewpoint) que no detectarías sin mirar específicamente.

Discernimiento no es "ser desconfiado por defecto". Es saber **dónde es probable que se equivoque** y mirar ahí.

Errores típicos al fallar en discernimiento:
- Aceptar respuestas plausibles sin verificarlas.
- O rechazar respuestas correctas porque "no me convencen".
- No distinguir entre contenido factual (verificable) y opiniones (cuestionables pero no falsas).
- Confundir confianza del modelo con calidad de la respuesta.

### 5. Diligencia: actuar con responsabilidad

La cuarta dimensión es la menos visible y la más importante a largo plazo. Cubre tres ejes:

- **Responsabilidad personal.** ¿Qué debes verificar antes de actuar? ¿Qué partes del output puedes firmar como tuyas? ¿Citarías "lo dijo Claude" si te preguntaran?
- **Impacto en terceros.** Lo que generas afecta a otros: receptores de tu email, lectores de tu informe, alumnos a los que enseñas. ¿Lo entenderían como humano o como output de IA? ¿Importa?
- **Privacidad y seguridad.** ¿Estás pegando datos sensibles que no deberías? ¿Cumplen tus prompts con políticas de tu empresa o sector?

Errores típicos al fallar en diligencia:
- Pegar datos confidenciales en el chat sin pensar.
- Firmar como propio contenido sustancialmente generado por IA.
- No advertir a tu audiencia cuando lo apropiado es decirlo.
- Ignorar regulaciones de tu sector (sanitario, jurídico, financiero).

### 6. ¿Por qué cuatro y no tres o cinco?

Es legítimo preguntar si el corte en cuatro es arbitrario. La respuesta de Anthropic, parafraseada: las cuatro cubren el **ciclo completo de interacción** sin solapamiento serio.

- Delegación → decisión **previa** (¿lo hago con IA?).
- Descripción → entrada (qué le digo).
- Discernimiento → salida (qué hago con lo que recibo).
- Diligencia → consecuencias (qué hago con lo que decido usar).

Si juntas Descripción y Discernimiento te queda solo "prompts". Si separas Diligencia en privacidad/ética/legal acabas con un checklist enorme. Cuatro funciona como compromiso entre granularidad y memorabilidad.

### 7. Diagnóstico: ¿qué dimensión está fallando?

Una habilidad útil: ante una interacción que ha ido mal, identificar **qué dimensión** falló. No suele ser una sola, pero hay una dominante.

| Síntoma | Dimensión más probable |
|---------|------------------------|
| "Hago todo con Claude y me cunde menos que antes." | Delegación |
| "Las respuestas son genéricas, sin gancho." | Descripción |
| "El cliente detectó tres errores en lo que envié." | Discernimiento |
| "Mi jefe me ha llamado por usar Claude con datos del cliente." | Diligencia |
| "Vuelvo a recibir lo mismo aunque cambie el prompt." | Descripción + Discernimiento |
| "Acabo invirtiendo más tiempo del que ahorro." | Delegación |

Aprender a hacer este diagnóstico **mientras** ocurre la interacción, no a posteriori, es la marca del usuario fluente.

### 8. Cómo encaja con otros frameworks que ya conoces

Si vienes de leer guías de prompting con acrónimos (RTF, CO-STAR, RACE, etc.), el framework 4D **no compite**: lo absorbe. Casi todo lo que esos acrónimos cubren va dentro de **Descripción**. El framework 4D añade lo que les falta: las decisiones de antes y después.

No tienes que elegir uno. En la práctica:
- Para "qué pedir y cómo" → un acrónimo de prompting que te funcione.
- Para "cuándo, cómo evaluar, qué hacer con ello" → las 4D.

## Ejemplo aplicado

Caso real, paso a paso por las 4D.

> **Tarea:** preparar un email a un proveedor cuestionando una factura inflada.

**Delegación.** ¿Tiene sentido pedirle a Claude un primer borrador? Sí: hay un texto a redactar con tono cuidado, datos concretos a integrar, estilo formal. Es justo donde Claude aporta valor. Decisión: **delegar el borrador, yo reviso y firmo**.

**Descripción.** Le doy: contexto (mi rol, relación con el proveedor, historial), datos concretos (número de factura, importe disputado, justificación), tono (firme pero no hostil), formato (email entre 200 y 250 palabras), restricciones (no amenazar acción legal aún), cláusula (pregúntame si te falta algo).

**Discernimiento.** Recibo el borrador. Lo leo en alto. Detecto que cita una fecha incorrecta (alucinación menor: confundió mes), tono ligeramente más blando del que pedí (ajusto tres frases), y un párrafo redundante (lo elimino).

**Diligencia.** Antes de enviar: verifico cifras con la factura real (no las del modelo). Cambio la cabecera para que mi cliente de email no marque como spam por el patrón. Decido **no** decir explícitamente al proveedor que el borrador es de IA: es un tipo de uso —corregir y firmar— donde la autoría sigue siendo mía.

Las cuatro dimensiones, en menos de 10 minutos. La diferencia con "abrir Claude y pedir email" es enorme: el resultado es mejor y el proceso, defendible.

## Ejercicio práctico

1. Coge **una interacción reciente** con Claude (o cualquier LLM) en la que el resultado fue **insatisfactorio** (te quedó mal, te llevó más tiempo del esperado, tuviste que repetir mucho).
2. Aplica el diagnóstico: ¿qué **dimensión dominante** falló?
3. Reformúlate la interacción: ¿qué harías distinto en cada D si la repitieras hoy?
4. Si puedes, repítela ahora con tu nueva versión y compara resultados.

**Criterio de éxito:** terminas con (a) un diagnóstico claro de la dimensión que falló y (b) una versión revisada de tu interacción. Si tu único cambio fue "haber escrito mejor el prompt", probablemente has identificado solo Descripción y has pasado de largo por las otras tres.

## Errores comunes

- **Quedarse solo con Descripción.** Es la más visible y la que tiene literatura más extensa, pero por sí sola no genera fluencia. Las otras tres son igual de importantes.
- **Pensar que el ciclo es lineal.** Las 4D se solapan en el tiempo: en una conversación larga, vas iterando entre Descripción y Discernimiento varias veces. Diligencia se aplica al final pero también durante (lo que decides pegar al modelo es decisión de diligencia).
- **Memorizar las 4D como checklist.** El framework es una **plantilla mental**, no un proceso burocrático. La fluencia se nota cuando aplicas las 4D sin pensarlo, igual que conduces sin pensar en cambiar de marcha.
- **Confundir delegación con automatización total.** Delegar no es "que la IA lo haga sin más". Hay un espectro de niveles de autonomía; verás los grados en la lección 03.

## Resumen en 3 frases

1. El framework de **AI Fluency** organiza la alfabetización IA en **cuatro dimensiones**: Delegación (cuándo), Descripción (cómo pedir), Discernimiento (cómo evaluar) y Diligencia (cómo actuar responsablemente).
2. Las cuatro son **complementarias**: una sola hipertrofiada (típicamente Descripción) no sustituye a las otras tres.
3. La señal de fluencia no es "saber las 4D" sino **diagnosticar en directo cuál estás fallando** y corregirlo en la siguiente iteración.

## Recursos para profundizar

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — el curso oficial donde se presenta el framework con sus propios ejemplos.
- [Anthropic — Build with Claude / Best practices](https://docs.claude.com/en/docs/build-with-claude/overview) — recoge muchas de las prácticas de Descripción.

## Siguiente lección

➡️ `03-delegacion.md` — Delegación con criterio: qué tareas tienen sentido.

## Fuentes

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — consultado 2026-05-09.
- [docs.claude.com — Build with Claude](https://docs.claude.com/) — consultado 2026-05-09.
