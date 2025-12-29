// template2.js - The Golden Thread Logic

// === 1. SETUP & SMOOTH SCROLL ===
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ 
    duration: 1.2, 
    smooth: true 
});

function raf(time) { 
    lenis.raf(time); 
    requestAnimationFrame(raf); 
}
requestAnimationFrame(raf);

// === 2. GENERARE DINAMICĂ A LINIEI (ALGORITMUL COMPLEX) ===
function drawTheLine() {
    const svg = document.getElementById('svgContainer');
    const path = document.getElementById('theLine');
    const points = document.querySelectorAll('.checkpoint');
    
    // Folosim înălțimea totală a documentului pentru a acoperi tot site-ul
    const totalHeight = document.documentElement.scrollHeight;
    svg.style.height = totalHeight + 'px';

    let d = "";
    let positions = [];

    // 1. Colectăm coordonatele tuturor punctelor (checkpoints)
    points.forEach((pt) => {
        const rect = pt.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Calculăm centrul punctului
        const x = rect.left + rect.width / 2;
        const y = rect.top + scrollY + rect.height / 2;
        
        positions.push({ x, y });
    });

    // 2. Construim Path-ul (Curbe Bezier)
    if (positions.length > 0) {
        d = `M ${positions[0].x} ${positions[0].y}`; // Mutăm la primul punct

        for (let i = 0; i < positions.length - 1; i++) {
            const p1 = positions[i];
            const p2 = positions[i + 1];

            // Calculăm puncte de control pentru curbe fine (Sigmoid style)
            // Punctele de control sunt la jumătatea distanței pe axa Y
            const cp1y = p1.y + (p2.y - p1.y) / 2;
            const cp2y = p1.y + (p2.y - p1.y) / 2;

            // Curba Bezier Cubică: C cp1x cp1y, cp2x cp2y, x y
            // Păstrăm X-ul punctelor de control aliniat cu punctele de start/end pentru o linie fluidă vertical
            d += ` C ${p1.x} ${cp1y}, ${p2.x} ${cp2y}, ${p2.x} ${p2.y}`;
        }
    }

    path.setAttribute('d', d);

    // 3. Animăm Desenarea Liniei pe Scroll
    const length = path.getTotalLength();

    // Setăm linia ca fiind "nevăzută" inițial (dasharray = lungimea totală)
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Distrugem trigger-ul vechi dacă există, pentru a nu crea duplicate la resize
    ScrollTrigger.getById("lineDraw")?.kill();

    // GSAP ScrollTrigger pentru a "desena" linia pe măsură ce scrollezi
    gsap.fromTo(path,
        { strokeDashoffset: length },
        {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                id: "lineDraw",
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        }
    );
}

// Executăm desenarea la load și resize
window.addEventListener('load', () => {
    // Mic delay pentru a asigura că imaginile au încărcat și layout-ul e final
    setTimeout(drawTheLine, 100);
});

window.addEventListener('resize', () => {
    setTimeout(drawTheLine, 100);
});

// === 3. TEXT REVEALS (HERO) ===
gsap.to('.hero-title', {
    y: 0, 
    opacity: 1, 
    duration: 1.5, 
    stagger: 0.2, 
    ease: "power4.out",
    delay: 0.5
});

// === 4. IMAGE BLOOM EFFECT ===
// Când linia ajunge în dreptul imaginii, aceasta se "aprinde" (devine color)
const images = document.querySelectorAll('.reveal-img');
images.forEach(img => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 60%", // Când imaginea e la 60% din viewport
        onEnter: () => img.classList.add('active'),
        onLeaveBack: () => img.classList.remove('active')
    });
});

// === 5. HORIZONTAL GALLERY SCROLL ===
const galStrip = document.getElementById('galleryStrip');
if (galStrip) {
    gsap.to(galStrip, {
        x: () => -(galStrip.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: "#sec-gallery", // ID-ul secțiunii corectat
            pin: true,
            scrub: 1,
            // Scroll-ul durează cât lățimea strip-ului minus lățimea ecranului
            end: () => "+=" + (galStrip.scrollWidth - window.innerWidth)
        }
    });
}

// === 6. RSVP FORM LOGIC ===
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
        btn.style.borderColor = "#D4AF37"; 
        btn.style.backgroundColor = "#D4AF37";
        btn.style.color = "#121212";
        
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