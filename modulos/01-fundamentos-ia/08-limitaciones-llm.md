---
titulo: "Limitaciones fundamentales: alucinaciones, cutoff y sesgo"
modulo: "01-fundamentos-ia"
orden: 8
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 30
---

# Limitaciones fundamentales: alucinaciones, cutoff y sesgo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar las **tres limitaciones canónicas** de un LLM (alucinación, cutoff, sesgo) y por qué son **estructurales**, no defectos puntuales.
- [ ] Reconocer **señales** de cada una en una respuesta concreta de Claude.
- [ ] Aplicar **mitigaciones** concretas (tools, RAG, web search, contexto explícito) para cada limitación.
- [ ] Listar al menos **cuatro limitaciones secundarias** importantes (contexto, aritmética, *long tail*, no-determinismo).
- [ ] Decidir qué tareas **no** delegar nunca a un LLM sin verificación humana.

## Prerrequisitos

- Lecciones 01–04 del módulo. Esta lección apoya su explicación en cómo se entrena un LLM (predicción de siguiente token + RLHF + CAI).

## Contexto

Si las lecciones anteriores explicaban qué hace bien un LLM, esta es la contraparte necesaria: qué **no** puede hacer, y por qué. Saber sus límites es lo que separa al usuario que se beneficia de Claude del que se hace daño confiando ciegamente.

Las tres limitaciones canónicas —alucinación, cutoff y sesgo— no son fallos puntuales que se vayan a resolver en la próxima versión. Son **propiedades estructurales** de cómo funciona un modelo de lenguaje. Convivir con ellas es parte del oficio.

## Contenido principal

### 1. Alucinaciones: texto plausible sin anclaje en la realidad

**Qué es.** Un LLM puede producir afirmaciones **falsas pero perfectamente plausibles**: una cita inventada con autor, año y editorial; una función de una librería que no existe; una fecha histórica equivocada con detalle ornamental. La confianza con la que las afirma es indistinguible de la de las verdaderas.

**Por qué pasa.** La predicción del siguiente token (lección 01) no tiene un mecanismo interno de verificación de verdad. El modelo aprende qué **secuencias de palabras son típicas** dadas un contexto. Si tu petición se parece estructuralmente a peticiones para las que el corpus tiene respuestas, devolverá algo parecido a esas respuestas. Si tu petición es sobre algo que no estaba en el corpus, devolverá algo que **suena como** debería sonar la respuesta. La diferencia no la nota.

**Ejemplos típicos:**
- Citas bibliográficas inventadas (autor real + título plausible + página inventada).
- Endpoints de API o funciones de librería que no existen.
- Fechas de nacimiento o muerte ligeramente erróneas (a menudo desplazadas un año).
- Atribuciones falsas de frases a personas famosas.
- Datos numéricos inventados con precisión sospechosa.

**Mitigaciones reales:**
- **Tool use / búsqueda web.** Conectar Claude a una herramienta que busque en internet o en tu base documental reduce drásticamente las alucinaciones sobre hechos verificables.
- **RAG (Retrieval Augmented Generation).** Le pasas en el prompt los documentos relevantes y le pides que **cite literalmente** o que diga "no lo sé" si no está. Lo verás en el módulo 11.
- **Pedir fuentes.** Decir "indica la fuente exacta y, si no la tienes, di 'no consta'" reduce (no elimina) las invenciones. Aún así verifica.
- **Modelos más grandes.** Opus alucina menos que Haiku en tareas factuales. No las elimina.
- **Verificación humana en lo crítico.** Para citas, código que ejecutarás en producción, datos financieros: nunca pegar y enviar sin revisar.

**Lo que NO funciona:**
- Pedirle "no inventes" en el prompt. Ayuda algo, pero el modelo no tiene una forma fiable de saber si lo está haciendo.
- Aumentar la temperatura a 0. Reduce la variabilidad, no la falsedad.
- Confiar en su propia "confianza". No es un calibrador fiable.

### 2. Cutoff: el modelo no sabe "hoy"

