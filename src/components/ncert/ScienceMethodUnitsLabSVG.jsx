import React, { useState } from 'react';

const DERIVED_UNITS = [
  { id: 'force', en: 'Force / Weight', hi: 'बल / भार', unit: 'N (Newton)', base: 'kg·m·s⁻²', pyq: 'Shift 9, 12, 38' },
  { id: 'work', en: 'Work / Energy (KE/PE)', hi: 'कार्य / ऊर्जा', unit: 'J (Joule) = N·m = W·s', base: 'kg·m²·s⁻²', pyq: 'Shift 13, 18, 44' },
  { id: 'pressure', en: 'Pressure (P = F/A)', hi: 'दाब (Pressure)', unit: 'Pa (Pascal) = N·m⁻²', base: 'kg·m⁻¹·s⁻²', pyq: 'Shift 6, 21' },
  { id: 'momentum', en: 'Momentum (p = m·v)', hi: 'संवेग (Momentum)', unit: 'kg·m·s⁻¹', base: 'kg·m·s⁻¹', pyq: 'Tech Shift 14' },
  { id: 'gravG', en: 'Universal Gravity G', hi: 'गुरुत्वाकर्षण G', unit: 'N·m²·kg⁻²', base: 'm³·kg⁻¹·s⁻²', pyq: 'Tech Shifts 13, 23' },
  { id: 'refIdx', en: 'Refractive Index n', hi: 'अपवर्तनांक (n)', unit: 'Unitless Ratio (c/v)', base: '1 (No Unit!)', pyq: 'Tech Shift 3' },
  { id: 'magB', en: 'Mag. Flux / Density', hi: 'चुंबकीय फ्लक्स / घनत्व', unit: 'Weber (Φ) / Tesla (B)', base: 'V·s / Wb·m⁻²', pyq: 'ALP CBT-2 Trade' },
];

