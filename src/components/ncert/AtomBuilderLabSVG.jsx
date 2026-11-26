import React, { useState } from 'react';
import { Atom } from 'lucide-react';

const ELEMENTS_1_TO_18 = [
  { z: 1, sym: 'H', name: { en: 'Hydrogen', hi: 'हाइड्रोजन' }, n: 0, shells: [1], val: 1 },
  { z: 2, sym: 'He', name: { en: 'Helium (Duplet!)', hi: 'हीलियम (द्विक पूर्ण)' }, n: 2, shells: [2], val: 0 },
  { z: 3, sym: 'Li', name: { en: 'Lithium', hi: 'लीथियम' }, n: 4, shells: [2, 1], val: 1 },
  { z: 4, sym: 'Be', name: { en: 'Beryllium', hi: 'बेरिलियम' }, n: 5, shells: [2, 2], val: 2 },
  { z: 5, sym: 'B', name: { en: 'Boron', hi: 'बोरॉन' }, n: 6, shells: [2, 3], val: 3 },
  { z: 6, sym: 'C', name: { en: 'Carbon', hi: 'कार्बन' }, n: 6, shells: [2, 4], val: 4 },
  { z: 7, sym: 'N', name: { en: 'Nitrogen', hi: 'नाइट्रोजन' }, n: 7, shells: [2, 5], val: 3 },
  { z: 8, sym: 'O', name: { en: 'Oxygen', hi: 'ऑक्सीजन' }, n: 8, shells: [2, 6], val: 2 },
  { z: 9, sym: 'F', name: { en: 'Fluorine', hi: 'फ्लुओरीन' }, n: 10, shells: [2, 7], val: 1 },
  { z: 10, sym: 'Ne', name: { en: 'Neon (Octet)', hi: 'निऑन (अष्टक पूर्ण)' }, n: 10, shells: [2, 8], val: 0 },
  { z: 11, sym: 'Na', name: { en: 'Sodium', hi: 'सोडियम' }, n: 12, shells: [2, 8, 1], val: 1 },
  { z: 12, sym: 'Mg', name: { en: 'Magnesium', hi: 'मैग्नीशियम' }, n: 12, shells: [2, 8, 2], val: 2 },
  { z: 13, sym: 'Al', name: { en: 'Aluminium', hi: 'ऐलुमिनियम' }, n: 14, shells: [2, 8, 3], val: 3 },
  { z: 14, sym: 'Si', name: { en: 'Silicon', hi: 'सिलिकॉन' }, n: 14, shells: [2, 8, 4], val: 4 },
  { z: 15, sym: 'P', name: { en: 'Phosphorus', hi: 'फॉस्फोरस' }, n: 16, shells: [2, 8, 5], val: 3 },
  { z: 16, sym: 'S', name: { en: 'Sulphur', hi: 'सल्फर' }, n: 16, shells: [2, 8, 6], val: 2 },
  { z: 17, sym: 'Cl', name: { en: 'Chlorine', hi: 'क्लोरीन' }, n: 18, shells: [2, 8, 7], val: 1 },
  { z: 18, sym: 'Ar', name: { en: 'Argon (Octet)', hi: 'आर्गन (अष्टक पूर्ण)' }, n: 22, shells: [2, 8, 8], val: 0 },
];

export function AtomBuilderLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [selectedZ, setSelectedZ] = useState(11); // Default Na (2,8,1)

  const el = ELEMENTS_1_TO_18.find((e) => e.z === selectedZ) || ELEMENTS_1_TO_18[0];
  const shellRadii = [44, 72, 100];
  const shellColors = ['#34d399', '#38bdf8', '#fbbf24'];

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-[#080E1D] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-cyan-300 font-black text-xs sm:text-sm">
          <Atom className="w-4 h-4" />
          <span>
            {hi
              ? 'इंटरैक्टिव बोर 2-D परमाणु संरचना व संयोजकता बिल्डर (Z = 1 से 18)'
              : 'Interactive Bohr 2-D Atom & Valency Builder (Z = 1 to 18)'}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-bold text-cyan-200">
          {hi ? 'कोश नियम: 2n² & अष्टक (8)' : 'Rule: 2n² & Outer Octet'}
        </span>
      </div>

      {/* Element selector buttons 1..18 */}
      <div className="grid grid-cols-6 sm:grid-cols-9 gap-1.5">
        {ELEMENTS_1_TO_18.map((item) => (
          <button
            key={item.z}
            type="button"
            onClick={() => setSelectedZ(item.z)}
            className={`px-2 py-1.5 rounded-lg border text-center transition ${
              item.z === el.z
                ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-black'
                : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:border-cyan-400/50 font-bold'
            }`}
          >
            <div className="text-[9px] opacity-75">{item.z}</div>
            <div className="text-xs">{item.sym}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Bohr concentric orbital SVG */}
        <div className="md:col-span-6 rounded-xl bg-slate-950/90 border border-slate-800 p-3 flex justify-center">
          <svg viewBox="0 0 240 240" className="w-56 h-56">
            <circle cx="120" cy="120" r="22" fill="#b45309" stroke="#fbbf24" strokeWidth="2.5" />
            <text x="120" y="116" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">
              {el.z}p⁺
            </text>
            <text x="120" y="130" textAnchor="middle" fill="#fde68a" fontSize="9.5" fontWeight="800">
              {el.n}n⁰
            </text>
            {el.shells.map((count, sIdx) => {
              const r = shellRadii[sIdx];
              const col = shellColors[sIdx];
              return (
                <g key={sIdx}>
                  <circle cx="120" cy="120" r={r} fill="none" stroke={col} strokeWidth="1.6" strokeDasharray="3 2" opacity="0.85" />
                  {Array.from({ length: count }).map((_, eIdx) => {
                    const ang = (2 * Math.PI * eIdx) / count - Math.PI / 2;
                    const cx = 120 + r * Math.cos(ang);
                    const cy = 120 + r * Math.sin(ang);
                    return <circle key={eIdx} cx={cx} cy={cy} r="5.2" fill={col} stroke="#0f172a" strokeWidth="1.5" />;
                  })}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Properties panel */}
        <div className="md:col-span-6 space-y-2.5">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-base font-black text-white">
              {el.name[hi ? 'hi' : 'en']} ({el.sym})
            </div>
            <div className="text-xs font-bold text-cyan-300 mt-0.5">
              {hi ? `संकेतन: ^${el.z + el.n}_${el.z}${el.sym}` : `Notation: Mass A=${el.z + el.n}, Z=${el.z}`}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold">{hi ? 'प्रोटॉन / इलेक्ट्रॉन (Z)' : 'Protons / Electrons (Z)'}</div>
              <div className="text-base font-black text-emerald-300">{el.z}</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold">{hi ? 'न्यूट्रॉन (A − Z)' : 'Neutrons (n⁰)'}</div>
              <div className="text-base font-black text-amber-300">{el.n}</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold">{hi ? 'विन्यास (K, L, M)' : 'Config (K, L, M)'}</div>
              <div className="text-base font-black text-cyan-300">{el.shells.join(', ')}</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold">{hi ? 'संयोजकता (Valency)' : 'Valency'}</div>
              <div className="text-base font-black text-violet-300">{el.val}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
