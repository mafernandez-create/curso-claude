#!/usr/bin/env python3
"""
enviar-digest.py — Envía por correo el informe de novedades del curso.

Toma un fichero `changelog/novedades-YYYY-MM-DD.md` y manda su contenido como
digest al buzón de Manolo. Reutiliza el mismo patrón y nombres de variables que
`Trabajo_GPF/posicionamiento/reporting.py` para mantener coherencia de ecosistema.

Comportamiento (degradación elegante, nunca revienta la rutina):
  - Si SMTP está configurado  → envía el correo.
  - Si NO está configurado    → avisa por stdout y termina con éxito (exit 0),
    sin enviar nada. Así la skill/rutina no falla por no tener credenciales.

Variables de entorno (en un `.env` en la raíz del repo; NUNCA en git):
  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD   → servidor de salida
  DIGEST_FROM   → remitente (por defecto = SMTP_USER)
  DIGEST_TO     → destinatario del digest (tu correo)

Uso:
  python3 scripts/enviar-digest.py changelog/novedades-2026-07-03.md
  python3 scripts/enviar-digest.py --dry-run changelog/novedades-2026-07-03.md
"""
from __future__ import annotations

import os
import smtplib
import sys
from email.message import EmailMessage
from pathlib import Path


def _load_dotenv(root: Path) -> None:
    """Carga un .env sencillo (KEY=VALUE por línea) sin dependencias externas."""
    env_path = root / ".env"
    if not env_path.exists():
        return
    for raw in env_path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, val = line.split("=", 1)
        key, val = key.strip(), val.strip().strip('"').strip("'")
        os.environ.setdefault(key, val)


def _subject_from(md_path: Path, body: str) -> str:
    """Usa el primer '# ' del markdown como asunto; si no, el nombre del fichero."""
    for line in body.splitlines():
        if line.startswith("# "):
            return f"[Curso Claude] {line[2:].strip()}"
    return f"[Curso Claude] Novedades — {md_path.stem}"


def _send_email(subject: str, body: str, cfg: dict) -> None:
    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = cfg["from"]
    msg["To"] = cfg["to"]
    msg.set_content(body)
    with smtplib.SMTP(cfg["host"], cfg["port"], timeout=30) as s:
        s.starttls()
        s.login(cfg["user"], cfg["password"])
        s.send_message(msg)


def main(argv: list[str]) -> int:
    args = [a for a in argv if a != "--dry-run"]
    dry_run = "--dry-run" in argv
    if len(args) != 1:
        print("Uso: python3 scripts/enviar-digest.py [--dry-run] <ruta-al-novedades.md>",
              file=sys.stderr)
        return 2

    md_path = Path(args[0]).expanduser()
    if not md_path.is_file():
        print(f"✗ No existe el fichero: {md_path}", file=sys.stderr)
        return 1

    # El .env vive en la raíz del repo (dos niveles por encima de scripts/).
    repo_root = Path(__file__).resolve().parent.parent
    _load_dotenv(repo_root)

    body = md_path.read_text(encoding="utf-8")
    subject = _subject_from(md_path, body)

    cfg = {
        "host": os.environ.get("SMTP_HOST", ""),
        "port": int(os.environ.get("SMTP_PORT", "587") or "587"),
        "user": os.environ.get("SMTP_USER", ""),
        "password": os.environ.get("SMTP_PASSWORD", ""),
        "from": os.environ.get("DIGEST_FROM") or os.environ.get("SMTP_USER", ""),
        "to": os.environ.get("DIGEST_TO", ""),
    }
    configured = all([cfg["host"], cfg["user"], cfg["password"], cfg["to"]])

    if dry_run:
        print(f"[dry-run] Asunto: {subject}")
        print(f"[dry-run] Para:   {cfg['to'] or '<DIGEST_TO no configurado>'}")
        print(f"[dry-run] SMTP configurado: {'sí' if configured else 'no'}")
        return 0

    if not configured:
        print("  [digest] SMTP/DIGEST_TO no configurados: no se envía correo.")
        print("  [digest] Rellena SMTP_* y DIGEST_TO en el .env de la raíz para recibirlo.")
        return 0  # No es un error: degradación elegante.

    try:
        _send_email(subject, body, cfg)
        print(f"  [digest] enviado por correo a {cfg['to']}")
        return 0
    except Exception as e:  # noqa: BLE001 — queremos no romper la rutina
        print(f"  [digest] fallo SMTP ({e}). Revisa credenciales/servidor.", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
