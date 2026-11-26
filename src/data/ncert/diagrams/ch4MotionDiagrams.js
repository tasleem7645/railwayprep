/**
 * Print-Ready Light & Dark Mode Pure Vector Diagrams for Class 9 Physics Ch 4 (Motion)
 * Shared by NcertProReader (dark) and ncertPdfGenerator (light).
 * Zero 3rd-party branding. Clean bilingual labels & geometric clarity.
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

export function renderCh4MotionDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = pal(theme);
  const hi = lang !== 'en';
  const font = 'font-family="Noto Sans Devanagari, Inter, sans-serif"';

  switch (key) {
    case 'ch4-blueprint-mindmap':
      return `<svg viewBox="0 0 820 350" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="820" height="350" rx="16" fill="${c.bg}" stroke="${c.grid}" stroke-width="2"/>
  <rect x="275" y="18" width="270" height="52" rx="12" fill="${c.cyanSoft}" stroke="${c.cyan}" stroke-width="2.2"/>
  <text x="410" y="40" text-anchor="middle" fill="${c.ink}" font-size="13.5" font-weight="800">${hi ? 'अध्याय 4: गति का संपूर्ण मानचित्र' : 'Ch 4: Complete Motion Mindmap'}</text>
  <text x="410" y="58" text-anchor="middle" fill="${c.cyan}" font-size="11" font-weight="700">Scalar • Vector • Graphs • Equations • Circular</text>

  <path d="M410 70 L410 92 M110 92 L710 92 M110 92 L110 112 M310 92 L310 112 M510 92 L510 112 M710 92 L710 112" stroke="${c.teal}" stroke-width="2" fill="none"/>

  <rect x="20" y="112" width="180" height="218" rx="12" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.8"/>
  <rect x="20" y="112" width="180" height="34" rx="10" fill="${c.emeraldSoft}"/>
  <text x="110" y="134" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '1. आधारभूत राशियाँ' : '1. Basic Quantities'}</text>
  <text x="32" y="166" fill="${c.ink}" font-size="11" font-weight="700">${hi ? '• संदर्भ बिंदु (O): स्थिति मापन' : '• Reference Point O'}</text>
  <text x="32" y="188" fill="${c.muted}" font-size="10.5">${hi ? '• दूरी (अदिश): कुल पथ ≥ 0' : '• Distance (Scalar): path ≥ 0'}</text>
  <text x="32" y="210" fill="${c.muted}" font-size="10.5">${hi ? '• विस्थापन (सदिश): Δx (+/−/0)' : '• Displacement (Vector): Δx'}</text>
  <text x="32" y="232" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? '• चाल = दूरी/समय (m/s)' : '• Speed = Distance / Time'}</text>
  <text x="32" y="254" fill="${c.cyan}" font-size="10.5" font-weight="700">${hi ? '• वेग = विस्थापन/समय' : '• Velocity = Disp / Time'}</text>
  <text x="32" y="278" fill="${c.rose}" font-size="10.5" font-weight="700">1 m/s = 18/5 km/h</text>
  <text x="32" y="300" fill="${c.muted}" font-size="10">${hi ? '• ओडोमीटर = दूरी | चालमापी = चाल' : '• Odometer = Dist | Speedo = v'}</text>

  <rect x="220" y="112" width="180" height="218" rx="12" fill="${c.card}" stroke="${c.cyan}" stroke-width="1.8"/>
  <rect x="220" y="112" width="180" height="34" rx="10" fill="${c.cyanSoft}"/>
  <text x="310" y="134" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '2. त्वरण व ग्राफ (x-t / v-t)' : '2. Acceleration & Graphs'}</text>
  <text x="232" y="166" fill="${c.ink}" font-size="11" font-weight="700">a = (v − u) / t (m/s²)</text>
  <text x="232" y="188" fill="${c.muted}" font-size="10.5">${hi ? '• मंदन: a वेग के विपरीत (−)' : '• Retardation: negative a'}</text>
  <text x="232" y="210" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? '• x-t ढलान = वेग (v)' : '• x-t Slope = Velocity (v)'}</text>
  <text x="232" y="232" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? '• v-t ढलान = त्वरण (a)' : '• v-t Slope = Acceleration (a)'}</text>
  <text x="232" y="254" fill="${c.violet}" font-size="10.5" font-weight="700">${hi ? '• v-t क्षेत्रफल = विस्थापन (s)' : '• Area under v-t = Disp (s)'}</text>
  <text x="232" y="278" fill="${c.muted}" font-size="10">${hi ? '• क्षैतिज x-t = विरामावस्था' : '• Flat x-t = Object at Rest'}</text>
  <text x="232" y="300" fill="${c.muted}" font-size="10">${hi ? '• क्षैतिज v-t = अचर वेग (a=0)' : '• Flat v-t = Zero Accel (a=0)'}</text>

  <rect x="420" y="112" width="180" height="218" rx="12" fill="${c.card}" stroke="${c.amber}" stroke-width="1.8"/>
  <rect x="420" y="112" width="180" height="34" rx="10" fill="${c.amberSoft}"/>
  <text x="510" y="134" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '3. शुद्धगतिक समीकरण' : '3. Kinematic Equations'}</text>
  <text x="510" y="168" text-anchor="middle" fill="${c.ink}" font-size="12.5" font-weight="800">v = u + at</text>
  <text x="510" y="196" text-anchor="middle" fill="${c.cyan}" font-size="12.5" font-weight="800">s = ut + ½at²</text>
  <text x="510" y="224" text-anchor="middle" fill="${c.emerald}" font-size="12.5" font-weight="800">v² = u² + 2as</text>
  <line x1="435" y1="240" x2="585" y2="240" stroke="${c.grid}" stroke-dasharray="3 3"/>
  <text x="432" y="260" fill="${c.ink}" font-size="10.5">${hi ? '• शर्त: नियत त्वरण (a = const)' : '• Condition: Constant a only'}</text>
  <text x="432" y="280" fill="${c.muted}" font-size="10.5">${hi ? '• मुक्त पतन: g = 9.8 m/s²' : '• Free fall: a = ±g = 9.8 m/s²'}</text>
  <text x="432" y="300" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? '• रुकने की दूरी s ∝ u²' : '• Stopping dist: s ∝ u²'}</text>

  <rect x="620" y="112" width="180" height="218" rx="12" fill="${c.card}" stroke="${c.violet}" stroke-width="1.8"/>
  <rect x="620" y="112" width="180" height="34" rx="10" fill="${c.violetSoft}"/>
  <text x="710" y="134" text-anchor="middle" fill="${c.violet}" font-size="12" font-weight="800">${hi ? '4. वृत्तीय गति व V2V' : '4. Circular & 2D/3D'}</text>
  <text x="632" y="166" fill="${c.ink}" font-size="11" font-weight="700">${hi ? '• 1 चक्कर दूरी = 2πR' : '• 1 Round Distance = 2πR'}</text>
  <text x="632" y="188" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? '• 1 चक्कर विस्थापन = 0' : '• 1 Round Disp = 0 m'}</text>
  <text x="632" y="210" fill="${c.muted}" font-size="10.5">${hi ? '• चाल v = 2πR / T (अचर)' : '• Speed v = 2πR / T (constant)'}</text>
  <text x="632" y="232" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? '• वेग की दिशा सदैव बदलती है' : '• Velocity direction changes'}</text>
  <text x="632" y="254" fill="${c.cyan}" font-size="10.5" font-weight="700">${hi ? '• मुक्त कण: स्पर्शरेखीय पथ' : '• Release path = Tangent'}</text>
  <text x="632" y="278" fill="${c.muted}" font-size="10">${hi ? '• 2D: प्रक्षेप्य / उपग्रह' : '• 2D: Plane/Orbit | 3D: Bird'}</text>
  <text x="632" y="300" fill="${c.emerald}" font-size="10" font-weight="700">${hi ? '• भारत V2V टक्कर चेतावनी' : '• Indian V2V safety alerts'}</text>
</svg>`;

    case 'reference-frame-displacement':
      return `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="320" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="28" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'संदर्भ बिंदु (Reference Frame), दूरी बनाम विस्थापन (NCERT चित्र 4.3 – 4.5)' : 'Reference Frame, Distance vs Displacement Vectors (NCERT Fig 4.3 – 4.5)'}</text>

  <!-- Runner Number Line O -> A -> B -->
  <rect x="24" y="46" width="470" height="122" rx="10" fill="${c.card}" stroke="${c.cyan}" stroke-width="1.5"/>
  <text x="38" y="67" fill="${c.cyan}" font-size="11.5" font-weight="800">${hi ? 'प्रकरण A: सीधा पथ (O → A → B लौटकर आना)' : 'Case A: Straight Path (O → A = 100 m, Back to B = 40 m)'}</text>
  <line x1="55" y1="120" x2="460" y2="120" stroke="${c.muted}" stroke-width="2"/>
  <circle cx="80" cy="120" r="5" fill="${c.ink}"/>
  <circle cx="230" cy="120" r="6" fill="${c.amber}"/>
  <circle cx="440" cy="120" r="6" fill="${c.rose}"/>
  <text x="80" y="140" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="800">O (0 m)</text>
  <text x="230" y="140" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="800">B (40 m)</text>
  <text x="440" y="140" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="800">A (100 m)</text>
  <path d="M84 102 Q260 68 436 102" stroke="${c.emerald}" stroke-width="2.2" fill="none"/>
  <path d="M436 108 Q335 90 236 112" stroke="${c.rose}" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
  <line x1="85" y1="152" x2="225" y2="152" stroke="${c.amber}" stroke-width="3"/>
  <text x="155" y="164" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="800">${hi ? 'विस्थापन OB = 40 m (+)' : 'Displacement OB = +40 m'}</text>
  <text x="355" y="164" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="800">${hi ? 'दूरी OA+AB = 160 m' : 'Distance = 100+60 = 160 m'}</text>

  <!-- Vertical Ball Toss O -> B -> O -->
  <rect x="24" y="182" width="470" height="118" rx="10" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.5"/>
  <text x="38" y="203" fill="${c.emerald}" font-size="11.5" font-weight="800">${hi ? 'क्रियाकलाप 4.1: ऊपर फेंकी गेंद (O → 140 cm B → वापस O)' : 'Activity 4.1: Vertical Ball Toss (O → 140 cm B → Back O)'}</text>
  <rect x="48" y="218" width="90" height="22" rx="6" fill="${c.tealSoft}"/><text x="93" y="233" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">O (0 cm): d=0, s=0</text>
  <rect x="148" y="218" width="110" height="22" rx="6" fill="${c.amberSoft}"/><text x="203" y="233" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">B (Peak): d=140, s=140</text>
  <rect x="268" y="218" width="110" height="22" rx="6" fill="${c.cyanSoft}"/><text x="323" y="233" text-anchor="middle" fill="${c.cyan}" font-size="10.5" font-weight="700">C (100cm): d=180, s=100</text>
  <rect x="386" y="218" width="96" height="22" rx="6" fill="${c.roseSoft}"/><text x="434" y="233" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="800">Back O: d=280, s=0!</text>
  <text x="259" y="266" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="700">${hi ? 'निष्कर्ष: एक दिशा सरल रेखा में दूरी = |विस्थापन|; मुड़कर लौटने पर दूरी > |विस्थापन|' : 'Rule: Total Distance ≥ |Displacement| always (Equal ONLY in 1-way straight line!)'}</text>
  <text x="259" y="286" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'अदिश (Scalar): केवल परिमाण (दूरी, चाल) | सदिश (Vector): परिमाण + दिशा (विस्थापन, वेग, त्वरण)' : 'Scalar: Magnitude only (Distance, Speed) | Vector: Mag + Direction (Disp, Velocity, Accel)'}</text>

  <!-- Right Panel: Vector 2D Triangle ABC + Swimming Pool -->
  <rect x="512" y="46" width="264" height="254" rx="10" fill="${c.card}" stroke="${c.amber}" stroke-width="1.5"/>
  <text x="644" y="69" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? 'समकोण / 2D विस्थापन' : '2D Triangle & Return Path'}</text>
  <line x1="555" y1="205" x2="725" y2="205" stroke="${c.emerald}" stroke-width="3"/>
  <line x1="725" y1="205" x2="725" y2="95" stroke="${c.emerald}" stroke-width="3"/>
  <line x1="555" y1="205" x2="725" y2="95" stroke="${c.rose}" stroke-width="3" stroke-dasharray="5 3"/>
  <text x="640" y="222" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="700">40 m East (X)</text>
  <text x="742" y="155" fill="${c.emerald}" font-size="11" font-weight="700" transform="rotate(-90 742 155)">30 m North</text>
  <text x="625" y="138" fill="${c.rose}" font-size="11.5" font-weight="800" transform="rotate(-33 625 138)">${hi ? 'विस्थापन = 50 m' : 'Disp = √(40²+30²)=50m'}</text>
  <rect x="530" y="238" width="228" height="48" rx="8" fill="${c.cardAlt}"/>
  <text x="644" y="258" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? 'तैराक उमा (60m पूल: जाना-आना):' : 'Swimmer (60m pool round-trip):'}</text>
  <text x="644" y="275" text-anchor="middle" fill="${c.cyan}" font-size="10.5" font-weight="800">${hi ? 'दूरी = 120 m, विस्थापन = 0 m → औसत वेग = 0' : 'Dist=120m, Disp=0m → Avg Vel = 0 m/s'}</text>
</svg>`;

    case 'scalar-vs-vector-trio':
      return `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="300" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="28" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'माध्य चाल, माध्य वेग, इकाई परिवर्तन (× 5/18) एवं धनात्मक बनाम ऋणात्मक त्वरण' : 'Speed vs Velocity, km/h ↔ m/s Converter & Positive vs Retardation Vectors'}</text>

  <rect x="24" y="48" width="240" height="232" rx="10" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.6"/>
  <rect x="24" y="48" width="240" height="34" rx="8" fill="${c.emeraldSoft}"/>
  <text x="144" y="70" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? 'चाल ↔ वेग एवं रूपांतरण' : 'Unit Bridge: km/h ↔ m/s'}</text>
  <text x="144" y="106" text-anchor="middle" fill="${c.ink}" font-size="12" font-weight="800">v_avg = s / t (SI: m s⁻¹)</text>
  <rect x="42" y="122" width="204" height="50" rx="8" fill="${c.amberSoft}" stroke="${c.amber}"/>
  <text x="144" y="143" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">km/h → m/s : × (5 / 18)</text>
  <text x="144" y="162" text-anchor="middle" fill="${c.muted}" font-size="10.5">36 km/h = 10 m/s • 72 km/h = 20 m/s</text>
  <rect x="42" y="182" width="204" height="50" rx="8" fill="${c.cyanSoft}" stroke="${c.cyan}"/>
  <text x="144" y="203" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">m/s → km/h : × (18 / 5)</text>
  <text x="144" y="222" text-anchor="middle" fill="${c.muted}" font-size="10.5">108 km/h = 30 m/s • 18 km/h = 5 m/s</text>
  <text x="144" y="260" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? 'चालमापी = तात्क्षणिक चाल | ओडोमीटर = दूरी' : 'Speedometer = Instant | Odometer = Dist'}</text>

  <rect x="280" y="48" width="245" height="232" rx="10" fill="${c.card}" stroke="${c.cyan}" stroke-width="1.6"/>
  <rect x="280" y="48" width="245" height="34" rx="8" fill="${c.cyanSoft}"/>
  <text x="402" y="70" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? 'धनात्मक त्वरण बनाम मंदन (चित्र 4.8)' : 'Positive Accel vs Retardation'}</text>
  <text x="402" y="106" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">${hi ? '(क) एक्सीलेटर दबाने पर (वेग बढ़ता है)' : '(a) Accelerating: v & a SAME dir (+)'}</text>
  <line x1="320" y1="128" x2="475" y2="128" stroke="${c.emerald}" stroke-width="3"/><polygon points="475,123 487,128 475,133" fill="${c.emerald}"/>
  <text x="402" y="143" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">v →   &amp;   a → (+0.5 m/s²)</text>
  <line x1="300" y1="164" x2="505" y2="164" stroke="${c.grid}" stroke-dasharray="3 3"/>
  <text x="402" y="186" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">${hi ? '(ख) ब्रेक लगाने पर — मंदन (वेग घटता है)' : '(b) Braking Retardation: Opposite (−)'}</text>
  <line x1="330" y1="206" x2="465" y2="206" stroke="${c.cyan}" stroke-width="3"/><polygon points="465,201 477,206 465,211" fill="${c.cyan}"/>
  <line x1="465" y1="224" x2="345" y2="224" stroke="${c.rose}" stroke-width="3"/><polygon points="345,219 333,224 345,229" fill="${c.rose}"/>
  <text x="402" y="246" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="800">v →   vs   a ← (−3 m/s² Break!)</text>
  <text x="402" y="268" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'नियत उच्च वेग पर भी त्वरण = 0 होता है!' : 'High constant speed STILL means a = 0!'}</text>

  <rect x="541" y="48" width="235" height="232" rx="10" fill="${c.card}" stroke="${c.amber}" stroke-width="1.6"/>
  <rect x="541" y="48" width="235" height="34" rx="8" fill="${c.amberSoft}"/>
  <text x="658" y="70" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? 'मुक्त पतन (उदा. 4.4: g = 9.8)' : 'Free Fall (Ex 4.4: g = 9.8 m/s²)'}</text>
  <circle cx="580" cy="100" r="7" fill="${c.amber}"/><text x="605" y="104" fill="${c.ink}" font-size="10.5">t = 0s: u = 0 m/s</text>
  <circle cx="580" cy="130" r="7" fill="${c.amber}"/><text x="605" y="134" fill="${c.ink}" font-size="10.5">t = 1s: v = 9.8 m/s</text>
  <circle cx="580" cy="168" r="7" fill="${c.amber}"/><text x="605" y="172" fill="${c.ink}" font-size="10.5">t = 2s: v = 19.6 m/s</text>
  <circle cx="580" cy="212" r="7" fill="${c.amber}"/><text x="605" y="216" fill="${c.ink}" font-size="10.5">t = 3s: v = 29.4 m/s</text>
  <circle cx="580" cy="260" r="7" fill="${c.amber}"/><text x="605" y="264" fill="${c.ink}" font-size="10.5">t = 4s: v = 39.2 m/s</text>
  <line x1="580" y1="108" x2="580" y2="250" stroke="${c.amber}" stroke-dasharray="2 2"/>
  <rect x="640" y="232" width="124" height="38" rx="6" fill="${c.cardAlt}"/>
  <text x="702" y="250" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="800">Δv/Δt = 9.8 m/s²</text>
  <text x="702" y="264" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'नियत त्वरण (नीचे)' : 'Uniform g Downward'}</text>
</svg>`;

    case 'position-time-graphs-master':
      return `<svg viewBox="0 0 800 290" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="290" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'स्थिति-समय (x-t) ग्राफ के 4 अनिवार्य रूप — ढलान (Slope) = वेग' : '4 Essential Position-Time (x-t) Graphs — Slope = Velocity'}</text>

  <!-- Panel 1: Rest -->
  <rect x="20" y="42" width="180" height="228" rx="10" fill="${c.card}" stroke="${c.muted}"/>
  <text x="110" y="62" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">${hi ? '1. विरामावस्था (Rest)' : '1. Object at Rest'}</text>
  <line x1="45" y1="200" x2="180" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="45" y1="85" x2="45" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="45" y1="130" x2="175" y2="130" stroke="${c.amber}" stroke-width="3"/>
  <text x="110" y="120" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">x = 40 m (const)</text>
  <text x="110" y="228" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 't-अक्ष के समांतर रेखा' : 'Flat Parallel Line'}</text>
  <text x="110" y="248" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">Slope = 0 → v = 0</text>

  <!-- Panel 2: Uniform Motion -->
  <rect x="214" y="42" width="180" height="228" rx="10" fill="${c.card}" stroke="${c.emerald}"/>
  <text x="304" y="62" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? '2. एकसमान वेग' : '2. Uniform Velocity'}</text>
  <line x1="239" y1="200" x2="374" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="239" y1="85" x2="239" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="239" y1="200" x2="365" y2="95" stroke="${c.emerald}" stroke-width="3"/>
  <polygon points="295,153 345,153 345,112" fill="none" stroke="${c.cyan}" stroke-width="1.6"/>
  <text x="355" y="136" fill="${c.cyan}" font-size="9.5" font-weight="700">Δs</text>
  <text x="320" y="166" fill="${c.cyan}" font-size="9.5" font-weight="700">Δt</text>
  <text x="304" y="228" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'सीधी तिरछी सरल रेखा' : 'Straight Sloping Line'}</text>
  <text x="304" y="248" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">v = Δs/Δt = Constant</text>

  <!-- Panel 3: Comparing 2 speeds -->
  <rect x="408" y="42" width="180" height="228" rx="10" fill="${c.card}" stroke="${c.cyan}"/>
  <text x="498" y="62" text-anchor="middle" fill="${c.cyan}" font-size="11" font-weight="800">${hi ? '3. दो वस्तुएँ (उदा. 4.7)' : '3. Steeper = Faster'}</text>
  <line x1="433" y1="200" x2="568" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="433" y1="85" x2="433" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="433" y1="200" x2="515" y2="90" stroke="${c.rose}" stroke-width="3"/>
  <line x1="433" y1="200" x2="565" y2="145" stroke="${c.cyan}" stroke-width="3"/>
  <text x="524" y="102" fill="${c.rose}" font-size="11" font-weight="800">B (Fast)</text>
  <text x="546" y="168" fill="${c.cyan}" font-size="11" font-weight="800">A (Slow)</text>
  <text x="498" y="228" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'अधिक ढलान = अधिक वेग' : 'Higher Slope → Higher v'}</text>
  <text x="498" y="248" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="800">v_B &gt; v_A</text>

  <!-- Panel 4: Curved Accelerated vs Decelerated -->
  <rect x="602" y="42" width="178" height="228" rx="10" fill="${c.card}" stroke="${c.violet}"/>
  <text x="691" y="62" text-anchor="middle" fill="${c.violet}" font-size="11" font-weight="800">${hi ? '4. वक्र x-t (त्वरित/मंदन)' : '4. Curved x-t (a ≠ 0)'}</text>
  <line x1="625" y1="200" x2="760" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="625" y1="85" x2="625" y2="200" stroke="${c.muted}" stroke-width="1.8"/>
  <path d="M625 200 Q710 192 750 92" stroke="${c.amber}" stroke-width="3" fill="none"/>
  <path d="M625 200 Q655 105 752 100" stroke="${c.rose}" stroke-width="2.6" stroke-dasharray="4 3" fill="none"/>
  <text x="720" y="142" fill="${c.amber}" font-size="10" font-weight="800">Slope ↑ (a&gt;0)</text>
  <text x="642" y="114" fill="${c.rose}" font-size="10" font-weight="800">Flat (Decel)</text>
  <text x="691" y="228" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'ऊपर मुड़ा वक्र = वेग↑' : 'Steepening = Accel (+)'}</text>
  <text x="691" y="248" text-anchor="middle" fill="${c.rose}" font-size="10" font-weight="700">${hi ? 'सपाट होता वक्र = मंदन' : 'Flattening = Retardation'}</text>
</svg>`;

    case 'velocity-time-area-slope':
      return `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="300" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'वेग-समय (v-t) ग्राफ: ढलान = त्वरण (a) तथा परिबद्ध क्षेत्रफल = विस्थापन (s)' : 'Velocity-Time (v-t) Graph: Slope = Acceleration (a) & Shaded Area = Displacement (s)'}</text>

  <!-- Chart 1: Constant v -->
  <rect x="22" y="44" width="240" height="236" rx="10" fill="${c.card}" stroke="${c.cyan}"/>
  <text x="142" y="65" text-anchor="middle" fill="${c.cyan}" font-size="11.5" font-weight="800">${hi ? '(क) अचर वेग → a = 0' : '(a) Uniform Velocity (a=0)'}</text>
  <rect x="52" y="115" width="175" height="90" fill="${c.cyanSoft}" opacity="0.65"/>
  <line x1="52" y1="205" x2="235" y2="205" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="52" y1="80" x2="52" y2="205" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="52" y1="115" x2="227" y2="115" stroke="${c.cyan}" stroke-width="3.2"/>
  <text x="140" y="165" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">Area = 20 × 6 = 120 m</text>
  <text x="142" y="236" text-anchor="middle" fill="${c.ink}" font-size="10.5">${hi ? 'X-अक्ष के समांतर रेखा' : 'Flat Horizontal v-t Line'}</text>
  <text x="142" y="258" text-anchor="middle" fill="${c.cyan}" font-size="10.5" font-weight="800">${hi ? 'त्वरण = 0, विस्थापन = आयत' : 'Accel = 0 | Disp = L × B'}</text>

  <!-- Chart 2: Increasing v (Area Trapezoid = Rectangle + Triangle) -->
  <rect x="278" y="44" width="245" height="236" rx="10" fill="${c.card}" stroke="${c.emerald}"/>
  <text x="400" y="65" text-anchor="middle" fill="${c.emerald}" font-size="11.5" font-weight="800">${hi ? '(ख) नियत त्वरण → क्षेत्रफल OABD' : '(b) Uniform Accel Trapezium'}</text>
  <polygon points="315,205 315,155 485,95 485,205" fill="${c.emeraldSoft}" opacity="0.7"/>
  <line x1="315" y1="205" x2="495" y2="205" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="315" y1="80" x2="315" y2="205" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="315" y1="155" x2="485" y2="155" stroke="${c.amber}" stroke-dasharray="4 3" stroke-width="1.6"/>
  <line x1="315" y1="155" x2="485" y2="95" stroke="${c.emerald}" stroke-width="3.2"/>
  <text x="303" y="158" text-anchor="end" fill="${c.amber}" font-size="10.5" font-weight="800">u</text>
  <text x="303" y="99" text-anchor="end" fill="${c.emerald}" font-size="10.5" font-weight="800">v</text>
  <text x="400" y="184" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">Rect: u × t</text>
  <text x="428" y="138" text-anchor="middle" fill="${c.emerald}" font-size="10" font-weight="800">Δ: ½t(v−u)</text>
  <text x="400" y="236" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">Slope = (v−u)/t = Acceleration</text>
  <text x="400" y="258" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">Area = ut + ½at² (75 m Ex!)</text>

  <!-- Chart 3: Retardation -->
  <rect x="538" y="44" width="240" height="236" rx="10" fill="${c.card}" stroke="${c.rose}"/>
  <text x="658" y="65" text-anchor="middle" fill="${c.rose}" font-size="11.5" font-weight="800">${hi ? '(ग) घटता वेग (मंदन a &lt; 0)' : '(c) Uniform Retardation (a &lt; 0)'}</text>
  <polygon points="570,100 570,205 745,205" fill="${c.roseSoft}" opacity="0.65"/>
  <line x1="570" y1="205" x2="755" y2="205" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="570" y1="80" x2="570" y2="205" stroke="${c.muted}" stroke-width="1.8"/>
  <line x1="570" y1="100" x2="745" y2="205" stroke="${c.rose}" stroke-width="3.2"/>
  <text x="635" y="176" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">Area = ½ × u × t</text>
  <text x="658" y="236" text-anchor="middle" fill="${c.ink}" font-size="10.5">${hi ? 'नीचे की ओर गिरती सरल रेखा' : 'Downward Sloping Line'}</text>
  <text x="658" y="258" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="800">a = −0.5 m/s² (Stop @ 30s)</text>
</svg>`;

    case 'kinematic-equations-sheet':
      return `<svg viewBox="0 0 800 290" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="290" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="28" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'शुद्धगतिक समीकरण (नियत त्वरण), गुरुत्वीय पतन चिह्न व रुकने की दूरी (s ∝ u²)' : 'Kinematic Equations (Constant a), Free Fall (±g) & Stopping Distance Law'}</text>

  <rect x="24" y="48" width="430" height="222" rx="12" fill="${c.card}" stroke="${c.amber}" stroke-width="1.6"/>
  <rect x="40" y="64" width="190" height="54" rx="8" fill="${c.cyanSoft}" stroke="${c.cyan}"/><text x="135" y="88" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="900">1) v = u + at</text><text x="135" y="108" text-anchor="middle" fill="${c.cyan}" font-size="10">No s (Velocity-Time)</text>
  <rect x="246" y="64" width="192" height="54" rx="8" fill="${c.emeraldSoft}" stroke="${c.emerald}"/><text x="342" y="88" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="900">2) s = ut + ½at²</text><text x="342" y="108" text-anchor="middle" fill="${c.emerald}" font-size="10">No v (Position-Time)</text>
  <rect x="40" y="132" width="190" height="54" rx="8" fill="${c.amberSoft}" stroke="${c.amber}"/><text x="135" y="156" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="900">3) v² = u² + 2as</text><text x="135" y="176" text-anchor="middle" fill="${c.amber}" font-size="10">No t (Vel-Displacement)</text>
  <rect x="246" y="132" width="192" height="54" rx="8" fill="${c.violetSoft}" stroke="${c.violet}"/><text x="342" y="154" text-anchor="middle" fill="${c.ink}" font-size="12.5" font-weight="900">4) s = (u+v)t / 2</text><text x="342" y="174" text-anchor="middle" fill="${c.violet}" font-size="11" font-weight="700">5) s = vt − ½at²</text>
  <text x="239" y="216" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">${hi ? 'शर्त: केवल नियत (अचर) त्वरण a के लिए ही मान्य!' : 'Strict Condition: Acceleration a MUST be Constant!'}</text>
  <text x="239" y="238" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="700">${hi ? 'विराम से आरंभ: u = 0 | रुकने पर: v = 0 | मुक्त पतन: a = +g (नीचे)' : 'From rest: u=0 | Comes to stop: v=0 | Throw UP: a = −g'}</text>
  <text x="239" y="256" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'मुक्त पतन h = ½gt² → पहले 2 सेकंड में v = 2g, औसत चाल = g' : 'Freely falling 2s (g=10): v = 20 m/s, avg speed = 10 m/s!'}</text>

  <rect x="470" y="48" width="306" height="222" rx="12" fill="${c.card}" stroke="${c.rose}" stroke-width="1.6"/>
  <rect x="470" y="48" width="306" height="34" rx="10" fill="${c.roseSoft}"/>
  <text x="623" y="70" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? 'उदा. 4.8: दोगुनी चाल = 4× रुकने की दूरी!' : 'Ex 4.8: Double Speed = 4× Stopping Dist'}</text>
  <text x="486" y="106" fill="${c.ink}" font-size="11.5" font-weight="700">Braking Deceleration a = −4 m/s²</text>
  <rect x="486" y="120" width="90" height="24" rx="5" fill="${c.cyan}"/><text x="605" y="137" fill="${c.cyan}" font-size="11" font-weight="800">54 km/h (15 m/s) → 28.1 m</text>
  <rect x="486" y="158" width="274" height="24" rx="5" fill="${c.rose}"/>
  <text x="623" y="174" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">108 km/h (30 m/s = 2u) → 112.5 m (4×!)</text>
  <text x="623" y="212" text-anchor="middle" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? 'सूत्र: s_stop = u² / (2|a|)' : 'Law: s_stop = u² / (2|a|)'}</text>
  <text x="623" y="234" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'ब्रेक दूरी निर्भरता: चाल, गीली सड़क, टायर,' : 'Plus Reaction Distance = u × t_react'}</text>
  <text x="623" y="252" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? 'प्रतिक्रिया समय (t_react) एवं भारत में V2V तकनीक!' : '(NCERT Ex Q10 + Indian V2V Collision Alert)'}</text>
</svg>`;

    case 'circular-motion-tangent':
      return `<svg viewBox="0 0 800 290" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="290" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'एकसमान वृत्तीय गति: बहुभुज सीमा, स्पर्शरेखीय वेग एवं केंद्राभिमुख त्वरण (चित्र 4.22–4.25)' : 'Uniform Circular Motion: Polygon → Circle Limit, Tangential Velocity & Inward Acceleration'}</text>

  <!-- Rectangle -> Hexagon -> Circle -->
  <rect x="24" y="46" width="110" height="105" rx="8" fill="${c.card}" stroke="${c.grid}"/>
  <rect x="48" y="64" width="62" height="54" fill="none" stroke="${c.cyan}" stroke-width="2.2"/>
  <text x="79" y="138" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? '4 मुड़ाव (आयत)' : '4 Turns (Rect)'}</text>

  <rect x="146" y="46" width="110" height="105" rx="8" fill="${c.card}" stroke="${c.grid}"/>
  <polygon points="201,60 227,75 227,103 201,118 175,103 175,75" fill="none" stroke="${c.emerald}" stroke-width="2.2"/>
  <text x="201" y="138" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? '6 मुड़ाव (षट्भुज)' : '6 Turns (Hex)'}</text>

  <!-- Big Circular Orbit with Tangents -->
  <rect x="272" y="46" width="266" height="224" rx="10" fill="${c.card}" stroke="${c.violet}" stroke-width="1.8"/>
  <circle cx="405" cy="148" r="68" fill="none" stroke="${c.amber}" stroke-width="3"/>
  <circle cx="405" cy="148" r="5" fill="${c.ink}"/>
  <line x1="405" y1="80" x2="465" y2="80" stroke="${c.cyan}" stroke-width="2.6"/><polygon points="465,75 475,80 465,85" fill="${c.cyan}"/>
  <line x1="405" y1="80" x2="405" y2="112" stroke="${c.rose}" stroke-width="2.4"/><polygon points="400,112 405,122 410,112" fill="${c.rose}"/>
  <line x1="473" y1="148" x2="473" y2="205" stroke="${c.cyan}" stroke-width="2.6"/><polygon points="468,205 473,215 478,205" fill="${c.cyan}"/>
  <line x1="337" y1="148" x2="337" y2="92" stroke="${c.cyan}" stroke-width="2.6"/><polygon points="332,92 337,82 342,92" fill="${c.cyan}"/>
  <text x="480" y="84" fill="${c.cyan}" font-size="10.5" font-weight="800">v (Tangent)</text>
  <text x="415" y="114" fill="${c.rose}" font-size="10" font-weight="800">a (Inward)</text>
  <text x="405" y="242" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">${hi ? 'छल्ला उठाते ही कंचा स्पर्शरेखा पर सीधा चलता है' : 'Activity 4.5: Released marble flies along TANGENT!'}</text>
  <text x="405" y="259" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">v_avg (Speed) = 2πR / T | Disp (1 loop) = 0</text>

  <!-- Bottom left summary -->
  <rect x="24" y="164" width="232" height="106" rx="10" fill="${c.cardAlt}" stroke="${c.teal}"/>
  <text x="140" y="188" text-anchor="middle" fill="${c.teal}" font-size="11.5" font-weight="800">${hi ? 'त्वरित गति क्यों कहलाती है?' : 'Why is UCM Accelerated?'}</text>
  <text x="36" y="210" fill="${c.ink}" font-size="10.5" font-weight="700">• ${hi ? 'चाल (Speed) = अचर (Constant)' : 'Speed = Constant everywhere'}</text>
  <text x="36" y="230" fill="${c.rose}" font-size="10.5" font-weight="700">• ${hi ? 'दिशा (Direction) = हर बिंदु पर बदलती है' : 'Velocity direction changes continuously'}</text>
  <text x="36" y="250" fill="${c.cyan}" font-size="10.5" font-weight="700">• ${hi ? 'अतः वेग बदलता है → त्वरण अंदर की ओर!' : 'Velocity changes → Radial inward a!'}</text>

  <!-- Right Panel: Examples -->
  <rect x="554" y="46" width="222" height="224" rx="10" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.6"/>
  <rect x="554" y="46" width="222" height="34" rx="8" fill="${c.emeraldSoft}"/>
  <text x="665" y="68" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? 'PYQ उदाहरण (1D / 2D / 3D)' : 'CBT Examples & 1D/2D/3D'}</text>
  <text x="568" y="102" fill="${c.ink}" font-size="10.5" font-weight="700">1. ${hi ? 'पृथ्वी के चारों ओर कृत्रिम उपग्रह' : 'Artificial Satellite around Earth'}</text>
  <text x="568" y="122" fill="${c.ink}" font-size="10.5" font-weight="700">2. ${hi ? 'चरखी / झूला (Merry-go-round)' : 'Merry-go-round & Clock hand'}</text>
  <text x="568" y="142" fill="${c.ink}" font-size="10.5" font-weight="700">3. ${hi ? 'सूर्य की परिक्रमा करते ग्रह' : 'Cyclist on circular track'}</text>
  <line x1="566" y1="158" x2="764" y2="158" stroke="${c.grid}" stroke-dasharray="3 3"/>
  <text x="568" y="180" fill="${c.cyan}" font-size="10.5" font-weight="800">1D: ${hi ? 'सीधी पटरी ट्रेन / मुक्त पतन' : 'Straight track / Drop'}</text>
  <text x="568" y="200" fill="${c.amber}" font-size="10.5" font-weight="800">2D: ${hi ? 'ओवरटेक कार, उछली गेंद, वृत्त' : 'Overtaking, Kicked Ball, Orbit'}</text>
  <text x="568" y="220" fill="${c.violet}" font-size="10.5" font-weight="800">3D: ${hi ? 'पहाड़ी घुमाव कार, पक्षी/विमान' : 'Mountain spiral, Bird/Plane'}</text>
  <text x="568" y="250" fill="${c.muted}" font-size="10">Ex Q16: 6:00–7:30 pm (1.5 rev):</text>
  <text x="568" y="264" fill="${c.rose}" font-size="10" font-weight="700">Dist = 1.5×(2π×7) = 66cm | Disp=14cm</text>
</svg>`;

    default:
      return '';
  }
}
