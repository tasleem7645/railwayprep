import React, { useState, useEffect, useMemo } from 'react';
import {
  Percent, Sparkles, Play, Pause, RotateCcw, ChevronRight, Scale, TrendingUp, Wallet, Award
} from 'lucide-react';

const LAB_TABS = [
  { id: 'frac', icon: Percent, en: '1. Fraction ↔ % Bridge', hi: '1. भिन्न ↔ % ब्रिज' },
  { id: 'ab', icon: Scale, en: '2. AB Constant Rule', hi: '2. AB स्थिर नियम' },
  { id: 'succ', icon: TrendingUp, en: '3. Successive % Chain', hi: '3. क्रमिक % व जनसंख्या' },
  { id: 'inc', icon: Wallet, en: '4. Income & Alligation', hi: '4. आय-व्यय व Alligation' },
  { id: 'exam', icon: Award, en: '5. Marks & Venn Lab', hi: '5. अंक रेखा व वेन लैब' },
];

const FRACTION_PRESETS = [
  { num: 1, den: 2, pctLabel: '50%', base: 240 },
  { num: 1, den: 3, pctLabel: '33⅓%', base: 240 },
  { num: 1, den: 4, pctLabel: '25%', base: 320 },
  { num: 1, den: 6, pctLabel: '16⅔%', base: 360 },
  { num: 1, den: 7, pctLabel: '14.28%', base: 350 },
  { num: 1, den: 8, pctLabel: '12.5%', base: 320 },
  { num: 3, den: 8, pctLabel: '37.5%', base: 320 },
  { num: 5, den: 8, pctLabel: '62.5%', base: 640 },
  { num: 1, den: 12, pctLabel: '8⅓%', base: 720 },
  { num: 1, den: 16, pctLabel: '6.25%', base: 160 },
];

const SUCC_PRESETS = [
  {
    id: 'alp_cbt2',
    title: { en: 'ALP CBT-2 PYQ: +10%, +20%, +25%', hi: 'ALP CBT-2 PYQ: +10%, +20%, +25%' },
    init: 100,
    steps: [10, 20, 25],
    ratio: '10→11 × 5→6 × 4→5 = 20→33',
    netLabel: '+65%',
  },
  {
    id: 'grp_d_same',
    title: { en: 'Group D PYQ: +30% then −30%', hi: 'Group D PYQ: +30% फिर −30%' },
    init: 100,
    steps: [30, -30],
    ratio: '−x²/100 = −(30²)/100 = −9%',
    netLabel: '−9%',
  },
  {
    id: 'grp_d_4step',
    title: { en: 'Group D S25 PYQ: +45%, −20%, +10%, −25%', hi: 'Group D S25 PYQ: +45%, −20%, +10%, −25%' },
    init: 1000,
    steps: [45, -20, 10, -25],
    ratio: '(29/20) × (4/5) × (11/10) × (3/4) = 957/1000',
    netLabel: '−4.3%',
  },
  {
    id: 'grp_d_pop',
    title: { en: 'Population S31 PYQ (80k): +10%, −5%, +20%', hi: 'जनसंख्या S31 PYQ (80k): +10%, −5%, +20%' },
    init: 80000,
    steps: [10, -5, 20],
    ratio: '80000 × (11/10) × (19/20) × (6/5)',
    netLabel: '1,00,320 (+25.4%)',
  },
];

