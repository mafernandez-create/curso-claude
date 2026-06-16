---
titulo: "Instalación: Node.js, CLI y autenticación"
modulo: "06-claude-code"
orden: 2
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Instalación: Node.js, CLI y autenticación

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Conocer los **requisitos** para instalar Claude Code.
- [ ] Entender el proceso general de instalación y autenticación.
- [ ] Saber dónde verificar los pasos exactos y actualizados.

> **Nota:** los comandos y requisitos exactos de instalación cambian con las versiones. Esta lección da el **mapa general**; para los pasos precisos y actuales, sigue siempre [docs.claude.com → Claude Code](https://docs.claude.com).

## Prerrequisitos

- Lección 01 del módulo.
- Acceso a una terminal y una cuenta de Claude con plan compatible.

## Contexto

Claude Code es una herramienta de línea de comandos (CLI). Instalarla es rápido, pero conviene entender las piezas: el entorno que necesita, cómo se instala y cómo se autentica con tu cuenta.

## Contenido principal

### 1. Requisitos

- Un **sistema** compatible (macOS, Linux o Windows).
- **Node.js** en una versión reciente (Claude Code se distribuye por el ecosistema de Node).
- Una **cuenta de Claude** con un plan que incluya Claude Code.

### 2. Instalación (idea general)

Se instala como un paquete de línea de comandos y se ejecuta escribiendo `claude` en la terminal, dentro de la carpeta de tu proyecto. La primera vez te guiará por la configuración inicial.

### 3. Autenticación

Al arrancar por primera vez, Claude Code te pide **iniciar sesión** con tu cuenta de Claude (normalmente abriendo el navegador para autorizar). A partir de ahí recuerda la sesión. Para entornos de equipo o empresa, la autenticación puede integrarse con el plan corporativo.

### 4. Comprobar que funciona

Tras instalar y autenticarte, ejecutar `claude` dentro de un proyecto debería abrir una sesión interactiva. Si algo falla, la documentación oficial incluye una guía de diagnóstico.

## Ejercicio práctico

1. Revisa en [docs.claude.com](https://docs.claude.com) los requisitos actuales.
2. Instala Claude Code siguiendo la guía oficial.
3. Autentícate y abre una sesión en una carpeta de prueba.
4. **Criterio de éxito:** `claude` arranca y responde en tu terminal.

## Errores comunes

- **Node.js desactualizado:** una versión vieja puede impedir la instalación.
- **Instalar globalmente sin permisos:** sigue el método recomendado en la doc para tu sistema.

## Resumen en 3 frases

1. Claude Code es una CLI que requiere Node.js y una cuenta de Claude compatible.
2. Se instala como paquete de línea de comandos y se ejecuta con `claude` dentro de tu proyecto.
3. La primera vez te autenticas con tu cuenta; sigue la doc oficial para los pasos exactos y actuales.

## Recursos para profundizar

- [docs.claude.com — instalación de Claude Code](https://docs.claude.com) — consultado 2026-06-14.
- `claude-code-in-action` (catálogo).

## Siguiente lección

➡️ `03-primera-sesion`

## Fuentes

- [docs.claude.com — Claude Code](https://docs.claude.com) — consultado 2026-06-14.
