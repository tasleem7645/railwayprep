import React, { useState } from 'react';

const ASEXUAL_MODES = [
  {
    id: 'vegetative',
    label: { en: 'Vegetative (Plantlets & Grafting)', hi: 'कायिक प्रवर्धन (ब्रायोफिलम व कलम)' },
    method: { en: 'Cutting (45°–60°), Grafting (Stock A+Scion B), Layering, Leaf Buds, Tissue Culture', hi: 'कर्तन (45°–60°), कलम, परतन, पत्ती पादपक, ऊतक संवर्धन' },
    division: { en: 'Mitosis (2n → 2n Clones)', hi: 'समसूत्री विभाजन (समान क्लोन)' },
    fact: {
      en: 'Bryophyllum sprouts miniature plantlets on leaf notches; Apical meristem Tissue Culture yields virus-free crops (e.g., Banana) rapidly — zero genetic diversity so single disease risks entire crop!',
      hi: 'ब्रायोफिलम पत्ती के कोर पर पादपक उगते हैं; ऊतक संवर्धन से केला जैसे विषाणु-मुक्त समरूप पौधे तेजी से उगते हैं (रोग संवेदनशीलता अधिक)!',
    },
  },
  {
    id: 'budding',
    label: { en: 'Budding (Yeast & Hydra)', hi: 'मुकुलन (यीस्ट एवं हाइड्रा)' },
    method: { en: 'Repeated mitotic division forms lateral Bud outgrowth (Act 11.2 Yeast in Sugar Solution)', hi: 'विशिष्ट स्थल पर बार-बार कोशिका विभाजन से मुकुल उभार (क्र. 11.2 यीस्ट व हाइड्रा)' },
    division: { en: 'Mitosis (Detaches & Grows)', hi: 'समसूत्री विभाजन (अलग होकर स्वतंत्र जीव)' },
    fact: {
      en: 'Unicellular Yeast (in 10% warm sugar) and multicellular Hydra bud off new clones; multiple buds can grow together on parent Hydra!',
      hi: 'यीस्ट व हाइड्रा दोनों में मुकुल जनक से अलग होकर नया स्वतंत्र जीव बनता है (हाइड्रा पर एक साथ कई मुकुल दिख सकते हैं)!',
    },
  },
  {
    id: 'spores',
    label: { en: 'Spores (Rhizopus & Aspergillus)', hi: 'बीजाणु निर्माण (राइजोपस व ऐस्पर्जिलस)' },
    method: { en: 'Air-borne unicellular spores in sporangia/vesicles thrive at 25–35°C moist warmth (Act 11.3)', hi: 'वायु में उड़ने वाले सूक्ष्म बीजाणु 25–35°C गर्म-नम ब्रेड पर शीघ्र अंकुरित होते हैं (क्र. 11.3)' },
    division: { en: 'Mitotic Spores (Millions)', hi: 'लाखों हल्के बीजाणु (शीतलन से गति धीमी)' },
    fact: {
      en: 'Refrigeration suppresses spore germination & extends food shelf-life; Pasteur disproved spontaneous generation; beneficial fungi yield Penicillin & Amoxicillin!',
      hi: 'रेफ्रिजरेशन (कम ताप) जनन धीमा कर भोजन बचाता है; पाश्चर ने स्वतः जनन असत्य सिद्ध किया; कवक पेनिसिलिन जैसे एंटीबायोटिक देते हैं!',
    },
  },
  {
    id: 'meiosis',
    label: { en: 'Meiosis (46 → 23) + Bead Combos', hi: 'अर्धसूत्री (46→23) व मनका संयोजन' },
    method: { en: 'Act 11.4: 3 chromosome pairs (Light/Dark) produce 2³ = 8 combinations; 23 pairs give 2²³+!', hi: 'क्र. 11.4: मात्र 3 जोड़ी गुणसूत्रों से 8 संयोजन बनते हैं — मानव के 23 जोड़ों से अनगिनत विविधता!' },
    division: { en: 'Meiosis (2n=46 → n=23 Gametes)', hi: 'अर्धसूत्री विभाजन (गुणसूत्र आधे: 23)' },
    fact: {
      en: 'Without meiosis halving sperm & ovum chromosomes to 23, chromosome numbers would double every generation! Recombination drives evolution & survival.',
      hi: 'अर्धसूत्री विभाजन युग्मकों में गुणसूत्र आधे (23) रखता है, जिससे निषेचन के बाद युग्मनज में संख्या फिर ठीक 46 बनी रहती है!',
    },
  },
];

