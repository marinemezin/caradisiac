//Utils
var errorHandler = require('../handlers/errorHandler');

var connection = require('../../docs/js/connection');
var client = connection.client;

exports.addDocument = function (req, res) {
    res.json({ message: "populate yes" });
    /*const { getBrands } = require('node-car-api');

    async function print() {
        const brands = await getBrands();

        console.log(brands);
    }
    print();*/
    /*const {getModels} = require('node-car-api');

    async function print () {   
        const models = await getModels('PEUGEOT');

        console.log(models);
    }
    print();*/
    /*var cars = "";
    //cars contiendra le document json
    var body = [];
    for (var i = 0; i < cars.length; i++) {
        delete cars[i]._id;
        var config = { index: { _index: 'cars', _type: 'car', _id: i } };
        body.push(config);
        body.push(cars[i]);
    }

    client.bulk({
        body: body
    }, function (error, response) {
        if (error) {
            console.error(error);
            return;
        }
        else {
            console.log(response);
        }
    });*/
}

exports.searchInfo = function (req, res/*, indexName, docType, payload*/) {
    res.json({message:"search info yes"});
    /*client.search({
        index: indexName,
        type: docType,
        body: payload
    }).then(function (resp) {
        console.log(resp);
        return res.json(resp)
    }, function (err) {
        console.log(err.message);
        return res.json(err.message)*/
    }/*)*/;

/*
exports.addInfos = function(req, res) {
  var newAlbum = new Album(req.body);
  newAlbum.save().then(function(album) {
     res.status(201).json(album);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to create new album.");
  });
};*/