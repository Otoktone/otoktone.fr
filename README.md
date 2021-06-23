# otoktone.fr
OpenClassrooms / Développeur Web Junior / Projet personnel

Présentez librement un projet personnel<br>

Organiser le code en langage PHP

- Charger automatique des classes ou utilisation de l'autoload de Composer<br>
- Séparer du code en respectant l'architecture MVC<br>
- Utiliser des exceptions pour gérer les erreurs<br>
- Utiliser des namespaces pour organiser les classes<br>
- Créer des templates HTML avec syntaxe PHP alternative ou Twig<br>

Organiser et manipuler les données

- Créer et manipuler une session<br>
- Valider des données côté serveur en PHP<br>
- Valider des données côté client en JavaScript<br>
- Créer de requêtes HTTP en JavaScript avec récupération de données en JSON (Ajax)<br>
- Créer une pagination des données<br>
- Envoyer des fichiers au serveur<br>

Sécuriser l'application

- Supprimer des injections XSS dans les données saisies puis réaffichées<br>
- Supprimer des injections SQL avec PDO<br>
- Créer de mots de passes sécurisés avec un hachage fiable<br>
- Créer un système de login / logout<br>

Spech Tech
- PHP Version 7.4.x
- MySQL 5.7 or greater
- Apache or Nginx
- Symfony 4.4.x

-----------------------------------------------------------

## Installation

* Prérequis à installer
  * PHP (ex: x64 Thread Safe ou Wampp)
  * Docker (ex: Docker desktop)
  * Nodejs + (`yarn` ou `npm`)
  * Symfony (CLI pour les intimes)
  * Un navigateur web
  * Un terminal pour executer des `commandes`
  * `symfony` == `php bin`

#### Verification
* Choisir [la bonne version de PHP]
  * `symfony local:php:list` (local web server)
  * `php -v` (composer version)
  
* Vérifer les prérequis Symfony
  * `symfony check:requirements`

#### Paramétrage
* Mettre à jour le fichier de config
  * Dupliquer le fichier .env -> .env.local
  * Mettre à jour les valeurs de variable (si besoin)

#### "Build front" du projet
* Récupérer les dépendances via Composer 
    * `composer install`

* Récupérer les dépendances via npm/yarn
    * `yarn install` (yarn.lock) Oui
    * `npm install` (package.lock) Non

* Compile assets once
  * `yarn encore dev`

-----------------------------------------------------------

#### Installation BDD
* Créer la base de données
  * `symfony console doctrine:database:create`
  * `php bin/console doctrine:database:create`
* Créer le schéma des tables
  * `symfony console doctrine:schema:create`
* Lancer les fixtures pour peupler la base
  * `symfony console doctrine:fixtures:load`

* Migration base de données (en cours de dev)
  * `symfony console make:migration`
  * `symfony console doctrine:migrations:migrate`

#### Commandes d'aide

* Recompile Front auto (en écoute)
  * `yarn encore dev --watch`
