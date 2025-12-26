// template3.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mainContainer');
    const sections = document.querySelectorAll('.snap-section');
    const dots = document.querySelectorAll('.dot');
    const cursor = document.getElementById('cursor');
    const hoverTriggers = document.querySelectorAll('.hover-trigger');

    // 1. CUSTOM CURSOR LOGIC (Urmărește mouse-ul)
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Efect de mărire când treci peste butoane/inputuri
    hoverTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        trigger.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

    // 2. ACTIVE SECTION DETECTION
    // Folosim IntersectionObserver pentru a vedea ce secțiune e pe ecran
    // și a actualiza punctele de navigație și animațiile
    const observerOptions = {
        root: container,
        threshold: 0.5 // Când 50% din secțiune e vizibilă
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Găsim indexul secțiunii curente
                const index = Array.from(sections).indexOf(entry.target);
                
                // Actualizăm punctele
                dots.forEach(d => d.classList.remove('active'));
                if(dots[index]) dots[index].classList.add('active');

                // Pornim animațiile de text (adăugăm clasa .active pe secțiune)
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 3. NAVIGATION CLICK
    // Funcție globală pentru click pe puncte
    window.scrollToSection = (index) => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    };
});