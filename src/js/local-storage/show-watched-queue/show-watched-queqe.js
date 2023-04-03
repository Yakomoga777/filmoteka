import { moviesApiService } from '../../fetch/fetch';

const listFilms = document.querySelector('.list_film');

// watchedBtn = document.querySelector('button[data-action="watched"]');
// qeueBtn = document.querySelector('button[data-action="queue"]');

// watchedBtn.addEventListener('click', handleClickWatched);
// qeueBtn.addEventListener('click', handleClickQueue);

let moviesArray;

function handleClickWatched() {
    listFilms.innerHTML = '';
    moviesArray = JSON.parse(localStorage.getItem('watched-movies-array'));
    fetchingMovies(moviesArray);
}

function handleClickQueue() {
    listFilms.innerHTML = '';
    moviesArray = JSON.parse(localStorage.getItem('queue-movies-array'));
    fetchingMovies(moviesArray);
}

function fetchingMovies(array) {
    for (const movie of array) {
    moviesApiService
        .fetchFilmDetails(movie.id)
        .then(data => renderMovie(data))
        .catch(error => console.log(error));
}
}

function renderMovie(data) {
    const {
        poster_path,
        id,
        original_title,
        release_date,
        genres,
        original_language,
        title,
    } = data; 
    
    let genresFilm = [];
    for (let genre of genres) {
        genresFilm.push(genre.name);
    }

    let urlImg = '';
    let movieTitle = '';

    original_language !== 'en'
        ? (movieTitle = title)
        : (movieTitle = original_title);

    poster_path
        ? (urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`)
        : (urlImg =
            'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...');

    
    const markup = `
        <li class="list_film_item" data-id="${id}">
            <img src="${urlImg}" alt="img of film" width="395"/>
            <p class="card__title">${movieTitle}</p>
            <div class="card__info">
                <p class="card__genres">${genresFilm.join(', ')} | ${
                    release_date.slice(0, 4) ?? ''
                }</p>
            </div>
        </li>`;
    
    listFilms.insertAdjacentHTML('beforeend', markup);
}


  
