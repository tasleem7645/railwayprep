import React, { useState, useMemo } from 'react';
import {
  Percent, GitBranch, Calendar, Diff, Coins, Sparkles, RotateCcw
} from 'lucide-react';

const LAB_TABS = [
  { id: 'si', icon: Percent, en: '1. SI & k-Times Engine', hi: '1. SI व k-गुना इंजन' },
  { id: 'tree', icon: GitBranch, en: '2. 3-Yr CI Tree & Ratio', hi: '2. 3-वर्ष CI ट्री व अनुपात' },
  { id: 'freq', icon: Calendar, en: '3. Half-Yr & Quarterly', hi: '3. छमाही व तिमाही संयोजन' },
  { id: 'diff', icon: Diff, en: '4. 2/3-Yr (CI − SI) Diff', hi: '4. 2/3-वर्ष (CI − SI) अंतर' },
  { id: 'inst', icon: Coins, en: '5. Age Split & Installments', hi: '5. आयु विभाजन व किस्त लैब' },
];

export default function SiCiLabSVG({ lang = 'hi' }) {
  const isHi = lang !== 'en';
  const [activeTab, setActiveTab] = useState('si');

  // Tab 1: SI Engine & k-times
  const [siP, setSiP] = useState(10000);
  const [siR, setSiR] = useState(12);
  const [siT, setSiT] = useState(5);
  const [kTarget, setKTarget] = useState(3);

  const siCalc = useMemo(() => {
    const si = Math.round((siP * siR * siT) / 100);
    const amt = siP + si;
    const tToK = Math.round((((kTarget - 1) * 100) / Math.max(1, siR)) * 100) / 100;
    return { si, amt, effPct: siR * siT, tToK };
  }, [siP, siR, siT, kTarget]);

  // Tab 2: 3-Yr CI Tree
  const [treeP, setTreeP] = useState(10000);
  const [treeR, setTreeR] = useState(10);

  const treeCalc = useMemo(() => {
    const r = treeR / 100;
    const a = Math.round(treeP * r * 100) / 100;
    const b = Math.round(a * r * 100) / 100;
    const c = Math.round(b * r * 100) / 100;
    const ci2 = Math.round((2 * a + b) * 100) / 100;
    const ci3 = Math.round((3 * a + 3 * b + c) * 100) / 100;
    const amt3 = Math.round((treeP + ci3) * 100) / 100;
    return { a, b, c, ci2, ci3, amt3 };
  }, [treeP, treeR]);

  // Tab 3: Compounding Frequency
  const [freqP, setFreqP] = useState(10000);
  const [freqR, setFreqR] = useState(20);
  const [freqYrs, setFreqYrs] = useState(1);

  const freqCalc = useMemo(() => {
    const annualAmt = Math.round(freqP * (1 + freqR / 100) ** freqYrs);
    const halfAmt = Math.round(freqP * (1 + freqR / 200) ** (freqYrs * 2));
    const qtrAmt = Math.round(freqP * (1 + freqR / 400) ** (freqYrs * 4));
    return {
      annualCI: annualAmt - freqP,
      halfCI: halfAmt - freqP,
      qtrCI: qtrAmt - freqP,
      effAnn: Math.round(((1 + freqR / 100) ** freqYrs - 1) * 10000) / 100,
      effHalf: Math.round(((1 + freqR / 200) ** (freqYrs * 2) - 1) * 10000) / 100,
      effQtr: Math.round(((1 + freqR / 400) ** (freqYrs * 4) - 1) * 10000) / 100,
    };
  }, [freqP, freqR, freqYrs]);

  // Tab 4: CI - SI Difference
  const [diffP, setDiffP] = useState(20000);
  const [diffR, setDiffR] = useState(10);

  const diffCalc = useMemo(() => {
    const r = diffR / 100;
    const d2 = Math.round(diffP * r * r * 100) / 100;
    const d3 = Math.round(d2 * (3 + r) * 100) / 100;
    const pct2 = Math.round((diffR * diffR) / 100 * 100) / 100;
    const pct3 = Math.round((pct2 * (3 + r)) * 100) / 100;
    return { d2, d3, pct2, pct3 };
  }, [diffP, diffR]);

  // Tab 5: Equal Maturity Split & CI Installment Ladder
  const [splitTotal, setSplitTotal] = useState(25200);
  const [splitRate, setSplitRate] = useState(10);
  const [gapYrs, setGapYrs] = useState(1);

  const splitCalc = useMemo(() => {
    const factor = (1 + splitRate / 100) ** gapYrs;
    const youngPart = Math.round((splitTotal / (1 + factor)) * 100) / 100;
    const elderPart = Math.round((splitTotal - youngPart) * 100) / 100;
    // Installment example for 2 equal annual payments at splitRate
    const base = 100;
    const num = Math.round(base * (1 + splitRate / 100));
    const denSq = Math.round((num * num) / base);
    const totalPUnits = base + num;
    return { youngPart, elderPart, ratioRight: Math.round(factor * 100) / 100, base, num, denSq, totalPUnits };
  }, [splitTotal, splitRate, gapYrs]);

  return (
    <div className="rounded-3xl bg-[#070E1C] border border-slate-800 shadow-2xl overflow-hidden">
      <div className="px-4 py-3.5 sm:px-5 bg-gradient-to-r from-[#0B162C] via-[#101D35] to-[#0B162C] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-white leading-tight">
              {isHi ? '5-in-1 इंटरैक्टिव साधारण व चक्रवृद्धि ब्याज सिम्युलेटर लैब' : '5-in-1 Interactive Animated SI, CI & Installments Lab'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isHi ? 'स्लाइडर चलाकर ब्याज ट्री, छमाही-तिमाही, 2/3-वर्ष अंतर, k-गुना व किस्त स्केल देखें' : 'Live controls for Interest Tree, Half-Yr/Quarterly, 2/3-Yr Diff, k-Times & Installments'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSiP(10000); setSiR(12); setSiT(5); setKTarget(3);
            setTreeP(10000); setTreeR(10);
            setFreqP(10000); setFreqR(20); setFreqYrs(1);
            setDiffP(20000); setDiffR(10);
            setSplitTotal(25200); setSplitRate(10); setGapYrs(1);
          }}
          className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-bold text-slate-300 inline-flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{isHi ? 'रीसेट' : 'Reset'}</span>
        </button>
      </div>

      <div className="px-4 py-2.5 bg-slate-950/70 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {LAB_TABS.map((t) => {
          const Icon = t.icon;
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-all shrink-0 ${
                active
                  ? 'bg-teal-400 text-slate-950 border-teal-300 shadow'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t[lang] || t.hi}</span>
            </button>
          );
        })}
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* TAB 1: SI & k-TIMES */}
        {activeTab === 'si' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'मूलधन (P ₹):' : 'Principal (P ₹):'}</span>
                  <span className="text-teal-300 font-black">₹{siP}</span>
                </div>
                <input type="range" min={1000} max={50000} step={1000} value={siP} onChange={(e) => setSiP(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'दर (R% वार्षिक):' : 'Rate (R% p.a.):'}</span>
                  <span className="text-amber-300 font-black">{siR}%</span>
                </div>
                <input type="range" min={2} max={30} step={1} value={siR} onChange={(e) => setSiR(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'समय (T वर्ष):' : 'Time (T yrs):'}</span>
                  <span className="text-blue-300 font-black">{siT} yr</span>
                </div>
                <input type="range" min={1} max={15} step={1} value={siT} onChange={(e) => setSiT(Number(e.target.value))} className="w-full accent-blue-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'लक्ष्य k-गुना:' : 'Target k-Times:'}</span>
                  <span className="text-purple-300 font-black">{kTarget}×</span>
                </div>
                <input type="range" min={2} max={6} step={1} value={kTarget} onChange={(e) => setKTarget(Number(e.target.value))} className="w-full accent-purple-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-teal-500/35">
                <div className="text-slate-400 font-bold">{isHi ? 'प्रभावी SI % (R × T)' : 'Effective SI % (R × T)'}</div>
                <div className="text-lg font-black text-teal-300 mt-1">{siCalc.effPct}% = ₹{siCalc.si}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-amber-500/35">
                <div className="text-slate-400 font-bold">{isHi ? 'कुल मिश्रधन (A = P + SI)' : 'Total Amount (A = P + SI)'}</div>
                <div className="text-lg font-black text-amber-300 mt-1">₹{siCalc.amt}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-purple-500/35">
                <div className="text-slate-400 font-bold">{isHi ? `${siR}% दर पर ${kTarget}-गुना समय:` : `Years to become ${kTarget}× @ ${siR}%:`}</div>
                <div className="text-lg font-black text-purple-300 mt-1">({kTarget}−1)×100 ÷ {siR} = {siCalc.tToK} {isHi ? 'वर्ष' : 'yrs'}</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 3-YR CI TREE */}
        {activeTab === 'tree' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'मूलधन (P ₹):' : 'Principal (P ₹):'}</span>
                  <span className="text-teal-300 font-black">₹{treeP}</span>
                </div>
                <input type="range" min={2000} max={50000} step={1000} value={treeP} onChange={(e) => setTreeP(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'चक्रवृद्धि दर (R%):' : 'CI Rate (R% p.a.):'}</span>
                  <span className="text-amber-300 font-black">{treeR}%</span>
                </div>
                <input type="range" min={2} max={25} step={1} value={treeR} onChange={(e) => setTreeR(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-2.5 text-xs">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-teal-950/35 border border-teal-500/35">
                  <div className="text-slate-400 font-bold">{isHi ? 'वर्ष 1 (केवल a)' : 'Year 1 (a)'}</div>
                  <div className="text-base font-black text-teal-300 mt-1">₹{treeCalc.a}</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-950/35 border border-blue-500/35">
                  <div className="text-slate-400 font-bold">{isHi ? 'वर्ष 2 (a + b)' : 'Year 2 (a + b)'}</div>
                  <div className="text-base font-black text-blue-300 mt-1">{treeCalc.a} + {treeCalc.b} = ₹{Math.round((treeCalc.a + treeCalc.b) * 100) / 100}</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-950/35 border border-amber-500/35">
                  <div className="text-slate-400 font-bold">{isHi ? 'वर्ष 3 (a + 2b + c)' : 'Year 3 (a + 2b + c)'}</div>
                  <div className="text-base font-black text-amber-300 mt-1">{treeCalc.a} + {Math.round(2 * treeCalc.b * 100) / 100} + {treeCalc.c}</div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-center font-black text-emerald-300 flex flex-wrap justify-center gap-4">
                <span>{isHi ? '2 वर्ष CI:' : '2-Yr CI:'} ₹{treeCalc.ci2}</span>
                <span>|</span>
                <span>{isHi ? '3 वर्ष CI (3a+3b+c):' : '3-Yr CI:'} ₹{treeCalc.ci3}</span>
                <span>|</span>
                <span>{isHi ? 'मिश्रधन:' : 'Amount:'} ₹{treeCalc.amt3}</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HALF-YEARLY & QUARTERLY */}
        {activeTab === 'freq' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'मूलधन (P ₹):' : 'Principal (P ₹):'}</span>
                  <span className="text-teal-300 font-black">₹{freqP}</span>
                </div>
                <input type="range" min={5000} max={50000} step={5000} value={freqP} onChange={(e) => setFreqP(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'वार्षिक दर (R%):' : 'Annual Rate (R%):'}</span>
                  <span className="text-amber-300 font-black">{freqR}%</span>
                </div>
                <input type="range" min={4} max={40} step={4} value={freqR} onChange={(e) => setFreqR(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'वर्ष (n):' : 'Years (n):'}</span>
                  <span className="text-purple-300 font-black">{freqYrs} yr</span>
                </div>
                <input type="range" min={1} max={3} step={0.5} value={freqYrs} onChange={(e) => setFreqYrs(Number(e.target.value))} className="w-full accent-purple-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-slate-700">
                <div className="text-slate-400 font-bold">{isHi ? 'वार्षिक (r%, n)' : 'Yearly (r%, n)'}</div>
                <div className="text-base font-black text-white mt-1">+{freqCalc.effAnn}% = ₹{freqCalc.annualCI}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-amber-500/40">
                <div className="text-amber-300 font-bold">{isHi ? `छमाही (${freqR / 2}%, ${freqYrs * 2} बार)` : `Half-Yr (${freqR / 2}%, ${freqYrs * 2}×)`}</div>
                <div className="text-base font-black text-amber-200 mt-1">+{freqCalc.effHalf}% = ₹{freqCalc.halfCI}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-purple-500/40">
                <div className="text-purple-300 font-bold">{isHi ? `तिमाही (${freqR / 4}%, ${freqYrs * 4} बार)` : `Quarterly (${freqR / 4}%, ${freqYrs * 4}×)`}</div>
                <div className="text-base font-black text-purple-200 mt-1">+{freqCalc.effQtr}% = ₹{freqCalc.qtrCI}</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CI - SI DIFFERENCE */}
        {activeTab === 'diff' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'मूलधन (P ₹):' : 'Principal (P ₹):'}</span>
                  <span className="text-teal-300 font-black">₹{diffP}</span>
                </div>
                <input type="range" min={4000} max={50000} step={2000} value={diffP} onChange={(e) => setDiffP(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'ब्याज दर (R%):' : 'Interest Rate (R%):'}</span>
                  <span className="text-rose-300 font-black">{diffR}%</span>
                </div>
                <input type="range" min={4} max={25} step={1} value={diffR} onChange={(e) => setDiffR(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center text-xs">
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40">
                <div className="font-bold text-rose-300">{isHi ? '2 वर्ष अंतर: P(r/100)²' : '2-Year Diff: P(r/100)²'}</div>
                <div className="text-lg font-black text-white mt-1">+{diffCalc.pct2}% ⇒ ₹{diffCalc.d2}</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40">
                <div className="font-bold text-purple-300">{isHi ? '3 वर्ष अंतर: Diff₂ × (3 + r/100)' : '3-Year Diff: Diff₂ × (3 + r/100)'}</div>
                <div className="text-lg font-black text-white mt-1">+{diffCalc.pct3}% ⇒ ₹{diffCalc.d3}</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EQUAL MATURITY SPLIT & INSTALLMENT LADDER */}
        {activeTab === 'inst' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'कुल राशि (₹):' : 'Total Fund (₹):'}</span>
                  <span className="text-teal-300 font-black">₹{splitTotal}</span>
                </div>
                <input type="range" min={1000} max={50000} step={200} value={splitTotal} onChange={(e) => setSplitTotal(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'दर (R%):' : 'Rate (R%):'}</span>
                  <span className="text-amber-300 font-black">{splitRate}%</span>
                </div>
                <input type="range" min={5} max={25} step={5} value={splitRate} onChange={(e) => setSplitRate(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'समय अंतर (Δt वर्ष):' : 'Age / Time Gap (Δt):'}</span>
                  <span className="text-purple-300 font-black">{gapYrs} yr</span>
                </div>
                <input type="range" min={1} max={3} step={1} value={gapYrs} onChange={(e) => setGapYrs(Number(e.target.value))} className="w-full accent-purple-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#050811] border border-teal-500/35 space-y-1.5">
                <div className="font-black text-teal-300">
                  {isHi ? 'समान परिपक्वता आयु-विभाजन (छोटा : बड़ा)' : 'Equal Maturity Split (Younger : Elder)'}
                </div>
                <div className="text-slate-300 font-bold">
                  {isHi ? 'अनुपात' : 'Ratio'} = 1 : {splitCalc.ratioRight} | {isHi ? 'छोटा हिस्सा' : 'Younger'}: <span className="text-white font-black">₹{splitCalc.youngPart}</span> | {isHi ? 'बड़ा हिस्सा' : 'Elder'}: <span className="text-emerald-300 font-black">₹{splitCalc.elderPart}</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#050811] border border-amber-500/35 space-y-1.5">
                <div className="font-black text-amber-300">
                  {isHi ? `2-वर्ष वार्षिक CI किस्त (${splitRate}% दर)` : `2-Yr Equal CI Installment Ratio (@ ${splitRate}%)`}
                </div>
                <div className="text-slate-300 font-bold">
                  {splitCalc.base}:{splitCalc.num} → {splitCalc.totalPUnits} {isHi ? 'ऋण' : 'Loan'} ⇒ {isHi ? 'प्रत्येक किस्त' : 'Each'} = <span className="text-amber-300 font-black">{splitCalc.denSq} {isHi ? 'इकाई' : 'units'}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
