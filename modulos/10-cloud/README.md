# Módulo 10 — Claude en AWS Bedrock y Google Vertex AI

**Eje:** Desarrollador (opcional 🔹)
**Tiempo estimado:** 8–10 h
**Prerrequisitos:** Módulo 07 (API). Python. AWS o GCP básicos.
**Última actualización:** 2026-06-14 (módulo completo en borrador)

## Objetivo

Saber desplegar e integrar Claude dentro de los ecosistemas cloud empresariales (AWS Bedrock, Google Vertex AI). Comprender ventajas, limitaciones, costes y cuándo tiene sentido usar estas plataformas frente a la API directa de Anthropic.

Este módulo es **opcional**: solo lo necesitas si trabajas o vas a trabajar en un entorno corporativo cloud, o si quieres añadir esta capa a tu CV técnico.

## Lecciones

| Nº | Título | Estado | Tiempo |
|----|--------|--------|--------|
| 01 | [Por qué usar Claude vía Bedrock o Vertex (y por qué no)](01-por-que-bedrock-vertex.md) | borrador | 25 min |
| 02 | [AWS Bedrock: arquitectura y modelos disponibles](02-bedrock-arquitectura.md) | borrador | 30 min |
| 03 | [Autenticación y permisos IAM para Claude en AWS](03-iam-aws.md) | borrador | 30 min |
| 04 | [Primeras llamadas a Claude en Bedrock con el SDK](04-primeras-llamadas-bedrock.md) | borrador | 35 min |
| 05 | [RAG en AWS: Knowledge Bases for Bedrock](05-rag-knowledge-bases.md) | borrador | 30 min |
| 06 | [Agents for Bedrock: agentes gestionados en AWS](06-bedrock-agents.md) | borrador | 30 min |
| 07 | [Google Vertex AI: arquitectura y modelos Claude](07-vertex-arquitectura.md) | borrador | 30 min |
| 08 | [Autenticación en GCP: Service Accounts y permisos](08-auth-gcp-service-accounts.md) | borrador | 30 min |
| 09 | [Primeras llamadas a Claude en Vertex con el SDK](09-claude-vertex-primeros-pasos.md) | borrador | 35 min |
| 10 | [RAG y grounding en Vertex AI](10-rag-grounding-vertex.md) | borrador | 30 min |
| 11 | [Comparativa: API directa vs. Bedrock vs. Vertex](11-comparativa-plataformas.md) | borrador | 30 min |
| 12 | [Costes y facturación en cloud](12-costes-facturacion.md) | borrador | 25 min |
| 13 | [Seguridad y compliance: GDPR, SOC 2, HIPAA y residencia](13-seguridad-compliance.md) | borrador | 30 min |

## Recursos clave

Del catálogo:
- `claude-amazon-bedrock` ⭐ (curso oficial).
- `claude-google-vertex` ⭐ (curso oficial).
- Documentación oficial de AWS Bedrock y Google Vertex AI.

## Entrega

Despliegue funcional (puede ser en una cuenta de pruebas gratuita) de un endpoint de Claude en **una** de las dos plataformas (la que más te interese), con:
- Autenticación configurada correctamente.
- Al menos una llamada de ejemplo funcionando.
- Documentación de lo que ha costado (tiempo y dinero).

Documentar en `modulos/10-cloud/despliegue-cloud.md`.
