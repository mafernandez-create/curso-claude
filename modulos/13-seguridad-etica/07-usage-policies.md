---
titulo: "Las Usage Policies de Anthropic"
modulo: "13-seguridad-etica"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Las Usage Policies de Anthropic

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Saber qué son las **Usage Policies** (políticas de uso aceptable).
- [ ] Reconocer las categorías generales de uso **prohibido**.
- [ ] Entender tu responsabilidad al construir sobre Claude.

> **Nota:** las políticas concretas cambian; consulta la versión vigente en anthropic.com. Esta lección explica el marco, no el texto literal.

## Prerrequisitos

- Lección 06 del módulo.

## Contexto

Anthropic publica una **Usage Policy** (política de uso aceptable) que define qué usos están permitidos y cuáles no. Si usas Claude o construyes sobre él, te obliga.

## Contenido principal

### 1. Qué son

Un documento que establece los **límites de uso aceptable** de los productos de Anthropic. Define usos prohibidos, responsabilidades de quien construye aplicaciones y, en algunos casos, requisitos adicionales para usos sensibles.

### 2. Categorías generales de uso prohibido

A grandes rasgos (consulta el texto vigente para el detalle), se prohíben usos como:
- Generar **daño físico** o facilitar armas (incluida biosec).
- **Ciberataques** y software malicioso.
- **Explotación de menores** y contenido sexual ilegal.
- **Desinformación** y fraude a escala, manipulación electoral.
- **Acoso, discriminación** y violación de derechos.
- Usos de **alto riesgo** sin las salvaguardas exigidas (p. ej. decisiones críticas sobre personas sin supervisión humana).

### 3. Tu responsabilidad como constructor

Si despliegas una app con Claude, **eres responsable** de que tus usuarios cumplan la política y de añadir salvaguardas (filtros, supervisión humana, límites). No puedes externalizar esa responsabilidad al modelo.

### 4. Por qué existe

Estas políticas son una capa de seguridad **a nivel de uso**, complementaria a la alineación del modelo (CAI). Ninguna capa basta sola; juntas reducen el riesgo.

## Ejemplo aplicado

Construyes un asistente de salud. La política y el sentido común exigen: no presentarlo como sustituto de un médico, mantener **supervisión humana**, y advertir que no es diagnóstico. Cumplir la política no es burocracia: protege a tus usuarios.

## Ejercicio práctico

1. Entra en la Usage Policy vigente y localiza 3 usos prohibidos.
2. Para una app tuya, anota qué salvaguarda añadirías para cumplirla.
3. **Criterio de éxito:** sabes dónde está la política y asumes tu responsabilidad como constructor.

## Errores comunes

- **Suponer que el modelo se encarga de todo:** la política te obliga a ti también.
- **Citar de memoria los límites:** consúltalos; cambian.

## Resumen en 3 frases

1. Las Usage Policies definen los usos aceptables y prohibidos de los productos de Anthropic.
2. Cubren daños físicos, ciber, menores, desinformación, discriminación y usos de alto riesgo sin salvaguardas.
3. Como constructor eres responsable de cumplirlas y de añadir salvaguardas; consulta siempre la versión vigente.

## Recursos para profundizar

- Usage Policy en [anthropic.com](https://www.anthropic.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `08-frontier-risk`

## Fuentes

- Anthropic — Usage Policy — consultado 2026-06-14.
