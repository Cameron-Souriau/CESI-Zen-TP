#!/usr/bin/env bash
set -euo pipefail

workspace="${1:-$(pwd)}"

if [[ ! -d "$workspace" ]]; then
  echo "Workspace not found: $workspace" >&2
  exit 1
fi

echo "Cleaning stale build artifacts in $workspace"

# Remove common generated folders that can cause permission issues on self-hosted runners
find "$workspace" -type d \( -name node_modules -o -name dist -o -name .angular -o -name coverage -o -name target -o -name build \) -prune -exec rm -rf {} + 2>/dev/null || true

# Fix ownership if a previous step created files as root inside the mounted workspace
if command -v id >/dev/null 2>&1; then
  owner="$(id -u):$(id -g)"
  if command -v sudo >/dev/null 2>&1; then
    sudo chown -R "$owner" "$workspace" 2>/dev/null || true
    sudo chmod -R u+rwX "$workspace" 2>/dev/null || true
  else
    chown -R "$owner" "$workspace" 2>/dev/null || true
    chmod -R u+rwX "$workspace" 2>/dev/null || true
  fi
fi

echo "Workspace cleanup complete"
