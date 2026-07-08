#!/usr/bin/env bash
#
# recordatorio-novedades.sh — aviso semanal (lo lanza launchd los lunes 09:00).
#
# NO ejecuta Claude ni nada autónomo: solo envía por correo un recordatorio para
# que Manolo lance a mano la skill `actualizar-recursos` en Claude Code. Reutiliza
# el enviador SMTP del proyecto (scripts/enviar-digest.py + .env).
#
set -euo pipefail

REPO="/Users/ma.fernandez/Documents/02_Proyectos_Claude/Personal/curso-claude"
LOG="$HOME/Library/Logs/curso-claude-recordatorio.log"

# launchd arranca con un PATH mínimo; basta con los binarios de sistema.
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"

mkdir -p "$(dirname "$LOG")"
{
  printf '%s  ' "$(date '+%Y-%m-%d %H:%M:%S')"
  /usr/bin/python3 "$REPO/scripts/enviar-digest.py" "$REPO/scripts/recordatorio-novedades.md"
} >> "$LOG" 2>&1
