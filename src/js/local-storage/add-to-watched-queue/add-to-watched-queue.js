// ---------- Віріант 1

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

// ------------------- Віріант 2

// // ----------- запис усього обʼєкта у localStorage -----------
// import { moviesApiService } from '../../fetch/fetch';

// // кнопка watched
// export const STORAGE_KEY_W = 'watched-movies-array';
// export const STORAGE_KEY_Q = 'queue-movies-array';

// export const onAddWatched = (data) => {

//   const btnAddWatched = document.querySelector(".modal-buttons__add-watched");

//   const btnRemoveWatched = document.querySelector(".modal-buttons__remove-watched");

//   try {
//           const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

//           if (!storedItems.some(storedItem => storedItem.id === data.id)) {

//             storedItems.push(data);

//             try {
//               localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
//               btnAddWatched.classList.add("hide-button");

//               btnRemoveWatched.classList.remove("hide-button");
//             } catch (error) {
//               console.error('Error adding film to local storage:', error);
//             }

//             // ---------- тимчасово
//             console.log('Film added to local storage!');
//           } else {
//             // ---------- тимчасово
//             console.log('Filmm already exists in local storage!');
//           }
//         } catch (error) {
//           console.error('Error retrieving films from local storage:', error);
//         }
// }

// export const onAddQueue = (data) => {

//   const btnAddQueue = document.querySelector(".modal-buttons__add-queue");

//   const btnRemoveQueue = document.querySelector(".modal-buttons__remove-queue");

//   try {
//           const storedItems =
//             JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

//           if (!storedItems.some(storedItem => storedItem.id === data.id)) {
//             storedItems.push(data);

//             try {
//               localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
//               btnAddQueue.classList.add("hide-button");

//               btnRemoveQueue.classList.remove("hide-button");
//             } catch (error) {
//               console.error('Error adding film to local storage:', error);
//             }

//             // ---------- тимчасово
//             console.log('Film added to local storage!');
//           } else {
//             // ---------- тимчасово
//             console.log('Filmm already exists in local storage!');
//           }
//         } catch (error) {
//           console.error('Error retrieving films from local storage:', error);
//         }
// };

// // Видалення об'єкта з localStorage
// export const onRemoveWatched = (data) => {

//   const btnAddWatched = document.querySelector(".modal-buttons__add-watched");
//   const btnRemoveWatched = document.querySelector(".modal-buttons__remove-watched");

//   try {
//           const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

//           const findItemIndex =
//             storedItems.findIndex(storedItem => storedItem.id === data.id);

//           if (findItemIndex !== -1) {

//             storedItems.splice(findItemIndex, 1);

//             try {
//               localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
//               btnRemoveWatched.classList.add("hide-button");

//               btnAddWatched.classList.remove("hide-button");

//             } catch (error) {
//               console.error('Error adding film to local storage:', error);
//             }

//             // ---------- тимчасово
//             console.log('Film removed from watched list!');
//           } else {
//             // ---------- тимчасово
//             console.log('Filmm already exists in local storage!');
//           }
//         } catch (error) {
//           console.error('Error retrieving films from local storage:', error);
//         }
// }

// export const onRemoveQueue = (data) => {

//   const btnAddQueue = document.querySelector(".modal-buttons__add-queue");

//   const btnRemoveQueue = document.querySelector(".modal-buttons__remove-queue");

//   try {
//           const storedItems =
//             JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

//           const findItemIndex =
//             storedItems.findIndex(storedItem => storedItem.id === data.id);

//           if (findItemIndex !== -1) {

//             storedItems.splice(findItemIndex, 1);

//             try {
//               localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
//               btnRemoveQueue.classList.add("hide-button");

//               btnAddQueue.classList.remove("hide-button");
//             } catch (error) {
//               console.error('Error adding film to local storage:', error);
//             }

