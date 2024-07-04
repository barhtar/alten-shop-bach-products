# Back-end

Les étapes à suivre pour lancer l'API expressJS:

- executer "npm i" depuis le directory /back;
- executer "npm run dev" (le front va appeller le get /product mais n'aura aucun produit);
- executer "npm run dev-seed" afin d'alimenter la bdd avec les fixtures recupérés du front;
- maintenant que l'api fonctionne bien, on peut la tester soit avec des appels curl depuis le terminal, ou bien la tester avec des tests postma. Les tests postman peuvent étre recupérer depuis back/test_postman, et importer sur postman en tant que collection. Ces tests permettent de tester toutes les méthodes demandées pour l'endpoint /products.

L'arborescence de l'API':
- /Config: contient la configuration utilisée pour lancer les seeds
- /db: contient la configuration sequelize et les données fixtures à insérer
- /models: contient les models de données qui seront utilisées par l'ORM (dans notre use case, on a un seul model: product)
- /routes: contient la liste des methods ouvertes pour chaque endpoint, et fait le lien entre la méthode et le controller associé
- /seeders: conient la liste des seeders à lancer
- /test_postman: contient la liste des test postman  
