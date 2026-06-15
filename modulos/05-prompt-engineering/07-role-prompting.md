---
titulo: "Role prompting y personalización de tono"
modulo: "05-prompt-engineering"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 20
---

# Role prompting y personalización de tono

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Usar el **rol** ("eres un…") para orientar el enfoque y el tono de Claude.
- [ ] Combinar rol y audiencia para ajustar el registro.
- [ ] Evitar el uso del rol como "humo" que no cambia nada.

## Prerrequisitos

- Lección 03 del módulo (system prompts).

## Contexto

Asignar un rol a Claude ("eres un profesor de física para bachillerato") orienta su vocabulario, su nivel de detalle y su tono. Bien usado, afina mucho la respuesta; mal usado, es un adorno inútil.

## Contenido principal

### 1. El rol orienta el enfoque

Decir "eres un abogado" frente a "eres un divulgador" cambia cómo explica lo mismo: tecnicismo vs. claridad. El rol activa el registro y el punto de vista adecuados.

### 2. Rol + audiencia

Aún más potente que el rol es indicar **para quién** es la respuesta: "explícalo para alguien sin conocimientos técnicos", "para un comité directivo con prisa". La audiencia define el nivel mejor que el rol solo.

### 3. Que el rol cambie algo

Un rol solo sirve si **modifica** la respuesta. "Eres un experto" rara vez cambia nada (Claude ya intenta ser competente). En cambio, "eres un editor que prioriza la concisión y elimina adjetivos" sí marca diferencia. Da roles **concretos y operativos**.

## Ejemplo aplicado

```
Eres un pediatra que explica a padres primerizos, sin alarmar y sin jerga.
Pregunta: ¿cuándo debo preocuparme por la fiebre de un bebé?
```
Compara con la misma pregunta sin rol: el registro y el cuidado del tono cambian.

## Ejercicio práctico

1. Haz una pregunta con dos roles distintos (p. ej. "experto técnico" vs "divulgador para principiantes").
2. Añade una audiencia explícita.
3. **Criterio de éxito:** las respuestas difieren de forma útil según rol y audiencia.

## Errores comunes

- **Roles vacíos** ("eres un genio"): no cambian la respuesta.
- **Olvidar la audiencia:** suele importar más que el rol.

## Resumen en 3 frases

1. El rol orienta el enfoque, el vocabulario y el tono de Claude.
2. Indicar la audiencia ajusta el nivel mejor todavía que el rol solo.
3. Da roles concretos y operativos; los genéricos no cambian nada.

## Recursos para profundizar

- Módulo 03, lección 08 — estilos personalizados.
- `prompting-best-practices` (catálogo).

## Siguiente lección

➡️ `08-prefill-formato`

## Fuentes

- [docs.claude.com — role prompting](https://docs.claude.com) — consultado 2026-06-14.
