// template6.js

function submitRSVP() {
    const form = document.getElementById('rsvpForm');
    const successMsg = document.getElementById('successMessage');
    const btn = document.querySelector('.btn-news');

    // Simulare trimitere (aici ai lega de PHP/MySQL în realitate)
    btn.innerHTML = "Se trimite...";
    btn.disabled = true;

    setTimeout(() => {
        form.style.display = 'none'; // Ascundem formularul
        successMsg.classList.remove('hidden'); // Arătăm mesajul de succes
        
        // Efect vizual: Facem scroll la mesaj
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
}