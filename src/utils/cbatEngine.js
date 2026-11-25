/**
 * Official RDSO-Pattern Stage-3 ALP CBAT Psychometric Test Engine (All 5 Batteries).
 * Each battery requires T-Score >= 42.0 to qualify; combined CBAT contributes 30% merit weight.
 */

export const CBAT_MIN_TSCORE = 42.0;

export const CBAT_BATTERIES = [
  {
    id: 'memory',
    order: 1,
    name: 'Memory Test (Track & Station Signs)',
    shortName: 'Memory',
    desc: 'Grid me 6 Railway symbols ki position 15s me yaad karein aur sahi cell choose karein.',
    memorizeSec: 15,
    durationSec: 30,
    totalItems: 6,
    refMean: 3.4,
    refSd: 1.35,
  },
  {
    id: 'brick',
    order: 2,
    name: 'Depth Perception (Stacked Brick Test)',
    shortName: 'Brick Test',
    desc: '3D stacked bricks dekh kar batayein ki marked brick (A/B/C) kitne dusre bricks ko touch kar rahi hai.',
    durationSec: 45,
    totalItems: 5,
    refMean: 2.8,
    refSd: 1.25,
  },
  {
    id: 'directions',
    order: 3,
    name: 'Following Directions (5×5 Grid Rules)',
    shortName: 'Directions',
    desc: 'Letter/digit matrix par diye gaye row-column move rules follow karke target cell identify karein.',
    durationSec: 50,
    totalItems: 5,
    refMean: 2.7,
    refSd: 1.2,
  },
  {
    id: 'concentration',
    order: 4,
    name: 'Concentration Test (Yes / No Digit Match)',
    shortName: 'Concentration',
    desc: 'Tezi se compare karein ki dono 6-digit numbers bilkul SAME (Yes) hain ya DIFFERENT (No).',
    durationSec: 35,
    totalItems: 10,
    refMean: 6.2,
    refSd: 2.0,
  },
  {
    id: 'similarity',
    order: 5,
    name: 'Perceptual Speed (Figure Similarity Match)',
    shortName: 'Similarity',
    desc: 'Left target figure se 100% identical symbol figure (A–E) minimum time me pehchanein.',
    durationSec: 40,
    totalItems: 5,
    refMean: 2.9,
    refSd: 1.25,
  },
];

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 1. Memory Test Generator (3x3 Grid with 6 Random Positions)
const MEMORY_SYMBOL_POOL = [
  { id: 1, icon: '🚂', label: 'Engine' },
  { id: 2, icon: '🚩', label: 'Flag' },
  { id: 3, icon: '🚦', label: 'Signal' },
  { id: 4, icon: '⛽', label: 'Fuel' },
  { id: 5, icon: '🧰', label: 'Tools' },
  { id: 6, icon: '🔔', label: 'Bell' },
  { id: 7, icon: '🛤️', label: 'Track' },
  { id: 8, icon: '🌉', label: 'Bridge' },
];

export function generateMemoryPuzzle() {
  const pickedSymbols = shuffleArray(MEMORY_SYMBOL_POOL).slice(0, 6);
  const pickedCells = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8]).slice(0, 6);
  const items = pickedSymbols.map((sym, idx) => ({
    ...sym,
    pos: pickedCells[idx],
  }));
  return { items, gridSize: 9 };
}

