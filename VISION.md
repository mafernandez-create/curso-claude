# VISION.md — curso-claude

> Se relee en cada run para no derivar. STATE.md dice dónde estás; esto, a dónde vas.

## Objetivo a 1 frase

Un curso personal sobre Claude —vivo, verificable y en español— que se mantiene al día con Anthropic sin degradarse, y del que Manolo pueda aprender y, más adelante, enseñar.

## Por qué importa

Claude cambia cada pocas semanas: modelos nuevos, funciones que se retiran, precios que se mueven. Un curso cerrado quedaría obsoleto antes de terminarlo. El valor no está en "tener el contenido" sino en tener un **sistema que lo mantiene cierto** con el mínimo esfuerzo humano y sin perder rigor. Además es el banco de pruebas donde Manolo practica el trabajo con agentes que luego aplica a los proyectos de GPF.

## Principios que no se negocian

- **Honestidad epistémica.** Toda afirmación técnica lleva fuente y fecha. Lo no verificado se marca como tal. No se inventan features, benchmarks ni versiones.
- **Quien genera no se aprueba a sí mismo.** Todo dato que se publica pasa por `verificador-resultados` — y verificar la fuente no es verificar lo escrito: se revisa también el texto redactado contra la fuente.
- **Separar generación de aprobación.** Las skills y agentes proponen; el visto bueno sobre el contenido del curso lo da Manolo.
- **Los datos volátiles se remiten a la fuente oficial**, no se copian (un precio caduca; un enlace a la página de precios no).
- **Lo obsoleto no se borra:** se marca `obsoleto` y se conserva; se escribe la versión nueva al lado.
- **Español neutro**, términos técnicos en inglés cuando son estándar; una idea por bloque, lecciones cortas.

## En alcance / Fuera de alcance

**Dentro:** contenido pedagógico (módulos 00–13), catálogo de recursos, rutinas de actualización y verificación, el aspecto MkDocs del Kit de Estilo, y el andamiaje de agentes que sostiene todo lo anterior.

**Fuera:** convertirlo en producto comercial cerrado; perseguir cada novedad de Anthropic sin filtrar; reescribir por gusto lo que sigue siendo cierto; y —por ahora— la variante Next.js (`curso-claude-app`), pendiente de decidir si se consolida.

## Definición de "hecho"

- **Una lección:** sigue la plantilla, tiene fuentes con fecha, pasa verificación, enlaces internos sin romper, y su entrada en el changelog.
- **Una actualización de novedades:** informe en `changelog/novedades-YYYY-MM-DD.md`, verificado, con el visto bueno de Manolo antes de tocar el contenido.
- **El curso, hoy:** las 161 lecciones redactadas (borrador). "Revisado" es el siguiente estadio, lección a lección, según Manolo las estudia.

## Restricciones permanentes

- La BD del curso comparte instancia Supabase con otro proyecto: **nunca** `prisma db push --accept-data-loss`. Ver `[[supabase-compartida-curso]]`.
- Los `.env` (credenciales SMTP del digest) nunca a git.
- Nada de `claude --dangerously-skip-permissions` en la automatización: humano en el gate para lo irreversible.
- El curso es de público general: buenas prácticas de accesibilidad (cuerpo ≥16px, contraste AA, el color nunca como única señal).
