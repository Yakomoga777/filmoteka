import { moviesApiService } from '../fetch/fetch';
import {onAddWatched} from '../local-storage/add-to-watched-queue/add-to-watched-queue';
import {onAddQueue} from '../local-storage/add-to-watched-queue/add-to-watched-queue';
import {onRemoveWatched} from '../local-storage/add-to-watched-queue/add-to-watched-queue';
import {onRemoveQueue} from '../local-storage/add-to-watched-queue/add-to-watched-queue';


const listFilms = document.querySelector('.list_film');
const modalEl = document.querySelector('div[data-modal]');
const modalWindow = document.querySelector('.details-modal');
let buttonClose;

function refresh() {
  setTimeout(function () {
    modalWindow.innerHTML = '';
  }, 250);
}

listFilms.addEventListener('click', function (e) {
  const movieId = e.target.closest('li').dataset.id;
  modalEl.classList.remove('is-hidden');
  moviesApiService
    .fetchFilmDetails(movieId)
    .then(data => renderCard(data))
    .catch(error => console.log(error));
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalEl.classList.add('is-hidden');
      refresh();
    }
  });
  
  modalEl.addEventListener('click', function clickOnBackdrop(e) {
    if (e.target === e.currentTarget) {
      modalEl.classList.add('is-hidden');
      refresh();
    }
  });
});

function renderCard(data) {
  let genresFilm = [];
  for (let genre of data.genres) {
    genresFilm.push(genre.name);
  }
  const oneCard = `
    <button class="close-button" type="button" data-modal-close></button>
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
          <span class="vote">${data.vote_average.toFixed(1)}</span>
          <span class="slash">/</span>
          <span class="votes">${data.vote_count}</span>
        </div>
      </div>
      <div class="categories-item">
        <p class="category-name">Popularity</p>
        <p class="categories-item__rating">${data.popularity.toFixed(1)}</p>
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
      <div class="modal-buttons__div">
        <button class="modal-buttons__add-watched" type="button">Add to watched</button>
        <button class="modal-buttons__remove-watched" type="button">Remove from watched</button>
      </div>
      <div class="modal-buttons__div">
        <button class="modal-buttons__add-queue" type="button">Add to queue</button>
        <button class="modal-buttons__remove-queue" type="button">Remove from queue</button>
      </div>
    </div>
  </div>`;
  modalWindow.insertAdjacentHTML('beforeend', oneCard);
  buttonClose = modalWindow.querySelector('.close-button');
  changeButtons(data.id, data);
  buttonClose.addEventListener('click', () =>{
    modalEl.classList.add('is-hidden');
    refresh();
  });
}

function changeButtons(id, data) {
  const btnAddWatched = document.querySelector(".modal-buttons__add-watched");
  const btnAddQueue = document.querySelector(".modal-buttons__add-queue");
  const btnRemoveWatched = document.querySelector(".modal-buttons__remove-watched");
  const btnRemoveQueue = document.querySelector(".modal-buttons__remove-queue");
  btnRemoveWatched.classList.add("hide-button");
  btnRemoveQueue.classList.add("hide-button");
  const arrayWatched = JSON.parse(localStorage.getItem('watched-movies-array'));
  const arrayQueue = JSON.parse(localStorage.getItem('queue-movies-array'));
  if (arrayWatched!==null) {
    for (let item of arrayWatched) {
        if (id===Number(item.id)) {
          btnRemoveWatched.classList.remove("hide-button");
          btnAddWatched.classList.add("hide-button");
          btnRemoveQueue.classList.add("hide-button");
          
        }
    }
  }
  if (arrayQueue!==null) {
    for (let item of arrayQueue) {
      if (id===Number(item.id)) {
        btnRemoveQueue.classList.remove("hide-button");
        
        btnAddQueue.classList.add("hide-button");
        
      }
    }
  }
  btnAddWatched.addEventListener("click", () => {
    const onAddingWatch = onAddWatched(data);
  });
  btnAddQueue.addEventListener("click", ()=>{
    const onAddingQueue = onAddQueue(data);
  })

  btnRemoveWatched.addEventListener("click", () => {
    onRemoveWatched(data);
  });
  btnRemoveQueue.addEventListener("click", ()=>{
    onRemoveQueue(data);
  })
}