import { moviesApiService } from "/src/js/fetch/fetch";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STORAGE_KEY = 'picked-movies-array';

// console.log(moviesApiService.fetchTrendingMovies());

const showBtn = document.getElementById('showOrder')
const getBtn = document.getElementById('getOrders')
const removeBtn = document.getElementById('removeOrders')
// console.log(showBtn);


const getOrderOnClick = (movies) => {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    // console.log(5);
}


// const onShowOrderClick = () => {

// }
showBtn.addEventListener('click', onShowStorage)



const trainFetch = async () => {
//   page = Number(page);
//   getData(query, page)
    await moviesApiService.fetchTrendingMovies()
         .then((data) => {
        const movieArray = data.results
             getOrderOnClick(movieArray);
            //  onShowStorage()
            //  console.log(data);
            //  console.log(movieArray);
    //   hits = data.hits;
    //   total = data.totalHits;
    //   const length = hits.length;

    //   checkDataLength(length, total);

    //   render();
    //   if (page > 1) {
    //     scrollingPages()
    //   }
    })
    .catch(error => console.log(error));
};

getBtn.addEventListener('click', trainFetch)


function onShowStorage() {
    const arrayOfMovies = localStorage.getItem(STORAGE_KEY) || '';
    
  if (arrayOfMovies) {
    try {
        const parsedValues = JSON.parse(arrayOfMovies);
        console.log(parsedValues);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
    }
    {
        // console.log('Sorry friend but you havent choosed anything');
        Notify.info(
            'Sorry friend but you havent choosed anything',
            {
              showOnlyTheLastOne: true,
              clickToClose: true,
            }
          );
    }
}


removeBtn.addEventListener('click',clearLocalStorage)


function clearLocalStorage() {
    localStorage.removeItem(STORAGE_KEY);
}