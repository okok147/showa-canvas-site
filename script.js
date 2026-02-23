const artistData = {
  kamekura: {
    era: "1957-1964 / Tokyo Olympic build-up",
    name: "Yusaku Kamekura",
    work: "Tokyo 1964 posters and the disciplined emblem tradition",
    text: "Kamekura treated negative space as structural force. In this site, his influence appears in strict alignment, clear emblem geometry, and deliberate breathing room around key copy.",
    signals: [
      "Hero composition uses radial symbolism and strict axis anchoring.",
      "Navigation keeps high contrast, reduced ornament, and clear reading order.",
      "Primary actions are framed as poster-like labels, not generic web buttons.",
    ],
    link: "https://www.moma.org/collection/works/8780",
  },
  tanaka: {
    era: "1960-1975 / Postwar modern-tradition fusion",
    name: "Ikko Tanaka",
    work: "Geometric reinterpretation of traditional Japanese forms",
    text: "Tanaka merged classical Japanese visual balance with modernist geometry. This translates here into measured spacing, high-contrast blocks, and strict modular rhythm in content cards.",
    signals: [
      "Content groups follow consistent modular intervals.",
      "Typography shifts between formal display and utilitarian sans.",
      "Color is restrained but strategic for hierarchy shifts.",
    ],
    link: "https://www.moma.org/collection/works/82808",
  },
  yokoo: {
    era: "1965 onward / Persona-era graphic rebellion",
    name: "Tadanori Yokoo",
    work: "Collage-heavy poster language and symbolic overload",
    text: "Yokoo showed how contradiction can still feel coherent. In this build, collage density appears in controlled bursts through the Poster Lab and kinetic shape overlays.",
    signals: [
      "Generative compositions embrace density while preserving legibility.",
      "Contrasting color collisions are intentionally staged.",
      "Timeline modules amplify narrative jumps between eras.",
    ],
    link: "https://www.moma.org/collection/works/7953",
  },
  awazu: {
    era: "Late 1960s-1970s / Pop-metabolism energy",
    name: "Kiyoshi Awazu",
    work: "Cross-disciplinary posters tied to architecture and theater",
    text: "Awazu expanded graphic design into wider cultural systems. Here, that spirit becomes layered modules, mixed visual logic, and expressive yet reusable component patterns.",
    signals: [
      "Poster Lab includes structured and expressive layout modes.",
      "Decorative motifs remain parameterized and system-driven.",
      "Section transitions feel like changing exhibition rooms.",
    ],
    link: "https://www.mplus.org.hk/en/collection/objects/poster-the-work-of-kisho-kurokawa-capsule-metabolism-spaceframe-metamorphose-2016727/",
  },
  ishioka: {
    era: "1970s / Editorial confrontation",
    name: "Eiko Ishioka",
    work: "Parco-era campaigns and provocative visual messaging",
    text: "Ishioka proved commercial design could challenge social expectations. This site channels that through assertive copy tone, high-friction accents, and unapologetically bold hierarchy.",
    signals: [
      "Copywriting and titles are direct, performative, and intentional.",
      "Callouts use stronger contrast and editorial framing.",
      "Motion is used as stance, not decorative filler.",
    ],
    link: "https://www.cooperhewitt.org/2014/03/17/the-theater-very-parco/",
  },
};

