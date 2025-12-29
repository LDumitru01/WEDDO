document.addEventListener("DOMContentLoaded", () => {

    // 1. LOADER LOGIC
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loaderBar');
    const loaderText = document.getElementById('loaderText');

    let progress = 0;
    
    // Asigurăm că avem elementele înainte de a rula intervalul
    if (loader && loaderBar && loaderText) {
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 5) + 1;
            if (progress > 100) progress = 100;

            loaderBar.style.width = `${progress}%`;
            loaderText.innerText = progress;

            if (progress === 100) {
                clearInterval(interval);
                
                // Animație de ieșire Loader
                gsap.to(loader, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "power4.inOut",
                    delay: 0.2,
                    onComplete: () => {
                        initAnimations(); // Pornim restul animațiilor
                        loader.style.display = 'none'; // Ascundem complet pentru performanță
                    }
                });
            }
        }, 20);
    } else {
        // Fallback dacă nu există loader (de ex. la editări rapide)
        initAnimations();
    }


    // 2. CURSOR CUSTOM LOGIC (Doar Desktop)
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    
    if (window.matchMedia("(pointer: fine)").matches && cursorDot && cursorCircle) {
        window.addEventListener('mousemove', (e) => {
            // Folosim x/y direct pentru performanță mai bună
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(cursorCircle, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power2.out" });
        });

        const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button, input, select');
        hoverTriggers.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    } else {
        if(cursorDot) cursorDot.style.display = 'none';
        if(cursorCircle) cursorCircle.style.display = 'none';
    }


    // 3. INIT ANIMATIONS (Funcția Principală)
    function initAnimations() {
        
        // Înregistrare Plugin-uri GSAP
        gsap.registerPlugin(ScrollTrigger);

        // A. Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);


        // B. Hero Parallax & Text Reveal
        if(document.querySelector("#heroImg")) {
            gsap.to("#heroImg", {
                yPercent: 30,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: "#sec-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        // C. Reveal Texts (Intersection Observer Simplu pentru performanță)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-inview');
                    // observer.unobserve(entry.target); // Decomentează pentru a rula o singură dată
                }
            });
        }, { threshold: 0.15 });
        
        document.querySelectorAll('.reveal-wrap').forEach(el => observer.observe(el));


        // D. Image Parallax (GSAP)
        gsap.utils.toArray('.img-parallax').forEach(img => {
            gsap.to(img, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });


        // E. Marquee Text (Story Title)
        if(document.querySelector(".marquee-text")) {
            gsap.to(".marquee-text", {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#sec-couple",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }


        // F. Gallery Columns Parallax (Desktop Only)
        if (window.innerWidth > 768) {
            gsap.utils.toArray('.parallax-col').forEach((col) => {
                const speed = col.getAttribute('data-speed') || 1;
                gsap.to(col, {
                    y: -100 * speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#sec-gallery",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }
    }
});


// 4. MOBILE MENU LOGIC
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('translate-x-full');
    }
}


// 5. RSVP FORM HANDLER
function handleRSVP(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "SE PROCESEAZĂ...";
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    // Simulare trimitere
    setTimeout(() => {
        // Succes
        btn.innerText = "MESAJ TRIMIS";
        btn.style.backgroundColor = "#D4AF37"; // Gold
        btn.style.color = "#0e0e0e"; // Black
        
        form.reset();
        
        // Resetare stare
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.backgroundColor = ""; 
            btn.style.color = "";
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 3000);
        
    }, 1500);
}