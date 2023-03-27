let navMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__toggle');
let navItems = document.querySelectorAll('.main-header__site-item');
let overlay = document.querySelector('.main-header__overlay');

export let initMenu = () => {

  let closeMenu = () => {
    navMain.classList.remove('main-header--open');
    document.body.style.overflow = 'visible';
    navToggle.classList.remove('main-header__toggle--open');
    navToggle.classList.add('main-header__toggle--close');
  };

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', closeMenu);
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-header--open');
    navToggle.classList.toggle('main-header__toggle--open');
    navToggle.classList.toggle('main-header__toggle--close');

    if (navMain.classList.contains('main-header--open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  });
};
