const artistData = {
  kamekura: {
    era: "1950s-1964 / Olympic modernism",
    name: "Yusaku Kamekura",
    work: "Tokyo 1964 identity and poster discipline",
    cardCopy: "Emblem logic, void, exact alignment, and public-facing clarity.",
    text: "Kamekura compressed national scale into a lucid visual system. His lesson for interface design is that one decisive form, placed with conviction, can organize everything around it.",
    signals: [
      "Hero compositions should center one unmistakable symbol.",
      "Whitespace is structural, not decorative.",
      "Labels and actions stay concise under high visual pressure.",
    ],
    tags: ["emblem", "void", "discipline"],
    link: "https://www.moma.org/collection/works/8780",
    paletteKey: "kamekura",
  },
  tanaka: {
    era: "1960s-1970s / tradition through geometry",
    name: "Ikko Tanaka",
    work: "Modern systems built from Japanese cultural form",
    cardCopy: "Measured modules, ritual balance, and formal contrast.",
    text: "Tanaka showed that traditional cadence can survive translation into sharp modern systems. The UI follows that thinking with repeated modules, controlled asymmetry, and clear ceremonial hierarchy.",
    signals: [
      "Spacing should feel measured, not casual.",
      "Cultural form can become a reusable interface grammar.",
      "Contrast works best when shape logic stays calm.",
    ],
    tags: ["rimpa", "module", "cadence"],
    link: "https://www.moma.org/collection/works/82808",
    paletteKey: "tanaka",
  },
  yokoo: {
    era: "1965 onward / poster counterculture",
    name: "Tadanori Yokoo",
    work: "Persona-era collage, irony, and symbolic overload",
    cardCopy: "Collision, heat, narrative density, and theatrical rupture.",
    text: "Yokoo proved that contradiction can remain legible if the eye is given a route through the noise. In the poster lab, this becomes deliberate density with strong focal anchors.",
    signals: [
      "Use saturation only when the eye still knows where to land.",
      "Allow symbolic clashes to act as narrative devices.",
      "Chaos needs a governing rhythm.",
    ],
    tags: ["collage", "shock", "theater"],
    link: "https://www.moma.org/collection/works/7953",
    paletteKey: "yokoo",
  },
  awazu: {
    era: "1960s-1970s / theater, architecture, poster culture",
    name: "Kiyoshi Awazu",
    work: "Metabolism-linked graphics and cultural hybridity",
    cardCopy: "Cross-disciplinary texture, heat, and urban-pop surfaces.",
    text: "Awazu's work refused to stay inside a single discipline. This redesign borrows that refusal by letting archive, interface, poster, and 3D space behave like one connected system.",
    signals: [
      "Section transitions should feel like entering a new room.",
      "Surfaces can mix architecture, theater, and pop graphics.",
      "Expressive motifs still need reusable rules.",
    ],
    tags: ["metabolism", "theater", "urban"],
    link: "https://www.mplus.org.hk/en/collection/objects/poster-the-work-of-kisho-kurokawa-capsule-metabolism-spaceframe-metamorphose-2016727/",
    paletteKey: "awazu",
  },
  ishioka: {
    era: "1970s / campaign intensity",
    name: "Eiko Ishioka",
    work: "Parco-era editorial force and confrontational imagery",
    cardCopy: "Authorial voice, campaign punch, and image-as-statement.",
    text: "Ishioka's strength was not mere beauty but stance. The site borrows that stance in its assertive headlines, sharp section framing, and refusal to flatten everything into neutral product UI.",
    signals: [
      "Copy should sound authored, not generic.",
      "Callouts deserve the same force as key visuals.",
      "Commercial surfaces can still challenge the viewer.",
    ],
    tags: ["campaign", "stance", "editorial"],
    link: "https://www.cooperhewitt.org/2014/03/17/the-theater-very-parco/",
    paletteKey: "ishioka",
  },
  nagai: {
    era: "1960s-1980s / symbol systems and ecological vision",
    name: "Kazumasa Nagai",
    work: "Animal forms, compressed wit, and enduring iconography",
    cardCopy: "Symbolic animals, concise geometry, and conceptual economy.",
    text: "Nagai's posters show how a form can be both image and argument. The redesign channels that by making motifs carry meaning instead of acting as filler.",
    signals: [
      "Every recurring symbol should encode an idea.",
      "Color can amplify meaning without bloating composition.",
      "A single silhouette can carry an entire page.",
    ],
    tags: ["ecology", "symbol", "economy"],
    link: "https://www.mplus.org.hk/en/collection/makers/kazumasa-nagai-5738/",
    paletteKey: "nagai",
  },
  fukuda: {
    era: "1950s-1980s / visual wit and illusion",
    name: "Shigeo Fukuda",
    work: "Optical intelligence, anti-war posters, and smart reduction",
    cardCopy: "Visual jokes with moral edge and technical sharpness.",
    text: "Fukuda reminds the interface to think. Surprise is most powerful when it lands as insight, not novelty, which is why the site uses symbolic play without abandoning clarity.",
    signals: [
      "Wit belongs inside the system, not on top of it.",
      "Optical tricks work best with clean structural bones.",
      "Minimal shapes can still deliver impact.",
    ],
    tags: ["illusion", "wit", "reduction"],
    link: "https://www.moma.org/artists/2009-shigeo-fukuda",
    paletteKey: "fukuda",
  },
  sugiura: {
    era: "1960s-1980s / editorial cosmology",
    name: "Kohei Sugiura",
    work: "Book systems, information worlds, and visual cosmography",
    cardCopy: "Editorial depth, knowledge mapping, and symbolic structure.",
    text: "Sugiura expands the archive mentality of the site. Rather than treating sections as isolated screens, the redesign treats them as linked knowledge chambers inside one visual cosmos.",
    signals: [
      "Information should feel interconnected, not stacked.",
      "The archive can be emotional without becoming chaotic.",
      "Typography can guide thought as much as style.",
    ],
    tags: ["editorial", "cosmos", "mapping"],
    link: "https://www.dnpfcp.jp/gallery/ggg/eng/75/",
    paletteKey: "sugiura",
  },
};

