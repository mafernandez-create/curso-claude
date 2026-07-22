---
titulo: "Diligencia: uso responsable y ético"
modulo: "02-ai-fluency"
orden: 6
creado: 2026-07-22
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Diligencia: uso responsable y ético

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir los **tres ejes** de la diligencia: responsabilidad propia, impacto en terceros y privacidad.
- [ ] Decidir con criterio **cuándo declarar** que has usado IA y cuándo no hace falta.
- [ ] Aplicar una regla operativa para saber **qué no pegar nunca** en un chat.
- [ ] Reconocer la **erosión del criterio** como riesgo a largo plazo, no como cuestión moral.
- [ ] Escribir tu propia **política personal de uso** en media página.

## Prerrequisitos

- Lección 05: [Discernimiento](05-discernimiento.md). Diligencia es lo que haces **después** de haber evaluado; sin evaluación previa, no hay nada que decidir responsablemente.

## Contexto

Las tres primeras dimensiones tratan de que el resultado sea bueno. Esta trata de que **usarlo sea defendible**: ante tu cliente, tu empresa, tu profesión y tú mismo dentro de dos años.

Es la menos visible de las cuatro, y por eso la que más se descuida. Nadie te felicita por no haber pegado datos de un cliente en un chat. Pero es la única cuyos fallos no se corrigen en la siguiente iteración: un dato filtrado no se recupera, y una firma puesta sobre algo que no puedes defender no se retira.

## Contenido principal

### 1. Los tres ejes

**Responsabilidad propia.** Firmas, luego respondes. Si el informe lleva tu nombre, "lo redactó Claude" no es una explicación que nadie acepte. La pregunta operativa: *¿puedo defender cada afirmación de esto si alguien me pregunta por ella?* Si la respuesta es no, o verificas más o bajas el nivel de delegación (lección 03).

**Impacto en terceros.** Lo que produces llega a alguien: quien recibe el correo, quien lee el informe, quien estudia con tu material. Sus intereses no están en la conversación con el modelo, así que tienes que ponerlos tú.

**Privacidad y seguridad.** Lo que escribes en el prompt sale de tu equipo. Aunque tus conversaciones no entrenen al modelo —depende del plan y de las condiciones vigentes—, viajan y se almacenan en algún sitio. Esa es la parte que hay que decidir antes de pulsar enviar, no después.

### 2. Cuándo declarar que has usado IA

La pregunta que más incomoda, y que se responde mejor con un criterio que caso por caso. La clave no es *cuánta* IA usaste, sino **qué esperaba de ti quien lo recibe**.

**No hace falta declararlo** cuando la IA fue herramienta y tú aportaste el criterio: un borrador que reescribiste y verificas, ayuda para estructurar, corrección de estilo. Nadie declara el corrector ortográfico ni la calculadora.

**Sí conviene declararlo** cuando:
- El receptor te pidió **tu** trabajo o **tu** juicio, y una parte sustancial no lo es.
- El valor de lo que entregas está en que sea humano (una carta personal, una valoración profesional).
- Hay una norma que lo exige: académica, del cliente, del sector o de tu empresa.
- El receptor tomaría una decisión distinta si lo supiera. **Este es el criterio decisivo**: si ocultarlo cambia lo que la otra persona haría, ocultarlo es engañar.

**Zona gris real:** contenido publicado bajo tu firma. Ahí manda la norma de tu sector y la expectativa de tu audiencia; si no hay norma, aplica el último criterio.

### 3. Qué no pegar nunca

Una regla que funciona sin tener que consultar la política de la empresa cada vez:

> Si no lo escribirías en un correo a alguien de fuera de tu organización, no lo pegues en un chat.

Aplicado, la lista corta de lo que se queda fuera:

- **Credenciales de cualquier tipo**: claves de API, contraseñas, tokens. Nunca, en ningún plan.
- **Datos personales de terceros** que no necesitas para la tarea: nombres, teléfonos, direcciones, historiales. Si necesitas el texto pero no los datos, **anonimiza antes de pegar**.
- **Información confidencial de clientes o de tu empresa**: precios negociados, condiciones contractuales, información sujeta a acuerdo de confidencialidad.
- **Datos de categorías especiales**: salud, ideología, situación económica. Aquí no basta con "tener cuidado"; hay normativa.

Y una comprobación previa que evita casi todos los problemas: **¿necesita el modelo este dato para hacer la tarea?** Muchísimas veces la respuesta es no. Un contrato se puede revisar con los nombres sustituidos por "PARTE A" y "PARTE B" sin perder nada.

Si trabajas con datos personales en la UE, el marco es el **RGPD** y, en España, la **LOPDGDD**. Esto es orientación, no asesoría jurídica: para tratamientos serios, consulta las condiciones de tu plan y, si hay dudas, con quien lleve protección de datos.

### 4. La erosión del criterio

Este riesgo no es ético sino profesional, y opera despacio.

Si durante meses todo lo que produces pasa por un modelo sin que tu juicio intervenga de forma sustancial, ocurren dos cosas a la vez. La primera es que dejas de practicar: la capacidad de redactar, estructurar o analizar se atrofia como cualquier otra. La segunda es más incómoda: **tu aportación converge con la de cualquiera que tenga la misma suscripción**. Si tu valor era el criterio y lo has delegado, no queda diferencial.

No es un argumento para no usar IA. Es un argumento para **saber qué estás delegando**. Hay tareas donde perder la práctica da igual (formatear una tabla) y otras donde es tu oficio (juzgar si una propuesta se sostiene). Delega las primeras sin remordimiento y protege las segundas.