// 2. Depth Perception (Brick Touch Counting) — Validated 3D isometric cuboids
// Each block is defined in grid units [x, y, z, w, d, h] (axis-aligned non-overlapping boxes)
function boxesTouch(a, b) {
  const ax1 = a.x, ax2 = a.x + (a.w || 1);
  const ay1 = a.y, ay2 = a.y + (a.d || 1);
  const az1 = a.z, az2 = a.z + (a.h || 1);

  const bx1 = b.x, bx2 = b.x + (b.w || 1);
  const by1 = b.y, by2 = b.y + (b.d || 1);
  const bz1 = b.z, bz2 = b.z + (b.h || 1);

  const xOverlap = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const yOverlap = Math.min(ay2, by2) - Math.max(ay1, by1);
  const zOverlap = Math.min(az2, bz2) - Math.max(az1, bz1);

  // Faces touch cleanly when 2 axes have positive overlap (>0) and the 3rd axis meets at boundary
  const touchX = (ax2 === bx1 || bx2 === ax1) && yOverlap > 0 && zOverlap > 0;
  const touchY = (ay2 === by1 || by2 === ay1) && xOverlap > 0 && zOverlap > 0;
  const touchZ = (az2 === bz1 || bz2 === az1) && xOverlap > 0 && yOverlap > 0;
  return touchX || touchY || touchZ;
}

const BRICK_CLUSTERS = [
  {
    id: 'stack_1',
    blocks: [
      { id: 'b1', label: '', x: 0, y: 0, z: 0, w: 2, d: 1, h: 1 },
      { id: 'b2', label: '', x: 0, y: 1, z: 0, w: 2, d: 1, h: 1 },
      { id: 'b3', label: 'A', x: 0, y: 0, z: 1, w: 1, d: 2, h: 1 },
      { id: 'b4', label: 'B', x: 1, y: 0, z: 1, w: 1, d: 1, h: 1 },
      { id: 'b5', label: '', x: 1, y: 1, z: 1, w: 1, d: 1, h: 1 },
    ],
    askLabel: 'A',
  },
  {
    id: 'stack_2',
    blocks: [
      { id: 'b1', label: 'A', x: 0, y: 0, z: 0, w: 1, d: 2, h: 1 },
      { id: 'b2', label: '', x: 1, y: 0, z: 0, w: 1, d: 1, h: 1 },
      { id: 'b3', label: '', x: 1, y: 1, z: 0, w: 1, d: 1, h: 1 },
      { id: 'b4', label: '', x: 0, y: 0, z: 1, w: 2, d: 1, h: 1 },
      { id: 'b5', label: 'B', x: 0, y: 1, z: 1, w: 1, d: 1, h: 1 },
      { id: 'b6', label: '', x: 0, y: 0, z: 2, w: 1, d: 2, h: 1 },
    ],
    askLabel: 'A',
  },
  {
    id: 'stack_3',
    blocks: [
      { id: 'b1', label: '', x: 0, y: 0, z: 0, w: 2, d: 2, h: 1 },
      { id: 'b2', label: '', x: 0, y: 0, z: 1, w: 1, d: 1, h: 1 },
      { id: 'b3', label: 'C', x: 1, y: 0, z: 1, w: 1, d: 2, h: 1 },
      { id: 'b4', label: '', x: 0, y: 1, z: 1, w: 1, d: 1, h: 1 },
      { id: 'b5', label: '', x: 1, y: 0, z: 2, w: 1, d: 1, h: 1 },
    ],
    askLabel: 'C',
  },
  {
    id: 'stack_4',
    blocks: [
      { id: 'b1', label: '', x: 0, y: 0, z: 0, w: 1, d: 1, h: 1 },
      { id: 'b2', label: '', x: 1, y: 0, z: 0, w: 1, d: 2, h: 1 },
      { id: 'b3', label: '', x: 0, y: 1, z: 0, w: 1, d: 1, h: 1 },
      { id: 'b4', label: 'B', x: 0, y: 0, z: 1, w: 2, d: 1, h: 1 },
      { id: 'b5', label: '', x: 1, y: 1, z: 1, w: 1, d: 1, h: 1 },
      { id: 'b6', label: '', x: 0, y: 0, z: 2, w: 1, d: 1, h: 1 },
    ],
    askLabel: 'B',
  },
  {
    id: 'stack_5',
    blocks: [
      { id: 'b1', label: '', x: 0, y: 0, z: 0, w: 2, d: 1, h: 1 },
      { id: 'b2', label: 'A', x: 0, y: 1, z: 0, w: 1, d: 1, h: 2 },
      { id: 'b3', label: '', x: 1, y: 1, z: 0, w: 1, d: 1, h: 1 },
      { id: 'b4', label: '', x: 1, y: 0, z: 1, w: 1, d: 2, h: 1 },
      { id: 'b5', label: '', x: 0, y: 0, z: 1, w: 1, d: 1, h: 1 },
    ],
    askLabel: 'A',
  },
];

