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
    .map(
      ({
        poster_path,
        id,
        original_title,
        release_date,
        genre_ids,
        original_language,
        title,
      }) => {
        let urlImg = '';
        let movieTitle = '';
        let movieGenresTitle = '';

        original_language !== 'en'
          ? (movieTitle = title)
          : (movieTitle = original_title);

        poster_path
          ? (urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`)
          : (urlImg =
              'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...');

        const includeGenres = genres.filter(genre =>
          genre_ids.includes(genre.id)
        );

        const listOfGenres = includeGenres.map(genre => genre.name);

        listOfGenres.length > 3
          ? (movieGenresTitle =
              listOfGenres.slice(0, 2).join(', ') + ', ' + 'Other')
          : (movieGenresTitle = listOfGenres.join(', '));

        return `<li class="list_film_item" data-id="${id}">
                <img src="${urlImg}" alt="img of film" width="395"/>
                <p class="card__title">${movieTitle}</p>
                <div class="card__info">
                  <p class="card__genres">${movieGenresTitle} | ${
          release_date.slice(0, 4) ?? ''
        }</p>
                </div>
            </li>`;
      }
    )
    .join('');

  moviesGalleryRef.insertAdjacentHTML('beforeend', markup);
}
