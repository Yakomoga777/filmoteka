





document.addEventListener('click', onCardClick);

 function onCardClick(e) {
 
     const movieId = e.target.closest('li');
     console.log(movieId);
     if (!movieId) {
          return
      }
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



