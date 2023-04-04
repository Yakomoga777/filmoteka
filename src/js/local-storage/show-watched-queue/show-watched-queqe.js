import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { genres } from '../../fetch/genres';


const listFilms = document.getElementById('listMoviesLibrary');

let getWatched;
let getQueue;
let moviesArray;

watchedBtn = document.querySelector('button[data-action="watched"]');
qeueBtn = document.querySelector('button[data-action="queue"]');


if (watchedBtn && qeueBtn) {
    watchedBtn.addEventListener('click', handleClickWatched);
    qeueBtn.addEventListener('click', handleClickQueue);

    watchedBtn.click()
    watchedBtn.classList.add('header__active-btn')

    getWatched = localStorage.getItem('watched-movies-array');
}
    

function handleClickWatched() {
    getWatched = localStorage.getItem('watched-movies-array');

    if (getWatched) {
        listFilms.innerHTML = '';
        moviesArray = JSON.parse(getWatched);
        renderMovies(moviesArray);
    }
    else Notify.info('There is nothing on your watch list yet');
}

function handleClickQueue() {
    watchedBtn.classList.remove('header__active-btn');
    getQueue = localStorage.getItem('queue-movies-array');
    listFilms.innerHTML = '';
    
    if (getQueue) {
        moviesArray = JSON.parse(getQueue);
        renderMovies(moviesArray);
    }
    else Notify.info('You have not added any movies to the queue yet');
}


function renderMovies(movies) {
  const markup = movies
    .map(
      ({
        poster_path,
        id,
        original_title,
        release_date,
        genre_ids,
        original_language,
        title,
      }) => {
        let urlImg = '';
        let movieTitle = '';
        let movieGenresTitle = '';

        original_language !== 'en'
          ? (movieTitle = title)
          : (movieTitle = original_title);

        poster_path
          ? (urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`)
          : (urlImg =
              'https://dummyimage.com/500x750/ff6b08/fff.jpg&text=Opps,+no+image...');

        const includeGenres = genres.filter(genre =>
          genre_ids.includes(genre.id)
        );

        const listOfGenres = includeGenres.map(genre => genre.name);

        listOfGenres.length > 3
          ? (movieGenresTitle =
              listOfGenres.slice(0, 2).join(', ') + ', ' + 'Other')
          : (movieGenresTitle = listOfGenres.join(', '));

        return `<li class="list_film_item" data-id="${id}">
                <img src="${urlImg}" alt="img of film" width="395"/>
                <p class="card__title">${movieTitle}</p>
                <div class="card__info">
                  <p class="card__genres">${movieGenresTitle} | ${
          release_date.slice(0, 4) ?? ''
        }</p>
                </div>
            </li>`;
      }
    )
    .join('');

  listFilms.insertAdjacentHTML('beforeend', markup);
}


  
