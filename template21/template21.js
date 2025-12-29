document.addEventListener("DOMContentLoaded", () => {

    // 1. REVEAL ANIMATIONS (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Elementul apare când 10% din el este vizibil
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opțional: Oprim observarea după prima apariție pentru performanță
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
});

// 2. RSVP FORM HANDLER
// Funcție globală apelată de onsubmit="handleRSVP(event)" din HTML
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea paginii
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "Se procesează...";
    
    // Schimbăm stilul pentru feedback vizual (Theme: Neon Gold)
    btn.classList.remove('bg-yellow-500', 'text-black', 'hover:bg-white');
    btn.classList.add('bg-gray-700', 'text-white', 'cursor-not-allowed');

    // Simulare trimitere date (Aici ar veni logica de backend PHP/Email)
    setTimeout(() => {
        // Resetare buton - Succes
        btn.innerText = "Confirmat!";
        btn.classList.remove('bg-gray-700');
        btn.classList.add('bg-white', 'text-black'); // Succes: Alb cu text negru
        
        // Resetare formular
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            
            // Revenim la stilul original (Neon Gold)
            btn.classList.remove('bg-white', 'text-black', 'cursor-not-allowed');
            btn.classList.add('bg-yellow-500', 'text-black', 'hover:bg-white');
            
        }, 3000);
        
    }, 1500);
}