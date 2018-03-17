// routes/note_routes.js
/*module.exports = function (app, db) {
    app.post('/populate', (req, res) => {
        // You'll create your note here.
        res.send('Hello')
    });
});*/


module.exports = function (app) {
    var library = require('../controllers/carController');

    //Ajoute le json dans ElasticSearch
    app.route('/populate')
        .post(library.addDocument);

    //Retourne les données récupérées depuis ElasticSearch
    /*app.route('/suv')
        .get(library.getDisk)
        .put(library.editDisk)
        .delete(library.deleteDisk);*/
};