
// export const STORAGE_KEY_W = 'watched-movies-array';
// export const STORAGE_KEY_Q = 'queue-movies-array';

// // clearLocalStorage()
// // function clearLocalStorage() {
// //     localStorage.removeItem(STORAGE_KEY);
// // }




// document.addEventListener('click', onCardClick);

//  function onCardClick(e) {
 
//      const movie = e.target.closest('li');
//      if (!movie) {
//           return
//    }
//    const filmId = movie.dataset.id;
//   setTimeout(() => {
//     const addWachedBtn = document.querySelector('.modal-buttons__watched');
//     const addQueueBtn = document.querySelector('.modal-buttons__queue');

      
//       addWachedBtn.addEventListener('click', onAddWatch);
//       addQueueBtn.addEventListener('click', onAddQueue);

//       function onAddWatch() {
//    addToLocalStorage(movie,filmId,STORAGE_KEY_W)
//       }
      
//             function onAddQueue() {
//     addToLocalStorage(movie,filmId,STORAGE_KEY_Q)
// }

   
//   }, 400);
// }


// function addToLocalStorage(film, id, key) {
//   const storedItems = JSON.parse(localStorage.getItem(key)) || [];
  
//   if (!storedItems.some((storedItem) => storedItem.id === id)) {
//     console.log({id});
//      console.log(film);
//     storedItems.push({ id });
//     localStorage.setItem(key, JSON.stringify(storedItems));
//     console.log('Film added to local storage!');
//   } else {
//     console.log('Filmm already exists in local storage!');
//   }
// }