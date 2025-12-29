document.addEventListener("DOMContentLoaded", () => {

    // 1. STACKING EFFECT LOGIC (Carduri Suprapuse)
    const sections = document.querySelectorAll('.stack-section');

    function animateStack() {
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            // Nu aplicăm efecte pe ultima secțiune, ea doar vine deasupra
            if (index === sections.length - 1) return;

            const nextSection = sections[index + 1];
            const nextRect = nextSection.getBoundingClientRect();

            // Calculăm procentul de acoperire
            // nextRect.top este distanța părții de sus a secțiunii următoare față de ecran
            // Când nextRect.top = windowHeight, abia intră în ecran (0% acoperire)
            // Când nextRect.top = 0, a acoperit complet secțiunea curentă (100% acoperire)
            
            let coverage = 0;

            if (nextRect.top <= windowHeight && nextRect.top >= 0) {
                // Secțiunea următoare este în tranzit pe ecran
                coverage = 1 - (nextRect.top / windowHeight);
            } else if (nextRect.top < 0) {
                // Secțiunea următoare a trecut deja peste (scrollat mai jos)
                coverage = 1;
            }

            // Aplicăm efectele vizuale
            // Scale: de la 1.0 la 0.9
            // Brightness: de la 1.0 la 0.4
            // Blur: de la 0px la 5px (pentru profunzime)
            const scale = 1 - (coverage * 0.1); 
            const brightness = 1 - (coverage * 0.6);
            const blur = coverage * 5; 

            section.style.transform = `scale(${scale})`;
            section.style.filter = `brightness(${brightness}) blur(${blur}px)`;
        });
    }

    // Ascultăm scroll-ul folosind requestAnimationFrame pentru 60fps
    window.addEventListener('scroll', () => {
        requestAnimationFrame(animateStack);
    });

    // Apelăm o dată la încărcare pentru poziționare inițială
    animateStack();
});


// 2. RSVP FORM HANDLER (Funcția Standard)
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea paginii
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "Se trimite...";
    
    // Schimbăm stilul pentru feedback vizual (Inverse colors for this dark theme)
    btn.classList.remove('bg-white', 'text-black');
    btn.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');

    // Simulare trimitere date (Backend PHP)
    setTimeout(() => {
        // Resetare buton - Succes
        btn.innerText = "Mesaj Trimis!";
        btn.classList.remove('bg-gray-500');
        btn.classList.add('bg-green-600', 'border-green-600'); // Un verde subtil sau Gold
        
        // Resetare formular
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            
            // Revenim la stilul original (Alb cu text Negru)
            btn.classList.remove('bg-green-600', 'border-green-600', 'text-white', 'cursor-not-allowed');
            btn.classList.add('bg-white', 'text-black');
            
        }, 3000);
        
    }, 1500);
}