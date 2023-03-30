const btn = document.getElementById("crewShowBtn");
const crew = document.getElementById("ourCrew");
const btnClose = document.getElementById("crewModalClose");
const box = document.querySelector(".team-box");
// const contentModal = document.querySelector('.modal-content');

 console.log(box);

const showMembers = () => {
    crew.style.display = "block"
    
}

const closeModalCrew = (e) => {
    
     if (e.target === e.currentTarget) {
    crew.style.display = "none";
     }
}

const onBtnCloseModal = (event) => {
    console.log(event);
    crew.style.display = "none"
}

// console.log(btn);

box.addEventListener('click', closeModalCrew);

btnClose.addEventListener('click', onBtnCloseModal);

btn.addEventListener('click', showMembers);



// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == crew) {
//     modal.style.display = "none";
//   }
//     console.log(event.currentTarget);
//     console.log(contentModal);
// }


