---
titulo: "Análisis de documentos largos y PDFs"
modulo: "04-productividad"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Análisis de documentos largos y PDFs

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Usar Claude para **leer, resumir e interrogar** documentos largos (informes, contratos, PDFs).
- [ ] Formular **preguntas dirigidas** en vez de pedir "resúmeme esto" sin más.
- [ ] Verificar las respuestas contra el documento original.

## Prerrequisitos

- Módulo 03, lección 04 (Skills, incluido PDF).
- Módulo 01, lección 08 (limitaciones: por qué hay que verificar).

## Contexto

Leer un contrato de 30 páginas o un informe denso lleva tiempo. Claude puede **digerir** ese material y responder preguntas concretas en segundos. Bien usado, es como tener un analista que ya se ha leído el documento; mal usado, una fuente de errores si te fías sin comprobar.

## Contenido principal

### 1. Más allá del resumen genérico

"Resúmeme este PDF" da un resumen plano. Más útil es **preguntar con intención**:
- "¿Qué obligaciones asumo yo en este contrato?"
- "¿Hay cláusulas de penalización? ¿Cuáles?"
- "Compara la sección 3 con la 7: ¿se contradicen?"

### 2. Interrogar, no solo leer

Trata el documento como algo que puedes **interrogar** en varias rondas: empiezas con una visión general y vas afinando hacia lo que te importa. Cada pregunta puede apoyarse en la anterior.

### 3. Verificación: pide referencias y comprueba

Para afirmaciones importantes, pide a Claude que **cite la parte del documento** de donde lo saca, y compruébalo. En documentos con valor legal o económico, la verificación no es opcional: una alucinación sobre una cláusula puede salir cara.

## Ejemplo aplicado

```
Te adjunto un contrato de alquiler. Quiero saber: 1) duración y
preaviso para rescindir, 2) quién paga qué gastos, 3) penalizaciones.
Para cada respuesta, dime en qué cláusula lo has encontrado.
```
Luego abres esas cláusulas y confirmas.

## Ejercicio práctico

1. Toma un documento largo real (un manual, un informe, un contrato no confidencial).
2. Haz **tres preguntas dirigidas** y pide la cláusula/sección de origen.
3. Verifica una de las respuestas en el documento.
4. **Criterio de éxito:** obtienes respuestas útiles y has confirmado al menos una contra el original.

## Errores comunes

- **Fiarte de un resumen para decisiones importantes** sin abrir el documento.
- **Pedir solo "resumen"** cuando lo que necesitas son respuestas concretas a tus preguntas.

## Resumen en 3 frases

1. Claude lee, resume e interroga documentos largos en segundos.
2. Pregunta con intención y en varias rondas, en lugar de pedir un resumen genérico.
3. Pide referencias y verifica: en documentos legales o económicos, comprobar es obligatorio.

## Recursos para profundizar

- Módulo 03, lección 04 — Skill de PDF.
- Módulo 01, lección 08 — alucinaciones y límites.

## Siguiente lección

➡️ `11-biblioteca-prompts`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — manejo de documentos y PDF, consultado 2026-06-14.
