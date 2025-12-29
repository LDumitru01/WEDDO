// MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.nav-link-mobile').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// SMOOTH SCROLL (optional, browser support e ok)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const el = document.getElementById(targetId);
        if (!el) return;
        e.preventDefault();
        window.scrollTo({
            top: el.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// COUNTDOWN
const eventDate = new Date("2025-09-20T17:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;
    if (diff <= 0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("cd-days").textContent = days.toString().padStart(2, "0");
    document.getElementById("cd-hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("cd-minutes").textContent = minutes.toString().padStart(2, "0");
}, 1000);

// REVEAL ANIMATIONS
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// RSVP FORM (simulare)
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');

rsvpForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = rsvpForm.querySelector('button');
    const initialText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-xs"></i> <span>Se trimite...</span>';

    setTimeout(() => {
        btn.innerHTML = initialText;
        btn.disabled = false;
        rsvpSuccess.classList.remove('hidden');
        rsvpForm.reset();
    }, 1500);
});