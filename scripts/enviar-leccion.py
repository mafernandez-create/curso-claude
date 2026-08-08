#!/usr/bin/env python3
"""
enviar-leccion.py — Envía UNA lección del curso por correo, maquetada para leer en móvil.

Pensado para dos usos:
  1. A mano, desde el Mac:      python3 scripts/enviar-leccion.py --indice 0
  2. Desde una rutina cloud:    python3 scripts/enviar-leccion.py --desde 2026-08-09 --cada 2

En el modo "--desde/--cada" la lección se elige de forma DETERMINISTA por fecha:
no hay estado que guardar. indice = dias_transcurridos / cada. Si hoy no toca
(el resto no es cero), no envía nada y termina con éxito.

Orden de las lecciones: el natural del repo (modulos/NN-*/NN-*.md ordenado),
que coincide con el orden pedagógico del curso.

Envío vía Resend (https://resend.com). Variables de entorno:
  RESEND_KEY   → API key (obligatoria para enviar)
  MAIL_TO      → destinatario
  MAIL_FROM    → remitente (por defecto: Curso Claude <onboarding@resend.dev>)

Sin RESEND_KEY o MAIL_TO no envía: avisa y sale con éxito (no rompe la rutina).
"""
from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import os
import re
import subprocess
import sys
from pathlib import Path

# Colores del Kit de Estilo del curso (assets/extra.css)
BRAND = "#003366"
ACCENT = "#E67E22"


def raiz_repo() -> Path:
    return Path(__file__).resolve().parent.parent


def cargar_dotenv(raiz: Path) -> None:
    """Carga el .env de la raíz (KEY=VALUE por línea). Mismo patrón que enviar-digest.py."""
    env = raiz / ".env"
    if not env.exists():
        return
    for cruda in env.read_text(encoding="utf-8").splitlines():
        linea = cruda.strip()
        if not linea or linea.startswith("#") or "=" not in linea:
            continue
        k, v = linea.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def listar_lecciones(raiz: Path) -> list[Path]:
    """Todas las lecciones en orden pedagógico (excluye los README de módulo)."""
    mods = raiz / "modulos"
    return sorted(p for p in mods.glob("*/*.md") if p.name != "README.md")


def partir_frontmatter(texto: str) -> tuple[dict, str]:
    """Separa el frontmatter YAML del cuerpo. Parseo mínimo, sin dependencias."""
    meta: dict[str, str] = {}
    cuerpo = texto
    if texto.startswith("---"):
        fin = texto.find("\n---", 3)
        if fin != -1:
            bloque = texto[3:fin]
            cuerpo = texto[fin + 4 :].lstrip("\n")
            for linea in bloque.splitlines():
                if ":" in linea:
                    k, v = linea.split(":", 1)
                    meta[k.strip()] = v.strip().strip('"').strip("'")
    return meta, cuerpo


def md_a_html(md: str) -> str:
    """Markdown → HTML. Usa la librería `markdown` si está; si no, un fallback propio."""
    try:
        import markdown  # type: ignore

        return markdown.markdown(
            md, extensions=["tables", "fenced_code", "sane_lists", "nl2br"]
        )
    except ImportError:
        return _md_basico(md)


def _md_basico(md: str) -> str:
    """Conversor de respaldo: cubre lo que usan las lecciones del curso."""
    out: list[str] = []
    en_code = False
    en_lista = False
    en_tabla = False

    def cerrar_bloques() -> None:
        nonlocal en_lista, en_tabla
        if en_lista:
            out.append("</ul>")
            en_lista = False
        if en_tabla:
            out.append("</tbody></table></div>")
            en_tabla = False

    for linea in md.split("\n"):
        if linea.startswith("```"):
            cerrar_bloques()
            out.append("</pre>" if en_code else "<pre>")
            en_code = not en_code
            continue
        if en_code:
            out.append(html.escape(linea))
            continue

        # Tablas
        if linea.strip().startswith("|") and linea.strip().endswith("|"):
            celdas = [c.strip() for c in linea.strip().strip("|").split("|")]
            if all(re.fullmatch(r":?-{2,}:?", c) for c in celdas if c):
                continue  # separador de cabecera
            if not en_tabla:
                cerrar_bloques()
                out.append('<div class="tw"><table><tbody>')
                en_tabla = True
            fila = "".join(f"<td>{_inline(c)}</td>" for c in celdas)
            out.append(f"<tr>{fila}</tr>")
            continue

        # Títulos
        m = re.match(r"^(#{1,4})\s+(.*)", linea)
        if m:
            cerrar_bloques()
            n = len(m.group(1))
            out.append(f"<h{n}>{_inline(m.group(2))}</h{n}>")
            continue

        # Citas
        if linea.startswith(">"):
            cerrar_bloques()
            out.append(f"<blockquote>{_inline(linea.lstrip('> ').strip())}</blockquote>")
            continue

        # Listas
        m = re.match(r"^\s*[-*]\s+(.*)", linea) or re.match(r"^\s*\d+\.\s+(.*)", linea)
        if m:
            if not en_lista:
                cerrar_bloques()
                out.append("<ul>")
                en_lista = True
            out.append(f"<li>{_inline(m.group(1))}</li>")
            continue

        if not linea.strip():
            cerrar_bloques()
            continue

        cerrar_bloques()
        out.append(f"<p>{_inline(linea)}</p>")

    if en_code:
        out.append("</pre>")
    cerrar_bloques()
    return "\n".join(out)


