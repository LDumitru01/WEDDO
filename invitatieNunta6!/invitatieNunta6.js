// --- 1. PARTICLE SYSTEM ---
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random();
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > width) this.x = 0; if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0; if (this.y < 0) this.y = height;
        this.opacity += (Math.random() - 0.5) * 0.05;
        if (this.opacity < 0) this.opacity = 0; if (this.opacity > 1) this.opacity = 1;
    }
    draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}
for (let i = 0; i < 150; i++) particles.push(new Particle());
function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// --- 2. 3D TILT EFFECT ---
const cards = document.querySelectorAll('.js-tilt');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX; const y = e.clientY;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = x - centerX; const deltaY = y - centerY;
        const rotateY = deltaX / 25; const rotateX = -deltaY / 25;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
});
document.addEventListener('mouseleave', () => {
    cards.forEach(card => card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`);
});

// --- 3. COUNTDOWN TIMER LOGIC ---
const weddingDate = new Date("August 24, 2025 16:00:00").getTime();
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);