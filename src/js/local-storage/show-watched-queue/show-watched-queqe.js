import { Notify } from 'notiflix/build/notiflix-notify-aio';

const listFilms = document.getElementById('listMoviesLibrary');

let getWatched;
let getQueue;
let moviesArray;

const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');

if (watchedBtn && queueBtn) {
  watchedBtn.addEventListener('click', handleClickWatched);
  queueBtn.addEventListener('click', handleClickQueue);

  watchedBtn.click();
  watchedBtn.classList.add('header__active-btn');
}

function handleClickWatched() {
  getWatched = JSON.parse(localStorage.getItem('watched-movies-array'));

  if (!getWatched || []) {
    Notify.info('There is nothing on your watch list');
  }
  else {
    listFilms.innerHTML = '';
    renderMovies(getWatched);
  }
}

function handleClickQueue() {
  watchedBtn.classList.remove('header__active-btn');
  
  getQueue = JSON.parse(localStorage.getItem('queue-movies-array'));
  
  listFilms.innerHTML = '';

  if (!getQueue || []) {
    Notify.info('You have not added any movies to the queue');
  }
  else renderMovies(getQueue);
}

function renderMovies(movies) {
  const markup = movies
    .map(
      ({
        poster_path,
        id,
        original_title,
        release_date,
        genres,
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


        const listOfGenres = genres.map(genre => genre.name);

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
