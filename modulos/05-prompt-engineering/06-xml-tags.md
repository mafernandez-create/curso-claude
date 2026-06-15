---
titulo: "XML tags: el patrón favorito de Claude"
modulo: "05-prompt-engineering"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# XML tags: el patrón favorito de Claude

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Usar **etiquetas tipo XML** para estructurar prompts y separar sus partes.
- [ ] Pedir salidas estructuradas con etiquetas.
- [ ] Entender por qué Claude responde especialmente bien a este patrón.

## Prerrequisitos

- Lección 01 del módulo.

## Contexto

Cuando un prompt mezcla instrucciones, material y ejemplos en un bloque de texto plano, Claude puede confundir qué es qué. Las **etiquetas tipo XML** (`<texto>…</texto>`, `<instrucciones>…</instrucciones>`) delimitan cada parte sin ambigüedad. Es una de las prácticas más recomendadas con Claude.

## Contenido principal

### 1. Separar las partes del prompt

Envuelve cada componente en una etiqueta descriptiva. Así Claude sabe qué es el material a procesar, qué son las instrucciones y qué son los ejemplos.

```
<instrucciones>Resume el documento en 3 puntos.</instrucciones>
<documento>
[... texto largo ...]
</documento>
```

### 2. Pedir salida estructurada

También puedes pedir que **responda** usando etiquetas, lo que facilita después extraer cada parte:

```
Responde con:
<resumen>...</resumen>
<riesgos>...</riesgos>
```

### 3. Por qué funciona tan bien

Las etiquetas eliminan ambigüedad sobre los límites de cada bloque. Los nombres descriptivos (`<contrato>`, `<pregunta>`) además dan pistas semánticas. No tienen que ser XML válido: basta que sean consistentes y claros.

## Ejemplo aplicado

```
<rol>Eres un revisor de contratos.</rol>
<contrato>
[...]
</contrato>
<tarea>Lista las obligaciones del arrendatario.</tarea>
<formato>Una lista numerada, citando la cláusula de cada una.</formato>
```

## Ejercicio práctico

1. Toma un prompt con material largo mezclado con instrucciones.
2. Reescríbelo separando cada parte con etiquetas descriptivas.
3. Pide además la salida en etiquetas.
4. **Criterio de éxito:** la respuesta respeta mejor la estructura y es más fácil de procesar.

## Errores comunes

- **Etiquetas genéricas** (`<x>`): pierde la pista semántica; usa nombres descriptivos.
- **Inconsistencia:** si abres `<texto>`, ciérralo igual.

## Resumen en 3 frases

1. Las etiquetas tipo XML separan sin ambigüedad las partes de un prompt (material, instrucciones, ejemplos).
2. También sirven para pedir salidas estructuradas fáciles de extraer.
3. No necesitan ser XML válido: deben ser descriptivas y consistentes.

## Recursos para profundizar

- `prompting-best-practices` (catálogo) — sección de XML tags.

## Siguiente lección

➡️ `07-role-prompting`

## Fuentes

- [docs.claude.com — usar etiquetas XML](https://docs.claude.com) — consultado 2026-06-14.
