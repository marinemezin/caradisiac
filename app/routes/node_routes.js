module.exports = function (app) {
    var library = require('../controllers/carController');

    //Ajoute le json dans ElasticSearch
    app.route('/populate')
        .post(library.addDocument);

    //Retourne les données récupérées depuis ElasticSearch
    app.route('/suv')
        .get(library.searchInfo);
};