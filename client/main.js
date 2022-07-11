const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const favoriteBtn = document.getElementById("favoriteButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFavorites = () => {
    axios.get("http://localhost:4000/api/favorites/")
        .then(res => {
            const data = res.data;
            console.log(data);
    });
};

const addMovie = () => {
    axios.post("http://localhost:4000/api/favorites/", )
        .then(res => {
         
           
    });
};



fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
favoriteBtn.addEventListener('click', getFavorites)