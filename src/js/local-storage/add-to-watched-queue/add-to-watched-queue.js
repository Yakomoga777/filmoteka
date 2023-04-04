// export const STORAGE_KEY_W = 'watched-movies-array';
// export const STORAGE_KEY_Q = 'queue-movies-array';

// clearLocalStorage()
// function clearLocalStorage() {
//     localStorage.removeItem(STORAGE_KEY);
// }

// document.addEventListener('click', onCardClick);

// function onCardClick(e) {
//   const movie = e.target.closest('li');
//   if (!movie) {
//     return;
//   }
//   const filmId = movie.dataset.id;
//   setTimeout(() => {
//     const addWachedBtn = document.querySelector('.modal-buttons__add-watched');
//     const addQueueBtn = document.querySelector('.modal-buttons__add-queue');
//     const removeWatchedBtn = document.querySelector(".modal-buttons__remove-watched");
//     const removeQueueBtn = document.querySelector(".modal-buttons__remove-queue");
//     addWachedBtn.addEventListener('click', onAddWatch);
//     addQueueBtn.addEventListener('click', onAddQueue);

//     function onAddWatch() {
//       addToLocalStorage(movie, filmId, STORAGE_KEY_W);
//       addWachedBtn.classList.add("hide-button");
//       addQueueBtn.classList.remove("hide-button");
//       removeWatchedBtn.classList.remove("hide-button");
//       removeQueueBtn.classList.add("hide-button");
//     }

//     function onAddQueue() {
//       addToLocalStorage(movie, filmId, STORAGE_KEY_Q);
//       addWachedBtn.classList.remove("hide-button");
//       addQueueBtn.classList.add("hide-button");
//       removeWatchedBtn.classList.add("hide-button");
//       removeQueueBtn.classList.remove("hide-button");
//     }
//   }, 400);
// }

// function addToLocalStorage(film, id, key) {
//   const storedItems = JSON.parse(localStorage.getItem(key)) || [];

//   if (!storedItems.some(storedItem => storedItem.id === id)) {
//     console.log({ id });
//     console.log(film);
//     storedItems.push({ id });
//     localStorage.setItem(key, JSON.stringify(storedItems));
//     console.log('Film added to local storage!');
//   } else {
//     console.log('Filmm already exists in local storage!');
//   }
// }

// ----------- запис усього обʼєкта у localStorage -----------
import { moviesApiService } from '../../fetch/fetch';

// кнопка watched
export const STORAGE_KEY_W = 'watched-movies-array';
export const STORAGE_KEY_Q = 'queue-movies-array';

document.addEventListener('click', onCardClick);

async function onCardClick(e) {
  const movieLi = e.target.closest('li');
  if (!movieLi) {
    return;
  }

  const filmId = Number(movieLi.dataset.id);

  const { results } = await moviesApiService.fetchTrendingMovies(); //масив усіх фільмів на цій сторінці

  let movie;

  results.some(movieObject => {
    if (filmId === movieObject.id) {
      movie = movieObject;
      console.log(movie);
      return true;
    }
  });

  setTimeout(() => {
    const addWachedBtn = document.querySelector('.modal-buttons__add-watched');
    const addQueueBtn = document.querySelector('.modal-buttons__add-queue');
    const removeWatchedBtn = document.querySelector(".modal-buttons__remove-watched");
    const removeQueueBtn = document.querySelector(".modal-buttons__remove-queue");

    addWachedBtn.addEventListener('click', () => {
      try {
        const storedItems =
          JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

        if (!storedItems.some(storedItem => storedItem.id === filmId)) {
          
          storedItems.push(movie);

          try {
            localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
            addWachedBtn.classList.add("hide-button");
            addQueueBtn.classList.remove("hide-button");
            removeWatchedBtn.classList.remove("hide-button");
            removeQueueBtn.classList.add("hide-button");
          } catch (error) {
            console.error('Error adding film to local storage:', error);
          }

          // ---------- тимчасово
          console.log('Film added to local storage!');
        } else {
          // ---------- тимчасово
          console.log('Filmm already exists in local storage!');
        }
      } catch (error) {
        console.error('Error retrieving films from local storage:', error);
      }
    });

    addQueueBtn.addEventListener('click', () => {
      try {
        const storedItems =
          JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

        if (!storedItems.some(storedItem => storedItem.id === filmId)) {
          storedItems.push(movie);

          try {
            localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
            addWachedBtn.classList.remove("hide-button");
            addQueueBtn.classList.add("hide-button");
            removeWatchedBtn.classList.add("hide-button");
            removeQueueBtn.classList.remove("hide-button");
          } catch (error) {
            console.error('Error adding film to local storage:', error);
          }

          // ---------- тимчасово
          console.log('Film added to local storage!');
        } else {
          // ---------- тимчасово
          console.log('Filmm already exists in local storage!');
        }
      } catch (error) {
        console.error('Error retrieving films from local storage:', error);
      }
    });
  }, 400);
}

// ------------ без setTimeout, не працює

// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('click', onCardClick);
// });

// async function onCardClick(e) {
//   const movieLi = e.target.closest('li');
//   if (!movieLi) {
//     return;
//   }

//   const filmId = Number(movieLi.dataset.id);
//   const { results } = await moviesApiService.fetchTrendingMovies(); //масив усіх фільмів на цій сторінці
//   let movie;

//   results.some(movieObject => {
//     if (filmId === movieObject.id) {
//       movie = movieObject;
//       return true;
//     }
//   });

//   const addWachedBtn = document.querySelector('.modal-buttons__watched');
//   const addQueueBtn = document.querySelector('.modal-buttons__queue');

//   addWachedBtn.addEventListener('click', () => {
//     try {
//       const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

//       if (!storedItems.some(storedItem => storedItem.id === filmId)) {
//         storedItems.push(movie);

//         try {
//           localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
//         } catch (error) {
//           console.error('Error adding film to local storage:', error);
//         }

//         // ---------- тимчасово
//         console.log('Film added to local storage!');
//       } else {
//         // ---------- тимчасово
//         console.log('Filmm already exists in local storage!');
//       }
//     } catch (error) {
//       console.error('Error retrieving films from local storage:', error);
//     }
//   });

//   addQueueBtn.addEventListener('click', () => {
//     try {
//       const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

//       if (!storedItems.some(storedItem => storedItem.id === filmId)) {
//         storedItems.push(movie);

//         try {
//           localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
//         } catch (error) {
//           console.error('Error adding film to local storage:', error);
//         }

//         // ---------- тимчасово
//         console.log('Film added to local storage!');
//       } else {
//         // ---------- тимчасово
//         console.log('Filmm already exists in local storage!');
//       }
//     } catch (error) {
//       console.error('Error retrieving films from local storage:', error);
//     }
//   });
// }
