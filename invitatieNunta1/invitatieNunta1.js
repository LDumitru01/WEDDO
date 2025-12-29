// 1. UNBOXING LOGIC
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const stage = document.getElementById('envelope-stage');
    const app = document.getElementById('app-container');
    const music = document.getElementById('wedding-music');
    const musicBtn = document.getElementById('music-btn');

    // Open Animation
    envelope.classList.add('open');

    // Try Autoplay Music
    music.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(e => console.log('Autoplay prevented'));

    setTimeout(() => {
        envelope.classList.add('full-expand');

        setTimeout(() => {
            stage.style.opacity = '0';
            stage.style.visibility = 'hidden';
            app.style.display = 'block';

            // Allow render then fade in
            requestAnimationFrame(() => {
                app.style.opacity = '1';
                document.body.style.backgroundColor = '#fdfbf7';
                document.body.style.overflow = 'auto'; // Enable scroll
            });
        }, 800);
    }, 1000);
}

// 2. GENERAL UI LOGIC
function toggleNav() {
    const nav = document.getElementById('navOverlay');
    nav.classList.toggle('open');
    // Toggle hamburger icon logic here if needed
}

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

function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    btn.classList.toggle('active');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function handleRSVP(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerHTML = 'Se trimite...';
    setTimeout(() => {
        btn.style.display = 'none';
        document.getElementById('successMsg').classList.remove('hidden');
    }, 1500);
}

function addToCalendar() {
    const icsMsg = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Nunta Maria & Andrei\nDTSTART:20250824T130000Z\nDTEND:20250825T020000Z\nLOCATION:Complex Costesti\nEND:VEVENT\nEND:VCALENDAR";
    const blob = new Blob([icsMsg], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = "nunta.ics"; a.click();
}

// 3. COUNTDOWN & SCROLL
const eventDate = new Date("Aug 24, 2025 16:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;
    if (diff > 0) {
        document.getElementById('d').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('h').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('m').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('s').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
}, 1000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));