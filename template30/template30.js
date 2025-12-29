/**
 * CELESTIAL WEDDING EXPERIENCE
 * Class Based Architecture for modularity and performance.
 */

// 1. LOADER CLASS
class Loader {
    constructor(onComplete) {
        this.counter = document.getElementById('loaderCount');
        this.bar = document.getElementById('loaderBar');
        this.wrap = document.getElementById('loader');
        this.progress = 0;
        this.onComplete = onComplete;
        
        if(this.wrap) this.init();
        else if(this.onComplete) this.onComplete();
    }

    init() {
        // Simulăm încărcarea resurselor
        const interval = setInterval(() => {
            this.progress += Math.floor(Math.random() * 5) + 2;
            if (this.progress > 100) this.progress = 100;

            if(this.counter) {
                this.counter.setAttribute('data-count', this.progress);
                this.counter.innerText = this.progress;
            }
            if(this.bar) {
                this.bar.style.transform = `scaleX(${this.progress / 100})`;
            }

            if (this.progress === 100) {
                clearInterval(interval);
                this.hide();
            }
        }, 20);
    }

    hide() {
        const tl = gsap.timeline();
        tl.to(this.wrap, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            delay: 0.5,
            onComplete: () => {
                if (this.onComplete) this.onComplete();
            }
        });
    }
}

// 2. CURSOR CLASS (Physics based)
class Cursor {
    constructor() {
        this.dot = document.querySelector('.cursor-dot');
        this.ring = document.querySelector('.cursor-ring');
        
        // Verificăm dacă suntem pe desktop
        this.isActive = window.matchMedia("(pointer: fine)").matches && this.dot && this.ring;
        
        if (this.isActive) {
            this.pos = { x: 0, y: 0 };
            this.mouse = { x: 0, y: 0 };
            this.speed = 0.15; // Factor de întârziere pentru inel
            this.init();
        } else {
            // Ascundem pe mobil
            if(this.dot) this.dot.style.display = 'none';
            if(this.ring) this.ring.style.display = 'none';
        }
    }

    init() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            
            // Punctul se mișcă instantaneu
            gsap.set(this.dot, { x: this.mouse.x, y: this.mouse.y });
        });

        this.animate();
        this.initHoverEvents();
    }

    animate() {
        // Interpolare liniară (LERP) pentru inel
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
        
        gsap.set(this.ring, { x: this.pos.x, y: this.pos.y });
        
        requestAnimationFrame(() => this.animate());
    }

    initHoverEvents() {
        // Selectori pentru elemente interactive
        const triggers = document.querySelectorAll('.hover-trigger, a, button, input');
        
        triggers.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('is-hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
        });
    }
}

// 3. MAIN APP CLASS
class App {
    constructor() {
        // Inițializăm cursorul imediat
        this.cursor = new Cursor();
        
        // Inițializăm loader-ul și pasăm callback-ul pentru start
        this.loader = new Loader(() => this.start());
        
        this.lenis = null;
    }

    start() {
        document.body.classList.remove('is-loading');
        this.initSmoothScroll();
        this.initAnimations();
        this.initInteractions();
    }

    initSmoothScroll() {
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease Out Quart
            smooth: true,
            mouseMultiplier: 1
        });

        const raf = (time) => {
            this.lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }

    initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // A. Hero Text Reveal (Staggered)
        const textReveals = document.querySelectorAll('.reveal-text');
        gsap.to(textReveals, {
            y: 0,
            skewY: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "expo.out",
            delay: 0.2
        });

        // B. Paragraph Text Highlight (Scroll Scrub)
        const paragraph = document.querySelector('.reveal-paragraph');
        if (paragraph) {
            gsap.to(paragraph, {
                color: '#E6E6E6', // Pearl White
                scrollTrigger: {
                    trigger: '#sec-intro',
                    start: 'top 70%',
                    end: 'bottom 70%',
                    scrub: true
                }
            });
        }

        // C. Parallax Images
        gsap.utils.toArray('.img-reveal').forEach(img => {
            gsap.to(img, {
                scale: 1, // Zoom out effect
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });
        
        // D. Timeline Items Reveal
        const timelineItems = document.querySelectorAll('.data-event-item');
        if(timelineItems.length > 0) {
            gsap.from(timelineItems, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#sec-timeline",
                    start: "top 75%"
                }
            });
        }
    }

    initInteractions() {
        // A. 3D Tilt Card (Location)
        const card = document.querySelector('.tilt-card');
        const wrap = document.querySelector('.perspective-wrap');

        if (wrap && card && window.matchMedia("(pointer: fine)").matches) {
            wrap.addEventListener('mousemove', (e) => {
                const rect = wrap.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculăm rotația (-10 la 10 grade)
                const xPct = (x / rect.width - 0.5) * 20; 
                const yPct = (y / rect.height - 0.5) * 20;

                gsap.to(card, {
                    rotationY: xPct,
                    rotationX: -yPct,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            
            wrap.addEventListener('mouseleave', () => {
                gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 });
            });
        }

        // B. Draggable Gallery
        const slider = document.querySelector('.gallery-wrapper');
        if (slider) {
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.style.cursor = 'grabbing';
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2; // Viteza de scroll
                slider.scrollLeft = scrollLeft - walk;
            });
        }
    }
}

// 4. GLOBAL FUNCTIONS (Menu & RSVP)
function toggleMenu() {
    const menu = document.getElementById('menuOverlay');
    if(menu) menu.classList.toggle('active');
}

function handleRSVP(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML; // Păstrăm structura butonului (span-uri)

    // Stare loading
    btn.disabled = true;
    btn.querySelector('span').innerText = "SENDING...";
    btn.style.borderColor = "var(--c-lavender)";
    btn.style.color = "var(--c-lavender)";

    setTimeout(() => {
        // Succes
        btn.querySelector('span').innerText = "CONFIRMED";
        btn.style.backgroundColor = "var(--c-lavender)";
        btn.style.color = "var(--c-void)";
        
        event.target.reset();
        
        setTimeout(() => {
            // Reset
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.style = "";
        }, 3000);
    }, 1500);
}

// Start Application
const app = new App();