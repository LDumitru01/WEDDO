
// ===== Invitation Data (edit this to customize template) =====
const invitationData = {
    names: "Ana & Mihai",
    date: "19 Septembrie 2026",
    place: "Castel Mimi",
    ceremonyTime: "15:30",
    receptionTime: "18:00",
    storyTitle: "O promisiune scrisă în timp",
    storyText:
        "Ne-am întâlnit într-o zi obișnuită, dar am recunoscut imediat ceva rar: liniște, încredere, și sentimentul că acasă poate fi un om. Vă invităm să ne fiți martori.",
    dressCode: "Elegant · Wine tones",
    venueAddress: "Bulboaca, Moldova",
    mapsUrl: "https://maps.google.com/?q=Bulboaca%2C%20Moldova",
    experience: [
        { title: "Ceremonie în aer liber", text: "Lumină caldă, piatră, vie – un cadru curat și solemn." },
        { title: "Banchet rafinat", text: "Fine dining, plating elegant, ritm calm de seară." },
        { title: "Vinuri de colecție", text: "Accente burgundy, note aurii, detalii discrete." },
        { title: "Atmosferă de castel", text: "Arhitectură, cultură, eleganță – fără exces." }
    ],
    program: [
        { time: "15:00", title: "Sosire invitați", desc: "Primire, check-in, welcome drink." },
        { time: "15:30", title: "Ceremonie", desc: "Momentul solemn al promisiunii." },
        { time: "17:00", title: "Toast & fotografii", desc: "Lumina de după-amiază, cadre curate." },
        { time: "18:00", title: "Recepție", desc: "Cina, discursuri, atmosferă." },
        { time: "20:30", title: "Dans & party", desc: "Muzică, energie, bucurie." },
        { time: "23:30", title: "Final de seară", desc: "Mulțumiri și încheiere." }
    ],
    zones: [
        {
            key: "reception",
            label: "Recepție",
            desc: "Un spațiu cu lumină caldă, detalii rafinate și ritm calm – exact cât trebuie pentru o seară memorabilă.",
            images: {
                day: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2400&q=60",
                night: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=2400&q=60"
            }
        },
        {
            key: "ceremony",
            label: "Ceremonie",
            desc: "Un cadru curat, solemn, cu perspectivă arhitecturală și liniște în fundal.",
            images: {
                day: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2400&q=60",
                night: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=60"
            }
        },
        {
            key: "party",
            label: "Party",
            desc: "O atmosferă intensă, dar elegantă – lumină controlată, energie, ritm.",
            images: {
                day: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=2400&q=60",
                night: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=60"
            }
        },
        {
            key: "bar",
            label: "Bar",
            desc: "Detalii fine, note de vin, conversații – un colț intim, rafinat.",
            images: {
                day: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=2400&q=60",
                night: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2400&q=60"
            }
        }
    ],
    gallery: [
        { src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=60", caption: "Noapte, lumină și piatră" },
        { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=60", caption: "Editorial calm" },
        { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=60", caption: "Atmosferă de seară" },
        { src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1400&q=60", caption: "Ceremonie" },
        { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=60", caption: "Lumini fine" },
        { src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=60", caption: "Party mood" },
        { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=60", caption: "Bar & detalii" },
        { src: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=1400&q=60", caption: "Natură & arhitectură" }
    ],
    testimonials: [
        { quote: "Un template rar: calm, premium, fără zgomot vizual.", author: "Invitat" },
        { quote: "Totul respiră eleganță. Exact ritmul potrivit.", author: "Prieteni" },
        { quote: "Tipografia și spațiul alb fac diferența.", author: "Familie" }
    ],
    news: [
        { title: "Transport", text: "Vom avea un punct de întâlnire și un transfer organizat (detalii în curând)." },
        { title: "Cazare", text: "Recomandăm rezervarea din timp. Putem oferi o listă de opțiuni." },
        { title: "Cadouri", text: "Prezența voastră este darul principal. Dacă doriți, puteți lăsa un mesaj pentru noi." }
    ],
    faq: [
        { q: "Care este dress code-ul?", a: "Elegant. Recomandăm tonuri neutre, wine și accente aurii discrete." },
        { q: "Pot veni cu însoțitor?", a: "Da. Selectează numărul de persoane în RSVP." },
        { q: "Există parcare?", a: "Da, există parcare disponibilă la locație." },
        { q: "Pot solicita meniu special?", a: "Da. Alege din opțiuni sau scrie în mesaj." }
    ]
};

// ===== Helpers =====
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ===== Inject data into UI =====
function hydrateFromData() {
    $("#heroNames").textContent = invitationData.names;
    $("#heroDate").textContent = invitationData.date;
    $("#heroPlace").textContent = invitationData.place;

    $("#ceremonyTime").textContent = invitationData.ceremonyTime;
    $("#receptionTime").textContent = invitationData.receptionTime;
    $("#storyTitle").textContent = invitationData.storyTitle;
    $("#storyText").textContent = invitationData.storyText;

    $("#dressCode").textContent = invitationData.dressCode;
    $("#venueAddress").textContent = invitationData.venueAddress;
    $("#mapsLink").href = invitationData.mapsUrl;

    // Experience cards
    const expWrap = $("#experienceCards");
    expWrap.innerHTML = invitationData.experience.map(item => `
        <article class="reveal bg-[var(--bg)] soft-border rounded-[var(--radius)] p-5 shadow-[var(--shadow-soft)]">
          <p class="text-[var(--gold)] text-xs uppercase tracking-[0.22em]">Panel</p>
          <h3 class="mt-2 font-[var(--font-heading)] text-xl">${escapeHtml(item.title)}</h3>
          <p class="mt-3 text-sm text-[var(--muted)] leading-relaxed">${escapeHtml(item.text)}</p>
          <div class="mt-5 h-px bg-[var(--gold)]/35"></div>
        </article>
      `).join("");

    // Timeline + program grid
    const tl = $("#timeline");
    const pg = $("#programGrid");
    tl.innerHTML = invitationData.program.map(p => `
        <div class="relative">
          <div class="absolute -left-[18px] top-2 w-3 h-3 rounded-full bg-[var(--accent)]"></div>
          <p class="font-[var(--font-heading)] text-lg">${escapeHtml(p.time)}</p>
          <p class="mt-1 font-semibold">${escapeHtml(p.title)}</p>
          <p class="mt-1 text-sm text-[var(--muted)] leading-relaxed">${escapeHtml(p.desc)}</p>
        </div>
      `).join("");

    pg.innerHTML = invitationData.program.slice(0, 4).map(p => `
        <div class="reveal bg-[var(--surface)] soft-border rounded-[var(--radius)] p-5 shadow-[var(--shadow-soft)]">
          <p class="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">${escapeHtml(p.time)}</p>
          <p class="mt-2 font-semibold">${escapeHtml(p.title)}</p>
          <p class="mt-2 text-sm text-[var(--muted)] leading-relaxed">${escapeHtml(p.desc)}</p>
        </div>
      `).join("");

    // Zones tabs
    const zoneTabs = $("#zoneTabs");
    zoneTabs.innerHTML = invitationData.zones.map(z => `
        <button class="px-3 py-2 rounded-lg text-sm soft-border bg-[var(--bg)] hover:bg-[var(--surface)] transition"
                data-zone="${z.key}">
          ${escapeHtml(z.label)}
        </button>
      `).join("");

    // Gallery
    const gg = $("#galleryGrid");
    gg.innerHTML = invitationData.gallery.map((g, idx) => `
        <button class="group relative rounded-[var(--radius)] overflow-hidden soft-border bg-[var(--surface)]"
                data-gallery="${idx}" aria-label="Deschide imaginea ${idx + 1}">
          <img class="w-full h-44 sm:h-52 object-cover transition duration-300 group-hover:scale-[1.03]"
               loading="lazy" src="${g.src}" alt="${escapeHtml(g.caption)}">
          <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/55 to-transparent">
            <p class="text-white/90 text-xs">${escapeHtml(g.caption)}</p>
          </div>
        </button>
      `).join("");

    // Testimonials track
    const tt = $("#testimonialTrack");
    tt.innerHTML = invitationData.testimonials.map(t => `
        <article class="min-w-[85%] sm:min-w-[420px] snap-start bg-[var(--bg)] soft-border rounded-[var(--radius)]
                        p-6 shadow-[var(--shadow-soft)]">
          <p class="text-lg leading-relaxed font-[var(--font-heading)]">“${escapeHtml(t.quote)}”</p>
          <p class="mt-4 text-sm text-[var(--muted)]">— ${escapeHtml(t.author)}</p>
        </article>
      `).join("");

    // News cards
    const ng = $("#newsGrid");
    ng.innerHTML = invitationData.news.map(n => `
        <article class="reveal bg-[var(--surface)] soft-border rounded-[var(--radius)] p-6 shadow-[var(--shadow-soft)]">
          <p class="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Info</p>
          <h3 class="mt-2 font-[var(--font-heading)] text-2xl">${escapeHtml(n.title)}</h3>
          <p class="mt-3 text-sm text-[var(--muted)] leading-relaxed">${escapeHtml(n.text)}</p>
          <div class="mt-5">
            <a class="text-sm text-[var(--accent)] hover:underline" href="#rsvp">Întreabă în RSVP</a>
          </div>
        </article>
      `).join("");

    // FAQ
    const fq = $("#faqList");
    fq.innerHTML = invitationData.faq.map((f, i) => `
        <div class="reveal bg-[var(--surface)] soft-border rounded-[var(--radius)] overflow-hidden">
          <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
                  data-faq="${i}" aria-expanded="false">
            <span class="font-semibold">${escapeHtml(f.q)}</span>
            <span class="text-[var(--muted)]">+</span>
          </button>
          <div class="px-5 pb-4 hidden" data-faq-panel="${i}">
            <p class="text-sm text-[var(--muted)] leading-relaxed">${escapeHtml(f.a)}</p>
          </div>
        </div>
      `).join("");

    $("#year").textContent = new Date().getFullYear();
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

// ===== Scroll reveal =====
function initReveal() {
    const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
            if (e.isIntersecting) e.target.classList.add("is-in");
        }
    }, { threshold: 0.12 });
    $$(".reveal").forEach(el => io.observe(el));
}

// ===== Mobile menu =====
function initMobileMenu() {
    const btn = $("#mobileMenuBtn");
    const menu = $("#mobileMenu");
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
    $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => menu.classList.add("hidden")));
}

// ===== Zones / Day-Night =====
let currentMode = "day";
let currentZoneKey = "reception";

function setMode(mode) {
    currentMode = mode;
    $("#modeLabel").textContent = mode === "day" ? "Zi" : "Noapte";
    renderZone();
}

function setZone(key) {
    currentZoneKey = key;
    // active tab styling
    $$("#zoneTabs button").forEach(b => {
        const on = b.dataset.zone === key;
        b.classList.toggle("bg-[var(--surface)]", on);
    });
    renderZone();
}

function renderZone() {
    const z = invitationData.zones.find(x => x.key === currentZoneKey) || invitationData.zones[0];
    $("#zoneTitle").textContent = z.label;
    $("#zoneDesc").textContent = z.desc;
    $("#zoneImage").src = z.images[currentMode] || z.images.day;
}

function initZones() {
    // Mode buttons
    $$("[data-mode]").forEach(btn => {
        btn.addEventListener("click", () => {
            const mode = btn.dataset.mode;
            setMode(mode);
        });
    });

    // Zone buttons
    $$("#zoneTabs button").forEach(btn => {
        btn.addEventListener("click", () => setZone(btn.dataset.zone));
    });

    // default
    setMode("day");
    setZone(invitationData.zones[0]?.key || "reception");
}

// ===== Copy location =====
function initCopy() {
    $("#copyLocation").addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(invitationData.venueAddress);
            $("#copyToast").classList.remove("hidden");
            setTimeout(() => $("#copyToast").classList.add("hidden"), 1200);
        } catch {
            // fallback
            $("#copyToast").textContent = "Nu pot copia (browser).";
            $("#copyToast").classList.remove("hidden");
            setTimeout(() => { $("#copyToast").classList.add("hidden"); $("#copyToast").textContent = "Copiat."; }, 1600);
        }
    });
}

// ===== Lightbox =====
function initLightbox() {
    const lb = $("#lightbox");
    const img = $("#lbImg");
    const cap = $("#lbCaption");

    function open(idx) {
        const g = invitationData.gallery[idx];
        if (!g) return;
        img.src = g.src;
        cap.textContent = g.caption || "";
        lb.classList.remove("hidden");
        lb.classList.add("flex");
        document.body.classList.add("no-scroll");
    }

    function close() {
        lb.classList.add("hidden");
        lb.classList.remove("flex");
        document.body.classList.remove("no-scroll");
    }

    $("#lbClose").addEventListener("click", close);
    lb.addEventListener("click", (e) => {
        if (e.target === lb || e.target.classList.contains("lb-backdrop")) close();
    });
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !lb.classList.contains("hidden")) close();
    });

    $$("#galleryGrid [data-gallery]").forEach(btn => {
        btn.addEventListener("click", () => open(Number(btn.dataset.gallery)));
    });
}

