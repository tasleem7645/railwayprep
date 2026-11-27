import React, { useState } from 'react';

const REMOVALS = [
  {
    id: 'snakes',
    en: 'Remove All Snakes (T3) — RRB Group D PYQ',
    hi: 'सभी साँपों (T3) को हटा दें (Group D PYQ)',
    effectEn: 'Immediate surge in Frogs / Rats (less predation) -> Frogs eat up Insects/Grasshoppers rapidly, while Top Eagles/Hawks starve due to losing snake prey!',
    effectHi: 'मेंढकों व चूहों की संख्या तुरंत बेकाबू बढ़ेगी (भक्षण न होने से), जबकि साँप खाने वाले शीर्ष बाज/गरुड़ भूख से घटेंगे (Group D 2025 Shift 45 PYQ)!',
  },
  {
    id: 'producers',
    en: 'Remove T1 Plants / Producers',
    hi: 'सभी उत्पादक पौधे (T1) हटा दें',
    effectEn: 'ZERO solar energy enters the food chain -> Herbivores (T2) starve first, collapsing EVERY upper carnivore level (`Ex Q4`)!',
    effectHi: 'पारिस्थितिकी तंत्र में सौर ऊर्जा प्रवेश शून्य! पहले शाकाहारी (T2) और फिर संपूर्ण आहार शृंखला धराशायी हो जाएगी (`Ex Q4`)!',
  },
  {
    id: 'decomposers',
    en: 'Remove Bacteria & Fungi Decomposers',
    hi: 'सभी अपघटक (जीवाणु व कवक) हटा दें',
    effectEn: 'Dead animals & fallen leaves pile up without rotting (`p.231 Act 13.1`); NO simple inorganic minerals return to soil -> plants starve!',
    effectHi: 'मृत जंतुओं-पौधों का अपमार्जन रुक जाएगा व मृदा में प्राकृतिक खनिजों की पुनःपूर्ति बंद होने से पौधे मुरझा जाएँगे (`पृ. 231`)!',
  },
];

const WASTE_ITEMS = [
  { nameEn: 'Fruit/Veg Peels, Leaves, Cotton, Leather, Paper, Wood', nameHi: 'फल/सब्जी छिलके, पत्तियाँ, सूती, चमड़ा, कागज, लकड़ी', bio: true },
  { nameEn: 'Plastic Bags, Bubble Pack, Milk Pouches, Medicine Bottles, DDT', nameHi: 'प्लास्टिक थैली, बबल पैक, दूध पैकेट, प्लास्टिक बोतलें, DDT', bio: false },
];

export function EcosystemEnergyOzoneLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('energy'); // 'energy' | 'web' | 'ozone'
  const [sunJ, setSunJ] = useState(100000);
  const [remId, setRemId] = useState('snakes');
  const [cfcOn, setCfcOn] = useState(false);

  const t1 = Math.round(sunJ * 0.01); // 1% solar capture!
  const t2 = Math.round(t1 * 0.1);
  const t3 = Math.round(t2 * 0.1);
  const t4 = +(t3 * 0.1).toFixed(1);
  const rem = REMOVALS.find((r) => r.id === remId) || REMOVALS[0];

  return (
    <div className="my-5 rounded-2xl border border-emerald-500/30 bg-slate-900/85 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
            {hi ? 'इंटरैक्टिव पारितंत्र ऊर्जा (1%/10%), आहार जाल व ओजोन लैब (NCERT 13.1–13.2)' : 'Interactive 1%/10% Energy Law, Food Web & Ozone UV Shield Lab (NCERT 13.1–13.2)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? '10% ऊर्जा पिरामिड, पोषी स्तर विलोपन व ओजोन/कचरा सिम्युलेटर' : 'Trophic Energy Simulator, Food-Web Removal & Stratospheric Ozone Shield'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'energy', label: hi ? '1% व 10% नियम' : '1% & 10% Law' },
            { id: 'web', label: hi ? 'पोषी स्तर प्रभाव' : 'Removal Test' },
            { id: 'ozone', label: hi ? 'ओजोन व कचरा' : 'Ozone & Waste' },
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

      {tab === 'energy' && (
        <div className="space-y-3">
          <label className="block rounded-xl bg-slate-800/70 p-2.5 text-xs">
            <div className="flex justify-between font-bold text-slate-200">
              <span>{hi ? 'पादपों पर आपतित सूर्य का प्रकाश (ऊर्जा Joules में)' : 'Incoming Solar Energy on Leaves (J)'}</span>
              <span className="text-amber-300">{sunJ.toLocaleString()} J</span>
            </div>
            <input type="range" min="10000" max="1000000" step="10000" value={sunJ} onChange={(e) => setSunJ(+e.target.value)} className="mt-1 w-full accent-amber-400" />
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-2">
              <div className="text-emerald-300">{hi ? 'T1 उत्पादक (सूर्य का 1%)' : 'T1 Producers (1% Sun)'}</div>
              <div className="text-sm text-white">{t1.toLocaleString()} J</div>
              <div className="text-[10px] text-rose-300">DDT: 0.02 ppm</div>
            </div>
            <div className="rounded-lg bg-sky-950/60 border border-sky-500/40 p-2">
              <div className="text-sky-300">{hi ? 'T2 शाकाहारी (T1 का 10%)' : 'T2 Herbivore (10%)'}</div>
              <div className="text-sm text-white">{t2.toLocaleString()} J</div>
              <div className="text-[10px] text-amber-300">DDT: ~0.2 ppm ↑</div>
            </div>
            <div className="rounded-lg bg-purple-950/60 border border-purple-500/40 p-2">
              <div className="text-purple-300">{hi ? 'T3 छोटे मांसाहारी (10%)' : 'T3 Carnivore (10%)'}</div>
              <div className="text-sm text-white">{t3.toLocaleString()} J</div>
              <div className="text-[10px] text-orange-300">DDT: ~2.0 ppm ↑↑</div>
            </div>
            <div className="rounded-lg bg-rose-950/60 border border-rose-500/40 p-2">
              <div className="text-rose-300">{hi ? 'T4 शीर्ष उपभोक्ता (10%)' : 'T4 Top Lion/Hawk'}</div>
              <div className="text-sm text-white">{t4.toLocaleString()} J</div>
              <div className="text-[10px] text-rose-400">{hi ? 'अधिकतम संचय! ↑↑↑' : 'MAX Biomagnified! ↑↑↑'}</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'web' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {REMOVALS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRemId(r.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                  remId === r.id ? 'bg-rose-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {hi ? r.hi : r.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-slate-950/75 p-3 text-xs leading-relaxed text-slate-200">
            {hi ? rem.effectHi : rem.effectEn}
          </div>
        </div>
      )}

      {tab === 'ozone' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-950/80 p-3 border border-cyan-500/30">
            <div className="text-xs">
              <div className="font-extrabold text-cyan-300">
                {cfcOn ? (hi ? '⚠️ CFC क्षरण सक्रिय — समतापमंडल ओजोन (O₃) पतली!' : '⚠️ CFCs Active — Ozone Layer Depleted!') : (hi ? '🛡️ स्वच्छ समतापमंडल O₃ (1987 UNEP CFC फ्रीज़)' : '🛡️ Intact O₃ Shield (1987 UNEP Protocol)')}
              </div>
              <div className="mt-1 text-slate-300">
                {cfcOn ? (hi ? 'हानिकारक UV किरणें पृथ्वी पर पहुँचकर मानव में त्वचा कैंसर बढ़ाती हैं!' : 'Harmful Solar UV penetrates stratosphere -> increases human Skin Cancer!') : (hi ? 'O₂ + UV → O + O → O₃: सूर्य की खतरनाक UV किरणें ऊपर ही अवशोषित!' : 'O₂ + UV → O + O → O₃ absorbs harmful Solar UV radiation aloft!')}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCfcOn(!cfcOn)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold ${cfcOn ? 'bg-rose-500 text-white' : 'bg-cyan-400 text-slate-950'}`}
            >
              {cfcOn ? (hi ? 'CFC हटाएँ (O₃ बचाएँ)' : 'Ban CFCs (Restore O₃)') : (hi ? 'CFC उत्सर्जन जोड़ें' : 'Add Refrigerator CFCs')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {WASTE_ITEMS.map((w, idx) => (
              <div key={idx} className={`rounded-xl p-2.5 border ${w.bio ? 'bg-emerald-950/40 border-emerald-500/30' : 'bg-rose-950/40 border-rose-500/30'}`}>
                <div className={`font-extrabold ${w.bio ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {w.bio ? (hi ? '✅ जैव-निम्नीकरणीय (एंजाइम से अपघटित)' : '✅ Biodegradable (Specific Enzymes)') : (hi ? '❌ अजैव-निम्नीकरणीय (सदियों तक अक्रिय)' : '❌ Non-Biodegradable (Inert Pollution)')}
                </div>
                <div className="mt-1 text-slate-200">{hi ? w.nameHi : w.nameEn}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
