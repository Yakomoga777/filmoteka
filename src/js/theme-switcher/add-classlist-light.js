import { refs } from './refs';
import { THEME } from './theme-switcher';

// Додає класи на всі елементи для світлої теми
export function doCurrentThemeLight() {
  addLightClassListToMain();
  // addLightClassListToRegistrationModal();
  addLightClassListToDetailsModal();
  addLightClassListToTeamCard();
  addLightClassListToFooter();

  refs.themeSwitcher.checked = false;
}

// main
function addLightClassListToMain() {
  refs.main.classList.remove(THEME.dark);
  refs.main.classList.add(THEME.light);
}

// // registrationModal;
// function addLightClassListToRegistrationModal() {
//   refs.registrationModal.classList.remove(THEME.dark);
//   refs.registrationModal.classList.add(THEME.light);
// }

// detailsModal
function addLightClassListToDetailsModal() {
  refs.detailsModal.classList.remove(THEME.dark);
  refs.detailsModal.classList.add(THEME.light);
}

// teamCard
function addLightClassListToTeamCard() {
  refs.teamCards.forEach(teamCard => {
    teamCard.classList.remove(THEME.dark);
    teamCard.classList.add(THEME.light);
  });
}

// footer
function addLightClassListToFooter() {
  refs.footer.classList.remove(THEME.dark);
  refs.footer.classList.add(THEME.light);
}
