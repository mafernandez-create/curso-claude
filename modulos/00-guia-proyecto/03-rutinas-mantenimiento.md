---
titulo: "Rutinas de mantenimiento (semanal, mensual, trimestral)"
modulo: "00-guia-proyecto"
orden: 3
creado: 2026-07-22
revisado: 2026-07-22
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 10
---

# Rutinas de mantenimiento (semanal, mensual, trimestral)

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Ejecutar las **tres rutinas** de mantenimiento del curso y saber qué detecta cada una.
- [ ] Reaccionar a un **release mayor** de Claude, que es lo que más contenido invalida de golpe.
- [ ] Distinguir entre contenido **desactualizado** y contenido **incorrecto** — no se tratan igual.
- [ ] Entender por qué la deuda de revisión **se acumula** y qué hacer para que no lo haga.

## Prerrequisitos

- Lecciones 01 y 02 del módulo.

## Contexto

Un curso vivo sin mantenimiento es un curso muerto con fecha de caducidad larga. El contenido no se estropea de golpe: se va desviando. Un precio que cambia, una función que se retira, un modelo nuevo que rompe una API que aquí se explica como vigente.

Estas rutinas existen para que la desviación se detecte pronto, cuando corregirla cuesta minutos. Con esta lección cierras el módulo 00.

## Contenido principal

### 1. Las tres rutinas

**Semanal — novedades.** Pides *"actualiza el curso con lo nuevo"* y la skill escanea las fuentes oficiales de Anthropic. Deja un informe en `changelog/novedades-YYYY-MM-DD.md` con propuestas, **sin aplicar nada**. Diez minutos de lectura por tu parte.

Hay un recordatorio programado que te avisa por correo los lunes. Es un recordatorio, no un agente: alguien tiene que decidir, y ese alguien eres tú.

**Mensual — enlaces.** Recorrer `recursos/enlaces.yaml` comprobando que las URLs siguen vivas. Las páginas de producto se reorganizan a menudo y un enlace roto en un catálogo de recursos es de lo más frustrante de encontrar. *(Nota: el comando `/verificar-enlaces` está documentado en `CLAUDE.md` pero no construido; hoy se pide a mano.)*

**Trimestral — revisión de fondo.** La más incómoda y la que más valor aporta. Recorrer módulos completos preguntando: ¿esto sigue siendo cierto? Lo que haya quedado desfasado se marca `obsoleto` y se reescribe al lado. **No se borra.**

### 2. El disparador extraordinario: un release mayor

Además del calendario, hay un evento que obliga a revisar: **una generación nueva de modelos**. Es lo que más contenido invalida de una vez, porque no añade cosas — **rompe** las que había.

Los módulos afectados suelen ser el **03** (interfaz), **05** (prompting), **06** (Claude Code) y **07** (API). Lo que hay que buscar concretamente:

- Parámetros que ahora devuelven **error** en vez de funcionar.
- Comportamientos que cambian de **valor por defecto** (lo más traicionero: no falla, pero se comporta distinto y te cambia el coste).
- Identificadores de modelo y precios.
- Funciones **retiradas** o con retirada anunciada.

Un caso real de este curso: al llegar Sonnet 5, tres cosas que se enseñaban como válidas pasaron a devolver error 400, el razonamiento adaptativo pasó a estar activado por defecto y el tokenizador cambió lo suficiente como para invalidar las comparaciones de precio por token. Nada de eso se detecta leyendo el curso: solo comparándolo con la documentación.

### 3. Desactualizado ≠ incorrecto

Distinción práctica que cambia la urgencia:

**Desactualizado** — era cierto y ha dejado de serlo: un precio antiguo, un modelo superado, una función renombrada. Se corrige en la revisión que toque.

**Incorrecto** — nunca fue cierto, o dice algo que induce a error: un dato mal copiado, una comparación inválida, una afirmación más fuerte de lo que la fuente sostiene. **Se corrige en cuanto se detecta**, sin esperar al trimestre.

Los segundos son más raros y más dañinos, porque no se detectan comparando fechas: solo verificando contra la fuente. Y aparecen a menudo **al actualizar**: escribiendo una corrección es fácil sobreafirmar o perder un matiz de la fuente.

De ahí la regla que rige aquí: **verificar la fuente no es verificar lo que has escrito**. Son dos revisiones distintas, y la segunda —releer lo redactado contra la fuente, buscando lo que se ha deformado— es la que se salta todo el mundo.

### 4. La deuda de revisión

Las propuestas de la rutina semanal se acumulan si nadie las confirma. Dos informes sin decidir son gestionables; cinco significan que el curso lleva más de un mes desviándose de la realidad.

Dos hábitos que lo evitan:

- **Cerrar cada informe antes de generar el siguiente.** Aunque cerrarlo sea "descartado, no aplica". Un informe decidido deja de ocupar espacio mental.
- **Marcar el estado en el propio informe.** `PENDIENTE`, `PARCIALMENTE IMPLEMENTADO`, `IMPLEMENTADO`, con la fecha y dónde se aplicó cada punto. Así la siguiente ejecución no vuelve a proponer lo mismo.

