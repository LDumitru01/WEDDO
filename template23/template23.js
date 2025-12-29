document.addEventListener("DOMContentLoaded", () => {

    // 1. PRELOADER
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                // Adăugăm clasa definită în CSS pentru a ascunde preloader-ul
                preloader.classList.add('hidden-loader');
            }, 500);
        });
    }

    // 2. SMOOTH SCROLL (Lenis)
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

    // 3. REVEAL ON SCROLL (Unified Intersection Observer)
    // Această logică se aplică atât imaginilor (.img-reveal) cât și textului (.line-wrap)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activează când 10% din element e vizibil
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adăugăm clasa 'in-view' părintelui observat
                // CSS-ul se va ocupa de restul (.in-view .line-text sau .in-view img)
                entry.target.classList.add('in-view');
                
                // Opțional: Oprim observarea pentru performanță
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observăm wrapper-ele de text și containerele de imagini
    const revealElements = document.querySelectorAll('.line-wrap, .img-reveal');
    revealElements.forEach(el => observer.observe(el));


    // 4. CUSTOM CURSOR (Doar pe Desktop)
    const cursor = document.querySelector('.cursor');
    const triggers = document.querySelectorAll('.hover-trigger');

    // Verificăm dacă utilizatorul are un mouse (nu activăm pe touch)
    if (window.matchMedia("(pointer: fine)").matches && cursor) {
        
        document.addEventListener('mousemove', (e) => {
            // Folosim translate3d pentru performanță hardware
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });

        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('hover-active'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('hover-active'));
        });
    } else {
        if(cursor) cursor.style.display = 'none';
    }

});

// 5. RSVP FORM HANDLER
// Aceasta este funcția apelată de onsubmit="handleRSVP(event)" din HTML
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea paginii
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare (Stil: Editorial Minimalist)
    btn.disabled = true;
    btn.innerText = "Se trimite...";
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    // Simulare trimitere date
    setTimeout(() => {
        // Resetare buton - Succes
        btn.innerText = "Mesaj Trimis";
        // Schimbăm culoarea în Accent (Terracotta) pentru confirmare vizuală
        btn.style.backgroundColor = "#D25F38"; 
        btn.style.color = "#F3F0EB";
        
        // Resetare formular
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.backgroundColor = ""; // Revenire la stilul CSS original
            btn.style.color = "";
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 3000);
        
    }, 1500);
}