export function countTouchingBricks(blocks, targetLabel) {
  const target = blocks.find((b) => b.label === targetLabel);
  if (!target) return 0;
  return blocks.filter((b) => b.id !== target.id && boxesTouch(target, b)).length;
}

export function generateBrickPuzzles() {
  return BRICK_CLUSTERS.map((cluster, idx) => ({
    id: cluster.id,
    qNo: idx + 1,
    blocks: cluster.blocks,
    askLabel: cluster.askLabel,
    correctCount: countTouchingBricks(cluster.blocks, cluster.askLabel),
    options: [1, 2, 3, 4, 5],
  }));
}

// 3. Following Directions (5x5 Grid Rules)
export function generateDirectionPuzzles() {
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'M', 'P', 'R', 'S', 'T', 'X'];
  const grid = Array.from({ length: 5 }, (_, r) =>
    Array.from({ length: 5 }, (_, c) => LETTERS[(r * 7 + c * 3) % LETTERS.length])
  );

  const scenarios = [
    {
      id: 'dir_1',
      prompt: 'Row 2, Column 2 se start karein → 2 cell RIGHT jaayein → phir 1 cell DOWN jaayein. Kaunsa letter milega?',
      start: [1, 1],
      steps: [[0, 2], [1, 0]],
    },
    {
      id: 'dir_2',
      prompt: 'Row 4, Column 5 se start karein → 3 cell LEFT jaayein → phir 2 cell UP jaayein. Kaunsa letter milega?',
      start: [3, 4],
      steps: [[0, -3], [-2, 0]],
    },
    {
      id: 'dir_3',
      prompt: 'Row 1, Column 1 se 2 cell DOWN → 3 cell RIGHT → phir 1 cell UP move karein. Kaunsa letter hai?',
      start: [0, 0],
      steps: [[2, 0], [0, 3], [-1, 0]],
    },
    {
      id: 'dir_4',
      prompt: 'Center cell (Row 3, Column 3) se 1 cell UP → 2 cell LEFT → phir 2 cell DOWN jaayein. Target letter chunein:',
      start: [2, 2],
      steps: [[-1, 0], [0, -2], [2, 0]],
    },
    {
      id: 'dir_5',
      prompt: 'Row 5, Column 2 se 3 cell UP → 2 cell RIGHT → 1 cell DOWN move karein. Kaunsa letter aayega?',
      start: [4, 1],
      steps: [[-3, 0], [0, 2], [1, 0]],
    },
  ];

  return {
    grid,
    questions: scenarios.map((sc) => {
      let [r, c] = sc.start;
      sc.steps.forEach(([dr, dc]) => {
        r = Math.max(0, Math.min(4, r + dr));
        c = Math.max(0, Math.min(4, c + dc));
      });
      const answer = grid[r][c];
      const distractors = shuffleArray(LETTERS.filter((l) => l !== answer)).slice(0, 3);
      return {
        id: sc.id,
        prompt: sc.prompt,
        answer,
        options: shuffleArray([answer, ...distractors]),
      };
    }),
  };
}

