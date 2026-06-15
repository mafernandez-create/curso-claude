---
titulo: "Chain-of-Thought y prompting con razonamiento"
modulo: "05-prompt-engineering"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Chain-of-Thought y prompting con razonamiento

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar el **Chain-of-Thought (CoT)**: pedir que razone paso a paso.
- [ ] Saber cuándo mejora la respuesta y cuándo no aporta.
- [ ] Relacionarlo con el *thinking* nativo de los modelos actuales (que verás a fondo en la lección 09).

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

Para problemas con varios pasos (cálculos, lógica, decisiones con criterios), pedir la respuesta "de golpe" favorece errores. El Chain-of-Thought consiste en pedir a Claude que **razone antes de responder**, lo que suele mejorar mucho la precisión.

## Contenido principal

### 1. Qué es

Es indicar explícitamente "piensa paso a paso" o "explica tu razonamiento antes de dar la respuesta final". Al desplegar los pasos, el modelo construye mejor la conclusión, igual que una persona que resuelve en papel en vez de a ojo.

### 2. Cuándo ayuda (y cuándo no)

- **Ayuda:** problemas matemáticos o lógicos, decisiones con varios criterios, análisis que requieren varios pasos.
- **No aporta:** tareas directas (traducir, clasificar algo evidente, redactar un saludo). Ahí solo añade longitud.

### 3. Relación con el *thinking* nativo

Los modelos actuales de Claude (Opus 4.6+, 4.8, Sonnet 4.6) incorporan un **razonamiento interno** (*adaptive thinking*) que hace este trabajo de forma nativa cuando la tarea lo requiere. Aun así, pedir explícitamente el razonamiento en el prompt sigue siendo útil para **ver** los pasos o forzarlos en casos concretos. Lo verás a fondo en la lección 09.

## Ejemplo aplicado

```
Un producto cuesta 80 €. Le aplico un 25 % de descuento y luego un 10 %
adicional sobre el resultado. ¿Precio final? Razona paso a paso antes
de dar la cifra.
```
El razonamiento explícito reduce el riesgo de un error de cálculo.

## Ejercicio práctico

1. Plantea un problema de varios pasos (un cálculo, una decisión con criterios).
2. Pídelo sin CoT y con CoT ("razona paso a paso").
3. **Criterio de éxito:** identificas en qué tipo de tarea el CoT mejora la respuesta.

## Errores comunes

- **Usar CoT para todo:** en tareas triviales solo alarga.
- **Quedarte con el razonamiento y no pedir la conclusión clara:** pide siempre la "respuesta final" separada.

## Resumen en 3 frases

1. Chain-of-Thought es pedir que Claude razone paso a paso antes de responder.
2. Mejora la precisión en problemas de varios pasos; no aporta en tareas directas.
3. Los modelos actuales ya razonan de forma nativa, pero pedirlo explícito sigue siendo útil para ver o forzar los pasos.

## Recursos para profundizar

- Lección 09 del módulo — adaptive thinking y effort.
- `prompting-best-practices` (catálogo).

## Siguiente lección

➡️ `06-xml-tags`

## Fuentes

- [docs.claude.com — adaptive thinking](https://docs.claude.com) — consultado 2026-06-14.
