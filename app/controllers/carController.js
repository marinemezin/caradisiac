var errorHandler = require('../handlers/errorHandler');

var elasticsearch = require('elasticsearch');
var fs = require('fs');

exports.brandFile = function (req, res) {
    const { getBrands } = require('node-car-api');

    async function getAllBrands() {
        const brands = await getBrands();
        var json = {
            "name": brands
        };
        fs.writeFile('brands.json', JSON.stringify(json, null, 4), 'utf8', function (error) { });
        res.json({ message: "brands saved"});
    }
    getAllBrands();
}

exports.modelJson = function (req, res) {
    var jsonData = fs.readFileSync('brands.json', "utf8");
    var data = JSON.parse(jsonData);
    var datas = data.name;

    const { getModels } = require('node-car-api');

    var fulljson = [];
    async function getAllModels() {
        res.json({ message: "models are saving..." });
        for (var i = 0; i < datas.length; i++) {
            var models = await getModels(datas[i]);
            if (models != []) {
                for (var j = 0; j < models.length; j++) {
                    fulljson.push(models[j]);
                }
            }
        }
        fs.writeFile('models.json', JSON.stringify(fulljson, null, 4), 'utf8', function (error) { });
        console.log("finish");
    }
    getAllModels();
}

exports.addDocument = function (req, res) {
    var jsonData = fs.readFileSync('models.json', "utf8");
    var datas = JSON.parse(jsonData);

    var body = [];
    for (var i = 0; i < datas.length; i++) {
        var config = { index: { _index: 'cars', _type: 'car', _id: i } };
        body.push(config);
        body.push(datas[i]);
    }

    var client = new elasticsearch.Client({
        hosts: 'localhost:9200',
        log: 'trace'
    });

    client.bulk({
        body: body
    }, function (error, response) {
        if (error) {
            //console.error(error);
            return;
        }
        else {
            //console.log(response);
        }
    });
    res.json({message: "data saved"});
}

exports.searchInfo = function (req, res) {
    var client = new elasticsearch.Client({
        hosts: 'localhost:9200',
        log: 'trace'
    });

    var body_mapping = {
        properties: {
            "volume": {
                "type": "text",
                "fielddata": true
            }
        }
    }
    client.indices.putMapping({
        index: 'cars',
        type: 'car',
        body: body_mapping
    }, function (err, resp, status) {
        if (err) {
            //console.log(err);
        }
        else {
            //console.log(resp);
        }
    });

    var body = {
        sort: {
            "volume": { "order": "desc" }
        }
    };
    client.search({
        index: 'cars',
        type: 'car',
        body: body
    }).then(function (resp) {
        var result = resp.hits.hits;
        var listof10 = [];
        for (var i = 0; i < 10; i++) {
            listof10.push(result[i]);
        }
        resp.hits.hits = listof10;
        resp.hits.total = 10;
        res.json(resp);
    }, function (err) {
        console.trace(err.message);
    });
}