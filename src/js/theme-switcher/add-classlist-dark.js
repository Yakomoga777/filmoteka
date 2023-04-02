import { refs } from './refs';
import { THEME } from './theme-switcher';

// Додає класи на всі елементи для темної теми
export function doCurrentThemeDark() {
  addDarkClassListToMain();
  // addDarkClassListToBody();
  addDarkClassListToRegistrationModal();
  addDarkClassListToDetailsModal();
  addDarkClassListToTeamCard();
  // addDarkClassListToFooter();
  addDarkClassListToAddWatchedBtn();
  addDarkClassListToAddQueueBtn();
  addDarkClassListToCloseSvg();

  refs.themeSwitcher.checked = true;
}

// main
function addDarkClassListToMain() {
  refs.main.classList.remove(THEME.light);
  refs.main.classList.add(THEME.dark);
}

// body
// function addDarkClassListToBody() {
//   refs.body.classList.remove(THEME.light);
//   refs.body.classList.add(THEME.dark);
// }

// registrationModal;
function addDarkClassListToRegistrationModal() {
  refs.registrationModal.classList.remove(THEME.light);
  refs.registrationModal.classList.add(THEME.dark);
}

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

// // footer
// function addDarkClassListToFooter() {
//   refs.footer.classList.remove(THEME.light);
//   refs.footer.classList.add(THEME.dark);
// }

// addWatchedBtn
function addDarkClassListToAddWatchedBtn() {
  refs.addWatchedBtn.classList.remove(THEME.light);
  refs.addWatchedBtn.classList.add(THEME.dark);
}

// addQueueBtn
function addDarkClassListToAddQueueBtn() {
  refs.addQueueBtn.classList.remove(THEME.light);
  refs.addQueueBtn.classList.add(THEME.dark);
}

// closeSvg
function addDarkClassListToCloseSvg() {
  refs.closeSvg.classList.remove(THEME.light);
  refs.closeSvg.classList.add(THEME.dark);
}

// додати кнопки пагінації