// 4. Concentration Test (Rapid Same / Different Digit Pairs)
export function generateConcentrationPairs(count = 10) {
  const pairs = [];
  for (let i = 0; i < count; i += 1) {
    const digits = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    const isSame = i % 2 === 0 ? Math.random() >= 0.45 : Math.random() >= 0.55;
    let right = digits;
    if (!isSame) {
      const pos = Math.floor(Math.random() * 6);
      const oldD = Number(digits[pos]);
      const newD = (oldD + 1 + Math.floor(Math.random() * 8)) % 10;
      right = digits.slice(0, pos) + String(newD) + digits.slice(pos + 1);
    }
    pairs.push({
      id: `conc_${i + 1}`,
      left: digits,
      right,
      isSame,
    });
  }
  return shuffleArray(pairs);
}

// 5. Perceptual Speed / Similarity (Target SVG Symbol Descriptor Match)
const SPOKE_PATTERNS = [
  { spokes: [0, 2, 4], dot: 1, inner: 'circle' },
  { spokes: [1, 3, 5], dot: 0, inner: 'triangle' },
  { spokes: [0, 1, 3, 4], dot: 2, inner: 'square' },
  { spokes: [0, 2, 3, 5], dot: 4, inner: 'circle' },
  { spokes: [1, 2, 4, 5], dot: 3, inner: 'diamond' },
];

export function generateSimilarityPuzzles() {
  return SPOKE_PATTERNS.map((pat, idx) => {
    const makeVariant = (spokes, dot, inner, isCorrect) => ({
      spokes,
      dot,
      inner,
      isCorrect,
    });

    const v1 = makeVariant(
      pat.spokes.map((s) => (s + 1) % 6),
      pat.dot,
      pat.inner,
      false
    );
    const v2 = makeVariant(pat.spokes, (pat.dot + 3) % 6, pat.inner, false);
    const v3 = makeVariant(
      [...pat.spokes.slice(0, -1), (pat.spokes[pat.spokes.length - 1] + 2) % 6],
      pat.dot,
      pat.inner,
      false
    );
    const altInner = pat.inner === 'circle' ? 'square' : 'circle';
    const v4 = makeVariant(pat.spokes, pat.dot, altInner, false);
    const exact = makeVariant(pat.spokes, pat.dot, pat.inner, true);

    return {
      id: `sim_${idx + 1}`,
      target: pat,
      options: shuffleArray([exact, v1, v2, v3, v4]),
    };
  });
}

// RDSO Composite T-Score Evaluator
export function computeCbatTScore(rawScore, batteryId) {
  const meta = CBAT_BATTERIES.find((b) => b.id === batteryId);
  if (!meta) return 50;
  const sd = Math.max(0.5, Number(meta.refSd || 1));
  const mean = Number(meta.refMean || 0);
  const rawT = 50 + 10 * ((Number(rawScore || 0) - mean) / sd);
  return Number(Math.max(20, Math.min(80, rawT)).toFixed(1));
}

export function evaluateFullCbatResult(scoresByBatteryId = {}) {
  const batteryResults = CBAT_BATTERIES.map((b) => {
    const raw = Number(scoresByBatteryId[b.id] ?? 0);
    const tScore = computeCbatTScore(raw, b.id);
    const qualified = tScore >= CBAT_MIN_TSCORE;
    return {
      id: b.id,
      name: b.name,
      shortName: b.shortName,
      rawScore: raw,
      totalItems: b.totalItems,
      tScore,
      qualified,
    };
  });

  const sumT = batteryResults.reduce((acc, r) => acc + r.tScore, 0);
  const averageTScore = Number((sumT / batteryResults.length).toFixed(1));
  const lowestBattery = batteryResults.reduce(
    (min, cur) => (cur.tScore < min.tScore ? cur : min),
    batteryResults[0]
  );
  const allQualified = batteryResults.every((r) => r.qualified);
  // 30% weightage out of normalized T-score band (max ~30)
  const meritContributionOutOf30 = Number(
    Math.min(30, Math.max(0, (averageTScore / 80) * 30)).toFixed(2)
  );

  return {
    batteryResults,
    averageTScore,
    lowestBattery,
    allQualified,
    meritContributionOutOf30,
  };
}
