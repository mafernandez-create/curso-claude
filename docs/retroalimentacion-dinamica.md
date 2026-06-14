# Retroalimentación dinámica del curso

> Cómo el curso se mantiene vivo incorporando contenido de fuentes externas
> (empezando por los podcasts). Documento de referencia del mecanismo.

## Idea

El curso no es estático: una **rutina semanal** visita fuentes que publican con
regularidad (de momento, dos podcasts de IA), detecta novedades relevantes y
**propone** cómo incorporarlas. Nada se aplica al contenido sin el **visto bueno
de Manolo** (regla del proyecto en `CLAUDE.md`).

## Fuentes que retroalimentan el curso

Marcadas en `recursos/enlaces.yaml` con `retroalimenta_curso: true` y su `rss:`.

| Fuente | RSS |
|---|---|
| El Test de Turing | `https://anchor.fm/s/e1671d44/podcast/rss` |
| Inteligencia Artificial (Pocho Costa) | `https://pochocosta.com/feed/podcast/inteligencia-artificial/` |

Para añadir otra fuente: crea su entrada en `enlaces.yaml` con `rss` y
`retroalimenta_curso: true`, y regístrala en `changelog/retroalimentacion-podcasts.json`.

## Flujo (semanal, automático hasta el paso 6)

1. **Visitar** los feeds RSS de las fuentes marcadas.
2. **Detectar** episodios nuevos comparando con `changelog/retroalimentacion-podcasts.json`
   (que guarda los ya procesados; en la primera ejecución, desde `fecha_corte_inicial`).
3. **Obtener** el contenido del episodio. De momento: título + descripción del RSS
   (*show notes*). Si se queda corto para un episodio importante, se valora transcribir.
4. **Clasificar** a qué módulo/lección del curso pertenece.
5. **Proponer** la implementación, eligiendo el nivel según lo que aporte el episodio:
   - **Recurso enlazado** — añadir el episodio como "Para profundizar" en el módulo.
   - **Resumen / nota** — redactar una nota con los puntos clave como material complementario.
   - **Actualización de lección** — si aporta algo nuevo sobre un tema ya cubierto,
     proponer una edición concreta de la lección correspondiente.
6. **Informe** — escribir las propuestas en `changelog/novedades-AAAA-MM-DD.md` y
   actualizar el registro de episodios procesados. **Aquí termina lo automático.**
7. **Confirmación de Manolo** — Manolo revisa el informe y decide qué se implementa.
8. **Implementación** — en una sesión normal, sobre lo aprobado: se edita el contenido
   en el repo (markdown) y se sincroniza a la app (`extraer-contenido` + `seed`), o se
   edita directamente desde el panel de administración del curso.

## Formato de cada propuesta en el informe

```markdown
### 🎙️ [Podcast] — "Título del episodio" (fecha)
- **Resumen:** 1–2 frases de qué trata.
- **Encaja en:** Módulo NN · lección (si aplica).
- **Nivel propuesto:** recurso | resumen | actualización.
- **Propuesta concreta:** qué añadir/editar exactamente.
- **Confianza:** alta | media | baja (según lo claro que esté el encaje).
```

## Principios

- **Manolo confirma.** El paso 6 nunca aplica cambios; solo propone.
- **Honestidad epistémica.** Las *show notes* resumen, no son la fuente primaria;
  para afirmaciones técnicas, contrastar con la documentación oficial antes de
  redactar contenido nuevo.
- **Trazabilidad.** Todo episodio procesado queda en el registro JSON con su decisión.
