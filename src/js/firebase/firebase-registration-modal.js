import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyC2qdVzvwOoHZpjIFacH2rabnUN4pZ0H0Y',
  authDomain: 'filmoteka-06.firebaseapp.com',
  projectId: 'filmoteka-06',
  storageBucket: 'filmoteka-06.appspot.com',
  messagingSenderId: '993498167254',
  appId: '1:993498167254:web:2c0a858ff6943137101677',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const headerLoginBtn = document.querySelector('#header-login-btn');
const headerRegisterBtn = document.querySelector('.header-register-btn');
const headerOutBtn = document.querySelector('.header-out-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form');
const registerBtn = document.querySelector('#register-btn');
const registerForm = document.querySelector('.register-form');
const getRegisterForm = document.querySelector('.an-btn');
const getLoginForm = document.querySelector('#log-btn');
const getLoginEmail = document.querySelector('#login-email');
const getLoginPassword = document.querySelector('#login-password');
const getRegisterEmail = document.querySelector('#register-email');
const getRegisterPassword = document.querySelector('#register-password');
const modalCloseLoginBtn = document.querySelector('.modal-close-login');
const modalCloseRegisterBtn = document.querySelector('.modal-close-register');
const headerLoginItem = document.querySelector('.header-login-item');
const backdropForms = document.querySelector('.backdrop-forms');

backdropForms.style.display = 'none';
registerForm.style.display = 'none';
loginForm.style.display = 'none';
headerOutBtn.style.display = 'none';
headerLoginItem.style.marginRight = '20px';

if (localStorage.getItem('userSession')) {
  headerLoginBtn.style.display = 'none';
  headerRegisterBtn.style.display = 'none';
  headerOutBtn.style.display = 'flex';
  headerLoginItem.style.marginRight = '0';
}

// ===== Btn in Header ======

headerRegisterBtn.addEventListener('click', function () {
  registerForm.style.display = 'inline';
  loginForm.style.display = 'none';
  backdropForms.style.display = 'inline';
});

headerLoginBtn.addEventListener('click', function () {
  registerForm.style.display = 'none';
  loginForm.style.display = 'inline';
  backdropForms.style.display = 'inline';
});

// ===== Переключення між формами ===

getRegisterForm.addEventListener('click', function () {
  registerForm.style.display = 'inline';
  loginForm.style.display = 'none';
});

getLoginForm.addEventListener('click', function () {
  registerForm.style.display = 'none';
  loginForm.style.display = 'inline';
});

// ======== Закриття форм ===========
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    registerForm.style.display = 'none';
    loginForm.style.display = 'none';
    backdropForms.style.display = 'none';
  }
});
modalCloseLoginBtn.addEventListener('click', function () {
  registerForm.style.display = 'none';
  loginForm.style.display = 'none';
  backdropForms.style.display = 'none';
});

modalCloseRegisterBtn.addEventListener('click', function () {
  registerForm.style.display = 'none';
  loginForm.style.display = 'none';
  backdropForms.style.display = 'none';
});

// ====== Відправка форми Login =======

loginBtn.addEventListener('click', function () {
  const loginEmail = getLoginEmail.value;
  const loginPassword = getLoginPassword.value;
  headerLoginBtn.style.display = 'none';
  headerRegisterBtn.style.display = 'none';
  headerLoginItem.style.marginRight = '0';
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(userCredential => {
      const user = userCredential.user;
      loginForm.style.display = 'none';
      backdropForms.style.display = 'none';
      Notiflix.Notify.success(`Welcome back!`);
      headerOutBtn.style.display = 'flex';
      getLoginPassword.value = '';
      headerLoginItem.style.marginRight = '0';

      localStorage.setItem('userSession', 'true');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
});

// ====== Відправка форми Register =======

registerBtn.addEventListener('click', function () {
  const registerEmail = getRegisterEmail.value;
  const registerPassword = getRegisterPassword.value;
  headerLoginBtn.style.display = 'none';
  headerRegisterBtn.style.display = 'none';
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then(userCredential => {
      const user = userCredential.user;
      registerForm.style.display = 'none';
      backdropForms.style.display = 'none';
      Notiflix.Notify.success(`Welcome!`);
      headerOutBtn.style.display = 'flex';
      headerLoginItem.style.marginRight = '0';

      localStorage.setItem('userSession', 'true');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
});

// ==== OutBtn ===========

headerOutBtn.addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      registerForm.style.display = 'none';
      loginForm.style.display = 'none';
      backdropForms.style.display = 'none';
      headerOutBtn.style.display = 'none';
      Notiflix.Notify.info(`You are Log Out!`);
      headerLoginItem.style.marginRight = '20px';

      localStorage.removeItem('userSession');
    })
    .catch(error => {});
  headerLoginBtn.style.display = 'flex';
  headerRegisterBtn.style.display = 'flex';
  headerLoginItem.style.marginRight = '20px';
});
