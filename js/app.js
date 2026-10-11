// Critter Pinball 3D: Rainbow Arcade Bumper Table!
// Real Three.js r161 3D WebGL Tilted Pinball Machine, Mushroom Pop Bumpers, Swept Capsule Flippers,
// Spring Plunger Shooter Lane, 3 Cooldown Power Pedals, PMREM Studio Environment, Pooled GPU Particles,
// and 5-Critter Tournament Scoreboard.

const CRITTERS = [
  {
    id: 'dogday',
    icon: 'icons/dogday.jpg',
    badge: '☀️',
    colorHex: 0xff9800,
    secondaryHex: 0xffea00,
    tableFloorHex: 0x6f5ce0,
    tableAccentHex: 0x9575cd,
    cabinetWallHex: 0xff6d00,
    railHex: 0xffd54f,
    skyTopHex: 0x160a38,
    skyBotHex: 0x4a2594,
    bumperColors: [0xff5252, 0xffb300, 0x00e676, 0x00b0ff, 0xe040fb, 0xffea00, 0xff4081],
    targetScore: 2800
  },
  {
    id: 'catnap',
    icon: 'icons/catnap.jpg',
    badge: '🌙',
    colorHex: 0x9c27b0,
    secondaryHex: 0xb388ff,
    tableFloorHex: 0x5c4bc4,
    tableAccentHex: 0x7e57c2,
    cabinetWallHex: 0x8e24aa,
    railHex: 0xe040fb,
    skyTopHex: 0x0e0624,
    skyBotHex: 0x3b1b78,
    bumperColors: [0xb388ff, 0x00e5ff, 0xff4081, 0xffd54f, 0x7c4dff, 0x69f0ae, 0xe040fb],
    targetScore: 2950
  },
  {
    id: 'picky',
    icon: 'icons/picky.jpg',
    badge: '🍎',
    colorHex: 0xff4081,
    secondaryHex: 0xff80ab,
    tableFloorHex: 0x88488f,
    tableAccentHex: 0xab47bc,
    cabinetWallHex: 0xd81b60,
    railHex: 0xff80ab,
    skyTopHex: 0x22082e,
    skyBotHex: 0x681a64,
    bumperColors: [0xff4081, 0xffea00, 0x00e676, 0xff80ab, 0x00e5ff, 0xff6e40, 0xe040fb],
    targetScore: 3100
  },
  {
    id: 'bubba',
    icon: 'icons/bubba.jpg',
    badge: '💡',
    colorHex: 0x00b0ff,
    secondaryHex: 0x80d8ff,
    tableFloorHex: 0x2c6cb0,
    tableAccentHex: 0x42a5f5,
    cabinetWallHex: 0x0288d1,
    railHex: 0x40c4ff,
    skyTopHex: 0x081834,
    skyBotHex: 0x164c8c,
    bumperColors: [0x00e5ff, 0xffea00, 0x7c4dff, 0x00e676, 0xff4081, 0x40c4ff, 0xffab00],
    targetScore: 3250
  },
  {
    id: 'craftycorn',
    icon: 'icons/craftycorn.jpg',
    badge: '🎨',
    colorHex: 0x00e5ff,
    secondaryHex: 0xff4081,
    tableFloorHex: 0x5c58c8,
    tableAccentHex: 0x7986cb,
    cabinetWallHex: 0x00acc1,
    railHex: 0xffea00,
    skyTopHex: 0x140b3a,
    skyBotHex: 0x392586,
    bumperColors: [0xff1744, 0xff9100, 0xffea00, 0x00e676, 0x00e5ff, 0x2979ff, 0xd500f9],
    targetScore: 3400
  },
  {
    id: 'hoppy',
    icon: 'icons/hoppy.jpg',
    badge: '⚡',
    colorHex: 0x00e676,
    secondaryHex: 0xccff90,
    tableFloorHex: 0x2d7a6e,
    tableAccentHex: 0x4db6ac,
    cabinetWallHex: 0x00897b,
    railHex: 0x69f0ae,
    skyTopHex: 0x081f1b,
    skyBotHex: 0x195c4d,
    bumperColors: [0x00e676, 0xffea00, 0x00e5ff, 0x76ff03, 0xff4081, 0xffab00, 0xe040fb],
    targetScore: 3550
  },
  {
    id: 'bobby',
    icon: 'icons/bobby.jpg',
    badge: '💖',
    colorHex: 0xe91e63,
    secondaryHex: 0xff80ab,
    tableFloorHex: 0x8c4278,
    tableAccentHex: 0xba68c8,
    cabinetWallHex: 0xc2185b,
    railHex: 0xff80ab,
    skyTopHex: 0x220724,
    skyBotHex: 0x60185a,
    bumperColors: [0xff4081, 0xffea00, 0xe040fb, 0x00e5ff, 0xff80ab, 0x69f0ae, 0xff5252],
    targetScore: 3700
  },
  {
    id: 'kickin',
    icon: 'icons/kickin.jpg',
    badge: '🛹',
    colorHex: 0xffd600,
    secondaryHex: 0xff6d00,
    tableFloorHex: 0x7c5836,
    tableAccentHex: 0xa1887f,
    cabinetWallHex: 0xe65100,
    railHex: 0xffea00,
    skyTopHex: 0x1e1108,
    skyBotHex: 0x563014,
    bumperColors: [0xffea00, 0xff3d00, 0x00e676, 0x00e5ff, 0xd500f9, 0xffab00, 0xff4081],
    targetScore: 3850
  }
];

// Additional 6 bundled Critter icons used as tournament rivals so all 14 icons are featured!
const EXTRA_RIVALS = [
  { id: 'huggy', icon: 'icons/huggy.jpg', badge: '💙', colorHex: 0x2979ff, secondaryHex: 0x82b1ff },
  { id: 'jj', icon: 'icons/jj.jpg', badge: '🎈', colorHex: 0xff5252, secondaryHex: 0xff8a80 },
  { id: 'lunabat', icon: 'icons/lunabat.jpg', badge: '🦇', colorHex: 0x7c4dff, secondaryHex: 0xb388ff },
  { id: 'mikey', icon: 'icons/mikey.jpg', badge: '🐢', colorHex: 0x00e676, secondaryHex: 0xb9f6ca },
  { id: 'poppydash', icon: 'icons/poppydash.jpg', badge: '🌺', colorHex: 0xff4081, secondaryHex: 0xff80ab },
  { id: 'sunnyfox', icon: 'icons/sunnyfox.jpg', badge: '🦊', colorHex: 0xff9100, secondaryHex: 0xffd180 }
];

const ALL_CRITTER_PROFILES = [...CRITTERS, ...EXTRA_RIVALS];
const RAINBOW_HEX = [0xff1744, 0xff9100, 0xffea00, 0x00e676, 0x00b0ff, 0xd500f9];
const STORAGE_KEY = 'critter_pinball3d_stars_v1';
const SOUND_STORAGE_KEY = 'critter_pinball3d_sound_v1';

// Persistent Star Trophies per Pinball Table (0..3 stars)
let cupStars = CRITTERS.map(() => 0);
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  if (Array.isArray(saved) && saved.length === CRITTERS.length) {
    cupStars = saved.map((n) => Math.max(0, Math.min(3, Number(n) || 0)));
  }
} catch (_e) {}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cupStars));
  } catch (_e) {}
}

// Web Audio Synthesizer — Master GainNode + DynamicsCompressorNode Anti-Clipping Bus & Sample-Accurate Scheduling
let audioCtx = null;
let masterGainNode = null;
let masterCompressorNode = null;
let lastBumperPopAudioTime = -1;
const recentFreqTriggerMap = new Map();
let soundEnabled = true;
try {
  const savedSound = localStorage.getItem(SOUND_STORAGE_KEY);
  if (savedSound === '0') soundEnabled = false;
} catch (_e) {}

function ensureAudioFromUserGesture() {
  if (!soundEnabled) return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      try {
        masterCompressorNode = audioCtx.createDynamicsCompressor();
        masterCompressorNode.threshold.setValueAtTime(-14, audioCtx.currentTime);
        masterCompressorNode.knee.setValueAtTime(18, audioCtx.currentTime);
        masterCompressorNode.ratio.setValueAtTime(6, audioCtx.currentTime);
        masterCompressorNode.attack.setValueAtTime(0.003, audioCtx.currentTime);
        masterCompressorNode.release.setValueAtTime(0.12, audioCtx.currentTime);

        masterGainNode = audioCtx.createGain();
        masterGainNode.gain.setValueAtTime(0.82, audioCtx.currentTime);

        masterGainNode.connect(masterCompressorNode);
        masterCompressorNode.connect(audioCtx.destination);
      } catch (_e) {}
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playTone(
  freq,
  type = 'sine',
  duration = 0.14,
  gainLevel = 0.14,
  slideTo = null,
  delaySec = 0
) {
  if (!soundEnabled || !audioCtx || audioCtx.state !== 'running') return;
  try {
    const now = audioCtx.currentTime;
    const freqKey = Math.round(freq);
    if (delaySec <= 0) {
      const prevTime = recentFreqTriggerMap.get(freqKey) || -1;
      if (now - prevTime < 0.025) return;
      recentFreqTriggerMap.set(freqKey, now);
    }

    const startTime = now + Math.max(0, delaySec);
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    if (slideTo !== null) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(30, slideTo), startTime + duration);
    }
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(masterGainNode || audioCtx.destination);
    osc.onended = () => {
      try {
        osc.disconnect();
        gain.disconnect();
      } catch (_e) {}
    };
    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  } catch (_e) {}
}

function playFlipperSnapSfx(isLeft) {
  playTone(isLeft ? 310 : 350, 'triangle', 0.09, 0.16, isLeft ? 720 : 790, 0);
}

function playPlungerLaunchSfx() {
  playTone(190, 'sawtooth', 0.22, 0.17, 860, 0);
  playTone(660, 'sine', 0.16, 0.13, 1140, 0.07);
}

function playBumperPopSfx(combo = 1) {
  if (audioCtx && audioCtx.currentTime - lastBumperPopAudioTime < 0.025) return;
  if (audioCtx) lastBumperPopAudioTime = audioCtx.currentTime;
  const base = Math.min(1100, 440 + combo * 42);
  playTone(base, 'sine', 0.12, 0.16, base * 1.45, 0);
  playTone(base * 0.5, 'triangle', 0.09, 0.11, base * 0.8, 0.008);
}

function playStarTargetSfx() {
  playTone(659.25, 'sine', 0.1, 0.13, 987.77, 0);
  playTone(1046.5, 'sine', 0.13, 0.13, 1318.5, 0.05);
}

function playRampJackpotSfx() {
  [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
    playTone(f, 'triangle', 0.15, 0.14, f * 1.15, idx * 0.05);
  });
}

function playMagnetPedalSfx() {
  [392, 523.25, 659.25, 783.99].forEach((f, idx) => {
    playTone(f, 'sine', 0.15, 0.14, f * 1.25, idx * 0.045);
  });
}

function playMultiballFeverSfx() {
  [440, 554.37, 659.25, 880, 1108.73].forEach((f, idx) => {
    playTone(f, 'sawtooth', 0.17, 0.14, f * 1.18, idx * 0.048);
  });
}

function playRainbowFeverChimeSfx() {
  [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98].forEach((f, idx) => {
    playTone(f, 'triangle', 0.18, 0.14, f * 1.12, idx * 0.045);
  });
}

function playTiltQuakeSfx() {
  playTone(135, 'sawtooth', 0.32, 0.22, 48, 0);
  playTone(580, 'triangle', 0.2, 0.15, 1120, 0.06);
}

function playCooldownDenySfx() {
  playTone(165, 'square', 0.1, 0.11, 115, 0);
}

function playWinFanfare(starsCount = 3) {
  const notes =
    starsCount >= 3
      ? [523.25, 659.25, 783.99, 1046.5, 1318.5]
      : starsCount === 2
        ? [523.25, 659.25, 783.99, 1046.5]
        : [440, 554.37, 659.25];
  notes.forEach((f, i) => {
    const isFinal = i === notes.length - 1;
    playTone(f, 'triangle', isFinal ? 0.42 : 0.22, 0.16, isFinal ? f * 1.04 : null, i * 0.09);
  });
}

function playLoseSadSfx() {
  // Classic 4-note descending trombone ("wah-wah-wah-waaaah") with held 0.65s pitch-bend tail on the 4th note
  [392.0, 369.99, 349.23].forEach((f, i) => {
    playTone(f, 'sawtooth', 0.22, 0.14, f * 0.92, i * 0.16);
  });
  playTone(329.63, 'sawtooth', 0.65, 0.15, 220.0, 0.48);
  playTone(164.81, 'triangle', 0.65, 0.12, 110.0, 0.48);
}

// Cached DOM References for Zero Per-Frame getElementById Lookups
const DOM = {
  hudDriverImg: document.getElementById('hudDriverImg'),
  hudCupEmoji: document.getElementById('hudCupEmoji'),
  playerMarker: document.getElementById('playerMarker'),
  playerMarkerImg: document.getElementById('playerMarkerImg'),
  rivalMarkers: [
    document.getElementById('rivalMarker0'),
    document.getElementById('rivalMarker1'),
    document.getElementById('rivalMarker2'),
    document.getElementById('rivalMarker3')
  ],
  rivalMarkerImgs: [
    document.getElementById('rivalMarkerImg0'),
    document.getElementById('rivalMarkerImg1'),
    document.getElementById('rivalMarkerImg2'),
    document.getElementById('rivalMarkerImg3')
  ],
  trackProgressFill: document.getElementById('trackProgressFill'),
  feverProgressFill: document.getElementById('feverProgressFill'),
  feverStatusEmoji: document.getElementById('feverStatusEmoji'),
  hudRankChip: document.getElementById('hudRankChip'),
  hudRankEmoji: document.getElementById('hudRankEmoji'),
  hudStars: [
    document.getElementById('hudStar0'),
    document.getElementById('hudStar1'),
    document.getElementById('hudStar2')
  ],
  worldSelectorRail: document.getElementById('worldSelectorRail'),
  raceToast: document.getElementById('raceToast'),
  steerGuide: document.getElementById('steerGuide'),
  impactFlashOverlay: document.getElementById('impactFlashOverlay'),
  impactBadgeBurst: document.getElementById('impactBadgeBurst'),
  btnFlipperLeft: document.getElementById('btnFlipperLeft'),
  btnFlipperRight: document.getElementById('btnFlipperRight'),
  btnPlungerLaunch: document.getElementById('btnPlungerLaunch'),
  btnPedalMagnet: document.getElementById('btnPedalMagnet'),
  btnPedalMultiball: document.getElementById('btnPedalMultiball'),
  btnPedalTiltQuake: document.getElementById('btnPedalTiltQuake'),
  btnRestartTable: document.getElementById('btnRestartTable'),
  btnSoundToggle: document.getElementById('btnSoundToggle'),
  winModal: document.getElementById('winModal'),
  winPodiumCard: document.getElementById('winPodiumCard'),
  winSparklesHeader: document.getElementById('winSparklesHeader'),
  winDriverImg: document.getElementById('winDriverImg'),
  winCupBadge: document.getElementById('winCupBadge'),
  winMedalBadge: document.getElementById('winMedalBadge'),
  winStarsRow: document.getElementById('winStarsRow'),
  podiumStandingsRow: document.getElementById('podiumStandingsRow'),
  btnWinReplay: document.getElementById('btnWinReplay'),
  btnWinNext: document.getElementById('btnWinNext'),
  finaleModal: document.getElementById('finaleModal'),
  finaleGrid: document.getElementById('finaleGrid'),
  btnFinaleClose: document.getElementById('btnFinaleClose')
};

if (DOM.btnSoundToggle) {
  DOM.btnSoundToggle.textContent = soundEnabled ? '🔊' : '🔇';
}

// Initialize Three.js r161 WebGL Renderer, Scene, PMREM Environment & Shadows
const canvas = document.getElementById('webglCanvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
if (THREE.ACESFilmicToneMapping !== undefined) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x160a38);
scene.fog = new THREE.FogExp2(0x160a38, 0.0042);

// Build PMREM Studio Environment Map using core Three.js r161 APIs so metallic balls & chrome shine
function buildStudioEnvironmentMap() {
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x24164a);
  const addLightPanel = (colorHex, x, y, z, sx, sy, sz) => {
    const g = new THREE.BoxGeometry(sx, sy, sz);
    const m = new THREE.MeshBasicMaterial({ color: colorHex });
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(x, y, z);
    envScene.add(mesh);
    return { g, m };
  };
  const panels = [
    addLightPanel(0xffffff, 0, 10, 0, 14, 0.4, 14),
    addLightPanel(0xfff3e0, 0, 6, 8, 12, 5, 0.4),
    addLightPanel(0xff4081, -10, 3, 0, 0.4, 8, 14),
    addLightPanel(0x00e5ff, 10, 3, 0, 0.4, 8, 14),
    addLightPanel(0xffea00, 0, 3, -10, 14, 8, 0.4),
    addLightPanel(0x69f0ae, 0, -8, 0, 14, 0.4, 14)
  ];
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(envScene, 0.04);
  panels.forEach((p) => {
    p.g.dispose();
    p.m.dispose();
  });
  pmrem.dispose();
  return envRT.texture;
}
scene.environment = buildStudioEnvironmentMap();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1.0,
  240
);

// Physically-Calibrated Lights for Three.js r161 (useLegacyLights === false)
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x261648, 0.52);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xfff9e6, 3.8);
dirLight.position.set(15, 22, 11);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 4;
dirLight.shadow.camera.far = 64;
dirLight.shadow.camera.left = -15.5;
dirLight.shadow.camera.right = 15.5;
dirLight.shadow.camera.top = 22.5;
dirLight.shadow.camera.bottom = -22.5;
dirLight.shadow.bias = -0.0005;
dirLight.shadow.normalBias = 0.02;
scene.add(dirLight);
scene.add(dirLight.target);

// Balanced r161 PointLight (decay = 1.0, base intensity = 48, Fever = 55) so Fever & bumper pulses enhance the table without overpowering the 3.8 key DirectionalLight
const feverPointLight = new THREE.PointLight(0xffea00, 48, 58, 1.0);
feverPointLight.position.set(0, 7.2, 0.5);
scene.add(feverPointLight);

// Load all 14 Critter Portrait Textures with SRGBColorSpace, Mipmaps & Max Anisotropy
const textureLoader = new THREE.TextureLoader();
const maxAniso = renderer.capabilities.getMaxAnisotropy
  ? renderer.capabilities.getMaxAnisotropy()
  : 4;
const critterTextures = {};
ALL_CRITTER_PROFILES.forEach((c) => {
  const tex = textureLoader.load(c.icon);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = maxAniso;
  tex.userData = { keepAlive: true };
  critterTextures[c.id] = tex;
});

// Master Scene Groups
const tableGroup = new THREE.Group();
tableGroup.rotation.x = 0.16;
scene.add(tableGroup);

const staticTableGroup = new THREE.Group();
const dynamicPlayfieldGroup = new THREE.Group();
tableGroup.add(staticTableGroup);
tableGroup.add(dynamicPlayfieldGroup);

// Gradient Sky Backdrop Plane (uses both skyTopHex and skyBotHex!)
let skyBackdropMesh = null;
let skyBackdropTex = null;
function updateSkyBackdrop(topHex, botHex) {
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 64;
  skyCanvas.height = 256;
  const ctx = skyCanvas.getContext('2d');
  const topCol = '#' + topHex.toString(16).padStart(6, '0');
  const botCol = '#' + botHex.toString(16).padStart(6, '0');
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, topCol);
  grad.addColorStop(0.55, botCol);
  grad.addColorStop(1, topCol);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 256);

  if (skyBackdropTex) skyBackdropTex.dispose();
  skyBackdropTex = new THREE.CanvasTexture(skyCanvas);
  skyBackdropTex.colorSpace = THREE.SRGBColorSpace;

  if (!skyBackdropMesh) {
    const geo = new THREE.PlaneGeometry(180, 120);
    geo.userData = { keepAlive: true };
    const mat = new THREE.MeshBasicMaterial({
      map: skyBackdropTex,
      depthWrite: false,
      fog: false
    });
    mat.userData = { keepAlive: true };
    skyBackdropMesh = new THREE.Mesh(geo, mat);
    skyBackdropMesh.position.set(0, -18, -42);
    skyBackdropMesh.rotation.x = -0.55;
    scene.add(skyBackdropMesh);
  } else {
    skyBackdropMesh.material.map = skyBackdropTex;
    skyBackdropMesh.material.needsUpdate = true;
  }
}

