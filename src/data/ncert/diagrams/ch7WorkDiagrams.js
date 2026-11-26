/**
 * Print-Ready Light & Dark Mode Pure Vector Diagrams for Class 9 Physics Ch 7
 * (Work, Energy & Simple Machines — New 2026-27 NCERT Syllabus).
 * Shared cleanly by NcertProReader (dark) and ncertPdfGenerator (light).
 */

function pal(theme) {
  if (theme === 'light') {
    return {
      bg: '#f8fafc',
      card: '#ffffff',
      cardAlt: '#f1f5f9',
      ink: '#0f172a',
      muted: '#475569',
      grid: '#cbd5e1',
      teal: '#0d9488',
      tealSoft: '#ccfbf1',
      cyan: '#0284c7',
      cyanSoft: '#e0f2fe',
      amber: '#b45309',
      amberSoft: '#fef3c7',
      emerald: '#047857',
      emeraldSoft: '#d1fae5',
      violet: '#6d28d9',
      violetSoft: '#ede9fe',
      rose: '#be123c',
      roseSoft: '#ffe4e6',
    };
  }
  return {
    bg: '#080e1d',
    card: '#0f172a',
    cardAlt: '#162036',
    ink: '#f1f5f9',
    muted: '#94a3b8',
    grid: '#1e293b',
    teal: '#2dd4bf',
    tealSoft: '#134e4a',
    cyan: '#38bdf8',
    cyanSoft: '#0c4a6e',
    amber: '#fbbf24',
    amberSoft: '#451a03',
    emerald: '#34d399',
    emeraldSoft: '#064e3b',
    violet: '#a78bfa',
    violetSoft: '#3b0764',
    rose: '#fb7185',
    roseSoft: '#4c0519',
  };
}

