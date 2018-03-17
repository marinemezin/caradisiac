//Utils
var errorHandler = require('../handlers/errorHandler');

var connection = require('../../docs/js/connection');
var client = connection.client;

exports.addDocument = function (req, res) {
    //To test the route
    //res.json({ message: "populate yes" });

    /*const { getBrands } = require('node-car-api');

    async function print() {
        const brands = await getBrands();

        console.log(brands);
    }
    print();*/
    /*
    [ 'ABARTH',
      'AIXAM',
      'ALFA ROMEO',
      'ALPINA',
      'ALPINE',
      'ARO',
      'ASTON MARTIN',
      'AUDI',
      'BENTLEY',
      'BMW',
    ETC ]*/
    
    const {getModels} = require('node-car-api');

    async function print () {   
        const models = await getModels('PEUGEOT');

        console.log(models);
    }
    print();
    /*[{
        brand: 'PEUGEOT',
        model: 'Peugeot 108',
        volume: '196',
        uuid: 'fe0c59d6-1cb6-509d-983f-39b8730b5d60',
        name: '1.0 68 S&S ALLURE ETG5 5P'
    },
    {
        brand: 'PEUGEOT',
        model: 'Peugeot 2008',
        volume: '410',
        uuid: '9c572ceb-4f3b-5c80-981c-92590a4e03e4',
        name: '(2) 1.2 PURETECH 110 S&S 5CV ALLURE'
    },
    {
        brand: 'PEUGEOT',
        model: 'Peugeot 208',
        volume: '285',
        uuid: '9a888802-7d5c-51c5-a08d-0d64d12355f3',
        name: '(2) 1.2 PURETECH 110 S&S ALLURE 3P'
    },
    ETC]*/
    res.json({ message: "populate yes" });
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