var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    hosts: ['http://localhost:9292'],
    log: 'trace'
});

module.exports = client;  