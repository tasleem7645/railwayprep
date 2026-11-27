import React, { useState } from 'react';

const PH_SAMPLES = [
  { ph: 1.2, en: 'Gastric Juice (HCl)', hi: 'जठर रस (HCl)', color: '#dc2626', typeEn: 'Strong Acid', typeHi: 'प्रबल अम्ल', descEn: 'Stomach HCl digesting food without harming lining.', descHi: 'आमाशय में पाचन हेतु उत्पन्न अम्ल (अपच पर जलन -> मिल्क ऑफ मैग्नीशिया Antacid)!' },
  { ph: 2.2, en: 'Lemon Juice', hi: 'नींबू का रस', color: '#ea580c', typeEn: 'Acidic (Citric)', typeHi: 'अम्लीय (सिट्रिक अम्ल)', descEn: 'Turns blue litmus RED; excess in tooth enamel drops below 5.5.', descHi: 'नीले लिटमस को लाल करता है (सिट्रिक अम्ल)!' },
  { ph: 5.5, en: 'Tooth Decay Threshold', hi: 'दंत-क्षय सीमा (pH < 5.5)', color: '#eab308', typeEn: 'Mouth Danger Acid', typeHi: 'दाँत क्षय सीमा', descEn: 'Bacteria ferment mouth sugar into acid corroding hard calcium hydroxyapatite!', descHi: 'pH 5.5 से नीचे आने पर शरीर का सबसे कठोर कैल्शियम हाइड्रोक्सीएपेटाइट संक्षारित होने लगता है!' },
  { ph: 7.0, en: 'Pure Distilled Water', hi: 'शुद्ध आसवित जल', color: '#16a34a', typeEn: 'Neutral ([H⁺] = [OH⁻])', typeHi: 'उदासीन (Neutral)', descEn: 'No ion excess -> ZERO electricity conduction (Ex Q7)!', descHi: 'उदासीन विलयन; मुक्त आयन न होने से विद्युत का कुचालक (अभ्यास 7)!' },
  { ph: 7.4, en: 'Human Blood / Body (7.0–7.8)', hi: 'मानव रक्त / शरीर परास', color: '#0d9488', typeEn: 'Slightly Alkaline', typeHi: 'हल्का क्षारीय', descEn: 'Living cells survive strictly within 7.0–7.8 window.', descHi: 'हमारा शरीर केवल `7.0–7.8` संकीर्ण pH परास में कार्य करता है!' },
  { ph: 10.0, en: 'Milk of Magnesia [Mg(OH)₂]', hi: 'मिल्क ऑफ मैग्नीशिया [Mg(OH)₂]', color: '#0284c7', typeEn: 'Mild Antacid Base', typeHi: 'दुर्बल क्षारक (एंटैसिड)', descEn: 'Turns red litmus BLUE; safely neutralizes stomach hyperacidity.', descHi: 'लाल लिटमस को नीला; अपच में आधिक्य पेट अम्ल को सुरक्षित रूप से उदासीन करता है!' },
  { ph: 14.0, en: '1M NaOH Solution', hi: '1M सोडियम हाइड्रॉक्साइड', color: '#7c3aed', typeEn: 'Strong Alkali', typeHi: 'प्रबल क्षार', descEn: 'Turns phenolphthalein BRIGHT PINK; methyl orange YELLOW!', descHi: 'फिनॉल्फथेलिन को तुरंत गुलाबी व मेथिल ऑरेंज को पीला करता है (`NaOH`)!' },
];

