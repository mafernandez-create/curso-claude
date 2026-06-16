---
titulo: "Procesamiento de PDFs"
modulo: "07-api-claude"
orden: 9
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Procesamiento de PDFs

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Enviar **documentos PDF** a Claude por API.
- [ ] Reutilizar un documento con la **Files API** sin reenviarlo cada vez.
- [ ] Pedir respuestas con **citas** del documento.

## Prerrequisitos

- Lección 08 del módulo.

## Contexto

Muchos casos reales parten de PDFs: informes, contratos, manuales. La API puede recibir un PDF y razonar sobre su contenido (texto y, en buena medida, su disposición visual).

## Contenido principal

### 1. Enviar un PDF

Se incluye como un bloque de **documento** en el mensaje, de forma análoga a las imágenes. Para PDFs grandes o reutilizados, conviene la Files API.

### 2. Files API: subir una vez, usar muchas

En lugar de incrustar el PDF en cada llamada, lo **subes una vez** y obtienes un identificador (`file_id`) que referencias en los mensajes. Ahorra ancho de banda y simplifica si haces varias preguntas sobre el mismo documento. (Es una función beta; revisa la cabecera/uso actual en la doc.)

```python
subido = client.beta.files.upload(file=("informe.pdf", open("informe.pdf","rb"), "application/pdf"))
# luego referencias subido.id en un bloque "document" del mensaje
```

### 3. Citas

Puedes pedir que la respuesta **cite** las partes del documento de donde sale cada afirmación. Es clave para verificar (Módulo 04, L10) en documentos legales o económicos.

## Ejemplo aplicado

Subes un contrato una vez y haces varias preguntas ("duración", "penalizaciones", "obligaciones"), cada una pidiendo la cláusula de origen, sin volver a enviar el PDF en cada llamada.

## Ejercicio práctico

1. Envía un PDF y hazle dos preguntas.
2. Si haces varias preguntas, usa la Files API para no reenviarlo.
3. Pide que cite de dónde saca cada dato y verifícalo.
4. **Criterio de éxito:** obtienes respuestas con referencias y compruebas una.

## Errores comunes

- **Reenviar un PDF grande en cada llamada:** usa la Files API.
- **No verificar afirmaciones legales/económicas:** pide citas y compruébalas.

## Resumen en 3 frases

1. Claude procesa PDFs incluidos como bloque de documento en el mensaje.
2. La Files API permite subir el documento una vez y referenciarlo por `file_id` en varias llamadas.
3. Pedir citas facilita verificar, imprescindible en documentos sensibles.

## Recursos para profundizar

- [docs.claude.com — PDF y Files API](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `10-prompt-caching-api`

## Fuentes

- [docs.claude.com — PDF support](https://docs.claude.com) — consultado 2026-06-14.
