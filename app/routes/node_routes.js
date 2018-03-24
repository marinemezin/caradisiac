module.exports = function (app) {
    var library = require('../controllers/carController');

    //Ajoute le json dans ElasticSearch
    app.route('/populate')
        .post(library.addDocument);

    //Retourne les données récupérées depuis ElasticSearch
    app.route('/cars')
        .get(library.searchInfo);

    //Enregistre toutes les marques dans un fichier json
    app.route('/brands')
        .post(library.brandFile);

    //enregistre tous les modèles dans un fichier json
    app.route('/models')
        .post(library.modelJson);
};