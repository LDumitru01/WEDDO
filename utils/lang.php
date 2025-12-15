<?php

function t($key)
{
    static $translations = null;

    if ($translations === null) {
        $lang = $_GET['lang'] ?? 'ro';

        $file = __DIR__ . "/../translations/$lang.php";

        if (!file_exists($file)) {
            $file = __DIR__ . "/../translations/ro.php";
        }

        $translations = require $file;
    }

    return $translations[$key] ?? $key;
}
