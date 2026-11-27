/**
 * Class 10 NCERT Science (2026–27 Edition — jhsc110.pdf, Pages 177–189) + Railway CBT Deep-Dive
 * Chapter 10: The Human Eye & the Colourful World (मानव नेत्र तथा रंग-बिरंगा संसार) — Gold Standard v3 (Class 10 Finale!)
 * Complete Coverage: 10.1 Human Eye Anatomy (`~2.3 cm`, Cornea refraction, Iris/Pupil, Retina Real/Inverted, Optic Nerve) + 10.1.1 Accommodation (`25 cm–∞`, Ciliary Relaxed/Contracted, Cataract) ->
 * 10.2 Refractive Defects (`Myopia Concave -ve, Hypermetropia Convex +ve, Presbyopia Bifocal`, Why 2 Eyes Box `150°→180°`, Eye Donation Box `4–6 hrs, 4 recipients, AIDS/Hep/Rabies excluded`) ->
 * 10.3–10.4 Prism Refraction (`Act 10.1, ∠A, ∠D, toward base`), Dispersion VIBGYOR (`Act 10.2`, Violet max/Red least), Newton 2-Prism Recombination & Rainbow (`Refract+Disperse+Int.Refl+Refract`) ->
 * 10.5 Atmospheric Refraction (`Star Twinkling vs Planets, Advance Sunrise +2m & Delayed Sunset +2m = +4m`) & 10.6 Scattering (`Tyndall, Blue Sky Red λ=1.8×Blue, Black Space, Red Danger Signal`).
 * All 2 Activities (`10.1–10.2`), 4 In-Text Qs (`p.181`), 12 Solved Exercises verified vs jhsc1an (`1.b, 2.d, 3.c, 4.c, 5. -0.18m/+0.67m, 6. -1.25D Concave, 7. +3.0D Convex`), 24 Pure RRB Optics PYQs.
 */

