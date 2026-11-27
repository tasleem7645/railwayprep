import React, { useState } from 'react';
import { Flame, FlaskConical, ShieldCheck, Layers } from 'lucide-react';

const REACTIVITY_ITEMS = [
  { sym: 'K', en: 'Potassium', hi: 'पोटैशियम', water: { en: 'Cold H₂O (violent fire!)', hi: 'ठंडे जल में तुरंत आग!' }, acid: { en: 'Explosive + dil. HCl', hi: 'तनु HCl संग विस्फोटक' }, extract: { en: 'Electrolysis of molten KCl', hi: 'गलित लवण विद्युत-अपघटन' }, col: 'rose' },
  { sym: 'Na', en: 'Sodium', hi: 'सोडियम', water: { en: 'Cold H₂O (H₂ catches fire)', hi: 'ठंडे जल में H₂ जल उठती है' }, acid: { en: 'Knife-soft, stored in Kerosene', hi: 'चाकू से कटे, किरोसिन में रखा' }, extract: { en: 'Cathode: Na⁺ + e⁻ → Na', hi: 'कैथोड पर गलित NaCl अपघटन' }, col: 'rose' },
  { sym: 'Ca', en: 'Calcium', hi: 'कैल्सियम', water: { en: 'Cold H₂O (slower; H₂ sticks → floats!)', hi: 'ठंडा जल (H₂ बुलबुलों से तैरे!)' }, acid: { en: 'Bubbles H₂ with dil. HCl', hi: 'तनु HCl संग H₂ गैस दे' }, extract: { en: 'Electrolysis of molten CaCl₂', hi: 'गलित CaCl₂ विद्युत-अपघटन' }, col: 'amber' },
  { sym: 'Mg', en: 'Magnesium', hi: 'मैग्नीशियम', water: { en: 'Hot H₂O only (H₂ sticks → floats!)', hi: 'गर्म जल (H₂ से तैरता है!)' }, acid: { en: 'Very dil. HNO₃ gives H₂ (with Mn)!', hi: 'अति तनु HNO₃ संग भी H₂ दे!' }, extract: { en: 'Electrolysis of molten MgCl₂', hi: 'गलित MgCl₂ विद्युत-अपघटन' }, col: 'amber' },
  { sym: 'Al', en: 'Aluminium', hi: 'ऐलुमिनियम', water: { en: 'Steam only → Al₂O₃ + 3H₂', hi: 'केवल भाप → Al₂O₃ + 3H₂' }, acid: { en: 'Amphoteric Al₂O₃ + Anodising', hi: 'उभयधर्मी Al₂O₃ + एनोडीकरण' }, extract: { en: 'Electrolysis of molten Al₂O₃', hi: 'बॉक्साइट (Al₂O₃) विद्युत-अपघटन' }, col: 'teal' },
  { sym: 'Zn', en: 'Zinc', hi: 'जिंक', water: { en: 'Steam only → ZnO + H₂', hi: 'केवल भाप → ZnO + H₂' }, acid: { en: 'Amphoteric ZnO • Galvanisation', hi: 'उभयधर्मी ZnO • यशदलेपन धातु' }, extract: { en: 'Roast ZnS / Calcine ZnCO₃ + C', hi: 'भर्जन (ZnS) / निस्तापन (ZnCO₃) + C' }, col: 'teal' },
  { sym: 'Fe', en: 'Iron', hi: 'आयरन', water: { en: 'Steam → Fe₃O₄ + 4H₂', hi: 'भाप → Fe₃O₄ + 4H₂' }, acid: { en: 'Moist air + H₂O → brown rust', hi: 'हवा + नमी → भूरा जंग' }, extract: { en: 'Thermite: Fe₂O₃ + 2Al → 2Fe(l)', hi: 'कार्बन या थर्मिट (Fe₂O₃+2Al) रेल जोड़' }, col: 'cyan' },
  { sym: 'Cu', en: 'Copper', hi: 'कॉपर', water: { en: 'NO reaction even with steam!', hi: 'भाप या जल से कोई क्रिया नहीं!' }, acid: { en: 'NO H₂ with dil. HCl! Black CuO', hi: 'तनु HCl संग H₂ नहीं • काला CuO' }, extract: { en: 'Air roast Cu₂S + Electrorefining', hi: 'Cu₂S स्वतः अपचयन + Cu शोधन' }, col: 'violet' },
  { sym: 'Hg / Au', en: 'Mercury / Gold', hi: 'पारा / सोना', water: { en: 'NO reaction with water/steam', hi: 'जल/भाप से कोई अभिक्रिया नहीं' }, acid: { en: 'Au/Pt dissolve ONLY in Aqua Regia (3:1)', hi: 'Au/Pt केवल एक्वा रेजिया (3 HCl:1 HNO₃)' }, extract: { en: 'HgS (Cinnabar) heated in air • Au native', hi: 'सिनाबार (HgS) तापन • सोना स्वतंत्र' }, col: 'emerald' },
];