// Pinball Playfield Constants (Local Table Coordinates)
const TABLE_HALF_W = 10.6;
const TABLE_TOP_Z = -20.2;
const TABLE_BOT_Z = 15.2;
const SHOOTER_WALL_X = 8.4; // Right plunger lane x in [8.4, 10.6]
const BALL_RADIUS = 0.82;
const RIVAL_BALL_RADIUS = BALL_RADIUS * 0.86;

// Pre-Allocated Shared Geometries (Zero Geometry Allocation During Gameplay or Multiball!)
function markSharedGeo(geo) {
  geo.userData = { keepAlive: true };
  return geo;
}

function playClashPopSfx() {
  playTone(280, 'sawtooth', 0.11, 0.18, 620);
  playTone(540, 'triangle', 0.13, 0.15, 920);
}

function playCoinTickSfx() {
  playTone(1174.66, 'sine', 0.07, 0.13, 1567.98);
}

const SHARED_GEOS = {
  particle: markSharedGeo(new THREE.OctahedronGeometry(0.24, 0)),
  shockwave: markSharedGeo(new THREE.RingGeometry(0.35, 0.85, 24)),
  shockwaveThin: markSharedGeo(new THREE.RingGeometry(0.58, 0.78, 24)),
  starCoin: markSharedGeo(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 20)),
  playerSphere: markSharedGeo(new THREE.SphereGeometry(BALL_RADIUS, 24, 24)),
  rivalSphere: markSharedGeo(new THREE.SphereGeometry(RIVAL_BALL_RADIUS, 24, 24)),
  playerBand: markSharedGeo(new THREE.TorusGeometry(BALL_RADIUS * 0.99, BALL_RADIUS * 0.09, 10, 24)),
  rivalBand: markSharedGeo(new THREE.TorusGeometry(RIVAL_BALL_RADIUS * 0.99, RIVAL_BALL_RADIUS * 0.09, 10, 24)),
  playerRim: markSharedGeo(new THREE.TorusGeometry(0.74, 0.1, 12, 24)),
  rivalRim: markSharedGeo(new THREE.TorusGeometry(0.58, 0.1, 12, 24)),
  playerFace: markSharedGeo(new THREE.CircleGeometry(0.74 * 0.94, 24)),
  rivalFace: markSharedGeo(new THREE.CircleGeometry(0.58 * 0.94, 24)),
  playerShadow: markSharedGeo(new THREE.CircleGeometry(BALL_RADIUS * 1.15, 20)),
  rivalShadow: markSharedGeo(new THREE.CircleGeometry(RIVAL_BALL_RADIUS * 1.15, 20)),
  playerHalo: markSharedGeo(new THREE.RingGeometry(BALL_RADIUS * 1.08, BALL_RADIUS * 1.48, 24)),
  rivalHalo: markSharedGeo(new THREE.RingGeometry(RIVAL_BALL_RADIUS * 1.08, RIVAL_BALL_RADIUS * 1.48, 24))
};

const PARTICLE_POOL_SIZE = 128;
const PARTICLE_MESH_POOL = [];
for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffea00,
    transparent: true,
    opacity: 1.0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false
  });
  mat.userData = { keepAlive: true };
  const mesh = new THREE.Mesh(SHARED_GEOS.particle, mat);
  mesh.userData = { keepAlive: true };
  PARTICLE_MESH_POOL.push(mesh);
}

const SHOCKWAVE_POOL_SIZE = 24;
const SHOCKWAVE_MESH_POOL = [];
for (let i = 0; i < SHOCKWAVE_POOL_SIZE; i++) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffea00,
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false
  });
  mat.userData = { keepAlive: true };
  const ring = new THREE.Mesh(SHARED_GEOS.shockwave, mat);
  ring.rotation.x = -Math.PI / 2;
  ring.userData = { keepAlive: true };
  SHOCKWAVE_MESH_POOL.push(ring);
}

const STAR_COIN_POOL_SIZE = 24;
const STAR_COIN_MESH_POOL = [];
const STAR_COIN_MAT = new THREE.MeshStandardMaterial({
  color: 0xffd700,
  emissive: 0xffab00,
  emissiveIntensity: 0.45,
  metalness: 1.0,
  roughness: 0.15
});
STAR_COIN_MAT.userData = { keepAlive: true };
for (let i = 0; i < STAR_COIN_POOL_SIZE; i++) {
  const coin = new THREE.Mesh(SHARED_GEOS.starCoin, STAR_COIN_MAT);
  coin.rotation.x = Math.PI * 0.5;
  coin.userData = { keepAlive: true };
  STAR_COIN_MESH_POOL.push(coin);
}

// Hidden warm-up anchors so shared particle, shockwave & coin geometries are registered in WebGL at t=0
const warmupParticleAnchor = new THREE.Mesh(
  SHARED_GEOS.particle,
  new THREE.MeshBasicMaterial({ visible: false })
);
warmupParticleAnchor.userData = { keepAlive: true };
warmupParticleAnchor.material.userData = { keepAlive: true };
scene.add(warmupParticleAnchor);

const warmupShockwaveAnchor = new THREE.Mesh(
  SHARED_GEOS.shockwave,
  new THREE.MeshBasicMaterial({ visible: false })
);
warmupShockwaveAnchor.userData = { keepAlive: true };
warmupShockwaveAnchor.material.userData = { keepAlive: true };
scene.add(warmupShockwaveAnchor);

const warmupCoinAnchor = new THREE.Mesh(SHARED_GEOS.starCoin, STAR_COIN_MAT);
warmupCoinAnchor.visible = false;
warmupCoinAnchor.userData = { keepAlive: true };
scene.add(warmupCoinAnchor);

// Deep Dispose Helper for Scene Rebuilds
function disposeObject3D(obj) {
  if (!obj) return;
  obj.traverse((child) => {
    if (child.userData && child.userData.keepAlive) return;
    if (child.geometry && (!child.geometry.userData || !child.geometry.userData.keepAlive)) {
      child.geometry.dispose();
    }
    if (child.material) {
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m) => {
        if (!m || (m.userData && m.userData.keepAlive)) return;
        if (m.map && (!m.map.userData || !m.map.userData.keepAlive)) {
          m.map.dispose();
        }
        m.dispose();
      });
    }
  });
}

function clearThreeGroup(grp) {
  while (grp.children.length > 0) {
    const child = grp.children[0];
    grp.remove(child);
    disposeObject3D(child);
  }
}

// Game State
let currentWorld = 0;
let raceFinished = false;
let playerFinishRank = 1;
let playerLostRace = false;
let finishedRacerCount = 0;
let playerFinished = false;
let playerFinishOrder = 0;
let podiumOrbitAngle = 0;
let hitStopTimer = 0;
let steerGuideHidden = false;

// Score, Combo, Cooldowns & Rainbow Fever State
let playerScore = 0;
let comboCount = 0;
let comboTimer = 0;
let totalBumperHits = 0;
let feverMeter = 0; // 0..100
let savedFeverMeterBeforeBoost = 18;
let rainbowFeverTimer = 0;
let rainbowFeverDuration = 5.0;
let magnetTimer = 0;
let multiballTimer = 0;
let tableQuakeAnimTimer = 0;

// Power Pedal Cooldowns & Active Durations (Two-Phase Visuals: Gold Active Ring -> Dark Cooldown Sweep)
const MAGNET_ACTIVE_DURATION = 4.5;
const MAGNET_COOLDOWN_MAX = 9.0;
const MULTIBALL_ACTIVE_DURATION = 7.2;
const MULTIBALL_COOLDOWN_MAX = 15.0;
const QUAKE_ACTIVE_DURATION = 0.45;
const QUAKE_COOLDOWN_MAX = 7.0;
let magnetCooldown = 0;
let multiballCooldown = 0;
let tiltQuakeCooldown = 0;

let flipperActiveTimer = 0; // Genuine flipper/plunger play window (100% scoring, combo & Fever charge)
let manualActiveTimer = 0; // Combined active window (pedal-only hits score 40% with no combo/Fever charge)
let plungerAnimCompression = 0;
let feverLightBoost = 0;

// Multi-Touch & Keyboard Flipper State (Never gets stuck up!)
const leftActivePointers = new Set();
const rightActivePointers = new Set();
let leftKeyHeld = false;
let rightKeyHeld = false;

const flipperState = {
  leftDown: false,
  rightDown: false,
  leftTimer: 0,
  rightTimer: 0,
  leftAngle: 0.42,
  rightAngle: -0.42,
  prevLeftAngle: 0.42,
  prevRightAngle: -0.42,
  leftOmega: 0,
  rightOmega: 0,
  leftStrikeCooldown: 0,
  rightStrikeCooldown: 0
};

function syncFlipperHeldState() {
  flipperState.leftDown = leftKeyHeld || leftActivePointers.size > 0;
  flipperState.rightDown = rightKeyHeld || rightActivePointers.size > 0;
  if (DOM.btnFlipperLeft) {
    DOM.btnFlipperLeft.classList.toggle('pedal-pressed', flipperState.leftDown);
  }
  if (DOM.btnFlipperRight) {
    DOM.btnFlipperRight.classList.toggle('pedal-pressed', flipperState.rightDown);
  }
}

let leftFlipperPivot = null;
let rightFlipperPivot = null;
let upperLeftFlipperPivot = null;
let upperRightFlipperPivot = null;
let plungerMeshGroup = null;
let rainbowShieldBar = null;
let magnetVortexGroup = null;
let cabinetTrimMaterials = [];

// Dynamic Table Entities
let playerBalls = [];
let rivalBalls = [];
let mushroomBumpers = [];
let starTargets = [];
let slingshots = [];
let rampRails = [];
let particles3D = [];
let shockwaves3D = [];
let flyingCoins3D = [];

// Camera Trauma (Additive trauma in [0, 1] with exponential decay, applied AFTER smoothing & lookAt)
const camTrauma = {
  trauma: 0,
  shake: 0,
  fovKick: 0,
  rollKick: 0,
  zoomKick: 0,
  baseX: -0.65,
  baseY: 44.8,
  baseZ: 24.4,
  initialized: false
};

function addTrauma(amt, allowSubtle = false) {
  if (!allowSubtle) return;
  camTrauma.trauma = Math.min(0.18, camTrauma.trauma + amt * 0.25);
  camTrauma.shake = camTrauma.trauma;
}

// Cached HUD state to avoid redundant DOM writes
const hudCache = {
  progressWidth: '',
  playerLeft: '',
  rivalLefts: ['', '', '', ''],
  rankEmoji: '',
  rankClass: '',
  starsEarned: -1,
  feverWidth: '',
  feverActive: false,
  feverEmoji: ''
};

// Visual Feedback Helpers
let toastTimeout = null;
function showRaceToast(emojis) {
  if (!DOM.raceToast) return;
  DOM.raceToast.textContent = emojis;
  DOM.raceToast.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    DOM.raceToast.classList.add('hidden');
  }, 1150);
}

let impactOverlayTimeout = null;
function triggerImpactScreenEffect(modeClass, badgeEmoji) {
  if (!DOM.impactFlashOverlay || !DOM.impactBadgeBurst) return;
  DOM.impactFlashOverlay.className = `impact-flash-overlay ${modeClass}`;
  DOM.impactBadgeBurst.textContent = badgeEmoji || '💥';
  DOM.impactBadgeBurst.classList.remove('hidden');

  clearTimeout(impactOverlayTimeout);
  impactOverlayTimeout = setTimeout(() => {
    DOM.impactFlashOverlay.className = 'impact-flash-overlay';
    DOM.impactBadgeBurst.classList.add('hidden');
  }, 220);
}

function hideSteerGuide() {
  if (steerGuideHidden) return;
  steerGuideHidden = true;
  if (DOM.steerGuide) DOM.steerGuide.classList.add('hidden');
}

// Create High-Contrast Arcade Playfield CanvasTexture so Directional Shadows & Portraits Pop
function createPlayfieldCanvasTexture(cfg) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 1024;
  const ctx = c.getContext('2d');

  const baseHex = '#' + cfg.tableFloorHex.toString(16).padStart(6, '0');
  const accentHex = '#' + cfg.tableAccentHex.toString(16).padStart(6, '0');
  const railHex = '#' + cfg.railHex.toString(16).padStart(6, '0');

  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1024);
  bgGrad.addColorStop(0, accentHex);
  bgGrad.addColorStop(0.5, baseHex);
  bgGrad.addColorStop(1, accentHex);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 512, 1024);

  // Light cream/pastel inner playfield panels that catch crisp shadows from bumpers & balls
  ctx.fillStyle = 'rgba(255, 255, 255, 0.36)';
  ctx.beginPath();
  ctx.roundRect(36, 48, 376, 910, 48);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.26)';
  ctx.lineWidth = 3;
  for (let y = 96; y < 960; y += 64) {
    ctx.beginPath();
    ctx.moveTo(42, y);
    ctx.lineTo(406, y);
    ctx.stroke();
  }

  const rainbowCss = ['#ff1744', '#ff9100', '#ffea00', '#00e676', '#00b0ff', '#d500f9'];
  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = rainbowCss[i];
    ctx.lineWidth = 6;
    const cy = 780 - i * 42;
    ctx.beginPath();
    ctx.moveTo(165, cy + 22);
    ctx.lineTo(224, cy);
    ctx.lineTo(283, cy + 22);
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255, 234, 0, 0.28)';
  ctx.fillRect(424, 60, 64, 900);
  ctx.strokeStyle = railHex;
  ctx.lineWidth = 4;
  ctx.strokeRect(36, 48, 376, 910);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAniso;
  return tex;
}

// Create a 3D Metallic Critter Pinball using Shared Geometries (Zero Geo Leak on Multiball!)
function createCritterPinballMesh(cfg, isPlayerBall, isMultiball = false) {
  const root = new THREE.Group();

  const radius = isPlayerBall ? BALL_RADIUS : RIVAL_BALL_RADIUS;
  const sphereGroup = new THREE.Group();
  root.add(sphereGroup);

  const ballMat = new THREE.MeshStandardMaterial({
    color: isMultiball ? 0xffea00 : cfg.colorHex,
    emissive: isMultiball ? 0xff6d00 : cfg.colorHex,
    emissiveIntensity: isPlayerBall ? 0.14 : 0.08,
    metalness: 0.82,
    roughness: 0.12
  });
  const sphereMesh = new THREE.Mesh(
    isPlayerBall ? SHARED_GEOS.playerSphere : SHARED_GEOS.rivalSphere,
    ballMat
  );
  sphereMesh.castShadow = true;
  sphereMesh.receiveShadow = true;
  sphereGroup.add(sphereMesh);

  const bandMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: cfg.secondaryHex,
    emissiveIntensity: 0.25,
    metalness: 0.88,
    roughness: 0.1
  });
  const bandMesh = new THREE.Mesh(
    isPlayerBall ? SHARED_GEOS.playerBand : SHARED_GEOS.rivalBand,
    bandMat
  );
  sphereGroup.add(bandMesh);

  // Critter Portrait Medallion angled toward the elevated camera so it appears circular!
  const medallionGroup = new THREE.Group();
  medallionGroup.position.set(0, radius + 0.65, 0);
  medallionGroup.rotation.x = -0.62;
  root.add(medallionGroup);

  const rimMat = new THREE.MeshStandardMaterial({
    color: isPlayerBall ? 0xffd54f : 0xffffff,
    emissive: isPlayerBall ? 0xffab00 : cfg.colorHex,
    emissiveIntensity: 0.25,
    metalness: 0.65,
    roughness: 0.18
  });
  const rimTorus = new THREE.Mesh(
    isPlayerBall ? SHARED_GEOS.playerRim : SHARED_GEOS.rivalRim,
    rimMat
  );
  rimTorus.castShadow = true;
  medallionGroup.add(rimTorus);

  const faceGeo = isPlayerBall ? SHARED_GEOS.playerFace : SHARED_GEOS.rivalFace;
  const faceMat = new THREE.MeshBasicMaterial({
    map: critterTextures[cfg.id] || critterTextures.dogday,
    side: THREE.DoubleSide
  });
  const faceFront = new THREE.Mesh(faceGeo, faceMat);
  faceFront.position.z = 0.03;
  const faceBack = new THREE.Mesh(faceGeo, faceMat);
  faceBack.position.z = -0.03;
  faceBack.rotation.y = Math.PI;
  medallionGroup.add(faceFront, faceBack);

  // Orbiting 3D Dizzy Stars Halo (shown when rival is stunned by Table Tilt Quake or Clash!)
  const dizzyHalo = new THREE.Group();
  dizzyHalo.position.set(0, radius + 1.35, 0);
  dizzyHalo.visible = false;
  if (!createCritterPinballMesh._sharedDizzyStarMat) {
    const m = new THREE.MeshBasicMaterial({ color: 0xffea00 });
    m.userData.keepAlive = true;
    createCritterPinballMesh._sharedDizzyStarMat = m;
  }
  const starMat = createCritterPinballMesh._sharedDizzyStarMat;
  for (let i = 0; i < 3; i++) {
    const st = new THREE.Mesh(SHARED_GEOS.particle, starMat);
    const ang = (i * Math.PI * 2) / 3;
    st.position.set(Math.cos(ang) * 0.85, 0, Math.sin(ang) * 0.85);
    dizzyHalo.add(st);
  }
  root.add(dizzyHalo);

  // Soft dark contact shadow disc + neon ring under the pinball
  const contactShadow = new THREE.Mesh(
    isPlayerBall ? SHARED_GEOS.playerShadow : SHARED_GEOS.rivalShadow,
    new THREE.MeshBasicMaterial({
      color: 0x090418,
      transparent: true,
      opacity: 0.42
    })
  );
  contactShadow.rotation.x = -Math.PI / 2;
  contactShadow.position.y = -radius + 0.04;
  root.add(contactShadow);

  const haloMat = new THREE.MeshBasicMaterial({
    color: isMultiball ? 0x00e676 : isPlayerBall ? 0xffea00 : cfg.colorHex,
    transparent: true,
    opacity: isPlayerBall ? 0.78 : 0.48,
    side: THREE.DoubleSide
  });
  const haloRing = new THREE.Mesh(
    isPlayerBall ? SHARED_GEOS.playerHalo : SHARED_GEOS.rivalHalo,
    haloMat
  );
  haloRing.rotation.x = -Math.PI / 2;
  haloRing.position.y = -radius + 0.06;
  root.add(haloRing);

  return {
    root,
    sphereGroup,
    medallionGroup,
    dizzyHalo,
    haloRing,
    ballMat,
    radius
  };
}

