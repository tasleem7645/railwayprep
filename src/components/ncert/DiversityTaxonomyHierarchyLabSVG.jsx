import React, { useState } from 'react';

const KINGDOM_CARDS = [
  {
    id: 'monera',
    label: { en: '1. Monera (Prokaryote)', hi: '1. मोनेरा (प्राक्केंद्रकी)' },
    nucleus: { en: 'Absent (Nucleoid DNA — Copeland 1938 added)', hi: 'अनुपस्थित (कोई झिल्ली-बद्ध केंद्रक नहीं — कोपलैंड)' },
    wall: { en: 'Peptidoglycan (Bacteria & Cyanobacteria)', hi: 'पेप्टिडोग्लाइकैन (बैक्टीरिया व नील-हरित शैवाल)' },
    fact: {
      en: 'Single-celled prokaryotes (`P` in NCERT Ex 15!). Archaea vs Bacteria split by Carl Woese (`1977`) via DNA sequences. Ram Baksh Singh (`1957 Sitapur`) pioneered biogas digestion bacteria!',
      hi: 'एककोशिकीय प्राक्केंद्रकी (`अभ्यास Q15 का जीव P`)! सायनोजीवाणु प्रकाश संश्लेषी हैं; 1957 में राम बख्श सिंह (सीतापुर) ने बायोगैस जीवाणु उपयोग बढ़ाया व वूज (`1977`) ने बैक्टीरिया-आर्किया अलग किए।',
    },
  },
  {
    id: 'protista',
    label: { en: '2. Protista (1-cell Eukaryote)', hi: '2. प्रोटिस्टा (एककोशिक सुकेंद्रकी)' },
    nucleus: { en: 'Present (Membrane-bound — Haeckel 1866 added)', hi: 'उपस्थित (सुकेंद्रकी — अर्न्स्ट हेकेल 1866)' },
    wall: { en: 'Variable (None in Amoeba; Cellulose in Chlamydomonas)', hi: 'विविध (अमीबा भित्ति रहित; क्लैमाइडोमोनास में भित्ति)' },
    fact: {
      en: 'Specimen `R` in NCERT Ex 15! Includes **Amoeba** (`pseudopodia`, confused Linnaeus 2-kingdom), **Paramecium** (`cilia`), **Euglena** (`flagellum + autotroph/heterotroph!`), thriving in hay infusions (`Act 12.5`).',
      hi: 'NCERT Q15 का जीव `R`! **अमीबा** (`कूटपाद` — द्विजगत में अस्पष्ट), **पैरामीशियम** (`पक्ष्माभ`), **यूग्लीना** (`कशाभ + स्वपोषी व परपोषी दोनों`); क्र. 12.5 सूखी घास के फांट में प्रचुर!',
    },
  },
  {
    id: 'fungi',
    label: { en: '3. Fungi (Chitin Saprophyte)', hi: '3. कवक (काइटिन भित्ति मृतजीवी)' },
    nucleus: { en: 'Present (Mostly multi-nucleate hyphae; Yeast = 1 cell)', hi: 'उपस्थित (बहुकोशिकीय तंतु/कवकजाल; अपवाद: यीस्ट)' },
    wall: { en: 'Chitin Cell Wall (`NEVER Cellulose` — CBT Top Q!)', hi: 'काइटिन कोशिका भित्ति (`सेल्युलोज़ नहीं!` — मुख्य PYQ)' },
    fact: {
      en: 'Saprotrophic decomposers (`mycelium absorption`, `Rhizopus, Agaricus mushroom, Penicillium`). Cannot photosynthesize! Partner symmetrically with algae in **Lichens** (`clean-air SO₂ bioindicators`) & grow crops in `30–45` days!',
      hi: 'पर्णहरित रहित **मृतजीवी अपघटक** (`मशरूम, पेनिसिलियम, राइजोपस`)! शैवाल के साथ सहजीवी बनकर **लाइकेन** (`वायु प्रदूषण सूचक`) बनाते हैं; मशरूम चक्र `30–45 दिन`!',
    },
  },
  {
    id: 'plantae',
    label: { en: '4. Plantae (Autotroph)', hi: '4. पादप (स्वपोषी 5 वर्ग)' },
    nucleus: { en: 'Multicellular Eukaryote (`Thallophyta → Angiosperms`)', hi: 'बहुकोशिकीय सुकेंद्रकी (`थैलो से आवृतबीजी तक`)' },
    wall: { en: 'Rigid Cellulose Cell Wall + Chlorophyll', hi: 'दृढ़ सेल्युलोज़ कोशिका भित्ति + हरितलवक' },
    fact: {
      en: 'Specimen `Q` in Ex 15 (`Bryophyta=Amphibians, Pteridophyta=1st Xylem/Phloem, Gymnosperms=Naked cone seeds, Angiosperms=Fruit seeds`)! Exception: Insectivorous **Nepenthes** (`pitcher plant`) traps insects in N-poor soil.',
      hi: 'Q15 का जीव `Q`! **थैलोफाइटा → ब्रायोफाइटा (`उभयचर`) → टेरिडोफाइटा (`प्रथम जाइलम-फ्लोएम`) → अनावृतबीजी (`नग्न शंकु बीज`) → आवृतबीजी (`फल में बीज`)**; अपवाद: घटपर्णी कीटभक्षी!',
    },
  },
  {
    id: 'animalia',
    label: { en: '5. Animalia & Acellular Virus', hi: '5. जंतु जगत व अकोशिकीय विषाणु' },
    nucleus: { en: 'Multicellular Eukaryote (Motile Ingestive)', hi: 'बहुकोशिकीय सुकेंद्रकी (चलनशील अंतर्ग्रहण परपोषी)' },
    wall: { en: 'NO Cell Wall (`Flexible membranes`, Spec `S`)', hi: 'कोशिका भित्ति अनुपस्थित (`अभ्यास Q15 का जीव S`)' },
    fact: {
      en: 'Includes sponges (`Porifera`) up to **Mammals (`Vertebrata`)**! Note Specimen `T` (**Viruses**) have DNA/RNA + protein coat (`non-cellular / acellular`), staying crystal-inert outside hosts and sitting OUTSIDE all 5 kingdoms!',
      hi: 'पॉरीफेरा से स्तनधारी तक समस्त जंतु (`जीव S`)! **विषाणु (`Virus`, जीव T)** अकोशिकीय (`केवल आनुवंशिक पदार्थ + प्रोटीन`) होने से किसी भी 5 जगत में नहीं रखे जाते!',
    },
  },
];

