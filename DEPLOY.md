# Guide de Déploiement en Ligne - Nextcomedia

Ce document décrit les méthodes recommandées pour mettre l'application Nextcomedia en production.

---

## 1. Déploiement 1-Clic via Google AI Studio (Le plus simple)

Si vous êtes dans l'interface Google AI Studio :
1. Cliquez sur le bouton **Deploy** (ou l'icône de partage/déploiement en haut à droite).
2. Sélectionnez **Cloud Run** (ou le service d'hébergement proposé).
3. L'application est automatiquement empaquetée, construite et déployée sur une URL publique sécurisée HTTPS avec gestion automatique des certificats SSL.

---

## 2. Déploiement via Render (Recommandé pour Express + Vite)

[Render](https://render.com) est une excellente plateforme pour déployer ce projet (Node.js full-stack avec backend Express) :

1. Connectez-vous sur [render.com](https://render.com) avec votre compte GitHub.
2. Cliquez sur **New +** > **Web Service**.
3. Sélectionnez votre dépôt GitHub : `brams2011/nextcomedia`.
4. Configurez les options :
   - **Environment** : `Node`
   - **Build Command** : `npm run build`
   - **Start Command** : `npm run start`
   - **Plan** : Gratuit ou Starter
5. Dans la section **Environment Variables**, ajoutez :
   - `NODE_ENV` : `production`
   - `GEMINI_API_KEY` : (votre clé API Google AI Studio / Gemini)
6. Cliquez sur **Deploy Web Service**.

---

## 3. Déploiement via Docker (Tout hébergeur Cloud : DigitalOcean, OVH, AWS, GCP)

Un fichier `Dockerfile` multi-stage optimisé est inclus à la racine du projet.

### Construction de l'image :
```bash
docker build -t nextcomedia:latest .
```

### Lancement du conteneur :
```bash
docker run -d \
  -p 3000:3000 \
  -e GEMINI_API_KEY="votre_cle_api" \
  --name nextcomedia-app \
  nextcomedia:latest
```

L'application est immédiatement accessible sur `http://votre-serveur:3000`.

---

## 4. Déploiement via Railway

1. Rendez-vous sur [railway.app](https://railway.app).
2. Cliquez sur **New Project** > **Deploy from GitHub repo**.
3. Choisissez `brams2011/nextcomedia`.
4. Ajoutez votre variable d'environnement `GEMINI_API_KEY`.
5. Railway détectera automatiquement le `Dockerfile` ou le `package.json` et déploiera l'application en quelques secondes.

---

## Variables d'Environnement Requises

| Variable | Description | Obligatoire |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Clé d'API Google Gemini pour alimenter le clavardage intelligent NextcoBot. | Oui (pour l'IA complète, sinon bascule sur le moteur de connaissances local). |
| `NODE_ENV` | Mode d'exécution (`production`). | Recommandé |
