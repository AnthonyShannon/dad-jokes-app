const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
    jokeBody: { type: String, required: true },
    punchline: { type: String, required: false },
    approved: { type: Boolean, required: true, default: false }
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;