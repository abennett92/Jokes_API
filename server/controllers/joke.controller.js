const Joke = require("../models/jokes.model")

module.exports.helloworld=(req,res) =>{
    res.json({message:"Welcome!"});
}

module.exports.createNewJoke=(req,res) =>{
    Joke.create(req.body)
    .then(newJokeObj=>{
        res.json({results:newJokeObj})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.getAllJokes=(req,res) =>{
    Joke.find()
    .then(allJokes=>{
        res.json({results:allJokes})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.getJokeById=(req,res)=>{
    Joke.findById({_id:req.params.id})
    .then(foundJoke=>{
        res.json({results: foundJoke})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.updateJoke = (req, res) => {
    Joke.findAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ result: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}