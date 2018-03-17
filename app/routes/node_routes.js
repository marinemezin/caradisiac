module.exports = function (app) {
    var library = require('../controllers/carController');

    //Ajoute le json dans ElasticSearch
    app.route('/populate')
        .post(library.addDocument);

    //Retourne les donn�es r�cup�r�es depuis ElasticSearch
    app.route('/suv')
        .get(library.searchInfo);
};