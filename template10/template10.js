// template10.js

document.addEventListener('DOMContentLoaded', () => {
    
    // LOGICA PENTRU STICKY SCROLL (EL / EA)
    const stickyWrapper = document.getElementById('storyTrigger');
    const slide1 = document.getElementById('slide1'); // EL
    const slide2 = document.getElementById('slide2'); // EA

    window.addEventListener('scroll', () => {
        // Unde începe secțiunea sticky față de ecran
        const rect = stickyWrapper.getBoundingClientRect();
        
        // Calculăm progresul scroll-ului prin secțiune (0 la 1)
        // Când rect.top e 0, suntem la început. Când e -height, suntem la final.
        const sectionHeight = stickyWrapper.offsetHeight - window.innerHeight;
        let progress = -rect.top / sectionHeight;

        // Limităm progresul între 0 și 1
        progress = Math.max(0, Math.min(progress, 1));

        // LOGICA DE SWITCH
        // Dacă suntem în prima jumătate (0 - 0.5), arătăm Slide 1
        // Dacă suntem în a doua jumătate (0.5 - 1), arătăm Slide 2
        
        if (progress < 0.4) {
            slide1.style.opacity = '1';
            slide1.style.transform = 'scale(1)';
            
            slide2.style.opacity = '0';
            slide2.style.transform = 'scale(1.1)'; // Efect subtil de zoom out la intrare
        } else {
            slide1.style.opacity = '0';
            slide1.style.transform = 'scale(0.9)'; // Efect subtil de zoom in la ieșire
            
            slide2.style.opacity = '1';
            slide2.style.transform = 'scale(1)';
        }
    });

    // SMOOTH REVEAL PENTRU RESTUL SECȚIUNILOR
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    // Selectăm elementele de text pentru animație simplă
    document.querySelectorAll('section h2, section p, .schedule-item').forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});