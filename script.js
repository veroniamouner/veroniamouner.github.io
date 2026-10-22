/* ===== Veronia Mouner — Portfolio ===== */

/* ---------- Content (edit here to add or change work) ---------- */
const WORK = [
  ...Array.from({ length: 21 }, (_, i) => ({
    src: `assets/work/social-${String(i + 1).padStart(2, "0")}.jpg`,
    cat: "social",
  })),
  ...Array.from({ length: 6 }, (_, i) => ({
    src: `assets/work/ads-${i + 1}.jpg`,
    cat: "ads",
  })),
];

const CASES = [
  {
    name: "Chef Master",
    cat: { en: "Restaurant identity", ar: "هوية مطعم" },
    text: {
      en: "A friendly chef mascot logo for a restaurant brand, applied to signage, take-away bags, uniforms and the dining space.",
      ar: "شعار بشخصية شيف ودودة لعلامة مطعم، مطبّق على اللافتات وأكياس التيك أواي والزي الموحد ومساحة المطعم.",
    },
    colors: ["#c8102e", "#1a1a1a", "#ffffff", "#f2e6d0"],
    images: [
      ["chef-2", "w4 h3 wide"], ["chef-1", "w2 h3"],
      ["chef-3", "w2 h3"], ["chef-4", "w2 h3"], ["chef-5", "w2 h3"],
    ],
  },
  {
    name: "Coffee Time",
    cat: { en: "Café identity", ar: "هوية كافيه" },
    text: {
      en: "A hand-drawn cup mark with warm orange tones for a café — tested on cups, signage, carriers and merch.",
      ar: "شعار فنجان مرسوم بدرجات برتقالية دافئة لكافيه — مطبّق على الأكواب واللافتات والحوامل والمنتجات.",
    },
    colors: ["#e8952b", "#3b2a20", "#f4ece2"],
    images: [
      ["coffee-1", "w2 h3"], ["coffee-2", "w2 h3"], ["coffee-3", "w2 h3"],
      ["coffee-4", "w3 h2"], ["coffee-5", "w3 h2"], ["coffee-6", "w3 h2"], ["coffee-7", "w3 h2 wide"],
    ],
  },
  {
    name: "Oura",
    cat: { en: "Skincare brand · Packaging", ar: "علامة عناية بالبشرة · تغليف" },
    text: {
      en: "“Purely Botanical” — a calm, natural identity for a skincare line, with packaging, bags and product visuals.",
      ar: "\"Purely Botanical\" — هوية هادئة وطبيعية لخط عناية بالبشرة، مع التغليف والشنط وصور المنتجات.",
    },
    colors: ["#9fb39a", "#e9ece4", "#5c6b58", "#ffffff"],
    images: [
      ["oura-1", "w3 h3"], ["oura-2", "w3 h3"], ["oura-3", "w3 h3"], ["oura-4", "w3 h3"],
      ["oura-5", "w2 h3"], ["oura-6", "w2 h3"], ["oura-7", "w2 h3 wide"], ["oura-8", "w6 h2 wide"],
    ],
  },
];