export default function PercentageLabSVG({ lang = 'hi' }) {
  const isHi = lang !== 'en';
  const [activeTab, setActiveTab] = useState('frac');

  // Lab 1: Fraction <-> %
  const [fracIdx, setFracIdx] = useState(6); // Default 3/8 = 37.5%
  const [customBase, setCustomBase] = useState(320);

  // Lab 2: AB Rule
  const [abMode, setAbMode] = useState('inc'); // 'inc' | 'dec'
  const [abPct, setAbPct] = useState(25);
  const [expAllowedPct, setExpAllowedPct] = useState(0); // 0 = constant expenditure

  // Lab 3: Successive %
  const [succIdx, setSuccIdx] = useState(0);
  const [succStep, setSuccStep] = useState(3);
  const [succPlaying, setSuccPlaying] = useState(false);

  // Lab 4: Income-Exp-Sav Alligation
  const [expChange, setExpChange] = useState(16);
  const [incChange, setIncChange] = useState(22);
  const [savChange, setSavChange] = useState(40);

  // Lab 5: Exam Marks & Venn
  const [passPct, setPassPct] = useState(55);
  const [scoredMarks, setScoredMarks] = useState(120);
  const [failedBy, setFailedBy] = useState(78);

  const curFrac = FRACTION_PRESETS[fracIdx] || FRACTION_PRESETS[0];
  const fracResult = useMemo(() => {
    const b = Math.max(1, Number(customBase) || curFrac.base);
    return ((b * curFrac.num) / curFrac.den).toFixed(b % curFrac.den === 0 ? 0 : 2);
  }, [curFrac, customBase]);

  // AB computation
  const abCalc = useMemo(() => {
    const p = abMode === 'inc' ? abPct : -abPct;
    const pFactor = 100 + p;
    const eTarget = 100 + expAllowedPct;
    const newQtyRatio = (eTarget / pFactor) * 100;
    const diffPct = newQtyRatio - 100;
    return { pFactor, eTarget, newQtyRatio, diffPct };
  }, [abMode, abPct, expAllowedPct]);

  // Successive trajectory
  const curSucc = SUCC_PRESETS[succIdx] || SUCC_PRESETS[0];
  const succValues = useMemo(() => {
    const arr = [{ step: 0, pct: 0, val: curSucc.init }];
    let val = curSucc.init;
    curSucc.steps.forEach((r, i) => {
      val = val * (1 + r / 100);
      arr.push({ step: i + 1, pct: r, val });
    });
    return arr;
  }, [curSucc]);

  useEffect(() => {
    setSuccStep(0);
    setSuccPlaying(true);
  }, [succIdx]);

  useEffect(() => {
    if (!succPlaying || activeTab !== 'succ') return;
    if (succStep >= succValues.length - 1) {
      setSuccPlaying(false);
      return;
    }
    const timer = setTimeout(() => setSuccStep((s) => s + 1), 1000);
    return () => clearTimeout(timer);
  }, [succPlaying, succStep, succValues.length, activeTab]);

  // Alligation computation for Lab 4
  const allig = useMemo(() => {
    const valid = incChange > Math.min(expChange, savChange) && incChange < Math.max(expChange, savChange);
    if (!valid) {
      return { valid: false, expW: 3, savW: 1, savPct: 25 };
    }
    const expW = Math.abs(savChange - incChange);
    const savW = Math.abs(incChange - expChange);
    const total = expW + savW;
    return {
      valid: true,
      expW,
      savW,
      savPct: total > 0 ? ((savW / total) * 100).toFixed(1) : '0',
    };
  }, [expChange, incChange, savChange]);

  // Lab 5 Max Marks
  const examCalc = useMemo(() => {
    const reqPassMarks = scoredMarks + failedBy;
    const maxMarks = passPct > 0 ? Math.round((reqPassMarks * 100) / passPct) : 0;
    return { reqPassMarks, maxMarks };
  }, [passPct, scoredMarks, failedBy]);

  return (
    <div className="rounded-3xl bg-[#070B16] border border-teal-500/35 overflow-hidden shadow-2xl">
      {/* Header + 5 Lab Switch Tabs */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0A1328] via-[#0B192C] to-[#082124] border-b border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 text-teal-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white">
                {isHi
                  ? 'अध्याय 2 इंटरैक्टिव एनिमेटेड लैब्स (5 लाइव प्रतिशत सिम्युलेटर)'
                  : 'Ch 2 Interactive Animated Percentage Simulator (5 Live Labs)'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {isHi
                  ? 'वैल्यू बदलें और देखें कि भिन्न-रेश्यो, AB नियम, क्रमिक %, Alligation व परीक्षा स्केल कैसे काम करते हैं!'
                  : 'Adjust sliders & presets to visualize Fraction-to-%, AB Balance, Successive Chain & Alligation!'}
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-[10px] font-black text-amber-300 uppercase">
            SVG Live Engine
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {LAB_TABS.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold border cursor-pointer transition-all ${
                  active
                    ? 'bg-teal-500 text-slate-950 border-teal-300 shadow'
                    : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-teal-500/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isHi ? t.hi : t.en}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* TAB 1: FRACTION <-> PERCENTAGE BRIDGE */}
        {activeTab === 'frac' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {FRACTION_PRESETS.map((f, idx) => (
                  <button
                    key={`${f.num}/${f.den}`}
                    type="button"
                    onClick={() => {
                      setFracIdx(idx);
                      setCustomBase(f.base);
                    }}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-black border cursor-pointer transition-all ${
                      fracIdx === idx
                        ? 'bg-amber-400 text-slate-950 border-amber-200'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-400/50'
                    }`}
                  >
                    {f.num}/{f.den} = {f.pctLabel}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs">
                <label className="text-slate-400 font-bold">{isHi ? 'संख्या (N):' : 'Base N:'}</label>
                <input
                  type="number"
                  value={customBase}
                  min={1}
                  max={100000}
                  onChange={(e) => setCustomBase(Number(e.target.value) || 0)}
                  className="w-24 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-teal-500/40 text-white font-black text-center"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="font-black text-teal-300">
                  {curFrac.pctLabel} {isHi ? 'का' : 'of'} {customBase}
                </span>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/40 font-black text-emerald-300">
                  = ({curFrac.num}/{curFrac.den}) × {customBase} = {fracResult}
                </span>
              </div>

              <svg viewBox="0 0 640 74" className="w-full h-auto block">
                <rect x="4" y="4" width="632" height="66" rx="10" fill="#0B1222" stroke="#1E293B" />
                {Array.from({ length: curFrac.den }).map((_, i) => {
                  const boxW = 608 / curFrac.den;
                  const x = 16 + i * boxW;
                  const active = i < curFrac.num;
                  return (
                    <g key={i}>
                      <rect
                        x={x + 2}
                        y="16"
                        width={Math.max(4, boxW - 4)}
                        height="42"
                        rx="6"
                        fill={active ? '#14B8A6' : '#0F172A'}
                        fillOpacity={active ? '0.85' : '1'}
                        stroke={active ? '#5EEAD4' : '#334155'}
                      />
                      {curFrac.den <= 12 && (
                        <text
                          x={x + boxW / 2}
                          y="41"
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="800"
                          fill={active ? '#042F2E' : '#94A3B8'}
                        >
                          1/{curFrac.den}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              <p className="text-xs text-slate-300 leading-relaxed">
                💡{' '}
                {isHi
                  ? `स्मार्ट ट्रिक: ${customBase} × ${curFrac.pctLabel} को दशमलव में गुणा करने की बजाय सीधे ${curFrac.num}/${curFrac.den} से गुणा करें → तुरंत उत्तर ${fracResult}!`
                  : `Smart Shortcut: Never multiply decimals for ${curFrac.pctLabel}! Replace directly with ${curFrac.num}/${curFrac.den} → instant answer ${fracResult}!`}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: AB CONSTANT RULE */}
        {activeTab === 'ab' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div className="space-y-1.5">
                <div className="font-bold text-slate-300">{isHi ? 'प्रकार (बदलाव)' : 'Direction'}</div>
                <div className="flex gap-2">
                  {[
                    { id: 'inc', hi: '+ वृद्धि (Increase)', en: '+ Increase' },
                    { id: 'dec', hi: '− कमी (Decrease)', en: '− Decrease' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setAbMode(m.id)}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-black border cursor-pointer ${
                        abMode === m.id
                          ? 'bg-teal-500 text-slate-950 border-teal-300'
                          : 'bg-slate-950 text-slate-300 border-slate-700'
                      }`}
                    >
                      {isHi ? m.hi : m.en}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'कीमत / A में % बदलाव:' : 'Price / A Change:'}</span>
                  <span className="text-amber-300 font-black">{abMode === 'inc' ? '+' : '−'}{abPct}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={60}
                  step={5}
                  value={abPct}
                  onChange={(e) => setAbPct(Number(e.target.value))}
                  className="w-full accent-teal-400"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'व्यय / बजट सीमा:' : 'Allowed Budget Δ:'}</span>
                  <span className="text-cyan-300 font-black">{expAllowedPct === 0 ? (isHi ? '0% (स्थिर)' : '0% Fixed') : `+${expAllowedPct}%`}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={25}
                  step={5}
                  value={expAllowedPct}
                  onChange={(e) => setExpAllowedPct(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-3">
              <svg viewBox="0 0 640 120" className="w-full h-auto block">
                <rect x="4" y="4" width="632" height="112" rx="10" fill="#0A1120" stroke="#1E293B" />
                <text x="320" y="25" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#FDE68A">
                  {isHi
                    ? `प्रारंभिक (100) → नई कीमत (${abCalc.pFactor}) | लक्ष्य व्यय (${abCalc.eTarget})`
                    : `Initial (100) → New Price (${abCalc.pFactor}) | Target Exp (${abCalc.eTarget})`}
                </text>
                <rect x="40" y="42" width={Math.min(540, abCalc.pFactor * 3)} height="22" rx="6" fill="#0EA5E9" fillOpacity="0.8" />
                <text x="48" y="57" fontSize="10.5" fontWeight="900" fill="#082F49">
                  {isHi ? `कीमत / A = ${abCalc.pFactor}` : `Price = ${abCalc.pFactor}`}
                </text>
                <rect x="40" y="74" width={Math.min(540, abCalc.newQtyRatio * 3)} height="22" rx="6" fill="#10B981" fillOpacity="0.85" />
                <text x="48" y="89" fontSize="10.5" fontWeight="900" fill="#022C22">
                  {isHi ? `आवश्यक खपत / B = ${abCalc.newQtyRatio.toFixed(2)}%` : `Required Qty / B = ${abCalc.newQtyRatio.toFixed(2)}%`}
                </text>
              </svg>

              <div className="text-xs sm:text-sm font-bold text-slate-200 flex flex-wrap items-center justify-between gap-2">
                <span>
                  {isHi ? '5-सेकंड रेश्यो:' : '5-Sec Ratio:'} <span className="text-amber-300">{abCalc.pFactor} → {abCalc.eTarget}</span>
                </span>
                <span className={`px-3 py-1 rounded-lg font-black ${abCalc.diffPct < 0 ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                  {isHi ? 'खपत में बदलाव:' : 'Net Qty Change:'} {abCalc.diffPct >= 0 ? '+' : ''}{abCalc.diffPct.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SUCCESSIVE % CHAIN */}
        {activeTab === 'succ' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {SUCC_PRESETS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSuccIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                    succIdx === idx
                      ? 'bg-amber-400 text-slate-950 border-amber-200'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  {isHi ? p.title.hi : p.title.en}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black text-teal-300">{curSucc.ratio}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSuccPlaying((p) => !p)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-500 text-slate-950 text-xs font-black cursor-pointer"
                  >
                    {succPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{succPlaying ? (isHi ? 'रोकें' : 'Pause') : (isHi ? 'चलाएं' : 'Animate')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSuccStep((s) => (s < succValues.length - 1 ? s + 1 : 0));
                      setSuccPlaying(false);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-bold cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>{isHi ? 'अगला स्टेप' : 'Next Step'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSuccStep(0); setSuccPlaying(true); }}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 cursor-pointer"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {succValues.map((sv, idx) => {
                  const active = idx <= succStep;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition-all ${
                        active ? 'bg-slate-900 border-teal-400/50' : 'bg-slate-950/40 border-slate-800 opacity-40'
                      }`}
                    >
                      <div className="text-[10px] font-bold text-slate-400">
                        {idx === 0 ? (isHi ? 'प्रारंभिक (Start)' : 'Initial Value') : `${isHi ? 'चरण' : 'Step'} ${idx} (${sv.pct > 0 ? `+${sv.pct}%` : `${sv.pct}%`})`}
                      </div>
                      <div className="text-sm sm:text-base font-black text-white mt-0.5">
                        {Number.isInteger(sv.val) ? sv.val.toLocaleString('en-IN') : sv.val.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-xs sm:text-sm font-black text-emerald-300 pt-1">
                {isHi ? 'अंतिम परिणाम:' : 'Final Net Effect:'} {curSucc.netLabel}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: INCOME–EXPENDITURE–SAVINGS ALLIGATION */}
        {activeTab === 'inc' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'व्यय (Expenditure) Δ%:' : 'Expenditure Δ%:'}</span>
                  <span className="text-blue-300 font-black">+{expChange}%</span>
                </div>
                <input type="range" min={5} max={35} value={expChange} onChange={(e) => setExpChange(Number(e.target.value))} className="w-full accent-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'कुल आय (Income) Δ%:' : 'Total Income Δ%:'}</span>
                  <span className="text-teal-300 font-black">+{incChange}%</span>
                </div>
                <input type="range" min={10} max={45} value={incChange} onChange={(e) => setIncChange(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'बचत (Savings) Δ%:' : 'Savings Δ%:'}</span>
                  <span className="text-amber-300 font-black">+{savChange}%</span>
                </div>
                <input type="range" min={15} max={60} value={savChange} onChange={(e) => setSavChange(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-2.5 text-xs sm:text-sm">
              {allig.valid ? (
                <>
                  <div className="font-black text-teal-300">
                    {isHi ? 'Alligation Cross परिणाम (बिना समीकरण):' : 'Alligation Cross Output (Zero Algebra):'}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/35">
                      <div className="text-[11px] text-slate-400">{isHi ? 'व्यय अनुपात' : 'Exp Weight'}</div>
                      <div className="text-base font-black text-blue-300">|{savChange} − {incChange}| = {allig.expW}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-teal-500/40 flex flex-col justify-center">
                      <div className="text-[11px] text-slate-400">{isHi ? 'व्यय : बचत अनुपात' : 'Exp : Sav Ratio'}</div>
                      <div className="text-base font-black text-white">{allig.expW} : {allig.savW}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/35">
                      <div className="text-[11px] text-slate-400">{isHi ? 'बचत अनुपात' : 'Sav Weight'}</div>
                      <div className="text-base font-black text-amber-300">|{incChange} − {expChange}| = {allig.savW}</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 font-black text-emerald-300 text-center">
                    {isHi ? `बचत प्रतिशत (Savings %) = ${allig.savW} / (${allig.expW} + ${allig.savW}) × 100 = ` : `Savings % = ${allig.savW} / (${allig.expW} + ${allig.savW}) × 100 = `}
                    {allig.savPct}%
                  </div>
                </>
              ) : (
                <div className="text-amber-300 font-bold">
                  ⚠️ {isHi ? 'नियम: कुल आय बदलाव (Income Δ%) हमेशा व्यय Δ% और बचत Δ% के बीच होना चाहिए!' : 'Alligation Rule: Total Income Δ% must lie strictly between Exp Δ% and Sav Δ%!'}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: MARKS SCORELINE & PASS-FAIL */}
        {activeTab === 'exam' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'पास प्रतिशत (Pass %):' : 'Pass %:'}</span>
                  <span className="text-amber-300 font-black">{passPct}%</span>
                </div>
                <input type="range" min={25} max={80} step={5} value={passPct} onChange={(e) => setPassPct(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'प्राप्त अंक (Scored):' : 'Scored Marks:'}</span>
                  <span className="text-teal-300 font-black">{scoredMarks}</span>
                </div>
                <input type="range" min={40} max={300} step={10} value={scoredMarks} onChange={(e) => setScoredMarks(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>{isHi ? 'कितने से फेल (Failed by):' : 'Failed By Marks:'}</span>
                  <span className="text-rose-300 font-black">{failedBy}</span>
                </div>
                <input type="range" min={10} max={150} step={2} value={failedBy} onChange={(e) => setFailedBy(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-2.5">
              <div className="text-xs sm:text-sm font-black text-white flex flex-wrap justify-between gap-2">
                <span>
                  {isHi ? `पास होने हेतु कुल अंक = ${scoredMarks} + ${failedBy} = ` : `Pass Marks Required = ${scoredMarks} + ${failedBy} = `}
                  <span className="text-amber-300">{examCalc.reqPassMarks}</span>
                </span>
                <span className="text-emerald-300">
                  {isHi ? `अधिकतम अंक (100%) = (${examCalc.reqPassMarks} ÷ ${passPct}) × 100 ≈ ` : `Max Marks (100%) ≈ `}
                  {examCalc.maxMarks}
                </span>
              </div>
              <svg viewBox="0 0 640 70" className="w-full h-auto block">
                <rect x="4" y="4" width="632" height="62" rx="10" fill="#0B1222" stroke="#1E293B" />
                <line x1="36" y1="36" x2="604" y2="36" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
                <rect x="36" y="32" width={Math.max(40, (scoredMarks / Math.max(1, examCalc.maxMarks)) * 568)} height="8" rx="4" fill="#14B8A6" />
                <circle cx={36 + (examCalc.reqPassMarks / Math.max(1, examCalc.maxMarks)) * 568} cy="36" r="7" fill="#F59E0B" />
                <text x={36 + (examCalc.reqPassMarks / Math.max(1, examCalc.maxMarks)) * 568} y="21" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FDE68A">
                  Pass {passPct}% = {examCalc.reqPassMarks}
                </text>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
