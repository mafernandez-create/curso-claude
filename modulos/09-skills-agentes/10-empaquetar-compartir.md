---
titulo: "Empaquetar y compartir Skills"
modulo: "09-skills-agentes"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Empaquetar y compartir Skills

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Preparar una Skill para **compartirla** con otros.
- [ ] Asegurar que es **autocontenida** y portable.
- [ ] Documentarla para que otra persona la entienda.

## Prerrequisitos

- Lecciones 06 y 09 del módulo.

## Contexto

Una Skill que solo funciona en tu máquina sirve de poco para un equipo. Compartirla bien requiere que sea **autocontenida**, **documentada** y **sin secretos**.

## Contenido principal

### 1. Autocontenida y portable

- Todo lo que la Skill necesita (instrucciones, references, scripts, assets) debe ir **dentro de su carpeta**.
- Evita rutas absolutas o dependencias de tu entorno concreto.
- Si un script necesita librerías, indícalo.

### 2. Sin secretos

- **Nunca** incluyas claves, tokens o datos privados en la Skill.
- Si necesita credenciales, que se aporten desde fuera (variables de entorno), no incrustadas.

### 3. Documentación mínima

Incluye, junto a la Skill, una breve guía: qué hace, cuándo se activa, cómo instalarla y un ejemplo de uso. Quien la reciba debe poder usarla **sin preguntarte**.

### 4. Versionado

Trátala como código: si la mejoras, versiónala (Git) para que el equipo sepa qué cambió.

## Ejemplo aplicado

Empaquetas tu Skill "acta-reunion" en una carpeta autocontenida, con un README que explica qué hace y un acta de ejemplo. Un compañero la copia a su entorno y funciona igual, sin tocar nada tuyo.

## Ejercicio práctico

1. Revisa una Skill tuya: ¿es autocontenida? ¿tiene secretos? ¿se entiende sin ti?
2. Corrige lo que falle y añade una guía breve.
3. **Criterio de éxito:** otra persona podría instalar y usar tu Skill sin tu ayuda.

## Errores comunes

- **Rutas o dependencias de tu máquina:** rompen la portabilidad.
- **Secretos incrustados:** riesgo grave; sácalos fuera.

## Resumen en 3 frases

1. Para compartir una Skill, hazla autocontenida y portable (todo dentro de su carpeta, sin rutas locales).
2. Nunca incluyas secretos; las credenciales se aportan desde fuera.
3. Documenta qué hace, cómo se usa y un ejemplo, y versiónala como código.

## Recursos para profundizar

- `anthropic-skills` (catálogo) — estructura de Skills compartibles.
- Lección 11 del módulo — publicar en GitHub.

## Siguiente lección

➡️ `11-publicar-github`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
