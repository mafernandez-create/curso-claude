---
titulo: "Conversaciones vs. Projects: cuándo usar cada uno"
modulo: "03-claude-basico"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Conversaciones vs. Projects: cuándo usar cada uno

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar la diferencia entre una **conversación suelta** y un **Project**.
- [ ] Decidir cuándo merece la pena crear un Project en lugar de seguir en chats aislados.
- [ ] Preparar el **contexto** de un Project (instrucciones y conocimiento) para no repetirte.

## Prerrequisitos

- Lección 01 del módulo (interfaz).

## Contexto

Cada vez que abres Claude empiezas una **conversación**: un hilo independiente que no sabe nada de los anteriores. Para tareas puntuales es perfecto. Pero cuando vuelves una y otra vez sobre el mismo tema —un cliente, un producto, una asignatura— repetir el contexto en cada chat es tedioso y propenso a errores. Para eso existen los **Projects**.

## Contenido principal

### 1. La conversación suelta

Un hilo de chat normal. Útil para preguntas rápidas y tareas de una sola vez. Su límite: **no tiene memoria entre hilos**. Mañana, en una conversación nueva, Claude no recordará lo de hoy salvo que se lo cuentes (la memoria de conversaciones, lección 07, matiza esto).

### 2. El Project

Un Project es un **espacio de trabajo** que agrupa conversaciones en torno a un tema y comparte entre ellas:

- **Instrucciones del Project**: indicaciones permanentes ("eres mi asistente para el cliente X, responde siempre en tono formal…").
- **Conocimiento del Project**: documentos que subes una vez (un dosier, unas fichas, un manual) y que Claude tiene disponibles en todas las conversaciones de ese Project.

Así no repites el contexto: lo preparas una vez y cada nueva conversación arranca ya "informada".

### 3. Cuándo crear un Project

Crea un Project cuando se cumplan **dos o más** de estas condiciones:

- Vuelves al mismo tema con frecuencia.
- Hay documentos de referencia que querrías tener siempre a mano.
- Quieres un tono o unas reglas constantes.
- Vas a colaborar con otras personas sobre ese tema (en planes de equipo).

Para una pregunta única, no lo necesitas: usa una conversación normal.

## Ejemplo aplicado

Imagina que preparas oposiciones. En vez de pegar el temario en cada chat:

1. Creas un Project llamado "Oposición".
2. En **conocimiento** subes los temas en PDF.
3. En **instrucciones** escribes: "Eres mi tutor. Explica con ejemplos, hazme preguntas de repaso y cita el tema de origen."
4. Cada conversación dentro del Project ya conoce el temario y el estilo que quieres.

## Ejercicio práctico

1. Crea un Project sobre un tema recurrente tuyo.
2. Añade unas instrucciones claras y al menos un documento de conocimiento.
3. Abre dos conversaciones dentro del Project y comprueba que ambas usan ese contexto.
4. **Criterio de éxito:** no has tenido que volver a pegar el contexto en la segunda conversación.

## Errores comunes

- **Meter todo en un único Project gigante:** si mezclas temas dispares, el contexto pierde foco. Mejor un Project por tema.
- **Subir documentos enormes sin filtrar:** incluye lo relevante; el ruido empeora las respuestas.

## Resumen en 3 frases

1. Una conversación es un hilo independiente sin memoria entre hilos; un Project agrupa conversaciones con contexto compartido.
2. El Project guarda instrucciones permanentes y documentos de conocimiento que se aplican a todas sus conversaciones.
3. Crea un Project cuando vuelves a menudo sobre un mismo tema o necesitas reglas y documentos constantes.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — sección de Projects.
- `claude-101` — el curso oficial dedica un apartado a Projects.

## Siguiente lección

➡️ `03-artefactos`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
