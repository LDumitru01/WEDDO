// template11.js

// Variabile pentru Drag & Drop
let isDragging = false;
let currentWindow = null;
let offset = { x: 0, y: 0 };
let highestZ = 100;

// 1. DESCHIDE FEREASTRA
function openWindow(id) {
    const win = document.getElementById(id);
    
    // Resetăm poziția la centru dacă e prima deschidere (opțional)
    // Sau lăsăm unde a fost ultima dată
    
    win.style.display = 'flex';
    bringToFront(win);
}

// 2. ÎNCHIDE FEREASTRA
function closeWindow(id) {
    const win = document.getElementById(id);
    win.style.display = 'none';
}

// 3. ADUCE FEREASTRA ÎN FAȚĂ
function bringToFront(win) {
    highestZ++;
    win.style.zIndex = highestZ;
}

// 4. LOGICA DE DRAG & DROP
function startDrag(e, id) {
    // Dacă utilizatorul e pe mobil, poate nu vrem drag, dar lăsăm activ pentru tablete
    // Prevenim selecția textului
    e.preventDefault();
    
    const win = document.getElementById(id);
    currentWindow = win;
    isDragging = true;
    
    // Aducem în față
    bringToFront(win);

    // Calculăm unde a dat click față de colțul ferestrei
    // e.clientX = mouse X pe ecran
    // win.offsetLeft = poziția X a ferestrei
    offset.x = e.clientX - win.offsetLeft;
    offset.y = e.clientY - win.offsetTop;

    // Ascultăm mișcarea mouse-ului pe tot documentul
    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', stopDrag);
}

function dragWindow(e) {
    if (!isDragging || !currentWindow) return;

    // Noua poziție
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;

    // Aplicăm
    currentWindow.style.left = x + 'px';
    currentWindow.style.top = y + 'px';
    
    // Scoatem transformarea de centrare (-50%, -50%) ca să nu interfereze cu drag-ul
    currentWindow.style.transform = 'none';
}

function stopDrag() {
    isDragging = false;
    currentWindow = null;
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', stopDrag);
}

// Suport pentru Touch (Mobil) - Opțional
// Adaugă event listeners similari pentru 'touchstart', 'touchmove', 'touchend'
// dacă vrei să meargă perfect pe telefon.