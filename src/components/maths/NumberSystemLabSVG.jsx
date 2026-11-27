import React, { useState, useEffect, useMemo } from 'react';
import {
  Calculator, Sparkles, Play, Pause, RotateCcw, ChevronRight, Zap, CheckCircle2, XCircle
} from 'lucide-react';

const LAB_TABS = [
  { id: 'div', label: { en: '1. Divisibility & C9 X-Ray', hi: '1. विभाज्यता व C9 एक्स-रे' } },
  { id: 'unit', label: { en: '2. Unit Digit Wheel', hi: '2. इकाई अंक चक्र' } },
  { id: 'lcm', label: { en: '3. Bell Sync (HCF–LCM)', hi: '3. घंटी सिंक (HCF–LCM)' } },
  { id: 'bodmas', label: { en: '4. VBODMAS Peeler', hi: '4. VBODMAS स्टेप-पीलर' } },
  { id: 'bar', label: { en: '5. Bar Decimal (p/q)', hi: '5. बार दशमलव (p/q)' } },
];

const DIV_PRESETS = [
  { label: '285219 (ALP 2025 PYQ)', val: '285219' },
  { label: '17688 (ALP 2026 PYQ)', val: '17688' },
  { label: '5544 (ALP Shift-1 PYQ)', val: '5544' },
  { label: '999808 (NTPC UG PYQ)', val: '999808' },
];

