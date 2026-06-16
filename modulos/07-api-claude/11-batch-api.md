---
titulo: "Batch API: procesamiento masivo a bajo coste"
modulo: "07-api-claude"
orden: 11
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Batch API: procesamiento masivo a bajo coste

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es la **Batch API** y cuándo conviene.
- [ ] Conocer su flujo (enviar lote → esperar → recoger resultados).
- [ ] Decidir entre llamadas en tiempo real y por lotes.

## Prerrequisitos

- Lección 02 o 03 del módulo.

## Contexto

Cuando tienes **muchas peticiones** que **no necesitan respuesta inmediata** (clasificar miles de comentarios, resumir un archivo de documentos), procesarlas de una en una en tiempo real es caro y lento. La **Batch API** las procesa de forma asíncrona y **más barata**.

## Contenido principal

### 1. Qué es

Envías un **lote** de peticiones de una vez; se procesan en segundo plano (suele completarse en menos de una hora) y recoges los resultados después. A cambio de no ser inmediato, el coste por token es **sensiblemente menor** (aproximadamente la mitad).

### 2. El flujo

1. **Creas** el lote con la lista de peticiones (cada una con un identificador propio).
2. **Esperas** (consultas el estado periódicamente).
3. **Recoges** los resultados cuando el lote termina, emparejándolos por identificador.

```python
lote = client.messages.batches.create(requests=[...])  # lista de peticiones
# más tarde: client.messages.batches.retrieve(lote.id) hasta que termine
# luego: client.messages.batches.results(lote.id)
```

### 3. Tiempo real vs. lote

- **Tiempo real:** un usuario espera la respuesta ahora (chat, asistente).
- **Lote:** trabajo masivo de fondo sin prisa (análisis de datos, etiquetado).

## Ejemplo aplicado

Clasificar el sentimiento de 5.000 reseñas: en lugar de 5.000 llamadas en vivo, envías un lote, esperas y recoges. Más barato y sin saturar los límites de tiempo real.

## Ejercicio práctico

1. Imagina una tarea tuya con muchas peticiones sin urgencia.
2. Describe cómo la dividirías en un lote y cómo recogerías resultados.
3. **Criterio de éxito:** distingues qué tareas son para batch y cuáles para tiempo real.

## Errores comunes

- **Usar batch para algo interactivo:** el usuario no va a esperar a un lote.
- **No emparejar por identificador:** asigna a cada petición un id propio para casar resultados.

## Resumen en 3 frases

1. La Batch API procesa muchas peticiones de forma asíncrona y más barata.
2. El flujo es crear el lote, esperar y recoger los resultados por identificador.
3. Úsala para trabajo masivo sin urgencia; el tiempo real, para lo interactivo.

## Recursos para profundizar

- [docs.claude.com — Batch API](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `12-extended-thinking-api`

## Fuentes

- [docs.claude.com — Message Batches](https://docs.claude.com) — consultado 2026-06-14.
