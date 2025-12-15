<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ . "/utils/lang.php";
?>
<!DOCTYPE html>
<html lang="<?= $_GET['lang'] ?? 'ro' ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        weddoPink: "#d65d73",
                        weddoLight: "#faf4f8",
                    }
                }
            }
        }
    </script>

    <title>Weddo - Invitatii de nunta online</title>

</head>

<body class="bg-weddoLight text-gray-900">
    <?php include __DIR__ . "/components/header.php"; ?>
    <?php include __DIR__ . "/components/stories.php"; ?>
    <?php include __DIR__ . "/components/hero.php"; ?>
    <?php include __DIR__ . "/components/benefits.php"; ?>
    <?php include __DIR__ . "/components/invitation-preview.php"; ?>
    <?php include __DIR__ . "/components/invitation-steps.php"; ?>
    <?php include __DIR__ . "/components/invitation-price.php"; ?>
    <?php include __DIR__ . "/components/phone-scroll.php"; ?>



    <main class="max-w-7xl mx-auto px-6 py-10"> </main>
    <?php if (file_exists(__DIR__ . "/components/footer.php")) { include __DIR__ . "/components/footer.php"; } ?>

</body>
