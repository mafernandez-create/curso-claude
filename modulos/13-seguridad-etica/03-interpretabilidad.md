---
titulo: "Interpretabilidad: el programa de investigación"
modulo: "13-seguridad-etica"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Interpretabilidad: el programa de investigación

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué busca la **interpretabilidad** mecanicista.
- [ ] Entender por qué es clave para la seguridad.
- [ ] Situar el problema de la **"caja negra"**.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

Una de las dificultades del alignment (lección 01) es que no sabemos bien **qué pasa dentro** de un modelo. La interpretabilidad es el intento de abrir esa caja negra.

## Contenido principal

### 1. El problema de la caja negra

Una red neuronal grande tiene miles de millones de parámetros. Funciona, pero **no entendemos directamente** por qué produce cada salida. Para confiar en sistemas potentes, querríamos poder **inspeccionar su funcionamiento interno**, no solo observar entradas y salidas.

### 2. Qué es la interpretabilidad mecanicista

Es el programa de investigación que busca **entender los mecanismos internos** del modelo: qué representan sus activaciones, qué "circuitos" implementan qué comportamientos. La meta a largo plazo es poder **leer** lo que el modelo "piensa" lo suficiente para detectar problemas (engaño, sesgos, capacidades peligrosas) antes de que causen daño.

### 3. Por qué importa para la seguridad

- **Detectar comportamientos no deseados** que no se ven solo probando entradas/salidas.
- **Auditar** modelos antes de desplegarlos.
- **Construir confianza** basada en comprensión, no solo en pruebas empíricas.

### 4. Estado: avance real, problema abierto

Ha habido avances notables (lección 04, sobre features interpretables), pero entender por completo un modelo de frontera sigue siendo un **problema abierto**. Es un campo activo, no resuelto.

## Ejemplo aplicado

Si pudiéramos identificar dentro del modelo el "concepto" asociado a una capacidad peligrosa, podríamos **monitorizar** cuándo se activa o incluso intervenir. Eso es lo que la interpretabilidad persigue: pasar de "parece seguro en mis pruebas" a "entiendo por qué es seguro".

## Ejercicio práctico

1. Explica con tus palabras por qué "funciona bien en mis pruebas" no garantiza seguridad.
2. Di una cosa que la interpretabilidad permitiría hacer que las pruebas de caja negra no.
3. **Criterio de éxito:** relacionas interpretabilidad con detección temprana de problemas.

## Errores comunes

- **Creer que ya entendemos los modelos por dentro:** es un campo en progreso.
- **Confundir explicación post-hoc con mecanismo real:** que el modelo "explique" su respuesta no garantiza que ese sea su proceso interno.

## Resumen en 3 frases

1. Los modelos grandes son cajas negras: funcionan, pero no entendemos directamente su interior.
2. La interpretabilidad mecanicista busca entender sus mecanismos internos para auditar y detectar problemas.
3. Hay avances reales, pero comprender del todo un modelo de frontera sigue siendo un problema abierto.

## Recursos para profundizar

- `transformer-circuits` ⭐ — catálogo.
- Lección 04 (Sparse Autoencoders).

## Siguiente lección

➡️ `04-sparse-autoencoders`

## Fuentes

- [transformer-circuits.pub](https://transformer-circuits.pub) — consultado 2026-06-14.
