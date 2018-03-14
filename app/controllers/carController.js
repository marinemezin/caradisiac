//Utils
var errorHandler = require('../handlers/errorHandler.js');

//Model
var Album = db.model('Albums');

/*
exports.addInfos = function(req, res) {
  var newAlbum = new Album(req.body);
  newAlbum.save().then(function(album) {
     res.status(201).json(album);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to create new album.");
  });
};*/