// Create a 3D Mushroom Pop Bumper with Cast Shadow & Contact Shadow
function createMushroomBumperMesh(colorHex, radius = 1.55) {
  const root = new THREE.Group();

  const shadowDisc = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 1.28, 24),
    new THREE.MeshBasicMaterial({
      color: 0x0b051d,
      transparent: true,
      opacity: 0.36
    })
  );
  shadowDisc.rotation.x = -Math.PI / 2;
  shadowDisc.position.y = 0.03;
  root.add(shadowDisc);

  const skirtMat = new THREE.MeshBasicMaterial({
    color: colorHex,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide
  });
  const skirtRing = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.78, radius * 1.24, 28),
    skirtMat
  );
  skirtRing.rotation.x = -Math.PI / 2;
  skirtRing.position.y = 0.06;
  root.add(skirtRing);

  const stemMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.5, radius * 0.65, 1.15, 18),
    new THREE.MeshStandardMaterial({ color: 0xf5f5f5, metalness: 0.85, roughness: 0.14 })
  );
  stemMesh.position.y = 0.58;
  stemMesh.castShadow = true;
  stemMesh.receiveShadow = true;
  root.add(stemMesh);

  const capMat = new THREE.MeshStandardMaterial({
    color: colorHex,
    emissive: colorHex,
    emissiveIntensity: 0.2,
    metalness: 0.28,
    roughness: 0.22
  });
  const capDome = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.6),
    capMat
  );
  capDome.position.y = 0.92;
  capDome.castShadow = true;
  capDome.receiveShadow = true;
  root.add(capDome);

  const ringMesh = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.96, 0.13, 12, 24),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  ringMesh.rotation.x = Math.PI / 2;
  ringMesh.position.y = 1.02;
  ringMesh.castShadow = true;
  root.add(ringMesh);

  const crownStar = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.48, 0),
    new THREE.MeshStandardMaterial({
      color: 0xffea00,
      emissive: 0xffab00,
      emissiveIntensity: 0.35,
      metalness: 0.7,
      roughness: 0.15
    })
  );
  crownStar.position.y = 2.25;
  crownStar.castShadow = true;
  root.add(crownStar);

  return {
    root,
    capMat,
    skirtMat,
    crownStar,
    baseColor: colorHex
  };
}

// Create a 3D Pinball Flipper Bat (pivots around (0,0,0))
function createFlipperMesh(length, isLeft, colorHex) {
  const pivotGroup = new THREE.Group();
  const dir = isLeft ? 1 : -1;

  const postMat = new THREE.MeshStandardMaterial({
    color: colorHex,
    emissive: colorHex,
    emissiveIntensity: 0.28,
    metalness: 0.45,
    roughness: 0.2
  });
  const hubMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.25, 18), postMat);
  hubMesh.position.y = 0.62;
  hubMesh.castShadow = true;
  hubMesh.receiveShadow = true;
  pivotGroup.add(hubMesh);

  const armMesh = new THREE.Mesh(
    new THREE.BoxGeometry(length, 1.1, 0.84),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: colorHex,
      emissiveIntensity: 0.22,
      metalness: 0.35,
      roughness: 0.22
    })
  );
  armMesh.position.set(dir * (length * 0.5), 0.58, 0);
  armMesh.castShadow = true;
  armMesh.receiveShadow = true;
  pivotGroup.add(armMesh);

  const tipMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 1.2, 16), postMat);
  tipMesh.position.set(dir * length, 0.6, 0);
  tipMesh.castShadow = true;
  pivotGroup.add(tipMesh);

  const stripeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(length * 0.78, 0.08, 0.36),
    new THREE.MeshBasicMaterial({ color: 0xffea00 })
  );
  stripeMesh.position.set(dir * (length * 0.48), 1.15, 0);
  pivotGroup.add(stripeMesh);

  return {
    pivotGroup,
    postMat,
    armMesh,
    length,
    dir
  };
}

// Create a 3D Spinning Star Target
function createSpinningStarTargetMesh() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffea00,
    emissive: 0xff9100,
    emissiveIntensity: 0.35,
    metalness: 0.65,
    roughness: 0.15
  });
  const c1 = new THREE.Mesh(new THREE.OctahedronGeometry(0.72, 0), mat);
  c1.castShadow = true;
  const c2 = c1.clone();
  c2.rotation.y = Math.PI / 4;
  c2.rotation.z = Math.PI / 4;
  c2.castShadow = true;
  g.add(c1, c2);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.65, 0.98, 20),
    new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -0.65;
  g.add(ring);

  return { group: g, mat };
}

// Pooled 3D Shockwave Ring with Delayed Thin Second Ring (Zero Geometry/Material Allocation!)
function spawnSingleShockwaveRing(x, y, z, colorHex, maxScale, delaySec, isThin) {
  let ring = SHOCKWAVE_MESH_POOL.pop();
  if (!ring) {
    const oldest = shockwaves3D.shift();
    if (oldest) {
      ring = oldest.ring;
    } else {
      return;
    }
  }
  ring.geometry = isThin ? SHARED_GEOS.shockwaveThin : SHARED_GEOS.shockwave;
  ring.material.color.setHex(colorHex);
  ring.material.opacity = isThin ? 0.86 : 0.94;
  ring.scale.set(0.4, 0.4, 1);
  ring.position.set(x, y, z);
  ring.visible = delaySec <= 0;
  if (ring.parent !== dynamicPlayfieldGroup) {
    dynamicPlayfieldGroup.add(ring);
  }
  const maxLife = isThin ? 0.32 : 0.36;
  shockwaves3D.push({
    ring,
    delay: Math.max(0, delaySec || 0),
    isThin: Boolean(isThin),
    life: maxLife,
    maxLife,
    maxScale
  });
}

function spawnShockwave3D(x, y, z, colorHex = 0xffea00, maxScale = 4.2, doubleRing = true) {
  spawnSingleShockwaveRing(x, y, z, colorHex, maxScale, 0, false);
  if (doubleRing) {
    spawnSingleShockwaveRing(x, y + 0.04, z, 0xffffff, maxScale * 1.15, 0.12, true);
  }
}

// Pooled 3D Burst Particles with White Core Flash & Smooth Scale Fade-Out (128-Mesh Pool!)
function spawn3DBurst(x, y, z, colorHex = 0xffea00, count = 12, withCoreFlash = true) {
  const n = Math.min(count, 36);
  if (withCoreFlash) {
    let flashMesh = PARTICLE_MESH_POOL.pop();
    if (!flashMesh) {
      const oldest = particles3D.shift();
      if (oldest) flashMesh = oldest.mesh;
    }
    if (flashMesh) {
      flashMesh.material.color.setHex(0xffffff);
      flashMesh.material.opacity = 1.0;
      flashMesh.scale.setScalar(2.35);
      flashMesh.position.set(x, y + 0.15, z);
      if (flashMesh.parent !== dynamicPlayfieldGroup) {
        dynamicPlayfieldGroup.add(flashMesh);
      }
      particles3D.push({
        mesh: flashMesh,
        vx: 0,
        vy: 1.5,
        vz: 0,
        rvx: 10,
        rvy: 14,
        life: 0.14,
        maxLife: 0.14,
        isCoreFlash: true
      });
    }
  }

  for (let i = 0; i < n; i++) {
    let mesh = PARTICLE_MESH_POOL.pop();
    if (!mesh) {
      const oldest = particles3D.shift();
      if (oldest) {
        mesh = oldest.mesh;
      } else {
        return;
      }
    }
    const col = i % 3 === 0 ? 0xffffff : colorHex;
    mesh.material.color.setHex(col);
    mesh.material.opacity = 1.0;
    mesh.scale.setScalar(1.0);
    mesh.position.set(x, y, z);
    if (mesh.parent !== dynamicPlayfieldGroup) {
      dynamicPlayfieldGroup.add(mesh);
    }
    const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
    const speed = 7 + Math.random() * 14;
    const maxLife = 0.4 + Math.random() * 0.24;
    particles3D.push({
      mesh,
      vx: Math.cos(angle) * speed,
      vy: 6 + Math.random() * 11,
      vz: Math.sin(angle) * speed,
      rvx: (Math.random() - 0.5) * 16,
      rvy: (Math.random() - 0.5) * 16,
      life: maxLife,
      maxLife,
      isCoreFlash: false
    });
  }
}

// Reusable temporaries for Flying Star Coins & Quaternion Rolling
const _coinWorldStart = new THREE.Vector3();
const _coinNdcVec = new THREE.Vector3();
const _coinCamDir = new THREE.Vector3();
const _coinTargetWorld = new THREE.Vector3();
const _rollAxis = new THREE.Vector3();
const _rollQuat = new THREE.Quaternion();

function getPlayerMarkerWorldPosition(outVec) {
  const W = window.innerWidth || 1280;
  const H = window.innerHeight || 800;
  let ndcX = 0;
  let ndcY = 0.82;
  if (DOM.playerMarker) {
    const rect = DOM.playerMarker.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const cx = rect.left + rect.width * 0.5;
      const cy = rect.top + rect.height * 0.5;
      ndcX = (cx / W) * 2 - 1;
      ndcY = -(cy / H) * 2 + 1;
    }
  }
  _coinNdcVec.set(ndcX, ndcY, 0.5).unproject(camera);
  _coinCamDir.subVectors(_coinNdcVec, camera.position).normalize();
  return outVec.copy(camera.position).addScaledVector(_coinCamDir, 8.0);
}

function pulsePlayerMarkerBump() {
  if (!DOM.playerMarker) return;
  DOM.playerMarker.classList.add('marker-bump');
  clearTimeout(DOM.playerMarker._bumpTimer);
  DOM.playerMarker._bumpTimer = setTimeout(() => {
    if (DOM.playerMarker) DOM.playerMarker.classList.remove('marker-bump');
  }, 190);
}

// Spawn Pooled 3D Golden Flying Star Coins (Pops up with vy ~ 9, spins, follows quadratic Bezier over 0.55s to #playerMarker)
function spawnFlyingStarCoins(localX, localY, localZ, count = 3) {
  const n = Math.min(count, 12);
  _coinWorldStart.set(localX, localY, localZ);
  tableGroup.localToWorld(_coinWorldStart);

  for (let i = 0; i < n; i++) {
    let coin = STAR_COIN_MESH_POOL.pop();
    if (!coin) {
      const oldest = flyingCoins3D.shift();
      if (oldest) {
        coin = oldest.mesh;
      } else {
        return;
      }
    }
    const spreadAng = (Math.PI * 2 * i) / Math.max(1, n) + (Math.random() - 0.5) * 0.4;
    const spreadRad = 1.6 + Math.random() * 1.4;
    const vyPop = 9.0 + Math.random() * 2.2;
    const duration = 0.55;

    // P0 is world spawn position; P1 incorporates the initial upward pop (vy ~ 9) & radial spread
    const p0x = _coinWorldStart.x;
    const p0y = _coinWorldStart.y;
    const p0z = _coinWorldStart.z;
    const p1x = p0x + Math.cos(spreadAng) * spreadRad;
    const p1y = p0y + vyPop * (duration * 0.55);
    const p1z = p0z + Math.sin(spreadAng) * spreadRad;

    coin.position.set(p0x, p0y, p0z);
    coin.scale.setScalar(1.0);
    coin.rotation.set(Math.PI * 0.5, i * 0.9, 0);
    const delay = i * 0.045;
    coin.visible = delay <= 0;
    if (coin.parent !== scene) {
      scene.add(coin);
    }

    flyingCoins3D.push({
      mesh: coin,
      p0x,
      p0y,
      p0z,
      p1x,
      p1y,
      p1z,
      vyPop,
      delay,
      elapsed: 0,
      duration
    });
  }
}

function recycleAllPooledEffects() {
  while (shockwaves3D.length > 0) {
    const sw = shockwaves3D.pop();
    if (sw && sw.ring) {
      dynamicPlayfieldGroup.remove(sw.ring);
      sw.ring.visible = true;
      sw.ring.scale.set(1, 1, 1);
      sw.ring.material.opacity = 0.94;
      if (!SHOCKWAVE_MESH_POOL.includes(sw.ring)) {
        SHOCKWAVE_MESH_POOL.push(sw.ring);
      }
    }
  }
  while (particles3D.length > 0) {
    const p = particles3D.pop();
    if (p && p.mesh) {
      dynamicPlayfieldGroup.remove(p.mesh);
      p.mesh.visible = true;
      p.mesh.scale.setScalar(1.0);
      p.mesh.material.opacity = 1.0;
      if (!PARTICLE_MESH_POOL.includes(p.mesh)) {
        PARTICLE_MESH_POOL.push(p.mesh);
      }
    }
  }
  while (flyingCoins3D.length > 0) {
    const fc = flyingCoins3D.pop();
    if (fc && fc.mesh) {
      scene.remove(fc.mesh);
      fc.mesh.visible = true;
      fc.mesh.scale.setScalar(1.0);
      if (!STAR_COIN_MESH_POOL.includes(fc.mesh)) {
        STAR_COIN_MESH_POOL.push(fc.mesh);
      }
    }
  }
}

