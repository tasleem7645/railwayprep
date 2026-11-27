import React, { useState } from 'react';

const MEDIA_LIST = [
  { id: 'air', en: 'Air (1.0003)', hi: 'वायु (1.0003)', n: 1.0003 },
  { id: 'ice', en: 'Ice (1.31)', hi: 'बर्फ (1.31)', n: 1.31 },
  { id: 'water', en: 'Water (1.33)', hi: 'जल (1.33)', n: 1.33 },
  { id: 'kerosene', en: 'Kerosene (1.44)', hi: 'किरोसिन (1.44)', n: 1.44 },
  { id: 'crown', en: 'Crown Glass (1.52)', hi: 'क्राउन काँच (1.52)', n: 1.52 },
  { id: 'diamond', en: 'Diamond (2.42)', hi: 'हीरा (2.42)', n: 2.42 },
];

export function OpticsRayLensLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('mirror'); // 'mirror' | 'lens' | 'snell'

  // Tab 1: Mirror Calculator & Ray Visualizer
  const [mirrorType, setMirrorType] = useState('concave'); // 'concave' | 'convex'
  const [mFmag, setMFmag] = useState(15);
  const [mUmag, setMUmag] = useState(25);
  const mf = mirrorType === 'concave' ? -mFmag : mFmag;
  const mu = -mUmag;
  const mDenom = mUmag - Math.abs(mf) * (mirrorType === 'concave' ? 1 : -1);
  const mvAtInf = mirrorType === 'concave' && Math.abs(mUmag - mFmag) < 0.05;
  const mv = mvAtInf ? null : (mf * mu) / (mu - mf);
  const mm = mv === null ? null : -mv / mu;

  const mirrorPresets = [
    { label: hi ? 'C पर (u=2f)' : 'At C (u=2f)', fn: () => { setMirrorType('concave'); setMFmag(15); setMUmag(30); } },
    { label: hi ? 'C–F बीच (Ex 9.2)' : 'Between C–F', fn: () => { setMirrorType('concave'); setMFmag(15); setMUmag(25); } },
    { label: hi ? 'दंत P–F (u<f)' : 'Dentist (P–F)', fn: () => { setMirrorType('concave'); setMFmag(20); setMUmag(10); } },
    { label: hi ? 'उत्तल साइड मिरर' : 'Convex Wing', fn: () => { setMirrorType('convex'); setMFmag(15); setMUmag(20); } },
  ];

  // Tab 2: Lens & Dioptre Workbench
  const [lensType, setLensType] = useState('convex'); // 'convex' | 'concave'
  const [lFmag, setLFmag] = useState(10);
  const [lUmag, setLUmag] = useState(15);
  const [p1, setP1] = useState(2.0);
  const [p2, setP2] = useState(-0.25);

  const lf = lensType === 'convex' ? lFmag : -lFmag;
  const lu = -lUmag;
  const lvAtInf = lensType === 'convex' && Math.abs(lUmag - lFmag) < 0.05;
  const lv = lvAtInf ? null : (lf * lu) / (lf + lu);
  const lm = lv === null ? null : lv / lu;
  const lensPowerD = 100 / lf;
  const netPowerD = p1 + p2;

  // Tab 3: Snell's Law & Table 9.3 Refractive Index
  const [med1Id, setMed1Id] = useState('air');
  const [med2Id, setMed2Id] = useState('crown');
  const [angleI, setAngleI] = useState(45);
  const med1 = MEDIA_LIST.find((m) => m.id === med1Id) || MEDIA_LIST[0];
  const med2 = MEDIA_LIST.find((m) => m.id === med2Id) || MEDIA_LIST[4];
  const sinR = (med1.n / med2.n) * Math.sin((angleI * Math.PI) / 180);
  const isTir = sinR >= 1;
  const angleR = isTir ? 90 : (Math.asin(sinR) * 180) / Math.PI;
  const speed1 = (3.0 / med1.n).toFixed(2);
  const speed2 = (3.0 / med2.n).toFixed(2);
  const radI = (angleI * Math.PI) / 180;
  const radR = (angleR * Math.PI) / 180;

  // Helpers for SVG mirror/lens bench mapping (origin at x=210, y=95)
  const benchScale = 2.6;
  const clampX = (x) => Math.max(16, Math.min(404, x));

  const renderMirrorBench = () => {
    const px = 225;
    const py = 92;
    const fx = px + mf * benchScale;
    const cx = px + 2 * mf * benchScale;
    const ox = clampX(px + mu * benchScale);
    const ix = mv === null ? null : clampX(px + mv * benchScale);
    const ih = mm === null ? 0 : Math.max(-54, Math.min(54, 34 * mm));
    const clampedCx = clampX(cx);
    const clampedFx = clampX(fx);

    return (
      <svg viewBox="0 0 420 185" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        <line x1="12" y1={py} x2="408" y2={py} stroke="#64748b" strokeWidth="1.2" />
        {/* Mirror arc */}
        {mirrorType === 'concave' ? (
          <path d={`M ${px - 10} 26 Q ${px + 12} ${py} ${px - 10} 158`} fill="none" stroke="#38bdf8" strokeWidth="3.2" />
        ) : (
          <path d={`M ${px + 10} 26 Q ${px - 12} ${py} ${px + 10} 158`} fill="none" stroke="#a855f7" strokeWidth="3.2" />
        )}
        <circle cx={px} cy={py} r="3" fill="#f8fafc" />
        <text x={px + 4} y={py + 12} fontSize="9" fontWeight="800" fill="#f8fafc">P</text>
        <circle cx={clampedFx} cy={py} r="3" fill="#f59e0b" />
        <text x={clampedFx} y={py + 13} textAnchor="middle" fontSize="9" fontWeight="800" fill="#fbbf24">F</text>
        <circle cx={clampedCx} cy={py} r="3" fill="#94a3b8" />
        <text x={clampedCx} y={py + 13} textAnchor="middle" fontSize="9" fontWeight="800" fill="#cbd5e1">C</text>

        {/* Object Arrow */}
        <line x1={ox} y1={py} x2={ox} y2={py - 34} stroke="#22d3ee" strokeWidth="2.8" />
        <polygon points={`${ox},${py - 38} ${ox - 4},${py - 30} ${ox + 4},${py - 30}`} fill="#22d3ee" />
        <text x={ox} y={py - 42} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#67e8f9">Obj</text>

        {/* Ray 1 Parallel to mirror */}
        <line x1={ox} y1={py - 34} x2={px} y2={py - 34} stroke="#fbbf24" strokeWidth="1.5" />
        {ix !== null ? (
          <>
            <line x1={px} y1={py - 34} x2={ix} y2={py - ih} stroke="#fbbf24" strokeWidth="1.4" strokeDasharray={mv > 0 ? '4 2' : ''} />
            <line x1={ox} y1={py - 34} x2={px} y2={py} stroke="#34d399" strokeWidth="1.3" />
            <line x1={px} y1={py} x2={ix} y2={py - ih} stroke="#34d399" strokeWidth="1.3" strokeDasharray={mv > 0 ? '4 2' : ''} />
            <line x1={ix} y1={py} x2={ix} y2={py - ih} stroke="#fb7185" strokeWidth="2.8" />
            <text x={ix} y={ih >= 0 ? py - ih - 6 : py - ih + 12} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#fda4af">
              {hi ? 'प्रतिबिंब' : 'Img'}
            </text>
          </>
        ) : (
          <text x="80" y="34" fontSize="10" fontWeight="800" fill="#fbbf24">
            {hi ? 'u = F → अनंत (∞) पर समांतर किरणें!' : 'u = F → Parallel Reflected Rays at ∞'}
          </text>
        )}
      </svg>
    );
  };

  const renderLensBench = () => {
    const ox0 = 210;
    const oy = 92;
    const sc = 2.5;
    const fxR = clampX(ox0 + lf * sc);
    const fxL = clampX(ox0 - lf * sc);
    const objX = clampX(ox0 + lu * sc);
    const imgX = lv === null ? null : clampX(ox0 + lv * sc);
    const imgH = lm === null ? 0 : Math.max(-54, Math.min(54, 34 * lm));

    return (
      <svg viewBox="0 0 420 185" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        <line x1="12" y1={oy} x2="408" y2={oy} stroke="#64748b" strokeWidth="1.2" />
        {/* Lens shape */}
        {lensType === 'convex' ? (
          <path d={`M ${ox0} 26 Q ${ox0 + 18} ${oy} ${ox0} 158 Q ${ox0 - 18} ${oy} ${ox0} 26 Z`} fill="#0ea5e933" stroke="#38bdf8" strokeWidth="2.2" />
        ) : (
          <path d={`M ${ox0 - 11} 26 Q ${ox0} ${oy} ${ox0 - 11} 158 L ${ox0 + 11} 158 Q ${ox0} ${oy} ${ox0 + 11} 26 Z`} fill="#f43f5e33" stroke="#fb7185" strokeWidth="2.2" />
        )}
        <circle cx={ox0} cy={oy} r="3" fill="#f8fafc" /><text x={ox0 + 5} y={oy + 12} fontSize="9" fontWeight="800" fill="#f8fafc">O</text>
        <circle cx={fxL} cy={oy} r="2.8" fill="#f59e0b" /><text x={fxL} y={oy + 13} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#fbbf24">{lensType === 'convex' ? 'F₁' : 'F₂'}</text>
        <circle cx={fxR} cy={oy} r="2.8" fill="#f59e0b" /><text x={fxR} y={oy + 13} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#fbbf24">{lensType === 'convex' ? 'F₂' : 'F₁'}</text>

        {/* Object Arrow */}
        <line x1={objX} y1={oy} x2={objX} y2={oy - 34} stroke="#22d3ee" strokeWidth="2.8" />
        <text x={objX} y={oy - 40} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#67e8f9">Obj</text>

        {/* Parallel + Optical center rays */}
        <line x1={objX} y1={oy - 34} x2={ox0} y2={oy - 34} stroke="#fbbf24" strokeWidth="1.5" />
        {imgX !== null ? (
          <>
            <line x1={ox0} y1={oy - 34} x2={imgX} y2={oy - imgH} stroke="#fbbf24" strokeWidth="1.4" strokeDasharray={lv < 0 ? '4 2' : ''} />
            <line x1={objX} y1={oy - 34} x2={imgX} y2={oy - imgH} stroke="#34d399" strokeWidth="1.3" strokeDasharray={lv < 0 ? '4 2' : ''} />
            <line x1={imgX} y1={oy} x2={imgX} y2={oy - imgH} stroke="#fb7185" strokeWidth="2.8" />
            <text x={imgX} y={imgH >= 0 ? oy - imgH - 6 : oy - imgH + 12} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#fda4af">
              {hi ? 'प्रतिबिंब' : 'Img'}
            </text>
          </>
        ) : (
          <text x="235" y="34" fontSize="10" fontWeight="800" fill="#fbbf24">
            {hi ? 'u = F₁ → अनंत (∞) पर किरणें!' : 'u = F₁ → Rays Emerge Parallel at ∞'}
          </text>
        )}
      </svg>
    );
  };

  return (
    <div className="my-5 rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
            {hi ? 'इंटरैक्टिव प्रकाशिकी व किरण प्रयोगशाला (NCERT 9.2–9.3)' : 'Interactive Optics, Mirror-Lens & Snell Lab (NCERT 9.2–9.3)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'गोलीय दर्पण व लेंस किरण-आरेख, डाइऑप्टर एवं स्नेल नियम सिम्युलेटर' : 'Live Spherical Mirror/Lens Ray Tracer, Dioptre Power & Snell Refraction Lab'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'mirror', label: hi ? 'दर्पण सूत्र (1/v+1/u)' : 'Mirror Lab (+)' },
            { id: 'lens', label: hi ? 'लेंस व डाइऑप्टर (−)' : 'Lens & Power (D)' },
            { id: 'snell', label: hi ? 'स्नेल नियम (n = c/v)' : 'Snell & n = c/v' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'mirror' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <button
              type="button"
              onClick={() => setMirrorType('concave')}
              className={`rounded-lg px-3 py-1 text-xs font-bold ${mirrorType === 'concave' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
            >
              {hi ? 'अवतल दर्पण (f < 0)' : 'Concave Mirror (f < 0)'}
            </button>
            <button
              type="button"
              onClick={() => setMirrorType('convex')}
              className={`rounded-lg px-3 py-1 text-xs font-bold ${mirrorType === 'convex' ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              {hi ? 'उत्तल दर्पण (f > 0)' : 'Convex Mirror (f > 0)'}
            </button>
            {mirrorPresets.map((pr, idx) => (
              <button key={idx} type="button" onClick={pr.fn} className="rounded-lg bg-slate-800 hover:bg-slate-700 px-2.5 py-1 text-[11px] font-bold text-amber-300">
                {pr.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <label className="block rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'फोकस दूरी (f)' : 'Focal Length (f)'}</span>
                <span className="text-amber-300">{mf} cm (R = {2 * mf} cm)</span>
              </div>
              <input type="range" min="10" max="25" step="5" value={mFmag} onChange={(e) => setMFmag(+e.target.value)} className="mt-1 w-full accent-amber-400" />
            </label>
            <label className="block rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'बिंब दूरी (u — सदैव बाएँ)' : 'Object Distance (u)'}</span>
                <span className="text-cyan-300">{mu} cm</span>
              </div>
              <input type="range" min="5" max="60" step="1" value={mUmag} onChange={(e) => setMUmag(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
            </label>
          </div>

          {renderMirrorBench()}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'प्रतिबिंब (v)' : 'Image v'}</div>
              <div className="text-sm text-rose-300">{mv === null ? '∞' : `${mv.toFixed(1)} cm`}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'आवर्धन (m=-v/u)' : 'Mag m=-v/u'}</div>
              <div className="text-sm text-emerald-300">{mm === null ? '∞' : `${mm >= 0 ? '+' : ''}${mm.toFixed(2)}`}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2 col-span-2">
              <div className="text-slate-400">{hi ? 'प्रतिबिंब प्रकृति व आकार' : 'Image Nature & Size'}</div>
              <div className="text-sm text-amber-300">
                {mv === null
                  ? hi ? 'अनंत पर • अत्यधिक बड़ा' : 'At Infinity • Parallel Beam'
                  : mv < 0
                    ? `${hi ? 'वास्तविक व उलटा' : 'Real & Inverted'} (${Math.abs(mm) > 1.02 ? (hi ? 'बड़ा' : 'Magnified') : Math.abs(mm) < 0.98 ? (hi ? 'छोटा' : 'Diminished') : (hi ? 'समान' : 'Same Size')})`
                    : `${hi ? 'आभासी व सीधा (दर्पण के पीछे)' : 'Virtual & Erect (Behind)'} (${Math.abs(mm) > 1 ? (hi ? 'बड़ा' : 'Magnified') : (hi ? 'छोटा' : 'Diminished')})`}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'lens' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <button
              type="button"
              onClick={() => setLensType('convex')}
              className={`rounded-lg px-3 py-1 text-xs font-bold ${lensType === 'convex' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
            >
              {hi ? 'उत्तल लेंस (f > 0, +D)' : 'Convex Lens (f > 0, +D)'}
            </button>
            <button
              type="button"
              onClick={() => setLensType('concave')}
              className={`rounded-lg px-3 py-1 text-xs font-bold ${lensType === 'concave' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              {hi ? 'अवतल लेंस (f < 0, −D)' : 'Concave Lens (f < 0, −D)'}
            </button>
            <span className="ml-auto rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-extrabold text-amber-300">
              P = 100 / f = {lensPowerD >= 0 ? '+' : ''}{lensPowerD.toFixed(2)} D
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <label className="block rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'लेंस फोकस दूरी (f)' : 'Lens Focal Length (f)'}</span>
                <span className="text-amber-300">{lf >= 0 ? '+' : ''}{lf} cm</span>
              </div>
              <input type="range" min="10" max="25" step="5" value={lFmag} onChange={(e) => setLFmag(+e.target.value)} className="mt-1 w-full accent-amber-400" />
            </label>
            <label className="block rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-200">
                <span>{hi ? 'बिंब दूरी (u)' : 'Object Distance (u)'}</span>
                <span className="text-cyan-300">{lu} cm</span>
              </div>
              <input type="range" min="5" max="50" step="1" value={lUmag} onChange={(e) => setLUmag(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
            </label>
          </div>

          {renderLensBench()}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'प्रतिबिंब (v)' : 'Image v'}</div>
              <div className="text-sm text-rose-300">{lv === null ? '∞' : `${lv >= 0 ? '+' : ''}${lv.toFixed(1)} cm`}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2">
              <div className="text-slate-400">{hi ? 'आवर्धन (m=+v/u)' : 'Mag m=+v/u'}</div>
              <div className="text-sm text-emerald-300">{lm === null ? '∞' : `${lm >= 0 ? '+' : ''}${lm.toFixed(2)}`}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2 col-span-2">
              <div className="text-slate-400">{hi ? 'संपर्क संयोजन: P = P₁ + P₂' : 'Lens Combination Lab'}</div>
              <div className="mt-1 flex items-center justify-center gap-2 text-[11px]">
                <button type="button" onClick={() => setP1(p1 === 2.0 ? 4.5 : 2.0)} className="rounded bg-slate-700 px-1.5 py-0.5 text-cyan-300">P₁={p1 >= 0 ? '+' : ''}{p1}D</button>
                <span>+</span>
                <button type="button" onClick={() => setP2(p2 === -0.25 ? -3.0 : -0.25)} className="rounded bg-slate-700 px-1.5 py-0.5 text-rose-300">P₂={p2}D</button>
                <span>=</span>
                <span className="text-amber-300">{netPowerD >= 0 ? '+' : ''}{netPowerD.toFixed(2)} D</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'snell' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <span className="font-bold text-slate-300">{hi ? 'माध्यम 1 (आपतन)' : 'Medium 1 (Incident)'}</span>
              <select value={med1Id} onChange={(e) => setMed1Id(e.target.value)} className="mt-1 w-full rounded bg-slate-900 p-1.5 font-bold text-cyan-300 border border-slate-700">
                {MEDIA_LIST.map((m) => <option key={m.id} value={m.id}>{hi ? m.hi : m.en}</option>)}
              </select>
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <span className="font-bold text-slate-300">{hi ? 'माध्यम 2 (अपवर्तन)' : 'Medium 2 (Refracted)'}</span>
              <select value={med2Id} onChange={(e) => setMed2Id(e.target.value)} className="mt-1 w-full rounded bg-slate-900 p-1.5 font-bold text-amber-300 border border-slate-700">
                {MEDIA_LIST.map((m) => <option key={m.id} value={m.id}>{hi ? m.hi : m.en}</option>)}
              </select>
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold text-slate-300">
                <span>{hi ? 'आपतन कोण ∠i' : 'Incident ∠i'}</span>
                <span className="text-emerald-300">{angleI}°</span>
              </div>
              <input type="range" min="10" max="75" value={angleI} onChange={(e) => setAngleI(+e.target.value)} className="mt-2 w-full accent-emerald-400" />
            </label>
          </div>

          <svg viewBox="0 0 420 170" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <rect x="0" y="0" width="420" height="85" fill="#0f172a" />
            <rect x="0" y="85" width="420" height="85" fill="#0c4a6e44" />
            <line x1="210" y1="8" x2="210" y2="162" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1={210 - 75 * Math.sin(radI)} y1={85 - 75 * Math.cos(radI)} x2="210" y2="85" stroke="#fbbf24" strokeWidth="2.4" />
            {isTir ? (
              <line x1="210" y1="85" x2={210 + 75 * Math.sin(radI)} y2={85 - 75 * Math.cos(radI)} stroke="#fb7185" strokeWidth="2.4" />
            ) : (
              <line x1="210" y1="85" x2={210 + 75 * Math.sin(radR)} y2={85 + 75 * Math.cos(radR)} stroke="#22d3ee" strokeWidth="2.4" />
            )}
            <text x="16" y="22" fontSize="9.5" fontWeight="800" fill="#fbbf24">n₁ = {med1.n} | v₁ = {speed1}×10⁸ m/s</text>
            <text x="16" y="156" fontSize="9.5" fontWeight="800" fill="#38bdf8">n₂ = {med2.n} | v₂ = {speed2}×10⁸ m/s</text>
            <text x="404" y="22" textAnchor="end" fontSize="9.5" fontWeight="800" fill="#cbd5e1">n₂₁ = {(med2.n / med1.n).toFixed(2)}</text>
            <text x="404" y="156" textAnchor="end" fontSize="10" fontWeight="800" fill={isTir ? '#fb7185' : '#34d399'}>
              {isTir ? (hi ? 'पूर्ण आंतरिक परावर्तन (TIR)!' : 'Total Internal Reflection!') : `∠r = ${angleR.toFixed(1)}° (${med2.n > med1.n ? (hi ? 'अभिलंब की ओर' : 'Toward Normal') : (hi ? 'अभिलंब से दूर' : 'Away from Normal')})`}
            </text>
          </svg>
        </div>
      )}
    </div>
  );
}