export const C10_CH10_EYE_DATA = {
  id: 'c10-phy-ch10',
  classId: 'class10',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 10,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 10: The Human Eye & the Colourful World (CBT Edition)',
  blueprintSvgKey: 'c10-ch10-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Human Eye Anatomy (`Cornea, Iris, Pupil, Retina`), Ciliary Accommodation (`25 cm – ∞`) & Cataract', hi: 'मानव नेत्र भाग (`कॉर्निया, आइरिस, पुतली, रेटिना`), समंजन (`25 cm – ∞`) व मोतियाबिंद' }, pct: 26 },
    { label: { en: 'Vision Defects (`Myopia Concave, Hypermetropia Convex, Presbyopia Bifocal`) & `P = 1/f` Numericals', hi: 'दृष्टि दोष (`निकट अवतल, दीर्घ उत्तल, जरा द्विफोकसी`) व डायोप्टर आंकिक (`P = 1/f`)' }, pct: 28 },
    { label: { en: 'Glass Prism (`∠A, ∠D`), VIBGYOR Dispersion, Newton Recombination & Raindrop Rainbow', hi: 'काँच प्रिज़्म (`∠A, ∠D`), `VIBGYOR` विक्षेपण, न्यूटन पुनर्योजन व इंद्रधनुष' }, pct: 24 },
    { label: { en: 'Atmospheric Refraction (`Star Twinkle, +4 min Sun`) & Scattering (`Tyndall, Blue Sky, Red Signal`)', hi: 'वायुमंडलीय अपवर्तन (`तारे टिमटिमाना, +4 min सूर्य`) व प्रकीर्णन (`टिंडल, नीला आकाश, लाल सिग्नल`)' }, pct: 22 },
  ],
  title: {
    en: 'Chapter 10: The Human Eye & the Colourful World',
    hi: 'अध्याय 10: मानव नेत्र तथा रंग-बिरंगा संसार',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Eye Anatomy, Accommodation, Defects & Power Solved, Prism Dispersion & Scattering',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • नेत्र संरचना, समंजन क्षमता, तीनों दृष्टि दोष, प्रिज़्म विक्षेपण, इंद्रधनुष व प्रकीर्णन',
  },
  metrics: {
    pages: 13,
    activities: 2,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 12,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-phy-ch10/hero-human-eye.webp',
    caption: {
      en: 'Visual Optics Bench: `2.3 cm` Human Eye Cross-Section (`Fig 10.1`), Concave/Convex Corrective Spectacles (`Fig 10.2–10.3`), Glass Prism Spectrum Dispersion (`Fig 10.5`), Newton Dual-Prism Recombination & Atmospheric Rayleigh Scattering (`Fig 10.9–10.10`).',
      hi: 'प्रकाशिकी प्रयोगशाला: `2.3 cm` मानव नेत्र अनुप्रस्थ काट (`चित्र 10.1`), अवतल/उत्तल संशोधक चश्मा लेंस, काँच प्रिज़्म से `VIBGYOR` विक्षेपण (`चित्र 10.5`) व वायुमंडलीय प्रकीर्णन।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Eye Structure & Accommodation (`10.1`)**: Diameter **`~2.3 cm`** (`Ex Q9: v is FIXED!`). **Cornea** causes **most refraction**; dark muscular **Iris** adjusts **Pupil size** (`regulating entering light`). Flexible **crystalline lens** casts a **real, inverted image on Retina** (`optic nerve sends electrical signals to brain`). **Ciliary muscles RELAXED** -> lens **thin (`f ↑`, far `∞`)**; **CONTRACTED** -> lens **thick (`f ↓`, near `25 cm`)**. **Cataract**: cloudy milky old-age lens fixed surgically.',
      hi: '**मानव नेत्र व समंजन (`10.1`)**: गोलक व्यास **`~2.3 cm`** (`वस्तु दूर ले जाने पर भी प्रतिबिंब दूरी अपरिवर्तित!`)। **अधिकांश अपवर्तन कॉर्निया** से; **परितारिका (`Iris`) पुतली (`Pupil`) का आकार** नियंत्रित करे। **रेटिना पर वास्तविक व उल्टा प्रतिबिंब**। **पक्ष्माभी शिथिल** → लेंस **पतला (`f↑`)**; **संकुचित** → लेंस **मोटा (`f↓`)**। सामान्य सीमा **`25 cm` से अनंत (`∞`)**। **मोतियाबिंद**: दूधिया धुंधला लेंस (`शल्य चिकित्सा उपचार`)।',
    },
    {
      en: '**Three Vision Defects (`10.2`)**: **Myopia (`निकट-दृष्टि`)**: sees near clearly, far blurry (`in front of retina`, long eyeball / high curvature) -> **Concave (`-ve D`)** (`Ex Q6: 80 cm = -1.25 D`). **Hypermetropia (`दीर्घ-दृष्टि`)**: sees far clearly, near blurry (`behind retina`, small eyeball / long `f`) -> **Convex (`+ve D`)** (`Ex Q7: 1 m = +3.0 D`). **Presbyopia (`ageing`)**: weak ciliary muscles + stiff lens -> **Bifocal (`upper concave, lower convex`)** (`Ex Q5: -0.18 m / +0.67 m`).',
      hi: '**तीन मुख्य दृष्टि दोष (`10.2`)**: **(1) निकटदृष्टि (`Myopia`)**: दूर धुंधला, प्रतिबिंब रेटिना से **पहले** → **अवतल लेंस (`-ve D`, `Q6: -1.25 D`)**। **(2) दीर्घदृष्टि (`Hypermetropia`)**: पास धुंधला (`>25 cm`), प्रतिबिंब रेटिना के **पीछे** → **उत्तल लेंस (`+ve D`, `Q7: +3.0 D`)**। **(3) जरा-दूरदृष्टिता (`Presbyopia`)**: आयु से समंजन क्षीण → **द्विफोकसी (`ऊपर अवतल, नीचे उत्तल`)**।',
    },
    {
      en: '**Prism Dispersion & Rainbow (`10.3–10.4`)**: Triangular prism has **2 triangular bases + 3 tilted rectangular faces (`Angle of Prism ∠A`)**. Refracted ray always **bends TOWARD BASE** (`∠D` = Angle of deviation between incident `PE` & emergent `FS`). White light splits into **VIBGYOR** (`Glass slab fails as opposite sides are parallel!`): **Red (`long λ`) bends LEAST**, **Violet bends MOST**. **Newton 2nd inverted prism** recombines spectrum to **White**. **Rainbow (`opp. Sun`)** = **Refraction + Dispersion + Internal Reflection + Refraction**.',
      hi: '**प्रिज़्म विक्षेपण व इंद्रधनुष (`10.3–10.4`)**: त्रिभुज प्रिज़्म में **3 आयताकार पार्श्व फलक (`प्रिज़्म कोण ∠A`)**। किरण सदैव **आधार की ओर मुड़ती है** (`विचलन कोण ∠D`)। **VIBGYOR विक्षेपण** में **लाल सबसे कम** व **बैंगनी सर्वाधिक मुड़ता** (`स्लैब के समांतर फलकों से विभाजन नहीं`)। **न्यूटन उल्टा प्रिज़्म → पुनः श्वेत प्रकाश**। **इंद्रधनुष (`सूर्य के विपरीत`)**: **अपवर्तन + विक्षेपण + आंतरिक परावर्तन + अपवर्तन**।',
    },
    {
      en: '**Atmospheric Refraction & Scattering (`10.5–10.6`)**: **Stars twinkle** (`distant point sources refracted by shifting air density`) while **Planets do NOT** (`extended sources average to zero`). Sun rises **`2 min` early & sets `2 min` late** (`+4 min day gain + flat solar disc`). **Tyndall Effect**: colloids scatter light; **very fine air molecules scatter BLUE** (`Red λ ≈ 1.8 × Blue λ`), **astronaut sees BLACK sky** (`no atmosphere`), **danger signals RED** (`least scattered by fog/smoke`).',
      hi: '**वायुमंडलीय अपवर्तन व प्रकीर्णन (`10.5–10.6`)**: **तारे टिमटिमाते (`बिंदु-स्रोत`)** पर **ग्रह नहीं (`विस्तृत स्रोत`)**। **अग्रिम सूर्योदय (`2 min पूर्व`) + विलंबित सूर्यास्त (`2 min बाद`)** = कुल **`4 मिनट` लाभ**। **टिंडल प्रभाव**: कोलॉइडी कणों द्वारा प्रकीर्णन; **अत्यंत सूक्ष्म कण नीला (`लाल तरंगदैर्घ्य ≈ 1.8× नीला`)** बिखेरते हैं। **अंतरिक्ष में आकाश काला** (`वायुमंडल नहीं`); **खतरे के संकेत लाल** (`कोहरे से न्यूनतम प्रकीर्णन`)।',
    },
  ],
  sections: [
    {
      id: 'human-eye-anatomy-accommodation',
      number: '10.1',
      flowDiagramKey: 'c10-ch10-blueprint-mindmap',
      diagramKey: 'c10-ch10-human-eye-accommodation',
      title: {
        en: 'The Human Eye (`~2.3 cm`, Fig 10.1), Function of Each Part, Accommodation (`25 cm – ∞`) & Cataract Surgery',
        hi: 'मानव नेत्र संरचना (`व्यास ~2.3 cm`, चित्र 10.1), प्रत्येक अंग का कार्य, समंजन क्षमता (`25 cm – ∞`) व मोतियाबिंद',
      },
      summaryTag: {
        en: 'NCERT Pages 177–179 • Cornea Max Refraction, Iris/Pupil Control, Real Inverted Retinal Image & Ciliary Muscles',
        hi: 'NCERT पृ. 177–179 • कॉर्निया अपवर्तन, आइरिस-पुतली नियंत्रण, रेटिना वास्तविक/उल्टा प्रतिबिंब व पक्ष्माभी पेशी क्रिया',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Camera of Life (`Sec 10.1`, Fig 10.1): How Cornea, Iris, Pupil, Crystalline Lens & Retina Work Together',
            hi: '1. मानव नेत्र की कार्यप्रणाली (`भाग 10.1`, चित्र 10.1): कॉर्निया से दृक् तंत्रिका तक सटीक यात्रा',
          },
          conceptStory: {
            en: 'The human eye works like an automatic autofocus camera using a delicate **==spherical eyeball (`~2.3 cm` diameter)==** that casts images onto a biological screen (`Fig 10.1`):\n1) **Cornea (`कॉर्निया / स्वच्छ मंडल`)**: Transparent outer bulge covering the eye front. **==MOST of the refraction (`अधिकांश अपवर्तन`) of incoming light rays happens at the outer surface of the cornea==** (`remember: cornea bends ~70–80%, crystalline lens only fine-tunes!`).\n2) **Iris (`परितारिका`) & Pupil (`पुतली`)**: Just behind the cornea lies a dark muscular diaphragm called the **Iris (`gives eye its colour & controls the SIZE of the pupil`)**! The **Pupil** is the dark central opening that **==regulates and controls the amount of light entering the eye==** (`Group D Shift 25 also credits Iris controlling light via pupil size`): in **bright sunlight -> pupil contracts**; in a **dim room -> pupil dilates**.\n3) **Crystalline Lens (`अभिनेत्र लेंस`)**: Made of fibrous jelly-like material (`natural **Convex lens**`) that provides fine focal adjustment so objects at varied distances focus sharply on the Retina.\n4) **Retina (`दृष्टिपटल`) & Optic Nerve**: Delicate inner membrane packed with **millions of light-sensitive cells** (`rods for brightness / cones for colour — activated on illumination`). The lens forms an **==INVERTED & REAL image (`वास्तविक तथा उल्टा प्रतिबिंब`)==** on the Retina! Light-sensitive cells generate **electrical signals** carried by the **Optic Nerve** to the brain, which interprets the image upright as we actually see it.',
            hi: 'मानव नेत्र लगभग **==`2.3 cm` व्यास के गोलाकार नेत्र गोलक==** वाला अद्भुत प्राकृतिक कैमरा है (`चित्र 10.1`):\n1) **कॉर्निया (`स्वच्छ मंडल`)**: अग्र भाग की पारदर्शी पतली झिल्ली। **==नेत्र में प्रवेश करने वाले प्रकाश की किरणों का अधिकांश अपवर्तन कॉर्निया के बाहरी पृष्ठ पर ही होता है!==**\n2) **परितारिका (`Iris`) व पुतली (`Pupil`)**: कॉर्निया के ठीक पीछे गहरा पेशीय डायफ्राम **परितारिका** होती है जो **पुतली के आकार (`Size`) को नियंत्रित करती है**। **==पुतली (`Pupil`) नेत्र में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करती है==** (`धूप में पुतली छोटी और मंद प्रकाश में बड़ी हो जाती है`; परीक्षा में पुतली विकल्प न हो तो परितारिका सही मानें — `Group D Shift 25`)!\n3) **अभिनेत्र लेंस (`Crystalline Lens`)**: रेशेदार जेलीवत पदार्थ से बना **उत्तल लेंस**, जो विभिन्न दूरियों की वस्तुओं को रेटिना पर ठीक फोकस करने के लिए केवल सूक्ष्म समायोजन करता है।\n4) **दृष्टिपटल (`Retina`) व दृक् तंत्रिका**: पीछे की कोमल सूक्ष्म झिल्ली जिसमें **अत्यधिक संख्या में प्रकाश-सुग्राही कोशिकाएँ** होती हैं। लेंस रेटिना पर वस्तु का **==वास्तविक तथा उल्टा प्रतिबिंब (`Real & Inverted`)==** बनाता है। प्रकाश पड़ते ही ये कोशिकाएँ **विद्युत सिग्नल (`Electrical Signals`)** उत्पन्न करती हैं, जिन्हें **दृक् तंत्रिका (`Optic Nerve`)** मस्तिष्क तक पहुँचाती है और मस्तिष्क हमें सीधा अनुभव कराता है!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch10/real/human_eye_iris.webp',
            title: { en: 'Real Anatomy Close-Up (`Sec 10.1`): Coloured Muscular Iris Surrounding Central Light-Regulating Pupil', hi: 'वास्तविक नेत्र दृश्य (`भाग 10.1`): रंगीन पेशीय परितारिका (`Iris`) व केंद्रीय प्रकाश-नियंत्रक पुतली (`Pupil`)' },
            caption: {
              en: 'Macro view of cornea, radial iris muscles (which change pupil diameter reflexively from bright glare to dark cinema halls) and central black pupil aperture (NCERT Sec 10.1).',
              hi: 'बाहरी पारदर्शी कॉर्निया के भीतर रंगीन परितारिका (आइरिस) पुतली के छिद्र को छोटा-बड़ा कर नेत्र में प्रवेश करने वाले प्रकाश की मात्रा को स्वचालित नियंत्रित करती है।',
            },
          },
          inlinePyqIds: ['pyq-p10-10'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Power of Accommodation (`10.1.1`, Ciliary Action), `25 cm – ∞` Vision Range & Cataract Surgery (`मोतियाबिंद`)',
            hi: '2. नेत्र की समंजन क्षमता (`10.1.1`, पक्ष्माभी पेशियाँ), `25 cm – ∞` दृष्टि परास एवं मोतियाबिंद (`Cataract`)',
          },
          conceptStory: {
            en: 'Unlike a rigid glass lens camera (`whose image distance moves when focusing`), the eyeball distance from lens to retina is **FIXED (`Ex Q9`: increasing object distance NEVER changes image distance inside eye!)**. Instead, the **Ciliary Muscles (`पक्ष्माभी पेशियाँ`)** alter eye-lens curvature:\n• **Viewing DISTANT Objects (`∞`)**: Ciliary muscles **RELAX (`शिथिल`)** -> lens pulled **THIN (`पतला`, curvature ↓)** -> **Focal length INCREASES (`f ↑`)** -> distant object focuses clearly on Retina!\n• **Viewing NEARBY Objects (`25 cm`)**: Ciliary muscles **==CONTRACT (`सिकुड़ना / संकुचित`, Group D Shift 39!)==** -> lens curvature **INCREASES** -> lens turns **THICKER (`मोटा`)** -> **==Focal length DECREASES (`f ↓`)==** -> nearby book text focuses cleanly on Retina!\n• **==Power of Accommodation (`समंजन क्षमता`)==** (`Ex Q1b, Group D Shift 10`): The ability of the eye lens to adjust its focal length.\n• **Vision Limits (`p.181 Q3`)**: Minimum distance for clear comfortable reading without strain = **==Near Point (`सुस्पष्ट दर्शन की अल्पतम दूरी`: `25 cm`, `Ex Q3c`, NEVER `25 m` or `2.5 cm`!)==**. Farthest clear point for normal eye = **==Far Point (`दूर बिंदु`: Infinity `∞`)==** (`range: 25 cm to ∞`). **Ciliary fatigue**: focal length CANNOT decrease below a minimum limit, so text held `< 25 cm` blurs (`Ex Q8`).\n• **Cataract (`मोतियाबिंद`, p.178)**: In old age, the crystalline lens turns **milky and cloudy**, causing partial or total loss of vision -> restored through **Cataract Surgery (`शल्य चिकित्सा`)**!',
            hi: 'कैमरे में प्रतिबिंब की दूरी बदलनी पड़ती है, परंतु नेत्र में लेंस से रेटिना की **दूरी नियत रहती है (`अभ्यास Q9`: बिंब दूर करने पर भी नेत्र में प्रतिबिंब दूरी नहीं बदलती!)**। इसके बजाय **पक्ष्माभी पेशियाँ (`Ciliary Muscles`)** लेंस की वक्रता बदलती हैं:\n• **दूर की वस्तु (`∞`) देखने पर**: पक्ष्माभी पेशियाँ **शिथिल (`Relaxed`)** हो जाती हैं → लेंस **पतला (`Thin`)** होता है → **फोकस दूरी बढ़ जाती है (`f ↑`)**।\n• **निकट की वस्तु (`25 cm`) देखने पर (`Group D Shift 39!`)**: पक्ष्माभी पेशियाँ **==संकुचित (`सिकुड़`) होती हैं → लेंस की वक्रता बढ़कर लेंस मोटा हो जाता है → फोकस दूरी घट जाती है (`f ↓`)==**!\n• **==समंजन क्षमता (`Accommodation`, अभ्यास Q1b)==**: अभिनेत्र लेंस की वह क्षमता जिसके कारण वह अपनी फोकस दूरी को समायोजित कर लेता है।\n• **सामान्य दृष्टि परास (`पृ. 181 Q3`)**: बिना तनाव के सुस्पष्ट दर्शन की अल्पतम दूरी (`निकट बिंदु`) = **==`25 cm` (`अभ्यास Q3c` — `25 m` या `2.5 cm` नहीं!)==**; तथा दूर बिंदु = **==अनंत (`∞`)==** (`अभ्यास Q8`: `25 cm` से कम पर लेंस फोकस दूरी न्यूनतम सीमा से कम नहीं हो सकती!)।\n• **मोतियाबिंद (`Cataract`)**: कभी-कभी **वृद्धावस्था में क्रिस्टलीय लेंस दूधिया तथा धुंधला** हो जाता है → इसे **मोतियाबिंद की शल्य चिकित्सा (`Surgery`)** से ठीक कर दृष्टि वापस लौटाई जाती है!',
          },
          viralTrick: {
            en: '**Ciliary Mnemonic “Co-Co-Thi-Dec”**: **Co**ntracted Ciliary -> **Co**nvex thicker lens -> **Dec**reased focal length `f` (for **Near** object)! **Far = Re-Thin-In** (**Re**laxed -> **Thin** -> `f` **In**creases)! Remember **`25 cm`** in centimetres!',
            hi: '**शॉर्टकट “पा-सं-मो-घ”**: **पा**स देखना → पेशी **सं**कुचित → लेंस **मो**टा → फोकस दूरी **घ**टी (`f↓`)! **दूर-शि-प-ब**: **शि**थिल → **प**तला → फोकस **ब**ढ़ी (`f↑`)! निकट बिंदु = **`25 cm`** (मीटर नहीं!)।',
          },
          inlinePyqIds: ['pyq-p10-2', 'pyq-p10-14'],
        },
      ],
    },
    {
      id: 'vision-defects-lens-power-donation',
      number: '10.2',
      svgLab: 'human-eye-prism-lab',
      diagramKey: 'c10-ch10-defects-correction-diagram',
      title: {
        en: 'Three Refractive Defects (`Myopia, Hypermetropia, Presbyopia`), `P = 1/f` Numericals, Two-Eyes Benefit & Eye Donation Box',
        hi: 'दृष्टि के तीन अपवर्तक दोष (`निकट, दीर्घ, जरा-दूरदृष्टिता`), `P = 1/f` आंकिक, दो नेत्रों का महत्व एवं नेत्र दान नियम',
      },
      summaryTag: {
        en: 'NCERT Pages 179–182 • Solved Ex Q5–Q7 (`-1.25 D, +3.0 D, -5.5/+1.5 D`), `180°` Two-Eye Field & `4–6 Hour` Eye Donation Facts',
        hi: 'NCERT पृ. 179–182 • अवतल/उत्तल/द्विफोकसी लेंस, `पृ. 181 Q2 (1.2 m)`, `Q5–Q7` आंकिक, `180°` क्षेत्र व नेत्र दान बॉक्स',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Complete Breakdown of Myopia, Hypermetropia & Presbyopia (`Fig 10.2–10.3`) + Power Formula Trap',
            hi: '1. निकट-दृष्टि (`Myopia`), दीर्घ-दृष्टि (`Hypermetropia`) एवं जरा-दूरदृष्टिता (`Presbyopia`) — कारण व संशोधन लेंस',
          },
          conceptStory: {
            en: 'When eye accommodation weakens gradually, refraction errors blur vision into **3 main refractive defects** (`use Interactive Lab Tab 2 right below to test every Exercise numerical!`):\n• **(i) Myopia / Near-sightedness (`निकट-दृष्टिता`, Fig 10.2)**: Person sees **nearby objects clearly**, **CANNOT see distant objects distinctly** (`far point comes closer than ∞`, e.g. blackboard blurred from back bench — **p.181 Q4**). **Why?** Image of distant object forms **==IN FRONT OF THE RETINA (`दृष्टिपटल के सामने`)==**, NOT on it! **2 Causes**: **(a)** Excessive curvature of eye lens (`short f`) OR **(b)** Elongation of eyeball. **Correction**: **==Concave (`diverging / अवतल`) lens (`Negative power -D`)==** (`Ex Q6`: far point `80 cm = -0.8 m` -> `f = -0.8 m`, **`P = -1.25 D`**; `p.181 Q2`: far point `1.2 m` -> **`Concave lens, P = -0.83 D`**)!\n• **(ii) Hypermetropia / Far-sightedness (`दूर-दृष्टिता`, Fig 10.3)**: Sees **distant objects clearly**, **CANNOT see nearby objects cleanly** (`near point shifts > 25 cm`). **Why?** Light from near objects converges **==BEHIND THE RETINA (`दृष्टिपटल के पीछे`)==**! **2 Causes**: **(a)** Focal length of eye lens is too long OR **(b)** Eyeball has become too small. **Correction**: **==Convex (`converging / उत्तल`) lens (`Positive power +D`)==** (`Ex Q7`: near point `1 m = -100 cm`, normal `u = -25 cm` -> `1/f = -1/100 + 1/25 = +3/100` -> `f = +1/3 m` -> **`P = +3.0 D`**)!\n• **(iii) Presbyopia (`जरा-दूरदृष्टिता`, Group D Shift 36)**: Ageing makes near point recede due to **(a) gradual weakening of ciliary muscles** AND **(b) diminishing flexibility of crystalline lens**. People who suffer **BOTH Myopia + Hypermetropia** wear **==Bi-focal lenses (`द्विफोकसी लेंस`)==**: **UPPER part = Concave (distant) & LOWER part = Convex (reading)** (`also contact lenses / surgical correction`).',
            hi: 'दृष्टि के तीन प्रमुख अपवर्तन दोष जिन्हें हम **उचित क्षमता के गोलीय लेंस** से ठीक करते हैं (`नीचे 3-टैब लैब में सभी आंकिक लाइव जाँचें!`):\n• **(i) निकट-दृष्टि दोष (`Myopia / Near-sightedness`, चित्र 10.2)**: **पास की वस्तु स्पष्ट दिखती है**, परंतु **दूर की वस्तु स्पष्ट नहीं दिखती** (`जैसे पीछे की बेंच से श्यामपट्ट धुंधला दिखना — पृ. 181 Q4`)! कारण: दूर की वस्तु का प्रतिबिंब **==रेटिना के सामने (`In front of retina`) बन जाता है==** — दो वजहें: **(1)** अभिनेत्र लेंस की **वक्रता का अत्यधिक होना**, या **(2)** नेत्र गोलक का **लंबा हो जाना**। **संशोधन**: उपयुक्त क्षमता का **==अवतल (`अपसारी / Concave`) लेंस (`ऋणात्मक शक्ति -D`)==** (`अभ्यास Q6`: `80 cm` → **`P = -1.25 D`**; `पृ. 181 Q2`: `1.2 m` → **अवतल लेंस, `-0.83 D`**)!\n• **(ii) दीर्घ-दृष्टि दोष (`Hypermetropia / Far-sightedness`, चित्र 10.3)**: **दूर की वस्तु स्पष्ट दिखती है**, परंतु **निकट रखी वस्तु सुस्पष्ट नहीं दिखती** (`निकट बिंदु 25 cm से दूर हट जाता है`)! कारण: पास से आने वाली किरणें **==रेटिना के पीछे (`Behind retina`) फोकस होती हैं==** — दो वजहें: **(1)** अभिनेत्र लेंस की **फोकस दूरी अत्यधिक हो जाना**, या **(2)** नेत्र गोलक का **छोटा हो जाना**। **संशोधन**: उपयुक्त क्षमता का **==उत्तल (`अभिसारी / Convex`) लेंस (`धनात्मक शक्ति +D`)==** (`अभ्यास Q7`: `v = -1 m`, `u = -25 cm` → **`P = +3.0 D`**)!\n• **(iii) जरा-दूरदृष्टिता (`Presbyopia`)**: आयु बढ़ने पर **पक्ष्माभी पेशियों के धीरे-धीरे दुर्बल होने** तथा **क्रिस्टलीय लेंस के लचीलेपन में कमी** से निकट बिंदु दूर हो जाता है। दोनों दोष (`निकट व दूर`) साथ हों तो **==द्विफोकसी (`Bi-focal`) चश्मा==**: **ऊपरी भाग = अवतल लेंस (`दूर देखने हेतु`), निचला भाग = उत्तल लेंस (`पढ़ने हेतु`)** (`कॉन्टेक्ट लेंस या शल्य हस्तक्षेप भी संभव`)।',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch10/real/corrective_lenses.webp',
            title: { en: 'Real Optical Remedies (`Sec 10.2`): Concave (`Myopia -D`) vs Convex (`Hypermetropia +D`) Lenses', hi: 'वास्तविक संशोधक चश्मे (`भाग 10.2`): अवतल (`निकटदृष्टि -D`) बनाम उत्तल (`दीर्घदृष्टि +D`) व द्विफोकसी' },
            caption: {
              en: 'Ground refractive lenses shift rays before reaching the cornea: Concave diverges rays backward onto retina (Ex Q6: -1.25 D), while Convex pre-converges rays forward from retina (Ex Q7: +3.0 D).',
              hi: 'चश्मे के लेंस कॉर्निया तक पहुँचने से पहले किरणों को मोड़कर ठीक रेटिना पर फोकस कराते हैं (उत्तल लेंस से अतिरिक्त अभिसारी क्षमता, अवतल लेंस से अपसारी विस्तार)।',
            },
          },
          inlinePyqIds: ['pyq-p10-6', 'pyq-p10-13', 'pyq-p10-17', 'pyq-p10-20'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. High-Yield NCERT Orange Boxes (`p.180 & p.182`): Why We Have 2 Eyes & Eye Donation Protocol (`3.5 Cr / 4–6 Hrs`)',
            hi: '2. NCERT विशेष परीक्षा बॉक्स (`पृ. 180 व 182`): हमारे दो नेत्र क्यों हैं? एवं नेत्र दान के सभी आँकड़े (`4–6 घंटे`)',
          },
          conceptStory: {
            en: 'Railway CBT examiners love picking questions directly from these two NCERT boxes (`do NOT skip a single number!`):\n• **Box 1 (`p.180`): Why 2 Eyes Instead of 1?**\n  - **1 Eye** gives horizontal field of view of about **`150°`**.\n  - **==2 Eyes widen horizontal field of view to `180°`==** (`making faint-light detection stronger + eliminating flat 2D look via two slightly different retinal views -> **3D depth perception (`तीसरी विमा गहराई`)**!`). *Note: Prey animals have eyes on opposite sides of head for widest view; humans have front-facing eyes for wider 3D overlap!*\n• **Box 2 (`p.182`): Eye Donation Facts (`Think About It`)**:\n  - India/world statistics cited in NCERT: ~**`3.5 crore`** people suffer blindness in developing world; **`45 lakh`** due to **corneal blindness**, **60% of whom are children under `12` years**!\n  - **==Eyes MUST be removed within `4–6 hours` after death==** (`takes only **10–15 minutes**, causes NO facial disfigurement`).\n  - **One pair of donated eyes** can restore vision to **==up to `4` corneal-blind people==**!\n  - **Who CAN donate?** Anyone of any age/sex — even **people wearing spectacles, cataract patients, diabetics, hypertension, asthma & non-communicable disease patients CAN donate**!\n  - **==Who CANNOT donate (`Contraindications`)?==** Persons infected with or dying from **AIDS, Hepatitis B or C, Rabies (`जलभीति`), Acute Leukaemia, Tetanus, Cholera, Meningitis, or Encephalitis (`मस्तिष्क शोथ`)**.',
            hi: 'NCERT के इन दोनों विशेष बॉक्सों के आँकड़े सीधे रेलवे परीक्षाओं में पूछे जाते हैं (`एक भी तथ्य न छोड़ें!`):\n• **बॉक्स 1 (`पृ. 180`): हमारे दो नेत्र क्यों, एक क्यों नहीं?**\n  - **एक नेत्र** से क्षैतिज दृष्टि क्षेत्र लगभग **`150°`**, जबकि **==दो नेत्रों से क्षैतिज दृष्टि क्षेत्र बढ़कर `180°` हो जाता है==**!\n  - दोनों नेत्रों के बीच कुछ सेंटीमीटर की दूरी होने से मस्तिष्क को दो थोड़े भिन्न चित्र मिलते हैं, जिन्हें मिलाकर **==तीसरी विमा (3D गहराई) का यथार्थ बोध==** होता है (`तथा मंद प्रकाश में संवेदनशीलता बढ़ती है`)।\n• **बॉक्स 2 (`पृ. 182`): नेत्र दान के सुनहरे आँकड़े (`इस पर विचार कीजिए`)**:\n  - विकासशील विश्व में **~`3.5 करोड़`** दृष्टिहीन में से **`45 लाख`** **कॉर्निया अंधता** से पीड़ित हैं (`इनमें **60%** `12 वर्ष` से छोटे बच्चे हैं!`)।\n  - **==मृत्यु के `4–6 घंटे` के भीतर नेत्र निकाल लेने चाहिए==** (`केवल **10–15 मिनट** का सरल ऑपरेशन, चेहरे पर कोई विरूपण नहीं`)।\n  - **==एक जोड़ी दान किए गए नेत्रों से `4` कॉर्निया अंधे व्यक्तियों तक को दृष्टि मिल सकती है!==**\n  - **कौन दान कर सकता है?** किसी भी आयु/लिंग का व्यक्ति — यहाँ तक कि **चश्मा पहनने वाले, मोतियाबिंद, मधुमेह (`Diabetes`), उच्च रक्तचाप व दमा रोगी भी नेत्र दान कर सकते हैं**!\n  - **==कौन दान नहीं कर सकता?==** **एड्स (`AIDS`), हेपेटाइटिस B या C, रेबीज (`जलभीति`), तीव्र ल्यूकीमिया, टिटनेस, हैजा (`Cholera`), तानिकाशोथ (`Meningitis`) या मस्तिष्क शोथ (`Encephalitis`)** से संक्रमित व्यक्ति नेत्र दान नहीं कर सकते!',
          },
          viralTrick: {
            en: '**Defect & Donation Shortcut**: **“My-o-Con / Hy-per-Conv”** (**My**opia -> **Con**cave **`-D`**, image **in front**; **Hyper**metropia -> **Conv**ex **`+D`**, image **behind**)! Eye box: **`150° -> 180°`**, remove within **`4–6 hrs`** -> cures **`4` people**!',
            hi: '**दोष ट्रिक “नि-अव / दी-उ”**: **नि**कट = **अव**तल (`-D`, पहले प्रतिबिंब) | **दी**र्घ = **उ**त्तल (`+D`, पीछे प्रतिबिंब)! बॉक्स ट्रिक: **1 आँख `150°` → 2 आँख `180°`**; दान समय **`4–6 घंटे`** → **`4` व्यक्तियों** को रोशनी!',
          },
        },
      ],
    },
    {
      id: 'prism-dispersion-rainbow-scattering',
      number: '10.3–10.6',
      diagramKey: 'c10-ch10-prism-rainbow-scattering-diagram',
      title: {
        en: 'Prism Refraction (`∠A, ∠D`), VIBGYOR Dispersion, Newton Recombination, Rainbow (`10.4`), Atmospheric Refraction (`10.5`) & Scattering (`10.6`)',
        hi: 'प्रिज़्म अपवर्तन (`∠A, ∠D`), `VIBGYOR` विक्षेपण, न्यूटन पुनर्योजन, इंद्रधनुष (`10.4`), वायुमंडलीय अपवर्तन (`10.5`) व प्रकीर्णन (`10.6`)',
      },
      summaryTag: {
        en: 'NCERT Pages 181–187 • Activities 10.1–10.2, Fig 10.4–10.10, +4 Min Day Gain, Tyndall Colloids & Blue Sky / Red Danger Signals',
        hi: 'NCERT पृ. 181–187 • क्र. 10.1–10.2, चित्र 10.4–10.10, +4 मिनट दिन वृद्धि, टिंडल प्रभाव, नीला आकाश व लाल खतरे के सिग्नल',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Refraction Through Triangular Prism (`Act 10.1`, Fig 10.4) & White Light Dispersion (`Act 10.2`, VIBGYOR & Newton 10.6)',
            hi: '1. काँच के त्रिभुज प्रिज़्म से अपवर्तन (`क्र. 10.1`), श्वेत प्रकाश विक्षेपण (`क्र. 10.2` — VIBGYOR) व न्यूटन द्वि-प्रिज़्म प्रयोग',
          },
          conceptStory: {
            en: 'A triangular glass prism (`10.3`) has **two triangular bases and three rectangular lateral surfaces (`पाश्‍वर्-पृष्‍ठ`) inclined to each other**: the angle between its two lateral faces = **==Angle of the Prism (`∠A`, Group D Shift 12 & Tech Shift 1)==**.\n• **Activity 10.1 Ray Rules (`Fig 10.4`)**:\n  - First face (`Air -> Glass`): Incident ray `PE` bends **towards normal** (`EF`). Second face (`Glass -> Air`): `EF` bends **away from normal** -> emergent ray `FS`. Net effect: **==the refracted/emergent ray ALWAYS bends TOWARD THE BASE (`आधार की ओर`) of the prism (`Group D Shift 15`)==**!\n  - Because opposite faces are **NOT parallel (`गैर-समानांतर`)** (`unlike a rectangular glass slab — Group D Shift 30!`), `FS` tilts away from `PE` by **==Angle of Deviation (`∠D`, विचलन कोण — Group D Shift 20)==** (`∠i + ∠e = ∠A + ∠D`).\n• **Dispersion & Spectrum (`10.4`, Act 10.2, Fig 10.5)**: Splitting of white light into its **7 component colours (`VIBGYOR`: Violet, Indigo, Blue, Green, Yellow, Orange, Red)** = **==Dispersion (`विक्षेपण`)==**; the distinct coloured band = **Spectrum (`स्पेक्ट्रम`)**. Why do colours split? Different wavelengths (`speeds in glass`) bend by different angles: **==Red (`longest λ`) bends the LEAST | Violet bends the MOST (`max ∠D`, Tech Shifts 4 & 11!)==** (`trap Check: among Yellow, Green, Blue, Violet -> **Yellow** bends least — Tech Shift 23!`).\n• **Isaac Newton’s Double-Prism Proof (`Fig 10.6`)**: First to get sunlight spectrum with a glass prism (**Tech Shift 18**). Placing a second identical **prism in an INVERTED orientation** (`Group D Shift 19`) **recombined all 7 colours back into a single WHITE beam** (`proving sunlight consists of 7 colours — splitting any further didn’t yield new colours!`).\n• **Natural Rainbow (`Fig 10.7–10.8`)**: Forms after rain **ALWAYS in the direction OPPOSITE to the Sun (`सूर्य की विपरीत दिशा`)**! Tiny suspended raindrops act like tiny prisms undergoing: **(1) Refraction + Dispersion -> (2) Internal Reflection -> (3) Refraction again out to observer’s eye**.',
            hi: 'काँच के त्रिभुज प्रिज़्म (`10.3`) में **दो त्रिभुजाकार आधार तथा परस्पर झुके हुए तीन आयताकार पार्श्व-पृष्ठ** होते हैं — इसके दो पार्श्व फलकों के बीच का कोण **==प्रिज़्म कोण (`∠A`, Tech Shift 1 & Group D Shift 12)==** कहलाता है:\n• **प्रिज़्म किरण नियम (`क्रियाकलाप 10.1`, चित्र 10.4)**: आपतित किरण `PE` पहले पृष्ठ पर वायु से काँच में **अभिलंब की ओर**, तथा दूसरे पृष्ठ पर काँच से वायु में **अभिलंब से दूर** मुड़ती है → दोनों झुकाव मिलकर **==किरण सदैव प्रिज़्म के आधार की ओर मुड़ती है (`Group D Shift 15`)==**! चूँकि प्रिज़्म के पृष्ठ **समानांतर नहीं (`गैर-समानांतर`, Shift 30)** होते, अतः निर्गत किरण `FS` और आपतित किरण `PE` की दिशा के बीच बने कोण को **==विचलन कोण (`∠D`)==** कहते हैं (`∠i + ∠e = ∠A + ∠D`)।\n• **विक्षेपण व स्पेक्ट्रम (`10.4`, क्र. 10.2, चित्र 10.5)**: श्वेत प्रकाश का अवयवी **7 वर्णों (`VIBGYOR` — बैंगनी, जामुनी, नीला, हरा, पीला, नारंगी, लाल)** में विभाजन **विक्षेपण (`Dispersion`)** कहलाता है। **==लाल प्रकाश सबसे कम (`न्यूनतम विचलन`), जबकि बैंगनी सबसे अधिक मुड़ता है (`अधिकतम विचलन`, Tech Shift 4, 11)==** *(जाल प्रश्न `Tech Shift 23`: बैंगनी, हरा, नीला, पीला विकल्पों में सबसे कम **पीला** मुड़ेगा!)*\n• **सर आइजैक न्यूटन प्रयोग (`चित्र 10.6`)**: सूर्य के प्रकाश का स्पेक्ट्रम प्राप्त करने हेतु काँच का प्रिज़्म उपयोग करने वाले प्रथम वैज्ञानिक! उन्होंने पहले प्रिज़्म के पास दूसरा सर्वसम प्रिज़्म **==उल्टी (`विपरीत`) स्थिति में रखा → दूसरे प्रिज़्म से पुनः एकल श्वेत प्रकाश प्राप्त हुआ (`Group D Shift 19`)==**, जिससे सिद्ध हुआ कि सूर्य का प्रकाश 7 वर्णों से बना है।\n• **प्राकृतिक इंद्रधनुष (`चित्र 10.7–10.8`)**: वर्षा के बाद **==सदैव सूर्य के विपरीत दिशा में==** बनता है! जल की सूक्ष्म बूँदें छोटे प्रिज़्म की तरह तीन प्रक्रियाएँ करती हैं: **(1) अपवर्तन व विक्षेपण → (2) आंतरिक परावर्तन → (3) बाहर निकलते समय पुनः अपवर्तन**!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch10/real/prism_dispersion.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch10/real/natural_rainbow.webp',
            title: { en: 'Glass Prism Dispersion (`Fig 10.5`) & Natural Post-Rain Sky Rainbow (`Fig 10.7–10.8`)', hi: 'काँच प्रिज़्म से `VIBGYOR` विक्षेपण (`चित्र 10.5`) एवं वर्षा के बाद सूर्य-विपरीत इंद्रधनुष (`चित्र 10.7–10.8`)' },
            caption: {
              en: 'Left: White light separates into VIBGYOR inside a triangular prism because shorter Violet wavelengths bend strongly toward base while longer Red deviates least. Right: Million suspended water droplets act as micro-prisms splitting sunlight opposite the Sun.',
              hi: 'बायाँ: प्रिज़्म के झुके फलकों के कारण बैंगनी सर्वाधिक और लाल न्यूनतम विचलित होकर सात रंगों का स्पेक्ट्रम रचते हैं। दायाँ: वायुमंडल में सूक्ष्म जल बूँदें अपवर्तन, विक्षेपण व आंतरिक परावर्तन से इंद्रधनुष बनाती हैं।',
            },
          },
          inlinePyqIds: ['pyq-p10-4', 'pyq-p10-5', 'pyq-p10-7', 'pyq-p10-8', 'pyq-p10-9', 'pyq-p10-12', 'pyq-p10-17', 'pyq-p10-18', 'pyq-p10-20', 'pyq-p10-21'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Atmospheric Refraction (`10.5`: Stars vs Planets, `+4 Min` Sun) & Scattering / Tyndall (`10.6`: Blue Sky, Black Space, Red Signals)',
            hi: '2. वायुमंडलीय अपवर्तन (`10.5`: तारे, ग्रह, `+4 min` सूर्य) एवं टिंडल प्रभाव व प्रकाश प्रकीर्णन (`10.6`: नीला आकाश, लाल सिग्नल, काला अंतरिक्ष)',
          },
          conceptStory: {
            en: 'Look closely at how Earth’s atmosphere bends AND scatters light (`Sec 10.5–10.6`, **EVERY Railway Science shift favorite**):\n• **10.5 Atmospheric Refraction (`gradually increasing refractive index toward Earth surface`, Fig 10.9–10.10)**:\n  1) **Why do Stars Twinkle (`तारे क्यों टिमटिमाते हैं?`, Ex Q10)?** Stars are so distant they act as **point-sized sources (`बिंदु-स्रोत`)**; constantly shifting atmospheric density refracts starlight slightly along changing paths, making apparent position waver and brightness flicker (`sometimes bright, sometimes faint` — **Group D Shift 26, Tech Shift 9**). Also stars near horizon appear **slightly HIGHER** than true height (`Fig 10.9`)!\n  2) **Why DON’T Planets Twinkle (`Ex Q11`)?** Planets are much closer -> act as **extended sources (`collection of many point sources`)**: flickering variations from individual points **average out to ZERO (`शून्य`)**!\n  3) **==Advance Sunrise (`2 min before`) & Delayed Sunset (`2 min after`) (`Fig 10.10`, Tech Shift 1)==**: Atmospheric refraction bends sunlight downward over the horizon so **daylight extends by `2 + 2 = ~4 minutes`** and the Sun disc appears **flattened (`चपटी चक्रिका`)** at sunrise/sunset!\n• **10.6 Scattering of Light & Tyndall Effect (`10.6.1–10.6.2`)**:\n  1) **Tyndall Effect (`टिंडल प्रभाव`)**: True solutions (`invisible beam`) vs **Colloidal particles** (`smoke, water droplets, dust, air molecules` in dense forest canopy mist) -> **==Scattering by colloidal particles makes light path visible (`Tech Shifts 3, 6, 15`)==**!\n  2) **Particle Size Rule (`ALP 2025 Shift 3 & Tech Shift 5`)**: **Very fine particles** scatter mainly **==BLUE (`short wavelength`, Group D Shift 11)==**; larger particles scatter **longer wavelengths**; **very large particles** make scattered light appear **WHITE**!\n  3) **==Why Clean Sky is BLUE?==** **Red light wavelength is `~1.8 times` greater than Blue light**! Fine air molecules scatter short-wavelength **BLUE** most strongly into our eyes (`Tech Shift 15`).\n  4) **Why Space/High-Altitude Sky looks BLACK (`Ex Q12`)?** Above atmosphere (`for astronauts`), there are **NO air molecules -> NO scattering of sunlight**, so the sky appears dark/black!\n  5) **==Why Danger Signals are RED (`Tech Shift 23`)?==** **Red light is LEAST scattered by fog or smoke**, remaining visibly sharp over long distances!',
            hi: 'पृथ्वी के वायुमंडल की दो महान प्रकाशीय घटनाएँ (`भाग 10.5–10.6`, सर्वाधिक रेलवे PYQ स्रोत):\n• **10.5 वायुमंडलीय अपवर्तन (`ऊपर विरल से नीचे सघन होता बढ़ता अपवर्तनांक`)**:\n  1) **तारे टिमटिमाते क्यों हैं? (`अभ्यास Q10`, चित्र 10.9)**: अत्यंत दूर होने से तारे **प्रकाश के बिंदु-स्रोत (`Point source`)** जैसे हैं। वायुमंडल की भौतिक अवस्थाएँ (`ताप/घनत्व`) अस्थायी रहने से आँखों में प्रवेश करने वाली किरणों का पथ व मात्रा बदलती रहती है (`तभी चमक, तभी धुंधला = टिमटिमाहट`)! साथ ही क्षितिज के निकट तारा वास्तविक स्थिति से **कुछ ऊँचाई पर** दिखता है।\n  2) **ग्रह क्यों नहीं टिमटिमाते? (`अभ्यास Q11`)**: पृथ्वी के काफी पास होने से ग्रह **विस्तृत स्रोत (`अनेक बिंदु-स्रोतों का संग्रह`)** माने जाते हैं, अतः सभी से आने वाले प्रकाश में कुल परिवर्तन का **औसत मान शून्य (`0`)** हो जाता है!\n  3) **==अग्रिम सूर्योदय व विलंबित सूर्यास्त (`चित्र 10.10`, Tech Shift 1)==**: अपवर्तन के कारण सूर्य वास्तविक सूर्योदय से **लगभग `2 मिनट पूर्व`** दिखने लगता है व वास्तविक सूर्यास्त के **लगभग `2 मिनट बाद`** तक दिखता है (`कुल 4 मिनट दिन वृद्धि + सूर्योदय/सूर्यास्त पर चपटी चक्रिका`)!\n• **10.6 प्रकाश का प्रकीर्णन एवं टिंडल प्रभाव (`10.6.1–10.6.2`)**:\n  1) **टिंडल प्रभाव (`Tech Shifts 3, 6, 15`)**: घने जंगल के वितान (`कुहासे की बूँदों`) या धुएँ भरे कमरे में छिद्र से आते समय **कोलॉइडी कणों द्वारा प्रकाश के प्रकीर्णन** से किरण-पुंज का मार्ग चमक उठता है (`वास्तविक विलयन में मार्ग नहीं दिखता`)!\n  2) **कण आकार नियम (`ALP 2025 Shift 3`, `Tech Shift 5`)**: प्रकीर्णित रंग **कणों के आकार पर निर्भर** करता है — **==अत्यंत सूक्ष्म कण मुख्यतः नीले (`कम तरंगदैर्घ्य`), बड़े कण अधिक तरंगदैर्घ्य, और बहुत बड़े कण श्वेत (`White`) प्रकाश बिखेरते हैं!==**\n  3) **==स्वच्छ आकाश नीला क्यों?==** **लाल रंग की तरंगदैर्घ्य नीले की अपेक्षा लगभग `1.8 गुनी` होती है**! अतः वायु के सूक्ष्म अणु छोटी तरंगदैर्घ्य वाले **नीले रंग को अधिक प्रबलता से प्रकीर्णित** करते हैं (`Tech Shift 15`)।\n  4) **अंतरिक्ष यात्रियों को आकाश काला क्यों? (`अभ्यास Q12`)**: अत्यधिक ऊँचाई / अंतरिक्ष में **वायुमंडल न होने से कोई प्रकीर्णन नहीं हो पाता**, अतः आकाश काला प्रतीत होता है!\n  5) **==खतरे के संकेत (`सिग्नल`) लाल क्यों (`Tech Shift 23`)?==** क्योंकि **लाल रंग कोहरे या धुएँ से सबसे कम प्रकीर्णित (`Least scattered`) होता है** और दूर से भी स्पष्ट लाल दिखाई देता है!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch10/real/tyndall_forest.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch10/real/blue_sky_sunset.webp',
            title: { en: 'Real Nature Physics (`Sec 10.6`): Canopy Mist Tyndall Scattering & Rayleigh Blue Sky vs Red Horizon', hi: 'प्रकृति में प्रकीर्णन (`भाग 10.6`): जंगल कुहासे में टिंडल प्रभाव व नीला आकाश (`Rayleigh नियम`)' },
            caption: {
              en: 'Left: Mist droplets in a dense forest canopy illuminate sunbeam paths cleanly via the Tyndall Effect (Sec 10.6.1). Right: Fine nitrogen/oxygen molecules scatter 1.8x shorter Blue wavelengths across clean skies while letting longest Red pierce horizon haze.',
              hi: 'बायाँ: जंगल के कुहासे की सूक्ष्म बूँदों द्वारा टिंडल प्रकीर्णन से सूर्य किरण पथ स्पष्ट दिखता है। दायाँ: सूक्ष्म वायु अणु नीला प्रकाश (कम λ) प्रबल प्रकीर्ण करते हैं, जबकि लाल रंग (1.8× λ) सर्वाधिक दूरी तय करता है।',
            },
          },
          inlinePyqIds: ['pyq-p10-1', 'pyq-p10-3', 'pyq-p10-11', 'pyq-p10-16', 'pyq-p10-19', 'pyq-p10-23', 'pyq-p10-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Myopia (`In Front, Concave -D`) vs Hypermetropia (`Behind, Convex +D`) vs Presbyopia (`Age, Bifocal`)', hi: 'निकट-दृष्टि (`पहले, अवतल -D`) बनाम दीर्घ-दृष्टि (`पीछे, उत्तल +D`) बनाम जरा-दृष्टि (`आयु, द्विफोकसी`)' },
      left: { en: 'MYOPIA (`Near clear, Far blurry`): Focus IN FRONT of Retina (curved lens/long eye) -> CONCAVE (`-ve D`)', hi: 'निकट-दृष्टि: पास साफ, दूर धुंधला → प्रतिबिंब रेटिना के सामने → अवतल लेंस (`-ve D`)' },
      right: { en: 'HYPERMETROPIA (`Far clear, Near blurry`): Focus BEHIND Retina (long f/small eye) -> CONVEX (`+ve D`); Presbyopia = Ageing Bi-focal', hi: 'दीर्घ-दृष्टि: दूर साफ, पास धुंधला → प्रतिबिंब रेटिना के पीछे → उत्तल लेंस (`+ve D`); जरा-दृष्टि = द्विफोकसी' },
    },
    {
      pair: { en: 'Glass Prism Dispersion vs Parallel Rectangular Glass Slab (`Group D Shift 30`)', hi: 'त्रिभुज काँच प्रिज़्म विक्षेपण बनाम समांतर आयताकार काँच स्लैब (`Group D 30`)' },
      left: { en: 'Glass Slab: opposite refracting faces are PARALLEL -> white colours cancel back into parallel displaced white ray', hi: 'काँच स्लैब: विपरीत अपवर्तक पृष्ठ समानांतर होते हैं → सभी वर्ण समानांतर रह कर पुनः श्वेत किरण देते हैं' },
      right: { en: 'Prism: lateral faces are INCLINED at ∠A (`non-parallel`) -> emergent colours fan out cleanly & Newton 2nd inverted prism recombines!', hi: 'प्रिज़्म: पार्श्व फलक प्रिज़्म कोण ∠A पर झुके (गैर-समानांतर) → सात वर्ण स्पष्ट अलग होते हैं!' },
    },
    {
      pair: { en: 'Dispersion (`Prism Splitting into VIBGYOR`) vs Scattering (`Colloid Deflection = Tyndall / Sky`)', hi: 'विक्षेपण (`प्रिज़्म द्वारा VIBGYOR विभाजन`) बनाम प्रकीर्णन (`कोलॉइडी टिंडल / नीला आकाश`)' },
      left: { en: 'Dispersion: Splitting white light into 7 colours inside prism/raindrop (`Violet bends max, Red bends least`)', hi: 'विक्षेपण (`10.4`): श्वेत प्रकाश का प्रिज़्म से गुजर कर सात अवयवी वर्णों में बँटना (`बैंगनी सर्वाधिक, लाल कम`)' },
      right: { en: 'Scattering (`10.6`): Fine atmospheric/colloidal particles redirect light (`Tyndall effect, Blue sky, Red danger signal`)', hi: 'प्रकीर्णन (`10.6`): सूक्ष्म कणों द्वारा प्रकाश बिखेरना (`टिंडल प्रभाव, आकाश नीला, खतरे का सिग्नल लाल`)' },
    },
    {
      pair: { en: 'Increasing Object Distance (`Ex Q9`) vs Eye Focusing (`Accommodation` — `Ex Q1`)', hi: 'बिंब दूरी बढ़ाने पर प्रतिबिंब दूरी (`अभ्यास Q9`) बनाम लेंस फोकस दूरी (`समंजन`)' },
      left: { en: 'Moving object from 1 m to 50 m: Focal length INCREASES slightly (ciliary relaxes),', hi: 'वस्तु को आँख से दूर ले जाने पर: पक्ष्माभी पेशी शिथिल हो नेत्र लेंस की फोकस दूरी थोड़ा बढ़ती है,' },
      right: { en: 'BUT Image Distance (v) inside eye stays FIXED (~2.3 cm, lens-to-retina spacing cannot change!)', hi: 'परंतु नेत्र के भीतर प्रतिबिंब दूरी (v) सदैव अपरिवर्तित रहती है क्योंकि लेंस से रेटिना की दूरी नियत है!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Prism Sunlight Spectrum Pioneer', hi: 'प्रिज़्म स्पेक्ट्रम जनक (`चित्र 10.6`)' },
      name: { en: 'Sir Isaac Newton (`1643–1727`)', hi: 'सर आइजैक न्यूटन (`1643–1727`)' },
      country: { en: 'England (`NCERT Sec 10.4`)', hi: 'इंग्लैंड (`NCERT भाग 10.4`)' },
      fact: {
        en: 'First scientist to obtain **sunlight’s spectrum using a glass prism** (`Tech 2024 Shifts 2 & 18`), then placed an **inverted identical second prism** proving white light is a **mixture of 7 colours**!',
        hi: 'सूर्य के प्रकाश का स्पेक्ट्रम प्राप्त करने के लिए काँच के प्रिज़्म का उपयोग करने वाले प्रथम वैज्ञानिक! दूसरे उल्टे प्रिज़्म द्वारा सभी रंगों को पुनः **श्वेत प्रकाश** में संयोजित किया।',
      },
    },
    {
      badge: { en: 'Atmospheric Fine-Particle Scattering', hi: 'कण-आकार प्रकीर्णन व टिंडल (`भाग 10.6`)' },
      name: { en: 'John Tyndall (`1820–1893`) & Rayleigh Limit', hi: 'जॉन टिंडल (`1820–1893`) व प्रकाश प्रकीर्णन' },
      country: { en: 'Ireland / Britain (`NCERT Sec 10.6`)', hi: 'आयरलैंड / ब्रिटेन (`NCERT भाग 10.6`)' },
      fact: {
        en: 'Showed colloidal particles (`forest mist, smoke`) scatter short blue wavelengths strongly so **clean daytime sky glows BLUE** (`Red λ ≈ 1.8× Blue`) and **fog danger signals stay RED**!',
        hi: 'सिद्ध किया कि कोलाइडी/सूक्ष्म कण छोटी तरंगदैर्घ्य (`नीला`) अधिक बिखेरते हैं (`लाल तरंगदैर्घ्य ≈ 1.8× नीला`), जिससे स्वच्छ आकाश **नीला** व कोहरे में खतरा संकेत **लाल** दिखता है!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-eye-iris-pupil',
      figRef: { en: 'NCERT Fig 10.1 (`Cornea, Iris & Pupil`)', hi: 'NCERT चित्र 10.1 — कॉर्निया, आइरिस व पुतली' },
      title: { en: 'Close-Up Human Iris Controlling Central Pupil Size & Light Intake (`Group D Shift 25`)', hi: 'रंगीन आइरिस (परितारिका) द्वारा पुतली के छिद्र व प्रकाश मात्रा का नियंत्रण' },
      imageUrl: '/ncert-notes/class10-phy-ch10/real/human_eye_iris.webp',
      hotspots: [
        { en: 'Most light bends at outer Cornea; Iris dynamically narrows Pupil in sunlight & opens wide in darkness.', hi: 'अधिकांश अपवर्तन कॉर्निया पर होता है; आइरिस पुतली का साइज बदल कर प्रवेश करने वाला प्रकाश नियंत्रित करता है।' },
      ],
    },
    {
      id: 'vis-corrective-lenses',
      figRef: { en: 'NCERT Fig 10.2–10.3 (`Spectacle Lenses`)', hi: 'NCERT चित्र 10.2–10.3 — अवतल/उत्तल लेंस संशोधन' },
      title: { en: 'Optical Corrective Glasses (`Concave -D for Myopia / Convex +D for Hypermetropia`)', hi: 'दृष्टि दोष संशोधक चश्मा लेंस (`अवतल -D निकट व उत्तल +D दीर्घ दोष हेतु`)' },
      imageUrl: '/ncert-notes/class10-phy-ch10/real/corrective_lenses.webp',
      hotspots: [
        { en: 'Ex Q6: 80 cm far point -> Concave -1.25 D; Ex Q7: 1 m near point -> Convex +3.0 D; Ex Q5: Bifocal -5.5 D/+1.5 D.', hi: 'अभ्यास Q6: अवतल -1.25 D; अभ्यास Q7: उत्तल +3.0 D; अभ्यास Q5: द्विफोकसी -0.18 m / +0.67 m!' },
      ],
    },
    {
      id: 'vis-prism-vibgyor',
      figRef: { en: 'NCERT Act 10.2 & Fig 10.5 (`Dispersion`)', hi: 'NCERT क्र. 10.2 व चित्र 10.5 — प्रिज़्म विक्षेपण' },
      title: { en: 'Triangular Glass Prism Splitting White Light into Distinct VIBGYOR Bands', hi: 'काँच के प्रिज़्म द्वारा श्वेत प्रकाश का `VIBGYOR` वर्णक्रम (स्पेक्ट्रम) में विभाजन' },
      imageUrl: '/ncert-notes/class10-phy-ch10/real/prism_dispersion.webp',
      hotspots: [
        { en: 'Non-parallel faces inclined at Prism Angle ∠A deviate Violet maximum & Red minimum toward base.', hi: 'प्रिज़्म कोण ∠A पर झुके फलकों के कारण बैंगनी सर्वाधिक और लाल न्यूनतम मुड़कर 7 वर्ण बनते हैं।' },
      ],
    },
    {
      id: 'vis-natural-rainbow',
      figRef: { en: 'NCERT Fig 10.7–10.8 (`Rainbow Physics`)', hi: 'NCERT चित्र 10.7–10.8 — इंद्रधनुष निर्माण' },
      title: { en: 'Natural Rainbow Always Forming Opposite the Sun After Rain Showers', hi: 'वर्षा पश्चात सूर्य की विपरीत दिशा में जल बूँदों से बना प्राकृतिक इंद्रधनुष' },
      imageUrl: '/ncert-notes/class10-phy-ch10/real/natural_rainbow.webp',
      hotspots: [
        { en: 'Raindrops perform (1) Refraction + Dispersion, (2) Internal Reflection, then (3) Final Refraction.', hi: 'सूक्ष्म जल बूँदें छोटे प्रिज़्म बनकर अपवर्तन, विक्षेपण व आंतरिक परावर्तन करती हैं।' },
      ],
    },
    {
      id: 'vis-tyndall-forest',
      figRef: { en: 'NCERT Sec 10.6.1 (`Tyndall Canopy Mist`)', hi: 'NCERT भाग 10.6.1 — टिंडल प्रभाव (जंगल कुहासा)' },
      title: { en: 'Sunlight Beam Scattering Visible Through Forest Mist Canopy (`Tyndall Effect`)', hi: 'घने जंगल के वितान में सूक्ष्म जल बूँदों से दृश्यमान प्रकाश पुंज (`टिंडल प्रभाव`)' },
      imageUrl: '/ncert-notes/class10-phy-ch10/real/tyndall_forest.webp',
      hotspots: [
        { en: 'Colloidal mist droplets scatter light rendering rays visible — scattered colour depends strictly on particle size.', hi: 'कोलॉइडी कणों द्वारा प्रकाश प्रकीर्णन से किरण पथ दृश्य हो उठता है (`अत्यंत सूक्ष्म कण → नीला`)।' },
      ],
    },
    {
      id: 'vis-blue-sky-sunset',
      figRef: { en: 'NCERT Sec 10.6.2 (`Blue Sky & Red Light`)', hi: 'NCERT भाग 10.6.2 — नीला आकाश व लाल तरंगदैर्घ्य' },
      title: { en: 'Clean Blue Upper Sky (`Short λ Scatter`) Transitioning to Orange/Red Horizon Glow', hi: 'वायु अणुओं द्वारा नीले प्रकीर्णन से नीला आकाश व लाल/नारंगी क्षितिज (`λ ≈ 1.8× नीला`)' },
      imageUrl: '/ncert-notes/class10-phy-ch10/real/blue_sky_sunset.webp',
      hotspots: [
        { en: 'Red wavelength is ~1.8x Blue -> least scattered through smoke/fog (`Danger signals`); Astronauts see Black sky!', hi: 'लाल तरंगदैर्घ्य नीले का `~1.8×` होने से कोहरे में सबसे कम प्रकीर्णित होता है; अंतरिक्ष में आकाश काला!' },
      ],
    },
  ],
  activities: [
    {
      num: '10.1',
      title: { en: 'Activity 10.1: Tracing Incident `PE`, Refracted `EF`, Emergent `FS` & Deviation Angle `∠D` Through Triangular Glass Prism (`Fig 10.4`)', hi: 'क्रियाकलाप 10.1: काँच के त्रिभुज प्रिज़्म से प्रकाश किरण आरेखण एवं विचलन कोण `∠D` मापन (`चित्र 10.4`)' },
      materials: { en: 'White drawing sheet fixed on drawing board, triangular glass prism, 4 optical pins (`P, Q, R, S`), protractor & ruler', hi: 'सफ़ेद कागज़ लगा बोर्ड, त्रिभुज काँच का प्रिज़्म, 4 पिन (`P, Q, R, S`), चाँदा व पैमाना' },
      steps: { en: 'Trace triangular boundary ABC, fix two pins P & Q on slant ray striking face AB (`30°–60°`), look through face AC and align pins R & S collinear with images of P & Q; join PE (`incident`), EF (`refracted`), FS (`emergent`), and extend PE & FS backwards to measure ∠D.', hi: 'प्रिज़्म की सीमा `ABC` खींच कर फलक `AB` पर झुकी रेखा पर दो पिन `P, Q` गाड़ें; फलक `AC` से देख कर सीध में `R, S` पिन गाड़ें। `PE`, `EF` व `FS` को मिला पीछे बढ़ाकर विचलन कोण `∠D` मापें।' },
      examTakeaway: { en: 'At first air-glass surface, ray bends **towards normal**; at second glass-air surface **away from normal** — overall ray **bends TOWARD PRISM BASE (`Group D Shift 15`)** by **Angle of Deviation `∠D` (`Shift 20`)**!', hi: 'पहले पृष्ठ पर किरण अभिलंब की ओर तथा दूसरे पर अभिलंब से दूर मुड़ती है — अर्थात कुल मिलाकर **किरण सदैव प्रिज़्म के आधार की ओर मुड़ती है** (`विचलन कोण ∠D`)!' },
      predictQuestion: {
        prompt: { en: 'Comparing a rectangular glass slab with the triangular glass prism (`∠A` inclined faces) in Activity 10.1, emergent ray `FS` inside the prism:', hi: 'काँच स्लैब के विपरीत, क्रियाकलाप 10.1 के त्रिभुज प्रिज़्म में से गुजरने पर प्रकाश किरण सदैव:' },
        options: { en: ['Emerge parallel to incident ray PE', 'Bends TOWARD the base of prism by Deviation angle ∠D', 'Passes completely undeviated straight', 'Reflects 180° back toward light source'], hi: ['आपतित किरण PE के समानांतर रहती है', 'प्रिज़्म के आधार की ओर विचलन कोण ∠D से झुक जाती है', 'बिना मुड़े सीधी निकल जाती है', '180° पीछे लौट आती है'] },
        correctIndex: 1,
        reason: { en: 'Because prism refracting faces AB & AC incline at ∠A (`non-parallel`), emergent ray FS makes deviation angle ∠D toward the prism base (`p.183`).', hi: 'प्रिज़्म के दोनों अपवर्तक पृष्ठ समानांतर न होकर कोण ∠A पर झुके हैं, अतः निर्गत किरण आधार की ओर मुड़कर विचलन कोण ∠D बनाती है (`पृ. 183`)।' },
      },
    },
    {
      num: '10.2',
      title: { en: 'Activity 10.2: Slit Sunlight Passing Through Prism Splits into VIBGYOR Spectrum on Screen (`Fig 10.5`)', hi: 'क्रियाकलाप 10.2: पतली झिरी से आए सूर्य-प्रकाश का प्रिज़्म द्वारा परदे पर `VIBGYOR` स्पेक्ट्रम बनना (`चित्र 10.5`)' },
      materials: { en: 'Thick cardboard sheet with narrow slit (`झिरी`) facing bright sunlight, glass prism & white viewing screen', hi: 'मध्य में पतली झिरी (`छिद्र`) वाला मोटा गत्ता, सूर्य प्रकाश, काँच प्रिज़्म व सफ़ेद परदा' },
      steps: { en: 'Allow narrow white sunlight beam through cardboard slit onto one prism face, gently rotate prism until crisp multi-coloured band appears on screen; record bottom-to-top colour order.', hi: 'गत्ते की झिरी से पतला श्वेत किरण पुंज प्रिज़्म फलक पर डाल धीरे घुमाएँ ताकि पास रखे परदे पर सात रंगों की पट्टी स्पष्ट दिखे।' },
      examTakeaway: { en: 'Order from most-bent (`base side`) to least-bent (`top`): **V-I-B-G-Y-O-R**! **Violet bends MOST, Red bends LEAST (`p.184`)** — Newton reversed a 2nd prism to recombine back into White (`Fig 10.6`)!', hi: 'नीचे से ऊपर वर्ण क्रम **VIBGYOR** (बैंगनी सर्वाधिक मुड़े व नीचे; लाल सबसे कम मुड़े व ऊपर)! न्यूटन ने उल्टे दूसरे प्रिज़्म से इसे पुनः श्वेत प्रकाश बनाया!' },
      predictQuestion: {
        prompt: { en: 'Among Red, Yellow, Green, and Violet rays exiting the prism in Activity 10.2 (`p.184`), which bends LEAST and which bends MOST?', hi: 'क्रियाकलाप 10.2 में प्रिज़्म से निकलते समय कौन-सा वर्ण सबसे कम तथा कौन-सा सबसे अधिक मुड़ता है?' },
        options: { en: ['Violet bends least, Red bends most', 'All 7 colours bend identically', 'Red bends LEAST, Violet bends MOST (`VIBGYOR bottom`)', 'Only Green bends; others stay white'], hi: ['बैंगनी सबसे कम, लाल सबसे अधिक', 'सभी 7 वर्ण समान कोण पर मुड़ते हैं', 'लाल सबसे कम झुकता है, बैंगनी सबसे अधिक झुकता है', 'केवल हरा मुड़ता है'] },
        correctIndex: 2,
        reason: { en: 'Verbatim p.184: Red light (`longest wavelength in visible band`) bends LEAST while Violet (`shortest wavelength`) bends MOST!', hi: 'सटीक `NCERT पृ. 184`: लाल प्रकाश सबसे कम झुकता है, जबकि बैंगनी सबसे अधिक झुकता है (`VIBGYOR`)!' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-10-1',
      title: {
        en: 'Human Eye Anatomy, Key Dimensions & Railway Exam Distinctions (`Sec 10.1`)',
        hi: 'मानव नेत्र के प्रत्येक अंग, माप व सटीक परीक्षा बिंदु (`भाग 10.1`, चित्र 10.1)',
      },
      headers: {
        en: ['Eye Structure', 'Physical Nature / Dimension', 'Primary Optical / Biological Role', 'Railway PYQ / Trap Alert'],
        hi: ['नेत्र अंग', 'संरचनात्मक स्वरूप व माप', 'मुख्य प्रकाशीय व जैविक कार्य', 'रेलवे PYQ / अपवाद सतर्कता'],
      },
      rows: [
        [{ en: '**Eyeball (`नेत्र गोलक`)**', hi: '**नेत्र गोलक (`Eyeball`)**' }, { en: 'Roughly spherical, **~2.3 cm diameter**', hi: 'लगभग गोलाकार, व्यास **~2.3 cm**' }, { en: 'Encloses aqueous humour, lens, vitreous humour & retina', hi: 'नेत्र लेंस से रेटिना की दूरी सदैव स्थिर रखे' }, { en: '**Ex Q9**: Object moved far ⇒ **Image dist `v` UNCHANGED**!', hi: '**अभ्यास Q9**: वस्तु दूर ले जाने पर **`v` अपरिवर्तित**!' }],
        [{ en: '**Cornea (`कॉर्निया / स्वच्छ मंडल`)**', hi: '**कॉर्निया (`स्वच्छ मंडल`)**' }, { en: 'Thin transparent outer front bulge', hi: 'नेत्र के अग्र पृष्ठ की पारदर्शी झिल्ली' }, { en: '**MOST light refraction occurs here!**', hi: '**आने वाले प्रकाश का अधिकांश अपवर्तन यहीँ!**' }, { en: 'Eye Donation transplants **Cornea** within `4–6 hrs`', hi: 'नेत्र दान में **कॉर्निया** प्रत्यारोपित (`4–6 घंटे में`)!' }],
        [{ en: '**Iris (`परितारिका`) & Pupil (`पुतली`)**', hi: '**परितारिका (`Iris`) व पुतली (`Pupil`)**' }, { en: 'Iris = Dark muscular diaphragm; Pupil = Aperture', hi: 'आइरिस = पेशीय डायफ्राम; पुतली = केंद्रीय छिद्र' }, { en: 'Iris controls **pupil size** -> Pupil regulates **light intake**', hi: 'आइरिस **पुतली का आकार** व पुतली **प्रकाश मात्रा** नियंत्रित करे' }, { en: '**Group D Shift 25**: Controls light entering (`Iris / Pupil`)', hi: '**Group D 25**: नेत्र में प्रवेश प्रकाश नियंत्रण!' }],
        [{ en: '**Crystalline Lens & Ciliary Muscles**', hi: '**अभिनेत्र लेंस व पक्ष्माभी पेशी**' }, { en: 'Fibrous jelly **Convex lens** (`flexible curvature`)', hi: 'रेशेदार जेलीवत **उत्तल लेंस** (`लचीली वक्रता`)' }, { en: 'Ciliary muscles relax (`thin, f↑`) / contract (`thick, f↓`)', hi: 'पेशियाँ शिथिल (`पतला, f↑`) / संकुचित (`मोटा, f↓`)' }, { en: '**Ex Q4**: Focal length altered by **Ciliary muscles**; Cloudy = Cataract!', hi: '**अभ्यास Q4**: फोकस **पक्ष्माभी द्वारा** बदलता है (`Shift 39`)!' }],
        [{ en: '**Retina (`दृष्टिपटल`) & Optic Nerve**', hi: '**दृष्टिपटल (`Retina`) व दृक् तंत्रिका**' }, { en: 'Light-sensitive delicate rear membrane', hi: 'कोमल सूक्ष्म झिल्ली (`प्रकाश-सुग्राही कोशिकाएँ`)' }, { en: 'Forms **Real & Inverted** image -> sends **electrical signals**', hi: '**वास्तविक व उल्टा प्रतिबिंब** → विद्युत सिग्नल मस्तिष्क को' }, { en: '**Ex Q2d**: Image screen = **Retina** (`brain turns upright`)!', hi: '**अभ्यास Q2d**: प्रतिबिंब भाग = **दृष्टिपटल (`रेटिना`)**!' }],
      ],
    },
    {
      id: 'tbl-10-2',
      title: {
        en: 'Master Vision Defects Comparison, Causes, Lens Power `P = 1/f` & NCERT Numericals (`Sec 10.2`)',
        hi: 'तीनों दृष्टि दोष, कारण, लेंस क्षमता सूत्र (`P = 1/f`) व NCERT हल आंकिक तालिका (`भाग 10.2`)',
      },
      headers: {
        en: ['Refractive Defect', 'What Is Clear vs Blurry & Image Spot', 'Exact Two Optical Causes (`NCERT`)', 'Corrective Lens & Verbatim Solved Numericals'],
        hi: ['दृष्टि दोष', 'स्पष्ट vs धुंधला व प्रतिबिंब स्थान', 'दो मुख्य प्रकाशीय कारण (`NCERT`)', 'संशोधक लेंस व हल NCERT आंकिक'],
      },
      rows: [
        [{ en: '**1. Myopia (`निकट-दृष्टिता`)**', hi: '**1. निकट-दृष्टि दोष (`Myopia`)**' }, { en: 'Near CLEAR (`25 cm`), Far BLURRY | Focus **IN FRONT of Retina**', hi: 'पास साफ, दूर धुंधला | प्रतिबिंब **रेटिना के सामने**' }, { en: '**(i)** Excess lens curvature; **(ii)** Eyeball **elongated**', hi: '**(i)** लेंस की अधिक वक्रता; **(ii)** नेत्र गोलक **लंबा होना**' }, { en: '**Concave (`-ve D`)**: `Ex Q6 (80cm)` ⇒ **`-1.25 D`** | `p.181 Q2 (1.2m)` ⇒ **`-0.83 D`**', hi: '**अवतल (`-ve D`)**: `Q6 (80cm)` ⇒ **`-1.25 D`** | `1.2 m` ⇒ **`-0.83 D`**' }],
        [{ en: '**2. Hypermetropia (`दीर्घ-दृष्टिता`)**', hi: '**2. दीर्घ-दृष्टि दोष (`Hypermetropia`)**' }, { en: 'Far CLEAR (`∞`), Near BLURRY (`>25cm`) | Focus **BEHIND Retina**', hi: 'दूर साफ, पास धुंधला | प्रतिबिंब **रेटिना के पीछे**' }, { en: '**(i)** Focal length too long; **(ii)** Eyeball **too small**', hi: '**(i)** फोकस दूरी अत्यधिक; **(ii)** नेत्र गोलक **छोटा होना**' }, { en: '**Convex (`+ve D`)**: `Ex Q7 (near pt 1m, u=-25cm)` ⇒ **`+3.0 D`**', hi: '**उत्तल (`+ve D`)**: `अभ्यास Q7 (निकट 1 m)` ⇒ **`+3.0 D`**' }],
        [{ en: '**3. Presbyopia (`जरा-दूरदृष्टिता`)**', hi: '**3. जरा-दूरदृष्टिता (`Presbyopia`)**' }, { en: 'Loss of **accommodation** with ageing (`both near/far fail`)', hi: 'वृद्धावस्था में समंजन क्षीण (`निकट-दूर दोनों प्रभावित`)' }, { en: '**(i)** Weakening ciliary muscles; **(ii)** Rigid eye lens', hi: '**(i)** पक्ष्माभी पेशी दुर्बल; **(ii)** लेंस का लचीलापन कम होना' }, { en: '**Bi-focal**: **Upper Concave (`-D`) + Lower Convex (`+D`)** (`Ex Q5: -0.18m/+0.67m`)', hi: '**द्विफोकसी**: **ऊपर अवतल (`-D`), नीचे उत्तल (`+D`)** (`Q5: -0.18 m / +0.67 m`)' }],
        [{ en: '**4. Cataract (`मोतियाबिंद`)**', hi: '**4. मोतियाबिंद (`Cataract`)**' }, { en: 'Milky & cloudy crystalline lens (`partial / complete loss`)', hi: 'क्रिस्टलीय लेंस दूधिया व धुंधला हो जाना (`पृ. 178`)' }, { en: 'Protein clouding of old-age crystalline lens (`not lens shape!`)', hi: 'वृद्धावस्था में नेत्र लेंस की पारदर्शिता समाप्त होना' }, { en: 'NOT fixed by specs -> **Cataract Surgery (`शल्य चिकित्सा`)**!', hi: 'चश्मे से ठीक नहीं → केवल **शल्य चिकित्सा (`Surgery`)**!' }],
      ],
    },
    {
      id: 'tbl-10-3',
      title: {
        en: 'Eye Ranges, Field of View (`2 Eyes Box`) & Eye Donation Statistics (`p.180–182`)',
        hi: 'दृष्टि परास, दो नेत्रों का दृष्टि क्षेत्र एवं नेत्र दान के सभी तथ्य (`पृ. 180–182`)',
      },
      headers: {
        en: ['Metric / Rule (`NCERT`)', 'Exact Value / Clinical Protocol', 'Underlying Reason / Benefit', 'Eligible (`✓`) vs Excluded (`✗`) / Exam Tip'],
        hi: ['प्रमुख माप / नियम (`NCERT`)', 'सटीक मान / चिकित्सकीय समय', 'वैज्ञानिक कारण व लाभ', 'पात्र (`✓`) vs अपात्र (`✗`) / परीक्षा टिप'],
      },
      rows: [
        [{ en: '**Normal Near Point & Far Point (`Q3`)**', hi: '**निकट बिंदु व दूर बिंदु (`अभ्यास Q3`)**' }, { en: 'Near = **`25 cm`** | Far = **Infinity (`∞`)**', hi: 'निकट = **`25 cm`** | दूर = **अनंत (`∞`)**' }, { en: 'Minimum distance without ciliary eye strain', hi: 'बिना तनाव सुस्पष्ट दर्शन की अल्पतम दूरी (`पृ. 178`)' }, { en: 'NEVER confuse **`25 cm`** with `2.5 cm` or `25 m`!', hi: '**`25 cm`** को `25 m` या `2.5 cm` से भ्रमित न करें!' }],
        [{ en: '**One Eye vs Two Eyes (`p.180 Box`)**', hi: '**एक नेत्र बनाम दो नेत्र (`पृ. 180 बॉक्स`)**' }, { en: '1 Eye = **`150°`** | 2 Eyes = **`180°` horizontal field**', hi: '1 नेत्र = **`150°`** | 2 नेत्र = **`180°` क्षैतिज क्षेत्र**' }, { en: 'Brain fuses slightly shifted images -> **3D depth perception**', hi: 'मंद प्रकाश सुग्राहिता ↑ व **तीसरी विमा (गहराई) का बोध**' }, { en: 'Prey animals (`side eyes`) vs Humans (`front 3D` overlap)', hi: 'शिकार पशुओं के नेत्र विपरीत पार्श्व में अधिक क्षेत्र हेतु' }],
        [{ en: '**Corneal Blindness Stats (`p.182 Box`)**', hi: '**कॉर्निया अंधता आँकड़े (`पृ. 182 बॉक्स`)**' }, { en: '**3.5 crore** blind; **45 lakh** corneal (`60% age <12 yrs`)', hi: '**`3.5 करोड़`** अंधे; **`45 लाख`** कॉर्निया अंधता (`60% <12 वर्ष`)' }, { en: 'Cornea replacement restores clean front eye window', hi: 'रोगग्रस्त कॉर्निया बदलकर पूर्ण दृष्टि पुनर्जीवित' }, { en: '**1 donated pair** illuminates up to **`4` blind recipients**!', hi: '**एक जोड़ी दान** → अधिकतम **`4` अंधों** को रोशनी!' }],
        [{ en: '**Eye Donation Timing & Screening**', hi: '**नेत्र दान समय सीमा व रोग अपवर्जन**' }, { en: 'Extract within **`4–6 hrs` of death** (`10–15 min` surgical task)', hi: 'मृत्यु के **`4–6 घंटे` भीतर** निकालें (`10–15 min`, विरूपण नहीं)' }, { en: 'Fast non-disfiguring retrieval preserves corneal tissue', hi: 'मृत्यु के बाद भी नेत्रदान जीवित दान जितना मूल्यवान' }, { en: '`✓`: Glasses, Cataract, Diabetes, Asthma | `✗`: **AIDS, Hep B/C, Rabies, Tetanus, Cholera, Meningitis**', hi: '`✓`: चश्मा, मधुमेह, दमा, मोतियाबिंद | `✗`: **AIDS, Hep B/C, रेबीज, टिटनेस, हैजा, तानिकाशोथ**' }],
      ],
    },
    {
      id: 'tbl-10-4',
      title: {
        en: 'Prism Ray Terms (`∠A, ∠D`), VIBGYOR Deviation Order & Two-Prism / Rainbow Physics (`Sec 10.3–10.4`)',
        hi: 'प्रिज़्म कोण, `VIBGYOR` विक्षेपण क्रम, न्यूटन पुनर्योजन एवं इंद्रधनुष प्रक्रिया सारणी',
      },
      headers: {
        en: ['Optical Concept / Phenomenon', 'Governing Ray Behaviour / Formula', 'Least vs Most Deviated Colour', 'Why Exam Trap Happens / PYQ Link'],
        hi: ['प्रकाशीय अवधारणा / परिघटना', 'मुख्य किरण नियम / प्रक्रिया', 'न्यूनतम बनाम अधिकतम विचलन', 'परीक्षा जाल व PYQ संदर्भ'],
      },
      rows: [
        [{ en: '**Triangular Prism Geometry (`10.3`)**', hi: '**प्रिज़्म संरचना व कोण (`10.3`)**' }, { en: '2 Triangular bases + **3 Rectangular lateral faces** (`∠A`)', hi: '2 त्रिभुज आधार + **3 आयताकार पार्श्व फलक (`∠A`)**' }, { en: 'Refracted ray **bends TOWARD BASE** (`∠i + ∠e = ∠A + ∠D`)', hi: 'किरण **सदैव आधार की ओर मुड़ती है** (`∠i+∠e = ∠A+∠D`)' }, { en: '**Group D 12, 15, 20 & Tech 19**: Count bases & faces!', hi: '**Tech Shift 19**: 2 त्रिभुजाकार + 3 आयताकार पृष्ठ!' }],
        [{ en: '**VIBGYOR Dispersion Order (`10.4`)**', hi: '**`VIBGYOR` विक्षेपण क्रम (`10.4`)**' }, { en: 'White light splits due to unequal speed/refraction per `λ`', hi: 'अलग तरंगदैर्घ्य के अलग अपवर्तन कोण पर मुड़ने से विभाजन' }, { en: '**Red (`long λ`) = LEAST** | **Violet = MOST (`Tech 11`)**', hi: '**लाल = सबसे कम विचलन** | **बैंगनी = सर्वाधिक विचलन**' }, { en: '**Tech Shift 23**: Without Red listed -> **Yellow bends min**!', hi: '**Tech Shift 23**: `(V,G,B,Y)` में **पीला न्यूनतम मुड़ता** है!' }],
        [{ en: '**Newton Two-Prism Experiment (`10.6`)**', hi: '**न्यूटन द्वि-प्रिज़्म पुनर्योजन (`10.6`)**' }, { en: '2nd identical prism kept **INVERTED (`reversed`)**', hi: 'दूसरा सर्वसम प्रिज़्म **विपरीत (`उल्टी`) स्थिति** में रखने पर' }, { en: 'All 7 colours merge cleanly back into **ONE WHITE BEAM**', hi: 'पर्दे पर **पुनः एकल श्वेत प्रकाश** प्राप्त होता है' }, { en: '**Group D Shift 19 & Tech 2, 18**: Sunlight has 7 colours!', hi: '**Group D 19**: विपरीत प्रिज़्म से **एकल श्वेत धब्बा**!' }],
        [{ en: '**Natural Rainbow (`Fig 10.7–10.8`)**', hi: '**प्राकृतिक इंद्रधनुष (`चित्र 10.7–10.8`)**' }, { en: 'Tiny raindrops act as prisms **OPPOSITE the Sun**', hi: 'सूर्य के विपरीत दिशा में जल बूँदें सूक्ष्म प्रिज़्म जैसी' }, { en: 'Steps: **Refraction + Dispersion → Internal Refl. → Refraction**', hi: '**अपवर्तन + विक्षेपण → आंतरिक परावर्तन → पुनः अपवर्तन**' }, { en: 'Needs Sun behind observer + water droplets ahead (`spray`)!', hi: 'इंद्रधनुष देखने हेतु **सूर्य सदैव पीठ की ओर** होना चाहिए!' }],
      ],
    },
    {
      id: 'tbl-10-5',
      title: {
        en: 'Atmospheric Refraction (`10.5`) vs Scattering / Tyndall Phenomena (`10.6`) Master PYQ Matrix',
        hi: 'वायुमंडलीय अपवर्तन (`10.5`) बनाम प्रकाश प्रकीर्णन व टिंडल (`10.6`) पूर्ण परीक्षा मैट्रिक्स',
      },
      headers: {
        en: ['Natural Phenomenon', 'Exact Physical Cause (`Refraction` vs `Scattering`)', 'Detailed NCERT Reason', 'Railway CBT Shift Hit'],
        hi: ['प्राकृतिक परिघटना', 'सटीक कारण (`अपवर्तन` बनाम `प्रकीर्णन`)', 'सटीक NCERT व्याख्या', 'रेलवे परीक्षा शिफ्ट प्रश्न'],
      },
      rows: [
        [{ en: '**Twinkling of Stars (`तारे टिमटिमाना`)**', hi: '**तारों का टिमटिमाना (`अभ्यास Q10`)**' }, { en: '**Atmospheric Refraction** (`air layer variation`)', hi: '**वायुमंडलीय अपवर्तन** (`अस्थायी वायु परतें`)' }, { en: 'Stars act as **point sources**; shifting air changes brightness & apparent height (`+up`)', hi: '**बिंदु-स्रोत** किरणों का पथ अस्थिर वायु से बदलकर चमक झिलमिलाए' }, { en: '**Group D 26, 38 & Tech 9, 13** (Planets = extended -> NO!)', hi: '**Group D 26, 38 व Tech 9, 13** (ग्रह विस्तृत → नहीं!)' }],
        [{ en: '**Early Sunrise & Late Sunset (`10.10`)**', hi: '**अग्रिम सूर्योदय व विलंबित सूर्यास्त**' }, { en: '**Atmospheric Refraction** (`horizon bending`)', hi: '**वायुमंडलीय अपवर्तन** (`क्षितिज के नीचे से मुड़ाव`)' }, { en: 'Visible **`2 min` BEFORE sunrise** + **`2 min` AFTER sunset** (**`+4 min` total** + flat disc)', hi: '**`2 मिनट पहले` व `2 मिनट बाद`** तक दिखे (**कुल `+4 min` लाभ**)' }, { en: '**Tech 2024 Shift 1** (`exact NCERT 2+2 min rule`)', hi: '**Tech 2024 Shift 1** (`+2 min + +2 min = +4 min नियम`)' }],
        [{ en: '**Tyndall Beam Path (`10.6.1`)**', hi: '**टिंडल प्रभाव व धुएँ/जंगल में किरण (`10.6.1`)**' }, { en: '**Scattering of Light by Colloidal Particles**', hi: '**कोलॉइडी कणों द्वारा प्रकाश का प्रकीर्णन**' }, { en: 'Beam invisible in true solution; visible in colloids (`smoke/mist canopy`)', hi: 'वास्तविक विलयन में अदृश्य; कोलॉइड में कण आकारानुसार प्रकीर्णन' }, { en: '**Tech 2024 Shifts 3, 5, 6, 15, 17** (`Colloid = Tyndall`)', hi: '**Tech 2024 Shifts 3, 5, 6, 15, 17** (`कोलॉइड = टिंडल`)' }],
        [{ en: '**Blue Sky vs Red Danger Signals vs Space**', hi: '**नीला आकाश, लाल सिग्नल व अंतरिक्ष काला (`Q12`)**' }, { en: '**Particle Size Scattering** (`Red λ ≈ 1.8× Blue λ`)', hi: '**कण-आकार प्रकीर्णन** (`लाल λ ≈ 1.8× नीला`)' }, { en: 'Fine molecules scatter **BLUE** (`sky blue`); Red scatters **LEAST** in fog (`danger`); Space **no air -> BLACK**!', hi: 'सूक्ष्म कण **नीला** बिखेरें; लाल कोहरे में **न्यूनतम प्रकीर्णित**; अंतरिक्ष में **प्रकीर्णन नहीं = काला**!' }, { en: '**ALP 2025 Shift 3, Group D 11 & Tech 15, 23**', hi: '**ALP 2025 Shift 3, Group D 11 व Tech 15, 23**' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.181 Q1',
      q: { en: 'What is meant by power of accommodation of the eye?', hi: 'नेत्र की समंजन क्षमता से क्या अभिप्राय है?' },
      a: { en: 'The ability of the crystalline **eye lens to adjust its focal length** (`using ciliary muscles — becoming thin for distant objects and thicker for nearby objects`) so clear images form sharply on the retina across **`25 cm` to infinity (`∞`)** is called **power of accommodation**.', hi: 'अभिनेत्र लेंस की वह क्षमता, जिसके कारण **पक्ष्माभी पेशियों की सहायता से वह अपनी फोकस दूरी को समायोजित करके** दूर व निकट दोनों वस्तुओं को रेटिना पर सुस्पष्ट फोकसित कर लेता है, **नेत्र की समंजन क्षमता (`Power of Accommodation`)** कहलाती है (`Group D Shift 10 PYQ`)।' },
    },
    {
      num: 'p.181 Q2',
      q: { en: 'A person with a myopic eye cannot see objects beyond `1.2 m` distinctly. What should be the type of the corrective lens used to restore proper vision?', hi: 'निकट दृष्टि दोष का कोई व्यक्ति `1.2 m` से अधिक दूरी पर रखी वस्तुओं को सुस्पष्ट नहीं देख सकता। इस दोष को दूर करने के लिए प्रयुक्त संशोधक लेंस किस प्रकार का होना चाहिए?' },
      a: { en: 'A **CONCAVE (`diverging`) lens (`अवतल लेंस`)**! *(Numerical extra for CBT: virtual image must form at his far point `v = -1.2 m` for object at `u = -∞` ⇒ `f = -1.2 m`, **Power `P = 1 / (-1.2) = -0.83 D`**!)*', hi: 'सही दृष्टि के लिए उपयुक्त क्षमता का **अवतल (`अपसारी`) लेंस** प्रयुक्त करना चाहिए! *(परीक्षा आंकिक: दूर बिंदु `f = -1.2 m` ⇒ **लेंस क्षमता `P = 1 / (-1.2) = -0.83 D`**!)*' },
    },
    {
      num: 'p.181 Q3',
      q: { en: 'What is the far point and near point of the human eye with normal vision?', hi: 'मानव नेत्र की सामान्य दृष्टि के लिए दूर बिंदु तथा निकट बिंदु नेत्र से कितनी दूरी पर होते हैं?' },
      a: { en: 'For a human eye with normal vision: **Near Point (`निकट बिंदु`) = `25 cm`** in front of the eye, and **Far Point (`दूर बिंदु`) = Infinity (`∞`)**.', hi: 'सामान्य दृष्टि के वयस्क नेत्र के लिए **निकट बिंदु `25 cm`** की दूरी पर तथा **दूर बिंदु अनंत (`∞`)** पर होता है।' },
    },
    {
      num: 'p.181 Q4',
      q: { en: 'A student has difficulty reading the blackboard while sitting in the last row. What could be the defect the child is suffering from? How can it be corrected?', hi: 'अंतिम पंक्ति में बैठे किसी विद्यार्थी को श्यामपट्ट पढ़ने में कठिनाई होती है। यह विद्यार्थी किस दृष्टि दोष से पीड़ित है? इसे किस प्रकार संशोधित किया जा सकता है?' },
      a: { en: 'Since the child struggles to see a **distant blackboard**, they suffer from **Myopia (`निकट-दृष्टि दोष / Near-sightedness`)**. It is corrected by wearing spectacles fitted with a **CONCAVE lens (`अवतल लेंस`)** of suitable negative power.', hi: 'अंतिम पंक्ति से दूर स्थित श्यामपट्ट स्पष्ट न दिखने के कारण विद्यार्थी **निकट-दृष्टि दोष (`मायोपिया`)** से पीड़ित है। इसे उचित क्षमता के **अवतल लेंस (`Concave lens`)** द्वारा संशोधित किया जा सकता है।' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'The human eye can focus on objects at different distances by adjusting the focal length of the eye lens. This is due to (`a`) presbyopia (`b`) accommodation (`c`) near-sightedness (`d`) far-sightedness.', hi: 'मानव नेत्र अभिनेत्र लेंस की फोकस दूरी को समायोजित करके विभिन्न दूरियों पर रखी वस्तुओं को फोकसित कर सकता है। ऐसा हो पाने का कारण है — (`a`) जरा-दूरदृष्टिता (`b`) समंजन (`c`) निकट-दृष्टि (`d`) दीर्घ-दृष्टि।' },
      a: { en: '**Correct Option: `(b)` accommodation (`jhsc1an Verified ✓`)** — Ciliary muscles alter eye lens curvature/focal length continuously (`Sec 10.1.1`).', hi: '**सही उत्तर: `(b)` समंजन (`उत्तरमाला सत्यापित ✓`)** — पक्ष्माभी पेशियों द्वारा अभिनेत्र लेंस की फोकस दूरी समायोजित करने की क्षमता **समंजन** कहलाती है।' },
    },
    {
      num: '2',
      q: { en: 'The human eye forms the image of an object at its (`a`) cornea (`b`) iris (`c`) pupil (`d`) retina.', hi: 'मानव नेत्र जिस भाग पर किसी वस्तु का प्रतिबिंब बनाते हैं वह है — (`a`) कॉर्निया (`b`) परितारिका (`c`) पुतली (`d`) दृष्टिपटल (`रेटिना`)।' },
      a: { en: '**Correct Option: `(d)` retina (`jhsc1an Verified ✓`)** — Eye lens casts a **real and inverted image** directly onto the **Retina (`दृष्टिपटल`)** (`Sec 10.1`).', hi: '**सही उत्तर: `(d)` दृष्टिपटल (`रेटिना`) (`उत्तरमाला सत्यापित ✓`)** — मानव नेत्र किसी वस्तु का वास्तविक व उल्टा प्रतिबिंब **दृष्टिपटल** पर बनाता है।' },
    },
    {
      num: '3',
      q: { en: 'The least distance of distinct vision for a young adult with normal vision is about (`a`) `25 m` (`b`) `2.5 cm` (`c`) `25 cm` (`d`) `2.5 m`.', hi: 'सामान्य दृष्टि के वयस्क के लिए सुस्पष्ट दर्शन की अल्पतम दूरी होती है, लगभग — (`a`) `25 m` (`b`) `2.5 cm` (`c`) `25 cm` (`d`) `2.5 m`।' },
      a: { en: '**Correct Option: `(c)` `25 cm` (`jhsc1an Verified ✓`)** — Below `25 cm` ciliary accommodation maxes out causing blur & strain.', hi: '**सही उत्तर: `(c)` `25 cm` (`उत्तरमाला सत्यापित ✓`)** — सामान्य नेत्र बिना तनाव `25 cm` निकट बिंदु तक स्पष्ट देख सकता है।' },
    },
    {
      num: '4',
      q: { en: 'The change in focal length of an eye lens is caused by the action of the (`a`) pupil (`b`) retina (`c`) ciliary muscles (`d`) iris.', hi: 'अभिनेत्र लेंस की फोकस दूरी में परिवर्तन किया जाता है — (`a`) पुतली द्वारा (`b`) दृष्टिपटल द्वारा (`c`) पक्ष्माभी द्वारा (`d`) परितारिका द्वारा।' },
      a: { en: '**Correct Option: `(c)` ciliary muscles (`jhsc1an Verified ✓`)** — Relaxing/contracting **ciliary muscles (`पक्ष्माभी पेशियाँ`)** directly adjusts lens thickness and focal length!', hi: '**सही उत्तर: `(c)` पक्ष्माभी द्वारा (`उत्तरमाला सत्यापित ✓`)** — **पक्ष्माभी पेशियाँ** शिथिल या संकुचित होकर लेंस की वक्रता व फोकस दूरी बदलती हैं।' },
    },
    {
      num: '5',
      q: { en: 'A person needs a lens of power `-5.5 dioptres` for correcting his distant vision. For correcting his near vision he needs a lens of power `+1.5 dioptre`. What is the focal length of the lens required for correcting (`i`) distant vision, and (`ii`) near vision?', hi: 'किसी व्यक्ति को अपनी दूर की दृष्टि को संशोधित करने के लिए `-5.5 डाइऑप्टर` क्षमता के लेंस की आवश्यकता है। अपनी निकट की दृष्टि को संशोधित करने के लिए उसे `+1.5 डाइऑप्टर` क्षमता के लेंस की आवश्यकता है। संशोधित करने के लिए आवश्यक लेंस की फोकस दूरी क्या होगी — (`i`) दूर की दृष्टि के लिए (`ii`) निकट की दृष्टि के लिए?' },
      a: { en: '**Verified Numerical Solution (`jhsc1an ✓`)** using `f = 1 / P` (in metres):\n• **`(i)` Distant vision (`P = -5.5 D`)**: `f = 1 / (-5.5) = -0.1818 m` ≈ **`-0.18 m`** (`Concave lens, -18.2 cm`).\n• **`(ii)` Near vision (`P = +1.5 D`)**: `f = 1 / (+1.5) = +0.6667 m` ≈ **`+0.67 m`** (`Convex lens, +66.7 cm`).', hi: '**सत्यापित आंकिक हल (`उत्तरमाला ✓`)**: सूत्र `f = 1 / P` (`मीटर में`) से:\n• **`(i)` दूर की दृष्टि (`P = -5.5 D`)**: `f = 1 / (-5.5)` ≈ **`-0.18 m`** (`अवतल लेंस`)।\n• **`(ii)` निकट की दृष्टि (`P = +1.5 D`)**: `f = 1 / (+1.5)` ≈ **`+0.67 m`** (`उत्तल लेंस`)।' },
    },
    {
      num: '6',
      q: { en: 'The far point of a myopic person is `80 cm` in front of the eye. What is the nature and power of the lens required to correct the problem?', hi: 'किसी निकट-दृष्टि दोष से पीड़ित व्यक्ति का दूर बिंदु नेत्र के सामने `80 cm` दूरी पर है। इस दोष को संशोधित करने के लिए आवश्यक लेंस की प्रकृति तथा क्षमता क्या होगी?' },
      a: { en: '**Verified Numerical Solution (`jhsc1an ✓`)**: To focus `u = -∞` at his far point `v = -80 cm = -0.80 m`:\nUsing lens formula `1/f = 1/v - 1/u`: `f = v = -80 cm = -0.8 m` (`negative -> Concave lens`).\nPower **`P = 1 / f(m) = 1 / (-0.8) = -1.25 D`**. Thus: **Concave (`अवतल`) lens of power `-1.25 D`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: अनंत (`u = -∞`) वस्तु का प्रतिबिंब `80 cm` दूर बिंदु (`v = -0.8 m`) पर बनाने हेतु:\nलेंस सूत्र `1/f = 1/v - 1/u` से `f = -0.8 m` (`ऋणात्मक ⇒ अवतल लेंस`)।\nक्षमता **`P = 1 / f = 1 / (-0.8) = -1.25 D`**। अतः **`-1.25 D` क्षमता का अवतल लेंस** आवश्यक है!' },
    },
    {
      num: '7',
      q: { en: 'Make a diagram to show how hypermetropia is corrected. The near point of a hypermetropic eye is `1 m`. What is the power of the lens required to correct this defect? Assume that the near point of the normal eye is `25 cm`.', hi: 'चित्र बनाकर दर्शाइए कि दीर्घ-दृष्टि दोष कैसे संशोधित किया जाता है। एक दीर्घ-दृष्टि दोषयुक्त नेत्र का निकट बिंदु `1 m` है। इस दोष को संशोधित करने के लिए आवश्यक लेंस की क्षमता क्या होगी? यह मान लीजिए कि सामान्य नेत्र का निकट बिंदु `25 cm` है।' },
      a: { en: '**Verified Solution (`jhsc1an ✓`, see Interactive SVG Plate 3 (`c10-ch10-defects-correction-diagram`) / Lab Tab 2)**:\nObject kept at normal near point `u = -25 cm` must form a virtual image at `v = -1 m = -100 cm`:\n`1/f = 1/v - 1/u = 1/(-100) - 1/(-25) = (-1 + 4)/100 = +3/100 cm⁻¹` ⇒ `f = +100/3 cm = +1/3 m`.\n**Power `P = 1 / f(m) = 1 / (1/3) = +3.0 D`** -> **Convex (`उत्तल`) lens of power `+3.0 D`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`, चित्र प्लेट 3 / लैब टैब 2 देखें)**:\nसामान्य निकट बिंदु `u = -25 cm` पर रखी वस्तु का आभासी प्रतिबिंब `v = -1 m = -100 cm` पर बनाने हेतु:\n`1/f = 1/(-100) - 1/(-25) = 3/100` ⇒ `f = +1/3 m`।\n**क्षमता `P = 1 / (+1/3) = +3.0 D`** ⇒ **`+3.0 D` क्षमता का उत्तल (`अभिसारी`) लेंस**!' },
    },
    {
      num: '8',
      q: { en: 'Why is a normal eye not able to see clearly the objects placed closer than `25 cm`?', hi: 'सामान्य नेत्र `25 cm` से निकट रखी वस्तुओं को सुस्पष्ट क्यों नहीं देख पाते?' },
      a: { en: 'Ciliary muscles can contract only up to a **fixed anatomical limit**; the eye lens **cannot decrease its focal length below its minimum limit** (`required to converge rays from closer than 25 cm onto the fixed retina`), so the image blurs (`Sec 10.1.1`).', hi: 'अभिनेत्र लेंस की फोकस दूरी पक्ष्माभी पेशियों के संकुचन की एक **निश्चित न्यूनतम सीमा से कम नहीं हो सकती**, अतः `25 cm` से कम दूरी पर रखी वस्तु से आने वाली किरणें रेटिना पर फोकस न हो पाने से प्रतिबिंब धुंधला दिखाई देता है (`भाग 10.1.1`)।' },
    },
    {
      num: '9',
      q: { en: 'What happens to the image distance in the eye when we increase the distance of an object from the eye?', hi: 'जब हम नेत्र से किसी वस्तु की दूरी को बढ़ा देते हैं तो नेत्र में प्रतिबिंब-दूरी का क्या होता है?' },
      a: { en: '**Image distance (`v`) inside the eye REMAINS UNCHANGED (`अपरिवर्तित`)!** The distance between crystalline lens and retina is fixed (`~2.3 cm`); ciliary muscles instead relax to **increase the focal length** of the eye lens so every clear image still falls on the retina.', hi: 'नेत्र में **प्रतिबिंब-दूरी सदैव अपरिवर्तित (`समान`) रहती है**! क्योंकि अभिनेत्र लेंस व रेटिना के बीच की दूरी निश्चित है — वस्तु दूर होने पर पक्ष्माभी पेशियाँ शिथिल होकर लेंस की फोकस दूरी बढ़ा देती हैं ताकि प्रतिबिंब ठीक रेटिना पर ही बने।' },
    },
    {
      num: '10',
      q: { en: 'Why do stars twinkle?', hi: 'तारे क्यों टिमटिमाते हैं?' },
      a: { en: 'Stars are extremely far (`act as **point-sized sources**`). As starlight enters Earth’s atmosphere (`continuous atmospheric refraction through layers of varying density/refractive index`), its path shifts constantly and the amount of starlight reaching our eyes fluctuates — making stars flicker bright and faint (`Twinkling`, Sec 10.5)!', hi: 'तारे अत्यधिक दूर होने से **प्रकाश के बिंदु-स्रोत (`Point-sized sources`)** होते हैं। पृथ्वी के वायुमंडल की भौतिक अवस्थाएँ (`घनत्व व अपवर्तनांक`) अस्थिर होने से तारों से आती किरणों का पथ थोड़ा-थोड़ा बदलता रहता है, जिससे आँखों में प्रवेश करने वाले प्रकाश की मात्रा झिलमिलाती है — कभी चमकीला कभी धुंधला — यही **तारों का टिमटिमाना (`वायुमंडलीय अपवर्तन`)** है!' },
    },
    {
      num: '11',
      q: { en: 'Explain why the planets do not twinkle.', hi: 'व्याख्या कीजिए कि ग्रह क्यों नहीं टिमटिमाते।' },
      a: { en: 'Planets lie much closer to Earth and act as **extended light sources** (`collection of a large number of point-sized sources`). Fluctuations in light intensity from all individual points **average out to ZERO (`शून्य`)**, completely nullifying the twinkling effect (`Sec 10.5`).', hi: 'ग्रह तारों की अपेक्षा पृथ्वी के बहुत पास हैं, अतः उन्हें **विस्तृत प्रकाश-स्रोत (`अनेक बिंदु-स्रोतों का संग्रह`)** माना जाता है। सभी बिंदु-स्रोतों से नेत्रों में प्रवेश करने वाले प्रकाश की मात्रा में कुल परिवर्तन का **औसत मान शून्य** हो जाता है, जिससे टिमटिमाहट का प्रभाव निष्प्रभावित हो जाता है।' },
    },
    {
      num: '12',
      q: { en: 'Why does the sky appear dark instead of blue to an astronaut?', hi: 'किसी अंतरिक्षयात्री को आकाश नीले की अपेक्षा काला क्यों प्रतीत होता है?' },
      a: { en: 'At high orbital altitudes (`outer space`), there is **no atmosphere** (`no gas molecules or fine particles`). Since **no scattering of sunlight** takes place there, no scattered blue light enters the astronaut’s eyes — making the sky appear completely **dark/black (`Sec 10.6.2`)**!', hi: 'अंतरिक्ष या अत्यधिक ऊँचाई पर **कोई वायुमंडल (`वायु कण`) उपस्थित नहीं** होता, जिससे सूर्य के प्रकाश का **कोई प्रकीर्णन नहीं हो पाता**। प्रकीर्णित नीला प्रकाश न पहुँचने के कारण अंतरिक्षयात्री को आकाश **काला (`अंधकारमय`)** प्रतीत होता है!' },
    },
  ],
  flashcards: [
    { front: { en: 'Most Refraction Part + Light Quantity Regulator (`Sec 10.1`)?', hi: 'अधिकांश अपवर्तन करने वाला भाग व प्रकाश मात्रा नियंत्रक?' }, back: { en: '**Cornea** (`outer bulge`) performs **most refraction** | **Iris** adjusts **Pupil size** (`Pupil controls light amount`) | **Retina** = Real + Inverted image (`~2.3 cm eye`).', hi: '**कॉर्निया** से अधिकांश अपवर्तन | **आइरिस पुतली का साइज** बदले → **पुतली प्रवेशित प्रकाश** नियंत्रित करे | **रेटिना** पर वास्तविक व उल्टा प्रतिबिंब!' } },
    { front: { en: 'Ciliary Muscles Action for Near (`25 cm`) vs Distant (`∞`) Objects?', hi: 'निकट (`25 cm`) व दूर (`∞`) देखने पर पक्ष्माभी व फोकस दूरी?' }, back: { en: '**Near (`25 cm`)**: Ciliary **CONTRACT** -> Lens **THICK** -> **Focal length ↓** | **Far (`∞`)**: Ciliary **RELAX** -> Lens **THIN** -> **Focal length ↑**!', hi: '**पास**: पेशियाँ **संकुचित** → लेंस **मोटा** → **फोकस दूरी घटे (`f↓`)** | **दूर**: पेशियाँ **शिथिल** → लेंस **पतला** → **फोकस दूरी बढ़े (`f↑`)**!' } },
    { front: { en: 'Normal Near Point, Far Point & Object-Moved Image Distance `v`?', hi: 'निकट व दूर बिंदु मान एवं बिंब दूर ले जाने पर प्रतिबिंब दूरी (`v`)?' }, back: { en: 'Near Point = **`25 cm`** | Far Point = **`Infinity (∞)`** | Moving object farther **leaves internal eye image distance `v` UNCHANGED** (`Ex Q9`)!', hi: 'निकट बिंदु = **`25 cm`** | दूर बिंदु = **`अनंत (∞)`** | वस्तु दूर ले जाने पर भी **नेत्र में प्रतिबिंब दूरी `v` अपरिवर्तित** रहती है!' } },
    { front: { en: 'Myopia vs Hypermetropia: Focus Spot & Lens Type?', hi: 'निकट-दृष्टि (`Myopia`) बनाम दीर्घ-दृष्टि (`Hypermetropia`) भेद?' }, back: { en: '**Myopia** (`far blurry`): focus **in front** of retina -> **Concave (`-ve D`)** | **Hypermetropia** (`near blurry`): focus **behind** retina -> **Convex (`+ve D`)**!', hi: '**निकटदृष्टि**: रेटिना से **पहले** → **अवतल लेंस (`-D`)** | **दीर्घदृष्टि**: रेटिना के **पीछे** → **उत्तल लेंस (`+D`)**!' } },
    { front: { en: 'Presbyopia Causes, Remedy (`Ex Q5`) & `Ex Q6 / Q7` Power Values?', hi: 'जरा-दूरदृष्टिता व `Ex Q5, Q6, Q7` के सटीक डायोप्टर उत्तर?' }, back: { en: 'Weak ciliary + stiff lens -> **Bifocal (`upper Concave, lower Convex`)** | `Q5 (-5.5D/+1.5D)` = **`-0.18 m / +0.67 m`** | `Q6 (80cm)` = **`-1.25 D`** | `Q7 (1m)` = **`+3.0 D`**!', hi: '**द्विफोकसी** (`ऊपर अवतल, नीचे उत्तल`) | `Q5`: **`-0.18 m / +0.67 m`** | `Q6 (80cm)`: **`-1.25 D`** | `Q7 (1m)`: **`+3.0 D`**!' } },
    { front: { en: 'Two Eyes Field Angle (`p.180`) & Eye Donation Box Rules (`p.182`)?', hi: 'दो नेत्रों का दृष्टि कोण (`पृ. 180`) एवं नेत्र दान नियम (`पृ. 182`)?' }, back: { en: '1 Eye = **`150°`**, 2 Eyes = **`180° + 3D depth`** | Donate within **`4–6 hrs`**, cures up to **`4` people** (`AIDS, Hep B/C, Rabies, Tetanus, Cholera, Meningitis excluded`)!', hi: '1 आँख **`150°`** → 2 आँखें **`180° + 3D गहराई`** | दान: मृत्यु के **`4–6 घंटे`** में → **`4` व्यक्तियों** को रोशनी (`AIDS/Hep/रेबीज वर्जित`)!' } },
    { front: { en: 'Prism Bending Rule, Angle of Deviation & Why Glass Slab Can’t Disperse?', hi: 'प्रिज़्म किरण झुकाव दिशा, विचलन कोण व काँच स्लैब अंतर?' }, back: { en: 'Refracted ray **ALWAYS bends toward PRISM BASE**; angle between incident `PE` & emergent `FS` = **Angle of Deviation `∠D`**. Slabs have **parallel faces** (`non-parallel faces needed!`).', hi: 'किरण सदैव **प्रिज़्म के आधार की ओर मुड़ती है** (`विचलन कोण ∠D`); स्लैब में समांतर पृष्ठ होने से वर्ण विक्षेपण नहीं दिखता!' } },
    { front: { en: 'Dispersion Max/Min Colours + Newton Two-Prism Result (`Fig 10.6`)?', hi: 'विक्षेपण में अधिकतम/न्यूनतम मुड़ाव व न्यूटन द्वि-प्रिज़्म प्रयोग?' }, back: { en: '**Violet bends MOST (`max ∠D`)**, **Red bends LEAST (`longest λ`)**! Inverted 2nd prism recombines spectrum back into a **single WHITE patch**!', hi: '**बैंगनी सर्वाधिक मुड़ता**, **लाल सबसे कम**! दूसरा उल्टा प्रिज़्म सातों वर्णों को पुनः **एकल श्वेत प्रकाश** बना देता है!' } },
    { front: { en: 'Natural Rainbow Direction & Three Raindrop Processes (`10.4`)?', hi: 'इंद्रधनुष दिशा व वर्षा बूँद की तीनों प्रकाशीय प्रक्रियाएँ?' }, back: { en: 'Always **OPPOSITE to Sun**: **(1) Refraction + Dispersion**, **(2) Internal Reflection**, **(3) Refraction** into observer’s eye!', hi: 'सदैव **सूर्य के विपरीत दिशा में**: **(1) अपवर्तन व विक्षेपण**, **(2) आंतरिक परावर्तन**, **(3) पुनः अपवर्तन**!' } },
    { front: { en: 'Atmospheric Refraction (`Stars vs +4m Sun`) & Scattering (`Sky/Space/Red`)?', hi: 'तारे-ग्रह भेद, `+4 min` सूर्य व नीला आकाश / काला अंतरिक्ष / लाल सिग्नल?' }, back: { en: 'Stars **point sources -> twinkle**; Planets **extended -> NO twinkle**; Sun **`+2m + 2m = +4m`**. Air scatters **Blue (`Red λ ≈ 1.8× Blue`)** -> **Red signals least scattered**; **Space = BLACK**!', hi: 'तारे **बिंदु-स्रोत** (`टिमटिमाते`), ग्रह **विस्तृत** (`नहीं`), सूर्य **`+4 min`**! वायु कण **नीला** बिखेरें, **लाल न्यूनतम प्रकीर्णित**; अंतरिक्ष **काला**!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-p10-1',
      examTag: 'RRB ALP 2025 Cycle (16 Feb 2026 Shift 2)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.1): Particle Size & Fine Blue Scattering',
      question: {
        en: 'The colour of scattered light depends on the size of the scattering particles. Very fine particles scatter mainly which colour of light?',
        hi: 'प्रकीर्णित प्रकाश का रंग प्रकीर्णन करने वाले कणों के आकार पर निर्भर करता है। अत्यंत सूक्ष्म कण मुख्यतः किस रंग के प्रकाश को प्रकीर्णित करते हैं?',
      },
      options: {
        en: ['Yellow light', 'Blue light', 'Red light', 'Green light'],
        hi: ['पीले रंग के प्रकाश', 'नीले रंग के प्रकाश', 'लाल रंग के प्रकाश', 'हरे रंग के प्रकाश'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.6.1` (`p.187`)**: **Very fine particles scatter mainly BLUE light** (shortest visible wavelength band), while large particles scatter longer red wavelengths.',
        hi: 'सटीक `NCERT भाग 10.6.1`: **अत्यंत सूक्ष्म कण मुख्य रूप से नीले रंग के प्रकाश को प्रकीर्णित करते हैं**, जबकि बड़े कण अधिक तरंगदैर्घ्य के प्रकाश को प्रकीर्णित करते हैं।',
      },
    },
    {
      id: 'pyq-p10-2',
      examTag: 'RRB Group D 2025 (06 Aug 2026 Shift 10)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.1.1 / Ex Q1): Power of Accommodation',
      question: {
        en: 'What is the ability of the eye lens to adjust its focal length called?',
        hi: 'अभिनेत्र लेंस की अपनी फोकस दूरी को समायोजित करने की क्षमता को क्या कहा जाता है?',
      },
      options: {
        en: ['Myopia', 'Refraction', 'Power of Accommodation', 'Persistence of vision'],
        hi: ['मायोपिया', 'अपवर्तन', 'समंजन क्षमता', 'दृष्टि निर्बंध'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.1.1` & Exercise Q1**: Adjusting eye-lens focal length via ciliary muscles is called **Power of Accommodation (`समंजन क्षमता`)**!',
        hi: 'सटीक `भाग 10.1.1`: पक्ष्माभी पेशियों द्वारा अभिनेत्र लेंस की फोकस दूरी समायोजित करने की क्षमता को **समंजन क्षमता** कहते हैं!',
      },
    },
    {
      id: 'pyq-p10-3',
      examTag: 'RRB Group D 2025 (06 Aug 2026 Shift 11)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.2): Atmospheric Particle Scattering Rule',
      question: {
        en: 'How does the size of atmospheric particles affect the scattering of sunlight?',
        hi: 'वायुमंडलीय कणों का आकार, सूर्य के प्रकाश के प्रकीर्णन को कैसे प्रभावित करता है?',
      },
      options: {
        en: [
          'Smaller particles scatter shorter wavelengths more efficiently',
          'Medium particles scatter only green light efficiently',
          'Irregular particles scatter only yellow light more',
          'Larger particles scatter only red light effectively',
        ],
        hi: [
          'छोटे कण छोटी तरंगदैर्घ्य को अधिक दक्षतापूर्ण रूप से प्रकीर्णित करते हैं',
          'मध्यम कण केवल हरे प्रकाश को ही दक्षतापूर्ण रूप से प्रकीर्णित करते हैं',
          'अनियमित कण केवल पीले प्रकाश को ही अधिक प्रकीर्णित करते हैं',
          'बड़े कण केवल लाल प्रकाश को ही प्रभावी रूप से प्रकीर्णित करते हैं',
        ],
      },
      correctIndex: 0,
      solution: {
        en: '**NCERT `Sec 10.6.2` (`p.187`)**: Tiny air molecules are more effective in **scattering light of shorter wavelengths (`blue end`)** than red (`~1.8× longer`)!',
        hi: '`भाग 10.6.2`: वायुमंडल के सूक्ष्म अणु बड़ी तरंगदैर्घ्य की अपेक्षा **छोटी तरंगदैर्घ्य (`नीले वर्ग`) को अधिक प्रबलता से प्रकीर्णित करते हैं**।',
      },
    },
    {
      id: 'pyq-p10-4',
      examTag: 'RRB Group D 2025 (06 Aug 2026 Shift 12) + Tech Gr-III 2024',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.3): Angle of the Prism',
      question: {
        en: 'What is the angle between the two lateral faces of a triangular glass prism called?',
        hi: 'त्रिभुजाकार काँच के प्रिज़्म के दो पार्श्व फलकों के बीच का कोण क्या कहलाता है?',
      },
      options: {
        en: ['The angle of the prism', 'The angle of refraction', 'The angle of deviation', 'The angle of incidence'],
        hi: ['प्रिज़्म कोण', 'अपवर्तन कोण', 'विचलन कोण', 'आपतन कोण'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.181`**: Two tilted rectangular lateral faces meet at the **Angle of the Prism (`∠A`, प्रिज़्म कोण)**.',
        hi: 'सटीक `NCERT पृ. 181`: काँच के प्रिज़्म के दो पार्श्व फलकों के बीच के कोण को **प्रिज़्म कोण (`∠A`)** कहते हैं।',
      },
    },
    {
      id: 'pyq-p10-5',
      examTag: 'RRB Group D 2025 (09 Aug 2026 Shift 15)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Act 10.1 / Fig 10.4): Prism Bending Toward Base',
      question: {
        en: 'The refracted ray inside the glass prism bends ________.',
        hi: 'प्रिज़्म के अंदर अपवर्तित किरण ________ मुड़ जाती है।',
      },
      options: {
        en: ['Toward the base of the prism', 'Perpendicular to the base', 'Away from the base', 'Along the base'],
        hi: ['प्रिज़्म के आधार की ओर', 'आधार के लंबवत', 'आधार से दूर', 'आधार के अनुदिश'],
      },
      correctIndex: 0,
      solution: {
        en: '**Activity 10.1 (`Fig 10.4`)**: Light enters denser glass bending towards normal and leaves into air away from normal -> net bend is **toward the base of the prism**!',
        hi: '`क्रियाकलाप 10.1`: दोनों अपवर्तक पृष्ठों से अपवर्तन के फलस्वरूप किरण सदैव **प्रिज़्म के आधार की ओर** मुड़ जाती है।',
      },
    },
    {
      id: 'pyq-p10-6',
      examTag: 'RRB Group D 2025 (10 Aug 2026 Shift 17)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.2a): Myopia Focus & Concave Correction',
      question: {
        en: 'Which defect of vision is caused by the eye’s lens focusing images in front of the retina, making distant objects appear blurry, and can be corrected using a concave lens?',
        hi: 'दृष्टि का कौन-सा दोष, नेत्र लेंस द्वारा रेटिना के सामने प्रतिबिंबों को फोकस करने के कारण होता है, जिससे दूर स्थित वस्तुएँ धुंधली दिखाई देती हैं, और इसे अवतल लेंस का उपयोग करके ठीक किया जा सकता है?',
      },
      options: {
        en: ['Myopia', 'Presbyopia', 'Astigmatism', 'Hypermetropia'],
        hi: ['निकट-दृष्टिता (Myopia)', 'जरा दूरदर्शिता (Presbyopia)', 'अबिंदुकता (Astigmatism)', 'दूर-दृष्टिता (Hypermetropia)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.2(a)`**: **Myopia (`निकट-दृष्टिता`)** places distant image **in front of retina** and is corrected by a **Concave lens** (`-ve D`).',
        hi: 'सटीक `भाग 10.2(a)`: **निकट-दृष्टिता (`मायोपिया`)** में दूर की वस्तु का प्रतिबिंब रेटिना के सामने बनता है और संशोधन **अवतल लेंस** से होता है।',
      },
    },
    {
      id: 'pyq-p10-7',
      examTag: 'RRB Group D 2025 (10 Aug 2026 Shift 17)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.4): Prism Dispersion',
      question: {
        en: 'A beam of white light passes through a glass prism and splits into different colours. Which physical phenomenon is primarily responsible for the separation of colours after refraction through the prism?',
        hi: 'सफेद प्रकाश का एक किरणपुंज किसी काँच के प्रिज़्म से होकर गुजरती है और अलग-अलग रंगों में विभक्त हो जाती है। प्रिज़्म के माध्यम से अपवर्तन के बाद रंगों के पृथक्करण के लिए मुख्य रूप से कौन-सी भौतिक घटना उत्तरदायी है?',
      },
      options: {
        en: ['Dispersion of light', 'Absorption of light', 'Scattering of light', 'Reflection of light'],
        hi: ['प्रकाश का विक्षेपण (Dispersion)', 'प्रकाश का अवशोषण', 'प्रकाश का प्रकीर्णन', 'प्रकाश का परावर्तन'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.4` (`p.184`)**: Splitting of white light into its component VIBGYOR spectrum colours is called **Dispersion of light (`विक्षेपण / परिक्षेपण`)**.',
        hi: 'सटीक `भाग 10.4`: श्वेत प्रकाश का इसके सात अवयवी वर्णों में विभाजन **प्रकाश का विक्षेपण (`Dispersion`)** कहलाता है।',
      },
    },
    {
      id: 'pyq-p10-8',
      examTag: 'RRB Group D 2025 (11 Aug 2026 Shift 19)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Fig 10.6): Newton Inverted Two-Prism Recombination',
      question: {
        en: 'A teacher uses two identical prisms placed in opposite (`inverted`) orientations and passes a beam of white light through both. What is the expected outcome on a screen placed after the second prism?',
        hi: 'एक शिक्षक दो समरूप प्रिज़्मों को विपरीत (`उल्टे`) अभिविन्यास में रखकर उनके माध्यम से श्वेत प्रकाश की किरण-पुंज को गुज़ारता है। दूसरे प्रिज़्म के बाद रखे पर्दे पर क्या परिणाम प्राप्त होगा?',
      },
      options: {
        en: [
          'A black region appears where the beam ends',
          'A single white patch/beam appears on the screen',
          'A spectrum with reversed colour order forms',
          'A new set of colours emerge beyond the original seven',
        ],
        hi: [
          'किरणपुंज के अंत में एक काला क्षेत्र दिखाई देता है',
          'पर्दे पर एक एकल श्वेत प्रकाश पुंज दिखाई देता है',
          'विपरीत रंग क्रम वाला एक स्पेक्ट्रम बनता है',
          'मूल रंगों से परे रंगों का एक नया समूह उभरता है',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **Newton Experiment `Fig 10.6` (`p.185`)**: Second inverted prism recombines all 7 spectrum colours back into a **single WHITE beam (`पुनर्योजन`)**!',
        hi: 'सटीक `न्यूटन प्रयोग (चित्र 10.6)`: उल्टा रखा गया दूसरा समरूप प्रिज़्म स्पेक्ट्रम के सभी रंगों को पुनः **एकल श्वेत प्रकाश** में संयोजित कर देता है!',
      },
    },
    {
      id: 'pyq-p10-9',
      examTag: 'RRB Group D 2025 (11 Aug 2026 Shift 20)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.3 / Fig 10.4): Angle of Deviation',
      question: {
        en: 'What is the angle between the incident ray and emergent ray called in the context of a triangular prism?',
        hi: 'प्रिज़्म के संदर्भ में, आपतित किरण और निर्गत किरण के बीच के कोण को क्या कहा जाता है?',
      },
      options: {
        en: ['The angle of refraction', 'The angle of incidence', 'The angle of emergence', 'The angle of deviation'],
        hi: ['अपवर्तन कोण', 'आपतन कोण', 'निर्गमन कोण', 'विचलन कोण'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Fig 10.4` (`p.183`)**: Because prism faces tilt at ∠A, emergent ray `FS` makes an **Angle of Deviation (`∠D` / विचलन कोण)** with the extended incident ray `PE`.',
        hi: 'सटीक `पृ. 183 (चित्र 10.4)`: प्रिज़्म की विशेष आकृति से निर्गत किरण व आपतित किरण की दिशा के बीच बने कोण को **विचलन कोण (`∠D`)** कहते हैं।',
      },
    },
    {
      id: 'pyq-p10-10',
      examTag: 'RRB Group D 2025 (13 Aug 2026 Shift 25)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.1): Iris Controlling Pupil & Light',
      question: {
        en: 'Which part of the human eye regulates/controls the amount of light entering the eye (by adjusting pupil size)?',
        hi: 'मानव नेत्र का कौन-सा भाग, (`पुतली के आकार को बदल कर`) नेत्र में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?',
      },
      options: {
        en: ['Retina', 'Optic Nerve', 'Cornea', 'Iris'],
        hi: ['रेटिना (Retina)', 'दृक् तंत्रिका (Optic Nerve)', 'कॉर्निया (Cornea)', 'परितारिका (Iris)'],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `Sec 10.1` (`p.178`)**: When `Pupil` is not among choices, **Iris (`आइरिस / परितारिका`)** is the dark muscular diaphragm that controls the **size of the pupil**, thereby controlling entering light intensity!',
        hi: '`भाग 10.1`: परितारिका (`Iris`) गहरा पेशीय डायफ्राम है जो **पुतली के आकार (`Size`) को नियंत्रित कर** नेत्र में प्रवेश करने वाले प्रकाश की मात्रा तय करती है।',
      },
    },
    {
      id: 'pyq-p10-11',
      examTag: 'RRB Group D 2025 (13 Aug 2026 Shift 26)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.5 / Ex Q10): Star Twinkling',
      question: {
        en: 'What is the primary reason stars appear to twinkle in the night sky as seen from Earth?',
        hi: 'पृथ्वी से देखने पर रात्रि आकाश में तारे टिमटिमाते हुए प्रतीत होने का मुख्य कारण क्या है?',
      },
      options: {
        en: [
          'The light from stars is refracted by varying atmospheric layers',
          'Stars are closer to Earth than planets',
          'Earth rotates causing starlight to switch off',
          'Stars emit light in varying random flashes',
        ],
        hi: [
          'तारों से निकलने वाला प्रकाश, परिवर्ती वायुमंडलीय परतों द्वारा अपवर्तित होता है',
          'तारे, ग्रहों की तुलना में पृथ्वी के अधिक निकट होते हैं',
          'पृथ्वी के घूमने के कारण तारे बंद होते हैं',
          'तारे असमान तीव्रताओं पर प्रकाश उत्सर्जित करते हैं',
        ],
      },
      correctIndex: 0,
      solution: {
        en: '**NCERT `Sec 10.5` (`p.186`)**: Continuous atmospheric refraction of point-source starlight through physically unstable air layers fluctuates intensity entering our eyes (**Twinkling**).',
        hi: 'सटीक `भाग 10.5`: वायुमंडल के निरंतर बदलते अपवर्तनांक वाली परतों में अपवर्तन के कारण बिंदु-स्रोत तारों की चमक झिलमिलाती (`टिमटिमाती`) दिखती है।',
      },
    },
    {
      id: 'pyq-p10-12',
      examTag: 'RRB Group D 2025 (14 Aug 2026 Shift 30)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.3–10.4): Prism vs Parallel Glass Slab',
      question: {
        en: 'Why does white light split into distinct different colours when passing through a prism, but NOT when passing through a rectangular glass slab?',
        hi: 'प्रिज़्म से गुजरने पर श्वेत प्रकाश विभिन्न रंगों में क्यों विभक्त हो जाता है, लेकिन आयताकार काँच के स्लैब से गुजरने पर ऐसा क्यों नहीं होता है?',
      },
      options: {
        en: [
          'Because a prism is thinner than a slab',
          'Because a prism has inclined non-parallel lateral sides',
          'Because a prism is transparent while a slab is not',
          'Because a prism is made of crystal instead of glass',
        ],
        hi: [
          'क्योंकि प्रिज़्म एक स्लैब से पतला होता है',
          'क्योंकि प्रिज़्म में झुकी हुई गैर-समानांतर भुजाएँ होती हैं',
          'क्योंकि केवल प्रिज़्म पारदर्शी होता है',
          'क्योंकि दोनों अलग पदार्थ के बने हैं',
        ],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `Sec 10.3` (`p.181`)**: A glass slab has **parallel opposite refracting faces** (`so emergent colours exit parallel & recombined`), whereas a **prism has non-parallel faces inclined at `∠A`** separating all colours clearly!',
        hi: '`भाग 10.3`: स्लैब के विपरीत पृष्ठ समानांतर होते हैं, जबकि **प्रिज़्म की भुजाएँ कोण `∠A` पर झुकी (`गैर-समानांतर`)** होने से विभिन्न वर्ण अलग-अलग कोण पर बाहर निकल स्पष्ट स्पेक्ट्रम बनाते हैं!',
      },
    },
    {
      id: 'pyq-p10-13',
      examTag: 'RRB Group D 2025 (18 Aug 2026 Shift 36)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.2c): Presbyopia With Ageing',
      question: {
        en: 'With ageing, the power of accommodation of the human eye decreases, causing difficulty in viewing nearby objects clearly. This defect is known as:',
        hi: 'आयु में वृद्धि होने के साथ-साथ मानव नेत्र की समंजन क्षमता घट जाती है, जिससे पास की वस्तुओं को स्पष्ट देखने में कठिनाई होती है। इस दोष को किस रूप में जाना जाता है?',
      },
      options: {
        en: ['Myopia', 'Astigmatism', 'Hypermetropia', 'Presbyopia'],
        hi: ['निकट-दृष्टि दोष (Myopia)', 'अबिंदुकता (Astigmatism)', 'दीर्घ-दृष्टि दोष (Hypermetropia)', 'जरा-दूरदृष्टिता (Presbyopia)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.2(c)`**: Ageing weakens ciliary muscles and reduces lens flexibility -> **Presbyopia (`जरा-दूरदृष्टिता`)** (`corrected with Bi-focal lenses`)!',
        hi: 'सटीक `भाग 10.2(c)`: आयु के साथ समंजन क्षमता घटने से होने वाले दोष को **जरा-दूरदृष्टिता (`Presbyopia`)** कहते हैं।',
      },
    },
    {
      id: 'pyq-p10-14',
      examTag: 'RRB Group D 2025 (19 Aug 2026 Shift 39)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.1.1): Ciliary Contraction',
      question: {
        en: 'When ciliary muscles contract (`looking at a nearby object`), the crystalline eye lens becomes __________.',
        hi: 'जब पक्ष्माभी पेशियाँ (`ciliary muscles`) संकुचित होती हैं, तो नेत्र लेंस __________।',
      },
      options: {
        en: [
          'Thicker and the focal length increases',
          'Thinner and the focal length increases',
          'Thicker and the focal length decreases',
          'Thinner and the focal length decreases',
        ],
        hi: [
          'मोटा हो जाता है तथा फोकस दूरी बढ़ जाती है',
          'पतला हो जाता है तथा फोकस दूरी बढ़ जाती है',
          'मोटा हो जाता है तथा फोकस दूरी कम हो जाती है',
          'पतला हो जाता है तथा फोकस दूरी कम हो जाती है',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.1.1` (`p.178`)**: When viewing nearby objects, **ciliary muscles contract -> curvature rises -> lens becomes THICKER -> focal length DECREASES (`f↓`)**!',
        hi: 'सटीक `पृ. 178`: पक्ष्माभी पेशियाँ सिकुड़ने पर अभिनेत्र लेंस की वक्रता बढ़कर वह **मोटा हो जाता है और उसकी फोकस दूरी घट जाती है**!',
      },
    },
    {
      id: 'pyq-p10-15',
      examTag: 'RRB Tech Gr-III 2024 (20 Dec 2024 Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.5): Advance Sunrise & Delayed Sunset',
      question: {
        en: 'Which of the following events is a direct consequence of atmospheric refraction?',
        hi: 'निम्नलिखित में से कौन-सी परिघटना वायुमंडलीय अपवर्तन का प्रत्यक्ष परिणाम है?',
      },
      options: {
        en: [
          'Curved mirrors forming enlarged image of an object',
          'Image formation by plane mirrors',
          'Advance sunrise and delayed sunset (+4 min day extension)',
          'Mirror reflection inside periscopes',
        ],
        hi: [
          'वक्रित दर्पणों द्वारा आवर्धित प्रतिबिंब बनाना',
          'समतल दर्पणों द्वारा प्रतिबिंब बनना',
          'अग्रिम सूर्योदय और विलंबित सूर्यास्त (+4 मिनट)',
          'परिदर्शी में समतल दर्पण परावर्तन',
        ],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 10.5` (`Fig 10.10`)**: Sun appears **2 min BEFORE** actual sunrise and stays visible **2 min AFTER** actual sunset solely due to **Atmospheric Refraction** (`+4 min` total)!',
        hi: 'सटीक `चित्र 10.10`: **वायुमंडलीय अपवर्तन** के कारण ही **अग्रिम सूर्योदय (`2 min पहले`) व विलंबित सूर्यास्त (`2 min बाद`)** दिखाई देता है।',
      },
    },
    {
      id: 'pyq-p10-16',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec 2024 Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.2): Matching Myopia & Hypermetropia Pairs',
      question: {
        en: 'Select the correct matching pair based on the refractive defects of vision:',
        hi: 'दृष्टि के अपवर्तन दोषों के आधार पर निम्नलिखित विकल्पों में से सही युग्म का चयन कीजिए:',
      },
      options: {
        en: [
          '(a) Hypermetropia — near-sightedness; (b) Presbyopia — far-sightedness',
          '(a) Presbyopia — near-sightedness; (b) Hypermetropia — far-sightedness',
          '(a) Presbyopia — near-sightedness; (b) Myopia — far-sightedness',
          '(a) Myopia — near-sightedness; (b) Hypermetropia — far-sightedness',
        ],
        hi: [
          '(a) हाइपरमेट्रोपिया — निकट-दृष्टि दोष; (b) प्रेसबायोपिया — दीर्घ-दृष्टि दोष',
          '(a) प्रेसबायोपिया — निकट-दृष्टि दोष; (b) हाइपरमेट्रोपिया — दीर्घ-दृष्टि दोष',
          '(a) प्रेसबायोपिया — निकट-दृष्टि दोष; (b) मायोपिया — दीर्घ-दृष्टि दोष',
          '(a) मायोपिया — निकट-दृष्टि दोष; (b) हाइपरमेट्रोपिया — दीर्घ-दृष्टि दोष',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.2`**: **Myopia = Near-sightedness (`निकट-दृष्टि`)** (`concave fix`), and **Hypermetropia = Far-sightedness (`दीर्घ-दृष्टि`)** (`convex fix`).',
        hi: 'सटीक `भाग 10.2`: **मायोपिया = निकट-दृष्टि दोष (`अवतल लेंस`)** तथा **हाइपरमेट्रोपिया = दीर्घ-दृष्टि दोष (`उत्तल लेंस`)**।',
      },
    },
    {
      id: 'pyq-p10-17',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec & 23 Dec 2024)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.4): Maximum Deviation Colour in Prism',
      question: {
        en: 'When white light falls on a triangular glass prism, ________ colour undergoes MAXIMUM deviation (`bends the most`).',
        hi: 'जब श्वेत प्रकाश काँच के प्रिज़्म पर पड़ता है, तो किस वर्ण में अधिकतम विचलन होता है?',
      },
      options: {
        en: ['Blue', 'Yellow', 'Violet', 'Red'],
        hi: ['नीला', 'पीला', 'बैंगनी', 'लाल'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `p.184`**: Across the `VIBGYOR` band, **Violet (`बैंगनी` — shortest wavelength / lowest speed in glass)** bends/deviates the **MOST**, while **Red** deviates the **LEAST**.',
        hi: 'सटीक `NCERT पृ. 184`: सात रंगों में **बैंगनी (`Violet`) रंग सर्वाधिक विचलित होता है** तथा लाल सबसे कम।',
      },
    },
    {
      id: 'pyq-p10-18',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec & 23 Dec 2024)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.1): Tyndall Effect Phenomenon',
      question: {
        en: 'Which of the following phenomena is responsible for the Tyndall effect (`visibility of light beams in mist or smoke`)?',
        hi: 'निम्नलिखित में से कौन-सी घटना टिंडल प्रभाव (`धुएँ या कुहासे में प्रकाश किरण-पुंज दिखना`) के लिए जिम्मेदार है?',
      },
      options: {
        en: ['Refraction of light', 'Dispersion of light', 'Reflection of light', 'Scattering of light'],
        hi: ['प्रकाश का अपवर्तन', 'प्रकाश का विक्षेपण', 'प्रकाश का परावर्तन', 'प्रकाश का प्रकीर्णन'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.6.1` (`p.187`)**: **Scattering of light by colloidal particles** (`dust, smoke, mist droplets`) gives rise to the **Tyndall effect (`टिंडल प्रभाव`)**!',
        hi: 'सटीक `भाग 10.6.1`: **कोलॉइडी कणों द्वारा प्रकाश का प्रकीर्णन** ही **टिंडल प्रभाव** उत्पन्न करता है!',
      },
    },
    {
      id: 'pyq-p10-19',
      examTag: 'RRB Tech Gr-III 2024 (29 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.2): Power = 1 / f Numerical (`+1 D`)',
      question: {
        en: 'If the power of a corrective lens is `+1 Dioptre`, then the focal length of the lens will be:',
        hi: 'यदि किसी लेंस की क्षमता `+1 डाइऑप्टर` (`+1 D`) है, तो उस लेंस की फोकस दूरी क्या होगी?',
      },
      options: {
        en: ['0.5 m', '1 m', '0.75 m', '0.25 m'],
        hi: ['0.5 m', '1 m', '0.75 m', '0.25 m'],
      },
      correctIndex: 1,
      solution: {
        en: 'Power `P = 1 / f(in metres)` ⇒ **`f = 1 / (+1) = +1 m` (`Convex converging lens`)**!',
        hi: 'सूत्र `P = 1 / f` (`मीटर में`) से **`f = 1 / (+1) = 1 m`** (`धनात्मक अर्थात उत्तल लेंस`)!',
      },
    },
    {
      id: 'pyq-p10-20',
      examTag: 'RRB Tech Gr-III 2024 (20 Dec & 29 Dec 2024)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.4): Sir Isaac Newton Prism Pioneer',
      question: {
        en: 'Who among the following scientists was the first to use a glass prism to obtain/discover the spectrum of sunlight?',
        hi: 'निम्नलिखित में से सूर्य के प्रकाश के स्पेक्ट्रम (`वर्णक्रम`) की खोज के लिए काँच के प्रिज़्म का उपयोग करने वाले पहले वैज्ञानिक कौन थे?',
      },
      options: {
        en: ['Albert Einstein', 'Archimedes', 'Sir Isaac Newton', 'Prof CV Raman'],
        hi: ['अल्बर्ट आइंस्टाइन', 'आर्किमिडीज', 'सर आइजैक न्यूटन', 'प्रोफेसर सी.वी. रमन'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `p.184` (`Sec 10.4`)**: **Sir Isaac Newton** was the first scientist to use a glass prism (`and inverted second prism`) to prove sunlight is composed of **7 colours**.',
        hi: 'सटीक `NCERT पृ. 184`: **सर आइजैक न्यूटन** ने सर्वप्रथम सूर्य का स्पेक्ट्रम प्राप्त करने हेतु काँच के प्रिज़्म का उपयोग किया।',
      },
    },
    {
      id: 'pyq-p10-21',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec 2024 Shift 3)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.4): VIBGYOR Relative Min Deviation Trap',
      question: {
        en: 'Among the following four colours (`Violet, Green, Blue, Yellow`), which colour of light is bent through a MINIMUM angle when passing through a glass prism?',
        hi: 'काँच के प्रिज़्म में से गुजरते समय निम्नलिखित में से (`बैंगनी, हरा, नीला, पीला`) किस वर्ण का प्रकाश न्यूनतम कोण पर मुड़ता है?',
      },
      options: {
        en: ['Violet', 'Green', 'Blue', 'Yellow'],
        hi: ['बैंगनी', 'हरा', 'नीला', 'पीला'],
      },
      correctIndex: 3,
      solution: {
        en: '**Smart RRB VIBGYOR Trap!** Wavelength rises along **`V → I → B → G → Y → O → R`**, while prism bending DECREASES! Since Red/Orange aren’t listed here, **Yellow (`पीला`)** has the longest wavelength among the four options and bends through the **minimum angle**!',
        hi: '**बेहतरीन VIBGYOR ट्रिक!** मुड़ने का घटता क्रम: `V > I > B > G > Y > O > R`! यहाँ लाल/नारंगी विकल्प में न होने से इन चारों में **पीला (`Yellow`) रंग न्यूनतम कोण पर मुड़ता है**!',
      },
    },
    {
      id: 'pyq-p10-22',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec 2024 Shift 3)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.2): Red Danger Signal Physics',
      question: {
        en: 'The danger signal lights are usually red in colour because red is:',
        hi: 'खतरे के संकेत का प्रकाश आमतौर पर लाल रंग का क्यों होता है?',
      },
      options: {
        en: [
          'highest scattered by fog or smoke',
          'not scattered at all anywhere',
          'highest reflected by fog or smoke',
          'least scattered by fog or smoke',
        ],
        hi: [
          'क्योंकि लाल रंग का कोहरे या धुएँ में सबसे अधिक प्रकीर्णन होता है',
          'क्योंकि लाल रंग का कहीं प्रकीर्णन नहीं होता है',
          'क्योंकि लाल रंग का कोहरे में सबसे अधिक परावर्तन होता है',
          'क्योंकि लाल रंग का कोहरे या धुएँ में सबसे कम प्रकीर्णन होता है',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `p.187` (`Sec 10.6.2`)**: Red (`~1.8× blue wavelength`) is **least scattered by fog or smoke**, so danger signals stay clearly visible from far away!',
        hi: 'सटीक `NCERT पृ. 187`: **लाल रंग कोहरे या धुएँ से सबसे कम प्रकीर्णित** होता है, इसीलिए दूर से देखने पर भी यह साफ लाल दिखता है!',
      },
    },
    {
      id: 'pyq-p10-23',
      examTag: 'RRB Tech Gr-III 2024 (23 Dec 2024 Shift 3)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.1): Colour Factor in Tyndall Scattering',
      question: {
        en: 'What determines the colour of scattered light in the Tyndall effect?',
        hi: 'टिंडल प्रभाव में प्रकीर्णित प्रकाश का रंग किसके द्वारा निर्धारित होता है?',
      },
      options: {
        en: [
          'The angle of incidence of the incoming light',
          'The angle of refraction of the emerging light',
          'The distance between light source and particles',
          'The size of the scattering particles',
        ],
        hi: [
          'आपतित प्रकाश के आपतन कोण द्वारा',
          'निर्गत प्रकाश के अपवर्तन कोण द्वारा',
          'प्रकाश स्रोत और कणों के बीच की दूरी द्वारा',
          'प्रकीर्णन कणों के आकार (साइज) द्वारा',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `p.187` (`Sec 10.6.1`)**: “The colour of the scattered light depends on **the size of the scattering particles**” (`fine -> blue; larger -> red; huge -> white`)!',
        hi: 'सटीक `NCERT पृ. 187`: **प्रकीर्णित प्रकाश का वर्ण, प्रकीर्णन करने वाले कणों के साइज़ पर निर्भर करता है**!',
      },
    },
    {
      id: 'pyq-p10-24',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.2): Blue Colour of Clean Sky',
      question: {
        en: 'Which optical phenomenon is directly responsible for the blue colour of the clean daytime sky?',
        hi: 'स्वच्छ आकाश के नीले रंग के लिए निम्नलिखित में से कौन-सी प्रकाशीय परिघटना मुख्य रूप से उत्तरदायी है?',
      },
      options: {
        en: ['Refraction of light', 'Dispersion of light', 'Scattering of light', 'Total internal reflection'],
        hi: ['प्रकाश का अपवर्तन', 'प्रकाश का विक्षेपण', 'प्रकाश का प्रकीर्णन', 'पूर्ण आंतरिक परावर्तन'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.6.2` (`What You Have Learnt p.188`)**: Air molecules scatter short-wavelength **Blue** strongly via **Scattering of light (`प्रकाश का प्रकीर्णन`)**!',
        hi: 'सटीक `भाग 10.6.2`: वायु अणुओं द्वारा छोटी तरंगदैर्घ्य के **प्रकाश के प्रकीर्णन (`Scattering`)** के कारण ही आकाश नीला दिखाई देता है!',
      },
    },
  ],
};
export default C10_CH10_EYE_DATA;
