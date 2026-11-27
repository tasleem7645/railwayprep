/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc110.pdf, Pages 184–207) + Railway Acoustics Deep-Dive
 * Chapter 10: Sound Waves — Characteristics & Applications (ध्वनि तरंगें — अभिलक्षण एवं अनुप्रयोग) — Gold Standard v3
 * Complete Coverage: 10.1 Production by Vibrations (`Tuning Fork 10.1.1, Vocal Cords Larynx, Kongthong Whistling Village`) ->
 * 10.2–10.4 Propagation in Solid/Liquid/Gas, Vacuum Bell Jar (`No Sound in Space`), Slinky & Piston `C`/`R` Longitudinal Mechanical Waves, Sonic Boom, Seismic Waves, Microphone/Speaker Energy Transfer ->
 * 10.5–10.6 Graph & Wave Equation `v = λν`, `ν = 1/T` (`Ex 10.1–10.4`, Speed Table 10.1 Steel 5000 > Water 1500 > Air 340, Temp `0°C 331 -> 22°C 344`), Pitch, Loudness (`dB`), Timbre/Overtones, Octave `2:1`, C.V. Raman Tabla Syahi & Human Ear (`Eardrum -> Ossicles -> Cochlea`) ->
 * 10.7–10.8 Reflection, Echo (`≥0.1s, 17m`, `Ex 10.5`), Reverberation (`<0.05s`, Curtains/Carpets, Gol Gumbaz), Audible `20Hz–20kHz` vs Infrasonic/Ultrasonic, Bats/Echolocation, Ultrasound/Kidney Stones, SONAR `d = vt/2` (`Ex 10.6`) & Drones.
 * All 8 Activities (`10.1–10.8`), 13 In-Text Qs, 15 Exercises verified vs ihsc1an (`65/331 s, 3812.5 m, 0.04 m / 8500 Hz, 2:9`), 24 Pure RRB Sound PYQs.
 */

