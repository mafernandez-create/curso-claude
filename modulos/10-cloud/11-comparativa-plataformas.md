---
titulo: "Comparativa: API directa vs. Bedrock vs. Vertex"
modulo: "10-cloud"
orden: 11
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Comparativa: API directa vs. Bedrock vs. Vertex

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Comparar las **tres vías** de acceso a Claude en los ejes que importan.
- [ ] Elegir la adecuada según el **contexto** de tu organización.
- [ ] Evitar la trampa de "cuál es mejor" en abstracto.

## Prerrequisitos

- Lecciones 01-10 del módulo.

## Contenido principal

### 1. Los tres caminos

| Eje | API directa (Anthropic) | Bedrock (AWS) | Vertex (GCP) |
|-----|--------------------------|----------------|---------------|
| Autenticación | API key | IAM / credenciales AWS | Service Accounts / credenciales GCP |
| Facturación | Anthropic | Unificada en AWS | Unificada en GCP |
| ID de modelo | `claude-opus-4-8` | `anthropic.claude-…` | formato propio de Vertex |
| Novedades | Primero y completas | Pueden tardar | Pueden tardar |
| Funciones avanzadas | Todas (server-side tools, etc.) | Subconjunto + servicios de AWS | Subconjunto + servicios de GCP |
| Compliance/residencia | Según Anthropic | Dentro de AWS/región | Dentro de GCP/región |
| Messages API | Sí | Sí (misma) | Sí (misma) |

> Los detalles concretos cambian; usa la tabla como mapa mental, no como dato fijo.

### 2. La regla de decisión

1. **¿Tu organización ya vive en un cloud (AWS/GCP) con requisitos de facturación, identidad y compliance integrados?** → Bedrock o Vertex, el de tu cloud.
2. **¿Quieres máxima funcionalidad y las novedades antes que nadie, sin atadura cloud?** → API directa.
3. **¿Tienes datos en AWS o GCP y quieres RAG/agentes gestionados allí?** → la plataforma de ese cloud.

### 3. Lo que comparten

En las tres es la **misma Messages API**. Migrar entre ellas es sobre todo cambiar **cliente, autenticación e ID**, no reescribir la lógica de mensajes. Eso reduce el coste de cambiar de opinión.

## Ejemplo aplicado

- Startup ágil que quiere lo último: **API directa**.
- Banco con todo en AWS y compliance estricto: **Bedrock**.
- Empresa con su data warehouse y stack en GCP: **Vertex**.

## Ejercicio práctico

1. Sitúa tu caso (o tres imaginarios) en la tabla.
2. Aplica la regla de decisión y justifica la elección.
3. **Criterio de éxito:** eliges por contexto (cloud, datos, compliance, novedades), no por "cuál es mejor".

## Errores comunes

- **Buscar el "ganador" universal:** no existe; depende del contexto.
- **Olvidar que la API es la misma:** sobrestimar el coste de migrar.

## Resumen en 3 frases

1. API directa, Bedrock y Vertex difieren en autenticación, facturación, IDs, novedades y funciones avanzadas.
2. La regla: si vives en un cloud con requisitos integrados, su plataforma; si quieres lo último sin atadura, API directa.
3. Comparten la Messages API, así que migrar es cambiar cliente, auth e ID, no la lógica.

## Recursos para profundizar

- Lección 01 del módulo (por qué Bedrock/Vertex).
- [docs.claude.com — proveedores cloud](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `12-costes-facturacion`

## Fuentes

- [docs.claude.com — Bedrock y Vertex](https://docs.claude.com) — consultado 2026-06-14.
