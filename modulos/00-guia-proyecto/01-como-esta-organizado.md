---
titulo: "Cómo está organizado este curso"
modulo: "00-guia-proyecto"
orden: 1
creado: 2026-07-22
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 10
---

# Cómo está organizado este curso

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Ubicar cualquier cosa del repositorio sin buscarla a ciegas.
- [ ] Distinguir los **cuatro ejes** del curso y decidir cuáles te interesan.
- [ ] Saber qué archivo manda sobre qué: **plan**, **progreso** y **bitácora** no son lo mismo.
- [ ] Entender por qué esto es un curso **vivo** y qué implica para ti.

## Prerrequisitos

Ninguno. Esta es la puerta de entrada.

## Contexto

Esto no es un libro con capítulos cerrados: es un **repositorio de conocimiento** que crece. Tiene una consecuencia práctica inmediata: hay archivos que son contenido, otros que son estado y otros que son maquinaria. Confundirlos es la única forma de perderse aquí.

Diez minutos ahora te ahorran buscar a ciegas durante meses.

## Contenido principal

### 1. El mapa

```
curso-claude/
├── CLAUDE.md            ← las reglas: cómo debe trabajar Claude Code aquí
├── README.md            ← índice navegable
├── plan-de-estudio.md   ← la ruta recomendada (teoría)
├── progreso.md          ← por dónde vas TÚ (realidad)
├── bitacora.md          ← tus apuntes libres
├── modulos/             ← el contenido: 14 módulos, 00 a 13
├── recursos/            ← catálogo de fuentes externas
│   └── enlaces.yaml     ← la base de datos; el resto son vistas temáticas
├── plantillas/          ← moldes para crear contenido nuevo
├── changelog/           ← qué ha cambiado y qué novedades hay pendientes
└── .claude/             ← skills y comandos propios del proyecto
```

La regla para orientarte: **`modulos/` es lo que estudias, todo lo demás existe para que `modulos/` siga siendo útil con el tiempo.**

### 2. Los cuatro ejes

Los módulos no son una escalera única. Cubren cuatro perfiles que se solapan:

| Eje | Qué busca | Módulos |
|---|---|---|
| **Usuario general** | Productividad, uso cotidiano | 03, 04 |
| **Desarrollador** | API, Claude Code, MCP, agentes | 06–11 |
| **Formador** | Enseñar Claude a otras personas | 12 |
| **Fundamentos y seguridad** | Cómo funciona, ética, alineación | 01, 02, 13 |

Transversales a todos: el **05** (prompt engineering) y el **13** (seguridad y ética). El **00** —este— es meta.

No hace falta hacerlos todos ni en orden. Si no vas a tocar la API, el módulo 07 puede esperar indefinidamente.

### 3. Plan, progreso y bitácora: tres archivos que se confunden

Es la distinción que más problemas evita:

- **`plan-de-estudio.md`** — la ruta **recomendada**. Es teoría: el orden que tendría sentido. No se toca al avanzar.
- **`progreso.md`** — **dónde estás de verdad**. Es la fuente de verdad de tu avance. Marca la lección `🔵 Siguiente` y lleva la cuenta. Si preguntas a Claude Code *"¿por dónde sigo?"*, lee este archivo.
- **`bitacora.md`** — tus apuntes, dudas y reflexiones mientras estudias. Libre, sin formato obligatorio.

Si el plan y el progreso se contradicen, **manda el progreso**: el plan es una sugerencia; tu avance es un hecho.

### 4. Anatomía de una lección

Todas siguen la misma estructura, definida en `plantillas/leccion.md`:

**Metadatos** (frontmatter) → **Objetivos** → **Prerrequisitos** → **Contexto** → **Contenido** → **Ejemplo aplicado** → **Ejercicio** → **Errores comunes** → **Resumen en 3 frases** → **Recursos** → **Fuentes**.

Dos campos del frontmatter importan más de lo que parece:

- **`revisado`** — cuándo se comprobó por última vez. En un tema que cambia cada semana, una lección revisada hace ocho meses hay que leerla con reservas.
- **`estado`** — `borrador`, `revisado` u `obsoleto`. Lo obsoleto **no se borra**: se marca y se conserva como histórico, y se escribe una versión nueva al lado.

