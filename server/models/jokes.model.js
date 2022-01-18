const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    title: String,
    joke: String
    },
    { timestamps: true }
);

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;