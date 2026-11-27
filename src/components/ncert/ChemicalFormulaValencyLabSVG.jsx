import React, { useState } from 'react';

const CATIONS = [
  { id: 'Na', symbol: 'Na', charge: 1, en: 'Sodium', hi: 'सोडियम' },
  { id: 'K', symbol: 'K', charge: 1, en: 'Potassium', hi: 'पोटैशियम' },
  { id: 'NH4', symbol: 'NH₄', charge: 1, poly: true, en: 'Ammonium', hi: 'अमोनियम' },
  { id: 'Ca', symbol: 'Ca', charge: 2, en: 'Calcium', hi: 'कैल्शियम' },
  { id: 'Mg', symbol: 'Mg', charge: 2, en: 'Magnesium', hi: 'मैग्नीशियम' },
  { id: 'Cu2', symbol: 'Cu', charge: 2, en: 'Copper(II) Cupric', hi: 'कॉपर (क्यूप्रिक)' },
  { id: 'Al', symbol: 'Al', charge: 3, en: 'Aluminium', hi: 'ऐलुमिनियम' },
  { id: 'Fe3', symbol: 'Fe', charge: 3, en: 'Iron(III) Ferric', hi: 'आयरन (फेरिक)' },
];

const ANIONS = [
  { id: 'Cl', symbol: 'Cl', charge: 1, en: 'Chloride', hi: 'क्लोराइड' },
  { id: 'OH', symbol: 'OH', charge: 1, poly: true, en: 'Hydroxide', hi: 'हाइड्रॉक्साइड' },
  { id: 'NO3', symbol: 'NO₃', charge: 1, poly: true, en: 'Nitrate', hi: 'नाइट्रेट' },
  { id: 'HCO3', symbol: 'HCO₃', charge: 1, poly: true, en: 'Hydrogencarbonate', hi: 'हाइड्रोजनकार्बोनेट' },
  { id: 'O', symbol: 'O', charge: 2, en: 'Oxide', hi: 'ऑक्साइड' },
  { id: 'CO3', symbol: 'CO₃', charge: 2, poly: true, en: 'Carbonate', hi: 'कार्बोनेट' },
  { id: 'SO4', symbol: 'SO₄', charge: 2, poly: true, en: 'Sulphate', hi: 'सल्फेट' },
  { id: 'PO4', symbol: 'PO₄', charge: 3, poly: true, en: 'Phosphate', hi: 'फॉस्फेट' },
];

const SUB = ['₀', '₁', '₂', '₃', '₄'];
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function buildCrissCrossFormula(cat, ani) {
  const g = gcd(cat.charge, ani.charge);
  const cCount = ani.charge / g;
  const aCount = cat.charge / g;
  const cPart = cCount === 1 ? cat.symbol : (cat.poly ? `(${cat.symbol})${SUB[cCount]}` : `${cat.symbol}${SUB[cCount]}`);
  const aPart = aCount === 1 ? ani.symbol : (ani.poly ? `(${ani.symbol})${SUB[aCount]}` : `${ani.symbol}${SUB[aCount]}`);
  return { formula: `${cPart}${aPart}`, cCount, aCount, g };
}

