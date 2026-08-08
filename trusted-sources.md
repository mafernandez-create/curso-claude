# Fuentes autoritativas — curso-claude (curso personal sobre Claude, web MkDocs)

Este fichero lo consume el subagente `verificador-resultados`. Define qué cuenta
como fuente primaria/autoritativa para verificar datos de ESTE proyecto.

## Fuentes primarias (preferentes, en este orden)
1. **Documentación oficial de Anthropic/Claude** — `docs.anthropic.com` y `docs.claude.com`. Es LA fuente para modelos, capacidades, API, agentes, herramientas y buenas prácticas.
2. **Páginas oficiales de precios y modelos** — la pricing page y la model overview de Anthropic vigentes en la fecha de revisión.
3. **Anuncios y changelog oficiales de Anthropic** — release notes, blog de producto y novedades de la API/CLI.
4. **Documentación de Claude Code / Agent SDK** — cuando el curso explique la CLI, hooks, MCP, skills o el SDK.

## Reglas específicas de dominio
- Identificadores de modelo, precios por token, ventanas de contexto, límites de tasa y fechas de corte de conocimiento NUNCA se escriben de memoria: se toman SIEMPRE de la doc oficial vigente.
- Si el curso menciona un modelo concreto (Opus/Sonnet/Haiku y su versión), verificar que el id exacto exista y siga disponible según la doc oficial.
- Distinguir característica GA vs. beta/preview, y reflejar deprecaciones anunciadas.
- Ante conflicto entre el texto del curso y la doc oficial actual, prevalece la doc oficial; marcar el contenido del curso como desactualizado.

## NO son fuentes primarias
- La memoria del modelo o el conocimiento general sin comprobar.
- Blogs de terceros, tutoriales, hilos de X/Reddit o vídeos sobre Claude.
- Versiones cacheadas/antiguas de la pricing page.
- El propio curso citándose a sí mismo como prueba de un dato técnico.