const palettes = {
  kamekura: {
    label: "Kamekura Discipline",
    background: "linear-gradient(145deg, #f4e7cc 0%, #edd7ad 40%, #e3c693 100%)",
    accents: ["#c53e1d", "#f2c063", "#1f3c6a", "#f8ecd2"],
    line: "#1f1b16",
    caption: "Emblem, void, discipline",
  },
  tanaka: {
    label: "Tanaka Geometry",
    background: "linear-gradient(150deg, #f0e6cf 0%, #decc9d 45%, #d5b67d 100%)",
    accents: ["#1e355f", "#cf4b2a", "#e4b055", "#f7ebd0"],
    line: "#231f17",
    caption: "Tradition reconstructed",
  },
  yokoo: {
    label: "Yokoo Collage Heat",
    background: "linear-gradient(145deg, #f1d29f 0%, #d46f4f 45%, #234a7b 100%)",
    accents: ["#d63f20", "#19427a", "#f4cc75", "#f8e9c8"],
    line: "#1a1410",
    caption: "Collision with intent",
  },
  awazu: {
    label: "Awazu Pop Metabolism",
    background: "linear-gradient(152deg, #f0d9aa 0%, #d88f53 38%, #b44935 100%)",
    accents: ["#f2c36f", "#bd442d", "#224d86", "#f8e4bf"],
    line: "#251d16",
    caption: "Architecture in motion",
  },
  ishioka: {
    label: "Ishioka Editorial Shock",
    background: "linear-gradient(148deg, #f2e2c1 0%, #d16b45 46%, #83251a 100%)",
    accents: ["#cc311a", "#f0bf67", "#233f70", "#f8e5c6"],
    line: "#1e1611",
    caption: "Campaign as confrontation",
  },
};

const timelineEvents = [
  {
    year: 1960,
    title: "Tanaka's Anti-Violence Poster Era",
    text: "The period where clean geometry and social message fused, setting a high bar for Japanese graphic modernism.",
  },
  {
    year: 1961,
    title: "Olympic Identity Work Intensifies",
    text: "Kamekura's visual discipline around Tokyo 1964 began shaping global perception of Japanese graphic precision.",
  },
  {
    year: 1964,
    title: "Tokyo Olympics Visual Breakthrough",
    text: "A watershed moment in emblematic composition, photography integration, and transnational design communication.",
  },
  {
    year: 1965,
    title: "Persona and Graphic Counterculture",
    text: "Yokoo and peers brought poster culture into a new expressive density with irony, symbolism, and visual shock.",
  },
  {
    year: 1968,
    title: "Ginza Creative Networks Expand",
    text: "Illustrators, art directors, and publishers cross-pollinated styles, accelerating hybrid visual language.",
  },
  {
    year: 1970,
    title: "Osaka Expo and Future Optics",
    text: "Technology optimism met bold public-facing graphics, amplifying large-scale information and atmosphere design.",
  },
  {
    year: 1972,
    title: "Parco Campaign Culture Sharpens",
    text: "Ishioka's direction brought direct, provocative, editorial force to commercial visual systems.",
  },
  {
    year: 1973,
    title: "Awazu's Theater and Metabolism Crossovers",
    text: "Graphic work bridged architecture, performance, and pop expression in complex but coherent compositions.",
  },
  {
    year: 1978,
    title: "Legacy Becomes Design Vocabulary",
    text: "The decade's experiments matured into enduring principles still powerful for contemporary interfaces.",
  },
];

const revealElements = Array.from(document.querySelectorAll(".reveal"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));

const artistButtons = Array.from(document.querySelectorAll(".artist-trigger"));
const artistEra = document.getElementById("artistEra");
const artistName = document.getElementById("artistName");
const artistWork = document.getElementById("artistWork");
const artistText = document.getElementById("artistText");
const artistSignals = document.getElementById("artistSignals");
const artistLink = document.getElementById("artistLink");

const paletteSelect = document.getElementById("paletteSelect");
const densityRange = document.getElementById("densityRange");
const densityValue = document.getElementById("densityValue");
const gridMode = document.getElementById("gridMode");
const motionToggle = document.getElementById("motionToggle");
const regenerateBtn = document.getElementById("regenerateBtn");
const posterOutput = document.getElementById("posterOutput");
const outputMeta = document.getElementById("outputMeta");

const timelineRange = document.getElementById("timelineRange");
const timelineYear = document.getElementById("timelineYear");
const timelineTitle = document.getElementById("timelineTitle");
const timelineText = document.getElementById("timelineText");
const timelineRail = document.getElementById("timelineRail");

const heroStage = document.querySelector(".hero-stage");

let posterSeedOffset = 0;

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return hash >>> 0;
}

function makeRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function renderArtist(key) {
  const artist = artistData[key];
  if (!artist) {
    return;
  }

  artistEra.textContent = artist.era;
  artistName.textContent = artist.name;
  artistWork.textContent = artist.work;
  artistText.textContent = artist.text;
  artistSignals.innerHTML = "";

  artist.signals.forEach((signal) => {
    const item = document.createElement("li");
    item.textContent = signal;
    artistSignals.appendChild(item);
  });

  artistLink.href = artist.link;
}

function setArtistSelection(key) {
  artistButtons.forEach((button) => {
    const isActive = button.dataset.artist === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  renderArtist(key);
}

function buildPosterLines(mode, palette, rng) {
  const lines = [];

  if (mode === "strict") {
    for (let i = 0; i < 8; i += 1) {
      lines.push({
        type: "vertical",
        x: 10 + i * 11,
        thickness: i % 2 === 0 ? 2 : 1,
        alpha: 0.35,
      });
    }
    for (let i = 0; i < 6; i += 1) {
      lines.push({
        type: "horizontal",
        y: 12 + i * 14,
        thickness: i % 2 === 0 ? 2 : 1,
        alpha: 0.32,
      });
    }
  }

  if (mode === "hybrid") {
    for (let i = 0; i < 5; i += 1) {
      lines.push({
        type: "vertical",
        x: 9 + i * 18,
        thickness: 2,
        alpha: 0.24,
      });
    }
    for (let i = 0; i < 4; i += 1) {
      lines.push({
        type: "diagonal",
        angle: i % 2 === 0 ? 35 : -35,
        y: 10 + i * 22,
        thickness: 2,
        alpha: 0.2,
      });
    }
  }

  if (mode === "chaos") {
    for (let i = 0; i < 9; i += 1) {
      lines.push({
        type: "diagonal",
        angle: Math.round(rng() * 110 - 55),
        y: Math.round(rng() * 100),
        thickness: rng() > 0.6 ? 2 : 1,
        alpha: 0.18 + rng() * 0.18,
      });
    }
  }

  lines.forEach((line) => {
    const lineEl = document.createElement("div");
    lineEl.className = "poster-line";
    lineEl.style.background = `${palette.line}${Math.round(line.alpha * 255)
      .toString(16)
      .padStart(2, "0")}`;

    if (line.type === "vertical") {
      lineEl.style.left = `${line.x}%`;
      lineEl.style.top = "0";
      lineEl.style.width = `${line.thickness}px`;
      lineEl.style.height = "100%";
    }

    if (line.type === "horizontal") {
      lineEl.style.left = "0";
      lineEl.style.top = `${line.y}%`;
      lineEl.style.height = `${line.thickness}px`;
      lineEl.style.width = "100%";
    }

    if (line.type === "diagonal") {
      lineEl.style.left = "-10%";
      lineEl.style.top = `${line.y}%`;
      lineEl.style.width = "120%";
      lineEl.style.height = `${line.thickness}px`;
      lineEl.style.transform = `rotate(${line.angle}deg)`;
      lineEl.style.transformOrigin = "left center";
    }

    posterOutput.appendChild(lineEl);
  });
}

function generatePoster() {
  const paletteKey = paletteSelect.value;
  const palette = palettes[paletteKey];
  const density = Number.parseInt(densityRange.value, 10);
  const mode = gridMode.value;
  const motionEnabled = motionToggle.checked;

  const seedInput = `${paletteKey}-${density}-${mode}-${posterSeedOffset}`;
  const rng = makeRng(hashString(seedInput));

  densityValue.textContent = `${density} layers`;
  outputMeta.textContent = `${palette.label} / ${density} layers / ${mode === "strict" ? "Strict Grid" : mode === "hybrid" ? "Hybrid Grid" : "Expressive Chaos"}`;

  posterOutput.innerHTML = "";
  posterOutput.style.background = palette.background;

  buildPosterLines(mode, palette, rng);

  const shapeTypes = ["circle", "ring", "bar", "diamond"];

  for (let i = 0; i < density; i += 1) {
    const shape = document.createElement("div");
    const type = shapeTypes[Math.floor(rng() * shapeTypes.length)];
    const color = palette.accents[Math.floor(rng() * palette.accents.length)];

    const width = 40 + Math.floor(rng() * 180);
    const height = type === "bar" ? 14 + Math.floor(rng() * 40) : 40 + Math.floor(rng() * 180);
    const left = Math.floor(rng() * 86);
    const top = Math.floor(rng() * 86);
    const rotate = Math.floor(rng() * 360);

    shape.className = `poster-shape shape-${type}`;
    shape.style.width = `${width}px`;
    shape.style.height = `${height}px`;
    shape.style.left = `${left}%`;
    shape.style.top = `${top}%`;
    shape.style.background = type === "ring" ? "transparent" : color;
    shape.style.borderColor = palette.line;
    shape.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;
    shape.style.setProperty("--r0", `${rotate}deg`);
    shape.style.setProperty("--r1", `${rotate + Math.floor(rng() * 20 - 10)}deg`);
    shape.style.setProperty("--dx", `${Math.floor(rng() * 28 - 14)}px`);
    shape.style.setProperty("--dy", `${Math.floor(rng() * 28 - 14)}px`);
    shape.style.setProperty("--drift", `${7 + Math.floor(rng() * 8)}s`);

    if (motionEnabled) {
      shape.classList.add("is-animated");
    }

    posterOutput.appendChild(shape);
  }

  const caption = document.createElement("p");
  caption.className = "poster-caption";
  caption.textContent = `${palette.caption} / Generated composition tuned for interface storytelling.`;

  const year = document.createElement("p");
  year.className = "poster-year";
  year.textContent = `${1960 + Math.floor(rng() * 19)} SHOWA`;

  posterOutput.appendChild(caption);
  posterOutput.appendChild(year);
}

function buildTimelineRail() {
  timelineRail.innerHTML = "";

  timelineEvents.forEach((event, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "timeline-chip";
    chip.textContent = String(event.year);
    chip.setAttribute("aria-label", `Jump to ${event.year}`);
    chip.addEventListener("click", () => {
      timelineRange.value = String(index);
      renderTimeline(index);
    });
    timelineRail.appendChild(chip);
  });
}

function renderTimeline(index) {
  const safeIndex = Math.max(0, Math.min(index, timelineEvents.length - 1));
  const event = timelineEvents[safeIndex];

  timelineYear.textContent = String(event.year);
  timelineTitle.textContent = event.title;
  timelineText.textContent = event.text;

  const chips = Array.from(timelineRail.querySelectorAll(".timeline-chip"));
  chips.forEach((chip, chipIndex) => {
    chip.classList.toggle("is-active", chipIndex === safeIndex);
  });
}

function setupReveals() {
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -30px 0px" },
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
    revealObserver.observe(element);
  });
}

function setupSectionTracking() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          const isActive = href === `#${entry.target.id}`;
          link.classList.toggle("is-active", isActive);
        });
      });
    },
    { threshold: 0.45 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function setupHeroParallax() {
  if (!heroStage || !window.matchMedia("(pointer:fine)").matches) {
    return;
  }

  heroStage.addEventListener("mousemove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroStage.style.transform = `perspective(800px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
  });

  heroStage.addEventListener("mouseleave", () => {
    heroStage.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  });
}

artistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setArtistSelection(button.dataset.artist);
  });
});

[paletteSelect, densityRange, gridMode, motionToggle].forEach((control) => {
  control.addEventListener("input", generatePoster);
  control.addEventListener("change", generatePoster);
});

regenerateBtn.addEventListener("click", () => {
  posterSeedOffset += 1;
  generatePoster();
});

timelineRange.max = String(timelineEvents.length - 1);
timelineRange.addEventListener("input", () => {
  renderTimeline(Number.parseInt(timelineRange.value, 10));
});

setupReveals();
setupSectionTracking();
setupHeroParallax();

setArtistSelection("kamekura");
buildTimelineRail();
renderTimeline(0);
generatePoster();
