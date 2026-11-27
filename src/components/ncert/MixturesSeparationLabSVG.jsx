import React, { useState } from 'react';

const MIX_PRESETS = [
  {
    id: 'acetone_water',
    en: 'Acetone (56 °C) + Water (100 °C)',
    hi: 'ऐसीटोन (56 °C) + जल (100 °C)',
    methodEn: 'Simple Distillation (ΔT = 44 °C ≥ 25 °C)',
    methodHi: 'सरल आसवन (ΔT = 44 °C ≥ 25 °C)',
    ruleEn: 'Miscible liquids with boiling-point gap ≥ 25 °C. Acetone (56 °C) vaporizes first and condenses in Liebig condenser (ख) into flask (ग).',
    ruleHi: 'कम क्वथनांक वाला ऐसीटोन (56 °C) पहले वाष्पित होकर जल संघनित्र (ख) में ठंडा होता है व शुद्ध आसुत के रूप में फ्लास्क (ग) में एकत्र होता है।',
    badgeEn: 'ΔT ≥ 25 °C • NCERT Fig 5.12 / 5.26',
    badgeHi: 'ΔT ≥ 25 °C • NCERT चित्र 5.12 / 5.26',
  },
  {
    id: 'ethanol_benzene',
    en: 'Ethanol (78 °C) + Benzene (80 °C) / Crude Oil',
    hi: 'ऐल्कोहॉल (78 °C) + बेंजीन (80 °C) / कच्चा पेट्रोलियम',
    methodEn: 'Fractional Distillation (ΔT = 2 °C < 25 °C)',
    methodHi: 'प्रभाजी आसवन (ΔT = 2 °C < 25 °C)',
    ruleEn: 'Boiling points differ by < 25 °C. Requires a fractionating column (same industrial principle yields LPG, Petrol, Kerosene, Diesel, Bitumen).',
    ruleHi: 'क्वथनांक अंतर < 25 °C होने से सरल आसवन फेल! प्रभाजी स्तंभ से वाष्प कई बार संघनित-वाष्पित होती है (यही पेट्रोलियम परिशोधन का सिद्धांत है)।',
    badgeEn: 'ΔT < 25 °C • Table 5.5 / Fig 5.14',
    badgeHi: 'ΔT < 25 °C • तालिका 5.5 / चित्र 5.14',
  },
  {
    id: 'oil_water',
    en: 'Mustard Oil (910 g/L) + Water (1000 g/L)',
    hi: 'सरसों तेल (910 g/L) + जल (1000 g/L)',
    methodEn: 'Separating Funnel (Density Difference)',
    methodHi: 'पृथक्कारी कीप (घनत्व अंतर • अमिश्रणीय)',
    ruleEn: 'Immiscible liquids form 2 layers. Lighter oil (0.91 g/mL) floats ON TOP while denser water (1.0 g/mL) settles below & drains first via stopcock.',
    ruleHi: 'अमिश्रणीय द्रव दो परतें बनाते हैं: हल्का तेल ऊपर तैरता है और भारी जल नीचे बैठकर स्टॉपकॉक से पहले बाहर निकलता है (Ex Q5)।',
    badgeEn: 'Act 5.6 / Ex Q5',
    badgeHi: 'क्रियाकलाप 5.6 / Ex Q5',
  },
  {
    id: 'sand_salt_naph',
    en: 'Sand + Common Salt + Naphthalene (Ex Q11)',
    hi: 'रेत + साधारण नमक + नैफ्थलीन (Ex Q11)',
    methodEn: '1. Sublimation → 2. Dissolve & Filter → 3. Evaporate',
    methodHi: '1. ऊर्ध्वपातन → 2. जल में घोलकर निस्यंदन → 3. वाष्पन',
    ruleEn: 'NCERT Fig 5.25 exact sequence: Pic 1 (Sublimation removes Naphthalene) -> Dissolve residue in water -> Pic 3 (Filtration traps Sand) -> Pic 2 (Evaporate filtrate for Salt).',
    ruleHi: 'चित्र 5.25 (ख) सही क्रम: चित्र 1 (ऊर्ध्वपातन से नैफ्थलीन अलग) → जल में घोलना → चित्र 3 (छानकर रेत अलग) → चित्र 2 (वाष्पन से शुद्ध नमक)!',
    badgeEn: '3-Step Multi-Method • Fig 5.25',
    badgeHi: 'त्रि-चरणीय क्रम • चित्र 5.25',
  },
  {
    id: 'ink_flower',
    en: 'Black Ink Dyes / Flower & Spinach Pigments',
    hi: 'काली स्याही / पुष्प व पालक के वर्णक',
    methodEn: 'Paper Chromatography (Capillary Solubility)',
    methodHi: 'कागज वर्णलेखिकी (विलेयता व केशिकत्व अंतर)',
    ruleEn: 'Draw baseline 2 cm up in PENCIL (never ink!), keep ink dot ABOVE solvent level. More soluble dyes travel faster & higher up the strip.',
    ruleHi: 'रेखा हमेशा पेंसिल से 2 cm ऊपर खींचें व स्याही बिंदु जल-स्तर से ऊपर रखें। जो रंग विलायक में अधिक घुलनशील होगा, वह सबसे ऊपर पहुँचेगा!',
    badgeEn: 'Act 5.5 • Chroma + Graphein',
    badgeHi: 'क्रियाकलाप 5.5 • Think Q6(iii)',
  },
];

