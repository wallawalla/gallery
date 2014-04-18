gallery
=======

application test pour gestion d'images

############################################

Récupérer et installer le projet en local
=================================================

#### Pré-requis:
Vérifiez que vous avez NodeJS, Phonegap, Cordova:
* NodeJS => [Get it here!](http://nodejs.org/)
* Phonegap => npm install -g phonegap (uniquement après avoir installé NodeJS)
* Cordova => npm install -g cordova

#### Etape 1:
Récupérer le projet par ligne de commande :
    **git clone https://github.com/wallawalla/gallery**

#### Etape 2:
En ligne de commande, se placer dans le dossier web et lancer :
    **npm install**
    **bower install**

#### Etape 3:
Faire un premier test sur navigateur :
    **grunt serve**

#### Etape 4:
Installer ensuite au moins une plateforme pour déployer sur device (android/ios) :
    **cordova platforms add android**
    **cordova platforms add ios**

#### Etape 5:
Lancer le build sur device:
    **grunt android**
    **grunt ios**