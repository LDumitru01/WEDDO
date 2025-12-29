document.addEventListener("DOMContentLoaded", () => {

    // === 1. PARTICULE MAGICE (CANVAS) ===
    const canvas = document.getElementById('magicDust');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];

        const resize = () => { 
            w = canvas.width = window.innerWidth; 
            h = canvas.height = window.innerHeight; 
        };
        window.addEventListener('resize', resize);
        resize();

        class Dust {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2.5;
                const colors = ["#E6B89C", "#FFF0E0", "#FFD1DC"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.alpha = Math.random() * 0.8;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                this.alpha += (Math.random() - 0.5) * 0.01;
                if (this.alpha < 0.2) this.alpha = 0.2; if (this.alpha > 0.8) this.alpha = 0.8;

                if (this.x < 0) this.x = w; if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h; if (this.y > h) this.y = 0;
            }
            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 100; i++) particles.push(new Dust());

        const animateDust = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateDust);
        };
        animateDust();
    }


    // === 2. 3D SCROLL LOGIC ===
    const world = document.getElementById('world');
    const cards = document.querySelectorAll('.dream-card');

    if (world && cards.length > 0) {
        let currentZ = 0;
        let targetZ = 0;
        
        // --- CORECȚIE PRINCIPALĂ ---
        // Calculăm maxZ dinamic bazat pe ultimul card
        // Ultimul card are cel mai mic Z (ex: -8400). Trebuie să mergem până acolo + o marjă.
        const lastCard = cards[cards.length - 1];
        const lastCardZ = parseInt(lastCard.getAttribute('data-z')); 
        const maxZ = Math.abs(lastCardZ) + 1000; // Adăugăm 1000px buffer ca să vedem bine ultimul card

        // Scroll (Desktop)
        window.addEventListener('wheel', (e) => {
            targetZ += e.deltaY * 3;
            targetZ = Math.max(0, Math.min(targetZ, maxZ));
        });

        // Touch (Mobile)
        let touchY = 0;
        window.addEventListener('touchstart', e => touchY = e.touches[0].clientY);
        window.addEventListener('touchmove', e => {
            let delta = touchY - e.touches[0].clientY;
            targetZ += delta * 4;
            targetZ = Math.max(0, Math.min(targetZ, maxZ));
            touchY = e.touches[0].clientY;
        });

        const render = () => {
            currentZ += (targetZ - currentZ) * 0.06;

            world.style.transform = `translateZ(${currentZ}px)`;

            cards.forEach((card) => {
                const z = parseInt(card.dataset.z);
                const dist = z + currentZ; // Distanța față de "cameră"

                let opacity = 0;
                let pointerEvents = 'none';

                // Logica de vizibilitate
                // Cardurile dispar dacă trec de 700px în spatele camerei
                if (dist > 700) {
                    opacity = 0;
                }
                // Zona activă (în fața camerei)
                else if (dist > -700) {
                    opacity = 1 - (Math.abs(dist) / 800);

                    // Dacă e foarte aproape, devine interactiv
                    if (opacity > 0.8) {
                        card.classList.add('in-focus');
                        pointerEvents = 'auto';
                        opacity = 1;
                    } else {
                        card.classList.remove('in-focus');
                    }
                }
                // Tunelul (cardurile din depărtare)
                else if (dist > -4000) {
                    opacity = 1 - (Math.abs(dist + 700) / 3000);
                    card.classList.remove('in-focus');
                }

                // Optimizare performanță: ascundem complet elementele invizibile
                if (opacity <= 0.01) {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'flex';
                    card.style.transform = `translateZ(${z}px)`;
                    card.style.opacity = opacity;
                    card.style.pointerEvents = pointerEvents;
                }
            });

            requestAnimationFrame(render);
        };
        render();
    }

    // Pulse Animation Style
    const style = document.createElement('style');
    style.innerHTML = `@keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; text-shadow: 0 0 10px #E6B89C; } }`;
    document.head.appendChild(style);

});


// === 3. RSVP FORM HANDLER ===
function handleRSVP(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Simulare stare de încărcare
    btn.disabled = true;
    btn.innerText = "SE TRIMITE...";
    btn.style.backgroundColor = "#F0C4AA"; // Rose Gold
    btn.style.color = "#2A0A18"; // Dark Burgundy

    // Simulare trimitere date
    setTimeout(() => {
        // Succes
        btn.innerText = "CONFIRMAT";
        btn.style.backgroundColor = "#FFF0E0"; // Gold Shine
        
        form.reset();
        
        // Revenire la starea inițială
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style = ""; 
        }, 3000);
        
    }, 1500);
}