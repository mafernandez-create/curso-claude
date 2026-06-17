---
titulo: "Exponer Resources: ficheros, APIs y datos"
modulo: "08-mcp"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Exponer Resources: ficheros, APIs y datos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Exponer **Resources** (datos de solo lectura) en un servidor MCP.
- [ ] Identificarlos con **URIs**.
- [ ] Distinguir cuándo algo debe ser un Resource y cuándo una Tool.

## Prerrequisitos

- Lección 03 (primitivos) y 06 (tools).

## Contexto

No todo lo que aporta un servidor es una acción. A menudo solo quieres **dar contexto**: el contenido de un archivo, los datos de un registro, el texto de una página. Para eso están los **Resources**.

## Contenido principal

### 1. Qué es un Resource

Es un **dato de solo lectura** que el cliente puede cargar como contexto. No hace nada (no tiene efectos): simplemente **se lee**. Por ejemplo, el contenido de `nota://proyecto-x` o de `archivo:///ruta/informe.md`.

### 2. URIs: cómo se identifican

Cada Resource tiene una **URI** que lo identifica (un esquema propio del servidor: `nota://`, `db://tabla/123`, etc.). El cliente usa esa URI para pedir el contenido. Puedes exponer Resources concretos o **plantillas** de URI para familias de recursos.

### 3. Resource vs. Tool

- **Resource:** "dame este dato para tenerlo en contexto" (lectura).
- **Tool:** "haz esto" (acción, posible efecto).

Si dudas: ¿el modelo necesita *leer* algo o *hacer* algo? Leer → Resource; hacer → Tool. (Buscar/consultar con parámetros complejos a veces encaja mejor como Tool.)

## Ejemplo aplicado

Un servidor de tu base de notas expone:
- Resource `nota://2026/reunion-15` → devuelve el texto de esa nota.
- El cliente la carga como contexto y Claude responde basándose en ella, sin que tú la pegues.

## Ejercicio práctico

1. En tu servidor, expón un Resource (un archivo o un dato) con su URI.
2. Cárgalo desde el cliente y comprueba que su contenido entra en contexto.
3. **Criterio de éxito:** Claude usa el contenido del Resource sin que lo pegues a mano.

## Errores comunes

- **Convertir en Tool lo que es lectura pura:** un Resource es más simple y claro.
- **URIs inconsistentes:** define un esquema claro para tus recursos.

## Resumen en 3 frases

1. Los Resources son datos de solo lectura que el cliente carga como contexto.
2. Se identifican por URIs (un esquema propio del servidor), individuales o por plantilla.
3. Usa Resource para *leer* y Tool para *hacer*.

## Recursos para profundizar

- [modelcontextprotocol.io — resources](https://modelcontextprotocol.io) — consultado 2026-06-14.

## Siguiente lección

➡️ `08-prompts-parametrizables`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
