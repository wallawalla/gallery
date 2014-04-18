gallery
=======

application test pour gestion d'images



Récupérer et installer le projet en local
=========================================

#### Pré-requis:
Vérifiez que vous avez NodeJS, Phonegap, Cordova:
* NodeJS => [Get it here!](http://nodejs.org/)
* Phonegap => npm install -g phonegap (uniquement après avoir installé NodeJS)
* Cordova => npm install -g cordova

#### Etape 1:
Récupérer le projet par ligne de commande :

    git clone https://github.com/wallawalla/gallery

#### Etape 2:
En ligne de commande, se placer dans le dossier web et lancer :

    npm install

    bower install

#### Etape 3:
Faire un premier test sur navigateur :

    grunt serve

_Attention: la ligne **this.start(self);** est à décommenter dans le fichier **approuter.js** pour que l'appli fonctionne sur navigateur._

#### Etape 4:
Retourner dans le dossier parent de "web" et créer un dossier platforms (dans lequel seront créées les plateformes de device à tester) :

    cd ..
    mkdir platforms

#### Etape 5:
Installer au moins une plateforme (android/ios/...) :

    cordova platforms add android
    cordova platforms add ios

#### Etape 5:
Se replacer dans le dossier web et lancer le build sur device:

    cd web
    grunt android
    grunt ios

_Attention: vous pouvez recommenter la ligne **this.start(self);** dans le fichier **approuter.js** avant de la déployer sur device._