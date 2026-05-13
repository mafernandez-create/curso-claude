---
titulo: "Delegación con criterio: qué tareas tienen sentido"
modulo: "02-ai-fluency"
orden: 3
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 25
---

# Delegación con criterio: qué tareas tienen sentido

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Identificar **el espectro de niveles de autonomía** al delegar a una IA y elegir el nivel adecuado por tarea.
- [ ] Aplicar tres **heurísticas rápidas** para decidir si una tarea concreta merece delegarse.
- [ ] Reconocer **patrones recurrentes** de buena y mala delegación.
- [ ] Distinguir entre **delegar la tarea** y **delegar la responsabilidad** (no son lo mismo).
- [ ] Articular tu propio **criterio de delegación** alineado con tu rol y contexto.

## Prerrequisitos

- Lección 02: [El framework de las 4 dimensiones](02-framework-4-dimensiones.md). La delegación es la primera D y precede a todo el resto.
- Útil haber leído la [lección 09 del Módulo 01](../01-fundamentos-ia/09-cuando-no-usar-llm.md) sobre cuándo un LLM **no** es la herramienta adecuada. Esta lección complementa: si el LLM **es** la herramienta, ¿con qué grado de autonomía?

## Contexto

Delegar es la primera decisión y la más infravalorada. La mayoría de la conversación pública sobre IA gira en torno a "qué prompt usar". Pero antes hay una pregunta más útil: **¿debería delegar esta tarea concreta y en qué grado?** Acertar aquí ahorra más tiempo que el mejor prompt del mundo aplicado a una mala decisión de delegación.

Esta lección no es sobre tecnología; es sobre **diseño de tu flujo de trabajo**.

## Contenido principal

### 1. El espectro: cinco niveles de autonomía

Delegar no es binario. Es un espectro con al menos cinco grados, ordenados de menor a mayor delegación:

**Nivel 0 — Sin IA.** Lo haces tú, sin asistencia. La opción olvidada con más frecuencia: para muchas tareas pequeñas, el coste de prompting supera al coste de hacerlo.

**Nivel 1 — IA como caja de resonancia.** Le explicas tu problema o tu borrador y le pides feedback, alternativas, contraargumentos. Tú escribes el resultado final.

**Nivel 2 — IA como copiloto.** Va escribiendo contigo (autocompletado, sugerencias). Tú aceptas/rechazas en cada paso. Típico en IDEs, suites ofimáticas modernas.

**Nivel 3 — IA como autora del borrador.** Le pides que produzca el primer borrador completo. Tú revisas, corriges, firmas. Es el nivel más útil en la práctica para tareas de escritura/análisis.

**Nivel 4 — IA como ejecutora supervisada.** Le das una tarea y ejecuta acciones (no solo texto): consulta tools, modifica archivos, llama APIs. Tú apruebas pasos clave y revisas el resultado. Aquí entran agentes y Claude Code.

**Nivel 5 — IA autónoma.** Ejecuta sin supervisión humana paso a paso. Solo aceptable para tareas reversibles, de bajo impacto y con monitorización a posteriori.

La fluencia no es elegir siempre el nivel más alto, ni siempre el más bajo. Es **elegir el nivel correcto para la tarea**.

### 2. Tres heurísticas para decidir

Cuando dudes, pásalas por estos tres filtros:

**Heurística 1 — ¿Cuánto cuesta hacerlo a mano?**
Si la tarea te lleva 30 segundos, escribir un prompt útil te llevará más. No delegues. Si te lleva 30 minutos, hay margen.

**Heurística 2 — ¿Cuánto cuesta equivocarse?**
Si el coste de un error es alto (decisiones sobre personas, código que va a producción, datos que se enviarán a un cliente), sube en el espectro **hacia menos autonomía** (nivel 1–3 con verificación), no hacia más.

**Heurística 3 — ¿Necesita criterio humano específico?**
Si la tarea requiere conocimiento de tu contexto privado, criterio profesional regulado o relación interpersonal, la IA es **insumo**, no decisor. Niveles 1–3 sí, 4–5 no.

Combinadas dan una matriz simple:

| Coste hacerlo a mano | Coste de error | Nivel sugerido |
|----------------------|----------------|----------------|
| Bajo | Cualquiera | 0 (no delegues) |
| Alto | Bajo | 3–4 (delega y revisa) |
| Alto | Alto | 1–3 (apoyo o borrador con verificación) |
| Alto | Muy alto | 1 (caja de resonancia, decisión humana) |

