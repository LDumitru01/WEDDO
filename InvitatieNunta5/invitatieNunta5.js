// --- 1. LOGICĂ DE UNBOXING (Plicul) ---
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const stage = document.getElementById('envelope-stage');
    const app = document.getElementById('app-container');
    const music = document.getElementById('wedding-music');
    const musicBtn = document.getElementById('music-btn');

    // Animație Deschidere
    envelope.classList.add('open');

    // Încercare pornire muzică
    music.volume = 0.4;
    music.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(e => console.log('Autoplay blocat de browser, userul va porni manual'));

    // Tranziție către site
    setTimeout(() => {
        envelope.classList.add('full-expand'); // Zoom effect

        setTimeout(() => {
            stage.style.opacity = '0';
            stage.style.visibility = 'hidden';

            app.style.display = 'block';
            // Mic delay pentru a permite randarea CSS înainte de fade-in
            requestAnimationFrame(() => {
                app.style.opacity = '1';
                // Pornire scroll animations
                checkScroll();
            });
        }, 800);
    }, 1200);
}

// --- 2. AUDIO PLAYER ---
function toggleMusic() {
    const music = document.getElementById('wedding-music');
    const btn = document.getElementById('music-btn');

    if (music.paused) {
        music.play();
        btn.classList.add('playing');
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        music.pause();
        btn.classList.remove('playing');
        btn.innerHTML = '<i class="fas fa-music"></i>';
    }
}

// --- 3. MENIU MOBIL ---
function toggleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// --- 4. ACCORDION (Meniu) ---
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.fa-chevron-down');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// --- 5. COUNTDOWN TIMER ---
const eventDate = new Date("Aug 24, 2025 16:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('d').innerText = d < 10 ? '0' + d : d;
        document.getElementById('h').innerText = h < 10 ? '0' + h : h;
        document.getElementById('m').innerText = m < 10 ? '0' + m : m;
        document.getElementById('s').innerText = s < 10 ? '0' + s : s;
    }
}, 1000);

// --- 6. SCROLL REVEAL ANIMATION ---
const revealElements = document.querySelectorAll('.reveal');

const checkScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', checkScroll);

// --- 7. FORM SUBMIT SIMULATION ---
function handleRSVP(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const originalText = btn.innerText;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Se trimite...';
    btn.classList.add('opacity-75');

    setTimeout(() => {
        btn.style.display = 'none';
        document.getElementById('successMsg').classList.remove('hidden');
        // Aici poți adăuga logică reală de trimitere către un server/Google Sheets
    }, 1500);
}