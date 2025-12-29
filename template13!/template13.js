// template13.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GENERARE STELE (BACKGROUND)
    const starsContainer = document.getElementById('starsBg');
    const starCount = 150; // Numărul de stele

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Poziție random
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Mărime random
        const size = Math.random() * 3 + 1; // între 1px și 4px
        
        // Durată sclipire random
        const duration = Math.random() * 3 + 2; // între 2s și 5s

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);

        starsContainer.appendChild(star);
    }

    // 2. CURSOR MAGIC (FOLLOW MOUSE)
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Punctul mic urmărește instant
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Cercul mare are un mic delay (smooth)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

        // 3. GENERARE PARTICULE (STARDUST)
        // Creăm particule doar o dată la câteva mișcări pentru performanță
        if (Math.random() > 0.8) {
            createParticle(posX, posY);
        }
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Ștergem particula din DOM după ce se termină animația (1s)
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});