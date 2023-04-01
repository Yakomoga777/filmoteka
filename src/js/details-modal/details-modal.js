import {moviesApiService} from '../fetch/fetch';

const cardsFilms = document.querySelectorAll('.list_film_item');
const modalEl = document.querySelector('div[data-modal]');
const modalWindow = document.querySelector('.details-modal');
const buttonClose = document.querySelector('.close-button');
console.log(buttonClose);

function renderCard(data) {
    modalWindow.innerHTML='';
    let genresFilm=[];
    for (genre of data.genres) {
        genresFilm.push(genre.name);
    }
    const oneCard = `
    <button class="close-button" type="button" data-modal-close>
      <svg width="30px" height="30px">
        <use href="/icons.adfc4680.svg#icon-close-modal"></use>
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
    card.addEventListener('click', function onClick(e) {
        modalEl.classList.remove('is-hidden');
        const id=e.target.id;
        moviesApiService
            .fetchFilmDetails(id)
            .then(data=>renderCard(data))
            .catch((error)=>console.log(error));
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modalEl.classList.add('is-hidden');
            };
        });
        modalEl.addEventListener('click', function clickOnBackdrop(e) {
            if (e.target===e.currentTarget) {
                modalEl.classList.add('is-hidden');
            };
        });
        buttonClose.addEventListener('click', function() {
            modalEl.classList.add('is-hidden');
            console.log('click');
        })
  })
}