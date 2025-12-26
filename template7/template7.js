// template7.js

function stampVisa() {
    const btn = document.querySelector('.btn-visa');
    const form = document.getElementById('visaForm');
    const stamp = document.getElementById('visaStamp');

    // 1. Schimbăm textul butonului
    btn.innerHTML = "PROCESARE...";
    btn.style.opacity = "0.7";

    // 2. Simulăm procesarea (1 secundă)
    setTimeout(() => {
        // Ascundem formularul și butonul
        form.style.display = 'none';
        
        // Afișăm ștampila
        stamp.classList.remove('hidden');
        
        // Adăugăm o mică animație de "Scale" pentru impact
        const stampBox = stamp.querySelector('.stamp-box');
        stampBox.style.transform = "scale(2) rotate(-10deg)";
        stampBox.style.opacity = "0";
        
        // Trigger reflow
        void stampBox.offsetWidth;

        stampBox.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        stampBox.style.transform = "scale(1) rotate(-10deg)";
        stampBox.style.opacity = "1";

    }, 800);
}