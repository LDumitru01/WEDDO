// template2.js
document.addEventListener('DOMContentLoaded', () => {

    // 1. Configurare Intersection Observer (Brain of animations)
    // Acesta detectează când un element intră în ecran
    const observerOptions = {
        threshold: 0.15, // Declanșează când 15% din element e vizibil
        rootMargin: "0px 0px -50px 0px" // Offset mic pentru a părea mai natural
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adaugă clasa 'active' pentru a porni animația CSS
                entry.target.classList.add('active');
                
                // Opțional: Dacă e o linie decorativă, îi putem da un delay
                if(entry.target.classList.contains('draw-line')) {
                    entry.target.style.width = "100px"; // Sau lățimea dorită
                }

                // Nu mai observăm elementul după ce a apărut o dată
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Selectăm elementele de animat
    const elementsToAnimate = document.querySelectorAll('.fade-up, .reveal-img-wrapper, .draw-line');
    elementsToAnimate.forEach(el => observer.observe(el));

    // 3. Smooth Parallax Effect pentru Hero (Opțional, pentru extra finețe)
    const heroImage = document.querySelector('header img');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition < window.innerHeight) {
            // Mișcă imaginea la jumătate din viteza scroll-ului
            heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });
});