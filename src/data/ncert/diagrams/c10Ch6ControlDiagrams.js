/**
 * Class 10 NCERT Science — Chapter 6: Control and Coordination (नियंत्रण एवं समन्वय)
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

export function renderC10Ch6ControlDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';
  const suf = `ch6_${theme}`;

  if (key === 'c10-ch6-blueprint-mindmap') {
    const title = hi ? 'अध्याय 6 मानचित्र: नियंत्रण एवं समन्वय (NCERT 2026–27)' : 'Chapter 6 Master Map: Control and Coordination';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Hub -->
      <rect x="240" y="58" width="340" height="58" rx="12" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.5"/>
      <text x="410" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="${p.cyan}">${esc(hi ? 'सजीवों में उद्दीपन के प्रति नियंत्रित अनुक्रिया' : 'Stimulus → Controlled Living Response')}</text>
      <text x="410" y="102" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'जंतु: तंत्रिका तंत्र (विद्युत आवेग) + हार्मोन | पादप: वैद्युत-रसायन व वृद्धि हार्मोन' : 'Animals: Nervous System (fast electrical) + Endocrine | Plants: Turgor & Hormones')}</text>

      ${[
        {
          x: 20, y: 132, w: 380, h: 128, c: p.cyan, bg: p.cyanBg,
          t: hi ? '6.1 न्यूरॉन, सिनेप्स व प्रतिवर्ती चाप' : '6.1 Neuron Path, Synapse & Reflex Arc',
          l1: hi ? '• क्रम: द्रुमिका → कोशिकाकाय → तंत्रिकाक्ष → छोर (रसायन)' : '• Flow: Dendrite → Cell Body → Axon → Axon End (Chemical)',
          l2: hi ? '• सिनेप्स: विद्युत आवेग → रासायनिक संकेत → अगला न्यूरॉन' : '• Synapse Gap: Electrical signal turns chemical to cross!',
          l3: hi ? '• प्रतिवर्ती चाप मेरुरज्जु में बने (तेज़ रक्षा, मस्तिष्क सूचना पाए)' : '• Reflex Arc forms in Spinal Cord (fast protective loop)',
        },
        {
          x: 420, y: 132, w: 380, h: 128, c: p.violet, bg: p.violetBg,
          t: hi ? '6.1.2 मानव मस्तिष्क के 3 मुख्य भाग (चित्र 6.3)' : '6.1.2 Three Human Brain Regions (Fig 6.3)',
          l1: hi ? '• अग्रमस्तिष्क (प्रमस्तिष्क): मुख्य सोच, स्मृति, भूख केंद्र, ऐच्छिक' : '• Forebrain: Main thinking part, Hearing/Smell/Sight, Hunger',
          l2: hi ? '• पश्च — अनुमस्तिष्क (Cerebellum): संतुलन, मुद्रा, साइकिल चलाना' : '• Hind — Cerebellum: Posture, Balance, Riding Bicycle, Straight Walk',
          l3: hi ? '• पश्च — मेडुला: रक्तदाब, लार आना, वमन (अनैच्छिक) • खोपड़ी/द्रव' : '• Hind — Medulla: BP, Salivation, Vomiting (Involuntary) • Fluid Box',
        },
        {
          x: 20, y: 274, w: 380, h: 128, c: p.emerald, bg: p.emeraldBg,
          t: hi ? '6.2 पादप समन्वय व 4 पादप हार्मोन (चित्र 6.4–6.6)' : '6.2 Plant Movements & 4 Plant Hormones',
          l1: hi ? '• छुई-मुई (वृद्धि-मुक्त): कोशिकाओं में जल मात्रा बदल झुकती है' : '• Mimosa (Growth-independent): Leaves fold via water-amount shift',
          l2: hi ? '• अनुवर्तन: प्रकाश (+प्ररोह), गुरुत्व (+जड़), जल, रसायन (परागनली)' : '• Tropisms: Photo (+shoot), Geo (+root), Hydro, Chemo (Pollen tube)',
          l3: hi ? '• वर्धक: ऑक्सिन (छाया ओर), जिब्बेरेलिन, साइटोकाइनिन | रोधक: ABA' : '• Promoters: Auxin (shade), Gibberellin, Cytokinin | Inhibitor: ABA',
        },
        {
          x: 420, y: 274, w: 380, h: 128, c: p.amber, bg: p.amberBg,
          t: hi ? '6.3 जंतु अंतःस्रावी ग्रंथियाँ व पुनर्भरण (सारणी 6.1)' : '6.3 Endocrine Glands & Feedback Control',
          l1: hi ? '• पीयूष: वृद्धि हार्मोन (कमी→बौनापन) | हाइपोथैलेमस: मोचक कारक' : '• Pituitary: Growth Hormone (dwarfism) | Hypothalamus: Releasing',
          l2: hi ? '• थाइरॉइड: थाइरॉक्सिन (आयोडीन अनिवार्य; कमी→गॉयटर/घेंघा)' : '• Thyroid: Thyroxine (Iodine needed -> Goitre; carb/fat/protein metab)',
          l3: hi ? '• अधिवृक्क: एड्रीनलीन | अग्न्याशय: इंसुलिन (पुनर्भरण शर्करा)' : '• Adrenal: Adrenaline Fight/Flight | Pancreas: Insulin Feedback',
        },
      ].map((b) => `
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="12" fill="${p.cardAlt}" stroke="${b.c}" stroke-width="1.3"/>
        <rect x="${b.x + 10}" y="${b.y + 8}" width="${b.w - 20}" height="26" rx="7" fill="${b.bg}"/>
        <text x="${b.x + 18}" y="${b.y + 25}" font-size="11.5" font-weight="800" fill="${b.c}">${esc(b.t)}</text>
        <text x="${b.x + 14}" y="${b.y + 54}" font-size="10.2" font-weight="700" fill="${p.text}">${esc(b.l1)}</text>
        <text x="${b.x + 14}" y="${b.y + 78}" font-size="10.2" font-weight="700" fill="${p.text}">${esc(b.l2)}</text>
        <text x="${b.x + 14}" y="${b.y + 102}" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(b.l3)}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c10-ch6-neuron-reflex-brain-diagram') {
    const title = hi ? 'न्यूरॉन आवेग मार्ग (चित्र 6.1), प्रतिवर्ती चाप (चित्र 6.2) एवं मानव मस्तिष्क के केंद्र (चित्र 6.3)' : 'Neuron Signal Flow (Fig 6.1), Reflex Arc (Fig 6.2) & Brain Control Centres (Fig 6.3)';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_c6_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.cyan}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Band: Neuron Signal Sequence -->
      <rect x="20" y="56" width="780" height="106" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
      <text x="36" y="76" font-size="11.5" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 6.1: तंत्रिका आवेग एकदिशीय संवहन (Group D Shifts 1, 4, 10, 11, 30)' : 'Fig 6.1: Unidirectional Neuron Impulse Chain (Electrical → Chemical at Synapse)')}</text>
      ${[
        { x: 34, w: 140, t: hi ? '1. द्रुमिका (Dendrite)' : '1. Dendrite', s: hi ? 'सूचना उपार्जित (विद्युत आवेग)' : 'Receives stimulus', c: p.cyan },
        { x: 196, w: 130, t: hi ? '2. कोशिकाकाय' : '2. Cell Body', s: hi ? 'केंद्रक युक्त भाग' : 'Soma + Nucleus', c: p.teal },
        { x: 348, w: 136, t: hi ? '3. तंत्रिकाक्ष (Axon)' : '3. Longest Axon', s: hi ? 'कोशिकाकाय से दूर ले जाए' : 'Impulse away', c: p.emerald },
        { x: 506, w: 130, t: hi ? '4. अंतिम सिरा (सिनेप्स)' : '4. Nerve Ending', s: hi ? 'रसायन विमोचन → दरार' : 'Releases neurochem', c: p.amber },
        { x: 658, w: 128, t: hi ? '5. अगली कोशिका/पेशी' : '5. Next / Muscle', s: hi ? 'तंत्रिका-पेशी संधि' : 'Actin shape shift', c: p.rose },
      ].map((st, idx) => `
        <rect x="${st.x}" y="88" width="${st.w}" height="62" rx="8" fill="${p.card}" stroke="${st.c}"/>
        <text x="${st.x + st.w / 2}" y="112" text-anchor="middle" font-size="10.5" font-weight="900" fill="${st.c}">${esc(st.t)}</text>
        <text x="${st.x + st.w / 2}" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.muted}">${esc(st.s)}</text>
        ${idx < 4 ? `<line x1="${st.x + st.w}" y1="119" x2="${st.x + st.w + 22}" y2="119" stroke="${p.cyan}" stroke-width="2" marker-end="url(#arr_c6_${suf})"/>` : ''}
      `).join('')}

      <!-- Bottom Left: Fig 6.2 Reflex Arc -->
      <rect x="20" y="174" width="380" height="238" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
      <text x="210" y="196" text-anchor="middle" font-size="12" font-weight="800" fill="${p.amber}">${esc(hi ? 'चित्र 6.2: प्रतिवर्ती चाप (मेरुरज्जु में बनता)' : 'Fig 6.2: Spinal Reflex Arc (Rapid Defense)')}</text>
      <text x="36" y="220" font-size="10.5" font-weight="800" fill="${p.rose}">1. ${esc(hi ? 'ग्राही (त्वचा में ऊष्मा/दर्द) + ज्ञानेंद्रियाँ:' : 'Receptors in Sense Organs (Gustatory=Taste, Olfactory=Smell):')}</text>
      <text x="36" y="242" font-size="10.5" font-weight="700" fill="${p.text}">2. ${esc(hi ? 'संवेदी तंत्रिका कोशिका → मेरुरज्जु (प्रतिसारण न्यूरॉन)' : 'Sensory Neuron → Spinal Cord Relay Neuron')}</text>
      <text x="36" y="264" font-size="10.5" font-weight="800" fill="${p.emerald}">3. ${esc(hi ? 'प्रेरक तंत्रिका कोशिका → कार्यकर (भुजा पेशी झटके से पीछे!)' : 'Motor Neuron → Effector Arm Muscle withdraws rapidly!')}</text>
      <text x="36" y="286" font-size="10.2" font-weight="700" fill="${p.cyan}">4. ${esc(hi ? 'साथ ही संदेश मस्तिष्क तक भी जाता (सूचना व स्मृति हेतु)' : 'Parallel signal STILL goes to Brain for awareness (p.114)!')}</text>
      <rect x="34" y="302" width="352" height="96" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="46" y="322" font-size="10.5" font-weight="800" fill="${p.amber}">${esc(hi ? '6.1.3 रक्षा व 6.1.4 पेशी संकुचन:' : '6.1.3 Organ Shield & 6.1.4 Muscle Fibre Contraction:')}</text>
      <text x="46" y="342" font-size="10" font-weight="700" fill="${p.text}">• ${esc(hi ? 'मस्तिष्क: हड्डी के कपाल बॉक्स + तरल-पूरित गुब्बारे (प्रघात अवशोषक) में' : 'Brain: Bony cranium + fluid-filled balloon (shock absorber)')}</text>
      <text x="46" y="360" font-size="10" font-weight="700" fill="${p.text}">• ${esc(hi ? 'मेरुरज्जु रक्षा: रीढ़ की हड्डी (कशेरुक दंड)' : 'Spinal cord shield: Hard Vertebral Column (backbone)')}</text>
      <text x="46" y="378" font-size="10" font-weight="800" fill="${p.emerald}">• ${esc(hi ? 'जंतु पेशी गति: विशेष प्रोटीन (विद्युत आवेग पर आकार-व्यवस्था बदले!)' : 'Animal muscles contract via special proteins shifting shape!')}</text>

      <!-- Bottom Right: Fig 6.3 Brain Regions -->
      <rect x="414" y="174" width="386" height="238" rx="12" fill="${p.cardAlt}" stroke="${p.violet}"/>
      <text x="607" y="196" text-anchor="middle" font-size="12" font-weight="800" fill="${p.violet}">${esc(hi ? 'चित्र 6.3: मानव मस्तिष्क के तीन भाग (CNS = मस्तिष्क + मेरुरज्जु)' : 'Fig 6.3: Brain Three Divisions & CNS/PNS')}</text>
      <text x="428" y="218" font-size="10.5" font-weight="800" fill="${p.cyan}">1) ${esc(hi ? 'अग्रमस्तिष्क (Forebrain — प्रमस्तिष्क / भूख केंद्र):' : 'Forebrain (Cerebrum — Main Thinking Part):')}</text>
      <text x="436" y="236" font-size="10" font-weight="700" fill="${p.text}">${esc(hi ? '• सुनना, सूँघना, देखना, स्मृति साहचर्य + अलग पेट भरा (भूख) केंद्र' : '• Thinking, hearing/smell/vision, memory, hunger-fullness centre')}</text>
      <text x="428" y="258" font-size="10.5" font-weight="800" fill="${p.amber}">2) ${esc(hi ? 'मध्यमस्तिष्क व पश्च पॉन्स (Pons):' : 'Midbrain & Hindbrain Pons:')}</text>
      <text x="436" y="276" font-size="10" font-weight="700" fill="${p.text}">${esc(hi ? '• पुतली आकार परिवर्तन सहित अनेक अनैच्छिक क्रियाओं का समन्वय' : '• Coordinates involuntary responses like pupil reflex & rhythm')}</text>
      <text x="428" y="298" font-size="10.5" font-weight="800" fill="${p.rose}">3) ${esc(hi ? 'पश्च मस्तिष्क — मेडुला (Medulla — Tech Shifts 11 & 21!):' : 'Hindbrain — Medulla (Tech Shifts 11 & 21 PYQs!):')}</text>
      <text x="436" y="316" font-size="10" font-weight="800" fill="${p.text}">${esc(hi ? '• सभी अनैच्छिक: रक्तदाब (BP), लार आना (Salivation), वमन (Vomiting)' : '• Involuntary only: Blood Pressure, Salivation, Vomiting')}</text>
      <text x="428" y="340" font-size="10.5" font-weight="800" fill="${p.emerald}">4) ${esc(hi ? 'पश्च मस्तिष्क — अनुमस्तिष्क (Cerebellum — पृ. 117 Q3):' : 'Hindbrain — Cerebellum (In-Text p.117 Q3!):')}</text>
      <text x="436" y="358" font-size="10" font-weight="800" fill="${p.text}">${esc(hi ? '• ऐच्छिक क्रिया परिशुद्धि + शारीरिक संस्थिति व संतुलन (साइकिल, चलना)' : '• Precision of voluntary acts + Posture & Balance (bicycle/line walk)')}</text>
      <text x="428" y="388" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? 'PNS (परिधीय तंत्र) = कपाल तंत्रिकाएँ (मस्तिष्क) + मेरु तंत्रिकाएँ (मेरुरज्जु)' : 'PNS = Cranial Nerves (from Brain) + Spinal Nerves (from Spinal Cord)')}</text>
    </svg>`;
  }

  if (key === 'c10-ch6-plant-tropism-hormones-diagram') {
    const title = hi ? 'पादप गतियाँ (छुई-मुई जल गति व 4 अनुवर्तन) एवं 4 पादप हार्मोन (चित्र 6.4–6.6)' : 'Plant Movements (Mimosa Water Turgor, 4 Tropisms) & 4 Plant Hormones (Sec 6.2)';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Left: Non-Growth vs Growth-Dependent Movements -->
      <rect x="20" y="56" width="380" height="196" rx="12" fill="${p.cardAlt}" stroke="${p.teal}"/>
      <text x="34" y="76" font-size="11.5" font-weight="800" fill="${p.teal}">${esc(hi ? '6.2.1 तत्काल गति (छुई-मुई) बनाम 6.2.2 दिशिक अनुवर्तन' : '6.2.1 Non-Growth (Mimosa) vs 6.2.2 Directional Tropisms')}</text>
      <text x="34" y="98" font-size="10.2" font-weight="800" fill="${p.rose}">• ${esc(hi ? 'छुई-मुई (Mimosa pudica — वृद्धि से मुक्त गति):' : 'Mimosa Pudica (Immediate Non-Growth):')}</text>
      <text x="42" y="114" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? 'न तंत्रिका न पेशी प्रोटिन — वैद्युत-रसायन सूचना से कोशिका में जल मात्रा बदले' : 'No nerves/muscle protein; electro-chemical relay alters cell water amount')}</text>
      <text x="34" y="136" font-size="10.2" font-weight="800" fill="${p.emerald}">1. ${esc(hi ? 'प्रकाशानुवर्तन (क्र. 6.2): प्ररोह (+ प्रकाश ओर) | जड़ (- दूर)' : 'Phototropism (Act 6.2): Shoot bends TOWARD light (+); Root AWAY (-)')}</text>
      <text x="34" y="156" font-size="10.2" font-weight="800" fill="${p.cyan}">2. ${esc(hi ? 'गुरुत्वानुवर्तन (चित्र 6.6): जड़ (+ नीचे) | प्ररोह (- ऊपर)' : 'Geotropism (Fig 6.6): Roots grow DOWN (+); Shoots UP (-)')}</text>
      <text x="34" y="176" font-size="10.2" font-weight="800" fill="${p.amber}">3. ${esc(hi ? 'रसायनानुवर्तन (Tech Shift 23 PYQ): पराग नलिका → बीजांड' : 'Chemotropism (Tech Shift 23!): Pollen tube growth toward OVULE!')}</text>
      <text x="34" y="196" font-size="10.2" font-weight="700" fill="${p.text}">4. ${esc(hi ? 'जलानुवर्तन (जल ओर जड़) व प्रतान स्पर्शानुवर्तन (मटर)' : 'Hydrotropism (water) & Tendril coiling (slower contact-side growth!)')}</text>
      <text x="34" y="218" font-size="9.8" font-weight="800" fill="${p.muted}">${esc(hi ? '→ प्रतान में सहारे से दूर वाला भाग ऑक्सिन से तेज़ बढ़ लपेटता है (Q4)' : '→ Auxin speeds elongation on side AWAY from support wrapping tendril!')}</text>

      <!-- Top Right: Auxin Phototropism Mechanism -->
      <rect x="414" y="56" width="386" height="196" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
      <text x="607" y="76" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'चित्र 6.5: ऑक्सिन का छाया भाग में प्रवास (प्रकाश की ओर झुकाव)' : 'Fig 6.5: Why Shoot Bends Toward Light (Auxin Shade Migration)')}</text>
      <!-- Light ray -->
      <polygon points="442,92 496,120 442,138" fill="${p.amber}" opacity="0.35"/>
      <text x="434" y="102" font-size="10" font-weight="900" fill="${p.amber}">☀ ${esc(hi ? 'प्रकाश' : 'Light')}</text>
      <!-- Curving stem -->
      <path d="M620,236 Q616,162 558,108" fill="none" stroke="${p.emerald}" stroke-width="14" stroke-linecap="round"/>
      <path d="M628,236 Q626,162 566,104" fill="none" stroke="${p.amber}" stroke-width="5" stroke-dasharray="4 3"/>
      <text x="642" y="142" font-size="10" font-weight="800" fill="${p.amber}">${esc(hi ? 'छाया भाग में अधिक ऑक्सिन' : 'More Auxin on SHADED side')}</text>
      <text x="642" y="160" font-size="9.8" font-weight="700" fill="${p.text}">${esc(hi ? '→ छाया कोशिकाएँ अधिक लंबी' : '→ Shaded cells elongate faster!')}</text>
      <text x="642" y="182" font-size="9.8" font-weight="700" fill="${p.muted}">${esc(hi ? '→ तना प्रकाश की ओर मुड़े!' : '→ Stem bends toward light window')}</text>
      <text x="642" y="206" font-size="9.8" font-weight="800" fill="${p.cyan}">${esc(hi ? 'संश्लेषण: प्ररोह के अग्रभाग में' : 'Made at growing shoot tip (Tech 10)')}</text>

      <!-- Bottom Strip: Four Plant Hormones -->
      <rect x="20" y="264" width="780" height="140" rx="12" fill="${p.cardAlt}" stroke="${p.violet}"/>
      <text x="36" y="286" font-size="12" font-weight="800" fill="${p.violet}">${esc(hi ? '4 प्रमुख पादप हार्मोन (3 वृद्धि वर्धक बनाम 1 वृद्धि संदमनकारी — अभ्यास Q1)' : 'Four NCERT Plant Hormones: 3 Growth Promoters vs 1 Growth Inhibitor')}</text>
      ${[
        { x: 34, c: p.emerald, bg: p.emeraldBg, n: hi ? '1. ऑक्सिन (Auxin)' : '1. Auxin', f: hi ? 'प्ररोह शीर्ष में संश्लेषण → कोशिका लंबाई में वृद्धि (प्रकाशानुवर्तन)' : 'Shoot tip; elongates cells (`shade bends`, Tech 10)' },
        { x: 224, c: p.cyan, bg: p.cyanBg, n: hi ? '2. जिब्बेरेलिन (Gibberellin)' : '2. Gibberellin', f: hi ? 'ऑक्सिन की तरह तने की वृद्धि में सहायक' : 'Helps growth of STEM just like Auxin' },
        { x: 414, c: p.amber, bg: p.amberBg, n: hi ? '3. साइटोकाइनिन (अभ्यास Q1)' : '3. Cytokinin (Ex Q1!)', f: hi ? 'कोशिका विभाजन प्रेरित → फलों व बीजों में सर्वाधिक सांद्रता' : 'Promotes CELL DIVISION -> high in Fruits & Seeds' },
        { x: 604, c: p.rose, bg: p.roseBg, n: hi ? '4. एब्सिसिक अम्ल (ABA)' : '4. Abscisic Acid (ABA)', f: hi ? 'वृद्धि संदमन (रोकना) → पत्तियों का मुरझाना!' : 'Growth INHIBITOR -> causes wilting of leaves!' },
      ].map((h) => `
        <rect x="${h.x}" y="298" width="182" height="92" rx="9" fill="${h.bg}" stroke="${h.c}"/>
        <text x="${h.x + 91}" y="320" text-anchor="middle" font-size="11" font-weight="900" fill="${h.c}">${esc(h.n)}</text>
        <text x="${h.x + 91}" y="344" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(h.f.slice(0, 34))}</text>
        <text x="${h.x + 91}" y="362" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(h.f.slice(34))}</text>
      `).join('')}
    </svg>`;
  }

  if (key === 'c10-ch6-endocrine-feedback-diagram') {
    const title = hi ? 'मानव अंतःस्रावी ग्रंथियाँ (चित्र 6.7, सारणी 6.1) एवं इंसुलिन पुनर्भरण क्रियाविधि' : 'Human Endocrine Glands (Fig 6.7, Table 6.1) & Hormone Feedback Mechanism';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- 6 Key Endocrine Cards -->
      ${[
        { x: 20, y: 58, w: 250, h: 112, c: p.violet, n: hi ? 'हाइपोथैलेमस व पीयूष (मास्टर)' : 'Hypothalamus & Pituitary', l1: hi ? '• हाइपोथैलेमस → मोचक कारक हार्मोन' : '• Hypothalamus: Releasing factors', l2: hi ? '• पीयूष → वृद्धि हार्मोन (Growth H.)' : '• Pituitary: Growth Hormone (Tech 1, 20)', l3: hi ? '• बाल्यकाल में कमी → बौनापन (Dwarfism)' : '• Childhood deficiency -> Dwarfism' },
        { x: 285, y: 58, w: 250, h: 112, c: p.cyan, n: hi ? 'अवटुग्रंथि (Thyroid — आयोडीन)' : 'Thyroid Gland (Needs Iodine)', l1: hi ? '• थाइरॉक्सिन हार्मोन स्रावित करती है' : '• Secretes Thyroxine hormone (Shift 16)', l2: hi ? '• कार्ब्स, प्रोटीन, वसा उपापचय नियंत्रण' : '• Controls Carb, Protein, Fat metabolism', l3: hi ? '• आयोडीन कमी → गॉयटर / घेंघा (फूली गर्दन)' : '• Iodine lack -> Goitre (swollen neck)' },
        { x: 550, y: 58, w: 250, h: 112, c: p.rose, n: hi ? 'अधिवृक्क (Adrenal — आपात)' : 'Adrenal (Fight-or-Flight)', l1: hi ? '• एड्रीनलीन हार्मोन सीधे रुधिर में' : '• Adrenaline secreted straight into blood', l2: hi ? '• हृदय धड़कन ↑, श्वसन दर ↑ (O₂ हेतु)' : '• Heartbeat & breathing rate jump up', l3: hi ? '• त्वचा/पाचन रक्त घट कर कंकाल पेशी ओर' : '• Blood diverted from skin/gut to muscles' },
        { x: 20, y: 184, w: 250, h: 112, c: p.emerald, n: hi ? 'अग्न्याशय (Pancreas — मधुमेह)' : 'Pancreas (Blood Sugar / Diabetes)', l1: hi ? '• इंसुलिन हार्मोन स्रवण (रक्त शर्करा)' : '• Insulin regulates blood sugar level', l2: hi ? '• अपर्याप्त इंसुलिन → मधुमेह (Diabetes)' : '• Inadequate insulin -> Diabetes (Shift 39)', l3: hi ? '• रोगी को इंसुलिन इंजेक्शन दिया जाता' : '• Treated with Insulin hormone injections' },
        { x: 285, y: 184, w: 250, h: 112, c: p.amber, n: hi ? 'जनन ग्रंथियाँ (वृषण व अंडाशय)' : 'Testes (Male) & Ovaries (Female)', l1: hi ? '• नर वृषण → टेस्टोस्टेरॉन (लैंगिक विकास)' : '• Testes: Testosterone (male puberty)', l2: hi ? '• मादा अंडाशय → एस्ट्रोजन हार्मोन' : '• Ovaries: Oestrogen (female organs,', l3: hi ? '• मादा लैंगिक विकास व मासिक चक्र नियंत्रण' : '  secondary traits & menstrual cycle)' },
        { x: 550, y: 184, w: 250, h: 112, c: p.teal, n: hi ? 'चित्र 6.7 अन्य सूचीबद्ध ग्रंथियाँ' : 'Fig 6.7 Additional Listed Glands', l1: hi ? '• मस्तिष्क क्षेत्र: पीनियल, हाइपोथैलेमस, पीयूष' : '• Brain area: Pineal, Hypothalamus, Pituitary', l2: hi ? '• गला व वक्ष: अवटु, परावटु व थाइमस ग्रंथि' : '• Neck/Chest: Thyroid, Parathyroid, Thymus', l3: hi ? '• उदर व श्रोणि: अग्न्याशय, अधिवृक्क, जननांग' : '• Trunk: Pancreas, Adrenals, Gonads' },
      ].map((g) => `
        <rect x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}" rx="10" fill="${p.cardAlt}" stroke="${g.c}"/>
        <text x="${g.x + 12}" y="${g.y + 22}" font-size="11" font-weight="900" fill="${g.c}">${esc(g.n)}</text>
        <text x="${g.x + 12}" y="${g.y + 44}" font-size="9.8" font-weight="700" fill="${p.text}">${esc(g.l1)}</text>
        <text x="${g.x + 12}" y="${g.y + 66}" font-size="9.8" font-weight="700" fill="${p.text}">${esc(g.l2)}</text>
        <text x="${g.x + 12}" y="${g.y + 88}" font-size="9.8" font-weight="700" fill="${p.muted}">${esc(g.l3)}</text>
      `).join('')}

      <!-- Bottom Band: Feedback Mechanism -->
      <rect x="20" y="310" width="780" height="102" rx="12" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
      <text x="36" y="332" font-size="12" font-weight="900" fill="${p.emerald}">${esc(hi ? 'पुनर्भरण क्रियाविधि (Feedback Mechanism — पृ. 122 व सारांश): हार्मोन का समय व मात्रा नियंत्रण' : 'Hormone Timing & Quantity Control via Feedback Mechanism (NCERT p.122)')}</text>
      <text x="36" y="356" font-size="10.8" font-weight="700" fill="${p.text}">1. ${esc(hi ? 'यदि रुधिर में शर्करा स्तर बढ़े → अग्न्याशय की कोशिकाएँ संसूचित (detect) कर अधिक इंसुलिन स्रावित करती हैं (शर्करा घटती)' : 'If Blood Sugar RISES → Pancreas cells detect rise and secrete MORE Insulin (lowering sugar safely)')}</text>
      <text x="36" y="378" font-size="10.8" font-weight="700" fill="${p.text}">2. ${esc(hi ? 'जब रुधिर में शर्करा स्तर सामान्य/कम हो जाए → इंसुलिन का स्रावण स्वतः कम हो जाता है!' : 'Once Blood Sugar DROPS to normal -> Pancreas automatically REDUCES Insulin secretion!')}</text>
      <text x="36" y="398" font-size="10" font-weight="800" fill="${p.muted}">${esc(hi ? 'नोट: इसी प्रकार हाइपोथैलेमस-पीयूष चक्र में GH घटने पर मोचक कारक (GHRF) स्रावित होता है (Tech Shift 1)!' : 'Same feedback loop runs Hypothalamus GHRF -> Pituitary Growth Hormone (`Tech 2024 Shift 1`)!')}</text>
    </svg>`;
  }

  return '';
}
