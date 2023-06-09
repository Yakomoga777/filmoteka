import { refs } from './refs';
import { THEME } from './theme-switcher';

// Додає класи на всі елементи для темної теми
export function doCurrentThemeDark() {
  addDarkClassListToMain();
  // addDarkClassListToRegistrationModal();
  addDarkClassListToDetailsModal();
  addDarkClassListToTeamCard();
  addDarkClassListToFooter();

  refs.themeSwitcher.checked = true;
}

// main
function addDarkClassListToMain() {
  refs.main.classList.remove(THEME.light);
  refs.main.classList.add(THEME.dark);
}

// // registrationModal;
// function addDarkClassListToRegistrationModal() {
//   refs.registrationModal.classList.remove(THEME.light);
//   refs.registrationModal.classList.add(THEME.dark);
// }

// detailsModal
function addDarkClassListToDetailsModal() {
  refs.detailsModal.classList.remove(THEME.light);
  refs.detailsModal.classList.add(THEME.dark);
}

// teamCard
function addDarkClassListToTeamCard() {
  refs.teamCards.forEach(teamCard => {
    teamCard.classList.remove(THEME.light);
    teamCard.classList.add(THEME.dark);
  });
}

// footer
function addDarkClassListToFooter() {
  refs.footer.classList.remove(THEME.light);
  refs.footer.classList.add(THEME.dark);
}
