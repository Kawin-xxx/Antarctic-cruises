let navMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__toggle');

export let initMenu = () => {
  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-header--open');
    navToggle.classList.toggle('main-header__toggle--open');
    navToggle.classList.toggle('main-header__toggle--close');
  });
};
