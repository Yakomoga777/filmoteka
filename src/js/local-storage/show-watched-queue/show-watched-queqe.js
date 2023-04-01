import { moviesApiService } from "/src/js/fetch/fetch"

// console.log(moviesApiService.fetchTrendingMovies());

const showBtn = document.getElementById('showOrder')
const getBtn = document.getElementById('getOrders')
// console.log(showBtn);


const getOrderOnClick = (movies) => {

}


const onShowOrderClick = () => {

}
showBtn.addEventListener('click', onShowOrderClick)
showBtn.addEventListener('click', getOrderOnClick)


const trainFetch = async () => {
//   page = Number(page);
//   getData(query, page)
    await moviesApiService.fetchTrendingMovies()
         .then((data) => {
        const movieArray = data.results
             
             
            //  console.log(data);
             console.log(movieArray);
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

trainFetch()