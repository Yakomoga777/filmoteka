

// ----------- запис усього обʼєкта у localStorage -----------
// import { moviesApiService } from '../../fetch/fetch';

// // кнопка watched
// export const STORAGE_KEY_W = 'watched-movies-array';
// export const STORAGE_KEY_Q = 'queue-movies-array';

// document.addEventListener('click', onCardClick);

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
//       console.log(movie);
//       return true;
//     }
//   });

//   setTimeout(() => {
//     const addWachedBtn = document.querySelector('.modal-buttons__watched');
//     const addQueueBtn = document.querySelector('.modal-buttons__queue');

//     addWachedBtn.addEventListener('click', () => {
//       try {
//         const storedItems =
//           JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

//         if (!storedItems.some(storedItem => storedItem.id === filmId)) {
//           storedItems.push(movie);

//           try {
//             localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
//           } catch (error) {
//             console.error('Error adding film to local storage:', error);
//           }

//           // ---------- тимчасово
//           console.log('Film added to local storage!');
//         } else {
//           // ---------- тимчасово
//           console.log('Filmm already exists in local storage!');
//         }
//       } catch (error) {
//         console.error('Error retrieving films from local storage:', error);
//       }
//     });

//     addQueueBtn.addEventListener('click', () => {
//       try {
//         const storedItems =
//           JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

//         if (!storedItems.some(storedItem => storedItem.id === filmId)) {
//           storedItems.push(movie);

//           try {
//             localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
//           } catch (error) {
//             console.error('Error adding film to local storage:', error);
//           }

//           // ---------- тимчасово
//           console.log('Film added to local storage!');
//         } else {
//           // ---------- тимчасово
//           console.log('Filmm already exists in local storage!');
//         }
//       } catch (error) {
//         console.error('Error retrieving films from local storage:', error);
//       }
//     });
//   }, 400);
// }

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