export const C9_CH10_SOUND_DATA = {
  id: 'c9-phy-ch10',
  classId: 'class9',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 10,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 10: Sound Waves — Characteristics & Applications (CBT Edition)',
  blueprintSvgKey: 'c9-ch10-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Longitudinal Waves (`C/R`), Medium Need (`Bell Jar`), Speed Order (`Steel > Water > Air`) & Temp Effect', hi: 'अनुदैर्ध्य तरंगें (`C/R`), माध्यम आवश्यकता (`बेलजार`), चाल क्रम (`ठोस > द्रव > गैस`) व ताप प्रभाव' }, pct: 28 },
    { label: { en: 'Wave Equation `v = λ · ν` (`ν = 1/T`), Amplitude (`Loudness / dB`), Frequency (`Pitch`) & Timbre (`Raman`)', hi: 'तरंग सूत्र `v = λ · ν` (`ν = 1/T`), आयाम (`प्रबलता dB`), आवृत्ति (`तारत्व`) व गुणता (`Timbre`)' }, pct: 26 },
    { label: { en: 'Echo (`≥0.1 s, ≥17 m`), Reverberation (`<0.05 s`, Curtains/Acoustic Panels, Stethoscope) & Human Ear', hi: 'प्रतिध्वनि (`≥0.1 s, 17 m`), अनुरणन (`<0.05 s`, पर्दे/कालीन, स्टेथोस्कोप) व मानव कर्ण' }, pct: 24 },
    { label: { en: 'Audible (`20 Hz–20 kHz`), Infrasonic (`<20 Hz`), Ultrasonic (`>20 kHz`, Bats, Cleaning, `SONAR d = vt/2`)', hi: 'श्रव्य (`20 Hz–20 kHz`), अवश्रव्य (`<20 Hz`), पराश्रव्य (`>20 kHz`, चमगादड़, अल्ट्रासाउंड व SONAR)' }, pct: 22 },
  ],
  title: {
    en: 'Chapter 10: Sound Waves — Characteristics & Applications',
    hi: 'अध्याय 10: ध्वनि तरंगें — अभिलक्षण एवं अनुप्रयोग',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • C/R Longitudinal Waves, v=λν Numericals, Human Ear, Echo/Reverb & SONAR (`ihsc110`)',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • अनुदैर्ध्य C/R तरंगें, v=λν आंकिक, मानव कान, प्रतिध्वनि, अनुरणन व SONAR',
  },
  metrics: {
    pages: 24,
    activities: 8,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-phy-ch10/hero-sound-waves.webp',
    caption: {
      en: 'Acoustics Workbench (`NCERT Ch 10`): Vibrating Tuning Fork (`10.1.1`), Longitudinal Slinky Compression/Rarefaction + Sine Density Trace (`Fig 10.9, 10.16`), Submarine SONAR (`Fig 10.28`) & Echolocating Bat (`Fig 10.27`).',
      hi: 'ध्वनिकी प्रयोगशाला (`NCERT अध्याय 10`): कंपमान स्वरित्र द्विभुज (`10.1.1`), अनुदैर्ध्य स्लिंकी संपीडन-विरलन + घनत्व ग्राफ (`चित्र 10.16`), पनडुब्बी सोनार (`चित्र 10.28`) एवं चमगादड़ (`चित्र 10.27`)।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Origin & Medium Need (`10.1–10.4`)**: Vibration (`back-and-forth motion`) creates sound (`Vocal Cords Larynx`, Steel/Al **Tuning Fork**). Sound is a **Longitudinal Mechanical Wave** (`particles oscillate PARALLEL ∥ to wave via **Compressions C** [high density Crest] & **Rarefactions R** [low density Trough]`). **Disturbance/Energy travels — particles stay local!** Needs a medium (**Vacuum Bell Jar fails; astronauts talk electronically!**). **Speed order**: **Solid (`Steel ~5000 m/s`) > Liquid (`Water ~1500 m/s`) > Gas (`Air 331 @ 0°C -> 344 m/s @ 22°C`)** (`increases with T & humidity`).',
      hi: '**उत्पत्ति, माध्यम व तरंग प्रकृति (`10.1–10.4`)**: कंपन से ध्वनि बनती है (`वाक् तंतु कंठ, स्वरित्र द्विभुज`)। ध्वनि एक **अनुदैर्ध्य यांत्रिक तरंग** है (`कण संचरण के समानांतर ∥ दोलन कर संपीडन C व विरलन R बनाते हैं`)। **केवल ऊर्जा/विक्षोभ आगे जाता है, माध्यम के कण नहीं!** **निर्वात में संचरण शून्य** (`बेलजार व अंतरिक्ष में आवाज नहीं`)। **चाल क्रम**: **ठोस (`स्टील 5000`) > द्रव (`जल 1500`) > गैस (`वायु 340 m/s`)** (`ताप व आर्द्रता बढ़ने से चाल ↑: 0°C 331 → 22°C 344 m/s`)।',
    },
    {
      en: '**Wave Equation & Perception (`10.5–10.6`)**: **`v = λ · ν`**, Frequency **`ν = 1/T`** (**SI: Hertz `Hz` = `s⁻¹`**). Speed depends **STRICTLY on medium (`NOT ν` — higher `ν` shrinks `λ`)**. **Pitch (`तारत्व`)** ↔ **Frequency (`ν`)**; **Loudness (`प्रबलता`, `dB`: `60` talk, `>100` cracker)** ↔ **Amplitude**; **Quality / Timbre (`गुणता`)** separates instruments (`overtones`; **C.V. Raman studied Tabla `Syahi`**; **Octave** = `2:1`). **Human Ear (`Fig 10.24`)**: **Eardrum -> Middle Bones (`amplify`) -> Cochlea (`electrical signal -> Brain`)**.',
      hi: '**तरंग समीकरण व मानव बोध (`10.5–10.6`)**: **`v = λ · ν`**, **`ν = 1/T`** (**SI मात्रक हर्ट्ज `Hz`**)। **चाल केवल माध्यम पर निर्भर (`आवृत्ति बढ़ने पर λ घटता`)**। **तारत्व** ↔ **आवृत्ति (`सीटी ↑, ढोल ↓`)**; **प्रबलता (`dB`)** ↔ **आयाम**; **गुणता (`Timbre`)** ↔ **अधिस्वरक (`C.V. रमन व तबला स्याही`)**; **अष्टक (`Octave`)** = `2:1` आवृत्ति। **कान (`चित्र 10.24`)**: **कर्णपटल → अस्थियाँ (`प्रवर्धन`) → कर्णावर्त (`विद्युत संकेत`)**।',
    },
    {
      en: '**Echo (`≥0.1 s`) & Reverberation (`<0.05 s`) (`10.7`)**: **Clear Echo** requires time gap **`≥ 0.1 s`** ⇒ **`2d = v·t` ⇒ min distance at `340 m/s` = `34/2 = 17 m`** (`rises when temperature rises!`). Repeated reflections reaching within **`< 0.05 s`** blend/smear words = **Reverberation (`अनुरणन`)** -> reduced using **curtains, carpets, cushioned seats, acoustic wall boards** (`plus **Gol Gumbaz** whispering gallery & **Stethoscope** multiple reflections`).',
      hi: '**प्रतिध्वनि (`Echo`) व अनुरणन (`10.7`)**: स्पष्ट **प्रतिध्वनि** हेतु समय अंतराल **`≥ 0.1 s`** ⇒ **`2d = v·t`** से **`340 m/s` पर न्यूनतम दूरी = `17 m`** (`ताप ↑ ⇒ चाल ↑ ⇒ न्यूनतम दूरी ↑`)। यदि परावर्तन **`< 0.05 s`** में हों तो शब्द गूँज कर अस्पष्ट हो जाएँ = **अनुरणन** → **मोटे पर्दे, कालीन, गद्देदार सीट व ध्वनि-अवशोषक पैनल** से कम करते हैं (`गोल गुम्बज बीजापुर, स्टेथोस्कोप बहु-परावर्तन`)।',
    },
    {
      en: '**Hearing Spectrum & SONAR (`10.8`)**: **Human Audible Range**: **`20 Hz – 20,000 Hz (20 kHz)`** (`Ex 10.2`: `17.2 m` to `1.72 cm` in air). **Infrasonic (`< 20 Hz`)**: earthquakes, volcanoes, elephants. **Ultrasonic (`> 20 kHz`)**: bats (`echolocation Fig 10.27`), dolphins, dogs, ultrasound medical imaging, kidney-stone breaking, delicate jewellery/electronics cleaning, metal cracks & **`SONAR d = v·t/2` (`Ex 10.6`: `0.90 s @ 1530 = 688.5 m`)**!',
      hi: '**श्रव्यता परास व SONAR (`10.8`)**: **मानव श्रव्य**: **`20 Hz – 20 kHz`** (`वायु में λ: 17.2 m से 1.72 cm`)। **अवश्रव्य (`< 20 Hz`)**: भूकंप, ज्वालामुखी, हाथी। **पराश्रव्य (`> 20 kHz`)**: चमगादड़ (`प्रतिध्वनि निर्धारण चित्र 10.27`), डॉल्फिन, कुत्ते, अल्ट्रासोनोग्राफी, गुर्दे पथरी तोड़ना, नाजुक सफाई, धातु दरार जाँच व **SONAR (`d = v·t/2`, उदा. 10.6: `688.5 m`)**!',
    },
  ],
  sections: [
    {
      id: 'sound-production-medium-longitudinal',
      number: '10.1–10.4',
      flowDiagramKey: 'c9-ch10-blueprint-mindmap',
      diagramKey: 'c9-ch10-longitudinal-cr-wave-diagram',
      title: {
        en: 'Vibration Origin (`Tuning Fork, Larynx, Kongthong`), Medium Proof (`Bell Jar`), Longitudinal `C/R` Waves & Energy Transfer',
        hi: 'ध्वनि उत्पादन (`कंपन, वाक् तंतु, स्वरित्र द्विभुज`), माध्यम (`बेलजार`), अनुदैर्ध्य `C/R` तरंग व ऊर्जा संचरण (`10.1–10.4`)',
      },
      summaryTag: {
        en: 'NCERT Pages 184–192 • Activities 10.1–10.6, Bell Jar Vacuum, Sonic Boom, Seismic P-Waves & Mic-Speaker Transducers',
        hi: 'NCERT पृ. 184–192 • क्र. 10.1–10.6, निर्ववात बेलजार, पराध्वनिक ध्वनि बूम, भूकंप तरंग, माइक व स्पीकर (`चित्र 10.15`)',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Sound Originates From Vibration (`Tuning Fork, Vocal Cords`) & Requires a Material Medium (`Bell Jar Experiment`)',
            hi: '1. ध्वनि की उत्पत्ति (`कंपन, वाक् तंतु व स्वरित्र द्विभुज`) तथा माध्यम की अनिवार्यता (`बेलजार प्रयोग 10.7`)',
          },
          conceptStory: {
            en: 'Remember **Chapter 7**: Sound is a **form of energy (`cannot be created/destroyed, only transformed`)** generated exclusively by **==vibrating objects (`कंपन — आगे-पीछे की आवर्ती दोलन गति`, Act 10.1 rubber band)==**! When vibrations stop, sound stops.\n• **How Humans & Animals Produce Sound (`p.185–186 Boxes`)**:\n  - Humans vibrate muscular **==Vocal Cords (`वाक् तंतु`)==** stretched inside the throat **Voice Box / Larynx (`कंठ`, Fig 10.3)** shaped by tongue, lips, mouth & nasal cavity; grasshoppers/crickets rub wings or legs; cymbal (`Manjira`, Fig 10.1) uses metallic **sonority (`ध्वानिकता`)**.\n  - **Cultural Curiosity (`p.186`)**: **Kongthong (`Whistling Village`, near Shillong, Meghalaya)** gives every newborn a unique musical lullaby name tune called **==Jingrwai Iawbei==**!\n• **Tuning Fork (`स्वरित्र द्विभुज`, 10.1.1)**: U-shaped **steel or aluminium** bar with stem & two prongs struck gently against a soft rubber pad (`touching water surface splashes ripples — Act 10.2!`).\n• **Medium Mandatory (`Sec 10.2`, Fig 10.7 Vacuum Bell Jar)**: Sound travels cleanly through **Solids (`wooden desk Act 10.3`)**, **Liquids (`submerged spoons Act 10.4`)** & **Gases**. Yet pumping air out of a sealed glass bell jar dims an electric bell to **complete silence (`even while hammer clearly keeps vibrating!`, Group D Shift 18 PYQ)**. Therefore, **==Sound CANNOT travel in Vacuum==** — astronauts doing spacewalks MUST use electronic radio links (`Exercise Q8`)!',
            hi: 'अध्याय 7 से याद रखें: **ध्वनि ऊर्जा का एक रूप है** जो सदैव **==कंपन करती हुई वस्तुओं (`आगे-पीछे की आवर्ती दोलन गति`) से उत्पन्न होती है (`क्रियाकलाप 10.1`)==** — कंपन रुकते ही ध्वनि बंद!\n• **मानव, जंतु व अनोखी भारतीय परंपरा (`पृ. 185–186`)**:\n  - मनुष्यों में गले के **वाक् यंत्र / कंठ (`Larynx`)** में कसे पेशीय **==वाक् तंतु (`Vocal Cords`, चित्र 10.3)==** कंपन कर ध्वनि बनाते हैं (`टिड्डे-झींगुर पंख/टाँग रगड़कर`, `मंजीरा धात्विक ध्वानिकता`)।\n  - **जिज्ञासा-सूत्र (`मेघालय`)**: शिलांग के पास **कोंग थोंग (`Whistling Village`)** में हर व्यक्ति का नाम एक अनूठी धुन होता है — इस परंपरा को **==जिंगरवाई इओबेई (`Jingrwai Iawbei`)==** कहते हैं!\n• **स्वरित्र द्विभुज (`Tuning Fork`, 10.1.1)**: **स्टील या एल्युमिनियम** की `U` आकार छड़ जिसकी भुजा को नरम रबड़ पैड पर मारते हैं (`जल सतह छूने पर तरंगें उठना कंपन सिद्ध करे — क्र. 10.2`)।\n• **माध्यम की अनिवार्यता (`भाग 10.2`, चित्र 10.7 बेलजार)**: **क्र. 10.3 (`डेस्क ठोस`) व क्र. 10.4 (`जल में डूबे चम्मच द्रव`)** व गैस तीनों से ध्वनि चलती है। परंतु **बेलजार से निर्वात पंप द्वारा वायु बाहर निकालने पर विद्युत घंटी हिलती तो दिखती है पर ध्वनि शून्य हो जाती है** (`Group D Shift 18`)! अतः **==ध्वनि निर्वात में कभी नहीं चल सकती==** — इसलिए अंतरिक्ष यात्री अंतरिक्ष में केवल रेडियो उपकरण से संवाद करते हैं (`अभ्यास Q8`)!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch10/real/tuning_fork.webp',
            title: { en: 'Real Acoustic Standard (`Sec 10.1.1`): Single-Frequency Steel Tuning Fork (`659 Hz` Prongs)', hi: 'वास्तविक ध्वनि प्रयोग उपकरण (`भाग 10.1.1`): एकल आवृत्ति स्वरित्र द्विभुज (`Tuning Fork`)' },
            caption: {
              en: 'Striking either prong softly on rubber sets both prongs vibrating at a clean pure tone (Sec 10.1.1 & Act 10.2) producing alternating compressions and rarefactions.',
              hi: 'नरम रबड़ पैड पर मारने से स्टील स्वरित्र द्विभुज की दोनों भुजाएँ शुद्ध एकल आवृत्ति (`Tone`) के संपीडन-विरलन उत्पन्न करती हैं।',
            },
          },
          inlinePyqIds: ['pyq-c9p10-18', 'pyq-c9p10-19'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Compressions (`C`), Rarefactions (`R`), Longitudinal vs Transverse Waves, Energy Transfer & Mic/Speaker (`10.3–10.4`)',
            hi: '2. संपीडन (`C`) व विरलन (`R`), अनुदैर्ध्य vs अनुप्रस्थ तरंग, ऊर्जा स्थानांतरण व माइक-स्पीकर (`10.3–10.4`)',
          },
          conceptStory: {
            en: 'How does sound cross a room without wind blowing across? Track the **Slinky (`Act 10.5`, Fig 10.8)** and **Piston Tube (`Fig 10.9`)**:\n1) **==Compression (`संपीडन C`)==**: Forward push crowds air particles tightly together -> **HIGH density & HIGH pressure region** (`Graph Peak / Crest`).\n2) **==Rarefaction (`विरलन R`)==**: Backward pull spreads particles wide apart -> **==MINIMUM / LOW density & pressure region (`ALP 2025 Shift 1 PYQ`)==** (`Graph Valley / Trough`).\n3) **Golden Exam Rule (`p.192 Box & Think Q5`)**: **==ONLY energy/disturbance travels forward — medium particles merely vibrate back-and-forth around their own mean positions (`after wave passes, particles resume normal random thermal vibration`)==**! Proven directly by **Activity 10.6 (`grains bouncing cleanly on stretched balloon sheet without plate contact`)**.\n4) **Longitudinal vs Transverse (`Fig 10.12–10.13`)**: Sound is a **Longitudinal Mechanical Wave** (`particles oscillate PARALLEL ∥ to propagation`). **Transverse waves** (`light, ripple`) oscillate **`⊥` perpendicular**; **Light is non-mechanical (`travels in vacuum`)**. In earthquakes, **longitudinal seismic waves arrive FIRST at seismographs (`p.191`)**! **Sonic Boom (`Fig 10.11`)**: jets flying faster than sound (`Supersonic`) produce sudden pressure shock bangs.\n5) **Transducers (`Fig 10.15`)**: **Microphone** diaphragm converts **Sound Energy → Electrical Signals**; **Speaker** reverses it (**Electrical Signals → Sound Waves**).',
            hi: 'ध्वनि चलते समय कमरे की हवा को उड़ाती क्यों नहीं? **स्लिंकी (`क्र. 10.5`, चित्र 10.8) एवं पिस्टन नली (`चित्र 10.9`)** देखें:\n1) **==संपीडन (`Compression C`)==**: पिस्टन आगे बढ़ने पर कण पास-पास सघन होकर **उच्च घनत्व व उच्च दाब** क्षेत्र बनाते हैं (`ग्राफ शिखर / शृंग`)।\n2) **==विरलन (`Rarefaction R`)==**: पिस्टन पीछे हटने पर कण दूर फैल कर **==न्यूनतम / निम्न घनत्व क्षेत्र (`ALP 2025 Shift 1 PYQ`)==** बनाते हैं (`ग्राफ गर्त`)।\n3) **अत्यंत महत्वपूर्ण नियम (`पृ. 192 बॉक्स व प्रश्न 5`)**: **==ध्वनि तरंग संचरण में केवल विक्षोभ व ऊर्जा आगे जाती है, माध्यम के कण तरंग के साथ आगे नहीं जाते (`वे केवल अपनी माध्य स्थिति के इधर-उधर दोलन करते हैं`)==**! **क्र. 10.6** में प्लेट छुए बिना कसे गुब्बारे की झिल्ली पर अनाज उछलना सिद्ध करता है कि **ध्वनि ऊर्जा का वहन करती है**।\n4) **अनुदैर्ध्य बनाम अनुप्रस्थ (`चित्र 10.12–10.13`)**: ध्वनि **अनुदैर्ध्य यांत्रिक तरंग** है (`कण संचरण के समानांतर ∥ दोलन`)। प्रकाश **अनुप्रस्थ अयांत्रिक तरंग** है जो निर्वात में चलती है। **भूकंप में अनुदैर्ध्य तरंगें (`P-waves`) भूकंप-लेखी पर सबसे पहले पहुँचती हैं (`पृ. 191`)**! **ध्वनि बूम (`चित्र 10.11`)**: ध्वनि से तेज गति (`पराध्वनिक वायुयान`) में उत्पन्न प्रबल आघात ध्वनि!\n5) **रूपांतरण (`चित्र 10.15`)**: **माइक्रोफोन** तनुपट द्वारा **ध्वनि ऊर्जा → विद्युत ऊर्जा** में तथा **स्पीकर** **विद्युत संकेतों → ध्वनि ऊर्जा** में बदलता है।',
          },
          inlinePyqIds: ['pyq-c9p10-2', 'pyq-c9p10-16'],
        },
      ],
    },
    {
      id: 'wave-equation-perception-ear',
      number: '10.5–10.6',
      svgLab: 'sound-waves-sonar-lab',
      diagramKey: 'c9-ch10-characteristics-perception-diagram',
      title: {
        en: 'Wave Formula `v = λν` & `ν = 1/T` (`Speed Table 10.1`), Pitch, Loudness (`dB`), Timbre (`C.V. Raman`), Octave & Human Ear (`Fig 10.24`)',
        hi: 'तरंग समीकरण `v = λ · ν` व `ν = 1/T` (`चाल सारणी 10.1`), तारत्व, प्रबलता (`dB`), गुणता (`सी.वी. रमन`) व मानव कर्ण (`चित्र 10.24`)',
      },
      summaryTag: {
        en: 'NCERT Pages 192–200 • Ex 10.1–10.4, Wavelength/Freq/Amplitude Traps, Ear Eardrum->Ossicles->Cochlea & Musical Timbre',
        hi: 'NCERT पृ. 192–200 • उदा. 10.1–10.4, चाल पर माध्यम/ताप प्रभाव (`331→344 m/s`), तानपुरा गुणता व अष्टक 2:1',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Five Wave Parameters (`λ, ν, T, A, v`), Equation `v = λν` & Why Speed Ignores Frequency (`Ex 10.1–10.4`)',
            hi: '1. तरंग की 5 मुख्य राशियाँ (`λ, ν, T, A, v`), सूत्र `v = λ · ν` एवं चाल के माध्यम व ताप नियम (`उदा. 10.1–10.4`)',
          },
          conceptStory: {
            en: 'Examine the Sine Density Wave (`Fig 10.16–10.20`): **Use Interactive Lab Tab 1 below** to test every wave case live!\n• **Wavelength (`λ`, तरंगदैर्घ्य)**: Distance between two consecutive Crests (`or Troughs`) -> **SI unit: metre (`m`)**.\n• **Frequency (`ν`, आवृत्ति)**: Number of full density oscillations passing a fixed point per second (**`ν = 1 / T`**, **SI: Hertz `Hz` = `s⁻¹`**) -> e.g., `10` oscillations in `2 s` ⇒ **`5 Hz` & `T = 0.2 s` (`Ex 10.1 & Ex Q3`)**!\n• **Wave Velocity Equation (`Eq 10.2`)**: **`v = λ / T = λ × ν`** (`Speed = Wavelength × Frequency`).\n• **==Top Railway CBT Speed Rules (`p.196–198`, Table 10.1 @ `15°C`)==**:\n  1) **Medium Speed Order**: **Solids (`Steel ~5000 m/s`, `15–20× air`) > Liquids (`Water ~1500 m/s`, `4–5× air`) > Gases (`Air ~340 m/s`)** (`ALP Shift 4: density & elasticity determine speed!`).\n  2) **Temperature & Humidity (`ALP Shift 1 & Ex Q12`)**: Rising temperature OR rising air humidity **INCREASES speed of sound**: **`0°C` dry air `331 m/s` -> `22°C` room air `344 m/s`**!\n  3) **Frequency Changes `λ`, NOT `v` (`p.196 Think Box`)**: For a fixed medium (`constant v`), **doubling frequency HALVES wavelength (`ν ↑ ⇒ λ ↓`)**, while speed stays identical! *(Otherwise fast treble instruments would outrun bass drums at a concert!)*',
            hi: 'घनत्व बनाम दूरी ग्राफ (`चित्र 10.16–10.20`) की पाँचों मुख्य राशियाँ (`नीचे लैब टैब 1 में लाइव परीक्षण करें!`):\n• **तरंगदैर्घ्य (`λ`, लैंबडा)**: दो क्रमागत शृंगों (`अथवा दो क्रमागत गर्तों`) के बीच की दूरी → **SI मात्रक: मीटर (`m`)**।\n• **आवृत्ति (`ν`, न्यू) व आवर्तकाल (`T`)**: एकांक समय में दोलन संख्या **`ν = 1 / T`** (**SI मात्रक: हर्ट्ज `Hz` = `s⁻¹`**); एक पूर्ण दोलन समय = आवर्तकाल `T` (`s`)। उदा. `2 s` में `10` दोलन ⇒ **`5 Hz` व `T = 0.2 s` (`उदा. 10.1 व अभ्यास Q3`)**!\n• **तरंग वेग सूत्र (`समीकरण 10.2`)**: **==तरंग चाल नियम== — `v = तरंगदैर्घ्य (λ) × आवृत्ति (ν)`** (`v = λ / T`)।\n• **==रेलवे CBT चाल के अचूक नियम (`तालिका 10.1: 15°C`, पृ. 196–198)==**:\n  1) **माध्यम क्रम**: **ठोस (`स्टील ~5000 m/s`, `वायु से 15–20×`) > द्रव (`जल ~1500 m/s`, `4–5×`) > गैस (`वायु ~340 m/s`)** (`माध्यम का घनत्व व प्रत्यास्थता चाल तय करें`)!\n  2) **ताप व आर्द्रता (`ALP Shift 1`)**: वायु का **ताप या आर्द्रता बढ़ने पर ध्वनि की चाल बढ़ती है** — **`0°C` शुष्क वायु `331 m/s` → `22°C` पर `344 m/s`**!\n  3) **माध्यम स्थिर तो चाल नियत**: आवृत्ति `ν` बढ़ाने पर तरंगदैर्घ्य `λ` घट जाता है (`ν × λ = नियत`, `ALP Shift 3`), पर **चाल केवल माध्यम बदलने पर ही बदलती है** (`वरना गायन और तबला अलग समय कान तक पहुँचते!`)!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch10/real/oscilloscope.webp',
            title: { en: 'Real Acoustic Diagnostics (`Sec 10.5–10.6`): Laboratory Oscilloscope Displaying Crest, Trough, λ & Amplitude', hi: 'वास्तविक ऑसिलोस्कोप तरंग दृश्य (`भाग 10.5–10.6`): शृंग, गर्त, आयाम `A` व तरंगदैर्घ्य `λ` मापन' },
            caption: {
              en: 'Electronic oscilloscopes (and smartphone Phyphox Audioscope) plot sound density/pressure waves cleanly to measure amplitude (loudness), wavelength λ, and frequency ν = 1/T.',
              hi: 'ऑसिलोस्कोप (एवं NCERT में वर्णित Phyphox ऐप) ध्वनि के शृंग, गर्त, आयाम और आवृत्ति को स्पष्ट तरंग ग्राफ पर मापता है।',
            },
          },
          inlinePyqIds: ['pyq-c9p10-1', 'pyq-c9p10-3', 'pyq-c9p10-5', 'pyq-c9p10-7', 'pyq-c9p10-8', 'pyq-c9p10-9', 'pyq-c9p10-10', 'pyq-c9p10-17'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Pitch (`ν`), Loudness (`Amplitude / dB`), Timbre (`C.V. Raman & Syahi`), Octave & Human Ear Anatomy (`Fig 10.24`)',
            hi: '2. तारत्व (`आवृत्ति`), प्रबलता (`आयाम / dB`), गुणता (`सी.वी. रमन व तबला स्याही`), अष्टक व मानव कर्ण (`चित्र 10.24`)',
          },
          conceptStory: {
            en: 'Distinguish **measurable physics quantities** from **human auditory perceptions (`Sec 10.6.4`)**:\n• **Pitch (`तारत्व`)**: Perception of **Frequency (`ν`)** (`whistle shrill = high ν -> high pitch; thunder/big drum = low ν -> low pitch; boys’ vocal cords thicken in puberty -> lower pitch!`).\n• **Loudness (`प्रबलता`, Decibel `dB`) vs Intensity (`तीव्रता`)**: **Intensity** = energy per unit area per second (`decreases with distance as wave spreads Fig 10.21`). **Loudness** = ear perception of **Amplitude (`A`)**: leaves rustling = `few dB`; normal conversation ≈ **`60 dB`**; firecrackers **`> 100 dB`** (`Noise = harmful sound; Hearing Aid = Mic + Amplifier + Speaker`).\n• **Tone vs Note, Timbre & C.V. Raman (`p.200`)**:\n  - **Tone (`स्वर`)**: single pure frequency (`tuning fork / whistling`, Fig 10.25a). **Note (`संगीत स्वर`)**: **fundamental frequency + overtones (`अधिस्वरक`)**.\n  - **Quality / Timbre (`गुणता`, ALP Shift 7)**: Tells a **flute from a tabla** even at identical pitch & loudness! **Octave (`अष्टक`)** = interval where one fundamental frequency is **`2×`** the other (`200 Hz & 400 Hz`).\n  - **Sir C.V. Raman Box (`p.200`)**: First Indian Nobel laureate in Physics also researched **Tabla & Mridangam** showing how the central black **`Syahi (स्याही)`** patch controls rich overtones!\n• **Human Ear (`Fig 10.24`)**: Wave vibrates **Eardrum (`कर्णपटल`)** -> **tiny middle-ear bones amplify** vibrations -> **Cochlea (`कर्णावर्त`)** converts vibrations into **electrical signals -> Brain**. Two ears detect **`< 1 ms`** timing lag to pinpoint direction (`snakes/fish feel body vibrations`)!',
            hi: 'भौतिक राशियाँ बनाम मानवीय ध्वनि-बोध (`भाग 10.6.4`):\n• **तारत्व (`Pitch`)**: **आवृत्ति (`ν`)** का मानवीय बोध! तीखी सीटी = **उच्च आवृत्ति/उच्च तारत्व**; ढोल/मेघ गर्जना = **कम आवृत्ति/निम्न तारत्व** (`किशोरावस्था में लड़कों के वाक् तंतु लंबे-मोटे होकर आवाज गहरी हो जाती है`)।\n• **प्रबलता (`Loudness`, मात्रक `डेसिबेल dB`) बनाम तीव्रता**: **तीव्रता** एकांक क्षेत्रफल से एकांक समय में गुजरती मापन योग्य ऊर्जा है (`स्रोत से दूर जाने पर घटे`)। **प्रबलता** **आयाम (`A`)** का बोध है — पत्तियाँ = कुछ `dB`, सामान्य बात ≈ **`60 dB`**, पटाखे **`100+ dB`** (`शोर = हानिकारक ध्वनि; श्रवण सहायक यंत्र = माइक + प्रवर्धक Amplifier + स्पीकर`)।\n• **स्वर (`Tone`), संगीत स्वर (`Note`), गुणता (`Timbre`) व सी.वी. रमन (`पृ. 200`)**:\n  - **स्वर (`Tone`)**: एकल आवृत्ति (`स्वरित्र द्विभुज`)। **संगीत स्वर (`Note`)**: **मूल आवृत्ति + अधिस्वरक (`Overtones`)**।\n  - **गुणता (`Timbre`, ALP Shift 7)**: समान तारत्व व प्रबलता पर भी **बाँसुरी व तबला की आवाज पहचानना**! **अष्टक (`Octave`)**: दो सम स्वर जहाँ एक मूल आवृत्ति दूसरे की **दोगुनी (`200 Hz व 400 Hz`)** हो!\n  - **सर सी.वी. रमन (`पृ. 200`)**: भारत के प्रथम नोबेल विजेता ने **तबला व मृदंगम की मध्य काली ‘स्याही’** पर शोध कर ध्वनि विज्ञान में योगदान दिया!\n• **मानव कान (`चित्र 10.24`)**: ध्वनि **कर्णपटल (`Eardrum`)** में कंपन करे → **मध्य कर्ण की नन्हीं अस्थियाँ कंपन प्रवर्धित** करें → **कर्णावर्त (`Cochlea`)** उन्हें **विद्युत संकेतों** में बदल मस्तिष्क तक भेजे (`दोनों कान सेकंड के 1000वें भाग से भी कम अंतर से दिशा पहचानें!`)।',
          },
          inlinePyqIds: ['pyq-c9p10-13', 'pyq-c9p10-15', 'pyq-c9p10-20'],
        },
      ],
    },
    {
      id: 'reflection-echo-reverb-sonar',
      number: '10.7–10.8',
      diagramKey: 'c9-ch10-echo-reverb-sonar-diagram',
      title: {
        en: 'Reflection of Sound, Echo (`≥0.1 s, 17 m`), Reverberation (`<0.05 s`), Ultrasound Applications & SONAR (`d = vt/2`)',
        hi: 'ध्वनि परावर्तन, प्रतिध्वनि (`≥0.1 s, 17 m`), अनुरणन (`<0.05 s`), `20 Hz–20 kHz` परास, पराश्रव्य अनुप्रयोग व SONAR',
      },
      summaryTag: {
        en: 'NCERT Pages 200–204 • Gol Gumbaz, Curtains/Panels, Stethoscope, Bats (Fig 10.27), Kidney Stones, Cleaning & SONAR Ex 10.6',
        hi: 'NCERT पृ. 200–204 • गोल गुम्बज बीजापुर, पर्दे/पैनल, स्टेथोस्कोप, चमगादड़ प्रतिध्वनि निर्धारण, पथरी व SONAR (`688.5 m`)',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Laws of Sound Reflection, Clear Echo (`≥ 0.1 s -> 17 m`), Reverberation Control (`< 0.05 s`) & Gol Gumbaz',
            hi: '1. ध्वनि परावर्तन नियम, स्पष्ट प्रतिध्वनि (`≥ 0.1 s → 17 m`), अनुरणन निवारण (`< 0.05 s`) एवं गोल गुम्बज मर्मर गैलरी',
          },
          conceptStory: {
            en: 'Sound reflects cleanly off hard surfaces obeying **exact optical reflection rules**: **`∠i = ∠r`** and incident/normal/reflected directions lie in **one plane** (`Sec 10.7`).\n• **Echo (`प्रतिध्वनि`, 10.7.1 — `ALP 2025 Shift 6, Group D Shifts 23, 24, 32, 36`)**: Heard distinctly ONLY if brain receives reflection **==at least `0.1 second` (`≥ 0.1 s`) after original sound==**!\n  - Total round-trip distance at `v = 340 m/s`: `2d = 340 × 0.1 = 34.0 m` ⇒ **==Minimum Echo Distance `17 m`== (`d_min = 34 / 2 = 17 m`)**! *(Watch **NTPC Shift 11 PYQ**: rising temperature boosts `v`, so **minimum echo distance ALSO INCREASES**! Example 10.5: `0.5 s` echo -> `d = 340 × 0.5 / 2 = 85 m`!)*\n• **Reverberation (`अनुरणन`, 10.7.2)**: Multiple wall reflections arriving **within `< 0.05 seconds` (`Group D Shift 16, 34`)** overlap and linger after source stops, smearing speech (`felt intensely in bare-tiled halls` — **ALP Shift 2**). Controlled in auditoriums via **curtains, carpets, upholstered seats & porous acoustic wall panels (`Group D Shifts 31 & 37`)**.\n• **Historical Acoustics (`p.201`)**: **Gol Gumbaz (`Bijapur, Karnataka`) Whispering Gallery** carries soft whispers cleanly around its huge dome! Doctors’ **Stethoscope (`Group D Shift 45`)** channels faint heartbeats via **multiple internal reflections** along the tube.',
            hi: 'कठोर सतहों से टकराकर ध्वनि लौटती है और प्रकाश के समान परावर्तन नियम (**`∠i = ∠r` व तीनों एक तल में**) का पालन करती है (`भाग 10.7`)।\n• **प्रतिध्वनि (`Echo`, 10.7.1)**: हमारे कान दो ध्वनियों को अलग-अलग तभी पहचान सकते हैं जब उनके मध्य समय अंतराल **==कम-से-कम `0.1 सेकंड` (`≥ 0.1 s`) हो==** (`Group D Shift 32`)!\n  - `340 m/s` पर `0.1 s` में तय कुल पथ = `34 m` ⇒ **==स्रोत से परावर्तक सतह की न्यूनतम दूरी `17 m`== (`34 / 2 = 17 m`, `ALP Shift 6`)**! *(नोट `NTPC Shift 11`: वायु ताप ↑ ⇒ ध्वनि चाल `v` ↑ ⇒ प्रतिध्वनि न्यूनतम दूरी भी बढ़ जाती है!)*\n• **अनुरणन (`Reverberation`, 10.7.2)**: किसी बड़े हॉल में बार-बार परावर्तन **`0.05 s` से कम अंतराल** में होने से ध्वनि स्रोत बंद होने के बाद भी गूँज कर शब्द अस्पष्ट बनाती है (**अभ्यास Q4**)! निवारण हेतु सभागार में **ध्वनि-अवशोषक पैनल, गद्देदार कुर्सियाँ, मोटे पर्दे व कालीन** लगाते हैं (**Group D Shifts 31, 37**)।\n• **ऐतिहासिक व चिकित्सा उदाहरण**: कर्नाटक के **बीजापुर स्थित गोल गुम्बज की मर्मरश्रावी गैलरी (`p.201`)** में धीमी फुसफुसाहट भी पूरे गुम्बद में गूँजती है; **स्टेथोस्कोप (`Group D Shift 45`)** नली के भीतर **बहु-परावर्तन** से हृदय धड़कन सुनाता है!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch10/real/sydney_opera_house.webp',
            secondaryUrl: '/ncert-notes/class9-phy-ch10/real/medical_ultrasound.webp',
            title: { en: 'Auditorium Reverberation Control (`10.7.2`) & Medical Ultrasonography >20 kHz (`10.8`)', hi: 'सभागार ध्वनिकी व अनुरणन नियंत्रण (`10.7.2`) एवं चिकित्सा अल्ट्रासोनोग्राफी (`10.8` >20 kHz)' },
            caption: {
              en: 'Left: Modern concert halls balance reflection and sound absorption (`curtains/panels`) avoiding `<0.05 s` reverberation distortion. Right: High-frequency ultrasound (`>20 kHz`) images internal organs painlessly without surgery.',
              hi: 'बायाँ: आधुनिक कॉन्सर्ट हॉल में अनावश्यक अनुरणन रोकने को ध्वनि-अवशोषक सतहें व विशेष वक्र आकार उपयोग होते हैं। दायाँ: `>20 kHz` पराश्रव्य तरंगों से बिना शल्यक्रिया आंतरिक अंगों का प्रतिबिंब (`अल्ट्रासोनोग्राफी`)।',
            },
          },
          inlinePyqIds: ['pyq-c9p10-4', 'pyq-c9p10-6', 'pyq-c9p10-11', 'pyq-c9p10-21', 'pyq-c9p10-23', 'pyq-c9p10-24'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Infrasonic `< 20 Hz`, Audible `20 Hz – 20 kHz` & Ultrasonic `> 20 kHz` (`Bats, Cleaning, SONAR d = vt/2`)',
            hi: '2. अवश्रव्य (`<20 Hz`), श्रव्य (`20 Hz–20 kHz`) एवं पराश्रव्य (`>20 kHz`): चमगादड़, गुर्दे की पथरी, सफाई व SONAR',
          },
          conceptStory: {
            en: 'Know EVERY frequency tier & application from **NCERT `Sec 10.8` (`p.202–203`)** verbatim:\n1) **Human Audible Range (`श्रव्यता परिसर`)**: **==`20 Hz` to `20,000 Hz (20 kHz)`==** (`upper limit declines with age`; `Ex 10.2` at `344 m/s`: λ spans **`17.2 m` (`20 Hz`) down to `1.72 cm` (`20 kHz`)**!).\n2) **Infrasonic (`अवश्रव्य`, `< 20 Hz`)**: Below human hearing (`e.g. 18 Hz` — **ALP Shift 6**). Travel long distances through air & Earth -> used to **detect earthquakes, volcanic eruptions & severe storms**; **Elephants** hear infrasound!\n3) **Ultrasonic (`पराश्रव्य`, `> 20,000 Hz / 20 kHz`)**: Heard by **==Bats, Dolphins, Whales, Dogs, Cats==**. Five Top Applications (`p.202`): **(i) Medical Ultrasonography (`no surgery`)**, **(ii) Breaking kidney stones into fine sand flushed safely**, **(iii) Cleaning delicate machine/jewellery/electronic parts without physical damage (`Group D Shifts 1 & 10`)**, **(iv) Detecting internal defects/cracks inside metal blocks**, **(v) Ultrasonic welding** & car **40 kHz parking sensors (`Ex Q11`)**!\n4) **Echolocation & SONAR (`10.8.1`, Fig 10.27–10.28)**: **SO**und **NA**vigation And **R**anging bounces ultrasonic pulses off seabeds or submarines -> because sound travels down AND returns (`round trip = 2d`), **`d = (v × t) / 2`** (`Ex 10.6`: `1530 × 0.90 / 2 = 688.5 m`; `Q13`: `1500 × 4 / 2 = 3000 m`; `Ex Q10`: `1525 × 5 / 2 = 3812.5 m`)! Also note: **Drones (`Fig 10.29`)** are tracked by low-frequency motor hum (`acoustic watch`), and NASA rovers recorded **first sounds on Mars** (`p.203 Box`)!',
            hi: '**NCERT भाग 10.8 (`पृ. 202–203`)** के तीनों तरंग क्षेत्र एवं सभी उपयोग कंठस्थ रखें:\n1) **मानव श्रव्यता परिसर**: **==`20 Hz` से `20,000 Hz (20 kHz)`==** (`उदा. 10.2`: वायु में तरंगदैर्घ्य `17.2 m` से `1.72 cm`; आयु बढ़ने से ऊपरी सीमा घटती है)।\n2) **अवश्रव्य तरंगें (`Infrasonic < 20 Hz`)**: मनुष्य नहीं सुन सकता (`18 Hz` — ALP Shift 6)। **भूकंप, ज्वालामुखी विस्फोट व झंझावात** पता लगाने में सहायक; **हाथी** अवश्रव्य सुन सकते हैं!\n3) **पराश्रव्य तरंगें (`Ultrasonic > 20 kHz`)**: **==चमगादड़, डॉल्फिन, व्हेल, कुत्ते, बिल्लियाँ==** सुन सकते हैं। प्रमुख अनुप्रयोग: **(i) अल्ट्रासोनोग्राफी (`बिना सर्जरी आंतरिक अंग`)**, **(ii) गुर्दे की पथरी को बारीक टुकड़ों में तोड़ना**, **(iii) सूक्ष्म इलेक्ट्रॉनिक व नाजुक वस्तुओं की बिना क्षति सफाई (`Group D Shift 1, 10`)**, **(iv) धातु खंडों के भीतरी दोष जांचना**, **(v) अल्ट्रासोनिक वेल्डिंग** व **कार `40 kHz` पार्किंग सेंसर (`अभ्यास Q11`)**!\n4) **प्रतिध्वनि निर्धारण व सोनार (`10.8.1`, चित्र 10.27–10.28)**: चमगादड़ व डॉल्फिन पराश्रव्य से अंधेरे में शिकार पकड़ें। **SONAR (`Sound Navigation And Ranging`)** जल के भीतर गहराई व पनडुब्बी खोजने हेतु **`d = (v × t) / 2`** उपयोग करता है (`उदा. 10.6`: `1530 × 0.45 = 688.5 m`; `प्रश्न 13: 3000 m`; `अभ्यास Q10: 3812.5 m`)! साथ ही **ड्रोन की रक्षा चौकसी (`चित्र 10.29`)** व **मंगल ग्रह पर प्रथम रिकॉर्ड की गई ध्वनियाँ** भी पृ. 203 बॉक्स में शामिल हैं!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch10/real/bat.webp',
            secondaryUrl: '/ncert-notes/class9-phy-ch10/real/sonar.webp',
            title: { en: 'Bio-Sonar vs Marine Tech (`10.8.1`): Echolocating Bat (`Fig 10.27`) & Naval Frigate SONAR (`Fig 10.28`)', hi: 'प्राकृतिक बनाम तकनीकी सोनार (`10.8.1`): चमगादड़ प्रतिध्वनि निर्धारण (`चित्र 10.27`) व जलयान सोनार (`चित्र 10.28`)' },
            caption: {
              en: 'Left (`Fig 10.27`): Bats emit ultrasonic >20 kHz clicks listening for obstacle/prey echoes (`unheard by humans`). Right (`Fig 10.28`): Naval ship SONAR sends underwater ultrasound at ~1530 m/s calculating target range d = vt/2.',
              hi: 'बायाँ (`चित्र 10.27`): रात में शिकार हेतु पराश्रव्य (>20 kHz) स्पंद भेजता चमगादड़। दायाँ (`चित्र 10.28`): जल में पराश्रव्य तरंगें भेज गहराई d = vt/2 मापने वाला नौसैनिक सोनार सिस्टम।',
            },
          },
          inlinePyqIds: ['pyq-c9p10-12', 'pyq-c9p10-14', 'pyq-c9p10-22'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Longitudinal Sound Waves (`C / R, Needs Medium`) vs Transverse Light Waves (`No Medium Needed`)', hi: 'अनुदैर्ध्य ध्वनि तरंग (`माध्यम अनिवार्य`) बनाम अनुप्रस्थ प्रकाश तरंग (`निर्वात में भी गमन`)' },
      left: { en: 'SOUND (`Mechanical Longitudinal`): particles vibrate ∥ to wave -> STOPS completely in Vacuum (`Bell Jar 10.7`)', hi: 'ध्वनि: माध्यम के कण तरंग के समानांतर (∥) कंपन करें; निर्वात (`अंतरिक्ष`) में संचरण शून्य!' },
      right: { en: 'LIGHT (`Transverse Non-Mechanical`): travels cleanly across Vacuum from Sun & distant stars to Earth (`p.191`)!', hi: 'प्रकाश: अनुप्रस्थ तरंग जिसे माध्यम नहीं चाहिए — अतः सूर्य व तारों का प्रकाश निर्वात पार कर पृथ्वी पर आता है!' },
    },
    {
      pair: { en: 'Frequency Change (`Changes λ Only`) vs Medium / Temp Change (`Changes Speed v`)', hi: 'आवृत्ति `ν` बदलना (`केवल λ बदले`) बनाम माध्यम / ताप बदलना (`चाल v बदले`)' },
      left: { en: 'Same Medium (`air`), Double ν -> Speed v UNCHANGED; Wavelength λ HALVES (`Ex: 500 Hz -> 250 Hz doubles λ`, ALP 2)', hi: 'एक ही माध्यम में आवृत्ति बदलने पर चाल v नियत रहती है, केवल तरंगदैर्घ्य `λ = v/ν` बदलता है (`ALP 2, 3`)!' },
      right: { en: 'Change Medium or Heat Air -> Speed v CHANGES (`Steel 5000 > Water 1500 > Air 340`; `0°C 331 -> 22°C 344 m/s`)!', hi: 'माध्यम (`ठोस>द्रव>गैस`) या ताप/आर्द्रता बदलने पर ही ध्वनि की चाल `v` परिवर्तित होती है!' },
    },
    {
      pair: { en: 'Clear Echo (`≥ 0.1 s`, `17 m` Single Return) vs Reverberation (`< 0.05 s` Hall Lingering)', hi: 'स्पष्ट प्रतिध्वनि (`Echo ≥ 0.1 s`) बनाम अनुरणन (`Reverberation < 0.05 s`)' },
      left: { en: 'ECHO (`10.7.1`): Distinct bounce heard when gap ≥ 0.1 s (`min distance 17 m @ 340 m/s`, mountain/cliffs)', hi: 'प्रतिध्वनि: मूल ध्वनि से `≥ 0.1 s` अंतराल (`≥ 17 m` दूरी) पर एक अलग गूँज सुनाई देना!' },
      right: { en: 'REVERBERATION (`10.7.2`): Multiple reflections < 0.05 s blur hall sound -> damped by curtains/carpets/panels!', hi: 'अनुरणन: `< 0.05 s` में बार-बार परावर्तन से ध्वनि गुँथ कर अस्पष्ट बनी रहना (पर्दे/कालीन से कम)!' },
    },
    {
      pair: { en: 'Speed Distance `d = v·t` (`Lightning / Fence`) vs Echo / SONAR `d = (v·t)/2` (`Two-Way Bounce`)', hi: 'सीधी दूरी `d = v·t` (`तड़ित`) बनाम प्रतिध्वनि / SONAR `d = vt/2` (`दोहरा पथ`)' },
      left: { en: 'Lightning (`Ex 10.3`): Sound comes ONE WAY from cloud to listener -> use `d = v × t` (`340 × 5 = 1700 m`)', hi: 'तड़ित/बंदूक सीधे आने में (`उदा. 10.3`): केवल एक ओर की दूरी `d = v × t` (`340 × 5 = 1700 m`)!' },
      right: { en: 'Echo & SONAR (`Ex 10.5–10.6`): Wave travels TO cliff/seabed AND BACK -> MUST divide by `2`: `d = (v × t) / 2`!', hi: 'प्रतिध्वनि व SONAR (`उदा. 10.5–10.6`): ध्वनि जाकर लौटती है (`2d = vt`), अतः उत्तर हमेशा आधा `(v×t)/2` लें!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'India’s First Physics Nobel & Acoustics Pioneer', hi: 'प्रथम भारतीय भौतिकी नोबेल व ध्वनिकी (`पृ. 200`)' },
      name: { en: 'Sir C.V. Raman (`1888–1970`)', hi: 'सर सी.वी. रमन (`1888–1970`)' },
      country: { en: 'India (`NCERT Class 9 Ch 10 p.200`)', hi: 'भारत (`NCERT कक्षा 9 अध्याय 10 पृ. 200`)' },
      fact: {
        en: 'Won India’s first Physics Nobel (`Raman Effect` in optics) AND researched Indian percussion instruments (**Tabla & Mridangam**), explaining how the central black **`Syahi`** produces rich harmonic overtones!',
        hi: 'प्रकाश में रमन प्रभाव हेतु भारत के प्रथम नोबेल विजेता; इन्होंने भारतीय ताल वाद्यों (**तबला व मृदंगम** की काली ‘स्याही’ व समृद्ध अधिस्वरकों) का भी गहन वैज्ञानिक अध्ययन किया!',
      },
    },
    {
      badge: { en: 'Adiabatic Speed of Sound Correction (`NTPC 2025`)', hi: 'ध्वनि चाल सूत्र संशोधन (`1816`, NTPC PYQ)' },
      name: { en: 'Pierre-Simon Laplace (`1816`)', hi: 'पियरे-साइमन लाप्लास (`1816`)' },
      country: { en: 'France (`Classical Wave Physics`)', hi: 'फ्रांस (`ध्वनि तरंग भौतिकी`)' },
      fact: {
        en: 'In **1816**, modified Newton’s isothermal formula (`which underpredicted air speed`) to account for **rapid adiabatic (`रुद्धोष्म`) compression/rarefaction** in air — matching real `~331 m/s` at `0°C`!',
        hi: 'सन् **1816** में वायु में संपीडन-विरलन को **रुद्धोष्म (`Adiabatic`) प्रक्रिया** मानकर न्यूटन के ध्वनि-चाल सूत्र में सही संशोधन किया!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-tuning-fork',
      figRef: { en: 'NCERT Sec 10.1.1 & Fig 10.4 (`Tuning Fork`)', hi: 'NCERT भाग 10.1.1 — स्वरित्र द्विभुज' },
      title: { en: 'Single-Frequency Vibrating Tuning Fork (`659 Hz` Prongs & Stem)', hi: 'एकल शुद्ध आवृत्ति (`Tone`) उत्पन्न करने वाला स्टील स्वरित्र द्विभुज' },
      imageUrl: '/ncert-notes/class9-phy-ch10/real/tuning_fork.webp',
      hotspots: [
        { en: 'Prongs oscillate gently when struck on rubber pad; touching water creates visible ripples (`Act 10.2`).', hi: 'रबड़ पैड पर मारने पर भुजाएँ कंपन कर वायु में संपीडन-विरलन बनाती हैं (`क्र. 10.2 जल तरंगें`)।' },
      ],
    },
    {
      id: 'vis-oscilloscope',
      figRef: { en: 'NCERT Sec 10.5–10.6 (`Wave Trace`)', hi: 'NCERT भाग 10.5–10.6 — तरंग ग्राफ' },
      title: { en: 'Oscilloscope Screen Plotting Density/Amplitude Sine Waves (`Crest, Trough, λ`)', hi: 'ध्वनि तरंग के शृंग (`C`), गर्त (`R`), आयाम व आवृत्ति दिखाता ऑसिलोस्कोप' },
      imageUrl: '/ncert-notes/class9-phy-ch10/real/oscilloscope.webp',
      hotspots: [
        { en: 'Taller peaks = larger amplitude/loudness; tighter cycles = higher frequency/pitch (`ν = v/λ`).', hi: 'अधिक ऊँचाई = बड़ा आयाम/प्रबलता; पास-पास चक्र = उच्च आवृत्ति/उच्च तारत्व!' },
      ],
    },
    {
      id: 'vis-concert-hall',
      figRef: { en: 'NCERT Sec 10.7.2 (`Auditorium Acoustics`)', hi: 'NCERT भाग 10.7.2 — सभागार अनुरणन नियंत्रण' },
      title: { en: 'Curved Concert Hall Shells Controlling `< 0.05 s` Multiple Reverberations', hi: 'अनुरणन (`< 0.05 s`) संतुलित करने हेतु वक्र व अवशोषक वास्तुकला वाला सभागार' },
      imageUrl: '/ncert-notes/class9-phy-ch10/real/sydney_opera_house.webp',
      hotspots: [
        { en: 'Excessive reflections blur speech (`Group D 34`); acoustic panels, carpets & curtains absorb excess bounce.', hi: 'नियंत्रित परावर्तन व मुलायम अवशोषक सामग्री (`पर्दे/कालीन/कुर्सियाँ`) से भाषण व संगीत स्पष्ट सुनाई देता है।' },
      ],
    },
    {
      id: 'vis-ultrasound-med',
      figRef: { en: 'NCERT Sec 10.8 (`Ultrasonography > 20 kHz`)', hi: 'NCERT भाग 10.8 — चिकित्सा अल्ट्रासोनोग्राफी' },
      title: { en: 'High-Frequency Medical Ultrasound Imaging & Non-Surgical Organ Diagnostics', hi: 'बिना शल्यक्रिया आंतरिक अंग जाँचती `> 20 kHz` पराश्रव्य (`Ultrasound`) मशीन' },
      imageUrl: '/ncert-notes/class9-phy-ch10/real/medical_ultrasound.webp',
      hotspots: [
        { en: 'Ultrasound (`>20 kHz`) images organs safely, breaks kidney stones & cleans delicate objects without scratches.', hi: 'पराश्रव्य तरंगें आंतरिक प्रतिबिंब बनाने, गुर्दे पथरी तोड़ने व नाजुक वस्तुओं की सफाई में प्रयुक्त होती हैं!' },
      ],
    },
    {
      id: 'vis-bat-echolocation',
      figRef: { en: 'NCERT Fig 10.27 (`Bat Echolocation`)', hi: 'NCERT चित्र 10.27 — चमगादड़ प्रतिध्वनि निर्धारण' },
      title: { en: 'Nocturnal Bat Using Ultrasonic Pulses (`> 20 kHz`) to Hunt in Total Darkness', hi: 'रात्रि में पराश्रव्य तरंगों के परावर्तन से शिकार व बाधा खोजता चमगादड़' },
      imageUrl: '/ncert-notes/class9-phy-ch10/real/bat.webp',
      hotspots: [
        { en: 'Humans cannot hear bat squeaks (`> 20,000 Hz`, Group D Shift 28 PYQ); dolphins/whales also echolocate.', hi: '`>20 kHz` पराश्रव्य होने से मनुष्य चमगादड़ की आवाज नहीं सुन पाते (`Group D Shift 28`)।' },
      ],
    },
    {
      id: 'vis-marine-sonar',
      figRef: { en: 'NCERT Fig 10.28 (`Ship SONAR System`)', hi: 'NCERT चित्र 10.28 — समुद्री SONAR प्रणाली' },
      title: { en: 'Naval Frigate Deploying Underwater Ultrasound SONAR (`d = v·t / 2`)', hi: 'समुद्री गहराई व पनडुब्बी दूरी (`d = v·t / 2`) मापता नौसैनिक सोनार तंत्र' },
      imageUrl: '/ncert-notes/class9-phy-ch10/real/sonar.webp',
      hotspots: [
        { en: 'Ex 10.6 (`1530 m/s, 0.90 s`): depth = 688.5 m; Think Q13 (`1500 m/s, 4 s`): ocean depth = 3000 m!', hi: 'उदा. 10.6 (`0.90 s @ 1530 m/s` = `688.5 m`); प्रश्न 13 (`4 s @ 1500 m/s` = `3000 m`)!' },
      ],
    },
  ],
  activities: [
    {
      num: '10.1',
      title: { en: 'Activity 10.1: Plucked Rubber Band Stretched Over Open Box (`Vibrations Cause Sound`, Fig 10.2)', hi: 'क्रियाकलाप 10.1: खुले डिब्बे पर तने रबड़ बैंड के कंपन व ध्वनि उत्पत्ति (`चित्र 10.2`)' },
      materials: { en: 'Open cardboard box & stretchable rubber band', hi: 'एक तरफ से खुला गत्ते का डिब्बा व रबड़ बैंड' },
      steps: { en: 'Stretch rubber band across open side of box, pluck softly & watch vibration + listen; wait until vibration stops; tighten/loosen band tension (`or pluck without resonance box near ear`) & compare loudness/pitch.', hi: 'रबड़ बैंड को डिब्बे के खुले भाग पर तान कर खींचें-छोड़ें; कंपन रुकने तक सुनें; तनाव बदलकर एवं बिना डिब्बे के अँगुलियों पर तानकर प्रबलता व ध्वनि में अंतर देखें।' },
      examTakeaway: { en: 'Sound exists **ONLY while the rubber band vibrates** (`stopping vibrations immediately halts sound`), and air-cavity box makes vibration much louder!', hi: 'जब तक कंपन चलते हैं तभी तक ध्वनि उत्पन्न होती है; कंपन रुकते ही ध्वनि तुरंत बंद हो जाती है (`अनुनाद डिब्बे से ध्वनि प्रबल होती`)!' },
      predictQuestion: {
        prompt: { en: 'In Activity 10.1 (`Fig 10.2`), tightening the rubber band harder before plucking produces:', hi: 'क्रियाकलाप 10.1 में रबड़ बैंड को अधिक कसकर तान कर खींचने पर ध्वनि कैसी हो जाएगी?' },
        options: { en: ['No sound at all', 'Faster vibrations -> higher pitch sound', 'Slower vibration & lower pitch', 'Complete vacuum inside box'], hi: ['कोई ध्वनि नहीं', 'अधिक तेज कंपन → उच्च तारत्व की तीखी ध्वनि', 'धीमे कंपन व मोटी ध्वनि', 'डिब्बे में निर्वात'] },
        correctIndex: 1,
        reason: { en: 'Greater tension speeds up back-and-forth vibrations (`higher frequency`), raising sound pitch (`confirmed in Group D Shift 18 drum skin PYQ!`).', hi: 'अधिक तनाव से रबड़/ड्रम अधिक तेजी से कंपन करता है (`उच्च आवृत्ति`), जिससे तीखी उच्च-तारत्व ध्वनि बनती है!' },
      },
    },
    {
      num: '10.2',
      title: { en: 'Activity 10.2: Tuning Fork Struck on Rubber Pad & Touched to Water (`Fig 10.4`)', hi: 'क्रियाकलाप 10.2: रबड़ पैड पर स्वरित्र द्विभुज मारकर जल सतह छूना (`चित्र 10.4`)' },
      materials: { en: 'Steel/Aluminium tuning fork, soft rubber pad & water-filled dish', hi: 'स्वरित्र द्विभुज (`स्टील/एल्युमिनियम`), नरम रबड़ पैड व पानी भरी कटोरी' },
      steps: { en: 'Hold tuning fork by stem, strike one prong gently on rubber pad (`never hard metal!`), bring near ear at varied angles, then lightly touch vibrating prong tip to still water surface.', hi: 'स्तंभ से पकड़ कर भुजा को रबड़ पैड पर धीरे टकराएँ, अलग कोणों से कान के पास सुनें, फिर कंपन करती भुजा जल सतह से छुआएँ।' },
      examTakeaway: { en: 'Instant **water ripples splash outward**, visibly proving tuning fork prongs truly vibrate — and sound radiates outward across angles!', hi: 'जल की सतह पर तुरंत तरंगें बनने से सिद्ध होता है कि स्वरित्र द्विभुज की भुजाएँ वास्तव में कंपन कर रही हैं और ध्वनि चारों दिशाओं में फैलती है!' },
      predictQuestion: {
        prompt: { en: 'Why are teachers warned NEVER to strike the steel tuning fork on a hard rock or iron table in Act 10.2?', hi: 'क्रियाकलाप 10.2 में स्वरित्र द्विभुज को कठोर सतह के बजाय नरम रबड़ पैड से ही क्यों टकराते हैं?' },
        options: { en: ['Hard impact bends prongs, introduces harsh metallic overtones/damage & ruins pure single frequency', 'Water evaporates off steel', 'Rubber makes tuning fork magnetic', 'Iron makes frequency drop to 0 Hz'], hi: ['कठोर सतह से भुजा मुड़/क्षतिग्रस्त हो सकती है व शुद्ध एकल आवृत्ति नष्ट होती है', 'जल उड़ जाता है', 'रबड़ चुंबक बनाती है', 'आवृत्ति 0 Hz हो जाती है'] },
        correctIndex: 0,
        reason: { en: 'NCERT p.186 explicitly warns against hard surfaces to preserve tuning fork elasticity and clean single-frequency tone.', hi: 'कठोर आघात से द्विभुज की शुद्ध एकल आवृत्ति व संरचना खराब हो जाती है (`पृ. 186`)।' },
      },
    },
    {
      num: '10.3',
      title: { en: 'Activity 10.3: Hearing Scratching Sound Through a Solid Wooden Desk (`Fig 10.5`)', hi: 'क्रियाकलाप 10.3: मेज़ के ठोस सिरे पर कान रख खरोंच सुनना (`ठोसों में संचरण`, चित्र 10.5)' },
      materials: { en: 'Long wooden classroom desk & two students', hi: 'कक्षा की लंबी लकड़ी की मेज़ व दो विद्यार्थी' },
      steps: { en: 'Friend scratches desk far end lightly (`listen through air`), then press one ear flat onto the desk wood covering your other ear & hear clearly!', hi: 'मित्र को मेज़ के दूर सिरे पर हल्का खरोंचने कहें — पहले वायु से सुनें, फिर एक कान डेस्क पर सटा कर व दूसरा बंद कर सुनें।' },
      examTakeaway: { en: 'Proves **sound travels efficiently through Solids** (`actually much faster and clearer than through air!`).', hi: 'सिद्ध होता है कि **ध्वनि ठोस पदार्थों (`लकड़ी, धातु`) से होकर आसानी व अधिक तीव्रता से संचरित होती है**।' },
      predictQuestion: {
        prompt: { en: 'In Activity 10.3 & Think Q11 (`340 m steel fence`), which arrives FIRST to an ear pressed on steel — sound through steel or sound through air?', hi: 'क्र. 10.3 व प्रश्न 11 (`340 m स्टील बाड़`) में डेस्क/बाड़ से कान लगाने पर पहले कौन-सी ध्वनि पहुंचेगी?' },
        options: { en: ['Air sound reaches first', 'Sound through SOLID steel/wood reaches MUCH FIRST (`15–20× faster`)', 'Both reach simultaneously', 'Solid sound is completely zero'], hi: ['वायु वाली ध्वनि पहले पहुंचेगी', 'ठोस (स्टील/लकड़ी) वाली ध्वनि पहले पहुंचेगी (`~15–20× तेज!`)', 'दोनों एकसाथ पहुंचेंगी', 'ठोस में ध्वनि शून्य'] },
        correctIndex: 1,
        reason: { en: 'Solid Steel conducts sound ~5000 m/s vs Air 340 m/s -> sound in steel fence finishes 340 m in `0.068 s` vs `1.0 s` in air!', hi: 'स्टील में चाल ~5000 m/s (`0.068 s` में 340 m) जबकि वायु में 340 m/s (`1.0 s`), अतः ठोस ध्वनि बहुत पहले पहुंचती है!' },
      },
    },
    {
      num: '10.4',
      title: { en: 'Activity 10.4: Clinking Two Metallic Spoons Underwater (`Liquid Propagation`, Fig 10.6)', hi: 'क्रियाकलाप 10.4: जल से भरी बाल्टी के भीतर धातु के दो चम्मच टकराना (`द्रव में संचरण`, चित्र 10.6)' },
      materials: { en: 'Large water-filled bucket/tub & two metallic spoons', hi: 'पानी भरा बड़ा टब/बाल्टी व धातु के दो चम्मच' },
      steps: { en: 'Strike two spoons in air (`note ring`), submerge both fully inside water without touching bucket bottom or sides, and strike underwater again while listening.', hi: 'पहले हवा में दोनों चम्मच टकराएँ; फिर बिना बाल्टी तली/दीवार छुए पानी के भीतर डुबोकर टकराएँ और ध्वनि सुनें।' },
      examTakeaway: { en: 'Proves **sound propagates readily through Liquids (`4–5× faster in water than air`)**, explaining aquatic whale/dolphin & ship SONAR communication!', hi: 'सिद्ध होता है कि **ध्वनि द्रवों (`जल`) से होकर भी संचरित होती है** (`इसी कारण डॉल्फिन संवाद व SONAR संभव है`)।' },
      predictQuestion: {
        prompt: { en: 'Why does Activity 10.4 warn not to touch the bucket sides/bottom when clinking submerged spoons?', hi: 'क्र. 10.4 में जल के भीतर चम्मच टकराते समय बाल्टी के तल या दीवार को न छूने की सावधानी क्यों दी गई है?' },
        options: { en: ['Solid bucket walls would transmit solid vibrations directly instead of testing transmission via water (`liquid`)', 'Plastic dissolves in water', 'Spoons melt on plastic contact', 'Water stops vibration instantly'], hi: ['वरना ध्वनि ठोस बाल्टी की दीवारों से आ जाएगी, जिससे जल में संचरण की सही जाँच न होगी', 'प्लास्टिक घुल जाता है', 'चम्मच पिघल जाते हैं', 'जल कंपन रोकता है'] },
        correctIndex: 0,
        reason: { en: 'Avoids solid conduction shortcut through bucket walls, isolating genuine **water (`liquid`) propagation** cleanly (`p.187`).', hi: 'ठोस बाल्टी से सीधे कंपन जाने से बच कर केवल जल (`द्रव माध्यम`) से संचरण की प्रामाणिक जाँच करने हेतु!' },
      },
    },
    {
      num: '10.5',
      title: { en: 'Activity 10.5: Slinky Spring Longitudinal Push-Pull Experiment (`Compressions & Rarefactions`, Fig 10.8)', hi: 'क्रियाकलाप 10.5: स्लिंकी कमानी से संपीडन-विरलन व अनुदैर्ध्य तरंग अवलोकन (`चित्र 10.8`)' },
      materials: { en: 'Long flexible plastic/metal slinky spring & colour tape marker', hi: 'लचीली खिलौना कमानी (`स्लिंकी`) व चिह्नक' },
      steps: { en: 'Mark one middle turn with tape, hold far end fixed, push-pull near end quickly parallel to floor along length; watch compressions travel forward while marked turn oscillates locally back-and-forth!', hi: 'स्लिंकी के एक फेरे पर चिह्न लगा फर्श पर फैलाएँ; एक सिरा पकड़ कर तेजी से आगे-पीछे धकेलें व खींचें; चिह्न और संपीडन गति देखें।' },
      examTakeaway: { en: 'Demonstrates **Longitudinal Waves**: **disturbance moves along entire spring length while marked turn stays vibrating around its rest position (`parallel to wave`)**!', hi: 'दिखाता है कि **विक्षोभ (`संपीडन व विरलन`) आगे बढ़ता है, जबकि फेरे का चिह्न केवल अपने स्थान पर संचरण दिशा के समानांतर आगे-पीछे दोलन करता है**!' },
      predictQuestion: {
        prompt: { en: 'In Activity 10.5 (`Fig 10.8`), as push-pull compressions race from left end to right wall, how does the marked middle ring move?', hi: 'क्र. 10.5 में स्लिंकी में विक्षोभ एक सिरे से दूसरे सिरे जाने पर चिह्नित बीच वाले फेरे की गति कैसी होती है?' },
        options: { en: ['It shoots all the way down to the friend’s hand', 'It oscillates back and forth around its own mean spot PARALLEL to wave direction (`Longitudinal`)', 'It moves up and down perpendicular only', 'It remains frozen completely motionless'], hi: ['वह मित्र के हाथ तक खिसक कर चला जाता है', 'वह केवल अपनी माध्य स्थिति के इधर-उधर तरंग दिशा के समानांतर दोलन करता है', 'वह ऊपर-नीचे लंबवत उछलता है', 'वह बिल्कुल स्थिर रहता है'] },
        correctIndex: 1,
        reason: { en: 'Verbatim p.189: Marked ring NEVER travels to far end — it oscillates parallel to propagation around rest point.', hi: 'सटीक `NCERT पृ. 189`: स्लिंकी का चिह्नित फेरा आगे नहीं बढ़ता, मात्र अपनी स्थिति के इधर-उधर दोलन करता है!' },
      },
    },
    {
      num: '10.6',
      title: { en: 'Activity 10.6: Bouncing Grains on Stretched Membrane Without Contact (`Sound Transfers Energy`, Fig 10.14)', hi: 'क्रियाकलाप 10.6: बिना छुए ध्वनि से झिल्ली पर अनाज के दानों का उछलना (`ध्वनि ऊर्जा`, चित्र 10.14)' },
      materials: { en: 'Wide-mouth container, tight stretched balloon/cellophane sheet + rubber band, rice/suji/chalk grains & steel plate + stick', hi: 'चौड़े मुँह का पात्र, कसी गुब्बारा/सेलोफेन झिल्ली, चावल/सूजी दाने व धातु प्लेट+डंडा' },
      steps: { en: 'Spread grains evenly on stretched membrane, beat steel plate loudly nearby WITHOUT touching vessel, watch grains jump & vary strike intensity!', hi: 'कसी हुई झिल्ली पर दाने बिखेरें; पात्र को छुए बिना पास धातु प्लेट पर प्रबल आघात करें व दानों की गति देखें।' },
      examTakeaway: { en: 'Proves **sound carries Energy** across air! Striking harder increases **wave amplitude -> grains bounce much higher**!', hi: 'सिद्ध होता है कि **ध्वनि ऊर्जा का वहन करती है**; जोर से आघात पर **आयाम बढ़ने से दाने अधिक ऊँचाई तक उछलते हैं**!' },
      predictQuestion: {
        prompt: { en: 'Beating the metal plate twice as hard in Activity 10.6 causes the rice grains to leap higher mainly because:', hi: 'क्र. 10.6 में धातु की प्लेट पर अधिक शक्ति से प्रहार करने पर अनाज के दाने अधिक ऊँचे क्यों उछलते हैं?' },
        options: { en: ['Larger vibration amplitude transfers MORE acoustic energy through air', 'Gravity vanishes near plates', 'Air frequency exceeds 100 kHz automatically', 'Pot moves closer magically'], hi: ['अधिक आयाम वाली ध्वनि तरंग अधिक ऊर्जा स्थानांतरित करती है', 'प्लेट के पास गुरुत्व शून्य हो जाता है', 'हवा की आवृत्ति 100 kHz हो जाती है', 'पात्र खिसक जाता है'] },
        correctIndex: 0,
        reason: { en: 'Verbatim p.191: Larger amplitude waves carry greater energy, giving membrane/grains bigger displacement!', hi: 'सटीक `पृ. 191`: अधिक शक्ति के आघात से आयाम बढ़ता है जिससे अधिक ऊर्जा झिल्ली में स्थानांतरित होती है!' },
      },
    },
    {
      num: '10.7',
      title: { en: 'Activity 10.7: Phyphox Audio Spectrum Analysis of Indian Musical Notes (`Sa–Re–Ga–Ma–Pa–Dha–Ni–Sa`)', hi: 'क्रियाकलाप 10.7: मोबाइल ऐप (`Phyphox`) से संगीत स्वरों `सा-रे-गा-मा-पा-धा-नि-सा` की आवृत्ति मापन (`पृ. 194`)' },
      materials: { en: 'Smartphone running Phyphox Audio Spectrum app & singing/tone app (`p.194`)', hi: 'मोबाइल (`Phyphox Audio Spectrum ऐप`) एवं गायन या टोन जनरेटर' },
      steps: { en: 'Sing/play ascending scale Sa–Re–Ga–Ma–Pa–Dha–Ni–Sa one by one; record frequency Hz values and ratios relative to base Sa.', hi: 'एक-एक कर ‘सा, रे, गा, मा, पा, धा, नि, सा’ बजाते/गाते हुए आवृत्ति (`Hz`) व ‘सा’ से अनुपात नोट करें।' },
      examTakeaway: { en: '**Each musical note has a unique fixed frequency**, increasing steadily from bottom **Sa** up to double-frequency **upper Sa (`2:1 Octave`)**!', hi: '**प्रत्येक सांगीतिक स्वर की विशिष्ट निश्चित आवृत्ति होती है**, जो नीचे ‘सा’ से ऊपर ‘सा’ तक बढ़कर दोगुनी (`अष्टक 2:1`) हो जाती है!' },
      predictQuestion: {
        prompt: { en: 'If base note Sa resonates at `240 Hz` in Activity 10.7, what frequency defines upper Sa one full Octave higher (`p.200 Box`)?', hi: 'यदि मूल स्वर ‘सा’ की आवृत्ति `240 Hz` है, तो एक अष्टक (`Octave`) ऊपर के ‘सा’ की आवृत्ति कितनी होगी?' },
        options: { en: ['120 Hz', '360 Hz', '480 Hz (`2× octave rule`)', '2400 Hz'], hi: ['120 Hz', '360 Hz', '480 Hz (`अष्टक = मूल आवृत्ति का दोगुना!`)', '2400 Hz'] },
        correctIndex: 2,
        reason: { en: 'Verbatim NCERT p.200: Octave connects two identical-name notes where upper fundamental frequency is exactly **double (`2 × 240 = 480 Hz`)**!', hi: 'सटीक `पृ. 200`: अष्टक (`Octave`) अंतराल में ऊपरी मूल आवृत्ति निचली की **दो गुनी (`480 Hz`)** होती है!' },
      },
    },
    {
      num: '10.8',
      title: { en: 'Activity 10.8: Sweeping Tone Frequency `100 Hz → 1000 Hz` & Lower Limit `50 Hz → 20 Hz` (`p.198`)', hi: 'क्रियाकलाप 10.8: टोन जनरेटर से `100→1000 Hz` व निम्न सीमा `50→20 Hz` श्रव्य जाँच (`पृ. 198`)' },
      materials: { en: 'Classroom mobile tone-generator app & speaker', hi: 'आवृत्ति टोन-जनरेटर मोबाइल ऐप' },
      steps: { en: 'Start at `100 Hz`, raise in `100 Hz` steps up to `1000 Hz` noting rising pitch; then drop down from `50 Hz` toward `20 Hz` until barely audible.', hi: '`100 Hz` से प्रारंभ कर `100-100 Hz` बढ़ाते हुए `1000 Hz` तक सुनें; फिर `50 Hz` से घटाकर `20 Hz` पर श्रव्य सीमा जाँचें।' },
      examTakeaway: { en: 'Demonstrates directly that **rising frequency `ν` makes sound pitch sharper/higher**, and **human hearing practically fades out at `< 20 Hz` (`Infrasonic`)**!', hi: 'सिद्ध होता है कि **आवृत्ति बढ़ने पर तारत्व तीखा होता जाता है** और **`20 Hz` से नीचे की ध्वनि मानव कानों से सुनाई देना बंद हो जाती है (`अवश्रव्य`)**!' },
      predictQuestion: {
        prompt: { en: 'As the tone generator sweeps downward below `20 Hz` (`e.g. 15 Hz`) in Activity 10.8, why does the classroom go silent?', hi: 'क्र. 10.8 में आवृत्ति को `20 Hz` से कम (`जैसे 15 Hz`) करने पर ध्वनि सुनाई देना क्यों बंद हो जाती है?' },
        options: { en: ['Waves below 20 Hz are Infrasonic — outside the 20 Hz–20 kHz human audible range', 'App switches off battery', 'Waves faster than light vanish', 'Air turns solid below 20 Hz'], hi: ['20 Hz से कम की तरंगें अवश्रव्य (Infrasonic) हैं जो मानव श्रव्य सीमा से बाहर हैं', 'बैटरी खत्म हो जाती है', 'ध्वनि प्रकाश से तेज हो जाती है', 'हवा ठोस बन जाती है'] },
        correctIndex: 0,
        reason: { en: 'Human audible range strictly spans **`20 Hz – 20,000 Hz`** (`p.199`, verified in ALP Shift 6 `18 Hz` PYQ).', hi: 'मनुष्यों का श्रव्य परिसर `20 Hz` से `20 kHz` तक ही सीमित है (`20 Hz` से कम = अवश्रव्य)।' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-10-sound-1',
      title: {
        en: 'Wave Equations, Five Core Parameters & SI Units (`Sec 10.5–10.6`)',
        hi: 'ध्वनि तरंग के 5 प्रमुख अभिलक्षण, सूत्र व मानक SI मात्रक (`भाग 10.5–10.6`)',
      },
      headers: {
        en: ['Wave Quantity & Symbol', 'Exact NCERT Definition', 'SI Unit', 'Key Formula / CBT Exam Note'],
        hi: ['भौतिक राशि व प्रतीक', 'सटीक NCERT परिभाषा', 'SI मात्रक', 'मुख्य सूत्र व रेलवे परीक्षा बिंदु'],
      },
      rows: [
        [{ en: '**Wavelength (`λ`)**', hi: '**तरंगदैर्घ्य (`λ`, लैंबडा)**' }, { en: 'Distance between 2 consecutive Crests (`C`) or Troughs (`R`)', hi: 'दो क्रमागत शृंगों (`अथवा दो गर्तों`) के बीच की दूरी' }, { en: '**metre (`m`)**', hi: '**मीटर (`m`)**' }, { en: '`λ = v / ν` (`20 Hz → 17.2 m`, `20 kHz → 1.72 cm` @ `344 m/s`)', hi: '`λ = v / ν` (`344 m/s` पर `20 Hz → 17.2 m`, `20 kHz → 1.72 cm`)' }],
        [{ en: '**Frequency (`ν`)**', hi: '**आवृत्ति (`ν`, न्यू)**' }, { en: 'Density oscillations passing fixed point per second', hi: 'एकांक समय (`1 s`) में घनत्व के पूर्ण दोलनों की संख्या' }, { en: '**Hertz (`Hz` = `s⁻¹`)**', hi: '**हर्ट्ज (`Hz` = `s⁻¹`)**' }, { en: 'Governs **Pitch** (`Whistle ↑`, `Drum ↓`); `20/4 = 5 Hz` (`Q3`)', hi: '**तारत्व** तय करे (`सीटी ↑`, `ढोल ↓`); `20/4 = 5 Hz` (`Q3`)' }],
        [{ en: '**Time Period (`T`)**', hi: '**आवर्तकाल (`T`)**' }, { en: 'Time taken for 1 complete density oscillation', hi: 'एक पूर्ण घनत्व दोलन में लगा समय (`Ex Q9: 0.01 s`)' }, { en: '**second (`s`)**', hi: '**सेकंड (`s`)**' }, { en: '**`T = 1 / ν`** and **`ν = 1 / T`** (`Eq 10.1`)', hi: '**`T = 1 / ν`** एवं **`ν = 1 / T`** (`समी. 10.1`)' }],
        [{ en: '**Wave Speed (`v`)**', hi: '**तरंग की चाल (`v`)**' }, { en: 'Distance moved by a wave point (`Crest`) per unit time', hi: 'एकांक समय में तरंग के शृंग द्वारा तय की गई दूरी' }, { en: '**`m s⁻¹` (`m/s`)**', hi: '**`m s⁻¹` (`m/s`)**' }, { en: '**`v = λ · ν`** (`Eq 10.2`) — depends ONLY on **Medium & T**!', hi: '**`v = λ · ν`** (`समी. 10.2`) — केवल **माध्यम व ताप** पर निर्भर!' }],
        [{ en: '**Amplitude (`A`) & Loudness**', hi: '**आयाम (`A`) व प्रबलता (`dB`)**' }, { en: 'Max density deviation from mean density (`Fig 10.20`)', hi: 'माध्य घनत्व से संपीडन/विरलन में अधिकतम घनत्व परिवर्तन' }, { en: 'Density / **dB** (`loudness`)', hi: 'घनत्व / **डेसिबेल (`dB`)**' }, { en: 'Large `A` -> loud & high energy; talk **`~60 dB`**, cracker **`>100 dB`**', hi: 'बड़ा `A` -> उच्च प्रबलता व ऊर्जा; बातचीत **`~60 dB`**, पटाखे **`>100 dB`**' }],
      ],
    },
    {
      id: 'tbl-10-sound-2',
      title: {
        en: 'Speed of Sound by Medium (`NCERT Table 10.1 @ 15°C` + Temperature Scaling)',
        hi: 'विभिन्न माध्यमों व तापमानों पर ध्वनि की चाल (`NCERT तालिका 10.1 @ 15°C` व शॉर्टकट अनुपात)',
      },
      headers: {
        en: ['Medium (`State`)', 'Approximate Speed (`m/s`)', 'NCERT Ratio vs Air (`Question 10`)', 'Exam Concept & Trap'],
        hi: ['माध्यम (`अवस्था`)', 'लगभग ध्वनि चाल (`m/s`)', 'वायु से तुलनात्मक अनुपात (`Q10`)', 'प्रमुख अवधारणा व PYQ'],
      },
      rows: [
        [{ en: '**Steel (`Solid`)**', hi: '**स्टील (`ठोस`)**' }, { en: '**`5000 m/s`** (`~15–20× air`)', hi: '**`5000 m/s`** (`15–20× वायु`)' }, { en: '`Steel : Water = 5000 : 1500` = **`10 : 3`** (`Q10 ii`)', hi: '`स्टील : जल = 5000 : 1500` = **`10 : 3`** (`Q10 ii`)' }, { en: 'Fastest medium (`high elasticity` — `ALP Shift 4`)', hi: 'सर्वाधिक तीव्र माध्यम (`उच्च प्रत्यास्थता` — `ALP Shift 4`)' }],
        [{ en: '**Water / Seawater (`Liquid`)**', hi: '**जल / समुद्री जल (`द्रव`)**' }, { en: '**`1500 m/s`** (`Seawater 1530 m/s`)', hi: '**`1500 m/s`** (`समुद्र 1530 m/s`)' }, { en: '`Water : Air = 1500 : 340` = **`75 : 17`** (`4–5× air`, `Q10 i`)', hi: '`जल : वायु = 1500 : 340` = **`75 : 17`** (`4–5×`, `Q10 i`)' }, { en: '`Ex Q15`: same distance `t_air/t_water = 4.5` ⇒ `v_air:v_water` = **`2 : 9`**', hi: '`अभ्यास Q15`: समान दूरी पर `t_air/t_water = 4.5` ⇒ `v_वायु:v_जल` = **`2 : 9`**' }],
        [{ en: '**Air (`Gas @ 0°C vs 22°C`)**', hi: '**वायु (`गैस @ 0°C बनाम 22°C`)**' }, { en: '**`331` (`0°C`) | `340` (`15°C`) | `344` (`22°C`)**', hi: '**`331` (`0°C`) | `340` (`15°C`) | `344` (`22°C`)**' }, { en: 'Slowest state of matter (`Rises when T↑ / Humidity↑`)', hi: 'ठोस व द्रव से धीमी (`ताप व आर्द्रता बढ़ने से चाल बढ़े`)' }, { en: '`Ex Q12`: `1720 m` cooler lag (`0°C vs 22°C`) = **`65/331 s`** (`~0.196s`)', hi: '`अभ्यास Q12`: `1720 m` ठंडी बनाम गर्म वायु समय अंतर = **`65/331 s`** (`~0.196s`)' }],
        [{ en: '**Vacuum (`Outer Space`)**', hi: '**निर्वात (`बाह्य अंतरिक्ष`)**' }, { en: '**`0 m/s` (`ZERO transmission!`)**', hi: '**`0 m/s` (`बिल्कुल शून्य!`)**' }, { en: 'NO medium particles to collide/transfer compression', hi: 'कंपन करने हेतु माध्यम कण अनुपस्थित' }, { en: '**Bell Jar `Fig 10.7`** + Astronaut radio + Movie explosion `Ex Q8`', hi: '**बेल जार प्रयोग `चित्र 10.7`** + अंतरिक्ष यात्री रेडियो + फिल्म विस्फोट `Q8`' }],
      ],
    },
    {
      id: 'tbl-10-sound-3',
      title: {
        en: 'Physical Wave Property vs Subjective Ear Perception & Anatomy (`Sec 10.6.4`)',
        hi: 'ध्वनि के भौतिक गुण बनाम मानवीय संवेदी बोध व मानव कर्ण के भाग (`भाग 10.6.4`)',
      },
      headers: {
        en: ['Human Auditory Quality', 'Linked Physical Property', 'Real-Life Examples / Value', 'Special Bio / Physics Fact (`NCERT`)'],
        hi: ['मानवीय ध्वनि-बोध', 'संबंधित भौतिक गुणधर्म', 'व्यावहारिक उदाहरण / मान', 'विशेष NCERT परीक्षा बिंदु'],
      },
      rows: [
        [{ en: '**Pitch (`तारत्व`)**', hi: '**तारत्व (`Pitch`)**' }, { en: '**Frequency (`ν`)**', hi: '**आवृत्ति (`ν`)**' }, { en: 'High: Whistle/Siren (`↑ν`); Low: Thunder/Drum (`↓ν`)', hi: 'उच्च: सीटी/सायरन (`↑ν`); निम्न: ढोल/गर्जना (`↓ν`)' }, { en: 'Teen boys grow thicker/longer **vocal cords** -> lower `ν`', hi: 'किशोर लड़कों के **वाक् तंतु** मोटे/लंबे होकर कम आवृत्ति (`गंभीर आवाज`) बनाते हैं' }],
        [{ en: '**Loudness (`प्रबलता`)**', hi: '**प्रबलता (`Loudness`)**' }, { en: '**Amplitude (`A`)** (`Energy ∝ A²`)', hi: '**आयाम (`A`)** & **तीव्रता**' }, { en: 'Whisper low `dB`; Talk **`~60 dB`**; Cracker **`>100 dB`**', hi: 'सामान्य वार्तालाप **`~60 dB`**; पटाखे **`> 100 dB`**' }, { en: 'Measured in **Decibels (`dB`)**; drops with distance (`spreading`)', hi: 'मात्रक **डेसिबेल (`dB`)**; दूरी बढ़ने पर ऊर्जा फैलाव से घटती है' }],
        [{ en: '**Quality / Timbre (`गुणता`)**', hi: '**गुणता (`Quality / Timbre`)**' }, { en: '**Waveform / Overtones Mix**', hi: '**अधिस्वरक (`Overtones`) व आकृति**' }, { en: 'Separates Flute, Guitar, Tabla even at identical `ν` & `A`', hi: 'समान `ν` व `A` पर भी बाँसुरी व तबला पहचानना (`ALP Shift 7`)' }, { en: '**Tone**: single `ν`; **Note**: fundamental + overtones (`C.V. Raman Tabla`)', hi: '**टोन (`एकल ν`)** बनाम **स्वर (`मूल + अधिस्वरक`)** (`सी.वी. रमन तबला शोध`)' }],
        [{ en: '**Human Ear (`Fig 10.24`)**', hi: '**मानव कान (`चित्र 10.24`)**' }, { en: 'Eardrum -> Middle Bones -> Cochlea', hi: 'कर्णपटल → अस्थियाँ → कर्णावर्त' }, { en: 'Bones **amplify** tiny vibrations; Cochlea makes **electric signals**', hi: 'नन्हीं अस्थियाँ प्रवर्धित करें; कर्णावर्त विद्युत संकेत बनाए' }, { en: '2 Ears pinpoint direction via **`< 0.001 s`** lag; Aid = Mic+Amp+Speaker', hi: 'दोनों कान **`< 0.001 s`** अंतर से दिशा पहचानें; श्रवण यंत्र = माइक+प्रवर्धक+स्पीकर' }],
      ],
    },
    {
      id: 'tbl-10-sound-4',
      title: {
        en: 'Sound Reflection, Echo (`≥0.1 s`), Reverberation (`<0.05 s`) & Acoustic Design Matrix',
        hi: 'ध्वनि परावर्तन, प्रतिध्वनि (`≥0.1 s`), अनुरणन (`<0.05 s`) व ध्वनिक उपचार तुलना सारणी',
      },
      headers: {
        en: ['Phenomenon / System', 'Time Threshold / Geometry', 'Acoustic Behaviour & Formula', 'Practical Use / Prevention (`RRB PYQ`)'],
        hi: ['परिघटना / यंत्र', 'समय अंतराल / शर्त', 'वैज्ञानिक नियम व सूत्र', 'व्यावहारिक उपयोग व निवारण (`PYQ`)'],
      },
      rows: [
        [{ en: '**Clear Echo (`प्रतिध्वनि`)**', hi: '**स्पष्ट प्रतिध्वनि (`Echo`)**' }, { en: 'Reflected arrival lag **`≥ 0.1 s`** (`p.201`)', hi: 'परावर्तन पहुँच अंतराल **`≥ 0.1 s`**' }, { en: '`2d = v·t` ⇒ min distance **`17 m`** (`340 m/s`), **`17.2 m`** (`344 m/s`)', hi: '`2d = v·t` से `340 m/s` पर न्यूनतम दूरी **`17 m`** (`Q12 @0.2s: 34.3m`)' }, { en: 'Hard smooth surfaces create sharper echoes (`ALP Shift 6, Group D 24, 32`)', hi: 'कठोर चिकनी सतहें तीव्र प्रतिध्वनि देती हैं (`ALP Shift 6, Group D 24, 32`)' }],
        [{ en: '**Reverberation (`अनुरणन`)**', hi: '**अनुरणन (`Reverberation`)**' }, { en: 'Multiple bounces arriving **`< 0.05 s`**', hi: 'बहु-परावर्तन **`< 0.05 s`** में मिल जाना' }, { en: 'Sound persists after source stops, smearing/overlapping speech', hi: 'स्रोत बंद होने के बाद भी गूँजकर शब्दों का अतिव्यापन (`Group D 16, 34`)' }, { en: 'Reduced via **curtains, carpets, acoustic wall/ceiling tiles, padded seats**', hi: '**पर्दे, कालीन, ध्वनि-अवशोषक फाइबर बोर्ड व गद्देदार सीटों** से कम करें' }],
        [{ en: '**Gol Gumbaz (`Bijapur`)**', hi: '**गोल गुम्बज (`बीजापुर, कर्नाटक`)**' }, { en: 'Whispering dome circular curvature', hi: 'विशाल गुंबद की विशेष वक्र संरचना' }, { en: 'Curved interior channels faint whispers multiple times along dome', hi: 'धीमी फुसफुसाहट भी विशाल गुंबद में अनेक बार सुनाई दे (`पृ. 201`)' }, { en: 'Concert hall stage curved back walls project sound cleanly', hi: 'सभागारों की वक्र पिछली दीवारें व छत ध्वनि को श्रोताओं तक पहुँचाती हैं' }],
        [{ en: '**Medical Stethoscope**', hi: '**चिकित्सकीय स्टेथोस्कोप**' }, { en: 'Hollow narrow flexible tube', hi: 'पतली खोखली नली व चेस्ट-पीस' }, { en: '**Multiple reflections** inside tube carry heartbeat cleanly to ears', hi: 'ट्यूब के भीतर **बहु-परावर्तन** से हृदय स्पंदन कान तक पहुँचे (`Group D 45`)' }, { en: 'Avoids sound spreading intensity drop over room air', hi: 'कमरे की हवा में ध्वनि फैलाव से होने वाले क्षय को रोकता है' }],
      ],
    },
    {
      id: 'tbl-10-sound-5',
      title: {
        en: 'Infrasonic (`<20 Hz`), Audible (`20 Hz–20 kHz`) & Ultrasonic (`>20 kHz`) + SONAR Numericals (`Sec 10.8`)',
        hi: 'अवश्रव्य (`<20 Hz`), श्रव्य (`20 Hz–20 kHz`), पराश्रव्य (`>20 kHz`) एवं SONAR आंकिक तालिका',
      },
      headers: {
        en: ['Frequency Zone', 'Exact Hz Range', 'Organisms / Detectors (`NCERT`)', 'Key Science / Technology Applications (`p.202–203`)'],
        hi: ['आवृत्ति क्षेत्र', 'सटीक Hz सीमा', 'जीव व संवेदक (`NCERT`)', 'प्रमुख विज्ञान, चिकित्सा व रक्षा अनुप्रयोग'],
      },
      rows: [
        [{ en: '**Infrasonic (`अवश्रव्य`)**', hi: '**अवश्रव्य (`Infrasonic`)**' }, { en: '**`< 20 Hz`** (`e.g. 18 Hz`)', hi: '**`20 Hz` से कम** (`जैसे 18 Hz`)' }, { en: '**Elephants**, Drone acoustic sensors (`low freq hum`)', hi: '**हाथी**, ड्रोन निम्न-आवृत्ति चौकसी संवेदक' }, { en: 'Detect **earthquakes, volcanoes, severe storms** (`long travel range`)', hi: '**भूकंप, ज्वालामुखी व भीषण तूफान** की पूर्व-चेतावनी (`लंबी दूरी तय करें`)' }],
        [{ en: '**Human Audible (`श्रव्य`)**', hi: '**मानव श्रव्यता (`Audible`)**' }, { en: '**`20 Hz – 20,000 Hz (20 kHz)`**', hi: '**`20 Hz – 20 kHz`**' }, { en: 'Healthy young adults (`upper bound falls with age`)', hi: 'मनुष्य (`आयु बढ़ने से ऊपरी सीमा घटती है`)' }, { en: '`Ex 10.2`: air wavelengths from **`17.2 m` (`20Hz`)** down to **`1.72 cm` (`20kHz`)**', hi: '`उदा. 10.2`: वायु में तरंगदैर्घ्य **`17.2 m` (`20 Hz`)** से घटकर **`1.72 cm` (`20 kHz`)**' }],
        [{ en: '**Ultrasonic (`पराश्रव्य`)**', hi: '**पराश्रव्य (`Ultrasonic`)**' }, { en: '**`> 20,000 Hz (20 kHz)`**', hi: '**`20 kHz` से अधिक**' }, { en: '**Bats (`Fig 10.27`), Dolphins, Whales, Dogs, Cats**', hi: '**चमगादड़, डॉल्फिन, व्हेल, कुत्ते, बिल्लियाँ**' }, { en: '**Ultrasonography, break kidney stones, delicate cleaning (`no damage`), metal crack tests, `40 kHz` car sensor, SONAR**', hi: '**अल्ट्रासोनोग्राफी, गुर्दे की पथरी तोड़ना, संवेदनशील सफाई, धातु दरार जाँच, `40 kHz` कार सेंसर, SONAR**' }],
        [{ en: '**SONAR (`Depth Calculation`)**', hi: '**SONAR (`समुद्री गहराई`)**' }, { en: 'Ultrasonic bursts underwater (`~1500–1530 m/s`)', hi: 'जल में `~1500–1530 m/s` पराश्रव्य' }, { en: 'Submarines, shipwrecks & ocean trenches (`Fig 10.28`)', hi: 'पनडुब्बी व डूबे जलयान (`अभ्यास Q10, प्रश्‍न 13`)' }, { en: '**`d = (v × t)/2`** ⇒ `Ex 10.6`: **`688.5 m`** | `Q13`: **`3000 m`** | `Ex Q10`: **`3812.5 m`**', hi: '**`d = (v × t)/2`** ⇒ `उदा. 10.6`: **`688.5 m`** | `Q13`: **`3000 m`** | `अभ्यास Q10`: **`3812.5 m`**' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.186 Q1',
      q: { en: 'List different methods / ways by which sound can be produced.', hi: 'ध्वनि उत्पन्न करने के विभिन्न साधनों की खोज कीजिए।' },
      a: { en: 'Sound arises whenever an object **vibrates**: **(1)** plucking stretched strings/rubber bands (`guitar, sitar, veena`), **(2)** beating stretched membranes (`tabla, mridangam, drum`), **(3)** blowing air columns (`flute, shehnai, whistling`), **(4)** striking resonant metals (`manjira, bell, tuning fork`), and **(5)** human **vocal cords (`larynx`)** or wing/leg rubbing (`crickets`).', hi: 'कंपन करने वाले विविध साधनों से ध्वनि बनती है: **(1) तने तार/डोरी** (`सितार, वीणा, रबड़ बैंड`), **(2) कसी झिल्ली/पटल** (`तबला, मृदंगम, ढोल`), **(3) वायु स्तंभ** (`बाँसुरी, सीटी`), **(4) धातु आघात** (`मंजीरा, घंटी, स्वरित्र द्विभुज`), तथा **(5) मानव वाक् तंतु (`कंठ`)** व कीट पंख घर्षण।' },
    },
    {
      num: 'p.186 Q2',
      q: { en: 'List common musical instruments and identify the specific vibrating part that produces sound in each.', hi: 'विभिन्न प्रकार के संगीत वाद्ययंत्रों की एक सूची तैयार कीजिए और उनके कंपन करने वाले उन भागों की पहचान कीजिए जो ध्वनि उत्पन्न करते हैं।' },
      a: { en: '• **Guitar / Sitar / Veena / Sarangi**: **Stretched metallic strings** (`तनी हुई डोरी/तार`).\n• **Tabla / Mridangam / Dhol**: **Stretched skin membrane** (`तना हुआ पटल` — `Syahi` enriches tabla overtones).\n• **Flute (`बाँसुरी`)**: **Air column inside hollow bamboo tube**.\n• **Manjira (`मंजीरा`) / Bell**: **Entire metallic body (`sonority`)**.', hi: '• **सितार / वीणा / गिटार**: **तनी हुई तारें** |\n• **तबला / मृदंगम / ढोल**: **तना हुआ चमड़े/झिल्ली का पटल** (`स्याही` समृद्ध स्वर बनाती) |\n• **बाँसुरी**: **खोखली नली के भीतर वायु स्तंभ** |\n• **मंजीरा / घंटी**: **संपूर्ण धातु पात्र (`ध्वानिकता`)**।' },
    },
    {
      num: 'p.187 Q3',
      q: { en: 'Assertion: After pumping most air out of a bell jar, we cannot hear the ringing electric bell inside. Reason: Sound needs a medium to propagate. Pick correct option.', hi: 'अभिकथन: किसी बंद जार में से अधिकांश वायु निकाल देने के पश्चात हम इसमें बजती घंटी की ध्वनि नहीं सुन पाते। कारण: ध्वनि को संचरण हेतु माध्यम की आवश्यकता होती है। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Correct Option `(ii)` (`ihsc1an Verified ✓`)**: **Both Assertion and Reason are TRUE, and Reason is the correct explanation of Assertion!** Sound is a mechanical wave requiring air molecules (`fails in vacuum`, `Fig 10.7`).', hi: '**सही उत्तर `(ii)` (`उत्तरमाला सत्यापित ✓`)**: **अभिकथन और कारण दोनों सत्य हैं, और कारण अभिकथन की सही व्याख्या करता है** — निर्वात में वायु माध्यम न होने से घंटी की ध्वनि नहीं आ पाती!' },
    },
    {
      num: 'p.191 Q4',
      q: { en: 'Assertion: Compressions and rarefactions move forward through a medium. Reason: Particles of the medium move forward continuously along with the wave.', hi: 'अभिकथन: संपीडन एवं विरलन माध्यम में गति करते हैं। कारण: माध्यम के कण तरंग के साथ लगातार आगे बढ़ते रहते हैं। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Correct Option `(iii)` (`ihsc1an Verified ✓`)**: **Assertion is TRUE, but Reason is FALSE!** Only the disturbance/energy (`C/R`) propagates forward; medium particles merely vibrate back-and-forth around their equilibrium positions (`p.189 & p.192`).', hi: '**सही उत्तर `(iii)` (`उत्तरमाला सत्यापित ✓`)**: **अभिकथन सत्य है, परंतु कारण असत्य है!** माध्यम में केवल संपीडन-विरलन का विक्षोभ आगे जाता है, कण केवल अपने स्थान पर दोलन करते हैं!' },
    },
    {
      num: 'p.192 Q5',
      q: { en: 'When sound from a tuning fork reaches your ear, what physically reaches your ear? (`i`) air molecules near fork (`ii`) energy carried by sound waves (`iii`) metal of fork (`iv`) continuous stream of compressed air.', hi: 'जब ध्वनि किसी स्वरित्र द्विभुज से आपके कान तक पहुँचती है तो वास्तव में क्या पहुँचता है? (`i`) द्विभुज समीप वायु कण (`ii`) ध्वनि तरंगों द्वारा वाहित ऊर्जा (`iii`) धातु पदार्थ (`iv`) संपीडित वायु धारा। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Correct Option `(ii)` (`ihsc1an Verified ✓`)**: **Energy carried by sound waves (`ध्वनि तरंगों द्वारा वाहित ऊर्जा`)**! Air molecules near the fork merely bump neighbours locally without migrating across the room (`Sec 10.4`).', hi: '**सही उत्तर `(ii)` (`उत्तरमाला सत्यापित ✓`)**: **ध्वनि तरंगों द्वारा वाहित ऊर्जा** ही कान तक पहुँचती है, कण नहीं (`भाग 10.4`)!' },
    },
    {
      num: 'p.193 Q6',
      q: { en: 'Label `C` (compression) and `R` (rarefaction) for the two sound density patterns (`Fig 10.17a,b`) and sketch their matching Density vs Distance graphs.', hi: 'चित्र 10.17 (`क, ख`) में संपीडन `C` व विरलन `R` अंकित करें तथा संगत घनत्व बनाम दूरी वक्र (`ग, घ`) खींचें।' },
      a: { en: 'Crowded vertical particle strips = **`C` (`Crest peak above mean density`)**; wide-spaced particle strips = **`R` (`Trough dip below mean density`)**. Axes: **X-axis = Distance**, **Y-axis = Medium Density** — wider `C-C` spacing yields longer-wavelength wave (`see Vector Plate 2`)!', hi: 'सघन पट्टियाँ = **`C` (`शृंग/शीर्ष`)** तथा विरल पट्टियाँ = **`R` (`गर्त/निम्नतम`)**; **X-अक्ष पर दूरी** व **Y-अक्ष पर घनत्व**। चौड़ा `C-C` अंतराल लंबी तरंगदैर्घ्य `λ` दर्शाता है (`वेक्टर प्लेट 2 देखें`)!' },
    },
    {
      num: 'p.195 Q7',
      q: { en: 'Compare a thin stretched rubber band vs a thick rubber band (`Activity 10.1`): does the thin band vibrate faster? How do its frequency & time period differ?', hi: 'मोटी रबड़ बैंड की तुलना में पतली रबड़ बैंड क्या अधिक तीव्र कंपन करती है? इसकी आवृत्ति व आवर्तकाल कैसे भिन्न होंगे?' },
      a: { en: '**YES!** A thin rubber band vibrates **much faster** -> produces **HIGHER Frequency (`ν ↑`, sharper high pitch)** and **SMALLER Time Period (`T = 1/ν` drops)** compared to a thicker slow-vibrating band!', hi: '**जी हाँ!** पतला रबड़ बैंड मोटे की तुलना में **अधिक तेजी से कंपन करता है**, अतः इसकी **आवृत्ति (`ν`) अधिक** और **आवर्तकाल (`T = 1/ν`) कम** होता है!' },
    },
    {
      num: 'p.195 Q8',
      q: { en: 'If a sound wave produced by an oscillating piston has a frequency of `20 Hz`, how many oscillations does the piston complete in **one minute (`60 s`)**?', hi: 'यदि पिस्टन द्वारा उत्पन्न ध्वनि तरंग की आवृत्ति `20 Hz` है तो पिस्टन प्रति मिनट कितने दोलन पूर्ण करता है? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: `20 Hz = 20 oscillations per second`. In `1 minute = 60 s`: Total oscillations = `20 × 60` = **`1,200 oscillations (`1200 दोलन`)`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**: आवृत्ति `20 Hz` अर्थात `20 दोलन/सेकंड` ⇒ `1 मिनट (60 s)` में कुल दोलन = `20 × 60` = **`1200 दोलन`**!' },
    },
    {
      num: 'p.195 Q9',
      q: { en: 'From graph `Fig 10.19` (`full wavelength shown up to 3.0 cm`), what is half the wavelength (`अर्ध तरंगदैर्घ्य`) of that sound wave?', hi: 'चित्र 10.19 में निरूपित ध्वनि तरंग (`एक चक्र दूरी = 3.0 cm`) का अर्ध तरंगदैर्घ्य (`λ/2`) क्या है? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`)**: Reading one full wave (`peak-to-peak` or `zero-to-next-identical-zero`) = `3.0 cm` ⇒ **Half Wavelength `λ / 2` = `1.5 cm`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**: एक पूर्ण तरंगदैर्घ्य `λ = 3.0 cm` (या पहले शृंग से दूसरे गर्त तक आधा चक्र) = **`1.5 cm`**!' },
    },
    {
      num: 'p.197 Q10',
      q: { en: 'Using Table 10.1 (`15°C`: Steel = `5000 m/s`, Water = `1500 m/s`, Air = `340 m/s`), find (`i`) Water : Air speed ratio, and (`ii`) Steel : Water speed ratio.', hi: 'तालिका 10.1 (`स्टील 5000`, `जल 1500`, `वायु 340 m/s`) से अनुपात निकालिए: (`i`) जल : वायु, तथा (`ii`) स्टील : जल। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**:\n• **`(i)` Water : Air** = `1500 / 340` = **`75 : 17`** (`~4.41× faster`).\n• **`(ii)` Steel : Water** = `5000 / 1500` = **`10 : 3`** (`~3.33× faster`).', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n• **`(i)` जल : वायु** = `1500 / 340` = **`75 : 17`**।\n• **`(ii)` स्टील : जल** = `5000 / 1500` = **`10 : 3`**।' },
    },
    {
      num: 'p.198 Q11',
      q: { en: 'Gunjan places her ear on a `340 m` long steel fence while a friend strikes the far end (`Fig 10.23`). Using `v_steel = 5000 m/s` and `v_air = 340 m/s`, find time gap between both arrivals & whether Gunjan hears them separately (`threshold ≥ 0.1 s`).', hi: 'गुंजन `340 m` लंबी स्टील की बाड़ से कान सटा कर खड़ी है व मित्र दूर सिरे पर मारता है (`चित्र 10.23`)। स्टील (`5000 m/s`) व वायु (`340 m/s`) ध्वनि के बीच समय अंतराल ज्ञात कीजिए और बताइए क्या दोनों अलग सुनाई देंगी? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**:\n• Through **Steel**: `t_steel = 340 / 5000` = **`0.068 s`**.\n• Through **Air**: `t_air = 340 / 340` = **`1.000 s`**.\n• **Time Interval** = `1.000 − 0.068` = **`0.932 s`**. Since **`0.932 s ≥ 0.1 s`**, **YES (`जी हाँ`)**, she hears both distinctly (`steel first!`)!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n• स्टील समय = `340/5000` = **`0.068 s`** | वायु समय = `340/340` = **`1.0 s`**।\n• **समय अंतराल** = `1.0 − 0.068` = **`0.932 s`** (`≥ 0.1 s`) ⇒ **जी हाँ**, दोनों ध्वनियाँ स्पष्ट अलग सुनाई देंगी!' },
    },
    {
      num: 'p.201 Q12',
      q: { en: 'In an experiment, an echo must arrive at least `0.2 s` after emission (`speed of sound = 343 m/s`). What is the minimum distance to the reflecting wall?', hi: 'किसी प्रयोग में प्रतिध्वनि ध्वनि उत्सर्जन के कम-से-कम `0.2 s` पश्चात सुनाई देनी चाहिए। यदि ध्वनि चाल `343 m/s` हो, तो परावर्तक सतह की न्यूनतम दूरी क्या होगी? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: Two-way distance `2d = v × t = 343 × 0.2 = 68.6 m` ⇒ Minimum distance `d = 68.6 / 2` = **`34.3 m`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: कुल दूरी `2d = 343 × 0.2 = 68.6 m` ⇒ न्यूनतम दूरी `d = 68.6 / 2` = **`34.3 m`**!' },
    },
    {
      num: 'p.203 Q13',
      q: { en: 'A SONAR pulse sent downward returns in `4 s`. If speed of sound in seawater is `1500 m/s`, calculate ocean depth at that spot.', hi: 'महासागर की गहराई मापने हेतु भेजा गया सोनार संकेत `4 s` में वापस लौटता है। यदि समुद्री जल में ध्वनि की चाल `1500 m/s` हो, तो महासागर की गहराई कितनी होगी? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: Depth `d = (v × t) / 2 = (1500 × 4) / 2 = 6000 / 2` = **`3,000 m (`3 km`)`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: गहराई `d = (1500 × 4) / 2` = **`3,000 m`** (`3 km`)!' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'Which observation best supports the idea that sound is a mechanical wave? (`i`) Sound reflects (`ii`) Sound requires a medium for propagation (`iii`) Sound has frequency (`iv`) Sound carries energy.', hi: 'कौन-सा अवलोकन इस विचार का सर्वोत्तम समर्थन करता है कि ध्वनि एक यांत्रिक तरंग है? (`i`) ध्वनि परावर्तन दर्शाती है (`ii`) ध्वनि के संचरण के लिए माध्यम आवश्यक है (`iii`) ध्वनि की आवृत्ति होती है (`iv`) ध्वनि ऊर्जा वहन करती है।' },
      a: { en: '**Correct Option: `(ii)` (`ihsc1an Verified ✓`)** — By definition (`p.190`), **mechanical waves require a material medium** (`solid/liquid/gas`) and cannot travel in vacuum.', hi: '**सही उत्तर: `(ii)` (`उत्तरमाला सत्यापित ✓`)** — यांत्रिक तरंग की मुख्य पहचान है कि इसे संचरण हेतु **भौतिक माध्यम की आवश्यकता** होती है।' },
    },
    {
      num: '2',
      q: { en: 'When the frequency of a sound wave propagating in a medium increases, what increases? (`i`) Wavelength (`ii`) Speed (`iii`) Number of compressions passing per second (`iv`) Time period.', hi: 'किसी माध्यम में संचरित हो रही ध्वनि तरंग की आवृत्ति बढ़ाने पर क्या बढ़ेगा? (`i`) तरंगदैर्घ्य (`ii`) चाल (`iii`) प्रति सेकंड संपीडनों की संख्या (`iv`) आवर्तकाल।' },
      a: { en: '**Correct Option: `(iii)` (`ihsc1an Verified ✓`)** — Frequency literally measures **full cycles (`compressions`) per second**! Meanwhile speed `v` stays constant (`fixed medium`), so `λ` and `T = 1/ν` actually *decrease*.', hi: '**सही उत्तर: `(iii)` (`उत्तरमाला सत्यापित ✓`)** — आवृत्ति का अर्थ ही **प्रति सेकंड गुजरने वाले संपीडनों/दोलनों की संख्या** है (`चाल नियत रहती है जबकि λ व T घटते हैं`)!' },
    },
    {
      num: '3',
      q: { en: 'If `20` compressions pass a point in `4 seconds`, the frequency is: (`i`) `80 Hz` (`ii`) `5 Hz` (`iii`) `10 Hz` (`iv`) `0.2 Hz`.', hi: 'यदि किसी बिंदु से `4 सेकंड` में `20 संपीडन` गुजरते हैं तो आवृत्ति होगी — (`i`) `80 Hz` (`ii`) `5 Hz` (`iii`) `10 Hz` (`iv`) `0.2 Hz`।' },
      a: { en: '**Verified Answer: `(ii)` `5 Hz` (`ihsc1an ✓`)** — Frequency `ν = 20 / 4 s` = **`5 Hz`** (`5 cycles per second`).', hi: '**सत्यापित उत्तर: `(ii)` `5 Hz` (`उत्तरमाला ✓`)** — आवृत्ति = `20 / 4` = **`5 Hz`**!' },
    },
    {
      num: '4',
      q: { en: 'Inside a room, reflected sound returns `0.05 s` after original emission. Does this produce an Echo or Reverberation? Explain.', hi: 'किसी कक्ष में परावर्तित ध्वनि उत्पन्न होने के `0.05 सेकंड` पश्चात कान तक पहुँचती है। क्या यह प्रतिध्वनि उत्पन्न करेगी या अनुरणन? कारण सहित बताइए।' },
      a: { en: 'It produces **REVERBERATION (`अनुरणन`)**, NOT a distinct echo! A crisp separate echo needs **`≥ 0.1 s`** delay; returning **`≤ 0.05 s`** overlaps directly with original speech (`Sec 10.7.2`, p.201).', hi: 'यह **अनुरणन (`Reverberation`)** उत्पन्न करेगी! क्योंकि स्पष्ट प्रतिध्वनि के लिए कम-से-कम **`0.1 s`** अंतराल आवश्यक है, जबकि `0.05 s` से कम में परावर्तित ध्वनि मूल ध्वनि में घुलकर गूँज (`अनुरणन`) पैदा करती है (`भाग 10.7.2`)।' },
    },
    {
      num: '5',
      q: { en: 'Given two sound graphs `Fig 10.30 (a)` & `(b)` at identical X/Y scales (`(a)` shows 1.5 wide short peaks; `(b)` shows 3 tight tall peaks): (`i`) Which has longer wavelength? (`ii`) Which has smaller amplitude?', hi: 'चित्र 10.30 में दो ध्वनि तरंगें (`समान पैमाना`): (`i`) किस तरंग का तरंगदैर्घ्य अधिक है? (`ii`) किस तरंग का आयाम कम है? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`)**:\n• **`(i)` Wave `(a)`** has wider crest-to-crest spacing (`longer wavelength λ`).\n• **`(ii)` Wave `(a)`** has shorter vertical height (`smaller amplitude A`).', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n• **`(i)` `(a)` का तरंगदैर्घ्य अधिक है** (`अधिक चौड़ा शृंग-शृंग अंतराल`)।\n• **`(ii)` `(a)` का आयाम भी कम है** (`ऊँचाई कम`)।' },
    },
    {
      num: '6',
      q: { en: 'Three waves (`Green`, `Red`, `Blue`) in `Fig 10.31` match sources `A, B, C` where **`A` has highest frequency** and **`C` has lowest frequency**. Identify curves `A, B, C`.', hi: 'चित्र 10.31 में तीन वक्र (`हरा, लाल, नीला`) स्रोत A, B, C दर्शाते हैं जहाँ A की आवृत्ति अधिकतम व C की न्यूनतम है — वक्र पहचानिए। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`)**:\n• **`A` (Highest ν / tightest waves) = Green Curve (`हरा वक्र`)**.\n• **`B` (Medium ν) = Red Curve (`लाल वक्र`)**.\n• **`C` (Lowest ν / widest waves) = Blue Curve (`नीला वक्र`)**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**: **`A` — हरा वक्र** (`सर्वाधिक दोलन`), **`B` — लाल वक्र**, तथा **`C` — नीला वक्र** (`न्यूनतम दोलन/चौड़ी तरंग`)!' },
    },
    {
      num: '7',
      q: { en: 'How do you sketch a sound wave graph with **Density Amplitude = `3 units`** and **Wavelength = `4 cm`**?', hi: 'ऐसी ध्वनि तरंग का ग्राफ वर्णन कीजिए जिसका घनत्व आयाम `3 मात्रक` तथा तरंगदैर्घ्य `4 cm` हो।' },
      a: { en: 'Draw sinusoidal curve along **X-axis (`Distance cm`)** and **Y-axis (`Density` around mean line `0`)**: peak crests touch **`+3 units`**, bottom troughs touch **`−3 units`**, with consecutive crests repeating at `x = 1, 5, 9 cm` (`each full cycle = 4 cm`!).', hi: '**X-अक्ष (`दूरी cm`)** पर माध्य घनत्व (`0`) रेखा के ऊपर **`+3 मात्रक` शृंग** व नीचे **`−3 मात्रक` गर्त** बनाएँ, जहाँ प्रत्येक पूर्ण चक्र (`एक शृंग से अगला शृंग`) ठीक **`4 cm`** की दूरी पर दोहराए!' },
    },
    {
      num: '8',
      q: { en: 'A sci-fi movie shows a spaceship exploding in outer space with BOTH bright flash and loud boom heard simultaneously. Point out the **scientific errors**!', hi: 'किसी फिल्म में अंतरिक्ष में अंतरिक्ष यान के विस्फोट में प्रकाश और ध्वनि दोनों एकसाथ सुनाई व दिखाई देते हैं — इस चित्रण में क्या वैज्ञानिक त्रुटियाँ हैं?' },
      a: { en: '**Two major errors**: **(1)** Outer space is nearly a **vacuum** — mechanical **sound waves CANNOT propagate in space at all**, so no boom would EVER be heard (`Sec 10.2.1`)! **(2)** Even inside air, light (`3×10⁸ m/s`) arrives virtually instantly long before slow sound (`~340 m/s`), never simultaneously (`Ex 10.3`).', hi: '**दो बड़ी त्रुटियाँ**: **(1)** बाह्य अंतरिक्ष लगभग **निर्वात** है — **ध्वनि तरंगें बिना माध्यम के अंतरिक्ष में चल ही नहीं सकतीं**, अतः कोई विस्फोट ध्वनि सुनाई ही नहीं देगी! **(2)** यदि माध्यम होता भी, तो प्रकाश (`3×10⁸ m/s`) पहले व धीमी ध्वनि (`~340 m/s`) काफी बाद में पहुँचती — एकसाथ कभी नहीं!' },
    },
    {
      num: '9',
      q: { en: 'A sound source produces `λ = 3.44 m` moving at `v = 344 m/s`. Calculate its Time Period (`T`).', hi: 'एक स्रोत `3.44 m` तरंगदैर्घ्य वाली ध्वनि उत्पन्न करता है। यदि तरंग की चाल `344 m/s` हो, तो आवर्तकाल (`T`) ज्ञात कीजिए। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: `ν = v / λ = 344 / 3.44 = 100 Hz` ⇒ Time Period `T = 1 / ν = 1 / 100` = **`0.01 s`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: आवृत्ति `ν = 344 / 3.44 = 100 Hz` ⇒ आवर्तकाल `T = 1 / 100` = **`0.01 s`**!' },
    },
    {
      num: '10',
      q: { en: 'A ship SONAR signal locating a sunken wreck returns after `5 s`. If ultrasound speed in seawater is `1525 m/s`, how deep is the wreck?', hi: 'समुद्र में डूबे जलयान हेतु सोनार संकेत की प्रतिध्वनि `5 s` पश्चात प्राप्त होती है (`समुद्री जल चाल = 1525 m/s`)। जलयान की गहराई ज्ञात कीजिए। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: Depth `d = (v × t) / 2 = (1525 × 5) / 2 = 7625 / 2` = **`3,812.5 m`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: गहराई `d = (1525 × 5) / 2` = **`3,812.5 m`**!' },
    },
    {
      num: '11',
      q: { en: 'A vehicle’s `40 kHz` ultrasonic parking sensor triggers its warning beep when `1.2 m` from an obstacle (`v_air = 345 m/s`). Find round-trip return time `t`.', hi: 'वाहन की पार्किंग सहायता प्रणाली (`40 kHz` पराश्रव्य संवेदक) अवरोध से `1.2 m` दूरी पर चेतावनी बीप बजाती है (`वायु चाल 345 m/s`)। अवरोध तक जाकर लौटने में कितना समय लगेगा? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: Total path `2d = 2 × 1.2 = 2.4 m`. Time `t = 2.4 / 345 ≈ 0.00696 s` ≈ **`0.007 s`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: कुल दूरी `2d = 2 × 1.2 = 2.4 m` ⇒ समय `t = 2.4 / 345` ≈ **`0.007 s`**!' },
    },
    {
      num: '12',
      q: { en: 'Air sound speed is `331 m/s` at `0°C` and `344 m/s` at `22°C`. How much extra time does thunder take to cover `1720 m` if air cools from `22°C` to `0°C`?', hi: 'यदि वायु तापमान `22°C` (`चाल 344 m/s`) से घटकर `0°C` (`चाल 331 m/s`) हो जाए, तो `1720 m` दूरी तय करने में मेघगर्जन को कितना अतिरिक्त समय लगेगा? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**:\n• Time at `22°C`: `t₁ = 1720 / 344` = **`5 s`**.\n• Time at `0°C`: `t₂ = 1720 / 331`.\n• **Extra Time**: `t₂ − t₁ = (1720 / 331) − 5 = (1720 − 1655) / 331` = **`65 / 331 s`** (`~0.196 s`)!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n• `22°C` पर समय `= 1720/344 = 5 s` | `0°C` पर `= 1720/331 s`।\n• **अतिरिक्त समय** = `1720/331 − 5` = **`65/331 s`** (`~0.196 s`)!' },
    },
    {
      num: '13',
      q: { en: 'In `Fig 10.32` (`v = 340 m/s`), `2` complete waves span **`8 cm`**. Find wavelength (`λ`) and frequency (`ν`).', hi: 'चित्र 10.32 में `340 m/s` से चलती तरंग (`2 पूर्ण चक्र = 8 cm`) का तरंगदैर्घ्य `λ` व आवृत्ति `ν` ज्ञात कीजिए। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: `2λ = 8 cm` ⇒ **`λ = 4 cm = 0.04 m`**. Frequency `ν = v / λ = 340 / 0.04` = **`8,500 Hz`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: `λ = 8/2 = 4 cm` = **`0.04 m`** ⇒ आवृत्ति `ν = 340 / 0.04` = **`8,500 Hz`**!' },
    },
    {
      num: '14',
      q: { en: 'Two waves `A` (`2` cycles in `5.0 cm`) and `B` (`1` cycle in `5.0 cm`) in `Fig 10.33` move at **`v = 345 m/s`**. Find `λ` and `ν` for both.', hi: 'चित्र 10.33 में `345 m/s` चाल से संचरित तरंग A (`5 cm में 2 चक्र`) तथा B (`5 cm में 1 चक्र`) के तरंगदैर्घ्य व आवृत्ति ज्ञात करें। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**:\n• **Wave A**: `λ_A = 5.0 / 2 = 2.5 cm` = **`0.025 m`** ⇒ `ν_A = 345 / 0.025` = **`13,800 Hz`**.\n• **Wave B**: `λ_B = 5.0 cm` = **`0.05 m`** ⇒ `ν_B = 345 / 0.05` = **`6,900 Hz`**.', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n• **तरंग A**: `λ = 0.025 m`, `ν` = **`13,800 Hz`** |\n• **तरंग B**: `λ = 0.05 m`, `ν` = **`6,900 Hz`**!' },
    },
    {
      num: '15',
      q: { en: 'Identical sources `A` (`air`) & `B` (`water`) face a cliff (`Fig 10.34`). If `A` echo time is **`4.5×`** `B` echo time (`t_A = 4.5 t_B`), find ratio of **speed in Air : speed in Water**.', hi: 'वायु में स्रोत A व जल में स्रोत B (`चित्र 10.34`) से चट्टान तक प्रतिध्वनि वापसी समय में `t_A = 4.5 × t_B` है, तो वायु और जल में ध्वनि वेगों का अनुपात क्या होगा? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: Identical round-trip distance `2d = v_air · t_A = v_water · t_B` ⇒ `v_air / v_water = t_B / t_A = 1 / 4.5 = 10 / 45` = **`2 : 9`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: समान दूरी हेतु `v_वायु / v_जल = t_B / t_A = 1 / 4.5 = 10 / 45` = **`2 : 9`**!' },
    },
  ],
  flashcards: [
    { front: { en: 'Sound Wave Nature & Does Medium Move With Wave?', hi: 'ध्वनि तरंग की प्रकृति व क्या माध्यम के कण तरंग के साथ चलते हैं?' }, back: { en: '**Longitudinal Mechanical Wave** (`particles vibrate ∥`). **ONLY energy/disturbance moves forward** — particles oscillate locally!', hi: '**अनुदैर्ध्य यांत्रिक तरंग** (`कण समानांतर ∥ कंपन`)। **केवल ऊर्जा/विक्षोभ आगे चलता है**, माध्यम के कण अपने स्थान पर ही दोलन करते हैं!' } },
    { front: { en: 'Compression (`C`) vs Rarefaction (`R`) & Bell Jar Result?', hi: 'संपीडन (`C`) vs विरलन (`R`) एवं निर्ववात बेलजार प्रयोग परिणाम?' }, back: { en: '**`C`** = **max density Crest** | **`R`** = **min density Trough** (`ALP 1`). **Vacuum Bell Jar (`Fig 10.7`) = Silence** (`Space has NO sound`!).', hi: '**`C`** = **अधिकतम घनत्व** | **`R`** = **न्यूनतम घनत्व**। **निर्वात में घंटी नहीं सुनाई देती (`अंतरिक्ष में भी शून्य`)**!' } },
    { front: { en: 'Wave Equation + Speed Order (`Steel : Water : Air`)?', hi: 'तरंग समीकरण व माध्यमों में ध्वनि की चाल का क्रम?' }, back: { en: '**`v = λ · ν`**, **`ν = 1/T (Hz)`**. **Steel (`5000 m/s`) > Water (`1500`) > Air (`340`)** | Temp `0°C 331 -> 22°C 344 m/s` | `v` depends **on medium ONLY**!', hi: '**`v = λ · ν`**, **`ν = 1/T`**। **स्टील (`5000`) > जल (`1500`) > वायु (`340`)** | **ताप ↑ ⇒ चाल ↑** | चाल केवल **माध्यम** पर निर्भर!' } },
    { front: { en: 'Pitch vs Loudness vs Quality (`Timbre`) + Octave Rule?', hi: 'तारत्व, प्रबलता (`dB`), गुणता (`Timbre`) व अष्टक (`2:1`)?' }, back: { en: '**Pitch ↔ Frequency `ν`** | **Loudness (`dB`) ↔ Amplitude `A`** (`60 dB talk`) | **Timbre ↔ Overtones (`C.V. Raman Tabla Syahi`)** | **Octave = `2:1`** (`200:400 Hz`)!', hi: '**तारत्व ↔ आवृत्ति** | **प्रबलता (`dB`) ↔ आयाम** (`सामान्य ~60 dB`) | **गुणता ↔ अधिस्वरक (`C.V. रमन`)** | **अष्टक = `2:1`**!' } },
    { front: { en: 'Human Ear Signal Path (`Fig 10.24`) & Why 2 Ears?', hi: 'मानव कान का श्रवण मार्ग (`चित्र 10.24`) व दो कानों का लाभ?' }, back: { en: '**Outer Ear -> Eardrum -> Middle Bones (`amplify`) -> Cochlea (`electrical signals`) -> Brain**! Two ears detect `< 1 ms` lag for direction.', hi: '**कर्णपटल → नन्हीं अस्थियाँ (`प्रवर्धन`) → कर्णावर्त (`विद्युत संकेत`) → मस्तिष्क**! दो कान दिशा निर्धारण करते हैं!' } },
    { front: { en: 'Minimum Echo Time Gap, Distance (`340 m/s`) & Temp Rule?', hi: 'स्पष्ट प्रतिध्वनि हेतु न्यूनतम समय, दूरी एवं ताप प्रभाव?' }, back: { en: 'Gap **`≥ 0.1 s`** ⇒ **`d_min = 340 × 0.1 / 2 = 17 m`**! Rising air temperature raises `v`, so **minimum echo distance ALSO rises**!', hi: 'अंतराल **`≥ 0.1 s`** ⇒ **`340 m/s` पर `17 m`** (`Q12 @0.2s: 34.3 m`)! **ताप ↑ ⇒ चाल ↑ ⇒ न्यूनतम दूरी ↑**!' } },
    { front: { en: 'Reverberation (`< 0.05 s`) vs Echo & How Halls Prevent It?', hi: 'अनुरणन (`< 0.05 s`) क्या है व सभागारों में कैसे रोकते हैं?' }, back: { en: 'Rapid bounces `< 0.05 s` blur words (**Reverberation**). **Heavy curtains, carpets, soft wall boards, cushioned seats** absorb excess sound!', hi: 'दीवारों से `< 0.05 s` में बहु-परावर्तन से शब्दों का अतिव्यापन = **अनुरणन** → **पर्दे, कालीन, ध्वनि पैनल व गद्देदार सीटें** इसे घटाती हैं!' } },
    { front: { en: 'Audible Range + Infrasonic (`<20 Hz`) + Ultrasonic (`>20 kHz`) Animals?', hi: 'श्रव्य, अवश्रव्य (`<20 Hz`) व पराश्रव्य (`>20 kHz`) सीमा व जीव?' }, back: { en: '**Audible**: **`20 Hz – 20 kHz`** (`17.2m – 1.72cm`) | **Infrasonic `<20Hz`**: **Elephants**, quakes | **Ultrasonic `>20kHz`**: **Bats, Dolphins, Dogs**!', hi: '**श्रव्य**: **`20 Hz–20 kHz`** | **अवश्रव्य (`<20 Hz`)**: **हाथी**, भूकंप | **पराश्रव्य (`>20 kHz`)**: **चमगादड़, डॉल्फिन, कुत्ते**!' } },
    { front: { en: 'Top 5 Ultrasonic Uses & How Stethoscope Works?', hi: 'पराश्रव्य के 5 मुख्य अनुप्रयोग एवं स्टेथोस्कोप सिद्धांत?' }, back: { en: 'Ultrasonography, **kidney stone breaking**, **delicate cleaning (`no damage`)**, metal flaws, welding. **Stethoscope**: **multiple tube reflections**!', hi: 'अल्ट्रासोनोग्राफी, **गुर्दे की पथरी तोड़ना**, **नाजुक वस्तु सफाई**, धातु दोष व वेल्डिंग। **स्टेथोस्कोप**: **बहु-परावर्तन**!' } },
    { front: { en: 'SONAR Depth Formula (`Ex 10.6 & Ex Q10`) & Special Cultural Boxes?', hi: 'सोनार गहराई सूत्र (`उदा. 10.6`) एवं कोंग थोंग / गोल गुम्बज तथ्य?' }, back: { en: '**`d = (v × t) / 2`** (`0.90 s @ 1530 = 688.5 m`; `5 s @ 1525 = 3812.5 m`). **Kongthong**: *Jingrwai Iawbei*; **Bijapur**: *Gol Gumbaz*; **Mars** sounds!', hi: '**`d = (v × t)/2`** (`उदा. 10.6: 688.5 m`, `Q13: 3000 m`, `अभ्यास 10: 3812.5 m`)। **कोंग थोंग धुन**, **गोल गुम्बज**, **ड्रोन चौकसी**!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c9p10-1',
      examTag: 'RRB ALP 2025 Cycle (18 Feb 2026 Shift 3)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Eq 10.2): v = λ·ν Travel Time Numerical',
      question: {
        en: 'A sound wave has a frequency of `4 kHz` and a wavelength of `25 cm`. How much time will it take to travel a distance of `2.5 km`?',
        hi: 'एक ध्वनि तरंग की आवृत्ति `4 kHz` और तरंगदैर्घ्य `25 cm` है। `2.5 km` की दूरी तय करने में इसे कितना समय लगेगा?',
      },
      options: {
        en: ['2.5 s', '2.0 s', '2.2 s', '2.6 s'],
        hi: ['2.5 s', '2.0 s', '2.2 s', '2.6 s'],
      },
      correctIndex: 0,
      solution: {
        en: 'Wave speed `v = λ × ν = 0.25 m × 4000 Hz = 1,000 m/s`. Time for `2.5 km = 2,500 m`: `t = d / v = 2500 / 1000` = **`2.5 s`**!',
        hi: 'चाल `v = 0.25 m × 4000 Hz = 1000 m/s` ⇒ `2.5 km (2500 m)` दूरी समय `t = 2500/1000` = **`2.5 s`**!',
      },
    },
    {
      id: 'pyq-c9p10-2',
      examTag: 'RRB ALP 2025 Cycle (13 Feb 2026 Shift 1)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.3): Rarefaction Density State',
      question: {
        en: 'During the propagation of sound in air, rarefaction (`R`) is the region where ________.',
        hi: 'वायु में ध्वनि के संचरण के दौरान, विरलन (`R`) वह क्षेत्र होता है जहाँ ________।',
      },
      options: {
        en: ['particles are crowded very close', 'density is minimum', 'pressure is highest', 'wavelength becomes zero'],
        hi: ['कण बहुत नजदीक होते हैं', 'घनत्व न्यूनतम होता है', 'दाब अधिक होता है', 'तरंगदैर्घ्य शून्य हो जाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.3 & 10.5` (`Fig 10.16`)**: Compression (`C`) is maximum density, whereas **Rarefaction (`R`) is the low-pressure region where medium density is MINIMUM**!',
        hi: 'सटीक `भाग 10.3–10.5`: संपीडन (`C`) में घनत्व अधिकतम, जबकि **विरलन (`R`) क्षेत्र में माध्यम का घनत्व न्यूनतम होता है**!',
      },
    },
    {
      id: 'pyq-c9p10-3',
      examTag: 'RRB ALP 2025 Cycle (16 Feb 2026 Shift 2)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Eq 10.2): Constant Speed Frequency-Wavelength Relation',
      question: {
        en: 'If the frequency of a sound wave increases and the speed remains constant, its wavelength will:',
        hi: 'यदि ध्वनि तरंग की आवृत्ति बढ़ती है और चाल स्थिर रहती है, तो उसकी तरंगदैर्घ्य __________।',
      },
      options: {
        en: ['decrease', 'remain the same', 'increase', 'become zero'],
        hi: ['घट जाएगी', 'अपरिवर्तित रहेगी', 'बढ़ जाएगी', 'शून्य हो जाएगी'],
      },
      correctIndex: 0,
      solution: {
        en: 'From `v = λ · ν`, at fixed speed `v`, **`λ = v / ν`** — rising frequency inversely **decreases wavelength `λ`** (`Sec 10.6.3`)!',
        hi: 'समीकरण `v = λ·ν` से नियत चाल पर `λ = v / ν` — अतः आवृत्ति बढ़ने पर **तरंगदैर्घ्य घट जाएगी**!',
      },
    },
    {
      id: 'pyq-c9p10-4',
      examTag: 'RRB ALP 2025 Cycle (17 Feb 2026 Shift 2)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.7.1): Minimum Distance for Echo (17 m)',
      question: {
        en: 'For an echo to be heard clearly, the reflecting surface should be at least how far from the listener? (`Take speed of sound ≈ 340 m/s`)',
        hi: 'प्रतिध्वनि (`Echo`) स्पष्ट रूप से सुनाई देने के लिए, परावर्तक पृष्ठ श्रोता से न्यूनतम कितनी दूरी पर होना चाहिए? (`ध्वनि की चाल ≈ 340 m/s मानिए`)',
      },
      options: {
        en: ['50 m', '34 m', '100 m', '17 m'],
        hi: ['50 m', '34 m', '100 m', '17 m'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `p.201`**: Distinct hearing needs `≥ 0.1 s` ⇒ two-way trip `= 340 × 0.1 = 34.0 m` ⇒ minimum obstacle distance = half = **`17 m`**!',
        hi: 'सटीक `NCERT पृ. 201`: `0.1 s` समय अंतराल में कुल दूरी `34 m` ⇒ परावर्तक सतह की न्यूनतम दूरी इसकी आधी अर्थात **`17 m`** होगी!',
      },
    },
    {
      id: 'pyq-c9p10-5',
      examTag: 'RRB ALP Cycle (Shift 1 • Acoustics)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.3): Temperature Boosts Speed of Sound',
      question: {
        en: 'Which of the following statements about the speed of sound is correct?',
        hi: 'ध्वनि की चाल के संबंध में निम्नलिखित में से कौन-सा कथन सही है?',
      },
      options: {
        en: [
          'The speed of sound in a medium increases as its temperature rises.',
          'Temperature has no effect on the speed of sound in any medium.',
          'The speed of sound is the same in solids, liquids, and gases.',
          'The speed of sound increases when a substance changes from solid to gas.',
        ],
        hi: [
          'जैसे-जैसे किसी माध्यम का तापमान बढ़ता है, ध्वनि की चाल बढ़ती जाती है।',
          'किसी भी माध्यम में ध्वनि की चाल पर तापमान का कोई प्रभाव नहीं पड़ता है।',
          'ध्वनि की चाल ठोस, द्रव और गैसों में समान होती है।',
          'जब पदार्थ ठोस से गैस में बदलता है तो चाल बढ़ती है।',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.196`**: Speed rises with **temperature & humidity** (`dry air 0°C = 331 m/s -> 22°C = 344 m/s`) and follows **Solids > Liquids > Gases**!',
        hi: 'सटीक `NCERT पृ. 196`: **ताप व आर्द्रता बढ़ने पर ध्वनि की चाल बढ़ती है** (`0°C पर 331 → 22°C पर 344 m/s`), और चाल **ठोस > द्रव > गैस** क्रम में होती है!',
      },
    },
    {
      id: 'pyq-c9p10-6',
      examTag: 'RRB ALP Cycle (Shift 2)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.7.2): Reverberation in Bare Rooms',
      question: {
        en: 'Why might a classroom with bare walls and a tiled floor have more reverberation compared to one with carpets and curtains?',
        hi: 'कालीनों और पर्दों वाले कक्षा-कक्ष की तुलना में नंगी दीवारों और टाइल वाले फर्श वाले कक्षा-कक्ष में अधिक अनुरणन (`reverberation`) क्यों हो सकता है?',
      },
      options: {
        en: [
          'Thicker walls trap more sound, causing echoes',
          'Hard smooth surfaces reflect more sound, increasing reverberation',
          'Larger rooms always erase echoes completely',
          'Carpets generate extra acoustic reflections',
        ],
        hi: [
          'मोटी दीवारें अधिक ध्वनि रोकती हैं',
          'कठोर सतहें अधिक ध्वनि परावर्तित करती हैं, जिससे अनुरणन बढ़ जाता है',
          'बड़े कमरों में ध्वनि गायब हो जाती है',
          'कालीन अधिक प्रतिध्वनि बनाते हैं',
        ],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `Sec 10.7.2`**: Hard, smooth tiled/bare walls **reflect** sound repeatedly (`reverberation`), whereas curtains, carpets & porous panels **absorb** acoustic energy!',
        hi: '`भाग 10.7.2`: कठोर चिकनी सतहें अधिक ध्वनि परावर्तित कर अनुरणन बढ़ाती हैं, जबकि पर्दे व कालीन ध्वनि अवशोषित कर इसे कम करते हैं।',
      },
    },
    {
      id: 'pyq-c9p10-7',
      examTag: 'RRB ALP Cycle (Shift 2)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Wave Equation Numerical: Halving Frequency Doubles Wavelength',
      question: {
        en: 'A sound wave has frequency `500 Hz` and travels at `340 m/s`. What would happen to its wavelength if frequency is halved to `250 Hz` (`speed unchanged`)?',
        hi: 'एक ध्वनि तरंग की आवृत्ति `500 Hz` व चाल `340 m/s` है। यदि चाल अपरिवर्तित रखते हुए आवृत्ति घटाकर `250 Hz` कर दी जाए, तो तरंगदैर्घ्य पर क्या प्रभाव पड़ेगा?',
      },
      options: {
        en: ['It becomes zero', 'It is halved', 'It remains the same', 'It is doubled'],
        hi: ['यह शून्य हो जाएगा', 'यह आधा हो जाएगा', 'यह समान रहेगा', 'यह दोगुना हो जाएगा'],
      },
      correctIndex: 3,
      solution: {
        en: 'Since `λ = v / ν`, halving frequency (`500 -> 250 Hz`) at fixed `v` **doubles wavelength** (`0.68 m -> 1.36 m`)!',
        hi: '`λ = v / ν` के कारण समान चाल पर आवृत्ति आधी (`500→250 Hz`) करने से **तरंगदैर्घ्य दोगुना हो जाएगा**!',
      },
    },
    {
      id: 'pyq-c9p10-8',
      examTag: 'RRB ALP Cycle (Shift 3)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Medium Transition: Doubled Wavelength Means Doubled Speed',
      question: {
        en: 'A sound wave has frequency `f` and wavelength `λ` in air. Without changing the source (`constant frequency`), its wavelength becomes `2λ` in another medium. What happens to its speed?',
        hi: 'वायु में एक ध्वनि तरंग की आवृत्ति `f` व तरंगदैर्घ्य `λ` है। स्रोत बदले बिना (`नियत आवृत्ति`), किसी अन्य माध्यम में तरंगदैर्घ्य `2λ` हो जाती है। ध्वनि की चाल पर क्या प्रभाव पड़ता है?',
      },
      options: {
        en: ['Speed becomes half', 'Speed becomes double', 'Speed remains same', 'Speed becomes four times'],
        hi: ['चाल आधी हो जाती है', 'चाल दोगुनी हो जाती है', 'चाल समान बनी रहती है', 'चाल चार गुनी हो जाती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Wave frequency `f` depends solely on source (`unchanged`). From `v = f · λ`, doubling wavelength (`λ -> 2λ`) means **speed doubles (`2v`)**!',
        hi: 'स्रोत न बदलने से आवृत्ति `f` समान रहती है; अतः `v = f·λ` से तरंगदैर्घ्य `2λ` होने पर **ध्वनि की चाल दोगुनी (`2v`)** हो गई है!',
      },
    },
    {
      id: 'pyq-c9p10-9',
      examTag: 'RRB ALP (04 Nov 2026 Shift 4)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Act 10.4 & Table 10.1): Sound Faster in Water Than Air',
      question: {
        en: 'If a bell is rung underwater and in open air, how does the speed of sound compare between the two?',
        hi: 'यदि किसी घंटी को जल के नीचे और खुली वायु में बजाया जाता है, तो दोनों स्थितियों में ध्वनि की चाल की सही तुलना क्या है?',
      },
      options: {
        en: [
          'Sound travels slower in water than in air',
          'Sound travels faster in water than in air (`~4–5×`)',
          'Sound does not travel through water',
          'Sound travels identically in both',
        ],
        hi: [
          'ध्वनि वायु की तुलना में जल में धीमी गमन करती है',
          'ध्वनि वायु की तुलना में जल में अधिक तीव्र चाल से गमन करती है (`4–5×`)',
          'ध्वनि जल में गमन नहीं करती है',
          'दोनों माध्यमों में चाल समान होती है',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `Table 10.1` (`p.196–197`)**: Speed in water (`~1500 m/s`) is **4 to 5 times FASTER** than speed in air (`~340 m/s`)!',
        hi: 'सटीक `तालिका 10.1`: जल में ध्वनि की चाल (`1500 m/s`) वायु (`340 m/s`) से **4 से 5 गुना अधिक** होती है!',
      },
    },
    {
      id: 'pyq-c9p10-10',
      examTag: 'RRB ALP (04 Nov 2026 Shift 4)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Medium Properties Governing Sound Speed (`Steel > Air`)',
      question: {
        en: 'A student in a laboratory finds that sound travels much faster in steel than in air. Which properties of the medium explain this?',
        hi: 'प्रयोगशाला में एक विद्यार्थी प्रेक्षित करता है कि वायु की तुलना में इस्पात में ध्वनि तेजी से गमन करती है। माध्यम के कौन-से अभिलक्षण इसकी व्याख्या करते हैं?',
      },
      options: {
        en: ['Shape and size of the bar', 'Density and elasticity of the medium', 'Colour of the bar', 'Loudness of initial tap'],
        hi: ['माध्यम की आकृति और आकार', 'माध्यम का घनत्व और प्रत्यास्थता', 'मोटाई और रंग', 'प्रहार की केवल प्रबलता'],
      },
      correctIndex: 1,
      solution: {
        en: 'Sound speed in any material depends directly on the medium’s **elasticity (`stiffness`) and density** — high rigidity of solids gives `~5000 m/s` (`15–20× air`)!',
        hi: 'ठोस स्टील में उच्च **प्रत्यास्थता व घनत्व** गुणों के कारण ध्वनि वायु की अपेक्षा `15–20` गुना तेज चलती है!',
      },
    },
    {
      id: 'pyq-c9p10-11',
      examTag: 'RRB ALP (04 Nov 2026 Shift 6)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.7.2): Definition of Reverberation',
      question: {
        en: 'In big halls, sound lingers because it repeatedly reflects off walls, reduced using sound-absorbing materials. What is this phenomenon called?',
        hi: 'बड़े हॉलों में दीवारों से बार-बार टकराने के कारण ध्वनि लंबे समय तक बनी रहती है, जिसे ध्वनि-अवशोषक पदार्थों से कम करते हैं। इस परिघटना को क्या कहते हैं?',
      },
      options: {
        en: ['Echo', 'Noise', 'Resonance', 'Reverberation'],
        hi: ['प्रतिध्वनि', 'रव (Noise)', 'अनुनाद', 'अनुरणन (Reverberation)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.7.2` (`p.201`)**: Persistence of sound via repeated hall reflections (`< 0.05 s`) is called **Reverberation (`अनुरणन`)**.',
        hi: 'सटीक `भाग 10.7.2`: बहु परावर्तनों से ध्वनि का स्रोत बंद होने के बाद भी कुछ समय तक बने रहना **अनुरणन (`Reverberation`)** कहलाता है।',
      },
    },
    {
      id: 'pyq-c9p10-12',
      examTag: 'RRB ALP (04 Nov 2026 Shift 6)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.8): 18 Hz = Infrasonic Inaudible Wave',
      question: {
        en: 'A physicist observes a material vibrating at `18 Hz` when struck. Which type of sound does this generate, and how is it perceived by humans?',
        hi: 'एक भौतिक विज्ञानी देखता है कि एक पदार्थ `18 Hz` पर कंपन करता है। यह किस प्रकार की ध्वनि है, और मानव कान द्वारा इसे कैसे अनुभूत किया जाएगा?',
      },
      options: {
        en: [
          'Infrasonic; it would not be heard by humans',
          'Audible; it would be clearly heard',
          'Ultrasonic; it would be heard faintly',
          'Ultrasonic; audible only in space',
        ],
        hi: [
          'अवश्रव्य; यह मनुष्यों द्वारा नहीं सुनी जा सकेगी',
          'श्रव्य; स्पष्ट सुनाई देगी',
          'पराश्रव्य; धीरे सुनाई देगी',
          'पराश्रव्य; केवल अंतरिक्ष में सुनी जाएगी',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Since `18 Hz < 20 Hz`, it lies in the **Infrasonic (`अवश्रव्य`)** band — **below human hearing limit (`20 Hz–20 kHz`)** (`heard by elephants`, Sec 10.8)!',
        hi: '`18 Hz < 20 Hz` होने से यह **अवश्रव्य (`Infrasonic`) तरंग** है और मनुष्य इसे सुन नहीं सकते!',
      },
    },
    {
      id: 'pyq-c9p10-13',
      examTag: 'RRB ALP (05 Nov 2026 Shift 7)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.4): Timbre / Quality Distinction',
      question: {
        en: 'Two sounds have the same pitch and loudness, yet one sounds richer or more pleasant. Which characteristic helps us distinguish between them?',
        hi: 'दो ध्वनियों का तारत्व (`Pitch`) और प्रबलता (`Loudness`) समान है, परंतु एक अधिक सुखद है। कौन-सा अभिलक्षण उनके बीच भेद करने में सहायता करता है?',
      },
      options: {
        en: ['Amplitude', 'Frequency', 'Quality or Timbre', 'Wavelength'],
        hi: ['आयाम (Amplitude)', 'आवृत्ति (Frequency)', 'गुणता या ध्वनिरूप (Quality or Timbre)', 'तरंगदैर्घ्य (Wavelength)'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `p.200`**: **Quality / Timbre (`ध्वनिगुणता`)** separates distinct instruments at equal loudness & pitch via **overtones**!',
        hi: 'सटीक `पृ. 200`: समान प्रबलता व तारत्व वाले भिन्न वाद्ययंत्रों में भेद **गुणता (`Timbre`)** से होता है!',
      },
    },
    {
      id: 'pyq-c9p10-14',
      examTag: 'RRB ALP (05 Nov 2026 Shift 8)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.8): Complete Frequency Spectrum Tiers',
      question: {
        en: 'Which statement correctly differentiates audible, infrasonic, and ultrasonic sounds?',
        hi: 'निम्नलिखित में से कौन-सा कथन श्रव्य, अवश्रव्य और पराश्रव्य ध्वनियों को सही रूप में विभेदित करता है?',
      },
      options: {
        en: [
          'Audible: 20 Hz to 20,000 Hz; Infrasonic: below 20 Hz; Ultrasonic: above 20,000 Hz',
          'Audible: below 20 Hz; Infrasonic: 20 Hz–20 kHz; Ultrasonic: above 20 kHz',
          'All three share the exact same Hz range',
          'Audible: 20 Hz–20 kHz; Infrasonic: > 20 kHz; Ultrasonic: < 20 Hz',
        ],
        hi: [
          'श्रव्य: 20 Hz–20,000 Hz; अवश्रव्य: 20 Hz से कम; पराश्रव्य: 20,000 Hz से अधिक',
          'श्रव्य: 20 Hz से कम; अवश्रव्य: 20 Hz–20 kHz; पराश्रव्य: 20 kHz से अधिक',
          'तीनों की आवृत्ति समान होती है',
          'श्रव्य: 20 Hz–20 kHz; अवश्रव्य: 20 kHz से अधिक; पराश्रव्य: 20 Hz से कम',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.199` & `p.202`**: **Infrasonic `< 20 Hz` | Audible `20 Hz – 20 kHz` | Ultrasonic `> 20 kHz`**!',
        hi: 'सटीक `NCERT पृ. 199, 202`: **अवश्रव्य `< 20 Hz` | श्रव्य `20 Hz – 20,000 Hz` | पराश्रव्य `> 20,000 Hz`**!',
      },
    },
    {
      id: 'pyq-c9p10-15',
      examTag: 'RRB Group D 2025 (03 Aug & 06 Aug Shifts)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.8): Ultrasound Delicate Cleaning',
      question: {
        en: 'Why are ultrasound (`> 20 kHz`) waves used for cleaning delicate electronic components and jewellery?',
        hi: 'कोमल इलेक्ट्रॉनिक घटकों व आभूषणों की सफाई में पराश्रव्य (`Ultrasound`) तरंगों का उपयोग करने का मुख्य कारण क्या है?',
      },
      options: {
        en: [
          'They chemically dissolve metal surfaces',
          'Tiny high-frequency vibrations dislodge dirt without causing physical damage',
          'They magnetise dust particles',
          'They melt plastic outer casings gently',
        ],
        hi: [
          'ये धातु पृष्ठ को रासायनिक रूप से बदल देती हैं',
          'सूक्ष्म उच्च-आवृत्ति कंपन बिना किसी भौतिक क्षति के गंदगी को हटा देते हैं',
          'ये चुंबकत्व से धूल खींचती हैं',
          'ये घटकों को हल्के से पिघलाती हैं',
        ],
      },
      correctIndex: 1,
      solution: {
        en: '**NCERT `Sec 10.8` (`p.202`)**: High-frequency ultrasound dislodges hidden dust/grease in fine crevices cleanly **without scrubbing or physical damage**!',
        hi: '`भाग 10.8`: पराश्रव्य तरंगों के सूक्ष्म तीव्र कंपन नाजुक भागों को बिना किसी खरोंच या भौतिक क्षति के साफ कर देते हैं।',
      },
    },
    {
      id: 'pyq-c9p10-16',
      examTag: 'RRB Group D 2025 (06 Aug 2026 Shift 12)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.6.4): Pitch Difference Drum vs Whistle',
      question: {
        en: 'A student beats a large drum and blows a high-pitched whistle simultaneously. What primarily explains why the whistle sounds so different from the drum?',
        hi: 'एक विद्यार्थी बड़े ड्रम को बजाता है और साथ ही उच्च-तारत्व वाली सीटी बजाता है। सीटी की ध्वनि ड्रम से भिन्न सुनाई देने का मुख्य कारण क्या है?',
      },
      options: {
        en: [
          'Frequency of the sound waves differs between the whistle and drum',
          'Sound speed through room air differs per instrument',
          'Room air transforms into liquid around drum',
          'Both always vibrate at 20 Hz',
        ],
        hi: [
          'प्रत्येक वाद्ययंत्र से उत्पन्न ध्वनि तरंगों की आवृत्ति भिन्न-भिन्न होती है',
          'वायु में ध्वनि चाल हर वाद्य हेतु अलग होती है',
          'ड्रम के पास वायु द्रव बन जाती है',
          'दोनों सदैव 20 Hz पर कंपन करते हैं',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Sharp whistles vibrate at **much higher frequency (`high pitch`)** than booming low-frequency large drums (`while air speed stays fixed`, Sec 10.6.4)!',
        hi: 'सीटी उच्च आवृत्ति (`उच्च तारत्व`) पर व बड़ा ड्रम कम आवृत्ति (`निम्न तारत्व`) पर कंपन करता है, जिससे उनकी ध्वनि भिन्न सुनाई देती है!',
      },
    },
    {
      id: 'pyq-c9p10-17',
      examTag: 'RRB Group D 2025 (09 Aug 2026 Shift 13)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.3): Formation of C and R in Air',
      question: {
        en: 'What forms the alternating compressions and rarefactions in a sound wave travelling through air?',
        hi: 'वायु में गमन करने वाली ध्वनि तरंग में संपीडन (`C`) और विरलन (`R`) का निर्माण कैसे होता है?',
      },
      options: {
        en: [
          'Air particles permanently collide and stick together',
          'Air particles trace circular loops like ocean swells',
          'Particles bunch close together (C) and spread apart (R) alternately while oscillating',
          'Air spacing remains rigid and constant everywhere',
        ],
        hi: [
          'वायु के कण स्थायी रूप से चिपक जाते हैं',
          'कण समुद्र लहर जैसे वृत्ताकार चक्कर लगाते हैं',
          'वायु में मौजूद कण बारी-बारी से पास गुच्छित (`C`) व दूर विरलित (`R`) होते हैं',
          'कण सदैव समान दूरी पर स्थिर रहते हैं',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **NCERT `Fig 10.9` (`p.189`)**: Vibrating sources push air particles together (**Compression**) and pull back creating gaps (**Rarefaction**) along wave direction!',
        hi: 'सटीक `चित्र 10.9`: पिस्टन या कंपमान वस्तु के आगे-पीछे होने से कण क्रमिक रूप से पास (`संपीडन`) व दूर (`विरलन`) होते हैं!',
      },
    },
    {
      id: 'pyq-c9p10-18',
      examTag: 'RRB Group D 2025 (09 Aug 2026 Shift 14)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Wave Frequency Calculation: `ν = v / λ`',
      question: {
        en: 'If a sound wave has a wavelength of `0.5 m` and travels at `250 m/s`, what is its frequency?',
        hi: 'यदि किसी ध्वनि तरंग की तरंगदैर्घ्य `0.5 m` है और वह `250 m/s` की चाल से गमन करती है, तो इसकी आवृत्ति कितनी होगी?',
      },
      options: {
        en: ['125 Hz', '500 Hz', '1000 Hz', '250 Hz'],
        hi: ['125 Hz', '500 Hz', '1000 Hz', '250 Hz'],
      },
      correctIndex: 1,
      solution: {
        en: 'Using `v = λ · ν` ⇒ **`ν = v / λ = 250 / 0.5 = 500 Hz`** (`Eq 10.2`)!',
        hi: 'सूत्र `v = λ·ν` से **`ν = 250 / 0.5 = 500 Hz`**!',
      },
    },
    {
      id: 'pyq-c9p10-19',
      examTag: 'RRB Group D 2025 (10 Aug 2026 Shift 18)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.2.1 / Fig 10.7): Vacuum Bell Jar Proof',
      question: {
        en: 'Why does striking an electric bell inside an evacuated vacuum jar produce NO sound we can hear?',
        hi: 'निर्ववात (`Vacuum`) बेलजार के भीतर विद्युत घंटी बजाने पर हमें ध्वनि सुनाई क्यों नहीं देती?',
      },
      options: {
        en: [
          'Light waves push sound backwards',
          'Hammer stops vibrating completely inside vacuum',
          'Glass blocks electricity from entering battery',
          'Sound is mechanical and requires a material medium to travel to our ears',
        ],
        hi: [
          'प्रकाश ध्वनि को रोक देता है',
          'निर्वात में घंटी कंपन करना बंद कर देती है',
          'काँच विद्युत को रोक लेता है',
          'ध्वनि को हमारे कानों तक संचरण के लिए एक भौतिक माध्यम की आवश्यकता होती है',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `Fig 10.7` (`p.187`)**: Hammer visibly keeps striking bell inside vacuum, proving **sound needs a material medium (`fails in vacuum`)**!',
        hi: 'सटीक `चित्र 10.7`: बेलजार में घंटी बजती दिखती है पर वायु माध्यम न होने से ध्वनि नहीं पहुँचती (`अंतरिक्ष में भी यही नियम`)!',
      },
    },
    {
      id: 'pyq-c9p10-20',
      examTag: 'RRB Group D 2025 (10 Aug 2026 Shift 18)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Act 10.1 / Q7): Tight Membrane Vibrates Faster',
      question: {
        en: 'Why does a tightly stretched drum skin make a higher-pitched sound than a loose drum skin?',
        hi: 'कसकर तानित ड्रम की झिल्ली, ढीली झिल्ली की तुलना में भिन्न (`उच्च तारत्व`) ध्वनि क्यों उत्पन्न करती है?',
      },
      options: {
        en: [
          'A tightly stretched skin is thicker',
          'A tightly stretched skin traps denser carbon dioxide',
          'A tightly stretched drum skin vibrates faster (`higher frequency`) than a loose one',
          'A tightly stretched skin becomes much heavier',
        ],
        hi: [
          'कसी झिल्ली अधिक मोटी हो जाती है',
          'कसी झिल्ली में अधिक हवा भर जाती है',
          'कसकर तानित झिल्ली ढीली की तुलना में अधिक तेजी (`उच्च आवृत्ति`) से कंपन करती है',
          'कसी झिल्ली का द्रव्यमान बढ़ जाता है',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Higher tension boosts restoring force -> membrane **vibrates faster (`higher frequency ν`)**, raising sound pitch (`matching Act 10.1`!)!',
        hi: 'तनाव बढ़ाने पर झिल्ली **अधिक तेजी से कंपन (`उच्च आवृत्ति`)** करती है, जिससे उच्च तारत्व की ध्वनि उत्पन्न होती है!',
      },
    },
    {
      id: 'pyq-c9p10-21',
      examTag: 'RRB Group D 2025 (12 Aug 2026 Shift 24)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Sec 10.7.1): Echo Speed Calculation `v = 2d/t`',
      question: {
        en: 'A student shouts facing a tall building `176 metres` away and hears the echo after `1 second`. What is the speed of sound in air?',
        hi: 'एक विद्यार्थी `176 m` दूर स्थित ऊँची इमारत की ओर चिल्लाता है और `1 सेकंड` बाद प्रतिध्वनि सुनता है। वायु में ध्वनि की चाल कितनी होगी?',
      },
      options: {
        en: ['330 m/s', '400 m/s', '352 m/s', '176 m/s'],
        hi: ['330 m/s', '400 m/s', '352 m/s', '176 m/s'],
      },
      correctIndex: 2,
      solution: {
        en: 'Two-way echo path `2d = 2 × 176 = 352 m`. Speed `v = 2d / t = 352 / 1` = **`352 m/s`** (`remember round trip!`)!',
        hi: 'जाने व आने की कुल दूरी `2d = 2 × 176 = 352 m` ⇒ चाल `v = 352 / 1` = **`352 m/s`**!',
      },
    },
    {
      id: 'pyq-c9p10-22',
      examTag: 'RRB Group D 2025 (14 Aug 2026 Shift 28)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'NCERT Ch 10 (Fig 10.27): Why Humans Can’t Hear Bat Ultrasonic Calls',
      question: {
        en: 'Why can humans NOT hear the echolocation sound emitted by bats?',
        hi: 'मनुष्य चमगादड़ द्वारा उत्पन्न ध्वनि को क्यों नहीं सुन सकते हैं?',
      },
      options: {
        en: [
          'It is too loud for human ears',
          'Frequency of bat ultrasonic pulses exceeds 20,000 Hz (`> 20 kHz`)',
          'Bat sound travels strictly underwater',
          'Bat calls stay below 20 Hz infrasonic range',
        ],
        hi: [
          'मनुष्यों के लिए यह अत्यधिक प्रबल होती है',
          'क्योंकि चमगादड़ की ध्वनियों की आवृत्ति 20,000 Hz (`20 kHz`) से अधिक (`पराश्रव्य`) होती है',
          'यह केवल जल में गमन करती है',
          'आवृत्ति 20 Hz से कम होती है',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `Sec 10.8.1` (`p.202`)**: Bats emit **Ultrasonic (`> 20 kHz`)** cries for echolocation — above human hearing (`20 Hz–20 kHz`).',
        hi: 'सटीक `भाग 10.8.1`: चमगादड़ शिकार हेतु **`> 20,000 Hz` पराश्रव्य (`Ultrasonic`) तरंगें** छोड़ते हैं जो मानव श्रव्य सीमा से बाहर हैं।',
      },
    },
    {
      id: 'pyq-c9p10-23',
      examTag: 'RRB Group D 2025 (18 Aug 2026 Shift 36)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Echo Return Time Numerical `t = 2d/v` (`1.33 s`)',
      question: {
        en: 'A student shouts facing a building `220 m` away (`speed of sound = 330 m/s`). How long after the shout will the echo be heard?',
        hi: 'एक विद्यार्थी `220 m` दूर स्थित इमारत की ओर चिल्लाता है। यदि ध्वनि की चाल `330 m/s` हो, तो कितने समय बाद प्रतिध्वनि सुनाई देगी?',
      },
      options: {
        en: ['0.44 s', '1.33 s', '0.67 s', '2.20 s'],
        hi: ['0.44 s', '1.33 s', '0.67 s', '2.20 s'],
      },
      correctIndex: 1,
      solution: {
        en: 'Round-trip path `2d = 2 × 220 = 440 m` ⇒ `t = 440 / 330 = 4/3` = **`1.33 s`** (`Ex 10.5 concept`)!',
        hi: 'कुल दोहरा पथ `2d = 2 × 220 = 440 m` ⇒ समय `t = 440 / 330` = **`1.33 s`**!',
      },
    },
    {
      id: 'pyq-c9p10-24',
      examTag: 'RRB NTPC UG 2024 (12 Aug 2025 Shift 2) + Group D 45',
      section: 'General Science — Physics',
      subject: 'Physics',
      topic: 'Temperature Rise Effect on Speed & Minimum Echo Distance',
      question: {
        en: 'If the temperature of air increases, what happens to the speed of sound AND the minimum distance needed to hear a clear echo (`0.1 s` rule)?',
        hi: 'यदि वायु का तापमान बढ़ जाता है, तो ध्वनि की चाल और स्पष्ट प्रतिध्वनि सुनने की न्यूनतम दूरी (`0.1 s` नियम) पर क्या प्रभाव पड़ता है?',
      },
      options: {
        en: [
          'Speed decreases, minimum distance increases',
          'Speed increases, minimum distance decreases',
          'Speed increases, minimum distance increases (`both increase!`)',
          'Both decrease together',
        ],
        hi: [
          'चाल घट जाती है, न्यूनतम दूरी बढ़ जाती है',
          'चाल बढ़ जाती है, न्यूनतम दूरी घट जाती है',
          'ध्वनि की चाल बढ़ती है और प्रतिध्वनि की न्यूनतम दूरी भी बढ़ जाती है',
          'दोनों कम हो जाते हैं',
        ],
      },
      correctIndex: 2,
      solution: {
        en: '**Smart Combined Concept (`Sec 10.6.3 + 10.7.1`)**: Warming air increases speed (`e.g. 331 -> 344 m/s`), AND since `d_min = v × 0.1 / 2`, **minimum echo distance increases too (`16.55 m -> 17.2 m`)**!',
        hi: 'ताप बढ़ने से वायु में ध्वनि चाल (`331→344 m/s`) बढ़ती है, और सूत्र `d_min = v×0.1/2` से **न्यूनतम प्रतिध्वनि दूरी भी (`16.55 m→17.2 m`) बढ़ जाती है**!',
      },
    },
  ],
};
export default C9_CH10_SOUND_DATA;