const palettes = {
  kamekura: {
    label: "Yusaku Kamekura",
    background: "linear-gradient(145deg, #f7ecd4 0%, #efcf91 44%, #d96c3a 100%)",
    accents: ["#d8522e", "#234d7b", "#efb449", "#f6ead6", "#1b1712"],
    line: "#1d1711",
    panel: "#fff1de",
    caption: "Emblem precision, disciplined void, and Olympic-scale focus",
    stamps: ["emblem system", "public clarity"],
  },
  tanaka: {
    label: "Ikko Tanaka",
    background: "linear-gradient(145deg, #f3ead9 0%, #dfc895 42%, #284c74 100%)",
    accents: ["#c84c2f", "#284c74", "#e3b148", "#f4e6cf", "#1a1714"],
    line: "#1f1712",
    panel: "#fff1dc",
    caption: "Measured cadence, formal balance, and geometric tradition",
    stamps: ["ritual grid", "formal balance"],
  },
  yokoo: {
    label: "Tadanori Yokoo",
    background: "linear-gradient(145deg, #f6d9ea 0%, #ff8ddd 40%, #375da0 100%)",
    accents: ["#ff5f3e", "#375da0", "#ff6fd6", "#d5ff39", "#231512"],
    line: "#281611",
    panel: "#fff0f6",
    caption: "Poster heat, symbolic overload, and controlled delirium",
    stamps: ["persona shock", "narrative clash"],
  },
  awazu: {
    label: "Kiyoshi Awazu",
    background: "linear-gradient(145deg, #efd6b9 0%, #bc7a53 44%, #6c3c2a 100%)",
    accents: ["#e55a35", "#6c3c2a", "#58c9c0", "#eac15a", "#211410"],
    line: "#211410",
    panel: "#fbead6",
    caption: "Cross-disciplinary surfaces, warm density, and urban theatricality",
    stamps: ["metabolism", "cultural heat"],
  },
  ishioka: {
    label: "Eiko Ishioka",
    background: "linear-gradient(145deg, #e7f1ff 0%, #74b4ff 42%, #d75a35 100%)",
    accents: ["#d75a35", "#244270", "#f3c04d", "#f4ecdb", "#1f1410"],
    line: "#1f1410",
    panel: "#fff2de",
    caption: "Campaign power, image-as-stance, and editorial pressure",
    stamps: ["campaign edge", "authorial voice"],
  },
  nagai: {
    label: "Kazumasa Nagai",
    background: "linear-gradient(145deg, #eef5d5 0%, #9ac565 44%, #41673a 100%)",
    accents: ["#5a8a30", "#1f4b3b", "#d46d2e", "#f0eccd", "#151712"],
    line: "#181812",
    panel: "#f7f3d9",
    caption: "Symbolic economy, ecological wit, and living silhouettes",
    stamps: ["living symbol", "ecological mark"],
  },
  fukuda: {
    label: "Shigeo Fukuda",
    background: "linear-gradient(145deg, #ece5de 0%, #c7bbb1 42%, #5c5550 100%)",
    accents: ["#38322f", "#c85d34", "#9ca7d8", "#f0ebe2", "#171412"],
    line: "#1b1714",
    panel: "#f8f0e7",
    caption: "Optical wit, reduction, and intelligence disguised as play",
    stamps: ["optical wit", "sharp reduction"],
  },
  sugiura: {
    label: "Kohei Sugiura",
    background: "linear-gradient(145deg, #efe4d8 0%, #d8b788 42%, #515c82 100%)",
    accents: ["#6d5fa8", "#515c82", "#d88a3f", "#f3eadc", "#171412"],
    line: "#1a1512",
    panel: "#f9efe3",
    caption: "Editorial cosmology, linked knowledge, and deep structure",
    stamps: ["knowledge map", "editorial cosmos"],
  },
};

