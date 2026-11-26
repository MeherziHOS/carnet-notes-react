# Mon carnet de notes

Projet réalisé dans le cadre de ma formation Conceptrice développeuse d'Applications à l'AFPA.

## Description

Application de gestion de notes développée avec React et Vite.

## Fonctionnalités

- Ajouter une note
- Choisir une catégorie
- Supprimer une note
- Marquer une note comme importante
- Afficher la date de création
- Compter les notes et les notes importantes
- Valider les champs du formulaire
- Interface responsive et accessible

Les notes sont conservées en mémoire pendant la session.
Elles sont réinitialisées au rechargement de la page.

## Technologies

- React
- JavaScript / JSX
- Vite
- CSS Modules
- ESLint
- Prettier
- Git et GitHub

## Installation et lancement

Prérequis : Node.js 24 et npm 11 ou supérieur.

    npm install
    npm run dev

## Scripts disponibles

- npm run dev : lancer le serveur de développement
- npm run build : générer la version de production
- npm run preview : prévisualiser la version de production
- npm run lint : vérifier la qualité du code
- npm run format : formater le code
- npm run format:check : vérifier le formatage

## Organisation du projet

    src/
    ├── components/
    │   ├── Header.jsx
    │   ├── Header.module.css
    │   ├── NoteCard.jsx
    │   ├── NoteCard.module.css
    │   ├── NoteCounter.jsx
    │   ├── NoteCounter.module.css
    │   ├── NoteForm.jsx
    │   ├── NoteForm.module.css
    │   ├── NoteList.jsx
    │   └── NoteList.module.css
    ├── App.jsx
    ├── App.module.css
    ├── index.css
    └── main.jsx

## Formation

AFPA - CDA
Jalon 4 - React.js, les fondamentaux
