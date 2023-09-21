const db = require("../models");

// Defining methods for the JokeController
module.exports = {
    findAll: (req, res) => {
        db.Jokes.find({ approved: true }, { jokeBody: 1, punchline: 1, })
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(418).json(err));
    },
    findAllUnapproved: (req, res) => {
        db.Jokes.find({ approved: false }, { "_id": 1, approved: 1, jokeBody: 1, punchline: 1, })
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(418).json(err));
    },
    findById: (req, res) => {
        db.Jokes.findById(req.params.id)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(418).json(err));
    },
    create: (req, res) => {
        db.Jokes.create(req.body)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(418).json(err));
    },
    update: (req, res) => {
        db.Jokes.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(418).json(err));
    },
    remove: (req, res) => {
        db.Jokes.findById(req.params.id)
            .then(dbJoke => dbJoke.remove())
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(418).json(err));
    }
};