const PLANT_DIVISIONS = [
  {
    id: 'thallophyta',
    label: { en: 'Thallophyta (Algae)', hi: '1. थैलोफाइटा (शैवाल)' },
    vascular: { en: 'No (`Undifferentiated Thallus`)', hi: 'नहीं (`अविभेदित थैलस`)' },
    seeds: { en: 'No Seeds (`Aquatic Cryptogam`)', hi: 'बीज नहीं (`जलीय क्रिप्टोगैम`)' },
    ex: {
      en: 'Spirogyra, Ulothrix, Chara — freshwater green filaments photosynthesizing without true roots, stems, or leaves (`Group D 2025 Shifts 11, 33`).',
      hi: 'स्पाइरोगाइरा, यूलोथ्रिक्स, कारा — जड़-तना-पत्ती रहित जलीय हरे तंतु (`Group D 2025 Shift 11, 33`)!',
    },
  },
  {
    id: 'bryophyta',
    label: { en: 'Bryophyta (Amphibians)', hi: '2. ब्रायोफाइटा (पादप उभयचर)' },
    vascular: { en: 'No Xylem/Phloem (`Rhizoids`)', hi: 'संवहनी ऊतक नहीं (`मूलाभास`)' },
    seeds: { en: 'No Seeds (`Needs Water to Fertilise`)', hi: 'बीज नहीं (`निषेचन हेतु जल आवश्यक`)' },
    ex: {
      en: 'Marchantia, Riccia, Funaria (`Moss`) — green damp-rock carpets; coined **Amphibians of Plant Kingdom** (`live on soil yet require water for male gametes`, `Shift 28`).',
      hi: 'मार्केंशिया, रिक्सिया, मॉस (`फ्यूनेरिया`) — नम चट्टानों पर हरी गलीचे; निषेचन में जल निर्भरता से **पादप जगत के उभयचर** कहलाते हैं!',
    },
  },
  {
    id: 'pteridophyta',
    label: { en: 'Pteridophyta (1st Vascular)', hi: '3. टेरिडोफाइटा (प्रथम संवहनी)' },
    vascular: { en: 'YES — First Xylem & Phloem!', hi: 'हाँ — प्रथम वास्तविक जाइलम व फ्लोएम!' },
    seeds: { en: 'NO Seeds (`Spores / Sori underneath fronds`)', hi: 'बीज नहीं (`पत्ती के नीचे सोराई में बीजाणु`)' },
    ex: {
      en: 'Ferns (`Pteridium`), Marsilea (`Act 12.6–12.7`) — possess true roots, stems & leaves with vascular tubes yet remain moisture-bound for reproduction (`Shifts 17, 24, 36`).',
      hi: 'फर्न व मार्सीलिया (`क्र. 12.6–12.7`) — जड़-तना-पत्ती व संवहनी ऊतक उपस्थित, किंतु बीज-रहित (`बीजाणुधानी सोराई` द्वारा जनन; निषेचन में जल आवश्यक)!',
    },
  },
  {
    id: 'gymnosperms',
    label: { en: 'Gymnosperms (Naked Seeds)', hi: '4. अनावृतबीजी (नग्न बीज)' },
    vascular: { en: 'YES (`Woody Xylem + Phloem`)', hi: 'हाँ (`काष्ठीय संवहनी ऊतक`)' },
    seeds: { en: 'YES — Naked Seeds in Woody Cones', hi: 'हाँ — शंकु पर खुले नग्न बीज (`फल नहीं!`)' },
    ex: {
      en: 'Pine, Deodar, Cycas (`Evergreen drought-hardy needle leaves` conserve water; no ovary = no fruit wall enclosing seeds — `Group D Shifts 6, 30, 43`).',
      hi: 'चीड़ (`Pine`), देवदार, साइकस — सुई जैसी पत्तियाँ सूखे से बचाती हैं (`Shift 6`); फूल/फल न होने से बीज शंकुओं में खुले रहते हैं!',
    },
  },
  {
    id: 'angiosperms',
    label: { en: 'Angiosperms (Flower & Fruit)', hi: '5. आवृतबीजी (पुष्प व फल)' },
    vascular: { en: 'YES (`Highest Vascular Plants`)', hi: 'हाँ (`सर्वाधिक विकसित पादप`)' },
    seeds: { en: 'YES — Enclosed inside Ovary Fruit', hi: 'हाँ — फल के भीतर बंद बीज (`1 या 2 बीजपत्र`)' },
    ex: {
      en: 'Mustard, Pea, Rice, Gulmohar! Split into **Monocots** (`1 cotyledon, parallel venation, fibrous root` — Grass/Maize) & **Dicots** (`2 cotyledons, reticulate venation, taproot` — Pea/Mango).',
      hi: 'सरसों, मटर, गुलमोहर, गेहूँ! **एकबीजपत्री** (`1 बीजपत्र, समानांतर शिरा, रेशेदार जड़ — गेहूँ/मक्का`) बनाम **द्विबीजपत्री** (`2 बीजपत्र, जालिकावत शिरा, मूसला जड़ — मटर/आम`)।',
    },
  },
];

