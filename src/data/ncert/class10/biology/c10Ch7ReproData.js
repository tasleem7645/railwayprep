/**
 * Class 10 NCERT Science (2026–27 Edition — jhsc107.pdf, Pages 125–140) + Railway CBT Deep-Dive
 * Chapter 7: How Do Organisms Reproduce? (जीव जनन कैसे करते हैं?) — Gold Standard v3 (64 PYQ Matches!)
 * Complete Coverage: 7.1 DNA Blueprint & Survival Variation -> 7.2 Six Asexual Modes (`Fission Amoeba/Leishmania/Plasmodium, Fragmentation Spirogyra, Regeneration Planaria/Hydra, Budding Hydra/Yeast Act 7.1, Vegetative Propagation Bryophyllum/Potato/Money-Plant + Tissue Culture Callus, Spore Formation Rhizopus Hyphae vs Sporangia`) ->
 * 7.3.1–7.3.2 Sexual Meiosis + Bisexual (`Hibiscus/Mustard`) vs Unisexual (`Papaya/Watermelon`) Flower, Pollination, Pollen Tube via Style, Post-Fertilisation Fate (`Ovule → Seed, Ovary → Fruit`) & Seed Germination (`Cotyledons, Plumule, Radicle`) ->
 * 7.3.3 Human Male (`Scrotum lower temp, Testosterone, Vas deferens, Prostate/Seminal vesicles, Common Urethra`) & Female (`Ovaries, Oviduct fertilisation site, Uterus implantation, Disc Placenta nutrition/waste, 9-month gestation, 2–8 day Menstruation`), Contraception (`Condom ONLY STD shield, Oral Pills, Copper-T NO STD shield, Vasectomy/Tubectomy`) & Bacterial (`Gonorrhoea, Syphilis`) vs Viral (`Warts, HIV-AIDS`) STDs.
 * All 7 Activities (`7.1–7.7`), 12 In-Text Qs, 11 Solved Exercises verified vs jhsc1an (`1.b, 2.c, 3.d`), 10 Flashcards, 24 Clean RRB PYQs.
 */