const timelineEvents = [
  {
    year: 1956,
    title: "Fukuda Turns Wit Into Graphic Intelligence",
    text: "The lineage starts with reduction and visual irony, showing how a single image can operate like an argument rather than a decoration.",
  },
  {
    year: 1960,
    title: "Tanaka Makes Formal Systems Feel Cultural",
    text: "Modernist clarity is fused with Japanese visual tradition, creating a logic that still feels powerful for interface composition.",
  },
  {
    year: 1962,
    title: "Kamekura Sets The Olympic Standard",
    text: "Tokyo 1964 identity work proves that one disciplined emblem can organize an entire public communication system.",
  },
  {
    year: 1965,
    title: "Yokoo Explodes Poster Language",
    text: "Collage, irony, contradiction, and symbolic overload enter the canon as tools of narrative force instead of visual excess for its own sake.",
  },
  {
    year: 1970,
    title: "Awazu Connects Graphics To Architecture",
    text: "Posters begin to behave like cultural environments, linking exhibition, theater, publication, and city life into one visual ecology.",
  },
  {
    year: 1972,
    title: "Ishioka Pushes Campaign Imagery Into Stance",
    text: "Commercial surfaces become sharper, bolder, and more authored, which is why this redesign treats every section like an editorial declaration.",
  },
  {
    year: 1977,
    title: "Nagai Refines Symbolic Economy",
    text: "Image systems become more distilled and ecological, turning silhouettes and animal forms into compact carriers of meaning.",
  },
  {
    year: 1980,
    title: "Sugiura Deepens The Archive Mindset",
    text: "Editorial design expands into knowledge architecture, influencing how this site links sections into one broader atlas instead of isolated screens.",
  },
  {
    year: 1983,
    title: "The Canon Becomes A System Library",
    text: "By the early 1980s, these designers had established a durable toolkit of contrast, symbol, spacing, wit, and motion-ready composition.",
  },
];

const revealElements = Array.from(document.querySelectorAll(".reveal"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));

let artistButtons = [];

const legendGrid = document.getElementById("legendGrid");
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

