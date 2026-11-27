/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc111.pdf, Pages 208–227) + Railway Biology Deep-Dive
 * Chapter 11: Reproduction — Continuity of Life (जनन — जीवन की निरंतरता) — Gold Standard v3
 * Complete Coverage: 11.1 Asexual Reproduction (Potato eyes, Bryophyllum/Kalanchoe leaf buds, 45°–60° Stem Cutting, Grafting Stock+Scion, Layering,
 * Virus-free Shoot-tip Tissue Culture; Act 11.2 Yeast in 10% warm sugar + Hydra budding; Act 11.3 Rhizopus & Aspergillus spores 25–35°C, Fridge slowdown,
 * Louis Pasteur Germ Theory, Penicillin/Amoxicillin) ->
 * 11.2 Sexual Reproduction, Mitosis vs Meiosis (2n=46 -> n=23, Act 11.4 2³=8 Bead Combinations), Complete vs Incomplete Flowers (4 Whorls),
 * Act 11.6 Pea Emasculation & Bagging, Wind/Water (Vallisneria/Hydrilla)/Insect/Bird (Sunbird, Indian White-eye) Pollination, Table 11.3 Pollen vs Seeds,
 * Fertilisation -> Ovule to Seed & Ovary to Fruit, P. Maheshwari (Father of Indian Embryology) ->
 * 11.3–11.4 Animal Diversity: External (Fish 100–1000, Frog 5k–50k) vs Internal (Lizard 2–20, Bird 1–15), Oviparous vs Viviparous, Larval Metamorphosis ->
 * 11.5 Human Reproduction (Male Scrotum/Testes/Vas Deferens/Seminal-Prostate/Urethra + Female Ovary/Oviduct/Uterus), S. Mukhopadhyay (1978 Durga IVF),
 * Table 11.5 Sperm vs Ovum, 28-Day Menstrual Cycle (Days 1–5 Shed, 6–14 Rebuild, Day 14 Ovulation, 15–28 Secretory), XX/XY Sex Determination,
 * Hygiene (4–6h pad change), 3 Trimesters (97–100.3°F newborn), CDRI Lucknow Weekly Non-steroidal Pill, Condoms (STIs), Copper-T, Surgery.
 * All 7 Activities (11.1–11.7), 11 Think & Answer Qs, 13 Solved Exercises verified vs ihsc1an, 5 Tables, 10 Flashcards, 24 Pure RRB PYQs.
 */

