---
titulo: "Integración con Claude Code y Claude Desktop"
modulo: "08-mcp"
orden: 13
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Integración con Claude Code y Claude Desktop

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Conectar servidores MCP a **Claude Desktop** y **Claude Code**.
- [ ] Entender qué cambia al usar MCP en cada uno.
- [ ] Combinar tus propios servidores con tu flujo de trabajo.

> **Nota:** los pasos de configuración cambian entre versiones; sigue [docs.claude.com](https://docs.claude.com) para los detalles actuales.

## Prerrequisitos

- Lecciones 04 y 11 del módulo. Módulo 06 (Claude Code).

## Contexto

Los clientes MCP de Anthropic más usados son **Claude Desktop** (la app de escritorio) y **Claude Code** (el agente de terminal/IDE del Módulo 06). Conectarles servidores MCP amplía lo que pueden hacer con tus herramientas y datos.

## Contenido principal

### 1. Claude Desktop como cliente

Claude Desktop puede conectar servidores MCP para acceder, desde el chat, a tus herramientas (archivos, APIs, datos). Declaras los servidores en su configuración y, tras reiniciar, sus capacidades quedan disponibles en la conversación.

### 2. Claude Code como cliente

Claude Code también es cliente MCP: puedes conectarle servidores que le den capacidades extra durante el desarrollo (consultar una base de datos, una API interna). Encaja con su naturaleza de agente que opera en tu entorno (Módulo 06).

### 3. Tus servidores en tu flujo

Lo potente: conectar **tus propios servidores** (los que construyes en este módulo) a estos clientes. Así, las herramientas y datos que te importan están disponibles allí donde trabajas, sin integraciones a medida.

## Ejemplo aplicado

Conectas tu servidor MCP de notas a Claude Desktop: ahora, en cualquier conversación, puedes pedir "busca en mis notas lo que decidimos sobre el proyecto X" y Claude usa tu servidor para responder.

## Ejercicio práctico

1. Conecta un servidor MCP (existente o tuyo) a Claude Desktop o Claude Code.
2. Úsalo en una conversación/sesión real.
3. **Criterio de éxito:** tus capacidades MCP están disponibles en tu cliente habitual.

## Errores comunes

- **No reiniciar el cliente** tras configurar un servidor: a veces no aparece hasta entonces.
- **Conectar servidores sin revisar permisos:** repasa la lección 12.

## Resumen en 3 frases

1. Claude Desktop y Claude Code son clientes MCP a los que puedes conectar servidores.
2. Conectar tus propios servidores lleva tus herramientas y datos a donde ya trabajas.
3. Sigue la doc para los pasos de configuración y respeta las reglas de seguridad.

## Recursos para profundizar

- [docs.claude.com — MCP en Claude Code/Desktop](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 06 — Claude Code.

## Siguiente lección

➡️ `14-servidores-comunidad`

## Fuentes

- [docs.claude.com — MCP](https://docs.claude.com) — consultado 2026-06-14.
