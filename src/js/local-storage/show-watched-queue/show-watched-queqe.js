import { moviesApiService } from "/src/js/fetch/fetch";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const STORAGE_KEY_W = 'watched-movies-array';
const STORAGE_KEY_Q = 'queue-movies-array';
// const STORAGE_KEY = 'picked-movies-array';

// clearLocalStorage()
// function clearLocalStorage() {
//     localStorage.removeItem(STORAGE_KEY_Q);
// }




document.addEventListener('click', onCardClick);

 function onCardClick(e) {
 
     const movie = e.target.closest('li');

     if (!movie) {
          return
   }
   const filmId = movie.dataset.id;
  
  setTimeout(() => {
    const addWachedBtn = document.querySelector('.modal-buttons__watched');
    const addQueueBtn = document.querySelector('.modal-buttons__queue');
   
      
      addWachedBtn.addEventListener('click', onAddWatch);
      addQueueBtn.addEventListener('click', onAddQueue);

      function onAddWatch() {
   addToLocalStorage(movie,filmId,STORAGE_KEY_W)
      }
      
            function onAddQueue() {
    addToLocalStorage(movie,filmId,STORAGE_KEY_Q)
}

   
  }, 400);
}


function addToLocalStorage(film, id, key) {
  const storedItems = JSON.parse(localStorage.getItem(key)) || [];
  
  if (!storedItems.some((storedItem) => storedItem.id === id)) {
    // console.log({id});
    //  console.log(film);
    storedItems.push({ id });
    localStorage.setItem(key, JSON.stringify(storedItems));
    console.log('Item added to local storage!');
  } else {
    console.log('Item already exists in local storage!');
  }
}



// // console.log(moviesApiService.fetchTrendingMovies());


const moviesGalery = document.getElementById('listMovies')
const watchedBtn = document.querySelector('[data-action = "watched"]');
const queueBtn = document.querySelector('[data-action = "queue"]');



// trainFetch();


// moviesGalery.innerHTML = '';
// onShowStorage()


 
const onWatchedClick = () => {
  if (watchedBtn.classList.contains('library-btn__active')) {
    return
  }
  queueBtn.classList.remove('library-btn__active');
  watchedBtn.classList.add('library-btn__active')
  moviesGalery.innerHTML = '';
  onShowStorage(STORAGE_KEY_W);
}

watchedBtn.addEventListener('click', onWatchedClick)


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


function onShowStorage(key) {
    const arrayOfId = localStorage.getItem(key) || '';
  if (arrayOfId) {
    try {
        const parsedValues = JSON.parse(arrayOfId);
        // console.log(parsedValues);
        getIdes(parsedValues);
        ;
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
    }
    {
    
        Notify.info(
            'Sorry friend but you havent choosed anything',
            {
              showOnlyTheLastOne: true,
              clickToClose: true,
            }
          );
    }
}


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


// function getIdes(idArray) {
//     for (const numer of idArray) {
//         console.log(+numer.id);
//         console.log(numer.id + 1);
//     }
// }


// function getIdes(idArray) {
//     for (const numer of idArray) {
//         moviesApiService.fetchFilmDetails(+numer.id)
//             .then(({ poster_path, id, original_title, release_date }) => {
//                 let urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;
//                 // console.log( poster_path, id, original_title, release_date);

//                  return

//           `<li class="list_film_item" data-id="${id}">
//  	 	            <img src="${urlImg}" alt="img of film" width="395"/>
//  	               <p class="card__title">${original_title}</p>
//  	               <div class="card__info">
//                     <p class="card__genres">| ${release_date.slice(0, 4)}</p>
//                   </div>
// 	 	        </li>`;
//             })
//             .join('');
        

//         //   moviesGalery.insertAdjacentHTML('beforeend', getMovies);
               
//         // do something with movieArray, e.g. render it
//     }


    function getIdes(idArray) {
        let html = '';
        for (const numer of idArray) {
            moviesApiService.fetchFilmDetails(+numer.id)
                .then(({ poster_path, id, original_title, release_date }) => {
                    let urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;
                    const movieHtml = `
          <li class="list_film_item" data-id="${id}">
            <img src="${urlImg}" alt="img of film" width="395"/>
            <p class="card__title">${original_title}</p>
            <div class="card__info">
              <p class="card__genres">| ${release_date.slice(0, 4)}</p>
            </div>
          </li>
        `;
                    html += movieHtml;
                    //   console.log(html);
                })
                .catch(error => console.log(error));
        }
        return html;
    }
        // moviesGalery.insertAdjacentHTML('beforeend', getFilmsList);


            
            
    






