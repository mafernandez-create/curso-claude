---
titulo: "Gestión de contexto con subagentes"
modulo: "09-skills-agentes"
orden: 13
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Gestión de contexto con subagentes

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar cómo los subagentes ayudan a **gestionar el contexto**.
- [ ] Dar buenas **instrucciones** a un subagente.
- [ ] Interpretar bien lo que devuelve.

## Prerrequisitos

- Lección 12 del módulo.

## Contexto

El mayor valor de un subagente es **estratégico**: mantener el contexto del agente principal centrado en lo importante. Pero para que funcione, hay que delegarle bien.

## Contenido principal

### 1. El subagente como "filtro"

Piensa en el subagente como alguien a quien encargas leer un montón de material y volver con un **resumen útil**. Lee mucho, devuelve poco. El agente principal se queda con la conclusión, no con el material en bruto.

### 2. Instruir bien al subagente

Como trabaja **aislado**, no conoce tu conversación. Por eso su encargo debe ser **autocontenido**:
- **Objetivo claro:** qué quieres que averigüe o haga.
- **Alcance:** dónde mirar, qué incluir y qué no.
- **Formato del resultado:** qué te debe devolver (un resumen, una lista, una respuesta concreta).

### 3. Interpretar el resultado

El subagente te da su conclusión; tú decides si es suficiente o necesitas afinar el encargo. Si volvió con poco o con lo equivocado, casi siempre el encargo fue ambiguo: ajústalo.

## Ejemplo aplicado

Encargo bien hecho a un subagente:
```
Objetivo: averiguar cómo se valida el email en el registro.
Dónde mirar: carpetas src/auth y src/components.
Devuélveme: en qué archivo y función ocurre, y si hay tests que lo cubran.
No cambies nada.
```
Vuelve con una respuesta concreta que el agente principal usa para decidir.

## Ejercicio práctico

1. Redacta el encargo **autocontenido** de un subagente para una exploración.
2. Incluye objetivo, alcance y formato del resultado.
3. **Criterio de éxito:** el encargo se entiende sin tu conversación previa.

## Errores comunes

- **Encargos ambiguos:** el subagente vuelve con lo que no querías.
- **Esperar que conozca tu contexto:** dáselo en el encargo.

## Resumen en 3 frases

1. Los subagentes mantienen el contexto principal limpio: leen mucho y devuelven poco.
2. Como trabajan aislados, su encargo debe ser autocontenido: objetivo, alcance y formato del resultado.
3. Si vuelven con poco o lo equivocado, el encargo fue ambiguo; ajústalo.

## Recursos para profundizar

- `introduction-subagents` (catálogo).
- Módulo 06, lección 12 — contexto en repos grandes.

## Siguiente lección

➡️ `14-orquestacion-multiagente`

## Fuentes

- [docs.claude.com — subagentes](https://docs.claude.com) — consultado 2026-06-14.
