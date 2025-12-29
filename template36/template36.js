document.addEventListener("DOMContentLoaded", () => {

    // Înregistrare Plugin-uri GSAP
    gsap.registerPlugin(ScrollTrigger);

    // === 1. SMOOTH SCROLL (LENIS) ===
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // === 2. PRELOADER & HERO SEQUENCE ===
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        
        setTimeout(() => {
            // Ridicăm cortina
            if (loader) loader.classList.add('open');
            
            // Pornim animația Hero cu o mică întârziere
            setTimeout(initHero, 800);
        }, 1000);
    });

    function initHero() {
        const heroMask = document.getElementById('heroMask');
        
        if (heroMask) {
            // 1. Expansiune Mască (Imaginea se mărește pe tot ecranul)
            gsap.to(heroMask, {
                width: '100%',
                height: '100%',
                duration: 1.5,
                ease: 'power4.inOut'
            });

            // 2. Text Reveal (Numele)
            gsap.to('.hero-anim', {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                delay: 0.5,
                ease: 'power3.out'
            });

            // 3. Parallax Effect pe imagine la scroll
            gsap.to('.hero-img', {
                scale: 1, // Zoom out ușor la scroll
                y: 100,   // Mișcare verticală
                ease: 'none',
                scrollTrigger: {
                    trigger: '#sec-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }


    // === 3. SCROLL ANIMATIONS ===
    
    // A. Text Reveals (Titluri și paragrafe)
    const triggers = document.querySelectorAll('.reveal-trigger');
    triggers.forEach(section => {
        // Selectăm elementele copil care trebuie animate
        const elements = section.querySelectorAll('h2, h3, p, span, div.border');
        
        if(elements.length > 0) {
            gsap.from(elements, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%' // Se activează când elementul e 80% în viewport
                }
            });
        }
    });

    // B. Parallax Images (Secțiunile Couple & Location)
    gsap.utils.toArray('.parallax-img, .parallax-bg').forEach(img => {
        gsap.to(img, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: img.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // C. Marquee Animation (Date Banner)
    const marquee = document.querySelector('.animate-marquee');
    if (marquee) {
        gsap.to(marquee, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear"
        });
    }


    // === 4. HORIZONTAL GALLERY (GSAP MatchMedia) ===
    // Folosim matchMedia pentru a activa scroll-ul orizontal doar pe Desktop
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        const galleryWrapper = document.querySelector('.gallery-wrapper');
        const gallerySection = document.getElementById('sec-gallery');

        if (galleryWrapper && gallerySection) {
            // Calculăm lungimea totală a scroll-ului
            const scrollAmount = galleryWrapper.scrollWidth - window.innerWidth;

            gsap.to(galleryWrapper, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: gallerySection,
                    pin: true,
                    scrub: 1,
                    // Durata scroll-ului este proporțională cu lățimea galeriei
                    end: () => "+=" + galleryWrapper.scrollWidth
                }
            });
        }
    });

});


// === 5. RSVP FORM HANDLER ===
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea paginii
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "SE TRIMITE...";
    // Stil specific temei (Gold / Emerald)
    btn.style.backgroundColor = "var(--c-gold)";
    btn.style.color = "var(--c-bg)";
    btn.style.borderColor = "var(--c-gold)";

    // Simulare trimitere date
    setTimeout(() => {
        // Mesaj Succes
        btn.innerText = "MESAJ TRIMIS";
        btn.style.backgroundColor = "var(--c-text)"; // Cream color
        btn.style.color = "var(--c-bg)"; // Dark bg
        
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style = ""; // Reset inline styles
        }, 3000);
        
    }, 1500);
}