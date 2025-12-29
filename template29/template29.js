document.addEventListener("DOMContentLoaded", () => {

    // === 1. LOADER ANIMATION ===
    window.addEventListener('load', () => {
        // Adăugăm clasa 'loaded' pe body pentru a declanșa tranzițiile CSS
        document.body.classList.add('loaded');
        
        // Pornim animațiile GSAP după ce loader-ul dispare
        setTimeout(() => {
            initAnimations();
        }, 1000);
    });


    // === 2. SMOOTH SCROLL (LENIS) ===
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // === 3. CANVAS GOLD DUST (TRAIL EFFECT) ===
    const canvas = document.getElementById('trailCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, particles = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor(x, y) {
                this.x = x; 
                this.y = y;
                this.size = Math.random() * 2 + 0.5;
                this.life = 1; 
                this.decay = 0.015;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
            }
            update() {
                this.x += this.vx; 
                this.y += this.vy;
                this.life -= this.decay;
                if(this.size > 0.1) this.size -= 0.03;
            }
            draw() {
                ctx.fillStyle = `rgba(214, 188, 133, ${this.life})`; // Gold Color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animateCanvas = () => {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].life <= 0 || particles[i].size <= 0) {
                    particles.splice(i, 1); 
                    i--;
                }
            }
            requestAnimationFrame(animateCanvas);
        };
        animateCanvas();

        // Adăugăm particule la mișcarea mouse-ului (doar Desktop)
        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener('mousemove', (e) => {
                for (let i = 0; i < 2; i++) {
                    particles.push(new Particle(e.clientX, e.clientY));
                }
            });
        }
    }


    // === 4. CUSTOM CURSOR ===
    const cursor = document.querySelector('.cursor-outline');
    const dot = document.querySelector('.cursor-main');

    if (window.matchMedia("(pointer: fine)").matches && cursor && dot) {
        window.addEventListener('mousemove', (e) => {
            // Punctul mic se mișcă instant
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
            // Cercul mare are un delay cinematic
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" });
        });

        // Hover States
        document.querySelectorAll('.hover-trigger, a, button, input').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
        });
    } else {
        // Ascundem pe mobil
        if(cursor) cursor.style.display = 'none';
        if(dot) dot.style.display = 'none';
    }


    // === 5. GSAP ANIMATIONS ===
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // A. Hero Text Split Reveal
        const splits = document.querySelectorAll('.text-split');
        gsap.to(splits, {
            y: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: 'power4.out',
            delay: 0.2
        });

        // B. Hero Background Parallax
        const heroBg = document.getElementById('hero-bg');
        if(heroBg) {
            gsap.to(heroBg, {
                yPercent: 30,
                scale: 1.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#sec-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        // C. Intro Text Reveal on Scroll
        const revealText = document.querySelector('.reveal-text-scroll');
        if(revealText) {
            gsap.from(revealText, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: revealText,
                    start: 'top 85%'
                }
            });
        }

        // D. Image Reveal (Scale Down Effect)
        const imgReveals = document.querySelectorAll('.img-reveal');
        imgReveals.forEach(img => {
            ScrollTrigger.create({
                trigger: img,
                start: 'top 80%',
                onEnter: () => img.parentElement.classList.add('is-visible')
            });
        });

        // E. Horizontal Scroll Gallery
        const galleryTrack = document.getElementById('galleryTrack');
        const gallerySection = document.getElementById('sec-gallery');
        
        if (galleryTrack && gallerySection && window.innerWidth > 768) {
            // Calculăm lățimea de scroll: (lățime totală elemente - lățime fereastră) + padding
            const scrollAmount = galleryTrack.scrollWidth - window.innerWidth + 100;
            
            gsap.to(galleryTrack, {
                x: -scrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: gallerySection,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + scrollAmount
                }
            });
        }
    }

});


// === 6. RSVP FORM HANDLER ===
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "SE TRIMITE...";
    
    // Feedback vizual (Emerald/Gold Theme)
    btn.style.backgroundColor = "var(--c-gold)";
    btn.style.color = "var(--c-bg)";
    btn.style.borderColor = "var(--c-gold)";

    // Simulare trimitere date
    setTimeout(() => {
        // Mesaj Succes
        btn.innerText = "MESAJ TRIMIS";
        
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style = ""; // Reset inline styles
        }, 3000);
        
    }, 1500);
}