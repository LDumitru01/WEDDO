document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Preluăm valorile din formular
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;

    // Elemente UI
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnIcon = document.getElementById('btnIcon');
    const btnLoader = document.getElementById('btnLoader');
    const statusDiv = document.getElementById('formStatus');

    // UI: Loading State
    btn.disabled = true;
    btnText.textContent = "Se trimite...";
    btnIcon.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    statusDiv.classList.add('hidden');

    try {
        // AICI E SCHIMBAREA: Trimitem la fișierul tău PHP local
        const response = await fetch('config/telegram-send.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                contact: contact,
                message: message
            })
        });

        const data = await response.json();

        if (data.ok) {
            // UI: Success State
            statusDiv.textContent = "Mesajul a fost trimis cu succes! Te contactăm curând.";
            statusDiv.className = "rounded-xl p-4 text-sm font-medium text-center transition-all bg-green-50 text-green-700 border border-green-200";
            statusDiv.classList.remove('hidden');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error(data.error || 'Eroare necunoscută');
        }

    } catch (error) {
        // UI: Error State
        console.error(error);
        statusDiv.textContent = "A apărut o eroare. Te rugăm să încerci din nou.";
        statusDiv.className = "rounded-xl p-4 text-sm font-medium text-center transition-all bg-red-50 text-red-700 border border-red-200";
        statusDiv.classList.remove('hidden');
    } finally {
        // UI: Reset Button
        btn.disabled = false;
        btnText.textContent = "Trimite Mesajul";
        btnIcon.classList.remove('hidden');
        btnLoader.classList.add('hidden');

        // Ascunde mesajul de status după 5 secunde
        setTimeout(() => {
            statusDiv.classList.add('hidden');
        }, 5000);
    }
});