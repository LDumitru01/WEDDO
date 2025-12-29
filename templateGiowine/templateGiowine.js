document.addEventListener("DOMContentLoaded", () => {

    // === 1. MOBILE MENU TOGGLE ===
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // Schimbăm iconița din Hamburger în X (opțional)
            if (mobileMenu.classList.contains('flex')) {
                menuBtn.innerText = "✕";
            } else {
                menuBtn.innerText = "☰";
            }
        });

        // Închidem meniul când dăm click pe un link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.innerText = "☰";
            });
        });
    }


    // === 2. TAB SWITCHER SYSTEM ===
    const tabs = document.querySelectorAll('.gio-tab');
    const contents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 1. Eliminăm clasa active de pe toate tab-urile și conținutul
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // 2. Activăm tab-ul curent
                tab.classList.add('active');

                // 3. Găsim și activăm conținutul corespunzător
                const targetId = tab.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                    
                    // Mică animație de intrare pentru elementele din noul tab
                    // Resetăm animația CSS pentru a rula din nou
                    targetContent.style.animation = 'none';
                    targetContent.offsetHeight; /* trigger reflow */
                    targetContent.style.animation = 'fadeIn 0.5s ease forwards';
                }
            });
        });
    }


    // === 3. SCROLL REVEAL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // === 4. NAVBAR SCROLL EFFECT ===
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.remove('header-border'); // Scoatem linia fină la scroll
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.add('header-border');
        }
    });


    // === 5. RSVP FORM HANDLER ===
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            // Stare de încărcare
            btn.disabled = true;
            btn.innerText = "SE TRIMITE...";
            btn.style.backgroundColor = "#FFFFFF";
            btn.style.color = "#000000";

            // Simulare trimitere succes
            setTimeout(() => {
                btn.innerText = "CONFIRMAT";
                btn.style.backgroundColor = "var(--accent)"; // Auriu
                
                this.reset();

                // Revenire la starea inițială după 3 secunde
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.style = ""; // Reset inline styles
                }, 3000);
            }, 1500);
        });
    }

});