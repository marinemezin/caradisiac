var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    hosts: ['http://localhost:9292']
});

module.exports = client;  