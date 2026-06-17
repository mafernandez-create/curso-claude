---
titulo: "Arquitectura: clientes, servidores y transports"
modulo: "08-mcp"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Arquitectura: clientes, servidores y transports

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Identificar los roles de **cliente** y **servidor** en MCP.
- [ ] Entender qué es un **transport** y por qué hay varios.
- [ ] Dibujar el flujo de una conexión MCP.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

MCP sigue un modelo **cliente–servidor**. Entender quién hace qué es la base para construir o conectar servidores en las lecciones siguientes.

## Contenido principal

### 1. Cliente y servidor

- **Servidor MCP:** expone capacidades (herramientas, datos, plantillas). Lo construyes tú o lo provee un tercero. Por ejemplo, un servidor que da acceso a tu calendario.
- **Cliente MCP:** la **aplicación de IA** que se conecta al servidor para usar esas capacidades. Claude Desktop y Claude Code actúan como clientes MCP.

El **modelo** (Claude) vive del lado del cliente; el servidor solo ofrece capacidades, no "tiene" el LLM.

### 2. El transport: cómo se comunican

El **transport** es el canal por el que cliente y servidor intercambian mensajes. Los dos principales:
- **stdio:** comunicación local por entrada/salida estándar. El servidor corre en tu máquina como un proceso. Ideal para herramientas locales.
- **HTTP / SSE:** comunicación por red. El servidor está en un servidor remoto. Ideal para servicios compartidos o en la nube.

La lógica de las capacidades es la misma; cambia por dónde viajan los mensajes (lección 11).

### 3. El flujo

1. El cliente **inicia** la conexión con el servidor (por el transport elegido).
2. **Negocian** capacidades (qué ofrece el servidor).
3. El cliente **usa** las capacidades (invoca herramientas, lee recursos) según lo que el modelo necesita y el usuario permite.

## Ejemplo aplicado

Claude Code (cliente) se conecta por **stdio** a un servidor MCP local que expone tu sistema de archivos de notas. Cuando le pides "busca en mis notas X", el cliente usa una herramienta de ese servidor.

## Ejercicio práctico

1. Dibuja el esquema cliente–servidor–transport para un caso tuyo.
2. Decide si usarías stdio (local) o HTTP/SSE (remoto) y por qué.
3. **Criterio de éxito:** sabes quién es cliente, quién servidor y qué transport encaja.

## Errores comunes

- **Pensar que el servidor "tiene el modelo":** el LLM está del lado del cliente.
- **Elegir mal el transport:** local→stdio; compartido/remoto→HTTP/SSE.

## Resumen en 3 frases

1. MCP es cliente–servidor: el servidor expone capacidades, el cliente (la app de IA) las usa.
2. El transport es el canal: stdio para local, HTTP/SSE para remoto.
3. El modelo vive en el cliente; el servidor solo ofrece herramientas, datos y plantillas.

## Recursos para profundizar

- [modelcontextprotocol.io — arquitectura](https://modelcontextprotocol.io) — consultado 2026-06-14.

## Siguiente lección

➡️ `03-tres-primitivos`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
