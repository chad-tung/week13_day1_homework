//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();


filmRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json(films);
});

filmRouter.get('/', function(req, res) {
  res.json(films);
});

filmRouter.get('/:id', function(req, res) {
  res.json(films[req.params.id]);
});

filmRouter.put("/:id", function(req, res) {
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmRouter.delete("/:id", function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
});



// filmRouter.get('')

module.exports = filmRouter;
