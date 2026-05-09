---
titulo: "Cuándo un LLM NO es la herramienta adecuada"
modulo: "01-fundamentos-ia"
orden: 9
creado: 2026-05-09
revisado: 2026-05-09
modelo_referencia: "Claude Opus 4.7"
estado: borrador
tiempo_estudio_min: 20
---

# Cuándo un LLM NO es la herramienta adecuada

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Identificar **categorías de tareas** donde un LLM es la herramienta equivocada.
- [ ] Aplicar tres **heurísticas rápidas** para decidir si delegar a Claude o no.
- [ ] Reconocer cuándo **una herramienta específica de menor capacidad** (regex, SQL, calculadora, búsqueda) es objetivamente mejor.
- [ ] Distinguir cuándo el problema no es del LLM, sino del **encuadre del usuario** (mal prompt, mal contexto, mala expectativa).
- [ ] Cerrar el módulo con un modelo mental claro de **cuándo usar Claude** y cuándo no.

## Prerrequisitos

- Lecciones 01–08 del módulo. Esta lección sintetiza límites que ya viste por separado y añade el criterio de **"hay tareas para las que existen mejores herramientas que cualquier LLM, por buenas que sean sus capacidades"**.

## Contexto

La tentación con cualquier herramienta nueva y potente es usarla para todo. Lo viste con los smartphones, con las hojas de cálculo, con Internet. Con los LLMs pasa lo mismo, multiplicado. El criterio para no caer en esa trampa no es solo conocer las limitaciones (lección 08): es saber cuándo **otras herramientas son objetivamente mejores** y cuándo el coste/beneficio simplemente no compensa.

Esta lección cierra el módulo con un modelo mental práctico para decidir.

## Contenido principal

### 1. El problema del péndulo

Hay dos errores opuestos, y casi todo el mundo los comete por turnos:

- **Sobreuso.** "Ya que tengo Claude, le pido todo." Resultado: respuestas a preguntas que se contestan más rápido tú solo, código que ya estaba en Stack Overflow desde hace cinco años bien explicado, decisiones automatizadas que requerían criterio.
- **Infrauso.** "No me fío de un LLM, lo hago a mano." Resultado: pierdes horas redactando borradores que un modelo te haría en segundos, dejas sin explorar opciones que el modelo te propondría.

El criterio útil no es "Claude sí" o "Claude no": es **¿es esta tarea concreta una donde el LLM aporta más valor del que cuesta usarlo, considerando alternativas?**

### 2. Categorías donde un LLM NO es la herramienta correcta

#### a) Tareas con requisitos de precisión absoluta

Si la respuesta tiene que ser **exactamente la correcta** o nada vale —cálculos financieros que se enviarán a Hacienda, parseo determinista de un protocolo, validación de checksums—, un LLM es la herramienta equivocada.

**Mejor alternativa:** la herramienta determinista que existe para eso. Una calculadora, una librería de parsing, un motor SQL.

Detalle importante: puedes **usar Claude para escribir el script** que hace el cálculo determinista. Pero no para hacer el cálculo en sí, salvo que esté ejecutando código (tool use con intérprete).

#### b) Tareas con requisitos de reproducibilidad estricta

Si necesitas que la salida sea **idéntica byte a byte** dada la misma entrada, un LLM no es fiable: incluso a temperatura 0 hay variabilidad. Sistemas de compilación, generadores de informes auditables, pipelines de datos donde el output alimenta una decisión legal.

**Mejor alternativa:** algoritmos clásicos, plantillas, generadores deterministas.

#### c) Tareas con consecuencias graves y poca tolerancia al error

Diagnóstico médico definitivo, asesoramiento legal vinculante, decisiones financieras automatizadas a escala, decisiones sobre personas (contratación, despido, denegación de servicios). El **coste de un error específico** es desproporcionado respecto al ahorro de delegar.

**Mejor alternativa:** profesional cualificado. El LLM puede ser **insumo** (resumir un caso, sugerir literatura, listar opciones) pero no **decisor**.

#### d) Tareas para las que existe una herramienta especializada superior

Si tu tarea se resuelve mejor con `grep`, `sed`, una expresión regular, un IDE, un solver matemático, un buscador especializado, **un LLM es la herramienta equivocada** —incluso si "podría hacerlo".

Ejemplos clásicos:
- Buscar todas las ocurrencias de un patrón en un fichero → `grep`.
- Reemplazar texto siguiendo un patrón → `sed` / find-and-replace.
- Encontrar el resultado óptimo de un problema de optimización combinatoria → un solver.
- Buscar la documentación oficial de una API → la propia documentación.

Usar un LLM aquí es como abrir un sedán para coger algo del asiento de atrás cuando estás de pie a un metro: cumple la función, pero es desproporcionado.

#### e) Tareas que dependen estrictamente de información actual

Cuando la respuesta depende de datos posteriores al cutoff del modelo (lección 08): noticias del día, precios actuales, estado de un servicio, último release de una librería.

