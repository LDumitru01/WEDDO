<?php
session_start();

if (isset($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

$lang = $_SESSION['lang'] ?? 'ro';

$file = __DIR__ . "/../translations/$lang.php";
if (!file_exists($file)) {
    $file = __DIR__ . "/../translations/ro.php";
}

$translations = require $file;

function t($key)
{
    global $translations;
    return $translations[$key] ?? $key;
}
