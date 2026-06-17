---
titulo: "Instalar y probar un servidor MCP existente"
modulo: "08-mcp"
orden: 4
creado: 2026-06-14
revisado: 2026-06-14
modelo_referencia: "Claude Opus 4.8"
estado: borrador
tiempo_estudio_min: 30
---

# Instalar y probar un servidor MCP existente

## Objetivos de aprendizaje

Al terminar esta lección serás capaz de:

- [ ] Conectar un **servidor MCP ya hecho** a un cliente (Claude Desktop o Claude Code).
- [ ] Comprobar que sus capacidades aparecen disponibles.
- [ ] Hacerlo con criterio de seguridad.

> **Nota:** los pasos exactos de configuración cambian con las versiones de los clientes; sigue [docs.claude.com](https://docs.claude.com) y la documentación del servidor que uses.

## Prerrequisitos

- Lección 03 del módulo.

## Contexto

Antes de construir un servidor, conviene **usar uno**. Hay muchos servidores MCP ya hechos (sistema de archivos, GitHub, bases de datos…). Conectarlos te muestra el protocolo en acción.

## Contenido principal

### 1. Elegir un servidor

Empieza por uno sencillo y de confianza (por ejemplo, uno de acceso a archivos o a una API que ya uses). La lección 14 trata cómo explorar el ecosistema.

### 2. Configurarlo en el cliente

Los clientes MCP (Claude Desktop, Claude Code) tienen un sitio donde **declaras los servidores** que quieres conectar: cómo se lanzan (comando, transport) y, si hace falta, sus credenciales. Tras configurarlo y reiniciar el cliente, sus herramientas y recursos quedan disponibles.

### 3. Comprobar que funciona

Pide algo que use ese servidor ("lista los archivos de esta carpeta", "busca este issue en GitHub"). Si el cliente usa la herramienta del servidor, está conectado.

### 4. Seguridad al conectar

Un servidor MCP recibe acceso a lo que expone (tus archivos, una API con tu token). **Conecta solo servidores de confianza**, concede los permisos mínimos y revisa qué credenciales le das. Un servidor malicioso podría hacer mal uso de ese acceso (lección 12).

## Ejemplo aplicado

Conectas un servidor MCP de sistema de archivos limitado a una carpeta de pruebas. Luego pides "resume los .txt de esta carpeta" y ves que el cliente usa la herramienta del servidor para leerlos.

## Ejercicio práctico

1. Conecta un servidor MCP sencillo a tu cliente (Desktop o Code).
2. Lanza una petición que lo use y confirma que funciona.
3. **Criterio de éxito:** una capacidad del servidor aparece y se usa desde el cliente.

## Errores comunes

- **Conectar servidores no fiables:** ojo con el acceso que concedes.
- **Dar credenciales amplias:** mínimo privilegio.

## Resumen en 3 frases

1. Antes de construir, conecta un servidor MCP existente a tu cliente para ver el protocolo en acción.
2. Se declara en la configuración del cliente (cómo se lanza y sus credenciales) y sus capacidades quedan disponibles.
3. Conecta solo servidores de confianza y con permisos mínimos.

## Recursos para profundizar

- `awesome-mcp-servers` (catálogo) — lista de la comunidad.
- [docs.claude.com — conectar servidores MCP](https://docs.claude.com) — consultado 2026-06-14.

## Siguiente lección

➡️ `05-primer-servidor-python`

## Fuentes

- [docs.claude.com — MCP](https://docs.claude.com) — consultado 2026-06-14.
