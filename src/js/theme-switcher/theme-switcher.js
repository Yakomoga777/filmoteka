import { refs } from './refs';
import { getPrefersColorScheme } from './prefers-color-scheme';
import { doCurrentThemeDark } from './add-classlist-dark';
import { doCurrentThemeLight } from './add-classlist-light';

export const THEME = {
  light: 'light-theme',
  dark: 'dark-theme',
};
const THEME_KEY = 'current-theme';

// Беремо дані з localStorage
export const currentTheme = localStorage.getItem(THEME_KEY);

refs.themeSwitcher.addEventListener('change', onThemeUpdate);

// Додає необхідний клас з localStorage під час повторного відвідування сайту/ в залежності від теми браузера при першому завантаженні
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