**Qué es.** Cada modelo tiene una **fecha de corte de conocimiento** (*knowledge cutoff*): la fecha hasta la que se recogieron datos de entrenamiento. Después de esa fecha, el modelo **no sabe nada** salvo que se lo digas tú o lo busque con una herramienta.

**Por qué pasa.** El preentrenamiento (lección 03) ocurre sobre un dataset estático. Capturar lo que pasa "hoy" requeriría reentrenamiento continuo, algo inviable a la escala de un modelo frontier. Anthropic publica el cutoff de cada modelo (a menudo varios meses anterior al lanzamiento del modelo).

**Cómo se manifiesta:**
- Pregúntale por noticias recientes y o las inventa o admite no saber.
- Pregúntale por versiones recientes de software (p. ej. una librería que sacó update hace 3 semanas) y te dará información del estado anterior.
- Pregúntale qué año es y, si no se lo dices, va a su mejor aproximación basada en su corpus.

**Mitigaciones:**
- **Decirle la fecha actual** en el system prompt o al inicio de la conversación. Resuelve muchos errores temporales sin necesidad de tools. Claude Code lo hace automáticamente.
- **Web search / tool use.** Para preguntas sobre actualidad, conectar una herramienta de búsqueda es la única solución real.
- **RAG con documentos posteriores al cutoff.** Si tu corpus interno es más reciente que el cutoff del modelo, el modelo aprende del corpus, no de su entrenamiento.

**Donde más duele el cutoff:**
- Versiones recientes de bibliotecas de software.
- Noticias y eventos.
- Precios y datos económicos cambiantes.
- Personas y empresas que han cambiado de rol/situación recientemente.

### 3. Sesgo: el espejo del corpus

**Qué es.** Un LLM **hereda los sesgos del corpus** con el que se entrenó: representación desigual de géneros, idiomas, regiones, ideologías, profesiones, fuentes. No es un sesgo "intencional"; es estadística.

**Tipos comunes:**
- **De idioma.** El inglés está sobre-representado. Claude funciona muy bien en español, pero conceptos sin equivalente claro en inglés pueden estar peor cubiertos.
- **Geográfico/cultural.** Conocimiento más profundo sobre EE. UU. y Europa Occidental que sobre, p. ej., África subsahariana o el sudeste asiático.
- **De género/profesional.** Asociaciones implícitas en ejemplos generados (médicos masculinos, enfermeras femeninas) si no se le pide explícitamente lo contrario.
- **De viewpoint.** Tendencia a posiciones "consenso" sobre temas debatidos, lo que puede sentirse neutral en algunos contextos y políticamente sesgado en otros.
- **Temporal.** Más datos de los últimos 10 años que de los anteriores; eventos antiguos cubiertos con menos densidad.

**Mitigaciones parciales:**
- **CAI** (lección 04) se diseñó parcialmente para reducir sesgos dañinos, pero no los elimina. La constitución incluye principios sobre representación equilibrada.
- **Prompts explícitos.** Pedir "considera perspectivas de regiones distintas" o "evita asumir género" funciona en muchos casos.
- **Ejemplos balanceados** en few-shot. Si tú das ejemplos diversos, el modelo tiende a seguir la diversidad.
- **Auditoría externa.** Para usos sensibles (RR. HH., crédito, educación): no fiarse del modelo aislado, evaluar con datasets de fairness.

**Lo que NO funciona:**
- Asumir que pedir "sé imparcial" lo vuelve imparcial. Reduce algunos sesgos manifiestos, no los implícitos.
- Confiar en que un modelo más grande es menos sesgado. A veces sí, a veces refuerza patrones del corpus.

### 4. Limitaciones secundarias importantes

Las tres anteriores son las canónicas, pero hay más que conviene tener en mente:

- **Ventana de contexto.** Aunque las ventanas son enormes (cientos de miles a millones de tokens), no son gratis (lección 02: coste cuadrático con la atención) y la **calidad de uso del contexto** decae con la longitud (efecto "lost in the middle": información del medio del contexto se ignora más que la del principio o el final). Mitigación: estructurar prompts largos, repetir lo importante, usar RAG en vez de pegar todo.
- **Aritmética y cálculo formal.** El modelo "calcula" prediciendo tokens, no operando. Acertará cuentas pequeñas con altísima frecuencia, pero no debes confiar en él para operaciones largas o críticas. Mitigación: tool use con un intérprete (Python, calculadora) o un servicio externo.
- **Long tail.** Conocimiento sobre temas muy específicos o nicho está peor cubierto. Más probable alucinar. Mitigación: asumir que el grado de error crece con la rareza del tema, y verificar.
- **No-determinismo.** Por defecto, dos llamadas idénticas pueden producir respuestas distintas (el muestreo no es determinista). Mitigación: bajar temperatura a 0 (sigue habiendo varianza menor por implementación interna) y, sobre todo, no asumir reproducibilidad estricta.
- **Sensibilidad al fraseo.** Cambiar una palabra del prompt puede cambiar significativamente la respuesta. Es la otra cara del prompt engineering: poderosa cuando la conoces, traicionera cuando la ignoras.
- **Privacidad / fugas de datos.** Aunque tus chats no entrenan al modelo (lección 03), siguen pasando por servidores. **Nunca pegues secretos** (claves API, contraseñas, datos personales sensibles) salvo en planes contractualmente protegidos (Enterprise, ZDR). Para datos sanitarios, jurídicos o financieros, leer primero las condiciones del plan.

### 5. Cómo se combinan en la práctica

Los problemas reales suelen ser combinaciones:

- Le preguntas por la última versión de una librería (toca **cutoff**), te responde con una versión que ya no es la actual (toca **alucinación** porque la inventa con confianza), y la API que recomienda fue renombrada en el último release que él no conoce. Resultado: tu código no compila.
- Le pides un ejemplo de carrera profesional para un personaje (toca **sesgo** implícito), te lo describe como hombre por defecto, y los logros que le atribuye contienen detalles inventados (toca **alucinación**).

Saber identificar el cóctel exacto te permite mitigar al nivel correcto.

### 6. Tareas que NO debes delegar sin verificación

Como regla operativa, **siempre verifica** antes de actuar sobre output de Claude en estos casos:

- **Citas bibliográficas, jurídicas, médicas.** Asumir que cualquiera puede ser inventada.
- **Código que va a producción.** Leer y testear; no copiar y desplegar.
- **Decisiones que afectan a personas** (contratación, crédito, evaluación). Output como insumo, nunca como decisión.
- **Datos financieros, fiscales o legales** específicos.
- **Información de actualidad** sin acceso a herramientas de búsqueda.

Es un mantra simple: **borrador sí, decisión final no**.

## Ejemplo aplicado

Vamos a provocar las tres limitaciones para verlas en vivo.

**Prompt 1 (alucinación):**
```
Dame tres referencias bibliográficas académicas sobre "el impacto del color azul en la productividad de los desarrolladores remotos en empresas latinoamericanas pequeñas". Indica autor, año, revista, título y DOI.
```

Casi seguro Claude te dará tres referencias con aspecto perfectamente verosímil. Casi seguro **todas serán inventadas**. Verifica un par buscándolas en Google Scholar o por DOI: no aparecerán.

**Prompt 2 (cutoff):**
```
¿Cuál es la última versión estable de pandas y cuándo se publicó? ¿Qué cambios incluye respecto a la anterior?
```

Te responderá con la última que conoce. Compara con https://pandas.pydata.org/. La probabilidad de que sea la actual decrece con cada mes que pasa desde su cutoff.

**Prompt 3 (sesgo):**
```
Inventa un perfil profesional para "una persona que dirige un hospital en una capital europea". Da nombre, edad, formación, hobbies y una anécdota memorable de su carrera.
```

Observa: ¿qué género le ha asignado por defecto? ¿qué nacionalidad? ¿qué tipo de estudios? Repite el ejercicio varias veces. Las tendencias revelan sesgos del corpus, no del prompt.

## Ejercicio práctico

