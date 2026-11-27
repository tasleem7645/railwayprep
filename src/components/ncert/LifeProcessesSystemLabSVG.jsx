import React, { useState } from 'react';

const STOMATA_STATES = {
  open: {
    labelEn: 'Water Enters Guard Cells (Turgid -> Open)',
    labelHi: 'जल प्रवेश → द्वार कोशिका फूली (रंध्र खुला)',
    descEn: 'Sunlight stimulates guard cells to draw in water osmotically -> cells swell and curve outward -> stomatal pore OPENS for CO₂ intake & transpiration.',
    descHi: 'जल अंदर आने से द्वार कोशिकाएँ फूल जाती हैं जिससे रंध्र छिद्र खुल जाता है — दिन में प्रकाश संश्लेषण हेतु CO₂ विनिमय व वाष्पोत्सर्जन होता है (Tech 2024 Shift 11)।',
  },
  closed: {
    labelEn: 'Water Exits Guard Cells (Flaccid -> Closed)',
    labelHi: 'जल हानि → द्वार कोशिका सिकुड़ी (रंध्र बंद)',
    descEn: 'When photosynthesis stops (or water is scarce), guard cells lose water -> shrink together -> stomatal pore CLOSES to prevent excessive water loss!',
    descHi: 'जब CO₂ आवश्यक न हो या जल कम हो तो द्वार कोशिकाएँ सिकुड़कर रंध्र बंद कर देती हैं ताकि अतिरिक्त जल हानि रुक सके।',
  },
};

const HEART_ROUTES = [
  { id: 'pulm', titleEn: 'Right Heart -> Lungs (Deoxygenated)', titleHi: 'दायाँ हृदय → फेफड़े (विऑक्सीजनित)', pathEn: 'Body -> Vena Cava -> Right Atrium -> Right Ventricle -> PULMONARY ARTERY -> Lungs (CO₂ out, O₂ in)', pathHi: 'शरीर (महाशिरा) → दायाँ अलिंद → दायाँ निलय → फुफ्फुसीय धमनी → फेफड़े (O₂ मिलती है)' },
  { id: 'syst', titleEn: 'Lungs -> Left Heart -> Body (Oxygenated)', titleHi: 'फेफड़े → बायाँ हृदय → शरीर (ऑक्सीजनित)', pathEn: 'Lungs -> PULMONARY VEIN -> Left Atrium -> Left Ventricle (thickest muscle wall!) -> AORTA -> Whole Body', pathHi: 'फेफड़े → फुफ्फुसीय शिरा → बायाँ अलिंद → बायाँ निलय (सर्वाधिक मोटी पेशी!) → महाधमनी → संपूर्ण शरीर' },
  { id: 'vert', titleEn: '2 vs 3 vs 4 Chambers (Cold vs Warm Blooded)', titleHi: '2 बनाम 3 बनाम 4 कोष्ठ (मछली/मेंढक/मानव)', pathEn: 'Fish: 2 chambers (Single circulation via gills) | Amphibians/Most Reptiles: 3 chambers (partial mixing okay) | Birds & Mammals: 4 chambers (strict separation keeps high energy for warm body temp!).', pathHi: 'मछली: 2 कोष्ठ (एकल चक्र) | उभयचर/सरीसृप: 3 कोष्ठ (आंशिक मिश्रण सह्य) | पक्षी व स्तनधारी: 4 कोष्ठ (स्थिर ताप हेतु उच्च O₂ दक्षता!)' },
];