export function MixturesSeparationLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('tyndall'); // 'conc' | 'tyndall' | 'sep'

  // Tab 1: Concentration + Cooling Crystallization (Table 5.4)
  const [soluteG, setSoluteG] = useState(30);
  const [solventG, setSolventG] = useState(80);
  const [mode, setMode] = useState('mm'); // 'mm' | 'mv' | 'vv'
  const [kno3Temp, setKno3Temp] = useState(40);
  const kno3Map = { 10: 21, 20: 32, 30: 45, 40: 62, 60: 106, 80: 167 };
  const totalMix = mode === 'mm' ? soluteG + solventG : solventG;
  const pct = totalMix > 0 ? ((soluteG / totalMix) * 100).toFixed(2) : '0.00';
  const kno3Sat = kno3Map[kno3Temp] || 62;
  const kno3CrystalOut = Math.max(0, 167 - kno3Sat);

  // Tab 2: Tyndall & Particle Scanner
  const [mixType, setMixType] = useState('colloid'); // 'solution' | 'colloid' | 'suspension'
  const [laserOn, setLaserOn] = useState(true);
  const [settled, setSettled] = useState(false);

  // Tab 3: Separation Matcher
  const [sepId, setSepId] = useState('sand_salt_naph');
  const activeSep = MIX_PRESETS.find((x) => x.id === sepId) || MIX_PRESETS[0];

  const mixInfo = {
    solution: {
      titleHi: 'वास्तविक विलयन (नमक / CuSO₄ जल)',
      titleEn: 'True Solution (Salt / CuSO₄ aq)',
      size: '< 1 nm',
      tyndallHi: '❌ अनुपस्थित (किरण का मार्ग अदृश्य)',
      tyndallEn: '❌ Absent (Beam invisible inside)',
      filterHi: '❌ निस्यंदक पत्र से आर-पार निकल जाता है',
      filterEn: '❌ Passes completely through filter paper',
      settleHi: 'स्थिर — कण तली में कभी नहीं बैठते',
      settleEn: 'Stable — Never settles on standing',
      color: '#38bdf8',
    },
    colloid: {
      titleHi: 'कोलॉइड (दुग्ध / रक्त / धुआँ)',
      titleEn: 'Colloid (Milk / Blood / Fog)',
      size: '1 – 1000 nm',
      tyndallHi: '✅ प्रबल टिंडल प्रभाव (चमकीला शंकु मार्ग)',
      tyndallEn: '✅ Strong Tyndall Cone Visible!',
      filterHi: '❌ साधारण फिल्टर से नहीं, पर अपकेंद्रण से अलग',
      filterEn: '❌ Passes ordinary filter; needs Centrifugation',
      settleHi: 'स्थिर — बिना हिलाए कण नीचे नहीं बैठते!',
      settleEn: 'Stable — Particles DO NOT settle!',
      color: '#a855f7',
    },
    suspension: {
      titleHi: 'निलंबन (पंकिल जल / चॉक चूर्ण)',
      titleEn: 'Suspension (Muddy / Chalk Water)',
      size: '> 1000 nm',
      tyndallHi: settled ? '❌ कण नीचे बैठने से प्रकीर्णन समाप्त' : '✅ हिलाने पर टिंडल प्रभाव दिखता है',
      tyndallEn: settled ? '❌ Stops once heavy particles settle' : '✅ Scatters light while suspended',
      filterHi: '✅ निस्यंदक पत्र पर ठोस अवशेष रुक जाता है',
      filterEn: '✅ Easily separated by filtration!',
      settleHi: 'अस्थायी — रखने पर कण तली में बैठ जाते हैं',
      settleEn: 'Unstable — Heavy particles settle down',
      color: '#f59e0b',
    },
  }[mixType];

  return (
    <div className="my-5 rounded-2xl border border-teal-500/30 bg-slate-900/85 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-teal-500/20 px-2.5 py-0.5 text-[11px] font-bold text-teal-300">
            {hi ? 'इंटरैक्टिव मिश्रण, टिंडल व पृथक्करण लैब (NCERT 5.1–5.5)' : 'Interactive Mixture, Tyndall & Separation Lab (NCERT 5.1–5.5)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'कण आकार-टिंडल स्कैनर, सांद्रता (% m/m, m/v, v/v) व पृथक्करण चयनकर्ता' : 'Tyndall Particle Scanner, Concentration Calculator & Separation Matcher'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'tyndall', label: hi ? 'टिंडल व कण आकार' : 'Tyndall Scanner' },
            { id: 'conc', label: hi ? 'सांद्रता व क्रिस्टल' : '% Conc & KNO₃' },
            { id: 'sep', label: hi ? 'पृथक्करण गाइड' : 'Separation Lab' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'tyndall' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'solution', label: hi ? 'विलयन (<1 nm)' : 'Solution (<1 nm)' },
              { id: 'colloid', label: hi ? 'कोलॉइड (1–1000 nm)' : 'Colloid (1–1000 nm)' },
              { id: 'suspension', label: hi ? 'निलंबन (>1000 nm)' : 'Suspension (>1000 nm)' },
            ].map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setMixType(b.id)}
                className={`rounded-lg px-3 py-1 text-xs font-bold ${
                  mixType === b.id ? 'bg-purple-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {b.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setLaserOn(!laserOn)}
              className={`ml-auto rounded-lg px-2.5 py-1 text-xs font-bold ${laserOn ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              {laserOn ? (hi ? '🔦 लेसर चालू' : '🔦 Laser ON') : (hi ? 'लेसर बंद' : 'Laser OFF')}
            </button>
            <button
              type="button"
              onClick={() => setSettled(!settled)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold ${settled ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-amber-300'}`}
            >
              {settled ? (hi ? '⏳ 30 मिनट शांत रखा' : '⏳ Stood 30 min') : (hi ? 'ताजा विलोडित' : 'Freshly Stirred')}
            </button>
          </div>

          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950/90 border border-slate-800">
            <rect x="18" y="68" width="64" height="26" rx="6" fill="#be123c" stroke="#fb7185" strokeWidth="1.5" />
            <text x="50" y="84" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff">LASER</text>
            {laserOn && <line x1="82" y1="81" x2="210" y2="81" stroke="#f43f5e" strokeWidth="3.5" />}

            {/* Test Beaker */}
            <rect x="210" y="22" width="150" height="122" rx="10" fill={mixType === 'colloid' ? '#1e1b4b' : mixType === 'suspension' ? '#292524' : '#082f49'} stroke={mixInfo.color} strokeWidth="2.2" />

            {/* Particles */}
            {mixType === 'colloid' && (
              <>
                <circle cx="240" cy="48" r="2.2" fill="#e9d5ff" /><circle cx="285" cy="70" r="2.2" fill="#e9d5ff" /><circle cx="330" cy="54" r="2.2" fill="#e9d5ff" />
                <circle cx="255" cy="108" r="2.2" fill="#e9d5ff" /><circle cx="310" cy="122" r="2.2" fill="#e9d5ff" /><circle cx="275" cy="92" r="2.2" fill="#e9d5ff" />
              </>
            )}
            {mixType === 'suspension' && !settled && (
              <>
                <circle cx="238" cy="48" r="4.5" fill="#fbbf24" /><circle cx="290" cy="64" r="4.5" fill="#fbbf24" /><circle cx="334" cy="52" r="4.5" fill="#fbbf24" />
                <circle cx="258" cy="98" r="4.5" fill="#fbbf24" /><circle cx="315" cy="112" r="4.5" fill="#fbbf24" /><circle cx="282" cy="84" r="4.5" fill="#fbbf24" />
              </>
            )}
            {mixType === 'suspension' && settled && (
              <>
                <circle cx="232" cy="134" r="5" fill="#f59e0b" /><circle cx="256" cy="135" r="5" fill="#f59e0b" /><circle cx="282" cy="134" r="5" fill="#f59e0b" />
                <circle cx="308" cy="135" r="5" fill="#f59e0b" /><circle cx="336" cy="134" r="5" fill="#f59e0b" />
              </>
            )}

            {/* Beam inside beaker */}
            {laserOn && (mixType === 'colloid' || (mixType === 'suspension' && !settled)) && (
              <>
                <polygon points="210,74 360,64 360,98 210,88" fill="#fb7185" fillOpacity="0.42" />
                <line x1="210" y1="81" x2="360" y2="81" stroke="#fda4af" strokeWidth="4" />
              </>
            )}
            {laserOn && (
              <line x1="360" y1="81" x2="412" y2="81" stroke="#f43f5e" strokeWidth="2.2" strokeDasharray="4 3" />
            )}

            <text x="285" y="156" textAnchor="middle" fontSize="10" fontWeight="800" fill={mixInfo.color}>{hi ? mixInfo.titleHi : mixInfo.titleEn}</text>

            {/* Right readout */}
            <rect x="424" y="22" width="202" height="122" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
            <text x="436" y="42" fontSize="10.5" fontWeight="800" fill="#2dd4bf">{hi ? 'कण व्यास:' : 'Particle Diameter:'} {mixInfo.size}</text>
            <text x="436" y="66" fontSize="9.3" fontWeight="700" fill="#f8fafc">{hi ? mixInfo.tyndallHi : mixInfo.tyndallEn}</text>
            <text x="436" y="92" fontSize="9.3" fontWeight="700" fill="#cbd5e1">{hi ? mixInfo.filterHi : mixInfo.filterEn}</text>
            <text x="436" y="118" fontSize="9.3" fontWeight="700" fill="#fde68a">{hi ? mixInfo.settleHi : mixInfo.settleEn}</text>
          </svg>
        </div>
      )}

      {tab === 'conc' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5 text-xs">
            {[
              { id: 'mm', label: '% m/m (Ex 14 C)', s: 30, v: 80 },
              { id: 'mv', label: hi ? '0.9% m/v सेलाइन' : '0.9% m/v Saline', s: 0.9, v: 100 },
              { id: 'vv', label: hi ? 'संतरा रस 20% v/v' : 'Orange 20% v/v', s: 30, v: 150 },
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => { setMode(p.id); setSoluteG(p.s); setSolventG(p.v); }}
                className={`rounded-lg px-2.5 py-1 font-bold ${mode === p.id ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{mode === 'vv' ? (hi ? 'विलेय आयतन (mL)' : 'Solute Vol (mL)') : (hi ? 'विलेय द्रव्यमान (g)' : 'Solute Mass (g)')}</span>
                <span className="text-cyan-300">{soluteG}</span>
              </div>
              <input type="range" min="1" max="100" step="1" value={soluteG} onChange={(e) => setSoluteG(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{mode === 'mm' ? (hi ? 'जल विलायक (g)' : 'Water Solvent (g)') : (hi ? 'कुल विलयन आयतन (mL)' : 'Solution Vol (mL)')}</span>
                <span className="text-amber-300">{solventG}</span>
              </div>
              <input type="range" min="50" max="500" step="10" value={solventG} onChange={(e) => setSolventG(+e.target.value)} className="mt-1 w-full accent-amber-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'KNO₃ 80°C→शीतलन ताप' : 'Cool 80°C Sat. KNO₃ to'}</span>
                <span className="text-purple-300">{kno3Temp} °C</span>
              </div>
              <input type="range" min="10" max="80" step="20" value={kno3Temp} onChange={(e) => setKno3Temp(+e.target.value)} className="mt-1 w-full accent-purple-400" />
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'कुल विलयन हर' : 'Denominator'}</div>
              <div className="text-sm text-amber-300">{totalMix} {mode === 'mm' ? 'g' : 'mL'}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'सांद्रता (%)' : 'Concentration'}</div>
              <div className="text-sm text-emerald-300">{pct}% {mode === 'mm' ? 'm/m' : mode === 'mv' ? 'm/v' : 'v/v'}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? `KNO₃ विलेयता @${kno3Temp}°C` : `KNO₃ @ ${kno3Temp}°C`}</div>
              <div className="text-sm text-cyan-300">{kno3Sat} g / 100g</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'क्रिस्टल अवक्षेप (80°C से)' : 'Crystals Precipitated'}</div>
              <div className="text-sm text-purple-300">{kno3CrystalOut} g</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'sep' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {MIX_PRESETS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSepId(m.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  sepId === m.id ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {hi ? m.hi : m.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-slate-950/75 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-sm font-extrabold text-amber-300">{hi ? activeSep.methodHi : activeSep.methodEn}</div>
              <span className="rounded-full bg-teal-500/20 px-2.5 py-0.5 text-[11px] font-bold text-teal-300">
                {hi ? activeSep.badgeHi : activeSep.badgeEn}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-200">{hi ? activeSep.ruleHi : activeSep.ruleEn}</p>
          </div>
        </div>
      )}
    </div>
  );
}
