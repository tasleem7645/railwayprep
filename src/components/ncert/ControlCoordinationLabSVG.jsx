import React, { useState } from 'react';
import { Brain, Sun, Activity } from 'lucide-react';

const BRAIN_ZONES = [
  { key: 'fore', en: 'Forebrain (Cerebrum & Hunger)', hi: 'अग्रमस्तिष्क (प्रमस्तिष्क व भूख केंद्र)', note: { en: 'Main thinking part of brain; separate sensory areas (hearing, smell, sight) + association areas storing memories + separate hunger/fullness centre + motor instructions for voluntary muscles.', hi: 'मस्तिष्क का मुख्य सोचने वाला भाग! सुनने, सूँघने, देखने व स्मृति के अलग केंद्र, पेट भरा होने/भूख का अलग केंद्र तथा ऐच्छिक पेशियों को आदेश देना!' } },
  { key: 'cerebellum', en: 'Hindbrain: Cerebellum', hi: 'पश्चमस्तिष्क: अनुमस्तिष्क (Cerebellum)', note: { en: 'Responsible for precision of voluntary actions and maintaining POSTURE and BALANCE of the body — e.g. walking in a straight line, riding a bicycle, picking up a pencil (p.116–117 Q3).', hi: 'ऐच्छिक क्रियाओं की परिशुद्धि व शरीर की संस्थिति व संतुलन बनाए रखना — जैसे सीधी रेखा में चलना, साइकिल चलाना, पेंसिल उठाना (पृ. 117 Q3)!' } },
  { key: 'medulla', en: 'Hindbrain: Medulla (Tech Shift 11 & 21)', hi: 'पश्चमस्तिष्क: मेडुला (मध्यांश)', note: { en: 'Controls INVOLUNTARY actions including Blood Pressure, Salivation, and Vomiting — NOT voluntary cycling/walking or hearing sensation (Tech Shifts 11 & 21 PYQs)!', hi: 'रक्तदाब (BP), लार आना और वमन जैसी अनैच्छिक क्रियाओं का नियंत्रण (परंतु साइकिल चलाना या सुनना इसके नियंत्रण में नहीं — Tech Shifts 11, 21)!' } },
  { key: 'reflex', en: 'Spinal Cord: Reflex Arc', hi: 'मेरुरज्जु: प्रतिवर्ती चाप (Reflex Arc)', note: { en: 'Sudden protective responses bypassing slow brain thinking (`Sensory Nerve → Spinal Cord Relay → Motor Nerve → Effector Muscle`); input info still reaches brain simultaneously (`p.114`).', hi: 'गर्म वस्तु से तुरंत हाथ हटाना — ग्राही → संवेदी न्यूरॉन → मेरुरज्जु → प्रेरक न्यूरॉन → कार्यकर पेशी (तीव्र रक्षा हेतु मेरुरज्जु में बने, संदेश मस्तिष्क तक भी जाए)!' } },
];

const HORMONE_LIST = [
  { key: 'auxin', en: 'Auxin (Tip & Shade)', hi: 'ऑक्सिन (शीर्ष व छाया)', desc: { en: 'Synthesised at shoot tip; helps cells grow LONGER (`Tech Shift 10`). One-sided light diffuses Auxin to the SHADED side -> shaded cells elongate faster -> plant bends TOWARD light!', hi: 'प्ररोह के अग्रभाग में संश्लेषण → कोशिकाओं की लंबाई बढ़ाए! एक ओर से प्रकाश पर छाया वाले भाग में विसरित हो उसे लंबा कर पौधे को प्रकाश की ओर मोड़ता है।' } },
  { key: 'gib', en: 'Gibberellin', hi: 'जिब्बेरेलिन (तना वृद्धि)', desc: { en: 'Like Auxin, promotes growth of the STEM (`p.120`). Works alongside growth-promoting phytohormones.', hi: 'ऑक्सिन की तरह ही तने की वृद्धि में सहायक प्रमुख पादप हार्मोन!' } },
  { key: 'cyto', en: 'Cytokinin (Ex Q1!)', hi: 'साइटोकाइनिन (कोशिका विभाजन)', desc: { en: 'Promotes CELL DIVISION; concentrated highest in areas of rapid division especially FRUITS and SEEDS (`NCERT Ex Q1d: Cytokinin is the ONLY plant hormone among options!`).', hi: 'कोशिका विभाजन को प्रेरित करता है — फलों और बीजों में अधिक सांद्रता! (`अभ्यास Q1 का एकमात्र पादप हार्मोन!`)' } },
  { key: 'aba', en: 'Abscisic Acid (ABA Inhibitor)', hi: 'एब्सिसिक अम्ल (संदमन / रोधक)', desc: { en: 'GROWTH-INHIBITING plant hormone! Effects include WILTING OF LEAVES (`opposite to Auxin/Gibberellin/Cytokinin`).', hi: 'पादप वृद्धि का संदमन (रोकने) करने वाला हार्मोन — इसके प्रभावों में पत्तियों का मुरझाना सम्मिलित है!' } },
];

