document.addEventListener("DOMContentLoaded", () => {

    // 1. INTERSECTION OBSERVER (Animații la Scroll)
    // Selectăm atât elementele timeline-ului cât și elementele generale de reveal
    const animatedElements = document.querySelectorAll('.timeline-item, .reveal-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activează când 15% din element este vizibil
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adăugăm clasa 'active' definită în CSS-ul din HTML
                entry.target.classList.add('active');
                
                // Opțional: Oprim observarea după ce a apărut o dată (pentru performanță)
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));


    // 2. DESENAREA LINIEI CENTRALE LA SCROLL (Timeline Progress)
    const progressLine = document.getElementById('progressLine');
    const mainContainer = document.querySelector('.timeline-line'); // Containerul principal <main>

    if (progressLine && mainContainer) {
        window.addEventListener('scroll', () => {
            const rect = mainContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculăm progresul relativ la containerul principal
            // Când containerul intră în centrul ecranului, linia începe să crească
            const containerTop = rect.top; 
            const containerHeight = rect.height;
            
            // Offset pentru a începe desenarea puțin mai devreme
            const offset = windowHeight / 2;

            // Calcul procentual
            // Formula: Cât de mult am scrolat "în jos" față de top-ul containerului
            let percentage = ((offset - containerTop) / containerHeight) * 100;

            // Limităm valorile între 0% și 100%
            percentage = Math.min(Math.max(percentage, 0), 100);

            // Aplicăm înălțimea
            progressLine.style.height = `${percentage}%`;
        });
    }
});

// 3. RSVP FORM HANDLER (Funcția apelată din HTML)
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea paginii
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "Se trimite...";
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    // Simulare trimitere date (Aici va veni logica de backend PHP)
    setTimeout(() => {
        // Resetare buton - Succes (Gradientul Gold/Rose)
        btn.innerText = "Mesaj Trimis!";
        // Putem schimba stilul butonului temporar
        btn.style.background = "#d97706"; // Gold solid
        
        // Resetare formular
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.background = ""; // Revine la gradientul din CSS
            btn.classList.remove('opacity-75', 'cursor-not-allowed');
        }, 3000);
        
    }, 1500);
}