---
titulo: "Prompt caching: reducir costes en la API"
modulo: "05-prompt-engineering"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Prompt caching: reducir costes en la API

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **prompt caching** y qué problema resuelve.
- [ ] Identificar cuándo merece la pena usarlo.
- [ ] Entender la regla de oro: el caché es un **prefijo**.

> **Nota:** esta técnica es relevante sobre todo si usas Claude **por API** (Módulo 07). Por interfaz no la gestionas tú.

## Prerrequisitos

- Lección 03 del módulo (system prompts).
- Módulo 01, lección 01 (qué es un token).

## Contexto

Si haces muchas llamadas a la API que comparten una **parte grande y fija** (un manual, unas instrucciones largas, muchos ejemplos), pagar por reprocesar ese trozo cada vez es caro y lento. El prompt caching lo guarda para reutilizarlo.

## Contenido principal

### 1. Qué es

El caché **almacena el procesamiento de un prefijo** del prompt. En llamadas posteriores que empiezan igual, ese trozo se sirve desde caché: mucho más barato (≈10 % del coste) y más rápido.

### 2. La regla de oro: es un prefijo

El caché coincide por **prefijo exacto**: cualquier cambio, por pequeño que sea, **invalida** todo lo que va después. De ahí dos consejos:
- Pon lo **estable** al principio (instrucciones fijas, documentos de referencia).
- Pon lo **variable** al final (la pregunta concreta de cada llamada).
- No metas elementos cambiantes (fecha, identificadores) en la parte que quieres cachear.

### 3. Cuándo merece la pena

- Cuando repites llamadas con un **contexto grande compartido** (un documento largo, un system prompt extenso, muchos ejemplos).
- No aporta si cada llamada es distinta desde el principio o si el contexto compartido es pequeño.

## Ejemplo aplicado

Un asistente que responde preguntas sobre el **mismo manual de 50 páginas** en cada llamada: se cachea el manual (prefijo estable) y solo varía la pregunta del usuario (al final). A partir de la segunda llamada, el manual se sirve desde caché.

## Ejercicio práctico

1. Imagina un caso tuyo de uso por API con contexto grande repetido.
2. Decide qué parte iría en el prefijo cacheable y qué parte al final.
3. **Criterio de éxito:** sabes separar lo estable (cacheable) de lo variable.

## Errores comunes

- **Meter algo variable (una fecha) en el prefijo:** invalida el caché en cada llamada.
- **Usarlo con contexto pequeño:** por debajo de cierto tamaño no se cachea y no compensa.

## Resumen en 3 frases

1. El prompt caching guarda el procesamiento de un prefijo fijo para reutilizarlo en llamadas posteriores, barato y rápido.
2. Funciona por prefijo exacto: lo estable va al principio, lo variable al final.
3. Compensa cuando repites llamadas con un contexto grande compartido (por API).

## Recursos para profundizar

- Módulo 07 (API) — implementación del caching.
- [docs.claude.com — prompt caching](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `11-evaluacion-prompts`

## Fuentes

- [docs.claude.com — prompt caching](https://docs.claude.com) — consultado 2026-06-14.
