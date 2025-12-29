document.addEventListener("DOMContentLoaded", () => {
    
    // Înregistrare Plugin-uri GSAP
    gsap.registerPlugin(ScrollTrigger, Draggable);

    // === 1. TYPEWRITER LOADER ===
    const textToType = "LOADING MEMORIES...";
    const loaderTextElement = document.getElementById('typewriter');
    let charIndex = 0;

    function typeWriter() {
        if (loaderTextElement && charIndex < textToType.length) {
            loaderTextElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 80); // Viteza de tastare
        } else {
            setTimeout(hideLoader, 500); // Pauză înainte de dispariție
        }
    }

    function hideLoader() {
        const loaderScreen = document.getElementById('loader');
        gsap.to(loaderScreen, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: initApp // Pornim aplicația principală
        });
    }

    // Pornim loader-ul
    typeWriter();


    // === 2. MAIN APP LOGIC ===
    function initApp() {

        // A. Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);


        // B. Hero Parallax Animations
        // Mișcăm numele în direcții opuse la scroll
        if(document.getElementById('heroName1')) {
            gsap.to("#heroName1", { 
                xPercent: -30, 
                scrollTrigger: { 
                    trigger: "#sec-hero", 
                    start: "top top", 
                    end: "bottom top", 
                    scrub: 1 
                } 
            });
        }
        if(document.getElementById('heroName2')) {
            gsap.to("#heroName2", { 
                xPercent: 30, 
                scrollTrigger: { 
                    trigger: "#sec-hero", 
                    start: "top top", 
                    end: "bottom top", 
                    scrub: 1 
                } 
            });
        }


        // C. Interactive Gallery (Playground)
        // Folosim MatchMedia pentru logică diferită Desktop vs Mobile
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            //Desktop: Draggable Polaroids
            Draggable.create(".drag-item", {
                type: "x,y",
                edgeResistance: 0.65,
                bounds: ".playground-container",
                inertia: true, // Necesită InertiaPlugin (dacă e disponibil), altfel se ignoră silențios
                zIndexBoost: false,
                onPress: function() {
                    // La click, aducem elementul în față și îl mărim puțin
                    gsap.to(this.target, { scale: 1.1, zIndex: 100, duration: 0.2, rotate: 0 });
                },
                onRelease: function() {
                    // La eliberare, revine la scară normală
                    gsap.to(this.target, { scale: 1, duration: 0.2 });
                }
            });
        });

        mm.add("(max-width: 767px)", () => {
            // Mobile: Simple Fade In on Scroll
            // Elementele sunt deja aranjate orizontal prin CSS
            gsap.utils.toArray(".drag-item").forEach((item, i) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: i * 0.1, // Stagger effect
                    scrollTrigger: {
                        trigger: "#sec-gallery",
                        start: "top 70%"
                    }
                });
            });
        });


        // D. Timeline Manifest Animation (Bonul fiscal)
        const timelineItems = document.querySelectorAll('.data-event-item');
        if (timelineItems.length > 0) {
            gsap.from(timelineItems, {
                opacity: 0,
                x: -20,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: "#sec-timeline",
                    start: "top 70%"
                }
            });
        }
    }

});


// === 3. RSVP FORM HANDLER ===
function handleRSVP(event) {
    event.preventDefault(); // Previne reîncărcarea paginii
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;

    // Simulare stare de încărcare (Efect de ștampilă)
    btn.disabled = true;
    btn.innerHTML = "Se<br>Trimite...";
    btn.style.borderColor = "#2C2420"; // Dark Ink
    btn.style.color = "#2C2420";
    btn.style.animation = "none"; // Oprim rotația pentru focus

    // Simulare trimitere date
    setTimeout(() => {
        // Succes
        btn.innerHTML = "Confirmat<br>2025";
        btn.style.backgroundColor = "var(--c-sienna)";
        btn.style.color = "var(--c-paper)";
        btn.style.borderStyle = "solid";
        
        form.reset();
        
        // Revenire la starea inițială după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalContent;
            btn.style = ""; // Reset inline styles
        }, 3000);
        
    }, 1500);
}