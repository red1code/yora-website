year.textContent = new Date().getFullYear();
goTop.style.display = 'none';
let showMobileMenu = false;

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

window.onscroll = (evt) => {
  if (window.scrollY > window.innerHeight) {
    goTop.style.display = 'block';
  }
  else {
    goTop.style.display = 'none';
  }
}
