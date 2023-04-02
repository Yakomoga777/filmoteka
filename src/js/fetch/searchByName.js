import { moviesApiService } from './fetch';
import { moviesGalleryRef } from './gallery-movies-markup';
import { Notify } from 'notiflix';

const searchForm = document.querySelector('.search-form');

async function onSearch(e) {
  e.preventDefault();
  moviesApiService.query = searchForm.elements.searchQuery.value.trim();
  console.log(moviesApiService.searchQuery);
  try {
    if (moviesApiService.query === '') {
      Notify.info('Please type something');
      return;
    } else {
      clearFilmsGallery();
      moviesApiService.resetPage();
      const movies = await moviesApiService.fetchMoviesByName();
      movies.results.length !== 0
        ? renderMovies(movies.results)
        : Notify.failure('Oops! There is no film with such name');
      searchForm.reset();
      console.log(movies.results);
    }
  } catch (error) {
    console.log(error.message);
  }
}

function renderMovies(arr) {
  moviesGalleryRef.insertAdjacentHTML('beforeend', renderMoviesMarkup(arr));
}

function renderMoviesMarkup(arr) {
  // movies.forEach(movie => {
  //   const gendersIs = genres.filter(genre => {
  //     movie.genres_ids.include(genre.id);
  //   });
  // });
  return arr
    .map(({ poster_path, id, original_title, release_date }) => {
      let urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

      return `<li class="list_film_item" data-id="${id}">
		            <img src="${urlImg}" alt="img of film" width="395"/>
	              <p class="card__title">${original_title}</p>
	              <div class="card__info">
                  <p class="card__genres">| ${new Date(
                    release_date
                  ).getFullYear()}</p>
                </div>
		        </li>`;
    })
    .join('');
}

function clearFilmsGallery() {
  moviesGalleryRef.innerHTML = '';
}

searchForm.addEventListener('submit', onSearch);
