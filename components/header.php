<?php
$currentLang = $_SESSION['lang'] ?? 'ro';
$nextLang = $currentLang === 'ro' ? 'ru' : 'ro';
?>

<header id="siteHeader" class="w-full bg-[#faf4f8] py-4 sticky top-0 z-50 transition-transform duration-300">
  <div id="headerPlaceholder"></div>
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

    <img 
      src="/WEDDO/assets/images/Logo2.png"
      alt="Weddo Logo" 
      class="h-[100px] md:h-[100px] object-contain"
    />

    <nav class="hidden lg:flex items-center gap-10 text-gray-800 text-[16px]">
      <a href="#" class="hover:text-[#d65d73] transition"><?= t('nav_features') ?></a>
      <a href="#" class="hover:text-[#d65d73] transition"><?= t('nav_templates') ?></a>
      <a href="#price" class="hover:text-[#d65d73] transition"><?= t('nav_pricing') ?></a>
      <a href="#affiliate" class="hover:text-[#d65d73] transition"><?= t('nav_affiliates') ?></a>
      <a href="#reseller" class="hover:text-[#d65d73] transition"><?= t('nav_reseller') ?></a>
      <a href="#support" class="hover:text-[#d65d73] transition"><?= t('nav_support') ?></a>
    </nav>

    <div class="flex items-center gap-4">

      <a href="?lang=<?= $nextLang ?>"
        class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f3d6dc] transition">
        <img src="assets/icon/globe.svg" class="w-5 h-5" alt="Language">
      </a>

      <a href="#" class="hidden lg:inline-block bg-[#d65d73] text-white px-8 py-3 rounded-full font-semibold
                shadow hover:bg-[#c15066] transition">
        <?= t('nav_btn_create') ?>
      </a>

      <button id="menuToggle"
        class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f3d6dc] transition">
        <img id="menuIcon" src="assets/icon/menu.svg" class="w-6 h-6" alt="Menu">
      </button>

    </div>
  </div>

  <div id="mobileMenu" class="fixed inset-x-0 top-[72px] z-40 hidden
              bg-white rounded-b-3xl shadow-2xl
              transition-all duration-300 ease-out
              opacity-0 -translate-y-4">

    <nav class="flex flex-col px-6 py-8 gap-6">

      <a href="#" class="menu-item"><?= t('nav_features') ?></a>
      <a href="#" class="menu-item"><?= t('nav_templates') ?></a>
      <a href="#" class="menu-item"><?= t('nav_pricing') ?></a>
      <a href="#" class="menu-item"><?= t('nav_affiliates') ?></a>
      <a href="#" class="menu-item"><?= t('nav_reseller') ?></a>
      <a href="#support" class="menu-item"><?= t('nav_support') ?></a>

      <div class="h-px bg-gray-200 my-2"></div>

      <a href="#" class="mt-2 py-4 rounded-full text-center bg-[#d65d73] text-white font-semibold
                shadow-lg hover:bg-[#c15066] transition">
        <?= t('nav_btn_create') ?>
      </a>

    </nav>
  </div>
</header>