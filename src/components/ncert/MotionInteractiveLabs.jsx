import React, { useState, useMemo } from 'react';
import { Activity, Compass, Calculator, Play } from 'lucide-react';

/**
 * Interactive Physics Lab for Class 9 NCERT Ch 4: Describing Motion Around Us.
 * Covers:
 *  1. Position-Time (x-t) & Velocity-Time (v-t) Graph Explorer (Slope + Area Under Curve)
 *  2. Kinematic Equations & Free-Fall / Braking Stopping-Distance Simulator
 */
export function MotionSimulatorLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('graphs'); // 'graphs' | 'kinematics'

  // Tab 1 State: Graph presets
  const [graphPreset, setGraphPreset] = useState('accel'); // 'rest' | 'uniform' | 'accel' | 'brake'
  const [probeT, setProbeT] = useState(6);

  const presets = {
    rest: {
      en: 'At Rest (x = 40 m)',
      hi: 'विरामावस्था (x = 40 m)',
      u: 0,
      a: 0,
      x0: 40,
      tMax: 10,
      badge: { en: 'v = 0, a = 0', hi: 'वेग = 0, त्वरण = 0' },
      color: '#fbbf24',
    },
    uniform: {
      en: 'Uniform Velocity (10 m/s)',
      hi: 'एकसमान वेग (10 m/s)',
      u: 10,
      a: 0,
      x0: 0,
      tMax: 10,
      badge: { en: 'a = 0, s = 10t', hi: 'त्वरण = 0, समतल v-t' },
      color: '#38bdf8',
    },
    accel: {
      en: 'Uniform Accel (u=2, a=+2 m/s²)',
      hi: 'नियत त्वरण (u=2, a=+2 m/s²)',
      u: 2,
      a: 2,
      x0: 0,
      tMax: 10,
      badge: { en: 'a = +2 m/s² (Slope ↑)', hi: 'a = +2 m/s² (बढ़ता वेग)' },
      color: '#34d399',
    },
    brake: {
      en: 'Braking Retardation (u=20, a=−2)',
      hi: 'ब्रेक मंदन (u=20, a=−2 m/s²)',
      u: 20,
      a: -2,
      x0: 0,
      tMax: 10,
      badge: { en: 'a = −2 m/s² (Stops @ 10s)', hi: 'a = −2 m/s² (10s पर विराम)' },
      color: '#fb7185',
    },
  };

  const p = presets[graphPreset];

  const simData = useMemo(() => {
    const ptsXT = [];
    const ptsVT = [];
    const maxV = 24;
    const maxX = 130;

    for (let t = 0; t <= 10; t += 0.5) {
      const vRaw = Math.max(0, p.u + p.a * t);
      const xRaw = p.x0 + p.u * t + 0.5 * p.a * t * t;
      ptsXT.push({ t, x: xRaw });
      ptsVT.push({ t, v: vRaw });
    }

    const vAtT = Math.max(0, p.u + p.a * probeT);
    const xAtT = p.x0 + p.u * probeT + 0.5 * p.a * probeT * probeT;
    const dispAtT = p.u * probeT + 0.5 * p.a * probeT * probeT;

    const mapX = (t) => 42 + (t / 10) * 240;
    const mapY_X = (x) => 165 - Math.min(x / maxX, 1.05) * 130;
    const mapY_V = (v) => 165 - Math.min(v / maxV, 1.05) * 130;

    const polyXT = ptsXT.map((pt) => `${mapX(pt.t).toFixed(1)},${mapY_X(pt.x).toFixed(1)}`).join(' ');
    const polyVT = ptsVT.map((pt) => `${mapX(pt.t).toFixed(1)},${mapY_V(pt.v).toFixed(1)}`).join(' ');

    const areaPts = ptsVT.filter((pt) => pt.t <= probeT);
    const areaPoly = areaPts.length
      ? `${mapX(0)},165 ${areaPts.map((pt) => `${mapX(pt.t).toFixed(1)},${mapY_V(pt.v).toFixed(1)}`).join(' ')} ${mapX(probeT).toFixed(1)},165`
      : '';

    return { vAtT, xAtT, dispAtT, polyXT, polyVT, areaPoly, mapX, mapY_X, mapY_V };
  }, [p, probeT]);

  // Tab 2 State: Kinematic Calculator Presets
  const [uVal, setUVal] = useState(15); // m/s (54 km/h)
  const [aVal, setAVal] = useState(2);
  const [tVal, setTVal] = useState(5);

  const kinV = (uVal + aVal * tVal).toFixed(1);
  const kinS = (uVal * tVal + 0.5 * aVal * tVal * tVal).toFixed(1);
  const kinVavg = ((uVal + Number(kinV)) / 2).toFixed(1);

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-[#080E1D] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-cyan-300 font-black text-xs sm:text-sm">
          <Activity className="w-4 h-4" />
          <span>
            {hi
              ? 'इंटरैक्टिव गति ग्राफ (x-t व v-t) एवं शुद्धगतिक समीकरण लैब'
              : 'Interactive Motion Graph (x-t & v-t) & Kinematic Equations Lab'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700/60">
          <button
            type="button"
            onClick={() => setTab('graphs')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition ${
              tab === 'graphs' ? 'bg-cyan-500 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5 inline mr-1" />
            {hi ? 'x-t व v-t ग्राफ' : 'x-t & v-t Graphs'}
          </button>
          <button
            type="button"
            onClick={() => setTab('kinematics')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition ${
              tab === 'kinematics' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 inline mr-1" />
            {hi ? 'समीकरण सॉल्वर' : 'Equation Solver'}
          </button>
        </div>
      </div>

      {tab === 'graphs' ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(presets).map(([k, item]) => (
              <button
                key={k}
                type="button"
                onClick={() => setGraphPreset(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                  graphPreset === k
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                    : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {item[hi ? 'hi' : 'en']}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Position-Time SVG */}
            <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-3">
              <div className="text-[11px] font-bold text-amber-300 mb-1">
                {hi ? 'स्थिति-समय ग्राफ (Slope = वेग)' : 'Position-Time Graph (Slope = Velocity)'}
              </div>
              <svg viewBox="0 0 300 195" className="w-full h-auto">
                <line x1="42" y1="165" x2="290" y2="165" stroke="#475569" strokeWidth="1.6" />
                <line x1="42" y1="20" x2="42" y2="165" stroke="#475569" strokeWidth="1.6" />
                <polyline fill="none" stroke={p.color} strokeWidth="2.8" points={simData.polyXT} />
                <line
                  x1={simData.mapX(probeT)}
                  y1="25"
                  x2={simData.mapX(probeT)}
                  y2="165"
                  stroke="#94a3b8"
                  strokeDasharray="3 3"
                />
                <circle
                  cx={simData.mapX(probeT)}
                  cy={simData.mapY_X(simData.xAtT)}
                  r="5"
                  fill="#ffffff"
                  stroke={p.color}
                  strokeWidth="2.5"
                />
                <text x="165" y="186" textAnchor="middle" fill="#94a3b8" fontSize="10">
                  {hi ? 'समय t (सेकंड)' : 'Time t (seconds)'}
                </text>
                <text x="15" y="95" fill="#94a3b8" fontSize="10" transform="rotate(-90 15 95)">
                  x (m)
                </text>
              </svg>
            </div>

            {/* Velocity-Time SVG with shaded Area */}
            <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-3">
              <div className="text-[11px] font-bold text-emerald-300 mb-1">
                {hi ? 'वेग-समय ग्राफ (छायांकित क्षेत्रफल = विस्थापन)' : 'Velocity-Time Graph (Shaded Area = Displacement)'}
              </div>
              <svg viewBox="0 0 300 195" className="w-full h-auto">
                <line x1="42" y1="165" x2="290" y2="165" stroke="#475569" strokeWidth="1.6" />
                <line x1="42" y1="20" x2="42" y2="165" stroke="#475569" strokeWidth="1.6" />
                {simData.areaPoly && <polygon points={simData.areaPoly} fill={p.color} opacity="0.25" />}
                <polyline fill="none" stroke={p.color} strokeWidth="2.8" points={simData.polyVT} />
                <circle
                  cx={simData.mapX(probeT)}
                  cy={simData.mapY_V(simData.vAtT)}
                  r="5"
                  fill="#ffffff"
                  stroke={p.color}
                  strokeWidth="2.5"
                />
                <text x="165" y="186" textAnchor="middle" fill="#94a3b8" fontSize="10">
                  {hi ? `समय t = ${probeT} s (क्षेत्रफल s = ${simData.dispAtT.toFixed(1)} m)` : `t = ${probeT} s (Area s = ${simData.dispAtT.toFixed(1)} m)`}
                </text>
                <text x="15" y="95" fill="#94a3b8" fontSize="10" transform="rotate(-90 15 95)">
                  v (m/s)
                </text>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/70 border border-slate-800 rounded-xl p-3">
            <label className="flex items-center gap-3 text-xs font-bold text-slate-200 flex-1 min-w-[210px]">
              <span>t = {probeT} s</span>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={probeT}
                onChange={(e) => setProbeT(Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </label>
            <div className="flex flex-wrap gap-2 text-xs font-black">
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                x = {simData.xAtT.toFixed(1)} m
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                v = {simData.vAtT.toFixed(1)} m/s
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                s (Area) = {simData.dispAtT.toFixed(1)} m
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              { label: hi ? 'राजमार्ग बस (उदा. 4.3)' : 'Bus (+0.5 m/s²)', u: 10, a: 0.5, t: 10 },
              { label: hi ? 'ब्रेक टेस्ट (54 km/h)' : 'Brake 54 km/h (-4)', u: 15, a: -4, t: 3.75 },
              { label: hi ? 'ब्रेक टेस्ट (108 km/h → 4× s!)' : 'Brake 108 km/h (4× s!)', u: 30, a: -4, t: 7.5 },
              { label: hi ? 'मुक्त पतन (g = 9.8, 3s)' : 'Free Fall (g=9.8, 3s)', u: 0, a: 9.8, t: 3 },
            ].map((pr, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setUVal(pr.u);
                  setAVal(pr.a);
                  setTVal(pr.t);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-xs font-bold text-slate-200 flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 text-emerald-400" />
                {pr.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-bold">{hi ? 'आरंभिक वेग u (m/s)' : 'Initial Velocity u (m/s)'}</div>
              <input type="range" min="0" max="40" step="1" value={uVal} onChange={(e) => setUVal(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
              <div className="text-sm font-black text-cyan-300 mt-0.5">{uVal} m/s ({(uVal * 3.6).toFixed(0)} km/h)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-bold">{hi ? 'त्वरण a (m/s²)' : 'Acceleration a (m/s²)'}</div>
              <input type="range" min="-10" max="12" step="0.2" value={aVal} onChange={(e) => setAVal(Number(e.target.value))} className="w-full accent-amber-400 mt-1" />
              <div className="text-sm font-black text-amber-300 mt-0.5">{aVal} m/s²</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-bold">{hi ? 'समय अंतराल t (s)' : 'Time t (s)'}</div>
              <input type="range" min="1" max="15" step="0.5" value={tVal} onChange={(e) => setTVal(Number(e.target.value))} className="w-full accent-emerald-400 mt-1" />
              <div className="text-sm font-black text-emerald-300 mt-0.5">{tVal} s</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
              <div className="text-[11px] text-cyan-300 font-bold">v = u + at</div>
              <div className="text-lg font-black text-white mt-0.5">{kinV} m/s</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <div className="text-[11px] text-emerald-300 font-bold">s = ut + ½at²</div>
              <div className="text-lg font-black text-white mt-0.5">{kinS} m</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30">
              <div className="text-[11px] text-amber-300 font-bold">v_avg = (u + v) / 2</div>
              <div className="text-lg font-black text-white mt-0.5">{kinVavg} m/s</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
