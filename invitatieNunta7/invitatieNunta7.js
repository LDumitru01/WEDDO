// 1. Cursor Follower (Simplu)
const cursor = document.getElementById('cursor');
if (window.matchMedia("(hover: hover)").matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// 2. Countdown Timer
const targetDate = new Date("Aug 24, 2025 16:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    document.getElementById('d').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('h').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('m').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('s').innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

// 3. SCROLL ANIMATION (Logica "El -> Ea")
// Folosim IntersectionObserver pentru stabilitate, nu pixeli
// Doar pe Desktop
if (window.innerWidth >= 900) {
    const aboutContainer = document.querySelector('.about-container');
    const imgEl = document.getElementById('img-el');
    const imgEa = document.getElementById('img-ea');
    const txtEl = document.getElementById('txt-el');
    const txtEa = document.getElementById('txt-ea');

    window.addEventListener('scroll', () => {
        const rect = aboutContainer.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        // Când containerul este la jumătatea scroll-ului său
        // rect.top începe pozitiv și devine negativ pe măsură ce dăm scroll
        // -rect.top înseamnă câți pixeli am scrollat în interiorul containerului

        const scrollProgress = -rect.top;

        // Punctul de schimbare (aprox 400px scroll in sectiune)
        if (scrollProgress > viewHeight * 0.5) {
            // SWITCH TO EA
            imgEl.classList.add('hidden');
            imgEa.classList.remove('hidden');

            txtEl.classList.remove('visible');
            txtEl.classList.add('hidden-block'); // Ascundem complet

            txtEa.classList.remove('hidden-block');
            setTimeout(() => txtEa.classList.add('visible'), 50); // Mic delay pt animatie

        } else {
            // SWITCH TO EL
            imgEl.classList.remove('hidden');
            imgEa.classList.add('hidden');

            txtEa.classList.remove('visible');
            txtEa.classList.add('hidden-block');

            txtEl.classList.remove('hidden-block');
            setTimeout(() => txtEl.classList.add('visible'), 50);
        }
    });
} else {
    // MOBILE FIX: Afișăm elementele de mobil (prin CSS Media Queries)
    // Clasa d-lg-none se ocupa de asta in stiluri
    document.querySelectorAll('.mobile-stack-item').forEach(el => el.style.display = 'block');
}