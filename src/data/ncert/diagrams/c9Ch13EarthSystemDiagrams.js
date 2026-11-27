/**
 * Dual-Theme Pure Vector Diagrams for Class 9 Biology Ch 13: Earth as a System — Energy, Matter & Life
 * Covers: (1) Chapter Blueprint Mindmap, (2) Solar EM/Insolation, Albedo, Layers & Winds/Currents,
 *         (3) Biogeochemical Cycles (Carbon/Keeling 315->420 ppm, Nitrogen Bacteria, Water & Oxygen),
 *         (4) Earth Sphere Feedbacks, Urban Heat Island, Eutrophication, Montreal Protocol & Mission LiFE
 */

function palette(theme = 'dark') {
  const dark = theme !== 'light';
  return {
    bg: dark ? '#08111e' : '#f8fafc',
    panel: dark ? '#0f1b2e' : '#ffffff',
    panelAlt: dark ? '#132238' : '#f1f5f9',
    border: dark ? '#29405e' : '#cbd5e1',
    text: dark ? '#f1f5f9' : '#0f172a',
    muted: dark ? '#94a3b8' : '#475569',
    teal: dark ? '#2dd4bf' : '#0d9488',
    cyan: dark ? '#38bdf8' : '#0284c7',
    amber: dark ? '#fbbf24' : '#d97706',
    rose: dark ? '#fb7185' : '#e11d48',
    emerald: dark ? '#34d399' : '#059669',
    violet: dark ? '#a78bfa' : '#7c3aed',
  };
}

