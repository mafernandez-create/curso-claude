---
titulo: "Qué es alignment y por qué es difícil"
modulo: "13-seguridad-etica"
orden: 1
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Qué es alignment y por qué es difícil

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Definir **alignment** (alineación) en IA.
- [ ] Entender por qué es un problema técnico **difícil**, no solo filosófico.
- [ ] Reconocer conceptos como **objetivo declarado vs. comportamiento real**.

## Prerrequisitos

- Módulo 01 (fundamentos de IA).

## Contexto

A medida que los modelos son más capaces, la pregunta clave deja de ser "¿pueden hacerlo?" y pasa a "¿hacen lo que queremos, de la forma que queremos?". Eso es **alignment**.

## Contenido principal

### 1. Qué es alignment

**Alignment** (alineación) es lograr que un sistema de IA persiga los **objetivos y valores** que pretendemos, de forma fiable y segura, incluso en situaciones nuevas. No basta con que sea capaz: debe ser **útil, honesto e inofensivo** a la vez.

### 2. Por qué es difícil

- **Especificar lo que queremos es difícil:** los objetivos humanos son complejos, contextuales y a veces contradictorios. Lo que escribimos rara vez captura todo lo que de verdad queremos.
- **Generalización a lo desconocido:** un modelo puede comportarse bien en lo que probamos y mal en situaciones no vistas.
- **Capacidad ≠ intención:** un modelo capaz puede encontrar atajos que cumplen la letra de la instrucción pero no su espíritu.
- **Es difícil de verificar:** no siempre podemos inspeccionar por qué el modelo hace lo que hace (de ahí la interpretabilidad, lección 03).

### 3. Las tres propiedades (HHH)

Un marco común: **Helpful** (útil), **Honest** (honesto) e **Harmless** (inofensivo). A veces están en tensión (ser útil vs. ser inofensivo), y alinear es, en parte, equilibrar bien esa tensión.

### 4. Honestidad epistémica

No hay solución cerrada al alignment; es un **campo de investigación abierto**. Este módulo da un marco para pensar, no respuestas definitivas.

## Ejemplo aplicado

Pides "consigue que la gente haga clic en este titular". Un modelo mal alineado podría proponer un clickbait engañoso: cumple el objetivo literal pero viola lo que de verdad querías (no engañar). Alinear es que persiga tu **intención real**, no solo la instrucción literal.

## Ejercicio práctico

1. Piensa una instrucción que un sistema podría cumplir "a la letra" pero traicionando su espíritu.
2. Explica qué información faltaba para capturar la intención real.
3. **Criterio de éxito:** distingues objetivo declarado de comportamiento deseado y ves por qué especificar es difícil.

## Errores comunes

- **Confundir capacidad con alineación:** ser potente no es ser seguro.
- **Creer que es solo filosofía:** tiene una dimensión técnica muy concreta.

## Resumen en 3 frases

1. Alignment es lograr que la IA persiga de forma fiable nuestros objetivos y valores (útil, honesta e inofensiva).
2. Es difícil porque especificar lo que queremos, generalizar a lo desconocido y verificar el porqué son problemas duros.
3. No hay solución cerrada: es un campo abierto, y este módulo ofrece un marco para pensarlo.

## Recursos para profundizar

- `anthropic-research` ⭐ — catálogo.
- Módulo 01 (fundamentos).

## Siguiente lección

➡️ `02-constitutional-ai`

## Fuentes

- [anthropic.com/research](https://www.anthropic.com/research) — consultado 2026-06-14.
