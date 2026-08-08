---
titulo: "Forzar el formato de respuesta (y el fin del prefill)"
modulo: "05-prompt-engineering"
orden: 8
creado: 2026-06-14
revisado: 2026-07-20
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 20
---

# Forzar el formato de respuesta (y el fin del prefill)

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender qué era el **prefill** y **por qué ya no se usa** en los modelos de la línea actual.
- [ ] Forzar el formato de salida con las técnicas vigentes: **instrucciones claras** y **salidas estructuradas**.

> **⚠️ Actualización importante (julio 2026):** esta lección se planificó cuando el *prefill* era la técnica estándar. **Ya no lo es.** En los modelos actuales de Claude (Opus 4.6 y posteriores, Opus 4.8, Sonnet 4.6, **Sonnet 5**, Fable 5), rellenar el inicio de la respuesta del asistente (*prefill*) **devuelve error 400**. La lección explica la alternativa correcta de hoy.

## Prerrequisitos

- Lección 06 del módulo (XML tags).

## Contexto

A veces necesitas que la respuesta tenga **exactamente** un formato: solo JSON, solo una palabra, sin preámbulos. Antes se usaba el "prefill" (empezar tú la respuesta del modelo para forzar el patrón). Esa técnica ha quedado atrás; hoy hay formas mejores y más fiables.

## Contenido principal

### 1. Qué era el prefill (y por qué se menciona)

El prefill consistía en escribir el principio de la respuesta del asistente (p. ej. `{` para forzar JSON) y dejar que Claude continuara. Funcionaba en modelos antiguos. **En la línea Opus 4.6+ y Sonnet 4.6+ (incluido Sonnet 5) y en Fable 5 no está soportado** y produce un error 400, así que no lo uses. Haiku 4.5 es la excepción que confirma la regla: sigue admitiéndolo, pero no construyas sobre una técnica que el resto de la familia ya ha retirado.

### 2. Alternativa 1 — instrucciones claras (interfaz y API)

Pide el formato de forma explícita y, si quieres, prohíbe los preámbulos:
```
Responde ÚNICAMENTE con la clasificación en una palabra
(Positivo / Negativo / Neutro). Sin explicaciones ni preámbulos.
```
Para la mayoría de los casos de uso por interfaz, esto basta.

### 3. Alternativa 2 — salidas estructuradas (API)

Cuando trabajas por API y necesitas **garantía** de formato (JSON que valide contra un esquema), se usan las *structured outputs* (`output_config.format`). El modelo se ciñe al esquema que defines. Es el sustituto técnico del prefill para formato garantizado. Lo verás en detalle en el Módulo 07 (API).

## Ejemplo aplicado

En interfaz, forzar formato sin prefill:
```
Extrae del texto el nombre y el email. Devuélvelo así, sin nada más:
nombre: <...>
email: <...>

Texto: [pegar]
```

## Ejercicio práctico

1. Pide una salida en un formato estricto (solo una lista, o solo dos campos).
2. Consíguelo con **instrucciones claras** (sin prefill).
3. **Criterio de éxito:** la respuesta sale en el formato exacto pedido, sin preámbulos.

## Errores comunes

- **Intentar usar prefill:** da error en los modelos actuales. Usa instrucciones o salidas estructuradas.
- **Pedir "solo JSON" sin más en interfaz:** funciona casi siempre, pero si necesitas garantía total, usa structured outputs por API.

## Resumen en 3 frases

1. El prefill quedó obsoleto: en la línea Opus 4.6+ / Sonnet 4.6+ (y Sonnet 5, Fable 5) devuelve error 400.
2. Para forzar formato hoy: instrucciones claras (interfaz) y salidas estructuradas (API).
3. Las *structured outputs* dan garantía de formato cuando trabajas por API.

## Recursos para profundizar

- Módulo 07 (API) — salidas estructuradas con esquema.
- [docs.claude.com — structured outputs](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `09-extended-thinking`

## Fuentes

- [docs.claude.com — structured outputs y migración de modelos](https://docs.claude.com) — consultado 2026-06-14.
- [Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) — el prefill devuelve 400 también en Sonnet 5 — consultado 2026-07-20.
