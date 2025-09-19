# Alone NGO - Site Web

Ce projet est une reproduction fidèle de la maquette du site web de l'ONG Alone, réalisée avec React.js et Tailwind CSS.

## Structure du projet

Le projet est organisé en plusieurs composants React modulaires, chacun correspondant à une section de la page web.

### Composants

- `Header.js`: En-tête avec navigation et coordonnées
- `Hero.js`: Section principale avec message d'accueil
- `Mission.js`: Section décrivant la mission de l'ONG
- `Goals.js`: Section présentant les objectifs de développement durable
- `Stats.js`: Section avec les chiffres clés de l'organisation
- `Causes.js`: Section présentant les causes récentes
- `About.js`: Section "Bienvenue à Alone NGO"
- `Shop.js`: Section boutique avec produits
- `Events.js`: Section événements à venir
- `Testimonials.js`: Section témoignages des clients
- `News.js`: Section actualités et mises à jour
- `Newsletter.js`: Section inscription à la newsletter
- `Footer.js`: Pied de page avec informations de contact

## Installation

1. Cloner le dépôt
2. Exécuter `npm install` pour installer les dépendances
3. Exécuter `npm start` pour démarrer l'application

## Technologies utilisées

- React.js
- HTML5

## Personnalisation

Le contenu est personnalisé en français pour une meilleure compréhension. Tous les composants sont commentés en français pour faciliter la maintenance et les modifications futures.

## Responsive Design

Le site est conçu pour être responsive et s'adapter à différentes tailles d'écran (mobile, tablette, desktop).

# 🌍 Alone NGO - Site Web de l'Organisation Caritative

Ce projet est une reproduction fidèle de la maquette du site web de l'ONG Alone, réalisée avec **React.js** et **CSS**.

## 📋 Table des matières

