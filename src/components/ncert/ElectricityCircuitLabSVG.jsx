import React, { useState } from 'react';

const MATERIALS = [
  { id: 'cu', en: 'Copper (ρ = 1.62×10⁻⁸ Ω·m)', hi: 'ताँबा (ρ = 1.62×10⁻⁸ Ω·m)', rho: 1.62e-8, color: '#f59e0b' },
  { id: 'w', en: 'Tungsten (ρ = 5.20×10⁻⁸ Ω·m)', hi: 'टंगस्टन (ρ = 5.20×10⁻⁸ Ω·m)', rho: 5.20e-8, color: '#eab308' },
  { id: 'nichrome', en: 'Nichrome Alloy (ρ = 100×10⁻⁶ Ω·m)', hi: 'निक्रोम मिश्रातु (ρ = 100×10⁻⁶ Ω·m)', rho: 1e-4, color: '#fb7185' },
];

export function ElectricityCircuitLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('ohm'); // 'ohm' | 'combo' | 'kwh'

  // Tab 1: Ohm's Law & Resistivity (Scaled educational R)
  const [voltage, setVoltage] = useState(6);
  const [matId, setMatId] = useState('cu');
  const [lenFactor, setLenFactor] = useState(1); // 1 or 2
  const [areaFactor, setAreaFactor] = useState(1); // 0.5, 1, 2
  const [stretchDouble, setStretchDouble] = useState(false);

  const mat = MATERIALS.find((m) => m.id === matId) || MATERIALS[0];
  const baseR = matId === 'cu' ? 4 : matId === 'w' ? 8 : 20;
  const effL = stretchDouble ? 2 : lenFactor;
  const effA = stretchDouble ? 0.5 : areaFactor;
  const effR = +(baseR * (effL / effA)).toFixed(2);
  const ohmCurrent = +(voltage / effR).toFixed(2);

  // Tab 2: Series vs Parallel & Fault
  const [circuitMode, setCircuitMode] = useState('parallel'); // 'series' | 'parallel'
  const [r2Broken, setR2Broken] = useState(false);
  const R1 = 4;
  const R2 = 6;
  const R3 = 12;
  const supplyV = 12;

  let req = 0;
  let totalI = 0;
  let i1 = 0;
  let i2 = 0;
  let i3 = 0;
  if (circuitMode === 'series') {
    if (r2Broken) {
      req = Infinity;
      totalI = 0;
    } else {
      req = R1 + R2 + R3; // 22 Ohm
      totalI = +(supplyV / req).toFixed(2);
      i1 = i2 = i3 = totalI;
    }
  } else {
    i1 = +(supplyV / R1).toFixed(2);
    i2 = r2Broken ? 0 : +(supplyV / R2).toFixed(2);
    i3 = +(supplyV / R3).toFixed(2);
    totalI = +(i1 + i2 + i3).toFixed(2);
    req = +(supplyV / totalI).toFixed(2);
  }

  // Tab 3: Joule Heating & kWh Bill + 220->110V Drop
  const [powerW, setPowerW] = useState(1000);
  const [hoursDay, setHoursDay] = useState(4);
  const [days, setDays] = useState(30);
  const [rateRs, setRateRs] = useState(5);
  const [bulbVolt, setBulbVolt] = useState(220);

  const totalKwh = (powerW * hoursDay * days) / 1000;
  const joulesMJ = (totalKwh * 3.6).toFixed(1);
  const billRs = (totalKwh * rateRs).toFixed(0);
  const ratedI = (powerW / 220).toFixed(2);
  const fuseRec = +ratedI <= 1 ? '2 A' : +ratedI <= 4.6 ? '5 A' : +ratedI <= 9.2 ? '10 A' : '15 A';
  const bulbActualW = +(100 * Math.pow(bulbVolt / 220, 2)).toFixed(1);

  return (
    <div className="my-5 rounded-2xl border border-amber-500/30 bg-slate-900/80 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
            {hi ? 'इंटरैक्टिव विद्युत परिपथ व जूल ऊर्जा लैब (NCERT 11.4–11.8)' : 'Interactive Electricity, Ohm, Circuit & kWh Lab (NCERT 11.4–11.8)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'ओम का नियम (V=IR), श्रेणी-पार्श्वक्रम फॉल्ट टेस्ट एवं 1 kWh बिल सिम्युलेटर' : 'Ohm’s Law & Wire Resistivity, Series vs Parallel Fault & kWh Energy Simulator'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'ohm', label: hi ? 'ओम नियम व ρ·l/A' : 'Ohm & ρ·l/A' },
            { id: 'combo', label: hi ? 'श्रेणी बनाम पार्श्व' : 'Series vs Parallel' },
            { id: 'kwh', label: hi ? 'तापन व kWh बिल' : 'Heat & kWh Bill' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'ohm' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            {MATERIALS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMatId(m.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${matId === m.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {hi ? m.hi.split(' ')[0] : m.en.split(' ')[0]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setStretchDouble(!stretchDouble)}
              className={`ml-auto rounded-lg px-2.5 py-1 text-xs font-bold ${stretchDouble ? 'bg-rose-500 text-white' : 'bg-slate-800 text-rose-300'}`}
            >
              {stretchDouble ? (hi ? 'तार 2× खींचा गया (R = 4×!)' : 'Stretched 2× (R = 4×!)') : (hi ? 'तार खींचें (2l → A/2)' : 'Simulate 2× Wire Stretch')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'बैटरी विभवांतर (V)' : 'Voltage V'}</span>
                <span className="text-amber-300">{voltage} V</span>
              </div>
              <input type="range" min="1.5" max="12" step="1.5" value={voltage} onChange={(e) => setVoltage(+e.target.value)} className="mt-1 w-full accent-amber-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'तार की लंबाई (l)' : 'Wire Length (l)'}</span>
                <span className="text-cyan-300">{effL}×</span>
              </div>
              <input type="range" min="1" max="2" step="1" disabled={stretchDouble} value={lenFactor} onChange={(e) => setLenFactor(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'अनुप्रस्थ काट क्षेत्रफल (A)' : 'Cross-Section Area A'}</span>
                <span className="text-emerald-300">{effA}×</span>
              </div>
              <input type="range" min="0.5" max="2" step="0.5" disabled={stretchDouble} value={areaFactor} onChange={(e) => setAreaFactor(+e.target.value)} className="mt-1 w-full accent-emerald-400" />
            </label>
          </div>

          <svg viewBox="0 0 420 135" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <rect x="34" y="28" width="352" height="78" rx="14" fill="none" stroke="#475569" strokeWidth="2.5" />
            <rect x="135" y="16" width="150" height="24" rx="6" fill="#0f172a" stroke={mat.color} strokeWidth="2" />
            <text x="210" y="32" textAnchor="middle" fontSize="10" fontWeight="800" fill={mat.color}>
              R = {effR} Ω (L={effL}l, A={effA}A)
            </text>
            <circle cx="34" cy="67" r="16" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
            <text x="34" y="71" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#7dd3fc">A:{ohmCurrent}</text>
            <rect x="165" y="94" width="90" height="22" rx="6" fill="#78350f" stroke="#f59e0b" strokeWidth="1.6" />
            <text x="210" y="109" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fde68a">Battery: {voltage} V</text>
            <text x="210" y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill="#34d399">
              I = V / R = {voltage} / {effR} = {ohmCurrent} A
            </text>
            <text x="210" y="80" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#cbd5e1">
              {hi ? `ρ (${mat.hi.split(' ')[0]}) अपरिवर्तित रहता है • I→ (+ से −) | e⁻← (− से +)` : `ρ stays constant for same material! I = (+)→(−)`}
            </text>
          </svg>
        </div>
      )}

      {tab === 'combo' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <button
              type="button"
              onClick={() => setCircuitMode('series')}
              className={`rounded-lg px-3 py-1 text-xs font-bold ${circuitMode === 'series' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
            >
              {hi ? 'श्रेणीक्रम (Series: 4+6+12 Ω)' : 'Series (4 + 6 + 12 Ω)'}
            </button>
            <button
              type="button"
              onClick={() => setCircuitMode('parallel')}
              className={`rounded-lg px-3 py-1 text-xs font-bold ${circuitMode === 'parallel' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
            >
              {hi ? 'पार्श्वक्रम (Parallel Home: 4∥6∥12 Ω)' : 'Parallel (Home: 4∥6∥12 Ω)'}
            </button>
            <button
              type="button"
              onClick={() => setR2Broken(!r2Broken)}
              className={`ml-auto rounded-lg px-3 py-1 text-xs font-bold ${r2Broken ? 'bg-rose-500 text-white' : 'bg-slate-800 text-rose-300'}`}
            >
              {r2Broken ? (hi ? 'बल्ब R₂ फ्यूज है! (पुनः जोड़ें)' : 'Bulb R₂ FUSED! (Fix)') : (hi ? 'R₂ बल्ब फ्यूज करके देखें' : 'Simulate R₂ Bulb Break')}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
            {[
              { name: 'R₁ = 4 Ω', cur: i1, alive: !(circuitMode === 'series' && r2Broken) },
              { name: 'R₂ = 6 Ω', cur: i2, alive: !r2Broken },
              { name: 'R₃ = 12 Ω', cur: i3, alive: !(circuitMode === 'series' && r2Broken) },
            ].map((b, idx) => (
              <div key={idx} className={`rounded-xl p-2.5 border ${b.alive ? 'bg-emerald-950/50 border-emerald-500/40' : 'bg-rose-950/40 border-rose-500/40'}`}>
                <div className="text-slate-300">{b.name}</div>
                <div className={`text-sm font-extrabold ${b.alive ? 'text-amber-300' : 'text-rose-400'}`}>
                  {b.alive ? `💡 ${b.cur} A ON` : hi ? '⚫ बंद (OFF)' : '⚫ OFF'}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'तुल्य प्रतिरोध R_eq' : 'Total Req'}</div>
              <div className="text-sm text-cyan-300">{req === Infinity ? '∞ (Open)' : `${req} Ω`}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'कुल धारा (12 V से)' : 'Main Current (12V)'}</div>
              <div className="text-sm text-emerald-300">{totalI} A</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'निष्कर्ष' : 'Result'}</div>
              <div className="text-[11px] text-amber-300">
                {circuitMode === 'parallel'
                  ? hi ? 'पार्श्व में R_eq < 4Ω (सबसे छोटे से कम)!' : 'Parallel Req < smallest R (4 Ω)!'
                  : hi ? 'श्रेणी में R_eq > 12Ω & 1 बंद → सब बंद!' : 'Series: Req > largest R!'}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'kwh' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'उपकरण शक्ति (P)' : 'Appliance Power'}</span>
                <span className="text-amber-300">{powerW} W</span>
              </div>
              <input type="range" min="100" max="2000" step="100" value={powerW} onChange={(e) => setPowerW(+e.target.value)} className="mt-1 w-full accent-amber-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'दैनिक समय / दिन' : 'Hours/day (30d)'}</span>
                <span className="text-cyan-300">{hoursDay} h × {days}d</span>
              </div>
              <input type="range" min="1" max="12" step="1" value={hoursDay} onChange={(e) => setHoursDay(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? '100W बल्ब @ वोल्टेज (Ex Q3)' : '100W@220V Bulb Test'}</span>
                <span className="text-rose-300">{bulbVolt} V → {bulbActualW} W</span>
              </div>
              <input type="range" min="110" max="220" step="55" value={bulbVolt} onChange={(e) => setBulbVolt(+e.target.value)} className="mt-1 w-full accent-rose-400" />
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'मासिक यूनिट (kWh)' : 'Total Units'}</div>
              <div className="text-sm text-emerald-300">{totalKwh.toFixed(1)} kWh</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'ऊर्जा (Joules में)' : 'Energy (MJ)'}</div>
              <div className="text-sm text-cyan-300">{joulesMJ} × 10⁶ J</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? '220V धारा व फ्यूज' : 'Current & Fuse'}</div>
              <div className="text-sm text-rose-300">{ratedI} A ({fuseRec} fuse)</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? `बिल (₹${rateRs}/यूनिट)` : `Bill (₹${rateRs}/u)`}</div>
              <div className="text-sm text-amber-300">₹ {billRs}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
