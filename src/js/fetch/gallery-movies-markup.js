import { create } from 'lodash';
import { moviesApiService } from './fetch';
import { genres } from './genres';

export const moviesGalleryRef = document.querySelector('.list_film');
renderTrandingMovies();

export async function renderTrandingMovies() {
  const results = await moviesApiService.fetchTrendingMovies();
  renderMoviesMarkup(results);
}

// функція рендерингу популярний фільмів
function renderMoviesMarkup(movies) {
  const markup = movies.results
    .map(({ poster_path, id, original_title, release_date, genre_ids }) => {
      let urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

      const includeGenres = genres.filter(genre =>
        genre_ids.includes(genre.id)
      );
      const listOfGenres = includeGenres.map(genre => genre.name).join(', ');

      return `<li class="list_film_item" data-id="${id}">
		            <img src="${urlImg}" alt="img of film" width="395"/>
	              <p class="card__title">${original_title}</p>
	              <div class="card__info">
                  <p class="card__genres">${listOfGenres} | ${
        release_date.slice(0, 4) ?? ''
      }</p>
                </div>
		        </li>`;
    })
    .join('');

  moviesGalleryRef.insertAdjacentHTML('beforeend', markup);
}
