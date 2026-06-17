---
titulo: "Construir tu primer servidor MCP en Python"
modulo: "08-mcp"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 45
---

# Construir tu primer servidor MCP en Python

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Crear un **servidor MCP mínimo** en Python con el SDK oficial.
- [ ] Exponer una herramienta sencilla.
- [ ] Conectarlo a un cliente y probarlo.

> **Nota:** la API exacta del SDK de MCP evoluciona; usa la documentación oficial del SDK para la sintaxis vigente. Aquí mostramos la **forma** de un servidor, no una versión congelada.

## Prerrequisitos

- Lección 04 del módulo. Python intermedio.

## Contexto

Lo mejor para entender MCP es construir un servidor mínimo. Con pocas líneas tendrás algo que un cliente puede usar.

## Contenido principal

### 1. Instalar el SDK

Instala el SDK oficial de MCP para Python (sigue la doc para el nombre/versión actual). Provee utilidades para declarar tools, resources y prompts, y para arrancar el servidor por un transport.

### 2. Estructura de un servidor mínimo

Conceptualmente, un servidor:
1. Se **crea** (un objeto servidor con un nombre).
2. **Declara** sus capacidades (por ejemplo, una tool).
3. Se **ejecuta** por un transport (stdio para empezar).

```python
# Forma conceptual (consulta el SDK para la API exacta)
servidor = MCPServer("mi-servidor")

@servidor.tool()
def suma(a: int, b: int) -> int:
    """Suma dos números."""
    return a + b

servidor.run(transport="stdio")
```

La descripción de la función y sus tipos sirven para generar el esquema que verá el cliente.

### 3. Conectarlo y probar

Declaras este servidor en tu cliente (lección 04) apuntando al comando que lo arranca. Luego pides algo que use la tool ("suma 3 y 4") y compruebas que el cliente la invoca.

## Ejemplo aplicado

Un servidor con una sola tool `suma` ya es un MCP válido: el cliente la descubre, el modelo decide usarla cuando procede, y el servidor la ejecuta. A partir de ahí, añadir capacidades es repetir el patrón.

## Ejercicio práctico

1. Crea un servidor MCP mínimo con **una** tool útil para ti.
2. Conéctalo a tu cliente y pruébalo.
3. **Criterio de éxito:** el cliente descubre y usa tu tool.

## Errores comunes

- **Descripción/typos pobres en la tool:** el cliente genera mal el esquema; cuida la docstring y los tipos.
- **Olvidar arrancar por un transport:** sin `run`, no hay servidor.

## Resumen en 3 frases

1. Con el SDK oficial, un servidor MCP mínimo se crea, declara capacidades y se ejecuta por un transport.
2. Una sola tool bien descrita ya es un servidor válido y usable.
3. Lo conectas en el cliente y lo pruebas pidiendo algo que use esa tool.

## Recursos para profundizar

- `mcp-spec` (catálogo) — especificación y SDKs.
- [modelcontextprotocol.io — SDK Python](https://modelcontextprotocol.io) — consultado 2026-06-14.

## Siguiente lección

➡️ `06-definir-tools`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