// ===== Testimonials controls =====
function initTestimonials() {
    const track = $("#testimonialTrack");
    const prev = $("#tPrev");
    const next = $("#tNext");
    if (!prev || !next) return;

    const scrollBy = (dir) => {
        const card = track.querySelector("article");
        const w = card ? card.getBoundingClientRect().width + 16 : 420;
        track.scrollBy({ left: dir * w, behavior: "smooth" });
    };

    prev.addEventListener("click", () => scrollBy(-1));
    next.addEventListener("click", () => scrollBy(1));
}

// ===== FAQ accordion =====
function initFaq() {
    $$("#faqList [data-faq]").forEach(btn => {
        btn.addEventListener("click", () => {
            const i = btn.dataset.faq;
            const panel = $(`#faqList [data-faq-panel="${i}"]`);
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!expanded));
            panel.classList.toggle("hidden", expanded);
            btn.querySelector("span:last-child").textContent = expanded ? "+" : "–";
        });
    });
}

// ===== RSVP form (demo validation) =====
function initRsvp() {
    const form = $("#rsvpForm");
    const status = $("#rsvpStatus");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        status.textContent = "";

        const name = $("#name").value.trim();
        const phone = $("#phone").value.trim();
        const attend = $("#attend").value;

        if (name.length < 3) {
            status.textContent = "Te rog introdu un nume valid.";
            return;
        }
        if (!/^\+?\d[\d\s()-]{6,}$/.test(phone)) {
            status.textContent = "Te rog introdu un telefon valid.";
            return;
        }

        const payload = {
            name,
            phone,
            guests: $("#guests").value,
            attend,
            menu: $("#menu").value,
            message: $("#message").value.trim()
        };

        // Demo: show success message. Replace with fetch() to backend.
        status.textContent = attend === "yes"
            ? "Mulțumim. Prezența ta a fost confirmată (demo)."
            : "Mulțumim. Am înregistrat răspunsul tău (demo).";

        // For builders: you can emit an event here
        console.log("RSVP payload (demo):", payload);

        form.reset();
    });
}

