// =====================
// APLICARE TEMA
// =====================
function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty("--color-bg", theme.bg);
    root.style.setProperty("--color-bg-alt", theme.bgAlt);
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-dark", theme.primaryDark);
    root.style.setProperty("--color-accent", theme.accent);
    root.style.setProperty("--color-text-main", theme.textMain);
    root.style.setProperty("--color-text-muted", theme.textMuted);
}

applyTheme(WEDDO_THEME);

// =====================
// LIMBĂ & TEXT
// =====================
function getContent() {
    const lang = WEDDO_CONTENT.activeLang;
    return WEDDO_CONTENT[lang] || WEDDO_CONTENT.ro;
}

function fillTexts() {
    const c = getContent();

    // Hero
    document.getElementById("heroCouple").textContent = c.hero.couple;
    document.getElementById("heroDatePlace").textContent =
        c.hero.date + " · " + c.hero.place;
    document.getElementById("heroTagline").textContent = c.hero.tagline;
    document.getElementById("heroCtaPrimary").textContent = c.hero.ctaPrimary;
    document.getElementById("heroCtaSecondary").textContent = c.hero.ctaSecondary;

    // Countdown labels
    document.getElementById("countdownTitle").textContent = c.countdown.title;
    document.getElementById("cdDaysLabel").textContent = c.countdown.days;
    document.getElementById("cdHoursLabel").textContent = c.countdown.hours;
    document.getElementById("cdMinutesLabel").textContent = c.countdown.minutes;

    // Quick info
    const qi = c.quickInfo;
    const qiContainer = document.getElementById("quickInfoContainer");
    qiContainer.innerHTML = "";
    const items = [qi.civil, qi.church, qi.party];
    items.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
        <p class="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">${item.label}</p>
        <p class="font-semibold">${item.time}</p>
        <p class="text-[12px] text-[var(--color-text-muted)]">${item.place}</p>
      `;
        qiContainer.appendChild(div);
    });

    // Story
    document.getElementById("storyTitle").textContent = c.story.title;
    document.getElementById("storyIntro").textContent = c.story.intro;
    const storyTimeline = document.getElementById("storyTimeline");
    storyTimeline.innerHTML = "";
    c.story.steps.forEach(s => {
        const card = document.createElement("div");
        card.className = "section-card p-4 md:p-5";
        card.innerHTML = `
        <p class="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">${s.year}</p>
        <p class="font-semibold mb-1">${s.title}</p>
        <p class="text-[13px] text-[var(--color-text-muted)]">${s.text}</p>
      `;
        storyTimeline.appendChild(card);
    });

    // Schedule
    document.getElementById("scheduleTitle").textContent = c.schedule.title;
    document.getElementById("scheduleDesc").textContent = c.schedule.description;
    const scheduleGrid = document.getElementById("scheduleGrid");
    scheduleGrid.innerHTML = "";
    c.schedule.items.forEach(item => {
        const div = document.createElement("div");
        div.className =
            "section-card p-4 flex flex-col gap-1 text-[13px]";
        div.innerHTML = `
        <p class="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">${item.time}</p>
        <p class="font-semibold">${item.title}</p>
        <p class="text-[13px] text-[var(--color-text-muted)]">${item.text}</p>
      `;
        scheduleGrid.appendChild(div);
    });

    // Venue
    document.getElementById("venueTitle").textContent = c.venue.title;
    document.getElementById("venueSubtitle").textContent = c.venue.subtitle;
    document.getElementById("venueText").textContent = c.venue.text;
    document.getElementById("venueTransportTitle").textContent = c.venue.transportTitle;
    const venueList = document.getElementById("venueTransportList");
    venueList.innerHTML = "";
    c.venue.transport.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        venueList.appendChild(li);
    });

    // Stay
    document.getElementById("stayTitle").textContent = c.stay.title;
    document.getElementById("stayIntro").textContent = c.stay.intro;
    const stayGrid = document.getElementById("stayGrid");
    stayGrid.innerHTML = "";
    c.stay.hotels.forEach(h => {
        const card = document.createElement("div");
        card.className = "section-card p-4 md:p-5 text-[13px]";
        card.innerHTML = `
        <p class="font-semibold text-[14px]">${h.name}</p>
        <p class="text-[var(--color-text-muted)] text-[12px] mb-1">${h.distance}</p>
        <p class="text-[var(--color-text-muted)]">${h.note}</p>
      `;
        stayGrid.appendChild(card);
    });

    // Gifts
    document.getElementById("giftsTitle").textContent = c.gifts.title;
    document.getElementById("giftsText1").textContent = c.gifts.text1;
    document.getElementById("giftsText2").textContent = c.gifts.text2;
    document.getElementById("giftsIbanTitle").textContent = c.gifts.ibanTitle;
    document.getElementById("giftsIbanName").textContent = c.gifts.ibanName;
    document.getElementById("giftsIban").textContent = c.gifts.iban;
    document.getElementById("giftsIbanNote").textContent = c.gifts.ibanNote;

    // Gallery
    document.getElementById("galleryTitle").textContent = c.gallery.title;
    document.getElementById("gallerySubtitle").textContent = c.gallery.subtitle;
    const galleryGrid = document.getElementById("galleryGrid");
    galleryGrid.innerHTML = "";
    CONFIG.gallery.forEach((src, idx) => {
        const div = document.createElement("div");
        div.className =
            "overflow-hidden rounded-3xl shadow cursor-pointer aspect-[4/5] bg-gray-200";
        div.innerHTML = `<img src="${src}" alt="Foto ${idx + 1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />`;
        div.addEventListener("click", () => openLightbox(src));
        galleryGrid.appendChild(div);
    });

    // RSVP
    document.getElementById("rsvpTitle").textContent = c.rsvp.title;
    document.getElementById("rsvpIntro").textContent = c.rsvp.intro;
    document.getElementById("rsvpStep1Title").textContent = c.rsvp.step1.title;
    document.getElementById("rsvpStep2Title").textContent = c.rsvp.step2.title;
    document.getElementById("rsvpStep3Title").textContent = c.rsvp.step3.title;
    document.getElementById("rsvpStep3Info").textContent = c.rsvp.step3.info;
    document.getElementById("rsvpStep1Label").textContent =
        c.rsvp.stepsLabels[0];
    document.getElementById("rsvpStep2Label").textContent =
        c.rsvp.stepsLabels[1];
    document.getElementById("rsvpStep3Label").textContent =
        c.rsvp.stepsLabels[2];
    document.getElementById("rsvpSuccess").textContent = c.rsvp.success;

    // FAQ
    document.getElementById("faqTitle").textContent = c.faq.title;
    const faqList = document.getElementById("faqList");
    faqList.innerHTML = "";
    c.faq.items.forEach(item => {
        const details = document.createElement("details");
        details.className = "bg-[var(--color-bg)] rounded-2xl p-3 md:p-4";
        details.innerHTML = `
        <summary class="cursor-pointer font-semibold">${item.q}</summary>
        <p class="mt-2 text-[13px] text-[var(--color-text-muted)]">${item.a}</p>
      `;
        faqList.appendChild(details);
    });

    // Contact
    document.getElementById("contactBride").textContent = c.contact.bride;
    document.getElementById("contactGroom").textContent = c.contact.groom;
    document.getElementById("contactEmail").textContent = c.contact.email;

    // Footer
    document.getElementById("footerText").textContent = c.footer;

}

