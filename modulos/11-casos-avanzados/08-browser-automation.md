---
titulo: "Proyecto: Browser automation con Claude + Playwright"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: alta
tiempo_estimado_horas: 12
---

# Browser automation con Claude + Playwright

## Descripción

Un agente que **automatiza tareas en el navegador**: Claude decide qué acciones tomar (navegar, hacer clic, rellenar, leer) y una herramienta como Playwright las ejecuta. Útil para extracción de datos y flujos repetitivos en webs sin API.

## Objetivos

- [ ] Conectar Claude (tool use) con Playwright como herramienta.
- [ ] Implementar acciones: navegar, leer, clic, escribir.
- [ ] Manejar el bucle agéntico con límites y verificación.
- [ ] Entender los **riesgos de seguridad** de automatizar navegación.

## Stack y prerrequisitos

- SDK de Anthropic; Playwright.
- Módulos 07 (tool use) y 09 (agentes).

## Arquitectura propuesta

```text
Objetivo → Claude decide acción → Playwright ejecuta → estado de la página → Claude → … → resultado
```

## Pasos

### 1. Preparación
- Configura Playwright; define herramientas (goto, click, type, read).

### 2. Núcleo
- Bucle: el modelo pide acción → ejecutas en el navegador → devuelves el nuevo estado.

### 3. Pruebas
- Tarea acotada (p. ej. extraer una tabla pública). Tope de pasos.

### 4. Refinamiento
- Manejo de errores y esperas; **nunca** introduzcas credenciales sensibles de forma automática.

## Criterios de éxito

- [ ] Completa una tarea de navegación acotada de principio a fin.
- [ ] Respeta el límite de pasos y maneja fallos.
- [ ] Documentadas las precauciones de seguridad aplicadas.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `claude-cookbooks`; documentación de Playwright — catálogo.
- [docs.claude.com — tool use](https://docs.claude.com) — consultado 2026-06-14.
