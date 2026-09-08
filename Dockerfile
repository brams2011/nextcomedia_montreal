# Étape 1 : Construction
FROM node:20-alpine AS builder
WORKDIR /app

# Dépendances
COPY package*.json ./
RUN npm ci

# Code source et compilation (Vite + serveur Express CommonJS)
COPY . .
RUN npm run build

# Étape 2 : Exécution de production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

# Fichiers compilés (assets client + serveur backend)
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.cjs"]
