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
  <style>
    .reveal {
      opacity: 0;
      transform: translateY(60px) scale(0.96);
      filter: blur(6px);
      transition:
        opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
        filter 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      will-change: opacity, transform, filter;
    }

    .reveal.show {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }

    .reveal-left {
      transform: translateX(-60px) scale(0.96);
    }

    .reveal-right {
      transform: translateX(60px) scale(0.96);
    }

    .reveal-left.show,
    .reveal-right.show {
      transform: translateX(0) scale(1);
    }

    .reveal.delay-1 {
      transition-delay: 0.1s;
    }

    .reveal.delay-2 {
      transition-delay: 0.2s;
    }

    .reveal.delay-3 {
      transition-delay: 0.3s;
    }

    .reveal.delay-4 {
      transition-delay: 0.4s;
    }
  </style>

  <title>Weddo - Invitatii de nunta online</title>
  <link rel="stylesheet" href="assets/css/header.css">
  <link rel="stylesheet" href="assets/css/apple-scroll.css">



</head>

<body class="bg-weddoLight text-gray-900">
  <?php include __DIR__ . "/components/header.php"; ?>
  <?php include __DIR__ . "/components/stories.php"; ?>
  <?php include __DIR__ . "/components/hero.php"; ?>
  <?php include __DIR__ . "/components/benefits.php"; ?>
  <?php include __DIR__ . "/components/invitation-preview.php"; ?>
  <?php include __DIR__ . "/components/invitation-steps.php"; ?>
  <?php include __DIR__ . "/components/invitation-price.php"; ?>
  <?php include __DIR__ . "/components/phone-scrollPage1.php"; ?>
  <?php include __DIR__ . "/components/phone-scrollPage2.php"; ?>



  <main class="max-w-7xl mx-auto px-6 py-10"> </main>
  <?php if (file_exists(__DIR__ . "/components/footer.php")) {
    include __DIR__ . "/components/footer.php";
  } ?>

  <script src="assets/js/header.js"></script>
  <script src="assets/js/apple-scroll.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
      });
    });
  </script>
</body>