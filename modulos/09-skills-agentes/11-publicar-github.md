---
titulo: "Publicar tu Skill (o servidor MCP) en GitHub"
modulo: "09-skills-agentes"
orden: 11
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Publicar tu Skill (o servidor MCP) en GitHub

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Estructurar un **repositorio** para publicar una Skill o un servidor MCP.
- [ ] Hacerla **descubrible** y fácil de adoptar.
- [ ] Contribuir al ecosistema con buenas prácticas.

## Prerrequisitos

- Lección 10 del módulo. Módulo 06, lección 10 (GitHub).

## Contexto

Publicar tu Skill (o tu servidor MCP del Módulo 08) en GitHub la hace descubrible y reutilizable por la comunidad. Una buena publicación se adopta; una confusa se ignora.

## Contenido principal

### 1. Estructura del repositorio

- La **Skill** (o el servidor) en su carpeta, autocontenida.
- Un **README** claro: qué hace, cómo instalarla/conectarla, un ejemplo de uso, requisitos.
- Una **licencia** (importa para que otros puedan usarla legalmente).
- Si procede, ejemplos y pruebas.

### 2. Descubribilidad

- **Nombre y descripción del repo** claros y buscables.
- **Topics/tags** relevantes (p. ej. `claude-skill`, `mcp-server`).
- Un README que en los primeros párrafos diga **qué problema resuelve**.
- Considera añadirla a **listas curadas** de la comunidad (tipo *awesome-*).

### 3. Buenas prácticas de publicación

- **Sin secretos** en el repo (revisa el historial, no solo el estado actual).
- **Versiona** y describe los cambios.
- Indica **compatibilidad** (con qué cliente/versión funciona).
- Responde a issues si puedes: una Skill mantenida genera confianza.

## Ejemplo aplicado

Publicas `acta-reunion-skill` con un README que explica el propósito, cómo instalarla, un acta de ejemplo y la licencia. La etiquetas con `claude-skill` y la añades a una lista de la comunidad. Otros la encuentran y la usan.

## Ejercicio práctico (entrega del módulo)

1. Publica una **Skill propia** (o tu servidor MCP) en un repo con README, licencia y ejemplo.
2. Asegúrate de que no contiene secretos y es autocontenida.
3. Documenta el diseño en `mi-skill.md`.
4. **Criterio de éxito:** alguien podría descubrir, entender e instalar tu Skill desde el repo.

## Errores comunes

- **README pobre:** sin "qué problema resuelve" y "cómo se usa", nadie la adopta.
- **Secretos en el historial de Git:** revisa antes de publicar.

## Resumen en 3 frases

1. Publica tu Skill/servidor en un repo autocontenido con README claro, licencia y ejemplo.
2. Hazla descubrible con nombre, descripción y tags relevantes, y considera listas de la comunidad.
3. Sin secretos, versionada y con compatibilidad indicada: así se adopta y genera confianza.

## Recursos para profundizar

- `awesome-claude-skills` (catálogo) — listas de la comunidad.
- Módulo 06, lección 10 — trabajar con GitHub.

## Siguiente lección

➡️ `12-subagentes-que-son`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
