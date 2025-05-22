const API_KEY = ""; // Add your API key

document.addEventListener('DOMContentLoaded', function () {
    fetchTopTenMovies();
});

function fetchTopTenMovies() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results.slice(0, 12));
        })
        .catch(error => console.error(error));
}

function displayMovies(movies) {
    let movieContainer = document.getElementById('movie-container');

    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        let movieCard = `
            <div class="flip flip-vertical">
                <div class="front">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>
                <div class="back">
                    <h2>${movie.title}</h2>
                    <p>Description: ${movie.overview}</p>
                    <p>Vote Average: ${movie.vote_average}</p>
                </div>
            </div>
        `;

        movieContainer.innerHTML += movieCard;
    });
}