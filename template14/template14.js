document.addEventListener("DOMContentLoaded", () => {
    
    // 1. PRELOADER & INTRO
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 2000); // Dispariție după 2 secunde

    // 2. CUSTOM CURSOR LOGIC
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with delay (handled by CSS transition, just set pos)
        // Using animate for smoother trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect for cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, .couple-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = "translate(-50%, -50%) scale(2.5)";
            cursorOutline.style.backgroundColor = "rgba(198, 168, 124, 0.1)"; // Slight gold tint
            cursorOutline.style.borderColor = "transparent";
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
            cursorOutline.style.backgroundColor = "transparent";
            cursorOutline.style.borderColor = "rgba(26, 60, 52, 0.5)";
        });
    });

    // 3. MUSIC PLAYER
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="ri-volume-mute-line"></i>';
        } else {
            bgMusic.play().catch(error => {
                console.log("Audio play failed (browser restriction): ", error);
            });
            musicBtn.innerHTML = '<i class="ri-music-line"></i>';
        }
        isPlaying = !isPlaying;
    });

    // 4. PARALLAX EFFECT FOR HERO TEXT
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        if(heroContent) {
            heroContent.style.transform = `translateY(${scrollValue * 0.4}px)`;
            heroContent.style.opacity = 1 - scrollValue / 700;
        }
    });

    // 5. COUNTDOWN
    const weddingDate = new Date("Sep 15, 2024 16:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (document.getElementById("days")) {
            document.getElementById("days").innerText = d < 10 ? '0'+d : d;
            document.getElementById("hours").innerText = h < 10 ? '0'+h : h;
            document.getElementById("minutes").innerText = m < 10 ? '0'+m : m;
        }
    }, 1000);
});