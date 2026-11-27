import React, { useState } from 'react';

const BAL_EQS = [
  {
    id: 'fe-steam',
    labelEn: 'Fe + H₂O(g) → Fe₃O₄ + H₂ (NCERT Sec 1.1.2)',
    labelHi: 'Fe + H₂O(भाप) → Fe₃O₄ + H₂ (NCERT पृष्ठ 4–5)',
    terms: [
      { f: 'Fe', side: 'L', target: 3, atoms: { Fe: 1 } },
      { f: 'H₂O(g)', side: 'L', target: 4, atoms: { H: 2, O: 1 } },
      { f: 'Fe₃O₄(s)', side: 'R', target: 1, atoms: { Fe: 3, O: 4 } },
      { f: 'H₂(g)', side: 'R', target: 4, atoms: { H: 2 } },
    ],
    ansTextEn: '3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)',
    ansTextHi: '3Fe(s) + 4H₂O(भाप) → Fe₃O₄(s) + 4H₂(g)',
  },
  {
    id: 'pb-heat',
    labelEn: 'Pb(NO₃)₂ → PbO + NO₂ + O₂ (Activity 1.6)',
    labelHi: 'Pb(NO₃)₂ → PbO + NO₂↑ + O₂ (क्रियाकलाप 1.6)',
    terms: [
      { f: 'Pb(NO₃)₂', side: 'L', target: 2, atoms: { Pb: 1, N: 2, O: 6 } },
      { f: 'PbO', side: 'R', target: 2, atoms: { Pb: 1, O: 1 } },
      { f: 'NO₂(brown)', side: 'R', target: 4, atoms: { N: 1, O: 2 } },
      { f: 'O₂', side: 'R', target: 1, atoms: { O: 2 } },
    ],
    ansTextEn: '2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g)',
    ansTextHi: '2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(भूरा धुआँ) + O₂(g)',
  },
  {
    id: 'mg-burn',
    labelEn: 'Mg + O₂ → MgO (Activity 1.1)',
    labelHi: 'Mg + O₂ → MgO (क्रियाकलाप 1.1)',
    terms: [
      { f: 'Mg', side: 'L', target: 2, atoms: { Mg: 1 } },
      { f: 'O₂', side: 'L', target: 1, atoms: { O: 2 } },
      { f: 'MgO', side: 'R', target: 2, atoms: { Mg: 1, O: 1 } },
    ],
    ansTextEn: '2Mg(s) + O₂(g) → 2MgO(s)',
    ansTextHi: '2Mg(s) + O₂(g) → 2MgO(s) — चमकदार श्वेत चूर्ण!',
  },
];

const RXN_CASES = [
  { id: 'cao', titleEn: 'CaO + H₂O (Act 1.4)', titleHi: 'CaO + H₂O (क्र. 1.4)', typeEn: 'Combination + Exothermic', typeHi: 'संयोजन + ऊष्माक्षेपी', obsEn: 'Beaker gets HOT; slaked lime Ca(OH)₂ forms -> dries on walls to shiny white CaCO₃ in 2–3 days!', obsHi: 'बीकर गर्म होगा; बुझा चूना Ca(OH)₂ बनेगा → 2–3 दिन में CO₂ से चमकदार CaCO₃ बनता है!' },
  { id: 'feso4', titleEn: 'Heat FeSO₄·7H₂O (Act 1.5)', titleHi: 'FeSO₄ तापन (क्र. 1.5)', typeEn: 'Thermal Decomposition (Endo)', typeHi: 'ऊष्मीय वियोजन', obsEn: 'Green crystals lose H₂O -> white -> reddish-brown Fe₂O₃ solid + burning sulfur smell (SO₂ & SO₃ gases)!', obsHi: 'हरा रंग बदलकर लाल-भूरा Fe₂O₃ ठोस बनता है तथा गंधक जलने जैसी SO₂ + SO₃ गैस निकलती है!' },
  { id: 'electro', titleEn: 'Water Electrolysis (Act 1.7)', titleHi: 'जल विद्युत-अपघटन (क्र. 1.7)', typeEn: 'Electrolytic Decomposition', typeHi: 'वैद्युतअपघटन', obsEn: 'CATHODE (-) collects DOUBLE volume Hydrogen (H₂ pops!); ANODE (+) collects Oxygen (O₂ -> 2:1 volume ratio!).', obsHi: 'कैथोड (-) पर दोगुना हाइड्रोजन (H₂) तथा ऐनोड (+) पर ऑक्सीजन (O₂) गैस 2:1 आयतन में बनती है!' },
  { id: 'agcl', titleEn: 'AgCl in Sunlight (Act 1.8)', titleHi: 'सूर्य में AgCl (क्र. 1.8)', typeEn: 'Photolytic Decomposition', typeHi: 'प्रकाशिक वियोजन', obsEn: 'White AgCl (or pale-yellow AgBr) turns GREY Metallic Silver in sunlight — used in Black & White Photography!', obsHi: 'सफेद AgCl सूर्यप्रकाश में धूसर (Grey) चाँदी में बदलता है — श्याम-श्वेत फोटोग्राफी में उपयोगी!' },
  { id: 'pbi2', titleEn: 'Pb(NO₃)₂ + 2KI (Act 1.2)', titleHi: 'लेड नाइट्रेट + KI (क्र. 1.2)', typeEn: 'Double Displacement + Ppt', typeHi: 'द्विविस्थापन + अवक्षेपण', obsEn: 'Colorless solutions instantly yield bright YELLOW insoluble precipitate of Lead(II) Iodide (PbI₂↓)!', obsHi: 'दो रंगहीन घोल मिलाने पर तुरंत पीला अघुलनशील लेड आयोडाइड (PbI₂) अवक्षेप बनता है!' },
  { id: 'baso4', titleEn: 'Na₂SO₄ + BaCl₂ (Act 1.10)', titleHi: 'Na₂SO₄ + BaCl₂ (क्र. 1.10)', typeEn: 'Double Displacement + Ppt', typeHi: 'द्विविस्थापन + श्वेत अवक्षेप', obsEn: 'Ion exchange (Ba²⁺ + SO₄²⁻) forms an instant WHITE insoluble precipitate of Barium Sulphate (BaSO₄↓)!', obsHi: 'आयनों के आदान-प्रदान से तुरंत जल में अविलेय श्वेत बेरियम सल्फेट (BaSO₄) अवक्षेप बनता है!' },
];

