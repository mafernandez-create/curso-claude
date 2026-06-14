---
titulo: "Memoria de conversaciones"
modulo: "03-claude-basico"
orden: 7
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 20
---

# Memoria de conversaciones

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Distinguir entre el **contexto de una conversación** y la **memoria** entre conversaciones.
- [ ] Saber qué tipo de información conviene que Claude recuerde y cuál no.
- [ ] Gestionar la memoria: revisarla y borrarla.

## Prerrequisitos

- Lección 02 del módulo (conversaciones vs. Projects).

## Contexto

En la lección 02 dijimos que cada conversación es un hilo independiente. La **memoria** matiza eso: permite que Claude recuerde ciertos datos tuyos **entre conversaciones**, para no tener que repetirlos. Es cómodo, pero conviene entender qué guarda y controlarlo.

## Contenido principal

### 1. Dos cosas distintas

- **Contexto de la conversación:** todo lo dicho dentro de un hilo. Se pierde al cambiar de conversación (salvo Projects).
- **Memoria entre conversaciones:** datos que Claude conserva de ti a lo largo del tiempo (preferencias, hechos recurrentes) para personalizar futuras respuestas.

### 2. Qué conviene recordar

Buenos candidatos: tus **preferencias de estilo** ("respóndeme conciso"), tu **rol** o sector, datos estables que repites a menudo. Malos candidatos: información **sensible o temporal** (contraseñas —nunca—, datos puntuales que no quieres que persistan).

### 3. Tú mandas

La memoria es **gestionable**: puedes revisar qué ha recordado, **editarlo o borrarlo**, y desactivarla si prefieres que cada conversación empiece "en blanco". En entornos corporativos, su disponibilidad puede depender de la política de la organización.

## Ejemplo aplicado

Si una vez le dices "trabajo en formación y prefiero ejemplos del ámbito educativo", la memoria puede conservarlo, y en conversaciones futuras Claude tenderá a darte ejemplos de ese ámbito sin que lo repitas. Si más adelante cambias de área, edita o borra ese recuerdo.

## Ejercicio práctico

1. Revisa en los ajustes qué tiene Claude en memoria sobre ti.
2. Añade una preferencia útil y comprueba que la aplica en una conversación nueva.
3. Borra un recuerdo y verifica que deja de aplicarlo.
4. **Criterio de éxito:** sabes consultar, editar y borrar la memoria.

## Errores comunes

- **Confiar datos sensibles a la memoria:** nunca contraseñas ni información confidencial.
- **Olvidar que persiste:** si algo era puntual, bórralo para que no contamine respuestas futuras.

## Resumen en 3 frases

1. El contexto vive dentro de una conversación; la memoria conserva datos tuyos entre conversaciones.
2. Conviene recordar preferencias y datos estables, nunca información sensible o temporal.
3. La memoria es revisable, editable y borrable: el control es tuyo.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — gestión de memoria.
- Módulo 13 (Seguridad y ética) — privacidad de tus datos.

## Siguiente lección

➡️ `08-estilos-personalizados`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
