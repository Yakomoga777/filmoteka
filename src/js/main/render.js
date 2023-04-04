import { genres } from '../fetch/genres';
import { moviesApiService } from '../fetch/fetch';
const moviesGalleryRef = document.getElementById('listMoviesMain');
import { init } from './pagination';

start();

export default function start() {
  fetchFilmography();
}

export async function fetchFilmography() {
  if (moviesApiService.query !== '') {
    clearFilmsGallery();
    init();
    const movies = await moviesApiService.fetchMoviesByName();
    renderMovies(movies.results);
  } else {
    clearFilmsGallery();
    const movies = await moviesApiService.fetchTrendingMovies();
    renderMovies(movies.results);
  }
}

export function renderMovies(arr) {
  moviesGalleryRef.insertAdjacentHTML('beforeend', createMoviesMarkup(arr));
}

function createMoviesMarkup(arr) {
  return arr
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

        original_language !== 'en'
          ? (movieTitle = title)
          : (movieTitle = original_title);

        poster_path
          ? (urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`)
          : (urlImg =
              'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...');

        const includeGenres = genres.filter(genre =>
          genre_ids?.includes(genre.id)
        );
        const listOfGenres = includeGenres.map(genre => genre.name).join(', ');

        return `<li class="list_film_item" data-id="${id}">
		            <img src="${urlImg}" alt="img of film" width="395"/>
	              <p class="card__title">${movieTitle}</p>
	              <div class="card__info">
                  <p class="card__genres">${
                    (listOfGenres = listOfGenres) ? listOfGenres : ''
                  } | ${(release_date = release_date?.slice(0, 4)
          ? release_date.slice(0, 4)
          : '')}</p>
                </div>
		        </li>`;
      }
    )
    .join('');
}

export function clearFilmsGallery() {
  moviesGalleryRef.innerHTML = '';
}