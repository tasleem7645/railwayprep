/**
 * 5-Level Railway PYQ Taxonomy Classifier:
 * Exam -> Year / Stage -> Subject -> Chapter -> Specific Topic
 * Works across granular Group D / ALP S1 topics AND auto-classifies
 * untagged ALP 2025 / ALP 2026 S2-9 / CBT-2 / Trade shifts using keyword matching.
 */

export const EXAM_HIERARCHY = [
  {
    key: 'alp',
    label: '🚆 RRB ALP (Loco Pilot)',
    shortLabel: 'RRB ALP',
    years: [
      {
        key: 'alp-2026',
        label: '2026 Cycle • CBT-1 (9 Shifts)',
        shortLabel: '2026 CBT-1',
        filter: (t) => t.exam === 'RRB ALP 2026' && t.category !== 'sectional',
      },
      {
        key: 'alp-2025',
        label: '2025 Cycle • CBT-1 (10 Shifts)',
        shortLabel: '2025 CBT-1',
        filter: (t) => t.exam === 'RRB ALP 2025' && t.stage === 'CBT-1' && t.category !== 'sectional',
      },
      {
        key: 'alp-cbt2-a',
        label: 'CBT-2 Part A (2 Shifts • 100 Qs)',
        shortLabel: 'CBT-2 Part A',
        filter: (t) => t.stage === 'CBT-2' && t.category !== 'sectional',
      },
      {
        key: 'alp-cbt2-b',
        label: 'CBT-2 Part B • 15 ITI Trades (30 Shifts)',
        shortLabel: 'CBT-2 Trades',
        filter: (t) => t.stage === 'CBT-2 Part B',
      },
    ],
  },
  {
    key: 'groupd',
    label: '🛠️ RRB Group D (Level-1)',
    shortLabel: 'RRB Group D',
    years: [
      {
        key: 'groupd-2025',
        label: '2025 Level-1 Cycle (48 Shifts • 100 Qs)',
        shortLabel: '2025 Level-1',
        filter: (t) => t.examYear === 'groupd-2025' && t.category !== 'sectional',
      },
    ],
  },
  {
    key: 'ntpc-ug',
    label: '🎓 RRB NTPC UG (CEN 06/2024)',
    shortLabel: 'RRB NTPC UG',
    years: [
      {
        key: 'ntpc-ug-2025',
        label: 'CBT-1 Official Answer Keys (57 Shifts • 100 Qs)',
        shortLabel: 'NTPC UG CBT-1',
        filter: (t) => t.examYear === 'ntpc-ug-2025' && t.category !== 'sectional',
      },
    ],
  },
  {
    key: 'tech3',
    label: '🔧 RRB Technician Grade III (CEN 02/2024)',
    shortLabel: 'RRB Tech Gr-III',
    years: [
      {
        key: 'tech3-2024',
        label: '2024 Official Answer Keys (23 Shifts • 100 Qs)',
        shortLabel: 'Tech Gr-III 2024',
        filter: (t) => t.examYear === 'tech3-2024' && t.category !== 'sectional',
      },
    ],
  },
];

export function normalizeSubjectName(section = '') {
  const s = section.trim();
  if (s === 'General Intelligence & Reasoning') return 'Reasoning & Intelligence';
  if (s === 'General Awareness' || s === 'General Awareness & Current Affairs') {
    return 'General Awareness & GK';
  }
  if (s.startsWith('Part B:')) return s;
  return s || 'General';
}

export function cleanRawTopic(rawTopic, fallbackSection = 'General') {
  if (!rawTopic || typeof rawTopic !== 'string') return '';
  let cleaned = rawTopic.split('•')[0].trim();
  cleaned = cleaned.replace(/\s*\(\d{1,2}\s+\w+\s+\d{4}[^)]*\)?$/i, '').trim();
  cleaned = cleaned.replace(/\s*-\s*Shift\s*\d+$/i, '').trim();

  // Check if cleaned is just a generic section name rather than a specific topic
  const genericNames = new Set([
    'mathematics',
    'general science',
    'general intelligence & reasoning',
    'logical & analytical reasoning',
    'general awareness',
    'general awareness & current affairs',
    'basic science & engineering',
    (fallbackSection || '').toLowerCase(),
  ]);
  if (!cleaned || genericNames.has(cleaned.toLowerCase()) || /trade$/i.test(cleaned)) {
    return '';
  }
  return cleaned;
}

