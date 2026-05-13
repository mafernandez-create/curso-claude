---
titulo: "Descripción: cómo pedir con precisión"
modulo: "02-ai-fluency"
orden: 4
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 30
---

# Descripción: cómo pedir con precisión

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Identificar los **cinco componentes** que mejoran cualquier prompt: contexto, tarea, restricciones, ejemplos, cláusula de incertidumbre.
- [ ] Reescribir un prompt vago para convertirlo en uno preciso aplicando los componentes anteriores.
- [ ] Reconocer cuándo conviene **iterar el prompt** vs **iterar la conversación**.
- [ ] Aplicar dos **patrones avanzados** útiles: rol explícito y *few-shot*.
- [ ] Distinguir esta lección del módulo 05 (Prompt Engineering avanzado).

## Prerrequisitos

- Lecciones 01–03 del módulo. Especialmente lección 02 (las 4D), donde Descripción se sitúa entre Delegación y Discernimiento.

## Contexto

Esta es la dimensión con más literatura disponible y, paradójicamente, la más malinterpretada. La gente la confunde con "saber escribir prompts mágicos". Pero la Descripción real es algo más simple y más exigente: **comunicarle al modelo, sin ambigüedad, qué necesitas y para qué**.

Esta lección cubre lo esencial. El módulo 05 entrará a fondo en técnicas avanzadas (chain-of-thought, prefill, prompt caching, evaluación sistemática). Aquí construimos la base: los cinco componentes que el 95 % de tus prompts deberían incluir.

## Contenido principal

### 1. Por qué los prompts vagos fallan

Un prompt vago no es solo "demasiado corto". Es un prompt que **deja al modelo demasiado margen de interpretación**. El modelo, al no saber lo que quieres, recurre a la **respuesta más típica** según su corpus para esa familia de peticiones. Resultado: respuesta promedio, genérica, sin tu contexto.

Ejemplo:
```
Hazme un email para mi cliente.
```

El modelo no sabe quién es el cliente, qué relación tienes, qué quieres conseguir, en qué tono, qué longitud, en qué idioma con seguridad, ni si hay datos concretos a incluir. Lo que recibes es la "respuesta más típica" a "haz un email a un cliente": neutro, formal, sin gancho.

Lo mismo con cinco frases más vale más que diez prompts iterando sobre uno vago.

### 2. Los cinco componentes esenciales

Casi cualquier prompt mejora si incluye estos cinco bloques:

#### a) Contexto

Quién eres, para qué quieres la respuesta, a quién va dirigida, qué entorno relevante hay.

> "Soy abogado de derecho mercantil en una firma mediana. Necesito explicar a un cliente no jurista qué implica la cláusula que le acabo de mandar."

#### b) Tarea explícita

Qué quieres exactamente. Verbo claro al principio.

> "Reescribe la cláusula en lenguaje natural que un empresario sin formación jurídica entendería."

#### c) Restricciones

Longitud, tono, formato, lo que debes evitar, requisitos no negociables.

> "Máximo 200 palabras. Tono profesional pero cercano. Sin tecnicismos sin explicar. Sin emojis."

#### d) Ejemplos (cuando ayudan)

Si la tarea tiene un formato específico o un estilo que quieres reproducir, **darle un ejemplo** vale más que diez instrucciones.

> "Aquí va un ejemplo del tipo de explicación que sí me sirve: [pega ejemplo]."

Esto es **few-shot** en miniatura: lección clave del módulo 05.

#### e) Cláusula de incertidumbre

Decirle al modelo qué hacer si no está seguro. Reduce alucinaciones.

> "Si necesitas algún dato del cliente o del contrato que no te he dado, pregúntame antes de redactar. No te inventes nada que no figure en lo que te he pasado."

### 3. Antes y después

Mismo problema, dos prompts.

**Antes (vago):**
```
Explícame esta cláusula a un cliente.
```

**Después (descripción precisa):**
```
Soy abogado de derecho mercantil en una firma mediana. Necesito explicar
a un cliente no jurista qué implica la siguiente cláusula que le acabo
de mandar:

[texto de la cláusula]

Tu tarea: reescribirla en lenguaje natural que un empresario sin formación
jurídica entendería. Máximo 200 palabras. Tono profesional pero cercano.
Sin tecnicismos sin explicar. Sin emojis.

Aquí va un ejemplo del tipo de explicación que sí me sirve, sobre otra
cláusula distinta:
"En esencia, esta cláusula dice que [...]. Para ti, esto significa [...].
El riesgo concreto que asumes es [...]."

Si necesitas algún dato del cliente o del contrato que no te he dado,
pregúntame antes de redactar. No te inventes nada que no figure aquí.
```

