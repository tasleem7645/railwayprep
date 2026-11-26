import React, { useState } from 'react';

export function ForcesMotionLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('fbd');

  // Tab 1: Net Force, Friction & F = ma
  const [pushF, setPushF] = useState(55);
  const [frictionF, setFrictionF] = useState(50);
  const [massKg, setMassKg] = useState(25);

  const netF = pushF > frictionF ? pushF - frictionF : 0;
  const accel = netF / massKg;
  const dist2s = 0.5 * accel * 4;

  // Tab 2: Impulse Safety Cushion (F * dt = m * v)
  const [impactVel, setImpactVel] = useState(30);
  const [cushioned, setCushioned] = useState(true);
  const ballMass = 0.2;
  const deltaP = ballMass * impactVel;
  const dt = cushioned ? 0.6 : 0.04;
  const peakForce = deltaP / dt;

  // Tab 3: Coupled System (m1 + m2)
  const [m1, setM1] = useState(12);
  const [m2, setM2] = useState(8);
  const [pullF, setPullF] = useState(60);
  const sysAccel = pullF / (m1 + m2);
  const tensionT = m2 * sysAccel;
  const a1Solo = pullF / m1;
  const a2Solo = pullF / m2;

  return (
    <div className="my-5 rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
            {hi ? 'इंटरैक्टिव बल व न्यूटन लैब (NCERT 6.2–6.7)' : 'Interactive Forces & Newton Simulator (NCERT 6.2–6.7)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'परिणामी बल, घर्षण, आवेग सुरक्षा एवं दो-पिंड तनाव प्रयोगशाला' : 'Net Force FBD, Impulse Safety Cushion & Two-Body System Lab'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'fbd', label: hi ? 'बल व घर्षण (F=ma)' : 'Net Force & FBD' },
            { id: 'impulse', label: hi ? 'आवेग सुरक्षा (F·Δt)' : 'Impulse & Airbag' },
            { id: 'coupled', label: hi ? 'जुड़ा निकाय तनाव (T)' : 'Two-Body System (T)' },
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

      {tab === 'fbd' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 text-xs text-slate-200">
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'प्रयुक्त बल (F)' : 'Applied Force (F)'}</span>
                <span className="text-emerald-300">{pushF} N</span>
              </div>
              <input type="range" min="10" max="120" step="5" value={pushF} onChange={(e) => setPushF(Number(e.target.value))} className="mt-1 w-full accent-emerald-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'सीमांत घर्षण (f)' : 'Max Friction (f)'}</span>
                <span className="text-rose-300">{frictionF} N</span>
              </div>
              <input type="range" min="10" max="100" step="5" value={frictionF} onChange={(e) => setFrictionF(Number(e.target.value))} className="mt-1 w-full accent-rose-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'गुटका द्रव्यमान (m)' : 'Block Mass (m)'}</span>
                <span className="text-amber-300">{massKg} kg</span>
              </div>
              <input type="range" min="5" max="50" step="5" value={massKg} onChange={(e) => setMassKg(Number(e.target.value))} className="mt-1 w-full accent-amber-400" />
            </label>
          </div>

          <svg viewBox="0 0 600 175" className="w-full rounded-xl bg-slate-950/90 border border-slate-800">
            <defs>
              <marker id="labG" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="#34D399" /></marker>
              <marker id="labR" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="#FB7185" /></marker>
              <marker id="labB" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="#38BDF8" /></marker>
            </defs>
            <line x1="30" y1="125" x2="570" y2="125" stroke="#475569" strokeWidth="3" />
            <line x1="250" y1="68" x2="250" y2="24" stroke="#38BDF8" strokeWidth="2.4" markerEnd="url(#labB)" />
            <text x="260" y="34" fontSize="11" fontWeight="700" fill="#7DD3FC">N = {(massKg * 9.8).toFixed(0)} N</text>
            <line x1="250" y1="126" x2="250" y2="164" stroke="#A78BFA" strokeWidth="2.4" markerEnd="url(#labR)" />
            <text x="260" y="160" fontSize="11" fontWeight="700" fill="#C4B5FD">mg = {(massKg * 9.8).toFixed(0)} N</text>

            <rect x="206" y="70" width="88" height="53" rx="8" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" />
            <text x="250" y="101" textAnchor="middle" fontSize="13" fontWeight="800" fill="#F8FAFC">{massKg} kg</text>

            <line x1="204" y1="108" x2={204 - Math.min(115, frictionF * 0.9)} y2="108" stroke="#FB7185" strokeWidth="3" markerEnd="url(#labR)" />
            <text x="145" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FDA4AF">f = {Math.min(pushF, frictionF)} N</text>

            <line x1="296" y1="95" x2={296 + Math.min(130, pushF * 0.95)} y2="95" stroke="#34D399" strokeWidth="3.2" markerEnd="url(#labG)" />
            <text x="360" y="83" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6EE7B7">F = {pushF} N</text>

            <text x="580" y="28" textAnchor="end" fontSize="11" fontWeight="800" fill={netF > 0 ? '#34D399' : '#FBBF24'}>
              {netF > 0 ? (hi ? `असंतुलित! F_net = ${netF} N` : `UNBALANCED! F_net = ${netF} N`) : (hi ? 'संतुलित (F_net = 0 -> स्थिर!)' : 'BALANCED (F_net = 0 -> At Rest!)')}
            </text>
            <text x="580" y="48" textAnchor="end" fontSize="11" fontWeight="700" fill="#E2E8F0">
              a = {accel.toFixed(2)} m/s²  |  s(2s) = {dist2s.toFixed(2)} m
            </text>
          </svg>
          <p className="text-xs text-cyan-200/90">
            {hi
              ? `NCERT उदा. 6.5 Preset (F=55 N, f=50 N, m=25 kg): परिणामी बल 5 N से त्वरण 0.20 m/s² तथा 2 सेकंड में विस्थापन 0.40 m प्राप्त होता है!`
              : `NCERT Example 6.5 Check (F=55 N, f=50 N, m=25 kg): Net force 5 N yields a = 0.20 m/s² and s = ½at² = 0.40 m in 2 s!`}
          </p>
        </div>
      )}

      {tab === 'impulse' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
            <label className="flex-1 min-w-[200px] rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold">
                <span>{hi ? 'गेंद चाल (0.2 kg)' : 'Ball Speed (0.2 kg)'}</span>
                <span className="text-cyan-300">{impactVel} m/s</span>
              </div>
              <input type="range" min="10" max="50" step="5" value={impactVel} onChange={(e) => setImpactVel(Number(e.target.value))} className="mt-1 w-full accent-cyan-400" />
            </label>
            <button
              type="button"
              onClick={() => setCushioned((c) => !c)}
              className={`rounded-xl px-4 py-3 text-xs font-extrabold transition ${
                cushioned ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
              }`}
            >
              {cushioned
                ? hi ? 'मोड: हाथ पीछे खींचना / एयरबैग (Δt = 0.60 s ✓)' : 'Mode: Follow-Through / Airbag (Δt = 0.60 s ✓)'
                : hi ? 'मोड: कठोर सतह / बिना एयरबैग (Δt = 0.04 s ⚠)' : 'Mode: Rigid Stop / Concrete (Δt = 0.04 s ⚠)'}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-2.5">
              <div className="text-[11px] text-slate-400">{hi ? 'संवेग परिवर्तन (Δp)' : 'Momentum Change (Δp)'}</div>
              <div className="text-base font-extrabold text-cyan-300">{deltaP.toFixed(1)} kg·m/s</div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-2.5">
              <div className="text-[11px] text-slate-400">{hi ? 'संपर्क समय (Δt)' : 'Impact Time (Δt)'}</div>
              <div className="text-base font-extrabold text-amber-300">{dt.toFixed(2)} s</div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-2.5">
              <div className="text-[11px] text-slate-400">{hi ? 'प्रहार बल (F = Δp/Δt)' : 'Peak Impact Force (F)'}</div>
              <div className={`text-base font-extrabold ${cushioned ? 'text-emerald-400' : 'text-rose-400'}`}>{peakForce.toFixed(1)} N</div>
            </div>
          </div>
          <p className="text-xs text-slate-300">
            {hi
              ? `दोनों स्थितियों में संवेग परिवर्तन Δp (${deltaP.toFixed(1)} N·s) बराबर है! समय 15× बढ़ाने (0.04 → 0.60 s) से चोट लगाने वाला बल सीधे 15× कम हो जाता है (एयरबैग, फोम गद्दा, क्रिकेट कैच)।`
              : `Same Δp (${deltaP.toFixed(1)} N·s) in both cases! Extending stopping time Δt 15× (0.04 -> 0.60 s) slashes dangerous peak force by 15×!`}
          </p>
        </div>
      )}

      {tab === 'coupled' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 text-xs text-slate-200">
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold"><span>m₁ (Harrow)</span><span className="text-cyan-300">{m1} kg</span></div>
              <input type="range" min="4" max="30" step="2" value={m1} onChange={(e) => setM1(Number(e.target.value))} className="mt-1 w-full accent-cyan-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold"><span>m₂ (Trolley)</span><span className="text-amber-300">{m2} kg</span></div>
              <input type="range" min="4" max="30" step="2" value={m2} onChange={(e) => setM2(Number(e.target.value))} className="mt-1 w-full accent-amber-400" />
            </label>
            <label className="rounded-xl bg-slate-800/70 p-2.5">
              <div className="flex justify-between font-bold"><span>{hi ? 'बाह्य बल (F)' : 'External F'}</span><span className="text-emerald-300">{pullF} N</span></div>
              <input type="range" min="20" max="120" step="10" value={pullF} onChange={(e) => setPullF(Number(e.target.value))} className="mt-1 w-full accent-emerald-400" />
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="rounded-xl bg-slate-950 p-2 border border-slate-800">
              <div className="text-slate-400">{hi ? 'संयुक्त त्वरण a' : 'System Accel a'}</div>
              <div className="text-sm font-extrabold text-emerald-300">{sysAccel.toFixed(2)} m/s²</div>
            </div>
            <div className="rounded-xl bg-slate-950 p-2 border border-slate-800">
              <div className="text-slate-400">{hi ? 'डोरी तनाव T = m₂a' : 'Tension T = m₂a'}</div>
              <div className="text-sm font-extrabold text-amber-300">{tensionT.toFixed(1)} N</div>
            </div>
            <div className="rounded-xl bg-slate-950 p-2 border border-slate-800">
              <div className="text-slate-400">{hi ? 'अकेला a₁ = F/m₁' : 'Solo a₁ = F/m₁'}</div>
              <div className="text-sm font-extrabold text-cyan-300">{a1Solo.toFixed(2)} m/s²</div>
            </div>
            <div className="rounded-xl bg-slate-950 p-2 border border-slate-800">
              <div className="text-slate-400">{hi ? 'Ex 15 सूत्र: a₁a₂/(a₁+a₂)' : 'Ex 15 Check'}</div>
              <div className="text-sm font-extrabold text-purple-300">{((a1Solo * a2Solo) / (a1Solo + a2Solo)).toFixed(2)} m/s²</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
