---
titulo: "Flujos de trabajo con Claude Code en este repo"
modulo: "00-guia-proyecto"
orden: 2
creado: 2026-07-22
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 10
---

# Flujos de trabajo con Claude Code en este repo

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Usar las **cinco órdenes** que este repositorio entiende, y saber qué hace cada una.
- [ ] Entender qué es `CLAUDE.md` y por qué las órdenes funcionan sin ser comandos.
- [ ] Distinguir entre lo que Claude Code puede **hacer solo** y lo que requiere tu **visto bueno**.
- [ ] Saber qué está construido de verdad y qué no.

## Prerrequisitos

- Lección 01: [Cómo está organizado este curso](01-como-esta-organizado.md).
- Tener Claude Code instalado. Si no, el Módulo 06 lo cubre; esta lección se entiende igual sin él.

## Contexto

Este repositorio no es solo texto: está **preparado para que Claude Code trabaje dentro**. Hay un archivo de reglas, una skill y una serie de órdenes en lenguaje natural que disparan procedimientos concretos.

Lo interesante no es la lista de órdenes, sino el patrón: **es un caso real de lo que enseñan los módulos 06 y 09**, y lo tienes delante para inspeccionarlo.

## Contenido principal

### 1. `CLAUDE.md`: las reglas de la casa

Claude Code lee `CLAUDE.md` al empezar cada sesión en este repositorio. Dentro está el propósito del proyecto, las convenciones (idioma, formato de fechas, cómo se citan fuentes, nomenclatura de archivos), los procedimientos asociados a cada orden y lo que **no** debe hacerse.

Por eso las órdenes de abajo funcionan **sin ser comandos**: no hay nada registrado en ningún sitio. Está escrito en `CLAUDE.md` qué hacer cuando pides cada cosa, y Claude lo lee. Es la forma más simple de automatización que existe: **documentación que resulta ser ejecutable**.

Consecuencia práctica: si quieres cambiar cómo se comporta Claude aquí, **edita `CLAUDE.md`**. No hace falta programar nada.

### 2. Las cinco órdenes

| Le dices… | Qué hace |
|---|---|
| *"¿por dónde sigo?"* | Lee `progreso.md` y te dice la lección marcada `🔵 Siguiente`. Si no está redactada, se ofrece a redactarla |
| *"marca la lección X del módulo Y como completada"* | Actualiza `progreso.md`: icono, fecha, siguiente lección, contadores del módulo y total |
| *"redacta la lección X"* | Lee la plantilla, mira el README del módulo y `enlaces.yaml`, redacta siguiendo las convenciones, actualiza el README y añade entrada al changelog |
| *"actualiza el curso con lo nuevo"* | Lanza la skill `actualizar-recursos` |
| *"añade un nuevo recurso"* | Entrada en `enlaces.yaml`, enlace desde el módulo que corresponda y actualización del archivo temático |

No hay que decirlas literalmente: cualquier formulación equivalente vale. La lista es un contrato sobre **qué procedimientos existen**, no una sintaxis que memorizar.

### 3. La skill `actualizar-recursos`

Es la única pieza compleja, y merece atención porque ilustra un principio que se repite en todo el curso.

Escanea las fuentes oficiales de Anthropic (news, research, release notes), filtra por relevancia para el temario, verifica los datos con un subagente y deja un informe en `changelog/novedades-YYYY-MM-DD.md`.

Lo importante es lo que **no** hace: **no toca el contenido del curso**. Solo propone. La confirmación es tuya.

Esa separación es deliberada. Un agente que escanea novedades y las aplica solo acabaría metiendo en el curso cosas mal interpretadas, sin que nadie lo revise. Separando **generación** de **aprobación**, la parte cara y aburrida se automatiza y la decisión sigue siendo humana. Verás el mismo patrón en el módulo 09 con los subagentes y en el 12 con la verificación de materiales.

### 4. Quién decide qué

Aquí está la regla que gobierna todo el repositorio:

**Claude Code puede solo:** redactar lecciones nuevas, actualizar `progreso.md` cuando se lo pides, mantener el changelog, catalogar recursos, escanear novedades y generar informes.

**Requiere tu visto bueno:** aplicar al contenido del curso cualquier novedad propuesta, marcar una lección como `obsoleta`, y cualquier cosa que contradiga a `CLAUDE.md`.

La lógica: escribir un borrador es reversible y se revisa; **decidir que algo del curso ya no es cierto es un juicio**, y ese no se delega. Es la distinción entre delegar la tarea y delegar la responsabilidad que viste en el Módulo 02.

