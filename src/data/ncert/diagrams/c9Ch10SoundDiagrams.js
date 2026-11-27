/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc110.pdf, Pages 184–207)
 * Chapter 10: Sound Waves — Characteristics & Applications (ध्वनि तरंगें — अभिलक्षण एवं अनुप्रयोग)
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

export function renderC9Ch10SoundDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';

  if (key === 'c9-ch10-blueprint-mindmap') {
    const title = hi ? 'अध्याय 10 मानचित्र: ध्वनि तरंगें — अभिलक्षण एवं अनुप्रयोग (NCERT 2026–27)' : 'Chapter 10 Master Map: Sound Waves, Formulae, Ear, Echo & SONAR';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <rect x="210" y="58" width="400" height="58" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.6"/>
      <text x="410" y="81" text-anchor="middle" font-size="12.5" font-weight="900" fill="${p.amber}">${esc(hi ? 'ध्वनि = कंपन से उत्पन्न अनुदैर्ध्य यांत्रिक तरंग (ऊर्जा संचरण!)' : 'Sound = Vibration-Born Longitudinal Mechanical Wave')}</text>
      <text x="410" y="102" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? 'माध्यम अनिवार्य (ठोस 5000 > द्रव 1500 > गैस 340 m/s) • निर्वात में असंभव!' : 'Needs Medium (Steel 5000 > Water 1500 > Air 340 m/s) • ZERO in Vacuum')}</text>

      ${[
        {
          x: 20, y: 132, w: 380, h: 134, c: p.cyan, bg: p.cyanBg,
          t: hi ? '10.1–10.4 कंपन, माध्यम व ऊर्जा (बेलजार प्रयोग)' : '10.1–10.4 Vibration, Vacuum Bell Jar & Energy Transfer',
          l1: hi ? '• वाक् तंतु (Larynx) + स्वरित्र द्विभुज + कोंग थोंग धुन गाँव' : '• Vocal cords (Larynx) + Steel Tuning Fork + Desk/Spoon tests',
          l2: hi ? '• संपीडन C (उच्च घनत्व शृंग) & विरलन R (निम्न घनत्व गर्त)' : '• Piston/Slinky: Compressions (C) & Rarefactions (R)',
          l3: hi ? '• कण केवल अपनी माध्य स्थिति पर दोलन करते हैं (आगे नहीं बढ़ते!)' : '• Energy/disturbance travels — medium particles vibrate locally',
        },
        {
          x: 420, y: 132, w: 380, h: 134, c: p.emerald, bg: p.emeraldBg,
          t: hi ? '10.5–10.6 तरंग समीकरण v = λν एवं मानव बोध' : '10.5–10.6 Wave Laws v = λν & Ear Perception',
          l1: hi ? '• ν = 1/T (Hz), λ (m) • v = 331 (0°C) → 344 m/s (22°C)' : '• ν = 1/T (Hz) • v(0°C)=331 → v(22°C)=344 m/s (rises with T)',
          l2: hi ? '• तारत्व (आवृत्ति) | प्रबलता (आयाम, dB) | गुणता/Timbre (अधिस्वरक)' : '• Pitch (ν), Loudness (Amplitude, dB) & Timbre (C.V. Raman)',
          l3: hi ? '• मानव कान (चित्र 10.24): कर्णपटल → अस्थियाँ → कर्णावर्त (विद्युत)' : '• Ear: Eardrum → Ossicles amplify → Cochlea (electric impulse)',
        },
        {
          x: 20, y: 280, w: 380, h: 130, c: p.violet, bg: p.violetBg,
          t: hi ? '10.7 परावर्तन, प्रतिध्वनि (Echo ≥0.1s) & अनुरणन' : '10.7 Echo (≥0.1 s, ≥17 m) & Reverberation (<0.05 s)',
          l1: hi ? '• प्रतिध्वनि: समय अंतराल ≥ 0.1 s ⇒ न्यूनतम दूरी = 17 m (340 m/s)' : '• Echo: Δt ≥ 0.1 s ⇒ Min distance = 17 m (2d = v·t)',
          l2: hi ? '• अनुरणन (<0.05s बहु-परावर्तन): पर्दे, कालीन, ध्वनि-अवशोषक पैनल' : '• Reverberation (<0.05s): Curtains, carpets, acoustic panels reduce',
          l3: hi ? '• बीजापुर गोल गुम्बज मर्मरश्रावी गैलरी + स्टेथोस्कोप बहु-परावर्तन' : '• Bijapur Gol Gumbaz Whispering Gallery & Stethoscope',
        },
        {
          x: 420, y: 280, w: 380, h: 130, c: p.rose, bg: p.roseBg,
          t: hi ? '10.8 अवश्रव्य (<20 Hz), श्रव्य & पराश्रव्य (>20 kHz / SONAR)' : '10.8 Infrasonic (<20 Hz) vs Audible vs Ultrasonic (>20 kHz)',
          l1: hi ? '• मानव श्रव्य: 20 Hz – 20 kHz (17.2 m – 1.72 cm) | हाथी <20 Hz' : '• Audible: 20 Hz–20 kHz | Infrasonic: Earthquakes/Elephants',
          l2: hi ? '• पराश्रव्य >20 kHz: चमगादड़, डॉल्फिन, अल्ट्रासोनोग्राफी व गुर्दे की पथरी' : '• Ultrasonic >20 kHz: Bats, Dolphins, Kidney stones, Delicate clean',
          l3: hi ? '• SONAR गहराई: d = (v × t)/2 (उदा. 10.6: 0.90s @ 1530 = 688.5 m)' : '• SONAR Depth: d = v·t/2 (Ex 10.6: 688.5 m; Ex Q10: 3812.5 m)',
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

  if (key === 'c9-ch10-longitudinal-cr-wave-diagram') {
    const title = hi ? 'संपीडन (C) व विरलन (R) घनत्व ग्राफ (चित्र 10.9, 10.16) + अनुदैर्ध्य बनाम अनुप्रस्थ' : 'Compressions (C) & Rarefactions (R) Graph (Fig 10.16) & Mechanical Wave Proof';
    return `<svg viewBox="0 0 820 410" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="398" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Band: Compression C vs Rarefaction R Vertical Bars -->
      <rect x="20" y="54" width="780" height="62" rx="10" fill="${p.cardAlt}" stroke="${p.border}"/>
      <text x="34" y="88" font-size="10" font-weight="800" fill="${p.amber}">${esc(hi ? 'माध्यम कण:' : 'Particles:')}</text>
      ${[145, 152, 159, 166, 173, 250, 275, 300, 385, 392, 399, 406, 413, 490, 515, 540, 625, 632, 639, 646, 653, 730].map((x) => `
        <line x1="${x}" y1="64" x2="${x}" y2="106" stroke="${x % 240 > 130 && x % 240 < 185 ? p.rose : p.cyan}" stroke-width="2" stroke-dasharray="3,2"/>
      `).join('')}
      <text x="160" y="66" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.rose}">C</text>
      <text x="275" y="66" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.cyan}">R</text>
      <text x="400" y="66" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.rose}">C</text>
      <text x="515" y="66" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.cyan}">R</text>
      <text x="640" y="66" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.rose}">C</text>

      <!-- Aligned Sine Wave Graph (Fig 10.16b) -->
      <rect x="20" y="124" width="780" height="142" rx="10" fill="${p.bg}" stroke="${p.cyan}" stroke-width="1.2"/>
      <line x1="95" y1="195" x2="770" y2="195" stroke="${p.muted}" stroke-width="1.2" stroke-dasharray="5,4"/>
      <path d="M 100 195 Q 130 140 160 140 Q 218 140 275 250 Q 337 250 400 140 Q 458 140 515 250 Q 577 250 640 140 Q 690 140 730 220" fill="none" stroke="${p.emerald}" stroke-width="3"/>
      <line x1="160" y1="140" x2="400" y2="140" stroke="${p.amber}" stroke-width="2"/>
      <text x="280" y="136" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.amber}">← λ (${esc(hi ? 'तरंगदैर्घ्य = दो क्रमागत शृंग' : 'Wavelength')}) →</text>
      <line x1="640" y1="140" x2="640" y2="195" stroke="${p.violet}" stroke-width="2.2"/>
      <text x="646" y="172" font-size="9.5" font-weight="900" fill="${p.violet}">A (${esc(hi ? 'आयाम' : 'Amplitude')})</text>
      <text x="32" y="150" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? 'शृंग (उच्च C)' : 'Crest (Max C)')}</text>
      <text x="32" y="198" font-size="9.5" font-weight="700" fill="${p.muted}">${esc(hi ? 'माध्य घनत्व' : 'Mean Density')}</text>
      <text x="32" y="252" font-size="9.5" font-weight="800" fill="${p.cyan}">${esc(hi ? 'गर्त (निम्न R)' : 'Trough (Min R)')}</text>

      <!-- Bottom Split: Longitudinal vs Transverse & Bell Jar / Speed -->
      <rect x="20" y="278" width="382" height="118" rx="11" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.3"/>
      <text x="211" y="298" text-anchor="middle" font-size="10.8" font-weight="900" fill="${p.amber}">${esc(hi ? 'अनुदैर्ध्य (Longitudinal) vs अनुप्रस्थ (Transverse)' : 'Longitudinal vs Transverse Waves (Fig 10.12–10.13)')}</text>
      <text x="34" y="320" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• अनुदैर्ध्य (ध्वनि): कण तरंग दिशा के समानांतर (∥) दोलन करें — यांत्रिक!' : '• Longitudinal (Sound): Particles vibrate PARALLEL (∥) to wave!')}</text>
      <text x="34" y="340" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• अनुप्रस्थ (प्रकाश): कण तरंग दिशा के लंबवत (⊥) दोलन; प्रकाश निर्वात में चले!' : '• Transverse (Light): Particles oscillate ⊥ to wave; light needs NO medium!')}</text>
      <text x="34" y="362" font-size="9.2" font-weight="800" fill="${p.rose}">${esc(hi ? '• भूकंप: अनुदैर्ध्य तरंगें (P-waves) भूकंप-लेखी पर सबसे पहले दर्ज होती हैं!' : '• Earthquakes: Longitudinal waves arrive FIRST at seismographs!')}</text>
      <text x="34" y="382" font-size="9" font-weight="700" fill="${p.muted}">${esc(hi ? '• पराध्वनिक वायुयान (Supersonic): ध्वनि से तेज → ध्वनि बूम (Sonic boom)!' : '• Supersonic jets (> speed of sound) create intense Sonic Boom!')}</text>

      <rect x="416" y="278" width="384" height="118" rx="11" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.3"/>
      <text x="608" y="298" text-anchor="middle" font-size="10.8" font-weight="900" fill="${p.violet}">${esc(hi ? 'माध्यम आवश्यकता (बेलजार 10.7) & 15°C चाल तालिका 10.1' : 'Vacuum Bell Jar (Fig 10.7) & Speed of Sound (Table 10.1)')}</text>
      <text x="430" y="320" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• निर्वात में घंटी दिखेगी, पर ध्वनि शून्य (अंतरिक्ष में भी बात असंभव!)' : '• Bell vibrates silently in vacuum (astronauts talk via radio!)')}</text>
      <text x="430" y="340" font-size="9.6" font-weight="900" fill="${p.emerald}">${esc(hi ? '• ठोस (स्टील ~5000 m/s) > द्रव (जल ~1500 m/s) > गैस (वायु ~340 m/s)' : '• Solids (Steel ~5000) > Liquids (Water ~1500) > Air (~340 m/s)')}</text>
      <text x="430" y="360" font-size="9.2" font-weight="700" fill="${p.text}">${esc(hi ? '• जल वायु से 4–5× तेज | ठोस वायु से 15–20× तेज | ताप ↑ तो v ↑ (331→344)!' : '• Water = 4–5× Air | Steel = 15–20× Air | Heat ↑ & Humidity ↑ ⇒ v ↑!')}</text>
      <text x="430" y="380" font-size="9" font-weight="700" fill="${p.amber}">${esc(hi ? '• माइक: ध्वनि → विद्युत | स्पीकर: विद्युत → ध्वनि (तनुपट कंपन चित्र 10.15)' : '• Mic (Sound→Elec) vs Speaker (Elec→Sound via Diaphragm)')}</text>
    </svg>`;
  }

  if (key === 'c9-ch10-characteristics-perception-diagram') {
    const title = hi ? 'तारत्व (आवृत्ति), प्रबलता (आयाम/dB), गुणता (अधिस्वरक / C.V. रमन) एवं मानव कर्ण (चित्र 10.24)' : 'Pitch (Frequency), Loudness (Amplitude/dB), Timbre (Overtones) & Human Ear';
    return `<svg viewBox="0 0 820 410" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="398" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left Top: Pitch / Frequency Comparison -->
      <rect x="20" y="54" width="380" height="162" rx="11" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="210" y="74" text-anchor="middle" font-size="11" font-weight="900" fill="${p.cyan}">${esc(hi ? '1. तारत्व (Pitch) ↔ आवृत्ति (ν = 1/T, Hz)' : '1. Pitch (Human Perception) ↔ Frequency (ν)')}</text>
      <path d="M 38 106 Q 75 78 112 106 T 186 106 T 260 106" fill="none" stroke="${p.amber}" stroke-width="2.2"/>
      <text x="275" y="109" font-size="9.4" font-weight="800" fill="${p.amber}">${esc(hi ? 'निम्न तारत्व (मोटा ढोल/गर्जना)' : 'Low ν → Low Pitch (Drum)')}</text>
      <path d="M 38 148 Q 48 120 58 148 T 78 148 T 98 148 T 118 148 T 138 148 T 158 148 T 178 148 T 198 148 T 218 148 T 238 148" fill="none" stroke="${p.rose}" stroke-width="2.2"/>
      <text x="252" y="150" font-size="9.4" font-weight="800" fill="${p.rose}">${esc(hi ? 'उच्च तारत्व (तीखी सीटी/चिड़िया)' : 'High ν → High Pitch (Whistle)')}</text>
      <text x="34" y="182" font-size="9.2" font-weight="700" fill="${p.text}">${esc(hi ? '• लड़कों के वाक् तंतु लंबे-मोटे → आवृत्ति कम (गहरी ध्वनि)' : '• Teen boys vocal cords thicken → lower frequency / deeper voice')}</text>
      <text x="34" y="200" font-size="9.2" font-weight="800" fill="${p.emerald}">${esc(hi ? '• अष्टक (Octave): 200 Hz → 400 Hz (मूल आवृत्ति की 2 गुनी!)' : '• Octave = 2:1 ratio (200 Hz & 400 Hz) | v = λ × ν constant!')}</text>

      <!-- Right Top: Loudness / Amplitude / Intensity -->
      <rect x="416" y="54" width="384" height="162" rx="11" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.3"/>
      <text x="608" y="74" text-anchor="middle" font-size="11" font-weight="900" fill="${p.amber}">${esc(hi ? '2. प्रबलता (Loudness) ↔ आयाम (A) & तीव्रता (dB)' : '2. Loudness ↔ Amplitude (A) & Intensity (Decibel dB)')}</text>
      <path d="M 432 106 Q 458 92 484 106 T 536 106 T 588 106" fill="none" stroke="${p.cyan}" stroke-width="2"/>
      <text x="604" y="109" font-size="9.4" font-weight="800" fill="${p.cyan}">${esc(hi ? 'कम आयाम → मृदु ध्वनि (फुसफुसाहट)' : 'Small Amplitude → Soft')}</text>
      <path d="M 432 146 Q 458 110 484 146 T 536 146 T 588 146" fill="none" stroke="${p.rose}" stroke-width="2.6"/>
      <text x="604" y="149" font-size="9.4" font-weight="800" fill="${p.rose}">${esc(hi ? 'बड़ा आयाम → प्रबल ध्वनि (अधिक ऊर्जा)' : 'Large Amplitude → Loud!')}</text>
      <text x="430" y="182" font-size="9.2" font-weight="700" fill="${p.text}">${esc(hi ? '• प्रबलता मात्रक: डेसिबेल (dB) • सामान्य वार्तालाप ≈ 60 dB' : '• Loudness Unit: Decibel (dB) • Normal talk ≈ 60 dB')}</text>
      <text x="430" y="200" font-size="9.2" font-weight="800" fill="${p.rose}">${esc(hi ? '• पटाखे > 100 dB • तीव्रता = एकांक क्षेत्रफल/सेकंड ऊर्जा (दूरी से घटे)' : '• Firecrackers > 100 dB • Intensity = Energy / (Area × Time)')}</text>

      <!-- Left Bottom: Tone, Note, Timbre & C.V. Raman Box -->
      <rect x="20" y="228" width="380" height="168" rx="11" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.3"/>
      <text x="210" y="248" text-anchor="middle" font-size="11" font-weight="900" fill="${p.violet}">${esc(hi ? '3. स्वर (Tone) vs सांगीतिक स्वर (Note) & गुणता (Timbre)' : '3. Tone vs Note, Timbre & C.V. Raman Box (p.200)')}</text>
      <text x="34" y="274" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• स्वर (Tone): एकल आवृत्ति की शुद्ध ध्वनि (स्वरित्र द्विभुज / सीटी)' : '• Tone: Pure single-frequency sound (Tuning fork / Phyphox whistle)')}</text>
      <text x="34" y="294" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• संगीत स्वर (Note): मूल आवृत्ति + उच्चतर अधिस्वरकों (Overtones) का मिश्रण' : '• Note: Fundamental frequency + richer Overtones combined')}</text>
      <text x="34" y="316" font-size="9.6" font-weight="900" fill="${p.emerald}">${esc(hi ? '• गुणता (Timbre): समान तारत्व व प्रबलता पर भी बाँसुरी vs तबला भेद!' : '• Timbre/Quality: Distinguishes instruments at same Pitch & Loudness!')}</text>
      <text x="34" y="344" font-size="9.3" font-weight="800" fill="${p.amber}">${esc(hi ? '• सर सी.वी. रमन (भारत का 1st भौतिकी नोबेल):' : '• Sir C.V. Raman (1st Indian Physics Nobel):')}</text>
      <text x="34" y="362" font-size="9.1" font-weight="600" fill="${p.text}">${esc(hi ? 'तबला व मृदंगम के बीच काली ‘स्याही’ से उत्पन्न समृद्ध अधिस्वरकों पर शोध किया!' : 'Studied Tabla/Mridangam acoustics (`Syahi` centre dot shaping tones)!')}</text>
      <text x="34" y="382" font-size="8.9" font-weight="700" fill="${p.muted}">${esc(hi ? '• शिलांग (कोंग थोंग): जन्म पर लोरी धुन = “जिंगरवाई इओबेई” नाम!' : '• Shillong Whistling Village (Kongthong): Jingrwai Iawbei name-tune!')}</text>

      <!-- Right Bottom: Human Ear Anatomy (Fig 10.24) -->
      <rect x="416" y="228" width="384" height="168" rx="11" fill="${p.tealBg}" stroke="${p.teal}" stroke-width="1.3"/>
      <text x="608" y="248" text-anchor="middle" font-size="11" font-weight="900" fill="${p.teal}">${esc(hi ? '4. मानव कर्ण श्रवण मार्ग (चित्र 10.24) व दिशा बोध' : '4. Human Ear Signal Path (Fig 10.24) & Binaural Direction')}</text>
      ${[
        { x: 428, w: 80, t: hi ? 'बाह्य कर्ण' : 'Outer Ear', s: hi ? 'ध्वनि संकलन' : 'Collects wave' },
        { x: 516, w: 86, t: hi ? 'कर्णपटल' : 'Eardrum', s: hi ? 'झिल्ली कंपन' : 'Membrane vibr.' },
        { x: 610, w: 88, t: hi ? 'मध्य अस्थियाँ' : 'Tiny Bones', s: hi ? 'कंपन प्रवर्धन!' : 'Amplify signal!' },
        { x: 706, w: 84, t: hi ? 'कर्णावर्त' : 'Cochlea', s: hi ? 'विद्युत सिग्नल' : 'To Brain Nerve!' },
      ].map((b) => `
        <rect x="${b.x}" y="268" width="${b.w}" height="52" rx="8" fill="${p.bg}" stroke="${p.teal}" stroke-width="1.3"/>
        <text x="${b.x + b.w / 2}" y="290" text-anchor="middle" font-size="9.6" font-weight="900" fill="${p.amber}">${esc(b.t)}</text>
        <text x="${b.x + b.w / 2}" y="308" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.text}">${esc(b.s)}</text>
      `).join('')}
      <text x="430" y="346" font-size="9.4" font-weight="800" fill="${p.text}">${esc(hi ? '• दो कानों का लाभ: सेकंड के 1000वें हिस्से से भी कम अंतर से दिशा पहचान!' : '• Two Ears locate sound direction via <1 ms arrival difference!')}</text>
      <text x="430" y="366" font-size="9.2" font-weight="700" fill="${p.muted}">${esc(hi ? '• साँप व मछलियाँ त्वचा/शरीर से कंपन पहचानती हैं (पृ. 199)' : '• Snakes/Fish sense vibrations via body; insects use ear-like organs')}</text>
      <text x="430" y="384" font-size="9.1" font-weight="800" fill="${p.rose}">${esc(hi ? '• श्रवण सहायक यंत्र: माइक्रोफोन + प्रवर्धक (Amplifier) + स्पीकर' : '• Hearing Aid: Microphone → Amplifier → Speaker into ear canal')}</text>
    </svg>`;
  }

  if (key === 'c9-ch10-echo-reverb-sonar-diagram') {
    const title = hi ? 'प्रतिध्वनि (≥0.1s, 17 m), अनुरणन (<0.05s), श्रव्य परास व चमगादड़ / SONAR (चित्र 10.27–10.28)' : 'Echo (≥17 m), Reverberation Control, Frequency Spectrum & Bat / SONAR';
    return `<svg viewBox="0 0 820 410" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="398" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="30" rx="8" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.1"/>
      <text x="410" y="34" text-anchor="middle" font-size="13" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Band: 3 Frequency Zones -->
      <rect x="20" y="54" width="240" height="106" rx="11" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.3"/>
      <text x="140" y="74" text-anchor="middle" font-size="11" font-weight="900" fill="${p.violet}">${esc(hi ? 'अवश्रव्य (Infrasonic < 20 Hz)' : 'Infrasonic (< 20 Hz)')}</text>
      <text x="32" y="96" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• मनुष्य नहीं सुन सकते' : '• Humans CANNOT hear (<20 Hz)')}</text>
      <text x="32" y="114" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• श्रोता जंतु: हाथी (अधिक दूरी)' : '• Animals: Elephants hear/track')}</text>
      <text x="32" y="134" font-size="9.2" font-weight="800" fill="${p.amber}">${esc(hi ? '• भूकंप, ज्वालामुखी, झंझावात सूचना' : '• Earthquakes, Volcanoes, Storms')}</text>

      <rect x="272" y="54" width="276" height="106" rx="11" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.3"/>
      <text x="410" y="74" text-anchor="middle" font-size="11" font-weight="900" fill="${p.emerald}">${esc(hi ? 'मानव श्रव्यता परास (20 Hz – 20 kHz)' : 'Human Audible Range (20 Hz – 20 kHz)')}</text>
      <text x="284" y="96" font-size="9.4" font-weight="800" fill="${p.text}">${esc(hi ? '• आयु बढ़ने पर ऊपरी सीमा घटती जाती' : '• Upper limit drops naturally with ageing')}</text>
      <text x="284" y="114" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• उदा. 10.2 (v=344): 20Hz→17.2m | 20kHz→1.72cm' : '• Ex 10.2 (@344): 17.2 m (20Hz) to 1.72 cm')}</text>
      <text x="284" y="134" font-size="9.2" font-weight="800" fill="${p.cyan}">${esc(hi ? '• संगीत सा-रे-गा-मा-पा-धा-नि-सा (Phyphox)' : '• Musical notes & speech spectrum')}</text>

      <rect x="560" y="54" width="240" height="106" rx="11" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="680" y="74" text-anchor="middle" font-size="11" font-weight="900" fill="${p.cyan}">${esc(hi ? 'पराश्रव्य (Ultrasonic > 20 kHz)' : 'Ultrasonic (> 20 kHz)')}</text>
      <text x="572" y="96" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• चमगादड़, डॉल्फिन, कुत्ते, बिल्लियाँ' : '• Bats, Dolphins, Dogs & Cats hear')}</text>
      <text x="572" y="114" font-size="9.4" font-weight="700" fill="${p.text}">${esc(hi ? '• अल्ट्रासोनोग्राफी + गुर्दे पथरी तोड़ना' : '• Ultrasonography & Kidney stones')}</text>
      <text x="572" y="134" font-size="9.2" font-weight="800" fill="${p.amber}">${esc(hi ? '• सफाई, धातु दोष, वेल्डिंग व कार सेंसर' : '• Delicate clean, metal flaw, ~40kHz')}</text>

      <!-- Bottom Left: Echo vs Reverberation -->
      <rect x="20" y="174" width="380" height="222" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.4"/>
      <text x="210" y="196" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.amber}">${esc(hi ? 'प्रतिध्वनि (Echo ≥0.1s) बनाम अनुरणन (Reverberation <0.05s)' : 'Echo (Distinct Reflection) vs Reverberation Control')}</text>
      <text x="34" y="220" font-size="9.6" font-weight="800" fill="${p.text}">${esc(hi ? '• प्रतिध्वनि (Echo, 10.7.1): परावर्तन कोण i = r व समतल कठोर पृष्ठ।' : '• Echo Rule: Separate reflection heard when gap ≥ 0.1 s!')}</text>
      <text x="34" y="240" font-size="9.8" font-weight="900" fill="${p.emerald}">${esc(hi ? '⇒ 2d = v × t ⇒ 0.1 s @ 340 m/s → 34/2 = 17 m न्यूनतम!' : '⇒ 2d = v × t ⇒ 0.1s @ 340 m/s ⇒ d_min = 34/2 = 17 m!')}</text>
      <text x="34" y="260" font-size="9.3" font-weight="700" fill="${p.text}">${esc(hi ? '• तापमान ↑ → v ↑ → प्रतिध्वनि न्यूनतम दूरी भी बढ़ी (34.3 m @ 0.2 s)!' : '• If Temp ↑ → v ↑ → minimum echo distance ALSO rises!')}</text>
      <text x="34" y="286" font-size="9.6" font-weight="800" fill="${p.rose}">${esc(hi ? '• अनुरणन (Reverberation, 10.7.2): बार-बार टकराकर गूँज बने रहना' : '• Reverberation (<0.05 s): Repeated reflections smear words!')}</text>
      <text x="34" y="306" font-size="9.2" font-weight="600" fill="${p.text}">${esc(hi ? '(< 0.05 s अंतराल में परावर्तन)। शब्द परस्पर गुँथ कर अस्पष्ट हो जाते हैं।' : 'Hard bare walls amplify reverb; soft materials absorb it.')}</text>
      <text x="34" y="330" font-size="9.4" font-weight="800" fill="${p.cyan}">${esc(hi ? '✓ निवारण: मोटे पर्दे, कालीन, गद्देदार सीट, छिद्रयुक्त ध्वनि पैनल!' : '✓ Acoustic Design: Curtains, carpets, soft wall boards, cushioned seats')}</text>
      <text x="34" y="356" font-size="9.2" font-weight="800" fill="${p.text}">${esc(hi ? '• ऐतिहासिक आश्चर्य: गोल गुम्बज (बीजापुर, कर्नाटक) मर्मरश्रावी गैलरी!' : '• Heritage Marvel: Gol Gumbaz (Bijapur) Whispering Gallery')}</text>
      <text x="34" y="378" font-size="9" font-weight="700" fill="${p.muted}">${esc(hi ? '• स्टेथोस्कोप (PYQ): रबड़ नली भीतर बहु-परावर्तन से हृदय स्पंदन ले जाए' : '• Stethoscope uses multiple internal reflections inside tube!')}</text>

      <!-- Bottom Right: Bat Echolocation & Ship SONAR -->
      <rect x="414" y="174" width="386" height="222" rx="12" fill="${p.bg}" stroke="${p.cyan}" stroke-width="1.4"/>
      <text x="607" y="196" text-anchor="middle" font-size="11.2" font-weight="900" fill="${p.cyan}">${esc(hi ? 'सोनार (SONAR — जल गहराई) & चमगादड़ प्रतिध्वनि निर्धारण' : 'SONAR Depth Calculation & Bat Echolocation (10.8.1)')}</text>
      <!-- Water Surface + Ship + Pulses -->
      <rect x="430" y="210" width="354" height="106" rx="8" fill="${p.cyanBg}" stroke="${p.cyan}"/>
      <polygon points="555,222 655,222 642,240 568,240" fill="${p.amber}"/>
      <line x1="605" y1="242" x2="605" y2="296" stroke="${p.emerald}" stroke-width="2.2" stroke-dasharray="4,3"/>
      <rect x="575" y="294" width="60" height="14" rx="4" fill="${p.rose}"/>
      <text x="444" y="232" font-size="9.2" font-weight="900" fill="${p.text}">${esc(hi ? 'समुद्री जलयान ट्रांसमीटर' : 'Ship SONAR (Sound Nav & Ranging)')}</text>
      <text x="444" y="264" font-size="9.6" font-weight="900" fill="${p.emerald}">d = (v × t) / 2</text>
      <text x="444" y="282" font-size="8.8" font-weight="700" fill="${p.text}">${esc(hi ? 'आने-जाने से दूरी दुगुनी!' : 'Round-trip = t/2 one-way!')}</text>
      <text x="646" y="264" font-size="8.8" font-weight="800" fill="${p.rose}">${esc(hi ? 'समुद्री तल / पनडुब्बी' : 'Submarine / Seabed')}</text>
      <text x="646" y="282" font-size="8.8" font-weight="700" fill="${p.text}">${esc(hi ? 'पराश्रव्य स्पंद परावर्तन' : 'Ultrasonic pulse echo')}</text>

      <text x="428" y="338" font-size="9.4" font-weight="800" fill="${p.amber}">${esc(hi ? '• उदा. 10.6: t = 0.90 s @ 1530 m/s ⇒ d = 1530 × 0.45 = 688.5 m!' : '• Ex 10.6: t=0.90 s @ 1530 m/s ⇒ d = 1530 × 0.45 = 688.5 m!')}</text>
      <text x="428" y="358" font-size="9.2" font-weight="700" fill="${p.text}">${esc(hi ? '• प्रश्न 13: t = 4 s @ 1500 m/s ⇒ गहराई = 3000 m | Ex Q10: 3812.5 m' : '• In-Text Q13: t=4s @ 1500 = 3000 m | Ex Q10: t=5s @ 1525 = 3812.5 m')}</text>
      <text x="428" y="378" font-size="9" font-weight="700" fill="${p.muted}">${esc(hi ? '• चमगादड़/डॉल्फिन: पराश्रव्य तरंग से शिकार खोज | ड्रोन: निम्न-आवृत्ति चौकसी!' : '• Bats/Dolphins hunt via ultrasound; Drones tracked via acoustic watch!')}</text>
    </svg>`;
  }

  return '';
}