// ===== Theme panel (CSS variables + localStorage) =====
const THEME_KEY = "chateau_theme_v1";
function rgbaFromOverlay(alpha) {
    // overlay color is based on text color darkness; use charcoal baseline
    return `rgba(31,26,23,${alpha})`;
}

function applyThemeState(state) {
    if (!state) return;
    const root = document.documentElement;
    if (state.mode === "dark") root.classList.add("theme-dark");
    else root.classList.remove("theme-dark");

    if (state.accent) root.style.setProperty("--accent", state.accent);
    if (state.bg) root.style.setProperty("--bg", state.bg);
    if (state.overlayAlpha) root.style.setProperty("--overlay", rgbaFromOverlay(state.overlayAlpha));
}

function saveThemeState(state) {
    localStorage.setItem(THEME_KEY, JSON.stringify(state));
}

function loadThemeState() {
    try {
        return JSON.parse(localStorage.getItem(THEME_KEY) || "null");
    } catch { return null; }
}

function resetTheme() {
    localStorage.removeItem(THEME_KEY);
    document.documentElement.classList.remove("theme-dark");
    document.documentElement.style.removeProperty("--accent");
    document.documentElement.style.removeProperty("--bg");
    document.documentElement.style.removeProperty("--overlay");
    initThemeInputs(); // re-sync controls
}