const POLLINATION_CASES = [
  {
    id: 'pea_emas_bag',
    label: { en: 'Act 11.6: Emasculated Bud + Bag', hi: 'क्र. 11.6: पुंकेसर निकाली बंद कली + थैली' },
    fruit: false,
    pollenSource: { en: 'Anthers removed BEFORE opening; bag blocks external pollen', hi: 'खिलने से पहले पुंकेसर हटाए व थैली ने बाहरी पराग रोका' },
    takeaway: {
      en: 'NO FRUIT & NO SEEDS! Proves pollen transfer from anther to stigma is strictly mandatory for fruit formation!',
      hi: 'फल व बीज बिल्कुल नहीं बनेंगे! सिद्ध होता है कि फल निर्माण के लिए परागण अनिवार्य है!',
    },
  },
  {
    id: 'pea_intact_bag',
    label: { en: 'Act 11.6: Intact Bud + Bag (Self)', hi: 'क्र. 11.6: पुंकेसर युक्त कली + थैली' },
    fruit: true,
    pollenSource: { en: 'Self-pollination occurs cleanly inside bagged pea bud', hi: 'थैली के भीतर ही उसी पुष्प से स्व-परागण संभव' },
    takeaway: {
      en: 'FRUIT & PODS FORM NORMALLY! Pea (and Wheat/Tomato) flowers self-pollinate successfully even inside muslin bags!',
      hi: 'फलियाँ सामान्यतः बनती हैं! मटर, टमाटर व गेहूँ स्व-परागण द्वारा स्वयं निषेचन कर लेते हैं।',
    },
  },
  {
    id: 'wind_grass',
    label: { en: 'Table 11.3: Wind (Maize / Wheat)', hi: 'तालिका 11.3: वायु परागण (मक्का / गेहूँ)' },
    fruit: true,
    pollenSource: { en: '5,00,000–10,00,000 light pollen/flower → ~50–200 seeds', hi: '5–10 लाख हल्के परागकण / पुष्प → केवल ~50–200 बीज' },
    takeaway: {
      en: 'Wind dispersal wastes >99% pollen in air, so wind flowers produce HUGE numbers of light pollen & feathery stigmas to catch them!',
      hi: 'वायु अनिश्चित होने से 99% से अधिक पराग व्यर्थ जाते हैं — अतः पवन-परागित पुष्प लाखों हल्के पराग व पंखनुमा वर्तिकाग्र बनाते हैं!',
    },
  },
  {
    id: 'insect_sunflower',
    label: { en: 'Table 11.3: Insect (Sunflower / Rose)', hi: 'तालिका 11.3: कीट परागण (सूरजमुखी / गुड़हल)' },
    fruit: true,
    pollenSource: { en: '20,000–40,000 sticky pollen/flower → ~800–1,000 seeds', hi: '20–40 हजार चिपचिपे पराग → ~800–1,000 बीज' },
    takeaway: {
      en: 'FAR higher efficiency! Bright petals, scent & nectar attract bees/butterflies to deliver sticky pollen directly onto sticky stigmas!',
      hi: 'अत्यधिक परागण दक्षता! रंगीन दल, गंध व मकरंद से कीट सीधे वर्तिकाग्र तक पराग पहुँचाते हैं (कम पराग में अधिक बीज)!',
    },
  },
];

function getCyclePhase(day, hi) {
  if (day <= 5) {
    return {
      phase: hi ? 'चरण 1: रजोधर्म / माहवारी (दिन 1–5)' : 'Phase 1: Menstruation (Days 1–5)',
      color: '#fb7185',
      thickness: 22,
      eggPos: hi ? 'नया अंडाणु अंडाशय में प्रारंभिक' : 'Previous unfertilised egg shed (~1 day viable)',
      note: hi
        ? 'निषेचन न होने पर गर्भाशय की रक्त-समृद्ध मोटी दीवार और ऊतक योनि से बाहर निकलते हैं (सामान्य 3–7 दिन; आयु ~10–50 वर्ष)।'
        : 'Unfertilised egg degenerates; thick vascular uterine lining breaks down and sheds (lasts 3–7 days).',
    };
  }
  if (day <= 13) {
    return {
      phase: hi ? 'चरण 2: गर्भाशय आस्तर पुनर्निर्माण (दिन 6–13)' : 'Phase 2: Uterine Lining Rebuilding (Days 6–13)',
      color: '#38bdf8',
      thickness: 34 + (day - 5) * 4,
      eggPos: hi ? 'अंडाशय में अंडाणु परिपक्व हो रहा है' : 'Mature egg developing inside ovary',
      note: hi
        ? 'अंडाशय में एक अंडाणु परिपक्व होता है और संभावित भ्रूण के पोषण हेतु गर्भाशय भित्ति क्रमिक रूप से मोटी होने लगती है।'
        : 'One ovum matures inside an ovary while the uterus gradually thickens with fresh blood vessels.',
    };
  }
  if (day === 14) {
    return {
      phase: hi ? 'चरण 3: अंडोत्सर्ग — Ovulation (~दिन 14!)' : 'Phase 3: Ovulation (~Day 14 Peak!)',
      color: '#fbbf24',
      thickness: 68,
      eggPos: hi ? 'अंडाणु डिंबवाहिनी (निषेचन स्थल) में मुक्त!' : 'Mature egg released into Oviduct!',
      note: hi
        ? 'अंडाशय से परिपक्व अंडाणु निकलकर डिंबवाहिनी में पहुँचता है (प्रमुख परीक्षा तथ्य; यद्यपि चक्र 21–35 दिन का होने से दिन थोड़ा बदल सकता है — अभ्यास Q13)।'
        : 'Ovary releases mature ovum into Fallopian tube (~Day 14 in classic 28-day cycle; varies if total cycle is 21–35 days!).',
    };
  }
  return {
    phase: hi ? 'चरण 4: समृद्ध आस्तर व निषेचन प्रतीक्षा (दिन 15–28)' : 'Phase 4: Vascular Wall & Implantation Window (Days 15–28)',
    color: '#34d399',
    thickness: 78,
    eggPos: hi ? 'निषेचन हो तो रोपण / अन्यथा दिन 28 चक्र पुनः' : 'Fertilisable ~1 day → Implants if fertilised',
    note: hi
      ? 'यदि डिंबवाहिनी में शुक्राणु से निषेचन हो जाए तो युग्मनज गर्भाशय में अंतर्रोपित होता है (गर्भावस्था प्रारंभ, माहवारी रुक जाती है!)।'
      : 'If fertilised in oviduct, dividing zygote implants in this nutrient-rich lining (menstruation pauses during 9-month pregnancy!).',
  };
}