**Mejor alternativa:** la fuente directa. Buscador, API oficial, RSS, status page.

Si insistes en usar LLM, conéctale tools de búsqueda; sin eso, vas a sufrir.

#### f) Tareas donde el coste de prompting supera el coste de hacerlo

Si "preguntárselo bien" requiere más esfuerzo que la propia tarea, no compensa. Calcular 17 + 32 mentalmente. Buscar un correo en tu bandeja. Renombrar un archivo.

**Mejor alternativa:** hazlo tú. La presunción de que automatizar siempre es mejor falla cuando la tarea es muy puntual o muy pequeña.

#### g) Tareas que requieren ground truth verificable

Citas académicas para un paper, jurisprudencia para una demanda, datos médicos para una historia clínica. Aunque el modelo intente, el riesgo de alucinación (lección 08) es estructural y aquí no es aceptable.

**Mejor alternativa:** búsqueda en bases verificadas (Google Scholar, bases jurisprudenciales, PubMed). El LLM puede ayudarte a **interpretar** lo que encuentras, no a **producirlo**.

### 3. Tres heurísticas rápidas para decidir

Cuando dudes, pasa la tarea por estos tres filtros:

**Heurística 1 — "¿Existe una herramienta determinista que lo resuelva?"**
Si la respuesta es sí y la tarea no requiere comprensión de lenguaje natural, usa la herramienta determinista. Es más barata, más rápida y más fiable.

**Heurística 2 — "¿Sería correcto que un becario competente lo entregara sin revisión de un sénior?"**
Si la respuesta es no, la respuesta del LLM tampoco se puede usar sin revisión. Sirve como insumo, no como decisión final.

**Heurística 3 — "¿Cuánto cuesta equivocarse vs. cuánto cuesta hacerlo a mano?"**
Si el coste del error supera con mucho el coste de hacerlo manualmente, **no delegues sin verificar**. El cálculo no es solo "tiempo ahorrado": también incluye la probabilidad de error, multiplicada por el daño cuando ocurre.

### 4. Patrones donde sí brilla (para contraste)

Para no caer en el infrauso, conviene tener claros los casos donde el LLM es **objetivamente la herramienta correcta**:

- **Borradores y primera versión de cualquier texto.** Email, contrato, post, código. La iteración es la habilidad clave.
- **Brainstorming estructurado.** Listas de opciones, contraargumentos, ejemplos de casos.
- **Traducción entre formatos.** JSON ↔ YAML, SQL ↔ texto, código ↔ explicación.
- **Explicación de temas complejos a distintos niveles.** Adaptar registro y profundidad.
- **Síntesis de información dispersa.** Resumir 50 páginas, comparar dos documentos, extraer puntos clave.
- **Programación asistida.** Sobre todo en lenguajes y librerías bien documentados, donde el modelo conoce los patrones.
- **Análisis exploratorio de datos** (combinado con tools de ejecución).

Si tu tarea cae aquí: úsalo, sin culpa.

### 5. Cuando el problema no es del modelo, es tuyo

A veces declaramos "Claude no sabe hacer X" cuando en realidad el problema está en cómo se lo pedimos. Antes de descartar:

- ¿Le diste **contexto suficiente**? (Quién eres, para qué quieres la respuesta, en qué formato).
- ¿Le diste **ejemplos** del tipo de respuesta que esperas (few-shot)?
- ¿Le diste **fuentes** para que no alucine (RAG ligero pegando documentos)?
- ¿Le pediste **explicar su razonamiento** antes de la respuesta final (chain-of-thought)?
- ¿Probaste con un **modelo más capaz** dentro de la familia?

Si la tarea cae en una categoría donde el LLM es la herramienta equivocada (sección 2), nada de esto te salvará. Si no, prueba antes de descartar.

### 6. Volviendo a la entrega del módulo

Recuerda lo que pide la entrega del Módulo 01: **explicar por escrito (500–800 palabras) a alguien sin conocimientos técnicos qué es Claude, cómo funciona y qué puede y no puede hacer**.

Las nueve lecciones del módulo te dieron las piezas. Esta última te da el cierre: **una explicación honesta no oculta los límites, los integra**. Si dices "Claude lo hace todo", tu explicación es publicidad. Si dices "Claude es un autocompletador de texto que con disciplina puede ahorrarte mucho tiempo, dentro de unos límites concretos", estás al nivel de un ingeniero senior explicándolo a su familia. Eso es lo que se busca.

## Ejemplo aplicado

Pasemos cinco peticiones reales por las heurísticas:

