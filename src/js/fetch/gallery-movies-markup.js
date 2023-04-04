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
        let year = '';

        original_language !== 'en'
          ? (movieTitle = title)
          : (movieTitle = original_title);

        poster_path
          ? (urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`)
          : (urlImg =
              'https://dummyimage.com/500x750/ff6b08/ffffff.jpg&text=Opps,+no+image...');

        const includeGenres = genres.filter(genre =>
          genre_ids.includes(genre.id)
        );

        const listOfGenres = includeGenres.map(genre => genre.name);
        listOfGenres.length > 3
          ? (movieGenresTitle =
              listOfGenres.slice(0, 2).join(', ') + ', ' + '...and others')
          : (movieGenresTitle = listOfGenres.join(', '));

        release_date ? (year = release_date.slice(0, 4)) : (year = '');

        return `<li class="list_film_item" data-id="${id}">
                    <div class="card">
                        <img class="card__img" src="${urlImg}" alt="img of film" width="395"/>
                        <p class="card__title">${movieTitle}</p>
                        <div class="card__info">
                            <p class="card__genres">${movieGenresTitle} | ${year}</p>
                        </div>
                    </div>
            </li>`;
      }
    )
    .join('');

  moviesGalleryRef.insertAdjacentHTML('beforeend', markup);
}
