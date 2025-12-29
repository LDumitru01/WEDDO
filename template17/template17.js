document.addEventListener("DOMContentLoaded", () => {

    // 1. REVEAL ANIMATIONS ON SCROLL (Apariție elemente)
    const observerOptions = { 
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opțional: Oprim observarea după ce a apărut o dată
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .reveal-img').forEach(el => observer.observe(el));


    // 2. PARALLAX EFFECT FOR HERO (Efect de adâncime la scroll)
    const heroBg = document.getElementById('hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            // Aplicăm efectul doar dacă suntem încă în zona de sus a paginii pentru performanță
            if (scrolled < window.innerHeight) {
                // Mișcăm fundalul mai încet decât scroll-ul și menținem scale-ul
                heroBg.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0) scale(1.1)`;
            }
        });
    }


    // 3. COUNTDOWN (Numărătoarea inversă)
    const weddingDate = new Date('Aug 24, 2025 16:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        if (diff < 0) {
            clearInterval(timer);
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        // Actualizăm doar dacă elementele există în HTML
        const elDays = document.getElementById('days');
        const elHours = document.getElementById('hours');
        const elMins = document.getElementById('mins');

        if (elDays) elDays.innerText = d < 10 ? '0' + d : d;
        if (elHours) elHours.innerText = h < 10 ? '0' + h : h;
        if (elMins) elMins.innerText = m < 10 ? '0' + m : m;

    }, 1000);
});


// 4. RSVP FORM HANDLER (Funcția apelată din HTML)
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
        // Resetare buton - Succes
        btn.innerText = "Mesaj Trimis!";
        btn.style.backgroundColor = "#D4AF37"; // Gold
        btn.style.color = "#050505"; // Void Black
        btn.style.borderColor = "#D4AF37";
        
        // Resetare formular
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style = ""; // Șterge stilurile inline adăugate
            btn.classList.remove('opacity-75', 'cursor-not-allowed');
        }, 3000);
        
    }, 1500);
}