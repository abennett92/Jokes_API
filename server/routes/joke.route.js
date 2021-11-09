const JokeController = require("../controllers/joke.controller");

module.exports = app =>{

    //home
    app.get("/api",JokeController.helloworld);

    //create joke
    app.post("/api/jokes",JokeController.createNewJoke);
    
    //all jokes
    app.get("/api/jokes",JokeController.getAllJokes);

    //joke by id
    app.get("/api/jokes/:id",JokeController.getJokeById);
    
    //update joke
    app.put("/api/jokes/:id",JokeController.updateJoke);

    //delete joke
    app.delete("/api/jokes/:id",JokeController.deleteJoke);
}