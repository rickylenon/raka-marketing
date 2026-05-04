#!/usr/bin/env bash
# Run from this folder: bash run-dev.sh
# Installs a portable Node (no Homebrew) under ~/.local/share/raka-node, then npm install + dev.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
NODE_VERSION="22.14.0"
ARCH="darwin-arm64"
INSTALL_DIR="${HOME}/.local/share/raka-node"
NODE_HOME="${INSTALL_DIR}/node-v${NODE_VERSION}-${ARCH}"

if [[ ! -x "${NODE_HOME}/bin/node" ]]; then
  echo "Installing Node ${NODE_VERSION} to ${NODE_HOME} ..."
  mkdir -p "${INSTALL_DIR}"
  TMP="${INSTALL_DIR}/node.tar.xz"
  curl -fsSL -o "${TMP}" \
    "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-${ARCH}.tar.xz"
  tar -xf "${TMP}" -C "${INSTALL_DIR}"
  rm -f "${TMP}"
fi

export PATH="${NODE_HOME}/bin:${PATH}"
cd "${ROOT}"
echo "Using $(node -v) / npm $(npm -v)"
npm install
exec npm run dev
