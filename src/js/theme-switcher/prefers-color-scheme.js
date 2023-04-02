import { currentTheme } from './theme-switcher';
import { doCurrentThemeDark } from './add-classlist-dark';
import { doCurrentThemeLight } from './add-classlist-light';

// Отримуємо дані про бажану тему користувача
export function getPrefersColorScheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (currentTheme === null && prefersDark) {
    doCurrentThemeDark();
  } else {
    doCurrentThemeLight();
  }
}
