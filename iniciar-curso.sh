#!/usr/bin/env bash
# iniciar-curso.sh — Arranca el curso en local (MkDocs Material) y abre el navegador.
#
# Uso:
#   ./iniciar-curso.sh
#
# Qué hace:
#   1. Comprueba que MkDocs esté instalado; si no, instala requirements.txt.
#   2. Arranca el servidor de desarrollo en http://127.0.0.1:8000/.
#   3. Abre tu navegador en cuanto el servidor responde.
#   4. Pulsa Ctrl+C para detenerlo.

set -e

cd "$(dirname "$0")"

URL="http://127.0.0.1:8000/"

# 1) Dependencias
if ! python3 -m mkdocs --version >/dev/null 2>&1; then
  echo "→ MkDocs no está instalado. Instalando dependencias…"
  pip3 install --user -r requirements.txt
  echo ""
fi

# 2) Aviso si el puerto 8000 ya está ocupado
if lsof -iTCP:8000 -sTCP:LISTEN -n -P >/dev/null 2>&1; then
  echo "⚠️  El puerto 8000 ya está ocupado. ¿Tienes otro 'mkdocs serve' corriendo?"
  echo "    Ciérralo (Ctrl+C en su terminal) y vuelve a lanzar este script."
  exit 1
fi

# 3) Abre el navegador en cuanto el servidor responde (en segundo plano)
(
  for _ in $(seq 1 60); do
    sleep 0.5
    if curl -s -o /dev/null --max-time 1 "$URL"; then
      open "$URL"
      exit 0
    fi
  done
) &

echo "→ Arrancando MkDocs en $URL"
echo "→ Pulsa Ctrl+C para detener el servidor."
echo ""

# 4) Servidor en primer plano (Ctrl+C lo cierra limpiamente)
exec python3 -m mkdocs serve
