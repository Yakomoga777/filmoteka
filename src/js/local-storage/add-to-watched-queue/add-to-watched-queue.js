const addToWatchedButton = document.querySelector('.to-watched');
const addToQueueBtn = document.querySelector('.to-queue');

const user = currentUser;
  if (currentUser !== null) {
    const queue = localStorage.getItem('queue') || [];
    const watched = localStorage.getItem('watched') || [];
  }

let watchedMovieId = localStorage.getItem('watched');
let parseWatchedMovieId = JSON.parse(watchedMovieId);
let queueMovieId = localStorage.getItem('queue');
let parseQueueMovieId = JSON.parse(queueMovieId);

addToWatchedButton.addEventListener('click', (e => {
  
  watchedMovieId = localStorage.getItem('watched');
  parseWatchedMovieId = JSON.parse(watchedMovieId);

  if (localStorage.getItem('watched') === null) {
    localStorage.setItem('watched', '[]');
  }

  function getMovieById(movies) {
  const watchedMovies = movies
    .map(movie => movie.id);
  
  if (getMovieById !== watched) {
    return [];
  } 
    getMovieById.innerHTML = watchedMovies;
  }
}
));  
  
addToQueueBtn.addEventListener('click', (e => {

  queueMovieId = localStorage.getItem('queue');
  parseQueueMovieId = JSON.parse(queueMovieId);
  
  if (localStorage.getItem('queue') === null) {
    localStorage.setItem('queue', '[]');

  }

  function getMovieById(movies) {
  const queueMovies = movies
    .map(movie => movie.id);
  
  if (getMovieById !== queue) {
    return [];
  } 
    getMovieById.innerHTML = queueMovies;
  }
}

));  