function initThemeInputs() {
    const rootStyles = getComputedStyle(document.documentElement);
    const accent = rootStyles.getPropertyValue("--accent").trim() || "#6b1f2b";
    const bg = rootStyles.getPropertyValue("--bg").trim() || "#f6f2ec";
    $("#pickAccent").value = toHexSafe(accent, "#6b1f2b");
    $("#pickBg").value = toHexSafe(bg, "#f6f2ec");

    // parse overlay alpha from rgba
    const ov = (rootStyles.getPropertyValue("--overlay").trim() || "rgba(31,26,23,0.48)");
    const alpha = parseRgbaAlpha(ov) ?? 0.48;
    $("#overlayRange").value = alpha.toFixed(2);
}

function parseRgbaAlpha(rgba) {
    const m = rgba.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([0-9.]+)\s*\)/i);
    return m ? Number(m[1]) : null;
}

function toHexSafe(val, fallback) {
    // if already hex
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(val)) return val;
    // attempt rgb(...) to hex
    const m = val.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
    if (!m) return fallback;
    const r = Number(m[1]), g = Number(m[2]), b = Number(m[3]);
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

function initThemePanel() {
    const state = loadThemeState();
    applyThemeState(state);
    initThemeInputs();

    $("#pickAccent").addEventListener("input", (e) => {
        document.documentElement.style.setProperty("--accent", e.target.value);
        const s = loadThemeState() || { mode: document.documentElement.classList.contains("theme-dark") ? "dark" : "light" };
        s.accent = e.target.value;
        saveThemeState(s);
    });

    $("#pickBg").addEventListener("input", (e) => {
        document.documentElement.style.setProperty("--bg", e.target.value);
        const s = loadThemeState() || { mode: document.documentElement.classList.contains("theme-dark") ? "dark" : "light" };
        s.bg = e.target.value;
        saveThemeState(s);
    });

    $("#overlayRange").addEventListener("input", (e) => {
        const a = Number(e.target.value);
        document.documentElement.style.setProperty("--overlay", rgbaFromOverlay(a));
        const s = loadThemeState() || { mode: document.documentElement.classList.contains("theme-dark") ? "dark" : "light" };
        s.overlayAlpha = a;
        saveThemeState(s);
    });

    $("#toggleMode").addEventListener("click", () => {
        document.documentElement.classList.toggle("theme-dark");
        initThemeInputs();
        const s = loadThemeState() || {};
        s.mode = document.documentElement.classList.contains("theme-dark") ? "dark" : "light";
        saveThemeState(s);
    });

    $("#resetTheme").addEventListener("click", resetTheme);

    // panel open/close
    $("#themePanelClose").addEventListener("click", () => $("#themePanel").classList.add("hidden"));
    $("#themePanelOpen").addEventListener("click", () => $("#themePanel").classList.toggle("hidden"));
}

