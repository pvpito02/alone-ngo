# Alone NGO - Site Web

Ce projet est une reproduction fidèle de la maquette du site web de l'ONG Alone, réalisée avec React.js et CSS.

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

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)](https://nodejs.org/)

Ce projet est une reproduction fidèle de la maquette du site web de l'ONG Alone, réalisée avec **React.js** et **CSS**. Le site est entièrement responsive et optimisé pour une excellente expérience utilisateur sur tous les appareils.

## 📋 Table des matières

- [Présentation du projet](#-présentation-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Aperçu](#-aperçu)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Pourquoi React.js ?](#-pourquoi-reactjs-)
- [Installation et configuration](#-installation-et-configuration)
- [Commandes disponibles](#-commandes-disponibles)
- [Composants détaillés](#-composants-détailés)
- [Responsive Design](#-responsive-design)
- [Accessibilité](#-accessibilité)
- [Performance](#-performance)
- [Déploiement](#-déploiement)
- [Contribuer](#-contribuer)
- [Licence](#-licence)
- [Auteur](#-auteur)

## 🎯 Présentation du projet

Alone est une organisation non gouvernementale (ONG) dédiée à l'aide humanitaire et au développement durable. Ce site web a été conçu pour présenter nos actions, nos valeurs et nos objectifs, tout en offrant une plateforme pour nos donateurs et bénévoles.

### 🌟 Fonctionnalités principales

- **Interface utilisateur moderne et intuitive**
- **Design responsive** adapté à tous les appareils
- **Navigation fluide** entre les différentes sections
- **Mise en avant des campagnes** en cours
- **Boutique solidaire** pour soutenir nos actions
- **Espace actualités** pour suivre nos activités
- **Formulaire de contact** et d'inscription à la newsletter

### 🎨 Aperçu

![Aperçu du site](public/alone-img/hero-bg.jpeg)

*Capture d'écran de la page d'accueil*

## 🛠 Technologies utilisées

- **Frontend:**
  - React.js 18.2.0
  - React Router pour la navigation
  - CSS3 pour le style
  - Flexbox et Grid pour les mises en page
  - Animations CSS pour une meilleure expérience utilisateur

- **Outils de développement:**
  - Create React App
  - NPM pour la gestion des paquets
  - Git pour le contrôle de version
  - ESLint pour la qualité du code
  - Prettier pour le formatage

- **Performances et accessibilité:**
  - Chargement paresseux (lazy loading) des images
  - Optimisation des ressources
  - Compatibilité avec les lecteurs d'écran
  - Navigation au clavier

## 📁 Structure du projet

```
alone-ngo/
├── public/                     # Fichiers statiques
│   ├── index.html             # Point d'entrée HTML
│   ├── manifest.json          # Configuration PWA
│   └── alone-img/             # Dossier des images
│       ├── hero-bg.jpeg       # Image de fond du héros
│       └── ...                # Autres images
│
├── src/
├── .gitignore                # Fichiers ignorés par Git
├── package.json              # Dépendances et scripts
├── README.md                 # Ce fichier
└── ...
```

## 🚀 Installation et configuration

### Prérequis

- Node.js (version 16 ou supérieure)
- npm (version 8 ou supérieure) ou yarn

### Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/alone-ngo.git
   cd alone-ngo
   ```

2. Installer les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Démarrer l'application en mode développement :
   ```bash
   npm start
   # ou
   yarn start
   ```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ⚙️ Commandes disponibles

- `npm start` - Démarrer l'application en mode développement
- `npm test` - Lancer les tests
- `npm run build` - Créer une version de production
- `npm run eject` - Éjecter de Create React App (attention, action irréversible)
- `npm run lint` - Vérifier la qualité du code

## 🎨 Personnalisation

### Variables d'environnement

Créez un fichier `.env` à la racine du projet pour définir vos variables d'environnement :

```env
REACT_APP_API_URL=https://api.votreserveur.com
REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXX-X
```

### Thèmes et styles

Les styles sont organisés de manière modulaire dans chaque dossier de composant. Pour modifier les couleurs principales, mettez à jour les variables CSS dans `src/index.css`.

## 📱 Responsive Design

Le site est conçu pour s'adapter à toutes les tailles d'écran :

- **Mobile** (< 768px) : Navigation simplifiée, mise en page sur une colonne
- **Tablette** (768px - 1024px) : Adaptation des grilles et des espacements
- **Desktop** (> 1024px) : Expérience complète avec animations

## ♿ Accessibilité

Le site a été conçu en suivant les meilleures pratiques d'accessibilité :

- Structure sémantique HTML5
- Navigation au clavier
- Contraste des couleurs conforme aux normes WCAG 2.1
- Attributs ARIA pour les composants interactifs
- Texte alternatif pour les images

## ⚡ Performance

Optimisations mises en place :

- Chargement paresseux des images
- Découpage du code (code splitting)
- Mise en cache des ressources statiques
- Compression des actifs
- Optimisation des images

## 🚀 Déploiement

### Autres options de déploiement

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Votre Nom**
- GitHub: [@pvpito02](https://github.com/pvpito02/alone-ngo)
- Email: votre.email@exemple.com
- Site web: https://alone-ngo-mu.vercel.app/

## 🙏 Remerciements

- Tous les contributeurs qui ont participé au projet
- La communauté React pour son incroyable écosystème
- Les organisations qui nous inspirent par leur travail humanitaire
└── README.md
```

## 🛠 Technologies utilisées

- **Frontend:**
  - React.js 18.2.0 - Bibliothèque JavaScript pour construire des interfaces utilisateur réactives
  - React Router - Gestion de la navigation côté client
  - CSS3 - Styles et animations modernes
  - Flexbox/Grid - Mise en page avancée
  - ES6+ - Dernières fonctionnalités JavaScript

- **Outils de développement:**
  - Create React App - Configuration initiale du projet
  - NPM/Yarn - Gestion des dépendances
  - Git - Contrôle de version




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

1. **Installez Vercel** :

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


### Synchronisation GitHub et Vercel

1. **Poussez votre code sur GitHub** :
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/pvpito02/alone-ngo
git push -u origin main
```

2. **Connectez Vercel à votre dépôt GitHub** :
- Allez sur [vercel.com](https://alone-ngo-mu.vercel.app/)
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