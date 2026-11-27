import React, { useState } from 'react';
import { Magnet, Compass, ShieldAlert } from 'lucide-react';

const SHAPES = [
  { key: 'straight', en: 'Straight Wire', hi: 'सीधा तार (Concentric)' },
  { key: 'loop', en: 'Circular Loop (n Turns)', hi: 'वृत्ताकार पाश (n फेरे)' },
  { key: 'solenoid', en: 'Solenoid + Soft Iron', hi: 'परिनालिका + नर्म लोहा' },
];

const FLEMING_CASES = [
  {
    key: 'rod',
    en: 'Act 12.7 Al Rod (B↑, I: B→A)',
    hi: 'क्र. 12.7 Al छड़ (क्षेत्र ↑, धारा B→A)',
    field: { en: 'Vertically UPWARDS (N below, S above)', hi: 'ऊर्ध्वाधर ऊपर (उपरिमुखी)' },
    chargeCurrent: { en: 'Current from B to A (toward viewer/front)', hi: 'धारा सिरे B से A की ओर' },
    force: { en: 'Displaced LEFTWARDS (max at 90°!)', hi: 'बाईं दिशा में विस्थापन (90° पर अधिकतम बल!)' },
  },
  {
    key: 'electron',
    en: 'Ex 12.2 Electron Enters ⊥ B',
    hi: 'उदा. 12.2 इलेक्ट्रॉन लंबवत प्रवेश',
    field: { en: 'Rightwards across page (B →)', hi: 'दाईं ओर (क्षैतिज)' },
    chargeCurrent: { en: 'Electron moves DOWN → Conventional I flows UPWARDS ↑ (opposite!)', hi: 'इलेक्ट्रॉन नीचे ↓ तो पारंपरिक धारा ऊपर ↑ (विपरीत दिशा!)' },
    force: { en: 'INTO the page (NCERT Ex 12.2 Answer d!)', hi: 'कागज़ में भीतर की ओर (उदा. 12.2 सही उत्तर d!)' },
  },
  {
    key: 'alpha',
    en: 'p.225 Q3 Alpha (+) West → North',
    hi: 'पृ.225 Q3 अल्फा (+) पश्चिम → उत्तर',
    field: { en: 'Thumb Force=North, Middle I=West → Forefinger points UPWARDS (d)!', hi: 'अँगूठा=उत्तर, मध्यमा=पश्चिम (+) → तर्जनी क्षेत्र उपरिमुखी (d)!' },
    chargeCurrent: { en: 'Positive α-particle Westwards → Conventional I also Westwards!', hi: 'धनावेशित अल्फा-कण पश्चिम दिशा = धारा दिशा पश्चिम!' },
    force: { en: 'Deflected NORTHWARDS (given in NCERT p.225 Q3)', hi: 'उत्तर की ओर विक्षेप (पृ. 225 Q3)' },
  },
];

export function MagneticEffectsDomesticLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('field');
  const [shape, setShape] = useState('solenoid');
  const [currentAmp, setCurrentAmp] = useState(4);
  const [turns, setTurns] = useState(10);
  const [softIron, setSoftIron] = useState(true);
  const [reversed, setReversed] = useState(false);

  const [fCaseIdx, setFCaseIdx] = useState(1);

  const [circuitRating, setCircuitRating] = useState(5);
  const [ovenOn, setOvenOn] = useState(true);
  const [geyserOn, setGeyserOn] = useState(false);
  const [bulbFanOn, setBulbFanOn] = useState(true);
  const [shortFault, setShortFault] = useState(false);

  const totalWatts = (bulbFanOn ? 175 : 0) + (ovenOn ? 2000 : 0) + (geyserOn ? 3000 : 0);
  const loadAmp = shortFault ? 120 : +(totalWatts / 220).toFixed(2);
  const isTripped = loadAmp > circuitRating;

  const strengthRel =
    shape === 'straight'
      ? currentAmp
      : shape === 'loop'
      ? currentAmp * turns
      : currentAmp * turns * (softIron ? 8 : 1);

  return (
    <div className="rounded-3xl bg-[#070E1D] border border-cyan-500/35 p-4 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm sm:text-base font-black text-cyan-300 flex items-center gap-2">
          <Magnet className="w-4 h-4 text-amber-400" />
          <span>{hi ? 'इंटरैक्टिव विद्युत-चुंबकत्व व घरेलू परिपथ सिम्युलेटर (Ch 12)' : 'Interactive Electromagnetism, Fleming Rule & 220V Circuit Lab'}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'field', en: 'Field & Solenoid', hi: 'क्षेत्र व परिनालिका' },
            { id: 'fleming', en: 'Fleming Left-Hand', hi: 'फ्लेमिंग वामहस्त' },
            { id: 'domestic', en: '220V Fuse & Safety', hi: '220V फ्यूज सुरक्षा' },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`px-3 py-1 rounded-xl text-xs font-black border cursor-pointer transition-all ${
                tab === b.id ? 'bg-cyan-400 text-slate-950 border-cyan-200' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              {hi ? b.hi : b.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'field' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5 items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {SHAPES.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setShape(s.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                    shape === s.key ? 'bg-emerald-400 text-slate-950 border-emerald-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                  }`}
                >
                  {hi ? s.hi : s.en}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setReversed((r) => !r)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                reversed ? 'bg-rose-500/25 border-rose-400 text-rose-200' : 'bg-slate-900 border-slate-700 text-amber-300'
              }`}
            >
              {hi ? `धारा दिशा: ${reversed ? 'उत्क्रमित ⇄' : 'सामान्य →'}` : `Current: ${reversed ? 'REVERSED ⇄' : 'Forward →'}`}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-950/85 border border-slate-800">
            <label className="text-xs font-bold text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span>{hi ? 'धारा (I A):' : 'Current I (A):'}</span>
                <span className="text-cyan-300 font-black">{currentAmp} A (B ∝ I)</span>
              </div>
              <input type="range" min="1" max="10" value={currentAmp} onChange={(e) => setCurrentAmp(+e.target.value)} className="w-full accent-cyan-400" />
            </label>
            {shape !== 'straight' && (
              <label className="text-xs font-bold text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span>{hi ? 'फेरों की संख्या (n):' : 'Number of Turns (n):'}</span>
                  <span className="text-amber-300 font-black">{turns} ({turns}× B!)</span>
                </div>
                <input type="range" min="1" max="20" value={turns} onChange={(e) => setTurns(+e.target.value)} className="w-full accent-amber-400" />
              </label>
            )}
            {shape === 'solenoid' && (
              <label className="sm:col-span-2 flex items-center gap-2 text-xs font-black text-emerald-300 cursor-pointer">
                <input type="checkbox" checked={softIron} onChange={(e) => setSoftIron(e.target.checked)} className="accent-emerald-400 w-4 h-4" />
                <span>{hi ? 'भीतर मृदु लोहे (Soft Iron) का क्रोड डालें (विद्युत चुंबक — प्रबलता कई गुना बढ़ी!)' : 'Insert Soft Iron Core inside Solenoid (Electromagnet boosts uniform B!)'}</span>
              </label>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/35 space-y-1.5 text-xs sm:text-sm">
            <div className="flex flex-wrap justify-between gap-2 font-black text-emerald-300">
              <span>{hi ? `सापेक्ष क्षेत्र तीव्रता संकेतक: ${strengthRel} इकाई` : `Relative Field Strength Index: ${strengthRel} units`}</span>
              <span className="text-amber-300 flex items-center gap-1">
                <Compass className="w-4 h-4" />
                {shape === 'solenoid'
                  ? hi ? (reversed ? 'ध्रुव पलटे: बायाँ S | दायाँ N' : 'बायाँ N | दायाँ S (भीतर समांतर सरल = एकसमान!)') : (reversed ? 'Poles Flipped: Left S | Right N' : 'Left N | Right S (Inside = Uniform Parallel!)')
                  : shape === 'loop'
                  ? hi ? (reversed ? 'केंद्र क्षेत्र बाहर की ओर • वृत सरल' : 'केंद्र क्षेत्र भीतर की ओर • सभी फेरे जुड़ें') : (reversed ? 'Centre Field OUT • All turns add!' : 'Centre Field IN • All n turns add!')
                  : hi ? (reversed ? 'संकेंद्री वृत्त दिशा उत्क्रमित!' : 'तार पर केंद्रित संकेंद्री वृत्त (दक्षिण-हस्त नियम)') : (reversed ? 'Concentric circle direction REVERSED!' : 'Concentric circles centred on wire!')}
              </span>
            </div>
            <p className="text-slate-300 text-xs">
              {hi
                ? 'NCERT नियम: धारा बढ़ने पर क्षेत्र बढ़ेगा, दूरी बढ़ने पर क्षेत्र घटेगा, और धारा दिशा पलटने पर चुंबकीय ध्रुव / क्षेत्र दिशा तुरंत उलट जाती है!'
                : 'NCERT Law: B increases with I & turns n, decreases as distance r rises, and reverses instantly when current direction is reversed!'}
            </p>
          </div>
        </div>
      )}

      {tab === 'fleming' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {FLEMING_CASES.map((fc, i) => (
              <button
                key={fc.key}
                type="button"
                onClick={() => setFCaseIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === fCaseIdx ? 'bg-violet-400 text-slate-950 border-violet-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? fc.hi : fc.en}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
            <div className="p-3.5 rounded-2xl bg-cyan-950/35 border border-cyan-500/40">
              <div className="font-black text-cyan-300 mb-1">{hi ? 'तर्जनी = चुंबकीय क्षेत्र (B)' : 'Forefinger = Field (B)'}</div>
              <p className="text-slate-100">{FLEMING_CASES[fCaseIdx].field[hi ? 'hi' : 'en']}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-950/35 border border-emerald-500/40">
              <div className="font-black text-emerald-300 mb-1">{hi ? 'मध्यमा = विद्युत धारा (I)' : 'Middle Finger = Current (I)'}</div>
              <p className="text-slate-100">{FLEMING_CASES[fCaseIdx].chargeCurrent[hi ? 'hi' : 'en']}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-950/35 border border-rose-500/40">
              <div className="font-black text-rose-300 mb-1">{hi ? 'अँगूठा = बल / गति (F)' : 'Thumb = Force (F)'}</div>
              <p className="text-slate-100 font-bold">{FLEMING_CASES[fCaseIdx].force[hi ? 'hi' : 'en']}</p>
            </div>
          </div>
        </div>
      )}

      {tab === 'domestic' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex gap-1.5">
              {[5, 15].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setCircuitRating(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                    circuitRating === r ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                  }`}
                >
                  {r} A {r === 5 ? (hi ? '(बल्ब/पंखा)' : '(Lighting)') : (hi ? '(पावर/गीज़र)' : '(Power)')}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShortFault((s) => !s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                shortFault ? 'bg-rose-500 text-white border-rose-300' : 'bg-slate-900 text-rose-300 border-rose-500/40'
              }`}
            >
              {hi ? (shortFault ? '⚡ लघुपथन सक्रिय (Live+Neutral स्पर्श!)' : 'लघुपथन परीक्षण (Live+Neutral टच)') : (shortFault ? '⚡ SHORT CIRCUIT ACTIVE!' : 'Simulate Short Circuit')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 cursor-pointer text-slate-200 font-bold">
              <input type="checkbox" checked={bulbFanOn} onChange={(e) => setBulbFanOn(e.target.checked)} className="accent-cyan-400" />
              <span>{hi ? 'बल्ब + पंखा (175 W)' : 'Bulb + Fan (175 W)'}</span>
            </label>
            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 cursor-pointer text-amber-200 font-bold">
              <input type="checkbox" checked={ovenOn} onChange={(e) => setOvenOn(e.target.checked)} className="accent-amber-400" />
              <span>{hi ? '2 kW तंदूर (पृ.227 Q2 = 9.09 A)' : '2 kW Oven (p.227 Q2 = 9.09 A)'}</span>
            </label>
            <label className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 cursor-pointer text-rose-200 font-bold">
              <input type="checkbox" checked={geyserOn} onChange={(e) => setGeyserOn(e.target.checked)} className="accent-rose-400" />
              <span>{hi ? '3 kW गीज़र (13.64 A)' : '3 kW Geyser (13.64 A)'}</span>
            </label>
          </div>

          <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm ${isTripped ? 'bg-rose-950/45 border-rose-400 text-rose-100' : 'bg-emerald-950/35 border-emerald-500/40 text-emerald-100'}`}>
            <div className="flex items-center gap-2 font-black">
              <ShieldAlert className={`w-5 h-5 ${isTripped ? 'text-rose-400' : 'text-emerald-400'}`} />
              <span>
                {hi
                  ? `कुल धारा I = P/220V = ${loadAmp} A (सीमा ${circuitRating} A)`
                  : `Total Current I = P/220V = ${loadAmp} A (Rating ${circuitRating} A)`}
              </span>
            </div>
            <div className="font-black">
              {isTripped
                ? hi ? '🔥 अतिभारण/लघुपथन → फ्यूज जूल तापन से पिघलकर परिपथ सुरक्षित तोड़ेगा!' : '🔥 OVERLOAD / SHORT → Fuse melts via Joule heat breaking circuit safely!'
                : hi ? '✓ सामान्य परिपथ (220 V, 50 Hz; लाल Live, काला Neutral, हरा Earth सुरक्षित)' : '✓ SAFE CIRCUIT (220V 50Hz Parallel; Red Live, Black Neutral, Green Earth)'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MagneticEffectsDomesticLabSVG;
