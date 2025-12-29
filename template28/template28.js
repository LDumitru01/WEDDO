// Așteptăm încărcarea completă a paginii (imagini, fonturi) pentru Loader
window.addEventListener('load', () => {
    
    // Înregistrare Plugin-uri GSAP
    gsap.registerPlugin(ScrollTrigger);

    // === A. LOAD ANIMATION SEQUENCE ===
    const tl = gsap.timeline();

    // 1. Deschidere Cortină
    tl.to('.curtain-left', { scaleX: 0, duration: 1.5, ease: 'expo.inOut' })
      .to('.curtain-right', { scaleX: 0, duration: 1.5, ease: 'expo.inOut' }, "<") // Se execută simultan
      .to('.loader-logo', { opacity: 0, duration: 0.5 }, "<") // Ascunde logo-ul

      // 2. Hero Text Reveal (Caracter cu Caracter)
      .to('.char', { y: 0, stagger: 0.05, duration: 1, ease: 'power4.out' }, "-=0.5")
      // 3. Elemente secundare (Data, Locație)
      .from('.reveal-stagger', { y: 20, opacity: 0, stagger: 0.2, duration: 1 }, "-=0.8");

    document.body.classList.add('loaded');

    // Inițializăm restul animațiilor după load
    initScrollAnimations();
});


// === B. SMOOTH SCROLL (LENIS) ===
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// === C. CUSTOM CURSOR LOGIC ===
const dot = document.querySelector('.cursor-dot');
const circle = document.querySelector('.cursor-circle');

// Activăm cursorul doar pe Desktop
if (window.matchMedia("(pointer: fine)").matches && dot && circle) {
    
    window.addEventListener('mousemove', (e) => {
        // Punctul mic se mișcă instant
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
        // Cercul are un delay (smooth follow)
        gsap.to(circle, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" });
    });

    // Hover Effect pe Link-uri/Butoane
    const triggers = document.querySelectorAll('.hover-trigger, a, button, input');
    triggers.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Schimbare culoare pe secțiuni întunecate
    // Selectăm secțiunile care au fundal închis (Timeline și Details în acest template)
    const darkSections = document.querySelectorAll('#sec-timeline, #details'); 
    
    darkSections.forEach(section => {
        section.addEventListener('mouseenter', () => document.body.classList.add('hovering-white'));
        section.addEventListener('mouseleave', () => document.body.classList.remove('hovering-white'));
    });

} else {
    // Ascundem cursorul pe mobil
    if(dot) dot.style.display = 'none';
    if(circle) circle.style.display = 'none';
}


// === D. SCROLL ANIMATIONS (GSAP) ===
function initScrollAnimations() {
    
    // 1. Hero Parallax Image
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        gsap.to(heroImg, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '#sec-hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // 2. Text Reveal Paragraph (Capitolul I)
    const revealText = document.querySelector('.reveal-text');
    if (revealText) {
        gsap.from(revealText, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: revealText,
                start: 'top 85%'
            }
        });
    }

    // 3. Gallery Skew & Parallax (Kinetic Effect)
    const galleryGrid = document.querySelector('.gallery-grid');
    const cols = document.querySelectorAll('.gallery-col');

    if (galleryGrid && cols.length > 0 && window.innerWidth > 768) {
        
        // A. Parallax pe coloane (viteze diferite)
        cols.forEach((col) => {
            const speed = col.getAttribute('data-speed') || 1;
            gsap.to(col, {
                y: -100 * speed, // Mișcă în sus bazat pe viteză
                ease: 'none',
                scrollTrigger: {
                    trigger: '#sec-gallery',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // B. Skew Effect based on Scroll Velocity
        let proxy = { skew: 0 };
        let skewSetter = gsap.quickSetter(galleryGrid, "skewY", "deg");
        let clamp = gsap.utils.clamp(-5, 5); // Limităm deformarea la 5 grade

        ScrollTrigger.create({
            trigger: '#sec-gallery',
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                // Aplicăm skew doar dacă există mișcare semnificativă
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {
                        skew: 0,
                        duration: 0.8,
                        ease: "power3",
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew)
                    });
                }
            }
        });
    }
}


// === E. RSVP FORM HANDLER ===
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "SE TRIMITE...";
    // Schimbăm stilul pentru feedback (Royal Theme)
    btn.style.backgroundColor = "var(--accent)"; 
    btn.style.color = "white";
    btn.style.borderColor = "var(--accent)";

    // Simulare trimitere date
    setTimeout(() => {
        // Mesaj Succes
        btn.innerText = "MESAJ TRIMIS";
        btn.style.backgroundColor = "var(--ink-color)"; // Back to dark
        
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style = ""; // Reset inline styles
        }, 3000);
        
    }, 1500);
}