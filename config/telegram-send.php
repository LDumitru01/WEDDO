<?php
header('Content-Type: application/json');

// Verificăm metoda
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Preluăm datele
$input = json_decode(file_get_contents('php://input'), true);

// === CONFIGURARE TELEGRAM ===
$botToken = '8493299856:AAG2WlAtulaA9TdNT-MpQCT1FJvmZnM_zEM';
$chatId = '-5097297216';
// ============================

$text = "";

// LOGICA: Verificăm ce tip de formular a fost trimis

// CAZUL 1: Este Newsletter? (verificăm dacă am primit parametrul 'type' => 'newsletter')
if (isset($input['type']) && $input['type'] === 'newsletter') {
    
    // Validare simplă pentru email
    if (empty($input['email'])) {
        echo json_encode(['ok' => false, 'error' => 'Adresa de email este obligatorie']);
        exit;
    }

    $text = "📬 *Abonare Nouă la Newsletter*\n";
    $text .= "📧 *Email:* " . strip_tags($input['email']);

// CAZUL 2: Este Formular de Contact (Faq) - comportament default
} else {
    
    // Validare pentru formularul de contact
    if (empty($input['name']) || empty($input['contact']) || empty($input['message'])) {
        echo json_encode(['ok' => false, 'error' => 'Toate câmpurile sunt obligatorii']);
        exit;
    }

    $text = "📩 *Mesaj Nou de pe Site (FAQ)*\n";
    $text .= "👤 *Nume:* " . strip_tags($input['name']) . "\n";
    $text .= "📞 *Contact:* " . strip_tags($input['contact']) . "\n";
    $text .= "📝 *Mesaj:*\n" . strip_tags($input['message']);
}

// === TRIMITEREA CĂTRE TELEGRAM ===
$data = [
    'chat_id' => $chatId,
    'text' => $text,
    'parse_mode' => 'Markdown'
];

$url = "https://api.telegram.org/bot$botToken/sendMessage";
$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    ]
];

$context  = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

if ($result === FALSE) {
    echo json_encode(['ok' => false, 'error' => 'Eroare la comunicarea cu Telegram']);
} else {
    echo $result;
}
?>