Señal de alarma: si tienes tres informes en `PENDIENTE`, no generes un cuarto. Cierra los que hay.

### 5. Qué NO es mantenimiento

Para acotar el alcance y que la rutina no se convierta en un proyecto:

- **No es reescribir por gusto.** Si el contenido sigue siendo cierto y útil, se deja.
- **No es añadir todo lo que sale.** Anthropic publica constantemente y la mayoría no aporta al temario. Filtrar es parte del trabajo.
- **No es borrar lo viejo.** Se marca `obsoleto` y se conserva; el histórico explica por qué las cosas son como son.
- **No es perseguir la última novedad.** Un curso que se reescribe cada semana no se puede estudiar.

## Ejemplo aplicado

Lunes. Llega el recordatorio.

1. Pides *"actualiza el curso con lo nuevo"*. La skill deja un informe: seis novedades, dos relevantes.
2. Lo lees. Una es un producto que no está disponible en tu país; la otra retira una función dentro de un mes.
3. **Decides.** La primera entra como referencia, no como herramienta. La segunda hay que comprobarla ya: buscas la función en todos los módulos.
4. Resulta que el curso **no la menciona en ninguna parte**. Fin: no hay nada que hacer. Lo anotas en el changelog para no repetir la búsqueda dentro de tres semanas.
5. Marcas el informe como resuelto, indicando dónde se aplicó lo que se aplicó.

Tiempo total: media hora. Y el resultado más frecuente de una rutina de mantenimiento sana es exactamente ese: **comprobar que casi nada hay que tocar**. Si cada semana hay que reescribir medio curso, el problema no es el mantenimiento.

## Ejercicio práctico

1. Abre `changelog/` y mira los informes `novedades-*.md`. ¿Cuántos siguen en `PENDIENTE`?
2. Coge el más antiguo sin cerrar y decide **una** de sus propuestas: aplicar, descartar o aplazar con motivo.
3. Anota la decisión en el propio informe, con fecha.
4. Abre una lección cualquiera de los módulos 05, 06 o 07 y mira su campo `revisado`. ¿Cuánto hace? ¿Ha salido algún modelo nuevo desde entonces?

**Criterio de éxito:** has cerrado al menos una propuesta pendiente y sabes cuántos informes te quedan abiertos. Si eran cero, comprueba la fecha del último informe: quizá lo que falta no son decisiones sino ejecutar la rutina.

## Errores comunes

- **Ejecutar la rutina y no leer el informe.** Generarlo no es mantenerlo. La decisión es la parte que no se automatiza.
- **Aplicar propuestas sin verificar.** El informe propone; los datos concretos se contrastan antes de escribirlos en una lección.
- **Corregir sin releer lo corregido contra la fuente.** Es donde se introducen los errores nuevos.
- **Dejar `revisado` sin tocar al editar.** Si cambias contenido, actualiza la fecha o el siguiente lector no sabrá qué está mirando.
- **Borrar en vez de marcar `obsoleto`.** Se pierde el histórico y con él el motivo del cambio.
- **Convertir el mantenimiento en reescritura continua.** Un curso que cambia cada semana es inestudiable.

## Resumen en 3 frases

1. Tres rutinas sostienen el curso: **semanal** (novedades, que propone sin aplicar), **mensual** (enlaces) y **trimestral** (revisión de fondo, marcando `obsoleto` sin borrar).
2. Un **release mayor** de Claude es el disparador extraordinario: obliga a revisar los módulos 03, 05, 06 y 07 buscando parámetros que ahora fallan, valores por defecto que han cambiado, IDs y precios.
3. Lo **desactualizado** espera a su revisión, lo **incorrecto** se corrige ya; y como los errores nuevos se cuelan justo al corregir, verificar la fuente no basta: hay que releer lo escrito contra ella.

## Recursos para profundizar

- `CLAUDE.md`, sección "Mantenimiento recomendado".
- `.claude/skills/actualizar-recursos/SKILL.md` — el procedimiento completo de la rutina semanal.
- `changelog/CHANGELOG.md` — el histórico: qué se cambió, cuándo y por qué.
- [Módulo 12, lección 10](../12-formacion-docencia/10-mantener-formacion-actualizada.md) — el mismo problema aplicado a materiales de formación.

## Siguiente lección

➡️ Has terminado el Módulo 00. Continúa con el [Módulo 01 — Fundamentos de IA y LLMs](../01-fundamentos-ia/README.md).

## Fuentes

- `CLAUDE.md` del propio proyecto, sección de mantenimiento — consultado 2026-07-22.
- [Anthropic — Release notes de la plataforma](https://platform.claude.com/docs/en/release-notes/api) — la fuente que vigila la rutina semanal — consultado 2026-07-22.
