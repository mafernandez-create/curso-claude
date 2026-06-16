---
titulo: "Claude Code con GitHub: PRs, Actions y revisiones"
modulo: "06-claude-code"
orden: 10
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 40
---

# Claude Code con GitHub: PRs, Actions y revisiones

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Usar Claude Code para trabajar con **GitHub**: ramas, commits y pull requests.
- [ ] Conocer la idea de integrarlo en **CI/automatizaciones** (revisiones automáticas).
- [ ] Mantener el control humano sobre lo que se publica.

## Prerrequisitos

- Lección 05 (permisos) y nociones de Git/GitHub.

## Contexto

GitHub es donde vive y se revisa el código en equipo. Claude Code puede encargarse del trabajo mecánico de Git (crear ramas, redactar commits, abrir PRs) e incluso participar en la **revisión** de cambios, dejándote a ti las decisiones.

## Contenido principal

### 1. Flujo de trabajo con Git

Claude Code puede, con tu permiso: crear una **rama**, hacer **commits** con mensajes claros, y **abrir un Pull Request** con su descripción. Tú revisas el PR como revisarías el de un compañero. Las acciones que publican (push, abrir PR) se confirman, no se hacen a escondidas.

### 2. Revisión de código

Puedes pedirle que **revise un diff o un PR** buscando bugs, casos límite o problemas de seguridad, y que liste los hallazgos. Es un segundo par de ojos rápido — útil **antes** de pedir revisión humana, no en su lugar.

### 3. Automatización en CI (idea general)

Claude Code puede integrarse en flujos de **integración continua** (por ejemplo, revisar automáticamente cada PR y dejar comentarios). Es potente para equipos, pero exige configurarlo con cuidado y mantener la **decisión final en personas**. Consulta la doc para las formas de integración vigentes.

### 4. El control sigue siendo humano

Por muy autónomo que sea, **fusionar (merge) y publicar** son decisiones tuyas o del equipo. La IA prepara y propone; las personas aprueban.

## Ejemplo aplicado

```
Crea una rama "fix-validacion", aplica el cambio que acordamos,
haz commit con un mensaje claro y abre un PR describiendo qué
soluciona. No lo fusiones; lo revisamos antes.
```

## Ejercicio práctico

1. En un repo de prueba, pide a Claude Code que cree una rama, haga un cambio pequeño y abra un PR.
2. Revisa el PR como si fuera de otra persona.
3. **Criterio de éxito:** obtienes un PR bien descrito que tú decides si fusionar.

## Errores comunes

- **Dejar que fusione sin revisión:** el merge es decisión humana.
- **Confiar solo en la revisión de la IA:** complementa la humana, no la sustituye.

## Resumen en 3 frases

1. Claude Code maneja el trabajo de Git (ramas, commits, PRs) con tu confirmación para lo que publica.
2. Puede revisar diffs y PRs como segundo par de ojos antes de la revisión humana.
3. Fusionar y publicar siguen siendo decisiones de las personas.

## Recursos para profundizar

- [docs.claude.com — Claude Code y GitHub](https://docs.claude.com) — consultado 2026-06-14.
- Lección 11 del módulo — higiene de Git con IA.

## Siguiente lección

➡️ `11-higiene-git`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
