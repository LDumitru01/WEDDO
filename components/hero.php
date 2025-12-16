<section class="w-full py-10 reveal" >
  <div class="max-w-7xl mx-auto px-6">
    <div class="relative w-full">

      <div
        class="relative bg-cover bg-center rounded-[32px] overflow-hidden"
        style="background-image: url('assets/images/hero-bg.jpg');"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-[#e27b8b]/80 to-[#f5b6c3]/40"></div>

        <div
          class="relative z-10 flex flex-col md:flex-row
                 items-start md:items-center justify-between
                 gap-10 px-6 md:px-10 py-8 md:py-12"
        >
          <!-- TEXT -->
          <div class="max-w-xl text-white">

            <h1 class="text-[32px] sm:text-[36px] md:text-[44px] font-extrabold leading-tight">
              <?= t('hero_title') ?>
            </h1>

            <h2 class="text-[22px] sm:text-[26px] mt-2 font-bold text-[#ffd1dc]">
              <?= t('hero_subtitle') ?>
            </h2>

            <p class="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-white/90">
              <?= t('hero_text') ?>
            </p>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">

              <a
                href="#detalii"
                class="w-full sm:w-[190px] text-center py-3 rounded-full bg-weddoPink text-white text-sm font-semibold
                       shadow-[0_4px_12px_rgba(214,93,115,0.35)] hover:bg-[#c15066] transition"
              >
                <?= t('hero_btn_details') ?>
              </a>

              <a
                href="#modele"
                class="w-full sm:w-[190px] text-center py-3 rounded-full bg-white text-weddoPink text-sm font-semibold
                       shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#fff3f6] transition"
              >
                <?= t('hero_btn_models') ?>
              </a>

            </div>
          </div>

          <!-- TELEFON MOBILE -->
          <div class="w-full flex justify-center mt-8 md:hidden">
            <img src="assets/images/hero-phone.png" class="w-[200px] rotate-6 drop-shadow-2xl">
          </div>

          <div class="hidden md:block flex-1"></div>
        </div>
      </div>

      <!-- TELEFON DESKTOP -->
      <div class="hidden md:block absolute right-[20px] bottom-[-55px] lg:right-[40px] lg:bottom-[-65px]">
        <img src="assets/images/hero-phone.png" class="w-[260px] lg:w-[290px] rotate-6 drop-shadow-2xl">
      </div>

    </div>
  </div>
</section>
