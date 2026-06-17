---
titulo: "Sparse Autoencoders y features interpretables"
modulo: "13-seguridad-etica"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Sparse Autoencoders y features interpretables

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender el problema de la **superposición** de conceptos.
- [ ] Explicar qué hacen los **Sparse Autoencoders (SAE)**.
- [ ] Saber qué son las **features** interpretables y por qué importan.

## Prerrequisitos

- Lección 03 del módulo.

## Contexto

Esta lección concreta un avance importante de la interpretabilidad: encontrar **conceptos legibles** dentro del modelo. Es técnica, pero la idea central es accesible.

## Contenido principal

### 1. El problema: superposición

Las neuronas de un modelo no suelen representar **un** concepto cada una. Por eficiencia, el modelo **superpone** muchos conceptos en las mismas neuronas (una neurona se activa para cosas aparentemente sin relación). Eso hace difícil "leer" qué representa cada parte.

### 2. La idea: Sparse Autoencoders

Un **Sparse Autoencoder (SAE)** es una técnica para **descomponer** las activaciones del modelo en muchas **features** (características) más simples y, sobre todo, **dispersas** (sparse): en cada momento solo unas pocas están activas. La dispersión ayuda a que cada feature corresponda a un concepto más **legible**.

### 3. Qué son las features interpretables

Tras aplicar un SAE, se obtienen **features** que a menudo corresponden a conceptos humanos comprensibles (una ciudad concreta, un tono, un tema, un tipo de código). Investigaciones de Anthropic mostraron que es posible **identificar y hasta manipular** estas features, cambiando el comportamiento del modelo de forma dirigida.

### 4. Por qué importa

- **Legibilidad:** acercarse a "leer" qué representa el modelo.
- **Seguridad:** features asociadas a comportamientos peligrosos podrían monitorizarse.
- **Control:** abre la puerta a intervenir de forma más precisa que solo con prompts.

Sigue siendo investigación; no es una herramienta cerrada para el usuario final.

## Ejemplo aplicado

La investigación "Scaling Monosemanticity" identificó features que se activan ante conceptos concretos en un modelo de Claude, y mostró que potenciarlas o atenuarlas cambia su comportamiento. Es una prueba de que el interior del modelo **se puede empezar a leer**.

## Ejercicio práctico

1. Explica con tus palabras qué es la "superposición" y por qué complica la interpretabilidad.
2. Di qué aporta la dispersión (sparsity) para hacer legibles las features.
3. **Criterio de éxito:** relacionas SAE → features legibles → utilidad para seguridad.

## Errores comunes

- **Creer que cada neurona = un concepto:** la superposición lo desmiente.
- **Tomar esto como producto:** es investigación, no una función del producto Claude.

## Resumen en 3 frases

1. Los modelos superponen muchos conceptos en las mismas neuronas, lo que dificulta interpretarlos.
2. Los Sparse Autoencoders descomponen las activaciones en features dispersas y más legibles.
3. Esas features suelen corresponder a conceptos humanos y abren vías para monitorizar y controlar el comportamiento.

## Recursos para profundizar

- Papers "Towards Monosemanticity" y "Scaling Monosemanticity" (ver `recursos/papers-investigacion.md`).
- `transformer-circuits` ⭐ — catálogo.

## Siguiente lección

➡️ `05-jailbreaks-prompt-injection`

## Fuentes

- [transformer-circuits.pub](https://transformer-circuits.pub) — consultado 2026-06-14.
