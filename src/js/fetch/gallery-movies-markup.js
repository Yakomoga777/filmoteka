import { create } from 'lodash';
import { moviesApiService } from './fetch';

const moviesGalleryRef = document.querySelector('.list_film');

renderTrandingMovies();

async function renderTrandingMovies() {
  const { results } = await moviesApiService.fetchTrendingMovies();
  console.log(results);
  renderMoviesMarkup(results);
  console.log(renderMoviesMarkup(results));
}

function renderMoviesMarkup(movies) {
  const markup = movies
    .map(movie => {
      let urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      return `<li>
		<img src="${urlImg}"
      		alt="img of film" width="395"/>
	 <p class="card__title">${movie.original_title}</p>
	 <div class="card__info">
      <p class="card__genres">| ${movie.release_date.slice(0, 4)}</p>
    </div>

		</li>`;
    })
    .join('');

  console.log(markup);

  moviesGalleryRef.insertAdjacentHTML('beforeend', markup);
}