export function AcidsBasesPhLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('ph');
  const [phVal, setPhVal] = useState(7.4);
  const [hydratedBlue, setHydratedBlue] = useState(true);
  const [gypsumHeated, setGypsumHeated] = useState(false);

  const sample = PH_SAMPLES.reduce((prev, curr) =>
    Math.abs(curr.ph - phVal) < Math.abs(prev.ph - phVal) ? curr : prev
  );

  const litmusColor = phVal < 7 ? (hi ? 'नीला → लाल (RED)' : 'Blue → RED') : phVal > 7 ? (hi ? 'लाल → नीला (BLUE)' : 'Red → BLUE') : (hi ? 'कोई बदलाव नहीं (बैंगनी)' : 'No Change (Purple)');
  const phenolColor = phVal >= 8.2 ? (hi ? 'गुलाबी (PINK ✓)' : 'Bright PINK ✓') : (hi ? 'रंगहीन (Colourless)' : 'Colourless');
  const methylColor = phVal <= 3.5 ? (hi ? 'लाल (RED)' : 'RED') : phVal >= 4.5 ? (hi ? 'पीला / संतरा (YELLOW)' : 'YELLOW / Orange') : 'Red-Orange';

  return (
    <div className="my-5 rounded-2xl border border-rose-500/30 bg-slate-900/80 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[11px] font-bold text-rose-300">
            {hi ? 'इंटरैक्टिव अम्ल-क्षार-लवण प्रयोगशाला (NCERT 2.1–2.4)' : 'Interactive pH Indicators, Chlor-Alkali & Crystal Salt Lab'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'लाइव pH स्केल + सूचक रंग परीक्षक, क्लोर-क्षार सेल & क्रिस्टलन जल भट्टी' : 'Live pH Indicator Matrix, Chlor-Alkali Plant & Hydrate Furnace'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'ph', label: hi ? 'pH स्केल व सूचक (0–14)' : 'pH & Indicators (0–14)' },
            { id: 'chlor', label: hi ? 'क्लोर-क्षार प्लांट' : 'Chlor-Alkali Cell' },
            { id: 'hydrate', label: hi ? 'क्रिस्टल जल (CuSO₄ / POP)' : 'CuSO₄·5H₂O & POP (373K)' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'ph' && (
        <div className="space-y-3 text-xs text-slate-200">
          <div className="rounded-xl bg-slate-950/90 p-3 border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-extrabold text-sm" style={{ color: sample.color }}>
                pH = {phVal.toFixed(1)} • {hi ? sample.hi : sample.en} ({hi ? sample.typeHi : sample.typeEn})
              </span>
              <span className="text-[11px] text-slate-400">
                {phVal < 7 ? (hi ? '[H⁺] > [OH⁻]' : '[H⁺] > [OH⁻]') : phVal > 7 ? (hi ? '[OH⁻] > [H⁺]' : '[OH⁻] > [H⁺]') : '[H⁺] = [OH⁻]'}
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="14.0"
              step="0.2"
              value={phVal}
              onChange={(e) => setPhVal(Number(e.target.value))}
              className="w-full accent-rose-400"
            />
            <div className="mt-2 flex flex-wrap gap-1">
              {PH_SAMPLES.map((s) => (
                <button
                  key={s.ph}
                  type="button"
                  onClick={() => setPhVal(s.ph)}
                  className="rounded px-2 py-0.5 text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200"
                  style={{ borderBottom: `2px solid ${s.color}` }}
                >
                  {s.ph} ({hi ? s.hi.split(' ')[0] : s.en.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-slate-950 p-2.5 border border-slate-800">
              <div className="text-[11px] text-slate-400">{hi ? 'लिटमस (Litmus)' : 'Litmus Paper'}</div>
              <div className="font-extrabold text-cyan-300 mt-0.5">{litmusColor}</div>
            </div>
            <div className="rounded-xl bg-slate-950 p-2.5 border border-slate-800">
              <div className="text-[11px] text-slate-400">{hi ? 'फिनॉल्फथेलिन (Phenolphthalein)' : 'Phenolphthalein'}</div>
              <div className="font-extrabold text-pink-300 mt-0.5">{phenolColor}</div>
            </div>
            <div className="rounded-xl bg-slate-950 p-2.5 border border-slate-800">
              <div className="text-[11px] text-slate-400">{hi ? 'मेथिल ऑरेंज (Methyl Orange)' : 'Methyl Orange'}</div>
              <div className="font-extrabold text-amber-300 mt-0.5">{methylColor}</div>
            </div>
          </div>
          <p className="text-xs text-slate-300">{hi ? sample.descHi : sample.descEn}</p>
        </div>
      )}

      {tab === 'chlor' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3">
            <div className="font-extrabold text-emerald-300">{hi ? 'एनोड (+) → क्लोरीन (Cl₂)' : 'ANODE (+) → Chlorine (Cl₂)'}</div>
            <p className="mt-1 text-slate-300">{hi ? 'जल शोधन, स्विमिंग पूल, PVC, कीटनाशक एवं सूखे Ca(OH)₂ से विरंजक चूर्ण Ca(ClO)₂ बनाना!' : 'Water treatment, PVC, pesticides, and + Dry Ca(OH)₂ -> Bleaching Powder!'}</p>
          </div>
          <div className="rounded-xl border border-rose-500/40 bg-rose-950/30 p-3">
            <div className="font-extrabold text-rose-300">{hi ? 'कैथोड (−) → हाइड्रोजन (H₂)' : 'CATHODE (−) → Hydrogen (H₂)'}</div>
            <p className="mt-1 text-slate-300">{hi ? 'स्वच्छ ईंधन, मार्गरीन निर्माण व खाद हेतु अमोनिया (NH₃) बनाना!' : 'Fuels, margarine hydrogenation & Ammonia (NH₃) fertilizers!'}</p>
          </div>
          <div className="rounded-xl border border-purple-500/40 bg-purple-950/30 p-3">
            <div className="font-extrabold text-purple-300">{hi ? 'कैथोड के पास → NaOH विलयन' : 'NEAR CATHODE → NaOH (Alkali)'}</div>
            <p className="mt-1 text-slate-300">{hi ? 'धातु ग्रीज हटाना, साबुन व डिटर्जेंट, कागज उद्योग एवं कृत्रिम फाइबर।' : 'De-greasing metals, soaps, detergents, paper & synthetic fibres.'}</p>
          </div>
        </div>
      )}

      {tab === 'hydrate' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-slate-950 p-3 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-sky-300">CuSO₄ · 5H₂O (Activity 2.15)</span>
              <button
                type="button"
                onClick={() => setHydratedBlue((v) => !v)}
                className="rounded-lg bg-sky-500 px-2.5 py-1 text-[11px] font-extrabold text-slate-950"
              >
                {hydratedBlue ? (hi ? 'गर्म करें (बर्नर)' : 'Heat Salt') : (hi ? '2–3 बूँद जल डालें' : 'Add Water Drops')}
              </button>
            </div>
            <div className={`rounded-lg p-2.5 text-center font-extrabold ${hydratedBlue ? 'bg-blue-600/30 text-blue-200 border border-blue-400/50' : 'bg-slate-200 text-slate-900'}`}>
              {hydratedBlue
                ? hi ? 'नीला क्रिस्टल: CuSO₄·5H₂O (क्रिस्टलन के 5 जल अणु!)' : 'BLUE Crystals: CuSO₄·5H₂O (5 Water of Crystallization!)'
                : hi ? 'श्‍वेत निर्जल चूर्ण: CuSO₄ (परखनली में जल की बूँदें!)' : 'WHITE Anhydrous Powder: CuSO₄ (5H₂O Driven Off!)'}
            </div>
          </div>

          <div className="rounded-xl bg-slate-950 p-3 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-amber-300">Gypsum ↔ POP (373 K)</span>
              <button
                type="button"
                onClick={() => setGypsumHeated((v) => !v)}
                className="rounded-lg bg-amber-500 px-2.5 py-1 text-[11px] font-extrabold text-slate-950"
              >
                {gypsumHeated ? (hi ? '+ 1½ H₂O मिलाएं (प्लास्टर)' : 'Mix + 1½ H₂O') : (hi ? '373 K पर गर्म करें' : 'Heat @ 373 K')}
              </button>
            </div>
            <div className="rounded-lg p-2.5 text-center font-extrabold bg-purple-900/40 border border-purple-400/40 text-purple-100">
              {gypsumHeated
                ? hi ? 'प्लास्टर ऑफ पेरिस (POP): CaSO₄ · ½H₂O (श्‍वेत चूर्ण)' : 'Plaster of Paris: CaSO₄ · ½H₂O (White Setting Powder)'
                : hi ? 'कठोर ठोस जिप्सम: CaSO₄ · 2H₂O (टूटी हड्डी प्लास्टर)' : 'Hard Solid Gypsum: CaSO₄ · 2H₂O (Locked Cast!)'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