export function ScienceMethodUnitsLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('si'); // 'si' | 'models' | 'estimate'

  // Tab 1: Kelvin, Aircraft Fuel Unit Mismatch & Derived Units
  const [tempC, setTempC] = useState(25);
  const [fuelUnit, setFuelUnit] = useState('kg'); // 'kg' vs 'lb'
  const [selectedDerived, setSelectedDerived] = useState('force');
  const tempK = tempC + 273;
  const activeUnit = DERIVED_UNITS.find((u) => u.id === selectedDerived) || DERIVED_UNITS[0];

  // Tab 2: Scientific Model Builder (Cricket Sixer Ex 1.1)
  const [keepMassSpeed, setKeepMassSpeed] = useState(true);
  const [keepAirSpin, setKeepAirSpin] = useState(false);
  const [keepNoise, setKeepNoise] = useState(false);

  // Tab 3: Ex 1.3 Breathing Estimator
  const [breathsPerMin, setBreathsPerMin] = useState(14);
  const [litresPerBreath, setLitresPerBreath] = useState(0.5);
  const totalBreathsDay = breathsPerMin * 1440;
  const totalAirDay = Math.round(totalBreathsDay * litresPerBreath);

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3.5 sm:p-4 text-slate-100 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
          {hi ? 'Pass Pro वैज्ञानिक मॉडल, SI मात्रक व सन्निकट अनुमान लैब (Ch 1)' : 'Pass Pro Scientific Method, SI Standards & Estimation Lab (Ch 1)'}
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs font-bold">
          {[
            { id: 'si', en: '1. SI & Fuel Trap', hi: '1. SI मात्रक व ईंधन जाल' },
            { id: 'models', en: '2. Model Builder', hi: '2. क्रि‍केट मॉडल (उदा. 1.1)' },
            { id: 'estimate', en: '3. Daily Air & Mask', hi: '3. श्वसन अनुमान व मास्क' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 transition ${
                tab === t.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {hi ? t.hi : t.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'si' && (
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div className="rounded-xl bg-slate-800/80 p-3 space-y-2 border border-slate-700">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'केल्विन ↔ सेल्सियस स्केल (K = °C + 273)' : 'Kelvin ↔ Celsius Converter (K = °C + 273)'}</span>
                <span className="text-amber-300">{tempC}°C = {tempK} K</span>
              </div>
              <input type="range" min="-20" max="100" step="1" value={tempC} onChange={(e) => setTempC(+e.target.value)} className="w-full accent-amber-400" />
              <div className="flex flex-wrap gap-1.5">
                {[0, 25, 37, 100].map((v) => (
                  <button key={v} type="button" onClick={() => setTempC(v)} className={`rounded px-2 py-0.5 font-bold ${tempC === v ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300'}`}>
                    {v}°C ({v + 273}K)
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-800/80 p-3 space-y-2 border border-slate-700">
              <div className="font-bold text-rose-300">{hi ? 'NCERT पृ. 3 केस: 22,300 kg विमान ईंधन गणना त्रुटि!' : 'NCERT p.3 Case Study: 22,300 kg Flight Fuel Error!'}</div>
              <div className="flex gap-2">
                <button type="button" onClick={() => setFuelUnit('kg')} className={`rounded-lg px-2.5 py-1 font-bold ${fuelUnit === 'kg' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-300'}`}>
                  {hi ? 'सही SI (kg/L)' : 'Standard SI (kg/L)'}
                </button>
                <button type="button" onClick={() => setFuelUnit('lb')} className={`rounded-lg px-2.5 py-1 font-bold ${fuelUnit === 'lb' ? 'bg-rose-500 text-white' : 'bg-slate-900 text-slate-300'}`}>
                  {hi ? 'गलत (lb/L पाउंड)' : 'Wrong Non-SI (lb/L)'}
                </button>
              </div>
              <div className={`rounded-lg p-2 font-semibold ${fuelUnit === 'kg' ? 'bg-emerald-950/70 text-emerald-200' : 'bg-rose-950/70 text-rose-200'}`}>
                {fuelUnit === 'kg'
                  ? (hi ? 'पूर्ण 22,300 kg सही ईंधन भरा गया — उड़ान 100% सुरक्षित!' : 'Full 22,300 kg fuel loaded accurately — Safe flight!')
                  : (hi ? '15,000 लीटर कम ईंधन भरा गया! मध्य उड़ान इंजन बंद व आपात ग्लाइड लैंडिंग!' : '15,000 L SHORT loaded! Mid-flight fuel exhaustion forced emergency glide landing!')}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-950 p-3 border border-slate-800 space-y-2">
            <div className="font-bold text-cyan-300">{hi ? 'RRB व्युत्पन्न SI मात्रक डिकोडर (किसी भी राशि पर टैप करें):' : 'RRB Derived SI Unit Decoder (Tap Any Quantity):'}</div>
            <div className="flex flex-wrap gap-1.5">
              {DERIVED_UNITS.map((u) => (
                <button key={u.id} type="button" onClick={() => setSelectedDerived(u.id)} className={`rounded-lg px-2 py-1 font-bold ${selectedDerived === u.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                  {hi ? u.hi : u.en}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-center font-bold">
              <div className="rounded-lg bg-slate-900 p-2"><div className="text-slate-400 text-[11px]">{hi ? 'SI मात्रक' : 'SI Unit'}</div><div className="text-amber-300">{activeUnit.unit}</div></div>
              <div className="rounded-lg bg-slate-900 p-2"><div className="text-slate-400 text-[11px]">{hi ? 'मूल SI रूप' : 'Base SI Breakdown'}</div><div className="text-emerald-300">{activeUnit.base}</div></div>
              <div className="rounded-lg bg-slate-900 p-2"><div className="text-slate-400 text-[11px]">{hi ? 'RRB PYQ प्रमाण' : 'RRB CBT Hits'}</div><div className="text-cyan-300">{activeUnit.pyq}</div></div>
            </div>
          </div>
        </div>
      )}

      {tab === 'models' && (
        <div className="space-y-3 text-xs">
          <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 space-y-2.5">
            <div className="font-extrabold text-amber-300">
              {hi ? 'उदाहरण 1.1: क्रिकेट छक्का मॉडल बिल्डर (क्या रखें व क्या उपेक्षित करें?)' : 'Example 1.1: Cricket Sixer Trajectory Model (What to Keep vs Ignore?)'}
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setKeepMassSpeed((v) => !v)} className={`rounded-lg px-2.5 py-1.5 font-bold border ${keepMassSpeed ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>
                {keepMassSpeed ? '✓ ' : '+ '}{hi ? 'द्रव्यमान, चाल व दिशा कोण' : 'Ball Mass, Speed & Angle'}
              </button>
              <button type="button" onClick={() => setKeepAirSpin((v) => !v)} className={`rounded-lg px-2.5 py-1.5 font-bold border ${keepAirSpin ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>
                {keepAirSpin ? '✓ ' : '+ '}{hi ? 'वायु प्रतिरोध व सीम घूर्णन' : 'Air Drag & Seam Spin'}
              </button>
              <button type="button" onClick={() => setKeepNoise((v) => !v)} className={`rounded-lg px-2.5 py-1.5 font-bold border ${keepNoise ? 'bg-rose-500/20 border-rose-400 text-rose-200' : 'bg-slate-900 border-slate-700 text-slate-400'}`}>
                {keepNoise ? '✓ ' : '+ '}{hi ? 'बल्ले का ब्रांड, रंग व घास' : 'Bat Brand, Colour & Grass'}
              </button>
            </div>
            <div className="rounded-lg bg-slate-900 p-2.5 font-semibold text-slate-200">
              {!keepMassSpeed
                ? (hi ? 'विफल मॉडल! द्रव्यमान, प्रहार वेग व दिशा के बिना सीमा पार होने का पूर्वानुमान असंभव है!' : 'Broken model! Without mass, launch speed & angle, you cannot predict boundary clearance!')
                : keepNoise
                ? (hi ? 'अनावश्यक जटिल! बल्ले का ब्रांड, गेंद का रंग और घास की ऊँचाई छक्के के पथ पर कोई विशेष प्रभाव नहीं डालते।' : 'Unnecessary noise! Bat brand, ball colour & grass have negligible effect on air trajectory!')
                : keepAirSpin
                ? (hi ? 'उच्च-सटीकता उन्नत मॉडल! पहले सरल मॉडल बनाकर बाद में सटीकता हेतु वायु प्रतिरोध व घूर्णन जोड़ते हैं।' : 'High-accuracy refined model! Scientists add small effects like drag/spin only after base model works.')
                : (hi ? 'आदर्श सरल NCERT मॉडल! मुख्य चरों (द्रव्यमान, गति, कोण) से स्पष्ट सटीक उत्तर मिलता है (त्रुटि नहीं, स्मार्ट सरलीकरण)!' : 'Ideal Simple NCERT Model! Focuses strictly on essential factors so the physics stays clear & solvable!')}
            </div>
          </div>
        </div>
      )}

      {tab === 'estimate' && (
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'प्रति मिनट श्वास संख्या (NCERT: 12–15)' : 'Breaths / min (NCERT: 12–15)'}</span>
                <span className="text-cyan-300">{breathsPerMin}/min</span>
              </div>
              <input type="range" min="10" max="22" step="1" value={breathsPerMin} onChange={(e) => setBreathsPerMin(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
            </label>
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'प्रति श्वास वायु आयतन (गुब्बारा: ~0.5 L)' : 'Air / Breath (Balloon: ~0.5 L)'}</span>
                <span className="text-emerald-300">{litresPerBreath.toFixed(2)} L</span>
              </div>
              <input type="range" min="0.3" max="0.8" step="0.05" value={litresPerBreath} onChange={(e) => setLitresPerBreath(+e.target.value)} className="mt-1 w-full accent-emerald-400" />
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center font-bold">
            <div className="rounded-lg bg-slate-950 border border-slate-800 p-2.5">
              <div className="text-slate-400 text-[11px]">{hi ? 'दैनिक श्वास (1440 min)' : 'Breaths / Day'}</div>
              <div className="text-cyan-300 text-sm">{totalBreathsDay.toLocaleString()}</div>
            </div>
            <div className="rounded-lg bg-slate-950 border border-slate-800 p-2.5">
              <div className="text-slate-400 text-[11px]">{hi ? 'कुल दैनिक वायु आयतन' : 'Air Breathed / Day'}</div>
              <div className="text-amber-300 text-sm">{totalAirDay.toLocaleString()} L</div>
            </div>
            <div className="rounded-lg bg-slate-950 border border-slate-800 p-2.5">
              <div className="text-slate-400 text-[11px]">{hi ? 'NCERT गुब्बारा जाँच' : 'Balloon Cross-Check'}</div>
              <div className="text-emerald-300 text-sm">~8,640 – 10,000 L</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