/* To show a screenshot instead of the live preview, save it as assets/web/<slug>.jpg */
const SITES = [
  {
    slug: "egystone",
    name: "Egy Stone",
    url: "https://egystone.com",
    brand: "#3f8f4a",
    cat: { en: "Corporate website · Redesign", ar: "موقع شركة · إعادة تصميم" },
    text: {
      en: "The website of a Corian and Compact HPL supplier. I manage and customize it on WordPress & Elementor.",
      ar: "موقع شركة توريد كوريان وكومباكت. بديره وبطوّره على ووردبريس وإليمنتور.",
    },
    points: {
      en: ["Improved visual structure, content presentation and usability", "New sections, image areas and content blocks", "Stock availability and color-swatch pages"],
      ar: ["تحسين البنية البصرية وعرض المحتوى وسهولة الاستخدام", "أقسام جديدة ومساحات صور وبلوكات محتوى", "صفحات المخزون المتاح وعينات الألوان"],
    },
    stack: ["WordPress", "Elementor", "CSS"],
  },
  {
    slug: "catalog-now",
    name: "Catalog Now",
    url: "https://catalog-now.com",
    brand: "#588157",
    cat: { en: "New brand · Full website", ar: "علامة جديدة · موقع كامل" },
    text: {
      en: "A live stock catalogue for a newly launched brand — designed from the first concept to the final layout.",
      ar: "كتالوج مخزون مباشر لعلامة جديدة — صممته من أول فكرة لحد الشكل النهائي.",
    },
    points: {
      en: ["Bilingual site — English & Arabic", "Custom store page with category tabs: Corian, Compact, sinks, accessories, lockers, tables", "Custom header and components in HTML, CSS & JS"],
      ar: ["موقع بلغتين — إنجليزي وعربي", "صفحة متجر مخصصة بتابات للأقسام: كوريان، كومباكت، أحواض، إكسسوارات، لوكرز، ترابيزات", "هيدر ومكونات مخصصة بـ HTML وCSS وJS"],
    },
    stack: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "onyxdecore",
    name: "Onyx Decore",
    url: "https://onyxdecore.com",
    brand: "#2b4a8b",
    cat: { en: "Brand website", ar: "موقع علامة تجارية" },
    text: {
      en: "A clean, premium website for an architectural surfaces brand working with Corian and Compact HPL.",
      ar: "موقع راقي وبسيط لعلامة أسطح معمارية متخصصة في الكوريان والكومباكت.",
    },
    points: {
      en: ["Minimal white layout with navy accents", "Custom HTML/CSS sections inside Elementor", "Responsive on mobile and desktop"],
      ar: ["تصميم أبيض بسيط بلمسات كحلي", "أقسام مخصصة بـ HTML/CSS جوه إليمنتور", "متجاوب مع الموبايل والكمبيوتر"],
    },
    stack: ["WordPress", "Elementor", "HTML", "CSS"],
  },
];

/* ---------- Translations ---------- */
const AR = {
  "nav.work": "أعمالي", "nav.web": "المواقع", "nav.about": "عني", "nav.contact": "تواصل",
  "hero.status": "متاحة للعمل الحر والدوام الكامل",
  "hero.hi": "أهلًا، أنا",
  "hero.name": "فيرونيا منير",
  "hero.role": "مصممة جرافيك · سوشيال ميديا · تصميم مواقع",
  "hero.lead": "بصمم تصميمات بتشتغل فعلًا — من بوستات السوشيال ميديا والهويات البصرية، للمطبوعات ومواقع الووردبريس.",
  "hero.cta1": "شوف أعمالي", "hero.cta2": "تحميل السي في",
  "stats.years": "سنين خبرة", "stats.designs": "تصميم في البورتفوليو", "stats.brands": "هويات بصرية", "stats.sites": "مواقع صممتها وبديرها",
  "work.title": "أعمال مختارة", "work.sub": "حملات سوشيال ميديا وإعلانات خارجية. اضغط على أي صورة عشان تشوفها بحجم كامل.",
  "f.all": "الكل", "f.social": "سوشيال ميديا", "f.ads": "إعلانات خارجية",
  "cases.title": "هويات بصرية", "cases.sub": "تصميم الشعار وإزاي العلامة بتعيش على التغليف والمنتجات والأماكن.",
  "web.title": "المواقع", "web.sub": "مواقع ووردبريس وإليمنتور صممتها أو بنيتها أو طوّرتها — مع HTML وCSS وJavaScript لما البيلدر ما يكفيش.",
  "about.title": "عني وخبراتي",
  "about.p1": "مصممة جرافيك بخبرة سنتين في التصميم الرقمي، الهوية البصرية، السوشيال ميديا، المطبوعات وتصميم المواقع.",
  "about.p2": "حاليًا بدير الهوية البصرية لعلامتين في مجالين مختلفين — من محتوى السوشيال اليومي للمواد التسويقية والمواقع. وقبلها اشتغلت في مطبعة، واتعلمت هناك الألوان والتنسيق وتجهيز الملفات للطباعة عمليًا.",
  "about.tools": "الأدوات والمهارات",
  "sk.1": "هوية بصرية", "sk.2": "تصميم سوشيال ميديا", "sk.3": "طباعة وتجهيز ملفات", "sk.4": "تصميم مواقع متجاوبة", "sk.5": "مواد تسويقية",
  "exp.1.when": "2025 — حتى الآن",
  "exp.1.title": "مصممة جرافيك · Egy Stone & Porta",
  "exp.1.a": "مسؤولة عن التواصل البصري لعلامتين في مجالين مختلفين.",
  "exp.1.b": "تصميم محتوى السوشيال ميديا لفيسبوك وإنستجرام وغيرهم.",
  "exp.1.c": "تصميم المواد التسويقية وعروض المنتجات ومواد الشركة.",
  "exp.1.d": "إدارة وتطوير مواقع الشركة على ووردبريس وإليمنتور، وقيادة تصميم موقع لعلامة جديدة.",
  "exp.2.when": "2024 — 2025",
  "exp.2.title": "مصممة جرافيك ومتخصصة ما قبل الطباعة · Kastour Print",
  "exp.2.a": "تصميم مطبوعات تجارية وللشركات: كروت شخصية، نوت بوك، كتب وبانرات.",
  "exp.2.b": "تصميم لوجوهات وهويات بصرية لشركات صغيرة ومتوسطة.",
  "exp.2.c": "تجهيز الملفات للطباعة مع خبرة عملية في الألوان ومتطلبات الإنتاج.",
  "edu.title": "بكالوريوس اقتصاد وتجارة دولية · ECU",
  "edu.a": "الجامعة المصرية الصينية — تخصص تسويق.",
  "contact.title": "يلا نشتغل سوا", "contact.sub": "عندك براند أو حملة أو موقع في دماغك؟ ابعتلي رسالة.",
  "contact.cv": "السي في (PDF) ↓",
  "footer.loc": "القاهرة، مصر", "footer.top": "لأعلى ↑",
  "tag.social": "سوشيال ميديا", "tag.ads": "إعلان خارجي · Porta",
  "visit": "زيارة الموقع ↗",
};
const EN_TAGS = { "tag.social": "Social Media", "tag.ads": "Outdoor ad · Porta", "visit": "Visit live site ↗" };

