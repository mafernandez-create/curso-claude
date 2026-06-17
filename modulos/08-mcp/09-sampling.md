---
titulo: "Sampling: el servidor pide razonamiento al cliente"
modulo: "08-mcp"
orden: 9
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Sampling: el servidor pide razonamiento al cliente

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es el **sampling** en MCP y por qué invierte la relación habitual.
- [ ] Reconocer casos de uso.
- [ ] Entender las implicaciones de control y seguridad.

## Prerrequisitos

- Lecciones 02 y 06 del módulo.

## Contexto

Normalmente el cliente (que tiene el modelo) usa las capacidades del servidor. El **sampling** permite lo contrario: que el **servidor pida al cliente** que el modelo genere algo. Es una capacidad avanzada y opcional.

## Contenido principal

### 1. La idea (inversión)

Con sampling, un servidor puede decir al cliente: "necesito que el LLM resuma este texto" o "clasifica esto". El **cliente ejecuta** esa petición con su modelo y devuelve el resultado al servidor. Así el servidor aprovecha la inteligencia del modelo **sin tener su propio LLM ni sus credenciales**.

### 2. Casos de uso

- Un servidor que procesa documentos y necesita **resumir** o **extraer** con un LLM como parte de su trabajo.
- Flujos "agénticos" donde el servidor orquesta y delega el razonamiento al cliente.

### 3. Control y seguridad

El sampling da al servidor una vía para **provocar generaciones**. Por eso el cliente mantiene el control: puede **pedir confirmación** al usuario antes de cumplir una petición de sampling, y limitar su alcance. No todos los clientes lo soportan, y conviene activarlo solo con servidores de confianza.

## Ejemplo aplicado

Un servidor MCP de análisis de logs recibe miles de líneas. En vez de devolverlas crudas, usa sampling para pedir al cliente "resume los errores más frecuentes" y entrega ya un resumen útil.

## Ejercicio práctico

1. Explica con tus palabras en qué se diferencia el sampling del uso normal de tools.
2. Piensa un caso donde un servidor se beneficiaría de pedir razonamiento al cliente.
3. **Criterio de éxito:** entiendes la inversión y sus implicaciones de control.

## Errores comunes

- **Asumir que todos los clientes lo soportan:** es opcional.
- **Olvidar el control humano:** el cliente debería poder confirmar peticiones de sampling.

## Resumen en 3 frases

1. El sampling permite que el servidor pida al cliente que el modelo genere algo (inversión de la relación).
2. Sirve para que un servidor use inteligencia del LLM sin tener su propio modelo.
3. El cliente mantiene el control: puede confirmar y limitar esas peticiones; úsalo con servidores de confianza.

## Recursos para profundizar

- [modelcontextprotocol.io — sampling](https://modelcontextprotocol.io) — consultado 2026-06-14.
- `mcp-advanced` (catálogo).

## Siguiente lección

➡️ `10-notifications-streaming`

## Fuentes

- [modelcontextprotocol.io](https://modelcontextprotocol.io) — consultado 2026-06-14.
