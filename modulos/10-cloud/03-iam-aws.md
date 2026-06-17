---
titulo: "Autenticación y permisos IAM para Claude en AWS"
modulo: "10-cloud"
orden: 3
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Autenticación y permisos IAM para Claude en AWS

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender cómo se **autentica** una llamada a Claude en Bedrock.
- [ ] Conocer el papel de **IAM** y el principio de mínimo privilegio.
- [ ] Saber qué credenciales **no** debes exponer.

> **Nota:** los nombres exactos de acciones/políticas IAM cambian; sigue la documentación de AWS para la configuración vigente.

## Prerrequisitos

- Lección 02 del módulo. Nociones de IAM en AWS.

## Contexto

A diferencia de la API directa (una clave `ANTHROPIC_API_KEY`), en Bedrock la autenticación es la de **AWS**: credenciales de AWS y permisos **IAM**. Es más potente y granular, pero requiere entender IAM.

## Contenido principal

### 1. Cómo se autentica

Las llamadas a Bedrock van **firmadas con credenciales de AWS** (las del usuario, rol o servicio que llama). No hay una "API key de Anthropic": la identidad es la de AWS. El SDK lo gestiona usando la cadena de credenciales habitual de AWS (variables de entorno, perfil, rol de instancia…).

### 2. Permisos IAM

Para invocar a Claude en Bedrock, la identidad necesita una **política IAM** que permita las acciones correspondientes de Bedrock sobre el modelo. Aplica **mínimo privilegio**: concede solo permiso para invocar los modelos que vas a usar, no acceso amplio.

### 3. Buenas prácticas de credenciales

- **No incrustes** claves de AWS en el código ni en el repositorio.
- En servidores, usa **roles** (de instancia/servicio) en vez de claves estáticas.
- Rota credenciales y revoca lo que no uses.
- Restringe por región y por modelo cuando sea posible.

## Ejemplo aplicado

Una app en un servidor de AWS usa un **rol IAM** con permiso solo para invocar `anthropic.claude-opus-4-8` en una región. No hay claves en el código: el SDK toma las credenciales del rol del entorno.

## Ejercicio práctico

1. Identifica qué identidad (usuario/rol) haría las llamadas en tu caso.
2. Describe la política de mínimo privilegio que le darías.
3. **Criterio de éxito:** entiendes que en Bedrock autenticas con IAM, no con una API key, y aplicas mínimo privilegio.

## Errores comunes

- **Claves de AWS en el código:** nunca; usa roles o el entorno.
- **Permisos amplios "para que funcione":** concede solo lo necesario.

## Resumen en 3 frases

1. En Bedrock autenticas con credenciales de AWS y permisos IAM, no con una API key de Anthropic.
2. Concede permiso de invocación solo a los modelos y regiones que usarás (mínimo privilegio).
3. No incrustes credenciales: usa roles, rótalas y restringe el alcance.

## Recursos para profundizar

- [docs.claude.com — auth en Bedrock](https://docs.claude.com) — consultado 2026-06-14.
- Documentación de IAM de AWS.

## Siguiente lección

➡️ `04-primeras-llamadas-bedrock`

## Fuentes

- [docs.claude.com — Bedrock](https://docs.claude.com) — consultado 2026-06-14.