//             // ---------- тимчасово
//             console.log('Film removed from queue list!');
//           } else {
//             // ---------- тимчасово
//             console.log('Filmm already exists in local storage!');
//           }
//         } catch (error) {
//           console.error('Error retrieving films from local storage:', error);
//         }
// };

// кнопка watched
export const STORAGE_KEY_W = 'watched-movies-array';
export const STORAGE_KEY_Q = 'queue-movies-array';

export const onAddWatched = ({
  poster_path,
  id,
  original_title,
  release_date,
  genres,
  original_language,
  title,
}) => {
  const filmObj = {
    poster_path,
    id,
    original_title,
    release_date,
    genres,
    original_language,
    title,
  };
  const btnAddWatched = document.querySelector('.modal-buttons__add-watched');

  const btnRemoveWatched = document.querySelector(
    '.modal-buttons__remove-watched'
  );

  try {
    const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

    if (!storedItems.some(storedItem => storedItem.id === filmObj.id)) {
      storedItems.push(filmObj);

      try {
        localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
        btnAddWatched.classList.add('hide-button');

        btnRemoveWatched.classList.remove('hide-button');
      } catch (error) {
        console.error('Error adding film to local storage:', error);
      }

      
    } else {
      
    }
  } catch (error) {
    console.error('Error retrieving films from local storage:', error);
  }
};

export const onAddQueue = ({
  poster_path,
  id,
  original_title,
  release_date,
  genres,
  original_language,
  title,
}) => {
  const filmObj = {
    poster_path,
    id,
    original_title,
    release_date,
    genres,
    original_language,
    title,
  };
  const btnAddQueue = document.querySelector('.modal-buttons__add-queue');

  const btnRemoveQueue = document.querySelector('.modal-buttons__remove-queue');

  try {
    const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

    if (!storedItems.some(storedItem => storedItem.id === filmObj.id)) {
      storedItems.push(filmObj);

      try {
        localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
        btnAddQueue.classList.add('hide-button');

        btnRemoveQueue.classList.remove('hide-button');
      } catch (error) {
        console.error('Error adding film to local storage:', error);
      }

      
    } else {
      
    }
  } catch (error) {
    console.error('Error retrieving films from local storage:', error);
  }
};

// Видалення об'єкта з localStorage
export const onRemoveWatched = data => {
  const btnAddWatched = document.querySelector('.modal-buttons__add-watched');
  const btnRemoveWatched = document.querySelector(
    '.modal-buttons__remove-watched'
  );

  try {
    const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_W)) || [];

    const findItemIndex = storedItems.findIndex(
      storedItem => storedItem.id === data.id
    );

    if (findItemIndex !== -1) {
      storedItems.splice(findItemIndex, 1);

      try {
        localStorage.setItem(STORAGE_KEY_W, JSON.stringify(storedItems));
        btnRemoveWatched.classList.add('hide-button');

        btnAddWatched.classList.remove('hide-button');
      } catch (error) {
        console.error('Error adding film to local storage:', error);
      }

      
    } else {
      
    }
  } catch (error) {
    console.error('Error retrieving films from local storage:', error);
  }
};

export const onRemoveQueue = data => {
  const btnAddQueue = document.querySelector('.modal-buttons__add-queue');

  const btnRemoveQueue = document.querySelector('.modal-buttons__remove-queue');

  try {
    const storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY_Q)) || [];

    const findItemIndex = storedItems.findIndex(
      storedItem => storedItem.id === data.id
    );

    if (findItemIndex !== -1) {
      storedItems.splice(findItemIndex, 1);

      try {
        localStorage.setItem(STORAGE_KEY_Q, JSON.stringify(storedItems));
        btnRemoveQueue.classList.add('hide-button');

        btnAddQueue.classList.remove('hide-button');
      } catch (error) {
        console.error('Error adding film to local storage:', error);
      }

    } else {
      
    }
  } catch (error) {
    console.error('Error retrieving films from local storage:', error);
  }
};
