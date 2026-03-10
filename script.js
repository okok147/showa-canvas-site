const artistData = {
  kamekura: {
    era: "1957-1964 / Olympic-era precision",
    name: "Yusaku Kamekura",
    work: "Tokyo 1964 visual identity discipline",
    text: "Kamekura's controlled symbolism guides the structural layer of this UI. Even with playful visuals, alignment, spacing, and focal hierarchy remain strict.",
    signals: [
      "Anchor forms around a strong central composition.",
      "Use negative space as active rhythm, not empty filler.",
      "Keep labels direct, concise, and legible under high color load.",
    ],
    link: "https://www.moma.org/collection/works/8780",
  },
  tanaka: {
    era: "1960-1975 / modern-traditional fusion",
    name: "Ikko Tanaka",
    work: "Geometric reinterpretation of Japanese cultural forms",
    text: "Tanaka's influence appears in the modular UI rhythm and controlled contrast. Decorative forms are expressive, but they still obey a coherent visual cadence.",
    signals: [
      "Modular blocks with repeatable spacing ratios.",
      "Strong color transitions without sacrificing readability.",
      "Typography pairing that separates expression from utility.",
    ],
    link: "https://www.moma.org/collection/works/82808",
  },
  yokoo: {
    era: "1965 onward / Persona-era visual shock",
    name: "Tadanori Yokoo",
    work: "Collage intensity and symbolic overload",
    text: "The Behance-inspired illustration language pairs naturally with Yokoo's high-density storytelling. The poster output intentionally allows richer collision while maintaining clear focus points.",
    signals: [
      "Layered motifs for depth and visual surprise.",
      "Color collisions treated as narrative devices.",
      "Intentional contrast between order and expressive chaos.",
    ],
    link: "https://www.moma.org/collection/works/7953",
  },
  awazu: {
    era: "Late 60s-70s / cross-disciplinary pop graphics",
    name: "Kiyoshi Awazu",
    work: "Posters connected to architecture, theater, and urban culture",
    text: "Awazu's cross-medium energy informs this refactor's UI texture strategy: symbols, color planes, and hand-drawn accents become interactive components rather than static decoration.",
    signals: [
      "Layered components with distinct visual personalities.",
      "Patchwork panel logic for section transitions.",
      "Expressive marks integrated into functional UI surfaces.",
    ],
    link: "https://www.mplus.org.hk/en/collection/objects/poster-the-work-of-kisho-kurokawa-capsule-metabolism-spaceframe-metamorphose-2016727/",
  },
  ishioka: {
    era: "1970s / editorial confrontation",
    name: "Eiko Ishioka",
    work: "Campaign-led visual assertiveness",
    text: "Ishioka's attitude drives the new UX voice: bold headings, unapologetic color, and editorial framing that feels intentional and high-impact.",
    signals: [
      "High-contrast emphasis on critical interactions.",
      "Confident, minimal-copy directional language.",
      "Background treated as brand narrative, not ornament.",
    ],
    link: "https://www.cooperhewitt.org/2014/03/17/the-theater-very-parco/",
  },
};

