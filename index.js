const apiKey = "a02b3192";
const  moviesContainer =   document.getElementById('any')
let moviesTitles = [];

document.getElementById("search").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  fetch(`http://www.omdbapi.com/?s=${userInput}&type=movie&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.Search.length; i++) {
        moviesTitles.push(data.Search[i].imdbID);
      }

     getEachMovieInfo();
    });
});



function getEachMovieInfo() {
  let listItems ="";

  for (let i = 0; i < 10; i++) {
    
    fetch(
       `http://www.omdbapi.com/?i=${moviesTitles[i]}&apikey=${apiKey}`
     
    )
      .then((res) => res.json())
      .then((data) => {
      console.log(data.Title)
        listItems  = listItems +`
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
        </div>`;

          console.log(listItems );

      }); 
  }
 
  moviesContainer.textContent = listItems
// console.log(=listItems );
  
}
