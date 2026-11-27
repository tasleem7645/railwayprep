/**
 * Class 10 NCERT Science — Chapter 7: How Do Organisms Reproduce? (जीव जनन कैसे करते हैं?)
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

export function renderC10Ch7ReproDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';
  const suf = `${theme}_${lang}`;

  if (key === 'c10-ch7-blueprint-mindmap') {
    const title = hi ? 'अध्याय 7 ब्लूप्रिंट: DNA प्रतिकृति, अलैंगिक विधियाँ, पुष्प निषेचन व मानव जनन-स्वास्थ्य' : 'Ch 7 Blueprint: DNA Copying, Asexual Modes, Angiosperm Flower & Human Reproductive Health';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="34" rx="9" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
      <text x="410" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Card 1 -->
      <rect x="20" y="60" width="378" height="146" rx="12" fill="${p.cyanBg}" stroke="${p.cyan}"/>
      <text x="34" y="82" font-size="12.5" font-weight="800" fill="${p.cyan}">${esc(hi ? '7.1 DNA प्रतिकृति व विभिन्नता महत्त्व' : '7.1 DNA Copying & Survival Variation')}</text>
      <text x="34" y="105" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'DNA = शारीरिक अभिकल्प ब्लूप्रिंट (प्रोटीन निर्माण संदेश)' : 'DNA holds protein blueprint deciding body design')}</text>
      <text x="34" y="126" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'प्रतिकृति + अतिरिक्त कोशिकीय संरचना का निर्माण' : 'Creates extra cellular apparatus along with DNA copy')}</text>
      <text x="34" y="147" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'विभिन्नता व्यष्टि नहीं बल्कि स्पीशीज के अस्तित्व हेतु उपयोगी' : 'Variation aids species survival (heat-resistant bacteria)')}</text>
      <text x="34" y="168" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'लैंगिक जनन: अर्द्धसूत्री विभाजन (अर्ध n+n → 2n)' : 'Sexual Meiosis halves DNA (23 + 23 → 46 zygote)')}</text>

      <!-- Card 2 -->
      <rect x="422" y="60" width="378" height="146" rx="12" fill="${p.amberBg}" stroke="${p.amber}"/>
      <text x="436" y="82" font-size="12.5" font-weight="800" fill="${p.amber}">${esc(hi ? '7.2 अलैंगिक जनन की 6 मुख्य विधियाँ' : '7.2 Six Asexual Reproduction Modes')}</text>
      <text x="436" y="105" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'विखंडन: अमीबा (किसी तल), लेस्मानिया (चाबुक), प्लैज्मोडियम (बहु)' : 'Fission: Amoeba (any), Leishmania (whip), Plasmodium (multi)')}</text>
      <text x="436" y="126" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'खंडन: स्पाइरोगाइरा | पुनरुद्भवन: प्लेनेरिया, हाइड्रा' : 'Fragmentation: Spirogyra | Regeneration: Planaria/Hydra')}</text>
      <text x="436" y="147" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'मुकुलन: हाइड्रा, यीस्ट (क्र. 7.1)' : 'Budding: Hydra & Yeast (Activity 7.1)')}</text>
      <text x="436" y="168" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'कायिक: ब्रायोफिलम पत्ती, आलू आंख | बीजाणु: राइजोपस' : 'Vegetative: Bryophyllum leaf, Potato | Spores: Rhizopus')}</text>

      <!-- Card 3 -->
      <rect x="20" y="218" width="378" height="148" rx="12" fill="${p.violetBg}" stroke="${p.violet}"/>
      <text x="34" y="240" font-size="12.5" font-weight="800" fill="${p.violet}">${esc(hi ? '7.3.2 पुष्पी पादप लैंगिक जनन व बीज' : '7.3.2 Angiosperm Flower, Pollination & Seed')}</text>
      <text x="34" y="263" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'एकलिंगी: पपीता, तरबूज | उभयलिंगी: गुड़हल, सरसों' : 'Unisexual: Papaya/Watermelon | Bisexual: Hibiscus/Mustard')}</text>
      <text x="34" y="284" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'पुंकेसर (परागकोश + तंतु) | स्त्रीकेसर (वर्तिकाग्र + वर्तिका + अंडाशय)' : 'Stamen (Anther+Filament) | Pistil (Stigma+Style+Ovary)')}</text>
      <text x="34" y="305" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'पराग नलिका वर्तिका से बीजांड तक • बीजांड → बीज | अंडाशय → फल' : 'Pollen tube via style • Ovule → Seed | Ovary → Fruit')}</text>
      <text x="34" y="326" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'अंकुरण (चित्र 7.9): बीजपत्र (भोजन), प्रांकुर (प्ररोह), मूलांकुर (जड़)' : 'Seed (Fig 7.9): Cotyledon (food), Plumule (shoot), Radicle (root)')}</text>

      <!-- Card 4 -->
      <rect x="422" y="218" width="378" height="148" rx="12" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="436" y="240" font-size="12.5" font-weight="800" fill="${p.rose}">${esc(hi ? '7.3.3 मानव जनन तंत्र, प्लेसेंटा व गर्भनिरोधन' : '7.3.3 Human Tracts, Placenta, Contraception & STDs')}</text>
      <text x="436" y="263" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'नर: वृषण कोष (कम ताप), शुक्राशय+प्रोस्टेट, उभय मूत्रमार्ग' : 'Male: Scrotum (cool temp), Prostate+Seminal, Urethra')}</text>
      <text x="436" y="284" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'मादा: अंडवाहिका (निषेचन), गर्भाशय (रोपण), प्लेसेंटा (पोषण/9 मास)' : 'Female: Oviduct (fertilisation), Uterus, Placenta (9 mo)')}</text>
      <text x="436" y="305" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'ऋतुस्राव (2–8 दिन) • अंड जीवित ~1 दिन' : 'Menstruation (2–8 days) • Unfertilised egg lives ~1 day')}</text>
      <text x="436" y="326" font-size="11" font-weight="700" fill="${p.text}">• ${esc(hi ? 'STD: जीवाणु (गोनोरिया, सिफिलिस) | वायरस (मस्सा, HIV-AIDS)' : 'STDs: Bacterial (Gonorrhoea/Syphilis) | Viral (Warts/HIV)')}</text>

      <rect x="20" y="374" width="780" height="30" rx="8" fill="${p.tealBg}" stroke="${p.teal}"/>
      <text x="410" y="393" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.text}">🎯 ${esc(hi ? 'परीक्षा सूत्र: केवल कंडोम STD रोक सकता है — कॉपर-T, गोलियाँ या शल्यक्रिया STD नहीं रोकतीं (पृ. 138 Q5)!' : 'CBT Rule: ONLY Condom gives STD protection — Copper-T, Oral Pills & Vasectomy do NOT block STDs (p.138 Q5)!')}</text>
    </svg>`;
  }

  if (key === 'c10-ch7-asexual-modes-comparison') {
    const title = hi ? 'अलैंगिक जनन के 6 प्रारूप (चित्र 7.1–7.6): विखंडन, खंडन, पुनरुद्भवन, मुकुलन, कायिक, बीजाणु' : 'Six Asexual Modes (Fig 7.1–7.6): Fission, Fragmentation, Regeneration, Budding, Vegetative, Spores';
    const items = [
      { tag: hi ? '1a. अमीबा (द्विखंडन)' : '1a. Amoeba Binary', sub: hi ? 'किसी भी तल से 2 कोशिका' : 'Splits in ANY plane', eg: hi ? 'अनिश्चित विभाजन तल' : 'Fig 7.1(a) protozoa', col: p.cyan },
      { tag: hi ? '1b. लेस्मानिया (द्विखंडन)' : '1b. Leishmania', sub: hi ? 'कालाजार कारक, चाबुक संरचना' : 'Kala-azar, whip structure', eg: hi ? 'निश्चित तल से विभाजन' : 'Definite plane Fig 7.1(b)', col: p.amber },
      { tag: hi ? '1c. प्लैज्मोडियम (बहुखंडन)' : '1c. Plasmodium Multi', sub: hi ? 'मलेरिया परजीवी' : 'Malaria parasite', eg: hi ? 'एकसाथ अनेक संतति कोशिका' : 'Many daughter cells Fig 7.2', col: p.rose },
      { tag: hi ? '2. खंडन (स्पाइरोगाइरा)' : '2. Fragmentation', sub: hi ? 'सरल बहुकोशिकीय शैवाल' : 'Simple multicellular only', eg: hi ? 'टुकड़े बढ़कर नए जीव (क्र. 7.4)' : 'Filaments grow (Act 7.4)', col: p.emerald },
      { tag: hi ? '3. पुनरुद्भवन (प्लेनेरिया)' : '3. Regeneration', sub: hi ? 'विशिष्ट कोशिका क्रमप्रसरण' : 'Specialist cells/Hydra', eg: hi ? 'जनन के समान नहीं (चित्र 7.3)' : 'Not normal repro Fig 7.3', col: p.violet },
      { tag: hi ? '4. मुकुलन (हाइड्रा/यीस्ट)' : '4. Budding', sub: hi ? 'पुनर्जनन कोशिकाओं का उभार' : 'Hydra buds & Yeast Act 7.1', eg: hi ? 'मुकुल पृथक हो नया जीव (7.4)' : 'Bud detaches when mature', col: p.teal },
      { tag: hi ? '5. कायिक व ऊतक संवर्धन' : '5. Vegetative+Callus', sub: hi ? 'ब्रायोफिलम पत्ती, आलू, गन्ना' : 'Bryophyllum notches, Potato', eg: hi ? 'बीज रहित केला/गुलाब, कैलस' : 'Clonal fast flower/Callus', col: p.emerald },
      { tag: hi ? '6. बीजाणु (राइजोपस)' : '6. Spore Formation', sub: hi ? 'ब्रेड मोल्ड कवक तंतु (क्र. 7.2)' : 'Hyphae (non-rep) + Sporangia', eg: hi ? 'मोटी भित्ति बीजाणु रक्षा (7.6)' : 'Thick wall survives harsh air', col: p.amber },
    ];
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>
      ${items.map((it, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 396;
        const y = 58 + row * 82;
        return `<rect x="${x}" y="${y}" width="384" height="72" rx="10" fill="${p.cardAlt}" stroke="${it.col}" stroke-width="1.3"/>
          <rect x="${x + 10}" y="${y + 10}" width="174" height="24" rx="6" fill="${it.col}"/>
          <text x="${x + 97}" y="${y + 26}" text-anchor="middle" font-size="11" font-weight="900" fill="#07101E">${esc(it.tag)}</text>
          <text x="${x + 196}" y="${y + 26}" font-size="11" font-weight="800" fill="${p.text}">${esc(it.sub)}</text>
          <text x="${x + 14}" y="${y + 56}" font-size="11" font-weight="700" fill="${p.muted}">➜ ${esc(it.eg)}</text>`;
      }).join('')}
      <text x="410" y="402" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber}">${esc(hi ? 'ऊतक संवर्धन बॉक्स: वर्धमान शीर्ष कोशिका → पोषक माध्यम में कैलस समूह → हार्मोन माध्यम → मिट्टी में पौधा!' : 'Tissue Culture Box: Shoot-tip cells → nutrient Callus mass → hormone medium → soil plantlet!')}</text>
    </svg>`;
  }

  if (key === 'c10-ch7-flower-fertilisation-seed') {
    const title = hi ? 'आवृतबीजी पुष्प भाग (चित्र 7.7), पराग नलिका निषेचन (7.8) एवं बीज अंकुरण (7.9)' : 'Flower Anatomy (Fig 7.7), Pollen Tube Path (Fig 7.8) & Seed Germination (Fig 7.9)';
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_fl_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.amber}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.violetBg}" stroke="${p.violet}"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Flower & Pollen Tube (Fig 7.7 + 7.8) -->
      <rect x="20" y="56" width="466" height="346" rx="12" fill="${p.cardAlt}" stroke="${p.emerald}"/>
      <text x="253" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.emerald}">${esc(hi ? 'उभयलिंगी पुष्प (गुड़हल/सरसों) व परागण → निषेचन पथ' : 'Bisexual Flower (Hibiscus/Mustard) & Pollination → Fertilisation')}</text>

      <!-- Stylized Carpel / Pistil -->
      <ellipse cx="210" cy="252" rx="56" ry="62" fill="${p.tealBg}" stroke="${p.teal}" stroke-width="2"/>
      <rect x="197" y="128" width="26" height="72" fill="${p.tealBg}" stroke="${p.teal}" stroke-width="2"/>
      <ellipse cx="210" cy="122" rx="28" ry="11" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="2"/>
      <!-- Ovule & Female Egg -->
      <ellipse cx="210" cy="256" rx="26" ry="32" fill="${p.card}" stroke="${p.violet}" stroke-width="1.6"/>
      <circle cx="210" cy="264" r="9" fill="${p.rose}"/>
      <!-- Pollen grain + tube -->
      <circle cx="210" cy="113" r="6" fill="${p.amber}"/>
      <path d="M210,119 L210,254" fill="none" stroke="${p.amber}" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#arr_fl_${suf})"/>
      <!-- Stamen left & right -->
      <path d="M150,250 Q120,190 128,150" fill="none" stroke="${p.amber}" stroke-width="2.5"/>
      <ellipse cx="128" cy="144" rx="14" ry="8" fill="${p.amber}"/>
      <path d="M270,250 Q300,190 292,150" fill="none" stroke="${p.amber}" stroke-width="2.5"/>
      <ellipse cx="292" cy="144" rx="14" ry="8" fill="${p.amber}"/>

      <!-- Labels -->
      <text x="128" y="128" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'परागकोश (परागकण)' : 'Anther (Pollen)')}</text>
      <text x="90" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="${p.text}">${esc(hi ? 'तंतु (पुंकेसर)' : 'Filament (Stamen)')}</text>
      <text x="342" y="122" font-size="11" font-weight="800" fill="${p.amber}">${esc(hi ? '← वर्तिकाग्र (चिपचिपा)' : '← Stigma (sticky)')}</text>
      <text x="342" y="168" font-size="11" font-weight="800" fill="${p.teal}">${esc(hi ? '← वर्तिका (पराग नलिका)' : '← Style (pollen tube)')}</text>
      <text x="342" y="246" font-size="11" font-weight="800" fill="${p.violet}">${esc(hi ? '← अंडाशय → फल बने' : '← Ovary → Fruit')}</text>
      <text x="342" y="268" font-size="11" font-weight="800" fill="${p.rose}">${esc(hi ? '← बीजांड (अंड) → बीज' : '← Ovule (egg) → Seed')}</text>

      <!-- Pollination & Fate box -->
      <rect x="34" y="328" width="438" height="62" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="48" y="348" font-size="10.8" font-weight="800" fill="${p.text}">• ${esc(hi ? 'स्वपरागण: एक ही पुष्प में | परपरागण: दूसरे पुष्प पर (वायु, जल, जंतु)' : 'Self-pollination (same flower) vs Cross (wind, water, animals)')}</text>
      <text x="48" y="368" font-size="10.8" font-weight="800" fill="${p.emerald}">• ${esc(hi ? 'निषेचन बाद: बीजांड → बीज (भ्रूण) | अंडाशय → फल (दल/बाह्यदल गिरें)' : 'Post-fertilisation: Ovule → Seed (Embryo) | Ovary → Fruit')}</text>
      <text x="48" y="384" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? 'एकलिंगी पुष्प (पपीता, तरबूज) केवल पुंकेसर या स्त्रीकेसर रखते हैं' : 'Unisexual (Papaya, Watermelon) have ONLY stamen OR pistil')}</text>

      <!-- Right: Fig 7.9 Seed Germination -->
      <rect x="498" y="56" width="302" height="346" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
      <text x="649" y="78" text-anchor="middle" font-size="12" font-weight="800" fill="${p.amber}">${esc(hi ? 'चित्र 7.9: चने का अंकुरण (क्र. 7.7)' : 'Fig 7.9: Dicot Seed Germination (Act 7.7)')}</text>
      <!-- Two Cotyledons -->
      <ellipse cx="606" cy="212" rx="46" ry="72" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="2"/>
      <ellipse cx="692" cy="212" rx="46" ry="72" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="2"/>
      <!-- Plumule upward -->
      <path d="M649,192 Q649,138 634,120 M649,160 L666,134" fill="none" stroke="${p.emerald}" stroke-width="4" stroke-linecap="round"/>
      <!-- Radicle downward -->
      <path d="M649,212 Q652,272 642,306" fill="none" stroke="${p.cyan}" stroke-width="4" stroke-linecap="round"/>

      <rect x="520" y="92" width="258" height="24" rx="6" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
      <text x="649" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="${p.emerald}">${esc(hi ? 'प्रांकुर (Plumule) → भावी प्ररोह / तना' : 'Plumule → Future Shoot / Stem')}</text>

      <rect x="520" y="314" width="258" height="24" rx="6" fill="${p.cyanBg}" stroke="${p.cyan}"/>
      <text x="649" y="330" text-anchor="middle" font-size="11" font-weight="800" fill="${p.cyan}">${esc(hi ? 'मूलांकुर (Radicle) → भावी जड़' : 'Radicle → Future Root')}</text>

      <rect x="520" y="346" width="258" height="44" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="649" y="365" text-anchor="middle" font-size="11" font-weight="800" fill="${p.text}">${esc(hi ? 'बीजपत्र (Cotyledons): खाद्य संग्रह' : 'Cotyledons: Stored Food Reserve')}</text>
      <text x="649" y="382" text-anchor="middle" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? 'रट्टा: प से प्रांकुर→प्ररोह • म से मूलांकुर→मूल' : 'Lock: R = Radicle→Root | P = Plumule→Plant shoot')}</text>
    </svg>`;
  }

  if (key === 'c10-ch7-human-repro-contraception') {
    const title = hi ? 'मानव नर व मादा जनन मार्ग (चित्र 7.10–7.11), प्लेसेंटा, ऋतुस्राव व गर्भनिरोधन' : 'Human Male & Female Anatomy Flow (Fig 7.10–7.11), Placenta, Menstruation & Contraception';
    return `<svg viewBox="0 0 820 430" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
    <rect x="6" y="6" width="808" height="418" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
    <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.roseBg}" stroke="${p.rose}"/>
    <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

    <!-- Top Left: Male Tract -->
    <rect x="20" y="56" width="380" height="186" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
    <text x="34" y="76" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? '7.3.3(a) नर जनन तंत्र मार्ग (चित्र 7.10)' : '7.3.3(a) Male Reproductive Flow (Fig 7.10)')}</text>
    <text x="34" y="98" font-size="10.8" font-weight="800" fill="${p.text}">1) ${esc(hi ? 'वृषण (Testes) → वृषण कोष (उदर बाहर कम ताप हेतु)' : 'Testes in Scrotum (outside abdomen = lower temp!)')}</text>
    <text x="42" y="115" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(hi ? '→ शुक्राणु निर्माण + टेस्टोस्टेरॉन हार्मोन स्रवण' : '→ Produces sperm + Testosterone (male puberty hormone)')}</text>
    <text x="34" y="135" font-size="10.8" font-weight="800" fill="${p.text}">2) ${esc(hi ? 'शुक्रवाहिका (Vas deferens) → मूत्राशय लूप:' : 'Vas Deferens carries sperm upward:')}</text>
    <text x="42" y="152" font-size="10.2" font-weight="700" fill="${p.amber}">${esc(hi ? 'प्रोस्टेट + शुक्राशय स्राव = तरल स्थानांतरण माध्यम + पोषण' : 'Prostate + Seminal Vesicles add fluid medium + NUTRITION')}</text>
    <text x="34" y="172" font-size="10.8" font-weight="800" fill="${p.emerald}">3) ${esc(hi ? 'मूत्रमार्ग (Urethra) = मूत्र व शुक्राणु का उभय मार्ग!' : 'Urethra = COMMON passage for urine & semen!')}</text>
    <text x="34" y="194" font-size="10.2" font-weight="700" fill="${p.text}">${esc(hi ? '• शुक्राणु में लंबी पूँछ होती है जो अंडाणु की ओर तैरने में सहायक है' : '• Sperm has genetic payload + long tail to swim toward egg')}</text>
    <text x="34" y="214" font-size="10.2" font-weight="700" fill="${p.rose}">${esc(hi ? '• पुरुष शल्यक्रिया (Vasectomy): शुक्रवाहिका अवरुद्ध करना' : '• Vasectomy: Surgically blocking Vas Deferens stops transfer')}</text>

    <!-- Top Right: Female Tract -->
    <rect x="414" y="56" width="386" height="186" rx="12" fill="${p.cardAlt}" stroke="${p.violet}"/>
    <text x="428" y="76" font-size="12" font-weight="800" fill="${p.violet}">${esc(hi ? '7.3.3(b-c) मादा जनन व प्लेसेंटा (चित्र 7.11)' : '7.3.3(b-c) Female Tract & Placenta (Fig 7.11)')}</text>
    <text x="428" y="98" font-size="10.8" font-weight="800" fill="${p.text}">1) ${esc(hi ? 'अंडाशय (Ovaries): जन्म से हजारों अपरिपक्व अंड (1/माह)' : 'Ovaries: thousands immature eggs at birth (1 matures/mo)')}</text>
    <text x="428" y="118" font-size="10.8" font-weight="800" fill="${p.amber}">2) ${esc(hi ? 'डिंबवाहिनी (Fallopian tube) = निषेचन का वास्तविक स्थल ✓' : 'Oviduct / Fallopian Tube = EXACT FERTILISATION SITE ✓')}</text>
    <text x="428" y="138" font-size="10.8" font-weight="800" fill="${p.text}">3) ${esc(hi ? 'गर्भाशय (Uterus): भ्रूण रोपण + ग्रीवा → योनि मार्ग' : 'Uterus: Embryo Implantation (9 mo gestation) • Cervix → Vagina')}</text>
    <text x="428" y="158" font-size="10.8" font-weight="800" fill="${p.emerald}">4) ${esc(hi ? 'अपरा (Placenta): तश्तरीनुमा ऊतक (भ्रूण प्रवर्ध + माँ रक्तस्थान)' : 'Placenta: Disc tissue (villi + mother blood) → Glucose/O₂/Waste')}</text>
    <text x="428" y="178" font-size="10.8" font-weight="800" fill="${p.rose}">5) ${esc(hi ? 'बिना निषेचन: अंड ~1 दिन जीवित → ऋतुस्राव (2–8 दिन)' : 'Unfertilised: Egg lives ~1 day → thick lining sheds (2–8 days)')}</text>
    <text x="428" y="198" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(hi ? '• महिला नसबंदी (Tubectomy): अंडवाहिनी अवरुद्ध • भ्रूण लिंग जांच गैरकानूनी' : '• Tubectomy blocks Oviducts • Prenatal sex-selection is illegal')}</text>

    <!-- Bottom Band: Contraception & STD Matrix -->
    <rect x="20" y="254" width="780" height="158" rx="12" fill="${p.cardAlt}" stroke="${p.amber}"/>
    <text x="36" y="276" font-size="12" font-weight="800" fill="${p.amber}">${esc(hi ? '7.3.3(d) गर्भनिरोधन की 4 विधियाँ व यौन संचारित रोग (STDs — Group D / Tech Shift 15 & 22)' : '7.3.3(d) Four Contraceptive Methods & STD Classification (NCERT p.137–138)')}</text>
    <text x="36" y="300" font-size="11" font-weight="800" fill="${p.emerald}">1. ${esc(hi ? 'यांत्रिक अवरोध (Condoms / योनि आवरण): शुक्राणु रोकता + एकमात्र विधि जो STD से कुछ रक्षा दे ✓' : 'Mechanical Barrier (Condoms): Blocks sperm reach + ONLY contraceptive giving partial STD defense ✓')}</text>
    <text x="36" y="322" font-size="11" font-weight="700" fill="${p.text}">2. ${esc(hi ? 'हार्मोनल गोलियाँ (Oral Pills): हार्मोन संतुलन बदल अंड मोचन रोकती हैं (विपरीत प्रभाव संभव, STD नहीं रोके ✗)' : 'Hormonal Oral Pills: Alter hormones preventing egg release (possible side-effects, NO STD block ✗)')}</text>
    <text x="36" y="344" font-size="11" font-weight="700" fill="${p.text}">3. ${esc(hi ? 'IUCD (लूप / कॉपर-T): गर्भाशय में स्थापित, जलन संभव, पर STD से रक्षा नहीं करती ✗ (पृ. 138 Q5)' : 'IUCD (Loop / Copper-T): Fitted inside uterus (possible irritation), DOES NOT protect against STDs ✗ (Q5)')}</text>
    <text x="36" y="366" font-size="11" font-weight="700" fill="${p.text}">4. ${esc(hi ? 'शल्यक्रिया (Vasectomy / Tubectomy): दीर्घकालिक, सावधानी न रखने पर संक्रमण संभव (STD नहीं रोके ✗)' : 'Surgical Block (Vasectomy / Tubectomy): Safe long-term block unless careless infection (NO STD block ✗)')}</text>
    <rect x="36" y="378" width="748" height="24" rx="6" fill="${p.roseBg}" stroke="${p.rose}"/>
    <text x="410" y="394" text-anchor="middle" font-size="11" font-weight="800" fill="${p.text}">⚡ ${esc(hi ? 'STD वर्ग: जीवाणु जनित = गोनोरिया व सिफिलिस | विषाणु (वायरस) जनित = मस्सा (Warts) व HIV-AIDS!' : 'STD Classification: BACTERIAL = Gonorrhoea & Syphilis  |  VIRAL = Warts & HIV-AIDS!')}</text>
  </svg>`;
  }

  return '';
}
