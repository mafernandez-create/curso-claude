---
titulo: "Autenticación en GCP: Service Accounts y permisos"
modulo: "10-cloud"
orden: 8
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Autenticación en GCP: Service Accounts y permisos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender cómo se **autentica** una llamada a Claude en Vertex.
- [ ] Conocer el papel de las **Service Accounts** y los roles de IAM en GCP.
- [ ] Aplicar **mínimo privilegio** y buenas prácticas con credenciales.

> **Nota:** nombres exactos de roles y flujos de credenciales en GCP cambian; sigue la documentación de Google Cloud.

## Prerrequisitos

- Lección 07 del módulo. Nociones de IAM en GCP.

## Contexto

En Vertex, como en Bedrock, **no usas una API key de Anthropic**: autenticas con la identidad de Google Cloud. El mecanismo típico para servicios son las **Service Accounts**.

## Contenido principal

### 1. Cómo se autentica

Las llamadas a Vertex usan **credenciales de Google Cloud**. En desarrollo puede ser tu identidad de usuario (vía gcloud); en producción, una **Service Account**: una identidad no-humana para que tu aplicación se autentique. El SDK toma esas credenciales del entorno (Application Default Credentials).

### 2. Service Accounts y roles IAM

Una Service Account recibe **roles de IAM** que le dan permiso para usar Vertex AI en tu proyecto. Aplica **mínimo privilegio**: concede solo los roles necesarios para invocar el modelo, no permisos amplios.

### 3. Buenas prácticas

- **Evita claves de Service Account en archivos** cuando puedas; prefiere identidades vinculadas al entorno (por ejemplo, la identidad del servicio donde corre la app).
- Si usas una clave, **no la subas al repositorio** y rótala.
- Restringe por proyecto y por rol; revoca lo que no uses.

## Ejemplo aplicado

Una app desplegada en GCP usa una **Service Account** con el rol mínimo para invocar Vertex AI. No hay claves en el código: la app usa las credenciales por defecto del entorno donde corre.

## Ejercicio práctico

1. Identifica qué Service Account usaría tu app y en qué proyecto.
2. Describe el rol de mínimo privilegio que le asignarías.
3. **Criterio de éxito:** entiendes que en Vertex autenticas con identidad de GCP (Service Accounts), no con API key, y aplicas mínimo privilegio.

## Errores comunes

- **Claves de Service Account en el repo:** nunca; usa identidades del entorno y rota.
- **Roles excesivos:** concede solo lo necesario para Vertex.

## Resumen en 3 frases

1. En Vertex autenticas con credenciales de Google Cloud, no con una API key de Anthropic.
2. Las Service Accounts son la identidad típica para servicios, con roles IAM de mínimo privilegio.
3. Evita claves en archivos cuando puedas, no las subas al repo y rótalas.

## Recursos para profundizar

- Documentación de Google Cloud sobre Service Accounts e IAM.
- [docs.claude.com — Vertex](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `09-claude-vertex-primeros-pasos`

## Fuentes

- [docs.claude.com — Vertex](https://docs.claude.com) — consultado 2026-06-14.