const VERTEBRATE_ANIMALS = [
  { id: 'pisces', label: { en: 'Pisces (Rohu/Shark)', hi: 'मत्स्य (रोहू/शार्क)' }, heart: { en: '2 Chambers (Single Circulation)', hi: '2 कक्ष (एकल परिसंचरण)' }, blood: { en: 'Cold-blooded (`Ectotherm`), Gills, Scales', hi: 'असमतापी, क्लोम (गिल्स), शल्क' } },
  { id: 'amphibia', label: { en: 'Amphibia (Frog / Purple Frog)', hi: 'उभयचर (मेंढक / बैंगनी मेंढक)' }, heart: { en: '3 Chambers (Tech 3 Shifts 13 & 16!)', hi: '3 कक्ष (दो आलिंद + एक निलय!)' }, blood: { en: 'Cold-blooded, Mucous Moist Skin + Lungs/Gills', hi: 'असमतापी, श्लेष्म नम त्वचा व फेफड़े' } },
  { id: 'reptilia', label: { en: 'Reptilia (Chameleon/Snake)', hi: 'सरीसृप (गिरगिट/साँप)' }, heart: { en: '3 Chambers (Crocodile Exception = 4!)', hi: '3 कक्ष (अपवाद: मगरमच्छ में 4 कक्ष!)' }, blood: { en: 'Cold-blooded, Dry Keratin Scales, Lungs', hi: 'असमतापी, सूखे शल्क, अंडों पर चर्मिल कवच' } },
  { id: 'aves', label: { en: 'Aves (Pakke Hornbills/Eagle)', hi: 'पक्षी (हॉर्नबिल/कबूतर)' }, heart: { en: '4 Chambers (Double Circulation)', hi: '4 कक्ष (पूर्ण दोहरा परिसंचरण)' }, blood: { en: 'Warm-blooded (`Endotherm`), Hollow Bones, Feathers', hi: 'समतापी, खोखली वायुवीय अस्थियाँ, पंख' } },
  { id: 'mammalia', label: { en: 'Mammalia (Tahr / Sangai / Human)', hi: 'स्तनधारी (नीलगिरि तहर / संगाई)' }, heart: { en: '4 Chambers (Zero O₂/CO₂ Mixing)', hi: '4 कक्ष (शुद्ध-अशुद्ध रक्त पूर्ण अलग)' }, blood: { en: 'Warm-blooded, Mammary Milk Glands, Hair/Pinnae', hi: 'समतापी, स्तन ग्रंथियाँ, बाह्य कर्ण व बाल' } },
];

