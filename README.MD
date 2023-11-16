# Easy Quiz

Easy Quiz est une application Symfony permettant de générer des quiz de manière aléatoire avec ChatGPT. L'application utilise le framework Symfony 6 combiné à ReactJS.

## Installation

Avant de commencer, assurez-vous d'avoir [Composer](https://getcomposer.org/) installé sur votre machine.

1. Clonez le repository dans le répertoire de votre choix :

```bash
git clone https://github.com/Ludo-Dpe/Easy-Quiz.git
```
2. Accédez au répertoire du projet :
```bash
cd Easy-Quiz
```
3. Installez les dépendances à l'aide de Composer :
```bash
composer install
```
```bash
composer require "symfony/webpack-encore-bundle"
```
```bash
composer require symfony/ux-react
```
```bash
composer require "openai-php/symfony"
```
```bash
npm install -D @babel/preset-react --force
```
```bash
npm install @mui/material @emotion/react @emotion/styled
```

4. Créez la base de données et appliquez les migrations :
```bash
php bin/console doctrine:database:create
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```
5. Configurez votre base de données dans le fichier .env en renseignant les informations nécessaires ainsi que votre clef "OPENAI_API_KEY="
```bash
DATABASE_URL="mysql://root:@127.0.0.1..."
"OPENAI_API_KEY="
```

6. Lancez le serveur de développement Symfony :
```bash
php bin/console server:run
```
Accédez à l'application dans votre navigateur à l'adresse http://localhost:8000.

## Tutoriel Vidéo

Consultez ce **tutoriel vidéo** pour une démonstration visuelle du projet Easy Quiz

[![Tutoriel Vidéo](https://maroc-diplomatique.net/wp-content/uploads/2023/03/Image3-2.jpg)](https://youtu.be/sTdjMmZpM_o){:target="_blank"}
.

