#!/usr/bin/env bash
#
# push-all.sh — Despliegue de un push con varias cuentas de GitHub.
#
# Encapsula el flujo manual que causa fricción entre sesiones:
#   1. Detecta los remotos del repo y a qué cuenta de GitHub pertenece cada uno.
#   2. Por cada remoto: hace `gh auth switch` a la cuenta correcta y `git push`.
#   3. Informa del despliegue (este repo va a Cloudflare Pages por integración
#      git: el propio push dispara el build; no hay comando de deploy manual).
#
# Robusto por diseño:
#   - `set -euo pipefail`: aborta al primer fallo, variable sin definir o tubería rota.
#   - Comprueba TODO antes de empujar nada: si a un remoto le falta su cuenta de
#     gh, falla pronto y no deja el trabajo a medias.
#   - No hardcodea cuentas: mapea el owner de la URL de cada remoto a la cuenta
#     de gh con ese mismo nombre.
#   - Restaura la cuenta de gh que estaba activa al terminar (o al fallar).
#
# Uso:
#   ./push-all.sh              # push de la rama actual a todos los remotos
#   ./push-all.sh --dry-run    # enseña qué haría, sin tocar nada
#   ./push-all.sh --branch main
#   ./push-all.sh -h | --help
#
set -euo pipefail

# ─── Presentación ────────────────────────────────────────────────────────────
if [[ -t 1 ]]; then
  C_RESET=$'\033[0m'; C_BOLD=$'\033[1m'; C_BLUE=$'\033[34m'
  C_GREEN=$'\033[32m'; C_YELLOW=$'\033[33m'; C_RED=$'\033[31m'
else
  C_RESET=''; C_BOLD=''; C_BLUE=''; C_GREEN=''; C_YELLOW=''; C_RED=''
fi

step() { printf '%s\n' "${C_BOLD}${C_BLUE}▶ $*${C_RESET}"; }
info() { printf '  %s\n' "$*"; }
ok()   { printf '  %s\n' "${C_GREEN}✓ $*${C_RESET}"; }
warn() { printf '  %s\n' "${C_YELLOW}! $*${C_RESET}"; }
die()  { printf '%s\n' "${C_RED}${C_BOLD}✗ $*${C_RESET}" >&2; exit 1; }

usage() {
  cat <<'EOF'
push-all.sh — hace push de la rama actual a todos los remotos, cada uno con su
cuenta de GitHub, y avisa del despliegue (Cloudflare Pages, automático por push).

Uso:
  ./push-all.sh              push de la rama actual a todos los remotos
  ./push-all.sh --dry-run    enseña qué haría, sin tocar nada
  ./push-all.sh --branch main
  ./push-all.sh -h | --help

Detecta el owner de cada remoto y cambia a la cuenta de gh con ese nombre
(gh auth switch) antes de cada push. Restaura la cuenta activa al terminar.
Requiere: git y gh (GitHub CLI). Compatible con bash 3.2 (macOS).
EOF
}

# ─── Argumentos ──────────────────────────────────────────────────────────────
DRY_RUN=0
BRANCH=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run|-n) DRY_RUN=1; shift ;;
    --branch|-b)  BRANCH="${2:-}"; [[ -n "$BRANCH" ]] || die "--branch necesita un nombre de rama."; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) die "Opción desconocida: $1 (usa --help)." ;;
  esac
done

# ─── Extrae host y owner de una URL de remoto ────────────────────────────────
# Soporta: https://github.com/owner/repo(.git), git@github.com:owner/repo(.git),
#          ssh://git@github.com/owner/repo(.git), https://user@github.com/owner/repo
host_owner_from_url() {
  local url="$1"
  url="${url#ssh://}"                       # quita esquema ssh://
  url="${url#*@}"                           # quita user@  (git@, x-access-token@…)
  url="${url#https://}"; url="${url#http://}"
  local host="${url%%[:/]*}"               # todo hasta el primer : o /
  local rest="${url#"$host"}"; rest="${rest#[:/]}"
  rest="${rest%.git}"
  local owner="${rest%%/*}"
  printf '%s\t%s\n' "$host" "$owner"
}

# ═════════════════════════════════════════════════════════════════════════════
step "[1/3] Comprobaciones previas"

command -v git >/dev/null 2>&1 || die "git no está instalado o no está en el PATH."
command -v gh  >/dev/null 2>&1 || die "gh (GitHub CLI) no está instalado o no está en el PATH."

git rev-parse --is-inside-work-tree >/dev/null 2>&1 \
  || die "No estás dentro de un repositorio git."

# Rama a empujar (la actual, salvo que se pase --branch).
if [[ -z "$BRANCH" ]]; then
  BRANCH="$(git symbolic-ref --short -q HEAD)" \
    || die "HEAD está desacoplado (detached). Indica la rama con --branch <rama>."
fi
info "Rama a empujar: ${C_BOLD}${BRANCH}${C_RESET}"

# Cuentas de gh disponibles y cuenta activa (para restaurarla al final).
GH_ACCOUNTS=()
while IFS= read -r _line; do
  [[ -n "$_line" ]] && GH_ACCOUNTS+=("$_line")
