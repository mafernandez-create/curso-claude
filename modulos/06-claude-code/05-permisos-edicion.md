---
titulo: "Permisos, edición de ficheros y confirmaciones"
modulo: "06-claude-code"
orden: 5
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Permisos, edición de ficheros y confirmaciones

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender el **modelo de permisos** de Claude Code: qué hace solo y qué te pide confirmar.
- [ ] Configurar el nivel de autonomía con el que te sientes cómodo.
- [ ] Revisar diffs y comandos antes de aprobarlos.

## Prerrequisitos

- Lección 03 del módulo.

## Contexto

Claude Code puede editar archivos y ejecutar comandos en tu máquina. Eso es potente y, por tanto, requiere control. Su sistema de **permisos** decide qué acciones ejecuta directamente y cuáles te pide aprobar antes.

## Contenido principal

### 1. Acciones que pide confirmar

Por defecto, las acciones con **efectos** o **difíciles de revertir** se confirman: ejecutar ciertos comandos, modificar archivos sensibles, operaciones de Git que suben cambios. Lo de bajo riesgo (leer archivos, buscar) suele ir sin pedir permiso.

### 2. Niveles de autonomía

Puedes ajustar cuánto te pregunta: desde confirmar casi todo (máximo control, más lento) hasta modos más autónomos (más fluido, más confianza requerida). Empieza conservador y ve soltando a medida que confías.

### 3. Revisa antes de aprobar

Cuando te pida permiso para editar, **lee el diff**; cuando sea para un comando, **lee el comando**. Es tu última línea de defensa contra un cambio no deseado. Aprobar a ciegas anula la ventaja de la supervisión.

### 4. Permisos persistentes

Puedes conceder permisos recurrentes para acciones repetitivas de confianza (p. ej. ejecutar los tests), de modo que no te pregunte cada vez. Configúralos con criterio: solo para lo que de verdad es seguro y frecuente.

## Ejemplo aplicado

Claude Code propone editar `config.js`. Verás un diff: las líneas que quita (rojo) y añade (verde). Lo revisas, confirmas si es correcto. Si fuera a ejecutar `rm -rf algo`, te lo mostraría y dirías que no.

## Ejercicio práctico

1. En una sesión, pide un cambio y **revisa el diff** antes de aprobar.
2. Rechaza una acción a propósito y observa que Claude se adapta.
3. **Criterio de éxito:** sabes leer un diff y decidir si aprobar.

## Errores comunes

- **Aprobar todo a ciegas:** anula la supervisión.
- **Dar permisos persistentes amplios:** concédelos solo para acciones seguras y repetitivas.

## Resumen en 3 frases

1. Claude Code ejecuta lo seguro directamente y te pide confirmar lo sensible o irreversible.
2. Puedes ajustar el nivel de autonomía; empieza conservador y suelta con la confianza.
3. Revisa siempre diffs y comandos antes de aprobar: es tu control final.

## Recursos para profundizar

- [docs.claude.com — permisos de Claude Code](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `06-plan-mode`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
