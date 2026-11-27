/**
 * Class 10 NCERT Science — Chapter 3: Metals & Non-Metals (धातु एवं अधातु)
 * Four Clean Dual-Theme (dark UI / light print-PDF) Labeled Vector Plates (`hi` / `en`)
 */

function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getPalette(theme) {
  const isLight = theme === 'light';
  return {
    isLight,
    bg: isLight ? '#FFFFFF' : '#080E1E',
    card: isLight ? '#F8FAFC' : '#0F172A',
    cardAlt: isLight ? '#EFF6FF' : '#111C33',
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

export function renderC10Ch3MetalsDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const p = getPalette(theme);
  const hi = lang !== 'en';
  const suf = `${theme}_${lang}`;

  if (key === 'c10-ch3-blueprint-mindmap') {
    const t = {
      title: hi ? 'अध्याय 3 मास्टर ब्लूप्रिंट: धातु, अधातु, सक्रियता, धातुकर्म व संक्षारण' : 'Ch 3 Master Blueprint: Properties, Reactivity, Metallurgy & Corrosion',
      b1t: hi ? '3.1 भौतिक गुण व 6 प्रमुख अपवाद' : '3.1 Physical & 6 CBT Exceptions',
      b1a: hi ? 'चमक, आघातवर्ध्यता, तन्यता (1g Au → 2 km)' : 'Malleable, Ductile (1g Au → 2 km wire)',
      b1b: hi ? 'अपवाद: Hg (द्रव), Br₂ (द्रव अधातु)' : 'Liquid: Hg (metal), Br₂ (non-metal)',
      b1c: hi ? 'Ga/Cs हथेली पर पिघलें • Li/Na/K चाकू से कटें' : 'Ga/Cs melt on palm • Li/Na/K knife-soft',
      b1d: hi ? 'I₂ चमकदार • हीरा कठोरतम • ग्रेफाइट सुचालक' : 'I₂ lustrous • Diamond hardest • Graphite conducts',
      b2t: hi ? '3.2 रासायनिक गुण व सक्रियता श्रेणी' : '3.2 Chemical Reactions & Series',
      b2a: hi ? 'उभयधर्मी: Al₂O₃, ZnO (अम्ल + क्षार दोनों)' : 'Amphoteric: Al₂O₃ & ZnO (Acid + NaOH)',
      b2b: hi ? 'जल: Na/K आग • Ca/Mg तैरें • Fe भाप (Fe₃O₄)' : 'H₂O: K/Na fire • Ca/Mg float • Fe steam',
      b2c: hi ? 'HNO₃ संग H₂ नहीं (केवल अति तनु से Mg, Mn)' : 'HNO₃ no H₂ (except dil. HNO₃ + Mg, Mn)',
      b2d: hi ? 'एक्वा रेजिया: 3 HCl : 1 HNO₃ (सोना गलाए)' : 'Aqua Regia: 3 conc HCl : 1 conc HNO₃ (Au/Pt)',
      b3t: hi ? '3.3 आयनिक यौगिक व 3.4 धातुकर्म' : '3.3 Ionic Lattice & 3.4 Metallurgy',
      b3a: hi ? 'NaCl / MgCl₂: कठोर-भंगुर, उच्च गलनांक (CaO 2850K)' : 'Ionic: high MP/BP, brittle, aqueous/molten cond.',
      b3b: hi ? 'उच्च (K–Al): गलित क्लोराइड/ऑक्साइड विद्युत-अपघटन' : 'Top (K–Al): Electrolysis of molten salts',
      b3c: hi ? 'मध्यम (Zn–Cu): भर्जन (ZnS+O₂) / निस्तापन (ZnCO₃)' : 'Mid: Roasting (S²⁻) / Calcination (CO₃²⁻) + C/Al',
      b3d: hi ? 'निम्न (HgS/Cu₂S): केवल वायु तापन • थर्मिट (Fe₂O₃+2Al)' : 'Low: Air roast • Thermite: Fe₂O₃+2Al → 2Fe(l)',
      b4t: hi ? '3.4.6 परिष्करण, 3.5 संक्षारण व मिश्रातु' : '3.4.6 Refining, 3.5 Corrosion & Alloys',
      b4a: hi ? 'Cu शोधन: अशुद्ध एनोड, शुद्ध कैथोड, एनोड पंक' : 'Cu Refining: Impure Anode, Pure Cathode, Mud',
      b4b: hi ? 'जंग: हवा+जल (क्र. 3.14) • Ag₂S काला • CuCO₃ हरा' : 'Rust: Air+Water • Ag₂S black • Cu green coat',
      b4c: hi ? 'यशदलेपन: Zn खरोंच पर भी लोहे को बचाए!' : 'Galvanising: Zn protects iron even if scratched',
      b4d: hi ? 'पीतल (Cu+Zn) • काँसा (Cu+Sn) • सोल्डर (Pb+Sn)' : 'Brass Cu+Zn • Bronze Cu+Sn • Solder Pb+Sn',
      foot: hi ? 'दिल्ली लौह स्तंभ: 1600 वर्ष पुराना, ऊँचाई 8 m, भार 6000 kg (जंग-रोधी)' : 'Delhi Iron Pillar (~1600 yrs): 8 m tall, 6 tonnes (6000 kg), rust-resistant',
    };
    return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_bp_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.teal}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="16" width="780" height="34" rx="9" fill="${p.tealBg}" stroke="${p.teal}" stroke-width="1.2"/>
      <text x="410" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="${p.text}">${esc(t.title)}</text>

      <!-- Card 1 -->
      <rect x="22" y="64" width="376" height="142" rx="12" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.4"/>
      <text x="36" y="86" font-size="13" font-weight="800" fill="${p.cyan}">${esc(t.b1t)}</text>
      <text x="36" y="110" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b1a)}</text>
      <text x="36" y="132" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b1b)}</text>
      <text x="36" y="154" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b1c)}</text>
      <text x="36" y="176" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b1d)}</text>

      <!-- Card 2 -->
      <rect x="422" y="64" width="376" height="142" rx="12" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.4"/>
      <text x="436" y="86" font-size="13" font-weight="800" fill="${p.amber}">${esc(t.b2t)}</text>
      <text x="436" y="110" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b2a)}</text>
      <text x="436" y="132" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b2b)}</text>
      <text x="436" y="154" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b2c)}</text>
      <text x="436" y="176" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b2d)}</text>

      <!-- Card 3 -->
      <rect x="22" y="220" width="376" height="142" rx="12" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.4"/>
      <text x="36" y="242" font-size="13" font-weight="800" fill="${p.violet}">${esc(t.b3t)}</text>
      <text x="36" y="266" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b3a)}</text>
      <text x="36" y="288" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b3b)}</text>
      <text x="36" y="310" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b3c)}</text>
      <text x="36" y="332" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b3d)}</text>

      <!-- Card 4 -->
      <rect x="422" y="220" width="376" height="142" rx="12" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.4"/>
      <text x="436" y="242" font-size="13" font-weight="800" fill="${p.emerald}">${esc(t.b4t)}</text>
      <text x="436" y="266" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b4a)}</text>
      <text x="436" y="288" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b4b)}</text>
      <text x="436" y="310" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b4c)}</text>
      <text x="436" y="332" font-size="11.5" font-weight="700" fill="${p.text}">• ${esc(t.b4d)}</text>

      <rect x="22" y="372" width="776" height="30" rx="8" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.1"/>
      <text x="410" y="391" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.text}">🏛️ ${esc(t.foot)}</text>
    </svg>`;
  }

  if (key === 'c10-ch3-reactivity-water-acid-flow') {
    const title = hi ? 'सक्रियता श्रेणी (सारणी 3.2), जल/भाप उपकरण (चित्र 3.3) एवं HNO₃ व एक्वा रेजिया नियम' : 'Reactivity Series (Table 3.2), Steam Rig (Fig 3.3), HNO₃ Exception & Aqua Regia';
    const ladder = [
      { sym: 'K', nm: hi ? 'पोटैशियम' : 'Potassium', act: hi ? 'किरोसिन • ठंडा जल = तुरंत आग' : 'Kerosene • Cold H₂O = catches fire', col: p.rose },
      { sym: 'Na', nm: hi ? 'सोडियम' : 'Sodium', act: hi ? 'किरोसिन • तीव्र ऊष्माक्षेपी H₂ आग' : 'Kerosene • Violent H₂ ignition', col: p.rose },
      { sym: 'Ca', nm: hi ? 'कैल्सियम' : 'Calcium', act: hi ? 'ठंडा जल धीमा • H₂ से तैरता है!' : 'Cold H₂O • Floats (H₂ bubbles)', col: p.amber },
      { sym: 'Mg', nm: hi ? 'मैग्नीशियम' : 'Magnesium', act: hi ? 'गर्म जल में तैरता + अति तनु HNO₃' : 'Hot H₂O floats + dil. HNO₃→H₂', col: p.amber },
      { sym: 'Al', nm: hi ? 'ऐलुमिनियम' : 'Aluminium', act: hi ? 'भाप (Al₂O₃) • एनोडीकरण • उभयधर्मी' : 'Steam (Al₂O₃) • Anodising • Ampho.', col: p.teal },
      { sym: 'Zn', nm: hi ? 'जिंक (जस्ता)' : 'Zinc', act: hi ? 'भाप + तनु HCl • उभयधर्मी (ZnO)' : 'Steam + Acid • Yashadlepan', col: p.teal },
      { sym: 'Fe', nm: hi ? 'आयरन (लोहा)' : 'Iron', act: hi ? 'भाप से 3Fe + 4H₂O → Fe₃O₄ + 4H₂' : 'Steam: Fe₃O₄ + H₂ • Displaces Cu', col: p.cyan },
      { sym: 'Pb', nm: hi ? 'लेड (सीसा)' : 'Lead', act: hi ? 'जल से क्रिया नहीं • HCl बहुत मंद' : 'No water rxn • Above [H]', col: p.cyan },
      { sym: '[H]', nm: hi ? '[हाइड्रोजन]' : '[Hydrogen]', act: hi ? 'मानक सीमा (नीचे धातु अम्ल से H₂ न दे)' : 'Boundary: below = NO H₂ from acid', col: p.muted },
      { sym: 'Cu', nm: hi ? 'कॉपर (ताँबा)' : 'Copper', act: hi ? 'जल/तनु HCl नहीं • काला CuO / हरा जंग' : 'No HCl rxn • Black CuO / Green coat', col: p.violet },
      { sym: 'Hg / Ag / Au', nm: hi ? 'पारा / चाँदी / सोना' : 'Mercury / Silver / Gold', act: hi ? 'मुक्‍त/सिनाबार • एक्वा रेजिया में Au गले' : 'Native/HgS • Au dissolves in 3:1 HCl:HNO₃', col: p.emerald },
    ];
    return `<svg viewBox="0 0 820 460" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_react_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.cyan}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="448" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.amberBg}" stroke="${p.amber}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Left: Reactivity Ladder -->
      <rect x="20" y="56" width="446" height="386" rx="12" fill="${p.cardAlt}" stroke="${p.border}"/>
      <text x="34" y="76" font-size="12" font-weight="800" fill="${p.teal}">${esc(hi ? 'घटती अभिक्रियाशीलता क्रम (K सबसे ऊपर → Au सबसे नीचे)' : 'Decreasing Reactivity Order (Most Reactive Top → Least Bottom)')}</text>
      ${ladder.map((r, i) => {
        const y = 86 + i * 31.5;
        return `<rect x="30" y="${y}" width="426" height="27" rx="6" fill="${p.card}" stroke="${r.col}" stroke-width="1"/>
          <rect x="34" y="${y + 3}" width="72" height="21" rx="4" fill="${r.col}"/>
          <text x="70" y="${y + 17.5}" text-anchor="middle" font-size="10.5" font-weight="900" fill="#07101E">${esc(r.sym)}</text>
          <text x="114" y="${y + 17.5}" font-size="10.5" font-weight="800" fill="${p.text}">${esc(r.nm)}</text>
          <text x="448" y="${y + 17.5}" text-anchor="end" font-size="10" font-weight="700" fill="${p.muted}">${esc(r.act)}</text>`;
      }).join('')}

      <!-- Right Top: Fig 3.3 Steam Rig -->
      <rect x="480" y="56" width="320" height="190" rx="12" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.3"/>
      <text x="640" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 3.3: धातु (Al/Fe/Zn) पर भाप की क्रिया' : 'Fig 3.3: Action of Steam on Al / Fe / Zn')}</text>
      <!-- Glass tube -->
      <rect x="502" y="114" width="142" height="28" rx="6" fill="${p.card}" stroke="${p.text}" stroke-width="1.4"/>
      <rect x="507" y="118" width="28" height="20" rx="3" fill="${p.cyan}" opacity="0.5"/>
      <text x="521" y="106" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(hi ? 'गीला काँच तंतु' : 'Glass wool+H₂O')}</text>
      <rect x="572" y="119" width="38" height="18" rx="3" fill="${p.amber}" opacity="0.85"/>
      <text x="591" y="106" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(hi ? 'धातु नमूना' : 'Metal Sample')}</text>
      <!-- Burner flame under tube -->
      <path d="M518,162 Q522,146 526,162 Z" fill="${p.amber}"/>
      <path d="M587,162 Q591,146 595,162 Z" fill="${p.amber}"/>
      <text x="556" y="178" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'बर्नर ऊष्मा → भाप बने' : 'Burner generates steam')}</text>
      <!-- Delivery tube to inverted jar -->
      <path d="M644,128 L692,128 L692,158 L725,158" fill="none" stroke="${p.teal}" stroke-width="2.5" marker-end="url(#arr_react_${suf})"/>
      <rect x="716" y="138" width="68" height="44" rx="5" fill="${p.card}" stroke="${p.border}"/>
      <rect x="730" y="96" width="40" height="58" rx="6" fill="${p.emeraldBg}" stroke="${p.emerald}" stroke-width="1.4"/>
      <text x="750" y="120" text-anchor="middle" font-size="11" font-weight="900" fill="${p.emerald}">H₂↑</text>
      <text x="750" y="196" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.text}">${esc(hi ? 'जल विस्थापन जार' : 'H₂ over water')}</text>
      <text x="640" y="218" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.text}">2Al + 3H₂O(g) → Al₂O₃ + 3H₂</text>
      <text x="640" y="234" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.text}">3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂</text>

      <!-- Right Bottom: HNO3 & Aqua Regia Box -->
      <rect x="480" y="258" width="320" height="184" rx="12" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.3"/>
      <text x="640" y="280" text-anchor="middle" font-size="12" font-weight="800" fill="${p.rose}">${esc(hi ? 'परीक्षा VIP बॉक्स: HNO₃ अपवाद व एक्वा रेजिया' : 'Exam VIP Box: HNO₃ Trap & Aqua Regia')}</text>
      <text x="494" y="304" font-size="10.8" font-weight="700" fill="${p.text}">1) ${esc(hi ? 'नाइट्रिक अम्ल (HNO₃) प्रबल ऑक्सीकारक है:' : 'HNO₃ is a strong oxidising agent:')}</text>
      <text x="502" y="322" font-size="10.3" font-weight="700" fill="${p.muted}">${esc(hi ? 'उत्पन्न H₂ को जल (H₂O) में ऑक्सीकृत कर खुद' : 'Oxidises H₂→H₂O & reduces to N₂O/NO/NO₂')}</text>
      <text x="502" y="338" font-size="10.3" font-weight="700" fill="${p.muted}">${esc(hi ? 'N₂O, NO या NO₂ में अपचयित हो जाता है।' : '(EXCEPT very dilute HNO₃ + Mg or Mn → H₂!)')}</text>
      <text x="494" y="358" font-size="10.8" font-weight="800" fill="${p.emerald}">✓ ${esc(hi ? 'अपवाद: केवल Mg व Mn + अति तनु HNO₃ → H₂↑' : '✓ ONLY Mg & Mn give H₂ with very dil. HNO₃')}</text>
      <line x1="494" y1="370" x2="786" y2="370" stroke="${p.rose}" stroke-dasharray="4 3"/>
      <text x="494" y="390" font-size="11" font-weight="900" fill="${p.amber}">2) ${esc(hi ? 'एक्वा रेजिया (रॉयल जल / अम्लराज):' : 'Aqua Regia (Royal Water):')}</text>
      <text x="494" y="410" font-size="10.8" font-weight="800" fill="${p.text}">${esc(hi ? 'ताज़ा 3 सांद्र HCl : 1 सांद्र HNO₃ अनुपात मिश्रण' : 'Fresh 3 Conc. HCl : 1 Conc. HNO₃ ratio mix')}</text>
      <text x="494" y="428" font-size="10.5" font-weight="700" fill="${p.muted}">${esc(hi ? '→ सोना (Au) व प्लैटिनम (Pt) को गला देता है!' : '→ Fuming corrosive that dissolves Gold & Pt!')}</text>
    </svg>`;
  }

  if (key === 'c10-ch3-ionic-metallurgy-flowchart') {
    const title = hi ? 'आयनिक आबंध (NaCl / MgCl₂) तथा अयस्क से शुद्ध धातु निष्कर्षण (चित्र 3.5–3.11)' : 'Ionic Electron Transfer (NaCl/MgCl₂) & Metallurgy Flowchart (Fig 3.5–3.11)';
    return `<svg viewBox="0 0 820 450" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
      <defs>
        <marker id="arr_met_${suf}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 Z" fill="${p.emerald}"/>
        </marker>
      </defs>
      <rect x="6" y="6" width="808" height="438" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.violetBg}" stroke="${p.violet}" stroke-width="1.2"/>
      <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

      <!-- Top Band: Ionic Bonding NaCl & MgCl2 -->
      <rect x="20" y="56" width="780" height="122" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
      <text x="36" y="76" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 3.5 व 3.6: धातु → अधातु इलेक्ट्रॉन स्थानांतरण (वैद्युत संयोजक / आयनिक समुच्चय)' : 'Fig 3.5 & 3.6: Electron Transfer Metal → Non-Metal (Ionic Aggregate, NOT Molecule)')}</text>
      <!-- NaCl Box -->
      <rect x="34" y="86" width="366" height="80" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="48" y="106" font-size="11.5" font-weight="800" fill="${p.amber}">Na (2,8,1) → Na⁺ (2,8) + e⁻</text>
      <text x="48" y="124" font-size="11.5" font-weight="800" fill="${p.emerald}">Cl (2,8,7) + e⁻ → Cl⁻ (2,8,8)</text>
      <text x="48" y="146" font-size="11" font-weight="700" fill="${p.text}">→ [Na⁺][ :Cl: ]⁻  •  ${esc(hi ? 'गलनांक 1074 K | क्वथनांक 1686 K' : 'MP 1074 K | BP 1686 K (Table 3.4)')}</text>
      <text x="48" y="160" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? 'ठोस: कुचालक • गलित/जलीय विलयन: सुचालक' : 'Solid: Non-conductor • Molten/Aq: Conducts!')}</text>
      <!-- MgCl2 Box -->
      <rect x="418" y="86" width="368" height="80" rx="8" fill="${p.card}" stroke="${p.border}"/>
      <text x="432" y="106" font-size="11.5" font-weight="800" fill="${p.amber}">Mg (2,8,2) → Mg²⁺ (2,8) + 2e⁻</text>
      <text x="432" y="124" font-size="11.5" font-weight="800" fill="${p.emerald}">2Cl (2,8,7) + 2e⁻ → 2Cl⁻ (2,8,8)</text>
      <text x="432" y="146" font-size="11" font-weight="700" fill="${p.text}">→ Mg²⁺ [:Cl:]⁻₂  •  ${esc(hi ? 'CaO गलनांक उच्चतम: 2850 K' : 'CaO highest MP 2850 K, BP 3120 K')}</text>
      <text x="432" y="160" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? 'जल में विलेय • पेट्रोल/किरोसिन में अविलेय • दाब पर भंगुर' : 'Water-soluble • Petrol/kerosene-insoluble • Brittle')}</text>

      <!-- Bottom Band: Fig 3.10 Ore Extraction Flow -->
      <rect x="20" y="188" width="780" height="244" rx="12" fill="${p.cardAlt}" stroke="${p.emerald}"/>
      <rect x="280" y="196" width="260" height="28" rx="7" fill="${p.tealBg}" stroke="${p.teal}"/>
      <text x="410" y="214" text-anchor="middle" font-size="12" font-weight="800" fill="${p.text}">${esc(hi ? 'चित्र 3.10: अयस्क (गैंग सहित) → सांद्रण' : 'Fig 3.10: Ore (with Gangue) → Enrichment')}</text>

      <!-- Arrows to 3 columns -->
      <path d="M320,224 L150,242" fill="none" stroke="${p.emerald}" stroke-width="2" marker-end="url(#arr_met_${suf})"/>
      <path d="M410,224 L410,242" fill="none" stroke="${p.emerald}" stroke-width="2" marker-end="url(#arr_met_${suf})"/>
      <path d="M500,224 L670,242" fill="none" stroke="${p.emerald}" stroke-width="2" marker-end="url(#arr_met_${suf})"/>

      <!-- Tier 1: High -->
      <rect x="32" y="246" width="236" height="176" rx="10" fill="${p.roseBg}" stroke="${p.rose}"/>
      <text x="150" y="266" text-anchor="middle" font-size="12" font-weight="800" fill="${p.rose}">${esc(hi ? '1. उच्च अभिक्रियाशील (K–Al)' : '1. High Reactivity (K–Al)')}</text>
      <text x="44" y="286" font-size="10.5" font-weight="700" fill="${p.text}">${esc(hi ? 'कार्बन से अपचयन असंभव' : 'Carbon CANNOT reduce!')}</text>
      <text x="44" y="302" font-size="10" font-weight="700" fill="${p.muted}">${esc(hi ? '(O₂ से बंधुता C से अधिक)' : '(Stronger affinity for O₂ than C)')}</text>
      <rect x="44" y="314" width="212" height="58" rx="6" fill="${p.card}" stroke="${p.border}"/>
      <text x="150" y="331" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'गलित लवण विद्युत-अपघटन' : 'Electrolysis of Molten Ore')}</text>
      <text x="150" y="348" text-anchor="middle" font-size="10" font-weight="700" fill="${p.text}">${esc(hi ? 'कैथोड (-): Na⁺ + e⁻ → Na' : 'Cathode (-): Na⁺ + e⁻ → Na')}</text>
      <text x="150" y="364" text-anchor="middle" font-size="10" font-weight="700" fill="${p.text}">${esc(hi ? 'एनोड (+): 2Cl⁻ → Cl₂ + 2e⁻' : 'Anode (+): 2Cl⁻ → Cl₂ + 2e⁻')}</text>
      <text x="150" y="394" text-anchor="middle" font-size="11" font-weight="900" fill="${p.emerald}">${esc(hi ? '→ शुद्ध धातु (Al बॉक्साइट से)' : '→ Pure Metal (Al via Al₂O₃)')}</text>

      <!-- Tier 2: Medium -->
      <rect x="284" y="246" width="252" height="176" rx="10" fill="${p.amberBg}" stroke="${p.amber}"/>
      <text x="410" y="266" text-anchor="middle" font-size="12" font-weight="800" fill="${p.amber}">${esc(hi ? '2. मध्यम (Zn, Fe, Pb, Mn)' : '2. Medium (Zn, Fe, Pb, Mn)')}</text>
      <text x="296" y="286" font-size="10.2" font-weight="800" fill="${p.text}">${esc(hi ? 'कार्बोनेट → निस्तापन (सीमित वायु):' : 'Carbonate → Calcination (Ltd Air):')}</text>
      <text x="296" y="302" font-size="10" font-weight="700" fill="${p.muted}">ZnCO₃ —Δ→ ZnO + CO₂↑</text>
      <text x="296" y="320" font-size="10.2" font-weight="800" fill="${p.text}">${esc(hi ? 'सल्फाइड → भर्जन (अधिक वायु):' : 'Sulphide → Roasting (+ Air):')}</text>
      <text x="296" y="336" font-size="10" font-weight="700" fill="${p.muted}">2ZnS + 3O₂ —Δ→ 2ZnO + 2SO₂↑</text>
      <text x="296" y="356" font-size="10.2" font-weight="800" fill="${p.cyan}">${esc(hi ? 'अपचयन (C या उच्च धातु विस्थापन):' : 'Reduce oxide (C or Al thermite):')}</text>
      <text x="296" y="372" font-size="10" font-weight="700" fill="${p.text}">ZnO + C → Zn + CO</text>
      <text x="296" y="390" font-size="10.2" font-weight="900" fill="${p.rose}">Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃</text>
      <text x="296" y="408" font-size="9.5" font-weight="700" fill="${p.muted}">${esc(hi ? '(थर्मिट अभिक्रिया: रेल पटरी संधि!)' : '(Thermite: Welds Railway Tracks!)')}</text>

      <!-- Tier 3: Low -->
      <rect x="552" y="246" width="236" height="176" rx="10" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
      <text x="670" y="266" text-anchor="middle" font-size="12" font-weight="800" fill="${p.emerald}">${esc(hi ? '3. निम्न अभिक्रियाशील (Hg, Cu)' : '3. Low Reactivity (Hg, Cu)')}</text>
      <text x="564" y="286" font-size="10.5" font-weight="700" fill="${p.text}">${esc(hi ? 'केवल वायु में गरम (भर्जन) से प्राप्‍त:' : 'Extracted by air heating alone:')}</text>
      <text x="564" y="308" font-size="10" font-weight="800" fill="${p.amber}">${esc(hi ? 'सिनाबार (HgS — मर्करी अयस्क):' : 'Cinnabar (HgS — Mercury ore):')}</text>
      <text x="564" y="324" font-size="9.8" font-weight="700" fill="${p.text}">2HgS + 3O₂ → 2HgO + 2SO₂</text>
      <text x="564" y="340" font-size="9.8" font-weight="700" fill="${p.text}">2HgO —Δ→ 2Hg(l) + O₂↑</text>
      <text x="564" y="362" font-size="10" font-weight="800" fill="${p.cyan}">${esc(hi ? 'कॉपर ग्लांस (Cu₂S) स्वतः अपचयन:' : 'Copper Sulphide (Cu₂S) self-red:')}</text>
      <text x="564" y="378" font-size="9.8" font-weight="700" fill="${p.text}">2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂</text>
      <text x="564" y="394" font-size="9.8" font-weight="700" fill="${p.text}">2Cu₂O + Cu₂S → 6Cu + SO₂</text>
      <text x="670" y="414" text-anchor="middle" font-size="10" font-weight="800" fill="${p.muted}">${esc(hi ? 'Au/Pt: स्वतंत्र प्राकृ तिक अवस्था' : 'Au & Pt occur in Native state')}</text>
    </svg>`;
  }

  // Plate 4: Electrolytic Refining of Cu + Activity 3.14 Rusting Tubes + Alloys
  const title = hi ? 'ताँबा परिष्करण (चित्र 3.12), जंग की शर्तें (चित्र 3.13) एवं प्रमुख मिश्रातु व संक्षारण' : 'Electrolytic Copper Refining (Fig 3.12), Rusting Conditions (Fig 3.13) & Key Alloys';
  return `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:${p.bg};border-radius:16px">
    <rect x="6" y="6" width="808" height="408" rx="14" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
    <rect x="20" y="14" width="780" height="32" rx="9" fill="${p.cyanBg}" stroke="${p.cyan}" stroke-width="1.2"/>
    <text x="410" y="35" text-anchor="middle" font-size="13.5" font-weight="800" fill="${p.text}">${esc(title)}</text>

    <!-- Left: Fig 3.12 Cu Electrolytic Refining -->
    <rect x="20" y="56" width="380" height="232" rx="12" fill="${p.cardAlt}" stroke="${p.cyan}"/>
    <text x="210" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.cyan}">${esc(hi ? 'चित्र 3.12: ताँबे का वैद्युतअपघटनी परिष्करण' : 'Fig 3.12: Electrolytic Refining of Copper')}</text>
    <!-- Tank -->
    <rect x="64" y="114" width="240" height="128" rx="8" fill="${p.card}" stroke="${p.text}" stroke-width="1.5"/>
    <rect x="66" y="138" width="236" height="102" rx="6" fill="${p.cyan}" opacity="0.22"/>
    <!-- Battery lines -->
    <line x1="126" y1="90" x2="244" y2="90" stroke="${p.amber}" stroke-width="2"/>
    <rect x="170" y="81" width="32" height="18" rx="4" fill="${p.amberBg}" stroke="${p.amber}"/>
    <text x="186" y="94" text-anchor="middle" font-size="10" font-weight="900" fill="${p.text}">+ −</text>
    <!-- Anode (+) thick impure -->
    <line x1="126" y1="90" x2="126" y2="124" stroke="${p.rose}" stroke-width="2"/>
    <rect x="108" y="124" width="36" height="86" rx="4" fill="${p.roseBg}" stroke="${p.rose}" stroke-width="1.8"/>
    <text x="126" y="168" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? 'अशुद्ध' : 'Impure')}</text>
    <text x="126" y="182" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.rose}">${esc(hi ? 'Cu (+)' : 'Anode+')}</text>
    <!-- Anode Mud -->
    <ellipse cx="126" cy="233" rx="28" ry="6" fill="${p.amber}"/>
    <text x="126" y="254" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.amber}">${esc(hi ? 'एनोड पंक (Au/Ag अविलेय)' : 'Anode Mud (Insoluble)')}</text>
    <!-- Cathode (-) thin pure -->
    <line x1="244" y1="90" x2="244" y2="124" stroke="${p.emerald}" stroke-width="2"/>
    <rect x="236" y="124" width="16" height="86" rx="3" fill="${p.emerald}" opacity="0.85"/>
    <text x="244" y="172" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.emerald}">${esc(hi ? 'शुद्ध' : 'Pure')}</text>
    <text x="244" y="254" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.emerald}">${esc(hi ? 'कैथोड (-): शुद्ध Cu जमा' : 'Cathode (-): Pure Cu')}</text>
    <text x="184" y="205" text-anchor="middle" font-size="10.5" font-weight="900" fill="${p.text}">Cu²⁺ →</text>
    <text x="210" y="274" text-anchor="middle" font-size="10.2" font-weight="700" fill="${p.muted}">${esc(hi ? 'विद्युत-अपघट्य: अम्लीकृत CuSO₄ विलयन' : 'Electrolyte: Acidified CuSO₄ solution')}</text>

    <!-- Right: Fig 3.13 Three Rust Test Tubes A, B, C -->
    <rect x="414" y="56" width="386" height="232" rx="12" fill="${p.cardAlt}" stroke="${p.rose}"/>
    <text x="607" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${p.rose}">${esc(hi ? 'चित्र 3.13 (क्र. 3.14): लोहे पर जंग जाँच (A, B, C)' : 'Fig 3.13 (Act 3.14): Iron Rusting Tubes (A, B, C)')}</text>
    ${[
      { x: 432, id: 'A', ok: true, top: hi ? 'वायु + जल' : 'Air + Water', bot: hi ? 'जंग लगा ✓' : 'RUSTS ✓', col: p.rose, sub: hi ? 'सामान्य जल' : 'Tap Water' },
      { x: 554, id: 'B', ok: false, top: hi ? 'तेल परत' : 'Oil Layer', bot: hi ? 'जंग नहीं ✗' : 'NO Rust ✗', col: p.emerald, sub: hi ? 'उबला जल (नो वायु)' : 'Boiled H₂O' },
      { x: 676, id: 'C', ok: false, top: hi ? 'शुष्क वायु' : 'Dry Air', bot: hi ? 'जंग नहीं ✗' : 'NO Rust ✗', col: p.emerald, sub: hi ? 'निर्जल CaCl₂' : 'Anhyd. CaCl₂' },
    ].map((tb) => `
      <rect x="${tb.x}" y="90" width="106" height="186" rx="10" fill="${p.card}" stroke="${tb.col}"/>
      <text x="${tb.x + 53}" y="108" text-anchor="middle" font-size="12" font-weight="900" fill="${tb.col}">${esc(hi ? 'नली ' : 'Tube ')}${tb.id}</text>
      <rect x="${tb.x + 34}" y="118" width="38" height="106" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.5"/>
      <rect x="${tb.x + 49}" y="156" width="8" height="58" rx="3" fill="${tb.ok ? p.amber : p.muted}"/>
      <text x="${tb.x + 53}" y="136" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.cyan}">${esc(tb.top)}</text>
      <text x="${tb.x + 53}" y="242" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.muted}">${esc(tb.sub)}</text>
      <text x="${tb.x + 53}" y="264" text-anchor="middle" font-size="11" font-weight="900" fill="${tb.col}">${esc(tb.bot)}</text>
    `).join('')}

    <!-- Bottom Alloys Strip -->
    <rect x="20" y="298" width="780" height="106" rx="12" fill="${p.emeraldBg}" stroke="${p.emerald}"/>
    <text x="36" y="319" font-size="12" font-weight="800" fill="${p.emerald}">${esc(hi ? 'प्रमुख परीक्षा मिश्रातु (Alloys: कम चालकता व कम गलनांक अपवाद सहित)' : 'Must-Know Exam Alloys (Lower Conductivity & MP vs Pure Metals)')}</text>
    <text x="36" y="342" font-size="11" font-weight="700" fill="${p.text}">1) ${esc(hi ? 'पीतल (Brass) = Cu + Zn  |  काँसा (Bronze) = Cu + Sn (विद्युत कुचालक)' : 'Brass = Cu + Zn  |  Bronze = Cu + Sn (poor conductors)')}</text>
    <text x="36" y="362" font-size="11" font-weight="700" fill="${p.text}">2) ${esc(hi ? 'सोल्डर (Solder) = Pb + Sn (निम्न गलनांक, विद्युत तार वेल्डिंग हेतु)' : 'Solder = Pb + Sn (low MP for welding electrical wires)')}</text>
    <text x="36" y="382" font-size="11" font-weight="700" fill="${p.text}">3) ${esc(hi ? 'स्टेनलेस इस्पात = Fe + Ni + Cr  |  22K सोना = 22Au + 2Cu/Ag  |  अमलगम = धातु + पारद (Hg)' : 'Stainless Steel = Fe + Ni + Cr  |  22K Gold = 22Au + 2Cu/Ag  |  Amalgam = Metal + Hg')}</text>
  </svg>`;
}
