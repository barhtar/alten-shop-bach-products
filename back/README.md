# Back-end
les étapes à suivre:
- executer "npm i" depuis le directory /back;
- executer "npm run dev" (le front va appeller le get /product mais n'aura aucun produit);
- executer "npm run dev-seed" afin d'alimenter la bdd avec les fixtures recupérés du front;
- maintenant que l'api fonctionne bien, on peut la tester soit avec des appels curl depuis le terminal, ou bien la tester avec des tests postma. Les tests postman peuvent étre recupérer depuis back/test_postman, et importer sur postman en tant que collection. Ces tests permettent de tester toutes les méthodes demandées pour l'endpoint /products.