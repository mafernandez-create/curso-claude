---
titulo: "Tool use (function calling): fundamentos"
modulo: "07-api-claude"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 45
---

# Tool use (function calling): fundamentos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **tool use** y para qué sirve.
- [ ] Definir una herramienta y entender el **ciclo** de llamada.
- [ ] Implementar un caso sencillo.

## Prerrequisitos

- Lecciones 01–04 del módulo.

## Contexto

Por sí solo, el modelo solo genera texto: no consulta tu base de datos, ni el tiempo, ni hace cálculos exactos. El **tool use** (o *function calling*) le permite **pedir que ejecutes funciones tuyas** y usar el resultado. Es la base de los agentes.

## Contenido principal

### 1. La idea

Tú declaras unas **herramientas** (nombre, descripción y esquema de entrada). Cuando Claude decide que necesita una, **no la ejecuta él**: te devuelve una petición de uso de herramienta. **Tú** ejecutas la función y le devuelves el resultado. Claude continúa con ese dato.

### 2. El ciclo

1. Envías el mensaje **+ la lista de tools**.
2. Si Claude quiere una herramienta, responde con `stop_reason: "tool_use"` y los argumentos.
3. **Ejecutas** la función en tu código.
4. Le devuelves el resultado como un `tool_result`.
5. Claude da la respuesta final (o pide otra herramienta).

### 3. Definir una herramienta

```python
tools = [{
    "name": "get_tiempo",
    "description": "Devuelve el tiempo actual de una ciudad.",
    "input_schema": {
        "type": "object",
        "properties": {"ciudad": {"type": "string"}},
        "required": ["ciudad"],
    },
}]
```
La **descripción** es clave: Claude decide cuándo usar la herramienta según ella. Sé claro sobre *cuándo* llamarla.

## Ejemplo aplicado

```python
resp = client.messages.create(model="claude-opus-4-8", max_tokens=1024,
    tools=tools, messages=[{"role":"user","content":"¿Qué tiempo hace en Cádiz?"}])
# Si resp.stop_reason == "tool_use": extraes los args, ejecutas get_tiempo("Cádiz"),
# y reenvías el resultado como tool_result para que Claude redacte la respuesta.
```

## Ejercicio práctico

1. Define una herramienta sencilla (una calculadora, una consulta ficticia).
2. Implementa el ciclo: detectar `tool_use`, ejecutar, devolver `tool_result`.
3. **Criterio de éxito:** Claude usa tu herramienta y responde con su resultado.

## Errores comunes

- **Esperar que Claude ejecute la función:** la ejecutas tú; él solo la pide.
- **Descripciones vagas:** si no dejas claro *cuándo* usar la tool, no la usará bien.

## Resumen en 3 frases

1. El tool use permite a Claude pedir que ejecutes funciones tuyas y usar el resultado.
2. El ciclo es: enviar tools → Claude pide una → la ejecutas tú → devuelves el resultado → respuesta final.
3. La descripción de la herramienta determina cuándo Claude decide usarla.

## Recursos para profundizar

- [docs.claude.com — tool use](https://docs.claude.com) — consultado 2026-06-14.
- `claude-cookbooks` (catálogo) — recetas de tool use.

## Siguiente lección

➡️ `07-tool-use-avanzado`

## Fuentes

- [docs.claude.com — tool use](https://docs.claude.com) — consultado 2026-06-14.
