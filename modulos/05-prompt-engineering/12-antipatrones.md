---
titulo: "Antipatrones: prompts que parecen buenos y no lo son"
modulo: "05-prompt-engineering"
orden: 12
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Antipatrones: prompts que parecen buenos y no lo son

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Reconocer **antipatrones** habituales de prompting.
- [ ] Entender por qué fallan y cómo corregirlos.

## Prerrequisitos

- Lecciones 01–07 del módulo.

## Contexto

Hay prompts que parecen sofisticados pero rinden peor que uno sencillo. Conocer los antipatrones te ahorra tiempo y frustración.

## Contenido principal

### 1. El "megaprompt" amenazante

Llenar el prompt de mayúsculas, "DEBES", "es CRÍTICO", "o si no…". Con los modelos actuales, que siguen instrucciones muy de cerca, esto **sobreactúa**: el modelo puede obsesionarse con la regla y descuidar el resto. **Mejor:** instrucciones claras y normales; no hace falta gritar.

### 2. Sobrecargar de instrucciones

Veinte reglas a la vez se pisan entre sí. **Mejor:** prioriza las que importan; si son muchas, divide la tarea en pasos.

### 3. Pedir y contradecirse

"Sé exhaustivo pero muy breve", "formal pero divertido". Instrucciones en conflicto dan resultados a medias. **Mejor:** elige una dirección clara.

### 4. Ejemplos incoherentes (few-shot mal hecho)

Ejemplos que no siguen el mismo patrón confunden en vez de guiar. **Mejor:** ejemplos consistentes (lección 04).

### 5. Vaguedad disfrazada de cortesía

"¿Podrías ayudarme un poco con esto cuando puedas?" no dice qué quieres. **Mejor:** sé concreto; la cortesía no sustituye a la claridad.

## Ejemplo aplicado

Antipatrón:
```
ATENCIÓN: es ABSOLUTAMENTE CRÍTICO que hagas un resumen PERFECTO,
exhaustivo pero brevísimo, formal pero ameno. NO FALLES.
```
Corregido:
```
Resume el texto en 120 palabras, tono profesional y claro,
destacando las 3 ideas principales.
```

## Ejercicio práctico

1. Revisa un prompt tuyo buscando alguno de estos antipatrones.
2. Reescríbelo eliminándolo.
3. **Criterio de éxito:** el prompt corregido es más simple y da mejor resultado.

## Errores comunes

- **Creer que más énfasis = mejor:** con los modelos actuales suele ser al revés.
- **Acumular reglas "por si acaso":** menos y claras funcionan mejor.

## Resumen en 3 frases

1. Megaprompts amenazantes, sobrecarga de reglas y contradicciones empeoran el resultado.
2. Los modelos actuales siguen las instrucciones de cerca: no hace falta gritar ni acumular reglas.
3. Claridad, prioridad y coherencia ganan a la sofisticación aparente.

## Recursos para profundizar

- Lección 04 (few-shot) y 13 (debugging) del módulo.
- `prompting-best-practices` (catálogo).

## Siguiente lección

➡️ `13-debugging-respuestas`

## Fuentes

- [docs.claude.com — buenas prácticas y migración de modelos](https://docs.claude.com) — consultado 2026-06-14.
