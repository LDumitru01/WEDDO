document.addEventListener("scroll", () => {
  // Căutăm TOATE secțiunile, nu doar una
  const sections = document.querySelectorAll(".phone-scroll-section");

  if (!sections.length) return;

  // Trecem prin fiecare secțiune găsită
  sections.forEach(section => {
    
    // Căutăm elementele DOAR în interiorul secțiunii curente
    const phoneWrapper = section.querySelector(".phone-frame-wrapper");
    // Folosim clasa .phone-content-wrapper în loc de ID
    const phoneContent = section.querySelector(".phone-content-wrapper");
    const phoneScreenElement = section.querySelector(".phone-screen");
    const phoneFrameElement = section.querySelector(".phone-frame");

    if (!phoneWrapper || !phoneScreenElement || !phoneContent) return;

    // === MĂSURĂTORI DINAMICE (Codul tău original) ===
    const currentScreenHeight = phoneScreenElement.offsetHeight;
    
    const windowHeight = window.innerHeight;
    const availableHeight = windowHeight - 40; 

    const frameHeight = phoneFrameElement.offsetHeight || 700; 
    let idealFitScale = availableHeight / frameHeight;
    const endScale = Math.min(1.0, idealFitScale); 

    const startScale = 1.6; 
    
    // Calcule scroll pagină
    const sectionRect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    
    // scrollDistance este relativ la fiecare secțiune în parte
    const scrollDistance = -sectionRect.top; 
    const maxScroll = sectionHeight - windowHeight;
    
    let relativeProgress = scrollDistance / maxScroll;
    relativeProgress = Math.max(0, Math.min(relativeProgress, 1));

    // === FAZA 1: ZOOM ===
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