Diferencia esperable: la segunda versión te da una respuesta **utilizable casi tal cual**. La primera, una respuesta **genérica que tienes que reescribir**.

### 4. Iterar el prompt vs iterar la conversación

Una confusión común. Cuando una respuesta no te convence, hay dos caminos:

- **Iterar el prompt**: empiezas una nueva conversación con un prompt mejor. Útil cuando el problema era de descripción mal hecha.
- **Iterar la conversación**: sigues en el mismo chat y refinas con turnos adicionales ("ahora más corto", "cambia el tono", "incluye este dato").

Cuándo elegir cada uno:

| Si... | Iterar el... |
|-------|--------------|
| Faltó contexto inicial importante | Prompt (nueva conversación) |
| El formato general está bien pero falta un retoque | Conversación |
| El modelo entendió la tarea al revés | Prompt |
| Ya cambiaste de tema y arrastras contexto innecesario | Prompt |
| Quieres explorar variantes del mismo eje | Conversación |
| Estás iterando contra la misma respuesta sin avanzar | Prompt (síntoma de descripción mala) |

El error típico: gastar diez turnos peleando con una respuesta cuando el prompt original era el problema. Si ves que tres iteraciones no producen avance significativo, **vuelve al prompt**.

### 5. Dos patrones avanzados útiles

Sin entrar en el módulo 05, dos técnicas que casi siempre ayudan:

#### Asignar un rol explícito

> "Actúa como un editor exigente de The Economist. Tu tarea es..."

No es magia, es un ancla. Le das al modelo un perfil reconocible que **modula el estilo y el nivel de exigencia** de la respuesta. Funciona mejor cuanto más identificable sea el rol (un puesto profesional reconocido > un personaje vago).

Cuándo usarlo: cuando el tono y el nivel importan tanto como el contenido. Cuándo evitarlo: si no aporta nada concreto sobre el contenido.

#### Pedir el formato exacto

No basta con "en formato lista". Mejor:

> "Devuelve exactamente este formato:
> 1. **Título de la opción**: descripción en una línea.
> 2. **...**
>
> No añadas introducción ni cierre."

La especificidad reduce la divagación. Si vas a procesar la respuesta automáticamente, esto es esencial.

### 6. Cómo construir tu propio prompt en 5 minutos

Una rutina que puedes interiorizar:

1. **Quién eres** (10 segundos): rol, contexto profesional, qué hace única tu situación.
2. **Qué necesitas** (30 segundos): la tarea, en una frase con verbo principal.
3. **Restricciones** (1 minuto): longitud, tono, formato, lo que evitar.
4. **Datos / ejemplos** (2 minutos): pega lo que el modelo necesita saber para no inventar.
5. **Cláusula** (10 segundos): "si te falta X, pregúntame".

Cinco minutos de prompting bueno suelen ahorrar treinta de iteración mala.

## Ejemplo aplicado

Reescribir el mismo prompt para tres tareas distintas, mostrando cómo cambian los componentes.

**Tarea 1 — Resumen ejecutivo de un informe técnico:**
```
Soy directora de operaciones en una empresa industrial. Voy a presentar
en consejo de administración un informe técnico sobre eficiencia
energética. El consejo no es técnico.

Te paso el informe completo a continuación. Tu tarea: redactar el
"resumen ejecutivo" en máximo 250 palabras, estructurado en (1) situación
actual, (2) tres oportunidades concretas con su impacto estimado, (3) la
recomendación operativa. Sin gráficos. Sin acrónimos sin desplegar.

Si alguna conclusión te parece dudosa o mal sustentada en el informe,
señálala explícitamente al final, no la ignores.

[informe pegado]
```