export default function DiversityTaxonomyHierarchyLabSVG({ lang = 'hi' }) {
  const hi = lang === 'hi';
  const [tab, setTab] = useState('kingdoms');
  const [kId, setKId] = useState('fungi');
  const [pId, setPId] = useState('pteridophyta');
  const [vId, setVId] = useState('amphibia');

  const kCur = KINGDOM_CARDS.find((x) => x.id === kId) || KINGDOM_CARDS[0];
  const pCur = PLANT_DIVISIONS.find((x) => x.id === pId) || PLANT_DIVISIONS[0];
  const vCur = VERTEBRATE_ANIMALS.find((x) => x.id === vId) || VERTEBRATE_ANIMALS[0];

  return (
    <div className="my-5 rounded-2xl border border-slate-700/70 bg-slate-900/90 p-4 text-slate-100 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm font-extrabold text-emerald-300">
          {hi ? '🧬 इंटरैक्टिव 3-इन-1 वर्गीकरण प्रयोगशाला: 5-जगत निर्णय, पादप 5 वर्ग एवं कशेरुकी हृदय व पदानुक्रम' : '🧬 Interactive 3-in-1 Taxonomy Lab: 5-Kingdom Keys, Plant Divisions & Vertebrate Hearts'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'kingdoms', en: '5 Kingdoms & Q15', hi: '5-जगत व प्रश्न 15' },
            { id: 'plantae', en: '5 Plant Divisions', hi: 'पादप 5 प्रभाग' },
            { id: 'animals', en: 'Hearts & Binomial', hi: 'कशेरुकी हृदय व द्विपद' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                tab === t.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {hi ? t.hi : t.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'kingdoms' && (
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {KINGDOM_CARDS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setKId(item.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  kId === item.id ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200' : 'border-slate-700 bg-slate-800/70 text-slate-300'
                }`}
              >
                {hi ? item.label.hi : item.label.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/75 p-3.5 text-xs leading-relaxed">
            <div className="font-extrabold text-cyan-300">{hi ? kCur.label.hi : kCur.label.en}</div>
            <div className="mt-1 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'केंद्रक स्तर: ' : 'Nucleus / Level: '}</span>
                <span className="font-bold text-emerald-300">{hi ? kCur.nucleus.hi : kCur.nucleus.en}</span>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'कोशिका भित्ति: ' : 'Cell Wall: '}</span>
                <span className="font-bold text-amber-300">{hi ? kCur.wall.hi : kCur.wall.en}</span>
              </div>
            </div>
            <p className="mt-2.5 text-slate-200">{hi ? kCur.fact.hi : kCur.fact.en}</p>
          </div>
        </div>
      )}

      {tab === 'plantae' && (
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {PLANT_DIVISIONS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPId(p.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  pId === p.id ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200' : 'border-slate-700 bg-slate-800/70 text-slate-300'
                }`}
              >
                {hi ? p.label.hi : p.label.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/75 p-3.5 text-xs leading-relaxed">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'संवहनी ऊतक (Xylem/Phloem): ' : 'Vascular Tissue: '}</span>
                <span className="font-bold text-emerald-300">{hi ? pCur.vascular.hi : pCur.vascular.en}</span>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'बीज / फल स्थिति: ' : 'Seeds / Enclosure: '}</span>
                <span className="font-bold text-amber-300">{hi ? pCur.seeds.hi : pCur.seeds.en}</span>
              </div>
            </div>
            <p className="mt-2.5 text-slate-200">{hi ? pCur.ex.hi : pCur.ex.en}</p>
          </div>
        </div>
      )}

      {tab === 'animals' && (
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {VERTEBRATE_ANIMALS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVId(v.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  vId === v.id ? 'border-rose-400 bg-rose-500/20 text-rose-200' : 'border-slate-700 bg-slate-800/70 text-slate-300'
                }`}
              >
                {hi ? v.label.hi : v.label.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/75 p-3.5 text-xs leading-relaxed">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'हृदय कक्ष संख्या: ' : 'Heart Chambers: '}</span>
                <span className="font-bold text-rose-300">{hi ? vCur.heart.hi : vCur.heart.en}</span>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <span className="font-bold text-slate-400">{hi ? 'रक्त ताप व मुख्य लक्षण: ' : 'Thermoregulation & Traits: '}</span>
                <span className="font-bold text-cyan-300">{hi ? vCur.blood.hi : vCur.blood.en}</span>
              </div>
            </div>
            <div className="mt-2.5 rounded-lg bg-slate-900/90 p-2.5 text-slate-200">
              <span className="font-bold text-amber-300">{hi ? '7-स्तरीय पदानुक्रम व द्विपद नियम: ' : '7-Rank Hierarchy & Binomial: '}</span>
              {hi ? 'जगत → संघ/प्रभाग → वर्ग → गण → कुल → वंश → जाति (बाघ: Panthera tigris | मटर: Pisum sativum — वंश बड़ा अक्षर, जाति छोटा अक्षर, मुद्रण में तिरछा व हाथ से अलग रेखांकन!)' : 'Kingdom → Phylum/Division → Class → Order → Family → Genus → Species (`Panthera tigris`, `Pisum sativum` — Capital Genus, lowercase species, italicised or separately underlined!).'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
