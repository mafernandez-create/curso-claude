---
titulo: "Agents for Bedrock: agentes gestionados en AWS"
modulo: "10-cloud"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Agents for Bedrock: agentes gestionados en AWS

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué son los **Agents for Bedrock** y qué resuelven.
- [ ] Distinguirlos de las **capacidades agénticas de la API directa** de Anthropic.
- [ ] Saber que son **funcionalidades de AWS**, no de Anthropic.

> **Nota:** este es un servicio de AWS en evolución; consulta su documentación para capacidades y límites actuales.

## Prerrequisitos

- Lección 05 del módulo. Concepto de "agente" (Módulo 09).

## Contenido principal

### 1. Qué son

Los **Agents for Bedrock** son una capa de **AWS** para construir agentes que razonan, llaman a herramientas/APIs y consultan Knowledge Bases, orquestados por la plataforma. Defines acciones (por ejemplo, llamadas a tus APIs) y la base de conocimiento, y el agente las usa para cumplir tareas.

### 2. No confundir con lo de Anthropic

Aquí está la clave de honestidad técnica de este módulo:

- Los **Agents for Bedrock** son de **AWS**: su orquestación, su configuración, su consola.
- Las **capacidades agénticas y herramientas del lado servidor de Anthropic** (las de la API directa) son **otra cosa** y **no** están necesariamente disponibles en Bedrock.

Es decir: "agentes en Bedrock" = el producto de AWS, no las features agénticas de la API de Anthropic.

### 3. Cuándo usarlos

Si ya vives en AWS y quieres un agente gestionado integrado con tus APIs y Knowledge Bases sin programar la orquestación, encajan. Si quieres las últimas capacidades agénticas de Anthropic, ve a la API directa (Módulos 07 y 09).

## Ejemplo aplicado

Un equipo en AWS crea un agente de soporte: una Knowledge Base con sus manuales + una "acción" que consulta su API de pedidos. El agente, ante "¿dónde está mi pedido?", llama a la API y responde; ante "¿cómo devuelvo?", usa el manual. Todo orquestado por AWS.

## Ejercicio práctico

1. Diseña en papel un agente de Bedrock: qué Knowledge Base y qué 1-2 acciones (APIs) tendría.
2. Explica por qué esto es un servicio de AWS y no las features de Anthropic.
3. **Criterio de éxito:** no confundes Agents for Bedrock con las capacidades agénticas de la API directa.

## Errores comunes

- **Asumir paridad con la API de Anthropic:** son agentes de AWS, con su propio alcance.
- **Esperar las últimas novedades agénticas de Anthropic aquí:** suelen llegar antes a la API directa.

## Resumen en 3 frases

1. Agents for Bedrock es la capa de AWS para agentes que usan herramientas/APIs y Knowledge Bases.
2. Son un producto de AWS, distinto de las capacidades agénticas y server-side tools de la API directa de Anthropic.
3. Encajan si vives en AWS y quieres orquestación gestionada; para lo último de Anthropic, API directa.

## Recursos para profundizar

- Documentación de AWS sobre Agents for Bedrock.
- Módulo 09 (Skills y subagentes con la API/Claude Code).

## Siguiente lección

➡️ `07-vertex-arquitectura`

## Fuentes

- [docs.claude.com — Bedrock](https://docs.claude.com) — consultado 2026-06-14.