const palettes = {
  kamekura: {
    label: "Candy Patchwork",
    background: "linear-gradient(145deg, #ffe7bf 0%, #ffd57e 42%, #ff9e4f 100%)",
    accents: ["#ff6236", "#ff66d4", "#60d6cf", "#6ab9ff", "#d4ff2f"],
    line: "#2d1c14",
    caption: "Playful hierarchy with strong focal anchors",
  },
  tanaka: {
    label: "Turquoise Garden",
    background: "linear-gradient(145deg, #e7f9f6 0%, #94e6e0 42%, #5fcfc8 100%)",
    accents: ["#2d1c14", "#ff6a3c", "#ffd35f", "#6ab9ff", "#ff66d4"],
    line: "#2b1a13",
    caption: "Patterned rhythm and geometric restraint",
  },
  yokoo: {
    label: "Hot Pink Voltage",
    background: "linear-gradient(145deg, #ffd5f3 0%, #ff84df 42%, #ff5fbe 100%)",
    accents: ["#ff5f3c", "#6ab9ff", "#d4ff2f", "#ffd35f", "#2d1c14"],
    line: "#331d16",
    caption: "Collision, symbolism, and visual theater",
  },
  awazu: {
    label: "Cocoa Folk Night",
    background: "linear-gradient(145deg, #f4dec4 0%, #c07a50 44%, #7f482d 100%)",
    accents: ["#ff7a4a", "#ffd35f", "#60d6cf", "#6ab9ff", "#ff78d8"],
    line: "#25150f",
    caption: "Warm texture with layered cultural motifs",
  },
  ishioka: {
    label: "Blue Myth Frame",
    background: "linear-gradient(145deg, #d7edff 0%, #80c7ff 45%, #4f8cd9 100%)",
    accents: ["#ff6538", "#ff66d4", "#d4ff2f", "#ffd35f", "#60d6cf"],
    line: "#1f1611",
    caption: "Editorial force with theatrical contrast",
  },
};