export default function ReproductionPollinationCycleLabSVG({ lang = 'hi' }) {
  const hi = lang === 'hi';
  const [tab, setTab] = useState('asexual');
  const [asexIdx, setAsexIdx] = useState(3);
  const [pollIdx, setPollIdx] = useState(0);
  const [cycleDay, setCycleDay] = useState(14);
  const [spermChr, setSpermChr] = useState('Y');

  const asex = ASEXUAL_MODES[asexIdx];
  const poll = POLLINATION_CASES[pollIdx];
  const cyc = getCyclePhase(cycleDay, hi);

  return (
    <div className="my-5 rounded-2xl border border-emerald-500/35 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/35 p-4 text-slate-100 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-700/70">
        <div className="text-xs sm:text-sm font-extrabold text-emerald-300 tracking-wide">
          {hi ? 'इंटरैक्टिव 3-इन-1 जनन, परागण एवं 28-दिवसीय चक्र लैब (Ch 11)' : 'Interactive 3-in-1 Asexual/Meiosis, Pollination & 28-Day Cycle Lab'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'asexual', en: '1. Asexual & Meiosis', hi: '1. अलैंगिक व अर्धसूत्री' },
            { id: 'pollination', en: '2. Act 11.6 & Pollen', hi: '2. परागण प्रयोग 11.6' },
            { id: 'human', en: '3. 28-Day Cycle & XX/XY', hi: '3. 28-दिन चक्र व XX/XY' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                tab === t.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {hi ? t.hi : t.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'asexual' && (
        <div className="mt-3 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {ASEXUAL_MODES.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setAsexIdx(i)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  i === asexIdx ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {hi ? m.label.hi : m.label.en}
              </button>
            ))}
          </div>
          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <rect x="20" y="18" width="290" height="72" rx="10" fill="#132238" stroke="#34d399" />
            <text x="165" y="42" textAnchor="middle" fill="#94a3b8" fontSize="11">{hi ? 'कोशिका विभाजन प्रकार' : 'Cell Division Type'}</text>
            <text x="165" y="68" textAnchor="middle" fill="#34d399" fontSize="15" fontWeight="800">{hi ? asex.division.hi : asex.division.en}</text>

            <rect x="330" y="18" width="290" height="72" rx="10" fill="#132238" stroke="#38bdf8" />
            <text x="475" y="42" textAnchor="middle" fill="#94a3b8" fontSize="11">{hi ? 'प्रमुख NCERT विधि' : 'Core Mechanism'}</text>
            <text x="475" y="65" textAnchor="middle" fill="#e2e8f0" fontSize="10.5" fontWeight="700">{hi ? asex.method.hi : asex.method.en}</text>

            <text x="320" y="122" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700">
              {hi ? asex.fact.hi.slice(0, 88) : asex.fact.en.slice(0, 88)}
            </text>
            <text x="320" y="142" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
              {hi ? asex.fact.hi.slice(88) : asex.fact.en.slice(88)}
            </text>
          </svg>
        </div>
      )}

      {tab === 'pollination' && (
        <div className="mt-3 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {POLLINATION_CASES.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPollIdx(i)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  i === pollIdx ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {hi ? p.label.hi : p.label.en}
              </button>
            ))}
          </div>
          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <rect x="24" y="20" width="165" height="68" rx="10" fill="#132238" stroke={poll.fruit ? '#34d399' : '#fb7185'} strokeWidth="2" />
            <text x="106" y="45" textAnchor="middle" fill="#94a3b8" fontSize="11">{hi ? 'फल व बीज निर्माण' : 'Fruit / Seed Formed?'}</text>
            <text x="106" y="72" textAnchor="middle" fill={poll.fruit ? '#34d399' : '#fb7185'} fontSize="18" fontWeight="800">
              {poll.fruit ? (hi ? 'हाँ (YES ✓)' : 'YES ✓') : (hi ? 'नहीं (NO ✗)' : 'NO Fruit ✗')}
            </text>

            <rect x="210" y="20" width="406" height="68" rx="10" fill="#132238" stroke="#38bdf8" />
            <text x="413" y="45" textAnchor="middle" fill="#38bdf8" fontSize="11.5" fontWeight="800">{hi ? 'परागण आँकड़े व स्थिति' : 'Pollination Observation'}</text>
            <text x="413" y="70" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="700">{hi ? poll.pollenSource.hi : poll.pollenSource.en}</text>

            <text x="320" y="128" textAnchor="middle" fill="#e2e8f0" fontSize="11.5" fontWeight="600">
              {hi ? poll.takeaway.hi : poll.takeaway.en}
            </text>
          </svg>
        </div>
      )}

      {tab === 'human' && (
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-950/70 p-2.5 border border-slate-800">
              <div className="flex justify-between font-bold text-rose-300 mb-1">
                <span>{hi ? `मासिक चक्र दिन (1–28): दिन ${cycleDay}` : `Cycle Day (1–28): Day ${cycleDay}`}</span>
                <button type="button" onClick={() => setCycleDay(14)} className="text-[10px] underline text-amber-300">
                  {hi ? 'दिन 14 (अंडोत्सर्ग)' : 'Jump Day 14'}
                </button>
              </div>
              <input
                type="range"
                min={1}
                max={28}
                value={cycleDay}
                onChange={(e) => setCycleDay(Number(e.target.value))}
                className="w-full accent-rose-400"
              />
            </div>
            <div className="rounded-xl bg-slate-950/70 p-2.5 border border-slate-800">
              <div className="font-bold text-violet-300 mb-1">{hi ? 'पिता का शुक्राणु गुणसूत्र चुनें (माँ = सदैव X):' : 'Select Father Sperm (Mother Egg = Always X):'}</div>
              <div className="flex gap-2">
                {['X', 'Y'].map((chr) => (
                  <button
                    key={chr}
                    type="button"
                    onClick={() => setSpermChr(chr)}
                    className={`flex-1 py-1 rounded-md font-bold text-xs ${
                      spermChr === chr ? 'bg-violet-400 text-slate-950' : 'bg-slate-800 text-slate-200'
                    }`}
                  >
                    {hi ? `शुक्राणु ${chr} (23) + अंडाणु X → ${chr === 'X' ? 'XX (बालिका)' : 'XY (बालक)'}` : `Sperm ${chr} + Ovum X → ${chr === 'X' ? 'XX (Girl 46)' : 'XY (Boy 46)'}`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <svg viewBox="0 0 640 165" className="w-full rounded-xl bg-slate-950 border border-slate-800">
            <text x="320" y="26" textAnchor="middle" fill={cyc.color} fontSize="14" fontWeight="800">{cyc.phase}</text>
            <text x="50" y="54" fill="#94a3b8" fontSize="11">{hi ? 'गर्भाशय आस्तर मोटाई:' : 'Uterus Lining:'}</text>
            <rect x="170" y="42" width="240" height="16" rx="6" fill="#1e293b" />
            <rect x="170" y="42" width={Math.min(240, cyc.thickness * 2.8)} height="16" rx="6" fill={cyc.color} />
            <text x="425" y="54" fill="#e2e8f0" fontSize="11" fontWeight="700">{cyc.eggPos}</text>

            <rect x="26" y="72" width="588" height="36" rx="8" fill="#132238" stroke="#38bdf8" />
            <text x="320" y="94" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">
              {hi
                ? `लिंग निर्धारण: माँ (22+X) + पिता शुक्राणु (22+${spermChr}) = युग्मनज ${spermChr === 'X' ? '44+XX (पुत्री)' : '44+XY (पुत्र)'} (पिता द्वारा निर्धारित!)`
                : `Sex Inheritance: Mother Ovum (X) + Father Sperm (${spermChr}) = Zygote 46 (${spermChr === 'X' ? 'XX Female' : 'XY Male'})`}
            </text>
            <text x="320" y="138" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">{cyc.note}</text>
          </svg>
        </div>
      )}
    </div>
  );
}