const MASS_PRESETS = [
  {
    id: 'hno3',
    formula: 'HNO₃',
    type: { en: 'Molecular Mass', hi: 'आण्विक द्रव्यमान' },
    tag: { en: 'Think Q21', hi: 'सोचिए Q21' },
    total: 63,
    parts: [
      { sym: 'H', qty: 1, mass: 1 },
      { sym: 'N', qty: 1, mass: 14 },
      { sym: 'O', qty: 3, mass: 16 },
    ],
  },
  {
    id: 'nh4_2_so4',
    formula: '(NH₄)₂SO₄',
    type: { en: 'Formula Unit Mass', hi: 'सूत्र इकाई द्रव्यमान' },
    tag: { en: 'Group D Shift 37 PYQ', hi: 'Group D 2025 PYQ' },
    total: 132,
    parts: [
      { sym: 'N', qty: 2, mass: 14 },
      { sym: 'H', qty: 8, mass: 1 },
      { sym: 'S', qty: 1, mass: 32 },
      { sym: 'O', qty: 4, mass: 16 },
    ],
  },
  {
    id: 'ca_no3_2',
    formula: 'Ca(NO₃)₂',
    type: { en: 'Formula Unit Mass', hi: 'सूत्र इकाई द्रव्यमान' },
    tag: { en: 'NCERT Ex 9.7', hi: 'NCERT उदा. 9.7' },
    total: 164,
    parts: [
      { sym: 'Ca', qty: 1, mass: 40 },
      { sym: 'N', qty: 2, mass: 14 },
      { sym: 'O', qty: 6, mass: 16 },
    ],
  },
  {
    id: 'cacl2',
    formula: 'CaCl₂',
    type: { en: 'Formula Unit Mass', hi: 'सूत्र इकाई द्रव्यमान' },
    tag: { en: 'Group D Shift 22 PYQ', hi: 'Group D Shift 22 PYQ' },
    total: 111,
    parts: [
      { sym: 'Ca', qty: 1, mass: 40 },
      { sym: 'Cl', qty: 2, mass: 35.5 },
    ],
  },
  {
    id: 'na2o',
    formula: 'Na₂O',
    type: { en: 'Formula Unit Mass', hi: 'सूत्र इकाई द्रव्यमान' },
    tag: { en: 'Ex 9.6 & Group D 1', hi: 'उदा. 9.6 व PYQ' },
    total: 62,
    parts: [
      { sym: 'Na', qty: 2, mass: 23 },
      { sym: 'O', qty: 1, mass: 16 },
    ],
  },
  {
    id: 'mgoh2',
    formula: 'Mg(OH)₂',
    type: { en: 'Formula Unit Mass', hi: 'सूत्र इकाई द्रव्यमान' },
    tag: { en: 'Think Q24', hi: 'सोचिए Q24' },
    total: 58,
    parts: [
      { sym: 'Mg', qty: 1, mass: 24 },
      { sym: 'O', qty: 2, mass: 16 },
      { sym: 'H', qty: 2, mass: 1 },
    ],
  },
  {
    id: 'kcl',
    formula: 'KCl',
    type: { en: 'Formula Unit Mass', hi: 'सूत्र इकाई द्रव्यमान' },
    tag: { en: 'Think Q23', hi: 'सोचिए Q23' },
    total: 74.5,
    parts: [
      { sym: 'K', qty: 1, mass: 39 },
      { sym: 'Cl', qty: 1, mass: 35.5 },
    ],
  },
  {
    id: 'co2',
    formula: 'CO₂',
    type: { en: 'Molecular Mass', hi: 'आण्विक द्रव्यमान' },
    tag: { en: 'Ex 9.5 & Group D 3,29', hi: 'उदा. 9.5 व PYQ' },
    total: 44,
    parts: [
      { sym: 'C', qty: 1, mass: 12 },
      { sym: 'O', qty: 2, mass: 16 },
    ],
  },
];

const LAB_CASES = [
  {
    id: 'open',
    label: { en: 'Act 9.2 Open Flask', hi: 'क्र. 9.2 खुला फ्लास्क' },
    before: '124.50 g',
    after: '123.62 g',
    equal: false,
    bulb: false,
    note: {
      en: 'Vinegar + 2 g NaHCO₃ releases CO₂ gas into open air! Total mass (with escaped gas) IS still conserved, just unweighed on the pan.',
      hi: 'खुले फ्लास्क से CO₂ गैस हवा में उड़ जाती है! नियम का उल्लंघन नहीं हुआ — केवल गैस को तोला नहीं गया।',
    },
  },
  {
    id: 'sealed',
    label: { en: 'Act 9.2 Sealed Balloon', hi: 'क्र. 9.2 बंद गुब्बारा' },
    before: '124.50 g',
    after: '124.50 g',
    equal: true,
    bulb: false,
    note: {
      en: 'Balloon inflates trapping all CO₂! Digital scale stays identical (124.50 g = 124.50 g) — Lavoisier Conservation Law verified!',
      hi: 'गुब्बारा सभी CO₂ गैस रोक लेता है → तुला का पाठ्यांक ठीक समान (124.50 g = 124.50 g)! द्रव्यमान संरक्षण सत्यापित।',
    },
  },
  {
    id: 'nacl_aq',
    label: { en: 'Act 9.4 NaCl(aq) Bulb', hi: 'क्र. 9.4 NaCl जलीय विलयन' },
    before: 'Salt + Water',
    after: 'Free Na⁺ & Cl⁻',
    equal: true,
    bulb: true,
    note: {
      en: 'In water (or molten), rigid 3D ionic lattice breaks into mobile Na⁺ and Cl⁻ ions → BULB GLOWS BRIGHTLY! (Solid NaCl keeps ions locked = NO glow).',
      hi: 'जल में घुलने पर आयन मुक्त होकर गति करते हैं → बल्ब तेज चमकता है! (जबकि ठोस NaCl व चीनी/कर्पूर के विलयन में बल्ब नहीं जलता)।',
    },
  },
  {
    id: 'sugar_aq',
    label: { en: 'Act 9.4 Sugar / Camphor', hi: 'क्र. 9.4 चीनी / कर्पूर' },
    before: 'Covalent Molecules',
    after: 'Zero Ions',
    equal: true,
    bulb: false,
    note: {
      en: 'Sugar dissolves in water as neutral covalent molecules (zero free ions!), so BULB STAYS OFF. Camphor & naphthalene stay insoluble in water (dissolve in petrol/kerosene).',
      hi: 'चीनी जल में घुलकर भी उदासीन सहसंयोजी अणु रहती है (आयन शून्य) → बल्ब बंद रहता है! कर्पूर/नैफ्थलीन किरोसिन व पेट्रोल में घुलते हैं।',
    },
  },
];

