// template5.js

// Funcția pentru butonul mare de PLAY
function startPlayer() {
    const container = document.getElementById('player');
    const btn = document.querySelector('.btn-main'); // Selectăm butonul
    
    // 1. Adăugăm clasa 'active' -> Discul iese în sus
    container.classList.add('active');
    
    // 2. Schimbăm textul butonului ca feedback
    btn.innerHTML = "Se încarcă...";
    
    // 3. După ce discul a ieșit (800ms), îl facem să se învârtă
    setTimeout(() => {
        container.classList.add('playing');
        btn.innerHTML = "Now Playing: Love Story";
        btn.style.backgroundColor = "rgb(var(--color-accent))"; // Feedback vizual
        
        // Opțional: Aici poți porni o melodie reală dacă ai fișierul
        // let audio = new Audio('melodie_nunta.mp3');
        // audio.play();
        
    }, 800);
}

// Funcția pentru schimbarea tab-urilor (Intro / Info / RSVP)
function switchTab(tabId, btnElement) {
    // 1. Ascundem TOATE secțiunile
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(sec => {
        sec.classList.remove('active-tab');
    });

    // 2. Dezactivăm stilul de "activ" de pe toate butoanele de jos
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Afișăm secțiunea dorită
    const selectedTab = document.getElementById(tabId);
    if(selectedTab) {
        selectedTab.classList.add('active-tab');
    }

    // 4. Activăm butonul pe care s-a dat click
    btnElement.classList.add('active');
}