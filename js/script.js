// Toogle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active'); 
};
// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
