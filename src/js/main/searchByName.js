import { fetchFilmography } from './render';
import { moviesApiService } from '../fetch/fetch';
const searchForm = document.querySelector('.search-form');
const notification = document.querySelector('.search-notification');

export async function onSearch(event) {
  event.preventDefault();

  moviesApiService.query = searchForm.elements.searchQuery.value.trim();
  const movies = await moviesApiService.fetchMoviesByName();
  try {
    if (moviesApiService.query === '' || movies.results.length === 0) {
      notification.classList.remove('hide-notification');
      return;
    } else {
      notification.classList.add('hide-notification');
      moviesApiService.page = 1;
      fetchFilmography();
      searchForm.reset();
      notification.classList.add('hide-notification');
      searchForm.reset();
    }
  } catch (error) {
    console.log(error.message);
  }
}

searchForm.addEventListener('submit', onSearch);
