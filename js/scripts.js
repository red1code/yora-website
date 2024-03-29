year.textContent = new Date().getFullYear();
goTop.style.visibility = 'hidden';
let showMobileMenu = false;

window.onscroll = (evt) => {
  if (window.scrollY > (window.innerHeight / 2)) {
    goTop.style.visibility = 'visible';
  }
  else {
    goTop.style.visibility = 'hidden';
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

function changeLanguage(evt) {
  saveToLocalStorage('current_language', evt.target.value);
  window.location.href = './index.html';
}

function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  }
  catch (error) {
    console.error(error);
  }
}
