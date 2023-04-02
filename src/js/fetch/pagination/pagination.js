import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { moviesApiService } from '../fetch';
import {
  moviesGalleryRef,
  renderTrandingMovies,
  renderMoviesMarkup,
} from '../gallery-movies-markup';

const paginationEL = document.querySelector('.tui-pagination');

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

const pagination = new Pagination(paginationEL, options);

pagination.on('afterMove', async event => {
  moviesApiService.page = event.page;
  moviesGalleryRef.innerHTML = '';
  const movies = await moviesApiService.fetchTrendingMovies();
  console.log(movies);
  renderTrandingMovies(movies);
  // console.log(moviesApiService.page);
});
