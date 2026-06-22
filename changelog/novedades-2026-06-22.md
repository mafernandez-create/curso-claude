# Novedades del curso — 2026-06-22

> Informe generado por la rutina de retroalimentación dinámica.
>
> **✅ ESTADO (2026-06-22): IMPLEMENTADO.** Manolo confirmó las 14 propuestas y se
> han aplicado al curso (13 implementadas; la Ep. 200 de Pocho Costa se descartó
> por solapar con "De ChatGPT a Agentes"). Detalle de dónde se aplicó cada una al
> final de este archivo.

## ⚠️ Pendiente de la semana pasada

Las propuestas del informe [`novedades-2026-06-14.md`](novedades-2026-06-14.md)
(episodios 155–158 de *El Test de Turing*) **siguen sin confirmar**. Este informe
**no las repite**; cuando las revises, decídelas allí. Aquí solo van las novedades
**nuevas** desde entonces.

---

## 🎙️ Retroalimentación de podcasts

### El Test de Turing

#### "Kimi K2.7 Code. ¿Mejor que Fable 5 en programación?" (Ep. 159, 18 jun 2026)
- **Resumen:** compara el modelo Kimi K2.7 Code en programación frente a Claude Fable 5; comenta el bloqueo estadounidense a Fable 5 y otros movimientos del sector.
- **Encaja en:** Módulo 06 (Claude Code) y, por el bloqueo a Fable 5, Módulo 10/13 (compliance y geopolítica).
- **Nivel propuesto:** **recurso** (panorama competitivo de modelos de programación).
- **Propuesta concreta:** enlazar como lectura de actualidad en el módulo 06 (comparativa de herramientas/modelos de coding). El tema del bloqueo a Fable 5 se trata mejor desde las novedades de Anthropic (ver abajo).
- **Confianza:** media (toca varios temas; solo parte es del curso).

### Inteligencia Artificial (Pocho Costa) — *feed recuperado*

> La semana pasada este feed dio *timeout*. Esta vez respondió: se procesan los
> episodios desde la fecha de corte (2026-06-01). Es un podcast de **divulgación
> general** (público no técnico), así que el encaje natural suele ser **recurso**,
> no actualización de lección.

#### "Dejá de escribir prompts: pensá en sistemas de IA" (20 jun 2026)
- **Resumen:** propone pasar de escribir prompts sueltos a diseñar sistemas/agentes de IA que trabajan de forma autónoma, con ejemplos.
- **Encaja en:** Módulo 09 (Skills y subagentes) · idea central de "pensar en sistemas".
- **Nivel propuesto:** **recurso** (introducción divulgativa al cambio de mentalidad hacia agentes).
- **Propuesta concreta:** enlazar en el módulo 09 (lección introductoria de subagentes) como recurso accesible para público no técnico.
- **Confianza:** alta.

#### "De ChatGPT a Agentes de IA: El salto que pocos dan" (8 jun 2026)
- **Resumen:** distingue IA generativa de IA agéntica con casos reales de automatización sin programar.
- **Encaja en:** Módulo 09 (qué es un agente) y Módulo 04 (productividad).
- **Nivel propuesto:** **recurso**.
- **Propuesta concreta:** enlazar en el módulo 09 como ejemplo divulgativo de la diferencia generativa vs. agéntica.
- **Confianza:** alta.

#### "IA Agéntica: el cambio que no vas a poder frenar" (Ep. 200, 3 jun 2026)
- **Resumen:** evolución de la IA autónoma y multimodal y la brecha entre usuarios avanzados y básicos.
- **Encaja en:** Módulo 09 / Módulo 02 (AI Fluency).
- **Nivel propuesto:** **recurso**.
- **Propuesta concreta:** recurso complementario; solapa con el episodio del 8-jun, elegir uno para no duplicar.
- **Confianza:** media.

