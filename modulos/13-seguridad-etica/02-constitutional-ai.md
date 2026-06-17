---
titulo: "El enfoque Anthropic: Constitutional AI"
modulo: "13-seguridad-etica"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 40
---

# El enfoque Anthropic: Constitutional AI

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es **Constitutional AI (CAI)**.
- [ ] Entender cómo una "constitución" guía el comportamiento del modelo.
- [ ] Distinguir CAI del RLHF puramente humano.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

Constitutional AI es el método distintivo de Anthropic para alinear a Claude. Conviene entenderlo porque explica buena parte de **por qué Claude se comporta como se comporta**.

## Contenido principal

### 1. La idea central

En lugar de depender solo de que personas etiqueten qué respuestas son buenas o malas, **Constitutional AI** usa un conjunto explícito de **principios** (una "constitución") con los que el propio modelo **critica y revisa** sus respuestas para hacerlas más útiles, honestas e inofensivas.

### 2. Cómo funciona a grandes rasgos

- Se define una **constitución**: principios y valores que deben guiar las respuestas.
- El modelo genera respuestas y luego, guiado por esos principios, **se autocritica y reescribe** las problemáticas.
- Ese proceso se usa para **entrenar** al modelo a comportarse según los principios, reduciendo la cantidad de etiquetado humano de contenido dañino.

### 3. Qué aporta frente al RLHF clásico

- **Principios explícitos y revisables:** la guía está escrita, no solo implícita en miles de etiquetas humanas.
- **Menos exposición humana** a contenido dañino durante el entrenamiento.
- **Más transparencia** sobre los valores que se intentan inculcar.

No sustituye toda intervención humana, pero cambia el peso hacia principios explícitos.

### 4. Por qué importa para ti

Cuando Claude rechaza algo o matiza, a menudo es por esos principios. Entenderlo ayuda a colaborar mejor y a no interpretar un rechazo como un fallo arbitrario.

## Ejemplo aplicado

Ante una petición ambigua que podría ser dañina, el enfoque constitucional lleva a Claude a buscar una respuesta **útil pero segura** (por ejemplo, ayudar con la parte legítima y declinar la peligrosa) en vez de responder sin filtro o negarse en bloque.

## Ejercicio práctico

1. Redacta 3 "principios" que pondrías en una constitución para un asistente.
2. Piensa cómo el modelo usaría esos principios para revisar una respuesta.
3. **Criterio de éxito:** explicas CAI como autocrítica guiada por principios explícitos.

## Errores comunes

- **Creer que la "constitución" es una ley rígida:** son principios que guían el entrenamiento, no un filtro de reglas fijas.
- **Pensar que elimina al humano por completo:** lo reduce, no lo anula.

## Resumen en 3 frases

1. Constitutional AI alinea al modelo con un conjunto explícito de principios (una "constitución").
2. El modelo se autocritica y reescribe según esos principios, reduciendo el etiquetado humano de contenido dañino.
3. Frente al RLHF clásico, aporta principios explícitos, más transparencia y menos exposición humana.

## Recursos para profundizar

- Paper "Constitutional AI" (ver `recursos/papers-investigacion.md`).
- `anthropic-research` ⭐ — catálogo.

## Siguiente lección

➡️ `03-interpretabilidad`

## Fuentes

- [anthropic.com/research](https://www.anthropic.com/research) — consultado 2026-06-14.