const timelineEvents = [
  {
    year: 1960,
    title: "Structured Modernism Gains Momentum",
    text: "Clear geometry and social messaging establish the structural backbone now mirrored in this interface architecture.",
  },
  {
    year: 1961,
    title: "Identity Systems Become Cultural Events",
    text: "Design shifted from static poster work to full public communication systems with strict visual consistency.",
  },
  {
    year: 1964,
    title: "Global Stage, Bold Visual Precision",
    text: "Tokyo's design language reached worldwide audiences and proved high-impact graphics can remain disciplined.",
  },
  {
    year: 1965,
    title: "Collage Counterculture Explodes",
    text: "Visual narratives grew denser, weirder, and more symbolic, opening space for expressive UI inspiration.",
  },
  {
    year: 1968,
    title: "Interdisciplinary Creative Networks",
    text: "Illustrators, art directors, and publishers cross-influenced one another, blending formal and playful vocabularies.",
  },
  {
    year: 1970,
    title: "Expo-Era Spectacle and Systems",
    text: "Large-scale events demanded environments that were immersive, legible, and emotionally charged at once.",
  },
  {
    year: 1972,
    title: "Campaign Visuals Get Bolder",
    text: "Commercial design adopted stronger voice and attitude, shaping the assertive UX tone used in this refactor.",
  },
  {
    year: 1973,
    title: "Theater, Architecture, Poster Fusion",
    text: "Cross-medium influence deepened, encouraging layered compositions and mixed visual grammar.",
  },
  {
    year: 1978,
    title: "Legacy Becomes Contemporary Toolkit",
    text: "The era's methods evolved into durable design principles still effective for modern interaction systems.",
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
const threeMode = document.getElementById("threeMode");
const motionToggle = document.getElementById("motionToggle");
const regenerateBtn = document.getElementById("regenerateBtn");
const threeResetBtn = document.getElementById("threeResetBtn");
const posterOutput = document.getElementById("posterOutput");
const outputMeta = document.getElementById("outputMeta");

const timelineRange = document.getElementById("timelineRange");
const timelineYear = document.getElementById("timelineYear");
const timelineTitle = document.getElementById("timelineTitle");
const timelineText = document.getElementById("timelineText");
const timelineRail = document.getElementById("timelineRail");

const heroStage = document.querySelector(".hero-stage");
const heroThreeCanvas = document.getElementById("heroThreeCanvas");

let posterSeedOffset = 0;
let threeSceneController = null;

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
    for (let i = 0; i < 7; i += 1) {
      lines.push({
        type: "vertical",
        x: 8 + i * 13,
        thickness: i % 2 === 0 ? 3 : 2,
        alpha: 0.32,
      });
    }

    for (let i = 0; i < 5; i += 1) {
      lines.push({
        type: "horizontal",
        y: 14 + i * 16,
        thickness: i % 2 === 0 ? 3 : 2,
        alpha: 0.28,
      });
    }
  }

  if (mode === "hybrid") {
    for (let i = 0; i < 5; i += 1) {
      lines.push({
        type: "vertical",
        x: 10 + i * 18,
        thickness: 2,
        alpha: 0.24,
      });
    }

    for (let i = 0; i < 4; i += 1) {
      lines.push({
        type: "diagonal",
        angle: i % 2 === 0 ? 34 : -34,
        y: 12 + i * 21,
        thickness: 2,
        alpha: 0.24,
      });
    }
  }

  if (mode === "chaos") {
    for (let i = 0; i < 10; i += 1) {
      lines.push({
        type: "diagonal",
        angle: Math.round(rng() * 120 - 60),
        y: Math.round(rng() * 100),
        thickness: rng() > 0.62 ? 3 : 2,
        alpha: 0.18 + rng() * 0.2,
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
      lineEl.style.left = "-8%";
      lineEl.style.top = `${line.y}%`;
      lineEl.style.width = "116%";
      lineEl.style.height = `${line.thickness}px`;
      lineEl.style.transform = `rotate(${line.angle}deg)`;
      lineEl.style.transformOrigin = "left center";
    }

    posterOutput.appendChild(lineEl);
  });
}

function addPosterStamps(rng) {
  const stampA = document.createElement("p");
  stampA.className = "poster-stamp poster-stamp-a";
  stampA.textContent = rng() > 0.5 ? "playful contour" : "grain + doodle";

  const stampB = document.createElement("p");
  stampB.className = "poster-stamp poster-stamp-b";
  stampB.textContent = rng() > 0.5 ? "patchwork mood" : "illustration flow";

  posterOutput.appendChild(stampA);
  posterOutput.appendChild(stampB);
}

function getThreeModeLabel(mode) {
  if (mode === "pulse") {
    return "Pulse Wave";
  }

  if (mode === "nova") {
    return "Nova Storm";
  }

  return "Orbit Bloom";
}

function getThreeSceneConfig() {
  const paletteKey = paletteSelect?.value ?? "kamekura";
  const palette = palettes[paletteKey] ?? palettes.kamekura;

  return {
    palette: palette.accents,
    density: Number.parseInt(densityRange?.value ?? "16", 10),
    gridMode: gridMode?.value ?? "strict",
    motionEnabled: motionToggle?.checked ?? true,
    threeMode: threeMode?.value ?? "orbit",
  };
}

async function setupThreeScene() {
  if (!heroThreeCanvas) {
    return;
  }

  try {
    const { createShowaThreeScene } = await import("./three-scene.js");
    threeSceneController = createShowaThreeScene({
      canvas: heroThreeCanvas,
      getConfig: getThreeSceneConfig,
    });
  } catch (error) {
    console.error("Three.js scene setup failed.", error);
    heroThreeCanvas.remove();
  }
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

  const modeLabel =
    mode === "strict"
      ? "Patchwork Grid"
      : mode === "hybrid"
        ? "Balanced Chaos"
        : "Wild Doodle Burst";
  const threeLabel = getThreeModeLabel(threeMode?.value ?? "orbit");

  outputMeta.textContent = `${palette.label} / ${density} layers / ${modeLabel} / ${threeLabel}`;

  posterOutput.innerHTML = "";
  posterOutput.style.background = palette.background;

  buildPosterLines(mode, palette, rng);

  const shapeTypes = ["circle", "ring", "bar", "diamond", "star", "blob"];

  for (let i = 0; i < density; i += 1) {
    const shape = document.createElement("div");
    const type = shapeTypes[Math.floor(rng() * shapeTypes.length)];
    const color = palette.accents[Math.floor(rng() * palette.accents.length)];

    const width = 34 + Math.floor(rng() * 170);
    const height =
      type === "bar"
        ? 12 + Math.floor(rng() * 38)
        : type === "star"
          ? width
          : 34 + Math.floor(rng() * 170);

    const left = 8 + Math.floor(rng() * 84);
    const top = 8 + Math.floor(rng() * 84);
    const rotate = Math.floor(rng() * 360);

    shape.className = `poster-shape shape-${type}`;
    shape.style.width = `${width}px`;
    shape.style.height = `${height}px`;
    shape.style.left = `${left}%`;
    shape.style.top = `${top}%`;
    shape.style.background = type === "ring" ? "transparent" : color;
    shape.style.borderColor = palette.line;
    shape.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;

    if (type === "blob") {
      const r1 = 40 + Math.floor(rng() * 25);
      const r2 = 35 + Math.floor(rng() * 30);
      const r3 = 38 + Math.floor(rng() * 25);
      const r4 = 42 + Math.floor(rng() * 22);
      const s1 = 35 + Math.floor(rng() * 25);
      const s2 = 45 + Math.floor(rng() * 20);
      const s3 = 40 + Math.floor(rng() * 22);
      const s4 = 55 + Math.floor(rng() * 20);
      shape.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}% / ${s1}% ${s2}% ${s3}% ${s4}%`;
    }

    shape.style.setProperty("--r0", `${rotate}deg`);
    shape.style.setProperty("--r1", `${rotate + Math.floor(rng() * 18 - 9)}deg`);
    shape.style.setProperty("--dx", `${Math.floor(rng() * 26 - 13)}px`);
    shape.style.setProperty("--dy", `${Math.floor(rng() * 26 - 13)}px`);
    shape.style.setProperty("--drift", `${7 + Math.floor(rng() * 9)}s`);

    if (motionEnabled) {
      shape.classList.add("is-animated");
    }

    posterOutput.appendChild(shape);
  }

  addPosterStamps(rng);

  const caption = document.createElement("p");
  caption.className = "poster-caption";
  caption.textContent = `${palette.caption} / Behance-inspired illustration texture translated into interactive UI.`;

  const year = document.createElement("p");
  year.className = "poster-year";
  year.textContent = `${1960 + Math.floor(rng() * 19)} EDITION`;

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
    {
      threshold: 0.18,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
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

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

function setupHeroParallax() {
  if (!heroStage || !window.matchMedia("(pointer:fine)").matches) {
    return;
  }

  heroStage.addEventListener("mousemove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroStage.style.transform = `perspective(820px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5.2).toFixed(2)}deg)`;
  });

  heroStage.addEventListener("mouseleave", () => {
    heroStage.style.transform = "perspective(820px) rotateX(0deg) rotateY(0deg)";
  });
}

artistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setArtistSelection(button.dataset.artist);
  });
});

[paletteSelect, densityRange, gridMode, threeMode, motionToggle].forEach((control) => {
  if (!control) {
    return;
  }

  control.addEventListener("input", generatePoster);
  control.addEventListener("change", generatePoster);
});

regenerateBtn.addEventListener("click", () => {
  posterSeedOffset += 1;
  generatePoster();
});

if (threeResetBtn) {
  threeResetBtn.addEventListener("click", () => {
    if (threeSceneController && typeof threeSceneController.resetCamera === "function") {
      threeSceneController.resetCamera();
    }
  });
}

timelineRange.max = String(timelineEvents.length - 1);
timelineRange.addEventListener("input", () => {
  renderTimeline(Number.parseInt(timelineRange.value, 10));
});

setupReveals();
setupSectionTracking();
setupHeroParallax();
setupThreeScene();

window.addEventListener("pagehide", () => {
  if (threeSceneController && typeof threeSceneController.dispose === "function") {
    threeSceneController.dispose();
  }
});

setArtistSelection("kamekura");
buildTimelineRail();
renderTimeline(0);
generatePoster();
