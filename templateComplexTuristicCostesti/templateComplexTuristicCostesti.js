document.addEventListener("DOMContentLoaded", () => {

    // === 1. FORȚARE VIZIBILITATE HERO (FIX PENTRU PAGINA ALBĂ) ===
    // Facem header-ul vizibil imediat, chiar dacă Observer-ul întârzie
    const hero = document.getElementById('sec-hero');
    if (hero) {
        hero.classList.add('active');
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }

    // === 2. NAVIGATION TOGGLE (MOBILE) ===
    const navOverlay = document.getElementById('nav-overlay');
    const navToggleBtn = document.querySelector('.nav-toggle');
    // Căutăm butonul de închidere doar în interiorul overlay-ului
    const closeNavBtn = navOverlay ? navOverlay.querySelector('button') : null;
    const navLinks = navOverlay ? navOverlay.querySelectorAll('a') : [];

    function toggleNav() {
        if (!navOverlay || !navToggleBtn) return;

        // Logica de toggle clase Tailwind
        if (navOverlay.classList.contains('translate-x-full')) {
            // Deschide Meniul
            navOverlay.classList.remove('translate-x-full');
            navOverlay.classList.add('translate-x-0');
            navToggleBtn.style.opacity = '0'; // Ascunde butonul burger
        } else {
            // Închide Meniul
            navOverlay.classList.add('translate-x-full');
            navOverlay.classList.remove('translate-x-0');
            navToggleBtn.style.opacity = '1'; // Arată butonul burger
        }
    }

    // Atașăm evenimentele doar dacă elementele există
    if (navToggleBtn) navToggleBtn.addEventListener('click', toggleNav);
    if (closeNavBtn) closeNavBtn.addEventListener('click', toggleNav);
    
    navLinks.forEach(link => {
        link.addEventListener('click', toggleNav);
    });


    // === 3. SCROLL REVEAL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.1, // Se activează când 10% din element e vizibil
        rootMargin: "0px 0px -50px 0px" // Declanșează puțin înainte de a intra complet
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Oprește observarea după activare (performanță)
            }
        });
    }, observerOptions);

    // Selectăm toate elementele cu clasa .reveal
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        revealElements.forEach(el => observer.observe(el));
    } else {
        console.warn("Nu s-au găsit elemente cu clasa .reveal");
    }


    // === 4. RSVP FORM HANDLER ===
    const rsvpForm = document.querySelector('form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button');
            const originalText = btn ? btn.innerText : "TRIMITE";

            if (btn) {
                // Stare de încărcare
                btn.disabled = true;
                btn.innerText = "SE TRIMITE...";
                btn.style.backgroundColor = "#A8B688"; // Sage Green
                btn.style.color = "white";
                btn.style.borderColor = "#A8B688";

                // Simulare trimitere succes
                setTimeout(() => {
                    btn.innerText = "MESAJ TRIMIS";
                    
                    rsvpForm.reset(); // Resetăm formularul

                    // Revenire la starea inițială după 3 secunde
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.innerText = originalText;
                        btn.style = ""; // Reset inline styles
                    }, 3000);
                }, 1500);
            }
        });
    }

});