// 1. ACCORDEON (Q&A) - Corectat și Simplificat
const qaItems = document.querySelectorAll('.qa-item');
qaItems.forEach(item => {
    const questionDiv = item.querySelector('.qa-question');
    if (questionDiv) {
        questionDiv.addEventListener('click', () => {
            // Închide celelalte (opțional, pentru stil acordeon strict)
            qaItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            // Deschide/Închide curentul
            item.classList.toggle('active');
        });
    }
});

// 2. SCROLL SPY (Meniul Activ) - Corectat
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar-nav .nav-menu li a");

window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Dacă am scrollat până la 1/3 din secțiune
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        // Verificăm dacă href-ul link-ului corespunde cu ID-ul secțiunii curente
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});