const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-movies");

const ui = new UI();

const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addMovie);
    
    document.addEventListener("DOMContentLoaded", function() {
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMovies(movies);
    });

    cardbody.addEventListener("click", deleteMovie);
    clear.addEventListener("click", clearAllMovies);
}

function addMovie(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "") {
        ui.displayMessages("Fill in all fields...", "danger");
    }
    else {
        const newMovie = new Movie(title, director, url);

        ui.addMovieToUI(newMovie);
        storage.addMovieToStorage(newMovie);
        ui.displayMessages("Movie successfully added...", "success");
    }

    ui.clearInput(titleElement, urlElement, directorElement);
    
    e.preventDefault();
}

function deleteMovie(e) {
    if(e.target.id === "delete-movie") {
        ui.deleteMovieFromUI(e.target);
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessages("Deletion successful...", "success");
    }
}

function clearAllMovies() {
    if(confirm("Are you sure ?")) {
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
    }

    
}