const METALLURGY_MODES = {
  low: {
    en: 'Low Tier: Cinnabar (HgS) & Copper Sulphide (Cu₂S)',
    hi: 'निम्न श्रेणी: सिनाबार (HgS) व कॉपर सल्फाइड (Cu₂S)',
    eq: '2HgS + 3O₂ —Δ→ 2HgO + 2SO₂  |  2HgO —Δ→ 2Hg(l) + O₂',
    note: {
      en: 'Only air heating reduces oxides of low-reactivity Hg & Cu cleanly without Carbon!',
      hi: 'कम अभिक्रियाशील Hg व Cu के ऑक्साइड केवल गरम करने मात्र से धातु में अपचयित हो जाते हैं!',
    },
  },
  roast: {
    en: 'Medium Sulphide: Roasting (Excess Air)',
    hi: 'मध्यम सल्फाइड अयस्क: भर्जन (Roasting — अधिक वायु)',
    eq: '2ZnS(s) + 3O₂(g) —Δ→ 2ZnO(s) + 2SO₂(g)  |  ZnO + C → Zn + CO',
    note: {
      en: 'Sulphide ores burn in EXCESS O₂ emitting SO₂ before Carbon reduction.',
      hi: 'सल्फाइड अयस्क को वायु की अधिकता में अधिक ताप पर ऑक्साइड में बदलना भर्जन है।',
    },
  },
  calcine: {
    en: 'Medium Carbonate: Calcination (Limited Air)',
    hi: 'मध्यम कार्बोनेट अयस्क: निस्तापन (Calcination — सीमित वायु)',
    eq: 'ZnCO₃(s) —Δ→ ZnO(s) + CO₂(g)  |  ZnO + C → Zn + CO',
    note: {
      en: 'Carbonate ores decompose in LIMITED air releasing CO₂ gas!',
      hi: 'कार्बोनेट अयस्क को सीमित वायु में अधिक ताप पर ऑक्साइड में बदलना निस्तापन है।',
    },
  },
  thermite: {
    en: 'Thermite Welding (Railway Track Repair)',
    hi: 'थर्मिट अभिक्रिया (रेल पटरी व मशीनी पुर्जे जोड़ना)',
    eq: 'Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Intense Heat!',
    note: {
      en: 'Highly exothermic displacement by Al produces molten liquid Iron (Fe(l)) to weld cracked rails!',
      hi: 'अत्यधिक ऊष्माक्षेपी विस्थापन से लोहा गलित (Fe(l)) अवस्था में निकलता है, जिससे रेल पटरी जुड़ती है!',
    },
  },
  high: {
    en: 'Top Tier: Electrolytic Reduction of Molten NaCl / Al₂O₃',
    hi: 'उच्च श्रेणी (K–Al): गलित क्लोराइड / बॉक्साइट विद्युत-अपघटन',
    eq: 'Cathode (−): Na⁺ + e⁻ → Na(l)   |   Anode (+): 2Cl⁻ → Cl₂(g) + 2e⁻',
    note: {
      en: 'Carbon cannot reduce Na/Mg/Ca/Al because these metals hold higher affinity for O₂ than C!',
      hi: 'Na, Mg, Ca, Al की O₂ के प्रति बंधुता कार्बन से अधिक होने से इन्हें विद्युत-अपघटन से प्राप्त करते हैं!',
    },
  },
  refine: {
    en: 'Electrolytic Refining of Copper (Cu)',
    hi: 'ताँबे का वैद्युतअपघटनी परिष्करण (Anode Mud)',
    eq: 'Anode (+ Impure Cu) → Cu²⁺(aq) → Cathode (− Pure Cu strip)',
    note: {
      en: 'Electrolyte = Acidified CuSO₄. Insoluble Au/Ag settle under Anode as ANODE MUD!',
      hi: 'विद्युत-अपघट्य = अम्लीकृत CuSO₄। अविलेय अशुद्धियाँ (Au/Ag आदि) एनोड तली पर एनोड पंक बनाती हैं!',
    },
  },
};

