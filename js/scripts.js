year.textContent = new Date().getFullYear();
goTop.style.display = 'none';
let showMobileMenu = false;

window.onscroll = (evt) => {
  if (window.scrollY > window.innerHeight) {
    goTop.style.display = 'block';
  }
  else {
    goTop.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleMobileMenu() {
  if (!showMobileMenu) {
    mobileMenu.classList.add('show-mobile-menu');
    mobileMenu.classList.remove('hide-mobile-menu');
    toggleMenu.src = './assets/close-menu.svg';
    showMobileMenu = true;
  }
  else {
    mobileMenu.classList.add('hide-mobile-menu');
    mobileMenu.classList.remove('show-mobile-menu');
    toggleMenu.src = './assets/align-justify.svg';
    showMobileMenu = false;
  }
}
