# Projet Boardgame

Ce projet est une API REST pour gérer une collection de jeux de sociétés

# Stack technique

- [NodeJS](https://nodejs.org/en/download/) (v12 ou supérieures)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 ou supérieures)
- [Sqitch](https://sqitch.org/download/) (v1 ou supérieure)

Ces outils sont nécessaires à l'installation et au fonctionnement de l'API.  
A installer avant de continuer

# Installation

CLoner le dépôt en local

```bash
git clone git@github.com:O-clock-Sinbad/boardgame-Nicoclock.git
```

Puis dans le dossier local, installer les dépendances npm

```bash
npm install
```

Mettre en place les fichiers .env et sqitch.conf en s'appuyant sur les fichiers .example fournis dans le dépôt

Enfin, créer une base de données PostgreSQL et déployer le projet sqitch dessus

```bash
createdb boardgame
sqitch deploy db:pg:boardgame
```

Configurer PostgreSQL (ou fournir les variables d'environnement nécessaires) pour que les commmandes `createdb` et `sqitch` puissent s'exécuter correctement

# Données de démonstation

Afin de mettre en place quelques données de test, lancer depuis le dossier du dépôt

```bash
psql -d boardgame -f ./data/boardgameSeed.sql
```

# Lancement

```bash
npm start
```
