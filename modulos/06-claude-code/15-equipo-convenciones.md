---
titulo: "Claude Code en equipo: convenciones compartidas"
modulo: "06-claude-code"
orden: 15
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Claude Code en equipo: convenciones compartidas

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar cómo se comparte la configuración de Claude Code en un equipo.
- [ ] Definir convenciones comunes (CLAUDE.md, comandos, hooks) para todos.
- [ ] Cerrar el módulo con la entrega práctica.

## Prerrequisitos

- Todo el módulo 06.

## Contexto

Lo que hace una persona con Claude Code se multiplica en un equipo: si cada cual lo configura a su manera, el código pierde consistencia. La clave es **compartir las convenciones** versionándolas con el propio proyecto.

## Contenido principal

### 1. La configuración vive en el repositorio

El `CLAUDE.md`, los comandos slash y los hooks pueden vivir **dentro del repo** (versionados en Git). Así, cuando alguien clona el proyecto, **hereda** la configuración: mismas reglas, mismos comandos, mismos automatismos para todo el equipo.

### 2. Qué conviene estandarizar

- **`CLAUDE.md` del proyecto:** convenciones de código, estructura, cómo ejecutar y testear (L04).
- **Comandos compartidos:** p. ej. `/revisa`, `/commit` con vuestro formato (L07).
- **Hooks comunes:** formatear y testear automáticamente (L08).
- **Reglas de Git:** ramas, tamaño de PRs, revisión (L10–L11).

### 3. Configuración de proyecto vs. personal

Distingue lo que es **del equipo** (va al repo, lo comparten todos) de lo **personal** (preferencias tuyas, fuera del repo). No metas tus gustos individuales en la configuración compartida.

### 4. Personas en el bucle

En equipo, la regla de oro se mantiene: la IA prepara y propone; **fusionar y publicar** son decisiones humanas, con revisión. Las convenciones compartidas hacen que esa revisión sea más fácil y consistente.

## Ejemplo aplicado

Un equipo añade al repo un `CLAUDE.md` con sus convenciones, un comando `/revisa` con su checklist de revisión y un hook que formatea al guardar. Cualquiera que clone el proyecto trabaja igual desde el primer minuto.

## Ejercicio práctico (entrega del módulo)

1. Configura un proyecto real con un `CLAUDE.md` propio (distinto al de este curso).
2. Añade **2 comandos slash** y **1 hook** útiles.
3. Documenta en `mi-configuracion.md` tu decisión y qué aprendiste.
4. **Criterio de éxito:** otra persona podría clonar tu proyecto y trabajar con tu misma configuración.

## Errores comunes

- **Configuración solo local:** se pierde y no la hereda el equipo; versiónala.
- **Mezclar preferencias personales** en lo compartido: separa lo del equipo de lo tuyo.

## Resumen en 3 frases

1. La configuración de Claude Code (CLAUDE.md, comandos, hooks) se comparte versionándola en el repositorio.
2. Estandarizad convenciones de código, comandos, hooks y reglas de Git para trabajar igual.
3. Separa lo del equipo de lo personal y mantén las decisiones de publicar en manos de personas.

## Recursos para profundizar

- Todo el módulo 06.
- Módulo 09 — skills y subagentes (también compartibles en equipo).

## Siguiente lección

➡️ Has terminado el Módulo 06. Continúa con el Módulo 07 (API de Claude).

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