| Petición | H1: ¿Tool determinista? | H2: ¿Becario sin revisión? | H3: ¿Coste del error? | Veredicto |
|----------|------------------------|----------------------------|-----------------------|-----------|
| "Calcula el IVA del 21% de 1.247 €" | **Sí** (calculadora) | — | Bajo si lo verificas | Calculadora, no LLM |
| "Busca todas las menciones a 'compliance' en mis 200 emails" | **Sí** (búsqueda Gmail) | — | Bajo | Búsqueda Gmail, no LLM |
| "Hazme un borrador del email de respuesta a este cliente molesto" | No | **Sí, con revisión** | Medio | LLM ✓ (revisar antes de enviar) |
| "Resúmeme estas 30 páginas de un informe técnico en 1 página" | No | **Sí, con revisión** | Medio | LLM ✓ (verificar conclusiones clave) |
| "Decide si concedo o no este crédito al cliente" | — | **No** | Muy alto | Persona cualificada, **no** LLM |
| "Dame jurisprudencia exacta del Tribunal Supremo sobre X para citar en mi escrito" | No | No (riesgo alucinación) | Muy alto | Base jurisprudencial, no LLM |

Patrón observable: las dos primeras tienen herramienta mejor; la sexta tiene riesgo de error catastrófico; las del medio son los casos donde Claude aporta valor neto.

## Ejercicio práctico

1. Coge **cinco tareas** que hayas hecho la última semana donde estuviste tentado de usar Claude (o lo usaste).
2. Pásalas por las **tres heurísticas** de la sección 3.
3. Clasifícalas en tres grupos:
   - **Bien delegado a Claude.** Hubo ahorro real, riesgo controlado.
   - **No delegar.** Habría salido mejor con otra herramienta o haciéndolo tú.
   - **Caso intermedio.** Se podría haber delegado, pero requería más trabajo de prompting/verificación.
4. Reflexiona: ¿estás más cerca del **sobreuso** o del **infrauso**? Identifica un patrón en tus errores.

**Criterio de éxito:** acabas con al menos una tarea en cada uno de los tres grupos. Si todas caen en "bien delegado", releístes el ejercicio sin honestidad. Si todas caen en "no delegar", probablemente estás infrautilizando.

## Errores comunes

- **"Si Claude puede hacerlo, debe hacerlo."** No. Que algo sea posible no significa que sea óptimo. Una motosierra puede cortar un trozo de queso, pero no es la herramienta adecuada.
- **Confundir capacidad con encaje de uso.** Claude tiene capacidad para resolver muchos problemas matemáticos. Eso no lo convierte en una calculadora fiable a escala.
- **Pensar que la verificación cuesta cero.** Si el verdadero coste de delegar incluye revisar la respuesta, súmalo en tu cálculo. Sigue compensando muchas veces, pero no siempre.
- **Asumir que las heurísticas se aplican una vez y ya.** Una tarea puede empezar siendo apta para LLM y dejar de serlo cuando crece su escala o cambia su criticidad. Reevalúa.
- **No considerar el efecto cascada.** Delegar la tarea X a Claude puede llevarte a delegar también Y y Z porque "están cerca". Cada paso baja la fricción del siguiente. Mantén el criterio.

## Resumen en 3 frases

1. Hay tareas concretas donde un LLM es **objetivamente la herramienta equivocada**: precisión absoluta, reproducibilidad estricta, alta criticidad sin verificación, o existencia de una herramienta determinista mejor.
2. Tres heurísticas rápidas filtran bien la mayoría de casos: **¿hay tool determinista?**, **¿lo aceptaría un sénior sin revisión?**, **¿cuánto cuesta equivocarse vs. hacerlo a mano?**.
3. El criterio útil no es "LLM sí o no", sino **encaje de uso por tarea concreta**, sabiendo distinguir entre "el modelo no puede" y "yo no se lo he pedido bien".

## Recursos para profundizar

- [Anthropic — When to use AI](https://www.anthropic.com/news) — busca posts y guías sobre encaje de uso (publicación irregular).
- *AI Engineering* (Chip Huyen, O'Reilly 2024) — capítulos sobre cuándo introducir un LLM en una arquitectura. Ver `recursos/libros.md`.
- [Anthropic — Build with Claude](https://docs.claude.com/en/docs/build-with-claude/overview) — guía oficial de mejores prácticas.

## Cierre del Módulo 01

Has completado las nueve lecciones del módulo. Ya tienes un modelo mental sólido de:

- Qué es un LLM y cómo funciona (lecciones 01–02).
- Cómo se entrena (03–04).
- De dónde viene Claude (05).
- Cómo elegir el modelo correcto (06–07).
- Qué no esperarse de él (08–09).

**Entrega del módulo:** explica por escrito (500–800 palabras) a alguien sin conocimientos técnicos qué es Claude, cómo funciona por debajo y qué puede y no puede hacer. Si tu explicación se entiende, has completado el módulo. Pídele a Claude que te haga de revisor crítico antes de darte por satisfecho.

➡️ Siguiente módulo: [02 — AI Fluency: alfabetización IA](../02-ai-fluency/README.md).

## Fuentes

- [docs.claude.com — Build with Claude](https://docs.claude.com/en/docs/build-with-claude/overview) — consultado 2026-05-09.
- [Anthropic Research](https://www.anthropic.com/research) — consultado 2026-05-09.
- Huyen, C. (2024). *AI Engineering*. O'Reilly. Ver `recursos/libros.md`.
