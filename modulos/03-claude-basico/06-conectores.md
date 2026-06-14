---
titulo: "Conectores: Google Drive, Gmail, Slack y otros"
modulo: "03-claude-basico"
orden: 6
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Conectores: Google Drive, Gmail, Slack y otros

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es un **conector** y qué permite hacer.
- [ ] Entender el modelo de **permisos** y por qué importan.
- [ ] Decidir con criterio qué conectar y qué no, por privacidad.

## Prerrequisitos

- Lección 02 del módulo (Projects), porque a menudo se combinan conectores y contexto.

## Contexto

Hasta ahora Claude trabaja con lo que le pegas o le subes. Los **conectores** le dan acceso —con tu permiso— a herramientas que ya usas: tu Drive, tu correo, tu Slack… De forma que pueda buscar un documento, resumir un hilo o redactar a partir de tus propios materiales sin que tú los copies a mano.

## Contenido principal

### 1. Qué es un conector

Es un **puente autorizado** entre Claude y un servicio externo. Una vez conectado, puedes pedirle cosas como "busca en mi Drive el contrato de X" o "resume los últimos correos de este remitente", y Claude usa ese acceso para responder.

### 2. Permisos: tú decides el alcance

Conectar un servicio implica **conceder acceso**, igual que cuando una app pide entrar en tu cuenta de Google. Por eso:

- Concede **solo lo necesario** y revisa qué permisos pide cada conector.
- Puedes **revocar** el acceso cuando quieras desde los ajustes.
- Recuerda la regla de oro: un conector permite *leer* tus datos; las acciones con efectos (enviar un correo, publicar) deberían confirmarse, no automatizarse a ciegas.

### 3. Qué conviene conectar (y qué no)

- **Sí, con cabeza:** servicios donde tener tu contexto te ahorra trabajo real (documentos de trabajo, correo profesional).
- **Piénsalo dos veces:** cuentas con datos muy sensibles o de terceros (datos personales de clientes, información confidencial), sobre todo en contextos corporativos con normativa de protección de datos.

La disponibilidad de cada conector depende de tu plan y, en empresas, de lo que permita tu organización.

## Ejemplo aplicado

```
Busca en mi Google Drive el documento "Plan de formación 2026"
y hazme un resumen de una página con los puntos clave.
```

Si el conector de Drive está activo y autorizado, Claude localiza el documento y lo resume sin que tú lo subas.

## Ejercicio práctico

1. Revisa, en los ajustes de Claude, qué conectores tienes disponibles.
2. Si procede, conecta **uno** de baja sensibilidad y haz una consulta sencilla.
3. Revoca el acceso al terminar si era solo una prueba.
4. **Criterio de éxito:** entiendes qué permisos concediste y sabes revocarlos.

## Errores comunes

- **Conectar todo "por si acaso":** amplías la superficie de exposición de tus datos sin necesidad.
- **Olvidar que es revocable:** si dudas, conecta, prueba y desconecta.

## Resumen en 3 frases

1. Un conector es un puente autorizado entre Claude y un servicio que ya usas (Drive, Gmail, Slack…).
2. Conectar implica conceder permisos: concede lo mínimo, revisa y revoca cuando quieras.
3. Conecta con criterio según la sensibilidad de los datos, especialmente en entornos corporativos.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — conectores e integraciones.
- Módulo 13 (Seguridad y ética) — tratamiento de datos sensibles.

## Siguiente lección

➡️ `07-memoria-conversaciones`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
