# Novedades del curso — 2026-07-20

> Informe generado por la skill `actualizar-recursos` (escaneo de fuentes oficiales
> de Anthropic: news, research, release notes de plataforma). Fuentes consultadas el 2026-07-20.
>
> **🔶 ESTADO: PENDIENTE DE CONFIRMAR.** Nada de lo de abajo se ha aplicado al curso.
> Son *propuestas*; el visto bueno lo das tú (Manolo).

## Contexto respecto a informes anteriores

- ⚠️ **Hay dos informes anteriores sin confirmar todavía**: `novedades-2026-07-04.md`
  (Sonnet 5, Fable 5/Mythos 5 restaurados, Claude Science, Claude Tag, marco de
  severidad de jailbreaks) y `novedades-2026-07-06.md` (retroalimentación de podcasts).
  Este informe **no repite** nada de aquellos.
- Ventana cubierta aquí: **6 → 20 de julio de 2026**. Han pasado 14 días desde el último
  escaneo, así que hay más volumen de lo habitual.
- La deuda acumulada es real: el recordatorio del `CLAUDE.md` sobre revisar los módulos
  **03, 05, 06 y 07** por el release de Sonnet 5 sigue sin ejecutarse.

---

## 1. 🎓 Claude for Teachers (14 jul 2026) — *lo más importante para este curso*

- **Qué es:** producto específico para **docentes K-12 verificados de EE. UU.**,
  **gratuito**, con registro abierto hasta el **30 jun 2027** y un año de acceso.
- **Qué incluye:** planificación de lecciones alineada a los estándares académicos de
  los 50 estados, herramientas de diferenciación por nivel del alumnado, análisis de
  datos de progreso, acceso a **Claude Code y Cowork** para automatizar tareas
  recurrentes, y un **curso de AI fluency** co-creado con Teach For America. Se integra
  con nueve herramientas del ecosistema K-12, entre ellas ASSISTments, Canva Education
  y MagicSchool.
- **Salvaguardas:** excluye a estudiantes (política 18+), cumplimiento **FERPA** y los
  datos no se usan para entrenar modelos.
- **Encaja en:** **Módulo 12 (formación y docencia)** — es el eje del curso que más
  material nuevo gana con esto. Mención cruzada en Módulo 04 (productividad).
- **Por qué importa aquí:** el curso tiene un eje explícito "formador/educador" y hasta
  ahora se apoyaba en material genérico. Esto es una fuente oficial y directa.
  ⚠️ Ojo al redactar: la disponibilidad es **solo EE. UU.**, así que hay que enmarcarlo
  como referencia metodológica, no como algo que puedas usar tú directamente.
