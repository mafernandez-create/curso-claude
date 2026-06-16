---
titulo: "Primeros pasos con el SDK de TypeScript"
modulo: "07-api-claude"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Primeros pasos con el SDK de TypeScript

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Instalar el SDK oficial de TypeScript/JavaScript y configurar la clave.
- [ ] Hacer tu primera llamada y leer la respuesta.
- [ ] Reconocer los paralelismos con el SDK de Python.

## Prerrequisitos

- Lección 01 del módulo. JavaScript/TypeScript básico y Node.js.

## Contexto

El SDK `@anthropic-ai/sdk` cubre JavaScript y TypeScript (con tipos incluidos). La lógica es idéntica a la de Python; cambia la sintaxis.

## Contenido principal

### 1. Instalación y clave

```bash
npm install @anthropic-ai/sdk
```
La clave se lee de `ANTHROPIC_API_KEY` del entorno:
```typescript
import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic(); // lee ANTHROPIC_API_KEY
```

### 2. Primera llamada

```typescript
const resp = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  messages: [{ role: "user", content: "¿Capital de Francia?" }],
});
const texto = resp.content
  .filter((b) => b.type === "text")
  .map((b) => b.text)
  .join("");
console.log(texto);
```

### 3. Usa los tipos del SDK

El SDK exporta tipos (`Anthropic.MessageParam`, `Anthropic.Message`, etc.). Úsalos en vez de definir interfaces propias: ganas seguridad de tipos y menos errores.

## Ejemplo aplicado

En este mismo curso, el **tutor IA** de la app está hecho con este SDK: una ruta de servidor que llama a `client.messages.create` con un *system prompt* y devuelve el texto. Es exactamente el patrón de esta lección.

## Ejercicio práctico

1. Crea un proyecto Node, instala el SDK y configura la clave.
2. Haz una llamada y muestra la respuesta.
3. **Criterio de éxito:** obtienes una respuesta y usas los tipos del SDK.

## Errores comunes

- **Olvidar `await`:** `messages.create` es asíncrono.
- **Redefinir tipos** que el SDK ya ofrece.

## Resumen en 3 frases

1. `npm install @anthropic-ai/sdk` y la clave en `ANTHROPIC_API_KEY`.
2. `await client.messages.create({...})` hace la llamada; el contenido viene en bloques.
3. La lógica es idéntica a Python; aprovecha los tipos que el SDK exporta.

## Recursos para profundizar

- [docs.claude.com — SDK TypeScript](https://docs.claude.com) — consultado 2026-06-14.
- `claude-quickstarts` (catálogo).

## Siguiente lección

➡️ `04-system-parametros`

## Fuentes

- [docs.claude.com — SDK TypeScript](https://docs.claude.com) — consultado 2026-06-14.
