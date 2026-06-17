---
titulo: "Notifications y streaming"
modulo: "08-mcp"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Notifications y streaming

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar para qué sirven las **notifications** en MCP.
- [ ] Entender cómo un servidor comunica **progreso** o **cambios**.
- [ ] Relacionarlo con tareas largas.

## Prerrequisitos

- Lección 02 del módulo.

## Contexto

No toda comunicación es petición→respuesta. A veces el servidor necesita **avisar** de algo sin que se lo pregunten: que una lista de recursos cambió, o el **progreso** de una tarea larga. Para eso están las notifications.

## Contenido principal

### 1. Qué son las notifications

Son **mensajes que el servidor envía** al cliente para informar de eventos, sin esperar respuesta. Por ejemplo: "la lista de recursos ha cambiado, recárgala" o "voy por el 60 % de la tarea".

### 2. Progreso en tareas largas

Si una tool tarda (procesar muchos datos, una operación larga), el servidor puede emitir **actualizaciones de progreso** para que el cliente las muestre. Mejora la experiencia: el usuario ve que algo avanza, no una espera muda.

### 3. Cambios en las capacidades

Un servidor puede notificar que sus **listas** (de tools, resources o prompts) han cambiado, para que el cliente las vuelva a descubrir. Útil en servidores dinámicos.

## Ejemplo aplicado

Un servidor que indexa una carpeta grande emite notifications de progreso ("indexados 300/1000 archivos") mientras trabaja, y al terminar notifica que la lista de resources se ha actualizado.

## Ejercicio práctico

1. Identifica en un servidor tuyo una tarea que se beneficiaría de avisos de progreso.
2. Describe qué notification enviarías y cuándo.
3. **Criterio de éxito:** entiendes cuándo usar notifications frente a respuestas normales.

## Errores comunes

- **Tareas largas mudas:** sin progreso, el usuario cree que se ha colgado.
- **Abusar de notifications:** envía las útiles, no ruido constante.

## Resumen en 3 frases

1. Las notifications son avisos que el servidor envía al cliente sin esperar respuesta.
2. Sirven para comunicar progreso de tareas largas y cambios en las capacidades.
3. Mejoran la experiencia, pero úsalas con mesura para no generar ruido.

## Recursos para profundizar

- [modelcontextprotocol.io — notifications](https://modelcontextprotocol.io) — consultado 2026-06-14.

## Siguiente lección

➡️ `11-transports`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
