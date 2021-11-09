const mongoose = require('mongoose');

//mongoose connect and config
mongoose.connect('mongodb://localhost/Joke_API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));