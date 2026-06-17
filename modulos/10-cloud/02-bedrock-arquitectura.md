---
titulo: "AWS Bedrock: arquitectura y modelos disponibles"
modulo: "10-cloud"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# AWS Bedrock: arquitectura y modelos disponibles

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es **Amazon Bedrock** y cómo encaja Claude en él.
- [ ] Entender el papel de las **regiones** y la disponibilidad de modelos.
- [ ] Saber que los **IDs de modelo** llevan un prefijo distinto.

> **Nota:** la disponibilidad de modelos y regiones en Bedrock cambia; consulta la documentación de AWS y [docs.claude.com](https://docs.claude.com) para datos actuales.

## Prerrequisitos

- Lección 01 del módulo. Nociones de AWS.

## Contexto

Amazon Bedrock es el servicio de AWS para acceder a **modelos de varios proveedores** (incluido Claude de Anthropic) con una API gestionada dentro de AWS. Entender su arquitectura te prepara para las llamadas.

## Contenido principal

### 1. Qué es Bedrock

Un servicio gestionado de AWS que expone modelos de IA (entre ellos Claude) a través de la infraestructura de AWS. Tú no gestionas servidores: invocas el modelo y AWS se encarga del resto, con su facturación e identidad.

### 2. Regiones y disponibilidad

Bedrock funciona por **regiones** de AWS. Qué modelos de Claude están disponibles puede variar por región, y a menudo hay que **habilitar el acceso** al modelo en la consola antes de usarlo. Elige región por latencia, disponibilidad y requisitos de residencia de datos.

### 3. IDs de modelo con prefijo

En Bedrock, los identificadores de Claude llevan el **prefijo `anthropic.`** (por ejemplo, `anthropic.claude-opus-4-8`), a diferencia de la API directa (`claude-opus-4-8`). Si usas el ID sin prefijo en Bedrock, fallará. Verifica el ID exacto en la documentación.

### 4. Misma Messages API

La buena noticia: por debajo es la **misma Messages API** que ya conoces (Módulo 07). Cambia cómo te autenticas y el ID del modelo, no la forma de los mensajes.

## Ejemplo aplicado

Para usar Opus en Bedrock: habilitas el acceso al modelo en tu región, y en las llamadas usas el ID `anthropic.claude-opus-4-8`. La estructura de la petición (mensajes, max_tokens) es la del Módulo 07.

## Ejercicio práctico

1. Revisa en la documentación qué modelos de Claude hay en Bedrock y en qué regiones.
2. Anota el ID con prefijo del modelo que usarías.
3. **Criterio de éxito:** sabes que en Bedrock el ID lleva `anthropic.` y que la API es la misma.

## Errores comunes

- **Usar el ID sin prefijo:** en Bedrock falla; lleva `anthropic.`.
- **Olvidar habilitar el acceso al modelo** en la región: da error de permisos.

## Resumen en 3 frases

1. Bedrock es el servicio de AWS para acceder a modelos (incluido Claude) con API gestionada e identidad de AWS.
2. Funciona por regiones; la disponibilidad de modelos varía y suele requerir habilitar el acceso.
3. Es la misma Messages API, pero los IDs de Claude llevan el prefijo `anthropic.`.

## Recursos para profundizar

- `claude-amazon-bedrock` (catálogo).
- [docs.claude.com — Claude en Bedrock](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `03-iam-aws`

## Fuentes

- [docs.claude.com — Bedrock](https://docs.claude.com) — consultado 2026-06-14.
