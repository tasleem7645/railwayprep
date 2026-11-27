/**
 * Class 10 NCERT Science (2026–27 Edition — jhsc112.pdf, Pages 216–229) + Railway CBT Deep-Dive
 * Chapter 12: Magnetic Effects of Electric Current (विद्युत धारा के चुंबकीय प्रभाव) — Gold Standard v3 (75 PYQ Hits!)
 * Complete Coverage: 12.1 Oersted 1820 & Five Magnetic Field Line Laws (`Act 12.1–12.3, Fig 12.4`) ->
 * 12.2 Straight Wire (`Act 12.4–12.5, B ∝ I & B ∝ 1/r`), Right-Hand Thumb / Maxwell Corkscrew Rule (`Ex 12.1`), Circular Loop (`n turns = n×B`), Solenoid (`Uniform inside, Soft Iron Electromagnet`, Fig 12.10–12.11) ->
 * 12.3 Force on Conductor (`Ampère, Act 12.7 Al rod, Max 90°`), Fleming Left-Hand Rule (`Ex 12.2 Electron trap, p.225 Q3 Alpha, Q1 Proton v & p`), Magnetism in Medicine (`MRI Box 10⁻⁹ Earth field`) ->
 * 12.4 Domestic Circuits (`Fig 12.15: 220V, 50Hz, Red Live, Black Neutral, Green Earth, 15A Geyser/Cooler vs 5A Bulb/Fan, Parallel switches, Fuse Joule heat, Short Circuit R≈0 vs Overloading, p.227 Q2 2kW/220V = 9.09A`).
 * All 7 Activities (`12.1–12.7`), 13 In-Text Qs, 9 Solved Exercises verified vs jhsc1an (`1.d, 2.c, 3.a True / b False, 6. Downward, 7. RHT / Fleming LH`), 24 Pure RRB PYQs.
 */

