/**
 * Class 10 NCERT (2026-27 New Edition — jhsc111.pdf, Pages 190–215) + Railway CBT Deep-Dive Edition
 * Chapter 11: Electricity (विद्युत) — Gold Standard v3 (#3 Highest PYQ Chapter!)
 * Complete 2026-27 NCERT Coverage: 11.1–11.2 Current I=Q/t (1C=6×10¹⁸e⁻) & Voltage V=W/Q -> 11.3 All 11 Circuit Symbols
 * (Table 11.1) -> 11.4 Ohm’s Law V=IR, Ammeter vs Voltmeter -> 11.5 Factors R=ρl/A & Table 11.2 (Metals/Alloys/Insulators) ->
 * 11.6 Series Rs=ΣR & Parallel 1/Rp=Σ(1/R) Domestic Wiring -> 11.7 Joule Heating H=I²Rt, Bulb 3380°C N₂/Ar, Fuse Pb-Sn ->
 * 11.8 Electric Power P=VI=I²R=V²/R & Commercial 1 kWh = 3.6×10⁶ J.
 * All 6 Activities (11.1–11.6), All 23 In-Text Qs, All 18 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH11_ELEC_DATA = {
  id: 'c10-phy-ch11',
  classId: 'class10',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 11,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 11: Electricity (CBT Edition)',
  blueprintSvgKey: 'c10-ch11-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Ohm’s Law (V=IR), Series & Parallel Circuits (Rs/Rp)', hi: 'ओम का नियम (V=IR), श्रेणीक्रम व पार्श्वक्रम परिपथ संयोजन' }, pct: 35 },
    { label: { en: 'Joule Heating (H=I²Rt), Tungsten Bulb, Fuse & kWh = 3.6×10⁶ J', hi: 'जूल तापन (H=I²Rt), बल्ब/फ्यूज, विद्युत शक्ति व 1 kWh गणना' }, pct: 30 },
    { label: { en: 'Resistance Factors (R = ρ·l/A), Wire Stretch & Table 11.2 Alloys', hi: 'प्रतिरोध कारक (R = ρ·l/A), तार खींचना व मिश्रातु उपयोग' }, pct: 22 },
    { label: { en: 'Charge/Current (I=Q/t), Voltage (V=W/Q) & 11 Circuit Symbols', hi: 'आवेश-धारा (I=Q/t), विभवांतर (V=W/Q) व सारणी 11.1 प्रतीक' }, pct: 13 },
  ],
  title: {
    en: 'Chapter 11: Electricity',
    hi: 'अध्याय 11: विद्युत',
  },
  subtitle: {
    en: 'Complete 2026-27 NCERT Deep-Dive (#3 PYQ Chapter) • V=IR, R=ρl/A, Series/Parallel, Fuse, Tungsten, 1 kWh=3.6 MJ & 24 PYQs',
    hi: 'नया 2026-27 NCERT संपूर्ण गहराई (#3 सर्वाधिक PYQ अध्याय) • ओम नियम, प्रतिरोधकता, श्रेणी-पार्श्वक्रम, जूल तापन, kWh व 24 PYQ',
  },
  metrics: {
    pages: 26,
    activities: 6,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 18,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-phy-ch11/hero-electricity-circuits.webp',
    caption: {
      en: 'Electrical Physics Bench: Glowing tungsten bulb filament (`3380 °C`), blue unlabelled meter dial, ceramic banded resistor & red-hot coiled nichrome heating element with cyan electron drift.',
      hi: 'विद्युत भौतिकी प्रयोगशाला: दीप्त टंगस्टन बल्ब तंतु (`3380 °C`), मापक डायल, प्रतिरोधक एवं लाल-तप्त निक्रोम तापन कुंडली व इलेक्ट्रॉन प्रवाह पथ।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Charge, Current & Voltage (`11.1–11.2`)**: **1 Electron = `1.6 × 10⁻¹⁹ C`** -> **`1 Coulomb ≈ 6 × 10¹⁸ electrons` (`exact 6.25×10¹⁸`)**. **`I = Q / t`** (`Ampere, 1 A = 1 C/s`; **Ammeter** in **SERIES**, near-zero `R`). Conventional `I` flows **`+ to −`** (`OPPOSITE to electrons`). **`V = W / Q`** (`Volt, 1 V = 1 J/C`; **Voltmeter** in **PARALLEL**, near-infinite `R`).',
      hi: '**आवेश, धारा व विभव (`11.1–11.2`)**: **1 इलेक्ट्रॉन = `1.6 × 10⁻¹⁹ C`** `→` **`1 कूलॉम ≈ 6 × 10¹⁸ इलेक्ट्रॉन`**। **`I = Q / t`** (`1 एम्पियर = 1 C/s`; **एमीटर सदैव श्रेणीक्रम**, धारा दिशा `+` से `−` इलेक्ट्रॉन विपरीत)। **`V = W / Q`** (`1 वोल्ट = 1 J/C`; **वोल्टमीटर सदैव पार्श्वक्रम** में लगता है)।',
    },
    {
      en: '**Ohm’s Law & Resistivity (`11.4–11.5`)**: At constant temperature **`V = I · R`** (`straight line V–I graph through origin`; SI **`Ohm Ω = 1 V/A`**). Wire resistance **`R = ρ · l / A`**. Resistivity **`ρ` (`unit Ω·m`) depends ONLY on Material & Temperature (`NEVER length/thickness!`)**. Stretching wire `n×` longer -> **`R_new = n² · R`**! **Silver best conductor (`1.60×10⁻⁸`)**, **Nichrome alloys** don’t oxidize at high heat.',
      hi: '**ओम का नियम व प्रतिरोधकता**: नियत ताप पर **`V = I·R`** (`मूल बिंदु से सीधी सरल रेखा`; **`1 Ω = 1 V/A`**)। **`R = ρ·l/A`**। **प्रतिरोधकता `ρ` (`Ω·m`) केवल पदार्थ व ताप पर निर्भर** (लंबाई-मोटाई से स्वतंत्र!)। तार `n` गुना खींचने पर नया प्रतिरोध **`R’ = n²R`**! सर्वोत्तम चालक **चाँदी (`Ag`)**, तापन में **निक्रोम मिश्रातु**।',
    },
    {
      en: '**Series vs Parallel Circuits (`11.6`)**: **Series**: **`Rs = R₁ + R₂ + R₃`** (`SAME current I`, `V divides`, `1 fails => ALL OFF`, `Rs > max R`). **Parallel**: **`1/Rp = 1/R₁ + 1/R₂ + 1/R₃`** (`SAME voltage V`, `I divides`, `Rp < min R`, **Home wiring mandatory!**). For `n` equal `R` resistors cut & placed in parallel: **`R / R’ = n²`** (`Ex Q1: 5 parts -> R/R’ = 25`!).',
      hi: '**श्रेणीक्रम बनाम पार्श्वक्रम**: **श्रेणी**: **`Rs = R₁ + R₂ + R₃`** (`धारा I समान`, 1 बंद तो सब बंद)। **पार्श्व**: **`1/Rp = 1/R₁ + 1/R₂ + 1/R₃`** (`वोल्टता V समान`, `Rp` सबसे छोटे से भी कम — **घरेलू वायरिंग!**)। `n` बराबर टुकड़ों को पार्श्व में जोड़ने पर **`R/R’ = n²` (`Ex Q1 = 25`)**!',
    },
    {
      en: '**Joule Heating & Safety Devices (`11.7`)**: **`H = VIt = I²Rt = (V²/R)t`**. Bulb filament = **Tungsten (`M.P. 3380 °C`)** inside **Nitrogen + Argon** (`prevents oxidation`). Safety **Fuse** = connected in **SERIES**, **Low Melting Point (`Pb–Sn alloy`)** (`1 kW @ 220V draws 4.54 A -> use 5 A fuse!`).',
      hi: '**जूल तापन नियम (`11.7`)**: **`H = VIt = I²Rt`**। बल्ब तंतु = **टंगस्टन (`गलनांक 3380 °C`)** + अक्रिय **N₂ / ऑर्गन गैस**। सुरक्षा **फ्यूज** = **श्रेणीक्रम + निम्न गलनांक** (`1 kW @ 220V` में `4.54 A` धारा `→ 5 A` फ्यूज)।',
    },
    {
      en: '**Electric Power & `1 kWh` (`11.8`)**: **`P = VI = I²R = V²/R`** (`Watt = J/s = V·A`; NOTE: `IR²` and `IR` are WRONG!). **`1 kWh ("1 Unit") = 3.6 × 10⁶ J`**. Voltage Drop Trick (`Ex Q3`): Bulb rated `220 V; 100 W` operated at **`110 V`** consumes **`P = 100 × (110/220)² = 25 W`** (`NOT 50 W!`)!',
      hi: '**विद्युत शक्ति व `1 kWh`**: **`P = VI = I²R = V²/R`** (`1 W = 1 J/s`; **`IR²` गलत!**)। **`1 kWh (1 यूनिट) = 3.6 × 10⁶ J`**। वोल्टेज-ड्रॉप (`Ex Q3`): `220 V; 100 W` बल्ब **`110 V` पर `25 W` खपत** करेगा (`P ∝ V²`)!',
    },
  ],
  sections: [
    {
      id: 'current-voltage-symbols-ohm',
      number: '11.1–11.4',
      flowDiagramKey: 'c10-ch11-symbols-ohms-law',
      svgLab: 'electricity-circuit-lab',
      title: {
        en: 'Electric Current (`I=Q/t`), Potential Difference (`V=W/Q`), 11 Circuit Symbols & Ohm’s Law (`V=IR`)',
        hi: 'विद्युत धारा (`I=Q/t`), विभवांतर (`V=W/Q`), सभी 11 परिपथ प्रतीक (`सारणी 11.1`) एवं ओम का नियम (`V=IR`)',
      },
      summaryTag: {
        en: 'NCERT Pages 190–196 • 1C = 6×10¹⁸e⁻, Conventional Direction, Ammeter/Voltmeter & V–I Slope = R',
        hi: 'NCERT पृ. 190–196 • कूलॉम आवेश, एम्पियर, वोल्ट, 11 प्रतीक व ओम का V–I सरल रेखीय ग्राफ',
      },
      blocks: [
        {
          heading: {
            en: 'A) Electric Charge (`Q`), Current (`I = Q/t`), Conventional Direction & Ammeter (`11.1`)',
            hi: 'A) विद्युत आवेश (`Q`), विद्युत धारा (`I = Q/t`), परंपरागत दिशा तथा एमीटर (`11.1`)',
          },
          conceptStory: {
            en: 'A continuous closed conducting path carrying electric current is called an **Electric Circuit (`विद्युत परिपथ`)**. Just as water current measures flowing water, **Electric Current (`I`)** is defined as **rate of flow of electric charge through any cross-section**: **`I = Q / t`** (`Eq 11.1`). Each electron holds charge **`e = 1.6 × 10⁻¹⁹ C`** (`exact 1.602176634 × 10⁻¹⁹ C` — asked in NTPC!). How many electrons make **1 Coulomb (`C`)**? **`n = Q / e = 1 / (1.6×10⁻¹⁹) = 6.25 × 10¹⁸` (`NCERT rounds to ≈ 6 × 10¹⁸ electrons!`)**. **SI Unit of Current = Ampere (`A`)** named after **André-Marie Ampère**: **`1 A = 1 C / 1 s`** (`1 mA = 10⁻³ A`, `1 µA = 10⁻⁶ A`). **Historical Direction Rule**: When electricity was first observed, electrons hadn’t been discovered, so electric current was taken as positive charge motion — hence in any circuit, ==**conventional current flows from Positive (`+`) to Negative (`−`) terminal, strictly OPPOSITE to the flow of negatively charged electrons!**== An **Ammeter (`ऐमीटर`)** measures `I`, always wired in **SERIES** (`same current enters it; ideal resistance ≈ 0`).',
            hi: 'विद्युत धारा के सतत तथा बंद पथ को **विद्युत परिपथ** कहते हैं। किसी चालक की अनुप्रस्थ काट से प्रति सेकंड प्रवाहित आवेश को **विद्युत धारा `I = Q / t`** कहते हैं। एक इलेक्ट्रॉन पर **`1.6 × 10⁻¹⁹ C`** आवेश होता है, अतः **`1 कूलॉम` में `≈ 6 × 10¹⁸` (`सटीक 6.25×10¹⁸`) इलेक्ट्रॉन** होते हैं! धारा का **SI मात्रक एम्पियर (`A`, आंद्रे-मेरी एम्पियर)** है: **`1 A = 1 C / 1 s`** (`1 mA = 10⁻³ A`, `1 µA = 10⁻⁶ A`)। **दिशा परिपाटी**: इलेक्ट्रॉनों की खोज से पूर्व धनावेश प्रवाह को धारा माना गया, इसलिए परिपथ में ==**विद्युत धारा की दिशा सदैव ऋणावेशित इलेक्ट्रॉनों के प्रवाह के विपरीत (सेल के `+` से `−` टर्मिनल की ओर)**== मानी जाती है! **एमीटर** सदैव परिपथ में **श्रेणीक्रम (`Series`)** में जुड़ता है (`इसका प्रतिरोध न्यूनतम/शून्य होना चाहिए`)।',
          },
          bullets: [
            { en: '**Ex 11.1 (`Worked Check`)**: `I = 0.5 A` for `t = 10 min = 600 s` -> **`Q = I·t = 0.5 × 600 = 300 C`**!', hi: '**उदाहरण 11.1**: `0.5 A` धारा `10 मिनट (600 s)` प्रवाहित हो तो कुल आवेश **`Q = I×t = 300 C`**!' },
          ],
          inlinePyqIds: ['pyq-elec-1', 'pyq-elec-2', 'pyq-elec-3'],
        },
        {
          heading: {
            en: 'B) Electric Potential Difference (`V = W/Q`), Battery Action & Voltmeter (`11.2`)',
            hi: 'B) विद्युत विभव व विभवांतर (`V = W/Q`), सेल का रासायनिक कार्य तथा वोल्टमीटर (`11.2`)',
          },
          conceptStory: {
            en: 'Electrons in copper wire do NOT drift under gravity — just as water flows through a horizontal tube only under a **pressure difference**, charges flow ONLY when there exists an **electric pressure difference = Potential Difference (`विभवांतर`)**! A **Cell or Battery (`chemical energy inside`)** creates and maintains this potential difference across its terminals **even when NO current is being drawn (`EMF, Volt`)**. By definition (`Eq 11.2`): **Potential Difference between two points = Work done moving unit positive charge from one point to the other**: **`V = W / Q`**! Named after **Alessandro Volta**: **SI Unit = Volt (`V`)**, where ==**Definition of 1 Volt**== **`1 V = 1 J / 1 C`** (`1 J C⁻¹`). Look at `6 V` battery meaning (`p.192 Q3`): EVERY `1 C` charge passing through a `6 V` battery receives **`W = V·Q = 6 × 1 = 6 Joules`** of energy! **Voltmeter (`वोल्टमीटर`)** is ALWAYS wired in **PARALLEL (`पार्श्वक्रम`)** across the two test points (`very high / ideal ∞ resistance so it draws negligible current!`).',
            hi: 'ताँबे के तार में आवेश स्वतः नहीं बहते (गुरुत्व की कोई भूमिका नहीं) — जल दाबांतर की तरह इलेक्ट्रॉन केवल **वैद्युत दाब के अंतर (`विभवांतर`)** से गति करते हैं! **सेल/बैटरी** अपनी संचित रासायनिक ऊर्जा से यह विभवांतर बनाती व बनाए रखती है (तब भी जब कोई धारा न ली जा रही हो)। दो बिंदुओं के बीच **विभवांतर `V = W / Q`** (`एकांक आवेश को एक बिंदु से दूसरे तक लाने में किया कार्य`)। इटली के वैज्ञानिक **अलेसान्द्रो वोल्टा** पर SI मात्रक **वोल्ट (`V`)** है: ==**1 वोल्ट की परिभाषा**== **`1 वोल्ट = 1 जूल / 1 कूलॉम`** (`1 V = 1 J C⁻¹`)। जैसे `6 V` बैटरी से गुजरने वाले प्रत्येक `1 C` आवेश को `6 J` ऊर्जा मिलती है! **वोल्टमीटर** सदैव उन दो बिंदुओं के **पार्श्वक्रम (`Parallel`)** में जुड़ता है (`अत्यधिक उच्च प्रतिरोध, आदर्श = ∞`)।',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch11/real/georg-ohm.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch11/real/alessandro-volta.webp',
            title: {
              en: 'Founding Giants of Electricity: Georg Simon Ohm (`Ohm Ω`) & Alessandro Volta (`Volt V`)',
              hi: 'विद्युत के आधार स्तंभ: जॉर्ज साइमन ओम (`ओम Ω`) एवं अलेसान्द्रो वोल्टा (`वोल्ट V`)',
            },
            caption: {
              en: 'Left: Georg Simon Ohm (`1827`) proved constant-temperature V ∝ I linear law. Right: Alessandro Volta invented the chemical battery (`Volt V = 1 J/C`).',
              hi: 'बायाँ: जॉर्ज साइमन ओम ने `1827` में नियत ताप पर `V ∝ I` नियम दिया। दायाँ: अलेसान्द्रो वोल्टा ने रासायनिक सेल व विभवांतर सिद्धांत दिया।',
            },
          },
          inlinePyqIds: ['pyq-elec-4', 'pyq-elec-5', 'pyq-elec-6', 'pyq-elec-7'],
        },
        {
          heading: {
            en: 'C) Ohm’s Law (`V = I·R`), Slope of `V–I` Graph & Rheostat (`Sec 11.3–11.4`)',
            hi: 'C) ओम का नियम (`1827: V = I·R`), सरल रेखीय `V–I` ग्राफ एवं धारा नियंत्रक (`11.3–11.4`)',
          },
          conceptStory: {
            en: 'In `Activity 11.1`, adding `1, 2, 3, 4` dry cells (`1.5 V each`) across a `0.5 m` Nichrome wire keeps ratio `V / I` constant! **Georg Simon Ohm (`1827`)** formulated **Ohm’s Law (`Eq 11.4–11.5`)**: ==**Provided physical conditions (specifically TEMPERATURE) remain constant, current `I` flowing through a metallic conductor is directly proportional to potential difference `V` across its ends**== (`V ∝ I`, giving **`V = I · R`**)! Plotting `V` vs `I` produces a ==**straight line passing through origin `(0, 0)`**== (`Fig 11.3`) whose **slope (`ΔV / ΔI`) equals Resistance `R`** (`unit Ohm Ω = 1 V / 1 A`). **Resistance (`प्रतिरोध`)** is the property opposing electron flow (`electrons collide with positive lattice atoms`). Good conductors (`copper`) have tiny `R`; **Resistors** offer appreciable `R`; **Insulators (`glass, rubber`)** exert huge `R`. Changing circuit current WITHOUT altering battery voltage uses a **Variable Resistance / Rheostat (`धारा नियंत्रक`, Symbol 9)**!',
            hi: '`क्रियाकलाप 11.1` में `1 से 4` सेल जोड़ने पर भी `V / I` अनुपात नियत रहता है! **1827 में जॉर्ज साइमन ओम** का नियम: ==**यदि चालक का ताप व अन्य भौतिक अवस्थाएँ समान रहें, तो चालक में प्रवाहित धारा `I` उसके सिरों के विभवांतर `V` के अनुक्रमानुपाती होती है**== (**`V = I · R`**)। इसका **`V–I` ग्राफ सदैव मूल बिंदु `(0,0)` से गुजरती एक सरल रेखा** होती है (`चित्र 11.3`), जिसका ढाल **प्रतिरोध `R`** (`SI मात्रक ओम Ω = 1 V / 1 A`) देता है। चालक के भीतर गतिशील इलेक्ट्रॉन परमाणुओं के आकर्षण/टक्कर से मंद पड़ते हैं — यही प्रतिरोध है। वोल्टता बदले बिना परिपथ की धारा घटाने-बढ़ाने वाली युक्ति **धारा नियंत्रक (`Rheostat`, प्रतीक 9)** कहलाती है!',
          },
          inlinePyqIds: ['pyq-elec-8', 'pyq-elec-9', 'pyq-elec-10'],
        },
      ],
    },
    {
      id: 'resistivity-series-parallel',
      number: '11.5–11.6',
      flowDiagramKey: 'c10-ch11-series-parallel-resistivity',
      title: {
        en: 'Factors of Resistance (`R = ρ·l/A`), Resistivity (`Ω·m`), Wire Stretching & Series / Parallel Circuits',
        hi: 'प्रतिरोध कारक (`R = ρ·l/A`), प्रतिरोधकता (`ρ`), तार खींचने की ट्रिक एवं श्रेणी व पार्श्वक्रम संयोजन',
      },
      summaryTag: {
        en: 'NCERT Pages 197–208 • Ag > Cu > Al, Alloy Oxidation Rule, Stretching n²R & Parallel Domestic Advantage',
        hi: 'NCERT पृ. 197–208 • चाँदी सर्वोत्तम चालक, मिश्रातु हीटर, R’=n²R तथा घरेलू परिपथ पार्श्वक्रम क्यों?',
      },
      blocks: [
        {
          heading: {
            en: 'A) Four Factors of `R`, Electrical Resistivity `ρ = R·A/l`, Stretching Trap & `Table 11.2` (`11.5`)',
            hi: 'A) प्रतिरोध `R` बनाम प्रतिरोधकता `ρ` (`Ω·m`), तार खींचना बनाम काटना व `सारणी 11.2` (`11.5`)',
          },
          conceptStory: {
            en: 'From `Activity 11.3`, uniform wire resistance `R` obeys: **`R ∝ l` (`length`)**, **`R ∝ 1 / A` (`cross-sectional area = πr² = πd²/4`)**, **Nature of material**, and **Temperature**. Combining gives **`R = ρ · l / A`** (`Eq 11.10`) where **Electrical Resistivity `ρ` (`प्रतिरोधकता`, SI Unit `Ω · m`)** is a **characteristic material property**: ==**`ρ` NEVER changes when you cut, thicken or stretch a wire — `ρ` depends ONLY on Material & Temperature!**== **TWO Mega Exam Traps**: `(1)` Take wire of `l, A` (`R = 4 Ω`) vs wire of `l/2, 2A` (`Ex 11.6`): `R₂ = ρ(l/2)/(2A) = ¼ R₁ = 1 Ω`! **Doubling diameter `2d` multiplies area `A` by `4×` -> Resistance drops to `1/4th`!** `(2)` **Stretching the SAME wire to `n` times its length** halts volume constant (`A -> A/n`): ==**quadratic stretch law**== **`R_stretched = n² · R`** (`stretching 2× quadruples R to 4R`!). **Table 11.2 Conductors & Alloys**: Metals have tiny `ρ` (`10⁻⁸–10⁻⁶ Ω·m`); **Silver (`1.60×10⁻⁸`)** is best, closely followed by **Copper (`1.62×10⁻⁸`) & Aluminium (`2.63×10⁻⁸`)** (`chosen for transmission lines`). Alloys (`Nichrome, Constantan, Manganin`) have **higher `ρ` than constituent metals AND DO NOT oxidize (burn) readily at high temperature** -> hence chosen for toaster/iron coils!',
            hi: '`क्रियाकलाप 11.3` से तार का प्रतिरोध लंबाई `l` के अनुक्रमानुपाती (`R ∝ l`) व अनुप्रस्थ काट `A` के व्युत्क्रमानुपाती (`R ∝ 1/A`) होता है: **`R = ρ · l / A`**। यहाँ **`ρ` वैद्युत प्रतिरोधकता (`SI मात्रक: Ω · m`)** है: ==**`ρ` लंबाई या मोटाई बदलने से कतई नहीं बदलता — यह केवल पदार्थ की प्रकृति व ताप पर निर्भर करता है!**== **2 परीक्षा महा-ट्रिक्स**: **(1)** यदि व्यास **दुगुना** कर दें (`A = πr² → 4A`), तो प्रतिरोध **`1/4` गुना** रह जाएगा (`उदा. 11.6: l/2, 2A → 4 Ω का 1 Ω`)। **(2)** यदि **उसी तार को खींचकर लंबाई `n` गुनी** करें, तो क्षेत्रफल `A/n` हो जाने से नया प्रतिरोध ==**वर्ग-गुणक नियम**== **`R_नया = n² × R`** हो जाता है (`2× खींचने पर R 4 गुना`)! **सारणी 11.2**: धातुओं में सर्वश्रेष्ठ सुचालक **चाँदी (`1.60×10⁻⁸ Ω·m`)**, फिर **कॉपर व एल्युमिनियम** (विद्युत संचरण तार); वहीं **मिश्रातुओं (निक्रोम, मैंगनिन, कांस्टेंटन)** की प्रतिरोधकता उच्च होती है और उच्च ताप पर **शीघ्र दहन/उपचयन नहीं होता** (`हीटर-इस्तरी के लिए श्रेष्ठ`)!',
          },
          inlinePyqIds: ['pyq-elec-11', 'pyq-elec-12'],
        },
        {
          heading: {
            en: 'B) Series (`Rs`) vs Parallel (`Rp`) Combinations & Why Home Circuits Use Parallel Wiring (`11.6`)',
            hi: 'B) श्रेणीक्रम (`Rs`) बनाम पार्श्वक्रम (`Rp`) संयोजन तथा घरेलू वायरिंग में पार्श्वक्रम ही क्यों? (`11.6`)',
          },
          conceptStory: {
            en: '**Series Combination (`Fig 11.6, Act 11.4–11.5`)**: Resistors joined end-to-end carry the ==**EXACT SAME CURRENT `I`**== across every resistor, while battery voltage splits: `V = V₁ + V₂ + V₃` -> **`Rs = R₁ + R₂ + R₃`** (`exceeds even the largest individual resistor!`). **Parallel Combination (`Fig 11.7, Act 11.6`)**: Resistors share the same `X, Y` nodes so every branch receives the ==**EXACT SAME VOLTAGE `V`**== while main current splits: `I = I₁ + I₂ + I₃` -> **`1/Rp = 1/R₁ + 1/R₂ + 1/R₃`** (`shortcut for two: Rp = R₁R₂/(R₁+R₂); Rp is ALWAYS smaller than the smallest single resistor!`). **Why Domestic Circuits MUST Use Parallel (`p.208`)?** `(1)` **Each appliance (`bulb 0.18 A` vs `heater 2.2 A`) needs different current** — series forces identical current! `(2)` **Each gets full rated `220 V` voltage**; `(3)` **Fault independence** — in series decorative lights, 1 fused bulb breaks the whole string, whereas in parallel other appliances keep running smoothly with independent switches!',
            hi: '**श्रेणीक्रम (`चित्र 11.6`)**: सिरे से सिरा जोड़ने पर सभी प्रतिरोधों में ==**एकसमान विद्युत धारा `I`**== बहती है और विभवांतर बँटता है (`V = V₁+V₂+V₃`): **`Rs = R₁ + R₂ + R₃`** (कुल प्रतिरोध सबसे बड़े प्रतिरोध से भी अधिक!)। **पार्श्वक्रम (`चित्र 11.7`)**: समान बिंदुओं के बीच जुड़ने से प्रत्येक शाखा पर ==**समान विभवांतर `V`**== रहता है और धारा विभाजित होती है (`I = I₁+I₂+I₃`): **`1/Rp = 1/R₁ + 1/R₂ + 1/R₃`** (`तुल्य Rp सबसे छोटे व्यक्तिगत प्रतिरोध से भी कम!`)। **घरेलू परिपथ में पार्श्वक्रम के 3 अनिवार्य लाभ**: `(1)` बल्ब (`0.18 A`) व हीटर (`2.2 A`) को **भिन्न धाराएँ** चाहिए जो श्रेणी में संभव नहीं; `(2)` सभी को समान **`220 V`** मिलता है; `(3)` **स्वतंत्र संचालन**: श्रेणी में 1 बल्ब खराब होने पर पूरा परिपथ बंद (जैसे शादी की झालर ढूँढना!), जबकि पार्श्व में 1 खराब होने पर बाकी उपकरण स्वतंत्र स्विच से चलते रहते हैं!',
          },
          inlinePyqIds: ['pyq-elec-13', 'pyq-elec-14', 'pyq-elec-15', 'pyq-elec-16'],
        },
      ],
    },
    {
      id: 'joule-heating-electric-power',
      number: '11.7–11.8',
      flowDiagramKey: 'c10-ch11-joule-heating-power',
      title: {
        en: 'Joule Heating (`H = I²Rt`), Tungsten Filament (`3380 °C`), Fuse, Electric Power (`P`) & `1 kWh` Unit',
        hi: 'जूल तापन नियम (`H = I²Rt`), टंगस्टन बल्ब (`3380 °C`), फ्यूज, विद्युत शक्ति (`P`) व `1 kWh` व्यापारिक मात्रक',
      },
      summaryTag: {
        en: 'NCERT Pages 209–215 • N₂/Argon Inert Fill, Low-MP Fuse Rating, P = VI = I²R = V²/R & 3.6×10⁶ J Bill Tricks',
        hi: 'NCERT पृ. 209–215 • N₂/आर्गन गैस, निम्न गलनांक फ्यूज, शक्ति सूत्र व बिजली बिल यूनिट गणना',
      },
      blocks: [
        {
          heading: {
            en: 'A) Joule’s Law of Heating (`H = I²Rt`), Incandescent Bulb (`3380 °C`) & Safety Fuse (`11.7`)',
            hi: 'A) जूल का तापन नियम (`H = I²Rt`), बल्ब का टंगस्टन तंतु व सुरक्षा फ्यूज (`11.7`)',
          },
          conceptStory: {
            en: 'In a purely resistive circuit, source energy dissipates completely as **Heat**: **`H = V · I · t`**. Applying `V = IR` gives **Joule’s Law of Heating (`Eq 11.21`)**: **`H = I² · R · t`**! Hence heat `H` is directly proportional to **(i) Square of current `I²`** (`doubling I makes heat 4×!`), **(ii) Resistance `R`** (for fixed `I`), and **(iii) Time `t`**. Why does a **Heater Cord stay cool while Nichrome Element glows white-hot (`p.210 Q1`)?** Cord is thick low-`R` copper whereas element is high-`R` Nichrome carrying the same `I`, so `H = I²Rt` concentrates almost wholly inside the heating coil! **Incandescent Bulb (`11.7.1`)**: filament is **Tungsten (`W`, very high melting point `3380 °C`)** thermally insulated and sealed inside ==**chemically inert Nitrogen (`N₂`) and Argon (`Ar`) gases**== to prolong life without oxidation. **Electric Fuse**: placed strictly **IN SERIES** with device/mains; wire (`Al, Cu, Fe, Pb alloy`) chosen for **appropriate LOW melting point** (`rated 1 A, 2 A, 3 A, 5 A, 10 A`). When overload raises `I`, **`I²Rt` melts the wire immediately, breaking the circuit!** (`Ex: 1 kW iron on 220 V -> I = 1000/220 = 4.54 A -> choose 5 A fuse!`).',
            hi: 'शुद्ध प्रतिरोधक परिपथ में स्रोत की संपूर्ण ऊर्जा ऊष्मा में बदलती है (`H = VIt`): यही ==**जूल का तापन नियम**== (**`H = I²Rt`**) है — उत्पन्न ऊष्मा `(i) धारा के वर्ग I²`, `(ii) प्रतिरोध R` व `(iii) समय t` के अनुक्रमानुपाती है (`धारा दुगुनी → ऊष्मा 4 गुनी!`)। **हीटर की डोरी गर्म क्यों नहीं होती?** डोरी मोटे ताँबे (`न्यूनतम R`) की व कुंडली उच्च `R` वाले निक्रोम की होने से समान धारा `I` पर सारी `I²Rt` ऊष्मा कुंडली में बनती है! **विद्युत बल्ब (`11.7.1`)**: तंतु उच्च गलनांक वाले **टंगस्टन (`3380 °C`)** का बनता है और ऑक्सीकरण रोकने को बल्ब में ==**अक्रिय नाइट्रोजन (`N₂`) व आर्गन (`Ar`) गैस**== भरी जाती है। **विद्युत फ्यूज**: सदैव **श्रेणीक्रम** में लगने वाला **निम्न/उचित गलनांक** तार जो अधिक धारा आते ही पिघलकर परिपथ तोड़ देता है (`1 kW @ 220 V` इस्तरी में `I = 4.54 A` `→` **`5 A` फ्यूज**)!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch11/real/tungsten-filament.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch11/real/nichrome-heating-coil.webp',
            title: {
              en: 'Joule Heating in Real Engineering: `3380 °C` Tungsten Bulb Filament vs Cherry-Red Nichrome Coil',
              hi: 'जूल तापन के वास्तविक अनुप्रयोग: टंगस्टन बल्ब तंतु (`3380 °C` + N₂/Ar) बनाम तप्त निक्रोम तापन कुंडली',
            },
            caption: {
              en: 'Left: High-melting Tungsten filament glows bright inside inert Nitrogen/Argon glass bulb. Right: Nichrome alloy coil converts I²Rt electrical energy cleanly into intense radiant heat without oxidizing.',
              hi: 'बायाँ: अक्रिय N₂/Ar गैस में चमकता टंगस्टन तंतु। दायाँ: उच्च ताप पर ऑक्सीकृत हुए बिना ऊष्मा देती निक्रोम हीटर कुंडली!',
            },
          },
          inlinePyqIds: ['pyq-elec-17', 'pyq-elec-18', 'pyq-elec-19'],
        },
        {
          heading: {
            en: 'B) Electric Power (`P = VI = I²R = V²/R`), Commercial Energy `1 kWh` & Rated Voltage Drop (`11.8`)',
            hi: 'B) विद्युत शक्ति (`P = VI = I²R = V²/R`), व्यापारिक मात्रक `1 kWh` एवं वोल्टेज-ड्रॉप नियम (`11.8`)',
          },
          conceptStory: {
            en: 'Rate of consumption of electrical energy is **Electric Power (`P`)**: **`P = V·I = I²R = V² / R`** (`Eq 11.22` — REMEMBER `IR²` and `IR` are INVALID!). **SI Unit = Watt (`W`)**: `1 W = 1 V × 1 A = 1 J/s` (`1 kW = 1000 W = 1000 J/s`). Remember **NCERT Did You Know (`p.212`)**: ==**Electrons are NOT consumed inside appliances**== (`utility company bills us ONLY for electrical energy used to drive electrons!`). Practical **Commercial Unit of Electrical Energy** is **kilowatt-hour (`kWh`)** = `"1 Unit"`: **`1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules (J)`**! **Appliance Bill Shortcut**: `Units (kWh) = (Watt × hours/day × days) / 1000`. And NEVER miss **NCERT Ex Q3 Voltage-Drop Trap**: An appliance rating (`e.g. 220 V; 100 W`) fixes its internal coil resistance **`R = V_rated² / P_rated = 220² / 100 = 484 Ω`**. If run at half voltage (`110 V`), actual power is NOT half (`50 W`) — since `P = V²/R ∝ V²`, halving voltage reduces power to **1/4th (`25 W`)**!',
            hi: 'विद्युत ऊर्जा के उपभोग की दर **विद्युत शक्ति `P = VI = I²R = V²/R`** (`1 W = 1 V×1 A = 1 J/s`; `1 kW = 1000 J/s`; ध्यान दें **`IR²` या `IR` शक्ति का सूत्र नहीं है**)! **महत्वपूर्ण तथ्य (`पृ. 212`)**: परिपथ में ==**इलेक्ट्रॉन खर्च/उपभुक्त नहीं होते**== — हम बिजली कंपनी को केवल इलेक्ट्रॉनों को गति देने वाली **विद्युत ऊर्जा** का भुगतान करते हैं! ऊर्जा का **व्यापारिक मात्रक किलोवाट-घंटा (`kWh` या "यूनिट")**: **`1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J`**। **बल्ब वोल्टेज-ड्रॉप नियम (`अभ्यास Q3`)**: `220 V; 100 W` वाले बल्ब का प्रतिरोध `R = V²/P = 484 Ω` नियत रहता है — इसे आधे वोल्टेज **`110 V`** पर चलाने से शक्ति आधी (`50 W`) नहीं बल्कि `1/4` (**`25 W`**) हो जाएगी (`P ∝ V²`)!',
          },
          inlinePyqIds: ['pyq-elec-20', 'pyq-elec-21', 'pyq-elec-22', 'pyq-elec-23', 'pyq-elec-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: {
        en: 'Ammeter Connection vs Voltmeter Connection & Ideal Resistance',
        hi: 'एमीटर बनाम वोल्टमीटर (श्रेणी/पार्श्व व आदर्श प्रतिरोध)',
      },
      trap: {
        en: 'Connecting Ammeter in parallel (`short circuit / burns meter!`) or swapping their ideal resistance values.',
        hi: 'एमीटर को पार्श्वक्रम में जोड़ देना या आदर्श वोल्टमीटर का प्रतिरोध शून्य बता देना!',
      },
      truth: {
        en: '**Ammeter** (`measures I`) = **SERIES** with **Near-Zero Resistance (`ideal = 0`)**. **Voltmeter** (`measures V`) = **PARALLEL** with **Very High Resistance (`ideal = ∞`)**!',
        hi: '**एमीटर (`I`)** = **श्रेणीक्रम** + **न्यूनतम (`आदर्श 0`) प्रतिरोध**! **वोल्टमीटर (`V`)** = **पार्श्वक्रम** + **अत्यधिक उच्च (`आदर्श ∞`) प्रतिरोध**!',
      },
    },
    {
      pair: {
        en: 'Conventional Current (`I`) Direction vs Electron Motion (`e⁻`)',
        hi: 'विद्युत धारा की दिशा बनाम इलेक्ट्रॉनों की गति',
      },
      trap: {
        en: 'Saying current flows from battery negative terminal to positive terminal because electrons come from negative.',
        hi: 'इलेक्ट्रॉनों को आधार मानकर यह कहना कि धारा ऋण `−` से धन `+` की ओर बहती है!',
      },
      truth: {
        en: 'Electrons travel **`−` -> `+`**, while **Conventional Electric Current `I` flows `+` -> `−`**, strictly **OPPOSITE to electron motion** (`NCERT Sec 11.1`)!',
        hi: 'इलेक्ट्रॉन `−` से `+` चलते हैं, जबकि परिपाटी के अनुसार **विद्युत धारा सदैव धन `+` से ऋण `−` टर्मिनल (इलेक्ट्रॉनों के विपरीत)** बहती है!',
      },
    },
    {
      pair: {
        en: 'Resistance (`R`, Ω) vs Resistivity (`ρ`, Ω·m) + Stretched Wire Trap',
        hi: 'प्रतिरोध (`R`) बनाम प्रतिरोधकता (`ρ`) एवं तार खींचने का जाल',
      },
      trap: {
        en: 'Thinking stretching a wire doubles its resistivity `ρ` OR only doubles its resistance `R`!',
        hi: 'तार की लंबाई खींचकर दुगुनी करने पर `ρ` दुगुना या `R` केवल दुगुना समझ लेना!',
      },
      truth: {
        en: '**Resistivity `ρ` NEVER depends on length/area (`depends ONLY on Material & Temperature`)**! Stretching a wire to `n` times length makes area `A/n`, so **`R_new = n² · R`** (`2× stretch -> R becomes 4R!`)!',
        hi: '**प्रतिरोधकता `ρ` लंबाई-क्षेत्रफल से स्वतंत्र** है (केवल पदार्थ व ताप पर निर्भर)! एक ही तार को खींचकर `n` गुना लंबा करने पर नया प्रतिरोध **`n² · R`** (`2× खींचने पर 4R`) हो जाता है!',
      },
    },
    {
      pair: {
        en: '`220 V; 100 W` Bulb Operated at `110 V` (`NCERT Ex Q3 Trap!`)',
        hi: '`220 V; 100 W` बल्ब को `110 V` पर चलाना (`अभ्यास Q3 जाल`)',
      },
      trap: {
        en: 'Thinking halving voltage halves power (`100 W / 2 = 50 W`).',
        hi: 'वोल्टेज आधा देख तुरंत शक्ति आधी (`50 W`) टिक कर देना!',
      },
      truth: {
        en: 'Bulb coil resistance **`R = V²/P` stays constant (`484 Ω`)**, so `P = V²/R ∝ V²`: at `110 V`, power = **`(110)² / 484 = 25 W`** (`1/4th of 100 W!`)!',
        hi: 'बल्ब का प्रतिरोध `R = 484 Ω` नियत रहने से `P = V²/R`: आधे वोल्टेज पर खपत शक्ति **`(110)²/484 = 25 W` (`1/4` गुना)** होगी!',
      },
    },
    {
      pair: {
        en: 'Series Heat Ratio (`R_s = 2R`) vs Parallel Heat Ratio (`R_p = R/2` — `Ex Q4`)',
        hi: 'समान प्रतिरोधक श्रेणी बनाम पार्श्व ऊष्मा अनुपात (`Ex Q4`)',
      },
      trap: {
        en: 'Using `H = I²Rt` blindly across BOTH series & parallel to answer `4:1` instead of `1:4`!',
        hi: 'दोनों स्थितियों में धारा `I` समान मानकर `4:1` टिक कर देना!',
      },
      truth: {
        en: 'Notice `V` (`potential difference of source`) is SAME in both tests! **`H = V²t / R_eq ∝ 1 / R_eq`**: Series `R_s = 2R`, Parallel `R_p = R/2` -> **`H_series / H_parallel = R_p / R_s = (R/2)/(2R) = 1 : 4`** (`NCERT Ex Q4 = c`)!',
        hi: 'स्रोत वोल्टता `V` समान होने से **`H = V²t/R`** लगाएँ: श्रेणी (`2R`) बनाम पार्श्व (`R/2`) का अनुपात **`H_s : H_p = R_p : R_s = 1 : 4`** (अभ्यास Q4)!',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'Georg Simon Ohm (`1827 Ohm’s Law`)', hi: 'जॉर्ज साइमन ओम (`1827 ओम का नियम`)' },
      country: { en: 'German Physicist • Unit Ohm (`Ω`)', hi: 'जर्मन भौतिकविद् (SI मात्रक ओम `Ω`)' },
      badge: { en: 'V = I·R at Constant Temperature', hi: 'नियत ताप पर V ∝ I (सरल रेखीय)' },
      fact: {
        en: 'Discovered in 1827 (`NCERT p.195`) the exact linear proportionality between voltage `V` and metallic current `I`, defining electrical resistance `R = V/I`.',
        hi: '1827 में किसी धातु चालक के सिरों के विभवांतर `V` व धारा `I` के बीच रैखिक संबंध (`V = IR`) की खोज की।',
      },
    },
    {
      name: { en: 'André-Marie Ampère (`SI Unit Ampere A`)', hi: 'आंद्रे-मेरी एम्पियर (`SI मात्रक एम्पियर A`)' },
      country: { en: 'French Physicist & Mathematician (`1775–1836`)', hi: 'फ्रांसीसी भौतिकविद् (`1775–1836`)' },
      badge: { en: '1 Ampere = 1 Coulomb / 1 Second', hi: '1 A = 1 कूलॉम प्रति सेकंड' },
      fact: {
        en: 'Honoured by NCERT Sec 11.1 (`p.191`) with the SI base unit of electric current `A`, fixed using exact elementary charge `1.602176634 × 10⁻¹⁹ C`.',
        hi: 'विद्युत धारा के मूल SI मात्रक एम्पियर (`1 A = 1 C/s`) को इन्हीं के सम्मान में नामित किया गया।',
      },
    },
    {
      name: { en: 'Alessandro Volta (`Voltaic Cell & Unit Volt V`)', hi: 'अलेसान्द्रो वोल्टा (`SI मात्रक वोल्ट V`)' },
      country: { en: 'Italian Physicist • Inventor of Battery', hi: 'इतालवी भौतिकविद् (प्रथम बैटरी आविष्कारक)' },
      badge: { en: '1 Volt = 1 Joule / 1 Coulomb', hi: '1 V = 1 जूल / 1 कूलॉम' },
      fact: {
        en: 'Honoured by NCERT Sec 11.2 (`p.191`) with the SI unit of potential difference `V = W/Q` (`1 J/C`), powering steady current in closed circuits.',
        hi: 'प्रथम रासायनिक सेल व विभवांतर के SI मात्रक वोल्ट (`V = W/Q = 1 J/C`) के जनक।',
      },
    },
    {
      name: { en: 'James Prescott Joule (`Joule’s Heating Law`)', hi: 'जेम्स प्रेस्कॉट जूल (`जूल तापन नियम व जूल मात्रक`)' },
      country: { en: 'English Physicist (`H = I²Rt`)', hi: 'अंग्रेजी भौतिकविद् (`H = I²Rt`)' },
      badge: { en: 'H = I²Rt (1 kWh = 3.6×10⁶ J)', hi: 'ऊष्मा H = I²Rt (SI मात्रक जूल J)' },
      fact: {
        en: 'Proved electrical work converts quantitatively to thermal energy `H = I²Rt` (`NCERT Eq 11.21`), governing bulbs, heaters, geysers & fuses.',
        hi: 'सिद्ध किया कि विद्युत ऊर्जा प्रतिरोध में **`H = I²Rt`** ऊष्मा में रूपांतरित होती है — इसी पर हीटर, बल्ब व फ्यूज काम करते हैं।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-tungsten',
      figRef: { en: 'NCERT Sec 11.7.1 (`Incandescent Bulb Filament 3380 °C`)', hi: 'NCERT 11.7.1 — टंगस्टन तंतु व अक्रिय गैसें' },
      title: { en: 'Glowing High-Melting Tungsten (`W`, `3380 °C`) Bulb Filament in Inert Nitrogen/Argon Gas', hi: 'उच्च गलनांक टंगस्टन (`3380 °C`) बल्ब तंतु व N₂/ऑर्गन वातावरण' },
      imageUrl: '/ncert-notes/class10-phy-ch11/real/tungsten-filament.webp',
      hotspots: [
        { en: 'Thin tungsten gets white-hot without melting (`3380 °C`) while N₂ + Argon inert fill prevents filament oxidation.', hi: 'अत्यधिक पतला टंगस्टन `3380 °C` गलनांक के कारण बिना पिघले चमकता है; N₂ व ऑर्गन तंतु की आयु बढ़ाते हैं।' },
      ],
    },
    {
      id: 'vis-nichrome',
      figRef: { en: 'NCERT Table 11.2 & Heating Appliances (`11.7.1`)', hi: 'NCERT सारणी 11.2 — निक्रोम तापन अवयव' },
      title: { en: 'Red-Hot Nichrome Alloy (`Ni+Cr+Mn+Fe`) Coiled Heating Element (`Toaster / Heater`)', hi: 'टोस्टर/हीटर में लाल-तप्त निक्रोम मिश्रातु (`Ni+Cr+Mn+Fe`) तापन कुंडली' },
      imageUrl: '/ncert-notes/class10-phy-ch11/real/nichrome-heating-coil.webp',
      hotspots: [
        { en: 'Alloys have high resistivity ρ and resist oxidation/burning even when glowing red-hot at high temperature.', hi: 'निक्रोम मिश्रातु की प्रतिरोधकता अधिक होती है और उच्च ताप पर शीघ्र उपचयित/जलती नहीं।' },
      ],
    },
    {
      id: 'vis-ohm-volta',
      figRef: { en: 'NCERT Sec 11.2 & 11.4 Pioneers (`Ohm & Volta`)', hi: 'NCERT 11.2 व 11.4 — ओम तथा वोल्टा' },
      title: { en: 'Georg Simon Ohm (`1827 Ohm’s Law V=IR`) & Alessandro Volta (`Potential Difference V=W/Q`)', hi: 'जॉर्ज साइमन ओम (`V=IR`) व अलेसान्द्रो वोल्टा (`विभवांतर V=W/Q`)' },
      imageUrl: '/ncert-notes/class10-phy-ch11/real/georg-ohm.webp',
      hotspots: [
        { en: 'Ohm (`V = IR`, unit Ω = V/A) and Volta (`V = W/Q`, unit V = J/C) define every quantitative circuit law.', hi: 'ओम (`1 Ω = 1 V/A`) और वोल्टा (`1 V = 1 J/C`) आधुनिक परिपथ विश्लेषण की नींव हैं।' },
      ],
    },
    {
      id: 'vis-volta-portrait',
      figRef: { en: 'NCERT Sec 11.2 Historical Engraving (`Volt Unit Origin`)', hi: 'NCERT 11.2 — अलेसान्द्रो वोल्टा ऐतिहासिक चित्र' },
      title: { en: 'Alessandro Volta (`1745–1827`) — Creator of the Voltaic Pile (`Constant Circuit Potential`)', hi: 'अलेसान्द्रो वोल्टा — विद्युत रासायनिक बैटरी के जनक' },
      imageUrl: '/ncert-notes/class10-phy-ch11/real/alessandro-volta.webp',
      hotspots: [
        { en: 'Chemical reactions inside cells sustain terminal potential difference even before closing the circuit key.', hi: 'सेल में होने वाली रासायनिक अभिक्रिया ही परिपथ बंद करते ही आवेशों में प्रवाह उत्पन्न करती है।' },
      ],
    },
  ],
  activities: [
    {
      num: '11.1',
      title: { en: 'Verifying Ohm’s Law (`0.5 m` Nichrome Wire + `1–4` Dry Cells — `p.194`)', hi: 'ओम का नियम सत्यापन (`0.5 m` निक्रोम तार व `1–4` सेल — `पृ. 194`)' },
      materials: { en: '0.5 m Nichrome wire (`Ni+Cr+Mn+Fe`), 4 cells (`1.5 V` each), ammeter, voltmeter, key', hi: '0.5 m निक्रोम तार (XY), 1.5 V के चार सेल, एमीटर, वोल्टमीटर, प्लग कुंजी' },
      steps: { en: 'Measure `I` and `V` sequentially with `1, 2, 3` and `4` cells (`1.5 V, 3 V, 4.5 V, 6 V`), compute `V/I` for each, and plot `V vs I`.', hi: '1, 2, 3 व 4 सेल बारी-बारी जोड़ कर प्रत्येक हेतु एमीटर `I` व वोल्टमीटर `V` नोट करें तथा `V–I` ग्राफ खींचें।' },
      examTakeaway: { en: '`V / I` stays **constant (`= R`)**, producing a **straight-line graph passing through the origin `(0, 0)`** (`Fig 11.3`) at constant temperature!', hi: 'प्रत्येक चरण में **`V / I` नियत (`R`)** रहता है और **`V–I` ग्राफ मूल बिंदु से गुजरने वाली सरल रेखा** आता है!' },
      predictQuestion: {
        prompt: { en: 'What shape does the `V vs I` graph take for an Ohmic Nichrome conductor at constant temperature (`Activity 11.1`)?', hi: 'नियत ताप पर `क्रियाकलाप 11.1` में निक्रोम तार के लिए `V` और `I` का ग्राफ कैसा बनता है?' },
        options: {
          en: ['Parabolic curve', 'Straight line passing through origin (0, 0)', 'Horizontal flat line'],
          hi: ['परवलयाकार वक्र', 'मूल बिंदु (0, 0) से गुजरती सीधी सरल रेखा', 'क्षैतिज समांतर रेखा'],
        },
        correctIndex: 1,
        reason: { en: 'Constant-temperature proportionality `V ∝ I` yields a linear straight line through origin (`Ohm’s Law Fig 11.3`).', hi: 'नियत ताप पर `V ∝ I` होने से ग्राफ सदैव मूल बिंदु से जाती सीधी सरल रेखा बनता है।' },
      },
    },
    {
      num: '11.2',
      title: { en: 'Different Components Offer Different Current (`Nichrome vs Torch Bulb vs 10W Bulb — p.196`)', hi: 'भिन्न अवयवों में भिन्न विद्युत धारा प्रवाह परीक्षण (`क्रियाकलाप 11.2`)' },
      materials: { en: 'Nichrome wire, torch bulb, 10 W bulb, 4 cells (`6 V`), ammeter (`0–5 A`)', hi: 'निक्रोम तार, टॉर्च बल्ब, 10 W बल्ब, 4 सेल व एमीटर' },
      steps: { en: 'Insert Nichrome wire, torch bulb, and `10 W` bulb one by one across gap `XY` (`remove key immediately after each reading!`) and compare ammeter `I`.', hi: 'अंतराल `XY` में बारी-बारी निक्रोम तार, टॉर्च बल्ब व `10 W` बल्ब लगाकर एमीटर से `I` नोट करें।' },
      examTakeaway: { en: 'Even at the SAME `6 V` battery, `I` differs across components because each material/element opposes electron drift with its own **Resistance `R`**!', hi: 'समान वोल्टेज पर भी धारा भिन्न आती है क्योंकि प्रत्येक पदार्थ इलेक्ट्रॉनों की गति का भिन्न विरोध (**प्रतिरोध**) करता है!' },
      predictQuestion: {
        prompt: { en: 'Why must the plug key ALWAYS be removed right after taking readings in `Activity 11.2`?', hi: '`क्रियाकलाप 11.2` में प्रत्येक पाठ्यांक के तुरंत बाद प्लग से कुंजी बाहर क्यों निकालनी चाहिए?' },
        options: {
          en: ['To reverse current polarity', 'To prevent Joule heating of wire which changes temperature & Resistance R', 'To turn Nichrome into insulator'],
          hi: ['धारा की दिशा पलटने हेतु', 'तार के गरम होकर ताप बदलने व प्रतिरोध `R` परिवर्तित होने से रोकने हेतु', 'निक्रोम को कुचालक बनाने हेतु'],
        },
        correctIndex: 1,
        reason: { en: 'Prolonged current heats wires via `I²Rt`, altering `T` and breaking Ohm’s constant-temperature condition!', hi: 'लगातार धारा चलने से ताप बढ़कर प्रतिरोध `R` को बदल देता है तथा बैटरी व्यर्थ खर्च होती है।' },
      },
    },
    {
      num: '11.3',
      title: { en: '4 Factors Controlling Wire Resistance (`Length l, Double 2l, Thick Wire, Copper — p.197`)', hi: 'प्रतिरोध के कारक प्रयोग: लंबाई `2l`, मोटाई `A` व पदार्थ `Cu/Nichrome` (`11.3`)' },
      materials: { en: 'Nichrome wires `(1) length l`, `(2) double length 2l`, `(3) thicker l`, `(4) Copper wire length l`, ammeter, cell', hi: '(1) `l` निक्रोम, (2) `2l` निक्रोम, (3) मोटा निक्रोम व (4) `l` ताँबे का तार' },
      steps: { en: 'Replace wire across circuit gap in order `(1) -> (2) -> (3) -> (4)` and observe how ammeter reading `I` jumps or drops.', hi: 'परिपथ अंतराल में क्रमशः (1) से (4) तार बदलकर एमीटर धारा `I` में परिवर्तन दर्ज करें।' },
      examTakeaway: { en: 'Doubling length (`2l`) **HALVES current `I/2`** (`R doubled`); thicker wire **INCREASES `I`** (`R drops`); swapping Nichrome -> Copper **JUMPS `I`** (`R = ρl/A`!).', hi: 'लंबाई दुगुनी (`2l`) करने पर धारा आधी (`R` दुगुना); मोटा तार जोड़ने पर धारा बढ़ती है; ताँबा लगाने पर प्रतिरोध कम होने से सर्वाधिक धारा बहती है!' },
      predictQuestion: {
        prompt: { en: 'In `Activity 11.3`, replacing a Nichrome wire with an identical `2l` double-length Nichrome wire makes ammeter reading:', hi: '`क्रियाकलाप 11.3` में समान मोटाई का दोगुना लंबा (`2l`) निक्रोम तार लगाने पर एमीटर का पाठ्यांक:' },
        options: {
          en: ['Doubles', 'Becomes half (1/2)', 'Becomes 4 times'],
          hi: ['दुगुना हो जाता है', 'आधा (1/2) हो जाता है', 'चार गुना हो जाता है'],
        },
        correctIndex: 1,
        reason: { en: '`R ∝ l` -> doubling `l` doubles `R`, so `I = V/R` halves (`NCERT p.198`).', hi: '`R ∝ l` होने से प्रतिरोध दुगुना होता है, अतः धारा `I = V/R` ठीक आधी हो जाती है!' },
      },
    },
    {
      num: '11.4–11.5',
      title: { en: 'Series Resistors: Same `I` Everywhere & Sum of Voltages `V = V₁ + V₂ + V₃` (`p.202–203`)', hi: 'श्रेणीक्रम सत्यापन: सर्वत्र समान धारा `I` व कुल विभवांतर `V = V₁ + V₂ + V₃` (`11.4–11.5`)' },
      materials: { en: '3 resistors (`1 Ω, 2 Ω, 3 Ω`), 6 V battery, ammeter, voltmeter, plug key', hi: '3 प्रतिरोधक (`1 Ω, 2 Ω, 3 Ω`), 6 V बैटरी, एमीटर व वोल्टमीटर' },
      steps: { en: 'Connect `1, 2, 3 Ω` in series; move ammeter between resistors (`Act 11.4`), then measure total `V` and separate `V₁, V₂, V₃` across each (`Act 11.5`).', hi: 'एमीटर को विभिन्न स्थानों पर रख `I` मापें (`11.4`), फिर वोल्टमीटर से अलग-अलग `V₁, V₂, V₃` मापें (`11.5`)।' },
      examTakeaway: { en: 'Ammeter reads **IDENTICAL `I`** at every position in series, while total potential difference **`V = V₁ + V₂ + V₃`** -> proving **`Rs = R₁ + R₂ + R₃`**!', hi: 'श्रेणीक्रम में एमीटर का पाठ्यांक हर जगह **एकसमान (`I`)** रहता है जबकि विभवांतर बँट कर जुड़ता है (`V = V₁ + V₂ + V₃`), अर्थात **`Rs = R₁ + R₂ + R₃`**!' },
      predictQuestion: {
        prompt: { en: 'In a series circuit of `1 Ω, 2 Ω, 3 Ω` across a `6 V` battery, shifting the ammeter from before `1 Ω` to between `2 Ω` and `3 Ω` causes its reading to:', hi: 'श्रेणीक्रम परिपथ में एमीटर को `2 Ω` और `3 Ω` प्रतिरोधकों के बीच ले जाने पर उसके पाठ्यांक पर क्या प्रभाव पड़ेगा?' },
        options: {
          en: ['Drop sharply across each resistor', 'Stay exactly unchanged (1.0 A throughout)', 'Double near negative terminal'],
          hi: ['प्रत्येक प्रतिरोध पर तेजी से घटेगा', 'बिल्कुल अपरिवर्तित (समान 1.0 A) रहेगा', 'ऋण टर्मिनल के पास दुगुना होगा'],
        },
        correctIndex: 1,
        reason: { en: 'Series offers one single path (`Activity 11.4`): current `I` is identical everywhere (`6 V / 6 Ω = 1 A`).', hi: 'श्रेणीक्रम में धारा प्रवाह का एक ही मार्ग है, अतः हर बिंदु पर धारा समान रहेगी।' },
      },
    },
    {
      num: '11.6',
      title: { en: 'Parallel Resistors: Same Voltage `V` & Branch Currents Sum `I = I₁ + I₂ + I₃` (`p.205–206`)', hi: 'पार्श्वक्रम सत्यापन: समान वोल्टता `V` व धाराओं का योग `I = I₁ + I₂ + I₃` (`11.6`)' },
      materials: { en: 'Three resistors (`R₁, R₂, R₃`) in parallel across nodes X–Y, battery, ammeter, voltmeter', hi: 'पार्श्वक्रम में तीन प्रतिरोधक, बैटरी, एमीटर व वोल्टमीटर' },
      steps: { en: 'Verify `V` across each branch matches battery `V`, then connect ammeter individually in each branch to find `I₁, I₂, I₃` and compare with total `I`.', hi: 'प्रत्येक शाखा पर वोल्टमीटर से `V` जांचें व फिर एमीटर द्वारा प्रत्येक शाखा धारा `I₁, I₂, I₃` मापकर कुल धारा `I` से तुलना करें।' },
      examTakeaway: { en: 'Voltage **`V` stays identical** across all parallel branches while **`I = I₁ + I₂ + I₃`**, yielding **`1 / Rp = 1/R₁ + 1/R₂ + 1/R₃`** (`smallest branch `R` draws maximum current!`)!', hi: 'पार्श्वक्रम में प्रत्येक शाखा पर **विभवांतर `V` समान** रहता है तथा कुल धारा **`I = I₁ + I₂ + I₃`** होती है (`सबसे कम प्रतिरोध वाली शाखा में सर्वाधिक धारा!`)।' },
      predictQuestion: {
        prompt: { en: 'If `5 Ω, 10 Ω` and `30 Ω` resistors are connected in parallel across a `12 V` battery (`Ex 11.8`), total resistance `Rp` & current `I` are:', hi: '`5 Ω, 10 Ω` व `30 Ω` को `12 V` बैटरी के पार्श्वक्रम में जोड़ने पर तुल्य प्रतिरोध व कुल धारा होगी:' },
        options: {
          en: ['Rp = 45 Ω, I = 0.27 A', 'Rp = 3 Ω, I = 4.0 A', 'Rp = 15 Ω, I = 0.8 A'],
          hi: ['Rp = 45 Ω, I = 0.27 A', 'Rp = 3 Ω (< 5 Ω!), I = 4.0 A', 'Rp = 15 Ω, I = 0.8 A'],
        },
        correctIndex: 1,
        reason: { en: '`1/Rp = 1/5 + 1/10 + 1/30 = (6+3+1)/30 = 10/30 = 1/3` -> **`Rp = 3 Ω`** (< smallest `5 Ω`!), `I = 12/3 = 4 A`!', hi: '`1/Rp = 1/5 + 1/10 + 1/30 = 10/30` `→` **`Rp = 3 Ω`**, कुल धारा **`I = 12/3 = 4 A`**!' },
      },
    },
  ],
  tables: [
    {
      id: 'table-11-1-symbols',
      title: { en: 'NCERT Table 11.1 — Standard Circuit Component Symbols (`Pages 193–194`)', hi: 'NCERT सारणी 11.1 — विद्युत परिपथ में प्रयुक्त सभी 11 मानक प्रतीक' },
      headers: {
        en: ['No.', 'Component Name', 'Standard Function / Exam Tip'],
        hi: ['क्रम', 'विद्युत अवयव', 'कार्य एवं परीक्षा विशेषता'],
      },
      rows: [
        [{ en: '1–2', hi: '1–2' }, { en: 'Electric Cell / Battery', hi: 'विद्युत सेल / बैटरी' }, { en: 'Long thin line = `(+)` terminal; thick short line = `(−)` terminal (`series cells = battery`)', hi: 'लंबी पतली रेखा `(+)`, छोटी मोटी रेखा `(−)` टर्मिनल; सेलों के श्रेणी संयोजन = बैटरी' }],
        [{ en: '3–4', hi: '3–4' }, { en: 'Open `( )` & Closed `(•)` Plug Key / Switch', hi: 'खुली `( )` एवं बंद `(•)` प्लग कुंजी' }, { en: 'Open key = circuit broken (`I = 0`); dot `(•)` inside = closed circuit flowing current', hi: 'खुली कुंजी में धारा `0`; बिंदु `(•)` लगाते ही बंद परिपथ पूर्ण' }],
        [{ en: '5–6', hi: '5–6' }, { en: 'Wire Joint (`•`) vs Crossing Without Joining (`⌒`)', hi: 'तार संधि बनाम बिना संधि क्रॉसिंग' }, { en: 'Dot `•` shows T-junction contact; curved bridge hop shows insulated non-connected crossover', hi: 'बिंदु संधि संपर्क दर्शाता है, जबकि अर्धवृत्त चाप बिना संपर्क क्रॉसिंग' }],
        [{ en: '7–9', hi: '7–9' }, { en: 'Bulb, Fixed Resistor (`zig-zag`), Rheostat (`arrow`)', hi: 'बल्ब, प्रतिरोधक व धारा नियंत्रक' }, { en: 'Diagonal arrow / sliding contact on resistor = Rheostat (`changes I without changing battery V`)', hi: 'ज़िग-ज़ैग पर तीर चिह्न धारा नियंत्रक है जो स्रोत वोल्टता बदले बिना धारा बदलता है' }],
        [{ en: '10–11', hi: '10–11' }, { en: 'Ammeter `—(A)—` vs Voltmeter `—(V)—`', hi: 'एमीटर `—(A)—` व वोल्टमीटर `—(V)—`' }, { en: 'Ammeter wired in **SERIES** (`low R`); Voltmeter wired in **PARALLEL** (`high R`); both marked `+` & `−`', hi: 'एमीटर सदैव **श्रेणीक्रम**, वोल्टमीटर सदैव **पार्श्वक्रम** में जुड़ता है' }],
      ],
    },
    {
      id: 'table-11-2-resistivity',
      title: { en: 'NCERT Table 11.2 — Electrical Resistivity `ρ` (`Ω·m` at `20 °C`) & Industrial Choices', hi: 'NCERT सारणी 11.2 — `20 °C` पर पदार्थों की वैद्युत प्रतिरोधकता (`ρ`, `Ω·m`)' },
      headers: {
        en: ['Category', 'Material / Alloy', 'Resistivity `ρ` (`Ω·m`)', 'Railway Exam Application'],
        hi: ['वर्ग', 'पदार्थ / मिश्रातु', 'प्रतिरोधकता `ρ` (`Ω·m`)', 'परीक्षा व व्यावहारिक उपयोग'],
      },
      rows: [
        [{ en: 'Conductor ★', hi: 'सर्वोत्तम चालक ★' }, { en: '**Silver (`Ag`)**', hi: '**चाँदी (`Silver`)**' }, { en: '**`1.60 × 10⁻⁸`** (`LOWEST!`)', hi: '**`1.60 × 10⁻⁸`** (`न्यूनतम!`)' }, { en: '**Best electrical conductor of all (`p.200 Q5b`)**', hi: '**सभी पदार्थों में सर्वश्रेष्ठ विद्युत चालक!**' }],
        [{ en: 'Conductor ★', hi: 'संचरण चालक ★' }, { en: '**Copper (`Cu`)** & **Aluminium (`Al`)**', hi: '**ताँबा (`Cu`) व एल्युमिनियम (`Al`)**' }, { en: '`1.62 × 10⁻⁸` / `2.63 × 10⁻⁸`', hi: '`1.62 × 10⁻⁸` / `2.63 × 10⁻⁸`' }, { en: 'Overhead power transmission lines (`low ρ, cheap & ductile`)', hi: 'विद्युत संचरण तार (`Ex 18e` — न्यूनतम ऊष्मा हानि)' }],
        [{ en: 'Conductor ★', hi: 'बल्ब तंतु ★' }, { en: '**Tungsten (`W`)**', hi: '**टंगस्टन (`W`)**' }, { en: '`5.20 × 10⁻⁸`', hi: '`5.20 × 10⁻⁸`' }, { en: '**Sole filament metal (`M.P. 3380 °C`, high tensile strength)**', hi: '**बल्ब तंतु (`गलनांक 3380 °C`)**' }],
        [{ en: 'Conductors', hi: 'अन्य धातुएँ' }, { en: 'Iron (`Fe`) / Mercury (`Hg`) / Manganese', hi: 'लोहा (`Fe`) / पारा (`Hg`) / मैंगनीज' }, { en: 'Fe `10×10⁻⁸` | Hg `94×10⁻⁸` | Mn `1.84×10⁻⁶`', hi: 'Fe `10×10⁻⁸` | Hg `94×10⁻⁸` | Mn `1.84×10⁻⁶`' }, { en: 'Iron conducts 9.4× better than Mercury (`p.200 Q5a`)', hi: 'आयरन (लोहा), मर्करी (पारा) से अच्छा चालक है' }],
        [{ en: 'Alloys ★', hi: 'मिश्रातुएँ ★' }, { en: '**Constantan** (`Cu-Ni`), **Manganin** (`Cu-Mn-Ni`), **Nichrome** (`Ni-Cr-Mn-Fe`)', hi: '**कांस्टेंटन, मैंगनिन, निक्रोम (`Ni-Cr-Mn-Fe`)**' }, { en: '`49×10⁻⁶` / `44×10⁻⁶` / **`100×10⁻⁶`**', hi: '`49×10⁻⁶` / `44×10⁻⁶` / **`100×10⁻⁶`**' }, { en: '**High `ρ` + Non-oxidizing at high heat -> Toaster/Heater coils**', hi: '**उच्च `ρ` व उच्च ताप पर शीघ्र दहन नहीं (`Ex 18b`)**' }],
        [{ en: 'Insulators', hi: 'विद्युतरोधी' }, { en: 'Glass, Ebonite, Diamond, Dry Paper', hi: 'काँच, एबोनाइट, हीरा, शुष्क कागज' }, { en: '`10¹⁰` to `10¹⁷ Ω·m`', hi: '`10¹⁰` से `10¹⁷ Ω·m`' }, { en: 'Extremely high `ρ` (`10²⁰×` higher than metals!)', hi: 'इतनी उच्च प्रतिरोधकता कि धारा प्रवाहित नहीं होती' }],
      ],
    },
    {
      id: 'table-11-3-series-parallel',
      title: { en: 'Head-to-Head Comparison: Series vs Parallel Circuits (`All PYQ Properties`)', hi: 'तुलना सारणी: श्रेणीक्रम (`Series`) बनाम पार्श्वक्रम (`Parallel`)' },
      headers: {
        en: ['Parameter', 'Series (`R_s = R₁ + R₂ + ...`)', 'Parallel (`1/R_p = 1/R₁ + 1/R₂ + ...`)'],
        hi: ['लक्षण', 'श्रेणीक्रम (`R_s = R₁ + R₂ + ...`)', 'पार्श्वक्रम (`1/R_p = 1/R₁ + 1/R₂ + ...`)'],
      },
      rows: [
        [{ en: 'Constant Quantity', hi: 'समान रहने वाली राशि' }, { en: '**Current (`I`)** is SAME in all resistors', hi: '**विद्युत धारा (`I`)** सभी में समान' }, { en: '**Potential Difference (`V`)** is SAME across all', hi: '**विभवांतर (`V`)** सभी शाखाओं पर समान' }],
        [{ en: 'Dividing Quantity', hi: 'बँटने वाली राशि' }, { en: 'Voltage divides (`V = V₁ + V₂ + ...`, `V ∝ R`)', hi: 'विभवांतर बँटता है (`V = V₁ + V₂`, `V ∝ R`)' }, { en: 'Current divides (`I = I₁ + I₂ + ...`, `I ∝ 1/R`)' , hi: 'धारा बँटती है (`I = I₁ + I₂`, `I ∝ 1/R`)' }],
        [{ en: 'Equivalent `R_eq`', hi: 'तुल्य प्रतिरोध `R_eq`' }, { en: '`R_s` > Largest individual resistor (`Max`, `n·R`)', hi: '`R_s` सबसे बड़े से अधिक (`अधिकतम`, `n·R`)' }, { en: '`R_p` < Smallest individual resistor (`Min`, `R/n`)', hi: '`R_p` सबसे छोटे से भी कम (`न्यूनतम`, `R/n`)' }],
        [{ en: '1 Component Fails / Wiring Use', hi: '1 उपकरण खराब व उपयोग' }, { en: 'Whole circuit shuts OFF (`Fairy bulbs, Fuse`)', hi: '1 बंद तो सब बंद (`सजावटी लड़ियाँ व फ्यूज`)' }, { en: '**Home appliances & separate switches** (`Ex 18c`)', hi: '**घरेलू वायरिंग: 1 खराब होने पर भी अन्य चलते रहते हैं**' }],
      ],
    },
    {
      id: 'table-11-4-power-energy-units',
      title: { en: 'NCERT Electricity SI Units, Formulas & Numeric Constants Cheat-Sheet', hi: 'अध्याय 11 सभी SI मात्रक, सूत्र एवं आंकिक स्थिरांक महा-सारणी' },
      headers: {
        en: ['Quantity', 'Formula', 'SI Unit (`Symbol`)', 'Must-Know Value / Definition'],
        hi: ['भौतिक राशि', 'मुख्य सूत्र', 'SI मात्रक', 'परीक्षा मान / परिभाषा'],
      },
      rows: [
        [{ en: 'Electric Charge (`Q`)', hi: 'विद्युत आवेश (`Q`)' }, { en: '`Q = I·t = n·e`', hi: '`Q = I·t = n·e`' }, { en: 'Coulomb (`C`)', hi: 'कूलॉम (`C`)' }, { en: '`e = 1.6×10⁻¹⁹ C` • **`1 C ≈ 6×10¹⁸ e⁻`**', hi: '`e = 1.6×10⁻¹⁹ C` • **`1 C ≈ 6×10¹⁸ इलेक्ट्रॉन`**' }],
        [{ en: 'Electric Current (`I`)', hi: 'विद्युत धारा (`I`)' }, { en: '`I = Q / t`', hi: '`I = Q / t`' }, { en: 'Ampere (`A = C/s`)', hi: 'एम्पियर (`A = C/s`)' }, { en: 'Ammeter (Series); `1 mA = 10⁻³ A`, `1 µA = 10⁻⁶ A`', hi: 'एमीटर (श्रेणीक्रम); `1 mA = 10⁻³ A`, `1 µA = 10⁻⁶ A`' }],
        [{ en: 'Potential Difference (`V`)', hi: 'विभवांतर (`V`)' }, { en: '`V = W / Q`', hi: '`V = W / Q`' }, { en: 'Volt (`V = J/C`)', hi: 'वोल्ट (`V = J/C`)' }, { en: 'Voltmeter (Parallel); `1 V = 1 J per 1 C`', hi: 'वोल्टमीटर (पार्श्वक्रम); `1 V = 1 जूल / 1 कूलॉम`' }],
        [{ en: 'Resistance (`R`) & `ρ`', hi: 'प्रतिरोध (`R`) व `ρ`' }, { en: '`R = V/I = ρl/A`', hi: '`R = V/I = ρl/A`' }, { en: '`Ohm (Ω)` / `Ω·m`', hi: '`ओम (Ω)` / `Ω·m`' }, { en: '`ρ` depends ONLY on material & temperature!', hi: '`ρ` केवल पदार्थ व ताप पर निर्भर करता है!' }],
        [{ en: 'Heat Energy (`H`)', hi: 'जूल ऊष्मा (`H`)' }, { en: '`H = VIt = I²Rt = V²t/R`', hi: '`H = VIt = I²Rt = V²t/R`' }, { en: 'Joule (`J`)', hi: 'जूल (`J`)' }, { en: 'Rate of heat = Power (`I²R` J/s = Watt)', hi: 'ऊष्मा उत्पादन दर = शक्ति (`I²R` J/s = वाट)' }],
        [{ en: 'Electric Power (`P`) & Energy', hi: 'विद्युत शक्ति (`P`) व यूनिट' }, { en: '`P = VI = I²R = V²/R`', hi: '`P = VI = I²R = V²/R`' }, { en: 'Watt (`W`) / `kWh`', hi: 'वाट (`W`) / `kWh`' }, { en: '`1 kW = 1000 J/s` • **`1 kWh = 3.6 × 10⁶ J`**', hi: '`1 kW = 1000 J/s` • **`1 kWh = 3.6 × 10⁶ जूल`**' }],
      ],
    },
    {
      id: 'table-11-5-ncert-examples',
      title: { en: 'Quick Audit of All Worked NCERT Examples (`11.1` to `11.13` — Direct Numerical Blueprint!)', hi: 'NCERT के सभी 13 हल उदाहरणों (`11.1` से `11.13`) का त्वरित रिवीजन' },
      headers: {
        en: ['Example', 'Given Values', 'Formula Used', 'Verified Answer'],
        hi: ['उदाहरण', 'दिया गया डेटा', 'प्रयुक्त सूत्र', 'सटीक परिणाम'],
      },
      rows: [
        [{ en: '11.1 & 11.2', hi: '11.1 व 11.2' }, { en: '`I=0.5A, t=10m` | `V=12V, Q=2C`', hi: '`I=0.5A, t=10m` | `V=12V, Q=2C`' }, { en: '`Q=It` | `W=VQ`', hi: '`Q=It` | `W=VQ`' }, { en: '**`300 C`** | **`24 J`**', hi: '**`300 C`** | **`24 J`**' }],
        [{ en: '11.3 & 11.4', hi: '11.3 व 11.4' }, { en: '`220V` on `1200Ω/100Ω` | `4A@60V→120V`', hi: '`220V` पर `1200/100Ω` | `4A@60→120V`' }, { en: '`I = V / R`', hi: '`I = V / R`' }, { en: '**`0.18 A` / `2.2 A`** | **`8 A`**', hi: '**`0.18 A` / `2.2 A`** | **`8 A`**' }],
        [{ en: '11.5 & 11.6', hi: '11.5 व 11.6' }, { en: '`l=1m, R=26Ω, d=0.3mm` | `(l/2, 2A)` from `4Ω`', hi: '`l=1m, R=26Ω, d=0.3mm` | `4Ω (l/2, 2A)`' }, { en: '`ρ=RA/l` | `R=ρl/A`', hi: '`ρ=RA/l` | `R=ρl/A`' }, { en: '**`1.84×10⁻⁶ Ω·m` (Mn)** | **`1 Ω`**', hi: '**`1.84×10⁻⁶ Ω·m` (Mn)** | **`1 Ω`**' }],
        [{ en: '11.7 & 11.8', hi: '11.7 व 11.8' }, { en: 'Series `20+4Ω@6V` | Parallel `5∥10∥30Ω@12V`', hi: 'श्रेणी `20+4Ω@6V` | पार्श्व `5∥10∥30@12V`' }, { en: '`Rs=24Ω` | `Rp=3Ω`', hi: '`Rs=24Ω` | `Rp=3Ω`' }, { en: '**`0.25 A` (`5V, 1V`)** | **`4 A` (`2.4, 1.2, 0.4A`)**', hi: '**`0.25 A` (`5V, 1V`)** | **`4 A` (`2.4, 1.2, 0.4A`)**' }],
        [{ en: '11.9 (Fig 11.12)', hi: '11.9 (मिश्रित)' }, { en: '`(10∥40) + (30∥20∥60)` on `12 V`', hi: '`(10∥40) + (30∥20∥60)` @ `12 V`' }, { en: '`R’=8Ω, R”=10Ω`', hi: '`R’=8Ω, R”=10Ω`' }, { en: '**`R_total = 18 Ω`, `I = 0.67 A`**', hi: '**`कुल R = 18 Ω`, `I = 0.67 A`**' }],
        [{ en: '11.10 & 11.11', hi: '11.10 व 11.11' }, { en: '`840W/360W @220V` | `4Ω, 100J/s`', hi: '`840W/360W @220V` | `4Ω, 100J/s`' }, { en: '`I=P/V` | `I=√(H/Rt)`', hi: '`I=P/V` | `I=√(H/Rt)`' }, { en: '**`3.82A (57.6Ω)` / `1.64A (134.15Ω)`** | **`20 V`**', hi: '**`3.82A (57.6Ω)` / `1.64A (134.15Ω)`** | **`20 V`**' }],
        [{ en: '11.12 & 11.13', hi: '11.12 व 11.13' }, { en: '`220V, 0.5A` | `400W fridge 8h×30d @₹3`', hi: '`220V, 0.5A` | `400W फ्रिज 8h×30d @₹3`' }, { en: '`P=VI` | `E=P·t`', hi: '`P=VI` | `E=P·t`' }, { en: '**`110 W`** | **`96 kWh = ₹288`**', hi: '**`110 W`** | **`96 kWh = ₹288`**' }],
      ],
    },
  ],
  inTextQuestions: [
    { num: 'p.191 Q1', q: { en: 'What does an electric circuit mean?', hi: 'विद्युत परिपथ का क्या अर्थ है?' }, a: { en: 'A **continuous and closed path** of electric current is called an electric circuit (`Sec 11.1`). If broken anywhere (`switch OFF`), current stops.', hi: 'किसी विद्युत धारा के **सतत तथा बंद पथ** को विद्युत परिपथ कहते हैं।' } },
    { num: 'p.191 Q2', q: { en: 'Define the unit of current.', hi: 'विद्युत धारा के मात्रक की परिभाषा लिखिए।' }, a: { en: 'SI unit of current is **Ampere (`A`)**: **`1 Ampere`** is constituted by the flow of **`1 Coulomb` of charge per second (`1 A = 1 C / 1 s`)**.', hi: 'विद्युत धारा का SI मात्रक **एम्पियर (`A`)** है — प्रति सेकंड **`1 कूलॉम`** आवेश के प्रवाह से **`1 एम्पियर`** धारा बनती है (`1 A = 1 C/s`)।' } },
    { num: 'p.191 Q3', q: { en: 'Calculate the number of electrons constituting one coulomb of charge.', hi: 'एक कूलॉम आवेश की रचना करने वाले इलेक्ट्रॉनों की संख्या परिकलित कीजिए।' }, a: { en: 'Charge on 1 electron `e = 1.6 × 10⁻¹⁹ C`. Total electrons in `1 C`: **`n = Q/e = 1 / (1.6×10⁻¹⁹) = 6.25 × 10¹⁸` (`NCERT p.191 prints ≈ 6 × 10¹⁸ electrons`)**!', hi: '`e = 1.6×10⁻¹⁹ C`, अतः **`n = 1/(1.6×10⁻¹⁹) = 6.25 × 10¹⁸`** (`NCERT में ≈ 6 × 10¹⁸ इलेक्ट्रॉन`)।' } },
    { num: 'p.192 Q1', q: { en: 'Name a device that helps to maintain a potential difference across a conductor.', hi: 'उस युक्ति का नाम लिखिए, जो किसी चालक के सिरों पर विभवांतर बनाए रखने में सहायता करती है।' }, a: { en: 'A **Cell or Battery (`one or more electric cells`)** (`direct Group D 2025 PYQ!`).', hi: '**विद्युत सेल या सेलों से बनी बैटरी**।' } },
    { num: 'p.192 Q2', q: { en: 'What is meant by saying that the potential difference between two points is `1 V`?', hi: 'यह कहने का क्या तात्पर्य है कि दो बिंदुओं के बीच विभवांतर `1 V` है?' }, a: { en: 'It means **`1 Joule` of work is done** in moving a unit positive charge of **`1 Coulomb`** from one point to the other (`1 V = 1 J/C`).', hi: 'इसका अर्थ है कि धारावाही चालक में एक बिंदु से दूसरे बिंदु तक **`1 कूलॉम`** आवेश को ले जाने में **`1 जूल`** कार्य किया गया है।' } },
    { num: 'p.192 Q3', q: { en: 'How much energy is given to each coulomb of charge passing through a `6 V` battery?', hi: '`6 V` बैटरी से गुजरने वाले हर एक कूलॉम आवेश को कितनी ऊर्जा दी जाती है?' }, a: { en: 'Work/Energy **`W = V · Q = 6 V × 1 C = 6 Joules (6 J)`**!', hi: 'दी गई ऊर्जा **`W = V × Q = 6 V × 1 C = 6 जूल`**!' } },
    { num: 'p.200 Q1', q: { en: 'On what factors does the resistance of a conductor depend?', hi: 'किसी चालक का प्रतिरोध किन कारकों पर निर्भर करता है?' }, a: { en: '(i) **Length `l`** (`R ∝ l`), (ii) **Area of cross-section `A`** (`R ∝ 1/A`), (iii) **Nature of material** (`ρ`), and (iv) **Temperature**.', hi: '(i) चालक की **लंबाई `l`** (`R ∝ l`), (ii) **अनुप्रस्थ काट का क्षेत्रफल `A`** (`R ∝ 1/A`), (iii) **पदार्थ की प्रकृति**, तथा (iv) **ताप** पर।' } },
    { num: 'p.200 Q2', q: { en: 'Will current flow more easily through a thick wire or a thin wire of the same material, when connected to the same source? Why?', hi: 'समान पदार्थ के एक पतले व एक मोटे तार में से किसमें विद्युत धारा आसानी से प्रवाहित होगी, जब समान स्रोत से जोड़ें? क्यों?' }, a: { en: 'More easily through the **THICK wire**, because `R ∝ 1/A` — larger cross-sectional area offers **smaller resistance**, letting larger current flow (`Group D Shift 38 PYQ!`).', hi: '**मोटे तार में** धारा अधिक आसानी से बहेगी क्योंकि मोटे तार का क्षेत्रफल `A` अधिक होने से उसका **प्रतिरोध `R ∝ 1/A` कम** होता है।' } },
    { num: 'p.200 Q3', q: { en: 'Let the resistance of an electrical component remain constant while the potential difference across its two ends decreases to half of its former value. What change will occur in the current through it?', hi: 'किसी वैद्युत अवयव का प्रतिरोध नियत रखकर दोनों सिरों के बीच विभवांतर घटाकर आधा करने पर धारा में क्या परिवर्तन होगा?' }, a: { en: 'By Ohm’s law **`I = V / R`**: at constant `R`, **`I ∝ V`**. Halving `V` immediately **halves the current (`I/2`)**!', hi: 'ओम के नियम `I = V/R` से नियत `R` पर `V` आधा करने से **विद्युत धारा भी आधी रह जाएगी**!' } },
    { num: 'p.200 Q4', q: { en: 'Why are coils of electric toasters and electric irons made of an alloy rather than a pure metal?', hi: 'विद्युत टोस्टरों तथा विद्युत इस्तरियों के तापन अवयव शुद्ध धातु के न बनाकर किसी मिश्रातु के क्यों बनाए जाते हैं?' }, a: { en: 'Two NCERT reasons (`p.198`): `(1)` Alloys have **higher resistivity (`ρ`)** than their constituent pure metals (`more I²Rt heat`), and `(2)` Alloys **do NOT oxidize (burn) readily at high temperatures**!', hi: 'दो कारण: `(1)` मिश्रातुओं की **प्रतिरोधकता `ρ`** अवयवी धातुओं से बहुत अधिक होती है, व `(2)` उच्च ताप पर इनका **शीघ्र उपचयन (दहन) नहीं** होता।' } },
    { num: 'p.200 Q5', q: { en: 'Use Table 11.2 to answer: (a) Which among iron (`Fe`) and mercury (`Hg`) is a better conductor? (b) Which material is the best conductor?', hi: 'सारणी 11.2 से बताएं: (a) आयरन (`Fe`) तथा मर्करी (`Hg`) में कौन अच्छा चालक है? (b) कौन-सा पदार्थ सर्वश्रेष्ठ चालक है?' }, a: { en: '**(a) Iron (`Fe`, `10.0×10⁻⁸ Ω·m`)** is a much better conductor than Mercury (`94.0×10⁻⁸ Ω·m` — lower `ρ` conducts better!); **(b) Silver (`1.60×10⁻⁸ Ω·m`)** is the best conductor!', hi: '**(a) आयरन (`10.0×10⁻⁸ Ω·m`)**, मर्करी (`94.0×10⁻⁸ Ω·m`) से अच्छा चालक है; **(b) सिल्वर / चाँदी (`1.60×10⁻⁸ Ω·m`)** सर्वश्रेष्ठ चालक है!' } },
    { num: 'p.205 Q1', q: { en: 'Draw a schematic diagram of a circuit with a battery of three cells of `2 V` each, a `5 Ω`, `8 Ω` and `12 Ω` resistor, and a plug key, all connected in series.', hi: 'एक परिपथ खींचिए जिसमें `2 V` के 3 सेलों की बैटरी (`6 V`), `5 Ω`, `8 Ω`, `12 Ω` प्रतिरोधक तथा प्लग कुंजी सभी श्रेणीक्रम में जुड़े हों।' }, a: { en: 'Loop wiring 3 cells in series (**total `6 V`**) connected end-to-end with closed key, `5 Ω`, `8 Ω` and `12 Ω` resistors (`total Rs = 25 Ω`).', hi: '2V के 3 सेल (`कुल 6 V`) श्रेणी में, बंद कुंजी तथा `5 Ω`, `8 Ω`, `12 Ω` श्रेणीक्रम लूप (`Rs = 25 Ω`)।' } },
    { num: 'p.205 Q2', q: { en: 'Redraw the circuit of Q1 above putting an ammeter in series and a voltmeter across the `12 Ω` resistor. What would be their readings?', hi: 'प्रश्न 1 के परिपथ में धारा मापने हेतु एमीटर तथा `12 Ω` के सिरों पर वोल्टमीटर जोड़ें। दोनों के पाठ्यांक क्या होंगे?' }, a: { en: 'Total `Rs = 5 + 8 + 12 = 25 Ω`; Battery `V = 3 × 2 = 6 V`. **Ammeter reading `I = 6 / 25 = 0.24 A`**. **Voltmeter across `12 Ω` = `I × 12 = 0.24 × 12 = 2.88 V`**!', hi: 'कुल `Rs = 25 Ω`, `V = 6 V` `→` **एमीटर पाठ्यांक `I = 6/25 = 0.24 A`**; `12 Ω` पर **वोल्टमीटर पाठ्यांक `V = 0.24 × 12 = 2.88 V`**!' } },
    { num: 'p.208 Q1', q: { en: 'Judge the equivalent resistance when connecting in parallel: (a) `1 Ω` and `10⁶ Ω`, (b) `1 Ω, 10³ Ω` and `10⁶ Ω`.', hi: 'पार्श्वक्रम में जोड़ने पर तुल्य प्रतिरोध का अनुमान बताएं: (a) `1 Ω` व `10⁶ Ω` (b) `1 Ω, 10³ Ω, 10⁶ Ω`।' }, a: { en: 'In parallel, `Rp < smallest individual resistance`! Here `(a) Rp ≈ 1 Ω` (`actually 0.999999 Ω < 1 Ω`), and `(b) Rp ≈ 1 Ω` (`0.999 Ω, strictly slightly less than 1 Ω`)!', hi: 'पार्श्वक्रम में तुल्य प्रतिरोध **सदैव सबसे छोटे प्रतिरोध (`1 Ω`) से थोड़ा कम** (`दोनों मामलों में ≈ 1 Ω से कम, ~0.999 Ω`) होगा!' } },
    { num: 'p.208 Q2', q: { en: 'An electric lamp (`100 Ω`), toaster (`50 Ω`), and water filter (`500 Ω`) are connected in parallel to `220 V`. What is the resistance of an electric iron that takes as much current as all three appliances, and what is the current through it?', hi: '`100 Ω` लैंप, `50 Ω` टोस्टर व `500 Ω` जल फिल्टर `220 V` पर पार्श्वक्रम में जुड़े हैं। उतनी ही धारा लेने वाली विद्युत इस्तरी का प्रतिरोध व धारा ज्ञात करें।' }, a: { en: '`1/Rp = 1/100 + 1/50 + 1/500 = (5+10+1)/500 = 16/500`. Iron resistance **`Rp = 500/16 = 31.25 Ω`**. Current **`I = 220 / 31.25 = 7.04 A`**!', hi: '`1/Rp = 1/100 + 1/50 + 1/500 = 16/500` `→` इस्तरी प्रतिरोध **`Rp = 31.25 Ω`**, व धारा **`I = 220/31.25 = 7.04 A`**!' } },
    { num: 'p.208 Q3', q: { en: 'What are the advantages of connecting electrical devices in parallel with the battery instead of connecting them in series?', hi: 'श्रेणीक्रम के स्थान पर वैद्युत युक्तियों को पार्श्वक्रम में संयोजित करने के क्या लाभ हैं?' }, a: { en: '`(1)` Every device gets full identical `220 V` voltage; `(2)` Devices with different power ratings draw required separate currents (`heaters vs LED bulbs`); `(3)` Fault in one appliance doesn’t shut down the others; `(4)` Total equivalent resistance drops.', hi: '`(1)` सबको समान `220 V` वोल्टता मिलती है; `(2)` अलग-अलग धारा आवश्यकता वाले उपकरण आराम से चलते हैं; `(3)` एक के बंद/फ्यूज होने पर बाकी चलते रहते हैं; `(4)` कुल परिपथ प्रतिरोध घटता है।' } },
    { num: 'p.208 Q4', q: { en: 'How can three resistors of resistances `2 Ω, 3 Ω`, and `6 Ω` be connected to give a total resistance of (a) `4 Ω`, (b) `1 Ω`?', hi: '`2 Ω, 3 Ω` तथा `6 Ω` के तीन प्रतिरोधकों को कैसे संयोजित करें कि कुल प्रतिरोध (a) `4 Ω`, (b) `1 Ω` प्राप्त हो?' }, a: { en: '**(a) For `4 Ω`**: Connect **`3 Ω` & `6 Ω` in parallel** (`3×6/(3+6) = 2 Ω`), then wire that **in series with `2 Ω`** (`2 + 2 = 4 Ω`)! **(b) For `1 Ω`**: Wire **all three (`2, 3, 6 Ω`) in parallel**: `1/R = 1/2 + 1/3 + 1/6 = 6/6 = 1` -> **`1 Ω`**!', hi: '**(a) `4 Ω` हेतु**: `3 Ω` व `6 Ω` को **पार्श्वक्रम** (`तुल्य 2 Ω`) में जोड़कर इसके साथ `2 Ω` को **श्रेणीक्रम** में जोड़ें (`2 + 2 = 4 Ω`); **(b) `1 Ω` हेतु**: तीनों को **पार्श्वक्रम** में जोड़ें (`1/2 + 1/3 + 1/6 = 1 Ω`)!' } },
    { num: 'p.208 Q5', q: { en: 'What is (a) the highest, (b) the lowest total resistance that can be secured by combinations of four coils of resistances `4 Ω, 8 Ω, 12 Ω, 24 Ω`?', hi: '`4 Ω, 8 Ω, 12 Ω, 24 Ω` की चार कुंडलियों से प्राप्त (a) अधिकतम व (b) निम्नतम प्रतिरोध क्या होगा?' }, a: { en: '**(a) Highest = All in SERIES**: `Rs = 4 + 8 + 12 + 24 =` **`48 Ω`**. **(b) Lowest = All in PARALLEL**: `1/Rp = 1/4 + 1/8 + 1/12 + 1/24 = (6+3+2+1)/24 = 12/24 = 1/2` -> **`Rp = 2 Ω`**!', hi: '**(a) अधिकतम (श्रेणीक्रम)**: `4 + 8 + 12 + 24 =` **`48 Ω`**; **(b) निम्नतम (पार्श्वक्रम)**: `1/Rp = 1/4 + 1/8 + 1/12 + 1/24 = 12/24` `→` **`Rp = 2 Ω`**!' } },
    { num: 'p.210 Q1', q: { en: 'Why does the cord of an electric heater not glow while the heating element does?', hi: 'किसी विद्युत हीटर की डोरी क्यों उत्तप्त नहीं होती, जबकि उसका तापन अवयव उत्तप्त हो जाता है?' }, a: { en: 'Both carry the same series current `I`. By **`H = I²Rt`**, heater element is high-resistance **Nichrome** producing massive heat and glowing red-hot, while thick **Copper** cord has extremely low resistance `R`, generating negligible heat.', hi: 'समान धारा `I` प्रवाहित होने पर जूल नियम `H = I²Rt` से उच्च प्रतिरोध वाली **निक्रोम कुंडली** लाल तप्त हो जाती है, जबकि मोटे ताँबे की **डोरी का प्रतिरोध नगण्य** होने से वह गर्म नहीं होती।' } },
    { num: 'p.210 Q2', q: { en: 'Compute the heat generated while transferring `96000 coulomb` of charge in `1 hour` through a potential difference of `50 V`. *(Note: NCERT 2026 Hindi print writes `50 W` as typo for `50 V`)*', hi: '`1 घंटे` में `50 V` विभवांतर से `96000 कूलॉम` आवेश को स्थानांतरित करने में उत्पन्न ऊष्मा परिकलित कीजिए। (`p.210 Q2`)' }, a: { en: '`Q = 96000 C`, `V = 50 V` -> **`H = V · Q = 50 × 96000 = 4,800,000 J = 4.8 × 10⁶ J` (`4.8 MJ`)**! (`Note: time t = 1 h isn’t even needed since H = V·I·t = V·Q!`).', hi: 'उत्पन्न ऊष्मा **`H = V × Q = 50 × 96000 = 4.8 × 10⁶ जूल` (`4.8 MJ`)**!' } },
    { num: 'p.210 Q3', q: { en: 'An electric iron of resistance `20 Ω` takes a current of `5 A`. Calculate the heat developed in `30 s`.', hi: '`20 Ω` प्रतिरोध की कोई विद्युत इस्तरी `5 A` धारा लेती है। `30 s` में उत्पन्न ऊष्मा परिकलित कीजिए।' }, a: { en: 'Using **`H = I² · R · t = (5)² × 20 × 30 = 25 × 600 = 15,000 J` (`1.5 × 10⁴ J` / `15 kJ`)**!', hi: 'जूल सूत्र **`H = I²Rt = 5² × 20 × 30 = 15,000 जूल (15 kJ)`**!' } },
    { num: 'p.213 Q1', q: { en: 'What determines the rate at which energy is delivered by a current?', hi: 'विद्युत धारा द्वारा प्रदत्त ऊर्जा की दर का निर्धारण कैसे किया जाता है?' }, a: { en: '**Electric Power (`P = V · I = I²R`)** — measured in **Watts (`1 W = 1 J/s`)**!', hi: '**विद्युत शक्ति (`Electric Power: P = VI = I²R`)** द्वारा (`मात्रक वाट`)।' } },
    { num: 'p.213 Q2', q: { en: 'An electric motor takes `5 A` from a `220 V` line. Determine the power of the motor and the energy consumed in `2 h`.', hi: 'कोई विद्युत मोटर `220 V` स्रोत से `5.0 A` धारा लेता है। मोटर की शक्ति व `2 घंटे` में उपभुक्त ऊर्जा बताएं।' }, a: { en: '**Power `P = V·I = 220 × 5 = 1100 W` (`1.1 kW`)**. Energy in `2 h (7200 s)`: **`E = P·t = 1100 × 7200 = 7.92 × 10⁶ J`** (`or 1.1 kW × 2 h = 2.2 kWh`).', hi: '**शक्ति `P = 220 × 5 = 1100 W (1.1 kW)`**; `2 घंटे` (`7200 s`) में ऊर्जा **`E = P×t = 7.92 × 10⁶ J` (`या 2.2 kWh`)**।' } },
  ],
  exercises: [
    { num: 1, q: { en: 'A piece of wire of resistance `R` is cut into 5 equal parts connected in parallel (`R’`). Ratio `R / R’` is: (a) 1/25 (b) 1/5 (c) 5 (d) 25', hi: 'प्रतिरोध `R` के तार को पाँच बराबर भागों में काटकर पार्श्वक्रम में जोड़ने (`R’`) पर `R / R’` अनुपात होगा: (a) 1/25 (b) 1/5 (c) 5 (d) 25' }, a: { en: '**(d) 25** (`jhsc1an.pdf` verified). Each 1/5th part has `R/5`. Five `R/5` in parallel -> `R’ = (R/5)/5 = R/25` -> **`R / R’ = 25`**!', hi: '**(d) 25** (`आधिकारिक उत्तरमाला सत्यापित`) — प्रत्येक भाग का प्रतिरोध `R/5`; 5 टुकड़े पार्श्व में जुड़कर `R’ = R/25` बनते हैं, अतः `R/R’ = 25`!' } },
    { num: 2, q: { en: 'Which of the following terms does NOT represent electrical power in a circuit? (a) `I²R` (b) `IR²` (c) `VI` (d) `V²/R`', hi: 'निम्न में कौन-सा पद विद्युत परिपथ में विद्युत शक्ति को निरूपित नहीं करता? (a) `I²R` (b) `IR²` (c) `VI` (d) `V²/R`' }, a: { en: '**(b) `IR²`** (`jhsc1an.pdf` verified). Valid power formulas are `P = VI = I²R = V²/R`; `IR²` does not even have Watt dimensions!', hi: '**(b) `IR²`** (`आधिकारिक उत्तरमाला सत्यापित`) — सही सूत्र केवल `VI`, `I²R` और `V²/R` हैं!' } },
    { num: 3, q: { en: 'An electric bulb is rated `220 V; 100 W`. When operated on `110 V`, power consumed will be: (a) 100 W (b) 75 W (c) 50 W (d) 25 W', hi: '`220 V; 100 W` विद्युत बल्ब को `110 V` पर प्रचालित करने पर उपभुक्त शक्ति कितनी होगी? (a) 100 W (b) 75 W (c) 50 W (d) 25 W' }, a: { en: '**(d) 25 W** (`jhsc1an.pdf` verified). Fixed filament resistance `R = V²/P = 220²/100 = 484 Ω`. At `110 V`, **`P = 110² / 484 = 25 W`** (`halving V drops power to ¼!`).', hi: '**(d) 25 W** (`आधिकारिक उत्तरमाला सत्यापित`) — तंतु प्रतिरोध `R = 220²/100 = 484 Ω` नियत रहने से `110 V` पर `P = 110²/484 = 25 W`!' } },
    { num: 4, q: { en: 'Two conducting wires of same material, equal lengths and equal diameters are first connected in series and then parallel across the same potential difference. Ratio of heat produced in series and parallel would be: (a) 1:2 (b) 2:1 (c) 1:4 (d) 4:1', hi: 'समान पदार्थ, लंबाई व व्यास वाले दो तार पहले श्रेणी व फिर पार्श्व में समान विभवांतर से जोड़े जाएं, तो उत्पन्न ऊष्माओं का अनुपात होगा: (a) 1:2 (b) 2:1 (c) 1:4 (d) 4:1' }, a: { en: '**(c) 1:4** (`jhsc1an.pdf` verified). Fixed `V` across combination means `H = V²t / Req`: Series `Rs = 2R`, Parallel `Rp = R/2` -> **`Hs / Hp = Rp / Rs = (R/2) / (2R) = 1/4`** (`1:4`)!', hi: '**(c) 1:4** (`आधिकारिक उत्तरमाला सत्यापित`) — समान `V` पर `H ∝ 1/R`: श्रेणी (`2R`) बनाम पार्श्व (`R/2`) में **`H_s : H_p = 1 : 4`**!' } },
    { num: 5, q: { en: 'How is a voltmeter connected in the circuit to measure potential difference between two points?', hi: 'दो बिंदुओं के बीच विभवांतर मापने के लिए वोल्टमीटर को कैसे संयोजित किया जाता है?' }, a: { en: 'Always connected **in PARALLEL (`पार्श्वक्रम`)** (`jhsc1an.pdf` Q5) across the two points (`high resistance so current stays unbranched`).', hi: 'सदैव **पार्श्वक्रम (समांतर / Parallel)** में (`आधिकारिक उत्तरमाला Q5`)!' } },
    { num: 6, q: { en: 'A copper wire has diameter `0.5 mm` and resistivity `1.6 × 10⁻⁸ Ω·m`. What length is required for `10 Ω` resistance? How much does resistance change if diameter is doubled?', hi: '`0.5 mm` व्यास व `1.6 × 10⁻⁸ Ω·m` प्रतिरोधकता वाले ताँबे के तार से `10 Ω` बनाने को कितना लंबा तार चाहिए? व्यास दोगुना करने पर प्रतिरोध में क्या अंतर आएगा?' }, a: { en: '`r = 0.25 mm = 2.5×10⁻⁴ m`, `A = πr² = 3.14 × 6.25×10⁻⁸ ≈ 1.963×10⁻⁷ m²`. Length **`l = RA/ρ = (10 × 1.963×10⁻⁷)/(1.6×10⁻⁸) ≈ 122.7 m`** (`jhsc1an`: `122.7 m`). Doubling diameter quadruples `A = πd²/4`, making **`R = 1/4th (2.5 Ω)`** (`jhsc1an`: `¼ गुना`)!', hi: '`A = π(d/2)² = 1.963×10⁻⁷ m²` `→` **`l = RA/ρ = 122.7 m`** (`jhsc1an`)। व्यास दोगुना (`2d`) करने से `A` चौगुना व प्रतिरोध **`1/4` गुना (`2.5 Ω`)** हो जाएगा!' } },
    { num: 7, q: { en: 'Current `I (A)`: `[0.5, 1.0, 2.0, 3.0, 4.0]` & Voltage `V (V)`: `[1.6, 3.4, 6.7, 10.2, 13.2]`. Plot `V vs I` and find resistance `R`.', hi: 'दी गई `I` (`0.5–4.0 A`) व `V` (`1.6–13.2 V`) सारणी के `V–I` ग्राफ से प्रतिरोधक का प्रतिरोध `R` ज्ञात करें।' }, a: { en: 'Slope `R = ΔV / ΔI`: using `[13.2 − 1.6] / [4.0 − 0.5] = 11.6 / 3.5 ≈ 3.31 Ω` or point mean `3.2, 3.4, 3.35, 3.4, 3.3` -> **`R ≈ 3.33 Ω`** (`matches official jhsc1an Q7: 3.33 Ω`)!', hi: 'ढाल `R = ΔV/ΔI ≈ (13.2 − 3.2)/(4 − 1)` या माध्य `V/I`: **`R ≈ 3.33 Ω`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 8, q: { en: 'When a `12 V` battery is connected across an unknown resistor, `2.5 mA` current flows. Find resistor resistance.', hi: '`12 V` बैटरी जोड़ने पर `2.5 mA` धारा बहती है। अज्ञात प्रतिरोधक का प्रतिरोध परिकलित करें।' }, a: { en: '`V = 12 V`, `I = 2.5 mA = 2.5 × 10⁻³ A`. **`R = V / I = 12 / (2.5×10⁻³) = 4800 Ω = 4.8 kΩ`** (`jhsc1an Q8 verified`)!', hi: '`I = 2.5×10⁻³ A` `→` **`R = 12 / 0.0025 = 4800 Ω = 4.8 kΩ`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 9, q: { en: 'A `9 V` battery is connected in series with `0.2 Ω, 0.3 Ω, 0.4 Ω, 0.5 Ω` and `12 Ω`. How much current flows through the `12 Ω` resistor?', hi: '`9 V` बैटरी के साथ `0.2 Ω, 0.3 Ω, 0.4 Ω, 0.5 Ω` व `12 Ω` श्रेणीक्रम में हैं। `12 Ω` में कितनी धारा बहेगी?' }, a: { en: 'Same current flows through every series element: `Rs = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 Ω` -> **`I = V / Rs = 9 / 13.4 = 0.67 A`** (`jhsc1an Q9 verified`)!', hi: 'कुल `Rs = 13.4 Ω`, श्रेणीक्रम में समान धारा **`I = 9 / 13.4 = 0.67 A`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 10, q: { en: 'How many `176 Ω` resistors (in parallel) are required to carry `5 A` on a `220 V` line?', hi: '`176 Ω` के कितने प्रतिरोधक पार्श्वक्रम में जोड़ें कि `220 V` से `5 A` धारा प्रवाहित हो?' }, a: { en: 'Required total `Rp = V / I = 220 / 5 = 44 Ω`. For `n` equal `176 Ω` resistors in parallel: `Rp = 176 / n = 44` -> **`n = 176 / 44 = 4 resistors`** (`jhsc1an Q10`)!', hi: 'वांछित `Rp = 220 / 5 = 44 Ω`। `176 / n = 44` `→` **`n = 4 प्रतिरोधक`** (`आधिकारिक उत्तरमाला Q10`)!' } },
    { num: 11, q: { en: 'Show how to connect three `6 Ω` resistors so combination resistance is (i) `9 Ω`, (ii) `4 Ω`.', hi: '`6 Ω` के तीन प्रतिरोधकों को कैसे जोड़ें कि कुल प्रतिरोध (i) `9 Ω`, (ii) `4 Ω` प्राप्त हो?' }, a: { en: '**(i) `9 Ω`**: Wire **2 parallel (`6∥6 = 3 Ω`)** then **in series with third `6 Ω`** (`3 + 6 = 9 Ω`). **(ii) `4 Ω`**: Wire **2 in series (`6 + 6 = 12 Ω`)** then **in parallel with third `6 Ω`** (`(12×6)/(12+6) = 72/18 = 4 Ω`)!', hi: '**(i) `9 Ω`**: 2 को **पार्श्व (`3 Ω`)** + तीसरे से **श्रेणी (`3+6=9 Ω`)**; **(ii) `4 Ω`**: 2 को **श्रेणी (`12 Ω`)** + तीसरे से **पार्श्व (`12∥6 = 4 Ω`)**!' } },
    { num: 12, q: { en: 'Several bulbs rated `10 W` on `220 V` line (`max allowable current = 5 A`). How many can connect in parallel across the two `220 V` wires?', hi: '`220 V` लाइन (`अधिकतम 5 A`) पर `10 W` के कितने बल्ब पार्श्वक्रम में जोड़ सकते हैं?' }, a: { en: 'Max safe power = `V × I_max = 220 × 5 = 1100 W` (`or R_bulb = 220²/10 = 4840 Ω, R_eq_min = 44 Ω`). Number of `10 W` bulbs **`n = 1100 / 10 = 110 bulbs`** (`jhsc1an Q12 verified`)!', hi: 'अधिकतम शक्ति `= 220 × 5 = 1100 W`, अतः बल्ब संख्या **`n = 1100 / 10 = 110 बल्ब`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 13, q: { en: 'Hotplate of oven on `220 V` has two `24 Ω` coils `A` and `B` usable separately, in series, or in parallel. Find currents in the 3 cases.', hi: '`24 Ω` की दो कुंडलियाँ `A, B` पृथक, श्रेणीक्रम व पार्श्वक्रम में `220 V` से जोड़ने पर तीनों प्रकरणों की धाराएं निकालें।' }, a: { en: '`(i)` **Single coil (`24 Ω`)**: `I = 220 / 24 =` **`9.17 A (~9.2 A)`**; `(ii)` **Series (`48 Ω`)**: `I = 220 / 48 =` **`4.58 A (~4.6 A)`**; `(iii)` **Parallel (`12 Ω`)**: `I = 220 / 12 =` **`18.33 A (~18.3 A)`** (`matches jhsc1an Q13: 9.2 A, 4.6 A, 18.3 A`)!', hi: '`(i)` पृथक (`24 Ω`): **`9.2 A`**, `(ii)` श्रेणी (`48 Ω`): **`4.6 A`**, `(iii)` पार्श्व (`12 Ω`): **`18.3 A`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 14, q: { en: 'Compare power used in the `2 Ω` resistor in: (i) `6 V` with `1 Ω & 2 Ω` in series, (ii) `4 V` with `12 Ω & 2 Ω` in parallel.', hi: '`2 Ω` में उपभुक्त शक्ति तुलना करें: (i) `6 V` से `1 Ω, 2 Ω` श्रेणीक्रम, (ii) `4 V` से `12 Ω, 2 Ω` पार्श्वक्रम।' }, a: { en: '`(i)` Series `R = 3 Ω` -> `I = 6/3 = 2 A` -> **`P₁ = I²R = 2² × 2 = 8 W`**. `(ii)` Parallel gives full `4 V` across `2 Ω` -> **`P₂ = V²/R = 4² / 2 = 8 W`**! Both **`8 W; 8 W` (`1:1 ratio`, `jhsc1an Q14`)**!', hi: '`(i)` श्रेणी में `I = 6/(1+2) = 2 A` `→` **`P = 2²×2 = 8 W`**; `(ii)` पार्श्व में `V = 4 V` `→` **`P = 4²/2 = 8 W`**! दोनों में समान **`8 W`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 15, q: { en: 'Two lamps rated `100 W; 220 V` and `60 W; 220 V` are connected in parallel to `220 V` mains. Find mains current.', hi: '`100 W; 220 V` व `60 W; 220 V` के दो लैंप `220 V` मेंस पर पार्श्वक्रम में जुड़े हैं। कुल धारा कितनी है?' }, a: { en: 'Total power in parallel at rated `220 V`: `P_total = 100 + 60 = 160 W`. Current **`I = P_total / V = 160 / 220 = 0.727 A (~0.73 A)`** (`jhsc1an Q15 verified`)!', hi: 'पार्श्वक्रम में कुल शक्ति `= 100 + 60 = 160 W`, अतः कुल धारा **`I = 160 / 220 = 0.73 A`** (`आधिकारिक उत्तरमाला सत्यापित`)!' } },
    { num: 16, q: { en: 'Which uses more energy: a `250 W` TV set in `1 hour` or a `1200 W` toaster (`2026 Hindi print writes 120 W heater`) in `10 minutes`?', hi: 'किसमें अधिक ऊर्जा खर्च होती है: `250 W` का टी.वी. `1 घंटे` में अथवा `120 W` (अंग्रेजी पाठ `1200 W`) हीटर `10 मिनट` में?' }, a: { en: 'TV (`250 W × 1 h`): **`E₁ = 250 W·h = 0.25 kWh`** (`9×10⁵ J`). Toaster/Heater (`10 min = 1/6 h`): `1200 W × (1/6)h = 200 W·h` (or `120 × 1/6 = 20 W·h`). Either way, **`250 W` TV in `1 hour` uses more energy** (`matches jhsc1an Q16`)!', hi: 'टी.वी.: `250 W × 1 h = 250 Wh` (`0.25 kWh`), जबकि हीटर (`10 min = 1/6 h`): `20 Wh` (`या 1200 W हेतु 200 Wh`) — **`250 W` टी.वी. सेट 1 घंटे में अधिक ऊर्जा** लेता है!' } },
    { num: 17, q: { en: 'An electric heater of resistance `8 Ω` draws `15 A` from service mains for `2 hours`. Calculate the rate at which heat is developed in the heater.', hi: '`8 Ω` प्रतिरोध का हीटर `2 घंटे` तक `15 A` धारा लेता है। हीटर में उत्पन्न ऊष्मा की दर परिकलित करें।' }, a: { en: 'Rate of heat developed = Thermal Power **`P = H / t = I² · R = (15)² × 8 = 225 × 8 = 1800 J/s` (`1800 W` = `1.8 kW`)**! *Print Key Note: Notice Hindi `jhsc1an.pdf` Q17 carries a known misprint `120 W` copied from Q16; true NCERT & exam answer is **`1800 J/s (1800 W)`**!*', hi: 'ऊष्मा उत्पादन की दर **`P = H/t = I²R = 15² × 8 = 1800 J/s (1800 W)`** है! (*नोट: `jhsc1an.pdf` उत्तर कुंजी Q17 में `120 W` मुद्रण त्रुटि है, सही हल `1800 W` या `1800 J/s` है।*)' } },
    { num: 18, q: { en: 'Explain: (a) Tungsten filament (b) Alloys in toasters/irons (c) Why NOT series in domestic circuits (d) How `R` varies with area (e) Copper & Aluminium transmission wires.', hi: 'स्पष्ट करें: (a) बल्ब तंतु टंगस्टन ही क्यों? (b) टोस्टर/इस्तरी में मिश्रातु क्यों? (c) घरेलू परिपथ में श्रेणीक्रम क्यों नहीं? (d) क्षेत्रफल व `R` संबंध (e) ताँबा-एल्युमिनियम संचरण तार क्यों?' }, a: { en: '**(a)** Tungsten has ultra-high melting point (`3380 °C`) & high resistivity; **(b)** Alloys (`Nichrome`) have high `ρ` and do NOT oxidize at red heat; **(c)** Series drops voltage across appliances and 1 blown bulb breaks the whole home circuit; **(d)** `R ∝ 1/A` (inversely proportional — thicker wire lowers `R`); **(e)** Cu & Al have very low `ρ` minimizing `I²Rt` line losses while remaining economical & ductile!', hi: '**(a)** उच्च गलनांक (`3380 °C`) व मजबूत तंतु; **(b)** मिश्रातु की उच्च प्रतिरोधकता `ρ` व उच्च ताप पर दहन न होना; **(c)** श्रेणीक्रम में वोल्टता विभाजन व 1 खराब होने पर सारा परिपथ बंद; **(d)** `R ∝ 1/A` (व्युत्क्रमानुपाती); **(e)** Cu व Al की प्रतिरोधकता अत्यंत कम होने से ऊर्जा क्षय न्यूनतम रहता है।' } },
  ],
  flashcards: [
    { front: { en: 'Number of electrons in `1 Coulomb` of charge (`e = 1.6×10⁻¹⁹ C`)?', hi: '`1 कूलॉम` आवेश में कुल कितने इलेक्ट्रॉन होते हैं?' }, back: { en: '6.25 × 10¹⁸ electrons (NCERT p.191 prints ≈ 6 × 10¹⁸)!', hi: '6.25 × 10¹⁸ इलेक्ट्रॉन (NCERT में ≈ 6 × 10¹⁸)!' } },
    { front: { en: 'How are Ammeter & Voltmeter connected + their ideal resistances?', hi: 'एमीटर व वोल्टमीटर कैसे जोड़े जाते हैं व आदर्श प्रतिरोध?' }, back: { en: 'Ammeter = SERIES (0 Ω ideal) | Voltmeter = PARALLEL (∞ Ω ideal)!', hi: 'एमीटर = श्रेणीक्रम (न्यूनतम 0 Ω) | वोल्टमीटर = पार्श्वक्रम (उच्च ∞ Ω)!' } },
    { front: { en: 'Direction of Conventional Current `I` vs Electron Flow?', hi: 'परिपथ में विद्युत धारा की दिशा व इलेक्ट्रॉन प्रवाह दिशा?' }, back: { en: 'Current flows + to − (OPPOSITE to negative electron drift − to +)!', hi: 'धारा बैटरी के (+) से (−) की ओर (इलेक्ट्रॉनों की गति के विपरीत)!' } },
    { front: { en: 'SI units of Potential Difference (`V`), Resistance (`R`) & Resistivity (`ρ`)?', hi: 'विभवांतर (`V`), प्रतिरोध (`R`) व प्रतिरोधकता (`ρ`) के SI मात्रक?' }, back: { en: 'V -> Volt (J/C) | R -> Ohm (Ω = V/A) | ρ -> Ohm-metre (Ω·m)!', hi: 'विभव -> वोल्ट | प्रतिरोध -> ओम (Ω) | प्रतिरोधकता -> ओम-मीटर (Ω·m)!' } },
    { front: { en: 'What ONLY changes Resistivity `ρ`, and what happens to `R` if a wire is stretched `n×`?', hi: 'प्रतिरोधकता `ρ` किस पर निर्भर करती है व तार `n` गुना खींचने पर नया प्रतिरोध?' }, back: { en: 'ρ depends ONLY on Material & Temperature! Stretching n× makes R’ = n²·R!', hi: 'ρ केवल पदार्थ व ताप पर! `n` गुना खींचने पर नया प्रतिरोध `R’ = n²·R`!' } },
    { front: { en: 'What stays constant in Series vs Parallel circuits?', hi: 'श्रेणीक्रम व पार्श्वक्रम में क्रमशः कौन-सी राशि समान रहती है?' }, back: { en: 'Series -> Same CURRENT (I) | Parallel -> Same VOLTAGE (V)!', hi: 'श्रेणीक्रम -> धारा (I) समान | पार्श्वक्रम -> विभवांतर (V) समान!' } },
    { front: { en: 'Two best conductor metals + Nichrome alloy composition (`Table 11.2`)?', hi: 'दो सर्वोत्तम चालक धातुएँ व निक्रोम मिश्रातु का संघटन (`सारणी 11.2`)?' }, back: { en: 'Best: Silver (1.60e-8) > Copper (1.62e-8)! Nichrome = Ni + Cr + Mn + Fe!', hi: 'चाँदी (सर्वोत्तम) > ताँबा! निक्रोम = Ni + Cr + Mn + Fe!' } },
    { front: { en: 'Bulb filament metal (MP) & inert gases sealed inside?', hi: 'बल्ब का तंतु किस धातु का बनता है (गलनांक) व अंदर भरी अक्रिय गैसें?' }, back: { en: 'Tungsten (3380 °C) + inert Nitrogen (N₂) & Argon (Ar)!', hi: 'टंगस्टन (गलनांक 3380 °C) + अक्रिय नाइट्रोजन (N₂) व आर्गन (Ar)!' } },
    { front: { en: 'Which formula is NOT Power (`P`) & exact Joule value of `1 kWh`?', hi: 'कौन-सा शक्ति सूत्र गलत है व `1 kWh` में कितने जूल होते हैं?' }, back: { en: 'IR² & IR are WRONG (P = VI = I²R = V²/R); 1 kWh = 3.6 × 10⁶ J!', hi: 'IR² व IR गलत! सही: P = VI = I²R = V²/R; 1 kWh = 3.6 × 10⁶ J!' } },
    { front: { en: 'If `220 V; 100 W` bulb is plugged into `110 V`, actual Power `P` is:', hi: '`220 V; 100 W` बल्ब को `110 V` पर लगाने पर वास्तविक शक्ति होगी:' }, back: { en: '25 W! (Power P = V²/R scales with V² -> (1/2)² × 100 = 25 W)!', hi: '25 W! (`V` आधा करने पर शक्ति `1/4` हो जाती है — `P ∝ V²`)!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-elec-1',
      examTag: 'RRB NTPC UG 2025 Shift 52',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.1): Elementary Charge',
      question: {
        en: 'The ampere magnitude is determined by setting the numerical value of the elementary charge equal to _______ .',
        hi: 'एम्पीयर परिमाण का निर्धारण, मूल आवेश के संख्यात्मक मान को _____________ के बराबर निर्धारित करके किया जाता है।',
      },
      options: {
        en: ['1.602176634 × 10⁻¹⁹ C', '1.624432754 × 10⁻¹⁷ C', '1.611547243 × 10⁻¹⁹ C', '1.655908436 × 10⁻¹⁸ C'],
        hi: ['1.602176634 × 10⁻¹⁹ C', '1.624432754 × 10⁻¹⁷ C', '1.611547243 × 10⁻¹⁹ C', '1.655908436 × 10⁻¹⁸ C'],
      },
      correctIndex: 0,
      solution: {
        en: 'Since the 2019 SI redefinition, **Ampere (`A`)** rests on the fixed exact elementary charge **`e = 1.602176634 × 10⁻¹⁹ C`** (`rounded to 1.6 × 10⁻¹⁹ C in NCERT Sec 11.1`).',
        hi: 'मूल इलेक्ट्रॉनिक आवेश का सटीक मान **`1.602176634 × 10⁻¹⁹ C`** (NCERT में `1.6 × 10⁻¹⁹ C`) होता है।',
      },
    },
    {
      id: 'pyq-elec-2',
      examTag: 'RRB Tech Gr-III 2024 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Eq 11.1): I = Q / t Numerical',
      question: {
        en: 'The total amount of electric charge that flows through a circuit is 1200 C in 2 min. Then the amount of electric current that is drawn by the same electric circuit is:',
        hi: 'किसी परिपथ में से 2 मिनट में प्रवाहित होने वाले विद्युत आवेश की कुल मात्रा 1200 C है, तो उसी विद्युत परिपथ द्वारा प्रवाहित विद्युत धारा की मात्रा ज्ञात कीजिए।',
      },
      options: {
        en: ['10 A', '100 A', '600 A', '60 A'],
        hi: ['10 A', '100 A', '600 A', '60 A'],
      },
      correctIndex: 0,
      solution: {
        en: 'Always convert minutes into seconds (`Ex 11.1` check!): `t = 2 × 60 = 120 s`. **`I = Q / t = 1200 / 120 = 10 A`**!',
        hi: 'समय को सेकंड में बदलें: `t = 2 × 60 = 120 s`। धारा **`I = Q / t = 1200 / 120 = 10 A`**!',
      },
    },
    {
      id: 'pyq-elec-3',
      examTag: 'RRB Group D 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.1): Current Direction',
      question: {
        en: 'What is the conventional direction of electric current in a metallic circuit?',
        hi: 'धात्विक परिपथ में विद्युत धारा की परंपरागत (Conventional) दिशा क्या होती है?',
      },
      options: {
        en: ['From negative terminal to positive terminal (along electron flow)', 'Opposite to the direction of flow of electrons (+ to −)', 'Random Brownian motion in all directions', 'Only upwards perpendicular to the wire'],
        hi: ['ऋण टर्मिनल से धन टर्मिनल की ओर (इलेक्ट्रॉनों के साथ)', 'इलेक्ट्रॉनों के प्रवाह की दिशा के विपरीत (धन + से ऋण −)', 'सभी दिशाओं में यादृच्छिक गति', 'तार के लंबवत ऊपर की ओर'],
      },
      correctIndex: 1,
      solution: {
        en: 'Direct NCERT **Sec 11.1 (`p.190`)**: conventionally, electric current direction is taken as **opposite to the flow of negatively charged electrons** (`from + to −`).',
        hi: 'सीधा NCERT **अनुभाग 11.1 (`पृ. 190`)**: विद्युत धारा की दिशा **इलेक्ट्रॉनों के प्रवाह के विपरीत (`+` से `−`)** मानी जाती है।',
      },
    },
    {
      id: 'pyq-elec-4',
      examTag: 'RRB Group D 2025 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.2): Cell & Potential Difference',
      question: {
        en: 'In an electric circuit, what produces the potential difference needed for charge flow?',
        hi: 'एक विद्युत परिपथ में, आवेश के प्रवाह के लिए आवश्यक विभवांतर कौन उत्पन्न करता है?',
      },
      options: {
        en: ['The resistance of the wire to current', 'The gravitational pull on electrons', 'Connecting wires alone between two points', 'A battery consisting of one or more electric cells'],
        hi: ['धारा के प्रति तार का प्रतिरोध', 'इलेक्ट्रॉनों पर गुरुत्वीय कर्षण', 'दो बिंदुओं के बीच केवल तारों का संयोजन', 'एक या अधिक इलेक्ट्रिक सेल से बनी बैटरी'],
      },
      correctIndex: 3,
      solution: {
        en: 'Chemical action inside **one or more electric cells (`battery`)** generates potential difference (`NCERT Sec 11.2 p.191`).',
        hi: 'बैटरी या सेल के भीतर होने वाली रासायनिक अभिक्रिया ही टर्मिनलों के बीच विभवांतर बनाती है!',
      },
    },
    {
      id: 'pyq-elec-5',
      examTag: 'RRB Group D 2025 Shift 31',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Eq 11.3): Define 1 Volt',
      question: {
        en: 'The potential difference between two points in a circuit is 1 volt if:',
        hi: 'एक परिपथ में दो बिंदुओं के बीच विभवांतर 1 वोल्ट होता है यदि _______________ ।',
      },
      options: {
        en: ['1 coulomb of charge flows through a resistance of 1 ohm', '1 joule of energy is consumed in 1 second', '1 joule of work is done in moving 1 coulomb of charge', '1 ampere current flows for 1 second'],
        hi: ['1 ओम के प्रतिरोध के माध्यम से 1 कूलॉम आवेश प्रवाहित हो', '1 सेकंड में 1 जूल ऊर्जा की खपत हो', '1 कूलॉम आवेश को स्थानांतरित करने में 1 जूल कार्य किया जाए', '1 ऐम्पियर धारा 1 सेकंड के लिए प्रवाहित हो'],
      },
      correctIndex: 2,
      solution: {
        en: 'By `V = W / Q`, **`1 Volt = 1 Joule / 1 Coulomb`** (`NCERT Eq 11.3 & p.192 Q2`).',
        hi: 'सूत्र **`V = W / Q`** से `1 कूलॉम` आवेश को स्थानांतरित करने में **`1 जूल`** कार्य होने पर विभवांतर `1 वोल्ट` होता है।',
      },
    },
    {
      id: 'pyq-elec-6',
      examTag: 'RRB Tech Gr-III 2024 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11: Unit of EMF & Voltage',
      question: {
        en: 'What is the unit of electro motive force (EMF)?',
        hi: 'विद्युत् वाहक बल (EMF) की इकाई क्या है?',
      },
      options: {
        en: ['Sec', 'Volt', 'Ampere', 'Newton'],
        hi: ['सेकंड', 'वोल्ट', 'एम्पीयर', 'न्यूटन'],
      },
      correctIndex: 1,
      solution: {
        en: 'EMF is electrical energy per unit charge when open-circuited (`potential difference` -> **Volt `V`**)!',
        hi: 'EMF (विद्युत वाहक बल) खुले परिपथ में टर्मिनल विभवांतर ही है — अतः मात्रक **वोल्ट (`Volt`)** (ध्यान: `Newton` नहीं!)।',
      },
    },
    {
      id: 'pyq-elec-7',
      examTag: 'RRB ALP CBT-2 Heat Engine 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.1): Ammeter Connection',
      question: {
        en: 'Where should an ammeter be connected in a circuit to measure current accurately?',
        hi: 'धारा को यथार्थ रूप से मापने के लिए परिपथ में ऐमीटर को कहां संयोजित किया जाना चाहिए?',
      },
      options: {
        en: ['In parallel with the load', 'In series with the load', 'With a resistor in parallel', 'Across the supply terminals'],
        hi: ['लोड के साथ समांतर क्रम में', 'लोड के साथ श्रेणी क्रम में', 'समांतर क्रम में एक प्रतिरोधक के साथ', 'आपूर्ति टर्मिनलों के साथ'],
      },
      correctIndex: 1,
      solution: {
        en: '**Ammeter** is ALWAYS wired **in series (`श्रेणीक्रम`)** so full circuit current passes through it (`Voltmeter is connected in parallel`).',
        hi: '**ऐमीटर** सदैव लोड के **श्रेणीक्रम** में जोड़ा जाता है (`जबकि वोल्टमीटर समांतर/पार्श्वक्रम में`)।',
      },
    },
    {
      id: 'pyq-elec-8',
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.4): Ohm’s Law Statement',
      question: {
        en: 'Which law states that the current flowing through a conductor is directly proportional to the voltage applied across it, provided the temperature and other physical conditions remain constant?',
        hi: 'किस नियम के अनुसार, किसी चालक में प्रवाहित विद्युत धारा, उसके सिरों पर लगाई गई वोल्टता के अनुक्रमानुपाती होती है, परंतु एक शर्त यह है कि ताप का मान और अन्य भौतिक स्थितियां स्थिर रहना चाहिए।',
      },
      options: {
        en: ['Ohm’s law', 'Joule’s law', 'Faraday’s law', 'Newton’s law'],
        hi: ['ओम का नियम', 'जूल का नियम', 'फैराडे का नियम', 'न्यूटन का नियम'],
      },
      correctIndex: 0,
      solution: {
        en: 'Direct NCERT **Section 11.4 (`1827 Georg Simon Ohm`)**: `V ∝ I` (`V = IR`) at **constant temperature**!',
        hi: 'नियत ताप पर `V ∝ I` (`V = IR`) **ओम का नियम** (`1827`) कहलाता है।',
      },
    },
    {
      id: 'pyq-elec-9',
      examTag: 'RRB Group D 2025 Shift 28',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Fig 11.3): V–I Graph Shape',
      question: {
        en: 'Which of the following graphs best represents Ohm’s Law for a resistor at constant temperature?',
        hi: 'निम्नलिखित में से कौन-सा ग्राफ, स्थिर तापमान पर एक प्रतिरोधक के लिए ओम के नियम को सर्वोत्तम रूप से निरूपित करता है?',
      },
      options: {
        en: ['A straight line graph not passing through the origin when current is plotted against voltage', 'A curved line graph passing through the origin when current is plotted against voltage', 'A horizontal line graph when current is plotted against voltage', 'A straight line graph passing through the origin when current is plotted against voltage'],
        hi: ['जब धारा को वोल्टता के सापेक्ष प्लॉट किया जाता है, तो मूल बिंदु से नहीं गुजरने वाला एक सरल रेखा ग्राफ', 'जब धारा को वोल्टता के सापेक्ष प्लॉट किया जाता है, तो मूल बिंदु से गुजरने वाला एक वक्रित रेखा ग्राफ', 'जब धारा को वोल्टता के सापेक्ष प्लॉट किया जाता है, तो एक क्षैतिज रेखा ग्राफ', 'जब धारा को वोल्टता के सापेक्ष प्लॉट किया जाता है, तो मूल बिंदु से गुजरने वाला एक सरल रेखा ग्राफ'],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact **NCERT Fig 11.3 (`p.195`)**: `V–I` plot is a **straight line passing through the origin `(0, 0)`** (`proportional constant = R`).',
        hi: 'NCERT **चित्र 11.3**: ओम का नियम **मूल बिंदु `(0,0)` से गुजरने वाली सीधी सरल रेखा** द्वारा दर्शाया जाता है।',
      },
    },
    {
      id: 'pyq-elec-10',
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.5): Temperature Dependence of R',
      question: {
        en: 'Which of the following statements is/are NOT correct? (i) Resistance of a conductor is independent of temperature. (ii) The more the voltage across a resistor, the more is the current flowing through it. (iii) The S.I unit of resistance is ohm.',
        hi: 'निम्नलिखित में से कौन-सा/कौन-से कथन सही नहीं है/हैं? (i) चालक का प्रतिरोध तापमान से स्वतंत्र होता है। (ii) प्रतिरोधक के सिरों पर वोल्टता जितनी अधिक होगी, उसमें उतनी अधिक धारा प्रवाहित होगी। (iii) प्रतिरोध की S.I. इकाई ओम है।',
      },
      options: {
        en: ['Only (i)', 'Both (ii) and (iii)', 'Only (ii)', 'Only (iii)'],
        hi: ['केवल (i)', '(ii) और (iii) दोनों', 'केवल (ii)', 'केवल (iii)'],
      },
      correctIndex: 0,
      solution: {
        en: 'NCERT `p.198`: **"Both resistance and resistivity of a material vary with temperature"** — so claiming `(i)` independence from temperature is FALSE!',
        hi: 'NCERT पृ. 198 अनुसार **प्रतिरोध व प्रतिरोधकता दोनों ताप में परिवर्तन के साथ बदलते हैं** — अतः कथन `(i)` गलत है।',
      },
    },
    {
      id: 'pyq-elec-11',
      examTag: 'RRB Tech Gr-III 2024 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11: SI Units of R & Resistivity',
      question: {
        en: 'Select the correct pairs from the following options.',
        hi: 'निम्नलिखित विकल्पों में से सही युग्मों का चयन कीजिए।',
      },
      options: {
        en: ['(a) Resistance - volt/ampere, (b) Resistivity - ohm', '(a) Resistance - ampere metre, (b) Resistivity - volt/metre', '(a) Resistance - ohm, (b) Resistivity - ohm metre', '(a) Resistance - ohm, (b) Resistivity - volt/metre'],
        hi: ['(a) प्रतिरोध — वोल्ट/एम्पीयर, (b) प्रतिरोधकता — ओम', '(a) प्रतिरोध — एम्पीयर मीटर, (b) प्रतिरोधकता — वोल्ट/मीटर', '(a) प्रतिरोध — ओम, (b) प्रतिरोधकता — ओम मीटर', '(a) प्रतिरोध — ओम, (b) प्रतिरोधकता — वोल्ट/मीटर'],
      },
      correctIndex: 2,
      solution: {
        en: 'SI Unit of **Resistance (`R`) = Ohm (`Ω`)**, and SI Unit of **Resistivity (`ρ = RA/l`) = Ohm metre (`Ω·m`)**!',
        hi: '**प्रतिरोध का मात्रक = ओम (`Ω`)**, तथा **प्रतिरोधकता का मात्रक = ओम-मीटर (`Ω·m`)**!',
      },
    },
    {
      id: 'pyq-elec-12',
      examTag: 'RRB Group D 2025 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Eq 11.9): Area Effect on R',
      question: {
        en: 'Two uniform wires made of the same material, having the same length, and maintained at the same temperature are compared. Which factor will cause one wire to have greater electrical resistance than the other?',
        hi: 'एक ही पदार्थ से बने, समान लंबाई वाले और समान तापमान पर अनुरक्षित दो एकसमान तारों की तुलना की जाती है। कौन-सा कारक एक तार के विद्युत प्रतिरोध को दूसरे तार से अधिक कर देगा?',
      },
      options: {
        en: ['Higher voltage', 'Smaller cross-sectional area', 'Higher cross-sectional area', 'Larger electric current'],
        hi: ['उच्चतर वोल्टेज', 'लघुतर अनुप्रस्थ परिच्छेद क्षेत्र', 'उच्चतर अनुप्रस्थ परिच्छेद क्षेत्र', 'बृहत् विद्युत धारा'],
      },
      correctIndex: 1,
      solution: {
        en: 'Since **`R = ρl/A` (`R ∝ 1/A`)**, a wire with **smaller cross-sectional area (`thinner wire`)** has **greater resistance**!',
        hi: '`R ∝ 1/A` होने से **पतले (लघुतर अनुप्रस्थ परिच्छेद क्षेत्रफल वाले) तार का प्रतिरोध अधिक** होगा!',
      },
    },
    {
      id: 'pyq-elec-13',
      examTag: 'RRB Tech Gr-III 2024 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.6.1): Series Current',
      question: {
        en: 'Two resistors of `2 Ω` each are connected in series to a battery of `4 V`. The current in Ampere flowing through the resistors will be:',
        hi: '`2 Ω` के दो प्रतिरोधक `4 V` की बैटरी से श्रेणीक्रम में जुड़े हुए हैं। प्रतिरोधकों से प्रवाहित होने वाली धारा (एम्पियर में) होगी:',
      },
      options: {
        en: ['1/2', '2', '4', '1'],
        hi: ['1/2', '2', '4', '1'],
      },
      correctIndex: 3,
      solution: {
        en: 'Series `Rs = 2 + 2 = 4 Ω`. **`I = V / Rs = 4 V / 4 Ω = 1 A`**!',
        hi: 'श्रेणी तुल्य प्रतिरोध `Rs = 2 + 2 = 4 Ω` `→` **`I = 4 / 4 = 1 A`**!',
      },
    },
    {
      id: 'pyq-elec-14',
      examTag: 'RRB Tech Gr-III 2024 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.6.2): Parallel Voltage Rule',
      question: {
        en: 'In a parallel combination of two different resistors, which of the following is/are correct? (A) The potential difference across each resistor has the same value. (B) The current flowing through each resistor has the same value.',
        hi: 'दो विभिन्न प्रतिरोधकों के समांतर संयोजन में, निम्नलिखित में से कौन-सा/कौन-से कथन सही है/हैं? (A) प्रत्येक प्रतिरोधक पर विभवांतर का मान समान होता है। (B) प्रत्येक प्रतिरोधक में प्रवाहित होने वाली विद्युत धारा का मान समान होता है।',
      },
      options: {
        en: ['Both A and B are correct.', 'A is incorrect and B is correct.', 'Both A and B are incorrect.', 'A is correct and B is incorrect.'],
        hi: ['A और B दोनों सही हैं।', 'A गलत है और B सही है।', 'A और B दोनों गलत हैं।', 'A सही है और B गलत है।'],
      },
      correctIndex: 3,
      solution: {
        en: 'In parallel, **Voltage `V` is identical** across branches (`A true`), whereas different resistors draw **different branch currents `I = V/R`** (`B false`)!',
        hi: 'पार्श्वक्रम में **विभवांतर समान (`A` सत्य)** रहता है जबकि भिन्न प्रतिरोधों में धारा भिन्न-भिन्न (`I = V/R`) होती है (`B` असत्य)!',
      },
    },
    {
      id: 'pyq-elec-15',
      examTag: 'RRB Group D 2025 Shift 41',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.6.2): Domestic Parallel Wiring',
      question: {
        en: 'Why are all appliances in a domestic circuit connected in parallel?',
        hi: 'किसी घरेलू परिपथ में सभी उपकरण समानांतर क्रम में क्यों जुड़े होते हैं?',
      },
      options: {
        en: ['To save electricity in the household', 'To reduce the number of switches needed', 'To ensure each appliance gets equal potential difference', 'To prevent short-circuiting in wires'],
        hi: ['घरेलू उपयोग में विद्युत की बचत करने के लिए', 'आवश्यक स्विचों की संख्या कम करने के लिए', 'प्रत्येक उपकरण को समान विभवान्तर प्राप्त होना सुनिश्चित करने के लिए', 'तारों में लघुपथन को रोकने के लिए'],
      },
      correctIndex: 2,
      solution: {
        en: 'Parallel connection supplies full **equal rated potential difference (`220 V`)** and required independent current to every appliance (`NCERT p.208`).',
        hi: 'समानांतर/पार्श्वक्रम से घर के प्रत्येक उपकरण को **एकसमान विभवांतर (`220 V`)** व स्वतंत्र धारा प्राप्त होती है!',
      },
    },
    {
      id: 'pyq-elec-16',
      examTag: 'RRB ALP CBT-2 RAC 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Act 11.4): Series Constant Quantity',
      question: {
        en: 'In a series circuit, which electrical quantity remains the same through all components?',
        hi: 'किसी श्रेणी परिपथ में, कौन-सी विद्युत राशि सभी घटकों में समान रहती है?',
      },
      options: {
        en: ['Current', 'Power', 'Resistance', 'Voltage'],
        hi: ['धारा', 'शक्ति', 'प्रतिरोध', 'वोल्टता'],
      },
      correctIndex: 0,
      solution: {
        en: 'Direct **Activity 11.4 (`p.202`)**: in series, **`Current (I)` stays identical** throughout every component (`V, P depend on each R`).',
        hi: 'सीधा **क्रियाकलाप 11.4**: श्रेणीक्रम में सभी घटकों में केवल **विद्युत धारा (`I`)** एकसमान रहती है!',
      },
    },
    {
      id: 'pyq-elec-17',
      examTag: 'RRB ALP CBT-2 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Eq 11.21): Joule Heating Law',
      question: {
        en: 'Which factor increases the amount of heat produced in a wire when an electric current flows through it for a fixed time?',
        hi: 'किसी तार में एक निश्चित समय तक विद्युत धारा प्रवाहित होने पर उसमें उत्पन्न ऊष्मा की मात्रा में कौन-सा कारक वृद्धि करता है?',
      },
      options: {
        en: ['Making the wire thicker', 'Increasing the resistance of the wire', 'Reducing the current in the wire', 'Decreasing the length of the wire'],
        hi: ['तार को मोटा बनाना', 'तार के प्रतिरोध में वृद्धि करना', 'तार में धारा को कम करना', 'तार की लंबाई कम करना'],
      },
      correctIndex: 1,
      solution: {
        en: 'By **Joule’s Law `H = I²Rt`**, for fixed `I` and `t`, **`H ∝ R`** (`thicker or shorter wire cuts R, lowering H`)!',
        hi: 'नियत धारा व समय पर **`H = I²Rt`** अनुसार प्रतिरोध `R` बढ़ाने से ऊष्मा बढ़ती है (`मोटा/छोटा करने से R घटता है`)।',
      },
    },
    {
      id: 'pyq-elec-18',
      examTag: 'RRB Group D 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.7.1): Bulb Filament Glow',
      question: {
        en: 'Why does a metal filament bulb glow when electric current passes through it?',
        hi: 'धातु तंतु बल्ब से विद्युत धारा प्रवाहित होने पर वह दीप्त क्यों होता है?',
      },
      options: {
        en: ['A chemical reaction in the filament produces light', 'The filament offers resistance, converting electrical energy to heat and light', 'The filament conducts current with zero resistance', 'The filament is magnetized by the current'],
        hi: ['तंतु में रासायनिक अभिक्रिया से प्रकाश उत्पन्न होता है', 'तंतु प्रतिरोध प्रदान करके विद्युत ऊर्जा को ऊष्मा और प्रकाश में परिवर्तित करता है', 'तंतु शून्य प्रतिरोध के साथ धारा का चालन करता है', 'तंतु धारा द्वारा चुम्बकित हो जाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Direct NCERT **Sec 11.7.1 (`p.211`)**: **Tungsten filament** gets white-hot via `I²Rt` thermal resistance, radiating bright visible light (`mostly heat + light`)!',
        hi: 'तंतु अपने प्रतिरोध द्वारा विद्युत ऊर्जा को तीव्र ऊष्मा व विकरित प्रकाश में बदलकर दीप्त हो उठता है (`टंगस्टन, 3380 °C`)!',
      },
    },
    {
      id: 'pyq-elec-19',
      examTag: 'RRB ALP CBT-2 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.7.1): Safety Fuse Property',
      question: {
        en: 'A technician needs to select a fuse wire for a room heater. Which property should be considered most important for safety based on the heating effect of electric current?',
        hi: 'एक तकनीशियन को रूम हीटर के लिए फ्यूज तार का चयन करना है। विद्युत धारा के तापन प्रभाव के आधार पर सुरक्षा के लिए किस गुणधर्म को सबसे महत्वपूर्ण माना जाना चाहिए?',
      },
      options: {
        en: ['The fuse wire must have a low melting point to break the circuit during excess current.', 'The fuse wire must have a high melting point for durability.', 'The fuse wire must have a shiny surface for efficient cooling.', 'The fuse wire must have high resistance and be thick to prevent melting.'],
        hi: ['अतिरिक्त धारा के दौरान परिपथ को विच्छेदित करने के लिए फ्यूज तार का गलनांक निम्न होना चाहिए।', 'फ्यूज तार के चिरस्थायित्व के लिए उच्च गलनांक होना चाहिए।', 'दक्ष शीतलन के लिए फ्यूज तार का पृष्ठ चमकदार होना चाहिए।', 'पिघलने से रोकने के लिए फ्यूज तार को उच्च प्रतिरोध वाला और मोटा होना चाहिए।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Safety **fuse (`in series`)** relies on **low/appropriate melting point** so `I²Rt` melts it immediately upon overcurrent (`NCERT p.211`).',
        hi: 'अतिरिक्त धारा आते ही तुरंत पिघलकर परिपथ तोड़ने हेतु फ्यूज तार का **गलनांक निम्न/उचित** होना अनिवार्य है।',
      },
    },
    {
      id: 'pyq-elec-20',
      examTag: 'RRB Tech Gr-III 2024 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Ex Q2 + Eq 11.22): Invalid Power Formula',
      question: {
        en: 'Which of the following is NOT the correct relation between electric power (`P`), electric current (`I`), electric potential difference (`V`) and resistance (`R`):',
        hi: 'विद्युत शक्ति (`P`), विद्युत धारा (`I`), विद्युत विभवांतर (`V`) और प्रतिरोध (`R`) के बीच निम्नलिखित में से कौन-सा संबंध सही नहीं है?',
      },
      options: {
        en: ['$P = IR$', '$P = VI$', '$P = I^2 R$', '$P = \\frac{V^2}{R}$'],
        hi: ['$P = IR$', '$P = VI$', '$P = I^2 R$', '$P = \\frac{V^2}{R}$'],
      },
      correctIndex: 0,
      solution: {
        en: '`P = IR` actually equals **Voltage `V` (`Ohm’s Law`)**, NOT Power! Valid power expressions are **`P = VI = I²R = V²/R`**.',
        hi: '**`IR` विभवांतर `V` होता है, शक्ति `P` नहीं!** (`P = VI = I²R = V²/R` ही सही संबंध हैं)।',
      },
    },
    {
      id: 'pyq-elec-21',
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Eq 11.22): Resistor Power',
      question: {
        en: 'The electric power consumed by a resistor of resistance `R`, carrying current `I`, is ________.',
        hi: '`I` धारा प्रवाहित करने वाले प्रतिरोध `R` के प्रतिरोधक द्वारा उपभोग की गई विद्युत शक्ति ________ है।',
      },
      options: {
        en: ['IR', '$I^2R$', 'I/R', '$IR^2$'],
        hi: ['IR', '$I^2R$', 'I/R', '$IR^2$'],
      },
      correctIndex: 1,
      solution: {
        en: 'Direct substitution `V = IR` into `P = VI` gives **`P = I²R`** (`NCERT Eq 11.22`).',
        hi: '`P = VI` में `V = IR` रखने से **`P = I²R`** प्राप्त होता है!',
      },
    },
    {
      id: 'pyq-elec-22',
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Eq 11.23): 1 kW Meaning',
      question: {
        en: '1 kW power is equal to _______. (`kW` stands for kilowatt.)',
        hi: '1 kW शक्ति ______ के बराबर होती है। (`kW` का अर्थ kilowatt है।)',
      },
      options: {
        en: ['1000 J/s', '100 J/s', '10 J/s', '1 J/s'],
        hi: ['1000 J/s', '100 J/s', '10 J/s', '1 J/s'],
      },
      correctIndex: 0,
      solution: {
        en: '`1 Watt = 1 Joule / 1 Second`, therefore **`1 kW = 1000 W = 1000 J/s`** (`also asked in Tech Gr-III Shift 21!`).',
        hi: '`1 W = 1 J/s`, अतः **`1 kW = 1000 W = 1000 J/s`**!',
      },
    },
    {
      id: 'pyq-elec-23',
      examTag: 'RRB Group D 2025 Shift 26',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Sec 11.8): 1 kWh to Joules',
      question: {
        en: 'Which expression correctly represents the commercial unit of electrical energy in terms of joules?',
        hi: 'कौन-सा व्यंजक, विद्युत ऊर्जा की व्यावसायिक यूनिट को जूल के पदों में सही ढंग से निरूपित करता है?',
      },
      options: {
        en: ['1 kilowatt hour = 360 joules', '1 kilowatt hour = 1.6 × 10⁶ joules', '1 kilowatt hour = 1000 joules', '1 kilowatt hour = 3.6 × 10⁶ joules'],
        hi: ['1 किलोवॉट घंटा = 360 जूल', '1 किलोवॉट घंटा = 1.6 × 10⁶ जूल', '1 किलोवॉट घंटा = 1000 जूल', '1 किलोवॉट घंटा = 3.6 × 10⁶ जूल'],
      },
      correctIndex: 3,
      solution: {
        en: 'Direct **NCERT p.212**: `1 kWh = 1000 W × 3600 s =` **`3.6 × 10⁶ J`** (`asked across Group D & Tech Gr-III!`).',
        hi: 'सीधा **NCERT पृ. 212**: **`1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ जूल`**!',
      },
    },
    {
      id: 'pyq-elec-24',
      examTag: 'RRB ALP CBT-2 Armature 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 11 (Ex 11.13 Style): Monthly kWh Bill',
      question: {
        en: 'An electrical workshop uses 15 lamps of 100 W each for 5 hours daily. If the workshop operates 25 days in a month, what is the total energy consumed in kilowatt-hours (`kWh`) per month?',
        hi: 'एक विद्युत कार्यशाला में प्रतिदिन 5 घंटे के लिए प्रत्येक 100 W के 15 लैंपों का उपयोग किया जाता है। यदि कार्यशाला एक महीने में 25 दिन कार्य करती है, तो प्रति माह किलोवाट घंटा (`kWh`) में उपभुक्त कुल ऊर्जा कितनी होगी?',
      },
      options: {
        en: ['150.0', '187.5', '125.0', '112.5'],
        hi: ['150.0', '187.5', '125.0', '112.5'],
      },
      correctIndex: 1,
      solution: {
        en: 'Total Watts = `15 × 100 = 1500 W`. Monthly energy = `(1500 × 5 × 25) / 1000 =` **`187.5 kWh`** (`NCERT Ex 11.13 blueprint!`).',
        hi: 'कुल शक्ति `= 15 × 100 = 1500 W`। मासिक ऊर्जा `= (1500 × 5 × 25) / 1000 =` **`187.5 kWh`**!',
      },
    },
  ],
};
