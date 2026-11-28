import React, { useState, useMemo } from 'react';
import {
  Tag, Percent, Repeat, Scale, Split, Sparkles, RotateCcw
} from 'lucide-react';

const LAB_TABS = [
  { id: 'cpmp', icon: Tag, en: '1. CP–SP–MP & Ratio', hi: '1. CP–SP–MP व अनुपात' },
  { id: 'disc', icon: Percent, en: '2. Successive & Buy Free', hi: '2. क्रमिक छूट व Buy-Free' },
  { id: 'same', icon: Repeat, en: '3. Same SP & Articles', hi: '3. समान SP व वस्तु-संख्या' },
  { id: 'dish', icon: Scale, en: '4. Dishonest Scale Lab', hi: '4. बेईमान बाट तराजू' },
  { id: 'lot', icon: Split, en: '5. Split Lot & Shift Cross', hi: '5. लॉट बंटवारा व शिफ्ट क्रॉस' },
];

export default function ProfitLossLabSVG({ lang = 'hi' }) {
  const isHi = lang !== 'en';
  const [activeTab, setActiveTab] = useState('cpmp');

  // Tab 1: CP-SP-MP & Magic Ratio
  const [cpVal, setCpVal] = useState(1000);
  const [markupPct, setMarkupPct] = useState(40);
  const [discPct, setDiscPct] = useState(15);

  const tri = useMemo(() => {
    const mp = (cpVal * (100 + markupPct)) / 100;
    const sp = (mp * (100 - discPct)) / 100;
    const netPct = ((sp - cpVal) / cpVal) * 100;
    const leftRatio = Math.max(1, 100 - discPct);
    const rightRatio = Math.round((100 + netPct) * 10) / 10;
    return {
      mp: Math.round(mp * 10) / 10,
      sp: Math.round(sp * 10) / 10,
      netPct: Math.round(netPct * 100) / 100,
      leftRatio,
      rightRatio,
    };
  }, [cpVal, markupPct, discPct]);

  // Tab 2: Successive Discounts vs Buy X Get Y Free
  const [d1, setD1] = useState(20);
  const [d2, setD2] = useState(10);
  const [buyPaid, setBuyPaid] = useState(3);
  const [buyFree, setBuyFree] = useState(1);

  const discLab = useMemo(() => {
    const netSucc = Math.round((d1 + d2 - (d1 * d2) / 100) * 100) / 100;
    const schemePct = Math.round((buyFree / (buyPaid + buyFree)) * 10000) / 100;
    return { netSucc, schemePct };
  }, [d1, d2, buyPaid, buyFree]);

  // Tab 3: Same SP Trap vs Article Count Equilibrium
  const [sameRate, setSameRate] = useState(20);
  const [artBoughtQty, setArtBoughtQty] = useState(6);
  const [artBoughtRs, setArtBoughtRs] = useState(5);
  const [artSoldQty, setArtSoldQty] = useState(5);
  const [artSoldRs, setArtSoldRs] = useState(6);

  const artCalc = useMemo(() => {
    const sameSpLoss = Math.round(((sameRate * sameRate) / 100) * 100) / 100;
    const cpCross = artBoughtRs * artSoldQty;
    const spCross = artSoldRs * artBoughtQty;
    const diff = spCross - cpCross;
    const pct = Math.round((diff / Math.max(1, cpCross)) * 10000) / 100;
    return { sameSpLoss, cpCross, spCross, diff, pct };
  }, [sameRate, artBoughtQty, artBoughtRs, artSoldQty, artSoldRs]);

  // Tab 4: Dishonest Dealer Scale
  const [claimMarkup, setClaimMarkup] = useState(44);
  const [falseWeightG, setFalseWeightG] = useState(900);

  const dishCalc = useMemo(() => {
    const w = Math.max(500, Math.min(1000, falseWeightG));
    const ratioLeft = w;
    const ratioRight = 1000 * ((100 + claimMarkup) / 100);
    const netGain = Math.round(((ratioRight - ratioLeft) / ratioLeft) * 10000) / 100;
    const tiltDeg = Math.max(-16, Math.min(16, (1000 - w) / 28));
    return { w, ratioRight: Math.round(ratioRight * 10) / 10, netGain, tiltDeg };
  }, [claimMarkup, falseWeightG]);

  // Tab 5: Split Lot Weighted Avg
  const [lot1Pct, setLot1Pct] = useState(60);
  const [lot1Gain, setLot1Gain] = useState(20);
  const [lot2Loss, setLot2Loss] = useState(10);

  const lotCalc = useMemo(() => {
    const lot2Pct = 100 - lot1Pct;
    const weighted = (lot1Pct * lot1Gain - lot2Pct * lot2Loss) / 100;
    return { lot2Pct, weighted: Math.round(weighted * 100) / 100 };
  }, [lot1Pct, lot1Gain, lot2Loss]);

  return (
    <div className="rounded-3xl bg-[#070E1C] border border-slate-800 shadow-2xl overflow-hidden">
      <div className="px-4 py-3.5 sm:px-5 bg-gradient-to-r from-[#0B162C] via-[#101D35] to-[#0B162C] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-white leading-tight">
              {isHi ? '5-in-1 इंटरैक्टिव लाभ, हानि व बट्टा सिम्युलेटर लैब' : '5-in-1 Interactive Profit, Loss & Discount Simulator'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isHi ? 'स्लाइडर चलाकर CP–SP–MP, छूट स्कीम, समान SP, बेईमान बाट व लॉट नियम लाइव देखें' : 'Slide live controls to visualize CP–SP–MP, Discounts, Same SP, False Weight & Lots'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setCpVal(1000); setMarkupPct(40); setDiscPct(15);
            setD1(20); setD2(10); setBuyPaid(3); setBuyFree(1);
            setSameRate(20); setArtBoughtQty(6); setArtBoughtRs(5); setArtSoldQty(5); setArtSoldRs(6);
            setClaimMarkup(44); setFalseWeightG(900);
            setLot1Pct(60); setLot1Gain(20); setLot2Loss(10);
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
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
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
        {/* TAB 1: CP-SP-MP & MAGIC RATIO */}
        {activeTab === 'cpmp' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'क्रय मूल्य (CP ₹):' : 'Cost Price (CP ₹):'}</span>
                  <span className="text-teal-300 font-black">₹{cpVal}</span>
                </div>
                <input type="range" min={200} max={2000} step={50} value={cpVal} onChange={(e) => setCpVal(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'मार्कअप (% ऊपर):' : 'Markup Above CP:'}</span>
                  <span className="text-amber-300 font-black">+{markupPct}%</span>
                </div>
                <input type="range" min={0} max={100} step={5} value={markupPct} onChange={(e) => setMarkupPct(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'अंकित पर छूट (Discount %):' : 'Discount on MP:'}</span>
                  <span className="text-rose-300 font-black">−{discPct}%</span>
                </div>
                <input type="range" min={0} max={50} step={5} value={discPct} onChange={(e) => setDiscPct(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-500/40">
                  <div className="text-[11px] text-slate-400 font-bold">CP</div>
                  <div className="text-base sm:text-lg font-black text-teal-300">₹{cpVal}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40">
                  <div className="text-[11px] text-slate-400 font-bold">MP (+{markupPct}%)</div>
                  <div className="text-base sm:text-lg font-black text-amber-300">₹{tri.mp}</div>
                </div>
                <div className={`p-2.5 rounded-xl border ${tri.netPct >= 0 ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-rose-950/40 border-rose-500/40'}`}>
                  <div className="text-[11px] text-slate-400 font-bold">SP (−{discPct}% on MP)</div>
                  <div className={`text-base sm:text-lg font-black ${tri.netPct >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>₹{tri.sp}</div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-black text-center flex flex-wrap justify-center gap-3">
                <span className={tri.netPct >= 0 ? 'text-emerald-300' : 'text-rose-300'}>
                  {isHi
                    ? `शुद्ध परिणाम: ${tri.netPct >= 0 ? `+${tri.netPct}% लाभ` : `${tri.netPct}% हानि`}`
                    : `Net Result: ${tri.netPct >= 0 ? `+${tri.netPct}% Profit` : `${tri.netPct}% Loss`}`}
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-purple-300">
                  CP : MP = (100−{discPct}) : ({100 + tri.netPct}) = {tri.leftRatio} : {tri.rightRatio}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SUCCESSIVE DISCOUNT VS BUY X GET Y FREE */}
        {activeTab === 'disc' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-blue-500/30 space-y-3">
                <div className="font-black text-blue-300 text-sm">
                  {isHi ? 'स्कीम A: 2 क्रमिक छूट (d₁% व d₂%)' : 'Scheme A: Two Successive Discounts'}
                </div>
                <div>
                  <div className="flex justify-between font-bold text-slate-300 mb-1">
                    <span>{isHi ? 'पहली छूट d₁:' : 'First Discount d₁:'}</span>
                    <span className="text-blue-300 font-black">{d1}%</span>
                  </div>
                  <input type="range" min={5} max={50} step={5} value={d1} onChange={(e) => setD1(Number(e.target.value))} className="w-full accent-blue-400" />
                </div>
                <div>
                  <div className="flex justify-between font-bold text-slate-300 mb-1">
                    <span>{isHi ? 'दूसरी छूट d₂:' : 'Second Discount d₂:'}</span>
                    <span className="text-cyan-300 font-black">{d2}%</span>
                  </div>
                  <input type="range" min={5} max={50} step={5} value={d2} onChange={(e) => setD2(Number(e.target.value))} className="w-full accent-cyan-400" />
                </div>
                <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/40 font-black text-center text-white">
                  {isHi ? 'समतुल्य एकल छूट' : 'Net Equivalent'} = {d1} + {d2} − ({d1}×{d2})/100 = <span className="text-blue-300">{discLab.netSucc}%</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-amber-500/30 space-y-3">
                <div className="font-black text-amber-300 text-sm">
                  {isHi ? 'स्कीम B: "X खरीदें, Y मुफ़्त पाएं"' : 'Scheme B: "Buy X Get Y Free"'}
                </div>
                <div>
                  <div className="flex justify-between font-bold text-slate-300 mb-1">
                    <span>{isHi ? 'पैसे दिए (Buy X):' : 'Paid Items (Buy X):'}</span>
                    <span className="text-amber-300 font-black">{buyPaid}</span>
                  </div>
                  <input type="range" min={1} max={15} step={1} value={buyPaid} onChange={(e) => setBuyPaid(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <div className="flex justify-between font-bold text-slate-300 mb-1">
                    <span>{isHi ? 'मुफ़्त वस्तुएं (Get Y Free):' : 'Free Items (Get Y):'}</span>
                    <span className="text-emerald-300 font-black">{buyFree}</span>
                  </div>
                  <input type="range" min={1} max={8} step={1} value={buyFree} onChange={(e) => setBuyFree(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40 font-black text-center text-white">
                  {buyFree} / ({buyPaid} + {buyFree}) × 100 = <span className="text-amber-300">{discLab.schemePct}%</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-xs sm:text-sm font-black text-emerald-300 text-center">
              {discLab.netSucc > discLab.schemePct
                ? (isHi ? `विजेता छूट: स्कीम A (${discLab.netSucc}% > ${discLab.schemePct}%) ग्राहक के लिए बेहतर!` : `Winner for Buyer: Scheme A (${discLab.netSucc}% > ${discLab.schemePct}%)!`)
                : discLab.schemePct > discLab.netSucc
                  ? (isHi ? `विजेता छूट: स्कीम B Buy ${buyPaid} Get ${buyFree} Free (${discLab.schemePct}% > ${discLab.netSucc}%) बेहतर!` : `Winner for Buyer: Scheme B (${discLab.schemePct}% > ${discLab.netSucc}%)!`)
                  : (isHi ? `दोनों स्कीम बराबर (${discLab.netSucc}%) हैं!` : `Both Schemes give Equal ${discLab.netSucc}% Discount!`)}
            </div>
          </div>
        )}

        {/* TAB 3: SAME SP TRAP & ARTICLE COUNT CROSS */}
        {activeTab === 'same' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-[#050811] border border-rose-500/35 space-y-3">
              <div className="font-black text-rose-300 text-sm">
                {isHi ? 'समान SP बनाम समान CP (+x% और −x%)' : 'Same SP vs Same CP (+x% & −x%)'}
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'लाभ / हानि दर (x%):' : 'Profit / Loss Rate (x%):'}</span>
                  <span className="text-rose-300 font-black">{sameRate}%</span>
                </div>
                <input type="range" min={5} max={40} step={5} value={sameRate} onChange={(e) => setSameRate(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
              <div className="p-3 rounded-xl bg-rose-950/35 border border-rose-500/40 space-y-1 font-bold">
                <div className="text-rose-200">
                  • {isHi ? `यदि दोनों का विक्रय मूल्य (SP) समान:` : `If Both Sold at SAME SP:`} <span className="font-black text-rose-300">−({sameRate}²/100) = {artCalc.sameSpLoss}% {isHi ? 'सदैव हानि' : 'ALWAYS Loss'}</span>
                </div>
                <div className="text-emerald-300">
                  • {isHi ? `यदि दोनों का क्रय मूल्य (CP) समान:` : `If Both Bought at SAME CP:`} <span className="font-black">0% ({isHi ? 'न लाभ, न हानि' : 'No Profit / Loss'})</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-teal-500/35 space-y-3">
              <div className="font-black text-teal-300 text-sm">
                {isHi ? 'वस्तु-रुपया क्रॉस गुणन कैलकुलेटर' : 'Qty–Price Cross Multiplication Calculator'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <label className="block space-y-1">
                  <span className="text-slate-400 font-bold">{isHi ? 'खरीद: वस्तु × ₹' : 'Buy: Qty × ₹'}</span>
                  <div className="flex gap-1">
                    <input type="number" min={1} max={50} value={artBoughtQty} onChange={(e) => setArtBoughtQty(Number(e.target.value) || 1)} className="w-1/2 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-white font-black text-center" />
                    <input type="number" min={1} max={200} value={artBoughtRs} onChange={(e) => setArtBoughtRs(Number(e.target.value) || 1)} className="w-1/2 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-teal-300 font-black text-center" />
                  </div>
                </label>
                <label className="block space-y-1">
                  <span className="text-slate-400 font-bold">{isHi ? 'बिक्री: वस्तु × ₹' : 'Sell: Qty × ₹'}</span>
                  <div className="flex gap-1">
                    <input type="number" min={1} max={50} value={artSoldQty} onChange={(e) => setArtSoldQty(Number(e.target.value) || 1)} className="w-1/2 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-white font-black text-center" />
                    <input type="number" min={1} max={200} value={artSoldRs} onChange={(e) => setArtSoldRs(Number(e.target.value) || 1)} className="w-1/2 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-amber-300 font-black text-center" />
                  </div>
                </label>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-black">
                CP = {artBoughtRs}×{artSoldQty} = <span className="text-teal-300">{artCalc.cpCross}</span> | SP = {artSoldRs}×{artBoughtQty} = <span className="text-amber-300">{artCalc.spCross}</span>
                <div className={`mt-1 ${artCalc.pct >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {artCalc.pct >= 0 ? `+${artCalc.pct}% ${isHi ? 'लाभ' : 'Profit'}` : `${artCalc.pct}% ${isHi ? 'हानि' : 'Loss'}`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DISHONEST DEALER BALANCE SCALE */}
        {activeTab === 'dish' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'घोषित लाभ / मार्कअप %:' : 'Claimed Markup / Gain %:'}</span>
                  <span className="text-amber-300 font-black">{claimMarkup >= 0 ? `+${claimMarkup}%` : `${claimMarkup}%`}</span>
                </div>
                <input type="range" min={-15} max={60} step={1} value={claimMarkup} onChange={(e) => setClaimMarkup(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? '1000g के स्थान पर दिया गया भार:' : 'False Weight Used for 1000g:'}</span>
                  <span className="text-rose-300 font-black">{dishCalc.w} gm ({1000 - dishCalc.w === 0 ? 'Honest' : `${((1000 - dishCalc.w) / 10).toFixed(0)}% less`})</span>
                </div>
                <input type="range" min={650} max={1000} step={25} value={falseWeightG} onChange={(e) => setFalseWeightG(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-3">
              <svg viewBox="0 0 640 130" className="w-full h-auto block">
                <rect x="4" y="4" width="632" height="122" rx="12" fill="#0B1222" stroke="#1E293B" />
                <line x1="320" y1="30" x2="320" y2="112" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                <rect x="275" y="108" width="90" height="8" rx="4" fill="#64748B" />
                <g transform={`rotate(${dishCalc.tiltDeg}, 320, 34)`}>
                  <line x1="150" y1="34" x2="490" y2="34" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="320" cy="34" r="6" fill="#FDE68A" />
                  <rect x="100" y="54" width="110" height="44" rx="8" fill="#064E3B" stroke="#14B8A6" strokeWidth="1.5" />
                  <text x="155" y="73" textAnchor="middle" fontSize="11" fontWeight="900" fill="#5EEAD4">Real CP: {dishCalc.w}</text>
                  <text x="155" y="90" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#CBD5E1">{isHi ? 'दिया गया वज़न' : 'Actual Given'}</text>
                  <rect x="430" y="54" width="110" height="44" rx="8" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="485" y="73" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FDE68A">Real SP: {dishCalc.ratioRight}</text>
                  <text x="485" y="90" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#CBD5E1">{isHi ? 'ग्राहक से वसूला' : 'Charged Value'}</text>
                </g>
              </svg>
              <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-xs sm:text-sm font-black text-emerald-300 text-center">
                {isHi ? 'अंतिम अनुपात:' : 'Final Ratio:'} {dishCalc.w} → {dishCalc.ratioRight} ⇒ {isHi ? 'वास्तविक लाभ' : 'Net Profit'} = <span className="text-amber-300">+{dishCalc.netGain}%</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SPLIT LOT WEIGHTED AVERAGE */}
        {activeTab === 'lot' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'भाग 1 माल (%):' : 'Lot 1 Quantity (%):'}</span>
                  <span className="text-teal-300 font-black">{lot1Pct}% (Rest: {lotCalc.lot2Pct}%)</span>
                </div>
                <input type="range" min={10} max={90} step={5} value={lot1Pct} onChange={(e) => setLot1Pct(Number(e.target.value))} className="w-full accent-teal-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'भाग 1 पर लाभ (+%):' : 'Lot 1 Profit (+%):'}</span>
                  <span className="text-emerald-300 font-black">+{lot1Gain}%</span>
                </div>
                <input type="range" min={0} max={60} step={5} value={lot1Gain} onChange={(e) => setLot1Gain(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-300 mb-1">
                  <span>{isHi ? 'शेष पर हानि (−%):' : 'Rest Lot Loss (−%):'}</span>
                  <span className="text-rose-300 font-black">−{lot2Loss}%</span>
                </div>
                <input type="range" min={0} max={50} step={5} value={lot2Loss} onChange={(e) => setLot2Loss(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050811] border border-slate-800 space-y-2.5 text-center">
              <div className="text-xs font-bold text-slate-300">
                ({lot1Pct}% × +{lot1Gain}%) + ({lotCalc.lot2Pct}% × −{lot2Loss}%) = ({((lot1Pct * lot1Gain) / 100).toFixed(1)}% − {((lotCalc.lot2Pct * lot2Loss) / 100).toFixed(1)}%)
              </div>
              <div className={`p-3 rounded-xl border text-sm sm:text-base font-black ${lotCalc.weighted >= 0 ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' : 'bg-rose-500/15 border-rose-400/40 text-rose-300'}`}>
                {isHi ? 'कुल लेन-देन परिणाम' : 'Net Transaction Result'}: {lotCalc.weighted >= 0 ? `+${lotCalc.weighted}% ${isHi ? 'लाभ' : 'Profit'}` : `${lotCalc.weighted}% ${isHi ? 'हानि' : 'Loss'}`}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