export function ControlCoordinationLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('neuron_brain');
  const [brainIdx, setBrainIdx] = useState(1);
  const [hIdx, setHIdx] = useState(0);
  const [lightSide, setLightSide] = useState('left');
  const [sugarMg, setSugarMg] = useState(180);

  const sugarStatus =
    sugarMg > 140
      ? { en: 'HIGH Blood Sugar → Pancreas detects rise -> Secretes MORE Insulin -> Blood Sugar drops!', hi: 'उच्च रक्त शर्करा → अग्न्याशय संसूचित कर अधिक इंसुलिन स्रावित करता → शर्करा घटती है!', c: 'border-rose-400 bg-rose-950/35 text-rose-100' }
      : sugarMg < 80
      ? { en: 'LOW Blood Sugar → Negative feedback slows/stops Pancreas Insulin secretion!', hi: 'निम्न रक्त शर्करा → पुनर्भरण क्रियाविधि अग्न्याशय से इंसुलिन स्रवण स्वतः कम करती है!', c: 'border-amber-400 bg-amber-950/35 text-amber-100' }
      : { en: 'NORMAL Blood Sugar (~90–120 mg/dL) → Balanced steady basal Insulin output!', hi: 'सामान्य शर्करा स्तर → अग्न्याशय द्वारा संतुलित इंसुलिन नियमन!', c: 'border-emerald-400 bg-emerald-950/35 text-emerald-100' };

  return (
    <div className="rounded-3xl bg-[#070E1D] border border-violet-500/35 p-4 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm sm:text-base font-black text-violet-300 flex items-center gap-2">
          <Brain className="w-4 h-4 text-amber-400" />
          <span>{hi ? 'इंटरैक्टिव तंत्रिका, पादप अनुवर्तन व हार्मोन प्रयोगशाला (Ch 6)' : 'Interactive Brain, Auxin Phototropism & Endocrine Feedback Lab'}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'neuron_brain', en: 'Brain & Reflex', hi: 'मस्तिष्क व प्रतिवर्ती', icon: Brain },
            { id: 'plant', en: 'Auxin & 4 Phytohormones', hi: 'ऑक्सिन व 4 पादप हार्मोन', icon: Sun },
            { id: 'endocrine', en: 'Insulin Feedback & Glands', hi: 'इंसुलिन पुनर्भरण व ग्रंथियाँ', icon: Activity },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`px-3 py-1 rounded-xl text-xs font-black border cursor-pointer transition-all ${
                tab === b.id ? 'bg-violet-400 text-slate-950 border-violet-200' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-violet-500/50'
              }`}
            >
              {hi ? b.hi : b.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'neuron_brain' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {BRAIN_ZONES.map((z, i) => (
              <button
                key={z.key}
                type="button"
                onClick={() => setBrainIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === brainIdx ? 'bg-cyan-400 text-slate-950 border-cyan-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? z.hi : z.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-cyan-500/35 space-y-1.5">
            <div className="text-xs sm:text-sm font-black text-cyan-300">{hi ? BRAIN_ZONES[brainIdx].hi : BRAIN_ZONES[brainIdx].en}</div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">{BRAIN_ZONES[brainIdx].note[hi ? 'hi' : 'en']}</p>
            <div className="text-xs font-bold text-amber-300 pt-1">
              {hi ? 'न्यूरॉन क्रम: द्रुमिका → कोशिकाकाय → तंत्रिकाक्ष → सिनेप्स (रसायन) → अगली द्रुमिका!' : 'Neuron Relay: Dendrite → Cell Body → Axon → Axon End (Chem Synapse) → Next Dendrite!'}
            </div>
          </div>
        </div>
      )}

      {tab === 'plant' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex gap-1.5">
              {['left', 'top', 'right'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setLightSide(s)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                    lightSide === s ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                  }`}
                >
                  {s === 'left' ? (hi ? 'प्रकाश बाईं ओर से' : 'Light: Left') : s === 'top' ? (hi ? 'प्रकाश ऊपर से' : 'Light: Overhead') : (hi ? 'प्रकाश दाईं ओर से' : 'Light: Right')}
                </button>
              ))}
            </div>
            <span className="text-xs font-black text-emerald-300">
              {lightSide === 'left'
                ? hi ? 'ऑक्सिन दाएँ (छाया में) जमा → प्ररोह बाईं ओर मुड़ेगा!' : 'Auxin shifts RIGHT (shaded) -> Shoot bends LEFT toward sun!'
                : lightSide === 'right'
                ? hi ? 'ऑक्सिन बाएँ (छाया में) जमा → प्ररोह दाईं ओर मुड़ेगा!' : 'Auxin shifts LEFT (shaded) -> Shoot bends RIGHT toward sun!'
                : hi ? 'समान वितरण → प्ररोह सीधा ऊपर बढ़ेगा!' : 'Equal Auxin distribution -> Straight upright stem growth!'}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {HORMONE_LIST.map((h, i) => (
              <button
                key={h.key}
                type="button"
                onClick={() => setHIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === hIdx ? 'bg-emerald-400 text-slate-950 border-emerald-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? h.hi : h.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-emerald-500/35 text-xs sm:text-sm text-slate-100">
            <strong className="text-emerald-300 block mb-1">{hi ? HORMONE_LIST[hIdx].hi : HORMONE_LIST[hIdx].en}</strong>
            {HORMONE_LIST[hIdx].desc[hi ? 'hi' : 'en']}
          </div>
        </div>
      )}

      {tab === 'endocrine' && (
        <div className="space-y-3">
          <label className="block p-3.5 rounded-2xl bg-slate-950/85 border border-slate-800 space-y-1.5 text-xs font-bold text-slate-300">
            <div className="flex justify-between">
              <span>{hi ? 'रक्त शर्करा स्तर स्लाइडर (पुनर्भरण क्रियाविधि — पृ. 122):' : 'Blood Glucose Level Slider (Feedback Loop — p.122):'}</span>
              <span className="text-emerald-300 font-black">{sugarMg} mg/dL</span>
            </div>
            <input type="range" min="60" max="240" step="10" value={sugarMg} onChange={(e) => setSugarMg(+e.target.value)} className="w-full accent-emerald-400" />
          </label>
          <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold ${sugarStatus.c}`}>
            {hi ? sugarStatus.hi : sugarStatus.en}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              <span className="font-black text-cyan-300 block">{hi ? 'थाइरॉइड + आयोडीन:' : 'Thyroid + Iodine:'}</span>
              {hi ? 'थाइरॉक्सिन (कार्बोहाइड्रेट, प्रोटीन, वसा उपापचय); आयोडीन कमी → गॉयटर / घेंघा।' : 'Thyroxine needs Iodine (`carb/protein/fat metabolism`); lack -> Goitre (`swollen neck`).'}
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              <span className="font-black text-rose-300 block">{hi ? 'अधिवृक्क (एड्रीनलीन):' : 'Adrenal (Adrenaline):'}</span>
              {hi ? 'सीधे रक्त में स्रवण → हृदय धड़कन व श्वसन दर बढ़ाए, कंकाल पेशियों की ओर अधिक रुधिर भेजे।' : 'Blood-borne -> raises heart rate & breathing, diverts gut/skin blood to skeletal muscles!'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ControlCoordinationLabSVG;
