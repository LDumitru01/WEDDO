// === A. LOADER SEQUENCE ===
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // 1. Animăm cuvintele loader-ului
    tl.to('.loader-word', {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    })
    // 2. Pauză scurtă
    .to('.loader-word', {
        y: -100,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power4.in'
    })
    // 3. Eliminăm Overlay-ul (Wipe Effect)
    .to('.loader-overlay', {
        height: 0,
        duration: 1,
        ease: 'expo.inOut'
    })
    // 4. Reveal Hero (Elementele din header)
    .to('#heroImage', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out'
    }, "-=0.5")
    .to('.hero-title', {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out'
    }, "-=1")
    .to('#heroScroll', {
        opacity: 1,
        duration: 1
    }, "-=0.5");

    document.body.classList.add('loaded');
    
    // Inițializăm restul animațiilor după loader
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
const cursorMain = document.querySelector('.cursor-main');
const cursorF = document.querySelector('.cursor-follower');

// Activăm cursorul doar pe Desktop
if (window.matchMedia("(pointer: fine)").matches) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Punctul mic urmărește instantaneu
        if(cursorMain) cursorMain.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Cercul mare urmărește cu delay (smooth)
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        if(cursorF) cursorF.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover States
    document.querySelectorAll('.hover-area, a, button, input, select').forEach(el => {
        el.addEventListener('mouseenter', () => {
            const type = el.getAttribute('data-cursor');
            if (type === 'img') document.body.classList.add('hover-img');
            else document.body.classList.add('hover-link');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hover-link', 'hover-img');
        });
    });
} else {
    if(cursorMain) cursorMain.style.display = 'none';
    if(cursorF) cursorF.style.display = 'none';
}


// === D. GSAP SCROLL ANIMATIONS ===
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Text Reveal (Highlighter Effect in Intro)
    if(document.querySelector('.highlight')) {
        gsap.to('.highlight', {
            color: '#18181B', // Black
            backgroundColor: '#D4AF37', // Gold highlight bg simulation via css tricks usually, but simplified here
            scrollTrigger: {
                trigger: '.split-reveal',
                start: 'top 70%',
                end: 'bottom 60%',
                scrub: true
            }
        });
    }

    // 2. Image Parallax
    gsap.utils.toArray('.img-parallax, .image-parallax').forEach(img => {
        gsap.to(img, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: img.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // 3. Reveal Text Lines (Intersection Observer pentru performanță)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-inview');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-wrap, .line-wrapper').forEach(el => observer.observe(el));

    // 4. Horizontal Scroll Gallery
    const gallery = document.getElementById('galleryTrack');
    if (gallery && window.innerWidth > 768) {
        // Calculăm cât trebuie să se miște: lățimea totală - lățimea ecranului
        const scrollAmount = gallery.scrollWidth - window.innerWidth;
        
        if (scrollAmount > 0) {
            gsap.to(gallery, {
                x: -scrollAmount, // Mișcăm spre stânga
                ease: "none",
                scrollTrigger: {
                    trigger: "#sec-gallery",
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + scrollAmount // Durata scroll-ului = lungimea galeriei
                }
            });
        }
    }
}


// === E. MOBILE MENU ===
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if(menu) menu.classList.toggle('translate-x-full');
}


// === F. FORM WIZARD & RSVP LOGIC ===

// 1. Navigare între pași
function nextStep(stepNumber) {
    // Ascundem toți pașii
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    
    // Afișăm pasul țintă
    const targetStep = document.getElementById(`step${stepNumber}`);
    if (targetStep) targetStep.classList.add('active');
    
    // Actualizăm contorul
    const counter = document.getElementById('stepCount');
    if (counter && stepNumber <= 3) counter.innerText = stepNumber;
}

// 2. Manipulare Formular (Submit)
function handleRSVP(event) {
    event.preventDefault();
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare Loading
    btn.disabled = true;
    btn.innerText = "SE TRIMITE...";
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    // Simulare Succes după 1.5 secunde
    setTimeout(() => {
        // Ascundem pașii formularului
        document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
        
        // Creăm dinamic mesajul de succes dacă nu există în HTML
        let successDiv = document.getElementById('stepSuccess');
        if (!successDiv) {
            successDiv = document.createElement('div');
            successDiv.id = 'stepSuccess';
            successDiv.className = 'form-step text-center py-10';
            successDiv.innerHTML = `
                <div class="text-6xl mb-4">🥂</div>
                <h3 class="text-3xl font-display mb-2">Mulțumim!</h3>
                <p class="text-gray-500">Răspunsul tău a fost înregistrat.</p>
            `;
            form.appendChild(successDiv);
        }
        
        // Afișăm succesul
        successDiv.classList.add('active');
        
        // Resetare buton (deși nu mai e vizibil)
        btn.innerText = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        
    }, 1500);
}