**Tarea 2 — Email a un proveedor reclamando una factura inflada:**
```
Soy responsable de compras en una pyme. Acabo de recibir una factura de
mi proveedor habitual con un importe que no concuerda con el presupuesto
firmado. Llevo 5 años de relación con ellos, queremos seguir trabajando
juntos.

Tu tarea: redactar email entre 200 y 250 palabras, tono firme pero no
hostil, que (1) cuestione la diferencia con datos concretos, (2) pida
explicación o factura corregida, (3) sin amenazar acción legal.

Datos:
- Número de factura: F-2026-0312
- Importe facturado: 12.480 €
- Importe presupuestado: 9.800 €
- Diferencia: 2.680 €

Si necesitas algún dato más para que el email tenga peso, pregúntamelo
antes de redactar.
```

**Tarea 3 — Brainstorming de nombres para un producto:**
```
Estoy lanzando una app de productividad personal pensada para autónomos
y freelancers que viven con tareas dispersas en muchas plataformas (correo,
WhatsApp, Slack, Notion...). La app las centraliza y propone qué hacer
ahora.

Tu tarea: dame 15 nombres candidatos. Criterios:
- Pronunciables en español e inglés.
- Máx. 8 letras.
- Que no exista una app conocida con el mismo nombre (a tu mejor saber).
- Evita "AI", "GPT", "Smart" en el nombre.

Para cada nombre da una línea explicando la asociación de ideas.
```

Tres prompts, mismo esqueleto, contenido distinto. Es la habilidad que se entrena.

## Ejercicio práctico

1. Coge **un prompt vago** que hayas escrito recientemente (revisa tu historial real con Claude o invéntalo).
2. Reescríbelo aplicando los **cinco componentes**: contexto, tarea, restricciones, ejemplos, cláusula de incertidumbre.
3. Lanza ambas versiones (la vaga y la precisa) en conversaciones nuevas separadas.
4. Compara las respuestas. ¿Cuál te ahorra más tiempo en revisión?

**Criterio de éxito:** la versión precisa te da una respuesta **utilizable con menos correcciones** que la vaga. Si no, revisa qué componente sigue débil. La trampa habitual: especificar mucho la tarea pero olvidar el contexto del *quién eres y para qué*.

## Errores comunes

- **"Más largo = mejor."** No siempre. Un prompt sobrecargado de instrucciones contradictorias es peor que uno corto pero claro. Lo importante es **completitud**, no longitud.
- **Pedir tono y dar el opuesto.** "Tono profesional pero cercano" + ejemplos del propio prompt en tono coloquial. El modelo se confunde. Tu prompt debe predicar con el ejemplo si pides estilo.
- **Olvidar la cláusula de incertidumbre.** Sin ella, el modelo rellena los huecos con alucinaciones. Decirle "si te falta X, pregúntame" es la mitigación más barata y más infrautilizada.
- **No iterar nunca el prompt.** Pelearse 10 turnos contra una respuesta mediocre es síntoma de prompt original mal hecho. Vuelve atrás y reescribe.
- **Confundir prompts genéricos con prompts reutilizables.** Una plantilla bien diseñada es reutilizable porque tiene huecos claros para tu contexto. "Hazme un email" no es plantilla, es vaguedad.

## Resumen en 3 frases

1. Un prompt vago no es "corto", es **uno que deja al modelo demasiado margen de interpretación**; el resultado es la respuesta más típica del corpus, no la que tú necesitas.
2. Cinco componentes mejoran casi cualquier prompt: **contexto, tarea explícita, restricciones, ejemplos y cláusula de incertidumbre**.
3. Cuando una respuesta no avanza tras dos o tres iteraciones de conversación, **el problema está en el prompt original**: vuelve, reescribe y empieza de nuevo.

## Recursos para profundizar

- [Anthropic — Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) — la guía oficial.
- [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) — ejemplos ejecutables de prompts bien construidos por tarea.
- *Prompt Engineering for LLMs* (Berryman & Ziegler, O'Reilly 2024) — referencia técnica completa. Ver `recursos/libros.md`.
- Módulo 05 de este curso (cuando esté redactado): técnicas avanzadas.

## Siguiente lección

➡️ `05-discernimiento.md` — Discernimiento: cómo evaluar outputs.

## Fuentes

- [Anthropic — Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) — consultado 2026-05-09.
- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — consultado 2026-05-09.
- Berryman, J. & Ziegler, A. (2024). *Prompt Engineering for LLMs*. O'Reilly. Ver `recursos/libros.md`.
