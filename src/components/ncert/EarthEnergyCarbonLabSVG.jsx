import React, { useState } from 'react';

const ALBEDO_SURFACES = [
  { id: 'snow', label: { en: 'Fresh Snow', hi: 'ताज़ा हिम (Snow)' }, albedo: '0.80 – 0.90', tempEffect: { en: 'Reflects 80–90% sunlight → Poles stay frigid!', hi: '80–90% प्रकाश परावर्तित → ध्रुव अत्यंत ठंडे!' } },
  { id: 'ice', label: { en: 'Glacial Ice', hi: 'हिमनद बर्फ (Ice)' }, albedo: '0.50 – 0.70', tempEffect: { en: 'Reflects >50%; melting exposes dark ground (warming loop)', hi: '50–70% परावर्तन; पिघलने पर तापन चक्र तेज!' } },
  { id: 'rocks', label: { en: 'Crushed Rocks', hi: 'संदलित चट्टानें' }, albedo: '0.25 – 0.30', tempEffect: { en: 'Absorbs ~70% solar radiation', hi: 'लगभग 70% विकिरण अवशोषित करती हैं' } },
  { id: 'lightsoil', label: { en: 'Light Soil', hi: 'हल्के रंग की मृदा' }, albedo: '0.25 – 0.45', tempEffect: { en: 'Cooler than black soil (`white clothes effect in summer`)', hi: 'काली मृदा से अधिक ठंडी (`गर्मियों में श्वेत वस्त्र समान`)' } },
  { id: 'blacksoil', label: { en: 'Black Soil / Asphalt', hi: 'काली मृदा / डामर' }, albedo: '0.08 – 0.15', tempEffect: { en: 'Absorbs ~88% heat → drives Urban Heat Islands!', hi: '85–92% ऊष्मा सोखती है → शहरी ऊष्मा द्वीप बनाती है!' } },
  { id: 'ocean', label: { en: 'Ocean Water', hi: 'महासागरीय जल' }, albedo: '0.06 – 0.10', tempEffect: { en: 'Lowest albedo (>90% absorbed); distributes heat via gyres!', hi: 'न्यूनतम एल्बिडो (90%+ अवशोषण); महासागरीय धाराओं से ऊष्मा प्रवाह!' } },
];

const WINDS_SPHERES = [
  { id: 'valley', label: { en: 'Day: Valley Breeze ↑', hi: 'दिन: घाटी समीर ↑' }, detail: { en: 'Sunlit mountain slopes heat FASTER than deep valley floor -> warm slope air rises (Low P) -> cool valley air flows UPSLOPE (`Shimla / Dehradun`).', hi: 'पहाड़ की ढलान घाटी तल से जल्दी गर्म होती है → ढलान वायु ऊपर उठती है → घाटी की शीतल वायु ऊपर ढलान की ओर बहती है!' } },
  { id: 'mountain', label: { en: 'Night: Mountain Breeze ↓', hi: 'रात: पर्वत समीर ↓' }, detail: { en: 'After sunset slopes lose heat FAST -> cold dense slope air sinks DOWN into warmer valley floor, stabilizing crop moisture (`Group D 2025 Shift 20`)!', hi: 'सूर्यास्त बाद ढलान तेजी से ठंडी होती है → भारी ठंडी हवा नीचे घाटी में उतरती है (`Group D Shift 20`) व फसलों हेतु नमी संतुलित करती है!' } },
  { id: 'belts', label: { en: 'Planetary Belts & Deflection', hi: 'ग्रहीय पवन व घूर्णन विक्षेप' }, detail: { en: '0° Equator Low -> 30° Subtropical High -> 60° Subpolar Low -> 90° Polar High. Earth rotation curves winds RIGHT in N. Hemisphere & LEFT in S. Hemisphere!', hi: '0° निम्न, 30° उच्च, 60° निम्न, 90° उच्च दाब पट्टियाँ! पृथ्वी घूर्णन से पवनें उत्तरी गोलार्ध में दाईं ओर व दक्षिणी गोलार्ध में बाईं ओर विक्षेपित होती हैं!' } },
  { id: 'gyres', label: { en: 'Ocean Gyres & Gulf Stream', hi: 'महासागरीय भंवर व गल्फ स्ट्रीम' }, detail: { en: 'Low salinity stays near surface; dense salty water sinks! Wind drag + continents form circular GYRES (CW North, CCW South). Gulf Stream / N. Atlantic Drift keeps NW European ports ICE-FREE!', hi: 'कम लवणता जल ऊपर, सघन लवण जल नीचे जाता है; भंवर उत्तरी गोलार्ध में घड़ी की दिशा में चलते हैं। गल्फ स्ट्रीम / उत्तरी अटलांटिक प्रवाह यूरोप के बंदरगाहों को बर्फ-मुक्त रखता है!' } },
];

