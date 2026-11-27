/**
 * Class 10 NCERT Science (2026–27 Edition — jhsc106.pdf, Pages 111–124) + Railway CBT Deep-Dive
 * Chapter 6: Control and Coordination (नियंत्रण एवं समन्वय) — Gold Standard v3 (25+ PYQ Hits!)
 * Complete Coverage: 6.1–6.1.4 Gustatory/Olfactory Receptors (`Act 6.1`), Neuron (`Dendrite → Cell body → Axon → Chemical Synapse → Neuromuscular Junction`), Reflex Arc (`Spinal Cord`), CNS (`Brain/Spinal`) & PNS (`Cranial/Spinal`), Forebrain/Midbrain/Hindbrain (`Cerebellum posture/balance, Medulla BP/salivation/vomiting`), Fluid Shock Shield & Muscle Contraction Proteins ->
 * 6.2 Mimosa Pudica (`turgor water change`) & 4 Growth Tropisms (`Phototropism Act 6.2 Auxin shade migration, Geotropism, Hydrotropism, Chemotropism Pollen tube`), Tendril Coiling, 4 Plant Hormones (`Auxin, Gibberellin, Cytokinin vs Abscisic Acid`) ->
 * 6.3 Endocrine Glands (`Fig 6.7 & Table 6.1`: Adrenaline fight/flight, Thyroid+Iodine Thyroxine/Goitre, Hypothalamus GHRF -> Pituitary GH/Dwarfism, Pancreas Insulin/Diabetes, Testes/Ovaries) & Feedback Mechanism (`p.122`).
 * All 4 Activities (`6.1–6.4`), 14 In-Text Qs, 12 Solved Exercises verified vs jhsc1an (`1.d, 2.b, 3.d`), 24 Pure RRB PYQs.
 */

