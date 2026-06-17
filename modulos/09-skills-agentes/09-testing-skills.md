---
titulo: "Testing de Skills: evaluación sistemática"
modulo: "09-skills-agentes"
orden: 9
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 35
---

# Testing de Skills: evaluación sistemática

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Evaluar una Skill en sus **dos dimensiones**: triggering y resultado.
- [ ] Montar un conjunto de **casos de prueba**.
- [ ] Iterar con datos en vez de a ojo.

## Prerrequisitos

- Lección 08 del módulo. Módulo 05, lección 11 (evaluación de prompts).

## Contexto

Una Skill que vas a usar (o compartir) merece probarse en serio, igual que un prompt (Módulo 05, L11). Hay que comprobar dos cosas distintas: que **se activa cuando debe** y que **hace bien** lo que promete.

## Contenido principal

### 1. Las dos dimensiones

- **Triggering:** ¿se activa con las peticiones que debería y **no** con las que no? (depende de la description).
- **Calidad del resultado:** una vez activada, ¿produce lo esperado, con el formato y el criterio correctos?

Son problemas separados: una Skill puede activarse bien y dar mal resultado, o al revés.

### 2. Casos de prueba

- **Para triggering:** una lista de peticiones que **deben** activarla y otra de peticiones que **no** deben (parecidas pero fuera de su ámbito).
- **Para el resultado:** entradas representativas con el resultado esperado o un criterio de éxito.

### 3. Iterar con datos

Pasa la Skill por los casos y anota fallos. Si falla el triggering, ajusta la **description**; si falla el resultado, ajusta el **cuerpo** o los recursos. Repite sobre **los mismos casos** para saber si mejoraste.

## Ejemplo aplicado

Skill "acta-reunion":
- Triggering: 5 frases que deben activarla ("haz el acta", "resume la reunión en formato acta"…) y 3 que no ("resume este artículo").
- Resultado: 3 reuniones de prueba; criterio: el acta incluye decisiones y tareas con responsable.

## Ejercicio práctico

1. Crea casos de triggering (sí/no) y de resultado para una Skill tuya.
2. Evalúala y anota fallos.
3. Ajusta y vuelve a evaluar.
4. **Criterio de éxito:** mejoras la Skill con datos, no por intuición.

## Errores comunes

- **Probar solo casos favorables:** incluye los "no debe activarse".
- **Cambiar Skill y casos a la vez:** no sabrás a qué atribuir la mejora.

## Resumen en 3 frases

1. Evalúa una Skill en dos dimensiones: triggering (cuándo se activa) y calidad del resultado.
2. Prepara casos de prueba para ambas, incluidos los que NO deben activarla.
3. Itera con datos: ajusta description o cuerpo y reevalúa sobre los mismos casos.

## Recursos para profundizar

- Módulo 05, lección 11 — evaluación sistemática.
- `introduction-agent-skills` (catálogo).

## Siguiente lección

➡️ `10-empaquetar-compartir`

## Fuentes

- [docs.claude.com — Skills](https://docs.claude.com) — consultado 2026-06-14.
