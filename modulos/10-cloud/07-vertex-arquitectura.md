---
titulo: "Google Vertex AI: arquitectura y modelos Claude"
modulo: "10-cloud"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Google Vertex AI: arquitectura y modelos Claude

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es **Vertex AI** y cómo accede a Claude.
- [ ] Entender el papel del **proyecto** y la **región/location** en GCP.
- [ ] Saber que los **IDs y detalles** difieren de la API directa y de Bedrock.

> **Nota:** disponibilidad de modelos, regiones e IDs en Vertex cambian; verifica en la documentación de Google Cloud y [docs.claude.com](https://docs.claude.com).

## Prerrequisitos

- Lección 01 del módulo. Nociones de Google Cloud (GCP).

## Contexto

**Vertex AI** es la plataforma de IA de Google Cloud. Igual que Bedrock en AWS, permite acceder a Claude integrado en GCP: identidad, facturación y compliance dentro de Google Cloud.

## Contenido principal

### 1. Qué es Vertex AI

El servicio gestionado de GCP para modelos de IA, incluido Claude (a través de su catálogo de modelos). Invocas el modelo con identidad de Google Cloud, sin gestionar infraestructura.

### 2. Proyecto y location

En GCP todo cuelga de un **proyecto** (project ID) y se ejecuta en una **región/location**. Para usar Claude en Vertex defines tu proyecto, habilitas Vertex AI y eliges la location donde el modelo esté disponible. La disponibilidad por región varía.

### 3. IDs y detalles propios

Los **identificadores de modelo** y algunos parámetros en Vertex tienen su propio formato, distinto de la API directa y de Bedrock. No reutilices el ID de Bedrock (`anthropic.…`) en Vertex; consulta el ID que corresponde a Vertex en la documentación.

### 4. Misma Messages API

Como en Bedrock, por debajo es la **misma Messages API**. Cambian autenticación (GCP), proyecto/location e ID; la forma de los mensajes no.

## Ejemplo aplicado

Una empresa con su stack en Google Cloud habilita Vertex AI en su proyecto, elige una location con Claude disponible y llama al modelo con el ID propio de Vertex. La petición (mensajes, max_tokens) es la del Módulo 07.

## Ejercicio práctico

1. Anota tu (hipotético) project ID y una location.
2. Busca en la documentación el formato de ID de Claude en Vertex.
3. **Criterio de éxito:** distingues proyecto/location y sabes que el ID de Vertex difiere del de Bedrock.

## Errores comunes

- **Reusar el ID de Bedrock en Vertex:** formatos distintos.
- **No habilitar Vertex AI / location sin el modelo:** errores de acceso.

## Resumen en 3 frases

1. Vertex AI es la plataforma de GCP para acceder a Claude con identidad y facturación de Google Cloud.
2. Todo cuelga de un proyecto y una location; la disponibilidad de modelos varía por región.
3. Es la misma Messages API, pero los IDs y detalles de Vertex difieren de la API directa y de Bedrock.

## Recursos para profundizar

- `claude-google-vertex` (catálogo).
- Documentación de Google Cloud sobre Vertex AI y Claude.

## Siguiente lección

➡️ `08-auth-gcp-service-accounts`

## Fuentes

- [docs.claude.com — Vertex](https://docs.claude.com) — consultado 2026-06-14.
