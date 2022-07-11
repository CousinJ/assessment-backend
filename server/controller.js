
 const movieInfo = require('./db.json')

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
   
    getFavorites: (req, res) => {
           
     res.status(200).send(movieInfo);
    },



    




}