export const C9_CH11_REPRODUCTION_DATA = {
  id: 'c9-bio-ch11',
  classId: 'class9',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 11,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 11: Reproduction — Continuity of Life (CBT Edition)',
  blueprintSvgKey: 'c9-ch11-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Asexual Modes, Vegetative Propagation (Bryophyllum, Tissue Culture), Yeast/Hydra Budding & Rhizopus Spores (11.1)', hi: 'अलैंगिक विधियाँ, कायिक प्रवर्धन (ब्रायोफिलम, ऊतक संवर्धन), मुकुलन व राइजोपस बीजाणु (11.1)' }, pct: 28 },
    { label: { en: 'Meiosis (46 → 23), Floral Whorls, Pollination Agents, Chemotropism Bagging (Act 11.6) & Ovule→Seed / Ovary→Fruit (11.2)', hi: 'अर्धसूत्री (46→23), पुष्प 4 चक्र, परागण कारक, क्र. 11.6 व निषेचन बाद बीजांड→बीज / अंडाशय→फल' }, pct: 28 },
    { label: { en: 'Animal Reproduction: External (Fish/Frog) vs Internal Fertilisation, Oviparous/Viviparous & Metamorphosis (11.3–11.4)', hi: 'जंतु जनन: बाह्य (मछली/मेंढक) बनाम आंतरिक निषेचन, अंडज/जरायुज व कायांतरण (11.3–11.4)' }, pct: 18 },
    { label: { en: 'Human Systems (Scrotum, Oviduct, Uterus), 28-Day Menstrual Cycle, XX/XY, IVF (1978) & Contraception / STI Safety (11.5)', hi: 'मानव जनन (वृषणकोश, अंडवाहिनी, गर्भाशय), 28-दिन रजोधर्म, XX/XY, IVF (1978) व गर्भनिरोधन' }, pct: 26 },
  ],
  title: {
    en: 'Chapter 11: Reproduction — Continuity of Life',
    hi: 'अध्याय 11: जनन — जीवन की निरंतरता',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Asexual Clones, Meiosis, Plant Pollination, Animal Strategies & Human Reproductive Biology (`ihsc111`)',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • अलैंगिक जनन, अर्धसूत्री विभाजन, परागण प्रयोग, जंतु कायांतरण, रजोधर्म व गर्भनिरोधक विज्ञान (`ihsc111`)',
  },
  metrics: {
    pages: 20,
    activities: 7,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 13,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch11/hero-reproduction.webp',
    caption: {
      en: 'Continuity of Life Master Atlas (`NCERT Ch 11`): Floral Pollination & Ovule Fertilisation, Bryophyllum Leaf-Bud & Hydra Asexual Cloning, Microscopic Spores, and DNA Inheritance across Generations.',
      hi: 'जीवन की निरंतरता प्रयोगशाला (`NCERT अध्याय 11`): पुष्प परागण व बीजांड निषेचन, ब्रायोफिलम व हाइड्रा अलैंगिक जनन तथा डीएनए आनुवंशिकता का समग्र चित्र।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Asexual Reproduction (`11.1`) = 1 Parent, Mitosis Only (`Identical Clones`)**: No gametes, no fertilisation! **Natural Vegetative**: Potato tubers (`eyes`), Ginger (`rhizome`), Mint (`runners`), **Bryophyllum leaves** (`plantlets along leaf margins`, `Tech 3 Shifts 10, 15, 19`). **Artificial Horticulture (`Act 11.1`)**: Stem **Cutting (`45°–60°` slant)**, **Grafting (`Rooted Stock + Desired Scion`)**, **Layering (`bent stems rooted in soil`)**, **Shoot-tip Tissue Culture** (`rapid virus-free crops like Banana/Orchids, zero variation risk!`). **Microbes & Hydra**: **Amoeba** (`any-plane binary fission`), **Leishmania** (`longitudinal fission along flagellum`), **Plasmodium** (`multiple fission`), **Spirogyra** (`fragmentation`), **Hydra & Planaria** (`regeneration`), **Yeast (`Act 11.2 10% warm sugar`) & Hydra** (`budding at specific site`), **Rhizopus & Aspergillus (`Act 11.3 25–35°C`)** (`sporangia spores` — inhibited by refrigeration; Pasteur disproved spontaneous generation!).',
      hi: '**अलैंगिक जनन (`11.1`) = 1 जनक, केवल समसूत्री विभाजन (`आनुवंशिक क्लोन`)**: युग्मक व निषेचन नहीं! **प्राकृतिक कायिक**: आलू की आँख, अदरक (`प्रकंद`), पुदीना, **ब्रायोफिलम पत्ती** (`किनारों पर पादपक कलियाँ`)। **कृत्रिम बागवानी (`क्र. 11.1`)**: तना **कर्तन (`45°–60°` तिरछा कट)**, **कलम लगाना (`स्टॉक + सायन`)**, **परतन**, तथा **प्ररोह-शीर्ष ऊतक संवर्धन (`केला — विषाणु मुक्त व तीव्र, पर रोग खतरा समान!`)**। **अन्य अलैंगिक**: **अमीबा** (`किसी भी तल में द्विखंडन`), **लेस्मानिया** (`कशाभ की निश्चित दिशा में द्विखंडन`), **प्लाज्मोडियम** (`बहुखंडन`), **स्पाइरोगाइरा** (`खंडन`), **हाइड्रा/प्लेनेरिया** (`पुनर्जनन`), **यीस्ट (`क्र. 11.2 गर्म शर्करा`) व हाइड्रा** (`मुकुलन`), एवं **राइजोपस/ऐस्पर्जिलस (`क्र. 11.3 25–35°C`)** (`बीजाणुधानी बीजाणु` — फ्रिज में निष्क्रिय; लुई पाश्चर रोगाणु सिद्धांत)!',
    },
    {
      en: '**Meiosis & Plant Sexual Reproduction (`11.2`)**: **==Meiosis (`Reduction Division`) halves chromosomes `2n → n` (`46 to 23`)==** in gametes so zygote restores `46`, and generates variation (`Act 11.4`: `3` bead pairs produce `2³` -> `8` combinations!). **Flower (`4 Whorls`)**: **Sepals (`protection`)**, **Petals (`attract insects`)**, **Stamen (`Filament + Anther -> Pollen/Male`)**, **Pistil/Carpel (`Stigma + Style + Ovary -> Ovules/Female`)**. **Act 11.6 (`Pea Bagging`)**: Removing anthers BEFORE opening + bagging yields NO fruit, proving **pollination is mandatory**. **Agents**: Wind (`Grass/Maize: 5–10 lakh dry pollen -> 50–200 seeds`), Water (`Vallisneria/Hydrilla`), Insects & Birds (`Sunbird/White-eye`, nectar + sticky pollen: `20–40k -> 800–1000 seeds`). **Post-Fertilisation**: Pollen tube grows via **chemotropism** down the **style** -> **`Ovule -> Seed`**, **`Ovary -> Fruit`** (`Prof. P. Maheshwari — Father of Indian Embryology`).',
      hi: '**अर्धसूत्री विभाजन व पुष्प में जनन (`11.2`)**: **==अर्धसूत्री विभाजन (`Meiosis`) से युग्मकों में गुणसूत्र आधे (`46 → 23`) हो जाते हैं==**, जिससे निषेचन के बाद युग्मनज पुनः `46` रहता है (`क्र. 11.4: 3 जोड़ी मनकों से 2³ अर्थात् 8 संयोजन`)! **पुष्प के 4 चक्र**: **बाह्यदल (`रक्षा`)**, **दल (`कीट आकर्षण`)**, **पुंकेसर (`तंतु + परागकोश → नर परागकण`)**, **स्त्रीकेसर (`वर्तिकाग्र + वर्तिका + अंडाशय → बीजांड`)**। **क्र. 11.6 (`मटर थैली प्रयोग`)**: कली से पुंकेसर हटाकर थैली बाँधने पर **फल नहीं बनता** — परागण अनिवार्य! **कारक**: वायु (`मक्का/घास: 5–10 लाख हल्के पराग → 50–200 बीज`), जल (`वेलिसनेरिया/हाइड्रिला`), कीट व पक्षी (`शकरखोरा/व्हाइट-आई`)। **निषेचन बाद**: पराग नलिका रसायनानुवर्तन से **वर्तिका** पार कर अंडाशय पहुँचती है ⇒ **`बीजांड → बीज`** तथा **`अंडाशय → फल`** (`प्रो. पंचानन माहेश्वरी — भारतीय भ्रूण विज्ञान के जनक`)!',
    },
    {
      en: '**Animal Reproduction (`11.3–11.4`) — Energy, Numbers & Metamorphosis**: **External Fertilisation (`Fish 100–1000 eggs, Frog 5000–50,000 eggs` — water medium)** needs huge egg counts + tiny yolk because predators destroy most embryos -> hatch into feeding **larvae (`tadpole, caterpillar`)** before **metamorphosis** (`complete transformation`). **Internal Fertilisation (`Lizard 2–20 shelled eggs, Bird 1–15, Mammals 1–2`)**: Safe inside female body, lower egg count, **Oviparous (`egg-laying`)** vs **Viviparous (`placental live-birth nourishment`)**!',
      hi: '**जंतुओं में जनन विविधता (`11.3–11.4`) — अंड संख्या व कायांतरण**: **बाह्य निषेचन (`जल में: मछली 100–1000 व मेंढक 5,000–50,000 अंडे`)** में परभक्षी व बहाव से भारी क्षति के कारण अत्यधिक अंडे बनते हैं व कम पीतक से शीघ्र **लार्वा (`टैडपोल, इल्ली`)** निकल बाहर भोजन कर **कायांतरण (`Metamorphosis`)** करते हैं। **आंतरिक निषेचन (`छिपकली 2–20, पक्षी 1–15, स्तनधारी`)** अधिक सुरक्षित है। अंडे देने वाले **अंडज (`Oviparous`)** व विकसित शिशु को जन्म देने वाले **जरायुज (`Viviparous`)** कहलाते हैं!',
    },
    {
      en: '**Human Reproductive Biology, Cycle & Safety (`11.5`)**: **Male**: **Testes inside Scrotum (`2–3°C cooler than 37°C` for sperm)** secrete **Testosterone** -> **Vas Deferens** (`cut cleanly in Vasectomy`) + **Seminal Vesicle / Prostate** nutrient fluids -> shared **Urethra** (`urinary + semen`). **Female**: **Ovaries (`Oestrogen + Progesterone`)** -> **==Oviduct / Fallopian Tube (`ACTUAL site of fertilisation!`)==** -> **Uterus (`implantation & Placenta nutrition`)**. **28-Day Cycle**: Days `1–5` menstrual bleeding (`endometrium sheds`), `6–14` follicle/lining rebuild, **==Day 14 Ovulation==** (`e.g. March 20 start -> April 2 ovulation!`), `15–28` thick secretory wall (`clean pad change every 4–6 h`). **Sex Determination**: Mother always `X`; **Father’s `X` or `Y` chromosome decides child sex (`50:50`)**! **IVF Pioneer**: **Dr. Subhash Mukhopadhyay (`1978 Durga`)**. **Contraception**: **CDRI Lucknow non-steroidal weekly pill (`Saheli`)**, **Condom** (`only barrier blocking both pregnancy & STIs like HIV, Gonorrhoea, Syphilis, Herpes!`), **Copper-T (`IUD`)**, **Vasectomy/Tubectomy**.',
      hi: '**मानव जनन तंत्र, रजोधर्म व सुरक्षा (`11.5`)**: **नर तंत्र**: **वृषण उदर से बाहर वृषणकोश में (`2–3°C कम तापमान`)** शुक्राणु व **टेस्टोस्टेरोन** बनाते हैं → **शुक्रवाहिनी** (`नसबंदी में बंद`) + **शुक्राशय/प्रोस्टेट द्रव** → **मूत्रमार्ग** (`मूत्र व वीर्य का साझा मार्ग`)। **मादा तंत्र**: **अंडाशय (`एस्ट्रोजन`)** → **==डिंबवाहिनी / फैलोपियन ट्यूब (`निषेचन का वास्तविक स्थल!`)==** → **गर्भाशय** (`भ्रूण रोपण व अपरा/प्लेसेंटा द्वारा पोषण`)। **28-दिवसीय चक्र**: दिन `1–5` रक्तस्राव (`अंतर्गर्भाशयकला का टूटना`), दिन `6–14` पुनर्निर्माण, **==दिन 14 अंडोत्सर्ग (`जैसे 20 मार्च आरंभ → 2 अप्रैल अंडोत्सर्ग!`)==** (`पैड हर 4–6 घंटे में बदलें`)। **लिंग निर्धारण**: सदैव **पिता का `X` या `Y` गुणसूत्र** निर्धारक (`50:50`)! **IVF जनक**: **डॉ. सुभाष मुखोपाध्याय (`1978 दुर्गा`)**। **गर्भनिरोधन**: **CDRI लखनऊ साप्ताहिक गोली (`सहेली`)**, **कंडोम (`STI: HIV/सुजाक/सिफलिस/हर्पीज से बचाने वाला एकमात्र यांत्रिक अवरोध!`)**, **कॉपर-T (`IUD`)** व शल्य नसबंदी!',
    },
  ],
  sections: [
    {
      id: 'asexual-vegetative-meiosis',
      number: '11.1–11.2a',
      flowDiagramKey: 'c9-ch11-blueprint-mindmap',
      diagramKey: 'c9-ch11-asexual-meiosis-diagram',
      title: {
        en: 'Asexual Reproduction (`Clones & Spores`), Mitosis vs Meiosis (`46 → 23`) & Evolution of Variation',
        hi: 'अलैंगिक जनन (`कायिक, मुकुलन, बीजाणु`), समसूत्री बनाम अर्धसूत्री (`46 → 23`) एवं आनुवंशिक विभिन्नता',
      },
      summaryTag: {
        en: 'NCERT Pages 208–214 • Potato Eyes, Bryophyllum, 45°–60° Cutting, Grafting, Tissue Culture, Act 11.2 Yeast/Hydra, Act 11.3 Spores, Pasteur & Act 11.4 Meiosis Beads',
        hi: 'NCERT पृ. 208–214 • आलू, ब्रायोफिलम, कर्तन-कलम, ऊतक संवर्धन, क्र. 11.2 यीस्ट-हाइड्रा, क्र. 11.3 राइजोपस व पाश्चर तथा क्र. 11.4 अर्धसूत्री विभाजन',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Why DNA Copying Matters + Natural & Artificial Vegetative Propagation (`Act 11.1`): Clones vs Crop Vulnerability',
            hi: '1. डीएनए प्रतिकृति का आधार तथा प्राकृतिक एवं कृत्रिम कायिक प्रवर्धन (`क्र. 11.1`): क्लोन लाभ व फसल जोखिम',
          },
          conceptStory: {
            en: 'Unlike nutrition or breathing, **reproduction** is not essential to keep one individual alive — yet it is essential for **==continuity of the species==** (`Tech 3 Shift 6`: creation of a **DNA copy** is the basic cellular event!).\n• **==Asexual Reproduction (`11.1`)==**: Only **ONE parent**, **mitotic cell division (`2n -> 2n`)** only, NO gamete fusion -> **genetically identical offspring (`Clones`)**.\n• **Natural Vegetative Propagation in Plants (`Roots, Stems, Leaves`)**: Potato **stem tuber (`eyes/axillary buds`)**, Ginger **rhizome**, Strawberry/Mint **runners**, Sweet potato/Dahlia **roots**, and **==Bryophyllum / Kalanchoe leaf notches==** (`adventitious buds sprout tiny roots/shoots on leaf margins and fall onto damp soil to grow whole plants!` — `Tech 3 Shifts 10, 15, 19`). *Watch RRB Trap*: **Seeds and flowers are NEVER vegetative organs** (`Group D 7`, `Tech 3 14, 16`); banana, sugarcane & rose propagate vegetatively whereas **Papaya** reproduces via seeds (`Tech 3 Shift 8`)!\n• **Horticulture Techniques (`Activity 11.1`)**:\n  1) **Stem Cutting (`Hibiscus/Rose`)**: Clean slant cut at **`45°–60°`** right below a **node (`2–3` nodes)** preserves vascular contact & increases absorbing surface (`wet moss wrapping prevents drying`).\n  2) **Grafting**: Joining rooted **Stock (`disease/drought resistant base`)** with **Scion (`high-yield fruit shoot`)** of closely related plants — brings **early fruiting + identical mango/citrus quality**.\n  3) **Layering (`Jasmine/Lemon`)**: Bending a low attached branch under moist soil (`notch below`) until adventitious roots sprout.\n  4) **==Tissue Culture (`Micropropagation`, NCERT p.209)==**: Excising tiny **virus-free shoot-tip (`apical meristem`) cells** onto nutrient-rich **agar gel + plant hormones (`auxin/cytokinin`)** inside sterile glassware produces **hundreds of disease-free banana/orchid plantlets year-round**! *Critical Drawback (`Think Q2 / Group D`)*: **Zero genetic variation** means if ONE fungal blight or climate shock hits (`e.g. potato famine`), **all clones perish together**!',
            hi: 'पोषण या श्वसन के विपरीत **जनन** किसी एकल जीव के जीवित रहने हेतु आवश्यक नहीं, परंतु **==प्रजाति की निरंतरता बनाए रखने==** हेतु अनिवार्य है (`Tech 3 Shift 6`: **DNA प्रतिलिपि बनाना** जनन की मूल कोशिकीय घटना है!)।\n• **==अलैंगिक जनन (`11.1`)==**: केवल **एक जनक**, मात्र **समसूत्री विभाजन (`Mitosis`)**, युग्मक संलयन नहीं ⇒ संतति जनक की हूबहू **क्लोन (`Clones`)** होती है।\n• **प्राकृतिक कायिक प्रवर्धन (`जड़, तना, पत्तियाँ`)**: आलू के **कंद की आँखें (`कलियाँ`)**, अदरक (`प्रकंद`), पुदीना/स्ट्रॉबेरी (`ऊपरी भूस्तारी`), शकरकंद (`मूल`) और **==ब्रायोफिलम (`अजूबा`) की पत्ती के किनारों (`खाँचों`) की कलिकाएँ==** (`Tech 3 Shifts 10, 15, 19`)! *(रेलवे जाल: **बीज व पुष्प कभी कायिक प्रवर्धन में भाग नहीं लेते** (`Group D 7`, `Tech 3 14, 16`)! गन्ना, गुलाब, केला कायिक से उगते हैं, जबकि **पपीता** केवल बीज से उगता है!)*\n• **बागवानी की कृत्रिम विधियाँ (`क्रियाकलाप 11.1`, पृ. 209)**:\n  1) **कर्तन (`Cutting — गुड़हल/गुलाब`)**: पर्वसंधि (`Node`) के ठीक नीचे **`45°–60°` तिरछा कट** संवहन ऊतक की रक्षा कर जल अवशोषण बढ़ाता है।\n  2) **कलम (`Grafting`)**: रोगरोधी जड़ वाले **स्कंध (`Stock`)** पर उत्तम फल वाले **कलम (`Scion`)** को जोड़ना — शीघ्र व एकसमान फल (`आम`)।\n  3) **परतन (`Layering — चमेली/नींबू`)**: पौधे से जुड़ी लचीली टहनी को छीलकर नम मिट्टी में दबा जड़ निकालना।\n  4) **==ऊतक संवर्धन (`Tissue Culture / सूक्ष्म प्रवर्धन`)==**: प्ररोह-शीर्ष के **विषाणु-मुक्त विभज्योतक ऊतक** को रोगाणुहीन पोषक माध्यम (`आगार + हॉर्मोन`) में उगाकर वर्ष भर में **सैकड़ों रोग-मुक्त केले/ऑर्किड** तैयार करना! *(हानि: शून्य आनुवंशिक विविधता होने से एक रोग पूरी फसल नष्ट कर सकता है!)*',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch11/real/kalanchoe_daigremontiana.webp',
            title: { en: 'Vegetative Leaf-Margin Plantlets (`Bryophyllum / Kalanchoe` — NCERT Fig 11.1b Leaf Propagation)', hi: 'पत्ती के किनारों पर उत्पन्न नन्हे पादपक (`ब्रायोफिलम / कैलांचो` — NCERT चित्र 11.1 ख)' },
            caption: {
              en: 'Tiny genetically identical plantlets with mini roots sprout along leaf margin notches (`RRB Tech 3 2024 hot repeat!`); detaching onto damp soil creates independent clones.',
              hi: 'पत्ती के खाँचों में कली से सीधे जड़ व पत्ती युक्त छोटे पादपक विकसित होते हैं (`RRB Tech 3 2024 लगातार PYQ!`); गिरने पर स्वतंत्र पौधा बनते हैं।',
            },
          },
          inlinePyqIds: ['pyq-c9c11-1', 'pyq-c9c11-2', 'pyq-c9c11-10', 'pyq-c9c11-11', 'pyq-c9c11-12'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Fission (`Amoeba, Leishmania, Plasmodium`), Fragmentation, Budding (`Act 11.2 Yeast & Hydra`), Spores (`Act 11.3`) & Meiosis (`46 → 23`)',
            hi: '2. विखंडन, खंडन (`स्पाइरोगाइरा`), मुकुलन (`क्र. 11.2 यीस्ट व हाइड्रा`), बीजाणु (`क्र. 11.3 राइजोपस`) तथा अर्धसूत्री विभाजन',
          },
          conceptStory: {
            en: 'Let us master every microscopic & multicellular asexual strategy plus the transition to **Meiosis** (`NCERT p.210–214`):\n• **Fission in Unicellular Protists (`only simple unicells` — `Tech 3 Shifts 1, 15, 16, 20`)**: **Amoeba** (`Binary fission in ANY plane`); **Leishmania** (`cause of Kala-azar — whip-like flagellum requires binary fission in a DEFINITE longitudinal plane!`); **Plasmodium** (`malarial parasite — divides into many daughter cells simultaneously by Multiple Fission`!).\n• **Fragmentation vs Regeneration**: Simple filamentous multicellular alga **==Spirogyra==** breaks into pieces on maturation, each growing into a full filament (`Fragmentation`). **==Hydra & Planaria==** possess specialized **regenerative cells** (`Act 11.2 + Tech 3 Shifts 8, 9, 21`) — NOTE: **Regeneration is NOT equivalent to routine reproduction** since organisms don’t depend on being chopped up (`Tech 3 Shift 7`)!\n• **==Budding (`Act 11.2`)==**: Warm `10%` sugar water awakens dormant baker’s **Yeast (`Saccharomyces`)** — unequal buds pinch off parent cell! In **Hydra**, repeated mitotic division at ONE specific site builds a multi-bud outgrowth that detaches (`Tech 3 Shift 22`).\n• **==Spore Formation (`Act 11.3 — Moist Bread 25–35°C`, Fig 11.4)==**: White/black/green wool-like threads are **hyphae**, topped by tiny **blob-on-a-stick sporangia (`Rhizopus`)** or spherical vesicles (`Aspergillus`). Why put bread in a refrigerator (`4°C`)? **Low temperature suppresses spore germination & spoilage!** Remember **Louis Pasteur’s swan-neck flask experiment** disproved *spontaneous generation* — microbes come ONLY from airborne spores/microbes (`Germ Theory`)! Not all fungi harm: *Penicillium* yields **Penicillin & Amoxicillin** antibiotics!\n• **==Why Meiosis (`11.2`, Fig 11.6 & Act 11.4)?==**: Mitosis preserves full chromosome set (`46 -> 46`). Sexual fusion needs gametes with **HALF chromosomes (`2n = 46 -> n = 23`)** via **Meiosis** — otherwise chromosomes would double `46 -> 92 -> 184`! In **Activity 11.4**, just **3 chromosome bead pairs (`2 colours each`)** shuffle cleanly into **`2³` -> `8` unique combinations** — humans with **23 pairs** shuffle into over **`8.3 million` unique gametes per parent** (`variation = raw material for natural selection & survival!`).',
            hi: 'अब प्रत्येक सूक्ष्मजीव, कवक व अर्धसूत्री विभाजन को गहराई से समझें (`NCERT पृ. 210–214`):\n• **एककोशिकीय विखंडन**: **अमीबा** (`किसी भी तल में द्विखंडन`), **लेस्मानिया (`कालाजार कारक`)** (`एक सिरे पर चाबुक जैसे कशाभ के कारण एक निश्चित अनुदैर्ध्य तल में द्विखंडन`), एवं **प्लाज्मोडियम (`मलेरिया परजीवी`)** (`बहुखंडन द्वारा एक साथ अनेक संतति कोशिकाएँ` — `Tech 3 Shift 9, 16`)।\n• **खंडन बनाम पुनर्जनन**: सरल बहुकोशिकीय शैवाल **==स्पाइरोगाइरा==** परिपक्व होकर टुकड़ों में टूटता है जो नया जीव बनाते हैं (**खंडन / Fragmentation**)। **हाइड्रा व प्लेनेरिया** विशेष पुनर्जनन कोशिकाओं से कटे हिस्से पुनः उगाते हैं (`पर पुनर्जनन सामान्य जनन विधि नहीं माना जाता, क्योंकि जीव कटने पर निर्भर नहीं!` — `Tech 3 Shift 7`)।\n• **==मुकुलन (`क्र. 11.2`: यीस्ट 10% गर्म शर्करा घोल + हाइड्रा)==**: यीस्ट में असमान छोटा मुकुल बाहर निकलता है; जबकि **हाइड्रा** में एक विशिष्ट स्थान पर बार-बार समसूत्री विभाजन से कली/मुकुल बन अलग होता है।\n• **==बीजाणु निर्माण (`क्र. 11.3`: 25–35°C गर्म-नम रोटी, चित्र 11.4)==**: कवक तंतुओं (`Hyphae`) के ऊपर डंडी के सिरे पर गोल **बीजाणुधानी (`Sporangia` — राइजोपस / ब्रेड मोल्ड)** या **ऐस्पर्जिलस** में लाखों हवा में तैरने वाले बीजाणु बनते हैं! **फ्रिज (`शीतलन`)** से बीजाणु अंकुरण रुककर खाना सुरक्षित रहता है। **लुई पाश्चर** ने सिद्ध किया कि कवक/जीवाणु हवा के बीजाणुओं से आते हैं, *स्वतः उत्पन्न* नहीं होते! **लाभकारी कवक** से **पेनिसिलिन व ऐमोक्सिसिलिन** एंटीबायोटिक बनते हैं।\n• **==अर्धसूत्री विभाजन (`Meiosis`, चित्र 11.6 व क्र. 11.4)==**: लैंगिक जनन में युग्मकों का निर्माण अर्धसूत्री विभाजन से होता है जिससे **गुणसूत्र संख्या आधी (`46 → 23`)** हो जाती है, वरना हर पीढ़ी में गुणसूत्र दुगने (`46 → 92`) हो जाते! **क्रियाकलाप 11.4**: मात्र **3 जोड़ी मनकों** के यादृच्छिक संरेखण से `2³` अर्थात् **8 भिन्न युग्मक संयोजन** बनते हैं — मानव के `23` जोड़ों से **करोड़ों आनुवंशिक विविधताएँ** उत्पन्न होकर प्रजाति के दीर्घकालिक अस्तित्व की रक्षा करती हैं (`Tech 3 Shift 17`)!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch11/real/saccharomyces_cerevisiae.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch11/real/hydra_genus.webp',
            title: { en: 'Budding Champions (`Act 11.2`): Unicellular Yeast (`Saccharomyces`, Left) & Multicellular Hydra (`Right`)', hi: 'मुकुलन के दो प्रमुख उदाहरण (`क्र. 11.2`): एककोशिकीय यीस्ट (`बायाँ`) व बहुकोशिकीय हाइड्रा (`दायाँ`)' },
            caption: {
              en: 'Left: Yeast cells budding daughter cells in warm sugary medium (`Act 11.2`). Right: Freshwater Hydra forming a lateral multicellular bud that detaches (`Tech 3 Shift 22`).',
              hi: 'बायाँ: `10%` शर्करा विलयन में यीस्ट कोशिका से मुकुल निकलना (`क्र. 11.2`)। दायाँ: मीठे जल का हाइड्रा जिसमें पार्श्व मुकुल विकसित हो रहा है।',
            },
          },
          inlinePyqIds: ['pyq-c9c11-3', 'pyq-c9c11-4', 'pyq-c9c11-5', 'pyq-c9c11-6', 'pyq-c9c11-7', 'pyq-c9c11-8', 'pyq-c9c11-9', 'pyq-c9c11-13', 'pyq-c9c11-14', 'pyq-c9c11-15'],
        },
      ],
    },
    {
      id: 'plant-sexual-animal-modes',
      number: '11.2b–11.4',
      diagramKey: 'c9-ch11-flower-pollination-diagram',
      svgLab: 'reproduction-pollination-cycle-lab',
      svgLabTitle: {
        en: 'Interactive 3-in-1 Lab: Asexual/Meiosis Simulator, Act 11.6 Bagging Pollination Experiment & 28-Day Cycle Tracker',
        hi: 'इंटरैक्टिव 3-इन-1 लैब: अलैंगिक/अर्धसूत्री (`46→23`), क्र. 11.6 मटर थैली प्रयोग एवं 28-दिवसीय रजोधर्म चक्र',
      },
      title: {
        en: 'Sexual Reproduction in Flowering Plants (`Floral Whorls & Act 11.6`) + Animal Strategies (`External/Internal & Metamorphosis`)',
        hi: 'पुष्पी पादपों में लैंगिक जनन (`पुष्प चक्र, परागण, निषेचन`) एवं जंतुओं में जनन विविधता (`बाह्य/आंतरिक निषेचन, कायांतरण`)',
      },
      summaryTag: {
        en: 'NCERT Pages 214–220 • Sepal/Petal/Stamen/Pistil, Act 11.5–11.6, Wind vs Water vs Sunbird Pollination, Table 11.3, P. Maheshwari & Table 11.4 Animals',
        hi: 'NCERT पृ. 214–220 • पुष्प 4 चक्र, क्र. 11.5–11.6, वायु/जल/कीट/शकरखोरा परागण, तालिका 11.3–11.4, पी. माहेश्वरी व कायांतरण',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Complete vs Unisexual Flowers (`Act 11.5`), Bagging Experiment (`Act 11.6`), Pollination Syndromes & Post-Fertilisation (`Ovule→Seed, Ovary→Fruit`)',
            hi: '1. पुष्प संरचना (`क्र. 11.5`), परागण अनिवार्यता प्रयोग (`क्र. 11.6`), परागण वाहक तथा बीजांड→बीज व अंडाशय→फल रूपांतरण',
          },
          conceptStory: {
            en: 'In angiosperms, the **==Flower==** (`NTPC UG 2025 Shift 12`) holds 4 concentric whorls (`Act 11.5 Hibiscus/Datura`):\n• **1. Sepals (`Calyx`)**: Outer green leaf-like protective bud jacket.\n• **2. Petals (`Corolla`)**: Coloured/scented insect magnets.\n• **3. Stamen (`Androecium` — Male, `NTPC Shift 33`)**: Stalk (**Filament**) + **Anther** bearing haploid **Pollen grains** (`male germ-cell`).\n• **4. Pistil / Carpel (`Gynoecium` — Female, `NTPC Shift 6`)**: Sticky receptive top (**Stigma**) + slender stalk (**Style**) + swollen basal (**Ovary** containing one or more **Ovules**, each holding an egg).\n• **Unisexual (`Papaya, Watermelon, Cucumber, Bottle Gourd`)** lack either stamen or pistil; **Bisexual (`Hibiscus, Mustard, Tomato, Wheat`)** bear both!\n• **==Activity 11.6 (`Bagging Proof on Pea Flowers`)==**: Remove anthers (**emasculation**) from closed bud `1` and bag it (`ZERO fruit & ZERO seed!`). Keep bud `2` intact inside bag (`healthy self-pollinated pea pod forms!`). Remove anthers of bud `3` and hand-dust pollen before bagging (`cross-pollinated pod forms!`). Proves **pollination is essential for fruit/seed set!** (`Tomato & Wheat = predominantly Self-pollinating; Papaya = strictly Cross-pollinating` — `Ex Q11`).\n• **Pollination Adaptations (`Table 11.3`)**: **Wind (`Grass, Maize, Wheat`)**: Non-showy tiny flowers, feathery stigma, dry smooth light pollen (`5–10 lakh` grains yield `50–200` seeds!). **Water (`Vallisneria, Hydrilla`)**: Underwater/floating ribbon pollen. **Insects/Birds (`Sunflower, Coral tree, Sunbird, Indian White-eye`)**: Bright petals, nectar, sticky spiky pollen (`20–40k` grains yield `800–1000` seeds — super efficient!).\n• **Fertilisation & Chemotropism**: Suitable stigma triggers **pollen tube** growth through the **style** guided chemically (**Chemotropism**, `Tech 3 Shift 23`) to the **ovule** -> male gamete fuses with egg (**Zygote** -> multi-celled **Embryo**). **==Ovule -> Seed (`tough seed coat`)==**; **==Ovary -> Fruit==** (`sepals/petals wither and drop` — `Tech 3 Shifts 11, 17, 23`)! Seed dispersal via wind (**Calotropis/Aak & Dandelion** hairy wings), water (`Coconut`), or explosion helps seedlings escape crowding!\n• **Pioneer (`NCERT p.218`)**: **==Prof. Panchanan Maheshwari==** (**Father of Indian Embryology**) pioneered **test-tube fertilisation of angiosperm ovules in Petri dishes**!',
            hi: 'आवृतबीजी पादपों में **==पुष्प==** (`NTPC UG 2025 Shift 12`) प्रजनन अंग है जिसमें 4 चक्र होते हैं (`क्र. 11.5 गुड़हल/धतूरा`):\n• **1. बाह्यदल (`Sepals`)**: कली की रक्षा करने वाले हरी पत्ती जैसे भाग।\n• **2. दल/पंखुड़ी (`Petals`)**: परागकों को आकर्षित करने वाले रंगीन-सुगंधित भाग।\n• **3. पुंकेसर (`Androecium` — नर जननांग, `NTPC Shift 33`)**: **तंतु (`Filament`) + परागकोश (`Anther`)** जिसमें अगुणित **परागकण (`Pollen grains`)** बनते हैं।\n• **4. स्त्रीकेसर (`Gynoecium` — मादा जननांग, `NTPC Shift 6`)**: चिपचिपा **वर्तिकाग्र (`Stigma`)** + नलिका **वर्तिका (`Style`)** + फूला हुआ **अंडाशय (`Ovary`)** जिसके अंदर **बीजांड (`Ovule` → अंड)** स्थित होते हैं।\n• **एकलिंगी पुष्प**: पपीता, तरबूज, ककड़ी, लौकी (`केवल पुंकेसर या केवल स्त्रीकेसर`); **द्विलिंगी**: गुड़हल, सरसों, मटर, टमाटर।\n• **==क्रियाकलाप 11.6 (`मटर पर थैली प्रयोग`)==**: (1) खिलने से पहले पुंकेसर हटाकर थैली बाँधी → **कोई फल/बीज नहीं!** (2) पुंकेसर सहित थैली बाँधी → **स्वपरागण से सामान्य फली बनी!** (3) अन्य पौधे के पराग छिड़क थैली बाँधी → **पर-परागण से फली बनी!** *(अभ्यास Q11: टमाटर व गेहूँ मुख्यतः **स्वपरागण**, जबकि एकलिंगी होने से पपीता सदैव **पर-परागण** करता है!)*\n• **परागण वाहक (`तालिका 11.3`)**: **वायु (`मक्का, घास, गेहूँ`)**: `5–10 लाख` हल्के शुष्क पराग, पंखदार वर्तिकाग्र, केवल `50–200` बीज। **जल (`वेलिसनेरिया, हाइड्रिला`)**। **कीट/पक्षी (`सूरजमुखी, शकरखोरा / व्हाइट-आई पक्षी`)**: चमकीले दल, मकरंद, चिपचिपे पराग — मात्र `20–40 हजार` पराग से **`800–1000` बीज** (`उच्च दक्षता!`)।\n• **निषेचन व रसायनानुवर्तन (`Chemotropism`)**: वर्तिकाग्र पर परागकण से निकली **पराग नलिका** रासायनिक संकेतों से **वर्तिका** पार कर बीजांड पहुँचती है → **युग्मनज → भ्रूण**! निषेचन के बाद: **==बीजांड → बीज==** तथा **==अंडाशय → फल==** बनता है (`बाह्यदल, दल, पुंकेसर मुरझाकर झड़ जाते हैं`)! मदार/आक व डेंडेलियन में **रोमिल पंख** वायु बीज प्रकीर्णन कराते हैं।\n• **महान भारतीय वैज्ञानिक (`पृ. 218`)**: **==प्रो. पंचानन माहेश्वरी==** (**भारतीय भ्रूण विज्ञान के जनक**) ने पेट्री डिश में परखनली पादप निषेचन विकसित किया!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch11/real/flower.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch11/real/pollen.webp',
            title: { en: 'Bisecting Floral Whorls (`Stamen & Pistil`) & Electron View of Pollination Pollen Grains', hi: 'द्विलिंगी पुष्प के पुंकेसर-स्त्रीकेसर चक्र (`बायाँ`) व सूक्ष्मदर्शी परागकण संरचना (`दायाँ`)' },
            caption: {
              en: 'Left (`Fig 11.7`): Bright corolla petals draw insect/bird pollinators (`Sunbird`) around central stamens and stigma. Right: Sculpted exine walls help insect-borne pollen cling tightly (`Act 11.5–11.6`).',
              hi: 'बायाँ: पुष्प में बाह्यदल, दल, परागकोश व वर्तिकाग्र की स्पष्ट व्यवस्था। दायाँ: विभिन्न परागकणों की खुरदरी व चिकनी सतह (`क्र. 11.5`)।',
            },
          },
          inlinePyqIds: ['pyq-c9c11-16', 'pyq-c9c11-17', 'pyq-c9c11-18', 'pyq-c9c11-19', 'pyq-c9c11-20'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Animal Reproduction (`Sec 11.3–11.4`): External vs Internal Fertilisation (`Table 11.4`), Oviparous vs Viviparous & Larval Metamorphosis',
            hi: '2. जंतुओं में जनन (`भाग 11.3–11.4`): बाह्य बनाम आंतरिक निषेचन (`तालिका 11.4`), अंडज/जरायुज व लार्वा कायांतरण',
          },
          conceptStory: {
            en: 'Unlike plants rooted to one spot, animals swim, walk, or fly — yet follow strict energy vs survival trade-offs (`NCERT Table 11.4`, `p.219–220`):\n• **==External Fertilisation (`Fish 100–1,000 eggs, Frog 5,000–50,000 eggs`)==**: Gametes are released directly into water. **Why thousands of eggs?** Strong water currents, temperature swings & hungry predators destroy most unprotected zygotes! Why tiny egg size? Parents cannot afford large yolk reserves per egg — so embryos hatch rapidly into **tiny free-swimming / crawling larvae (`tadpoles` in frogs, `caterpillars` in butterflies)** that hunt food externally before undergoing dramatic **Metamorphosis (`कायांतरण`)** into adults!\n• **==Internal Fertilisation (`Reptiles/Lizard 2–20 eggs, Birds 1–15, Mammals 1–2`)==**: Sperm meets egg INSIDE female tract (**higher fertilisation certainty & shelter against dry land** — `Think Q5`!). **Oviparous (`egg-laying`)** birds & reptiles seal huge yolk nutrient stores inside protective shells, whereas **Viviparous (`live-bearing`)** mammals nourish embryos internally through a blood-rich **placenta** — highest individual survival at minimal offspring count (`often just 1–2 per birth`).',
            hi: 'पौधों के विपरीत गतिशील जंतुओं ने पर्यावरणीय सुरक्षा व ऊर्जा लागत के अनुसार दो जनन रणनीतियाँ अपनाई हैं (`NCERT तालिका 11.4`, पृ. 219–220):\n• **==बाह्य निषेचन (`जल में`: मछली `100–1,000` अंडे, मेंढक `5,000–50,000` अंडे)==**: अंडाणु व शुक्राणु जल में मुक्त होते हैं। **हजारों अंडे क्यों?** परभक्षियों, तेज जल धाराओं व रोगों से भारी क्षति के बावजूद कम-से-कम कुछ संतति बचे! छोटे अंडों में **पीतक (`Yolk`) बहुत कम** होता है, अतः भ्रूण जल्दी **लार्वा (`टैडपोल`, तितली इल्ली)** बनकर बाहर स्वयं भोजन कर **कायांतरण (`Metamorphosis`)** द्वारा वयस्क बनता है!\n• **==आंतरिक निषेचन (`सरीसृप/छिपकली 2–20, पक्षी 1–15, स्तनधारी 1–2`)==**: मादा शरीर के भीतर निषेचन स्थलीय शुष्क वातावरण में भी युग्मकों की **अधिकतम सफलता** सुनिश्चित करता है (`सोचिए Q5`)! **अंडज (`Oviparous`)** पक्षियों/सरीसृपों में कठोर कवच व प्रचुर पीतक होता है, जबकि **जरायुज (`Viviparous`)** स्तनधारियों में भ्रूण सीधे माता के **अपरा (`Placenta`)** से पोषित हो उच्चतम उत्तरजीविता पाता है!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch11/real/germination.webp',
            title: { en: 'Embryo Awakening: Ovule-Derived Seed Germinating into Root Radicle & Shoot Plumule', hi: 'भ्रूण विकास: निषेचित बीजांड (`बीज`) का अंकुरण (`मूलांकुर व प्रांकुर`) एवं जीवन की नई पीढ़ी' },
            caption: {
              en: 'Post-fertilisation seed carries dormant diploid zygote-derived embryo + stored endosperm/cotyledon energy until favourable moisture triggers germination.',
              hi: 'निषेचित बीजांड कठोर बीजावरण व संचित भोजन के साथ भ्रूण को सुरक्षित रखता है जो अनुकूल जल मिलने पर अंकुरित होता है।',
            },
          },
        },
      ],
    },
    {
      id: 'human-reproduction-cycle-contraception',
      number: '11.5',
      diagramKey: 'c9-ch11-human-repro-cycle-diagram',
      title: {
        en: 'Human Reproductive Anatomy (`Scrotum, Oviduct, Uterus`), 28-Day Menstrual Cycle, `XX/XY` Genetics, IVF (`1978`) & Contraception',
        hi: 'मानव जनन तंत्र (`वृषणकोश, अंडवाहिनी, गर्भाशय`), 28-दिन रजोधर्म, `XX/XY` लिंग निर्धारण, IVF (`1978`) व परिवार नियोजन',
      },
      summaryTag: {
        en: 'NCERT Pages 220–225 • Table 11.5 Sperm vs Ovum, S. Mukhopadhyay 1978 Durga, Menstrual Hygiene 4–6h, 3 Trimesters & CDRI Weekly Pill',
        hi: 'NCERT पृ. 220–225 • तालिका 11.5 शुक्राणु vs अंडाणु, सुभाष मुखोपाध्याय 1978 दुर्गा, स्वच्छता, 3 तिमाही व CDRI साप्ताहिक गोली',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Male & Female Systems, Sperm vs Ovum (`Table 11.5`), Oviduct Fertilisation & `1978` Indian IVF Pioneer',
            hi: '1. नर एवं मादा जनन तंत्र, शुक्राणु बनाम अंडाणु (`तालिका 11.5`), डिंबवाहिनी निषेचन व भारत में IVF (`1978`)',
          },
          conceptStory: {
            en: 'Puberty marks **Adolescence** (`Think Q6`: rapid reproductive maturation alongside slowing general growth!):\n• **Male Reproductive System (`Fig 11.12a`)**: A pair of **==Testes inside the extra-abdominal Scrotum==** — positioned outside abdomen because sperm formation needs **`~2–3°C` lower temperature than `37°C` body heat** (`Tech 3 Shift 6`)! Secrete **Testosterone** (`voice deepening, facial hair`) -> immature sperm travel via **Vas Deferens** (`cut cleanly in Vasectomy`, `Tech 3 Shift 13`) -> receive nutrient-rich fluid from **Seminal Vesicles & Prostate Gland** (`forming semen for motility & nourishment`) -> exit via shared **==Urethra==** (`common duct for both urine and semen` — `Tech 3 Shift 23`).\n• **Female Reproductive System (`Fig 11.12b`)**: Two **Ovaries** alternate monthly releasing one mature **Ovum (`largest human cell, non-motile, rich stored nutrients`)** and secreting **Oestrogen & Progesterone** -> funnel catches egg into **==Oviduct / Fallopian Tube==** — **HERE fertilisation takes place (`Tech 3 Shift 6 Match`)!** Zygote divides into an embryo and travels down to implant into the thick spongy blood-rich inner lining (**Endometrium**) of the **==Uterus==** -> nourished across 9 months via disk-like **==Placenta==** (`villi exchange glucose/O₂ from mother’s blood & return embryo wastes` — `Tech 3 Shifts 6, 17`).\n• **Pioneer Box (`NCERT p.222`)**: **==Dr. Subhash Mukhopadhyay (Kolkata)==** created India’s first & the world’s second test-tube baby (**‘Durga’, Oct 3, 1978**) via **IVF (`In-Vitro Fertilisation`)** & cryopreservation — tragically ignored until global vindication decades later!\n• **9-Month Gestation (`3 Trimesters`, p.224)**: **Trimester 1** (`heart beats, limb buds form`); **Trimester 2** (`movement felt, skin creases, ultrasound monitors`); **Trimester 3** (`brain surges, upside-down birth position` -> healthy newborn temp **`36.1°C–37.9°C / 97°F–100.3°F`**; colostrum immunity!).',
            hi: 'किशोरावस्था (`Think Q6`: सामान्य शारीरिक वृद्धि धीमी होने पर जनन अंगों की परिपक्वता) से मानव जनन आरंभ होता है:\n• **नर जनन तंत्र (`चित्र 11.12 क`)**: एक जोड़ी **==वृषण उदर गुहा के बाहर वृषणकोश (`Scrotum`) में==** स्थित होते हैं क्योंकि शुक्राणु निर्माण हेतु शरीर (`37°C`) से **`2–3°C` कम तापमान** चाहिए (`Tech 3 Shift 6`)! वृषण **टेस्टोस्टेरोन** बनाते हैं → **शुक्रवाहिनी (`Vas Deferens`)** शुक्राणु लाती है → **शुक्राशय व प्रोस्टेट ग्रंथि** का स्राव पोषण व गतिशीलता देता है → **==मूत्रमार्ग (`Urethra`)==** मूत्र व वीर्य का साझा मार्ग है (`Tech 3 Shift 23`)।\n• **मादा जनन तंत्र (`चित्र 11.12 ख`)**: दो **अंडाशय** बारी-बारी प्रतिमाह एक बड़ा, भोजन-संचित **अंडाणु** मुक्त कर **एस्ट्रोजन** (`Tech 3 Shift 5`) बनाते हैं → **==डिंबवाहिनी / अंडवाहिनी (`Oviduct`)==** में ही **शुक्राणु व अंडाणु का निषेचन** होता है! युग्मनज विभाजित होकर **गर्भाशय** की मोटी रक्त-पुष्ट **अंतर्गर्भाशय-कला (`Endometrium`)** में रोपित होता है तथा 9 माह **==अपरा (`Placenta`)==** से पोषण लेता व अपशिष्ट निष्कासित करता है (`Tech 3 Shifts 6, 17`)!\n• **विज्ञान एवं समाज (`पृ. 222`)**: **==डॉ. सुभाष मुखोपाध्याय (कोलकाता)==** ने भारत के प्रथम व विश्व के द्वितीय IVF शिशु (**‘दुर्गा’, 3 अक्टूबर 1978**) का चमत्कार कर दिखाया!\n• **गर्भावस्था के 3 चरण (`पृ. 224`)**: **प्रथम तिमाही** (`हृदय धड़कन, अंग कलिका`), **द्वितीय तिमाही** (`शिशु गति, अल्ट्रासाउंड जाँच`), **तृतीय तिमाही** (`मस्तिष्क विकास, जन्म अवस्था` -> नवजात सामान्य तापमान **`97°F–100.3°F`**; माँ का प्रथम दूध रोग-प्रतिरोधक होता है)!',
          },
          inlinePyqIds: ['pyq-c9c11-21', 'pyq-c9c11-22'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. The 28-Day Menstrual Cycle, Hygiene (`4–6 h`), `XX/XY` Sex Determination, STIs & CDRI Weekly Contraceptive',
            hi: '2. 28-दिवसीय रजोधर्म चक्र, स्वच्छता (`4–6 घंटे`), `XX/XY` लिंग निर्धारण, STI सुरक्षा एवं CDRI साप्ताहिक गर्भनिरोधक',
          },
          conceptStory: {
            en: 'Every biological cycle below is a staple RRB Group D & Technician clinical-scenario question:\n• **28-Day Menstrual Cycle (`Fig 11.13`, `Think Q7`)**:\n  - **Days `1–5` (`Menstruation`)**: If egg is unfertilised, the thick **endometrium sheds** with blood & mucus (`excessive bleeding means abnormal shedding of endometrium` — `Group D 2025 Shift 5`!). *Note*: Irregular gaps of `25–35` days are common in early teens (`Menarche` at `10–15` yrs; stops naturally at `45–55` yrs **Menopause**).\n  - **Days `6–14` (`Follicular Repair`)**: Oestrogen rebuilds spongy uterine lining.\n  - **==Day `14` (`Ovulation`)==**: Mature egg released into oviduct (`Think Q7`: cycle starting **March 20 -> Day 14 falls on April 2**!).\n  - **Days `15–28` (`Secretory Phase`)**: Ready for implantation (`misses bleeding during pregnancy!`).\n  - **Menstrual Hygiene (`p.223`)**: Change clean sanitary pads/cloths every **`4–6 hours`**, wrap disposed waste properly (`avoid moisture/infection`) — zero social stigma!\n• **==Human Sex Determination (`Fig 11.14`)==**: Females carry **`XX`** (`eggs ALWAYS have 1 X`); Males carry **`XY`** (`50% sperm have X, 50% have Y`). **`Father’s sperm (`X` or `Y`) determines child sex`** (`Think Q8`: `23 + 23 = 46` chromosomes restored!).\n• **Safe Family Planning & STI Shield (`Sec 11.5.4`, p.225)**:\n  - **Mechanical Barrier (`Condom`)**: ONLY method blocking **BOTH unwanted pregnancy AND Sexually Transmitted Infections (`STIs` like bacterial `Gonorrhoea & Syphilis` and viral `HIV/AIDS, Genital Herpes`!)** (`Tech 3 Shift 17`).\n  - **Oral Pills**: Hormonal pills halt ovulation; **==CDRI Lucknow (`Central Drug Research Institute, India`) developed the world’s first non-steroidal weekly oral pill (`Saheli` / Centchroman)==** with minimal side-effects!\n  - **IUDs (`Copper-T`)**: Placed inside uterus by doctors (`prevents fertilisation/implantation`; does NOT protect against STIs).\n  - **Surgical (`Permanent`)**: **Vasectomy** (`cut & tie vas deferens in males`); **Tubectomy** (`cut & tie fallopian tubes in females`). Strict law bans prenatal sex-determination (*beti-beta equal rights!*).',
            hi: 'प्रत्येक परीक्षा बिंदु सीधे RRB Group D और Tech 3 केस-स्टडी प्रश्नों से जुड़ा है:\n• **28-दिवसीय रजोधर्म / मासिक धर्म चक्र (`चित्र 11.13`)**:\n  - **दिन `1–5` (`रक्तस्राव`)**: निषेचन न होने पर गर्भाशय की **अंतर्गर्भाशय-कला (`Endometrium`)** रक्त व श्लेष्मा के साथ बाहर निकलती है (`Group D 2025 Shift 5`: अत्यधिक रक्तस्राव इसी ऊतक के अधिक झड़ने से होता है!)। रजोदर्शन (`10–15 वर्ष`) से रजोनिवृत्ति (`45–55 वर्ष`) तक चक्र चलता है।\n  - **दिन `6–14`**: अंडाशय में डिंब व गर्भाशय परत का पुनर्निर्माण।\n  - **==दिन `14` (`अंडोत्सर्ग / Ovulation`)==**: परिपक्व अंडाणु अंडवाहिनी में निकलता है (`Think Q7: यदि 20 मार्च से चक्र शुरू हो, तो 14वाँ दिन = 2 अप्रैल होगा!`)।\n  - **दिन `15–28`**: गर्भधारण तैयारी; निषेचन होने पर मासिक धर्म रुक जाता है। **स्वच्छता**: संक्रमण से बचने हेतु हर **`4–6 घंटे` में पैड बदलें**!\n• **==लिंग निर्धारण (`XX / XY`, चित्र 11.14)==**: माता सदैव **`X`** अंडाणु देती है; पिता के **`X`** से **पुत्री (`XX`)** व **`Y`** से **पुत्र (`XY`)** होता है (`50:50` संयोग — `23 + 23 = 46` गुणसूत्र)! कन्या भ्रूण हत्या कानूनी अपराध है।\n• **गर्भनिरोधन व STI सुरक्षा (`भाग 11.5.4`, पृ. 225)**:\n  - **यांत्रिक अवरोध (`कंडोम`)**: गर्भधारण के साथ **यौन संचारित रोगों (`STIs` — जीवाणु: `सुजाक/सिफलिस` व विषाणु: `HIV/AIDS, हर्पीज`) से बचाने वाला एकमात्र तरीका** (`Tech 3 Shift 17`)!\n  - **गर्भनिरोधक गोलियाँ**: **==CDRI लखनऊ (`केंद्रीय औषधि अनुसंधान संस्थान`) ने विश्व की प्रथम गैर-हार्मोनल साप्ताहिक गोली (`सहेली`) विकसित की==** जो हार्मोन दुष्प्रभाव से बचाती है!\n  - **IUD (`कॉपर-T`)**: गर्भाशय में चिकित्सक द्वारा स्थापित (`STI सुरक्षा नहीं`)।\n  - **शल्य (`स्थायी`)**: **पुरुष नसबंदी (`Vasectomy` — शुक्रवाहिनी अवरुद्ध)** व **महिला नसबंदी (`Tubectomy` — डिंबवाहिनी अवरुद्ध)**।',
          },
          inlinePyqIds: ['pyq-c9c11-23', 'pyq-c9c11-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Binary vs Multiple Fission (`Amoeba, Leishmania vs Plasmodium`)', hi: 'द्विखंडन बनाम बहुखंडन (`अमीबा, लेस्मानिया बनाम प्लाज्मोडियम`)' },
      left: { en: '**Binary Fission (`2 cells`)**: `Amoeba` splits in **ANY plane**; `Leishmania` splits in **DEFINITE orientation** (`due to whip-like flagellum`).', hi: '**द्विखंडन (`2 कोशिकाएँ`)**: `अमीबा` किसी भी तल से, पर `लेस्मानिया` कशाभ की दिशा में निश्चित तल से दो भागों में बँटता है।' },
      right: { en: '**Multiple Fission (`many cells`)**: `Plasmodium` (`malaria parasite`) divides into **dozens of daughter cells simultaneously** inside a cyst (`Tech 3 Shifts 16, 9`).', hi: '**बहुखंडन (`अनेक कोशिकाएँ`)**: `प्लाज्मोडियम` एक साथ दर्जनों संतति कोशिकाओं में विभक्त होता है — इसे द्विखंडन कहना गलत कथन है!' },
    },
    {
      pair: { en: 'Ovary vs Ovule Post-Fertilisation Transformation (`Fruit vs Seed`)', hi: 'निषेचन बाद पुष्प रूपांतरण (`अंडाशय बनाम बीजांड`)' },
      left: { en: '**Ovary (`अंडाशय`)**: Swells & ripens rapidly into the fleshy **FRUIT** (`while sepals, petals, stamens, style & stigma shrivel and drop off`).', hi: '**अंडाशय (`Ovary`)**: तेजी से बढ़कर व पककर **फल (`Fruit`)** बनता है (`पंखुड़ियाँ व पुंकेसर झड़ जाते हैं`)।' },
      right: { en: '**Ovule (`बीजांड`)**: Develops tough seed coat and becomes the **SEED** housing the diploid **embryo** (`Tech 3 Shifts 11, 17, 23`).', hi: '**बीजांड (`Ovule`)**: कठोर आवरण विकसित कर **बीज (`Seed`)** बनता है जिसमें भ्रूण सुरक्षित रहता है।' },
    },
    {
      pair: { en: 'Site of Human Fertilisation (`Oviduct`) vs Site of Implantation (`Uterus`)', hi: 'मानव निषेचन स्थल (`डिंबवाहिनी`) बनाम भ्रूण रोपण स्थल (`गर्भाशय`)' },
      left: { en: '**Fertilisation (`निषेचन`)**: Happens INSIDE the **Oviduct / Fallopian Tube** (`NOT ovary & NOT uterus!`); blocked in Tubectomy.', hi: '**निषेचन**: सदैव **डिंबवाहिनी / फैलोपियन ट्यूब (`Oviduct`)** में होता है (`अंडाशय या गर्भाशय में नहीं!`); ट्यूबेक्टॉमी इसी को रोकती है।' },
      right: { en: '**Implantation & Nourishment**: Zygote becomes blastocyst/embryo that implants in **Uterus (`Endometrium`)** and feeds via **Placenta**.', hi: '**रोपण व पोषण**: विभाजित भ्रूण **गर्भाशय (`अंतर्गर्भाशय-कला`)** में रोपित होकर **अपरा (`Placenta`)** द्वारा माता के रक्त से पोषण पाता है।' },
    },
    {
      pair: { en: 'Barrier Condom vs Copper-T / Surgical (`STI Protection Trap`)', hi: 'कंडोम बनाम कॉपर-T / नसबंदी (`यौन रोग STI सुरक्षा भेद`)' },
      left: { en: '**Condom (`Mechanical Barrier`)**: Prevents sperm entry AND **protects against STIs** (`HIV, Gonorrhoea, Syphilis, Herpes`).', hi: '**कंडोम (`यांत्रिक अवरोध`)**: शुक्राणु रोकने के साथ **STI रोगों (`HIV/सुजाक/सिफलिस/हर्पीज`) से बचाव का एकमात्र साधन**।' },
      right: { en: '**Copper-T (`IUD`), Oral Pills & Vasectomy/Tubectomy**: Prevent pregnancy ONLY — offer **ZERO STI infection barrier**!', hi: '**कॉपर-T (`IUD`), गोलियाँ व नसबंदी**: केवल गर्भनिरोधक हैं — इनसे **यौन संक्रमणों (`STIs`) से कोई सुरक्षा नहीं मिलती**!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Father of Indian Embryology (`Petri-Dish Ovule IVF`)', hi: 'भारतीय भ्रूण विज्ञान के जनक (`परखनली पादप निषेचन`)' },
      name: { en: 'Prof. Panchanan Maheshwari (`1904–1966`)', hi: 'प्रो. पंचानन माहेश्वरी (`1904–1966`)' },
      country: { en: 'India (`NCERT Class 9 Ch 11 p.218`)', hi: 'भारत (`NCERT कक्षा 9 पृ. 218`)' },
      fact: {
        en: 'Internationally acclaimed Indian botanist who achieved **intra-ovarian & test-tube fertilisation of flowering plant ovules in Petri dishes**, proving cross-pollination overcoming natural barriers!',
        hi: 'पुष्पी पादपों में **पेट्री डिश के भीतर परखनली बीजांड निषेचन** विकसित कर पादप प्रजनन व भ्रूण विज्ञान को विश्व स्तर पर नई दिशा दी!',
      },
    },
    {
      badge: { en: 'India’s First Test-Tube Baby Pioneer (`1978 Durga`)', hi: 'भारत में IVF के जनक (`1978 दुर्गा — प्रथम टेस्ट ट्यूब बेबी`)' },
      name: { en: 'Dr. Subhash Mukhopadhyay (`1931–1981`)', hi: 'डॉ. सुभाष मुखोपाध्याय (`1931–1981`)' },
      country: { en: 'India (`Kolkata, 1978 — NCERT p.222`)', hi: 'भारत (`कोलकाता, 1978 — NCERT पृ. 222`)' },
      fact: {
        en: 'Delivered India’s **first (`& world’s second`) IVF baby, ‘Durga’ (`Kanupriya Agarwal`), on October 3, 1978** using his own pioneering **embryo cryopreservation & ovarian stimulation protocols**!',
        hi: 'स्वदेशी **भ्रूण हिमपरिरक्षण व IVF तकनीक** द्वारा मात्र 67 दिन बाद विश्व का दूसरा व भारत का **प्रथम टेस्ट-ट्यूब बेबी (‘दुर्गा’, 3 अक्टूबर 1978)** संभव बनाया!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-kalanchoe',
      figRef: { en: 'NCERT Fig 11.1b (`Sec 11.1 Leaf Buds`)', hi: 'NCERT चित्र 11.1 (ख) — पत्तियों द्वारा कायिक प्रवर्धन' },
      title: { en: 'Bryophyllum / Kalanchoe Leaf-Notch Plantlets (`Vegetative Clones`)', hi: 'ब्रायोफिलम / कैलांचो पत्ती के किनारों पर पादपक (`कायिक प्रवर्धन`)' },
      imageUrl: '/ncert-notes/class9-bio-ch11/real/kalanchoe_daigremontiana.webp',
      hotspots: [
        { en: 'Adventitious buds in leaf notches form full mini-plants before falling onto damp soil (`RRB Tech 3 repeat`).', hi: 'पत्ती के खाँचों में बनी कलियाँ नम मिट्टी पर गिरकर स्वतंत्र क्लोन पौधे बनाती हैं।' },
      ],
    },
    {
      id: 'vis-yeast',
      figRef: { en: 'NCERT Activity 11.2 (`Yeast in 10% Warm Sugar`)', hi: 'NCERT क्रियाकलाप 11.2 — शर्करा घोल में यीस्ट मुकुलन' },
      title: { en: 'Yeast (`Saccharomyces`) Cells Undergoing Unequal Budding', hi: 'एककोशिकीय यीस्ट (`Saccharomyces`) में मुकुलन विभाजन' },
      imageUrl: '/ncert-notes/class9-bio-ch11/real/saccharomyces_cerevisiae.webp',
      hotspots: [
        { en: 'Warm `10%` sugar water provides metabolic energy for mitotic budding within `1–2` hours.', hi: 'गुनगुने `10%` शर्करा घोल में यीस्ट तेजी से मुकुल बनाकर संख्या बढ़ाता है।' },
      ],
    },
    {
      id: 'vis-hydra',
      figRef: { en: 'NCERT Fig 11.3 (`Hydra Budding & Regeneration`)', hi: 'NCERT चित्र 11.3 — हाइड्रा में मुकुलन' },
      title: { en: 'Freshwater Hydra with Lateral Regenerative Bud Outgrowth', hi: 'ताजे जल का हाइड्रा — पार्श्व मुकुल (`पुनर्जनन कोशिकाएँ`)' },
      imageUrl: '/ncert-notes/class9-bio-ch11/real/hydra_genus.webp',
      hotspots: [
        { en: 'Repeated mitotic divisions at a specific site build a bud with tentacles that detaches once mature.', hi: 'विशिष्ट स्थान पर बार-बार कोशिका विभाजन से मुकुल उभरता है और परिपक्व होकर अलग हो जाता है।' },
      ],
    },
    {
      id: 'vis-flower',
      figRef: { en: 'NCERT Fig 11.7 & Act 11.5 (`Flower Anatomy`)', hi: 'NCERT चित्र 11.7 व क्र. 11.5 — पुष्प के 4 चक्र' },
      title: { en: 'Angiosperm Flower Showing Petals, Stamens & Central Pistil', hi: 'आवृतबीजी पुष्प — दल, पुंकेसर (`नर`) व स्त्रीकेसर (`मादा`)' },
      imageUrl: '/ncert-notes/class9-bio-ch11/real/flower.webp',
      hotspots: [
        { en: 'Stamens (androecium) make pollen while central stigma/style/ovary (gynoecium) receive pollen and house ovules.', hi: 'पुंकेसर परागकण बनाते हैं जबकि वर्तिकाग्र, वर्तिका व अंडाशय निषेचन के बाद क्रमशः फल व बीज देते हैं।' },
      ],
    },
    {
      id: 'vis-pollen',
      figRef: { en: 'NCERT Activity 11.5 (`Microscopic Pollen Diversity`)', hi: 'NCERT क्र. 11.5 — सूक्ष्मदर्शी परागकण विविधता' },
      title: { en: 'SEM View of Pollination Pollen Grains (`Sticky Spiky vs Smooth Light`)', hi: 'विभिन्न पुष्पों के परागकण (`कीट हेतु चिपचिपे vs वायु हेतु हल्के`)' },
      imageUrl: '/ncert-notes/class9-bio-ch11/real/pollen.webp',
      hotspots: [
        { en: 'Insect-pollinated pollen have rough/spiky walls to cling; wind-pollinated grass pollen are smooth & produced by lakhs.', hi: 'कीट-परागित कण काँटेदार/चिपचिपे होते हैं; वायु-परागित चिकने व लाखों की संख्या में बनते हैं (`तालिका 11.3`)।' },
      ],
    },
    {
      id: 'vis-germination',
      figRef: { en: 'NCERT Fig 11.10 (`Post-Fertilisation Ovule -> Seed -> Seedling`)', hi: 'NCERT चित्र 11.10 — बीज अंकुरण व नई पीढ़ी' },
      title: { en: 'Seed Coat Splitting During Germination (`Continuity Complete`)', hi: 'निषेचित बीजांड (`बीज`) से मूलांकुर-प्रांकुर अंकुरण (`निरंतरता चक्र पूर्ण`)' },
      imageUrl: '/ncert-notes/class9-bio-ch11/real/germination.webp',
      hotspots: [
        { en: 'Zygote divides inside ovule into protected diploid embryo until moisture triggers radicle & shoot emergence.', hi: 'निषेचित युग्मनज बीजांड के अंदर भ्रूण बनकर कठोर आवरण में सुरक्षित रहता है और नमी पर अंकुरित होता है।' },
      ],
    },
  ],
  activities: [
    {
      num: '11.1',
      title: { en: 'Activity 11.1: Horticulture Propagation Lab (`Cutting, Grafting & Layering`)', hi: 'क्रियाकलाप 11.1: बागवानी विधियाँ — कर्तन (`45°–60°`), कलम (`Grafting`) एवं परतन (`Layering`)' },
      materials: { en: 'Hibiscus/Rose branch (`2–3` nodes), two related saplings (`Stock A & Scion B`), moist moss/polythene & jasmine/lemon bush', hi: 'गुड़हल/गुलाब की टहनी, दो संबंधित पौधे (`स्टॉक A व सायन B`), गीली काई, पन्नी व चमेली/नींबू पौधा' },
      steps: {
        en: 'Cut Hibiscus obliquely at `45°–60°` below a node -> plant `1` node deep in moist soil. Join matching diagonal cuts of scion onto rooted stock with tape/wax. Bend low branch into moist soil notch.',
        hi: 'गुड़हल तने को पर्वसंधि नीचे `45°–60°` तिरछा काट गमले में रोपें; दूसरे प्रयोग में स्कंध व कलम के तिरछे कटे सिरे कसकर बाँधें; तथा चमेली की निचली शाखा छीलकर मिट्टी में दबाएँ।',
      },
      examTakeaway: {
        en: 'Oblique `45°–60°` cut exposes max vascular cambium/water uptake area; all methods multiply **mitotic clones identically retaining parent fruit quality**!',
        hi: '`45°–60°` तिरछा कट संवहन संपर्क व जल अवशोषण बढ़ाता है; तीनों विधियाँ जनक के समान गुणों वाले क्लोन तेजी से तैयार करती हैं!',
      },
      predictQuestion: {
        prompt: { en: 'Why is an angled `45°–60°` cut strictly preferred below a node during Hibiscus stem cutting in Activity 11.1?', hi: 'क्र. 11.1 में तने का कर्तन सदैव पर्वसंधि के ठीक नीचे `45°–60°` तिरछे कोण पर क्यों किया जाता है?' },
        options: {
          en: ['Increases water absorption area & avoids stem rotting', 'Triggers meiosis in stem pith', 'Produces cross-pollinated flowers immediately', 'Forces taproot disappearance'],
          hi: ['जल अवशोषण सतह बढ़ जाती है व तना सड़ने से बचता है', 'तने में अर्धसूत्री विभाजन शुरू होता है', 'तुरंत पर-परागण वाले फूल आ जाते हैं', 'तने का रंग सफेद हो जाता है'],
        },
        correctIndex: 0,
        reason: {
          en: 'A clean slanted cut exposes larger xylem/cambium contact for water absorption and drains excess water off the top end!',
          hi: 'तिरछा कट संवहन ऊतक का अधिक क्षेत्रफल मृदा संपर्क में लाता है तथा ऊपर पानी जमने से सड़न रोकता है!',
        },
      },
    },
    {
      num: '11.2',
      title: { en: 'Activity 11.2: Yeast Budding in Warm `10%` Sugar Water vs Pond Hydra Observation', hi: 'क्रियाकलाप 11.2: गर्म `10%` शर्करा विलयन में यीस्ट मुकुलन व हाइड्रा अवलोकन' },
      materials: { en: 'Dry yeast granules, lukewarm water + `10%` sugar (`2 g` per `20 mL`), microscope/hand lens & freshwater Hydra slide', hi: 'सूखा यीस्ट पाउडर, गुनगुना `10%` शर्करा विलयन, सूक्ष्मदर्शी व स्वच्छ जल हाइड्रा स्लाइड' },
      steps: {
        en: 'Incubate yeast in `10%` lukewarm sugar for `1–2 h`; place a drop on slide and inspect budding chains under `10×/40×` objective. Examine Hydra permanent slide for lateral buds.',
        hi: 'गुनगुने `10%` चीनी घोल में यीस्ट रख `1–2 घंटे` बाद स्लाइड को `10×/40×` सूक्ष्मदर्शी से देखें; साथ ही हाइड्रा में पार्श्व मुकुल गिनें।',
      },
      examTakeaway: {
        en: 'Plain water keeps yeast dormant; **warm sugar energy activates rapid asexual budding**! In **Hydra**, specialized regenerative cells bud multiple offspring at specific body sites.',
        hi: 'सादे पानी की तुलना में **गर्म शर्करा से ऊर्जा पाकर यीस्ट में तीव्र मुकुलन** दिखता है! हाइड्रा में विशेष कोशिकाओं से एक/अनेक मुकुल उभरते हैं।',
      },
      predictQuestion: {
        prompt: { en: 'If yeast is kept in ice-cold plain water instead of warm `10%` sugar water, why are almost NO buds visible after 2 hours?', hi: 'यदि यीस्ट को गुनगुने शर्करा घोल की जगह ठंडे सादे पानी में रखा जाए, तो 2 घंटे बाद मुकुल क्यों नहीं दिखेंगे?' },
        options: {
          en: ['Lacks metabolic energy (`sugar`) & optimal enzyme temperature for cell division', 'Yeast performs meiosis only in hot oil', 'Plain water turns yeast into Spirogyra', 'Ice activates spore formation immediately'],
          hi: ['कोशिका विभाजन हेतु आवश्यक ऊर्जा (`शर्करा`) व अनुकूल तापमान का अभाव', 'यीस्ट केवल तेल में अर्धसूत्री विभाजन करता है', 'सादा जल यीस्ट को स्पाइरोगाइरा में बदल देता है', 'ठंड तुरंत बीजाणु निर्माण तेज करती है'],
        },
        correctIndex: 0,
        reason: {
          en: 'Aerobic/fermentative breakdown of dissolved glucose at warm temperature supplies ATP needed for rapid mitotic budding.',
          hi: 'अनुकूल ताप पर घुलित शर्करा से ही कोशिका विभाजन हेतु आवश्यक ATP ऊर्जा मिलती है।',
        },
      },
    },
    {
      num: '11.3',
      title: { en: 'Activity 11.3: Growth of `Rhizopus & Aspergillus` Spores on Moist Bread at `25–35°C`', hi: 'क्रियाकलाप 11.3: नम ब्रेड (`25–35°C`) पर राइजोपस व ऐस्पर्जिलस बीजाणु वृद्धि' },
      materials: { en: 'Moist bread/chapati slices, sealed transparent bag at `25–35°C`, fridge slice control (`4°C`) & microscope', hi: 'गीली ब्रेड/रोटी, `25–35°C` पर बंद पारदर्शी थैली, फ्रिज नियंत्रण नमूना व आवर्धक लेंस' },
      steps: {
        en: 'Compare damp bread left at room warmth (`25–35°C`) vs refrigerated (`4°C`) over `3–4` days; view sporangia blobs (`Rhizopus`) & spherical heads (`Aspergillus`) under `40×`.',
        hi: 'नम ब्रेड के एक टुकड़े को `25–35°C` गर्म-अँधेरी जगह तथा दूसरे को फ्रिज में रख `3–4` दिन बाद सफेद धागों (`Hyphae`) व बीजाणुधानियों का अवलोकन करें।',
      },
      examTakeaway: {
        en: '**Airborne fungal spores** germinate rapidly in warm moisture (`25–35°C`); refrigeration slows growth! **Pasteur** proved microbes come from pre-existing germs/spores (`not spontaneous generation`).',
        hi: 'हवा के **बीजाणु** गर्म नमी (`25–35°C`) में तीव्रता से उगते हैं; फ्रिज शीतलन इनकी वृद्धि रोक खाद्य सुरक्षित रखता है (`पाश्चर रोगाणु सिद्धांत`)!',
      },
      predictQuestion: {
        prompt: { en: 'Which structure in bread mould (`Rhizopus`) bursts to disperse millions of tiny asexual reproductive cells into air?', hi: 'ब्रेड मोल्ड (`राइजोपस`) में कौन-सी गोलाकार संरचना फटकर हवा में लाखों अलैंगिक बीजाणु फैलाती है?' },
        options: {
          en: ['Sporangium (`blob-on-a-stick`)', 'Rhizoid root', 'Chloroplast', 'Anther'],
          hi: ['बीजाणुधानी (`Sporangium`)', 'मूलाभास (`Rhizoid`)', 'हरितलवक', 'परागकोश'],
        },
        correctIndex: 0,
        reason: {
          en: 'Erect hyphae end in black bulb-like **sporangia** packed with walled haploid/mitotic spores (`Tech 3 Shifts 8, 21`).',
          hi: 'ऊर्ध्व कवकतंतुओं के सिरे पर गोल **बीजाणुधानी (`Sporangia`)** में असंख्य हल्के बीजाणु बनते हैं!',
        },
      },
    },
    {
      num: '11.4',
      title: { en: 'Activity 11.4: Modelling Meiotic Variation with `3` Coloured Bead Pairs (`2³ = 8` Outcomes)', hi: 'क्रियाकलाप 11.4: `3` जोड़ी रंगीन मनकों से अर्धसूत्री विभाजन व आनुवंशिक विविधता मॉडल' },
      materials: { en: '3 pairs of beads — Dark (`maternal`) & Light (`paternal`) versions in Large, Medium, Small sizes', hi: 'बड़े, मध्यम व छोटे आकार के 3 जोड़ी गहरे (`मातृ`) व हल्के (`पितृ`) रंग के मनके' },
      steps: {
        en: 'Pick one bead strictly from each of the 3 size pairs at random to form gametes; count total distinct possible combos (`D=Dark, L=Light`).',
        hi: 'प्रत्येक आकार की जोड़ी से यादृच्छिक रूप से 1-1 मनका चुनकर संभावित युग्मक संयोजन लिखें (`D=गहरा, L=हल्का`)।',
      },
      examTakeaway: {
        en: '**`3` pairs generate `2 × 2 × 2 = 8` unique gametes** (`DDD, DDL, DLD, DLL, LDD, LDL, LLD, LLL`) — showing how **meiosis creates enormous sibling variation** even from 23 human pairs!',
        hi: 'मात्र **`3` जोड़ों से `2 × 2 × 2 = 8` भिन्न युग्मक** बनते हैं (`23` मानव जोड़ों से करोड़ों संभावित संतति विभिन्नताएँ)!',
      },
      predictQuestion: {
        prompt: { en: 'If an organism has `4` pairs of contrasting chromosomes undergoing random assortment in Meiosis, how many distinct gamete combinations can form (`NCERT pattern`)?', hi: 'यदि किसी जीव में `4` जोड़ी गुणसूत्रों का स्वतंत्र अपव्यूहन (`अर्धसूत्री विभाजन`) हो, तो कुल कितने भिन्न युग्मक संयोजन बन सकते हैं?' },
        options: { en: ['8', '12', '16 (`2⁴`)', '32'], hi: ['8', '12', '16 (`2⁴`)', '32'] },
        correctIndex: 2,
        reason: {
          en: 'Each chromosome pair assorting independently gives `2` choices -> `2 × 2 × 2 × 2 = 2⁴ = 16` combinations!',
          hi: 'प्रत्येक जोड़ी के `2` विकल्प होने से `n` जोड़ों हेतु कुल `2ⁿ` अर्थात् `2⁴ = 16` भिन्न संयोजन बनते हैं!',
        },
      },
    },
    {
      num: '11.5',
      title: { en: 'Activity 11.5: Floral Dissection (`Sepals, Petals, Stamen, Pistil`) & Pollen Slide Inspection', hi: 'क्रियाकलाप 11.5: पुष्प विच्छेदन (`चारों चक्रों की पहचान`) एवं परागकण सूक्ष्मदर्शी जाँच' },
      materials: { en: 'Complete flower (`Hibiscus / Datura`), forceps, needle, glass slide & `10×` magnifier', hi: 'गुड़हल/धतूरा का पूर्ण पुष्प, चिमटी, सुई, काँच की स्लाइड व आवर्धक लेंस' },
      steps: {
        en: 'Peel outer green **sepals** -> bright **petals** -> count **stamens** -> dissect swollen **ovary** longitudinally/transversely to reveal pearl-like **ovules** inside. Dust pollen onto slide!',
        hi: 'बाहर से भीतर की ओर बाह्यदल, दल, पुंकेसर व केंद्रीय स्त्रीकेसर अलग कर अंडाशय काटकर नन्हे मोती जैसे बीजांड व स्लाइड पर परागकण देखें।',
      },
      examTakeaway: {
        en: 'Every **complete flower** has all 4 whorls; **Ovary houses Ovules** (`future fruit houses future seeds`) while insect pollen shows spiky exine coats!',
        hi: 'पूर्ण पुष्प में चारों चक्र होते हैं; **अंडाशय में स्थित बीजांड** निषेचन बाद क्रमशः **फल व बीज** में रूपांतरित होते हैं!',
      },
      predictQuestion: {
        prompt: { en: 'On cutting open the swollen basal part of a pistil carefully in Activity 11.5, the tiny bead-like structures observed inside are:', hi: 'क्र. 11.5 में स्त्रीकेसर के फूले हुए आधार भाग (`अंडाशय`) को काटने पर भीतर दिखाई देने वाली नन्हीं दानेदार संरचनाएँ क्या हैं?' },
        options: { en: ['Pollen grains', 'Ovules (`बीजांड`)', 'Sepals', 'Sporangia'], hi: ['परागकण', 'बीजांड (`Ovules`)', 'बाह्यदल', 'बीजाणुधानी'] },
        correctIndex: 1,
        reason: {
          en: 'The basal **ovary** contains one or many pearl-like **ovules** housing female egg nuclei!',
          hi: 'अंडाशय की गुहा में एक या अनेक **बीजांड (`Ovules`)** होते हैं जिनमें अंड कोशिका रहती है!',
        },
      },
    },
    {
      num: '11.6',
      title: { en: 'Activity 11.6: Bagging & Emasculation Control Experiment on Pea Flowers (`Pollination Proof`)', hi: 'क्रियाकलाप 11.6: मटर कलियों पर पुंकेसर विच्छेदन एवं थैली बांधना (`परागण अनिवार्यता प्रमाण`)' },
      materials: { en: '3 unopened pea flower buds (`Potted plants`), fine forceps & porous paper/muslin bags', hi: 'खिलने से पूर्व की 3 मटर कलियाँ, बारीक चिमटी व हवादार कागज/मलमल की थैलियाँ' },
      steps: {
        en: '**Plant 1**: Remove stamens BEFORE bud opens + bag tightly. **Plant 2**: Leave intact stamens + bag (`Self`). **Plant 3**: Remove stamens, dust foreign pea pollen onto stigma + bag (`Cross`). Inspect pods after `10–14` days!',
        hi: 'कली 1 के पुंकेसर निकाल थैली बाँधें (`नियंत्रण`); कली 2 को पुंकेसर सहित थैली में बंद करें (`स्व`); कली 3 में पुंकेसर हटा अन्य पौधे के पराग छिड़क थैली बाँधें (`पर`) — `10–14` दिन बाद फली जाँचें!',
      },
      examTakeaway: {
        en: '**Emasculated + Bagged (`No Pollen`) -> ZERO pods (`fertilisation blocked`)**, whereas self & cross bags yield pods — conclusively proving **pollination is mandatory for fruit/seed formation**!',
        hi: 'पुंकेसर-रहित थैलीबद्ध कली में **कोई फली/बीज नहीं बना**, जबकि अन्य दोनों में फलियाँ बनीं — सिद्ध होता है कि **फल-बीज हेतु परागण अनिवार्य है**!',
      },
      predictQuestion: {
        prompt: { en: 'Why was the fine breathable bag tied in Plant 1 (`emasculated`) of Activity 11.6 if all its stamens were already removed?', hi: 'क्र. 11.6 के पौधे 1 में पहले ही सभी पुंकेसर हटाने के बाद भी वर्तिकाग्र को हवादार थैली से क्यों ढका गया?' },
        options: {
          en: ['To prevent unwanted external pollen arrival by wind or insects', 'To block photosynthesis completely', 'To kill ovules by overheating', 'To turn the flower into an alga'],
          hi: ['हवा या कीटों द्वारा बाहरी परागकणों के अवांछित आगमन को रोकने हेतु', 'प्रकाश संश्लेषण रोकने हेतु', 'पूरी तरह ऑक्सीजन बंद करने हेतु', 'कली को तना बनाने हेतु'],
        },
        correctIndex: 0,
        reason: {
          en: 'Breathable bagging stops foreign pollen while keeping air/light available — creating a true `zero-pollination` control!',
          hi: 'थैली बाहरी परागकणों को रोककर हवा-प्रकाश चालू रखती है ताकि बिना परागण का परिणाम स्पष्ट परखा जा सके!',
        },
      },
    },
    {
      num: '11.7',
      title: { en: 'Activity 11.7: Community Survey on Family Planning Awareness & Myth Busting', hi: 'क्रियाकलाप 11.7: जनसंख्या स्वास्थ्य व परिवार नियोजन उपायों पर वैज्ञानिक संवाद' },
      materials: { en: 'NCERT Table of Contraceptives (`Barrier, Hormonal/CDRI, IUD Copper-T, Surgical`)', hi: 'गर्भनिरोधक विधियाँ सारणी (`कंडोम, CDRI गोली, कॉपर-T, शल्य नसबंदी`)' },
      steps: {
        en: 'Classify methods by reversibility, doctor requirement (`IUD/Surgery`), hormone vs non-hormone (`CDRI Lucknow pill`), and STI prevention capability (`Condom ONLY`).',
        hi: 'प्रत्येक विधि को अस्थायी/स्थायी, चिकित्सक आवश्यकता, हार्मोन प्रभाव एवं STI सुरक्षा के आधार पर वर्गीकृत करें।',
      },
      examTakeaway: {
        en: 'Only **barrier methods (`Condoms`) prevent BOTH pregnancy and STIs** (`HIV, Gonorrhoea, Syphilis`); **CDRI Lucknow** pioneered weekly non-steroidal pills; **`XX/XY` makes father’s gamete decide child sex** (`stop gender myths!`).',
        hi: '**कंडोम एकमात्र विधि है जो गर्भनिरोधन के साथ STI रोग भी रोकती है**; `CDRI लखनऊ` ने साप्ताहिक गैर-स्टेरॉयड गोली विकसित की; `XY` क्रोमोसोम से लिंग निर्धारण संयोग मात्र है!',
      },
      predictQuestion: {
        prompt: { en: 'A couple wishes to prevent BOTH unwanted pregnancy AND bacterial/viral STIs (`like HIV or Gonorrhoea`). Which contraceptive must they choose?', hi: 'एक दंपत्ति अनचाहे गर्भ के साथ-साथ यौन संचारित रोगों (`HIV/सुजाक`) से भी बचना चाहता है। सबसे उपयुक्त उपाय क्या है?' },
        options: { en: ['Male/Female Condom (`Barrier`)', 'Copper-T IUD', 'Oral contraceptive pills', 'Tubectomy'], hi: ['कंडोम (`यांत्रिक अवरोध`)', 'कॉपर-T (`IUD`)', 'गर्भनिरोधक गोलियाँ', 'डिंबवाहिनी नसबंदी'] },
        correctIndex: 0,
        reason: {
          en: 'Only barrier condoms physically isolate body fluids during intercourse, blocking both sperm & pathogens!',
          hi: 'यांत्रिक अवरोध कंडोम ही द्रव संपर्क रोककर शुक्राणु और रोगाणुओं दोनों को ब्लॉक करता है!',
        },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-11-bio-1',
      title: { en: 'Complete Matrix of Asexual Reproduction Modes (`NCERT Sec 11.1`, p.208–212)', hi: 'अलैंगिक जनन की सभी विधियों व उदाहरणों की संपूर्ण सारणी (`NCERT भाग 11.1`)' },
      headers: {
        en: ['Mode of Reproduction', 'Mechanism & Cell Division', 'Classic NCERT Examples', 'Top Railway CBT Exam Trap'],
        hi: ['अलैंगिक जनन विधि', 'प्रक्रिया व कोशिका विभाजन', 'प्रमुख NCERT उदाहरण', 'मुख्य रेलवे CBT परीक्षा जाल'],
      },
      rows: [
        [
          { en: '**Binary Fission**', hi: '**द्विखंडन (`Binary Fission`)**' },
          { en: 'Parent unicell splits into **2 equal halves** (`Mitosis`)', hi: 'एककोशिकीय जीव दो समान भागों में बँटता है' },
          { en: '`Amoeba` (`any plane`), **`Leishmania`** (`longitudinal axis`)', hi: '`अमीबा` (`किसी भी तल`), **`लेस्मानिया`** (`निश्चित कशाभ तल`)' },
          { en: 'Only **unicellular organisms**; **`Leishmania` has whip-like flagellum**!', hi: 'केवल एककोशिकीय; लेस्मानिया (`कालाजार`) का तल निश्चित!' },
        ],
        [
          { en: '**Multiple Fission**', hi: '**बहुखंडन (`Multiple Fission`)**' },
          { en: 'Nucleus divides repeatedly inside cyst -> **many daughter cells**', hi: 'पुटी के भीतर केंद्रक कई बार विभाजित हो अनेक कोशिकाएँ बनाता है' },
          { en: '**`Plasmodium`** (`Malaria parasite`)', hi: '**`प्लाज्मोडियम`** (`मलेरिया परजीवी`)' },
          { en: '`Plasmodium` NEVER undergoes binary fission (`Tech 3 Shift 16`)!', hi: 'प्लाज्मोडियम में **बहुखंडन** होता है, द्विखंडन नहीं (`लगातार PYQ`)!' },
        ],
        [
          { en: '**Budding & Regeneration**', hi: '**मुकुलन व पुनर्जनन**' },
          { en: 'Repeated mitotic division at **specific site** -> outgrowth (`bud`)', hi: 'विशिष्ट स्थान पर बार-बार विभाजन से मुकुल उभार अलग होता है' },
          { en: '`Yeast` (`unicellular`), `Hydra`, `Planaria` (`cut-piece regeneration`)', hi: '`यीस्ट` (`एककोशिक`), `हाइड्रा`, `प्लेनेरिया` (`कटे भागों से पुनरुद्भवन`)' },
          { en: '**Regeneration ≠ true normal reproduction** (`doesn’t depend on cuts`)!', hi: 'पुनर्जनन कटे टुकड़ों पर निर्भर होने से सामान्य जनन समतुल्य नहीं!' },
        ],
        [
          { en: '**Fragmentation & Spores**', hi: '**खंडन व बीजाणु निर्माण**' },
          { en: 'Filament breaks (`Spirogyra`) / Microscopic sporangia blobs burst (`25–35°C`)', hi: 'परिपक्व तंतु टूटना (`खंडन`) / बीजाणुधानी फटना (`राइजोपस`)' },
          { en: '**`Spirogyra`** (`Frag`), **`Rhizopus`** & **`Aspergillus`** (`Spores`)', hi: '**`स्पाइरोगाइरा`** (`खंडन`), **`राइजोपस`** (`ब्रेड मोल्ड`) व **`ऐस्पर्जिलस`**' },
          { en: 'Fridge keeps `Rhizopus` dormant; `Penicillium` makes **Penicillin**!', hi: 'शीतलन (`फ्रिज`) बीजाणु वृद्धि रोकता है; पेनिसिलियम उपयोगी कवक!' },
        ],
        [
          { en: '**Vegetative & Tissue Culture**', hi: '**कायिक प्रवर्धन व ऊतक संवर्धन**' },
          { en: 'New plant from **Root, Stem, Leaf** or virus-free shoot-tip agar cells', hi: 'जड़, तना, पत्ती या प्ररोह-शीर्ष (`आगार माध्यम`) से नया क्लोन पौधा' },
          { en: 'Potato (`eye`), **Bryophyllum (`leaf buds`)**, Banana (`tissue culture`)', hi: 'आलू (`आँख`), **ब्रायोफिलम (`पत्ती`)**, केला (`ऊतक संवर्धन`)' },
          { en: '**Seeds/Flowers NEVER vegetative**; `Papaya` NOT vegetative (`Tech 3 8`)!', hi: 'बीज/पुष्प नहीं आते; पपीता कायिक प्रवर्धन नहीं करता!'},
        ],
      ],
    },
    {
      id: 'tbl-11-bio-2',
      title: { en: 'Complete Floral Whorls (`Act 11.5`) & Post-Fertilisation Fates (`NCERT Sec 11.2`, p.214–218)', hi: 'पुष्प के चारों चक्र (`क्र. 11.5`) एवं निषेचन के बाद होने वाले रूपांतरण' },
      headers: {
        en: ['Floral Part / Whorl', 'Type (`Accessory / Reproductive`)', 'Primary Biological Function', 'Fate After Fertilisation'],
        hi: ['पुष्प का भाग / चक्र', 'प्रकार (`सहायक / जननांग`)', 'मुख्य जैविक कार्य', 'निषेचन के पश्चात स्थिति'],
      },
      rows: [
        [
          { en: '**Sepals (`Calyx`)**', hi: '**बाह्यदल (`Sepals`)**' },
          { en: 'Accessory (`Outer green whorl`)', hi: 'सहायक चक्र (`बाहरी हरा आवरण`)' },
          { en: 'Protects unopened floral bud & photosynthesizes', hi: 'कली अवस्था में आंतरिक जननांगों की सुरक्षा' },
          { en: 'Shrivels & falls off (`rarely persistent like tomato/brinjal`)', hi: 'प्रायः मुरझाकर झड़ जाता है (`टमाटर-बैंगन में टिका रहता है`)' },
        ],
        [
          { en: '**Petals (`Corolla`)**', hi: '**दल / पंखुड़ी (`Petals`)**' },
          { en: 'Accessory (`Showy coloured/scented`)', hi: 'सहायक चक्र (`रंगीन व सुगंधित`)' },
          { en: 'Attracts insects, bats & birds (`Sunbird`) for pollination', hi: 'परागण हेतु कीटों व पक्षियों को आकर्षित करना' },
          { en: 'Wither & drop after pollen tube reaches ovary', hi: 'निषेचन के बाद सूखकर झड़ जाती हैं' },
        ],
        [
          { en: '**Stamen (`Androecium`)**', hi: '**पुंकेसर (`Androecium`)**' },
          { en: '**Male Reproductive** (`Filament + Anther`)', hi: '**नर जनन अंग** (`तंतु + परागकोश`)' },
          { en: 'Anther makes haploid **Pollen grains** (`male germ-cell`)', hi: 'परागकोश में नर युग्मक युक्त **परागकण** बनते हैं' },
          { en: 'Dries & falls after releasing pollen (`absent in ♀ Papaya`)', hi: 'पराग विसर्जन के बाद गिर जाते हैं' },
        ],
        [
          { en: '**Pistil (`Stigma, Style, Ovary`)**', hi: '**स्त्रीकेसर (`वर्तिकाग्र, वर्तिका, अंडाशय`)**' },
          { en: '**Female Reproductive** (`Gynoecium`)', hi: '**मादा जनन अंग** (`जायांग / अंडप`)' },
          { en: 'Stigma catches pollen -> Style guides tube (`Chemotropism`)', hi: 'वर्तिकाग्र पराग ग्रहण करता है व वर्तिका पराग नली का मार्ग है' },
          { en: '**Stigma/Style fall**; **==Ovary ripens -> FRUIT==**!', hi: '**वर्तिकाग्र/वर्तिका झड़ जाते हैं**; **==अंडाशय पककर फल बनता है==**!' },
        ],
        [
          { en: '**Ovules inside Ovary**', hi: '**अंडाशय स्थित बीजांड (`Ovules`)**' },
          { en: 'Female Gametophyte Chamber (`Egg cell`)', hi: 'अंड कोशिका धारण कक्ष' },
          { en: 'Fuses with male gamete -> diploid **Zygote -> Embryo**', hi: 'नर युग्मक से निषेचन कर युग्मनज व भ्रूण बनाता है' },
          { en: 'Develops tough seed coat -> **==SEED==** (`Tech 3 Shift 11, 23`)!', hi: 'कठोर आवरण संग विकसित हो **==बीज (`Seed`)==** बनता है!' },
        ],
      ],
    },
    {
      id: 'tbl-11-bio-3',
      title: { en: 'Wind vs Insect/Bird Pollination Efficiency Comparison (`NCERT Table 11.3`, p.217)', hi: 'वायु परागण बनाम कीट/पक्षी परागण व बीज दक्षता (`NCERT तालिका 11.3`, पृ. 217)' },
      headers: {
        en: ['Pollination Agent & Examples', 'Pollen Produced per Flower', 'Flower & Pollen Adaptations', 'Seeds Produced per Flower (`Efficiency`)'],
        hi: ['परागण माध्यम व उदाहरण', 'प्रति पुष्प पराग संख्या', 'पुष्प व परागकण अनुकूलन', 'प्रति पुष्प निर्मित बीज (`दक्षता`)'],
      },
      rows: [
        [
          { en: '**Wind (`Grass, Maize, Wheat`)**', hi: '**वायु (`घास, मक्का, गेहूँ`)**' },
          { en: '**`5,00,000 – 10,00,000`** (`5–10 lakh`!)', hi: '**`5 – 10 लाख`** (`अत्यधिक उच्च`)' },
          { en: 'Dry, light, smooth pollen; dull small flowers; feathery stigma', hi: 'सूखे हल्के कण, बिना मकरंद, पंखदार बड़े वर्तिकाग्र' },
          { en: 'Only **`50 – 200`** seeds (`huge wind wastage — <0.04%`!)', hi: 'मात्र **`50 – 200`** बीज (`वायु में भारी अपव्यय`!)' },
        ],
        [
          { en: '**Insect / Bird (`Sunflower, Orchid, Sunbird`)**', hi: '**कीट / पक्षी (`सूरजमुखी, शकरखोरा`)**' },
          { en: '**`20,000 – 40,000`** (`20× less than wind!`)', hi: '**`20,000 – 40,000`** (`वायु से 20× कम`)' },
          { en: 'Bright petals, fragrance, nectar; sticky spiky pollen clinging to bees/beaks', hi: 'रंगीन दल, सुगंध, मकरंद तथा चिपचिपे काँटेदार परागकण' },
          { en: '**`800 – 1,000`** seeds (`targeted delivery — HIGH precision!`)' , hi: '**`800 – 1,000`** बीज (`लक्षित स्थानांतरण — सर्वाधिक दक्ष!`)' },
        ],
        [
          { en: '**Water (`Vallisneria, Hydrilla`)**', hi: '**जल (`वेलिसनेरिया, हाइड्रिला`)**' },
          { en: 'Abundant protected pollen (`mucilage coat`)', hi: 'जलरोधी श्लेष्म आवरण युक्त पराग' },
          { en: 'Light floating/ribbon-like pollen carried by water currents', hi: 'जल धाराओं में बहकर मादा पुष्प तक पहुँचते हैं' },
          { en: 'Moderate aquatic seed set; distinct from wind/insect flora', hi: 'जलीय आवास में अनुकूलित संतुलित बीज निर्माण' },
        ],
      ],
    },
    {
      id: 'tbl-11-bio-4',
      title: { en: 'External vs Internal Fertilisation & Parental Investment (`NCERT Table 11.4`, p.219)', hi: 'जंतुओं में बाह्य बनाम आंतरिक निषेचन एवं अंड-संख्या संतुलन (`NCERT तालिका 11.4`)' },
      headers: {
        en: ['Animal Group & Examples', 'Fertilisation Type (`Place`)', 'Typical Eggs / Birth Count', 'Development, Larva & Survival Rate'],
        hi: ['जंतु वर्ग व उदाहरण', 'निषेचन प्रकार (`स्थल`)', 'अंड / संतति संख्या', 'विकास (`अंडज/जरायुज`), लार्वा व उत्तरजीविता'],
      },
      rows: [
        [
          { en: '**Bony Fish (`Rohu, Catla`)**', hi: '**मछलियाँ (`रोहू, कतला`)**' },
          { en: 'External (`Water medium`)', hi: 'बाह्य (`जलीय माध्यम`)' },
          { en: '**`100 – 1,000`** per spawning', hi: '**`100 – 1,000`** प्रति प्रजनन' },
          { en: 'Oviparous; **low yolk -> swimming fry/larva**; low individual survival', hi: 'अंडज; कम पीतक, लार्वा चरण; परभक्षियों से भारी क्षति' },
        ],
        [
          { en: '**Amphibians (`Frog, Toad`)**', hi: '**उभयचर (`मेंढक`)**' },
          { en: 'External (`Monsoon ponds`)', hi: 'बाह्य (`वर्षा जल`)' },
          { en: '**`5,000 – 50,000`** (`max waste!`)', hi: '**`5,000 – 50,000`** (`सर्वाधिक`)' },
          { en: 'Oviparous jelly eggs -> **Tadpole larva feeds externally -> Metamorphosis**', hi: 'अंडज; **टैडपोल लार्वा (`गिल्स`)** भोजन कर **कायांतरण** से मेंढक बनता है' },
        ],
        [
          { en: '**Reptiles (`Lizard, Snake, Turtle`)**', hi: '**सरीसृप (`छिपकली, साँप`)**' },
          { en: 'Internal (`Inside female`)', hi: 'आंतरिक (`मादा शरीर में`)' },
          { en: '**`2 – 20`** leathery eggs', hi: '**`2 – 20`** चर्मिल कवच अंडे' },
          { en: 'Oviparous on land; rich yolk -> **NO larval stage** (`Think Q5`)', hi: 'स्थलीय अंडज; प्रचुर पीतक; **कोई लार्वा चरण नहीं**' },
        ],
        [
          { en: '**Birds (`Sparrow, Hen, Eagle`)**', hi: '**पक्षी (`चिड़िया, मुर्गी`)**' },
          { en: 'Internal (`Protected tract`)', hi: 'आंतरिक (`सुरक्षित मार्ग`)' },
          { en: '**`1 – 15`** hard CaCO₃ eggs', hi: '**`1 – 15`** कठोर कैल्सियम अंडे' },
          { en: 'Oviparous with **parental incubation/care -> high chick survival**', hi: 'अंडज; **अंडों को सेने व शिशु पालन** से उच्च उत्तरजीविता' },
        ],
        [
          { en: '**Mammals (`Human, Elephant, Dog`)**', hi: '**स्तनधारी (`मानव, हाथी`)**' },
          { en: 'Internal (`Oviduct!`)', hi: 'आंतरिक (`अंडवाहिनी में`)' },
          { en: '**`1 – 8`** (`often 1–2`)', hi: '**`1 – 8`** (`मानव में प्रायः 1`)' },
          { en: '**Viviparous** (`Uterus + Placenta` + mother’s milk) -> **MAX survival!**', hi: '**जरायुज** (`गर्भाशय + अपरा + स्तनपान`) → **उच्चतम उत्तरजीविता**!' },
        ],
      ],
    },
    {
      id: 'tbl-11-bio-5',
      title: { en: 'Male Sperm vs Female Ovum (`NCERT Table 11.5`) & Contraceptive Safety Matrix (`Sec 11.5.4`)', hi: 'नर शुक्राणु बनाम मादा अंडाणु (`तालिका 11.5`) एवं गर्भनिरोधक सुरक्षा सारणी' },
      headers: {
        en: ['Feature / Method', 'Sperm / Contraceptive Type', 'Ovum / Mechanism of Action', 'Critical Exam & STI Note'],
        hi: ['विशेषता / उपाय', 'शुक्राणु / श्रेणी', 'अंडाणु / कार्य-प्रणाली', 'महत्वपूर्ण परीक्षा व STI बिंदु'],
      },
      rows: [
        [
          { en: '**Gamete Size & Motility (`Table 11.5`)**', hi: '**युग्मक आकार व गति (`तालिका 11.5`)**' },
          { en: '**Microscopic & Motile (`flagellum tail`)**; millions per ejaculation', hi: '**अति सूक्ष्म व गतिशील (`पूँछ`)**; लाखों की संख्या' },
          { en: '**Largest human cell, Non-motile**, packed with **stored nutrients**; `1`/month', hi: '**सबसे बड़ी मानव कोशिका, अगतिशील**, भोजन-संचित (`माह में 1`)' },
          { en: 'Both carry **`23` chromosomes (`haploid`)**; Father sperm carries **`X` or `Y`** (`50:50`)!', hi: 'दोनों `23` गुणसूत्र (`अगुणित`); पिता का `X` या `Y` ही लिंग तय करता है!' },
        ],
        [
          { en: '**Condom (`Mechanical Barrier`)**', hi: '**कंडोम (`यांत्रिक अवरोधक`)**' },
          { en: 'Sheath barrier (`Reversible, User-controlled`)', hi: 'यांत्रिक अवरोध (`अस्थायी, सुरक्षित`)' },
          { en: 'Physically blocks sperm from entering vagina/cervix', hi: 'शुक्राणु व जनन द्रवों को योनि में प्रवेश से रोकता है' },
          { en: '**==ONLY contraceptive blocking BOTH pregnancy & STIs (`HIV, Gonorrhoea, Syphilis`)==**!', hi: '**==गर्भधारण + यौन रोग (`STI: HIV, सुजाक, सिफलिस`) दोनों रोकने वाला एकमात्र उपाय==**!' },
        ],
        [
          { en: '**Oral Pills (`CDRI Saheli & Hormonal`)**', hi: '**गर्भनिरोधक गोलियाँ (`सहेली/हार्मोनल`)**' },
          { en: 'Reversible Pharmaceutical', hi: 'अस्थायी औषधि विधि' },
          { en: 'Stops ovulation (`hormonal`) / alters uterine receptivity (`non-steroid`)', hi: 'अंडोत्सर्ग रोकना (`हार्मोन`) या रोपण रोकना (`गैर-हार्मोन`)' },
          { en: '**CDRI Lucknow** pioneered **world’s first weekly non-steroidal pill (`Saheli`)**!', hi: '**CDRI लखनऊ** द्वारा विकसित **विश्व की प्रथम साप्ताहिक गैर-हार्मोन गोली (`सहेली`)**!' },
        ],
        [
          { en: '**Copper-T (`IUD`) & Surgery**', hi: '**कॉपर-T (`IUD`) व शल्य नसबंदी**' },
          { en: 'Long-term (`IUD`) / Permanent (`Vasectomy, Tubectomy`)', hi: 'दीर्घकालिक (`IUD`) / स्थायी (`नसबंदी`)' },
          { en: '`IUD` impairs sperm & implantation; `Surgery` cuts `vas deferens` / `oviduct`', hi: '`कॉपर-T` शुक्राणु गति रोकता है; नसबंदी नलिका मार्ग बंद करती है' },
          { en: 'Requires **medical clinician**; **ZERO STI protection** (`Tech 3 Shifts 13, 17`)!', hi: 'चिकित्सकीय प्रक्रिया आवश्यक; **STI रोगों से कोई सुरक्षा नहीं**!' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'Think 1',
      q: { en: 'Why does a mango plant grown by grafting produce fruit identical to the scion parent while seed-grown trees vary widely?', hi: 'कलम (`Grafting`) द्वारा उगाया गया आम जनक वृक्ष जैसा ही फल क्यों देता है जबकि बीज से उगे पेड़ में विविधता दिखती है?' },
      a: { en: 'Grafting relies on **mitotic asexual division** preserving the exact DNA blueprint (`clones`) of the scion; seeds arise from **meiosis + cross-fertilisation**, shuffling paternal & maternal alleles!', hi: 'कलम में केवल **समसूत्री विभाजन** से जनक सायन का हूबहू डीएनए (`क्लोन`) बनता है; जबकि बीज **अर्धसूत्री विभाजन व पर-निषेचन** से बन गुणों का नया मिश्रण लाते हैं।' },
    },
    {
      num: 'Think 2',
      q: { en: 'Give two advantages of vegetative propagation and Tissue Culture, plus one major agricultural danger.', hi: 'कायिक प्रवर्धन व ऊतक संवर्धन के दो लाभ तथा कृषि हेतु एक प्रमुख खतरा बताइए।' },
      a: { en: '**Advantages**: (1) Rapid flowering/fruiting & **identical high-yield traits** (`seedless banana`); (2) Shoot-tip **tissue culture** yields **virus-free saplings** quickly. **Danger**: Zero genetic variation means a single fungal/viral outbreak can wipe out the entire crop!', hi: '**लाभ**: (1) शीघ्र फल व बीजरहित फसलों (`केला`) के हूबहू गुण; (2) प्ररोह-शीर्ष ऊतक संवर्धन से **रोग/विषाणु-मुक्त पौधे**। **खतरा**: विविधता न होने से एक बीमारी पूरी फसल नष्ट कर सकती है!' },
    },
    {
      num: 'Think 3',
      q: { en: 'How does vegetative propagation in `Bryophyllum` differ from spore formation in `Rhizopus`?', hi: '`ब्रायोफिलम` में कायिक प्रवर्धन एवं `राइजोपस` में बीजाणु निर्माण किस प्रकार भिन्न हैं?' },
      a: { en: '`Bryophyllum` regenerates multicellular miniature leafy plantlets directly in **leaf margin notches**, whereas `Rhizopus` fungus makes microscopic **unicellular wind-borne spores inside black sporangia** on hyphae.', hi: '`ब्रायोफिलम` में पत्ती की खाँचों से जड़-पत्ती युक्त बहुकोशिक पादपक बनते हैं, जबकि `राइजोपस` कवक तंतुओं पर गोल **बीजाणुधानी (`Sporangia`)** में लाखों सूक्ष्म एककोशिक बीजाणु बनाता है।' },
    },
    {
      num: 'Think 4',
      q: { en: 'Why do wind-pollinated flowers like grass and maize produce `5–10 lakh` pollen grains yet only `50–200` seeds, compared to sunflower?', hi: 'घास व मक्का जैसे वायु-परागित पुष्प `5–10 लाख` परागकण बनाकर भी केवल `50–200` बीज क्यों बनाते हैं?' },
      a: { en: 'Wind disperses pollen blindly in all directions (`huge atmospheric loss`), whereas insect/bird pollinators (`Table 11.3 Sunflower`) deliver sticky pollen accurately from anther directly onto receptive stigmas (`800–1000` seeds from just `20–40k` pollen!).', hi: 'हवा दिशाहीन होने से अधिकांश पराग व्यर्थ गिर जाता है (`तालिका 11.3`), जबकि कीट/पक्षी परागण में चिपचिपे परागकण सटीक रूप से वर्तिकाग्र तक पहुँचते हैं (`कम पराग से 800–1000 बीज`)।' },
    },
    {
      num: 'Think 5 (`ihsc1an Key Verified`)',
      q: { en: 'Which type of fertilisation (`external or internal`) is better suited for terrestrial animals like lizards and birds, and why?', hi: 'भूमि पर रहने वाले छिपकली व पक्षी जैसे जंतुओं में किस प्रकार का निषेचन (`बाह्य या आंतरिक`) अधिक उपयुक्त है और क्यों?' },
      a: { en: '**==आंतरिक निषेचन (`Internal fertilisation`)==**: On dry land gametes would instantly desiccate outdoors and lack swimming medium; depositing sperm inside the female tract shields fragile zygotes & assures high survival!', hi: '**==आंतरिक निषेचन (`Internal fertilisation`)==** अधिक उपयुक्त है क्योंकि स्थलीय शुष्क वातावरण में जल माध्यम के बिना युग्मक सूख जाएँगे; मादा शरीर के अंदर सुरक्षा व उच्च निषेचन सफलता मिलती है!' },
    },
    {
      num: 'Think 6 (`ihsc1an Key Verified`)',
      q: { en: 'Name the biological phase (`age stage`) between childhood and adulthood when human reproductive organs reach functional maturity.', hi: 'बचपन और वयस्कता के बीच की उस अवस्था का नाम बताइए जब मानव जनन अंग परिपक्व होकर सक्रिय हो जाते हैं।' },
      a: { en: '**==किशोरावस्था (`Adolescence`)==** (`marked by puberty transitions triggered by Testosterone in boys & Oestrogen in girls`).', hi: '**==किशोरावस्था (`Adolescence / यौवनारंभ`)==** — जब नर में टेस्टोस्टेरोन व मादा में एस्ट्रोजन से द्वितीयक लैंगिक लक्षण व युग्मक निर्माण आरंभ होता है।' },
    },
    {
      num: 'Think 7 (`ihsc1an Calendar Math`)',
      q: { en: 'If a woman’s normal 28-day menstrual cycle starts bleeding on **March 20**, on which date is **ovulation (`egg release`)** most likely to occur?', hi: 'यदि किसी महिला के नियमित 28-दिवसीय मासिक धर्म चक्र का रक्तस्राव **20 मार्च** को शुरू होता है, तो **अंडोत्सर्ग (`Ovulation`)** किस तिथि को होने की प्रबल संभावना है?' },
      a: { en: 'Counting **March 20 as Day 1**: March has `31` days -> `31 − 20 + 1 = 12` days up to March 31 (`Day 12`) -> Day 13: April 1 -> **==Day 14: April 2 (`2 अप्रैल`)==**!', hi: '**20 मार्च को दिन 1** मानने पर (`31 मार्च = दिन 12`): 1 अप्रैल को दिन 13 तथा **==दिन 14 (`अंडोत्सर्ग`): 2 अप्रैल==** को होगा!' },
    },
    {
      num: 'Think 8 (`ihsc1an Key Verified`)',
      q: { en: 'In humans (`2n = 46`), how many chromosomes are present inside a fertilised **zygote (`युग्मनज`)** right after sperm fuses with ovum?', hi: 'मानव में शुक्राणु और अंडाणु के संलयन से बनने वाले **युग्मनज (`Zygote`)** में कुल कितने गुणसूत्र होते हैं?' },
      a: { en: 'Sperm (`23`, formed by meiosis) + Ovum (`23`, formed by meiosis) = **==`46 गुणसूत्र` (`46 chromosomes` / `23 pairs`)==**!', hi: 'अर्धसूत्री विभाजन से बने शुक्राणु (`23`) + अंडाणु (`23`) = **==`46 गुणसूत्र` (`23 जोड़े`)==** पुनः स्थापित हो जाते हैं!' },
    },
    {
      num: 'Think 9',
      q: { en: 'Why are human **testes** located outside the abdominal cavity inside a pouch called the **scrotum**?', hi: 'मानव में **वृषण** उदर गुहा के बाहर **वृषणकोश (`Scrotum`)** नामक थैली में क्यों स्थित होते हैं?' },
      a: { en: 'Healthy **sperm maturation requires a temperature roughly `2–3°C` lower than normal `37°C` internal body temperature** (`Tech 3 2024 Shift 6`).', hi: 'शुक्राणुओं के निर्माण व परिपक्वता के लिए शरीर के सामान्य तापमान (`37°C`) से **`2–3°C` कम तापमान** की आवश्यकता होती है!' },
    },
    {
      num: 'Think 10',
      q: { en: 'Specify the exact anatomical sites where: `(a) human fertilisation happens`, `(b) embryo implants`, and `(c) mother’s blood nourishes the foetus`.', hi: 'सही अंग लिखिए जहाँ: `(क) मानव निषेचन होता है`, `(ख) भ्रूण रोपित होता है`, तथा `(ग) माँ के रक्त से भ्रूण को पोषण मिलता है`।' },
      a: { en: '`(a)` **Oviduct / Fallopian tube (`डिंबवाहिनी`)**; `(b)` **Uterus inner wall / Endometrium (`गर्भाशय`)**; `(c)` **Placenta (`अपरा`)**!', hi: '`(क)` **डिंबवाहिनी / फैलोपियन ट्यूब**; `(ख)` **गर्भाशय (`अंतर्गर्भाशय-कला`)**; `(ग)` **अपरा (`Placenta`)**!' },
    },
    {
      num: 'Think 11',
      q: { en: 'Why can’t Copper-T or oral contraceptive pills stop the spread of STIs like HIV, syphilis, or gonorrhoea?', hi: 'कॉपर-T या गर्भनिरोधक गोलियाँ `HIV`, सिफलिस या सुजाक जैसे यौन रोगों को क्यों नहीं रोक पातीं?' },
      a: { en: 'Pills alter hormones and Copper-T acts locally inside the uterus, leaving genital mucous membranes & fluids in direct contact — ONLY **Condoms** act as a physical fluid barrier!', hi: 'गोलियाँ हार्मोन नियंत्रित करती हैं व कॉपर-T गर्भाशय के अंदर रहता है, अतः द्रव संपर्क बना रहता है; केवल **कंडोम** शारीरिक अवरोध बन संक्रमण रोकता है!' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'Asexual reproduction vs Sexual (`NCERT Ex 1`): Which option correctly identifies the mode that produces offspring genetically IDENTICAL to the single parent?', hi: 'अभ्यास 1: कौन-सी जनन विधि केवल एक जनक से आनुवंशिक रूप से बिल्कुल समान (`क्लोन`) संतति उत्पन्न करती है? `(iii सत्यापित)`' },
      a: { en: '**(iii) Vegetative / Asexual reproduction** (`mitosis-only single parent copies DNA directly without gamete fusion or meiotic shuffling`).', hi: '**(iii) अलैंगिक / कायिक प्रवर्धन**: क्योंकि इसमें एकल जनक केवल समसूत्री विभाजन से अपनी हूबहू डीएनए प्रतिलिपि (`क्लोन`) बनाता है।' },
    },
    {
      num: '2',
      q: { en: 'Match the following plant parts & organisms with their reproductive roles (`NCERT Ex 2 — ihsc1an Verified: (iii),(i),(ii),(iv)`): Stamen/Anther, Ovary, Ovule, Bryophyllum.', hi: 'अभ्यास 2: सही सुमेलन कीजिए (`स्टामेन/परागकोश, अंडाशय, बीजांड, ब्रायोफिलम` — `ihsc1an क्रम: (iii), (i), (ii), (iv)`):' },
      a: { en: '**Match Keys**: `(1) Stamen / Anther` -> **(iii) Produces pollen grains**; `(2) Ovary` -> **(i) Ripens into Fruit after fertilisation**; `(3) Ovule` -> **(ii) Converts into Seed**; `(4) Bryophyllum` -> **(iv) Leaf margin vegetative buds**!', hi: 'सही मिलान: `(1) पुंकेसर/परागकोश` → **(iii) परागकण निर्माण**; `(2) अंडाशय` → **(i) निषेचन बाद फल**; `(3) बीजांड` → **(ii) बीज**; `(4) ब्रायोफिलम` → **(iv) पत्तियों के किनारों पर कायिक कलिकाएँ**!' },
    },
    {
      num: '3',
      q: { en: 'NCERT Ex 3 (`ihsc1an: (iv)`): Why is **sexual reproduction (`via meiosis + fertilisation`)** vital for evolution & survival across changing environments?', hi: 'अभ्यास 3 (`ihsc1an उत्तर: (iv)`): बदलते पर्यावरण में प्रजातियों के दीर्घकालिक अस्तित्व के लिए **लैंगिक जनन (`अर्धसूत्री + निषेचन`)** क्यों आवश्यक है?' },
      a: { en: '**(iv) Creates new genetic variations (`meiosis crossing-over + mixing gametes from two parents`)**, giving populations survival traits when climates, predators, or diseases change!', hi: '**(iv) यह आनुवंशिक विभिन्नताएँ उत्पन्न करता है** (`अर्धसूत्री विभाजन व दो जनकों के युग्मक संलयन से`), जिससे जलवायु या रोग बदलने पर भी कुछ जीव अनुकूलित रह बच जाते हैं!' },
    },
    {
      num: '4',
      q: { en: 'Differentiate between **asexual and sexual reproduction** across 3 crisp parameters (`parents, cell division, offspring variation`).', hi: 'अलैंगिक व लैंगिक जनन में 3 स्पष्ट अंतर लिखिए (`जनक संख्या, कोशिका विभाजन, विभिन्नता`)।' },
      a: { en: '**Asexual**: 1 parent, **Mitosis only**, NO gametes/zygote -> **identical clones (`zero/minimal variation`)**. **Sexual**: 2 gametes (`often 2 parents`), **Meiosis (`46→23`) + Mitosis**, gamete fusion forms **zygote** -> **high variation (`evolution advantage`)**.', hi: '**अलैंगिक**: 1 जनक, **केवल समसूत्री विभाजन**, युग्मक/युग्मनज नहीं, संतति क्लोन (`शून्य विभिन्नता`)। **लैंगिक**: दो युग्मक, **अर्धसूत्री (`46→23`) + निषेचन** से युग्मनज, **उच्च विभिन्नता (`विकास लाभ`)**।' },
    },
    {
      num: '5',
      q: { en: 'Why are children NOT exact photocopies of either parent even though all humans belong to the same species?', hi: 'एक ही माता-पिता की संतानें एक ही प्रजाति की होने पर भी हूबहू माता या पिता जैसी प्रतिलिपि क्यों नहीं होतीं?' },
      a: { en: 'Meiosis shuffles paternal and maternal chromosomes (`2²³+` gamete variations, Act 11.4), and fertilisation combines half genes from **BOTH father and mother** uniquely in every zygote!', hi: 'अर्धसूत्री विभाजन से युग्मकों में गुणसूत्रों का नया संयोजन बनता है (`क्र. 11.4`), तथा निषेचन में **माता और पिता दोनों** के आधे-आधे गुणसूत्रों का अनूठा मिश्रण संतान में आता है!' },
    },
    {
      num: '6',
      q: { en: 'Why does a rose plant grown by **stem cutting (`vegetative`)** bloom faster and show exact parent petal colour compared to a seedling grown from seed?', hi: 'बीज से उगाए पौधे की तुलना में तना **कर्तन (`Cutting`)** से उगाया गुलाब जल्दी फूल क्यों देता है व जनक जैसा ही रंग क्यों दिखाता है?' },
      a: { en: 'Cuttings start with a **mature mitotic shoot retaining exact parental DNA** and bypass lengthy seed dormancy & seedling phases!', hi: 'कर्तन में जनक तने की **समान डीएनए प्रतिलिपि** व परिपक्व ऊतक सीधे मिलते हैं और बीज प्रसुप्ति की धीमी अवस्था पार हो जाती है।' },
    },
    {
      num: '7',
      q: { en: 'Explain how **tissue culture (`micropropagation`)** helps Indian farmers grow lakhs of healthy banana saplings without diseases.', hi: 'भारत में किसान लाखों रोग-मुक्त केले के पौधे तैयार करने हेतु **ऊतक संवर्धन (`Tissue Culture`)** कैसे करते हैं?' },
      a: { en: 'Microscopic **virus-free cells from the fast-dividing shoot tip** are cultured on nutrient-hormone agar in sterile bottles (`Act 11.1 Box`), multiplying into thousands of uniform disease-free plantlets year-round!', hi: 'केले के तेजी से बढ़ते **प्ररोह-शीर्ष की विषाणु-मुक्त कोशिकाएँ** जीवाणुहीन पोषक-हॉर्मोन (`आगार`) माध्यम में उगाकर वर्ष भर में लाखों रोग-मुक्त एकसमान पौधे तैयार किए जाते हैं!' },
    },
    {
      num: '8',
      q: { en: 'Why do frogs and bony fishes release **thousands of eggs**, whereas birds (`1–15`) and humans (`usually 1`) produce very few?', hi: 'मेंढक व मछलियाँ हजारों अंडे क्यों देते हैं जबकि पक्षी (`1–15`) व मानव (`प्रायः 1`) बहुत कम संतति पैदा करते हैं?' },
      a: { en: 'Frogs & fish perform **external fertilisation in open water**, exposing tiny low-yolk eggs to currents & predators (`huge mortality requires massive numbers`); birds & humans use protected **internal fertilisation + parental care**!', hi: 'मछली/मेंढक में जल में **बाह्य निषेचन** से परभक्षियों व लहरों द्वारा भारी क्षति होती है (`बचने हेतु हजारों अंडे`); जबकि पक्षी/मानव में सुरक्षित **आंतरिक निषेचन व शिशु देखभाल** होती है!' },
    },
    {
      num: '9',
      q: { en: 'Trace the exact path of a **male germ-cell in flowering plants** from anther up to egg fusion (`mention chemotropism!`).', hi: 'पुष्पी पादप में परागकोश से लेकर अंड कोशिका के साथ संलयन तक **नर युग्मक के मार्ग** का वर्णन कीजिए (`रसायनानुवर्तन सहित`)।' },
      a: { en: '`Anther releases pollen` -> Pollination lands grain on **Stigma** -> Grain sprouts a **pollen tube** growing downward through the **Style** guided by **chemotropic ovule signals** -> enters **Ovule** -> **Male germ-cell fuses with Female egg (`Fertilisation`)**!', hi: 'परागकोश से **परागकण** निकल परागण द्वारा **वर्तिकाग्र (`Stigma`)** पर पहुँचते हैं → रसायनानुवर्तन से **पराग नलिका** **वर्तिका (`Style`)** से होकर अंडाशय के **बीजांड** में प्रवेश कर **अंड कोशिका से संलयन (`निषेचन`)** कराती है!' },
    },
    {
      num: '10',
      q: { en: 'Why must a caterpillar (`larva`) of a butterfly eat leaves voraciously before turning into a winged adult inside a pupa?', hi: 'तितली के अंडे से निकला लार्वा (`इल्ली`) प्यूपा द्वारा वयस्क बनने से पहले लगातार पत्तियाँ खाकर तेजी से क्यों बढ़ता है?' },
      a: { en: 'Tiny externally laid butterfly eggs store minimal **yolk**, so the embryo hatches early as a feeding **larva** to gather massive protein/energy reserves needed for **metamorphosis** (`wing/adult construction`)!', hi: 'छोटे अंडे में **संचित पीतक (`Yolk`) अत्यंत कम** होता है, अतः भ्रूण जल्दी लार्वा बनकर बाहर से भरपूर भोजन इकट्ठा करता है ताकि कायांतरण द्वारा पंख-युक्त वयस्क बन सके!' },
    },
    {
      num: '11',
      q: { en: 'Classify Tomato (`टमाटर`), Wheat (`गेहूँ`) and Papaya (`पपीता`) by dominant pollination type (`ihsc1an Key Verified`).', hi: 'टमाटर, गेहूँ और पपीता को उनकी मुख्य परागण विधि (`स्व` या `पर-परागण`) के अनुसार वर्गीकृत कीजिए (`ihsc1an सत्यापित`)।' },
      a: { en: '• **Tomato (`टमाटर`)**: **==Self-pollination (`स्व-परागण`)==** (`bisexual flower`) • **Wheat (`गेहूँ`)**: **==Self-pollination (`स्व-परागण`)==** (`bisexual flower`) • **Papaya (`पपीता`)**: **==Cross-pollination (`पर-परागण`)==** (`strictly unisexual flowers on separate male & female trees!`).', hi: '• **टमाटर**: **स्व-परागण (`Self-pollination`)** (`उभयलिंगी पुष्प`) • **गेहूँ**: **स्व-परागण (`Self-pollination`)** • **पपीता**: **पर-परागण (`Cross-pollination`)** (`क्योंकि नर और मादा पुष्प अलग-अलग वृक्षों पर एकलिंगी होते हैं!`)।' },
    },
    {
      num: '12',
      q: { en: 'Describe the role of `(a) Testes`, `(b) Seminal vesicle & Prostate`, and `(c) Placenta` in human reproduction.', hi: 'मानव जनन में `(क) वृषण`, `(ख) शुक्राशय व प्रोस्टेट ग्रंथि`, तथा `(ग) अपरा (Placenta)` के कार्य लिखिए।' },
      a: { en: '`(a)` **Testes** produce sperm (`cooler scrotum`) + **testosterone**; `(b)` **Seminal vesicle & Prostate** add alkaline nutrient fluid making semen nourishing & easy to transport; `(c)` **Placenta** provides large blood-rich surface transferring O₂/glucose from mother to embryo and removing embryo CO₂/wastes!', hi: '`(क)` **वृषण** कम तापमान (`वृषणकोश`) पर शुक्राणु व **टेस्टोस्टेरोन** बनाते हैं; `(ख)` **शुक्राशय व प्रोस्टेट** स्राव शुक्राणुओं को पोषण व तरल गतिशीलता देते हैं; `(ग)` **अपरा (`Placenta`)** तश्तरीनुमा ऊतक द्वारा माँ के रक्त से भ्रूण को `O₂` व ग्लूकोज देता तथा अपशिष्ट हटाता है!' },
    },
    {
      num: '13',
      q: { en: 'A couple falsely blames the mother for giving birth to daughters only. Explain scientifically why this belief is completely wrong.', hi: 'एक दंपत्ति में केवल पुत्रियाँ जन्म लेने पर माता को दोष देना वैज्ञानिक रूप से पूर्णतः गलत क्यों है? `XX/XY` आरेख से समझाएँ।' },
      a: { en: 'All maternal eggs contain **ONLY an `X` chromosome (`XX`)**. Males (`XY`) produce half **`X`-sperm** and half **`Y`-sperm**. Fusion depends purely on **50:50 chance of WHICH father sperm enters (`X -> XX girl`, `Y -> XY boy`)** — mother plays zero deciding role!', hi: 'माता के सभी अंडाणुओं में सदैव **केवल `X` गुणसूत्र** होता है! पिता में `50%` शुक्राणु **`X`** व `50%` **`Y`** होते हैं (`XY`)। संतान का लिंग (`50:50` संयोग) **पूर्णतः पिता के शुक्राणु (`X` या `Y`)** पर निर्भर है — माता का इसमें कोई निर्धारण नहीं होता!' },
    },
  ],
  flashcards: [
    { front: { en: '4 Vegetative Horticultural Methods (`Act 11.1`) & Leaf Example?', hi: '4 बागवानी विधियाँ (`क्र. 11.1`) व पत्ती जनन पौधा?' }, back: { en: '`Cutting (45°–60° slant)`, `Grafting (Stock+Scion)`, `Layering`, `Shoot-tip Tissue Culture` (`virus-free`). Leaf-notch plantlets = **Bryophyllum**!', hi: '`कर्तन (45°–60°)`, `कलम (स्टॉक+सायन)`, `परतन`, `ऊतक संवर्धन` (`विषाणु-मुक्त`)। पत्ती कलिका पौधा = **ब्रायोफिलम (`अजूबा`)**!' } },
    { front: { en: 'Binary Plane Difference: `Amoeba` vs `Leishmania` vs `Plasmodium`?', hi: 'विखंडन भेद: `अमीबा` बनाम `लेस्मानिया` बनाम `प्लाज्मोडियम`?' }, back: { en: '`Amoeba` = **Any plane binary**; `Leishmania` = **Definite orientation** (`whip flagellum`); `Plasmodium` = **Multiple fission** (`many daughter cells simultaneously!`).', hi: '`अमीबा` = किसी भी तल द्विखंडन; `लेस्मानिया` = निश्चित कशाभ तल द्विखंडन; `प्लाज्मोडियम` = **बहुखंडन**!' } },
    { front: { en: 'Meiosis Chromosome Rule + `3`-Pair Bead Combos (`Act 11.4`)?', hi: 'अर्धसूत्री विभाजन नियम व `3` जोड़ी मनका सूत्र (`क्र. 11.4`)?' }, back: { en: 'Meiosis halves **`2n = 46 -> n = 23`** so zygote restores `46`; `3` contrasting pairs form **`2³ = 8`** combinations (`2ⁿ` general formula!).', hi: 'अर्धसूत्री गुणसूत्र आधे (`46→23`) कर युग्मनज को पुनः `46` रखता है; `3` जोड़ों से **`2³ = 8`** संयोजन (`2ⁿ`)!' } },
    { front: { en: 'Flower to Fruit Transformation (`Ovary`, `Ovule`, `Pollen Tube`)?', hi: 'निषेचन बाद पुष्प रूपांतरण (`अंडाशय, बीजांड, पराग नली`)?' }, back: { en: 'Pollen tube travels through **Style (`Chemotropism`)**; **Ovule -> Seed**; **Ovary -> Fruit**! Indian IVF-plant Pioneer: **Prof. P. Maheshwari**.', hi: 'पराग नली **वर्तिका (`रसायनानुवर्तन`)** से गुजरती है; **बीजांड → बीज**; **अंडाशय → फल**! जनक: **प्रो. पी. माहेश्वरी**!' } },
    { front: { en: 'Pollination Type: Tomato, Wheat vs Papaya & Wind vs Sunflower Counts?', hi: 'परागण प्रकार (`टमाटर, गेहूँ vs पपीता`) व तालिका 11.3 पराग संख्या?' }, back: { en: 'Tomato & Wheat = **Self**; Papaya = **Cross (`unisexual`)**! Wind (`Grass`): **`5–10 lakh` -> `50–200` seeds**; Insect (`Sunflower`): **`20–40k` -> `800–1000` seeds**!', hi: 'टमाटर/गेहूँ = **स्व**; पपीता = **पर**! वायु (`घास`): **`5–10 लाख` → `50–200` बीज**; कीट (`सूरजमुखी`): **`20–40k` → `800–1000` बीज**!' } },
    { front: { en: 'External vs Internal Animal Egg Counts (`Table 11.4`) & Larva Trigger?', hi: 'बाह्य/आंतरिक जंतु अंड संख्या (`तालिका 11.4`) व लार्वा कारण?' }, back: { en: 'Fish **`100–1000`**, Frog **`5k–50k`** (`tiny yolk -> larva + metamorphosis`, external predation!) vs Lizard `2–20`, Bird `1–15`, Mammals `1–2` (`high survival`).', hi: 'मछली `100–1000`, मेंढक `5k–50k` (`कम पीतक → लार्वा + कायांतरण`) vs छिपकली `2–20`, पक्षी `1–15`, स्तनधारी `1–2`!' } },
    { front: { en: 'Male Reproductive Key Facts (`Scrotum, Vas Deferens, Urethra`)?', hi: 'नर जनन मुख्य बिंदु (`वृषणकोश, शुक्रवाहिनी, मूत्रमार्ग`)?' }, back: { en: '**Scrotum keeps Testes `2–3°C` cooler** for sperm + Testosterone; **Vas deferens** cut in Vasectomy; **Urethra = common urine & sperm duct**!', hi: '**वृषणकोश `2–3°C` कम ताप** रखता है; नसबंदी में **शुक्रवाहिनी** कटती है; **मूत्रमार्ग** मूत्र व वीर्य का साझा मार्ग है!' } },
    { front: { en: 'Female Sites (`Ovary`, `Oviduct`, `Uterus`, `Placenta`) & IVF Pioneer?', hi: 'मादा अंग कार्य (`अंडाशय, डिंबवाहिनी, गर्भाशय, अपरा`) व `1978 IVF`?' }, back: { en: '`Ovary` -> Ovum/Oestrogen; **`Oviduct` -> Fertilisation!**; `Uterus` -> Implantation; **`Placenta` -> Blood nutrition**! 1978 Durga IVF: **Dr. S. Mukhopadhyay**.', hi: '`डिंबवाहिनी` → **निषेचन!**; `गर्भाशय` → रोपण; **`अपरा`** → पोषण! भारत प्रथम `1978 दुर्गा` IVF: **डॉ. सुभाष मुखोपाध्याय**!' } },
    { front: { en: '28-Day Menstrual Cycle Milestones & March 20 Start Example?', hi: '28-दिन रजोधर्म चरण व `20 मार्च` आरंभ उदाहरण?' }, back: { en: 'Days `1–5`: **Endometrium sheds**; **Day 14: Ovulation** (`March 20 start -> April 2 ovulation!`); Hygiene: change clean pad every **`4–6 hours`**!', hi: 'दिन `1–5`: अंतर्गर्भाशय-कला स्राव; **दिन 14: अंडोत्सर्ग (`20 मार्च → 2 अप्रैल!`)**; हर `4–6 घंटे` में पैड बदलें!' } },
    { front: { en: 'Which Contraceptive Blocks STIs + CDRI Lucknow Discovery?', hi: 'कौन-सा गर्भनिरोधक STI रोके व CDRI लखनऊ की खोज?' }, back: { en: '**Condom (`Mechanical barrier`)** ONLY blocks both sperm & STIs (`HIV, Gonorrhoea, Syphilis, Herpes`); **CDRI Lucknow** made **weekly non-steroidal pill (`Saheli`)**!', hi: '**कंडोम (`यांत्रिक अवरोध`)** एकमात्र STI व गर्भ दोनों रोके; **CDRI लखनऊ** ने **साप्ताहिक गैर-हार्मोन गोली (`सहेली`)** बनाई!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c9c11-1',
      examTag: 'RRB Tech 3 2024 (Shift 6)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): DNA Copying as the Basic Cellular Event in Reproduction',
      question: {
        en: 'In which of the following life processes is the creation of a **DNA copy** a basic cellular event?',
        hi: 'निम्नलिखित में से किस जीवन प्रक्रिया में **डीएनए (`DNA`) प्रतिलिपि का निर्माण** एक आधारभूत घटना है?',
      },
      options: {
        en: ['Excretion', 'Respiration', 'Reproduction', 'Circulation'],
        hi: ['मलोत्सर्जन', 'श्वसन', 'प्रजनन', 'परिसंचरण'],
      },
      correctIndex: 2,
      solution: {
        en: '**Reproduction (`जनन`)** relies on duplicating cellular DNA blueprints before cell division so inherited traits pass to offspring!',
        hi: 'कोशिका विभाजन से पूर्व **प्रजनन** में डीएनए की प्रतिकृति बनना आधारभूत घटना है जिससे लक्षण संतति में जाते हैं।',
      },
    },
    {
      id: 'pyq-c9c11-2',
      examTag: 'RRB Group D 2025 (Shift 48)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Core Principle of Asexual Reproduction',
      question: {
        en: 'Amoeba, yeast, and hydra can reproduce even when only ONE parent organism is present. Which conclusion does this suggest about **asexual reproduction**?',
        hi: 'अमीबा, यीस्ट और हाइड्रा केवल एक जनक जीव की उपस्थिति में भी जनन कर सकते हैं। इससे अलैंगिक प्रजनन के बारे में क्या निष्कर्ष निकलता है?',
      },
      options: {
        en: ['It requires seeds for reproduction.', 'Two parents are always necessary.', 'It produces only multicellular organisms.', 'It occurs without fusion of gametes.'],
        hi: ['जनन के लिए बीज की आवश्यकता होती है।', 'दो जनक सदैव आवश्यक होते हैं।', 'यह केवल बहुकोशिकीय जीवों को उत्पन्न करता है।', 'यह युग्मकों के संलयन के बिना होता है।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Asexual reproduction involves a single parent undergoing mitosis **without forming or fusing male and female gametes**.',
        hi: 'अलैंगिक जनन एक ही जनक द्वारा **युग्मकों के संलयन के बिना** संपन्न होता है।',
      },
    },
    {
      id: 'pyq-c9c11-3',
      examTag: 'RRB Tech 3 2024 (Shift 1)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Any-Plane Binary Fission in Amoeba',
      question: {
        en: 'The splitting of the two cells during binary fission can take place in **any plane**. Such pattern of fission is observed in which protozoan?',
        hi: 'विभाजन के दौरान कोशिका विभाजन **किसी भी तल** से हो सकता है। विखंडन का यह तरीका किस प्रोटोजोआ में देखा जाता है?',
      },
      options: {
        en: ['Leishmania', 'Hydra', 'Amoeba', 'Plasmodium'],
        hi: ['लेस्मानिया', 'हाइड्रा', 'अमीबा', 'प्लैज्मोडियम'],
      },
      correctIndex: 2,
      solution: {
        en: 'Irregular-shaped **Amoeba** splits into two cells across **any plane**, unlike flagellated *Leishmania*!',
        hi: 'अनियमित आकृति वाले **अमीबा** में द्विखंडन **किसी भी तल** से हो सकता है!',
      },
    },
    {
      id: 'pyq-c9c11-4',
      examTag: 'RRB Tech 3 2024 (Shift 15)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Longitudinal Binary Fission in Leishmania',
      question: {
        en: 'Which unicellular organism has a whip-like structure at one end of the cell and undergoes binary fission in a **definite orientation** in relation to these structures?',
        hi: 'किस एककोशिकीय जीव की कोशिका के एक सिरे पर चाबुक जैसी संरचना (`कशाभ`) होती है और उसमें द्विखंडन एक **निश्चित अभिविन्यास** में होता है?',
      },
      options: {
        en: ['Leishmania', 'Amoeba', 'Plasmodium', 'Yeast'],
        hi: ['लेस्मानिया', 'अमीबा', 'प्लैज्मोडियम', 'यीस्ट'],
      },
      correctIndex: 0,
      solution: {
        en: '**Leishmania** (`causative protozoan of Kala-azar`) has a whip-like anterior flagellum dictating a **strict longitudinal binary fission plane**.',
        hi: '**लेस्मानिया (`कालाजार`)** के एक सिरे पर चाबुक जैसे कशाभ होने से द्विखंडन निश्चित अनुदैर्ध्य दिशा में होता है।',
      },
    },
    {
      id: 'pyq-c9c11-5',
      examTag: 'RRB Tech 3 2024 (Shift 9)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Multiple Fission in Plasmodium',
      question: {
        en: 'Which single-celled organism divides into **many daughter cells simultaneously** by **multiple fission**?',
        hi: 'कौन-सा एककोशिक जीव **बहुखंडन** द्वारा एक साथ **अनेक संतति कोशिकाओं** में विभाजित हो जाता है?',
      },
      options: {
        en: ['Plasmodium', 'Yeast', 'Leishmania', 'Amoeba'],
        hi: ['प्लैज्मोडियम', 'यीस्ट', 'लेस्मानिया', 'अमीबा'],
      },
      correctIndex: 0,
      solution: {
        en: 'Malarial parasite **`Plasmodium`** multiplies rapidly inside host cells via **multiple fission**, releasing dozens of daughter cells at once!',
        hi: '**प्लैज्मोडियम (`मलेरिया परजीवी`)** एक साथ कई संतति कोशिकाओं में विभाजित होकर बहुखंडन दर्शाता है।',
      },
    },
    {
      id: 'pyq-c9c11-6',
      examTag: 'RRB Tech 3 2024 (Shift 16)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Fission Statement Elimination Check',
      question: {
        en: 'Which of the following statements about unicellular reproduction is **INCORRECT**?',
        hi: 'निम्नलिखित में से कौन-सा कथन **गलत (`INCORRECT`)** है?',
      },
      options: {
        en: [
          'Yeast can put out small buds that separate and grow further.',
          'Plasmodium divides into many daughter cells simultaneously by binary fission.',
          'Binary fission occurs in a definite orientation in Leishmania.',
          'In Amoeba, splitting of two cells can take place in any plane.',
        ],
        hi: [
          'यीस्ट कोशिका से छोटे मुकुल उभर कर अलग हो जाते हैं तथा स्वतंत्र वृद्धि करते हैं।',
          'प्लाज्मोडियम द्विखंडन द्वारा एक साथ कई संतति कोशिकाओं में विभाजित हो जाता है।',
          'लेस्मानिया में द्विखंडन एक निर्धारित तल में होता है।',
          'अमीबा में दो कोशिकाओं का विभाजन किसी भी तल में हो सकता है।',
        ],
      },
      correctIndex: 1,
      solution: {
        en: '`Plasmodium` divides simultaneously into many cells by **MULTIPLE fission**, NOT binary fission — Option B is false!',
        hi: 'प्लाज्मोडियम में **बहुखंडन (`Multiple fission`)** होता है, द्विखंडन नहीं — अतः विकल्प (B) गलत है!',
      },
    },
    {
      id: 'pyq-c9c11-7',
      examTag: 'RRB Tech 3 2024 (Shift 10)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Fragmentation in Multicellular Spirogyra',
      question: {
        en: '**Spirogyra**, a multi-cellular organism, simply breaks up into smaller pieces upon maturation and these fragments grow into new individuals. Such a mode is known as:',
        hi: 'एक बहुकोशिक जीव, **स्पाइरोगाइरा**, विकसित होकर छोटे टुकड़ों में खंडित हो जाता है और प्रत्येक खंड नए जीव में विकसित होता है। जनन की इस विधि को क्या कहते हैं?',
      },
      options: {
        en: ['Regeneration', 'Budding', 'Fragmentation', 'Binary fission'],
        hi: ['पुनर्जनन', 'मुकुलन', 'खंडन', 'द्विखंडन'],
      },
      correctIndex: 2,
      solution: {
        en: 'Simple filament **Spirogyra** breaks spontaneously upon maturation into viable halves/pieces — classic **Fragmentation (`खंडन`)**!',
        hi: 'सरल बहुकोशिकीय स्पाइरोगाइरा परिपक्व होकर टुकड़ों में टूट नया तंतु बनाता है — इसे **खंडन (`Fragmentation`)** कहते हैं।',
      },
    },
    {
      id: 'pyq-c9c11-8',
      examTag: 'RRB Tech 3 2024 (Shift 22)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Mechanism of Bud Formation in Hydra',
      question: {
        en: 'What is the cellular mechanism responsible for the formation of a **bud in Hydra** (`NCERT Act 11.2`)?',
        hi: '**हाइड्रा में कली (`मुकुल`) बनने** का मुख्य कोशिकीय कारण क्या है?',
      },
      options: {
        en: ['Cell cycle halt', 'Overgrowth of the whole body', 'Repeated cell division at one specific site', 'Random mutation'],
        hi: ['कोशिका चक्र रुकना', 'पूरे शरीर में अतिवृद्धि', 'एक विशिष्ट स्थान पर बार-बार कोशिका विभाजन', 'उत्परिवर्तन'],
      },
      correctIndex: 2,
      solution: {
        en: '**Hydra** uses regenerative cells to carry out **repeated mitotic divisions at one specific site**, forming an outgrowth (`bud`)!',
        hi: 'हाइड्रा पुनर्जनन कोशिकाओं का उपयोग कर **एक विशिष्ट स्थान पर बार-बार विभाजन** से मुकुल उभारता है!',
      },
    },
    {
      id: 'pyq-c9c11-9',
      examTag: 'RRB Tech 3 2024 (Shift 8)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Regeneration in Hydra & Planaria',
      question: {
        en: 'Animals like **Hydra and Planaria** can be cut into any number of pieces and each piece grows into a complete organism. This is known as:',
        hi: '**हाइड्रा तथा प्लेनेरिया** जैसे प्राणियों को यदि कई टुकड़ों में काट दिया जाए तो प्रत्येक टुकड़ा विकसित होकर पूर्ण जीव का निर्माण करता है। यह क्या कहलाता है?',
      },
      options: {
        en: ['Budding', 'Binary fission', 'Fragmentation', 'Regeneration'],
        hi: ['मुकुलन (`budding`)', 'द्विखंडन (`binary fission`)', 'खंडन (`fragmentation`)', 'पुनरुद्भवन (`regeneration`)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Specialized **regenerative cells** proliferate and differentiate into missing tissues from any cut piece of **Planaria / Hydra** (**Regeneration**)!',
        hi: 'विशिष्ट पुनरुद्भवन कोशिकाएँ विभाजित व विभेदित होकर कटे खंडों से पूर्ण हाइड्रा/प्लेनेरिया बनाती हैं — इसे **पुनर्जनन (`Regeneration`)** कहते हैं।',
      },
    },
    {
      id: 'pyq-c9c11-10',
      examTag: 'RRB Tech 3 2024 (Shifts 10 & 15)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Bryophyllum Leaf-Margin Vegetative Buds',
      question: {
        en: 'Buds produced in the notches along the **leaf margin of Bryophyllum** fall on the soil and develop into new plants. Such a mode is known as:',
        hi: '**ब्रायोफिलम** पत्ती के किनारे के खाँचों में उत्पन्न कलियाँ मृदा पर गिरकर नए पादपों में विकसित होती हैं। यह विधि क्या कहलाती है?',
      },
      options: {
        en: ['Budding', 'Fragmentation', 'Regeneration', 'Vegetative propagation'],
        hi: ['मुकुलन', 'खंडन', 'पुनर्जनन', 'कायिक प्रवर्धन'],
      },
      correctIndex: 3,
      solution: {
        en: 'Root/stem/leaf buds producing full clonal plants belong to **Vegetative propagation (`कायिक प्रवर्धन`)**!',
        hi: 'जड़, तना या **पत्ती की कलिकाओं** से नए पौधे बनना **कायिक प्रवर्धन** कहलाता है (`NCERT चित्र 11.1 ख`)।',
      },
    },
    {
      id: 'pyq-c9c11-11',
      examTag: 'RRB Group D 2025 (Shift 7)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1): Incorrect Statement on Vegetative Propagation',
      question: {
        en: 'Which of the following statements about **vegetative propagation** is **INCORRECT**?',
        hi: '**कायिक प्रवर्धन** के संदर्भ में निम्नलिखित में से कौन-सा कथन **गलत (`INCORRECT`)** है?',
      },
      options: {
        en: [
          'Only one parent is involved in the process.',
          'New plants arise from stems, roots, or leaves.',
          'New plants develop from seed-bearing structures.',
          'The offspring are genetically identical to the parent.',
        ],
        hi: [
          'इस प्रक्रम में केवल एक जनक सम्मिलित होता है।',
          'तनों, मूलों या पत्तियों से नए पौधे उत्पन्न होते हैं।',
          'बीज-धारक संरचनाओं से नए पादप विकसित होते हैं।',
          'संतति आनुवंशिक रूप से जनक के समान होते हैं।',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Vegetative propagation grows clones purely from **non-seed vegetative parts** (`stem, root, leaf`) — NEVER from **seed-bearing sexual structures**!',
        hi: 'कायिक प्रवर्धन जड़, तना व पत्तियों से होता है — **बीज या पुष्प धारक संरचनाओं से नहीं**!',
      },
    },
    {
      id: 'pyq-c9c11-12',
      examTag: 'RRB Tech 3 2024 (Shift 8)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.1–11.2): Seed-Only Propagated Papaya vs Clonal Crops',
      question: {
        en: 'Which plant species does **NOT** normally reproduce through vegetative propagation?',
        hi: 'निम्नलिखित में से पौधे की कौन-सी प्रजाति सामान्यतः **कायिक प्रवर्धन (`vegetative propagation`)** के माध्यम से प्रजनन नहीं करती है?',
      },
      options: {
        en: ['Sugarcane', 'Banana', 'Papaya', 'Rose'],
        hi: ['गन्ना', 'केला', 'पपीता', 'गुलाब'],
      },
      correctIndex: 2,
      solution: {
        en: 'Sugarcane, Banana & Rose (`Act 11.1 / tissue culture`) multiply vegetatively, whereas unisexual **Papaya (`cross-pollinated, Ex Q11`)** is grown commercially from **seeds**!',
        hi: 'गन्ना, केला व गुलाब कायिक विधियों से उगते हैं, जबकि **पपीता** पर-परागित बीजों से प्रजनन करता है (`अभ्यास Q11 में भी`)!',
      },
    },
    {
      id: 'pyq-c9c11-13',
      examTag: 'RRB Tech 3 2024 (Shifts 3 & 10)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Act 11.3): Spore Formation in Rhizopus (Bread Mould)',
      question: {
        en: '**Sporangia** (`tiny blob-on-a-stick structures`) contain cells or spores that eventually develop into new **Rhizopus** (`bread mould`) individuals. This asexual mode is known as:',
        hi: '**बीजाणुधानी (`Sporangia`)** में सूक्ष्म कोशिकाएँ होती हैं जो अंततः नए **राइजोपस (`ब्रेड मोल्ड`)** जीवों में विकसित हो जाती हैं। इसे क्या कहते हैं?',
      },
      options: {
        en: ['Vegetative propagation', 'Regeneration', 'Budding', 'Spore formation'],
        hi: ['कायिक प्रवर्धन', 'पुनर्जनन', 'मुकुलन', 'बीजाणु निर्माण'],
      },
      correctIndex: 3,
      solution: {
        en: '**Rhizopus** (`NCERT Act 11.3, 25–35°C`) produces resilient airborne microscopic reproductive units inside **sporangia** -> **Spore formation (`बीजाणु निर्माण`)**.',
        hi: '**राइजोपस** (`क्र. 11.3`) बीजाणुधानी में असंख्य बीजाणु उत्पन्न करता है जिसे **बीजाणु निर्माण / समासंघ** कहते हैं।',
      },
    },
    {
      id: 'pyq-c9c11-14',
      examTag: 'RRB Tech 3 2024 (Shift 19)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2 & Fig 11.6): Meiosis Halving Chromosome Count',
      question: {
        en: 'The number of **chromosomes becomes half (`46 → 23`)** in reproductive daughter cells (`gametes`) by the process of:',
        hi: 'जनन संतति कोशिका (`युग्मक`) में **गुणसूत्रों की संख्या किस प्रक्रिया द्वारा आधी (`46 → 23`)** हो जाती है?',
      },
      options: {
        en: ['Mitosis', 'Binary fission', 'Amitosis', 'Meiosis'],
        hi: ['सूत्री विभाजन (`mitosis`)', 'द्विखंडन (`binary fission`)', 'असूत्री विभाजन (`amitosis`)', 'अर्धसूत्री विभाजन (`meiosis`)'],
      },
      correctIndex: 3,
      solution: {
        en: '**Meiosis (`अर्धसूत्री विभाजन`, Sec 11.2)** halves diploid chromosome number (`46 -> 23`), keeping species chromosome counts stable after fertilisation!',
        hi: '**अर्धसूत्री विभाजन (`Meiosis`)** गुणसूत्रों को आधा (`23`) कर निषेचन के बाद पुनः ठीक `46` बनाए रखता है!',
      },
    },
    {
      id: 'pyq-c9c11-15',
      examTag: 'RRB Tech 3 2024 (Shifts 7 & 17)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2 & Act 11.4): Role of Variation in Species Survival',
      question: {
        en: 'Which biological outcome created by sexual reproduction (`meiosis`) plays the key role in **long-term survival of species** over time?',
        hi: 'लैंगिक जनन (`अर्धसूत्री`) से उत्पन्न क्या **समय के साथ प्रजातियों के दीर्घकालिक अस्तित्व** में महत्वपूर्ण भूमिका निभाता है?',
      },
      options: {
        en: ['Budding', 'Population spike only', 'Variation', 'Fragmentation'],
        hi: ['मुकुलन (`Budding`)', 'केवल जनसंख्या वृद्धि', 'विभिन्नता (`Variation`)', 'खंडन'],
      },
      correctIndex: 2,
      solution: {
        en: '**Genetic Variation (`विभिन्नता`, Ex Q3 & Act 11.4)** equips some variants within a population to endure heat waves, diseases, or habitat shifts!',
        hi: '**आनुवंशिक विभिन्नता** बदलते पर्यावरण या रोगों में प्रजाति के कम-से-कम कुछ सदस्यों को जीवित रहने योग्य बनाती है!',
      },
    },
    {
      id: 'pyq-c9c11-16',
      examTag: 'RRB NTPC UG 2025 (Shift 12)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2): Reproductive Organ in Angiosperms',
      question: {
        en: 'Which of the following parts of a plant is primarily responsible for **sexual reproduction in angiosperms (`पुष्पी पादप`)**?',
        hi: 'पादप का निम्नलिखित में से कौन-सा भाग **आवृतबीजी (`एंजियोस्पर्म`) में लैंगिक प्रजनन** के लिए मुख्य रूप से उत्तरदायी है?',
      },
      options: {
        en: ['Stem', 'Leaf', 'Flower', 'Root'],
        hi: ['तना', 'पर्ण', 'पुष्प', 'मूल'],
      },
      correctIndex: 2,
      solution: {
        en: 'The **Flower (`पुष्प`)** houses both male **Androecium (`stamen`)** and female **Gynoecium (`pistil/carpel`)** reproductive whorls (`NTPC Shifts 6 & 33`).',
        hi: '**पुष्प (`Flower`)** में ही नर (`पुमंग/पुंकेसर`) व मादा (`जायांग/स्त्रीकेसर`) जनन अंग स्थित होते हैं।',
      },
    },
    {
      id: 'pyq-c9c11-17',
      examTag: 'RRB Tech 3 2024 (Shift 4)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2 & Ex Q11): Self-Pollination vs Cross-Pollination',
      question: {
        en: 'Pollen needs to be transferred from the stamen to the stigma. If this transfer of pollen occurs **in the same flower** (`like pea/wheat`), the phenomenon is known as:',
        hi: 'परागकोश से वर्तिकाग्र तक पराग स्थानांतरण यदि **एक ही पुष्प के भीतर** हो (`जैसे मटर/टमाटर/गेहूँ`), तो इस घटना को क्या कहते हैं?',
      },
      options: {
        en: ['Fertilisation', 'Cross-pollination', 'Spore formation', 'Self-pollination'],
        hi: ['निषेचन', 'पर-परागण', 'बीजाणु निर्माण', 'स्व-परागण'],
      },
      correctIndex: 3,
      solution: {
        en: 'Transfer within the same flower (`or another flower of the same plant`) = **Self-pollination**; transfer to a different plant (`like Papaya`) = **Cross-pollination**.',
        hi: 'एक ही पुष्प में पराग पहुँचना **स्व-परागण (`Self-pollination`)** जबकि दूसरे पौधे के पुष्प पर पहुँचना **पर-परागण** कहलाता है।',
      },
    },
    {
      id: 'pyq-c9c11-18',
      examTag: 'RRB Group D 2025 (Shift 9)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2): Analogy Distinguishing Pollination vs Fertilisation',
      question: {
        en: 'Complete the analogy: **Pollination : Transfer of Pollen :: Fertilisation : ______________________**.',
        hi: 'समरूपता पूर्ण कीजिए: **परागण : परागकण स्थानांतरण :: निषेचन : ________________**।',
      },
      options: {
        en: ['Growth of stem', 'Ripening of fruit', 'Absorption of water', 'Fusion of gametes'],
        hi: ['तने की वृद्धि', 'फलों का पकना', 'जल का अवशोषण', 'युग्मकों का संलयन'],
      },
      correctIndex: 3,
      solution: {
        en: 'Pollination only moves pollen externally onto the stigma; **Fertilisation (`निषेचन`)** is the actual internal **fusion of male and female gametes** to form a zygote!',
        hi: 'परागण केवल परागकण पहुँचाना है, जबकि **निषेचन (`Fertilisation`)** नर व मादा **युग्मकों के वास्तविक संलयन** को कहते हैं।',
      },
    },
    {
      id: 'pyq-c9c11-19',
      examTag: 'RRB Tech 3 2024 (Shifts 21 & 23)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2): Chemotropism & Style Route of Pollen Tube',
      question: {
        en: 'If roots grow downwards by geotropism, growth of **pollen tubes downwards through the style towards ovules** occurs due to ________.',
        hi: 'यदि जड़ें गुरुत्वानुवर्तन से नीचे बढ़ती हैं, तो **वर्तिका से होकर बीजांड की ओर पराग नलिकाओं की वृद्धि** ________ के कारण होती है।',
      },
      options: {
        en: ['Phototropism', 'Chemotropism', 'Geotropism', 'Hydrotropism'],
        hi: ['प्रकाशानुवर्तन', 'रसायनानुवर्तन (`chemotropism`)', 'गुरुत्वानुवर्तन', 'जलानुवर्तन'],
      },
      correctIndex: 1,
      solution: {
        en: 'Chemical cues secreted by ovule tissues guide the pollen tube down the **style** (`Tech 3 Shifts 21 & 23`) — classic **Chemotropism**!',
        hi: 'बीजांड द्वारा स्रावित रसायनों के आकर्षण से पराग नलिका वर्तिका से नीचे बढ़ती है — **रसायनानुवर्तन (`Chemotropism`)**!',
      },
    },
    {
      id: 'pyq-c9c11-20',
      examTag: 'RRB Tech 3 2024 (Shifts 11, 17 & 23)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.2 & Ex Q2): Post-Fertilisation Ovule → Seed Transformation',
      question: {
        en: 'After fertilisation in flowering plants, which floral part develops a tough seed coat and turns into a **Seed** (`while Ovary ripens into a Fruit`)?',
        hi: 'निषेचन की प्रक्रिया के बाद पुष्प का कौन-सा भाग कठोर आवरण विकसित कर **बीज (`Seed`)** में रूपांतरित होता है (`जबकि अंडाशय फल बनता है`)?',
      },
      options: {
        en: ['Ovule', 'Sepal', 'Style', 'Stigma'],
        hi: ['बीजांड (`Ovule`)', 'बाह्यदल (`Sepal`)', 'वर्तिका (`Style`)', 'वर्तिकाग्र (`Stigma`)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Repeatedly tested NCERT golden rule (`Ex Q2`): **`Ovule -> Seed`** (`holding embryo`), while surrounding **`Ovary -> Fruit`**!',
        hi: 'बार-बार पूछा गया नियम (`अभ्यास Q2`): निषेचन के बाद **`बीजांड → बीज`** तथा **`अंडाशय → फल`** में विकसित होता है!',
      },
    },
    {
      id: 'pyq-c9c11-21',
      examTag: 'RRB Tech 3 2024 (Shifts 6 & 16)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.5): Scrotum Temperature Requirement for Sperm Formation',
      question: {
        en: 'Why are **testes** located **outside the abdominal cavity in the scrotum** (`plus secrete testosterone`)?',
        hi: '**वृषण (`Testes`)** उदर गुहा के बाहर **वृषणकोश (`Scrotum`)** में क्यों स्थित होते हैं?',
      },
      options: {
        en: [
          'Sperm formation requires normal `37°C` body temperature',
          'Sperm formation requires higher temperature than body temperature',
          'To store urine alongside sperms inside scrotum',
          'Sperm formation requires lower temperature than the normal body temperature',
        ],
        hi: [
          'शुक्राणु निर्माण हेतु ठीक `37°C` शरीर ताप चाहिए',
          'शुक्राणु निर्माण हेतु सामान्य से अधिक तापमान चाहिए',
          'वृषणकोश में मूत्र संग्रह करने हेतु',
          'शुक्राणु निर्माण के लिए शरीर के सामान्य तापमान से कम तापमान आवश्यक है',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Sperm generation needs **`2–3°C` below normal `37°C` abdominal heat** (`plus testes secrete male hormone Testosterone`)!',
        hi: 'शुक्राणु निर्माण हेतु शरीर के सामान्य तापमान से `2–3°C` कम तापमान चाहिए; साथ ही वृषण टेस्टोस्टेरोन हार्मोन स्रावित करते हैं!',
      },
    },
    {
      id: 'pyq-c9c11-22',
      examTag: 'RRB Tech 3 2024 (Shifts 13, 20 & 23)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.5): Urethra, Vas Deferens & Female Tract Match',
      question: {
        en: 'Which male structure forms a **common passage for both sperms and urine** (`whereas Vas deferens only carries sperm and gets cut in Vasectomy`)?',
        hi: 'पुरुषों में निम्नलिखित में से कौन **शुक्राणुओं और मूत्र दोनों के लिए एक साझा मार्ग (`Common passage`)** बनाता है?',
      },
      options: {
        en: ['Urethra', 'Urinary bladder', 'Vas deferens', 'Scrotum'],
        hi: ['मूत्रमार्ग (`Urethra`)', 'मूत्राशय (`Urinary bladder`)', 'शुक्रवाहिनी (`Vas deferens`)', 'वृषणकोश (`Scrotum`)'],
      },
      correctIndex: 0,
      solution: {
        en: '**Urethra (`मूत्रमार्ग`)** conveys both urine and semen sequentially, whereas **Vas deferens** transports only sperm (`blocked in male vasectomy`), and female **Oviduct/Uterus/Placenta** handle fertilisation/implantation/nutrition!',
        hi: '**मूत्रमार्ग (`Urethra`)** नर में मूत्र व वीर्य दोनों का साझा मार्ग है (`जबकि शुक्रवाहिनी केवल शुक्राणु ले जाती है` — `Tech 3 Shifts 13, 23`)!',
      },
    },
    {
      id: 'pyq-c9c11-23',
      examTag: 'RRB Group D 2025 (Shift 5) + Tech 3',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.5): 28-Day Menstrual Cycle & Endometrium Shedding',
      question: {
        en: 'A woman experiences heavy and prolonged menstrual bleeding; her doctor suspects an **endometrium** issue. Which physiological process is most directly affected (`while Oestrogen regulates the cycle`)?',
        hi: 'एक महिला को मासिक धर्म में अत्यधिक रक्तस्राव होता है और डॉक्टर **अंतर्गर्भाशय-कला (`endometrium`)** की समस्या बताता है। कौन-सी प्रक्रिया प्रत्यक्ष रूप से प्रभावित है?',
      },
      options: {
        en: [
          'Decreased ovarian hormone synthesis only',
          'Excessive shedding of endometrial tissue',
          'Reduced blood vessel formation only',
          'Complete absence of oestrogen',
        ],
        hi: [
          'केवल अंडाशय हार्मोन उत्पादन में कमी',
          'अंतर्गर्भाशय-कला ऊतक (`endometrium`) का अत्यधिक झड़ना',
          'केवल रक्त वाहिका निर्माण रुकना',
          'एस्ट्रोजन की पूर्ण अनुपस्थिति',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Menstrual bleeding occurs during **Days `1–5`** when the blood-rich **endometrium lining of the uterus breaks down and sheds** (`regulated by Oestrogen` — `Tech 3 Shift 5`).',
        hi: 'मासिक धर्म के दिन `1–5` में गर्भाशय की **अंतर्गर्भाशय-कला (`Endometrium`)** के टूटने-झड़ने से रक्तस्राव होता है (`एस्ट्रोजन द्वारा नियंत्रित`)!',
      },
    },
    {
      id: 'pyq-c9c11-24',
      examTag: 'RRB Tech 3 2024 (Shift 17)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 11 (Sec 11.5.4): Contraceptive Mode Matching & STI Safety',
      question: {
        en: 'Which one of the following contraceptive options is **correctly paired** according to its mode of action?',
        hi: 'निम्नलिखित में से कौन-सा गर्भनिरोधक विकल्प उसकी **कार्य-प्रणाली के अनुसार सही युग्मित (`Correctly paired`)** है?',
      },
      options: {
        en: [
          'Condom – Mechanical barrier',
          'Copper-T – Hormonal imbalance',
          'Tubectomy – Chemical barrier',
          'Contraceptive pills – Mechanical uterine device',
        ],
        hi: [
          'कंडोम – यांत्रिक प्रतिरोधक (`Mechanical barrier`)',
          'कॉपर-टी – हार्मोन असंतुलन',
          'नलिका उच्छेदन (`Tubectomy`) – रासायनिक प्रतिरोधक',
          'गर्भनिरोधक गोलियाँ – गर्भाशयी यांत्रिक युक्ति',
        ],
      },
      correctIndex: 0,
      solution: {
        en: '**Condom = Mechanical barrier** (`also blocks STIs!`); Copper-T = intrauterine device (`non-hormonal physical/copper ion interference`); Tubectomy = surgical closure of oviducts; Oral pills = physiological/hormonal (`or CDRI non-steroidal`).',
        hi: '**कंडोम – यांत्रिक प्रतिरोधक** सही युग्म है (`यही STI रोगों से भी बचाता है!`) — कॉपर-T IUD है व ट्यूबेक्टॉमी शल्य विधि है!',
      },
    },
  ],
};
