const header = document.querySelector('.header');
const headerButton = header.querySelector('.header__button');
const yearElement = document.querySelector('.current-year');
const currentYear = new Date().getFullYear();
// yearElement.textContent = currentYear;
// yearElement.innerHTML = currentYear;
yearElement.innerText = currentYear;

headerButton.addEventListener('click', (e) => {
  header.classList.toggle('header--menu-open');
});