const CYCLES_IMPACTS = [
  { id: 'carbon', label: { en: 'Carbon Cycle & Keeling', hi: 'कार्बन चक्र व कीलिंग (315→420 ppm)' }, detail: { en: '71% of global C is dissolved in OCEANS, ~1% in Atmosphere, and ~49% dry weight of living tissue is C! Fossil burning & deforestation lifted atm CO₂ ~35% from 315 ppm (1960) to 420 ppm (2025) — sawtooth dips happen in northern summer growth!', hi: 'कुल कार्बन का 71% महासागरों में, मात्र ~1% वायुमंडल में, तथा सजीवों के शुष्क भार का 49% कार्बन है! 1960 (315 ppm) से 2025 (420 ppm) तक 35% वृद्धि व आरीनुमा गिरावट गर्मियों में पौधों के CO₂ शोषण से होती है!' } },
  { id: 'nitrogen', label: { en: '5 Nitrogen Steps & Haber-Bosch', hi: 'नाइट्रोजन चक्र के 5 चरण व हाबर-बॉश' }, detail: { en: '1) Fixation (`Rhizobium, Azotobacter, Lightning`) → NH₃; 2) Nitrification (`Nitrosomonas` → NO₂⁻; `Nitrobacter` → NO₃⁻); 3) Assimilation; 4) Ammonification; 5) Denitrification (`Pseudomonas` → N₂). Haber-Bosch uses ~1–2% world energy (`>50%` human body N!).', hi: '1) स्थिरीकरण (`राइजोबियम, एजोटोबैक्टर, तड़ित`); 2) नाइट्रीकरण (`नाइट्रोसोमोनास → NO₂⁻`, `नाइट्रोबैक्टर → NO₃⁻`); 3) स्वांगीकरण; 4) अमोनीकरण; 5) विनाइट्रीकरण (`स्यूडोमोनास → N₂`)! हाबर-बॉश ऊर्जा का 1–2% खपत करता है!' } },
  { id: 'eutro', label: { en: 'Eutrophication & Acid Oceans', hi: 'सुपोषण, अम्लीय समुद्र व मिशन LiFE' }, detail: { en: 'Fertiliser nitrates wash into lakes → explosive Algal Bloom (`Fig 13.17`) → dissolved O₂ depletion → Fish kill (`Eutrophication`)! Montreal Protocol phased out CFCs (`stratospheric O₃ healing`) unlike toxic ground-level traffic ozone. Mission LiFE (2021) champions sustainable living!', hi: 'उर्वरक नाइट्रेट बहने से शैवाल प्रस्फुटन व ऑक्सीजन घटने से मछलियाँ मरती हैं (**सुपोषण**)! अधिक CO₂ समुद्र को अम्लीय बना प्रवाल भित्ति को हानि पहुँचाती है। मॉन्ट्रियल प्रोटोकॉल ने CFC रोक ओजोन बचाई; **मिशन LiFE (2021)** भारत की सतत पहल है!' } },
];

export default function EarthEnergyCarbonLabSVG({ lang = 'hi' }) {
  const hi = lang === 'hi';
  const [tab, setTab] = useState('albedo');
  const [albId, setAlbId] = useState('snow');
  const [wId, setWId] = useState('valley');
  const [cId, setCId] = useState('carbon');

  const aCur = ALBEDO_SURFACES.find((x) => x.id === albId) || ALBEDO_SURFACES[0];
  const wCur = WINDS_SPHERES.find((x) => x.id === wId) || WINDS_SPHERES[0];
  const cCur = CYCLES_IMPACTS.find((x) => x.id === cId) || CYCLES_IMPACTS[0];

  return (
    <div className="my-5 rounded-2xl border border-slate-700/70 bg-slate-900/90 p-4 text-slate-100 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm font-extrabold text-cyan-300">
          {hi ? '🌍 इंटरैक्टिव 3-इन-1 पृथ्वी तंत्र प्रयोगशाला: एल्बिडो-सौर ऊर्जा, पवन-धाराएँ व जैव-भूरासायनिक चक्र' : '🌍 Interactive 3-in-1 Earth System Lab: Albedo/Insolation, Winds/Gyres & C/N Cycles'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'albedo', en: 'Albedo & Layers', hi: 'एल्बिडो व परतें' },
            { id: 'winds', en: 'Winds & Gyres', hi: 'समीर व भंवर' },
            { id: 'cycles', en: 'C/N Cycles & LiFE', hi: 'C/N चक्र व सुपोषण' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                tab === t.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {hi ? t.hi : t.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'albedo' && (
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {ALBEDO_SURFACES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setAlbId(s.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  albId === s.id ? 'border-amber-400 bg-amber-500/20 text-amber-200' : 'border-slate-700 bg-slate-800/70 text-slate-300'
                }`}
              >
                {hi ? s.label.hi : s.label.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/75 p-3.5 text-xs leading-relaxed">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'एल्बिडो (Albedo परावर्तन): ' : 'Surface Albedo (Reflected): '}</span>
                <span className="font-extrabold text-cyan-300">{aCur.albedo}</span>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'सौर स्थिरांक / सतह ऊष्मण: ' : 'Insolation (Ex 13.1): '}</span>
                <span className="font-bold text-amber-300">1.4 kWm⁻² → ~1 kWm⁻² (3.6×10⁶ J/h)</span>
              </div>
            </div>
            <p className="mt-2.5 text-slate-200">{hi ? aCur.tempEffect.hi : aCur.tempEffect.en}</p>
          </div>
        </div>
      )}

      {tab === 'winds' && (
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {WINDS_SPHERES.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setWId(w.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  wId === w.id ? 'border-teal-400 bg-teal-500/20 text-teal-200' : 'border-slate-700 bg-slate-800/70 text-slate-300'
                }`}
              >
                {hi ? w.label.hi : w.label.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/75 p-3.5 text-xs leading-relaxed text-slate-200">
            <div className="mb-1 font-extrabold text-teal-300">{hi ? wCur.label.hi : wCur.label.en}</div>
            <p>{hi ? wCur.detail.hi : wCur.detail.en}</p>
          </div>
        </div>
      )}

      {tab === 'cycles' && (
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {CYCLES_IMPACTS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCId(c.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  cId === c.id ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200' : 'border-slate-700 bg-slate-800/70 text-slate-300'
                }`}
              >
                {hi ? c.label.hi : c.label.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/75 p-3.5 text-xs leading-relaxed text-slate-200">
            <div className="mb-1 font-extrabold text-emerald-300">{hi ? cCur.label.hi : cCur.label.en}</div>
            <p>{hi ? cCur.detail.hi : cCur.detail.en}</p>
          </div>
        </div>
      )}
    </div>
  );
}
