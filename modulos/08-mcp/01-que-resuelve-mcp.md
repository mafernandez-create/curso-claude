---
titulo: "Qué problema resuelve MCP y por qué importa"
modulo: "08-mcp"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Qué problema resuelve MCP y por qué importa

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **Model Context Protocol (MCP)** y qué problema resuelve.
- [ ] Entender la analogía del "puerto estándar" para conectar IA con herramientas.
- [ ] Distinguir MCP del *tool use* de la API (Módulo 07).

## Prerrequisitos

- Módulo 07, lección 06 (tool use).

## Contexto

Una IA es mucho más útil si puede acceder a tus herramientas y datos: tu calendario, tu base de notas, una API. El problema: **cada integración era a medida**. MCP estandariza ese puente para que cualquier app de IA hable con cualquier herramienta a través de **un mismo protocolo**.

## Contenido principal

### 1. El problema: integraciones N×M

Sin un estándar, cada app de IA (Claude, otras) tendría que construir una conexión específica para cada herramienta (Drive, GitHub, tu API…). Eso es un número enorme de integraciones a medida que nadie quiere mantener.

### 2. La solución: un protocolo común

MCP es un **protocolo abierto** que define una forma estándar de conectar modelos con herramientas y datos. A menudo se describe como **"el USB-C de la IA"**: un mismo conector para todo. Si tu herramienta "habla MCP", cualquier app compatible puede usarla sin integración a medida.

### 3. MCP vs. tool use de la API

- **Tool use (Módulo 07):** defines herramientas **dentro de tu propia aplicación** que usa la API.
- **MCP:** expones capacidades en un **servidor reutilizable** que **distintas** apps (Claude Desktop, Claude Code, otras) pueden conectar. Es interoperable y compartible.

No son rivales: MCP es una forma estandarizada y portable de aportar herramientas y contexto.

## Ejemplo aplicado

En este mismo curso has usado MCP sin darte cuenta: las herramientas externas que aparecen conectadas (calendario, correo, etc.) llegan vía servidores MCP. Tú las usas; el protocolo hace el puente.

## Ejercicio práctico

1. Piensa dos herramientas/datos tuyos que te gustaría que la IA pudiera usar.
2. Explica por qué un protocolo estándar es mejor que una integración a medida para cada una.
3. **Criterio de éxito:** sabes qué problema resuelve MCP y en qué se diferencia del tool use.

## Errores comunes

- **Confundir MCP con "otra API":** es un protocolo de interoperabilidad, no un producto.
- **Verlo como sustituto del tool use:** son complementarios.

## Resumen en 3 frases

1. MCP es un protocolo abierto que estandariza cómo las apps de IA se conectan a herramientas y datos.
2. Resuelve el caos de integraciones a medida: "el USB-C de la IA".
3. A diferencia del tool use interno de una app, un servidor MCP es reutilizable por distintas apps.

## Recursos para profundizar

- `introduction-mcp` (catálogo) — curso oficial.
- [modelcontextprotocol.io](https://modelcontextprotocol.io) — sitio del protocolo.

## Siguiente lección

➡️ `02-arquitectura-mcp`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
- [docs.claude.com — MCP](https://docs.claude.com) — consultado 2026-06-14.
