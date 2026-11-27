/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc101.pdf, Pages 1–7)
 * Chapter 1: Exploring / Entering the World of Secondary Science (अन्वेषण — माध्यमिक विज्ञान के संसार में प्रवेश)
 * Four Clean Dual-Theme (dark UI / light print-PDF) Labeled Vector Plates (`hi` / `en`)
 */

function esc(str = '') {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getPalette(theme) {
  const isLight = theme === 'light';
  return {
    bg: isLight ? '#FFFFFF' : '#080E1E',
    card: isLight ? '#F8FAFC' : '#0F172A',
    cardAlt: isLight ? '#F0F9FF' : '#101B32',
    border: isLight ? '#CBD5E1' : '#334155',
    text: isLight ? '#0F172A' : '#F8FAFC',
    muted: isLight ? '#475569' : '#94A3B8',
    teal: isLight ? '#0F766E' : '#2DD4BF',
    tealBg: isLight ? '#CCFBF1' : '#0D3B3E',
    cyan: isLight ? '#0369A1' : '#38BDF8',
    cyanBg: isLight ? '#E0F2FE' : '#0C2D48',
    amber: isLight ? '#B45309' : '#FBBF24',
    amberBg: isLight ? '#FEF3C7' : '#3B2506',
    emerald: isLight ? '#047857' : '#34D399',
    emeraldBg: isLight ? '#D1FAE5' : '#063B27',
    rose: isLight ? '#BE123C' : '#FB7185',
    roseBg: isLight ? '#FFE4E6' : '#4C0D1D',
    violet: isLight ? '#6D28D9' : '#A78BFA',
    violetBg: isLight ? '#EDE9FE' : '#2E1065',
  };
}

export function renderC9Ch1ScienceDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';

  if (key === 'c9-ch1-blueprint-mindmap') {
    const title = hi ? 'अध्याय 1 मानचित्र: माध्यमिक विज्ञान के संसार में प्रवेश (NCERT 2026–27)' : 'Chapter 1 Master Map: Entering Secondary Science, Models & SI Units';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <rect x="210" y="58" width="400" height="58" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.6"/>
      <text x="410" y="81" text-anchor="middle" font-size="12.5" font-weight="900" fill="${p.amber}">${esc(hi ? 'आवर्धक लेंस (सूक्ष्म अवलोकन) + दिशासूचक (सही मॉडल व प्रमाण)' : 'Magnifying Lens (Observation) + Compass (Direction & Models)')}</text>
      <text x="410" y="102" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'विज्ञान अनुमान नहीं, अपितु परीक्षण, मापन व प्रमाण-आधारित स्व-सुधारक विधि है!' : 'Science = Observations → Precision Measurement → Predictive Self-Correcting Evidence')}</text>

      ${[
        {
          x: 20, y: 132, w: 380, h: 132, c: p.cyan, bg: p.cyanBg,
          t: hi ? '1. वैज्ञानिक मॉडल व मेघनाद साहा (पृ. 1–2)' : '1. Scientific Models & Meghnad Saha (p.1–2)',
          l1: hi ? '• जटिल संसार के सरल मॉडल (कार=बिंदु; क्रिकेट छक्का उदा. 1.1)' : '• Simplify by omitting noise (Ball mass/speed vs bat brand)',
          l2: hi ? '• मेघनाद साहा: तारे को उष्ण गैस (ताप, दाब, आयनन) मानकर रंग-ताप जोड़ा' : '• Meghnad Saha: Stars as hot gas (T, P, ionisation → Star colour)',
          l3: hi ? '• क्रियाकलाप 1.1: साइकिल चाल-दूरी रखकर शोर/ब्रांड छोड़ना' : '• Act 1.1: School bicycle travel model (key factors only)',
        },
        {
          x: 420, y: 132, w: 380, h: 132, c: p.emerald, bg: p.emeraldBg,
          t: hi ? '2. वैज्ञानिक प्रतीक, c = 299792458 m/s व SI मात्रक (पृ. 3)' : '2. Symbols, c = 299792458 m/s & SI Standards (p.3)',
          l1: hi ? '• राशियाँ व प्रतीक: द्रव्यमान m, वेग v, बल F, विद्युत धारा I' : '• Symbols & Units: m, v, F, I + Light c (Latin celeritas)',
          l2: hi ? '• प्रकाश वेग स्थिरांक c = 299,792,458 m/s (लैटिन celeritas = गति)' : '• Exact fixed speed of light c = 299,792,458 m/s in vacuum',
          l3: hi ? '• 22,300 kg विमान ईंधन हादसा (lb/L बनाम kg/L से 15,000 L कमी!)' : '• Aircraft 22,300 kg fuel mix-up (lb vs kg → 15,000 L short!)',
        },
        {
          x: 20, y: 278, w: 380, h: 128, c: p.violet, bg: p.violetBg,
          t: hi ? '3. नियम vs सिद्धांत vs पूर्वानुमान & ग्रहण मिथक (पृ. 4–5)' : '3. Law vs Theory vs Principle & Predictions (p.4–5)',
          l1: hi ? '• नियम (पैटर्न), सिद्धांत (क्यों?), आधारभूत सिद्धांत (ऊर्जा संरक्षण)' : '• Law (pattern), Theory (why?), Principle (energy conservation)',
          l2: hi ? '• वर्षा पूर्वानुमान (मापन आधारित: आर्द्रता/दाब/ताप) व मौसम अस्थिरता' : '• Ex 1.2 Rain Prediction (humidity/wind data) & weather chaos',
          l3: hi ? '• खग्रास सूर्य ग्रहण (चित्र 1.2): केवल छाया का खेल, भोजन खराब नहीं!' : '• Solar Eclipse (Fig 1.2): Pure shadow play — no harm to food!',
        },
        {
          x: 420, y: 278, w: 380, h: 128, c: p.rose, bg: p.roseBg,
          t: hi ? '4. सन्निकट अनुमान व अंतःविषय विज्ञान (पृ. 6–7)' : '4. Fermi Estimation & Unified Science (p.6–7)',
          l1: hi ? '• चावल अनुमान (2000–2500 kcal) + श्वसन (10,000 L / 8,640 L/दिन)' : '• Daily Air: ~20,000 breaths × 0.5 L = 10,000 L (Balloons: 8,640 L)',
          l2: hi ? '• कोई सीमा-रेखा नहीं: भौतिकी + रसायन + जीवविज्ञान + गणित जुड़े हैं' : '• No rigid boundary: real problems need Physics+Chem+Bio+Math',
          l3: hi ? '• सर्जिकल मास्क (चित्र 1.4): स्थैतिक आकर्षण, बहुलक रेशा, विषाणु, प्रवाह' : '• Mask (Fig 1.4): Electrostatics + Polymer fibres + Virus + Airflow',
        },
      ].map((b) => `
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="12" fill="${b.bg}" stroke="${b.c}" stroke-width="1.4"/>
        <text x="${b.x + 14}" y="${b.y + 24}" font-size="11.2" font-weight="800" fill="${b.c}">${esc(b.t)}</text>
        <text x="${b.x + 14}" y="${b.y + 52}" font-size="10" font-weight="600" fill="${p.text}">${esc(b.l1)}</text>
        <text x="${b.x + 14}" y="${b.y + 78}" font-size="10" font-weight="600" fill="${p.text}">${esc(b.l2)}</text>
        <text x="${b.x + 14}" y="${b.y + 104}" font-size="10" font-weight="600" fill="${p.text}">${esc(b.l3)}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c9-ch1-models-law-theory-diagram') {
    const title = hi ? 'वैज्ञानिक मॉडल निर्माण, मेघनाद साहा तथा नियम–सिद्धांत–आधारभूत सिद्धांत तुलना' : 'Scientific Models, Meghnad Saha Ionisation & Law vs Theory vs Principle';
    return `<svg viewBox="0 0 820 410" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="398" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Row: 3 Cards for Law, Theory, Principle -->
      ${[
        {
          x: 20, c: p.cyan, bg: p.cyanBg,
          h: hi ? '1. नियम (Scientific Law)' : '1. Scientific Law (नियम)',
          s1: hi ? 'प्रकृति के अवलोकन का नियमित पैटर्न बताता है' : 'Describes a regular observed pattern of nature',
          s2: hi ? '(शब्दों या गणितीय समीकरण द्वारा)' : '(Expressed in words or mathematical equation)',
          ex: hi ? 'उदा: न्यूटन के गति नियम (अचानक बस रुकने पर झटका)' : 'Ex: Newton’s Laws of Motion (bus sudden brake jerk)',
        },
        {
          x: 286, c: p.emerald, bg: p.emeraldBg,
          h: hi ? '2. सिद्धांत (Theory — अनुमान नहीं!)' : '2. Scientific Theory (सिद्धांत)',
          s1: hi ? 'एक कदम आगे: ये पैटर्न क्यों उत्पन्न होते हैं?' : 'Explains WHY & HOW patterns happen via tested proof',
          s2: hi ? 'सावधान परीक्षा व प्रमाण पर आधारित स्पष्टीकरण' : 'Carefully tested explanation — NEVER a wild guess!',
          ex: hi ? 'उदा: परमाणु सिद्धांत (अणु कैसे बनते हैं) — सुधार योग्य' : 'Ex: Atomic Theory (how atoms form molecules); testable',
        },
        {
          x: 552, c: p.violet, bg: p.violetBg,
          h: hi ? '3. आधारभूत सिद्धांत (Principle)' : '3. Fundamental Principle',
          s1: hi ? 'व्यापक मूल विचार जो विविध स्थितियों में लागू हो' : 'Broad overarching rule valid across wide systems',
          s2: hi ? 'भौतिक, रासायनिक व जैव प्रक्रियाओं का मार्गदर्शन' : 'Guides energy/matter transformations universally',
          ex: hi ? 'उदा: सीढ़ियाँ चढ़ते समय ऊर्जा संरक्षण सिद्धांत!' : 'Ex: Conservation of Energy while climbing stairs!',
        },
      ].map((b) => `
        <rect x="${b.x}" y="56" width="248" height="140" rx="11" fill="${b.bg}" stroke="${b.c}" stroke-width="1.4"/>
        <text x="${b.x + 124}" y="78" text-anchor="middle" font-size="11.2" font-weight="900" fill="${b.c}">${esc(b.h)}</text>
        <text x="${b.x + 12}" y="104" font-size="9.6" font-weight="700" fill="${p.text}">${esc(b.s1)}</text>
        <text x="${b.x + 12}" y="124" font-size="9.4" font-weight="600" fill="${p.muted}">${esc(b.s2)}</text>
        <text x="${b.x + 12}" y="156" font-size="9.6" font-weight="800" fill="${p.amber}">${esc(b.ex)}</text>
        <text x="${b.x + 12}" y="178" font-size="8.8" font-weight="700" fill="${p.text}">${esc(hi ? 'नए प्रमाण मिलने पर हर विचार का परिष्करण संभव' : 'Open to revision whenever sharper evidence emerges')}</text>
      `).join('')}

      <!-- Bottom Row: Scientific Modeling & Meghnad Saha -->
      <rect x="20" y="210" width="380" height="182" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.4"/>
      <text x="210" y="232" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.amber}">${esc(hi ? 'सरल मॉडल बनाना: क्या रखें व क्या छोड़ें? (उदा. 1.1 व क्र. 1.1)' : 'Model Building Rules (Ex 1.1 Cricket & Act 1.1 Bicycle)')}</text>
      <text x="34" y="258" font-size="9.8" font-weight="800" fill="${p.emerald}">${esc(hi ? '✓ आवश्यक विवरण (Keep):' : '✓ KEEP Essential Variables:')}</text>
      <text x="42" y="276" font-size="9.4" font-weight="600" fill="${p.text}">${esc(hi ? '• क्रिकेट छक्का: गेंद का द्रव्यमान, प्रहार वेग और मारने की दिशा' : '• Cricket shot: Ball mass, strike speed & launch angle')}</text>
      <text x="42" y="294" font-size="9.4" font-weight="600" fill="${p.text}">${esc(hi ? '• भौतिकी/रसायन/भूगोल: बिंदु कार, गोले-आबंध, परतों वाला गोल पृथ्वी' : '• Car = point dot | Molecules = spheres+bonds | Earth = layers')}</text>
      <text x="34" y="320" font-size="9.8" font-weight="800" fill="${p.rose}">${esc(hi ? '✗ जानबूझकर उपेक्षित (Ignore — त्रुटि नहीं, सरलीकरण!):' : '✗ INTENTIONALLY IGNORE (Deliberate Simplification):')}</text>
      <text x="42" y="338" font-size="9.4" font-weight="600" fill="${p.text}">${esc(hi ? '• बल्ले का ब्रांड, गेंद का रंग, घास मात्रा, नगण्य वायु प्रतिरोध/सीम' : '• Bat brand, ball colour, grass height, tiny seam spin/air drag')}</text>
      <text x="34" y="370" font-size="9.4" font-weight="800" fill="${p.text}">${esc(hi ? '⇒ बाद में सटीकता बढ़ाने हेतु जटिल कारक जोड़े जाते हैं!' : '⇒ Extra factors are added gradually when higher accuracy is needed!')}</text>

      <rect x="416" y="210" width="384" height="182" rx="12" fill="${p.tealBg}" stroke="${p.teal}" stroke-width="1.4"/>
      <text x="608" y="232" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.teal}">${esc(hi ? 'भारतीय वैज्ञानिक मेघनाद साहा (डाक टिकट बॉक्स, पृ. 2)' : 'Astrophysicist Meghnad Saha (Indian Stamp Box, p.2)')}</text>
      <text x="430" y="258" font-size="9.8" font-weight="800" fill="${p.amber}">${esc(hi ? '• तारों का सरलीकृत अध्ययन (Saha Ionisation Insight):' : '• Simplified Model of Starlight Spectra:')}</text>
      <text x="430" y="278" font-size="9.4" font-weight="600" fill="${p.text}">${esc(hi ? 'हर एक परमाणु व जटिल अभिक्रिया का हिसाब छोड़ कर इन्होंने:' : 'Skipped tracking every single atom/reaction inside stars;')}</text>
      <text x="430" y="298" font-size="9.6" font-weight="800" fill="${p.text}">${esc(hi ? '1. तारे के पदार्थ को एक “उष्ण गैस (Hot Gas)” मॉडल माना;' : '1. Treated star matter purely as a HOT GAS model;')}</text>
      <text x="430" y="318" font-size="9.6" font-weight="800" fill="${p.text}">${esc(hi ? '2. केवल तीन मापदंड: तापमान, दाब एवं परमाणुओं के आयनन पर ध्यान दिया।' : '2. Focused strictly on Temperature, Pressure & Atom Ionisation.')}</text>
      <text x="430" y="346" font-size="9.8" font-weight="900" fill="${p.teal}">${esc(hi ? '⇒ महान खोज: तारों का रंग सीधे उनके तापमान से गहराई से जुड़ा है!' : '⇒ Discovery: Colour/spectrum of a star links directly to Temperature!')}</text>
      <text x="430" y="370" font-size="9" font-weight="700" fill="${p.muted}">${esc(hi ? '• गणित समीकरण याद करना नहीं, संबंधों को पढ़ने की भाषा है (पृ. 3)!' : '• Math in science = concise language expressing how variables link!')}</text>
    </svg>`;
  }

  if (key === 'c9-ch1-si-units-constants-diagram') {
    const title = hi ? 'सभी 7 मूल SI मात्रक, प्रमुख व्युत्पन्न मात्रक, c = 299792458 m/s व विमान ईंधन त्रुटि' : '7 Fundamental SI Units, Key Derived Units, Light Speed c & Aviation Unit Error';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- 7 SI Base Units Grid -->
      <rect x="20" y="54" width="780" height="106" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="410" y="74" text-anchor="middle" font-size="11" font-weight="900" fill="${p.cyan}">${esc(hi ? 'अंतर्राष्ट्रीय मानक (SI): 7 मूल भौतिक राशियाँ व मात्रक (संपूर्ण विश्व में समान, चित्र 1.1)' : '7 International System (SI) Base Quantities & Units (Uniform Globally)')}</text>
      ${[
        { u: 'm', q: hi ? 'लंबाई (मीटर)' : 'Length (Metre)' },
        { u: 'kg', q: hi ? 'द्रव्यमान (किग्रा)' : 'Mass (Kilogram)' },
        { u: 's', q: hi ? 'समय (सेकंड)' : 'Time (Second)' },
        { u: 'A', q: hi ? 'धारा (एम्पियर)' : 'Current (Ampere)' },
        { u: 'K', q: hi ? 'ताप (केल्विन)' : 'Temp (Kelvin)' },
        { u: 'mol', q: hi ? 'मात्रा (मोल)' : 'Amount (Mole)' },
        { u: 'cd', q: hi ? 'ज्योति (कैंडेला)' : 'Light (Candela)' },
      ].map((b, i) => `
        <rect x="${30 + i * 109}" y="84" width="101" height="64" rx="9" fill="${p.bg}" stroke="${p.teal}" stroke-width="1.2"/>
        <text x="${80 + i * 109}" y="114" text-anchor="middle" font-size="16" font-weight="900" fill="${p.amber}">${esc(b.u)}</text>
        <text x="${80 + i * 109}" y="135" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.text}">${esc(b.q)}</text>
      `).join('')}

      <!-- Left Bottom: Speed of Light Box & Foucault -->
      <rect x="20" y="172" width="380" height="226" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.3"/>
      <text x="210" y="194" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.amber}">${esc(hi ? 'प्रकाश वेग ‘c’ व केल्विन-ताप रूपांतरण (परीक्षा बॉक्स)' : 'Speed of Light ‘c’ & Top SI Exam Numericals')}</text>
      <text x="34" y="218" font-size="9.8" font-weight="800" fill="${p.text}">${esc(hi ? '• लैटिन शब्द celeritas (“गति”) से प्रतीक ‘c’ आया (पृ. 3)!' : '• Symbol ‘c’ comes from Latin “celeritas” (= speed, p.3)!')}</text>
      <text x="34" y="238" font-size="10.2" font-weight="900" fill="${p.emerald}">${esc(hi ? '• निर्वात में c = 299,792,458 m/s (≈ 3 × 10⁸ m/s)' : '• Exact fixed value: c = 299,792,458 m/s (≈ 3 × 10⁸ m/s)')}</text>
      <text x="34" y="258" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• 1862 में फूको (Foucault) ने घूर्णन दर्पण से सटीक मापन किया (NTPC!)' : '• 1862 Foucault rotating mirror: 1st accurate measurement')}</text>
      <text x="34" y="278" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• माध्यम क्रम: v(वायु) > v(जल 2.25×10⁸) > v(काँच 2×10⁸) > हीरा' : '• Medium order: v(air) > v(water) > v(glass) > diamond')}</text>
      <text x="34" y="306" font-size="9.8" font-weight="900" fill="${p.rose}">${esc(hi ? '• 22,300 kg विमान ईंधन दुर्घटना सबक (पृ. 3):' : '• 22,300 kg Aircraft Fuel Disaster Lesson (p.3):')}</text>
      <text x="34" y="324" font-size="9.2" font-weight="600" fill="${p.text}">${esc(hi ? 'घनत्व को kg/L की जगह lb/L (पाउंड/लीटर) से गिनने पर 15,000 L' : 'Crew used lb/L instead of kg/L → jet ran 15,000 L short mid-air!')}</text>
      <text x="34" y="342" font-size="9.2" font-weight="600" fill="${p.text}">${esc(hi ? 'ईंधन कम रह गया व आपात लैंडिंग करनी पड़ी — इसलिए SI मानक अनिवार्य!' : 'Safe emergency glide landing proved WHY global SI units save lives!')}</text>
      <text x="34" y="372" font-size="9.6" font-weight="800" fill="${p.cyan}">${esc(hi ? '• तापमान: T(K) = °C + 273 | अंतर ΔT(K) = ΔT(°C) (ALP!)' : '• Temp: K = °C + 273 (37°C = 310 K) • Diff ΔK = Δ°C (ALP PYQ!)')}</text>

      <!-- Right Bottom: High-Frequency RRB Derived SI Matrix -->
      <rect x="414" y="172" width="386" height="226" rx="12" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.3"/>
      <text x="607" y="194" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.violet}">${esc(hi ? 'सर्वाधिक पूछे जाने वाले व्युत्पन्न SI मात्रक (RRB 2024–26)' : 'Highest-Yield Derived SI Units in Railway Exams')}</text>
      ${[
        [hi ? 'बल (Force F) / भार (Weight)' : 'Force (F) / Weight', hi ? 'न्यूटन (N) = kg·m·s⁻²' : 'Newton (N) = kg·m·s⁻²'],
        [hi ? 'द्रव्यमान (m) बनाम भार (W)' : 'Mass (m) vs Weight (W)', hi ? 'द्रव्यमान kg | भार N' : 'Mass: kg | Weight: N'],
        [hi ? 'कार्य (W) व सभी ऊर्जाएँ' : 'Work & Energy (KE/PE)', hi ? 'जूल (J) = N·m (Pa नहीं!)' : 'Joule (J) = N·m = W·s'],
        [hi ? 'दाब (Pressure P = F/A)' : 'Pressure (P = F/A)', hi ? 'पास्कल (Pa) = N·m⁻²' : 'Pascal (Pa) = N·m⁻²'],
        [hi ? 'संवेग (Momentum p=mv)' : 'Momentum (p = m·v)', hi ? 'kg·m·s⁻¹ | त्वरण m·s⁻²' : 'kg·m·s⁻¹ | Accel: m·s⁻²'],
        [hi ? 'गुरुत्वाकर्षण स्थिरांक G' : 'Gravitation Constant G', hi ? 'N·m²·kg⁻² (Tech PYQ!)' : 'N·m²·kg⁻² (Tech PYQ!)'],
        [hi ? 'अपवर्तनांक n & फ्लक्स' : 'Refractive Index & B/Φ', hi ? 'मात्रकहीन | वेबर Φ | टेस्ला B' : 'Unitless | Weber Φ | Tesla B'],
      ].map((r, idx) => `
        <rect x="428" y="${208 + idx * 26}" width="358" height="22" rx="5" fill="${p.bg}" stroke="${p.border}" stroke-width="0.8"/>
        <text x="436" y="${223 + idx * 26}" font-size="9.5" font-weight="700" fill="${p.text}">${esc(r[0])}</text>
        <text x="778" y="${223 + idx * 26}" text-anchor="end" font-size="9.5" font-weight="900" fill="${p.amber}">${esc(r[1])}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c9-ch1-estimation-interdisciplinary-diagram') {
    const title = hi ? 'तर्कसंगत सन्निकट आकलन (उदा. 1.3 श्वसन वायु) एवं विज्ञान की अंतःविषय एकता (मास्क चित्र 1.4)' : 'Logical Estimation Check (Ex 1.3 Daily Air) & Interdisciplinary Mask Fusion (Fig 1.4)';
    return `<svg viewBox="0 0 820 410" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="398" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.tealBg}" stroke="${p.teal}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Order-of-Magnitude & Eclipse -->
      <rect x="20" y="56" width="382" height="338" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="211" y="78" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.cyan}">${esc(hi ? 'सन्निकट आकलन कौशल व वैज्ञानिक जाँच (पृ. 5–6)' : 'Order-of-Magnitude Reasoning & Viral Claim Test')}</text>
      <text x="34" y="106" font-size="9.8" font-weight="800" fill="${p.amber}">${esc(hi ? '1. प्रतिदिन कितनी वायु श्वास में लेते हैं? (उदा. 1.3):' : '1. Daily Litres of Air Breathed (Solved Ex 1.3):')}</text>
      <text x="42" y="126" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '• विश्राम श्वसन दर = 12–15 बार/मिनट × 1440 min/दिन ≈ 20,000 श्वास' : '• Resting rate = 12–15 breaths/min × 1440 min ≈ 20,000/day')}</text>
      <text x="42" y="144" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '• 4–5 श्वास में 2 L गुब्बारा ⇒ 1 श्वास आयतन ≈ 0.5 L' : '• 4–5 breaths fill 2 L balloon ⇒ 1 breath ≈ 0.5 L')}</text>
      <text x="42" y="164" font-size="9.8" font-weight="900" fill="${p.emerald}">${esc(hi ? '⇒ 20,000 × 0.5 L = ~10,000 L/दिन (क्रॉस-जाँच: 8,640 L!)' : '⇒ 20,000 × 0.5 L = ~10,000 L/day (Balloon check: 8,640 L!)')}</text>

      <text x="34" y="198" font-size="9.8" font-weight="800" fill="${p.amber}">${esc(hi ? '2. परिवार मासिक चावल अनुमान (पृ. 6, चित्र 1.3):' : '2. Monthly Rice Estimate (Fig 1.3, p.6):')}</text>
      <text x="42" y="218" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '• औसत वयस्क दैनिक ऊर्जा = 2000 – 2500 kcal (100 g कुछ दिन नहीं!)' : '• Average adult daily need = 2000 – 2500 kcal')}</text>
      <text x="42" y="236" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '• 100 g बेहद कम व कुछ टन असंभव — सार्थकता जाँच मुख्य लक्ष्य!' : '• Checks plausibility: 100 g impossible low, tonnes absurd!')}</text>

      <text x="34" y="270" font-size="9.8" font-weight="800" fill="${p.rose}">${esc(hi ? '3. वायरल दावा जाँच: क्या सूर्य ग्रहण भोजन खराब करता है?' : '3. Viral Claim Test: Food During Solar Eclipse (Fig 1.2):')}</text>
      <text x="42" y="290" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '• ग्रहण मात्र छायाओं का खेल है; ताप/रसायन/जैविक कोई हानि प्रमाण नहीं!' : '• Eclipse is strictly shadow geometry; NO toxic/chemical change!')}</text>
      <text x="34" y="324" font-size="9.8" font-weight="800" fill="${p.violet}">${esc(hi ? '4. मौसम पूर्वानुमान (अराजक जटिल तंत्र, पृ. 5):' : '4. Weather Forecast Limits (Chaos & Sensitivity):')}</text>
      <text x="42" y="344" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '• छोटे-छोटे ताप/दाब बदलाव समय के साथ बड़े होकर भविष्यवाणी बदल देते' : '• Tiny initial T/P shifts grow over days → accuracy drops with time!')}</text>
      <text x="42" y="366" font-size="9.1" font-weight="700" fill="${p.muted}">${esc(hi ? '• “हां/नहीं” नहीं; आर्द्रता %, हवा गति जैसे मापन योग्य प्रश्न पूछें (उदा. 1.2)' : '• Ex 1.2: Ask measurable Qs (80% humidity, wind), not yes/no!')}</text>

      <!-- Right: 4-Branch Surgical Mask Fusion (Fig 1.4) -->
      <rect x="416" y="56" width="384" height="338" rx="12" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.3"/>
      <text x="608" y="78" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.emerald}">${esc(hi ? 'विज्ञान में कोई विभाजन रेखा नहीं! (मास्क चित्र 1.4 का उदाहरण)' : 'Science Works Together: How a Surgical Mask Works (Fig 1.4)')}</text>

      <rect x="528" y="178" width="160" height="58" rx="12" fill="${p.bg}" stroke="${p.amber}" stroke-width="2"/>
      <text x="608" y="204" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.amber}">${esc(hi ? 'शल्य मास्क (Mask)' : 'SURGICAL MASK')}</text>
      <text x="608" y="222" text-anchor="middle" font-size="9" font-weight="700" fill="${p.text}">${esc(hi ? '4 विषयों का संगम!' : '4 Disciplines United!')}</text>

      <rect x="430" y="96" width="168" height="66" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="514" y="116" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.cyan}">${esc(hi ? 'भौतिकी (Physics)' : 'PHYSICS')}</text>
      <text x="514" y="135" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'कणीय गति + वैद्युत' : 'Particle motion &')}</text>
      <text x="514" y="150" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'स्थैतिक आकर्षण!' : 'Electrostatic trapping')}</text>

      <rect x="618" y="96" width="168" height="66" rx="9" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.3"/>
      <text x="702" y="116" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.violet}">${esc(hi ? 'रसायन (Chemistry)' : 'CHEMISTRY')}</text>
      <text x="702" y="135" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'बहुलक (Polymer) रेशों' : 'Polymer fibre structure')}</text>
      <text x="702" y="150" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'के रासायनिक गुणधर्म' : '& electrostatic filter')}</text>

      <rect x="430" y="256" width="168" height="66" rx="9" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.3"/>
      <text x="514" y="276" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.rose}">${esc(hi ? 'जीवविज्ञान (Biology)' : 'BIOLOGY')}</text>
      <text x="514" y="295" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'विषाणु (Virus) आमाप' : 'Virus particle size &')}</text>
      <text x="514" y="310" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'और संचरण प्रकृति' : 'respiratory transmission')}</text>

      <rect x="618" y="256" width="168" height="66" rx="9" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.3"/>
      <text x="702" y="276" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.amber}">${esc(hi ? 'गणित (Mathematics)' : 'MATHEMATICS')}</text>
      <text x="702" y="295" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'वायुप्रवाह और निस्यंदन' : 'Airflow & filtration')}</text>
      <text x="702" y="310" text-anchor="middle" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'दक्षता (Filtration) मॉडल' : 'efficiency modelling')}</text>

      <text x="608" y="352" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.text}">${esc(hi ? 'जलवायु परिवर्तन, नई औषधि व सतत तकनीक भी इन सभी के संगम से ही हल होते हैं!' : 'Climate change, medicines & green tech similarly demand all branches!')}</text>
      <text x="608" y="374" text-anchor="middle" font-size="9" font-weight="700" fill="${p.muted}">${esc(hi ? 'अभ्यास 3: प्रेशर कुकर, मोबाइल व ट्रैफिक जाम में सभी शाखाएँ खोजें' : 'Think & Answer Q3: Link Pressure Cooker / Smartphone / Traffic Jam!')}</text>
    </svg>`;
  }

  return '';
}