let lang = "en";
const saved = (() => { try { return localStorage.getItem("lang"); } catch { return null; } })();
const EN = {}; // filled from the HTML on first load
const t = (key) => (lang === "ar" ? AR[key] : undefined) ?? EN[key] ?? EN_TAGS[key] ?? key;

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").textContent = lang === "ar" ? "English" : "عربي";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (!(k in EN)) EN[k] = el.textContent;
    el.textContent = lang === "ar" ? (AR[k] ?? EN[k]) : EN[k];
  });
  renderCases();
  renderSites();
  document.querySelectorAll(".item .tag").forEach((el) => (el.textContent = t(el.dataset.k)));
  observeReveals();
}

/* ---------- Work grid ---------- */
const grid = document.getElementById("grid");
let lbList = []; let lbIndex = 0;

function renderGrid() {
  grid.innerHTML = WORK.map((w, i) => `
    <figure class="item" data-cat="${w.cat}" data-i="${i}">
      <img src="${w.src}" alt="${w.cat === "ads" ? "Outdoor advertising design" : "Social media design"}" loading="lazy" width="900" height="880">
      <span class="tag" data-k="tag.${w.cat}">${t("tag." + w.cat)}</span>
    </figure>`).join("");
  grid.querySelectorAll(".item").forEach((el) => el.addEventListener("click", () => {
    const visible = [...grid.querySelectorAll(".item:not(.hide)")];
    openLightbox(visible.map((v) => ({ src: v.querySelector("img").src, cap: v.querySelector(".tag").textContent })), visible.indexOf(el));
  }));
}

document.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  const f = chip.dataset.filter;
  grid.querySelectorAll(".item").forEach((it) => it.classList.toggle("hide", f !== "all" && it.dataset.cat !== f));
}));

