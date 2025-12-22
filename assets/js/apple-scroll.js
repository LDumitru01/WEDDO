document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".phone-scroll-section");
  if (!sections.length) return;

  sections.forEach(section => {
    const phoneWrapper = section.querySelector(".phone-frame-wrapper");
    const phoneContent = section.querySelector(".phone-content-wrapper");
    const phoneScreenElement = section.querySelector(".phone-screen");
    const phoneFrameElement = section.querySelector(".phone-frame");

    if (!phoneWrapper || !phoneScreenElement || !phoneContent) return;

    // === MĂSURĂTORI DINAMICE ===
    const currentScreenHeight = phoneScreenElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const availableHeight = windowHeight - 40; 
    const frameHeight = phoneFrameElement.offsetHeight || 700; 
    
    // Calculăm cât ar trebui să fie ca să intre fix pe ecran
    let idealFitScale = availableHeight / frameHeight;

    // === MODIFICARE AICI ===
    // Adăugăm un "shrinkFactor" (factor de micșorare).
    // 0.85 înseamnă că telefonul va ocupa 85% din spațiul disponibil (va fi mai mic)
    // Poți pune 0.8 dacă îl vrei și mai mic, sau 0.9 dacă îl vrei puțin mai mare.
    const shrinkFactor = 0.85; 

    // Aplicăm factorul la scara finală
    const endScale = Math.min(1.0, idealFitScale * shrinkFactor); 
    // =======================

    const startScale = 1.6; 
    
    // Calcule scroll pagină
    const sectionRect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    
    const scrollDistance = -sectionRect.top; 
    const maxScroll = sectionHeight - windowHeight;
    
    let relativeProgress = scrollDistance / maxScroll;
    relativeProgress = Math.max(0, Math.min(relativeProgress, 1));

    // === FAZA 1: ZOOM ===
    // Poți mări puțin acest număr (ex: la 0.40) dacă vrei ca telefonul să stea
    // micșorat puțin mai mult timp înainte să înceapă scroll-ul interior
    const zoomPhaseEnd = 0.35; 
    
    let zoomProgress = relativeProgress / zoomPhaseEnd;
    zoomProgress = Math.max(0, Math.min(zoomProgress, 1)); 

    const currentScale = startScale - (startScale - endScale) * zoomProgress;
    phoneWrapper.style.transform = `scale(${currentScale})`;

    // === FAZA 2: SCROLL INTERN ===
    if (relativeProgress > zoomPhaseEnd) {
      let scrollPhaseProgress = (relativeProgress - zoomPhaseEnd) / (1 - zoomPhaseEnd);
      
      const contentHeight = phoneContent.scrollHeight;
      const maxTranslate = contentHeight - currentScreenHeight;

      if (maxTranslate > 0) {
          const translateY = maxTranslate * scrollPhaseProgress;
          phoneContent.style.transform = `translateY(-${translateY}px)`;
      }
    } else {
      phoneContent.style.transform = `translateY(0px)`;
    }
  });
});