def _inline(t: str) -> str:
    """Negrita, cursiva, código y enlaces dentro de una línea."""
    t = html.escape(t)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', t)
    return t


def envolver(titulo: str, cuerpo_html: str, pie: str) -> str:
    """HTML autocontenido y legible en la app de correo del iPhone."""
    return f"""<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(titulo)}</title>
<style>
  body {{ margin:0; padding:0; background:#F8FAFC;
         font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,sans-serif; }}
  .wrap {{ max-width:680px; margin:0 auto; background:#fff; padding:22px 20px 32px; }}
  h1 {{ color:{BRAND}; font-size:25px; line-height:1.25; margin:6px 0 18px; }}
  h2 {{ color:{BRAND}; font-size:20px; line-height:1.3; margin:30px 0 10px;
        border-bottom:2px solid #e8eef5; padding-bottom:6px; }}
  h3 {{ color:{BRAND}; font-size:17px; margin:22px 0 8px; }}
  h4 {{ color:#334; font-size:16px; margin:18px 0 6px; }}
  p, li {{ font-size:17px; line-height:1.65; color:#1a1a1a; }}
  ul {{ padding-left:22px; }}
  li {{ margin:5px 0; }}
  a {{ color:#1a56db; }}
  code {{ background:#f1f5f9; padding:2px 5px; border-radius:4px;
          font-size:15px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; }}
  pre {{ background:#0f172a; color:#e2e8f0; padding:14px; border-radius:8px;
         overflow-x:auto; font-size:14px; line-height:1.5;
         font-family:ui-monospace,SFMono-Regular,Menlo,monospace; }}
  pre code {{ background:none; color:inherit; padding:0; }}
  blockquote {{ margin:16px 0; padding:12px 16px; background:#fff8f0;
                border-left:4px solid {ACCENT}; border-radius:0 8px 8px 0;
                font-size:16px; line-height:1.6; }}
  .tw {{ overflow-x:auto; -webkit-overflow-scrolling:touch; margin:16px 0; }}
  table {{ border-collapse:collapse; width:100%; font-size:15px; }}
  td {{ border:1px solid #e2e8f0; padding:8px 10px; text-align:left; vertical-align:top; }}
  tr:first-child td {{ background:{BRAND}; color:#fff; font-weight:600; }}
  .cab {{ font-size:13px; color:#64748b; text-transform:uppercase;
          letter-spacing:.5px; margin:0; }}
  .pie {{ margin-top:34px; padding-top:14px; border-top:1px solid #e2e8f0;
          font-size:13px; color:#64748b; line-height:1.5; }}
</style></head>
<body><div class="wrap">
<p class="cab">Mi Curso de Claude</p>
{cuerpo_html}
<div class="pie">{pie}</div>
</div></body></html>"""


def enviar_smtp(asunto: str, html_doc: str) -> int:
    """Envía por SMTP con las credenciales del .env (las mismas del digest de novedades)."""
    import smtplib
    from email.message import EmailMessage

    host = os.environ.get("SMTP_HOST", "")
    user = os.environ.get("SMTP_USER", "")
    pwd = os.environ.get("SMTP_PASSWORD", "")
    to = os.environ.get("MAIL_TO") or os.environ.get("DIGEST_TO", "")
    frm = os.environ.get("MAIL_FROM") or os.environ.get("DIGEST_FROM") or user
    port = int(os.environ.get("SMTP_PORT", "587") or "587")
    if not all([host, user, pwd, to]):
        return -1  # no configurado

    msg = EmailMessage()
    msg["Subject"] = asunto
    msg["From"] = frm
    msg["To"] = to
    msg.set_content("Esta lección se ve mejor en un cliente que soporte HTML.")
    msg.add_alternative(html_doc, subtype="html")
    try:
        with smtplib.SMTP(host, port, timeout=30) as s:
            s.starttls()
            s.login(user, pwd)
            s.send_message(msg)
        print(f"  [leccion] enviada por SMTP a {to}")
        return 0
    except Exception as e:  # noqa: BLE001
        print(f"  [leccion] fallo SMTP ({e})", file=sys.stderr)
        return 1


