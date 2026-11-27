/**
 * Class 10 NCERT Science (2026–27 Edition — jhsc108.pdf, Pages 141–147) + Railway CBT Deep-Dive
 * Chapter 8: Heredity (आनुवंशिकता) — Gold Standard v3 (Genetics & Inheritance Master!)
 * Complete Coverage: 8.1 Variation Accumulation (`Fig 8.1 asexual vs sexual, Sugarcane uniform vs Human diverse`) ->
 * 8.2.1 Inherited Traits & Act 8.1 (`Free vs Attached Earlobes`) ->
 * 8.2.2 Mendel’s Laws (`1822–1884`, Monohybrid TT×tt -> F1 All Tt -> F2 3:1 / Act 8.2 1:2:1, Dominant Tall/Round/Violet vs Recessive Short/Wrinkled/White, Dihybrid Fig 8.5 315:108:101:32 = 9:3:3:1 Independent Assortment) ->
 * 8.2.3 Gene -> Enzyme -> Hormone -> Trait Height & Separate Chromosomes + Meiosis (`2n→n→2n`) ->
 * 8.2.4 Sex Determination (`Fig 8.6`: Reptiles Incubation Temp, Sex-Changing Snail, Human 22 Autosome pairs + 1 XX/XY Sex pair -> Father’s X/Y chromosome decides 50:50).
 * All 2 Activities (`8.1–8.2`), 6 In-Text Qs, 4 Solved Exercises verified vs jhsc1an (`1.c TtWW`), 24 Pure RRB Genetics PYQs.
 */

