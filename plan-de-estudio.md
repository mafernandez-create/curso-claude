# Plan de estudio — Ruta de aprendizaje recomendada

> Diseñado para un perfil **mixto** (usuario + desarrollador + formador + fundamentos). No es lineal: cada fase tiene un orden recomendado, pero los módulos finales son ramificables según tu interés.

**Duración total estimada:** 80–120 horas de estudio activo (sin prisa, 3–6 meses a ritmo realista).

---

## Filosofía del plan

1. **Fundamentos primero, herramientas después.** No tiene sentido dominar la API si no entiendes cómo funciona un LLM.
2. **Teoría → práctica → reflexión.** Cada módulo se cierra con un ejercicio aplicado.
3. **Actualización continua.** El mundo Claude cambia cada mes; este plan presupone que revisarás el `changelog/` semanalmente.
4. **Profundización opcional.** Los módulos marcados con ⭐ son imprescindibles; los marcados con 🔹 son profundizaciones opcionales según interés.

---

## Fase 1 — Cimientos (≈ 15–20 h) ⭐

Objetivo: entender qué es Claude, qué lo distingue, cómo funciona por debajo y cómo se usa con criterio ético.

### Módulo 01 — Fundamentos de IA y LLMs
- Qué es un Large Language Model.
- Cómo se entrena Claude (preentrenamiento + RLHF + Constitutional AI).
- Historia de Anthropic y posicionamiento frente a OpenAI / Google.
- Limitaciones fundamentales de los LLMs (alucinaciones, cutoff, sesgo).
- Familia de modelos Claude: Opus / Sonnet / Haiku, versiones y casos de uso.

**Recursos principales:** documentación oficial, Wikipedia técnica, paper "Constitutional AI".

### Módulo 02 — AI Fluency: alfabetización IA
- Curso oficial de Anthropic: *AI Fluency: Framework & Foundations*.
- Principios de interacción efectiva con IA.
- Ética, seguridad y sesgos en el uso cotidiano.
- Cómo evaluar outputs críticamente.

**Entrega:** breve ensayo propio (500 palabras) aplicando el framework a un caso real.

---

## Fase 2 — Dominio como usuario (≈ 15–20 h) ⭐

Objetivo: exprimir Claude como herramienta de trabajo diaria.

### Módulo 03 — Claude básico: interfaz y features
- Curso oficial: *Claude 101*.
- Proyectos, Artefactos, modo Investigación.
- Skills preconfiguradas (Excel, Word, PowerPoint, PDF).
- Conectores con apps de terceros (Google Drive, Slack, Gmail…).
- Diferencia entre planes (Free / Pro / Max / Team / Enterprise).

### Módulo 04 — Productividad con Claude
- *Introduction to Claude Cowork* (curso oficial).
- Claude en Chrome, Excel, Word, Slack.
- Diseño de workflows personales.
- Automatización de tareas recurrentes con plugins y skills.

**Entrega:** construye 3 workflows propios documentados (uno para escritura, uno para análisis de datos, uno para revisión de documentos).

### Módulo 05 — Prompt Engineering avanzado
- Guía oficial de Anthropic sobre prompting.
- Técnicas clave: XML tags, few-shot, chain-of-thought, role prompting, prefill.
- Extended thinking: cuándo y cómo.
- Prompt caching para reducir costes.
- Evaluación sistemática de prompts.

**Entrega:** biblioteca personal de 15–20 prompts plantilla bien documentados.

---

## Fase 3 — Claude como desarrollador (≈ 25–35 h) ⭐

Objetivo: saber construir con Claude, no solo usarlo.

### Módulo 06 — Claude Code
- Curso oficial: *Claude Code in Action* (tiene subtítulos en español).
- Instalación y configuración (Node.js, autenticación).
- `CLAUDE.md` como sistema de instrucciones.
- Comandos slash personalizados.
- Hooks y plan mode.
- Integración con GitHub, VS Code, JetBrains.

