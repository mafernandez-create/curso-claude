---
titulo: "Primeras llamadas a Claude en Vertex con el SDK"
modulo: "10-cloud"
orden: 9
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Primeras llamadas a Claude en Vertex con el SDK

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Hacer tu **primera llamada** a Claude en Vertex con el SDK.
- [ ] Usar el cliente **`AnthropicVertex`** indicando proyecto y location.
- [ ] Reaprovechar la Messages API que ya conoces.

> **Nota:** nombres de paquete, parámetros e IDs cambian; verifica en [docs.claude.com](https://docs.claude.com) y en la documentación de Google Cloud antes de copiar.

## Prerrequisitos

- Lecciones 07 y 08 del módulo. Módulo 07 (Messages API).

## Contenido principal

### 1. El cliente `AnthropicVertex`

El SDK de Anthropic incluye **`AnthropicVertex`** (Python y TypeScript). Le indicas tu **project_id** y **region/location**, y usa las credenciales de Google Cloud del entorno (Application Default Credentials). No pasas `api_key`.

### 2. Qué cambia respecto a la API directa

- **Cliente:** `AnthropicVertex` en vez de `Anthropic`.
- **Autenticación:** credenciales de GCP / Service Account (lección 08).
- **Proyecto y location:** se indican al cliente.
- **ID de modelo:** el formato propio de Vertex (lección 07).

Lo que **no** cambia: la estructura de `messages`, `max_tokens`, `system` y el manejo de la respuesta.

### 3. Esquema mental

```text
tu código → AnthropicVertex(project, location) → Vertex (GCP, IAM) → Claude
```

## Ejemplo aplicado

Pseudocódigo (verifica nombres exactos en la doc):

```python
from anthropic import AnthropicVertex

client = AnthropicVertex(project_id="mi-proyecto", region="us-east5")

resp = client.messages.create(
    model="claude-opus-4-8",  # usa el ID que indique la doc de Vertex
    max_tokens=512,
    messages=[{"role": "user", "content": "Resume en una frase qué es Vertex AI."}],
)
print(resp.content[0].text)
```

Igual que en Bedrock, la diferencia con el Módulo 07 es el cliente, la identidad y el ID/region; la Messages API es la misma.

## Ejercicio práctico

1. Anota project_id y location que usarías.
2. Si tienes acceso a GCP, haz una llamada mínima; si no, escribe el pseudocódigo.
3. **Criterio de éxito:** tu llamada usa `AnthropicVertex` con proyecto/location y credenciales de GCP, misma estructura de mensajes.

## Errores comunes

- **Pasar `api_key`:** en Vertex no se usa.
- **Location sin el modelo o ID equivocado:** errores de acceso/modelo.

## Resumen en 3 frases

1. `AnthropicVertex` es el cliente del SDK para llamar a Claude en Vertex con credenciales de GCP.
2. Le indicas proyecto y location; cambian cliente, identidad e ID, pero la Messages API es idéntica.
3. Si dominas el Módulo 07, la curva es mínima.

## Recursos para profundizar

- [docs.claude.com — SDK y Vertex](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `10-rag-grounding-vertex`

## Fuentes

- [docs.claude.com — Vertex](https://docs.claude.com) — consultado 2026-06-14.
