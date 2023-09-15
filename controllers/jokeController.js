const db = require("../models");

// Defining methods for the JokeController
module.exports = {
    findAll: function (req, res) {
        db.Joke.find(req.query)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Joke.findById(req.params.id)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Joke.create(req.body)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Joke.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Joke.findById(req.params.id)
            .then(dbJoke => dbJoke.remove())
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));
    }
};