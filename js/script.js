// function toggleMenu() {
//   const menu = document.querySelector('.menu-links');
//   const icon = document.querySelector('.hamburger-icon');
//   menu.classList.toggle('open');
//   icon.classList.toggle('open');
// }

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  hamburgerIcon.addEventListener('click', function () {
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!hamburgerIcon.contains(e.target) && !menuLinks.contains(e.target)) {
      menuLinks.classList.remove('open');
      hamburgerIcon.classList.remove('open');
    }
  });
});
