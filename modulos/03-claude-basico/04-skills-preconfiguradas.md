---
titulo: "Skills preconfiguradas: Excel, Word, PowerPoint y PDF"
modulo: "03-claude-basico"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 25
---

# Skills preconfiguradas: Excel, Word, PowerPoint y PDF

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es una **Skill** a nivel de usuario y qué aporta frente a pedir lo mismo "a mano".
- [ ] Reconocer las Skills de documentos de oficina (hojas de cálculo, documentos, presentaciones, PDF).
- [ ] Saber cuándo conviene apoyarse en una Skill para producir un archivo real.

## Prerrequisitos

- Lección 03 del módulo (Artefactos), porque el resultado de una Skill suele ser un archivo descargable.

## Contexto

Pedirle a Claude "hazme una tabla" y que te la escriba en el chat está bien para mirarla. Pero a menudo necesitas el **archivo de verdad**: un Excel con fórmulas, un Word con formato, una presentación. Las **Skills** son capacidades especializadas que Claude activa cuando la tarea lo requiere para producir exactamente eso.

> **Nota de alcance:** aquí vemos las Skills *de usuario* (las de oficina). La creación de Skills propias se trata en el Módulo 09 (Skills y subagentes).

## Contenido principal

### 1. Qué es una Skill (para el usuario)

Una Skill empaqueta instrucciones y herramientas para una tarea concreta. Cuando tu petición encaja, Claude la usa de forma transparente: tú pides el resultado y la Skill se encarga del "cómo". No tienes que invocarla con un comando: basta con describir lo que quieres.

### 2. Las Skills de oficina

Las más útiles en el día a día producen **archivos reales**:

- **Hojas de cálculo** (Excel): tablas con fórmulas, varias pestañas, formato.
- **Documentos** (Word): informes y cartas con encabezados, estilos y tabla de contenidos.
- **Presentaciones** (PowerPoint): diapositivas con título y contenido.
- **PDF**: leer, combinar, dividir o rellenar formularios; y generar documentos en PDF.

El resultado no es texto en el chat: es un archivo que descargas y abres en tu programa habitual.

### 3. Cuándo apoyarte en una Skill

- Cuando el **entregable es un archivo** (no solo la información).
- Cuando necesitas **formato o estructura** que sería tedioso montar a mano.
- Cuando partes de **datos** (un CSV, un PDF) y quieres transformarlos.

## Ejemplo aplicado

```
Con estos datos de ventas (pego la tabla), créame un Excel con
una pestaña de detalle y otra de resumen con el total por mes
y un gráfico de barras.
```

Claude usará la Skill de hojas de cálculo y te devolverá el `.xlsx` listo para descargar.

## Ejercicio práctico

1. Reúne unos datos sencillos (gastos del mes, por ejemplo).
2. Pide a Claude un Excel con un resumen y un gráfico.
3. Descárgalo y ábrelo en tu hoja de cálculo.
4. **Criterio de éxito:** obtienes un archivo funcional, no solo una tabla en pantalla.

## Errores comunes

- **Conformarse con la tabla del chat** cuando lo que necesitabas era el archivo: pídelo explícitamente ("dámelo en Excel").
- **No revisar el archivo:** las Skills aceleran, pero la responsabilidad de comprobar los datos sigue siendo tuya (recuerda la dimensión *Diligencia* del Módulo 02).

## Resumen en 3 frases

1. Una Skill es una capacidad especializada que Claude activa para producir un resultado concreto, a menudo un archivo real.
2. Las Skills de oficina generan Excel, Word, PowerPoint y PDF con formato, no solo texto en el chat.
3. Apóyate en ellas cuando el entregable sea un archivo o necesites estructura, y revisa siempre el resultado.

## Recursos para profundizar

- [docs.claude.com](https://docs.claude.com) — documentación de Skills.
- Módulo 09 de este curso — crear tus propias Skills.

## Siguiente lección

➡️ `05-modo-investigacion`

## Fuentes

- [docs.claude.com](https://docs.claude.com) — consultado 2026-06-14.
