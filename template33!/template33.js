// A. APP LOGIC
const app = {
    init: () => {
        app.setupLoader();
        app.setupScroll();
        app.setupAnimations();
        app.setupCanvas();
    },

    setupLoader: () => {
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');

                // Trigger Hero Animations
                gsap.to('.reveal-pop', {
                    y: 0, opacity: 1, scale: 1,
                    duration: 1.2, stagger: 0.1,
                    ease: "elastic.out(1, 0.75)",
                    delay: 0.5
                });
            }, 1000);
        });
    },

    setupScroll: () => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
    },

    setupAnimations: () => {
        gsap.registerPlugin(ScrollTrigger);

        // Timeline Items
        gsap.utils.toArray('.reveal-line').forEach(item => {
            gsap.from(item, {
                y: 50, opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                }
            });
        });

        // Parallax Hero Title
        gsap.to('.hero-title', {
            yPercent: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    },

    setupCanvas: () => {
        const canvas = document.getElementById('starCanvas');
        const ctx = canvas.getContext('2d');
        let width, height, stars = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.alpha = Math.random();
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.alpha += (Math.random() - 0.5) * 0.05;
                if (this.alpha < 0) this.alpha = 0;
                if (this.alpha > 1) this.alpha = 1;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }
            draw() {
                ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha * 0.5})`; // Gold dust
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 100; i++) stars.push(new Star());

        function animate() {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => {
                star.update();
                star.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }
};

app.init();