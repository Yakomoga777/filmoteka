import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const container = document.querySelector('.tui-pagination');
import { moviesApiService } from '../fetch/fetch';
import { clearFilmsGallery } from './render';
import { fetchFilmography } from './render';

const options = {
  itemsPerPage: 20,
  visiblePages: 5,
  page: moviesApiService.page,
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

export const pagination = new Pagination(container, options);
pagination.on('beforeMove', async e => {
  moviesApiService.page = e.page;
  clearFilmsGallery();
  fetchFilmography();
});

let totalItemsFromServer;
export const init = async total => {
  if (total === undefined && !totalItemsFromServer)
    totalItemsFromServer = await moviesApiService.fetchTrendingMovies();

  if (total === undefined) total = totalItemsFromServer.total_results;

  pagination.setTotalItems(total);
  pagination.reset();
};

init();
