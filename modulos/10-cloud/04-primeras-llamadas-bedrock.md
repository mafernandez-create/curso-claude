---
titulo: "Primeras llamadas a Claude en Bedrock con el SDK"
modulo: "10-cloud"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Primeras llamadas a Claude en Bedrock con el SDK

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Hacer tu **primera llamada** a Claude en Bedrock con el SDK.
- [ ] Usar el cliente **`AnthropicBedrock`** y entender qué cambia respecto a la API directa.
- [ ] Reaprovechar lo que ya sabes de la Messages API.

> **Nota:** los nombres de paquete, parámetros de región e IDs de modelo pueden cambiar; verifica en [docs.claude.com](https://docs.claude.com) y en la documentación de AWS antes de copiar código.

## Prerrequisitos

- Lecciones 02 y 03 del módulo. Módulo 07 (Messages API).

## Contexto

Anthropic ofrece un cliente específico para Bedrock que reutiliza la misma forma de la Messages API. Si ya hiciste el Módulo 07, esto te resultará muy familiar.

## Contenido principal

### 1. El cliente `AnthropicBedrock`

El SDK de Anthropic incluye un cliente **`AnthropicBedrock`** (Python y TypeScript) que habla con Bedrock usando tus credenciales de AWS. No pasas una `api_key`: el cliente toma las credenciales del entorno (como cualquier herramienta de AWS) y, si hace falta, la región.

### 2. Qué cambia respecto a la API directa

- **Cliente:** `AnthropicBedrock` en vez de `Anthropic`.
- **Autenticación:** credenciales de AWS / IAM (lección 03), no API key.
- **ID de modelo:** con prefijo `anthropic.` (lección 02).
- **Región:** se indica al cliente o vía configuración de AWS.

Lo que **no** cambia: la estructura de `messages`, `max_tokens`, `system`, el manejo de la respuesta. Es la misma Messages API.

### 3. Esquema mental

```text
tu código  →  AnthropicBedrock(region)  →  Bedrock (AWS, IAM)  →  Claude
```

## Ejemplo aplicado

Pseudocódigo (verifica nombres exactos en la doc):

```python
from anthropic import AnthropicBedrock

client = AnthropicBedrock(aws_region="us-east-1")

resp = client.messages.create(
    model="anthropic.claude-opus-4-8",
    max_tokens=512,
    messages=[{"role": "user", "content": "Resume en una frase qué es Bedrock."}],
)
print(resp.content[0].text)
```

La única diferencia real con el Módulo 07 es el cliente, el ID con prefijo y que no hay `api_key`.

## Ejercicio práctico

1. Identifica el cambio de cliente y de ID respecto a tu código del Módulo 07.
2. Si tienes acceso a AWS, haz una llamada mínima; si no, escribe el pseudocódigo.
3. **Criterio de éxito:** tu llamada usa `AnthropicBedrock`, ID con prefijo y credenciales de AWS, con la misma estructura de mensajes.

## Errores comunes

- **Pasar `api_key`:** en Bedrock no se usa; autenticas con AWS.
- **ID sin prefijo / región equivocada:** errores de modelo no encontrado o sin acceso.

## Resumen en 3 frases

1. `AnthropicBedrock` es el cliente del SDK para llamar a Claude en Bedrock con credenciales de AWS.
2. Cambian el cliente, la autenticación, el ID (prefijo `anthropic.`) y la región; la Messages API es idéntica.
3. Si dominas el Módulo 07, la curva es mínima.

## Recursos para profundizar

- [docs.claude.com — SDK y Bedrock](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `05-rag-knowledge-bases`

## Fuentes

- [docs.claude.com — Bedrock](https://docs.claude.com) — consultado 2026-06-14.