#### "Claude vs ChatGPT vs Gemini: ¿Cuál IA te conviene más?" (13 jun 2026)
- **Resumen:** compara las tres plataformas (modelos, agentes, imagen/vídeo, precios) y para qué perfil conviene cada una.
- **Encaja en:** Módulo 01 (panorama) o Módulo 03 (Claude como usuario).
- **Nivel propuesto:** **recurso** (con cautela: los datos comparativos caducan rápido).
- **Propuesta concreta:** enlazar solo si quieres una comparativa divulgativa; advertir que precios/capacidades cambian.
- **Confianza:** baja-media.

#### "Cómo tener IA PRIVADA en tu empresa o en tu casa" (16 jun 2026)
- **Resumen:** IA privada/local como alternativa a la nube, con recomendaciones de hardware y software para privacidad empresarial.
- **Encaja en:** Módulo 10 (cloud/privacidad) y Módulo 13 (privacidad de datos).
- **Nivel propuesto:** **recurso** (perspectiva "on-premise/local", contrapunto a Bedrock/Vertex).
- **Propuesta concreta:** enlazar en el módulo 10 como contraste a las opciones cloud; Claude es modelo cerrado vía API, así que el episodio sirve de contexto, no de how-to del curso.
- **Confianza:** media.

---

## 📰 Novedades de Anthropic (news / research / docs)

#### Claude Fable 5 y Claude Mythos 5 — 5ª generación (9 jun 2026)
- **Qué es:** nueva generación de modelos para trabajo "de días", complejo y asíncrono. **Fable 5 queda confirmado por fuente oficial** (valida la duda del informe anterior).
- **Encaja en:** Módulo 01 · lección 06 (La familia de modelos Claude) y lección 07 (versiones).
- **Nivel propuesto:** **actualización** (añadir Fable 5 / Mythos 5 como nueva generación por encima de Opus 4.x).
- **Propuesta concreta:** actualizar la lección 06 con la 5ª generación. **Contrastar en docs.claude.com** los IDs y capacidades exactos antes de redactar.
- **Confianza:** alta (confirmado por anthropic.com/news).

#### Directiva de control de exportación: suspensión de Fable 5 y Mythos 5 (12 jun 2026)
- **Qué es:** el gobierno de EE. UU. emite una directiva que suspende el acceso a Fable 5 y Mythos 5.
- **Encaja en:** Módulo 13 (regulación/geopolítica) y Módulo 10 (disponibilidad/compliance).
- **Nivel propuesto:** **nota / recurso** (situación volátil y política).
- **Propuesta concreta:** **no** fijarlo en el contenido estable todavía; si acaso, una nota de actualidad. Implicación práctica: cautela al recomendar Fable 5 como modelo "disponible". Reevaluar la semana que viene.
- **Confianza:** media (relevante, pero cambiante; mejor esperar a que se estabilice).

#### Claude Code — "dynamic workflows" (research preview)
- **Qué es:** Claude Code planifica y lanza **cientos de subagentes en paralelo** en una sesión, y **verifica** sus salidas antes de reportar; con Opus 4.8 los agentes corren más tiempo (p. ej., migraciones a escala de cientos de miles de líneas).
- **Encaja en:** Módulo 09 (lección 14, orquestación multi-agente) y Módulo 06 (Claude Code).
- **Nivel propuesto:** **actualización** (mencionar dynamic workflows como capacidad real de orquestación a gran escala) **+ recurso**.
- **Propuesta concreta:** añadir un apartado/nota en la lección 09-14 sobre dynamic workflows como ejemplo de orquestación masiva con verificación; marcar que está en *research preview*.
- **Confianza:** alta (fuente: Anthropic engineering).

