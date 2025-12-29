document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INIȚIALIZARE SMOOTH SCROLL (LENIS)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Înregistrare GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 2. NAVBAR LOGIC (Frosted Glass Effect)
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            navbar.classList.add('py-6');
        }
    });

    // 3. CINEMATIC REVEALS (Folosind clasele CSS din HTML)
    // HTML-ul are deja stiluri pentru .reveal-on-scroll.is-visible
    // Folosim GSAP doar pentru a declanșa clasa la momentul potrivit.
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    revealElements.forEach((el) => {
        ScrollTrigger.create({
            trigger: el,
            start: "top 85%", // Se activează când elementul e la 85% din viewport
            onEnter: () => el.classList.add('is-visible'),
            // Opțional: Dacă vrei să dispară când dai scroll înapoi sus:
            // onLeaveBack: () => el.classList.remove('is-visible') 
        });
    });

    // 4. PARALLAX EFFECTS (Pentru imagini)
    // Efect subtil de mișcare pentru imaginile din Story și Gallery
    
    const images = document.querySelectorAll('#story img, #gallery img');
    
    images.forEach((img) => {
        gsap.to(img, {
            yPercent: 10, // Mișcare ușoară verticală
            ease: "none",
            scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // 5. HERO PARALLAX
    // Textul din Hero se mișcă puțin mai repede decât fundalul la scroll
    gsap.to('#hero div.relative.z-10', {
        yPercent: 30,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 6. RSVP FORM HANDLER
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            // Stare Loading
            btn.disabled = true;
            btn.innerText = "SENDING...";
            btn.classList.add('bg-wedding-gold', 'text-white');
            btn.classList.remove('bg-wedding-cream', 'text-wedding-dark');

            // Simulare Trimitere
            setTimeout(() => {
                // Stare Succes
                btn.innerText = "CONFIRMED";
                btn.classList.remove('bg-wedding-gold');
                btn.classList.add('bg-wedding-dark');
                
                form.reset();

                // Reset după 3 secunde
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.classList.remove('bg-wedding-dark', 'text-white');
                    btn.classList.add('bg-wedding-cream', 'text-wedding-dark');
                }, 3000);
            }, 1500);
        });
    }

});