- **Fuente:** [Introducing Claude for Teachers](https://www.anthropic.com/news/claude-for-teachers) — consultado 2026-07-20.
- **Prioridad sugerida:** alta.

## 2. 🪞 Una forma de reflexionar sobre tu uso de Claude (9 jul 2026)

- **Qué es:** función en **beta** para usuarios **Free, Pro y Max con la memoria
  activada**. Muestra un resumen del propio uso de Claude (1, 3, 6 o 12 meses), con
  desglose de temas trabajados y franjas horarias, lanza preguntas periódicas para
  revisar el papel de Claude en tu día a día, y permite fijar **horas de silencio** o
  avisos para tomar un descanso.
- **Encaja en:** Módulo 04 (productividad y hábitos de uso) y Módulo 02 (AI fluency —
  encaja de lleno con la dimensión de uso consciente/metacognitivo).
- **Nivel propuesto:** lección corta o apartado dentro de una lección existente del 04.
- **Fuente:** [Introducing a way to reflect on how you use Claude](https://www.anthropic.com/news/reflect-with-claude) — consultado 2026-07-20.
- **Prioridad sugerida:** media-alta (es barato de incorporar y muy alineado con el eje
  "usuario general").

## 3. 🧭 Research — "Claude's values across models and languages" (13 jul 2026)

- **Qué es:** análisis de **~310.000 conversaciones reales** (309.815) recogidas durante
  dos semanas de mayo de 2026 sobre **Sonnet 4.6, Opus 4.6 y Opus 4.7**. Los valores
  expresados se comprimen en **cuatro ejes**: Deferencia–Cautela, Calidez–Rigor,
  Profundidad–Brevedad, Franqueza–Ejecución.
- **Hallazgos:** Opus 4.6 tiende a deferencia/rigor/brevedad/ejecución; Opus 4.7 a
  cautela/rigor/profundidad/franqueza. Por idioma, en inglés tiende a
  cautela/rigor/profundidad/franqueza y en árabe a deferencia/calidez/brevedad/ejecución
  (la mayor variación está en el eje Calidez–Rigor).
  ⚠️ **Al redactar, no exagerar:** los efectos entre modelos son pequeños (0,08–0,24σ).
- **Encaja en:** Módulo 13 (seguridad y ética) y Módulo 05 (prompt engineering — el
  idioma de la conversación afecta al comportamiento, dato directamente accionable para
  un curso en español).
- **Fuente:** [Claude's values across models and languages](https://www.anthropic.com/research/claude-values-models-languages) — consultado 2026-07-20.
- **Prioridad sugerida:** alta para el Módulo 05 (el matiz del idioma es muy relevante
  para un curso en castellano).

## 4. 🧠 Research — "A global workspace in language models" (6 jul 2026)

- **Qué es:** trabajo de interpretabilidad que identifica un **"J-space"** mediante la
  técnica *Jacobian lens* (J-lens): un conjunto de patrones internos que Claude puede
  reportar y modular a petición, y que media el razonamiento de varios pasos y la
  escritura creativa. Dato llamativo: **menos del 10 %** de la actividad interna pasa
  por ese espacio; la mayor parte del procesamiento lo esquiva.
- **Aplicación práctica:** el J-lens permitió detectar datos fabricados, conciencia de
  estar siendo evaluado y objetivos maliciosos implantados — estos últimos **en modelos
  entrenados a propósito para el experimento**, no en producción.
- **Encaja en:** Módulo 01 (fundamentos — cómo funciona por dentro) y Módulo 13
  (interpretabilidad como herramienta de seguridad).
- **Fuente:** [A global workspace in language models](https://www.anthropic.com/research/global-workspace) — consultado 2026-07-20.
- **Prioridad sugerida:** media (excelente material divulgativo, pero exige redacción
  cuidadosa para no caer en antropomorfismo).

## 5. 🔒 Research — "An off switch for dual-use knowledge in AI models" (8 jul 2026)

- **Qué es:** investigación de **AE Studio en colaboración con Anthropic**. Propone
  **GRAM** (*Gradient-Routed Auxiliary Modules*): compartimentos dedicados y extraíbles
  por cada categoría de conocimiento de doble uso (ciberseguridad, virología…), que
  pueden activarse o desactivarse.
- **Resultados:** GRAM igualó el rendimiento del filtrado de datos en todos los tamaños
  probados y la brecha entre "módulo activado" y "módulo desactivado" se ensancha a
  medida que crece el modelo.
  ⚠️ **Salvedad obligatoria al citarlo:** rango probado **50M–5B parámetros**;
  investigación preliminar, **no aplicada a modelos en producción**.
- **Encaja en:** Módulo 13 (seguridad y alineación).
- **Fuente:** [An off switch for dual-use knowledge](https://www.anthropic.com/research/off-switch-dual-use) — consultado 2026-07-20.
- **Prioridad sugerida:** media.

## 6. ⚙️ Cambios de plataforma / API (8 → 17 jul 2026)

Bloque técnico. Afecta sobre todo al **Módulo 07 (API)** y al **Módulo 10 (cloud)**.

| Fecha | Cambio | Impacto en el curso |
|---|---|---|
| **17 jul** | El **Workbench legacy** (`platform.claude.com/workbench`) se retira: acceso hasta el **17 ago 2026**. El nuevo Workbench es `platform.claude.com/playground` y **no** soporta prompts, variables ni evals guardados. | ⚠️ **Revisar si algún módulo (05/07) menciona el Workbench**: puede quedar obsoleto en un mes. |
| **17 jul** | Las **prompt tools experimentales** (`/v1/experimental/generate_prompt`, `improve_prompt`, `templatize_prompt`) se retiran también el 17 ago 2026; después devolverán error. | Módulo 05, si se citaban como herramienta de prompting. |
| **15 jul** | **Mensajes de sistema a mitad de conversación** disponibles en Fable 5, Mythos 5 y Opus 4.8, sin beta header, en API, Bedrock y Vertex (la nota corrige avisos de disponibilidad anteriores). | Módulo 07 — patrón nuevo de diseño conversacional. |
| **14 jul** | Gestión de usuarios de **Claude Enterprise** vía **Admin API** en beta. Los grupos y roles personalizados requieren el header `anthropic-beta: ce-user-management-2026-07-13`; miembros e invitaciones **no** requieren header. | Módulo 10 (administración/cloud). Relevancia media para uso personal. |
| **10 jul** | **Dreams** (research preview) soporta ahora Fable 5 y Sonnet 5. | Módulo 09 (skills y agentes). |
| **8 jul** | Se puede fijar **caducidad al crear API keys** y Admin API keys (campo `expires_at`). Las claves existentes no se ven afectadas. | Módulo 07 + buena práctica de seguridad. |

- **Fuente:** [Release notes de la plataforma](https://platform.claude.com/docs/en/release-notes/api) — consultado 2026-07-20.
- **Prioridad sugerida:** **alta la retirada del Workbench** (tiene fecha límite: 17 ago),
  media el resto.

---

## 7. Vistas y clasificadas como secundarias

No propongo lección, pero las dejo registradas por si te interesan como recurso suelto:

- **"Anthropic commits $10 million to Canadian AI research"** (14 jul) — institucional.
- **"Ben Bernanke appointed to Anthropic's Long-Term Benefit Trust"** (9 jul) —
  gobernanza; encajaría como nota breve en Módulo 13 si algún día tratas la estructura
  de gobierno de Anthropic.
- **"Inviting hard questions"** (9 jul) — Anthropic pide al público sus preguntas
  difíciles sobre IA y se compromete a responderlas públicamente. Posible recurso de
  Módulo 13.
- **Research "Claude plays robotics"** (9 jul, Frontier Red Team) — interesante pero
  lejos del temario.
- **Research "How Canada uses Claude: Findings from the Anthropic Economic Index"**
  (14 jul) — informe económico regional; el índice ya se cita en el curso.
- **Casos de estudio:** "UST is bringing Claude to physical AI" (9 jul) y "Government of
  Alberta uses Claude to find and fix cybersecurity vulnerabilities" (6 jul). El de
  Alberta podría servir como caso real en Módulo 11.
- **"Apply for Anthropic's AI for Science rare disease research grants"** (20 jul) —
  convocatoria de ayudas, no contenido formativo.

---

## Recomendación de prioridad

1. **Claude for Teachers** (#1) → Módulo 12. Es lo que más aporta al curso.
2. **Retirada del Workbench** (#6) → tiene **fecha límite del 17 ago**; conviene revisar
   antes si el curso lo menciona.
3. **Valores por idioma** (#3) → Módulo 05, por el matiz castellano/inglés.
4. **Reflexión sobre el uso** (#2) → Módulo 04, barato de incorporar.
5. El resto, cuando haya hueco.

> **Nota de proceso:** antes de aplicar nada de esto, quizá tenga sentido cerrar primero
> los informes del **04 y 06 de julio**, que siguen pendientes. Si no, la deuda de
> revisión sigue creciendo.

---

## Recordatorio

**Nada de lo anterior se ha aplicado al curso.** Son propuestas para tu revisión. Cuando
las decidas, marca este archivo como implementado e indica en qué módulo entró cada una.

---

> **Verificación:** los datos de este informe (fechas, cifras, nombres de técnica,
> headers, condiciones de disponibilidad y atribuciones) se contrastaron con fuentes
> oficiales de Anthropic mediante el subagente `verificador-resultados` el 2026-07-20:
> **41 afirmaciones VERIFICADAS, 0 contradichas, 0 sin confirmar**. Dos títulos quedaron
> como PROBABLE y se han corregido aquí al título oficial del newsroom. El verificador
> marcó para revisión humana el bloque legal de Claude for Teachers
> (FERPA / política 18+ / no entrenamiento con datos): **confírmalo tú antes de que ese
> punto pase a contenido publicado del curso.**
