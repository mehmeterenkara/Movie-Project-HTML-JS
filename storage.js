function Storage() {

}
Storage.prototype.addMovieToStorage = function(newMovie) {
    let movies = this.getMoviesFromStorage();

    movies.push(newMovie);

    localStorage.setItem("movies", JSON.stringify(movies));
}
Storage.prototype.getMoviesFromStorage = function() {
    let movies;

    if(localStorage.getItem("movies") === null) {
        movies = [];
    }
    else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }

    return movies;
}
Storage.prototype.deleteMovieFromStorage = function(movieTitle) {
    let movies = this.getMoviesFromStorage();
    
    movies.forEach(function(movie, index) {
        if(movie.title === movieTitle) {
            movies.splice(index, 1);
        }
    });

    localStorage.setItem("movies", JSON.stringify(movies));
}
Storage.prototype.clearAllMoviesFromStorage = function() {
    localStorage.removeItem("movies");
}