export function LifeProcessesSystemLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('stoma');
  const [stomaOpen, setStomaOpen] = useState(true);
  const [glucosePath, setGlucosePath] = useState('mito');
  const [heartId, setHeartId] = useState('pulm');
  const [reabsorbPct, setReabsorbPct] = useState(99);

  const st = stomaOpen ? STOMATA_STATES.open : STOMATA_STATES.closed;
  const hr = HEART_ROUTES.find((h) => h.id === heartId) || HEART_ROUTES[0];
  const urineOut = +(180 * (1 - reabsorbPct / 100)).toFixed(1);

  return (
    <div className="my-5 rounded-2xl border border-emerald-500/30 bg-slate-900/85 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
            {hi ? 'इंटरैक्टिव जैव प्रक्रम लैब — रंध्र, ग्लूकोज़ पथ, दोहरा परिसंचरण व नेफ्रॉन' : 'Interactive Life Processes Lab — Stomata, Respiration, Heart & Nephron'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'रंध्र पंप, ग्लूकोज़ विखंडन (चित्र 5.8), हृदय परिपथ एवं नेफ्रॉन 180 L पुनरवशोषण' : 'Guard Cell Switch, Pyruvate 3-Path Simulator, Double Circulation & 180L Filtrate'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'stoma', label: hi ? 'रंध्र व श्वसन पथ' : 'Stomata & ATP' },
            { id: 'heart', label: hi ? 'दोहरा परिसंचरण' : 'Heart Loop' },
            { id: 'nephron', label: hi ? 'नेफ्रॉन 180L' : 'Nephron 180L' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'stoma' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-950/80 p-3 border border-emerald-500/30">
            <div className="text-xs max-w-xl">
              <div className="font-extrabold text-emerald-300">{hi ? st.labelHi : st.labelEn}</div>
              <div className="mt-1 text-slate-200">{hi ? st.descHi : st.descEn}</div>
            </div>
            <button
              type="button"
              onClick={() => setStomaOpen(!stomaOpen)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold ${stomaOpen ? 'bg-amber-400 text-slate-950' : 'bg-emerald-400 text-slate-950'}`}
            >
              {stomaOpen ? (hi ? 'जल निकालें (बंद करें)' : 'Remove Water (Close)') : (hi ? 'जल भरें (खोलें)' : 'Pump Water (Open)')}
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'yeast', lEn: 'No O₂ (Yeast)', lHi: 'अनुपस्थिति (यीस्ट)' },
              { id: 'muscle', lEn: 'Lack O₂ (Muscle)', lHi: 'अभाव (पेशी क्रैम्प)' },
              { id: 'mito', lEn: 'O₂ Present (Mitochondria)', lHi: 'उपस्थिति (माइटोकॉन्ड्रिया)' },
            ].map((g) => (
              <button key={g.id} type="button" onClick={() => setGlucosePath(g.id)} className={`rounded-lg px-2.5 py-1 text-xs font-bold ${glucosePath === g.id ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                {hi ? g.lHi : g.lEn}
              </button>
            ))}
          </div>
          <div className="rounded-xl bg-slate-950/75 p-2.5 text-xs border border-amber-500/30 text-amber-200">
            {glucosePath === 'yeast' && (hi ? 'ग्लूकोज़ (6C) → पायरूवेट (3C) → इथेनॉल (2C) + CO₂ + कम ऊर्जा (किण्वन — क्र. 5.5)' : 'Glucose (6C) -> Pyruvate (3C, Cytoplasm) -> Ethanol (2C) + CO₂ + low Energy (Yeast Fermentation)')}
            {glucosePath === 'muscle' && (hi ? 'ग्लूकोज़ → पायरूवेट → लैक्टिक अम्ल (3C) + ऊर्जा (अचानक दौड़ने पर मांसपेशियों में ऐंठन/क्रैम्प!)' : 'Glucose -> Pyruvate -> Lactic Acid (3C) + Energy — sudden exercise causes muscle cramps!')}
            {glucosePath === 'mito' && (hi ? 'ग्लूकोज़ → पायरूवेट → CO₂ + H₂O + अधिकतम ATP (30.5 kJ/mol प्रति अंतस्थ फॉस्फेट बंध!)' : 'Glucose -> Pyruvate -> CO₂ + H₂O + MAX ATP inside Mitochondria (NCERT Ex Q4)!')}
          </div>
        </div>
      )}

      {tab === 'heart' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {HEART_ROUTES.map((h) => (
              <button key={h.id} type="button" onClick={() => setHeartId(h.id)} className={`rounded-lg px-2.5 py-1 text-xs font-bold ${heartId === h.id ? 'bg-rose-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                {hi ? h.titleHi : h.titleEn}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-slate-950/80 p-3 text-xs leading-relaxed text-slate-200">
            {hi ? hr.pathHi : hr.pathEn}
          </div>
        </div>
      )}

      {tab === 'nephron' && (
        <div className="space-y-3">
          <label className="block rounded-xl bg-slate-800/70 p-2.5 text-xs">
            <div className="flex justify-between font-bold text-slate-200">
              <span>{hi ? 'वृक्क नलिकाओं द्वारा चयनात्मक पुनरवशोषण % (सामान्य ~99%)' : 'Tubular Selective Reabsorption % of 180 L/day Filtrate'}</span>
              <span className="text-sky-300">{reabsorbPct}%</span>
            </div>
            <input type="range" min="90" max="99.5" step="0.5" value={reabsorbPct} onChange={(e) => setReabsorbPct(+e.target.value)} className="mt-1 w-full accent-sky-400" />
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-sky-950/60 border border-sky-500/40 p-2 text-sky-200">{hi ? 'प्रारंभिक निस्यंद: 180 L/दिन' : 'Initial Filtrate: 180 L/day'}</div>
            <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-2 text-emerald-200">{hi ? `पुनः अवशोषित: ${(180 - urineOut).toFixed(1)} L` : `Reabsorbed: ${(180 - urineOut).toFixed(1)} L`}</div>
            <div className="rounded-lg bg-amber-950/60 border border-amber-500/40 p-2 text-amber-200">{hi ? `दैनिक मूत्र उत्सर्जन: ${urineOut} L` : `Excreted Urine: ${urineOut} L/day`}</div>
          </div>
        </div>
      )}
    </div>
  );
}