// Build the Complete 3D Tilted Pinball Machine & Playfield for Stage `worldIdx`
function buildPinballTableWorld(worldIdx) {
  clearTimeout(finishPinballTournament._modalTimer);
  currentWorld = ((worldIdx % CRITTERS.length) + CRITTERS.length) % CRITTERS.length;
  const cfg = CRITTERS[currentWorld];

  raceFinished = false;
  playerFinishRank = 1;
  playerLostRace = false;
  finishedRacerCount = 0;
  podiumOrbitAngle = 0;
  hitStopTimer = 0;

  playerScore = 0;
  comboCount = 0;
  comboTimer = 0;
  totalBumperHits = 0;
  feverMeter = 18;
  savedFeverMeterBeforeBoost = 18;
  rainbowFeverTimer = 0;
  rainbowFeverDuration = 5.0;
  magnetTimer = 0;
  multiballTimer = 0;
  tableQuakeAnimTimer = 0;
  magnetCooldown = 0;
  multiballCooldown = 0;
  tiltQuakeCooldown = 0;
  flipperActiveTimer = 0;
  manualActiveTimer = 0;
  plungerAnimCompression = 0;
  feverLightBoost = 0;

  tableGroup.rotation.set(0.16, 0, 0);
  tableGroup.position.set(0, 0, 0);

  leftActivePointers.clear();
  rightActivePointers.clear();
  leftKeyHeld = false;
  rightKeyHeld = false;
  syncFlipperHeldState();
  flipperState.leftTimer = 0;
  flipperState.rightTimer = 0;
  flipperState.leftAngle = 0.42;
  flipperState.rightAngle = -0.42;
  flipperState.prevLeftAngle = 0.42;
  flipperState.prevRightAngle = -0.42;
  flipperState.leftOmega = 0;
  flipperState.rightOmega = 0;
  flipperState.leftStrikeCooldown = 0;
  flipperState.rightStrikeCooldown = 0;

  camTrauma.trauma = 0;
  camTrauma.shake = 0;
  camTrauma.fovKick = 0;
  camTrauma.rollKick = 0;
  camTrauma.zoomKick = 0;
  camTrauma.initialized = false;

  recycleAllPooledEffects();
  clearThreeGroup(staticTableGroup);
  clearThreeGroup(dynamicPlayfieldGroup);

  playerBalls = [];
  rivalBalls = [];
  mushroomBumpers = [];
  starTargets = [];
  slingshots = [];
  rampRails = [];
  cabinetTrimMaterials = [];
  magnetVortexGroup = null;

  scene.background.setHex(cfg.skyTopHex);
  scene.fog.color.setHex(cfg.skyTopHex);
  updateSkyBackdrop(cfg.skyTopHex, cfg.skyBotHex);
  feverPointLight.color.setHex(cfg.secondaryHex);
  feverPointLight.intensity = 48;

  // 1. Playfield Board with Bright Arcade CanvasTexture & Low Metalness (High Shadow Contrast!)
  const boardW = TABLE_HALF_W * 2 + 1.2;
  const boardLen = TABLE_BOT_Z - TABLE_TOP_Z + 2.4;
  const centerZ = (TABLE_TOP_Z + TABLE_BOT_Z) * 0.5;

  const playfieldTex = createPlayfieldCanvasTexture(cfg);
  const boardMesh = new THREE.Mesh(
    new THREE.BoxGeometry(boardW, 1.2, boardLen),
    new THREE.MeshStandardMaterial({
      map: playfieldTex,
      color: 0xffffff,
      metalness: 0.04,
      roughness: 0.68
    })
  );
  boardMesh.position.set(0, -0.6, centerZ);
  boardMesh.receiveShadow = true;
  staticTableGroup.add(boardMesh);

  // Giant Center Critter Medallion Emblem inlaid on the Playfield Floor
  const emblemRing = new THREE.Mesh(
    new THREE.RingGeometry(2.9, 3.55, 36),
    new THREE.MeshStandardMaterial({
      color: cfg.railHex,
      roughness: 0.4,
      metalness: 0.2,
      side: THREE.DoubleSide
    })
  );
  emblemRing.rotation.x = -Math.PI / 2;
  emblemRing.position.set(-0.8, 0.02, 3.2);
  emblemRing.receiveShadow = true;
  staticTableGroup.add(emblemRing);

  const emblemDisc = new THREE.Mesh(
    new THREE.CircleGeometry(2.88, 36),
    new THREE.MeshStandardMaterial({
      map: critterTextures[cfg.id],
      roughness: 0.45,
      metalness: 0.05
    })
  );
  emblemDisc.rotation.x = -Math.PI / 2;
  emblemDisc.position.set(-0.8, 0.025, 3.2);
  emblemDisc.receiveShadow = true;
  staticTableGroup.add(emblemDisc);

  // 2. Outer Pinball Cabinet Side Walls & Top Rebound Arch (Cast Crisp Shadows across Board!)
  const wallMat = new THREE.MeshStandardMaterial({
    color: cfg.cabinetWallHex,
    emissive: cfg.colorHex,
    emissiveIntensity: 0.12,
    metalness: 0.35,
    roughness: 0.28
  });
  const trimMat = new THREE.MeshStandardMaterial({
    color: cfg.railHex,
    emissive: cfg.railHex,
    emissiveIntensity: 0.32,
    metalness: 0.55,
    roughness: 0.18
  });
  cabinetTrimMaterials.push(trimMat);

  // Left Cabinet Wall
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.8, boardLen), wallMat);
  leftWall.position.set(-TABLE_HALF_W - 0.5, 1.1, centerZ);
  leftWall.castShadow = true;
  leftWall.receiveShadow = true;
  staticTableGroup.add(leftWall);

  const leftTrim = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, boardLen), trimMat);
  leftTrim.position.set(-TABLE_HALF_W - 0.15, 2.6, centerZ);
  leftTrim.castShadow = true;
  staticTableGroup.add(leftTrim);

  // Right Cabinet Wall
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.8, boardLen), wallMat);
  rightWall.position.set(TABLE_HALF_W + 0.5, 1.1, centerZ);
  rightWall.castShadow = true;
  rightWall.receiveShadow = true;
  staticTableGroup.add(rightWall);

  const rightTrim = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, boardLen), trimMat);
  rightTrim.position.set(TABLE_HALF_W + 0.15, 2.6, centerZ);
  rightTrim.castShadow = true;
  staticTableGroup.add(rightTrim);

  // Top Cabinet Backbox Header & Curved Arch
  const topWall = new THREE.Mesh(new THREE.BoxGeometry(boardW + 1.1, 3.2, 1.2), wallMat);
  topWall.position.set(0, 1.4, TABLE_TOP_Z - 0.4);
  topWall.castShadow = true;
  topWall.receiveShadow = true;
  staticTableGroup.add(topWall);

  // Glowing Arcade Backbox Marquee Lights at Top of Table
  for (let i = 0; i < 9; i++) {
    const bulbMat = new THREE.MeshBasicMaterial({
      color: RAINBOW_HEX[i % RAINBOW_HEX.length]
    });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.42, 14, 14), bulbMat);
    bulb.position.set(-9.2 + i * 2.3, 3.15, TABLE_TOP_Z - 0.25);
    staticTableGroup.add(bulb);
  }

  // Shooter Lane Divider Wall (separates right plunger lane from main playfield up to z = -13.5)
  const shooterDividerLen = 27.5;
  const shooterDivider = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 1.9, shooterDividerLen),
    trimMat
  );
  shooterDivider.position.set(SHOOTER_WALL_X, 0.95, 0.8);
  shooterDivider.castShadow = true;
  shooterDivider.receiveShadow = true;
  staticTableGroup.add(shooterDivider);

  // 3. Spring Plunger Mechanism in Right Shooter Lane (x = 9.5, z = 13.8)
  plungerMeshGroup = new THREE.Group();
  plungerMeshGroup.position.set(9.5, 0.7, 13.8);
  const plungerRod = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.28, 3.2, 14),
    new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.88, roughness: 0.12 })
  );
  plungerRod.rotation.x = Math.PI / 2;
  plungerRod.castShadow = true;
  const plungerHead = new THREE.Mesh(
    new THREE.CylinderGeometry(0.68, 0.68, 0.55, 18),
    new THREE.MeshStandardMaterial({
      color: 0xffea00,
      emissive: 0xff6d00,
      emissiveIntensity: 0.35,
      metalness: 0.5,
      roughness: 0.2
    })
  );
  plungerHead.rotation.x = Math.PI / 2;
  plungerHead.position.z = -1.5;
  plungerHead.castShadow = true;
  plungerMeshGroup.add(plungerRod, plungerHead);
  staticTableGroup.add(plungerMeshGroup);

  // 4. Lower Inlane Guide Walls & Rainbow Auto-Save Shield Bar
  const leftGuide = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.8, 0.58), trimMat);
  leftGuide.position.set(-7.3, 0.9, 10.6);
  leftGuide.rotation.y = -0.52;
  leftGuide.castShadow = true;
  leftGuide.receiveShadow = true;
  staticTableGroup.add(leftGuide);

  const rightGuide = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.8, 0.58), trimMat);
  rightGuide.position.set(5.6, 0.9, 10.6);
  rightGuide.rotation.y = 0.52;
  rightGuide.castShadow = true;
  rightGuide.receiveShadow = true;
  staticTableGroup.add(rightGuide);

  rainbowShieldBar = new THREE.Mesh(
    new THREE.BoxGeometry(10.8, 0.55, 0.55),
    new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.55,
      transparent: true,
      opacity: 0.82
    })
  );
  rainbowShieldBar.position.set(-0.8, 0.45, 14.55);
  rainbowShieldBar.castShadow = true;
  staticTableGroup.add(rainbowShieldBar);

  // 5. Left & Right 3D Flippers + Upper Mini-Flippers
  const leftFlipObj = createFlipperMesh(4.15, true, 0xff4081);
  leftFlipObj.pivotGroup.position.set(-4.85, 0.1, 12.4);
  leftFlipObj.pivotGroup.rotation.y = -flipperState.leftAngle;
  staticTableGroup.add(leftFlipObj.pivotGroup);
  leftFlipperPivot = leftFlipObj;

  const rightFlipObj = createFlipperMesh(4.15, false, 0x00e5ff);
  rightFlipObj.pivotGroup.position.set(3.25, 0.1, 12.4);
  rightFlipObj.pivotGroup.rotation.y = -flipperState.rightAngle;
  staticTableGroup.add(rightFlipObj.pivotGroup);
  rightFlipperPivot = rightFlipObj;

  const upLeftObj = createFlipperMesh(2.55, true, 0xffea00);
  upLeftObj.pivotGroup.position.set(-9.6, 0.1, -0.8);
  upLeftObj.pivotGroup.rotation.y = -0.35;
  staticTableGroup.add(upLeftObj.pivotGroup);
  upperLeftFlipperPivot = upLeftObj;

  const upRightObj = createFlipperMesh(2.55, false, 0x69f0ae);
  upRightObj.pivotGroup.position.set(7.6, 0.1, -0.8);
  upRightObj.pivotGroup.rotation.y = 0.35;
  staticTableGroup.add(upRightObj.pivotGroup);
  upperRightFlipperPivot = upRightObj;

  // 6. 7 Giant 3D Mushroom Pop Bumpers in Classic Arcade Formation
  const bumperSpecs = [
    { x: -0.8, z: -12.6, r: 1.55 },
    { x: -5.1, z: -9.8, r: 1.48 },
    { x: 3.5, z: -9.8, r: 1.48 },
    { x: -3.0, z: -5.8, r: 1.52 },
    { x: 1.4, z: -5.8, r: 1.52 },
    { x: -6.1, z: -3.2, r: 1.38 },
    { x: 4.5, z: -3.2, r: 1.38 }
  ];

  bumperSpecs.forEach((spec, idx) => {
    const col = cfg.bumperColors[idx % cfg.bumperColors.length];
    const bObj = createMushroomBumperMesh(col, spec.r);
    bObj.root.position.set(spec.x, 0, spec.z);
    dynamicPlayfieldGroup.add(bObj.root);
    mushroomBumpers.push({
      ...spec,
      meshObj: bObj,
      hitScale: 1.0,
      flashTimer: 0
    });
  });

  // 7. 2 Neon Slingshot Kickers above the Flippers
  const slingSpecs = [
    { x: -5.9, z: 7.4, normalX: 0.82, normalZ: -0.57, color: 0xff4081 },
    { x: 4.3, z: 7.4, normalX: -0.82, normalZ: -0.57, color: 0x00e5ff }
  ];
  slingSpecs.forEach((sl) => {
    const slingMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.15, 1.45, 3),
      new THREE.MeshStandardMaterial({
        color: sl.color,
        emissive: sl.color,
        emissiveIntensity: 0.25,
        metalness: 0.35,
        roughness: 0.22
      })
    );
    slingMesh.position.set(sl.x, 0.72, sl.z);
    slingMesh.castShadow = true;
    slingMesh.receiveShadow = true;
    dynamicPlayfieldGroup.add(slingMesh);
    slingshots.push({
      ...sl,
      radius: 1.25,
      mesh: slingMesh,
      hitScale: 1.0
    });
  });

  // 8. 2 Elevated 3D Neon Ramp Rails (y = 2.55 so balls rolling below NEVER clip through!)
  const rampDefs = [
    { x: -8.2, zStart: 3.2, zEnd: -14.5, color: 0xe040fb },
    { x: 6.4, zStart: 3.2, zEnd: -14.5, color: 0x00e676 }
  ];
  rampDefs.forEach((rd) => {
    const rampLen = Math.abs(rd.zStart - rd.zEnd);
    const rampMidZ = (rd.zStart + rd.zEnd) * 0.5;
    const rampGroup = new THREE.Group();

    const railMat = new THREE.MeshStandardMaterial({
      color: rd.color,
      emissive: rd.color,
      emissiveIntensity: 0.3,
      metalness: 0.35,
      roughness: 0.25,
      transparent: true,
      opacity: 0.86
    });
    const trackStrip = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.22, rampLen), railMat);
    trackStrip.position.set(rd.x, 2.55, rampMidZ);
    trackStrip.rotation.x = 0.06;
    trackStrip.castShadow = true;
    rampGroup.add(trackStrip);

    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0xe0e0e0,
      metalness: 0.8,
      roughness: 0.2
    });
    [-12.5, -5.5, 1.5].forEach((pz) => {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 2.4, 10), pillarMat);
      p.position.set(rd.x, 1.2, pz);
      p.castShadow = true;
      rampGroup.add(p);
    });

    const entryArch = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.16, 10, 20, Math.PI),
      new THREE.MeshStandardMaterial({
        color: 0xffea00,
        emissive: 0xff9100,
        emissiveIntensity: 0.45
      })
    );
    entryArch.position.set(rd.x, 0.2, rd.zStart);
    entryArch.castShadow = true;
    rampGroup.add(entryArch);

    staticTableGroup.add(rampGroup);
    rampRails.push({
      ...rd,
      cooldown: 0
    });
  });

  // 9. 10 Spinning 3D Golden Star Targets across Skill Lanes & Bumper Alleys
  const starCoords = [
    { x: -6.8, z: -16.2 },
    { x: -2.8, z: -17.4 },
    { x: 1.2, z: -17.4 },
    { x: 5.2, z: -16.2 },
    { x: -8.2, z: -6.5 },
    { x: 6.4, z: -6.5 },
    { x: -0.8, z: -8.8 },
    { x: -4.2, z: 1.8 },
    { x: 2.6, z: 1.8 },
    { x: -0.8, z: -1.6 }
  ];
  starCoords.forEach((sc) => {
    const stObj = createSpinningStarTargetMesh();
    stObj.group.position.set(sc.x, 0.9, sc.z);
    dynamicPlayfieldGroup.add(stObj.group);
    starTargets.push({
      x: sc.x,
      z: sc.z,
      group: stObj.group,
      spinVel: 2.8,
      cooldown: 0
    });
  });

  // 9b. 3D Magnet Vortex Field Group at (-0.8, 0.16, -8.5) (Visible while 🧲 Magnet is active!)
  magnetVortexGroup = new THREE.Group();
  magnetVortexGroup.position.set(-0.8, 0.16, -8.5);
  magnetVortexGroup.visible = false;
  [1.6, 2.9, 4.3].forEach((rad, rIdx) => {
    const vRing = new THREE.Mesh(
      new THREE.RingGeometry(rad, rad + 0.22, 32),
      new THREE.MeshBasicMaterial({
        color: rIdx === 1 ? 0xe040fb : 0xb388ff,
        transparent: true,
        opacity: 0.72 - rIdx * 0.14,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    vRing.rotation.x = -Math.PI / 2;
    vRing.position.y = rIdx * 0.04;
    magnetVortexGroup.add(vRing);
  });
  for (let i = 0; i < 6; i++) {
    const orb = new THREE.Mesh(
      SHARED_GEOS.particle,
      new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xb388ff : 0x00e5ff,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending
      })
    );
    const ang = (i * Math.PI * 2) / 6;
    const dist = 2.4 + (i % 2) * 1.1;
    orb.position.set(Math.cos(ang) * dist, 0.35, Math.sin(ang) * dist);
    orb.scale.setScalar(1.25);
    magnetVortexGroup.add(orb);
  }
  dynamicPlayfieldGroup.add(magnetVortexGroup);

  // 10. Spawn Player's Metallic 3D Critter Pinball in the Right Spring Plunger Shooter Lane
  spawnPlayerPinball(false);
  launchPlunger(true);

  // 11. Spawn 4 Active Rival Critter Tournament Pinballs on the Playfield!
  playerFinished = false;
  playerFinishOrder = 0;

  const rivalPool = [
    EXTRA_RIVALS[(currentWorld * 2) % EXTRA_RIVALS.length],
    CRITTERS[(currentWorld + 1) % CRITTERS.length],
    EXTRA_RIVALS[(currentWorld * 2 + 1) % EXTRA_RIVALS.length],
    CRITTERS[(currentWorld + 3) % CRITTERS.length]
  ];

  // Kid-friendly Stage 1-8 difficulty curve: Stage 1 is an easy, joyful 3-star onboarding table (0.76x),
  // scaling progressively across Stages 2-8 up to 1.22x on Hoppy's Champion Table!
  const STAGE_RIVAL_MULT = [0.76, 0.85, 0.92, 0.98, 1.04, 1.10, 1.16, 1.22];
  const stageDiffMult = STAGE_RIVAL_MULT[currentWorld] || 1.0;
  const rivalBaseRates = [44, 38, 32, 26];
  const rivalArchetypes = ['bumper_hunter', 'ramp_sprinter', 'spinner_ace', 'steady_cruiser'];
  const rivalStartPositions = [
    { x: -4.2, z: -11.5, vx: 15, vz: -19 },
    { x: 2.8, z: -11.5, vx: -14, vz: -21 },
    { x: -2.2, z: -4.0, vx: 17, vz: -18 },
    { x: 1.8, z: -4.0, vx: -13, vz: -17 }
  ];

  rivalPool.forEach((rCfg, idx) => {
    const rMesh = createCritterPinballMesh(rCfg, false, false);
    const sp = rivalStartPositions[idx];
    rMesh.root.position.set(sp.x, RIVAL_BALL_RADIUS, sp.z);
    dynamicPlayfieldGroup.add(rMesh.root);

    rivalBalls.push({
      cfg: rCfg,
      meshObj: rMesh,
      archetype: rivalArchetypes[idx],
      aiImpulseTimer: 0.45 + idx * 0.28,
      x: sp.x,
      y: RIVAL_BALL_RADIUS,
      z: sp.z,
      vx: sp.vx,
      vy: 0,
      vz: sp.vz,
      score: 0,
      baseScoreRate: rivalBaseRates[idx] * stageDiffMult,
      dizzyTimer: 0,
      drainWaitTimer: 0,
      finished: false,
      finishOrder: 0
    });
  });

  renderWorldSelector();
  updateHudDom(true);
  updateBoostPedalVisuals();
  updateCameraFraming(0);
}

// Find a Collider-Clear Upper-Playfield Spawn Position for Multiballs (>= 0.35u clearance!)
function findClearMultiballSpawn() {
  const candidates = [
    { x: -0.6, z: -11.2 },
    { x: -2.2, z: -11.2 },
    { x: 1.2, z: -11.2 },
    { x: -0.8, z: -5.8 },
    { x: -2.8, z: -5.8 },
    { x: 1.4, z: -5.8 }
  ];
  const isClear = (cx, cz) => {
    for (let i = 0; i < mushroomBumpers.length; i++) {
      const b = mushroomBumpers[i];
      if (Math.hypot(cx - b.x, cz - b.z) < b.r + BALL_RADIUS + 0.35) return false;
    }
    for (let i = 0; i < starTargets.length; i++) {
      const s = starTargets[i];
      if (Math.hypot(cx - s.x, cz - s.z) < 0.95 + BALL_RADIUS + 0.35) return false;
    }
    for (let i = 0; i < playerBalls.length; i++) {
      const pb = playerBalls[i];
      if (Math.hypot(cx - pb.x, cz - pb.z) < BALL_RADIUS * 2.2) return false;
    }
    return true;
  };
  for (let attempt = 0; attempt < 24; attempt++) {
    const cx = -0.8 + (Math.random() - 0.5) * 6.4;
    const cz = -10.8 + (Math.random() - 0.5) * 4.4;
    if (isClear(cx, cz)) return { x: cx, z: cz };
  }
  for (let i = 0; i < candidates.length; i++) {
    if (isClear(candidates[i].x, candidates[i].z)) return candidates[i];
  }
  return { x: -0.6, z: -11.2 };
}

// Spawn Primary or Multiball Player Pinball
function spawnPlayerPinball(isMultiball = false) {
  const cfg = CRITTERS[currentWorld];
  const meshObj = createCritterPinballMesh(cfg, true, isMultiball);
  const clearSpot = isMultiball ? findClearMultiballSpawn() : { x: 9.45, z: 10.5 };
  const startX = clearSpot.x;
  const startZ = clearSpot.z;
  const startVx = isMultiball ? (Math.random() < 0.5 ? -15 : 15) : 0;
  const startVz = isMultiball ? -22 : 0;

  meshObj.root.position.set(startX, BALL_RADIUS, startZ);
  dynamicPlayfieldGroup.add(meshObj.root);

  const ballObj = {
    meshObj,
    isMultiball,
    x: startX,
    y: BALL_RADIUS,
    z: startZ,
    vx: startVx,
    vy: 0,
    vz: startVz,
    inShooterLane: !isMultiball,
    drainWaitTimer: 0,
    trailAccum: 0
  };
  playerBalls.push(ballObj);
  return ballObj;
}

// Remove Extra Multiballs when `multiballTimer` Expires
function expireExtraMultiballs() {
  for (let i = playerBalls.length - 1; i >= 1; i--) {
    const b = playerBalls[i];
    if (b.isMultiball) {
      spawn3DBurst(b.x, 1.0, b.z, 0x00e676, 6);
      dynamicPlayfieldGroup.remove(b.meshObj.root);
      disposeObject3D(b.meshObj.root);
      playerBalls.splice(i, 1);
    }
  }
}

// Add Points to Player Score & Advance Rainbow Fever Gauge
function addPlayerPoints(basePoints, worldX, worldZ, spawnBurst = true, isManualPlay = true) {
  if (raceFinished || basePoints <= 0) return;

  // Distinguish genuine flipper/plunger play (100% score, builds combo & Fever) vs pedal-only window (40% score, no combo/Fever) vs idle (10% score)
  const hasFlipperActivity = isManualPlay && flipperActiveTimer > 0;
  const hasPedalOnlyActivity = isManualPlay && !hasFlipperActivity && manualActiveTimer > 0;
  const feverMult = rainbowFeverTimer > 0 ? 1.25 : 1.0;
  const comboMult = hasFlipperActivity ? 1.0 + Math.min(0.3, comboCount * 0.025) : 1.0;
  const activityScale = hasFlipperActivity ? 1.0 : hasPedalOnlyActivity ? 0.40 : 0.10;
  const multiballScale = 1.0 / Math.pow(Math.max(1, playerBalls.length), 0.78);

  const pts = Math.max(1, Math.round(basePoints * feverMult * comboMult * activityScale * multiballScale));
  playerScore += pts;

  const targetScore = CRITTERS[currentWorld].targetScore;
  if (!playerFinished && playerScore >= targetScore) {
    playerFinished = true;
    playerFinishOrder = ++finishedRacerCount;
  }

  // Natural Fever charge rate: 0.135 per base point (~45 bumper pops -> 2-3 natural Fevers per table!)
  if (hasFlipperActivity && rainbowFeverTimer <= 0) {
    feverMeter = Math.min(100, feverMeter + basePoints * 0.135 * multiballScale);
    savedFeverMeterBeforeBoost = feverMeter;
    if (feverMeter >= 100) {
      savedFeverMeterBeforeBoost = 18;
      activateRainbowFever(5.0, false);
    }
  }

  if (spawnBurst && worldX !== undefined && worldZ !== undefined) {
    const burstCol =
      rainbowFeverTimer > 0
        ? RAINBOW_HEX[Math.floor(Math.random() * RAINBOW_HEX.length)]
        : CRITTERS[currentWorld].secondaryHex;
    spawn3DBurst(worldX, 1.1, worldZ, burstCol, 10, true);
  }
}

function activateRainbowFever(duration = 5.0, fromPedal = false) {
  if (fromPedal && rainbowFeverTimer <= 0) {
    // Preserve earned natural Fever charge so pressing ⚡ at 80% never wipes it out!
    savedFeverMeterBeforeBoost = Math.max(18, Math.min(94, feverMeter));
  } else if (!fromPedal) {
    savedFeverMeterBeforeBoost = 18;
    playRainbowFeverChimeSfx();
  }
  rainbowFeverDuration = Math.max(duration, rainbowFeverTimer);
  rainbowFeverTimer = Math.max(rainbowFeverTimer, duration);
  feverLightBoost = 18;
  camTrauma.fovKick = 5;
  showRaceToast('🌈🔥✨');
  updateBoostPedalVisuals();
}

function isModalOrRaceFinished() {
  if (raceFinished) return true;
  if (DOM.winModal && !DOM.winModal.classList.contains('hidden')) return true;
  if (DOM.finaleModal && !DOM.finaleModal.classList.contains('hidden')) return true;
  return false;
}