### Módulo 07 — API de Claude
- Curso oficial: *Building with the Claude API*.
- Primeros pasos con SDK de Python y TypeScript.
- Messages API, streaming, system prompts.
- Tool use (function calling).
- Vision y PDFs.
- Batch processing, prompt caching.
- Gestión de errores y rate limits.

**Entrega:** un chatbot básico propio con RAG sobre tus documentos.

### Módulo 08 — Model Context Protocol (MCP)
- Cursos oficiales: *Introduction to MCP* + *MCP Advanced Topics*.
- Concepto y arquitectura de MCP.
- Construir un servidor MCP propio.
- Los tres primitivos: tools, resources, prompts.
- Sampling, notifications, control de acceso.
- Servidores MCP de la comunidad.

**Entrega:** un servidor MCP propio que exponga una API que te interese personalmente.

### Módulo 09 — Skills y subagentes
- Cursos oficiales: *Introduction to Agent Skills* + *Introduction to Subagents*.
- Qué son las Skills y cuándo usarlas vs. prompts vs. tools.
- Crear, empaquetar y distribuir skills.
- Subagentes: delegación y gestión de contexto.
- Orquestación multi-agente.

**Entrega:** una skill propia publicable.

---

## Fase 4 — Especialización (≈ 15–25 h) 🔹

Módulos opcionales que eliges según dirección profesional.

### Módulo 10 — Cloud: AWS Bedrock y Google Vertex AI 🔹
- Cursos oficiales: *Claude with Amazon Bedrock* + *Claude with Google Vertex AI*.
- Integración empresarial.
- Costes y comparativa de plataformas.
- Seguridad y compliance.

**Recomendado si:** trabajas o vas a trabajar en entornos corporativos cloud.

### Módulo 11 — Casos prácticos avanzados 🔹
- Sistemas RAG complejos.
- Agentes autónomos con gestión de estado.
- Aplicaciones multimodales (texto + imagen + audio).
- Computer use / browser automation.
- Ejemplos de Claude Cookbook.

**Recomendado si:** quieres construir productos reales con Claude.

### Módulo 12 — Formación y docencia 🔹
- Cursos oficiales: *Teaching AI Fluency*, *AI Fluency for Educators*.
- Diseño de sesiones formativas sobre IA.
- Evaluación de aprendizaje sobre IA.
- Materiales y actividades aplicables a aula.

**Recomendado si:** vas a enseñar Claude a otras personas (equipo, alumnos, clientes).

---

## Fase 5 — Pensamiento crítico (≈ 10–15 h) ⭐

Transversal al resto; se puede estudiar en paralelo desde el principio.

### Módulo 13 — Seguridad, ética y alineación
- Alignment, Constitutional AI, Sparse Autoencoders.
- Research de interpretabilidad de Anthropic.
- Riesgos conocidos: jailbreaks, prompt injection, misuse.
- Usage policies de Anthropic.
- Debates abiertos: regulación, open source vs closed source.

**Entrega:** posición propia argumentada sobre una cuestión ética concreta.

---

## Ruta corta (solo usuario, ≈ 25 h)

Si solo quieres aprovechar Claude a nivel profesional sin meterte en código:
**01 → 02 → 03 → 04 → 05 → 13**

## Ruta corta (solo desarrollador, ≈ 40 h)

Si ya dominas Claude como usuario y solo te interesa construir:
**05 → 06 → 07 → 08 → 09 → 11 (selección)**

## Ruta corta (solo formador, ≈ 20 h)

Para preparar una formación a terceros:
**01 → 02 → 03 → 05 → 12 → 13**

---

## Seguimiento de progreso

Marca tu avance editando este archivo o creando un `progreso.md` aparte con:

```yaml
modulo_01: completado 2026-04-30
modulo_02: en_curso
modulo_03: pendiente
...
```

Y pide a Claude Code revisarlo para recomendarte el siguiente paso.
