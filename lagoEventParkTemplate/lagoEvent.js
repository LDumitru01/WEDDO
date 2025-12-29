// lagoEvent.js - Updated for Standard Master Template

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect (Glassmorphism adjustment)
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-2');
            navbar.classList.remove('py-4', 'bg-[#0B253A]/90');
            navbar.classList.add('bg-[#0B253A]/95'); // Mai opac la scroll
        } else {
            navbar.classList.remove('shadow-lg', 'py-2', 'bg-[#0B253A]/95');
            navbar.classList.add('py-4', 'bg-[#0B253A]/90');
        }
    });

    // 2. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Rulează animația o singură dată
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// 3. Mobile Menu Logic
// Funcțiile sunt apelate direct din HTML (onclick), dar putem adăuga logică extra dacă e nevoie
// HTML-ul se ocupă de clasele 'translate-x-full'

// 4. Lightbox Logic (Galerie Foto)
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');

// Funcția apelată din HTML: onclick="openLightbox(this.src)"
function openLightbox(imageSrc) {
    if (!lightbox || !lbImg) return;
    
    lbImg.src = imageSrc;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Oprește scroll-ul paginii
}

// Funcția apelată din HTML: onclick="closeLightbox()"
function closeLightbox() {
    if (!lightbox) return;
    
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = ''; // Repornește scroll-ul
    
    // Curățăm src-ul după o scurtă pauză pentru a nu vedea imaginea dispărând
    setTimeout(() => {
        if(lbImg) lbImg.src = '';
    }, 200);
}

// Închide lightbox-ul dacă se apasă tasta ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
        closeLightbox();
    }
});

// 5. RSVP Form Logic
// Funcția apelată din HTML: onsubmit="handleRSVP(event)"
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
        // Resetare buton
        btn.innerText = "Mesaj Trimis!";
        btn.style.backgroundColor = "#D4AF37"; // Culoarea Accent (Gold)
        btn.style.color = "#0B253A"; // Culoarea Bg (Dark Blue)
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