- [Présentation du projet](#-présentation-du-projet)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Pourquoi React.js ?](#-pourquoi-reactjs-)
- [Installation et configuration](#-installation-et-configuration)
- [Commandes disponibles](#-commandes-disponibles)
- [Composants détaillés](#-composants-détailés)
- [Déploiement](#-déploiement)
- [Auteur](#-auteur)

## 🎯 Présentation du projet

Ce projet consiste en la création d'un site web responsive pour une organisation non gouvernementale (ONG) appelée "Alone". Le site présente les missions de l'ONG, ses objectifs de développement durable, ses projets en cours, ses événements à venir, ainsi qu'une boutique solidaire.

**Fonctionnalités principales :**
- Présentation des activités de l'ONG
- Affichage des statistiques (projets complétés, personnes aidées)
- Mise en avant des causes urgentes
- Boutique de produits solidaires
- Section actualités et événements
- Inscription à la newsletter
- Formulaire de contact

## 📁 Structure du projet

```
alone-ngo/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Mission.js
│   │   ├── Goals.js
│   │   ├── Stats.js
│   │   ├── Causes.js
│   │   ├── About.js
│   │   ├── Shop.js
|   |   |___Parteners.js
│   │   ├── Events.js
│   │   ├── Testimonials.js
│   │   ├── News.js
│   │   ├── Newsletter.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠 Technologies utilisées

- **React.js 18** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Tailwind CSS** - Framework CSS utilitaire pour un design rapide et responsive
- **HTML5** - Structure sémantique du contenu
- **JavaScript ES6+** - Langage de programmation pour la logique applicative
- **PostCSS** - Outil de transformation CSS avec JavaScript

## ⚛️ Pourquoi React.js ?

Plusieurs raisons justifient le choix de React.js pour ce projet :

1. **Composants réutilisables** : La structure modulaire de React permet de créer des composants réutilisables pour chaque section du site
2. **Performance** : Le Virtual DOM de React optimise le rendu et les mises à jour de l'interface
3. **Écosystème riche** : React bénéficie d'une large communauté et de nombreuses bibliothèques complémentaires
4. **Maintenabilité** : La séparation en composants facilite la maintenance et les mises à jour futures
5. **Flexibilité** : React peut être facilement étendu avec des fonctionnalités supplémentaires
6. **Demande du marché** : Compétence très recherchée dans l'industrie du développement web

Alternatives envisagées mais écartées :
- **Vanilla JS** : Trop de code à écrire manuellement pour un gain limité
- **Vue.js** : Bien que similaire à React, moins répandu dans les projets professionnels
- **Angular** : Trop lourd pour un site principalement statique comme celui-ci

## 🚀 Installation et configuration

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Création du projet

```bash
# Création de l'application React
npx create-react-app alone-ngo

# Navigation vers le dossier du projet
cd alone-ngo


### Installation des dépendances supplémentaires

```bash
# Installation des icônes (si nécessaire)
npm install react-icons
```

## 📦 Commandes disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.\
Ouvre [http://localhost:3000](http://localhost:3000) pour la visualiser dans le navigateur.

La page se rechargera automatiquement si vous apportez des modifications au code.

### `npm test`

Lance la suite de tests en mode watch.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.\
Optimise et minifie le code pour de meilleures performances.

### `npm run eject`

**Note : Cette opération est irréversible !**

Permet de personnaliser complètement la configuration de build, mais retire la simplicité des outils configurés par défaut.

## 🧩 Composants détaillés

### Header.js
**Description** : En-tête du site avec navigation, logo et informations de contact.
**Fonctionnalités** :
- Navigation responsive entre les sections
- Affichage du numéro de téléphone
- Liens vers les réseaux sociaux

### Hero.js
**Description** : Section d'accueil avec message principal et appel à l'action.
**Fonctionnalités** :
- Image de fond avec overlay
- Titre et description de la mission
- Bouton de don

### Mission.js
**Description** : Présentation de la mission et des zones d'intervention.
**Fonctionnalités** :
- Illustration visuelle
- Description détaillée des actions
- Bouton "En savoir plus"

### Goals.js
**Description** : Section présentant les objectifs de développement durable.
**Fonctionnalités** :
- Grille de 6 objectifs avec icônes
- Description de la philosophie d'aide

### Stats.js
**Description** : Affichage des statistiques d'impact de l'ONG.
**Fonctionnalités** :
- Chiffres clés (projets, personnes aidées, récompenses)
- Message d'incitation

### Causes.js
**Description** : Mise en avant des causes urgentes nécessitant des dons.
**Fonctionnalités** :
- Liste des causes avec objectifs financiers
- Dates de campagne
- Boutons de don spécifiques

### About.js
**Description** : Section de bienvenue et présentation générale.
**Fonctionnalités** :
- Message d'accueil
- Appel à l'action (don et bénévolat)

### Shop.js
**Description** : Boutique de produits solidaires.
**Fonctionnalités** :
- Grille de produits avec images
- Prix et descriptions
- Catégories de produits

### Parteners.js
**Description** : Certains de nos partenaires .
**Fonctionnalités** :
- Liste des événements avec dates et lieux


### Events.js
**Description** : Calendrier des événements à venir.
**Fonctionnalités** :
- Liste des événements avec dates et lieux
- Thèmes et hashtags associés

### Testimonials.js
**Description** : Témoignages de bénéficiaires et partenaires.
**Fonctionnalités** :
- Citations de satisfaction
- Noms et localisations

### News.js
**Description** : Actualités et mises à jour de l'ONG.
**Fonctionnalités** :
- Articles avec dates et auteurs
- Résumés des actualités

### Newsletter.js
**Description** : Formulaire d'inscription à la newsletter.
**Fonctionnalités** :
- Champ email
- Bouton d'abonnement

### Footer.js
**Description** : Pied de page avec informations de contact et liens.
**Fonctionnalités** :
- Coordonnées complètes
- Liens rapides
- Mentions légales

## 🌐 Déploiement

### Déploiement sur Vercel

Vercel est la plateforme recommandée pour le déploiement d'applications React.

1. **Installez Vercel CLI** :
```bash
npm i -g vercel
```

2. **Déployez l'application** :
```bash
vercel
```

3. **Suivez les instructions** :
- Connectez-vous ou créez un compte Vercel
- Spécifiez le répertoire du projet
- Laissez les configurations par défaut

4. **Votre application sera déployée** avec une URL comme : `https://alone-ngo.vercel.app`

**Avantages de Vercel** :
- Déploiement instantané à chaque push sur GitHub
- Optimisations automatiques pour React
- CDN global pour de meilleures performances
- SSL gratuit

### Déploiement sur GitHub Pages

1. **Installez le package gh-pages** :
```bash
npm install --save-dev gh-pages
```

2. **Ajoutez ces lignes dans package.json** :
```json
"homepage": "https://votrenom.github.io/alone-ngo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Déployez sur GitHub Pages** :
```bash
npm run deploy
```

### Synchronisation GitHub et Vercel

1. **Poussez votre code sur GitHub** :
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votrenom/alone-ngo.git
git push -u origin main
```

2. **Connectez Vercel à votre dépôt GitHub** :
- Allez sur [vercel.com](https://vercel.com)
- Importez votre projet depuis GitHub
- Autorisez l'accès à votre dépôt
- Configurez le déploiement automatique

3. **À chaque push sur GitHub**, Vercel déploiera automatiquement une nouvelle version.

## 👨‍💻 Auteur

Ce projet a été développé dans le cadre d'un processus de recrutement.

**Compétences démontrées** :
- Maîtrise de React.js et Tailwind CSS
- Capacité à reproduire fidèlement une maquette
- Structuration modulaire d'une application
- Déploiement et intégration continue
- Documentation technique complète

---

**Note** : Les images utilisées dans ce projet sont des placeholders. Pour un déploiement en production, il faudrait remplacer ces placeholders par les images réelles de l'ONG.