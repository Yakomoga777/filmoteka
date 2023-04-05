
const listFilms = document.getElementById('listMoviesLibrary');

let getWatched;
let getQueue;
let activeTab = "watched";

const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');

const libraryPlug = document.querySelector('.library_text');


// Таким чином скрипт перевіряє чи він зараз в Library
if (listFilms) {
  libraryPlug.style.display = "none";

  watchedBtn.addEventListener('click', handleClickWatched);
  queueBtn.addEventListener('click', handleClickQueue);

  watchedBtn.click();
  watchedBtn.classList.add('header__active-btn');
}

function handleClickWatched() {
  activeTab = "watched";
  libraryPlug.style.display = "none";
  queueBtn.classList.remove('header__active-btn');
  getWatched = JSON.parse(localStorage.getItem('watched-movies-array'));

  listFilms.innerHTML = '';

  if (getWatched === null || getWatched == "") {
    libraryPlug.style.display = "block";
  }
  else {
    renderMovies(getWatched);
  }
}

function handleClickQueue() {
  activeTab = "queue";
  libraryPlug.style.display = "none";
  watchedBtn.classList.remove('header__active-btn');
  
  getQueue = JSON.parse(localStorage.getItem('queue-movies-array'));
  
  listFilms.innerHTML = '';

  if (getQueue === null || getQueue == "") {
    libraryPlug.style.display = "block";
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

export function refreshLibrary() {
  console.log(activeTab);
  if (activeTab === "watched") {
    watchedBtn.click();
    watchedBtn.classList.add('header__active-btn');
  }
  else {
    queueBtn.click();
    queueBtn.classList.add('header__active-btn');
  }
}