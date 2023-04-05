// кнопка підняття вверх
const btnUpEl = document.querySelector('.main_section');

btnUpEl.insertAdjacentHTML(
  'beforebegin',
  `<button id="myBtn" title="Go UP">UP</button>`
);

window.onscroll = function () {
  scrollFunction();
};
const myBtn = document.getElementById('myBtn');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = 'block';
  } else {
    myBtn.style.display = 'none';
  }
}

myBtn.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
