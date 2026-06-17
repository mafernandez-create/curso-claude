---
titulo: "Por qué usar Claude vía Bedrock o Vertex (y por qué no)"
modulo: "10-cloud"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Por qué usar Claude vía Bedrock o Vertex (y por qué no)

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué aporta acceder a Claude a través de **AWS Bedrock** o **Google Vertex AI**.
- [ ] Reconocer sus **limitaciones** frente a la API directa.
- [ ] Decidir cuándo tiene sentido cada vía.

## Prerrequisitos

- Módulo 07 (API). Nociones de AWS o GCP.

## Contexto

Claude se puede usar por la **API directa de Anthropic** (lo del Módulo 07) o a través de plataformas cloud como **Bedrock** (AWS) y **Vertex AI** (Google). La pregunta no es "cuál es mejor", sino "cuál encaja con **dónde vive tu organización**".

## Contenido principal

### 1. Qué aportan Bedrock y Vertex

Para una empresa que **ya trabaja en AWS o GCP**, acceder a Claude desde su cloud significa:
- **Facturación unificada** con el resto de su gasto cloud.
- **Identidad y permisos** integrados (IAM en AWS, IAM/Service Accounts en GCP).
- **Cumplimiento y residencia de datos** dentro de su entorno y región.
- Menos proveedores que gestionar.

### 2. Las limitaciones

Son plataformas **operadas por terceros** (AWS, Google), no por Anthropic. Eso implica:
- **No todas las funciones** de la API directa están disponibles (por ejemplo, ciertas capacidades agénticas y herramientas del lado servidor de Anthropic **no** se ofrecen aquí).
- Las **novedades** pueden tardar más en llegar que en la API directa.
- Los **identificadores de modelo** y algunos detalles cambian respecto a la API directa.

### 3. Cómo decidir

- **API directa de Anthropic:** máxima funcionalidad y novedades; ideal si no tienes una atadura fuerte a un cloud.
- **Bedrock / Vertex:** si tu organización **ya está** en ese cloud y prioriza facturación, identidad y compliance integrados.

## Ejemplo aplicado

Una empresa con todo su stack en AWS, requisitos de compliance y facturación centralizada, encaja con **Bedrock**. Un desarrollador independiente que quiere las últimas funciones, con la **API directa**.

## Ejercicio práctico

1. Para tu caso (o uno imaginario), enumera 2 razones para usar Bedrock/Vertex y 2 para la API directa.
2. Decide cuál elegirías y por qué.
3. **Criterio de éxito:** justificas la elección por el contexto, no por "cuál es mejor".

## Errores comunes

- **Asumir paridad total de funciones:** Bedrock/Vertex no ofrecen todo lo de la API directa.
- **Elegir por moda:** elige por dónde vive tu organización y tus requisitos.

## Resumen en 3 frases

1. Bedrock y Vertex dan acceso a Claude integrado en AWS/GCP (facturación, identidad, compliance).
2. A cambio, no ofrecen todas las funciones de la API directa y las novedades llegan más tarde.
3. Elige según dónde vive tu organización: API directa para máxima funcionalidad; Bedrock/Vertex para integración cloud.

## Recursos para profundizar

- `claude-amazon-bedrock` y `claude-google-vertex` (catálogo) — cursos oficiales.
- [docs.claude.com — Bedrock y Vertex](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `02-bedrock-arquitectura`

## Fuentes

- [docs.claude.com — proveedores cloud](https://docs.claude.com) — consultado 2026-06-14.
