// template8.js

function openModal(type) {
    const modal = document.getElementById('mainModal');
    const contentRSVP = document.getElementById('modalContentRSVP');
    const contentInfo = document.getElementById('modalContentInfo');

    // Resetăm conținutul
    contentRSVP.classList.add('hidden');
    contentInfo.classList.add('hidden');

    // Afișăm ce trebuie
    if (type === 'rsvp' || type === 'play') {
        contentRSVP.classList.remove('hidden');
    } else {
        // Pentru 'info', 'biserica', 'party' afișăm info generic (sau poți face custom)
        contentInfo.classList.remove('hidden');
    }

    // Deschidem modalul
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Oprim scrollul paginii
}

function closeModal() {
    const modal = document.getElementById('mainModal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto'; // Repornim scrollul
}

// Închide modalul dacă dai click în afara lui
document.getElementById('mainModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('mainModal')) {
        closeModal();
    }
});