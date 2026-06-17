---
titulo: "Skills con scripts ejecutables"
modulo: "09-skills-agentes"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Skills con scripts ejecutables

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar por qué una Skill puede incluir **scripts**.
- [ ] Distinguir cuándo conviene un script frente a una instrucción.
- [ ] Diseñar una Skill que combine instrucciones y código.

## Prerrequisitos

- Lección 05 del módulo (recursos bundled).

## Contexto

Algunas partes de una tarea son **deterministas**: convertir un formato, validar datos, hacer un cálculo exacto. Para esas, un **script** es más fiable que pedirle al modelo que lo haga "a mano". Las Skills pueden incluir scripts que el agente ejecuta.

## Contenido principal

### 1. Por qué un script

El modelo es bueno razonando, pero para operaciones **exactas y repetibles** un programa es más seguro: no se equivoca en un cálculo ni "improvisa" un formato. Incluir un script en la Skill aporta esa fiabilidad.

### 2. Instrucción vs. script

- **Instrucción (texto):** para lo que requiere criterio y lenguaje (redactar, decidir el enfoque).
- **Script (código):** para lo determinista (parsear, calcular, transformar, validar).

El cuerpo del SKILL.md indica **cuándo** ejecutar el script y qué hacer con su resultado.

### 3. Cómo encaja

La Skill incluye el script (en `scripts/`) y el cuerpo dice algo como: "para validar el archivo, ejecuta `scripts/validar.py`; si devuelve errores, corrígelos antes de continuar". El agente ejecuta el script (con los permisos del Módulo 06) y usa su salida.

## Ejemplo aplicado

Skill "publicar-post":
- **Script** `optimizar-imagen.py`: redimensiona la imagen al tamaño correcto (determinista).
- **Cuerpo:** redacta el texto del post (criterio) y ejecuta el script para preparar la imagen.

Así, lo creativo lo hace el modelo y lo mecánico, el script.

## Ejercicio práctico

1. En una Skill tuya, identifica una parte determinista.
2. Conviértela en un script e indícale al cuerpo cuándo ejecutarlo.
3. **Criterio de éxito:** la Skill combina instrucciones (criterio) y un script (parte exacta).

## Errores comunes

- **Pedir al modelo cálculos exactos repetitivos:** un script es más fiable.
- **Scriptar lo que requiere criterio:** eso es trabajo del modelo, no de código rígido.

## Resumen en 3 frases

1. Las Skills pueden incluir scripts para las partes deterministas de una tarea.
2. Usa instrucciones para lo que requiere criterio y scripts para lo exacto y repetible.
3. El cuerpo del SKILL.md indica cuándo ejecutar el script y qué hacer con su resultado.

## Recursos para profundizar

- `anthropic-skills` (catálogo) — Skills con scripts.
- Módulo 06 (Claude Code) — ejecución y permisos.

## Siguiente lección

➡️ `08-description-triggering`

## Fuentes

- [docs.claude.com — Skills con scripts](https://docs.claude.com) — consultado 2026-06-14.
