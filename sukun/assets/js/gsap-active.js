/* ============================================================
   GSAP Animations
   ============================================================ */
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

$(document).ready(function () {
    const st = $(".poort-text");
    if (st.length === 0 || typeof SplitText === "undefined") return;

    st.each(function (_, el) {
        const split = new SplitText(el, { type: "lines,words,chars", linesClass: "poort-line" });
        gsap.set(el, { perspective: 600 });

        if ($(el).hasClass("poort-in-right")) {
            gsap.set(split.chars, { opacity: 0, x: 100, ease: "back.out(1.7)" });
        } else if ($(el).hasClass("poort-in-left")) {
            gsap.set(split.chars, { opacity: 0, x: -100, ease: "circ.out" });
        } else if ($(el).hasClass("poort-in-up")) {
            gsap.set(split.chars, { opacity: 0, y: 80, ease: "circ.out" });
        } else if ($(el).hasClass("poort-in-down")) {
            gsap.set(split.chars, { opacity: 0, y: -80, ease: "circ.out" });
        }

        gsap.to(split.chars, {
            scrollTrigger: { trigger: el, start: "top 90%" },
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.02
        });
    });
});


/* ============================================================
   Simple Parallax
   ============================================================ */
const thumbs = document.querySelectorAll('.thumbnail');
if (thumbs.length) {
    new simpleParallax(thumbs, { delay: 0.6, transition: 'cubic-bezier(0,0,0,1)' });
}

const thumbs2 = document.querySelectorAll('.thumbnail2');
if (thumbs2.length) {
    new simpleParallax(thumbs2, { delay: 0.6, transition: 'cubic-bezier(0,0,0,1)', orientation: 'down' });
}


/* ============================================================
   Scroll Sticky Items
   ============================================================ */
const storyItems = document.querySelectorAll('.wpo-story-item');
if (storyItems.length) {
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            storyItems.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const prevItem = storyItems[index - 1];

                if (rect.top <= 230 && rect.bottom >= 230) {
                    item.classList.add('sticky');
                    if (prevItem) prevItem.classList.add('fade-out');
                } else {
                    item.classList.remove('sticky');
                    if (prevItem) prevItem.classList.remove('fade-out');
                }
            });
        });
    });
}


/* ============================================================
   Marquee Animation
   ============================================================ */
function Marquee(selector, speed) {
    const parents = document.querySelectorAll(selector);
    parents.forEach((parent) => {
        const clone = parent.innerHTML;
        const firstElement = parent.children[0];
        let i = 0;

        // Duplicate content to create infinite loop
        parent.insertAdjacentHTML('beforeend', clone + clone);

        function animate() {
            if (!firstElement) return;
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) i = 0;
            i += speed;
            requestAnimationFrame(animate);
        }
        animate();
    });
}

window.addEventListener('load', () => {
    if (document.querySelector('.marquee, .marquee2')) {
        Marquee('.marquee, .marquee2', 0.2);
    }
});


/* ============================================================
   Image Scroll Animation
   ============================================================ */
document.querySelectorAll(".new_img-animet").forEach((wrapper) => {
    const img = wrapper.querySelector("img");
    if (!img) return;

    const tl = gsap.timeline({
        scrollTrigger: { trigger: wrapper, start: "top 50%" }
    });

    tl.set(wrapper, { autoAlpha: 1 })
        .from(wrapper, { duration: 1.5, xPercent: -100, ease: "power2.out" })
        .from(img, { duration: 1.5, xPercent: 100, scale: 1.3, delay: -1.5, ease: "power2.out" });
});
