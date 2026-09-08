#!/usr/bin/env bash
# Script de déploiement automatique pour VPS Contabo (Ubuntu / Debian)
# Projet : Nextcomedia (root@217.77.15.219)
set -e

echo "========================================================="
echo "   Déploiement automatique de Nextcomedia sur Contabo   "
echo "========================================================="

# 1. Mise à jour du système et prérequis
echo "[1/6] Mise à jour des paquets et installation des prérequis..."
apt-get update -y
apt-get install -y curl git ufw nginx

# 2. Installation de Node.js 20 LTS si non présent
if ! command -v node >/dev/null 2>&1; then
  echo "[2/6] Installation de Node.js 20 LTS..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
else
  echo "[2/6] Node.js est déjà installé ($(node -v))."
fi

# Installation de PM2 pour maintenir l'application active 24/7
if ! command -v pm2 >/dev/null 2>&1; then
  echo "Installation de PM2..."
  npm install -g pm2
fi

# 3. Récupération ou mise à jour du code
APP_DIR="/var/www/nextcomedia"
echo "[3/6] Préparation du répertoire $APP_DIR..."

if [ -d "$APP_DIR/.git" ]; then
  echo "Mise à jour du dépôt existant..."
  cd "$APP_DIR"
  git fetch origin main
  git reset --hard origin/main
else
  echo "Clonage du dépôt GitHub brams2011/nextcomedia..."
  mkdir -p /var/www
  git clone https://github.com/brams2011/nextcomedia.git "$APP_DIR"
  cd "$APP_DIR"
fi

# 4. Installation des dépendances et compilation
echo "[4/6] Installation des dépendances et compilation du projet..."
npm install
npm run build

# 5. Configuration du fichier d'environnement .env
if [ ! -f "$APP_DIR/.env" ]; then
  echo "Création du fichier .env..."
  cat << 'EOF' > "$APP_DIR/.env"
NODE_ENV=production
PORT=3000
GEMINI_API_KEY=""
EOF
  echo "NOTE: Pensez à éditer $APP_DIR/.env avec votre clé GEMINI_API_KEY si souhaité."
fi

# 6. Démarrage avec PM2
echo "[5/6] Démarrage du service Nextcomedia avec PM2..."
pm2 delete nextcomedia 2>/dev/null || true
NODE_ENV=production pm2 start dist/server.cjs --name nextcomedia
pm2 save
pm2 startup systemd -u root --hp /root || true

# 7. Configuration de Nginx en reverse proxy
echo "[6/6] Configuration de Nginx pour exposer le port 3000 sur le port 80..."
cat << 'EOF' > /etc/nginx/sites-available/nextcomedia
server {
    listen 80;
    server_name 217.77.15.219 nextcomedia.ca www.nextcomedia.ca;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -sf /etc/nginx/sites-available/nextcomedia /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# Pare-feu
ufw allow 'Nginx Full' 2>/dev/null || true
ufw allow OpenSSH 2>/dev/null || true

echo "========================================================="
echo "   Félicitations ! Nextcomedia est déployé avec succès  "
echo "   Accédez à votre site : http://217.77.15.219          "
echo "========================================================="
