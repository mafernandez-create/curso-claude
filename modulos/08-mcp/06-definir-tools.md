---
titulo: "Definir Tools: esquema, validación y errores"
modulo: "08-mcp"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 40
---

# Definir Tools: esquema, validación y errores

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Definir Tools con un **esquema de entrada** claro.
- [ ] **Validar** las entradas y devolver **errores** útiles.
- [ ] Escribir descripciones que el modelo entienda.

## Prerrequisitos

- Lección 05 del módulo.

## Contexto

Una tool es tan buena como su **definición**. El modelo decide si usarla y con qué argumentos a partir de su nombre, su descripción y su esquema. Una tool bien definida se usa bien; una ambigua, mal.

## Contenido principal

### 1. El esquema de entrada

Cada tool declara sus parámetros con un **esquema** (tipos, cuáles son obligatorios, descripciones de cada campo). Esto permite al cliente saber qué argumentos enviar y validar antes de ejecutar.

### 2. Descripciones que guían

- **Nombre** claro y específico (`crear_evento`, no `evento`).
- **Descripción** que diga *qué hace y cuándo usarla*. El modelo se apoya en ella para decidir.
- **Descripción por parámetro:** qué es y en qué formato.

### 3. Validación y errores

Tu servidor **valida** las entradas (¿la fecha tiene buen formato? ¿el id existe?) antes de actuar. Si algo falla, devuelve un **error claro** en lugar de romperse: así el modelo puede entender el problema y reintentar con otros argumentos.

```python
# Conceptual
if not fecha_valida(args["fecha"]):
    return error("La fecha debe estar en formato AAAA-MM-DD.")
```

### 4. Acciones con efectos

Si una tool **hace algo irreversible** (borrar, enviar, pagar), tenlo en cuenta en el diseño: el cliente y el usuario deberían poder confirmarla. No conviertas en automática una acción peligrosa.

## Ejemplo aplicado

Tool `crear_evento(titulo, fecha, duracion_min)`:
- Esquema con tipos y `titulo`/`fecha` obligatorios.
- Descripción: "Crea un evento en el calendario. Úsala cuando el usuario quiera agendar algo concreto."
- Validación: comprueba el formato de fecha; si está mal, error claro.

## Ejercicio práctico

1. Define una tool con esquema, descripciones y al menos una validación.
2. Prueba un caso correcto y uno con entrada inválida.
3. **Criterio de éxito:** la tool funciona y devuelve un error útil ante una entrada mala.

## Errores comunes

- **Descripciones vagas:** el modelo no sabrá cuándo usarla.
- **No validar:** entradas malas rompen el servidor en vez de dar un error claro.

## Resumen en 3 frases

1. Una tool se define por nombre, descripción y esquema de entrada; de ahí decide el modelo cómo usarla.
2. Valida las entradas y devuelve errores claros para que el modelo pueda corregir.
3. Diseña con cuidado las tools con efectos irreversibles, pensando en la confirmación.

## Recursos para profundizar

- [modelcontextprotocol.io — tools](https://modelcontextprotocol.io) — consultado 2026-06-14.
- Módulo 07, lección 06 — tool use (conceptos comunes).

## Siguiente lección

➡️ `07-exponer-resources`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
