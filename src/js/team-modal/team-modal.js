const openBtn = document.getElementById("crewShowBtn");
const crew = document.getElementById("crewBackdrop");
const btnClose = document.getElementById("crewModalClose");
const box = document.querySelector(".team-box");
// const contentModal = document.querySelector('.modal-content');

//  console.log(crew);

const onEscapeClick = (e) => {
    if (e.code === 'Escape') {
    closeModalCrew()
}
}

const showMembers = () => {
    // console.log(crew);
    // crew.style.display = "block"
    window.addEventListener('keydown', onEscapeClick);
    crew.classList.remove('is-hidden')
}

const closeModalCrew = () => {
    window.removeEventListener('keydown',onEscapeClick)
    //  if (e.target === e.currentTarget) {
    // crew.style.display = "none";
         crew.classList.add('is-hidden')
     
}

const forCloseModal = (e) => {
    // console.log(e.target);
    if (e.target === e.currentTarget) {
        closeModalCrew();
    }
}



// console.log(btn);



box.addEventListener('click', forCloseModal);
// box.addEventListener('click', (e)=> console.log(e));

btnClose.addEventListener('click', closeModalCrew);

openBtn.addEventListener('click', showMembers);



// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == crew) {
//     modal.style.display = "none";
//   }
//     console.log(event.currentTarget);
//     console.log(contentModal);
// }