const ALLOYS = [
  { key: 'steel', name: { en: 'Iron + 0.05% C / Stainless Steel', hi: 'इस्पात (0.05% C) / स्टेनलेस स्टील' }, mix: 'Fe + Ni + Cr (+ C)', desc: { en: 'Pure iron is too soft/stretchy when hot; adding ~0.05% C strengthens it, while Ni + Cr makes hard rust-proof Stainless Steel!', hi: 'शुद्ध लोहा नरम होता है; ~0.05% C से कठोर बनता है तथा Ni + Cr मिलाने पर जंग-रोधी स्टेनलेस इस्पात बनता है!' } },
  { key: 'brass', name: { en: 'Brass (पीतल)', hi: 'पीतल (Brass)' }, mix: 'Cu + Zn', desc: { en: 'Copper + Zinc alloy; lower electrical conductivity and melting point than pure Copper.', hi: 'ताँबा + जस्ता की मिश्रातु; शुद्ध ताँबे की तुलना में विद्युत चालकता व गलनांक कम।' } },
  { key: 'bronze', name: { en: 'Bronze (काँसा)', hi: 'काँसा (Bronze)' }, mix: 'Cu + Sn', desc: { en: 'Copper + Tin alloy; hard corrosion-resistant bell/statue metal, poor electrical conductor.', hi: 'ताँबा + टिन की मिश्रातु; कठोर, संक्षारण-रोधी परंतु विद्युत का कुचालक।' } },
  { key: 'solder', name: { en: 'Solder (सोल्डर)', hi: 'सोल्डर (टाँका)' }, mix: 'Pb + Sn', desc: { en: 'Lead + Tin alloy with a VERY LOW melting point -> ideal for welding electrical wires!', hi: 'सीसा + टिन की मिश्रातु, गलनांक अत्यंत कम → विद्युत तारों की परस्पर वेल्डिंग हेतु!' } },
  { key: 'gold22', name: { en: '22-Carat Gold vs 24K', hi: '22 कैरेट बनाम 24 कैरेट सोना' }, mix: '22 Au + 2 Cu / Ag', desc: { en: 'Pure 24K Gold is too soft for jewellery; alloying 22 parts Au with 2 parts Silver/Copper hardens it!', hi: '24 कैरेट शुद्ध सोना अत्यंत नरम है; भारत में आभूषण हेतु 22 भाग सोने में 2 भाग ताँबा/चाँदी मिलाते हैं!' } },
  { key: 'amalgam', name: { en: 'Amalgam (अमलगम)', hi: 'अमलगम (Amalgam)' }, mix: 'Metal + Hg (Mercury)', desc: { en: 'If one metal constituent in any alloy is Mercury (पारद), the alloy is called an Amalgam!', hi: 'यदि किसी मिश्रातु में एक धातु पारद (Hg) हो, तो उसे अमलगम कहते हैं!' } },
];

export function MetalsReactivityMetallurgyLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('series');
  const [metalIdx, setMetalIdx] = useState(6); // Fe default
  const [metMode, setMetMode] = useState('thermite');
  const [tube, setTube] = useState('A');
  const [alloyKey, setAlloyKey] = useState('brass');

  const selMetal = REACTIVITY_ITEMS[metalIdx];
  const selMet = METALLURGY_MODES[metMode];
  const selAlloy = ALLOYS.find((a) => a.key === alloyKey) || ALLOYS[0];

  return (
    <div className="rounded-3xl bg-[#070E1D] border border-cyan-500/35 p-4 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm sm:text-base font-black text-cyan-300 flex items-center gap-2">
          <FlaskConical className="w-4 h-4 text-amber-400" />
          <span>{hi ? 'इंटरैक्टिव धातु-अधातु, सक्रियता, थर्मिट & मिश्रातु प्रयोगशाला' : 'Interactive Metals, Reactivity Series, Thermite & Alloys Lab'}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'series', en: 'Reactivity + Water/Acid', hi: 'सक्रियता व जल/अम्ल' },
            { id: 'metallurgy', en: 'Roast/Calcine/Thermite', hi: 'भर्जन/निस्तापन/थर्मिट' },
            { id: 'rust_alloy', en: 'Rust Tubes & Alloys', hi: 'जंग नलियाँ व मिश्रातु' },
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

      {tab === 'series' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {REACTIVITY_ITEMS.map((item, idx) => (
              <button
                key={item.sym}
                type="button"
                onClick={() => setMetalIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  idx === metalIdx ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-slate-900 text-slate-200 border-slate-700 hover:border-amber-400/50'
                }`}
              >
                {item.sym} ({hi ? item.hi : item.en})
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <div className="text-[11px] font-black text-cyan-300 uppercase mb-1">{hi ? 'जल / भाप अभिक्रिया' : 'Water / Steam Action'}</div>
              <div className="text-sm font-bold text-white">{selMetal.water[hi ? 'hi' : 'en']}</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-[11px] font-black text-amber-300 uppercase mb-1">{hi ? 'अम्ल / विशिष्ट NCERT तथ्य' : 'Acid / Exam Trap Fact'}</div>
              <div className="text-sm font-bold text-white">{selMetal.acid[hi ? 'hi' : 'en']}</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-[11px] font-black text-emerald-300 uppercase mb-1">{hi ? 'निष्कर्षण विधि (3.4)' : 'Metallurgy Method'}</div>
              <div className="text-sm font-bold text-white">{selMetal.extract[hi ? 'hi' : 'en']}</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'metallurgy' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(METALLURGY_MODES).map(([k, v]) => (
              <button
                key={k}
                type="button"
                onClick={() => setMetMode(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  metMode === k ? 'bg-emerald-400 text-slate-950 border-emerald-200' : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                {hi ? v.hi : v.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/35 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-black">
              <Flame className="w-4 h-4 shrink-0" />
              <span>{hi ? selMet.hi : selMet.en}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 font-mono text-xs sm:text-sm text-cyan-200 font-bold overflow-x-auto">
              {selMet.eq}
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selMet.note[hi ? 'hi' : 'en']}</p>
          </div>
        </div>
      )}

      {tab === 'rust_alloy' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-slate-800 space-y-2.5">
            <div className="text-xs font-black text-rose-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{hi ? 'क्रियाकलाप 3.14 (जंग परीक्षण नलियाँ A / B / C)' : 'Activity 3.14 Rust Test Tubes (Tap A / B / C)'}</span>
            </div>
            <div className="flex gap-2">
              {['A', 'B', 'C'].map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTube(id)}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                    tube === id ? 'bg-rose-500 text-white border-rose-300' : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}
                >
                  {hi ? `परखनली ${id}` : `Tube ${id}`}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
              {tube === 'A' && (hi ? '🔴 नली A (जल + वायु दोनों): लोहे की कीलों पर जंग लगता है क्योंकि ऑक्सीजन और नमी दोनों मौजूद हैं!' : '🔴 Tube A (Water + Air): Iron nails RUST because both O₂ and moisture are present!')}
              {tube === 'B' && (hi ? '🟢 नली B (उबला आसुत जल + 1 mL तेल): तेल हवा को पानी में घुलने से रोकता है → केवल जल होने से जंग नहीं लगता!' : '🟢 Tube B (Boiled distilled H₂O + 1 mL oil): Oil blocks dissolved O₂ → Water alone causes NO rust!')}
              {tube === 'C' && (hi ? '🟢 नली C (शुष्क वायु + निर्जल CaCl₂): निर्जल CaCl₂ नमी सोख लेता है (शुष्क कर्मक) → केवल वायु में जंग नहीं लगता!' : '🟢 Tube C (Anhydrous CaCl₂ drying agent): Absorbs all moisture → Dry air alone causes NO rust!')}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/85 border border-slate-800 space-y-2.5">
            <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>{hi ? 'मिश्रातु संग्राहक (Alloys + Amalagam + 22K)' : 'Alloy Mixer (Composition + Exam Edge)'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ALLOYS.map((a) => (
                <button
                  key={a.key}
                  type="button"
                  onClick={() => setAlloyKey(a.key)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black border cursor-pointer ${
                    alloyKey === a.key ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}
                >
                  {hi ? a.name.hi : a.name.en}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-xs font-black text-emerald-300">{selAlloy.mix}</div>
              <div className="text-xs sm:text-sm text-slate-200">{selAlloy.desc[hi ? 'hi' : 'en']}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MetalsReactivityMetallurgyLabSVG;
