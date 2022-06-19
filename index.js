const apiKey = "a02b3192";
const  moviesContainer = document.getElementById('movies-container')
let moviesIds = [];



document.getElementById("search").addEventListener("click", () => {
  moviesContainer.innerHTML = ` `
  moviesIds = []
  const userInput = document.getElementById("user-input").value;
  fetch(`http://www.omdbapi.com/?s=${userInput}&type=movie&apikey=${apiKey}`)
  .then((res) => res.json())
  .then((movies) => {
    for(let movie of movies.Search) {
      moviesIds.push(movie.imdbID)
    }
 
    renderMovies()
  
  })
});

function renderMovies() {

  for(let movieId of moviesIds) {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
       moviesContainer.innerHTML += `
        <div  class="movie">
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
       addToWishlist()
    })
  }
  
}
function addToWishlist (){

  var objects = document.getElementsByClassName("addtolist-btn");

  for (var obj of objects) {
   obj.addEventListener('click', ()=>{
   console.log()
   })
}
  
  
}


