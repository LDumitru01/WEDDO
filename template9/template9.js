// A. SMOOTH SCROLL
const lenis = new Lenis({ duration: 1.2, smooth: true });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// B. ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
gsap.from(".reveal-hero", {
    y: 50, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.5
});

// Scroll Reveals
const revealElements = document.querySelectorAll(".reveal-scroll");
revealElements.forEach(el => {
    gsap.from(el, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
    });
});

// Parallax Background Hero
gsap.to(".parallax-bg", {
    yPercent: 30, ease: "none",
    scrollTrigger: { trigger: "header", start: "top top", end: "bottom top", scrub: true }
});

function scrollToSection(id) {
    lenis.scrollTo(id);
}

// C. PETALS ANIMATION (CANVAS)
const canvas = document.getElementById('petalsCanvas');
const ctx = canvas.getContext('2d');
let width, height, petals = [];

function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
window.addEventListener('resize', resize);
resize();

class Petal {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
        this.y -= this.speedY;
        this.x += Math.sin(this.y * 0.01) * 0.2;
        if (this.y < 0) { this.y = height; this.x = Math.random() * width; }
    }
    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 60; i++) petals.push(new Petal());

function animatePetals() {
    ctx.clearRect(0, 0, width, height);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animatePetals);
}
animatePetals();