export const C10_CH7_REPRO_DATA = {
  id: 'c10-bio-ch7',
  classId: 'class10',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 7,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 7: How Do Organisms Reproduce? (CBT Edition)',
  blueprintSvgKey: 'c10-ch7-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Asexual Fission (`Amoeba/Leishmania/Plasmodium`), Spirogyra, Planaria & Rhizopus', hi: 'अलैंगिक: द्वि/बहुखंडन, स्पाइरोगाइरा खंडन, प्लेनेरिया व राइजोपस बीजाणु' }, pct: 34 },
    { label: { en: 'Vegetative Propagation (`Bryophyllum`) & Tissue Culture (`Callus`)', hi: 'कायिक प्रवर्धन (`ब्रायोफिलम पत्ती`) एवं ऊतक संवर्धन (`कैलस`)' }, pct: 18 },
    { label: { en: 'Flower Parts, Pollination, Pollen Tube & Ovary→Fruit / Ovule→Seed', hi: 'पुष्प भाग, पराग नलिका, बीजांड→बीज, अंडाशय→फल व बीज अंकुरण' }, pct: 24 },
    { label: { en: 'Human Tracts (`Scrotum/Oviduct/Placenta`), Contraception (`Copper-T vs Condom`) & STDs', hi: 'मानव जनन तंत्र (`अंडवाहिका/प्लेसेंटा`), गर्भनिरोधन व जीवाणु-वायरस STD' }, pct: 24 },
  ],
  title: {
    en: 'Chapter 7: How Do Organisms Reproduce?',
    hi: 'अध्याय 7: जीव जनन कैसे करते हैं?',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • DNA Variation, 6 Asexual Modes, Bisexual Flower/Seed & Human Reproductive Health',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • DNA प्रतिकृति व विभिन्नता, 6 अलैंगिक विधियाँ, पुष्प निषेचन, प्लेसेंटा व गर्भनिरोधन',
  },
  metrics: {
    pages: 16,
    activities: 7,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 11,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-bio-ch7/hero-reproduction.webp',
    caption: {
      en: 'Reproduction Concept Bench: Binary-Fission Amoeba & Budding Hydra (`Sec 7.2`), Spore-Releasing Rhizopus + Bryophyllum Margin Plantlets, Angiosperm Flower Longitudinal Cutaway (`Ovule→Seed / Ovary→Fruit`), & Germinating Dicot Seed (`Cotyledon, Plumule, Radicle`).',
      hi: 'जनन विज्ञान स्टूडियो: अमीबा द्विखंडन व हाइड्रा मुकुलन (`भाग 7.2`), राइजोपस बीजाणुधानी व ब्रायोफिलम पत्ती कलिकाएँ, पुष्प निषेचन पथ एवं चने का अंकुरण (`बीजपत्र, प्रांकुर, मूलांकुर`)।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**DNA Blueprint & Variation (`7.1`)**: Reproduction is NOT needed for individual survival yet builds species populations. **DNA copying** (`plus new cellular apparatus`) carries protein instructions; slight copying inaccuracies generate **Variations** essential for **species survival** (`e.g. heat-resistant bacteria surviving warming water`, p.126).',
      hi: '**DNA व विभिन्नता (`7.1`)**: किसी एकल जीव के जीवित रहने हेतु जनन आवश्यक नहीं, पर प्रजाति अस्तित्व बनाए रखता है। **DNA प्रतिकृति** संग **अतिरिक्त कोशिकीय संरचना** बनती है; हल्की त्रुटियों से आई **विभिन्नता** स्पीशीज की उत्तरजीविता (`जैसे जल तापन में उष्ण-प्रतिरोधी जीवाणु`) में सहायक है!',
    },
    {
      en: '**6 Asexual Modes (`7.2`)**: **(1) Fission**: `Amoeba` (**any plane**), `Leishmania` (`Kala-azar`, **definite whip-like orientation**), `Plasmodium` (`Malaria`, **Multiple Fission**); **(2) Fragmentation**: `Spirogyra` (**simple multicellular only**); **(3) Regeneration**: `Planaria/Hydra` (**specialist cells**, NOT reproduction!); **(4) Budding**: `Hydra` & `Yeast` (`Act 7.1`); **(5) Vegetative + Tissue Culture (`Callus` from shoot tip)**: `Bryophyllum` (**leaf margin notches**), Potato (`eye buds`), Money-plant, seedless banana/rose/orange; **(6) Spore Formation**: `Rhizopus` (**thread hyphae non-reproductive vs spherical Sporangia bulbs + thick-walled spores**).',
      hi: '**6 अलैंगिक विधियाँ (`7.2`)**: **(1) विखंडन**: अमीबा (**किसी भी तल**), लेस्मानिया (`कालाजार`, **चाबुक संग निश्चित तल**), प्लैज्मोडियम (`मलेरिया`, **बहुखंडन**); **(2) खंडन**: स्पाइरोगाइरा (**केवल सरल बहुकोशिकीय**); **(3) पुनरुद्भवन**: प्लेनेरिया/हाइड्रा (**विशिष्ट कोशिकाएँ**, पर यह जनन नहीं); **(4) मुकुलन**: हाइड्रा व यीस्ट; **(5) कायिक प्रवर्धन**: **ब्रायोफिलम पत्ती के खाँचे**, आलू, केला/गुलाब व **ऊतक संवर्धन (`कैलस`)**; **(6) बीजाणु समासंघ**: **राइजोपस** (`बीजाणुधानी गुच्छ`)।',
    },
    {
      en: '**Angiosperm Flower & Seed (`7.3.2`)**: **Meiosis** halves DNA/chromosome number in gametes (`23 + 23 = 46 human zygote!`). Flower **Unisexual (`Papaya, Watermelon`)** vs **Bisexual (`Hibiscus, Mustard`)**. **Stamen (`Anther + Filament`)** makes pollen; **Pistil (`Stigma + Style + Ovary`)** holds ovules (`egg`). Pollen tube grows via **Style** to ovule. **After Fertilisation**: **Ovule → Seed** (`contains Embryo`), **Ovary → Fruit**, sepals/petals wither. Seed (`Fig 7.9`): **Cotyledons = food store**, **Plumule = future shoot**, **Radicle = future root**!',
      hi: '**पुष्प व बीज (`7.3.2`)**: **अर्द्धसूत्री विभाजन** से युग्मकों में गुणसूत्र आधे होकर (`23+23=46`) युग्मनज बनता है। पुष्प **एकलिंगी (`पपीता, तरबूज`)** बनाम **उभयलिंगी (`गुड़हल, सरसों`)**। **पुंकेसर (`परागकोश+तंतु`)** नर व **स्त्रीकेसर (`वर्तिकाग्र+वर्तिका+अंडाशय`)** मादा भाग हैं। **निषेचन बाद**: **बीजांड → बीज**, **अंडाशय → फल**! बीज (`चित्र 7.9`): **बीजपत्र (`खाद्य संग्रह`), प्रांकुर (`भावी प्ररोह`), मूलांकुर (`भावी जड़`)**!',
    },
    {
      en: '**Human Reproduction, Contraception & STDs (`7.3.3`)**: **Male**: Testes in **Scrotum (`outside abdomen for lower temperature` + Testosterone)**, Vas deferens, Prostate + Seminal vesicles (`fluid medium + nutrition`), **Urethra (`common urine+semen tube`)**. **Female**: Ovaries (`1 egg/mo`), **Oviduct (`FERTILISATION SITE`)**, Uterus (`implantation`), **Placenta** (`disc transferring maternal glucose/O₂ & removing waste; gestation ~9 months`), unfertilised egg (`1 day`) -> **Menstruation (`2–8 days`)**. **ONLY Condoms partially prevent STDs** (`Copper-T/Pills/Surgery do NOT!`). **Bacterial STDs**: `Gonorrhoea & Syphilis` | **Viral**: `Warts & HIV-AIDS`.',
      hi: '**मानव जनन व स्वास्थ्य (`7.3.3`)**: **नर**: वृषण **वृषण कोष में (`शुक्राणु हेतु कम ताप` + टेस्टोस्टेरॉन)**, शुक्राशय व प्रोस्टेट (**तरल + पोषण**), **मूत्रमार्ग (`मूत्र व शुक्राणु का उभय मार्ग`)**। **मादा**: **अंडवाहिका / फैलोपियन ट्यूब (`निषेचन स्थल`)**, गर्भाशय (`भ्रूण रोपण`), **अपरा / प्लेसेंटा (`ग्लूकोज-O₂ पोषण व अपशिष्ट निष्कासन; गर्भ ~9 माह`)**, अंड जीवित ~1 दिन → **ऋतुस्राव (`2–8 दिन`)**। **केवल कंडोम STD से सुरक्षा दे सकता है (`कॉपर-T नहीं!`)**। **जीवाणु STD**: गोनोरिया, सिफिलिस | **वायरस STD**: मस्सा (`Warts`), HIV-AIDS!',
    },
  ],
  sections: [
    {
      id: 'dna-copying-variation-asexual',
      number: '7.1–7.2',
      flowDiagramKey: 'c10-ch7-blueprint-mindmap',
      title: {
        en: 'DNA Copying & Survival Variation (`7.1`) + Six Asexual Modes (`Fission, Fragmentation, Regeneration, Budding, Vegetative, Spores`)',
        hi: 'DNA प्रतिकृति व विभिन्नता का महत्त्व (`7.1`) एवं अलैंगिक जनन की सभी 6 विधियाँ व ऊतक संवर्धन (`7.2`)',
      },
      summaryTag: {
        en: 'NCERT Pages 125–131 • Fig 7.1–7.6, Activities 7.1–7.6, Leishmania Whip, Plasmodium Multiple Fission & Callus Box',
        hi: 'NCERT पृ. 125–131 • चित्र 7.1–7.6, क्र. 7.1–7.6, लेस्मानिया चाबुक, प्लैज्मोडियम, ब्रायोफिलम व कैलस बॉक्स',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Why DNA Copying Creates Cellular Apparatus + Variations Crucial for Species Survival (`Sec 7.1`)',
            hi: '1. जनन, DNA प्रतिकृति (`प्रोटीन ब्लूप्रिंट`) एवं प्रजाति की उत्तरजीविता हेतु विभिन्नता (`भाग 7.1`)',
          },
          conceptStory: {
            en: 'Why do organisms spend vast energy on reproduction when nutrition, respiration, and excretion already keep a single individual alive? Because only reproducing groups create populations visible across ecosystems (`we recognize species by shared body designs`).\n• **DNA Copying (`7.1`)**: Nuclear chromosomes carry **DNA (`Deoxyribonucleic Acid`)** storing instructions to build **Proteins** — change the DNA message -> make different proteins -> alter body design! During reproduction, a cell makes **two DNA copies PLUS additional cellular apparatus (`so each daughter cell inherits organized machinery to run life processes!`)**.\n• **Role of Variations (`7.1.1`)**: Biochemical copying isn’t 100% absolute; tiny errors yield **similar (`not identical`) cells** (`extreme mismatches die, mild variations survive`). While variations aren’t essential for one individual’s daily survival (**In-Text p.126 Q2**), **==variation keeps entire species alive during severe niche shifts==**: if global warming heats temperate waters killing most bacteria, **a few heat-resistant variants survive and rebuild the population**!',
            hi: 'पोषण, श्वसन या उत्सर्जन के विपरीत किसी एकल जीव को जीवित रहने हेतु जनन अनिवार्य नहीं, परंतु बड़ी समष्टि व प्रजाति अस्तित्व हेतु यही प्रक्रम आधार है (`पृ. 125`)।\n• **DNA प्रतिकृति (`7.1`)**: केंद्रक के गुणसूत्रों में **DNA (`डि-ऑक्सीराइबोन्यूक्लिक अम्ल`)** शरीर की **प्रोटीन बनाने की सूचना** रखता है; संदेश बदलने पर शारीरिक अभिकल्प बदलता है। कोशिका विभाजन में DNA की दो प्रतिकृतियों संग **अतिरिक्त संगठित कोशिकीय संरचना** भी बननी आवश्यक है ताकि दोनों संतति कोशिकाएँ जैव-प्रक्रम चला सकें।\n• **विभिन्नता का महत्त्व (`7.1.1`, पृ. 126 Q2)**: कोई जैव-रासायनिक प्रक्रिया पूर्णतः सटीक नहीं होने से संतति कोशिकाएँ समरूप नहीं बल्कि सूक्ष्म विभिन्नता रखती हैं। यदि वैश्विक ऊष्मीकरण से जल का ताप बढ़ जाए, तो अधिकतर जीवाणु मर जाएँगे परंतु **कुछ उष्ण-प्रतिरोधी परिवर्त जीवित रहकर स्पीशीज को बचा लेंगे** — अतः विभिन्नता व्यष्टि के नहीं बल्कि **स्पीशीज के अस्तित्व** हेतु उपयोगी है!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch7/real/spirogyra-filament-microscopy.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch7/real/hydra-budding-micrograph.webp',
            title: { en: 'Real Microscopy Duo (`Sec 7.2`): Filamentous Spirogyra (`Fragmentation`) & Budding Hydra (`Budding`)', hi: 'असली सूक्ष्मदर्शी जोड़ी (`7.2`): स्पाइरोगाइरा (`खंडन`) एवं मुकुल युक्त हाइड्रा (`मुकुलन`)' },
            caption: {
              en: 'Left: Simple multicellular Spirogyra breaks into mature fragments regenerating new filaments (`Act 7.4`, Tech 2024 Shifts 10 & 19 PYQs). Right: Budding Hydra forming a tentacled daughter bud via repeated regenerative cell division (`Act 7.2/Fig 7.4`).',
              hi: 'बायाँ: सरल बहुकोशिकीय शैवाल स्पाइरोगाइरा परिपक्व होकर टुकड़ों में टूट नया तंतु बनाता है (`खंडन — क्र. 7.4`)। दायाँ: हाइड्रा में विशिष्ट पुनर्जनन कोशिकाओं के विभाजन से उभरा मुकुल (`चित्र 7.4`)।',
            },
          },
          inlinePyqIds: ['pyq-b7-4', 'pyq-b7-11', 'pyq-b7-16', 'pyq-b7-20'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Six Asexual Methods (`Fig 7.1–7.6`): Binary/Multiple Fission, Fragmentation, Planaria Regeneration, Hydra Budding, Bryophyllum & Rhizopus Spores',
            hi: '2. अलैंगिक जनन की सभी 6 विधियाँ (`चित्र 7.1–7.6`), ब्रायोफिलम, ऊतक संवर्धन (`कैलस`) व राइजोपस बीजाणु (`7.2.1–7.2.6`)',
          },
          conceptStory: {
            en: 'Notice how **==organism body design (`शारीरिक अभिकल्प`) decides its reproduction method==**:\n1) **==Fission (`विखंडन`, 7.2.1)==** (Unicellular): **`Amoeba`** splits into two **in ANY plane** (`Act 7.3, Tech Shift 1`); **`Leishmania`** (`causative protozoan of **Kala-azar**`) carries a **whip-like structure at one end**, so binary fission occurs strictly in a **DEFINITE longitudinal orientation** (`Tech Shift 15!`); **`Plasmodium`** (`Malarial parasite`) splits simultaneously into many daughter cells = **==Multiple Fission (`बहुखंडन`, Fig 7.2)==** (`Tech Shift 20`).\n2) **==Fragmentation (`खंडन`, 7.2.2)==**: **ONLY simple multicellular organisms (`like Spirogyra`, Act 7.4)** lacking specialized organ hierarchy break cleanly into pieces growing into whole individuals (`Complex animals have fixed organ tissues so cell-by-cell splitting fails!`).\n3) **==Regeneration (`पुनरुद्भवन`, 7.2.3, Fig 7.3)==**: Cut pieces of **`Planaria` or `Hydra`** mobilize **specialised regenerative cells** that proliferate & differentiate (`==Development / परिवर्धन==`) into full organisms — **NCERT Rule**: *Regeneration is NOT the same as reproduction* (`organisms don’t wait to get cut to multiply!`).\n4) **==Budding (`मुकुलन`, 7.2.4, Fig 7.4)==**: **`Hydra` & `Yeast` (`Act 7.1`)** — Hydra uses **regenerative cells** dividing repeatedly at one site until a **bud (`मुकुल`)** grows and detaches independently (`Tech Shifts 14 & 22`).\n5) **==Vegetative Propagation (`कायिक प्रवर्धन`, 7.2.5) + Tissue Culture Box (`p.131`)==**: Plants sprout from vegetative roots/stems/leaves (`NEVER flowers/seeds!`) — **Potato tuber notches/eyes (`Act 7.5`)**, **Money-plant leaf-bearing nodes (`Act 7.6`)**, **==Bryophyllum leaf-margin notches (`चित्र 7.5`)==**, **layering/cutting/grafting** (`Sugarcane, Rose, Grapes`) + seedless crops (**Banana, Orange, Rose, Jasmine**). Two top advantages: **bears flowers/fruits EARLIER than seed-grown plants**, and stays **genetically identical to parent**. **Tissue Culture**: separate cells from **growing shoot tip**, culture in nutrient medium -> compact cell mass **==Callus (`कैलस`)==** -> transfer to hormone medium -> plantlet (`disease-free ornamentals`).\n6) **==Spore Formation (`बीजाणु समासंघ`, 7.2.6, Fig 7.6)==**: On moist dark bread (`Act 7.2`), thread **hyphae (`NOT reproductive parts!` — `Tech Shift 20!`)** lift tiny black blob **==Sporangia (`बीजाणुधानी`)==** filled with thick-walled spores (`survive tough conditions -> germinate upon moisture`).',
            hi: 'जनन विधि जीव के **शारीरिक अभिकल्प** पर निर्भर है (`7.2.1–7.2.6`):\n1) **==विखंडन (`Fission`)==**: **अमीबा (`Amoeba`)** में कोशिका **किसी भी तल से दो भागों** में बँटती है (`चित्र 7.1a`); कालाजार रोगाणु **लेस्मानिया (`Leishmania`)** के एक सिरे पर **चाबुक जैसी सूक्ष्म संरचना** होने से द्विखंडन **एक निश्चित तल** से होता है (`Tech Shift 15`); मलेरिया परजीवी **प्लैज्मोडियम (`Plasmodium`)** में एकसाथ अनेक संतति बनना **==बहुखंडन (`चित्र 7.2`)==** है!\n2) **==खंडन (`Fragmentation`)==**: **केवल सरल संगठन वाले बहुकोशिकीय जीव (`स्पाइरोगाइरा`, क्र. 7.4)** छोटे खंडों में टूटकर नए जीव बनाते हैं (`ऊतक-अंग वाले जटिल बहुकोशिकीय जीवों में यह अव्यावहारिक है`)।\n3) **==पुनरुद्भवन (`Regeneration`, चित्र 7.3)==**: **प्लेनेरिया व हाइड्रा** को टुकड़ों में काटने पर **विशिष्ट कोशिकाएँ** क्रमप्रसरण व विभेदन (**परिवर्धन**) द्वारा पूर्ण जीव बना देती हैं — परंतु यह जनन के समान नहीं है।\n4) **==मुकुलन (`Budding`, चित्र 7.4)==**: **हाइड्रा** पुनर्जनन कोशिकाओं का उपयोग कर एक स्थान पर बार-बार विभाजन से उभार (**मुकुल**) बनाता है; **यीस्ट (`क्र. 7.1`)** में भी मुकुलन होता है।\n5) **==कायिक प्रवर्धन (`7.2.5`) व ऊतक संवर्धन (`पृ. 131`)==**: **जड़, तना व पत्ती (`फूल या बीज नहीं!`)** से नए पौधे — **आलू के गर्त/आँख (`क्र. 7.5`)**, **मनीप्लांट की पत्ती सहित पोर (`क्र. 7.6`)**, **==ब्रायोफिलम पत्ती की कोर कलियाँ (`चित्र 7.5`)==**, तथा गन्ना, गुलाब, अंगूर, केला, संतरा व चमेली (`बीज-रहित पौधे`)। इससे **पुष्प व फल कम समय में लगते** हैं व पौधे आनुवंशिक समान होते हैं। **ऊतक संवर्धन**: शीर्ष वर्धमान कोशिकाएँ पोषक माध्यम में विभाजित हो **==कैलस (`Callus`)==** बनाती हैं जो हार्मोन माध्यम से नया पौधा बनता है (`सजावटी पौधे, संक्रमण-मुक्त`)।\n6) **==बीजाणु समासंघ (`7.2.6`, चित्र 7.6)==**: ब्रेड मोल्ड **राइजोपस (`क्र. 7.2`)** के **कवक तंतु (`Hyphae`) जनन भाग नहीं हैं**, बल्कि ऊर्ध्व तंतुओं पर गुच्छ **==बीजाणुधानी (`Sporangia`)==** में **मोटी भित्ति वाले बीजाणु** बनते हैं जो प्रतिकूल समय में बचकर नम सतह पर उगते हैं!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch7/real/bryophyllum-leaf-plantlets.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch7/real/rhizopus-sporangia-mold.webp',
            title: { en: 'Asexual Pair (`Fig 7.5 & 7.6`): Bryophyllum Leaf Margin Buds & Rhizopus Bread-Mold Sporangia', hi: 'अलैंगिक जोड़ी (`चित्र 7.5 व 7.6`): ब्रायोफिलम पत्ती कोर कलिकाएँ एवं राइजोपस बीजाणुधानी' },
            caption: {
              en: 'Left: Vegetative plantlets sprouting strictly inside notches along Bryophyllum/Kalanchoe leaf margins (`Tech Shift 10 & 19 PYQs`). Right: Dark globular Sporangia atop thread-like Rhizopus hyphae (`Act 7.2`).',
              hi: 'बायाँ: ब्रायोफिलम पत्ती के किनारे के खाँचों में विकसित होती कलियाँ जो मिट्टी पर गिर नया पौधा बनाती हैं। दायाँ: कवक तंतुओं के शीर्ष पर काले गोल बीजाणुधानी गुच्छ (`राइजोपस — क्र. 7.2`)।',
            },
          },
          diagramKey: 'c10-ch7-asexual-modes-comparison',
          viralTrick: {
            en: '**6-Way Lock**: **`A`ny Plane = `A`moeba** | **`L`eishmania = Whip (`Kala-azar`)** | **`P`lasmodium = Multiple (`Malaria`)** | **`S`pirogyra = `S`imple Fragmentation** | **`P`lanaria = Regeneration** | **`B`ryophyllum = Leaf Notches** | **`R`hizopus = Spores in Sporangia (`Hyphae NO repro`)**!',
            hi: '**अचूक सूत्र**: **अमीबा** = किसी भी तल | **लेस्मानिया** = चाबुक (`कालाजार`) | **प्लैज्मोडियम** = बहुखंडन | **स्पाइरोगाइरा** = खंडन | **प्लेनेरिया** = पुनरुद्भवन | **हाइड्रा/यीस्ट** = मुकुलन | **ब्रायोफिलम** = पत्ती खाँचे | **राइजोपस** = बीजाणुधानी (तंतु जनन भाग नहीं)!',
          },
          inlinePyqIds: ['pyq-b7-1', 'pyq-b7-8', 'pyq-b7-9', 'pyq-b7-10', 'pyq-b7-14', 'pyq-b7-17', 'pyq-b7-18', 'pyq-b7-21', 'pyq-b7-24'],
        },
      ],
    },
    {
      id: 'sexual-flower-seed-meiosis',
      number: '7.3.1–7.3.2',
      flowDiagramKey: 'c10-ch7-flower-fertilisation-seed',
      svgLab: 'reproduction-modes-anatomy-lab',
      title: {
        en: 'Why Meiosis Halves DNA (`2n→n`), Angiosperm Bisexual/Unisexual Flowers, Pollination, Ovule→Seed & Seed Parts (`Fig 7.7–7.9`)',
        hi: 'लैंगिक जनन व अर्द्धसूत्री विभाजन (`7.3.1`), पुष्प संरचना (`गुड़हल/पपीता`), परागण, अंडाशय→फल / बीजांड→बीज व अंकुरण (`7.3.2`)',
      },
      summaryTag: {
        en: 'NCERT Pages 131–134 • Activity 7.7 Bengal Gram, Stamen/Pistil, Style Pollen Tube, Cotyledons, Plumule & Radicle',
        hi: 'NCERT पृ. 131–134 • क्र. 7.7 चना बीज, एकलिंगी vs उभयलिंगी पुष्प, वर्तिका नली, बीजपत्र, प्रांकुर व मूलांकुर',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Meiosis Restores Exact Chromosome Number (`46 = 23+23`) + Angiosperm Flower Anatomy (`Fig 7.7–7.9`)',
            hi: '1. अर्द्धसूत्री विभाजन (`गुणसूत्र स्थिरीकरण`), पुष्प के 4 चक्र (`चित्र 7.7`), परागण व निषेचन पश्चात बीज निर्माण (`चित्र 7.8–7.9`)',
          },
          conceptStory: {
            en: 'Sexual reproduction combines two individuals’ distinct stored variations exponentially faster! Why doesn’t DNA double every generation (`2× → 4× → 8×`)? Because specialised **germ cells undergo ==Meiosis (`अर्द्धसूत्री विभाजन`)==** cutting chromosome count and DNA cleanly **IN HALF** (`non-reproductive body somatic 46 -> germ gamete 23`), so fusion (`Fertilisation -> Zygote`) restores **exact species chromosome count (`46`, `Group D Shift 19 PYQ`!)**. Complex organisms specialise gametes: large food-storing non-motile **Female gamete** vs small motile **Male gamete**.\n• **Angiosperm Flower (`7.3.2`, Fig 7.7)**: Four whorls = **Sepals (`बाह्यदल`)**, **Petals (`पंखुड़ी`)**, **Stamen (`पुंकेसर`)**, **Pistil (`स्त्रीकेसर`)**.\n  - **==Unisexual Flowers (`एकलिंगी`)==** (`either stamen OR pistil`): **==Papaya & Watermelon==** (`पपीता व तरबूज`)!\n  - **==Bisexual Flowers (`उभयलिंगी`)==** (`BOTH stamen & pistil`): **==Hibiscus & Mustard==** (`गुड़हल व सरसों`)!\n  - **Stamen (Male)**: **Filament + Anther** (`contains yellow ==Pollen Grains==`, `NCERT Ex Q3`!). **Pistil (Female, central)**: swollen base **Ovary** (`holds Ovules with egg cells`), elongated **Style**, sticky tip **Stigma**.\n• **Pollination -> Germination (`Fig 7.8–7.9`, `Act 7.7`)**: Same flower transfer = **Self-Pollination**; different flower via **wind, water, animals** = **Cross-Pollination**. A **pollen tube** grows down the **Style** reaching the **Ovule inside Ovary** (`Tech Shift 1 & Shift 2`). **After Fertilisation (`TOP RRB FAVORITE!`)**: Zygote divides -> Embryo inside Ovule; **==Ovule develops tough coat -> SEED (`बीजांड → बीज`)==**; **==Ovary swells rapidly -> FRUIT (`अंडाशय → फल`)==** (`petals/sepals fall`). In Dicot **Bengal gram (`चने`, Fig 7.9)**: **Cotyledons** store food, **==Plumule (`प्रांकुर` → future shoot)==**, **==Radicle (`मूलांकुर` → future root)==**!',
            hi: 'लैंगिक जनन में दो जनकों की संचित विभिन्नताएँ मिलकर नवीन संयोजन देती हैं। हर पीढ़ी में DNA दोगुना होने से रोकने हेतु जननांगों की विशेष कोशिकाएँ **==अर्द्धसूत्री विभाजन (`Meiosis`)==** से गुणसूत्र व DNA की मात्रा **आधी (`मानव में 46 → 23`)** कर देती हैं, ताकि निषेचन से **युग्मनज (`Zygote`) में पुनः सही गुणसूत्र संख्या (`46`)** स्थापित हो (`Group D Shift 19 PYQ`)! बड़े भोजन-संचयी अचल कण **मादा युग्मक**, तथा छोटे गतिशील कण **नर युग्मक** होते हैं।\n• **पुष्प संरचना (`चित्र 7.7`)**: चार भाग — बाह्यदल, दल (`पंखुड़ी`), **पुंकेसर** व **स्त्रीकेसर**:\n  - **==एकलिंगी पुष्प==**: केवल पुंकेसर या स्त्रीकेसर → **==पपीता व तरबूज==**!\n  - **==उभयलिंगी पुष्प==**: दोनों जननांग उपस्थित → **==गुड़हल व सरसों==**!\n  - **पुंकेसर (`नर`)**: तंतु + **परागकोश** (`पीले परागकण बनते हैं — Ex Q3`)। **स्त्रीकेसर (`मादा, केंद्र में`)**: फूला आधार **अंडाशय (`Ovary`, भीतर बीजांड + अंड-कोशिका)**, मध्य लंबी **वर्तिका (`Style`)**, शीर्ष चिपचिपा **वर्तिकाग्र (`Stigma`)**।\n• **परागण व निषेचन पश्चात रूपांतरण (`चित्र 7.8–7.9`, क्र. 7.7)**: उसी पुष्प में = **स्वपरागण**, दूसरे पुष्प में (वायु, जल, प्राणी द्वारा) = **पर-परागण** (`Tech Shift 4`)। परागकण से निकली **पराग नलिका वर्तिका से होकर अंडाशय के बीजांड** तक पहुँचती है (`चित्र 7.8`)। **निषेचन बाद**: युग्मनज → भ्रूण; **==बीजांड (`Ovule`) → कठोर आवरण संग बीज (`Seed`)==**; **==अंडाशय (`Ovary`) → फल (`Fruit`)==** बनता है व पंखुड़ी-बाह्यदल गिर जाते हैं। **चना बीज अंकुरण (`चित्र 7.9`)**: **बीजपत्र (`खाद्य संग्रह`), प्रांकुर (`Plumule` → भावी प्ररोह/तना), मूलांकुर (`Radicle` → भावी जड़)**!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch7/real/germinating-dicot-seedlings.webp',
            title: { en: 'Real Germination View (`Act 7.7 / Fig 7.9`): Seed Coat Split Showing Cotyledons, Root Hairs & Plumule Shoot', hi: 'असली अंकुरण (`क्र. 7.7 / चित्र 7.9`): बीजपत्र, प्रांकुर (`भावी प्ररोह`) एवं जड़-रोम सहित मूलांकुर विकास' },
            caption: {
              en: 'Suitable moisture turns embryo inside seed (`Fig 7.9`) into seedling (`Germination`): pale downwards Radicle anchors as root while emerald Plumule elevates cotyledons skyward.',
              hi: 'उपयुक्त नमी मिलने पर बीज का भ्रूण नवोद्भिद में विकसित होता है (`अंकुरण`) — मूलांकुर नीचे जड़ व प्रांकुर ऊपर प्ररोह बनाता है तथा बीजपत्र भोजन प्रदान करते हैं।',
            },
          },
          trapAlert: {
            en: '**-0.33 Trap**: NEVER mix up **Ovary vs Ovule** (`O-F / O-S`: **O**vary -> **F**ruit, **O**vule -> **S**eed!) or **Unisexual (`Papaya, Watermelon`) vs Bisexual (`Hibiscus, Mustard`)**! Remember **`Ovule` houses Embryo, NOT Ovary directly!**',
            hi: '**सावधानी (-0.33 Trap)**: परीक्षा में **बीजांड (`Ovule`) → बीज** और **अंडाशय (`Ovary`) → फल** हमेशा याद रखें! एकलिंगी = **“प-त” (`पपीता, तरबूज`)**, उभयलिंगी = **“गु-स” (`गुड़हल, सरसों`)**!',
          },
          inlinePyqIds: ['pyq-b7-3', 'pyq-b7-6', 'pyq-b7-7', 'pyq-b7-12', 'pyq-b7-19', 'pyq-b7-22'],
        },
      ],
    },
    {
      id: 'human-reproduction-health-stds',
      number: '7.3.3',
      flowDiagramKey: 'c10-ch7-human-repro-contraception',
      title: {
        en: 'Human Reproduction (`Puberty, Male Scrotum/Urethra, Female Oviduct/Placenta/Menstruation 2–8 Days`) & Contraception / STDs',
        hi: 'मानव जनन तंत्र (`यौवनारंभ, नर वृषणकोष-मूत्रमार्ग, मादा अंडवाहिका-प्लेसेंटा-ऋतुस्राव 2–8 दिन`) एवं जनन स्वास्थ्य (`गर्भनिरोधन व STD`)',
      },
      summaryTag: {
        en: 'NCERT Pages 134–138 • Fig 7.10–7.11, Testosterone, 9-Month Placenta, Copper-T vs Condom Q5 & Bacterial vs Viral STDs',
        hi: 'NCERT पृ. 134–138 • चित्र 7.10–7.11, टेस्टोस्टेरॉन, अपरा 9 माह, कॉपर-T बनाम कंडोम Q5 व जीवाणु-वायरल STD',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Puberty & Complete Male / Female Human Tracts + Placenta (`9 Months`) & Menstruation (`2–8 Days`)',
            hi: '1. यौवनारंभ, नर जनन अंग (`वृषणकोष/प्रोस्टेट/मूत्रमार्ग`), मादा अंग (`अंडवाहिका/गर्भाशय/अपरा`) व ऋतुस्राव (`7.3.3a–c`)',
          },
          conceptStory: {
            en: 'As rapid childhood body growth slows around adolescence, **germ tissues start maturing = ==Puberty (`यौवनारंभ`, p.135)==**: common signs (`armpit/pubic hair darkening, oily skin & pimples`) plus specific signs (`boys: beard/moustache, cracking voice, occasional erection`; `girls: breast enlargement, darkening nipple skin, onset of menstruation`).\n• **Male Reproductive System (`7.3.3a`, Fig 7.10)**: **==Testes (`वृषण`)== sit OUTSIDE the abdominal cavity inside the ==Scrotum (`वृषण कोष`)==** because sperm formation demands a **temperature LOWER than normal internal body temperature (`~2–3 °C cooler`)**, AND testes secrete **Testosterone (`regulates sperm + secondary male puberty traits`)**. **Vas Deferens (`शुक्रवाहिनी`)** loops over urinary bladder merging into **==Urethra (`मूत्रमार्ग` — COMMON passage for both Urine AND Semen!)==**. **Prostate Gland & Seminal Vesicles** pour secretions along vas deferens giving sperms **fluid medium (`easy transport`) + NUTRITION (`In-Text p.138 Q2`)**; sperms carry DNA + a **long tail** to swim.\n• **Female System (`7.3.3b`, Fig 7.11)**: Pair of **Ovaries** contain thousands of immature eggs at birth (`1 matures per month` from puberty) -> moves down **==Oviduct / Fallopian Tube (`अंडवाहिका` — EXACT SITE OF FERTILISATION!)==** -> fused embryo/ball of cells travels into elastic **Uterus** (`implantation inside thick spongy blood-rich lining`, `Cervix -> Vagina`). Developing embryo gets maternal **glucose + oxygen** and dumps wastes via **==Placenta (`अपरा / गर्भनाल`)==** — a **disc-like tissue embedded in uterine wall** (`embryo villi bathed in maternal blood spaces`). Gestation takes **`~9 months`** -> rhythmic uterine muscle contractions trigger childbirth.\n• **What if egg is NOT fertilised? (`7.3.3c`)**: Egg survives **`~1 day`** -> uterine lining is unneeded, breaks down slowly and exits vagina as **blood & mucous (`==Menstruation / ऋतुस्राव==`) lasting `~2 to 8 days`** monthly!',
            hi: 'किशोरावस्था में जब सामान्य शारीरिक वृद्धि धीमी होने लगती है तब जनन ऊतक परिपक्व होते हैं — इसे **==यौवनारंभ (`Puberty`)==** कहते हैं (सामान्य लक्षण: काँख व जाँघ क्षेत्र में गहरे बाल, तैलीय त्वचा व मुँहासे; भिन्न लक्षण: लड़कियों में स्तन विकास व रजोधर्म; लड़कों में दाढ़ी-मूँछ व आवाज़ फटना)।\n• **नर जनन तंत्र (`7.3.3a`, चित्र 7.10)**: **==वृषण उदर गुहा के बाहर वृषण कोष (`Scrotum`)== में स्थित हैं क्योंकि शुक्राणु उत्पादन हेतु शरीर के तापमान से कम ताप आवश्यक है!** वृषण **टेस्टोस्टेरॉन** (`शुक्राणु व यौवन लक्षण नियंत्रण`) भी बनाता है। **शुक्रवाहिनी** मूत्राशय की नली से जुड़कर **==मूत्रमार्ग (`Urethra` — मूत्र व शुक्राणु का उभय मार्ग)==** बनाती है। **प्रोस्टेट ग्रंथि व शुक्राशय (`पृ. 138 Q2`)** स्राव डालकर शुक्राणुओं को **तरल माध्यम व पोषण** देते हैं; शुक्राणु की लंबी पूँछ तैरने में मदद करती है।\n• **मादा जनन तंत्र (`7.3.3b`, चित्र 7.11)**: जन्म से ही अंडाशय में हजारों अपरिपक्व अंड होते हैं (यौवनारंभ पर प्रति माह एक अंड परिपक्व)। अंड **==डिंबवाहिनी / फैलोपियन ट्यूब (`निषेचन स्थल ✓`)==** में शुक्राणु से मिलकर युग्मनज फिर भ्रूण बना **गर्भाशय** (`रोपण`, ग्रीवा → योनि) में स्थापित होता है। गर्भस्थ भ्रूण को माँ के रक्त से पोषण (**ग्लूकोज + `O₂` व अपशिष्ट निपटान**) एक तश्तरीनुमा संरचना **==अपरा (`प्लेसेंटा`)==** द्वारा मिलता है (`प्रवर्ध व माँ रक्तस्थान`); गर्भावधि **लगभग `9 मास`** की होती है।\n• **अंड निषेचित न होने पर (`7.3.3c`)**: अंड केवल **लगभग `1 दिन`** जीवित रहता है; मोटी स्पोंजी अंतःभित्ति टूटकर योनि मार्ग से रुधिर व म्यूकस रूप में **==ऋतुस्राव / रजोधर्म (`2 से 8 दिन`)==** बनकर निकलती है!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch7/real/planaria-regeneration-micrograph.webp',
            title: { en: 'Real Dark-Field Specimen (`Fig 7.3`): Freshwater Planaria — Champion Regeneration Model', hi: 'असली प्रयोगशाला सूक्ष्मजीव (`चित्र 7.3`): प्लेनेरिया (`Planaria`) — पुनरुद्भवन का आदर्श उदाहरण' },
            caption: {
              en: 'Note from Sec 7.2.3 & Tech 2024 Shift 8/9: Specialist cells in sliced Planaria pieces regenerate entire organisms cleanly — yet remember NCERT’s distinction that regeneration is NOT normal reproduction!',
              hi: 'प्लेनेरिया को कई टुकड़ों में काटने पर विशिष्ट कोशिकाएँ प्रत्येक भाग से नया जीव विकसित कर लेती हैं (`पुनरुद्भवन`), परंतु जटिल जीव कटकर जनन नहीं करते।',
            },
          },
          inlinePyqIds: ['pyq-b7-2', 'pyq-b7-5', 'pyq-b7-15', 'pyq-b7-23'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Reproductive Health (`7.3.3d`): Four Contraceptive Categories, Copper-T Q5 Trap, Bacterial vs Viral STDs & Female Foeticide Warning',
            hi: '2. जनन स्वास्थ्य (`7.3.3d`): 4 गर्भनिरोधक विधियाँ, कॉपर-T बनाम कंडोम (`Q5`), जीवाणु/वायरल STD एवं लिंग-अनुपात सुरक्षा',
          },
          conceptStory: {
            en: 'Study **NCERT Pages 137–138** line by line (`major RRB Biology goldmine!`):\n• **Two STD Pathogen Groups (`Tech 2024 Shifts 15 & 22 PYQs`)**:\n  1) **==Bacterial STDs==**: **Gonorrhoea (`सुजाक / गोनेरिया`)** & **Syphilis (`सिफिलिस`)**.\n  2) **==Viral STDs==**: **Warts (`मस्सा`)** & **HIV-AIDS**.\n• **Four Contraceptive Categories (`Ex Q8`)**:\n  1) **Mechanical Barrier (`Condoms / vaginal coverings`)**: Blocks sperm reaching egg AND is the **ONLY contraceptive method providing partial protection against STDs (`NCERT p.138`)**!\n  2) **Hormonal Oral Pills**: Alter body hormonal balance **preventing egg release (`ovulation`)** -> possible hormonal **side-effects** (`does NOT stop STDs`).\n  3) **IUCD (`Loop / Copper-T`)**: Inserted inside **uterus** to prevent pregnancy (`can irritate uterus`). ⚠️ **NCERT In-Text `p.138 Q5` Direct Question**: **Copper-T will NOT protect against Sexually Transmitted Diseases (`no barrier to fluids/pathogens`)**!\n  4) **Surgical Blocking (`Vasectomy` blocking Vas deferens in males | `Tubectomy` blocking Fallopian tubes in females)**: Permanently blocks gamete passage (`long-term safe unless improper surgery causes infection`).\n• **Social & Legal Note (`p.138`)**: Illegal prenatal sex determination & **female foeticide** dangerously lowers child sex ratio and is a punishable criminal offence (`both law and healthy society require balanced sex ratio`). Population size depends on birth rate vs death rate.',
            hi: '**NCERT पृष्ठ 137–138** से सीधे रेलवे परीक्षा प्रश्न:\n• **यौन संचारित रोग (`STD`) के दो वर्ग (`Tech 2024 Shifts 15, 22 PYQs`)**:\n  1) **==जीवाणु जनित (`Bacterial`)==**: **गोनेरिया (`सूजाक`)** एवं **सिफिलिस**!\n  2) **==वाइरस जनित (`Viral`)==**: **मस्सा (`Warts`)** एवं **HIV-AIDS**!\n• **गर्भनिरोधन की 4 विधियाँ (`अभ्यास Q8`)**:\n  1) **यांत्रिक अवरोध (`कंडोम / योनि आवरण`)**: शुक्राणु को अंड तक पहुँचने से रोकता है — और **यही एकमात्र विधि है जो कई STD संचरण से आंशिक सुरक्षा देती है**!\n  2) **गर्भनिरोधक गोलियाँ (`Oral Pills`)**: हार्मोन संतुलन बदलकर **अंड मोचन रोकती हैं** (`विपरीत प्रभाव संभव; STD सुरक्षा नहीं`)।\n  3) **लूप या कॉपर-T (`IUCD`)**: **गर्भाशय** में स्थापित (`गर्भाशय उत्तेजन संभव`)। ⚠️ **पृ. 138 प्रश्‍न 5**: **कॉपर-T यौन-संचारित रोगों (`STD`) से महिला की रक्षा नहीं करेगा**!\n  4) **शल्यक्रिया (`Vasectomy / Tubectomy`)**: पुरुष की **शुक्रवाहिका** या स्त्री की **अंडवाहिनी** को अवरुद्ध करना (`दीर्घकालिक सुरक्षित, पर असावधानी से संक्रमण संभव`)।\n• **कानूनी व सामाजिक चेतना**: देश में **भ्रूण लिंग निर्धारण व मादा भ्रूण हत्या गैरकानूनी अपराध है** जिससे शिशु लिंग अनुपात घट रहा है। जनसंख्या आकार जन्मदर व मृत्युदर पर निर्भर है।',
          },
          viralTrick: {
            en: '**STD Pathogen Pair**: **“Ba-Go-Sy” (`Bacterial = Gonorrhoea, Syphilis`)** vs **“Vi-Wa-Hi” (`Viral = Warts, HIV-AIDS`)**! And for **Copper-T (`Q5`)**: Only **Condom** covers STDs; Copper-T sits INSIDE uterus (`zero STD shield!`).',
            hi: '**“जी-गो-सी” = जीवाणु (`गोनेरिया, सिफिलिस`) | “वा-म-ए” = वायरस (`मस्सा/Warts, एड्स/HIV`)**! और केवल **कंडोम** STD से आंशिक बचाव करता है — **कॉपर-T, गोलियाँ या नसबंदी STD नहीं रोकते**!',
          },
          inlinePyqIds: ['pyq-b7-13', 'pyq-b7-23'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Amoeba (`Any Plane`) vs Leishmania (`Definite Orientation`) vs Plasmodium (`Multiple`)', hi: 'अमीबा (`कोई भी तल`) बनाम लेस्मानिया (`निश्चित तल`) बनाम प्लैज्मोडियम (`बहुखंडन`)' },
      left: { en: 'Amoeba: binary fission in ANY plane; Leishmania (`Kala-azar`) whip locks definite longitudinal plane', hi: 'अमीबा किसी भी तल से दो; लेस्मानिया चाबुक कारण निश्चित तल से द्विखंडन!' },
      right: { en: 'Plasmodium (`Malaria`): divides into MANY daughter cells simultaneously = Multiple Fission', hi: 'प्लैज्मोडियम (`मलेरिया`): एक साथ अनेक कोशिकाओं में विभाजन = बहुखंडन!' },
    },
    {
      pair: { en: 'Fragmentation (`Spirogyra`) vs Regeneration (`Planaria`)', hi: 'खंडन (`स्पाइरोगाइरा`) बनाम पुनरुद्भवन (`प्लेनेरिया`)' },
      left: { en: 'Fragmentation: natural break-up ONLY in simple multicellular algae (`Spirogyra`)', hi: 'खंडन: केवल सरल बहुकोशिकीय (`स्पाइरोगाइरा`) में स्वाभाविक टूट कर वृद्धि' },
      right: { en: 'Regeneration: cut pieces mobilize specialist cells (`Planaria/Hydra`); NOT equal to reproduction!', hi: 'पुनरुद्भवन: कटने पर विशिष्ट कोशिकाओं से परिवर्धन (`सामान्य जनन नहीं`)' },
    },
    {
      pair: { en: 'Ovary (`→ Fruit`) vs Ovule (`→ Seed`) & Plumule (`Shoot`) vs Radicle (`Root`)', hi: 'अंडाशय (`→ फल`) बनाम बीजांड (`→ बीज`) एवं प्रांकुर (`प्ररोह`) बनाम मूलांकुर (`जड़`)' },
      left: { en: 'Post-fertilisation: Ovary swells into FRUIT; Ovule (`with embryo`) coats into SEED', hi: 'निषेचन पश्चात: अंडाशय → फल | बीजांड → बीज (`भ्रूण सहित`)!' },
      right: { en: 'Inside Dicot Seed (`Fig 7.9`): Plumule -> future Shoot; Radicle -> future Root; Cotyledons = food', hi: 'बीज में प्रांकुर → भावी प्ररोह (`प से प्रांकुर`); मूलांकुर → भावी जड़ (`म से मूल`)!' },
    },
    {
      pair: { en: 'Bacterial STDs (`Gonorrhoea/Syphilis`) vs Viral STDs (`Warts/HIV`) & Copper-T', hi: 'जीवाणु STD बनाम वायरल STD एवं कॉपर-T बनाम कंडोम' },
      left: { en: 'Bacterial: Gonorrhoea & Syphilis | Viral: Warts & HIV-AIDS (`Tech Shifts 15, 22`)', hi: 'जीवाणु: गोनोरिया, सिफिलिस | वायरस: मस्सा (`Warts`), HIV-AIDS' },
      right: { en: 'Copper-T / Pills / Surgery prevent ONLY pregnancy (`NO STD protection`); Condom shields both!', hi: 'कॉपर-T / गोलियाँ / नसबंदी केवल गर्भ रोकें (`STD नहीं!`); कंडोम यांत्रिक STD बचाव दे!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Cytology / Regeneration Concept', hi: 'पुनरुद्भवन व प्रजनन विज्ञान' },
      name: { en: 'Abraham Trembley (`Hydra` Budding & Regeneration, 1744)', hi: 'अब्राहम ट्रेम्बले (`हाइड्रा मुकुलन व पुनर्जनन`)' },
      country: { en: 'Switzerland (`NCERT Sec 7.2.3–7.2.4`)', hi: 'स्विट्ज़रलैंड (`NCERT भाग 7.2.3–7.2.4`)' },
      fact: {
        en: 'Discovered both vegetative **budding** and astonishing **whole-body regeneration** in freshwater *Hydra* (`showing cut pieces use regenerative cells to rebuild complete polyps`).',
        hi: 'मीठे जल के *हाइड्रा* में **मुकुलन** एवं कटे टुकड़ों से पूरे जीव बनने के **पुनरुद्भवन (`Regeneration`)** की अद्भुत क्षमता सिद्ध की!',
      },
    },
    {
      badge: { en: 'Plant Morphogenesis / Tissue Culture', hi: 'पादप ऊतक संवर्धन व कैलस' },
      name: { en: 'Gottlieb Haberlandt (`Father of Plant Tissue Culture`, 1902)', hi: 'गॉटलीब हैबरलैंड (`पादप ऊतक संवर्धन`)' },
      country: { en: 'Austria (`NCERT p.131 Box`)', hi: 'ऑस्ट्रिया (`NCERT पृ. 131 बॉक्स`)' },
      fact: {
        en: 'Proposed totipotent vegetative plant-cell culture — powering today’s commercial **shoot-tip -> Callus -> hormone propagation** matching NCERT p.131 Box!',
        hi: 'पादप कोशिकाओं को कृत्रिम पोषक माध्यम में विभाजित कर **कैलस से संक्रमण-मुक्त पौधे (`ऊतक संवर्धन`)** तैयार करने की आधुनिक तकनीक की नींव रखी!',
      },
    },
    {
      badge: { en: 'Plant Fertilisation / Pollen Tube', hi: 'पराग नलिका व पुष्प निषेचन' },
      name: { en: 'Giovanni Battista Amici (`Pollen Tube Discovery`, 1824)', hi: 'जियोवानी बतिस्ता अमीची (`पराग नलिका खोज`, 1824)' },
      country: { en: 'Italy (`NCERT Fig 7.8`)', hi: 'इटली (`NCERT चित्र 7.8`)' },
      fact: {
        en: 'Observed a **pollen grain sprouting a pollen tube down the style to reach the ovule** (`Fig 7.8`, explaining how non-motile male gametes reach egg cells in seed plants)!',
        hi: 'परागकण से **पराग नलिका निकलकर वर्तिका से होते हुए बीजांड तक पहुँचने** (`चित्र 7.8`) का सर्वप्रथम प्रत्यक्ष सूक्ष्मदर्शी अवलोकन किया!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-spirogyra-frag',
      figRef: { en: 'NCERT Act 7.4 (`Fragmentation`)', hi: 'NCERT क्र. 7.4 — स्पाइरोगाइरा खंडन' },
      title: { en: 'Filamentous Green Algae Spirogyra (`Simple Multicellular Fragmentation`)', hi: 'तालाब का तंतुमय शैवाल स्पाइरोगाइरा (`सरल बहुकोशिकीय में खंडन`)' },
      imageUrl: '/ncert-notes/class10-bio-ch7/real/spirogyra-filament-microscopy.webp',
      hotspots: [
        { en: 'Lacks specialized organs/tissues (`Act 7.4`), so simple filaments mature, fragment, and grow new algae.', hi: 'इसमें जटिल ऊतक-अंग न होने से यह परिपक्व होकर खंडों में टूट नए तंतु बनाता है (`Tech Shifts 10 & 19`)।' },
      ],
    },
    {
      id: 'vis-hydra-bud',
      figRef: { en: 'NCERT Fig 7.4 (`Hydra Budding`)', hi: 'NCERT चित्र 7.4 — हाइड्रा मुकुलन' },
      title: { en: 'Dark-Field Micrograph of Hydra Developing Lateral Tentacled Bud', hi: 'हाइड्रा के शरीर पर विकसित होता नन्हा मुकुल (`पुनर्जनन कोशिकाओं द्वारा`)' },
      imageUrl: '/ncert-notes/class10-bio-ch7/real/hydra-budding-micrograph.webp',
      hotspots: [
        { en: 'Hydra directs regenerative cells to divide repeatedly at a specific site until the detached bud lives independently (`ALP Shift 6`).', hi: 'हाइड्रा एक निश्चित स्थान पर पुनर्जनन कोशिकाओं से बार-बार विभाजन कर उभार (`मुकुल`) बनाता है (`ALP Shift 6`)।' },
      ],
    },
    {
      id: 'vis-planaria-regen',
      figRef: { en: 'NCERT Fig 7.3 (`Planaria Regeneration`)', hi: 'NCERT चित्र 7.3 — प्लेनेरिया पुनरुद्भवन' },
      title: { en: 'Freshwater Planaria Flatworm (`Specialist-Cell Organ Development`)', hi: 'मीठे जल का प्लेनेरिया चपटा कृमि (`पुनरुद्भवन मॉडल`)' },
      imageUrl: '/ncert-notes/class10-bio-ch7/real/planaria-regeneration-micrograph.webp',
      hotspots: [
        { en: 'Cut pieces multiply specialist cells (`development`), yet NCERT stresses regeneration ≠ normal reproduction (`Tech Shift 7`).', hi: 'कटने पर विशिष्ट कोशिकाएँ तेजी से विभाजित होकर पूर्ण जीव बनाती हैं (`परिवर्धन`)।' },
      ],
    },
    {
      id: 'vis-bryophyllum-leaf',
      figRef: { en: 'NCERT Fig 7.5 (`Vegetative Leaf Buds`)', hi: 'NCERT चित्र 7.5 — ब्रायोफिलम पत्ती कलिका' },
      title: { en: 'Plantlets Emerging Along Leaf-Margin Notches in Bryophyllum / Kalanchoe', hi: 'ब्रायोफिलम पत्ती के खाँचों में निकलते नन्हे पौधे (`कायिक प्रवर्धन`)' },
      imageUrl: '/ncert-notes/class10-bio-ch7/real/bryophyllum-leaf-plantlets.webp',
      hotspots: [
        { en: 'Buds developing strictly in leaf-margin notches drop into soil forming genetically identical clones (`Tech Shift 19`).', hi: 'पत्ती के किनारे के खाँचों में विकसित कलिकाएँ मिट्टी पर गिर नया पौधा बनाती हैं (`आनुवंशिक समान संतति`)।' },
      ],
    },
    {
      id: 'vis-rhizopus-spores',
      figRef: { en: 'NCERT Fig 7.6 & Act 7.2 (`Spore Formation`)', hi: 'NCERT चित्र 7.6 — राइजोपस बीजाणु समासंघ' },
      title: { en: 'Rhizopus Bread Mold Showing Filament Hyphae & Dark Globular Sporangia', hi: 'राइजोपस कवक तंतु एवं शीर्ष पर काली गोल बीजाणुधानियाँ (`Sporangia`)' },
      imageUrl: '/ncert-notes/class10-bio-ch7/real/rhizopus-sporangia-mold.webp',
      hotspots: [
        { en: 'Thread hyphae do NOT reproduce directly; knob-like Sporangia hold thick-walled spores (`Tech Shifts 20 & 21`).', hi: 'कवक तंतु जनन भाग नहीं हैं; गुच्छ बीजाणुधानी में स्थित मोटी भित्ति वाले बीजाणु प्रतिकूल मौसम सह लेते हैं।' },
      ],
    },
    {
      id: 'vis-dicot-germination',
      figRef: { en: 'NCERT Fig 7.9 & Act 7.7 (`Germination`)', hi: 'NCERT चित्र 7.9 — बीज अंकुरण' },
      title: { en: 'Germinating Dicot Seedlings Showing Cotyledons, Plumule Shoot & Root Hairs', hi: 'अंकुरित द्विबीजपत्री नवोद्भिद: बीजपत्र, प्रांकुर प्ररोह व मूलांकुर जड़' },
      imageUrl: '/ncert-notes/class10-bio-ch7/real/germinating-dicot-seedlings.webp',
      hotspots: [
        { en: 'Inside every seed (`from Ovule`): Cotyledons feed growing Radicle (`root`) & Plumule (`shoot`) during Germination.', hi: 'बीजांड से बने बीज में बीजपत्र खाद्य देते हैं, मूलांकुर जड़ बनाता है व प्रांकुर तना-पत्तियाँ बनता है।' },
      ],
    },
  ],
  activities: [
    {
      num: '7.1',
      title: { en: 'Activity 7.1: Yeast Budding in Warm Sugar Culture (`p.127`)', hi: 'क्रियाकलाप 7.1: गर्म शर्करा विलयन में यीस्ट का मुकुलन अवलोकन (`पृ. 127`)' },
      materials: { en: '10 g sugar in 100 mL water, 20 mL in tube + pinch Yeast powder, cotton plug, microscope slide', hi: '100 mL जल + 10g चीनी घोल (`20 mL` परखनली में), चुटकी यीस्ट पाउडर, रुई, स्लाइड व सूक्ष्मदर्शी' },
      steps: { en: 'Dissolve `10 g` sugar in `100 mL` water, add a pinch of yeast into `20 mL` tube plugged with cotton, keep in a warm place `1–2 hrs`, examine drop under microscope.', hi: 'मीठे जल में यीस्ट डाल रुई से ढक 1–2 घंटे गरम स्थान पर रखें, फिर स्लाइड पर सूक्ष्मदर्शी से जाँचें।' },
      examTakeaway: { en: 'Shows microscopic tiny buds (`मुकुल`) bulging off Yeast cells, detaching to grow (`Asexual Budding — NCERT Ex Q1(b)`).', hi: 'यीस्ट कोशिकाओं से छोटे **मुकुल उभरकर अलग होते** दिखते हैं (`मुकुलन` — `अभ्यास Q1`)!' },
      predictQuestion: {
        prompt: { en: 'Why is the yeast sugar culture kept in a WARM place plugged with cotton before microscopy (`Act 7.1`)?', hi: 'यीस्ट संवर्धन वाली परखनली को रुई से ढककर गरम स्थान पर क्यों रखा जाता है?' },
        options: { en: ['Cold stops all budding; warmth activates rapid Yeast sugar fermentation & budding', 'Warmth boils and kills yeast spores', 'Cotton adds pollen grains', 'Sunlight is needed for chlorophyll in yeast'], hi: ['ठंड में वृद्धि रुकती है; हल्की गर्माहट यीस्ट श्वसन व मुकुलन तेज करती है', 'गर्मी यीस्ट मारती है', 'रुई पराग लाती है', 'यीस्ट में क्लोरोफिल हेतु धूप चाहिए'] },
        correctIndex: 0,
        reason: { en: 'Warmth accelerates yeast metabolism (`anaerobic respiration`) fueling rapid mitotic bud formation within 1–2 hours.', hi: 'उपयुक्त गरम ताप पर यीस्ट तेजी से श्वसन व मुकुलन विभाजन करता है।' },
      },
    },
    {
      num: '7.2',
      title: { en: 'Activity 7.2: Wet Bread in Cool Moist Dark Spot (`Rhizopus Mold`, `p.127`)', hi: 'क्रियाकलाप 7.2: गीली ब्रेड पर कवक (`राइजोपस बीजाणु समासंघ`, `पृ. 127`)' },
      materials: { en: 'Bread slice soaked in water, magnifying glass', hi: 'जल में भिगोया डबलरोटी (ब्रेड) टुकड़ा व आवर्धक लेंस (`1 सप्ताह`)' },
      steps: { en: 'Moisten bread slice, keep in a cool, moist, **dark** place; examine surface daily over 1 week using a magnifying lens (`compare vs Yeast growth in Act 7.1`).', hi: 'भीगी ब्रेड को ठंडे, नम व अँधेरे स्थान पर रखकर एक सप्ताह तक आवर्धक लेंस से कवक वृद्धि देखें।' },
      examTakeaway: { en: 'Grows white cottony **hyphae** (`non-reproductive`) lifting black spherical **Sporangia (`containing protected spores`, Fig 7.6)** — whereas Yeast stayed unicellular!', hi: 'ब्रेड पर **राइजोपस कवक जाल (`Hyphae`) व काली बीजाणुधानियाँ** बनती हैं जिनमें मोटी भित्ति वाले **बीजाणु** होते हैं (`यीस्ट से भिन्न!`)।' },
      predictQuestion: {
        prompt: { en: 'Which part seen on moist bread in Activity 7.2 actually performs reproduction (`Tech Shift 20`)?', hi: 'क्रियाकलाप 7.2 में ब्रेड पर दिखने वाले भागों में से वास्तविक जनन संरचना कौन-सी है?' },
        options: { en: ['Root rhizoids inside bread', 'Blob-like Sporangia containing thick-walled Spores', 'Blue chlorophyll petals', 'Buds on leaf margin'], hi: ['ब्रेड के अंदर जड़ें', 'ऊर्ध्व तंतुओं पर गोल बीजाणुधानी (Sporangia) जिनमें बीजाणु होते हैं', 'क्लोरोफिल दल', 'पत्ती खाँचे'] },
        correctIndex: 1,
        reason: { en: 'NCERT p.131 highlights thread hyphae are NOT reproductive parts; tiny round Sporangia release reproductive spores!', hi: 'NCERT पृ. 131 स्पष्ट कहता है कि तंतु जनन भाग नहीं हैं — गुच्छ बीजाणुधानी (`Sporangia`) में बीजाणु होते हैं।' },
      },
    },
    {
      num: '7.3',
      title: { en: 'Activity 7.3: Permanent Slides — Resting Amoeba vs Binary Fission (`p.127`)', hi: 'क्रियाकलाप 7.3: अमीबा बनाम द्विखंडन स्थायी स्लाइड तुलना (`पृ. 127`)' },
      materials: { en: 'Permanent Amoeba slide, binary-fission Amoeba slide, compound microscope', hi: 'अमीबा व अमीबा द्विखंडन की स्थायी स्लाइडें एवं सूक्ष्मदर्शी' },
      steps: { en: 'Compare single resting Amoeba slide against dividing binary-fission stage slide (`nucleus splits first, then cytoplasm constricts`).', hi: 'सामान्य अमीबा स्लाइड और द्विखंडन अवस्था वाली स्लाइड की सूक्ष्मदर्शी से तुलना करें।' },
      examTakeaway: { en: 'Amoeba splits **in ANY plane** (`unlike whip-bearing Leishmania’s definite plane` or `Plasmodium’s multiple fission`)!', hi: 'अमीबा में कोशिका विभाजन **किसी भी तल** से होता है (`जबकि लेस्मानिया में चाबुक कारण निश्चित तल से!`)।' },
      predictQuestion: {
        prompt: { en: 'Unlike Amoeba (`any plane`), why does Leishmania undergo binary fission strictly along ONE fixed plane (`Tech Shift 15`)?', hi: 'अमीबा (`किसी भी तल`) के विपरीत लेस्मानिया में द्विखंडन सदैव एक निश्चित तल से ही क्यों होता है?' },
        options: { en: ['It forms multi-layered buds', 'Because it has a polar whip-like structure (`flagellum`) at one end organizing its body', 'Because it has seeds inside', 'Because it lives in soil hyphae'], hi: ['मुकुल बनने से', 'कोशिका के एक सिरे पर चाबुक जैसी सूक्ष्म संरचना होने से अधिक संगठित शरीर रहता है', 'बीज होने से', 'कवक तंतु से'] },
        correctIndex: 1,
        reason: { en: 'Leishmania (`Kala-azar`) has a whip-like structure at one end dictating an oriented split plane (`Fig 7.1b`).', hi: 'लेस्मानिया (`कालाजार रोगाणु`) के एक सिरे की चाबुक संरचना द्विखंडन का तल निश्चित करती है!' },
      },
    },
    {
      num: '7.4',
      title: { en: 'Activity 7.4: Pond Water Filamentous Spirogyra Slide (`p.128`)', hi: 'क्रियाकलाप 7.4: तालाब के हरे जल में स्पाइरोगाइरा तंतु (`खंडन`, `पृ. 128`)' },
      materials: { en: 'Dark green pond/lake water with filaments, slide, glycerine drop, coverslip, microscope', hi: 'तालाब का हरा तंतुमय जल, स्लाइड, ग्लिसरीन, कवर-स्लिप व सूक्ष्मदर्शी' },
      steps: { en: 'Mount 1–2 dark green pond algal filaments with glycerine drop under coverslip and search for differentiated tissues.', hi: 'तंतुओं पर एक बूँद ग्लिसरीन डाल कवर-स्लिप से ढककर देखें कि क्या इसमें अलग-अलग ऊतक पहचान आते हैं?' },
      examTakeaway: { en: '**NO specialized tissues/organs!** Spirogyra has uniform simple cells -> reproduces smoothly by **Fragmentation (`खंडन`)** (`Tech Shift 16 & 19`).', hi: 'स्पाइरोगाइरा में विभिन्न ऊतक-अंग नहीं दिखते — सरल संरचना होने से यह परिपक्व हो **खंडन (`Fragmentation`)** द्वारा जनन करता है!' },
      predictQuestion: {
        prompt: { en: 'What proves in Activity 7.4 why humans or complex animals CANNOT reproduce by Spirogyra-style fragmentation?', hi: 'क्रियाकलाप 7.4 में क्या देखने पर पता चलता है कि जटिल जीव खंडन द्वारा जनन क्यों नहीं कर सकते?' },
        options: { en: ['Spirogyra lacks distinct specialized tissues/organs, whereas complex organisms organize cells into fixed-site tissues & organs', 'Human cells lack DNA', 'Water stops tissue division', 'Glycerine dissolves membranes'], hi: ['स्पाइरोगाइरा में विशेषीकृत ऊतक-अंग नहीं हैं, जबकि जटिल जीवों में ऊतक व अंग निश्चित स्थानों पर संगठित हैं', 'मानव में DNA नहीं', 'पानी बाधक है', 'ग्लिसरीन से'] },
        correctIndex: 0,
        reason: { en: 'Cell-by-cell division works only when cells aren’t specialized into fixed anatomical tissues & organs.', hi: 'सजग संगठित ऊतक व अंगों वाले जटिल शरीर में सरल कोशिका-दर-कोशिका विभाजन अव्यावहारिक है!' },
      },
    },
    {
      num: '7.5',
      title: { en: 'Activity 7.5: Potato Notches (`Eyes`) on Moist Cotton Tray (`p.130`)', hi: 'क्रियाकलाप 7.5: आलू के गर्त (`आँख`) वाले टुकड़ों से कायिक प्रवर्धन (`पृ. 130`)' },
      materials: { en: 'Potato with & without eye-notches, knife, moist cotton in tray', hi: 'गर्त व बिना-गर्त वाले आलू के टुकड़े, ट्रे व गीली रुई' },
      steps: { en: 'Place eye-notch potato pieces on one side of moist cotton tray and smooth notchless pieces opposite (`keep cotton moist for days`).', hi: 'ट्रे में गीली रुई पर एक ओर कलिका (गर्त) वाले टुकड़े व दूसरी ओर बिना-गर्त के टुकड़े कुछ दिन नमी संग रखें।' },
      examTakeaway: { en: '**ONLY pieces containing eye-buds/notches sprout green shoots & roots (`Vegetative Stem Propagation`)** — notchless pieces rot/stay bare!', hi: '**केवल गर्त (आँख/कलिका) वाले टुकड़ों से ही हरे प्ररोह व जड़ें निकलती हैं** (`कायिक प्रवर्धन`)!' },
      predictQuestion: {
        prompt: { en: 'Which potato pieces sprout green shoots & roots on wet cotton in Activity 7.5?', hi: 'क्रियाकलाप 7.5 में गीली रुई पर रखे किन आलू के टुकड़ों से प्ररोह व जड़ें निकलेंगी?' },
        options: { en: ['Smooth inner pith pieces without skin notches', 'Only pieces bearing buds/notches (“eyes”)', 'All pieces boiled first', 'Neither — potatoes only grow from flowers'], hi: ['बिना गर्त वाले चिकने टुकड़े', 'केवल वे टुकड़े जिनमें गर्त / कलिका (आँख) मौजूद है', 'उबले टुकड़े', 'केवल फूलों से'] },
        correctIndex: 1,
        reason: { en: 'Axillary vegetative buds inside potato “eyes” initiate green shoots and roots under moist conditions.', hi: 'आलू के गर्तों में छिपी कायिक कलिकाएँ नमी पाकर नया पौधा उगाती हैं।' },
      },
    },
    {
      num: '7.6',
      title: { en: 'Activity 7.6: Money-Plant Stem Nodes vs Internodes in Water (`p.130`)', hi: 'क्रियाकलाप 7.6: मनीप्लांट की पत्ती सहित पोर बनाम मध्य-भाग की वृद्धि (`पृ. 130`)' },
      materials: { en: 'Money-plant stem, water beaker', hi: 'मनीप्लांट का तना (पत्ती सहित व बिना पत्ती टुकड़े), जल पात्र' },
      steps: { en: 'Cut pieces WITH at least one leaf (`node`), plus bare stem pieces cut purely between two leaves (`internodes`); submerge one end in water.', hi: 'एक तरफ कम-से-कम एक पत्ती (`पोर`) वाले टुकड़े व दूसरी तरफ दो पत्तियों के मध्य के भाग जल में डुबोकर कुछ दिन देखें।' },
      examTakeaway: { en: '**Cuttings carrying a leaf/node sprout fresh roots & new leaves**; leafless bare internode segments fail to grow!', hi: '**पत्ती (`गाँठ/पोर`) वाले टुकड़ों में ही जड़ें व नई पत्तियाँ निकलती हैं** जबकि बिना पोर वाला मध्य भाग नहीं बढ़ता!' },
      predictQuestion: {
        prompt: { en: 'In Activity 7.6, why do money-plant cuttings containing a leaf node grow cleanly in water while mid-internode bare pieces fail?', hi: 'क्रियाकलाप 7.6 में केवल पोर/पत्ती वाले मनीप्लांट के टुकड़े ही जल में नई वृद्धि क्यों करते हैं?' },
        options: { en: ['Meristematic buds reside at leaf nodes, NOT bare mid-internodes', 'Internodes contain hydrochloric acid', 'Leaves absorb NaCl into stem', 'Only roots have DNA'], hi: ['पत्ती के पोर/गाँठ पर कलिका व विभाज्योतक ऊतक होते हैं, मध्य-पर्व में नहीं', 'अम्ल के कारण', 'नमक के कारण', 'DNA न होने से'] },
        correctIndex: 0,
        reason: { en: 'Vegetative axillary buds sit at stem nodes (`where leaves attach`), driving new shoots & adventitious roots.', hi: 'पत्ती जुड़ने के स्थान (`पोर/गाँठ`) पर स्थित कलिकाओं में ही नया प्ररोह व जड़ विकसित करने की क्षमता होती है।' },
      },
    },
    {
      num: '7.7',
      title: { en: 'Activity 7.7: Soaked Bengal Gram Seed Dissection (`Cotyledons, Plumule, Radicle`, `Fig 7.9`)', hi: 'क्रियाकलाप 7.7: भीगे चने के बीज में बीजपत्र, प्रांकुर व मूलांकुर पहचान (`चित्र 7.9`, `पृ. 134`)' },
      materials: { en: 'Bengal gram (चना) seeds, water, damp cloth', hi: 'चने के बीज, जल व गीला कपड़ा' },
      steps: { en: 'Soak gram seeds overnight, drain excess water, wrap in damp cloth 1 day without letting dry, split carefully & compare with Fig 7.9.', hi: 'चने रात भर भिगोएँ, पानी निकाल 1 दिन गीले कपड़े में लपेटें, फिर सावधानी से बीज खोल चित्र 7.9 से भाग पहचानें।' },
      examTakeaway: { en: '**Cotyledons (`food storage`)**, **==Plumule (`प्रांकुर` → future SHOOT)==**, **==Radicle (`मूलांकुर` → future ROOT)==** (`Germination`!).', hi: 'दो **बीजपत्र (`खाद्य संग्रह`)**, ऊपर मुड़ा **==प्रांकुर (`भावी प्ररोह`)==** व नीचे निकला **==मूलांकुर (`भावी जड़`)==**!' },
      predictQuestion: {
        prompt: { en: 'Inside a split soaked gram seed (`Fig 7.9`), which two structures develop into the future ROOT and SHOOT respectively?', hi: 'अंकुरित चने के बीज (`चित्र 7.9`) में भविष्य की जड़ (`Root`) व तना (`Shoot`) क्रमशः किन भागों से बनते हैं?' },
        options: { en: ['Plumule -> Root; Radicle -> Shoot', 'Radicle -> Root; Plumule -> Shoot (`while Cotyledons store food`)', 'Cotyledon -> Root; Style -> Shoot', 'Ovary -> Root; Seedcoat -> Shoot'], hi: ['प्रांकुर → जड़; मूलांकुर → तना', 'मूलांकुर (`Radicle`) → जड़; प्रांकुर (`Plumule`) → तना/प्ररोह (`बीजपत्र खाद्य दे`)', 'बीजपत्र → जड़', 'अंडाशय → जड़'] },
        correctIndex: 1,
        reason: { en: 'Remember R = Radicle -> Root! And P = Plumule -> Plant shoot; Cotyledons nourish germination!', hi: '`म से मूलांकुर → मूल (जड़)` तथा `प से प्रांकुर → प्ररोह (तना)`, व बीजपत्र संचित भोजन देते हैं।' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-7-1',
      title: {
        en: 'Master Asexual Reproduction Matrix: Mode, Organism, Key NCERT Detail & RRB PYQ Shift (`Sec 7.2`)',
        hi: 'अलैंगिक जनन की सभी 6 विधियाँ, विशिष्ट जीव व प्रमुख रेलवे परीक्षा तथ्य (`भाग 7.2`)',
      },
      headers: {
        en: ['Asexual Mode', 'Representative Organisms', 'Critical Mechanism / NCERT Clause', 'CBT Exam Question Hit'],
        hi: ['अलैंगिक विधि', 'प्रमुख उदाहरण जीव', 'विशिष्ट क्रियाविधि व NCERT शर्त', 'सीधा RRB परीक्षा प्रश्न'],
      },
      rows: [
        [{ en: '**Binary Fission**', hi: '**द्विखंडन (`Binary Fission`)**' }, { en: '**`Amoeba`**, **`Leishmania`** (`Kala-azar`)', hi: '**अमीबा**, **लेस्मानिया** (`कालाजार`)' }, { en: '`Amoeba`: **ANY plane** | `Leishmania`: **whip -> fixed plane**', hi: 'अमीबा: **किसी भी तल से** | लेस्मानिया: **चाबुक संग निश्चित तल**' }, { en: '`Tech 2024 Shifts 1, 15, 16`', hi: '`Tech 2024 शिफ्ट 1, 15, 16`' }],
        [{ en: '**Multiple Fission**', hi: '**बहुखंडन (`Multiple Fission`)**' }, { en: '**`Plasmodium`** (`Malarial parasite`)', hi: '**प्लैज्मोडियम** (`मलेरिया परजीवी`)' }, { en: 'Single unicellular body divides into **MANY cells at once**', hi: 'एकसाथ अनेक संतति कोशिकाओं में विभाजन (`चित्र 7.2`)' }, { en: '`Tech 2024 Shifts 9 & 20`', hi: '`Tech 2024 शिफ्ट 9 व 20`' }],
        [{ en: '**Fragmentation**', hi: '**खंडन (`Fragmentation`)**' }, { en: '**`Spirogyra`** (`Act 7.4`)', hi: '**स्पाइरोगाइरा** (`सरल शैवाल`)' }, { en: 'Works **ONLY in simple multicellular bodies** (`no complex organs`!)', hi: '**केवल सरल बहुकोशिकीय जीवों** में (जटिल में नहीं!)' }, { en: '`Tech 2024 Shifts 2, 10, 16, 19`', hi: '`Tech 2024 शिफ्ट 2, 10, 16, 19`' }],
        [{ en: '**Regeneration & Budding**', hi: '**पुनरुद्भवन व मुकुलन**' }, { en: 'Regen: **`Planaria, Hydra`** | Bud: **`Hydra, Yeast`**', hi: 'पुनरुद्भवन: **प्लेनेरिया** | मुकुलन: **हाइड्रा, यीस्ट**' }, { en: 'Hydra uses **regenerative cells** for buds; **Regen ≠ Reproduction**', hi: 'हाइड्रा पुनर्जनन कोशिका से मुकुल बनाए; **पुनरुद्भवन ≠ जनन**' }, { en: '`ALP Shift 6; Tech 7, 8, 14, 22`', hi: '`ALP शिफ्ट 6; Tech 7, 8, 14, 22`' }],
        [{ en: '**Vegetative & Spores**', hi: '**कायिक व बीजाणु समासंघ**' }, { en: '**`Bryophyllum`, Potato** | **`Rhizopus`** (`bread`)', hi: '**ब्रायोफिलम, आलू** | **राइजोपस**' }, { en: 'Leaf margin buds / Callus tissue culture | **Hyphae NO repro, Sporangia ✓**', hi: 'पत्ती खाँचे (`7.5`) | **कवक तंतु नहीं, बीजाणुधानी जनन अंग (`7.6`)**' }, { en: '`Tech Shifts 10, 14, 19, 20, 21`', hi: '`Tech शिफ्ट 10, 14, 19, 20, 21`' }],
      ],
    },
    {
      id: 'tbl-7-2',
      title: {
        en: 'Angiosperm Flower Whorls, Post-Fertilisation Fates & Seed Germination Map (`Fig 7.7–7.9`)',
        hi: 'पुष्प के अंग, एकलिंगी-उभयलिंगी भेद, निषेचन बाद परिवर्तन व बीज भाग (`चित्र 7.7–7.9`)',
      },
      headers: {
        en: ['Floral / Seed Structure', 'Role Before / During Fertilisation', 'Post-Fertilisation Fate / Product', 'Must-Know Exam Example / Trap'],
        hi: ['पुष्प / बीज भाग', 'निषेचन पूर्व/दौरान कार्य', 'निषेचन बाद रूपांतरण', 'प्रमुख उदाहरण व परीक्षा नोट'],
      },
      rows: [
        [{ en: '**Flower Polarity**', hi: '**पुष्प लिंग भेद**' }, { en: 'Unisexual (`stamen OR pistil`) vs Bisexual (`BOTH`)', hi: 'एकलिंगी (एक जननांग) vs उभयलिंगी (दोनों)' }, { en: 'Self-pollination (`same flower`) vs Cross (`vectors`)', hi: 'स्वपरागण (एक ही पुष्प) vs पर-परागण' }, { en: '**Unisexual: `Papaya, Watermelon`** | **Bisexual: `Hibiscus, Mustard`**', hi: '**एकलिंगी: पपीता, तरबूज** | **उभयलिंगी: गुड़हल, सरसों**' }],
        [{ en: '**Stamen (`Male`)**', hi: '**पुंकेसर (`नर भाग`)**' }, { en: '**Filament + Anther** (`makes yellow pollen`)', hi: 'तंतु + **परागकोश (`परागकण बनते हैं`)**' }, { en: 'Withers/falls after fertilisation', hi: 'प्रायः मुरझाकर गिर जाता है' }, { en: '**NCERT Ex Q3**: Anther contains **Pollen grains**!', hi: '**अभ्यास Q3**: परागकोश में **परागकण** होते हैं!' }],
        [{ en: '**Pistil (`Stigma/Style/Ovary`)**', hi: '**स्त्रीकेसर (`मादा भाग`)**' }, { en: 'Stigma catches pollen; **Pollen tube traverses Style**', hi: 'वर्तिकाग्र पराग ले; **वर्तिका से पराग नली**' }, { en: '**Ovary develops rapidly into `FRUIT`**!', hi: '**अंडाशय परिपक्व होकर `फल` बनता है!**' }, { en: '**`Tech 2024 Shifts 21 & 22 PYQs`** (`Style` path & `Fruit`)', hi: '**`Tech Shift 21–22 PYQ`** (`वर्तिका` व `फल`)' }],
        [{ en: '**Ovule & Zygote**', hi: '**बीजांड व युग्मनज**' }, { en: 'Holds female egg cell; fertilised -> **Zygote -> Embryo**', hi: 'अंड-कोशिका रखती; युग्मनज → **भ्रूण**' }, { en: '**Ovule develops tough coat -> `SEED`** (`Ex Q17/Shift 23`)', hi: '**बीजांड कठोर आवरण पाकर `बीज` बनता है**' }, { en: 'Seeds allow survival & dispersal until germination', hi: 'अंकुरण द्वारा भावी पौधा बनता है (`Shift 17 & 23`)' }],
        [{ en: '**Germinating Seed (`Fig 7.9`)**', hi: '**अंकुरित बीज (`चित्र 7.9`)**' }, { en: '3 embryo structures inside moist seed coat', hi: 'गीले बीज के भीतर 3 मुख्य भाग' }, { en: '**Cotyledons**: Food | **Plumule**: Shoot | **Radicle**: Root', hi: '**बीजपत्र**: खाद्य | **प्रांकुर**: प्ररोह | **मूलांकुर**: जड़' }, { en: 'Checked directly via Bengal gram (`चना`) Activity 7.7!', hi: 'क्रियाकलाप 7.7 चने के बीज में अवलोकित (`पृ. 134`)!' }],
      ],
    },
    {
      id: 'tbl-7-3',
      title: {
        en: 'Human Male Reproductive Anatomy & Glandular Functions (`NCERT Sec 7.3.3a`, Fig 7.10)',
        hi: 'मानव नर जनन तंत्र: अंग, स्थान व विशिष्ट कार्य तालिका (`भाग 7.3.3a`, चित्र 7.10)',
      },
      headers: {
        en: ['Male Organ / Gland', 'Anatomical Location / Path', 'Exact Physiological Function', 'CBT / NCERT Ex Key Fact'],
        hi: ['नर जननांग / ग्रंथि', 'शारीरिक स्थिति / मार्ग', 'मुख्य कार्य', 'परीक्षा व अभ्यास प्रश्न तथ्य'],
      },
      rows: [
        [{ en: '**Testes (`वृषण`)**', hi: '**वृषण (`Testes`)**' }, { en: 'Inside **Scrotum outside abdominal cavity**', hi: 'उदर गुहा के बाहर **वृषण कोष (`Scrotum`)** में' }, { en: 'Produces **Sperms + Testosterone hormone**', hi: '**शुक्राणु निर्माण + टेस्टोस्टेरॉन** स्रवण' }, { en: 'Scrotum sits outside because **sperm needs LOWER temp than body** (`Ex Q5`)!', hi: '**शुक्राणु उत्पादन हेतु शरीर से कम तापमान आवश्यक** (`अभ्यास Q5`)' }],
        [{ en: '**Vas Deferens (`शुक्रवाहिका`)**', hi: '**शुक्रवाहिनी (`Vas deferens`)**' }, { en: 'Long duct looping over **Urinary Bladder**', hi: 'मूत्राशय के ऊपर से आती नलिका' }, { en: 'Transports mature sperms toward urethra', hi: 'शुक्राणुओं को मूत्रमार्ग तक लाती है' }, { en: '**Vasectomy** blocks this duct; NOT in females (`Ex Q2`)!', hi: 'पुरुष नसबंदी में इसे अवरुद्ध करें (`अभ्यास Q2 अपवाद`)' }],
        [{ en: '**Seminal Vesicles & Prostate**', hi: '**शुक्राशय व प्रोस्टेट ग्रंथि**' }, { en: 'Add secretions along Vas deferens', hi: 'शुक्रवाहिनी में तरल स्राव डालती हैं' }, { en: 'Provides **FLUID medium (`easy transport`) + NUTRITION**', hi: '**तरल माध्यम (`सुगम स्थानांतरण`) + पोषण** प्रदान करें' }, { en: 'Directly asked in **In-Text `p.138 Q2`**!', hi: 'सीधे **पृ. 138 प्रश्‍न 2** में पूछा गया है!' }],
        [{ en: '**Urethra (`मूत्रमार्ग`)** & Sperm', hi: '**मूत्रमार्ग व शुक्राणु पूँछ**' }, { en: 'Runs inside muscular Penis (`common exit`)', hi: 'शिश्न के अंदर से गुजरती उभय नली' }, { en: '**COMMON passage for BOTH Urine & Sperms**; tail swims', hi: '**मूत्र व शुक्राणु दोनों का उभय मार्ग**; पूँछ तैरने में मदद' }, { en: '1 unpaired urethra (`matches Ch 5 Fig 5.13!`)', hi: 'समान अयुग्मित मूत्रमार्ग (`अध्याय 5 व 7 दोनों में महत्त्वपूर्ण`)' }],
      ],
    },
    {
      id: 'tbl-7-4',
      title: {
        en: 'Human Female Reproductive Organs, Placenta, Zygote & Menstrual Cycle (`Sec 7.3.3b–c`, Fig 7.11)',
        hi: 'मानव मादा जनन अंग, निषेचन स्थल, अपरा (`Placenta`) व ऋतुस्राव चक्र (`भाग 7.3.3b–c`, चित्र 7.11)',
      },
      headers: {
        en: ['Female Structure / Process', 'Key Anatomy & Location', 'Physiological Function (`NCERT p.136–137`)', 'RRB Match-Column Hit'],
        hi: ['मादा अंग / प्रक्रम', 'संरचना व स्थिति', 'सटीक कार्य (`NCERT पृ. 136–137`)', 'रेलवे मिलान प्रश्न (`PYQ`)'],
      },
      rows: [
        [{ en: '**Ovaries (`अंडाशय`)**', hi: '**अंडाशय (`1 युग्म`)**' }, { en: 'Thousands immature eggs from birth (`1/mo`)', hi: 'जन्म से हजारों अपरिपक्व अंड (`1/माह परिपक्व`)' }, { en: 'Releases female **Egg gamete + hormones**', hi: 'मादा युग्मक (`अंड`) व हार्मोन का निर्माण' }, { en: '`Group D Shift 16 & Tech Shift 20`', hi: '`Group D शिफ्ट 16 व Tech शिफ्ट 20`' }],
        [{ en: '**Oviduct (`Fallopian Tube`)**', hi: '**डिंबवाहिनी / फैलोपियन ट्यूब**' }, { en: 'Thin tubes carrying egg ovary -> uterus', hi: 'अंडाशय से अंड गर्भाशय तक ले जाने वाली पतली नली' }, { en: '**EXACT SITE OF FERTILISATION** (`sperm meets egg`!)', hi: '**निषेचन यहीं डिंबवाहिनी में होता है**!' }, { en: '**Tubectomy** ties oviduct (`46` chr zygote formed, `Shift 19`)', hi: 'महिला नसबंदी यहीं (`Group D 16 & Tech 8, 20`)' }],
        [{ en: '**Uterus (`गर्भाशय`) & Menstruation**', hi: '**गर्भाशय व ऋतुस्राव (`2–8 दिन`)**' }, { en: 'Elastic bag-like organ (`Cervix -> Vagina`)', hi: 'लचीली थैलीनुमा रचना (`ग्रीवा → योनि`)' }, { en: '**Implantation** of embryo (`9 mo gestation`); unfertilised lining sheds **`2–8 days`**!', hi: 'भ्रूण **अंतर्रोपण (`9 माह`)**; अनिषेचित (`~1 दिन`) अंड पर **`2–8 दिन` ऋतुस्राव**' }, { en: '`NCERT Ex Q6 & Tech Shift 20`', hi: '`NCERT अभ्यास Q6 व Tech शिफ्ट 20`' }],
        [{ en: '**Placenta (`अपरा / गर्भनाल`)**', hi: '**अपरा (`Placenta`)**' }, { en: 'Special **disc tissue embedded in uterine wall**', hi: 'गर्भाशय भित्ति में धँसी **तश्तरीनुमा रचना**' }, { en: 'Embryo **villi** + maternal **blood spaces**: passes **Glucose/O₂ in, Wastes out**', hi: 'भ्रूण प्रवर्ध + माँ रक्तस्थान: **ग्लूकोज व `O₂` दे तथा अपशिष्ट हटाए**' }, { en: '**`p.138 Q4` & `Tech Shift 6 & 20`**', hi: '**`पृ. 138 Q4` व `Tech Shifts 6, 20`**' }],
      ],
    },
    {
      id: 'tbl-7-5',
      title: {
        en: 'Four Contraceptive Methods Comparison & Bacterial vs Viral STD Classification (`Sec 7.3.3d`)',
        hi: 'गर्भनिरोधन की 4 विधियाँ व यौन संचारित रोगों (`STD`) का वर्गीकरण सारणी (`भाग 7.3.3d`)',
      },
      headers: {
        en: ['Method / Disease Class', 'Mechanism / Examples', 'Side Effects / Limitations', 'Protects Against STDs?'],
        hi: ['विधि / रोग वर्ग', 'क्रियाविधि व उदाहरण', 'दुष्प्रभाव / सीमाएँ', 'क्या STD से बचाता है?'],
      },
      rows: [
        [{ en: '**1. Mechanical Barriers**', hi: '**1. यांत्रिक अवरोध**' }, { en: '**Condoms** on penis / vaginal coverings block sperm entry', hi: '**कंडोम** या योनि आवरण से शुक्राणु अंड तक न जाए' }, { en: 'Low failure only if torn/misused', hi: 'बहुत कम सीमा; प्रयोग में सरल' }, { en: '**YES (Partial ✓)** — ONLY STD-blocking contraceptive!', hi: '**हाँ (आंशिक ✓)** — एकमात्र STD-रक्षक विधि!' }],
        [{ en: '**2. Hormonal Oral Pills**', hi: '**2. गर्भनिरोधक गोलियाँ**' }, { en: 'Change hormonal balance **preventing egg release**', hi: 'हार्मोन संतुलन बदल **अंड मोचन रोकें**' }, { en: 'Hormonal disturbance can cause side-effects', hi: 'हार्मोन बदलाव से कुछ विपरीत प्रभाव संभव' }, { en: '**NO ✗**', hi: '**नहीं ✗**' }],
        [{ en: '**3. IUCDs (`Copper-T / Loop`)**', hi: '**3. कॉपर-T / लूप (`IUCD`)**' }, { en: 'Placed inside **Uterus** to prevent pregnancy', hi: '**गर्भाशय में स्थापित** कर निषेचन/रोपण रोकना' }, { en: 'May cause **irritation of uterus**', hi: 'गर्भाशय के उत्तेजन से विपरीत प्रभाव संभव' }, { en: '**NO ✗** (**NCERT `p.138 Q5`!**)', hi: '**नहीं ✗** (**पृ. 138 प्रश्‍न 5 सीधा सवाल!**)' }],
        [{ en: '**4. Surgical & STD Pathogens**', hi: '**4. शल्यक्रिया व STD रोग कारक**' }, { en: 'Vasectomy/Tubectomy | **Bacterial: `Gonorrhoea, Syphilis`** vs **Viral: `Warts, HIV-AIDS`**', hi: 'पुरुष/महिला नसबंदी | **जीवाणु: `गोनेरिया, सिफिलिस`** vs **वायरस: `मस्सा, HIV`**' }, { en: 'Surgery permanent; improper hygiene risks infection', hi: 'दीर्घकालिक विधि; असावधानी से संक्रमण संभव' }, { en: '**NO ✗** (`Surgery blocks only gametes`)', hi: '**नहीं ✗** (`केवल युग्मक मार्ग अवरुद्ध`)' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.126 Q1',
      q: { en: 'What is the importance of DNA copying in reproduction?', hi: 'डी.एन.ए. प्रतिकृति का प्रजनन में क्या महत्त्व है?' },
      a: { en: 'DNA inside cell nucleus holds the **blueprint for protein synthesis and body design (`7.1`)**. Copying DNA ensures offspring inherit identical basic features to fit their ecosystem niche (`while tiny copy variations fuel evolution`).', hi: 'केंद्रक के **DNA में प्रोटीन संश्लेषण व शारीरिक अभिकल्प की आनुवंशिक सूचना** होती है; DNA प्रतिकृति से संतति को जनक समान आधारभूत संरचना व गुणधर्म मिलते हैं (और सूक्ष्म त्रुटियों से उत्तरजीविता हेतु विभिन्नता आती है)।' },
    },
    {
      num: 'p.126 Q2',
      q: { en: 'Why is variation beneficial to the species but not necessarily for the individual?', hi: 'जीवों में विभिन्नता स्पीशीज के लिए तो लाभदायक है, परंतु व्यष्टि के लिए आवश्यक नहीं है, क्यों?' },
      a: { en: 'Individual variation may offer zero benefit in stable normal conditions. Yet if drastic niche shifts occur (`e.g. warming water killing most temperate bacteria`), **pre-existing resistant variants within the population survive to preserve the entire species**!', hi: 'सामान्य स्थिर परिस्थितियों में एकल व्यष्टि को विभिन्नता की आवश्यकता नहीं होती, परंतु यदि आवास का ताप/जल-स्तर अचानक बदल जाए (`जैसे उष्ण जल`), तो समष्टि के **उष्ण-प्रतिरोधी परिवर्त जीवित रहकर पूरी स्पीशीज के विनाश को रोकते** हैं।' },
    },
    {
      num: 'p.131 Q1',
      q: { en: 'How does binary fission differ from multiple fission?', hi: 'द्विखंडन, बहुखंडन से किस प्रकार भिन्न है?' },
      a: { en: '**Binary Fission**: One unicellular organism divides cleanly into **TWO daughter cells** (`Amoeba`, `Leishmania`). **Multiple Fission**: Parent cell splits simultaneously into **MANY daughter cells** (`malarial parasite Plasmodium`, Fig 7.2).', hi: '**द्विखंडन**: एक कोशिका दो बराबर भागों में विभक्त होती है (`अमीबा, लेस्मानिया`)। **बहुखंडन**: एकसाथ अनेक संतति कोशिकाओं में विभाजन (`मलेरिया परजीवी प्लैज्मोडियम`)।' },
    },
    {
      num: 'p.131 Q2',
      q: { en: 'How will an organism be benefited if it reproduces through spores?', hi: 'बीजाणु द्वारा जनन से जीव किस प्रकार लाभान्वित होता है?' },
      a: { en: 'Spores (`Rhizopus`) sit covered by **thick protective walls (`p.131`)** shielding them against extreme heat, drought & lack of food until they land on moist nutrient surfaces and germinate cleanly!', hi: 'बीजाणु के चारों ओर **एक मोटी रक्षक भित्ति** होती है जो सूखे व अत्यधिक ताप जैसी प्रतिकूल परिस्थितियों में रक्षा करती है तथा नम सतह मिलने पर नए जीव उगाती है।' },
    },
    {
      num: 'p.131 Q3',
      q: { en: 'Can you think of reasons why more complex organisms cannot give rise to new individuals through regeneration?', hi: 'क्या आप कुछ कारण सोच सकते हैं, जिससे पता चलता हो कि जटिल संरचना वाले जीव पुनरुद्भवन द्वारा नई संतति उत्पन्न नहीं कर सकते?' },
      a: { en: 'Complex organisms aren’t loose collections of uniform cells: their specialised cells organize hierarchically into **tissues, organs, and fixed-site organ systems (`p.128`)** that cannot rebuild a whole animal from an arbitrary cut fragment.', hi: 'जटिल बहुकोशिकीय जीवों की विशिष्ट कोशिकाएँ **ऊतकों, अंगों व निश्चित-स्थान तंत्रों** में संगठित रहती हैं — अतः किसी कटे हिस्से से पूरा जटिल शरीर पुनः बनाना संभव नहीं है।' },
    },
    {
      num: 'p.131 Q4',
      q: { en: 'Why is vegetative propagation practised for growing some types of plants?', hi: 'कुछ पौधों को उगाने के लिए कायिक प्रवर्धन का उपयोग क्यों किया जाता है?' },
      a: { en: '**(1)** Enables propagation of plants that **lost ability to produce seeds** (`Banana, Orange, Rose, Jasmine`); **(2)** Bears **flowers & fruits much EARLIER** than seed-grown crops; **(3)** Offspring remain **genetically identical** to high-yield parent!', hi: '**(1)** बीज उत्पन्न न कर पाने वाले **केला, संतरा, गुलाब, चमेली** उगाने हेतु; **(2)** बीज से उगे पौधों की अपेक्षा **कम समय में फल-फूल** पाने हेतु; **(3)** सभी संतति जनक के **आनुवंशिक समान** होती हैं!' },
    },
    {
      num: 'p.131 Q5',
      q: { en: 'Why is DNA copying an essential part of the process of reproduction?', hi: 'डी.एन.ए. की प्रतिकृति बनाना जनन के लिए आवश्यक क्यों है?' },
      a: { en: 'DNA carries hereditary blueprints for protein synthesis creating organism structure & metabolism (`7.1`). Without DNA copying, daughter cells wouldn’t inherit genetic instructions to build working body designs.', hi: 'DNA में आनुवंशिक गुणों व प्रोटीन निर्माण का ब्लूप्रिंट रहता है; इसके बिना संतति कोशिकाएँ जनक समान संरचना व जैव प्रक्रम चलाने में असमर्थ होंगी।' },
    },
    {
      num: 'p.138 Q1',
      q: { en: 'How is the process of pollination different from fertilisation?', hi: 'परागण क्रिया निषेचन से किस प्रकार भिन्न है?' },
      a: { en: '**Pollination (`परागण`)**: Physical **transfer of pollen grains** from stamen anther to stigma (`assisted by wind, water, animals`). **Fertilisation (`निषेचन`)**: Actual biological **fusion of male and female gametes** (`sperm nucleus + egg inside ovule`) forming a **zygote (`Tech Shift 9`!)**.', hi: '**परागण**: पुंकेसर से वर्तिकाग्र तक **परागकणों का केवल स्थानांतरण** (वायु, जल, कीट द्वारा)। **निषेचन**: नर युग्मक व अंड-कोशिका (**मादा युग्मक) का वास्तविक संलयन** जिससे युग्मनज बनता है (`Group D Shift 9`)!' },
    },
    {
      num: 'p.138 Q2',
      q: { en: 'What is the role of the seminal vesicles and the prostate gland?', hi: 'शुक्राशय एवं प्रोस्टेट ग्रंथि की क्या भूमिका है?' },
      a: { en: 'Both glands pour fluid secretions into the vas deferens so sperms sit suspended in a **fluid medium that eases transport** AND **supplies nutrition** during movement (`p.136`).', hi: 'दोनों ग्रंथियाँ शुक्रवाहिनी में अपना स्राव डालती हैं जिससे शुक्राणुओं को **स्थानांतरण हेतु सरल तरल माध्यम तथा पोषण** प्राप्त होता है (`पृ. 136`)।' },
    },
    {
      num: 'p.138 Q3',
      q: { en: 'What are the changes seen in girls at the time of puberty?', hi: 'यौवनारंभ के समय लड़कियों में कौन से परिवर्तन दिखाई देते हैं?' },
      a: { en: '**Common changes**: Thick dark hair growth in armpits & genital region, finer facial/limb hair, oilier skin/pimples. **Girl-specific**: Enlargement of breasts, darkening of nipple skin, and onset of monthly **menstruation (`p.134`)**.', hi: 'काँख व जननांग क्षेत्र में गहरे बाल, तैलीय त्वचा/मुँहासे, **स्तन के आकार में वृद्धि, स्तनाग्र त्वचा का गहरा रंग तथा रजोधर्म (`मासिक चक्र`) की शुरुआत**।' },
    },
    {
      num: 'p.138 Q4',
      q: { en: 'How does the embryo get nourishment inside the mother’s body?', hi: 'माँ के शरीर में गर्भस्थ भ्रूण को पोषण किस प्रकार प्राप्त होता है?' },
      a: { en: 'Through a specialised disc-shaped uterine tissue called **==Placenta (`अपरा`)==**: embryo-side finger **villi** sit bathed in mother’s blood spaces providing vast surface for transferring **glucose & oxygen to embryo** and removing metabolic **wastes into mother’s blood (`p.137`)**.', hi: 'गर्भाशय भित्ति में धँसी तश्तरीनुमा संरचना **==अपरा (`प्लेसेंटा`)==** द्वारा: इसके भ्रूण-प्रवर्ध व माँ के रक्तस्थान **ग्लूकोज एवं `O₂`** भ्रूण को पहुँचाते और अपशिष्ट माँ के रक्त में वापस भेजते हैं (`पृ. 137`)।' },
    },
    {
      num: 'p.138 Q5',
      q: { en: 'If a woman is using a Copper-T, will it help in protecting her from sexually transmitted diseases?', hi: 'यदि कोई महिला कॉपर-टी का प्रयोग कर रही है तो क्या यह उसकी यौन-संचरित रोगों से रक्षा करेगा?' },
      a: { en: '**NO!** **Copper-T (`IUCD`)** sits inside the uterus strictly to block implantation/pregnancy; it provides **zero physical barrier against body-fluid contact (`only condoms partially shield STDs!`)**.', hi: '**नहीं!** **कॉपर-टी** केवल गर्भाशय के भीतर गर्भधारण रोकती है — यह शारीरिक तरल संपर्क से फैलने वाले **यौन संचारित रोगों (`STD`) से कोई सुरक्षा नहीं देती** (केवल कंडोम आंशिक बचाव करता है)।' },
    },
  ],
  exercises: [
    {
      num: '1',
      type: 'mcq',
      q: { en: 'Asexual reproduction takes place through budding in', hi: 'अलैंगिक जनन मुकुलन द्वारा होता है—' },
      options: { en: ['amoeba', 'yeast', 'plasmodium', 'leishmania'], hi: ['अमीबा', 'यीस्ट', 'प्लैज्मोडियम', 'लेस्मानिया'] },
      correctIndex: 1, // Verified jhsc1an line 13: 1. (b)
      a: { en: '**Option (b) Yeast (`Activity 7.1` & `jhsc1an 1.(b)`)**: Yeast (`like Hydra`) multiplies by budding; Amoeba & Leishmania use binary fission, Plasmodium uses multiple fission!', hi: '**विकल्प (b) यीस्ट (`सत्यापित jhsc1an: 1.(b)`)**: यीस्ट व हाइड्रा में **मुकुलन** होता है (`अमीबा-लेस्मानिया = द्विखंडन; प्लैज्मोडियम = बहुखंडन`)!' },
    },
    {
      num: '2',
      type: 'mcq',
      q: { en: 'Which of the following is not a part of the female reproductive system in human beings?', hi: 'निम्नलिखित में से कौन मानव में मादा जनन तंत्र का भाग नहीं है?' },
      options: { en: ['Ovary', 'Uterus', 'Vas deferens', 'Fallopian tube'], hi: ['अंडाशय', 'गर्भाशय', 'शुक्रवाहिका', 'डिंबवाहिनी'] },
      correctIndex: 2, // Verified jhsc1an line 13: 2. (c)
      a: { en: '**Option (c) Vas deferens (`शुक्रवाहिका` — `jhsc1an 2.(c)`)**: Vas deferens transports sperm strictly inside the **MALE** reproductive tract (`Fig 7.10`)!', hi: '**विकल्प (c) शुक्रवाहिका (`सत्यापित jhsc1an: 2.(c)`)**: शुक्रवाहिका **नर जनन तंत्र** (`चित्र 7.10`) का अंग है!' },
    },
    {
      num: '3',
      type: 'mcq',
      q: { en: 'The anther contains', hi: 'परागकोश में होते हैं—' },
      options: { en: ['sepals', 'ovules', 'pistil', 'pollen grains'], hi: ['बाह्यदल', 'अंडाशय', 'अंडप', 'पराग कण'] },
      correctIndex: 3, // Verified jhsc1an line 13: 3. (d)
      a: { en: '**Option (d) Pollen grains (`पराग कण` — `jhsc1an 3.(d)`)**: Stamen carries filament + terminal Anther producing yellow pollen grains (`male gametes`).', hi: '**विकल्प (d) पराग कण (`सत्यापित jhsc1an: 3.(d)`)**: पुंकेसर के **परागकोश में पीले परागकण** निर्मित होते हैं।' },
    },
    {
      num: '4',
      q: { en: 'What are the advantages of sexual reproduction over asexual reproduction?', hi: 'अलैंगिक जनन की अपेक्षा लैंगिक जनन के क्या लाभ हैं?' },
      a: { en: 'Combines DNA variations from **two different individuals** via **Meiosis + gamete fusion** -> creates rich **novel gene combinations (`evolutionary raw material`)** helping species adapt & survive drastic environmental changes!', hi: 'लैंगिक जनन में **दो भिन्न जनकों का DNA मिलने** से **अधिक विभिन्नताएँ व नए संयोजन** उत्पन्न होते हैं, जो बदलते पर्यावरण में **स्पीशीज के अस्तित्व व जैव विकास** में अत्यंत सहायक हैं!' },
    },
    {
      num: '5',
      q: { en: 'What are the functions performed by the testis in human beings?', hi: 'मानव में वृषण के क्या कार्य हैं?' },
      a: { en: '**Twin key functions (`p.135`)**: **(1)** Generates male germ cells (**Sperms**); **(2)** Secretes **Testosterone hormone**, regulating both **sperm production** AND **male secondary puberty features** (`beard/moustache, deeper voice`).', hi: '**दो प्रमुख कार्य**: **(1)** नर जनन-कोशिकाओं (**शुक्राणुओं**) का निर्माण; **(2)** **टेस्टोस्टेरॉन हार्मोन** का स्रवण, जो शुक्राणु उत्पादन संग लड़कों में यौवनारंभ लक्षण (`दाढ़ी-मूँछ आदि`) नियंत्रित करता है।' },
    },
    {
      num: '6',
      q: { en: 'Why does menstruation occur?', hi: 'ऋतुस्राव क्यों होता है?' },
      a: { en: 'Every month uterus prepares a thick, spongy, blood-rich lining expecting a fertilised embryo. When the released egg (~1 day lifespan) is **NOT fertilised**, this extra lining isn’t needed, breaks down slowly and leaves through vagina as blood & mucus (**`2–8 days`**)!', hi: 'निषेचित अंड ग्रहण करने हेतु गर्भाशय प्रति माह अपनी अंतःभित्ति को **मांसल व स्पोंजी** बनाता है। अंड निषेचित न होने पर यह परत आवश्यक नहीं रहती और टूटकर योनि मार्ग से **रक्त व म्यूकस के रूप में `2–8 दिनों`** तक निकलती है (**ऋतुस्राव**)।' },
    },
    {
      num: '7',
      q: { en: 'Draw a labelled diagram of the longitudinal section of a flower (`NCERT Fig 7.7`).', hi: 'पुष्प की अनुदैर्घ्य काट का नामांकित चित्र बनाइए (`NCERT चित्र 7.7`)।' },
      a: { en: 'Show four key parts clearly (`see Interactive SVG Plate 3 above!`): **(1) Sepals** (`green base`) -> **(2) Petals** (`colored`) -> **(3) Male Stamen** (`Filament + pollen Anther`) -> **(4) Central Female Pistil** (`sticky Stigma + elongated Style + swollen Ovary with Ovules`)!', hi: 'ऊपर दी गई **प्लेट 3 (`चित्र 7.7`)** देखें — चार चक्र: **(1) बाह्यदल**, **(2) दल/पंखुड़ी**, **(3) पुंकेसर** (`तंतु + परागकोश`) व केंद्र में **(4) स्त्रीकेसर** (`वर्तिकाग्र + वर्तिका + अंडाशय जिसमें बीजांड`)!' },
    },
    {
      num: '8',
      q: { en: 'What are the different methods of contraception?', hi: 'गर्भनिरोधन की विभिन्न विधियाँ कौन सी हैं?' },
      a: { en: '**Four standard methods (`p.137–138`)**: **(1) Mechanical Barriers (`Condoms`)**: Prevent sperm reaching egg + partial STD defense; **(2) Hormonal Oral Pills**: Stop egg release from ovary; **(3) IUCDs (`Loop / Copper-T`)**: Inserted inside uterus; **(4) Surgical (`Vasectomy` in males / `Tubectomy` in females)** blocking ducts.', hi: '**चार प्रमुख विधियाँ**: **(1) यांत्रिक अवरोध (`कंडोम`)** (`STD बचाव भी!`); **(2) हार्मोनल गोलियाँ** (`अंड मोचन रोकें`); **(3) गर्भाशय युक्ति (`लूप / कॉपर-T`)**; **(4) शल्यक्रिया** (`नर शुक्रवाहिका या मादा अंडवाहिनी अवरुद्ध करना`)।' },
    },
    {
      num: '9',
      q: { en: 'How are the modes for reproduction different in unicellular and multicellular organisms?', hi: 'एककोशिक एवं बहुकोशिक जीवों की जनन पद्धति में क्या अंतर है?' },
      a: { en: '**Unicellular** organisms (`Amoeba, Leishmania, Plasmodium, Yeast`) reproduce simply via **cell division / fission or budding**. **Multicellular** organisms carry specialised **tissues & organs**, so except simple forms (`Spirogyra` fragmentation, `Rhizopus` spores), they need **specialised reproductive tissues & sexual gamete fusion**!', hi: '**एककोशिकीय** जीव केवल **कोशिका विभाजन / द्विखंडन, बहुखंडन या मुकुलन** द्वारा जनन करते हैं। **बहुकोशिकीय** जीवों में विशिष्ट ऊतक व अंग होने से सरल रूपों (`स्पाइरोगाइरा/राइजोपस`) को छोड़ अधिकांश में **विशिष्ट जनन अंग व लैंगिक जनन** आवश्यक होता है।' },
    },
    {
      num: '10',
      q: { en: 'How does reproduction help in providing stability to populations of species?', hi: 'जनन किसी स्पीशीज की समष्टि के स्थायित्व में किस प्रकार सहायक है?' },
      a: { en: 'Organisms die continually (`predation, aging, disease`). **Birth rate (`via DNA copying`) replaces lost individuals** maintaining niche occupancy, while **inherent variations (`7.1.1`)** protect populations during sudden ecosystem changes!', hi: 'प्रतिकूल परिस्थिति या आयु से जीव नष्ट होते रहते हैं — **जनन निरंतर नए सदस्य जोड़कर पारितंत्र में स्थान (निकेत) बनाए रखता है** तथा DNA विभिन्नता अचानक पर्यावरणीय आपदा में भी स्पीशीज की समष्टि को विलुप्त होने से बचाती है!' },
    },
    {
      num: '11',
      q: { en: 'What could be the reasons for adopting contraceptive methods?', hi: 'गर्भनिरोधक युक्तियाँ अपनाने के क्या कारण हो सकते हैं?' },
      a: { en: '**(1)** Protecting **maternal physical & emotional health** by avoiding unwanted/frequent pregnancies; **(2)** Family planning & child spacing; **(3)** Using barrier **condoms prevents spread of STDs (`HIV-AIDS, Gonorrhoea, Syphilis`)**!', hi: '**(1)** अवांछित व बार-बार गर्भधारण रोककर **माँ के स्वास्थ्य** की रक्षा; **(2)** संतानों के बीच उचित अंतर व **परिवार नियोजन**; **(3)** यांत्रिक अवरोध (`कंडोम`) से **HIV-AIDS व अन्य STD संक्रमण रोकना**!' },
    },
  ],
  flashcards: [
    { front: { en: 'Unicellular Fission Split: Amoeba vs Leishmania vs Plasmodium?', hi: 'द्वि/बहुखंडन भेद: अमीबा vs लेस्मानिया vs प्लैज्मोडियम?' }, back: { en: '**Amoeba** = Any plane (`binary`); **Leishmania (`Kala-azar`)** = Definite plane via **whip**; **Plasmodium (`Malaria`)** = **Multiple fission**!', hi: '**अमीबा** = किसी भी तल से; **लेस्मानिया (`कालाजार`)** = चाबुक संग निश्चित तल; **प्लैज्मोडियम** = बहुखंडन!' } },
    { front: { en: 'Spirogyra vs Planaria vs Hydra (`Fragmentation, Regeneration, Budding`)?', hi: 'स्पाइरोगाइरा, प्लेनेरिया व हाइड्रा में जनन विभेद?' }, back: { en: '**Spirogyra** = Fragmentation (`simple algae only`); **Planaria** = Regeneration (`specialist cells`); **Hydra** = **Budding + Regen**!', hi: '**स्पाइरोगाइरा** = खंडन; **प्लेनेरिया** = पुनरुद्भवन; **हाइड्रा** = पुनर्जनन कोशिकाओं द्वारा मुकुलन (`+ यीस्ट`)!' } },
    { front: { en: 'Bryophyllum Notches, Callus Tissue Culture & Rhizopus Trap?', hi: 'ब्रायोफिलम, ऊतक संवर्धन कैलस व राइजोपस बीजाणुधानी मुख्य बिंदु?' }, back: { en: '**Bryophyllum** = buds in **leaf-margin notches**; **Tissue Culture** = shoot tip -> **Callus** -> hormone; **Rhizopus** = **Sporangia (`hyphae NO repro`)**!', hi: '**ब्रायोफिलम** = पत्ती खाँचों में कली; **ऊतक संवर्धन** = कैलस; **राइजोपस** = बीजाणुधानी (`तंतु जनन अंग नहीं`)!' } },
    { front: { en: 'Why DNA stays Half in Gametes (`23+23`) & Variations Benefit Species?', hi: 'युग्मक में गुणसूत्र आधे (`मेयोसिस`) क्यों होते हैं व विभिन्नता किसे बचाती है?' }, back: { en: '**Meiosis** halves chromosomes so Zygote restores `46`! **Variations safeguard SPECIES survival**, not guaranteed for individuals (`warm bacteria`)!', hi: '**अर्द्धसूत्री विभाजन** से संतति में पुनः `46` गुणसूत्र रहें! विभिन्नता **स्पीशीज अस्तित्व** बचाती है (`पृ. 126 Q2`)!' } },
    { front: { en: 'Unisexual vs Bisexual Flowers & Stamen vs Pistil Subparts?', hi: 'एकलिंगी vs उभयलिंगी पुष्प एवं पुंकेसर-स्त्रीकेसर के भाग?' }, back: { en: '**Unisexual**: `Papaya, Watermelon`; **Bisexual**: `Hibiscus, Mustard`. **Stamen** = Filament + **Anther** (`pollen`); **Pistil** = Stigma + **Style** + Ovary!', hi: '**एकलिंगी**: पपीता, तरबूज; **उभयलिंगी**: गुड़हल, सरसों। **पुंकेसर** = तंतु+परागकोश; **स्त्रीकेसर** = वर्तिकाग्र+वर्तिका+अंडाशय!' } },
    { front: { en: 'Post-Fertilisation Flower Fate & Dicot Seed Parts (`Fig 7.9`)?', hi: 'निषेचन पश्चात बीजांड-अंडाशय रूपांतरण व बीज के तीनों भाग (`चित्र 7.9`)?' }, back: { en: '**Ovule → SEED** (`Embryo`), **Ovary → FRUIT**. Seed: **Cotyledons** (`food`), **Plumule** (`shoot`), **Radicle** (`root`)!', hi: '**बीजांड → बीज**, **अंडाशय → फल**! बीज: **बीजपत्र** (`भोजन`), **प्रांकुर** (`प्ररोह`), **मूलांकुर** (`जड़`)!' } },
    { front: { en: 'Why Testes Sit Outside Abdomen (`Scrotum`) & Prostate/Seminal Fluid Role?', hi: 'वृषण कोष शरीर बाहर क्यों हैं व प्रोस्टेट-शुक्राशय स्राव का कार्य?' }, back: { en: '**Lower temperature (`< body temp`) required for sperm** (`Testosterone` too). Glands add **fluid transport medium + nutrition**; **Urethra = common exit**!', hi: 'शुक्राणु निर्माण हेतु **शरीर से कम ताप** चाहिए! ग्रंथियाँ **तरल माध्यम + पोषण** देती हैं; **मूत्रमार्ग उभय मार्ग** है!' } },
    { front: { en: 'Exact Fertilisation Site, Implantation Site & Disc Placenta Function?', hi: 'मानव में निषेचन स्थल, रोपण स्थल एवं अपरा (`Placenta`) के कार्य?' }, back: { en: 'Fertilisation = **Oviduct (`Fallopian tube`)** -> **Uterus** Implantation -> **Placenta** transfers **Glucose/O₂ + removes wastes (`~9 mo`)**!', hi: 'निषेचन = **डिंबवाहिनी**, रोपण = **गर्भाशय**, तथा **प्लेसेंटा** ग्लूकोज/`O₂` पोषण व अपशिष्ट निष्कासन करता है (`9 माह`)!' } },
    { front: { en: 'Menstruation Cause & Duration + Egg Lifespan Without Fertilisation?', hi: 'ऋतुस्राव की अवधि, कारण एवं अनिषेचित अंड कितने दिन जीवित रहता है?' }, back: { en: 'Unfertilised egg lives **`~1 day`** -> spongy uterine lining breaks exiting as blood & mucus for **`~2–8 days`** (`p.137`)!', hi: 'अनिषेचित अंड केवल **~`1 दिन`** जीवित रहता है; फिर गर्भाशय परत टूटकर **`2–8 दिन`** तक ऋतुस्राव रूप में निकलती है!' } },
    { front: { en: 'Bacterial vs Viral STDs + Does Copper-T Prevent STDs (`Q5`)?', hi: 'जीवाणु vs वायरस STD नाम एवं क्या कॉपर-T STD रोकता है (`Q5`)?' }, back: { en: '**Bacterial**: `Gonorrhoea, Syphilis` | **Viral**: `Warts, HIV-AIDS`. **Copper-T NO ✗**; **ONLY Condom** gives partial STD protection!', hi: '**जीवाणु**: गोनोरिया, सिफिलिस | **वायरस**: मस्सा (`Warts`), HIV! **कॉपर-T नहीं रोकता** — केवल **कंडोम**!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-b7-1',
      examTag: 'RRB ALP 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.4): Hydra Budding',
      question: {
        en: 'What is the small outgrowth formed on the body of a hydra due to repeated cell division called?',
        hi: 'हाइड्रा के शरीर पर बारंबार कोशिका विभाजन के कारण बनने वाले छोटे उद्वर्ध (`outgrowth`) को क्या कहा जाता है?',
      },
      options: { en: ['Offshoot', 'Spore', 'Node', 'Bud'], hi: ['प्रशाखा (Offshoot)', 'बीजाणु (Spore)', 'पर्वसंधि (Node)', 'मुकुल (Bud)'] },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Sec 7.2.4` (`p.129`)**: Repeated division at one specific site develops an outgrowth called a **Bud (`मुकुल`)** detaching once mature.',
        hi: 'सटीक `NCERT पृ. 129`: हाइड्रा में एक स्थान पर बार-बार कोशिका विभाजन से उभरने वाली संरचना **मुकुल (`Bud`)** कहलाती है।',
      },
    },
    {
      id: 'pyq-b7-2',
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.3b): Female Reproductive Match',
      question: {
        en: 'Match the following. 1. Ovary | a. Site of foetal development; 2. Fallopian tube | b. Release of eggs and hormones; 3. Uterus | c. Site where fertilisation occurs',
        hi: 'निम्नलिखित का मिलान कीजिए। 1. अंडाशय | a. भ्रूण विकास स्थल; 2. डिंबवाहिनी | b. अंडों और हार्मोन का स्राव; 3. गर्भाशय | c. वह स्थल जहाँ निषेचन होता है',
      },
      options: { en: ['1–a, 2–c, 3–b', '1–c, 2–b, 3–a', '1–b, 2–c, 3–a', '1–b, 2–a, 3–c'], hi: ['1–a, 2–c, 3–b', '1–c, 2–b, 3–a', '1–b, 2–c, 3–a', '1–b, 2–a, 3–c'] },
      correctIndex: 2,
      solution: {
        en: '**Ovary (`1-b`)** releases eggs & hormones; **Fallopian tube (`2-c`)** is fertilisation site; **Uterus (`3-a`)** houses foetal development.',
        hi: '**अंडाशय (`1-b`)** अंड/हार्मोन, **डिंबवाहिनी (`2-c`)** निषेचन स्थल व **गर्भाशय (`3-a`)** भ्रूण विकास स्थल है।',
      },
    },
    {
      id: 'pyq-b7-3',
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.1): Chromosome Restoration in Zygote',
      question: {
        en: 'A scientist wants to ensure that a human zygote formed in a laboratory dish has the correct number of chromosomes. Number of chromosomes this zygote should have are:',
        hi: 'एक वैज्ञानिक सुनिश्चित करना चाहता है कि प्रयोगशाला डिश में विकसित मानव युग्मनज में गुणसूत्रों की संख्या सही हो। इस युग्मनज में गुणसूत्रों की संख्या कितनी होनी चाहिए?',
      },
      options: { en: ['69', '23', '46', '92'], hi: ['69', '23', '46', '92'] },
      correctIndex: 2,
      solution: {
        en: 'Meiosis halves gametes (`23 sperm + 23 ovum`) -> fusion restores **diploid `46` (`23 pairs`) chromosomes** in human zygote (`Sec 7.3.1`)!',
        hi: 'अर्द्धसूत्री विभाजन से `23 + 23` युग्मक संलयित होकर मानव युग्मनज में पुनः **`46` (`23 जोड़े`) गुणसूत्र** स्थापित करते हैं!',
      },
    },
    {
      id: 'pyq-b7-4',
      examTag: 'RRB Group D 2025 Shift 48',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2): Asexual Gamete Independence',
      question: {
        en: 'Amoeba, yeast, and hydra can reproduce even when only one parent organism is present. Which conclusion does this suggest about asexual reproduction?',
        hi: 'अमीबा, यीस्ट और हाइड्रा केवल एक जनक जीव की उपस्थिति में भी जनन कर सकते हैं। इससे अलैंगिक प्रजनन के बारे में क्या निष्कर्ष निकलता है?',
      },
      options: { en: ['It requires seeds for reproduction.', 'Two parents are always necessary.', 'It produces only multicellular organisms.', 'It occurs without fusion of gametes.'], hi: ['जनन के लिए बीज आवश्यक हैं।', 'दो जनक सदैव आवश्यक हैं।', 'यह केवल बहुकोशिकीय जीव बनाता है।', 'यह युग्मकों के संलयन के बिना होता है।'] },
      correctIndex: 3,
      solution: {
        en: '**NCERT `p.131`**: Single-parent asexual modes (`fission, budding, spores`) produce offspring **without gamete formation or fusion**.',
        hi: 'अकेले एकल जनक द्वारा बिना युग्मक संलयन के नई संतति निर्माण ही अलैंगिक जनन की पहचान है।',
      },
    },
    {
      id: 'pyq-b7-5',
      examTag: 'RRB Tech Gr-III 2024 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.3b): Human Female Tract Match',
      question: {
        en: 'Match the following: (i) Ovary | (a) fertilisation; (ii) Oviduct | (b) implantation; (iii) Uterus | (c) nourishes growing embryo; (iv) Placenta | (d) makes female gametes',
        hi: 'मिलान कीजिए: (i) अंडाशय | (a) निषेचन; (ii) अंडवाहिनी | (b) अंतर्रोपण; (iii) गर्भाशय | (c) बढ़ते भ्रूण को पोषण; (iv) गर्भनाल | (d) मादा युग्मकों का निर्माण',
      },
      options: { en: ['(i)-(b), (ii)-(a), (iii)-(d), (iv)-(c)', '(i)-(d), (ii)-(c), (iii)-(b), (iv)-(a)', '(i)-(d), (ii)-(a), (iii)-(b), (iv)-(c)', '(i)-(d), (ii)-(b), (iii)-(a), (iv)-(c)'], hi: ['(i)-(b), (ii)-(a), (iii)-(d), (iv)-(c)', '(i)-(d), (ii)-(c), (iii)-(b), (iv)-(a)', '(i)-(d), (ii)-(a), (iii)-(b), (iv)-(c)', '(i)-(d), (ii)-(b), (iii)-(a), (iv)-(c)'] },
      correctIndex: 2,
      solution: {
        en: 'Exact NCERT `p.136–137`: Ovary (`d: female gametes`), Oviduct (`a: fertilisation`), Uterus (`b: implantation`), Placenta (`c: embryo nourishment`).',
        hi: 'सटीक मिलान: अंडाशय (`d`), अंडवाहिनी (`a` निषेचन), गर्भाशय (`b` रोपण), गर्भनाल/अपरा (`c` भ्रूण पोषण)।',
      },
    },
    {
      id: 'pyq-b7-6',
      examTag: 'RRB Group D 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.5): Vegetative Propagation Rule',
      question: {
        en: 'Which of the following statements about vegetative propagation is INCORRECT?',
        hi: 'कायिक प्रवर्धन के संदर्भ में निम्नलिखित में से कौन-सा कथन गलत है?',
      },
      options: { en: ['Only one parent is involved.', 'New plants arise from stems, roots, or leaves.', 'New plants develop from seed-bearing structures.', 'Offspring are genetically identical to parent.'], hi: ['केवल एक जनक सम्मिलित होता है।', 'तनों, मूलों या पत्तियों से नए पौधे आते हैं।', 'बीज-धारक संरचनाओं से नए पादप विकसित होते हैं।', 'संतति आनुवंशिक रूप से समान होते हैं।'] },
      correctIndex: 2,
      solution: {
        en: 'Vegetative propagation uses non-reproductive **roots, stems & leaves** (`Sec 7.2.5`) — NEVER seeds or sexual floral parts!',
        hi: 'कायिक प्रवर्धन **जड़, तना व पत्तियों** से होता है — बीजों या पुष्पीय जननांगों से नहीं!',
      },
    },
    {
      id: 'pyq-b7-7',
      examTag: 'RRB Group D 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (p.138 Q1): Pollination vs Fertilisation',
      question: {
        en: 'Complete the analogy. Pollination : Transfer of Pollen :: Fertilisation : ______.',
        hi: 'समवृत्ति को पूर्ण कीजिए। परागण : परागकण स्थानांतरण :: निषेचन : ______।',
      },
      options: { en: ['Growth of stem', 'Ripening of fruit', 'Absorption of water', 'Fusion of gametes'], hi: ['तने की वृद्धि', 'फलों का पकना', 'जल अवशोषण', 'युग्मकों का संलयन'] },
      correctIndex: 3,
      solution: {
        en: 'Pollination = pollen transfer to stigma; **Fertilisation = fusion of male & female gametes (`p.133`)**.',
        hi: 'परागण = परागकण स्थानांतरण, जबकि **निषेचन = नर व मादा युग्मकों का संलयन** (`पृ. 133`)!',
      },
    },
    {
      id: 'pyq-b7-8',
      examTag: 'RRB Tech Gr-III 2024 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Fig 7.1a): Amoeba Division Plane',
      question: {
        en: 'The splitting of the two cells during division can take place in any plane. Such patterns of fission have been observed in which protozoan?',
        hi: 'विभाजन के दौरान कोशिका विभाजन किसी भी तल से हो सकता है। विखंडन के ये तरीके किस प्रोटोजोआ में देखे गए हैं?',
      },
      options: { en: ['Leishmania', 'Hydra', 'Amoeba', 'Plasmodium'], hi: ['लेस्मानिया', 'हाइड्रा', 'अमीबा', 'प्लैज्मोडियम'] },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `p.127`**: In organisms like **Amoeba**, splitting of two cells during division can take place in **any plane**.',
        hi: 'सटीक `NCERT पृ. 127`: **अमीबा** जैसे एककोशिकीय जीवों में द्विखंडन किसी भी तल से हो सकता है।',
      },
    },
    {
      id: 'pyq-b7-9',
      examTag: 'RRB Tech Gr-III 2024 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.2): Spirogyra Fragmentation',
      question: {
        en: 'Spirogyra a multi-cellular organism simply breaks up into smaller pieces upon maturation and these pieces or fragments grow into new individuals. Such a mode is known as:',
        hi: 'एक बहुकोशिक जीव स्पाइरोगाइरा सामान्यतः विकसित होकर छोटे-छोटे टुकड़ों में खंडित हो जाता है और ये टुकड़े नए जीव में विकसित होते हैं। जनन की इस विधि को क्या कहते हैं?',
      },
      options: { en: ['regeneration', 'budding', 'fragmentation', 'binary fission'], hi: ['पुनर्जनन', 'मुकुलन', 'खंडन (fragmentation)', 'द्विखंडन'] },
      correctIndex: 2,
      solution: {
        en: 'Simple multicellular filamentous algae *Spirogyra* reproduces by **Fragmentation (`खंडन`, Sec 7.2.2)**.',
        hi: 'सरल बहुकोशिकीय स्पाइरोगाइरा परिपक्व हो टुकड़ों में बँटने से **खंडन (`Fragmentation`)** द्वारा नया जीव बनाता है।',
      },
    },
    {
      id: 'pyq-b7-10',
      examTag: 'RRB Tech Gr-III 2024 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Fig 7.5): Bryophyllum Leaf Notches',
      question: {
        en: 'Buds produced in the notches along the leaf margin of Bryophyllum fall on the soil and develop into new plants. Such a mode of reproduction is known as:',
        hi: 'ब्रायोफिलम पत्ती के किनारे के खाँचों में उत्पन्न कलियाँ मृदा पर गिरती हैं और नए पादपों में विकसित होती हैं। यह विधि कहलाती है:',
      },
      options: { en: ['budding', 'fragmentation', 'regeneration', 'vegetative propagation'], hi: ['मुकुलन', 'खंडन', 'पुनर्जनन', 'कायिक प्रवर्धन'] },
      correctIndex: 3,
      solution: {
        en: '**Vegetative Propagation (`कायिक प्रवर्धन`, Sec 7.2.5)**: new plants grow straight from leaf notches of *Bryophyllum*!',
        hi: 'पत्ती की कोर से पौधा बनना **कायिक प्रवर्धन (`पृ. 130`, चित्र 7.5)** कहलाता है।',
      },
    },
    {
      id: 'pyq-b7-11',
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.6): Rhizopus Sporangia Spores',
      question: {
        en: 'Spores in Rhizopus are present in blobs, which are known as:',
        hi: 'राइजोपस में बीजाणु गुच्छों में उपस्थित होते हैं, जिन्हें किस रूप में जाना जाता है?',
      },
      options: { en: ['buds', 'fruiting bodies', 'sacs', 'sporangia'], hi: ['कलिका (buds)', 'फलित शरीर', 'पुटी (sacs)', 'बीजाणुधानी (sporangia)'] },
      correctIndex: 3,
      solution: {
        en: 'Tiny blob-on-a-stick structures rising from bread mold hyphae are **Sporangia (`बीजाणुधानी`)** holding protected spores (`p.131`)!',
        hi: 'ऊर्ध्व तंतुओं पर गुच्छ (गोल) संरचनाएँ **बीजाणुधानी (`Sporangia`)** कहलाती हैं जिनमें बीजाणु होते हैं (`पृ. 131`)।',
      },
    },
    {
      id: 'pyq-b7-12',
      examTag: 'RRB NTPC UG 2024 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.2): Angiosperm Reproductive Organ',
      question: {
        en: 'Which of the following parts of the plant is primarily responsible for sexual reproduction in angiosperms?',
        hi: 'पादप का निम्नलिखित में से कौन-सा भाग एंजियोस्पर्म में लैंगिक प्रजनन के लिए मुख्य रूप से उत्तरदायी है?',
      },
      options: { en: ['Stem', 'Leaf', 'Flower', 'Root'], hi: ['तना', 'पर्ण', 'पुष्प (Flower)', 'मूल'] },
      correctIndex: 2,
      solution: {
        en: 'Opening sentence of **NCERT `Sec 7.3.2` (`p.132`)**: The reproductive parts of angiosperms are located in the **Flower (`पुष्प`)**!',
        hi: 'सटीक `NCERT भाग 7.3.2`: आवृतबीजी (`एंजियोस्पर्म`) पौधों के लैंगिक जननांग **पुष्प** में स्थित होते हैं!',
      },
    },
    {
      id: 'pyq-b7-13',
      examTag: 'RRB Tech Gr-III 2024 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.3d): Bacterial STDs',
      question: {
        en: 'Which of the following are bacterial infections that occur due to sexual contact? A. Gonorrhoea | B. AIDS | C. Syphilis',
        hi: 'निम्नलिखित में से कौन-से जीवाणु संक्रमण यौन संपर्क के कारण होते हैं? A. सूजाक (Gonorrhoea) | B. एड्स (AIDS) | C. सिफिलिस (Syphilis)',
      },
      options: { en: ['Both B and C', 'Both A and B', 'Both A and C', 'A, B and C'], hi: ['B और C दोनों', 'A और B दोनों', 'A और C दोनों', 'A, B और C'] },
      correctIndex: 2,
      solution: {
        en: 'Exact **NCERT `p.137`**: **Bacterial STDs** = **Gonorrhoea (`A`) & Syphilis (`C`)**; while Warts & HIV-AIDS (`B`) are viral!',
        hi: 'सटीक `NCERT पृ. 137`: **गोनेरिया (`A`) व सिफिलिस (`C`) जीवाणु-जनित STD हैं**, जबकि HIV-AIDS और मस्सा (`Warts`) विषाणु जनित हैं!',
      },
    },
    {
      id: 'pyq-b7-14',
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.4): Regenerative Cells in Hydra Budding',
      question: {
        en: 'Use of regenerative cells in the process of budding is present in:',
        hi: 'निम्न में से कौन-सा जीव पुनर्जनन की क्षमता वाली कोशिकाओं का उपयोग मुकुलन के लिए करता है?',
      },
      options: { en: ['Amoeba', 'Planaria', 'Hydra', 'Spirogyra'], hi: ['अमीबा', 'प्लेनेरिया', 'हाइड्रा', 'स्पाइरोगाइरा'] },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `p.129`**: Organisms such as **Hydra** use regenerative cells for reproduction in the process of **budding** (`also repeated Shift 2`).',
        hi: 'अक्षरशः `NCERT पृ. 129`: **हाइड्रा** जैसे प्राणी पुनर्जनन की क्षमता वाली कोशिकाओं का उपयोग **मुकुलन** हेतु करते हैं।',
      },
    },
    {
      id: 'pyq-b7-15',
      examTag: 'RRB Tech Gr-III 2024 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.3b): Fallopian Tube Egg Transport',
      question: {
        en: 'Which of the following carries egg from the ovary to the womb?',
        hi: 'निम्नलिखित में से कौन अंडे को अंडाशय से गर्भाशय तक ले जाता है?',
      },
      options: { en: ['Vagina', 'Placenta', 'Fallopian tube', 'Cervix'], hi: ['योनि', 'अपरा', 'डिंबवाहिनी (Fallopian tube)', 'गर्भाशय ग्रीवा'] },
      correctIndex: 2,
      solution: {
        en: 'Thin **Oviducts / Fallopian tubes** carry the mature egg from ovary toward the uterus/womb (`& serve as fertilisation site`, p.136)!',
        hi: 'महीन **डिंबवाहिनी / फैलोपियन ट्यूब** अंडाशय से अंड को गर्भाशय तक ले जाती है व यहीं निषेचन होता है!',
      },
    },
    {
      id: 'pyq-b7-16',
      examTag: 'RRB Tech Gr-III 2024 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Fig 7.1b): Whip-Like Leishmania Binary Fission',
      question: {
        en: 'Which unicellular organism has a whip-like structure at one end of the cell and binary fission occurs in a definite orientation in relation to these structures?',
        hi: 'किस एककोशिकीय जीव की कोशिका के एक सिरे पर चाबुक जैसी संरचना होती है और द्विआधारी विखंडन एक निश्चित अभिविन्यास में होता है?',
      },
      options: { en: ['Leishmania', 'Amoeba', 'Plasmodium', 'Yeast'], hi: ['लेस्मानिया (Leishmania)', 'अमीबा', 'प्लैज्मोडियम', 'यीस्ट'] },
      correctIndex: 0,
      solution: {
        en: '**`Leishmania`** (`causing Kala-azar`, `Tech Shift 16`) has a whip-like flagellum fixing binary fission along a definite plane!',
        hi: 'कालाजार रोगाणु **लेस्मानिया** में एक सिरे की चाबुक संरचना के कारण द्विखंडन सदैव निश्चित तल से होता है।',
      },
    },
    {
      id: 'pyq-b7-17',
      examTag: 'RRB Tech Gr-III 2024 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.6): Rhizopus Non-Reproductive Hyphae',
      question: {
        en: 'Which of the following is NOT a reproductive part of Rhizopus?',
        hi: 'निम्नलिखित में से कौन-सा राइजोपस का एक जनन अंग नहीं है?',
      },
      options: { en: ['Hyphae', 'Sporangium', 'Sporangiophores', 'Spores'], hi: ['कवक तंतु (Hyphae)', 'बीजाणुधानी (Sporangium)', 'बीजाणुधानीधर', 'बीजाणु (Spores)'] },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.131`**: Thread-like structures (`Hyphae`) developing on bread are **NOT reproductive parts**; only blob Sporangia carry spores!',
        hi: 'अक्षरशः `NCERT पृ. 131`: ब्रेड पर विकसित धागे जैसी **कवक तंतु (`Hyphae`) जनन के भाग नहीं हैं**, बल्कि बीजाणुधानी जनन संरचना है!',
      },
    },
    {
      id: 'pyq-b7-18',
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.3): Amoeba Does NOT Show Regeneration',
      question: {
        en: 'Identify the INCORRECT statement about regeneration.',
        hi: 'पुनरुद्भवन (`पुनर्जनन`) से संबंधित गलत कथन की पहचान कीजिए।',
      },
      options: {
        en: ['Specialist cells proliferate producing many new cells.', 'Specialised cells are responsible for regeneration.', 'Hydra and Planaria show regeneration mode.', 'Amoeba exhibits regeneration.'],
        hi: ['विशेषीकृत कोशिकाएँ तेजी से गुणन करती हैं।', 'विशिष्ट कोशिकाएँ पुनरुद्भवन हेतु जिम्मेदार हैं।', 'हाइड्रा व प्लेनेरिया पुनरुद्भवन दर्शाते हैं।', 'अमीबा पुनरुद्भवन प्रदर्शित करता है।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Unicellular **Amoeba** reproduces via **Binary Fission (`7.2.1`)**, NOT multicellular specialist-cell regeneration (`Planaria/Hydra`)!',
        hi: 'एककोशिकीय **अमीबा द्विखंडन** करता है; पुनरुद्भवन विशिष्ट कोशिका-युक्त बहुकोशिकीय प्लेनेरिया व हाइड्रा में दिखता है।',
      },
    },
    {
      id: 'pyq-b7-19',
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Fig 7.8): Pollen Tube Travels Through Style',
      question: {
        en: 'The tube which grows out of pollen grain to reach the ovary, travels through the:',
        hi: 'परागकण से निकलकर अंडाशय तक पहुँचने वाली नली किसके माध्यम से होकर गुजरती है?',
      },
      options: { en: ['petal', 'filament', 'style', 'anther'], hi: ['पंखुड़ी', 'तंतु', 'वर्तिका (style)', 'परागकोश'] },
      correctIndex: 2,
      solution: {
        en: 'Exact **NCERT `p.133`**: After landing on Stigma, a **pollen tube grows down through the Style (`वर्तिका`)** to reach ovule in ovary (`Fig 7.8`)!',
        hi: 'सटीक `NCERT पृ. 133`: वर्तिकाग्र से **पराग नलिका वर्तिका (`Style`)** से होती हुई अंडाशय के बीजांड तक पहुँचती है!',
      },
    },
    {
      id: 'pyq-b7-20',
      examTag: 'RRB Tech Gr-III 2024 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Fig 7.2): Plasmodium Multiple Fission',
      question: {
        en: 'Which one of the following organisms shows multiple fission?',
        hi: 'निम्नलिखित में से कौन-सा जीव बहुविखंडन (`multiple fission`) दर्शाता है?',
      },
      options: { en: ['Plasmodium', 'Hydra', 'Yeast', 'Leishmania'], hi: ['प्लैज्मोडियम (Plasmodium)', 'हाइड्रा', 'यीस्ट', 'लेस्मानिया'] },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.127 & Fig 7.2`**: **Plasmodium** (`malarial parasite`) divides into many daughter cells simultaneously (**Multiple Fission**)!',
        hi: 'सटीक `चित्र 7.2`: **प्लैज्मोडियम** में एकसाथ अनेक संतति बनने का **बहुखंडन** होता है (`Tech Shift 9 भी`)!',
      },
    },
    {
      id: 'pyq-b7-21',
      examTag: 'RRB Tech Gr-III 2024 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.5): Plants NOT Propagated Vegetatively',
      question: {
        en: 'Which plant species does NOT reproduce through vegetative propagation?',
        hi: 'निम्नलिखित में से पौधे की कौन-सी प्रजाति कायिक प्रवर्धन के माध्यम से प्रजनन नहीं करती है?',
      },
      options: { en: ['Sugarcane', 'Banana', 'Papaya', 'Rose'], hi: ['गन्ना', 'केला', 'पपीता (Papaya)', 'गुलाब'] },
      correctIndex: 2,
      solution: {
        en: '**NCERT `p.130 & 133`**: Sugarcane, Banana, Rose (`plus Orange, Grapes, Jasmine`) propagate vegetatively, whereas **Papaya (`unisexual flower`)** reproduces sexually via seeds!',
        hi: 'गन्ना, केला, गुलाब, संतरा व अंगूर कायिक प्रवर्धन से उगते हैं, जबकि **पपीता (`एकलिंगी पुष्प`)** बीजों द्वारा लैंगिक प्रजनन करता है!',
      },
    },
    {
      id: 'pyq-b7-22',
      examTag: 'RRB Tech Gr-III 2024 Shift 22 & 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (p.133): Ovary → Fruit vs Ovule → Seed',
      question: {
        en: 'After fertilisation, which develops a tough coat converting into a Seed while the zygote forms an embryo inside (`while Ovary develops into Fruit`)?',
        hi: 'निषेचन के बाद कौन एक सख्त आवरण विकसित कर बीज (`Seed`) में परिवर्तित हो जाता है (जबकि अंडाशय फल बनाता है)?',
      },
      options: { en: ['Ovule', 'Stamen', 'Sepal', 'Petal'], hi: ['बीजांड (Ovule)', 'पुंकेसर', 'बाह्यदल', 'पंखुड़ी'] },
      correctIndex: 0,
      solution: {
        en: '**Double verification (`Tech Shifts 17, 22, 23`)**: **Ovule → tough coat → SEED** (`with Embryo`); **Ovary → FRUIT**!',
        hi: '**बीजांड (`Ovule`)** कठोर आवरण पाकर **बीज** बनता है जिसमें भ्रूण होता है, तथा **अंडाशय → फल** बनता है!',
      },
    },
    {
      id: 'pyq-b7-23',
      examTag: 'RRB Tech Gr-III 2024 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.3.3d): Viral STDs (`HIV & Warts`)',
      question: {
        en: 'Which of the following diseases is/are a viral infection(s) transmitted through sexual contact? a. HIV | b. Warts | c. Gonorrhoea | d. Syphilis',
        hi: 'निम्नलिखित में से कौन-सा/से रोग यौन संपर्क से फैलने वाले वायरल (`विषाणु`) संक्रमण हैं? a. HIV | b. मस्से (Warts) | c. सुजाक | d. सिफिलिस',
      },
      options: { en: ['Only a and b', 'Only c', 'Only c and d', 'Only a'], hi: ['केवल a और b', 'केवल c', 'केवल c और d', 'केवल a'] },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.137`**: **Viral infections** = **Warts & HIV-AIDS (`a & b`)**, whereas **Gonorrhoea & Syphilis (`c & d`)** are bacterial!',
        hi: 'सटीक `NCERT पृ. 137`: **HIV (`a`) व मस्सा/Warts (`b`)** वायरल STD हैं, जबकि गोनोरिया और सिफिलिस जीवाणु जनित हैं!',
      },
    },
    {
      id: 'pyq-b7-24',
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 7 (Sec 7.2.5): Plant Part NOT Used in Vegetative Propagation',
      question: {
        en: 'Which one of the following plant parts is NOT used for vegetative propagation?',
        hi: 'निम्नलिखित में से पौधे के किस भाग का उपयोग कायिक प्रवर्धन के लिए नहीं किया जाता है?',
      },
      options: { en: ['Leaves', 'Seed', 'Stem', 'Root'], hi: ['पत्तियाँ', 'बीज (Seed)', 'तना', 'जड़'] },
      correctIndex: 1,
      solution: {
        en: '**Roots, Stems & Leaves** carry out asexual vegetative propagation (`Sec 7.2.5`), whereas **Seeds** result from sexual fertilisation (`also asked as Flower in Shift 16`)!',
        hi: 'कायिक प्रवर्धन जड़, तना व पत्तियों से होता है — **बीज (या पुष्प)** लैंगिक जनन के भाग हैं (`अतः Seed सही अपवाद है`)।',
      },
    },
  ],
};

export default C10_CH7_REPRO_DATA;
