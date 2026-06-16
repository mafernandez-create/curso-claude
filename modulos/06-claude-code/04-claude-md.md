---
titulo: "El archivo CLAUDE.md: instrucciones persistentes"
modulo: "06-claude-code"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 40
---

# El archivo CLAUDE.md: instrucciones persistentes

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Explicar qué es `CLAUDE.md` y por qué es la pieza de configuración más importante.
- [ ] Escribir un `CLAUDE.md` útil para un proyecto.
- [ ] Evitar el error de sobrecargarlo.

## Prerrequisitos

- Lección 03 del módulo.

## Contexto

Si tuvieras que enseñarle tu proyecto a un compañero nuevo, le darías unas pautas: cómo se ejecuta, qué convenciones seguís, qué no tocar. `CLAUDE.md` es exactamente eso, pero para Claude Code: **un archivo de instrucciones que lee al empezar cada sesión**. Es el equivalente al *system prompt* (Módulo 05, L03), pero para tu proyecto.

## Contenido principal

### 1. Qué es y dónde vive

`CLAUDE.md` es un archivo de texto (Markdown) en la raíz de tu proyecto. Claude Code lo lee automáticamente y trata su contenido como **instrucciones permanentes** para ese proyecto. Este mismo curso tiene su `CLAUDE.md` (lo has visto referenciado).

### 2. Qué poner

- **Cómo ejecutar** el proyecto (comandos de build, test, arranque).
- **Convenciones** de código y estilo que seguís.
- **Estructura** del repositorio (dónde está cada cosa).
- **Reglas** y restricciones ("no toques la carpeta X", "usa español en los comentarios").
- **Flujos** habituales ("cuando te pida X, haz Y").

### 3. Qué NO poner

- Información que cambia a diario (irá desfasada).
- Secretos o credenciales (¡nunca!).
- Un volcado enorme: cuanto más largo, más se diluyen las instrucciones clave. **Conciso y específico** gana.

### 4. Es un documento vivo

Cuando notes que repites una instrucción a Claude Code, **muévela al `CLAUDE.md`**. Así dejas de repetirte y el comportamiento se vuelve consistente.

## Ejemplo aplicado

Un `CLAUDE.md` mínimo y útil:
```markdown
# Proyecto: tienda-web

## Cómo ejecutar
- `npm run dev` para desarrollo, `npm test` para pruebas.

## Convenciones
- TypeScript, comillas dobles, comentarios en español.
- Componentes en `src/components/`. No edites `src/generated/`.

## Flujo
- Antes de dar algo por hecho, ejecuta `npm test`.
```

## Ejercicio práctico

1. Crea un `CLAUDE.md` para un proyecto tuyo con: cómo ejecutarlo, 3 convenciones y 1 regla.
2. Inicia una sesión y comprueba que Claude Code respeta esas pautas.
3. **Criterio de éxito:** no tienes que repetir esas instrucciones; Claude ya las aplica.

## Errores comunes

- **Sobrecargarlo:** un `CLAUDE.md` de 10 páginas diluye lo importante.
- **Dejarlo desfasado:** si cambian las convenciones, actualízalo.

## Resumen en 3 frases

1. `CLAUDE.md` es un archivo de instrucciones persistentes que Claude Code lee en cada sesión de ese proyecto.
2. Incluye cómo ejecutar, convenciones, estructura y reglas; nada de secretos ni datos volátiles.
3. Mantenlo conciso y vivo: lo que repitas a menudo, muévelo ahí.

## Recursos para profundizar

- [docs.claude.com — memoria y CLAUDE.md](https://docs.claude.com) — consultado 2026-06-14.
- El propio `CLAUDE.md` de este curso, como ejemplo real.

## Siguiente lección

➡️ `05-permisos-edicion`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
