---
titulo: "Buenas prácticas y antipatrones"
modulo: "08-mcp"
orden: 15
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Buenas prácticas y antipatrones

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Aplicar **buenas prácticas** al diseñar un servidor MCP.
- [ ] Evitar **antipatrones** comunes.
- [ ] Cerrar el módulo con la entrega.

## Prerrequisitos

- Todo el módulo 08.

## Contexto

Un servidor MCP útil no solo "funciona": es claro, seguro y agradable de usar para el modelo y para las personas. Esta lección recoge lo aprendido en forma de pautas.

## Contenido principal

### 1. Buenas prácticas

- **Tools enfocadas y bien descritas:** una tool, una responsabilidad; descripción que diga *cuándo* usarla (L06).
- **Usa el primitivo correcto:** Tool para hacer, Resource para leer, Prompt para reutilizar (L03).
- **Valida y da errores claros** (L06): el modelo podrá corregir.
- **Mínimo privilegio y confirmación** de acciones con efectos (L12).
- **Transport adecuado:** local→stdio, compartido→HTTP/SSE con autenticación (L11).
- **Progreso en tareas largas** con notifications (L10).

### 2. Antipatrones

- **Una "mega-tool" que lo hace todo:** difícil de usar bien; divide en tools claras.
- **Exponer datos de lectura como Tools:** usa Resources.
- **Descripciones vagas:** el modelo no sabrá cuándo usar la tool.
- **Acceso excesivo / sin autenticación** en servidores en red.
- **Automatizar acciones irreversibles** sin confirmación.
- **Tratar contenido externo como órdenes** (inyección de instrucciones, L12).

### 3. La regla de oro

Un buen servidor MCP es **claro** (capacidades bien definidas), **seguro** (mínimo privilegio, confirmación) y **honesto** (errores útiles, sin efectos sorpresa). Diseña pensando en que tanto el modelo como una persona entiendan qué hace cada cosa.

## Ejemplo aplicado

Antipatrón: una tool `gestionar(accion, datos)` que crea, borra o envía según un parámetro. Mejor: tools separadas `crear_x`, `borrar_x` (con confirmación), `enviar_x` (con confirmación), cada una clara y validada.

## Ejercicio práctico (entrega del módulo)

1. Construye un **servidor MCP propio** sobre una fuente que te interese (calendario, notas, una API).
2. Incluye al menos **3 Tools** bien definidas y validadas, aplicando las buenas prácticas.
3. Documenta el diseño y tus pruebas en `mi-servidor-mcp.md`.
4. **Criterio de éxito:** otra persona entendería tu servidor y lo conectaría con seguridad.

## Errores comunes

- (Esta lección es la lista de errores; revísala antes de publicar un servidor.)

## Resumen en 3 frases

1. Diseña tools enfocadas y bien descritas, usa el primitivo correcto y valida con errores claros.
2. Evita mega-tools, descripciones vagas, accesos excesivos y la automatización de acciones irreversibles.
3. Un buen servidor MCP es claro, seguro y honesto, entendible por el modelo y por las personas.

## Recursos para profundizar

- `mcp-advanced` (catálogo).
- Módulo 09 — skills y subagentes (siguiente paso del ecosistema de agentes).

## Siguiente lección

➡️ Has terminado el Módulo 08. Continúa con el Módulo 09 (Skills y subagentes).

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
