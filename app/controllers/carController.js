//Utils
var errorHandler = require('../handlers/errorHandler');

var connection = require('../../docs/js/connection');
var elasticsearch = require('elasticsearch');

var nodeCarApi = require('node-car-api');

exports.addDocument = function (req, res) {
    //To test the route
    //res.json({ message: "populate yes" });

    /*const { getBrands } = require('node-car-api');

    async function print() {
        const brands = await getBrands();

        //res.json({ brands: brands}); //retourne un objet comprenant la liste des brands
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
    
    /*const {getModels} = require('node-car-api');

    async function print () {   
        const models = await getModels('PEUGEOT');

        console.log(models);
    }
    print();*/
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
    //res.json({ message: "populate yes" });
    //A SUPPR var nodeApi = require('node-car-api');

    /*var getTheModels = function (i, brands) {
        return Promise.resolve(brands[i]);
    };
    var findModels = function (brand) {
        return new Promise(
            function (resolve, reject) {
                //var models = await nodeCarApi.getModels(brand);
                var models = [];
                var jsonData = {
                    brand: brand,
                    models: models.model
                }
                console.log("Brand : " + brand);
                console.log("Model : " + models.model + '\n');
                resolve(jsonData);
            });
    };*/

    //Ok pour récupérer les données dans un json
    async function getTheBrands() {
        var fullJson = [];
        var brands = await nodeCarApi.getBrands();
        for (var i = 0; i < /*brands.length*/1; i++){
            var models = await nodeCarApi.getModels(brands[i]);
            if (models != []) {
                for (var j = 0; j < models.length; j++) {
                    fullJson.push(models[j]);
                }
            }
        }
        console.log(fullJson);
        saveElastic(fullJson);
    }
    getTheBrands();
    //res.json({ message: "Saving..." });
    /*async function getTheBrands() {
        var fullJson = { "caradisiac": [] };
        var brands = await nodeCarApi.getBrands();
        for (var i = 0; i < brands.length; i++){
            getTheModels(i, brands)
                .then(findModels)
                .then(function (fulfilled) {
                    fullJson.push(fulfilled);
                    //console.log(fullJson);
                })
                .catch(function (error) {
                    errorHandler.error;
                });
        }
    }*/
    
    function saveElastic(jsonDoc) {
        var body = [];
        for (var i = 0; i < jsonDoc.length; i++) {
            //var numberId = jsonDoc[i].uuid;
            //delete jsonDoc[i].uuid;
            var config = { index: { _index: 'cars', _type: 'car', _id: i } };
            body.push(config);
            body.push(jsonDoc[i]);
        }

        var client = new elasticsearch.Client({
            hosts: ['http://localhost:9292'],
            log: 'trace'
        });
        //console.log("step1");
        /*client.indices.create({
            index: 'cars'
        }).then(function (resp) {
            res.status(200)
            return res.json(resp)
            }, function (error, response) {
                if (error) {
                    console.error(error);
                    return;
                }
                else {
                    console.log(response);
                }
            });*/
        //console.log("step2");
        /*client.indices.exists({
            index: 'cars'
        }).then(function (resp) {
            // console.log(resp);
            res.status(200);
            return res.json(resp)
            }, function (error, response) {
                if (error) {
                    console.error(error);
                    return;
                }
                else {
                    console.log(response);
                }
            });*/
        //console.log("step3");
        /*client.indices.putMapping({
            index: 'cars',
            type: 'car',
            body: {
                properties: {
                    'brand': {
                        'type': 'string'
                    },
                    'model': {
                        'type': 'string'
                    },
                    'volume': {
                        'type': 'int'
                    },
                    'uuid': {
                        'type': 'string'
                    },
                    'name': {
                        'type': 'string'
                    }
                }
            }
        }, function (error, response) {
            if (error) {
                console.error(error);
                return;
            }
            else {
                console.log(response);
            }
        });*/
        console.log("step4");
        /*client.indices.create({
                index: 'cars',
                mapping: {
                    car: {
                        'brand': {
                            'type': 'string'
                        },
                        'model': {
                            'type': 'string'
                        },
                        'volume': {
                            'type': 'int'
                        },
                        'uuid': {
                            'type': 'string'
                        },
                        'name': {
                            'type': 'string'
                        }
                    }
                }
            });*/
        console.log("step5");
        /*function addToIndex(addElement) {
            var numberId = addElement.uuid;
            delete addElement.uuid;
            return client.index({
                index: 'cars',
                type: 'car',
                id: numberId,
                body: addElement
            });
        }*/

        /*for (var i = 0; i < jsonDoc.length; i++) {
            //var config = { index: { _index: 'cars', _type: 'car', _id: i } };
            body.push(config);
            body.push(jsonDoc[i]);
        }*/

        /*function search() {
            return client.search({
                index: 'cars',
                q: 'huhu'
            }).then(log);
        }*/
        var indexName = "cars";
        function deleteIndex() {
            return client.indices.delete({
                index: indexName
            });
        }

        function initIndex() {
            return client.indices.create({
                index: indexName
            });
        }

        function indexExists() {
            return client.indices.exists({
                index: indexName
            });
        }
        
        function initMapping() {
            return client.indices.putMapping({
                index: indexName,
                type: "document",
                body: {
                    properties: {
                        brand: {
                            'type': 'string'
                        },
                        model: {
                            'type': 'string'
                        },
                        volume: {
                            'type': 'int'
                        },
                        uuid: {
                            'type': 'string'
                        },
                        name: {
                            'type': 'string'
                        }
                    }
                }
            });
        }
        /*function addDocument(document) {
            return client.index({
                index: indexName,
                type: "document",
                body: {
                    title: document.title,
                    content: document.content,
                    suggest: {
                        input: document.title.split(" "),
                        output: document.title,
                        payload: document.metadata || {}
                    }
                }
            });
        }*/

        //Code
        if (indexExists()) {
            deleteIndex();
        }
        if (initIndex()) {
            if (initMapping()) {
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
                });
            }
        }

        /*client.bulk({
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
        
        client.close();
        res.json({ message: "Data saved" });
    }
}

exports.searchInfo = function (req, res/*, indexName, docType, payload*/) {

    var client = new elasticsearch.Client({
        hosts: ['http://localhost:9292'],
        log: 'trace'
    });

    /*res.json(client.search({
            index: 'cars'
    }));*/

    //client.close();
    client.search({
        index: 'cars',
        type: 'document',
        body: {
            query: {
                match_all: {}
            }
        }
    });

    client.close();
}

/*
exports.addInfos = function(req, res) {
  var newAlbum = new Album(req.body);
  newAlbum.save().then(function(album) {
     res.status(201).json(album);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to create new album.");
  });
};*/

//client.index.create
//Si il existe on ne le créé pas
//Ensuite c'est mieux de bulk un à un plutôt que tout d'un coup mon kiki