let api = 'https://www.omdbapi.com/?apikey=58099032&t=';


const btn = document.getElementById("btn");
const title = document.getElementById("title");
const date = document.getElementById("date");
const director = document.getElementById("director");
const actors = document.getElementById("actors");
const genre = document.getElementById("genre");
const desc = document.getElementById("desc");
const collection = document.getElementById("collection");
const awards = document.getElementById("awards");
const writer = document.getElementById("writer");
const ratings = document.getElementById("ratings");
let img = document.getElementById("img");
let container = document.getElementById('container');
container.classList.add('d-none');
let loader = document.getElementById('animation-loader');
loader.classList.add('d-none');

searchMovies = () => {
    loader.classList.remove('d-none')
    let movieName = document.getElementById("movieName");
    let querry = api+movieName.value;
    // console.log(querry);
    fetch(querry).then((data) => {
        return data.json();
    }).then((data) => {
        loader.classList.add('d-none')
        container.classList.remove('d-none');
        title.innerText = data.Title;
        date.innerText = data.Released;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        genre.innerText = data.Genre;
        desc.innerText = data.Plot;
        collection.innerText = data.BoxOffice;
        awards.innerText = data.Awards;
        writer.innerText = data.Writer;
        ratings.innerText = data.imdbRating;
        img.src = data.Poster;
    });
}