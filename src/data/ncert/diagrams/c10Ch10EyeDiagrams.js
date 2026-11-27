/**
 * Class 10 NCERT Science — Chapter 10: The Human Eye & the Colourful World (मानव नेत्र तथा रंग-बिरंगा संसार)
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

export function renderC10Ch10EyeDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';
  const suf = `ch10_${theme}`;

  if (key === 'c10-ch10-blueprint-mindmap') {
    const title = hi ? 'अध्याय 10 मानचित्र: मानव नेत्र तथा रंग-बिरंगा संसार (NCERT 2026–27)' : 'Chapter 10 Master Map: Human Eye & the Colourful World';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <rect x="230" y="58" width="360" height="58" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.6"/>
      <text x="410" y="81" text-anchor="middle" font-size="12.5" font-weight="900" fill="${p.amber}">${esc(hi ? 'मानव नेत्र (व्यास ~2.3 cm) एवं प्रकाश प्रकीर्णन/अपवर्तन' : 'Human Eye (~2.3 cm) & Atmospheric / Prism Optics')}</text>
      <text x="410" y="102" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'सामान्य दृष्टि परास: 25 cm (निकट बिंदु) → ∞ (दूर बिंदु) • नेत्र दान 4–6 घंटे में!' : 'Vision Range: 25 cm (Near Point) → ∞ (Far Point) • Eye Donation: 4–6 hrs')}</text>

      ${[
        {
          x: 20, y: 132, w: 380, h: 134, c: p.cyan, bg: p.cyanBg,
          t: hi ? '10.1 मानव नेत्र व समंजन क्षमता (चित्र 10.1)' : '10.1 Eye Anatomy & Accommodation (Fig 10.1)',
          l1: hi ? '• कॉर्निया: अधिकांश अपवर्तन • आइरिस: पुतली का आकार नियंत्रण' : '• Cornea: Max refraction • Iris: Controls pupil size',
          l2: hi ? '• रेटिना (दृष्टिपटल): वास्तविक + उल्टा प्रतिबिंब (उत्तल लेंस)' : '• Retina: Real & inverted image via crystalline convex lens',
          l3: hi ? '• पक्ष्माभी पेशी शिथिल → पतला लेंस (f↑) | संकुचित → मोटा (f↓)' : '• Ciliary relaxed → thin lens (f↑) | contracted → thick (f↓)',
        },
        {
          x: 420, y: 132, w: 380, h: 134, c: p.emerald, bg: p.emeraldBg,
          t: hi ? '10.2 दृष्टि दोष व संशोधन (चित्र 10.2–10.3)' : '10.2 Refractive Defects & Lens Power P=1/f',
          l1: hi ? '• निकटदृष्टि (Myopia): रेटिना से पहले → अवतल लेंस (-D)' : '• Myopia: Image IN FRONT of retina → Concave (-D)',
          l2: hi ? '• दीर्घदृष्टि (Hypermetropia): रेटिना के पीछे → उत्तल (+D)' : '• Hypermetropia: Image BEHIND retina → Convex (+D)',
          l3: hi ? '• जरा-दूरदृष्टिता (आयु): द्विफोकसी (ऊपर अवतल, नीचे उत्तल)' : '• Presbyopia (Age): Bifocal (Upper concave, Lower convex)',
        },
        {
          x: 20, y: 280, w: 380, h: 130, c: p.violet, bg: p.violetBg,
          t: hi ? '10.3–10.4 प्रिज़्म विक्षेपण व इंद्रधनुष (चित्र 10.4–10.8)' : '10.3–10.4 Prism Dispersion & Rainbow (Fig 10.4–10.8)',
          l1: hi ? '• मोड़ कोण (∠D): बैंगनी सर्वाधिक मुड़े, लाल सबसे कम (VIBGYOR)' : '• Deviation (∠D): Violet bends MOST, Red bends LEAST',
          l2: hi ? '• न्यूटन उल्टा दूसरा प्रिज़्म → पुनः श्वेत प्रकाश (पुनर्योजन)' : '• Newton 2nd Inverted Prism → White light recombined',
          l3: hi ? '• इंद्रधनुष (सूर्य विपरीत): अपवर्तन + विक्षेपण + आंतरिक परावर्तन' : '• Rainbow (opp. Sun): Refraction + Dispersion + Internal Refl.',
        },
        {
          x: 420, y: 280, w: 380, h: 130, c: p.rose, bg: p.roseBg,
          t: hi ? '10.5–10.6 वायुमंडलीय अपवर्तन व प्रकीर्णन' : '10.5–10.6 Atmospheric Refraction & Scattering',
          l1: hi ? '• तारे टिमटिमाना + अग्रिम सूर्योदय (+2 min) व विलंबित सूर्यास्त (+2 min)' : '• Star twinkling + Advance sunrise & delayed sunset (4 min)',
          l2: hi ? '• टिंडल प्रभाव: कोलॉइडी कणों से नीला प्रकीर्णन (सूक्ष्म कण)' : '• Tyndall Effect: Colloids scatter short λ (fine → Blue)',
          l3: hi ? '• लाल λ ≈ 1.8× नीला → कम प्रकीर्णन (खतरा संकेत); अंतरिक्ष काला!' : '• Red λ ≈ 1.8× Blue → Least scatter (Danger); Space = Black',
        },
      ].map((b) => `
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="12" fill="${b.bg}" stroke="${b.c}" stroke-width="1.4"/>
        <text x="${b.x + 14}" y="${b.y + 24}" font-size="11.5" font-weight="800" fill="${b.c}">${esc(b.t)}</text>
        <text x="${b.x + 14}" y="${b.y + 52}" font-size="10.2" font-weight="600" fill="${p.text}">${esc(b.l1)}</text>
        <text x="${b.x + 14}" y="${b.y + 79}" font-size="10.2" font-weight="600" fill="${p.text}">${esc(b.l2)}</text>
        <text x="${b.x + 14}" y="${b.y + 106}" font-size="10.2" font-weight="600" fill="${p.text}">${esc(b.l3)}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c10-ch10-human-eye-accommodation') {
    const title = hi ? 'मानव नेत्र संरचना (चित्र 10.1, व्यास 2.3 cm) एवं पक्ष्माभी समंजन क्रिया' : 'Human Eye Structure (Fig 10.1, ~2.3 cm) & Ciliary Accommodation Mechanics';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="eyeRay_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1 L10 5 L0 9 z" fill="${p.amber}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Main Eyeball Cross-Section (Left) -->
      <rect x="20" y="54" width="490" height="236" rx="12" fill="${p.cardAlt}" stroke="${p.border}" stroke-width="1.2"/>
      <!-- Eyeball Outer Shell & Cornea Bulge -->
      <path d="M 135 128 C 110 155 110 205 135 232 A 95 95 0 1 0 135 128 Z" fill="${p.bg}" stroke="${p.cyan}" stroke-width="3"/>
      <path d="M 135 128 Q 100 180 135 232" fill="${p.cyanBg}" stroke="${p.teal}" stroke-width="3"/>
      <!-- Iris + Pupil + Ciliary + Crystalline Lens -->
      <rect x="148" y="128" width="8" height="32" rx="3" fill="${p.violet}" />
      <rect x="148" y="200" width="8" height="32" rx="3" fill="${p.violet}" />
      <rect x="172" y="114" width="14" height="20" rx="4" fill="${p.rose}" />
      <rect x="172" y="226" width="14" height="20" rx="4" fill="${p.rose}" />
      <ellipse cx="179" cy="180" rx="11" ry="44" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="2"/>
      <!-- Retina Arc + Optic Nerve -->
      <path d="M 278 100 A 84 84 0 0 1 278 260" fill="none" stroke="${p.emerald}" stroke-width="4"/>
      <path d="M 304 168 L 352 158 M 304 192 L 352 182" stroke="${p.teal}" stroke-width="5" stroke-linecap="round"/>
      <!-- Light Rays converging on Retina -->
      <line x1="55" y1="154" x2="179" y2="154" stroke="${p.amber}" stroke-width="2" marker-end="url(#eyeRay_${suf})"/>
      <line x1="55" y1="206" x2="179" y2="206" stroke="${p.amber}" stroke-width="2" marker-end="url(#eyeRay_${suf})"/>
      <line x1="179" y1="154" x2="294" y2="180" stroke="${p.emerald}" stroke-width="2.2"/>
      <line x1="179" y1="206" x2="294" y2="180" stroke="${p.emerald}" stroke-width="2.2"/>
      <circle cx="294" cy="180" r="4.5" fill="${p.rose}"/>

      <!-- Callouts around eyeball -->
      <text x="42" y="88" font-size="9.8" font-weight="800" fill="${p.teal}">${esc(hi ? '1. कॉर्निया (Cornea):' : '1. Cornea:')}</text>
      <text x="42" y="102" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'अधिकांश अपवर्तन यहीँ!' : 'Max light refraction!')}</text>
      <text x="42" y="256" font-size="9.8" font-weight="800" fill="${p.violet}">${esc(hi ? '2. आइरिस & पुतली:' : '2. Iris & Pupil:')}</text>
      <text x="42" y="270" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'पुतली साइज / प्रकाश मात्रा' : 'Controls light intake')}</text>

      <text x="364" y="88" font-size="9.8" font-weight="800" fill="${p.amber}">${esc(hi ? '3. अभिनेत्र उत्तल लेंस:' : '3. Crystalline Lens:')}</text>
      <text x="364" y="102" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'रेशेदार जेलीवत (f बदले)' : 'Fibrous jelly, adjusts f')}</text>
      <text x="364" y="132" font-size="9.8" font-weight="800" fill="${p.emerald}">${esc(hi ? '4. रेटिना (दृष्टिपटल):' : '4. Retina (Screen):')}</text>
      <text x="364" y="146" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'वास्तविक व उल्टा प्रतिबिंब!' : 'Real + Inverted image!')}</text>
      <text x="364" y="176" font-size="9.8" font-weight="800" fill="${p.teal}">${esc(hi ? '5. दृक् तंत्रिका (Optic Nerve):' : '5. Optic Nerve:')}</text>
      <text x="364" y="190" font-size="9" font-weight="600" fill="${p.text}">${esc(hi ? 'विद्युत सिग्नल → मस्तिष्क सीधा करे' : 'Electrical impulse → Brain')}</text>
      <text x="364" y="220" font-size="9.8" font-weight="800" fill="${p.cyan}">${esc(hi ? '6. नेत्र गोलक व्यास:' : '6. Eyeball Diameter:')}</text>
      <text x="364" y="234" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? '~ 2.3 cm (काचाभ व नेत्रोद द्रव)' : '~ 2.3 cm (Aqueous + Vitreous)')}</text>
      <text x="364" y="264" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? '7. पक्ष्माभी पेशी → मोटा/पतला लेंस' : '7. Ciliary Muscles adjust curvature')}</text>

      <!-- Right Panel: Accommodation Table + Cataract + Eye Donation -->
      <rect x="522" y="54" width="278" height="236" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.3"/>
      <text x="661" y="76" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'मोतियाबिंद व नेत्र दान (NCERT बॉक्स)' : 'Cataract & Eye Donation High-Yield')}</text>
      <text x="534" y="102" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? '• मोतियाबिंद (Cataract): वृद्धावस्था में लेंस' : '• Cataract: Crystalline lens turns')}</text>
      <text x="542" y="118" font-size="9.5" font-weight="600" fill="${p.text}">${esc(hi ? 'दूधिया व धुंधला → शल्य चिकित्सा संभव!' : 'milky/cloudy in old age → Surgery')}</text>
      <text x="534" y="144" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? '• 2 आँखें: क्यों? (पृ. 180 बॉक्स)' : '• Why 2 Eyes? (p.180 Box):')}</text>
      <text x="542" y="160" font-size="9.5" font-weight="600" fill="${p.text}">${esc(hi ? '1 आँख = 150° दृष्टि | 2 आँखें = 180° + 3D गहराई!' : '1 eye: 150° | 2 eyes: 180° + 3D depth')}</text>
      <text x="534" y="188" font-size="9.8" font-weight="700" fill="${p.teal}">${esc(hi ? '• नेत्र दान मुख्य तथ्य (Box p.182):' : '• Eye Donation Facts (p.182):')}</text>
      <text x="542" y="205" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? 'मृत्यु के 4–6 घंटे के भीतर निकालते हैं (10–15 min)' : 'Removed within 4–6 hrs of death (10–15 min)')}</text>
      <text x="542" y="222" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? '1 जोड़ा दान → 4 कॉर्निया-अंधों को रोशनी!' : '1 donated pair can cure up to 4 people!')}</text>
      <text x="542" y="239" font-size="9.3" font-weight="600" fill="${p.rose}">${esc(hi ? 'अयोग्य रोग: AIDS, Hep B/C, रेबीज, टिटनेस,' : 'Excluded: AIDS, Hep B/C, Rabies, Tetanus,')}</text>
      <text x="542" y="255" font-size="9.3" font-weight="600" fill="${p.rose}">${esc(hi ? 'हैजा, तानिकाशोथ, तीव्र ल्यूकीमिया! चश्मे वाले योग्य!' : 'Cholera, Meningitis (Spectacle wearers CAN!)')}</text>

      <!-- Bottom Strip: Distant Object (Ciliary Relaxed) vs Nearby Object (Ciliary Contracted) -->
      <rect x="20" y="302" width="382" height="100" rx="10" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.3"/>
      <text x="211" y="322" text-anchor="middle" font-size="11" font-weight="800" fill="${p.emerald}">${esc(hi ? 'दूर की वस्तु (∞) देखने में समंजन:' : 'Viewing DISTANT Object (∞):')}</text>
      <ellipse cx="75" cy="358" rx="6" ry="30" fill="${p.bg}" stroke="${p.emerald}" stroke-width="2.5"/>
      <text x="110" y="346" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'पक्ष्माभी पेशियाँ शिथिल (Relaxed)' : 'Ciliary muscles RELAXED')}</text>
      <text x="110" y="366" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'लेंस पतला → वक्रता कम → फोकस दूरी f बढ़ी (f↑)' : 'Lens becomes THIN → Focal length INCREASES')}</text>
      <text x="110" y="386" font-size="9.5" font-weight="800" fill="${p.emerald}">${esc(hi ? 'सामान्य दूर बिंदु = अनंत (∞)' : 'Normal Far Point = Infinity (∞)')}</text>

      <rect x="418" y="302" width="382" height="100" rx="10" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.3"/>
      <text x="609" y="322" text-anchor="middle" font-size="11" font-weight="800" fill="${p.violet}">${esc(hi ? 'पास की वस्तु (25 cm) देखने में समंजन (PYQ!):' : 'Viewing NEARBY Object (25 cm — PYQ!):')}</text>
      <ellipse cx="472" cy="358" rx="13" ry="27" fill="${p.bg}" stroke="${p.violet}" stroke-width="2.5"/>
      <text x="506" y="346" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'पक्ष्माभी पेशियाँ संकुचित (Contracted)' : 'Ciliary muscles CONTRACTED')}</text>
      <text x="506" y="366" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'लेंस मोटा (वक्रता ↑) → फोकस दूरी f घटी (f↓)!' : 'Lens becomes THICKER → Focal length DECREASES!')}</text>
      <text x="506" y="386" font-size="9.5" font-weight="800" fill="${p.violet}">${esc(hi ? 'सामान्य निकट बिंदु = 25 cm (सुस्पष्ट अल्पतम दूरी)' : 'Normal Near Point = 25 cm (Least distance of vision)')}</text>
    </svg>`;
  }

  if (key === 'c10-ch10-defects-correction-diagram') {
    const title = hi ? 'दृष्टि के तीन मुख्य अपवर्तक दोष एवं लेंस संशोधन (चित्र 10.2–10.3 + द्विफोकसी)' : 'Three Refractive Vision Defects & Optical Corrections (Fig 10.2–10.3)';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Col 1: Myopia -->
      <rect x="20" y="54" width="250" height="346" rx="12" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.4"/>
      <text x="145" y="76" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.rose}">${esc(hi ? '1. निकट-दृष्टि दोष (Myopia)' : '1. Myopia (Near-sightedness)')}</text>
      <text x="145" y="94" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(hi ? 'पास साफ दिखे, दूर की वस्तु धुंधली!' : 'Near CLEAR, Far BLURRY (< ∞)!')}</text>
      <!-- Faulty Eyeball Ray (Image BEFORE Retina) -->
      <rect x="34" y="106" width="222" height="82" rx="8" fill="${p.bg}" stroke="${p.border}"/>
      <ellipse cx="170" cy="147" rx="46" ry="30" fill="none" stroke="${p.muted}" stroke-width="2"/>
      <ellipse cx="132" cy="147" rx="5" ry="18" fill="${p.amberBg}" stroke="${p.amber}"/>
      <line x1="44" y1="135" x2="132" y2="135" stroke="${p.rose}" stroke-width="1.8"/>
      <line x1="44" y1="159" x2="132" y2="159" stroke="${p.rose}" stroke-width="1.8"/>
      <line x1="132" y1="135" x2="190" y2="147" stroke="${p.rose}" stroke-width="1.8"/>
      <line x1="132" y1="159" x2="190" y2="147" stroke="${p.rose}" stroke-width="1.8"/>
      <circle cx="190" cy="147" r="4" fill="${p.rose}"/>
      <text x="145" y="182" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.rose}">${esc(hi ? 'दोष: प्रतिबिंब रेटिना के सामने बना!' : 'Defect: Focus IN FRONT of Retina!')}</text>
      <!-- Corrected with Concave Lens -->
      <rect x="34" y="198" width="222" height="82" rx="8" fill="${p.bg}" stroke="${p.emerald}"/>
      <!-- Concave shape -->
      <path d="M 88 122 Q 96 147 88 172 L 100 172 Q 92 147 100 122 Z" transform="translate(0,92)" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.5"/>
      <ellipse cx="176" cy="239" rx="46" ry="30" fill="none" stroke="${p.muted}" stroke-width="2"/>
      <ellipse cx="136" cy="239" rx="5" ry="18" fill="${p.amberBg}" stroke="${p.amber}"/>
      <line x1="44" y1="227" x2="94" y2="227" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="44" y1="251" x2="94" y2="251" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="94" y1="227" x2="136" y2="223" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="94" y1="251" x2="136" y2="255" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="136" y1="223" x2="222" y2="239" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="136" y1="255" x2="222" y2="239" stroke="${p.emerald}" stroke-width="1.8"/>
      <circle cx="222" cy="239" r="4" fill="${p.emerald}"/>
      <text x="145" y="274" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.emerald}">${esc(hi ? 'उपचार: अवतल लेंस (Concave, -ve D)' : 'Fix: Concave Lens (-ve D) on Retina!')}</text>
      <text x="32" y="304" font-size="9.3" font-weight="700" fill="${p.text}">${esc(hi ? 'कारण 1: नेत्र लेंस की अत्यधिक वक्रता' : 'Cause 1: Excessive lens curvature')}</text>
      <text x="32" y="322" font-size="9.3" font-weight="700" fill="${p.text}">${esc(hi ? 'कारण 2: नेत्र गोलक का लंबा हो जाना' : 'Cause 2: Elongation of eyeball')}</text>
      <text x="32" y="346" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? 'आंकिक (Ex Q6): दूर बिंदु 80 cm (-0.8 m)' : 'Numerical (Q6): Far pt = 80 cm (-0.8 m)')}</text>
      <text x="32" y="365" font-size="9.8" font-weight="900" fill="${p.emerald}">${esc(hi ? 'f = -0.8 m ⇒ P = 1/-0.8 = -1.25 D' : 'f = -0.8 m ⇒ P = 1/-0.8 = -1.25 D')}</text>
      <text x="32" y="385" font-size="8.8" font-weight="700" fill="${p.muted}">${esc(hi ? 'रट्टा: Ni-Ka-T = अव-त-ल (-ve शक्ति)!' : 'Rule: Myopia always takes Negative -D!')}</text>

      <!-- Col 2: Hypermetropia -->
      <rect x="285" y="54" width="250" height="346" rx="12" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.4"/>
      <text x="410" y="76" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.cyan}">${esc(hi ? '2. दीर्घ-दृष्टि दोष (Hypermetropia)' : '2. Hypermetropia (Far-sightedness)')}</text>
      <text x="410" y="94" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(hi ? 'दूर साफ दिखे, पास की वस्तु धुंधली (>25cm)!' : 'Far CLEAR, Near BLURRY (>25 cm)!')}</text>
      <rect x="299" y="106" width="222" height="82" rx="8" fill="${p.bg}" stroke="${p.border}"/>
      <ellipse cx="426" cy="147" rx="44" ry="30" fill="none" stroke="${p.muted}" stroke-width="2"/>
      <ellipse cx="390" cy="147" rx="5" ry="18" fill="${p.amberBg}" stroke="${p.amber}"/>
      <circle cx="316" cy="147" r="3" fill="${p.amber}"/>
      <line x1="316" y1="147" x2="390" y2="132" stroke="${p.rose}" stroke-width="1.8"/>
      <line x1="316" y1="147" x2="390" y2="162" stroke="${p.rose}" stroke-width="1.8"/>
      <line x1="390" y1="132" x2="495" y2="147" stroke="${p.rose}" stroke-width="1.8"/>
      <line x1="390" y1="162" x2="495" y2="147" stroke="${p.rose}" stroke-width="1.8"/>
      <circle cx="495" cy="147" r="4" fill="${p.rose}"/>
      <text x="410" y="182" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.rose}">${esc(hi ? 'दोष: प्रतिबिंब रेटिना के पीछे बना!' : 'Defect: Focus BEHIND Retina!')}</text>

      <rect x="299" y="198" width="222" height="82" rx="8" fill="${p.bg}" stroke="${p.emerald}"/>
      <ellipse cx="362" cy="239" rx="6" ry="22" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.5"/>
      <ellipse cx="436" cy="239" rx="44" ry="30" fill="none" stroke="${p.muted}" stroke-width="2"/>
      <ellipse cx="400" cy="239" rx="5" ry="18" fill="${p.amberBg}" stroke="${p.amber}"/>
      <circle cx="312" cy="239" r="3" fill="${p.amber}"/>
      <line x1="312" y1="239" x2="362" y2="221" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="312" y1="239" x2="362" y2="257" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="362" y1="221" x2="400" y2="226" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="362" y1="257" x2="400" y2="252" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="400" y1="226" x2="480" y2="239" stroke="${p.emerald}" stroke-width="1.8"/>
      <line x1="400" y1="252" x2="480" y2="239" stroke="${p.emerald}" stroke-width="1.8"/>
      <circle cx="480" cy="239" r="4" fill="${p.emerald}"/>
      <text x="410" y="274" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.emerald}">${esc(hi ? 'उपचार: उत्तल लेंस (Convex, +ve D)' : 'Fix: Convex Lens (+ve D) on Retina!')}</text>
      <text x="297" y="304" font-size="9.3" font-weight="700" fill="${p.text}">${esc(hi ? 'कारण 1: नेत्र लेंस की फोकस दूरी अत्यधिक' : 'Cause 1: Focal length too long')}</text>
      <text x="297" y="322" font-size="9.3" font-weight="700" fill="${p.text}">${esc(hi ? 'कारण 2: नेत्र गोलक का छोटा हो जाना' : 'Cause 2: Eyeball becomes too small')}</text>
      <text x="297" y="346" font-size="9.5" font-weight="800" fill="${p.cyan}">${esc(hi ? 'आंकिक (Ex Q7): निकट बिंदु 1m (v=-100cm)' : 'Numerical (Q7): u=-25cm, v=-100cm')}</text>
      <text x="297" y="365" font-size="9.8" font-weight="900" fill="${p.emerald}">${esc(hi ? '1/f = 1/-100 - 1/-25 ⇒ f=+1/3m ⇒ +3.0 D' : '1/f = 3/100 ⇒ f=+1/3 m ⇒ P=+3.0 D')}</text>
      <text x="297" y="385" font-size="8.8" font-weight="700" fill="${p.muted}">${esc(hi ? 'रट्टा: दूर-उत्तल (+ve शक्ति, चित्र 10.3c)!' : 'Hypermetropia always takes Positive +D!')}</text>

      <!-- Col 3: Presbyopia & Bifocal Lens -->
      <rect x="550" y="54" width="250" height="346" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.4"/>
      <text x="675" y="76" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.amber}">${esc(hi ? '3. जरा-दूरदृष्टिता (Presbyopia)' : '3. Presbyopia (Age-Related)')}</text>
      <text x="675" y="94" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(hi ? 'आयु बढ़ने से समंजन क्षमता घट जाना!' : 'Power of accommodation decreases with age')}</text>
      <!-- Bifocal Spectacle Diagram -->
      <rect x="568" y="110" width="214" height="122" rx="10" fill="${p.bg}" stroke="${p.amber}"/>
      <rect x="615" y="128" width="120" height="84" rx="22" fill="${p.cyanBg}" stroke="${p.amber}" stroke-width="2.5"/>
      <path d="M 615 174 Q 675 162 735 174 L 735 190 Q 735 212 713 212 L 637 212 Q 615 212 615 190 Z" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="2"/>
      <text x="675" y="154" text-anchor="middle" font-size="10" font-weight="900" fill="${p.cyan}">${esc(hi ? 'ऊपर: अवतल (दूर दृष्टि)' : 'TOP: Concave (Distant)')}</text>
      <text x="675" y="196" text-anchor="middle" font-size="10" font-weight="900" fill="${p.emerald}">${esc(hi ? 'नीचे: उत्तल (पढ़ने/पास)' : 'BOTTOM: Convex (Near)')}</text>

      <text x="562" y="258" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? 'दो मुख्य कारण (NCERT 10.2c):' : 'Two Core Causes (NCERT 10.2c):')}</text>
      <text x="562" y="276" font-size="9.2" font-weight="600" fill="${p.text}">${esc(hi ? '1. पक्ष्माभी पेशियों का धीरे-धीरे दुर्बल होना' : '1. Gradual weakening of ciliary muscles')}</text>
      <text x="562" y="294" font-size="9.2" font-weight="600" fill="${p.text}">${esc(hi ? '2. क्रिस्टलीय लेंस के लचीलेपन में कमी' : '2. Diminishing flexibility of eye lens')}</text>
      <text x="562" y="320" font-size="9.5" font-weight="800" fill="${p.teal}">${esc(hi ? 'समाधान: द्विफोकसी (Bi-focal) लेंस!' : 'Remedy: Bi-focal + Contact/Surgery!')}</text>
      <text x="562" y="340" font-size="9.2" font-weight="700" fill="${p.text}">${esc(hi ? 'Ex Q5: -5.5 D (दूर) → f = -0.18 m' : 'Ex Q5: Dist (-5.5D) → f = -0.18 m')}</text>
      <text x="562" y="358" font-size="9.2" font-weight="700" fill="${p.text}">${esc(hi ? 'Ex Q5: +1.5 D (पास) → f = +0.67 m' : 'Ex Q5: Near (+1.5D) → f = +0.67 m')}</text>
      <text x="562" y="382" font-size="8.8" font-weight="700" fill="${p.muted}">${esc(hi ? 'आजकल कॉन्टेक्ट लेंस / शल्य हस्तक्षेप भी' : 'Also corrected via contact lenses / surgery')}</text>
    </svg>`;
  }

  if (key === 'c10-ch10-prism-rainbow-scattering-diagram') {
    const title = hi ? 'प्रिज़्म विक्षेपण (VIBGYOR), इंद्रधनुष (चित्र 10.8) व वायुमंडलीय अपवर्तन/प्रकीर्णन' : 'Prism Dispersion, Newton Recombination, Rainbow & Rayleigh Scattering';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left Top: Glass Prism Dispersion & Bending Toward Base -->
      <rect x="20" y="54" width="380" height="190" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="210" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="${p.cyan}">${esc(hi ? 'प्रिज़्म अपवर्तन (∠A) एवं श्वेत प्रकाश विक्षेपण' : 'Prism Refraction (∠A, ∠D) & VIBGYOR Dispersion')}</text>
      <!-- Prism Triangle -->
      <polygon points="200,90 135,198 265,198" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="2.2"/>
      <text x="200" y="87" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber}">A</text>
      <!-- Incident White Light Ray -->
      <line x1="48" y1="158" x2="165" y2="148" stroke="${p.text}" stroke-width="2.6"/>
      <line x1="165" y1="148" x2="235" y2="152" stroke="${p.amber}" stroke-width="1.8" stroke-dasharray="3,2"/>
      <!-- VIBGYOR Fan inside & out -->
      <line x1="165" y1="148" x2="232" y2="145" stroke="#EF4444" stroke-width="2"/>
      <line x1="165" y1="148" x2="242" y2="166" stroke="#8B5CF6" stroke-width="2"/>
      <line x1="232" y1="145" x2="365" y2="152" stroke="#EF4444" stroke-width="2.4"/>
      <line x1="236" y1="153" x2="365" y2="170" stroke="#EAB308" stroke-width="2"/>
      <line x1="239" y1="160" x2="365" y2="186" stroke="#22C55E" stroke-width="2"/>
      <line x1="242" y1="166" x2="365" y2="205" stroke="#8B5CF6" stroke-width="2.4"/>
      <text x="52" y="144" font-size="9" font-weight="800" fill="${p.text}">${esc(hi ? 'श्वेत प्रकाश (PE)' : 'White Beam PE')}</text>
      <text x="328" y="146" font-size="9.5" font-weight="900" fill="#EF4444">${esc(hi ? 'R (न्यूनतम मुड़ाव)' : 'Red (Min bend)')}</text>
      <text x="320" y="216" font-size="9.5" font-weight="900" fill="${p.violet}">${esc(hi ? 'V (सर्वाधिक विचलन)' : 'Violet (Max bend)')}</text>
      <text x="210" y="232" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.teal}">${esc(hi ? 'प्रिज़्म में किरण सदैव आधार की ओर मुड़ती है • ∠i + ∠e = ∠A + ∠D' : 'Ray bends TOWARD prism base • ∠i + ∠e = ∠A + ∠D')}</text>

      <!-- Right Top: Newton Two Inverted Prisms + Raindrop Rainbow -->
      <rect x="414" y="54" width="386" height="190" rx="12" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.3"/>
      <text x="607" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="${p.emerald}">${esc(hi ? 'न्यूटन द्वि-प्रिज़्म पुनर्योजन व वर्षा-बूंद इंद्रधनुष (चित्र 10.6–10.8)' : 'Newton 2-Prism Recombination & Raindrop Rainbow')}</text>
      <!-- Two Prisms -->
      <polygon points="462,92 436,144 488,144" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.8"/>
      <polygon points="502,92 554,92 528,144" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.8"/>
      <line x1="422" y1="120" x2="450" y2="118" stroke="${p.text}" stroke-width="2.2"/>
      <line x1="472" y1="115" x2="514" y2="108" stroke="#EF4444" stroke-width="1.8"/>
      <line x1="478" y1="125" x2="518" y2="128" stroke="#8B5CF6" stroke-width="1.8"/>
      <line x1="540" y1="116" x2="584" y2="116" stroke="${p.text}" stroke-width="2.6"/>
      <text x="588" y="120" font-size="9" font-weight="900" fill="${p.amber}">${esc(hi ? 'पुनः श्वेत!' : 'White again!')}</text>

      <!-- Raindrop Circle -->
      <circle cx="715" cy="145" r="42" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="2.2"/>
      <line x1="628" y1="125" x2="679" y2="125" stroke="${p.amber}" stroke-width="2"/>
      <line x1="679" y1="125" x2="754" y2="136" stroke="#EF4444" stroke-width="1.6"/>
      <line x1="679" y1="125" x2="752" y2="152" stroke="#8B5CF6" stroke-width="1.6"/>
      <line x1="754" y1="136" x2="690" y2="178" stroke="#EF4444" stroke-width="1.6"/>
      <line x1="752" y1="152" x2="682" y2="174" stroke="#8B5CF6" stroke-width="1.6"/>
      <line x1="690" y1="178" x2="640" y2="210" stroke="#EF4444" stroke-width="2"/>
      <line x1="682" y1="174" x2="625" y2="200" stroke="#8B5CF6" stroke-width="2"/>
      <text x="612" y="160" font-size="8.6" font-weight="700" fill="${p.text}">${esc(hi ? '1.अपवर्तन+विक्षेपण' : '1.Refract+Disperse')}</text>
      <text x="612" y="176" font-size="8.6" font-weight="700" fill="${p.text}">${esc(hi ? '2.आंतरिक परावर्तन' : '2.Internal Refl.')}</text>
      <text x="607" y="232" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.emerald}">${esc(hi ? 'इंद्रधनुष सदैव सूर्य की विपरीत दिशा में बनता है (3-चरण)' : 'Rainbow ALWAYS forms OPPOSITE Sun (Refract+Disperse+Int.Refl+Refract)')}</text>

      <!-- Bottom Span: Atmospheric Refraction & Rayleigh Scattering -->
      <rect x="20" y="258" width="380" height="142" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.3"/>
      <text x="210" y="279" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber}">${esc(hi ? '10.5 वायुमंडलीय अपवर्तन (चित्र 10.9–10.10)' : '10.5 Atmospheric Refraction (Fig 10.9–10.10)')}</text>
      <text x="34" y="302" font-size="9.6" font-weight="700" fill="${p.text}">${esc(hi ? '• तारे टिमटिमाते क्यों? → बिंदु-स्रोत प्रकाश वायु की अस्थिर' : '• Why Stars Twinkle? → Point sources refracted by')}</text>
      <text x="42" y="318" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? 'परतों में मुड़कर मात्रा बदलती है; तारा थोड़ा ऊँचा दिखता है।' : 'changing air layers (refractive index); Planets = zero avg!')}</text>
      <text x="34" y="340" font-size="9.6" font-weight="700" fill="${p.rose}">${esc(hi ? '• ग्रह क्यों नहीं टिमटिमाते? → विस्तृत स्रोत (औसत शून्य!)' : '• Advance Sunrise & Delayed Sunset (Fig 10.10):')}</text>
      <text x="34" y="362" font-size="9.6" font-weight="800" fill="${p.emerald}">${esc(hi ? '• अग्रिम सूर्योदय (+2 min) + विलंबित सूर्यास्त (+2 min)' : 'Sun seen 2 min BEFORE actual sunrise & 2 min AFTER sunset')}</text>
      <text x="34" y="382" font-size="9.5" font-weight="900" fill="${p.amber}">${esc(hi ? '⇒ दिन की आभासी अवधि 4 मिनट बढ़ी + चपटी चक्रिका!' : '⇒ +4 minutes apparent daylight & flattened solar disc!')}</text>

      <rect x="414" y="258" width="386" height="142" rx="12" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.3"/>
      <text x="607" y="279" text-anchor="middle" font-size="11" font-weight="800" fill="${p.rose}">${esc(hi ? '10.6 प्रकाश प्रकीर्णन व टिंडल प्रभाव (Rayleigh Rule)' : '10.6 Scattering, Tyndall Effect & Sky Colours')}</text>
      <text x="428" y="302" font-size="9.6" font-weight="700" fill="${p.text}">${esc(hi ? '• टिंडल प्रभाव: धुआँ/जंगल के कुहासे में कोलॉइडी कणों द्वारा' : '• Tyndall Effect: Colloidal particles make beam visible;')}</text>
      <text x="436" y="318" font-size="9.3" font-weight="600" fill="${p.text}">${esc(hi ? 'प्रकीर्णन → अत्यंत सूक्ष्म कण नीला, बहुत बड़े कण श्वेत दिखाएँ।' : 'Very fine particles scatter BLUE; very large look WHITE.')}</text>
      <text x="428" y="342" font-size="9.6" font-weight="800" fill="${p.cyan}">${esc(hi ? '• लाल λ ≈ 1.8× नीला! अतः वायु अणु नीला अधिक बिखेरते → नीला आकाश' : '• Red λ ≈ 1.8× Blue! Air molecules scatter Blue → Blue Sky')}</text>
      <text x="428" y="364" font-size="9.6" font-weight="800" fill="${p.rose}">${esc(hi ? '• खतरे के संकेत लाल: कोहरे/धुएँ से सबसे कम प्रकीर्ण (दूर से साफ)' : '• Danger Signals RED: Least scattered by fog/smoke!')}</text>
      <text x="428" y="384" font-size="9.6" font-weight="900" fill="${p.amber}">${esc(hi ? '• अंतरिक्ष यात्री को आकाश काला दिखता (वायुमंडल व प्रकीर्णन नहीं)!' : '• Astronaut sees BLACK sky (No atmosphere → No scattering!)')}</text>
    </svg>`;
  }

  return '';
}
