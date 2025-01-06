const menu = document.querySelector('.mobile__menu--list');
const hamburgerIcon = document.querySelector('.hamburger__icon');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('open');
  menu.classList.toggle('open');
});

menu.addEventListener('click', (e) => {
  const linkEl = e.target.closest('.mobile__menu--link');
  console.log();
  if (linkEl) {
    hamburgerIcon.classList.toggle('open');
    menu.classList.toggle('open');
  }
});
