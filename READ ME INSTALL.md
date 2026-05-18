- Avant de lancer le projet, assurez-vous d'avoir installé sur votre machine :

  	MySQL (serveur actif)

    	Java (JDK 17 ou supérieur)

    	Maven

   	 Node.js et npm

    	Ionic CLI (npm install -g @ionic/cli)


-Etape 1 : initialiser la BDD

	Ouvrez votre SGBD (ex: MySQL Workbench).

	Ouvrez le script SQL fourni (ex: SQL Init.sql).

	Exécutez le script en entier pour créer la base cesizen et insérer le jeu d'essai.

	(Note : Vérifiez que les identifiants de la BDD dans 	CesizenBase/src/main/resources/application.properties correspondent à votre 	configuration locale).

-Etape 2 : Lancement du back End
	ouvrez un terminal
	executez les commandes suivantes :

	cd chemin/vers/CesizenBase
	mvn clean install
	mvn spring-boot:run

	l'api tourne normalement sur http://localhost:8080
	pour vérifier, connectez vous à la page http://localhost:8080/api/activites

-Etape 3 : Lancement front End
	Ouvrez un nouveau terminal (sans fermer celui de l'API)

	executez les commandes suivantes : 

	cd chemin/vers/CesiZenApp
	npm install
	ionic serve

	L'application va s'ouvrir automatiquement dans votre navigateur web