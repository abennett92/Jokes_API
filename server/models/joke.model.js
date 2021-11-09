const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    joke:{
        type: String,
        required:[true, "A joke is required!"],
        minlength: [10, "Must be at least 10 characters!"]
    },
    comedian:{
        type:String,
        required:[true, "Cannot be left anonymous."]
    }
})

const Joke = mongoose.model("Joke", JokesSchema)

module.exports = Joke;