// 2D Circle-vs-Capsule Flipper Collision with Angular Velocity ω·t·L & Static Wall Cradling
function checkAndApplyFlipperCapsuleHit(
  ball,
  isPlayer,
  pivotX,
  pivotZ,
  length,
  dir,
  angleRad,
  omega,
  isLeft,
  extraForgiveness = 0
) {
  const r = ball.meshObj.radius;
  const batRadius = 0.54 + extraForgiveness;
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);
  const tipX = pivotX + dir * length * cosA;
  const tipZ = pivotZ + dir * length * sinA;

  const segDx = tipX - pivotX;
  const segDz = tipZ - pivotZ;
  const segLenSq = segDx * segDx + segDz * segDz || 1;
  const t = Math.max(0, Math.min(1, ((ball.x - pivotX) * segDx + (ball.z - pivotZ) * segDz) / segLenSq));

  const closestX = pivotX + t * segDx;
  const closestZ = pivotZ + t * segDz;
  const dx = ball.x - closestX;
  const dz = ball.z - closestZ;
  const dist = Math.hypot(dx, dz);
  const minDist = r + batRadius;

  if (dist > minDist) return false;

  const nx = dist > 0.0001 ? dx / dist : 0;
  const nz = dist > 0.0001 ? dz / dist : -1;
  // Push ball out ONLY along the contact normal (no underside z-snap!)
  ball.x = closestX + nx * (minDist + 0.04);
  ball.z = closestZ + nz * (minDist + 0.04);

  // Linear velocity of the bat at contact fraction t: v_bat = ω * t * L * n_rot
  const contactRotSpeed = omega * t * length;
  const batVx = -dir * sinA * contactRotSpeed;
  const batVz = dir * cosA * contactRotSpeed;
  const upSweepOmega = isLeft ? -omega : omega;

  // Only strike when |ω| > 4 rad/s sweeping upward and ball is on the top/front face
  if (Math.abs(omega) > 4.0 && upSweepOmega > 4.0 && nz <= 0.25) {
    const vn = ball.vx * nx + ball.vz * nz;
    const eStrike = 0.45;
    const vnReflect = vn < 0 ? -(1 + eStrike) * vn : 0;
    const contactSpeed = Math.abs(omega) * (0.32 + 0.68 * t) * length;
    const strikeSpeed = Math.min(46, 25 + contactSpeed * 0.36 + vnReflect * 0.3);
    const aimSpread = (t - 0.5) * dir * (12 + contactSpeed * 0.14);

    ball.vx = ball.vx * 0.2 + nx * strikeSpeed * 0.28 + aimSpread;
    ball.vz = -Math.max(27, strikeSpeed);
    ball.vy = Math.max(ball.vy, 2.2 + t * 2.0);
    ball.drainWaitTimer = 0;

    const cdKey = isLeft ? 'leftStrikeCooldown' : 'rightStrikeCooldown';
    if (isPlayer && flipperState[cdKey] <= 0) {
      flipperState[cdKey] = 0.12;
      comboCount = Math.min(15, comboCount + 1);
      comboTimer = 3.0;
      addPlayerPoints(18, ball.x, ball.z, true, true);
      spawnShockwave3D(ball.x, 0.6, ball.z, isLeft ? 0xff4081 : 0x00e5ff, 3.0, true);
      addTrauma(0.18);
      playFlipperSnapSfx(isLeft);
    }
  } else {
    // Static or returning bat (|ω| <= 4 rad/s): treat as static wall (e = 0.3) so a held flipper can cradle!
    const relVx = ball.vx - batVx;
    const relVz = ball.vz - batVz;
    const relVn = relVx * nx + relVz * nz;
    if (relVn < 0) {
      const eWall = 0.3;
      ball.vx -= (1 + eWall) * relVn * nx;
      ball.vz -= (1 + eWall) * relVn * nz;
      const tx = -nz;
      const tz = nx;
      const vt = ball.vx * tx + ball.vz * tz;
      ball.vx -= vt * 0.08 * tx;
      ball.vz -= vt * 0.08 * tz;
    }
  }
  return true;
}

// Player Controls: Left Flipper, Right Flipper, Spring Plunger, and 3 Cooldown Power Pedals
function triggerLeftFlipper() {
  if (isModalOrRaceFinished()) return;
  hideSteerGuide();
  flipperActiveTimer = Math.max(flipperActiveTimer, 3.5);
  manualActiveTimer = Math.max(manualActiveTimer, 3.5);
  const canSweepUp = flipperState.leftAngle > -0.45;
  flipperState.leftTimer = 0.16;
  playFlipperSnapSfx(true);

  if (canSweepUp) {
    const snapOmega = -24.0;
    playerBalls.forEach((b) => {
      if (b.inShooterLane) return;
      checkAndApplyFlipperCapsuleHit(b, true, -4.85, 12.4, 4.15, 1, 0.05, snapOmega, true, 0.32);
      checkAndApplyFlipperCapsuleHit(b, true, -9.6, -0.8, 2.55, 1, 0.05, snapOmega * 0.85, true, 0.22);
    });
  }
}

function triggerRightFlipper() {
  if (isModalOrRaceFinished()) return;
  hideSteerGuide();
  flipperActiveTimer = Math.max(flipperActiveTimer, 3.5);
  manualActiveTimer = Math.max(manualActiveTimer, 3.5);
  const canSweepUp = flipperState.rightAngle < 0.45;
  flipperState.rightTimer = 0.16;
  playFlipperSnapSfx(false);

  if (canSweepUp) {
    const snapOmega = 24.0;
    playerBalls.forEach((b) => {
      if (b.inShooterLane) return;
      checkAndApplyFlipperCapsuleHit(b, true, 3.25, 12.4, 4.15, -1, -0.05, snapOmega, false, 0.32);
      checkAndApplyFlipperCapsuleHit(b, true, 7.6, -0.8, 2.55, -1, -0.05, snapOmega * 0.85, false, 0.22);
    });
  }
}

function launchPlunger(silentToast = false) {
  if (!silentToast && isModalOrRaceFinished()) return;
  if (!silentToast) {
    hideSteerGuide();
    flipperActiveTimer = Math.max(flipperActiveTimer, 3.5);
    manualActiveTimer = Math.max(manualActiveTimer, 3.5);
  }
  plungerAnimCompression = 1.0;
  if (!silentToast) {
    playPlungerLaunchSfx();
  }

  // Plunger ONLY acts on balls physically inside the Right Shooter Lane!
  let launchedAny = false;
  playerBalls.forEach((b) => {
    if (b.inShooterLane && b.x >= SHOOTER_WALL_X) {
      b.x = 9.45;
      b.vx = 0;
      b.vz = -46 - Math.random() * 3;
      launchedAny = true;
      spawnShockwave3D(9.45, 0.8, 11.5, 0xffea00, 3.2, true);
    }
  });

  if (!silentToast && launchedAny) {
    addTrauma(0.20);
    showRaceToast('🚀🔮✨');
  }
}

function playPedalReadySfx() {
  playTone(783.99, 'sine', 0.08, 0.11, 1046.5, 0);
  playTone(1046.5, 'triangle', 0.11, 0.12, 1318.5, 0.055);
}

function triggerPedalDeniedVisual(btn) {
  if (!btn) return;
  btn.classList.remove('pedal-denied');
  void btn.offsetWidth;
  btn.classList.add('pedal-denied');
  clearTimeout(btn._deniedTimer);
  btn._deniedTimer = setTimeout(() => {
    if (btn) btn.classList.remove('pedal-denied');
  }, 380);
}

function triggerPedalReadyVisual(btn) {
  if (!btn) return;
  btn.classList.remove('pedal-ready');
  void btn.offsetWidth;
  btn.classList.add('pedal-ready');
  clearTimeout(btn._readyTimer);
  btn._readyTimer = setTimeout(() => {
    if (btn) btn.classList.remove('pedal-ready');
  }, 560);
  playPedalReadySfx();
}

function flashPedalKeyFeedback(btn) {
  if (!btn) return;
  btn.classList.add('pedal-pressed');
  clearTimeout(btn._keyPressTimer);
  btn._keyPressTimer = setTimeout(() => {
    if (btn) btn.classList.remove('pedal-pressed');
  }, 160);
}

let stageElapsedTime = 0;
const pedalCooldownPrev = {
  magnet: false,
  multiball: false,
  quake: false
};

// Power Pedal 0 (Key 1): 🧲 Magnet Flipper & Bumper Vortex (9s Cooldown, 4.5s Active Swirling Vortex!)
function triggerPedalMagnet() {
  if (isModalOrRaceFinished()) return;
  hideSteerGuide();
  if (magnetCooldown > 0) {
    playCooldownDenySfx();
    triggerPedalDeniedVisual(DOM.btnPedalMagnet);
    return;
  }
  manualActiveTimer = Math.max(manualActiveTimer, 1.2);
  magnetCooldown = MAGNET_COOLDOWN_MAX;
  magnetTimer = MAGNET_ACTIVE_DURATION;
  if (magnetVortexGroup) magnetVortexGroup.visible = true;

  flipperState.leftTimer = 0.22;
  flipperState.rightTimer = 0.22;

  playerBalls.forEach((b) => {
    if (b.inShooterLane) {
      b.vz = -45;
    } else {
      b.vx += (-0.8 - b.x) * 1.6;
      b.vz = Math.min(b.vz - 12, -22);
    }
    spawnShockwave3D(b.x, 0.9, b.z, 0xb388ff, 3.8, true);
  });

  addTrauma(0.38);
  camTrauma.fovKick = 4;
  playMagnetPedalSfx();
  showRaceToast('🧲🌪️✨');
  updateBoostPedalVisuals();
}

// Power Pedal 1 (Key 2 / Space): ⚡ Multiball Fever (15s Cooldown, 7.2s Duration, Collider-Clear Spawn!)
function triggerPedalMultiball() {
  if (isModalOrRaceFinished()) return;
  hideSteerGuide();
  if (multiballCooldown > 0) {
    playCooldownDenySfx();
    triggerPedalDeniedVisual(DOM.btnPedalMultiball);
    return;
  }
  manualActiveTimer = Math.max(manualActiveTimer, 1.2);
  multiballCooldown = MULTIBALL_COOLDOWN_MAX;
  multiballTimer = MULTIBALL_ACTIVE_DURATION;
  activateRainbowFever(5.0, true);

  const needed = Math.max(1, 3 - playerBalls.length);
  for (let i = 0; i < needed; i++) {
    if (playerBalls.length < 3) {
      const nb = spawnPlayerPinball(true);
      spawnShockwave3D(nb.x, 1.0, nb.z, 0x00e676, 3.8, true);
    }
  }

  addTrauma(0.50);
  camTrauma.fovKick = 6;
  triggerImpactScreenEffect('bumper-pop', '⚡');
  playMultiballFeverSfx();
  showRaceToast('⚡🔮🌈');
  updateBoostPedalVisuals();
}

// Power Pedal 2 (Key 3): 💥 Table Tilt Quake (7s Cooldown, Physically Rocks 3D Table & Slows Rivals!)
function triggerPedalTiltQuake() {
  if (isModalOrRaceFinished()) return;
  hideSteerGuide();
  if (tiltQuakeCooldown > 0) {
    playCooldownDenySfx();
    triggerPedalDeniedVisual(DOM.btnPedalTiltQuake);
    return;
  }
  manualActiveTimer = Math.max(manualActiveTimer, 1.2);
  tiltQuakeCooldown = QUAKE_COOLDOWN_MAX;
  tableQuakeAnimTimer = QUAKE_ACTIVE_DURATION;
  hitStopTimer = 0.032;
  feverLightBoost = 22;

  mushroomBumpers.forEach((bmp, idx) => {
    bmp.hitScale = 1.48;
    bmp.flashTimer = 0.3;
    if (idx % 2 === 0) {
      spawnShockwave3D(bmp.x, 0.8, bmp.z, bmp.meshObj.baseColor, 4.0, true);
    }
  });
  comboCount = Math.min(15, comboCount + 2);
  comboTimer = 3.0;

  playerBalls.forEach((b) => {
    if (!b.inShooterLane) {
      b.vy = 7.5;
      b.vz = -28 - Math.random() * 6;
      b.vx = (Math.random() - 0.5) * 22;
    }
  });

  rivalBalls.forEach((rb) => {
    rb.dizzyTimer = 2.0;
    rb.vy = 6.5;
  });

  addPlayerPoints(45, -0.8, -7.5, false, true);
  spawn3DBurst(-0.8, 1.3, -7.5, 0xffea00, 26, true);
  addTrauma(0.90);
  camTrauma.rollKick = (Math.random() < 0.5 ? -1 : 1) * 0.12;
  camTrauma.fovKick = 8;
  camTrauma.zoomKick = -1.2;
  triggerImpactScreenEffect('quake-boom', '💥');
  playTiltQuakeSfx();
  showRaceToast('💥🎰🌈');
  updateBoostPedalVisuals();
}

function triggerPedalByIndex(idx) {
  if (idx === 0) triggerPedalMagnet();
  else if (idx === 1) triggerPedalMultiball();
  else if (idx === 2) triggerPedalTiltQuake();
}

// Two-Phase Pedal Visuals: Phase 1 Gold Active Ring (100%->0%), Phase 2 Dark Cooldown Sweep (100%->0% of post-active cooldown!)
function updateBoostPedalVisuals() {
  const applyPedalState = (btn, key, activeTimer, activeMax, cd, cdMax) => {
    if (!btn) return;
    const isActive = activeTimer > 0;
    btn.classList.toggle('active-boost', isActive);
    if (isActive && activeMax > 0) {
      const activePct = Math.round(Math.max(0, Math.min(100, (activeTimer / activeMax) * 100)));
      btn.style.setProperty('--active-pct', `${activePct}%`);
    } else {
      btn.style.removeProperty('--active-pct');
    }

    const hasCd = cd > 0;
    const onCd = hasCd && !isActive;
    btn.classList.toggle('on-cooldown', onCd);
    if (onCd) {
      const postActiveMax = Math.max(0.1, cdMax - activeMax);
      const pct = Math.round(Math.max(0, Math.min(100, (cd / postActiveMax) * 100)));
      btn.style.setProperty('--cd-pct', `${pct}%`);
    } else {
      btn.style.removeProperty('--cd-pct');
    }

    if (pedalCooldownPrev[key] && !hasCd && stageElapsedTime > 0.5) {
      triggerPedalReadyVisual(btn);
    }
    pedalCooldownPrev[key] = hasCd;
  };

  applyPedalState(
    DOM.btnPedalMagnet,
    'magnet',
    magnetTimer,
    MAGNET_ACTIVE_DURATION,
    magnetCooldown,
    MAGNET_COOLDOWN_MAX
  );
  applyPedalState(
    DOM.btnPedalMultiball,
    'multiball',
    multiballTimer,
    MULTIBALL_ACTIVE_DURATION,
    multiballCooldown,
    MULTIBALL_COOLDOWN_MAX
  );
  applyPedalState(
    DOM.btnPedalTiltQuake,
    'quake',
    tableQuakeAnimTimer,
    QUAKE_ACTIVE_DURATION,
    tiltQuakeCooldown,
    QUAKE_COOLDOWN_MAX
  );
}

function isWorldUnlocked(idx) {
  if (idx <= 0) return true;
  return (cupStars[idx - 1] || 0) >= 1;
}

// 0.6s Hold-to-Confirm Helper (Protects Kids from Accidental Mid-Game Restarts or Table Switches!)
function bindHoldConfirmAction(btn, onConfirm, shouldHoldFn) {
  if (!btn) return;
  let holdRaf = 0;
  let holdStart = 0;
  let completedByHold = false;

  const cancelHold = () => {
    if (holdRaf) {
      cancelAnimationFrame(holdRaf);
      holdRaf = 0;
    }
    btn.classList.remove('holding-confirm');
    btn.style.removeProperty('--hold-pct');
  };

  btn.addEventListener('pointerdown', (e) => {
    ensureAudioFromUserGesture();
    completedByHold = false;
    if (!shouldHoldFn()) {
      completedByHold = true;
      onConfirm();
      return;
    }
    cancelHold();
    holdStart = performance.now();
    btn.classList.add('holding-confirm');
    btn.style.setProperty('--hold-pct', '0%');

    const stepHold = (now) => {
      const pct = Math.min(100, ((now - holdStart) / 600) * 100);
      btn.style.setProperty('--hold-pct', `${Math.round(pct)}%`);
      if (pct >= 100) {
        cancelHold();
        completedByHold = true;
        onConfirm();
      } else {
        holdRaf = requestAnimationFrame(stepHold);
      }
    };
    holdRaf = requestAnimationFrame(stepHold);
  });

  btn.addEventListener('pointerup', cancelHold);
  btn.addEventListener('pointercancel', cancelHold);
  btn.addEventListener('pointerleave', cancelHold);

  btn.addEventListener('click', (e) => {
    if (completedByHold) {
      completedByHold = false;
      return;
    }
    if (!e.isTrusted || !shouldHoldFn()) {
      onConfirm();
    }
  });
}

// Render Left 8-Critter Stage Selector Rail (100% Zero-Text, Ignores Active Pill, 0.6s Hold Mid-Game)
function renderWorldSelector() {
  const rail = DOM.worldSelectorRail;
  if (!rail) return;
  rail.innerHTML = '';
  CRITTERS.forEach((c, idx) => {
    const unlocked = isWorldUnlocked(idx);
    const btn = document.createElement('button');
    btn.className =
      'world-pill' +
      (idx === currentWorld ? ' active' : '') +
      (unlocked ? '' : ' locked');
    btn.setAttribute('aria-label', `Table ${idx + 1}`);
    const stars = cupStars[idx] || 0;
    const starBadge = !unlocked ? '🔒' : stars > 0 ? '⭐'.repeat(stars) : c.badge;
    btn.innerHTML = `
      <img src="${c.icon}" alt="" />
      <span class="world-pill-stars">${starBadge}</span>
    `;

    bindHoldConfirmAction(
      btn,
      () => {
        if (idx === currentWorld) return;
        if (!isWorldUnlocked(idx)) {
          playCooldownDenySfx();
          triggerPedalDeniedVisual(btn);
          showRaceToast('🔒🥇🥈🥉');
          return;
        }
        if (DOM.winModal) DOM.winModal.classList.add('hidden');
        if (DOM.worldSelectorRail) DOM.worldSelectorRail.classList.remove('drawer-open');
        buildPinballTableWorld(idx);
      },
      () => unlocked && idx !== currentWorld && playerScore > 15 && !raceFinished
    );

    rail.appendChild(btn);
  });
}

function getStarsForRank(rank) {
  if (rank === 1) return 3;
  if (rank === 2) return 2;
  if (rank === 3) return 1;
  return 0;
}

function getMedalForRank(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return '😭';
}

function computeStandings() {
  const cfg = CRITTERS[currentWorld];
  const pDone = playerFinished || playerScore >= cfg.targetScore;
  const pOrder = playerFinishOrder || (pDone ? finishedRacerCount + 1 : 0);
  const entries = [
    {
      isPlayer: true,
      id: cfg.id,
      icon: cfg.icon,
      badge: cfg.badge,
      score: Math.round(playerScore),
      finished: pDone,
      finishOrder: pOrder
    },
    ...rivalBalls.map((r, idx) => ({
      isPlayer: false,
      rivalIdx: idx,
      id: r.cfg.id,
      icon: r.cfg.icon,
      badge: r.cfg.badge,
      score: Math.round(r.score),
      finished: Boolean(r.finished),
      finishOrder: r.finishOrder || 0
    }))
  ];

  entries.sort((a, b) => {
    if (
      a.finished &&
      b.finished &&
      a.finishOrder > 0 &&
      b.finishOrder > 0 &&
      a.finishOrder !== b.finishOrder
    ) {
      return a.finishOrder - b.finishOrder;
    }
    if (a.finished !== b.finished) {
      return a.finished ? -1 : 1;
    }
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.isPlayer ? -1 : 1;
  });

  return entries;
}

