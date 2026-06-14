---
titulo: "Modo Investigación (Research)"
modulo: "03-claude-basico"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Modo Investigación (Research)

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué hace el **modo Investigación** y en qué se diferencia de una respuesta normal.
- [ ] Decidir cuándo merece la pena (y cuándo no) usarlo.
- [ ] Leer un informe de investigación con **fuentes citadas** y verificarlas.

## Prerrequisitos

- Lección 01 del módulo.
- Módulo 01, lección 08 (limitaciones: cutoff y alucinaciones), porque la investigación busca mitigar el desfase de información.

## Contexto

Por defecto, Claude responde con lo que "sabe" hasta su fecha de corte de entrenamiento. Para preguntas que dependen de información **actual** o que requieren **cruzar varias fuentes**, el modo Investigación cambia el enfoque: Claude busca en la web, lee varias páginas y compone una respuesta más completa y **con citas**.

## Contenido principal

### 1. Qué hace

En modo Investigación, Claude no responde de un tirón: realiza **varias búsquedas**, consulta distintas fuentes, contrasta y redacta un informe estructurado con **referencias a las páginas usadas**. Tarda más que una respuesta normal porque hace un trabajo más parecido al de un analista.

### 2. Cuándo usarlo

Vale la pena cuando:

- La pregunta depende de **información reciente** (novedades, datos actuales).
- Necesitas **varias perspectivas** o comparar opciones.
- Quieres una respuesta **con fuentes** que puedas verificar.

No lo necesitas para tareas que el modelo ya resuelve bien con su conocimiento (redactar, resumir un texto que le das, programar), donde solo añadiría espera.

### 3. Leer el resultado con criterio

Un informe con citas **invita a confiar**, pero la *Diligencia* sigue siendo tuya: abre alguna fuente y comprueba que dice lo que el informe afirma. Buscar en la web reduce el desfase de información, pero no elimina el riesgo de malinterpretar una fuente.

## Ejemplo aplicado

```
Investiga las opciones actuales de transporte público entre
[ciudad A] y [ciudad B]: tipos, duración aproximada y dónde
comprar billetes. Cita las fuentes.
```

Recibirás un informe con apartados y enlaces. Antes de actuar, **abre uno o dos enlaces** y contrasta.

## Ejercicio práctico

1. Formula una pregunta que dependa de información actual y tenga varias respuestas posibles.
2. Lánzala en modo Investigación.
3. Verifica **al menos dos** de las fuentes citadas.
4. **Criterio de éxito:** distingues qué afirmaciones están respaldadas por las fuentes y cuáles convendría contrastar más.

## Errores comunes

- **Usarlo para todo:** añade espera sin valor en tareas que no dependen de información externa.
- **Confiar en las citas sin abrirlas:** una referencia no garantiza que la afirmación sea exacta.

## Resumen en 3 frases

1. El modo Investigación hace que Claude busque en la web, contraste varias fuentes y redacte un informe con citas.
2. Es útil para preguntas con información reciente, comparativas o cuando necesitas fuentes verificables.
3. Reduce el desfase de información, pero la verificación de las fuentes sigue siendo responsabilidad tuya.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — funciones de búsqueda e investigación.
- Módulo 01, lección 08 — por qué la información actual es una limitación.

## Siguiente lección

➡️ `06-conectores`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
