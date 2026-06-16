---
titulo: "Primeros pasos con el SDK de Python"
modulo: "07-api-claude"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Primeros pasos con el SDK de Python

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Instalar el SDK oficial y configurar la **clave de API** de forma segura.
- [ ] Hacer tu **primera llamada** y leer la respuesta.
- [ ] Mantener una conversación de varios turnos.

## Prerrequisitos

- Lección 01 del módulo. Python básico.

## Contexto

El SDK oficial `anthropic` para Python encapsula las llamadas HTTP en objetos cómodos. Es la forma recomendada de usar la API desde Python.

## Contenido principal

### 1. Instalación y clave

```bash
pip install anthropic
```
La clave **nunca** va en el código: se lee de la variable de entorno `ANTHROPIC_API_KEY`. Así el cliente la coge solo:
```python
import anthropic
client = anthropic.Anthropic()  # lee ANTHROPIC_API_KEY del entorno
```

### 2. Primera llamada

```python
resp = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    messages=[{"role": "user", "content": "¿Capital de Francia?"}],
)
# El contenido es una lista de bloques; busca los de tipo "text"
print(next(b.text for b in resp.content if b.type == "text"))
```

### 3. Conversación de varios turnos

Como la API es sin estado, acumulas los mensajes:
```python
messages = [{"role": "user", "content": "Me llamo Ana."}]
r1 = client.messages.create(model="claude-opus-4-8", max_tokens=1024, messages=messages)
messages.append({"role": "assistant", "content": [b for b in r1.content]})
messages.append({"role": "user", "content": "¿Cómo me llamo?"})
r2 = client.messages.create(model="claude-opus-4-8", max_tokens=1024, messages=messages)
```

## Ejemplo aplicado

Un mini-asistente de terminal: lee una pregunta del usuario, la envía y muestra la respuesta. Con lo anterior ya tienes todas las piezas.

## Ejercicio práctico

1. Instala el SDK y configura `ANTHROPIC_API_KEY` (no en el código).
2. Haz una llamada y muestra la respuesta.
3. Añade un segundo turno que dependa del primero.
4. **Criterio de éxito:** mantienes una conversación de 2 turnos correctamente.

## Errores comunes

- **Poner la clave en el código:** úsala desde el entorno; nunca la subas a Git.
- **Tratar `content` como texto:** es una lista de bloques; filtra por `type == "text"`.

## Resumen en 3 frases

1. `pip install anthropic` y la clave en `ANTHROPIC_API_KEY` (nunca en el código).
2. `client.messages.create(...)` hace la llamada; la respuesta viene en bloques de contenido.
3. Para varios turnos, acumulas tú los mensajes porque la API es sin estado.

## Recursos para profundizar

- `anthropic-sdk-python` (catálogo).
- [docs.claude.com — SDK Python](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `03-sdk-typescript`

## Fuentes

- [docs.claude.com — SDK Python](https://docs.claude.com) — consultado 2026-06-14.