// ===== Section toggles (demo builder behavior) =====
const sectionMeta = [
    { key: "hero", label: "Hero" },
    { key: "story", label: "Story" },
    { key: "experience", label: "Experience" },
    { key: "program", label: "Program" },
    { key: "venue", label: "Venue" },
    { key: "gallery", label: "Gallery" },
    { key: "testimonials", label: "Testimonials" },
    { key: "news", label: "News" },
    { key: "rsvp", label: "RSVP" },
    { key: "faq", label: "FAQ" },
];
const SECTIONS_KEY = "chateau_sections_v1";

function loadSectionState() {
    try { return JSON.parse(localStorage.getItem(SECTIONS_KEY) || "null"); }
    catch { return null; }
}
function saveSectionState(state) {
    localStorage.setItem(SECTIONS_KEY, JSON.stringify(state));
}

function setSectionVisible(key, visible) {
    const sec = document.querySelector(`[data-section="${key}"]`);
    if (!sec) return;
    sec.style.display = visible ? "" : "none";
}

function initSectionToggles() {
    const container = $("#sectionToggles");
    const state = loadSectionState() || Object.fromEntries(sectionMeta.map(s => [s.key, true]));

    container.innerHTML = sectionMeta.map(s => `
        <label class="flex items-center gap-2 text-xs bg-[var(--bg)] soft-border rounded-lg px-3 py-2">
          <input type="checkbox" data-sec="${s.key}" class="accent-[var(--accent)]" ${state[s.key] ? "checked" : ""}>
          <span>${s.label}</span>
        </label>
      `).join("");

    // apply
    sectionMeta.forEach(s => setSectionVisible(s.key, !!state[s.key]));

    container.addEventListener("change", (e) => {
        const cb = e.target.closest("input[data-sec]");
        if (!cb) return;
        state[cb.dataset.sec] = cb.checked;
        setSectionVisible(cb.dataset.sec, cb.checked);
        saveSectionState(state);
    });
}

// ===== Misc =====
function initLangButtons() {
    $$("[data-lang]").forEach(btn => {
        btn.addEventListener("click", () => {
            // Demo only (for builder you'd switch JSON translations)
            $$("[data-lang]").forEach(b => b.classList.remove("bg-[var(--bg)]"));
            btn.classList.add("bg-[var(--bg)]");
        });
    });
}

// ===== Boot =====
document.addEventListener("DOMContentLoaded", () => {
    hydrateFromData();

    initReveal();
    initMobileMenu();
    initZones();
    initCopy();
    initLightbox();
    initTestimonials();
    initFaq();
    initRsvp();
    initLangButtons();

    // Theme panel (desktop)
    initThemePanel();
    initSectionToggles();

    // ensure default active zone tab styles
    setZone(currentZoneKey);
});
