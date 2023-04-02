import { create } from 'lodash';
import { moviesApiService } from './fetch';
import { genres } from './genres';
// console.log(genres);

export const moviesGalleryRef = document.querySelector('.list_film');

renderTrandingMovies();

export async function renderTrandingMovies() {
  const { results } = await moviesApiService.fetchTrendingMovies();
  // console.log(results);
  renderMoviesMarkup(results);
  // console.log(renderMoviesMarkup(results));
}

function renderMoviesMarkup(movies) {
  // movies.forEach(movie => {
  //   const gendersIs = genres.filter(genre => {
  //     movie.genres_ids.include(genre.id);
  //   });
  // });
  const markup = movies
    .map(({ poster_path, id, original_title, release_date }) => {
      let urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

      return `<li class="list_film_item" data-id="${id}">
		            <img src="${urlImg}" alt="img of film" width="395"/>
	              <p class="card__title">${original_title}</p>
	              <div class="card__info">
                  <p class="card__genres">| ${release_date.slice(0, 4)}</p>
                </div>
		        </li>`;
    })
    .join('');

  moviesGalleryRef.insertAdjacentHTML('beforeend', markup);
}