1. Para una pregunta concreta de tu trabajo donde **planeabas usar Claude** (por ejemplo: "qué frameworks de testing usa la comunidad de Rust en 2026"), responde a estas cuatro preguntas:
   - ¿Es vulnerable a **alucinación**? (¿hay hechos específicos verificables?)
   - ¿Es vulnerable a **cutoff**? (¿depende de información reciente?)
   - ¿Es vulnerable a **sesgo**? (¿podría haber preferencias implícitas en la respuesta?)
   - ¿Qué pasa si me equivoco al actuar sobre la respuesta? (alta o baja consecuencia)

2. Diseña una **mitigación específica** por cada limitación a la que sea vulnerable. No genéricas: concretas (qué prompt cambias, qué tool añades, qué fuente verificas después).

3. Pregunta al modelo **dos veces** la misma cuestión, con un par de horas de diferencia. Compara las respuestas: ¿son idénticas? Si no, ¿el cambio cambia tu decisión?

**Criterio de éxito:** acabas con un mini-protocolo de uso para esa pregunta concreta. Si tu protocolo es "pegar respuesta y enviar", no has terminado el ejercicio.

## Errores comunes

- **"Si Claude lo dice con seguridad, es verdad."** El nivel de confianza con el que un modelo afirma algo no se correlaciona bien con la veracidad. Esto es cierto para todos los LLMs, no solo Claude.
- **"Bajaré la temperatura a 0 para evitar alucinaciones."** Reduce variabilidad, no falsedad. Una afirmación falsa puede ser perfectamente determinista.
- **"Como el modelo es nuevo, su cutoff es reciente."** Suelen ir varios meses por detrás del lanzamiento. Comprueba siempre la fecha exacta en el model card.
- **"Pedirle que sea imparcial lo hace imparcial."** Reduce sesgos manifiestos, no los implícitos. Y los implícitos son los peligrosos.
- **"Es un problema de Claude, no de mi prompt."** A veces sí, pero más a menudo el prompt no le da contexto, fuentes o restricciones suficientes para minimizar el riesgo. La calidad del prompt cambia mucho la calidad del output.
- **"Estos problemas se resolverán en la próxima versión."** Algunas limitaciones se mitigan generación a generación, pero las tres canónicas son **estructurales**. Tu disciplina de uso es parte de la solución, no se va a desvanecer.

## Resumen en 3 frases

1. Las tres limitaciones canónicas de un LLM —**alucinación** (texto falso plausible), **cutoff** (no sabe nada posterior a su entrenamiento) y **sesgo** (hereda los del corpus)— son propiedades estructurales, no defectos transitorios.
2. Las mitigaciones reales son contextuales: **tool use, RAG, web search, dar la fecha, prompts explícitos, verificación humana** en lo crítico; pedir al modelo "que no se equivoque" no es una mitigación.
3. Hay una regla operativa que vale más que cualquier técnica: **borrador sí, decisión final no**. Para citas, código en producción, decisiones sobre personas y datos sensibles, verifica siempre.

## Recursos para profundizar

- [Anthropic — Reducing hallucinations](https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) — guía oficial con técnicas concretas.
- [Anthropic Research — Sleeper Agents y otros riesgos](https://www.anthropic.com/research) — relevantes para entender hasta dónde llegan las garantías de comportamiento.
- *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024), capítulos sobre evaluación y limitaciones.
- [Lost in the Middle (Liu et al., 2023)](https://arxiv.org/abs/2307.03172) — paper canónico sobre la pérdida de uso de información en contextos largos.

## Siguiente lección

➡️ `09-cuando-no-usar-llm.md` — Cuándo un LLM NO es la herramienta adecuada.

## Fuentes

- [docs.claude.com — Strengthen guardrails](https://docs.claude.com/) — consultado 2026-05-09.
- [Anthropic Research](https://www.anthropic.com/research) — consultado 2026-05-09.
- Liu et al. (2023). *Lost in the Middle: How Language Models Use Long Contexts.* arXiv:2307.03172. Ver `recursos/papers-investigacion.md`.
