import {moviesApiService} from '../fetch/fetch';

const cardsFilms = document.querySelectorAll('.list_film_item');
const modalEl = document.querySelector('div[data-modal]');
const modalWindow = document.querySelector('.details-modal');
const buttonClose = document.querySelector('.close-button');

const genres = [
    {
    "id": 28,
    "name": "Action"
    },
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 16,
    "name": "Animation"
    },
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 80,
    "name": "Crime"
    },
    {
    "id": 99,
    "name": "Documentary"
    },
    {
    "id": 18,
    "name": "Drama"
    },
    {
    "id": 10751,
    "name": "Family"
    },
    {
    "id": 14,
    "name": "Fantasy"
    },
    {
    "id": 36,
    "name": "History"
    },
    {
    "id": 27,
    "name": "Horror"
    },
    {
    "id": 10402,
    "name": "Music"
    },
    {
    "id": 9648,
    "name": "Mystery"
    },
    {
    "id": 10749,
    "name": "Romance"
    },
    {
    "id": 878,
    "name": "Science Fiction"
    },
    {
    "id": 10770,
    "name": "TV Movie"
    },
    {
    "id": 53,
    "name": "Thriller"
    },
    {
    "id": 10752,
    "name": "War"
    },
    {
    "id": 37,
    "name": "Western"
    }
    ]

function renderCard(data) {
    let genresFilm=[];
    for (genre of data.genres) {
        genresFilm.push(genre.name);
    }
    console.log(genresFilm);
    const oneCard = `<button class="close-button" type="button" data-modal-close>
    <svg width="30px" height="30px">
      <use href="./images/icons.svg#icon-close-modal"></use>
    </svg>
  </button>
  <div class="cover-thumb">
    <img
      class="cover"
      src="https://image.tmdb.org/t/p/w500/${data.poster_path}"
      alt="${data.title}"
      loading="lazy"
    />
  </div>
  <div class="film-interface">
    <p class="film-interface__title">${data.title}</p>
    <div class="film-info">
      <div class="categories-item">
        <p class="category-name">Vote / Votes</p>
        <div class="categories-item__votes">
          <span class="vote">${data.vote_average}</span>
          <span class="slash">/</span>
          <span class="votes">${data.vote_count}</span>
        </div>
      </div>
      <div class="categories-item">
        <p class="category-name">Popularity</p>
        <p class="categories-item__rating">${data.popularity}</p>
      </div>
      <div class="categories-item">
        <p class="category-name">Original Title</p>
        <p class="categories-item__original-title">${data.original_title}</p>
      </div>
      <div class="categories-item">
        <p class="category-name">Genre</p>
        <p class="categories-item__genre">${genresFilm.join(', ')}</p>
      </div>
    </div>
    <p class="film-interface__about-title">About</p>
    <p class="film-interface__about-desc">
    ${data.overview}
    </p>
    <div class="modal-buttons">
      <button class="modal-buttons__watched" type="button">
        Add to watched
      </button>
      <button class="modal-buttons__queue" type="button">Add to queue</button>
    </div>
  </div>`
  modalWindow.insertAdjacentHTML('beforeend', oneCard);
}

for (const card of cardsFilms) {
    card.addEventListener('click', function onClick() {
    modalEl.classList.remove('is-hidden');
    const id=550;
    moviesApiService
        .fetchFilmDetails(id)
        .then(data=>renderCard(data))
        .catch((error)=>console.log(error));
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modalEl.classList.add('is-hidden');
            modalWindow.innerHTML='';
        };
    });
    modalEl.addEventListener('click', function clickOnBackdrop(e) {
        if (e.target===e.currentTarget) {
            modalEl.classList.add('is-hidden');
            modalWindow.innerHTML='';
        };
    });
    buttonClose.addEventListener('click', function() {
        modalEl.classList.add('is-hidden');
        modalWindow.innerHTML='';
    })
  });
}