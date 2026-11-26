import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Microscope, Droplets, GitBranch, Layers } from 'lucide-react';
import { renderNcertDiagramSvg } from '../../data/ncert/diagrams/chapterVectorDiagrams';

/**
 * Custom Animated & Interactive React + SVG Labs for Class 9 Biology Ch 2 (Cell)
 * Zero textbook image crops — 100% vector + smooth CSS keyframes.
 */

// ==================== 1. MICROSCOPE & SCALE EXPLORER (Fig 2.1 & 2.2) ====================
export function MicroscopeScaleExplorerSVG({ lang = 'hi' }) {
  const [eyepiece, setEyepiece] = useState(10);
  const [objective, setObjective] = useState(40);
  const [selectedPart, setSelectedPart] = useState('objective');

  const scaleItems = [
    { size: '100 m – 10 m', en: 'Rocket & Neem Tree', hi: 'रॉकेट एवं नीम का पेड़', zone: 'eye', pct: 95 },
    { size: '1 m – 0.1 m', en: 'Human / Great Indian Bustard / Hen Egg', hi: 'मनुष्य / ग्रेट इंडियन बस्टर्ड / मुर्गी का अंडा', zone: 'eye', pct: 80 },
    { size: '1 cm – 1 mm', en: 'Fish Egg & Amoeba', hi: 'मछली का अंडा एवं अमीबा', zone: 'eye', pct: 65 },
    { size: '0.1 mm (100 µm)', en: 'HUMAN EYE RESOLVING LIMIT • Plant & Animal Cells', hi: 'मानव नेत्र सीमा (0.1 mm) • पादप व जंतु कोशिका', zone: 'light', pct: 52 },
    { size: '10 µm – 1 µm', en: 'Nucleus, Most Bacteria & Mitochondria', hi: 'केंद्रक, अधिकांश जीवाणु एवं माइटोकॉन्ड्रिया', zone: 'light', pct: 38 },
    { size: '100 nm – 10 nm', en: 'Smallest Bacteria, Viruses, Ribosomes (EM Only!)', hi: 'सबसे छोटे जीवाणु, विषाणु व राइबोसोम (केवल EM!)', zone: 'electron', pct: 22 },
    { size: '1 nm – 0.1 nm', en: 'Proteins, Lipids (Membrane 7-10 nm), Atoms', hi: 'प्रोटीन, लिपिड व परमाणु', zone: 'electron', pct: 10 },
  ];

  const microscopeParts = {
    eyepiece: {
      en: 'Eyepiece Lens (नेत्रिका)',
      hi: 'नेत्रिका लेंस (Eyepiece)',
      desc: {
        en: 'Upper convex lens near eye (usually 10X). Total Magnification = Eyepiece × Objective.',
        hi: 'ऊपरी उत्तल लेंस जहाँ से आँख द्वारा देखा जाता है (प्रायः 10X)। कुल आवर्धन = नेत्रिका × अभिदृश्यक।',
      },
    },
    objective: {
      en: 'Objective Lens (अभिदृश्यक)',
      hi: 'अभिदृश्यक लेंस (Objective)',
      desc: {
        en: 'Interchangeable lower convex lenses (10X, 40X) right above the specimen slide.',
        hi: 'स्लाइड के ठीक ऊपर लगे विभिन्न आवर्धन लेंस (10X, 40X)।',
      },
    },
    coarse: {
      en: 'Coarse & Fine Focus Knobs',
      hi: 'स्थूल एवं सूक्ष्म समायोजन घुंडी',
      desc: {
        en: 'Adjust stage height carefully for crisp Resolution & Contrast without cracking slide.',
        hi: 'स्पष्ट विभेदन व फोकस लाने के लिए काय नली/मंच को ऊपर-नीचे घुमाती हैं।',
      },
    },
    stage: {
      en: 'Stage & Illuminating Mirror',
      hi: 'मंच एवं परावर्तक दर्पण',
      desc: {
        en: 'Holds glass slide (stained with Safranin or Methylene Blue); mirror directs visible light upwards.',
        hi: 'स्लाइड रखने का मंच; नीचे लगा दर्पण प्रकाश पुंज को नमूने से पार भेजता है।',
      },
    },
  };

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-[#080D1B] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-cyan-300 font-black text-xs sm:text-sm">
          <Microscope className="w-4 h-4" />
          <span>
            {lang === 'hi'
              ? 'स्केल व प्रकाश सूक्ष्मदर्शी लैब (चित्र 2.1 एवं 2.2)'
              : 'Resolution Scale & Light Microscope Lab (Fig 2.1 & 2.2)'}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-bold text-cyan-300">
          {lang === 'hi' ? 'नेत्र सीमा: 0.1 mm @ 25 cm' : 'Eye Limit: 0.1 mm @ 25 cm'}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Logarithmic Size Scale (Fig 2.1) */}
        <div className="lg:col-span-6 space-y-2">
          <div className="text-[11px] font-bold text-slate-300">
            {lang === 'hi' ? 'आमाप पैमाना (1 km -> 0.1 nm) एवं दृश्यता सीमा:' : 'Visibility Scale (Macro -> Nano):'}
          </div>
          {scaleItems.map((item, i) => (
            <div key={i} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[10px] font-mono font-bold text-amber-300">{item.size}</div>
                <div className="text-[11px] font-semibold text-slate-200 truncate">{item[lang]}</div>
              </div>
              <span
                className={`shrink-0 text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${
                  item.zone === 'eye'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : item.zone === 'light'
                    ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                    : 'bg-violet-500/15 text-violet-300 border-violet-500/30'
                }`}
              >
                {item.zone === 'eye'
                  ? lang === 'hi'
                    ? 'नग्न नेत्र'
                    : 'Naked Eye'
                  : item.zone === 'light'
                  ? lang === 'hi'
                    ? 'प्रकाश सूक्ष्मदर्शी'
                    : 'Light Mic.'
                  : lang === 'hi'
                  ? 'इलेक्ट्रॉन सूक्ष्मदर्शी'
                  : 'Electron Mic.'}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Compound Microscope SVG + Live Magnification Calc */}
        <div className="lg:col-span-6 bg-slate-950/70 rounded-2xl border border-slate-800 p-3 space-y-3">
          <svg viewBox="0 0 320 230" className="w-full h-48 mx-auto">
            <defs>
              <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Base & Arm */}
            <rect x="65" y="202" width="160" height="16" rx="6" fill="url(#bodyGrad)" stroke="#475569" strokeWidth="1.5" />
            <path d="M 105 202 L 105 90 Q 105 60 135 60 L 160 60" fill="none" stroke="#64748B" strokeWidth="14" strokeLinecap="round" />

            {/* Light Ray Beam Animation */}
            <polygon points="154,185 166,185 162,75 158,75" fill="url(#beamGrad)" className="animate-pulse" />

            {/* Body Tube */}
            <rect x="148" y="36" width="24" height="58" rx="4" fill="#1E293B" stroke="#22D3EE" strokeOpacity="0.4" />

            {/* Eyepiece (Clickable) */}
            <g className="cursor-pointer" onClick={() => setSelectedPart('eyepiece')}>
              <rect
                x="145"
                y="18"
                width="30"
                height="22"
                rx="4"
                fill={selectedPart === 'eyepiece' ? '#06B6D4' : '#334155'}
                stroke="#67E8F9"
                strokeWidth="1.5"
              />
              <text x="190" y="32" fill="#67E8F9" fontSize="10" fontWeight="bold">
                {lang === 'hi' ? `नेत्रिका (${eyepiece}X)` : `Eyepiece (${eyepiece}X)`}
              </text>
            </g>

            {/* Focus Knobs (Clickable) */}
            <g className="cursor-pointer" onClick={() => setSelectedPart('coarse')}>
              <circle
                cx="104"
                cy="92"
                r="13"
                fill={selectedPart === 'coarse' ? '#F59E0B' : '#1E293B'}
                stroke="#FBBF24"
                strokeWidth="1.5"
              />
              <circle cx="104" cy="122" r="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5" />
              <text x="12" y="96" fill="#FDE68A" fontSize="9.5" fontWeight="bold">
                {lang === 'hi' ? 'स्थूल/सूक्ष्म घुंडी' : 'Focus Knobs'}
              </text>
            </g>

            {/* Objective Lens (Clickable) */}
            <g className="cursor-pointer" onClick={() => setSelectedPart('objective')}>
              <polygon
                points="151,94 169,94 165,120 155,120"
                fill={selectedPart === 'objective' ? '#10B981' : '#334155'}
                stroke="#34D399"
                strokeWidth="1.5"
              />
              <text x="182" y="112" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                {lang === 'hi' ? `अभिदृश्यक (${objective}X)` : `Objective (${objective}X)`}
              </text>
            </g>

            {/* Stage + Slide + Mirror (Clickable) */}
            <g className="cursor-pointer" onClick={() => setSelectedPart('stage')}>
              <rect
                x="118"
                y="144"
                width="84"
                height="8"
                rx="3"
                fill={selectedPart === 'stage' ? '#38BDF8' : '#334155'}
              />
              <rect x="136" y="140" width="48" height="4" rx="1" fill="#F472B6" />
              <ellipse cx="160" cy="186" rx="18" ry="6" fill="#38BDF8" fillOpacity="0.65" stroke="#BAE6FD" strokeWidth="1.5" />
              <text x="206" y="152" fill="#BAE6FD" fontSize="9.5" fontWeight="bold">
                {lang === 'hi' ? 'मंच व दर्पण' : 'Stage & Mirror'}
              </text>
            </g>
          </svg>

          {/* Interactive Detail + Magnification Simulator */}
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <div className="font-bold text-cyan-300">{microscopeParts[selectedPart][lang]}</div>
            <p className="text-[11px] text-slate-300 mt-0.5">{microscopeParts[selectedPart].desc[lang]}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-slate-300">{lang === 'hi' ? 'आवर्धन कैलकुलेटर:' : 'Magnification:'}</span>
              <select
                value={eyepiece}
                onChange={(e) => setEyepiece(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white font-bold"
              >
                <option value={5}>5X Eye</option>
                <option value={10}>10X Eye</option>
                <option value={15}>15X Eye</option>
              </select>
              <span className="text-cyan-400 font-black">×</span>
              <select
                value={objective}
                onChange={(e) => setObjective(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white font-bold"
              >
                <option value={10}>10X Obj</option>
                <option value={40}>40X Obj</option>
                <option value={100}>100X Obj</option>
              </select>
            </div>
            <div className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-black text-xs">
              = {eyepiece * objective}X Total
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 2. OSMOSIS & FLUID-MOSAIC SIMULATOR (Fig 2.6, 2.7, 2.9) ====================
export function OsmosisBilayerSimulatorSVG({ lang = 'hi' }) {
  const [mode, setMode] = useState('osmosis'); // 'osmosis' | 'bilayer'
  const [tonicity, setTonicity] = useState('hypertonic'); // 'hypotonic' | 'isotonic' | 'hypertonic'
  const [cellKind, setCellKind] = useState('plant'); // 'plant' | 'animal'

  const tonicityCopy = {
    hypotonic: {
      title: { en: 'Hypotonic Solution (Dilute Outside)', hi: 'अल्पपरासारी विलयन (बाहर तनु जल अधिक)' },
      rule: { en: 'Outside Solute < Inside Solute', hi: 'बाह्य विलेय सांद्रता < अंतःकोशिकीय सांद्रता' },
      effect: {
        plant: {
          en: 'Endosmosis: Water rushes IN -> Vacuole swells & presses tightly against rigid Cell Wall (Turgid, never bursts!).',
          hi: 'अंतःपरासरण: जल भीतर जाता है -> रसधानी फूलती है, पर दृढ़ कोशिका भित्ति फटने से बचाती है!',
        },
        animal: {
          en: 'Endosmosis: Water rushes IN -> Animal cell SWELLS (extreme dilution can rupture thin membrane).',
          hi: 'अंतःपरासरण: जल भीतर प्रवेश करता है -> जंतु कोशिका फूल जाती है!',
        },
      },
      scale: 1.16,
      protoScale: 1.0,
      color: '#34D399',
    },
    isotonic: {
      title: { en: 'Isotonic Solution (Balanced)', hi: 'समपरासारी विलयन (संतुलित अवस्था)' },
      rule: { en: 'Outside Solute = Inside Solute', hi: 'बाह्य विलेय सांद्रता = अंतःकोशिकीय सांद्रता' },
      effect: {
        plant: {
          en: 'Equal water enters & leaves per second -> ZERO net water gain/loss -> Cell stays normal.',
          hi: 'समान मात्रा में जल अंदर-बाहर आता-जाता है -> आकार में कोई शुद्ध परिवर्तन नहीं।',
        },
        animal: {
          en: 'Dynamic equilibrium -> Zero net water movement -> RBC / Animal cell maintains normal smooth contour.',
          hi: 'गतिक संतुलन -> शुद्ध जल गति शून्य -> कोशिका सामान्य बनी रहती है।',
        },
      },
      scale: 1.0,
      protoScale: 0.94,
      color: '#38BDF8',
    },
    hypertonic: {
      title: { en: 'Hypertonic Solution (20% Salt/Sugar Outside)', hi: 'अतिपरासारी विलयन (20% नमक/चीनी बाहर)' },
      rule: { en: 'Outside Solute > Inside Solute', hi: 'बाह्य विलेय सांद्रता > अंतःकोशिकीय सांद्रता' },
      effect: {
        plant: {
          en: 'PLASMOLYSIS (जीवद्रव्य कुंचन): Water exits! Outer Cellulose Cell Wall keeps its shape while Plasma Membrane + Cytoplasm shrink inward!',
          hi: 'जीवद्रव्य कुंचन (Plasmolysis): जल बाहर निकलता है! बाहरी कोशिका भित्ति वैसी रहती है, पर भीतर का द्रव्य संकुचित होकर भित्ति से अलग हो जाता है!',
        },
        animal: {
          en: 'Exosmosis: No cell wall exists -> Entire Animal cell shrivels / shrinks unevenly!',
          hi: 'बहिःपरासरण: भित्ति न होने से पूरी जंतु कोशिका बुरी तरह पिचक/संकुचित जाती है!',
        },
      },
      scale: 0.72,
      protoScale: 0.62,
      color: '#FB7185',
    },
  };

  const active = tonicityCopy[tonicity];

  return (
    <div className="rounded-2xl border border-teal-500/35 bg-[#080E1E] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-teal-300 font-black text-xs sm:text-sm">
          <Droplets className="w-4 h-4" />
          <span>
            {lang === 'hi'
              ? 'परासरण, जीवद्रव्य कुंचन & तरल-मोजेक झिल्ली लैब (चित्र 2.6, 2.7, 2.9)'
              : 'Live Osmosis, Plasmolysis & Fluid-Mosaic Lab (Fig 2.6, 2.7, 2.9)'}
          </span>
        </div>

        <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-[11px] font-bold">
          <button
            onClick={() => setMode('osmosis')}
            className={`px-3 py-1 rounded-lg cursor-pointer transition-colors ${
              mode === 'osmosis' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            {lang === 'hi' ? 'परासरण सिम्युलेटर' : 'Osmosis Lab'}
          </button>
          <button
            onClick={() => setMode('bilayer')}
            className={`px-3 py-1 rounded-lg cursor-pointer transition-colors ${
              mode === 'bilayer' ? 'bg-teal-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            {lang === 'hi' ? 'तरल-मोजेक (7-10 nm)' : 'Fluid-Mosaic Bilayer'}
          </button>
        </div>
      </div>

      {mode === 'osmosis' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex gap-2">
              {['plant', 'animal'].map((k) => (
                <button
                  key={k}
                  onClick={() => setCellKind(k)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
                    cellKind === k
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {k === 'plant'
                    ? lang === 'hi'
                      ? '🌱 पादप कोशिका (भित्ति सहित)'
                      : '🌱 Plant Cell (Cell Wall)'
                    : lang === 'hi'
                    ? '🐾 जंतु कोशिका (बिना भित्ति)'
                    : '🐾 Animal Cell (No Wall)'}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {[
                { key: 'hypotonic', en: 'Hypotonic', hi: 'अल्पपरासारी' },
                { key: 'isotonic', en: 'Isotonic', hi: 'समपरासारी' },
                { key: 'hypertonic', en: 'Hypertonic', hi: 'अतिपरासारी' },
              ].map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => setTonicity(btn.key)}
                  className={`py-2 px-2 rounded-xl text-[11px] font-black border cursor-pointer transition-all ${
                    tonicity === btn.key
                      ? 'bg-teal-500 text-slate-950 border-teal-300 shadow-md shadow-teal-900/50'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {btn[lang]}
                </button>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="text-xs font-black" style={{ color: active.color }}>
                {active.title[lang]}
              </div>
              <div className="text-[11px] font-mono text-amber-300">{active.rule[lang]}</div>
              <p className="text-xs text-slate-200 leading-relaxed">{active.effect[cellKind][lang]}</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950/75 rounded-2xl border border-slate-800 p-3">
            <svg viewBox="0 0 380 210" className="w-full h-52 mx-auto">
              {/* External Beaker Fluid */}
              <rect x="20" y="15" width="340" height="180" rx="18" fill="#0B162D" stroke={active.color} strokeOpacity="0.4" strokeWidth="2" />
              <text x="34" y="34" fill="#94A3B8" fontSize="10" fontWeight="bold">
                {tonicity === 'hypertonic'
                  ? lang === 'hi'
                    ? 'उच्च विलेय (20% नमक/चीनी) • H₂O बाहर ->'
                    : 'High Solute Medium • Water Exits ->'
                  : tonicity === 'hypotonic'
                  ? lang === 'hi'
                    ? 'शुद्ध जल (तनु) • H₂O अंदर ->'
                    : 'Dilute Water Medium • Water Enters ->'
                  : lang === 'hi'
                  ? 'समान सांद्रता (↔ संतुलन)'
                  : 'Balanced Concentration (↔ Equilibrium)'}
              </text>

              {/* Water Flow Arrows */}
              {tonicity === 'hypotonic' && (
                <g className="animate-pulse" stroke="#34D399" strokeWidth="2.5">
                  <line x1="70" y1="108" x2="112" y2="108" />
                  <polygon points="116,108 108,103 108,113" fill="#34D399" />
                  <line x1="310" y1="108" x2="268" y2="108" />
                  <polygon points="264,108 272,103 272,113" fill="#34D399" />
                </g>
              )}
              {tonicity === 'hypertonic' && (
                <g className="animate-pulse" stroke="#FB7185" strokeWidth="2.5">
                  <line x1="126" y1="108" x2="72" y2="108" />
                  <polygon points="68,108 76,103 76,113" fill="#FB7185" />
                  <line x1="254" y1="108" x2="308" y2="108" />
                  <polygon points="312,108 304,103 304,113" fill="#FB7185" />
                </g>
              )}
              {tonicity === 'isotonic' && (
                <g stroke="#38BDF8" strokeWidth="2">
                  <text x="64" y="112" fill="#38BDF8" fontSize="13" fontWeight="bold">⇄</text>
                  <text x="296" y="112" fill="#38BDF8" fontSize="13" fontWeight="bold">⇄</text>
                </g>
              )}

              {/* Cell Render */}
              {cellKind === 'plant' ? (
                <g>
                  {/* Rigid Cellulose Cell Wall NEVER shrinks! */}
                  <polygon
                    points="126,56 254,56 266,108 254,160 126,160 114,108"
                    fill="#10B981"
                    fillOpacity="0.1"
                    stroke="#10B981"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                  {/* Inner Protoplast / Plasma Membrane scales dynamically! */}
                  <g
                    style={{
                      transform: `translate(190px, 108px) scale(${active.protoScale}) translate(-190px, -108px)`,
                      transition: 'transform 450ms ease',
                    }}
                  >
                    <polygon
                      points="132,62 248,62 258,108 248,154 132,154 122,108"
                      fill={active.color}
                      fillOpacity="0.28"
                      stroke="#F472B6"
                      strokeWidth="2.5"
                    />
                    <ellipse cx="195" cy="108" rx="34" ry="24" fill="#38BDF8" fillOpacity="0.35" stroke="#7DD3FC" strokeWidth="1.2" />
                    <circle cx="152" cy="88" r="12" fill="#A855F7" stroke="#E9D5FF" strokeWidth="1.5" />
                  </g>
                  <text x="190" y="182" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                    {tonicity === 'hypertonic'
                      ? lang === 'hi'
                        ? 'भित्ति स्थिर, अंदर का जीवद्रव्य सिकुड़ा (Plasmolysis)!'
                        : 'Cell Wall rigid, Protoplasm shrunk away!'
                      : lang === 'hi'
                      ? 'कोशिका भित्ति कोशिका को फटने नहीं देती'
                      : 'Rigid Cell Wall maintains polygonal boundary'}
                  </text>
                </g>
              ) : (
                <g
                  style={{
                    transform: `translate(190px, 108px) scale(${active.scale}) translate(-190px, -108px)`,
                    transition: 'transform 450ms ease',
                  }}
                >
                  <ellipse cx="190" cy="108" rx="58" ry="44" fill={active.color} fillOpacity="0.28" stroke={active.color} strokeWidth="3" />
                  <circle cx="190" cy="108" r="15" fill="#A855F7" stroke="#E9D5FF" strokeWidth="1.5" />
                </g>
              )}
            </svg>
          </div>
        </div>
      ) : (
        /* Tab 2: Fluid-Mosaic Lipid Bilayer Model (Fig 2.7) */
        <div className="bg-slate-950/75 rounded-2xl border border-slate-800 p-4 space-y-3">
          <svg viewBox="0 0 540 190" className="w-full h-48 mx-auto">
            <text x="270" y="18" textAnchor="middle" fill="#5EEAD4" fontSize="11" fontWeight="bold">
              {lang === 'hi'
                ? 'जल-आकर्षी शीर्ष बाहर | जल-प्रतिकर्षी पूँछें भीतर | मोटाई: 7–10 nm'
                : 'Hydrophilic Heads Outer | Hydrophobic Tails Inner | Thickness: 7–10 nm'}
            </text>
            {/* Phospholipid Bilayer array */}
            {Array.from({ length: 18 }).map((_, idx) => {
              const x = 35 + idx * 27;
              if (idx === 5 || idx === 6 || idx === 12 || idx === 13) return null;
              return (
                <g key={idx}>
                  <circle cx={x} cy="56" r="8" fill="#FBBF24" stroke="#FEF3C7" strokeWidth="1" />
                  <path d={`M ${x - 2} 64 Q ${x - 4} 78 ${x - 2} 89`} stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                  <path d={`M ${x + 2} 64 Q ${x + 4} 78 ${x + 2} 89`} stroke="#94A3B8" strokeWidth="1.5" fill="none" />

                  <circle cx={x} cy="134" r="8" fill="#FBBF24" stroke="#FEF3C7" strokeWidth="1" />
                  <path d={`M ${x - 2} 126 Q ${x - 4} 112 ${x - 2} 101`} stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                  <path d={`M ${x + 2} 126 Q ${x + 4} 112 ${x + 2} 101`} stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                </g>
              );
            })}
            {/* Embedded Gatekeeper Channel Proteins */}
            <rect x="160" y="42" width="46" height="106" rx="16" fill="#06B6D4" fillOpacity="0.38" stroke="#22D3EE" strokeWidth="2.5" />
            <circle cx="183" cy="95" r="5" fill="#34D399" className="animate-bounce" />
            <rect x="348" y="42" width="46" height="106" rx="16" fill="#A855F7" fillOpacity="0.38" stroke="#C084FC" strokeWidth="2.5" />
            <text x="183" y="172" textAnchor="middle" fill="#67E8F9" fontSize="10" fontWeight="bold">
              {lang === 'hi' ? 'प्रोटीन गेटकीपर (द्वारपाल)' : 'Transmembrane Protein Gatekeeper'}
            </text>
            <text x="371" y="172" textAnchor="middle" fill="#D8B4FE" fontSize="10" fontWeight="bold">
              {lang === 'hi' ? 'प्रोटीन मोजेक अणु' : 'Channel Protein'}
            </text>
          </svg>
        </div>
      )}
    </div>
  );
}

// ==================== 3. 3-WAY INTERACTIVE CELL EXPLORER (Fig 2.10-2.15 & 2.20) ====================
export function InteractiveCellExplorerSVG({ lang = 'hi' }) {
  const [cellType, setCellType] = useState('plant'); // 'plant' | 'animal' | 'bacteria'
  const [selectedOrg, setSelectedOrg] = useState('mitochondria');

  const organelleDb = {
    nucleus: {
      name: { en: 'Nucleus & Nucleolus (Chromatin/DNA)', hi: 'केंद्रक व केंद्रिका (क्रोमेटिन/DNA)' },
      mem: { en: 'Double Membrane + Pores', hi: 'दोहरी झिल्ली (केंद्रक छिद्र)' },
      ownDna: true,
      desc: {
        en: 'Command centre storing DNA genes on chromatin (condenses into rod-shaped chromosomes only during cell division). Nucleolus synthesizes ribosomal subunits. Absent in Mature RBCs (~120d life).',
        hi: 'कोशिका का नियंत्रण कक्ष। क्रोमेटिन विभाजन के समय गुणसूत्रों में संगठित होता है। केंद्रिका राइबोसोम की उपइकाइयाँ बनाती है। परिपक्व मानव RBC में केंद्रक नहीं होता!',
      },
    },
    mitochondria: {
      name: { en: 'Mitochondria (ATP Powerhouse)', hi: 'माइटोकॉन्ड्रिया / सूत्रकणिका (ऊर्जा केंद्र)' },
      mem: { en: 'Double Membrane (Folded Cristae)', hi: 'दोहरी झिल्ली (अंतःकटक/Cristae)' },
      ownDna: true,
      desc: {
        en: 'Smooth porous outer membrane + deeply folded inner cristae boosting surface area! Breaks glucose to synthesize ATP (energy currency). Has OWN DNA & Ribosomes.',
        hi: 'बाहरी झिल्ली चिकनी व छिद्रित, भीतरी झिल्ली अंतःकटक में मुड़ी हुई। ग्लूकोस तोड़कर ATP ऊर्जा बनाती है। अपना स्वयं का DNA व राइबोसोम मौजूद!',
      },
    },
    chloroplast: {
      name: { en: 'Chloroplast / Plastids (Plants Only)', hi: 'हरितलवक / लवक (केवल पादप कोशिका)' },
      mem: { en: 'Double Membrane (Stroma + Discs)', hi: 'दोहरी झिल्ली (पीठिका व चक्रिकाएँ)' },
      ownDna: true,
      desc: {
        en: 'Contains green Chlorophyll discs inside semi-fluid Stroma for photosynthesis & starch storage. Chromoplasts give flower/fruit colours; Leucoplasts store starch/oils in roots! Has OWN DNA & Ribosomes.',
        hi: 'पर्णहरित प्रकाश संश्लेषण व मंड संचय करता है। वर्णीलवक फूल/फल को रंग व अवर्णी लवक जड़ों (आलू/अरबी) में स्टार्च/तेल संचय करते हैं। अपना स्वयं का DNA!',
      },
    },
    er_golgi: {
      name: { en: 'Endoplasmic Reticulum & Golgi Apparatus', hi: 'अंतर्द्रव्यी जालिका (ER) व गॉल्जी उपकरण' },
      mem: { en: 'Single Membrane Network', hi: 'एकल झिल्ली प्रणाली' },
      ownDna: false,
      desc: {
        en: 'RER (ribosome-studded) builds Proteins; SER builds Lipids & Hormones (NO cellulose!). Golgi (1898, Camillo Golgi in Barn Owl nerves) acts as Post Office—modifies, packs vesicles & forms Lysosomes.',
        hi: 'RER प्रोटीन और SER वसा व हार्मोन बनाती है। गॉल्जी उपकरण (कैमिलो गॉल्जी, 1898, श्वेत उल्लू) पैकेजिंग डाकघर है व लाइसोसोम बनाता है।',
      },
    },
    lysosome: {
      name: { en: 'Lysosome (Clean-Up / Suicide Bag)', hi: 'लाइसोसोम / लयनकाय (निर्मलन प्रणाली)' },
      mem: { en: 'Single Membrane Enzyme Sac', hi: 'एकल झिल्ली एंजाइम थैली' },
      ownDna: false,
      desc: {
        en: 'Contains powerful digestive enzymes breaking down waste & damaged organelles. In human sperm, lysosomal enzymes dissolve egg coat for fertilisation. Can digest own cell if burst.',
        hi: 'अपशिष्ट व जीर्ण अंगों को पचाने वाले एंजाइम। शुक्राणु में अंडाणु की बाहरी परत घोलकर निषेचन कराते हैं; फटने पर कोशिका को स्वयं पचा सकते हैं (आत्महत्या की थैली)।',
      },
    },
    vacuole: {
      name: { en: 'Vacuole (Storage & Turgidity)', hi: 'रसधानी (भंडारण एवं दृढ़ता)' },
      mem: { en: 'Single Selectively Permeable', hi: 'एकल वरणात्मक पारगम्य झिल्ली' },
      ownDna: false,
      desc: {
        en: 'Filled with aqueous Cell Sap (water, minerals, sugars, wastes). ONE huge central vacuole maintains plant rigidity (loss causes wilting); tiny & temporary in animal cells.',
        hi: 'पादपों में विशाल केंद्रीय रसधानी कोशिका-रस से भरी होकर पौधे को दृढ़ रखती है (जल हानि = मुरझाना)। जंतु कोशिकाओं में बहुत छोटी होती है।',
      },
    },
    cellwall: {
      name: { en: 'Cell Wall (Cellulose Rigid Shield)', hi: 'कोशिका भित्ति (सेल्युलोस आवरण)' },
      mem: { en: 'Freely Permeable Outer Layer', hi: 'पूर्ण पारगम्य बाह्य परत' },
      ownDna: false,
      desc: {
        en: 'Present in Plants (Cellulose), Fungi (Chitin) & Bacteria — ABSENT in Animals (giving animals flexibility). Protects against osmotic bursting & weather.',
        hi: 'पादप (सेल्युलोस), कवक व जीवाणु में उपस्थित, जंतुओं में अनुपस्थित। जल व खनिजों के लिए पूर्ण पारगम्य।',
      },
    },
    nucleoid: {
      name: { en: 'Nucleoid + Flagellum (Prokaryote)', hi: 'केंद्रकाभ / आद्य केंद्रक (जीवाणु)' },
      mem: { en: 'NO Nuclear Membrane!', hi: 'केंद्रक झिल्ली अनुपस्थित!' },
      ownDna: true,
      desc: {
        en: 'Bacterial genetic material is a SINGLE circular DNA chromosome lying naked in Nucleoid region. No membrane-bound organelles! Size: 1–10 µm. Uses Flagellum for locomotion.',
        hi: 'जीवाणु में केवल 1 गोल गुणसूत्र झिल्ली-रहित केंद्रकाभ क्षेत्र में होता है। कोई झिल्ली-आबद्ध कोशिकांग नहीं! व्यास 1–10 µm; चलन हेतु कशाभिका।',
      },
    },
  };

  useEffect(() => {
    if (cellType === 'bacteria') setSelectedOrg('nucleoid');
    else if (cellType === 'animal' && (selectedOrg === 'chloroplast' || selectedOrg === 'cellwall' || selectedOrg === 'nucleoid')) {
      setSelectedOrg('mitochondria');
    } else if (cellType === 'plant' && selectedOrg === 'nucleoid') {
      setSelectedOrg('chloroplast');
    }
  }, [cellType]);

  const activeInfo = organelleDb[selectedOrg] || organelleDb.mitochondria;

  return (
    <div className="rounded-2xl border border-emerald-500/35 bg-[#080F1D] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-emerald-300 font-black text-xs sm:text-sm">
          <Layers className="w-4 h-4" />
          <span>
            {lang === 'hi'
              ? 'इंटरैक्टिव 3-इन-1 कोशिका संरचना एक्सप्लोरर (किसी भी भाग पर टैप करें)'
              : 'Interactive 3-in-1 Cell Explorer (Tap Any Organelle)'}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'plant', en: '🌱 Plant Cell', hi: '🌱 पादप कोशिका' },
            { id: 'animal', en: '🐾 Animal Cell', hi: '🐾 जंतु कोशिका' },
            { id: 'bacteria', en: '🦠 Bacteria (Prok.)', hi: '🦠 जीवाणु (पूर्वकेंद्रकी)' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setCellType(t.id)}
              className={`px-3 py-1 rounded-xl text-[11px] font-black cursor-pointer transition-all ${
                cellType === t.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-900/50'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-600'
              }`}
            >
              {t[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Interactive Vector SVG Canvas */}
        <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-3">
          {cellType === 'plant' && (
            <svg viewBox="0 0 380 260" className="w-full h-60 mx-auto">
              {/* Rigid Cell Wall */}
              <polygon
                points="48,26 332,26 358,130 332,234 48,234 22,130"
                fill="#064E3B"
                fillOpacity="0.25"
                stroke="#10B981"
                strokeWidth="7"
                className="cursor-pointer hover:brightness-125"
                onClick={() => setSelectedOrg('cellwall')}
              />
              {/* Plasma Membrane */}
              <polygon
                points="56,34 324,34 348,130 324,226 56,226 32,130"
                fill="#0F172A"
                stroke="#F59E0B"
                strokeWidth="2.5"
              />
              {/* Giant Central Vacuole */}
              <path
                d="M 185 52 Q 305 55 316 125 Q 312 204 205 206 Q 165 205 168 148 Q 165 82 185 52 Z"
                fill={selectedOrg === 'vacuole' ? '#0EA5E9' : '#0284C7'}
                fillOpacity={selectedOrg === 'vacuole' ? '0.45' : '0.25'}
                stroke="#38BDF8"
                strokeWidth="2.5"
                className="cursor-pointer"
                onClick={() => setSelectedOrg('vacuole')}
              />
              <text x="242" y="135" textAnchor="middle" fill="#BAE6FD" fontSize="10" fontWeight="bold" pointerEvents="none">
                {lang === 'hi' ? 'विशाल रसधानी' : 'Central Vacuole'}
              </text>

              {/* Nucleus */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('nucleus')}>
                <circle
                  cx="112"
                  cy="108"
                  r="34"
                  fill={selectedOrg === 'nucleus' ? '#A855F7' : '#7E22CE'}
                  fillOpacity="0.45"
                  stroke="#D8B4FE"
                  strokeWidth="2.5"
                />
                <circle cx="116" cy="105" r="11" fill="#F43F5E" />
                <text x="112" y="154" textAnchor="middle" fill="#E9D5FF" fontSize="9.5" fontWeight="bold">
                  {lang === 'hi' ? 'केंद्रक' : 'Nucleus'}
                </text>
              </g>

              {/* ER & Golgi Secretory Path */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('er_golgi')}>
                <path d="M 80 144 Q 108 175 144 162" fill="none" stroke="#FB923C" strokeWidth="4" strokeDasharray="3 2" />
                <path d="M 76 178 Q 106 188 134 176 M 78 188 Q 106 198 132 186" fill="none" stroke="#EC4899" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="144" cy="184" r="3" fill="#F472B6" className="animate-ping" />
                <text x="106" y="210" textAnchor="middle" fill="#F9A8D4" fontSize="9" fontWeight="bold">
                  {lang === 'hi' ? 'ER + गॉल्जीकाय' : 'ER + Golgi'}
                </text>
              </g>

              {/* Chloroplasts */}
              {[
                { cx: 76, cy: 60 },
                { cx: 300, cy: 192 },
              ].map((pos, i) => (
                <g key={i} className="cursor-pointer" onClick={() => setSelectedOrg('chloroplast')}>
                  <ellipse cx={pos.cx} cy={pos.cy} rx="22" ry="11" fill="#22C55E" fillOpacity="0.55" stroke="#86EFAC" strokeWidth="1.5" />
                  <circle cx={pos.cx - 7} cy={pos.cy} r="3" fill="#14532D" />
                  <circle cx={pos.cx} cy={pos.cy} r="3" fill="#14532D" />
                  <circle cx={pos.cx + 7} cy={pos.cy} r="3" fill="#14532D" />
                </g>
              ))}
              <text x="76" y="45" textAnchor="middle" fill="#86EFAC" fontSize="9" fontWeight="bold">
                {lang === 'hi' ? 'हरितलवक' : 'Chloroplast'}
              </text>

              {/* Mitochondria (Cristae) */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('mitochondria')}>
                <ellipse cx="152" cy="54" rx="22" ry="11" fill="#F97316" fillOpacity="0.55" stroke="#FDBA74" strokeWidth="1.5" />
                <path d="M 136 54 Q 144 48 148 54 T 160 54 T 168 54" fill="none" stroke="#FEF3C7" strokeWidth="1.5" />
                <circle cx="152" cy="54" r="3" fill="#FEF08A" className="animate-pulse" />
                <text x="152" y="75" textAnchor="middle" fill="#FED7AA" fontSize="9" fontWeight="bold">
                  {lang === 'hi' ? 'माइटोकॉन्ड्रिया' : 'Mitochondria'}
                </text>
              </g>
            </svg>
          )}

          {cellType === 'animal' && (
            <svg viewBox="0 0 380 260" className="w-full h-60 mx-auto">
              {/* Flexible Plasma Membrane (No Cell Wall) */}
              <path
                d="M 190 24 Q 320 26 336 125 Q 328 230 190 232 Q 52 228 48 128 Q 52 30 190 24 Z"
                fill="#4C0519"
                fillOpacity="0.22"
                stroke="#F43F5E"
                strokeWidth="3.5"
              />
              {/* Central Nucleus */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('nucleus')}>
                <circle cx="190" cy="122" r="38" fill="#9333EA" fillOpacity="0.45" stroke="#D8B4FE" strokeWidth="2.5" />
                <circle cx="194" cy="118" r="12" fill="#F43F5E" />
                <text x="190" y="172" textAnchor="middle" fill="#E9D5FF" fontSize="10" fontWeight="bold">
                  {lang === 'hi' ? 'केंद्रक (बीच में)' : 'Central Nucleus'}
                </text>
              </g>
              {/* ER + Golgi */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('er_golgi')}>
                <path d="M 140 100 Q 115 128 142 152" fill="none" stroke="#FB923C" strokeWidth="4" strokeDasharray="3 2" />
                <path d="M 92 120 Q 108 130 92 142 M 82 118 Q 98 130 82 144" fill="none" stroke="#EC4899" strokeWidth="3.5" strokeLinecap="round" />
                <text x="102" y="160" textAnchor="middle" fill="#F9A8D4" fontSize="9" fontWeight="bold">
                  ER + Golgi
                </text>
              </g>
              {/* Lysosome */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('lysosome')}>
                <circle cx="268" cy="88" r="14" fill="#EF4444" fillOpacity="0.55" stroke="#FCA5A5" strokeWidth="2" />
                <text x="268" y="114" textAnchor="middle" fill="#FCA5A5" fontSize="9" fontWeight="bold">
                  {lang === 'hi' ? 'लाइसोसोम' : 'Lysosome'}
                </text>
              </g>
              {/* Mitochondria */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('mitochondria')}>
                <ellipse cx="268" cy="164" rx="26" ry="13" fill="#F97316" fillOpacity="0.55" stroke="#FDBA74" strokeWidth="2" />
                <path d="M 248 164 Q 258 156 264 164 T 282 164" fill="none" stroke="#FEF3C7" strokeWidth="1.5" />
                <text x="268" y="189" textAnchor="middle" fill="#FED7AA" fontSize="9.5" fontWeight="bold">
                  {lang === 'hi' ? 'माइटोकॉन्ड्रिया (ATP)' : 'Mitochondria'}
                </text>
              </g>
              {/* Small Animal Vacuole */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('vacuole')}>
                <circle cx="132" cy="64" r="12" fill="#0EA5E9" fillOpacity="0.4" stroke="#7DD3FC" strokeWidth="1.5" />
                <text x="132" y="47" textAnchor="middle" fill="#BAE6FD" fontSize="8.5" fontWeight="bold">
                  {lang === 'hi' ? 'छोटी रसधानी' : 'Small Vacuole'}
                </text>
              </g>
            </svg>
          )}

          {cellType === 'bacteria' && (
            <svg viewBox="0 0 380 260" className="w-full h-60 mx-auto">
              {/* Whip-like Flagellum */}
              <path
                d="M 92 130 Q 60 95 40 130 T 12 132"
                fill="none"
                stroke="#34D399"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-pulse"
              />
              {/* Capsule / Cell Wall + Plasma Membrane */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('cellwall')}>
                <rect x="92" y="72" width="246" height="116" rx="58" fill="#064E3B" fillOpacity="0.3" stroke="#10B981" strokeWidth="6" />
                <rect x="102" y="82" width="226" height="96" rx="48" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
              </g>
              {/* Single Tangled Circular Nucleoid (NO nuclear membrane!) */}
              <g className="cursor-pointer" onClick={() => setSelectedOrg('nucleoid')}>
                <path
                  d="M 162 128 C 175 100, 210 155, 224 115 C 238 145, 260 110, 272 134 C 254 156, 200 112, 180 144 Z"
                  fill="none"
                  stroke="#E879F9"
                  strokeWidth="3.5"
                />
                <text x="215" y="164" textAnchor="middle" fill="#F0ABFC" fontSize="10" fontWeight="bold">
                  {lang === 'hi' ? 'केंद्रकाभ (1 गोल DNA • झिल्ली रहित!)' : 'Nucleoid (Single DNA • No Membrane!)'}
                </text>
              </g>
              {/* Floating Ribosomes */}
              {[130, 148, 286, 302, 240].map((rx, idx) => (
                <circle key={idx} cx={rx} cy={idx % 2 === 0 ? 105 : 146} r="3.5" fill="#FBBF24" />
              ))}
              <text x="215" y="210" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                {lang === 'hi' ? 'कोशिकांग अनुपस्थित • केवल 1–10 µm आमाप' : 'No Membrane-Bound Organelles • 1–10 µm Size'}
              </text>
            </svg>
          )}
        </div>

        {/* Live Organelle Inspector Drawer */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-emerald-500/40 space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {activeInfo.mem[lang]}
              </span>
              {activeInfo.ownDna && (
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {lang === 'hi' ? '🧬 स्वयं का DNA' : '🧬 Own DNA'}
                </span>
              )}
            </div>
            <h4 className="text-sm font-black text-white">{activeInfo.name[lang]}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{activeInfo.desc[lang]}</p>
          </div>

          {/* Quick Tap Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(organelleDb)
              .filter(([key]) => {
                if (cellType === 'bacteria') return key === 'nucleoid' || key === 'cellwall';
                if (cellType === 'animal') return key !== 'chloroplast' && key !== 'cellwall' && key !== 'nucleoid';
                return key !== 'nucleoid';
              })
              .map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setSelectedOrg(key)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer border transition-colors ${
                    selectedOrg === key
                      ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {item.name[lang].split('(')[0].trim()}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 4. MITOSIS VS MEIOSIS STEP ANIMATOR (Fig 2.18 & 2.19) ====================
export function MitosisMeiosisAnimatorSVG({ lang = 'hi' }) {
  const [step, setStep] = useState(0); // 0=Parent, 1=Division Stage 1, 2=Final Outcome
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2400);
    return () => clearInterval(t);
  }, [autoPlay]);

  const captions = [
    {
      en: 'Step 1: Parent Cell prepares & duplicates chromosomes (2n).',
      hi: 'चरण 1: जनक कोशिका (2n) विभाजन हेतु गुणसूत्रों की प्रतिलिपि तैयार करती है।',
    },
    {
      en: 'Step 2: Mitosis separates chromatids once -> Meiosis halves chromosome count in Division I!',
      hi: 'चरण 2: समसूत्री में 1 बार विभाजन -> अर्धसूत्री के प्रथम चरण में गुणसूत्र संख्या आधी हो जाती है!',
    },
    {
      en: 'Outcome: Mitosis = 2 Identical Somatic Cells (2n) | Meiosis = 4 Unique Haploid Gametes (n)!',
      hi: 'परिणाम: समसूत्री = 2 समान कोशिकाएँ (वृद्धि/मरम्मत) | अर्धसूत्री = 4 युग्मक आधे DNA के साथ (जनन/विविधता)!',
    },
  ];

  return (
    <div className="rounded-2xl border border-violet-500/35 bg-[#090D1F] p-4 sm:p-5 space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-violet-300 font-black text-xs sm:text-sm">
          <GitBranch className="w-4 h-4" />
          <span>
            {lang === 'hi'
              ? 'समसूत्री बनाम अर्धसूत्री विभाजन एनिमेशन (चित्र 2.18 एवं 2.19)'
              : 'Mitosis vs Meiosis Step Animator (Fig 2.18 & 2.19)'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setAutoPlay((v) => !v)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[11px] font-bold cursor-pointer"
          >
            {autoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{autoPlay ? (lang === 'hi' ? 'रोकें' : 'Pause') : lang === 'hi' ? 'चलाएं' : 'Play'}</span>
          </button>
          <button
            onClick={() => {
              setAutoPlay(false);
              setStep((s) => (s + 1) % 3);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-700 text-[11px] font-bold cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{lang === 'hi' ? 'अगला चरण' : 'Next Step'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* MITOSIS PANEL */}
        <div className="p-3 rounded-xl bg-slate-950/75 border border-slate-800">
          <div className="text-center text-xs font-black text-emerald-300 mb-2">
            {lang === 'hi' ? 'समसूत्री विभाजन (Mitosis • कायिक)' : 'Mitosis (2 Identical 2n Cells)'}
          </div>
          <svg viewBox="0 0 240 130" className="w-full h-32 mx-auto">
            {step === 0 && (
              <g>
                <circle cx="120" cy="60" r="30" fill="#10B981" fillOpacity="0.2" stroke="#34D399" strokeWidth="2.5" />
                <line x1="112" y1="45" x2="112" y2="75" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="128" y1="45" x2="128" y2="75" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
                <text x="120" y="112" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                  Parent (2n)
                </text>
              </g>
            )}
            {step === 1 && (
              <g>
                <ellipse cx="120" cy="60" rx="54" ry="26" fill="#10B981" fillOpacity="0.2" stroke="#34D399" strokeWidth="2.5" strokeDasharray="4 2" />
                <line x1="94" y1="48" x2="94" y2="72" stroke="#F43F5E" strokeWidth="3" />
                <line x1="104" y1="48" x2="104" y2="72" stroke="#38BDF8" strokeWidth="3" />
                <line x1="136" y1="48" x2="136" y2="72" stroke="#F43F5E" strokeWidth="3" />
                <line x1="146" y1="48" x2="146" y2="72" stroke="#38BDF8" strokeWidth="3" />
                <text x="120" y="112" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                  {lang === 'hi' ? '1 विभाजन प्रारंभ' : '1 Single Division'}
                </text>
              </g>
            )}
            {step === 2 && (
              <g>
                <circle cx="72" cy="60" r="26" fill="#10B981" fillOpacity="0.25" stroke="#34D399" strokeWidth="2.5" />
                <line x1="65" y1="48" x2="65" y2="72" stroke="#F43F5E" strokeWidth="3" />
                <line x1="79" y1="48" x2="79" y2="72" stroke="#38BDF8" strokeWidth="3" />
                <circle cx="168" cy="60" r="26" fill="#10B981" fillOpacity="0.25" stroke="#34D399" strokeWidth="2.5" />
                <line x1="161" y1="48" x2="161" y2="72" stroke="#F43F5E" strokeWidth="3" />
                <line x1="175" y1="48" x2="175" y2="72" stroke="#38BDF8" strokeWidth="3" />
                <text x="120" y="112" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                  2 × (2n) Identical!
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* MEIOSIS PANEL */}
        <div className="p-3 rounded-xl bg-slate-950/75 border border-slate-800">
          <div className="text-center text-xs font-black text-violet-300 mb-2">
            {lang === 'hi' ? 'अर्धसूत्री विभाजन (Meiosis • 4 युग्मक n)' : 'Meiosis (4 Haploid Gametes • Half DNA)'}
          </div>
          <svg viewBox="0 0 240 130" className="w-full h-32 mx-auto">
            {step === 0 && (
              <g>
                <circle cx="120" cy="60" r="30" fill="#8B5CF6" fillOpacity="0.22" stroke="#A78BFA" strokeWidth="2.5" />
                <line x1="112" y1="45" x2="112" y2="75" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="128" y1="45" x2="128" y2="75" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
                <text x="120" y="112" textAnchor="middle" fill="#DDD6FE" fontSize="10" fontWeight="bold">
                  Parent Gamete Mother (2n)
                </text>
              </g>
            )}
            {step === 1 && (
              <g>
                <circle cx="72" cy="60" r="24" fill="#8B5CF6" fillOpacity="0.24" stroke="#A78BFA" strokeWidth="2.5" />
                <line x1="72" y1="48" x2="72" y2="72" stroke="#F43F5E" strokeWidth="3" />
                <circle cx="168" cy="60" r="24" fill="#8B5CF6" fillOpacity="0.24" stroke="#A78BFA" strokeWidth="2.5" />
                <line x1="168" y1="48" x2="168" y2="72" stroke="#38BDF8" strokeWidth="3" />
                <text x="120" y="112" textAnchor="middle" fill="#DDD6FE" fontSize="10" fontWeight="bold">
                  {lang === 'hi' ? 'चरण I: गुणसूत्र आधे (n)!' : 'Division I: Chromosomes Halved (n)!'}
                </text>
              </g>
            )}
            {step === 2 && (
              <g>
                {[36, 92, 148, 204].map((cx, i) => (
                  <g key={i}>
                    <circle cx={cx} cy="56" r="20" fill="#8B5CF6" fillOpacity="0.28" stroke="#C4B5FD" strokeWidth="2" />
                    <line x1={cx} y1="46" x2={cx} y2="66" stroke={i < 2 ? '#F43F5E' : '#38BDF8'} strokeWidth="3" strokeLinecap="round" />
                  </g>
                ))}
                <text x="120" y="112" textAnchor="middle" fill="#DDD6FE" fontSize="10" fontWeight="bold">
                  4 Gametes (n) — Half Chromosomes & DNA
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-violet-950/35 border border-violet-500/30 text-xs text-violet-100 font-medium text-center">
        {captions[step][lang]}
      </div>
    </div>
  );
}

// ==================== 5. SHARED VECTOR ANATOMY & FLOW DIAGRAMS ====================
export function SectionFlowDiagramSVG({ flowKey, lang = 'hi' }) {
  const svgMarkup = renderNcertDiagramSvg(flowKey, { lang, theme: 'dark' });
  if (!svgMarkup) return null;

  return (
    <div
      className="rounded-2xl border border-slate-800 bg-[#070D1B] p-2.5 sm:p-3.5 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}