/* ---------- Brand cases ---------- */
function renderCases() {
  const box = document.getElementById("cases");
  box.innerHTML = CASES.map((c, ci) => `
    <article class="case reveal">
      <div class="case-info">
        <h3>${c.name}</h3>
        <p class="cat">${c.cat[lang]}</p>
        <p>${c.text[lang]}</p>
        <div class="swatches">${c.colors.map((col) => `<i style="background:${col}" title="${col}"></i>`).join("")}</div>
      </div>
      <div class="case-gallery">
        ${c.images.map(([img, cls], ii) => `<div class="g ${cls}" data-c="${ci}" data-i="${ii}"><img src="assets/work/${img}.jpg" alt="${c.name} — brand application" loading="lazy"></div>`).join("")}
      </div>
    </article>`).join("");
  box.querySelectorAll(".g").forEach((g) => g.addEventListener("click", () => {
    const c = CASES[g.dataset.c];
    openLightbox(c.images.map(([img]) => ({ src: `assets/work/${img}.jpg`, cap: c.name })), +g.dataset.i);
  }));
}

/* ---------- Websites ---------- */
function renderSites() {
  const box = document.getElementById("webList");
  box.innerHTML = SITES.map((s) => `
    <article class="web-card reveal" style="--brand:${s.brand}">
      <div class="browser">
        <div class="browser-bar"><i></i><i></i><i></i><span class="url">${s.url.replace("https://", "")}</span></div>
        <a class="screen" href="${s.url}" target="_blank" rel="noopener" data-slug="${s.slug}" data-url="${s.url}" aria-label="${s.name}">
          <div class="ph">${s.name}</div>
        </a>
      </div>
      <div class="web-info">
        <span class="cat">${s.cat[lang]}</span>
        <h3>${s.name}</h3>
        <p>${s.text[lang]}</p>
        <ul>${s.points[lang].map((p) => `<li>${p}</li>`).join("")}</ul>
        <div class="stack">${s.stack.map((x) => `<span>${x}</span>`).join("")}</div>
        <a class="visit" href="${s.url}" target="_blank" rel="noopener">${t("visit")}</a>
      </div>
    </article>`).join("");
  box.querySelectorAll(".screen").forEach(loadScreen);
}

/* Screenshot if present, otherwise a live (scaled) preview of the site */
function loadScreen(screen) {
  const img = new Image();
  img.alt = screen.getAttribute("aria-label") + " website";
  img.onload = () => { screen.querySelector(".ph")?.remove(); screen.prepend(img); };
  img.onerror = () => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const f = document.createElement("iframe");
      f.src = screen.dataset.url; f.loading = "lazy"; f.tabIndex = -1;
      f.title = screen.getAttribute("aria-label") + " preview";
      f.setAttribute("aria-hidden", "true");
      screen.appendChild(f);
      scaleFrame(screen);
    }, { rootMargin: "300px" });
    io.observe(screen);
  };
  img.src = `assets/web/${screen.dataset.slug}.jpg`;
}
function scaleFrame(screen) {
  const f = screen.querySelector("iframe");
  if (f) f.style.transform = `scale(${screen.clientWidth / 1440})`;
}
window.addEventListener("resize", () => document.querySelectorAll(".screen").forEach(scaleFrame));

/* ---------- Lightbox ---------- */
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
function openLightbox(list, i) { lbList = list; lbIndex = i; showLb(); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
function showLb() { const x = lbList[lbIndex]; lbImg.src = x.src; lbCap.textContent = `${x.cap} · ${lbIndex + 1} / ${lbList.length}`; }
function closeLb() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
function step(d) { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); }
document.getElementById("lbClose").onclick = closeLb;
document.getElementById("lbPrev").onclick = (e) => { e.stopPropagation(); step(-1); };
document.getElementById("lbNext").onclick = (e) => { e.stopPropagation(); step(1); };
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});
let touchX = 0;
lb.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); });

/* ---------- Reveal on scroll ---------- */
const revealIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
}), { threshold: 0.12 });
function observeReveals() { document.querySelectorAll(".reveal:not(.in), .item:not(.in)").forEach((el) => revealIO.observe(el)); }

/* ---------- Nav ---------- */
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
document.getElementById("burger").onclick = () => nav.classList.toggle("open");
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("langBtn").onclick = () => {
  lang = lang === "en" ? "ar" : "en";
  try { localStorage.setItem("lang", lang); } catch {}
  applyLang();
};
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Init ---------- */
renderGrid();
if (saved === "ar") lang = "ar";
applyLang();
