---
titulo: "Artefactos: qué son y cómo sacarles partido"
modulo: "03-claude-basico"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Artefactos: qué son y cómo sacarles partido

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es un **Artefacto** y en qué se diferencia de una respuesta normal en el chat.
- [ ] Saber qué tipos de contenido se abren como Artefacto (documentos, código, páginas, diagramas).
- [ ] **Iterar** sobre un Artefacto sin perder el hilo de la conversación.

## Prerrequisitos

- Lección 01 del módulo (interfaz).

## Contexto

Cuando le pides a Claude algo sustancial —un documento, un fragmento de código, una pequeña aplicación web— no siempre conviene que la respuesta quede enterrada entre los mensajes. Los **Artefactos** son una ventana aparte, junto al chat, donde ese contenido vive como una pieza editable y reutilizable.

## Contenido principal

### 1. Qué es un Artefacto

Un Artefacto es un **panel lateral** que se abre automáticamente cuando Claude genera contenido autónomo y de cierta longitud: un texto largo, código, un documento, una tabla o incluso una mini-web. En lugar de leerlo dentro del flujo de mensajes, lo ves completo, con formato, y puedes copiarlo o descargarlo.

### 2. Qué se abre como Artefacto

Habitualmente:

- **Documentos de texto** largos (informes, guiones, artículos).
- **Código** en cualquier lenguaje.
- **Páginas web** o componentes interactivos (HTML/CSS/JS) que además se pueden previsualizar.
- **Diagramas** y contenido estructurado.

Para una respuesta corta de chat no aparece Artefacto; es para piezas que tiene sentido tratar como "documento".

### 3. Iterar sin perder el hilo

La gran ventaja: puedes **pedir cambios** en la conversación ("hazlo más corto", "cambia el tono", "añade una sección") y Claude **actualiza el mismo Artefacto** en vez de volver a generarlo entero. La conversación dirige; el Artefacto evoluciona. Algunos Artefactos guardan versiones, de modo que puedes comparar o volver atrás.

## Ejemplo aplicado

```
Redáctame un comunicado interno (250 palabras) anunciando
el nuevo horario de verano. Tono cercano pero profesional.
```

Claude abrirá un Artefacto con el comunicado. Después:

```
Acórtalo a 150 palabras y añade una frase de agradecimiento al equipo.
```

El Artefacto se actualiza en el sitio, conservando el formato.

## Ejercicio práctico

1. Pide a Claude un documento de al menos 200 palabras sobre un tema tuyo.
2. Comprueba que se abre como Artefacto.
3. Pídele **dos cambios** sucesivos y observa cómo se actualiza el mismo panel.
4. **Criterio de éxito:** has obtenido una versión final editada sin que Claude regenerara el texto desde cero cada vez.

## Errores comunes

- **Copiar la primera versión y seguir editando a mano:** pierdes la ventaja de iterar dentro de Claude. Pide los cambios y descarga al final.
- **Esperar un Artefacto para todo:** las respuestas breves siguen en el chat; es normal.

## Resumen en 3 frases

1. Un Artefacto es un panel aparte donde vive el contenido autónomo (documentos, código, webs) como pieza editable.
2. Aparece cuando Claude genera algo sustancial; las respuestas cortas siguen en el chat.
3. Puedes iterar pidiendo cambios y Claude actualiza el mismo Artefacto en lugar de regenerarlo.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — sección de Artifacts.
- `claude-101` — incluye una demostración práctica de Artefactos.

## Siguiente lección

➡️ `04-skills-preconfiguradas`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