function updateLiveRankHud(forceWrite = false) {
  const standings = computeStandings();
  const currentRank = standings.findIndex((s) => s.isPlayer) + 1;
  const projectedStars = getStarsForRank(currentRank);

  // During live play, Rank 4-5 shows a gentle amber catch-up cue (⬆️) instead of a pulsing red 😭!
  const medal =
    currentRank === 1
      ? '🥇'
      : currentRank === 2
        ? '🥈'
        : currentRank === 3
          ? '🥉'
          : raceFinished
            ? '😭'
            : '⬆️';
  const rankClass =
    currentRank === 1
      ? 'hud-rank-chip rank-1'
      : currentRank === 2
        ? 'hud-rank-chip rank-2'
        : currentRank === 3
          ? 'hud-rank-chip rank-3'
          : 'hud-rank-chip rank-catchup';

  if (forceWrite || hudCache.rankEmoji !== medal) {
    hudCache.rankEmoji = medal;
    if (DOM.hudRankEmoji) DOM.hudRankEmoji.textContent = medal;
  }
  if (forceWrite || hudCache.rankClass !== rankClass) {
    hudCache.rankClass = rankClass;
    if (DOM.hudRankChip) DOM.hudRankChip.className = rankClass;
  }

  // Highlight 3rd-place (🥉) rival marker with bouncing ⬆️ catch-up arrow when player is in 4th/5th
  const thirdPlaceEntry = currentRank > 3 ? standings[2] : null;
  const targetRivalIdx =
    thirdPlaceEntry && !thirdPlaceEntry.isPlayer ? thirdPlaceEntry.rivalIdx : -1;
  DOM.rivalMarkers.forEach((el, idx) => {
    if (el) el.classList.toggle('catchup-target', idx === targetRivalIdx);
  });

  if (forceWrite || hudCache.starsEarned !== projectedStars) {
    hudCache.starsEarned = projectedStars;
    for (let i = 0; i < 3; i++) {
      const starEl = DOM.hudStars[i];
      if (starEl) starEl.classList.toggle('earned', i < projectedStars);
    }
  }

  const fActive = rainbowFeverTimer > 0;
  const feverFillVal = fActive
    ? (rainbowFeverTimer / Math.max(0.1, rainbowFeverDuration)) * 100
    : feverMeter;
  const fPct = `${Math.round(Math.max(0, Math.min(100, feverFillVal)))}%`;
  const fEmoji = fActive ? '🔥' : '✨';
  const fReady = fActive || feverMeter >= 95;

  if (forceWrite || hudCache.feverWidth !== fPct) {
    hudCache.feverWidth = fPct;
    if (DOM.feverProgressFill) DOM.feverProgressFill.style.width = fPct;
  }
  if (forceWrite || hudCache.feverActive !== fActive) {
    hudCache.feverActive = fActive;
    if (DOM.feverProgressFill) DOM.feverProgressFill.classList.toggle('fever-active', fActive);
  }
  if (forceWrite || hudCache.feverReady !== fReady) {
    hudCache.feverReady = fReady;
    const feverIconEl = document.getElementById('feverRainbowIcon');
    if (feverIconEl) feverIconEl.classList.toggle('fever-rainbow-ready', fReady);
  }
  if (forceWrite || hudCache.feverEmoji !== fEmoji) {
    hudCache.feverEmoji = fEmoji;
    if (DOM.feverStatusEmoji) DOM.feverStatusEmoji.textContent = fEmoji;
  }

  return { standings, currentRank, projectedStars };
}

function updateHudDom(forceWrite = false) {
  const cfg = CRITTERS[currentWorld];
  stageElapsedTime = 0;
  pedalCooldownPrev.magnet = false;
  pedalCooldownPrev.multiball = false;
  pedalCooldownPrev.quake = false;
  if (DOM.hudDriverImg) DOM.hudDriverImg.src = cfg.icon;
  if (DOM.hudCupEmoji) DOM.hudCupEmoji.textContent = cfg.badge;
  if (DOM.playerMarkerImg) DOM.playerMarkerImg.src = cfg.icon;

  rivalBalls.forEach((r, idx) => {
    const imgEl = DOM.rivalMarkerImgs[idx];
    if (imgEl) imgEl.src = r.cfg.icon;
  });

  updateLiveRankHud(forceWrite);
}

// Present the 5-Critter Podium & Enforce Strict Top-3 Qualification Rules
function finishPinballTournament(immediateModal = false) {
  if (raceFinished) return;
  raceFinished = true;

  const cfg = CRITTERS[currentWorld];
  const targetScore = cfg.targetScore;

  const { standings, currentRank, projectedStars } = updateLiveRankHud(true);
  playerFinishRank = currentRank;
  const earnedStars = projectedStars;
  const passedLevel = playerFinishRank <= 3;
  playerLostRace = !passedLevel;

  const pPct = `${Math.round(Math.max(0, Math.min(100, (playerScore / targetScore) * 100)))}%`;
  if (DOM.trackProgressFill) DOM.trackProgressFill.style.width = pPct;
  if (DOM.playerMarker) DOM.playerMarker.style.left = pPct;
  rivalBalls.forEach((r, idx) => {
    const rPct = `${Math.round(Math.max(0, Math.min(100, (r.score / targetScore) * 100)))}%`;
    const el = DOM.rivalMarkers[idx];
    if (el) el.style.left = rPct;
  });

  if (passedLevel) {
    cupStars[currentWorld] = Math.max(cupStars[currentWorld] || 0, earnedStars);
    saveProgress();
    renderWorldSelector();
    playWinFanfare(earnedStars);

    for (let i = 0; i < 4; i++) {
      const col = RAINBOW_HEX[i % RAINBOW_HEX.length];
      spawn3DBurst(-4.5 + i * 3.0, 2.5, -6, col, 10, true);
    }
  } else {
    playLoseSadSfx();
    showRaceToast('😭💔');
  }

  const showPodiumModal = () => {
    const starsEls = DOM.winStarsRow
      ? DOM.winStarsRow.querySelectorAll('.podium-star')
      : [];

    if (DOM.winPodiumCard) {
      DOM.winPodiumCard.classList.toggle('lose-card', !passedLevel);
    }
    if (DOM.winSparklesHeader) {
      DOM.winSparklesHeader.textContent = passedLevel ? '🎰 🏆 🌈 🏆 🎰' : '🌧️ 💥 😭 💥 🌧️';
    }
    if (DOM.winDriverImg) DOM.winDriverImg.src = cfg.icon;
    if (DOM.winCupBadge) DOM.winCupBadge.textContent = cfg.badge;
    if (DOM.winMedalBadge) {
      DOM.winMedalBadge.textContent = getMedalForRank(playerFinishRank);
    }

    starsEls.forEach((el, idx) => {
      el.classList.toggle('earned', idx < earnedStars);
    });

    if (DOM.podiumStandingsRow) {
      DOM.podiumStandingsRow.innerHTML = standings
        .map((entry, idx) => {
          const rankNum = idx + 1;
          const isTop3 = rankNum <= 3;
          const slotMedal =
            rankNum === 1 ? '🥇' : rankNum === 2 ? '🥈' : rankNum === 3 ? '🥉' : '💔';
          const slotStars = getStarsForRank(rankNum);
          const starsHtml = slotStars > 0 ? '⭐'.repeat(slotStars) : '❌';
          return `
            <div class="standing-slot rank-${rankNum} ${isTop3 ? 'rank-top3' : 'rank-out'} ${entry.isPlayer ? 'is-player' : ''}">
              ${entry.isPlayer ? '<span class="standing-you-crown">🔮</span>' : ''}
              <span class="standing-medal">${slotMedal}</span>
              <img class="standing-avatar" src="${entry.icon}" alt="" />
              <span class="standing-stars">${starsHtml}</span>
            </div>
          `;
        })
        .join('');
    }

    if (DOM.btnWinNext) {
      DOM.btnWinNext.classList.toggle('hidden', !passedLevel);
    }
    if (DOM.winModal) {
      DOM.winModal.classList.remove('hidden');
    }
  };

  clearTimeout(finishPinballTournament._modalTimer);
  if (immediateModal) {
    showPodiumModal();
  } else {
    finishPinballTournament._modalTimer = setTimeout(showPodiumModal, 650);
  }
}

// Deterministic Force-Finish helper for Automated Headless Chrome QA (`window.gameTestApi.forceFinish(rank)`)
function forceFinishAtRank(targetRank = 1) {
  const clampedRank = Math.max(1, Math.min(5, Number(targetRank) || 1));
  const cfg = CRITTERS[currentWorld];
  const target = cfg.targetScore;

  const rankScores = [
    target + 400,
    target + 250,
    target + 100,
    Math.round(target * 0.82),
    Math.round(target * 0.68)
  ];
  playerScore = rankScores[clampedRank - 1];
  playerFinished = playerScore >= target;
  playerFinishOrder = playerFinished ? clampedRank : 0;

  let rSlot = 0;
  rivalBalls.forEach((r) => {
    if (rSlot === clampedRank - 1) rSlot++;
    r.score = rankScores[rSlot];
    r.finished = r.score >= target;
    r.finishOrder = r.finished ? rSlot + 1 : 0;
    rSlot++;
  });
  finishedRacerCount = [playerFinished, ...rivalBalls.map((r) => r.finished)].filter(Boolean).length;

  raceFinished = false;
  finishPinballTournament(true);
  return window.gameTestApi.getState();
}

// Smooth Multi-Frequency Shake Noise at 23 / 37 / 51 Hz (Never Per-Frame White Noise!)
function sampleShakeNoise(t, seed) {
  return (
    Math.sin(t * 23.0 + seed) * 0.52 +
    Math.sin(t * 37.0 + seed * 2.13) * 0.31 +
    Math.sin(t * 51.0 + seed * 3.71) * 0.17
  );
}

// Responsive Camera Framing: Smooths Base Position First, Then Applies Trauma Shake & Rotation AFTER lookAt!
function updateCameraFraming(dt, mainBallX = 0, mainBallZ = 2, timeSec = 0) {
  const W = window.innerWidth || 1280;
  const H = window.innerHeight || 800;
  const aspect = W / H;

  // Calibrated so across 1280x800, 390x844, and 844x390:
  // - tableTopCenter (z = -20.2) projects BELOW topbarBottomY (y ~ 105..140)
  // - leftFlipperTip, rightFlipperTip, and shieldBar (z = 14.55) project ABOVE cockpitTopY (y ~ 590..660 on 1280x800)
  let baseFov = 45;
  let camY = 44.8;
  let camZ = 24.4;
  let lookZ = -0.35;
  let tableCenterX = 0.65;

  if (aspect < 0.75) {
    // Portrait Phone (e.g., 390x844)
    baseFov = 58;
    camY = 48.0;
    camZ = 24.0;
    lookZ = -0.2;
    tableCenterX = 0.8;
  } else if (aspect < 1.2) {
    // Tablet Portrait
    baseFov = 50;
    camY = 44.0;
    camZ = 24.0;
    lookZ = 0.3;
    tableCenterX = 0.7;
  } else if (H <= 500) {
    // Landscape Phone (e.g., 844x390)
    baseFov = 45;
    camY = 44.5;
    camZ = 24.5;
    lookZ = 1.0;
    tableCenterX = 0.85;
  }

  // Fixed rock-steady FOV and cabinet viewpoint — zero ball-chasing camera sway, zero FOV pumping, zero rotational shake!
  const targetFov = baseFov;
  camera.fov = targetFov;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  const targetBaseX = -tableCenterX;
  const targetBaseY = camY;
  const targetBaseZ = camZ;

  camTrauma.baseX = targetBaseX;
  camTrauma.baseY = targetBaseY;
  camTrauma.baseZ = targetBaseZ;
  camTrauma.initialized = true;

  const s = camTrauma.trauma * camTrauma.trauma;
  const tNoise = timeSec || performance.now() * 0.001;
  const offsetX = sampleShakeNoise(tNoise, 1.1) * 0.04 * s;
  const offsetY = sampleShakeNoise(tNoise, 2.7) * 0.04 * s;
  const offsetZ = sampleShakeNoise(tNoise, 4.3) * 0.03 * s;

  camera.position.set(
    camTrauma.baseX + offsetX,
    camTrauma.baseY + offsetY,
    camTrauma.baseZ + offsetZ
  );

  const lookTargetX = -tableCenterX;
  const lookTargetY = 0.2;
  const lookTargetZ = lookZ;
  camera.lookAt(lookTargetX, lookTargetY, lookTargetZ);
}

// Physics Step for a Pinball (Player or Rival) on the 3D Tilted Playfield
function stepSingleBallPhysics(ball, isPlayer, dt, timeSec) {
  const r = ball.meshObj.radius;

  // If ball is waiting at the bottom Rainbow Auto-Save Drain (1.5s hold when player misses a flip)
  if (ball.drainWaitTimer > 0) {
    ball.drainWaitTimer = Math.max(0, ball.drainWaitTimer - dt);
    ball.meshObj.root.position.set(ball.x, ball.y, ball.z);
    if (ball.drainWaitTimer === 0) {
      ball.vz = -26 - Math.random() * 2.5;
      ball.vx = (-0.8 - ball.x) * 1.5 + (Math.random() - 0.5) * 6;
      if (isPlayer) {
        comboCount = 0;
        spawnShockwave3D(ball.x, 0.5, 14.1, 0x00e5ff, 2.8, true);
      }
    }
    return;
  }

  // Smooth, readable down-slope pinball gravity (+z is toward bottom flippers)
  const slopeGravity = 16.5;
  ball.vz += slopeGravity * dt;

  // Damped Swirling Magnet Vortex around upper bumper cluster (-0.8, -8.5) (cancels slope gravity so ball orbits the bumpers!)
  if (isPlayer && magnetTimer > 0 && !ball.inShooterLane) {
    ball.vz -= slopeGravity * dt;
    const dxV = -0.8 - ball.x;
    const dzV = -8.5 - ball.z;
    const distV = Math.hypot(dxV, dzV);
    const satScale = distV > 4.0 ? 4.0 / distV : 1.0;
    const rx = dxV * satScale;
    const rz = dzV * satScale;
    const invDist = distV > 0.001 ? 1.0 / distV : 0;
    const perpX = -dzV * invDist;
    const perpZ = dxV * invDist;
    const kR = 5.5;
    const kT = 7.5;
    const cD = 2.0;
    ball.vx += (kR * rx + kT * perpX - cD * ball.vx) * dt;
    ball.vz += (kR * rz + kT * perpZ - cD * ball.vz) * dt;
  }

  // Vertical hop physics (when launched off a bumper pop, ramp rail, or table quake)
  if (ball.y > r || ball.vy !== 0) {
    ball.vy -= 28.0 * dt;
    ball.y += ball.vy * dt;
    if (ball.y <= r) {
      ball.y = r;
      ball.vy = 0;
    }
  }

  // Calm, trackable speed cap so the pinball is easy to follow visually without frantic ricochets
  const maxSpeed = isPlayer && rainbowFeverTimer > 0 ? 42 : 38;
  const curSpeed = Math.hypot(ball.vx, ball.vz);
  if (curSpeed > maxSpeed) {
    const scale = maxSpeed / curSpeed;
    ball.vx *= scale;
    ball.vz *= scale;
  }

  // Anti-Stuck Dead-Spot Watchdog: if a playfield ball wedges at < 1.8 u/s for > 0.8s, pop it free!
  if (!ball.inShooterLane && ball.drainWaitTimer <= 0) {
    if (curSpeed < 1.8) {
      ball.stuckTimer = (ball.stuckTimer || 0) + dt;
      if (ball.stuckTimer > 0.8) {
        ball.stuckTimer = 0;
        ball.vy = Math.max(ball.vy, 4.2);
        ball.vz = -20.0;
        ball.vx += (ball.x < -0.8 ? 1 : -1) * 14.0;
        spawnShockwave3D(ball.x, 0.65, ball.z, 0x00e5ff, 2.4, false);
      }
    } else {
      ball.stuckTimer = 0;
    }
  } else {
    ball.stuckTimer = 0;
  }

  ball.x += ball.vx * dt;
  ball.z += ball.vz * dt;

  // 1. Outer Wall & Shooter Lane Divider Collisions
  if (ball.inShooterLane) {
    // Once the ball climbs above the shooter divider wall (z < -13.5), curve it left into the bumper cluster!
    if (ball.z < -13.5) {
      ball.inShooterLane = false;
      ball.x = SHOOTER_WALL_X - r - 0.4;
      ball.vx = -17 - Math.random() * 4;
      ball.vz = 7 + Math.random() * 3;
    } else {
      const laneLeft = SHOOTER_WALL_X + 0.25 + r;
      const laneRight = TABLE_HALF_W - r;
      if (ball.x < laneLeft) {
        ball.x = laneLeft;
        ball.vx = Math.abs(ball.vx) * 0.7;
      } else if (ball.x > laneRight) {
        ball.x = laneRight;
        ball.vx = -Math.abs(ball.vx) * 0.7;
      }
      if (ball.z > 12.2) {
        ball.z = 12.2;
        ball.vz = -42; // Auto-spring launch if a ball settles at the bottom of the shooter lane
      }
    }
  } else {
    const leftBound = -TABLE_HALF_W + r;
    const rightBound = SHOOTER_WALL_X - 0.25 - r;
    if (ball.x < leftBound) {
      ball.x = leftBound;
      ball.vx = Math.abs(ball.vx) * 0.9;
    } else if (ball.x > rightBound) {
      ball.x = rightBound;
      ball.vx = -Math.abs(ball.vx) * 0.9;
    }
  }

  // Top Curved Rebound Arch (z <= TABLE_TOP_Z + r)
  if (ball.z < TABLE_TOP_Z + r) {
    ball.z = TABLE_TOP_Z + r;
    ball.vz = Math.abs(ball.vz) * 0.9 + 5.0;
    ball.vx += (-0.8 - ball.x) * 1.3;
    ball.inShooterLane = false;
  }

  // 2. Lower Inlane Funnel Guides (z in [9.2, 12.0])
  if (!ball.inShooterLane && ball.z > 9.0 && ball.z < 12.0) {
    if (ball.x < -4.8) {
      ball.x = -4.8;
      ball.vx = Math.abs(ball.vx) * 0.8 + 7.0;
      ball.vz -= 3.0;
    } else if (ball.x > 3.2) {
      ball.x = 3.2;
      ball.vx = -Math.abs(ball.vx) * 0.8 - 7.0;
      ball.vz -= 3.0;
    }
  }

  // 3. Real 2D Capsule Collision with Main & Upper Flippers using Angular Velocity ω!
  if (!ball.inShooterLane) {
    const lOmega = isPlayer ? flipperState.leftOmega : 0;
    const rOmega = isPlayer ? flipperState.rightOmega : 0;

    checkAndApplyFlipperCapsuleHit(
      ball,
      isPlayer,
      -4.85,
      12.4,
      4.15,
      1,
      flipperState.leftAngle,
      lOmega,
      true,
      0.12
    );
    checkAndApplyFlipperCapsuleHit(
      ball,
      isPlayer,
      3.25,
      12.4,
      4.15,
      -1,
      flipperState.rightAngle,
      rOmega,
      false,
      0.12
    );
    checkAndApplyFlipperCapsuleHit(
      ball,
      isPlayer,
      -9.6,
      -0.8,
      2.55,
      1,
      flipperState.leftAngle * 0.85,
      lOmega * 0.85,
      true,
      0.08
    );
    checkAndApplyFlipperCapsuleHit(
      ball,
      isPlayer,
      7.6,
      -0.8,
      2.55,
      -1,
      flipperState.rightAngle * 0.85,
      rOmega * 0.85,
      false,
      0.08
    );
  }

  // 4. Bottom Rainbow Auto-Save Drain (z >= 14.0)
  if (!ball.inShooterLane && ball.z >= 14.0) {
    ball.z = 14.0;
    ball.vx = 0;
    ball.vz = 0;
    if (isPlayer) {
      ball.drainWaitTimer = 1.45;
      comboCount = 0;
    } else {
      ball.vz = -28 - Math.random() * 4;
      ball.vx = (-0.8 - ball.x) * 2.0 + (Math.random() - 0.5) * 10;
    }
  }

  // 5. 7 Mushroom Pop Bumpers Collision & Real Reflection + Kick Impulse + vy Hop
  mushroomBumpers.forEach((bmp) => {
    const dx = ball.x - bmp.x;
    const dz = ball.z - bmp.z;
    const dist = Math.hypot(dx, dz);
    const minDist = bmp.r + r;
    if (dist < minDist && dist > 0.0001) {
      const nx = dx / dist;
      const nz = dz / dist;
      ball.x = bmp.x + nx * (minDist + 0.06);
      ball.z = bmp.z + nz * (minDist + 0.06);

      const vn = Math.min(0, ball.vx * nx + ball.vz * nz);
      const eBumper = 0.48;
      const baseKick = isPlayer ? 12.0 : 10.5;
      const kick = Math.min(17.0, baseKick + 0.18 * Math.abs(vn));
      const dv = -(1 + eBumper) * vn + kick;
      ball.vx += nx * dv;
      ball.vz += nz * dv;
      ball.vy = Math.max(ball.vy, 1.8);

      bmp.hitScale = 1.28;
      bmp.flashTimer = 0.22;

      if (isPlayer) {
        if (!bmp.scoreCooldown || bmp.scoreCooldown <= 0) {
          bmp.scoreCooldown = 0.25;
          totalBumperHits++;
          if (flipperActiveTimer > 0) {
            comboCount = Math.min(15, comboCount + 1);
            comboTimer = 3.0;
          }
          feverLightBoost = Math.max(feverLightBoost, 12);
          addPlayerPoints(14, bmp.x, bmp.z, false, true);
          spawn3DBurst(bmp.x, 1.1, bmp.z, bmp.meshObj.baseColor, 8, true);
          spawnShockwave3D(bmp.x, 0.85, bmp.z, bmp.meshObj.baseColor, 3.2, true);
          if (comboCount >= 5) {
            spawnFlyingStarCoins(bmp.x, 1.35, bmp.z, 1);
          }
          playBumperPopSfx(comboCount);
          if (comboCount > 0 && comboCount % 5 === 0) {
            triggerImpactScreenEffect('bumper-pop', '🌟');
          }
        }
      } else {
        const graceScale = Math.min(1.0, Math.max(0, (stageElapsedTime - 1.2) / 2.2));
        ball.score += 10 * graceScale;
      }
    }
  });

  // 6. Slingshot Kickers Collision (reflect(v, n_contact) + n_sling * kick with 0.18s scoreCooldown)
  slingshots.forEach((sl) => {
    const dx = ball.x - sl.x;
    const dz = ball.z - sl.z;
    const dist = Math.hypot(dx, dz);
    const minDist = sl.radius + r;
    if (dist < minDist && dist > 0.0001) {
      const nx = dx / dist;
      const nz = dz / dist;
      ball.x = sl.x + nx * (minDist + 0.05);
      ball.z = sl.z + nz * (minDist + 0.05);

      const vn = Math.min(0, ball.vx * nx + ball.vz * nz);
      const eSling = 0.55;
      let rvx = ball.vx - (1 + eSling) * vn * nx;
      let rvz = ball.vz - (1 + eSling) * vn * nz;

      if (!sl.scoreCooldown || sl.scoreCooldown <= 0) {
        sl.scoreCooldown = 0.18;
        const slingKick = 12.5;
        ball.vx = rvx + sl.normalX * slingKick;
        ball.vz = rvz + sl.normalZ * slingKick;
        ball.vy = Math.max(ball.vy, 1.5);
        sl.hitScale = 1.25;
        if (isPlayer) {
          addPlayerPoints(12, sl.x, sl.z, false, true);
          spawn3DBurst(sl.x, 0.9, sl.z, sl.color, 7, true);
          spawnShockwave3D(sl.x, 0.65, sl.z, sl.color, 2.6, true);
          playFlipperSnapSfx(sl.x < 0);
        }
      } else {
        ball.vx = rvx;
        ball.vz = rvz;
      }
    }
  });

  // 7. Spinning 3D Star Targets (Real Colliders r = 0.95 with Deflection Impulse, Ring, 0.2 Trauma & 3 Flying Coins) & Elevated Neon Ramps
  if (isPlayer && !ball.inShooterLane) {
    starTargets.forEach((st) => {
      const dx = ball.x - st.x;
      const dz = ball.z - st.z;
      const dist = Math.hypot(dx, dz);
      const stRadius = 0.95;
      const minDist = stRadius + r;

      if (magnetTimer > 0 && st.cooldown <= 0 && dist < 3.6 && dist >= minDist) {
        ball.vx -= (dx / dist) * 14.0 * dt;
        ball.vz -= (dz / dist) * 14.0 * dt;
      }

      if (dist < minDist && dist > 0.0001) {
        const nx = dx / dist;
        const nz = dz / dist;
        ball.x = st.x + nx * (minDist + 0.04);
        ball.z = st.z + nz * (minDist + 0.04);

        const vn = Math.min(0, ball.vx * nx + ball.vz * nz);
        const dv = -(1 + 0.5) * vn + 9.5;
        ball.vx += nx * dv;
        ball.vz += nz * dv;
        ball.vy = Math.max(ball.vy, 2.4);

        if (st.cooldown <= 0) {
          st.cooldown = 0.85;
          st.spinVel = 26.0;
          st.hitScale = 1.42;
          addPlayerPoints(14, st.x, st.z, false, true);
          spawn3DBurst(st.x, 1.05, st.z, 0xffea00, 12, true);
          spawnShockwave3D(st.x, 0.75, st.z, 0xffea00, 3.2, true);
          spawnFlyingStarCoins(st.x, 1.1, st.z, 3);
          addTrauma(0.20);
          playStarTargetSfx();
        }
      }
    });

    rampRails.forEach((rmp) => {
      if (
        rmp.cooldown <= 0 &&
        Math.abs(ball.x - rmp.x) < 1.35 &&
        Math.abs(ball.z - rmp.zStart) < 1.75 &&
        ball.vz < -8
      ) {
        rmp.cooldown = 2.4;
        ball.y = 2.6;
        ball.vy = 9.5;
        ball.vz = -34;
        ball.vx = (-0.8 - ball.x) * 0.8;
        addPlayerPoints(34, rmp.x, rmp.zStart - 3, false, true);
        spawn3DBurst(rmp.x, 2.2, rmp.zStart - 2, rmp.color, 26, true);
        spawnShockwave3D(rmp.x, 2.2, rmp.zStart - 2, rmp.color, 3.8, true);
        spawnFlyingStarCoins(rmp.x, 2.4, rmp.zStart - 2, 6);
        addTrauma(0.35);
        playRampJackpotSfx();
        showRaceToast('🛤️🚀🌟');
      }
    });
  }

  ball.meshObj.root.position.set(ball.x, ball.y, ball.z);
  // True Quaternion Sphere Rolling around axis (vz, 0, -vx) by |v| * dt / r (Zero Skating or Diagonal Wobble!)
  const rollSpeed = Math.hypot(ball.vx, ball.vz);
  if (rollSpeed > 0.001) {
    _rollAxis.set(ball.vz / rollSpeed, 0, -ball.vx / rollSpeed);
    _rollQuat.setFromAxisAngle(_rollAxis, (rollSpeed * dt) / r);
    ball.meshObj.sphereGroup.quaternion.premultiply(_rollQuat);
  }
  ball.meshObj.medallionGroup.rotation.y = Math.sin(timeSec * 3.5) * 0.14;
  ball.meshObj.haloRing.rotation.z += dt * 3.5;

  // Distinct 3D Playfield Visuals for Player Balls during Rainbow Fever (🌈) & Magnet Vortex (🧲)
  if (isPlayer) {
    if (rainbowFeverTimer > 0) {
      ball.meshObj.haloRing.material.color.setHSL((timeSec * 0.65) % 1, 0.92, 0.58);
      ball.meshObj.haloRing.scale.setScalar(1.36);
      ball.trailAccum = (ball.trailAccum || 0) + dt;
      if (!ball.inShooterLane && rollSpeed > 8.0 && ball.trailAccum >= 0.055) {
        ball.trailAccum = 0;
        const trailCol = RAINBOW_HEX[Math.floor(timeSec * 12) % RAINBOW_HEX.length];
        spawn3DBurst(ball.x, ball.y + 0.1, ball.z, trailCol, 2, false);
      }
    } else if (magnetTimer > 0) {
      ball.meshObj.haloRing.material.color.setHex(0xb388ff);
      ball.meshObj.haloRing.scale.setScalar(1.24);
    } else {
      ball.meshObj.haloRing.material.color.setHex(ball.isMultiball ? 0x00e676 : 0xffea00);
      ball.meshObj.haloRing.scale.setScalar(1.0);
    }
  }
}

