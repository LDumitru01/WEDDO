// 1. PRELOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }, 1500);
});

// 2. SCROLL REVEAL ANIMATION
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-element').forEach(el => {
    observer.observe(el);
});

// 3. MUSIC PLAYER LOGIC
const musicBtn = document.getElementById('music-toggle');
const audio = document.getElementById('wedding-music');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const iconContainer = document.querySelector('.music-icon-container');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        iconPlay.classList.add('hidden');
        iconPause.classList.remove('hidden');
        iconContainer.classList.add('animate-[spin_4s_linear_infinite]');
        isPlaying = true;
    } else {
        audio.pause();
        iconPlay.classList.remove('hidden');
        iconPause.classList.add('hidden');
        iconContainer.classList.remove('animate-[spin_4s_linear_infinite]');
        isPlaying = false;
    }
});

// 4. COUNTDOWN TIMER
const weddingDate = new Date("Aug 24, 2025 15:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
}, 1000);

// 5. FORM HANDLER
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Se trimite...';

    setTimeout(() => {
        btn.classList.remove('bg-wedding-gold');
        btn.classList.add('bg-green-600');
        btn.innerHTML = '<i class="fas fa-check"></i> Confirmat!';

        // Reset after 3 seconds
        setTimeout(() => {
            btn.classList.add('bg-wedding-gold');
            btn.classList.remove('bg-green-600');
            btn.innerText = originalText;
            this.reset();
        }, 3000);
    }, 1500);
});