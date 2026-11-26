/**
 * Print-Ready Light & Dark Mode Pure Vector Diagrams for Class 9 Chemistry Ch 8
 * (एक यात्रा — परमाणु के भीतर / Inside the Atom — NCERT 2026-27 Edition).
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

export function renderCh8AtomDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = pal(theme);
  const hi = lang !== 'en';
  const font = 'font-family="Noto Sans Devanagari, Inter, sans-serif"';

  switch (key) {
    case 'ch8-blueprint-mindmap':
      return `<svg viewBox="0 0 820 330" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="820" height="330" rx="16" fill="${c.bg}" stroke="${c.grid}" stroke-width="2"/>
  <rect x="255" y="16" width="310" height="48" rx="12" fill="${c.cyanSoft}" stroke="${c.cyan}" stroke-width="2.2"/>
  <text x="410" y="38" text-anchor="middle" fill="${c.ink}" font-size="13.5" font-weight="800">${hi ? 'अध्याय 8: परमाणु की संपूर्ण यात्रा' : 'Ch 8: Inside the Atom Mindmap'}</text>
  <text x="410" y="55" text-anchor="middle" fill="${c.cyan}" font-size="10.5" font-weight="700">Models • e⁻ p⁺ n⁰ • Z &amp; A • 2n² Octet • Isotopes/Isobars</text>
  <path d="M410 64 L410 86 M110 86 L710 86 M110 86 L110 106 M310 86 L310 106 M510 86 L510 106 M710 86 L710 106" stroke="${c.cyan}" stroke-width="2" fill="none"/>

  <rect x="20" y="106" width="180" height="206" rx="12" fill="${c.card}" stroke="${c.amber}"/>
  <rect x="20" y="106" width="180" height="30" rx="8" fill="${c.amberSoft}"/>
  <text x="110" y="126" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '1. परमाणु मॉडल विकास' : '1. Atomic Models Evolution'}</text>
  <text x="30" y="156" fill="${c.ink}" font-size="10.5" font-weight="700">${hi ? '• कणाद / डेमोक्रिटस / डाल्टन' : '• Kanada -> Dalton (1808)'}</text>
  <text x="30" y="178" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? '• टॉमसन (1897): e⁻, तरबूज मॉडल' : '• Thomson (1897): e⁻, Melon'}</text>
  <text x="30" y="200" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? '• रदरफोर्ड (1911): स्वर्ण नाभिक' : '• Rutherford: Gold Foil Nucleus'}</text>
  <text x="30" y="222" fill="${c.cyan}" font-size="10.5" font-weight="700">${hi ? '• बोर (1913): स्थिर कक्ष K,L,M,N' : '• Bohr: Discrete Shells K,L,M'}</text>
  <text x="30" y="244" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? '• गोल्डस्टीन: कैनाल (p⁺)' : '• Goldstein: Canal Rays (p⁺)'}</text>
  <text x="30" y="266" fill="${c.violet}" font-size="10.5" font-weight="700">${hi ? '• चैडविक (1932): न्यूट्रॉन n⁰' : '• Chadwick (1932): Neutron n⁰'}</text>
  <text x="30" y="292" fill="${c.muted}" font-size="10">${hi ? '• BARC ध्रुव रिएक्टर: न्यूट्रॉन शोध' : '• India BARC: Dhruva Reactor'}</text>

  <rect x="220" y="106" width="180" height="206" rx="12" fill="${c.card}" stroke="${c.emerald}"/>
  <rect x="220" y="106" width="180" height="30" rx="8" fill="${c.emeraldSoft}"/>
  <text x="310" y="126" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '2. Z, A व अवपरमाणुक कण' : '2. Particles, Z &amp; A'}</text>
  <text x="230" y="156" fill="${c.ink}" font-size="10.5" font-weight="800">p⁺ (+1) ≈ 2000 × m(e⁻)</text>
  <text x="230" y="178" fill="${c.cyan}" font-size="10.5" font-weight="800">e⁻ (−1.6×10⁻¹⁹ C, mass ~0)</text>
  <text x="230" y="200" fill="${c.amber}" font-size="10.5" font-weight="800">n⁰ (0 charge; H has n=0!)</text>
  <text x="230" y="226" fill="${c.ink}" font-size="11" font-weight="900">Z = Protons (= e⁻ neutral)</text>
  <text x="230" y="248" fill="${c.emerald}" font-size="11" font-weight="900">A = Nucleons = p⁺ + n⁰</text>
  <text x="230" y="274" fill="${c.rose}" font-size="10.5" font-weight="700">Neutrons n = A − Z</text>
  <text x="230" y="296" fill="${c.muted}" font-size="10">Notation: ᴬ_Z X (e.g., ¹²₆C)</text>

  <rect x="420" y="106" width="180" height="206" rx="12" fill="${c.card}" stroke="${c.cyan}"/>
  <rect x="420" y="106" width="180" height="30" rx="8" fill="${c.cyanSoft}"/>
  <text x="510" y="126" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '3. कोश 2n² व संयोजकता' : '3. Bohr 2n² &amp; Valency'}</text>
  <text x="430" y="156" fill="${c.ink}" font-size="10.8" font-weight="800">${hi ? 'अधिकतम e⁻ = 2n²:' : 'Max Capacity = 2n²:'}</text>
  <text x="430" y="178" fill="${c.cyan}" font-size="10.5" font-weight="700">K(1)=2 • L(2)=8 • M(3)=18 • N(4)=32</text>
  <text x="430" y="202" fill="${c.rose}" font-size="10.5" font-weight="800">${hi ? 'बाह्यतम कोश में अधिकतम = 8' : 'Outer shell MAX = 8 (Octet)'}</text>
  <text x="430" y="226" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? 'उत्कृष्ट गैस (He 2, Ne 8, Ar 8) = 0' : 'He(2), Ne(2,8), Ar(2,8,8): Val=0'}</text>
  <text x="430" y="250" fill="${c.ink}" font-size="10.5" font-weight="700">v ≤ 4 → Valency = v</text>
  <text x="430" y="272" fill="${c.amber}" font-size="10.5" font-weight="700">v &gt; 4 → Valency = 8 − v</text>
  <text x="430" y="294" fill="${c.muted}" font-size="10">Na(2,8,1) → Val 1; Cl(2,8,7) → 1</text>

  <rect x="620" y="106" width="180" height="206" rx="12" fill="${c.card}" stroke="${c.violet}"/>
  <rect x="620" y="106" width="180" height="30" rx="8" fill="${c.violetSoft}"/>
  <text x="710" y="126" text-anchor="middle" fill="${c.violet}" font-size="12" font-weight="800">${hi ? '4. समस्थानिक व समभारिक' : '4. Isotopes vs Isobars'}</text>
  <text x="630" y="156" fill="${c.emerald}" font-size="10.8" font-weight="800">${hi ? 'समस्थानिक (Isotopes):' : 'Isotopes (Same Z, Diff A):'}</text>
  <text x="630" y="176" fill="${c.ink}" font-size="10">• ¹H (Prot), ²H (Deut), ³H (Trit)</text>
  <text x="630" y="196" fill="${c.cyan}" font-size="10">• Cl-35 (75%) + Cl-37 (25%) = 35.5u</text>
  <text x="630" y="216" fill="${c.muted}" font-size="10">• ${hi ? 'समान रासायनिक गुण, भिन्न भौतिक' : 'Same Chemical, Diff Physical'}</text>
  <text x="630" y="236" fill="${c.amber}" font-size="10">• U(fuel), Co(cancer), I(goitre)</text>
  <line x1="630" y1="248" x2="788" y2="248" stroke="${c.grid}" stroke-dasharray="3 3"/>
  <text x="630" y="268" fill="${c.rose}" font-size="10.8" font-weight="800">${hi ? 'समभारिक (Isobars):' : 'Isobars (Same A, Diff Z):'}</text>
  <text x="630" y="288" fill="${c.ink}" font-size="10.5" font-weight="700">⁴⁰₁₈Ar &amp; ⁴⁰₂₀Ca (Both A=40)</text>
  <text x="630" y="304" fill="${c.muted}" font-size="9.5">${hi ? 'रासायनिक गुण भी भिन्न होते हैं!' : 'Chemical properties ALSO differ'}</text>
</svg>`;

    case 'atomic-models-timeline':
      return `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="280" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'परमाणु संरचना की क्रमिक खोज: टॉमसन → रदरफोर्ड (1911) → बोर (1913) [चित्र 8.2–8.7]' : 'Atomic Model Timeline: Thomson → Rutherford Gold Foil (1911) → Niels Bohr (1913)'}</text>

  <!-- 1. Thomson -->
  <rect x="20" y="46" width="235" height="216" rx="10" fill="${c.card}" stroke="${c.rose}"/>
  <text x="137" y="68" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? '1. टॉमसन प्लम-पुडिंग (तरबूज)' : '1. Thomson Plum Pudding'}</text>
  <circle cx="137" cy="128" r="46" fill="${c.roseSoft}" stroke="${c.rose}" stroke-width="2.5"/>
  <circle cx="115" cy="115" r="5" fill="${c.cyan}"/><circle cx="155" cy="112" r="5" fill="${c.cyan}"/>
  <circle cx="137" cy="134" r="5" fill="${c.cyan}"/><circle cx="118" cy="148" r="5" fill="${c.cyan}"/><circle cx="158" cy="146" r="5" fill="${c.cyan}"/>
  <text x="137" y="192" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="800">${hi ? '+ गोले में − इलेक्ट्रॉन धँसे हैं' : '+ Sphere with embedded e⁻'}</text>
  <text x="137" y="212" text-anchor="middle" fill="${c.emerald}" font-size="10">✓ ${hi ? 'परमाणु वैद्युत उदासीन है!' : 'Explained neutrality (+q = -q)'}</text>
  <text x="137" y="232" text-anchor="middle" fill="${c.rose}" font-size="10">✗ ${hi ? 'नाभिक व α-प्रकीर्णन नहीं समझा सका' : 'Failed Gold Foil alpha bounce!'}</text>

  <!-- 2. Rutherford Gold Foil -->
  <rect x="275" y="46" width="250" height="216" rx="10" fill="${c.card}" stroke="${c.amber}"/>
  <text x="400" y="68" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '2. रदरफोर्ड स्वर्ण पर्णिका (1911)' : '2. Rutherford Gold Foil (α=He²⁺)'}</text>
  <circle cx="400" cy="128" r="44" fill="none" stroke="${c.grid}" stroke-dasharray="3 3"/>
  <circle cx="400" cy="128" r="8" fill="${c.amber}"/>
  <line x1="295" y1="96" x2="505" y2="96" stroke="${c.emerald}" stroke-width="2"/><polygon points="505,92 513,96 505,100" fill="${c.emerald}"/>
  <line x1="295" y1="160" x2="505" y2="160" stroke="${c.emerald}" stroke-width="2"/><polygon points="505,156 513,160 505,164" fill="${c.emerald}"/>
  <path d="M295 118 L390 118 L485 78" stroke="${c.cyan}" stroke-width="2" fill="none"/>
  <path d="M295 128 L385 128 L320 144" stroke="${c.rose}" stroke-width="2.4" fill="none"/>
  <text x="400" y="192" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="800">${hi ? '12000 में 1 कण 180° लौटा → सूक्ष्म नाभिक!' : '1 in 12,000 bounced back → Nucleus!'}</text>
  <text x="400" y="212" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'अधिकांश सीधे गए → परमाणु मुख्यतः रिक्त!' : 'Most straight → Atom mostly EMPTY!'}</text>
  <text x="400" y="232" text-anchor="middle" fill="${c.rose}" font-size="10">✗ ${hi ? 'स्थायित्व त्रुटि: त्वरित e⁻ नाभिक में गिरता' : 'Instability: accelerating e⁻ loses E'}</text>

  <!-- 3. Niels Bohr -->
  <rect x="545" y="46" width="235" height="216" rx="10" fill="${c.card}" stroke="${c.cyan}"/>
  <text x="662" y="68" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '3. नील्स बोर विविक्त कक्षाएँ (1913)' : '3. Bohr Discrete Shells (1913)'}</text>
  <circle cx="662" cy="130" r="10" fill="${c.amber}"/>
  <circle cx="662" cy="130" r="24" fill="none" stroke="${c.emerald}" stroke-width="1.8"/>
  <circle cx="662" cy="130" r="39" fill="none" stroke="${c.cyan}" stroke-width="1.8"/>
  <circle cx="662" cy="130" r="54" fill="none" stroke="${c.violet}" stroke-width="1.8"/>
  <circle cx="662" cy="106" r="4" fill="${c.emerald}"/><circle cx="701" cy="130" r="4" fill="${c.cyan}"/><circle cx="624" cy="92" r="4" fill="${c.violet}"/>
  <text x="720" y="92" fill="${c.violet}" font-size="10" font-weight="800">K,L,M,N</text>
  <text x="662" y="204" text-anchor="middle" fill="${c.ink}" font-size="10.5" font-weight="800">${hi ? 'नियत ऊर्जा कक्ष में e⁻ ऊर्जा नहीं खोते!' : 'Electrons do NOT radiate in orbits!'}</text>
  <text x="662" y="226" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">✓ ${hi ? 'परमाणु स्थायित्व व स्पेक्ट्रम व्याख्या' : 'Solved atomic stability & H spectra'}</text>
</svg>`;

    case 'bohr-bury-shells-valency':
      return `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="280" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'बोर–बरी नियम (अधिकतम 2n², बाह्य अष्टक = 8) एवं संयोजकता निर्धारण (तालिका 8.4)' : 'Bohr–Bury 2n² Capacity, Octet Stability & Valency Rules (NCERT Table 8.4)'}</text>

  <!-- 2n2 Ladder -->
  <rect x="20" y="46" width="265" height="216" rx="10" fill="${c.card}" stroke="${c.cyan}"/>
  <text x="152" y="68" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? 'कोश क्षमता सूत्र = 2n²' : 'Max Electrons per Shell = 2n²'}</text>
  <rect x="36" y="84" width="232" height="34" rx="6" fill="${c.emeraldSoft}"/><text x="152" y="106" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">K (n=1): 2 × 1² = 2 electrons</text>
  <rect x="36" y="126" width="232" height="34" rx="6" fill="${c.cyanSoft}"/><text x="152" y="148" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">L (n=2): 2 × 2² = 8 electrons</text>
  <rect x="36" y="168" width="232" height="34" rx="6" fill="${c.amberSoft}"/><text x="152" y="190" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">M (n=3): 2 × 3² = 18 electrons</text>
  <rect x="36" y="210" width="232" height="34" rx="6" fill="${c.violetSoft}"/><text x="152" y="232" text-anchor="middle" fill="${c.ink}" font-size="11.5" font-weight="800">N (n=4): 2 × 4² = 32 electrons</text>

  <!-- Octet Trap & Valency Formula -->
  <rect x="302" y="46" width="230" height="216" rx="10" fill="${c.card}" stroke="${c.rose}"/>
  <text x="417" y="68" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? 'अष्टक नियम (Outermost ≤ 8)' : 'Outermost Octet & Valency'}</text>
  <text x="316" y="96" fill="${c.ink}" font-size="10.8" font-weight="700">1. ${hi ? 'बाह्यतम कोश में अधिकतम = 8 e⁻!' : 'Outer shell NEVER exceeds 8 e⁻!'}</text>
  <text x="316" y="118" fill="${c.muted}" font-size="10.2">(${hi ? 'जैसे K(19) = 2,8,8,1; Ca(20) = 2,8,8,2' : 'Even though M holds 18, Ca = 2,8,8,2!'})</text>
  <rect x="316" y="134" width="202" height="52" rx="8" fill="${c.emeraldSoft}"/>
  <text x="417" y="154" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? 'संयोजकता e⁻ ≤ 4 → वही संयोजकता' : 'Valence e⁻ ≤ 4 → Valency = same'}</text>
  <text x="417" y="174" text-anchor="middle" fill="${c.ink}" font-size="10.5">Na (2,8,1)→1 | Mg (2,8,2)→2 | C (2,4)→4</text>
  <rect x="316" y="196" width="202" height="52" rx="8" fill="${c.amberSoft}"/>
  <text x="417" y="216" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">${hi ? 'संयोजकता e⁻ &gt; 4 → 8 − e⁻' : 'Valence e⁻ &gt; 4 → 8 − Valence e⁻'}</text>
  <text x="417" y="236" text-anchor="middle" fill="${c.ink}" font-size="10.5">O(2,6)→2 | Cl(2,8,7)→1 | Ar(2,8,8)→0!</text>

  <!-- Ex Q9 Figure 8.17 -->
  <rect x="548" y="46" width="232" height="216" rx="10" fill="${c.card}" stroke="${c.emerald}"/>
  <text x="664" y="68" text-anchor="middle" fill="${c.emerald}" font-size="11.5" font-weight="800">${hi ? 'NCERT अभ्यास 9 (चित्र 8.17 हल)' : 'NCERT Ex Q9 Visual Key (Fig 8.17)'}</text>
  <text x="562" y="102" fill="${c.ink}" font-size="11" font-weight="800">(a) 2, 4 → Carbon (C), Z=6, Val = 4</text>
  <text x="562" y="136" fill="${c.cyan}" font-size="11" font-weight="800">(b) 2, 6 → Oxygen (O), Z=8, Val = 2</text>
  <text x="562" y="170" fill="${c.amber}" font-size="11" font-weight="800">(c) 2, 8, 2 → Mg, Z=12, Val = 2</text>
  <text x="562" y="204" fill="${c.violet}" font-size="11" font-weight="800">(d) 2, 7 → Fluorine (F), Z=9, Val = 1</text>
  <text x="664" y="242" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'उदासीन परमाणु: p⁺ = e⁻ = Z' : 'Neutral atom: Protons = Electrons = Z'}</text>
</svg>`;

    case 'isotopes-vs-isobars-chart':
      return `<svg viewBox="0 0 800 265" xmlns="http://www.w3.org/2000/svg" width="100%" ${font}>
  <rect width="800" height="265" rx="14" fill="${c.bg}" stroke="${c.grid}" stroke-width="1.8"/>
  <text x="400" y="26" text-anchor="middle" fill="${c.ink}" font-size="14" font-weight="800">${hi ? 'समस्थानिक (Isotopes: समान Z) बनाम समभारिक (Isobars: समान A) + Cl 35.5 u गणना' : 'Isotopes (Same Atomic No. Z) vs Isobars (Same Mass No. A) & Cl Average Atomic Mass'}</text>

  <!-- Isotopes H -->
  <rect x="20" y="44" width="380" height="202" rx="10" fill="${c.card}" stroke="${c.emerald}" stroke-width="1.6"/>
  <text x="210" y="66" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? 'समस्थानिक: हाइड्रोजन के 3 (¹H, ²D, ³T) &amp; क्लोरीन' : 'Isotopes: Same Z (Protons), Different Neutrons!'}</text>
  <rect x="34" y="82" width="108" height="72" rx="8" fill="${c.cardAlt}"/><text x="88" y="102" text-anchor="middle" fill="${c.cyan}" font-size="11.5" font-weight="800">¹₁H (Protium)</text><text x="88" y="122" text-anchor="middle" fill="${c.ink}" font-size="10">1p⁺ + 0n⁰!</text><text x="88" y="140" text-anchor="middle" fill="${c.muted}" font-size="9.5">A = 1 (Zero n⁰!)</text>
  <rect x="156" y="82" width="108" height="72" rx="8" fill="${c.cardAlt}"/><text x="210" y="102" text-anchor="middle" fill="${c.amber}" font-size="11.5" font-weight="800">²₁H (Deuterium)</text><text x="210" y="122" text-anchor="middle" fill="${c.ink}" font-size="10">1p⁺ + 1n⁰</text><text x="210" y="140" text-anchor="middle" fill="${c.muted}" font-size="9.5">D₂O (Heavy water)</text>
  <rect x="278" y="82" width="108" height="72" rx="8" fill="${c.cardAlt}"/><text x="332" y="102" text-anchor="middle" fill="${c.rose}" font-size="11.5" font-weight="800">³₁H (Tritium)</text><text x="332" y="122" text-anchor="middle" fill="${c.ink}" font-size="10">1p⁺ + 2n⁰</text><text x="332" y="140" text-anchor="middle" fill="${c.muted}" font-size="9.5">Radioactive (A=3)</text>
  <text x="210" y="182" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">Chlorine-35 (75%) + Chlorine-37 (25%) → 35×¾ + 37×¼ = 35.5 u!</text>
  <text x="210" y="204" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? 'अनुप्रयोग: यूरेनियम (रिएक्टर), कोबाल्ट (कैंसर), आयोडीन (घेंघा)' : 'Uses: U-235 (Fuel), Co-60 (Cancer therapy), I-131 (Goitre!)'}</text>
  <text x="210" y="226" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• समान रासायनिक गुण, परंतु घनत्व/क्वथनांक भिन्न!' : '• Same Z -> Same e⁻ -> IDENTICAL Chemical behaviour!'}</text>

  <!-- Isobars -->
  <rect x="416" y="44" width="364" height="202" rx="10" fill="${c.card}" stroke="${c.violet}" stroke-width="1.6"/>
  <text x="598" y="66" text-anchor="middle" fill="${c.violet}" font-size="12" font-weight="800">${hi ? 'समभारिक (Isobars): भिन्न Z पर समान द्रव्यमान A' : 'Isobars: Different Elements Sharing Same Mass A'}</text>
  <rect x="444" y="86" width="142" height="80" rx="8" fill="${c.cyanSoft}" stroke="${c.cyan}"/>
  <text x="515" y="108" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="900">⁴⁰₁₈Ar (Argon)</text>
  <text x="515" y="128" text-anchor="middle" fill="${c.ink}" font-size="10.5">p⁺ = 18, n⁰ = 22</text>
  <text x="515" y="148" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">A = 18 + 22 = 40</text>

  <rect x="612" y="86" width="142" height="80" rx="8" fill="${c.roseSoft}" stroke="${c.rose}"/>
  <text x="683" y="108" text-anchor="middle" fill="${c.rose}" font-size="13" font-weight="900">⁴⁰₂₀Ca (Calcium)</text>
  <text x="683" y="128" text-anchor="middle" fill="${c.ink}" font-size="10.5">p⁺ = 20, n⁰ = 20</text>
  <text x="683" y="148" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">A = 20 + 20 = 40</text>

  <text x="598" y="196" text-anchor="middle" fill="${c.ink}" font-size="11" font-weight="800">${hi ? '• संधि याद रखें: सम-स्था(Sthan→Z समान) | सम-भार(Bhar→A समान)' : '• Diff Z (18 vs 20) -> Completely DIFFERENT chemical traits!'}</text>
  <text x="598" y="218" text-anchor="middle" fill="${c.violet}" font-size="10.5" font-weight="700">${hi ? '• उदाहरण: (18Ar40, 20Ca40) तथा (6C14, 7N14)!' : '• Also ¹⁴₆C &amp; ¹⁴₇N share A = 14!'}</text>
</svg>`;

    default:
      return '';
  }
}
