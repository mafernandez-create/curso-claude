---
titulo: "Trabajar con repos grandes: gestión del contexto"
modulo: "06-claude-code"
orden: 12
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Trabajar con repos grandes: gestión del contexto

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender por qué un repositorio grande es un reto de **contexto** para un agente.
- [ ] Aplicar técnicas para ayudar a Claude Code a centrarse en lo relevante.
- [ ] Aprovechar la exploración y los subagentes para no saturar el contexto.

## Prerrequisitos

- Lección 04 (CLAUDE.md) y Módulo 01, lección 01 (tokens y contexto).

## Contexto

Claude Code no "tiene en la cabeza" todo tu repositorio: lee lo que necesita en cada momento. En proyectos grandes, ayudarle a **mirar al sitio correcto** marca la diferencia entre una respuesta precisa y una que se pierde.

## Contenido principal

### 1. El reto

Un repositorio puede tener miles de archivos; el contexto del modelo es finito. Si le pides algo sin pistas, gastará esfuerzo explorando. Tu trabajo es **orientarlo**.

### 2. Técnicas para orientar

- **Señala dónde mirar:** "el formulario está en `src/components/Registro.tsx`". Ahorras exploración.
- **Un buen `CLAUDE.md`** con la estructura del repo (lección 04) le da el mapa de entrada.
- **Tareas acotadas:** una cosa a la vez evita que tenga que cargar medio proyecto.
- **Empieza por explorar:** para entender una zona desconocida, pídele primero un resumen de esa carpeta.

### 3. Exploración y subagentes

Claude Code puede **buscar** por el repo (por nombre, por contenido) para localizar lo relevante sin leerlo todo. Para tareas amplias, puede apoyarse en **subagentes** que exploran en paralelo y le devuelven solo la conclusión, manteniendo el contexto principal despejado. (Los subagentes se ven a fondo en el Módulo 09.)

### 4. Sesiones largas

En sesiones muy largas, el contexto se llena. Si notas que "se despista", divide el trabajo en sesiones enfocadas por tarea, en lugar de una conversación interminable.

## Ejemplo aplicado

En un repo grande, en vez de "arregla el bug del login":
```
El bug del login está en la validación. Empieza mirando
`src/auth/` y `src/components/Login.tsx`. Resume cómo funciona
ese flujo antes de proponer el arreglo.
```

## Ejercicio práctico

1. En un proyecto con varios archivos, pide un cambio **señalando dónde mirar**.
2. Compara con pedirlo sin pistas.
3. **Criterio de éxito:** ves que orientarlo da respuestas más precisas y rápidas.

## Errores comunes

- **Pedir cambios "a ciegas" en repos grandes:** gasta contexto y acierta menos.
- **Sesiones eternas:** divide por tareas para mantener el foco.

## Resumen en 3 frases

1. Claude Code lee lo necesario, no todo el repo; en proyectos grandes hay que orientarlo.
2. Señala dónde mirar, mantén un buen CLAUDE.md y acota las tareas.
3. La exploración y los subagentes ayudan a no saturar el contexto en tareas amplias.

## Recursos para profundizar

- Módulo 09 — subagentes.
- [docs.claude.com — gestión de contexto](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `13-costes-limites`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
