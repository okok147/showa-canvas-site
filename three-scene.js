import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.166.1/build/three.module.js";

function disposeGeometry(geometry) {
  if (geometry) {
    geometry.dispose();
  }
}

function disposeMaterial(material) {
  if (!material) {
    return;
  }

  if (Array.isArray(material)) {
    material.forEach((entry) => entry.dispose());
    return;
  }

  material.dispose();
}

export function createShowaThreeScene({ canvas, getConfig }) {
  if (!canvas) {
    return {
      resetCamera() {},
      dispose() {},
    };
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf5ddb1, 6, 20);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  const cameraHome = new THREE.Vector3(0, 0, 7.8);
  const cameraTarget = cameraHome.clone();
  camera.position.copy(cameraHome);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.56);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffe5c0, 1.22);
  keyLight.position.set(4, 5, 6);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0x8dd6ff, 1.05, 20, 2);
  fillLight.position.set(-4.8, -1.8, 5);
  scene.add(fillLight);

  const rig = new THREE.Group();
  scene.add(rig);

  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xff6b3a,
    roughness: 0.44,
    metalness: 0.08,
    clearcoat: 0.62,
    clearcoatRoughness: 0.28,
  });

  const shellMaterial = new THREE.MeshStandardMaterial({
    color: 0x61d8d2,
    roughness: 0.32,
    metalness: 0.14,
    wireframe: true,
  });

  const ribbonMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6ed6,
    roughness: 0.38,
    metalness: 0.08,
    emissive: 0x25140f,
    emissiveIntensity: 0.16,
  });

  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.03, 2), coreMaterial);
  rig.add(core);

  const shell = new THREE.Mesh(new THREE.TorusKnotGeometry(1.74, 0.17, 220, 26, 2, 7), shellMaterial);
  rig.add(shell);

  const ribbonGroup = new THREE.Group();
  rig.add(ribbonGroup);

  const ribbons = [];
  for (let index = 0; index < 3; index += 1) {
    const ribbon = new THREE.Mesh(
      new THREE.TorusGeometry(2.28 + index * 0.24, 0.05 + index * 0.02, 24, 160),
      ribbonMaterial.clone(),
    );

    ribbon.rotation.x = index * 0.84;
    ribbon.rotation.y = index * 0.4;
    ribbon.rotation.z = index * 0.58;
    ribbonGroup.add(ribbon);
    ribbons.push(ribbon);
  }

  const maxParticles = 1400;
  const particlePositions = new Float32Array(maxParticles * 3);
  const particleBase = new Float32Array(maxParticles * 3);
  const particleMeta = new Float32Array(maxParticles * 2);

  for (let index = 0; index < maxParticles; index += 1) {
    const radius = 2.5 + Math.random() * 2.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    particlePositions[index * 3] = x;
    particlePositions[index * 3 + 1] = y;
    particlePositions[index * 3 + 2] = z;

    particleBase[index * 3] = x;
    particleBase[index * 3 + 1] = y;
    particleBase[index * 3 + 2] = z;

    particleMeta[index * 2] = Math.random() * Math.PI * 2;
    particleMeta[index * 2 + 1] = 0.35 + Math.random() * 1.2;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.05,
    transparent: true,
    opacity: 0.72,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  const pointer = { x: 0, y: 0 };
  const scratchColor = new THREE.Color();
  const scratchColorB = new THREE.Color();
  const scratchColorC = new THREE.Color();

  let frameId = 0;

  function updateSize() {
    const bounds = canvas.getBoundingClientRect();
    const width = Math.max(1, bounds.width);
    const height = Math.max(1, bounds.height);

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function onPointerMove(event) {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  }

  function onPointerLeave() {
    pointer.x = 0;
    pointer.y = 0;
  }

  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerleave", onPointerLeave);

  const resizeObserver = new ResizeObserver(updateSize);
  resizeObserver.observe(canvas);
  updateSize();

  const clock = new THREE.Clock();

  function animate() {
    const elapsed = clock.getElapsedTime();
    const config = getConfig ? getConfig() : {};
    const palette = Array.isArray(config.palette) ? config.palette : ["#ff6236", "#60d6cf", "#ff66d4", "#6ab9ff"];
    const density = Number.isFinite(config.density) ? config.density : 16;
    const gridMode = typeof config.gridMode === "string" ? config.gridMode : "strict";
    const threeMode = typeof config.threeMode === "string" ? config.threeMode : "orbit";
    const motionEnabled = config.motionEnabled !== false;

    scratchColor.set(palette[0] ?? "#ff6236");
    scratchColorB.set(palette[1] ?? "#60d6cf");
    scratchColorC.set(palette[2] ?? "#ff66d4");

    coreMaterial.color.lerp(scratchColor, 0.08);
    shellMaterial.color.lerp(scratchColorB, 0.08);

    ribbons.forEach((ribbon, index) => {
      ribbon.material.color.lerp(index % 2 === 0 ? scratchColorC : scratchColorB, 0.08);
    });

    const visibleParticles = Math.min(maxParticles, 240 + density * 38);
    particleGeometry.setDrawRange(0, visibleParticles);
    particleMaterial.size = 0.028 + density * 0.0022;
    particleMaterial.color.lerp(scratchColorB, 0.06);

    const modeSpeed = threeMode === "pulse" ? 1.18 : threeMode === "nova" ? 1.56 : 0.9;
    const waveStrength = threeMode === "pulse" ? 0.22 : threeMode === "nova" ? 0.36 : 0.16;
    const gridScale = gridMode === "chaos" ? 1.35 : gridMode === "hybrid" ? 1.05 : 0.78;

    if (motionEnabled) {
      rig.rotation.y += 0.0028 * modeSpeed;
      rig.rotation.x += 0.0013 * (modeSpeed * 0.9);
      rig.rotation.z = Math.sin(elapsed * 0.4) * 0.18;

      shell.rotation.x += 0.0034 * modeSpeed;
      shell.rotation.z -= 0.0021 * modeSpeed;

      ribbons.forEach((ribbon, index) => {
        ribbon.rotation.y += (0.0018 + index * 0.0006) * modeSpeed;
        ribbon.rotation.x += (0.0012 + index * 0.0004) * modeSpeed;
      });

      const positionArray = particleGeometry.attributes.position.array;
      for (let index = 0; index < visibleParticles; index += 1) {
        const phase = particleMeta[index * 2];
        const drift = particleMeta[index * 2 + 1];
        const wobble = Math.sin(elapsed * (0.6 + drift) + phase) * waveStrength * gridScale;
        const swirl = Math.cos(elapsed * (0.48 + drift) + phase * 0.7) * waveStrength * 0.8;

        positionArray[index * 3] = particleBase[index * 3] + wobble;
        positionArray[index * 3 + 1] = particleBase[index * 3 + 1] + swirl;
        positionArray[index * 3 + 2] = particleBase[index * 3 + 2] + wobble * 0.72;
      }

      particleGeometry.attributes.position.needsUpdate = true;
    }

    const pointerInfluence = gridMode === "chaos" ? 1.08 : gridMode === "hybrid" ? 0.84 : 0.62;
    const desiredZ = cameraHome.z - (gridMode === "chaos" ? 0.42 : gridMode === "hybrid" ? 0.28 : 0.18);

    cameraTarget.set(pointer.x * pointerInfluence, -pointer.y * pointerInfluence * 0.72, desiredZ);
    camera.position.lerp(cameraTarget, motionEnabled ? 0.045 : 0.018);
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    frameId = window.requestAnimationFrame(animate);
  }

  frameId = window.requestAnimationFrame(animate);

  return {
    resetCamera() {
      pointer.x = 0;
      pointer.y = 0;
      camera.position.copy(cameraHome);
      camera.lookAt(0, 0, 0);
    },
    dispose() {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);

      disposeGeometry(core.geometry);
      disposeMaterial(core.material);
      disposeGeometry(shell.geometry);
      disposeMaterial(shell.material);

      ribbons.forEach((ribbon) => {
        disposeGeometry(ribbon.geometry);
        disposeMaterial(ribbon.material);
      });

      disposeGeometry(particleGeometry);
      disposeMaterial(particleMaterial);
      renderer.dispose();
    },
  };
}
