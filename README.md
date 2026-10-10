# Blessed Vally Foundation — Plateforme Web & Système de Don

Plateforme institutionnelle bilingue (Français & Anglais) de la **Fondation Blessed Vally Inc.**, organisation chrétienne sans but lucratif active aux États-Unis et en Haïti, dédiée à l'éducation, à la transformation communautaire et au soutien durable des enfants et familles.

---

## 🛠️ Stack Technique

- **Frontend** : React 19, Vite 7, Tailwind CSS 4, Wouter (routage fluide), Lucide React
- **Backend Node.js** : Express, Stripe SDK v23 (Dynamic Payment Methods & Webhooks)
- **Tests** : Vitest (77 tests unitaires automatisés validés)
- **Typage & Qualité** : TypeScript 5.9, Prettier
- **Compatibilité Déploiement** : Node.js 18+, 20+, 22+ (Hostinger, VPS, Cloud)

---

## 🚀 Démarrage Rapide en Local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration des variables d'environnement
Copiez `.env.example` vers `.env` :
```bash
cp .env.example .env
```
Renseignez vos clés d'API Stripe obtenues sur [dashboard.stripe.com](https://dashboard.stripe.com/apikeys) :
```env
PORT=7000
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
L'application est accessible sur `http://localhost:7000/`.

### 4. Lancer les tests unitaires
```bash
npm test
```

### 5. Compiler pour la production
```bash
npm run build
```
Cette commande compile le frontend dans `dist/` et génère le fichier exécutable Node.js de production `server.js`.

---

## 🌐 Déploiement sur Hostinger (Node.js)

### Étape 1 : Connecter le dépôt GitHub sur Hostinger
1. Rendez-vous sur votre panneau **Hostinger hPanel**.
2. Dans la section **Avancé**, cliquez sur **Git**.
3. Renseignez l'URL du dépôt : `https://github.com/jgenie1/Blessed-Vally-Foundation.git`
4. Sélectionnez la branche : `main`.
5. Cliquez sur **Créer / Déployer**.

### Étape 2 : Configurer l'Application Node.js dans hPanel
1. Allez dans **Sites web** > **Gérer** > **Node.js**.
2. Définissez les paramètres suivants :
   - **Version de Node.js** : `20.x` (ou `18.x` / `22.x`)
   - **Mode de l'application** : `Production`
   - **Racine de l'application (Application root)** : `/` (ou le dossier où Git a cloné le projet)
   - **Fichier de démarrage (Application startup file)** : `server.js`
3. Cliquez sur **Créer l'application** ou **Sauvegarder**.

### Étape 3 : Installer les dépendances et compiler
Dans le terminal SSH Hostinger ou via les boutons d'actions hPanel :
```bash
npm install
npm run build
```

### Étape 4 : Variables d'environnement sur Hostinger
Dans la section des variables d'environnement Node.js d'Hostinger (ou dans le fichier `.env` sur le serveur) :
- `NODE_ENV` = `production`
- `STRIPE_PUBLISHABLE_KEY` = `pk_live_...` (ou vos clés de test pour commencer)
- `STRIPE_SECRET_KEY` = `sk_live_...`
- `STRIPE_WEBHOOK_SECRET` = `whsec_...`

### Étape 5 : Démarrer / Redémarrer l'application
Cliquez sur **Redémarrer l'application (Restart Application)** dans hPanel. Votre site est en ligne avec HTTPS actif !

---

## 💳 Fonctionnalités du Module de Don

- **Paiements en ligne sécurisés** via Stripe Checkout (CB, Apple Pay, Google Pay).
- **Dons ponctuels** et **dons mensuels récurrents**.
- **Calculateur d'impact dynamique** selon le montant sélectionné.
- **5 Causes d'affectation ciblées** (Fonds général, Écoles chrétiennes, Nutrition infantile, Infrastructures Dondon, Formation des maîtres).
- **Virement bancaire direct** (Bank of America Wire & Zelle aux USA).
- **Dépôts locaux en Haïti** (Banque de l'Union Haïtienne BUH en HTG et USD).
- **Reçu officiel certifié** avec génération d'attestation et impression PDF directe.

---

## 📄 Licence
Copyright © 2026 Blessed Vally Foundation Inc. Tous droits réservés.
