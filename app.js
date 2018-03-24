var express = require('express');
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 9292;

var routes = require('./app/routes/node_routes');
routes(app);

app.listen(port, () => {
    console.log('We are live on ' + port);
});