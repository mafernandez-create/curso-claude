---
titulo: "Costes y facturación en cloud"
modulo: "10-cloud"
orden: 12
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Costes y facturación en cloud

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender cómo se **factura** Claude en API directa vs. Bedrock vs. Vertex.
- [ ] Reconocer los **costes ocultos** asociados a usar un cloud.
- [ ] Saber **dónde mirar** los precios actuales (sin memorizarlos).

> **Importante (honestidad epistémica):** los precios cambian con frecuencia. Esta lección NO da cifras; te enseña a razonar y a consultar las fuentes oficiales.

## Prerrequisitos

- Lección 11 del módulo. Idea de tokens (Módulo 07).

## Contenido principal

### 1. El modelo de coste base: tokens

En las tres vías, el coste principal de Claude se mide en **tokens** de entrada y de salida (Módulo 07). El precio por token depende del **modelo** (Opus, Sonnet, Haiku) y, normalmente, es distinto para entrada y salida.

### 2. Dónde se factura

- **API directa:** facturas a Anthropic (claude.com/pricing).
- **Bedrock:** el consumo aparece en tu **factura de AWS**.
- **Vertex:** el consumo aparece en tu **factura de Google Cloud**.

El precio por token puede no ser idéntico entre vías; consulta cada fuente.

### 3. Costes que suelen olvidarse

- **Servicios alrededor:** Knowledge Bases, vector stores, almacenamiento, red, logs… en Bedrock/Vertex tienen su propio coste además de los tokens.
- **Caching y batch:** mecanismos como prompt caching o procesamiento por lotes pueden reducir coste; mira si están disponibles en tu vía.
- **Pruebas y reintentos:** el desarrollo consume tokens; ponte límites.

### 4. Dónde mirar los precios actuales

- API directa: **claude.com/pricing** y [docs.claude.com](https://docs.claude.com).
- Bedrock: página de precios de **Amazon Bedrock**.
- Vertex: página de precios de **Vertex AI** (Google Cloud).

## Ejemplo aplicado

Un equipo estima coste mensual: nº de peticiones × tokens medios (entrada+salida) × precio del modelo, **más** el coste de su Knowledge Base y almacenamiento. Como no memoriza precios, abre las páginas oficiales y mete las cifras del día.

## Ejercicio práctico

1. Elige un modelo y una vía; localiza su precio por token hoy en la fuente oficial.
2. Haz una estimación de coste mensual para un volumen imaginario.
3. **Criterio de éxito:** estimas coste con datos consultados (no de memoria) e incluyes servicios alrededor.

## Errores comunes

- **Citar precios de memoria:** quedan obsoletos; consúltalos siempre.
- **Contar solo los tokens:** olvidar almacenamiento, RAG, red y logs.

## Resumen en 3 frases

1. El coste base de Claude es por tokens (entrada/salida) y depende del modelo.
2. Se factura a Anthropic (API directa), AWS (Bedrock) o GCP (Vertex), con servicios alrededor que también cuestan.
3. No memorices precios: consúltalos en claude.com/pricing y en las páginas de Bedrock/Vertex.

## Recursos para profundizar

- [claude.com/pricing](https://claude.com/pricing) — consultado 2026-06-14.
- Páginas de precios de Amazon Bedrock y Vertex AI.

## Siguiente lección

➡️ `13-seguridad-compliance`

## Fuentes

- [docs.claude.com — pricing](https://docs.claude.com) — consultado 2026-06-14.
