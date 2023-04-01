import {moviesApiService} from '../fetch/fetch';

const cardsFilms = document.querySelectorAll('.list_film_item');
const modalEl = document.querySelector('div[data-modal]');
const modalWindow = document.querySelector('.details-modal');
const buttonClose = document.querySelector('.close-button');

for (const card of cardsFilms) {
    card.addEventListener('click', function onClick() {
    modalEl.classList.remove('is-hidden');
    const id=550;
    moviesApiService
        .fetchFilmDetails(id)
        .then(data=>console.log(data))
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
    })
  });
}