const SUBJECT_CHAPTER_RULES = {
  Mathematics: [
    {
      chapter: 'Trigonometry & Heights',
      regex: /\bsin\b|\bcos\b|\btan\b|\bcot\b|\bsec\b|\bcosec\b|\bcsc\b|\bsin[²2]|\bcos[²2]|\btan[²2]|\bcot[²2]|\bsec[²2]|\bcosec[²2]|trigonometr|angle of elevation|angle of depression|त्रिकोणमिति|उन्नयन कोण|अवनमन कोण/i,
      defaultTopic: 'Trigonometric Ratios & Heights',
    },
    {
      chapter: 'Statistics & Data Interpretation',
      regex: /\bmedian\b|\bmode\b|arithmetic mean\b|\bmean marks\b|\bmean of\b|mean score|standard deviation|variance|frequency distribution|histogram|pie chart|bar graph|cumulative frequency|ogive|class interval|माध्यिका|बहुलक|माध्य|बारंबारता|मानक विचलन|प्रसरण|पाई चार्ट/i,
      defaultTopic: 'Mean, Median, Mode & DI',
    },
    {
      chapter: 'Simple & Compound Interest',
      regex: /simple interest|compound interest|\bs\.?i\.?\b|\bc\.?i\.?\b|compounded annually|compounded half-yearly|compounded quarterly|rate of interest|interest.*per annum|\bp\.a\.?\b.*(?:interest|invest|sum|principal|amount)|simple rate|installment|साधारण ब्याज|चक्रवृद्धि ब्याज|ब्याज दर|चक्रवृद्धि|मूलधन/i,
      defaultTopic: 'Simple & Compound Interest',
    },
    {
      chapter: 'Profit, Loss & Discount',
      regex: /profit|loss|discount|cost price|selling price|marked price|list price|\bcp\b|\bsp\b|\bmp\b|gain\s*%|gain percent|dishonest|false weight|markup|successive discount|लाभ|हानि|बट्टा|छूट|क्रय मूल्य|विक्रय मूल्य|अंकित मूल्य/i,
      defaultTopic: 'CP, SP, Profit, Loss & Discount',
    },
    {
      chapter: 'Geometry',
      regex: /\btriangle\b|congruen|similar triangles|\bsss\b|\bsas\b|\basa\b|\brhs\b|pythagoras|hypotenuse|altitude|median of triangle|centroid|incentre|orthocentre|circumcentre|\bcircle\b|\bchord\b|\btangent\b|\bsecant\b|cyclic quadrilateral|supplementary angle|complementary angle|transversal|parallel lines|exterior angle|interior angle|angle bisector|bisector of|regular polygon|diagonals of|Δ\s*[A-Z]{2,3}|∠|त्रिभुज|सर्वांगसम|समरूप|वृत्त|जीवा|स्पर्श रेखा|चक्रीय चतुर्भुज|कोण|बहुभुज/i,
      defaultTopic: 'Triangles, Circles, Tangents & Angles',
    },
    {
      chapter: 'Mensuration 2D & 3D',
      regex: /\bperimeter\b|\bcircumference\b|\barea\b|\bvolume\b|surface area|\btsa\b|\bcsa\b|\blsa\b|curved surface|total surface|lateral surface|\bcube\b|\bcuboid\b|\bcylinder\b|\bcone\b|\bsphere\b|\bhemisphere\b|\bfrustum\b|\bprism\b|\bpyramid\b|\bsquare\b.*side|\brectangle\b|\brhombus\b|\btrapezium\b|\bparallelogram\b|\bsector\b|\barc length\b|slant height|\bradius\b|\bdiameter\b|recast|melted.*(?:sphere|cone|cube|cylinder)|क्षेत्रफल|परिमाप|परिधि|आयतन|पृष्ठीय क्षेत्रफल|बेलन|शंकु|गोला|अर्धगोला|घन|घनाभ|समचतुर्भुज|समलंब/i,
      defaultTopic: '2D Area & 3D Volume / Surface Area',
    },
    {
      chapter: 'Time, Work & Pipes',
      regex: /time.*work|piece of work|complete.*work|work in \d+\s*days|days to complete|alone can do|together.*complete|work.*efficiency|\bpipe\b|\bpipes\b|\bcistern\b|\btank\b.*(?:fill|empty)|leak.*tank|inlet|outlet|men.*days|women.*days|boys.*days|wages.*work|कार्य.*समय|काम.*दिनों में|दिनों में पूरा|कार्यक्षमता|पाइप|टंकी|निकासी|मजदूरी/i,
      defaultTopic: 'Work, Efficiency & Pipes/Cisterns',
    },
    {
      chapter: 'Time, Speed, Distance & Trains',
      regex: /\bspeed\b|\bvelocity\b|\bdistance\b|\btrain\b|\btrains\b|\bplatform\b|\bboat\b|\bstream\b|\bupstream\b|\bdownstream\b|\btsd\b|km\/h|m\/s|relative speed|circular track|earlier.*late.*minute|average speed|रेलगाड़ी|चाल|दूरी|प्लेटफार्म|नाव|धारा|अनुप्रवाह|ऊर्ध्वप्रवाह/i,
      defaultTopic: 'Speed, Trains & Boats/Streams',
    },
    {
      chapter: 'Algebra & Equations',
      regex: /\balgebra\b|\bpolynomial\b|\bquadratic\b|\bdiscriminant\b|\broots of\b|linear equation|unique solution|no solution|infinitely many|coincident lines|factor(?:s|ize)? of.*x|\b[a-z]\s*\+\s*1\/(?:\(?\d*[a-z]\)?)|[a-z]\s*-\s*1\/(?:\(?\d*[a-z]\)?)|[a-z][²2]\s*[+\-]\s*1\/|a\s*\+\s*b\s*\+\s*c\s*=\s*0|\b[a-z][²³23]\s*[+\-]\s*[a-z][²³23]|\([a-z0-9]+pq|xz\s*=\s*y|बीजगणित|बहुपद|द्विघात समीकरण|मूल|समीकरण|रैखिक समीकरण/i,
      defaultTopic: 'Polynomials, Equations & Identities',
    },
    {
      chapter: 'Ratio, Proportion & Mixture',
      regex: /\bratio\b|\bproportion\b|\b[A-Za-z]\s*:\s*[A-Za-z]\b|\d+\s*:\s*\d+\b|mean proportional|third proportional|fourth proportional|\bmixture\b|\balligation\b|\bpartnership\b|invested.*business|present age|\bages\b|father.*son|years ago|years hence|अनुपात|समानुपात|मिश्रण|साझेदारी|आयु|वर्तमान आयु/i,
      defaultTopic: 'Ratio, Proportion, Partnership & Ages',
    },
    {
      chapter: 'Average & Weighted Mean',
      regex: /\baverage\b|औसत/i,
      defaultTopic: 'Average & Deviation Problems',
    },
    {
      chapter: 'Percentage',
      regex: /percent|%|\bpercentage\b|प्रतिशत|election|voter|population|depreciat|income.*spent|expenditure.*savings|marks.*scored.*passed|failed by|जनसंख्या|चुनाव|मतदाता|मूल्यह्रास/i,
      defaultTopic: 'Percentage & Successive Applications',
    },
    {
      chapter: 'Number System, HCF/LCM & Simplification',
      regex: /\bhcf\b|\blcm\b|\bgcd\b|greatest common|least common|divisible|divisibility|\bremainder\b|unit[’']?s? digit|units['’]? place|\bsimplif|\bbodmas\b|vinculum|\bfraction\b|\brecurring\b|\u0304|overline|repeating decimal|terminating decimal|\bsquare root\b|\bcube root\b|\bsurd|\bindices\b|\bexponent\b|laws of indices|rationali|irrational|\bprime\b|co-?prime|composite number|twin prime|face value|place value|trailing zero|number of factors|prime factors|divisors of|consecutive (?:even|odd|natural|whole|positive|integer|multiple)?\s*numbers?|two-digit number|interchang.*digits|natural number|whole number|sum of squares of|√|∛|∜|evaluate\b|value of.*(?:\[|\{|\÷|\/.*\/|[⁰¹²³⁴⁵⁶⁷⁸⁹]|[\d.]+\s*[×÷*/])|संख्या पद्धति|ल\.स\.|म\.स\.|लघुत्तम|महत्तम|सरलीकरण|मान ज्ञात|शेषफल|इकाई अंक|अभाज्य|सह-अभाज्य|विभाज्य|वर्गमूल|घनमूल|दशमलव|भिन्न|क्रमागत.*संख्या|प्राकृत संख्या|अंकों का योग|गुणनखंड/i,
      defaultTopic: 'Number System, Divisibility, HCF/LCM & BODMAS',
    },
  ],

  'General Science': [
    {
      chapter: 'Physics: Light, Optics & Spectrum',
      regex: /light|mirror|lens|refract|reflect|focal|concave|convex|prism|spectrum|dispersion|eye|myopia|hypermetropia|snell|प्रकाश|दर्पण|लेंस|अपवर्तन/i,
      defaultTopic: 'Optics, Mirrors & Lenses',
    },
    {
      chapter: 'Physics: Electricity & Magnetism',
      regex: /ohm|resistan|current|ampere|volt|circuit|series|parallel|watt|electric|magnet|solenoid|fleming|faraday|galvanometer|विद्युत|प्रतिरोध|धारा|चुंबक/i,
      defaultTopic: "Ohm's Law, Circuits & Magnetism",
    },
    {
      chapter: 'Physics: Mechanics, Motion & Energy',
      regex: /newton|force|motion|velocity|accelerat|momentum|inertia|work|energy|power|kinetic|potential|gravitat|pressure|buoyancy|archimedes|बल|गति|कार्य|ऊर्जा|गुरुत्वाकर्षण/i,
      defaultTopic: 'Motion, Laws & Work-Energy',
    },
    {
      chapter: 'Physics: Sound, Heat & Units',
      regex: /sound|ultrasound|frequency|decibel|wave|acoustic|heat|temperature|celsius|kelvin|latent|unit|instrument|ध्वनि|ऊष्मा|तापमान|मात्रक/i,
      defaultTopic: 'Sound Waves, Heat & SI Units',
    },
    {
      chapter: 'Chemistry: Atoms & Periodic Table',
      regex: /atom|molecule|electron|proton|neutron|isotope|isobar|periodic|mendeleev|moseley|valency|atomic number|noble gas|halogen|परमाणु|आवर्त सारणी|तत्व/i,
      defaultTopic: 'Atomic Structure & Periodic Table',
    },
    {
      chapter: 'Chemistry: Reactions, Acids, Bases & Salts',
      regex: /acid|base|alkali|ph\b|salt|litmus|neutrali|reaction|displacement|decomposition|redox|oxida|reduc|mixture|colloid|solution|अम्ल|क्षार|अभिक्रिया|विलयन/i,
      defaultTopic: 'Chemical Reactions, Acids & pH',
    },
    {
      chapter: 'Chemistry: Metals, Non-Metals & Organic',
      regex: /metal|metallurg|alloy|brass|bronze|steel|ore|carbon|hydrocarbon|alkane|alkene|functional group|ethanol|bleaching|plaster of paris|baking soda|धातु|मिश्रधातु|कार्बन|प्लास्टर/i,
      defaultTopic: 'Metals, Alloys & Carbon Compounds',
    },
    {
      chapter: 'Biology: Human Body, Health & Nutrition',
      regex: /human|heart|blood|brain|nervous|kidney|nephron|digesti|enzyme|hormone|vitamin|disease|deficiency|vaccine|antibiotic|respirat|रक्त|मस्तिष्क|विटामिन|रोग|पाचन/i,
      defaultTopic: 'Human Anatomy, Vitamins & Diseases',
    },
    {
      chapter: 'Biology: Plants, Cell & Ecosystem',
      regex: /plant|photosynthesis|xylem|phloem|chlorophyll|cell|mitochondria|ribosome|dna|rna|genetics|mendel|ecosystem|food chain|biodiversity|climate|कोशिका|पादप|प्रकाश संश्लेषण|पारिस्थितिकी/i,
      defaultTopic: 'Plant Biology, Cell & Ecology',
    },
  ],

  'Reasoning & Intelligence': [
    {
      chapter: 'Coding-Decoding & Letter Patterns',
      regex: /code|coded|coding|alphabet|letter-cluster|word.*sequence|meaningful word|mirror.*letter|कूट|अक्षर/i,
      defaultTopic: 'Coding-Decoding & Letter Clusters',
    },
    {
      chapter: 'Series & Missing Numbers',
      regex: /series|next in|missing number|question mark \(\?\)|alpha-numeric|शृंखला|लुप्त संख्या/i,
      defaultTopic: 'Number & Alphabet Series',
    },
    {
      chapter: 'Analogy & Classification (Odd One Out)',
      regex: /analog|related to|odd one|alike in|three of the following|triangle.*pair|सादृश्य|भिन्न/i,
      defaultTopic: 'Number & Word Analogy',
    },
    {
      chapter: 'Syllogism & Logical Statements',
      regex: /syllogism|statement.*conclusion|all .* are|some .* are|data.*sufficient|both needed|course of action|कथन|निष्कर्ष/i,
      defaultTopic: 'Syllogism & Conclusions',
    },
    {
      chapter: 'Seating Arrangement & Puzzles',
      regex: /sitting|seating|circular|facing center|facing north|floor|building|row|rank|tallest|sitting around|बैठक|पंक्ति|मंजिल/i,
      defaultTopic: 'Seating Arrangement & Floors',
    },
    {
      chapter: 'Blood Relations & Direction Sense',
      regex: /father|mother|sister|brother|son|daughter|wife|husband|relation|north|south|east|west|turns left|turns right|रक्त संबंध|दिशा/i,
      defaultTopic: 'Blood Relations & Directions',
    },
    {
      chapter: 'Mathematical Operations & Sets',
      regex: /interchange|signs.*numbers|mathematical operation|sets of numbers|bracket|चिह्न|गणितीय संक्रिया/i,
      defaultTopic: 'Operator Interchange & Sets',
    },
    {
      chapter: 'Clock, Calendar, Venn & Visual',
      regex: /calendar|day of.*week|leap year|monday|tuesday|clock|angle between hands|venn diagram|mirror image|paper fold|dice|cube|कैलेंडर|घड़ी|वेन आरेख/i,
      defaultTopic: 'Calendar, Clock & Venn Diagrams',
    },
  ],

  'General Awareness & GK': [
    {
      chapter: 'Awards, Honors & Sports',
      regex: /award|prize|nobel|padma|bharat ratna|gallantry|cricket|ipl|olympic|asian games|hockey|football|tennis|badminton|medal|championship|पुरस्कार|खेल/i,
      defaultTopic: 'Awards & Sports Updates',
    },
    {
      chapter: 'Indian Polity & Constitution',
      regex: /article|constitution|parliament|supreme court|president|prime minister|governor|election|panchayat|fundamental right|niti aayog|finance commission|संविधान|अनुच्छेद|संसद/i,
      defaultTopic: 'Articles, Polity & Governance',
    },
    {
      chapter: 'Schemes, Economy & Reports',
      regex: /scheme|yojana|budget|rbi|repo rate|gdp|tax|index|ranking|ayushman|digital india|ministry|योजना|बजट|अर्थव्यवस्था/i,
      defaultTopic: 'Govt Schemes, Budget & RBI',
    },
    {
      chapter: 'ISRO, Defence & Science Tech',
      regex: /isro|satellite|missile|drdo|space mission|defence|exercise|vaccine|artificial intelligence|quantum|इसरो|रक्षा|उपग्रह/i,
      defaultTopic: 'Space, Defence & Tech',
    },
    {
      chapter: 'International, Geography & Environment',
      regex: /g20|g7|brics|sco|summit|un\b|treaty|paris|cop|park|reserve|species|river|mountain|climate|foreign|शिखर सम्मेलन|नदी|अभयारण्य/i,
      defaultTopic: 'Summits, Geography & Ecology',
    },
    {
      chapter: 'History, Books, Days & Static GK',
      regex: /author|book|novel|day\b|festival|dance|temple|dynasty|freedom|gandhi|mughal|ancient|harappa|पुस्तक|दिवस|इतिहास|नृत्य/i,
      defaultTopic: 'Books, Days & Static GK',
    },
  ],

  'Basic Science & Engineering': [
    {
      chapter: 'Engineering Drawing & Views',
      regex: /drawing|projection|orthographic|isometric|title block|line|hatching|compass|scale|pencil|ड्राइंग|प्रक्षेप/i,
      defaultTopic: 'Engineering Drawing Instruments & Views',
    },
    {
      chapter: 'Work, Power, Energy & Motion',
      regex: /work|power|energy|kinetic|potential|speed|velocity|accelerat|mass|weight|density|gravity|momentum|torque|friction|pressure|watt|joule|force|कार्य|शक्ति|ऊर्जा|घनत्व|बल/i,
      defaultTopic: 'Work, Power, Energy & Density',
    },
    {
      chapter: 'Simple Machines & Levers',
      regex: /lever|fulcrum|pulley|mechanical advantage|velocity ratio|efficiency|effort|load|inclined|screw|wedge|उत्तोलक|घिरनी/i,
      defaultTopic: 'Levers & Simple Machines',
    },
    {
      chapter: 'Heat, Temperature & Units',
      regex: /heat|temperature|specific heat|latent|conduction|convection|radiation|thermometer|kelvin|celsius|fahrenheit|si unit|measurement|caliper|micrometer|vernier|ऊष्मा|ताप|मात्रक/i,
      defaultTopic: 'Heat Transfer & Measurements',
    },
    {
      chapter: 'Basic Electricity, IT & Safety (OHS)',
      regex: /ohm|voltage|current|ampere|resistan|circuit|conductor|insulator|battery|fuse|computer|binary|ram|cpu|software|internet|safety|fire extinguisher|ppe|hazard|environment|pollution|first aid|विद्युत|कंप्यूटर|सुरक्षा/i,
      defaultTopic: 'Basic Electricity, IT & Safety',
    },
  ],
};

function classifyTradeChapter(searchBlob, tradeSubject) {
  if (/safety|fire|ppe|extinguisher|first aid|hazard|precaution/i.test(searchBlob)) {
    return { chapter: 'Workshop Safety & PPE', topic: 'Safety Signs & Fire Extinguishers' };
  }
  if (/multimeter|ammeter|voltmeter|megger|ohmmeter|wattmeter|cro|caliper|micrometer|gauge|vernier/i.test(searchBlob)) {
    return { chapter: 'Measuring & Precision Instruments', topic: 'Gauges, Meters & Testing Tools' };
  }
  if (/motor|generator|transformer|alternator|armature|winding|commutator|induction|rotor|stator/i.test(searchBlob)) {
    return { chapter: 'Electrical Machines & Transformers', topic: 'Motors, Alternators & Transformers' };
  }
  if (/diode|transistor|rectifier|resistor|capacitor|semiconductor|logic gate|led|scr|ic\b|amplifier|oscillator/i.test(searchBlob)) {
    return { chapter: 'Electronics & Semiconductors', topic: 'Diodes, Transistors & Circuits' };
  }
  if (/wiring|earthing|fuse|mcb|cable|insulat|ohm|voltage|current|circuit|battery|cell/i.test(searchBlob)) {
    return { chapter: 'Circuits, Wiring & Earthing', topic: 'AC/DC Circuits, Wiring & Cells' };
  }
  if (/engine|piston|crankshaft|valve|diesel|carburetor|cooling|lubricat|clutch|gearbox|brake|refrigerant|compressor/i.test(searchBlob)) {
    return { chapter: 'Engines, RAC & Auto Systems', topic: 'IC Engines, Cooling & Transmission' };
  }
  if (/lathe|drill|chisel|file|saw|welding|thread|tap|die|bearing|heat treatment|annealing|tempering/i.test(searchBlob)) {
    return { chapter: 'Machining, Fitting & Welding', topic: 'Tools, Lathe, Threads & Welding' };
  }
  return { chapter: `${tradeSubject.replace('Part B: ', '')} Core Concepts`, topic: 'Technical Trade Practice' };
}

export function classifyQuestionTaxonomy(q) {
  const subject = normalizeSubjectName(q.section);
  const existingTopic = cleanRawTopic(q.topic, q.section);
  const enQ = q.question?.en || '';
  const hiQ = q.question?.hi || '';
  const approach = q.solution?.approach || '';
  const searchBlob = `${existingTopic} ${enQ} ${hiQ} ${approach}`;

  if (subject.startsWith('Part B:')) {
    const res = classifyTradeChapter(searchBlob, subject);
    return {
      subject,
      chapter: res.chapter,
      topic: existingTopic || res.topic,
    };
  }

  const rules = SUBJECT_CHAPTER_RULES[subject] || [];
  for (const rule of rules) {
    if (rule.regex.test(searchBlob)) {
      return {
        subject,
        chapter: rule.chapter,
        topic: existingTopic || rule.defaultTopic,
      };
    }
  }

  return {
    subject,
    chapter: existingTopic ? `${subject}: Additional Chapters` : `${subject}: General Mix`,
    topic: existingTopic || `${subject} Practice`,
  };
}
