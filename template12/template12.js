// template12.js

document.addEventListener('DOMContentLoaded', () => {
    const progressLine = document.getElementById('progressLine');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const container = document.querySelector('.timeline-container');

    // 1. ANIMAREA LINIEI AURII
    function updateProgress() {
        // Cât am scrollat din ecran
        const triggerBottom = window.innerHeight * 0.8; // Punctul de declanșare (80% din ecran)
        
        // Calculăm poziția relativă la containerul timeline
        const containerTop = container.offsetTop;
        const scrollPosition = window.scrollY + (window.innerHeight / 2); // Linia ajunge până la jumătatea ecranului
        
        // Lungimea liniei (relativă la cât am scrollat în container)
        let height = scrollPosition - containerTop;
        
        // Limite minime și maxime
        if (height < 0) height = 0;
        if (height > container.offsetHeight) height = container.offsetHeight;

        // Setăm înălțimea liniei aurii
        progressLine.style.height = `${height}px`;

        // 2. APARIȚIA ELEMENTELOR (FADE IN)
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            // Dacă elementul a intrat în zona vizibilă
            if(itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                // Opțional: le poți face să dispară când dai scroll înapoi
                // item.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', updateProgress);
    // Apelăm o dată la încărcare
    updateProgress();
});