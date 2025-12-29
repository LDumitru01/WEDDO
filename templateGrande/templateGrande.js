document.addEventListener("DOMContentLoaded", () => {

    // === 1. NAVIGATION (MOBILE MENU) ===
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Închidem meniul când se dă click pe un link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }


    // === 2. SCROLL REVEAL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Oprim observarea după activare
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // === 3. LIGHTBOX LOGIC ===
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('#sec-gallery img'); // Selectăm imaginile din secțiunea galerie
    const closeBtn = lightbox ? lightbox.querySelector('button') : null;

    function openLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex'); // Folosim flex pentru centrare
        document.body.style.overflow = 'hidden'; // Oprim scroll-ul paginii
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Repornim scroll-ul
    }

    // Event Listeners pentru imagini
    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            openLightbox(e.target.src);
        });
    });

    // Event Listeners pentru închidere
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    // Funcție globală pentru butonul X din HTML (dacă a rămas onclick inline)
    window.closeLightbox = closeLightbox;


    // === 4. THEME ENGINE & LOCAL STORAGE ===
    const root = document.documentElement;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const accentPicker = document.getElementById('accent-picker');
    const bgPicker = document.getElementById('bg-picker');

    // Funcție pentru aplicarea setărilor
    function applyTheme(themeData) {
        if (themeData.isDark) {
            root.classList.add('dark');
            if(darkModeToggle) darkModeToggle.checked = true;
        } else {
            root.classList.remove('dark');
            if(darkModeToggle) darkModeToggle.checked = false;
            // Aplicăm culoarea de fundal doar pe Light Mode
            if (themeData.bg) {
                root.style.setProperty('--color-bg', themeData.bg);
                if(bgPicker) bgPicker.value = themeData.bg;
            }
        }

        if (themeData.accent) {
            root.style.setProperty('--color-accent', themeData.accent);
            if(accentPicker) accentPicker.value = themeData.accent;
        }
    }

    // 1. Încărcare setări salvate
    const savedTheme = localStorage.getItem('wedding-theme');
    if (savedTheme) {
        applyTheme(JSON.parse(savedTheme));
    }

    // 2. Salvare setări
    function saveSettings() {
        const settings = {
            isDark: root.classList.contains('dark'),
            accent: getComputedStyle(root).getPropertyValue('--color-accent').trim(),
            bg: getComputedStyle(root).getPropertyValue('--color-bg').trim()
        };
        localStorage.setItem('wedding-theme', JSON.stringify(settings));
    }

    // 3. Event Listeners pentru controale
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
                // Resetăm fundalul la valoarea din picker când revenim la Light
                if(bgPicker) root.style.setProperty('--color-bg', bgPicker.value);
            }
            saveSettings();
        });
    }

    if (accentPicker) {
        accentPicker.addEventListener('input', (e) => {
            root.style.setProperty('--color-accent', e.target.value);
            saveSettings();
        });
    }

    if (bgPicker) {
        bgPicker.addEventListener('input', (e) => {
            // Schimbăm fundalul doar dacă nu suntem în Dark Mode
            if (!root.classList.contains('dark')) {
                root.style.setProperty('--color-bg', e.target.value);
                saveSettings();
            }
        });
    }


    // === 5. RSVP FORM HANDLER ===
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            // Stare Loading
            btn.disabled = true;
            btn.innerText = "SE TRIMITE...";
            btn.style.opacity = "0.7";

            // Simulare trimitere
            setTimeout(() => {
                btn.innerText = "CONFIRMARE TRIMISĂ";
                btn.style.backgroundColor = "#2C3E28"; // Dark green feedback
                btn.style.color = "white";
                btn.style.opacity = "1";
                
                this.reset();

                // Resetare buton după 3 secunde
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.style = ""; // Reset la stilul original
                }, 3000);
            }, 1500);
        });
    }

});