export function renderCh7WorkDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = pal(theme);
  const hi = lang !== 'en';
  const font = 'font-family="Noto Sans Devanagari, Inter, sans-serif"';

  switch (key) {
    case 'ch7-blueprint-mindmap':
      return `<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="820" height="340" rx="16" fill="${c.bg}" stroke="${c.grid}" stroke-width="2"/>
  <rect x="255" y="16" width="310" height="50" rx="12" fill="${c.amberSoft}" stroke="${c.amber}" stroke-width="2.2"/>
  <text x="410" y="38" text-anchor="middle" fill="${c.ink}" font-size="13.5" font-weight="800">${hi ? 'अध्याय 7: कार्य, ऊर्जा व सरल मशीनें' : 'Ch 7: Work, Energy & Simple Machines'}</text>
  <text x="410" y="56" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">W = F·s • KE = ½mv² • PE = mgh • Power • MA &amp; Levers</text>
  <path d="M410 66 L410 88 M110 88 L710 88 M110 88 L110 108 M310 88 L310 108 M510 88 L510 108 M710 88 L710 108" stroke="${c.amber}" stroke-width="2" fill="none"/>

  <rect x="20" y="108" width="180" height="212" rx="12" fill="${c.card}" stroke="${c.cyan}" stroke-width="1.7"/>
  <rect x="20" y="108" width="180" height="32" rx="10" fill="${c.cyanSoft}"/>
  <text x="110" y="129" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '1. कार्य (W) एवं चिह्न' : '1. Scientific Work'}</text>
  <text x="32" y="160" fill="${c.ink}" font-size="11" font-weight="800">W = F × s (SI: Joule J)</text>
  <text x="32" y="182" fill="${c.emerald}" font-size="10.5" font-weight="700">+W: ${hi ? 'बल की दिशा में गति' : 'F & s same direction'}</text>
  <text x="32" y="204" fill="${c.rose}" font-size="10.5" font-weight="700">−W: ${hi ? 'विपरीत (ब्रेक, घर्षण)' : 'F opposite s (Brakes)'}</text>
  <text x="32" y="226" fill="${c.amber}" font-size="10.5" font-weight="700">0 W: ${hi ? 's=0 (दीवार) या 90° लंबवत!' : 's=0 (wall) or 90° perp!'}</text>
  <text x="32" y="250" fill="${c.muted}" font-size="10">${hi ? '• F-s ग्राफ क्षेत्रफल = कार्य W' : '• Area under F-s = Work W'}</text>
  <text x="32" y="272" fill="${c.muted}" font-size="10">${hi ? '• कार्य-ऊर्जा प्रमेय: W = ΔK' : '• Work-Energy Thm: W = ΔE'}</text>
  <text x="32" y="294" fill="${c.cyan}" font-size="10" font-weight="700">1 J = 1 N·m = 1 kg·m²/s²</text>

  <rect x="220" y="108" width="180" height="212" rx="12" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.7"/>
  <rect x="220" y="108" width="180" height="32" rx="10" fill="${c.emeraldSoft}"/>
  <text x="310" y="129" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '2. ऊर्जा व संरक्षण' : '2. KE, PE & Conservation'}</text>
  <text x="232" y="160" fill="${c.ink}" font-size="11.5" font-weight="800">KE = ½ m v² (v 2× → 4×)</text>
  <text x="232" y="184" fill="${c.ink}" font-size="11.5" font-weight="800">PE = m g h (height & elastic)</text>
  <text x="232" y="208" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'यांत्रिक ऊर्जा = KE + PE = अचर' : 'Total ME = KE + PE = const'}</text>
  <text x="232" y="232" fill="${c.muted}" font-size="10">${hi ? '• लोलक व रोलर कोस्टर ऊँचाई' : '• Slide top PE -> bottom ½mv²'}</text>
  <text x="232" y="254" fill="${c.muted}" font-size="10">${hi ? '• घराट पनचक्की & टिहरी बाँध' : '• Gharat mill & Hydro dam'}</text>
  <text x="232" y="276" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? '• सदा चलने वाली मशीन असंभव!' : '• Perpetual machine: NO!'}</text>
  <text x="232" y="298" fill="${c.violet}" font-size="10">${hi ? '• ब्रह्माण्ड विस्तार: अदीप्त ऊर्जा' : '• Dark Energy expands sky'}</text>

  <rect x="420" y="108" width="180" height="212" rx="12" fill="${c.card}" stroke="${c.amber}" stroke-width="1.7"/>
  <rect x="420" y="108" width="180" height="32" rx="10" fill="${c.amberSoft}"/>
  <text x="510" y="129" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '3. शक्ति एवं kWh मात्रक' : '3. Power & Commercial Unit'}</text>
  <text x="510" y="162" text-anchor="middle" fill="${c.ink}" font-size="12" font-weight="800">Power P = W / t</text>
  <text x="432" y="186" fill="${c.cyan}" font-size="10.5" font-weight="700">1 Watt (W) = 1 J/s (James Watt)</text>
  <text x="432" y="208" fill="${c.emerald}" font-size="10.5" font-weight="700">1 Horsepower = 746 W</text>
  <text x="432" y="230" fill="${c.amber}" font-size="10.5" font-weight="800">1 kW = 1000 W = 1000 J/s</text>
  <rect x="432" y="246" width="156" height="58" rx="8" fill="${c.roseSoft}" stroke="${c.rose}"/>
  <text x="510" y="266" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="800">1 Unit = 1 kWh</text>
  <text x="510" y="288" text-anchor="middle" fill="${c.ink}" font-size="12" font-weight="900">= 3.6 × 10⁶ Joules!</text>

  <rect x="620" y="108" width="180" height="212" rx="12" fill="${c.card}" stroke="${c.violet}" stroke-width="1.7"/>
  <rect x="620" y="108" width="180" height="32" rx="10" fill="${c.violetSoft}"/>
  <text x="710" y="129" text-anchor="middle" fill="${c.violet}" font-size="12" font-weight="800">${hi ? '4. सरल मशीनें व उत्तोलक' : '4. Pulley, Ramp & Levers'}</text>
  <text x="632" y="160" fill="${c.ink}" font-size="10.8" font-weight="800">${hi ? 'MA = भार / आयास' : 'MA = Load / Effort'}</text>
  <text x="632" y="182" fill="${c.cyan}" font-size="10">${hi ? '• स्थिर घिरनी MA=1 (दिशा बदले)' : '• Fixed Pulley: MA = 1'}</text>
  <text x="632" y="202" fill="${c.emerald}" font-size="10">${hi ? '• चल घिरनी MA=2 (2× बल!)' : '• Movable Pulley: MA = 2'}</text>
  <text x="632" y="222" fill="${c.amber}" font-size="10">${hi ? '• आनत तल: MA = L / h (> 1)' : '• Ramp Inclined: MA = L/h'}</text>
  <line x1="632" y1="234" x2="788" y2="234" stroke="${c.grid}" stroke-dasharray="3 3"/>
  <text x="632" y="254" fill="${c.ink}" font-size="10" font-weight="800">F1·d1 = F2·d2 (उत्तोलक):</text>
  <text x="632" y="274" fill="${c.muted}" font-size="10">1: ${hi ? 'आलंब मध्य (कैंची/सी-सॉ)' : 'C1: Fulcrum mid (Scissors)'}</text>
  <text x="632" y="292" fill="${c.muted}" font-size="10">2: ${hi ? 'भार मध्य (सरौता/ठेला)' : 'C2: Load mid (Wheelbarrow)'}</text>
  <text x="632" y="310" fill="${c.muted}" font-size="10">3: ${hi ? 'आयास मध्य (चिमटा/झाड़ू)' : 'C3: Effort mid (Tongs)'}</text>
</svg>`;

    case 'work-signs-f-s-area':
      return `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="280" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'वैज्ञानिक कार्य (W = F × s): + धनात्मक, − ऋणात्मक, 0 शून्य तथा F-s ग्राफ क्षेत्रफल' : 'Scientific Work Signs (+ Positive, − Negative, Zero 90°/Rest) & Force-Displacement Area'}</text>

  <!-- Positive -->
  <rect x="20" y="44" width="180" height="218" rx="10" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.6"/>
  <text x="110" y="66" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '+ धनात्मक कार्य (θ = 0°)' : '+ Positive Work'}</text>
  <rect x="55" y="102" width="54" height="36" rx="5" fill="${c.emeraldSoft}" stroke="${c.emerald}"/>
  <line x1="115" y1="116" x2="175" y2="116" stroke="${c.emerald}" stroke-width="2.6"/><polygon points="175,111 185,116 175,121" fill="${c.emerald}"/>
  <line x1="115" y1="130" x2="175" y2="130" stroke="${c.cyan}" stroke-width="2.2"/><polygon points="175,125 185,130 175,135" fill="${c.cyan}"/>
  <text x="110" y="162" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? 'बल F व विस्थापन s एक दिशा' : 'Force & Disp SAME direction'}</text>
  <text x="110" y="186" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• डंबल ऊपर उठाना' : '• Lifting dumbbell UP'}</text>
  <text x="110" y="204" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• पहिएदार कुर्सी धकेलना' : '• Pushing cart forward'}</text>
  <text x="110" y="238" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">KE Increases (+ΔK)</text>

  <!-- Negative -->
  <rect x="214" y="44" width="180" height="218" rx="10" fill="${c.card}" stroke="${c.rose}" stroke-width="1.6"/>
  <text x="304" y="66" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? '− ऋणात्मक कार्य (180°)' : '− Negative Work'}</text>
  <rect x="275" y="102" width="54" height="36" rx="5" fill="${c.roseSoft}" stroke="${c.rose}"/>
  <line x1="270" y1="116" x2="225" y2="116" stroke="${c.rose}" stroke-width="2.6"/><polygon points="225,111 215,116 225,121" fill="${c.rose}"/>
  <line x1="335" y1="130" x2="375" y2="130" stroke="${c.cyan}" stroke-width="2.2"/><polygon points="375,125 385,130 375,135" fill="${c.cyan}"/>
  <text x="304" y="162" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? 'बल F विस्थापन s के विपरीत' : 'Force OPPOSITE Displacement'}</text>
  <text x="304" y="186" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• गोलकीपर द्वारा गेंद रोकना (−30J)' : '• Goalkeeper stopping ball'}</text>
  <text x="304" y="204" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• ब्रेक व घर्षण बल का कार्य' : '• Brakes & Gravity lifting'}</text>
  <text x="304" y="238" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="800">KE Decreases (−ΔK)</text>

  <!-- Zero Work -->
  <rect x="408" y="44" width="180" height="218" rx="10" fill="${c.card}" stroke="${c.amber}" stroke-width="1.6"/>
  <text x="498" y="66" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? 'शून्य कार्य (W = 0!)' : 'ZERO Work Cases (W = 0)'}</text>
  <line x1="460" y1="140" x2="545" y2="140" stroke="${c.cyan}" stroke-width="2.4"/><polygon points="545,135 555,140 545,145" fill="${c.cyan}"/>
  <line x1="460" y1="140" x2="460" y2="90" stroke="${c.amber}" stroke-width="2.6"/><polygon points="455,90 460,80 465,90" fill="${c.amber}"/>
  <rect x="460" y="128" width="12" height="12" fill="none" stroke="${c.ink}"/>
  <text x="488" y="114" fill="${c.amber}" font-size="11" font-weight="800">90° Perp!</text>
  <text x="498" y="174" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? '1. s = 0 (दीवार धकेलना)' : '1. No displacement (s=0)'}</text>
  <text x="498" y="194" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? '2. बोझ लेकर क्षैतिज चलना' : '2. Porter walking horiz (90°)'}</text>
  <text x="498" y="214" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '3. भारोत्तोलक स्थिर पकड़े रहे' : '3. Satellite in circle (90°)'}</text>
  <text x="498" y="242" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">W = 0 (Thirst/tiredness ≠ W!)</text>

  <!-- F-s Graph Area (Fig 7.4) -->
  <rect x="602" y="44" width="178" height="218" rx="10" fill="${c.card}" stroke="${c.cyan}" stroke-width="1.6"/>
  <text x="691" y="66" text-anchor="middle" fill="${c.cyan}" font-size="11.5" font-weight="800">${hi ? 'F–s ग्राफ क्षेत्रफल = W' : 'F–s Graph Area = Work'}</text>
  <rect x="635" y="102" width="110" height="82" fill="${c.cyanSoft}" opacity="0.7"/>
  <line x1="635" y1="184" x2="765" y2="184" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="635" y1="84" x2="635" y2="184" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="635" y1="102" x2="745" y2="102" stroke="${c.cyan}" stroke-width="3"/>
  <text x="690" y="148" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">Area = 10 N × 1 m</text>
  <text x="690" y="164" text-anchor="middle" fill="${c.cyan}" font-size="11.5" font-weight="900">= 10 J</text>
  <text x="691" y="218" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'परिवर्ती बल पर भी क्षेत्रफल' : 'Holds for varying force too'}</text>
  <text x="691" y="236" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? '(अभ्यास प्रश्न 11 — समलंब!)' : '(NCERT Ex Q11 Area!)'}</text>
</svg>`;

    case 'mechanical-energy-conservation':
      return `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="280" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'यांत्रिक ऊर्जा संरक्षण (KE + PE = mgh नियत): मुक्त पतन, सरल लोलक व फिसलपट्टी' : 'Conservation of Mechanical Energy (KE + PE = mgh Constant): Free Fall, Pendulum & Slide'}</text>

  <!-- Free fall energy bars -->
  <rect x="20" y="44" width="250" height="218" rx="10" fill="${c.card}" stroke="${c.amber}"/>
  <text x="145" y="66" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '1. मुक्त पतन (A → B → C भूमि)' : '1. Free Fall Energy Exchange'}</text>
  <text x="38" y="96" fill="${c.ink}" font-size="10.5" font-weight="800">Point A (Top, v=0): PE = mgh, KE = 0</text>
  <rect x="38" y="102" width="210" height="14" rx="4" fill="${c.amber}"/><text x="143" y="113" text-anchor="middle" fill="#0f172a" font-size="9.5" font-weight="900">100% PE (Total = mgh)</text>

  <text x="38" y="142" fill="${c.ink}" font-size="10.5" font-weight="800">Point B (Mid h/2): PE = ½mgh, KE = ½mgh</text>
  <rect x="38" y="148" width="105" height="14" rx="4" fill="${c.amber}"/><rect x="143" y="148" width="105" height="14" rx="4" fill="${c.cyan}"/>
  <text x="90" y="159" text-anchor="middle" fill="#0f172a" font-size="9" font-weight="900">50% PE</text>
  <text x="195" y="159" text-anchor="middle" fill="#0f172a" font-size="9" font-weight="900">50% KE</text>

  <text x="38" y="188" fill="${c.ink}" font-size="10.5" font-weight="800">Point C (Just hit): PE = 0, KE = mgh!</text>
  <rect x="38" y="194" width="210" height="14" rx="4" fill="${c.cyan}"/><text x="143" y="205" text-anchor="middle" fill="#0f172a" font-size="9.5" font-weight="900">100% KE = ½mv² (v = √(2gh))</text>

  <text x="145" y="242" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="800">${hi ? 'उछाली गेंद शीर्ष पर: KE = 0, PE = Max!' : 'Ball at peak height: KE = 0, PE = Max!'}</text>

  <!-- Simple Pendulum (Activity 7.2) -->
  <rect x="284" y="44" width="240" height="218" rx="10" fill="${c.card}" stroke="${c.cyan}"/>
  <text x="404" y="66" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '2. सरल लोलक (क्रियाकलाप 7.2)' : '2. Simple Pendulum (Act 7.2)'}</text>
  <line x1="330" y1="84" x2="478" y2="84" stroke="${c.muted}" stroke-width="3"/>
  <line x1="404" y1="84" x2="340" y2="164" stroke="${c.amber}" stroke-dasharray="4 3" stroke-width="2"/>
  <line x1="404" y1="84" x2="404" y2="188" stroke="${c.emerald}" stroke-width="2.2"/>
  <line x1="404" y1="84" x2="468" y2="164" stroke="${c.amber}" stroke-dasharray="4 3" stroke-width="2"/>
  <circle cx="340" cy="168" r="11" fill="${c.amber}"/><text x="340" y="190" text-anchor="middle" fill="${c.amber}" font-size="9.5" font-weight="800">R (KE=0)</text>
  <circle cx="404" cy="192" r="11" fill="${c.emerald}"/><text x="404" y="216" text-anchor="middle" fill="${c.emerald}" font-size="9.5" font-weight="800">Q (KE Max)</text>
  <circle cx="468" cy="168" r="11" fill="${c.amber}"/><text x="468" y="190" text-anchor="middle" fill="${c.amber}" font-size="9.5" font-weight="800">P (KE=0)</text>
  <text x="404" y="242" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'हवा घर्षण से धीरे-धीरे दोलन रुकते हैं' : 'Air drag slowly dissipates energy to heat'}</text>

  <!-- Slide Example 7.8 + Moon 6h -->
  <rect x="538" y="44" width="242" height="218" rx="10" fill="${c.card}" stroke="${c.emerald}"/>
  <text x="659" y="66" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '3. फिसलपट्टी व चंद्रमा सूत्र' : '3. Slide Speed & Moon PE Test'}</text>
  <path d="M565 100 Q595 162 675 168" stroke="${c.cyan}" stroke-width="4" fill="none"/>
  <line x1="565" y1="100" x2="565" y2="168" stroke="${c.amber}" stroke-dasharray="3 2"/>
  <text x="553" y="138" fill="${c.amber}" font-size="11" font-weight="800">h</text>
  <circle cx="565" cy="95" r="7" fill="${c.amber}"/>
  <circle cx="675" cy="164" r="7" fill="${c.emerald}"/>
  <text x="665" y="114" fill="${c.ink}" font-size="11.5" font-weight="800">½mv² = mgh →</text>
  <text x="665" y="134" fill="${c.cyan}" font-size="13" font-weight="900">v = √(2gh)</text>
  <text x="659" y="196" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? '• वेग v आकार या द्रव्यमान पर निर्भर नहीं!' : '• Independent of slope shape OR mass!'}</text>
  <text x="659" y="218" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="800">${hi ? '• चंद्रमा (g/6): ऊँचाई 6× (8m → 48m!)' : '• Moon Ex Q12 (g/6): 6× height (48 m!)'}</text>
  <text x="659" y="242" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• पनचक्की घराट & बांध: PE → KE → विद्युत' : '• Gharat Mill & Dams: PE → KE → Work'}</text>
</svg>`;

    case 'simple-machines-pulley-ramp':
      return `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="280" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'सरल मशीनें: यांत्रिक लाभ (MA), स्थिर बनाम चल घिरनी एवं आनत तल (चित्र 7.23–7.28)' : 'Simple Machines: Mechanical Advantage (MA), Fixed vs Movable Pulleys & Inclined Plane'}</text>

  <!-- Fixed Pulley -->
  <rect x="20" y="44" width="235" height="218" rx="10" fill="${c.card}" stroke="${c.cyan}"/>
  <text x="137" y="66" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '1. स्थिर घिरनी (Fixed Pulley)' : '1. Single Fixed Pulley'}</text>
  <line x1="90" y1="84" x2="185" y2="84" stroke="${c.muted}" stroke-width="3"/>
  <line x1="137" y1="84" x2="137" y2="108" stroke="${c.muted}" stroke-width="2"/>
  <circle cx="137" cy="126" r="22" fill="${c.cardAlt}" stroke="${c.cyan}" stroke-width="2.5"/>
  <line x1="115" y1="126" x2="115" y2="188" stroke="${c.amber}" stroke-width="2.2"/>
  <line x1="159" y1="126" x2="159" y2="188" stroke="${c.emerald}" stroke-width="2.2"/>
  <rect x="98" y="188" width="34" height="24" rx="4" fill="${c.amberSoft}" stroke="${c.amber}"/><text x="115" y="204" text-anchor="middle" fill="${c.amber}" font-size="10" font-weight="800">Load ↑</text>
  <text x="163" y="186" fill="${c.emerald}" font-size="10" font-weight="800">Effort ↓</text>
  <text x="137" y="234" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">MA = Load / Effort = 1</text>
  <text x="137" y="252" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'केवल बल की दिशा (नीचे की ओर) बदलती है!' : 'Reverses Force Direction downward!'}</text>

  <!-- Movable Pulley System -->
  <rect x="270" y="44" width="250" height="218" rx="10" fill="${c.card}" stroke="${c.emerald}"/>
  <text x="395" y="66" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '2. चल घिरनी (Movable Pulley)' : '2. Movable Pulley (Effort Halved!)'}</text>
  <circle cx="370" cy="110" r="16" fill="${c.cardAlt}" stroke="${c.muted}" stroke-width="2"/>
  <circle cx="400" cy="166" r="18" fill="${c.cardAlt}" stroke="${c.emerald}" stroke-width="2.5"/>
  <line x1="382" y1="110" x2="382" y2="166" stroke="${c.cyan}" stroke-width="2"/>
  <line x1="418" y1="166" x2="418" y2="95" stroke="${c.cyan}" stroke-width="2"/>
  <rect x="380" y="192" width="40" height="22" rx="4" fill="${c.emeraldSoft}" stroke="${c.emerald}"/><text x="400" y="207" text-anchor="middle" fill="${c.emerald}" font-size="10" font-weight="800">200 N</text>
  <text x="454" y="114" fill="${c.amber}" font-size="10.5" font-weight="800">Effort = 100 N</text>
  <text x="395" y="234" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">MA = 2 (Effort halved, pull 2× rope!)</text>
  <text x="395" y="252" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '2 रस्सियाँ भार बांटती हैं; क्रेन बहु-घिरनी ब्लॉक' : 'Same total Work = Force × Distance!'}</text>

  <!-- Inclined Plane -->
  <rect x="535" y="44" width="245" height="218" rx="10" fill="${c.card}" stroke="${c.amber}"/>
  <text x="657" y="66" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '3. आनत तल (Inclined Plane)' : '3. Inclined Plane (Ramp)'}</text>
  <polygon points="565,190 735,190 735,115" fill="${c.amberSoft}" opacity="0.65" stroke="${c.amber}" stroke-width="2.2"/>
  <text x="745" y="156" fill="${c.ink}" font-size="11" font-weight="800">h=30</text>
  <text x="650" y="206" text-anchor="middle" fill="${c.muted}" font-size="10.5">40 cm (Base)</text>
  <text x="635" y="140" fill="${c.amber}" font-size="11" font-weight="800" transform="rotate(-24 635 140)">Length L = 50 cm</text>
  <text x="657" y="232" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="900">MA = Load / Effort = L / h &gt; 1</text>
  <text x="657" y="252" text-anchor="middle" fill="${c.cyan}" font-size="10" font-weight="700">${hi ? 'Ex 7.12: 50/30 = 1.67 (कम कोण → अधिक MA!)' : 'Longer gentler slope → higher MA (same mgh!)'}</text>
</svg>`;

    case 'three-lever-classes':
      return `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="280" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'उत्तोलक सिद्धांत (F₁ × d₁ = F₂ × d₂) एवं तीनों श्रेणियाँ — FLE 1-2-3 सूत्र (तालिका 7.2)' : 'Principle of Levers (Effort × Effort Arm = Load × Load Arm) & 3 Classes (FLE 1-2-3)'}</text>

  <!-- Class 1 -->
  <rect x="20" y="46" width="242" height="214" rx="10" fill="${c.card}" stroke="${c.cyan}" stroke-width="1.6"/>
  <rect x="20" y="46" width="242" height="32" rx="8" fill="${c.cyanSoft}"/>
  <text x="141" y="67" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? 'प्रथम श्रेणी: आलंब (F) बीच में!' : 'Class 1: FULCRUM in Middle'}</text>
  <line x1="48" y1="126" x2="234" y2="126" stroke="${c.ink}" stroke-width="4"/>
  <polygon points="141,128 128,150 154,150" fill="${c.amber}"/>
  <text x="141" y="164" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="800">Fulcrum (F)</text>
  <text x="58" y="114" fill="${c.rose}" font-size="10.5" font-weight="800">Load ↓</text>
  <text x="205" y="114" fill="${c.emerald}" font-size="10.5" font-weight="800">Effort ↓</text>
  <text x="141" y="192" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">MA can be &gt;1, =1, or &lt;1</text>
  <text x="141" y="216" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'उदा: कैंची, पिलास, सी-सॉ, दंड-तुला,' : 'Ex: Scissors, Pliers, See-saw,'}</text>
  <text x="141" y="234" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'सब्बल, संडासी, डिब्बा चम्मच!' : 'Crowbar, Beam balance, Spoon lid'}</text>

  <!-- Class 2 -->
  <rect x="279" y="46" width="242" height="214" rx="10" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.6"/>
  <rect x="279" y="46" width="242" height="32" rx="8" fill="${c.emeraldSoft}"/>
  <text x="400" y="67" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? 'द्वितीय श्रेणी: भार (L) बीच में!' : 'Class 2: LOAD in Middle'}</text>
  <line x1="307" y1="126" x2="493" y2="126" stroke="${c.ink}" stroke-width="4"/>
  <polygon points="315,128 302,150 328,150" fill="${c.amber}"/>
  <text x="315" y="164" text-anchor="middle" fill="${c.amber}" font-size="10" font-weight="800">F</text>
  <rect x="385" y="102" width="28" height="22" rx="4" fill="${c.roseSoft}" stroke="${c.rose}"/><text x="399" y="117" text-anchor="middle" fill="${c.rose}" font-size="10" font-weight="800">L ↓</text>
  <text x="480" y="114" fill="${c.emerald}" font-size="10.5" font-weight="800">Effort ↑</text>
  <text x="400" y="192" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">MA ALWAYS &gt; 1 (Force Multiplier)</text>
  <text x="400" y="216" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'उदा: नींबू निचोड़नी / सरौता,' : 'Ex: Lemon squeezer / Nutcracker,'}</text>
  <text x="400" y="234" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'एकपहिया हथठेला, बोतल ओपनर!' : 'Wheelbarrow, Bottle opener'}</text>

  <!-- Class 3 -->
  <rect x="538" y="46" width="242" height="214" rx="10" fill="${c.card}" stroke="${c.violet}" stroke-width="1.6"/>
  <rect x="538" y="46" width="242" height="32" rx="8" fill="${c.violetSoft}"/>
  <text x="659" y="67" text-anchor="middle" fill="${c.violet}" font-size="12" font-weight="800">${hi ? 'तृतीय श्रेणी: आयास (E) बीच में!' : 'Class 3: EFFORT in Middle'}</text>
  <line x1="566" y1="126" x2="752" y2="126" stroke="${c.ink}" stroke-width="4"/>
  <polygon points="574,128 561,150 587,150" fill="${c.amber}"/>
  <text x="574" y="164" text-anchor="middle" fill="${c.amber}" font-size="10" font-weight="800">F</text>
  <text x="658" y="114" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="800">Effort ↑</text>
  <text x="742" y="114" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="800">Load ↓</text>
  <text x="659" y="192" text-anchor="middle" fill="${c.violet}" font-size="11" font-weight="800">MA ALWAYS &lt; 1 (Distance/Speed Gain!)</text>
  <text x="659" y="216" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'उदा: चिमटा / चिमटी, झाड़ू,' : 'Ex: Tongs / Tweezers, Broom,'}</text>
  <text x="659" y="234" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'मनुष्य की बाँह, चप्पू, हथौड़ी!' : 'Human forearm, Oar, Hammer'}</text>
</svg>`;

    default:
      return '';
  }
}
