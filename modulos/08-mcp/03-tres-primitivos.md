---
titulo: "Los tres primitivos: Tools, Resources y Prompts"
modulo: "08-mcp"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Los tres primitivos: Tools, Resources y Prompts

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir los tres primitivos que un servidor MCP puede exponer: **Tools**, **Resources** y **Prompts**.
- [ ] Saber cuál usar para cada necesidad.

## Prerrequisitos

- Lección 02 del módulo.

## Contexto

Un servidor MCP ofrece capacidades a través de tres tipos de "piezas". Conocerlas te permite diseñar bien qué exponer y por qué.

## Contenido principal

### 1. Tools (herramientas)

Son **acciones** que el modelo puede invocar: "crea un evento", "busca en la base de datos", "envía el correo". Son lo más parecido al *tool use* del Módulo 07, pero estandarizado por MCP. El modelo decide cuándo usarlas; tu servidor las ejecuta.

### 2. Resources (recursos)

Son **datos/contexto de solo lectura** que el cliente puede cargar: el contenido de un archivo, el resultado de una consulta, una página. A diferencia de las tools (que *hacen*), los resources *aportan información*. Se identifican por una URI.

### 3. Prompts (plantillas)

Son **plantillas de interacción reutilizables**, a menudo parametrizables: "resume este documento con este formato", "prepara un informe de incidencia". El servidor las ofrece y el usuario/cliente las invoca para no reescribir prompts complejos.

### 4. Cuál usar

| Necesitas… | Primitivo |
|---|---|
| Que el modelo **haga** algo (con efectos o cálculo) | **Tool** |
| **Aportar datos/contexto** para leer | **Resource** |
| Reutilizar una **interacción/plantilla** | **Prompt** |

## Ejemplo aplicado

Un servidor MCP de tu sistema de notas podría exponer:
- **Tool** `crear_nota` (acción).
- **Resource** `nota://2026/proyecto-x` (lee una nota concreta).
- **Prompt** `resumen-semanal` (plantilla que resume tus notas de la semana).

## Ejercicio práctico

1. Para una fuente tuya (calendario, notas, una API), lista qué expondrías como Tool, qué como Resource y qué como Prompt.
2. **Criterio de éxito:** clasificas correctamente cada capacidad en su primitivo.

## Errores comunes

- **Hacerlo todo Tools:** los datos de solo lectura encajan mejor como Resources.
- **Olvidar los Prompts:** son una forma cómoda de compartir interacciones complejas.

## Resumen en 3 frases

1. Un servidor MCP expone Tools (acciones), Resources (datos de lectura) y Prompts (plantillas).
2. Tools hacen, Resources informan, Prompts reutilizan interacciones.
3. Elegir bien el primitivo hace tu servidor claro y útil.

## Recursos para profundizar

- [modelcontextprotocol.io — primitivos](https://modelcontextprotocol.io) — consultado 2026-06-14.
- `introduction-mcp` (catálogo).

## Siguiente lección

➡️ `04-probar-servidor-existente`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