def enviar(asunto: str, html_doc: str, cfg: dict) -> int:
    payload = json.dumps(
        {
            "from": cfg["from"],
            "to": [cfg["to"]],
            "subject": asunto,
            "html": html_doc,
        }
    )
    r = subprocess.run(
        [
            "curl", "-sS", "-w", "\n%{http_code}",
            "-X", "POST", "https://api.resend.com/emails",
            "-H", f"Authorization: Bearer {cfg['key']}",
            "-H", "Content-Type: application/json",
            "-d", payload,
        ],
        capture_output=True,
        text=True,
    )
    salida = (r.stdout or "").strip().splitlines()
    codigo = salida[-1] if salida else "???"
    if codigo.startswith("2"):
        print(f"  [leccion] enviada a {cfg['to']} · HTTP {codigo}")
        return 0
    print(f"  [leccion] fallo al enviar · HTTP {codigo} · {' '.join(salida[:-1])[:300]}",
          file=sys.stderr)
    return 1


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description="Envía una lección del curso por correo.")
    ap.add_argument("--indice", type=int, help="Índice de lección (0 = la primera).")
    ap.add_argument("--desde", help="Fecha del primer envío, YYYY-MM-DD (modo por fecha).")
    ap.add_argument("--cada", type=int, default=2, help="Cada cuántos días (por defecto 2).")
    ap.add_argument("--dry-run", action="store_true", help="No envía; muestra qué haría.")
    ap.add_argument("--guardar", help="Guarda el HTML en esta ruta (para revisarlo).")
    a = ap.parse_args(argv)

    raiz = raiz_repo()
    cargar_dotenv(raiz)
    lecciones = listar_lecciones(raiz)
    if not lecciones:
        print("✗ No encuentro lecciones en modulos/", file=sys.stderr)
        return 1

    # --- Elegir la lección ---
    if a.indice is not None:
        idx = a.indice
    elif a.desde:
        inicio = dt.date.fromisoformat(a.desde)
        dias = (dt.date.today() - inicio).days
        if dias < 0:
            print(f"  [leccion] aún no empieza (arranca el {a.desde}).")
            return 0
        if dias % a.cada != 0:
            print(f"  [leccion] hoy no toca (día {dias} desde el inicio, cada {a.cada}).")
            return 0
        idx = dias // a.cada
    else:
        print("✗ Indica --indice o --desde", file=sys.stderr)
        return 2

    if idx >= len(lecciones):
        print(f"  [leccion] curso terminado: {len(lecciones)} lecciones enviadas. 🎉")
        return 0

    ruta = lecciones[idx]
    meta, cuerpo = partir_frontmatter(ruta.read_text(encoding="utf-8"))
    titulo = meta.get("titulo") or ruta.stem
    modulo = meta.get("modulo") or ruta.parent.name

    asunto = f"[Curso Claude] {idx + 1}/{len(lecciones)} · {titulo}"
    pie = (
        f"Lección {idx + 1} de {len(lecciones)} · módulo {html.escape(modulo)} · "
        f"<code>{html.escape(str(ruta.relative_to(raiz)))}</code><br>"
        f"Revisado el {html.escape(meta.get('revisado', '—'))} · "
        f"estado: {html.escape(meta.get('estado', '—'))}. "
        f"Contenido en borrador: si ves algo desfasado, anótalo."
    )
    doc = envolver(titulo, md_a_html(cuerpo), pie)

    if a.guardar:
        Path(a.guardar).write_text(doc, encoding="utf-8")
        print(f"  [leccion] HTML guardado en {a.guardar}")

    cfg = {
        "key": os.environ.get("RESEND_KEY", ""),
        "to": os.environ.get("MAIL_TO", ""),
        "from": os.environ.get("MAIL_FROM", "Curso Claude <onboarding@resend.dev>"),
    }

    if a.dry_run:
        print(f"[dry-run] Lección {idx + 1}/{len(lecciones)}: {ruta.relative_to(raiz)}")
        print(f"[dry-run] Asunto: {asunto}")
        print(f"[dry-run] Para:   {cfg['to'] or '<MAIL_TO sin definir>'}")
        print(f"[dry-run] HTML:   {len(doc)} bytes")
        return 0

    # Canal de envío: Resend si hay key (modo rutina cloud); si no, SMTP del .env (modo local).
    if cfg["key"] and cfg["to"]:
        return enviar(asunto, doc, cfg)

    rc = enviar_smtp(asunto, doc)
    if rc == -1:
        print("  [leccion] Sin canal de envío: define RESEND_KEY+MAIL_TO, o SMTP_* en el .env.")
        return 0
    return rc


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
