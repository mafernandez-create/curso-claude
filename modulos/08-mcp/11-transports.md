---
titulo: "Transports: stdio vs. HTTP/SSE"
modulo: "08-mcp"
orden: 11
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Transports: stdio vs. HTTP/SSE

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Comparar los **transports** principales de MCP.
- [ ] Elegir el adecuado según dónde corre el servidor.
- [ ] Conocer las implicaciones de cada uno.

## Prerrequisitos

- Lección 02 del módulo.

## Contexto

El **transport** es el canal por el que cliente y servidor hablan. La lógica de tu servidor (sus tools, resources, prompts) no cambia; sí cambia **dónde vive** y **cómo se conecta**.

## Contenido principal

### 1. stdio (local)

El servidor corre como un **proceso local** y se comunica por entrada/salida estándar. El cliente lo lanza directamente.
- **Ventajas:** simple, sin red, sin servidor que mantener; los datos no salen de tu máquina.
- **Ideal para:** herramientas personales y locales (tus archivos, scripts).

### 2. HTTP / SSE (remoto)

El servidor está accesible por **red** (HTTP, con eventos en streaming vía SSE). El cliente se conecta a una URL.
- **Ventajas:** **compartible** entre varios usuarios/máquinas, alojable en la nube.
- **Ideal para:** servicios de equipo, servidores gestionados, integraciones remotas.
- **Implica:** gestionar despliegue, autenticación y seguridad de red.

### 3. Cómo elegir

| Situación | Transport |
|---|---|
| Herramienta tuya, en tu máquina | **stdio** |
| Servicio compartido o en la nube | **HTTP/SSE** |

## Ejemplo aplicado

Un servidor que lee tus notas locales → **stdio** (privado, sin red). Un servidor que tu equipo entero usa para consultar una base de datos común → **HTTP/SSE** (alojado y autenticado).

## Ejercicio práctico

1. Para dos servidores imaginarios (uno personal, uno de equipo), elige el transport.
2. Justifica cada elección por privacidad y por quién lo usa.
3. **Criterio de éxito:** asocias correctamente local→stdio y compartido→HTTP/SSE.

## Errores comunes

- **Exponer por red un servidor que solo tú usas:** stdio es más simple y privado.
- **Olvidar la seguridad en HTTP/SSE:** un servidor en red necesita autenticación (lección 12).

## Resumen en 3 frases

1. El transport es el canal cliente–servidor; las capacidades del servidor no cambian con él.
2. stdio es local, simple y privado; HTTP/SSE es remoto y compartible, pero requiere despliegue y seguridad.
3. Local → stdio; compartido o en la nube → HTTP/SSE.

## Recursos para profundizar

- [modelcontextprotocol.io — transports](https://modelcontextprotocol.io) — consultado 2026-06-14.

## Siguiente lección

➡️ `12-control-acceso`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
