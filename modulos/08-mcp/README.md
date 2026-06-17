# Módulo 08 — Model Context Protocol (MCP)

**Eje:** Desarrollador
**Tiempo estimado:** 8–12 h
**Prerrequisitos:** Módulo 07. Python intermedio.
**Última actualización:** 2026-06-14 (módulo completo en borrador)

## Objetivo

Entender el Model Context Protocol: qué problema resuelve, cómo se diseñan servidores y clientes, y cómo encaja con Claude Code, la API y el ecosistema de agentes. Al terminar debes ser capaz de construir y exponer un servidor MCP propio útil para ti.

## Lecciones

| Nº | Título | Estado | Tiempo |
|----|--------|--------|--------|
| 01 | [Qué problema resuelve MCP y por qué importa](01-que-resuelve-mcp.md) | borrador | 25 min |
| 02 | [Arquitectura: clientes, servidores y transports](02-arquitectura-mcp.md) | borrador | 30 min |
| 03 | [Los tres primitivos: Tools, Resources y Prompts](03-tres-primitivos.md) | borrador | 35 min |
| 04 | [Instalar y probar un servidor MCP existente](04-probar-servidor-existente.md) | borrador | 30 min |
| 05 | [Construir tu primer servidor MCP en Python](05-primer-servidor-python.md) | borrador | 45 min |
| 06 | [Definir Tools: esquema, validación y errores](06-definir-tools.md) | borrador | 40 min |
| 07 | [Exponer Resources: ficheros, APIs y datos](07-exponer-resources.md) | borrador | 30 min |
| 08 | [Prompts parametrizables](08-prompts-parametrizables.md) | borrador | 25 min |
| 09 | [Sampling: el servidor pide razonamiento al cliente](09-sampling.md) | borrador | 30 min |
| 10 | [Notifications y streaming](10-notifications-streaming.md) | borrador | 25 min |
| 11 | [Transports: stdio vs. HTTP/SSE](11-transports.md) | borrador | 25 min |
| 12 | [Control de acceso: permisos y seguridad](12-control-acceso.md) | borrador | 30 min |
| 13 | [Integración con Claude Code y Claude Desktop](13-integracion-claude.md) | borrador | 25 min |
| 14 | [Servidores MCP de la comunidad: qué explorar](14-servidores-comunidad.md) | borrador | 30 min |
| 15 | [Buenas prácticas y antipatrones](15-buenas-practicas.md) | borrador | 30 min |

## Recursos clave

Del catálogo:
- `introduction-mcp` ⭐ (curso oficial).
- `mcp-advanced` ⭐ (curso oficial avanzado).
- `mcp-spec` — especificación oficial y SDKs.
- `awesome-mcp-servers` — lista de la comunidad (~83k estrellas).
- `claude-cookbooks` — ejemplos de MCP.

## Entrega

Un **servidor MCP propio** que exponga una API o fuente de datos que te interese personalmente (p. ej. tu calendario, una API de algún servicio que usas, tu base de notas). Debe tener al menos 3 Tools bien definidas y pruebas manuales documentadas. Código en repositorio aparte, diseño documentado en `modulos/08-mcp/mi-servidor-mcp.md`.