// Main 3D Simulation Step
function updateGame3D(dt, timeSec) {
  const cfg = CRITTERS[currentWorld];
  const targetScore = cfg.targetScore;
  stageElapsedTime += dt;

  // Animate Pooled 3D Shockwave Rings (including delayed thin second ring)
  for (let i = shockwaves3D.length - 1; i >= 0; i--) {
    const sw = shockwaves3D[i];
    if (sw.delay > 0) {
      sw.delay -= dt;
      if (sw.delay <= 0) {
        sw.ring.visible = true;
      } else {
        continue;
      }
    }
    sw.life -= dt;
    const progress = 1 - Math.max(0, sw.life) / sw.maxLife;
    const sc = 0.4 + progress * sw.maxScale;
    sw.ring.scale.set(sc, sc, 1);
    sw.ring.material.opacity = (1 - progress) * (sw.isThin ? 0.85 : 0.94);
    if (sw.life <= 0) {
      dynamicPlayfieldGroup.remove(sw.ring);
      sw.ring.visible = true;
      if (!SHOCKWAVE_MESH_POOL.includes(sw.ring)) {
        SHOCKWAVE_MESH_POOL.push(sw.ring);
      }
      shockwaves3D.splice(i, 1);
    }
  }

  // Animate Pooled 3D Burst Particles & Core Flashes
  for (let i = particles3D.length - 1; i >= 0; i--) {
    const p = particles3D[i];
    p.mesh.position.x += p.vx * dt;
    p.mesh.position.y += p.vy * dt;
    p.mesh.position.z += p.vz * dt;
    p.mesh.rotation.x += p.rvx * dt;
    p.mesh.rotation.y += p.rvy * dt;
    if (!p.isCoreFlash) {
      p.vy -= 22 * dt;
    }
    p.life -= dt;
    const lifeRatio = Math.max(0, p.life / (p.maxLife || 0.45));
    if (p.isCoreFlash) {
      p.mesh.scale.setScalar(1.1 + lifeRatio * 1.45);
    } else {
      p.mesh.scale.setScalar(0.2 + lifeRatio * 0.95);
    }
    p.mesh.material.opacity = lifeRatio;
    if (p.life <= 0) {
      dynamicPlayfieldGroup.remove(p.mesh);
      if (!PARTICLE_MESH_POOL.includes(p.mesh)) {
        PARTICLE_MESH_POOL.push(p.mesh);
      }
      particles3D.splice(i, 1);
    }
  }

  // Animate Pooled 3D Flying Star Coins along Quadratic Bézier to #playerMarker
  if (flyingCoins3D.length > 0) {
    getPlayerMarkerWorldPosition(_coinTargetWorld);
    for (let i = flyingCoins3D.length - 1; i >= 0; i--) {
      const fc = flyingCoins3D[i];
      if (fc.delay > 0) {
        fc.delay -= dt;
        if (fc.delay <= 0) {
          fc.mesh.visible = true;
        } else {
          continue;
        }
      }
      fc.elapsed += dt;
      const u = Math.min(1.0, fc.elapsed / fc.duration);
      const invU = 1.0 - u;
      const b0 = invU * invU;
      const b1 = 2.0 * invU * u;
      const b2 = u * u;

      fc.mesh.position.set(
        b0 * fc.p0x + b1 * fc.p1x + b2 * _coinTargetWorld.x,
        b0 * fc.p0y + b1 * fc.p1y + b2 * _coinTargetWorld.y,
        b0 * fc.p0z + b1 * fc.p1z + b2 * _coinTargetWorld.z
      );
      fc.mesh.rotation.y += dt * 18.0;
      fc.mesh.rotation.z += dt * 9.0;
      fc.mesh.scale.setScalar(0.45 + 0.65 * Math.sin(u * Math.PI * 0.85 + 0.15));

      if (u >= 1.0) {
        scene.remove(fc.mesh);
        fc.mesh.visible = true;
        if (!STAR_COIN_MESH_POOL.includes(fc.mesh)) {
          STAR_COIN_MESH_POOL.push(fc.mesh);
        }
        flyingCoins3D.splice(i, 1);
        playCoinTickSfx();
        pulsePlayerMarkerBump();
      }
    }
  }

  // Exponential decay of camera trauma (~2.2/s)
  camTrauma.trauma *= Math.exp(-2.2 * dt);
  if (camTrauma.trauma < 0.001) camTrauma.trauma = 0;
  camTrauma.shake = camTrauma.trauma;
  camTrauma.fovKick *= Math.pow(0.04, dt);
  camTrauma.rollKick *= Math.pow(0.03, dt);
  camTrauma.zoomKick *= Math.pow(0.03, dt);

  // Check raceFinished BEFORE hitStopTimer so podium orbit camera never freezes on the winning hit-stop frame!
  if (raceFinished) {
    hitStopTimer = 0;
    tableGroup.rotation.set(0.16, 0, 0);
    tableGroup.position.set(0, 0, 0);
    podiumOrbitAngle += dt * 1.1;
    camera.position.set(
      Math.sin(podiumOrbitAngle) * 14,
      26.5,
      15 + Math.cos(podiumOrbitAngle) * 10
    );
    camera.lookAt(-0.5, 0.5, -2.0);
    return;
  }

  if (hitStopTimer > 0) {
    hitStopTimer = 0;
  }

  // Update Timers & Cooldowns
  if (flipperActiveTimer > 0) {
    flipperActiveTimer = Math.max(0, flipperActiveTimer - dt);
  }
  if (manualActiveTimer > 0) {
    manualActiveTimer = Math.max(0, manualActiveTimer - dt);
  }
  if (comboTimer > 0) {
    comboTimer = Math.max(0, comboTimer - dt);
    if (comboTimer === 0) comboCount = 0;
  }

  let cooldownChanged = false;
  if (magnetCooldown > 0) {
    magnetCooldown = Math.max(0, magnetCooldown - dt);
    cooldownChanged = true;
  }
  if (multiballCooldown > 0) {
    multiballCooldown = Math.max(0, multiballCooldown - dt);
    cooldownChanged = true;
  }
  if (tiltQuakeCooldown > 0) {
    tiltQuakeCooldown = Math.max(0, tiltQuakeCooldown - dt);
    cooldownChanged = true;
  }

  // Subtle 3D Table Tilt Quake Cabinet Nudge (gentle, zero disorienting roll)
  if (tableQuakeAnimTimer > 0) {
    tableQuakeAnimTimer = Math.max(0, tableQuakeAnimTimer - dt);
    const tQ = QUAKE_ACTIVE_DURATION - tableQuakeAnimTimer;
    tableGroup.rotation.z = 0.012 * Math.exp(-8.0 * tQ) * Math.sin(24.0 * tQ);
    tableGroup.position.y = 0.06 * Math.exp(-8.0 * tQ) * Math.abs(Math.sin(20.0 * tQ));
    cooldownChanged = true;
    if (tableQuakeAnimTimer === 0) {
      tableGroup.rotation.z = 0;
      tableGroup.position.y = 0;
    }
  }

  if (feverLightBoost > 0) {
    feverLightBoost = Math.max(0, feverLightBoost - dt * 40);
  }
  // Safe, Smooth Constant-Luminance HSL Rainbow Fever Lighting (0.35 Hz hue rotation, ~55 ± 2.5 intensity — Zero WCAG Flash Hazard!)
  if (rainbowFeverTimer > 0) {
    rainbowFeverTimer = Math.max(0, rainbowFeverTimer - dt);
    const hue = (timeSec * 0.35) % 1;
    feverPointLight.color.setHSL(hue, 0.85, 0.55);
    feverPointLight.intensity = 55 + Math.sin(timeSec * 2.5) * 2.5;
    cabinetTrimMaterials.forEach((m) => m.emissive.setHSL(hue, 0.85, 0.52));
    if (rainbowFeverTimer === 0) {
      feverMeter = Math.max(15, savedFeverMeterBeforeBoost);
      savedFeverMeterBeforeBoost = feverMeter;
      feverPointLight.color.setHex(cfg.secondaryHex);
      feverPointLight.intensity = 48;
      cabinetTrimMaterials.forEach((m) => m.emissive.setHex(cfg.railHex));
      cooldownChanged = true;
    }
  } else {
    feverPointLight.intensity = 48 + feverLightBoost;
  }

  if (magnetTimer > 0) {
    magnetTimer = Math.max(0, magnetTimer - dt);
    cooldownChanged = true;
    if (magnetVortexGroup) {
      magnetVortexGroup.visible = magnetTimer > 0;
      magnetVortexGroup.rotation.y += dt * 4.8;
      const vPulse = 1.0 + Math.sin(timeSec * 7.0) * 0.08;
      magnetVortexGroup.scale.set(vPulse, 1, vPulse);
    }
  } else if (magnetVortexGroup && magnetVortexGroup.visible) {
    magnetVortexGroup.visible = false;
  }

  if (multiballTimer > 0) {
    multiballTimer = Math.max(0, multiballTimer - dt);
    cooldownChanged = true;
    if (multiballTimer === 0) {
      expireExtraMultiballs();
    }
  }
  if (cooldownChanged) {
    updateBoostPedalVisuals();
  }

  if (plungerAnimCompression > 0) {
    plungerAnimCompression = Math.max(0, plungerAnimCompression - dt * 4.5);
    if (plungerMeshGroup) {
      plungerMeshGroup.position.z = 13.8 + Math.sin(plungerAnimCompression * Math.PI) * 1.4;
    }
  }

  // Animate Left & Right 3D Flippers & Compute True Angular Velocity ω = (angle - prevAngle) / dt
  if (flipperState.leftTimer > 0) {
    flipperState.leftTimer = Math.max(0, flipperState.leftTimer - dt);
  }
  if (flipperState.rightTimer > 0) {
    flipperState.rightTimer = Math.max(0, flipperState.rightTimer - dt);
  }
  if (flipperState.leftStrikeCooldown > 0) {
    flipperState.leftStrikeCooldown = Math.max(0, flipperState.leftStrikeCooldown - dt);
  }
  if (flipperState.rightStrikeCooldown > 0) {
    flipperState.rightStrikeCooldown = Math.max(0, flipperState.rightStrikeCooldown - dt);
  }

  flipperState.prevLeftAngle = flipperState.leftAngle;
  flipperState.prevRightAngle = flipperState.rightAngle;

  const targetLeftAngle = flipperState.leftDown || flipperState.leftTimer > 0 ? -0.56 : 0.42;
  const targetRightAngle = flipperState.rightDown || flipperState.rightTimer > 0 ? 0.56 : -0.42;

  flipperState.leftAngle += (targetLeftAngle - flipperState.leftAngle) * Math.min(1, dt * 32);
  flipperState.rightAngle += (targetRightAngle - flipperState.rightAngle) * Math.min(1, dt * 32);

  flipperState.leftOmega =
    dt > 0.00001 ? (flipperState.leftAngle - flipperState.prevLeftAngle) / dt : 0;
  flipperState.rightOmega =
    dt > 0.00001 ? (flipperState.rightAngle - flipperState.prevRightAngle) / dt : 0;

  if (leftFlipperPivot) {
    leftFlipperPivot.pivotGroup.rotation.y = -flipperState.leftAngle;
  }
  if (rightFlipperPivot) {
    rightFlipperPivot.pivotGroup.rotation.y = -flipperState.rightAngle;
  }
  if (upperLeftFlipperPivot) {
    upperLeftFlipperPivot.pivotGroup.rotation.y = -flipperState.leftAngle * 0.85;
  }
  if (upperRightFlipperPivot) {
    upperRightFlipperPivot.pivotGroup.rotation.y = -flipperState.rightAngle * 0.85;
  }

  // Animate Mushroom Bumpers Squash/Flash & Spinning Crowns
  mushroomBumpers.forEach((bmp) => {
    if (bmp.scoreCooldown > 0) {
      bmp.scoreCooldown = Math.max(0, bmp.scoreCooldown - dt);
    }
    bmp.hitScale += (1.0 - bmp.hitScale) * Math.min(1, dt * 14);
    bmp.meshObj.root.scale.set(bmp.hitScale, 2.0 - bmp.hitScale, bmp.hitScale);
    bmp.meshObj.crownStar.rotation.y += dt * 3.5;
    if (bmp.flashTimer > 0) {
      bmp.flashTimer = Math.max(0, bmp.flashTimer - dt);
      bmp.meshObj.capMat.emissive.setHex(0xffffff);
      bmp.meshObj.capMat.emissiveIntensity = 0.85;
    } else {
      bmp.meshObj.capMat.emissive.setHex(bmp.meshObj.baseColor);
      bmp.meshObj.capMat.emissiveIntensity = 0.2;
    }
  });

  slingshots.forEach((sl) => {
    if (sl.scoreCooldown > 0) {
      sl.scoreCooldown = Math.max(0, sl.scoreCooldown - dt);
    }
    sl.hitScale += (1.0 - sl.hitScale) * Math.min(1, dt * 14);
    sl.mesh.scale.set(sl.hitScale, 1, sl.hitScale);
  });

  starTargets.forEach((st) => {
    if (st.cooldown > 0) st.cooldown = Math.max(0, st.cooldown - dt);
    st.spinVel += (2.8 - st.spinVel) * Math.min(1, dt * 4);
    st.group.rotation.y += st.spinVel * dt;
    st.hitScale = (st.hitScale || 1.0) + (1.0 - (st.hitScale || 1.0)) * Math.min(1, dt * 14);
    st.group.scale.setScalar(st.hitScale);
  });

  rampRails.forEach((rmp) => {
    if (rmp.cooldown > 0) rmp.cooldown = Math.max(0, rmp.cooldown - dt);
  });

  if (rainbowShieldBar) {
    rainbowShieldBar.material.opacity = 0.65 + Math.sin(timeSec * 8) * 0.2;
  }

  playerBalls.forEach((pb) => {
    stepSingleBallPhysics(pb, true, dt, timeSec);
  });

  // 3s Grace Period for Rivals at Table Start (Ramps smoothly over first ~3s so Player starts at Rank 1!)
  const rivalGraceScale = Math.min(1.0, Math.max(0, (stageElapsedTime - 1.2) / 2.2));

  rivalBalls.forEach((rb, rIdx) => {
    if (rb.clashCooldown > 0) {
      rb.clashCooldown = Math.max(0, rb.clashCooldown - dt);
    }

    // Distinct Playfield AI Archetypes:
    // 0: bumper_hunter (seeks central mushroom bumpers), 1: ramp_sprinter (climbs side neon ramps),
    // 2: spinner_ace (weaves through golden star spinners), 3: steady_cruiser (smooth center-lane rally)
    rb.aiImpulseTimer = (rb.aiImpulseTimer || 0) - dt;
    if (rb.aiImpulseTimer <= 0 && rb.dizzyTimer <= 0 && rb.drainWaitTimer <= 0) {
      rb.aiImpulseTimer = 0.65 + (rIdx % 3) * 0.22;
      if (rb.archetype === 'bumper_hunter' && mushroomBumpers.length > 0) {
        const targetB = mushroomBumpers[(Math.floor(timeSec * 2) + rIdx) % mushroomBumpers.length];
        const dx = targetB.x - rb.x;
        const dz = targetB.z - rb.z;
        const len = Math.hypot(dx, dz) || 1;
        rb.vx += (dx / len) * 5.2;
        rb.vz += (dz / len) * 5.2;
      } else if (rb.archetype === 'ramp_sprinter') {
        const targetRampX = rIdx % 2 === 0 ? -8.2 : 6.4;
        rb.vx += Math.sign(targetRampX - rb.x) * 4.2;
        rb.vz -= 6.0;
      } else if (rb.archetype === 'spinner_ace' && starTargets.length > 0) {
        const targetS = starTargets[(Math.floor(timeSec * 3) + rIdx) % starTargets.length];
        const dx = targetS.x - rb.x;
        const dz = targetS.z - rb.z;
        const len = Math.hypot(dx, dz) || 1;
        rb.vx += (dx / len) * 4.8;
        rb.vz += (dz / len) * 4.8;
      } else {
        rb.vx += (-0.8 - rb.x) * 0.45;
        if (rb.z > 4.0) rb.vz -= 5.0;
      }
    }

    // Gentle kid-friendly rubber-banding when player is actively flipping on early stages
    let rubberBandScale = 1.0;
    if (flipperActiveTimer > 0 && rb.score > playerScore + targetScore * 0.14) {
      rubberBandScale = currentWorld <= 1 ? 0.72 : 0.85;
    }

    const isStunned = rb.dizzyTimer > 0;
    if (isStunned) {
      rb.dizzyTimer = Math.max(0, rb.dizzyTimer - dt);
      rb.meshObj.dizzyHalo.visible = true;
      rb.meshObj.dizzyHalo.rotation.y += dt * 10.5;
      rb.meshObj.medallionGroup.rotation.z = Math.sin(timeSec * 16) * 0.35;
      stepSingleBallPhysics(rb, false, dt * 0.55, timeSec);
      if (!rb.finished) {
        rb.score += rb.baseScoreRate * rivalGraceScale * rubberBandScale * 0.55 * dt;
      }
    } else {
      rb.meshObj.dizzyHalo.visible = false;
      rb.meshObj.medallionGroup.rotation.z = 0;
      stepSingleBallPhysics(rb, false, dt, timeSec);
      if (!rb.finished) {
        rb.score += rb.baseScoreRate * rivalGraceScale * rubberBandScale * dt;
      }
    }

    // Ball-vs-Rival Clash with Mass-Weighted 3D Impulse j = -(1+e)(v_rel·n)/(1/m1 + 1/m2), m ∝ r³!
    playerBalls.forEach((pb) => {
      if (pb.inShooterLane || pb.drainWaitTimer > 0) return;
      const dx = pb.x - rb.x;
      const dz = pb.z - rb.z;
      const dist = Math.hypot(dx, dz);
      const r1 = pb.meshObj.radius;
      const r2 = rb.meshObj.radius;
      const minDist = r1 + r2;
      if (dist < minDist && dist > 0.001) {
        const nx = dx / dist;
        const nz = dz / dist;
        const m1 = r1 * r1 * r1;
        const m2 = r2 * r2 * r2;
        const invM1 = 1 / m1;
        const invM2 = 1 / m2;
        const invMSum = invM1 + invM2;

        const overlap = minDist + 0.04 - dist;
        pb.x += nx * overlap * (invM1 / invMSum);
        pb.z += nz * overlap * (invM1 / invMSum);
        rb.x -= nx * overlap * (invM2 / invMSum);
        rb.z -= nz * overlap * (invM2 / invMSum);

        const rvx = pb.vx - rb.vx;
        const rvz = pb.vz - rb.vz;
        const vRelN = Math.min(rvx * nx + rvz * nz, -14.0);
        const eClash = 0.85;
        const j = (-(1 + eClash) * vRelN) / invMSum;

        pb.vx += j * invM1 * nx;
        pb.vz += j * invM1 * nz;
        rb.vx -= j * invM2 * nx;
        rb.vz -= j * invM2 * nz;
        pb.vy = Math.max(pb.vy, 2.8);
        rb.vy = Math.max(rb.vy, 3.4);

        rb.dizzyTimer = Math.max(rb.dizzyTimer, 0.85);
        if (!rb.clashCooldown || rb.clashCooldown <= 0) {
          rb.clashCooldown = 0.18;
          const midX = (pb.x + rb.x) * 0.5;
          const midZ = (pb.z + rb.z) * 0.5;
          addPlayerPoints(12, midX, midZ, false, true);
          spawn3DBurst(midX, 0.95, midZ, 0xffea00, 24, true);
          spawnShockwave3D(midX, 0.7, midZ, 0xffea00, 3.4, true);
          addTrauma(0.40);
          hitStopTimer = Math.max(hitStopTimer, 0.025);
          playClashPopSfx();
        }
      }
    });

    if (!rb.finished && rb.score >= targetScore) {
      rb.score = targetScore;
      rb.finished = true;
      rb.finishOrder = ++finishedRacerCount;
    }
  });

  if (!playerFinished && playerScore >= targetScore) {
    playerFinished = true;
    playerFinishOrder = ++finishedRacerCount;
  }

  const mainBall = playerBalls[0] || { x: 0, z: 2 };
  updateCameraFraming(dt, mainBall.x, mainBall.z, timeSec);

  const pPct = `${Math.round(Math.max(0, Math.min(100, (playerScore / targetScore) * 100)))}%`;
  if (hudCache.progressWidth !== pPct) {
    hudCache.progressWidth = pPct;
    if (DOM.trackProgressFill) DOM.trackProgressFill.style.width = pPct;
    if (DOM.playerMarker) DOM.playerMarker.style.left = pPct;
  }

  rivalBalls.forEach((r, idx) => {
    const rPct = `${Math.round(Math.max(0, Math.min(100, (r.score / targetScore) * 100)))}%`;
    if (hudCache.rivalLefts[idx] !== rPct) {
      hudCache.rivalLefts[idx] = rPct;
      const el = DOM.rivalMarkers[idx];
      if (el) el.style.left = rPct;
    }
  });

  updateLiveRankHud(false);

  const finishedRivals = rivalBalls.filter((r) => r.finished).length;
  if (playerScore >= targetScore || finishedRivals >= 4) {
    finishPinballTournament(false);
  }
}

