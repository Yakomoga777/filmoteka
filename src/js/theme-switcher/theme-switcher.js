const THEME = {
  light: 'light-theme',
  dark: 'dark-theme',
};
const THEME_KEY = 'current-theme';

const refs = {
  themeSwitcher: document.querySelector('#theme-switcher'),
  body: document.querySelector('body'),
};

// Беремо дані з localStorage
const currentTheme = localStorage.getItem(THEME_KEY);

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

  refs.themeSwitcher.checked = true;
}

// Додає клас для світлої теми
function doCurrentThemeLight() {
  refs.body.classList.remove(THEME.dark);
  refs.body.classList.add(THEME.light);

  refs.themeSwitcher.checked = false;
}

// Отримуємо дані зі сховища
function setCurrentTheme() {
  if (currentTheme === THEME.dark) {
    doCurrentThemeDark();
  } else if (currentTheme === THEME.light) {
    doCurrentThemeLight();
  } else {
    getPrefersColorScheme();
  }
}

// Отримуємо дані про бажану тему користувача
function getPrefersColorScheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (currentTheme === null && prefersDark) {
    doCurrentThemeDark();
  } else {
    doCurrentThemeLight();
  }
}
