#!/usr/bin/env bash
#
# recordatorio-novedades.sh — aviso semanal (lo lanza launchd los lunes 09:00).
#
# NO ejecuta Claude ni nada autónomo: solo envía por correo un recordatorio para
# que Manolo lance a mano la skill `actualizar-recursos` en Claude Code. Reutiliza
# el enviador SMTP del proyecto (scripts/enviar-digest.py + .env).
#
set -euo pipefail

# Raíz del repo deducida de la ubicación de este script (scripts/ → raíz), para
# que funcione esté donde esté el repo (evita rutas hardcodeadas; sobrevive a mover
# o renombrar la carpeta del proyecto).
REPO="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$HOME/Library/Logs/curso-claude-recordatorio.log"

# launchd arranca con un PATH mínimo; basta con los binarios de sistema.
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"

mkdir -p "$(dirname "$LOG")"
{
  printf '%s  ' "$(date '+%Y-%m-%d %H:%M:%S')"
  /usr/bin/python3 "$REPO/scripts/enviar-digest.py" "$REPO/scripts/recordatorio-novedades.md"
} >> "$LOG" 2>&1
