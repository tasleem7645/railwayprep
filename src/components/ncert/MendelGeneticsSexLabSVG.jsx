import React, { useState } from 'react';
import { Dna, Grid2X2, Users } from 'lucide-react';

const PEA_CROSSES = [
  {
    key: 'mono',
    en: 'Monohybrid F2 (`Tt × Tt`)',
    hi: 'एकसंकर संकरण (`Tt × Tt`)',
    f1: { en: 'F1 = 100% Tall (`Tt`) — ZERO medium-height blends!', hi: 'F1 = 100% लंबे पौधे (`Tt`) — कोई बीच की ऊँचाई नहीं!' },
    ratio: { en: 'Phenotype = 3 Tall : 1 Short | Genotype (`Act 8.2`) = 1 TT : 2 Tt : 1 tt', hi: 'दृश्य अनुपात = 3 लंबा : 1 बौना | जीन (`क्र. 8.2`) = 1 TT : 2 Tt : 1 tt' },
    cells: ['TT (Tall)', 'Tt (Tall)', 'Tt (Tall)', 'tt (Short)'],
  },
  {
    key: 'dihybrid',
    en: 'Dihybrid F2 (`RrYy × RrYy`)',
    hi: 'द्विसंकर (`RrYy × RrYy` = 556 बीज)',
    f1: { en: 'RRYY × rryy -> F1 ALL Round Yellow (`RrYy`)', hi: 'RRYY × rryy → F1 में सभी गोल, पीले बीज (`RrYy`)' },
    ratio: { en: 'F2 (`556 seeds`): 315 Round Yellow (9) : 108 Round Green (3) : 101 Wrinkled Yellow (3) : 32 Wrinkled Green (1)', hi: 'F2 (`556 बीज`): 315 गोल-पीले (9) : 108 गोल-हरे (3) : 101 झुर्री-पीले (3) : 32 झुर्री-हरे (1)' },
    cells: ['315 Round Yellow', '108 Round Green (New)', '101 Wrinkled Yellow (New)', '32 Wrinkled Green'],
  },
  {
    key: 'exq1',
    en: 'NCERT Ex Q1 (`TtWW × ttww`)',
    hi: 'NCERT अभ्यास Q1 (`TtWW × ttww`)',
    f1: { en: 'Tall Violet (`TtWW`) × Short White (`ttww`) -> All progeny get W from TtWW (All Violet!) + 50% Tt Tall / 50% tt Short!', hi: 'लंबे बैंगनी (`TtWW`) × बौने सफेद (`ttww`) → सभी फूल बैंगनी (`Ww`) तथा आधे बौने (`tt`)!' },
    ratio: { en: 'Verified jhsc1an Answer (c): Tall parent genotype = TtWW!', hi: 'सत्यापित उत्तरमाला विकल्प (c): लंबा जनक जीनोटाइप = TtWW!' },
    cells: ['50% TtWw (Tall Violet)', '50% TtWw (Tall Violet)', '50% ttWw (Short Violet)', '50% ttWw (Short Violet)'],
  },
];

const SEX_SYSTEMS = [
  { key: 'human', en: 'Humans (Genetic XX / XY)', hi: 'मानव (आनुवंशिक XX / XY)', desc: { en: '22 paired autosomes + 1 sex pair (`Female XX perfect pair`, `Male XY unmatched shorter Y`). ALL kids get X from Mother; Father’s X or Y decides 50% Girl : 50% Boy.', hi: '22 जोड़े अलिंग सूत्र + 1 लिंग जोड़ा (`मादा XX`, `नर XY` छोटा Y)। हर संतान को माँ से X मिले; पिता से X → पुत्री या Y → पुत्र (`50:50`)!' } },
  { key: 'reptile', en: 'Reptiles (Temperature)', hi: 'कुछ सरीसृप (ऊष्मायन ताप)', desc: { en: 'Environmental non-genetic trigger: the incubation TEMPERATURE at which fertilised eggs sit determines male vs female hatchlings.', hi: 'पर्यावरणीय लिंग निर्धारण: निषेचित अंडों के ऊष्मायन के तापमान पर निर्भर करता है कि संतति नर होगी या मादा!' } },
  { key: 'snail', en: 'Snail (Sex Changer — Tech Shift 15!)', hi: 'घोंघा (`लिंग परिवर्तक` — Tech Shift 15!)', desc: { en: 'Snails CAN CHANGE THEIR SEX over life — proving NCERT’s rule that sex is NOT always genetically fixed (`unlike humans, dogs & pigeons`).', hi: 'घोंघे जैसे जीव अपना लिंग स्वयं बदल सकते हैं, अर्थात इनमें लिंग आनुवंशिक रूप से पूर्व-निर्धारित नहीं होता (`पृ. 145`)!' } },
];