done < <(gh auth status 2>&1 | grep -oE 'account [A-Za-z0-9._-]+' | awk '{print $2}' | sort -u)
[[ ${#GH_ACCOUNTS[@]} -gt 0 ]] \
  || die "gh no tiene ninguna cuenta con sesión iniciada. Ejecuta 'gh auth login'."
ORIG_ACCOUNT="$(gh auth status --active 2>&1 | grep -oE 'account [A-Za-z0-9._-]+' | awk '{print $2}' | head -1 || true)"
info "Cuentas gh disponibles: ${GH_ACCOUNTS[*]}"
info "Cuenta gh activa ahora: ${ORIG_ACCOUNT:-<ninguna>}"

# Restaura la cuenta activa original pase lo que pase.
restore_account() {
  [[ -n "${ORIG_ACCOUNT:-}" ]] || return 0
  local current
  current="$(gh auth status --active 2>&1 | grep -oE 'account [A-Za-z0-9._-]+' | awk '{print $2}' | head -1 || true)"
  if [[ "$current" != "$ORIG_ACCOUNT" ]]; then
    gh auth switch --user "$ORIG_ACCOUNT" >/dev/null 2>&1 || true
  fi
}
trap restore_account EXIT

# ¿gh es el credential helper de git? Si no, el push podría usar otras credenciales.
if ! git config --get-regexp '^credential\..*\.helper$' 2>/dev/null | grep -qi 'gh auth git-credential'; then
  warn "gh no aparece como credential helper de git. Si el push pide credenciales,"
  warn "  ejecuta 'gh auth setup-git' una vez para que use la cuenta activa."
fi

# ¿Hay algún remoto?
REMOTES=()
while IFS= read -r _line; do
  [[ -n "$_line" ]] && REMOTES+=("$_line")
done < <(git remote)
[[ ${#REMOTES[@]} -gt 0 ]] || die "El repo no tiene ningún remoto configurado (git remote add …)."

# Contiene un valor → true en test [[ ]] de bash: helper de pertenencia.
account_exists() {
  local needle="$1" a
  for a in "${GH_ACCOUNTS[@]}"; do [[ "$a" == "$needle" ]] && return 0; done
  return 1
}

# Resuelve, VALIDA y guarda el plan antes de empujar nada (fallar pronto).
declare -a PLAN_REMOTE PLAN_ACCOUNT PLAN_HOST PLAN_URL
for remote in "${REMOTES[@]}"; do
  url="$(git remote get-url --push "$remote" 2>/dev/null || true)"
  [[ -n "$url" ]] || die "No se pudo leer la URL de push del remoto '$remote'."
  IFS=$'\t' read -r host owner < <(host_owner_from_url "$url")
  [[ -n "$owner" ]] || die "No se pudo extraer el owner de la URL del remoto '$remote' ($url)."

  if [[ "$host" == "github.com" ]]; then
    account_exists "$owner" \
      || die "El remoto '$remote' pertenece a '$owner' pero no hay una cuenta de gh '$owner' con sesión iniciada.
       Cuentas disponibles: ${GH_ACCOUNTS[*]}. Inicia sesión con 'gh auth login' en esa cuenta."
    account="$owner"
  else
    # Remoto no-GitHub: no se puede mapear a una cuenta de gh; se empuja tal cual.
    warn "El remoto '$remote' no es de github.com ($host); se empuja con las credenciales actuales."
    account=""
  fi
  PLAN_REMOTE+=("$remote"); PLAN_ACCOUNT+=("$account"); PLAN_HOST+=("$host"); PLAN_URL+=("$url")
  ok "$remote → owner '${owner}'${account:+ (cuenta gh: $account)}"
done
info "Remotos a empujar: ${#PLAN_REMOTE[@]}"

# ═════════════════════════════════════════════════════════════════════════════
step "[2/3] Push a los remotos"

for i in "${!PLAN_REMOTE[@]}"; do
  remote="${PLAN_REMOTE[$i]}"; account="${PLAN_ACCOUNT[$i]}"
  n=$((i + 1)); total=${#PLAN_REMOTE[@]}
  printf '  %s\n' "${C_BOLD}(${n}/${total}) ${remote}${C_RESET}"

  if [[ -n "$account" ]]; then
    if [[ "$DRY_RUN" == 1 ]]; then
      info "[dry-run] gh auth switch --user $account"
    else
      gh auth switch --user "$account" >/dev/null 2>&1 \
        || die "No se pudo cambiar a la cuenta de gh '$account'."
      ok "Cuenta gh activa: $account"
    fi
  fi

  if [[ "$DRY_RUN" == 1 ]]; then
    info "[dry-run] git push $remote $BRANCH"
  else
    info "git push $remote $BRANCH"
    git push "$remote" "$BRANCH" \
      || die "Falló el push a '$remote'. Revisa la traza de git de arriba."
    ok "Empujado a $remote"
  fi
done

# ═════════════════════════════════════════════════════════════════════════════
step "[3/3] Despliegue"

if [[ "$DRY_RUN" == 1 ]]; then
  info "[dry-run] No se despliega nada."
else
  info "Este repo (curso-claude) despliega en Cloudflare Pages por integración git."
  info "El push que acabas de hacer dispara el build automáticamente (~90 s)."
  if [[ "$BRANCH" == "main" ]]; then
    ok "Rama 'main' → despliegue de PRODUCCIÓN: https://curso-claude.pages.dev/"
  else
    warn "Rama '$BRANCH' (no 'main') → Cloudflare generará una preview, no producción."
  fi
  info "Progreso en: Cloudflare dashboard → Pages → curso-claude → Deployments."
fi

printf '%s\n' "${C_GREEN}${C_BOLD}✓ Listo.${C_RESET}"
