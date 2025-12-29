document.addEventListener('DOMContentLoaded', () => {

    // === 1. PRELOADER ===
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        // Ascundem loader-ul după ce totul s-a încărcat
        if (loader) {
            setTimeout(() => {
                loader.classList.add('loader-hidden');
                // Permitem scroll-ul doar după load
                document.body.style.overflow = 'auto'; 
            }, 800);
        }
    });


    // === 2. NAVBAR SCROLL EFFECT (Glassmorphism) ===
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-nav');
            navbar.classList.remove('py-6');
            navbar.classList.add('py-4');
        } else {
            navbar.classList.remove('glass-nav');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-6');
        }
    });


    // === 3. MOBILE MENU TOGGLE ===
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('translate-x-full');
        // Schimbăm iconița burger (opțional, vizual)
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', toggleMenu);
        
        // Închidem meniul când dăm click pe un link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }


    // === 4. COUNTDOWN TIMER ===
    const countdownContainer = document.getElementById('countdown');
    if (countdownContainer) {
        const weddingDate = new Date("August 24, 2025 16:00:00").getTime();

        const timer = setInterval(function () {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const elDays = document.getElementById("days");
            const elHours = document.getElementById("hours");
            const elMin = document.getElementById("minutes");
            const elSec = document.getElementById("seconds");

            if(elDays) elDays.innerText = days < 10 ? "0" + days : days;
            if(elHours) elHours.innerText = hours < 10 ? "0" + hours : hours;
            if(elMin) elMin.innerText = minutes < 10 ? "0" + minutes : minutes;
            if(elSec) elSec.innerText = seconds < 10 ? "0" + seconds : seconds;

            if (distance < 0) {
                clearInterval(timer);
                countdownContainer.innerHTML = "<div class='col-span-4 text-4xl font-serif text-primary animate-pulse'>Astăzi este ziua cea mare!</div>";
            }
        }, 1000);
    }


    // === 5. SCROLL REVEAL ANIMATION ===
    const observerOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opțional: oprim observarea după ce a apărut
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-section').forEach(el => observer.observe(el));


    // === 6. FAQ ACCORDION ===
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Închidem celelalte tab-uri (opțional)
            // faqItems.forEach(other => { if(other !== item) other.classList.remove('active'); });
            
            // Toggle curent
            item.classList.toggle('active');
        });
    });


    // === 7. LIGHTBOX DINAMIC ===
    const lightboxTriggerElements = document.querySelectorAll('.lightbox-trigger');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-lightbox');
    const nextBtn = document.getElementById('next-image');
    const prevBtn = document.getElementById('prev-image');

    let galleryImages = []; // Stocăm sursele imaginilor
    let currentImageIndex = 0;

    // A. Construim array-ul de imagini și atașăm evenimente
    if (lightboxTriggerElements.length > 0) {
        lightboxTriggerElements.forEach((trigger, index) => {
            const img = trigger.querySelector('img');
            if (img) {
                galleryImages.push(img.src);
                
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    openLightbox(index);
                });
            }
        });
    }

    function openLightbox(index) {
        if (!lightbox) return;
        currentImageIndex = index;
        updateLightboxImage();
        
        lightbox.classList.remove('hidden');
        // Mic delay pentru tranziție CSS
        setTimeout(() => lightbox.classList.add('visible'), 10);
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('visible');
        setTimeout(() => lightbox.classList.add('hidden'), 300);
        document.body.style.overflow = 'auto';
    }

    function updateLightboxImage() {
        if (lightboxImg) {
            // Fade effect la schimbare
            lightboxImg.style.opacity = '0.5';
            setTimeout(() => {
                lightboxImg.src = galleryImages[currentImageIndex];
                lightboxImg.style.opacity = '1';
            }, 150);
        }
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }

    // B. Atașare controale Lightbox
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    
    // Închidere la click în afara imaginii
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        // Navigare tastatură
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });
    }


    // === 8. RSVP FORM HANDLING ===
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            // Stare Loading
            btn.disabled = true;
            btn.innerText = "SE TRIMITE...";
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            // Simulare succes
            setTimeout(() => {
                btn.innerText = "CONFIRMAT CU SUCCES";
                btn.classList.remove('bg-primary', 'text-surface');
                btn.classList.add('bg-white', 'text-primary'); // Stil succes
                
                this.reset();

                // Resetare buton după 3 secunde
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-white', 'text-primary');
                    btn.classList.add('bg-primary', 'text-surface');
                }, 3000);
            }, 1500);
        });
    }

});