export const C10_CH6_CONTROL_DATA = {
  id: 'c10-bio-ch6',
  classId: 'class10',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 6,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 6: Control and Coordination (CBT Edition)',
  blueprintSvgKey: 'c10-ch6-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Neuron Sequence (`Dendrite→Cyton→Axon→Synapse`), Reflex Arc & Receptors (`Act 6.1`)', hi: 'न्यूरॉन आवेग मार्ग (`द्रुमिका→कोशिकाकाय→एक्सॉन→सिनेप्स`), प्रतिवर्ती चाप व ग्राही' }, pct: 32 },
    { label: { en: 'Human Brain Regions (`Forebrain, Cerebellum Balance, Medulla Involuntary`) & Protection', hi: 'मस्तिष्क के 3 भाग (`अग्रमस्तिष्क, अनुमस्तिष्क संतुलन, मेडुला अनैच्छिक`) व रक्षा' }, pct: 24 },
    { label: { en: 'Plant Movements (`Mimosa` Turgor, Tropisms) & 4 Phytohormones (`Auxin/Cytokinin/ABA`)', hi: 'पादप गतियाँ (`छुई-मुई, अनुवर्तन`) व 4 पादप हार्मोन (`ऑक्सिन/साइटोकाइनिन/ABA`)' }, pct: 20 },
    { label: { en: 'Endocrine Glands (`Thyroxine+Iodine, Adrenaline, Pituitary/Hypothalamus, Insulin Feedback`)', hi: 'अंतःस्रावी ग्रंथियाँ (`थाइरॉक्सिन/आयोडीन, एड्रीनलीन, पीयूष, इंसुलिन पुनर्भरण`)' }, pct: 24 },
  ],
  title: {
    en: 'Chapter 6: Control and Coordination',
    hi: 'अध्याय 6: नियंत्रण एवं समन्वय',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Neuron Impulse & Synapse, Reflex Arc, Brain Centres, Tropisms, 4 Plant Hormones & Endocrine Feedback',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • न्यूरॉन-सिनेप्स, प्रतिवर्ती चाप, मस्तिष्क भाग, पादप अनुवर्तन व हार्मोन, अंतःस्रावी तंत्र व पुनर्भरण',
  },
  metrics: {
    pages: 14,
    activities: 4,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 12,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-bio-ch6/hero-control-coordination.webp',
    caption: {
      en: 'Control & Coordination Studio: Multipolar Neuron & Synapse (`Fig 6.1`), Human Brain Sagittal Cutaway (`Fig 6.3`), Mimosa Pudica + Phototropic Seedling (`Sec 6.2`) & Endocrine Glands (`Pituitary, Thyroid, Pancreas, Adrenals`, Fig 6.7).',
      hi: 'नियंत्रण एवं समन्वय स्टूडियो: न्यूरॉन व सिनेप्स आवेग (`चित्र 6.1`), मानव मस्तिष्क व मेरुरज्जु (`चित्र 6.3`), छुई-मुई व प्रकाशानुवर्तन (`भाग 6.2`) एवं अंतःस्रावी ग्रंथियाँ (`चित्र 6.7`)।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Neuron & Synapse (`6.1`)**: **Gustatory** = Taste | **Olfactory** = Smell (`Act 6.1` shows smell shapes taste!). Impulse flows one-way: **Dendrite (`receives signal`) -> Cell body -> Axon (`longest fiber away`) -> Axon end (`electrical signal releases chemical across Synapse gap to start impulse in next Dendrite`)**!',
      hi: '**न्यूरॉन व सिनेप्स (`6.1`)**: **रस संवेदी ग्राही** = स्वाद | **घ्राणग्राही** = गंध! आवेग प्रवाह: **द्रुमिका (`सूचना प्राप्त करे`) → कोशिकाकाय → तंत्रिकाक्ष (`एक्सॉन`) → अंतिम सिरा (`विद्युत आवेग से रसायन निकल सिनेप्स रिक्त स्थान पार करे`)**!',
    },
    {
      en: '**Reflex Arc & Brain (`6.1.1–6.1.3`)**: Rapid reflex (**Sensory → Spinal Cord → Motor → Muscle**) forms in **Spinal Cord** (`bony vertebral column protects`). **Brain** (`protected by bony cranium + fluid balloon`): **Forebrain** (`main thinking part + hunger centre`); **Hindbrain Cerebellum** (`posture, balance, bicycle`); **Hindbrain Medulla** (`involuntary BP, salivation, vomiting — NOT cycling/hearing!`).',
      hi: '**प्रतिवर्ती चाप व मस्तिष्क (`6.1.1–6.1.3`)**: तीव्र रक्षा हेतु प्रतिवर्ती चाप **मेरुरज्जु** में बनता है (`रीढ़ की हड्डी से रक्षित`)। **मस्तिष्क (`कपाल + तरल गुब्बारा रक्षक`)**: **अग्रमस्तिष्क** (`सोच व भूख केंद्र`), **अनुमस्तिष्क** (`संतुलन, साइकिल, सीधा चलना`), **मेडुला** (`रक्तदाब, लार, वमन अनैच्छिक`)!',
    },
    {
      en: '**Plants (`6.2`)**: **Mimosa pudica** (`growth-independent`) transmits signals electro-chemically & folds by changing **amount of WATER in cells** (`NOT muscle proteins`). Tropisms: **Phototropism** (`shoot +, Auxin moves to SHADED side`), **Geotropism** (`root +, shoot -`), **Chemotropism** (`Pollen tube -> Ovule`), **Hydrotropism**. Hormones: **Auxin (`elongation`), Gibberellin (`stem`), Cytokinin (`cell division, seeds/fruits — Ex Q1d`)**, **Abscisic acid (`ABA inhibits growth, wilts leaves`)**!',
      hi: '**पादप समन्वय (`6.2`)**: **छुई-मुई (`वृद्धि-मुक्त`)** में कोशिकाएँ **जल की मात्रा बदलकर** झुकती हैं। दिशिक अनुवर्तन: **प्रकाश (`+प्ररोह`, ऑक्सिन छाया ओर जाए)**, **गुरुत्व (`+जड़`)**, **रसायन (`पराग नली → बीजांड`)**, **जलानुवर्तन**। हार्मोन: **ऑक्सिन, जिब्बेरेलिन, साइटोकाइनिन (`कोशिका विभाजन, फल/बीज`)** वर्धक, व **एब्सिसिक अम्ल (`पत्ती मुरझाना`)** संदमनकारी!',
    },
    {
      en: '**Endocrine Glands & Feedback (`6.3`)**: **Adrenal → Adrenaline** (`fight/flight: heart & breathing ↑, gut/skin arterioles contract, blood to muscles`). **Thyroid → Thyroxine** (`needs Iodine -> lack causes Goitre`). **Hypothalamus (`releasing hormone`) → Pituitary → Growth Hormone** (`low in childhood = Dwarfism`). **Pancreas → Insulin** (`low = Diabetes; controlled via Blood-Sugar Feedback Loop`, p.122).',
      hi: '**अंतःस्रावी ग्रंथियाँ व पुनर्भरण (`6.3`)**: **अधिवृक्क → एड्रीनलीन** (`आपात: हृदय-श्वसन ↑, पेशी ओर रक्त`)। **अवटु → थाइरॉक्सिन** (`आयोडीन अनिवार्य; कमी→गॉयटर/घेंघा`)। **हाइपोथैलेमस (`मोचक कारक`) → पीयूष → वृद्धि हार्मोन** (`कमी→बौनापन`)। **अग्न्याशय → इंसुलिन** (`कमी→मधुमेह; शर्करा स्तर से पुनर्भरण नियंत्रण`)!',
    },
  ],
  sections: [
    {
      id: 'neuron-synapse-reflex-brain',
      number: '6.1',
      flowDiagramKey: 'c10-ch6-neuron-reflex-brain-diagram',
      title: {
        en: 'Nervous Tissue: Sensory Receptors (`Act 6.1`), Neuron Signal Chain, Synapse, Spinal Reflex Arc (`Fig 6.2`) & Human Brain (`Fig 6.3`)',
        hi: 'जंतु तंत्रिका तंत्र: संवेदी ग्राही (`क्र. 6.1`), न्यूरॉन आवेग संवहन, सिनेप्स, प्रतिवर्ती चाप (`चित्र 6.2`) व मानव मस्तिष्क (`चित्र 6.3`)',
      },
      summaryTag: {
        en: 'NCERT Pages 111–117 • Fig 6.1–6.3, Gustatory vs Olfactory, Cerebellum vs Medulla, Skull Fluid Cushion & Muscle Proteins',
        hi: 'NCERT पृ. 111–117 • चित्र 6.1–6.3, रस-घ्राण ग्राही, अग्र/मध्य/पश्च मस्तिष्क, कपाल-द्रव रक्षक व पेशी प्रोटीन',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Gustatory/Olfactory Receptors (`Act 6.1`), Complete Neuron Pathway & Synapse Gap (`Fig 6.1`, p.112)',
            hi: '1. संवेदी ग्राही (`क्र. 6.1`), न्यूरॉन आवेग प्रवाह मार्ग (`द्रुमिका→एक्सॉन`) एवं सिनेप्स रासायनिक संचरण (`चित्र 6.1`)',
          },
          conceptStory: {
            en: 'In animals, specialised nervous and muscular tissues coordinate fast responses (`Class 9`). Environment clues are captured by **receptors** inside sense organs (**inner ear, nose, tongue, eye, skin**):\n• **==Gustatory Receptors (`रस संवेदी ग्राही`)==** detect **Taste** | **==Olfactory Receptors (`घ्राणग्राही`)==** detect **Smell** (**Activity 6.1**: pinching your nose alters how sugar and food taste during a cold because full flavour fuses both taste + olfactory smell!).\n• **Exact 4-Step Unidirectional Impulse Chain (`Group D 2026 Shifts 1, 4, 10, 11, 30!`)**:\n  1) Information arrives at the **bristle-like ==Dendritic Tip (`द्रुमिका`)==** -> a chemical reaction sets off an **electrical impulse**.\n  2) Impulse travels from Dendrite -> **==Cell Body (`कोशिकाकाय / Cyton`)==** (`houses nucleus`).\n  3) Travels along the long **==Axon (`तंत्रिकाक्ष`)==** (`carries impulse AWAY from cell body` — Group D Shift 4) to its terminal.\n  4) At Axon’s end, electrical impulse triggers release of **chemicals** (`neurotransmitters`) that **cross the microscopic gap ==Synapse (`अंतर्ग्रथन / सिनेप्स`, Ex Q2b)==** and spark an identical electrical impulse in the **next neuron’s Dendrite** (`or pass via Neuromuscular Junction Fig 6.1b to Muscle cells/Glands`)!',
            hi: 'जंतुओं में तीव्र नियंत्रण एवं समन्वय **तंत्रिका व पेशी ऊतक** द्वारा होता है (`पृ. 112`):\n• हमारी ज्ञानेंद्रियों (`आंतरिक कर्ण, नाक, जिह्वा`) में विशिष्ट ग्राही होते हैं: **==रस संवेदी ग्राही (`Gustatory`)==** स्वाद का, व **==घ्राणग्राही (`Olfactory`)==** गंध का पता लगाते हैं (**क्रियाकलाप 6.1**: जुकाम में नाक बंद रहने पर भोजन का पूरा स्वाद नहीं मिलता!)।\n• **तंत्रिका आवेग संवहन का सटीक 4-चरणीय मार्ग (`Group D 2026 Shifts 1, 4, 10, 11, 30 PYQs!`)**:\n  1) सूचना सर्वप्रथम न्यूरॉन के शाखित **==द्रुमाकृतिक सिरे / द्रुमिका (`Dendrite`)==** पर उपार्जित हो रासायनिक क्रिया से **विद्युत आवेग** पैदा करती है।\n  2) यह आवेग द्रुमिका से **==कोशिकाकाय (`Cell body`)==** में जाता है।\n  3) फिर लंबे **==तंत्रिकाक्ष (`एक्सॉन / Axon`)==** से होकर कोशिकाकाय से दूर अंतिम सिरे तक पहुँचता है।\n  4) **सिनेप्स (`Synapse`, अभ्यास Q2b)**: एक्सॉन के अंत में विद्युत आवेग कुछ **रसायनों का विमोचन** कराता है जो **रिक्त स्थान (`सिनेप्स`)** को पार कर अगली न्यूरॉन की द्रुमिका (या **तंत्रिका-पेशीय संधि**, चित्र 6.1b) में नया विद्युत आवेग प्रारंभ करते हैं!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch6/real/neuron-golgi-micrograph.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch6/real/brain-mri-sagittal.webp',
            title: { en: 'Real Microscopy & MRI (`Fig 6.1 & 6.3`): Golgi-Stained Neuron Branches & Sagittal Brain MRI', hi: 'असली सूक्ष्मदर्शी व MRI चित्र (`6.1 व 6.3`): गॉल्जी-अभिरंजित न्यूरॉन द्रुमिकाएँ एवं मानव मस्तिष्क का कपाल/मेरुरज्जु MRI' },
            caption: {
              en: 'Left: Authentic Golgi-stained pyramidal neuron revealing radiating dendrites (`input receivers`), soma cell body, and long axon fibre. Right: Sagittal MRI showcasing Cerebrum, Cerebellum, Brainstem Pons/Medulla, and Spinal Cord sheltered inside cranium & vertebral column (`6.1.3`).',
              hi: 'बायाँ: गॉल्जी अभिरंजित न्यूरॉन की शाखित द्रुमिकाएँ, कोशिकाकाय व लंबा एक्सॉन। दायाँ: मानव खोपड़ी व रीढ़ की हड्डी के भीतर सुरक्षित प्रमस्तिष्क, अनुमस्तिष्क व मेडुला का वास्तविक MRI।',
            },
          },
          inlinePyqIds: ['pyq-b6-1', 'pyq-b6-2', 'pyq-b6-3', 'pyq-b6-4', 'pyq-b6-7', 'pyq-b6-9', 'pyq-b6-10'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Reflex Arc (`Spinal Cord`, Fig 6.2), Human Brain Regions (`Fore/Mid/Hind`, Fig 6.3), Organ Shielding (`6.1.3`) & Muscle Contraction (`6.1.4`)',
            hi: '2. प्रतिवर्ती चाप (`मेरुरज्जु`, चित्र 6.2), मानव मस्तिष्क (`प्रमस्तिष्क, अनुमस्तिष्क, मेडुला`), कपाल/रीढ़ रक्षा (`6.1.3`) व पेशी गति (`6.1.4`)',
          },
          conceptStory: {
            en: 'Touch a flame and you pull back before conscious burning thought forms (`Why? Thinking inside the forebrain involves vast multi-neuron networks taking too long!`). Hence nerves detecting heat connect straight to motor nerves exiting at the **==Spinal Cord (`मेरुरज्जु` — Reflex Arc, Fig 6.2)==** (`Receptor → Sensory Neuron → Relay Neuron inside Spinal Cord → Motor Neuron → Effector Muscle`, while input info still reaches brain simultaneously!).\n• **CNS & PNS**: **Brain + Spinal Cord = CNS (`Central Nervous System`)**; **Cranial Nerves (`brain`) + Spinal Nerves (`spinal cord`) = PNS (`Peripheral Nervous System`)**.\n• **Three Human Brain Regions (`Fig 6.3`)**:\n  1) **==Forebrain (`अग्रमस्तिष्क / प्रमस्तिष्क`)==**: **Main thinking part** (`hearing, smell, vision, association memories, voluntary limb motor decisions` + separate **centre associated with hunger / feeling full**, `p.115`).\n  2) **Midbrain & Hindbrain Pons**: Regulate involuntary actions like pupil size reflex.\n  3) **==Hindbrain — Medulla (`मेडुला`, Tech Shifts 11 & 21)==**: Involuntary functions — **Blood Pressure (`BP`), Salivation (`लार`), and Vomiting (`वमन`)**! *(Exam trap: cycling, walking, hearing are NOT medulla-controlled!)*\n  4) **==Hindbrain — Cerebellum (`अनुमस्तिष्क`, p.117 Q3)==**: Precision of **voluntary actions** & maintaining **body posture & balance** (`straight-line walking, riding a bicycle, picking a pencil`).\n• **Protection (`6.1.3`) & Muscle Motion (`6.1.4`)**: Brain sits inside a **bony cranium box + fluid-filled balloon shock absorber**; Spinal cord is protected by the **Vertebral Column (`रीढ़ की हड्डी`)**. Inside muscles, electrical impulses cause **==special muscle proteins (`पेशी प्रोटीन`)==** to change both **shape and cellular arrangement**, shortening the cell to move!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch6/real/human-brain-specimen.webp',
            title: { en: 'Real Anatomical Specimen (`Fig 6.3`): Folded Cerebral Cortex (`Forebrain`) & Hindbrain Cerebellum', hi: 'असली शरीर रचना दृश्य (`चित्र 6.3`): वलित प्रमस्तिष्क (`अग्रमस्तिष्क`) एवं निचला अनुमस्तिष्क (`संतुलन केंद्र`)' },
            caption: {
              en: 'Notice dense folded cerebral cortex (`Forebrain thinking, sensory & hunger integration`) above the tightly ribbed hindbrain Cerebellum (`posture, bicycle riding, straight-line walking balance`).',
              hi: 'घने वलित अग्रमस्तिष्क (`चिंतन व ज्ञानेंद्रिय केंद्र`) तथा निचले धारदार अनुमस्तिष्क (`शरीर मुद्रा व संतुलन`) की स्पष्ट संरचना।',
            },
          },
          viralTrick: {
            en: '**Brain Lock (`CB vs MD`)**: **Ce`re`B`ellum = `B`alance (`Bicycle`)**! **Me`du`lla = `M`outh-BP-Vomit (`Salivation, Blood Pressure, Vomiting`)**! And **Forebrain = Thinking + Hunger Fullness**!',
            hi: '**ट्रिक**: **अनुमस्तिष्क (`Cerebellum`) = संतुलन व साइकिल (`B for Balance`)** | **मेडुला (`Medulla`) = अनैच्छिक 3 (`रक्तदाब, लार, वमन`)** | **अग्रमस्तिष्क = सोच + भूख केंद्र**!',
          },
          inlinePyqIds: ['pyq-b6-17', 'pyq-b6-21'],
        },
      ],
    },
    {
      id: 'plant-movements-phytohormones',
      number: '6.2',
      flowDiagramKey: 'c10-ch6-plant-tropism-hormones-diagram',
      svgLab: 'control-coordination-lab',
      title: {
        en: 'Plant Coordination (`No Nerves/Muscles`): Immediate Mimosa Folding (`Water Turgor`), Four Growth Tropisms & Four Plant Hormones',
        hi: 'पादपों में समन्वय (`बिना तंत्रिका-पेशी`): छुई-मुई में जल-आधारित तत्काल गति, 4 अनुवर्तन गतियाँ एवं 4 पादप हार्मोन',
      },
      summaryTag: {
        en: 'NCERT Pages 117–120 • Mimosa Pudica (Fig 6.4), Act 6.2 Phototropism, Geotropism, Chemotropism & Auxin/Gibberellin/Cytokinin/ABA',
        hi: 'NCERT पृ. 117–120 • छुई-मुई (चित्र 6.4), क्र. 6.2 प्रकाशानुवर्तन, गुरुत्व/रसायन/जलानुवर्तन, प्रतान व 4 पादप हार्मोन',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Immediate Growth-Independent Mimosa Response (`6.2.1`) vs Directional Tropic Growth Movements (`6.2.2`, Act 6.2)',
            hi: '1. वृद्धि-मुक्त तत्काल गति (`छुई-मुई`, 6.2.1) बनाम दिशिक वृद्धि अनुवर्तन (`प्रकाश, गुरुत्व, रसायन व जलानुवर्तन`, 6.2.2)',
          },
          conceptStory: {
            en: 'Plants lack nerves and animal muscle proteins, yet execute TWO distinct movement types (`p.117–119`):\n• **Type A — Immediate Growth-Independent (`Mimosa pudica / छुई-मुई`, Fig 6.4)**: Touch occurs at one point while drooping happens at the leaf base (`pulvinus`)! Plant cells relay the touch signal using **electro-chemical means** from cell to cell (`no specialised nerve conduit`), and **==leaf cells change shape by changing the AMOUNT OF WATER in them (`swelling or shrinking` — NOT muscle proteins!)==**.\n• **Type B — Growth-Dependent Directional Movements (`Tropisms / अनुवर्तन`, 6.2.2)**: Slow, irreversible, growth-driven (`toward stimulus = Positive +; away = Negative -`):\n  1) **Tendril Thigmotropism (`Pea tendril`)**: Side touching support grows slower while outer free side grows faster -> coils snugly around support!\n  2) **==Phototropism (`प्रकाशानुवर्तन`, Act 6.2 Fig 6.5)==**: Conical flask bean plant by open box window: **Shoot bends TOWARD light (`+`)** while **Roots bend AWAY (`-`)**.\n  3) **==Geotropism (`गुरुत्वानुवर्तन`, Fig 6.6)==**: **Roots always grow DOWNWARDS (`+ve`)** anchoring plant for moisture/nutrients (`Group D Shifts 25 & 32`); **Shoots grow UPWARDS (`-ve`)**.\n  4) **==Hydrotropism (`जलानुवर्तन`) & Chemotropism (`रसायनानुवर्तन`)==**: Roots grow toward water (`+ve`); **growth of Pollen Tube toward Ovules (`Fig 7.8`, p.119) is the classic NCERT example of Chemotropism (`Tech 2024 Shift 23 PYQ`!)**.',
            hi: 'पादपों में तंत्रिका ऊतक व पेशियाँ दोनों अनुपस्थित हैं, फिर भी वे दो प्रकार की गतियाँ दर्शाते हैं (`पृ. 117–119`):\n• **प्रकार 1 — वृद्धि से मुक्त तत्काल गति (`छुई-मुई`, चित्र 6.4)**: स्पर्श बिंदु व गति बिंदु भिन्न हैं; पौधा एक कोशिका से दूसरी कोशिका तक **वैद्युत-रसायन माध्यम** से सूचना भेजता है, और पादप कोशिकाएँ पेशी प्रोटीन के बजाय **==जल की मात्रा में परिवर्तन (`फूलने या सिकुड़ने`) करके आकृ ति बदलती हैं==** (`पृ. 118`)।\n• **प्रकार 2 — वृद्धि पर आश्रित दिशिक अनुवर्तन (`Tropisms`, 6.2.2)**: उद्दीपन की दिशा या विपरीत दिशा में धीमी वृद्धि:\n  1) **प्रतान (`मटर`) स्पर्श गति**: सहारे के संपर्क वाला भाग धीमा व दूर वाला भाग तेज़ बढ़कर सहारे को जकड़ लेता है।\n  2) **==प्रकाशानुवर्तन (`क्र. 6.2`, चित्र 6.5)==**: **प्ररोह प्रकाश की ओर (`+`)**, जड़ें प्रकाश से दूर (`-`) मुड़ती हैं।\n  3) **==गुरुत्वानुवर्तन (`चित्र 6.6`)==**: **जड़ें सदैव नीचे (`धनात्मक`)** (`मिट्टी में नमी व पोषण हेतु — Group D Shift 32`) व **प्ररोह ऊपर (`ऋणात्मक`)** बढ़ते हैं।\n  4) **जलानुवर्तन (`जल की ओर जड़`) व ==रसायनानुवर्तन (`Chemotropism`)==**: **पराग नलिका का बीजांड की ओर वृद्धि करना (`Tech Shift 23 PYQ!`)**!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch6/real/mimosa-pudica-sensitive.webp',
            secondaryUrl: '/ncert-notes/class10-bio-ch6/real/climbing-tendril-auxin.webp',
            title: { en: 'Real Botanical Trio (`Sec 6.2`): Touch-Sensitive Mimosa Pudica & Coiling Plant Tendril', hi: 'असली वनस्पति उदाहरण (`भाग 6.2`): छुई-मुई (`जल-आधारित पत्ती गति`) एवं कुंडलित पादप प्रतान' },
            caption: {
              en: 'Left (`Fig 6.4`): Mimosa pudica compound leaves fold instantaneously upon touch via cellular water shifts (`growth-independent`). Right (`6.2.2`): Climbing tendril coils tightly around support as Auxin elongates cells faster on the side AWAY from contact.',
              hi: 'बायाँ (`चित्र 6.4`): स्पर्श पर कोशिकीय जल मात्रा बदल मुरझाने वाली छुई-मुई। दायाँ: स्पर्श से दूर वाली सतह पर ऑक्सिन द्वारा तेज़ वृद्धि से आधार को जकड़ता प्रतान।',
            },
          },
          inlinePyqIds: ['pyq-b6-6', 'pyq-b6-8', 'pyq-b6-22'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Chemical Limitations of Nerve Impulses & All Four Plant Hormones (`Auxin, Gibberellin, Cytokinin` vs `Abscisic Acid`)',
            hi: '2. विद्युत आवेग की सीमाएँ (हार्मोन की आवश्यकता) एवं चारों पादप हार्मोन (`ऑक्सिन, जिब्बेरेलिन, साइटोकाइनिन` बनाम `एब्सिसिक अम्ल`)',
          },
          conceptStory: {
            en: 'Why do organisms supplement fast nerve impulses with **chemical hormones (`p.119`)**? Because **(1)** Electrical impulses reach ONLY nerve-connected cells (`NOT every body cell`), AND **(2)** Nerve cells cannot continuously fire without taking recovery reset time — whereas **hormones diffuse/travel widely to reach ALL cells steadily & persistently**! Know ALL **Four Plant Hormones (`NCERT p.120`)**:\n1) **==Auxin (`ऑक्सिन`)==**: Synthesised at **shoot tip**, helps **cells grow longer (`Tech 2024 Shift 10`)**. Under one-sided light (`Fig 6.5`), Auxin diffuses toward the **SHADED side** of shoot -> shaded cells elongate more -> plant curves toward light!\n2) **==Gibberellin (`जिब्बेरेलिन`)==**: Like Auxin, assists **growth of STEM**.\n3) **==Cytokinin (`साइटोकाइनिन`, Ex Q1d)==**: Promotes **CELL DIVISION** -> naturally highest concentration inside **rapidly dividing FRUITS & SEEDS**!\n4) **==Abscisic Acid / ABA (`एब्सिसिक अम्ल`)==**: **GROWTH-INHIBITING hormone** (`counterbalances promoters`) — includes **wilting of leaves (`पत्तियों का मुरझाना`)**!',
            hi: 'केवल विद्युत आवेग पर्याप्त क्यों नहीं (`पृ. 119`)? क्योंकि **(1)** ये केवल तंत्रिका से जुड़ी कोशिकाओं तक ही पहुँचते हैं (शरीर की प्रत्येक कोशिका तक नहीं), और **(2)** एक आवेग के बाद कोशिका को पुनः आवेग बनाने हेतु विराम समय चाहिए — जबकि **रासायनिक हार्मोन स्थायी व सर्वव्यापी समन्वय करते हैं!** चारों पादप हार्मोन (`पृ. 120`):\n1) **==ऑक्सिन (`Auxin`)==**: **प्ररोह के अग्रभाग (`टिप`) में संश्लेषित होकर कोशिकाओं की लंबाई बढ़ाता है (`Tech Shift 10`)**। एक ओर से प्रकाश आने पर ऑक्सिन **प्ररोह के छाया वाले भाग में विसरित** होकर उधर की कोशिकाओं को लंबा कर पौधे को प्रकाश की ओर मोड़ देता है (`चित्र 6.5`)!\n2) **==जिब्बेरेलिन (`Gibberellin`)==**: ऑक्सिन की भाँति **तने की वृद्धि** में सहायक!\n3) **==साइटोकाइनिन (`Cytokinin`, अभ्यास Q1)==**: **कोशिका विभाजन प्रेरित** करता है — अतः **फलों व बीजों में अधिक सांद्रता** में पाया जाता है!\n4) **==एब्सिसिक अम्ल (`Abscisic acid`)==**: **वृद्धि का संदमन (`रोकने`) करने वाला हार्मोन** — इसके प्रभावों में **पत्तियों का मुरझाना** सम्मिलित है!',
          },
          viralTrick: {
            en: '**Hormone Lock (`3 Up + 1 Stop`)**: **A-G-C grow** (**A**uxin cell length, **G**ibberellin stem, **C**ytokinin cell division in fruits/seeds) vs **ABA Stops (`Wilts leaves`)**!',
            hi: '**A-G-C बढ़ाए (`ऑक्सिन लंबाई, जिब्बेरेलिन तना, साइटोकाइनिन कोशिका विभाजन`)** | **ABA रोककर पत्तियाँ मुरझाए (`एब्सिसिक अम्ल`)**!',
          },
          inlinePyqIds: ['pyq-b6-16'],
        },
      ],
    },
    {
      id: 'animal-endocrine-feedback-loop',
      number: '6.3',
      flowDiagramKey: 'c10-ch6-endocrine-feedback-diagram',
      title: {
        en: 'Endocrine System in Animals (`Fig 6.7`, Table 6.1): Adrenaline, Thyroid+Iodine, Pituitary/Hypothalamus, Pancreas Insulin & Feedback Control',
        hi: 'जंतुओं में हार्मोन व अंतःस्रावी ग्रंथियाँ (`चित्र 6.7`, सारणी 6.1): एड्रीनलीन, थाइरॉइड-आयोडीन, पीयूष, इंसुलिन व पुनर्भरण तंत्र',
      },
      summaryTag: {
        en: 'NCERT Pages 120–124 • Fight-or-Flight Adrenaline Effects, Goitre vs Dwarfism vs Diabetes, Hypothalamus GHRF & Blood-Sugar Feedback',
        hi: 'NCERT पृ. 120–124 • एड्रीनलीन हृदय/श्वसन, आयोडीन-गॉयटर, बौनापन, मधुमेह इंसुलिन इंजेक्शन व शर्करा पुनर्भरण',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Emergency Adrenaline, Iodine-Dependent Thyroxine, Hypothalamus->Pituitary Axis & Blood-Sugar Insulin (`Table 6.1`)',
            hi: '1. आपातकालीन एड्रीनलीन, आयोडीन-आधारित थाइरॉक्सिन, हाइपोथैलेमस-पीयूष अक्ष एवं अग्न्याशय इंसुलिन (`सारणी 6.1`)',
          },
          conceptStory: {
            en: 'Endocrine glands secrete **hormones straight into blood** (`ductless glands`, reaching target organs across the whole body — `Sec 6.3`, Fig 6.7):\n1) **Adrenal Glands -> ==Adrenaline (`अधिवृक्क → एड्रीनलीन`)==** (`fight-or-flight squirrel example`, p.120–121): Poured directly into **blood**: **(i)** **Heart beats faster** (`more O₂ to muscles`); **(ii)** Small arteries around **digestive system & skin contract** (`reducing blood flow there -> **diverting blood to skeletal muscles**!`); **(iii)** Diaphragm & rib muscles contract -> **breathing rate increases**!\n2) **Thyroid Gland -> ==Thyroxine (`अवटुग्रंथि → थाइरॉक्सिन`)==**: Requires **==Iodine (`आयोडीन` — from iodised salt!)==** for synthesis (`Tech Shift 16 & Group D Shift 23`). Regulates **carbohydrate, protein & fat metabolism (`best balance for growth`)** (`Tech Shift 17`). Iodine deficiency causes **==Goitre (`घेंघा / गॉयटर` — swollen neck!)==**.\n3) **Hypothalamus & Pituitary Gland -> ==Growth Hormone (`GH`)==**: **Hypothalamus** secretes **Releasing Hormones (`GHRF`)** stimulating **Pituitary gland** (`Tech Shift 1`) to release **Growth Hormone** (`stimulates growth across all organs`). Childhood GH deficiency causes **==Dwarfism (`बौनापन`)==**!\n4) **Pancreas -> ==Insulin (`अग्न्याशय → इंसुलिन`)==** & **Gonads (`Testes / Ovaries`)**: **Insulin** regulates **blood sugar level** (`inadequate insulin -> high sugar **Diabetes** treated by Insulin injections`, NTPC Shift 39). Puberty (10–12 yrs): **Testes -> Testosterone** (males), **Ovaries -> Oestrogen** (females & menstrual cycle). **==Feedback Mechanism (`p.122`)==**: High blood sugar detected by **pancreatic cells** boosts **Insulin**; as blood sugar drops back down, Insulin secretion **automatically falls**!',
            hi: 'अंतःस्रावी ग्रंथियाँ बिना नलिका के **सीधे रुधिर में हार्मोन** स्रावित कर पूरे शरीर के लक्ष्य अंगों तक पहुँचाती हैं (`भाग 6.3`, चित्र 6.7 व सारणी 6.1):\n1) **अधिवृक्क ग्रंथि (`Adrenal`) → ==एड्रीनलीन (`लड़ो या भागो` गिलहरी उदाहरण)==**: सीधा रुधिर में आकर **(i) हृदय धड़कन बढ़ाए** (`पेशियों को अधिक O₂`), **(ii) पाचन तंत्र व त्वचा की धमनियों की पेशी सिकोड़ रक्त प्रवाह कंकाल पेशियों की ओर मोड़े**, **(iii) डायाफ्राम व पसली संकुचन से श्वसन दर बढ़ाए!**\n2) **अवटुग्रंथि (`Thyroid`) → ==थाइरॉक्सिन==**: इसके संश्लेषण हेतु **==आयोडीन (`आयोडीन युक्त नमक`) अनिवार्य है (`Shift 16, 23`)==**! यह **कार्बोहाइड्रेट, प्रोटीन व वसा के उपापचय का नियंत्रण** करता है (`Tech Shift 17`)। आयोडीन कमी से गर्दन फूलने का रोग **==गॉयटर (`घेंघा`)==** होता है।\n3) **हाइपोथैलेमस व पीयूष (`Pituitary`) → ==वृद्धि हार्मोन (`GH`)==**: GH कम होने पर **हाइपोथैलेमस `मोचक हार्मोन`** छोड़ पीयूष को उद्दीप्त करता है (`Tech Shift 1`)। **वृद्धि हार्मोन** सभी अंगों की वृद्धि कराता है; बाल्यकाल में इसकी कमी से **==बौनापन (`Dwarfism`)==** होता है!\n4) **अग्न्याशय (`Pancreas`) → ==इंसुलिन==** (`रक्त शर्करा नियमन; कमी → मधुमेह रोग, रोगी को इंसुलिन इंजेक्शन` — `NTPC Shift 39`) व जनन ग्रंथियाँ (**वृषण → टेस्टोस्टेरॉन**; **अंडाशय → एस्ट्रोजन** व मासिक चक्र)। **==पुनर्भरण क्रियाविधि (`Feedback Mechanism`, पृ. 122)==**: रुधिर शर्करा बढ़ने पर अग्न्याशय कोशिकाएँ संसूचित कर अधिक इंसुलिन छोड़ती हैं, और शर्करा कम होने पर इंसुलिन स्रवण **स्वतः घट जाता है**!',
          },
          realImage: {
            url: '/ncert-notes/class10-bio-ch6/real/iodised-salt-thyroid.webp',
            title: { en: 'Everyday Preventive Health (`NCERT p.121`): Iodised Salt Securing Thyroid Thyroxine Synthesis', hi: 'दैनिक जीवन सुरक्षा (`NCERT पृ. 121`): अवटुग्रंथि थाइरॉक्सिन व गॉयटर बचाव हेतु आयोडीन-युक्त नमक' },
            caption: {
              en: 'Iodine is mandatory for Thyroid gland to synthesise Thyroxine (`regulating carb/protein/fat metabolism`); dietary iodine deficit causes swollen neck Goitre (`Group D Shift 23 & Tech Shift 16 PYQs`).',
              hi: 'अवटुग्रंथि द्वारा थाइरॉक्सिन बनाने के लिए आहार में आयोडीन (`आयोडीन-युक्त नमक`) अनिवार्य है, जिसकी कमी से गॉयटर (`फूली गर्दन`) होता है।',
            },
          },
          trapAlert: {
            en: '**-0.33 Traps**: **(1)** `Pituitary` secretes GH, **NOT Hypothalamus directly** (`Hypothalamus sends Growth Hormone Releasing Factor to trigger Pituitary — Tech Shift 1`!). **(2)** `Adrenaline` **DECREASES** blood to skin & digestive gut (`to surge it to skeletal muscles!`).',
            hi: '**-0.33 सावधानी**: **हाइपोथैलेमस `मोचक हार्मोन` छोड़ कर `पीयूष ग्रंथि` से वृद्धि हार्मोन निकलवाता है (`Tech Shift 1`)**! तथा **एड्रीनलीन पाचन तंत्र व त्वचा में रक्त कम कर कंकाल पेशियों की ओर भेजता है**!',
          },
          inlinePyqIds: ['pyq-b6-5', 'pyq-b6-15', 'pyq-b6-18', 'pyq-b6-19', 'pyq-b6-20', 'pyq-b6-23', 'pyq-b6-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Dendrite (`Receives Impulse`) vs Axon (`Conducts Away`) vs Synapse (`Chemical Gap`)', hi: 'द्रुमिका (`सूचना ग्रहण`) बनाम एक्सॉन (`दूर संवहन`) बनाम सिनेप्स (`रिक्त स्थान`)' },
      left: { en: 'Dendrite picks up stimulus; Axon carries impulse AWAY from cell body (`Group D 1, 4`)', hi: 'द्रुमिका सूचना लेती है; लंबा एक्सॉन आवेग को कोशिकाकाय से दूर अंतिम सिरे तक ले जाता है!' },
      right: { en: 'Synapse = microscopic gap where electrical impulse turns CHEMICAL to excite next neuron (`Ex Q2b`)', hi: 'सिनेप्स = दो न्यूरॉन के मध्य रिक्त स्थान जहाँ विद्युत आवेग रासायनिक संकेत में बदलता है!' },
    },
    {
      pair: { en: 'Cerebellum (`Balance/Voluntary Precision`) vs Medulla (`BP/Salivation/Vomit`) vs Forebrain', hi: 'अनुमस्तिष्क (`संतुलन`) बनाम मेडुला (`अनैच्छिक`) बनाम अग्रमस्तिष्क (`सोच/भूख`)' },
      left: { en: 'Forebrain: Thinking, senses & hunger fullness | Cerebellum (Hindbrain): Posture, bicycle, straight walk', hi: 'अग्रमस्तिष्क = सोच व भूख केंद्र | अनुमस्तिष्क = शरीर संस्थिति व संतुलन (`साइकिल`)' },
      right: { en: 'Medulla (Hindbrain): Blood pressure, Salivation, Vomiting ONLY (`NOT cycling/hearing`, Tech 11 & 21)', hi: 'मेडुला = रक्तदाब, लार, वमन अनैच्छिक क्रियाएँ (`सुनना या साइकिल नहीं!`, Tech 11, 21)' },
    },
    {
      pair: { en: 'Mimosa Water Shift (`Growth-Free`) vs Auxin Phototropism & Abscisic Acid (`Inhibitor`)', hi: 'छुई-मुई जल गति बनाम ऑक्सिन (`प्रकाशानुवर्तन`) व एब्सिसिक अम्ल (`संदमन`)' },
      left: { en: 'Mimosa folds rapidly by changing WATER amount (`no growth`); Auxin/Gibberellin/Cytokinin drive growth', hi: 'छुई-मुई में कोशिका जल मात्रा बदल मुड़ती (`वृद्धि-मुक्त`); ऑक्सिन छाया ओर जाकर लंबाई बढ़ाए!' },
      right: { en: 'Cytokinin = cell division (`fruits/seeds`, Ex Q1d); Abscisic Acid (ABA) = growth INHIBITOR (`leaf wilting`)!', hi: 'साइटोकाइनिन = कोशिका विभाजन (`अभ्यास Q1`); एब्सिसिक अम्ल = वृद्धि रोक पत्तियाँ मुरझाए!' },
    },
    {
      pair: { en: 'Hypothalamus (`Releasing Factor`) -> Pituitary (`GH`) vs Thyroid (`Thyroxine`) vs Pancreas (`Insulin`)', hi: 'हाइपोथैलेमस (`मोचक कारक`) → पीयूष (`GH`) बनाम थाइरॉइड (`आयोडीन`) बनाम इंसुलिन' },
      left: { en: 'Hypothalamus stimulates Pituitary (`GH -> dwarfism if low`); Thyroid needs Iodine (`Goitre if absent`)', hi: 'हाइपोथैलेमस पीयूष को प्रेरित कर वृद्धि हार्मोन छुड़वाए (`कमी→बौनापन`); आयोडीन बिना घेंघा!' },
      right: { en: 'Pancreas Insulin lowers blood glucose (`Diabetes` if inadequate, regulated by negative Feedback loop)', hi: 'अग्न्याशय का इंसुलिन शर्करा घटाए (`कमी→मधुमेह`; पुनर्भरण से सटीक नियंत्रण — पृ. 122)!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Neuroanatomy / Golgi Neuron Staining', hi: 'न्यूरॉन संरचना एवं तंत्रिका खोज' },
      name: { en: 'Camillo Golgi & Santiago Ramón y Cajal (`1906 Nobel`)', hi: 'कैमिलो गॉल्जी एवं सैंटियागो रामोन वाई काजल' },
      country: { en: 'Italy & Spain (`Fig 6.1 Neuron Doctrine`)', hi: 'इटली व स्पेन (`चित्र 6.1 न्यूरॉन सिद्धांत`)' },
      fact: {
        en: 'Using silver-chromate staining, proved the nervous system consists of discrete **individual neurons (`dendrites -> cell body -> axon`)** communicating across **synapses**!',
        hi: 'सिल्वर क्रोमेट अभिरंजन से सिद्ध किया कि तंत्रिका तंत्र स्वतंत्र **न्यूरॉन कोशिकाओं (`द्रुमिका-एक्सॉन`)** से बना है जो **सिनेप्स** द्वारा जुड़ी होती हैं!',
      },
    },
    {
      badge: { en: 'Plant Phototropism / Auxin Discovery', hi: 'पादप प्रकाशानुवर्तन व ऑक्सिन' },
      name: { en: 'Charles Darwin & Frits Went (`Auxin 1928`)', hi: 'चार्ल्स डार्विन एवं फ्रिट्ज़ वेंट (`ऑक्सिन`)' },
      country: { en: 'UK & Netherlands (`NCERT Fig 6.5`)', hi: 'ब्रिटेन व नीदरलैंड (`NCERT चित्र 6.5`)' },
      fact: {
        en: 'Demonstrated that the **shoot tip** senses light and transmits a diffusible substance (**Auxin**) to the shaded side to bend stems toward sunlight!',
        hi: 'सिद्ध किया कि **प्ररोह का अग्रभाग (`टिप`)** प्रकाश का संसूचन कर **ऑक्सिन हार्मोन** छाया वाले भाग में भेज तने को प्रकाश की ओर मोड़ता है!',
      },
    },
    {
      badge: { en: 'Endocrinology & Insulin Sequencing', hi: 'इंसुलिन संरचना (1958 नोबेल)' },
      name: { en: 'Frederick Sanger (`Insulin Structure, Nobel 1958`)', hi: 'फ्रेडरिक सेंगर (`इंसुलिन प्रोटीन संरचना`, नोबेल 1958)' },
      country: { en: 'United Kingdom (`RRB NTPC Shift 55 PYQ`)', hi: 'यूनाइटेड किंगडम (`RRB NTPC PYQ`)' },
      fact: {
        en: 'Won his first Nobel Prize in **1958** for determining the complete amino-acid protein sequence of **Insulin** (`pancreatic hormone controlling diabetes`)!',
        hi: 'मधुमेह नियंत्रक अग्न्याशयी प्रोटीन हार्मोन **इंसुलिन (`Insulin`)** की संपूर्ण संरचना खोजने हेतु सन् **1958 में नोबेल पुरस्कार** प्राप्त किया!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-neuron-golgi',
      figRef: { en: 'NCERT Fig 6.1(a) (`Neuron Structure`)', hi: 'NCERT चित्र 6.1(a) — न्यूरॉन संरचना' },
      title: { en: 'Golgi-Stained Multipolar Neuron Showing Branched Dendrites, Soma & Long Axon', hi: 'गॉल्जी-अभिरंजित न्यूरॉन: द्रुमिका शाखाएँ, कोशिकाकाय व लंबा तंत्रिकाक्ष' },
      imageUrl: '/ncert-notes/class10-bio-ch6/real/neuron-golgi-micrograph.webp',
      hotspots: [
        { en: 'Dendrites acquire environmental info; impulse travels Cell Body -> Axon -> chemical Synapse (`Group D Shifts 1, 4, 10`).', hi: 'द्रुमिका सूचना ग्रहण करती है; आवेग कोशिकाकाय → एक्सॉन → सिनेप्स से आगे बढ़ता है।' },
      ],
    },
    {
      id: 'vis-brain-mri',
      figRef: { en: 'NCERT Fig 6.3 & Sec 6.1.3 (`Shielding`)', hi: 'NCERT चित्र 6.3 व 6.1.3 — मस्तिष्क MRI व रक्षा' },
      title: { en: 'Sagittal Head MRI Showing Forebrain, Brainstem, Cerebellum, Pituitary & Skull/Spine Protection', hi: 'मानव खोपड़ी MRI: कपाल व तरल गुब्बारे में अग्रमस्तिष्क, अनुमस्तिष्क, मेडुला व मेरुरज्जु' },
      imageUrl: '/ncert-notes/class10-bio-ch6/real/brain-mri-sagittal.webp',
      hotspots: [
        { en: 'Brain sits inside bony box + shock-absorbing fluid balloon (`6.1.3`); vertebral column shields spinal cord below.', hi: 'मस्तिष्क हड्डी के बॉक्स में तरल-पूरित गुब्बारे (`प्रघात अवशोषक`) व मेरुरज्जु रीढ़ की हड्डी में रक्षित हैं।' },
      ],
    },
    {
      id: 'vis-brain-specimen',
      figRef: { en: 'NCERT Fig 6.3 (`Cerebrum & Cerebellum`)', hi: 'NCERT चित्र 6.3 — प्रमस्तिष्क व अनुमस्तिष्क' },
      title: { en: 'Lateral Human Brain Specimen Showing Folded Forebrain & Posterior Cerebellum', hi: 'वास्तविक मानव मस्तिष्क: वलित अग्रमस्तिष्क (`प्रमस्तिष्क`) व निचला अनुमस्तिष्क' },
      imageUrl: '/ncert-notes/class10-bio-ch6/real/human-brain-specimen.webp',
      hotspots: [
        { en: 'Forebrain drives thinking, senses & hunger; Hindbrain Cerebellum coordinates posture & balance (`p.117 Q3`).', hi: 'अग्रमस्तिष्क सोच व भूख केंद्र है; अनुमस्तिष्क शारीरिक मुद्रा, साइकिल चलाना व संतुलन संभालता है।' },
      ],
    },
    {
      id: 'vis-mimosa-pudica',
      figRef: { en: 'NCERT Fig 6.4 (`Sec 6.2.1 Mimosa`)', hi: 'NCERT चित्र 6.4 — छुई-मुई तत्काल गति' },
      title: { en: 'Touch-Me-Not (*Mimosa pudica*) Compound Leaves Exhibiting Fast Water-Turgor Drooping', hi: 'छुई-मुई (`Mimosa pudica`): बिना वृद्धि, जल मात्रा परिवर्तन से स्पर्श पर मुड़ने वाली पत्तियाँ' },
      imageUrl: '/ncert-notes/class10-bio-ch6/real/mimosa-pudica-sensitive.webp',
      hotspots: [
        { en: 'Uses electro-chemical relay between cells and folds leaves swiftly by altering cellular WATER content (`p.118`).', hi: 'सूचना वैद्युत-रसायन से बहती है तथा कोशिकाएँ जल की मात्रा घटा-बढ़ाकर आकार बदल झुक जाती हैं!' },
      ],
    },
    {
      id: 'vis-climbing-tendril',
      figRef: { en: 'NCERT Sec 6.2.2 (`Thigmotropism / Auxin`)', hi: 'NCERT भाग 6.2.2 — सहारे लिपटे प्रतान' },
      title: { en: 'Sensitive Plant Tendril Coiling Tightly Around Support via Uneven Auxin Growth', hi: 'मटर/बेल का प्रतान: स्पर्श के विपरीत ओर ऑक्सिन द्वारा तेज़ वृद्धि से सहारे पर लिपटना' },
      imageUrl: '/ncert-notes/class10-bio-ch6/real/climbing-tendril-auxin.webp',
      hotspots: [
        { en: 'Tendril tip side away from object grows faster under Auxin (`In-Text p.120 Q4`), coiling cleanly around support!', hi: 'वस्तु से दूर वाली सतह पर ऑक्सिन अधिक कोशिका वृद्धि करा प्रतान को चारों ओर लपेट देता है (`पृ. 120 Q4`)।' },
      ],
    },
    {
      id: 'vis-iodised-salt',
      figRef: { en: 'NCERT Sec 6.3 (`Thyroid & Iodine`)', hi: 'NCERT भाग 6.3 — आयोडीन युक्त नमक' },
      title: { en: 'Dietary Iodised Salt Supplying Mandatory Iodine for Thyroid Thyroxine Synthesis', hi: 'अवटुग्रंथि में थाइरॉक्सिन संश्लेषण व गॉयटर (`घेंघा`) से बचाव हेतु आयोडीन युक्त नमक' },
      imageUrl: '/ncert-notes/class10-bio-ch6/real/iodised-salt-thyroid.webp',
      hotspots: [
        { en: 'Thyroxine controls carb/protein/fat metabolism; iodine shortage swells neck (`Goitre`, Group D Shift 23 & Tech Shift 16).', hi: 'थाइरॉक्सिन निर्माण में आयोडीन आवश्यक है; कमी से गॉयटर व चयापचय असंतुलन होता है।' },
      ],
    },
  ],
  activities: [
    {
      num: '6.1',
      title: { en: 'Activity 6.1: Sugar Taste Comparison With Nose Open vs Pinched (`Gustatory + Olfactory`, p.113)', hi: 'क्रियाकलाप 6.1: नाक खुली व नाक बंद करके चीनी व भोजन के स्वाद की तुलना (`पृ. 113`)' },
      materials: { en: 'Sugar crystals, regular lunch food, fingers to pinch nostrils shut', hi: 'चीनी व सामान्य भोजन; नाक बंद करने हेतु अँगूठा व तर्जनी' },
      steps: { en: 'Taste sugar & lunch normally; then hold nostrils firmly closed with thumb & forefinger and repeat tasting (`compare with having a cold!`).', hi: 'पहले सामान्य रूप से चीनी/भोजन चखें, फिर नाक दबाकर बंद करते हुए दोबारा स्वाद परखें व जुकाम से तुलना करें।' },
      examTakeaway: { en: 'With nostrils blocked (`blocking Olfactory receptors`), full food flavour vanishes — showing **full flavour integrates Gustatory (`tongue`) + Olfactory (`nose`) sensory signals**!', hi: 'नाक बंद होने पर भोजन का पूरा स्वाद गायब हो जाता है — सिद्ध होता है कि **स्वाद (`रस संवेदी ग्राही`) के साथ गंध (`घ्राणग्राही`) का भी महत्त्वपूर्ण योगदान** है!' },
      predictQuestion: {
        prompt: { en: 'Why does food seem nearly tasteless during nasal congestion or holding nostrils shut in Activity 6.1?', hi: 'क्रियाकलाप 6.1 या जुकाम में नाक बंद होने पर भोजन का पूरा स्वाद क्यों नहीं मिल पाता?' },
        options: { en: ['Olfactory (`smell`) receptors inside nose are blocked from complementing tongue Gustatory receptors', 'Sugar stops dissolving in saliva', 'Spinal cord gets cut', 'Thyroxine stops immediately'], hi: ['नाक के घ्राणग्राही (`गंध`) अवरुद्ध होने से रस संवेदी स्वाद का पूर्ण अनुभव अधूरा रह जाता है', 'लार में चीनी नहीं घुलती', 'मेरुरज्जु बंद होता', 'थाइरॉक्सिन रुक जाता'] },
        correctIndex: 0,
        reason: { en: 'Full food flavour combines tongue Gustatory taste + volatile aroma detected by nasal Olfactory receptors (`p.112–113`).', hi: 'मस्तिष्क में भोजन का पूर्ण स्वाद जीभ के स्वाद ग्राही व नाक के घ्राणग्राही दोनों के समाकलन से बनता है।' },
      },
    },
    {
      num: '6.2',
      title: { en: 'Activity 6.2: Bean Plant in Open Cardboard Box Near Window (`Phototropism & Reversal`, Fig 6.5)', hi: 'क्रियाकलाप 6.2: खिड़की के पास बॉक्स में रखे सेम के पौधे में प्रकाशानुवर्तन (`चित्र 6.5`, पृ. 118)' },
      materials: { en: 'Water-filled conical flask, wire mesh, freshly germinated bean plant, 1-side open cardboard box', hi: 'जल से भरा शंकु फ्लास्क, तार की जाली, सेम का नवोद्भिद व एक ओर खुला गत्ते का बॉक्स' },
      steps: { en: 'Keep flask on wire mesh inside box facing open light window 2–3 days -> observe shoot bending TOWARD light & roots AWAY; now turn flask 180° undisturbed -> inspect NEW growth vs old bent stems.', hi: 'पौधे को खुले डिब्बे में खिड़की की ओर रख 2–3 दिन देखें; फिर फ्लास्क घुमा कर पुरानी व नई वृद्धि की दिशा देखें।' },
      examTakeaway: { en: 'Old rigid parts keep their bent curve; **ONLY NEW growing shoots bend TOWARD light (`+ve Phototropism`) & NEW roots grow AWAY (`-ve`)** via Auxin shade migration!', hi: 'पुराने भाग नहीं मुड़ते बल्कि **केवल नए बढ़ते प्ररोह प्रकाश की ओर (`+`) व जड़ें दूर (`-`)** झुकती हैं!' },
      predictQuestion: {
        prompt: { en: 'After turning the conical flask 180° away from the window in Activity 6.2, which parts change growth direction toward light?', hi: 'क्रियाकलाप 6.2 में फ्लास्क को 180° घुमाने के बाद पौधे के कौन-से भाग पुनः प्रकाश की ओर मुड़ते हैं?' },
        options: { en: ['Both old hardened roots and new buds instantly snap backwards', 'Only the NEW growing shoot & root tips re-orient (`old woody parts stay as bent earlier`)', 'Roots suddenly grow into the air', 'Nothing grows ever again'], hi: ['पुराने कठोर भाग तुरंत सीधे होते हैं', 'केवल नई वृद्धि करने वाले प्ररोह व जड़ के सिरे दिशा बदलते हैं (`पुराने भाग वैसे ही रहेंगे`)', 'जड़ें हवा में उगती हैं', 'वृद्धि रुक जाती है'] },
        correctIndex: 1,
        reason: { en: 'Phototropism is **growth-dependent**: new cell elongation directed by Auxin re-curves growing tips cleanly (`p.118–119`).', hi: 'प्रकाशानुवर्तन **वृद्धि-आश्रित गति** है — अतः केवल नई बढ़ती हुई शीर्ष कोशिकाएँ ऑक्सिन प्रभाव से नई दिशा में मुड़ती हैं।' },
      },
    },
    {
      num: '6.3',
      title: { en: 'Activity 6.3: Identifying All Human Endocrine Glands in Male & Female Diagrams (`Fig 6.7`, p.121)', hi: 'क्रियाकलाप 6.3: चित्र 6.7 में नर व मादा की प्रमुख अंतःस्रावी ग्रंथियों की पहचान (`पृ. 121`)' },
      materials: { en: 'NCERT Anatomical Fig 6.7(a) Male & 6.7(b) Female Endocrine Diagrams', hi: 'NCERT चित्र 6.7(a) नर व 6.7(b) मादा अंतःस्रावी ग्रंथि आरेख' },
      steps: { en: 'Locate head glands (`Pineal, Hypothalamus, Pituitary`), neck/chest (`Thyroid, Parathyroid, Thymus`), abdomen (`Pancreas, Adrenal glands on kidneys`), & pelvis (`Testes in male vs Ovaries in female`).', hi: 'सिर में `पीनियल, हाइपोथैलेमस, पीयूष`, गले-वक्ष में `अवटु, परावटु, थाइमस`, उदर में `अग्न्याशय, अधिवृक्क` व श्रोणि में `वृषण/अंडाशय` पहचानें।' },
      examTakeaway: { en: 'Clearly distinguishes common glands (`Pituitary, Thyroid, Adrenal, Pancreas`) vs sex-specific gonads (`Testes` male vs `Ovaries` female)!', hi: 'सभी प्रमुख ग्रंथियों के सटीक स्थान (`गले में अवटु, वृक्क के ऊपर अधिवृक्क, मस्तिष्क में पीयूष/पीनियल/हाइपोथैलेमस`) पक्के होते हैं!' },
      predictQuestion: {
        prompt: { en: 'Looking at Activity 6.3 (`Fig 6.7`), which gland pair sits directly atop the kidneys inside the abdominal cavity?', hi: 'चित्र 6.7 (`क्रियाकलाप 6.3`) के अनुसार वृक्कों के ठीक ऊपर उदर में कौन-सी जोड़ी ग्रंथि स्थित होती है?' },
        options: { en: ['Thyroid & Parathyroid', 'Adrenal glands (`secreting Adrenaline`)', 'Pineal & Pituitary', 'Thymus'], hi: ['अवटु व परावटु', 'अधिवृक्क ग्रंथि (`Adrenal — एड्रीनलीन स्रवण`)', 'पीनियल व पीयूष', 'थाइमस'] },
        correctIndex: 1,
        reason: { en: 'Notice even the Hindi/English names: Ad-renal / अधि-वृक्क = situated above the kidneys (`renal`)!', hi: 'अधि-वृक्क (`अधि + वृक्क` / Adrenal) ग्रंथियाँ दोनों वृक्कों के शीर्ष पर स्थित होती हैं (`पृ. 122 चित्र 6.7`)।' },
      },
    },
    {
      num: '6.4',
      title: { en: 'Activity 6.4: Completing NCERT Table 6.1 Matching Hormone ↔ Gland ↔ Function (`p.123`)', hi: 'क्रियाकलाप 6.4: सारणी 6.1 में हार्मोन, अंतःस्रावी ग्रंथि व कार्य का पूर्ण मिलान (`पृ. 123`)' },
      materials: { en: 'NCERT Table 6.1 partially filled chart (`6 hormone rows`)', hi: 'NCERT सारणी 6.1 हार्मोन-ग्रंथि-कार्य चार्ट' },
      steps: { en: 'Fill all blank blanks across Rows 1–6: Growth Hormone (`Pituitary`), Thyroxine (`Thyroid`), Insulin (`Pancreas`), Testosterone (`Testes`), Oestrogen (`Ovaries`), Adrenaline (`Adrenal`), Releasing Hormone (`Hypothalamus`).', hi: 'सारणी 6.1 के रिक्त स्थान (`थाइरॉक्सिन, अग्न्याशय, नर अंग विकास, एड्रीनलीन का आपात कार्य, हाइपोथैलेमस`) भरें।' },
      examTakeaway: { en: 'Matches **Tech 2024 Shift 17 4-Column Match Question** verbatim (`Thyroxine=Metabolism, GH=Growth, Testosterone=Male organs, Insulin=Blood sugar`)!', hi: 'यही पूरी सारणी **RRB Tech 2024 Shift 17** में सीधे मिलान प्रश्न बनकर आई थी (`देखें तालिका 6.5 नीचे`)!' },
      predictQuestion: {
        prompt: { en: 'Which blank row of NCERT Table 6.1 (`Activity 6.4`) pairs Releasing Hormones directly with stimulating Pituitary secretion (`Tech Shift 1`)?', hi: 'सारणी 6.1 (`क्रियाकलाप 6.4`) में कौन-सी ग्रंथि मोचक हार्मोन द्वारा पीयूष ग्रंथि से स्राव प्रेरित करती है?' },
        options: { en: ['Pancreas', 'Thyroid', 'Hypothalamus', 'Thymus'], hi: ['अग्न्याशय', 'थाइरॉइड', 'हाइपोथैलेमस (`मोचक हार्मोन`)', 'थाइमस'] },
        correctIndex: 2,
        reason: { en: 'Row 6 / Row 7 of NCERT Table 6.1: **Hypothalamus** secretes Releasing Hormones stimulating Pituitary to release GH (`Tech 2024 Shift 1 PYQ`)!', hi: 'सारणी 6.1: **हाइपोथैलेमस** `मोचक हार्मोन` स्रावित कर पीयूष ग्रंथि से हार्मोन स्रवण प्रेरित करता है!' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-6-1',
      title: {
        en: 'Neurons, Sensory Receptors, Synapse, Reflex Arc & Organ Shielding (`Sec 6.1–6.1.4`)',
        hi: 'संवेदी ग्राही, न्यूरॉन भाग, सिनेप्स, प्रतिवर्ती चाप एवं तंत्रिका अंग रक्षा सारणी (`भाग 6.1–6.1.4`)',
      },
      headers: {
        en: ['Structure / Receptor', 'Exact Location / Setup', 'Physiological Function (`NCERT p.112–116`)', 'Verified CBT Question'],
        hi: ['संरचना / ग्राही', 'स्थान व व्यवस्था', 'मुख्य कार्य (`NCERT पृ. 112–116`)', 'सीधा RRB परीक्षा प्रश्न'],
      },
      rows: [
        [{ en: '**Gustatory & Olfactory Receptors**', hi: '**रस संवेदी व घ्राणग्राही**' }, { en: 'Tongue taste buds & Nose lining (`Act 6.1`)', hi: 'जिह्वा (`स्वाद`) एवं नाक (`गंध`, क्र. 6.1)' }, { en: '**Gustatory** detects Taste; **Olfactory** detects Smell', hi: '**रस संवेदी** स्वाद पहचानता है व **घ्राणग्राही** गंध' }, { en: '**In-Text p.117 Q4** (`Agarbatti` smell)', hi: '**पृ. 117 Q4** (`अगरबत्ती गंध`) व क्र. 6.1' }],
        [{ en: '**Dendrite (`द्रुमिका`) & Cell Body**', hi: '**द्रुमिका व कोशिकाकाय**' }, { en: 'Branched input tips & central nucleated soma', hi: 'न्यूरॉन के शाखित सिरे व केंद्रक भाग' }, { en: 'Dendrite **acquires info first**, creates **electrical impulse**', hi: '**सर्वप्रथम सूचना उपार्जित कर विद्युत आवेग बनाए**' }, { en: '`Group D Shifts 1, 10, 11, 30 PYQs`', hi: '`Group D Shifts 1, 10, 11, 30 PYQs`' }],
        [{ en: '**Axon (`तंत्रिकाक्ष`) & Synapse**', hi: '**एक्सॉन व सिनेप्स (`Synapse`)**' }, { en: 'Long nerve fibre -> gap between 2 neurons', hi: 'लंबा तंतु व दो न्यूरॉन का रिक्त स्थान' }, { en: 'Axon carries impulse **away**; at **Synapse chemical crosses gap**', hi: 'एक्सॉन दूर ले जाए; **सिनेप्स में रासायनिक अंतरण**' }, { en: '**NCERT Ex Q2b** & `Group D Shifts 4, 11`', hi: '**अभ्यास Q2b** व `Group D Shifts 4, 11`' }],
        [{ en: '**Spinal Reflex Arc & Protection**', hi: '**प्रतिवर्ती चाप व अंग सुरक्षा (`6.1.3`)**' }, { en: 'Reflex loop forms inside **Spinal Cord** (`Cranium / Spine`)', hi: '**मेरुरज्जु** में (`कपाल+तरल गुब्बारा / रीढ़ की हड्डी`)' }, { en: 'Instant reflex protects body while muscle **proteins change shape**', hi: 'तेज़ रक्षा; पेशी **प्रोटीन आवेग पर आकार-व्यवस्था बदले**' }, { en: '**In-Text p.117 Q5** & **Ex Q7 Spinal injury**', hi: '**पृ. 117 Q5** व **अभ्यास Q7 मेरुरज्जु आघात**' }],
      ],
    },
    {
      id: 'tbl-6-2',
      title: {
        en: 'Human Brain Sub-Divisions: Forebrain, Midbrain, Cerebellum & Medulla (`Sec 6.1.2`, Fig 6.3)',
        hi: 'मानव मस्तिष्क के तीन खंड (`अग्रमस्तिष्क, मध्यमस्तिष्क, अनुमस्तिष्क व मेडुला`) कार्य तालिका (`चित्र 6.3`)',
      },
      headers: {
        en: ['Brain Division & Sub-Part', 'Type of Action Controlled', 'Exact Actions Listed in NCERT (`p.115–116`)', 'RRB Trap / Negative Filter'],
        hi: ['मस्तिष्क भाग / उपखंड', 'नियंत्रित क्रिया का प्रकार', 'NCERT में दिए सटीक कार्य (`पृ. 115–116`)', 'परीक्षा जाल (`Trap Notice`)'],
      },
      rows: [
        [{ en: '**Forebrain (`Cerebrum` + Hunger)**', hi: '**अग्रमस्तिष्क (`प्रमस्तिष्क व भूख केंद्र`)**' }, { en: 'Voluntary Thinking, Senses & Cognition', hi: 'सोच, ज्ञानेंद्रिय व ऐच्छिक निर्णय' }, { en: '**Main thinking part**; hearing, smell, vision, memory, **separate hunger/fullness centre**', hi: 'सुनना, सूँघना, देखना, स्मृति साहचर्य व **भूख (`पेट भरा`) अलग केंद्र**' }, { en: '**Medulla does NOT regulate Hearing!** (`Tech Shift 21`)', hi: '**सुनना अग्रमस्तिष्क का कार्य है, मेडुला का नहीं** (`Shift 21`)' }],
        [{ en: '**Midbrain & Hind Pons**', hi: '**मध्यमस्तिष्क व पॉन्स**' }, { en: 'Involuntary Coordination', hi: 'अनैच्छिक क्रिया समन्वय' }, { en: 'Links brain pathways & coordinates involuntary actions (`e.g. pupil change`)', hi: 'पुतली आकार परिवर्तन सहित अनेक अनैच्छिक क्रियाएँ' }, { en: 'CNS = Brain + Spinal cord; PNS = Cranial + Spinal nerves', hi: 'कपाल तंत्रिका = मस्तिष्क | मेरु तंत्रिका = मेरुरज्जु' }],
        [{ en: '**Hindbrain — Medulla (`मेडुला`)**', hi: '**पश्च मस्तिष्क — मेडुला (`Medulla`)**' }, { en: '**Involuntary (`अनैच्छिक`)**', hi: '**केवल अनैच्छिक क्रियाएँ**' }, { en: '**Blood Pressure (`BP`), Salivation (`लार आना`), & Vomiting (`वमन`)**!', hi: '**रक्तदाब (`BP`), लार आना एवं वमन (`उल्टी`)**!' }, { en: '**`Tech Shifts 11 & 21 PYQs`** (`NOT bicycle/walking`!)', hi: '**`Tech Shifts 11 व 21`** (`साइकिल/चलना नहीं!`)' }],
        [{ en: '**Hindbrain — Cerebellum (`अनुमस्तिष्क`)**', hi: '**पश्च मस्तिष्क — अनुमस्तिष्क (`Cerebellum`)**' }, { en: '**Voluntary Precision & Balance**', hi: '**ऐच्छिक परिशुद्धि व संतुलन**' }, { en: '**Walking straight line, Riding bicycle, Picking pencil**, maintaining **Posture & Balance**!', hi: '**सीधी रेखा में चलना, साइकिल चलाना, पेंसिल उठाना, मुद्रा व संतुलन**!' }, { en: '**In-Text p.117 Q3** & `Alcohol impairs Cerebellum`', hi: '**पृ. 117 Q3** (`शरीर संस्थिति व संतुलन`)' }],
      ],
    },
    {
      id: 'tbl-6-3',
      title: {
        en: 'Plant Responses Compared: Non-Growth Turgor (`Mimosa`) vs Four Tropic Growth Movements (`Sec 6.2`)',
        hi: 'पादप अनुक्रिया भेद: वृद्धि-मुक्त (`छुई-मुई`) बनाम 4 दिशिक वृद्धि अनुवर्तन (`भाग 6.2`)',
      },
      headers: {
        en: ['Plant Movement Type', 'Growth Needed?', 'Mechanism & Direction (`+` Toward / `-` Away)', 'NCERT Specimen / CBT Hit'],
        hi: ['पादप गति का प्रकार', 'क्या वृद्धि पर निर्भर?', 'क्रियाविधि व दिशा (`+` ओर / `-` दूर)', 'NCERT उदाहरण व परीक्षा तथ्य'],
      },
      rows: [
        [{ en: '**Mimosa Leaf Folding (`6.2.1`)**', hi: '**छुई-मुई (`Mimosa`) स्पर्श गति**' }, { en: '**NO (`Growth-Independent`)**', hi: '**नहीं (`वृद्धि से मुक्त`)**' }, { en: 'Electro-chemical cell relay -> cells reshape by altering **WATER amount**', hi: 'वैद्युत-रसायन सूचना → कोशिकाओं में **जल मात्रा बदल आकृ ति परिवर्तन**' }, { en: '**Non-directional**, rapid fold (`Ex Q12` compare vs leg muscle!)', hi: '**अदिशिक**, अत्यंत तीव्र (`अभ्यास Q12`)' }],
        [{ en: '**Phototropism (`Act 6.2`, Fig 6.5)**', hi: '**प्रकाशानुवर्तन (`क्र. 6.2`, चित्र 6.5)**' }, { en: '**YES (`Directional Growth`)**', hi: '**हाँ (`दिशिक वृद्धि`)**' }, { en: '**Shoot `+ve` (`bends toward light`)** | **Root `-ve`** (`Auxin shifts to shaded side`)', hi: '**प्ररोह धनात्मक (`प्रकाश ओर`)** | **जड़ ऋणात्मक** (`ऑक्सिन छाया भाग में`)' }, { en: '**NCERT Ex Q6**: Why shoot curves to sun!', hi: '**अभ्यास Q6** (`ऑक्सिन का छाया भाग में प्रवास`)' }],
        [{ en: '**Geotropism (`Fig 6.6`)**', hi: '**गुरुत्वानुवर्तन (`चित्र 6.6`)**' }, { en: '**YES**', hi: '**हाँ**' }, { en: '**Root `+ve` (`always downward`)** | **Shoot `-ve` (`upward`)** — gravity = directional stimulus', hi: '**जड़ धनात्मक (`नीचे की ओर`)** | **प्ररोह ऋणात्मक (`ऊपर की ओर`)**' }, { en: '`Group D Shifts 25 & 32 PYQs` (`anchoring & moisture`)', hi: '`Group D Shifts 25 व 32` (`जड़ स्थिरीकरण व पोषण`)' }],
        [{ en: '**Chemo / Hydro / Tendril (`p.118–119`)**', hi: '**रसायन, जल व प्रतान गति**' }, { en: '**YES**', hi: '**हाँ**' }, { en: '**Chemotropism**: **Pollen tube → Ovule**! **Hydro**: root → moisture; **Tendril**: Auxin elongates free outer side', hi: '**रसायनानुवर्तन: पराग नलिका → बीजांड**! **जल**: जड़ पानी ओर; **प्रतान**: सहारे लिपटे' }, { en: '**`Tech 2024 Shift 23 PYQ`** & **In-Text p.120 Q4/Q5**', hi: '**`Tech Shift 23`** (`पराग नली`) व **पृ. 120 Q4–5**' }],
      ],
    },
    {
      id: 'tbl-6-4',
      title: {
        en: 'All Four NCERT Plant Hormones: Producers, Functions & Wilting Inhibitor (`p.120`)',
        hi: 'NCERT के सभी 4 पादप हार्मोन: संश्लेषण, मुख्य कार्य व संदमनकारी (`पृ. 120`)',
      },
      headers: {
        en: ['Plant Hormone', 'Role (`Promoter / Inhibitor`)', 'Exact Action (`NCERT p.120`)', 'Exam Highlight'],
        hi: ['पादप हार्मोन', 'प्रकार (`वर्धक / रोधक`)', 'सटीक कार्य (`NCERT पृ. 120`)', 'परीक्षा विशेष'],
      },
      rows: [
        [{ en: '**1. Auxin (`ऑक्सिन`)**', hi: '**1. ऑक्सिन (`Auxin`)**' }, { en: '**Growth Promoter**', hi: '**वृद्धि वर्धक**' }, { en: 'Synthesised at **shoot tip**; **helps cells grow LONGER** (`shade side bends shoot & tendril`)', hi: 'प्ररोह शीर्ष में संश्लेषित; **कोशिकाओं की लंबाई में वृद्धि** (`छाया ओर प्रवास`)' }, { en: '**`Tech 2024 Shift 10 PYQ`** & **p.120 Q3, Q4**', hi: '**`Tech Shift 10`** (`लंबाई में वृद्धि`) व **पृ. 120 Q4**' }],
        [{ en: '**2. Gibberellin (`जिब्बेरेलिन`)**', hi: '**2. जिब्बेरेलिन**' }, { en: '**Growth Promoter**', hi: '**वृद्धि वर्धक**' }, { en: 'Works alongside Auxin to **promote growth of the STEM**', hi: 'ऑक्सिन की तरह **तने की वृद्धि** में सहायक' }, { en: 'Classic growth hormone pair (`Auxin + Gibberellin`)', hi: 'तना-लंबाई बढ़ाने वाला प्रमुख हार्मोन' }],
        [{ en: '**3. Cytokinin (`साइटोकाइनिन`)**', hi: '**3. साइटोकाइनिन**' }, { en: '**Growth Promoter**', hi: '**वृद्धि वर्धक**' }, { en: '**Promotes CELL DIVISION**; highest concentration inside **FRUITS & SEEDS**!', hi: '**कोशिका विभाजन को प्रेरित करे**; **फलों व बीजों में सर्वाधिक सांद्रता**!' }, { en: '**NCERT Ex Q1 (`d`)** (`ONLY plant hormone among options!`)', hi: '**अभ्यास Q1 (`d`)** (`इंसुलिन/थायरॉक्सिन जंतु के हैं`)' }],
        [{ en: '**4. Abscisic Acid (`ABA`)**', hi: '**4. एब्सिसिक अम्ल**' }, { en: '**Growth INHIBITOR**', hi: '**वृद्धि संदमनकारी (`रोधक`)**' }, { en: '**Inhibits plant growth**; classic effect = **wilting of leaves (`पत्तियों का मुरझाना`)**!', hi: '**पादप वृद्धि को रोकता है**; प्रभावों में **पत्तियों का मुरझाना** सम्मिलित!' }, { en: 'Sole inhibitory plant hormone in Class 10 NCERT!', hi: 'अकेला वृद्धि-रोधक पादप हार्मोन!' }],
      ],
    },
    {
      id: 'tbl-6-5',
      title: {
        en: 'Complete NCERT Table 6.1 (`Solved`): Endocrine Gland, Hormone, Target Effects & Disorders (`p.121–123`)',
        hi: 'पूर्ण NCERT सारणी 6.1 (`हल सहित`): अंतःस्रावी ग्रंथि, हार्मोन, कार्य, रोग एवं पुनर्भरण (`पृ. 121–123`)',
      },
      headers: {
        en: ['Endocrine Gland', 'Hormone Secreted', 'Primary Target / Function', 'Deficiency / Mechanism / CBT Hit'],
        hi: ['अंतःस्रावी ग्रंथि', 'स्रावित हार्मोन', 'मुख्य लक्ष्य व शारीरिक कार्य', 'कमी रोग / पुनर्भरण / PYQ'],
      },
      rows: [
        [{ en: '**Hypothalamus (`Brain`)**', hi: '**हाइपोथैलेमस (`मस्तिष्क`)**' }, { en: '**Releasing Hormones (`e.g. GHRF`)**', hi: '**मोचक हार्मोन (`Releasing H.`)**' }, { en: '**Stimulates Pituitary gland** to secrete hormones', hi: '**पीयूष ग्रंथि से हार्मोन का स्राव प्रेरित करता**' }, { en: '**`Tech 2024 Shift 1 PYQ`** (`low GH -> Hypothalamus triggers Pituitary`!)', hi: '**`Tech Shift 1`** व सारणी 6.1 पंक्ति 6' }],
        [{ en: '**Pituitary (`पीयूष ग्रंथि`)**', hi: '**पीयूष (`पिट्यूटरी`) ग्रंथि**' }, { en: '**Growth Hormone (`GH`)**', hi: '**वृद्धि हार्मोन (`GH`)**' }, { en: '**Stimulates growth in ALL organs**', hi: '**सभी अंगों में वृद्धि प्रेरित करता है**' }, { en: 'Childhood shortage = **Dwarfism (`बौनापन`)** (`ALP Shift 7, Tech 17, 20, 6`)', hi: 'बाल्यकाल कमी → **बौनापन** (`ALP 7, Tech 17, 20, 6`)' }],
        [{ en: '**Thyroid (`अवटुग्रंथि`)**', hi: '**थाइरॉइड / अवटुग्रंथि**' }, { en: '**Thyroxine (`थाइरॉक्सिन`)**', hi: '**थाइरॉक्सिन**' }, { en: 'Regulates **carbohydrate, protein & fat metabolism** for balanced growth', hi: 'वृद्धि हेतु **कार्बोहाइड्रेट, प्रोटीन व वसा उपापचय नियमन**' }, { en: 'Requires **IODINE** -> lack causes **Goitre (`गॉयटर`)** (`Group D 23, Tech 16, 17`)', hi: '**आयोडीन अनिवार्य** (`कमी→गॉयटर/घेंघा`; `Shift 16, 23`)' }],
        [{ en: '**Pancreas (`अग्न्याशय`)**', hi: '**अग्न्याशय (`Pancreas`)**' }, { en: '**Insulin (`इंसुलिन`)**', hi: '**इंसुलिन**' }, { en: 'Regulates **blood sugar level** (`detected by pancreatic cells`)', hi: '**रुधिर शर्करा स्तर नियमन**' }, { en: 'Shortage = **Diabetes** (`insulin injections` + **Feedback mechanism**, `p.122`)', hi: 'कमी → **मधुमेह** (`NTPC 39`, **पुनर्भरण तंत्र**, नोबेल **सेंगर 1958**)' }],
        [{ en: '**Adrenal (`अधिवृक्क`)** & **Gonads**', hi: '**अधिवृक्क** व **वृषण/अंडाशय**' }, { en: '**Adrenaline** | **Testosterone / Oestrogen**', hi: '**एड्रीनलीन** | **टेस्टोस्टेरॉन / एस्ट्रोजन**' }, { en: 'Fight-or-flight (`heart/breathing ↑, blood to skeletal muscles`) | Puberty sexual organs & cycle', hi: 'आपात (`हृदय-श्वसन ↑, पेशी ओर रक्त`) | नर व मादा लैंगिक विकास + मासिक चक्र' }, { en: '**Table 6.1** rows 4–5 solved verbatim (`In-Text p.123 Q3`)!', hi: 'सारणी 6.1 पूर्ण हल (`पृ. 123 Q3` व `Tech Shift 17`)' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.117 Q1',
      q: { en: 'What is the difference between a reflex action and walking?', hi: 'प्रतिवर्ती क्रिया तथा टहलने के बीच क्या अंतर है?' },
      a: { en: '**Reflex action** is an involuntary, rapid, automatic defense response (`like withdrawing hand from flame`) routed directly through the **Spinal Cord** without conscious forebrain thought. **Walking** is a **voluntary** learned action decided by the forebrain and precisely coordinated/balanced by the **Hindbrain Cerebellum**!', hi: '**प्रतिवर्ती क्रिया** अनैच्छिक, तीव्र व स्वतः होने वाली रक्षात्मक प्रतिक्रिया है जिसका नियंत्रण **मेरुरज्जु** करता है। **टहलना** एक **ऐच्छिक क्रिया** है जिसमें मस्तिष्क चिंतन करता है व **अनुमस्तिष्क** उसका संतुलन-समन्वय करता है!' },
    },
    {
      num: 'p.117 Q2',
      q: { en: 'What happens at the synapse between two neurons?', hi: 'दो तंत्रिका कोशिकाओं (`न्यूरॉन`) के मध्य अंतर्ग्रथन (`सिनेप्स`) में क्या होता है?' },
      a: { en: 'When an electrical impulse arrives at the axon ending of neuron 1, it triggers release of **specific chemicals** (`neurotransmitters`) across the microscopic **synaptic cleft (`Synapse`)**; these chemicals spark an identical **electrical impulse in the dendrites of the next neuron** (`converting electrical -> chemical -> electrical one-way`, p.112).', hi: 'पहली तंत्रिका के एक्सॉन छोर पर **विद्युत आवेग कुछ रासायनिक पदार्थों का विमोचन** कराता है — ये रसायन रिक्त स्थान (**सिनेप्स**) को पार करके अगली न्यूरॉन की **द्रुमिका में नया विद्युत आवेग** प्रारंभ करते हैं (`विद्युत → रसायन → विद्युत`)!' },
    },
    {
      num: 'p.117 Q3',
      q: { en: 'Which part of the brain maintains posture and equilibrium of the body?', hi: 'मस्तिष्क का कौन-सा भाग शरीर की स्थिति तथा संतुलन का अनुरक्षण करता है?' },
      a: { en: '**Cerebellum (`अनुमस्तिष्क`)**, situated in the **Hindbrain** (`also coordinates precision of voluntary acts like walking in a straight line or riding a bicycle`, p.116).', hi: '**पश्च मस्तिष्क में स्थित अनुमस्तिष्क (`Cerebellum`)** शरीर की संस्थिति व संतुलन का अनुरक्षण करता है (`पृ. 116`)।' },
    },
    {
      num: 'p.117 Q4',
      q: { en: 'How do we detect the smell of an agarbatti (`incense stick`)?', hi: 'हम एक अगरबत्ती की गंध का पता कैसे लगाते हैं?' },
      a: { en: 'Volatile scent molecules hit specialised **Olfactory Receptors (`घ्राणग्राही`)** inside the nose -> trigger nerve impulses carried by sensory nerves directly to the **smell-interpretation area of Forebrain (`अग्रमस्तिष्क`)**!', hi: 'अगरबत्ती के वाष्पशील कण नाक में स्थित **घ्राणग्राही (`Olfactory receptors`)** को उद्दीप्त करते हैं — उत्पन्न विद्युत आवेग संवेदी तंत्रिका से **अग्रमस्तिष्क के गंध क्षेत्र** में पहुँचते हैं!' },
    },
    {
      num: 'p.117 Q5',
      q: { en: 'What is the role of the brain in reflex action?', hi: 'प्रतिवर्ती क्रिया में मस्तिष्क की क्या भूमिका है?' },
      a: { en: 'Spinal reflex arcs bypass slow conscious thinking so muscle withdrawal finishes instantaneously inside the **Spinal Cord** — HOWEVER, sensory **information is still forwarded to the Brain** (`p.114`) so you become aware afterwards (`recording the memory to avoid repeating the hazard!`).', hi: 'प्रतिवर्ती चाप मेरुरज्जु में ही तुरंत कार्य पूरा कर देता है ताकि सोचने में समय न गंवाया जाए — **परंतु आगत सूचनाएँ मस्तिष्क तक भी पहुँचाई जाती हैं (`पृ. 114`)** ताकि मस्तिष्क को घटना की जानकारी व भविष्य हेतु स्मृति प्राप्त हो!' },
    },
    {
      num: 'p.120 Q1',
      q: { en: 'What are plant hormones?', hi: 'पादप हॉर्मोन क्या हैं?' },
      a: { en: 'Naturally occurring chemical messengers synthesised in specific plant regions (`away from site of action`), diffusing to target cells to **coordinate plant growth, development & environmental responses**: **Auxin, Gibberellin, Cytokinin** (`promoters`) & **Abscisic Acid** (`inhibitor`).', hi: 'पौधों के एक भाग में संश्लेषित होकर सरल विसरण द्वारा क्रिया-क्षेत्र पहुँचने वाले वे रासायनिक यौगिक जो **पादप वृद्धि, विकास व पर्यावरण के प्रति अनुक्रिया** का समन्वय करते हैं: **ऑक्सिन, जिब्बेरेलिन, साइटोकाइनिन** (`वर्धक`) एवं **एब्सिसिक अम्ल** (`संदमनकारी`)।' },
    },
    {
      num: 'p.120 Q2',
      q: { en: 'How is the movement of leaves of the sensitive plant different from the movement of a shoot towards light?', hi: 'छुई-मुई पादप की पत्तियों की गति, प्रकाश की ओर प्ररोह की गति से किस प्रकार भिन्न है?' },
      a: { en: '**Mimosa leaves (`6.2.1`)**: **Growth-INDEPENDENT**, non-directional, ultra-fast movement driven by changing **amount of WATER in cells**. **Shoot phototropism (`6.2.2`)**: **Growth-DEPENDENT**, slow, directional movement caused by **Auxin shifting to shaded side elongating cells asymmetrically**.', hi: '**छुई-मुई की गति**: **वृद्धि से मुक्त**, अदिशिक व तीव्र (`कोशिकाओं में जल की मात्रा बदलने से`)। **प्ररोह प्रकाशानुवर्तन**: **वृद्धि पर आश्रित**, दिशिक व धीमी गति (`छाया भाग में ऑक्सिन द्वारा असमान लंबाई वृद्धि`)।' },
    },
    {
      num: 'p.120 Q3',
      q: { en: 'Give an example of a plant hormone that promotes growth.', hi: 'एक पादप हॉर्मोन का उदाहरण दीजिए जो वृद्धि को बढ़ाता है।' },
      a: { en: '**Auxin (`ऑक्सिन`)** (`cell elongation at shoot tip`) — other NCERT promoters include **Gibberellin** (`stem growth`) & **Cytokinin** (`cell division`).', hi: '**ऑक्सिन (`Auxin`)** (`कोशिका की लंबाई बढ़ाने वाला प्रमुख वर्धक हार्मोन; साथ ही जिब्बेरेलिन व साइटोकाइनिन भी`)!' },
    },
    {
      num: 'p.120 Q4',
      q: { en: 'How do auxins promote the growth of a tendril around a support?', hi: 'किसी सहारे के चारों ओर एक प्रतान की वृद्धि में ऑक्सिन किस प्रकार सहायक है?' },
      a: { en: 'When a sensitive tendril touches a support, Auxin diffuses more onto the side **AWAY from object contact**, making cells on the outer side **grow faster (`longer`) than cells touching the support** -> causing the tendril to curve & **coil tightly around the support (`6.2.2`)**!', hi: 'जब प्रतान किसी आधार के संपर्क में आता है तो **ऑक्सिन सहारे से दूर वाले भाग में अधिक सांद्रित होकर कोशिकाओं को तेज़ी से लंबा** करता है जबकि संपर्क वाला हिस्सा धीमा बढ़ता है — फलतः प्रतान वस्तु को चारों ओर से जकड़ लेता है!' },
    },
    {
      num: 'p.120 Q5',
      q: { en: 'Design an experiment to demonstrate hydrotropism.', hi: 'जलानुवर्तन दर्शाने के लिए एक प्रयोग की अभिकल्पना कीजिए।' },
      a: { en: 'Plant germinating seeds inside moist sawdust in two trays (`or wire-gauze trough`): Keep **Tray A uniformly watered** -> roots grow straight downwards (`geotropism`). Keep **Tray B dry on root side with a buried porous clay pot full of water nearby** -> within days, **roots bend sideways toward the moist clay pot**, proving roots grow toward moisture (**+ve Hydrotropism**)!', hi: 'दो गमलों में अंकुरित बीज लगाएँ: गमला A में समान नमी दें (`जड़ सीधी नीचे बढ़ेगी`); गमला B में सूखी मिट्टी रखकर बगल में **जल से भरा छिद्रयुक्त मिट्टी का घड़ा** दबा दें — कुछ दिन बाद **जड़ें गुरुत्व छोड़ जल-स्रोत (`घड़े`) की ओर मुड़ कर बढ़ती दिखेंगी**, जो **जलानुवर्तन** सिद्ध करता है!' },
    },
    {
      num: 'p.123 Q1',
      q: { en: 'How does chemical coordination take place in animals?', hi: 'जंतुओं में रासायनिक समन्वय कैसे होता है?' },
      a: { en: 'Via **Hormones** secreted directly into **bloodstream** by ductless **Endocrine Glands** (`Pituitary, Thyroid, Adrenal, Pancreas, Gonads`). Hormones travel throughout body acting on specific **target organs/tissues** equipped with surface recognition molecules (`controlled quantitatively via Feedback mechanism`).', hi: 'जंतुओं में **अंतःस्रावी ग्रंथियाँ (`पीयूष, अवटु, अधिवृक्क, अग्न्याशय`)** बिना नलिका के सीधे रुधिर में **हार्मोन** स्रावित करती हैं जो पूरे शरीर में प्रवाहित हो **विशिष्ट लक्ष्य अंगों** पर क्रिया करते हैं (`पुनर्भरण क्रियाविधि द्वारा सटीक नियमन`)।' },
    },
    {
      num: 'p.123 Q2',
      q: { en: 'Why is the use of iodised salt advisable?', hi: 'आयोडीन युक्त नमक के उपयोग की सलाह क्यों दी जाती है?' },
      a: { en: '**Iodine** is essential for the **Thyroid gland** to synthesise **Thyroxine** hormone (`which controls carbohydrate, protein & fat metabolism`). Deficiency of dietary iodine causes **Goitre (`swollen neck`)**, prevented simply by iodised salt (`p.121`)!', hi: 'अवटुग्रंथि (`थाइरॉइड`) को **थाइरॉक्सिन हार्मोन (`कार्बोहाइड्रेट, प्रोटीन व वसा उपापचय नियंत्रक`)** बनाने के लिए **आयोडीन अनिवार्य है** — इसकी कमी से **गॉयटर (`घेंघा / फूली गर्दन`)** रोग होता है जिससे आयोडीन युक्त नमक बचाता है!' },
    },
    {
      num: 'p.123 Q3',
      q: { en: 'How does our body respond when adrenaline is secreted into the blood?', hi: 'जब एड्रीनलीन रुधिर में स्रावित होती है तो हमारे शरीर में क्या अनुक्रिया होती है?' },
      a: { en: '**Adrenaline (`fight-or-flight`)** accelerates **heart rate** (`supplying extra oxygen to muscles`), **contracts arterioles around digestive system & skin** (`diverting blood straight to **skeletal muscles**!`), and contracts **diaphragm & rib muscles** to boost **breathing rate**!', hi: '**एड्रीनलीन** सीधे रक्त में मिलकर **(1) हृदय धड़कन बढ़ाता** है (`पेशियों को अधिक O₂`), **(2) पाचन तंत्र व त्वचा की धमनियों को सिकोड़ रक्त कंकाल पेशियों की ओर मोड़ता** है, व **(3) डायाफ्राम/पसली संकुचन से श्वसन दर तेज** कर आपात स्थिति हेतु तैयार करता है!' },
    },
    {
      num: 'p.123 Q4',
      q: { en: 'Why are some patients of diabetes treated by giving injections of insulin?', hi: 'मधुमेह के कुछ रोगियों की चिकित्सा इंसुलिन का इंजेक्शन देकर क्यों की जाती है?' },
      a: { en: '**Diabetes** occurs when the **Pancreas secretes inadequate Insulin**, causing blood sugar (`glucose`) to spike harmfully (`p.122`). **Insulin injections** restore blood sugar down to safe physiological range!', hi: '**मधुमेह (`Diabetes`)** में रोगी का अग्न्याशय पर्याप्त **इंसुलिन** नहीं बनाता जिससे रक्त शर्करा खतरनाक रूप से बढ़ जाती है; **इंसुलिन इंजेक्शन** द्वारा रक्त में शर्करा स्तर को सामान्य नियंत्रित किया जाता है!' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'Which of the following is a plant hormone?\n(a) Insulin  (b) Thyroxin  (c) Oestrogen  (d) Cytokinin', hi: 'निम्नलिखित में से कौन-सा पादप हॉर्मोन है?\n(a) इंसुलिन  (b) थायरॉक्सिन  (c) एस्ट्रोजन  (d) साइटोकाइनिन' },
      a: { en: '**Correct Answer: `(d)` Cytokinin (`jhsc1an Verified ✓`)** — Insulin (`Pancreas`), Thyroxine (`Thyroid`) & Oestrogen (`Ovary`) are all animal/human hormones!', hi: '**सही उत्तर: `(d)` साइटोकाइनिन (`उत्तरमाला सत्यापित ✓`)** — इंसुलिन, थायरॉक्सिन व एस्ट्रोजन जंतु हार्मोन हैं; **साइटोकाइनिन (`कोशिका विभाजन`)** पादप हार्मोन है!' },
    },
    {
      num: '2',
      q: { en: 'The gap between two neurons is called a\n(a) dendrite.  (b) synapse.  (c) axon.  (d) impulse.', hi: 'दो तंत्रिका कोशिका के मध्य खाली स्थान को कहते हैं —\n(a) द्रुमिका  (b) सिनेप्स  (c) एक्सॉन  (d) आवेग' },
      a: { en: '**Correct Answer: `(b)` synapse (`jhsc1an Verified ✓`)** — Microscopic synaptic cleft where axon chemicals transfer impulse to next neuron (`Group D Shift 11`).', hi: '**सही उत्तर: `(b)` सिनेप्स / अंतर्ग्रथन (`उत्तरमाला सत्यापित ✓`)** — दो न्यूरॉन के बीच रासायनिक आवेग अंतरण वाला रिक्त स्थान (`पृ. 112`)।' },
    },
    {
      num: '3',
      q: { en: 'The brain is responsible for\n(a) thinking.  (b) regulating the heart beat.\n(c) balancing the body.  (d) all of the above.', hi: 'मस्तिष्क उत्तरदायी है —\n(a) सोचने के लिए  (b) हृदय स्पंदन के लिए  (c) शरीर का संतुलन बनाने के लिए  (d) उपरोक्त सभी' },
      a: { en: '**Correct Answer: `(d)` all of the above (`jhsc1an Verified ✓`)** — **Forebrain** = thinking; **Hindbrain Medulla** = involuntary heartbeat/BP; **Hindbrain Cerebellum** = body balance!', hi: '**सही उत्तर: `(d)` उपरोक्त सभी (`उत्तरमाला सत्यापित ✓`)** — अग्रमस्तिष्क से सोचना, मेडुला से हृदय स्पंदन तथा अनुमस्तिष्क से शारीरिक संतुलन!' },
    },
    {
      num: '4',
      q: { en: 'What is the function of receptors in our body? Think of situations where receptors do not work properly. What problems are likely to arise?', hi: 'हमारे शरीर में ग्राही का क्या कार्य है? ऐसी स्थिति पर विचार कीजिए जहाँ ग्राही उचित प्रकार से कार्य नहीं कर रहे हों। क्या समस्याएँ उत्पन्न हो सकती हैं?' },
      a: { en: '**Receptors** inside sense organs (`eyes, ears, nose olfactory, tongue gustatory, skin heat/pain`) detect external stimuli and convert them into **electrical nerve impulses**. If receptors fail, a person wouldn’t notice a scorching flame, toxic gas odour or food taste — leading to severe **burns, injury or delayed survival reactions**!', hi: '**ग्राही** ज्ञानेंद्रियों में स्थित वे विशिष्ट सिरे हैं जो पर्यावरण से उद्दीपन (`गर्मी, स्वाद, गंध, ध्वनि, प्रकाश`) ग्रहण कर **विद्युत आवेग** उत्पन्न करते हैं। ग्राही न चलने पर गर्म वस्तु से जलन, विषैली गंध या खतरा पता नहीं चलेगा जिससे **गंभीर शारीरिक क्षति व दुर्घटना** संभव है!' },
    },
    {
      num: '5',
      q: { en: 'Draw the structure of a neuron and explain its function.', hi: 'एक तंत्रिका कोशिका (`न्यूरॉन`) की संरचना बनाइए तथा इसके कार्यों का वर्णन कीजिए।' },
      a: { en: 'See **Interactive SVG Plate 2 (`Fig 6.1a`)**: **(1) Dendrites** acquire sensory info generating electrical impulse -> **(2) Cell Body (`Cyton`)** holds nucleus forwarding impulse -> **(3) Axon** conducts impulse away -> **(4) Nerve Ending** releases neurotransmitters across **Synapse** triggering next neuron/muscle!', hi: '**SVG प्लेट 2 (`चित्र 6.1a`)** देखें: **(1) द्रुमिका**: सूचना ले विद्युत आवेग बनाए; **(2) कोशिकाकाय**: आवेग को आगे भेजे; **(3) एक्सॉन (`तंत्रिकाक्ष`)**: आवेग को दूर सिरे तक ले जाए; **(4) अंतिम सिरा**: सिनेप्स पर रसायन मुक्त कर अगली कोशिका/पेशी में आवेग भेजे।' },
    },
    {
      num: '6',
      q: { en: 'How does phototropism occur in plants?', hi: 'पादप में प्रकाशानुवर्तन किस प्रकार होता है?' },
      a: { en: 'When growing shoots receive **one-sided sunlight (`Fig 6.5`)**, the growth hormone **Auxin** synthesised at shoot tip **diffuses toward the SHADED side**. Higher Auxin on shaded cells accelerates their **elongation (`p.120`)**, curving the stem smoothly **TOWARD light (`+ve Phototropism`; roots curve away `-ve`)**!', hi: 'जब पादप पर एक ओर से प्रकाश पड़ता है तो प्ररोह शीर्ष में बना **ऑक्सिन (`Auxin`) विसरित होकर छाया वाले भाग में एकत्र** हो जाता है — वहाँ की कोशिकाएँ अधिक लंबी होने से **प्ररोह प्रकाश की ओर झुक जाता है (`चित्र 6.5`, धनात्मक प्रकाशानुवर्तन; जड़ें विपरीत दिशा में)**।' },
    },
    {
      num: '7',
      q: { en: 'Which signals will get disrupted in case of a spinal cord injury?', hi: 'मेरुरज्जु आघात में किन संकेतों के आने में व्यवधान होगा?' },
      a: { en: '**(1) Reflex arc signals** mediated inside spinal cord (`swift protective responses`); AND **(2) Bidirectional nerve traffic (`sensory signals ascending from lower trunk/limbs to brain AND motor instructions descending from brain via spinal cord`)**!', hi: '**(1) प्रतिवर्ती क्रियाएँ (`चाप`)** जो मेरुरज्जु में बनती हैं; तथा **(2) मस्तिष्क व शरीर (`हाथ-पैर/धड़`) के मध्य मेरुरज्जु से होकर आने-जाने वाले सभी संवेदी एवं प्रेरक तंत्रिका संकेत** अवरुद्ध हो जाएँगे!' },
    },
    {
      num: '8',
      q: { en: 'How does chemical coordination occur in plants?', hi: 'पादप में रासायनिक समन्वय किस प्रकार होता है?' },
      a: { en: 'Without nerves or blood vessels, plants coordinate growth & tropisms via **Phytohormones** (`synthesised at shoot tips/seeds, diffusing passively cell-to-cell to target areas`): **Auxin** (`cell elongation`), **Gibberellin** (`stem growth`), **Cytokinin** (`cell division in fruits/seeds`), and **Abscisic Acid** (`inhibits growth, leaf wilting`).', hi: 'पादपों में तंत्रिका व रक्त न होने से विशिष्ट **पादप हार्मोन** सरल विसरण द्वारा संश्लेषण स्थल से क्रिया-क्षेत्र में पहुँच कर समन्वय करते हैं: **ऑक्सिन** (`कोशिका लंबाई`), **जिब्बेरेलिन** (`तना वृद्धि`), **साइटोकाइनिन** (`कोशिका विभाजन`) व **एब्सिसिक अम्ल** (`वृद्धि संदमन/पत्तियाँ मुरझाना`)।' },
    },
    {
      num: '9',
      q: { en: 'What is the need for a system of control and coordination in an organism?', hi: 'एक जीव में नियंत्रण एवं समन्वय के तंत्र की क्या आवश्यकता है?' },
      a: { en: 'Multicellular bodies consist of specialised organs (`lungs, heart, gut, muscles`) that must work **harmoniously** to preserve life processes AND adjust proportionately to environmental shifts (`escaping flames, running after prey, digesting food safely`). Control systems link stimulus detection seamlessly with measured organ response (`p.111`).', hi: 'बहुकोशिकीय जीवों में विशिष्ट अंग-तंत्रों (`हृदय, श्वसन, पाचन, पेशियाँ`) के मध्य तालमेल बनाए रखने तथा पर्यावरण में होने वाले परिवर्तनों के अनुरूप **समुचित, सुरक्षित व संतुलित अनुक्रिया** करने हेतु नियंत्रण एवं समन्वय का तंत्र अनिवार्य है।' },
    },
    {
      num: '10',
      q: { en: 'How are involuntary actions and reflex actions different from each other?', hi: 'अनैच्छिक क्रियाएँ तथा प्रतिवर्ती क्रियाएँ एक-दूसरे से किस प्रकार भिन्न हैं?' },
      a: { en: '**Involuntary actions (`heart beat, breathing, BP, digestion, salivation`)** are **continuous maintenance functions** regulated calmly by **Midbrain & Hindbrain Medulla** (`no external sudden hazard trigger needed`). **Reflex actions (`hand pull from flame, eye blink`)** are **sudden rapid emergency responses** routed primarily via the **Spinal Cord**!', hi: '**अनैच्छिक क्रियाएँ (`रक्तदाब, हृदय स्पंदन, साँस, पाचन`)** जीवन अनुरक्षण हेतु निरंतर चलती हैं जिनका नियंत्रण **मध्यमस्तिष्क व पश्च मस्तिष्क का मेडुला** करता है। **प्रतिवर्ती क्रियाएँ (`गर्म वस्तु से हाथ हटना`)** बाहरी उद्दीपन पर आकस्मिक व तीव्र रक्षा-प्रतिक्रियाएँ हैं जिनका केंद्र **मेरुरज्जु** है!' },
    },
    {
      num: '11',
      q: { en: 'Compare and contrast nervous and hormonal mechanisms for control and coordination in animals.', hi: 'जंतुओं में नियंत्रण एवं समन्वय के लिए तंत्रिका तथा हॉर्मोन क्रियाविधि की तुलना तथा व्यतिरेक (`अंतर`) कीजिए।' },
      a: { en: '**Nervous System**: **(1)** Uses **electrical impulses** via neuron network; **(2)** **Ultra-fast**, short-lived action; **(3)** Reaches **ONLY neuron-connected cells** & needs refractory pause. **Hormonal (`Endocrine`) System**: **(1)** Uses **chemical messengers** via blood; **(2)** **Slower**, long-lasting steady response; **(3)** Reaches **ALL body cells** cleanly!', hi: '**तंत्रिका तंत्र**: विद्युत आवेग द्वारा **अति तीव्र** पर अल्पकालिक संकेत जो केवल तंत्रिका से जुड़ी कोशिकाओं तक सीमित। **हार्मोन तंत्र**: रुधिर में रासायनिक संदेश द्वारा **धीमा पर दीर्घकालिक** समन्वय जो बिना तंत्रिका के **शरीर की प्रत्येक कोशिका** तक पहुँचता है (`पृ. 119`)!' },
    },
    {
      num: '12',
      q: { en: 'What is the difference between the manner in which movement takes place in a sensitive plant and the movement in our legs?', hi: 'छुई-मुई पादप में गति तथा हमारी टाँग में होने वाली गति के तरीके में क्या अंतर है?' },
      a: { en: '**Sensitive plant (`Mimosa`)**: No nerves & **NO specialised muscle proteins** — cells transmit electro-chemical clue & **droop rapidly by altering internal WATER amount (`6.2.1`)**. **Human Leg**: Voluntary **Forebrain decision** fires nerve impulses down **motor neurons**, triggering **specialised muscle proteins (`actin/myosin`) to change shape & arrangement** (`6.1.4`)!', hi: '**छुई-मुई**: न तंत्रिका, न विशेष पेशी प्रोटीन — वैद्युत-रसायन सूचना पर कोशिकाएँ केवल **जल की मात्रा बदल कर** झुकती हैं (`अनैच्छिक/स्पर्श`)। **हमारी टाँग**: **ऐच्छिक मस्तिष्क** आदेश तंत्रिका से पेशी पहुँचकर **विशेष पेशी प्रोटीन की आकृ ति व व्यवस्था बदल** संकुचन कराते हैं!' },
    },
  ],
  flashcards: [
    { front: { en: 'Taste vs Smell Receptors (`Act 6.1`) & Neuron Signal Flow (`p.112`)?', hi: 'स्वाद बनाम गंध ग्राही एवं न्यूरॉन आवेग प्रवाह का सटीक क्रम?' }, back: { en: '**Gustatory** = Taste | **Olfactory** = Smell. Path: **Dendrite → Cell body (`Cyton`) → Axon → Chemical Synapse → Next Dendrite**!', hi: '**रस संवेदी** = स्वाद | **घ्राणग्राही** = गंध। मार्ग: **द्रुमिका → कोशिकाकाय → एक्सॉन → सिनेप्स (`रासायनिक`) → अगली द्रुमिका**!' } },
    { front: { en: 'Synapse Signal Conversion (`Ex Q2`) & Muscle Motion Basis (`6.1.4`)?', hi: 'सिनेप्स पर क्या होता है व जंतु पेशियाँ कैसे गति करती हैं (`6.1.4`)?' }, back: { en: '**Synapse** (`gap between 2 neurons`): electrical impulse releases **chemicals** crossing gap to start impulse! **Muscles**: **special proteins change shape & arrangement**!', hi: '**सिनेप्स**: विद्युत आवेग **रसायन** छुड़वाता जो रिक्त स्थान पार करे (`अभ्यास Q2b`)! **पेशी गति**: आवेग पर **विशेष प्रोटीन आकार व व्यवस्था बदले**!' } },
    { front: { en: 'Reflex Arc Organ + Cranium Fluid Cushion vs Vertebral Column?', hi: 'प्रतिवर्ती चाप कहाँ बनता है व मस्तिष्क/मेरुरज्जु की रक्षा कैसे होती है?' }, back: { en: 'Reflex Arc forms inside **Spinal Cord** (`while input also informs Brain`). **Brain**: bony skull + **fluid-filled balloon** (`shock absorber`); **Spinal Cord**: **Vertebral Column**!', hi: 'प्रतिवर्ती चाप **मेरुरज्जु (`Spinal Cord`)** में! रक्षा: मस्तिष्क = **कपाल + तरल गुब्बारा**; मेरुरज्जु = **रीढ़ की हड्डी (`कशेरुक दंड`)**!' } },
    { front: { en: 'Forebrain vs Hindbrain Cerebellum vs Hindbrain Medulla (`Tech 11 & 21`)?', hi: 'अग्रमस्तिष्क, अनुमस्तिष्क (`Cerebellum`) व मेडुला के सटीक कार्य भेद?' }, back: { en: '**Forebrain**: main thinking, senses & **hunger centre**; **Cerebellum**: **posture, balance, bicycle** (`p.117 Q3`); **Medulla**: **BP, Salivation, Vomiting** (`involuntary ONLY`)!', hi: '**अग्रमस्तिष्क**: सोच व भूख; **अनुमस्तिष्क**: **संतुलन, साइकिल, सीधा चलना** (`Q3`); **मेडुला**: **रक्तदाब, लार, वमन (`सुनना/चलना नहीं`)**!' } },
    { front: { en: 'How Mimosa Leaves Move (`NO muscles`) vs Auxin Phototropism (`Fig 6.5`)?', hi: 'छुई-मुई में गति कैसे होती है बनाम ऑक्सिन द्वारा प्रकाशानुवर्तन (`चित्र 6.5`)?' }, back: { en: '**Mimosa**: electro-chemical relay alters **WATER amount** inside cells (`growth-free`). **Phototropism**: shoot tip **Auxin shifts to SHADED side**, elongating shaded cells toward sun!', hi: '**छुई-मुई**: कोशिका **जल की मात्रा बदलकर**! **प्रकाशानुवर्तन**: **ऑक्सिन छाया वाले भाग में जाकर** कोशिका लंबा कर तने को प्रकाश ओर मोड़े!' } },
    { front: { en: 'Pollen Tube Chemotropism (`Tech 23`), Geotropism & 4 Plant Hormones?', hi: 'पराग नलिका अनुवर्तन व चारों पादप हार्मोन (`पृ. 120`)?' }, back: { en: 'Pollen tube -> Ovule = **Chemotropism**! Promoters: **Auxin** (`length`), **Gibberellin** (`stem`), **Cytokinin** (`cell division, fruits/seeds`); Inhibitor: **Abscisic acid (`wilting leaves`)**!', hi: 'पराग नली = **रसायनानुवर्तन**! वर्धक: **ऑक्सिन**, **जिब्बेरेलिन**, **साइटोकाइनिन (`फल-बीज`)**; रोधक: **एब्सिसिक अम्ल (`पत्तियाँ मुरझाना`)**!' } },
    { front: { en: 'Adrenaline Emergency Response on Heart, Breathing, Skin & Gut?', hi: 'आपात स्थिति में एड्रीनलीन हार्मोन के तीनों मुख्य शारीरिक प्रभाव?' }, back: { en: '**Heart beats faster** (`more O₂`), **breathing increases** (`diaphragm/ribs`), **gut & skin arteries contract** diverting blood toward **skeletal muscles** (`p.121`)!', hi: '**हृदय धड़कन तेज**, **श्वसन दर तेज**, तथा **पाचन व त्वचा का रक्त घटाकर कंकाल पेशियों की ओर प्रवाहित करना** (`लड़ो/भागो`)!' } },
    { front: { en: 'Thyroid + Iodine (`Goitre`) vs Pituitary + Hypothalamus (`Dwarfism`)?', hi: 'थाइरॉइड-आयोडीन-गॉयटर बनाम पीयूष-हाइपोथैलेमस-बौनापन?' }, back: { en: '**Thyroid** needs **Iodine** to make **Thyroxine** (`carb/protein/fat metabolism`; lack -> **Goitre**). **Hypothalamus GHRF** stimulates **Pituitary GH** (`lack -> Dwarfism`)!', hi: '**अवटु को आयोडीन** चाहिए थाइरॉक्सिन (`उपापचय`) हेतु — कमी = **गॉयटर (`घेंघा`)**! **हाइपोथैलेमस → पीयूष (`वृद्धि हार्मोन`)** — कमी = **बौनापन**!' } },
    { front: { en: 'Pancreas Insulin Disorder & Quantitative Feedback Control (`p.122`)?', hi: 'अग्न्याशय इंसुलिन कमी रोग एवं पुनर्भरण क्रियाविधि (`Feedback`, पृ. 122)?' }, back: { en: 'Low **Insulin** -> **Diabetes** (`treated with insulin injections`). **Feedback**: High blood glucose triggers pancreas to secrete **more Insulin**; low sugar **cuts secretion automatically**!', hi: '**इंसुलिन कमी → मधुमेह** (`इंजेक्शन इलाज`)। **पुनर्भरण**: शर्करा बढ़ने पर अग्न्याशय **अधिक इंसुलिन** दे, शर्करा घटते ही **स्राव स्वतः कम** हो जाता है!' } },
    { front: { en: 'Gonad Hormones & NCERT Verified MCQs (`p.124 Ex Q1, Q2, Q3`)?', hi: 'जनन हार्मोन एवं अभ्यास MCQ उत्तरमाला (`अभ्यास Q1–Q3`)?' }, back: { en: '**Testes** = Testosterone; **Ovaries** = Oestrogen (`menstrual cycle`). **Ex Q1**: **Cytokinin `(d)`** | **Ex Q2**: **Synapse `(b)`** | **Ex Q3**: **Brain All `(d)`**!', hi: '**वृषण = टेस्टोस्टेरॉन; अंडाशय = एस्ट्रोजन**। **अभ्यास `1(d) साइटोकाइनिन`, `2(b) सिनेप्स`, `3(d) उपरोक्त सभी`**!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-b6-1',
      examTag: 'RRB ALP 2025 (17 Feb Shift 3)',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.3 / Table 6.1): Pituitary Gland Hormone',
      question: {
        en: 'Which of the following hormones is secreted by the pituitary gland?',
        hi: 'निम्नलिखित में से कौन-सा हार्मोन पीयूष ग्रंथि द्वारा स्रावित होता है?',
      },
      options: {
        en: ['Adrenaline', 'Growth hormone', 'Insulin', 'Thyroxine'],
        hi: ['अधिवृक्क स्राव (Adrenaline)', 'वृद्धि हार्मोन (Growth hormone)', 'इंसुलिन (Insulin)', 'थाइरॉक्सिन (Thyroxine)'],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `Table 6.1` (`p.123`)**: **Pituitary gland** secretes **Growth Hormone (`GH`)** regulating growth across all organs (`Adrenaline=Adrenal, Insulin=Pancreas, Thyroxine=Thyroid`).',
        hi: 'सटीक `सारणी 6.1`: **पीयूष ग्रंथि** सभी अंगों में वृद्धि हेतु **वृद्धि हार्मोन** स्रावित करती है।',
      },
    },
    {
      id: 'pyq-b6-2',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): Branched Dendrites',
      question: {
        en: 'In a neuron, what are the short, branched fibres that receive impulses from other neurons called?',
        hi: 'तंत्रिकाकोशिका में, अन्य तंत्रिकाकोशिकाओं से आवेग प्राप्त करने वाले लघु, शाखित तंतुओं को क्या कहा जाता है?',
      },
      options: {
        en: ['Cartilage discs', 'Muscle fibres', 'Axons', 'Dendrites'],
        hi: ['उपास्थि डिस्क', 'पेशी तंतु', 'तंत्रिकाक्ष', 'द्रुमिका'],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `Sec 6.1` (`Fig 6.1a`)**: Branched cytoplasmic extensions receiving external/synaptic stimuli into the neuron are **Dendrites (`द्रुमिका`)**.',
        hi: 'सटीक `चित्र 6.1a`: न्यूरॉन के शाखित तंतु जो सूचना/आवेग प्राप्त करते हैं, **द्रुमिका (`Dendrites`)** कहलाते हैं।',
      },
    },
    {
      id: 'pyq-b6-3',
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): Neuron Signal Sequence Step 2',
      question: {
        en: 'After the dendrite receives information, what is the next structure the impulse moves to?',
        hi: 'द्रुमिका को सूचना प्राप्त होने के बाद, आवेग किस अगली संरचना में जाता है?',
      },
      options: {
        en: ['Axon end', 'Cell body', 'Dendrite', 'Axon'],
        hi: ['तंत्रिकाक्ष छोर (Axon end)', 'कोशिका-काय (Cell body)', 'द्रुमिका (Dendrite)', 'तंत्रिकाक्ष (Axon)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.112`**: Impulse sets off at **Dendrite -> travels to `Cell Body` -> then along `Axon` -> axon end (`Synapse`)**!',
        hi: 'सटीक `पृ. 112`: आवेग **द्रुमिका से `कोशिकाकाय` (`Cell body`)** तक जाता है और तब एक्सॉन में बढ़ता है!',
      },
    },
    {
      id: 'pyq-b6-4',
      examTag: 'RRB Group D 2025 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): First Receptor Site of Neuron',
      question: {
        en: 'Which is the first part of a neuron to receive information?',
        hi: 'सूचना प्राप्त करने वाला तंत्रिकाकोशिका (neuron) का पहला भाग कौन-सा है?',
      },
      options: {
        en: ['Axon terminal', 'Axon', 'Cell body', 'Dendrite'],
        hi: ['अक्षतंतु टर्मिनल (Axon terminal)', 'अक्षतंतु (Axon)', 'कोशिका पिंड (Cell body)', 'द्रुमिका (Dendrite)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Information is acquired first at the **dendritic tip (`Dendrite`)** of a nerve cell (`Sec 6.1`, p.112).',
        hi: 'सूचना सर्वप्रथम तंत्रिका कोशिका के **द्रुमाकृतिक सिरे / द्रुमिका (`Dendrite`)** द्वारा उपार्जित की जाती है (`पृ. 112`)।',
      },
    },
    {
      id: 'pyq-b6-5',
      examTag: 'RRB Group D 2025 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): Synapse Main Role',
      question: {
        en: 'What is the main function of the synapse between two neurons?',
        hi: 'दो तंत्रिकाकोशिकाओं के बीच सिनेप्स (synapse) का मुख्य कार्य क्या है?',
      },
      options: {
        en: ['Signal storage', 'Energy supply', 'Impulse transfer', 'Communication'],
        hi: ['संकेत भंडारण', 'ऊर्जा आपूर्ति', 'आवेग अंतरण', 'संचार'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `p.112`**: Synapse conducts **impulse transfer** between neurons via chemical neurotransmitters crossing the synaptic cleft.',
        hi: 'सटीक `पृ. 112`: सिनेप्स दो न्यूरॉन के मध्य **रासायनिक संकेतों द्वारा आवेग अंतरण (`Impulse transfer`)** संपन्न कराता है।',
      },
    },
    {
      id: 'pyq-b6-6',
      examTag: 'RRB Group D 2025 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.3): Thyroid Iodine Requirement',
      question: {
        en: '_______ is necessary for the thyroid gland to make thyroxine hormone.',
        hi: 'थाइरॉइड ग्रंथि द्वारा थाइरॉक्सिन हार्मोन बनाने के लिए _______ आवश्यक है।',
      },
      options: {
        en: ['Calcium', 'Iodine', 'Vitamin D', 'Iron'],
        hi: ['कैल्सियम', 'आयोडीन', 'विटामिन D', 'आयरन'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.121` & `p.123 Q2`**: **Iodine** is mandatory for Thyroid to synthesise **Thyroxine** (`deficiency triggers Goitre`).',
        hi: 'सटीक `पृ. 121`: अवटुग्रंथि (`थाइरॉइड`) को थाइरॉक्सिन बनाने के लिए **आयोडीन** आवश्यक है!',
      },
    },
    {
      id: 'pyq-b6-7',
      examTag: 'RRB Group D 2025 Shift 25',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.2.2): Gravity in Geotropism',
      question: {
        en: 'In geotropism, what does gravity act as?',
        hi: 'गुरुत्वानुवर्तन में, गुरुत्व किसके रूप में कार्य करता है?',
      },
      options: {
        en: ['Internal factor', 'Biotic factor', 'Reversible signal', 'Directional stimulus'],
        hi: ['आंतरिक कारक (Internal factor)', 'जीवीय कारक (Biotic factor)', 'उत्क्रमणीय सिग्नल (Reversible signal)', 'दिशात्मक उद्दीपक (Directional stimulus)'],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `Sec 6.2.2` (`p.118`)**: Environmental triggers (`light, gravity`) act as **directional stimuli (`उद्दीपन`)** changing growth orientation (`roots downward +ve, shoots upward -ve`).',
        hi: '`भाग 6.2.2`: गुरुत्व एक **दिशात्मक उद्दीपक (`Directional stimulus`)** है जिसकी दिशा में जड़ें नीचे व विपरीत प्ररोह ऊपर बढ़ते हैं।',
      },
    },
    {
      id: 'pyq-b6-8',
      examTag: 'RRB Group D 2025 Shift 30',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): Environmental Info Receptor',
      question: {
        en: 'Which part of a neuron receives information from the environment?',
        hi: 'न्यूरॉन का कौन-सा भाग, वातावरण से सूचना प्राप्त करता है?',
      },
      options: {
        en: ['Nucleus', 'Dendrite', 'Axon', 'Synapse'],
        hi: ['केंद्रक (Nucleus)', 'द्रुमिका (Dendrite)', 'अक्षतंतु (Axon)', 'अंतर्ग्रंथन (Synapse)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Specialised tips (**Dendrite / द्रुमिका**) receive environmental signals via receptors and initiate electrical nerve impulses (`p.112`).',
        hi: '`पृ. 112`: न्यूरॉन की **द्रुमिका (`Dendrite`)** वातावरण से सूचनाएँ प्राप्त कर विद्युत आवेग बनाती है।',
      },
    },
    {
      id: 'pyq-b6-9',
      examTag: 'RRB Group D 2025 Shift 32',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.2.2): Geotropism Ecological Advantage',
      question: {
        en: 'In what way does geotropism support effective rooting in plants?',
        hi: 'गुरुत्वानुवर्तन, पादपों में प्रभावी जड़ विकास में किस प्रकार सहायक होता है?',
      },
      options: {
        en: ['It directs photosynthetic tissues into the soil.', 'It directs roots to grow downward, anchoring the plant and helping them access moisture and nutrients.', 'It prevents roots from branching.', 'It makes roots grow toward sunlight.'],
        hi: ['यह प्रकाश संश्लेषक ऊतकों को मृदा में निर्देशित करता है', 'यह जड़ों को नीचे की ओर बढ़ने के लिए निर्देशित करता है, जिससे पादप स्थिर हो जाता है और उन्हें नमी एवं पोषकों तक पहुँचने में सहायता करता है', 'यह जड़ों को शाखा बनने से रोकता है', 'यह जड़ों को सूर्य के प्रकाश की ओर बढ़ाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Positive geotropism (`Fig 6.6`) guides plant roots consistently downward into soil, ensuring mechanical anchorage plus reliable uptake of **water & mineral nutrients**.',
        hi: 'धनात्मक गुरुत्वानुवर्तन जड़ों को नीचे मृदा की ओर भेजता है जिससे पौधे को **स्थिरता, नमी तथा खनिज पोषक** सुगमता से मिलें।',
      },
    },
    {
      id: 'pyq-b6-10',
      examTag: 'RRB Group D 2025 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): Axon Conducts Away',
      question: {
        en: 'Which part of a neuron carries nerve impulses away from the cell body?',
        hi: 'तंत्रिकाकोशिका (neuron) का कौन-सा भाग, तंत्रिका आवेगों को कोशिका-काय से दूर ले जाता है?',
      },
      options: {
        en: ['Cilia', 'Root hair', 'Flagellum', 'Axon'],
        hi: ['सिलिया (Cilia)', 'मूल रोम (Root hair)', 'कशाभ (Flagellum)', 'अक्षतंतु (Axon)'],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `Sec 6.1` (`p.112`)**: Once impulse passes cell body, it travels along the single elongated **Axon (`तंत्रिकाक्ष / अक्षतंतु`)** to its end.',
        hi: '`पृ. 112`: आवेग कोशिकाकाय से होकर **अक्षतंतु / तंत्रिकाक्ष (`Axon`)** द्वारा दूर अंतिम सिरे तक ले जाया जाता है।',
      },
    },
    {
      id: 'pyq-b6-11',
      examTag: 'RRB Group D 2025 Shift 46',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.1): Nervous Tissue Properties',
      question: {
        en: 'Which of the given statements about nervous tissue are correct?\n(i) Nervous tissues are made up of neurons.\n(ii) Neurons have one axon and many dendrites.\n(iii) Nerve impulses are signals that pass through a nerve fibre.',
        hi: 'तंत्रिका ऊतक के संबंध में दिए गए कथनों में से कौन-से कथन सही हैं?\n(i) तंत्रिका ऊतक न्यूरॉन से बने होते हैं।\n(ii) न्यूरॉन में एक तंत्रिकाक्ष और कई द्रुमिका होती हैं।\n(iii) तंत्रिका आवेग वे संकेत होते हैं जो तंत्रिका तंतुओं से होकर गुजरते हैं।',
      },
      options: {
        en: ['(i) and (iii) only', '(ii) and (iii) only', '(i), (ii) & (iii)', '(i) and (ii) only'],
        hi: ['केवल (i) और (iii)', 'केवल (ii) और (iii)', '(i), (ii) और (iii)', 'केवल (i) और (ii)'],
      },
      correctIndex: 2,
      solution: {
        en: '**All three statements `(i), (ii) & (iii)`** match **NCERT Sec 6.1 & Fig 6.1** accurately (`organised network of neurons with branched dendrites, one axon & conducting electrical impulses`).',
        hi: '**तीनों कथन `(i), (ii) और (iii)` पूर्णतः सत्य हैं** (`न्यूरॉन जाल, अनेक द्रुमिका + एक एक्सॉन व विद्युत आवेग संवहन`)!',
      },
    },
    {
      id: 'pyq-b6-12',
      examTag: 'RRB NTPC UG 2024 (14 Aug 2025 Shift 1)',
      section: 'General Science & Research',
      subject: 'General Science',
      topic: 'Neuro-Endocrine Signalling (India Current Science)',
      question: {
        en: 'Which Indian institute’s scientists unlocked the mystery of a cellular ‘messenger’ that may help treat Alzheimer’s and diabetes?',
        hi: 'किस भारतीय संस्थान के वैज्ञानिकों ने कोशिकीय ‘मैसेंजर (messenger)’ के रहस्य को उजागर किया है जो अल्जाइमर और मधुमेह के इलाज में मदद कर सकता है?',
      },
      options: {
        en: ['IIT Kharagpur', 'AIIMS New Delhi', 'IISc Bengaluru', 'IIT Delhi'],
        hi: ['IIT खड़गपुर', 'AIIMS नई दिल्ली', 'IISc बेंगलुरु', 'IIT दिल्ली'],
      },
      correctIndex: 2,
      solution: {
        en: 'Researchers at **IISc Bengaluru (`Indian Institute of Science`)** mapped the key neuro-metabolic second-messenger pathway relevant to **Alzheimer’s & Diabetes**.',
        hi: '**IISc बेंगलुरु (`भारतीय विज्ञान संस्थान`)** के वैज्ञानिकों ने अल्जाइमर व मधुमेह से जुड़े कोशिकीय मैसेंजर मार्ग को उजागर किया।',
      },
    },
    {
      id: 'pyq-b6-13',
      examTag: 'RRB NTPC UG 2024 (29 Aug 2025 Shift 3)',
      section: 'General Science - Biology',
      subject: 'General Science',
      topic: 'NCERT Ch 6 (Sec 6.3): Diabetes Hormone Cause',
      question: {
        en: 'Diabetes mellitus is caused by the inadequate secretion of which hormone?',
        hi: 'मधुमेह रोग किस हार्मोन के अपर्याप्त स्राव के कारण होता है?',
      },
      options: {
        en: ['Estrogen', 'Insulin', 'Adrenaline', 'Thyroxine'],
        hi: ['एस्ट्रोजन (Estrogen)', 'इंसुलिन (Insulin)', 'एड्रेनालाईन (Adrenaline)', 'थायरोक्सिन (Thyroxine)'],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `p.122`**: Pancreas produces **Insulin** regulating blood glucose; **inadequate Insulin raises blood sugar causing Diabetes mellitus**.',
        hi: 'सटीक `पृ. 122`: अग्न्याशय से **इंसुलिन (`Insulin`)** के अपर्याप्त स्रवण से रक्त शर्करा बढ़कर **मधुमेह** रोग होता है।',
      },
    },
    {
      id: 'pyq-b6-14',
      examTag: 'RRB NTPC UG 2024 (04 Sep 2025 Shift 1)',
      section: 'General Science - Biology',
      subject: 'General Science',
      topic: 'Biology Nutrition & Insulin Granules',
      question: {
        en: 'Which mineral helps in the formation of insulin granules, digestion, metabolism and functioning of the male prostate?',
        hi: 'इंसुलिन कणिकाओं के निर्माण, पाचन, चयापचय और पुरुष प्रोस्टेट के कार्य में कौन-सा खनिज सहायता करता है?',
      },
      options: {
        en: ['Phosphorus', 'Iron', 'Nickel', 'Zinc'],
        hi: ['फॉस्फोरस', 'आयरन', 'निकल', 'जिंक'],
      },
      correctIndex: 3,
      solution: {
        en: '**Zinc (`Zn`)** co-crystallises inside pancreatic beta-cell **insulin granules** (`hexameric insulin storage`), digestive enzymes & male prostate function.',
        hi: '**जिंक (`Zn`)** अग्न्याशय में इंसुलिन कणिकाओं के निर्माण, चयापचय व पुरुष प्रोस्टेट ग्रंथि के सामान्य कार्य हेतु अनिवार्य खनिज है।',
      },
    },
    {
      id: 'pyq-b6-15',
      examTag: 'RRB NTPC UG 2024 (09 Sep 2025 Shift 1)',
      section: 'Science History / Nobel',
      subject: 'General Science',
      topic: 'Insulin Hormone Discovery / Structure (Nobel 1958)',
      question: {
        en: 'Which biochemist received the Nobel Prize in 1958 for his work on the structure of proteins, especially insulin?',
        hi: 'किस जैवरसायनज्ञ को प्रोटीन, विशेषकर इंसुलिन की संरचना पर उनके कार्य के लिए 1958 में नोबेल पुरस्कार प्रदान किया गया?',
      },
      options: {
        en: ['Frederick Sanger', 'Eduard Buchner', 'Carl Neuberg', 'Rosalind Franklin'],
        hi: ['फ्रेडरिक सेंगर (Frederick Sanger)', 'एडवर्ड बुचनर (Eduard Buchner)', 'कार्ल न्यूबर्ग (Carl Neuberg)', 'रोज़ालिंड फ्रैं कलिन (Rosalind Franklin)'],
      },
      correctIndex: 0,
      solution: {
        en: '**Frederick Sanger (`1958 Chemistry Nobel`)** decoded the full amino-acid sequence (`A & B chains`) of pancreatic hormone **Insulin**!',
        hi: '**फ्रेडरिक सेंगर (`Frederick Sanger`)** को सन् 1958 में **इंसुलिन प्रोटीन** की संरचना निर्धारित करने हेतु नोबेल पुरस्कार मिला।',
      },
    },
    {
      id: 'pyq-b6-16',
      examTag: 'RRB Tech Gr-III 2024 (20 Dec Shift 2)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Table 6.1): Hypothalamus Releasing Factor',
      question: {
        en: 'When the level of growth hormone is low, which gland releases growth hormone releasing factor and stimulates the pituitary gland to release growth hormone?',
        hi: 'जब वृद्धि हार्मोन का स्तर कम होता है, तो कौन वृद्धि हार्मोन स्रावित करने वाला कारक (growth hormone releasing factor) मुक्त करता है और पीयूष ग्रंथि को उद्दीप्त करके वृद्धि हार्मोन मुक्त करता है?',
      },
      options: {
        en: ['Pancreas', 'Thyroid gland', 'Hypothalamus', 'Adrenal gland'],
        hi: ['अग्न्याशय', 'थाइरॉयड ग्रंथि', 'हाइपोथैलेमस', 'अधिवृक्क ग्रंथि'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `Table 6.1` (`p.123`)**: **Hypothalamus** secretes **Releasing Hormone (`GHRF`)** stimulating Pituitary gland to release Growth Hormone!',
        hi: 'सटीक `सारणी 6.1`: **हाइपोथैलेमस (`Hypothalamus`)** मोचक कारक छोड़ कर पीयूष ग्रंथि को वृद्धि हार्मोन मुक्त करने हेतु उद्दीप्त करता है।',
      },
    },
    {
      id: 'pyq-b6-17',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec Shift 2)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Sec 6.2.2): Auxin Function',
      question: {
        en: 'Select the correct option related to the function of auxin in plants.',
        hi: 'पौधों में ऑक्सिन के कार्य से संबंधित सही विकल्प का चयन कीजिए।',
      },
      options: {
        en: ['Helps the cells to grow longer', 'Induce flowering', 'Increases stem width', 'Make plants insect resistant'],
        hi: ['कोशिकाओं को लंबाई में वृद्धि करने में सहायता करता है', 'पुष्पन को प्रेरित करता है', 'तने की मोटाई में वृद्धि करता है', 'पौधों को कीटरोधी बनाता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.120`**: Hormone **Auxin**, synthesised at shoot tip, **helps the cells to grow longer (`कोशिकाओं की लंबाई में वृद्धि`)**.',
        hi: 'सटीक `पृ. 120`: प्ररोह अग्रभाग में संश्लेषित ऑक्सिन **कोशिकाओं की लंबाई में वृद्धि** में सहायक होता है।',
      },
    },
    {
      id: 'pyq-b6-18',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec Shift 3)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Sec 6.1.2): Medulla Involuntary Action',
      question: {
        en: 'Which of the following actions is regulated by the medulla in the hind brain?',
        hi: 'निम्नलिखित में से कौन-सी क्रिया पश्च मस्तिष्क (hind brain) में मध्यांश (medulla) द्वारा नियंत्रित होती है?',
      },
      options: {
        en: ['Maintaining balance and posture', 'Salivation', 'Riding a bicycle', 'Walking'],
        hi: ['संतुलन और मुद्रा बनाए रखना (Maintaining balance and posture)', 'लार निकालना (Salivation)', 'साइकिल चलाना (Riding a bicycle)', 'चलना (Walking)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.116`**: **BP, Salivation (`लार आना`) & Vomiting** are controlled by **Medulla** (`balance/bicycle/walking are Cerebellum!`).',
        hi: 'सटीक `पृ. 116`: **लार आना (`Salivation`), रक्तदाब व वमन** पश्च मस्तिष्क के मेडुला द्वारा नियंत्रित हैं (`साइकिल/चलना/संतुलन अनुमस्तिष्क के कार्य हैं`)।',
      },
    },
    {
      id: 'pyq-b6-19',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec Shift 2)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Sec 6.3): Thyroid Iodine Link',
      question: {
        en: 'Iodine is necessary for which gland to make the thyroxine hormone?',
        hi: 'थायरॉक्सिन हार्मोन बनाने के लिए किस ग्रंथि के लिए आयोडीन आवश्यक है?',
      },
      options: {
        en: ['Pineal gland', 'Thyroid gland', 'Thymus', 'Pancreas'],
        hi: ['पिनियल ग्रंथि', 'थाइरॉयड ग्रंथि', 'थाइमस', 'अग्नाशय'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.121`**: Iodine is essential for **Thyroid gland (`अवटुग्रंथि`)** to produce Thyroxine hormone.',
        hi: 'सटीक `पृ. 121`: थायरॉक्सिन हार्मोन बनाने के लिए **थाइरॉयड (`अवटु`) ग्रंथि** को आयोडीन आवश्यक है।',
      },
    },
    {
      id: 'pyq-b6-20',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec Shift 3)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Table 6.1 Match): 4 Endocrine Hormones',
      question: {
        en: 'Match hormones with functions: 1. Thyroxin | 2. Growth hormone | 3. Testosterone | 4. Insulin <-> a. Body growth/dev | b. Male sex organ dev | c. Blood sugar control | d. Fat/protein/carb metabolism',
        hi: 'हार्मोन का उनके संबंधित कार्यों से मिलान कीजिए: 1. थायरोक्सिन | 2. वृद्धि हार्मोन | 3. टेस्टोस्टेरोन | 4. इंसुलिन <-> a. शरीर वृद्धि/विकास | b. नर लैंगिक अंग विकास | c. रक्त शर्करा नियंत्रण | d. वसा/प्रोटीन/कार्ब्स उपापचय',
      },
      options: {
        en: ['1-b, 2-a, 3-d, 4-c', '1-d, 2-a, 3-b, 4-c', '1-d, 2-b, 3-c, 4-a', '1-a, 2-c, 3-b, 4-d'],
        hi: ['1-b, 2-a, 3-d, 4-c', '1-d, 2-a, 3-b, 4-c', '1-d, 2-b, 3-c, 4-a', '1-a, 2-c, 3-b, 4-d'],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `Table 6.1` exact match**: `1-d` (`Thyroxine=Metabolism`), `2-a` (`GH=Growth`), `3-b` (`Testosterone=Male sex organs`), `4-c` (`Insulin=Blood sugar`) -> **`1-d, 2-a, 3-b, 4-c`**!',
        hi: '`सारणी 6.1`: `1-d` (`थायरोक्सिन-उपापचय`), `2-a` (`वृद्धि हार्मोन`), `3-b` (`टेस्टोस्टेरोन-नर अंग`), `4-c` (`इंसुलिन-रक्त शर्करा`)!',
      },
    },
    {
      id: 'pyq-b6-21',
      examTag: 'RRB Tech Gr-III 2024 (29 Dec Shift 3)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Table 6.1): Pituitary GH Target',
      question: {
        en: 'What is the function of the growth hormone secreted by the pituitary gland?',
        hi: 'पीयूष ग्रंथि द्वारा स्रावित वृद्धि हार्मोन का क्या कार्य है?',
      },
      options: {
        en: ['It regulates metabolism for body growth.', 'It regulates the menstrual cycle.', 'It regulates the blood sugar level.', 'It stimulates growth in all organs.'],
        hi: ['यह शरीर की वृद्धि के लिए उपापचय को नियंत्रित करता है।', 'यह मासिक धर्म चक्र को नियंत्रित करता है।', 'यह रक्त शर्करा स्तर को नियंत्रित करता है।', 'यह सभी अंगों में वृद्धि को उत्तेजित करता है।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Word-for-word **NCERT `Table 6.1` Row 1 (`p.123`)**: Pituitary Growth Hormone **“Stimulates growth in all organs”** (`Metabolism=Thyroxine, Menstrual=Oestrogen, Sugar=Insulin`)!',
        hi: 'सटीक `सारणी 6.1 पंक्ति 1`: पीयूष ग्रंथि का वृद्धि हार्मोन **“सभी अंगों में वृद्धि को उत्तेजित करता है”** (`उपापचय=थायरॉक्सिन, मासिक चक्र=एस्ट्रोजन, शर्करा=इंसुलिन`)!',
      },
    },
    {
      id: 'pyq-b6-22',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Sec 6.1.2): What Medulla Does NOT Control',
      question: {
        en: 'Which of the following functions is NOT regulated by the medulla in the hind brain?',
        hi: 'निम्नलिखित में से कौन-सा कार्य पश्च मस्तिष्क में मध्यांश (medulla) द्वारा नियंत्रित नहीं किया जाता है?',
      },
      options: {
        en: ['Vomiting control', 'Regulation of hearing', 'Blood pressure regulation', 'Salivary regulation'],
        hi: ['वमन पर नियंत्रण (Vomiting control)', 'श्रवण पर नियंत्रण (Regulation of hearing)', 'रक्तचाप का नियंत्रण (Blood pressure regulation)', 'लार का नियंत्रण (Salivary regulation)'],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `p.115–116`**: **Hearing (`श्रवण`)** has dedicated sensory regions inside the **Forebrain** (`whereas Blood pressure, Salivation & Vomiting are all controlled by Hindbrain Medulla`)!',
        hi: 'सटीक `पृ. 115–116`: **सुनने (`श्रवण`)** का केंद्र **अग्रमस्तिष्क** में है, जबकि वमन, रक्तचाप व लार नियंत्रण **मेडुला** के अनैच्छिक कार्य हैं!',
      },
    },
    {
      id: 'pyq-b6-23',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec Shift 3)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Sec 6.2.2): Pollen Tube Chemotropism',
      question: {
        en: 'If the roots of a plant always grow downwards due to geotropism, then the growth of pollen tubes towards ovules is due to ________.',
        hi: 'यदि किसी पौधे की जड़ें गुरुत्वानुवर्तन के कारण हमेशा नीचे की ओर बढ़ती हैं, तो बीजांड की ओर पराग नलिकाओं की वृद्धि ________ के कारण होती है।',
      },
      options: {
        en: ['phototropism', 'chemotropism', 'geotropism', 'hydrotropism'],
        hi: ['प्रकाशानुवर्तन (phototropism)', 'रसायनानुवर्तन (chemotropism)', 'गुरुत्वानुवर्तन (geotropism)', 'जलानुवर्तन (hydrotropism)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.119`**: “An example of **chemotropism (`रसायनानुवर्तन`)** is the **growth of pollen tubes towards ovules**”!',
        hi: 'सटीक `पृ. 119`: बीजांड की ओर पराग नलिकाओं की वृद्धि **रसायनानुवर्तन (`chemotropism`)** का सटीक उदाहरण है!',
      },
    },
    {
      id: 'pyq-b6-24',
      examTag: 'RRB Tech Gr-III 2024 (24 Dec Shift 1)',
      section: 'Biology',
      subject: 'Biology',
      topic: 'NCERT Ch 6 (Sec 6.3): Growth Hormone Gland',
      question: {
        en: 'Which of the following endocrine glands secretes growth hormone?',
        hi: 'निम्नलिखित में से कौन-सी अंतःस्रावी ग्रंथि वृद्धि हॉर्मोन स्रावित करती है?',
      },
      options: {
        en: ['Pituitary', 'Adrenal', 'Thyroid', 'Pancreas'],
        hi: ['पीयूष ग्रंथि', 'अधिवृक्क ग्रंथि', 'थाइरॉयड ग्रंथि', 'अग्न्याशय'],
      },
      correctIndex: 0,
      solution: {
        en: '**NCERT `p.121` & `Table 6.1`**: Growth hormone regulating growth and development (`dwarfism on deficiency`) comes from the **Pituitary gland (`पीयूष ग्रंथि`)**.',
        hi: '`पृ. 121`: **पीयूष ग्रंथि** से स्रावित **वृद्धि हार्मोन** शारीरिक वृद्धि व विकास को नियंत्रित करता है।',
      },
    },
  ],
};
export default C10_CH6_CONTROL_DATA;