export const C10_CH8_HEREDITY_DATA = {
  id: 'c10-bio-ch8',
  classId: 'class10',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 8,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 8: Heredity (CBT Edition)',
  blueprintSvgKey: 'c10-ch8-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Mendel’s Monohybrid (`3:1` & `1:2:1`), Dominant/Recessive Traits & Dihybrid (`9:3:3:1`)', hi: 'मेंडल के एकसंकर (`3:1 / 1:2:1`), प्रभावी-अप्रभावी व द्विसंकर (`9:3:3:1`) नियम' }, pct: 38 },
    { label: { en: 'Human Genetic Sex Determination (`22+1 Pairs, XX vs XY`, Father Decides) & Snails/Reptiles', hi: 'मानव लिंग निर्धारण (`22+1 जोड़े, पिता X/Y से 50:50`), घोंघा व सरीसृप ताप' }, pct: 26 },
    { label: { en: 'DNA -> Gene -> Enzyme -> Hormone Expression, Independent Chromosomes & Meiosis', hi: 'जीन-प्रोटीन अभिव्यक्ति, स्वतंत्र गुणसूत्र व अर्द्धसूत्री विभाजन (`Meiosis`)' }, pct: 22 },
    { label: { en: 'Variation Accumulation (`Asexual Sugarcane vs Sexual`), Heat Survival & Act 8.1 Earlobes', hi: 'विभिन्नता संचयन (`गन्ना बनाम मानव`), उष्ण-जीवाणु व क्र. 8.1 कर्णपालि' }, pct: 14 },
  ],
  title: {
    en: 'Chapter 8: Heredity',
    hi: 'अध्याय 8: आनुवंशिकता',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Mendel’s Pea Crosses (3:1, 1:2:1, 9:3:3:1), Gene→Enzyme→Height, Chromosomes & Human XX/XY Sex Determination',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • मेंडल के मटर प्रयोग, प्रभावी-अप्रभावी नियम, स्वतंत्र वंशागति, जीन-एंजाइम व मानव लिंग निर्धारण (`XX/XY`)',
  },
  metrics: {
    pages: 7,
    activities: 2,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 4,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-bio-ch8/hero-heredity.webp',
    caption: {
      en: 'Heredity Concept Bench: DNA & X/Y Chromosomes (`Sec 8.2.3–8.2.4`), Mendel’s Tall/Dwarf Garden Peas & Round Yellow/Wrinkled Green Seeds (`Fig 8.3–8.5`), Cross-Pollination & 3:1 Phenotypic Inheritance Grid.',
      hi: 'आनुवंशिकता स्टूडियो: DNA व X/Y गुणसूत्र (`भाग 8.2.3–8.2.4`), मेंडल के लंबे/बौने मटर व गोल/झुर्रीदार बीज (`चित्र 8.3–8.5`), परपरागण एवं 3:1 वंशागति मॉडल।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Variation Accumulation (`8.1`)**: Asexual plants (`like Sugarcane field`, Fig 8.1) show tiny DNA-copy variations; **sexual reproduction generates maximum variations**. Earlier arising trait spreads to wider % of an asexual population (**In-Text p.142 Q1**: `60% Trait B` arose earlier than `10% Trait A`!). **Act 8.1**: Earlobes (`Free vs Attached`) are inherited variants.',
      hi: '**विभिन्नता संचयन (`8.1`)**: अलैंगिक गन्ने के खेत में न्यूनतम विभिन्नता, पर **लैंगिक जनन में अधिकतम**! अलैंगिक समष्टि में अधिक प्रतिशत (`60% लक्षण B`) वाला लक्षण `10% लक्षण A` से **पहले उत्पन्न हुआ** होगा (`पृ. 142 Q1`)! **क्र. 8.1**: स्वतंत्र व जुड़ी कर्णपालि मानव समष्टि के वंशागत परिवर्त हैं।',
    },
    {
      en: '**Mendel’s Contrasting Peas (`8.2.2`, 1822–1884)**: **Dominant traits (`express even in 1 copy`)**: **Tall plant (`T`), Round seed (`R`), Yellow seed (`Y`), Violet flower (`W`)**! **Recessive (`need 2 identical copies`)**: **Short (`t`), Wrinkled (`r`), Green (`y`), White (`w`)**! Monohybrid **F1**: **ALL Tall `Tt`** (`NO medium blends!`). **F2**: **3 Tall : 1 Short (`Phenotype`)** & **1 TT : 2 Tt : 1 tt (`Genotype`, Act 8.2)**! **Dihybrid (`556 seeds`, Fig 8.5)**: **315:108:101:32 = 9:3:3:1** (`proving traits inherit INDEPENDENTLY!`).',
      hi: '**मेंडल के मटर नियम (`8.2.2`)**: **प्रभावी लक्षण**: **लंबा पौधा (`T`), गोल बीज (`R`), पीला बीज (`Y`), बैंगनी फूल (`W`)** | **अप्रभावी**: **बौना (`t`), झुर्रीदार (`r`), हरा (`y`), सफेद (`w`)**! एकसंकर **F1**: **सभी लंबे (`Tt`)** (`कोई मिश्रित मध्य ऊँचाई नहीं`)! **F2**: **3:1 दृश्य** व **1 TT : 2 Tt : 1 tt जीनी**! द्विसंकर (**556 बीज, चित्र 8.5**): **9:3:3:1** (`स्वतंत्र वंशागति`)!',
    },
    {
      en: '**Genes -> Enzymes -> Height & Chromosomes (`8.2.3`)**: **Gene** = section of DNA encoding **one Protein**. Efficient enzyme -> plenty plant hormone -> **Tall plant** (`gene mutation reduces enzyme efficiency -> less hormone -> **Dwarf**`!). Separate **Chromosomes** (`NOT one single DNA chain`) let pairs segregate via **Meiosis** (`gamete carries 1 set `n` -> Zygote restores 2 sets `2n` = 46`, p.145 & Ex Q4)!',
      hi: '**जीन अभिव्यक्ति व गुणसूत्र (`8.2.3`)**: किसी प्रोटीन संश्लेषण का DNA खंड **जीन (`Gene`)** है। दक्ष एंजाइम → पर्याप्त हार्मोन → **लंबा पौधा**; जीन परिवर्तन से कम दक्ष एंजाइम → कम हार्मोन → **बौना पौधा**! जीन सेट स्वतंत्र **गुणसूत्रों** पर बँटे हैं; **अर्द्धसूत्री विभाजन** से युग्मक में 1 सेट व युग्मनज में पुनः `46` गुणसूत्र स्थिर रहते हैं (`अभ्यास Q4`)!',
    },
    {
      en: '**Sex Determination (`8.2.4`, Fig 8.6)**: **Non-genetic**: Some **reptiles (`egg incubation temperature`)**; **Snails (`can change sex` — Tech Shift 15!)**. **Humans (`Genetically determined`)**: **22 autosome pairs + 1 sex pair (`Tech Shift 9`)**: Female **`XX` (`perfect pair`)** | Male **`XY` (`smaller Y`)**. ALL children inherit **`X` from mother**; **ONLY father’s chromosome decides sex (`X → Girl 50%`, `Y → Boy 50%`)**!',
      hi: '**लिंग निर्धारण (`8.2.4`, चित्र 8.6)**: **गैर-आनुवंशिक**: कुछ सरीसृप (**अंड ऊष्मायन ताप**) व **घोंघा (`अपना लिंग बदल सकता है` — Tech Shift 15!)**। **मानव (`आनुवंशिक`)**: **`22` अलिंग जोड़े + `1` लिंग जोड़ा (`मादा XX, नर XY`)**! सभी संतान को माँ से **`X`** मिलता है — **केवल पिता के गुणसूत्र से तय (`पिता X → लड़की 50%`, `पिता Y → लड़का 50%`)**!',
    },
  ],
  sections: [
    {
      id: 'variation-earlobes-mendel-laws',
      number: '8.1–8.2.2',
      flowDiagramKey: 'c10-ch8-blueprint-mindmap',
      diagramKey: 'c10-ch8-mendel-crosses-diagram',
      title: {
        en: 'Variation Accumulation (`Fig 8.1`), Free vs Attached Earlobes (`Act 8.1`) & Mendel’s Monohybrid / Dihybrid Inheritance (`Fig 8.3–8.5`)',
        hi: 'जनन में विभिन्नता संचयन (`चित्र 8.1`), कर्णपालि (`क्र. 8.1`) एवं मेंडल के एकसंकर व द्विसंकर वंशागति नियम (`चित्र 8.3–8.5`)',
      },
      summaryTag: {
        en: 'NCERT Pages 141–144 • Sugarcane Asexual Clones, Mendel Bio Box (1822–1884), F1 Tt, F2 3:1 / 1:2:1 & 556 Seeds 9:3:3:1',
        hi: 'NCERT पृ. 141–144 • गन्ना बनाम मानव, मेंडल (1822–1884), 3:1 व 1:2:1 अनुपात तथा 556 बीजों का 9:3:3:1 द्विसंकर क्रॉस',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Why Sex Adds More Variations Than Sugarcane Clones (`8.1`) + Activity 8.1 (`Earlobes`) + In-Text `10% vs 60%` Rule',
            hi: '1. विभिन्नता का संचयन (`8.1`), `10% बनाम 60%` लक्षण आयु नियम व क्रियाकलाप 8.1 (`स्वतंत्र/जुड़ी कर्णपालि`)',
          },
          conceptStory: {
            en: 'If we observe a field of vegetatively grown **Sugarcane (`गन्ने का खेत`, p.141)**, individual plants look nearly identical (`only small variations from DNA copying inaccuracies`, Fig 8.1). In contrast, **sexual reproduction generates maximum successful variations**, clearly visible across human populations (**==Activity 8.1 Fig 8.2: Free vs Attached Earlobes==** — lower ear lobule hanging free vs fused directly to head side!).\n• **Which Asexual Trait Arose Earlier? (`In-Text p.142 Q1`)**: If Trait A appears in `10%` of an asexually reproducing species and Trait B in `60%`, **==Trait B MUST have arisen earlier==** (`because asexual organisms transmit existing traits faithfully generation after generation, accumulating wider population share over longer time`)!\n• **Both Parents Contribute Equally (`8.2.2`)**: In humans, **BOTH mother and father transfer equal amounts of genetic DNA** to the child -> every trait holds **TWO versions (`alleles`) per offspring**, one from each parent!',
            hi: 'गन्ने के खेत में सभी पौधे लगभग समरूप दिखते हैं क्योंकि अलैंगिक प्रजनन में केवल DNA प्रतिकृति की न्यूनतम त्रुटियों से सूक्ष्म अंतर आता है (`चित्र 8.1`), जबकि **लैंगिक जनन में अधिकतम सफल विभिन्नताएँ** उत्पन्न होती हैं (जैसे **==क्रियाकलाप 8.1 चित्र 8.2: मानव में स्वतंत्र बनाम जुड़ी कर्णपालि==**)! \n• **अचूक लॉजिक (`पृ. 142 प्रश्‍न 1`)**: यदि अलैंगिक समष्टि में लक्षण A `10%` सदस्यों में और लक्षण B `60%` जीवों में है, तो **==लक्षण B पहले उत्पन्न हुआ होगा==** क्योंकि अधिक पीढ़ियों तक वंशागत होने वाला गुण अधिक आबादी में फैलता है!\n• **दोनों जनकों का समान योगदान (`8.2.2`)**: संतान को **माता एवं पिता दोनों से बराबर मात्रा में DNA** मिलता है — अतः प्रत्येक लक्षण के लिए संतान में **दो विकल्प (`प्रतिकृतियाँ`)** होते हैं।',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch8/real/sugarcane-clone-variation.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch8/real/rosalind-franklin-dna.webp',
            title: { en: 'Real Biology Pair (`Sec 8.1`): Low-Variation Asexual Sugarcane Clone & Microscope DNA Heritage', hi: 'असली विज्ञान जोड़ी (`भाग 8.1`): अलैंगिक गन्ने का पौधा (`न्यूनतम विभिन्नता`) व आनुवंशिक DNA अनुसंधान' },
            caption: {
              en: 'Left (`NCERT p.141`): Vegetatively propagated Saccharum sugarcane shows tiny DNA-copy variation vs high diversity in sexually reproducing populations. Right: Microscopic investigation of genetic molecules carrying protein-coding hereditary instructions.',
              hi: 'बायाँ (`NCERT पृ. 141`): गन्ने के खेत में न्यूनतम विभिन्नता बनाम लैंगिक जनन की व्यापक विविधता। दायाँ: वंशागति की सूचना वाहक DNA अणुओं का प्रयोगशाला अध्ययन।',
            },
          },
          inlinePyqIds: ['pyq-b8-3', 'pyq-b8-5', 'pyq-b8-6', 'pyq-b8-23'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Gregor Johann Mendel (`1822–1884`), Contrasting Garden Peas & Monohybrid (`3:1 / 1:2:1`) vs Dihybrid (`9:3:3:1`) Crosses (`Fig 8.3–8.5`)',
            hi: '2. ग्रेगर जॉन मेंडल (`1822–1884`), मटर के विपर्यासी लक्षण, एकसंकर (`3:1` व `1:2:1`) व द्विसंकर (`9:3:3:1`, `556 बीज`) प्रयोग',
          },
          conceptStory: {
            en: '**Gregor Johann Mendel (`1822–1884`, p.142 Box)** — failed his teaching certificate exam, returned to monastery & fused **science + mathematics** by tracking exact counts across every single garden pea plant (*Pisum sativum*)! Memorise his contrasting visible traits (**Tech 2024 Shifts 3, 6, 21 PYQs**):\n  - **==Dominant Traits (`express with even 1 copy`)==**: **Tall stem (`T`)**, **Round seeds (`R`)**, **Yellow seeds (`Y`)**, **Violet flowers (`W`)**!\n  - **==Recessive Traits (`need BOTH copies homozygous`)==**: **Short/Dwarf stem (`t`)**, **Wrinkled seeds (`r`)**, **Green seeds (`y`)**, **White flowers (`w`)**!\n• **Monohybrid Cross (`Fig 8.3`)**: Pure **Tall (`TT`) × Dwarf (`tt`)** -> **F1 Generation = 100% Tall (`Tt`)** (`NO medium height plants!`). Self-pollinating `F1 × F1` (`Tt × Tt`) -> **F2 Phenotypic Ratio = `3 Tall : 1 Short`** (`75% : 25%`), and **Genotypic Ratio (`Activity 8.2`) = `1 TT : 2 Tt : 1 tt`** (`1 pure tall : 2 hybrid tall : 1 dwarf` — `why a single `T` gives Tallness while `tt` needs two copies for dwarfism!`).\n• **Dihybrid Cross (`Fig 8.4–8.5`)**: **Round Yellow (`RRYY`) × Wrinkled Green (`rryy`)** -> F1 = All Round Yellow (`RrYy`) -> F2 (`556 total seeds!`): **`315 Round Yellow : 108 Round Green : 101 Wrinkled Yellow : 32 Wrinkled Green`** = **`9 : 3 : 3 : 1`**! Notice **new recombinant combinations (`Round Green 108` & `Wrinkled Yellow 101`)** prove two contrasting traits **inherit INDEPENDENTLY (`Law of Independent Assortment`)**!',
            hi: '**ग्रेगर जॉन मेंडल (`1822–1884`, पृ. 142 बॉक्स)**: अध्यापन सर्टिफिकेट परीक्षा में असफल होने के बाद भी मठ में मटर के पौधों पर **विज्ञान + गणित (`हर पीढ़ी के प्रत्येक पौधे की गणना`)** से आनुवंशिकी की नींव रखी!\n  - **==प्रभावी लक्षण (`एक प्रति पर्याप्त`)==**: **लंबा पौधा (`T`), गोल बीज (`R`), पीला बीज (`Y`), बैंगनी पुष्प (`W`)** (`Tech Shifts 3, 6, 21 PYQs`)!\n  - **==अप्रभावी लक्षण (`दोनों प्रतियाँ आवश्यक`)==**: **बौना पौधा (`t`), झुर्रीदार बीज (`r`), हरा बीज (`y`), सफेद पुष्प (`w`)**!\n• **एकसंकर संकरण (`चित्र 8.3`)**: शुद्ध लंबा (`TT`) × शुद्ध बौना (`tt`) → **F1: सभी पौधे लंबे (`Tt`)** (`मिश्रित मध्य ऊँचाई नहीं!`)। `F1` स्वपरागण से **F2 दृश्य अनुपात = `3 लंबा : 1 बौना` (`एक चौथाई बौने`)**, एवं **जीनोटाइप (`क्र. 8.2`) = `1 TT : 2 Tt : 1 tt`**!\n• **द्विसंकर संकरण (`चित्र 8.4–8.5`, कुल `556` बीज)**: गोल-पीले × झुर्रीदार-हरे → **F2 में `315 गोल-पीले : 108 गोल-हरे : 101 झुर्री-पीले : 32 झुर्री-हरे` = `9 : 3 : 3 : 1` अनुपात**! यहाँ बने नए संयोजन (**108 गोल-हरे व 101 झुर्री-पीले**) सिद्ध करते हैं कि विभिन्न लक्षण **स्वतंत्र रूप से वंशागत (`Independent Assortment`)** होते हैं!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch8/real/gregor-mendel-portrait.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch8/real/garden-pea-pisum.webp',
            title: { en: 'Archival Founder & Specimen (`NCERT p.142–143`): Gregor Johann Mendel & Garden Pea (*Pisum sativum*)', hi: 'आनुवंशिकी जनक व प्रयोगशाला पादप: ग्रेगर जॉन मेंडल (`1822–1884`) एवं उद्यान मटर की फलियाँ' },
            caption: {
              en: 'Left: Gregor Mendel, who counted every F1 & F2 pea plant mathematically revealing dominant (`3:1`) & independent (`9:3:3:1`) ratios. Right: *Pisum sativum* pods displaying contrasting heritable seed & pod phenotypes.',
              hi: 'बायाँ: मेंडल, जिन्होंने गणितीय गणना द्वारा आनुवंशिक नियम दिए। दायाँ: मटर की फलियाँ जिनमें गोल/झुर्रीदार, पीला/हरा आदि विपर्यासी लक्षण स्पष्ट दिखते हैं।',
            },
          },
          inlinePyqIds: ['pyq-b8-1', 'pyq-b8-7', 'pyq-b8-20', 'pyq-b8-21', 'pyq-b8-24'],
        },
      ],
    },
    {
      id: 'gene-enzyme-chromosomes-meiosis',
      number: '8.2.3',
      flowDiagramKey: 'c10-ch8-gene-expression-chromosome-diagram',
      svgLab: 'mendel-genetics-sex-lab',
      title: {
        en: 'How Traits Are Expressed (`DNA → Gene → Enzyme → Hormone → Height`) & Why Chromosomes Divide via Meiosis (`2n → n → 2n`)',
        hi: 'लक्षण अपने आपको कैसे व्यक्त करते हैं (`जीन → एंजाइम → हार्मोन → लंबाई`) तथा स्वतंत्र गुणसूत्र व अर्द्धसूत्री विभाजन (`Meiosis`)',
      },
      summaryTag: {
        en: 'NCERT Pages 144–145 • Section 8.2.3 Protein Blueprint, Altered Enzyme Dwarfism, Separate Chromosomes & Gamete Stability',
        hi: 'NCERT पृ. 144–145 • प्रोटीन संश्लेषण जीन, एंजाइम दक्षता बनाम बौनापन, स्वतंत्र गुणसूत्र युग्म एवं अर्द्धसूत्री विभाजन',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Molecular Mechanism (`p.144`): DNA -> Gene -> Protein Enzyme -> Hormone -> Height + Independent Chromosomes',
            hi: '1. आण्विक क्रियाविधि (`पृ. 144`): जीन द्वारा एंजाइम व हार्मोन नियंत्रण एवं अलग गुणसूत्रों द्वारा स्वतंत्र वंशागति',
          },
          conceptStory: {
            en: 'How does an invisible DNA gene control whether a pea plant stands tall or short? Follow **NCERT Page 144** step by step:\n1) Cellular **DNA** holds the information blueprint for building proteins; a specific **section of DNA providing info for ONE protein = ==Gene (`जीन`)==** (`sitting on **Chromosomes**` — Tech Shift 17 PYQ!).\n2) Plant tallness depends on the **amount of a plant hormone** -> which depends on the efficiency of a **protein Enzyme (`एंजाइम / प्रकिण्व`)** producing it!\n   - **Efficient Enzyme (`Gene T`)**: Abundant growth hormone synthesized -> **Plant becomes TALL**.\n   - **Altered Gene (`t`)**: Less efficient enzyme protein -> Less growth hormone produced -> **Plant stays SHORT (`Dwarf`)**!\n• **Why Don’t Traits Get Glued Together on One DNA Thread?** If parents passed one single continuous DNA chain containing all genes, `R` and `y` would stay linked forever and `Fig 8.5` dihybrid assortment would fail! Instead, organisms split their genome across **independent separate DNA packages called ==Chromosomes (`गुणसूत्र`)==** (`every somatic body cell holds TWO copies of each chromosome: 1 paternal + 1 maternal`). **==Meiosis (`अर्द्धसूत्री विभाजन`, Tech Shift 19)==** puts **ONLY ONE chromosome of each pair** into each gamete -> fusion into **Zygote** restores exact **species chromosome stability (`46` in humans, `Ex Q4`)**!',
            hi: 'अदृश्य जीन पौधे की लंबाई कैसे तय करता है (`NCERT पृ. 144`)?\n1) कोशिका के DNA में प्रोटीन बनाने की सूचना रहती है; **DNA का वह भाग जिसमें किसी एक प्रोटीन संश्लेषण की सूचना होती है, उस प्रोटीन का ==जीन (`Gene`)== कहलाता है** (`गुणसूत्रों पर स्थित`, `Tech Shift 17`)!\n2) पौधे की लंबाई एक **पादप हार्मोन की मात्रा** पर निर्भर करती है, जो उसे बनाने वाले **एंजाइम (`प्रकिण्व प्रोटीन`) की दक्षता** तय करती है:\n   - **दक्ष एंजाइम (`जीन T`)** → पर्याप्त हार्मोन बनेगा → पौधा **लंबा (`Tall`)** होगा।\n   - **परिवर्तित जीन (`t`)** → प्रोटीन की दक्षता कम → कम हार्मोन → पौधा **बौना (`Dwarf`)** होगा!\n• **जीन अलग-अलग गुणसूत्रों पर क्यों? (`पृ. 144–145`)**: यदि सभी जीन एक ही अखंड DNA श्रृंखला में होते तो ‘R’ व ‘y’ परस्पर संलग्न रहकर `9:3:3:1` स्वतंत्र संयोग नहीं दे पाते! अतः जीन सेट अनेक स्वतंत्र टुकड़ों **==गुणसूत्रों (`Chromosomes`)==** में रहते हैं (प्रत्येक की 2 प्रतियाँ: 1 नर + 1 मादा से)। युग्मक बनते समय **==अर्द्धसूत्री विभाजन (`Meiosis`, Tech Shift 19)==** द्वारा हर जोड़े से **केवल 1 गुणसूत्र युग्मक में** जाता है जिससे निषेचन के बाद **युग्मनज में पुनः `46` गुणसूत्र व DNA स्थायित्व (`अभ्यास Q4`)** बना रहता है!',
          },
          viralTrick: {
            en: '**4-Step Gene Chain**: **DNA Segment (`Gene`) -> Enzyme Protein Efficiency -> Plant Hormone Amount -> Height (`Tall/Dwarf`)**! And **Gametes take 1 chromosome per pair (`Meiosis`)**!',
            hi: '**क्रम याद रखें**: **जीन (`DNA खंड`) → एंजाइम दक्षता → हार्मोन मात्रा → लंबा/बौना लक्षण**! तथा **अर्द्धसूत्री विभाजन** से युग्मक में हर जोड़े का 1 गुणसूत्र जाता है!',
          },
          inlinePyqIds: ['pyq-b8-2', 'pyq-b8-4', 'pyq-b8-16', 'pyq-b8-18', 'pyq-b8-19'],
        },
      ],
    },
    {
      id: 'sex-determination-human-snail',
      number: '8.2.4',
      flowDiagramKey: 'c10-ch8-sex-determination-diagram',
      title: {
        en: 'Sex Determination (`8.2.4`, Fig 8.6): Egg Temperature & Sex-Changing Snail vs Human Genetic `22 + 1` Pairs (`XX` & `XY`)',
        hi: 'लिंग निर्धारण (`8.2.4`, चित्र 8.6): सरीसृप ताप व लिंग-परिवर्तक घोंघा बनाम मानव के `22 + 1` गुणसूत्र जोड़े (`XX` व `XY`)',
      },
      summaryTag: {
        en: 'NCERT Pages 145–147 • Tech Shift 9 (1 Sex Pair), Tech Shift 15 (Snail), Blood Group Q3 & All Solved Back Exercises Q1–Q4',
        hi: 'NCERT पृ. 145–147 • 1 लिंग गुणसूत्र युग्म (`XX/XY`), घोंघा अपवाद, रुधिर वर्ग A/O प्रश्‍न 3 व अभ्यास Q1–Q4 हल',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Environmental / Snail Plasticity vs Human Genetic Sex Determination (`22 Pairs + XX Female / XY Male`, Fig 8.6)',
            hi: '1. सरीसृप व घोंघे का गैर-आनुवंशिक तंत्र बनाम मानव में आनुवंशिक लिंग निर्धारण (`मादा XX` व `नर XY`, चित्र 8.6)',
          },
          conceptStory: {
            en: 'Different animal species determine sex differently (`NCERT Page 145` — two huge RRB PYQs come straight from this paragraph!):\n1) **Environmental Trigger**: In several **Reptiles (`सरीसृप`)**, sex depends purely on the **incubation temperature of fertilised eggs**!\n2) **Sex Change (`Tech 2024 Shift 15 PYQ!`)**: Animals like **==Snails (`घोंघा`) can CHANGE THEIR SEX==** during their life, showing sex isn’t genetically predetermined (`whereas Humans, Dogs, Birds are genetically locked`)!\n3) **Humans (`Genetic Sex Determination`, Fig 8.6)**: Most human chromosomes exist in **22 identical matched pairs (`Autosomes`, from mother & father)**. The **23rd pair (`==1 pair of Sex Chromosomes==`, Tech Shift 9)** breaks symmetry:\n   - **Females (`स्त्री`)**: Carry a **perfect pair `XX`** (`both normal size` -> **every egg always carries X**).\n   - **Males (`पुरुष`)**: Carry a **mismatched pair `XY`** (`one normal **X** + one short **Y**` -> **half sperms carry X, half carry Y**).\n• **50 : 50 Inheritance Rule (`Fig 8.6`)**: **EVERY child receives an `X` from the Mother**; therefore **==sex is decided strictly by which chromosome comes from the FATHER==**: Father **`X`** -> **`XX` Girl (`50%`)** | Father **`Y`** -> **`XY` Boy (`50%`)**!',
            hi: '**NCERT पृष्ठ 145** की हर पंक्ति परीक्षा के लिए अति महत्वपूर्ण है (`Tech Shifts 9 व 15 PYQs यहीं से आए हैं!`)।\n1) **पर्यावरणीय लिंग (`कुछ सरीसृप`)**: निषेचित अंडों के **ऊष्मायन ताप** पर निर्भर करता है कि संतति नर होगी या मादा!\n2) **गैर-आनुवंशिक अपवाद (`Tech Shift 15`)**: **==घोंघे (`Snail`) जैसे कुछ प्राणी अपना लिंग बदल सकते हैं==**, अर्थात इनमें लिंग आनुवंशिक रूप से पूर्व-निर्धारित नहीं होता!\n3) **मानव लिंग निर्धारण (`आनुवंशिक`, चित्र 8.6)**: मानव में **22 जोड़े गुणसूत्र** पूर्णतः युग्मित (समान आकार) होते हैं, परंतु **23वाँ जोड़ा (`==1 जोड़ा लिंग गुणसूत्र==`, Tech Shift 9)** सदा पूर्ण नहीं होता:\n   - **स्त्रियों में**: **पूर्ण युग्म `XX`** (`अतः माता के सभी अंडाणुओं में X गुणसूत्र होता है`)।\n   - **पुरुषों में**: **अपूर्ण युग्म `XY`** (`एक सामान्य X + एक छोटा Y गुणसूत्र` → आधे शुक्राणु X व आधे Y)।\n• **निष्कर्ष (`चित्र 8.6`)**: लड़का हो या लड़की, सभी बच्चे **माता से सदैव `X`** पाते हैं — अतः **==बच्चे का लिंग केवल पिता से वंशागत गुणसूत्र द्वारा निर्धारित होता है (`पिता का X → लड़की 50%`, `पिता का Y → लड़का 50%`)==**!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch8/real/human-male-karyotype.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch8/real/xy-chromosome-fluorescence.webp',
            title: { en: 'Real Cytogenetics (`Sec 8.2.4`): Human `22 + XY` Karyotype & Fluorescence X (`Red`) / Y (`Green`) Nuclei', hi: 'असली कोशिका-आनुवंशिकी: मानव `22 + XY` गुणसूत्र चार्ट व फ्लोरोसेंस `X (लाल)` बनाम `Y (हरा)` परीक्षण' },
            caption: {
              en: 'Left (`NHGRI Karyotype`): 22 homologous autosomal pairs plus 1 mismatched XY sex pair (`large X + small Y`, NCERT p.145). Right: Fluorescence paint proving male nuclei carry distinct X (red) + Y (green) vs female X + X.',
              hi: 'बायाँ: मानव पुरुष में 22 पूर्ण जोड़े व 23वाँ अपूर्ण XY जोड़ा (`X सामान्य, Y छोटा`)। दायाँ: नर में अलग X (लाल) + Y (हरा) तथा मादा में दोनों X (लाल) गुणसूत्र।',
            },
          },
          trapAlert: {
            en: '**-0.33 Trap**: Question asks **“How many pairs of SEX chromosomes in humans?”** -> **ONE pair (`2 individual chromosomes: XX or XY`)**, NOT `22` (`22 pairs are autosomes`) and NOT `23` (`23 is total pairs`)! And **Snail** has NO genetically fixed sex!',
            hi: '**-0.33 सावधानी**: मनुष्य में **लिंग गुणसूत्र केवल 1 जोड़ा (`XX` या `XY`)** होता है (`22 जोड़े अलिंग व कुल 23 जोड़े होते हैं`, Tech Shift 9)! और **घोंघा (`Snail`)** लिंग बदल सकता है!',
          },
          inlinePyqIds: ['pyq-b8-15', 'pyq-b8-17', 'pyq-b8-22'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Phenotype `3:1` vs Genotype `1:2:1` (`Act 8.2`) & Dihybrid `9:3:3:1`', hi: 'दृश्य `3:1` बनाम जीनी `1:2:1` (`क्र. 8.2`) एवं द्विसंकर `9:3:3:1`' },
      left: { en: 'Monohybrid F2 (`Tt × Tt`): Physical sight = 3 Tall : 1 Short | Genetic DNA = 1 TT : 2 Tt : 1 tt', hi: 'एकसंकर F2: बाहर से 3 लंबे : 1 बौना | जीन रूप में 1 TT : 2 Tt : 1 tt!' },
      right: { en: 'Dihybrid F2 (`Fig 8.5`, 556 seeds): 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green', hi: 'द्विसंकर (`556 बीज`): 315 : 108 : 101 : 32 = 9 : 3 : 3 : 1 (`नए स्वतंत्र संयोग!`)!' },
    },
    {
      pair: { en: 'Mendel Dominant vs Recessive Garden Pea Traits (`Tech 3, 6, 21`)', hi: 'मटर में प्रभावी (`Dominant`) बनाम अप्रभावी (`Recessive`) लक्षण' },
      left: { en: 'Dominant (`express in 1 copy`): Tall stem, Round seed, Yellow seed, Violet flower', hi: 'प्रभावी: लंबा तना, गोल बीज, पीला बीज, बैंगनी फूल (`सफेद नहीं!`)' },
      right: { en: 'Recessive (`require BOTH homozygous copies`): Dwarf stem, Wrinkled seed, Green seed, White flower', hi: 'अप्रभावी (`केवल दोनों प्रतियों पर दिखे`): बौना, झुर्रीदार, हरा बीज, सफेद फूल' },
    },
    {
      pair: { en: 'Human `22 + 1` Sex Pairs (`Father X/Y Decides`) vs Reptile Temp / Snail', hi: 'मानव `22+1` जोड़े (`पिता X/Y`) बनाम घोंघा व सरीसृप ताप (`पृ. 145`)' },
      left: { en: 'Humans: 22 identical autosome pairs + 1 Sex pair (`Female XX`, `Male XY small Y`; Father decides sex)', hi: 'मानव में 1 लिंग गुणसूत्र युग्म: माता सदैव X दे; पिता X → लड़की या Y → लड़का!' },
      right: { en: 'Non-genetic (`p.145`): Reptile eggs = temperature; Snail = changes sex dynamically (`Tech Shift 15`)!', hi: 'गैर-आनुवंशिक: कुछ सरीसृप अंड ताप पर, व घोंघा जीवन में लिंग बदल सकता है (`Shift 15`)!' },
    },
    {
      pair: { en: 'Trait Population % (`10% vs 60%`) & Blood Group A × O = O (`p.146 Q3`)', hi: 'जनसंख्या % (`10% vs 60%`) एवं रुधिर वर्ग A × O → पुत्री O (`Q3`)' },
      left: { en: 'In asexual species, higher-frequency trait (`60% B`) originated EARLIER than newer rare trait (`10% A`)', hi: 'अलैंगिक आबादी में अधिक प्रतिशत (`60%`) वाला लक्षण कम (`10%`) से पहले उत्पन्न हुआ!' },
      right: { en: 'A man + O woman -> O daughter is NOT enough info alone to tell whether A or O is dominant (`need alleles/more data`)!', hi: 'A पिता व O माता से O पुत्री → यह सूचना अकेले A व O में प्रभावी बताने को अपर्याप्त है!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Father of Genetics / Mathematical Pea Counts', hi: 'आनुवंशिकी के जनक (`1822–1884`)' },
      name: { en: 'Gregor Johann Mendel (`1822–1884`)', hi: 'ग्रेगर जॉन मेंडल (`1822–1884`)' },
      country: { en: 'Austria / Monastery at Brno (`NCERT p.142 Box`)', hi: 'ऑस्ट्रिया (`NCERT पृ. 142 बॉक्स`)' },
      fact: {
        en: 'Studied **Vienna science & math** after failing his teacher test; first scientist to record exact counts of every single pea plant across F1 & F2 generations, proving discrete inheritance rules!',
        hi: 'वियना से विज्ञान-गणित पढ़ प्रत्येक पीढ़ी के **एक-एक मटर के पौधे की सटीक गणना** कर `3:1`, `1:2:1` व `9:3:3:1` जैसे आनुवंशिक नियम प्रतिपादित किए!',
      },
    },
    {
      badge: { en: 'Double-Helix DNA X-Ray Diffraction', hi: 'DNA द्वि-कुंडलिनी संरचना' },
      name: { en: 'Rosalind Franklin, Watson & Crick (`1953`)', hi: 'रोज़ालिंड फ्रैंकलिन, वॉटसन व क्रिक (`DNA संरचना`)' },
      country: { en: 'United Kingdom (`Sec 8.2.3 DNA Blueprint`)', hi: 'यूनाइटेड किंगडम (`भाग 8.2.3`)' },
      fact: {
        en: 'Revealed **DNA’s double-helix structure** — explaining how nuclear DNA stores protein-coding **genes** and copies cleanly across generations (`Photo 51`).',
        hi: 'एक्स-रे विवर्तन (`Photo 51`) से **DNA की द्वि-कुंडलिनी संरचना** स्पष्ट की जिसने जीन प्रतिकृति व प्रोटीन संश्लेषण का आधार दिया!',
      },
    },
    {
      badge: { en: 'Proof DNA Is Genetic Material (1952)', hi: 'DNA आनुवंशिक पदार्थ सिद्ध (`1952`)' },
      name: { en: 'Alfred Hershey & Martha Chase (`1952`)', hi: 'हर्शे व चेज़ प्रयोग (`1952`, NTPC Shift 6)' },
      country: { en: 'USA (`Bacteriophage ³²P/³⁵S`)', hi: 'USA (`RRB NTPC Shift 6 PYQ`)' },
      fact: {
        en: 'Proved conclusively in **1952** (`using radioactive phosphorus-DNA vs sulfur-protein`) that **DNA — NOT protein — is the hereditary material passed between generations**!',
        hi: 'सन् **1952** के प्रयोग से ठोस प्रमाण दिया कि प्रोटीन नहीं बल्कि **DNA ही आनुवंशिक पदार्थ** है!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-mendel-portrait',
      figRef: { en: 'NCERT p.142 Biography Box (`1822–1884`)', hi: 'NCERT पृ. 142 — ग्रेगर जॉन मेंडल' },
      title: { en: 'Gregor Johann Mendel — Founder of Modern Genetics & Hybridisation', hi: 'ग्रेगर जॉन मेंडल (`1822–1884`) — आनुवंशिकता नियमों के प्रतिपादक' },
      imageUrl: '/ncert-notes/class10-bio-ch8/real/gregor-mendel-portrait.webp',
      hotspots: [
        { en: 'Combined mathematics and biology by counting every F1 & F2 garden pea offspring accurately (`p.142`).', hi: 'हर पीढ़ी के एक-एक मटर के पौधे के लक्षणों का गणितीय रिकॉर्ड रख कर आनुवंशिक नियम खोजे।' },
      ],
    },
    {
      id: 'vis-pea-pods',
      figRef: { en: 'NCERT Fig 8.3–8.5 (`Pisum sativum`)', hi: 'NCERT चित्र 8.3–8.5 — उद्यान मटर (`Pisum sativum`)' },
      title: { en: 'Garden Pea (*Pisum sativum*) Displaying Contrasting Inheritable Pods & Vines', hi: 'मेंडल के प्रयोगी मटर पौधे: गोल-झुर्रीदार बीज, लंबा-बौना तना व बैंगनी-सफेद पुष्प' },
      imageUrl: '/ncert-notes/class10-bio-ch8/real/garden-pea-pisum.webp',
      hotspots: [
        { en: 'Dominant contrasting pea alleles: Tall plant (`T`), Round seed (`R`), Yellow seed (`Y`), Violet flower (`W`).', hi: 'प्रभावी लक्षण: लंबा पौधा, गोल बीज, पीला बीज, बैंगनी फूल (`Tech 2024 Shifts 3, 6, 21`)।' },
      ],
    },
    {
      id: 'vis-sugarcane-field',
      figRef: { en: 'NCERT Sec 8.1 (`Sugarcane vs Sexual Diversity`)', hi: 'NCERT पृ. 141 — गन्ने में अल्प विभिन्नता' },
      title: { en: 'Vegetative *Saccharum* Sugarcane Showing Very Few Individual Variations vs Humans', hi: 'गन्ने का पौधा: अलैंगिक प्रजनन से व्यष्टिगत स्तर पर बहुत कम विभिन्नता (`पृ. 141`)' },
      imageUrl: '/ncert-notes/class10-bio-ch8/real/sugarcane-clone-variation.webp',
      hotspots: [
        { en: 'Asexual crops carry tiny copying errors; sexual animals/humans build broad individual variety (`Sec 8.1`).', hi: 'अलैंगिक गन्ने में नगण्य अंतर दिखता है जबकि लैंगिक मानव समष्टि में सर्वाधिक विभिन्नता मिलती है।' },
      ],
    },
    {
      id: 'vis-human-karyotype',
      figRef: { en: 'NCERT Fig 8.6 (`22 Pairs + XY Male`)', hi: 'NCERT चित्र 8.6 — मानव `22 + XY` गुणसूत्र' },
      title: { en: 'NHGRI Human Male Karyotype: 22 Homologous Pairs + 1 Mismatched `XY` Sex Pair', hi: 'मानव पुरुष कैरियोटाइप: 22 समान जोड़े + 23वाँ अपूर्ण लिंग युग्म (`बड़ा X व छोटा Y`)' },
      imageUrl: '/ncert-notes/class10-bio-ch8/real/human-male-karyotype.webp',
      hotspots: [
        { en: 'Notice bottom-right 23rd pair (`X` normal + `Y` short)! Female carries matched `XX` (`Tech Shift 9`).', hi: 'दाएँ नीचे 23वाँ जोड़ा देखें: बड़ा X व छोटा Y (`1 लिंग जोड़ा` — `मादा XX` पूर्ण युग्म)!' },
      ],
    },
    {
      id: 'vis-xy-fluorescence',
      figRef: { en: 'NCERT Sec 8.2.4 (`XY vs XX` Sex Cells)', hi: 'NCERT भाग 8.2.4 — फ्लोरोसेंस `X/Y` बनाम `X/X`' },
      title: { en: 'Fluorescence Probe Differentiating Male `X` (`Red`) / `Y` (`Green`) vs Female `X` / `X`', hi: 'नर कोशिका में `X (लाल) + Y (हरा)` बनाम मादा में दोनों `X (लाल)` गुणसूत्र' },
      imageUrl: '/ncert-notes/class10-bio-ch8/real/xy-chromosome-fluorescence.webp',
      hotspots: [
        { en: 'Because Mother always passes X, Father’s sperm (`X` or `Y`) determines child sex with 50:50 odds (`Fig 8.6`).', hi: 'सभी बच्चों को माँ से X मिलने से लिंग निर्धारण केवल पिता से प्राप्त X या Y गुणसूत्र पर निर्भर करता है।' },
      ],
    },
    {
      id: 'vis-franklin-dna',
      figRef: { en: 'NCERT Sec 8.2.3 (`DNA Blueprint & Genes`)', hi: 'NCERT भाग 8.2.3 — DNA व जीन अध्ययन' },
      title: { en: 'Molecular Microscopy Heritage — Decoding Cellular DNA Carrying Protein-Building Genes', hi: 'कोशिकीय DNA अनुसंधान — प्रोटीन संश्लेषण व आनुवंशिक लक्षणों का नियंत्रक केंद्र' },
      imageUrl: '/ncert-notes/class10-bio-ch8/real/rosalind-franklin-dna.webp',
      hotspots: [
        { en: 'Cellular DNA holds protein blueprints; a DNA segment coding for a protein is its Gene (`p.144`).', hi: 'DNA का प्रोटीन संश्लेषण खंड ही जीन कहलाता है जो एंजाइम व हार्मोन मात्रा द्वारा लक्षण नियंत्रित करता है।' },
      ],
    },
  ],
  activities: [
    {
      num: '8.1',
      title: { en: 'Activity 8.1: Free vs Attached Earlobes Classroom Inheritance Survey (`Fig 8.2`, p.142)', hi: 'क्रियाकलाप 8.1: कक्षा में स्वतंत्र बनाम जुड़ी कर्णपालि (`Earlobe`) वंशागति सर्वेक्षण (`चित्र 8.2`, पृ. 142)' },
      materials: { en: 'Observation list of classmates’ & their parents’ earlobes (`free vs attached`)', hi: 'कक्षा के छात्रों व उनके माता-पिता की कर्णपालि के प्रकार की सूची' },
      steps: { en: 'Tally classmates with **Free earlobes (`swings clear`)** vs **Attached earlobes (`fused to head side`)**, calculate percentages & compare each student with both parents to propose inheritance pattern.', hi: 'स्वतंत्र व जुड़ी कर्णपालि वाले छात्रों का प्रतिशत निकाल कर प्रत्येक की तुलना उनके माता-पिता से करें व वंशागति नियम सुझाएँ।' },
      examTakeaway: { en: 'Proves human traits occur in **two discrete heritable variants** controlled by paired alleles (`free earlobe = generally dominant over recessive attached`).', hi: 'मानव समष्टि में एक ही लक्षण के दो स्पष्ट वंशागत परिवर्त (`स्वतंत्र एवं जुड़ी कर्णपालि`) जनकों से संतति में आते हैं!' },
      predictQuestion: {
        prompt: { en: 'What key genetic concept does comparing student vs parent earlobes demonstrate in Activity 8.1 (`Fig 8.2`)?', hi: 'क्रियाकलाप 8.1 (`चित्र 8.2`) में कर्णपालि के तुलनात्मक सर्वेक्षण से क्या मुख्य सिद्धांत स्पष्ट होता है?' },
        options: { en: ['Human populations hold two discrete heritable earlobe variants shaped by maternal & paternal DNA', 'Earlobes grow only after touching sunlight', 'Only females have earlobes', 'Attached earlobes contain no DNA'], hi: ['मानव समष्टि में स्पष्ट दो वंशागत परिवर्त (`स्वतंत्र व जुड़ी कर्णपालि`) माता-पिता के DNA से आते हैं', 'केवल सूर्य प्रकाश से कर्णपालि बनती', 'केवल स्त्रियों में कर्णपालि होती', 'जुड़ी कर्णपालि में DNA नहीं'] },
        correctIndex: 0,
        reason: { en: 'Both parents contribute equal genetic material determining discrete variants (`free vs attached`, Sec 8.2.1–8.2.2).', hi: 'प्रत्येक लक्षण के लिए माता-पिता दोनों के DNA का योगदान होकर स्पष्ट वंशागत परिवर्त बनते हैं (`पृ. 142`)।' },
      },
    },
    {
      num: '8.2',
      title: { en: 'Activity 8.2: Experiment Confirming F2 Genotype `TT : Tt : tt = 1 : 2 : 1` Ratio (`Fig 8.3`, p.143)', hi: 'क्रियाकलाप 8.2: F2 पीढ़ी में वास्तव में `TT : Tt : tt = 1 : 2 : 1` अनुपात प्रमाणित करने का प्रयोग (`चित्र 8.3`, पृ. 143)' },
      materials: { en: 'F2 Tall pea plants (`mixture of TT and Tt`) & Short plants (`tt`) grown from Fig 8.3 cross', hi: 'चित्र 8.3 की F2 पीढ़ी के सभी लंबे (`TT` व `Tt`) एवं बौने (`tt`) मटर के पौधे' },
      steps: { en: '**Self-pollinate (`or test-cross with tt`) every individual F2 Tall plant separately** and grow their F3 offspring: roughly `1/3` of F2 Tall breed ONLY tall plants (`proving homozygous TT`) while `2/3` produce `3:1` tall+short offspring (`proving heterozygous Tt`), alongside all `1/4` F2 `tt` breeding only short!', hi: 'F2 के **प्रत्येक लंबे पौधे का अलग-अलग स्वपरागण** कराकर F3 उगाएँ: लगभग 1/3 लंबे पौधों (`TT`) से केवल लंबे पौधे बनेंगे, जबकि 2/3 लंबे पौधों (`Tt`) से लंबे व बौने दोनों निकलेंगे — जिससे **`1 TT : 2 Tt : 1 tt` (1:2:1)** सिद्ध हो जाएगा!' },
      examTakeaway: { en: 'Visually identical `TT` & `Tt` Tall F2 peas differ genetically (`1 TT : 2 Tt : 1 tt`) — revealed cleanly by **selfing into F3 generation**!', hi: 'देखने में समान दिखने वाले F2 के लंबे पौधों के अंदर वास्तव में `1 TT : 2 Tt : 1 tt` का सटीक जीनी अनुपात छिपा होता है (`पृ. 143`)!' },
      predictQuestion: {
        prompt: { en: 'In Activity 8.2, if you self-pollinate ALL F2 tall pea plants individually, roughly what fraction of them produce ONLY tall offspring (`true-breeding TT`)?', hi: 'क्रियाकलाप 8.2 में F2 के सभी लंबे पौधों का अलग स्वपरागण करने पर उनमें से कितने अंश से केवल लंबे (`TT`) पौधे प्राप्त होंगे?' },
        options: { en: ['1/3 of tall plants (`giving overall 1 TT : 2 Tt : 1 tt ratio`)', 'None (`0%`)', '100% (`all tall plants are identical`)', 'All give 100% short plants'], hi: ['लंबे पौधों का 1/3 भाग (`अर्थात कुल 1 TT : 2 Tt : 1 tt अनुपात`)', 'शून्य (`0%`)', 'सभी 100% केवल लंबे दें', 'सभी बौने हो जाएँ'] },
        correctIndex: 0,
        reason: { en: 'Inside F2 (`1 TT + 2 Tt + 1 tt`), out of the 3 Tall groups (`1 TT` vs `2 Tt`), `1/3` (`TT`) breeds pure tall while `2/3` (`Tt`) segregate short offspring too!', hi: 'कुल 3 लंबे समूहों में `1` भाग `TT` (`शुद्ध लंबा`) तथा `2` भाग `Tt` (`संकर`) होने से `1/3` केवल लंबे देंगे (`1:2:1`)!' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-8-1',
      title: {
        en: 'Mendel’s NCERT Pea Contrasting Traits (`Dominant vs Recessive`) & Exam Hits (`p.142–144`)',
        hi: 'मेंडल के मटर पौधे (`Pisum sativum`) के प्रभावी बनाम अप्रभावी लक्षण व परीक्षा प्रश्न (`पृ. 142–144`)',
      },
      headers: {
        en: ['Pea Character Studied in NCERT', 'Dominant Trait (`Symbol`)', 'Recessive Trait (`Symbol`)', 'Key Exam Question / Trap'],
        hi: ['मटर का लक्षण (`NCERT`)', 'प्रभावी लक्षण (`प्रतीक`)', 'अप्रभावी लक्षण (`प्रतीक`)', 'सीधा रेलवे परीक्षा प्रश्न'],
      },
      rows: [
        [{ en: '**Plant Stem Height**', hi: '**पौधे की लंबाई**' }, { en: '**Tall (`T`)** (`TT` or `Tt`)', hi: '**लंबा (`T`)** (`TT` या `Tt`)' }, { en: '**Short / Dwarf (`t`)** (`tt` only)', hi: '**बौना (`t`)** (केवल `tt`)' }, { en: '**`Tech 2024 Shift 3 & 21 PYQs`** (`No medium blend in F1!`)', hi: '**`Tech 2024 Shift 3 व 21 PYQs`** (`F1 में कोई मध्यम मिश्रण नहीं!`)' }],
        [{ en: '**Seed Shape**', hi: '**बीज की आकृति**' }, { en: '**Round (`R`)**', hi: '**गोल (`R`)**' }, { en: '**Wrinkled (`r`)**', hi: '**झुर्रीदार (`r`)**' }, { en: '**`Tech 2024 Shifts 3 & 6 PYQs`** (`Round = dominant!`)', hi: '**`Tech 2024 Shifts 3 व 6 PYQs`** (`गोल = प्रभावी लक्षण!`)' }],
        [{ en: '**Seed Colour (`Fig 8.5`)**', hi: '**बीज का रंग (`चित्र 8.5`)**' }, { en: '**Yellow (`Y`)**', hi: '**पीला (`Y`)**' }, { en: '**Green (`y`)**', hi: '**हरा (`y`)**' }, { en: 'F1 of `RRYY × rryy` = All Round Yellow (`RrYy`)!', hi: 'प्रभावी पीला; **हरा बीज अप्रभावी** (`Tech Shift 6 अपवाद`)' }],
        [{ en: '**Flower Colour (`p.142 & Ex Q1`)**', hi: '**पुष्प का रंग (`पृ. 142 व Q1`)**' }, { en: '**Violet (`W`)**', hi: '**बैंगनी (`W`)**' }, { en: '**White (`w`)**', hi: '**सफेद (`w`)**' }, { en: '**`Tech Shift 21 PYQ`** (`White / ___ -> Violet`) & **Ex Q1 (`TtWW`)**!', hi: '**`Tech Shift 21 PYQ`** (`सफेद / ___ → बैंगनी`) व **अभ्यास Q1 (`TtWW`)**!' }],
      ],
    },
    {
      id: 'tbl-8-2',
      title: {
        en: 'Mendel Cross Generations Comparison: Monohybrid (`Fig 8.3`) vs Dihybrid (`Fig 8.5`) vs Ex Q1',
        hi: 'मेंडल संकरण पीढ़ियाँ तुलना: एकसंकर (`3:1 व 1:2:1`), द्विसंकर (`9:3:3:1`) व अभ्यास `Q1`',
      },
      headers: {
        en: ['Cross Type & Parents', 'F1 Generation Output', 'F2 Phenotypic & Genotypic Ratio', 'Core NCERT Conclusion'],
        hi: ['संकरण व जनक (`Parents`)', 'F1 पीढ़ी परिणाम', 'F2 दृश्य व जीनी अनुपात', 'मुख्य आनुवंशिक निष्कर्ष'],
      },
      rows: [
        [{ en: '**Monohybrid (`TT × tt`)**', hi: '**एकसंकर (`TT × tt`)**' }, { en: '100% Tall (`Tt`) — ZERO intermediate height', hi: '100% लंबे (`Tt`) — कोई बीच की ऊँचाई नहीं' }, { en: 'Phenotype: **3 Tall : 1 Short** | Genotype (`Act 8.2`): **1 TT : 2 Tt : 1 tt**', hi: 'दृश्य: **3 : 1** (`1/4 बौने`) | जीनी: **1 TT : 2 Tt : 1 tt**' }, { en: 'Single copy `T` expresses Tall (`Law of Dominance`)', hi: '`T` की एक प्रति काफी (`प्रभावी बनाम अप्रभावी नियम`)' }],
        [{ en: '**Dihybrid (`RRYY × rryy`)**', hi: '**द्विसंकर (`RRYY × rryy`)**' }, { en: '100% Round Yellow (`RrYy`)', hi: '100% गोल पीले (`RrYy`)' }, { en: 'F2 (`556 seeds`): **315 : 108 : 101 : 32** = **9 : 3 : 3 : 1**', hi: 'F2 (`556 बीज`): **315 : 108 : 101 : 32** = **9 : 3 : 3 : 1**' }, { en: 'New combos (`Round-Green, Wrinkled-Yellow`) -> **Independent Inheritance**!', hi: 'नए संयोजन सिद्ध करें कि **लक्षण स्वतंत्र रूप से वंशागत** होते हैं!' }],
        [{ en: '**Ex Q1 (`TtWW × ttww`)**', hi: '**अभ्यास Q1 (`TtWW × ttww`)**' }, { en: 'All Violet (`Ww`); ~50% Tall (`Tt`) & ~50% Short (`tt`)', hi: 'सभी बैंगनी फूल; आधे लंबे (`Tt`) व आधे बौने (`tt`)' }, { en: 'Matches **`(c) TtWW`** verified in NCERT answer key!', hi: 'NCERT उत्तरमाला **`(c) TtWW`** सत्यापित!' }, { en: 'Heterozygous height (`Tt`) halves tall/short + homozygous `WW` keeps all violet!', hi: 'आधे बौने होने से `Tt` व सभी बैंगनी होने से `WW` सिद्ध!' }],
      ],
    },
    {
      id: 'tbl-8-3',
      title: {
        en: 'Cellular Genetics Chain: DNA, Gene, Enzyme, Hormone, Chromosomes & Meiosis (`Sec 8.2.3`)',
        hi: 'कोशिकीय वंशागति: DNA, जीन, एंजाइम-हार्मोन संबंध, गुणसूत्र एवं अर्द्धसूत्री विभाजन (`भाग 8.2.3`)',
      },
      headers: {
        en: ['Genetic Term', 'Exact Definition (`NCERT p.144–145`)', 'Role in Trait Expression / Inheritance', 'CBT PYQ Connection'],
        hi: ['आनुवंशिक पद', 'सटीक NCERT परिभाषा (`पृ. 144–145`)', 'लक्षण अभिव्यक्ति / वंशागति में भूमिका', 'रेलवे PYQ प्रश्न'],
      },
      rows: [
        [{ en: '**Gene (`जीन`)**', hi: '**जीन (`Gene`)**' }, { en: 'Section of DNA containing info for **making ONE protein**', hi: 'DNA का वह भाग जिसमें **किसी प्रोटीन संश्लेषण की सूचना** होती है' }, { en: 'Located on **Chromosomes**; controls protein/enzyme traits', hi: '**गुणसूत्रों पर स्थित**; एंजाइम व हार्मोन मात्रा नियंत्रित करे' }, { en: '**`Tech 2024 Shift 17 PYQ`** (`Genes located on Chromosomes`!)', hi: '**`Tech 2024 Shift 17 PYQ`** (`जीन गुणसूत्रों पर स्थित होते हैं`!)' }],
        [{ en: '**Enzyme Efficiency Chain**', hi: '**एंजाइम दक्षता व हार्मोन**' }, { en: 'Efficient protein builds ample growth hormone -> **Tall**; mutant gene -> less efficient -> **Short**', hi: 'दक्ष एंजाइम से अधिक पादप हार्मोन → **लंबा**; परिवर्तित जीन से कम → **बौना**' }, { en: 'Explains molecular link between **Gene & Phenotype**', hi: 'जीन और दृश्य शारीरिक गुण के बीच का रासायनिक पुल' }, { en: 'NCERT **Sec 8.2.3** conceptual classic!', hi: 'NCERT **भाग 8.2.3** मुख्य अवधारणा!' }],
        [{ en: '**Chromosomes & Meiosis**', hi: '**गुणसूत्र व अर्द्धसूत्री विभाजन**' }, { en: 'Separate independent DNA pieces (`2 copies/body cell`) -> **Meiosis** halves to 1 copy/gamete', hi: 'स्वतंत्र DNA इकाइयाँ (`हर जोड़े का 1 गुणसूत्र युग्मक में` — **अर्द्धसूत्री विभाजन**)' }, { en: 'Permits **independent assortment (`9:3:3:1`)** & restores **46 in Zygote (`Ex Q4`)**!', hi: 'स्वतंत्र वंशागति व युग्मनज में **पुनः `46` (`23 जोड़े`) गुणसूत्र स्थिर**!' }, { en: '**`Tech 2024 Shift 19 PYQ`** (`Meiosis halves chromosomes`) & **Ex Q4**', hi: '**`Tech 2024 Shift 19 PYQ`** (`अर्द्धसूत्री विभाजन गुणसूत्र आधे करे`) व **अभ्यास Q4**' }],
      ],
    },
    {
      id: 'tbl-8-4',
      title: {
        en: 'Sex Determination Mechanisms Compared: Genetic (`Human XX/XY`) vs Environmental / Snail (`Sec 8.2.4`)',
        hi: 'विभिन्न जीवों में लिंग निर्धारण तुलना: मानव (`XX/XY`) बनाम सरीसृप ताप व घोंघा (`भाग 8.2.4`)',
      },
      headers: {
        en: ['Organism Group', 'Determining Factor / Chromosomes', 'Outcome / Ratio', 'NCERT p.145 & PYQ Insight'],
        hi: ['जीव वर्ग', 'निर्धारक कारक / गुणसूत्र', 'परिणाम व अनुपात', 'NCERT पृ. 145 व परीक्षा नोट'],
      },
      rows: [
        [{ en: '**Humans (`मानव`, Fig 8.6)**', hi: '**मानव (`चित्र 8.6`)**' }, { en: '**22 matching pairs + 1 Sex pair (`Female XX` / `Male XY` small Y)**', hi: '**22 समान जोड़े + `1` लिंग जोड़ा (`स्त्री XX` / `पुरुष XY`)**' }, { en: 'Mother always gives `X`; Father **`X → Girl (50%)`** | **`Y → Boy (50%)`**', hi: 'माँ सदैव `X` दे; **पिता `X → लड़की 50%`, पिता `Y → लड़का 50%`**!' }, { en: '**`Tech 2024 Shift 9 PYQ`** (`1 pair of sex chromosomes`) & **p.146 Q4**', hi: '**`Tech 2024 Shift 9 PYQ`** (`1 जोड़ा लिंग गुणसूत्र`) व **पृ. 146 Q4**' }],
        [{ en: '**Certain Reptiles (`सरीसृप`)**', hi: '**कुछ सरीसृप**' }, { en: '**Incubation Temperature** of fertilised eggs (`Environmental`)', hi: 'निषेचित अंडों के **ऊष्मायन तापमान** पर निर्भर (`पर्यावरणीय`)' }, { en: 'Warm vs cool egg temperature determines Male/Female', hi: 'अंडे के ताप अनुसार नर या मादा बनता (`गैर-आनुवंशिक`)' }, { en: 'Direct proof environment alone can control sex!', hi: 'पर्यावरण पर पूर्ण निर्भरता का उदाहरण (`पृ. 145`)' }],
        [{ en: '**Snail (`घोंघा`)**', hi: '**घोंघा (`Snail`)**' }, { en: '**Dynamic Sex Change** (`NOT genetically fixed!`)', hi: '**जीवन में अपना लिंग बदल सकता है** (`आनुवंशिक पूर्व-निर्धारण नहीं!`)' }, { en: 'Can switch sex in response to life conditions', hi: 'आनुवंशिक गुणसूत्र से स्थायी बंधन नहीं' }, { en: '**`Tech 2024 Shift 15 PYQ`** (`NO genetically predetermined sex = Snail`!)', hi: '**`Tech 2024 Shift 15 PYQ`** (`आनुवंशिक लिंग निर्धारण नहीं = घोंघा`!)' }],
      ],
    },
    {
      id: 'tbl-8-5',
      title: {
        en: 'NCERT Concept Puzzle Diagnostic Sheet: Trait `10% vs 60%`, Blood Group `A × O = O` & `Ex Q1/Q2`',
        hi: 'NCERT तार्किक प्रश्न समाधान: `10% vs 60%` लक्षण, `A × O → O` रुधिर वर्ग (`Q3`) एवं अभ्यास `Q1–Q2`',
      },
      headers: {
        en: ['NCERT Puzzle / Question', 'Given Clue in Problem', 'Exact Genetic Deduction', 'Correct Exam Conclusion'],
        hi: ['NCERT पहेली / प्रश्न', 'प्रश्न में दिया गया आँकड़ा', 'सटीक आनुवंशिक विश्लेषण', 'सही परीक्षा निष्कर्ष'],
      },
      rows: [
        [{ en: '**p.142 Q1 (`A 10% vs B 60%`)**', hi: '**पृ. 142 Q1 (`10% vs 60%`)**' }, { en: 'Asexual species: Trait A = `10%`, Trait B = `60%`', hi: 'अलैंगिक आबादी में लक्षण A = `10%`, लक्षण B = `60%`' }, { en: 'Asexual lines copy mutations continuously across generations', hi: 'अधिक पुराना गुण अधिक पीढ़ियों में फैलता है' }, { en: '**Trait B arose EARLIER** than rare Trait A!', hi: '**लक्षण B (`60%`) पहले उत्पन्न हुआ होगा!**' }],
        [{ en: '**p.146 Q3 (`Blood Group A × O`)**', hi: '**पृ. 146 Q3 (`रुधिर A × O → पुत्री O`)**' }, { en: 'Man (`A`) × Woman (`O`) -> Daughter has **`O`**', hi: 'पिता `A` व माता `O` की पुत्री का रक्त वर्ग `O`' }, { en: 'If A is dominant (`Iᴬi × ii`), `50%` children get `O`; if O were dominant (`IᴬIᴬ/i`), `O` also appears!', hi: 'दोनों ही दशाओं (A प्रभावी हो या O प्रभावी) में `O` पुत्री संभव है!' }, { en: '**NO — Information is NOT enough** to tell whether A or O is dominant (`though in reality A dominates O`)!', hi: '**नहीं — केवल यह सूचना कौन प्रभावी है बताने के लिए अपर्याप्त है!**' }],
        [{ en: '**Ex Q2 (`Light Eyes Inheritance`)**', hi: '**अभ्यास Q2 (`हल्की आँखें`)**' }, { en: 'Parents with light eyes have children with light eyes', hi: 'हल्के रंग की आँखों वाले जनकों के बच्चे की आँखें भी हल्की' }, { en: 'Both `LL × LL` (dominant) OR `ll × ll` (recessive) yield matching light-eyed kids!', hi: 'प्रभावी हो या अप्रभावी — दोनों में जनक समान संतति संभव है!' }, { en: '**CANNOT decide dominance** from this alone without knowing other parent crosses!', hi: 'केवल इस सूचना से प्रभावी या अप्रभावी कहना **संभव नहीं**!' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.142 Q1',
      q: { en: 'If a trait A exists in `10%` of a population of an asexually reproducing species and a trait B exists in `60%` of the same population, which trait is likely to have arisen earlier?', hi: 'यदि एक `लक्षण-A` अलैंगिक प्रजनन वाली समष्टि के `10%` सदस्यों में पाया जाता है तथा `लक्षण-B` उसी समष्टि में `60%` जीवों में पाया जाता है, तो कौन-सा लक्षण पहले उत्पन्न हुआ होगा?' },
      a: { en: '**Trait B (`60%`) arose earlier!** In an asexually reproducing population (`Fig 8.1`), newly arising variants copy identically to descendants — so an older trait has multiplied across far more generations reaching **`60%` vs newer `10%` Trait A**.', hi: '**`लक्षण-B` (`60%`) पहले उत्पन्न हुआ होगा!** अलैंगिक समष्टि में नए उत्पन्न लक्षण पीढ़ी-दर-पीढ़ी वंशागत होकर फैलते रहते हैं, अतः **`60%` जनसंख्या में फैला लक्षण B पहले तथा `10%` वाला लक्षण A बाद में** उत्पन्न हुआ!' },
    },
    {
      num: 'p.142 Q2',
      q: { en: 'How does the creation of variations in a species promote survival?', hi: 'विभिन्नताओं के उत्पन्न होने से किसी स्पीशीज का अस्तित्व किस प्रकार बढ़ जाता है?' },
      a: { en: 'Environmental conditions (`temperature, water availability, disease`) shift unpredictably. Variations give different individuals distinct survival advantages — **heat-tolerant bacterial variants survive sudden warming water (`p.141`)**, protecting the whole species from extinction!', hi: 'पर्यावरणीय परिवर्तन (`जैसे जल का ताप बढ़ना`) होने पर समष्टि की पूर्व-उपस्थित **उष्ण-प्रतिरोधी विभिन्नताओं वाले जीव जीवित रह जाते हैं (`पृ. 141`)** और स्पीशीज को पूर्णतः विलुप्त होने से बचा लेते हैं!' },
    },
    {
      num: 'p.146 Q1',
      q: { en: 'How do Mendel’s experiments show that traits may be dominant or recessive?', hi: 'मेंडल के प्रयोगों द्वारा कैसे पता चला कि लक्षण प्रभावी अथवा अप्रभावी होते हैं?' },
      a: { en: 'Crossing pure Tall (`TT`) × pure Short (`tt`) pea plants produced **ALL Tall (`Tt`) offspring in F1** (`zero medium plants`) — yet selfing `F1` yielded **`1/4` Short (`tt`) plants in F2 (`3:1`)**! Thus both copies (`T & t`) existed in F1, where **`T` expressed even in single copy (`Dominant`)** while **`t` expressed ONLY when both copies matched (`Recessive`)** (`p.143`).', hi: 'मेंडल ने जब शुद्ध लंबे (`TT`) व बौने (`tt`) मटर का संकरण कराया, तो **F1 में सभी पौधे लंबे (`Tt`)** हुए, पर F1 स्वपरागण से **F2 में `1/4` बौने (`tt`) पौधे (`3:1`) पुनः प्रकट हुए**! इससे सिद्ध हुआ कि **`T` एकल प्रति पर भी व्यक्त होता है (`प्रभावी`)** जबकि **`t` केवल `tt` युग्म में व्यक्त होता है (`अप्रभावी`)**।' },
    },
    {
      num: 'p.146 Q2',
      q: { en: 'How do Mendel’s experiments show that traits are inherited independently?', hi: 'मेंडल के प्रयोगों से कैसे पता चला कि विभिन्न लक्षण स्वतंत्र रूप से वंशानुगत होते हैं?' },
      a: { en: 'In Mendel’s **Dihybrid Cross (`Fig 8.5`: Tall/Round × Short/Wrinkled or `RRYY × rryy`)**, all F1 plants showed dominant combination (`Tall Round / Round Yellow`), YET selfed F2 offspring produced **`9:3:3:1` INCLUDING totally NEW non-parental combinations** (`Tall-Wrinkled` & `Short-Round`; `Round-Green 108` & `Wrinkled-Yellow 101`) — proving shape and height/colour traits segregate **independently**!', hi: 'जब मेंडल ने गोल-पीले (`RRYY`) व झुर्रीदार-हरे (`rryy`) बीजों वाले पौधों का द्विसंकर क्रॉस (`चित्र 8.5`) कराया, तो **F2 पीढ़ी में `9:3:3:1` अनुपात के साथ नए असंयोजित जोड़े (`गोल-हरे 108` व `झुर्रीदार-पीले 101`) भी प्रकट हुए** — जो सिद्ध करते हैं कि दो लक्षण एक-दूसरे से **स्वतंत्र रूप से वंशानुगत** होते हैं!' },
    },
    {
      num: 'p.146 Q3',
      q: { en: 'A man with blood group A marries a woman with blood group O and their daughter has blood group O. Is this information enough to tell you which of the traits — blood group A or O — is dominant? Why or why not?', hi: 'एक ‘A-रुधिर वर्ग’ वाला पुरुष एक स्त्री जिसका रुधिर वर्ग ‘O’ है, से विवाह करता है। उनकी पुत्री का रुधिर वर्ग ‘O’ है। क्या यह सूचना पर्याप्त है यदि आपसे कहा जाए कि कौन-सा विकल्प लक्षण रुधिर वर्ग ‘A’ अथवा ‘O’ प्रभावी लक्षण हैं? अपने उत्तर का स्पष्टीकरण दीजिए।' },
      a: { en: '**NO — This single family case is NOT enough!** Suppose **A is dominant (`Father = Iᴬ i`, `Mother = ii`)**: daughter can easily get `i` from father + `i` from mother = **O (`50% odds`)**. Conversely, even if **O were dominant (`Father = aa`, `Mother = O_`)**, offspring could still receive O! Without multi-generation pedigree data or knowledge of allele `A` dominance (`which in biology IS dominant over recessive i/O`), **one cannot prove dominance from this clue alone**.', hi: '**नहीं — यह सूचना पर्याप्त नहीं है!** यदि **A प्रभावी हो (`पिता Iᴬi` व `माता ii`)**, तो पिता से अप्रभावी `O` जीन व माता से `O` मिलकर पुत्री `O` हो सकती है; और यदि `O` प्रभावी होता तब भी माता-पिता से `O` संतान संभव थी। अतः केवल एक संतान के आधार पर यह तय नहीं किया जा सकता (`वास्तव में रक्त वर्ग `A` प्रभावी व `O` अप्रभावी है`)!' },
    },
    {
      num: 'p.146 Q4',
      q: { en: 'How is the sex of the child determined in human beings?', hi: 'मानव में बच्चे का लिंग निर्धारण कैसे होता है?' },
      a: { en: 'Humans carry `22` autosome pairs + **1 Sex Chromosome pair**: **Females have `XX` (`all eggs carry X`)** while **Males have `XY` (`half sperms carry X, half carry Y`)** (`Fig 8.6`). Every baby gets an `X` from its Mother -> **if Father’s `X` sperm fertilises the egg -> `XX` Girl (`50%`)**; **if Father’s `Y` sperm fertilises it -> `XY` Boy (`50%`)**. Thus **Father’s sperm chromosome determines the child’s sex**!', hi: 'मानव में `22` जोड़े समान गुणसूत्रों संग `1` जोड़ा लिंग सूत्र होता है — **स्त्री में `XX`** व **पुरुष में `XY`** (`चित्र 8.6`)। सभी बच्चों को माता से सदैव `X` मिलता है; **यदि पिता से `X` शुक्राणु मिले तो `XX` लड़की (`50%`), व यदि पिता से `Y` मिले तो `XY` लड़का (`50%`)** बनता है — अर्थात बच्चे का लिंग पिता के गुणसूत्र से तय होता है!' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'A Mendelian experiment consisted of breeding tall pea plants bearing violet flowers with short pea plants bearing white flowers. The progeny all bore violet flowers, but almost half of them were short. This suggests that the genetic make-up of the tall parent can be depicted as:\n(a) `TTWW`  (b) `TTww`  (c) `TtWW`  (d) `TtWw`', hi: 'मेंडल के एक प्रयोग में लंबे मटर के पौधे जिनके बैंगनी पुष्प थे, का संकरण बौने पौधों जिनके सफेद पुष्प थे, से कराया गया। इनकी संतति के सभी पौधों में पुष्प बैंगनी रंग के थे, परंतु उनमें से लगभग आधे बौने थे। इससे कहा जा सकता है कि लंबे जनक पौधों की आनुवंशिक रचना निम्नलिखित थी —\n(a) `TTWW`  (b) `TTww`  (c) `TtWW`  (d) `TtWw`' },
      a: { en: '**Correct Answer: `(c)` `TtWW` (`jhsc1an Verified ✓`)**!\n• All progeny had **violet flowers** (`while other parent was white `ww``) -> Tall parent MUST pass dominant `W` in every gamete = homozygous **`WW`**!\n• Half progeny were **short (`tt`)** (`other parent was `tt``) -> Tall parent MUST also carry one recessive `t` allele = heterozygous **`Tt`** -> Total genotype = **`TtWW`**!', hi: '**सही उत्तर: `(c)` `TtWW` (`उत्तरमाला सत्यापित ✓`)**!\n• संतति के **सभी फूल बैंगनी** थे (जबकि दूसरा जनक सफेद `ww` था) → लंबे जनक के पास दोनों प्रभावी **`WW`** होने चाहिए।\n• लगभग **आधे पौधे बौने (`tt`)** हुए → लंबे जनक में भी एक `t` जीन अवश्य है अर्थात **`Tt`**! अतः कुल रचना = **`TtWW`**!' },
    },
    {
      num: '2',
      q: { en: 'A study found that children with light-coloured eyes are likely to have parents with light-coloured eyes. On this basis, can we say anything about whether the light eye colour trait is dominant or recessive? Why or why not?', hi: 'एक अध्ययन से पता चला कि हल्के रंग की आँखों वाले बच्चों के जनक (`माता-पिता`) की आँखें भी हल्के रंग की होती हैं। इसके आधार पर क्या हम कह सकते हैं कि आँखों के हल्के रंग का लक्षण प्रभावी है अथवा अप्रभावी? अपने उत्तर की व्याख्या कीजिए।' },
      a: { en: '**NO — We CANNOT determine dominance from this alone (`p.147`)!** Why? **(1)** If light eyes were **recessive (`ll`)**, both parents (`ll × ll`) would pass `l` giving `100%` light-eyed kids (`ll`)! **(2)** Even if light eyes were **dominant (`LL × LL` or `LL × ll`)**, children would STILL inherit `L` showing light eyes! Two-generation crosses with dark-eyed parents (`contrasting traits`) are needed to prove which allele dominates.', hi: '**नहीं — इसके आधार पर प्रभावी या अप्रभावी नहीं बता सकते!** यदि हल्का रंग **अप्रभावी (`ll`)** है तो `ll × ll` जनकों के बच्चे भी हल्के (`ll`) होंगे; और यदि हल्का रंग **प्रभावी (`LL`)** है तब भी बच्चों में हल्का रंग दिखेगा! जब तक दोनों विपरीत रंगों के बीच F1/F2 क्रॉस न देखा जाए, निर्णय संभव नहीं।' },
    },
    {
      num: '3',
      q: { en: 'Outline a project which aims to find the dominant coat colour in dogs.', hi: 'कुत्ते की खाल का प्रभावी रंग ज्ञात करने के उद्देश्य से एक प्रोजेक्ट बनाइए।' },
      a: { en: '**Step 1**: Select two pure-breeding contrasting coat-colour dogs (`e.g. homozygous Black coat male × homozygous White coat female`, keeping true breeding history across grandparents). **Step 2 (`F1 Cross`)**: Breed them and observe coat colour of **ALL F1 puppies** — whichever coat colour appears **uniformly across 100% of F1 pups** (`e.g. Black`) is **DOMINANT**! **Step 3 (`F2 Verification`)**: Interbreed `F1` dogs -> **recessive coat (`White`) reappears in `~1/4` (`3:1`) F2 puppies**, confirming dominance cleanly!', hi: '**चरण 1**: दो शुद्ध नस्ल के विपरीत रंग वाले कुत्ते चुनें (`जैसे शुद्ध काला × शुद्ध सफेद`)। **चरण 2 (`F1 क्रॉस`)**: संकरण से प्राप्त **F1 पीढ़ी के सभी पिल्लों** का रंग देखें — जो रंग `100%` संतति में दिखे (जैसे काला), वह **प्रभावी लक्षण** होगा। **चरण 3 (`F2 सत्यापन`)**: F1 संतति के प्रजनन पर `3:1` में 1/4 पिल्ले पुनः अप्रभावी (`सफेद`) रंग के दिखने से पुष्टि हो जाएगी!' },
    },
    {
      num: '4',
      q: { en: 'How is the equal genetic contribution of male and female parents ensured in the progeny?', hi: 'संतति में नर एवं मादा जनकों द्वारा आनुवंशिक योगदान में बराबर की भागीदारी किस प्रकार सुनिश्चित की जाती है?' },
      a: { en: 'Somatic cells hold paired chromosomes (`46 = 23 pairs` in humans). Before sexual reproduction, **Meiosis (`अर्द्धसूत्री विभाजन`) cuts chromosome count neatly in HALF** (`putting exact ONE chromosome of each pair` — `23` autosomes/sex inside egg & sperm, **Sec 8.2.3**). Fusion during fertilisation combines **`23` maternal + `23` paternal = `46` chromosomes**, guaranteeing **exact 50% genetic contribution from each parent**!', hi: 'लैंगिक जनन से पूर्व जनन कोशिकाओं (`युग्मकों`) में **अर्द्धसूत्री विभाजन (`Meiosis`)** द्वारा प्रत्येक गुणसूत्र जोड़े का **केवल एक गुणसूत्र (`मानव में 46 → 23`)** जाता है (`भाग 8.2.3`)। निषेचन पर माता के `23` व पिता के `23` गुणसूत्र मिलकर युग्मनज में पुनः **`46` (`23 जोड़े`)** स्थापित करते हैं — जिससे दोनों जनकों की **ठीक 50%-50% आनुवंशिक भागीदारी** सुनिश्चित होती है!' },
    },
  ],
  flashcards: [
    { front: { en: 'Asexual Sugarcane vs Sexual Diversity & Trait `10% vs 60%` (`p.142`)?', hi: 'गन्ने में कम विभिन्नता एवं `10%` बनाम `60%` लक्षण आयु नियम (`पृ. 142`)?' }, back: { en: 'Asexual clones (`Sugarcane`) hold tiny DNA copying errors; Sexual gives max variety. In asexual group, **`60%` trait arose EARLIER** than `10%` trait!', hi: 'अलैंगिक (`गन्ना`) में सूक्ष्म त्रुटियाँ, लैंगिक में अधिकतम विविधता। **`60%` लक्षण `10%` लक्षण से पहले उत्पन्न** हुआ!' } },
    { front: { en: 'Mendel’s Dominant vs Recessive Pea Traits (`Tech 3, 6, 21`)?', hi: 'मेंडल के मटर पौधे में प्रमुख प्रभावी (`Dominant`) बनाम अप्रभावी लक्षण?' }, back: { en: '**Dominant**: **Tall (`T`)**, **Round (`R`)**, **Yellow (`Y`)**, **Violet flower (`W`)** | **Recessive**: **Dwarf (`t`)**, **Wrinkled (`r`)**, **Green (`y`)**, **White (`w`)**!', hi: '**प्रभावी**: **लंबा (`T`), गोल (`R`), पीला (`Y`), बैंगनी फूल (`W`)** | **अप्रभावी**: **बौना (`t`), झुर्रीदार (`r`), हरा (`y`), सफेद (`w`)**!' } },
    { front: { en: 'Mendel Monohybrid F1 & F2 Phenotypic + Genotypic Ratios (`Fig 8.3`)?', hi: 'एकसंकर संकरण में F1 परिणाम तथा F2 दृश्य व जीनी (`क्र. 8.2`) अनुपात?' }, back: { en: '**F1**: **100% Tall `Tt`** (`zero medium blends!`) | **F2**: **`3 Tall : 1 Short`** Phenotype & **`1 TT : 2 Tt : 1 tt`** Genotype (`Act 8.2`)!', hi: '**F1**: **सभी लंबे (`Tt`)** | **F2**: दृश्य **`3 : 1`** व जीन रचना **`1 TT : 2 Tt : 1 tt`** (`क्र. 8.2`)!' } },
    { front: { en: 'Dihybrid `RRYY × rryy` F2 Count (`Fig 8.5`) & Conclusion?', hi: 'द्विसंकर क्रॉस (`556 बीज`, चित्र 8.5) अनुपात व मुख्य निष्कर्ष?' }, back: { en: '**`315 : 108 : 101 : 32` (`9 : 3 : 3 : 1`)**! New combos (`108` Round Green + `101` Wrinkled Yellow) prove traits **inherit INDEPENDENTLY**!', hi: '**`315 : 108 : 101 : 32` (`9 : 3 : 3 : 1`)**! नए संयोजन सिद्ध करते हैं कि **लक्षण स्वतंत्र वंशागत** होते हैं!' } },
    { front: { en: 'NCERT Back Ex Q1 Tall Violet Genotype (`TtWW`) Proof?', hi: 'अभ्यास Q1: लंबे-बैंगनी × बौने-सफेद से सभी बैंगनी पर आधे बौने → जीन रचना?' }, back: { en: '**`TtWW` (`c`)**! Homozygous `WW` makes 100% offspring violet; heterozygous `Tt` produces 50% tall (`Tt`) + 50% short (`tt`)!', hi: '**`TtWW` (`c`)**! सभी बैंगनी हेतु `WW` व आधे बौने होने हेतु `Tt` होना अनिवार्य है!' } },
    { front: { en: 'How Genes Actually Build Tall vs Dwarf Plants (`Sec 8.2.3`)?', hi: 'जीन (`Gene`) पौधे की लंबाई कैसे नियंत्रित करता है (`भाग 8.2.3`)?' }, back: { en: '**Gene** (`DNA segment coding protein`) builds **Enzyme -> produces Plant Hormone**. Altered gene reduces enzyme efficiency -> less hormone -> **Dwarf plant**!', hi: '**जीन (`प्रोटीन कोड DNA`)** से **एंजाइम → पादप हार्मोन** बनता है; जीन बदलने से कम दक्ष एंजाइम → कम हार्मोन → **बौना पौधा**!' } },
    { front: { en: 'Why Multiple Chromosomes & What Ensures 50:50 Parent Contribution?', hi: 'स्वतंत्र गुणसूत्र क्यों व दोनों जनकों की बराबर हिस्सेदारी कैसे तय होती (`Ex Q4`)?' }, back: { en: 'Genes sit on separate **Chromosomes** (`so traits assort independently`)! **Meiosis (`अर्द्धसूत्री`)** puts **1 copy/pair (`n=23`)** per gamete -> Zygote restores **`46` (`Ex Q4`)**!', hi: 'स्वतंत्र वंशागति हेतु अलग **गुणसूत्र** हैं; **अर्द्धसूत्री विभाजन** से हर युग्मक में `23` (`आधे`) जाकर युग्मनज में पुनः **`46`** हो जाते हैं!' } },
    { front: { en: 'Humans: Autosome Pairs + Sex Chromosome Pair (`Tech Shift 9`)?', hi: 'मानव में अलिंग व लिंग गुणसूत्र के कितने जोड़े होते हैं?' }, back: { en: '**`22` matched autosome pairs + `1` Sex Chromosome Pair** (`Female XX` perfect pair; `Male XY` shorter Y)!', hi: '**`22` जोड़े अलिंग गुणसूत्र + `1` जोड़ा लिंग गुणसूत्र** (`स्त्री XX` पूर्ण, `पुरुष XY` अपूर्ण छोटा Y)!' } },
    { front: { en: 'Human Baby Sex Rule (`Fig 8.6`) vs Non-Genetic Sex (`Snail / Reptiles`)?', hi: 'मानव शिशु लिंग निर्धारण (`पिता X/Y`) बनाम घोंघा व सरीसृप अपवाद (`पृ. 145`)?' }, back: { en: 'Mother always passes **`X`**; Father **`X → XX Girl` | `Y → XY Boy` (`50%`)**. **Reptiles**: egg incubation temperature; **Snail (`Shift 15`)**: changes sex!', hi: 'माँ से सदैव `X`; **पिता के `X` से लड़की, `Y` से लड़का**। **सरीसृप**: अंडे का ताप; **घोंघा (`Shift 15`)**: लिंग परिवर्तन!' } },
    { front: { en: 'Famous Genetics Milestones (`Hershey-Chase, DNA Full Form, Study Name`)?', hi: 'DNA पूरा नाम, हर्शे-चेज़ (`1952`) व आनुवंशिक अध्ययन क्या कहलाता है?' }, back: { en: '**DNA** = **Deoxyribonucleic acid**; Study of heredity & variation = **Genetics**; **Hershey & Chase (`1952`)** proved **DNA** is genetic material!', hi: '**DNA** = **डिऑक्सीराइबोन्यूक्लिक अम्ल**; अध्ययन = **आनुवंशिकी (`Genetics`)**; **हर्शे-चेज़ (`1952`)** ने DNA को आनुवंशिक सिद्ध किया!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-b8-1',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.2): Mendel Contrasting Traits',
      question: {
        en: 'Mendel used contrasting visible characters of garden peas. Which option appropriately fills the blank?\nA. Round / Wrinkled seeds\nB. Tall / Short plants\nC. White / _______ flowers',
        hi: 'मेंडल ने मटर के पौधे के अनेक विपर्यासी (`विकल्पी`) लक्षणों का अध्ययन किया। कौन-सा विकल्प रिक्त स्थान को उपयुक्त रूप से भरता है?\nA. गोल/झुर्रीदार बीज | B. लंबे/बौने पौधे | C. सफेद/_______ फूल',
      },
      options: { en: ['Yellow', 'Pink', 'Green', 'Violet'], hi: ['पीला', 'गुलाबी', 'हरा', 'बैंगनी'] },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `p.142`**: Mendel’s listed contrasting flower colours in garden pea are **White / Violet (`सफेद / बैंगनी`)** — Violet is dominant (`W`)!',
        hi: 'सटीक `पृ. 142`: मेंडल ने मटर के विपरीत पुष्प रंग **सफेद बनाम बैंगनी (`White / Violet`)** चुने (`बैंगनी प्रभावी लक्षण है`)।',
      },
    },
    {
      id: 'pyq-b8-2',
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Sec 8.2.3): Zygote Chromosome Count',
      question: {
        en: 'A scientist wants to ensure that a human zygote formed in a laboratory dish has the correct number of chromosomes. Number of chromosomes this zygote should have are:',
        hi: 'एक वैज्ञानिक सुनिश्चित करना चाहता है कि प्रयोगशाला डिश में विकसित मानव युग्मनज में गुणसूत्रों की संख्या सही हो। इस युग्मनज में गुणसूत्रों की संख्या कितनी होनी चाहिए?',
      },
      options: { en: ['69', '23', '46', '92'], hi: ['69', '23', '46', '92'] },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 8.2.3`**: Meiosis halves parental gametes (`23 egg + 23 sperm`), and fertilisation restores normal human **diploid count = `46` (`23 pairs`)** in zygote!',
        hi: '`भाग 8.2.3`: युग्मकों के `23 + 23` गुणसूत्र निषेचन पर जुड़कर मानव युग्मनज में सामान्य संख्या **`46` (`23 जोड़े`)** पुनः स्थापित करते हैं।',
      },
    },
    {
      id: 'pyq-b8-3',
      examTag: 'RRB Group D 2025 Shift 39',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Sec 8.1): DNA Full Form',
      question: {
        en: 'DNA, which is also called __________ acid, is the hereditary material that carries genetic information in cells.',
        hi: 'डीएनए (`DNA`), जिसे __________ अम्ल भी कहा जाता है, आनुवंशिक पदार्थ है जो कोशिकाओं में आनुवंशिक सूचना का वहन करता है।',
      },
      options: {
        en: ['Denatured', 'Di-ribonucleic', 'Decarbonated', 'Deoxyribonucleic'],
        hi: ['डीनेचर्ड (Denatured)', 'डी-राइबोन्यूक्लिक (Di-ribonucleic)', 'डीकार्बोनेटेड (Decarbonated)', 'डीऑक्सीराइबोन्यूक्लिक (Deoxyribonucleic)'],
      },
      correctIndex: 3,
      solution: {
        en: '**DNA = Deoxyribonucleic acid** — encodes cellular protein recipes (`genes`) and passes genetic copies across generations.',
        hi: '**DNA = डिऑक्सीराइबोन्यूक्लिक अम्ल (`Deoxyribonucleic acid`)** कोशिकाओं में प्रोटीन निर्माण व आनुवंशिक सूचना का आधार है।',
      },
    },
    {
      id: 'pyq-b8-4',
      examTag: 'RRB Group D 2025 Shift 41',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Sec 8.2.3): Control Centre & Genetic Material',
      question: {
        en: 'Which structure in an animal cell acts as the control centre and contains the genetic material?',
        hi: 'जंतु कोशिका में कौन-सी संरचना नियंत्रण केंद्र के रूप में कार्य करती है और उसमें आनुवंशिक पदार्थ होता है?',
      },
      options: {
        en: ['Endoplasmic reticulum', 'Vacuole', 'Nucleus', 'Ribosome'],
        hi: ['अंतर्द्रव्यी जालिका', 'रसधानी', 'केंद्रक', 'राइबोसोम'],
      },
      correctIndex: 2,
      solution: {
        en: 'Nuclear chromosomes inside the eukaryotic **Nucleus (`केंद्रक`)** contain genomic **DNA**, regulating protein synthesis & heredity (`Ch 2 & Ch 8`).',
        hi: '**केंद्रक (`Nucleus`)** में गुणसूत्रों के रूप में आनुवंशिक पदार्थ `DNA` उपस्थित होता है जो कोशिका की समस्त क्रियाएँ नियंत्रित करता है।',
      },
    },
    {
      id: 'pyq-b8-5',
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Genetics & Ancestry): DNA Sequence Comparison',
      question: {
        en: 'Researchers studying genetic similarity in hornbill species are most likely to use which characteristic for classification?',
        hi: 'हॉर्नबिल प्रजातियों में आनुवंशिक समानता का अध्ययन करने वाले शोधकर्ता द्वारा वर्गीकरण हेतु किस अभिलक्षण का उपयोग करने की सर्वाधिक संभावना है?',
      },
      options: {
        en: ['Diet composition', 'DNA sequence comparison', 'Nesting site location', 'Beak shape and size'],
        hi: ['आहार संरचना', 'DNA अनुक्रम की तुलना', 'घोंसले बनाने का स्थान', 'चोंच की आकृति और आमाप'],
      },
      correctIndex: 1,
      solution: {
        en: 'True evolutionary & genetic relatedness is measured directly at the molecular hereditary level via **DNA sequence comparison**!',
        hi: 'सटीक आनुवंशिक समानता एवं वंश-संबंधों की पहचान केवल **DNA अनुक्रम की तुलना (`DNA sequencing`)** द्वारा की जाती है।',
      },
    },
    {
      id: 'pyq-b8-6',
      examTag: 'RRB Group D 2025 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Genetics): Divergent DNA Reclassification',
      question: {
        en: 'After a genetic study, two bacteria previously grouped together are found to have highly divergent DNA. What is the most likely modern classification consequence?',
        hi: 'एक आनुवंशिक अध्ययन के बाद, पहले एक साथ समूहित किए गए दो जीवाणुओं के DNA में अत्यधिक भिन्नता पाई जाती है। आधुनिक वर्गीकरण के अनुसार, कौन-सा परिणाम सबसे अधिक संभावित है?',
      },
      options: {
        en: ['They are merged as one species', 'They may be reclassified into separate domains or groups', 'They remain in the same traditional group', 'Their similarity is confirmed by traditional traits'],
        hi: ['वे एक ही जाति के रूप में विलीन हो जाएंगे', 'उन्हें अलग-अलग प्रक्षेत्र (domains) या समूहों में पुनर्वर्गीकृत किया जा सकता है', 'वे उसी पारंपरिक समूह में बने रहेंगे', 'पारंपरिक लक्षणों द्वारा उनकी समानता की पुष्टि होती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Modern genetics places organisms with strongly **divergent DNA sequences** into **separate domains or clades** despite superficial appearance similarities.',
        hi: 'DNA अनुक्रमों में अत्यधिक भिन्नता होने पर उन जीवाणुओं को **अलग-अलग प्रक्षेत्रों या समूहों में पुनर्वर्गीकृत** किया जाता है।',
      },
    },
    {
      id: 'pyq-b8-7',
      examTag: 'RRB Group D 2025 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Genetic Payload): Sperm Head DNA',
      question: {
        en: 'The __________ of a sperm cell contains the genetic material required for fertilisation.',
        hi: 'शुक्राणु कोशिका के __________ में निषेचन के लिए आवश्यक आनुवंशिक पदार्थ होता है।',
      },
      options: { en: ['Head', 'Tail', 'Fluid', 'Membrane'], hi: ['शीर्ष (Head)', 'पूँछ (Tail)', 'तरल (Fluid)', 'झिल्ली (Membrane)'] },
      correctIndex: 0,
      solution: {
        en: 'The sperm **Head (`शीर्ष`)** houses the haploid nucleus carrying **23 paternal chromosomes (`including X or Y` — Sec 8.2.4)**, while tail swims!',
        hi: 'शुक्राणु के **शीर्ष (`Head`)** स्थित केंद्रक में पिता से आने वाले **`23` गुणसूत्र (`X` या `Y`)** होते हैं!',
      },
    },
    {
      id: 'pyq-b8-8',
      examTag: 'RRB Group D 2025 Shift 26',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 8 (Genetic Similarity): DNA Reassignment',
      question: {
        en: 'Three microbes were classified together, but DNA sequencing shows two have closer genetic material. Which classification change could this finding suggest?',
        hi: 'तीन सूक्ष्मजीवों को एक साथ वर्गीकृत किया गया था, परंतु DNA अनुक्रमण से पता चलता है कि दो की आनुवंशिक सामग्री में अधिक समानता है। यह निष्कर्ष क्या सुझाव देता है?',
      },
      options: {
        en: ['Grouping by habitat similarities', 'Maintaining previous grouping', 'Ignoring genetic information', 'Reassignment based on DNA similarities'],
        hi: ['पर्यावास समानताओं के आधार पर समूहन', 'पिछले समूहन को बनाए रखना', 'आनुवंशिक जानकारी की उपेक्षा करना', 'DNA समानताओं के आधार पर पुनर्वर्गीकरण'],
      },
      correctIndex: 3,
      solution: {
        en: 'Organisms sharing closer hereditary **DNA sequences** are reassigned together under modern genetic taxonomy.',
        hi: 'अधिक आनुवंशिक समानता रखने वाले जीवों को **DNA समानताओं के आधार पर पुनर्वर्गीकृत** किया जाता है।',
      },
    },
    {
      id: 'pyq-b8-9',
      examTag: 'RRB Group D 2025 Shift 32',
      section: 'General Science',
      subject: 'General Science',
      topic: 'Human Genetics / Gene Mutation',
      question: {
        en: 'A rare genetic disorder causes bone matrix to become fragile leading to frequent fractures. What is the most likely genetic cause?',
        hi: 'किसी दुर्लभ आनुवंशिक विकार के कारण अस्थि का कठोर मैट्रिक्स कम दृढ़ होकर बार-बार अस्थिभंग कराता है। संभावित कारण क्या है?',
      },
      options: {
        en: ['A defect in type I collagen due to mutation in COL1A1 or COL1A2 genes', 'Loss of proteins and sugars in cartilage', 'Decrease in plasma proteins in blood', 'Reduction in calcium and phosphorus only'],
        hi: ['COL1A1 या COL1A2 जीन में उत्परिवर्तन के कारण टाइप I कोलैजन में दोष', 'उपास्थि शर्करा की हानि', 'प्लाज्मा प्रोटीन की कमी', 'रक्त में कैल्शियम कमी'],
      },
      correctIndex: 0,
      solution: {
        en: '**Osteogenesis imperfecta** (`brittle bone`) illustrates NCERT Sec 8.2.3 directly: **mutation in protein-coding `COL1A1/COL1A2` genes** alters collagen protein efficiency & bone strength!',
        hi: 'यह `भाग 8.2.3` (`जीन → प्रोटीन`) का सटीक चिकित्सीय उदाहरण है — `COL1A1/COL1A2` जीन में उत्परिवर्तन से कोलेजन प्रोटीन दोषपूर्ण बन अस्थिभंग कराता है!',
      },
    },
    {
      id: 'pyq-b8-10',
      examTag: 'RRB Group D 2025 Shift 6',
      section: 'Science & Tech Genetics',
      subject: 'General Science',
      topic: 'CRISPR Gene Therapy (Sickle Cell Disease, 2025)',
      question: {
        en: 'In 2025, India launched its first indigenous CRISPR-based gene therapy to combat Sickle Cell Disease. What is the name of this therapy?',
        hi: '2025 में, भारत ने सिकल सेल रोग से निपटने के लिए अपनी पहली स्वदेशी CRISPR-आधारित जीन थेरेपी शुरू की। इस थेरेपी का नाम क्या है?',
      },
      options: {
        en: ["Gene-editing therapy 'JanAushadhi-404'", "Cell therapy 'Raksha-22'", "Gene therapy 'BIRSA 101'", "CRISPR cure 'Arogya-1'"],
        hi: ["जनऔषधि-404", "रक्षा-22", "जीन थेरेपी 'बिरसा 101' (BIRSA 101)", "आरोग्य-1"],
      },
      correctIndex: 2,
      solution: {
        en: '**BIRSA 101** is India’s indigenous CRISPR gene-editing therapy targeting genetic haemoglobin mutation (`Sickle Cell Disease`).',
        hi: '**बिरसा 101 (`BIRSA 101`)** आनुवंशिक सिकल सेल रोग के उपचार हेतु भारत की पहली स्वदेशी CRISPR जीन थेरेपी है।',
      },
    },
    {
      id: 'pyq-b8-11',
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'Science & Policy (Genetics)',
      subject: 'General Science',
      topic: 'UMMID Rare Genetic Disorders Programme',
      question: {
        en: 'What is the name of the programme promoting screening, early intervention and care for rare genetic disorders and genome-based medicine in India?',
        hi: 'दुर्लभ आनुवंशिक विकारों और जीनोम-आधारित सटीक चिकित्सा के लिए प्रारंभिक निदान व स्वास्थ्य सेवा को बढ़ावा देने वाले कार्यक्रम का नाम क्या था?',
      },
      options: { en: ['UMMID', 'UMANG', 'SAKSHAM', 'AYUSH'], hi: ['UMMID (उम्मीद)', 'UMANG (उमंग)', 'SAKSHAM (सक्षम)', 'AYUSH (आयुष)'] },
      correctIndex: 0,
      solution: {
        en: '**UMMID** (`Unique Methods of Management and Treatment of Inherited Disorders`) targets inherited genetic diseases across India.',
        hi: '**UMMID (`उम्मीद`)** भारत में आनुवंशिक विकारों (`Inherited Disorders`) के प्रारंभिक निदान व उपचार का राष्ट्रीय कार्यक्रम है।',
      },
    },
    {
      id: 'pyq-b8-12',
      examTag: 'RRB NTPC UG 2024 (14 Aug 2025 Shift 1)',
      section: 'General Science - Biology',
      subject: 'Biology',
      topic: 'Human Genome Project Base Pairs',
      question: {
        en: 'The Human Genome Project, launched in 1990, had the goal of determining the sequence of how many billion base pairs that make up human DNA?',
        hi: '1990 में शुरू की गई मानव जीनोम प्रोजेक्ट का लक्ष्य मानव DNA को बनाने वाले कितने अरब क्षारक युग्मों के अनुक्रम का निर्धारण करना था?',
      },
      options: { en: ['5.2 billion', '3.0 billion', '2.1 billion', '4.3 billion'], hi: ['5.2 अरब', '3.0 अरब', '2.1 अरब', '4.3 अरब'] },
      correctIndex: 1,
      solution: {
        en: 'Human haploid DNA holds roughly **`3.0 billion` (`~3 × 10⁹`) base pairs**, mapped completely by the Human Genome Project (`1990–2003`).',
        hi: 'मानव जीनोम में लगभग **`3.0 अरब` (`3 × 10⁹`) क्षारक युग्म (`Base pairs`)** होते हैं!',
      },
    },
    {
      id: 'pyq-b8-13',
      examTag: 'RRB NTPC UG 2024 (18 Aug 2025 Shift 3)',
      section: 'General Science - Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 Intro: Genetics Terminology',
      question: {
        en: 'What is the study of heredity and variation called?',
        hi: 'आनुवंशिकता और विविधता के अध्ययन को क्या कहा जाता है?',
      },
      options: { en: ['Evolution', 'Mutation', 'Genetics', 'Biology'], hi: ['विकास', 'उत्परिवर्तन', 'आनुवंशिकी (Genetics)', 'जीव विज्ञान'] },
      correctIndex: 2,
      solution: {
        en: '**Genetics (`आनुवंशिकी`)** is the branch of biology studying **heredity (`वंशागति`)** and **variations (`विविधता`)** (`founded scientifically by Gregor Mendel`).',
        hi: 'जीव विज्ञान की वह शाखा जिसमें **आनुवंशिकता एवं विविधता** का अध्ययन होता है, **आनुवंशिकी (`Genetics`)** कहलाती है!',
      },
    },
    {
      id: 'pyq-b8-14',
      examTag: 'RRB NTPC UG 2024 (08 Aug 2025 Shift 3)',
      section: 'General Science - Biology',
      subject: 'Biology',
      topic: 'Molecular Genetics History: Hershey-Chase 1952',
      question: {
        en: 'When did the Hershey-Chase experiment provide solid evidence that DNA, not proteins, is the genetic material?',
        hi: 'हर्शे-चेज प्रयोग ने यह ठोस साक्ष्य कब प्रदान किया कि प्रोटीन नहीं बल्कि DNA ही आनुवंशिक पदार्थ है?',
      },
      options: { en: ['1957', '1952', '1946', '1950'], hi: ['1957', '1952', '1946', '1950'] },
      correctIndex: 1,
      solution: {
        en: 'In **1952**, Alfred Hershey & Martha Chase used `³²P`-labelled DNA & `³⁵S`-labelled protein phage confirming **DNA alone enters bacteria to direct inheritance**!',
        hi: 'सन् **1952** में हर्शे और चेज़ ने सिद्ध किया कि केवल **DNA (`प्रोटीन नहीं`)** ही वास्तविक आनुवंशिक पदार्थ है!',
      },
    },
    {
      id: 'pyq-b8-15',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.4): Snail Sex Determinism',
      question: {
        en: 'Which of the following organisms has NO genetically predetermined sex?',
        hi: 'निम्नलिखित में से किस जीव में आनुवंशिक रूप से पूर्व निर्धारित लिंग नहीं होता है?',
      },
      options: { en: ['Human', 'Dogs', 'Snail', 'Pigeon'], hi: ['मनुष्य', 'कुत्ता', 'घोंघा (Snail)', 'कबूतर'] },
      correctIndex: 2,
      solution: {
        en: 'Word-for-word **NCERT `Sec 8.2.4` (`p.145`)**: “Some animals like a **few snails (`घोंघे`) can change sex**, indicating that sex is NOT genetically determined in them!”',
        hi: 'सटीक `NCERT पृ. 145`: **घोंघे (`Snails`)** जैसे कुछ प्राणी अपना लिंग बदल सकते हैं, जो दर्शाता है कि इनमें लिंग निर्धारण आनुवंशिक नहीं है!',
      },
    },
    {
      id: 'pyq-b8-16',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec Shift 3)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.3): Location of Genes',
      question: {
        en: 'Genes that control the characteristics of a trait are located on:',
        hi: 'वे जीन जो किसी लक्षण की विशेषताओं को नियंत्रित करते हैं, किस पर स्थित होते हैं?',
      },
      options: {
        en: ['endoplasmic reticulum', 'lysosome', 'vacuoles', 'chromosomes'],
        hi: ['अंतर्द्रव्यी जालिका (endoplasmic reticulum)', 'लाइसोसोम (lysosome)', 'रिक्तिकाएँ (vacuoles)', 'गुणसूत्र (chromosomes)'],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `Sec 8.2.3` (`p.144`)**: Gene sets are arranged as independent DNA molecules called **Chromosomes (`गुणसूत्र`)**!',
        hi: 'सटीक `पृ. 144`: लक्षणों को नियंत्रित करने वाले **जीन गुणसूत्रों (`Chromosomes`)** पर स्थित होते हैं!',
      },
    },
    {
      id: 'pyq-b8-17',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.4): Human Sex Chromosome Pairs',
      question: {
        en: 'How many pairs of sex chromosomes are present in humans?',
        hi: 'मनुष्य में लिंग गुणसूत्रों के कितने युग्मक (`pairs`) उपस्थित होते हैं?',
      },
      options: { en: ['One pair', 'Two pairs', 'Twenty two pairs', 'Forty six pairs'], hi: ['एक युग्मक (One pair)', 'दो युग्मक', 'बाईस युग्मक', 'छियालीस युग्मक'] },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.145`**: Humans have `22` pairs of matching autosomes + **ONE PAIR (`1 pair`) of Sex Chromosomes (`XX` in female, `XY` in male)**!',
        hi: 'सटीक `पृ. 145`: मानव में `22` जोड़े सामान्य गुणसूत्र व **केवल `1 जोड़ा` लिंग गुणसूत्र (`स्त्री XX`, `पुरुष XY`)** होता है!',
      },
    },
    {
      id: 'pyq-b8-18',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec Shift 2)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'Organelle DNA & Ribosomes',
      question: {
        en: 'Which of the following cell organelles has its own DNA and ribosomes?',
        hi: 'निम्नलिखित में से किस कोशिकांग का अपना डीएनए (`DNA`) और राइबोसोम होता है?',
      },
      options: { en: ['Lysosomes', 'Golgi apparatus', 'Mitochondria', 'Endoplasmic reticulum'], hi: ['लाइसोसोम', 'गॉल्जीकाय', 'माइटोकॉन्ड्रिया', 'अन्तः प्रदव्ययी जालिका'] },
      correctIndex: 2,
      solution: {
        en: 'Beyond nucleus, only **Mitochondria (`+ Plastids in plants`)** possess their own circular **DNA and ribosomes** to synthesise select proteins!',
        hi: '**माइटोकॉन्ड्रिया** (`तथा पादपों में प्लैस्टिड`) के पास अपना स्वयं का **DNA तथा राइबोसोम** होता है (`अध्याय 2 व 8`)!',
      },
    },
    {
      id: 'pyq-b8-19',
      examTag: 'RRB Tech Gr-III 2024 (29 Dec Shift 2)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.3): Meiosis Halving Chromosomes',
      question: {
        en: 'The number of chromosomes becomes half in a daughter cell (`gamete`) by the process of:',
        hi: 'एक संतति कोशिका (`युग्मक`) में गुणसूत्रों की संख्या किस प्रक्रिया द्वारा आधी हो जाती है?',
      },
      options: {
        en: ['mitosis', 'binary fission', 'amitosis', 'meiosis'],
        hi: ['सूत्री कोशिका विभाजन (mitosis)', 'द्विखंडन (binary fission)', 'असूत्री विभाजन (amitosis)', 'अर्द्धसूत्री विभाजन (meiosis)'],
      },
      correctIndex: 3,
      solution: {
        en: '**Meiosis (`अर्द्धसूत्री विभाजन`)** cuts chromosome number cleanly in half (`46 -> 23`) inside germ gametes so zygote restores `46` upon fertilisation (`Sec 7.3 & 8.2.3`).',
        hi: '**अर्द्धसूत्री विभाजन (`Meiosis`)** द्वारा युग्मक में गुणसूत्र संख्या आधी (`46 → 23`) हो जाती है!',
      },
    },
    {
      id: 'pyq-b8-20',
      examTag: 'RRB Tech Gr-III 2024 (23 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.2): Mendel Dominant Pea Traits',
      question: {
        en: 'Which of the following were found as dominant traits by Mendel in his experiment with pea plants?',
        hi: 'मेंडल ने मटर के पौधों के साथ अपने प्रयोग में निम्नलिखित में से कौन-से प्रभावी (`Dominant`) लक्षण पाए थे?',
      },
      options: {
        en: ['Short plant and round seed', 'Tall plant and round seed', 'Short plant and wrinkled seed', 'Tall plant and wrinkled seed'],
        hi: ['बौना पौधा और गोल बीज', 'लंबा पौधा और गोल बीज', 'बौना पौधा और झुर्रीदार बीज', 'लंबा पौधा और झुर्रीदार बीज'],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `Fig 8.3–8.5` (`p.143`)**: F1 of Tall-Round × Short-Wrinkled gives **100% Tall Plant & Round Seed** -> **Tall (`T`) and Round (`R`)** are dominant!',
        hi: 'सटीक `पृ. 143`: मेंडल के प्रयोग में **लंबा पौधा (`T`) और गोल बीज (`R`)** प्रभावी (`Dominant`) लक्षण पाए गए!',
      },
    },
    {
      id: 'pyq-b8-21',
      examTag: 'RRB Tech Gr-III 2024 (24 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.2.2): Dominant Seed Shape',
      question: {
        en: 'Which of the following is a dominant trait in the experiments done by Mendel on garden pea?',
        hi: 'निम्नलिखित में से मेंडल द्वारा मटर पर किए गए प्रयोगों में प्रभावी विशेषक कौन-सा है?',
      },
      options: { en: ['Wrinkled seeds', 'Round seeds', 'Short plants', 'Green seeds'], hi: ['झुर्रीदार बीज', 'गोल बीज', 'बौने पौधे', 'हरे बीज'] },
      correctIndex: 1,
      solution: {
        en: 'Among wrinkled seeds, round seeds, short stems & green seeds (`Fig 8.4`), ONLY **Round seeds (`गोल बीज`)** is dominant (`Short, Wrinkled & Green are all recessive!`).',
        hi: 'इन विकल्पों में केवल **गोल बीज (`Round seeds`)** प्रभावी लक्षण है; झुर्रीदार, बौना व हरा बीज तीनों अप्रभावी हैं!',
      },
    },
    {
      id: 'pyq-b8-22',
      examTag: 'RRB Tech Gr-III 2024 (24 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 8 (Sec 8.1): DNA Copying in Reproduction',
      question: {
        en: 'In which of the following life processes is the creation of a DNA copy a basic event?',
        hi: 'निम्नलिखित में से किस जीवन प्रक्रिया में डीएनए (`DNA`) प्रतिलिपि का निर्माण एक आधारभूत घटना है?',
      },
      options: { en: ['Excretion', 'Respiration', 'Reproduction', 'Circulation'], hi: ['मलोत्सर्जन', 'श्वसन', 'प्रजनन', 'परिसंचरण'] },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 8.1` (`p.141`)**: Reproduction passes body-design genetic blueprints via **DNA copying**, creating inherited similarities plus adaptive variations!',
        hi: '`भाग 8.1`: **प्रजनन (`Reproduction`)** में संतति को जनक समान शारीरिक संरचना व विभिन्नताएँ देने हेतु `DNA प्रतिलिपि` आधारभूत घटना है!',
      },
    },
    {
      id: 'pyq-b8-23',
      examTag: 'RRB NTPC UG 2024 (28 Aug 2025 Shift 2)',
      section: 'General Science - Biology',
      subject: 'Biology',
      topic: 'First Human Gene Therapy (1990 ADA Deficiency)',
      question: {
        en: 'The first human gene therapy experiment, which began in September 1990, used a retroviral vector against which deficiency?',
        hi: 'प्रथम मानव जीन थेरेपी प्रयोग (`सितम्बर 1990`) में किस अपूर्णता के विरुद्ध रेट्रोवायरल वेक्टर का प्रयोग किया गया?',
      },
      options: {
        en: ['Mitochondrial encephalopathy', 'X-Linked Adrenoleukodystrophy', '3-Methylglutaconic Aciduria', 'Adenosine deaminase'],
        hi: ['माइटोकॉन्ड्रियल एन्सेफैलोपैथी', 'X-लिंक्ड एड्रेनोल्यूकोडिस्ट्रॉफी', '3-मिथाइलग्लूटाकोनिक एसिड्यूरिया', 'ऐडेनोसिन डीएमीनेज (Adenosine deaminase)'],
      },
      correctIndex: 3,
      solution: {
        en: 'The historic September 1990 clinical gene therapy introduced the working **Adenosine Deaminase (`ADA`) gene** into T-cells of a 4-year-old SCID patient!',
        hi: 'सन् 1990 की पहली मानव जीन थेरेपी **ऐडेनोसिन डीएमीनेज (`ADA`) एंजाइम कमी** के उपचार हेतु की गई थी!',
      },
    },
    {
      id: 'pyq-b8-24',
      examTag: 'RRB NTPC UG 2024 (02 Sep 2025 Shift 1)',
      section: 'Science & Tech Genetics',
      subject: 'General Science',
      topic: 'Genome-Edited Rice DRR Rice 100 (ICAR Hyderabad)',
      question: {
        en: 'Which ICAR institute developed India’s first genome-edited rice variety `DRR Rice 100 (Kamla)`?',
        hi: 'ICAR के किस संस्थान ने भारत की पहली जीनोम-संपादित चावल किस्म `DRR राइस 100 (कमला)` विकसित की है?',
      },
      options: {
        en: ['ICAR-NRRI, Cuttack', 'ICAR-CIAE, Bhopal', 'ICAR-Indian Institute of Rice Research, Hyderabad', 'ICAR-IARI, New Delhi'],
        hi: ['ICAR-NRRI, कटक', 'ICAR-CIAE, भोपाल', 'ICAR-भारतीय चावल अनुसंधान संस्थान, हैदराबाद', 'ICAR-IARI, नई दिल्ली'],
      },
      correctIndex: 2,
      solution: {
        en: '**ICAR-IIRR Hyderabad** (`Directorate of Rice Research`) engineered India’s precision genome-edited high-yield **DRR Dhan/Rice 100 (`Kamla`)**!',
        hi: '**ICAR-भारतीय चावल अनुसंधान संस्थान (`IIRR`), हैदराबाद** ने भारत की पहली जीनोम-संपादित `DRR राइस 100 (कमला)` किस्म विकसित की।',
      },
    },
  ],
};
export default C10_CH8_HEREDITY_DATA;
