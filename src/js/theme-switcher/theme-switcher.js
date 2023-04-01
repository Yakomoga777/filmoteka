const THEME = {
  light: 'light-theme',
  dark: 'dark-theme',
};
const THEME_KEY = 'current-theme';

const refs = {
  themeSwitcher: document.querySelector('#theme-switcher'),
  body: document.querySelector('body'),
};

refs.themeSwitcher.addEventListener('change', onThemeUpdate);

// Додає необхідний клас з localStorage під час повторного відвідування сайту
setCurrentTheme();

// Додає необхідний клас в localStorage під час зміни теми
function onThemeUpdate(e) {
  const darkTheme = e.target.checked;

  if (darkTheme) {
    doCurrentThemeDark();

    localStorage.setItem(THEME_KEY, THEME.dark);
  } else {
    doCurrentThemeLight();

    localStorage.setItem(THEME_KEY, THEME.light);
  }
}

// Додає клас для темної теми
function doCurrentThemeDark() {
  refs.body.classList.remove(THEME.light);
  refs.body.classList.add(THEME.dark);
}

// Додає клас для світлої теми
function doCurrentThemeLight() {
  refs.body.classList.remove(THEME.dark);
  refs.body.classList.add(THEME.light);
}

// Отримуємо дані зі сховища
function setCurrentTheme() {
  const currentTheme = localStorage.getItem(THEME_KEY);

  if (currentTheme) {
    refs.body.classList.add(currentTheme);
  } else {
    refs.body.classList.add(THEME.light);

    localStorage.setItem(THEME_KEY, THEME.light);
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  refs.themeSwitcher.checked = savedTheme === THEME.dark;
}
