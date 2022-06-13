const apiKey = 'a02b3192';







document.getElementById('search').addEventListener('click', ()=>{
    const userInput = document.getElementById('user-input').value
    fetch(`http://www.omdbapi.com/?t=${userInput}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
      document.getElementById('movies-container').innerHTML=
  
      
      `<div id="movie">
      <img src="${data.Poster}" id="movie-poster">
        <div>
        <div class="flex-row">
        <h2 id="movie-title">${data.Title}</h2>

        <p>${data.Ratings[0].Value}⭐</p>
        </div>
        <div class="flex-row">
         <p id="movie-length">${data.Runtime}</p>
         <p id="movie-type">${data.Genre}</p>
         <button class="addtolist-btn"><i class="fa fa-plus-square"></i> Watchlist</button>
        </div>
        <p id="movie-description">${data.Plot}</p>
        </div>`
    })
})

document.getElementById('movies-container')




