/**
 * Class 10 NCERT Science — Chapter 12: Magnetic Effects of Electric Current (विद्युत धारा के चुंबकीय प्रभाव)
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

export function renderC10Ch12MagnetDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';
  const suf = `ch12_${theme}`;

  if (key === 'c10-ch12-blueprint-mindmap') {
    const title = hi ? 'अध्याय 12 मानचित्र: विद्युत धारा के चुंबकीय प्रभाव (NCERT 2026–27)' : 'Chapter 12 Master Map: Magnetic Effects of Electric Current';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Center Hub -->
      <rect x="250" y="60" width="320" height="60" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.6"/>
      <text x="410" y="84" text-anchor="middle" font-size="13" font-weight="900" fill="${p.amber}">${esc(hi ? 'ऑर्स्टेड 1820 → विद्युत-चुंबकत्व' : 'Oersted 1820 → Electromagnetism')}</text>
      <text x="410" y="106" text-anchor="middle" font-size="10.5" font-weight="700" fill="${p.text}">${esc(hi ? 'चुंबकीय क्षेत्र तीव्रता SI/सम्मान मात्रक: ऑर्स्टेड • MRI: 10⁻⁹ पृथ्वी क्षेत्र' : 'Unit: Oersted • Bio-Magnetism MRI: Heart & Brain (~10⁻⁹ Earth B)')}</text>

      <!-- 4 Pillars -->
      ${[
        {
          x: 20, y: 140, w: 380, h: 124, c: p.cyan, bg: p.cyanBg,
          t: hi ? '12.1 चुंबक व क्षेत्र रेखाएँ (चित्र 12.2–12.4)' : '12.1 Bar Magnet & Field Lines (Fig 12.2–12.4)',
          l1: hi ? '• बाहर: N → S | भीतर: S → N (सतत बंद वक्र!)' : '• Outside: N → S | Inside: S → N (Closed loops!)',
          l2: hi ? '• सघनता/निकटता = प्रबल क्षेत्र • दो रेखाएँ कभी नहीं कटतीं' : '• Closeness = Strength • Field lines NEVER intersect',
          l3: hi ? '• दिक्सूची = छोटा छड़ चुंबक; सजातीय प्रतिकर्षण' : '• Compass needle = mini magnet; Like poles repel',
        },
        {
          x: 420, y: 140, w: 380, h: 124, c: p.emerald, bg: p.emeraldBg,
          t: hi ? '12.2 चालक, पाश व परिनालिका (चित्र 12.6–12.11)' : '12.2 Wire, Loop & Solenoid (Fig 12.6–12.11)',
          l1: hi ? '• सीधा तार: संकेंद्री वृत्त (B ∝ I, B ∝ 1/r)' : '• Straight wire: concentric circles (B ∝ I, B ∝ 1/r)',
          l2: hi ? '• दक्षिण-हस्त अंगुष्ठ नियम (मैक्सवेल कॉर्कस्क्रू नियम)' : '• Right-Hand Thumb Rule (Maxwell Corkscrew, Ex 12.1)',
          l3: hi ? '• परिनालिका भीतर: समांतर सरल = एकसमान; नर्म लोहा = विद्युत-चुंबक' : '• Solenoid inside: Parallel straight = Uniform; Soft iron = Magnet',
        },
        {
          x: 20, y: 278, w: 380, h: 124, c: p.violet, bg: p.violetBg,
          t: hi ? '12.3 धारावाही चालक पर बल (एम्पियर, चित्र 12.12–12.14)' : '12.3 Force on Conductor (Ampère, Fig 12.12–12.14)',
          l1: hi ? '• अधिकतम बल: I ⊥ B (90°) | क्र. 12.7 Al छड़ विस्थापन' : '• Max Force when Current ⊥ Field (90° — Act 12.7)',
          l2: hi ? '• फ्लेमिंग वामहस्त: अँगूठा=बल, तर्जनी=क्षेत्र, मध्यमा=धारा' : '• Fleming Left-Hand: Thumb=Force, Fore=Field, Mid=Current',
          l3: hi ? '• इलेक्ट्रॉन धारा विपरीत! प्रोटॉन: वेग व संवेग बदले (चाल/m स्थिर)' : '• Electron current flips! Proton: Velocity & Momentum change',
        },
        {
          x: 420, y: 278, w: 380, h: 124, c: p.rose, bg: p.roseBg,
          t: hi ? '12.4 घरेलू AC परिपथ (220 V, 50 Hz — चित्र 12.15)' : '12.4 Domestic AC Circuit (220 V, 50 Hz — Fig 12.15)',
          l1: hi ? '• लाल = विद्युन्मय | काला = उदासीन | हरा = भूसंपर्क (सुरक्षा)' : '• Red = Live | Black = Neutral | Green = Earth Wire',
          l2: hi ? '• पार्श्वक्रम (Parallel): समान वोल्टता + अलग ऑन/ऑफ स्विच' : '• Parallel sockets + switches: 15 A Geyser vs 5 A Bulb/Fan',
          l3: hi ? '• फ्यूज (जूल तापन): लघुपथन (Live+Neutral) व अतिभारण रोके' : '• Fuse (Joule heat): Guards Short Circuit & Overloading',
        },
      ].map((b) => `
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="12" fill="${p.cardAlt}" stroke="${b.c}" stroke-width="1.3"/>
        <rect x="${b.x + 10}" y="${b.y + 8}" width="${b.w - 20}" height="26" rx="7" fill="${b.bg}"/>
        <text x="${b.x + 18}" y="${b.y + 25}" font-size="11.5" font-weight="800" fill="${b.c}">${esc(b.t)}</text>
        <text x="${b.x + 14}" y="${b.y + 52}" font-size="10.2" font-weight="700" fill="${p.text}">${esc(b.l1)}</text>
        <text x="${b.x + 14}" y="${b.y + 74}" font-size="10.2" font-weight="700" fill="${p.text}">${esc(b.l2)}</text>
        <text x="${b.x + 14}" y="${b.y + 96}" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(b.l3)}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c10-ch12-bar-straight-thumb-diagram') {
    const title = hi ? 'छड़ चुंबक बंद वक्र (चित्र 12.4) बनाम सीधे तार संकेंद्री वृत्त एवं दक्षिण-हस्त नियम (12.6–12.7)' : 'Bar Magnet Closed Loops (Fig 12.4) & Straight Wire Circles + Right-Hand Thumb Rule';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_mag_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.cyan}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Bar Magnet Closed Curves Fig 12.4 -->
      <rect x="20" y="56" width="380" height="356" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
      <text x="210" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 12.4: छड़ चुंबक क्षेत्र रेखाएँ (क्र. 12.2–12.3)' : 'Fig 12.4: Bar Magnet Closed Curves (Act 12.2–12.3)')}</text>
      <!-- Outer loops N -> S -->
      <path d="M268,162 C330,88 90,88 152,162" fill="none" stroke="${p.cyan}" stroke-width="2" marker-mid="url(#arr_mag_${suf})"/>
      <path d="M276,172 C368,52 52,52 144,172" fill="none" stroke="${p.cyan}" stroke-width="1.6"/>
      <path d="M268,200 C330,274 90,274 152,200" fill="none" stroke="${p.cyan}" stroke-width="2"/>
      <path d="M276,190 C368,310 52,310 144,190" fill="none" stroke="${p.cyan}" stroke-width="1.6"/>
      <!-- Arrows on loops (Right=S, Left=N OR Left=S, Right=N: let S left, N right so outer arrow N->S goes R->L on top!) -->
      <rect x="130" y="160" width="80" height="42" rx="4" fill="${p.slateBg || p.card}" stroke="${p.border}" stroke-width="1.6"/>
      <rect x="210" y="160" width="80" height="42" rx="4" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.6"/>
      <text x="170" y="186" text-anchor="middle" font-size="16" font-weight="900" fill="${p.cyan}">S</text>
      <text x="250" y="186" text-anchor="middle" font-size="16" font-weight="900" fill="${p.rose}">N</text>
      <!-- Inside S->N arrow -->
      <line x1="184" y1="181" x2="234" y2="181" stroke="${p.amber}" stroke-width="2" marker-end="url(#arr_mag_${suf})"/>
      <text x="210" y="116" text-anchor="middle" font-size="11" font-weight="800" fill="${p.cyan}">← N → S (${esc(hi ? 'बाहर' : 'Outside')})</text>
      <text x="210" y="218" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.amber}">${esc(hi ? 'भीतर: S → N (सतत बंद वक्र)' : 'Inside: S → N (Closed Curve)')}</text>
      <rect x="34" y="286" width="352" height="114" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="46" y="306" font-size="10.5" font-weight="800" fill="${p.text}">1. ${esc(hi ? 'बाहर N से प्रकट, S पर विलीन; भीतर S → N' : 'Emerge at N, merge at S outside; S → N inside')}</text>
      <text x="46" y="326" font-size="10.5" font-weight="800" fill="${p.emerald}">2. ${esc(hi ? 'रेखाओं की निकटता = क्षेत्र की आपेक्षिक प्रबलता' : 'Degree of closeness = Relative field strength')}</text>
      <text x="46" y="346" font-size="10.5" font-weight="800" fill="${p.rose}">3. ${esc(hi ? 'कभी प्रतिच्छेद नहीं! (वरना दिक्सूची दो दिशा दिखाती✗)' : 'NEVER intersect! (Compass cannot point 2 ways✗)')}</text>
      <text x="46" y="366" font-size="10" font-weight="700" fill="${p.muted}">4. ${esc(hi ? 'दिक्सूची उत्तर ध्रुव = क्षेत्र की पारंपरिक दिशा (क्र. 12.3)' : 'Compass North pole tip gives B direction (Act 12.3)')}</text>
      <text x="46" y="386" font-size="10" font-weight="700" fill="${p.amber}">5. ${esc(hi ? 'ध्रुवों के निकट रेखाएँ सर्वाधिक सघन व प्रबल' : 'Poles show maximum crowding & peak field B')}</text>

      <!-- Right: Straight Conductor + Right-Hand Thumb Rule -->
      <rect x="414" y="56" width="386" height="356" rx="12" fill="${p.cardAlt}" stroke="${p.emerald}"/>
      <text x="607" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.emerald}">${esc(hi ? 'चित्र 12.6–12.7: संकेंद्री वृत्त व दक्षिण-हस्त नियम' : 'Fig 12.6–12.7: Straight Wire & Right-Hand Thumb Rule')}</text>
      <!-- Concentric ellipses around vertical wire -->
      <ellipse cx="607" cy="182" rx="128" ry="44" fill="none" stroke="${p.emerald}" stroke-width="1.5" stroke-dasharray="5 3"/>
      <ellipse cx="607" cy="182" rx="86" ry="30" fill="none" stroke="${p.emerald}" stroke-width="2"/>
      <ellipse cx="607" cy="182" rx="46" ry="16" fill="none" stroke="${p.emerald}" stroke-width="2.5"/>
      <!-- Vertical wire -->
      <line x1="607" y1="98" x2="607" y2="254" stroke="${p.amber}" stroke-width="5"/>
      <text x="625" y="114" font-size="11.5" font-weight="900" fill="${p.amber}">I ↑ (${esc(hi ? 'धारा' : 'Current')})</text>
      <text x="607" y="248" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.emerald}">${esc(hi ? 'संकेंद्री वृत्त B (केंद्र पर तार)' : 'Concentric Circles (Centre = Wire)')}</text>
      <rect x="428" y="264" width="358" height="136" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="440" y="284" font-size="10.8" font-weight="800" fill="${p.cyan}">${esc(hi ? 'दक्षिण-हस्त अंगुष्ठ नियम (मैक्सवेल कॉर्कस्क्रू):' : 'Right-Hand Thumb Rule (Maxwell Corkscrew):')}</text>
      <text x="440" y="304" font-size="10.2" font-weight="700" fill="${p.text}">• ${esc(hi ? 'अँगूठा = धारा (I) | लिपटी अँगुलियाँ = चुंबकीय क्षेत्र (B)' : 'Thumb = Current I direction | Curled fingers = Field B')}</text>
      <text x="440" y="324" font-size="10.2" font-weight="700" fill="${p.emerald}">• ${esc(hi ? 'सीधे तार की निर्भरता: B ∝ I (प्रत्यक्ष) एवं B ∝ 1/r (दूरी से घटे)' : 'Dependence: B ∝ I (increases w/ current) & B ∝ 1/r (decreases w/ r)')}</text>
      <text x="440" y="346" font-size="10.2" font-weight="800" fill="${p.amber}">• ${esc(hi ? 'उदा. 12.1: पूर्व → पश्चिम क्षैतिज तार → पूर्वी सिरे से देखने पर दक्षिणावर्त' : 'Ex 12.1: East→West horizontal line → Clockwise viewed from East end')}</text>
      <text x="440" y="366" font-size="10.2" font-weight="700" fill="${p.rose}">• ${esc(hi ? 'क्र. 12.4: N→S धारा = सुई पूर्व मुड़े | S→N = सुई पश्चिम मुड़े' : 'Act 12.4: Current N→S needle East | Reversed S→N needle West')}</text>
      <text x="440" y="386" font-size="10" font-weight="700" fill="${p.muted}">• ${esc(hi ? 'धारा ↑ = विक्षेप ↑ | दूरी ↑ = संकेंद्री वृत्त बड़े व क्षेत्र दुर्बल' : 'Ex Q1 Ans (d): Concentric field lines centred ON wire!')}</text>
    </svg>`;
  }

  if (key === 'c10-ch12-loop-solenoid-fleming-diagram') {
    const title = hi ? 'वृत्ताकार पाश, परिनालिका (चित्र 12.8–12.11), क्र. 12.7 एवं फ्लेमिंग वामहस्त नियम (चित्र 12.13–12.14)' : 'Circular Loop, Solenoid (Fig 12.8–12.11), Act 12.7 & Fleming Left-Hand Rule (Ex 12.2)';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Circular Loop & Solenoid -->
      <rect x="20" y="56" width="380" height="356" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
      <text x="210" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? 'पाश केंद्र व परिनालिका / विद्युत चुंबक (12.2.3–12.2.4)' : 'Circular Loop & Current Solenoid (Fig 12.8–12.11)')}</text>
      <!-- Solenoid coils graphic -->
      <rect x="78" y="114" width="264" height="58" rx="10" fill="${p.slateBg || p.card}" stroke="${p.amber}" stroke-width="1.5"/>
      ${[105, 140, 175, 210, 245, 280, 315].map((cx) => `<ellipse cx="${cx}" cy="143" rx="10" ry="38" fill="none" stroke="${p.emerald}" stroke-width="2.4"/>`).join('')}
      <!-- Parallel straight uniform lines inside solenoid -->
      <line x1="60" y1="132" x2="360" y2="132" stroke="${p.cyan}" stroke-width="1.8" stroke-dasharray="6 3"/>
      <line x1="60" y1="143" x2="360" y2="143" stroke="${p.cyan}" stroke-width="2.2"/>
      <line x1="60" y1="154" x2="360" y2="154" stroke="${p.cyan}" stroke-width="1.8" stroke-dasharray="6 3"/>
      <text x="58" y="110" text-anchor="middle" font-size="13" font-weight="900" fill="${p.rose}">N</text>
      <text x="362" y="110" text-anchor="middle" font-size="13" font-weight="900" fill="${p.cyan}">S</text>
      <text x="210" y="202" text-anchor="middle" font-size="10.8" font-weight="800" fill="${p.amber}">${esc(hi ? 'भीतर समांतर सरल रेखाएँ → सभी बिंदुओं पर एकसमान प्रबल क्षेत्र B!' : 'Parallel straight lines inside → UNIFORM & same B everywhere!')}</text>

      <rect x="34" y="216" width="352" height="184" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="46" y="236" font-size="10.5" font-weight="800" fill="${p.cyan}">1) ${esc(hi ? 'वृत्ताकार पाश (चित्र 12.8–12.9): केंद्र पर रेखा लगभग सरल' : 'Circular Loop (Fig 12.8–12.9): Nearly straight lines at centre')}</text>
      <text x="54" y="254" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'n फेरे वाली कुंडली → B पूरे n गुना प्रबल (समान धारा योग)' : 'n turns coil → Field strength is n × single turn B!')}</text>
      <text x="46" y="276" font-size="10.5" font-weight="800" fill="${p.emerald}">2) ${esc(hi ? 'परिनालिका (चित्र 12.10): छड़ चुंबक समरूप पैटर्न (बाहर बंद वक्र)' : 'Solenoid: Acts exactly like a Bar Magnet (N & S poles)')}</text>
      <text x="54" y="294" font-size="10.2" font-weight="800" fill="${p.amber}">${esc(hi ? 'अभ्यास 3(a) सत्य • पृ.223 Q3(d): सभी बिंदुओं पर समान!' : 'p.223 Q3 Ans (d): Field inside solenoid is SAME at all points!')}</text>
      <text x="46" y="316" font-size="10.5" font-weight="800" fill="${p.rose}">3) ${esc(hi ? 'विद्युत चुंबक (Electromagnet — चित्र 12.11):' : 'Electromagnet (Fig 12.11):')}</text>
      <text x="54" y="334" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'भीतर नर्म लौह क्रोड रखने पर प्रबल अस्थायी चुंबक बनता है' : 'Soft iron core placed inside solenoid → strong magnet!')}</text>
      <text x="54" y="352" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? '(पाठ 12.2.4 व सारांश: नर्म लौह-क्रोड; चित्र 12.11 कैप्शन में स्टील)' : '(Tech Shifts 10, 11, 12, 16: Parallel straight / Soft iron boosts B!)')}</text>
      <text x="46" y="376" font-size="10.2" font-weight="800" fill="${p.cyan}">${esc(hi ? 'मेज पर दक्षिणावर्त पाश (पृ.223 Q1): भीतर नीचे, बाहर ऊपर!' : 'CW table loop: Field DOWN inside loop, UP outside loop!')}</text>

      <!-- Right: Fleming Left-Hand Rule & Ex 12.2 -->
      <rect x="414" y="56" width="386" height="356" rx="12" fill="${p.cardAlt}" stroke="${p.violet}"/>
      <text x="607" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.violet}">${esc(hi ? '12.3 फ्लेमिंग वामहस्त नियम व उदा. 12.2 (इलेक्ट्रॉन जाल!)' : '12.3 Fleming Left-Hand Rule & Ex 12.2 Electron Trap')}</text>
      <!-- 3 Orthogonal axes -->
      <line x1="510" y1="200" x2="510" y2="108" stroke="${p.rose}" stroke-width="3.5"/>
      <polygon points="510,98 504,112 516,112" fill="${p.rose}"/>
      <text x="520" y="114" font-size="11.5" font-weight="900" fill="${p.rose}">${esc(hi ? 'अँगूठा = बल / गति (F)' : 'Thumb = Force / Motion (F)')}</text>

      <line x1="510" y1="200" x2="650" y2="200" stroke="${p.cyan}" stroke-width="3.5"/>
      <polygon points="662,200 646,194 646,206" fill="${p.cyan}"/>
      <text x="600" y="188" font-size="11.5" font-weight="900" fill="${p.cyan}">${esc(hi ? 'तर्जनी = चुंबकीय क्षेत्र (B)' : 'Forefinger = Field (B)')}</text>

      <line x1="510" y1="200" x2="452" y2="254" stroke="${p.emerald}" stroke-width="3.5"/>
      <polygon points="444,262 459,257 450,247" fill="${p.emerald}"/>
      <text x="488" y="256" font-size="11.5" font-weight="900" fill="${p.emerald}">${esc(hi ? 'मध्यमा = विद्युत धारा (I)' : 'Middle = Current (I)')}</text>

      <rect x="428" y="274" width="358" height="126" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="440" y="294" font-size="10.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'रट्टा कोड: बायाँ हाथ → F-B-I (अँगूठा-तर्जनी-मध्यमा परस्पर 90°)' : 'Mnemonic F-B-I (90° mutually ⊥): Thumb(F), Fore(B), Middle(I)')}</text>
      <text x="440" y="314" font-size="10.2" font-weight="700" fill="${p.text}">• ${esc(hi ? 'अधिकतम बल: जब I व B परस्पर लंबवत (90°) हों (Tech Shift 22)' : 'Peak Force when I ⊥ B (90°); ZERO when parallel (0°)!')}</text>
      <text x="440" y="334" font-size="10.2" font-weight="800" fill="${p.rose}">• ${esc(hi ? 'उदा. 12.2: इलेक्ट्रॉन (ऋणावेश) की गति के विपरीत धारा I लें → कागज़ भीतर!' : 'Ex 12.2 Trap: Electron (-) → Current opposite e⁻ motion → INTO page!')}</text>
      <text x="440" y="354" font-size="10.2" font-weight="700" fill="${p.emerald}">• ${esc(hi ? 'पृ.225 Q3: पश्चिम जाते α-कण (+) उत्तर विक्षेप → क्षेत्र B उपरिमुखी (d)!' : 'p.225 Q3: Alpha (+) West deflected North → B = Upwards (d)!')}</text>
      <text x="440" y="374" font-size="10" font-weight="700" fill="${p.muted}">• ${esc(hi ? 'पृ.225 Q1 प्रोटॉन स्वतंत्र गति: वेग व संवेग बदले (चाल/द्रव्यमान अचर!)' : 'Proton moving freely in B: Velocity & Momentum change (Speed const!)')}</text>
    </svg>`;
  }

  if (key === 'c10-ch12-domestic-fuse-safety-diagram') {
    const title = hi ? 'सामान्य घरेलू विद्युत परिपथ (220 V, 50 Hz — चित्र 12.15), फ्यूज, लघुपथन व भूसंपर्कण' : 'Domestic Electric Circuit (220 V, 50 Hz — Fig 12.15), Earth Wire, Fuse & Overloading';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Three Wires Schematic -->
      <rect x="20" y="56" width="780" height="174" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
      <text x="36" y="76" font-size="11.5" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 12.15 क्रम: मुख्य तार → बोर्ड फ्यूज → विद्युतमापी (Meter) → मुख्य स्विच व वितरण बक्स → समानांतर (Parallel) सॉकेट' : 'Fig 12.15 Sequence: Mains → Board Fuse → Electricity Meter → Main Switch & Distribution Box → Parallel Branch Sockets')}</text>
      <!-- Green Earth Wire -->
      <line x1="36" y1="104" x2="784" y2="104" stroke="${p.emerald}" stroke-width="3.5" stroke-dasharray="8 4"/>
      <text x="40" y="97" font-size="10.5" font-weight="900" fill="${p.emerald}">${esc(hi ? 'भूसंपर्क तार (हरा आवरण) → भूमि में गड़ी धातु प्लेट (धातु आवरण से शॉक सुरक्षा)' : 'GREEN EARTH WIRE → Buried Metal Plate in Ground (Low-R shock protection)')}</text>
      <!-- Red Live Wire -->
      <line x1="36" y1="142" x2="784" y2="142" stroke="${p.rose}" stroke-width="3.5"/>
      <rect x="174" y="131" width="66" height="22" rx="5" fill="${p.amberBg}" stroke="${p.amber}"/>
      <text x="207" y="146" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.text}">${esc(hi ? 'मुख्य फ्यूज' : 'Mains Fuse')}</text>
      <rect x="276" y="129" width="74" height="26" rx="5" fill="${p.card}" stroke="${p.cyan}"/>
      <text x="313" y="146" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.cyan}">${esc(hi ? 'विद्युतमापी' : 'kWh Meter')}</text>
      <text x="40" y="134" font-size="10.5" font-weight="900" fill="${p.rose}">${esc(hi ? 'विद्युन्मय तार (लाल, +ve)' : 'RED LIVE WIRE (+ve)')}</text>
      <!-- Black Neutral Wire -->
      <line x1="36" y1="184" x2="784" y2="184" stroke="${p.muted}" stroke-width="3.5"/>
      <text x="40" y="202" font-size="10.5" font-weight="900" fill="${p.text}">${esc(hi ? 'उदासीन तार (काला, −ve)  •  विभवांतर = 220 V AC  •  भारत आवृत्ति = 50 Hz' : 'BLACK NEUTRAL WIRE (−ve)  •  Potential Difference = 220 V AC  •  50 Hz Frequency')}</text>
      <!-- Parallel Socket boxes -->
      ${[430, 560, 690].map((sx, idx) => `
        <line x1="${sx}" y1="142" x2="${sx}" y2="184" stroke="${p.border}" stroke-width="1.5"/>
        <rect x="${sx - 38}" y="148" width="76" height="30" rx="6" fill="${p.card}" stroke="${idx === 2 ? p.amber : p.emerald}"/>
        <text x="${sx}" y="167" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.text}">${idx === 2 ? (hi ? '15 A गीज़र/कूलर' : '15 A Power') : (hi ? '5 A बल्ब/पंखा' : '5 A Light/Fan')}</text>
      `).join('')}

      <!-- Bottom Comparison Cards -->
      <rect x="20" y="242" width="380" height="162" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
      <text x="34" y="264" font-size="11.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'दो पृथक् परिपथ + पार्श्वक्रम (Parallel) क्यों?' : 'Why Two Ratings (15 A vs 5 A) & Parallel Wiring?')}</text>
      <text x="34" y="286" font-size="10.5" font-weight="700" fill="${p.text}">• ${esc(hi ? '15 A अनुमतांक: उच्च शक्ति साधित्र — गीज़र, एयर कूलर' : '15 A Rating: Heavy appliances — Geyser, Air Cooler, Oven')}</text>
      <text x="34" y="306" font-size="10.5" font-weight="700" fill="${p.text}">• ${esc(hi ? '5 A अनुमतांक: कम धारा साधित्र — बल्ब, पंखा, टीवी' : '5 A Rating: Low power — Bulbs, Fans, Radios')}</text>
      <text x="34" y="328" font-size="10.5" font-weight="800" fill="${p.emerald}">• ${esc(hi ? 'पार्श्वक्रम लाभ: हर साधित्र को समान 220 V वोल्टता व अलग स्विच' : 'Parallel: Equal 220 V to EVERY appliance + independent ON/OFF')}</text>
      <text x="34" y="348" font-size="10.5" font-weight="800" fill="${p.cyan}">• ${esc(hi ? 'भूसंपर्कण: धातु आवरण (इस्त्री, टोस्टर, फ्रिज) को अल्प-प्रतिरोध भूमि से जोड़े' : 'Earthing: Connects metallic bodies (Iron, Toaster, Fridge) to ground')}</text>
      <text x="34" y="368" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? '→ धारा क्षरण पर विभव पृथ्वी बराबर = गंभीर आघात से बचाव!' : '→ Leakage stays at Earth potential preventing severe electric shock!')}</text>

      <rect x="414" y="242" width="386" height="162" rx="12" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="428" y="264" font-size="11.5" font-weight="800" fill="${p.rose}">${esc(hi ? 'फ्यूज (जूल तापन) vs लघुपथन बनाम अतिभारण' : 'Fuse (Joule Heat) vs Short Circuit vs Overloading')}</text>
      <text x="428" y="286" font-size="10.5" font-weight="800" fill="${p.text}">1. ${esc(hi ? 'लघुपथन (Short Circuit): लाल विद्युन्मय + काला उदासीन सीधा संपर्क' : 'Short Circuit: Live + Neutral directly touch (insulation damaged)')}</text>
      <text x="436" y="304" font-size="10.2" font-weight="800" fill="${p.rose}">${esc(hi ? '→ प्रतिरोध लगभग शून्य → धारा अकस्मात बहुत अधिक बढ़ती! (अभ्यास Q2c)' : '→ Zero/very low resistance → Current surges suddenly! (Ex Q2c)')}</text>
      <text x="428" y="326" font-size="10.5" font-weight="700" fill="${p.text}">2. ${esc(hi ? 'अतिभारण (Overloading): वोल्टता अचानक उछाल OR एक सॉकेट पर कई लोड' : 'Overloading: Accidental supply voltage hike OR many loads on 1 socket')}</text>
      <text x="428" y="348" font-size="10.5" font-weight="800" fill="${p.emerald}">3. ${esc(hi ? 'विद्युत फ्यूज (सुरक्षा युक्ति): उच्च धारा पर जूल तापन से पिघल परिपथ तोड़े!' : 'Electric Fuse: Joule heating (I²Rt) melts low-MP wire breaking fault!')}</text>
      <text x="428" y="368" font-size="10.2" font-weight="800" fill="${p.amber}">${esc(hi ? '⚡ पृ.227 Q2 आंकिक: 2 kW तंदूर @ 220V → I = 9.09 A (> 5 A) → ओवरलोड!' : '⚡ p.227 Q2 Calc: 2 kW Oven @ 220 V → I = 9.09 A (> 5 A fuse melts!)')}</text>
    </svg>`;
  }

  return '';
}
