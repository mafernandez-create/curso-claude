---
titulo: "Antipatrones: cuándo NO usar subagentes"
modulo: "09-skills-agentes"
orden: 15
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Antipatrones: cuándo NO usar subagentes

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Reconocer cuándo los subagentes **sobran** o **perjudican**.
- [ ] Elegir la complejidad mínima que resuelve la tarea.
- [ ] Cerrar el módulo con una visión equilibrada.

## Prerrequisitos

- Lecciones 12–14 del módulo.

## Contexto

Los subagentes y la orquestación multi-agente son potentes, pero **no son gratis**: añaden complejidad, coste y latencia. Usarlos donde no hacen falta empeora el resultado. Esta lección es el contrapeso de las anteriores.

## Contenido principal

### 1. El coste de la complejidad

Cada subagente implica más llamadas, más tokens y más cosas que pueden salir mal. Si una tarea se resuelve bien con un solo agente, **añadir subagentes la hace más lenta y cara sin mejorarla**.

### 2. Antipatrones

- **Subagente para una tarea trivial:** "lee este archivo" no necesita un subagente; el agente principal lo hace directo.
- **Paralelizar lo dependiente:** si B necesita el resultado de A, no van en paralelo.
- **Sobre-orquestar:** montar un coordinador y cinco subagentes para algo que un agente resolvería en dos pasos.
- **Subagentes sin síntesis:** acabar con cinco resultados sueltos que nadie integra.
- **Delegar lo que requiere tu contexto completo:** si la subtarea necesita toda la conversación, aislarla la perjudica.

### 3. La regla de la complejidad mínima

Empieza por lo simple: **un prompt**, luego **un agente**, y solo sube a **subagentes** cuando la tarea de verdad lo pide (exploración amplia, paralelismo real, contexto que conviene aislar). La complejidad se justifica por la necesidad, no por la novedad.

## Ejemplo aplicado

Antipatrón: lanzar tres subagentes para "corrige este typo, formatea y haz commit" (tareas pequeñas y secuenciales). Mejor: un agente lo hace en orden, sin orquestación.

Patrón correcto: lanzar subagentes para "revisa este PR enorme desde tres dimensiones a la vez" (paralelismo real con mucho detalle a filtrar).

## Ejercicio práctico

1. Revisa una orquestación que hayas pensado: ¿de verdad necesita subagentes?
2. Simplifícala a la mínima complejidad que resuelve la tarea.
3. **Criterio de éxito:** justificas el uso (o no uso) de subagentes por necesidad real.

## Errores comunes

- **Usar subagentes "porque suena avanzado":** la complejidad debe justificarse.
- **Olvidar que añaden coste y latencia:** mídelo.

## Resumen en 3 frases

1. Los subagentes añaden complejidad, coste y latencia: no son gratis.
2. No los uses para tareas triviales, dependientes o que requieren todo tu contexto, ni sin síntesis.
3. Aplica la complejidad mínima: prompt → agente → subagentes solo cuando la tarea lo pide de verdad.

## Recursos para profundizar

- `introduction-subagents` (catálogo).
- Módulo 06, lección 14 — patrones y antipatrones con Claude Code.

## Siguiente lección

➡️ Has terminado el Módulo 09. Continúa con el Módulo 10 (Cloud).

## Fuentes

- [docs.claude.com — agentes](https://docs.claude.com) — consultado 2026-06-14.
