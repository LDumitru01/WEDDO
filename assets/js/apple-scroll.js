// Apple Scroll Immersive Reveal
(function() {
    'use strict';

    // Elements
    const demoSection = document.querySelector('.demo-section');
    const bgImage = document.getElementById('bgImage');
    const phoneContainer = document.getElementById('phoneContainer');
    const phoneImage = document.getElementById('phoneImage');

    if (!demoSection || !bgImage || !phoneContainer || !phoneImage) {
        console.warn('Required elements not found.');
        return;
    }

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        // Disable scroll‑driven animations, keep static state
        phoneContainer.style.opacity = '1';
        phoneContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        bgImage.style.transform = 'scale(1)';
        phoneImage.style.transform = 'scale(1)';
        return;
    }

    // Configuration
    const PHONE_WIDTH = 380; // px
    const PHONE_SCREEN_INSET = 0.08; // 8% each side
    const PHONE_SCREEN_WIDTH = PHONE_WIDTH * (1 - 2 * PHONE_SCREEN_INSET);

    // Animation states
    let ticking = false;
    let resizeTimeout = null;

    // Clamp utility
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    // Easing functions
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    function smoothstep(t) {
        return t * t * (3 - 2 * t);
    }

    // Calculate progress through the demo section
    function getScrollProgress() {
        const rect = demoSection.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const sectionHeight = demoSection.offsetHeight;

        // When the top of the section reaches the top of viewport, progress = 0
        // When the bottom of the section reaches the bottom of viewport, progress = 1
        const progress = clamp((-rect.top) / (sectionHeight - winHeight), 0, 1);
        return progress;
    }

    // Apply transformations based on progress
    function updateAnimation(progress) {
        // Phase 1: background shrinks, phone appears (0 -> 0.5)
        const phase1End = 0.5;
        const phase2End = 0.8; // start fading out phone
        const phase3End = 1.0;

        const targetScale = Math.max(PHONE_SCREEN_WIDTH / window.innerWidth, 0.1);

        let bgScale = 1;
        let phoneOpacity = 0;
        let phoneScale = 0.8;
        let isSticky = false;

        if (progress <= phase1End) {
            // Phase 1
            const p = progress / phase1End; // 0 to 1
            const eased = easeInOutCubic(p);
            bgScale = 1 + (targetScale - 1) * eased;
            phoneOpacity = eased;
            phoneScale = 0.8 + 0.2 * eased;
            isSticky = false;
        } else if (progress <= phase2End) {
            // Phase 2: phone stays fully visible, becomes sticky
            const p = (progress - phase1End) / (phase2End - phase1End);
            // Keep values constant (no interpolation)
            bgScale = targetScale;
            phoneOpacity = 1;
            phoneScale = 1;
            isSticky = true;
        } else {
            // Phase 3: phone fades out, background scales back up
            const p = (progress - phase2End) / (phase3End - phase2End);
            const eased = easeInOutCubic(p);
            bgScale = targetScale + (1 - targetScale) * eased;
            phoneOpacity = 1 - eased;
            phoneScale = 1 - 0.5 * eased; // shrink to 0.5
            isSticky = true;
        }

        // Apply background scale
        bgImage.style.transform = `scale(${bgScale})`;

        // Apply phone opacity and scale
        phoneContainer.style.opacity = phoneOpacity;
        phoneContainer.style.transform = `translate(-50%, -50%) scale(${phoneScale})`;

        // Adjust phone image to match background crop
        // The phone image should be scaled inversely to keep the background aligned
        const phoneImageScale = Math.abs(bgScale) > 0.001 ? 1 / bgScale : 1;
        phoneImage.style.transform = `scale(${phoneImageScale})`;

        // Toggle sticky class
        if (isSticky) {
            phoneContainer.classList.add('sticky');
        } else {
            phoneContainer.classList.remove('sticky');
        }
    }

    // RequestAnimationFrame throttling
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const progress = getScrollProgress();
                updateAnimation(progress);
                ticking = false;
            });
            ticking = true;
        }
    }

    // Debounced resize handler
    function onResize() {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const progress = getScrollProgress();
            updateAnimation(progress);
        }, 150);
    }

    // Initial call
    window.addEventListener('load', () => {
        updateAnimation(getScrollProgress());
    });

    // Listen to scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle resize
    window.addEventListener('resize', onResize, { passive: true });

    // Cleanup on pagehide (optional)
    window.addEventListener('pagehide', () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
    });
})();