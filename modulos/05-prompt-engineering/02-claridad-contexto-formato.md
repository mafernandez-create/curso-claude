---
titulo: "Claridad, contexto y formato: las tres patas"
modulo: "05-prompt-engineering"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Claridad, contexto y formato: las tres patas

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Aplicar las tres palancas que más mejoran un prompt: **claridad**, **contexto** y **formato**.
- [ ] Detectar cuál de las tres falla cuando una respuesta no te sirve.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

Si tuvieras que recordar solo tres cosas de todo el módulo, serían estas. La mayoría de los prompts flojos fallan en una de las tres.

## Contenido principal

### 1. Claridad

Di **exactamente** lo que quieres, sin ambigüedad. "Mejóralo" es vago; "hazlo más breve y elimina los tecnicismos" es claro. Si tú no sabrías qué hacer con la instrucción, Claude tampoco.

### 2. Contexto

Da la información que el modelo no puede adivinar: para quién es, con qué fin, qué tono, qué restricciones del mundo real. El contexto convierte una respuesta genérica en una a tu medida.

### 3. Formato

Especifica cómo quieres el resultado: lista, tabla, número de palabras, idioma, estructura. Si no lo dices, Claude elige por ti y no siempre acierta.

## Ejemplo aplicado

Flojo: `Dame ideas para el evento.`

Con las tres patas:
```
Organizo una jornada de bienvenida para 30 comerciales nuevos (contexto).
Dame 5 ideas de dinámicas de presentación (claridad: cuántas y de qué tipo),
en una tabla con columnas "dinámica", "duración" y "material" (formato).
```

## Ejercicio práctico

1. Coge una respuesta que no te gustó.
2. Identifica si falló por claridad, contexto o formato.
3. Reescribe el prompt corrigiendo esa pata.
4. **Criterio de éxito:** sabes diagnosticar cuál de las tres falló.

## Errores comunes

- **Confundir claridad con longitud:** un prompt claro puede ser corto.
- **Dar contexto irrelevante:** aporta el que ayuda, no ruido.

## Resumen en 3 frases

1. Claridad, contexto y formato son las tres palancas que más mejoran un prompt.
2. Cuando una respuesta no sirve, casi siempre falló una de las tres.
3. Diagnosticar cuál falló es la vía rápida para arreglar el prompt.

## Recursos para profundizar

- `prompting-best-practices` (catálogo).

## Siguiente lección

➡️ `03-system-vs-user-prompts`

## Fuentes

- [docs.claude.com — prompt engineering](https://docs.claude.com) — consultado 2026-06-14.
