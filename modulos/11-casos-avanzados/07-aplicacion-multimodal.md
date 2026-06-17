---
titulo: "Proyecto: Aplicación multimodal (texto + imagen)"
modulo_asociado: "11-casos-avanzados"
creado: 2026-06-14
revisado: 2026-06-14
estado: planificado
dificultad: alta
tiempo_estimado_horas: 15
---

# Aplicación multimodal (texto + imagen)

## Descripción

Una aplicación que combina **texto e imágenes**: Claude analiza imágenes (capturas, fotos, diagramas, documentos escaneados) y responde o extrae información de ellas. Por ejemplo, describir una imagen, extraer datos de un ticket o explicar un diagrama.

## Objetivos

- [ ] Enviar imágenes a Claude junto con instrucciones.
- [ ] Extraer información estructurada de imágenes (structured outputs).
- [ ] Construir un flujo de usuario simple (subir imagen → resultado).
- [ ] Entender límites y buenas prácticas de visión.

## Stack y prerrequisitos

- SDK de Anthropic con soporte de imágenes.
- Una UI mínima (web o CLI) para subir imágenes.
- Módulos 07 (API) y 05 (prompting).

## Arquitectura propuesta

```text
Imagen (+ texto) → Claude (visión) → descripción / extracción estructurada → resultado al usuario
```

## Pasos

### 1. Preparación
- Verifica formatos y tamaños de imagen admitidos en la doc.

### 2. Núcleo
- Llamada con imagen + prompt; para extracción, structured output con el esquema.

### 3. Pruebas
- Conjunto de imágenes variadas; mide exactitud de la extracción.

### 4. Refinamiento
- Maneja imágenes de baja calidad; valida los datos extraídos.

## Criterios de éxito

- [ ] Procesa imágenes y devuelve resultados útiles.
- [ ] La extracción estructurada es fiable en el lote de prueba.
- [ ] Documentados los casos donde la visión falla.

## Aprendizajes (rellenar al finalizar)

…

## Código / repositorio

…

## Fuentes consultadas

- `claude-cookbooks` (vision) — catálogo.
- [docs.claude.com — visión](https://docs.claude.com) — consultado 2026-06-14.