const BODMAS_PRESETS = [
  {
    id: 'alp_s3',
    title: { en: 'ALP Shift 3 PYQ: 75 − {18 ÷ 3 × (4 + 2) − 5 × 3} + 28 ÷ 7', hi: 'ALP Shift 3 PYQ: 75 − {18 ÷ 3 × (4 + 2) − 5 × 3} + 28 ÷ 7' },
    steps: [
      { expr: '75 − {18 ÷ 3 × (4 + 2) − 5 × 3} + 28 ÷ 7', active: '(4 + 2) = 6', note: { en: 'Step 1 (B — Innermost Round Bracket): Evaluate (4 + 2) first.', hi: 'चरण 1 (B — छोटा कोष्ठक): सबसे पहले (4 + 2) = 6 हल करें।' } },
      { expr: '75 − {18 ÷ 3 × 6 − 5 × 3} + 28 ÷ 7', active: '18 ÷ 3 = 6', note: { en: 'Step 2 (D — Division inside Curly Bracket): 18 ÷ 3 = 6 (Never multiply 3×6 before dividing!).', hi: 'चरण 2 (D — { } के भीतर भाग): 18 ÷ 3 = 6 पहले करें (गलती से 3×6 पहले न करें!)।' } },
      { expr: '75 − {6 × 6 − 5 × 3} + 28 ÷ 7', active: '6 × 6 = 36, 5 × 3 = 15', note: { en: 'Step 3 (M — Multiplications inside Curly): 36 − 15.', hi: 'चरण 3 (M — गुणा): 6×6 = 36 और 5×3 = 15।' } },
      { expr: '75 − {36 − 15} + 28 ÷ 7', active: '{36 − 15} = 21 & 28 ÷ 7 = 4', note: { en: 'Step 4 (Clear Curly + Outside Division): 36 − 15 = 21 and 28 ÷ 7 = 4.', hi: 'चरण 4 (मझला कोष्ठक व बाहर का भाग): 36 − 15 = 21 तथा 28 ÷ 7 = 4।' } },
      { expr: '75 − 21 + 4 = 58 ✓', active: '58', note: { en: 'Final Answer (A/S): 75 + 4 − 21 = 79 − 21 = 58!', hi: 'अंतिम उत्तर: 75 + 4 − 21 = 79 − 21 = 58!' } },
    ],
  },
  {
    id: 'alp_cbt2',
    title: { en: 'ALP CBT-2 PYQ: 60 − {(−8) × (−16 − 19 − 2)} ÷ [5 × {2 + (−1)(−1)}]', hi: 'ALP CBT-2 PYQ: 60 − {(−8) × (−16 − 19 − 2)} ÷ [5 × {2 + (−1)(−1)}]' },
    steps: [
      { expr: '60 − {(−8) × (−16 − 19 − 2)} ÷ [5 × {2 + (−1) × (−1)}]', active: '(−16−19−2) = −37 & (−1)×(−1) = +1', note: { en: 'Step 1 (B — Inner Brackets): (−16 − 19 − 2) = −37; (−1)×(−1) = +1.', hi: 'चरण 1 (B — छोटे कोष्ठक): तीनों ऋणात्मक जोड़ें = −37; (−1)×(−1) = +1।' } },
      { expr: '60 − {(−8) × (−37)} ÷ [5 × {2 + 1}]', active: '(−8)×(−37) = +296 & {2+1} = 3', note: { en: 'Step 2 (Sign + Curly): (−) × (−) = (+), so 8 × 37 = 296. Right bracket: 5 × 3 = 15.', hi: 'चरण 2 (चिह्न व मझला कोष्ठक): (−)×(−) = +, अतः 8×37 = 296; दायाँ [5 × 3] = 15।' } },
      { expr: '60 − 296 ÷ 15', active: 'Fraction Form: 60 − 296/15', note: { en: 'Step 3 (D — Division before Subtraction!): Never do 60 − 296!', hi: 'चरण 3 (D — घटाव से पहले भाग!): कभी 60 − 296 पहले न घटाएं, भिन्न बनायें 296/15।' } },
      { expr: '(900 − 296) / 15 = 604 / 15 ✓', active: '604 / 15', note: { en: 'Final Answer: 60 = 900/15, so (900 − 296)/15 = 604 / 15!', hi: 'अंतिम उत्तर: (900 − 296) / 15 = 604 / 15!' } },
    ],
  },
];

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function lcm(a, b) {
  if (!a || !b) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

function primeFactorMap(n) {
  const res = [];
  let num = n;
  if (num < 2 || num > 1000000000) return res;
  for (let d = 2; d * d <= num; d++) {
    if (num % d === 0) {
      let c = 0;
      while (num % d === 0) {
        num = Math.floor(num / d);
        c++;
      }
      res.push([d, c]);
    }
  }
  if (num > 1) res.push([num, 1]);
  return res;
}

export default function NumberSystemLabSVG({ lang = 'hi' }) {
  const isHi = lang !== 'en';
  const [activeTab, setActiveTab] = useState('div');

  // Lab 1 State: Divisibility & C9
  const [numStr, setNumStr] = useState('285219');

  // Lab 2 State: Unit Digit Wheel
  const [baseDigit, setBaseDigit] = useState(7);
  const [powerVal, setPowerVal] = useState(2025);

  // Lab 3 State: Bell Sync LCM
  const [bellA, setBellA] = useState(6);
  const [bellB, setBellB] = useState(9);
  const [bellC, setBellC] = useState(12);
  const [tickSec, setTickSec] = useState(0);
  const [bellPlaying, setBellPlaying] = useState(false);

  // Lab 4 State: VBODMAS
  const [bodmasIdx, setBodmasIdx] = useState(0);
  const [bodmasStep, setBodmasStep] = useState(0);

  // Lab 5 State: Bar Decimal a.b(c)
  const [intPart, setIntPart] = useState(0);
  const [nonRep, setNonRep] = useState('2');
  const [repPart, setRepPart] = useState('3');

  const syncLcm = useMemo(() => lcm(lcm(bellA, bellB), bellC), [bellA, bellB, bellC]);
  const syncHcf = useMemo(() => gcd(gcd(bellA, bellB), bellC), [bellA, bellB, bellC]);

  useEffect(() => {
    if (!bellPlaying || activeTab !== 'lcm') return undefined;
    const timer = setInterval(() => {
      setTickSec((s) => (s >= syncLcm ? 0 : s + 1));
    }, 320);
    return () => clearInterval(timer);
  }, [bellPlaying, activeTab, syncLcm]);

  // Divisibility Analysis
  const divStats = useMemo(() => {
    const clean = (numStr.replace(/\D/g, '') || '285219').slice(0, 9);
    const n = parseInt(clean, 10) || 1;
    const digits = clean.split('').map(Number);
    const digitSum = digits.reduce((a, b) => a + b, 0);
    const c9 = digitSum === 0 ? 0 : ((digitSum - 1) % 9) + 1;
    let oddSum = 0;
    let evenSum = 0;
    digits.forEach((d, idx) => {
      if (idx % 2 === 0) oddSum += d;
      else evenSum += d;
    });
    const altDiff = oddSum - evenSum;
    const last2 = digits.length >= 2 ? parseInt(clean.slice(-2), 10) : n;
    const last3 = digits.length >= 3 ? parseInt(clean.slice(-3), 10) : n;
    const factors = primeFactorMap(n);
    const totalFactors = factors.reduce((acc, [, exp]) => acc * (exp + 1), 1);

    const rules = [
      { d: 2, ok: n % 2 === 0, reason: `${clean.slice(-1)} ${n % 2 === 0 ? 'Even' : 'Odd'}` },
      { d: 3, ok: n % 3 === 0, reason: `Sum=${digitSum}` },
      { d: 4, ok: n % 4 === 0, reason: `${last2} ÷ 4` },
      { d: 7, ok: n % 7 === 0, reason: `${n} mod 7=${n % 7}` },
      { d: 8, ok: n % 8 === 0, reason: `${last3} ÷ 8` },
      { d: 9, ok: n % 9 === 0, reason: `C9=${c9}` },
      { d: 11, ok: n % 11 === 0, reason: `Δ=${oddSum}−${evenSum}=${altDiff}` },
      { d: 24, ok: n % 24 === 0, reason: '8 & 3' },
      { d: 72, ok: n % 72 === 0, reason: '8 & 9' },
      { d: 88, ok: n % 88 === 0, reason: '8 & 11' },
      { d: 99, ok: n % 99 === 0, reason: '9 & 11' },
    ];
    return { clean, n, digits, digitSum, c9, oddSum, evenSum, altDiff, last3, factors, totalFactors, rules };
  }, [numStr]);

  // Unit Digit Cycle Analysis
  const unitInfo = useMemo(() => {
    const cycleMap = {
      0: [0],
      1: [1],
      2: [2, 4, 8, 6],
      3: [3, 9, 7, 1],
      4: [4, 6],
      5: [5],
      6: [6],
      7: [7, 9, 3, 1],
      8: [8, 4, 2, 6],
      9: [9, 1],
    };
    const cyc = cycleMap[baseDigit] || [1];
    const len = cyc.length;
    const rem = powerVal % len;
    const activeIdx = len === 1 ? 0 : (rem === 0 ? len - 1 : rem - 1);
    return { cyc, len, rem, activeIdx, finalDigit: cyc[activeIdx] };
  }, [baseDigit, powerVal]);

  // Bar Decimal p/q Live Analysis
  const barInfo = useMemo(() => {
    const nr = nonRep.replace(/\D/g, '').slice(0, 2);
    const rp = (repPart.replace(/\D/g, '') || '3').slice(0, 2);
    const wholeStr = `${nr}${rp}`;
    const fullVal = parseInt(wholeStr, 10) || 0;
    const subVal = nr ? parseInt(nr, 10) : 0;
    const fracNum = fullVal - subVal;
    const nines = '9'.repeat(rp.length);
    const zeros = '0'.repeat(nr.length);
    const den = parseInt(`${nines}${zeros}`, 10);
    const totalNum = intPart * den + fracNum;
    const g = gcd(totalNum, den);
    return { nr, rp, fullVal, subVal, fracNum, den, totalNum, simpNum: totalNum / g, simpDen: den / g };
  }, [intPart, nonRep, repPart]);

  const currentBodmas = BODMAS_PRESETS[bodmasIdx];

  return (
    <div className="rounded-3xl bg-[#070E1D] border border-teal-500/35 p-4 sm:p-6 space-y-4 shadow-xl">
      {/* Header + 5 Lab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-white">
              {isHi ? 'इंटरैक्टिव मैथ्स 5-इन-1 सिम्युलेटर लैब (Ch 1)' : 'Interactive 5-in-1 Number System Concept Lab'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isHi ? 'संख्याएं बदलकर खुद नियम और ट्रिक्स लाइव देखें' : 'Experiment live with PYQ numbers, cycles, bells & VBODMAS'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {LAB_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id)}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-black border cursor-pointer transition-all ${
              activeTab === t.id
                ? 'bg-teal-500 text-slate-950 border-teal-300 shadow-md shadow-teal-950/50'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600'
            }`}
          >
            {isHi ? t.label.hi : t.label.en}
          </button>
        ))}
      </div>

      {/* TAB 1: LIVE DIVISIBILITY & C9 X-RAY */}
      {activeTab === 'div' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              inputMode="numeric"
              value={numStr}
              onChange={(e) => setNumStr(e.target.value.replace(/\D/g, '').slice(0, 9))}
              placeholder="Enter any integer..."
              className="px-3.5 py-2 rounded-xl bg-slate-950 border border-teal-500/40 text-sm font-black text-teal-300 w-44 focus:outline-none focus:border-teal-400"
            />
            {DIV_PRESETS.map((pr) => (
              <button
                key={pr.val}
                type="button"
                onClick={() => setNumStr(pr.val)}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold border cursor-pointer ${
                  numStr === pr.val
                    ? 'bg-amber-400 text-slate-950 border-amber-300'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-400/50'
                }`}
              >
                {pr.label}
              </button>
            ))}
          </div>

          {/* Alternating Digit X-Ray Visual */}
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="text-[11px] font-bold text-slate-400">
              {isHi
                ? 'विषम (हरे) बनाम सम (नीले) स्थानों का एक्स-रे + 9 व 11 विभाज्यता जांच:'
                : 'Odd-Place (Green) vs Even-Place (Blue) Digit X-Ray for 11 & Digital Sum (C9):'}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {divStats.digits.map((d, idx) => {
                const isOddPos = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`w-10 h-12 rounded-xl border flex flex-col items-center justify-center ${
                      isOddPos
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                        : 'bg-sky-950/40 border-sky-500/50 text-sky-300'
                    }`}
                  >
                    <span className="text-base font-black">{d}</span>
                    <span className="text-[9px] font-bold opacity-80">{isOddPos ? 'Odd' : 'Even'}</span>
                  </div>
                );
              })}

              <div className="ml-auto flex flex-wrap gap-2 text-xs">
                <div className="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-amber-200">
                  <b>C9 (Digital Sum):</b> {divStats.digitSum} → <span className="text-amber-300 font-black">{divStats.c9}</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/35 text-cyan-200">
                  <b>11 Diff:</b> |{divStats.oddSum} − {divStats.evenSum}| = <span className="font-black">{Math.abs(divStats.altDiff)}</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-300 pt-1 flex flex-wrap gap-x-4 gap-y-1">
              <span>
                <b className="text-teal-300">{isHi ? 'अभाज्य गुणनखंड:' : 'Prime Factorization:'}</b>{' '}
                {divStats.factors.length
                  ? divStats.factors.map(([p, e]) => (e > 1 ? `${p}^${e}` : `${p}`)).join(' × ')
                  : '1'}
              </span>
              <span>
                <b className="text-violet-300">{isHi ? 'कुल गुणनखंड (Factors):' : 'Total Divisors:'}</b>{' '}
                {divStats.totalFactors}
              </span>
            </div>
          </div>

          {/* Grid of Rules */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {divStats.rules.map((r) => (
              <div
                key={r.d}
                className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between gap-1 ${
                  r.ok
                    ? 'bg-emerald-950/35 border-emerald-500/50 text-emerald-100'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between font-black">
                  <span>÷ {r.d}</span>
                  {r.ok ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 text-slate-600" />
                  )}
                </div>
                <div className="text-[10px] truncate opacity-90">{r.reason}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: UNIT DIGIT CYCLICITY */}
      {activeTab === 'unit' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 space-y-3">
            <div>
              <div className="text-[11px] font-bold text-slate-400 mb-1.5">
                {isHi ? 'आधार का इकाई अंक चुनें (Base Unit Digit):' : 'Select Base Unit Digit (0–9):'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setBaseDigit(d)}
                    className={`w-9 h-9 rounded-xl font-black text-sm border cursor-pointer ${
                      baseDigit === d
                        ? 'bg-amber-400 text-slate-950 border-amber-200'
                        : 'bg-slate-900 border-slate-700 text-slate-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1">
                <span>{isHi ? 'घात (Exponent n):' : 'Power (n):'}</span>
                <span className="text-amber-300 font-black">n = {powerVal}</span>
              </div>
              <input
                type="range"
                min={1}
                max={2030}
                value={powerVal}
                onChange={(e) => setPowerVal(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {[19, 44, 99, 256, 2025, 2026].map((pv) => (
                  <button
                    key={pv}
                    type="button"
                    onClick={() => setPowerVal(pv)}
                    className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[10px] font-bold text-slate-300 hover:border-teal-400 cursor-pointer"
                  >
                    n={pv}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1">
              <div className="text-teal-300 font-black">
                {isHi
                  ? `चक्र लंबाई (Cycle) = ${unitInfo.len} ⇒ ${powerVal} ÷ ${unitInfo.len} का शेष = ${unitInfo.rem === 0 ? `${unitInfo.len} (r=0)` : unitInfo.rem}`
                  : `Cycle Length = ${unitInfo.len} => ${powerVal} mod ${unitInfo.len} = ${unitInfo.rem === 0 ? `${unitInfo.len} (Remainder 0)` : unitInfo.rem}`}
              </div>
              <div className="text-slate-300">
                {isHi ? 'चक्र मान: ' : 'Cycle sequence: '}
                {unitInfo.cyc.map((val, idx) => (
                  <span
                    key={idx}
                    className={`inline-block px-2 py-0.5 mx-0.5 rounded font-black ${
                      idx === unitInfo.activeIdx
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <svg viewBox="0 0 220 180" className="w-48 h-40">
              <circle cx="110" cy="86" r="56" fill="none" stroke="#1E293B" strokeWidth="8" />
              <circle
                cx="110"
                cy="86"
                r="56"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="4"
                strokeDasharray="12 6"
              />
              {unitInfo.cyc.map((val, idx) => {
                const angle = (-Math.PI / 2) + (idx * 2 * Math.PI) / unitInfo.cyc.length;
                const x = 110 + 56 * Math.cos(angle);
                const y = 86 + 56 * Math.sin(angle);
                const active = idx === unitInfo.activeIdx;
                return (
                  <g key={idx}>
                    <circle
                      cx={x}
                      cy={y}
                      r={active ? 18 : 13}
                      fill={active ? '#10B981' : '#0F172A'}
                      stroke={active ? '#A7F3D0' : '#475569'}
                      strokeWidth="2"
                    />
                    <text
                      x={x}
                      y={y + 4}
                      textAnchor="middle"
                      fontSize={active ? 14 : 11}
                      fontWeight="900"
                      fill={active ? '#022C22' : '#E2E8F0'}
                    >
                      {val}
                    </text>
                  </g>
                );
              })}
              <text x="110" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill="#94A3B8">
                (...{baseDigit})^{powerVal}
              </text>
              <text x="110" y="102" textAnchor="middle" fontSize="18" fontWeight="900" fill="#34D399">
                UD = {unitInfo.finalDigit}
              </text>
            </svg>
          </div>
        </div>
      )}

      {/* TAB 3: ANIMATED BELL / SIGNAL SYNC (LCM & HCF) */}
      {activeTab === 'lcm' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <label className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <span>Bell A:</span>
                <select
                  value={bellA}
                  onChange={(e) => { setBellA(Number(e.target.value)); setTickSec(0); }}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white"
                >
                  {[4, 6, 8, 9, 10, 12].map((v) => <option key={v} value={v}>{v}s</option>)}
                </select>
              </label>
              <label className="flex items-center gap-1.5 text-amber-300 font-bold">
                <span>Bell B:</span>
                <select
                  value={bellB}
                  onChange={(e) => { setBellB(Number(e.target.value)); setTickSec(0); }}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white"
                >
                  {[6, 8, 9, 12, 15, 18].map((v) => <option key={v} value={v}>{v}s</option>)}
                </select>
              </label>
              <label className="flex items-center gap-1.5 text-emerald-300 font-bold">
                <span>Bell C:</span>
                <select
                  value={bellC}
                  onChange={(e) => { setBellC(Number(e.target.value)); setTickSec(0); }}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white"
                >
                  {[9, 12, 15, 18, 20, 24].map((v) => <option key={v} value={v}>{v}s</option>)}
                </select>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBellPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-500 text-slate-950 text-xs font-black cursor-pointer"
              >
                {bellPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{bellPlaying ? 'Pause' : isHi ? 'एनिमेशन चलाएं' : 'Play Sync'}</span>
              </button>
              <button
                type="button"
                onClick={() => { setBellPlaying(false); setTickSec(0); }}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300">
                ⏱️ {isHi ? 'समय:' : 'Elapsed:'} <b className="text-white text-sm">{tickSec}s</b> / {syncLcm}s
              </span>
              <span className="text-emerald-300">
                HCF = {syncHcf}  •  <b className="text-amber-300">LCM (एक साथ बजेंगी) = {syncLcm}s</b>
              </span>
            </div>

            {[
              { label: `Bell A (${bellA}s)`, period: bellA, color: '#22D3EE' },
              { label: `Bell B (${bellB}s)`, period: bellB, color: '#FBBF24' },
              { label: `Bell C (${bellC}s)`, period: bellC, color: '#34D399' },
            ].map((b) => {
              const rings = tickSec > 0 && tickSec % b.period === 0;
              const allRing = tickSec > 0 && tickSec % syncLcm === 0;
              const pct = syncLcm > 0 ? Math.min(100, (tickSec / syncLcm) * 100) : 0;
              return (
                <div key={b.label} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-200">{b.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-black text-[10px] transition-all ${
                        allRing
                          ? 'bg-emerald-500 text-slate-950 animate-pulse'
                          : rings
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      {allRing ? '🔔 ALL TOGETHER (LCM)!' : rings ? '🔔 RING!' : `${b.period - (tickSec % b.period)}s left`}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800 relative">
                    <div
                      className="h-full transition-all duration-200"
                      style={{ width: `${pct}%`, backgroundColor: b.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: VBODMAS BRACKET PEELER */}
      {activeTab === 'bodmas' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {BODMAS_PRESETS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => { setBodmasIdx(i); setBodmasStep(0); }}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border cursor-pointer ${
                  bodmasIdx === i
                    ? 'bg-amber-400 text-slate-950 border-amber-300'
                    : 'bg-slate-900 border-slate-700 text-slate-300'
                }`}
              >
                {isHi ? p.title.hi : p.title.en}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="text-[11px] font-black text-amber-300 uppercase">
              {isHi
                ? `चरण ${bodmasStep + 1} / ${currentBodmas.steps.length} — सक्रिय क्रिया: ${currentBodmas.steps[bodmasStep].active}`
                : `Step ${bodmasStep + 1} of ${currentBodmas.steps.length} — Active Operation: ${currentBodmas.steps[bodmasStep].active}`}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-teal-500/40 font-mono text-sm sm:text-base font-black text-white overflow-x-auto">
              {currentBodmas.steps[bodmasStep].expr}
            </div>

            <div className="text-xs sm:text-sm text-teal-200 leading-relaxed">
              {isHi
                ? currentBodmas.steps[bodmasStep].note.hi
                : currentBodmas.steps[bodmasStep].note.en}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                disabled={bodmasStep === 0}
                onClick={() => setBodmasStep((s) => Math.max(0, s - 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 disabled:opacity-40 text-xs font-bold text-slate-200 cursor-pointer"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setBodmasStep((s) => (s + 1 >= currentBodmas.steps.length ? 0 : s + 1))
                }
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-black cursor-pointer"
              >
                <span>
                  {bodmasStep + 1 >= currentBodmas.steps.length
                    ? isHi
                      ? 'शुरू से देखें'
                      : 'Restart'
                    : isHi
                    ? 'अगला चरण देखें'
                    : 'Peel Next Step'}
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: RECURRING BAR DECIMAL VISUALIZER */}
      {activeTab === 'bar' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-6 space-y-3 text-xs">
            <div className="grid grid-cols-3 gap-2">
              <label className="space-y-1">
                <span className="text-slate-400 font-bold block">{isHi ? 'पूर्ण भाग' : 'Integer'}</span>
                <input
                  type="number"
                  min={0}
                  max={9}
                  value={intPart}
                  onChange={(e) => setIntPart(Math.max(0, Math.min(9, Number(e.target.value) || 0)))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-black"
                />
              </label>
              <label className="space-y-1">
                <span className="text-rose-300 font-bold block">{isHi ? 'बिना बार अंक' : 'Non-Bar Digits'}</span>
                <input
                  type="text"
                  value={nonRep}
                  onChange={(e) => setNonRep(e.target.value.replace(/\D/g, '').slice(0, 2))}
                  placeholder="empty or 2"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-rose-500/40 text-rose-200 font-black"
                />
              </label>
              <label className="space-y-1">
                <span className="text-emerald-300 font-bold block">{isHi ? 'बार वाले अंक' : 'Bar Digits'}</span>
                <input
                  type="text"
                  value={repPart}
                  onChange={(e) => setRepPart((e.target.value.replace(/\D/g, '') || '3').slice(0, 2))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-200 font-black"
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { l: '0.52̅ (Tech 3)', i: 0, nr: '', rp: '52' },
                { l: '8.46̅ (Tech 3)', i: 8, nr: '', rp: '46' },
                { l: '0.2(3̅) Mixed', i: 0, nr: '2', rp: '3' },
                { l: '6.841̄ (ALP)', i: 6, nr: '84', rp: '1' },
              ].map((p) => (
                <button
                  key={p.l}
                  type="button"
                  onClick={() => { setIntPart(p.i); setNonRep(p.nr); setRepPart(p.rp); }}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[10px] font-bold text-slate-300 hover:border-teal-400 cursor-pointer"
                >
                  {p.l}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 p-4 rounded-2xl bg-slate-950 border border-teal-500/35 space-y-2 text-xs">
            <div className="text-sm font-black text-white">
              {intPart}.{barInfo.nr}
              <span className="border-t-2 border-emerald-400 text-emerald-300 px-0.5">{barInfo.rp}</span>
              {' = '}
              <span className="text-amber-300">
                {barInfo.simpNum} / {barInfo.simpDen}
              </span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <div>
                • <b>{isHi ? 'हर (Denominator):' : 'Denominator Rule:'}</b>{' '}
                {barInfo.rp.length} {isHi ? 'बार अंक ⇒' : 'bar digit(s) ⇒'}{' '}
                <span className="text-emerald-300 font-bold">{'9'.repeat(barInfo.rp.length)}</span>
                {barInfo.nr.length > 0 && (
                  <>
                    {' '}
                    + {barInfo.nr.length} {isHi ? 'बिना बार अंक ⇒' : 'non-bar digit(s) ⇒'}{' '}
                    <span className="text-rose-300 font-bold">{'0'.repeat(barInfo.nr.length)}</span>
                  </>
                )}{' '}
                = <b>{barInfo.den}</b>
              </div>
              <div>
                • <b>{isHi ? 'दशमलव अंश:' : 'Decimal Numerator:'}</b>{' '}
                {barInfo.fullVal} − {barInfo.subVal} = <b>{barInfo.fracNum}</b>
              </div>
              <div>
                • <b>{isHi ? 'पूर्ण भिन्न:' : 'Full p/q:'}</b>{' '}
                {intPart > 0 ? `${intPart} + ${barInfo.fracNum}/${barInfo.den} = ` : ''}
                {barInfo.totalNum}/{barInfo.den} = <b className="text-amber-300">{barInfo.simpNum}/{barInfo.simpDen}</b>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
