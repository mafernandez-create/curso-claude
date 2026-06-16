---
titulo: "Vision: procesar imágenes con Claude"
modulo: "07-api-claude"
orden: 8
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Vision: procesar imágenes con Claude

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Enviar **imágenes** a Claude por API y hacer preguntas sobre ellas.
- [ ] Conocer las dos formas de pasar una imagen (base64 y URL).
- [ ] Identificar casos de uso de visión.

## Prerrequisitos

- Lección 02 o 03 del módulo.

## Contexto

Claude no solo procesa texto: puede **ver imágenes**. Le envías una foto, una captura o un diagrama dentro del mensaje y razona sobre su contenido.

## Contenido principal

### 1. Cómo se envía una imagen

El contenido de un mensaje puede incluir **bloques de imagen** junto al texto. Dos formas:
- **Base64:** codificas el archivo y lo incrustas.
- **URL:** das la dirección de la imagen.

```python
import base64
img = base64.standard_b64encode(open("factura.png","rb").read()).decode()
resp = client.messages.create(model="claude-opus-4-8", max_tokens=1024,
  messages=[{"role":"user","content":[
    {"type":"image","source":{"type":"base64","media_type":"image/png","data":img}},
    {"type":"text","text":"¿Cuál es el importe total de esta factura?"}
  ]}])
```

### 2. Casos de uso

- Extraer datos de **documentos escaneados** o fotos (facturas, formularios).
- Describir o clasificar imágenes.
- Entender **capturas de pantalla** o diagramas.

### 3. Buenas prácticas

- Imágenes **legibles** (buena resolución) dan mejores resultados.
- Sé concreto en la pregunta ("dame el total y la fecha", no "analiza esto").
- Verifica los datos extraídos: la visión también puede equivocarse.

## Ejemplo aplicado

Subir la foto de un recibo y pedir: "extrae fecha, comercio e importe en formato JSON". Útil para digitalizar gastos.

## Ejercicio práctico

1. Envía una imagen con texto (un cartel, un recibo) y pide que extraiga la información.
2. Verifica el resultado contra la imagen.
3. **Criterio de éxito:** obtienes los datos correctos y has comprobado al menos uno.

## Errores comunes

- **Imágenes de baja calidad:** dificultan la lectura.
- **No verificar:** trata la extracción como un borrador a comprobar.

## Resumen en 3 frases

1. Claude puede procesar imágenes incluidas como bloques en el mensaje (base64 o URL).
2. Sirve para extraer datos de documentos/fotos, describir y entender capturas o diagramas.
3. Usa imágenes legibles, pregunta concreto y verifica lo extraído.

## Recursos para profundizar

- [docs.claude.com — vision](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `09-pdfs`

## Fuentes

- [docs.claude.com — vision](https://docs.claude.com) — consultado 2026-06-14.
