document.addEventListener("DOMContentLoaded", () => {
    
    // Înregistrăm plugin-urile GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 1. PRELOADER LOGIC
    const counter = document.getElementById('counter');
    const preloader = document.querySelector('.preloader');
    let count = 0;

    // Simulăm încărcarea
    const interval = setInterval(() => {
        count++;
        if(counter) counter.innerText = count;
        
        if (count === 100) {
            clearInterval(interval);
            
            // Animație ieșire preloader
            const tl = gsap.timeline();
            
            tl.to(preloader, { 
                yPercent: -100, 
                duration: 1.2, 
                ease: "power4.inOut" 
            })
            // Animație intrare elemente Hero (Titlu, Data)
            .to(".reveal-hero", { 
                y: 0, 
                duration: 1.5, 
                stagger: 0.1, 
                ease: "power4.out" 
            }, "-=0.5"); // Pornește puțin înainte să se termine preloaderul
        }
    }, 20);


    // 2. SMOOTH SCROLL (Lenis)
    const lenis = new Lenis({ 
        duration: 1.2, 
        smooth: true,
        lerp: 0.1
    });

    function raf(time) { 
        lenis.raf(time); 
        requestAnimationFrame(raf); 
    }
    requestAnimationFrame(raf);


    // 3. PARALLAX IMAGE (Hero Background)
    const parallaxImg = document.querySelector(".parallax-img");
    if (parallaxImg) {
        gsap.to(parallaxImg, {
            yPercent: 20, // Mișcare verticală
            scale: 1.1,   // Zoom ușor
            ease: "none",
            scrollTrigger: {
                trigger: "#sec-hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }


    // 4. REVEAL IMAGES ON SCROLL (Masca de imagine)
    const imgMasks = document.querySelectorAll('.img-mask');
    imgMasks.forEach(mask => {
        ScrollTrigger.create({
            trigger: mask,
            start: "top 85%", // Când elementul e 85% în viewport
            onEnter: () => mask.classList.add('in-view'),
            // Opțional: Resetare când iese din ecran
            // onLeaveBack: () => mask.classList.remove('in-view') 
        });
    });


    // 5. CUSTOM CURSOR (Doar pe Desktop)
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    // Verificăm dacă dispozitivul are mouse (hover)
    if (window.matchMedia("(pointer: fine)").matches) {
        
        window.addEventListener('mousemove', (e) => {
            // Cursorul mic urmărește instantaneu
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
            // Cercul mare are un delay (elasticitate)
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power2.out" });
        });

        // Efect de hover pe link-uri și butoane
        const hoverables = document.querySelectorAll('a, button, select, input');
        
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(follower, { 
                    scale: 2, 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    borderColor: 'transparent',
                    duration: 0.3 
                });
                gsap.to(cursor, { opacity: 0, duration: 0.1 }); // Ascundem punctul mic
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(follower, { 
                    scale: 1, 
                    backgroundColor: 'transparent', 
                    borderColor: '#1a1a1a',
                    duration: 0.3 
                });
                gsap.to(cursor, { opacity: 1, duration: 0.1 });
            });
        });
    } else {
        // Ascundem cursorul custom pe mobil/touch
        if(cursor) cursor.style.display = 'none';
        if(follower) follower.style.display = 'none';
    }

});


// 6. RSVP FORM HANDLER
function handleRSVP(event) {
    event.preventDefault(); // Previne reload-ul
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Stilizare buton în timpul încărcării (Theme: Editorial Black/Greige)
    btn.disabled = true;
    btn.innerText = "Se procesează...";
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    // Simulare trimitere
    setTimeout(() => {
        // Succes
        btn.innerText = "Mesaj Trimis!";
        btn.classList.remove('bg-[#cdc6be]', 'text-black');
        btn.classList.add('bg-white', 'text-black'); // Buton alb la succes
        
        form.reset();
        
        // Reset după 3 secunde
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-white');
            btn.classList.add('bg-[#cdc6be]', 'text-black'); // Revenire la stilul original
        }, 3000);
        
    }, 1500);
}