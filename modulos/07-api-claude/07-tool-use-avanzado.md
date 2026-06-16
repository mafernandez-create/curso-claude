---
titulo: "Tool use avanzado: múltiples herramientas y el bucle de agente"
modulo: "07-api-claude"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Tool use avanzado: múltiples herramientas y el bucle de agente

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Trabajar con **varias herramientas** y varias llamadas en una respuesta.
- [ ] Implementar el **bucle de agente** (seguir hasta que termine).
- [ ] Conocer el **tool runner** del SDK que automatiza el bucle.

## Prerrequisitos

- Lección 06 del módulo.

## Contexto

Una tarea real rara vez se resuelve con una sola herramienta. El modelo puede necesitar **encadenar** varias (buscar, luego calcular, luego consultar). Eso se gestiona con un **bucle**: mientras Claude pida herramientas, las ejecutas y le devuelves los resultados.

## Contenido principal

### 1. Varias herramientas a la vez

Pasas una **lista** de tools; Claude elige cuál(es) usar. Puede incluso pedir **varias en una misma respuesta** (en paralelo) si son independientes.

### 2. El bucle de agente (manual)

```python
while True:
    resp = client.messages.create(model="claude-opus-4-8", max_tokens=2048,
        tools=tools, messages=messages)
    if resp.stop_reason != "tool_use":
        break  # Claude ha terminado
    messages.append({"role": "assistant", "content": resp.content})
    resultados = []
    for bloque in resp.content:
        if bloque.type == "tool_use":
            salida = ejecutar(bloque.name, bloque.input)  # tu función
            resultados.append({"type": "tool_result",
                "tool_use_id": bloque.id, "content": salida})
    messages.append({"role": "user", "content": resultados})
```

### 3. El tool runner del SDK

El SDK ofrece un **tool runner** (beta) que automatiza ese bucle: defines tus funciones como herramientas y él se encarga de llamarlas y reenviar resultados hasta que Claude termina. Útil cuando no necesitas control fino del bucle.

### 4. Control humano para acciones con efectos

Si una herramienta **hace algo irreversible** (enviar, borrar, pagar), conviene un **bucle manual con confirmación** antes de ejecutarla. No automatices acciones sensibles sin una persona en el bucle.

## Ejemplo aplicado

Un asistente que, ante "¿cuánto pesa en total mi pedido y cuándo llega?", usa dos tools: `consultar_pedido` y `estimar_envio`, encadenadas en el bucle, y luego redacta la respuesta combinada.

## Ejercicio práctico

1. Define **dos** herramientas e implementa el bucle de agente.
2. Haz una petición que requiera ambas.
3. **Criterio de éxito:** Claude encadena las dos herramientas y da una respuesta combinada.

## Errores comunes

- **No cerrar el bucle:** si no devuelves el `tool_result`, Claude no puede continuar.
- **Automatizar acciones con efectos** sin confirmación: usa bucle manual y aprueba.

## Resumen en 3 frases

1. Con varias herramientas, Claude elige cuáles usar y puede pedir varias a la vez.
2. El bucle de agente repite "pedir tool → ejecutar → devolver resultado" hasta que Claude termina.
3. El tool runner del SDK automatiza el bucle; para acciones irreversibles, usa control manual.

## Recursos para profundizar

- [docs.claude.com — tool use y agentes](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 09 — agentes y subagentes.

## Siguiente lección

➡️ `08-vision`

## Fuentes

- [docs.claude.com — tool use](https://docs.claude.com) — consultado 2026-06-14.
