<div class="w-full bg-weddoLight">
  <div class="max-w-7xl mx-auto px-6 py-6 relative">

    <div id="storiesContainer"
         class="flex items-center gap-2 overflow-x-auto scrollbar-hide">

      <!-- stories injectate aici -->
    </div>

    <!-- fade dreapta -->
    <div class="pointer-events-none absolute top-0 right-0 w-12 h-full
                bg-gradient-to-l from-bg-weddoLight to-transparent">
    </div>

    <!-- fade stânga (IMPORTANT) -->
    <div class="pointer-events-none absolute top-0 left-0 w-12 h-full
                bg-gradient-to-r from-bg-weddoLight to-transparent">
    </div>

  </div>
</div>


<div id="storyViewer"
     class="fixed inset-0 bg-black z-[99999] hidden flex items-center justify-center">

  <!-- Progress -->
  <div class="absolute top-4 left-4 right-4 h-1 bg-white/30 rounded overflow-hidden">
    <div id="storyProgressFill" class="h-full bg-white w-0"></div>
  </div>

  <!-- Media -->
  <video id="storyVideo"
         class="max-h-full max-w-full object-contain"
         playsinline
         muted
         autoplay></video>

  <!-- Close -->
  <button id="closeStory"
          class="absolute top-6 right-6 text-white text-3xl">
    &times;
  </button>
</div>

<style>

  /* Ascunde scrollbar, dar păstrează scroll-ul */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;     
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;            
}

.story-circle {
  border: 4px solid #d27b8a;
}
.story-viewed {
  border-color: #cbd5e1 !important;
  opacity: 0.75;
}
</style>

<script>
/* =========================
   GLOBAL STATE
========================= */
let stories = [];
let timer = null;
let currentStoryIndex = null;

const container    = document.getElementById("storiesContainer");
const viewer       = document.getElementById("storyViewer");
const video        = document.getElementById("storyVideo");
const progressFill = document.getElementById("storyProgressFill");
const closeBtn     = document.getElementById("closeStory");

/* =========================
   LOCAL STORAGE
========================= */
function getViewedStories() {
  return JSON.parse(localStorage.getItem("viewedStories") || "[]");
}

function markStoryViewed(id) {
  const viewed = getViewedStories();
  if (!viewed.includes(id)) {
    viewed.push(id);
    localStorage.setItem("viewedStories", JSON.stringify(viewed));
  }
}

/* =========================
   LOAD STORIES
========================= */
fetch("assets/json/story.json?ts=" + Date.now())
  .then(r => r.json())
  .then(data => {
    stories = data;
    renderStories();
  })
  .catch(err => console.error("Story JSON error:", err));

/* =========================
   RENDER STORIES
========================= */
function renderStories() {
  container.innerHTML = "";

  const viewed = getViewedStories();
  const unseen = stories.filter(s => !viewed.includes(s.id));
  const seen   = stories.filter(s => viewed.includes(s.id));

  [...unseen, ...seen].forEach(story => {
    const isViewed = viewed.includes(story.id);

    const el = document.createElement("div");
    el.className =
      "story-item flex flex-col items-center flex-shrink-0 w-[70px] md:w-[100px] cursor-pointer";
    el.dataset.storyId = story.id;

    el.innerHTML = `
      <div class="w-[55px] h-[55px] md:w-[80px] md:h-[80px]
                  rounded-full overflow-hidden story-circle
                  ${isViewed ? "story-viewed" : ""}">
        <img src="${story.thumb}" class="w-full h-full object-cover">
      </div>
      <p class="mt-1 text-[12px] md:text-[16px] text-center font-medium">
        ${story.title}
      </p>
    `;

    container.appendChild(el);
  });
}

/* =========================
   CLICK STORY
========================= */
document.addEventListener("click", e => {
  const storyEl = e.target.closest(".story-item");
  if (!storyEl) return;

  const id = Number(storyEl.dataset.storyId);
  const index = stories.findIndex(s => s.id === id);
  if (index !== -1) openStory(index);
});

/* =========================
   OPEN STORY
========================= */
function openStory(index) {
  const story = stories[index];
  if (!story) return;

  currentStoryIndex = index;

  viewer.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  video.src = story.src;
  video.currentTime = 0;
  video.play().catch(() => {});

  startProgress(story.duration);
}

/* =========================
   PROGRESS BAR
========================= */
function startProgress(duration) {
  clearInterval(timer);
  progressFill.style.width = "0%";

  const start = Date.now();
  timer = setInterval(() => {
    const p = (Date.now() - start) / duration * 100;
    progressFill.style.width = Math.min(p, 100) + "%";

    if (p >= 100) nextStory();
  }, 40);
}

/* =========================
   NEXT STORY
========================= */
function nextStory() {
  const story = stories[currentStoryIndex];
  markStoryViewed(story.id);

  if (currentStoryIndex < stories.length - 1) {
    openStory(currentStoryIndex + 1);
  } else {
    closeStory();
  }
}

/* =========================
   CLOSE STORY
========================= */
function closeStory() {
  clearInterval(timer);

  if (currentStoryIndex !== null) {
    markStoryViewed(stories[currentStoryIndex].id);
    currentStoryIndex = null;
  }

  video.pause();
  video.src = "";
  viewer.classList.add("hidden");
  document.body.style.overflow = "";

  renderStories();
}

closeBtn.addEventListener("click", closeStory);
video.addEventListener("ended", nextStory);
</script>
