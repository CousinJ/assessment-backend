const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment} = require('./controller')
const { getFortune} = require('./controller')
//===========================================
const { getMovies} = require('./controller')
const { createMovie} = require('./controller')
const { deleteMovie} = require('./controller')
const { makeFave} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
//=====================================

app.get("/api/movies", getMovies);
app.post(`/api/movies`, createMovie);
app.delete(`/api/movies/:id`, deleteMovie);
app.put(`/api/movies/:id`, makeFave);



app.listen(4000, () => console.log("Server running on 4000"));