export function renderC9Ch13EarthSystemDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = palette(theme);
  const hi = lang === 'hi';

  if (key === 'c9-ch13-blueprint-mindmap') {
    return `<svg viewBox="0 0 880 420" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <defs>
    <marker id="arr13bp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="${c.cyan}" />
    </marker>
  </defs>
  <text x="440" y="28" text-anchor="middle" fill="${c.cyan}" font-size="16" font-weight="800">${hi ? 'अध्याय 13: पृथ्वी एक तंत्र — ऊर्जा, द्रव्य और जीवन — 4 परीक्षा स्तंभ' : 'Ch 13 Blueprint: Earth as a System — Energy, Matter & Life'}</text>
  <rect x="295" y="168" width="290" height="72" rx="16" fill="${c.panel}" stroke="${c.cyan}" stroke-width="2.5" />
  <text x="440" y="198" text-anchor="middle" fill="${c.text}" font-size="14" font-weight="800">${hi ? '5 मंडल + ऊर्जा + जैव-भूरासायनिक चक्र' : '5 Earth Spheres, Energy & Cycles'}</text>
  <text x="440" y="220" text-anchor="middle" fill="${c.muted}" font-size="11.5">${hi ? 'NCERT Ch 13 (पृ. 252–270) • कुल 32+ PYQ क्षेत्र' : 'NCERT Ch 13 (p.252–270) • Final Class 9 Capstone'}</text>

  <line x1="330" y1="168" x2="220" y2="132" stroke="${c.cyan}" stroke-width="2" marker-end="url(#arr13bp)" />
  <line x1="550" y1="168" x2="660" y2="132" stroke="${c.amber}" stroke-width="2" marker-end="url(#arr13bp)" />
  <line x1="330" y1="240" x2="220" y2="278" stroke="${c.emerald}" stroke-width="2" marker-end="url(#arr13bp)" />
  <line x1="550" y1="240" x2="660" y2="278" stroke="${c.rose}" stroke-width="2" marker-end="url(#arr13bp)" />

  <rect x="24" y="48" width="380" height="98" rx="12" fill="${c.panelAlt}" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="40" y="72" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? '1. पृथ्वी के 5 परस्पर संबद्ध मंडल व सौर विकिरण (13.1)' : '1. 5 Spheres, Insolation (1.4 kW/m²) & Albedo (13.1)'}</text>
  <text x="40" y="93" fill="${c.text}" font-size="11.5">${hi ? '• भूमंडल, जलमंडल, हिममंडल, वायुमंडल, जैवमंडल (क्र. 13.1)' : '• Geo, Hydro, Cryo, Atmo & Biosphere coupled feedbacks'}</text>
  <text x="40" y="111" fill="${c.text}" font-size="11.5">${hi ? '• सौर स्थिरांक = 1.4 kWm⁻² | सतह ~1 kWm⁻² (अन्ना मणि एटलस)' : '• Solar constant 1.4 kWm⁻² | Ground 1 kWm⁻² (Anna Mani)'}</text>
  <text x="40" y="129" fill="${c.muted}" font-size="11">${hi ? '• एल्बिडो (हिम 0.80–0.90) | क्षोभ व समताप मंडल (K.R. रामनाथन)' : '• Albedo (Snow 0.85 vs Ocean low) | Troposphere vs O₃ Stratosphere'}</text>

  <rect x="476" y="48" width="380" height="98" rx="12" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="492" y="72" fill="${c.amber}" font-size="13" font-weight="800">${hi ? '2. असमान ऊष्मण से पवन व महासागरीय धाराएँ (13.2)' : '2. Winds (Valley/Planetary) & Ocean Gyres (13.2)'}</text>
  <text x="492" y="93" fill="${c.text}" font-size="11.5">${hi ? '• दिन: घाटी समीर (ऊपर) | रात: पर्वत समीर (नीचे ठंडी वायु)' : '• Day: Valley breeze up | Night: Cool Mountain breeze down'}</text>
  <text x="492" y="111" fill="${c.text}" font-size="11.5">${hi ? '• ग्रहीय दाब: 0° निम्न, 30° उच्च, 60° निम्न, 90° उच्च + घूर्णन विक्षेप' : '• Belts (0°L, 30°H, 60°L, 90°H) + Earth rotation deflection (R/L)'}</text>
  <text x="492" y="129" fill="${c.muted}" font-size="11">${hi ? '• भंवर (उत्तरी दक्षिणावर्त) + गल्फ स्ट्रीम | IITM पुणे मानसून मॉडल' : '• Ocean Gyres (CW North/CCW South) + Gulf Stream | IITM Pune'}</text>

  <rect x="24" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="40" y="298" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? '3. चार मुख्य जैव-भूरासायनिक चक्र (13.3)' : '3. Four Biogeochemical Cycles (Water, C, N, O₂)'}</text>
  <text x="40" y="319" fill="${c.text}" font-size="11.5">${hi ? '• जल चक्र: वाष्पन → वाष्पोत्सर्जन → संघनन → वर्षण → भूजल' : '• Water: Evap/Transpiration → Condensation → Precip → Ground'}</text>
  <text x="40" y="337" fill="${c.text}" font-size="11.5">${hi ? '• कार्बन: 71% महासागर | 1% वायु | कीलिंग 315→420 ppm (+35%)' : '• Carbon: 71% Ocean | 1% Atm | Keeling Curve 315→420 ppm'}</text>
  <text x="40" y="355" fill="${c.text}" font-size="11.5">${hi ? '• नाइट्रोजन: राइजोबियम → नाइट्रोसोमोनास → नाइट्रोबैक्टर → स्यूडोमोनास' : '• Nitrogen: Rhizobium → Nitrosomonas → Nitrobacter → Pseudomonas'}</text>
  <text x="40" y="373" fill="${c.muted}" font-size="11">${hi ? '• हाबर-बॉश (1–2% ऊर्जा) | ऑक्सीजन (21%): श्वसन बनाम प्रकाश संश्लेषण' : '• Haber-Bosch (1–2% energy) | O₂ (21%) Photosynthesis balance'}</text>

  <rect x="476" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.rose}" stroke-width="1.8" />
  <text x="492" y="298" fill="${c.rose}" font-size="13" font-weight="800">${hi ? '4. मानवीय प्रभाव, सुपोषण, ओजोन व मिशन LiFE (13.4)' : '4. Human Impacts, Eutrophication & Mission LiFE'}</text>
  <text x="492" y="319" fill="${c.text}" font-size="11.5">${hi ? '• CO₂ अधिकता → महासागर अम्लीकरण (प्रवाल भित्ति/प्लवक संकट)' : '• Excess CO₂ → Ocean Acidification threatens plankton/corals'}</text>
  <text x="492" y="337" fill="${c.text}" font-size="11.5">${hi ? '• उर्वरक नाइट्रेट बहने से शैवाल प्रस्फुटन व मत्स्य मृत्यु = सुपोषण' : '• Excess Nitrates → Algal bloom & O₂ drop = Eutrophication'}</text>
  <text x="492" y="355" fill="${c.text}" font-size="11.5">${hi ? '• भू-स्तरीय ओजोन (हानिकारक धूम्रकुहरा) vs समताप ओजोन (रक्षक)' : '• Ground-level Ozone (harmful smog) vs Stratospheric O₃ shield'}</text>
  <text x="492" y="373" fill="${c.muted}" font-size="11">${hi ? '• मॉन्ट्रियल प्रोटोकॉल (CFC सफलता) | क्योटो/पेरिस | मिशन LiFE (2021)' : '• Montreal Protocol (CFCs) | Kyoto/Paris | India Mission LiFE (2021)'}</text>
</svg>`;
  }

  if (key === 'c9-ch13-insolation-layers-winds-diagram') {
    return `<svg viewBox="0 0 880 390" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.amber}" font-size="15.5" font-weight="800">${hi ? 'सौर विकिरण, वायुमंडल की परतें (क्षोभ बनाम समताप) एवं स्थानीय/ग्रहीय पवन तंत्र' : 'Solar EM Energy, Atmospheric Layers & Pressure-Driven Wind Belts'}</text>

  <!-- Left: Atmospheric layers & solar spectrum -->
  <rect x="20" y="44" width="415" height="328" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="227" y="68" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? 'वायुमंडल संरचना व सौर ऊर्जा बजट (चित्र 13.2, 13.7)' : 'Atmosphere Profile (Table 13.2) & Solar Constant'}</text>

  <rect x="38" y="84" width="378" height="44" rx="8" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="227" y="103" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="700">${hi ? 'शीर्ष सूर्ययातप (सौर स्थिरांक) = 1.4 kWm⁻² (1400 J s⁻¹m⁻²)' : 'Top Solar Constant = 1.4 kWm⁻² → Clean Surface ≈ 1 kWm⁻²'}</text>
  <text x="227" y="120" text-anchor="middle" fill="${c.amber}" font-size="10">${hi ? 'गामा/X-किरणें ऊपरी वायुमंडल रोकता है | 99% ऊर्जा = UV (100–400 nm) + दृश्य + IR' : 'Ex 13.1: 1 kWm⁻² × 1 m² × 3600 s = 3.6×10⁶ J (= 1 electricity unit)'}</text>

  <rect x="38" y="138" width="378" height="36" rx="6" fill="${c.panelAlt}" />
  <text x="227" y="160" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? '>100 km: बाह्य अंतरिक्ष | तापमंडल व मध्यमंडल (जलवायु में गौण भूमिका)' : 'Mesosphere (>50 km) → Thermosphere → Outer Space (~100 km)'}</text>

  <rect x="38" y="182" width="378" height="68" rx="8" fill="${c.panelAlt}" stroke="${c.teal}" stroke-width="1.5" />
  <text x="227" y="202" text-anchor="middle" fill="${c.teal}" font-size="11.5" font-weight="800">${hi ? 'समतापमंडल (12 – 50 km) — शांत परत + ओजोन कवच (O₃)' : 'STRATOSPHERE (12 – 50 km): Quiet Zone + Ozone Layer'}</text>
  <text x="227" y="220" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'ओजोन UV (100–400 nm) सोखती है → ऊँचाई संग तापमान बढ़ता है!' : 'O₃ absorbs UV rays → Temp INCREASES with height (no weather mixing!)'}</text>
  <text x="227" y="238" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? '(के. आर. रामनाथन 1934 हिमालय ओजोन मापन | विमान यहीं उड़ते हैं)' : '(K. R. Ramanathan 1934 Himalaya 18,000 ft Ozone research)'}</text>

  <rect x="38" y="258" width="378" height="96" rx="8" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.5" />
  <text x="227" y="278" text-anchor="middle" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? 'क्षोभमंडल (0 – 12 km) — समस्त मौसम, बादल, वर्षा, आँधी' : 'TROPOSPHERE (0 – 12 km): All Weather, Storms & Clouds'}</text>
  <text x="227" y="297" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'सतह से गर्म होता है → ऊँचाई के साथ तापमान घटता है (~6.5°C / km)' : 'Heated from Earth ground → Temp DECREASES (~6.5°C/km) upward'}</text>
  <text x="227" y="315" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'ग्रीनहाउस गैसें (CO₂, CH₄, जलवाष्प) अवरक्त ऊष्मा रोकती हैं!' : 'Thickest over Equator, thinnest over Poles | IR Greenhouse Trap'}</text>
  <text x="227" y="335" text-anchor="middle" fill="${c.rose}" font-size="10" font-weight="700">${hi ? 'शुक्र बुध से अधिक गर्म क्यों? घने CO₂ वायुमंडल का अनियंत्रित हरितगृह प्रभाव!' : 'Venus hotter than closer Mercury = Runaway Greenhouse Atmosphere!'}</text>

  <!-- Right: Valley/Mountain breeze + Global pressure belts & deflection -->
  <rect x="448" y="44" width="412" height="328" rx="12" fill="${c.panel}" stroke="${c.amber}" stroke-width="1.6" />
  <text x="654" y="68" text-anchor="middle" fill="${c.amber}" font-size="13" font-weight="800">${hi ? 'स्थानीय (घाटी/पर्वत समीर) एवं ग्रहीय पवन पट्टियाँ (13.2)' : 'Local Breezes (13.2.1) & Global Pressure Belts (13.2.2)'}</text>

  <rect x="464" y="84" width="184" height="114" rx="8" fill="${c.panelAlt}" stroke="${c.emerald}" />
  <text x="556" y="104" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? 'दिन: घाटी समीर ↑' : 'Day: Valley Breeze ↑'}</text>
  <text x="556" y="124" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'पर्वत ढलान जल्दी गर्म,' : 'Sunlit slopes heat faster'}</text>
  <text x="556" y="142" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'गर्म हल्की वायु ऊपर उठती' : '→ Low pressure on slope'}</text>
  <text x="556" y="160" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'घाटी से ठंडी हवा ऊपर' : 'Cool valley air blows UPSLOPE'}</text>
  <text x="556" y="180" text-anchor="middle" fill="${c.amber}" font-size="9.5">${hi ? 'शिमला/देहरादून घटियाँ' : '(Shimla, Dehradun valleys)'}</text>

  <rect x="660" y="84" width="184" height="114" rx="8" fill="${c.panelAlt}" stroke="${c.cyan}" />
  <text x="752" y="104" text-anchor="middle" fill="${c.cyan}" font-size="11" font-weight="800">${hi ? 'रात: पर्वत समीर ↓' : 'Night: Mountain Breeze ↓'}</text>
  <text x="752" y="124" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'ढलान तेजी से ठंडे व' : 'Slopes radiate heat rapidly'}</text>
  <text x="752" y="142" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'सघन ठंडी हवा नीचे बहती' : 'Dense chilled air sinks DOWN'}</text>
  <text x="752" y="160" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'घाटी के नीचे ताप घटाती' : 'into warmer valley floor'}</text>
  <text x="752" y="180" text-anchor="middle" fill="${c.emerald}" font-size="9.5">${hi ? 'फसल व मृदा आर्द्रता रक्षक' : '(Protects crops & lowers frost)'}</text>

  <rect x="464" y="210" width="380" height="144" rx="8" fill="${c.panelAlt}" stroke="${c.violet}" />
  <text x="654" y="231" text-anchor="middle" fill="${c.violet}" font-size="11.5" font-weight="800">${hi ? 'वैश्विक पवन पट्टियाँ व घूर्णन विक्षेप (Coriolis / चित्र 13.9)' : '4 Global Pressure Belts + Rotation Deflection (Fig 13.9)'}</text>
  <text x="654" y="252" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '• 0° भूमध्य रेखीय निम्न दाब (तीव्र सौर तापन → गर्म वायु ऊपर उठे)' : '• 0° Equator: LOW Pressure (intense heat → warm moist air rises)'}</text>
  <text x="654" y="270" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '• 30° उ./द. उपोष्ण उच्च दाब (ठंडी सघन वायु उतरती → व्यापारिक पवन)' : '• 30° N/S: Subtropical HIGH (cool air sinks → flows back/poleward)'}</text>
  <text x="654" y="288" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '• 60° उ./द. उपध्रुवीय निम्न दाब | 90° ध्रुवीय उच्च दाब (अति शीतल)' : '• 60° N/S: Subpolar LOW (meets polar air) | 90° N/S: Polar HIGH'}</text>
  <text x="654" y="312" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'पृथ्वी घूर्णन विक्षेप: उत्तरी गोलार्ध में दाईं ओर, दक्षिणी में बाईं ओर!' : 'Rotation Deflection: Curves RIGHT in N. Hemisphere, LEFT in S. Hemisphere!'}</text>
  <text x="654" y="334" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'महासागरीय भंवर (Gyres): उत्तर में घड़ी दिशा (CW), दक्षिण में विपरीत (CCW)' : 'Ocean Gyres: Clockwise (N. Hem) / Anti-clockwise (S. Hem) + Salinity density'}</text>
</svg>`;
  }

  if (key === 'c9-ch13-biogeochemical-cycles-diagram') {
    return `<svg viewBox="0 0 880 390" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.emerald}" font-size="15.5" font-weight="800">${hi ? 'चार मुख्य जैव-भूरासायनिक चक्र: कार्बन (कीलिंग वक्र) व नाइट्रोजन (4 जीवाणु चरण) एवं जल/ऑक्सीजन' : '4 Biogeochemical Cycles: Carbon (Keeling 315→420 ppm), Nitrogen (4 Bacteria Steps), Water & O₂'}</text>

  <!-- Left: Carbon & Oxygen Cycle -->
  <rect x="20" y="44" width="415" height="328" rx="12" fill="${c.panel}" stroke="${c.emerald}" stroke-width="1.6" />
  <text x="227" y="68" text-anchor="middle" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? 'कार्बन चक्र (13.3.2) एवं ऑक्सीजन संतुलन (13.3.4)' : 'Carbon Reservoirs, Keeling Curve & Oxygen Balance'}</text>

  <rect x="38" y="84" width="378" height="60" rx="8" fill="${c.panelAlt}" />
  <text x="227" y="104" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="700">${hi ? 'कार्बन भंडार (%): महासागर = 71% | वायुमंडल = मात्र ~1% | जीव शुष्क भार = 49% C!' : 'Global Carbon Stores: Oceans = 71% | Atmosphere ≈ 1% | Dry Biomass = 49% C!'}</text>
  <text x="227" y="126" text-anchor="middle" fill="${c.cyan}" font-size="10.5">${hi ? 'द्रुत चक्र (प्रकाश संश्लेषण ↔ श्वसन/अपघटन) बनाम मंद चक्र (कोयला-तेल लाखों वर्ष)' : 'Fast Cycle (Photosynthesis ↔ Resp/Decay) vs Slow Fossil Cycle (Millions yrs)'}</text>

  <rect x="38" y="156" width="378" height="106" rx="8" fill="${c.panelAlt}" stroke="${c.rose}" />
  <text x="227" y="177" text-anchor="middle" fill="${c.rose}" font-size="11.5" font-weight="800">${hi ? 'कीलिंग वक्र (Keeling Curve 1960–2025, चित्र 13.14)' : 'Keeling CO₂ Curve (1960–2025, Fig 13.14): Sawtooth Pattern'}</text>
  <text x="227" y="198" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? 'वायुमंडलीय CO₂ स्तर: 315 ppm (1960) → 420 ppm (2025) = +35% वृद्धि!' : 'CO₂ jumped ~35%: 315 ppm (1960) → 420 ppm (2025)!'}</text>
  <text x="227" y="218" text-anchor="middle" fill="${c.amber}" font-size="10.5">${hi ? 'आरीनुमा उतार-चढ़ाव क्यों? उत्तरी गोलार्ध में गर्मियों में पौधों का मौसमी अवशोषण!' : 'Why seasonal zig-zag dips? Northern summer peak plant photosynthesis!'}</text>
  <text x="227" y="242" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'महासागरीय पादपप्लवक घुली CO₂ (कार्बोनेट) सोखते पर अधिकता से अम्लीकरण!' : 'Excess CO₂ dissolves → ocean acidification harming phytoplankton & corals'}</text>

  <rect x="38" y="274" width="378" height="80" rx="8" fill="${c.panelAlt}" stroke="${c.teal}" />
  <text x="227" y="296" text-anchor="middle" fill="${c.teal}" font-size="11.5" font-weight="800">${hi ? 'ऑक्सीजन चक्र (21%) एवं जल चक्र (13.3.1 & 13.3.4)' : 'Oxygen (21%) & Water Cycles Coupling All 5 Spheres'}</text>
  <text x="227" y="316" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'उपभोग = श्वसन + दहन + ऑक्साइड | पुनर्स्थापन = एकमात्र प्रकाश संश्लेषण!' : 'O₂ Consumption = Respiration + Combustion | Restored ONLY by Photosynthesis!'}</text>
  <text x="227" y="336" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'जल चक्र: वाष्पन/वाष्पोत्सर्जन → संघनन → वर्षण → खनिज अपवाह व भूजल रिसाव' : 'Water Cycle feeds mineral weathering from Geosphere to terrestrial & marine life'}</text>

  <!-- Right: Nitrogen Cycle 5 Steps + Haber-Bosch -->
  <rect x="448" y="44" width="412" height="328" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="654" y="68" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? 'नाइट्रोजन चक्र (वायुमंडल 78% N₂ — सबसे बड़ा भंडार, 13.3.3)' : 'Nitrogen Cycle (78% N₂ Atmosphere) — 5 Named Bacterial Steps'}</text>

  <rect x="464" y="84" width="380" height="44" rx="7" fill="${c.panelAlt}" stroke="${c.emerald}" />
  <text x="654" y="103" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? '1. स्थिरीकरण (Fixation): N₂ → अमोनिया (NH₃)' : '1. Nitrogen Fixation: Atmospheric N₂ → Ammonia (NH₃)'}</text>
  <text x="654" y="120" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'राइजोबियम (फली जड़ ग्रंथि), एजोटोबैक्टर (मृदा) एवं तड़ित (Lightning NOₓ)' : 'Rhizobium (legume root nodules), free Azotobacter & Lightning'}</text>

  <rect x="464" y="136" width="380" height="52" rx="7" fill="${c.panelAlt}" stroke="${c.amber}" />
  <text x="654" y="156" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">${hi ? '2. नाइट्रीकरण (Nitrification): 2 क्रमिक जीवाणु!' : '2. Nitrification: 2-Step Bacterial Oxidation to Nitrates!'}</text>
  <text x="654" y="175" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'नाइट्रोसोमोनास (NH₃ → नाइट्राइट NO₂⁻) ⇒ नाइट्रोबैक्टर (NO₂⁻ → नाइट्रेट NO₃⁻)' : 'Nitrosomonas (NH₃ → Nitrite NO₂⁻) → Nitrobacter (NO₂⁻ → Nitrate NO₃⁻)'}</text>

  <rect x="464" y="196" width="380" height="42" rx="7" fill="${c.panelAlt}" />
  <text x="654" y="214" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? '3. स्वांगीकरण (Assimilation): पादप NO₃⁻ से प्रोटीन व DNA बनाएँ' : '3. Assimilation: Plants absorb NO₃⁻ → Proteins & DNA → Animals'}</text>
  <text x="654" y="230" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '4. अमोनीकरण (Ammonification): मृत जीवों के अपघटक पुनः अमोनिया लौटाएँ' : '4. Ammonification: Decomposers turn waste/dead tissue back to NH₃'}</text>

  <rect x="464" y="246" width="380" height="42" rx="7" fill="${c.panelAlt}" stroke="${c.rose}" />
  <text x="654" y="264" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="800">${hi ? '5. विनाइट्रीकरण (Denitrification): स्यूडोमोनास (Pseudomonas)!' : '5. Denitrification: Pseudomonas returns NO₃⁻ → N₂ Gas!'}</text>
  <text x="654" y="280" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'मृदा के नाइट्रेट को पुनः वायुमंडलीय N₂ गैस बनाकर चक्र पूरा करता है' : 'Closes the cycle by returning reactive soil nitrates to inert N₂'}</text>

  <rect x="464" y="298" width="380" height="58" rx="8" fill="${c.panelAlt}" stroke="${c.violet}" />
  <text x="654" y="317" text-anchor="middle" fill="${c.violet}" font-size="11" font-weight="800">${hi ? 'औद्योगिक क्रांति: हाबर-बॉश प्रक्रिया ("वायु से अन्न" 1900s)' : 'Haber-Bosch Industrial Ammonia ("Bread from Air", Early 1900s)'}</text>
  <text x="654" y="335" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'मानव देह के 50%+ नाइट्रोजन परमाणु इसी से; पर वैश्विक ऊर्जा का 1–2% खपत' : '>50% N atoms in humans come from Haber-Bosch fertilizers (1–2% world energy)'}</text>
  <text x="654" y="350" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'अत्यधिक उर्वरक अपवाह → झीलों में सुपोषण (Eutrophication)' : 'Excess nitrate runoff causes Eutrophication algal blooms'}</text>
</svg>`;
  }

  if (key === 'c9-ch13-albedo-climate-impacts-diagram') {
    return `<svg viewBox="0 0 880 370" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.rose}" font-size="15.5" font-weight="800">${hi ? 'एल्बिडो स्केल (तालिका 13.1), शहरी ऊष्मा द्वीप, सुपोषण व अंतर्राष्ट्रीय संरक्षण संधियाँ' : 'Surface Albedo Scale (Table 13.1), Urban Heat Island, Eutrophication & Global Treaties'}</text>

  <!-- Top Row: Albedo Gradient Cards -->
  <rect x="20" y="46" width="840" height="122" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="440" y="69" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? 'एल्बिडो (Albedo = परावर्तित सौर प्रकाश अंश) — उच्च एल्बिडो = अधिक ठंडा (तालिका 13.1)' : 'Albedo = Fraction Reflected (High Albedo Stays Cool vs Low Absorbs Fast)'}</text>

  <rect x="34" y="84" width="154" height="68" rx="8" fill="${c.panelAlt}" stroke="${c.cyan}" />
  <text x="111" y="106" text-anchor="middle" fill="${c.text}" font-size="11.5" font-weight="800">${hi ? 'ताज़ा हिम (Snow)' : 'Fresh Snow'}</text>
  <text x="111" y="126" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">0.80 – 0.90</text>
  <text x="111" y="143" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'ध्रुव अत्यंत ठंडे रहते' : 'Reflects 80–90% sunlight!'}</text>

  <rect x="200" y="84" width="146" height="68" rx="8" fill="${c.panelAlt}" stroke="${c.teal}" />
  <text x="273" y="106" text-anchor="middle" fill="${c.text}" font-size="11.5" font-weight="800">${hi ? 'बर्फ (Ice)' : 'Glacial Ice'}</text>
  <text x="273" y="126" text-anchor="middle" fill="${c.teal}" font-size="13" font-weight="800">0.50 – 0.70</text>
  <text x="273" y="143" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'पिघलने पर तापन बढ़े!' : 'Melting drops reflectivity'}</text>

  <rect x="358" y="84" width="154" height="68" rx="8" fill="${c.panelAlt}" stroke="${c.amber}" />
  <text x="435" y="106" text-anchor="middle" fill="${c.text}" font-size="11.5" font-weight="800">${hi ? 'हल्की मृदा / चट्टान' : 'Rocks & Light Soil'}</text>
  <text x="435" y="126" text-anchor="middle" fill="${c.amber}" font-size="12.5" font-weight="800">0.25–0.30 | 0.25–0.45</text>
  <text x="435" y="143" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'मध्यम ऊष्मा अवशोषण' : 'Light soil reflects > black'}</text>

  <rect x="524" y="84" width="154" height="68" rx="8" fill="${c.panelAlt}" stroke="${c.rose}" />
  <text x="601" y="106" text-anchor="middle" fill="${c.text}" font-size="11.5" font-weight="800">${hi ? 'काली मृदा / डामर' : 'Black Soil / Asphalt'}</text>
  <text x="601" y="126" text-anchor="middle" fill="${c.rose}" font-size="12.5" font-weight="800">0.08 – 0.15</text>
  <text x="601" y="143" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'शहरी ऊष्मा द्वीप प्रभाव!' : 'Hot Urban Heat Islands!'}</text>

  <rect x="690" y="84" width="156" height="68" rx="8" fill="${c.panelAlt}" stroke="${c.violet}" />
  <text x="768" y="106" text-anchor="middle" fill="${c.text}" font-size="11.5" font-weight="800">${hi ? 'महासागरीय जल' : 'Ocean Water'}</text>
  <text x="768" y="126" text-anchor="middle" fill="${c.violet}" font-size="13" font-weight="800">0.06 – 0.10</text>
  <text x="768" y="143" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? '90%+ ऊर्जा अवशोषण!' : 'Huge solar heat sink'}</text>

  <!-- Bottom Row: Eutrophication vs Treaties & LiFE -->
  <rect x="20" y="182" width="415" height="170" rx="12" fill="${c.panel}" stroke="${c.emerald}" stroke-width="1.6" />
  <text x="227" y="205" text-anchor="middle" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? 'जल व स्थलीय संकट: सुपोषण व वनोन्मूलन (13.4)' : 'Human Disruption Chains (Eutrophication & Deforestation)'}</text>
  <text x="36" y="230" fill="${c.text}" font-size="10.5">${hi ? '1. सुपोषण (Eutrophication): कृषि के अतिरिक्त नाइट्रेट झीलों में → शैवाल प्रस्फुटन' : '1. Eutrophication: Excess nitrate fertilizer → Algal Bloom → O₂ crash → Fish kill'}</text>
  <text x="36" y="252" fill="${c.text}" font-size="10.5">${hi ? '   → जल में घुली O₂ समाप्ति → मछलियाँ मर जाती हैं (चित्र 13.17)!' : '   (Coastal fisheries threatened; linked to N-cycle overflow, Fig 13.17)'}</text>
  <text x="36" y="276" fill="${c.text}" font-size="10.5">${hi ? '2. शहरी ऊष्मा द्वीप: कंक्रीट-डामर ऊष्मा सोख रात में छोड़ते; गाँव वाष्पोत्सर्जन से ठंडे' : '2. Urban Heat Island: Concrete/steel re-radiates heat at night vs rural shade'}</text>
  <text x="36" y="300" fill="${c.text}" font-size="10.5">${hi ? '3. वनोन्मूलन: प्रकाश संश्लेषण↓, वाष्पोत्सर्जन/वर्षा↓, मृदा अपरदन↑, एल्बिडो बदला' : '3. Deforestation: Low transpiration/rainfall + soil erosion + biodiversity loss'}</text>
  <text x="36" y="324" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? '4. दो रूप की ओजोन: समताप = सुरक्षा कवच | भू-स्तरीय वाहन धुआँ = विषैला धूम्रकुहरा!' : '4. Dual Ozone: Stratosphere = UV Shield | Ground Smog = Toxic Lung Hazard!'}</text>

  <rect x="448" y="182" width="412" height="170" rx="12" fill="${c.panel}" stroke="${c.rose}" stroke-width="1.6" />
  <text x="654" y="205" text-anchor="middle" fill="${c.rose}" font-size="13" font-weight="800">${hi ? 'वैश्विक संधियाँ, भारत की पहलें व पुनरुद्धार (13.4)' : 'Global Treaties, Indian Science & Mission LiFE'}</text>
  <text x="464" y="230" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? '• मॉन्ट्रियल प्रोटोकॉल (सफल!): रेफ्रिजरेटर/एरोसॉल के CFCs घटाकर ओजोन छिद्र सुधार' : '• Montreal Protocol (Success!): Phased out CFCs → Ozone slowly healing'}</text>
  <text x="464" y="254" fill="${c.text}" font-size="10.5">${hi ? '• क्योटो प्रोटोकॉल व पेरिस समझौता: ग्रीनहाउस CO₂ कटौती (कम सफलता)' : '• Kyoto Protocol & Paris Agreement: Targets CO₂ cuts (partial success)'}</text>
  <text x="464" y="278" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? '• मिशन LiFE (2021): भारत नेतृत्व वाली पर्यावरण-अनुकूल जीवनशैली पहल' : '• Mission LiFE (2021): India-led UN COP mindful lifestyle movement'}</text>
  <text x="464" y="302" fill="${c.text}" font-size="10.5">${hi ? '• थार मरुस्थल सौर्य क्षमता: छोटे हिस्से पर सौर पैनल = पूरे भारत की बिजली क्षमता!' : '• Thar Solar Potential & B. Sahni/IITM Pune monsoon-glacier tracking'}</text>
  <text x="464" y="326" fill="${c.muted}" font-size="10.5">${hi ? '• Reduce-Reuse-Recycle + वृक्षारोपण + सौर/पवन ऊर्जा से पृथ्वी संतुलन' : '• Solution: Renewable solar/wind, afforestation, water conservation & 3Rs'}</text>
</svg>`;
  }

  return '';
}
