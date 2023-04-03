
const STORAGE_KEY_W = 'watched-movies-array';
const STORAGE_KEY_Q = 'queue-movies-array';




document.addEventListener('click', onCardClick);

 function onCardClick(e) {
 
     const movie = e.target.closest('li');
     console.log(movie);
     if (!movie) {
          return
   }
   const filmId = movie.dataset.id;
   console.log(filmId);
  setTimeout(() => {
    const addWachedBtn = document.querySelector('.modal-buttons__watched');
    const addQueueBtn = document.querySelector('.modal-buttons__queue');
    console.log(addWachedBtn);
      console.log(addQueueBtn);
      
      addWachedBtn.addEventListener('click', onAddWatch);
      addQueueBtn.addEventListener('click', onAddQueue);

      function onAddWatch() {
    console.log(5);
      }
      
            function onAddQueue() {
    console.log(10);
}




   
  }, 400);
}




function RecordingMoviesArray(film,id,localStorageKey) {
  
    const arrayOfMovies = JSON.parse(localStorage.getItem(localStorageKey)) || {};
     if (!arrayOfMovies[id]) {
    arrayOfMovies[id] = film;
    localStorage.setItem(key, JSON.stringify(arrayOfMovies));
    console.log('Item added to local storage!');
  } else {
    console.log('Item already exists in local storage!');
  }

}