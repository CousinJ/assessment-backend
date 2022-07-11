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
    axios.get("http://localhost:4000/api/movies/")
        .then(res => {
            console.log(res.data)
    });
};


//===================================================
const baseURL = `http://localhost:4000/api/movies`

const moviesContainer = document.querySelector('#movies-container')
const form = document.querySelector('form')


const MovieCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err)


// axios requests 
const getAllmovies = () => axios.get(baseURL).then(MovieCallback).catch(errCallback)
const createMovie = body => axios.post(baseURL, body).then(MovieCallback).catch(errCallback)
const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(MovieCallback).catch(errCallback)
const makeFave = id => axios.put(`${baseURL}/${id}`).then(MovieCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let year = document.querySelector('#year')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        year: year.value, 
        imageURL: imageURL.value
    }

    createMovie(bodyObj)

    name.value = ''
    yearReleased.value = ''
    imageURL.value = ''
}
function createMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `<img alt='movie cover image' src=${movie.imageURL} class="movie-cover-image"/>
    <p class="name">${movie.name}</p>
    <div class="btns-container">
        <p class="movie-year">${movie.yearReleased}</p>
        
    </div>
    <button onclick="deleteMovie(${movie.id})">delete</button>
    <button onclick="makeFave(${movie.id})">Favorite</button>
    `
    

    moviesContainer.appendChild(movieCard)
}

function displayMovies(arr) {
    moviesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMovieCard(arr[i])
    }
}

getAllmovies()


form.addEventListener('submit', submitHandler)
fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
favoriteBtn.addEventListener('click', getFavorites)