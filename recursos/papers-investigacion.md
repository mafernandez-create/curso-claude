# Papers de investigación y recursos académicos

> Selección de lecturas académicas relevantes para entender Claude a nivel profundo. No son imprescindibles para uso práctico, pero dan una base sólida para los módulos 01 y 13.
>
> **Última revisión:** 2026-04-23

---

## Dónde encontrar papers

### arXiv.org

URL: https://arxiv.org/

Repositorio de preprints (borradores antes de publicación formal). En IA es la fuente principal porque los ciclos de revisión tradicionales son demasiado lentos para este campo.

**Categorías relevantes:**
- `cs.CL` — Computation and Language
- `cs.AI` — Artificial Intelligence
- `cs.LG` — Machine Learning

**Autores clave a seguir:**
- Dario Amodei (CEO de Anthropic, coautor de papers fundacionales)
- Chris Olah (Interpretability Lead en Anthropic)
- Jared Kaplan (cofundador de Anthropic, coautor del paper de scaling laws)
- Sam McCandlish
- Tom Brown (coautor del paper de GPT-3)

### Transformer Circuits Thread

URL: https://transformer-circuits.pub/

Publicación del equipo de interpretabilidad de Anthropic. Técnica y extensa, pero con excelentes visualizaciones. Es una de las mejores formas de entender qué está pasando *dentro* de un modelo como Claude.

### Anthropic Research

URL: https://www.anthropic.com/research

La página oficial agrupa publicaciones por equipo: Interpretability, Alignment, Societal Impacts, Frontier Red Team. Incluye resúmenes accesibles de los papers.

---

## Papers fundacionales para comprender Claude

Esta lista son los "must-reads" para entender conceptualmente el producto. No hace falta leerlos enteros ni entender cada detalle matemático.

### 1. "Constitutional AI: Harmlessness from AI Feedback" (Anthropic, 2022)

- **arXiv:** https://arxiv.org/abs/2212.08073
- **Relevancia:** módulos 01 y 13.
- **Qué explica:** el método con el que Anthropic entrena a Claude para ser útil y seguro sin depender exclusivamente de feedback humano. La "constitución" que da nombre al método.
- **Lectura recomendada:** abstract + secciones 1–3. El resto es para especialistas.

### 2. "Training language models to follow instructions with human feedback" (OpenAI, 2022)

- **arXiv:** https://arxiv.org/abs/2203.02155
- **Relevancia:** módulo 01.
- **Qué explica:** el RLHF (Reinforcement Learning from Human Feedback), técnica que hizo viable ChatGPT y está en la base de todos los LLMs modernos, Claude incluido.

### 3. "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet" (Anthropic, 2024)

- **Enlace:** https://transformer-circuits.pub/2024/scaling-monosemanticity/
- **Relevancia:** módulo 13.
- **Qué explica:** cómo el equipo de interpretabilidad extrae "features" interpretables del interior de Claude 3 Sonnet. El famoso experimento del "Golden Gate Claude".
- **Lectura recomendada:** visualizaciones + texto introductorio. La parte técnica es densa pero las imágenes lo cuentan muy bien.

### 4. "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning" (Anthropic, 2023)

- **Enlace:** https://transformer-circuits.pub/2023/monosemantic-features/
- **Relevancia:** módulo 13.
- **Qué explica:** predecesor del anterior. Más sencillo de entender si se lee en orden.

### 5. "Attention Is All You Need" (Vaswani et al., 2017)

- **arXiv:** https://arxiv.org/abs/1706.03762
- **Relevancia:** módulo 01.
- **Qué explica:** el paper que introduce la arquitectura Transformer, base de todos los LLMs modernos. Clásico indiscutible.

### 6. "Language Models are Few-Shot Learners" (GPT-3, OpenAI, 2020)

- **arXiv:** https://arxiv.org/abs/2005.14165
- **Relevancia:** módulo 01.
- **Qué explica:** el paper que marcó el inicio de la era de los LLMs de uso general.

### 7. Scaling Laws — "Scaling Laws for Neural Language Models" (Kaplan et al., 2020)

- **arXiv:** https://arxiv.org/abs/2001.08361
- **Relevancia:** módulo 01.
- **Qué explica:** por qué "hacer los modelos más grandes" funciona tan bien. Uno de los coautores, Jared Kaplan, es cofundador de Anthropic.

---

## Papers recientes sobre agentes y MCP

### "Mapping Technical Safety Research at AI Companies: A literature review and incentives analysis"

- **arXiv:** https://arxiv.org/abs/2409.07878
- **Relevancia:** módulo 13.
- **Qué explica:** panorama de la investigación en seguridad publicada por Anthropic, DeepMind y OpenAI. Útil para ubicarse.

### "AI Governance and Accountability: An Analysis of Anthropic's Claude"

- **arXiv:** https://arxiv.org/html/2407.01557v1
- **Relevancia:** módulo 13.
- **Qué explica:** análisis externo del enfoque de gobernanza de Anthropic usando el NIST AI Risk Management Framework.

---

## Cómo abordar un paper si nunca lo has hecho

1. **Lee el abstract** y decide si el tema te interesa.
2. **Mira la figura 1 y la conclusión.** Suelen resumir el mensaje clave.
3. **Lee la introducción entera.** Entender el problema ya es mucho.
4. **Saltéate la sección de métodos** la primera vez. Puedes volver si necesitas.
5. **Resumen personal:** apunta en 3 frases qué aprendiste. Si no puedes, probablemente no lo entendiste bien.

Puedes pedir a Claude Code que te ayude con cada paper usando la plantilla `plantillas/resumen-paper.md` y la skill `resumir-paper`.
