---
titulo: "Plan mode: razonamiento antes de ejecutar"
modulo: "06-claude-code"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Plan mode: razonamiento antes de ejecutar

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **plan mode** (modo plan) y para qué sirve.
- [ ] Usarlo en tareas grandes para revisar el enfoque antes de tocar código.
- [ ] Decidir cuándo conviene y cuándo es innecesario.

## Prerrequisitos

- Lección 05 del módulo.

## Contexto

Para una tarea grande, dejar que Claude Code empiece a editar sin más puede llevarte por un camino que no querías. El **plan mode** invierte el orden: primero Claude **investiga y propone un plan**, tú lo apruebas (o lo corriges), y solo entonces ejecuta.

## Contenido principal

### 1. Qué es

Es un modo en el que Claude Code **no modifica nada**: explora el proyecto, razona y te presenta un **plan de acción** (qué archivos tocará, en qué orden, con qué enfoque). Tú lo revisas antes de dar luz verde.

### 2. Por qué ayuda

- Detectas un enfoque equivocado **antes** de gastar tiempo en código.
- Alineáis expectativas: el plan es un "contrato" de lo que hará.
- En tareas complejas, planificar mejora la calidad del resultado.

### 3. Cuándo usarlo

- **Sí:** funcionalidades nuevas, refactors amplios, cualquier cambio que toque muchas piezas o que no tengas del todo claro.
- **No hace falta:** cambios pequeños y obvios (corregir un texto, un ajuste puntual).

## Ejemplo aplicado

```
Quiero añadir autenticación con email y contraseña a esta app.
Entra en plan mode: investiga cómo está montada y propón un plan
antes de escribir nada.
```
Claude explora, propone los pasos y los archivos; tú apruebas o ajustas, y entonces ejecuta.

## Ejercicio práctico

1. Plantea una tarea mediana en un proyecto.
2. Pide que la aborde en plan mode.
3. Revisa el plan y corrige algo antes de aprobar.
4. **Criterio de éxito:** el resultado se ajusta a lo que esperabas porque alineasteis el plan primero.

## Errores comunes

- **Saltarte el plan en tareas grandes:** acabas corrigiendo trabajo ya hecho.
- **Aprobar el plan sin leerlo:** pierdes su valor.

## Resumen en 3 frases

1. El plan mode hace que Claude Code investigue y proponga un plan sin tocar nada.
2. Sirve para alinear el enfoque antes de ejecutar en tareas grandes o inciertas.
3. Para cambios pequeños y obvios es innecesario.

## Recursos para profundizar

- [docs.claude.com — plan mode](https://docs.claude.com) — consultado 2026-06-14.
- `claude-code-in-action` (catálogo).

## Siguiente lección

➡️ `07-comandos-slash`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
