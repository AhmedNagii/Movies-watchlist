const apiKey = 'a02b3192';







document.getElementById('search').addEventListener('click', ()=>{
    const userInput = document.getElementById('user-input').value
    fetch(`http://www.omdbapi.com/?t=${userInput}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
})