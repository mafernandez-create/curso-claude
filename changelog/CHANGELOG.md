# Changelog del curso

Registro de cambios del repositorio. Formato basado en [Keep a Changelog](https://keepachangelog.com/es/) adaptado a un curso vivo.

Tipos de entrada:
- `Añadido` — contenido o recursos nuevos.
- `Actualizado` — contenido existente modificado.
- `Obsoleto` — marcado como desfasado (NO borrado).
- `Corregido` — correcciones puntuales.
- `Eliminado` — solo para casos excepcionales; normalmente se marca `Obsoleto`.

---

## 2026-07-22 — Reescrita la sección de IDs y versiones (defecto de los alias `-latest`)

Resuelve el **defecto preexistente** que quedó documentado y pendiente de decisión en la
actualización de Sonnet 5: la sección "alias vs snapshot" de `01/07-versiones-modelos.md`
se apoyaba en identificadores `-latest` que la documentación oficial no recoge.

### Corregido
- `modulos/01-fundamentos-ia/07-versiones-modelos.md` — **error factual sobre el esquema de IDs.** La lección enseñaba alias tipo `claude-opus-4-7-latest` / `claude-opus-latest` y presentaba `claude-opus-4-7` como un ID con fecha. Ninguna de las dos cosas es correcta según la doc oficial. Reescritas las secciones 3 y 4:
  - **Dos formatos según generación.** Desde la 4.6, el ID va **sin fecha** (`claude-sonnet-5`, `claude-opus-4-8`) y **ya es un snapshot fijo** — Anthropic no cambia los pesos de un ID existente; una versión nueva sale con un ID nuevo. Antes de la 4.6, el ID lleva **fecha** (`claude-haiku-4-5-20251001`) y existe un **alias de conveniencia sin fecha** (`claude-haiku-4-5`) que sí se mueve al último snapshot.
  - Los alias con sufijo **`-latest` no existen** en el esquema actual de Anthropic (sí existieron históricamente, p. ej. en Claude 3.5); la lección lo dice con esa cautela.
  - Corregida la anatomía del ID (usaba `claude-opus-4-7-20260301`, formato inexistente para 4.7) y el ejemplo aplicado (usaba `claude-haiku-latest`, inexistente → ahora el alias real `claude-haiku-4-5`).
  - Añadido el matiz de que fijar el ID congela los **pesos**, no la infraestructura de serving (router, clasificadores, muestreo), que puede alterar el comportamiento observable.
  - Actualizados objetivos, ciclo de vida, errores comunes y resumen para que sean coherentes.

### Notas
- Verificado con `verificador-resultados` contra la doc oficial de model-ids-and-versions y models overview: **7 VERIFIED, 1 PROBABLE (la inexistencia de `-latest`, negativo universal, ya redactado con cautela), 0 contradichos.** Veredicto: listo para publicar.
- Con esto se cierra el último punto pendiente que quedaba anotado en el PR de novedades de julio.

---

## 2026-07-22 — Redactadas las 7 lecciones que faltaban (el curso queda completo en borrador)

Con esto, las **161 lecciones del curso están redactadas**. No queda contenido pendiente
de escribir.

### Añadido
- `modulos/02-ai-fluency/05-discernimiento.md` — la trampa de la plausibilidad (fluidez y veracidad son independientes), las tres formas de equivocarse, el mapa de sospecha, cuatro técnicas de verificación, el principio de que quien genera no se evalúa a sí mismo, y verificación proporcional al riesgo.
- `modulos/02-ai-fluency/06-diligencia.md` — los tres ejes (responsabilidad, terceros, privacidad), criterio para declarar el uso de IA, regla operativa sobre qué no pegar nunca, y la erosión del criterio como riesgo profesional.
- `modulos/02-ai-fluency/07-errores-tipicos-interaccion.md` — seis patrones de interacción (espiral de reformulación, contexto supuesto, complacencia, pozo de contexto largo, delegación por inercia, aceptación silenciosa) con su señal temprana y su corrección.
- `modulos/02-ai-fluency/08-casos-aplicados.md` — cierre del módulo: las 4D aplicadas a trabajo, estudio y creatividad, mostrando que **la dimensión crítica cambia** según el contexto (Diligencia / Delegación / Descripción).
- `modulos/00-guia-proyecto/01-como-esta-organizado.md` — mapa del repositorio, los cuatro ejes, y la distinción entre `plan-de-estudio.md`, `progreso.md` y `bitacora.md`.
- `modulos/00-guia-proyecto/02-flujos-claude-code.md` — `CLAUDE.md` como archivo de reglas, las cinco órdenes que el repo entiende, la skill `actualizar-recursos` y el reparto de decisiones entre Claude y Manolo.
- `modulos/00-guia-proyecto/03-rutinas-mantenimiento.md` — las tres rutinas, el release mayor como disparador extraordinario, la distinción desactualizado/incorrecto y la deuda de revisión.

### Actualizado
- `modulos/00-guia-proyecto/README.md` y `modulos/02-ai-fluency/README.md` — lecciones enlazadas y pasadas de `pendiente` a `borrador`.
- `progreso.md` — **corregido un desfase importante**: el archivo llevaba sin actualizarse desde el 29 de abril y marcaba como "📝 sin redactar" siete lecciones del módulo 01 que llevan escritas desde mayo, incluida la que figura como `🔵 Siguiente`. Ahora refleja el estado real, con las lecciones del módulo 01 enlazadas.

### Notas
- El módulo 02 quedaba cortado por la mitad del framework de Anthropic: estaban Delegación y Descripción, faltaban Discernimiento y Diligencia. Ya está completo el ciclo de las 4D.
- El módulo 00 documenta el propio repositorio. Al redactarlo se detectó que **`CLAUDE.md` describe un comando `/verificar-enlaces` que no existe** (`.claude/commands/` no está creada; solo hay la skill `actualizar-recursos`). Se ha documentado como tal en la lección 02 en vez de enseñar algo que no está construido.
- Verificados los enlaces internos de todo `modulos/`: **0 rotos**.

---

## 2026-07-22 — Claude for Teachers y revisión del Workbench (tanda 3: informe del 20 jul)

Aplica las propuestas **#1** y **#6** de `changelog/novedades-2026-07-20.md`, confirmadas
por Manolo. Eran las dos prioritarias: la de más valor para el curso y la única con
fecha límite.

### Añadido
- `modulos/12-formacion-docencia/04-materiales-ejercicios.md` — nueva sección 4, "Claude for Teachers: qué es y qué se puede aprender de él". Enfoque deliberado: como el producto **no está disponible en España**, se documenta qué es y se explota como **referencia de diseño** (docente como intermediario, anclaje a estándares externos, foco en diferenciación, formación incluida, política de datos explícita) para que sirva a un formador español que nunca podrá usarlo.
- `recursos/enlaces.yaml` — entrada `claude-for-teachers` con campo `disponibilidad` (nuevo) advirtiendo de la restricción geográfica. `total_recursos` 66 → 67.
- `modulos/12-formacion-docencia/README.md` — recurso añadido a "Recursos clave" con el aviso de disponibilidad.

### Notas
- **La retirada del Workbench (17 ago 2026) NO requiere cambios.** Se buscó `workbench`, `playground`, `generate_prompt`, `improve_prompt` y `templatize` en todos los módulos, `recursos/`, `README.md` y `plan-de-estudio.md`: **cero apariciones**. El curso nunca enseñó el Workbench, así que su retirada no deja contenido obsoleto. Queda documentado para no repetir la búsqueda.
- Verificado con `verificador-resultados`: los 12 datos del producto (fecha, gratuidad, alcance K-12 EE. UU., nueve integraciones y sus nombres, Claude Code/Cowork, Teach For America, política 18+, no disponible en España) **VERIFICADOS** contra la fuente oficial, 0 contradichos.

### Corregido tras la verificación
El verificador marcó 5 puntos de **precisión normativa** en el párrafo de privacidad —el más delicado, porque trata datos de menores y va dirigido a formadores—. Todos corregidos antes de cerrar:
- "Anthropic declara cumplimiento FERPA" → la formulación real es que su **anexo K-12 está redactado para cumplir FERPA**. No es un sello ni una certificación del proveedor.
- Añadida la precisión de que **FERPA no es "el RGPD americano"**: regula expedientes educativos y obliga a los centros, no a los proveedores. El paralelismo original inducía a error.
- "los datos no se usan para entrenar modelos" → acotado a **Claude for Teachers**, para que no se extrapole al Claude de consumo.
- "en España y la UE, el RGPD" → añadida la **LOPDGDD** y el umbral real de **14 años** para el consentimiento del menor en España. Citar solo el RGPD dejaba al formador con el umbral equivocado (16).
- "registro abierto hasta el 30 jun 2027" → "quien se registre antes de esa fecha obtiene un año completo". La fuente no dice que el registro cierre.
- Añadidas fuentes primarias del regulador (Dept. of Education y BOE), no solo el anuncio de Anthropic.

---

## 2026-07-22 — Retroalimentación de podcasts (tanda 2: informe del 06 jul)

Aplica las 4 propuestas de `changelog/novedades-2026-07-06.md`, confirmadas por Manolo.
Solo añade recursos: no modifica contenido de lecciones.

### Añadido
- `modulos/13-seguridad-etica/09-debate-regulatorio.md` — El Test de Turing, "Fable 5 y GPT 5.6 bloqueados. ¿Fin de los modelos frontera?" (Ep. 161, 30 jun 2026). Caso real de controles de exportación afectando a modelos frontera; enlazado de forma cruzada con la cronología de Fable 5 / Mythos 5 del Módulo 01, L06.
- `modulos/04-productividad/02-disenar-workflow-personal.md` — Pocho Costa, "Un día entero en tu PyME usando IA, hora por hora" (30 jun 2026). Contrapunto práctico en español a la teoría de workflows.
- `modulos/01-fundamentos-ia/06-familia-modelos-claude.md` — Pocho Costa, "Claude Mythos, OpenAI y la economía de la IA" (22 jun 2026). Posicionamiento de la familia Claude frente a la competencia.
- `modulos/04-productividad/01-ia-como-colaborador.md` — Pocho Costa, "IA sin humo: por qué no vas tan atrás como creés" (3 jul 2026). Lectura de mentalidad de adopción, marcada como opcional.

### Actualizado
- `changelog/retroalimentacion-podcasts.json` — registrados los 4 episodios aplicados con su destino, más 3 descartados con su motivo. Incluye el **Ep. 162** de El Test de Turing (16 jul), posterior al informe: descartado por centrarse en competidores. El registro de Pocho Costa estaba vacío y ahora refleja los 4 episodios evaluados.
- `recursos/enlaces.yaml` — `revisado` de los dos podcasts que retroalimentan el curso y `ultima_revision` del catálogo.

### Notas
- **Convención seguida:** los *programas* se catalogan en `enlaces.yaml`; los *episodios* concretos se enlazan en "Recursos para profundizar" de la lección correspondiente, con el prefijo 🎙️. Es el precedente que ya existía en los módulos 01, 06, 09 y 10.
- Los 4 episodios se **verificaron contra el RSS** de cada programa antes de enlazarlos: título, número de episodio y fecha correctos en los 4. Se añadió la URL directa, que el informe no traía.
- Cada enlace lleva el aviso de que es material divulgativo y de que los datos técnicos se contrastan con fuente oficial (principio de honestidad epistémica).

### Corregido
- El informe del 06 jul proponía el episodio de Mythos para el "Módulo 03 (familia de modelos Claude)". La familia de modelos se explica en el **Módulo 01, L06**; el Módulo 03 es "Claude básico". Aplicado en el destino correcto y anotado en el informe.

---

## 2026-07-20 — Actualización por el release de Claude Sonnet 5 (tanda 1 del informe del 04 jul)

Aplica la propuesta **#1** de `changelog/novedades-2026-07-04.md`, confirmada por Manolo.
Cubre la revisión obligatoria por release mayor que marca el `CLAUDE.md`.

### Corregido
- `modulos/01-fundamentos-ia/06-familia-modelos-claude.md` — **error factual**: la lección afirmaba que el acceso a Fable 5 y Mythos 5 seguía **suspendido** por la directiva de exportación de EE. UU. Reescrito con la cronología real y **asimétrica**: controles levantados el 30 jun; **Fable 5** disponible globalmente el 1 jul; **Mythos 5** aprobado el 26 jun y **solo para un conjunto de organizaciones de EE. UU.**. Reenfocado a la lección de fondo: "restaurado" no siempre significa "restaurado para todos".
- `modulos/01-fundamentos-ia/07-versiones-modelos.md` — misma afirmación obsoleta sobre la suspensión, corregida con idéntico matiz.
- `modulos/01-fundamentos-ia/07-versiones-modelos.md` — **snapshot incorrecto** en el ejemplo de buena práctica: `claude-haiku-4-5-20251010` → `claude-haiku-4-5-20251001` (2 apariciones). Añadido el **cambio de formato de ID desde la generación 4.6** (identificador sin fecha que ya es snapshot fijo), que faltaba y contradecía el ejemplo nuevo `claude-sonnet-5`. Lista de generaciones actualizada con 4.8 y 5.
- `modulos/07-api-claude/04-system-parametros.md` — **imprecisión**: la lección decía que los parámetros de sampling "se eliminaron" / "ya no existen" (4 apariciones). Falso: siguen aceptándose con su valor por defecto; lo que devuelve 400 es **fijarlos a un valor distinto**. Corregidas las 4.
- `modulos/05-prompt-engineering/09-extended-thinking.md` — contradicción interna sobre la generación 4.6: se afirmaba que el razonamiento ya era adaptativo y a la vez que `budget_tokens` estaba solo "obsoleto". Unificado: en 4.6 **funciona pero está deprecado**; el 400 es de 4.7 en adelante.
- `modulos/05-prompt-engineering/08-prefill-formato.md` — **hueco de la revisión por release**: la lección lista los modelos donde el prefill devuelve 400 y **no incluía Sonnet 5**. Añadido.

### Actualizado
- `modulos/01-fundamentos-ia/06-familia-modelos-claude.md` — añadido **Claude Sonnet 5** en la sección de Sonnet (1M de contexto, 128k de salida, precio introductorio 2 $/10 $ hasta el 31 ago 2026 → 3 $/15 $) con aviso sobre el tokenizador nuevo. Precisado que la generación 5 incluye también modelos con nomenclatura clásica.
- `modulos/01-fundamentos-ia/07-versiones-modelos.md` — Sonnet 5 incorporado como generación 5, con los **tres cambios de comportamiento** al migrar (dos errores 400 + adaptive thinking por defecto), enmarcados como matices de una actualización que Anthropic describe como *drop-in*.
- `modulos/05-prompt-engineering/09-extended-thinking.md` — Sonnet 5 añadido a la lista de modelos donde `budget_tokens` da error 400; documentado que el **adaptive thinking viene activado por defecto** en Sonnet 5.
- `modulos/07-api-claude/12-extended-thinking-api.md` — ídem, con nota de migración (el 400 no es un fallo silencioso), cómo apagar el razonamiento (`thinking: {type: "disabled"}`) y el aviso de que en Sonnet 5 el valor por defecto de `effort` es **`high`** en Claude API y Claude Code.
- `modulos/07-api-claude/04-system-parametros.md` — Sonnet 5 añadido a los modelos donde fijar `temperature`/`top_p`/`top_k` a valores no por defecto devuelve 400.
- `modulos/07-api-claude/17-costes.md` — **nueva sección 1b**: el precio por token no es comparable entre modelos con tokenizadores distintos. Sonnet 5 genera ~30 % más tokens para el mismo texto **frente a Sonnet 4.6**; se introduce la regla de comparar **coste por tarea** y el aviso sobre la caducidad del precio introductorio.
- `modulos/01-fundamentos-ia/06-familia-modelos-claude.md` — precisado el alcance del tokenizador: el salto es frente a **Sonnet 4.6 y anteriores a Opus 4.7**; con Opus 4.7/4.8 y Fable 5 la escala es la misma y la comparación directa sí vale.

### Notas
- Módulos **03 y 06** revisados: no fijan versiones ni parámetros de modelo en el cuerpo (solo `modelo_referencia` en frontmatter), así que **no requerían cambios**. El contenido sensible a versiones vive en los módulos 01, 05 y 07.
- Los datos se verificaron con el subagente `verificador-resultados` **dos veces**: antes de redactar (fuentes) y **después de editar** (contenido aplicado). La segunda pasada detectó 10 afirmaciones contradichas y 5 sin confirmar —parte preexistentes, parte introducidas en esta misma tanda—, todas corregidas antes de cerrar. Queda constancia porque es el motivo por el que la entrada "Corregido" es más larga que la de "Actualizado".

### Pendiente de revisión humana
Marcado por el verificador como material sensible que conviene que Manolo confirme:
- La cronología de la directiva de control de exportación de EE. UU. (dato regulatorio + gobierno nombrado), en `01/06` y `01/07`.
- Las cifras de precio de Sonnet 5, por si alguien las usa para presupuestar.
- Que Mythos 5 es de acceso por invitación (Project Glasswing): el curso no lo aclara y un lector puede creer que es accesible. **No corregido en esta tanda** — texto preexistente, fuera del alcance de Sonnet 5.

### ⚠️ Defecto preexistente detectado, PENDIENTE de decisión
- `modulos/01-fundamentos-ia/07-versiones-modelos.md`, **sección 4 completa** ("Alias vs snapshot fijo") y el "mal ejemplo" de la sección de ejemplo aplicado se apoyan en alias tipo `claude-opus-4-7-latest`, `claude-opus-latest` y `claude-haiku-latest`. **La documentación oficial no documenta ningún alias `-latest` para las generaciones 4.x/5.** La sección enseña una decisión ("usa `-latest` para prototipar, pinea para producción") construida sobre identificadores que probablemente no existen.
- Es un defecto **anterior** a esta tanda y su arreglo no es cosmético: obliga a reescribir la sección más importante de la lección. Se deja documentado en vez de parcheado a medias. **Requiere el visto bueno de Manolo sobre cómo reenfocarla.**

### Pendiente
- Tanda 2: recursos de podcasts de `novedades-2026-07-06.md`.
- Propuestas #3 (Claude Science → M11), #4 (Claude Tag → M03/04) y #5 (marco de jailbreaks → M13) del informe del 04 jul, aún sin aplicar.
- Todo el informe `novedades-2026-07-20.md`, sin confirmar.

---

## 2026-06-14 — Módulos 10, 11, 12 y 13 redactados (cierra el contenido principal del curso)

### Añadido
- `modulos/10-cloud/` — 13 lecciones en borrador: por qué Bedrock/Vertex, arquitectura de Bedrock, IAM, primeras llamadas con `AnthropicBedrock`, Knowledge Bases (RAG), Agents for Bedrock, arquitectura de Vertex, auth GCP/Service Accounts, primeras llamadas con `AnthropicVertex`, RAG/grounding en Vertex, comparativa de las tres vías, costes/facturación y seguridad/compliance (GDPR, SOC 2, HIPAA).
- `modulos/11-casos-avanzados/` — 10 fichas de proyecto en borrador (banco de proyectos): chatbot RAG, agente investigador, procesamiento de emails, asistente de código, generador con control de calidad, análisis de documentos largos, app multimodal, browser automation, evals de prompts y orquestador multi-agente.
- `modulos/12-formacion-docencia/` — 10 lecciones en borrador: enseñar IA bien/mal, diagnóstico, diseño de sesión, materiales, evaluación 4D, gestión del aula, adaptación de público, ética en docencia, casos por rol y mantener la formación actualizada.
- `modulos/13-seguridad-etica/` — 12 lecciones en borrador: alignment, Constitutional AI, interpretabilidad, sparse autoencoders, jailbreaks/prompt injection, misuse, Usage Policies, frontier risk, debate regulatorio, open vs. closed, Economic Index y obligaciones éticas.

### Actualizado
- READMEs de los módulos 10, 11, 12 y 13 — lecciones/fichas a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Notas
- Con esto quedan **redactados los módulos 04–13** solicitados; todo el grueso del curso (módulos 01–13) está en borrador.
- Por honestidad epistémica, los datos volátiles (precios, IDs de modelo por plataforma, detalles de IAM/Service Accounts, regulación) se remiten a las fuentes oficiales en cada lección.

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 09 (Skills y subagentes): 15 lecciones redactadas

### Añadido
- `modulos/09-skills-agentes/` — las 15 lecciones del módulo, en borrador: qué es una Skill, decisión Skill/tool/slash/prompt, anatomía de SKILL.md, progressive disclosure, recursos bundled, crear y testear Skills, descriptions para triggering, empaquetar/compartir/publicar, y subagentes (qué son, contexto, orquestación multi-agente y antipatrones).

### Actualizado
- `modulos/09-skills-agentes/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 08 (MCP): 15 lecciones redactadas

### Añadido
- `modulos/08-mcp/` — las 15 lecciones del módulo, en borrador: qué resuelve MCP, arquitectura cliente/servidor/transports, los tres primitivos (Tools/Resources/Prompts), probar y construir servidores, definir tools, resources, prompts, sampling, notifications, transports, seguridad/control de acceso, integración con Claude, ecosistema de la comunidad y buenas prácticas.

### Actualizado
- `modulos/08-mcp/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado` (detalles del SDK MCP volátiles; remitidos a la spec oficial).

---

## 2026-06-14 — Módulo 07 (API de Claude): 17 lecciones redactadas

### Añadido
- `modulos/07-api-claude/` — las 17 lecciones del módulo, en borrador: arquitectura de la API, SDKs Python/TS, system y parámetros, streaming, tool use (fundamentos y avanzado), visión, PDFs, prompt caching, batch, razonamiento, RAG, embeddings/vectoriales, errores/rate limits, monitorización y costes. Con ejemplos de código del SDK.

### Actualizado (importante)
- Lección 04: los parámetros de sampling (`temperature`/`top_p`/`top_k`) se eliminaron en los modelos actuales (dan 400); se guía con prompting.
- Lección 12: `budget_tokens` sustituido por `thinking: {type:"adaptive"}` + `effort`.
- `modulos/07-api-claude/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 06 (Claude Code): 15 lecciones redactadas

### Añadido
- `modulos/06-claude-code/` — las 15 lecciones del módulo, en borrador: qué es y cuándo usarlo, instalación, primera sesión, CLAUDE.md, permisos, plan mode, comandos slash, hooks, integración IDE, GitHub, higiene de Git con IA, repos grandes/contexto, costes, patrones/antipatrones y uso en equipo.

### Actualizado
- `modulos/06-claude-code/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado` (detalles de producto/CLI volátiles; remitidos a docs oficiales).

---

## 2026-06-14 — Módulo 05 (Prompt Engineering): 13 lecciones redactadas

### Añadido
- `modulos/05-prompt-engineering/` — las 13 lecciones del módulo, en borrador: anatomía del prompt, claridad/contexto/formato, system vs. user, few-shot, chain-of-thought, XML tags, role prompting, formato de salida, razonamiento del modelo, prompt caching, evaluación, antipatrones y debugging.

### Actualizado (importante)
- Lección 08 reescrita: el **prefill** está obsoleto en los modelos actuales (da error); se enseña la alternativa vigente (instrucciones + structured outputs).
- Lección 09 reescrita: **adaptive thinking + effort** sustituyen al antiguo `budget_tokens`.
- `modulos/05-prompt-engineering/README.md` — lecciones a `borrador` y enlazadas.
- Contenido sincronizado a la app (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 04 (Productividad): 11 lecciones redactadas

### Añadido
- `modulos/04-productividad/` — las 11 lecciones del módulo, en borrador: IA como colaborador, diseño de workflows, Cowork, navegador (Chrome), Excel, Word/PowerPoint, Slack, plugins y tareas programadas, escribir mejor, análisis de documentos/PDF y biblioteca de prompts. Estructura según plantilla; datos de producto volátiles remitidos a docs oficiales.

### Actualizado
- `modulos/04-productividad/README.md` — las 11 lecciones pasan de `pendiente` a `borrador` y se enlazan.
- Contenido sincronizado a la app Next.js (Supabase).

### Pendiente de confirmación
- Revisión de Manolo antes de marcar como `revisado`.

---

## 2026-06-14 — Módulo 03 (Claude básico): 10 lecciones redactadas

### Añadido
- `modulos/03-claude-basico/` — las 10 lecciones del módulo, en borrador: interfaz (web/desktop/móvil), conversaciones vs. Projects, Artefactos, Skills de oficina, modo Investigación, conectores, memoria de conversaciones, estilos personalizados, planes y límites de uso. Estructura según la plantilla del curso; datos volátiles (precios, límites) sin cifras concretas, remitiendo a la web oficial.

### Actualizado
- `modulos/03-claude-basico/README.md` — las 10 lecciones pasan de `pendiente` a `borrador` y se enlazan.
- Contenido sincronizado a la app Next.js (base de datos Supabase) vía `extraer-contenido` + `seed`.

### Pendiente de confirmación
- Revisión de Manolo antes de marcar las lecciones como `revisado` (las features de producto cambian; conviene contrastar con docs.claude.com actuales).

---

## 2026-06-12 — Registro de accesos visible solo para Manolo

### Añadido
- `wrangler.toml` — binding del namespace KV `CURSO_KV` (id `61fe6c03…`) para persistir el registro de accesos.
- `functions/_middleware.js` — registro de eventos por usuario en KV: cada **inicio de sesión** y, como máximo una vez por hora, un evento de **actividad** (con fecha, dispositivo aproximado, IP y país). Nuevo panel **`/admin/accesos`** que muestra las conexiones y accesos de Javier; solo accesible con la sesión del administrador (`AUTH_ADMIN`, por defecto `manolo`) — cualquier otro usuario recibe 403. Se conservan los últimos 200 eventos por usuario y el registro nunca interrumpe la navegación si KV no está disponible.
- `assets/progreso.js` — enlace "Registro de accesos" en la página "Mi progreso", visible únicamente cuando la sesión es de Manolo (la restricción real la impone el servidor).

---

## 2026-06-12 — Acceso multiusuario, progreso individual y podcasts en español

### Añadido
- `functions/_middleware.js` reescrito: el Basic Auth de usuario único se sustituye por una **pantalla de login propia** con sesión por cookie firmada (HMAC-SHA256, 30 días) y soporte para **varios usuarios** (Javier y Manolo). Credenciales en la variable de entorno `AUTH_USERS` de Cloudflare Pages (formato `usuario:contraseña;usuario:contraseña`) más un `AUTH_SECRET` para firmar cookies. Nuevas rutas `/acceso` (login) y `/salir` (logout). Las contraseñas **no** se guardan en el repositorio.
- `assets/progreso.js` — **historial de avance por usuario**: botón "Marcar como completada" en cada lección y resumen por módulos en la nueva página "Mi progreso". El avance se guarda en localStorage, con clave separada por usuario (cookie `curso_user` que deja el middleware). La lista de lecciones se deriva del índice de búsqueda de MkDocs, sin manifiesto manual. Limitación documentada: el almacenamiento es por navegador/dispositivo (sin sincronización entre iPhone y ordenador); el plan B si hiciera falta es Cloudflare KV.
- `mi-progreso.md` (+ symlink en `docs/`) — página "Mi progreso" añadida a la navegación.
- Recursos nuevos en `recursos/enlaces.yaml` (catálogo pasa de 64 a 66): `podcast-el-test-de-turing` (El Test de Turing — IA aplicada a negocio) y `podcast-ia-pocho-costa` (Inteligencia Artificial, de Pocho Costa). URLs verificadas el 2026-06-12.

### Actualizado
- `recursos/creadores-espanol.md` — nueva sección "Podcasts" con fichas de ambos.
- `modulos/01-fundamentos-ia/README.md` y `modulos/04-productividad/README.md` — los dos podcasts enlazados como contenido extra en español en "Recursos clave".
- `mkdocs.yml` — carga `assets/progreso.js` y añade "Mi progreso" a la navegación.

### Notas
- En Cloudflare Pages hay que definir `AUTH_USERS` y `AUTH_SECRET` y eliminar las antiguas `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` (el middleware falla cerrado si faltan las nuevas).

---

## 2026-05-09 — Módulo 02 (AI Fluency): primeras 4 lecciones

### Añadido
- `modulos/02-ai-fluency/01-que-es-alfabetizacion-ia.md` — definición operativa de alfabetización IA, diferencias con tech literacy clásica, por qué importa ahora, las 4 D como avance, señales de infra/sobre-alfabetización. Incluye autoevaluación inicial (1–5) en las cuatro dimensiones.
- `modulos/02-ai-fluency/02-framework-4-dimensiones.md` — presentación detallada del framework: Delegación, Descripción, Discernimiento, Diligencia. Por qué son cuatro y no tres ni cinco, cómo diagnosticar qué dimensión falla en una interacción concreta, cómo encaja con otros frameworks de prompting.
- `modulos/02-ai-fluency/03-delegacion.md` — espectro de cinco niveles de autonomía (de 0 sin IA a 5 totalmente autónoma), tres heurísticas (coste manual, coste de error, criterio humano), patrones de buena y mala delegación, distinción crítica entre delegar tarea y delegar responsabilidad.
- `modulos/02-ai-fluency/04-descripcion.md` — cinco componentes esenciales del prompt (contexto, tarea, restricciones, ejemplos, cláusula de incertidumbre), antes/después comparado, iterar prompt vs iterar conversación, rol explícito y formato exacto.

### Actualizado
- `modulos/02-ai-fluency/README.md` — lecciones 01–04 pasan de `pendiente` a `borrador` y se enlazan.
- `mkdocs.yml` — Módulo 02 ahora tiene sub-navegación con sus cuatro primeras lecciones, igual estructura que Módulo 01.

### Pendiente
- Lecciones 05–08 del módulo 02 (Discernimiento, Diligencia, errores típicos, casos aplicados). Se redactarán cuando el lector retome.

---

## 2026-05-09 — Novena lección del Módulo 01 (módulo completo en borrador)

### Añadido
- `modulos/01-fundamentos-ia/09-cuando-no-usar-llm.md` — lección de cierre del módulo. Plantea el problema del péndulo (sobreuso/infrauso), siete categorías donde un LLM es la herramienta equivocada (precisión absoluta, reproducibilidad estricta, criticidad sin verificación, herramienta especializada superior, dependencia de información actual, coste de prompt > coste manual, ground truth verificable), tres heurísticas rápidas de decisión, contraste con patrones donde sí brilla, y enlaza con la entrega del módulo. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 09 pasa de `pendiente` a `borrador` y se enlaza. Cabecera marca el módulo como "completo en borrador".
- `mkdocs.yml` — añadida la lección 09 a la navegación del Módulo 01.

### Notas
- El **Módulo 01 — Fundamentos de IA y LLMs** queda con sus 9 lecciones redactadas en estado `borrador`. Entrega del módulo (ensayo de 500–800 palabras) sigue pendiente del lector.

---

## 2026-05-09 — Octava lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/08-limitaciones-llm.md` — lección sobre las tres limitaciones canónicas (alucinación, cutoff, sesgo) más cuatro secundarias importantes (ventana de contexto/lost-in-the-middle, aritmética, long tail, no-determinismo, sensibilidad al fraseo, privacidad). Para cada una: qué es, por qué pasa, cómo se manifiesta, mitigaciones reales y mitigaciones que no funcionan. Cierra con regla operativa "borrador sí, decisión final no" y lista de tareas que nunca delegar sin verificación. Ejercicio: diseñar un mini-protocolo de uso para una pregunta concreta del lector. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 08 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 08 a la navegación del Módulo 01.

---

## 2026-05-09 — Séptima lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/07-versiones-modelos.md` — lección breve sobre cómo leer un identificador de modelo Claude (familia + generación major.minor + snapshot YYYYMMDD), distinción entre alias (`-latest`) y snapshot fijo, ciclo de vida de un modelo y advertencias para producción. Incluye ejercicio de ir a docs.claude.com y copiar IDs vigentes. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 07 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 07 a la navegación del Módulo 01.

---

## 2026-05-09 — Sexta lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/06-familia-modelos-claude.md` — lección sobre los tres tamaños (Opus, Sonnet, Haiku) dentro de cada generación: por qué tres y no uno, caracterización de cada uno por capacidad/latencia/coste, heurística práctica de elección (empezar por Sonnet), patrones de combinación (router, cascada, pre/post-procesado), y advertencia clave: el Sonnet de la generación N suele igualar al Opus de la N–1. Incluye ejercicio con tabla volumen/coste-de-error/latencia para tres tareas reales del lector. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 06 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 06 a la navegación del Módulo 01.

---

## 2026-05-09 — Quinta lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/05-historia-anthropic.md` — lección contextual sobre Anthropic: origen (salida de OpenAI en 2021, equipo fundador con los Amodei, Tom Brown, Jack Clark, Jared Kaplan, Chris Olah), forma jurídica PBC, cronología de modelos Claude (1 → 4.7), financiación (Amazon y Google como inversores principales), posicionamiento frente a competidores (OpenAI, Google DeepMind, Meta, Mistral/xAI), decisiones distintivas (closed weights, foco enterprise, multi-cloud, Responsible Scaling Policy) y críticas habituales. Incluye ejercicio de lectura crítica del RSP. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 05 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 05 a la navegación del Módulo 01.

---

## 2026-05-09 — Cuarta lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/04-constitutional-ai.md` — lección sobre Constitutional AI: el problema que resuelve respecto al RLHF puro, las dos fases (SL con autocrítica + RL con RLAIF), qué es la "constitución" y de dónde salen sus principios, la variante Collective Constitutional AI, cómo se manifiesta en Claude y críticas legítimas (sesgo de redactores, opacidad de aplicación, sobre-rechazo, constitutional drift). Incluye ejercicio donde el lector escribe su propio principio y observa el trade-off útil/inofensivo. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 04 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 04 a la navegación del Módulo 01.

---

## 2026-05-09 — Hypothes.is: grupo privado configurado

### Actualizado
- `assets/hypothesis-config.js` — reemplazado el placeholder por el GRUPO_ID real (`GMWBEiXG`, grupo `curso-claude`). Al abrir el sidebar de Hypothes.is en cualquier lección, ya queda enfocado en el grupo privado en lugar de "Public".
- `README.md` — sección "Anotaciones" actualizada: el setup ya no incluye reemplazar placeholder; ahora solo pide cuenta + entrar al grupo privado.

---

## 2026-05-09 — Hypothes.is con grupo privado por defecto (pendiente de ID)

### Añadido
- `assets/hypothesis-config.js` — define `window.hypothesisConfig` con `focus.group` para que el sidebar de Hypothes.is se enfoque en un grupo privado del usuario al abrirse, en lugar del grupo "Public". Reduce el riesgo de anotar públicamente por error.
- `docs/assets` — symlink a `../assets` para que MkDocs sirva el archivo bajo `/assets/` en el sitio.

### Actualizado
- `mkdocs.yml` — `extra_javascript` ahora carga `assets/hypothesis-config.js` ANTES de `embed.js` (orden importa: el embed consulta `window.hypothesisConfig` al arrancar). Ambos scripts cargan síncronos para garantizar el orden.
- `README.md` — sección "Anotaciones" reescrita con el nuevo flujo: el setup ahora incluye reemplazar `__GRUPO_PRIVADO_PENDIENTE__` por el ID real del grupo privado.

### Pendiente
- **Reemplazar el placeholder `__GRUPO_PRIVADO_PENDIENTE__` en `assets/hypothesis-config.js`** por el ID real del grupo privado de Hypothes.is una vez creado. Hasta entonces, el sidebar arranca en "Public" y conviene no anotar.

---

## 2026-05-09 — Anotaciones inline con Hypothes.is

### Añadido
- `mkdocs.yml` — bloque `extra_javascript` que carga `https://hypothes.is/embed.js` (async). El sitio público muestra ahora el sidebar de Hypothes.is en cada página, permitiendo subrayar texto y dejar notas inline.
- `README.md` — sección **"Anotaciones (Hypothes.is)"** con setup paso a paso (cuenta + grupo privado obligatorio para mantener notas privadas), uso, alternativa con extensión de navegador y nota de privacidad sobre el JS de terceros.

### Actualizado
- `mkdocs.yml` — desactivada la feature `navigation.instant`. Es incompatible con la integración de Hypothes.is (los scripts de terceros que se enganchan al ciclo de vida de la página se rompen con la navegación tipo SPA). El coste es transiciones de página un pelín más lentas; el beneficio es que las anotaciones funcionan al cambiar de lección.

### Notas
- Las notas se guardan en servidores de Hypothes.is, no en este repo. Para mantenerlas privadas hay que crear y usar un grupo privado tras el registro; las anotaciones por defecto son públicas en el feed global.

---

## 2026-05-09 — Tercera lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/03-preentrenamiento-fine-tuning-rlhf.md` — lección sobre las tres fases del entrenamiento de un LLM moderno: preentrenamiento autosupervisado, fine-tuning supervisado (SFT / instruction tuning) y RLHF (modelo de recompensa + PPO). Incluye preludio a Constitutional AI y ejercicio comparativo de tres encuadres de prompt sobre la misma pregunta. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 03 pasa de `pendiente` a `borrador` y se enlaza.
- `mkdocs.yml` — añadida la lección 03 a la navegación del Módulo 01.

---

## 2026-05-08 — Script de arranque local

### Añadido
- `iniciar-curso.sh` — script ejecutable en la raíz que comprueba dependencias, arranca el servidor MkDocs (`http://127.0.0.1:8000/`) y abre el navegador automáticamente. Avisa si el puerto 8000 ya está ocupado.

---

## 2026-05-08 — Segunda lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/02-arquitectura-transformer.md` — lección sobre la arquitectura Transformer con intuición sin matemáticas: del problema de las RNN al mecanismo de atención, multi-head, apilamiento de capas y por qué Claude es decoder-only. Incluye ejercicio sobre resolución de pronombres como ejemplo práctico de atención. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 02 pasa de `pendiente` a `borrador` y se enlaza.

---

## 2026-04-29 — Lecciones nuevas sobre GitHub en Módulos 06 y 09

### Añadido
- Módulo 06 — nueva lección 11: *"Higiene de Git con IA: ramas, PRs y revisión de diffs generados"* (35 min). Cubre el hueco práctico entre la integración Claude Code↔GitHub (lección 10) y el manejo de repos grandes (ahora 12). Las lecciones 11–14 se desplazan a 12–15.
- Módulo 09 — nueva lección 11: *"Publicar tu Skill (o MCP server) en GitHub: estructura del repo y descubribilidad"* (30 min). Apoya la entrega del módulo (*"una skill propia publicable"*). Las lecciones 11–14 se desplazan a 12–15.

### Actualizado
- `progreso.md` — contadores corregidos por módulo (el conteo previo era erróneo: solo capturaba lecciones 01–09 por una regex defectuosa). Total real: **161 lecciones planificadas** (no 118).

### Notas
- Los huecos quedan reservados con título y duración estimada; lecciones aún sin redactar (`📝`).

---

## 2026-04-29 — Sistema de seguimiento de progreso

### Añadido
- `progreso.md` — fuente única de verdad sobre mi avance: cabecera con próxima lección, mapa de los 14 módulos con contadores, detalle por lección del módulo activo, histórico de módulos completados.
- `bitacora.md` — diario libre para apuntes, dudas y conexiones por sesión.

### Actualizado
- `CLAUDE.md` — añadidas instrucciones para que Claude Code lea `progreso.md` al inicio de cada sesión y mantenga el archivo al día cuando le diga *"marca la lección X como completada"*.
- `mkdocs.yml` — `progreso.md` y `bitacora.md` quedan excluidos del sitio web (privados, solo en el repo).

---

## 2026-04-24 — Migración a Cloudflare Pages con protección Basic Auth

### Añadido
- `functions/_middleware.js` — middleware de Cloudflare Pages Functions que exige HTTP Basic Auth en cada petición. Credenciales almacenadas en variables de entorno (`BASIC_AUTH_USER` en plaintext, `BASIC_AUTH_PASS` como secret) configuradas en el dashboard de Cloudflare Pages.
- Proyecto `curso-claude` creado en Cloudflare Pages con auto-deploy desde el repo.
- Sitio privado en https://curso-claude.pages.dev/ (pide usuario y contraseña).

### Eliminado
- `.github/workflows/deploy.yml` — el deploy lo hace Cloudflare Pages directamente desde el repo; ya no necesitamos GitHub Actions.
- GitHub Pages del repo desactivado (la URL `https://mafernandez-create.github.io/curso-claude/` ya no sirve contenido).

### Actualizado
- `README.md` — reemplaza la URL pública de GitHub Pages por la URL privada de Cloudflare Pages, documenta usuario/contraseña y cómo rotarla.

### Notas
- Motivo del cambio: GitHub Pages sobre repo público no permite autenticación nativa. Cloudflare Pages con middleware de Basic Auth es 100 % gratis (sin tarjeta) y cumple la necesidad de "solo para mí".
- Zero Trust con One-Time PIN quedó descartado porque Cloudflare pide método de pago incluso en el plan Free.

---

## 2026-04-24 — Publicación del curso como sitio web

### Añadido
- `mkdocs.yml` — configuración de [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) en español, con búsqueda, modo oscuro y navegación completa por los 14 módulos.
- `requirements.txt` — dependencia `mkdocs-material`.
- `docs/` — carpeta con enlaces simbólicos al contenido real (sin duplicar ficheros). **No editar directamente.**
- `.github/workflows/deploy.yml` — despliegue automático a GitHub Pages en cada push a `main`.
- `.gitignore` — excluye `site/`, macOS y overrides locales.
- Repo publicado en https://github.com/mafernandez-create/curso-claude.
- Sitio en vivo: https://mafernandez-create.github.io/curso-claude/.

### Actualizado
- `README.md` — instrucciones para consultar el curso online y localmente con `mkdocs serve`.

---

## 2026-04-23 — Primera lección del Módulo 01

### Añadido
- `modulos/01-fundamentos-ia/01-que-es-un-llm.md` — lección inicial sobre qué es un LLM y cómo funciona a grandes rasgos (predicción de siguiente token, parámetros/datos/cómputo, qué NO hace un LLM). Incluye ejercicio de divulgación a público no técnico. Estado: borrador.

### Actualizado
- `modulos/01-fundamentos-ia/README.md` — la lección 01 pasa de `pendiente` a `borrador` y se enlaza.

---

## 2026-04-23 — Ficha detallada de repositorios GitHub

### Añadido
- `recursos/github-repositorios.md` — archivo dedicado con reseñas de los 7 repos oficiales de Anthropic y las 8 listas awesome principales de la comunidad. Separa oficiales de comunidad y propone orden de exploración.

### Actualizado
- `README.md` — índice de recursos ahora incluye el nuevo archivo.
- `CLAUDE.md` — estructura del repo descrita incluye el nuevo archivo.

---

## 2026-04-23 — Creación del proyecto

### Añadido
- Estructura inicial del repositorio (CLAUDE.md, README, plan de estudio).
- Catálogo inicial de 52 recursos en `recursos/enlaces.yaml`.
- Archivos temáticos: cursos externos, libros, newsletters, creadores en español, papers, comunidades.
- 14 módulos con sus respectivos README y plan de lecciones.
- Plantillas: lección, nota técnica, resumen de paper, proyecto práctico.
- Skills personalizadas para Claude Code: `actualizar-recursos`, `generar-leccion`, `resumir-paper`.
- Comandos slash: `/verificar-enlaces`, `/resumen-semanal`, `/nuevo-modulo`.

### Modelo de referencia inicial
- Claude Opus 4.7 (vigente a fecha de creación).

---

<!--
Plantilla para añadir nuevas entradas:

## YYYY-MM-DD — [título opcional del bloque]

### Añadido
- ...

### Actualizado
- ...

### Obsoleto
- ...

### Corregido
- ...
-->
