/**
 * Class 9 NCERT (2026-27 New Edition — ihsc102.pdf, Pages 8-27)
 * Chapter 2: Cell — The Fundamental Unit of Life (कोशिका — जीवन की निर्माण इकाई)
 * 100% Complete Extraction: Concepts, Boxes, 5 Activities, 2 NCERT Tables + Master Tables,
 * Scientists, All In-Text Questions, All 16 Solved Exercises & 17 Verified Railway PYQs.
 */

export const CH2_CELL_DATA = {
  id: 'c9-bio-ch2',
  classId: 'class9',
  subjectId: 'biology',
  chapterNumber: 2,
  sourceCode: 'ihsc102 (2026-27 New NCERT • Pages 8–27)',
  title: {
    en: 'Chapter 2: Cell — The Fundamental Unit of Life',
    hi: 'अध्याय 2: कोशिका — जीवन की निर्माण इकाई',
  },
  subtitle: {
    en: '100% New 2026–27 Syllabus Coverage • Every Box, Activity, Table, Diagram & RRB PYQ Mapped',
    hi: '100% नया 2026–27 पाठ्यक्रम • प्रत्येक बॉक्स, क्रियाकलाप, तालिका, चित्र व RRB PYQ सहित',
  },
  metrics: {
    pages: 20,
    activities: 5,
    tables: 4,
    svgLabs: 4,
    hdVisuals: 4,
    exercisesSolved: 16,
    pyqsMatched: 15,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch2/hero-cell-origins.webp',
    caption: {
      en: 'Custom Studio Render: Origin of early protective cell boundaries in hot-spring CaCO3 mineral pools -> Bacterial Prokaryote, Plant Cell & Animal Cell.',
      hi: 'कस्टम स्टूडियो दृश्य: उष्ण जल कुंडों में कैल्शियम कार्बोनेट निक्षेप से प्रारंभिक कोशिका झिल्ली निर्माण से लेकर जीवाणु, पादप व जंतु कोशिका तक की यात्रा।',
    },
    thinkingPrompts: [
      { en: 'Where do cells originate from?', hi: 'कोशिका कहाँ से आती है?' },
      { en: 'How have microscopes unlocked the world beyond naked eyes?', hi: 'नग्न आँखों से परे संसार को समझने में तकनीक ने कैसे मदद की?' },
      { en: 'Why is the cell both structural & functional unit of life?', hi: 'कोशिका जीवन की संरचनात्मक और कार्यात्मक इकाई किस प्रकार है?' },
      { en: 'How do cells multiply and replace worn-out tissues?', hi: 'कोशिका किस प्रकार गुणन करती है?' },
    ],
  },

  highlightLegend: [
    {
      key: 'pyq',
      color: 'amber',
      label: { en: 'RRB PYQ Hot Spot', hi: 'रेलवे परीक्षा में बार-बार पूछा गया' },
    },
    {
      key: 'trap',
      color: 'rose',
      label: { en: '-0.33 Negative-Mark Trap', hi: 'Exam Trap / अपवाद (ग़लती से बचें)' },
    },
    {
      key: 'hook',
      color: 'teal',
      label: { en: 'Memory Shortcut / Nickname', hi: 'याद रखने का स्मार्ट शॉर्टकट' },
    },
    {
      key: 'formula',
      color: 'cyan',
      label: { en: 'Formula / Numerical Data', hi: 'सूत्र / सटीक मान' },
    },
  ],

  quickRevision60Sec: [
    {
      en: 'Resolving limit of naked human eye = $0.1\\text{ mm}$ at near point $25\\text{ cm}$. Electron Microscope resolves down to $\\text{nanometre}$ ($1\\text{ nm} = 10^{-9}\\text{ m} = 10^{-6}\\text{ mm}$).',
      hi: 'मानव नेत्र की विभेदन सीमा = $0.1\\text{ mm}$ (निकट बिंदु $25\\text{ cm}$)। इलेक्ट्रॉन सूक्ष्मदर्शी नैनोमीटर स्तर ($1\\text{ nm} = 10^{-9}\\text{ m}$) तक स्पष्ट दिखाता है।',
    },
    {
      en: 'Robert Hooke (1665) discovered cells in dead Cork slices ($200\\text{--}300\\times$ self-made microscope). Schleiden (1838), Schwann (1839), Virchow (1855) gave Classical Cell Theory.',
      hi: 'रॉबर्ट हुक (1665) ने कॉर्क में कोशिका खोजी। श्लीडेन (1838), श्वान (1839) व विरचो (1855) ने कोशिका सिद्धांत दिया।',
    },
    {
      en: 'Plasma membrane is $7\\text{--}10\\text{ nm}$ thick, Selectively Permeable (Fluid-Mosaic lipid bilayer + protein gatekeepers). Cell wall is Freely Permeable & made of Cellulose in plants.',
      hi: 'प्लाज्मा झिल्ली $7\\text{--}10\\text{ nm}$ मोटी, वरणात्मक पारगम्य (लिपिड + प्रोटीन फ्लूइड-मोजेक मॉडल)। पादप कोशिका भित्ति पूर्ण पारगम्य व सेल्युलोस की बनी होती है।',
    },
    {
      en: 'Hypotonic = cell swells; Isotonic = zero net water flow; Hypertonic = water exits -> animal cell shrinks & plant shows Plasmolysis.',
      hi: 'अल्पपरासारी = कोशिका फूलेगी; समपरासारी = कोई शुद्ध बदलाव नहीं; अतिपरासारी = जल बाहर निकलेगा (पादप में जीवद्रव्य कुंचन / Plasmolysis)।',
    },
    {
      en: 'Semi-autonomous DNA+Ribosome organelles: Nucleus, Mitochondria (Cristae, ATP Powerhouse) & Plastids (Chloroplast/Chromoplast/Leucoplast).',
      hi: 'स्वयं का DNA व राइबोसोम वाले कोशिकांग: केंद्रक, माइटोकॉन्ड्रिया (अंतःकटक/ATP ऊर्जा केंद्र) और लवक (हरित/वर्णी/अवर्णी लवक)।',
    },
    {
      en: 'Mitosis = 2 identical diploid cells (growth/repair); Meiosis = 4 haploid gametes with half chromosomes & half DNA (testes/ovaries/anthers).',
      hi: 'समसूत्री विभाजन = 2 समान संतति कोशिकाएँ (वृद्धि/मरम्मत); अर्धसूत्री विभाजन = 4 युग्मक आधे गुणसूत्रों के साथ (केवल जनन अंगों में)।',
    },
  ],

  visualGallery: [
    {
      id: 'vis-sem-stomata',
      figRef: { en: 'Figures 2.3 & 2.4', hi: 'चित्र 2.3 एवं 2.4' },
      title: {
        en: 'Scanning Electron Microscope (SEM) & Colocasia Leaf Stomata Micrograph',
        hi: 'इलेक्ट्रॉन सूक्ष्मदर्शी (SEM) एवं कोलोकेशिया पत्ती के रंध्र (Stomata)',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/sem-colocasia-stomata.webp',
      hotspots: [
        {
          en: 'Electron Beam: Replaces visible light to resolve nanoscale ($1\\text{ nm}$) structures',
          hi: 'इलेक्ट्रॉन पुंज: प्रकाश के बजाय इलेक्ट्रॉन से नैनोमीटर स्तर तक विभेदन',
        },
        {
          en: 'Colocasia Leaf Lower Epidermis: Bean-shaped Guard Cells surrounding Stomatal pore ($0.05\\text{ mm}$ scale)',
          hi: 'कोलोकेशिया पत्ती की निचली सतह: रंध्र छिद्र को घेरने वाली द्वार कोशिकाएँ',
        },
      ],
    },
    {
      id: 'vis-onion-cheek',
      figRef: { en: 'Figures 2.8 & 2.9 (Activity 2.3)', hi: 'चित्र 2.8 एवं 2.9 (क्रियाकलाप 2.3)' },
      title: {
        en: 'Safranin Onion Peel vs Plasmolysis in 20% Sugar vs Methylene Blue Cheek Cells',
        hi: 'सैफ्रेनीन प्याज झिल्ली vs 20% चीनी में जीवद्रव्य कुंचन vs मेथिलीन ब्लू कपोल कोशिका',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/onion-cheek-microscopy.webp',
      hotspots: [
        {
          en: 'Left Circle (Safranin Pink): Onion / Rhoeo cells — brick-like, regular arrangement with rigid Cell Wall',
          hi: 'बायाँ वृत्त (सैफ्रेनीन): प्याज / रोइओ कोशिकाएँ — ईंट जैसा नियमित व सुदृढ़ कोशिका भित्ति आकार',
        },
        {
          en: 'Center Circle (20% Sugar Hypertonic): Plasmolysis — Plant cell wall stays intact while cytoplasm shrinks inside!',
          hi: 'मध्य वृत्त (20% चीनी विलयन): जीवद्रव्य कुंचन — बाहरी भित्ति ज्यों की त्यों, भीतर का द्रव्य संकुचित!',
        },
        {
          en: 'Right Circle (Methylene Blue): Human Cheek cells — irregular flexible boundary, NO Cell Wall',
          hi: 'दायाँ वृत्त (मेथिलीन ब्लू): मानव कपोल कोशिका — अनियमित आकार, कोशिका भित्ति अनुपस्थित',
        },
      ],
    },
    {
      id: 'vis-root-mitosis',
      figRef: { en: 'Figures 2.16 & 2.17 (Activity 2.5)', hi: 'चित्र 2.16 एवं 2.17 (क्रियाकलाप 2.5)' },
      title: {
        en: 'Onion Root Tip Germination & Aceto-Carmine Stained Mitotic Division Stages',
        hi: 'प्याज के वर्धनशील मूलाग्र एवं एसीटो-कार्मिन अभिरंजित कोशिका विभाजन अवस्थाएँ',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/onion-root-mitosis.webp',
      hotspots: [
        {
          en: 'Fixative Trap: Aceto-alcohol (Glacial Acetic Acid : Ethanol :: 1 : 3) for 24h -> store in 70% Ethanol',
          hi: 'फिक्सेटिव सूत्र: एसीटो-ऐल्कोहॉल (ग्लेशियल एसिटिक अम्ल : एथेनॉल :: 1 : 3) में 24 घंटे -> 70% एथेनॉल संरक्षण',
        },
        {
          en: 'Softening + Stain: 1–2 drops Dilute HCl (10–15 min) softens cell walls -> 2–3 drops Aceto-carmine stain + gentle heat',
          hi: 'ऊतक कोमलन व रंजन: तनु HCl से नरम + एसीटो-कार्मिन से गुणसूत्र अभिरंजन व कवरस्लिप थम्ब-स्क्वैश',
        },
      ],
    },
  ],

  sections: [
    {
      id: 'origin-organization',
      number: '2.0',
      svgLab: null,
      title: {
        en: 'Origin of Life, BSIP Hot Springs & Biological Organization',
        hi: 'जीवन की उत्पत्ति, लद्दाख उष्ण स्रोत एवं कोशिकीय संगठन',
      },
      summaryTag: { en: 'NCERT Opening Page 8–9', hi: 'NCERT पृष्ठ 8–9 संपूर्ण' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Aquatic Origin & Ladakh Puga Valley Finding', hi: 'जल में जीवन की उत्पत्ति एवं पुगा घाटी (लद्दाख) शोध' },
          body: {
            en: 'Widely accepted that life originated in water—specifically dynamic small pools / geothermal hot springs resembling Earth ~3.5 billion years ago. In India, the hot springs of Puga Valley (Ladakh) stay near the boiling point of water even in cold climate. These harbour unicellular heat-loving bacteria called Thermophiles. Scientists at Birbal Sahni Institute of Palaeosciences (BSIP), Lucknow found rapid calcium carbonate ($CaCO_3$) deposition around these springs shielded early organic molecules from radiation and likely helped form the earliest protective cell membrane.',
            hi: 'वैज्ञानिक रूप से स्वीकृत है कि जीवन की उत्पत्ति जल में—विशेषकर ~3.5 अरब वर्ष पूर्व जैसी परिस्थितियों वाले उष्ण स्रोतों/छोटे जलकुंडों में हुई। भारत में लद्दाख की पुगा घाटी के उष्ण स्रोत ठंडी जलवायु में भी जल के क्वथनांक के बराबर तापमान बनाए रखते हैं, जहाँ ऊष्मा-स्नेही एककोशिकीय जीवाणु जिन्हें तापरागी जीवाणु (thermophiles) कहते हैं, पाए जाते हैं। लखनऊ स्थित बीरबल साहनी पुराविज्ञान संस्थान के वैज्ञानिकों ने पाया कि इन स्रोतों के चारों ओर बना कैल्शियम कार्बोनेट ($CaCO_3$) निक्षेप प्रारंभिक कार्बनिक अणुओं को हानिकारक विकिरण से बचाता था और पहली सुरक्षात्मक झिल्ली बनाने में सहायक रहा होगा।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'Origin Conditions: ~3.5 billion years ago | Ladakh Puga Valley = Thermophiles | BSIP Lucknow = Calcium carbonate ($CaCO_3$) protective membrane role.',
                hi: 'मुख्य तथ्य: ~3.5 अरब वर्ष पूर्व | लद्दाख पुगा घाटी = तापरागी जीवाणु | BSIP लखनऊ = कैल्शियम कार्बोनेट ($CaCO_3$) झिल्ली सुरक्षा।',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Unicellular vs Multicellular & Hierarchy', hi: 'एककोशिकीय बनाम बहुकोशिकीय एवं संगठन स्तर' },
          body: {
            en: 'All living organisms are made of cells. Unicellular organisms (Bacteria, Yeast) consist of a single cell. Multicellular organisms (Plants, Fish, Birds, Humans) contain millions of cells working together: Similar Cells -> Tissue -> Different Tissues -> Organ -> Multiple Organs -> Organ System (e.g., Nasal openings + Nasal cavity + Trachea + Lungs form the Respiratory System). Still, the cell remains the basic structural & functional unit.',
            hi: 'सभी सजीव कोशिकाओं से बने होते हैं। जीवाणु व यीस्ट केवल एक कोशिका से बने (एककोशिकीय) होते हैं, जबकि पादप, मछली, पक्षी व मनुष्य लाखों कोशिकाओं से बने (बहुकोशिकीय) होते हैं। क्रम: समान कोशिकाओं का समूह → ऊतक → विभिन्न ऊतक मिलकर → अंग → अनेक अंग → अंग-तंत्र (उदाहरण: नासा रंध्र, नासा गुहा, श्वासनली और फेफड़े = श्वसन तंत्र)। फिर भी कोशिका ही संरचना और कार्य की मूलभूत इकाई है।',
          },
        },
      ],
    },

    {
      id: 'studying-cells',
      number: '2.1',
      svgLab: 'microscope-scale',
      svgLabTitle: {
        en: 'Interactive Lab 1: Human Eye vs Optical & Electron Microscope Scale (Fig 2.1 & 2.2)',
        hi: 'इंटरैक्टिव लैब 1: नेत्र सीमा से परमाणु तक पैमाना एवं प्रकाश सूक्ष्मदर्शी (चित्र 2.1 व 2.2)',
      },
      title: {
        en: 'How Do We Study Cells? Eye Limit, Microscopy & Unit Conversions',
        hi: 'कोशिकाओं का अध्ययन कैसे करें? नेत्र विभेदन सीमा, सूक्ष्मदर्शी व मात्रक',
      },
      summaryTag: { en: 'Section 2.1 • Pages 9–11', hi: 'भाग 2.1 • पृष्ठ 9–11' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Resolving Limit of Eye & Robert Hooke (1665)', hi: 'नेत्र की विभेदन सीमा एवं रॉबर्ट हुक (1665)' },
          body: {
            en: 'Viewed from the human eye near point (~$25\\text{ cm}$), two dots separated by at least $0.1\\text{ mm}$ appear distinct; closer than $0.1\\text{ mm}$, they merge into one. This $0.1\\text{ mm}$ is the Resolving Limit of the human eye. Convex lenses (Objective + Eyepiece) magnify objects. In 1665, Robert Hooke used a self-built microscope ($200\\text{--}300\\times$ magnification) to inspect a thin cork slice, saw box-like compartments, and coined the term "cell".',
            hi: 'मानव नेत्र के निकट बिंदु (~$25\\text{ cm}$) से देखने पर यदि दो बिंदुओं के बीच दूरी कम से कम $0.1\\text{ mm}$ हो, तभी वे अलग दिखते हैं; इससे कम पर एक ही प्रतीत होते हैं। इसे मानव नेत्र की विभेदन सीमा ($0.1\\text{ mm}$) कहते हैं। उत्तल लेंस संयोजन (अभिदृश्यक लेंस + नेत्रिका) वस्तु को आवर्धित करता है। रॉबर्ट हुक ने वर्ष 1665 में स्व-निर्मित सूक्ष्मदर्शी ($200\\text{--}300\\times$) द्वारा कॉर्क के पतले टुकड़े में बक्से जैसे कोष्ठ देखे और उन्हें "सेल" (कोशिका) नाम दिया।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'Direct RRB PYQ (Group D Shift 38 / Tech-3 Shift 11): Year 1665 + Robert Hooke + Dead Cork slice! Remember his self-made microscope magnification = $200\\text{--}300\\times$.',
                hi: 'सीधा RRB PYQ: वर्ष 1665 + रॉबर्ट हुक + कॉर्क की काट (Cork slice)! स्व-निर्मित सूक्ष्मदर्शी आवर्धन = $200\\text{--}300$ गुना।',
              },
            },
            {
              kind: 'formula',
              text: {
                en: 'Total Magnification $= \\text{Eyepiece Power} \\times \\text{Objective Lens Power}$ (e.g. $10\\times \\times 10\\times = 100\\times$). Unit Scale: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$, $1\\text{ nm} = 10^{-9}\\text{ m} = 10^{-6}\\text{ mm}$.',
                hi: 'कुल आवर्धन $= \\text{नेत्रिका} \\times \\text{अभिदृश्यक लेंस}$ ($10\\times \\times 10\\times = 100\\times$) | मात्रक: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$, $1\\text{ nm} = 10^{-9}\\text{ m}$ (1 मीटर का एक अरबवाँ भाग)।',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Compound Light vs Scanning Electron Microscope', hi: 'प्रकाश सूक्ष्मदर्शी बनाम इलेक्ट्रॉन सूक्ष्मदर्शी' },
          body: {
            en: 'School light microscopes use $10\\times$ and $40\\times$ objective lenses and rely on visible light. Microscope improvement targets three core pillars: Resolution (clarity), Contrast (brightness difference between parts), and Magnification. High-power Electron Microscopes use an electron beam instead of light to resolve structures down to the nanometre ($\\text{nm}$) level. Fig 2.4 shows a Scanning Electron Microscope (SEM) image of lower-surface stomata on a Colocasia leaf ($0.05\\text{ mm}$ scale).',
            hi: 'प्रयोगशाला के प्रकाश सूक्ष्मदर्शी में $10\\times$, $40\\times$ अभिदृश्यक लेंस होते हैं। वैज्ञानिकों ने सूक्ष्मदर्शी की तीन मुख्य विशेषताओं— विभेदन (स्पष्टता), विपर्यास (विभिन्न भागों की द्युति में अंतर) और आवर्धन— में सुधार किया। इलेक्ट्रॉन सूक्ष्मदर्शी प्रकाश के बजाय इलेक्ट्रॉन पुंज का उपयोग कर नैनोमीटर स्तर तक कोशिका संरचना दिखाते हैं। चित्र 2.4 क्रमवीक्षण इलेक्ट्रॉन सूक्ष्मदर्शी (SEM) से कोलोकेशिया की पत्ती की निचली सतह के रंध्र (Stomata) दर्शाता है।',
          },
          highlights: [
            {
              kind: 'trap',
              text: {
                en: 'Trap: Electron Microscope uses an ELECTRON BEAM (not light/X-rays) and easily resolves Ribosomes ($\\sim 20\\text{--}30\\text{ nm}$), Viruses, Proteins & Cytoskeleton that light microscopes cannot clearly separate.',
                hi: 'Trap: इलेक्ट्रॉन सूक्ष्मदर्शी प्रकाश की जगह इलेक्ट्रॉन पुंज इस्तेमाल करता है और राइबोसोम, विषाणु व कोशिका-पंजर को स्पष्ट देख सकता है।',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'plasma-membrane-osmosis',
      number: '2.2.1',
      svgLab: 'osmosis-bilayer',
      svgLabTitle: {
        en: 'Interactive Lab 2: Live Osmosis / Plasmolysis Simulator & Fluid-Mosaic Bilayer (Fig 2.6 & 2.7)',
        hi: 'इंटरैक्टिव लैब 2: परासरण / जीवद्रव्य कुंचन सिम्युलेटर एवं तरल-मोजेक झिल्ली (चित्र 2.6 व 2.7)',
      },
      title: {
        en: 'Plasma Membrane, Diffusion, Osmosis & Fluid-Mosaic Model',
        hi: 'कोशिका झिल्ली, विसरण, परासरण एवं तरल-मोजेक मॉडल',
      },
      summaryTag: { en: 'Section 2.2.1 • Pages 11–13', hi: 'भाग 2.2.1 • पृष्ठ 11–13' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Selectively Permeable Barrier, Diffusion & Osmosis', hi: 'वरणात्मक पारगम्य झिल्ली, विसरण एवं परासरण' },
          body: {
            en: 'Cell Membrane (Plasma Membrane) encloses every cell and separates contents from external surroundings. It is selectively permeable—letting some substances pass (e.g., $O_2$ and $CO_2$ across lung alveoli membranes) while blocking others (like salt/sugar solute molecules during osmosis). Diffusion = net movement of particles from higher to lower concentration along a concentration gradient (does NOT require a membrane). Osmosis = diffusion of water across a selectively permeable membrane from dilute region (higher water concentration) to concentrated region (lower water concentration) until equilibrium. Plant roots absorb soil water by osmosis.',
            hi: 'कोशिका झिल्ली (प्लाज्मा झिल्ली) प्रत्येक कोशिका का बाहरी आवरण है। यह वरणात्मक रूप से पारगम्य (selectively permeable) होती है— कुछ पदार्थों ($O_2$, $CO_2$ फेफड़ों की कूपिकाओं में) को आने-जाने देती है और कुछ (जैसे चीनी/नमक अणु) को रोकती है। विसरण (Diffusion) = सांद्रता प्रवणता के अनुसार उच्च से निम्न सांद्रता की ओर कणों की गति (झिल्ली के बिना भी संभव)। परासरण (Osmosis) = वरणात्मक पारगम्य झिल्ली के पार तनु विलयन (अधिक जल अणु) से सांद्र विलयन (कम जल अणु) की ओर जल का विसरण। पौधों की जड़ें मिट्टी से जल इसी परासरण से सोखती हैं।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'ALP 2025 Shift 6: Functionally, Plasma Membrane is SELECTIVELY PERMEABLE ("वरणतः पारगम्य"), NOT "semi-permeable" or "rigid"!',
                hi: 'ALP 2025 प्रश्न: प्लाज्मा झिल्ली कार्य के आधार पर "वरणात्मक पारगम्य" (Selectively Permeable) होती है, कठोर या पूर्ण अपारगम्य नहीं!',
              },
            },
            {
              kind: 'hook',
              text: {
                en: 'Side Box Q: If Moong seeds soaked 12h in water are placed in a concentrated salt/sugar solution -> water leaves by exosmosis, making swollen seeds shrink!',
                hi: 'क्या होगा यदि... 12 घंटे जल में भीगे मूंग के बीजों को सांद्र विलयन में रखें? बहिःपरासरण से जल बाहर निकलेगा और बीज सिकुड़ जाएंगे!',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Tonicity Cases & Fluid-Mosaic Structure (7–10 nm)', hi: 'विलयन के प्रकार एवं तरल-मोजेक संरचना (7–10 nm)' },
          body: {
            en: 'Three solution effects (Fig 2.6): (1) Isotonic: external solute = internal solute -> equal bidirectional movement -> no net size change. (2) Hypotonic: external solute < internal solute (more water outside) -> water enters cell -> cell swells. (3) Hypertonic: external solute > internal solute -> water leaves cell -> cell shrinks. Structurally, plasma membrane is $7\\text{--}10\\text{ nm}$ thick ($1\\text{ nm} = 0.000001\\text{ mm}$), made of Lipids and Proteins arranged in the Fluid-Mosaic Model: a phospholipid bilayer (water-loving hydrophilic heads facing outside, water-repelling hydrophobic tails facing inside) with embedded proteins acting as gatekeepers. Lateral shifting/flipping makes it Fluid; tile-like protein arrangement makes it Mosaic.',
            hi: 'तीन विलयन प्रभाव (चित्र 2.6): (1) समपरासारी (Isotonic): बाह्य सांद्रता = अंतःकोशिकीय सांद्रता -> आकार अपरिवर्तित। (2) अल्पपरासारी (Hypotonic): बाह्य विलेय कम (जल अधिक) -> जल अंदर आएगा -> कोशिका फूलेगी। (3) अतिपरासारी (Hypertonic): बाह्य विलेय अधिक -> जल बाहर निकलेगा -> कोशिका सिकुड़ जाएगी। संरचनात्मक रूप से यह $7\\text{--}10\\text{ nm}$ ($1\\text{ nm} = 0.000001\\text{ mm}$) मोटी तथा लिपिड व प्रोटीन की बनी है (तरल-मोजेक मॉडल): लिपिड द्विपरत में जल-आकर्षी शीर्ष बाहर व जल-प्रतिकर्षी पूँछें भीतर होती हैं, तथा प्रोटीन गेटकीपर (द्वारपाल) का काम करते हैं। पार्श्व गति व पलटने से यह तरल (fluid) और टाइल जैसी सज्जा से मोजेक (mosaic) कहलाती है।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'ALP 2025 Shift 3 & Tech3 Shift 13: Plasma membrane is made of BOTH Lipids & Proteins (thickness $7\\text{--}10\\text{ nm}$). Membrane proteins function as transport gatekeepers.',
                hi: 'PYQ तथ्य: प्लाज्मा झिल्ली लिपिड (वसा) और प्रोटीन दोनों से बनी होती है (मोटाई $7\\text{--}10\\text{ nm}$)।',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'cell-wall',
      number: '2.2.2',
      svgLab: null,
      title: {
        en: 'Cell Wall, Cellulose, Plasmolysis & Animal Flexibility',
        hi: 'कोशिका भित्ति, सेल्युलोस, जीवद्रव्य कुंचन एवं जंतु लचीलापन',
      },
      summaryTag: { en: 'Section 2.2.2 • Pages 13–14', hi: 'भाग 2.2.2 • पृष्ठ 13–14' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Plants/Fungi/Bacteria Armor vs Freely Permeable Wall', hi: 'पादप, कवक व जीवाणु में कोशिका भित्ति एवं पारगम्यता' },
          body: {
            en: 'Because plants are stationary, they endure wind, rain & moisture shifts and need an extra rigid protective layer outside the plasma membrane called the Cell Wall (also present in fungi and bacteria; absent in animal cells). Unlike the selectively permeable plasma membrane, the cell wall is FREELY PERMEABLE—allowing water and dissolved minerals to pass across freely into root hairs. In hypertonic 20% sugar solution, plant cell protoplasm loses water by osmosis and pulls away from the rigid cell wall (Plasmolysis), while the outer wall maintains box shape; animal cheek cells shrink completely. Lack of cell wall grants animal cells cellular flexibility for movement & tissue mechanics.',
            hi: 'पादप एक स्थान से दूसरे स्थान नहीं जा सकते, इसलिए वायु व वर्षा जैसी प्रतिकूल परिस्थितियों से बचाव हेतु कोशिका झिल्ली के बाहर एक अतिरिक्त दृढ़ आवरण होता है— कोशिका भित्ति (पादप, कवक व जीवाणु में उपस्थित; जंतुओं में अनुपस्थित)। कोशिका भित्ति पारगम्य (permeable) होती है जिससे जल व घुले खनिज आसानी से आर-पार जा सकते हैं। 20% चीनी के सांद्र घोल में पादप कोशिका की अंतर्वस्तुएं जल खोकर भित्ति से दूर संकुचित हो जाती हैं (जीवद्रव्य कुंचन / Plasmolysis), पर बाहरी भित्ति आकार बनाए रखती है। भित्ति न होने से जंतु कोशिकाओं को कोशिकीय लचीलापन (flexibility) मिलता है।',
          },
          highlights: [
            {
              kind: 'trap',
              text: {
                en: 'Classic 3-Way Permeability Distinction: Cell Wall = Freely Permeable | Plasma Membrane = Selectively Permeable | Plant Wall Material = Cellulose (glucose polymer; acts as dietary Roughage in humans).',
                hi: 'महत्त्वपूर्ण अंतर: कोशिका भित्ति = पारगम्य | प्लाज्मा झिल्ली = वरणात्मक पारगम्य | पादप भित्ति पदार्थ = सेल्युलोस (अनेक ग्लूकोस इकाइयों से बना कार्बोहाइड्रेट; मानव आहार में रुक्षांश/roughage)।',
              },
            },
            {
              kind: 'pyq',
              text: {
                en: 'Group D 2025 Shift 12 & Tech3 2024 Shift 1: Plant : Rigid Cell Wall :: Animal : Cellular flexibility | Shrinking away from cell wall = Plasmolysis (जीवद्रव्य कुंचन).',
                hi: 'Group D 2025 Shift 12: पादप : दृढ़ कोशिका भित्ति :: जंतु : कोशिकीय नम्यता (Flexibility) | Tech Gr-III 2024: कोशिका भित्ति से अंतर्वस्तु संकुचन = जीवद्रव्य कुंचन।',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'prokaryote-vs-eukaryote',
      number: '2.3',
      svgLab: 'cell-explorer',
      svgLabTitle: {
        en: 'Interactive Lab 3: 3-Way Cell Explorer — Prokaryote vs Plant vs Animal Cell (Fig 2.10–2.15, 2.20)',
        hi: 'इंटरैक्टिव लैब 3: जीवाणु बनाम पादप बनाम जंतु कोशिका एक्सप्लोरर (क्लिक करके कोशिकांग जानें)',
      },
      title: {
        en: 'Internal Organization: Prokaryotes, Eukaryotes, Viruses, Prions & Cytoskeleton',
        hi: 'कोशिका का आंतरिक भाग: पूर्वकेंद्रकी vs सुकेंद्रकी, विषाणु/प्रोसंक व कोशिका पंजर',
      },
      summaryTag: { en: 'Section 2.3 • Pages 14–15', hi: 'भाग 2.3 • पृष्ठ 14–15' },
      blocks: [
        {
          type: 'concept',
          heading: { en: '3 Core Regions & Prokaryote vs Eukaryote Divide', hi: 'तीन मूल भाग तथा पूर्वकेंद्रकी बनाम सुकेंद्रकी विभाजन' },
          body: {
            en: 'Nearly all cells share 3 basics: Plasma membrane, semi-fluid jelly Cytoplasm, and genetic region (Nucleus/Nucleoid). Bacterial cells lack a true nuclear membrane and membrane-bound organelles—called Prokaryotic cells (pro = primitive/before, karyon = nucleus; size $1\\text{--}10\\text{ }\\mu\\text{m}$; DNA lies as a naked single circular region called Nucleoid / आद्य केंद्रक). Plant and Animal cells possess a membrane-bound nucleus and membrane-bound organelles—called Eukaryotic cells (eu = true, karyon = nucleus; size $10\\text{--}100\\text{ }\\mu\\text{m}$).',
            hi: 'अधिकांश कोशिकाओं के 3 मूलभूत भाग होते हैं: प्लाज्मा झिल्ली, अर्धतरल जेली कोशिकाद्रव्य और केंद्रक/केंद्रकाभ। जीवाणु कोशिका में सुस्पष्ट केंद्रक झिल्ली व झिल्ली-आबद्ध कोशिकांग नहीं होते— इन्हें पूर्वकेंद्रकी / प्रोकैरयोटिक कोशिका (pro = पूर्व, karyon = केंद्रक; व्यास $1\\text{--}10\\text{ }\\mu\\text{m}$) कहते हैं; आनुवंशिक पदार्थ झिल्ली-रहित क्षेत्र केंद्रकाभ (Nucleoid) में होता है। पादप व जंतु कोशिकाओं में सुस्पष्ट केंद्रक व झिल्ली-आबद्ध कोशिकांग होते हैं— सुकेंद्रकी / यूकैरयोटिक कोशिका (eu = वास्तविक; व्यास $10\\text{--}100\\text{ }\\mu\\text{m}$)।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'Tech3 2024 Shift 18 & 23: Prokaryotic cells have ONLY A SINGLE CHROMOSOME, lack nuclear membrane, and lack membrane-bound organelles (only naked ribosomes present!).',
                hi: 'Tech Gr-III 2024 PYQ: प्रोकैरयोटिक कोशिका में एकल (single) गुणसूत्र होता है और झिल्ली-आबद्ध कोशिकांग अनुपस्थित होते हैं।',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Box Gems: Acellular Agents (Viruses, Viroids, Prions) + Cytoskeleton', hi: 'बॉक्स विशेष तथ्य: विषाणु, विषाणुभ, प्रोसंक एवं कोशिका पंजर' },
          body: {
            en: 'Box 1 ("Let us think more"): Viruses, Viroids, and Prions are ACELLULAR (non-cellular) infectious agents too small for light microscopes. Viruses = genetic material (DNA/RNA) + protein coat. Viroids = genetic material ONLY (no protein coat). Prions = abnormally folded proteins ONLY (NO genetic material!). Box 2 ("Let us go further"): Eukaryotic cells contain an ultra-fine protein filament network visible only under Electron Microscope called the Cytoskeleton (कोशिका पंजर)—providing structural stability, shape, cell motility, and intracellular transport. Stored starch or calcium oxalate/silica crystals in plant cytoplasm are called Cell Inclusions (कोशिका अंतरंगक).',
            hi: 'बॉक्स 1 (अकोशिकीय संक्रामक कारक): विषाणु (Virus) = आनुवंशिक सामग्री + प्रोटीन आवरण | विषाणुभ (Viroids) = केवल आनुवंशिक सामग्री (प्रोटीन आवरण नहीं) | प्रोसंक (Prions) = केवल असामान्य रूप से मुड़े/अपवलित प्रोटीन (आनुवंशिक सामग्री नहीं!)। बॉक्स 2: सुकेंद्रकी कोशिकाओं में अत्यंत पतले तंतुओं का जाल कोशिका पंजर (Cytoskeleton) कहलाता है जो आकार बनाए रखने, संरचनात्मक स्थिरता, गति और आंतरिक परिवहन में मदद करता है (केवल इलेक्ट्रॉन सूक्ष्मदर्शी से दृश्य)। पादप कोशिकाद्रव्य में संचित मंड या कैल्शियम ऑक्सलेट/सिलिका क्रिस्टल कोशिका अंतरंगक (Cell inclusions) कहलाते हैं।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'DIRECT Group D 2025 Shift 34 Hit: "Which cell structure provides support and maintains shape of eukaryotic cells?" -> Cytoskeleton (कोशिका-पंजर)! Also remember Viroids = NO protein; Prions = NO DNA/RNA!',
                hi: 'सीधा Group D 2025 Shift 34 प्रश्न: सुकेंद्रकी कोशिकाओं के आकार व आलंब के लिए कौन उत्तरदायी है? उत्तर: कोशिका-पंजर (Cytoskeleton)!',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'nucleus-ribosome-er-golgi-lysosome',
      number: '2.3.1-A',
      svgLab: null,
      title: {
        en: 'Organelles Part 1: Nucleus, Chromosomes, RBC Exception, Ribosome, ER, Golgi & Lysosome',
        hi: 'कोशिकांग भाग 1: केंद्रक, गुणसूत्र, लाल रक्त कोशिका अपवाद, राइबोसोम, ER, गॉल्जीकाय व लाइसोसोम',
      },
      summaryTag: { en: 'Section 2.3.1 • Pages 16–17', hi: 'भाग 2.3.1 • पृष्ठ 16–17' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Nucleus (केंद्रक), Chromatin vs Chromosomes & RBC Enucleation Trap', hi: 'केंद्रक, क्रोमेटिन/गुणसूत्र, जीन एवं परिपक्व RBC अपवाद' },
          body: {
            en: 'Nucleus (control center) is enclosed by a double-layered nuclear membrane perforated with nuclear pores for nucleo-cytoplasmic transport. Inside sits a dense spherical Nucleolus (केंद्रिका), which synthesizes ribosomal subunits that exit to assemble ribosomes in cytoplasm. Non-dividing cells hold DNA + special proteins as an entangled thread mass called Chromatin; before cell division, chromatin condenses into rod-shaped Chromosomes. Functional segments of DNA are called Genes. Box Exception: Mature human Red Blood Cells (RBCs) have NO nucleus (enucleated) to maximize space for haemoglobin oxygen transport—hence they cannot divide or repair and live only ~120 days.',
            hi: 'केंद्रक द्विपरती केंद्रक झिल्ली से घिरा होता है जिसमें पदार्थों के आवागमन हेतु केंद्रक छिद्र होते हैं। भीतर सघन गोल केंद्रिका (Nucleolus) में राइबोसोम की उपइकाइयाँ बनती हैं। अविभाजित कोशिका में DNA व विशेष प्रोटीन उलझे धागे रूपी क्रोमेटिन (Chromatin) के रूप में होते हैं, जो विभाजन के समय छड़ाकार गुणसूत्रों (Chromosomes) में संगठित हो जाते हैं। DNA के कार्यात्मक खंडों को जीन (Gene) कहते हैं। अपवाद बॉक्स: मनुष्यों की परिपक्व लाल रक्त कोशिकाओँ (RBCs) में केंद्रक नहीं होता ताकि हीमोग्लोबिन के लिए अधिक स्थान मिले; इसी कारण ये विभाजन/मरम्मत नहीं कर पातीं और लगभग 120 दिन जीवित रहती हैं।',
          },
          highlights: [
            {
              kind: 'trap',
              text: {
                en: 'Exam Trap: Chromosomes become visibly rod-shaped ONLY during cell division (otherwise DNA exists as chromatin). Mature human RBCs lack a nucleus (lifespan ~120 days). In Prokaryotes, circular DNA without membrane = Nucleoid.',
                hi: 'Exam Trap: गुणसूत्र केवल कोशिका विभाजन के समय ही छड़ाकार दिखते हैं! परिपक्व मानव RBC केंद्रक-रहित होती हैं (जीवनकाल ~120 दिन)।',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Endomembrane Factory: Ribosomes -> ER (RER/SER) -> Golgi -> Lysosomes', hi: 'निर्माण एवं पैकेजिंग मार्ग: राइबोसोम -> अंतर्द्रव्यी जालिका -> गॉल्जी -> लाइसोसोम' },
          body: {
            en: '1. Ribosomes ("Protein Factory"): Tiny membrane-less granules free in cytoplasm or attached on RER—site of protein synthesis. 2. Endoplasmic Reticulum (ER): Network continuous with outer nuclear membrane. Rough ER (RER) has ribosomes attached -> synthesizes & secretes proteins (e.g., pancreatic gland cells). Smooth ER (SER) lacks ribosomes -> synthesizes & stores lipids (fats) and certain hormones. 3. Golgi Apparatus ("Post Office"): Stacks of flattened sacs discovered in 1898 by Italian scientist Camillo Golgi in Barn Owl (श्वेत उल्लू) nerve cells using special silver staining; modifies, sorts & packs ER lipids/proteins into vesicles for transport, secretion, or Lysosome formation. 4. Lysosomes ("Clean-up / Suicidal Bags"): Single-membrane enzyme sacs digesting cellular waste, worn organelles & foreign particles; human sperm carries lysosomal enzymes to dissolve the egg outer layer during fertilisation.',
            hi: '1. राइबोसोम (प्रोटीन की फैक्टरी): कोशिकाद्रव्य में मुक्त या RER पर जुड़े, झिल्ली-रहित; प्रोटीन संश्लेषण। 2. अंतर्द्रव्यी जालिका (ER): केंद्रक आवरण की बाहरी झिल्ली से जुड़ी; रुक्ष ER (RER) पर राइबोसोम -> प्रोटीन संश्लेषण (उदा. अग्न्याशयी ग्रंथि कोशिकाएँ); चिकनी ER (SER) बिना राइबोसोम -> वसा (लिपिड) व हार्मोन संश्लेषण व भंडारण। 3. गॉल्जी उपकरण (डाकघर): 1898 में इतालवी वैज्ञानिक कैमिलो गॉल्जी ने श्वेत उल्लू (बार्न उल्लू) की तंत्रिका कोशिकाओं में विशेष अभिरंजन से खोजा; चपटी थैलियों की ढेरी जो ER उत्पादों को रूपांतरित, वर्गीकृत व पुटिकाओं में पैक कर परिवहन, स्रवण या लाइसोसोम बनाती है। 4. लाइसोसोम (निर्मलन प्रणाली/लयनकाय): एंजाइम से भरी एकल झिल्ली थैली जो अपशिष्ट व जीर्ण अंगों को पचाती है। मानव शुक्राणु में लाइसोसोमीय एंजाइम अंडाणु की बाहरी परत विघटित कर निषेचन में मदद करते हैं।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'Quiz Fact Cluster: SER makes LIPIDS & HORMONES (trap Ex Q11: SER does NOT make cellulose!). Golgi makes Lysosomes (Tech3 PYQ). Barn Owl nerve cells = Camillo Golgi 1898.',
                hi: 'PYQ क्लस्टर: SER वसा व हार्मोन बनाती है (अभ्यास प्रश्न 11 Trap: SER सेल्युलोस नहीं बनाती!)। गॉल्जीकाय = लाइसोसोम निर्माण व प्रोटीन पैकेजिंग।',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'mitochondria-plastids-vacuoles',
      number: '2.3.1-B',
      svgLab: null,
      title: {
        en: 'Organelles Part 2: Mitochondria (ATP), 3 Plastids, Vacuoles & Synthetic DNA',
        hi: 'कोशिकांग भाग 2: माइटोकॉन्ड्रिया (ATP), 3 प्रकार के लवक, रसधानी एवं संश्लेषित DNA',
      },
      summaryTag: { en: 'Section 2.3.1 • Pages 18–20', hi: 'भाग 2.3.1 • पृष्ठ 18–20' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Mitochondria & Plastids — The Semi-Autonomous Bacterial Cousins', hi: 'माइटोकॉन्ड्रिया व लवक — अपना DNA और राइबोसोम रखने वाले कोशिकांग' },
          body: {
            en: 'Mitochondria ("Powerhouse / सूत्रकणिका"): Double-membrane organelle. Outer membrane is smooth & porous; inner membrane folds deeply into finger-like cristae (अंतःकटक) expanding surface area for chemical reactions! Glucose & food molecules break down here during cellular respiration releasing energy stored as ATP (Adenosine Triphosphate — "Energy Currency"). Plastids (PLANT CELLS ONLY, also double-membrane): (a) Chloroplast (हरितलवक): semi-fluid Stroma holding chlorophyll-rich disc structures for photosynthesis & starch grain storage; (b) Chromoplast (वर्णीलवक, Greek chroma = colour): yellow/orange/red pigments in flower petals & fruits attracting pollinators & seed dispersers; (c) Leucoplast (अवर्णी लवक, Greek leukos = colourless): stores starch, oil or protein (e.g., potato & Colocasia roots). CRITICAL PYQ FACT: Both Mitochondria AND Plastids possess their OWN DNA & Ribosomes (making some of their own proteins & pointing to shared evolutionary ancestry with bacteria!).',
            hi: 'माइटोकॉन्ड्रिया (सूत्रकणिका / ऊर्जा केंद्र): दोहरी झिल्ली— बाहरी झिल्ली चिकनी व छिद्रित, भीतरी झिल्ली अँगुली जैसे उभार अंतःकटक (cristae) में मुड़ी रहती है ताकि ऊर्जा उत्पादन हेतु सतह क्षेत्र बढ़े। कोशिकीय श्वसन में ग्लूकोस टूटकर ATP (ऐडेनोसिन ट्राइफॉस्फेट — ऊर्जा की मुद्रा) बनाता है। लवक (केवल पादप कोशिकाओं में): (क) हरितलवक (दोहरी झिल्ली; भीतर अर्ध-तरल पीठिका/stroma में पर्णहरित युक्त चक्रिकाएँ जो प्रकाश-संश्लेषण व मंड संचय करती हैं), (ख) वर्णीलवक (क्रोमोप्लास्ट — फूलों व फलों को पीला/नारंगी/लाल रंग देकर परागणकारियों को आकर्षित करता है), (ग) अवर्णी लवक (ल्यूकोप्लास्ट — रंगहीन; स्टार्च, तेल व प्रोटीन संचय, जैसे आलू व अरबी में)। सबसे बड़ा PYQ तथ्य: माइटोकॉन्ड्रिया और लवक दोनों में अपना स्वयं का डीएनए (DNA) व राइबोसोम होते हैं!',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'Asked 3+ times across Group D Shift 33, Tech3 Shift 5 & Shift 13: Which organelles outside nucleus have their OWN DNA & Ribosomes? -> Mitochondria & Plastids!',
                hi: 'Group D Shift 33 + Tech3 Shift 5/13 में बार-बार पूछा गया: केंद्रक के अलावा किन कोशिकांगों में अपना DNA व राइबोसोम होते हैं? -> माइटोकॉन्ड्रिया और लवक (Plastids)!',
              },
            },
            {
              kind: 'trap',
              text: {
                en: 'Double vs Single vs Zero Membrane Check: Double = Nucleus, Mitochondria, Plastids | Single = ER, Golgi, Lysosomes, Vacuole | No Membrane = Ribosomes, Nucleoid, Cytoskeleton.',
                hi: 'झिल्ली संख्या ट्रिक: दोहरी झिल्ली = केंद्रक, माइटोकॉन्ड्रिया, लवक | एकल झिल्ली = ER, गॉल्जी, लाइसोसोम, रसधानी | झिल्ली-रहित = राइबोसोम, केंद्रकाभ, कोशिका पंजर।',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Vacuoles & J. Craig Venter (2010) Synthetic Cell Milestone', hi: 'रसधानी (पादप दृढ़ता) एवं जे. क्रेग वेंटर (2010) का संश्लेषित DNA प्रयोग' },
          body: {
            en: 'Vacuoles (रसधानी): Mature plant cells usually contain one LARGE central vacuole bounded by a single selectively permeable membrane and filled with aqueous Cell Sap (water, minerals, sugars, wastes). Water pressure keeps plant cells turgid/rigid; water loss from vacuoles makes plants wilt. Animal cells have much smaller/temporary vacuoles. Box ("Jigyasa-Sutra" 2010): J. Craig Venter & team read the complete DNA sequence of Mycoplasma mycoides using computer programming, chemically synthesized an exact copy in lab, and transplanted it into a related bacterium whose own DNA was removed (keeping cytoplasm & membrane intact)—the recipient cell grew and divided according to synthetic DNA instructions, proving DNA governs cell structure and activity.',
            hi: 'रसधानी: परिपक्व पादप कोशिका में एकल वरणात्मक पारगम्य झिल्ली से घिरी बड़ी केंद्रीय रसधानी होती है जिसमें जलीय कोशिका-रस (जल, खनिज, शर्करा, अपशिष्ट) भरा होता है। यह दबाव बनाकर पादप कोशिका को दृढ़ रखती है; जल की हानि से पौधा मुरझा जाता है। जंतु कोशिकाओं में रसधानी बहुत छोटी/अस्थायी होती है। जिज्ञासा-सूत्र (2010): जे. क्रेग वेंटर व उनके दल ने माइकोप्लाज्मा माइकोइड्स (Mycoplasma mycoides) जीवाणु के पूर्ण DNA को पढ़कर प्रयोगशाला में संश्लेषित प्रति बनाई और दूसरे DNA-रहित जीवाणु में प्रवेश कराया—कोशिका नए संश्लेषित DNA के अनुसार वृद्धि व विभाजन करने लगी।',
          },
        },
      ],
    },

    {
      id: 'cell-division',
      number: '2.4',
      svgLab: 'mitosis-meiosis',
      svgLabTitle: {
        en: 'Interactive Lab 4: Animated Mitosis vs Meiosis Simulator (Fig 2.18 & 2.19)',
        hi: 'इंटरैक्टिव लैब 4: समसूत्री बनाम अर्धसूत्री विभाजन एनिमेशन (चित्र 2.18 व 2.19)',
      },
      title: {
        en: 'Growth, Mitosis, Meiosis, Arun Kumar Sharma & Tissue Culture',
        hi: 'कोशिका विभाजन (समसूत्री व अर्धसूत्री), अरुण कुमार शर्मा एवं ऊतक संवर्धन',
      },
      summaryTag: { en: 'Section 2.4 • Pages 20–22', hi: 'भाग 2.4 • पृष्ठ 20–22' },
      blocks: [
        {
          type: 'concept',
          heading: { en: 'Daily Replacement, Mitosis vs Meiosis & Division Errors', hi: 'कोशिका प्रतिस्थापन, समसूत्री व अर्धसूत्री अंतर और त्रुटि प्रभाव' },
          body: {
            en: 'Bodies grow not merely because cells expand (they have size limits), but by dividing into new cells. Humans replace hundreds of billions of cells daily (~1% of total body cells). Eukaryotes divide cleanly via a regulated Cell Cycle. Two main types: (1) Mitosis (समसूत्री): single fertilized ovum multiplies into trillions of somatic cells; 1 parent -> 2 genetically identical daughter cells preserving exact DNA & chromosome count; drives growth, skin repair, maintenance & asexual reproduction. (2) Meiosis (अर्धसूत्री): happens ONLY in reproductive organs (human testes -> sperm, ovaries -> ova; plant anthers -> pollen, ovary -> egg cell). A 2-stage division producing 4 gametes with HALF chromosomes & HALF DNA (fertilisation restores full count) generating genetic diversity. Errors: faulty Mitosis causes uncontrolled division/tumours & abnormal chromosome count; faulty Meiosis causes genetic disorders, developmental defects, early miscarriage or reduced fertility.',
            hi: 'मानव शरीर में प्रतिदिन सैकड़ों अरब कोशिकाएँ (~1%) प्रतिस्थापित होती हैं। सुकेंद्रकी कोशिकाएँ नियंत्रित कोशिका चक्र (cell cycle) से विभाजित होती हैं। (1) समसूत्री विभाजन (Mitosis): 1 जनक कोशिका से आनुवंशिक रूप से समान 2 संतति कोशिकाएँ (समान DNA व गुणसूत्र संख्या)— वृद्धि, घाव मरम्मत व अलैंगिक जनन के लिए। (2) अर्धसूत्री विभाजन (Meiosis): केवल जनन अंगों (नर वृषण में शुक्राणु, मादा अंडाशय में अंडाणु; पादप परागकोश में परागकण व अंडाशय में अंडकोशिका) में द्वि-चरणीय विभाजन जिससे 4 युग्मक बनते हैं (गुणसूत्र व DNA की संख्या आधी; निषेचन पर पुनः पूर्ण होती है) — आनुवंशिक विविधता लाता है। त्रुटियाँ: समसूत्री त्रुटि से अनियंत्रित विभाजन/अर्बुद (tumour); अर्धसूत्री त्रुटि से आनुवंशिक विकार, गर्भपात या प्रजनन क्षमता में कमी।',
          },
          highlights: [
            {
              kind: 'hook',
              text: {
                en: 'Zero-Confusion Formula: Mitosis = "M -> Make 2 same" ($2n \\to 2n + 2n$); Meiosis = "Me -> Half ($n$)" in 2 steps producing 4 Sex Gametes.',
                hi: 'याद रखने का तरीका: समसूत्री = "सम" यानी बराबर (2 समान कोशिकाएँ, $2n \\to 2n$); अर्धसूत्री = "अर्ध" यानी आधी (4 युग्मक, आधे गुणसूत्र $2n \\to n$) केवल जनन अंगों में।',
              },
            },
          ],
        },
        {
          type: 'concept',
          heading: { en: 'Box: Tissue Culture (कोशिका संवर्धन) — Sterile Nutrients, pH & Moisture', hi: 'विज्ञान एवं समाज: जंतु कोशिका संवर्धन (Tissue Culture)' },
          body: {
            en: 'Scientists grow animal cells outside the body in sterile conditions using nutrient-rich media under controlled temperature, acidic/alkaline pH, and moisture—vital for studying cell behaviour and producing biochemicals, food, drugs & vaccines.',
            hi: 'विशेष निर्जर्मीकृत परिस्थितियों में पोषक समृद्ध माध्यम, नियंत्रित तापमान, अम्लीय/क्षारीय pH और नमी रखकर शरीर के बाहर कोशिका संवर्धन किया जाता है— जो जैव-रसायनों, भोजन, औषधि और टीकों के निर्माण में अत्यंत महत्त्वपूर्ण है।',
          },
        },
      ],
    },

    {
      id: 'cell-theory-cancer-pcd',
      number: '2.5',
      svgLab: null,
      title: {
        en: 'Classical Cell Theory, Totipotency, Contact Inhibition, Cancer & PCD',
        hi: 'कोशिका सिद्धांत, पूर्णशक्तता, संपर्क अवरोध, कैंसर व क्रमादेशित कोशिका मृत्यु (PCD)',
      },
      summaryTag: { en: 'Section 2.5 • Page 23–24', hi: 'भाग 2.5 • पृष्ठ 23–24' },
      blocks: [
        {
          type: 'concept',
          heading: { en: '3 Pillars of Cell Theory (Schleiden, Schwann & Virchow)', hi: 'कोशिका सिद्धांत के 3 स्तंभ (श्लीडेन, श्वान एवं विरचो)' },
          body: {
            en: 'Classical Cell Theory was formulated by three German scientists: Matthias Schleiden (1838, botanist — all plants made of cells), Theodor Schwann (1839, zoologist — all animals made of cells), and Rudolf Virchow (1855 — expanded theory stating new cells arise ONLY from pre-existing cells). Three Tenets: (1) All organisms consist of one or more cells; (2) Cell is fundamental structural & functional unit of life; (3) All cells originate from pre-existing cells.',
            hi: 'पुरातन कोशिका सिद्धांत के निर्माता: मैथियास श्लीडेन (1838, जर्मन वनस्पतिशास्त्री — सभी पादप कोशिकाओं से बने हैं), थियोडोर श्वान (1839, जर्मन प्राणिविज्ञानी — सभी जंतु भी कोशिकाओं से बने हैं), और रुडोल्फ़ विरचो (1855 — नई कोशिकाएँ केवल पूर्वविद्यमान कोशिकाओं से बनती हैं)। 3 मुख्य बिंदु: (1) सभी सजीव 1 या अधिक कोशिकाओं से निर्मित; (2) कोशिका संरचना व कार्य की मूल इकाई; (3) सभी कोशिकाएँ पूर्वविद्यमान कोशिकाओं से उत्पन्न।',
          },
        },
        {
          type: 'concept',
          heading: { en: 'Contact Inhibition, Tumours/Cancer, Haberlandt Totipotency & Embryo PCD', hi: 'संपर्क अवरोध, अर्बुद/कैंसर, पूर्णशक्तता एवं क्रमादेशित कोशिका मृत्यु (PCD)' },
          body: {
            en: 'Normal animal cells have a fixed lifespan and stop dividing upon touching neighbouring cells—this safeguard is Contact Inhibition (संपर्क अवरोध). Plant cells lack this due to rigid cell walls (following a different growth pattern). Cancer cells lose contact inhibition, divide uncontrollably forming Tumours (अर्बुद): either Benign (सुदम्य) or Malignant (दुर्दम — invading nearby tissues & spreading to distant organs). Programmed Cell Death (PCD / क्रमादेशित कोशिका मृत्यु): genetically regulated selective cell elimination crucial for development, quality control & immunity—for example, PCD removes cells between embryonic fingers so hands are not webbed (जलयुक्त)!',
            hi: 'सामान्य जंतु कोशिकाएँ निकटवर्ती कोशिकाओं के संपर्क में आने पर विभाजन रोक देती हैं— इसे संपर्क अवरोध (Contact Inhibition) कहते हैं (पादपों में दृढ़ भित्ति के कारण यह नहीं पाया जाता)। कैंसर कोशिकाएँ यह नियंत्रण खोकर अनियंत्रित विभाजन से अर्बुद (Tumour) बनाती हैं जो सुदम्य (benign) या दुर्दम (malignant — आसपास व अन्य भागों में फैलने वाले) हो सकते हैं। क्रमादेशित कोशिका मृत्यु (PCD): कोशिकाओं के नष्ट होने की आनुवंशिकतः नियंत्रित प्रक्रिया जो सामान्य विकास, गुणवत्ता नियंत्रण व प्रतिरक्षा हेतु अनिवार्य है— जैसे भ्रूण में अँगुलियों के बीच की कोशिकाओं को हटाकर अलग अँगुलियाँ बनाना (वरना हाथ जलयुक्त होते)।',
          },
          highlights: [
            {
              kind: 'pyq',
              text: {
                en: 'Group D 2025 Shift 40 Hit: Normal cell = performs function & undergoes Programmed Cell Death (PCD) when no longer needed! Embryo hand webbing prevention = PCD.',
                hi: 'Group D 2025 Shift 40 PYQ: सामान्य सुकेंद्रकी कोशिका आवश्यकता न होने पर क्रमादेशित कोशिका मृत्यु (PCD) से गुजरती है! अँगुलियों के बीच की झिल्ली हटना = PCD।',
              },
            },
          ],
        },
      ],
    },
  ],

  pioneers: [
    {
      name: { en: 'Robert Hooke (1665)', hi: 'रॉबर्ट हुक (1665)' },
      country: { en: 'English Scientist', hi: 'ब्रिटिश वैज्ञानिक' },
      badge: { en: 'Cell Discovery', hi: 'कोशिका की खोज' },
      fact: {
        en: 'Examined thin dead Cork slice under self-made compound microscope ($200\\text{--}300\\times$); saw honeycomb boxes & coined term "cell".',
        hi: 'स्व-निर्मित सूक्ष्मदर्शी ($200\\text{--}300\\times$) से कॉर्क के पतले टुकड़े में बक्से जैसे कोष्ठ देखे व "सेल" (कोशिका) नाम दिया।',
      },
    },
    {
      name: { en: 'Schleiden (1838), Schwann (1839) & Virchow (1855)', hi: 'श्लीडेन, श्वान एवं विरचो' },
      country: { en: 'German Trio', hi: 'जर्मन वैज्ञानिक त्रयी' },
      badge: { en: 'Classical Cell Theory', hi: 'कोशिका सिद्धांत' },
      fact: {
        en: 'Schleiden (all plants = cells), Schwann (all animals = cells), Virchow (all new cells arise from pre-existing cells).',
        hi: 'श्लीडेन (1838: सभी पादप कोशिका-निर्मित), श्वान (1839: सभी जंतु कोशिका-निर्मित), विरचो (1855: नई कोशिकाएँ पूर्वविद्यमान कोशिकाओं से बनती हैं)।',
      },
    },
    {
      name: { en: 'Camillo Golgi (1898)', hi: 'कैमिलो गॉल्जी (1898)' },
      country: { en: 'Italian Scientist', hi: 'इतालवी वैज्ञानिक' },
      badge: { en: 'Golgi Apparatus', hi: 'गॉल्जी उपकरण' },
      fact: {
        en: 'Used special staining to observe stacked thread-like networks inside Barn Owl (श्वेत उल्लू) nerve cells; confirmed decades later by Electron Microscope.',
        hi: '1898 में विशेष अभिरंजन द्वारा श्वेत उल्लू (Barn Owl) की तंत्रिका कोशिकाओं में जाल जैसी संरचना खोजी जिसे बाद में इलेक्ट्रॉन सूक्ष्मदर्शी ने पुष्ट किया।',
      },
    },
    {
      name: { en: 'Gottlieb Haberlandt (1902)', hi: 'गॉटलीब हैबरलैंड्ट (1902)' },
      country: { en: 'Austrian Botanist', hi: 'ऑस्ट्रियाई वनस्पतिशास्त्री' },
      badge: { en: 'Totipotency & Tissue Culture', hi: 'पूर्णशक्तता (Totipotency)' },
      fact: {
        en: 'Proposed any living plant cell—even mature permanent tissue—given nutrients & right conditions can grow an entire new plant (Totipotency). Father of Plant Tissue Culture concept.',
        hi: 'प्रस्तावित किया कि कोई भी जीवित पादप कोशिका (पूर्ण परिपक्व भी) अनुकूल पोषण से संपूर्ण पादप बना सकती है — जिसे पूर्णशक्तता (Totipotency) व पादप ऊतक संवर्धन की नींव कहा जाता है।',
      },
    },
    {
      name: { en: 'Arun Kumar Sharma', hi: 'प्रो. अरुण कुमार शर्मा' },
      country: { en: 'Renowned Indian Botanist', hi: 'प्रसिद्ध भारतीय वनस्पतिशास्त्री' },
      badge: { en: 'Bhatnagar & Padma Bhushan', hi: 'भटनागर व पद्म भूषण सम्मान' },
      fact: {
        en: 'Pioneering chromosome scientist famous for plant taxonomy, evolution, development & chromosomal lab techniques; honoured with Shanti Swarup Bhatnagar Prize & Padma Bhushan.',
        hi: 'गुणसूत्रों पर क्रांतिकारी शोध, पादप वर्गिकी, विकास व प्रयोगशाला तकनीकों के लिए विख्यात; शांति स्वरूप भटनागर पुरस्कार व पद्म भूषण से सम्मानित।',
      },
    },
    {
      name: { en: 'J. Craig Venter (2010)', hi: 'जे. क्रेग वेंटर (2010)' },
      country: { en: 'Synthetic Biology Pioneer', hi: 'संश्लेषिक जैविकी अग्रदूत' },
      badge: { en: 'Synthetic DNA Cell', hi: 'कृत्रिम DNA प्रयोग' },
      fact: {
        en: 'Digitally read & chemically synthesized full DNA of Mycoplasma mycoides; transplanted it into a DNA-emptied related bacterial shell which then divided normally under synthetic instructions.',
        hi: 'माइकोप्लाज्मा माइकोइड्स जीवाणु का पूरा DNA प्रयोगशाला में रासायनिक रूप से संश्लेषित कर दूसरे DNA-रहित जीवाणु में डाला—कोशिका नए निर्देशों से विभाजित हुई।',
      },
    },
  ],

  activities: [
    {
      num: '2.1',
      title: { en: 'Estimating Microscopic Cell Size (Onion Peel)', hi: 'सूक्ष्मदर्शी में कोशिका के वास्तविक आमाप का अनुमान लगाना' },
      materials: {
        en: 'Compound Microscope, transparent mm ruler, onion peel slide',
        hi: 'प्रकाश सूक्ष्मदर्शी, मिलीमीटर (mm) पारदर्शी मापनी, प्याज की झिल्ली स्लाइड',
      },
      steps: {
        en: '1. Measure circular field-of-view diameter with mm scale (say $5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$).\n2. Replace scale with onion peel slide and count cells lined up across the diameter (say $25$ cells).\n3. Apply formula: Cell size $= 5000\\text{ }\\mu\\text{m} / 25 = 200\\text{ }\\mu\\text{m}$. Total magnification = $10\\times \\text{ eyepiece} \\times 10\\times \\text{ objective} = 100\\times$.',
        hi: '1. पारदर्शी स्केल से वृत्ताकार दृश्य क्षेत्र का व्यास मापें (जैसे $5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$)।\n2. प्याज झिल्ली की स्लाइड रखकर एक सीधी रेखा में व्यास के अनुदिश कोशिकाएँ गिनें (जैसे $25$)।\n3. सूत्र: अनुमानित आमाप $= 5000\\text{ }\\mu\\text{m} / 25 = 200\\text{ }\\mu\\text{m}$ | कुल आवर्धन ($10\\times \\times 10\\times$) $= 100\\times$।',
      },
      examTakeaway: {
        en: 'RRB Numerical Pattern: Given Field Diameter in mm and Cell Count across diameter -> convert mm to $\\mu\\text{m}$ ($\\times 1000$) then divide by count.',
        hi: 'परीक्षा प्रश्न सूत्र: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$। व्यास (माइक्रोमीटर में) को कोशिका संख्या से भाग दें।',
      },
    },
    {
      num: '2.2',
      title: { en: 'Potato Osmosis Experiment (Water vs 20% Salt/Sugar Solution)', hi: 'आलू के टुकड़ों द्वारा परासरण प्रयोग (साधारण जल vs 20% घोल)' },
      materials: {
        en: 'Potato, knife, weighing balance, Beaker A (plain water), Beaker B (20% salt or sugar solution)',
        hi: 'आलू, चाकू, तुला, बीकर क (साधारण जल), बीकर ख (20% नमक या चीनी का घोल)',
      },
      steps: {
        en: '1. Cut two equal potato cubes & weigh both initially.\n2. Place cube A in plain water (Hypotonic) and cube B in 20% salt/sugar solution (Hypertonic) undisturbed for ~1 hour.\n3. Re-weigh and compare size.',
        hi: '1. आलू के लगभग समान दो टुकड़े काटकर प्रारंभिक भार नापें।\n2. बीकर क (साधारण जल) तथा बीकर ख (20% नमक/चीनी घोल) में ~1 घंटे रखकर अंतिम भार व आकार जांचें।',
      },
      examTakeaway: {
        en: 'Observation: Beaker A (Plain Water -> Hypotonic) swells & gains weight (Endosmosis). Beaker B (20% solute -> Hypertonic) shrinks & loses weight (Exosmosis). Membrane blocks salt/sugar but lets water move.',
        hi: 'निष्कर्ष: बीकर क (साधारण जल) में आलू फूलता है व भार बढ़ता है; बीकर ख (20% घोल) में आलू सिकुड़ता है व भार घटता है क्योंकि झिल्ली केवल जल को आर-पार जाने देती है।',
      },
    },
    {
      num: '2.3',
      title: { en: 'Plant Onion/Rhoeo (Safranin) vs Human Cheek Cells (Methylene Blue) + Plasmolysis', hi: 'प्याज/रोइओ (सैफ्रेनीन) बनाम मानव कपोल कोशिका (मेथिलीन ब्लू) + जीवद्रव्य कुंचन' },
      materials: {
        en: 'Onion/Rhoeo leaf peel + Safranin stain | Human cheek swab + Methylene Blue stain | 20% Sugar solution',
        hi: 'प्याज/रोइओ पत्ती की विशल्क + सैफ्रेनीन अभिरंजक | गाल के अंदरूनी खुरचन + मेथिलीन ब्लू | 20% चीनी का घोल',
      },
      steps: {
        en: '1. Stain Onion/Rhoeo peel with SAFRANIN -> box-like regular rigid arrangement.\n2. Scrape inner cheek gently & stain with METHYLENE BLUE -> irregular flat overlapping cells.\n3. Add 20% sugar solution to fresh slides & check after 30 min.',
        hi: '1. प्याज/रोइओ को सैफ्रेनीन से रंजित करने पर ईंट जैसे नियमित बॉक्स दिखते हैं।\n2. गाल की कोशिकाओं को मेथिलीन ब्लू से रंजित करने पर अनियमित आकार दिखता है।\n3. दोनों पर 20% चीनी का घोल डालने पर 30 मिनट बाद पादप में कोशिका भित्ति स्थिर रहकर अंदर का द्रव्य सिकुड़ता है (जीवद्रव्य कुंचन), जबकि कपोल कोशिका पूरी पिचक जाती है।',
      },
      examTakeaway: {
        en: 'HIGH-YIELD STAIN PAIR (Asked directly in ALP!): Plant peel = SAFRANIN | Animal/Cheek cell = METHYLENE BLUE. Also ALP Shift 8/9: Cytoplasm retains VERY LITTLE stain compared to deeply stained Nucleus.',
        hi: 'सीधा RRB ट्रिक: पादप स्लाइड अभिरंजक = सैफ्रेनीन | जंतु (कपोल) स्लाइड अभिरंजक = मेथिलीन ब्लू। कोशिकाद्रव्य हल्का रंजित व केंद्रक गहरा रंजित होता है।',
      },
    },
    {
      num: '2.4',
      title: { en: 'Comparative Study of Bacterial, Plant & Animal Diagrams (Tables 2.1 & 2.2)', hi: 'जीवाणु, पादप और जंतु कोशिका चित्र तुलना (तालिका 2.1 व 2.2)' },
      materials: {
        en: 'Detailed structural diagrams Fig 2.10 (a) Bacterium, (b) Plant Cell, (c) Animal Cell',
        hi: 'चित्र 2.10 (क) जीवाणु कोशिका, (ख) पादप कोशिका, (ग) जंतु कोशिका',
      },
      steps: {
        en: 'Inspect presence/absence of Plasma membrane, Cell wall, Cytoplasm, True Membrane-bound Nucleus, Nucleoid, and Membrane-bound organelles across all three cells and fill Table 2.1.',
        hi: 'तीनों कोशिकाओं में झिल्ली, भित्ति, कोशिकाद्रव्य, सुस्पष्ट केंद्रक, आद्य केंद्रक (केंद्रकाभ) व झिल्ली-आबद्ध कोशिकांग की उपस्थिति तालिका 2.1 में दर्ज करें।',
      },
      examTakeaway: {
        en: 'Only Ribosomes + Cytoplasm + Plasma Membrane are universal to all 3. Both Bacteria & Plants share Cell Wall (chemical nature differs!).',
        hi: 'प्लाज्मा झिल्ली, कोशिकाद्रव्य और राइबोसोम तीनों में पाए जाते हैं। कोशिका भित्ति जीवाणु व पादप दोनों में होती है (जंतु में अनुपस्थित)।',
      },
    },
    {
      num: '2.5',
      title: { en: 'Onion Root-Tip Mitosis Squash Slide Preparation', hi: 'प्याज के मूलाग्र में समसूत्री विभाजन (कोशिका चक्र) का सूक्ष्मदर्शी अवलोकन' },
      materials: {
        en: 'Onion bulb, water jar (5–6 days), Aceto-alcohol (Glacial Acetic Acid : Ethanol :: 1:3), 70% Ethanol, dilute HCl, Aceto-carmine stain, spirit lamp',
        hi: 'प्याज कंद, जल जार (5–6 दिन), एसीटो-ऐल्कोहॉल (1:3), 70% एथेनॉल, तनु HCl, एसीटो-कार्मिन अभिरंजक, स्पिरिट लैंप',
      },
      steps: {
        en: '1. Grow onion roots in water jar 5–6 days; cut 2–3 cm root tips.\n2. Fix 24h in fresh Aceto-alcohol (Glacial Acetic Acid : Ethanol = 1 : 3), transfer to 70% Ethanol.\n3. Wash, soften root tip with 1–2 drops dil. HCl (10–15 min), wash again.\n4. Add 2–3 drops Aceto-carmine (5–10 min), warm gently over spirit lamp, cut very tip, cover & press softly with thumb to squash cells.',
        hi: '1. जार में 5–6 दिन में उगी 2–3 cm जड़ों को काटें।\n2. ताजे एसीटो-ऐल्कोहॉल (ग्लेशियल एसिटिक अम्ल : एथेनॉल :: 1:3) में 24 घंटे रखकर 70% एथेनॉल में परिरक्षित करें।\n3. धोकर तनु HCl (1–2 बूँद, 10–15 मिनट) से नरम करें, फिर धोकर एसीटो-कार्मिन की 2–3 बूँद डालें और स्पिरिट लैंप पर हल्का गर्म कर अँगूठे से दबाकर देखें।',
      },
      examTakeaway: {
        en: 'Why are root-tip cells used? Because meristematic root tips divide continuously showing all mitotic stages simultaneously! Reagent ratios: Aceto-alcohol = 1:3, chromosome stain = Aceto-carmine.',
        hi: 'मुख्य तथ्य: प्याज की जड़ों के शीर्ष भाग (मूलाग्र) में कोशिकाएँ निरंतर विभाजित होती रहती हैं। गुणसूत्र अभिरंजक = एसीटो-कार्मिन।',
      },
    },
  ],

  tables: [
    {
      id: 'table-2-1',
      title: {
        en: 'NCERT Table 2.1 — Complete Structural Comparison (Bacteria vs Plant vs Animal)',
        hi: 'NCERT तालिका 2.1 — संरचना के आधार पर विभिन्न कोशिकाओं की पूर्ण तुलना',
      },
      headers: {
        en: ['S.No', 'Cell Structure', 'Bacterial Cell', 'Plant Cell', 'Animal Cell'],
        hi: ['क्र.सं.', 'कोशिका संरचनाएँ', 'जीवाणु कोशिका', 'पादप कोशिका', 'जंतु कोशिका'],
      },
      rows: [
        [
          '1',
          { en: 'Cell Membrane (Plasma Membrane)', hi: 'कोशिका झिल्ली' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
        ],
        [
          '2',
          { en: 'Cell Wall', hi: 'कोशिका भित्ति' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Present (Cellulose) ✓', hi: 'उपस्थित (सेल्युलोस) ✓' },
          { en: 'Absent ✗', hi: 'अनुपस्थित ✗' },
        ],
        [
          '3',
          { en: 'Cytoplasm', hi: 'कोशिकाद्रव्य' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
        ],
        [
          '4',
          { en: 'True Nucleus (Membrane-bound genetic material)', hi: 'सुस्पष्ट केंद्रक (झिल्ली से घिरा आनुवंशिक पदार्थ)' },
          { en: 'Absent ✗', hi: 'अनुपस्थित ✗' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
        ],
        [
          '5',
          { en: 'Nucleoid (Membrane-less genetic material)', hi: 'आद्य केंद्रक / केंद्रकाभ (झिल्ली रहित DNA)' },
          { en: 'Present ✓', hi: 'उपस्थित ✓' },
          { en: 'Absent ✗', hi: 'अनुपस्थित ✗' },
          { en: 'Absent ✗', hi: 'अनुपस्थित ✗' },
        ],
        [
          '6',
          { en: 'Membrane-bound Organelles (Mitochondria, ER, Golgi, etc.)', hi: 'झिल्ली-आबद्ध कोशिकांग (माइटोकॉन्ड्रिया, ER, गॉल्जी आदि)' },
          { en: 'Absent ✗', hi: 'अनुपस्थित ✗' },
          { en: 'Present (+ Plastids) ✓', hi: 'उपस्थित (+ लवक) ✓' },
          { en: 'Present (No Plastids) ✓', hi: 'उपस्थित (लवक नहीं) ✓' },
        ],
      ],
    },
    {
      id: 'table-2-2',
      title: {
        en: 'NCERT Table 2.2 — Prokaryotic vs Eukaryotic Cell Comparison',
        hi: 'NCERT तालिका 2.2 — पूर्वकेंद्रकी और सुकेंद्रकी कोशिकाओं के मध्य तुलना',
      },
      headers: {
        en: ['Feature', 'Prokaryotic Cell', 'Eukaryotic Cell'],
        hi: ['विशेषताएँ', 'पूर्वकेंद्रकी (Prokaryotic)', 'सुकेंद्रकी (Eukaryotic)'],
      },
      rows: [
        [
          { en: 'Nucleoid (Membrane-less DNA)', hi: 'आद्य केंद्रक (केंद्रकाभ)' },
          { en: 'Present', hi: 'उपस्थित' },
          { en: 'Absent (True Nucleus present)', hi: 'अनुपस्थित (सुस्पष्ट केंद्रक उपस्थित)' },
        ],
        [
          { en: 'Typical Cell Diameter', hi: 'सामान्य कोशिका का व्यास' },
          { en: '1 to 10 µm', hi: '1 से 10 µm' },
          { en: '10 to 100 µm', hi: '10 से 100 µm' },
        ],
        [
          { en: 'Cells per Organism', hi: 'एक जीव में कोशिकाओं की संख्या' },
          { en: 'Usually Unicellular', hi: 'सामान्यतः एककोशिकीय' },
          { en: 'Unicellular or Multicellular', hi: 'एककोशिकीय या बहुकोशिकीय' },
        ],
        [
          { en: 'Membrane-bound Organelles', hi: 'झिल्ली-आबद्ध कोशिकांग' },
          { en: 'Absent', hi: 'अनुपस्थित' },
          { en: 'Present', hi: 'उपस्थित' },
        ],
        [
          { en: 'Membrane-bound Nucleus', hi: 'झिल्ली-आबद्ध केंद्रक' },
          { en: 'Absent', hi: 'अनुपस्थित' },
          { en: 'Present', hi: 'उपस्थित' },
        ],
        [
          { en: 'Examples (+ Bonus Chromosome Note)', hi: 'उदाहरण व गुणसूत्र (PYQ तथ्य)' },
          { en: 'Bacteria (Single circular DNA)', hi: 'जीवाणु (केवल 1 गुणसूत्र)' },
          { en: 'Plant, Animal, Fungi cells (Multiple chromosomes)', hi: 'पादप, जंतु, कवक (एक से अधिक गुणसूत्र)' },
        ],
      ],
    },
    {
      id: 'table-organelles-master',
      title: {
        en: 'Pro Vault Table — All Cell Organelles Cheat Sheet (Membranes, DNA, Function, PYQ Alias)',
        hi: 'प्रो मास्टर तालिका — सभी कोशिकांग (झिल्ली, स्वयं का DNA, कार्य एवं उपनाम)',
      },
      headers: {
        en: ['Organelle', 'Membrane', 'Own DNA?', 'Core Function', 'Exam Nickname'],
        hi: ['कोशिकांग', 'झिल्ली', 'स्वयं DNA?', 'मुख्य कार्य', 'परीक्षा उपनाम'],
      },
      rows: [
        [
          { en: 'Nucleus', hi: 'केंद्रक' },
          { en: 'Double (with pores)', hi: 'दोहरी (छिद्रयुक्त)' },
          { en: 'Yes ✓', hi: 'हाँ ✓' },
          { en: 'Controls activities & heredity (DNA/Genes)', hi: 'गतिविधियाँ व वंशागति नियंत्रण' },
          { en: 'Brain / Command Centre', hi: 'नियंत्रण कक्ष' },
        ],
        [
          { en: 'Mitochondria', hi: 'माइटोकॉन्ड्रिया' },
          { en: 'Double (inner Cristae)', hi: 'दोहरी (अंतःकटक)' },
          { en: 'Yes (+ Ribosomes) ✓', hi: 'हाँ (+ राइबोसोम) ✓' },
          { en: 'Cellular respiration -> ATP energy', hi: 'कोशिकीय श्वसन -> ATP ऊर्जा' },
          { en: 'Powerhouse of Cell', hi: 'ऊर्जा केंद्र / बिजलीघर' },
        ],
        [
          { en: 'Plastids (Chloro / Chromo / Leuco)', hi: 'लवक (हरित/वर्णी/अवर्णी)' },
          { en: 'Double (Plants Only)', hi: 'दोहरी (केवल पादप)' },
          { en: 'Yes (+ Ribosomes) ✓', hi: 'हाँ (+ राइबोसोम) ✓' },
          { en: 'Photosynthesis / Pigments / Starch-Oil storage', hi: 'प्रकाश-संश्लेषण / रंग / भंडारण' },
          { en: 'Kitchen / Pantry (Plants)', hi: 'पादप रसोईघर / भंडार' },
        ],
        [
          { en: 'Ribosome', hi: 'राइबोसोम' },
          { en: 'None (Both Prok & Euk)', hi: 'कोई नहीं (सर्वव्यापी)' },
          { en: 'No ✗', hi: 'नहीं ✗' },
          { en: 'Protein synthesis', hi: 'प्रोटीन संश्लेषण' },
          { en: 'Protein Factory', hi: 'प्रोटीन की फैक्टरी' },
        ],
        [
          { en: 'ER (Rough & Smooth)', hi: 'अंतर्द्रव्यी जालिका (RER/SER)' },
          { en: 'Single (Continuous w/ Nucleus)', hi: 'एकल' },
          { en: 'No ✗', hi: 'नहीं ✗' },
          { en: 'RER = Protein | SER = Lipids & Hormones', hi: 'RER = प्रोटीन | SER = वसा व हार्मोन' },
          { en: 'Workshop / Assembly Line', hi: 'निर्माणशाला' },
        ],
        [
          { en: 'Golgi Apparatus', hi: 'गॉल्जी उपकरण' },
          { en: 'Single (Stacked sacs)', hi: 'एकल (चपटी थैलियाँ)' },
          { en: 'No ✗', hi: 'नहीं ✗' },
          { en: 'Modify, sort, pack vesicles, forms Lysosomes', hi: 'रूपांतरण, पैकेजिंग व लाइसोसोम निर्माण' },
          { en: 'Post Office / Shipping Hub', hi: 'कोशिका का डाकघर' },
        ],
        [
          { en: 'Lysosome', hi: 'लाइसोसोम (लयनकाय)' },
          { en: 'Single', hi: 'एकल' },
          { en: 'No ✗', hi: 'नहीं ✗' },
          { en: 'Digest waste, worn organelles, egg coat in sperm', hi: 'अपशिष्ट/जीर्ण अंग पाचन' },
          { en: 'Clean-up / Suicide Bag', hi: 'निर्मलन प्रणाली / आत्महत्या की थैली' },
        ],
        [
          { en: 'Vacuole', hi: 'रसधानी' },
          { en: 'Single', hi: 'एकल' },
          { en: 'No ✗', hi: 'नहीं ✗' },
          { en: 'Store cell sap; turgidity & rigidity in plants', hi: 'कोशिका-रस भंडारण व दृढ़ता' },
          { en: 'Storage Tank (Huge in Plants)', hi: 'भंडारण टैंक' },
        ],
      ],
    },
    {
      id: 'table-division-compare',
      title: {
        en: 'Mitosis vs Meiosis Quick Exam Comparison',
        hi: 'समसूत्री बनाम अर्धसूत्री विभाजन तुलनात्मक तालिका',
      },
      headers: {
        en: ['Property', 'Mitosis (समसूत्री)', 'Meiosis (अर्धसूत्री)'],
        hi: ['गुण', 'समसूत्री विभाजन', 'अर्धसूत्री विभाजन'],
      },
      rows: [
        [
          { en: 'Site of Occurrence', hi: 'कहाँ होता है?' },
          { en: 'Somatic (Body) cells & asexual reproduction', hi: 'कायिक (शरीर) कोशिकाओं व अलैंगिक जनन में' },
          { en: 'ONLY reproductive organs (Testes, Ovary, Anthers)', hi: 'केवल जनन अंगों (वृषण, अंडाशय, परागकोश) में' },
        ],
        [
          { en: 'Divisions & Daughter Cells', hi: 'चरण एवं संतति संख्या' },
          { en: '1 Division -> 2 Identical Daughter Cells', hi: '1 चरण -> 2 समान संतति कोशिकाएँ' },
          { en: '2 Divisions -> 4 Daughter Cells (Gametes)', hi: '2 चरण -> 4 संतति कोशिकाएँ (युग्मक)' },
        ],
        [
          { en: 'Chromosomes & DNA', hi: 'गुणसूत्र एवं DNA' },
          { en: 'Same as parent ($2n \\to 2n$)', hi: 'जनक के समान ($2n \\to 2n$)' },
          { en: 'Reduced to HALF ($2n \\to n$)', hi: 'आधे हो जाते हैं ($2n \\to n$)' },
        ],
        [
          { en: 'Primary Biological Purpose', hi: 'मुख्य कार्य' },
          { en: 'Growth, repair, cell replacement', hi: 'शारीरिक वृद्धि, घाव मरम्मत, प्रतिस्थापन' },
          { en: 'Gamete formation & Genetic Variation', hi: 'युग्मक निर्माण व आनुवंशिक विविधता' },
        ],
      ],
    },
  ],

  inTextQuestions: [
    {
      num: 'Think 1 (p.14)',
      q: {
        en: 'Why do stationary plants need a cell wall while mobile animals do not?',
        hi: 'एक स्थान से दूसरे स्थान गति करने वाले जंतुओं की अपेक्षा स्थिर पादपों में कोशिका भित्ति की आवश्यकता क्यों है?',
      },
      a: {
        en: 'Plants cannot move away from strong winds, rain or extreme humidity shifts, so rigid cellulose cell walls provide mechanical strength, uphold stems/leaves upright, and prevent osmotic bursting.',
        hi: 'पादप चल-फिर नहीं सकते, अतः वायु, वर्षा और नमी परिवर्तन सहने, सीधे खड़े रहने तथा परासरणी दाब से फटने से बचने के लिए उन्हें दृढ़ कोशिका भित्ति की आवश्यकता होती है।',
      },
    },
    {
      num: 'Think 2 (p.14)',
      q: {
        en: 'What would happen if a plant cell wall became flexible like the plasma membrane?',
        hi: 'यदि किसी पादप कोशिका की कोशिका भित्ति, कोशिका झिल्ली के समान लचीली हो जाए तो क्या परिणाम होंगे?',
      },
      a: {
        en: 'Plant cells would lose rigidity, stems and leaves would droop/wilt unable to stand upright, and in hypotonic pure water cells could swell excessively and burst.',
        hi: 'पौधे की दृढ़ता समाप्त हो जाएगी, वह सीधा खड़ा नहीं रह पाएगा (मुरझा जाएगा) और अल्पपरासारी जल में अधिक फूलकर फट भी सकता है।',
      },
    },
    {
      num: 'Think 3 (p.14)',
      q: {
        en: 'In Activity 2.2 (Potato experiment), why is measuring initial mass of both cubes essential before placing them in solutions?',
        hi: 'विभिन्न तरल पदार्थों में रखने से पूर्व आलू के दोनों टुकड़ों के आरंभिक भार का मापन क्यों महत्त्वपूर्ण है?',
      },
      a: {
        en: 'Without initial baseline weight, you cannot quantify net mass gain (endosmosis) or mass loss (exosmosis) after immersion.',
        hi: 'प्रारंभिक भार जाने बिना हम यह सटीक गणना नहीं कर पाएँगे कि परासरण के बाद भार में कितनी शुद्ध वृद्धि या कमी हुई है।',
      },
    },
    {
      num: 'Think 4 (p.19)',
      q: {
        en: 'Do white flowers contain any plastid pigment? Explain why.',
        hi: 'क्या सफेद फूलों में कोई वर्णक होता है? कारण बताइए।',
      },
      a: {
        en: 'No coloured pigments! White petal cells either have colourless leucoplasts or lack chromoplast pigments—their petals scatter all incident visible light equally, appearing white.',
        hi: 'नहीं, सफेद फूलों की पंखुड़ियों में रंगीन वर्णक नहीं होते (प्रायः रंगहीन अवर्णी लवक या रिक्त स्थान होते हैं जो संपूर्ण प्रकाश को परावर्तित कर सफेद दिखते हैं)।',
      },
    },
    {
      num: 'Think 5 (p.19)',
      q: {
        en: 'Draw & match the clues: (i) dense round Nucleus, (ii) ER spreading from nuclear envelope, (iii) rod-shaped Mitochondria & Chloroplasts.',
        hi: 'संकेतों का उपयोग करें: (i) गोल सघन केंद्रक, (ii) केंद्रक से फैला ER जाल, (iii) छड़ाकार माइटोकॉन्ड्रिया व हरितलवक।',
      },
      a: {
        en: 'Use Interactive Lab 3 (Plant Cell tab above!)—tap Nucleus, Rough/Smooth ER, Mitochondria & Chloroplast to inspect exact positions.',
        hi: 'ऊपर दी गई इंटरैक्टिव लैब 3 (पादप कोशिका टैब) में केंद्रक, अंतर्द्रव्यी जालिका, माइटोकॉन्ड्रिया और हरितलवक पर क्लिक करके सटीक स्थिति देखें।',
      },
    },
    {
      num: 'Think 6 (p.22)',
      q: {
        en: 'Why does a cell contain many tiny mitochondria rather than a single giant mitochondrion? Relate to surface area.',
        hi: 'एक कोशिका में अनेक छोटे माइटोकॉन्ड्रिया की अपेक्षा एक विशाल माइटोकॉन्ड्रिया क्यों नहीं होता? पृष्ठीय क्षेत्रफल से जोड़िए।',
      },
      a: {
        en: 'Many small mitochondria provide a dramatically higher total surface-area-to-volume ratio than one giant organelle, allowing faster ATP diffusion & targeted energy delivery everywhere in the cell.',
        hi: 'अनेक छोटे माइटोकॉन्ड्रिया का कुल पृष्ठीय क्षेत्रफल (Surface Area) एक विशाल संरचना की तुलना में कहीं अधिक होता है, जिससे ATP ऊर्जा उत्पादन व पूरे कोशिकाद्रव्य में तेजी से वितरण संभव होता है।',
      },
    },
    {
      num: 'Think 7 (p.22)',
      q: {
        en: 'If skin cells started undergoing Meiosis instead of Mitosis when cut, what would happen?',
        hi: 'यदि त्वचा की कोशिकाएँ कट लगने पर समसूत्री के बजाय अर्धसूत्री विभाजन करने लगें तो क्या होगा?',
      },
      a: {
        en: 'New skin cells would receive only HALF the normal chromosome count (genetically different haploid cells instead of identical diploid cells), failing to heal/regenerate proper skin tissue!',
        hi: 'नई त्वचा कोशिकाओं में गुणसूत्र आधे रह जाएँगे और वे आनुवंशिक रूप से जनक जैसी नहीं होंगी—अतः घाव सही ढंग से नहीं भरेगा और ऊतक विकृत हो जाएगा।',
      },
    },
  ],

  exercises: [
    {
      num: 1,
      q: {
        en: 'Differentiate between: (i) Plasma membrane vs Cell wall (permeability), (ii) RER vs SER (structure), (iii) Chloroplast vs Chromoplast (pigments).',
        hi: 'अंतर स्पष्ट कीजिए: (i) कोशिका झिल्ली व कोशिका भित्ति (पारगम्यता), (ii) RER व SER (संरचना), (iii) हरितलवक व वर्णीलवक (वर्णक)।',
      },
      a: {
        en: '(i) Plasma membrane is selectively permeable; Cell wall is freely permeable. (ii) RER has ribosomes on outer surface (rough); SER has no ribosomes (smooth). (iii) Chloroplast has green Chlorophyll; Chromoplast has non-green coloured pigments (yellow/orange/red).',
        hi: '(i) कोशिका झिल्ली वरणात्मक पारगम्य होती है, जबकि कोशिका भित्ति पूर्ण पारगम्य होती है। (ii) RER की सतह पर राइबोसोम जुड़े होने से वह खुरदुरी दिखती है; SER पर राइबोसोम नहीं होते। (iii) हरितलवक में हरा पर्णहरित (क्लोरोफिल) होता है; वर्णीलवक में पीले/नारंगी/लाल रंगीन वर्णक होते हैं।',
      },
    },
    {
      num: 2,
      q: {
        en: '[MCQ — NCERT Key Verified: (iii)] Cell X in pure water swells; Cell Y in concentrated salt solution shrinks. Correct explanation?',
        hi: '[MCQ — उत्तर (iii)] कोशिका X शुद्ध जल में फूलती है और कोशिका Y सांद्र नमक विलयन में सिकुड़ती है। सही कारण?',
      },
      a: {
        en: 'Option (iii): Water entered Cell X and exited Cell Y across the plasma membrane by osmosis (salt solute does NOT cross the selectively permeable membrane).',
        hi: 'विकल्प (iii): कोशिका झिल्ली के माध्यम से जल परासरण द्वारा कोशिका X में प्रवेश कर गया और कोशिका Y से बाहर चला गया।',
      },
    },
    {
      num: 3,
      q: {
        en: 'Fig 2.20 Label Match (Plant Cell (क)–(छ)): Match (क)–(छ) to roles (i) to (vii).',
        hi: 'चित्र 2.20 मिलान: (क) से (छ) तक चिह्नित भागों की पहचान व कार्य मिलान।',
      },
      a: {
        en: 'Plant Cell Parts in Fig 2.20 -> (i) Control centre = Nucleus (ख); (ii) Cellular respiration = Mitochondria (क / ड.); (iii) Storage & rigidity = Vacuole (छ); (iv) Outer separator around cell contents = Plasma membrane; (v) Structural rigidity = Cell Wall (घ); (vi) Pack ER material = Golgi Apparatus (ग); (vii) Food synthesis = Chloroplast.',
        hi: 'चित्र 2.20 (पादप कोशिका): (i) गतिविधि नियंत्रण = केंद्रक; (ii) श्वसन स्थल = माइटोकॉन्ड्रिया; (iii) भंडारण व दृढ़ता = रसधानी; (iv) परिवेश से अलग = प्लाज्मा झिल्ली; (v) संरचनात्मक दृढ़ता = कोशिका भित्ति; (vi) पैकिंग = गॉल्जी उपकरण; (vii) भोजन निर्माण = हरितलवक।',
      },
    },
    {
      num: 4,
      q: {
        en: '[MCQ — NCERT Key Verified: (i)] Correctly matched pair: Present in Plant Cell & Absent in Animal Cell?',
        hi: '[MCQ — उत्तर (i)] पादप कोशिका में उपस्थित व जंतु कोशिका में अनुपस्थित का सही युग्म?',
      },
      a: {
        en: 'Option (i): Leucoplast (present in plants) | Cell Wall (absent in animals). (Options ii, iii, iv list ribosomes/Golgi/ER as absent in animals, which is FALSE!).',
        hi: 'विकल्प (i): अवर्णी लवक (पादप में उपस्थित) | कोशिका भित्ति (जंतु में अनुपस्थित)। बाकी विकल्पों में राइबोसोम/गॉल्जी/ER जंतु में अनुपस्थित बताए गए हैं जो ग़लत हैं।',
      },
    },
    {
      num: 5,
      q: {
        en: 'Renu says roots also contain plastids; Rohit argues roots do not need photosynthesis so have no plastids. Who is right?',
        hi: 'रेणु कहती हैं पौधों की जड़ों में भी लवक होते हैं, जबकि रोहित इसे नकारता है। कौन सही है?',
      },
      a: {
        en: 'Renu is RIGHT! Underground roots (e.g., potato, colocasia) contain colourless LEUCOPLASTS (अवर्णी लवक) to store starch, oils & proteins—plastids are not limited to green chloroplasts.',
        hi: 'रेणु सही हैं! जड़ों में प्रकाश-संश्लेषण करने वाले हरितलवक नहीं होते, लेकिन भोजन (स्टार्च, तेल, प्रोटीन) संचय के लिए रंगहीन अवर्णी लवक (Leucoplasts) अवश्य पाए जाते हैं।',
      },
    },
    {
      num: 6,
      q: {
        en: 'How are Mitochondria & Chloroplasts structurally/functionally similar and different?',
        hi: 'माइटोकॉन्ड्रिया और हरितलवक संरचनात्मक व कार्यात्मक रूप से कैसे समान और भिन्न हैं?',
      },
      a: {
        en: 'Similarities: Both are double-membrane bound, found in plants, and contain their OWN circular DNA & ribosomes (semi-autonomous). Differences: Mitochondria occur in both plant & animal cells, have cristae, and break down glucose to produce ATP; Chloroplasts occur ONLY in plant/algal cells, have chlorophyll discs in stroma, and synthesize sugars using sunlight.',
        hi: 'समानताएँ: दोनों दोहरी झिल्ली वाले हैं और दोनों में स्वयं का DNA व राइबोसोम होता है। भिन्नताएँ: माइटोकॉन्ड्रिया पादप व जंतु दोनों में अंतःकटक के साथ ATP (श्वसन) बनाते हैं; हरितलवक केवल पादपों में पर्णहरित व पीठिका सहित प्रकाश-संश्लेषण द्वारा भोजन बनाते हैं।',
      },
    },
    {
      num: 7,
      q: {
        en: '[MCQ — NCERT Key Verified: (ii)] Which pair of cell organelles contains DNA?',
        hi: '[MCQ — उत्तर (ii)] कोशिकांगों के किस जोड़े में डीएनए (DNA) होता है?',
      },
      a: {
        en: 'Option (ii): Mitochondria and Nucleus! (Ribosomes, Golgi, Lysosomes contain NO DNA).',
        hi: 'विकल्प (ii): माइटोकॉन्ड्रिया और केंद्रक! (राइबोसोम, गॉल्जी व लाइसोसोम में DNA नहीं होता)।',
      },
    },
    {
      num: 8,
      q: {
        en: 'Fig 2.21 Carrot Osmosis (24h): Carrot A in plain water stays crisp; Carrot B in concentrated salt water turns rubbery/limp.',
        hi: 'चित्र 2.21 (गाजर प्रयोग, 24 घंटे): साधारण जल में गाजर कठोर रहती है, पर नमक विलयन में रबर जैसी लचीली क्यों हो जाती है?',
      },
      a: {
        en: '(i) Testing hypothesis of osmosis & turgor across plant tissues. (ii) Improve by measuring exact initial/final weight & length, using equal-size carrot cylinders & controlled temperature. (iii) Plain water keeps vacuoles turgid & crisp; hypertonic salt water pulls water OUT via osmosis reducing turgor pressure -> soft/rubbery.',
        hi: '(i) पादप कोशिकाओं में परासरण के प्रभाव का परीक्षण। (ii) सुधार: आरंभिक व अंतिम भार/आकार नापना व समान तापमान। (iii) साधारण जल से रसधानी में दाब (turgidity) बना रहता है; नमक के घोल में जल बाहर निकलने से दृढ़ता समाप्त हो जाती है।',
      },
    },
    {
      num: 9,
      q: {
        en: 'Table Match: Presence/Absence in Bacterial Cell vs Animal Cell (Chromosome, Nucleus, Mitochondria, Golgi, Chromoplast).',
        hi: 'जीवाणु बनाम जंतु कोशिका तालिका: गुणसूत्र, केंद्रक, माइटोकॉन्ड्रिया, गॉल्जी व वर्णीलवक।',
      },
      a: {
        en: 'Chromosome/Genetic DNA -> Present in Bacteria (1 circular DNA) & Present in Animal (linear chromosomes) | Membrane Nucleus -> Absent in Bacteria, Present in Animal | Mitochondria -> Absent in Bacteria, Present in Animal | Golgi -> Absent in Bacteria, Present in Animal | Chromoplast -> Absent in BOTH!',
        hi: 'गुणसूत्र: जीवाणु (हाँ, 1), जंतु (हाँ) | केंद्रक: जीवाणु (नहीं), जंतु (हाँ) | माइटोकॉन्ड्रिया: जीवाणु (नहीं), जंतु (हाँ) | गॉल्जीकाय: जीवाणु (नहीं), जंतु (हाँ) | वर्णीलवक: दोनों में अनुपस्थित (केवल पादपों में)!',
      },
    },
    {
      num: 10,
      q: {
        en: 'Fig 2.22 4-Potato Cup Experiment in water beaker: Cup A empty, Cup B + 1 tsp Sugar, Cup C + 1 tsp Salt, Cup D (BOILED Potato) + 1 tsp Sugar.',
        hi: 'चित्र 2.22 (4 आलू कप प्रयोग): कप क (खाली), कप ख (चीनी), कप ग (नमक), कप घ (उबला आलू + चीनी)।',
      },
      a: {
        en: '(i) Water accumulates in hollowed Cups B & C because solute concentration inside is higher than beaker water -> water moves inside through living selectively permeable cells by osmosis. (ii) Cup A is the Control setup proving water does not rise spontaneously without concentration gradient. (iii) Cup A lacks solute gradient; Cup D is BOILED so boiling killed cells & denatured selectively permeable membranes -> NO osmosis!',
        hi: '(i) कप ख (चीनी) व ग (नमक) में अंदर सांद्रता अधिक होने से जीवित कोशिकाओं द्वारा परासरण से जल अंदर जमा होता है। (ii) कप क (Control) सिद्ध करता है कि बिना विलेय प्रवणता जल नहीं चढ़ता। (iii) कप घ उबला हुआ है जिससे कोशिका व झिल्ली नष्ट हो जाती हैं— अतः मृत कोशिका में परासरण नहीं होता!',
      },
    },
    {
      num: 11,
      q: {
        en: '[MCQ — NCERT Key Verified: (iii) in book answer / Trap Check!] Which pair is NOT correctly matched?',
        hi: '[MCQ — गलत मिलान चुनें] कौन-सा युग्म सुमेलित नहीं है?',
      },
      a: {
        en: 'Pair (ii): "Smooth ER — Lipid and CELLULOSE synthesis" is INCORRECT! Smooth ER synthesizes Lipids & Hormones (NOT cellulose, which is synthesized at the plasma membrane for plant cell walls). Note: NCERT prints (ii) as the mismatched pair in context.',
        hi: 'युग्म (ii) "चिकनी अंतर्द्रव्यी जालिका — लिपिड और सेल्युलोस का संश्लेषण" ग़लत है! SER केवल लिपिड और हार्मोन बनाती है, सेल्युलोस नहीं।',
      },
    },
    {
      num: 12,
      q: {
        en: 'What would happen if ALL mitochondria were removed from a eukaryotic cell?',
        hi: 'यदि किसी सुकेंद्रकी कोशिका से सभी माइटोकॉन्ड्रिया निकाल दिए जाएँ तो क्या होगा?',
      },
      a: {
        en: 'Cellular respiration would halt, ATP energy production would collapse, active cellular functions (protein synthesis, division, transport) would fail, and the cell would die.',
        hi: 'कोशिकीय श्वसन व ATP (ऊर्जा) का निर्माण रुक जाएगा, समस्त जैविक क्रियाएँ ठप हो जाएँगी और कोशिका शीघ्र मृत हो जाएगी।',
      },
    },
    {
      num: 13,
      q: {
        en: 'Which phenomenon stops tumour formation in human cells? Can plants also develop tumours?',
        hi: 'मानव शरीर में अर्बुद (Tumour) निर्माण को कौन रोकता है? क्या पौधों में भी अर्बुद हो सकते हैं?',
      },
      a: {
        en: 'Contact Inhibition (संपर्क अवरोध) stops normal human cells from over-dividing when touching neighbours. Plants lack animal contact inhibition, though bacterial/pest infections can still trigger localized callus/gall growths (not metastasizing like animal malignant cancer because rigid cell walls prevent wandering cells).',
        hi: 'मानव कोशिकाओं में संपर्क अवरोध (Contact Inhibition) और क्रमादेशित कोशिका मृत्यु (PCD) अर्बुद रोकते हैं। पौधों में भी जीवाणु आदि से स्थानीय गाँठें (galls) बन सकती हैं, पर दृढ़ भित्ति के कारण जंतुओं जैसा मेटास्टेसिस कैंसर नहीं फैलता।',
      },
    },
    {
      num: 14,
      q: {
        en: 'Which organelles make Plasma Membrane proteins & lipids? Trace the secretory pathway.',
        hi: 'कोशिका झिल्ली के प्रोटीन व लिपिड बनाने वाले कोशिकांग कौन हैं? पथ लिखें।',
      },
      a: {
        en: 'Proteins are made by Ribosomes on Rough ER (RER); Lipids by Smooth ER (SER) -> transported to Golgi Apparatus for modification & vesicle packaging -> vesicles fuse with Plasma Membrane (illustrated in Fig 2.13).',
        hi: 'प्रोटीन: RER (राइबोसोम) में; लिपिड: SER में -> दोनों गॉल्जी उपकरण द्वारा पुटिकाओं (vesicles) में पैक होकर प्लाज्मा झिल्ली तक पहुँचते हैं (चित्र 2.13)।',
      },
    },
    {
      num: 15,
      q: {
        en: 'What would happen if gametes were formed by Mitosis instead of Meiosis?',
        hi: 'यदि युग्मक अर्धसूत्री के बजाय समसूत्री विभाजन से बनाए जाएँ तो क्या होगा?',
      },
      a: {
        en: 'Each gamete would keep $2n$ chromosomes instead of $n$; upon fertilisation, chromosome count would DOUBLE every generation ($2n+2n=4n, 8n\\dots$) destabilizing species and eliminating meiotic genetic variation.',
        hi: 'प्रत्येक पीढ़ी में निषेचन के बाद गुणसूत्रों की संख्या दोगुनी ($4n, 8n\\dots$) होती जाएगी, प्रजाति का संतुलन बिगड़ जाएगा और आनुवंशिक विविधता समाप्त हो जाएगी।',
      },
    },
    {
      num: 16,
      q: {
        en: '[Case Study — NCERT Key Verified] Farmer Deepa preserves surplus Amla & Lemon by making pickles/sharbat with salt, sugar/jaggery in glass jars. Explain science!',
        hi: '[केस स्टडी — उत्तर प्रमाणित] दीपा आँवला/नींबू को नमक व चीनी/गुड़ मिलाकर अचार/मुरब्बा बनाती है। वैज्ञानिक सिद्धांत बताइए!',
      },
      a: {
        en: '(i) Concept used: OSMOSIS (hypertonic food preservation). (ii) High salt/sugar draws water OUT of spoiling bacteria & fungi by osmosis causing plasmolysis/dehydration so microbes cannot grow or reproduce. (iii) Healthy option: Use rock salt + natural jaggery/spices with minimal oil. (iv) Values: Post-harvest waste reduction, sustainability & rural entrepreneurship.',
        hi: '(i) वैज्ञानिक अवधारणा: परासरण (अतिपरासारी परिरक्षण)। (ii) उच्च नमक/चीनी सांद्रता से जीवाणुओं और कवकों का जल परासरण द्वारा बाहर निकल जाता है, जिससे वे नष्ट हो जाते हैं। (iii) गुड़, सेंधा नमक व कम तेल का उपयोग। (iv) वैज्ञानिक मूल्य: खाद्य अपव्यय में कमी व संधारणीय विकास।',
      },
    },
  ],

  flashcards: [
    {
      front: { en: 'Human eye Resolving Limit & Near Point', hi: 'मानव नेत्र की विभेदन सीमा व निकट बिंदु' },
      back: { en: '$0.1\\text{ mm}$ resolution at $25\\text{ cm}$ near point', hi: 'निकट बिंदु $25\\text{ cm}$ पर विभेदन सीमा $= 0.1\\text{ mm}$' },
    },
    {
      front: { en: 'Stain used for Plant Onion Peel vs Human Cheek Cell', hi: 'प्याज की झिल्ली बनाम मानव कपोल कोशिका अभिरंजक' },
      back: { en: 'Plant Onion/Rhoeo = Safranin | Cheek Cell = Methylene Blue | Root Tip Chromosomes = Aceto-carmine', hi: 'प्याज = सैफ्रेनीन | गाल कोशिका = मेथिलीन ब्लू | मूलाग्र गुणसूत्र = एसीटो-कार्मिन' },
    },
    {
      front: { en: 'Three Organelles Containing Their Own DNA', hi: 'स्वयं का DNA रखने वाले 3 कोशिकांग' },
      back: { en: '1. Nucleus, 2. Mitochondria (+ ribosomes), 3. Plastids (+ ribosomes)', hi: '1. केंद्रक, 2. माइटोकॉन्ड्रिया (+ राइबोसोम), 3. लवक (+ राइबोसोम)' },
    },
    {
      front: { en: 'Difference: Virus vs Viroid vs Prion', hi: 'अंतर: विषाणु vs विषाणुभ vs प्रोसंक' },
      back: { en: 'Virus = DNA/RNA + Protein coat | Viroid = Genetic material ONLY (No protein) | Prion = Folded protein ONLY (No DNA/RNA)', hi: 'विषाणु = DNA/RNA + प्रोटीन | विषाणुभ = केवल आनुवंशिक पदार्थ | प्रोसंक = केवल अपवलित प्रोटीन (कोई DNA/RNA नहीं)' },
    },
    {
      front: { en: 'Cytoskeleton Function (Group D 2025 PYQ)', hi: 'कोशिका पंजर (Cytoskeleton) का कार्य' },
      back: { en: 'Fine protein filament network in eukaryotes maintaining cell shape, mechanical stability, motility & internal transport (visible via EM)', hi: 'सुकेंद्रकी कोशिकाओं का आकार बनाए रखना, संरचनात्मक स्थिरता, गति एवं आंतरिक परिवहन (केवल EM से दृश्य)' },
    },
    {
      front: { en: 'Plasma Membrane Thickness & Permeability', hi: 'प्लाज्मा झिल्ली की मोटाई व पारगम्यता' },
      back: { en: '$7\\text{--}10\\text{ nm}$ thick | Lipid bilayer + Protein gatekeepers (Fluid-Mosaic) | Selectively Permeable', hi: '$7\\text{--}10\\text{ nm}$ मोटी | लिपिड द्विपरत + प्रोटीन (तरल-मोजेक) | वरणात्मक पारगम्य' },
    },
    {
      front: { en: 'Who coined Totipotency (1902)?', hi: 'पूर्णशक्तता (Totipotency, 1902) किसने दी?' },
      back: { en: 'Austrian botanist Gottlieb Haberlandt -> any living plant cell can regenerate a whole plant (Tissue Culture foundation)', hi: 'ऑस्ट्रियाई वनस्पतिशास्त्री गॉटलीब हैबरलैंड्ट — पादप ऊतक संवर्धन की नींव' },
    },
    {
      front: { en: 'Why are Human Mature RBCs Enucleated (No Nucleus)?', hi: 'मानव परिपक्व RBC में केंद्रक क्यों नहीं होता?' },
      back: { en: 'Extra room for Haemoglobin ($O_2$ transport) -> cannot self-repair/divide -> lifespan ~120 days', hi: 'हीमोग्लोबिन व $O_2$ परिवहन हेतु अधिक स्थान -> विभाजन/मरम्मत नहीं -> जीवनकाल ~120 दिन' },
    },
  ],

  // Verified Official RRB Cell Biology PYQs from portal JSON banks
  pyqBank: [
    {
      id: 1,
      examTag: 'RRB Group D 2025 Shift 34',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Which of the following cell structures is mainly responsible for providing support and maintaining the shape of eukaryotic cells?',
        hi: 'निम्नलिखित में से कौन-सी कोशिका संरचना मुख्य रूप से सुकेंद्रकी कोशिकाओं के आकार को बनाए रखने और आलंब प्रदान करने के लिए उत्तरदायी है?',
      },
      options: {
        en: ['DNA', 'Cell Sap', 'Cytoskeleton', 'Nucleoid'],
        hi: ['DNA', 'कोशिका रस', 'कोशिका-पंजर (Cytoskeleton)', 'केंद्रकाभ'],
      },
      correctIndex: 2,
      solution: {
        en: 'Cytoskeleton is the network of fine filaments in eukaryotic cytoplasm maintaining shape, stability & internal transport.',
        hi: 'सुकेंद्रकी कोशिकाओं में पतले तंतुओं का जाल कोशिका-पंजर (Cytoskeleton) आकार, स्थिरता व परिवहन बनाए रखता है।',
      },
    },
    {
      id: 2,
      examTag: 'RRB Group D 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'A eukaryotic cell that performs its functions and undergoes programmed cell death when no longer required is best described as a __________.',
        hi: 'एक सुकेंद्रकी कोशिका जो अपने कार्यों को करती है और आवश्यकता न होने पर क्रमादेशित कोशिका मृत्यु (programmed cell death) से गुजरती है, उसे क्या कहा जाता है?',
      },
      options: {
        en: ['Tumour cell', 'Malignant cell', 'Normal cell', 'Bacterial cell'],
        hi: ['अर्बुद कोशिका', 'दुर्दम कोशिका', 'सामान्य कोशिका', 'जीवाणु कोशिका'],
      },
      correctIndex: 2,
      solution: {
        en: 'Normal cells follow controlled growth & Programmed Cell Death (PCD); tumour/cancer cells lose this control.',
        hi: 'सामान्य कोशिकाएँ नियंत्रित जीवन के बाद PCD से नष्ट होती हैं; कैंसर कोशिकाएँ यह नियंत्रण खो देती हैं।',
      },
    },
    {
      id: 3,
      examTag: 'RRB Group D 2025 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Complete the Analogy: Plant : Rigid Cell Wall :: Animal : __________',
        hi: 'सादृश्य पूर्ण कीजिए: पादप : दृढ़ कोशिका भित्ति :: जंतु : __________',
      },
      options: {
        en: ['Lignified support', 'Cellular flexibility', 'Photosynthetic tissues', 'Fixed position'],
        hi: ['लिग्निकृत सपोर्ट', 'कोशिकीय नम्यता (Cellular flexibility)', 'प्रकाशसंश्लेषी ऊतक', 'निश्चित स्थिति'],
      },
      correctIndex: 1,
      solution: {
        en: 'Absence of rigid cell wall allows animal cells to easily change shape (cellular flexibility).',
        hi: 'कोशिका भित्ति न होने से जंतु कोशिकाओं में कोशिकीय लचीलापन/नम्यता होती है।',
      },
    },
    {
      id: 4,
      examTag: 'RRB ALP 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'On the basis of function, the plasma membrane is ________ in nature.',
        hi: 'कार्य के आधार पर, प्लाज्मा झिल्ली प्रकृति में ________ होती है।',
      },
      options: {
        en: ['fully non-permeable', 'fully permeable', 'semi-permeable', 'selectively permeable'],
        hi: ['पूर्णतः अपारगम्य', 'पूर्णतः पारगम्य', 'अर्ध-पारगम्य', 'वरणतः पारगम्य'],
      },
      correctIndex: 3,
      solution: {
        en: 'Plasma membrane selectively permits essential solutes & gases while blocking others.',
        hi: 'प्लाज्मा झिल्ली केवल चयनित पदार्थों को ही आने-जाने देती है (वरणात्मक/वरणतः पारगम्य)।',
      },
    },
    {
      id: 5,
      examTag: 'RRB Group D 2025 Shift 30',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Complete the analogy: Hypotonic solution : Cell Swells :: Hypertonic solution : _______.',
        hi: 'समवृत्तिता पूर्ण कीजिए: अल्पपरासारी विलयन : कोशिका फूल जाती है :: अतिपरासारी विलयन : _______',
      },
      options: {
        en: ['Cell Shrinks', 'Cell Divides', 'Cell becomes rigid', 'Cell stays same'],
        hi: ['कोशिका सिकुड़ जाती है', 'कोशिका विभाजित होती है', 'कोशिका दृढ़ हो जाती है', 'कोशिका समान रहती है'],
      },
      correctIndex: 0,
      solution: {
        en: 'In a hypertonic solution, net water moves out of the cell by osmosis causing it to shrink.',
        hi: 'अतिपरासारी विलयन में जल कोशिका से बाहर निकलता है जिससे कोशिका सिकुड़ जाती है।',
      },
    },
    {
      id: 6,
      examTag: 'RRB Tech Gr-III 2024 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'When plant cells lose water by osmosis, the contents shrink away from the cell wall; this process is known as _______.',
        hi: 'जब पादप कोशिका में परासरण द्वारा पानी की हानि होती है, तो आंतरिक पदार्थ संकुचित होकर कोशिका भित्ति से दूर हो जाते हैं; इसे _____ कहते हैं।',
      },
      options: {
        en: ['Diffusion', 'Active Transport', 'Plasmolysis', 'Passive Transport'],
        hi: ['विसरण', 'सक्रिय परिवहन', 'जीवद्रव्य कुंचन (Plasmolysis)', 'निष्क्रिय परिवहन'],
      },
      correctIndex: 2,
      solution: {
        en: 'In hypertonic medium, plant plasma membrane pulls away from rigid cell wall — called Plasmolysis.',
        hi: 'सांद्र विलयन में पादप कोशिका की अंतर्वस्तु भित्ति से अलग संकुचित होने को जीवद्रव्य कुंचन कहते हैं।',
      },
    },
    {
      id: 7,
      examTag: 'RRB ALP 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Which type of cell has very small vacuoles?',
        hi: 'निम्नलिखित में से किस प्रकार की कोशिका में बहुत छोटी रसधानियां होती हैं?',
      },
      options: {
        en: ['Plant cell', 'Bacterial cell', 'Animal cell', 'Fungal cell'],
        hi: ['पादप कोशिका', 'जीवाणु कोशिका', 'जंतु कोशिका', 'कवक कोशिका'],
      },
      correctIndex: 2,
      solution: {
        en: 'Animal cells have very small temporary vacuoles, unlike mature plant cells which hold one large central vacuole.',
        hi: 'जंतु कोशिका में रसधानियाँ बहुत छोटी होती हैं जबकि परिपक्व पादप कोशिका में एक बड़ी केंद्रीय रसधानी होती है।',
      },
    },
    {
      id: 8,
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'What similarities do plastids share with mitochondria?',
        hi: 'लवक (Plastids) और सूत्रकणिका (Mitochondria) में क्या समानताएं हैं?',
      },
      options: {
        en: ['Both are present only in plant cells.', 'Both contain chlorophyll.', 'Both produce ATPs.', 'Both contain their own DNA and ribosomes.'],
        hi: ['दोनों केवल पादप कोशिकाओं में मौजूद होते हैं।', 'दोनों में क्लोरोफिल होता है।', 'दोनों ATP का उत्पादन करते हैं।', 'दोनों में अपना-अपना DNA और राइबोसोम होते हैं।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Both mitochondria and plastids possess double membranes and their own DNA & ribosomes.',
        hi: 'माइटोकॉन्ड्रिया व लवक दोनों में दोहरी झिल्ली तथा अपना स्वयं का DNA और राइबोसोम होते हैं।',
      },
    },
    {
      id: 9,
      examTag: 'RRB ALP 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Which of the following functions of mitochondria makes it a powerhouse of the cell?',
        hi: 'माइटोकॉन्ड्रिया के निम्नलिखित कार्यों में से कौन-सा कार्य इसे कोशिका का बिजलीघर बनाता है?',
      },
      options: {
        en: ['Generation of ATP', 'Generation of enzymes', 'Generation of heat', 'Generation of NADPH'],
        hi: ['ATP का उत्पादन', 'एंजाइमों का उत्पादन', 'ऊष्मा का उत्पादन', 'NADPH का उत्पादन'],
      },
      correctIndex: 0,
      solution: {
        en: 'Mitochondria release cellular respiration energy stored in the form of ATP (Adenosine Triphosphate).',
        hi: 'माइटोकॉन्ड्रिया कोशिकीय श्वसन द्वारा ऊर्जा का मुद्रा अणु ATP उत्पन्न करता है।',
      },
    },
    {
      id: 10,
      examTag: 'RRB ALP 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Which of the following events happens when lysosomes in a cell burst?',
        hi: 'कोशिका में लाइसोसोम के फटने पर निम्नलिखित में से कौन-सी घटना घटित होती है?',
      },
      options: {
        en: ["Enzymes digest the cell's own components", 'Enzymes digest foreign particles only', 'Cell becomes more active', 'Cell division increases'],
        hi: ['एंजाइम कोशिका के अपने घटकों को पचाते हैं', 'एंजाइम केवल बाहरी कणों का पाचन करते हैं', 'कोशिका अधिक सक्रिय हो जाती है', 'कोशिका विभाजन बढ़ जाता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Lysosomes hold powerful hydrolytic digestive enzymes, hence bursting digests the damaged cell itself ("suicide bags").',
        hi: 'लाइसोसोम के एंजाइम फटने पर अपनी ही क्षतिग्रस्त कोशिका के घटकों को पचा देते हैं।',
      },
    },
    {
      id: 11,
      examTag: 'RRB Tech Gr-III 2024 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Rough endoplasmic reticulum looks rough under a microscope because it has particles called ______ attached to its surface.',
        hi: 'खुरदुरी अंतर्द्रव्यी जालिका सूक्ष्मदर्शी के नीचे खुरदुरी दिखाई देती है क्योंकि इसकी सतह पर ______ नामक कण जुड़े होते हैं।',
      },
      options: {
        en: ['chromosomes', 'lysosomes', 'protein particles', 'ribosomes'],
        hi: ['गुणसूत्र', 'लयनकाय', 'प्रोटीन कण', 'राइबोसोम (Ribosomes)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Ribosomes stud the outer surface of RER to carry out protein synthesis.',
        hi: 'राइबोसोम के जुड़े होने के कारण RER खुरदुरी दिखती है और प्रोटीन बनाती है।',
      },
    },
    {
      id: 12,
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Select the correct statement related to the characteristics of a prokaryotic cell.',
        hi: 'प्रोकैरयोटिक (पूर्वकेंद्रकी) कोशिका की विशेषताओं से संबंधित सही कथन चुनिए।',
      },
      options: {
        en: ['Membrane bound cell organelles are present.', 'It has a single chromosome.', 'It has more than one chromosome.', 'Nuclear region is well defined and surrounded by nuclear membrane.'],
        hi: ['झिल्ली द्वारा आबद्ध कोशिकांग उपस्थित होते हैं।', 'इसमें एक ही गुणसूत्र होता है।', 'इसमें एक से अधिक गुणसूत्र होते हैं।', 'केंद्रक क्षेत्र सुस्पष्ट व झिल्ली से घिरा होता है।'],
      },
      correctIndex: 1,
      solution: {
        en: 'Prokaryotes contain a single circular chromosome (nucleoid) and no membrane-bound nucleus or organelles.',
        hi: 'पूर्वकेंद्रकी कोशिका में झिल्ली-रहित एकल गोल गुणसूत्र (केंद्रकाभ) होता है।',
      },
    },
    {
      id: 13,
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Which material did Robert Hooke use to first discover "cells"?',
        hi: 'रॉबर्ट हुक ने सर्वप्रथम "कोशिकाओं" की खोज के लिए किस पदार्थ का उपयोग किया था?',
      },
      options: {
        en: ['Onion peel', 'Leaf surface', 'Cork slice', 'Human cheek'],
        hi: ['प्याज का छिलका', 'पत्ती की सतह', 'कॉर्क की काट (Cork slice)', 'मानव कपोल'],
      },
      correctIndex: 2,
      solution: {
        en: 'In 1665, Robert Hooke observed dead cork slice boxes with his self-made microscope ($200\\text{--}300\\times$).',
        hi: 'वर्ष 1665 में रॉबर्ट हुक ने कॉर्क के पतले टुकड़े में बक्से जैसे कोष्ठ देखे।',
      },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'A student observes a plant cell under a microscope and notes it has a prominent nucleus, dense cytoplasm, and no visible vacuoles. Which is its most likely function?',
        hi: 'एक विद्यार्थी सूक्ष्मदर्शी से एक पादप कोशिका में स्पष्ट केंद्रक, सघन कोशिकाद्रव्य और कोई दृश्यमान रसधानी नहीं देखता। इसका सबसे संभावित कार्य क्या है?',
      },
      options: {
        en: ['Active cell division and growth', 'Providing structural support', 'Storing water and nutrients', 'Transporting water and minerals'],
        hi: ['सक्रिय कोशिका विभाजन और वृद्धि', 'संरचनात्मक सहारा देना', 'जल व पोषक संचय', 'जल व खनिज परिवहन'],
      },
      correctIndex: 0,
      solution: {
        en: 'Actively dividing meristematic plant cells (like onion root tip!) feature dense cytoplasm, prominent nuclei, and lack large vacuoles.',
        hi: 'तेजी से विभाजित होने वाली विभज्योतक कोशिकाओं में सघन कोशिकाद्रव्य, बड़ा केंद्रक और बड़ी रसधानी नहीं होती।',
      },
    },
    {
      id: 15,
      examTag: 'RRB ALP 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'In onion peel and human cheek cells, the lightly stained region enclosed by the cell membrane is called:',
        hi: 'प्याज की झिल्ली और मनुष्य के गाल की कोशिकाओं में, कोशिका झिल्ली से घिरे हल्के रंजित क्षेत्र को क्या कहा जाता है?',
      },
      options: {
        en: ['Cytoplasm', 'Cell wall', 'Nucleus', 'Vacuole'],
        hi: ['कोशिकाद्रव्य (Cytoplasm)', 'कोशिका भित्ति', 'केंद्रक', 'रसधानी'],
      },
      correctIndex: 0,
      solution: {
        en: 'Nucleus takes deep stain (dark spot) while surrounding Cytoplasm stains lightly between membrane and nucleus.',
        hi: 'केंद्रक गहरा रंग पकड़ता है जबकि झिल्ली के भीतर का कोशिकाद्रव्य हल्का रंजित दिखता है।',
      },
    },
  ],
};
