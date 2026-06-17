---
titulo: "Proyecto: Análisis de documentos legales o técnicos largos"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: media
tiempo_estimado_horas: 6
---

# Análisis de documentos legales o técnicos largos

## Descripción

Una herramienta que **analiza documentos extensos** (contratos, normativas, especificaciones): los resume, extrae cláusulas o requisitos clave, responde preguntas y señala riesgos. Aprovecha la ventana de contexto larga de Claude.

## Objetivos

- [ ] Procesar documentos largos (resumen + extracción estructurada).
- [ ] Responder preguntas con referencias a la sección.
- [ ] Señalar puntos de atención (no asesoría legal).
- [ ] Manejar documentos que exceden el contexto (troceo).

## Stack y prerrequisitos

- SDK de Anthropic; lectura de PDF/texto.
- Módulos 07 (API) y 05 (prompting).

## Arquitectura propuesta

```text
Documento → (si cabe) contexto largo / (si no) troceo + síntesis → resumen + extracción estructurada + Q&A
```

## Pasos

### 1. Preparación
- Conversor de PDF a texto; define el esquema de extracción (cláusula, parte, fecha…).

### 2. Núcleo
- Resumen por secciones; extracción con structured outputs; Q&A con citas a sección.

### 3. Pruebas
- 2-3 documentos reales; verifica extracción y referencias.

### 4. Refinamiento
- Estrategia para documentos enormes (mapa-reduce de resúmenes).

## Criterios de éxito

- [ ] Resume y extrae correctamente los campos clave.
- [ ] Las respuestas citan la sección correcta.
- [ ] Deja claro que **no es asesoría legal**.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `claude-cookbooks` (summarization) — catálogo.
- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