const REDOX_CASES = [
  { id: 'cuo', eq: 'CuO(s) + H₂(g) → Cu(s) + H₂O(l)', ox: 'H₂ → H₂O', red: 'CuO → Cu', noteEn: 'Black CuO loses O (Reduced); Hydrogen gains O (Oxidised) turning surface brown Cu again (Eq 1.29).', noteHi: 'काला CuO ऑक्सीजन खोकर अपचयित व H₂ उपचयित होकर भूरा ताँबा बनता है (समी. 1.29)।' },
  { id: 'zno', eq: 'ZnO(s) + C(s) → Zn(s) + CO(g)', ox: 'C → CO', red: 'ZnO → Zn', noteEn: 'Carbon gains oxygen (Oxidised); Zinc Oxide loses oxygen (Reduced to Zn metal — Group D 2025 Shift 22 PYQ).', noteHi: 'कार्बन का उपचयन व ZnO का Zn में अपचयन होता है (Group D 2025 PYQ)।' },
  { id: 'mno2', eq: 'MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂', ox: 'HCl → Cl₂', red: 'MnO₂ → MnCl₂', noteEn: 'HCl loses Hydrogen -> Oxidised to Cl₂; MnO₂ loses Oxygen -> Reduced to MnCl₂ (Eq 1.32).', noteHi: 'HCl हाइड्रोजन खोकर Cl₂ में उपचयित तथा MnO₂ ऑक्सीजन खोकर MnCl₂ में अपचयित होता है (1.32)।' },
  { id: 'pbo', eq: '2PbO(s) + C(s) → 2Pb(s) + CO₂(g)', ox: 'C → CO₂', red: 'PbO → Pb', noteEn: 'NCERT Ex Q1 Trap! It is LEAD OXIDE (PbO) getting reduced — NOT "Lead"! And CARBON (C) is oxidised — NOT "CO₂"!', noteHi: 'NCERT अभ्यास Q1 जाल: लेड नहीं बल्कि लेड ऑक्साइड (PbO) अपचयित व कार्बन (C) उपचयित हो रहा है!' },
];

export function ChemicalReactionsBalanceLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('balance');
  const [eqIdx, setEqIdx] = useState(0);
  const [coeffs, setCoeffs] = useState([1, 1, 1, 1]);
  const [rxnId, setRxnId] = useState('cao');
  const [redoxId, setRedoxId] = useState('cuo');

  const eq = BAL_EQS[eqIdx];
  const tally = { L: {}, R: {} };
  eq.terms.forEach((t, i) => {
    const c = coeffs[i] || 1;
    Object.entries(t.atoms).forEach(([el, n]) => {
      tally[t.side][el] = (tally[t.side][el] || 0) + n * c;
    });
  });
  const elements = Array.from(new Set([...Object.keys(tally.L), ...Object.keys(tally.R)]));
  const isBalanced = elements.every((el) => (tally.L[el] || 0) === (tally.R[el] || 0) && (tally.L[el] || 0) > 0);

  const rxn = RXN_CASES.find((r) => r.id === rxnId) || RXN_CASES[0];
  const rd = REDOX_CASES.find((r) => r.id === redoxId) || REDOX_CASES[0];

  const selectEq = (idx) => {
    setEqIdx(idx);
    setCoeffs([1, 1, 1, 1]);
  };

  return (
    <div className="my-5 rounded-2xl border border-cyan-500/30 bg-slate-900/85 p-4 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
            {hi ? 'इंटरैक्टिव रासायनिक समीकरण, अवक्षेप व रेडॉक्स लैब (NCERT 1.1–1.3)' : 'Interactive Equation Balancer, Precipitates & Redox Lab (NCERT 1.1–1.3)'}
          </span>
          <h4 className="mt-1 text-sm font-extrabold text-white">
            {hi ? 'हिट एंड ट्रायल संतुलन, 6 मुख्य अभिक्रिया परीक्षण व रेडॉक्स डिटेक्टर' : 'Hit-&-Trial Equation Balancer, 6 Reaction Bench Tests & Redox Detector'}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'balance', label: hi ? 'समीकरण संतुलन' : 'Balancer' },
            { id: 'types', label: hi ? 'अभिक्रिया/अवक्षेप' : 'Rxn & Ppt' },
            { id: 'redox', label: hi ? 'रेडॉक्स/संक्षारण' : 'Redox/Rust' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                tab === t.id ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'balance' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {BAL_EQS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectEq(idx)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${eqIdx === idx ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {hi ? item.labelHi : item.labelEn}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl bg-slate-950/80 p-3 border border-slate-700">
            {eq.terms.map((t, i) => {
              const showArrow = i > 0 && t.side === 'R' && eq.terms[i - 1].side === 'L';
              const showPlus = i > 0 && t.side === eq.terms[i - 1].side;
              return (
                <React.Fragment key={t.f}>
                  {showArrow && <span className="text-lg font-black text-amber-400">→</span>}
                  {showPlus && <span className="text-sm font-bold text-slate-400">+</span>}
                  <div className="flex items-center gap-1 rounded-lg bg-slate-800 px-2 py-1 border border-slate-600">
                    <button type="button" onClick={() => setCoeffs((p) => p.map((v, j) => (j === i ? Math.max(1, v - 1) : v)))} className="h-5 w-5 rounded bg-slate-700 text-xs font-bold text-white">-</button>
                    <span className="min-w-[16px] text-center text-sm font-black text-cyan-300">{coeffs[i]}</span>
                    <button type="button" onClick={() => setCoeffs((p) => p.map((v, j) => (j === i ? Math.min(8, v + 1) : v)))} className="h-5 w-5 rounded bg-slate-700 text-xs font-bold text-white">+</button>
                    <span className="ml-1 text-xs font-extrabold text-white">{t.f}</span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {elements.map((el) => {
              const l = tally.L[el] || 0;
              const r = tally.R[el] || 0;
              return (
                <div key={el} className={`rounded-lg p-1.5 border font-bold ${l === r ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300' : 'bg-rose-950/50 border-rose-500/40 text-rose-300'}`}>
                  {el}: LHS {l} | RHS {r}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className={`font-extrabold ${isBalanced ? 'text-emerald-300' : 'text-amber-300'}`}>
              {isBalanced ? (hi ? `✅ संतुलित समीकरण! ${eq.ansTextHi}` : `✅ BALANCED! ${eq.ansTextEn}`) : (hi ? 'गुणांक बदलकर दोनों ओर परमाणु संख्या बराबर करें' : 'Adjust leading coefficients until LHS & RHS match')}
            </span>
            <button type="button" onClick={() => setCoeffs(eq.terms.map((t) => t.target).concat([1, 1]).slice(0, 4))} className="rounded-lg bg-emerald-500/20 px-2.5 py-1 font-bold text-emerald-300 border border-emerald-500/40">
              {hi ? 'सटीक हल भरें' : 'Auto-Balance'}
            </button>
          </div>
        </div>
      )}

      {tab === 'types' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {RXN_CASES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRxnId(r.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${rxnId === r.id ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {hi ? r.titleHi : r.titleEn}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-slate-950/80 p-3 text-xs space-y-1.5">
            <div className="font-extrabold text-amber-300">{hi ? `प्रकार: ${rxn.typeHi}` : `Type: ${rxn.typeEn}`}</div>
            <div className="text-slate-200 leading-relaxed">{hi ? rxn.obsHi : rxn.obsEn}</div>
          </div>
        </div>
      )}

      {tab === 'redox' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {REDOX_CASES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRedoxId(r.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${redoxId === r.id ? 'bg-rose-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                {r.eq.split('→')[0].trim()}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-slate-950/80 p-3 text-xs space-y-2">
            <div className="font-extrabold text-white text-sm">{rd.eq}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-bold">
              <div className="rounded-lg bg-rose-950/50 border border-rose-500/40 p-2 text-rose-200">{hi ? `उपचयित (Oxidised): ${rd.ox}` : `Oxidised: ${rd.ox}`}</div>
              <div className="rounded-lg bg-sky-950/50 border border-sky-500/40 p-2 text-sky-200">{hi ? `अपचयित (Reduced): ${rd.red}` : `Reduced: ${rd.red}`}</div>
            </div>
            <div className="text-slate-300">{hi ? rd.noteHi : rd.noteEn}</div>
          </div>
        </div>
      )}
    </div>
  );
}
