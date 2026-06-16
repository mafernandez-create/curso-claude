---
titulo: "Prompt caching en la API: casos y ahorros"
modulo: "07-api-claude"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Prompt caching en la API: casos y ahorros

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Activar el **prompt caching** en una llamada a la API.
- [ ] Colocar el punto de caché donde de verdad ahorra.
- [ ] Verificar que el caché se está usando.

## Prerrequisitos

- Módulo 05, lección 10 (concepto de prompt caching).

## Contexto

Si repites llamadas que comparten un **prefijo grande** (un system prompt largo, un documento de referencia, muchos ejemplos), el caching evita reprocesarlo cada vez: hasta ~90 % más barato en esa parte y más rápido.

## Contenido principal

### 1. Cómo se activa

Se marca con `cache_control` el bloque hasta el que quieres cachear (normalmente el final de la parte estable):
```python
client.messages.create(
    model="claude-opus-4-8", max_tokens=1024,
    system=[{"type":"text","text":MANUAL_LARGO,"cache_control":{"type":"ephemeral"}}],
    messages=[{"role":"user","content":"Pregunta concreta"}],
)
```

### 2. Regla de oro: es un prefijo

El caché coincide por **prefijo exacto**. Pon lo **estable** al principio (instrucciones, documentos) y lo **variable** al final (la pregunta). Cualquier cambio en el prefijo (¡una fecha!) lo invalida.

### 3. Verificar que funciona

La respuesta incluye, en `usage`, cuántos tokens se **leyeron de caché** (`cache_read_input_tokens`). Si en llamadas repetidas con el mismo prefijo eso es 0, algo lo está invalidando (un dato variable colado en el prefijo).

## Ejemplo aplicado

Un asistente que responde sobre el **mismo manual** en cada llamada: cacheas el manual (en `system`), y solo varía la pregunta del usuario. A partir de la segunda llamada, el manual se sirve de caché.

## Ejercicio práctico

1. Haz dos llamadas con un system prompt largo idéntico, con `cache_control`.
2. Comprueba `cache_read_input_tokens` en la segunda.
3. **Criterio de éxito:** ves lecturas de caché > 0 en la repetición.

## Errores comunes

- **Meter algo variable en el prefijo** (fecha, ID): invalida el caché siempre.
- **Cachear prefijos pequeños:** por debajo de cierto tamaño no se cachea.

## Resumen en 3 frases

1. El caching reutiliza el prefijo procesado en llamadas posteriores, mucho más barato y rápido.
2. Coincide por prefijo exacto: estable al principio, variable al final.
3. Verifica con `cache_read_input_tokens`; si es 0, hay un invalidador en el prefijo.

## Recursos para profundizar

- [docs.claude.com — prompt caching](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `11-batch-api`

## Fuentes

- [docs.claude.com — prompt caching](https://docs.claude.com) — consultado 2026-06-14.