### 5. Qué hay construido de verdad

Honestidad epistémica aplicada al propio repositorio: **`CLAUDE.md` describe un comando `/verificar-enlaces` que no existe**. La carpeta `.claude/commands/` no está creada; lo único que hay en `.claude/skills/` es `actualizar-recursos`.

Estado real a fecha de esta lección:

| Pieza | Estado |
|---|---|
| `CLAUDE.md` con las cinco órdenes | ✅ Funciona |
| Skill `actualizar-recursos` | ✅ Funciona |
| Digest por correo de las novedades | ✅ Funciona |
| Comando `/verificar-enlaces` | ❌ Documentado, no construido |

No es un problema grave —la verificación de enlaces se puede pedir a mano— pero conviene saberlo, y es un buen recordatorio de que **la documentación se desincroniza del código**. Si algún día lo construyes, `CLAUDE.md` ya dice lo que debe hacer.

## Ejemplo aplicado

Sesión típica de estudio, de principio a fin:

```
Tú:     ¿por dónde sigo?
Claude: Módulo 02, lección 05 — Discernimiento. Está redactada.

[la lees, haces el ejercicio]

Tú:     marca la lección 05 del módulo 02 como completada
Claude: Actualizado progreso.md: 05 ✅ (2026-07-22), 06 pasa a 🔵 Siguiente,
        módulo 02 queda 5/8, total 6/161.

Tú:     añade un nuevo recurso: [enlace a un artículo que encontraste]
Claude: Añadido a enlaces.yaml con metadatos y enlazado desde el módulo 02.
```

Lo que no ves en esa sesión, y es la parte que importa: Claude ha leído `CLAUDE.md` al empezar, ha aplicado las convenciones de fecha y formato sin que se las digas, y ha actualizado tres sitios distintos a partir de una frase.

## Ejercicio práctico

1. Abre `CLAUDE.md` y localiza la sección "Cómo trabajar en este proyecto".
2. Compara el procedimiento de *"marca la lección X como completada"* con lo que hay ahora mismo en `progreso.md`. ¿Cuadra?
3. Abre `.claude/skills/actualizar-recursos/SKILL.md` y localiza la parte que dice qué **no** debe hacer.
4. Pregúntate: si quisieras que Claude usara un formato distinto al redactar lecciones, ¿qué archivo tocarías?

**Criterio de éxito:** contestas el punto 4 sin dudar (`CLAUDE.md`, o `plantillas/leccion.md` si es el molde) y has localizado en la skill la instrucción de no aplicar cambios sin confirmación. Si no encontraste esa instrucción, vuelve: es la más importante del archivo.

## Errores comunes

- **Creer que hay que decir las órdenes literalmente.** Son procedimientos descritos en prosa, no sintaxis. Cualquier formulación equivalente funciona.
- **Esperar que la skill actualice el curso sola.** Solo propone. Aplicar es decisión tuya, por diseño.
- **Editar `progreso.md` a mano y a medias.** Si lo tocas tú, actualiza también la cabecera y los contadores, o quedará inconsistente. Es más fiable pedirlo.
- **Asumir que todo lo documentado existe.** El caso de `/verificar-enlaces` está ahí para recordarlo.
- **Añadir un recurso solo al texto de una lección.** Si no entra en `enlaces.yaml`, se pierde.

## Resumen en 3 frases

1. `CLAUDE.md` es el archivo de reglas que Claude Code lee al empezar: por eso las cinco órdenes funcionan **sin ser comandos**, y por eso cambiar el comportamiento es cuestión de editar prosa.
2. La skill `actualizar-recursos` **propone pero no aplica**: separar generación de aprobación es lo que permite automatizar sin perder el control del contenido.
3. Claude puede redactar, catalogar y mantener registros por su cuenta; **decidir que algo del curso ha dejado de ser cierto requiere tu visto bueno**.

## Recursos para profundizar

- `CLAUDE.md` (raíz) — el archivo completo.
- `.claude/skills/actualizar-recursos/SKILL.md` — una skill real, comentada.
- [Módulo 06 — Claude Code](../06-claude-code/README.md), especialmente la lección 04 sobre `CLAUDE.md`.
- [Módulo 09 — Skills y subagentes](../09-skills-agentes/README.md) — cómo se construyen las skills.

## Siguiente lección

➡️ `03-rutinas-mantenimiento.md` — Rutinas de mantenimiento.

## Fuentes

- `CLAUDE.md` y `.claude/skills/actualizar-recursos/SKILL.md` del propio proyecto — consultado 2026-07-22.
