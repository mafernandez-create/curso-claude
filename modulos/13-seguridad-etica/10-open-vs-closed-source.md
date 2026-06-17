---
titulo: "Open source vs. closed source en IA"
modulo: "13-seguridad-etica"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Open source vs. closed source en IA

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir modelos **abiertos** (open-weights) de **cerrados**.
- [ ] Argumentar los **pros y contras** de cada enfoque desde la seguridad.
- [ ] Formar tu propio criterio sobre un debate abierto.

## Prerrequisitos

- Lecciones 08 y 09 del módulo.

## Contexto

Uno de los debates más vivos: ¿deben liberarse los **pesos** de los modelos avanzados (open-weights) o mantenerse cerrados? No hay consenso; conviene entender ambos lados.

## Contenido principal

### 1. Qué significa cada cosa

- **Open-weights (abiertos):** los parámetros del modelo se publican; cualquiera puede descargarlo, ejecutarlo y modificarlo. (Ojo: "abierto" en IA suele referirse a los pesos, no necesariamente a todo el código y datos de entrenamiento.)
- **Closed (cerrados):** el modelo se ofrece como **servicio** (API); no se publican los pesos. Claude es de este tipo.

### 2. Argumentos a favor de abrir

- **Transparencia e investigación:** la comunidad puede auditar y estudiar el modelo.
- **Acceso y competencia:** menos dependencia de pocos proveedores.
- **Personalización:** ejecutar y adaptar en local, con control de datos.

### 3. Argumentos a favor de cerrar

- **Seguridad:** un modelo abierto **no se puede "retirar"**; si tiene capacidades peligrosas, cualquiera puede quitarle las salvaguardas. Las protecciones del lado servidor (filtros, monitorización, políticas) se pierden.
- **Control de mal uso:** más difícil monitorizar usos dañinos si el modelo corre en máquinas ajenas.
- **Escalado responsable:** encaja con liberar capacidades peligrosas solo con salvaguardas (lección 08).

### 4. Un debate sin respuesta única

El equilibrio depende de **cuán capaz y peligroso** sea el modelo. Para capacidades bajas, abrir tiene pocos riesgos y muchas ventajas. Para capacidades de frontera, el riesgo de mal uso irreversible pesa más. La postura razonable suele ser **matizada**, no absoluta.

## Ejemplo aplicado

Un modelo pequeño para clasificar texto: abrirlo aporta mucho y arriesga poco. Un modelo de frontera con potenciales capacidades en biosec: abrir los pesos haría imposible retirar esa capacidad si resulta peligrosa. El **nivel de capacidad** cambia el cálculo.

## Ejercicio práctico

1. Escribe el mejor argumento a favor de abrir y el mejor a favor de cerrar.
2. Toma una posición **matizada** según el nivel de capacidad del modelo.
3. **Criterio de éxito:** argumentas ambos lados y tu postura depende del riesgo, no de un dogma.

## Errores comunes

- **Posturas absolutas** ("todo abierto" / "todo cerrado") sin matizar por capacidad.
- **Confundir "abierto" con "todo público":** suele referirse a los pesos.

## Resumen en 3 frases

1. Los modelos abiertos publican sus pesos; los cerrados se ofrecen como servicio (como Claude).
2. Abrir favorece transparencia y acceso; cerrar facilita seguridad y control del mal uso, sobre todo en capacidades peligrosas.
3. Es un debate abierto: la postura razonable depende del nivel de capacidad y riesgo del modelo.

## Recursos para profundizar

- `anthropic-research` ⭐ e `import-ai` — catálogo.
- `dotcsv` — divulgación en español — catálogo.

## Siguiente lección

➡️ `11-economic-index`

## Fuentes

- [anthropic.com](https://www.anthropic.com) — consultado 2026-06-14.
