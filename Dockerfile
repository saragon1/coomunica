# Stage 1: Build dell'applicazione
FROM node:18-alpine AS builder

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di configurazione delle dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm ci --only=production

# Copia il resto del codice sorgente
COPY . .

# Esegue la build dell'applicazione
RUN npm run build

# Stage 2: Serve l'applicazione con nginx
FROM nginx:alpine

# Rimuove la configurazione default di nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia i file di build dalla stage precedente
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia la configurazione personalizzata di nginx per SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Espone la porta 80
EXPOSE 80

# Comando per avviare nginx
CMD ["nginx", "-g", "daemon off;"] 