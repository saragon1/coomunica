# 🐳 Docker Setup per nuovo_sito_osa

Questa guida spiega come utilizzare Docker per buildare e deployare l'applicazione su GitHub Container Registry (ghcr.io).

## 📋 Prerequisiti

- Docker installato e in esecuzione
- Account GitHub
- Repository GitHub collegato al progetto
- Token GitHub con permessi per i packages (per push manuale)

## 🏗️ Struttura Files Docker

```
.
├── Dockerfile              # Multi-stage build per l'applicazione
├── docker-compose.yml      # Per test locale
├── nginx.conf              # Configurazione nginx per SPA
├── .dockerignore           # File da escludere dal build context
├── .github/workflows/
│   └── docker-build-push.yml  # Automazione CI/CD
└── scripts/
    └── build-and-push.sh   # Script manuale per build e push
```

## 🚀 Utilizzo

### Build Locale

```bash
# Build dell'immagine
docker build -t nuovo_sito_osa .

# Run locale
docker run -p 8080:80 nuovo_sito_osa
```

### Test con Docker Compose

```bash
# Build e run
docker-compose up --build

# Run in background
docker-compose up -d

# Stop
docker-compose down
```

L'applicazione sarà disponibile su: http://localhost:8080

### Push Manuale su GitHub Container Registry

1. **Crea un Personal Access Token** su GitHub:
   - Vai su GitHub → Settings → Developer settings → Personal access tokens
   - Crea un token con permessi `write:packages` e `read:packages`

2. **Esporta il token**:
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

3. **Esegui lo script**:
   ```bash
   ./scripts/build-and-push.sh [tag]
   ```

### Push Automatico con GitHub Actions

Il workflow `.github/workflows/docker-build-push.yml` si attiva automaticamente quando:

- ✅ Push su branch `main` o `master`
- ✅ Creazione di un tag `v*` (es. `v1.0.0`)
- ✅ Pull request su `main` o `master` (solo build, no push)

#### Setup GitHub Actions

1. **Abilita GitHub Container Registry** nel repository:
   - Settings → Actions → General → Workflow permissions
   - Seleziona "Read and write permissions"

2. **Il workflow utilizza automaticamente** `GITHUB_TOKEN` (nessuna configurazione manuale necessaria)

3. **Per push con tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

## 🏷️ Tag delle Immagini

Il sistema genera automaticamente questi tag:

- `latest` - Ultimo build da main/master
- `v1.0.0` - Tag semantici
- `sha-abc123` - Hash del commit
- `main` - Nome del branch

## 📦 Accesso alle Immagini

Le immagini sono disponibili su:
```
ghcr.io/USERNAME/nuovo_sito_osa:latest
ghcr.io/USERNAME/nuovo_sito_osa:v1.0.0
```

### Pull dell'immagine

```bash
# Login (se necessario)
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull
docker pull ghcr.io/USERNAME/nuovo_sito_osa:latest

# Run
docker run -p 8080:80 ghcr.io/USERNAME/nuovo_sito_osa:latest
```

## 🔧 Configurazione Nginx

L'immagine include nginx configurato per:

- ✅ Routing SPA (React Router)
- ✅ Cache ottimizzato per asset statici
- ✅ Compressione gzip
- ✅ Header di sicurezza
- ✅ Health check

## 🐛 Troubleshooting

### Build fallisce

```bash
# Verifica il context
docker build --no-cache .

# Debug delle dipendenze
docker run --rm -it node:18-alpine sh
```

### Push fallisce

```bash
# Verifica login
docker login ghcr.io

# Verifica permessi del token
# Il token deve avere write:packages
```

### Applicazione non si avvia

```bash
# Verifica i logs
docker logs <container_id>

# Test della build statica
npm run build
ls -la dist/
```

## 🌐 Deploy in Produzione

### Con Docker Compose

```yaml
version: '3.8'
services:
  app:
    image: ghcr.io/USERNAME/nuovo_sito_osa:latest
    ports:
      - "80:80"
    restart: unless-stopped
```

### Con Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nuovo-sito-osa
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nuovo-sito-osa
  template:
    metadata:
      labels:
        app: nuovo-sito-osa
    spec:
      containers:
      - name: app
        image: ghcr.io/USERNAME/nuovo_sito_osa:latest
        ports:
        - containerPort: 80
```

## 📈 Ottimizzazioni

L'immagine è ottimizzata per:

- 🏗️ **Multi-stage build** - Solo file necessari nell'immagine finale
- 📦 **Layer caching** - Build incremental più veloci
- 🗜️ **Dimensioni ridotte** - Immagine Alpine Linux
- 🏃 **Multi-platform** - Supporto ARM64 e AMD64
- 💾 **Build cache** - GitHub Actions cache per velocità

## 📞 Supporto

Per problemi o domande, apri un issue nel repository GitHub. 