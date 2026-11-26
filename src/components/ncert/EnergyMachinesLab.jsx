import React, { useState } from 'react';
import { Zap, Wrench, Play } from 'lucide-react';

/**
 * Interactive Physics Lab for Class 9 Physics Ch 7:
 * 1. Mechanical Energy Conservation Simulator (Free-Fall / Slide height -> PE + KE swap)
 * 2. Lever & Inclined Plane / Pulley Mechanical Advantage Calculator (Class 1/2/3 + Ramp)
 */
export function EnergyMachinesLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('energy'); // 'energy' | 'machines'

  // Energy Lab state
  const [massKg, setMassKg] = useState(4);
  const [totalH, setTotalH] = useState(20);
  const [dropPct, setDropPct] = useState(50);

  const g = 10;
  const curH = totalH * (1 - dropPct / 100);
  const pe = massKg * g * curH;
  const totalMe = massKg * g * totalH;
  const ke = Math.max(0, totalMe - pe);
  const curV = Math.sqrt((2 * ke) / massKg).toFixed(1);

  // Machine Lab state
  const [effortArm, setEffortArm] = useState(40); // cm
  const [loadArm, setLoadArm] = useState(10); // cm
  const [loadN, setLoadN] = useState(600); // N
  const ma = Math.max(0.1, effortArm / loadArm);
  const neededEffort = (loadN / ma).toFixed(1);

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-[#080E1D] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-amber-300 font-black text-xs sm:text-sm">
          <Zap className="w-4 h-4" />
          <span>
            {hi
              ? 'इंटरैक्टिव ऊर्जा संरक्षण एवं सरल मशीन (MA) लैब'
              : 'Interactive Conservation of Energy & Simple Machine (MA) Lab'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700/60">
          <button
            type="button"
            onClick={() => setTab('energy')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition ${
              tab === 'energy' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5 inline mr-1" />
            {hi ? 'PE ↔ KE ऊर्जा' : 'PE ↔ KE Drop'}
          </button>
          <button
            type="button"
            onClick={() => setTab('machines')}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition ${
              tab === 'machines' ? 'bg-cyan-500 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 inline mr-1" />
            {hi ? 'उत्तोलक यांत्रिक लाभ' : 'Lever MA Sim'}
          </button>
        </div>
      </div>

      {tab === 'energy' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5 rounded-xl bg-slate-950/90 border border-slate-800 p-3">
              <svg viewBox="0 0 240 200" className="w-full h-auto">
                <line x1="40" y1="20" x2="40" y2="175" stroke="#475569" strokeWidth="2" />
                <line x1="25" y1="175" x2="215" y2="175" stroke="#64748b" strokeWidth="3" />
                <text x="15" y="100" fill="#94a3b8" fontSize="10" transform="rotate(-90 15 100)">
                  Height {totalH} m
                </text>
                {/* Drop trail */}
                <line x1="125" y1="28" x2="125" y2="165" stroke="#fbbf24" strokeDasharray="3 3" strokeWidth="1.5" />
                <circle
                  cx="125"
                  cy={28 + (dropPct / 100) * 135}
                  r="12"
                  fill="#38bdf8"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="145" y={32 + (dropPct / 100) * 135} fill="#fbbf24" fontSize="10.5" fontWeight="bold">
                  h = {curH.toFixed(1)} m
                </text>
                <text x="145" y={46 + (dropPct / 100) * 135} fill="#34d399" fontSize="10.5" fontWeight="bold">
                  v = {curV} m/s
                </text>
              </svg>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <label className="flex justify-between text-xs font-bold text-slate-200">
                  <span>{hi ? 'गिरने का चरण (Drop Progress)' : 'Drop Position'}</span>
                  <span className="text-cyan-300">{dropPct}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={dropPct}
                  onChange={(e) => setDropPct(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <label className="text-[11px] font-bold text-slate-300">
                    Mass m = {massKg} kg
                    <input type="range" min="1" max="20" step="1" value={massKg} onChange={(e) => setMassKg(Number(e.target.value))} className="w-full accent-amber-400" />
                  </label>
                  <label className="text-[11px] font-bold text-slate-300">
                    Start Height H = {totalH} m
                    <input type="range" min="5" max="50" step="5" value={totalH} onChange={(e) => setTotalH(Number(e.target.value))} className="w-full accent-emerald-400" />
                  </label>
                </div>
              </div>

              <div className="space-y-2 bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                <div className="text-xs font-bold flex justify-between text-amber-300">
                  <span>PE = mgh</span>
                  <span>{pe.toFixed(0)} J</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 transition-all" style={{ width: `${(pe / totalMe) * 100}%` }} />
                </div>
                <div className="text-xs font-bold flex justify-between text-cyan-300 pt-1">
                  <span>KE = ½mv²</span>
                  <span>{ke.toFixed(0)} J</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 transition-all" style={{ width: `${(ke / totalMe) * 100}%` }} />
                </div>
                <div className="text-[11px] font-black text-emerald-300 pt-1 flex items-center justify-between">
                  <span>{hi ? 'कुल यांत्रिक ऊर्जा (PE + KE)' : 'Total Mechanical Energy'}</span>
                  <span>{totalMe.toFixed(0)} J (Constant!)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-3">
            <svg viewBox="0 0 420 130" className="w-full h-auto">
              <line x1="40" y1="68" x2="380" y2="68" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
              <polygon
                points={`${40 + (loadArm / (loadArm + effortArm)) * 340},70 ${28 + (loadArm / (loadArm + effortArm)) * 340},98 ${52 + (loadArm / (loadArm + effortArm)) * 340},98`}
                fill="#fbbf24"
              />
              <text x="55" y="46" fill="#fb7185" fontSize="11" fontWeight="bold">
                Load = {loadN} N
              </text>
              <text x="310" y="46" fill="#34d399" fontSize="11" fontWeight="bold">
                Effort = {neededEffort} N
              </text>
              <text x="210" y="118" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
                Load Arm d₂ = {loadArm} cm | Effort Arm d₁ = {effortArm} cm → MA = {ma.toFixed(2)}
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[11px] font-bold text-slate-400">{hi ? 'भार भुजा (Load Arm d₂)' : 'Load Arm d₂ (cm)'}</div>
              <input type="range" min="5" max="40" step="5" value={loadArm} onChange={(e) => setLoadArm(Number(e.target.value))} className="w-full accent-rose-400 mt-1" />
              <div className="text-sm font-black text-rose-300">{loadArm} cm</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[11px] font-bold text-slate-400">{hi ? 'आयास भुजा (Effort Arm d₁)' : 'Effort Arm d₁ (cm)'}</div>
              <input type="range" min="10" max="80" step="5" value={effortArm} onChange={(e) => setEffortArm(Number(e.target.value))} className="w-full accent-emerald-400 mt-1" />
              <div className="text-sm font-black text-emerald-300">{effortArm} cm</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-center text-center">
              <div className="text-[11px] font-bold text-cyan-300">MA = d₁ / d₂</div>
              <div className="text-lg font-black text-white">{ma.toFixed(2)}× {ma >= 1 ? (hi ? '(कम बल!)' : '(Force Gain)') : ''}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