Si tienes prisa, el **Resumen en 3 frases** y los **Errores comunes** son la parte con mejor relación valor/tiempo.

### 5. Por qué es un curso vivo

Claude cambia cada pocas semanas: modelos nuevos, funciones que se retiran, precios que se mueven. Un curso cerrado sobre esto estaría obsoleto antes de terminarlo.

De ahí tres decisiones de diseño que verás por todas partes:

- **Toda afirmación técnica lleva fuente y fecha.** Puedes comprobar si sigue siendo cierta.
- **Los datos volátiles se remiten a la fuente oficial** en vez de copiarse. Un precio escrito aquí caduca; un enlace a la página de precios no.
- **Hay un registro de cambios** (`changelog/`) donde queda qué se actualizó y por qué, incluidas las novedades **propuestas pero aún no aplicadas**.

Lo que implica para ti: si algo del curso contradice la documentación oficial de Anthropic, **manda la documentación oficial**. El curso está desactualizado en ese punto y conviene corregirlo.

## Ejemplo aplicado

Quieres saber si Claude puede leer PDFs y cuánto costaría procesarlos por API.

1. **`README.md`** o el mapa de arriba: es tema de API → módulo **07**.
2. En `modulos/07-api-claude/` encuentras `09-pdfs.md` y `17-costes.md`.
3. Miras el frontmatter: `revisado: 2026-07-20`. Reciente, fiable.
4. La lección de costes **no** te da precios: te remite a la página oficial. Correcto — un precio escrito en un `.md` habría caducado.
5. ¿Quieres más? `recursos/enlaces.yaml`, filtrando por `modulos_relacionados: [07]`.

Tiempo: dos minutos. Sin el mapa: abrir carpetas al azar.

## Ejercicio práctico

1. Abre `progreso.md` y localiza tu lección `🔵 Siguiente`.
2. Abre `recursos/enlaces.yaml` y busca **un recurso** relacionado con el módulo en el que estás.
3. Abre la última entrada de `changelog/CHANGELOG.md` y mira qué cambió por última vez.
4. Responde sin buscar: ¿dónde apuntarías una duda que te surge estudiando? ¿Y dónde marcarías que has terminado una lección?

**Criterio de éxito:** las dos últimas preguntas las contestas sin dudar (`bitacora.md` y `progreso.md`). Si has dudado, vuelve al punto 3 de esta lección: es la distinción que más se confunde.

## Errores comunes

- **Confundir `plan-de-estudio.md` con `progreso.md`.** El primero es la ruta ideal; el segundo, dónde estás. Marcar avances en el plan deja el progreso mintiendo.
- **Estudiar en orden estricto 00 → 13.** Los ejes son independientes. Si no vas a usar la API, el 07 puede esperar.
- **Ignorar el campo `revisado`.** En un tema que se mueve tan rápido, la fecha de revisión es parte del contenido.
- **Añadir recursos solo al texto de un módulo.** El catálogo es `enlaces.yaml`; si no entra ahí, se pierde.
- **Borrar lo obsoleto.** Se marca y se conserva. El histórico explica por qué las cosas son como son.

## Resumen en 3 frases

1. `modulos/` es lo que estudias; **todo lo demás existe para que siga siendo útil** con el paso del tiempo.
2. **`plan-de-estudio.md`** es la ruta recomendada, **`progreso.md`** es dónde estás de verdad —y manda este— y **`bitacora.md`** son tus apuntes libres.
3. Es un curso **vivo**: toda afirmación lleva fuente y fecha, los datos volátiles se remiten a la fuente oficial, y si el curso contradice a la documentación de Anthropic, gana la documentación.

## Recursos para profundizar

- `CLAUDE.md` (raíz) — las reglas completas del proyecto.
- `plantillas/leccion.md` — el molde exacto de una lección.
- `plan-de-estudio.md` — la ruta recomendada por ejes.

## Siguiente lección

➡️ `02-flujos-claude-code.md` — Flujos de trabajo con Claude Code en este repo.

## Fuentes

- `CLAUDE.md` y `README.md` del propio proyecto — consultado 2026-07-22.
