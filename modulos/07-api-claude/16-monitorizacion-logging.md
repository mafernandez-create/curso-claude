---
titulo: "Monitorización y logging en producción"
modulo: "07-api-claude"
orden: 16
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Monitorización y logging en producción

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Identificar qué conviene **registrar** de una app que usa la API.
- [ ] Saber qué métricas vigilar (uso, latencia, errores, coste).
- [ ] Aplicar buenas prácticas de privacidad en los logs.

## Prerrequisitos

- Lección 15 del módulo.

## Contexto

Cuando tu app está en producción, necesitas **saber qué pasa**: cuánto usas, cuánto cuesta, qué falla. Sin medición, vas a ciegas y los problemas te pillan por sorpresa.

## Contenido principal

### 1. Qué registrar

- **Identificador de cada petición** (la respuesta incluye un `request_id`): clave para reportar incidencias a Anthropic.
- **Uso de tokens** (entrada/salida) por llamada: base del coste.
- **Latencia** y **errores** (códigos, reintentos).
- Contexto mínimo para depurar (qué función llamó, no necesariamente el contenido).

### 2. Métricas a vigilar

- **Consumo de tokens** y su **coste** acumulado.
- **Tasa de errores** y de rate limits (429): si sube, ajusta.
- **Latencia** percibida por el usuario.

### 3. Privacidad en los logs

- **No registres datos sensibles** (personales, secretos) salvo necesidad y con protección.
- Cumple la normativa (RGPD): minimiza, anonimiza, define retención.
- Especial cuidado si tu app maneja datos de terceros (clientes).

## Ejemplo aplicado

Por cada llamada, guardas: `request_id`, tokens de entrada/salida, latencia y si hubo error. Con eso montas un panel de coste diario y tasa de errores, y puedes reportar cualquier incidencia con el `request_id`.

## Ejercicio práctico

1. Decide qué campos registrarías por llamada en una app tuya.
2. Marca cuáles podrían ser sensibles y cómo los tratarías.
3. **Criterio de éxito:** tienes un esquema de logging útil y respetuoso con la privacidad.

## Errores comunes

- **No guardar el `request_id`:** dificulta reportar incidencias.
- **Registrar contenido sensible "por si acaso":** riesgo de privacidad y de cumplimiento.

## Resumen en 3 frases

1. Registra request_id, uso de tokens, latencia y errores para no ir a ciegas.
2. Vigila coste, tasa de errores/429 y latencia.
3. Cuida la privacidad: no registres datos sensibles sin necesidad y cumple la normativa.

## Recursos para profundizar

- [docs.claude.com — uso y observabilidad](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 13 (Seguridad y ética).

## Siguiente lección

➡️ `17-costes`

## Fuentes

- [docs.claude.com — API](https://docs.claude.com) — consultado 2026-06-14.
