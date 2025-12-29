document.addEventListener("DOMContentLoaded", () => {

    // Înregistrare Plugin-uri GSAP
    gsap.registerPlugin(ScrollTrigger);

    // === 1. LOADER ANIMATION ===
    const loaderWrap = document.getElementById('loader');
    const counter = document.getElementById('loaderCount');
    let count = 0;

    // Asigurăm că pagina e complet încărcată
    window.addEventListener('load', () => {
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 5) + 2;
            if (count > 100) count = 100;
            
            if (counter) counter.innerText = count + "%";

            if (count === 100) {
                clearInterval(interval);
                
                // Animație "Curtain Up" (Clip Path)
                gsap.to(loaderWrap, {
                    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                    duration: 1.5,
                    ease: 'power4.inOut',
                    delay: 0.2,
                    onComplete: () => {
                        initAnimations(); // Pornim animațiile site-ului
                        loaderWrap.style.display = 'none';
                    }
                });
            }
        }, 30);
    });


    // === 2. SMOOTH SCROLL (LENIS) ===
    const lenis = new Lenis({
        duration: 1.5, // Mai lent pentru efectul "Fluid"
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // === 3. CUSTOM CURSOR ===
    const dot = document.querySelector('.cursor-dot');
    const circle = document.querySelector('.cursor-circle');

    // Activăm doar pe Desktop
    if (window.matchMedia("(pointer: fine)").matches && dot && circle) {
        window.addEventListener('mousemove', (e) => {
            // Punctul se mișcă instant
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
            // Cercul are o întârziere "fluidă"
            gsap.to(circle, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3, ease: "power2.out" });
        });

        const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button, input, select');
        hoverTriggers.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
        });
    } else {
        if(dot) dot.style.display = 'none';
        if(circle) circle.style.display = 'none';
    }


    // === 4. CORE ANIMATIONS ===
    function initAnimations() {

        // A. Hero Text Reveal (Caractere)
        const chars = document.querySelectorAll('.char');
        if(chars.length > 0) {
            gsap.to(chars, {
                y: 0,
                stagger: 0.05,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.1
            });
        }

        // B. Hero Floating Parallax (Imaginile mici)
        gsap.utils.toArray('.parallax-float').forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.05;
            gsap.to(el, {
                y: (i, target) => ScrollTrigger.maxScroll(window) * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0
                }
            });
        });

        // C. Standard Image Parallax (Scale & Move)
        gsap.utils.toArray('.img-parallax').forEach(img => {
            gsap.to(img, {
                yPercent: 20,
                scale: 1, // Zoom out ușor
                ease: 'none',
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // D. Skew Effect on Scroll (Intro Card)
        const skewElement = document.querySelector(".skew-on-scroll");
        if (skewElement) {
            let proxy = { skew: 0 };
            let skewSetter = gsap.quickSetter(skewElement, "skewY", "deg");
            let clamp = gsap.utils.clamp(-5, 5);

            ScrollTrigger.create({
                trigger: skewElement,
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -300);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0,
                            duration: 0.8,
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            });
        }

        // E. Horizontal Drag Gallery
        const slider = document.querySelector('.gallery-strip');
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

});


// === 5. RSVP FORM HANDLER ===
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "Se trimite...";
    btn.style.borderColor = "var(--c-accent)";
    btn.style.color = "var(--c-accent)";

    // Simulare trimitere date
    setTimeout(() => {
        // Mesaj Succes
        btn.innerText = "Confirmat";
        btn.style.backgroundColor = "var(--c-accent)";
        btn.style.color = "white";
        
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style = ""; // Reset inline styles
        }, 3000);
        
    }, 1500);
}