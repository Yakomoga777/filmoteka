// import { moviesApiService } from "/src/js/fetch/fetch";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const STORAGE_KEY_W = 'watched-movies-array';
// const STORAGE_KEY_Q = 'queue-movies-array';
// // const STORAGE_KEY = 'picked-movies-array';

// // clearLocalStorage()
// // function clearLocalStorage() {
// //     localStorage.removeItem(STORAGE_KEY);
// // }




// document.addEventListener('click', onCardClick);

//  function onCardClick(e) {
 
//      const movie = e.target.closest('li');
//     //  console.log(movie);
//      if (!movie) {
//           return
//    }
//    const filmId = movie.dataset.id;
//   //  console.log(filmId);
//   setTimeout(() => {
//     const addWachedBtn = document.querySelector('.modal-buttons__watched');
//     const addQueueBtn = document.querySelector('.modal-buttons__queue');
//     // console.log(addWachedBtn);
//     //   console.log(addQueueBtn);
      
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
//     console.log('Item added to local storage!');
//   } else {
//     console.log('Item already exists in local storage!');
//   }
// }



// // // console.log(moviesApiService.fetchTrendingMovies());

// // const showBtn = document.getElementById('showOrder')
// // const getBtn = document.getElementById('getOrders')
// // const removeBtn = document.getElementById('removeOrders')
// const moviesGalery = document.getElementById('listMovies')
// const watchedBtn = document.querySelector('[data-action = "watched"]');
// // const watchedBtn = document.querySelector('.library-btn');
// const queueBtn = document.querySelector('[data-action = "queue"]');


// const trainFetch = async () => {
// //   page = Number(page);
// //   getData(query, page)
//     await moviesApiService.fetchTrendingMovies()
//          .then((data) => {
//         const movieArray = data.results
//              getOrderOnClick(movieArray);
//             //  onShowStorage()
//             //  console.log(data);
//             //  console.log(movieArray);
//     //   hits = data.hits;
//     //   total = data.totalHits;
//     //   const length = hits.length;

//     //   checkDataLength(length, total);

//     //   render();
//     //   if (page > 1) {
//     //     scrollingPages()
//     //   }
//     })
//     .catch(error => console.log(error));
// };

// trainFetch();


// moviesGalery.innerHTML = '';
// onShowStorage()


 
// const onWatchedClick = () => {
//   if (watchedBtn.classList.contains('library-btn__active')) {
//     return
//   }
//   queueBtn.classList.remove('library-btn__active');
//   watchedBtn.classList.add('library-btn__active')
//   moviesGalery.innerHTML = '';
//   onShowStorage();
// }

// watchedBtn.addEventListener('click', onWatchedClick)


// const onQueueClick = () => {
//   if (queueBtn.classList.contains('library-btn__active')) {
//    return
//   }
//   queueBtn.classList.add('library-btn__active')
//   watchedBtn.classList.remove('library-btn__active')
//    moviesGalery.innerHTML = '';
//   onShowStorage();
// }

// queueBtn.addEventListener('click',onQueueClick)


// const getOrderOnClick = (movies) => {
//      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
//     // console.log(5);
// }


// // const onShowOrderClick = () => {

// // }
// // showBtn.addEventListener('click', onShowStorage)





// // getBtn.addEventListener('click', trainFetch)


// function onShowStorage() {
//     const arrayOfMovies = localStorage.getItem(STORAGE_KEY) || '';
//     // console.log(arrayOfMovies);
//   if (arrayOfMovies) {
//     try {
//       const parsedValues = JSON.parse(arrayOfMovies);
//       renderMoviesMarkup(parsedValues);
//       // return parsedValues

//         // console.log(parsedValues);
//     } catch (error) {
//       console.error('Get state error: ', error.message);
//     }
//     }
//     {
//         // console.log('Sorry friend but you havent choosed anything');
//         Notify.info(
//             'Sorry friend but you havent choosed anything',
//             {
//               showOnlyTheLastOne: true,
//               clickToClose: true,
//             }
//           );
//     }
// }


// // removeBtn.addEventListener('click',clearLocalStorage)


// // function clearLocalStorage() {
// //     localStorage.removeItem(STORAGE_KEY);
// // }




// function renderMoviesMarkup(movies) {
//   // movies.forEach(movie => {
//   //   const gendersIs = genres.filter(genre => {
//   //     movie.genres_ids.include(genre.id);
//   //   });
//   // });
//   const markup = movies
//     .map(({ poster_path, id, original_title, release_date }) => {
//       let urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

//       return `<li class="list_film_item" data-id="${id}">
// 		            <img src="${urlImg}" alt="img of film" width="395"/>
// 	              <p class="card__title">${original_title}</p>
// 	              <div class="card__info">
//                   <p class="card__genres">| ${release_date.slice(0, 4)}</p>
//                 </div>
// 		        </li>`;
//     })
//     .join('');

//   moviesGalery.insertAdjacentHTML('beforeend', markup);
// }






