import React, { useState } from 'react';

const ROOTS = [
  { c: 1, en: 'Meth', hi: 'मेथ (1C)' },
  { c: 2, en: 'Eth', hi: 'एथ (2C)' },
  { c: 3, en: 'Prop', hi: 'प्रोप (3C)' },
  { c: 4, en: 'But', hi: 'ब्यूट (4C)' },
];

const FAMILIES = [
  { id: 'alkane', labelEn: 'Alkane (C–C)', labelHi: 'ऐल्केन (–ane)', minC: 1 },
  { id: 'alkene', labelEn: 'Alkene (C=C)', labelHi: 'ऐल्कीन (–ene)', minC: 2 },
  { id: 'alkyne', labelEn: 'Alkyne (C≡C)', labelHi: 'ऐल्काइन (–yne)', minC: 2 },
  { id: 'halo', labelEn: 'Chloro (–Cl)', labelHi: 'क्लोरो (–Cl)', minC: 1 },
  { id: 'alcohol', labelEn: 'Alcohol (–OH)', labelHi: 'ऐल्कोहॉल (–ol)', minC: 1 },
  { id: 'aldehyde', labelEn: 'Aldehyde (–CHO)', labelHi: 'ऐल्डिहाइड (–al)', minC: 1 },
  { id: 'ketone', labelEn: 'Ketone (>C=O)', labelHi: 'कीटोन (–one)', minC: 3 },
  { id: 'acid', labelEn: 'Acid (–COOH)', labelHi: 'अम्ल (–oic acid)', minC: 1 },
];

const REACTIONS = [
  {
    id: 'dehydration',
    en: 'Ethanol + Conc. H₂SO₄ @ 443 K',
    hi: 'एथेनॉल + सांद्र H₂SO₄ (443 K)',
    eq: 'CH₃CH₂OH —(Conc. H₂SO₄, 443 K)→ CH₂=CH₂ + H₂O',
    descEn: 'Concentrated H₂SO₄ acts as a dehydrating agent, removing H₂O from ethanol at 443 K (170 °C) to form unsaturated Ethene (6 covalent electron-pair bonds: 4 C–H + 2 C=C)!',
    descHi: 'सांद्र सल्फ्यूरिक अम्ल निर्जलीकारक का कार्य कर 443 K (170 °C) पर एथेनॉल से जल निकालकर असंतृप्त एथीन (C₂H₄) बनाता है — Group D 2025 सर्वाधिक चर्चित प्रश्न!',
  },
  {
    id: 'oxidation',
    en: 'Ethanol + Alk. KMnO₄ + Heat',
    hi: 'एथेनॉल + क्षारीय KMnO₄',
    eq: 'CH₃CH₂OH + 2[O] —(Alk. KMnO₄ / Acid K₂Cr₂O₇ + Δ)→ CH₃COOH + H₂O',
    descEn: 'Hot alkaline KMnO₄ or acidified K₂Cr₂O₇ acts as an Oxidizing Agent (adds oxygen, removes H): purple KMnO₄ fades until ethanol converts completely into Ethanoic acid!',
    descHi: 'क्षारीय KMnO₄ या अम्लीकृत K₂Cr₂O₇ ऑक्सीकारक हैं — प्रारंभ में KMnO₄ का बैंगनी रंग लुप्त होता है और एथेनॉल एथेनॉइक अम्ल में बदल जाता है!',
  },
  {
    id: 'ester_sapon',
    en: 'Esterification ↔ Saponification',
    hi: 'एस्टरीकरण ↔ साबुनीकरण',
    eq: 'CH₃COOH + C₂H₅OH ⇌(Acid / NaOH)⇌ CH₃COOC₂H₅ + H₂O (Soap: + NaOH → CH₃COONa)',
    descEn: 'Acid + Alcohol + trace H₂SO₄ forms sweet-smelling Ester (perfumes/flavoring); heating Ester with NaOH alkali breaks it back to Alcohol + Sodium carboxylate salt (Saponification = Soap making!).',
    descHi: 'अम्ल + एल्कोहॉल से मीठी गंध वाला एस्टर (इत्र) बनता है; एस्टर को NaOH क्षार के साथ उबालने पर पुनः एल्कोहॉल व कार्बोक्सिलेट सोडियम लवण (साबुन) बनता है!',
  },
  {
    id: 'sodium_carb',
    en: 'Alcohol vs Acid (+ Na / + Na₂CO₃)',
    hi: 'एल्कोहॉल बनाम अम्ल जांच',
    eq: '2Na + 2C₂H₅OH → 2C₂H₅ONa + H₂↑  |  CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑',
    descEn: 'BOTH react differently! Ethanol reacts with Na giving pop-sound H₂↑, but does NOT react with Na₂CO₃/NaHCO₃. Ethanoic acid gives brisk CO₂ effervescence (turns lime water milky) & reacts with NaOH.',
    descHi: 'अंतर परीक्षण (In-Text p.82): सोडियम से एथेनॉल H₂↑ देता है, पर Na₂CO₃/NaHCO₃ से बुलबुले (CO₂↑ जो चूने के पानी को दूधिया करे) केवल एथेनॉइक अम्ल देता है!',
  },
  {
    id: 'soap_hard',
    en: 'Soap in Soft vs Hard Water vs Detergent',
    hi: 'साबुन बनाम अपमार्जक (कठोर जल)',
    eq: 'Soap (R–COO⁻Na⁺) + Ca²⁺/Mg²⁺ → Insoluble White Scum!  |  Detergent (-SO₃⁻Na⁺) → Lather ✅',
    descEn: 'In soft water soap forms colloids called Micelles (hydrophobic tail traps oil inward, hydrophilic –COO⁻ head faces water out). Ca²⁺/Mg²⁺ ions in hard water precipitate Soap as Scum; Sulfonate/Ammonium Detergents resist scum!',
    descHi: 'मृदु जल में साबुन मिसेल बनाकर मैल हटाता है, पर कठोर जल के Ca²⁺/Mg²⁺ आयन साबुन संग सफेद दही जैसा स्कम बनाते हैं; सल्फोनेट/अमोनियम अपमार्जक स्कम नहीं बनाते!',
  },
];

export function CarbonAllotropeIupacLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('allotrope'); // 'allotrope' | 'iupac' | 'reactions'
  const [allo, setAllo] = useState('graphite'); // 'diamond' | 'graphite' | 'fullerene'
  const [nC, setNC] = useState(3);
  const [fam, setFam] = useState('alcohol');
  const [rxnId, setRxnId] = useState('dehydration');

  const alloInfo = {
    diamond: {
      nameHi: 'हीरा (Diamond — 3D चतुष्फलकीय जाली)',
      nameEn: 'Diamond (3D Rigid Tetrahedral Lattice)',
      bondHi: 'प्रत्येक C अन्य 4 C से एकल सहसंयोजी आबंधित',
      bondEn: 'Each Carbon bonded to 4 others (`sp³`)',
      elecHi: '❌ विद्युत कुचालक (कोई मुक्त इलेक्ट्रॉन नहीं!)',
      elecEn: '❌ Insulator (zero delocalized electrons!)',
      hardHi: '💎 ज्ञात सर्वाधिक कठोर प्राकृतिक पदार्थ (अपवर्तनांक 2.42)',
      hardEn: '💎 Hardest natural substance (`n = 2.42`, critical angle 24.4°)',
      color: '#38bdf8',
    },
    graphite: {
      nameHi: 'ग्रेफाइट (Graphite — 2D षट्कोणीय फिसलन परतें)',
      nameEn: 'Graphite (2D Sliding Hexagonal Layers)',
      bondHi: 'प्रत्येक C अन्य 3 C से जुड़ा (इनमें एक द्वि-आबंध!)',
      bondEn: 'Each C bonded to 3 C in plane (includes 1 C=C)',
      elecHi: '✅ सुचालक! (चौथा विस्थानीकृत मुक्त इलेक्ट्रॉन धारा ले जाता है)',
      elecEn: '✅ Good Conductor! (4th free electron mobile)',
      hardHi: '✏️ चिकना एवं फिसलनशील (पेंसिल लीड व शुष्क स्नेहक)',
      hardEn: '✏️ Smooth & Slippery (layers slide over each other)',
      color: '#fbbf24',
    },
    fullerene: {
      nameHi: 'फुलेरीन C₆₀ (बकमिंस्टरफुलेरीन फुटबॉल)',
      nameEn: 'Fullerene C₆₀ (Buckminsterfullerene Cage)',
      bondHi: '60 कार्बन परमाणु जियोडेसिक गुंबद में (20 षट्भुज + 12 पंचभुज)',
      bondEn: '60 C atoms arranged as Soccer Ball (`Buckminster Fuller`)',
      elecHi: '⚡ अर्धचालक/विशेष नैनो गुण; दहन पर केवल CO₂ देता है!',
      elecEn: '⚡ All 3 burn in O₂ cleanly to give ONLY CO₂!',
      hardHi: '⚽ बंद पिंजरा अणु (रासायनिक गुण हीरे/ग्रेफाइट समान)',
      hardEn: '⚽ Closed geodesic sphere (identical chemical products)',
      color: '#a855f7',
    },
  }[allo];

  // Dynamic IUPAC compound calculation
  const famObj = FAMILIES.find((f) => f.id === fam) || FAMILIES[0];
  const effC = Math.max(nC, famObj.minC);
  const root = ROOTS[effC - 1];
  const compMap = {
    alkane: { nameEn: `${root.en}ane`, formula: `C${effC > 1 ? effC : ''}H${2 * effC + 2}`, bonds: 3 * effC + 1, typeHi: 'संतृप्त (नीली लौ, Cl₂ प्रतिस्थापन)' },
    alkene: { nameEn: `${root.en}ene`, formula: `C${effC}H${2 * effC}`, bonds: 3 * effC, typeHi: 'असंतृप्त C=C (कज्जली लौ, H₂/Br₂ योगज)' },
    alkyne: { nameEn: `${root.en}yne`, formula: `C${effC}H${2 * effC - 2}`, bonds: 3 * effC - 1, typeHi: 'असंतृप्त C≡C (पीली धुएँदार लौ, तीव्र योगज)' },
    halo: { nameEn: `Chloro${root.en.toLowerCase()}ane`, formula: `C${effC > 1 ? effC : ''}H${2 * effC + 1}Cl`, bonds: 3 * effC + 1, typeHi: 'हैलोजन (–Cl पूर्वलग्न)' },
    alcohol: { nameEn: `${root.en}anol`, formula: `C${effC > 1 ? effC : ''}H${2 * effC + 1}OH`, bonds: 3 * effC + 2, typeHi: 'ऐल्कोहॉल (–ol अनुलग्न; Na से H₂↑)' },
    aldehyde: { nameEn: `${root.en}anal`, formula: effC === 1 ? 'HCHO' : `C${effC - 1 > 1 ? effC - 1 : ''}H${2 * (effC - 1) + 1}CHO`, bonds: 3 * effC + 1, typeHi: 'ऐल्डिहाइड (–CHO, –al; सिर पर जुड़ा!)' },
    ketone: { nameEn: `${root.en}anone`, formula: 'CH₃COCH₃' + (effC === 4 ? ' (Butanone: CH₃COC₂H₅)' : ''), bonds: 3 * effC + 1, typeHi: 'कीटोन (>C=O, –one; 3C से आरंभ!)' },
    acid: { nameEn: `${root.en}anoic acid`, formula: effC === 1 ? 'HCOOH' : `C${effC - 1 > 1 ? effC - 1 : ''}H${2 * (effC - 1) + 1}COOH`, bonds: 3 * effC + 2, typeHi: 'कार्बोक्सिलिक अम्ल (NaHCO₃ से CO₂↑)' },
  }[fam];

  const rxn = REACTIONS.find((r) => r.id === rxnId) || REACTIONS[0];

  return (
    <div className="my-5 rounded-2xl border border-blue-500/30 bg-slate-900/85 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[11px] font-bold text-blue-300">
            {hi ? 'इंटरैक्टिव कार्बन अपररूप, IUPAC नामपद्धति व अभिक्रिया लैब (NCERT 4.1–4.5)' : 'Interactive Carbon Allotropes, IUPAC Nomenclature & Reaction Lab (NCERT 4.1–4.5)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'हीरा-ग्रेफाइट-C₆₀, समजातीय IUPAC बिल्डर व एथेनॉल-एस्टर-मिसेल लैब' : 'Diamond vs Graphite vs C₆₀, Homologous IUPAC Builder & Reaction Studio'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'allotrope', label: hi ? 'अपररूप व बंध' : 'Allotropes' },
            { id: 'iupac', label: hi ? 'IUPAC व श्रृंखला' : 'IUPAC Builder' },
            { id: 'reactions', label: hi ? 'अभिक्रिया व मिसेल' : 'Reactions & Soap' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-blue-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'allotrope' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'diamond', label: hi ? '💎 हीरा (Insulator)' : '💎 Diamond' },
              { id: 'graphite', label: hi ? '✏️ ग्रेफाइट (Conductor!)' : '✏️ Graphite' },
              { id: 'fullerene', label: hi ? '⚽ फुलेरीन C₆₀' : '⚽ Fullerene C₆₀' },
            ].map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setAllo(b.id)}
                className={`rounded-lg px-3 py-1 text-xs font-bold ${
                  allo === b.id ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <svg viewBox="0 0 640 148" className="w-full rounded-xl bg-slate-950/90 border border-slate-800">
            <rect x="14" y="16" width="160" height="116" rx="10" fill="#0f172a" stroke={alloInfo.color} strokeWidth="2" />
            {allo === 'diamond' && (
              <>
                <circle cx="94" cy="74" r="9" fill="#38bdf8" />
                <circle cx="94" cy="36" r="6" fill="#e2e8f0" /><circle cx="52" cy="100" r="6" fill="#e2e8f0" />
                <circle cx="136" cy="100" r="6" fill="#e2e8f0" /><circle cx="94" cy="112" r="6" fill="#e2e8f0" />
                <line x1="94" y1="74" x2="94" y2="36" stroke="#38bdf8" strokeWidth="2.4" />
                <line x1="94" y1="74" x2="52" y2="100" stroke="#38bdf8" strokeWidth="2.4" />
                <line x1="94" y1="74" x2="136" y2="100" stroke="#38bdf8" strokeWidth="2.4" />
                <line x1="94" y1="74" x2="94" y2="112" stroke="#38bdf8" strokeWidth="2.4" />
              </>
            )}
            {allo === 'graphite' && (
              <>
                <polygon points="62,48 94,36 126,48 126,64 94,76 62,64" fill="none" stroke="#fbbf24" strokeWidth="2.4" />
                <polygon points="62,92 94,80 126,92 126,108 94,120 62,108" fill="none" stroke="#fbbf24" strokeWidth="2.4" />
                <line x1="62" y1="64" x2="62" y2="92" stroke="#94a3b8" strokeDasharray="3 2" />
                <line x1="126" y1="64" x2="126" y2="92" stroke="#94a3b8" strokeDasharray="3 2" />
                <circle cx="144" cy="56" r="4" fill="#22c55e" />
                <text x="148" y="47" fontSize="8" fontWeight="800" fill="#86efac">e⁻</text>
              </>
            )}
            {allo === 'fullerene' && (
              <>
                <circle cx="94" cy="74" r="38" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2.4" />
                <polygon points="94,54 112,67 105,88 83,88 76,67" fill="#581c87" stroke="#c084fc" strokeWidth="1.8" />
                <line x1="94" y1="36" x2="94" y2="54" stroke="#c084fc" strokeWidth="1.8" />
                <line x1="112" y1="67" x2="130" y2="62" stroke="#c084fc" strokeWidth="1.8" />
                <line x1="76" y1="67" x2="58" y2="62" stroke="#c084fc" strokeWidth="1.8" />
              </>
            )}

            <rect x="188" y="16" width="438" height="116" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
            <text x="204" y="40" fontSize="11.5" fontWeight="800" fill={alloInfo.color}>{hi ? alloInfo.nameHi : alloInfo.nameEn}</text>
            <text x="204" y="65" fontSize="9.8" fontWeight="700" fill="#f8fafc">{hi ? alloInfo.bondHi : alloInfo.bondEn}</text>
            <text x="204" y="90" fontSize="9.8" fontWeight="700" fill="#e2e8f0">{hi ? alloInfo.elecHi : alloInfo.elecEn}</text>
            <text x="204" y="114" fontSize="9.5" fontWeight="700" fill="#fde68a">{hi ? alloInfo.hardHi : alloInfo.hardEn}</text>
          </svg>
        </div>
      )}

      {tab === 'iupac' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {ROOTS.map((r) => (
              <button
                key={r.c}
                type="button"
                onClick={() => setNC(r.c)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                  effC === r.c ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {hi ? r.hi : `${r.en} (C${r.c})`}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {FAMILIES.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFam(f.id)}
                className={`rounded-lg px-2 py-1 text-[11px] font-bold ${
                  fam === f.id ? 'bg-purple-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {hi ? f.labelHi : f.labelEn}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="rounded-lg bg-slate-800 p-2.5">
              <div className="text-slate-400">{hi ? 'IUPAC नाम' : 'IUPAC Name'}</div>
              <div className="text-sm text-cyan-300">{compMap.nameEn}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2.5">
              <div className="text-slate-400">{hi ? 'आण्विक सूत्र' : 'Formula'}</div>
              <div className="text-sm text-amber-300">{compMap.formula}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2.5">
              <div className="text-slate-400">{hi ? 'सहसंयोजी आबंध युग्म' : 'Covalent Pairs'}</div>
              <div className="text-sm text-emerald-300">{compMap.bonds} {hi ? 'आबंध' : 'bonds'}</div>
            </div>
            <div className="rounded-lg bg-slate-800 p-2.5">
              <div className="text-slate-400">{hi ? 'समजातीय अंतर व गुण' : 'Homologous Trait'}</div>
              <div className="text-[11px] text-purple-300">{compMap.typeHi}</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'reactions' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {REACTIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRxnId(r.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                  rxnId === r.id ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {hi ? r.hi : r.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-slate-950/80 p-3 space-y-1.5">
            <div className="font-mono text-xs font-extrabold text-cyan-300">{rxn.eq}</div>
            <p className="text-xs leading-relaxed text-slate-200">{hi ? rxn.descHi : rxn.descEn}</p>
          </div>
        </div>
      )}
    </div>
  );
}
