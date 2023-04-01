import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { moviesApiService } from '../fetch';

const galleryEl = document.querySelector('.list_film.list');
const paginationEL = document.querySelector('.tui-pagination');

console.log(moviesApiService.fetchTrendingMovies());

moviesApiService.fetchTrendingMovies().then(data => {
  galleryFilms(data);
});
function galleryFilms(data) {
    const pagN
  console.log(data.page);
  const markup = data.results
    .map(
      ({
        id,
        original_title,
        poster_path,
        title,
        genre_ids,
        release_date,
      }) => `<li class="list_film_item" data-id="${id}">
        <img src="${renderImg(
          poster_path
        )}" alt="${title}"  width="395" height="574" />
        <h2>${original_title}</h2>
        <p>${genre_ids} | ${release_date}
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  function renderImg(poster_path) {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    }
    return `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`;
  }
}

const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  usageStatistics: false,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(paginationEL, options);

let pagNumber = pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
});
// console.log(pagNumber);

// galleryEl.innerHTML = '';
// онулення сторінки
// CurrentPage;
// побудувати нову функцію для визову нової сторінки currentPage;