// Block OS Touch Context Menu / Image Save Menu Everywhere in the App
const pinballAppEl = document.getElementById('pinballApp');
if (pinballAppEl) {
  pinballAppEl.addEventListener('contextmenu', (e) => e.preventDefault());
}
window.addEventListener('contextmenu', (e) => e.preventDefault());

// Multi-Pointer & Keyboard Controls on 3D Viewport & Arcade Pedals
function releasePointerFlipper(pointerId) {
  let changed = false;
  if (leftActivePointers.delete(pointerId)) changed = true;
  if (rightActivePointers.delete(pointerId)) changed = true;
  if (changed) syncFlipperHeldState();
}

// Each Half of the Screen is a Full-Height Tap Zone for Left & Right Flippers!
canvas.addEventListener('pointerdown', (e) => {
  ensureAudioFromUserGesture();
  hideSteerGuide();
  if (DOM.worldSelectorRail) {
    DOM.worldSelectorRail.classList.remove('drawer-open');
  }
  const ratioX = e.clientX / (window.innerWidth || 1);
  if (ratioX < 0.5) {
    leftActivePointers.add(e.pointerId);
    syncFlipperHeldState();
    triggerLeftFlipper();
  } else {
    rightActivePointers.add(e.pointerId);
    syncFlipperHeldState();
    triggerRightFlipper();
  }
});

window.addEventListener('pointerup', (e) => releasePointerFlipper(e.pointerId));
window.addEventListener('pointercancel', (e) => releasePointerFlipper(e.pointerId));
window.addEventListener('blur', () => {
  leftActivePointers.clear();
  rightActivePointers.clear();
  leftKeyHeld = false;
  rightKeyHeld = false;
  syncFlipperHeldState();
});

function bindFlipperButton(btn, isLeft) {
  if (!btn) return;
  const pointerSet = isLeft ? leftActivePointers : rightActivePointers;
  const triggerFn = isLeft ? triggerLeftFlipper : triggerRightFlipper;

  btn.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    ensureAudioFromUserGesture();
    pointerSet.add(e.pointerId);
    if (btn.setPointerCapture) {
      try {
        btn.setPointerCapture(e.pointerId);
      } catch (_err) {}
    }
    syncFlipperHeldState();
    triggerFn();
  });

  const onEnd = (e) => {
    if (pointerSet.delete(e.pointerId)) {
      syncFlipperHeldState();
    }
  };
  btn.addEventListener('pointerup', onEnd);
  btn.addEventListener('pointercancel', onEnd);
  btn.addEventListener('lostpointercapture', onEnd);
}

bindFlipperButton(DOM.btnFlipperLeft, true);
bindFlipperButton(DOM.btnFlipperRight, false);

// Instant pointerdown helper for Plunger & Power Pedals (with untrusted click fallback for QA tests)
function bindInstantPedalButton(btn, actionFn) {
  if (!btn) return;
  let firedOnPointerDown = false;
  btn.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    ensureAudioFromUserGesture();
    firedOnPointerDown = true;
    actionFn();
  });
  btn.addEventListener('click', (e) => {
    if (firedOnPointerDown) {
      firedOnPointerDown = false;
      return;
    }
    if (!e.isTrusted) {
      actionFn();
    }
  });
}

bindInstantPedalButton(DOM.btnPlungerLaunch, () => launchPlunger(false));
bindInstantPedalButton(DOM.btnPedalMagnet, triggerPedalMagnet);
bindInstantPedalButton(DOM.btnPedalMultiball, triggerPedalMultiball);
bindInstantPedalButton(DOM.btnPedalTiltQuake, triggerPedalTiltQuake);

window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.isTrusted) ensureAudioFromUserGesture();

  // When Podium or Finale Modal is open, Space/Enter advances or replays and 1/2/3 are ignored!
  if (isModalOrRaceFinished()) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (DOM.finaleModal && !DOM.finaleModal.classList.contains('hidden')) {
        if (DOM.btnFinaleClose) DOM.btnFinaleClose.click();
      } else if (DOM.winModal && !DOM.winModal.classList.contains('hidden')) {
        if (DOM.btnWinNext && !DOM.btnWinNext.classList.contains('hidden') && !playerLostRace) {
          DOM.btnWinNext.click();
        } else if (DOM.btnWinReplay) {
          DOM.btnWinReplay.click();
        }
      }
    }
    return;
  }

  if (e.key === 'ArrowLeft' || e.key === 'z' || e.key === 'Z' || e.key === 'a' || e.key === 'A') {
    leftKeyHeld = true;
    syncFlipperHeldState();
    triggerLeftFlipper();
  } else if (
    e.key === 'ArrowRight' ||
    e.key === 'm' ||
    e.key === 'M' ||
    e.key === 'd' ||
    e.key === 'D'
  ) {
    rightKeyHeld = true;
    syncFlipperHeldState();
    triggerRightFlipper();
  } else if (e.key === 'ArrowUp' || e.key === 'Enter' || e.key === 'w' || e.key === 'W') {
    e.preventDefault();
    flashPedalKeyFeedback(DOM.btnPlungerLaunch);
    launchPlunger(false);
  } else if (e.key === '1') {
    flashPedalKeyFeedback(DOM.btnPedalMagnet);
    triggerPedalMagnet();
  } else if (e.key === '2' || e.key === ' ') {
    e.preventDefault();
    flashPedalKeyFeedback(DOM.btnPedalMultiball);
    triggerPedalMultiball();
  } else if (e.key === '3') {
    flashPedalKeyFeedback(DOM.btnPedalTiltQuake);
    triggerPedalTiltQuake();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'z' || e.key === 'Z' || e.key === 'a' || e.key === 'A') {
    leftKeyHeld = false;
    syncFlipperHeldState();
  } else if (
    e.key === 'ArrowRight' ||
    e.key === 'm' ||
    e.key === 'M' ||
    e.key === 'd' ||
    e.key === 'D'
  ) {
    rightKeyHeld = false;
    syncFlipperHeldState();
  }
});

// 0.6s Hold-to-Confirm on Topbar Replay Button (Prevents Accidental Single-Tap Game Wipe!)
bindHoldConfirmAction(
  DOM.btnRestartTable,
  () => {
    if (DOM.winModal) DOM.winModal.classList.add('hidden');
    buildPinballTableWorld(currentWorld);
  },
  () => playerScore > 15 && !raceFinished
);

// Landscape 🗺️ Table Selector Drawer Toggle Button
const btnTableMapToggle = document.getElementById('btnTableMapToggle');
if (btnTableMapToggle) {
  btnTableMapToggle.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    ensureAudioFromUserGesture();
    if (DOM.worldSelectorRail) {
      DOM.worldSelectorRail.classList.toggle('drawer-open');
    }
  });
}

if (DOM.btnSoundToggle) {
  DOM.btnSoundToggle.addEventListener('click', (e) => {
    soundEnabled = !soundEnabled;
    e.currentTarget.textContent = soundEnabled ? '🔊' : '🔇';
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, soundEnabled ? '1' : '0');
    } catch (_err) {}
    if (soundEnabled) ensureAudioFromUserGesture();
  });
}

if (DOM.btnWinReplay) {
  DOM.btnWinReplay.addEventListener('click', () => {
    ensureAudioFromUserGesture();
    if (DOM.winModal) DOM.winModal.classList.add('hidden');
    buildPinballTableWorld(currentWorld);
  });
}

if (DOM.btnWinNext) {
  DOM.btnWinNext.addEventListener('click', () => {
    ensureAudioFromUserGesture();
    if (playerLostRace) return;
    if (DOM.winModal) DOM.winModal.classList.add('hidden');
    if (currentWorld < CRITTERS.length - 1) {
      buildPinballTableWorld(currentWorld + 1);
    } else {
      if (DOM.finaleGrid) {
        DOM.finaleGrid.innerHTML = CRITTERS.map((c, idx) => {
          const stars = Math.max(1, cupStars[idx] || 1);
          return `
          <div class="finale-tile">
            <img src="${c.icon}" alt="" />
            <span>${'⭐'.repeat(stars)} ${c.badge}</span>
          </div>
        `;
        }).join('');
      }
      if (DOM.finaleModal) DOM.finaleModal.classList.remove('hidden');
    }
  });
}

if (DOM.btnFinaleClose) {
  DOM.btnFinaleClose.addEventListener('click', () => {
    ensureAudioFromUserGesture();
    if (DOM.finaleModal) DOM.finaleModal.classList.add('hidden');
    buildPinballTableWorld(0);
  });
}

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if (DOM.worldSelectorRail) {
    DOM.worldSelectorRail.classList.remove('drawer-open');
  }
  const mainBall = playerBalls[0] || { x: 0, z: 2 };
  updateCameraFraming(0, mainBall.x, mainBall.z);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    leftActivePointers.clear();
    rightActivePointers.clear();
    leftKeyHeld = false;
    rightKeyHeld = false;
    syncFlipperHeldState();
  } else {
    lastTime = performance.now();
  }
});

// Automated Headless Chrome QA & Testing API (`window.gameTestApi`)
window.gameTestApi = {
  getState() {
    const cfg = CRITTERS[currentWorld];
    const { standings, currentRank, projectedStars } = updateLiveRankHud(false);
    return {
      title: 'Critter Pinball 3D: Rainbow Arcade Bumper Table!',
      currentStage: currentWorld,
      critterId: cfg.id,
      stageUnlocked: CRITTERS.map((_, idx) => isWorldUnlocked(idx)),
      score: Math.round(playerScore),
      targetScore: cfg.targetScore,
      progressPct: Math.max(0, Math.min(100, (playerScore / cfg.targetScore) * 100)),
      rank: currentRank,
      projectedStars,
      rainbowFever: rainbowFeverTimer > 0,
      feverMeter: Math.round(feverMeter),
      activeBalls: playerBalls.length,
      bumperHits: totalBumperHits,
      comboCount,
      cooldowns: {
        magnet: +magnetCooldown.toFixed(2),
        multiball: +multiballCooldown.toFixed(2),
        quake: +tiltQuakeCooldown.toFixed(2)
      },
      raceFinished,
      playerFinishRank,
      playerLost: playerLostRace,
      cupStars: [...cupStars],
      standings
    };
  },
  triggerPedal(idx) {
    triggerPedalByIndex(Number(idx) || 0);
    return this.getState();
  },
  flipLeft() {
    triggerLeftFlipper();
    return this.getState();
  },
  flipRight() {
    triggerRightFlipper();
    return this.getState();
  },
  launchPlunger() {
    launchPlunger(false);
    return this.getState();
  },
  selectStage(idx) {
    buildPinballTableWorld(Number(idx) || 0);
    return this.getState();
  },
  forceFinish(rank = 1) {
    return forceFinishAtRank(rank);
  }
};

// Start 3D Engine Loop with Sub-Stepped Wall-Clock Physics (1:1 real-time even at low headless FPS!)
let lastTime = performance.now();
let simTimeElapsed = 0;

function animate(now) {
  let rawDt = Math.min(0.25, Math.max(0.001, (now - lastTime) / 1000));
  lastTime = now;

  while (rawDt > 0.0001) {
    const step = Math.min(0.033, rawDt);
    simTimeElapsed += step;
    updateGame3D(step, simTimeElapsed);
    rawDt -= step;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

buildPinballTableWorld(0);
// Pre-warm WebGL geometry registry with 1 render pass
warmupParticleAnchor.visible = true;
warmupShockwaveAnchor.visible = true;
renderer.render(scene, camera);
warmupParticleAnchor.visible = false;
warmupShockwaveAnchor.visible = false;

requestAnimationFrame(animate);
