module.exports = function (app) {
    var library = require('../controllers/carController');

    //Ajoute le json dans ElasticSearch
    app.route('/populate')
        .post(library.addDocument);

    //Retourne les donn�es r�cup�r�es depuis ElasticSearch
    app.route('/cars')
        .get(library.searchInfo);

    //Enregistre toutes les marques dans un fichier json
    app.route('/brands')
        .post(library.brandFile);

    //enregistre tous les mod�les dans un fichier json
    app.route('/models')
        .post(library.modelJson);
};