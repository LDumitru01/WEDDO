// Variabile pentru meniul mobil
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon   = document.getElementById('menuIcon');

// MODIFICARE AICI: Definim variabilele pentru Header Scroll
const header = document.getElementById('siteHeader'); 
let lastScrollTop = 0;

let isOpen = false;

// Logica Meniu Mobil
menuToggle.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove('hidden');
    requestAnimationFrame(() => {
      mobileMenu.classList.remove('opacity-0', '-translate-y-4');
      mobileMenu.classList.add('opacity-100', 'translate-y-0');
    });
    menuIcon.src = 'assets/icon/close.svg';
  } else {
    mobileMenu.classList.add('opacity-0', '-translate-y-4');
    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    menuIcon.src = 'assets/icon/menu.svg';

    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }
});

// --- LOGICA PENTRU SCROLL (STICKY HIDE/SHOW) ---
window.addEventListener('scroll', () => {
  // Obținem poziția curentă de scroll
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Dacă meniul de mobil e deschis, nu facem nimic (nu ascundem header-ul)
  if (isOpen) return;

  // Verificăm direcția scroll-ului
  if (scrollTop > lastScrollTop && scrollTop > 60) {
    // SCROLL ÎN JOS -> Ascundem meniul
    header.classList.add('-translate-y-full'); 
  } else {
    // SCROLL ÎN SUS -> Arătăm meniul
    header.classList.remove('-translate-y-full');
  }

  // Actualizăm ultima poziție, evitând valori negative (pentru iOS bounce effect)
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});