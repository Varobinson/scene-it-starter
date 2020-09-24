const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function(e){
    function renderMovies(movieData){
        const movieHtmlArray = movieData.map((currentMovie) => {
            console.log(currentMovie.Title)
            return `<div class="movie col-4" >
            <div class="card results" style="width: 18rem;">
              <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <p class="card-text">${currentMovie.Year}</p>
                <button type="button" class="btn btn-primary"  onclick="saveToWatchlist('${currentMovie.imdbID}')">ADD!</button>
              </div>
            </div>
            </div>`
        })
        const movie = document.querySelector('.movies-container');
        movie.innerHTML = movieHtmlArray.join('');
        
    }
    renderMovies(movieData)
    e.preventDefault();
    
    const searchString = $('.form-control').val()
    const  urlEncodedSearchString = encodeURIComponent(searchString)

})
function saveToWatchlist(imdbID){
  const movie = movieData.find((currentMovie) =>{
    return currentMovie.imdbID == imdbID;

  });
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist === null){
     watchlist = []
    
  }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

