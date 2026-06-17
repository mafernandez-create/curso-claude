---
titulo: "Adaptaciones: público técnico vs. no técnico"
modulo: "12-formacion-docencia"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Adaptaciones: público técnico vs. no técnico

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Adaptar **lenguaje, ejemplos y profundidad** según el público.
- [ ] Decidir qué conceptos **simplificar** y cuáles no.
- [ ] Mantener el rigor sin abrumar.

## Prerrequisitos

- Lecciones 02 y 03 del módulo.

## Contexto

El mismo contenido necesita dos envoltorios distintos para un público técnico y uno no técnico. Adaptar no es "rebajar": es elegir el nivel de abstracción adecuado sin perder verdad.

## Contenido principal

### 1. Qué cambia con cada público

| Aspecto | No técnico | Técnico |
|---------|------------|---------|
| Lenguaje | Analogías, cero jerga sin explicar | Términos precisos, jerga compartida |
| Ejemplos | Tareas cotidianas (escribir, organizar) | Código, APIs, integración |
| Profundidad | "Qué hace y cómo pedirlo" | "Cómo funciona y cómo extenderlo" |
| Foco | Confianza y verificación | Límites, costes, arquitectura |

### 2. Qué simplificar y qué no

**Simplifica** el cómo funciona por dentro (tokens, arquitectura) si no aporta a su objetivo. **No simplifiques nunca**: la necesidad de verificar, la privacidad de datos y los límites éticos. Eso es para todos.

### 3. Analogías con cuidado

Las analogías ayudan al público no técnico ("Claude es como un becario brillante pero que a veces inventa, así que revisas su trabajo"). Útiles, pero avisa de que son aproximaciones; no las conviertas en afirmaciones técnicas falsas.

## Ejemplo aplicado

Concepto "verificar la salida":
- **No técnico:** "Claude a veces se inventa datos con seguridad; trátalo como un borrador que siempre revisas, igual que revisarías el de un compañero".
- **Técnico:** "los LLM pueden alucinar; añade verificación programática, citas y, si procede, grounding/RAG".

Misma idea, dos envoltorios.

## Ejercicio práctico

1. Toma un concepto del curso y escríbelo para público no técnico y para técnico.
2. Marca qué simplificaste y qué mantuviste igual.
3. **Criterio de éxito:** adaptas el envoltorio sin perder la verdad ni omitir verificación/ética.

## Errores comunes

- **Jerga sin explicar con no técnicos:** los pierdes.
- **Infantilizar a los técnicos:** los aburres.
- **Simplificar la verificación o la ética:** eso es innegociable para cualquier público.

## Resumen en 3 frases

1. Adapta lenguaje, ejemplos y profundidad al público; no es rebajar, es elegir el nivel adecuado.
2. Simplifica el funcionamiento interno si no aporta; nunca simplifiques verificación, privacidad ni ética.
3. Las analogías ayudan al público no técnico, pero deja claro que son aproximaciones.

## Recursos para profundizar

- `ai-fluency-educators` y `ai-fluency-nonprofits` — catálogo.

## Siguiente lección

➡️ `08-etica-docencia-ia`

## Fuentes

- Anthropic — AI Fluency (catálogo) — consultado 2026-06-14.
