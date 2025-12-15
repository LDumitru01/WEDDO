<!-- PHONE SCROLL SECTION -->
<section id="phoneScrollSection" class="w-full bg-[#faf4f8] mt-32">

  <div id="phoneSticky">

    <div class="phone-frame">

      <!-- PHONE FRAME -->
      <svg viewBox="0 0 393 852" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="389" height="848" rx="60"
              fill="#000" stroke="#1a1a1a" stroke-width="4"/>
        <rect x="14" y="14" width="365" height="824" rx="52" fill="#050505"/>
        <rect x="121" y="26" width="150" height="38" rx="19" fill="#0B0B0B"/>
      </svg>

      <!-- PHONE SCREEN -->
      <div class="phone-screen">
        <img src="/Weddo/assets/images/hero-bg.jpg" alt="Phone content">
      </div>

    </div>

  </div>

</section>

<!-- ================= CSS ================= -->
<style>
#phoneScrollSection {
  height: 300vh;
  position: relative;
  overflow: hidden;
}

#phoneSticky {
  position: sticky;
  top: 18vh; /* mută secțiunea mai jos */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
}

.phone-frame {
  width: 420px; /* telefon mare */
  position: relative;
}

.phone-frame svg {
  width: 100%;
  height: auto;
  display: block;
}

.phone-screen {
  position: absolute;
  top: 14px;
  left: 14px;
  width: calc(100% - 28px);
  height: calc(100% - 28px);
  border-radius: 46px;
  overflow: hidden;
}

.phone-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<!-- ================= JS ================= -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("phoneScrollSection");
  const sticky = document.getElementById("phoneSticky");

  const startScale = 1.9;
  const endScale = 1.0;
  const speed = 0.0012;

  let progress = 0;

  function updateScale() {
    const scale = startScale - (startScale - endScale) * progress;
    sticky.style.transform = `scale(${scale})`;
  }

  window.addEventListener(
    "wheel",
    (e) => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const active = rect.top <= 0 && rect.bottom >= vh;
      if (!active) return;

      if ((e.deltaY > 0 && progress < 1) || (e.deltaY < 0 && progress > 0)) {
        e.preventDefault();
        progress += e.deltaY * speed;
        progress = Math.max(0, Math.min(progress, 1));
        updateScale();
      }
    },
    { passive: false }
  );

  updateScale();
});
</script>
