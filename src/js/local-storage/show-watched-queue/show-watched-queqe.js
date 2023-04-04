import { moviesApiService } from "/src/js/fetch/fetch";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { STORAGE_KEY_W,STORAGE_KEY_Q } from '../add-to-watched-queue/add-to-watched-queue';  



// формула для очищення локального сховища

// clearLocalStorage()
// function clearLocalStorage() {
//     localStorage.removeItem(STORAGE_KEY_W);
// }








const moviesGalery = document.getElementById('listMovies')
const watchedBtn = document.querySelector('[data-action = "watched"]');
const queueBtn = document.querySelector('[data-action = "queue"]');






moviesGalery.innerHTML = '';
const watchedArray = onShowStorage(STORAGE_KEY_W);
 
  getIdes(watchedArray,moviesGalery);
watchedBtn.classList.add('library-btn__active')

 
const onWatchedClick = () => {
  if (watchedBtn.classList.contains('library-btn__active')) {
    return
  }
  queueBtn.classList.remove('library-btn__active');
  watchedBtn.classList.add('library-btn__active')
  moviesGalery.innerHTML = '';
  
   watchedArray = onShowStorage(STORAGE_KEY_W);
 
  getIdes(watchedArray,moviesGalery);

}

watchedBtn.addEventListener('click', onWatchedClick)


const onQueueClick = () => {
  if (queueBtn.classList.contains('library-btn__active')) {
   return
  }
  queueBtn.classList.add('library-btn__active')
  watchedBtn.classList.remove('library-btn__active')
   moviesGalery.innerHTML = '';
  const queueArray = onShowStorage(STORAGE_KEY_Q);
  getIdes(queueArray,moviesGalery);
}

queueBtn.addEventListener('click',onQueueClick)






// Формула яка повертає відповідні дані зі сховища в залужності від переданого ключа


function onShowStorage(key) {
  const arrayOfId = localStorage.getItem(key) || '';
  // console.log(arrayOfId);
  if (arrayOfId) {
    try {
      const parsedValues = JSON.parse(arrayOfId);
    //  console.log(parsedValues);
      return parsedValues;
      
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  } else {
    Notify.info(
      'Sorry friend but you havent chosen anything',
      {
        showOnlyTheLastOne: true,
        clickToClose: true,
      }
    );
    return null;
  }
}





//  Формула для рендерингу і відмальовуванні фільмів на екрані за допомогою id
            
    async function getIdes(idArray, filmsList) {
  let filmItems = '';
  for (const numer of idArray) {
    try {
      const { poster_path, id, original_title, release_date } = await moviesApiService.fetchFilmDetails(+numer.id);
      const urlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;
      const oneFilm = `
        <li class="list_film_item" data-id="${id}">
          <img src="${urlImg}" alt="img of film" width="395"/>
          <p class="card__title">${original_title}</p>
          <div class="card__info">
            <p class="card__genres">| ${release_date.slice(0, 4)}</p>
          </div>
        </li>
      `;
      filmItems += oneFilm;
    } catch (error) {
      console.log(error);
    }
  }
  filmsList.insertAdjacentHTML('beforeend', filmItems);
}






