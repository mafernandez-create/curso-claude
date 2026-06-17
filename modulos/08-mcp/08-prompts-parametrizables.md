---
titulo: "Prompts parametrizables"
modulo: "08-mcp"
orden: 8
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Prompts parametrizables

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Exponer **Prompts** reutilizables desde un servidor MCP.
- [ ] Parametrizarlos para adaptarlos a cada uso.
- [ ] Entender cómo los usa el cliente.

## Prerrequisitos

- Lección 03 del módulo. Módulo 05 (prompting).

## Contexto

El tercer primitivo de MCP son los **Prompts**: plantillas de interacción que el servidor ofrece para que el usuario no tenga que reescribir un buen prompt cada vez. Es como compartir tu biblioteca de prompts (Módulo 04, L11) a través del protocolo.

## Contenido principal

### 1. Qué es un Prompt MCP

Es una **plantilla de mensaje** (o conjunto de mensajes) que el servidor pone a disposición del cliente, normalmente con un nombre y una descripción. El usuario la invoca y el cliente la usa como punto de partida de la conversación.

### 2. Parámetros

Un Prompt puede aceptar **argumentos** que se insertan en la plantilla. Así, un mismo Prompt `resumen-formal(documento, longitud)` sirve para muchos casos cambiando los valores.

### 3. Cómo lo usa el cliente

El cliente **descubre** los Prompts del servidor y los ofrece al usuario (por ejemplo, como opciones rápidas). Al elegir uno y dar los argumentos, se genera el mensaje y se envía al modelo.

## Ejemplo aplicado

Un servidor de soporte expone un Prompt `redactar-respuesta-incidencia(ticket, tono)`:
- Plantilla: "Redacta una respuesta para el ticket `{ticket}` en tono `{tono}`, disculpándote si procede y proponiendo una solución."
- El agente de soporte lo invoca con su ticket y el tono deseado, sin escribir el prompt entero.

## Ejercicio práctico

1. Define un Prompt parametrizable útil para una tarea tuya recurrente.
2. Invócalo desde el cliente con distintos argumentos.
3. **Criterio de éxito:** reutilizas un buen prompt cambiando solo los parámetros.

## Errores comunes

- **Plantillas rígidas sin parámetros:** pierden reutilización.
- **Duplicar lógica de Tools en Prompts:** un Prompt es una plantilla de interacción, no una acción.

## Resumen en 3 frases

1. Los Prompts MCP son plantillas de interacción reutilizables que el servidor ofrece al cliente.
2. Se parametrizan con argumentos para adaptarlos a cada caso.
3. El cliente los descubre y los ofrece al usuario, que solo aporta los valores.

## Recursos para profundizar

- [modelcontextprotocol.io — prompts](https://modelcontextprotocol.io) — consultado 2026-06-14.
- Módulo 04, lección 11 — biblioteca de prompts.

## Siguiente lección

➡️ `09-sampling`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
