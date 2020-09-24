const watchMoviesString = localStorage.getItem('watchlist');
const watchMovies = JSON.parse(watchMoviesString)

var mc = document.querySelector('.movies-container');
    function renderMovies(watchMovies){
        const movieHtmlArray = watchMovies.map((currentMovie) => {
            
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
    renderMovies(watchMovies)
    
    


