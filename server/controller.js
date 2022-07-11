
 const movieInfo = require('./db.json')
 let movieId = 4
 let favoriteMovies = []
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["An important person will offer you support.", "Any decision you have to make tomorrow is a good decision.", "Chance favors those in motion.", "someone will make your day soon", "Your kindness will bless others."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    },
   
    getMovies: (req, res) => {
           
     res.status(200).send(movieInfo);
    },

   

    createMovie: (req, res) => {
        const {name, year, imageURL} = req.body
        let newMovie = {
            id: movieId,
            name,
            year,
            imageURL,
            fave: false
            
        }

        movieInfo.push(newMovie)
        movieId += 1
        res.status(200).send(movieInfo)
    },

    deleteMovie: (req, res) => { 
        console.log(req.params.id)
        let index = movieInfo.findIndex((el)=> {return +el.id === +req.params.id})
        movieInfo.splice(index, 1)
        res.status(200).send(movieInfo)
        
    },

    makeFave: (req, res) => { 
        console.log(req.params.id)
        let index = movieInfo.findIndex((el)=> {return +el.id === +req.params.id})
        movieInfo[index].fave = true
        console.log(movieInfo[index].fave)
        favoriteMovies.push(movieInfo[index].name)
        res.status(200).send(movieInfo)
        console.log(favoriteMovies)
        


    }

    




}