// =====================
// COUNTDOWN
// =====================
const eventDate = new Date("2025-09-20T17:00:00").getTime();
function startCountdown() {
    setInterval(() => {
        const now = new Date().getTime();
        let diff = eventDate - now;
        if (diff < 0) diff = 0;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("cdDays").textContent = String(days).padStart(
            2,
            "0"
        );
        document.getElementById("cdHours").textContent = String(hours).padStart(
            2,
            "0"
        );
        document.getElementById("cdMinutes").textContent = String(minutes).padStart(
            2,
            "0"
        );
    }, 1000);
}

// =====================
// MOBILE MENU
// =====================
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        const id = a.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top, behavior: "smooth" });
        }
    });
});

// =====================
// REVEAL ON SCROLL
// =====================
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);
revealEls.forEach(el => observer.observe(el));

// =====================
// GALLERY LIGHTBOX
// =====================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove("pointer-events-none");
    lightbox.style.opacity = "1";
}
function closeLightbox() {
    lightbox.style.opacity = "0";
    lightbox.classList.add("pointer-events-none");
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
});

// =====================
// RSVP MULTI-STEP
// =====================
let currentStep = 1;
const step1 = document.getElementById("rsvpStep1");
const step2 = document.getElementById("rsvpStep2");
const step3 = document.getElementById("rsvpStep3");
const prevBtn = document.getElementById("rsvpPrevBtn");
const nextBtn = document.getElementById("rsvpNextBtn");
const submitBtn = document.getElementById("rsvpSubmitBtn");
const step1Dot = document.getElementById("rsvpStep1Dot");
const step2Dot = document.getElementById("rsvpStep2Dot");
const step3Dot = document.getElementById("rsvpStep3Dot");
const rsvpForm = document.getElementById("rsvpForm");
const rsvpSuccess = document.getElementById("rsvpSuccess");
const summaryBox = document.getElementById("rsvpSummary");