#### Messages API — entradas `system` dentro del array de mensajes
- **Qué es:** la Messages API admite entradas `system` dentro de `messages`, permitiendo actualizar instrucciones a mitad de tarea **sin romper el prompt cache** ni pasar por un turno de usuario (útil para permisos, presupuesto de tokens, contexto de entorno en agentes).
- **Encaja en:** Módulo 07 (API) — lecciones de mensajes/system y caching.
- **Nivel propuesto:** **actualización**.
- **Propuesta concreta:** añadir esta capacidad a la lección correspondiente del módulo 07 (system messages / prompt caching). **Verificar en docs.claude.com** la sintaxis exacta antes de redactar.
- **Confianza:** alta (fuente: Anthropic).

---

## Sin acción (fuera del ámbito del curso)

- **Claude Corps**, **Project Glasswing**, alianzas con **TCS/DXC**: iniciativas de programa/negocio, no contenido técnico del curso. (A lo sumo, mención anecdótica en Módulo 13 sobre impacto social/económico; baja prioridad.)
- Secciones de los podcasts sobre Gemini/robótica/demandas/modelos chinos: contexto de actualidad, fuera del temario.

---

## Resumen de decisiones para Manolo

| # | Fuente | Propuesta | Nivel | Confianza |
|---|--------|-----------|-------|-----------|
| 1 | Anthropic news | Fable 5 / Mythos 5 → familia de modelos | actualización | alta |
| 2 | Anthropic eng | Dynamic workflows → orquestación (M09/M06) | actualización+recurso | alta |
| 3 | Anthropic API | `system` en `messages` → M07 | actualización | alta |
| 4 | Pocho Costa | "Pensá en sistemas" → M09 | recurso | alta |
| 5 | Pocho Costa | "De ChatGPT a Agentes" → M09 | recurso | alta |
| 6 | Anthropic news | Bloqueo export Fable 5 → esperar | nota | media |
| 7 | Test de Turing | Ep. 159 Kimi K2.7 → M06 | recurso | media |
| 8 | Pocho Costa | "IA privada/local" → M10 | recurso | media |
| 9 | Pocho Costa | Ep. 200 IA agéntica → M09 (solapa con #5) | recurso | media |
| 10 | Pocho Costa | "Claude vs ChatGPT vs Gemini" → M01/M03 | recurso | baja-media |

**Mi recomendación** (no vinculante): aplicar con prioridad **#1, #2, #3** (novedades
oficiales de Anthropic, alto valor y bien fundamentadas) y **#4** como recurso; dejar
**#6** en espera por volatilidad; el resto, opcionales según cuántos recursos quieras enlazar.

---

## ✅ Implementación (2026-06-22)

Dónde se aplicó cada propuesta confirmada:

| Propuesta | Aplicado en |
|-----------|-------------|
| Fable 5 / Mythos 5 (5ª gen) + bloqueo de exportación | M01 L06 (sección 9 nueva + salvedad de disponibilidad) y M01 L07 (nota de 5ª generación); contrastado con anthropic.com/claude/fable |
| Dynamic workflows | M09 L14 (sección 4 nueva) y M06 L01 (recurso) |
| `system` en `messages` | M07 L04 (sección 1b nueva) |
| Pocho "Pensá en sistemas" | M09 L12 (recurso) |
| Pocho "De ChatGPT a Agentes" | M09 L12 (recurso) |
| Kimi K2.7 (Ep. 159) | M06 L01 (recurso) |
| Composer 2.5 (Ep. 156) | M06 L01 (recurso) |
| Opus 4.8 (Ep. 157) | M01 L07 (recurso) |
| Google I/O (Ep. 155) | M01 L05 (recurso) |
| Claude vs ChatGPT vs Gemini | M01 L05 (recurso, con salvedad de caducidad) |
| Fable 5 (Ep. 158) | M01 L06 (recurso) |
| IA privada (Pocho) | M10 L01 (recurso) |
| IA Agéntica Ep. 200 (Pocho) | **Descartada** (solapa con "De ChatGPT a Agentes") |

Contenido sincronizado a la app (Supabase). El estado de cada propuesta queda
también reflejado en el panel de admin (**⚙️ Admin → Novedades**).
