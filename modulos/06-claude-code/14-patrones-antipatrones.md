---
titulo: "Patrones y antipatrones con Claude Code"
modulo: "06-claude-code"
orden: 14
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Patrones y antipatrones con Claude Code

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Reconocer **patrones** de uso que dan buenos resultados.
- [ ] Evitar **antipatrones** habituales.

## Prerrequisitos

- Haber recorrido las lecciones 01–13 del módulo.

## Contexto

Más allá de las funciones, hay **maneras de trabajar** con Claude Code que separan a quien le saca partido de quien se frustra. Esta lección las resume.

## Contenido principal

### 1. Patrones que funcionan

- **Explorar antes de cambiar:** que entienda el código antes de tocarlo.
- **Plan mode en lo grande:** alinear el enfoque antes de ejecutar (L06).
- **Cambios pequeños y verificados:** un paso, su prueba, siguiente (L11).
- **Verificar de verdad:** ejecutar tests/build, no fiarse de "debería funcionar".
- **Contexto en `CLAUDE.md`:** invertir una vez para no repetirte (L04).
- **Dejar que lea, no pegarle código:** aprovechar su acceso al repo (L01).

### 2. Antipatrones que evitar

- **Pedir todo de golpe** ("reescribe la app"): cambios enormes e irrevisables.
- **Aceptar diffs sin leer:** entra código que no entiendes.
- **Tratarlo como un chat:** copiar y pegar en vez de dejar que opere.
- **Confiar sin verificar:** dar por bueno sin ejecutar nada.
- **Sesiones eternas:** el contexto se llena y se despista (L12–13).
- **"Megaprompts" amenazantes:** con los modelos actuales sobreactúan (Módulo 05, L12).

### 3. La regla de oro

**Tú diriges, Claude ejecuta, tú verificas.** La IA acelera el trabajo, no traslada la responsabilidad: el código que entra a tu proyecto es tuyo.

## Ejemplo aplicado

Antipatrón: `Reescribe todo el backend para que sea más rápido.` (vago, enorme, sin verificación).

Patrón: `Hagamos profiling primero: identifica las 3 funciones más lentas. Luego, una a una, proponemos y medimos una mejora.`

## Ejercicio práctico

1. Revisa cómo usaste Claude Code esta semana.
2. Identifica un antipatrón en el que caíste y el patrón que lo corrige.
3. **Criterio de éxito:** describes un cambio concreto en tu forma de trabajar.

## Errores comunes

- (Esta lección es justamente la lista de errores; el "error" es no revisarla periódicamente.)

## Resumen en 3 frases

1. Los buenos resultados vienen de explorar antes de cambiar, planificar lo grande, ir en pasos pequeños y verificar.
2. Los antipatrones típicos: pedir todo de golpe, aceptar diffs sin leer, no verificar y maratones de sesión.
3. Regla de oro: tú diriges, Claude ejecuta, tú verificas; el código es tu responsabilidad.

## Recursos para profundizar

- Todo el módulo 06.
- `claude-code-in-action` (catálogo).

## Siguiente lección

➡️ `15-equipo-convenciones`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
