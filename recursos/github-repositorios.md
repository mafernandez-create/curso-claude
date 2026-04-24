# Repositorios GitHub

> Los repos de código son, junto con la documentación oficial, **la fuente más fiable y actualizada** del ecosistema Claude. Este archivo separa los oficiales de Anthropic (máxima fiabilidad) de las listas curadas por la comunidad (muy útiles, pero con criterio).
>
> **Última revisión:** 2026-04-23

---

## Repositorios OFICIALES de Anthropic

> Todos bajo la organización [`anthropics`](https://github.com/anthropics) en GitHub. Son mantenidos directamente por el equipo de Anthropic. Si tienes que confiar en algo, es aquí.

### 1. `anthropics/claude-cookbooks` ⭐ (imprescindible)

- **URL:** https://github.com/anthropics/claude-cookbooks
- **Qué es:** Colección de notebooks de Jupyter ejecutables con recetas para construir con Claude. Cada recipe es código que puedes correr y adaptar.
- **Módulos del curso:** 05 (prompt engineering), 07 (API), 11 (casos avanzados).
- **Qué encontrarás dentro:**
  - **Capabilities**: clasificación, RAG, resumen, tool use.
  - **Misc**: uso de imágenes, PDFs, caching, JSON mode, sub-agentes, moderación.
  - **Third-party integrations**: ejemplos con otras librerías.
  - **Skills**: plantillas de skills útiles.
- **Cuándo te será útil:**
  - Cuando quieras implementar algo específico (p. ej. un moderador de contenido o un sistema RAG) y prefieras empezar con código que funciona, no con documentación en abstracto.
  - Como referencia para patrones de producción (error handling, retries, caching).
- **Cómo empezar:**
  ```bash
  git clone https://github.com/anthropics/claude-cookbooks.git
  cd claude-cookbooks
  # Explora el README principal para ver la tabla de recetas
  # Abre la receta que te interese en Jupyter/VS Code
  ```
- **Requisitos:** API key de Anthropic, Python 3.10+, Jupyter.

---

### 2. `anthropics/claude-quickstarts` ⭐

- **URL:** https://github.com/anthropics/claude-quickstarts
- **Qué es:** Proyectos completos listos para desplegar. Son ejemplos de **aplicaciones** enteras, no recetas aisladas.
- **Módulos del curso:** 07 (API), 11 (casos avanzados).
- **Qué encontrarás dentro:**
  - Agente de soporte al cliente con acceso a base de conocimiento.
  - Analista financiero con visualización interactiva.
  - Control de ordenador (computer use) con herramienta y entorno completos.
  - Automatización de navegador.
- **Cuándo te será útil:**
  - Cuando quieras construir algo similar a uno de los ejemplos y te sirva de andamio.
  - Para entender cómo se estructura un proyecto real con Claude, más allá de un script suelto.
- **Cómo empezar:** cada proyecto tiene su propio README con instrucciones específicas. Clona el repo y entra en la carpeta del proyecto que te interese.

---

### 3. `anthropics/skills` ⭐

- **URL:** https://github.com/anthropics/skills
- **Qué es:** Repositorio público de Agent Skills oficiales. ~37.500 estrellas.
- **Módulos del curso:** 09 (Skills y subagentes).
- **Qué encontrarás dentro:** skills mantenidas por Anthropic para tareas comunes. Algunas ya aparecen preinstaladas en Claude (Excel, Word, PowerPoint, PDF) y aquí puedes ver cómo están construidas.
- **Cuándo te será útil:**
  - Para estudiar ejemplos de skills bien diseñadas cuando vayas a construir las tuyas.
  - Para aprender las convenciones exactas (estructura de SKILL.md, progressive disclosure, bundled resources).
- **Recomendación práctica:** antes de escribir tu primera skill, lee 2–3 skills de este repo completas. Es la mejor forma de entender cómo se hace.

---

### 4. `anthropics/anthropic-sdk-python`

- **URL:** https://github.com/anthropics/anthropic-sdk-python
- **Qué es:** SDK oficial de la Claude API en Python.
- **Módulos del curso:** 07 (API).
- **Cuándo te será útil:**
  - Si desarrollas en Python (caso mayoritario). Es la librería que usarás directamente.
  - Cuando algo no funcione como esperas y necesites mirar el código fuente para entender por qué.
- **Alternativa TypeScript:** `anthropics/anthropic-sdk-typescript`.
- **Otros SDKs oficiales:** Go, Java, Ruby, PHP, C#. Todos en la organización `anthropics`.

---

### 5. `anthropics/claude-code-sdk-python`

- **URL:** https://github.com/anthropics/claude-code-sdk-python
- **Qué es:** SDK de Claude Code en Python. Permite invocar Claude Code desde tu código Python, no solo como CLI interactivo.
- **Módulos del curso:** 06 (Claude Code), 09 (Skills/Subagentes).
- **Cuándo te será útil:**
  - Para automatizaciones: pipelines CI/CD que invocan Claude Code, scripts batch, integraciones.
  - Para construir herramientas que orquesten varios Claude Code en paralelo.
- **No lo confundas con** `anthropic-sdk-python` (ese es para la API raw; este es para Claude Code como herramienta).

---

### 6. `anthropics/claude-plugins-official`

- **URL:** https://github.com/anthropics/claude-plugins-official
- **Qué es:** Directorio oficial de plugins de calidad para Claude Code y Claude Cowork, mantenido por Anthropic.
- **Módulos del curso:** 06 (Claude Code), 04 (productividad).
- **Cuándo te será útil:**
  - Cuando busques extensiones probadas y seguras para tu workflow.
  - Como referencia de cómo se estructura un plugin publicable.
- **Relacionado:** `anthropics/claude-plugins-community` es el análogo para envíos de la comunidad (más amplio, menos curado).

---

### 7. `modelcontextprotocol/*` — (no es de Anthropic, pero sí oficial del protocolo)

- **URL principal:** https://modelcontextprotocol.io/
- **Organización GitHub:** https://github.com/modelcontextprotocol
- **Qué es:** Especificación oficial del Model Context Protocol + SDKs en Python, TypeScript, Go, Kotlin, Swift, Rust, Java.
- **Módulos del curso:** 08 (MCP).
- **Qué encontrarás dentro:**
  - `specification` — la spec formal del protocolo.
  - `python-sdk`, `typescript-sdk`, etc.
  - `servers` — servidores MCP de referencia (filesystem, fetch, memory, etc.).
  - `inspector` — herramienta para depurar servidores MCP.
- **Cuándo te será útil:**
  - Cuando quieras construir tu propio servidor MCP.
  - Para debuguear problemas de protocolo con `mcp-inspector`.
- **Nota:** MCP es un estándar abierto. Aunque nació con Anthropic, ya lo soportan varios clientes (Claude Desktop, Claude Code, Cursor, y otros).

---

## Listas "awesome" de la COMUNIDAD

> Estas listas son **recopilatorios curados** por voluntarios. Su valor es que ven más del ecosistema que cualquier persona individual. Su límite es que la calidad de lo que enlazan varía.
>
> Regla general: úsalas como **directorio para descubrir**, y verifica la calidad de cada recurso individual antes de adoptarlo.

### `hesreallyhim/awesome-claude-code` ⭐ (la más completa)

- **URL:** https://github.com/hesreallyhim/awesome-claude-code
- **Estrellas:** ~28.500
- **Qué es:** Lista de referencia de facto. Skills, hooks, slash-commands, agent orchestrators, aplicaciones y plugins para Claude Code.
- **Cuándo te será útil:**
  - Cuando quieras ver qué está haciendo la comunidad.
  - Buscando una herramienta concreta (p. ej. "un status line decente para Claude Code").
- **Módulos del curso:** 06, 09.

### `jqueryscript/awesome-claude-code`

- **URL:** https://github.com/jqueryscript/awesome-claude-code
- **Qué es:** Lista alternativa con enfoque en herramientas, integraciones IDE y frameworks.
- **Cuándo te será útil:** como segunda opinión cuando la anterior no tenga lo que buscas.

### `travisvn/awesome-claude-skills`

- **URL:** https://github.com/travisvn/awesome-claude-skills
- **Qué es:** Centrada específicamente en Skills (no Claude Code en general).
- **Módulos del curso:** 09.
- **Cuándo te será útil:** cuando vayas a construir tu propia skill y quieras inspiración concreta.

### `ComposioHQ/awesome-claude-skills`

- **URL:** https://github.com/ComposioHQ/awesome-claude-skills
- **Qué es:** Otra colección curada de Skills, mantenida por Composio. Criterio editorial distinto.
- **Módulos del curso:** 09.

### `VoltAgent/awesome-claude-code-subagents`

- **URL:** https://github.com/VoltAgent/awesome-claude-code-subagents
- **Qué es:** Lista especializada en subagentes de Claude Code (agentes especializados para roles concretos como revisor de seguridad, refactor, etc.).
- **Módulos del curso:** 09 (subagentes).
- **Cuándo te será útil:** cuando diseñes tu propio sistema multi-agente y quieras ver arquetipos de roles.

### `langgptai/awesome-claude-prompts`

- **URL:** https://github.com/langgptai/awesome-claude-prompts
- **Qué es:** Colección de prompts para Claude, organizados por categoría.
- **Módulos del curso:** 05 (prompt engineering).
- **Cuándo te será útil:** como inspiración para tu biblioteca personal de prompts. **No copies y pegues sin pensar**; evalúa si cada prompt encaja con tu caso.

### `punkpeye/awesome-mcp-servers`

- **URL:** https://github.com/punkpeye/awesome-mcp-servers
- **Estrellas:** ~83.000 (la más popular del conjunto).
- **Qué es:** Lista de servidores MCP de la comunidad, categorizados (productividad, datos, dev tools, etc.).
- **Módulos del curso:** 08 (MCP).
- **Cuándo te será útil:**
  - Para encontrar un servidor MCP existente antes de construir el tuyo.
  - Para ver qué integraciones ya tiene el ecosistema.

### `awesomeclaude.ai` (directorio web)

- **URL:** https://awesomeclaude.ai/
- **Qué es:** Portal web que agrupa y cruza las listas anteriores con una interfaz navegable.
- **Cuándo te será útil:** cuando quieras explorar categorías sin saltar entre repos distintos.

---

## Orden de exploración recomendado

Si vienes al ecosistema de GitHub por primera vez, este es el orden que menos tiempo te hará perder:

1. **`claude-cookbooks`** — para sentir cómo se usa la API en ejemplos reales.
2. **`claude-quickstarts`** — para ver proyectos completos.
3. **Documentación del SDK** que vayas a usar (`anthropic-sdk-python` o TypeScript).
4. **`anthropics/skills`** — cuando llegues al módulo 09, para entender cómo son las skills bien hechas.
5. **`modelcontextprotocol`** — cuando llegues al módulo 08.
6. **Las listas awesome** — cuando tengas una necesidad concreta, no antes. Son un pozo sin fondo donde se pierde mucho tiempo "explorando".

## Cómo clonar todo localmente (opcional)

Si quieres una copia local de referencia para consultar sin conexión o buscar con grep:

```bash
mkdir -p ~/referencia-claude && cd ~/referencia-claude

# Oficiales
git clone https://github.com/anthropics/claude-cookbooks.git
git clone https://github.com/anthropics/claude-quickstarts.git
git clone https://github.com/anthropics/skills.git
git clone https://github.com/anthropics/anthropic-sdk-python.git
git clone https://github.com/anthropics/claude-code-sdk-python.git
git clone https://github.com/anthropics/claude-plugins-official.git

# MCP
git clone https://github.com/modelcontextprotocol/specification.git
git clone https://github.com/modelcontextprotocol/servers.git
```

Luego puedes usar el comando `/verificar-enlaces` de este curso para que Claude Code te confirme que las URLs siguen vivas en cualquier momento.

## Mantenimiento de este archivo

La skill `actualizar-recursos` revisa periódicamente si aparecen repos nuevos relevantes en la organización `anthropics` o si alguna lista awesome cambia significativamente. Cuando eso pase, este archivo se actualiza y se deja nota en el changelog.
