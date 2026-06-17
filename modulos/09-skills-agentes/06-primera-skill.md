---
titulo: "Tu primera Skill propia"
modulo: "09-skills-agentes"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 45
---

# Tu primera Skill propia

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Crear una **Skill completa** de principio a fin.
- [ ] Ubicarla para que tu cliente la reconozca.
- [ ] Probar que se activa cuando toca.

> **Nota:** la ubicación exacta donde colocar Skills (proyecto, usuario) depende del cliente y la versión; sigue [docs.claude.com](https://docs.claude.com).

## Prerrequisitos

- Lecciones 03–05 del módulo.

## Contexto

Ya conoces las piezas (frontmatter, cuerpo, niveles, recursos). Esta lección las une: vas a crear una Skill real y a verla funcionar.

## Contenido principal

### 1. Elegir un caso

Escoge un procedimiento tuyo **repetible y con instrucciones claras**: un tipo de informe, una respuesta estándar, un análisis con formato fijo. Evita algo trivial (sería un prompt).

### 2. Crear la carpeta y el SKILL.md

1. Crea una carpeta con un nombre claro.
2. Dentro, un `SKILL.md` con:
   - **Frontmatter:** `name` y una `description` que diga qué hace y **cuándo** usarla.
   - **Cuerpo:** el procedimiento, paso a paso.
3. Si hace falta, añade recursos (`references/`, etc.).

### 3. Ubicarla y probarla

Coloca la carpeta donde tu cliente busca las Skills (según la doc). Luego **provoca su uso** con una petición natural ("redáctame el informe de incidencia de hoy") y comprueba que Claude la activa y sigue tus instrucciones.

### 4. Iterar

Si no se activa cuando esperabas, casi siempre el problema es la **description** (lección 08). Si se activa pero el resultado no encaja, ajusta el **cuerpo**.

## Ejemplo aplicado

Creas `skills/acta-reunion/SKILL.md` con una description ("redacta actas de reunión con nuestro formato; úsala cuando el usuario quiera un acta") y un cuerpo con los apartados. Pides "haz el acta de la reunión de hoy con estas notas" y la Skill produce el acta con tu formato.

## Ejercicio práctico

1. Crea una Skill completa (carpeta + SKILL.md, con recursos si procede).
2. Ubícala y provoca su uso con una petición natural.
3. Ajusta hasta que se active y funcione.
4. **Criterio de éxito:** tu Skill se dispara con una petición natural y produce el resultado esperado.

## Errores comunes

- **Probarla con la frase exacta de la description:** prueba con peticiones naturales variadas.
- **No iterar la description:** es lo que más afecta al triggering.

## Resumen en 3 frases

1. Una Skill propia se crea con una carpeta y un SKILL.md (frontmatter + cuerpo), más recursos si hace falta.
2. La ubicas donde el cliente las busca y la pruebas provocando su uso con peticiones naturales.
3. Si no se activa, ajusta la description; si el resultado no encaja, ajusta el cuerpo.

## Recursos para profundizar

- `anthropic-skills` (catálogo).
- Lección 08 del módulo — descriptions para triggering.

## Siguiente lección

➡️ `07-skills-scripts`

## Fuentes

- [docs.claude.com — crear Skills](https://docs.claude.com) — consultado 2026-06-14.