export default function ChemicalFormulaValencyLabSVG({ lang = 'hi' }) {
  const hi = lang === 'hi';
  const [tab, setTab] = useState('crisscross');
  const [catIdx, setCatIdx] = useState(6); // Al3+
  const [aniIdx, setAniIdx] = useState(6); // SO4^2- -> Al2(SO4)3
  const [massIdx, setMassIdx] = useState(1); // (NH4)2SO4
  const [caseIdx, setCaseIdx] = useState(1); // Sealed Balloon

  const cat = CATIONS[catIdx];
  const ani = ANIONS[aniIdx];
  const res = buildCrissCrossFormula(cat, ani);
  const activeMass = MASS_PRESETS[massIdx];
  const activeCase = LAB_CASES[caseIdx];

  return (
    <div className="my-5 rounded-2xl border border-teal-500/35 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/35 p-4 text-slate-100 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-700/70">
        <div className="text-xs sm:text-sm font-extrabold text-teal-300 tracking-wide">
          {hi ? 'इंटरैक्टिव 3-इन-1 सूत्र, आण्विक द्रव्यमान एवं चालकता लैब (Ch 9)' : 'Interactive 3-in-1 Criss-Cross, Formula Mass & Conductivity Lab'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'crisscross', en: '1. Criss-Cross Builder', hi: '1. तिर्यक सूत्र निर्माता' },
            { id: 'mass', en: '2. Mass Calculator (u)', hi: '2. द्रव्यमान (u) गणना' },
            { id: 'lab', en: '3. Mass & Bulb Lab', hi: '3. संरक्षण व चालकता प्रयोग' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                tab === t.id ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {hi ? t.hi : t.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'crisscross' && (
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-950/70 p-2.5 border border-slate-800">
              <div className="font-bold text-amber-300 mb-1.5">{hi ? 'धनायन चुनें (+ चार्ज):' : 'Pick Cation (+ Charge):'}</div>
              <div className="flex flex-wrap gap-1.5">
                {CATIONS.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCatIdx(i)}
                    className={`px-2 py-1 rounded-md font-bold text-[11px] ${
                      i === catIdx ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    {c.symbol} ({c.charge}+)
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-2.5 border border-slate-800">
              <div className="font-bold text-cyan-300 mb-1.5">{hi ? 'ऋणायन चुनें (− चार्ज):' : 'Pick Anion (− Charge):'}</div>
              <div className="flex flex-wrap gap-1.5">
                {ANIONS.map((a, i) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setAniIdx(i)}
                    className={`px-2 py-1 rounded-md font-bold text-[11px] ${
                      i === aniIdx ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    {a.symbol} ({a.charge}−)
                  </button>
                ))}
              </div>
            </div>
          </div>

          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <text x="140" y="34" textAnchor="middle" fill="#fbbf24" fontSize="20" fontWeight="800">{cat.symbol}</text>
            <text x="290" y="34" textAnchor="middle" fill="#38bdf8" fontSize="20" fontWeight="800">{ani.symbol}</text>
            <text x="140" y="96" textAnchor="middle" fill="#fbbf24" fontSize="16" fontWeight="800">{cat.charge}+</text>
            <text x="290" y="96" textAnchor="middle" fill="#38bdf8" fontSize="16" font-weight="800">{ani.charge}−</text>
            <line x1="154" y1="80" x2="274" y2="42" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="274" y1="80" x2="154" y2="42" stroke="#fbbf24" strokeWidth="2.5" />
            <text x="360" y="68" textAnchor="middle" fill="#94a3b8" fontSize="22" fontWeight="800">⇒</text>
            <rect x="396" y="24" width="220" height="78" rx="12" fill="#0f2537" stroke="#2dd4bf" strokeWidth="2" />
            <text x="506" y="64" textAnchor="middle" fill="#34d399" fontSize="24" fontWeight="800">{res.formula}</text>
            <text x="506" y="88" textAnchor="middle" fill="#cbd5e1" fontSize="11.5" fontWeight="700">
              {hi ? `${cat.hi} ${ani.hi}` : `${cat.en} ${ani.en}`}
            </text>
            <text x="320" y="138" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="700">
              {res.g > 1
                ? hi
                  ? `HCF ${res.g} से दोनों आवेश समान रूप से कटे! (${res.cCount} धनायन : ${res.aCount} ऋणायन = कुल आवेश 0)`
                  : `Both charges divided by HCF ${res.g} for simplest ratio (${res.cCount}:${res.aCount}, Net charge = 0)!`
                : hi
                  ? `धनायन आवेश (+${res.cCount * cat.charge}) + ऋणायन आवेश (−${res.aCount * ani.charge}) = कुल उदासीन (0)${res.aCount > 1 && ani.poly ? ' • कोष्ठक आवश्यक!' : ''}`
                  : `Balanced total charge: +${res.cCount * cat.charge} and −${res.aCount * ani.charge} = 0${res.aCount > 1 && ani.poly ? ' (Brackets required around polyatomic ion!)' : ''}`}
            </text>
          </svg>
        </div>
      )}

      {tab === 'mass' && (
        <div className="mt-3 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {MASS_PRESETS.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMassIdx(i)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  i === massIdx ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {m.formula} ({m.total} u)
              </button>
            ))}
          </div>
          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <text x="320" y="28" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="800">
              {activeMass.formula} — {hi ? activeMass.type.hi : activeMass.type.en} ({hi ? activeMass.tag.hi : activeMass.tag.en})
            </text>
            {activeMass.parts.map((pt, idx) => {
              const x = 30 + idx * 145;
              return (
                <g key={pt.sym}>
                  <rect x={x} y="46" width="132" height="64" rx="10" fill="#132238" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x={x + 66} y="70" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="800">
                    {pt.qty} × {pt.sym} ({pt.mass} u)
                  </text>
                  <text x={x + 66} y="94" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="800">
                    = {pt.qty * pt.mass} u
                  </text>
                </g>
              );
            })}
            <text x="320" y="142" textAnchor="middle" fill="#34d399" fontSize="16" fontWeight="800">
              {activeMass.parts.map((p) => p.qty * p.mass).join(' + ')} = {activeMass.total} u ({hi ? 'कुल परमाणु द्रव्यमान योग' : 'Unified Atomic Mass Units u'})
            </text>
          </svg>
        </div>
      )}

      {tab === 'lab' && (
        <div className="mt-3 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {LAB_CASES.map((lc, i) => (
              <button
                key={lc.id}
                type="button"
                onClick={() => setCaseIdx(i)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  i === caseIdx ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {hi ? lc.label.hi : lc.label.en}
              </button>
            ))}
          </div>
          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <rect x="26" y="26" width="175" height="68" rx="10" fill="#132238" stroke="#38bdf8" />
            <text x="113" y="54" textAnchor="middle" fill="#94a3b8" fontSize="11">{hi ? 'आरंभिक अवस्था' : 'Before / Input'}</text>
            <text x="113" y="76" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="800">{activeCase.before}</text>

            <rect x="232" y="26" width="175" height="68" rx="10" fill="#132238" stroke={activeCase.equal ? '#34d399' : '#fb7185'} />
            <text x="319" y="54" textAnchor="middle" fill="#94a3b8" fontSize="11">{hi ? 'अंतिम परिणाम' : 'After / Result'}</text>
            <text x="319" y="76" textAnchor="middle" fill={activeCase.equal ? '#34d399' : '#fb7185'} fontSize="15" fontWeight="800">
              {activeCase.after}
            </text>

            <circle cx="524" cy="60" r="32" fill={activeCase.bulb ? '#facc15' : '#1e293b'} fillOpacity={activeCase.bulb ? 0.35 : 1} stroke={activeCase.bulb ? '#facc15' : '#475569'} strokeWidth="2.5" />
            <text x="524" y="64" textAnchor="middle" fill={activeCase.bulb ? '#fef08a' : '#94a3b8'} fontSize="12" fontWeight="800">
              {activeCase.id.includes('aq') ? (activeCase.bulb ? 'BULB ON' : 'BULB OFF') : activeCase.equal ? 'MASS =' : 'GAS ↑'}
            </text>

            <text x="320" y="132" textAnchor="middle" fill="#e2e8f0" fontSize="11.5" fontWeight="600">
              {hi ? activeCase.note.hi : activeCase.note.en}
            </text>
          </svg>
        </div>
      )}
    </div>
  );
}