function updateStepUI() {
    step1.classList.add("hidden");
    step2.classList.add("hidden");
    step3.classList.add("hidden");
    step1Dot.className =
        "w-7 h-7 rounded-full flex items-center justify-center text-[11px]";
    step2Dot.className =
        "w-7 h-7 rounded-full flex items-center justify-center text-[11px]";
    step3Dot.className =
        "w-7 h-7 rounded-full flex items-center justify-center text-[11px]";

    if (currentStep === 1) {
        step1.classList.remove("hidden");
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
        step1Dot.classList.add("bg-[var(--color-primary)]", "text-white");
        step2Dot.classList.add(
            "border",
            "border-[var(--color-accent)]",
            "text-[var(--color-text-muted)]"
        );
        step3Dot.classList.add(
            "border",
            "border-[var(--color-accent)]",
            "text-[var(--color-text-muted)]"
        );
    } else if (currentStep === 2) {
        step2.classList.remove("hidden");
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
        step1Dot.classList.add(
            "bg-[var(--color-primary)]",
            "text-white"
        );
        step2Dot.classList.add(
            "bg-[var(--color-primary)]",
            "text-white"
        );
        step3Dot.classList.add(
            "border",
            "border-[var(--color-accent)]",
            "text-[var(--color-text-muted)]"
        );
    } else {
        step3.classList.remove("hidden");
        prevBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
        step1Dot.classList.add(
            "bg-[var(--color-primary)]",
            "text-white"
        );
        step2Dot.classList.add(
            "bg-[var(--color-primary)]",
            "text-white"
        );
        step3Dot.classList.add(
            "bg-[var(--color-primary)]",
            "text-white"
        );
        // completăm sumarul
        const name = document.getElementById("rsvpName").value || "-";
        const email = document.getElementById("rsvpEmail").value || "-";
        const phone = document.getElementById("rsvpPhone").value || "-";
        const guests = document.getElementById("rsvpGuests").value;
        const message = document.getElementById("rsvpMessage").value || "-";
        const attend = (
            document.querySelector('input[name="attendance"]:checked') || {}
        ).value || "yes";

        const attendText =
            attend === "yes" ? "Voi participa" : "Din păcate nu voi putea fi prezent(ă)";

        summaryBox.innerHTML = `
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Prezență:</strong> ${attendText}</p>
        <p><strong>Nr. persoane:</strong> ${guests}</p>
        <p><strong>Detalii:</strong> ${message}</p>
      `;
    }
}

prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateStepUI();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentStep < 3) {
        currentStep++;
        updateStepUI();
    }
});

rsvpForm.addEventListener("submit", e => {
    e.preventDefault();
    // aici ai integrare cu backend / API
    rsvpSuccess.classList.remove("hidden");
    setTimeout(() => {
        rsvpForm.reset();
        currentStep = 1;
        updateStepUI();
    }, 1500);
});

// INIT
fillTexts();
startCountdown();
updateStepUI();