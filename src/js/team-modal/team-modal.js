const openBtn = document.getElementById("crewShowBtn");
const crew = document.getElementById("ourCrew");
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
    // crew.style.display = "block"
    window.addEventListener('keydown', onEscapeClick);
    document.body.classList.add('show-team')
}

const closeModalCrew = () => {
    window.removeEventListener('keydown',onEscapeClick)
    //  if (e.target === e.currentTarget) {
    // crew.style.display = "none";
         document.body.classList.remove('show-team')
     
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


