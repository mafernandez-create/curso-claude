# Novedades del curso — 2026-07-04

> Informe generado por la skill `actualizar-recursos` (escaneo de fuentes oficiales
> de Anthropic: news, research, docs). Fuentes consultadas el 2026-07-04.
>
> **🔶 ESTADO: PENDIENTE DE CONFIRMAR.** Nada de lo de abajo se ha aplicado al curso.
> Estas son *propuestas*; el visto bueno lo das tú (Manolo). Cuando decidas, cambia
> este estado y anota dónde se aplicó cada una.

## Contexto respecto a informes anteriores

- `novedades-2026-06-22.md` quedó **IMPLEMENTADO** (confirmado).
- Este informe recoge solo lo **nuevo desde el 22 de junio**. No repite nada de allí.

---

## 1. 🚀 Claude Sonnet 5 (30 jun 2026) — *lo más importante*

- **Qué es:** nueva generación de la familia Sonnet (`claude-sonnet-5`). Anthropic lo
  posiciona como su Sonnet más "agéntico", con rendimiento cercano al de Opus 4.8 a
  menor coste.
- **Datos clave (verificados en docs oficiales):**
  - Precio introductorio **$2 / $10 por millón de tokens** (entrada/salida) hasta el
    **31 ago 2026**; después **$3 / $15**.
  - Ventana de contexto de **1M de tokens**, salida máxima **128k**.
  - **Cambios de comportamiento al migrar:** el *adaptive thinking* pasa a estar
    activado por defecto; el *extended thinking* manual (`thinking: {budget_tokens}`)
    se elimina y devuelve **error 400**; fijar `temperature`/`top_p`/`top_k` a valores
    no por defecto también devuelve **400**.
  - **Nuevo tokenizador**: genera ~**30% más tokens** para el mismo texto (impacta
    coste y límites; ojo al comparar precios con modelos anteriores).
  - Disponible en **API y Claude Code**.
- **Encaja en:** Módulo 06 (Claude Code), 07 (API — sobre todo los cambios de
  parámetros y el tokenizador), 03 (familia de modelos) y 05 (prompting: el cambio a
  *adaptive thinking* por defecto). ⚠️ Según el mantenimiento del `CLAUDE.md`, un
  release mayor obliga a revisar los módulos **03, 05, 06 y 07**.
- **Fuente:** [Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) ·
  [Release notes de la plataforma](https://platform.claude.com/docs/en/release-notes/overview) — consultado 2026-07-04.

## 2. 🌍 Fable 5 y Mythos 5 — acceso restaurado (1 jul 2026)

- **Qué es:** Anthropic **restaura el acceso** a Claude Fable 5 y Mythos 5 el 1 jul,
  tras la suspensión del 12 jun por los controles de exportación del Gobierno de EE. UU.
- **Encaja en:** Módulo 13 (seguridad/ética y geopolítica de los modelos) y Módulo 10
  (cloud/compliance). Buen caso real de cómo la regulación afecta a la disponibilidad.
- **Fuente:** [Redeploying Fable 5 y Mythos 5](https://www.anthropic.com/news/redeploying-fable-5-mythos-5)
  (nota fechada 30 jun; restauración efectiva el 1 jul) · release notes de la plataforma
  (1 jul 2026) — consultado 2026-07-04.

## 3. 🔬 Claude Science (30 jun 2026)

- **Qué es:** *workbench* de IA para investigadores: integra herramientas y paquetes de
  uso científico, genera artefactos auditables y da acceso flexible a cómputo.
- **Encaja en:** Módulo 11 (casos prácticos avanzados) como ejemplo de vertical
  especializada; mención ligera en Módulo 04 (productividad).
- **Fuente:** [Claude Science, an AI workbench for scientists](https://www.anthropic.com/news/claude-science-ai-workbench) — consultado 2026-07-04.

## 4. 🏷️ Claude Tag (23 jun 2026)

- **Qué es:** nueva función de **colaboración en equipo** con Claude.
- **Encaja en:** Módulo 03 (features de la interfaz) y Módulo 04 (productividad/trabajo
  en equipo). *Relevancia media — confirmar tras revisar el detalle de la función.*
- **Fuente:** anthropic.com/news, entrada de 23 jun 2026 — consultado 2026-07-04.

## 5. 🛡️ Marco de severidad de *jailbreaks* (2 jul 2026)

- **Qué es:** más detalles sobre las salvaguardas *cyber* de Fable 5 y un **marco para
  puntuar la severidad de los jailbreaks**, propuesto junto a Amazon, Microsoft y Google.
- **Encaja en:** Módulo 13 (seguridad y alineación) como material actualizado de
  *red-teaming* y evaluación de riesgos.
- **Fuente:** anthropic.com/news, entrada de 2 jul 2026 — consultado 2026-07-04.

---

## Recordatorio

**Nada de lo anterior se ha aplicado al curso.** Son propuestas para tu revisión. Cuando
las decidas, marca este archivo como implementado e indica en qué módulo entró cada una.
Prioridad sugerida: **#1 (Sonnet 5)** por delante del resto, por el impacto en módulos
03/05/06/07 y en coste (tokenizador nuevo).

---

> **Verificación:** las 5 novedades y sus datos (fechas, id de modelo, precios, ventana de
> contexto, cambios de API, tokenizador, atribuciones) se contrastaron con fuentes oficiales
> de Anthropic mediante el subagente `verificador-resultados` el 2026-07-04: todas
> **VERIFICADAS**. Se **excluyó** "Claude Corps" por ser del 11 jun 2026 (fuera de la ventana
> "desde el 22 de junio").
