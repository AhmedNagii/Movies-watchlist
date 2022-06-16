const apiKey = "a02b3192";
const  moviesContainer = document.getElementById('movies-container')
let moviesTitles = [];



document.getElementById("search").addEventListener("click", () => {
  moviesContainer.innerHTML = ` `
  moviesTitles = []
  const userInput = document.getElementById("user-input").value;
  fetch(`http://www.omdbapi.com/?s=${userInput}&type=movie&apikey=${apiKey}`)
  .then((res) => res.json())
  .then((movies) => {
    for(let movie of movies.Search) {
      moviesTitles.push(movie.imdbID)
    }
    renderMovies()
  })
});

function renderMovies() {
  for(let moviesIds of moviesTitles) {
    fetch(`http://www.omdbapi.com/?i=${moviesIds}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      return moviesContainer.innerHTML += `
        <div class="movie">
          <img src="${data.Poster}" class="movie-poster">
          <div>
          <div class="flex-row">
            <h2 class="movie-title">${data.Title}</h2>
            <p>${data.Ratings[0].Value}⭐</p>
          </div>
          <div class="flex-row">
            <p class="movie-length">${data.Runtime}</p>
            <p class="movie-type">${data.Genre}</p>
            <button class="addtolist-btn"><i class="fa fa-plus-square"></i> Watchlist</button>
          </div>
          <p class="movie-description">${data.Plot}</p>
         </div>
       </div>`

    })
  }
}
