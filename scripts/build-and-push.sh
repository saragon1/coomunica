#!/bin/bash

# Script per build e push dell'immagine Docker su GitHub Container Registry
# Uso: ./scripts/build-and-push.sh [tag]

set -e

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Funzioni di utilità
error() {
    echo -e "${RED}❌ Errore: $1${NC}" >&2
    exit 1
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Verifica che git sia in stato pulito
if ! git diff-index --quiet HEAD --; then
    error "Ci sono modifiche non committate. Esegui commit prima di continuare."
fi

# Ottieni informazioni dal repository
REPO_NAME=$(basename "$(git rev-parse --show-toplevel)")
GITHUB_USERNAME=$(git config user.name || echo "unknown")
TAG=${1:-"latest"}
COMMIT_SHA=$(git rev-parse --short HEAD)

# Costruisci i nomi delle immagini
IMAGE_NAME="ghcr.io/${GITHUB_USERNAME}/${REPO_NAME}"
FULL_TAG="${IMAGE_NAME}:${TAG}"
COMMIT_TAG="${IMAGE_NAME}:sha-${COMMIT_SHA}"

info "Repository: ${REPO_NAME}"
info "Username: ${GITHUB_USERNAME}"
info "Tag: ${TAG}"
info "Commit SHA: ${COMMIT_SHA}"

# Verifica che Docker sia in esecuzione
if ! docker info >/dev/null 2>&1; then
    error "Docker non è in esecuzione o non accessibile"
fi

# Build dell'immagine
info "Costruzione dell'immagine Docker..."
docker build -t "${FULL_TAG}" -t "${COMMIT_TAG}" .

success "Immagine costruita con successo"

# Login a GitHub Container Registry
info "Login a GitHub Container Registry..."
echo $GITHUB_TOKEN | docker login ghcr.io -u $GITHUB_USERNAME --password-stdin

# Push dell'immagine
info "Push dell'immagine su GitHub Container Registry..."
docker push "${FULL_TAG}"
docker push "${COMMIT_TAG}"

success "Immagine pushata con successo!"
success "Immagine disponibile su: ${FULL_TAG}"
success "Immagine disponibile su: ${COMMIT_TAG}"

# Pulizia delle immagini locali (opzionale)
read -p "Vuoi rimuovere le immagini locali? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    docker rmi "${FULL_TAG}" "${COMMIT_TAG}" || true
    success "Immagini locali rimosse"
fi 