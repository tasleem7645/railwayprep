/**
 * Class 10 NCERT Science — Chapter 8: Heredity (आनुवंशिकता)
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
    cardAlt: isLight ? '#F0FDF4' : '#101B32',
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

export function renderC10Ch8HeredityDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';
  const suf = `ch8_${theme}`;

  if (key === 'c10-ch8-blueprint-mindmap') {
    const title = hi ? 'अध्याय 8 मानचित्र: आनुवंशिकता एवं वंशागति नियम (NCERT 2026–27)' : 'Chapter 8 Master Map: Heredity & Inheritance Rules';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Summary -->
      <rect x="210" y="58" width="400" height="58" rx="12" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.5"/>
      <text x="410" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="${p.cyan}">${esc(hi ? 'ग्रेगर जॉन मेंडल (1822–1884) → आनुवंशिकता के नियम' : 'Gregor Johann Mendel (1822–1884) -> Inheritance Laws')}</text>
      <text x="410" y="102" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'विज्ञान + गणित • मटर (Pisum) के विपर्यासी लक्षण: गोल/झुर्रीदार, लंबा/बौना, बैंगनी/सफेद' : 'Science + Stats • Pea Traits: Round/Wrinkled, Tall/Short, Violet/White flowers')}</text>

      ${[
        {
          x: 20, y: 132, w: 380, h: 128, c: p.emerald, bg: p.emeraldBg,
          t: hi ? '8.1 विभिन्नता व 8.2.1 वंशागत लक्षण' : '8.1 Accumulation of Variation & Earlobes',
          l1: hi ? '• अलैंगिक (गन्ना खेत): कम विभिन्नता (अल्प DNA त्रुटि)' : '• Asexual (Sugarcane/Fig 8.1): Tiny DNA copy variation',
          l2: hi ? '• लैंगिक (मानव): अधिकतम सफल वंशागत विभिन्नताएँ' : '• Sexual (Humans): Maximum heritable variation!',
          l3: hi ? '• क्र. 8.1 कर्णपालि: स्वतंत्र vs जुड़ी (माता-पिता DNA योगदान)' : '• Act 8.1 Earlobes: Free vs Attached (50% each parent)',
        },
        {
          x: 420, y: 132, w: 380, h: 128, c: p.amber, bg: p.amberBg,
          t: hi ? '8.2.2 एकसंकर व द्विसंकर संकरण (चित्र 8.3–8.5)' : '8.2.2 Monohybrid & Dihybrid Crosses (Fig 8.3–8.5)',
          l1: hi ? '• F1 (TT × tt): सभी लंबे Tt (मिश्रित मध्य ऊँचाई नहीं!)' : '• F1 (TT x tt): ALL Tall Tt (no medium height!)',
          l2: hi ? '• F2 एकसंकर: दृश्य 3 लंबा : 1 बौना | जीन 1 TT : 2 Tt : 1 tt' : '• F2 Mono: 3 Tall : 1 Short | Genotype 1 TT : 2 Tt : 1 tt',
          l3: hi ? '• F2 द्विसंकर (556 बीज): 315:108:101:32 = 9:3:3:1 स्वतंत्र' : '• F2 Dihybrid (556): 315:108:101:32 = 9:3:3:1 Independent',
        },
        {
          x: 20, y: 274, w: 380, h: 128, c: p.cyan, bg: p.cyanBg,
          t: hi ? '8.2.3 जीन-प्रोटीन अभिव्यक्ति व गुणसूत्र (अर्द्धसूत्री)' : '8.2.3 Gene -> Enzyme -> Trait & Meiosis',
          l1: hi ? '• DNA का प्रोटीन कोड भाग = जीन (अभिव्यक्ति नियंत्रक)' : '• DNA section encoding protein = GENE (on chromosomes)',
          l2: hi ? '• दक्ष एंजाइम → अधिक पादप हार्मोन → लंबा पौधा (कमी = बौना)' : '• Efficient enzyme -> More hormone -> Tall (altered -> Dwarf)',
          l3: hi ? '• युग्मक में हर जोड़े का 1 गुणसूत्र (Meiosis से आधे → पुनः 2n!)' : '• Meiosis puts 1 chromosome of each pair in gametes (Tech 19)',
        },
        {
          x: 420, y: 274, w: 380, h: 128, c: p.rose, bg: p.roseBg,
          t: hi ? '8.2.4 लिंग निर्धारण (चित्र 8.6): सरीसृप बनाम मानव XX/XY' : '8.2.4 Sex Determination (Temp/Snail vs Human XX/XY)',
          l1: hi ? '• पर्यावरण: कुछ सरीसृप (अंडे का ऊष्मायन ताप); घोंघा (बदले)' : '• Non-genetic: Reptiles (egg temp); Snail changes sex (Tech 15)',
          l2: hi ? '• मानव: 22 पूर्ण जोड़े + 1 लिंग जोड़ा (मादा XX / नर XY)' : '• Human: 22 full pairs + 1 sex pair (Female XX / Male XY)',
          l3: hi ? '• शिशु लिंग केवल पिता के गुणसूत्र से तय (X=लड़की, Y=लड़का 50%)' : '• Father X -> Girl (XX) | Father Y -> Boy (XY) 50:50 chance!',
        },
      ].map((b) => `
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="12" fill="${p.cardAlt}" stroke="${b.c}" stroke-width="1.3"/>
        <rect x="${b.x + 10}" y="${b.y + 8}" width="${b.w - 20}" height="26" rx="7" fill="${b.bg}"/>
        <text x="${b.x + 18}" y="${b.y + 25}" font-size="11.2" font-weight="800" fill="${b.c}">${esc(b.t)}</text>
        <text x="${b.x + 14}" y="${b.y + 54}" font-size="10.2" font-weight="700" fill="${p.text}">${esc(b.l1)}</text>
        <text x="${b.x + 14}" y="${b.y + 78}" font-size="10.2" font-weight="700" fill="${p.text}">${esc(b.l2)}</text>
        <text x="${b.x + 14}" y="${b.y + 102}" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(b.l3)}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c10-ch8-mendel-crosses-diagram') {
    const title = hi ? 'मेंडल के एकसंकर (3:1 / 1:2:1 — चित्र 8.3) व द्विसंकर संकरण (9:3:3:1 — चित्र 8.5, 556 बीज)' : 'Mendel’s Monohybrid Cross (3:1 / 1:2:1 — Fig 8.3) & Dihybrid Independent Assortment (9:3:3:1)';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Fig 8.3 Monohybrid Cross -->
      <rect x="20" y="56" width="380" height="356" rx="12" fill="${p.cardAlt}" stroke="${p.emerald}"/>
      <text x="210" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.emerald}">${esc(hi ? 'चित्र 8.3: एकसंकर संकरण (प्रभावी बनाम अप्रभावी)' : 'Fig 8.3: Monohybrid Cross (Dominant vs Recessive)')}</text>
      <rect x="38" y="90" width="150" height="36" rx="8" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
      <text x="113" y="112" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.text}">${esc(hi ? 'लंबा पौधा (TT)' : 'Pure Tall (TT)')}</text>
      <text x="210" y="113" text-anchor="middle" font-size="14" font-weight="900" fill="${p.amber}">×</text>
      <rect x="232" y="90" width="150" height="36" rx="8" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="307" y="112" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.text}">${esc(hi ? 'बौना पौधा (tt)' : 'Pure Short (tt)')}</text>

      <!-- F1 Box -->
      <rect x="66" y="146" width="288" height="42" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}"/>
      <text x="210" y="165" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.cyan}">${esc(hi ? 'F1 पीढ़ी: सभी लंबे पौधे (Tt)' : 'F1 Generation: ALL TALL (Tt)')}</text>
      <text x="210" y="181" text-anchor="middle" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'कोई मध्य ऊँचाई नहीं! एकल T प्रभावी गुण' : 'NO medium plants! Single T copy suffices for Tall')}</text>

      <!-- F2 2x2 Grid -->
      <text x="210" y="210" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber}">${esc(hi ? 'F1 × F1 स्वपरागण → F2 पीढ़ी (Tt × Tt):' : 'F1 × F1 Selfing -> F2 Punnett Square:')}</text>
      ${[
        { x: 66, y: 222, lbl: 'TT', desc: hi ? 'शुद्ध लंबा' : 'Pure Tall', c: p.emerald, bg: p.emeraldBg },
        { x: 214, y: 222, lbl: 'Tt', desc: hi ? 'संकर लंबा' : 'Hybrid Tall', c: p.cyan, bg: p.cyanBg },
        { x: 66, y: 274, lbl: 'Tt', desc: hi ? 'संकर लंबा' : 'Hybrid Tall', c: p.cyan, bg: p.cyanBg },
        { x: 214, y: 274, lbl: 'tt', desc: hi ? 'शुद्ध बौना' : 'Recessive Short', c: p.rose, bg: p.roseBg },
      ].map((cell) => `
        <rect x="${cell.x}" y="${cell.y}" width="140" height="44" rx="8" fill="${cell.bg}" stroke="${cell.c}"/>
        <text x="${cell.x + 70}" y="${cell.y + 20}" text-anchor="middle" font-size="13" font-weight="900" fill="${cell.c}">${cell.lbl}</text>
        <text x="${cell.x + 70}" y="${cell.y + 36}" text-anchor="middle" font-size="10" font-weight="700" fill="${p.text}">${esc(cell.desc)}</text>
      `).join('')}

      <rect x="34" y="330" width="352" height="72" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="210" y="352" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.emerald}">${esc(hi ? 'दृश्य (Phenotype) अनुपात = 3 लंबा : 1 बौना' : 'Phenotypic Ratio = 3 Tall : 1 Short (Quarter dwarf)')}</text>
      <text x="210" y="372" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber}">${esc(hi ? 'जीनी (Genotype, क्र. 8.2) = 1 TT : 2 Tt : 1 tt' : 'Genotypic Ratio (Act 8.2) = 1 TT : 2 Tt : 1 tt')}</text>
      <text x="210" y="391" text-anchor="middle" font-size="9.8" font-weight="700" fill="${p.muted}">${esc(hi ? 'अप्रभावी (t) तभी दिखे जब दोनों प्रतियाँ tt हों' : 'Recessive tt expresses ONLY when both copies match!')}</text>

      <!-- Right: Fig 8.5 Dihybrid Independent Assortment -->
      <rect x="414" y="56" width="386" height="356" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
      <text x="607" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.amber}">${esc(hi ? 'चित्र 8.5: द्विसंकर क्रॉस (स्वतंत्र वंशागति — 9:3:3:1)' : 'Fig 8.5: Dihybrid Cross (Independent Inheritance)')}</text>
      <rect x="430" y="90" width="354" height="52" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="607" y="112" text-anchor="middle" font-size="10.8" font-weight="800" fill="${p.text}">${esc(hi ? 'गोल पीले (RRYY) × झुर्रीदार हरे (rryy) → F1: सभी गोल पीले (RrYy)' : 'Round Yellow (RRYY) x Wrinkled Green (rryy) -> F1 ALL Round Yellow')}</text>
      <text x="607" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="${p.emerald}">${esc(hi ? 'प्रभावी लक्षण (Tech Shifts 3, 6): गोल (Round), लंबा (Tall), बैंगनी फूल' : 'Dominant Traits (Tech Shifts 3, 6, 21): Round, Tall, Violet flower!')}</text>

      <!-- 4 F2 Dihybrid Bars -->
      ${[
        { y: 156, lbl: hi ? '1. गोल, पीले (Round Yellow)' : '1. Round Yellow (RRYY/RrYy)', n: '315 / 556', r: '9', c: p.amber, bg: p.amberBg },
        { y: 204, lbl: hi ? '2. गोल, हरे (नया संयोजन ✓)' : '2. Round Green (New combo ✓)', n: '108 / 556', r: '3', c: p.emerald, bg: p.emeraldBg },
        { y: 252, lbl: hi ? '3. झुर्रीदार, पीले (नया संयोजन ✓)' : '3. Wrinkled Yellow (New combo ✓)', n: '101 / 556', r: '3', c: p.cyan, bg: p.cyanBg },
        { y: 300, lbl: hi ? '4. झुर्रीदार, हरे (Wrinkled Green)' : '4. Wrinkled Green (rryy)', n: '32 / 556', r: '1', c: p.rose, bg: p.roseBg },
      ].map((d) => `
        <rect x="430" y="${d.y}" width="354" height="40" rx="8" fill="${d.bg}" stroke="${d.c}"/>
        <text x="444" y="${d.y + 25}" font-size="10.8" font-weight="800" fill="${p.text}">${esc(d.lbl)}</text>
        <text x="770" y="${d.y + 25}" text-anchor="end" font-size="11" font-weight="900" fill="${d.c}">${d.n} (${d.r})</text>
      `).join('')}

      <rect x="430" y="350" width="354" height="52" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="607" y="371" text-anchor="middle" font-size="10.8" font-weight="800" fill="${p.cyan}">${esc(hi ? 'F2 में नए संयोजन (108 व 101) सिद्ध करते हैं:' : 'Recombinants (Round-Green & Wrinkled-Yellow) PROVE:')}</text>
      <text x="607" y="390" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'लंबा/बौना व गोल/झुर्रीदार लक्षण स्वतंत्र रूप से वंशागत होते हैं!' : 'Seed shape & seed colour traits inherit INDEPENDENTLY!')}</text>
    </svg>`;
  }

  if (key === 'c10-ch8-gene-expression-chromosome-diagram') {
    const title = hi ? '8.2.3 जीन द्वारा लक्षण नियंत्रण (DNA → एंजाइम → हार्मोन) एवं गुणसूत्र विभाजन (अर्द्धसूत्री)' : '8.2.3 How Genes Control Traits (DNA → Enzyme → Hormone) & Chromosomal Meiosis';
    return `<svg viewBox="0 0 820 390" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_c8_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.emerald}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="378" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Flow: Gene -> Protein/Enzyme -> Hormone -> Height -->
      <rect x="20" y="58" width="780" height="162" rx="12" fill="${p.cardAlt}" stroke="${p.emerald}"/>
      <text x="36" y="78" font-size="11.5" font-weight="800" fill="${p.emerald}">${esc(hi ? 'DNA का प्रोटीन संश्लेषण खंड = जीन (Gene) पौधे की लंबाई कैसे तय करता है? (पृ. 144)' : 'How a Gene (`DNA segment for a Protein`) Determines Plant Tallness (`NCERT p.144`):')}</text>
      ${[
        { x: 34, t: hi ? '1. जीन (DNA खंड)' : '1. Gene on DNA', s: hi ? 'प्रोटीन बनाने की सूचना' : 'Codes Enzyme Protein', c: p.cyan },
        { x: 222, t: hi ? '2. एंजाइम दक्षता' : '2. Enzyme Efficiency', s: hi ? 'दक्ष कार्य vs उत्परिवर्तित कम दक्ष' : 'Fast normal vs altered less-fit', c: p.amber },
        { x: 410, t: hi ? '3. पादप हार्मोन मात्रा' : '3. Growth Hormone', s: hi ? 'अधिक हार्मोन बनाम कम हार्मोन' : 'High amount vs Low amount', c: p.violet },
        { x: 598, t: hi ? '4. दृश्य लक्षण (Trait)' : '4. Visible Trait', s: hi ? 'लंबा पौधा ✓ या बौना पौधा' : 'TALL plant ✓ vs DWARF plant', c: p.emerald },
      ].map((step, i) => `
        <rect x="${step.x}" y="94" width="166" height="66" rx="8" fill="${p.card}" stroke="${step.c}"/>
        <text x="${step.x + 83}" y="118" text-anchor="middle" font-size="10.8" font-weight="900" fill="${step.c}">${esc(step.t)}</text>
        <text x="${step.x + 83}" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.muted}">${esc(step.s)}</text>
        ${i < 3 ? `<line x1="${step.x + 166}" y1="127" x2="${step.x + 188}" y2="127" stroke="${p.emerald}" stroke-width="2.2" marker-end="url(#arr_c8_${suf})"/>` : ''}
      `).join('')}
      <text x="410" y="196" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.text}">${esc(hi ? '→ यदि जीन में परिवर्तन से एंजाइम कम दक्ष बने, तो हार्मोन कम बनेगा और पौधा बौना होगा!' : '-> Altered Gene reduces enzyme efficiency -> LESS plant hormone -> DWARF plant!')}</text>

      <!-- Bottom Band: Why Independent Chromosomes? -->
      <rect x="20" y="232" width="780" height="140" rx="12" fill="${p.cardAlt}" stroke="${p.violet}"/>
      <text x="36" y="254" font-size="11.5" font-weight="800" fill="${p.violet}">${esc(hi ? 'द्विसंकर स्वतंत्र क्यों रहा? एकल DNA नहीं बल्कि स्वतंत्र गुणसूत्र (Chromosomes — Tech Shift 17 & 19)' : 'Why Traits Assort Independently: Multiple Chromosomes & Meiosis (`p.144–145`)')}</text>
      <text x="36" y="278" font-size="10.5" font-weight="700" fill="${p.text}">1. ${esc(hi ? 'यदि सभी जीन एक ही अखंड DNA श्रृंखला पर होते, तो ‘R’ व ‘y’ आपस में चिपके रहते और स्वतंत्र संयोग (चित्र 8.5) संभव न होता!' : 'If all genes sat on ONE DNA chain, `R` and `y` stayed linked together and 9:3:3:1 would fail!')}</text>
      <text x="36" y="300" font-size="10.5" font-weight="700" fill="${p.text}">2. ${esc(hi ? 'प्रत्येक जीन सेट स्वतंत्र इकाइयों = गुणसूत्रों (Chromosomes) पर बँटा है — हर कायिक कोशिका में प्रत्येक गुणसूत्र की 2 प्रतियाँ (1 नर + 1 मादा) हैं।' : 'Instead, genes sit on separate Chromosomes (`two copies per body cell: 1 paternal + 1 maternal`).')}</text>
      <text x="36" y="324" font-size="10.5" font-weight="800" fill="${p.emerald}">3. ${esc(hi ? 'अर्द्धसूत्री विभाजन (Meiosis): युग्मक बनते समय प्रत्येक जोड़े का 1 ही गुणसूत्र जाता है → निषेचन पर युग्मनज में पुनः 2n (46) स्थिर!' : 'Meiosis places ONE chromosome from each pair into gamete (`half!`) -> Fertilisation restores 46 in Zygote!')}</text>
      <text x="36" y="348" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? '• स्पीशीज DNA का स्थायित्व इसी अर्द्धसूत्री विभाजन (अभ्यास Q4) से बना रहता है!' : '• Thus Exercise Q4: Both parents ensure equal genetic contribution via haploid n + n -> 2n restoration!')}</text>
    </svg>`;
  }

  if (key === 'c10-ch8-sex-determination-diagram') {
    const title = hi ? 'मानव में लिंग निर्धारण (चित्र 8.6 — 22 पूर्ण जोड़े + XX / XY) बनाम पर्यावरणीय लिंग (सरीसृप व घोंघा)' : 'Human Sex Determination (Fig 8.6: 22 Pairs + XX / XY) vs Temperature-Dependent Reptiles & Snails';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Human Genetic Sex Flowchart Fig 8.6 -->
      <rect x="20" y="56" width="460" height="348" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
      <text x="250" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 8.6: मानव में 50% लड़का : 50% लड़की वंशागति' : 'Fig 8.6: Human Genetic Sex Determination (50:50 Ratio)')}</text>

      <rect x="44" y="92" width="170" height="52" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}"/>
      <text x="129" y="114" text-anchor="middle" font-size="12" font-weight="900" fill="${p.cyan}">${esc(hi ? 'पिता (नर): XY' : 'Father (Male): XY')}</text>
      <text x="129" y="132" text-anchor="middle" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'अपूर्ण जोड़ा (X बड़ा, Y छोटा)' : 'Mismatched pair (Normal X + short Y)')}</text>

      <rect x="286" y="92" width="170" height="52" rx="8" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="371" y="114" text-anchor="middle" font-size="12" font-weight="900" fill="${p.rose}">${esc(hi ? 'माता (मादा): XX' : 'Mother (Female): XX')}</text>
      <text x="371" y="132" text-anchor="middle" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'पूर्ण युग्म (सभी अंड में X)' : 'Perfect pair (All eggs carry X!)')}</text>

      <!-- Gametes -->
      <rect x="48" y="162" width="76" height="32" rx="7" fill="${p.card}" stroke="${p.cyan}"/>
      <text x="86" y="183" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.cyan}">${esc(hi ? 'शुक्राणु X' : 'Sperm X')}</text>
      <rect x="136" y="162" width="76" height="32" rx="7" fill="${p.card}" stroke="${p.amber}"/>
      <text x="174" y="183" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.amber}">${esc(hi ? 'शुक्राणु Y' : 'Sperm Y')}</text>
      <rect x="316" y="162" width="110" height="32" rx="7" fill="${p.card}" stroke="${p.rose}"/>
      <text x="371" y="183" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.rose}">${esc(hi ? 'सभी अंडाणु: X' : 'All Eggs: X')}</text>

      <!-- Zygotes -->
      <rect x="44" y="220" width="190" height="68" rx="9" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="139" y="246" text-anchor="middle" font-size="13.5" font-weight="900" fill="${p.rose}">${esc(hi ? 'XX → पुत्री (50%)' : 'XX -> Girl (50%)')}</text>
      <text x="139" y="268" text-anchor="middle" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'पिता से X + माता से X' : 'Father’s X sperm + Mother’s X egg')}</text>

      <rect x="266" y="220" width="190" height="68" rx="9" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
      <text x="361" y="246" text-anchor="middle" font-size="13.5" font-weight="900" fill="${p.emerald}">${esc(hi ? 'XY → पुत्र (50%)' : 'XY -> Boy (50%)')}</text>
      <text x="361" y="268" text-anchor="middle" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'पिता से Y + माता से X' : 'Father’s Y sperm + Mother’s X egg')}</text>

      <rect x="44" y="302" width="412" height="86" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="250" y="324" text-anchor="middle" font-size="10.8" font-weight="900" fill="${p.amber}">${esc(hi ? 'परीक्षा VIP: 22 जोड़े अलिंग (Autosomes) + 1 जोड़ा लिंग सूत्र (Tech Shift 9)' : 'Exam Key: 22 Autosome pairs + 1 Sex Chromosome Pair (Tech Shift 9)')}</text>
      <text x="250" y="346" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'सभी बच्चे (लड़का या लड़की) माता से सदैव X प्राप्त करते हैं;' : 'ALL children inherit X from Mother; ONLY Father’s sperm (`X` or `Y`)')}</text>
      <text x="250" y="366" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.emerald}">${esc(hi ? 'शिशु का लिंग केवल पिता के गुणसूत्र (X या Y) से निर्धारित होता है!' : 'determines whether zygote develops into Girl (XX) or Boy (XY)!')}</text>

      <!-- Right: Environmental / Non-Genetic Sex Mechanisms -->
      <rect x="494" y="56" width="306" height="348" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
      <text x="647" y="76" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.amber}">${esc(hi ? 'गैर-आनुवंशिक लिंग निर्धारण (पृ. 145)' : 'Non-Genetic Sex Systems (NCERT p.145)')}</text>
      <rect x="510" y="96" width="274" height="122" rx="9" fill="${p.card}" stroke="${p.border}"/>
      <text x="524" y="118" font-size="11" font-weight="900" fill="${p.cyan}">1. ${esc(hi ? 'पर्यावरण / ऊष्मायन ताप (सरीसृप):' : 'Egg Incubation Temperature (Reptiles):')}</text>
      <text x="524" y="140" font-size="10" font-weight="700" fill="${p.text}">${esc(hi ? 'कुछ सरीसृपों (कछुआ/मगरमच्छ आदि) में निषेचित' : 'In several reptiles, temperature at which')}</text>
      <text x="524" y="158" font-size="10" font-weight="700" fill="${p.text}">${esc(hi ? 'अंडों के ऊष्मायन ताप पर निर्भर करता है कि' : 'fertilised eggs are kept determines whether')}</text>
      <text x="524" y="176" font-size="10" font-weight="800" fill="${p.emerald}">${esc(hi ? 'संतति नर होगी अथवा मादा!' : 'offspring develop into male or female!')}</text>

      <rect x="510" y="232" width="274" height="154" rx="9" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="524" y="256" font-size="11" font-weight="900" fill="${p.rose}">2. ${esc(hi ? 'घोंघा (Snail — Tech Shift 15 PYQ!):' : 'Snail Can Change Sex (Tech Shift 15 PYQ!)')}</text>
      <text x="524" y="280" font-size="10.2" font-weight="800" fill="${p.text}">${esc(hi ? '• घोंघे जैसे कुछ प्राणी जीवनकाल में अपना लिंग' : '• Animals like SNAILS can change their sex')}</text>
      <text x="524" y="298" font-size="10.2" font-weight="800" fill="${p.text}">${esc(hi ? '  स्वयं बदल सकते हैं!' : '  during life — proving sex is NOT always')}</text>
      <text x="524" y="318" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(hi ? '→ सिद्ध होता है कि घोंघे में लिंग निर्धारण' : '  genetically predetermined!')}</text>
      <text x="524" y="338" font-size="10.2" font-weight="900" fill="${p.amber}">${esc(hi ? '  आनुवंशिक रूप से पूर्व-निर्धारित नहीं होता!' : '  (Compare: Humans, Dogs, Birds -> Genetic ✓)')}</text>
    </svg>`;
  }

  return '';
}
