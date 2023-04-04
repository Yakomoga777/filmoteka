import { moviesApiService } from '../../fetch/fetch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const listFilms = document.querySelector('.list_film');

let getWatched;
let getQueue;
let moviesArray;

watchedBtn = document.querySelector('button[data-action="watched"]');
qeueBtn = document.querySelector('button[data-action="queue"]');

if (watchedBtn && qeueBtn) {
    watchedBtn.addEventListener('click', handleClickWatched);
    qeueBtn.addEventListener('click', handleClickQueue);

    getWatched = localStorage.getItem('watched-movies-array');

    if (getWatched) {
        listFilms.innerHTML = '';
        moviesArray = JSON.parse(getWatched);
        fetchingMovies(moviesArray);
    }
    else Notify.info('You have not added any movies to the queue yet');
}
    

function handleClickWatched() {
    getWatched = localStorage.getItem('watched-movies-array');

    if (getWatched) {
        listFilms.innerHTML = '';
        moviesArray = JSON.parse(getWatched);
        fetchingMovies(moviesArray);
    }
    else Notify.info('There is nothing on your watch list yet');
}

function handleClickQueue() {
    getQueue = localStorage.getItem('queue-movies-array');
    
    if (getQueue) {
        listFilms.innerHTML = '';
        moviesArray = JSON.parse(getQueue);
        fetchingMovies(moviesArray);
    }
    else Notify.info('You have not added any movies to the queue yet');
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


  
