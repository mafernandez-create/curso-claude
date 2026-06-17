---
titulo: "Seguridad y compliance: GDPR, SOC 2, HIPAA y residencia de datos"
modulo: "10-cloud"
orden: 13
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Seguridad y compliance: GDPR, SOC 2, HIPAA y residencia de datos

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Entender por qué el **compliance** suele inclinar la decisión hacia Bedrock/Vertex.
- [ ] Reconocer los términos clave: **GDPR/RGPD, SOC 2, HIPAA, residencia de datos**.
- [ ] Saber **qué verificar** antes de procesar datos sensibles (sin dar asesoría legal).

> **Importante:** esta lección es divulgativa, **no** asesoría legal. Las certificaciones, los acuerdos (DPA, BAA) y la cobertura cambian; verifica el estado vigente con las fuentes oficiales y con tu equipo legal.

## Prerrequisitos

- Lecciones 01-12 del módulo.

## Contexto

Para muchas organizaciones, la razón de usar Bedrock o Vertex **no** es técnica sino de **cumplimiento**: facturación, identidad y, sobre todo, **dónde y cómo se procesan los datos**. Esta lección te da el mapa de conceptos.

## Contenido principal

### 1. Los términos clave

- **GDPR / RGPD:** reglamento europeo de protección de datos personales. Exige base legal, derechos del interesado y, a menudo, controlar **dónde** se procesan los datos.
- **Residencia de datos:** en qué **región** geográfica se almacenan/procesan. Bedrock y Vertex permiten elegir región, lo que ayuda con requisitos de residencia.
- **SOC 2:** marco de controles de seguridad para proveedores de servicios; las auditorías SOC 2 dan garantías sobre cómo se gestionan los datos.
- **HIPAA:** normativa de EE. UU. para datos sanitarios; procesar PHI suele requerir un **BAA** (Business Associate Agreement).

### 2. Por qué Bedrock/Vertex ayudan

- **Residencia:** eliges región dentro de tu cloud.
- **Acuerdos existentes:** si ya tienes contratos y DPA con AWS/GCP, el consumo de Claude entra bajo tu relación con ese proveedor.
- **Controles integrados:** IAM, cifrado, logging y auditoría del cloud que ya usas.

### 3. Qué verificar (no asumas)

- ¿Qué **certificaciones/acuerdos** cubren tu caso (DPA, BAA) y están **vigentes**?
- ¿En qué **región** se procesarán los datos?
- ¿Se **usan tus datos para entrenar**? (Revisa la política de la vía que uses.)
- ¿Qué **retención y logging** aplica el proveedor?

### 4. Buenas prácticas transversales

- **Minimiza datos:** no envíes datos personales o sensibles que no necesites.
- **Anonimiza/seudonimiza** cuando sea posible antes de enviar.
- **Mínimo privilegio** en IAM (lecciones 03 y 08).
- **Registra y audita** los accesos.

## Ejemplo aplicado

Una clínica que maneja datos de pacientes (PHI) en EE. UU. elige Bedrock por residencia en su región, exige el **BAA** correspondiente, seudonimiza antes de enviar y restringe el acceso con IAM. Antes de producción, su equipo legal verifica que todo esté vigente.

## Ejercicio práctico

1. Para un caso con datos personales, lista 3 cosas que verificarías (región, acuerdo, uso de datos).
2. Indica una medida de minimización de datos que aplicarías.
3. **Criterio de éxito:** sabes qué verificar y entiendes que la decisión final requiere fuentes oficiales y, si aplica, asesoría legal.

## Errores comunes

- **Asumir compliance "porque es un gran proveedor":** verifica acuerdos y región concretos.
- **Enviar datos sensibles sin minimizar:** reduce siempre lo que mandas.
- **Tomar esta lección como asesoría legal:** no lo es; consulta a profesionales.

## Resumen en 3 frases

1. El compliance (GDPR, SOC 2, HIPAA, residencia) suele ser la razón real para elegir Bedrock o Vertex.
2. Esas plataformas ayudan con residencia por región, acuerdos existentes y controles integrados del cloud.
3. Verifica siempre acuerdos vigentes, región y uso de datos, minimiza lo que envías y consulta a tu equipo legal.

## Recursos para profundizar

- Centro de confianza/seguridad de Anthropic, AWS y Google Cloud (certificaciones y acuerdos).
- [docs.claude.com — seguridad y compliance](https://docs.claude.com) — consultado 2026-06-14.
- Módulo 13 (Seguridad y ética).

## Siguiente lección

➡️ Fin del módulo 10. Continúa con el Módulo 11 (Casos avanzados).

## Fuentes

- [docs.claude.com — seguridad](https://docs.claude.com) — consultado 2026-06-14.