export const C10_CH12_MAGNET_DATA = {
  id: 'c10-phy-ch12',
  classId: 'class10',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 12,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 12: Magnetic Effects of Electric Current (CBT Edition)',
  blueprintSvgKey: 'c10-ch12-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Magnetic Field Lines (`Outside N→S, Inside S→N, Closeness, Never Cross`) & Oersted', hi: 'चुंबकीय क्षेत्र रेखा गुण (`बाहर N→S, भीतर S→N, सघनता, अप्रतिच्छेदी`) व ऑर्स्टेड' }, pct: 24 },
    { label: { en: 'Straight Wire (`B ∝ I, 1/r`), Right-Hand Thumb Rule, Circular Loop (`nB`) & Solenoid (`Soft Iron`)', hi: 'सीधा तार, दक्षिण-हस्त नियम, वृत्ताकार पाश (`nB`) व परिनालिका (`एकसमान / विद्युत-चुंबक`)' }, pct: 34 },
    { label: { en: 'Force on Conductor (`90° Max, Act 12.7`), Fleming Left-Hand Rule (`Electron/Alpha`) & MRI', hi: 'चालक पर बल (`90° अधिकतम`), फ्लेमिंग वामहस्त नियम (`इलेक्ट्रॉन/अल्फा अपवाद`) व MRI' }, pct: 24 },
    { label: { en: 'Domestic Circuits (`220 V, 50 Hz`), Red/Black/Green Wires, `15A/5A` Parallel & Fuse / Short Circuit', hi: 'घरेलू परिपथ (`220 V, 50 Hz`), लाल/काला/हरा तार, `15A/5A` समानांतर व फ्यूज/लघुपथन' }, pct: 18 },
  ],
  title: {
    en: 'Chapter 12: Magnetic Effects of Electric Current',
    hi: 'अध्याय 12: विद्युत धारा के चुंबकीय प्रभाव',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Oersted, Field Curves, Right-Hand Thumb, Solenoid, Fleming Left-Hand & 220V Domestic Safety',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • ऑर्स्टेड 1820, बंद क्षेत्र वक्र, दक्षिण-हस्त नियम, परिनालिका, फ्लेमिंग वामहस्त व घरेलू AC परिपथ',
  },
  metrics: {
    pages: 14,
    activities: 7,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 9,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-phy-ch12/hero-magnetism.webp',
    caption: {
      en: 'Electromagnetism Bench: Bar Magnet Closed Curves (`Fig 12.4`), Wire Coil Solenoid with Soft-Iron Core (`Fig 12.10–12.11`), Compass Deflection (`Act 12.1`) & Horseshoe Magnet Setup (`Act 12.7`).',
      hi: 'विद्युत-चुंबकत्व प्रयोगशाला: छड़ चुंबक बंद क्षेत्र वक्र (`चित्र 12.4`), नर्म लौह क्रोड परिनालिका (`चित्र 12.10–12.11`), दिक्सूची विक्षेपण (`क्र. 12.1`) एवं नाल चुंबक (`क्र. 12.7`)।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Oersted (1820) & Magnetic Field Lines (`12.1`)**: Electric current creates a magnetic field (**unit of field strength: `oersted`**). Field lines are **continuous closed curves**: **North → South OUTSIDE**, **South → North INSIDE**. **Closeness (`crowding`) = stronger field**. Two field lines **NEVER intersect** (`otherwise a compass would point two directions simultaneously!`).',
      hi: '**ऑर्स्टेड (1820) व क्षेत्र रेखाएँ (`12.1`)**: विद्युत धारा से चुंबकीय क्षेत्र बनता है (**तीव्रता मात्रक: ऑर्स्टेड**)। क्षेत्र रेखाएँ **बंद वक्र** हैं — **बाहर `N → S`**, पर **भीतर `S → N`** (`Tech Shift 6`)! **निकटता = प्रबल क्षेत्र**; दो रेखाएँ **कभी नहीं कटतीं** (`वरना दिक्सूची एकसाथ दो दिशा बताती!`)।',
    },
    {
      en: '**Wire, Thumb Rule, Loop & Solenoid (`12.2`)**: **Straight wire** creates **concentric circles centred on the wire (`Ex Q1d`)**: **B ∝ I** and **B ∝ 1/r**. Direction = **Right-Hand Thumb Rule (`Maxwell’s Corkscrew`)**. **`n`-turn Loop**: field **`n` times stronger** (`straight at centre`). **Long Solenoid**: acts like a **Bar Magnet**; lines **INSIDE are PARALLEL & STRAIGHT (`uniform / SAME at all points`, p.223 Q3d)**. Placing **Soft Iron inside** makes an **Electromagnet**!',
      hi: '**सीधा तार, पाश व परिनालिका (`12.2`)**: **सीधे तार** के चारों ओर **संकेंद्री वृत्त (`केंद्र पर तार`, अभ्यास Q1d)**: धारा ↑ तो क्षेत्र ↑ (`B ∝ I`), दूरी ↑ तो क्षेत्र ↓ (`B ∝ 1/r`)। दिशा = **दक्षिण-हस्त अंगुष्ठ / कॉर्कस्क्रू नियम**। **`n` फेरे = `n` गुना क्षेत्र**। **परिनालिका के भीतर क्षेत्र रेखाएँ समांतर सरल → सभी बिंदुओं पर एकसमान (`पृ.223 Q3d`)**; भीतर **नर्म लोहा** रखने पर **विद्युत चुंबक**!',
    },
    {
      en: '**Force & Fleming’s Left-Hand Rule (`12.3`)**: Current-carrying wire in **B** feels **PEAK force when `I ⊥ B` (`90°`, Act 12.7)**! **Left Hand (`F-B-I`)**: **Thumb = Force (`Motion`)**, **Forefinger = Magnetic Field (`B`)**, **Middle = Current (`I`)**. **TRAP**: Electron (`-ve`) moves opposite to conventional current (**Ex 12.2**)! Freely moving proton changes **Velocity & Momentum (`NOT mass or speed!`)**. **MRI**: medical imaging using internal bio-currents (**`~10⁻⁹` Earth’s magnetic field**, **heart & brain**).',
      hi: '**चालक पर बल व फ्लेमिंग वामहस्त नियम (`12.3`)**: अधिकतम बल तब जब धारा व क्षेत्र **परस्पर `90°` लंबवत हों (`क्र. 12.7`)**! **बायाँ हाथ (`F-B-I`)**: **अँगूठा = बल (`F`), तर्जनी = क्षेत्र (`B`), मध्यमा = धारा (`I`)**। **सावधानी (`उदा. 12.2`)**: इलेक्ट्रॉन की गति के **विपरीत** धारा लें! स्वतंत्र प्रोटॉन के **वेग व संवेग** बदलते हैं (`चाल नहीं`)। **MRI**: **हृदय व मस्तिष्क** के अति-दुर्बल क्षेत्र (**पृथ्वी क्षेत्र का एक अरबवाँ भाग**)।',
    },
    {
      en: '**Domestic Circuits (`12.4`, Fig 12.15)**: **India mains: `220 V` AC, `50 Hz`**. **Red = Live (`+ve`)**, **Black = Neutral (`-ve`)**, **Green = Earth wire** (`deep buried metal plate giving low-R shock safety to metallic iron/toaster/fridge bodies`). Two circuits: **`15 A` (`geyser/air cooler`)** & **`5 A` (`bulbs/fans`)**, wired in **Parallel** (`same voltage + own switch`). **Short Circuit**: Live & Neutral touch (`R→0`, huge current surge); **Fuse**: **Joule heating** melts wire!',
      hi: '**घरेलू विद्युत परिपथ (`12.4`, चित्र 12.15)**: भारत में **`220 V` AC, `50 Hz`**! तार रंग: **लाल = विद्युन्मय (`Live`), काला = उदासीन (`Neutral`), हरा = भूसंपर्क (`Earth` — धातु आवरण उपकरणों से शॉक बचाव)**। दो परिपथ: **`15 A` (`गीज़र, कूलर`)** व **`5 A` (`बल्ब, पंखा`)**, परस्पर **पार्श्वक्रम (`Parallel`)** में। **लघुपथन**: लाल+काला संपर्क → **अकस्मात अति उच्च धारा**; **फ्यूज जूल तापन से पिघल बचाए**!',
    },
  ],
  sections: [
    {
      id: 'oersted-field-lines-laws',
      number: '12.1',
      flowDiagramKey: 'c10-ch12-blueprint-mindmap',
      title: {
        en: 'Oersted’s 1820 Discovery, Compass Deflection (`Act 12.1`) & Five Laws of Magnetic Field Lines (`Act 12.2–12.3`, Fig 12.4)',
        hi: 'ऑर्स्टेड 1820 की खोज, दिक्सूची विक्षेप (`क्र. 12.1`) एवं चुंबकीय क्षेत्र रेखाओं के सभी 5 नियम (`चित्र 12.4`)',
      },
      summaryTag: {
        en: 'NCERT Pages 216–218 • Hans Christian Oersted Box, Iron Filings Activity 12.2, Closed Loops & No-Intersection Proof',
        hi: 'NCERT पृ. 216–218 • ऑर्स्टेड (मात्रक ऑर्स्टेड), लौहचूर्ण क्र. 12.2, बाहर N→S / भीतर S→N बंद वक्र व प्रतिच्छेद निषेध',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Electricity & Magnetism Linked (Oersted 1820) + Compass Needle Behaviour (`Sec 12.1`, Act 12.1–12.3)',
            hi: '1. विद्युत और चुंबकत्व का संबंध (`ऑर्स्टेड 1820`) + छड़ चुंबक के चारों ओर चुंबकीय क्षेत्र (`क्र. 12.1–12.3`)',
          },
          conceptStory: {
            en: 'Until 1820, electricity and magnetism seemed completely separate forces. In **1820**, Danish physicist **==Hans Christian Oersted (1777–1851)==** noticed that flowing electric current through a metallic copper wire deflected a nearby magnetic compass needle (`Activity 12.1`, launching radio, TV & fiber-optics — **magnetic field intensity unit = `oersted`**!). Conversely (`remember this link!`), moving magnets also generate electric effects.\n• **What is a Compass Needle?** Just a **tiny pivoted bar magnet** (`p.217`): its North-seeking end = **North pole**, South-seeking end = **South pole**; **==like poles repel, unlike poles attract==** (`so bringing another magnet near exerts torque/deflection — In-Text p.218 Q1`).\n• **Activity 12.2 (`Iron Filings`) & Activity 12.3 (`Compass Plotting`)**: Sprinkling iron filings around a bar magnet (`salt-sprinkler`) and tapping gently aligns them along smooth curved paths = **==Magnetic Field (`where magnet’s force is detectable`, Fig 12.4)==**! Note: **Magnetic field has BOTH magnitude and direction (`Vector quantity!`)**.',
            hi: 'सन् **1820** में डेनमार्क के वैज्ञानिक **==हैंस क्रिश्चियन ऑर्स्टेड (`1777–1851`)==** ने प्रयोग के दौरान आकस्मिक देखा कि धातु के तार में विद्युत धारा प्रवाहित करते ही पास रखी **दिक्सूची (`Compass`) विक्षेपित** हो जाती है (`क्रियाकलाप 12.1`) — उन्हीं के सम्मान में **चुंबकीय क्षेत्र की तीव्रता का मात्रक `ऑर्स्टेड` रखा गया**!\n• **दिक्सूची क्या है?** वास्तव में यह एक **छोटा छड़ चुंबक** ही होती है जिसका उत्तर-संकेती सिरा **उत्तर ध्रुव (`N`)** व दक्षिण-संकेती सिरा **दक्षिण ध्रुव (`S`)** कहलाता है। **सजातीय ध्रुवों में प्रतिकर्षण** व **विजातीय ध्रुवों में आकर्षण** होता है (`यही पृ. 218 Q1 का कारण है!`)।\n• **चुंबकीय क्षेत्र (`क्र. 12.2 व 12.3`)**: छड़ चुंबक पर सफ़ेद कागज़ व **लौहचूर्ण (`नमक-छितरावक`)** डाल थपथपाने पर चूर्ण वक्राकार रेखाओं में सज जाता है — यह क्षेत्र चुंबकीय बल के प्रभाव को दिखाता है। **चुंबकीय क्षेत्र एक सदिश (`परिमाण + दिशा दोनों`) राशि है!**',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch12/real/iron-filings-bar-magnet.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch12/real/magnetic-compass-deflection.webp',
            title: { en: 'Real Lab Bench (`Act 12.1–12.3`): Iron Filings Clustering Along Field Lines & Brass Magnetic Compass', hi: 'प्रयोगशाला दर्शन (`क्र. 12.1–12.3`): ध्रुव पर सघन लौहचूर्ण पैटर्न व दिक्सूचक सुई (`छोटा छड़ चुंबक`)' },
            caption: {
              en: 'Left (`Act 12.2`): Fine iron filings spike along dense field lines crowding tightly at a magnet pole (`peak strength`). Right (`Act 12.1/12.3`): Compass needle North tip tracks exact local magnetic field direction.',
              hi: 'बायाँ (`क्र. 12.2`): चुंबक के ध्रुव के निकट सघनतम क्षेत्र रेखाओं के अनुदिश व्यवस्थित लौहचूर्ण। दायाँ: दिक्सूची का उत्तर ध्रुव किसी बिंदु पर चुंबकीय क्षेत्र की दिशा इंगित करता है।',
            },
          },
          inlinePyqIds: ['pyq-p12-1', 'pyq-p12-2', 'pyq-p12-21', 'pyq-p12-22'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Five Non-Negotiable NCERT Properties of Magnetic Field Lines (`TOP Repeated Railway Questions!`)',
            hi: '2. चुंबकीय क्षेत्र रेखाओं के 5 अचूक NCERT नियम (`सीधे RRB ALP / Group D / Tech 2024–26 प्रश्न!`)',
          },
          conceptStory: {
            en: 'Memorize every single clause from **NCERT Page 218** (`appears word-for-word in Tech 2024 Shifts 6, 7, 14 & ALP Shifts 2, 3!`):\n1) **Direction Definition**: Field direction is defined as the direction a hypothetical **free North pole (`or compass North tip`)** moves/points.\n2) **==Outside Magnet: N → S | Inside Magnet: S → N (`NEVER miss inside!`)==**: By convention, field lines **emerge from North pole and merge at South pole** outside (`Fig 12.4`), while **INSIDE the magnet they run strictly South → North (`S→N`, Tech Shift 6 & 14 PYQ!)**.\n3) **==Closed Continuous Curves==**: Because they loop inside from S back to N without open ends, **magnetic field lines are ALWAYS closed curves (`explaining why isolated magnetic monopoles don’t exist` — Group D Shift 47!)**.\n4) **==Degree of Closeness (`Crowding`) indicates Field Strength==**: Closer/denser lines (`especially near poles`) mean a **stronger magnetic field (`greater force on another pole`)** (`ALP Shift 2 / NTPC Shift 52`). **Uniform field** (`inside solenoid`) = **parallel & equidistant straight lines (`Tech Shift 1 & Shift 7`)**!\n5) **==Two Field Lines NEVER Cross Each Other==**: Why? If two field lines intersected at any point, a compass placed at that intersection would have to **point toward TWO directions simultaneously**, which is physically impossible (`ALP Shift 3 & In-Text p.222 Q3`)!',
            hi: '**NCERT पृष्ठ 218** के ये 5 बिंदु सीधे RRB परीक्षाओं में पूछे जाते हैं (`Tech Shifts 6, 7, 14 व ALP Shifts 2, 3`):\n1) **दिशा परिभाषा**: क्षेत्र के भीतर किसी बिंदु पर **दिक्सूची का उत्तर ध्रुव (`N`)** जिधर संकेत करे, वही चुंबकीय क्षेत्र की दिशा है।\n2) **==बाहर `N → S`, पर भीतर `S → N` (`पक्का PYQ!`)==**: परिपाटी से चुंबक के **बाहर रेखाएँ उत्तर (`N`) से प्रकट होकर दक्षिण (`S`) में विलीन होती हैं**, परंतु **==चुंबक के भीतर इनकी दिशा दक्षिण (`S`) से उत्तर (`N`) की ओर होती है==** (`Tech Shift 6`)!\n3) **==सतत बंद वक्र (`Closed Curves`)==**: भीतर लौटने से **चुंबकीय क्षेत्र रेखाएँ सदैव बंद वक्र होती हैं** (`अतः एकाकी चुंबकीय एकल ध्रुव संभव नहीं — Group D Shift 47`)।\n4) **==निकटता की कोटि (`Closeness`) → क्षेत्र प्रबलता==**: जहाँ रेखाएँ अधिक सघन (`ध्रुवों के पास`) वहाँ क्षेत्र अधिक प्रबल; तथा **समांतर समदूरस्थ सरल रेखाएँ = एकसमान (`शून्य नहीं!`) चुंबकीय क्षेत्र** (`Tech Shift 7 अपवाद`)!\n5) **==दो क्षेत्र रेखाएँ कभी प्रतिच्छेद नहीं करतीं==**: यदि वे कटतीं, तो प्रतिच्छेद बिंदु पर रखी दिक्सूची की सुई को **एकसाथ दो दिशाओं की ओर संकेत करना पड़ता — जो असंभव है (`ALP Shift 3`)**!',
          },
          viralTrick: {
            en: '**Loop Memory Hook**: Think **“OuNS – InSN” (`Outside N→S, Inside S→N`)**! Closed circle never breaks (`NO monopoles`) and **parallel-equidistant = UNIFORM (`NOT zero`, Tech Shift 7 trap!)**!',
            hi: '**शॉर्टकट “बाहर NS – भीतर SN”** (`बाहर उत्तर से दक्षिण, चुंबक के भीतर दक्षिण से उत्तर`) + **समांतर समदूरस्थ रेखाएँ = एकसमान क्षेत्र** (`शून्य क्षेत्र गलत कथन है — Tech Shift 7!`)।',
          },
          inlinePyqIds: ['pyq-p12-16', 'pyq-p12-23'],
        },
      ],
    },
    {
      id: 'straight-thumb-loop-solenoid',
      number: '12.2–12.2.4',
      flowDiagramKey: 'c10-ch12-bar-straight-thumb-diagram',
      diagramKey: 'c10-ch12-loop-solenoid-fleming-diagram',
      title: {
        en: 'Straight Wire (`B ∝ I, 1/r`), Right-Hand Thumb & Corkscrew (`Ex 12.1`), Circular Loop (`n Turns`) & Solenoid / Soft-Iron Electromagnet',
        hi: 'सीधा चालक (`B ∝ I, 1/r`), दक्षिण-हस्त नियम (`उदा. 12.1`), वृत्ताकार पाश (`n फेरे`) व परिनालिका / नर्म लोहा विद्युत-चुंबक',
      },
      summaryTag: {
        en: 'NCERT Pages 218–223 • Activities 12.4–12.6, Fig 12.5–12.11, Solved Ex 12.1 & p.223 Q3 Solenoid Uniformity',
        hi: 'NCERT पृ. 218–223 • क्र. 12.4–12.6, चित्र 12.5–12.11, उदा. 12.1 (पूर्व→पश्चिम) व परिनालिका विद्युत चुंबक',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Straight Conductor (`Act 12.4–12.5`): Concentric Circles, Proportionality Laws (`I & 1/r`) & Right-Hand Thumb Rule (`Ex 12.1`)',
            hi: '1. सीधे धारावाही चालक (`क्र. 12.4–12.5`) के संकेंद्री वृत्त (`B ∝ I व 1/r`) एवं दक्षिण-हस्त अंगुष्ठ / कॉर्कस्क्रू नियम (`उदा. 12.1`)',
          },
          conceptStory: {
            en: 'First (`Activity 12.4`, Fig 12.5): place a copper wire directly over a compass (`parallel to needle`). When current flows **North → South**, compass North pole deflects **East** (`reversing cells S → N flips needle **West**!` — proving current reversal **reverses magnetic field direction**, `Group D Shifts 18 & 21`).\n• **Straight Wire Pattern (`Activity 12.5`, Fig 12.6)**: Vertical `12 V` wire through cardboard + iron filings -> aligns into **==concentric circles centred at the wire (`NCERT Ex Q1d`)==**, lying in planes **perpendicular to wire (`Tech Shift 19`)**!\n  - **Two Fundamental Laws (`p.220`)**: **(i) `B ∝ I`** (`increasing current increases compass deflection`) and **(ii) `B ∝ 1/r`** (`moving compass farther Q weakens deflection & circles widen` — `Group D Shift 27`).\n• **==Right-Hand Thumb Rule (`12.2.2`, Fig 12.7)==** (`also called **Maxwell’s Corkscrew Rule**`): Imagine holding current-carrying straight conductor in your **right hand** so **==Thumb points along Current (`I`)==**, then **==curled Fingers wrap in Magnetic Field direction (`B`)==** (`Tech Shift 8`).\n  - **NCERT Solved Example 12.1 (`p.221`)**: Horizontal power line has current **East → West**. Looking from **East end**: field direction (`above or below wire`) is **Clockwise (`दक्षिणावर्त`)**; looking from **West end**: **Anti-clockwise (`वामावर्त`)**!',
            hi: '**क्रियाकलाप 12.4 (`चित्र 12.5`)**: दिक्सूची के ऊपर समांतर तार में यदि धारा **उत्तर → दक्षिण (`N→S`)** बहे, तो सुई का उत्तर ध्रुव **पूर्व (`East`)** मुड़ता है; सेल उलट कर धारा **दक्षिण → उत्तर (`S→N`)** करने पर विक्षेप **पश्चिम (`West`)** हो जाता है — अर्थात **धारा दिशा पलटने पर चुंबकीय क्षेत्र दिशा उत्क्रमित होती है (`Shift 18, 21`)**!\n• **सीधे तार का पैटर्न (`क्र. 12.5`, चित्र 12.6)**: कार्डबोर्ड के लंबवत धारावाही तार पर लौहचूर्ण **तार के केंद्र वाले संकेंद्री वृत्त (`अभ्यास Q1d`)** बनाता है जो **तार के तल के लंबवत (`Tech Shift 19`)** होते हैं:\n  - **(i) धारा बढ़ने (`I ↑`) पर विक्षेप बढ़ता है (`B ∝ I`)**;\n  - **(ii) चालक से दूरी बढ़ने (`r ↑`) पर क्षेत्र घटता है (`B ∝ 1/r` — वृत्त बड़े होते जाते हैं)**!\n• **==दक्षिण-हस्त अंगुष्ठ नियम (`चित्र 12.7`) / मैक्सवेल का कॉर्कस्क्रू नियम (`12.2.2`)==**: दाएँ हाथ से तार को इस प्रकार पकड़ें कि **==अँगूठा विद्युत धारा (`I`) की दिशा में==** हो, तो **==लिपटी अँगुलियाँ चुंबकीय क्षेत्र (`B`) की दिशा==** बताती हैं (`Tech Shift 8`)। **उदाहरण 12.1 (`पृ. 221`)**: पूर्व से पश्चिम जाती क्षैतिज पावर लाइन में **पूर्वी सिरे से देखने पर क्षेत्र दक्षिणावर्त (`Clockwise`)** व पश्चिमी सिरे से वामावर्त होता है!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch12/real/solenoid-nail-electromagnet.webp',
            title: { en: 'Real Working Solenoid + Iron Core Electromagnet (`Fig 12.11`): 9V DC Coil Lifting Steel Nails', hi: 'असली विद्युत चुंबक (`चित्र 12.11`): परिनालिका कुंडली + लौह क्रोड (बैटरी से धारा प्रवाहित होते ही कीलें आकर्षित!)' },
            caption: {
              en: 'Closely wound insulated wire turns act as a cylindrical solenoid; placing a ferromagnetic iron nail inside concentrates strong uniform internal field lines to create a powerful temporary Electromagnet (`Sec 12.2.4`).',
              hi: 'विद्युतरोधी तार की बेलनाकार कुंडली (`परिनालिका`) में लोहे की छड़ रखने पर भीतर प्रबल एकसमान क्षेत्र बन कर चुंबकीय कीलों को खींच लेता है (`विद्युत चुंबक`)।',
            },
          },
          inlinePyqIds: ['pyq-p12-3', 'pyq-p12-4', 'pyq-p12-6', 'pyq-p12-7', 'pyq-p12-10', 'pyq-p12-12', 'pyq-p12-20'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Circular Loop (`n Turns = n×B`) & Solenoid (`Fig 12.10–12.11`, Uniform Field Inside + Soft Iron Core)',
            hi: '2. वृत्ताकार पाश (`n फेरे = nB`), परिनालिका (`भीतर एकसमान समांतर क्षेत्र`) एवं नर्म लोहे का विद्युत चुंबक (`12.2.3–12.2.4`)',
          },
          conceptStory: {
            en: 'Bend that straight wire into a circle (`12.2.3`, **Fig 12.8 & Act 12.6**): every wire point forms wider arcs approaching the **loop centre where field lines appear almost STRAIGHT**, all pointing in the **SAME direction inside the ring**. Since every turn carries identical current direction, **`n` circular turns produce `n × B` (`n` times stronger field — Tech 2024 Shift 13 PYQ: 10 turns = `10B`!)**.\n• **Solenoid (`परिनालिका`, 12.2.4, Fig 12.10)**: A coil of many circular turns of insulated copper wire wrapped closely in the shape of a **cylinder** (`pass-pass lipti belnakar kundali`).\n  1) Outside field pattern matches a **Bar Magnet** (`one end North pole, other South pole — Tech Shifts 15, 16`).\n  2) **==Inside a long current-carrying solenoid: field lines are PARALLEL STRAIGHT LINES → Field is UNIFORM & SAME AT ALL POINTS (`p.223 Q3d`, Tech Shifts 10, 11, 12 & `Ex 3a True`)==** (`stronger inside than outside!`, `Tech Shift 1 trap`).\n  3) **==Electromagnet (`Fig 12.11`)==**: Placing a piece of magnetic material like **==Soft Iron (`नर्म लोहा`, Text p.223 & Summary p.228)==** inside the solenoid magnetises it into a strong electromagnet (`increasing internal magnetic field` — `Tech Shift 12`). *(Exam nuance: NCERT Fig 12.11 caption prints “steel rod”, yet main text Sec 12.2.4 & What You Have Learnt p.228 explicitly specify Soft Iron!)*',
            hi: 'सीधे तार को मोड़कर **वृत्ताकार पाश (`12.2.3`, चित्र 12.8, क्र. 12.6)** बनाने पर **पाश के केंद्र पर क्षेत्र रेखाएँ सरल रेखा जैसी** हो जाती हैं व भीतर सभी हिस्से की रेखाएँ एक ही दिशा में जुड़ती हैं। यदि कुंडली में **`n` फेरे** हों, तो चुंबकीय क्षेत्र एकल फेरे का **`n` गुना (`10 फेरे → 10B`, Tech Shift 13 PYQ)** हो जाता है!\n• **परिनालिका (`Solenoid`, 12.2.4, चित्र 12.10)**: पास-पास लिपटे विद्युतरोधी ताँबे के तार की **बेलनाकार अनेक फेरों वाली कुंडली**:\n  1) इसका बाहरी पैटर्न **छड़ चुंबक के समान** (`एक सिरा N, दूसरा S`) होता है (`अतः बंद वक्र बनाती है`)।\n  2) **==परिनालिका के भीतर क्षेत्र रेखाएँ समांतर सरल रेखाएँ होती हैं → अर्थात भीतर सभी बिंदुओं पर प्रबल व एकसमान चुंबकीय क्षेत्र (`पृ. 223 Q3d`, `Tech Shifts 10, 11, 12`, `अभ्यास 3a सत्य`)==**!\n  3) **==विद्युत चुंबक (`चित्र 12.11`)==**: परिनालिका के भीतर **नर्म लौह-क्रोड (`Soft Iron`)** रखने पर भीतर चुंबकीय क्षेत्र अत्यधिक बढ़ जाता है (`Tech Shift 12`) व प्रबल अस्थायी **विद्युत चुंबक** बनता है! *(नोट: NCERT पाठ 12.2.4 व सारांश पृ. 228 में **नर्म लोहा** लिखा है; चित्र 12.11 कैप्शन में स्टील छपा है।)*',
          },
          inlinePyqIds: ['pyq-p12-5', 'pyq-p12-11', 'pyq-p12-14', 'pyq-p12-18', 'pyq-p12-19'],
        },
      ],
    },
    {
      id: 'force-fleming-electron-mri',
      number: '12.3',
      svgLab: 'magnetic-effects-domestic-lab',
      title: {
        en: 'Force on Current Conductor (`Ampère, Act 12.7`), Fleming’s Left-Hand Rule, Electron & Alpha Traps (`Ex 12.2`) + MRI Box',
        hi: 'चुंबकीय क्षेत्र में चालक पर बल (`एम्पियर, क्र. 12.7`), फ्लेमिंग वामहस्त नियम, इलेक्ट्रॉन/प्रोटॉन अपवाद (`उदा. 12.2`) व MRI',
      },
      summaryTag: {
        en: 'NCERT Pages 223–225 • Al Rod Peak Displacement at 90°, Ex 12.2 Electron, p.225 Q1 Proton & Bio-Magnetism MRI Box',
        hi: 'NCERT पृ. 223–225 • Al छड़ क्र. 12.7, 90° पर अधिकतम बल, उदा. 12.2 इलेक्ट्रॉन, प्रोटॉन Q1 व चिकित्सा में चुंबकत्व (MRI)',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Ampère’s Equal-Opposite Force & Activity 12.7 (`Al Rod Displaced Maximum at 90°`) + Fleming’s Left-Hand Rule (`Fig 12.13`)',
            hi: '1. एम्पियर सिद्धांत, एल्युमिनियम छड़ प्रयोग (`क्र. 12.7`, 90° पर अधिकतम) एवं फ्लेमिंग का वामहस्त नियम (`चित्र 12.13`)',
          },
          conceptStory: {
            en: 'French scientist **André-Marie Ampère (1775–1836)** reasoned that just as a current wire exerts force on a magnet, a magnet must exert an **equal & opposite force** on a current conductor! In **Activity 12.7 (`Fig 12.12`)**: a horizontal `5 cm` Aluminium rod `AB` sits between horseshoe magnet poles (`N bottom, S top -> B upwards`). Passing current `B → A` pushes rod **left**; reversing current flips force **right**; flipping poles (`B downwards`) also reverses force!\n• **When is Force MAXIMUM?** Displacement (`force magnitude`) is **==MAXIMUM when Current & Magnetic Field are at RIGHT ANGLES (`90°`, `Tech 2024 Shift 22 & Ex Q5`)==**, grows when current (`I`), field (`B`) or rod length (`L`) increases (`p.225 Q2`), and is **ZERO when parallel (`0°`)**.\n• **==Fleming’s Left-Hand Rule (`12.3`, Fig 12.13)==**: Stretch Left Hand thumb, forefinger & middle finger mutually **perpendicular (`90°`)**:\n  - **Forefinger (`तर्जनी`)** -> **Magnetic Field (`B`)** (`Group D Shift 31`)\n  - **Middle finger (`मध्यमा`)** -> **Current (`I`)**\n  - **Thumb (`अँगूठा`)** -> **Force / Motion of conductor (`F`)**\n• **Exam Devices (`p.224`)**: Electric motor, generator, loudspeaker, microphone & electrical measuring instruments!',
            hi: 'फ्रांसीसी वैज्ञानिक **आंद्रे मेरी एम्पियर (`1775–1836`)** ने सिद्ध किया कि चुंबक भी धारावाही चालक पर परिमाण में समान पर दिशा में विपरीत बल लगाता है। **क्रियाकलाप 12.7 (`चित्र 12.12`)**: नाल चुंबक (`N नीचे, S ऊपर → क्षेत्र उपरिमुखी`) के मध्य लटकी `5 cm` एल्युमिनियम छड़ `AB` में `B → A` धारा पर छड़ **बाएँ विस्थापित** होती है; **धारा या चुंबकीय ध्रुव पलटने पर बल की दिशा तुरंत उलट जाती है (`Group D Shifts 28, 46`)**!\n• **बल कब अधिकतम?** बल **अधिकतम तब होता है जब धारा व चुंबकीय क्षेत्र परस्पर लंबवत (`90°`) हों (`Tech Shift 22, अभ्यास Q5`)**; तथा धारा (`I`), चुंबकीय प्रबलता (`B`) व छड़ की लंबाई (`L`) बढ़ाने पर बल बढ़ता है (`पृ. 225 Q2`, `Group D Shift 7: धारा 2× तो बल 2×`)।\n• **==फ्लेमिंग का वामहस्त (बायाँ हाथ) नियम (`चित्र 12.13`)==**: बाएँ हाथ की **तर्जनी, मध्यमा व अँगूठे** को परस्पर `90°` लंबवत फैलाएँ:\n  - **तर्जनी (`Forefinger`)** → **चुंबकीय क्षेत्र (`B`)** (`Group D Shift 31`)\n  - **मध्यमा (`Middle`)** → **विद्युत धारा (`I`)**\n  - **अँगूठा (`Thumb`)** → **बल / गति (`F`)**!\n• **आधारित युक्तियाँ**: विद्युत मोटर, जनित्र, ध्वनि विस्तारक यंत्र (लाउडस्पीकर), माइक्रोफ़ोन व मापक यंत्र (`पृ. 224`)।',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch12/real/hans-christian-oersted.webp',
            title: { en: 'Archival Pioneer Portrait: Hans Christian Oersted (1777–1851 — Discovered Current-Compass Link in 1820)', hi: 'ऐतिहासिक वैज्ञानिक: हैंस क्रिश्चियन ऑर्स्टेड (`1777–1851` — 1820 में विद्युत-चुंबकत्व खोजकर्ता)' },
            caption: {
              en: 'Contemporary oil portrait by C.A. Jensen (Statens Museum for Kunst): Oersted’s 1820 lecture discovery unified electricity & magnetism and gave his name to the unit "oersted" (NCERT p.216).',
              hi: 'C.A. जेन्सन द्वारा निर्मित चित्र: 1820 में ऑर्स्टेड ने धारा से दिक्सूची विक्षेपण सिद्ध किया; उन्हीं के नाम पर चुंबकीय क्षेत्र तीव्रता का मात्रक "ऑर्स्टेड" पड़ा (`पृ. 216`)।',
            },
          },
          inlinePyqIds: ['pyq-p12-8', 'pyq-p12-9', 'pyq-p12-15', 'pyq-p12-17'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. High-Trap Negative Electron Rule (`Ex 12.2` vs `Proton / Alpha`) & Magnetism in Medicine (`MRI`, p.225 Box)',
            hi: '2. परीक्षा का सबसे खतरनाक जाल: इलेक्ट्रॉन (`उदा. 12.2`) बनाम प्रोटॉन/अल्फा व चिकित्सा में चुंबकत्व (`MRI बॉक्स`)',
          },
          conceptStory: {
            en: 'Watch out for **Three High-Yield Exam Traps** on **NCERT Pages 224–225**:\n1) **==NCERT Solved Example 12.2 (`Negative Electron` — Fig 12.14)==**: Electron enters rightwards/perpendicular to horizontal magnetic field (`→`): remember **CONVENTIONAL CURRENT flows OPPOSITE to negative electron motion** (`opposite e⁻ velocity`), whereas for a **positive Alpha-particle or Proton (`p.225 Q3`, Ex Q6)** current matches particle direction! Apply Left-Hand Rule using current direction (`NOT velocity directly for electrons`): **Ex 12.2 (`Electron`) -> force acts `(d) INTO the page`** (`Group D Shift 39 also!`); **Ex Q6 (`Electron back wall → front wall deflected RIGHT`)**: I flows front→back, Thumb Force right -> Magnetic Field points **Vertically DOWNWARDS**!\n2) **==NCERT `p.225 Q1` Proton Moving Freely in `B`==**: Magnetic force always acts **perpendicular (`90°`) to velocity**, so it changes **DIRECTION** — therefore **==Velocity (`c`) and Momentum (`d`) change==**, while **Mass & Speed (`kinetic energy`) stay UNCHANGED**!\n3) **==Magnetism in Medicine Box (`p.225`)==**: Weak ionic currents along human nerve cells create tiny magnetic fields (**`one-billionth / 10⁻⁹` of Earth’s magnetic field!**); two main organs producing significant bio-magnetic fields are **==HEART (`हृदय`) and BRAIN (`मस्तिष्क`)==** — forming the basis of **==MRI (`Magnetic Resonance Imaging / चुंबकीय अनुनाद प्रतिबिंबन`)==**!',
            hi: '**NCERT पृष्ठ 224–225** के तीन अत्यंत महत्वपूर्ण परीक्षा जाल:\n1) **==उदाहरण 12.2 (`इलेक्ट्रॉन` का ऋणावेश नियम)==**: **विद्युत धारा (`I`) की दिशा सदैव ऋणावेशित इलेक्ट्रॉन की गति के विपरीत ली जाती है** (पर धनावेशित **प्रोटॉन व अल्फा कण** में गति व धारा की दिशा समान रहती है!)। **उदा. 12.2** में बल **कागज़ में भीतर की ओर (`उत्तर d`)**, **पृ. 225 Q3 (`α-कण पश्चिम → उत्तर विक्षेप`)** में क्षेत्र **उपरिमुखी (`d`)**, और **अभ्यास Q6 (`इलेक्ट्रॉन पीछे से सामने → दाईं ओर विक्षेप`)** में चुंबकीय क्षेत्र **ऊर्ध्वाधर अधोमुखी** होगा!\n2) **==प्रोटॉन गुण अपरिवर्तन (`पृ. 225 Q1`)==**: चुंबकीय क्षेत्र में मुक्त गति करते प्रोटॉन पर बल सदा वेग के लंबवत लगता है जिससे गति की दिशा बदलती है — अतः **==वेग (`Velocity`) व संवेग (`Momentum`) दोनों बदलते हैं==**, जबकि **द्रव्यमान व चाल (`गतिज ऊर्जा`) अपरिवर्तित** रहती है!\n3) **==औषध में चुंबकत्व (`MRI बॉक्स`, पृ. 225)==**: तंत्रिका कोशिकाओं में आयन धाराओं से उत्पन्न अस्थायी चुंबकीय क्षेत्र **पृथ्वी के चुंबकीय क्षेत्र का एक अरबवाँ (`10⁻⁹`) भाग** होता है। शरीर के दो मुख्य चुंबकीय क्षेत्र उत्पादक अंग **==हृदय व मस्तिष्क==** हैं, जिनका उपयोग चिकित्सा निदान की **==MRI (`चुंबकीय अनुनाद प्रतिबिंबन`)==** तकनीक में होता है!',
          },
          trapAlert: {
            en: '**-0.33 Trap**: For **Electron / β⁻ particle**, ALWAYS reverse arrow first to get Current `I` before stretching Fleming Left-Hand middle finger! Never say speed/KE of proton changes in a static uniform B (`Force ⊥ velocity -> zero work!`).',
            hi: '**-0.33 सावधानी**: प्रश्न में **इलेक्ट्रॉन** लिखा हो तो मध्यमा को उसकी गति की **विपरीत दिशा** में रखें! और **MRI** में मुख्य दो अंग = **हृदय व मस्तिष्क** (`1/10⁹ पृथ्वी क्षेत्र`)!',
          },
          inlinePyqIds: ['pyq-p12-13'],
        },
      ],
    },
    {
      id: 'domestic-circuits-fuse-safety',
      number: '12.4',
      flowDiagramKey: 'c10-ch12-domestic-fuse-safety-diagram',
      title: {
        en: 'Domestic AC Circuits (`220 V, 50 Hz`, Fig 12.15): Wire Colours (`Red, Black, Green`), `15 A / 5 A` Parallel, Earthing, Fuse, Short Circuit & Overloading',
        hi: 'घरेलू विद्युत परिपथ (`220 V, 50 Hz`, चित्र 12.15): तार रंग (`लाल, काला, हरा`), `15 A / 5 A` समानांतर क्रम, भूसंपर्कण, फ्यूज व लघुपथन',
      },
      summaryTag: {
        en: 'NCERT Pages 225–229 • Mains Meter Distribution Box, p.227 Q2 2 kW @ 220V = 9.09 A Overload & Exercises Q1–Q9',
        hi: 'NCERT पृ. 225–229 • वितरण बक्स क्र. 12.15, भूसंपर्कण सुरक्षा, जूल तापन फ्यूज, 2 kW तंदूर (9.09 A > 5 A) व अभ्यास Q1–Q9',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Domestic Mains Wiring Order (`Fig 12.15`), Three Colour Codes, `15 A` vs `5 A` Ratings & Parallel Benefits',
            hi: '1. घरेलू मेन्स सप्लाई (`220 V, 50 Hz`), तीनों तारों के रंग, `15 A / 5 A` अलग परिपथ व पार्श्वक्रम (`Parallel`) के लाभ (`चित्र 12.15`)',
          },
          conceptStory: {
            en: 'Homes receive AC mains (`overhead poles or underground cables`) at **==Potential Difference `220 V` and Frequency `50 Hz` (`in India`, p.228)==**:\n1) **Three Insulated Wires (`EXACT Colour Codes!`)**:\n   - **Red (`लाल`)**: **Live wire (`विद्युन्मय / धनात्मक तार`)**\n   - **Black (`काला`)**: **Neutral wire (`उदासीन / ऋणात्मक तार`)** (`220 V PD exists between Live & Neutral`)\n   - **Green (`हरा`)**: **Earth wire (`भूसंपर्क तार`)** (`connected to a metal plate buried deep underground; **Ex Q3b** traps calling green wire "live" -> FALSE!`)\n2) **Domestic Path (`Fig 12.15`)**: Mains wires -> **Board Mains Fuse** -> **Electricity Meter (`kWh`)** -> **Main Switch & Distribution Box (`separate fuse per circuit`)**.\n3) **Two Separate Home Circuits**:\n   - **`15 A` Current Rating**: High-power appliances (**==Geyser, Air Cooler, Electric Oven==**).\n   - **`5 A` Current Rating**: Lighting/low-power (**==Bulbs, Fans, Radios/TV==**).\n4) **Why Parallel Connection?** All sockets/appliances are connected in **Parallel across Live & Neutral** so **(i) every appliance gets equal `220 V` potential difference**, and **(ii) each appliance has its own separate ON/OFF switch** (`without turning off others!`).',
            hi: 'भारत में घरों तक मुख्य तारों (`मेन्स`) से **`220 V` विभवांतर व `50 Hz` आवृत्ति** पर **प्रत्यावर्ती विद्युत शक्ति (`AC Mains`)** आती है (`पृ. 226, 228`):\n1) **तीनों तारों के निश्चित रंग**:\n   - **लाल (`Red`)**: **विद्युन्मय तार (`Live / धनात्मक`)**\n   - **काला (`Black`)**: **उदासीन तार (`Neutral / ऋणात्मक`)** — दोनों के बीच `220 V` विभवांतर!\n   - **हरा (`Green`)**: **भूसंपर्क तार (`Earth wire`)** — भूमि में गहराई पर दबी धातु की प्लेट से जुड़ा (**अभ्यास Q3b**: हरे तार को विद्युन्मय कहना **असत्य** है!)\n2) **परिपथ क्रम (`चित्र 12.15`)**: मेन्स → **बोर्ड फ्यूज** → **विद्युतमापी (`Meter`)** → **मुख्य स्विच व वितरण बक्स** (`प्रत्येक परिपथ का पृथक् फ्यूज`)।\n3) **दो पृथक् परिपथ**: **`15 A` (`गीज़र, एयर कूलर`)** व **`5 A` (`बल्ब, पंखे`)**।\n4) **पार्श्वक्रम (`Parallel`) क्यों?** ताकि **प्रत्येक साधित्र को समान `220 V` वोल्टता मिले** और हर उपकरण का **अपना अलग ‘ऑन/ऑफ’ स्विच** हो सके (`एक बंद करने पर बाकी न बंद हों!`)।',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch12/real/domestic-cartridge-fuse.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch12/real/three-pin-earth-socket.webp',
            title: { en: 'Domestic Protection Duo (`Sec 12.4`): Electric Cartridge Fuse & Grounded 3-Pin Earth Socket', hi: 'घरेलू सुरक्षा युगल (`भाग 12.4`): विद्युत फ्यूज (`जूल तापन`) एवं हरित भूसंपर्क युक्त सॉकेट' },
            caption: {
              en: 'Left: Electric fuse protects circuits by melting via Joule heating (I²Rt) during overload/short circuit. Right: Earth pin connects metallic appliance casings (iron, toaster, fridge) to deep earth potential preventing electric shock.',
              hi: 'बायाँ: उच्च धारा आने पर जूल तापन से पिघलकर परिपथ तोड़ने वाला फ्यूज। दायाँ: धातु के आवरण वाली इस्त्री/फ्रिज/टोस्टर को भूमि विभव पर रख आघात रोकने वाला भूसंपर्कन।',
            },
          },
          inlinePyqIds: ['pyq-p12-24'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Earthing Shock Safety, Electric Fuse (`Joule Heating`), Short Circuit (`R→0`) vs Overloading (`p.227 Q2 Numerical`)',
            hi: '2. भूसंपर्कण सुरक्षा, विद्युत फ्यूज (`जूल तापन`), लघुपथन बनाम अतिभारण (`पृ. 227 Q2: 2 kW @ 220V = 9.09 A`)',
          },
          conceptStory: {
            en: 'Understand the **exact physics** behind all domestic faults (`p.226–227`):\n• **Earthing Safety (`Green Earth Wire` — Ex Q9)**: Connected to the **metallic body** of appliances like **electric iron, toaster, table fan, refrigerator**. It gives leakage current a **low-resistance conducting path (`अल्प प्रतिरोध पथ`)**, keeping the metallic casing equal to **Earth potential (`0 V`)** so users never suffer severe shock!\n• **Electric Fuse (`p.226`)**: Connected in **series** on each circuit; **Joule heating** melts the fuse wire during excessive current spikes, breaking the circuit cleanly before appliances catch fire (`NCERT Sec 11.7 & 12.4`).\n• **==Short Circuit (`लघुपथन`, Ex Q2 & Q8)==**: When **Live & Neutral wires touch directly** (`due to damaged insulation or appliance fault`), resistance drops near **ZERO**, so **==current increases heavily & abruptly (`अकस्मात बहुत अधिक बढ़ती` — Ex Q2c & Wireman PYQ)==**, risking fire.\n• **==Overloading (`अतिभारण`)==**: Happens either when **(1) Live & Neutral touch (`short circuit causes overload`)**, **(2) Accidental surge in supply voltage**, OR **(3) Connecting too many high-power appliances to ONE socket**! *(NCERT `p.227 Q2` Example: A `2 kW = 2000 W` oven at `220 V` draws **`I = P/V = 2000/220 = 9.09 A`** — exceeding a **`5 A` circuit**, overloading & melting the fuse!)*',
            hi: 'घरेलू सुरक्षा के चारों मुख्य नियम (`पृ. 226–227`):\n• **भूसंपर्कण (`Earthing` — अभ्यास Q9)**: विद्युत **इस्त्री, टोस्टर, मेज़ पंखा, रेफ्रिजरेटर** के धात्विक आवरण को हरे तार से भूमि में गड़ी धातु प्लेट से जोड़ते हैं — इससे धारा क्षरण होने पर **अल्प प्रतिरोध का चालन पथ** मिलता है और आवरण का विभव भूमि समान होकर **तीव्र आघात से रक्षा** होती है!\n• **विद्युत फ्यूज (`Electric Fuse`)**: श्रेणीक्रम में लगकर असामान्य उच्च धारा होने पर **जूल तापन से पिघल कर परिपथ तोड़ देता है**।\n• **==लघुपथन (`Short Circuit`, अभ्यास Q2 व Q8)==**: तारों का विद्युतरोधन खराब होने या साधित्र दोष से **विद्युन्मय (`लाल`) व उदासीन (`काला`) तार सीधे संपर्क** में आ जाएँ, तो प्रतिरोध लगभग शून्य होने से **==परिपथ में धारा अकस्मात बहुत अधिक बढ़ जाती है (`अभ्यास Q2c`)==**।\n• **==अतिभारण (`Overloading`)==**: तीन कारण — **(1)** लघुपथन (`Live+Neutral स्पर्श`), **(2)** आपूर्ति वोल्टता में अचानक वृद्धि, या **(3)** एक ही सॉकेट में कई उच्च-शक्ति उपकरण जोड़ना! *(`पृ. 227 Q2`: `2 kW = 2000 W` तंदूर `220 V` पर **`I = P/V = 2000/220 = 9.09 A`** खींचेगा, जो **`5 A` परिपथ** से अधिक है — अतः फ्यूज गल परिपथ टूट जाएगा!)*',
          },
          viralTrick: {
            en: '**Wire Colour Code + `220/50`**: **“R-L, B-N, G-E”** (**R**ed **L**ive, **B**lack **N**eutral, **G**reen **E**arth) at **`220 V, 50 Hz`**! **Short Circuit = Live+Neutral direct touch (`Resistance ≈ 0` -> Max Current!)**.',
            hi: '**रंग सूत्र “ला-वि, का-उ, ह-भू”**: **ला**ल = **वि**द्युन्मय (`Live`), **का**ला = **उ**दासीन (`Neutral`), **ह**रा = **भू**संपर्क (`Earth`)! भारत सप्लाई = **`220 V, 50 Hz`**; **लघुपथन = लाल+काला मिलन (`प्रतिरोध ≈ 0`, धारा अत्यंत उच्च!)**।',
          },
          inlinePyqIds: ['pyq-p12-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Outside Magnet (`N → S`) vs Inside Magnet (`S → N`)', hi: 'चुंबक के बाहर (`N → S`) बनाम भीतर (`S → N`) रेखा दिशा' },
      left: { en: 'OUTSIDE magnet: lines emerge at North pole & enter South pole (`N → S`)', hi: 'बाहर: उत्तरी ध्रुव (`N`) से निकल दक्षिण (`S`) में प्रवेश करती हैं' },
      right: { en: 'INSIDE magnet: lines return South → North (`S → N`), forming closed continuous loops!', hi: 'भीतर (`Tech Shift 6`): दक्षिणी (`S`) से उत्तरी (`N`) ध्रुव → बंद वक्र पूर्ण!' },
    },
    {
      pair: { en: 'Right-Hand Thumb Rule (`B Direction`) vs Fleming’s Left-Hand Rule (`Force F Direction`)', hi: 'दक्षिण-हस्त अंगुष्ठ (`क्षेत्र B`) बनाम फ्लेमिंग वामहस्त (`बल F`) नियम' },
      left: { en: 'Right-Hand Thumb (`12.2.2`): Finds MAGNETIC FIELD `B` circling a current-carrying wire/loop', hi: 'दायाँ हाथ: तार के चारों ओर चुंबकीय क्षेत्र `B` की दिशा ज्ञात करने हेतु (`अँगूठा = धारा I`)' },
      right: { en: 'Fleming Left-Hand (`12.3`): Finds FORCE `F` pushing wire placed inside external field `B`!', hi: 'बायाँ हाथ (`अभ्यास 7`): बाह्य क्षेत्र में रखे तार पर लगने वाला बल `F` (`अँगूठा = बल`)!' },
    },
    {
      pair: { en: 'Electron Motion (`-ve`) vs Proton / Alpha (`+ve`) in Fleming Rule (`Ex 12.2`)', hi: 'इलेक्ट्रॉन (`-ve`) बनाम अल्फा/प्रोटॉन (`+ve`) धारा दिशा (`उदा. 12.2`)' },
      left: { en: 'Positive α-particle or Proton: Conventional Current I = SAME direction as particle velocity!', hi: 'प्रोटॉन या अल्फा-कण (`+ve`): पारंपरिक धारा की दिशा = कण की गति दिशा (`पृ. 225 Q3`)' },
      right: { en: 'Negative Electron (`e⁻`): Current I flows strictly OPPOSITE to electron direction (`Ex 12.2 / Q6`)!', hi: 'इलेक्ट्रॉन (`-ve`): धारा `I` सदैव इलेक्ट्रॉन गति के विपरीत लें (`वरना दिशा उलट जाएगी!`)!' },
    },
    {
      pair: { en: 'Short Circuit (`Live+Neutral Touch`) vs Overloading (`Excess Current Load`)', hi: 'लघुपथन (`Short Circuit`) बनाम अतिभारण (`Overloading`)' },
      left: { en: 'Short Circuit: Live (Red) + Neutral (Black) directly touch (`R→0`) causing abrupt massive current', hi: 'लघुपथन: रोधन क्षतिग्रस्त होने से लाल व काला तार सीधे मिलना (`अचानक बहुत अधिक धारा`)' },
      right: { en: 'Overloading: Too many appliances on 1 socket (`9.09 A > 5 A`), voltage surge, or short circuit -> Fuse melts!', hi: 'अतिभारण: एक सॉकेट में अधिक लोड (`2 kW @ 220V = 9.09 A`), वोल्टता वृद्धि या लघुपथन से सीमा पार!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Electromagnetism Founder / SI Unit Honoree', hi: 'वैद्युतचुंबकत्व जनक (`1820`)' },
      name: { en: 'Hans Christian Oersted (`1777–1851`)', hi: 'हैंस क्रिश्चियन ऑर्स्टेड (`1777–1851`)' },
      country: { en: 'Denmark (`NCERT p.216 Box`)', hi: 'डेनमार्क (`NCERT पृ. 216 बॉक्स`)' },
      fact: {
        en: 'Accidentally discovered in **1820** that current through a wire deflects a nearby magnetic compass needle; unit **oersted** honours his discovery of field strength!',
        hi: 'सन् **1820** में प्रमाणित किया कि विद्युत धारा चुंबकीय क्षेत्र बनाती है (रेडियो/TV तकनीक आधार); चुंबकीय क्षेत्र तीव्रता का मात्रक **ऑर्स्टेड** उन्हीं के सम्मान में है!',
      },
    },
    {
      badge: { en: 'Electrodynamics / Magnetic Force Law', hi: 'विद्युत-गतिकी व चालक पर बल' },
      name: { en: 'André-Marie Ampère (`1775–1836`)', hi: 'आंद्रे मेरी एम्पियर (`1775–1836`)' },
      country: { en: 'France (`NCERT Sec 12.3`)', hi: 'फ्रांस (`NCERT भाग 12.3`)' },
      fact: {
        en: 'Suggested that just as current wire moves a magnet, magnets must exert an **equal and opposite force** on a current-carrying conductor (`verified in Act 12.7`)!',
        hi: 'प्रस्तुत किया कि चुंबक को भी धारावाही चालक पर परिमाण में समान पर विपरीत दिशा में बल लगाना चाहिए (`क्रियाकलाप 12.7 में सिद्ध`)!',
      },
    },
    {
      badge: { en: 'Directional Hand & Screw Rules', hi: 'दिशा निर्धारण नियम (फ्लेमिंग व मैक्सवेल)' },
      name: { en: 'John Ambrose Fleming & James Clerk Maxwell', hi: 'जॉन एम्ब्रोस फ्लेमिंग एवं जेम्स क्लर्क मैक्सवेल' },
      country: { en: 'United Kingdom (`Sec 12.2.2 & 12.3`)', hi: 'यूनाइटेड किंगडम (`भाग 12.2.2 व 12.3`)' },
      fact: {
        en: 'Maxwell formulated the **Corkscrew equivalent** of Right-Hand Thumb Rule (`p.221 footnote`), while Fleming designed the mutually perpendicular **Left-Hand F-B-I Force Rule (`Fig 12.13`)**!',
        hi: 'मैक्सवेल ने दक्षिण-हस्त अँगुष्ठ नियम का **कॉर्कस्क्रू रूप** दिया (`पृ. 221`) तथा फ्लेमिंग ने **वामहस्त नियम (`F-B-I`, चित्र 12.13)** प्रतिपादित किया!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-iron-filings-pole',
      figRef: { en: 'NCERT Act 12.2 & Fig 12.2–12.4', hi: 'NCERT क्र. 12.2 — लौहचूर्ण क्षेत्र रेखाएँ' },
      title: { en: 'Iron Filings Tracing Dense Magnetic Field Lines At a Magnet Pole', hi: 'चुंबक के ध्रुव के निकट सघनतम क्षेत्र रेखाओं का निर्माण करता लौहचूर्ण' },
      imageUrl: '/ncert-notes/class10-phy-ch12/real/iron-filings-bar-magnet.webp',
      hotspots: [
        { en: 'Closeness/crowding of iron filings near poles directly proves peak field strength B (`ALP Shift 2`).', hi: 'ध्रुव के समीप सर्वाधिक सघन रेखाएँ प्रबलतम चुंबकीय क्षेत्र दर्शाती हैं (`क्र. 12.2`)।' },
      ],
    },
    {
      id: 'vis-magnetic-compass',
      figRef: { en: 'NCERT Act 12.1, 12.3 & 12.4', hi: 'NCERT क्र. 12.1, 12.3 — दिक्सूचक सुई' },
      title: { en: 'Magnetic Compass Needle Deflected by Nearby Bar Magnet or Current Wire', hi: 'विद्युत धारा या छड़ चुंबक से विक्षेपित होने वाली दिक्सूचक (`छोटा छड़ चुंबक`)' },
      imageUrl: '/ncert-notes/class10-phy-ch12/real/magnetic-compass-deflection.webp',
      hotspots: [
        { en: 'Direction pointed by compass North pole defines tangent magnetic field direction at that point (`Act 12.3`).', hi: 'दिक्सूची का उत्तर ध्रुव बिंदु पर चुंबकीय क्षेत्र की स्पर्शरेखीय दिशा बताता है (`Group D Shift 32`)।' },
      ],
    },
    {
      id: 'vis-solenoid-electromagnet',
      figRef: { en: 'NCERT Fig 12.10–12.11 (`Solenoid`)', hi: 'NCERT चित्र 12.10–12.11 — परिनालिका विद्युत-चुंबक' },
      title: { en: 'DC Battery Coil Wrapped on Iron Core Lifting Steel Nails (`Electromagnet`)', hi: 'लौह क्रोड पर लिपटी धारावाही कुंडली (`परिनालिका विद्युत चुंबक` द्वारा कीलें आकर्षित)' },
      imageUrl: '/ncert-notes/class10-phy-ch12/real/solenoid-nail-electromagnet.webp',
      hotspots: [
        { en: 'Parallel straight lines inside solenoid magnetise soft-iron core strongly (`Tech Shifts 10, 11, 12`).', hi: 'परिनालिका के भीतर एकसमान समांतर क्षेत्र नर्म लौह क्रोड को प्रबल अस्थायी चुंबक बना देता है।' },
      ],
    },
    {
      id: 'vis-oersted-portrait',
      figRef: { en: 'NCERT p.216 Bio Box (`1820`)', hi: 'NCERT पृ. 216 — हैंस क्रिश्चियन ऑर्स्टेड' },
      title: { en: 'Hans Christian Oersted (1777–1851) — Pioneer Linking Current & Magnetism', hi: 'हैंस क्रिश्चियन ऑर्स्टेड (`1777–1851`) — क्षेत्र तीव्रता मात्रक "ऑर्स्टेड"' },
      imageUrl: '/ncert-notes/class10-phy-ch12/real/hans-christian-oersted.webp',
      hotspots: [
        { en: 'Discovered current-induced compass deflection in 1820; unit of magnetic field strength is "oersted".', hi: 'सन् 1820 में तार में धारा से सुई विक्षेप खोजा; क्षेत्र तीव्रता का सम्मान मात्रक `ऑर्स्टेड`!' },
      ],
    },
    {
      id: 'vis-domestic-fuse',
      figRef: { en: 'NCERT Sec 12.4 (`Electric Fuse`)', hi: 'NCERT भाग 12.4 — विद्युत फ्यूज' },
      title: { en: 'Protective Cartridge Electric Fuse Breaking Overloaded / Short Circuits', hi: 'लघुपथन व अतिभारण में जूल तापन से पिघल कर परिपथ तोड़ने वाला फ्यूज' },
      imageUrl: '/ncert-notes/class10-phy-ch12/real/domestic-cartridge-fuse.webp',
      hotspots: [
        { en: 'Joule heating melts the thin fuse wire whenever current exceeds rating (`e.g. 2 kW oven drawing 9.09 A on 5 A line`).', hi: 'उच्च धारा आने पर जूल तापन फ्यूज को पिघलाकर साधित्रों की क्षति रोकता है (`पृ. 226`)।' },
      ],
    },
    {
      id: 'vis-earth-socket',
      figRef: { en: 'NCERT Fig 12.15 & Ex Q9 (`Earthing`)', hi: 'NCERT चित्र 12.15 व अभ्यास Q9 — भूसंपर्कन' },
      title: { en: 'Grounded Domestic AC Socket Connected to Green Earth & Red/Black Lines', hi: 'लाल (`Live`), काले (`Neutral`) व हरे (`Earth`) तारों वाला घरेलू `220 V / 50 Hz` सॉकेट' },
      imageUrl: '/ncert-notes/class10-phy-ch12/real/three-pin-earth-socket.webp',
      hotspots: [
        { en: 'Parallel domestic outlets keep 220 V constant across appliances while Green Earth wire shields metallic bodies from shock.', hi: 'पार्श्वक्रम में सबको समान `220 V` मिलती है व हरा भूसंपर्क तार धातु आवरण से शॉक सुरक्षा देता है।' },
      ],
    },
  ],
  activities: [
    {
      num: '12.1',
      title: { en: 'Activity 12.1: Compass Deflection Near Straight Copper Wire Carrying Current (`Oersted Demo`, Fig 12.1)', hi: 'क्रियाकलाप 12.1: सीधे ताँबे के तार में धारा से दिक्सूची का विक्षेप (`चित्र 12.1`)' },
      materials: { en: 'Straight thick copper wire XY (`⊥ page`), small horizontal compass, resistor, key & cells', hi: 'सीधा मोटा ताँबे का तार (`XY`), छोटी दिक्सूचक, प्रतिरोध, प्लग कुंजी व सेल' },
      steps: { en: 'Connect XY vertically/perpendicular to paper in circuit, place horizontal compass near it, insert plug key & observe needle shift.', hi: 'ताँबे के तार `XY` के निकट क्षैतिज दिक्सूची रख परिपथ की कुंजी लगाकर सुई की स्थिति देखें।' },
      examTakeaway: { en: 'Needle **deflects immediately on current flow**, proving electric current generates a **magnetic field (`Oersted 1820`)**!', hi: 'धारा बहते ही सुई विक्षेपित होती है — सिद्ध होता है कि **विद्युत धारा चुंबकीय प्रभाव उत्पन्न करती है**!' },
      predictQuestion: {
        prompt: { en: 'What key physical conclusion comes directly from Activity 12.1 (`Oersted experiment`)?', hi: 'क्रियाकलाप 12.1 (`चित्र 12.1`) का सीधा भौतिक निष्कर्ष क्या है?' },
        options: { en: ['Electricity and magnetism are linked: current creates a magnetic field around conductor', 'Copper itself turns permanently into plastic', 'Needle rotates only via gravity', 'Current produces only light, no magnetism'], hi: ['विद्युत व चुंबकत्व परस्पर संबंधित हैं — धारावाही तार चुंबकीय क्षेत्र बनाता है', 'ताँबा प्लास्टिक बनता है', 'गुरुत्व से सुई घूमती है', 'केवल प्रकाश निकलता है'] },
        correctIndex: 0,
        reason: { en: 'Flowing charge creates surrounding magnetic field deflecting the compass mini-magnet (`p.216`).', hi: 'ताँबे के तार में प्रवाहित धारा पास रखी दिक्सूची पर चुंबकीय बल लगाती है।' },
      },
    },
    {
      num: '12.2',
      title: { en: 'Activity 12.2: Iron Filings Around a Bar Magnet (`Salt Sprinkler`, Fig 12.2)', hi: 'क्रियाकलाप 12.2: छड़ चुंबक के चारों ओर लौहचूर्ण छितराना (`चित्र 12.2`)' },
      materials: { en: 'Drawing board with fixed white paper, bar magnet at centre, fine iron filings in salt sprinkler', hi: 'सफ़ेद कागज़ चिपका बोर्ड, छड़ चुंबक, नमक-छितरावक में बारीक लौहचूर्ण' },
      steps: { en: 'Place bar magnet at paper centre, sprinkle iron filings uniformly around it & tap the board gently.', hi: 'कागज़ के बीच में चुंबक रख समान रूप से लौहचूर्ण छितराकर बोर्ड को धीरे थपथपाएँ।' },
      examTakeaway: { en: 'Iron filings **self-align along curved magnetic field lines**, densest at N & S poles (`force inside magnetic field region`).', hi: 'लौहचूर्ण स्वयं **चुंबकीय क्षेत्र रेखाओं के अनुदिश वक्र पैटर्न (`ध्रुवों पर सर्वाधिक सघन`)** में व्यवस्थित हो जाता है!' },
      predictQuestion: {
        prompt: { en: 'Why do sprinkled iron filings align into symmetric curved chains when tapping the board in Act 12.2?', hi: 'बोर्ड थपथपाने पर लौहचूर्ण वक्राकार पैटर्न में क्यों सज जाता है?' },
        options: { en: ['Each tiny iron grain behaves magnetically under the magnet’s field force along field lines', 'Paper glue pulls them symmetrically', 'Air convection aligns them', 'Magnetic poles disappear when tapped'], hi: ['चुंबकीय क्षेत्र के बल के कारण लौहचूर्ण क्षेत्र रेखाओं के अनुदिश संरेखित होता है', 'कागज के गोंद से', 'हवा के संवहन से', 'ध्रुव समाप्त होने से'] },
        correctIndex: 0,
        reason: { en: 'Filings feel force inside magnet’s magnetic field and settle tangentially along curved field lines (`p.217`).', hi: 'चुंबक के प्रभाव क्षेत्र में बल अनुभव कर लौहचूर्ण क्षेत्र रेखाओं का निरूपण करता है।' },
      },
    },
    {
      num: '12.3',
      title: { en: 'Activity 12.3: Step-by-Step Compass Plotting of Bar Magnet Lines (`N → S`, Fig 12.3–12.4)', hi: 'क्रियाकलाप 12.3: दिक्सूची द्वारा छड़ चुंबक की क्षेत्र रेखाएँ खींचना (`चित्र 12.3–12.4`)' },
      materials: { en: 'Bar magnet, white sheet on board, sharp pencil, small compass', hi: 'छड़ चुंबक, सफ़ेद कागज़, नुकीली पेंसिल, छोटी दिक्सूची' },
      steps: { en: 'Trace magnet boundary, place compass near N pole, dot N & S tips, shift compass S onto previous N mark repeatedly until S pole is reached; join dots smoothly.', hi: 'चुंबक की सीमा बना `N` ध्रुव के पास सुई रख दोनों सिरे अंकित करें, फिर सुई का `S` पुराने `N` पर रखते हुए `S` ध्रुव तक वक्र मिलाएँ।' },
      examTakeaway: { en: 'Proves needle deflection **increases closer to poles** & lines run **N → S outside** and **S → N inside** (`closed continuous curve`).', hi: 'ध्रुवों के निकट विक्षेप बढ़ता है; रेखाएँ **बाहर `N → S`** व **भीतर `S → N` (`बंद वक्र`)** होती हैं!' },
      predictQuestion: {
        prompt: { en: 'Moving compass step by step along a field line toward the magnet’s pole in Activity 12.3, how does deflection behave?', hi: 'क्रियाकलाप 12.3 में चुंबक के ध्रुवों के निकट जाने पर दिक्सूची के विक्षेप में क्या परिवर्तन होता है?' },
        options: { en: ['Deflection decreases to zero at poles', 'Deflection INCREASES closer to poles (`stronger field`)', 'North end points away from South pole', 'Needle spins 360° randomly'], hi: ['ध्रुव पर शून्य', 'ध्रुवों के निकट जाने पर सुई के विक्षेप में वृद्धि होती है', 'दिशा उलट जाती', 'कोई प्रभाव नहीं'] },
        correctIndex: 1,
        reason: { en: 'Verbatim p.218: Closer to magnet poles, field lines crowd closer and compass deflection increases!', hi: 'सटीक `पृ. 218`: चुंबक के ध्रुवों के निकट क्षेत्र प्रबल होने से सुई के विक्षेप में वृद्धि होती जाती है।' },
      },
    },
    {
      num: '12.4',
      title: { en: 'Activity 12.4: Reversing Current Flips Compass Deflection (`East ⇄ West`, Fig 12.5)', hi: 'क्रियाकलाप 12.4: धारा की दिशा उलटने पर चुंबकीय क्षेत्र की दिशा उत्क्रमण (`चित्र 12.5`)' },
      materials: { en: 'Long straight copper wire, 2–3 cells of 1.5 V, plug key, compass needle', hi: 'लंबा सीधा ताँबे का तार, `1.5 V` के 2–3 सेल, कुंजी व दिक्सूची' },
      steps: { en: 'Hold wire above compass parallel to needle. Pass current **N → S** (`needle shifts East`). Swap battery terminals so current flows **S → N**.', hi: 'दिक्सूची के ऊपर समांतर तार में पहले `N → S` धारा प्रवाहित करें (`सुई पूर्व मुड़े`), फिर सेल पलटकर `S → N` धारा भेजें।' },
      examTakeaway: { en: '**N → S current tilts N-pole East; reversed S → N tilts it West!** Directly proves reversing `I` **reverses `B` direction** (`Group D Shifts 18, 21`).', hi: '**`N → S` धारा पर उत्तर ध्रुव पूर्व विक्षेपित; उलट कर `S → N` करने पर पश्चिम विक्षेपित** — अतः धारा पलटने से क्षेत्र दिशा पलटती है!' },
      predictQuestion: {
        prompt: { en: 'In Activity 12.4 (`Fig 12.5`), if reversing battery connections switches current from South → North above the needle, the compass N-pole deflects:', hi: 'क्रियाकलाप 12.4 (`चित्र 12.5`) में तार की धारा उलटकर दक्षिण से उत्तर करने पर सुई का उत्तर ध्रुव किधर विक्षेपित होगा?' },
        options: { en: ['Eastwards', 'Westwards (`opposite to N→S case`)', 'Straight upward vertically', 'No deflection'], hi: ['पूर्व की ओर', 'पश्चिम की ओर (`पहले से विपरीत दिशा में`)', 'ऊपर की ओर', 'कोई विक्षेप नहीं'] },
        correctIndex: 1,
        reason: { en: 'NCERT p.219 verbatim: N→S gives East deflection; S→N flips deflection strictly toward **West**!', hi: 'सटीक `पृ. 219`: `N→S` में पूर्व की ओर तथा उलटी `S→N` धारा में विपरीत **पश्चिम की ओर** विक्षेप होता है।' },
      },
    },
    {
      num: '12.5',
      title: { en: 'Activity 12.5: Concentric Circles Around Vertical Wire (`I` & `r` Test, Fig 12.6)', hi: 'क्रियाकलाप 12.5: सीधे ऊर्ध्वाधर तार के चारों ओर संकेंद्री वृत्त व I-दूरी जाँच (`चित्र 12.6`)' },
      materials: { en: '12 V battery, rheostat, 0–5 A ammeter, key, thick straight copper wire pierced `⊥` cardboard, iron filings, compass', hi: '12 V बैटरी, धारा नियंत्रक, 0–5 A एमीटर, कार्डबोर्ड, मोटा ताँबा तार, लौहचूर्ण व दिक्सूची' },
      steps: { en: 'Pass vertical wire through cardboard centre, sprinkle filings, tap gently; vary current via rheostat and shift compass closer/farther (`point Q`).', hi: 'कार्डबोर्ड में लंबवत तार से धारा प्रवाहित कर लौहचूर्ण थपथपाएँ; धारा नियंत्रक से धारा बदलें व दिक्सूची दूर (`Q`) रखें।' },
      examTakeaway: { en: 'Forms **concentric circles centred at wire**: **`I ↑ ⇒ B ↑`** (`greater deflection`) and **`distance ↑ ⇒ B ↓`** (`smaller deflection`).', hi: 'लौहचूर्ण **तार पर केंद्रित संकेंद्री वृत्त (`चित्र 12.6`)** बनाता है: **धारा ↑ = क्षेत्र ↑ (`B ∝ I`)** व **दूरी ↑ = क्षेत्र ↓ (`B ∝ 1/r`)**!' },
      predictQuestion: {
        prompt: { en: 'Moving compass from circle P near the vertical wire to farther point Q while keeping current constant in Activity 12.5 makes deflection:', hi: 'क्रियाकलाप 12.5 में धारा स्थिर रखकर दिक्सूची को तार से दूर बिंदु Q पर ले जाने पर विक्षेप पर क्या प्रभाव पड़ता है?' },
        options: { en: ['Increases sharply', 'Decreases (`field strength reduces with distance`)', 'Drops immediately to infinity', 'Circles become squares'], hi: ['बढ़ जाता है', 'कम हो जाता है (`चालक से दूरी बढ़ने पर क्षेत्र घटता है`)', 'अनंत होता है', 'वृत्त चौकोर होते'] },
        correctIndex: 1,
        reason: { en: 'Magnetic field strength around straight conductor varies inversely with distance (`B ∝ 1/r`, p.220).', hi: 'सीधे धारावाही चालक से दूर जाने पर चुंबकीय क्षेत्र की प्रबलता घटती जाती है (`पृ. 220`)।' },
      },
    },
    {
      num: '12.6',
      title: { en: 'Activity 12.6: Circular Multi-Turn Coil Through Two Cardboard Holes (`Fig 12.8–12.9`)', hi: 'क्रियाकलाप 12.6: अधिक फेरों वाली वृत्ताकार कुंडली का चुंबकीय क्षेत्र पैटर्न (`चित्र 12.9`)' },
      materials: { en: 'Two-hole cardboard, circular coil with large number of turns perpendicular to board, battery, rheostat, key, iron filings', hi: 'दो छिद्रों वाला कार्डबोर्ड, अधिक फेरों की वृत्ताकार कुंडली, बैटरी, धारा नियंत्रक, कुंजी व लौहचूर्ण' },
      steps: { en: 'Mount multi-turn coil perpendicular across two holes, pass current, sprinkle iron filings & tap cardboard.', hi: 'कार्डबोर्ड के दो छिद्रों में लंबवत कुंडली लगा धारा प्रवाहित करें व लौहचूर्ण पैटर्न देखें।' },
      examTakeaway: { en: 'Near wire circles bend; **at loop centre field lines appear STRAIGHT**, & **`n` turns yield `n × B` strength**!', hi: 'तारों के पास वृत्त, पर **केंद्र पर रेखाएँ सरल जैसी** दिखती हैं व **`n` फेरों से क्षेत्र `n` गुना प्रबल** हो जाता है!' },
      predictQuestion: {
        prompt: { en: 'If a single-turn circular loop makes field B at its centre, replacing it with a 10-turn coil at identical current produces (`Tech Shift 13`):', hi: 'समान धारा पर एकल फेरे के पाश से केंद्र पर क्षेत्र B हो, तो 10 फेरों वाली कुंडली से क्षेत्र कितना होगा?' },
        options: { en: ['B / 10', 'B', '10 B (`fields from each turn add up`)', '100 B'], hi: ['B / 10', 'B', '10 B (`प्रत्येक फेरे का समान दिशा क्षेत्र जुड़ता है`)', '100 B'] },
        correctIndex: 2,
        reason: { en: 'All turns carry current in identical circular sense, so their centre magnetic fields add linearly (`n × B`, p.222).', hi: 'प्रत्येक फेरे में धारा समान दिशा में होने से सभी के चुंबकीय क्षेत्र संयोजित हो `n` गुना हो जाते हैं।' },
      },
    },
    {
      num: '12.7',
      title: { en: 'Activity 12.7: Aluminium Rod `AB` Kicks Left/Right Between Horseshoe Magnet Poles (`Fig 12.12`)', hi: 'क्रियाकलाप 12.7: नाल चुंबक के भीतर धारावाही एल्युमिनियम छड़ पर बल (`चित्र 12.12`)' },
      materials: { en: '~5 cm Aluminium rod AB hung by wires on stand, strong horseshoe magnet (`N below, S above`), battery, key, rheostat', hi: '`~5 cm` लंबी Al छड़ `AB`, स्टैंड, प्रबल नाल चुंबक (`N नीचे, S ऊपर`), बैटरी, कुंजी व धारा नियंत्रक' },
      steps: { en: 'Pass current `B → A` (`rod kicks LEFT`); reverse current `A → B` (`rod kicks RIGHT`); swap N & S poles (`direction flips again!`).', hi: 'छड़ में `B → A` धारा पर विस्थापन देखें (`बाईं ओर`); धारा पलट `A → B` करें (`दाईं ओर`) तथा नाल चुंबक के ध्रुव उलट कर देखें।' },
      examTakeaway: { en: 'Proves **magnetic field pushes current conductor**; direction depends on **BOTH `I` & `B`**, and **displacement peaks when `I ⊥ B` (`90°`)**!', hi: 'सिद्ध होता है कि **बल की दिशा धारा व क्षेत्र दोनों पर निर्भर** है और **विस्थापन अधिकतम `90°` लंबवत होने पर** होता है!' },
      predictQuestion: {
        prompt: { en: 'In Activity 12.7 (`Fig 12.12`), rod AB displacement reaches MAXIMUM when current angle relative to horseshoe magnetic field is:', hi: 'क्रियाकलाप 12.7 में छड़ AB का विस्थापन अधिकतम तब होता है जब धारा और चुंबकीय क्षेत्र के बीच कोण हो:' },
        options: { en: ['0° (Parallel)', '45°', '90° (Perpendicular — right angle)', '180°'], hi: ['0° (समांतर)', '45°', '90° (परस्पर लंबवत)', '180°'] },
        correctIndex: 2,
        reason: { en: 'Magnetic force F = B I L sinθ peaks (`sin 90° = 1`) when conductor current runs perpendicular (`90°`) to magnetic field (`p.224`).', hi: 'धारा व चुंबकीय क्षेत्र परस्पर लंबवत (`90°`) होने पर आरोपित बल उच्चतम होता है (`पृ. 224`)।' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-12-1',
      title: {
        en: 'Magnetic Field Pattern, Pole Polarity & Strength Factors by Geometry (`Sec 12.1–12.2`)',
        hi: 'विभिन्न चुंबकों व चालकों के चुंबकीय क्षेत्र का पैटर्न, ध्रुवता एवं प्रबलता कारक (`भाग 12.1–12.2`)',
      },
      headers: {
        en: ['Source Geometry', 'Shape of Magnetic Field Lines', 'Pole / Field Properties', 'How to Increase Strength / Exam Hit'],
        hi: ['स्रोत की आकृति', 'चुंबकीय क्षेत्र रेखाओं का रूप', 'ध्रुव व क्षेत्र विशेषता', 'प्रबलता बढ़ाने का उपाय / PYQ'],
      },
      rows: [
        [{ en: '**Bar Magnet (`Fig 12.4`)**', hi: '**छड़ चुंबक (`चित्र 12.4`)**' }, { en: 'Closed curves: **N → S outside**, **S → N inside**', hi: 'बंद वक्र: **बाहर `N → S`, भीतर `S → N`**' }, { en: 'Peak density at ends; lines NEVER cross', hi: 'ध्रुवों पर सर्वाधिक सघन; कभी न कटें' }, { en: 'Closeness = strength (`ALP Shift 2, Tech Shift 6`)', hi: 'निकटता = प्रबलता (`ALP 2, Tech 6`)' }],
        [{ en: '**Straight Wire (`Fig 12.6`)**', hi: '**सीधा तार (`चित्र 12.6`)**' }, { en: '**Concentric circles centred on wire** (`⊥ plane`)', hi: '**तार पर केंद्रित संकेंद्री वृत्त (`लंबवत तल`)**' }, { en: 'No N/S poles (`continuous circles around conductor`)', hi: 'दिशा **दक्षिण-हस्त अंगुष्ठ नियम** से (`उदा. 12.1`)' }, { en: 'Increase current (**`B ∝ I`**), move closer (**`B ∝ 1/r`**)', hi: 'धारा बढ़ाएँ (`B ∝ I`), दूरी घटाएँ (`Shift 23, 27`)' }],
        [{ en: '**Circular Loop (`Fig 12.8`)**', hi: '**वृत्ताकार पाश (`चित्र 12.8`)**' }, { en: 'Concentric near wire -> **STRAIGHT at centre**', hi: 'तार पास वृत्त → **केंद्र पर लगभग सरल रेखाएँ**' }, { en: 'All points inside circle add in same direction', hi: 'पाश के भीतर सभी बिंदुओं पर एक ही दिशा' }, { en: '**`n` turns coil ⇒ `n × B`** (`10 turns = 10B`, Shift 13!)', hi: '**`n` फेरे ⇒ `n` गुना प्रबल (`10 फेरे = 10B` PYQ!)**' }],
        [{ en: '**Solenoid & Soft Iron (`12.10–11`)**', hi: '**परिनालिका व विद्युत चुंबक (`12.10–11`)**' }, { en: 'Outside = Bar magnet | **Inside = Parallel straight lines**', hi: 'बाहर = छड़ चुंबक | **भीतर = समांतर सरल रेखाएँ**' }, { en: 'Uniform (`SAME at all points inside`, p.223 Q3d)', hi: '**भीतर सभी बिंदुओं पर एकसमान (`अभ्यास 3a सत्य`)**' }, { en: 'More turns (`n`), higher `I`, insert **Soft Iron core**', hi: 'फेरे बढ़ाएँ, धारा ↑ व **नर्म लोहा डालें (`Shift 12`)**' }],
      ],
    },
    {
      id: 'tbl-12-2',
      title: {
        en: 'Master Directional Rules & Moving Charge Trap Sheet (`Sec 12.2.2 & 12.3`)',
        hi: 'सभी दिशा नियम (`दक्षिण-हस्त, कॉर्कस्क्रू, फ्लेमिंग वामहस्त`) व आवेश कण अपवाद सारणी',
      },
      headers: {
        en: ['Rule / NCERT Solved Case', 'Quantity Assigned to Fingers / Tool', 'Target Direction Found', 'Exam Trap / Verbatim Result'],
        hi: ['नियम / NCERT हल प्रश्न', 'अँगूठा व अँगुलियों का मान', 'ज्ञात की जाने वाली दिशा', 'परीक्षा जाल व सटीक उत्तर'],
      },
      rows: [
        [{ en: '**Right-Hand Thumb / Corkscrew (`12.2.2`)**', hi: '**दक्षिण-हस्त अंगुष्ठ / कॉर्कस्क्रू नियम**' }, { en: 'Thumb = Current `I` | Curled fingers = Field `B`', hi: 'अँगूठा = धारा `I` | लिपटी अँगुलियाँ = क्षेत्र `B`' }, { en: 'Magnetic field circular sense (`wire / loop`)', hi: 'सीधे तार या पाश के चुंबकीय क्षेत्र की दिशा' }, { en: '**Ex 12.1 (`E → W`)**: **Clockwise from E end**, ACW from W', hi: '**उदा. 12.1 (`पूर्व→पश्चिम`)**: **पूर्वी सिरे से दक्षिणावर्त**' }],
        [{ en: '**Clockwise Table Loop (`p.223 Q1`)**', hi: '**मेज पर दक्षिणावर्त पाश (`पृ. 223 Q1`)**' }, { en: 'Wrap right fingers along **clockwise** ring', hi: 'दक्षिणावर्त धारा के साथ अँगुलियाँ मोड़ें' }, { en: 'Field inside vs outside table loop', hi: 'पाश के भीतर बनाम बाहर चुंबकीय क्षेत्र' }, { en: '**Inside: Perpendicular DOWNWARDS** | **Outside: UPWARDS**', hi: '**भीतर: तल के लंबवत अंदर (नीचे)** | **बाहर: ऊपर की ओर**' }],
        [{ en: '**Fleming’s Left-Hand Rule (`12.3`)**', hi: '**फ्लेमिंग का वामहस्त नियम (`चित्र 12.13`)**' }, { en: '**Forefinger = B** | **Middle = I** | **Thumb = Force F**', hi: '**तर्जनी = क्षेत्र `B`**, **मध्यमा = धारा `I`**, **अँगूठा = बल `F`**' }, { en: 'Direction of Force / Motion on current wire', hi: 'बाह्य चुंबकीय क्षेत्र में चालक पर बल की दिशा' }, { en: 'All 3 perpendicular (**`90°` peak force**; `0° = zero force`)', hi: 'तीनों परस्पर लंबवत (`90° पर बल अधिकतम` — Shift 22)' }],
        [{ en: '**Electron vs Positive Charge (`Ex 12.2 / Q3`)**', hi: '**इलेक्ट्रॉन बनाम अल्फा / प्रोटॉन (`उदा. 12.2`)**' }, { en: '**Electron (`-`)**: `I` **OPPOSITE** motion! **α / Proton (`+`)**: same', hi: '**इलेक्ट्रॉन (`-`)**: धारा `I` गति के **विपरीत**! **`+` कण**: समान' }, { en: 'True Lorentz deflection via Left-Hand Rule', hi: 'सही विक्षेप व क्षेत्र दिशा निर्धारण' }, { en: '**Ex 12.2**: **INTO page (`d`)** | **p.225 Q3 (`α`)**: **UPWARDS (`d`)** | **Ex Q6**: **DOWN (`Vert.`)**', hi: '**उदा. 12.2**: **भीतर (`d`)** | **Q3 (`α`)**: **उपरिमुखी (`d`)** | **अभ्यास Q6**: **अधोमुखी**' }],
      ],
    },
    {
      id: 'tbl-12-3',
      title: {
        en: 'Conductor Force Magnitude, Proton Motion Laws & Medical Bio-Magnetism (`Sec 12.3`, p.224–225)',
        hi: 'चालक पर बल के कारक, स्वतंत्र प्रोटॉन गुण एवं चिकित्सा चुंबकत्व (`MRI बॉक्स`, पृ. 224–225)',
      },
      headers: {
        en: ['Physical Phenomenon', 'Exact Relationship / Governing Principle', 'What Changes (`✓`)', 'What Stays Constant (`✗`) / Key Data'],
        hi: ['भौतिक परिघटना', 'मुख्य सूत्र व सिद्धांत', 'क्या परिवर्तित होता है (`✓`)', 'क्या अपरिवर्तित रहता है (`✗`) / आँकड़ा'],
      },
      rows: [
        [{ en: '**Al Rod Displacement (`Act 12.7`)**', hi: '**छड़ AB का विस्थापन (`क्र. 12.7`)**' }, { en: 'Force rises with Current `I`, Field `B`, Length `L` (`sin θ`)', hi: 'बल `I`, चुंबक प्रबलता `B` व लंबाई `L` बढ़ाने पर बढ़े' }, { en: 'Reversing `I` OR poles reverses `F` (`Ex: I ×2 ⇒ F ×2`)', hi: '`I` या `B` पलटने पर दिशा उलटे (`I दोगुना ⇒ F दोगुना`)' }, { en: 'Peak at **`90°`**, **ZERO when `I ∥ B` (`0° / 180°`)**', hi: '**`90°` पर अधिकतम**, **`0°` समांतर पर बल शून्य**' }],
        [{ en: '**Free Proton in Uniform `B` (`p.225 Q1`)**', hi: '**चुंबकीय क्षेत्र में मुक्त प्रोटॉन (`पृ. 225 Q1`)**' }, { en: 'Magnetic force always acts **`⊥` to instantaneous velocity**', hi: 'चुंबकीय बल सदैव वेग दिशा के `90°` लंबवत लगे' }, { en: '**Velocity (`c`) & Momentum (`d`) BOTH change**!', hi: '**वेग (`c`) एवं संवेग (`d`) दोनों बदल जाते हैं!**' }, { en: '**Mass (`a`) & Speed / Kinetic Energy (`b`) UNCHANGED**!', hi: '**द्रव्यमान व चाल (`गतिज ऊर्जा`) अपरिवर्तित रहते हैं!**' }],
        [{ en: '**Bio-Magnetism & MRI (`p.225 Box`)**', hi: '**औषध में चुंबकत्व व MRI (`पृ. 225 बॉक्स`)**' }, { en: 'Weak ionic nerve currents generate temporary bio-B fields', hi: 'तंत्रिका कोशिकाओं में दुर्बल आयन धाराओं से अस्थायी क्षेत्र' }, { en: '**Heart & Brain** internal field patterns imaged safely', hi: '**हृदय व मस्तिष्क** के भीतरी अंगों के प्रतिबिंब (`निदान`)' }, { en: 'Bio-field is **`one-billionth (10⁻⁹)` of Earth’s magnetic field**!', hi: 'तीव्रता = **पृथ्वी के चुंबकीय क्षेत्र का एक अरबवाँ भाग**!' }],
      ],
    },
    {
      id: 'tbl-12-4',
      title: {
        en: 'Indian Domestic AC Supply (`Fig 12.15`), Wire Colour Codes & Branch Circuits (`Sec 12.4`)',
        hi: 'भारतीय घरेलू AC विद्युत परिपथ (`चित्र 12.15`), तार रंग कोड व शाखा परिपथ तालिका',
      },
      headers: {
        en: ['Circuit Wire / Component', 'Standard Colour / Specification (`India`)', 'Connection Topology', 'Exact Role & NCERT Exam Point'],
        hi: ['घरेलू तार / अवयव', 'निर्धारित रंग / मान (`भारत`)', 'परिपथ संयोजन', 'सटीक कार्य व परीक्षा बिंदु'],
      },
      rows: [
        [{ en: '**Live Wire (`विद्युन्मय`)**', hi: '**विद्युन्मय तार (`Live`)**' }, { en: '**RED insulation (`लाल`)** — `+ve` at **`220 V, 50 Hz`**', hi: '**लाल आवरण (`धनात्मक`)** — **`220 V, 50 Hz AC`**' }, { en: 'Mains -> Mains Fuse -> kWh Meter -> Main Switch', hi: 'मेन्स → मुख्य फ्यूज → विद्युतमापी → मुख्य स्विच' }, { en: 'Supplies high alternating potential (`Ex Q3b traps Green!`)', hi: 'उच्च विभव ले आता (**अभ्यास 3b में हरा कहना गलत**)' }],
        [{ en: '**Neutral Wire (`उदासीन`)**', hi: '**उदासीन तार (`Neutral`)**' }, { en: '**BLACK insulation (`काला`)** — `-ve` return line', hi: '**काला आवरण (`ऋणात्मक`)** — परिपथ पूर्ण कर वापसी' }, { en: 'Provides `220 V` PD across Live & Neutral', hi: 'लाल व काले के मध्य **`220 V` विभवांतर**' }, { en: 'Touch with bare Live wire causes **Short Circuit**!', hi: 'लाल व काला सीधे सटें तो तुरंत **लघुपथन**!' }],
        [{ en: '**Earth Wire (`भूसंपर्क`)**', hi: '**भूसंपर्क तार (`Earth`)**' }, { en: '**GREEN insulation (`हरा`)** -> buried metal plate', hi: '**हरा आवरण** → भूमि में गहराई पर धातु प्लेट' }, { en: 'Connected to **metallic body** of iron/toaster/fridge', hi: '**इस्त्री, टोस्टर, फ्रिज, पंखे के धातु आवरण** से जुड़ा' }, { en: '**Low-resistance path** keeps casing at **Earth potential (`0 V`, Ex Q9)**', hi: '**अल्प प्रतिरोध पथ** से धारा क्षरण में **शॉक से बचाव (`अभ्यास Q9`)**' }],
        [{ en: '**Two Branch Ratings (`Parallel`)**', hi: '**दो समानांतर परिपथ (`5A / 15A`)**' }, { en: '**`15 A`**: Geyser, Air Cooler | **`5 A`**: Bulbs, Fans', hi: '**`15 A`**: गीज़र, कूलर | **`5 A`**: बल्ब, पंखा' }, { en: '**PARALLEL (`पार्श्वक्रम`)** between Live & Neutral', hi: '**पार्श्वक्रम** + हर साधित्र का अलग ऑन/ऑफ स्विच' }, { en: 'Ensures **identical `220 V` across every appliance**', hi: 'सभी साधित्रों को **समान `220 V` वोल्टता** प्राप्त हो' }],
      ],
    },
    {
      id: 'tbl-12-5',
      title: {
        en: 'Domestic Electrical Faults, Fuse Working & `p.227 Q2` Numerical Diagnosis (`Sec 12.4`)',
        hi: 'घरेलू विद्युत दोष (`लघुपथन व अतिभारण`), फ्यूज कार्यविधि एवं `पृ. 227 Q2` आंकिक सारणी',
      },
      headers: {
        en: ['Fault / Safety Measure', 'Trigger / Physical Mechanism', 'Effect on Current `I` & Resistance `R`', 'Preventive Action / NCERT Solved Example'],
        hi: ['दोष / सुरक्षा उपाय', 'उत्पन्न होने का कारण', 'धारा `I` व प्रतिरोध `R` पर प्रभाव', 'बचाव उपाय व NCERT आंकिक'],
      },
      rows: [
        [{ en: '**Short Circuit (`लघुपथन`)**', hi: '**लघुपथन (`Short Circuit`)**' }, { en: 'Live & Neutral touch directly (`damaged insulation / faulty appliance`)', hi: 'तारों का रोधन खराब होने या दोष से **लाल+काला सीधा मिलन**' }, { en: 'Path resistance **`R ≈ 0` -> Current surges heavily (`Ex Q2c`)**!', hi: '**प्रतिरोध लगभग शून्य → धारा अकस्मात बहुत अधिक बढ़े (`Q2c`)**!' }, { en: '**Series Fuse** melts breaks circuit; inspect insulation', hi: '**विद्युत फ्यूज** तुरंत टूट परिपथ बचाए (`अभ्यास Q8`)' }],
        [{ en: '**Overloading (`अतिभारण`)**', hi: '**अतिभारण (`Overloading`)**' }, { en: 'Short circuit OR accidental mains voltage surge OR excess appliances on 1 socket', hi: 'लघुपथन, वोल्टता उछाल या **एक ही सॉकेट पर अनेक भारी लोड**' }, { en: 'Drawn current exceeds wire/fuse safe rating (`I > I_max`)', hi: 'अनुमत धारा से अधिक धारा प्रवाहित हो तार गर्म' }, { en: 'Use separate `15A/5A` sockets; avoid multi-plug crowding (`p.227 Q3`)', hi: 'एक सॉकेट पर कई भारी यंत्र न लगाएँ (`पृ. 227 Q3`)' }],
        [{ en: '**Electric Fuse (`Joule Heat`)**', hi: '**विद्युत फ्यूज (`जूल तापन`)**' }, { en: 'Series wire melts at **`I²Rt` Joule heating** on excess `I`', hi: 'अवांछित उच्च धारा पर **जूल तापन से फ्यूज पिघलना**' }, { en: 'Breaks circuit path dropping fault current to **ZERO**', hi: 'परिपथ टूटने से धारा शून्य होकर यंत्र जलने से बचें' }, { en: '**`p.227 Q2`: `2 kW` oven @ `220 V` on `5 A` draws `9.09 A` ⇒ Fuse blows!**', hi: '**`पृ. 227 Q2`: `2 kW` तंदूर `220 V` पर `9.09 A > 5 A` खींचेगा ⇒ फ्यूज टूटेगा!**' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.218 Q1',
      q: { en: 'Why does a compass needle get deflected when brought near a bar magnet?', hi: 'चुंबक के निकट लाने पर दिक्सूचक की सुई विक्षेपित क्यों हो जाती है?' },
      a: { en: 'A compass needle itself is a **small bar magnet**. Inside the surrounding magnetic field of another magnet, **like poles repel and unlike poles attract**, exerting torque that deflects the needle.', hi: 'दिक्सूची की सुई स्वयं एक **छोटा छड़ चुंबक** होती है। किसी चुंबक के चुंबकीय क्षेत्र में लाने पर **सजातीय ध्रुवों में प्रतिकर्षण व विजातीय ध्रुवों में आकर्षण** बल से सुई विक्षेपित हो जाती है।' },
    },
    {
      num: 'p.222 Q1',
      q: { en: 'Draw magnetic field lines around a bar magnet.', hi: 'किसी छड़ चुंबक के चारों ओर चुंबकीय क्षेत्र रेखाएँ खींचिए।' },
      a: { en: 'See **Interactive SVG Plate 2 (`Fig 12.4`)**: smooth **closed curves emerging from N and entering S outside**, returning **S → N inside**, crowded densely at poles and never intersecting!', hi: '**SVG प्लेट 2 (`चित्र 12.4`)** देखें: चुंबक के **बाहर उत्तर (`N`) से दक्षिण (`S`)** व **भीतर `S → N`**, ध्रुवों पर सघन तथा सतत बंद वक्र जो कभी नहीं काटते!' },
    },
    {
      num: 'p.222 Q2',
      q: { en: 'List the properties of magnetic field lines.', hi: 'चुंबकीय क्षेत्र रेखाओं के गुणों की सूची बनाइए।' },
      a: { en: '**(1)** Continuous **closed curves** (`N→S` outside, `S→N` inside); **(2)** Tangent/North compass shows direction; **(3)** **Closeness shows field strength** (`strongest near poles`); **(4)** **Never intersect** each other.', hi: '**(1)** बाहर `N→S` व भीतर `S→N` चलकर **बंद वक्र** बनाती हैं; **(2)** निकटता **क्षेत्र प्रबलता** दिखाती है; **(3)** दिक्सूची उत्तर ध्रुव दिशा बताए; **(4)** दो रेखाएँ **कभी प्रतिच्छेद नहीं करतीं**!' },
    },
    {
      num: 'p.222 Q3',
      q: { en: 'Why don’t two magnetic field lines intersect each other?', hi: 'दो चुंबकीय क्षेत्र रेखाएँ एक-दूसरे को प्रतिच्छेद क्यों नहीं करतीं?' },
      a: { en: 'If they intersected, a compass placed at the crossing point would have to **point in two different directions simultaneously**, which is physically impossible (`ALP Shift 3 PYQ`).', hi: 'यदि वे एक-दूसरे को काटतीं, तो प्रतिच्छेद बिंदु पर रखने पर दिक्सूची की सुई को **एक ही समय दो दिशाओं में संकेत करना पड़ता — जो संभव नहीं है**!' },
    },
    {
      num: 'p.223 Q1',
      q: { en: 'Consider a circular loop of wire lying in the plane of the table. Let the current pass through the loop clockwise. Apply the right-hand rule to find out the direction of the magnetic field inside and outside the loop.', hi: 'मेज के तल में पड़े तार के वृत्ताकार पाश पर विचार कीजिए। मान लीजिए इस पाश में दक्षिणावर्त विद्युत धारा प्रवाहित हो रही है। दक्षिण-हस्त नियम को लागू करके पाश के भीतर तथा बाहर चुंबकीय क्षेत्र की दिशा ज्ञात कीजिए।' },
      a: { en: 'Applying **Right-Hand Thumb Rule** along the **clockwise** loop (`p.223`): **INSIDE the loop**: field is directed **perpendicularly DOWNWARDS (`into plane of table`)**; **OUTSIDE the loop**: field points **perpendicularly UPWARDS (`out of plane of table`)**!', hi: '**दक्षिणावर्त (`Clockwise`)** धारा पर दक्षिण-हस्त नियम लगाने से: **पाश के भीतर** क्षेत्र **मेज के तल के लंबवत अंदर की ओर (`नीचे`)**, तथा **पाश के बाहर** क्षेत्र **तल के लंबवत बाहर की ओर (`ऊपर`)** होता है!' },
    },
    {
      num: 'p.223 Q2',
      q: { en: 'The magnetic field in a given region is uniform. Draw a diagram to represent it.', hi: 'किसी दिए गए क्षेत्र में चुंबकीय क्षेत्र एकसमान है। इसे निरूपित करने के लिए आरेख खींचिए।' },
      a: { en: 'Represented by **parallel and equidistant straight lines** pointing in the same direction (`just like inside the solenoid shown in Interactive SVG Plate 3 — Tech Shift 1 & 7`!).', hi: 'एकसमान चुंबकीय क्षेत्र को **समान दिशा वाले समांतर एवं समदूरस्थ सरल रेखाओं** से दर्शाया जाता है (`जैसा परिनालिका के भीतर प्लेट 3 में दिखता है`)!' },
    },
    {
      num: 'p.223 Q3',
      q: { en: 'Choose the correct option. The magnetic field inside a long straight solenoid-carrying current: (a) is zero, (b) decreases as we move towards its end, (c) increases as we move towards its end, (d) is the same at all points.', hi: 'सही विकल्प चुनिए — किसी विद्युत धारावाही सीधी लंबी परिनालिका के भीतर चुंबकीय क्षेत्र: (a) शून्य होता है (b) सिरे की ओर घटता है (c) सिरे की ओर बढ़ता है (d) सभी बिंदुओं पर समान होता है।' },
      a: { en: '**Correct Option `(d)`: is the SAME at all points** (`parallel straight field lines inside indicate a strong UNIFORM magnetic field everywhere inside` — **Tech Shift 9 PYQ**!).', hi: '**सही विकल्प `(d)`: सभी बिंदुओं पर समान होता है** (`परिनालिका के भीतर समांतर सरल रेखाएँ एकसमान प्रबल क्षेत्र दर्शाती हैं` — **Tech Shift 9 PYQ**)।' },
    },
    {
      num: 'p.225 Q1',
      q: { en: 'Which of the following property of a proton can change while it moves freely in a magnetic field? (`There may be more than one correct answer.`) (a) mass (b) speed (c) velocity (d) momentum', hi: 'किसी प्रोटॉन का निम्नलिखित में से कौन-सा गुण किसी चुंबकीय क्षेत्र में मुक्त गति करते समय परिवर्तित हो जाता है? (`एक से अधिक सही उत्तर हो सकते हैं`): (a) द्रव्यमान, (b) चाल, (c) वेग, (d) संवेग' },
      a: { en: '**Correct Answers: `(c) velocity` AND `(d) momentum`**! Magnetic force acts `⊥` to motion changing direction continuously (`changing vector Velocity & Momentum = mv`), while **mass & scalar speed remain unchanged**.', hi: '**सही उत्तर: `(c) वेग` एवं `(d) संवेग` दोनों!** चुंबकीय बल सदैव गति के लंबवत लगकर दिशा बदलता है (अतः सदिश वेग व संवेग `mv` बदलते हैं), पर **द्रव्यमान व अदिश चाल अचर** रहते हैं!' },
    },
    {
      num: 'p.225 Q2',
      q: { en: 'In Activity 12.7, how do we think the displacement of rod AB will be affected if (`i`) current in rod AB is increased; (`ii`) a stronger horseshoe magnet is used; and (`iii`) length of the rod AB is increased?', hi: 'क्रियाकलाप 12.7 में हमारे विचार से छड़ AB का विस्थापन किस प्रकार प्रभावित होगा यदि (`i`) धारा में वृद्धि हो, (`ii`) अधिक प्रबल नाल चुंबक प्रयोग किया जाए, (`iii`) छड़ AB की लंबाई बढ़ाई जाए?' },
      a: { en: 'Force `F ∝ B I L`: in **ALL three cases (`i, ii, iii`)**, the force and **displacement of rod `AB` will INCREASE**!', hi: 'बल `F = B I L` के कारण **तीनों ही स्थितियों (`i, ii, iii`)** में छड़ `AB` पर बल और उसका **विस्थापन बढ़ जाएगा**!' },
    },
    {
      num: 'p.225 Q3',
      q: { en: 'A positively-charged particle (`alpha-particle`) projected towards west is deflected towards north by a magnetic field. The direction of magnetic field is (`a`) towards south (`b`) towards east (`c`) downward (`d`) upward', hi: 'पश्चिम की ओर प्रक्षेपित कोई धनावेशित कण (`अल्फा-कण`) किसी चुंबकीय क्षेत्र द्वारा उत्तर की ओर विक्षेपित हो जाता है। चुंबकीय क्षेत्र की दिशा क्या है? (`a`) दक्षिण (`b`) पूर्व (`c`) अधोमुखी (`d`) उपरिमुखी' },
      a: { en: '**Answer `(d) UPWARD (`उपरिमुखी`)`!** Since alpha-particle is positive (`+`), current `I` = **West** (`middle finger`). Force `F` = **North** (`thumb`). By Fleming’s Left-Hand Rule, forefinger (`field B`) points **UPWARDS**!', hi: '**उत्तर `(d) उपरिमुखी (`ऊपर की ओर`)`!** धनावेशित अल्फा-कण से धारा `I` = **पश्चिम** (`मध्यमा`), बल `F` = **उत्तर** (`अँगूठा`) → फ्लेमिंग वामहस्त नियम से तर्जनी (`चुंबकीय क्षेत्र B`) **ऊपर की ओर** इंगित करेगी!' },
    },
    {
      num: 'p.227 Q1',
      q: { en: 'Name two safety measures commonly used in electric circuits and appliances.', hi: 'विद्युत परिपथों तथा साधित्रों में सामान्यतः उपयोग होने वाले दो सुरक्षा उपायों के नाम लिखिए।' },
      a: { en: '**(1) Electric Fuse** (`prevents damage during overloading & short-circuiting`) and **(2) Earthing (`Green Earth wire`)** connecting metallic appliance casings safely to ground (`prevents severe shock`).', hi: '**(1) विद्युत फ्यूज** (`अतिभारण व लघुपथन से रक्षा`) तथा **(2) भूसंपर्कण / अर्थिंग (`हरा तार`)** जो धातु के आवरण वाले यंत्रों से विद्युत आघात बचाता है।' },
    },
    {
      num: 'p.227 Q2',
      q: { en: 'An electric oven of `2 kW` power rating is operated in a domestic electric circuit (`220 V`) that has a current rating of `5 A`. What result do you expect? Explain.', hi: '`2 kW` शक्ति अनुमतांक का एक विद्युत तंदूर किसी घरेलू विद्युत परिपथ (`220 V`) में प्रचालित किया जाता है जिसका धारा अनुमतांक `5 A` है, इससे किस परिणाम की अपेक्षा करते हैं? स्पष्ट कीजिए।' },
      a: { en: '`P = 2 kW = 2000 W`, `V = 220 V` -> Drawn current **`I = P / V = 2000 / 220 = 9.09 A`**. Since `9.09 A` greatly exceeds the **`5 A` circuit rating**, **overloading occurs**, Joule heating melts the fuse wire and **breaks the circuit** (`or wires overheat risking fire without a fuse`)!', hi: '`P = 2000 W`, `V = 220 V` → धारा **`I = P / V = 2000 / 220 = 9.09 A`**! चूँकि यह परिपथ की **`5 A` सीमा से काफी अधिक** है, **अतिभारण** होगा व जूल तापन से **फ्यूज पिघलकर परिपथ तोड़ देगा** (`बिना फ्यूज आग लग सकती है`)।' },
    },
    {
      num: 'p.227 Q3',
      q: { en: 'What precaution should be taken to avoid the overloading of domestic electric circuits?', hi: 'घरेलू विद्युत परिपथों में अतिभारण से बचाव के लिए क्या सावधानी बरतनी चाहिए?' },
      a: { en: '**(1)** Never connect too many appliances (`especially high-power heaters/ovens/geysers`) into a **single socket**; **(2)** Do not switch on too many heavy appliances simultaneously on a `5 A` circuit (`use dedicated 15 A line`); **(3)** Keep damaged wire insulation replaced & install properly rated **electric fuses**.', hi: '**(1)** एक ही सॉकेट से **अनेक साधित्र कभी न जोड़ें**; **(2)** `5 A` परिपथ पर उच्च-शक्ति यंत्र (`गीज़र/कूलर/तंदूर`) न चलाकर पृथक् `15 A` लाइन लें; **(3)** खराब रोधन वाले तार बदलें व सही अनुमतांक का **फ्यूज** लगाएँ।' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'Which of the following correctly describes the magnetic field near a long straight wire?\n(a) The field consists of straight lines perpendicular to the wire.\n(b) The field consists of straight lines parallel to the wire.\n(c) The field consists of radial lines originating from the wire.\n(d) The field consists of concentric circles centred on the wire.', hi: 'निम्नलिखित में से कौन किसी लंबे विद्युत धारावाही तार के निकट चुंबकीय क्षेत्र का सही वर्णन करता है?\n(a) रेखाएँ तार के लंबवत सीधी होती हैं।\n(b) रेखाएँ तार के समांतर सीधी होती हैं।\n(c) रेखाएँ अरीय होती हैं जिनका उद्भव तार से होता है।\n(d) संकेंद्री क्षेत्र रेखाओं का केंद्र तार होता है।' },
      a: { en: '**Correct Answer: `(d)` (`jhsc1an Verified ✓`)** — Magnetic field around a long straight current-carrying conductor forms **concentric circles centred directly on the wire** (`Activity 12.5, Fig 12.6`).', hi: '**सही उत्तर: `(d)` (`उत्तरमाला सत्यापित ✓`)** — लंबे सीधे धारावाही तार के चारों ओर चुंबकीय क्षेत्र रेखाएँ **तार पर केंद्रित संकेंद्री वृत्त** होती हैं (`चित्र 12.6`)।' },
    },
    {
      num: '2',
      q: { en: 'At the time of short circuit, the current in the circuit\n(a) reduces substantially.  (b) does not change.\n(c) increases heavily.  (d) vary continuously.', hi: 'लघुपथन के समय परिपथ में विद्युत धारा का मान —\n(a) बहुत कम हो जाता है।  (b) परिवर्तित नहीं होता।\n(c) बहुत अधिक बढ़ जाता है।  (d) निरंतर परिवर्तित होता है।' },
      a: { en: '**Correct Answer: `(c)` increases heavily (`jhsc1an Verified ✓`)** — Live and Neutral touch directly dropping circuit resistance near zero, causing **sudden huge surge in current** (`Sec 12.4`).', hi: '**सही उत्तर: `(c)` बहुत अधिक बढ़ जाता है (`उत्तरमाला सत्यापित ✓`)** — विद्युन्मय व उदासीन तार के सीधे संपर्क से प्रतिरोध लगभग शून्य होने पर **धारा अकस्मात बहुत अधिक बढ़ जाती है**।' },
    },
    {
      num: '3',
      q: { en: 'State whether the following statements are true or false.\n(a) The field at the centre of a long circular coil carrying current will be parallel straight lines.\n(b) A wire with a green insulation is usually the live wire of an electric supply.', hi: 'निम्नलिखित प्रकथनों में कौन-सा सही (`सत्य`) है तथा कौन-सा गलत (`असत्य`) है?\n(a) किसी लंबी वृत्ताकार विद्युत धारावाही कुंडली के केंद्र पर चुंबकीय क्षेत्र समांतर सीधी रेखाएँ होता है।\n(b) हरे विद्युतरोधन वाला तार प्रायः विद्युन्मय तार होता है।' },
      a: { en: '**Verified Answer (`jhsc1an ✓`)**:\n• **`(a)` TRUE (`सत्य`)** — Just like a long solenoid / centre of current circular coil (`Sec 12.2.3–12.2.4`), field lines inside centre are parallel & straight (`uniform`).\n• **`(b)` FALSE (`असत्य`)** — **Green wire is the EARTH wire (`भूसंपर्क तार`)**! The **Live (`विद्युन्मय`) wire carries RED insulation**.', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n• **`(a)` सत्य (`True`)** — लंबी वृत्ताकार कुंडली/परिनालिका के केंद्र पर क्षेत्र रेखाएँ समांतर सीधी होती हैं।\n• **`(b)` असत्य (`False`)** — **हरा तार भूसंपर्क (`Earth`) तार** होता है; **विद्युन्मय (`Live`) तार पर लाल आवरण** होता है!' },
    },
    {
      num: '4',
      q: { en: 'List two methods of producing magnetic fields.', hi: 'चुंबकीय क्षेत्र को उत्पन्न करने के दो तरीकों की सूची बनाइए।' },
      a: { en: '**(1)** Permanent **Bar Magnet / Horseshoe Magnet**; **(2)** Passing **electric current through a conductor** (`straight wire, circular loop, or current-carrying solenoid / electromagnet`).', hi: '**(1)** स्थायी चुंबक (`छड़ चुंबक / नाल चुंबक`) द्वारा; **(2)** चालक तार, वृत्ताकार पाश या **विद्युत धारावाही परिनालिका / विद्युत चुंबक** में विद्युत धारा प्रवाहित करके!' },
    },
    {
      num: '5',
      q: { en: 'When is the force experienced by a current–carrying conductor placed in a magnetic field largest?', hi: 'किसी चुंबकीय क्षेत्र में स्थित विद्युत धारावाही चालक पर आरोपित बल कब अधिकतम होता है?' },
      a: { en: 'When the direction of **electric current is PERPENDICULAR (`at right angles / 90°`)** to the direction of the **magnetic field** (`Act 12.7, Tech 2024 Shift 22 PYQ`).', hi: 'जब विद्युत धारा की दिशा तथा चुंबकीय क्षेत्र की दिशा **परस्पर लंबवत (`90° के कोण पर`)** हों (`पृ. 224`)!' },
    },
    {
      num: '6',
      q: { en: 'Imagine that you are sitting in a chamber with your back to one wall. An electron beam, moving horizontally from back wall towards the front wall, is deflected by a strong magnetic field to your right side. What is the direction of magnetic field?', hi: 'मान लीजिए आप किसी चैंबर में अपनी पीठ को किसी एक दीवार से लगाकर बैठे हैं। कोई इलेक्ट्रॉन पुंज आपके पीछे की दीवार से सामने वाली दीवार की ओर क्षैतिजतः गमन करते हुए किसी प्रबल चुंबकीय क्षेत्र द्वारा आपके दाईं ओर विक्षेपित हो जाता है। चुंबकीय क्षेत्र की दिशा क्या है?' },
      a: { en: '**Answer (`jhsc1an Verified ✓`): Vertically DOWNWARDS (`ऊर्ध्वाधर अधोमुखी`)**! Since **electrons** move Back → Front, conventional **Current `I` runs Front → Back** (`middle finger`). Force `F` = **Right** (`thumb`). Fleming’s Left-Hand forefinger points **DOWNWARDS**!', hi: '**उत्तर (`उत्तरमाला सत्यापित ✓`): ऊर्ध्वाधर अधोमुखी (`नीचे की ओर`)!** इलेक्ट्रॉन पीछे से सामने आ रहे हैं अतः पारंपरिक **धारा `I` सामने से पीछे** होगी (`मध्यमा`), तथा बल `F` = **दाईं ओर** (`अँगूठा`) → फ्लेमिंग वामहस्त की तर्जनी (`क्षेत्र B`) **ऊर्ध्वाधर नीचे की ओर** संकेत करेगी!' },
    },
    {
      num: '7',
      q: { en: 'State the rule to determine the direction of a (`i`) magnetic field produced around a straight conductor-carrying current, (`ii`) force experienced by a current-carrying straight conductor placed in a magnetic field which is perpendicular to it.', hi: 'निम्नलिखित की दिशा को निर्धारित करने वाला नियम लिखिए — (`i`) किसी विद्युत धारावाही सीधे चालक के चारों ओर उत्पन्न चुंबकीय क्षेत्र, (`ii`) किसी चुंबकीय क्षेत्र में क्षेत्र के लंबवत स्थित विद्युत धारावाही सीधे चालक पर आरोपित बल।' },
      a: { en: '**Verified Answer (`jhsc1an ✓`)**:\n• **`(i)` Right-Hand Thumb Rule (`दक्षिण-हस्त अंगुष्ठ नियम` / Maxwell’s Corkscrew Rule)**: Hold wire in right hand with thumb along current `I` -> curled fingers give circular magnetic field `B`.\n• **`(ii)` Fleming’s Left-Hand Rule (`फ्लेमिंग का वामहस्त नियम`)**: Stretch left thumb, forefinger & middle finger mutually `90°` -> Forefinger = `B`, Middle = `I`, **Thumb = Force `F`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n• **`(i)` दक्षिण-हस्त अंगुष्ठ नियम (`अथवा कॉर्कस्क्रू नियम`)**: दाएँ हाथ का अँगूठा धारा की दिशा में रखने पर लिपटी अँगुलियाँ चुंबकीय क्षेत्र की दिशा बताती हैं।\n• **`(ii)` फ्लेमिंग का वामहस्त नियम**: बाएँ हाथ की तर्जनी (`B`), मध्यमा (`I`) व अँगूठे (`F`) को परस्पर `90°` लंबवत फैलाने पर अँगूठा बल की दिशा बताता है!' },
    },
    {
      num: '8',
      q: { en: 'When does an electric short circuit occur?', hi: 'किसी विद्युत परिपथ में लघुपथन कब होता है?' },
      a: { en: 'A **short circuit** happens whenever the **Live (`red`) wire and Neutral (`black`) wire come into direct contact** (`caused by damaged wire insulation or a fault inside an appliance`), dropping resistance abruptly and triggering a dangerous current surge (`p.226`).', hi: 'जब तारों का विद्युतरोधन नष्ट होने या किसी साधित्र में दोष के कारण **विद्युन्मय (`लाल`) तार तथा उदासीन (`काला`) तार दोनों सीधे संपर्क में आ जाते हैं**, तब प्रतिरोध शून्य होने से धारा अचानक अत्यधिक बढ़ जाती है — इसे **लघुपथन** कहते हैं।' },
    },
    {
      num: '9',
      q: { en: 'What is the function of an earth wire? Why is it necessary to earth metallic appliances?', hi: 'भूसंपर्क तार का क्या कार्य है? धातु के आवरण वाले विद्युत साधित्रों को भूसंपर्कित करना क्यों आवश्यक है?' },
      a: { en: 'The **green Earth wire** connects metallic appliance casings (`electric iron, toaster, table fan, refrigerator`) to a **metal plate buried deep underground**. It offers a **low-resistance conducting path** for any leaked current, maintaining the metallic casing at **Earth potential** so the user **never suffers a severe electric shock** (`p.226`).', hi: 'हरा **भूसंपर्क तार (`Earth Wire`)** धातु आवरण वाले यंत्रों (`इस्त्री, टोस्टर, फ्रिज, पंखा`) को जमीन में गड़ी धातु की प्लेट से जोड़कर **अल्प प्रतिरोध का चालन पथ** देता है — इससे धारा क्षरण होने पर यंत्र का विभव **भूमि के बराबर** बना रहता है और उपयोगकर्ता **गंभीर विद्युत आघात से बचा रहता है**।' },
    },
  ],
  flashcards: [
    { front: { en: 'Magnetic Field Direction Inside vs Outside a Bar Magnet?', hi: 'छड़ चुंबक के भीतर बनाम बाहर चुंबकीय क्षेत्र रेखा की दिशा?' }, back: { en: '**Outside**: **North → South (`N→S`)** | **Inside**: **South → North (`S→N`)** — forming continuous closed curves!', hi: '**बाहर**: **उत्तर → दक्षिण (`N→S`)** | **भीतर**: **दक्षिण → उत्तर (`S→N`)** — सतत बंद वक्र (`कोई एकल ध्रुव नहीं`)!' } },
    { front: { en: 'Why Can’t Two Magnetic Field Lines Ever Intersect?', hi: 'दो चुंबकीय क्षेत्र रेखाएँ कभी एक-दूसरे को क्यों नहीं काटतीं?' }, back: { en: 'If they intersected, a **compass needle at the crossing point would have to point in TWO directions simultaneously**, which is impossible!', hi: 'प्रतिच्छेद बिंदु पर रखी **दिक्सूची को एक ही समय दो दिशाओं की ओर संकेत करना पड़ता**, जो भौतिक रूप से असंभव है!' } },
    { front: { en: 'Field Lines of Straight Wire + `I` & `r` Scaling (`Ex Q1`)?', hi: 'सीधे धारावाही तार के क्षेत्र का आकार व धारा/दूरी नियम (`अभ्यास Q1`)?' }, back: { en: '**Concentric circles centred ON the wire (`Ex Q1d`)** perpendicular to wire! **`B ∝ I`** (`up`) and **`B ∝ 1/r`** (`drops with distance`)!', hi: '**तार पर केंद्रित संकेंद्री वृत्त** (`तार के लंबवत`)! धारा बढ़ने पर क्षेत्र बढ़े (**`B ∝ I`**), दूरी बढ़ने पर घटे (**`B ∝ 1/r`**)!' } },
    { front: { en: 'Circular Loop (`n turns`) vs Long Solenoid (`Inside`) Field?', hi: 'वृत्ताकार कुंडली (`n फेरे`) बनाम लंबी परिनालिका (`भीतर`) का क्षेत्र?' }, back: { en: '**`n`-turn Loop**: **`n × single-turn B`** (`10 turns = 10B`)! **Long Solenoid inside**: **parallel straight lines = UNIFORM (`same at all points`)**!', hi: '**`n` फेरे**: **`n` गुना क्षेत्र**! **परिनालिका के भीतर**: **समांतर सरल रेखाएँ = सभी बिंदुओं पर एकसमान प्रबल क्षेत्र** (`पृ. 223 Q3d`)!' } },
    { front: { en: 'What Core Material Turns a Solenoid into a Strong Electromagnet?', hi: 'परिनालिका के भीतर क्या रखकर प्रबल विद्युत चुंबक बनाया जाता है?' }, back: { en: '**Soft Iron (`नर्म लोहा`, Sec 12.2.4 & p.228)** magnetises inside solenoid multiplying internal field strongly!', hi: 'परिनालिका के भीतर **नर्म लौह-क्रोड (`Soft Iron`, भाग 12.2.4)** रखने से चुंबकीय क्षेत्र बहुत बढ़ जाता है!' } },
    { front: { en: 'When Is Force on Current Conductor Max (`Act 12.7`) & Zero?', hi: 'चुंबकीय क्षेत्र में धारावाही चालक पर बल कब अधिकतम व कब शून्य?' }, back: { en: '**MAX at `90°` (`I ⊥ B`, Tech Shift 22)**; **ZERO when `0°/180°` (`parallel`)**; increases with `I, B, L`!', hi: '**`90°` (`परस्पर लंबवत`) होने पर अधिकतम**; समांतर होने पर शून्य; `I, B, L` बढ़ाने पर बढ़ता है!' } },
    { front: { en: 'Right-Hand Thumb vs Fleming’s Left-Hand (`F-B-I`) Rule (`Ex Q7`)?', hi: 'दक्षिण-हस्त नियम बनाम फ्लेमिंग वामहस्त नियम का भेद (`अभ्यास Q7`)?' }, back: { en: '**Right-Hand Thumb**: Current `I` -> Field `B` | **Fleming Left-Hand**: Fore=`B`, Mid=`I` -> **Thumb = Force `F`**!', hi: '**दायाँ हाथ**: तार का **चुंबकीय क्षेत्र `B`** | **बायाँ हाथ**: तर्जनी=`B`, मध्यमा=`I` → **अँगूठा = बल `F`**!' } },
    { front: { en: 'Electron Direction Trap (`Ex 12.2 / Q6`) & Proton `p.225 Q1`?', hi: 'इलेक्ट्रॉन धारा अपवाद (`उदा. 12.2`) एवं स्वतंत्र प्रोटॉन के गुण (`Q1`)?' }, back: { en: '**Electron `-`**: `I` is **OPPOSITE** e⁻ motion (`Ex 12.2 → into page; Q6 → Down`)! **Free Proton**: **Velocity & Momentum** change (`speed/mass const`)!', hi: '**इलेक्ट्रॉन**: धारा गति के **विपरीत** लें (`उदा. 12.2 भीतर / Q6 अधोमुखी`)! **प्रोटॉन**: **वेग व संवेग** बदले (`चाल व द्रव्यमान अचर`)!' } },
    { front: { en: 'India Domestic Voltage/Freq + Red, Black & Green Wires (`12.4`)?', hi: 'भारत में घरेलू AC वोल्टता/आवृत्ति एवं लाल, काले, हरे तार का नाम?' }, back: { en: '**`220 V, 50 Hz`** | **Red = Live**, **Black = Neutral**, **Green = Earth (`shock protection`)** | **`15 A` Geyser/Cooler vs `5 A` Bulb/Fan** (`Parallel`)!', hi: '**`220 V, 50 Hz`** | **लाल = विद्युन्मय, काला = उदासीन, हरा = भूसंपर्क** | **`15 A` गीज़र/कूलर vs `5 A` बल्ब/पंखा** (`पार्श्वक्रम`)!' } },
    { front: { en: 'Short Circuit Resistance/Current vs `2 kW @ 220V` on `5 A` (`Q2`)?', hi: 'लघुपथन में धारा-प्रतिरोध एवं `2 kW` तंदूर (`220 V`) बनाम `5 A` परिपथ?' }, back: { en: 'Short Circuit (`Live+Neutral touch`): **`R→0` -> Huge Current Surge**! **`2000W / 220V = 9.09 A > 5 A`** -> **Fuse melts (`Joule heat`)**!', hi: 'लघुपथन में **प्रतिरोध ≈ 0 व धारा अत्यंत अधिक**! **`2000/220 = 9.09 A > 5 A`** होने से **फ्यूज पिघल कर परिपथ टूटेगा**!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-p12-1',
      examTag: 'RRB ALP 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.1): Relative Field Strength',
      question: {
        en: 'The relative strength of the magnetic field is indicated by the degree of _________.',
        hi: 'चुंबकीय क्षेत्र की आपेक्षिक प्रबलता को ____________ की कोटि द्वारा दर्शाया जाता है।',
      },
      options: {
        en: ['Closeness of the field lines', 'Number of poles involved', 'Length of the field lines', 'Colour of the filings'],
        hi: ['क्षेत्र रेखाओं की निकटता', 'शामिल ध्रुवों की संख्या', 'क्षेत्र रेखाओं की लंबाई', 'लौह चूर्ण के रंग'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.218`**: The relative strength of magnetic field is shown by the **degree of closeness of field lines** (`stronger where lines are crowded closer`).',
        hi: 'सटीक `NCERT पृ. 218`: चुंबकीय क्षेत्र की आपेक्षिक प्रबलता को **क्षेत्र रेखाओं की निकटता की कोटि** द्वारा दर्शाया जाता है।',
      },
    },
    {
      id: 'pyq-p12-2',
      examTag: 'RRB ALP 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.1): No Two Lines Intersect',
      question: {
        en: 'Which of the following best explains why two magnetic field lines cannot intersect at any point in the space surrounding a magnet?',
        hi: 'निम्नलिखित में से कौन-सा विकल्प सर्वोत्तम ढंग से यह वर्णन करता है कि दो चुंबकीय क्षेत्र रेखाएं किसी चुंबक के चारों ओर आकाश (space) में किसी भी बिंदु पर प्रतिच्छेद क्यों नहीं कर सकती हैं?',
      },
      options: {
        en: ['Because it weakens the magnetic field', 'Because it creates a new magnetic pole', 'Because it means field lines are open curves', 'Because a compass needle would be required to point in two directions at the same time'],
        hi: ['क्योंकि इससे चुंबकीय क्षेत्र दुर्बल हो जाता है', 'क्योंकि इससे एक नया चुंबकीय ध्रुव बनता है', 'क्योंकि इसका अर्थ है कि क्षेत्र रेखाएं विवृत वक्र होती हैं', 'क्योंकि एक कंपास की सुई को एक ही समय में दो दिशाओं में इंगित करना आवश्यक होगा'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim **NCERT `p.218` & `p.222 Q3`**: At an intersection point, the compass needle would have to point towards **two directions**, which is not possible!',
        hi: 'सटीक `पृ. 218`: यदि रेखाएँ प्रतिच्छेद करतीं तो दिक्सूची को **एक ही समय में दो दिशाओं** में संकेत करना पड़ता, जो संभव नहीं है।',
      },
    },
    {
      id: 'pyq-p12-3',
      examTag: 'RRB Group D 2025 Shift 18',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2): Reversing Current Direction',
      question: {
        en: 'What happens to the magnetic field around a straight current-carrying conductor if the direction of the current is reversed?',
        hi: 'यदि एक सीधे धारावाही चालक से प्रवाहित धारा की दिशा को उत्क्रमित किया जाए, तो उसके चारों ओर चुंबकीय क्षेत्र पर क्या प्रभाव पड़ेगा?',
      },
      options: {
        en: ['The magnetic field around the conductor becomes zero.', 'The magnetic field strength doubles around the conductor.', 'The magnetic field direction reverses around the conductor.', 'The magnetic field around the conductor disappears.'],
        hi: ['चालक के चारों ओर चुंबकीय क्षेत्र शून्य हो जाता है', 'चालक के चारों ओर चुंबकीय क्षेत्र सामर्थ्य दोगुना हो जाता है', 'चालक के चारों ओर चुंबकीय क्षेत्र की दिशा उत्क्रम हो जाती है', 'चालक के चारों ओर चुंबकीय क्षेत्र लुप्त हो जाता है'],
      },
      correctIndex: 2,
      solution: {
        en: 'Proven directly in **Activity 12.4 (`p.219`)** & Right-Hand Thumb Rule: reversing electric current direction **reverses the magnetic field direction** around the wire.',
        hi: '`क्रियाकलाप 12.4` व दक्षिण-हस्त नियम से: धारा उलटने पर चालक के चारों ओर **चुंबकीय क्षेत्र की दिशा उत्क्रमित** हो जाती है।',
      },
    },
    {
      id: 'pyq-p12-4',
      examTag: 'RRB Group D 2025 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.1): Straight Wire Factors',
      question: {
        en: 'A student wants to increase the magnetic field strength around a straight conductor carrying current. Which combination of changes will most effectively achieve this?',
        hi: 'एक विद्यार्थी एक सीधे धारावाही चालक के चारों ओर चुंबकीय क्षेत्र सामर्थ्य को बढ़ाना चाहता है। परिवर्तनों के किस संयोजन द्वारा यह सबसे प्रभावी रूप से प्राप्त होगा?',
      },
      options: {
        en: ['Increasing the current and bringing the observation point closer to the conductor.', 'Keeping the current constant and changing the observation point to any location.', 'Decreasing the current and moving the observation point farther from the conductor.', 'Increasing the current while moving the observation point farther away.'],
        hi: ['धारा को बढ़ाते हुए प्रेक्षण बिंदु को चालक के निकट लाना', 'धारा को नियत रखते हुए प्रेक्षण बिंदु को किसी भी स्थान पर बदलना', 'धारा को कम करते हुए प्रेक्षण बिंदु को चालक से दूर ले जाना', 'प्रेक्षण बिंदु को दूर ले जाते हुए धारा को बढ़ाना'],
      },
      correctIndex: 0,
      solution: {
        en: '**Activity 12.5 (`p.220`)**: Straight wire field follows **`B ∝ I / r`** — maximum boost occurs when **increasing current `I`** and **reducing distance `r` (`closer to wire`)**!',
        hi: '`पृ. 220` से `B ∝ I / r` — अतः **धारा बढ़ाने व प्रेक्षण बिंदु को चालक के निकट लाने** से चुंबकीय क्षेत्र प्रबलतम बढ़ेगा।',
      },
    },
    {
      id: 'pyq-p12-5',
      examTag: 'RRB Group D 2025 Shift 24',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.4): Magnetising Soft Iron',
      question: {
        en: 'Why can a solenoid be used to magnetise a piece of soft iron placed inside it?',
        hi: 'किसी परिनालिका का उपयोग उसके अंदर रखे मृदु लोहे के टुकड़े को चुंबकित करने के लिए क्यों किया जा सकता है?',
      },
      options: {
        en: ['Because the solenoid creates a weak and scattered magnetic field inside it', 'Because the solenoid produces a strong and uniform magnetic field inside it', 'Because the solenoid produces a non-uniform field only outside it', 'Because the solenoid blocks magnetic fields from entering soft iron'],
        hi: ['क्योंकि परिनालिका उसके अंदर दुर्बल और प्रकीर्ण चुंबकीय क्षेत्र उत्पन्न करती है', 'क्योंकि परिनालिका उसके अंदर प्रबल और एकसमान चुंबकीय क्षेत्र उत्पन्न करती है', 'क्योंकि परिनालिका केवल उसके बाहर असमान क्षेत्र उत्पन्न करती है', 'क्योंकि परिनालिका चुंबकीय क्षेत्रों को मृदु लोहे में प्रवेश करने से रोकती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `Sec 12.2.4` (`p.223`)**: A **strong uniform magnetic field produced inside a solenoid** magnetises a soft iron piece placed inside -> **Electromagnet**!',
        hi: 'सटीक `भाग 12.2.4`: परिनालिका के अंदर उत्पन्न **प्रबल एवं एकसमान चुंबकीय क्षेत्र** का उपयोग भीतर रखे नर्म लोहे को चुंबकित करने (`विद्युत चुंबक`) में होता है।',
      },
    },
    {
      id: 'pyq-p12-6',
      examTag: 'RRB Group D 2025 Shift 27',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.2): Right-Hand Thumb Rule Setup',
      question: {
        en: 'A student wants to use the Right Hand Thumb Rule to determine the direction of the magnetic field around a current-carrying straight conductor. Which of the following steps is essential in applying the rule correctly?',
        hi: 'एक विद्यार्थी धारावाही सीधे चालक के चारों ओर चुंबकीय क्षेत्र की दिशा निर्धारित करने के लिए दक्षिण-हस्त अंगुष्ठ नियम का उपयोग करना चाहता है। इस नियम को सही रूप से लागू करने के लिए निम्नलिखित में से कौन-सा चरण आवश्यक है?',
      },
      options: {
        en: ['Align the thumb with the magnetic field', 'Use the left hand for orientation', 'Point the thumb in the direction of current', 'Wrap fingers in the direction of the conductor'],
        hi: ['अंगूठे को चुंबकीय क्षेत्र के साथ संरेखित करना', 'अभिविन्यास के लिए वाम हस्त का उपयोग करना', 'अंगूठे को धारा की दिशा में इंगित करना', 'चालक की दिशा में उंगलियों को मोड़ना'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 12.2.2` (`Fig 12.7`)**: Point your right-hand **thumb in the direction of current**; curled fingers then show magnetic field lines.',
        hi: 'सटीक `भाग 12.2.2`: दाएँ हाथ के **अँगूठे को धारा की दिशा में इंगित करना** आवश्यक है; फिर मुड़ी अँगुलियाँ चुंबकीय क्षेत्र बताती हैं।',
      },
    },
    {
      id: 'pyq-p12-7',
      examTag: 'RRB Group D 2025 Shift 27',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.1): Field vs Distance',
      question: {
        en: 'Why are magnetic field lines due to current in a straight conductor denser near the wire and farther apart as distance increases?',
        hi: 'एक सीधे चालक में धारा के कारण चुंबकीय क्षेत्र रेखाएँ तार के निकट सघन क्यों होती हैं और दूरी बढ़ने के साथ दूर क्यों होती जाती हैं?',
      },
      options: {
        en: ['Because of interference from external magnets only', 'Because the magnetic field becomes uniform farther away', 'Because magnetic field strength decreases with increasing distance from the wire', 'Because the current in the wire decreases with distance'],
        hi: ['क्योंकि केवल बाह्य चुंबकों के कारण व्यतिकरण होता है', 'क्योंकि दूरी बढ़ने पर चुंबकीय क्षेत्र एकसमान हो जाता है', 'क्योंकि तार से दूरी बढ़ने के साथ चुंबकीय क्षेत्र सामर्थ्य कम हो जाता है', 'क्योंकि दूरी के साथ तार में प्रवाहित धारा घट जाती है'],
      },
      correctIndex: 2,
      solution: {
        en: '**Activity 12.5 (`p.220`)**: Magnetic field strength produced by a given current **decreases as distance from the wire increases**, shown by wider concentric circles.',
        hi: '`पृ. 220`: चालक से **दूरी बढ़ने के साथ चुंबकीय क्षेत्र सामर्थ्य घटता है**, अतः संकेंद्री वृत्तों का साइज बड़ा (दूर-दूर) हो जाता है।',
      },
    },
    {
      id: 'pyq-p12-8',
      examTag: 'RRB Group D 2025 Shift 28',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.3): Current Reversal on Force',
      question: {
        en: 'A technician reverses the direction of current in a conductor placed in a magnetic field. According to Fleming’s Left Hand Rule, what will happen to the direction of force on the conductor?',
        hi: 'कोई तकनीशियन, चुंबकीय क्षेत्र में स्थित किसी चालक में विद्युत धारा की दिशा को उत्क्रमित कर देता है। फ्लेमिंग के वामहस्त नियम के अनुसार, चालक पर बल की दिशा पर क्या प्रभाव पड़ेगा?',
      },
      options: {
        en: ['The force direction will remain unchanged', 'The force will disappear', 'The force will always increase', 'The force direction will reverse'],
        hi: ['बल की दिशा अपरिवर्तित रहेगी', 'बल समाप्त हो जाएगा', 'बल सदैव बढ़ेगा', 'बल की दिशा उत्क्रमित हो जाएगी'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verified in **Activity 12.7 (`p.224`)**: reversing either current direction OR magnetic pole direction immediately **reverses the force direction** acting on the conductor.',
        hi: '`क्रियाकलाप 12.7` व फ्लेमिंग वामहस्त नियम: धारा की दिशा उत्क्रमित करने पर चालक पर **बल की दिशा भी उत्क्रमित हो जाएगी**।',
      },
    },
    {
      id: 'pyq-p12-9',
      examTag: 'RRB Group D 2025 Shift 31',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.3): Forefinger in Fleming Rule',
      question: {
        en: 'In Fleming’s Left Hand Rule, which finger represents the direction of the magnetic field?',
        hi: 'फ्लेमिंग के वाम-हस्त नियम में, कौन-सी उंगली चुंबकीय क्षेत्र की दिशा को निरूपित करती है?',
      },
      options: {
        en: ['The thumb', 'The middle finger', 'The index finger', 'The ring finger'],
        hi: ['अंगुष्ठ', 'मध्यमा', 'तर्जनी', 'अनामिका'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 12.3` (`Fig 12.13`)**: **Index / Forefinger (`तर्जनी`)** = Magnetic Field (`B`), **Middle (`मध्यमा`)** = Current (`I`), **Thumb (`अँगूठा`)** = Force (`F`).',
        hi: 'सटीक `चित्र 12.13`: **तर्जनी (`Index finger`)** चुंबकीय क्षेत्र, **मध्यमा** धारा तथा **अँगूठा** बल की दिशा बताता है।',
      },
    },
    {
      id: 'pyq-p12-10',
      examTag: 'RRB Group D 2025 Shift 32',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Act 12.5): Tangential Compass Alignment',
      question: {
        en: 'An experiment uses a compass near a straight current-carrying wire. What does the compass needle indicate?',
        hi: 'एक प्रयोग में सीधे धारावाही चालक तार के पास एक दिक्सूचक का उपयोग किया जाता है। दिक्सूचक की सुई क्या संकेत करती है?',
      },
      options: {
        en: ['The compass needle shows no movement', 'The compass needle aligns tangentially to the magnetic field circle around the wire', 'The compass needle points radially away from the wire', 'The compass needle aligns parallel to the wire'],
        hi: ['दिक्सूचक की सुई कोई गति नहीं दिखाती है', 'दिक्सूचक की सुई तार के चारों ओर चुंबकीय क्षेत्र वृत्त के स्पर्शरेखीय संरेखित होती है।', 'दिक्सूचक की सुई अरीय रूप से तार से दूर इंगित करती है।', 'दिक्सूचक की सुई तार के समानांतर संरेखित होती है।'],
      },
      correctIndex: 1,
      solution: {
        en: '**Activity 12.5 (`p.219`)**: Placing a compass at point P on a concentric field circle aligns its North pole **tangentially along the circular field line**.',
        hi: '`क्रियाकलाप 12.5`: दिक्सूची का उत्तर ध्रुव संकेंद्री चुंबकीय क्षेत्र वृत्त की **स्पर्शरेखीय दिशा** में संरेखित होता है।',
      },
    },
    {
      id: 'pyq-p12-11',
      examTag: 'RRB Group D 2025 Shift 35',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.4): Parallel Lines Inside Solenoid',
      question: {
        en: 'Why are field lines inside a solenoid described as parallel straight lines?',
        hi: 'किसी परिनालिका के अंदर क्षेत्र रेखाओं को समानांतर सरल रेखाओं के रूप में क्यों वर्णित किया जाता है?',
      },
      options: {
        en: ['Because parallel lines suggest the field varies greatly', 'Because the magnetic field is the same at all points inside, indicating uniformity', 'Because the current changes direction rapidly', 'Because the solenoid is very short in length'],
        hi: ['क्योंकि समानांतर रेखाएं यह दर्शाती हैं कि क्षेत्र में बहुत अधिक भिन्नता है', 'क्योंकि चुंबकीय क्षेत्र अंदर के सभी बिंदुओं पर समान होता है, जो एकरूपता दर्शाता है', 'क्योंकि धारा तेजी से दिशा बदलती है', 'क्योंकि परिनालिका लंबाई में बहुत छोटी होती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.223`**: Field lines inside a solenoid are parallel straight lines, indicating **magnetic field is the SAME at all points inside (`uniform magnetic field`)**!',
        hi: 'सटीक `पृ. 223`: परिनालिका के भीतर समांतर सरल रेखाएँ निर्दिष्ट करती हैं कि **भीतर सभी बिंदुओं पर चुंबकीय क्षेत्र समान (`एकसमान`)** है।',
      },
    },
    {
      id: 'pyq-p12-12',
      examTag: 'RRB Group D 2025 Shift 35',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.2): Vertical Wire East Point',
      question: {
        en: 'During an experiment, a student applies the Right Hand Thumb Rule to a vertical wire with current flowing upward. What is the direction of the magnetic field at a point directly east of the wire?',
        hi: 'एक प्रयोग के दौरान, एक विद्यार्थी ऊपर की ओर धारा प्रवाहित कर रहे एक ऊर्ध्वाधर तार पर दक्षिण-हस्त अंगुष्ठ नियम लागू करता है। तार के ठीक पूर्व में स्थित एक बिंदु पर चुंबकीय क्षेत्र की दिशा क्या होगी?',
      },
      options: {
        en: ['The magnetic field points towards the south at that point', 'The magnetic field points towards the west at that point', 'The magnetic field points towards the north at that point', 'The magnetic field points towards the east at that point'],
        hi: ['चुंबकीय क्षेत्र उसी बिंदु पर दक्षिण की ओर इंगित होता है', 'चुंबकीय क्षेत्र उसी बिंदु पर पश्चिम की ओर इंगित होता है', 'चुंबकीय क्षेत्र उसी बिंदु पर उत्तर की ओर इंगित होता है', 'चुंबकीय क्षेत्र उसी बिंदु पर पूर्व की ओर इंगित होता है'],
      },
      correctIndex: 2,
      solution: {
        en: 'Right thumb points **Up** (`overhead anticlockwise circles: East -> North -> West -> South`), so directly **East** of wire the tangent points **North**!',
        hi: 'दायाँ अँगूठा ऊपर करने पर मुड़ी अँगुलियाँ वामावर्त घूमती हैं — अतः तार के ठीक **पूर्व** में चुंबकीय क्षेत्र **उत्तर (`North`) की ओर** होगा!',
      },
    },
    {
      id: 'pyq-p12-13',
      examTag: 'RRB Group D 2025 Shift 39',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Ex 12.2 Type): Electron Beam Force Direction',
      question: {
        en: 'An electron enters a uniform magnetic field at right angles to it. If the magnetic field is directed into the page and the electron enters toward the right, what is the direction of the force acting on the electron?',
        hi: 'कोई इलेक्ट्रॉन एकसमान चुंबकीय क्षेत्र में समकोण पर प्रवेश करता है। यदि चुंबकीय क्षेत्र, कागज में भीतर की ओर निर्देशित है और इलेक्ट्रॉन दाईं ओर को प्रवेश करता है, तो इलेक्ट्रॉन पर लगने वाले बल की दिशा क्या होगी?',
      },
      options: {
        en: ['upward', 'out of the page', 'into the page', 'downward'],
        hi: ['उर्ध्वगामी', 'कागज में बाहर की ओर', 'कागज में भीतर की ओर', 'अधोगामी'],
      },
      correctIndex: 3,
      solution: {
        en: '**Ex 12.2 Electron Trap**: Electron travels **Right**, so conventional current `I` flows **Left** (`middle finger`). Magnetic field `B` points **into page** (`forefinger`). Fleming Left-Hand **thumb (`Force`) points DOWNWARDS**!',
        hi: '**उदा. 12.2 नियम**: इलेक्ट्रॉन दाईं ओर जाने से धारा `I` **बाईं ओर (`मध्यमा`)**, व क्षेत्र `B` **भीतर (`तर्जनी`)** → बाएँ हाथ का अँगूठा (**बल**) **नीचे (`अधोगामी`)** बताएगा!',
      },
    },
    {
      id: 'pyq-p12-14',
      examTag: 'RRB Group D 2025 Shift 44',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.4): Solenoid N & S Poles',
      question: {
        en: 'Why does one end of a solenoid behave as a north pole and the other as a south pole?',
        hi: 'परिनालिका का एक सिरा उत्तरी ध्रुव के रूप में और दूसरा सिरा दक्षिणी ध्रुव के रूप में क्यों व्यवहार करता है?',
      },
      options: {
        en: ['The insulation creates the poles', 'The solenoid is naturally magnetic', 'The current creates a similar magnetic effect to a bar magnet', 'There is no current in the solenoid'],
        hi: ['विद्युतरोधन ध्रुवों को उत्पन्न करता है', 'परिनालिका प्राकृतिक रूप से चुंबकीय होती है', 'क्योंकि धारा एक छड़ चुंबक के समान चुंबकीय प्रभाव उत्पन्न करती है', 'परिनालिका में कोई धारा नहीं होती है'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 12.2.4`**: Electric current circulating through dense solenoid loops builds a dipole field matching a **bar magnet** (`N pole at one end, S pole at the other`).',
        hi: '`भाग 12.2.4`: परिनालिका के फेरों में प्रवाहित धारा **छड़ चुंबक के समान चुंबकीय प्रभाव (`N` व `S` ध्रुव)** उत्पन्न करती है।',
      },
    },
    {
      id: 'pyq-p12-15',
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.2.3): Circular Loop Field Rule',
      question: {
        en: 'Which rule is used to determine the direction of the magnetic field at the centre of a circular current-carrying loop?',
        hi: 'किसी वृत्ताकार धारावाही परिपथ के केंद्र पर चुंबकीय क्षेत्र की दिशा निर्धारित करने के लिए किस नियम का उपयोग किया जाता है?',
      },
      options: {
        en: ['Ohm’s law', 'Joule’s law of heating', 'Right-hand thumb rule', 'Fleming’s left hand rule'],
        hi: ['ओम का नियम', 'जूल का ताप का नियम', 'दाहिने हाथ के अंगूठे का नियम', 'फ्लेमिंग का बाएं हाथ का नियम'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `p.222–223` & In-Text Q1**: Applying **Right-Hand Thumb Rule** along each arc confirms every part of the circular loop adds field lines along the same direction at the centre!',
        hi: 'सटीक `पृ. 222–223`: वृत्ताकार पाश के केंद्र पर चुंबकीय क्षेत्र की दिशा ज्ञात करने हेतु **दक्षिण-हस्त (`दाहिने हाथ के अंगूठे`) के नियम** का प्रयोग करते हैं!',
      },
    },
    {
      id: 'pyq-p12-16',
      examTag: 'RRB Group D 2025 Shift 47',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.1): Closed Loops / Monopoles',
      question: {
        en: 'Which property of magnetic field lines explains the absence of magnetic monopoles in classical electromagnetism?',
        hi: 'चुंबकीय क्षेत्र रेखाओं का कौन-सा गुणधर्म, चिरसम्मत विद्युत-चुंबकत्व में चुंबकीय एकल ध्रुवों की अनुपस्थिति को स्पष्ट करता है?',
      },
      options: {
        en: ['They are always circular', 'They are denser near poles', 'They form continuous closed curves', 'They never intersect'],
        hi: ['वे सदैव वृत्तीय होती हैं', 'वे ध्रुवों के निकट सघन हो जाती हैं', 'वे सतत संवृत वक्र का निर्माण करती हैं', 'वे कभी प्रतिच्छेद नहीं करती हैं'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `p.218`**: Magnetic field lines form **continuous closed curves** (`returning S→N inside`), so field lines neither begin nor terminate at an isolated pole (`no monopoles`).',
        hi: '`पृ. 218`: चुंबकीय क्षेत्र रेखाएँ **सतत बंद वक्र (`बाहर N→S, भीतर S→N`)** बनाती हैं, जिससे एकल ध्रुव का अस्तित्व संभव नहीं।',
      },
    },
    {
      id: 'pyq-p12-17',
      examTag: 'RRB Group D 2025 Shift 48',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Sec 12.3): Fleming Left-Hand Compass Axes',
      question: {
        en: 'A student uses Fleming’s Left Hand Rule to determine the direction of force on a conductor. If the forefinger points north, and the middle finger points east, in which direction will the force act?',
        hi: 'एक विद्यार्थी चालक पर बल की दिशा निर्धारित करने के लिए फ्लेमिंग के वाम-हस्त नियम का उपयोग करता है। यदि तर्जनी उंगली उत्तर की ओर इंगित करती है और मध्यमा उंगली पूर्व की ओर इंगित करती है, तो बल किस दिशा में कार्य करेगा?',
      },
      options: {
        en: ['Westwards', 'Downwards', 'Southwards', 'Upwards'],
        hi: ['पश्चिम की ओर', 'नीचे की ओर', 'दक्षिण की ओर', 'ऊपर की ओर'],
      },
      correctIndex: 3,
      solution: {
        en: 'Stretch Left Hand: **Forefinger (`Field B`) = North**, **Middle (`Current I`) = East** -> your **Thumb (`Force F`) naturally points UPWARDS**!',
        hi: 'बायाँ हाथ फैलाकर **तर्जनी उत्तर** व **मध्यमा पूर्व** की ओर करें, तो **अँगूठा (`बल`) ऊपर (`Upwards`) की ओर** होगा!',
      },
    },
    {
      id: 'pyq-p12-18',
      examTag: 'RRB Group D 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 12 (Act 12.7 / p.225 Q2): Doubling Current Doubles Force',
      question: {
        en: 'If the current in a conductor is doubled while it remains perpendicular to the same magnetic field, how does the force on the conductor change?',
        hi: 'यदि किसी चालक में प्रवाहित धारा को दोगुना कर दिया जाए, जबकि वह उसी चुंबकीय क्षेत्र के लंबवत बना रहे, तो चालक पर लगने वाले बल पर क्या प्रभाव पड़ेगा?',
      },
      options: {
        en: ['The force remains unchanged', 'The force doubles', 'The force reduces four times', 'The force is halved'],
        hi: ['बल अपरिवर्तित रहता है', 'बल दोगुना हो जाता है', 'बल चार गुना कम हो जाता है', 'बल आधा हो जाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Force on perpendicular conductor `F = B I L` (`∝ current I`). Doubling `I` cleanly **doubles the magnetic force** (`p.225 Q2(i)`)!',
        hi: '`F = B I L` होने से बल धारा `I` के समानुपाती है — अतः **धारा दोगुनी करने पर बल दोगुना हो जाता है** (`पृ. 225 Q2`)!',
      },
    },
    {
      id: 'pyq-p12-19',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 12 (Fig 12.11): Soft Iron Inside Solenoid',
      question: {
        en: 'A soft iron bar is introduced inside the current carrying solenoid. What happens to the magnetic field inside the solenoid?',
        hi: 'धारावाही परिनालिका के अंदर एक मृदु लौह दंड डाला जाता है। जब मृदु लौह से बने दंड को परिनालिका के अंदर डाला जाता है, तो परिनालिका के अंदर चुंबकीय क्षेत्र ______।',
      },
      options: {
        en: ['Will become zero', 'Will remain same', 'Will decrease', 'Will increase'],
        hi: ['शून्य हो जाता है', 'अपरिवर्तित रहेगा', 'घटेगा', 'बढ़ जाएगा'],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `Sec 12.2.4` (`Fig 12.11`)**: Soft iron magnetises inside the solenoid, creating a strong **electromagnet** where internal magnetic field **increases greatly**.',
        hi: '`भाग 12.2.4`: परिनालिका के भीतर **नर्म लोहा (`Soft iron`)** रखने पर प्रबल विद्युत चुंबक बनता है और भीतर **चुंबकीय क्षेत्र बढ़ जाएगा**।',
      },
    },
    {
      id: 'pyq-p12-20',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 12 (Sec 12.2.3): Circular Coil with 10 Turns',
      question: {
        en: 'If the magnetic field due to a single turn circular coil is B, then the value of magnetic field due to a circular coil with 10 turns (`other parameters kept same`) will be:',
        hi: 'यदि एकल फेरे वाली वृत्ताकार कुंडली के कारण चुंबकीय क्षेत्र B है, तो 10 फेरों वाली वृत्ताकार कुंडली (`अन्य मापदंड समान`) के कारण चुंबकीय क्षेत्र का मान क्या होगा?',
      },
      options: {
        en: ['10B', '5B', 'B', '100B'],
        hi: ['10B', '5B', 'B', '100B'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.222`**: `n` turns yield a field **`n` times** larger than a single turn because current flows identically in all turns -> **`10 B`**!',
        hi: 'सटीक `पृ. 222`: `n` फेरों वाली कुंडली में प्रत्येक फेरे के समान क्षेत्र संयोजित होकर `n` गुना अर्थात **`10B`** हो जाता है।',
      },
    },
    {
      id: 'pyq-p12-21',
      examTag: 'RRB Tech Gr-III 2024 (29 Dec Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 12 (Act 12.5): Field Direction Perpendicular to Wire',
      question: {
        en: 'What is the direction of the magnetic field produced by a current carrying straight wire?',
        hi: 'धारावाही सीधे तार द्वारा उत्पन्न चुंबकीय क्षेत्र की दिशा क्या होती है?',
      },
      options: {
        en: ['At an angle 45° to the plane of the wire', 'Parallel to the plane of the wire', 'At an angle 60° to the plane of the wire', 'Perpendicular to the plane of the wire'],
        hi: ['तार के तल से 45° के कोण पर', 'तार के तल के समानांतर', 'तार के तल से 60° के कोण पर', 'तार के तल के लंबवत'],
      },
      correctIndex: 3,
      solution: {
        en: '**Activity 12.5 & Example 12.1 (`p.221`)**: Concentric circular magnetic field lies strictly in the **plane perpendicular (`90°`) to the wire**!',
        hi: '`चित्र 12.6 व उदा. 12.1`: सीधे धारावाही तार के संकेंद्री चुंबकीय क्षेत्र वृत्त **तार के तल के लंबवत** होते हैं!',
      },
    },
    {
      id: 'pyq-p12-22',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 12 (Sec 12.3 / Ex Q5): Angle for Max Force',
      question: {
        en: 'The force experienced by a current carrying conductor in a magnetic field is maximum when the angle between the direction of current and the direction of magnetic field is:',
        hi: 'चुंबकीय क्षेत्र में धारावाही चालक द्वारा अनुभव किया जाने वाला बल अधिकतम तब होता है जब धारा की दिशा और चुंबकीय क्षेत्र की दिशा के बीच का कोण हो:',
      },
      options: {
        en: ['90°', '60°', '45°', '0°'],
        hi: ['90°', '60°', '45°', '0°'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.224` & Exercise Q5**: Magnitude of force is highest when current and magnetic field are **perpendicular (`90°`)** to each other.',
        hi: 'सटीक `पृ. 224` व अभ्यास Q5: जब धारा और चुंबकीय क्षेत्र परस्पर लंबवत अर्थात **`90°`** पर हों तब बल अधिकतम होता है!',
      },
    },
    {
      id: 'pyq-p12-23',
      examTag: 'RRB Tech Gr-III 2024 (24 Dec Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 12 (Sec 12.1): Inside Bar Magnet Field Line Direction',
      question: {
        en: 'Inside a bar magnet, the direction of magnetic field lines is from its:',
        hi: 'एक छड़-चुंबक के अंदर, चुंबक के चुंबकीय क्षेत्र रेखाओं की दिशा ________ होती है?',
      },
      options: {
        en: ['North pole to its South pole', 'South pole to its North pole', 'always perpendicular to the North pole', 'always perpendicular to the South pole'],
        hi: ['उत्तरी ध्रुव से इसके दक्षिणी ध्रुव तक', 'दक्षिणी ध्रुव से इसके उत्तरी ध्रुव तक', 'हमेशा उत्तरी ध्रुव के लंबवत', 'हमेशा दक्षिणी ध्रुव के लंबवत'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.218`**: **Inside a magnet**, field line direction runs from its **South pole to its North pole (`S → N`)**, closing the `N → S` exterior curve!',
        hi: 'सटीक `पृ. 218`: छड़ चुंबक के **भीतर** चुंबकीय क्षेत्र रेखाओं की दिशा **दक्षिणी ध्रुव से उत्तरी ध्रुव (`S → N`)** की ओर होती है।',
      },
    },
    {
      id: 'pyq-p12-24',
      examTag: 'RRB ALP CBT-2 Wireman (28 Jul 2026 Shift 2)',
      section: 'Physics / Trade Safety',
      subject: 'Physics',
      topic: 'NCERT Ch 12 (Sec 12.4 / Ex Q2): Short Circuit Definition',
      question: {
        en: 'What best describes a short circuit in an electrical system?',
        hi: 'निम्नलिखित में से कौन-सा विकल्प विद्युत प्रणाली में शार्ट सर्किट (`लघुपथन`) का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['A connection with unusually high resistance', 'A connection where no current flows due to a break', 'An unintended path with zero or very low resistance', 'An intended path with normal resistance'],
        hi: ['असामान्य रूप से उच्च प्रतिरोध वाला एक कनेक्शन', 'एक ऐसा कनेक्शन जहां भंजन के कारण कोई धारा प्रवाहित नहीं होती है', 'शून्य या अति निम्न प्रतिरोध वाला एक अनभिप्रेत पथ', 'सामान्य प्रतिरोध वाला एक अभिप्रेत पथ'],
      },
      correctIndex: 2,
      solution: {
        en: '**NCERT `Sec 12.4` (`p.226`) & Exercise Q2**: Direct unintended contact of Live & Neutral creates a **zero / near-zero resistance path**, surging current abruptly (`Short Circuit`)!',
        hi: '`भाग 12.4` व अभ्यास Q2: विद्युन्मय व उदासीन तार के सीधे संपर्क से **शून्य या अति निम्न प्रतिरोध वाला अनभिप्रेत पथ (`लघुपथन`)** बन कर धारा अचानक बहुत बढ़ जाती है!',
      },
    },
  ],
};
export default C10_CH12_MAGNET_DATA;
