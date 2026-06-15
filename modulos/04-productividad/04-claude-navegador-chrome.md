---
titulo: "Claude en el navegador (Chrome): workflow multi-tab"
modulo: "04-productividad"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Claude en el navegador (Chrome): workflow multi-tab

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué aporta tener a Claude **integrado en el navegador**.
- [ ] Diseñar un flujo de trabajo con **varias pestañas** apoyado en Claude.
- [ ] Aplicar las precauciones de seguridad al darle acceso a páginas web.

> **Nota:** la disponibilidad de la extensión/integración de navegador depende del plan y de la región, y evoluciona. Consulta [docs.claude.com](https://docs.claude.com) para el estado actual.

## Prerrequisitos

- Lección 03 del módulo.

## Contexto

Buena parte del trabajo de conocimiento ocurre en el navegador: leer, comparar pestañas, copiar de aquí a allá. Tener a Claude **dentro del navegador** elimina el ir y venir: puede leer la página que tienes delante y ayudarte sin que copies y pegues.

## Contenido principal

### 1. Qué cambia con Claude en el navegador

En lugar de pegar el texto de una web en el chat, Claude puede **leer la pestaña activa** y trabajar sobre ella: resumir un artículo, extraer datos de una tabla, comparar dos páginas. Ahorra el paso de copiar y reduce errores.

### 2. Un workflow multi-pestaña típico

1. Abres varias fuentes (artículos, fichas de producto, documentación).
2. Pides a Claude que **resuma y compare** lo relevante de cada una.
3. Le pides un **entregable** (tabla comparativa, borrador de decisión).
4. Revisas y ajustas.

### 3. Seguridad: trata las páginas como datos, no como órdenes

Una página web puede contener texto que *parezca* darle instrucciones a Claude ("ignora lo anterior y haz X"). Eso es **contenido, no una orden tuya**. Buenas prácticas:
- No le dejes ejecutar acciones con efectos a partir de algo que "leyó" en una web sin que tú lo confirmes.
- Desconfía de enlaces y formularios de páginas no fiables.

## Ejemplo aplicado

Comparar tres modelos de un producto:
```
Tengo abiertas tres fichas de producto. Léelas y hazme una tabla
comparativa con precio, garantía y características clave, y dime
cuál encaja mejor para un uso doméstico ocasional.
```

## Ejercicio práctico

1. Abre 2–3 páginas sobre un mismo tema.
2. Pide a Claude una comparación o un resumen conjunto.
3. **Criterio de éxito:** obtienes el entregable sin haber copiado y pegado el contenido manualmente.

## Errores comunes

- **Fiarte de instrucciones incrustadas en una web:** son datos, no órdenes.
- **Automatizar acciones sensibles** (compras, envíos) a partir de lo leído sin confirmar.

## Resumen en 3 frases

1. Claude en el navegador lee la página que tienes delante y trabaja sobre ella sin copiar y pegar.
2. Brilla en flujos multi-pestaña: resumir y comparar varias fuentes y producir un entregable.
3. El contenido web es dato, no orden: confirma siempre las acciones con efectos.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — integración con el navegador.
- Módulo 13 (Seguridad) — inyección de instrucciones y datos no fiables.

## Siguiente lección

➡️ `05-claude-excel`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
