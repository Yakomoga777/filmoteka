import { moviesApiService } from './fetch';
import { moviesGalleryRef } from './gallery-movies-markup';
import { genres } from './genres';

const searchForm = document.querySelector('.search-form');
const notification = document.querySelector('.search-notification');

async function onSearch(e) {
  e.preventDefault();
  moviesApiService.query = searchForm.elements.searchQuery.value.trim();
  const movies = await moviesApiService.fetchMoviesByName();
  try {
    if (moviesApiService.query === '' || movies.results.length === 0) {
      notification.classList.remove('hide-notification');
      return;
    } else {
      notification.classList.add('hide-notification');
      clearFilmsGallery();
      moviesApiService.resetPage();
      renderMovies(movies.results);
      console.log(movies.results);
      notification.classList.add('hide-notification');
      searchForm.reset();
    }
  } catch (error) {
    console.log(error.message);
  }
}

function renderMovies(arr) {
  moviesGalleryRef.insertAdjacentHTML('beforeend', renderMoviesMarkup(arr));
}

function renderMoviesMarkup(arr) {
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
          genre_ids.includes(genre.id)
        );
        const listOfGenres = includeGenres.map(genre => genre.name).join(', ');

        return `<li class="list_film_item" data-id="${id}">
		            <img src="${urlImg}" alt="img of film" width="395"/>
	              <p class="card__title">${movieTitle}</p>
	              <div class="card__info">
                  <p class="card__genres">${listOfGenres} | ${(release_date =
          new Date(release_date).getFullYear()
            ? new Date(release_date).getFullYear()
            : '')}</p>
                </div>
		        </li>`;
      }
    )
    .join('');
}

function clearFilmsGallery() {
  moviesGalleryRef.innerHTML = '';
}

searchForm.addEventListener('submit', onSearch);
