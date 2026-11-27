import React, { useState } from 'react';

const SOUND_MEDIA = [
  { id: 'air0', en: 'Dry Air (0°C)', hi: 'शुष्क वायु (0°C)', v: 331 },
  { id: 'air22', en: 'Room Air (22°C)', hi: 'वायु (22°C)', v: 344 },
  { id: 'air15', en: 'Air (~15°C NCERT)', hi: 'वायु (~15°C मानक)', v: 340 },
  { id: 'water', en: 'Water / Sea (15°C)', hi: 'जल (15°C)', v: 1500 },
  { id: 'sea', en: 'Seawater SONAR', hi: 'समुद्री जल SONAR', v: 1530 },
  { id: 'steel', en: 'Solid Steel (15°C)', hi: 'ठोस स्टील (15°C)', v: 5000 },
];

export function SoundWavesSonarLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('wave'); // 'wave' | 'echo' | 'spectrum'

  // Tab 1: Wave Formula v = lambda * nu & Particle Compression Visual
  const [medId, setMedId] = useState('air22');
  const [freqHz, setFreqHz] = useState(344);
  const [ampUnits, setAmpUnits] = useState(28);
  const med = SOUND_MEDIA.find((m) => m.id === medId) || SOUND_MEDIA[1];
  const wavelengthM = med.v / freqHz;
  const periodS = 1 / freqHz;
  const wavesVisible = Math.max(1.5, Math.min(7, (freqHz / 344) * 3));

  // Tab 2: Echo / Reverberation / SONAR Solver
  const [echoMedId, setEchoMedId] = useState('air15');
  const [returnTimeS, setReturnTimeS] = useState(0.5);
  const echoMed = SOUND_MEDIA.find((m) => m.id === echoMedId) || SOUND_MEDIA[2];
  const roundTripM = echoMed.v * returnTimeS;
  const targetDistM = roundTripM / 2;
  const acousticZone =
    returnTimeS < 0.05
      ? 'reverb'
      : returnTimeS < 0.1
      ? 'blur'
      : 'echo';

  // Tab 3: Hearing Spectrum & Classification
  const [testFreq, setTestFreq] = useState(1000);
  const band = testFreq < 20 ? 'infra' : testFreq <= 20000 ? 'audible' : 'ultra';

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3.5 sm:p-4 text-slate-100 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
          {hi ? 'Pass Pro ध्वनि तरंग, प्रतिध्वनि व SONAR सिम्युलेटर (Ch 10)' : 'Pass Pro Sound Wave, Echo & SONAR Lab (Ch 10)'}
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs font-bold">
          {[
            { id: 'wave', en: '1. Wave v=λν & Pitch', hi: '1. तरंग v=λν व आयाम' },
            { id: 'echo', en: '2. Echo & SONAR Lab', hi: '2. प्रतिध्वनि व SONAR' },
            { id: 'spectrum', en: '3. Infra/Audible/Ultra', hi: '3. 20Hz–20kHz स्पेक्ट्रम' },
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

      {tab === 'wave' && (
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <span className="font-bold text-slate-300">{hi ? 'माध्यम (चाल तय करे!)' : 'Medium (Sets Speed v)'}</span>
              <select value={medId} onChange={(e) => setMedId(e.target.value)} className="mt-1 w-full rounded bg-slate-900 p-1.5 font-bold text-cyan-300 border border-slate-700">
                {SOUND_MEDIA.map((m) => <option key={m.id} value={m.id}>{hi ? m.hi : m.en} ({m.v} m/s)</option>)}
              </select>
            </label>
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'आवृत्ति ν (तारत्व)' : 'Frequency ν (Pitch)'}</span>
                <span className="text-amber-300">{freqHz} Hz</span>
              </div>
              <input type="range" min="100" max="1000" step="20" value={freqHz} onChange={(e) => setFreqHz(+e.target.value)} className="mt-2 w-full accent-amber-400" />
            </label>
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'आयाम A (प्रबलता)' : 'Amplitude A (Loudness)'}</span>
                <span className="text-rose-300">{ampUnits} u</span>
              </div>
              <input type="range" min="10" max="42" step="2" value={ampUnits} onChange={(e) => setAmpUnits(+e.target.value)} className="mt-2 w-full accent-rose-400" />
            </label>
          </div>

          <svg viewBox="0 0 460 125" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <line x1="16" y1="62" x2="444" y2="62" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" />
            <path
              d={Array.from({ length: 121 }, (_, idx) => {
                const x = 16 + (idx / 120) * 428;
                const y = 62 - ampUnits * Math.sin((idx / 120) * wavesVisible * 2 * Math.PI);
                return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
              }).join(' ')}
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2.6"
            />
            <text x="16" y="18" fontSize="9.5" fontWeight="800" fill="#fbbf24">v = {med.v} m/s ({hi ? 'माध्यम पर निर्भर' : 'Depends on Medium'})</text>
            <text x="444" y="18" textAnchor="end" fontSize="9.5" fontWeight="800" fill="#38bdf8">λ = v/ν = {wavelengthM >= 1 ? `${wavelengthM.toFixed(2)} m` : `${(wavelengthM * 100).toFixed(1)} cm`}</text>
            <text x="230" y="116" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#cbd5e1">
              {hi ? `आवर्तकाल T = 1/ν = ${(periodS * 1000).toFixed(2)} ms • आवृत्ति बढ़ने से λ घटता है!` : `Period T = ${(periodS * 1000).toFixed(2)} ms • Higher ν shrinks λ cleanly!`}
            </text>
          </svg>
        </div>
      )}

      {tab === 'echo' && (
        <div className="space-y-3 text-xs">
          <div className="flex flex-wrap gap-1.5 font-bold">
            <button type="button" onClick={() => { setEchoMedId('air15'); setReturnTimeS(0.03); }} className="rounded-lg bg-slate-800 px-2.5 py-1 hover:bg-slate-700 text-rose-300">
              {hi ? 'अनुरणन (<0.05s)' : 'Reverb (<0.05s)'}
            </button>
            <button type="button" onClick={() => { setEchoMedId('air15'); setReturnTimeS(0.1); }} className="rounded-lg bg-slate-800 px-2.5 py-1 hover:bg-slate-700 text-amber-300">
              {hi ? 'न्यूनतम Echo (0.1s→17m)' : 'Min Echo (0.1s→17m)'}
            </button>
            <button type="button" onClick={() => { setEchoMedId('air15'); setReturnTimeS(0.5); }} className="rounded-lg bg-slate-800 px-2.5 py-1 hover:bg-slate-700 text-cyan-300">
              {hi ? 'उदा. 10.5 (0.5s→85m)' : 'Ex 10.5 (0.5s→85m)'}
            </button>
            <button type="button" onClick={() => { setEchoMedId('sea'); setReturnTimeS(0.9); }} className="rounded-lg bg-slate-800 px-2.5 py-1 hover:bg-slate-700 text-emerald-300">
              {hi ? 'SONAR 10.6 (0.9s→688.5m)' : 'SONAR Ex 10.6 (688.5m)'}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <span className="font-bold text-slate-300">{hi ? 'माध्यम चाल चुनें' : 'Select Medium'}</span>
              <select value={echoMedId} onChange={(e) => setEchoMedId(e.target.value)} className="mt-1 w-full rounded bg-slate-900 p-1.5 font-bold text-cyan-300 border border-slate-700">
                {SOUND_MEDIA.map((m) => <option key={m.id} value={m.id}>{hi ? m.hi : m.en} ({m.v} m/s)</option>)}
              </select>
            </label>
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'कुल गूंज वापसी समय t' : 'Round-Trip Time t'}</span>
                <span className="text-amber-300">{returnTimeS.toFixed(2)} s</span>
              </div>
              <input type="range" min="0.02" max="5.0" step="0.02" value={returnTimeS} onChange={(e) => setReturnTimeS(+e.target.value)} className="mt-2 w-full accent-amber-400" />
            </label>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center font-bold">
            <div className="rounded-lg bg-slate-950 border border-slate-800 p-2">
              <div className="text-[11px] text-slate-400">{hi ? 'कुल पथ (2d = v·t)' : 'Total Path (2d)'}</div>
              <div className="text-cyan-300 text-sm">{roundTripM.toFixed(1)} m</div>
            </div>
            <div className="rounded-lg bg-slate-950 border border-slate-800 p-2">
              <div className="text-[11px] text-slate-400">{hi ? 'सतह दूरी d = v·t/2' : 'One-Way Depth d'}</div>
              <div className="text-amber-300 text-sm">{targetDistM.toFixed(1)} m</div>
            </div>
            <div className={`rounded-lg border p-2 ${acousticZone === 'reverb' ? 'bg-rose-950/60 border-rose-500 text-rose-200' : acousticZone === 'blur' ? 'bg-amber-950/60 border-amber-500 text-amber-200' : 'bg-emerald-950/60 border-emerald-500 text-emerald-200'}`}>
              <div className="text-[11px] opacity-80">{hi ? 'परिणाम' : 'Result'}</div>
              <div className="text-sm">{acousticZone === 'reverb' ? (hi ? 'अनुरणन!' : 'Reverberation!') : acousticZone === 'blur' ? (hi ? 'अस्पष्ट मिश्रण' : 'Merged Delay') : (hi ? 'स्पष्ट प्रतिध्वनि!' : 'Distinct Echo!')}</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'spectrum' && (
        <div className="space-y-3 text-xs">
          <div className="flex flex-wrap gap-1.5 font-bold">
            {[
              { f: 12, label: hi ? '12 Hz (अवश्रव्य / हाथी)' : '12 Hz (Infrasonic)' },
              { f: 18, label: hi ? '18 Hz (ALP 18Hz PYQ)' : '18 Hz (ALP PYQ)' },
              { f: 440, label: hi ? '440 Hz (सा-रे-गा)' : '440 Hz (Music)' },
              { f: 20000, label: hi ? '20 kHz (ऊपरी सीमा)' : '20 kHz (Upper Limit)' },
              { f: 40000, label: hi ? '40 kHz (पार्किंग/चमगादड़)' : '40 kHz (Bats / Sensor)' },
            ].map((p) => (
              <button key={p.f} type="button" onClick={() => setTestFreq(p.f)} className={`rounded-lg px-2.5 py-1 ${testFreq === p.f ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                {p.label}
              </button>
            ))}
          </div>
          <div className={`rounded-xl p-3 border ${band === 'infra' ? 'bg-violet-950/60 border-violet-500' : band === 'audible' ? 'bg-emerald-950/60 border-emerald-500' : 'bg-cyan-950/60 border-cyan-500'}`}>
            <div className="font-extrabold text-sm">
              {band === 'infra'
                ? (hi ? `${testFreq} Hz → अवश्रव्य तरंगें (Infrasonic < 20 Hz)` : `${testFreq} Hz → Infrasonic Wave (< 20 Hz)`)
                : band === 'audible'
                ? (hi ? `${testFreq.toLocaleString()} Hz → मानव श्रव्य परास (20 Hz – 20 kHz)` : `${testFreq.toLocaleString()} Hz → Audible Spectrum (20 Hz – 20 kHz)`)
                : (hi ? `${(testFreq / 1000).toFixed(0)} kHz → पराश्रव्य तरंगें (Ultrasonic > 20 kHz)` : `${(testFreq / 1000).toFixed(0)} kHz → Ultrasonic Wave (> 20 kHz)`)}
            </div>
            <div className="text-slate-200 mt-1">
              {band === 'infra'
                ? (hi ? 'मनुष्य नहीं सुन सकते! हाथी सुनते हैं; भूकंप, ज्वालामुखी व तीव्र तूफान चेतावनी में प्रयुक्त।' : 'Inaudible to humans! Elephants hear them; helps track earthquakes, volcanoes & storms.')
                : band === 'audible'
                ? (hi ? `वायु (344 m/s) में इसकी तरंगदैर्घ्य λ = ${(344 / testFreq).toFixed(3)} m है। मानव कान व संगीत वाद्ययंत्र इसी परिसर में काम करते हैं।` : `Wavelength in room air (344 m/s): ${(344 / testFreq).toFixed(3)} m — clearly heard by healthy human ears.`)
                : (hi ? 'चमगादड़, डॉल्फिन, कुत्ते सुनते हैं! अल्ट्रासोनोग्राफी, गुर्दे की पथरी तोड़ने, धातु दरार जाँच, सफाई व SONAR में उपयोगी!' : 'Heard by Bats, Dogs & Dolphins! Powers Ultrasonography, kidney stone breaking, metal flaw tests & SONAR.')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