### 3. Patrones de buena delegación

Tareas donde delegar sale casi siempre bien:

- **Borradores de cualquier texto** (email, post, contrato, informe). Nivel 3.
- **Brainstorming estructurado** (lista de opciones, contraargumentos, ejemplos). Nivel 1.
- **Resumen y síntesis** de documentos largos. Nivel 3 con verificación de las conclusiones clave.
- **Traducción entre formatos** (JSON ↔ YAML, código ↔ explicación). Nivel 3.
- **Explicación de un tema desconocido** a tu nivel. Nivel 1–3.
- **Refactorización guiada** de código en lenguajes bien documentados. Nivel 2–4 (dependiendo del entorno).
- **Crítica de un texto propio** ("dime qué no funciona en este párrafo"). Nivel 1.

### 4. Patrones de mala delegación

Tareas donde delegar suele salir mal:

- **Decisiones que afectan a personas** (contratación, despido, evaluación, denegación de servicios). Nivel máx. 1: insumo, nunca decisor.
- **Cálculos exactos a escala** (cuentas, agregaciones, rankings). El LLM no es calculadora; usa una tool determinista o pídele que escriba el script.
- **Información actual no anclada** (precios de hoy, status de un servicio, última versión de algo). Sin tool de búsqueda, no delegues.
- **Asesoramiento profesional regulado** (médico, jurídico, financiero) sin un profesional humano que valide. Nivel máx. 1: borrador para tu propia exploración.
- **Tareas íntimas o personales sensibles** donde el factor humano es el contenido (carta de condolencia, mensaje a un familiar enfermo). Si el receptor sospecha que es generado, pierde su valor.
- **Tareas que ya hace mejor una herramienta especializada** (regex, SQL, calculadora, IDE). Nivel 0: usa la herramienta.

### 5. Delegar la tarea ≠ delegar la responsabilidad

Una distinción crítica que mucha gente no hace.

Puedes delegar la **ejecución** de una tarea, pero la **responsabilidad** sobre el resultado sigue siendo tuya. Si el output que firmas tiene un dato incorrecto, no es excusa decir "lo hizo Claude". Si filtras información sensible al pegarla en el chat, eres tú quien la filtró. Si publicas algo sesgado, eres tú quien lo publica.

Implicación práctica: **el nivel de delegación que elijas debe permitirte cumplir tu responsabilidad**. Si vas a firmar como tuyo, tienes que poder defender cada afirmación. Si no puedes, baja el nivel de autonomía o cambia de herramienta.

### 6. Delegación reflexiva, no por defecto

El error más sutil: pasar a "delegar todo" como hábito automático. Empieza una tarea, la lanzas a Claude, miras el resultado, lo aceptas, siguiente.

Eso no es fluencia: es desplazamiento de criterio. Si en seis meses todo lo que produces pasa por una IA sin que tu juicio haya intervenido sustancialmente, tu valor profesional es el de la IA pública —es decir, ninguno diferencial.

La regla saludable: **cada delegación debería haber pasado por una decisión consciente de delegar**. Aunque tarde dos segundos. Aunque la respuesta sea "sí, claramente". El acto de decidir mantiene el músculo del criterio en forma.

### 7. Cómo construir tu propio criterio

Los frameworks ayudan, pero el criterio se construye con tu propio contexto:

- **Tu rol.** Lo que delega un PM no es lo mismo que lo que delega un médico o un escritor.
- **Tu sector.** Hay regulaciones que limitan qué puedes delegar (salud, banca, jurídico, RR. HH.).
- **Tu organización.** Algunas empresas tienen políticas explícitas; otras no, y la responsabilidad cae en ti.
- **Tu nivel de experiencia.** A más experto, más fino el criterio para diferenciar tareas similares.

Tres preguntas que te puedes hacer para articularlo:
1. ¿Cuáles son las **tres tareas** de mi semana donde la IA me aporta más sin riesgo? (Catálogo de "delegar siempre".)
2. ¿Cuáles son las **tres tareas** donde nunca delegaría sin verificar? (Catálogo de "decisión humana siempre".)
3. ¿Hay alguna que cae en zona gris? (Allí está el aprendizaje.)

## Ejemplo aplicado

Recorramos un día de trabajo de un consultor B2B y veamos qué delegación tiene sentido en cada paso.