const rootStyle = document.documentElement;

let posterSeedOffset = 0;
let threeSceneController = null;

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
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

function getGridModeLabel(mode) {
  if (mode === "hybrid") {
    return "Hybrid Tension";
  }

  if (mode === "chaos") {
    return "Psychedelic Collision";
  }

  return "Constructive Order";
}

function getThreeModeLabel(mode) {
  if (mode === "pulse") {
    return "Signal Pulse";
  }

  if (mode === "nova") {
    return "Poster Nova";
  }

  return "Orbit Monument";
}

function applyThemeFromPalette(paletteKey) {
  const palette = palettes[paletteKey] ?? palettes.kamekura;
  rootStyle.style.setProperty("--theme-primary", palette.accents[0]);
  rootStyle.style.setProperty("--theme-secondary", palette.accents[1]);
  rootStyle.style.setProperty("--theme-tertiary", palette.accents[2]);
  rootStyle.style.setProperty("--theme-highlight", palette.accents[3]);
  rootStyle.style.setProperty("--theme-panel", palette.panel);
}

function buildLegendGrid() {
  if (!legendGrid) {
    return;
  }

  legendGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  Object.entries(artistData).forEach(([key, artist]) => {
    const palette = palettes[artist.paletteKey] ?? palettes.kamekura;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "legend-card";
    button.dataset.artist = key;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");
    button.style.setProperty("--card-primary", palette.accents[3]);
    button.style.setProperty("--card-secondary", palette.accents[0]);

    const tagsMarkup = artist.tags
      .map((tag) => `<span>${tag}</span>`)
      .join("");

    button.innerHTML = `
      <p class="legend-card-year">${artist.era}</p>
      <h3>${artist.name}</h3>
      <p class="legend-card-copy">${artist.cardCopy}</p>
      <div class="legend-card-tags">${tagsMarkup}</div>
    `;

    button.addEventListener("click", () => {
      setArtistSelection(key);
    });

    fragment.appendChild(button);
  });

  legendGrid.appendChild(fragment);
  artistButtons = Array.from(legendGrid.querySelectorAll(".legend-card"));
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

function setArtistSelection(key, options = {}) {
  const artist = artistData[key];
  if (!artist) {
    return;
  }

  const { syncPalette = true, syncPoster = true } = options;
  applyThemeFromPalette(artist.paletteKey);

  artistButtons.forEach((button) => {
    const isActive = button.dataset.artist === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  renderArtist(key);

  if (syncPalette && paletteSelect && paletteSelect.value !== artist.paletteKey) {
    paletteSelect.value = artist.paletteKey;
  }

  if (syncPoster) {
    generatePoster();
  }
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

function buildPosterLines(mode, palette, rng) {
  const lines = [];

  if (mode === "strict") {
    for (let index = 0; index < 8; index += 1) {
      lines.push({
        type: "vertical",
        x: 8 + index * 11,
        thickness: index % 2 === 0 ? 3 : 2,
        alpha: 0.3,
      });
    }

    for (let index = 0; index < 6; index += 1) {
      lines.push({
        type: "horizontal",
        y: 10 + index * 14,
        thickness: index % 2 === 0 ? 3 : 2,
        alpha: 0.24,
      });
    }
  }

  if (mode === "hybrid") {
    for (let index = 0; index < 5; index += 1) {
      lines.push({
        type: "vertical",
        x: 10 + index * 18,
        thickness: 2,
        alpha: 0.22,
      });
    }

    for (let index = 0; index < 5; index += 1) {
      lines.push({
        type: "diagonal",
        angle: index % 2 === 0 ? 33 : -33,
        y: 9 + index * 18,
        thickness: 2,
        alpha: 0.22,
      });
    }
  }

  if (mode === "chaos") {
    for (let index = 0; index < 12; index += 1) {
      lines.push({
        type: "diagonal",
        angle: Math.round(rng() * 128 - 64),
        y: Math.round(rng() * 100),
        thickness: rng() > 0.55 ? 3 : 2,
        alpha: 0.16 + rng() * 0.2,
      });
    }
  }

  lines.forEach((line) => {
    const lineElement = document.createElement("div");
    lineElement.className = "poster-line";
    lineElement.style.background = `${palette.line}${Math.round(line.alpha * 255)
      .toString(16)
      .padStart(2, "0")}`;

    if (line.type === "vertical") {
      lineElement.style.left = `${line.x}%`;
      lineElement.style.top = "0";
      lineElement.style.width = `${line.thickness}px`;
      lineElement.style.height = "100%";
    }

    if (line.type === "horizontal") {
      lineElement.style.left = "0";
      lineElement.style.top = `${line.y}%`;
      lineElement.style.height = `${line.thickness}px`;
      lineElement.style.width = "100%";
    }

    if (line.type === "diagonal") {
      lineElement.style.left = "-8%";
      lineElement.style.top = `${line.y}%`;
      lineElement.style.width = "116%";
      lineElement.style.height = `${line.thickness}px`;
      lineElement.style.transform = `rotate(${line.angle}deg)`;
      lineElement.style.transformOrigin = "left center";
    }

    posterOutput.appendChild(lineElement);
  });
}

function addPosterStamps(rng, palette) {
  const stampA = document.createElement("p");
  stampA.className = "poster-stamp poster-stamp-a";
  stampA.textContent = rng() > 0.5 ? palette.stamps[0] : "archive proof";

  const stampB = document.createElement("p");
  stampB.className = "poster-stamp poster-stamp-b";
  stampB.textContent = rng() > 0.5 ? palette.stamps[1] : "studio study";

  posterOutput.appendChild(stampA);
  posterOutput.appendChild(stampB);
}

function generatePoster() {
  const paletteKey = paletteSelect.value;
  const palette = palettes[paletteKey] ?? palettes.kamekura;
  const density = Number.parseInt(densityRange.value, 10);
  const mode = gridMode.value;
  const motionEnabled = motionToggle.checked;

  const seedInput = `${paletteKey}-${density}-${mode}-${posterSeedOffset}`;
  const rng = makeRng(hashString(seedInput));

  densityValue.textContent = `${density} layers`;
  outputMeta.textContent = `${palette.label} / ${density} layers / ${getGridModeLabel(mode)} / ${getThreeModeLabel(threeMode?.value ?? "orbit")}`;

  posterOutput.innerHTML = "";
  posterOutput.style.background = palette.background;

  buildPosterLines(mode, palette, rng);

  const shapeTypes = ["circle", "ring", "bar", "diamond", "star", "blob"];

  for (let index = 0; index < density; index += 1) {
    const shape = document.createElement("div");
    const type = shapeTypes[Math.floor(rng() * shapeTypes.length)];
    const color = palette.accents[Math.floor(rng() * palette.accents.length)];

    const width = 36 + Math.floor(rng() * 188);
    const height =
      type === "bar"
        ? 12 + Math.floor(rng() * 42)
        : type === "star"
          ? width
          : 36 + Math.floor(rng() * 188);

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

  addPosterStamps(rng, palette);

  const caption = document.createElement("p");
  caption.className = "poster-caption";
  caption.textContent = `${palette.caption}. This generated board translates historical logic into a contemporary interface study.`;

  const year = document.createElement("p");
  year.className = "poster-year";
  year.textContent = `${1955 + Math.floor(rng() * 30)} ARCHIVE`;

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

if (paletteSelect) {
  const syncPaletteSelection = () => {
    if (artistData[paletteSelect.value]) {
      setArtistSelection(paletteSelect.value, { syncPalette: false, syncPoster: false });
    }
    generatePoster();
  };

  paletteSelect.addEventListener("input", syncPaletteSelection);
  paletteSelect.addEventListener("change", syncPaletteSelection);
}

[densityRange, gridMode, threeMode, motionToggle].forEach((control) => {
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

buildLegendGrid();
setArtistSelection("kamekura", { syncPalette: true, syncPoster: false });
buildTimelineRail();
renderTimeline(0);
generatePoster();
