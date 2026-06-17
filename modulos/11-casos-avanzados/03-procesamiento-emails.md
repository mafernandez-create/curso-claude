---
titulo: "Proyecto: Sistema de procesamiento de emails con Claude"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: media
tiempo_estimado_horas: 8
---

# Sistema de procesamiento de emails con Claude

## Descripción

Un sistema que **clasifica, resume y propone respuestas** a una bandeja de correo. Claude lee cada email, le asigna categoría/prioridad y redacta un **borrador** de respuesta que un humano revisa antes de enviar.

## Objetivos

- [ ] Clasificar emails por categoría y prioridad con **structured outputs**.
- [ ] Resumir hilos largos.
- [ ] Generar borradores de respuesta (nunca enviar sin revisión humana).
- [ ] Diseñar un flujo con humano en el bucle.

## Stack y prerrequisitos

- SDK de Anthropic; acceso a la bandeja (API de correo) en **solo lectura** o sobre exportaciones.
- Módulos 07 (structured outputs) y 05 (prompting).

## Arquitectura propuesta

```text
Email → Claude (clasifica + resume) → ¿requiere respuesta? → borrador → REVISIÓN HUMANA → envío manual
```

## Pasos

### 1. Preparación
- Define el esquema de salida (categoría, prioridad, resumen, ¿borrador?).

### 2. Núcleo
- Prompt que clasifica y resume; structured output para la parte estructurada.
- Generación de borrador para los que lo requieran.

### 3. Pruebas
- Conjunto de emails de ejemplo (anonimizados). Mide aciertos de clasificación.

### 4. Refinamiento
- Ajusta categorías y prompt. **Regla de seguridad: el envío lo hace una persona.**

## Criterios de éxito

- [ ] Clasifica y resume correctamente un lote de prueba.
- [ ] Genera borradores útiles sin enviarlos automáticamente.
- [ ] Documentada la tasa de acierto en clasificación.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `claude-cookbooks` — catálogo.
- [docs.claude.com — structured outputs](https://docs.claude.com) — consultado 2026-06-14.