| Tarea | Coste hacerlo a mano | Coste de error | Nivel sugerido | Razonamiento |
|-------|----------------------|----------------|----------------|--------------|
| Renombrar 12 archivos siguiendo patrón | Bajo | Bajo | 0 | Bash o Finder; IA es exceso. |
| Redactar email a cliente molesto | Medio | Alto | 1–3 con revisión | Borrador + ajuste fino humano. |
| Resumir informe de 80 páginas para junta directiva | Alto | Alto | 3 con verificación de conclusiones clave | El cuerpo se delega, las conclusiones se validan. |
| Decidir si despedir a un empleado | — | Muy alto | 1 (insumo) | La decisión es humana siempre. |
| Convertir CSV a JSON | Bajo–medio | Bajo | 0–3 | Si es algo aislado, script; si es recurrente, ya hay tools. |
| Brainstorming de nombres para un producto nuevo | Medio | Bajo | 1 | Ideación pura: terreno fértil para IA. |
| Cálculo de IVA agregado del trimestre | Bajo (con Excel) | Alto | 0 | Excel; pedirle a Claude que calcule es alucinación esperando ocurrir. |

Patrón observable: las decisiones suben/bajan según las tres heurísticas, no según "qué moderno suena".

## Ejercicio práctico

1. Coge **tu agenda real de la última semana** (tareas que has hecho en tu trabajo o estudio).
2. Lista **diez** de ellas.
3. Para cada una, asigna:
   - Coste hacerlo a mano (bajo / medio / alto).
   - Coste de error (bajo / medio / alto / muy alto).
   - Nivel de delegación que aplicaste (0–5).
   - Nivel de delegación que **deberías** haber aplicado.
4. Identifica patrones:
   - ¿Estás sistemáticamente **sobredelegando** (nivel mayor del recomendable)?
   - ¿Estás sistemáticamente **infradelegando** (nivel menor del recomendable)?
   - ¿Hay un tipo de tarea que repite el error?

**Criterio de éxito:** identificas al menos **un patrón sistemático** propio. Si las diez tareas estaban perfectamente delegadas, repite el ejercicio con honestidad: probablemente has racionalizado algunas. Casi nadie tiene la calibración perfecta.

## Errores comunes

- **"Si tengo IA disponible, debo usarla."** No. La pregunta es si **aporta valor neto** en esta tarea concreta. A menudo la respuesta es no.
- **"Delegar es eficiencia."** A veces; otras es desplazar coste a una fase posterior (revisión, corrección de errores, recuperación de relación con un cliente cuando detectó algo raro).
- **"El nivel correcto es siempre 5."** Casi nunca. La autonomía total solo es razonable en tareas reversibles, de bajo impacto y monitorizadas. Para casi todo, el nivel sweet-spot está en 1–3.
- **"Si lo reviso, da igual de qué nivel delegue."** No. Cuanto más alto el nivel, **más fácil pasar por alto errores en revisión** porque tu cerebro se ha desenganchado del proceso. Revisar 100 % concentrado un texto que no escribiste es muy distinto a corregir el tuyo.
- **"La delegación es una decisión de una vez."** No. La revisas tarea a tarea, y conviene revisar tu **patrón** cada cierto tiempo (¿estoy delegando más/menos que hace 3 meses? ¿en qué?).

## Resumen en 3 frases

1. La delegación no es binaria: hay un espectro de **cinco niveles de autonomía** y la fluencia consiste en elegir el correcto para cada tarea, no el más alto siempre.
2. Tres heurísticas filtran bien la mayoría de casos: **coste de hacerlo a mano**, **coste de error**, y **necesidad de criterio humano específico**.
3. Puedes delegar la **ejecución**, pero **no la responsabilidad**: el nivel que elijas debe permitirte defender cada afirmación del output que firmas.

## Recursos para profundizar

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — la sección sobre delegación con sus propios ejercicios.
- [Lección 09 del Módulo 01](../01-fundamentos-ia/09-cuando-no-usar-llm.md) — cuándo un LLM no es la herramienta adecuada (vista de "no delegar nunca").
- *AI Engineering* (Chip Huyen, O'Reilly 2024) — capítulos sobre human-in-the-loop y diseño de sistemas con asistencia IA.

## Siguiente lección

➡️ `04-descripcion.md` — Descripción: cómo pedir con precisión.

## Fuentes

- [Anthropic — AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) — consultado 2026-05-09.
- Huyen, C. (2024). *AI Engineering*. O'Reilly. Ver `recursos/libros.md`.