Una señal de alarma útil: si te cuesta explicar **por qué** tu entregable dice lo que dice, no lo has hecho tú aunque lleve tu nombre.

### 5. Diligencia en el tiempo, no solo en el momento

Tres hábitos que separan el uso profesional del uso improvisado:

- **Dejar rastro.** Para trabajo que va a durar, anota qué se generó con IA y qué se verificó contra qué. Dentro de seis meses, cuando alguien pregunte de dónde sale un dato, lo agradecerás.
- **Revisar tus condiciones.** Los planes y sus políticas de datos cambian. Lo que era cierto sobre tu plan hace un año puede no serlo hoy: compruébalo en la fuente oficial, no en tu recuerdo ni en este curso.
- **Revisar tu propio patrón.** Cada cierto tiempo: ¿estoy delegando más que hace tres meses? ¿en qué? ¿sigo verificando lo que decía que iba a verificar?

## Ejemplo aplicado

Te piden un informe de valoración para un cliente. Contiene datos que te ha pasado él, tu análisis y una recomendación.

**Privacidad, antes de empezar.** Los datos del cliente llevan nombres de sus proveedores y precios negociados. No los necesito para que el modelo me ayude a estructurar el análisis: sustituyo por "PROVEEDOR A/B/C" y uso rangos en vez de importes exactos. El análisis funciona igual.

**Responsabilidad, durante.** El modelo redacta la sección descriptiva y me propone una estructura para las conclusiones. La recomendación final la escribo yo: es exactamente lo que el cliente me está pagando y lo que tendré que defender en una reunión.

**Verificación antes de firmar.** Cada cifra del informe la contrasto con la fuente original del cliente, no con lo que el modelo reprodujo. Encuentro un porcentaje mal trasladado.

**Declaración.** ¿Le digo al cliente que he usado IA? Apliquemos el criterio: ¿tomaría una decisión distinta si lo supiera? Lo que compró fue mi criterio profesional, y el criterio es mío —la recomendación la firmo yo y la puedo defender entera—. La IA hizo de procesador de textos avanzado. No lo declaro; y si me preguntara, lo diría sin problema, que es la señal de que la decisión es correcta.

**Rastro.** En mis notas del proyecto: qué secciones se redactaron con asistencia, contra qué se verificaron las cifras y en qué fecha.

## Ejercicio práctico

1. Escribe tu **política personal de uso de IA** en media página. Tres apartados:
   - **Nunca pego:** tu lista concreta, con los datos que manejas de verdad.
   - **Declaro cuando:** tus criterios, aplicados a los tipos de entregable que produces.
   - **No firmo sin haber verificado:** qué compruebas siempre antes de poner tu nombre.
2. Contrástala con lo que **realmente hiciste** la última semana.
3. Donde haya discrepancia, decide: ¿cambio la práctica o la política era irreal?

**Criterio de éxito:** tu política menciona datos y entregables concretos de tu trabajo. Si sirve igual para cualquier persona de cualquier sector, es una declaración de intenciones, no una política. Y si tras contrastarla no encuentras ni una discrepancia, sospecha: casi nadie cumple su propia política al cien por cien a la primera.

## Errores comunes

- **"Como no entrena con mis datos, puedo pegar lo que sea."** Son cosas distintas: que no se use para entrenar no significa que no se transmita ni se almacene. Y la promesa depende del plan concreto.
- **"Lo he revisado por encima, ya está."** Revisar por encima detecta errores de forma. Los caros son de fondo (lección 05).
- **Declarar de más por si acaso.** Poner "generado con IA" en todo diluye el aviso justo donde importa, y sugiere que no has aportado criterio ni donde sí lo hiciste.
- **Declarar de menos porque nadie pregunta.** Que no te lo pregunten no significa que no lo esperen. El criterio es qué haría el receptor si lo supiera.
- **Confundir diligencia con miedo.** No consiste en usar menos IA, sino en poder explicar y defender el uso que haces.
- **Tratar la política de datos como algo que se mira una vez.** Cambia. Revísala.

## Resumen en 3 frases

1. La diligencia cubre tres ejes: lo que **firmas** (poder defender cada afirmación), a quién **afecta** y qué **datos** dejas salir de tu equipo.
2. El criterio para declarar el uso de IA no es cuánta usaste, sino si **quien lo recibe decidiría distinto sabiéndolo**; y la regla para los datos es no pegar nada que no escribirías a alguien de fuera de tu organización.
3. El riesgo a largo plazo no es ético sino profesional: si delegas el criterio que constituye tu oficio, **tu aportación converge con la de cualquiera con la misma suscripción**.

## Recursos para profundizar

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — la sección de Diligence.
- [Anthropic — Usage Policies](https://www.anthropic.com/legal/aup) — qué usos están permitidos y cuáles no.
- [Módulo 13, lección 12](../13-seguridad-etica/12-obligaciones-eticas-usuario.md) — el tratamiento extenso de las obligaciones del usuario.
- [Módulo 13, lección 06](../13-seguridad-etica/06-misuse-privacidad-desinformacion.md) — privacidad y desinformación con más detalle.

## Siguiente lección

➡️ `07-errores-tipicos-interaccion.md` — Errores típicos de interacción y cómo detectarlos.

## Fuentes

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — consultado 2026-07-22.
- [Anthropic — Usage Policies](https://www.anthropic.com/legal/aup) — consultado 2026-07-22.
