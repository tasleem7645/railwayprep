import React, { useState } from 'react';

export function HumanEyePrismLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('eye'); // 'eye' | 'defects' | 'prism'

  // Tab 1: Accommodation & Iris-Pupil Aperture
  const [objDistCm, setObjDistCm] = useState(25); // 25..400 (400 = Infinity)
  const [dimLight, setDimLight] = useState(false);
  const [cataract, setCataract] = useState(false);

  const isFar = objDistCm >= 300;
  const uMeters = isFar ? Infinity : objDistCm / 100;
  // Lens formula with eyeball image distance ~2.3 cm (0.023 m)
  const fCm = isFar ? 2.3 : (1 / (1 / 2.3 + 1 / objDistCm)).toFixed(2);
  const lensRx = Math.max(5.5, 13.5 - ((Math.min(objDistCm, 300) - 25) / 275) * 7.5);
  const pupilHalf = dimLight ? 16 : 8;

  // Tab 2: Defects & Dioptre Solver
  const [defectMode, setDefectMode] = useState('myopia'); // 'myopia' | 'hyper' | 'presby'
  const [farPtCm, setFarPtCm] = useState(80); // Ex Q6: 80 cm -> -1.25 D
  const [nearPtCm, setNearPtCm] = useState(100); // Ex Q7: 100 cm (1 m) -> +3.0 D
  const [lensOn, setLensOn] = useState(true);

  const myopiaPower = -100 / farPtCm;
  const myopiaFcm = -farPtCm;
  const hyperFcm = 100 / (4 - 100 / nearPtCm); // 1/f = 1/(-nearPtCm) - 1/(-25)
  const hyperPower = 100 / hyperFcm;

  // Tab 3: Prism Dispersion, Newton 2-Prism & Rayleigh Scattering
  const [opticsMode, setOpticsMode] = useState('prism'); // 'prism' | 'recombine' | 'scatter'
  const [particleSize, setParticleSize] = useState(1); // 1 = Fine molecules (Blue), 2 = Medium colloid, 3 = Giant water drop (White)
  const [spaceVacuum, setSpaceVacuum] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3.5 sm:p-4 text-slate-100 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
          {hi ? 'Pass Pro इंटरैक्टिव मानव नेत्र, दोष-चश्मा व प्रिज़्म लैब (Ch 10)' : 'Pass Pro Human Eye, Lens Power & Prism Lab (Ch 10)'}
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs font-bold">
          {[
            { id: 'eye', en: '1. Eye & Ciliary', hi: '1. नेत्र व समंजन' },
            { id: 'defects', en: '2. Defects & P=1/f', hi: '2. दोष व P=1/f आंकिक' },
            { id: 'prism', en: '3. Prism & Sky', hi: '3. प्रिज़्म व प्रकीर्णन' },
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

      {tab === 'eye' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
            <label className="rounded-xl bg-slate-800/80 p-2.5 block">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'वस्तु की दूरी (25 cm → ∞)' : 'Object Distance (25 cm → ∞)'}</span>
                <span className="text-amber-300">{isFar ? '∞ (Far Point)' : `${objDistCm} cm`}</span>
              </div>
              <input
                type="range"
                min="25"
                max="300"
                step="5"
                value={objDistCm}
                onChange={(e) => setObjDistCm(+e.target.value)}
                className="mt-1.5 w-full accent-cyan-400"
              />
            </label>
            <div className="flex flex-wrap items-center gap-2 rounded-xl bg-slate-800/80 p-2.5">
              <button
                type="button"
                onClick={() => setDimLight((v) => !v)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold border ${
                  dimLight ? 'bg-amber-500/20 border-amber-400 text-amber-200' : 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                }`}
              >
                {dimLight
                  ? (hi ? 'मंद प्रकाश → पुतली बड़ी (Dilated)' : 'Dim Light → Pupil Dilated')
                  : (hi ? 'तेज धूप → पुतली छोटी (Constricted)' : 'Bright Light → Pupil Constricted')}
              </button>
              <button
                type="button"
                onClick={() => setCataract((v) => !v)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold border ${
                  cataract ? 'bg-rose-500/20 border-rose-400 text-rose-200' : 'bg-slate-900 border-slate-700 text-slate-300'
                }`}
              >
                {cataract ? (hi ? 'मोतियाबिंद: चालू (दूधिया)' : 'Cataract: ON (Cloudy)') : (hi ? 'मोतियाबिंद टेस्ट करें' : 'Toggle Cataract')}
              </button>
            </div>
          </div>

          <svg viewBox="0 0 460 190" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            {/* Object Arrow */}
            <line x1={isFar ? 24 : 50 + ((objDistCm - 25) / 275) * 15} y1="95" x2={isFar ? 24 : 50 + ((objDistCm - 25) / 275) * 15} y2="62" stroke="#fbbf24" strokeWidth="2.6" />
            <text x="16" y="52" fontSize="9.5" fontWeight="800" fill="#fbbf24">{isFar ? 'u = ∞' : `u = ${objDistCm}cm`}</text>

            {/* Eyeball Sphere (~2.3 cm diameter) */}
            <path d="M 192 50 C 166 75 166 115 192 140 A 78 78 0 1 0 192 50 Z" fill="#0c1930" stroke="#38bdf8" strokeWidth="2.8" />
            <path d="M 192 50 Q 158 95 192 140" fill="#0e749033" stroke="#2dd4bf" strokeWidth="2.6" />

            {/* Iris / Pupil Aperture */}
            <rect x="200" y="52" width="7" height={43 - pupilHalf} rx="2" fill="#8b5cf6" />
            <rect x="200" y={95 + pupilHalf} width="7" height={43 - pupilHalf} rx="2" fill="#8b5cf6" />

            {/* Ciliary Muscles */}
            <rect x="216" y="42" width="12" height="14" rx="3" fill={isFar ? '#34d399' : '#fb7185'} />
            <rect x="216" y="134" width="12" height="14" rx="3" fill={isFar ? '#34d399' : '#fb7185'} />

            {/* Dynamic Crystalline Lens (thick when near, thin when far) */}
            <ellipse
              cx="222"
              cy="95"
              rx={lensRx}
              ry="34"
              fill={cataract ? '#e2e8f0cc' : '#fde68a44'}
              stroke={cataract ? '#f8fafc' : '#fbbf24'}
              strokeWidth="2.2"
            />
            {cataract && (
              <text x="222" y="98" textAnchor="middle" fontSize="8" fontWeight="900" fill="#be123c">
                {hi ? 'दूधिया' : 'CLOUDY'}
              </text>
            )}

            {/* Retina Screen & Rays */}
            <path d="M 294 34 A 66 66 0 0 1 294 156" fill="none" stroke="#34d399" strokeWidth="3.5" />
            <line x1="24" y1="74" x2="222" y2={95 - pupilHalf + 3} stroke="#fbbf24" strokeWidth="1.6" />
            <line x1="24" y1="116" x2="222" y2={95 + pupilHalf - 3} stroke="#fbbf24" strokeWidth="1.6" />
            <line x1="222" y1={95 - pupilHalf + 3} x2={cataract ? 275 : 306} y2={cataract ? 88 : 95} stroke={cataract ? '#94a3b8' : '#34d399'} strokeWidth="1.8" strokeDasharray={cataract ? '3 2' : '0'} />
            <line x1="222" y1={95 + pupilHalf - 3} x2={cataract ? 275 : 306} y2={cataract ? 102 : 95} stroke={cataract ? '#94a3b8' : '#34d399'} strokeWidth="1.8" strokeDasharray={cataract ? '3 2' : '0'} />
            <circle cx={cataract ? 275 : 306} cy="95" r="4" fill={cataract ? '#fb7185' : '#34d399'} />

            {/* Telemetry Labels */}
            <text x="336" y="40" fontSize="10" fontWeight="800" fill="#2dd4bf">{hi ? 'कॉर्निया = मुख्य अपवर्तन' : 'Cornea = Max refraction'}</text>
            <text x="336" y="64" fontSize="10" fontWeight="800" fill={isFar ? '#34d399' : '#fb7185'}>
              {isFar
                ? (hi ? 'पक्ष्माभी: शिथिल (Relaxed)' : 'Ciliary: RELAXED')
                : (hi ? 'पक्ष्माभी: संकुचित (Contracted)' : 'Ciliary: CONTRACTED')}
            </text>
            <text x="336" y="88" fontSize="10" fontWeight="800" fill="#fbbf24">
              {isFar ? (hi ? 'लेंस: पतला (f = 2.30 cm)' : 'Lens: THIN (f = 2.30 cm)') : (hi ? `लेंस: मोटा (f = ${fCm} cm)` : `Lens: THICK (f = ${fCm} cm)`)}
            </text>
            <text x="336" y="112" fontSize="10" fontWeight="800" fill="#a78bfa">
              {dimLight ? (hi ? 'पुतली बड़ी → अधिक प्रकाश' : 'Pupil Wide → More light') : (hi ? 'पुतली छोटी → कम प्रकाश' : 'Pupil Small → Less light')}
            </text>
            <text x="336" y="136" fontSize="10" fontWeight="800" fill="#34d399">{hi ? 'प्रतिबिंब दूरी v = 2.3 cm (नियत!)' : 'Image dist v ≈ 2.3 cm (FIXED!)'}</text>
            <text x="336" y="160" fontSize="9.5" fontWeight="700" fill="#cbd5e1">{hi ? 'प्रतिबिंब: वास्तविक व उल्टा (रेटिना पर)' : 'Image: Real & Inverted on Retina'}</text>
          </svg>
        </div>
      )}

      {tab === 'defects' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
            <button type="button" onClick={() => { setDefectMode('myopia'); setFarPtCm(80); setLensOn(true); }} className={`rounded-lg px-2.5 py-1.5 ${defectMode === 'myopia' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}>
              {hi ? 'निकट-दृष्टि (Ex Q6: 80cm)' : 'Myopia (Ex Q6: 80cm)'}
            </button>
            <button type="button" onClick={() => { setDefectMode('hyper'); setNearPtCm(100); setLensOn(true); }} className={`rounded-lg px-2.5 py-1.5 ${defectMode === 'hyper' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
              {hi ? 'दीर्घ-दृष्टि (Ex Q7: 1m)' : 'Hypermetropia (Ex Q7: 1m)'}
            </button>
            <button type="button" onClick={() => { setDefectMode('presby'); setLensOn(true); }} className={`rounded-lg px-2.5 py-1.5 ${defectMode === 'presby' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
              {hi ? 'जरा-दूरदृष्टिता (Ex Q5: -5.5/+1.5D)' : 'Presbyopia (Ex Q5 Bifocal)'}
            </button>
            {defectMode !== 'presby' && (
              <button
                type="button"
                onClick={() => setLensOn((v) => !v)}
                className={`ml-auto rounded-lg px-2.5 py-1.5 border ${lensOn ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200' : 'bg-rose-500/20 border-rose-400 text-rose-200'}`}
              >
                {lensOn ? (hi ? 'चश्मा लेंस: ON (सही फोकस!)' : 'Corrective Lens: ON') : (hi ? 'चश्मा लेंस: OFF (दोष देखें!)' : 'Corrective Lens: OFF')}
              </button>
            )}
          </div>

          {defectMode === 'myopia' && (
            <div className="space-y-2.5 text-xs">
              <label className="block rounded-xl bg-slate-800/80 p-2.5">
                <div className="flex justify-between font-bold">
                  <span>{hi ? 'दोषयुक्त दूर बिंदु (Far Point v)' : 'Myopic Far Point (v)'}</span>
                  <span className="text-rose-300">{farPtCm} cm ({(farPtCm / 100).toFixed(2)} m)</span>
                </div>
                <input type="range" min="40" max="200" step="10" value={farPtCm} onChange={(e) => setFarPtCm(+e.target.value)} className="mt-1 w-full accent-rose-400" />
              </label>
              <svg viewBox="0 0 460 155" className="w-full rounded-xl bg-slate-950 border border-slate-800">
                {lensOn && <path d="M 108 42 Q 116 78 108 114 L 122 114 Q 114 78 122 42 Z" fill="#0ea5e933" stroke="#38bdf8" strokeWidth="2" />}
                <ellipse cx="220" cy="78" rx="68" ry="48" fill="#0c1930" stroke="#94a3b8" strokeWidth="2.2" />
                <ellipse cx="164" cy="78" rx="7" ry="26" fill="#fbbf2433" stroke="#fbbf24" strokeWidth="1.8" />
                <line x1="25" y1="58" x2={lensOn ? 115 : 164} y2="58" stroke="#fbbf24" strokeWidth="2" />
                <line x1="25" y1="98" x2={lensOn ? 115 : 164} y2="98" stroke="#fbbf24" strokeWidth="2" />
                {lensOn ? (
                  <>
                    <line x1="115" y1="58" x2="164" y2="52" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="115" y1="98" x2="164" y2="104" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="164" y1="52" x2="288" y2="78" stroke="#34d399" strokeWidth="2.2" />
                    <line x1="164" y1="104" x2="288" y2="78" stroke="#34d399" strokeWidth="2.2" />
                    <circle cx="288" cy="78" r="4.5" fill="#34d399" />
                    <text x="304" y="54" fontSize="10.5" fontWeight="900" fill="#38bdf8">{hi ? 'अवतल लेंस (Concave Lens)' : 'Concave Lens Required'}</text>
                    <text x="304" y="76" fontSize="10.5" fontWeight="900" fill="#34d399">f = {myopiaFcm} cm = {(myopiaFcm / 100).toFixed(2)} m</text>
                    <text x="304" y="98" fontSize="11" fontWeight="900" fill="#fbbf24">P = 1/f = {myopiaPower.toFixed(2)} D</text>
                    <text x="304" y="120" fontSize="9.2" fontWeight="700" fill="#cbd5e1">{hi ? 'प्रतिबिंब सीधे रेटिना पर!' : 'Sharp focus restored on Retina!'}</text>
                  </>
                ) : (
                  <>
                    <line x1="164" y1="58" x2="245" y2="78" stroke="#fb7185" strokeWidth="2.2" />
                    <line x1="164" y1="98" x2="245" y2="78" stroke="#fb7185" strokeWidth="2.2" />
                    <circle cx="245" cy="78" r="4.5" fill="#fb7185" />
                    <text x="304" y="64" fontSize="10.5" fontWeight="900" fill="#fb7185">{hi ? 'दोष: प्रतिबिंब रेटिना से पहले!' : 'Defect: Focus IN FRONT of Retina!'}</text>
                    <text x="304" y="88" fontSize="9.5" fontWeight="700" fill="#cbd5e1">{hi ? 'कारण: वक्रता अधिक या नेत्र गोलक लंबा' : 'Cause: Excess curvature / long eyeball'}</text>
                  </>
                )}
              </svg>
            </div>
          )}

          {defectMode === 'hyper' && (
            <div className="space-y-2.5 text-xs">
              <label className="block rounded-xl bg-slate-800/80 p-2.5">
                <div className="flex justify-between font-bold">
                  <span>{hi ? 'दोषयुक्त निकट बिंदु (Hypermetropic Near Point)' : 'Faulty Near Point (v)'}</span>
                  <span className="text-cyan-300">{nearPtCm} cm ({(nearPtCm / 100).toFixed(2)} m)</span>
                </div>
                <input type="range" min="50" max="200" step="10" value={nearPtCm} onChange={(e) => setNearPtCm(+e.target.value)} className="mt-1 w-full accent-cyan-400" />
              </label>
              <svg viewBox="0 0 460 155" className="w-full rounded-xl bg-slate-950 border border-slate-800">
                <circle cx="42" cy="78" r="4" fill="#fbbf24" />
                <text x="20" y="64" fontSize="9" fontWeight="800" fill="#fbbf24">25cm</text>
                {lensOn && <ellipse cx="114" cy="78" rx="8" ry="34" fill="#34d39933" stroke="#34d399" strokeWidth="2" />}
                <ellipse cx="218" cy="78" rx="64" ry="48" fill="#0c1930" stroke="#94a3b8" strokeWidth="2.2" />
                <ellipse cx="164" cy="78" rx="7" ry="26" fill="#fbbf2433" stroke="#fbbf24" strokeWidth="1.8" />
                {lensOn ? (
                  <>
                    <line x1="42" y1="78" x2="114" y2="54" stroke="#fbbf24" strokeWidth="1.8" />
                    <line x1="42" y1="78" x2="114" y2="102" stroke="#fbbf24" strokeWidth="1.8" />
                    <line x1="114" y1="54" x2="164" y2="60" stroke="#34d399" strokeWidth="1.8" />
                    <line x1="114" y1="102" x2="164" y2="96" stroke="#34d399" strokeWidth="1.8" />
                    <line x1="164" y1="60" x2="282" y2="78" stroke="#34d399" strokeWidth="2.2" />
                    <line x1="164" y1="96" x2="282" y2="78" stroke="#34d399" strokeWidth="2.2" />
                    <circle cx="282" cy="78" r="4.5" fill="#34d399" />
                    <text x="298" y="54" fontSize="10.5" fontWeight="900" fill="#34d399">{hi ? 'उत्तल लेंस (Convex Lens)' : 'Convex Lens Required'}</text>
                    <text x="298" y="76" fontSize="10.5" fontWeight="900" fill="#38bdf8">f = +{hyperFcm.toFixed(1)} cm = +{(hyperFcm / 100).toFixed(2)} m</text>
                    <text x="298" y="98" fontSize="11" fontWeight="900" fill="#fbbf24">P = +{hyperPower.toFixed(2)} D</text>
                    <text x="298" y="120" fontSize="9.2" fontWeight="700" fill="#cbd5e1">{hi ? 'रेटिना के ठीक ऊपर स्पष्ट प्रतिबिंब!' : 'Converges cleanly onto Retina!'}</text>
                  </>
                ) : (
                  <>
                    <line x1="42" y1="78" x2="164" y2="54" stroke="#fb7185" strokeWidth="1.8" />
                    <line x1="42" y1="78" x2="164" y2="102" stroke="#fb7185" strokeWidth="1.8" />
                    <line x1="164" y1="54" x2="310" y2="78" stroke="#fb7185" strokeWidth="2.2" />
                    <line x1="164" y1="102" x2="310" y2="78" stroke="#fb7185" strokeWidth="2.2" />
                    <circle cx="310" cy="78" r="4.5" fill="#fb7185" />
                    <text x="318" y="64" fontSize="10.2" fontWeight="900" fill="#fb7185">{hi ? 'दोष: रेटिना के पीछे!' : 'Defect: BEHIND Retina!'}</text>
                    <text x="318" y="88" fontSize="9.2" fontWeight="700" fill="#cbd5e1">{hi ? 'कारण: f अधिक / गोलक छोटा' : 'Cause: Long f / small eye'}</text>
                  </>
                )}
              </svg>
            </div>
          )}

          {defectMode === 'presby' && (
            <div className="rounded-xl bg-slate-950 border border-amber-500/40 p-3 text-xs space-y-2">
              <div className="font-extrabold text-amber-300">
                {hi ? 'NCERT अभ्यास Q5 (द्विफोकसी चश्मा हल): P₁ = -5.5 D (दूर), P₂ = +1.5 D (पास)' : 'NCERT Exercise Q5 Solved: Distant (-5.5 D) & Near (+1.5 D)'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-900 p-2.5 border border-cyan-500/40">
                  <div className="font-bold text-cyan-300">{hi ? '(i) ऊपरी भाग — दूर दृष्टि संशोधन' : '(i) Upper Concave Part (Distant)'}</div>
                  <div className="text-slate-200 mt-1">P = -5.5 D ⇒ f = 1 / (-5.5) = <b>-0.1818 m ≈ -18.2 cm</b> ({hi ? 'अवतल लेंस' : 'Concave'})</div>
                </div>
                <div className="rounded-lg bg-slate-900 p-2.5 border border-emerald-500/40">
                  <div className="font-bold text-emerald-300">{hi ? '(ii) निचला भाग — निकट पढ़ने हेतु' : '(ii) Lower Convex Part (Near Reading)'}</div>
                  <div className="text-slate-200 mt-1">P = +1.5 D ⇒ f = 1 / (+1.5) = <b>+0.667 m ≈ +66.7 cm</b> ({hi ? 'उत्तल लेंस' : 'Convex'})</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {tab === 'prism' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5 text-xs font-bold">
            {[
              { id: 'prism', hi: 'प्रिज़्म विक्षेपण (VIBGYOR)', en: 'Single Prism Dispersion' },
              { id: 'recombine', hi: 'न्यूटन द्वि-प्रिज़्म पुनर्योजन', en: 'Newton 2-Prism White Light' },
              { id: 'scatter', hi: 'टिंडल व कण आकार प्रकीर्णन', en: 'Particle Size & Sky Colour' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setOpticsMode(m.id)}
                className={`rounded-lg px-2.5 py-1.5 ${opticsMode === m.id ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-300'}`}
              >
                {hi ? m.hi : m.en}
              </button>
            ))}
          </div>

          {opticsMode === 'prism' && (
            <svg viewBox="0 0 460 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
              <polygon points="180,22 110,142 250,142" fill="#0ea5e922" stroke="#38bdf8" strokeWidth="2.4" />
              <text x="180" y="16" textAnchor="middle" fontSize="10" fontWeight="900" fill="#fbbf24">∠A (Prism Angle)</text>
              <line x1="25" y1="98" x2="144" y2="84" stroke="#f8fafc" strokeWidth="3" />
              <text x="58" y="82" fontSize="9.5" fontWeight="800" fill="#f8fafc">{hi ? 'श्वेत प्रकाश (PE)' : 'White Light PE'}</text>
              {[
                { c: '#ef4444', dy1: 82, dy2: 74, label: 'R — Red (Min ∠D)' },
                { c: '#f97316', dy1: 85, dy2: 86, label: '' },
                { c: '#eab308', dy1: 88, dy2: 98, label: '' },
                { c: '#22c55e', dy1: 91, dy2: 110, label: '' },
                { c: '#38bdf8', dy1: 94, dy2: 122, label: '' },
                { c: '#6366f1', dy1: 97, dy2: 134, label: '' },
                { c: '#a855f7', dy1: 100, dy2: 146, label: 'V — Violet (Max ∠D)' },
              ].map((r, idx) => (
                <g key={idx}>
                  <line x1="144" y1="84" x2={212 + idx * 1.4} y2={r.dy1} stroke={r.c} strokeWidth="2" />
                  <line x1={212 + idx * 1.4} y1={r.dy1} x2="345" y2={r.dy2} stroke={r.c} strokeWidth="2.4" />
                  {r.label && <text x="352" y={r.dy2 + 3} fontSize="9.2" fontWeight="900" fill={r.c}>{r.label}</text>}
                </g>
              ))}
              <text x="230" y="158" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#2dd4bf">
                {hi ? 'अपवर्तित किरण सदैव प्रिज़्म के आधार की ओर मुड़ती है • लाल λ सर्वाधिक → विचलन सबसे कम!' : 'Rays ALWAYS bend toward prism base • Red longest λ → least bend!'}
              </text>
            </svg>
          )}

          {opticsMode === 'recombine' && (
            <svg viewBox="0 0 460 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
              <polygon points="150,32 105,126 195,126" fill="#0ea5e922" stroke="#38bdf8" strokeWidth="2.2" />
              <polygon points="215,32 305,32 260,126" fill="#34d39922" stroke="#34d399" strokeWidth="2.2" />
              <line x1="30" y1="88" x2="124" y2="82" stroke="#f8fafc" strokeWidth="3" />
              <line x1="124" y1="82" x2="176" y2="70" stroke="#ef4444" strokeWidth="2" />
              <line x1="124" y1="82" x2="184" y2="96" stroke="#a855f7" strokeWidth="2" />
              <line x1="176" y1="70" x2="236" y2="62" stroke="#ef4444" strokeWidth="2" />
              <line x1="184" y1="96" x2="246" y2="96" stroke="#a855f7" strokeWidth="2" />
              <line x1="236" y1="62" x2="282" y2="80" stroke="#ef4444" strokeWidth="2" />
              <line x1="246" y1="96" x2="282" y2="80" stroke="#a855f7" strokeWidth="2" />
              <line x1="282" y1="80" x2="415" y2="80" stroke="#f8fafc" strokeWidth="3.5" />
              <rect x="415" y="45" width="10" height="72" fill="#f8fafc" rx="2" />
              <text x="230" y="150" textAnchor="middle" fontSize="9.8" fontWeight="800" fill="#fbbf24">
                {hi ? 'दो विपरीत प्रिज़्म (न्यूटन प्रयोग 10.6): दूसरे प्रिज़्म से पुनः एकल श्वेत प्रकाश निकलता है!' : 'Two opposite identical prisms recombine spectrum into a single WHITE beam on screen!'}
              </text>
            </svg>
          )}

          {opticsMode === 'scatter' && (
            <div className="space-y-2.5 text-xs">
              <div className="flex flex-wrap items-center gap-2 rounded-xl bg-slate-800/80 p-2.5">
                {[
                  { id: 1, hi: 'सूक्ष्म वायु कण (नीला आकाश)', en: 'Fine Air Molecules (Blue Sky)' },
                  { id: 2, hi: 'मध्यम कण (लाल/नारंगी)', en: 'Medium Particles (Orange/Red)' },
                  { id: 3, hi: 'अति बड़े कण (श्वेत बादल)', en: 'Giant Drops (White Cloud)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => { setSpaceVacuum(false); setParticleSize(s.id); }}
                    className={`rounded-lg px-2.5 py-1 font-bold ${!spaceVacuum && particleSize === s.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-300'}`}
                  >
                    {hi ? s.hi : s.en}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setSpaceVacuum((v) => !v)}
                  className={`ml-auto rounded-lg px-2.5 py-1 font-bold border ${spaceVacuum ? 'bg-slate-100 text-slate-950 border-white' : 'bg-slate-900 border-slate-700 text-slate-300'}`}
                >
                  {spaceVacuum ? (hi ? 'अंतरिक्ष (वायुमंडल नहीं)' : 'Space: NO Atmosphere') : (hi ? 'अंतरिक्ष मोड देखें' : 'Try Astronaut Mode')}
                </button>
              </div>
              <div className={`rounded-xl p-3 border ${spaceVacuum ? 'bg-black border-slate-600' : particleSize === 1 ? 'bg-sky-950/80 border-sky-500' : particleSize === 2 ? 'bg-orange-950/70 border-orange-500' : 'bg-slate-800 border-slate-400'}`}>
                <div className="font-extrabold text-sm">
                  {spaceVacuum
                    ? (hi ? 'आकाश का रंग: काला (Black — कोई प्रकीर्णन नहीं!)' : 'Sky Colour: BLACK (Zero scattering without atmosphere!)')
                    : particleSize === 1
                    ? (hi ? 'प्रकीर्णित प्रकाश: नीला (कम तरंगदैर्घ्य, लाल λ = 1.8× नीला)' : 'Scattered Light: BLUE (Fine particles scatter shortest visible λ)')
                    : particleSize === 2
                    ? (hi ? 'प्रकीर्णित प्रकाश: अधिक तरंगदैर्घ्य (सूर्योदय रक्‍ताभ / लाल)' : 'Scattered Light: LONGER λ (Orange / Reddish horizon)')
                    : (hi ? 'प्रकीर्णित प्रकाश: श्वेत (अति बड़े कण सभी रंग समान बिखेरते हैं)' : 'Scattered Light: WHITE (Very large drops scatter all wavelengths equally)')}
                </div>
                <div className="text-slate-300 mt-1">
                  {hi
                    ? 'खतरे के सिग्नल सदैव लाल होते हैं क्योंकि कोहरे या धुएँ से लाल रंग का प्रकीर्णन सबसे कम होता है।'
                    : 'Danger signal lights are red because red is least scattered by fog or smoke and stays visible farthest.'}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
