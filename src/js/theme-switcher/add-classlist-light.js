import { refs } from './refs';
import { THEME } from './theme-switcher';

// Додає класи на всі елементи для світлої теми
export function doCurrentThemeLight() {
  addLightClassListToMain();
  // addLightClassListToBody();
  addLightClassListToRegistrationModal();
  addLightClassListToDetailsModal();
  addLightClassListToTeamCard();
  // addLightClassListToFooter();
  addLightClassListToAddWatchedBtn();
  addLightClassListToAddQueueBtn();
  addLightClassListToCloseSvg();

  refs.themeSwitcher.checked = false;
}

// main
function addLightClassListToMain() {
  refs.main.classList.remove(THEME.dark);
  refs.main.classList.add(THEME.light);
}

// body
// function addLightClassListToBody() {
//   refs.body.classList.remove(THEME.dark);
//   refs.body.classList.add(THEME.light);
// }

// registrationModal;
function addLightClassListToRegistrationModal() {
  refs.registrationModal.classList.remove(THEME.dark);
  refs.registrationModal.classList.add(THEME.light);
}

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

// // footer
// function addLightClassListToFooter() {
//   refs.footer.classList.remove(THEME.dark);
//   refs.footer.classList.add(THEME.light);
// }

// addWatchedBtn
function addLightClassListToAddWatchedBtn() {
  refs.addWatchedBtn.classList.remove(THEME.dark);
  refs.addWatchedBtn.classList.add(THEME.light);
}

// addQueueBtn
function addLightClassListToAddQueueBtn() {
  refs.addQueueBtn.classList.remove(THEME.dark);
  refs.addQueueBtn.classList.add(THEME.light);
}

// closeSvg
function addLightClassListToCloseSvg() {
  refs.closeSvg.classList.remove(THEME.dark);
  refs.closeSvg.classList.add(THEME.light);
}

// додати кнопки пагінації
