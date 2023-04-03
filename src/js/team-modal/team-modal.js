const openBtn = document.querySelector('.show-crew-btn');
const crew = document.getElementById('crewBackdrop');
const btnClose = document.getElementById('crewModalClose');
const box = document.querySelector('.team-box');

const onEscapeClick = e => {
  if (e.code === 'Escape') {
    closeModalCrew();
  }
};


const showMembers = () => {
  window.addEventListener('keydown', onEscapeClick);
  crew.classList.remove('is-hidden');
};

const closeModalCrew = () => {
  window.removeEventListener('keydown', onEscapeClick);

  crew.classList.add('is-hidden');
};

const forCloseModal = e => {
  if (e.target === e.currentTarget) {
    closeModalCrew();
  }
};

box.addEventListener('click', forCloseModal);

btnClose.addEventListener('click', closeModalCrew);

openBtn.addEventListener('click', showMembers);