export function MendelGeneticsSexLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('mendel');
  const [cIdx, setCIdx] = useState(0);
  const [enzymeEff, setEnzymeEff] = useState(100);
  const [sIdx, setSIdx] = useState(0);

  return (
    <div className="rounded-3xl bg-[#070E1D] border border-emerald-500/35 p-4 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm sm:text-base font-black text-emerald-300 flex items-center gap-2">
          <Dna className="w-4 h-4 text-amber-400" />
          <span>{hi ? 'इंटरैक्टिव मेंडल संकरण, जीन-एंजाइम व लिंग निर्धारण प्रयोगशाला (Ch 8)' : 'Interactive Mendel Punnett, Gene-Enzyme & Sex Determination Lab'}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'mendel', en: 'Mendel Crosses', hi: 'मेंडल संकरण', icon: Grid2X2 },
            { id: 'gene', en: 'Gene -> Hormone', hi: 'जीन → एंजाइम → लंबाई', icon: Dna },
            { id: 'sex', en: 'Sex Systems', hi: 'लिंग निर्धारण', icon: Users },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`px-3 py-1 rounded-xl text-xs font-black border cursor-pointer transition-all ${
                tab === b.id ? 'bg-emerald-400 text-slate-950 border-emerald-200' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500/50'
              }`}
            >
              {hi ? b.hi : b.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'mendel' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {PEA_CROSSES.map((c, i) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === cIdx ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? c.hi : c.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-amber-500/35 space-y-2.5 text-xs sm:text-sm">
            <div className="font-bold text-cyan-300">{PEA_CROSSES[cIdx].f1[hi ? 'hi' : 'en']}</div>
            <div className="grid grid-cols-2 gap-2">
              {PEA_CROSSES[cIdx].cells.map((cell, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center font-black text-slate-100">
                  {cell}
                </div>
              ))}
            </div>
            <div className="font-black text-emerald-300">{PEA_CROSSES[cIdx].ratio[hi ? 'hi' : 'en']}</div>
          </div>
        </div>
      )}

      {tab === 'gene' && (
        <div className="space-y-3">
          <label className="block p-3.5 rounded-2xl bg-slate-950/85 border border-slate-800 space-y-1.5 text-xs font-bold text-slate-300">
            <div className="flex justify-between">
              <span>{hi ? 'जीन उत्परिवर्तन प्रभाव — एंजाइम दक्षता (Sec 8.2.3, पृ. 144):' : 'Gene Variant -> Enzyme Efficiency Slider (Sec 8.2.3):'}</span>
              <span className="text-cyan-300 font-black">{enzymeEff}%</span>
            </div>
            <input type="range" min="20" max="100" step="20" value={enzymeEff} onChange={(e) => setEnzymeEff(+e.target.value)} className="w-full accent-cyan-400" />
          </label>
          <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold ${enzymeEff >= 80 ? 'bg-emerald-950/35 border-emerald-400 text-emerald-100' : 'bg-rose-950/35 border-rose-400 text-rose-100'}`}>
            {enzymeEff >= 80
              ? hi ? '✓ सामान्य सक्रिय जीन (`T`) → दक्ष एंजाइम → पर्याप्त पादप हार्मोन → पौधा लंबा (Tall) होगा!' : '✓ Efficient Gene (`T`) -> Active enzyme -> Plenty growth hormone -> TALL Pea Plant!'
              : hi ? '✗ परिवर्तित कम-दक्ष जीन (`t/t`) → कम दक्ष एंजाइम → कम हार्मोन निर्माण → पौधा बौना (Dwarf) होगा!' : '✗ Altered Gene (`t/t`) -> Less efficient enzyme -> Insufficient hormone -> DWARF Pea Plant!'}
          </div>
        </div>
      )}

      {tab === 'sex' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {SEX_SYSTEMS.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setSIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === sIdx ? 'bg-rose-400 text-slate-950 border-rose-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? s.hi : s.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-rose-500/35 text-xs sm:text-sm text-slate-100">
            <strong className="text-rose-300 block mb-1">{hi ? SEX_SYSTEMS[sIdx].hi : SEX_SYSTEMS[sIdx].en}</strong>
            {SEX_SYSTEMS[sIdx].desc[hi ? 'hi' : 'en']}
          </div>
        </div>
      )}
    </div>
  );
}
export default MendelGeneticsSexLabSVG;
