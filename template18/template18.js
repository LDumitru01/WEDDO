// 1. ANIMAȚII LA SCROLL (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); // Se activează când 10% din element e vizibil

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

// 2. COUNTDOWN
const weddingDate = new Date('Aug 24, 2025 16:00:00').getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
}, 1000);