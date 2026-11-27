/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc113.pdf, Pages 252–270) + Railway Science Deep-Dive
 * Chapter 13: Earth as a System — Energy, Matter & Life (पृथ्वी एक तंत्र — ऊर्जा, द्रव्य और जीवन) — Gold Standard v3
 * Restored / New 2026–27 Integrative Capstone Chapter!
 * Complete Coverage: Intro & Act 13.1 Five Interacting Spheres (Geosphere, Hydrosphere, Cryosphere, Atmosphere, Biosphere; Arab Sea Warming & Glacier Melt) ->
 * 13.1 Solar Radiation EM Spectrum (3×10⁸ m/s, 99% UV/Visible/IR), UV 100–400 nm & O₃, Solar Constant 1.4 kW/m² vs ~1 kW/m² Ground (Ex 13.1: 3.6×10⁶ J = 1 kWh),
 * Anna Mani & S. Rangarajan (1982 Solar Radiation Over India; Thar Desert potential), Table 13.1 Albedo (Snow 0.80–0.90, Ice 0.50–0.70, Rocks 0.25–0.30, Ocean/Black Soil),
 * Urban Heat Island (Fig 13.6), Axial Tilt & Latitudes (13.1.2), Atmosphere Layers Table 13.2 (Troposphere 0–12 km -6.5°C/km, Stratosphere 12–50 km O₃, K.R. Ramanathan 1934), Venus vs Mercury ->
 * 13.2 Winds & Currents: Local Valley (Day) vs Mountain Breeze (Night, Shimla/Dehradun), Planetary Belts (0°L, 30°H, 60°L, 90°H) + Earth Rotation Deflection (N Right/S Left),
 * Ocean Gyres (CW N / CCW S), Salinity Density, Gulf Stream -> North Atlantic Drift, IITM Pune Monsoon Modelling ->
 * 13.3 Biogeochemical Cycles: Water Cycle, Carbon Cycle (49% dry wt, 71% oceans, ~1% atm; Fast vs Slow Fossil Fuels; Keeling Curve 1960–2025 315->420 ppm +35% Sawtooth),
 * Nitrogen Cycle (Rhizobium, Azotobacter, Nitrosomonas->NO₂⁻, Nitrobacter->NO₃⁻, Pseudomonas denitrification + Haber-Bosch 1–2% world energy), Oxygen Cycle (21%) ->
 * 13.4 Human Impacts: Ocean Acidification, Eutrophication (Fig 13.17 Algal Bloom), Ground Smog/Ozone vs Stratospheric Ozone, Montreal Protocol (CFC success), Kyoto/Paris, Mission LiFE (2021).
 * All Activities (13.1–13.2), Example 13.1, 6 Think Qs, 15 Solved Exercises verified vs ihsc1an (Ex 1 ii, Ex 2 iii), 5 Tables, 10 Flashcards, 24 Pure RRB PYQs.
 */

export const C9_CH13_EARTH_SYSTEM_DATA = {
  id: 'c9-bio-ch13',
  classId: 'class9',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology & Earth Systems', hi: 'जीव विज्ञान व पृथ्वी तंत्र (Earth System)' },
  chapterNumber: 13,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 13: Earth as a System — Energy, Matter & Life (Capstone CBT Edition)',
  blueprintSvgKey: 'c9-ch13-blueprint-mindmap',
  weightageBars: [
    { label: { en: '5 Spheres, Solar Constant (1.4 kWm⁻²), EM/UV, Anna Mani, Albedo (Table 13.1), Urban Heat & Layers (Table 13.2)', hi: '5 मंडल, सौर स्थिरांक (1.4 kWm⁻²), अन्ना मणि, एल्बिडो (तालिका 13.1), ऊष्मा द्वीप व वायुमंडल परतें' }, pct: 28 },
    { label: { en: 'Uneven Heating Winds (Valley vs Mountain Breeze, 0°–90° Belts, Deflection) & Ocean Gyres (Gulf Stream, IITM Pune)', hi: 'घाटी/पर्वत समीर, ग्रहीय दाब पट्टियाँ (0°–90°), घूर्णन विक्षेप व महासागरीय भंवर (गल्फ स्ट्रीम, IITM)' }, pct: 24 },
    { label: { en: '4 Biogeochemical Cycles: Carbon (71% Ocean, Keeling 315→420 ppm), Nitrogen (5 Bacterial Steps / Haber-Bosch), Water & O₂', hi: 'जैव-भूरासायनिक चक्र: कार्बन (कीलिंग 315→420 ppm), नाइट्रोजन (4 जीवाणु व हाबर-बॉश), जल एवं ऑक्सीजन' }, pct: 28 },
    { label: { en: 'Human Disruptions: Ocean Acidification, Eutrophication (Algal Bloom), Smog vs O₃ Hole (Montreal) & Mission LiFE', hi: 'मानवीय प्रभाव: महासागर अम्लीकरण, सुपोषण (शैवाल प्रस्फुटन), मॉन्ट्रियल प्रोटोकॉल व मिशन LiFE (2021)' }, pct: 20 },
  ],
  title: {
    en: 'Chapter 13: Earth as a System — Energy, Matter & Life',
    hi: 'अध्याय 13: पृथ्वी एक तंत्र — ऊर्जा, द्रव्य और जीवन',
  },
  subtitle: {
    en: 'New 2026–27 NCERT Final Capstone • Insolation & Albedo, Winds & Ocean Currents, Carbon/Nitrogen Cycles & Climate Treaties (`ihsc113`)',
    hi: 'नया 2026–27 NCERT अंतिम अध्याय • सौर स्थिरांक व एल्बिडो, पवन-भंवर, कार्बन/नाइट्रोजन चक्र, सुपोषण एवं मिशन LiFE (`ihsc113`)',
  },
  metrics: {
    pages: 19,
    activities: 4,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch13/hero-earth-system.webp',
    caption: {
      en: 'Earth System Coupling Lab (`NCERT Ch 13`): Golden Solar Insolation & Cyan Atmospheric Rim, Himalayan Cryosphere Glaciers feeding Hydrosphere Rivers beneath Monsoon Rainclouds, Rainforest/Mangrove/Coral Biosphere & Lithosphere Soil Strata.',
      hi: 'पृथ्वी एक समग्र तंत्र (`NCERT अध्याय 13`): सौर विकिरण, वायुमंडलीय ओजोन कवच, हिममंडल हिमानी से जलमंडल नदियाँ, मानसूनी मेघ, मैंग्रोव-प्रवाल जैवमंडल एवं भूमंडल का परस्पर प्रवाह।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**5 Coupled Spheres + Solar Budget & Albedo (`13.1`)**: Disturbing **Geosphere, Hydrosphere, Cryosphere, Atmosphere, or Biosphere** ripples across all spheres (`Act 13.1`: Arab Sea warming disrupts SW Monsoon floods/droughts!). Sun supplies `99%` energy via UV (`100–400 nm`), Visible (`photosynthesis!`), and IR (`heating + greenhouse capture`): top **Solar Constant is `1.4 kWm⁻²` (`1400 J s⁻¹m⁻²`)**, clean sky **surface insolation `~1 kWm⁻²`** (`Ex 13.1`: `1 h on 1 m² -> 3.6×10⁶ J`). Mapped across India by **==Anna Mani & S. Rangarajan (`1982`)==**! **Albedo (`Table 13.1`)**: **Fresh Snow `0.80–0.90`**, **Ice `0.50–0.70`**, **Rocks `0.25–0.30`** (`cools poles!`) vs low black soil/ocean (`heats cities -> Urban Heat Island`, Fig 13.6). **Layers**: **Troposphere (`0–12 km`, `-6.5°C/km`, all weather)** vs **Stratosphere (`12–50 km`, Ozone absorbs UV so temp RISES -> weather-free; K.R. Ramanathan `1934`)**! Venus is hotter than Mercury due to runaway CO₂ greenhouse!',
      hi: '**5 परस्पर संबद्ध मंडल, सौर ऊर्जा व एल्बिडो (`13.1`)**: **भूमंडल, जलमंडल, हिममंडल, वायुमंडल व जैवमंडल** परस्पर जुड़े हैं (`क्र. 13.1`: अरब सागर तापन मानसून बदलता है!)। सूर्य से `99%` ऊर्जा **UV (`100–400 nm`), दृश्य (`प्रकाश संश्लेषण`) व अवरक्त** में आती है: **==सौर स्थिरांक `1.4 kWm⁻²` (`1400 J s⁻¹m⁻²`)==**, सतह पर **`~1 kWm⁻²`** (`उदा. 13.1: 1 घंटे में 3.6×10⁶ J`); भारतीय सौर मानचित्रण **==अन्ना मणि व एस. रंगराजन (`1982`)==** ने किया! **एल्बिडो (`तालिका 13.1`)**: **हिम `0.80–0.90`**, **बर्फ `0.50–0.70`** (ठंडे ध्रुव) बनाम काली मृदा/सड़कें (अवशोषण -> **शहरी ऊष्मा द्वीप**)। **क्षोभमंडल (`0–12 km`, ताप घटता है ~6.5°C/km)** vs **समतापमंडल (`12–50 km`, ओजोन UV सोख ताप बढ़ाती; K.R. रामनाथन 1934)**! घने CO₂ से शुक्र बुध से अधिक गर्म है!',
    },
    {
      en: '**Uneven Heating -> Local Breezes, Global Belts & Ocean Gyres (`13.2`)**: Warm air expands -> Low Pressure; winds ALWAYS blow **High P -> Low P**. **Day Valley Breeze**: slopes heat faster -> air rises upslope; **Night Mountain Breeze**: cold dense slope air sinks into valley (`Shimla/Dehradun`, regulates crop moisture!). **Global Belts**: `0° Eq Low` -> `30° High` -> `60° Low` -> `90° Polar High`, curved by Earth’s rotation (**Right in N. Hemisphere, Left in S. Hemisphere**!). **Ocean Currents (`Salinity sinks dense saltier water`)**: Form giant **Gyres (`Clockwise N, CCW S`)** — **Gulf Stream / North Atlantic Drift** keeps NW European ports **ice-free** in winter! India’s **IITM Pune** models monsoon–ocean coupling.',
      hi: '**असमान ऊष्मण: पवन एवं महासागरीय धाराएँ (`13.2`)**: पवन सदैव **उच्च दाब से निम्न दाब** चलती है। **दिन में घाटी समीर ↑** (`ढलान जल्दी गर्म`) तथा **रात में पर्वत समीर ↓** (`ठंडी भारी वायु घाटी तल में उतरती` — शिमला/देहरादून फसलों हेतु लाभदायक)। **ग्रहीय पट्टियाँ (`0° निम्न, 30° उच्च, 60° निम्न, 90° उच्च`)** पृथ्वी घूर्णन से **उत्तरी गोलार्ध में दाईं ओर व दक्षिणी में बाईं ओर** मुड़ती हैं। **महासागरीय भंवर (`Gyres` — उत्तर में दक्षिणावर्त CW)** व **गल्फ स्ट्रीम (`उत्तरी अटलांटिक प्रवाह`)** यूरोप के बंदरगाहों को शीतकाल में बर्फ-मुक्त रखते हैं; **IITM पुणे** भारतीय मानसून मॉडल चलाता है!',
    },
    {
      en: '**4 Biogeochemical Cycles (`13.3`)**: **(1) Water**: Evap, transpiration, condensation, precipitation, mineral leaching + runoff erosion (`floods/droughts`). **(2) Carbon**: `49%` living dry weight; **==`71%` global C in OCEANS vs `~1%` in Atmosphere==**; Slow geological fossils (`millions yrs`) vs **Keeling Curve (`1960–2025`: `315 -> 420 ppm`, `+35%` jump** with northern summer sawtooth dips!). **(3) Nitrogen (`78% N₂`)**: Fixation (**Rhizobium, Azotobacter, Lightning** -> NH₃) -> **Nitrification (`Nitrosomonas` NH₃->NO₂⁻ -> `Nitrobacter` NO₂⁻->NO₃⁻)** -> Assimilation -> Ammonification -> **Denitrification (`Pseudomonas` -> N₂)**! Industrial **Haber-Bosch (`1–2%` world energy)** supplies **`>50%` N in human bodies**! **(4) Oxygen (`21%`)**: Photosynthesis balances respiration & combustion.',
      hi: '**चार जैव-भूरासायनिक चक्र (`13.3`)**: **(1) जल चक्र**: वाष्पन-वाष्पोत्सर्जन-संघनन-वर्षण द्वारा खनिज प्रवाह। **(2) कार्बन चक्र**: जीवों के शुष्क भार का `49%`; **==वैश्विक कार्बन का `71%` महासागरों व मात्र `~1%` वायुमंडल में है==**; **कीलिंग वक्र (`1960–2025`): `CO₂` `315 → 420 ppm` (`+35%`)** बढ़ी (`उत्तरी ग्रीष्म प्रकाश संश्लेषण से आरीनुमा गिरावट`)! **(3) नाइट्रोजन चक्र (`78%`)**: स्थिरीकरण (**राइजोबियम, एजोटोबैक्टर, तड़ित**) → नाइट्रीकरण (**नाइट्रोसोमोनास** `NH₃→NO₂⁻` → **नाइट्रोबैक्टर** `NO₂⁻→NO₃⁻`) → स्वांगीकरण → अमोनीकरण → विनाइट्रीकरण (**स्यूडोमोनास** `NO₃⁻→N₂`); **हाबर-बॉश (`1–2%` विश्व ऊर्जा)** से आधुनिक उर्वरक! **(4) ऑक्सीजन (`21%`)**: प्रकाश संश्लेषण बनाम श्वसन/दहन।',
    },
    {
      en: '**Human Disruption & Recovery (`13.4`)**: Excess fossil `CO₂` acidifies oceans (`threatens phytoplankton & coral reefs`), while hot oceans absorb LESS `CO₂`! Excess **fertiliser nitrates wash into lakes -> explosive Algal Bloom -> dissolved `O₂` drop -> Fish Kill (`Eutrophication`, Fig 13.17)**! Vehicles form **smog & toxic ground-level ozone (`opposite of UV-shielding stratospheric ozone`)**. Global action: **Montreal Protocol** (`phased out refrigerator/aerosol CFCs — ozone healing!`) succeeded more than **Kyoto/Paris (`CO₂`)**; India launched **Mission LiFE (`2021`)** promoting sustainable lifestyles, renewables & 3Rs!',
      hi: '**मानवीय प्रभाव व पुनरुद्धार (`13.4`)**: अतिरिक्त `CO₂` से **महासागरीय अम्लीकरण (`प्रवाल भित्ति व प्लवक को हानि`)** होता है और गर्म समुद्र कम `CO₂` सोखता है! कृषि उर्वरक नाइट्रेट बहने से **शैवाल प्रस्फुटन व जल में `O₂` कमी से मछली मृत्यु = सुपोषण (`Eutrophication`, चित्र 13.17)**! वाहन धुआँ विषैली **भू-स्तरीय ओजोन/धूम्रकुहरा** बनाता है (`समताप ओजोन रक्षक है!`)। **मॉन्ट्रियल प्रोटोकॉल** ने `CFCs` घटा ओजोन सुधार किया (`क्योटो/पेरिस से अधिक सफल`); भारत ने `2021` में **मिशन LiFE** शुरू किया!',
    },
  ],
  sections: [
    {
      id: 'spheres-insolation-albedo-atmosphere',
      number: '13.1',
      flowDiagramKey: 'c9-ch13-blueprint-mindmap',
      diagramKey: 'c9-ch13-insolation-layers-winds-diagram',
      title: {
        en: 'Earth’s 5 Coupled Spheres (`Act 13.1`), Solar EM Budget (`1.4 kWm⁻²`), Albedo (`Table 13.1`), Urban Heat & Atmospheric Layers',
        hi: 'पृथ्वी के 5 परस्पर संबद्ध मंडल (`क्र. 13.1`), सौर स्थिरांक (`1.4 kWm⁻²`), एल्बिडो, ऊष्मा द्वीप व वायुमंडल की परतें',
      },
      summaryTag: {
        en: 'NCERT Pages 252–259 • EM Spectrum, Anna Mani (1982), Ex 13.1 (3.6×10⁶ J), K.R. Ramanathan (1934), Troposphere vs O₃ Stratosphere & Venus Trap',
        hi: 'NCERT पृ. 252–259 • विद्युत चुंबकीय स्पेक्ट्रम, अन्ना मणि, उदा. 13.1, के.आर. रामनाथन, क्षोभ-समताप मंडल व शुक्र हरितगृह प्रभाव',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Five Interconnected Spheres (`Act 13.1`) + Electromagnetic Solar Budget (`1.4 kWm⁻²` Solar Constant & `Anna Mani`)',
            hi: '1. पृथ्वी के 5 संबद्ध मंडल (`क्र. 13.1`) तथा सौर विकिरण ऊर्जा बजट (`सौर स्थिरांक 1.4 kWm⁻²` व `अन्ना मणि`)',
          },
          conceptStory: {
            en: 'Solar heat, Earth’s warm interior, and rock–air–water chemistry bind Earth’s **5 spheres** into a delicate dynamic engine (`NCERT p.252–253`):\n• **1) Geosphere (`भूमंडल`)**: Solid crust, rocks, soils (`Deccan Plateau, Thar Desert`). **2) Hydrosphere (`जलमंडल`)**: Liquid oceans, lakes, rivers (`Ganga–Brahmaputra`), groundwater. **3) Cryosphere (`हिममंडल`)**: Frozen glaciers, Ladakh winter ice, polar ice caps (`feeds summer lakes & rivers!`). **4) Atmosphere (`वायुमंडल`)**: Gravity-held gas envelope (`78% N₂, 21% O₂, Ar, CO₂, H₂O`). **5) Biosphere (`जैवमंडल`)**: All life & habitats (`mangroves, forests, farms, plankton, coral reefs`).\n• **Feedback Example (`Act 13.1`)**: Low winter snowfall lowers summer mountain lakes & grazing grass; similarly, **Arabian Sea warming (`Hydrosphere`)** evaporates excess moisture altering **SW Monsoon** rainfall (`floods in some regions, droughts elsewhere`), while rising air heat melts **Himalayan/polar ice (`Cryosphere`)**, threatening coastal **Mumbai & Chennai** & marine biodiversity!\n• **Solar Energy (`13.1`, p.253–255)**: Arrives via **Electromagnetic (`EM`) waves (`vacuum speed = 3 × 10⁸ m/s`)** — unlike sound (`Ch 10 mechanical waves`). Roughly **`99%` of solar energy** sits in **UV (`100–400 nm`), Visible (`drives photosynthesis!`), & Infrared (`heat trapped by greenhouse gases CO₂, CH₄, H₂O`)**; upper atmosphere blocks lethal Gamma & X-rays while **Stratospheric Ozone (`O₃`)** shields us from skin cancer/eye-damaging UV (`sunscreen + UV purifiers`).\n• **==Solar Constant vs Surface Insolation==**: Energy striking per unit perpendicular area at top of atmosphere is **`1.4 kW m⁻²`** (`1400 J s⁻¹m⁻²`). Scattering/clouds cut clear-sky ground insolation to **`~1 kW m⁻²`**. **NCERT Ex `13.1`**: In `1 hour` (`3600 s`) on `1 m²`, `E = 1000 × 1 × 3600 = 3.6 × 10⁶ J` (`= 1 household electric unit = melting ~5 kg ice and boiling to 100°C`!).\n• **Pioneer (`p.255`)**: **==Anna Mani==** mapped India’s insolation from the `1950s` and co-authored ***Solar Radiation Over India (`1982`)*** with **S. Rangarajan** (`Group D Shift 36`) — proving even a tiny fraction of **Thar Desert** covered with solar panels could supply **India’s ENTIRE electricity**!',
            hi: 'सौर ऊर्जा, पृथ्वी की आंतरिक ऊष्मा व रासायनिक क्रियाएँ **5 मंडलों** को एक सूक्ष्म संतुलन में बाँधती हैं (`NCERT पृ. 252–253`):\n• **भूमंडल** (`दक्कन पठार, थार मरुस्थल`), **जलमंडल** (`महासागर, गंगा-ब्रह्मपुत्र, भूजल`), **हिममंडल** (`हिमालयी हिमानियाँ, लद्दाख हिम`), **वायुमंडल** (`78% N₂, 21% O₂`), व **जैवमंडल** (`मैंग्रोव, प्लवक, प्रवाल भित्तियाँ`)। **क्र. 13.1 अंतःसंबंध**: कम हिमपात से ग्रीष्म झील व घास घटती है; अरब सागर के गर्म होने से **दक्षिण-पश्चिम मानसून** बाढ़-सूखा लाता है; हिमनद पिघलने से **मुंबई व चेन्नई** जैसे तटीय शहरों को खतरा बढ़ता है!\n• **सौर विकिरण (`13.1`)**: निर्वात में **`3 × 10⁸ m/s` चाल वाली विद्युत-चुंबकीय (`EM`) तरंगें** हैं (`ध्वनि यांत्रिक तरंग से भिन्न`)। सूर्य की **`99%` ऊर्जा** **UV (`100–400 nm`), दृश्य प्रकाश (`प्रकाश संश्लेषण`) व अवरक्त (`ऊष्मा`)** में है; गामा/X-किरणें ऊपरी वायुमंडल छान लेता है व **ओजोन (`O₃`)** घातक पराबैंगनी किरणें रोकती है।\n• **==सौर स्थिरांक एवं सूर्ययातप==**: वायुमंडल के शीर्ष पर लंबवत प्राप्त सौर ऊर्जा **`1.4 kWm⁻²` (`1400 J s⁻¹m⁻²`)** है (`Group D Shift 43`)! प्रकीर्णन बाद सतह पर स्वच्छ आकाश में **`~1 kWm⁻²`** पहुँचती है (`उदा. 13.1: 1 घंटे में 1 m² पर E = 1000×1×3600 = 3.6×10⁶ J` अर्थात् `1 घरेलू बिजली इकाई`)!\n• **विज्ञान एवं समाज (`अन्ना मणि`, पृ. 255)**: भारतीय वैज्ञानिक **==अन्ना मणि==** ने `1950` दशक में भारतीय सूर्ययातप का मानचित्रण कर एस. रंगराजन के साथ **`1982` में *सोलर रेडिएशन ओवर इंडिया* प्रथम एटलस** रची (`Shift 36`) — आज भी गणना दर्शाती है कि **थार मरुस्थल** के मात्र एक छोटे हिस्से पर सौर पैनल लगाकर **पूरे भारत की बिजली पूरी की जा सकती है**!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch13/real/gangotri_glacier.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch13/real/thar_desert.webp',
            title: { en: 'Coupled Cryosphere & Solar Geosphere (`NCERT Ch 13`): Gangotri Glacier (`Hydrosphere Source`) & Thar Desert (`Solar Energy Anchor`)', hi: 'हिममंडल व सौर भूमंडल (`NCERT अध्याय 13`): गंगोत्री हिमानी (`भागीरथी जल स्रोत`) एवं थार मरुस्थल (`सौर ऊर्जा भंडार`)' },
            caption: {
              en: 'Left (`Cryosphere -> Hydrosphere`): Himalayan snow & glaciers with high albedo (0.5–0.9) feed perennial northern rivers (NTPC Shift 41). Right (`Thar`): Low vegetation/abundant clear insolation empowers India’s solar transition (Anna Mani Box).',
              hi: 'बायाँ (`गंगोत्री`): उच्च एल्बिडो वाला हिममंडल उत्तर भारतीय नदियों को जल देता है। दायाँ (`थार मरुस्थल`): प्रचुर वर्ष-भर सूर्ययातप भारत के सौर भविष्य की कुंजी है।',
            },
          },
          inlinePyqIds: ['pyq-c9c13-1', 'pyq-c9c13-2', 'pyq-c9c13-3', 'pyq-c9c13-4', 'pyq-c9c13-15'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Albedo (`Table 13.1`), Urban Heat Islands, Troposphere vs Stratosphere (`Table 13.2`), K.R. Ramanathan & Venus Trap',
            hi: '2. एल्बिडो (`तालिका 13.1`), शहरी ऊष्मा द्वीप, वायुमंडल परतें (`तालिका 13.2`), के.आर. रामनाथन तथा शुक्र बनाम बुध तापमान भेद',
          },
          conceptStory: {
            en: 'Earth’s surface reflects vs absorbs incoming sunlight unequally depending on **material colour, latitude & atmospheric layers**:\n• **==Albedo (`Table 13.1` — Latin *albus*: whiteness)==**: Fraction of solar radiation reflected back! **High albedo = cools surface** (**Fresh Snow `0.80–0.90`**, **Ice `0.50–0.70`**, Crushed rocks `0.25–0.30`, Light soil `0.25–0.45`). **Low albedo = absorbs rapidly -> hotter** (`Black soil`, `Dark ocean water`, `Asphalt roads`). Just like dark vs white summer shirts (`Ch 7`)!\n• **Urban Heat Island (`Fig 13.6`, p.257)**: Concrete buildings & dark asphalt absorb heat by day and **re-radiate IR at night**, keeping cities hotter than mud/wood rural homes cooled by shade & plant transpiration.\n• **Latitudes & Axial Tilt (`13.1.2`)**: Earth’s curved sphere concentrates sunlight steeply at the **Equator** and spreads rays weakly at **Poles**, while **axial tilt + revolution** drive seasons and day-length swings (`Group D Shift 38`).\n• **Atmospheric Layers (`Table 13.2`, Fig 13.7, p.258)**:\n  1) **==Troposphere (`0–12 km`, thickest over Equator, thinnest over Poles)==**: Heated from Earth’s surface -> **temperature DROPS with altitude (`~6.5°C/km`)**; hosts almost **ALL clouds, rain, winds & storms**!\n  2) **==Stratosphere (`12–50 km`)==**: Houses **Ozone layer (`O₃`)** absorbing UV -> **temperature RISES with height** (`reversal around 12–15 km!`, `Group D Shift 16`), suppressing vertical mixing so air stays calm & weather-free!\n  3) Above lie **Mesosphere (`~50–80 km`), Thermosphere & Exosphere (`outer space ~100 km`)**.\n• **==Two Classic Atmospheric Exam Questions (`p.258–259`)==**: **(i) Why is Venus hotter than Mercury despite being farther from the Sun?** Mercury lacks a thick atmosphere, whereas **Venus’s dense atmosphere traps IR rays via runaway greenhouse effect** (`Group D Shift 10`)! **(ii) Scientist**: **K.R. Ramanathan (`1934`)** climbed **`18,000 ft`** in the Himalayas measuring lower ozone than expected and pioneered Indian monsoon forecasting!',
            hi: 'सौर ऊष्मण सतह के रंग, अक्षांश व वायुमंडलीय परतों पर निर्भर करता है:\n• **==एल्बिडो (`Albedo`, तालिका 13.1 — लैटिन *धवलता*)==**: सतह द्वारा परावर्तित सौर विकिरण का अंश! **उच्च एल्बिडो = ठंडी सतह** (**ताज़ा हिम `0.80–0.90`**, **बर्फ `0.50–0.70`**, संदलित चट्टान `0.25–0.30`, हल्की मृदा `0.25–0.45`); **निम्न एल्बिडो = तेज गर्म** (**काली मृदा, महासागरीय जल, डामर सड़कें**)! **शहरी ऊष्मा द्वीप (`चित्र 13.6`)**: कंक्रीट व डामर ऊष्मा सोख रात में पुनः विकिरित करते हैं जबकि ग्रामीण क्षेत्रों में मिट्टी-लकड़ी व पादप वाष्पोत्सर्जन ठंडक रखते हैं।\n• **अक्षांश व अक्षीय झुकाव (`13.1.2`)**: पृथ्वी गोल होने से भूमध्य रेखा पर किरणें संकेंद्रित व ध्रुवों पर फैली पड़ती हैं; **अक्ष पर झुकाव (`23.5°`) व परिक्रमण** ऋतुएँ व दिन-अवधि बदलते हैं (`Shift 38`)।\n• **वायुमंडल के संस्तर (`तालिका 13.2`, चित्र 13.7)**:\n  1) **==क्षोभमंडल (`0–12 km`, भूमध्य पर अधिकतम ऊँचाई)==**: सतह से गर्म होने से **ऊँचाई संग ताप घटता है (`~6.5°C/km`)**; बादल, आँधी, वर्षा यहीं होते हैं!\n  2) **==समतापमंडल (`12–50 km`)==**: **ओजोन परत (`O₃`)** UV किरणें सोखकर ऊष्मा बनाती है, जिससे **ऊँचाई के साथ तापमान बढ़ता है** (`Shift 16`) और वायु शांत रहती है (`जेट विमान मार्ग`)!\n  3) इसके ऊपर मध्यमंडल, तापमंडल व बहिर्मंडल (`~100 km` अंतरिक्ष सीमा)।\n• **महत्वपूर्ण प्रश्न व वैज्ञानिक**: (1) **शुक्र (`Venus`) बुध से दूर होकर भी अधिक गर्म क्यों?** घने वायुमंडल का अनियंत्रित हरितगृह प्रभाव (`Shift 10`)! (2) **के. आर. रामनाथन (`1934`)** ने हिमालय में **`18,000` फीट** पर ओजोन मापी तथा मानसून पूर्वानुमान की नींव रखी!',
          },
          inlinePyqIds: ['pyq-c9c13-5', 'pyq-c9c13-6', 'pyq-c9c13-7', 'pyq-c9c13-8'],
        },
      ],
    },
    {
      id: 'winds-ocean-currents-cycles',
      number: '13.2–13.3',
      diagramKey: 'c9-ch13-biogeochemical-cycles-diagram',
      svgLab: 'earth-energy-carbon-lab',
      svgLabTitle: {
        en: 'Interactive 3-in-1 Earth System Lab: Albedo (`Table 13.1`), Winds/Gyres (`Valley/Gulf Stream`) & Carbon/Nitrogen Cycles',
        hi: 'इंटरैक्टिव 3-इन-1 पृथ्वी प्रयोगशाला: एल्बिडो स्केल, घाटी-पर्वत समीर/भंवर एवं कीलिंग वक्र-नाइट्रोजन जीवाणु',
      },
      title: {
        en: 'Winds (`Valley vs Mountain, 0°–90° Belts`), Ocean Gyres (`Gulf Stream`) & 4 Biogeochemical Cycles (`Water, C, N, O₂`)',
        hi: 'पवन तंत्र (`घाटी/पर्वत समीर व ग्रहीय पट्टियाँ`), महासागरीय भंवर (`गल्फ स्ट्रीम`) व चारों जैव-भूरासायनिक चक्र',
      },
      summaryTag: {
        en: 'NCERT Pages 259–265 • IITM Pune, Keeling Curve 315→420 ppm, Oceans 71% C vs 1% Atm, Rhizobium/Nitrosomonas/Nitrobacter/Pseudomonas & Haber-Bosch',
        hi: 'NCERT पृ. 259–265 • IITM पुणे, कीलिंग वक्र 315→420 ppm, 71% सागरीय कार्बन, नाइट्रोजन जीवाणु, हाबर-बॉश व ऑक्सीजन चक्र',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Local Breezes (`Day Valley vs Night Mountain`), Planetary Belts (`0°–90°`), Coriolis Deflection & Gulf Stream (`IITM Pune`)',
            hi: '1. स्थानीय समीर (`घाटी बनाम पर्वत`), ग्रहीय दाब पट्टियाँ (`0°–90°`), घूर्णन विक्षेप व गल्फ स्ट्रीम (`IITM पुणे`)',
          },
          conceptStory: {
            en: 'Air moves from **High Pressure -> Low Pressure** across all scales (`NCERT Sec 13.2, p.259–261`):\n• **1) Local Winds (`Fig 13.8`) — Mountain & Valley Cycle**: **Daytime Valley Breeze**: sunlit mountain slopes warm much faster than valley bottom -> hot air rises upslope -> cool valley floor air flows UPWARD! **Night Mountain Breeze (`Group D Shifts 20, 27`)**: slopes cool rapidly after sunset -> dense cold air **sinks downslope into valley floors** (`experienced nightly in Shimla & Dehradun`, stabilizing crop & soil humidity!).\n• **2) Planetary Pressure Belts (`Fig 13.9`)**: Equator **`0°` Low Pressure** (`rising heated air`) -> cools & descends near **`30° N/S` Subtropical High Pressure** -> parts flow toward poles meeting polar cold air near **`60° N/S` Subpolar Low** -> **`90°` Polar High Pressure**. **Earth’s axial rotation** curves straight winds to the **RIGHT in the Northern Hemisphere** and **LEFT in the Southern Hemisphere**!\n• **3) Ocean Currents & Gyres (`13.2.3`, Fig 13.10)**: Planetary wind friction + temperature gradients + **salinity density** (`low-salinity stays near surface, dense salty cold water sinks deep!`) + continental barriers bend ocean flow into vast **Gyres** (**Clockwise in North**, **Anti-clockwise in South**). The warm **Gulf Stream (`-> North Atlantic Drift`)** flows from North America’s southeast coast across Europe, keeping high-latitude **NW European ports ICE-FREE even in winter**! India’s **IITM Pune (`Fig 13.11`)** supercomputers fuse buoys, satellites & Antarctic stations to simulate India’s **Southwest Monsoon**!',
            hi: 'सौर तापन अंतर से वायु **उच्च दाब से निम्न दाब** की ओर प्रवाहित होती है (`NCERT भाग 13.2`):\n• **स्थानीय पवन (`चित्र 13.8`): घाटी व पर्वत समीर**: **दिन (`घाटी समीर`)**: पहाड़ी ढलानें घाटी तल से जल्दी गर्म होती हैं -> ढलान की गर्म हवा ऊपर उठती है व घाटी से ठंडी हवा ऊपर जाती है। **रात (`पर्वत समीर`)**: सूर्यास्त बाद ढलान तेजी से ठंडी होती है -> सघन ठंडी हवा **नीचे घाटी की ओर बहती है (`शिमला व देहरादून`)** (`Group D Shift 20, 27`) और मृदा-फसल की नमी नियंत्रित करती है!\n• **ग्रहीय पवन (`चित्र 13.9`)**: **`0°` भूमध्यरेखीय निम्न दाब** से उठी वायु **`30° उ./द.` उपोष्ण उच्च दाब** पर उतरती है -> पुनः ध्रुवों की ओर बढ़ **`60° उ./द.` उपध्रुवीय निम्न दाब** व **`90°` ध्रुवीय उच्च दाब** से चक्र बनाती है। **पृथ्वी के घूर्णन से पवनें उत्तरी गोलार्ध में दाईं ओर तथा दक्षिणी गोलार्ध में बाईं ओर विक्षेपित (`मुड़`) जाती हैं!**\n• **महासागरीय धाराएँ (`13.2.3`, चित्र 13.10)**: ग्रहीय पवन घर्षण, ताप व **लवणता घनत्व** (`कम लवणता जल ऊपर, अधिक लवणता ठंडा जल नीचे जाता है`) से विशाल वृत्ताकार **भंवर (`Gyres`)** बनते हैं (**उत्तरी गोलार्ध में घड़ी की सुई दिशा CW, दक्षिणी में विपरीत CCW**)। उष्ण **गल्फ स्ट्रीम / उत्तरी अटलांटिक प्रवाह** उच्च अक्षांश वाले उत्तर-पश्‍चिमी **यूरोप के बंदरगाहों को सर्दियों में भी बर्फ-मुक्त** रखता है! **IITM पुणे** उपग्रह व तैरते हिंद महासागर उपकरणों (`buoys`) से भारतीय मानसून मॉडल चलाता है।',
          },
          inlinePyqIds: ['pyq-c9c13-11', 'pyq-c9c13-12', 'pyq-c9c13-13', 'pyq-c9c13-14'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Water, Carbon (`Keeling Curve 315→420 ppm`), Nitrogen (`Rhizobium → Nitrobacter → Pseudomonas`) & Oxygen Cycles (`13.3`)',
            hi: '2. चार जैव-भूरासायनिक चक्र: जल, कार्बन (`कीलिंग वक्र`), नाइट्रोजन (`राइजोबियम से हाबर-बॉश`) व ऑक्सीजन चक्र (`13.3`)',
          },
          conceptStory: {
            en: 'Biogeochemical cycles circulate essential nutrients continuously between **abiotic** air/water/rock and **biotic** life (`NCERT Sec 13.3, p.262–265`):\n• **1) Water Cycle (`13.3.1`, Fig 13.12)**: Evaporation/plant transpiration -> condensation -> precipitation -> soil percolation (`dissolving minerals for land & sea life!`). Global warming holds excess moisture causing intense floods/droughts; flash runoff lowers **groundwater recharge**.\n• **2) ==Carbon Cycle (`13.3.2`, Fig 13.13–13.14)==**: Backbone of carbohydrates, proteins, fats & DNA (**`49%` of living dry weight!**). Global distribution box: **==`~71%` global carbon rests in OCEANS, vs ONLY `~1%` in Atmosphere!==** Fast cycle (`photosynthesis <-> respiration/decomposition`) vs slow geological cycle (`fossil coal/oil/gas + marine phytoplankton/shells`). **Keeling Curve (`1960–2025`, Fig 13.14)**: Atmospheric `CO₂` rose **`~35%`** from **`315 ppm -> 420 ppm`**, showing annual **sawtooth zig-zags** (`northern summer plant growth absorbs atmospheric CO₂!`).\n• **3) ==Nitrogen Cycle (`13.3.3`, Fig 13.15 — Atmospheric N₂ 78%)==**: Inert `N₂` gas must become soluble compounds before plants make proteins/nucleic acids: `(i)` **Fixation** (`Rhizobium` in legume root nodules + soil `Azotobacter` + lightning NOₓ -> **NH₃**); `(ii)` **Nitrification** (**`Nitrosomonas`** converts `NH₃ -> NO₂⁻` nitrites; **`Nitrobacter`** converts `NO₂⁻ -> NO₃⁻` nitrates!); `(iii)` **Assimilation** (`plants absorb NO₃⁻`); `(iv)` **Ammonification** (`decomposers recycle wastes -> NH₃`); `(v)` **Denitrification** (**`Pseudomonas`** returns `NO₃⁻ -> N₂`!). Industrial **Haber-Bosch (`early 1900s`, "Bread from Air")** fixes `N₂` into synthetic ammonia fertilisers (`>50%` N atoms in human bodies!), consuming **`1–2%` global energy**!\n• **4) Oxygen Cycle (`13.3.4`, `21% O₂`)**: Consumed by **respiration, combustion & mineral oxidation**; replenished SOLELY by **green-plant & oceanic phytoplankton photosynthesis**!',
            hi: '**अजैविक और जैविक घटकों के मध्य ऊर्जा व तत्वों का चक्रीय संचलन** जैव-भूरासायनिक चक्र कहलाता है (`NCERT भाग 13.3`):\n• **जल चक्र**: वाष्पन/वाष्पोत्सर्जन → संघनन → वर्षण → चट्टानों से खनिज घोल नदियों व भूजल तक (`अतिवृष्टि से सतही अपवाह बढ़ भूजल पुनर्भरण घटता है`)।\n• **==कार्बन चक्र (`13.3.2`, चित्र 13.13–13.14)==**: प्रोटीन, कार्बोहाइड्रेट, वसा व DNA का आधार (**सजीव शुष्क भार का `49%`!**)। **==वैश्विक कार्बन का `~71%` महासागरों में, जबकि वायुमंडल में मात्र `~1%` भाग है!==** **कीलिंग वक्र (`1960–2025`)**: मानव जीवाश्म दहन व वनोन्मूलन से `CO₂` **`315 ppm → 420 ppm` (`+35%`)** पहुँची; आरीनुमा उतार-चढ़ाव उत्तरी गोलार्ध में ग्रीष्म वनस्पति द्वारा `CO₂` अवशोषण दिखाता है!\n• **==नाइट्रोजन चक्र (`13.3.3`, चित्र 13.15)==**: अक्रिय वायुमंडलीय `N₂` को घुलनशील रूप में बदलने के 5 चरण: **(1) स्थिरीकरण**: फलीदार जड़ों में **राइजोबियम**, मृदा में **एजोटोबैक्टर** एवं **तड़ित** से अमोनिया (`NH₃`); **(2) नाइट्रीकरण**: **नाइट्रोसोमोनास** (`NH₃ → नाइट्राइट NO₂⁻`) → **नाइट्रोबैक्टर** (`NO₂⁻ → नाइट्रेट NO₃⁻`); **(3) स्वांगीकरण** (`पादप ग्रहण`); **(4) अमोनीकरण** (`अपघटक → अमोनिया`); **(5) विनाइट्रीकरण**: **स्यूडोमोनास (`Pseudomonas`)** `NO₃⁻ → N₂`! **हाबर-बॉश (`1900` दशक — "वायु से अन्न")** ने कृत्रिम उर्वरक बनाए (`मानव शरीर के आधे से अधिक N परमाणु इसी से`, पर वैश्विक ऊर्जा का `1–2%` खर्च)!\n• **ऑक्सीजन चक्र (`13.3.4`, `21%`)**: श्वसन व दहन से खर्च तथा **प्रकाश संश्लेषण** से निरंतर पुनर्स्थापित होता है!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch13/real/fabaceae.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch13/real/coral_reef.webp',
            title: { en: 'Living Biogeochemical Hubs (`13.3–13.4`): Legume Host of `Rhizobium` (`Nitrogen Cycle`) & Coral Reef (`Carbon Sink / Acidification`)', hi: 'जैव-रासायनिक केंद्र: `राइजोबियम` नाइट्रोजन स्थिरीकरण वाली फलीदार पादप (`बायाँ`) व प्रवाल भित्ति सागरीय कार्बन तंत्र (`दायाँ`)' },
            caption: {
              en: 'Left (`Fabaceae`): Root nodules house symbiotic Rhizobium converting inert atmospheric N₂ into plant-usable ammonia (`NH₃`). Right (`Coral Reef`): Excess atmospheric CO₂ acidifies seawater, bleaching & eroding CaCO₃ skeletons (`Group D Shifts 1, 4`).',
              hi: 'बायाँ (`फैबेसी`): इनकी जड़ ग्रंथियों में राइजोबियम जीवाणु N₂ स्थिरीकरण करते हैं। दायाँ (`प्रवाल भित्ति`): अत्यधिक CO₂ घुलाव से समुद्री अम्लीकरण इन कैल्सियम भित्तियों को संकट में डालता है।',
            },
          },
          inlinePyqIds: ['pyq-c9c13-16', 'pyq-c9c13-17', 'pyq-c9c13-18', 'pyq-c9c13-19', 'pyq-c9c13-20', 'pyq-c9c13-21'],
        },
      ],
    },
    {
      id: 'human-disruptions-treaties-life',
      number: '13.4',
      diagramKey: 'c9-ch13-albedo-climate-impacts-diagram',
      title: {
        en: 'Human Disruptions (`Acid Oceans, Eutrophication, Smog`), Montreal vs Kyoto/Paris Treaties & India’s Mission LiFE (`2021`)',
        hi: 'मानवीय प्रभाव (`महासागर अम्लीकरण, सुपोषण, भू-ओजोन`), मॉन्ट्रियल बनाम क्योटो/पेरिस एवं भारत का मिशन LiFE (`2021`)',
      },
      summaryTag: {
        en: 'NCERT Pages 265–270 • Fig 13.17 Algal Bloom, Deforestation Albedo/Transpiration Loss, Ground vs Stratospheric Ozone & Sustainable 3Rs',
        hi: 'NCERT पृ. 265–270 • चित्र 13.17 शैवाल प्रस्फुटन, वनोन्मूलन प्रभाव, दो रूप की ओजोन तथा नवीकरणीय व 3R पुनरुद्धार',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Four Human Impact Chains (`Ocean Acidification, Eutrophication, Deforestation, Tropospheric Smog`) & Recovery Blueprint',
            hi: '1. मानवीय हस्तक्षेप शृंखला (`अम्लीकरण, सुपोषण, वनोन्मूलन, धूम्रकुहरा`) तथा मॉन्ट्रियल प्रोटोकॉल व मिशन LiFE समाधान',
          },
          conceptStory: {
            en: 'Past 50 years of industrial & agricultural expansion stressed Earth’s natural sinks (`NCERT Sec 13.4, p.265–266`):\n• **1) Saturation & Ocean Acidification**: Natural forest & ocean carbon sinks are saturating; dissolved surplus `CO₂` turns seawater **more acidic** (`Group D Shift 4`), disrupting coral/plankton calcium carbonate shells while warm ocean water loses capacity to dissolve `CO₂` (`Shift 1`)!\n• **2) ==Eutrophication (`सुपोषण`, Fig 13.17)==**: Excessive agricultural **nitrate fertilisers** wash into rivers & lakes -> explosive **algal bloom** blankets surface -> dead algae decompose consuming **dissolved `O₂`** -> suffocates fish & ruins coastal fisheries!\n• **3) Deforestation Triple Blow**: Cuts photosynthesis (`CO₂↑`), drops plant **transpiration** (`local rainfall drops!`), alters surface **albedo**, eliminates binding tree roots (`soil erosion`), and destroys **biodiversity habitats** (`Group D Shift 31`).\n• **4) Smog & Toxic Ground-Level Ozone (`p.266`)**: Vehicular exhaust reacts with sunlight forming urban **smog + ground-level ozone** — which **harms lungs/biosphere** (`Shift 41`), unlike protective high-altitude **Stratospheric Ozone**!\n• **Treaties & India’s Leadership**:\n  - **Montreal Protocol (`Huge Success`)**: Global ban/phase-down of refrigerator/aerosol **CFCs** (`caused 1980s Antarctic ozone hole`, `Tech 3 Shift 1`) allows slow **ozone recovery**.\n  - **Kyoto Protocol (`Shift 57`) & Paris Agreement**: Aimed to slash national `CO₂` emissions (`achieved less uniform compliance`).\n  - **==Mission LiFE (`Lifestyle for Environment`, 2021 UN Climate Summit)==**: Global initiative led by India celebrating traditional *interconnected Earth* wisdom — **Reduce, Reuse, Recycle**, solar/wind clean energy expansion, water thrift & billion-tree afforestation!',
            hi: 'विगत 50 वर्षों की मानवीय गतिविधियों ने पृथ्वी के प्राकृतिक चक्रों को झकझोरा है (`NCERT भाग 13.4`):\n• **1) कार्बन सिंक संतृप्ति व महासागरीय अम्लीकरण**: अतिरिक्त वायुमंडलीय `CO₂` समुद्री जल में घुलकर उसे **अधिक अम्लीय** बनाती है (`Group D Shift 4`), जिससे **प्लवक व प्रवाल भित्तियों** को हानि होती है; साथ ही गर्म जल की `CO₂` अवशोषण क्षमता घटती है (`Shift 1`)।\n• **2) ==सुपोषण (`Eutrophication`, चित्र 13.17)==**: खेतों के अत्यधिक **नाइट्रेट उर्वरक** झीलों-नदियों में पहुँचने पर **तीव्र शैवाल प्रस्फुटन (`Algal bloom`)** होता है, जिससे पानी की **ऑक्सीजन समाप्त हो मछलियाँ मर जाती हैं**!\n• **3) वनोन्मूलन प्रभाव**: प्रकाश संश्लेषण व वाष्पोत्सर्जन घटने से स्थानीय वर्षा में कमी, एल्बिडो परिवर्तन, जड़ें न रहने से मृदा अपरदन एवं जैव विविधता ह्रास।\n• **4) धूम्रकुहरा व दो ओजोन भेद (`पृ. 266`)**: वाहनों का धुआँ सूर्य के प्रकाश से क्रिया कर निचले स्तर पर **विषैला धूम्रकुहरा व भू-स्तरीय ओजोन** बनाता है जो स्वास्थ्य के लिए घातक है (`जबकि समतापमंडल की ओजोन जीवन रक्षक कवच है!`)।\n• **वैश्विक संधियाँ व भारत**: **मॉन्ट्रियल प्रोटोकॉल** ने रेफ्रिजरेटर/एरोसॉल की **CFCs** घटा ओजोन परत बचाई (`सफल!`); **क्योटो प्रोटोकॉल (`NTPC Shift 57`) व पेरिस समझौता** `CO₂` कटौती हेतु हैं। भारत ने **2021 में मिशन LiFE** शुरू किया जो **सौर-पवन ऊर्जा, वृक्षारोपण, जल बचत व 3R (`Reduce-Reuse-Recycle`)** से पृथ्वी संतुलन लौटाता है!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch13/real/algal_bloom.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch13/real/mangrove.webp',
            title: { en: 'Disruption vs Coastal Resilience: Satellite View of `Eutrophication Algal Bloom` (`Left`) & Coastal `Mangrove Ecosystem` (`Right`)', hi: 'सुपोषण बनाम तटीय सुरक्षा: उपग्रह से दिखता `शैवाल प्रस्फुटन` (`बायाँ`) एवं तटीय `मैंग्रोव` जैवमंडल (`दायाँ`)' },
            caption: {
              en: 'Left (`Fig 13.17`): Agricultural nitrate runoff triggers thick green algal blooms starving aquatic life of O₂ (`Eutrophication`). Right: Mangroves couple land, sea, and climate defense naturally.',
              hi: 'बायाँ (`चित्र 13.17`): अतिरिक्त नाइट्रेट बहने से जल सतह पर हरा शैवाल प्रस्फुटन (`सुपोषण`)। दायाँ: मैंग्रोव वन भूमंडल, जलमंडल व जैवमंडल का अद्भुत संगम हैं।',
            },
          },
          inlinePyqIds: ['pyq-c9c13-9', 'pyq-c9c13-10', 'pyq-c9c13-22', 'pyq-c9c13-23', 'pyq-c9c13-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Stratospheric Ozone (`O₃` Shield) vs Tropospheric / Ground-Level Ozone (`Smog`)', hi: 'समतापमंडल ओजोन (`रक्षक कवच`) बनाम भू-स्तरीय ओजोन (`विषैला धूम्रकुहरा`)' },
      left: { en: '**Stratospheric (`12–50 km`)**: Formed by UV on `O₂`; absorbs lethal solar UV rays & protects skin/crops (`Montreal Protocol guards this via CFC ban!`).', hi: '**समतापमंडल (`12–50 km`)**: सूर्य की घातक पराबैंगनी किरणों को रोककर जीवन की रक्षा करती है (`मॉन्ट्रियल प्रोटोकॉल` ने CFC रोक इसे बचाया)!' },
      right: { en: '**Ground-level (`Troposphere`)**: Formed when vehicle exhaust reacts with sunlight -> **toxic smog pollutant** harming human lungs & plants (`Group D Shift 41`)!', hi: '**भू-स्तरीय (`क्षोभमंडल`)**: वाहनों के धुएँ व धूप की क्रिया से बना विषैला **धूम्रकुहरा व प्रदूषक**, जो श्वसन व जैवमंडल को हानि पहुँचाता है!' },
    },
    {
      pair: { en: 'Solar Constant (`1.4 kWm⁻²` Top) vs Surface Insolation (`~1 kWm⁻²` Ground)', hi: 'सौर स्थिरांक (`1.4 kWm⁻²`) बनाम धरातलीय सूर्ययातप (`~1 kWm⁻²`)' },
      left: { en: '**Solar Constant (`1.4 kWm⁻²` / `1400 J s⁻¹m⁻²`)**: Average perpendicular solar flux hitting Earth’s **upper atmosphere BEFORE atmospheric loss** (`Shift 43`).', hi: '**सौर स्थिरांक (`1.4 kWm⁻²`)**: वायुमंडल के किसी भी अवशोषण, परावर्तन या प्रकीर्णन से **पूर्व ऊपरी परत पर उपलब्ध औसत सौर ऊर्जा**।' },
      right: { en: '**Surface Insolation (`~1 kWm⁻²` Clear Sky)**: Remaining light reaching ground AFTER reflection (`clouds`), scattering & ozone absorption (`1 m² × 1 h = 3.6×10⁶ J`).', hi: '**धरातलीय सूर्ययातप (`~1 kWm⁻²`)**: बादलों, धूल व गैसों से ह्रास के बाद स्वच्छ आकाश में सतह तक पहुँचने वाली वास्तविक ऊर्जा (`1 घंटा = 3.6×10⁶ J`)।' },
    },
    {
      pair: { en: 'Nitrification (`Nitrosomonas / Nitrobacter`) vs Denitrification (`Pseudomonas`)', hi: 'नाइट्रीकरण (`नाइट्रोसोमोनास / नाइट्रोबैक्टर`) बनाम विनाइट्रीकरण (`स्यूडोमोनास`)' },
      left: { en: '**Nitrification (`Usable Plants`)**: **`Nitrosomonas`** converts `NH₃ -> NO₂⁻` (`nitrite`); **`Nitrobacter`** converts `NO₂⁻ -> NO₃⁻` (`nitrate`) for plant uptake!', hi: '**नाइट्रीकरण (`पादप उपयोगी`)**: **नाइट्रोसोमोनास** (`NH₃ → नाइट्राइट`) व **नाइट्रोबैक्टर** (`नाइट्राइट → नाइट्रेट NO₃⁻`) पौधों के लिए उपयोगी बनाते हैं।' },
      right: { en: '**Denitrification (`Cycle Closer`)**: Soil bacterium **`Pseudomonas`** converts `NO₃⁻` back into inert **`N₂` gas** released into the `78%` air reservoir!', hi: '**विनाइट्रीकरण (`चक्र पूर्णकर्ता`)**: **स्यूडोमोनास** जीवाणु मृदा के नाइट्रेट को पुनः अक्रिय **`N₂` गैस** में बदल वायुमंडल में लौटाता है!' },
    },
    {
      pair: { en: 'Daytime Valley Breeze (`Upslope ↑`) vs Nighttime Mountain Breeze (`Downslope ↓`)', hi: 'दिन की घाटी समीर (`ऊपर की ओर ↑`) बनाम रात की पर्वत समीर (`नीचे की ओर ↓`)' },
      left: { en: '**Valley Breeze (`Daytime`)**: Sunlit mountain slopes heat faster -> low P over slope -> cool valley floor air flows **UP slopes** (`Shimla/Dehradun noon`).', hi: '**घाटी समीर (`दिन में`)**: धूप में पर्वत ढलानें तेजी से गर्म होती हैं → घाटी से ठंडी हवा **ऊपर ढलानों की ओर** बहती है (`Shift 47`)।' },
      right: { en: '**Mountain Breeze (`Nighttime`)**: High slopes radiate heat & cool fast -> dense chilled air slides **DOWN into warm valley floor** (`Group D Shift 20`)!', hi: '**पर्वत समीर (`रात्रि में`)**: रात में ढलानें जल्दी ठंडी हो जाती हैं → सघन ठंडी हवा **नीचे घाटी तल की ओर बहती है** (`Shift 20`)!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Solar Weather Pioneer (`Solar Atlas of India 1982`)', hi: 'भारतीय सौर ऊर्जा एवं मौसम विदुषी (`प्रथम सूर्ययातप एटलस 1982`)' },
      name: { en: 'Dr. Anna Mani (`1918–2001`)', hi: 'डॉ. अन्ना मणि (`1918–2001`)' },
      country: { en: 'India (`NCERT Class 9 Ch 13 p.255`)', hi: 'भारत (`NCERT कक्षा 9 पृ. 255`)' },
      fact: {
        en: 'Mapped India’s nationwide solar radiation across the `1950s` and co-authored ***Solar Radiation Over India (`1982`)*** with **S. Rangarajan** — laying the empirical bedrock for India’s massive solar-power mission (`Group D Shift 36`)!',
        hi: '`1950` के दशक में पूरे भारत के सौर विकिरण का मापन कर **एस. रंगराजन** के साथ **`1982` में देश की प्रथम सूर्ययातप एटलस (*सोलर रेडिएशन ओवर इंडिया*)** प्रकाशित की — आधुनिक सौर क्रांति की आधारशिला!',
      },
    },
    {
      badge: { en: 'Indian Atmospheric Ozone & Monsoon Pioneer (`1934`)', hi: 'भारतीय वायुमंडलीय ओजोन व मानसून अन्वेषक (`1934`)' },
      name: { en: 'Prof. Kalpathi Ramakrishna Ramanathan (`1893–1984`)', hi: 'प्रो. के. आर. रामनाथन (`1893–1984`)' },
      country: { en: 'India (`NCERT Class 9 Ch 13 p.258`)', hi: 'भारत (`NCERT कक्षा 9 पृ. 258`)' },
      fact: {
        en: 'Measured **ozone concentration at `18,000 ft` in the Himalayas (`1934`)**, discovering unexpected lower ozone levels that founded global altitude-ozone UV absorption science and early **monsoon prediction** in India!',
        hi: 'सन् **`1934` में `18,000` फीट ऊँचे हिमालय** पर ओजोन मापकर ऊँचाई एवं प्रदूषण संग UV अवशोषण व भारतीय मानसून पूर्वानुमान की वैज्ञानिक नींव रखी!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-gangotri',
      figRef: { en: 'NCERT Cryosphere -> Hydrosphere Box (`p.253 & NTPC Shift 41`)', hi: 'NCERT हिममंडल → जलमंडल (`पृ. 253 व गंगोत्री स्रोत`)' },
      title: { en: 'Gangotri Glacier (`Bhagirathi Origin`) — Cryosphere–Hydrosphere Link', hi: 'गंगोत्री हिमानी — हिममंडल व गंगा-भागीरथी जलमंडल का जीवंत संबंध' },
      imageUrl: '/ncert-notes/class9-bio-ch13/real/gangotri_glacier.webp',
      hotspots: [
        { en: 'High glacier albedo reflects `50–90%` sunlight; rapid atmospheric warming accelerates melt endangering river regimes & coastal cities (`Mumbai/Chennai`).', hi: 'उच्च एल्बिडो वाली हिमानियाँ गर्मी में नदियों को जल देती हैं; इनके तेज पिघलने से तटीय शहर संकट में पड़ते हैं।' },
      ],
    },
    {
      id: 'vis-thar',
      figRef: { en: 'NCERT Solar Potential Box (`Anna Mani & Fig 13.4`)', hi: 'NCERT सौर क्षमता (`अन्ना मणि व चित्र 13.4 थार मरुस्थल`)' },
      title: { en: 'Thar Desert Geosphere — Enormous Clean Insolation (~1 kW/m²) Hub', hi: 'थार मरुस्थल — प्रचुर सौरयातप (`~1 kWm⁻²`) से भारत की ऊर्जा क्षमता का केंद्र' },
      imageUrl: '/ncert-notes/class9-bio-ch13/real/thar_desert.webp',
      hotspots: [
        { en: 'NCERT Scientist Box: Solar panels over even a small fraction of Thar Desert could supply India’s entire electricity demand!', hi: 'थार मरुस्थल के एक छोटे भाग पर सौर पैनल लगाकर पूरे भारत की वर्तमान विद्युत माँग पूरी की जा सकती है!' },
      ],
    },
    {
      id: 'vis-mangrove',
      figRef: { en: 'NCERT Biosphere Introduction (`p.253`)', hi: 'NCERT जैवमंडल परिचय (`पृ. 253` — तटीय मैंग्रोव)' },
      title: { en: 'Coastal Mangrove Ecosystem Coupling Lithosphere, Ocean & Air', hi: 'तटीय मैंग्रोव — भूमि, महासागर, वायु व जीवन को जोड़ता संवेदनशील तंत्र' },
      imageUrl: '/ncert-notes/class9-bio-ch13/real/mangrove.webp',
      hotspots: [
        { en: 'Salt-adapted pneumatophores anchor coastal sediment, sequester dense "blue carbon" & buffer storm surges.', hi: 'मैंग्रोव तटीय मृदा अपरदन रोकते, भारी मात्रा में कार्बन सँजोते व चक्रवाती तूफानों से तट बचाते हैं।' },
      ],
    },
    {
      id: 'vis-coral',
      figRef: { en: 'NCERT Carbon Sink & Acidification Warning (`Sec 13.4`)', hi: 'NCERT कार्बन भंडार व अम्लीकरण (`भाग 13.4` — प्रवाल भित्ति)' },
      title: { en: 'Coral Reef Ecosystem Threatened by `CO₂`-Driven Ocean Acidification', hi: 'समुद्री प्रवाल भित्ति — बढ़ते कार्बन डाइऑक्साइड व अम्लीकरण से प्रभावित जैवमंडल' },
      imageUrl: '/ncert-notes/class9-bio-ch13/real/coral_reef.webp',
      hotspots: [
        { en: 'Oceans hold `~71%` global carbon; excess dissolved `CO₂` makes seawater acidic (`Shift 4`) bleaching corals (`Shift 1`).', hi: 'महासागरों में `71%` कार्बन संचित है; अत्यधिक `CO₂` घुलने से जल अम्लीय होकर प्रवालों को हानि पहुँचाता है।' },
      ],
    },
    {
      id: 'vis-fabaceae',
      figRef: { en: 'NCERT Fig 13.15 (`Nitrogen Cycle — Rhizobium Host`)', hi: 'NCERT चित्र 13.15 — नाइट्रोजन स्थिरीकरण (`राइजोबियम पोषी पौधा`)' },
      title: { en: 'Legume Plant (`Fabaceae`) Partnering with Nitrogen-Fixing `Rhizobium`', hi: 'फलीदार पादप — जड़ ग्रंथियों में `राइजोबियम` द्वारा वायुमंडलीय `N₂` स्थिरीकरण' },
      imageUrl: '/ncert-notes/class9-bio-ch13/real/fabaceae.webp',
      hotspots: [
        { en: 'Symbiotic `Rhizobium` inside legume root nodules converts inert `78% N₂` air into plant-usable ammonia (`NH₃`).', hi: 'फलीदार जड़ों के राइजोबियम अक्रिय नाइट्रोजन को पौधों हेतु घुलनशील अमोनिया में बदलते हैं।' },
      ],
    },
    {
      id: 'vis-eutrophication',
      figRef: { en: 'NCERT Fig 13.17 (`Eutrophication — Algal Bloom`)', hi: 'NCERT चित्र 13.17 — सुपोषण (`झील/तट पर शैवाल प्रस्फुटन`)' },
      title: { en: 'Eutrophication Bloom Triggered by Agricultural Nitrate Runoff', hi: 'कृषि नाइट्रेट उर्वरक अपवाह से उत्पन्न हरित शैवाल प्रस्फुटन (`सुपोषण`)' },
      imageUrl: '/ncert-notes/class9-bio-ch13/real/algal_bloom.webp',
      hotspots: [
        { en: 'Surplus nitrogen runoff spurs surface algae overgrowth -> dissolved `O₂` plummets during decay -> massive fish kills.', hi: 'अतिरिक्त नाइट्रेट बहने से शैवाल विस्फोट होता है, जिससे पानी में ऑक्सीजन खत्म होकर मछलियाँ मर जाती हैं।' },
      ],
    },
  ],
  activities: [
    {
      num: '13.1',
      title: { en: 'Activity 13.1: Tracing Inter-Sphere Ripples (`Cryosphere → Hydrosphere → Biosphere`)', hi: 'क्रियाकलाप 13.1: पृथ्वी के पांचों मंडलों की पहचान व एक मंडल विक्षोभ का व्यापक प्रभाव' },
      materials: { en: 'NCERT Fig `13.1` Earth landscape plate (`glaciers, lake, mountains, grass, sheep, air`)', hi: 'NCERT चित्र `13.1` (`हिमशिखर, झील, पवन, पहाड़ी मैदान व भेड़ें`)' },
      steps: {
        en: 'Identify & label all 5 spheres in Fig `13.1`; trace what happens if winter mountain snowfall decreases for `3–4` consecutive years.',
        hi: 'चित्र `13.1` में भूमंडल, जलमंडल, हिममंडल, वायुमंडल व जैवमंडल चिह्नित कर लिखें कि लगातार कम हिमपात होने पर झील व घास पर क्या प्रभाव पड़ेगा।',
      },
      examTakeaway: {
        en: 'Melting glacier/snow (**Cryosphere**) feeds lakes (**Hydrosphere**), which nourish valley grass & grazing sheep (**Biosphere**) — **disrupting one sphere ripples everywhere**!',
        hi: '**हिममंडल** पिघलकर झीलों (`जलमंडल`) को भरता है, जिससे मैदानों की घास व जंतु (`जैवमंडल`) जीवित रहते हैं — अतः **एक मंडल का संकट सबको हिला देता है**!',
      },
      predictQuestion: {
        prompt: { en: 'If prolonged atmospheric warming severely diminishes Himalayan winter snowfall in Activity 13.1, what cascades down immediately in summer?', hi: 'क्र. 13.1 के अनुसार यदि लगातार कई शीत ऋतुओं में हिमालयी हिमपात अत्यंत कम हो जाए, तो ग्रीष्मकाल में क्या प्रत्यक्ष परिणाम होगा?' },
        options: {
          en: ['Lake water level falls -> less grass growth & grazing shortage for herbivores', 'Atmospheric nitrogen rises from 78% to 95%', 'Gravity drops sharply over valleys', 'Lakes instantly freeze hotter in June'],
          hi: ['झील का जल स्तर घटेगा → घास वृद्धि कम होगी व शाकाहारी जंतुओं पर संकट आएगा', 'वायुमंडलीय नाइट्रोजन 95% हो जाएगी', 'पहाड़ों पर गुरुत्वाकर्षण घट जाएगा', 'जून में झीलें बर्फ बन जाएँगी'],
        },
        correctIndex: 0,
        reason: {
          en: 'Cryosphere snowmelt recharges summer Hydrosphere lakes supporting terrestrial Biosphere vegetation (`p.253`).',
          hi: 'हिम पिघलन कम होने पर झील का जल स्तर व घास के लिए नमी दोनों घट जाती हैं (`पृ. 253`)!',
        },
      },
    },
    {
      num: '13.2',
      title: { en: 'Activity 13.2: Building the Surface Albedo Scale (`Snow 0.85 → Ice 0.60 → Rocks → Black Soil/Ocean`)', hi: 'क्रियाकलाप 13.2: विभिन्न सतहों के एल्बिडो (`Albedo — तालिका 13.1`) की तुलना व ध्रुवीय शीतलन' },
      materials: { en: 'NCERT Table `13.1` (`Snow, Ice, Crushed Rocks, Light Soil, Black Soil, Ocean Water`)', hi: 'NCERT तालिका `13.1` (`हिम, बर्फ, चट्टान, हल्की मृदा, काली मृदा, महासागरीय जल`)' },
      steps: {
        en: 'Verify albedo figures across snow, ice, dark soils & ocean; correlate reflection percentages directly with surface temperature speeds.',
        hi: 'विभिन्न सतहों के परावर्तन मान (`0.06` से `0.90`) का मिलान करें व बताएँ कि ध्रुव ठंडे और काली मिट्टी के क्षेत्र गर्म क्यों रहते हैं।',
      },
      examTakeaway: {
        en: '**Snow (`0.80–0.90`)** reflects `80–90%` insolation keeping poles freezing cold, whereas **Black Soil (`0.08–0.15`) & Oceans (`0.06–0.10`)** absorb almost `90%`!',
        hi: '**ताज़ा हिम (`0.80–0.90`)** `80–90%` विकिरण लौटाकर ध्रुवों को शीतल रखता है, जबकि **काली मृदा व समुद्र (`~0.08`)** अधिकांश ऊर्जा सोख गर्म रहते हैं!',
      },
      predictQuestion: {
        prompt: { en: 'As Arctic sea-ice (`albedo 0.50–0.70`) melts exposing dark open ocean (`albedo 0.06–0.10`), what happens to regional solar heat absorption?', hi: 'आर्कटिक समुद्री बर्फ (`एल्बिडो 0.50–0.70`) पिघलकर गहरा महासागरीय जल (`एल्बिडो 0.06–0.10`) खुलने पर सौर ऊष्मा अवशोषण पर क्या प्रभाव पड़ेगा?' },
        options: {
          en: ['Dark water absorbs FAR more sunlight (`amplifying global warming feedback`)', 'Earth suddenly turns colder by 15°C', 'Sunlight starts bouncing back 100%', 'Troposphere thickness doubles overnight'],
          hi: ['गहरा जल कहीं अधिक सूर्यप्रकाश सोखेगा (`वैश्विक तापन की गति और तीव्र होगी!`)', 'पृथ्वी तुरंत 15°C ठंडी हो जाएगी', 'सूर्य का 100% प्रकाश परावर्तित हो जाएगा', 'क्षोभमंडल रातों-रात दुगना हो जाएगा'],
        },
        correctIndex: 0,
        reason: {
          en: 'Replacing high-albedo white ice with low-albedo dark water flips `~60%` reflection to `>90%` absorption — a dangerous warming loop!',
          hi: 'श्वेत बर्फ हटने और गहरे समुद्र के खुलने से एल्बिडो अचानक गिरता है व ऊष्मा अवशोषण तेजी से बढ़ जाता है!',
        },
      },
    },
    {
      num: '13.3 (`Ex 13.1 Solar Math`)',
      title: { en: 'NCERT Worked Energy Check (`Ex 13.1`): Converting Surface Insolation `1 kWm⁻²` into Joules & Electricity Units', hi: 'NCERT उदाहरण `13.1` एवं थार सौर पैनल आकलन (`1 kWm⁻²` से `3.6 × 10⁶ J = 1 kWh`)' },
      materials: { en: 'Clear-sky ground insolation `1.0 kW m⁻²`, `1 m²` panel area, `1 hour = 3600 s`', hi: 'धरातल पर स्वच्छ आकाश सूर्ययातप `1.0 kWm⁻²`, क्षेत्रफल `1 m²`, समय `3600 s`' },
      steps: {
        en: 'Compute `E = Intensity × Area × Time = 1000 J s⁻¹ m⁻² × 1 m² × 3600 s` and compare against household electricity consumption (`1 unit`).',
        hi: 'सूत्र `E = तीव्रता × क्षेत्रफल × समय` से `1 घंटे` में प्राप्त सौर ऊर्जा जूल में निकालें व घरेलू बिजली बिल यूनिट से तुलना करें।',
      },
      examTakeaway: {
        en: '`1 kWm⁻²` over `1 m²` for `1 hour` delivers **`3.6 × 10⁶ J`** (`= 1 kWh = heating ~5 kg ice through 100°C boiling!`), highlighting India’s vast Thar solar wealth (`Anna Mani`).',
        hi: '`1 m²` क्षेत्र को `1 घंटे` में **`3.6 × 10⁶ J` (`1 kWh` यूनिट = `5 kg` बर्फ पिघलाकर `100°C` उबालने जितनी ऊर्जा!)** मिलती है!',
      },
      predictQuestion: {
        prompt: { en: 'A rooftop `2 m²` collector absorbs `1 kWm⁻²` insolation cleanly for `30 minutes` (`1800 s`). How much total solar energy (`in Joules`) arrives?', hi: 'यदि किसी `2 m²` सौर पैनल पर `1 kWm⁻²` तीव्रता का सूर्ययातप `30 मिनट` (`1800 s`) तक पड़े, तो कुल कितनी ऊर्जा प्राप्त होगी?' },
        options: { en: ['3.6 × 10⁶ J', '1.8 × 10⁶ J', '7.2 × 10⁶ J', '3.6 × 10⁵ J'], hi: ['3.6 × 10⁶ J', '1.8 × 10⁶ J', '7.2 × 10⁶ J', '3.6 × 10⁵ J'] },
        correctIndex: 0,
        reason: {
          en: '`E = 1000 × 2 × 1800 = 3,600,000 J = 3.6 × 10⁶ J` (`same as 1 m² for 1 hour!`).',
          hi: '`E = 1000 × 2 × 1800 = 36,00,000 J = 3.6 × 10⁶ J`!',
        },
      },
    },
    {
      num: '13.4 (`Nitrogen & Keeling Audit`)',
      title: { en: 'Biogeochemical Flow Lab: Tracing the `5` Nitrogen Bacteria Steps & Keeling Curve `CO₂` Jumps', hi: 'जैव-भूरासायनिक चक्र परीक्षण: नाइट्रोजन के `5` चरण एवं कीलिंग वक्र (`315 → 420 ppm`)' },
      materials: { en: 'NCERT Figs `13.14` (`Keeling Curve 1960–2025`) & `13.15` (`Nitrogen Cycle Microbial Chain`)', hi: 'NCERT चित्र `13.14` (`कीलिंग वक्र`) व चित्र `13.15` (`नाइट्रोजन चक्र के जीवाणु`)' },
      steps: {
        en: 'Compare 1960 (`315 ppm`) vs 2025 (`420 ppm`) `CO₂` rise (`+35%`) & annual sawtooth troughs; map `Rhizobium, Azotobacter, Nitrosomonas, Nitrobacter & Pseudomonas` sequentially.',
        hi: '`1960` से `2025` में `+35% CO₂` वृद्धि व वार्षिक गिरावट के कारण परखें; सभी `5` नाइट्रोजन जीवाणु नाम क्रमानुसार मिलाएँ।',
      },
      examTakeaway: {
        en: 'Global Carbon rests **`71%` in Oceans vs `~1%` in Atmosphere**; Nitrogen needs **`Nitrosomonas (→NO₂⁻) -> Nitrobacter (→NO₃⁻)`** for plant proteins & **`Pseudomonas`** returns `N₂`!',
        hi: 'वैश्विक कार्बन का **`71%` महासागरों व मात्र `1%` वायुमंडल में** है; नाइट्रीकरण दो जीवाणुओं (**नाइट्रोसोमोनास → नाइट्रोबैक्टर**) द्वारा पूर्ण होता है!',
      },
      predictQuestion: {
        prompt: { en: 'Which soil bacterium reverses Nitrification by turning soluble soil nitrates (`NO₃⁻`) back into atmospheric `N₂` gas to close the Nitrogen Cycle?', hi: 'निम्नलिखित में से कौन-सा जीवाणु मृदा के घुलनशील नाइट्रेट (`NO₃⁻`) को पुनः वायुमंडलीय `N₂` गैस में बदलकर (`विनाइट्रीकरण`) चक्र पूर्ण करता है?' },
        options: { en: ['Pseudomonas', 'Rhizobium', 'Nitrosomonas', 'Nitrobacter'], hi: ['स्यूडोमोनास (`Pseudomonas`)', 'राइजोबियम', 'नाइट्रोसोमोनास', 'नाइट्रोबैक्टर'] },
        correctIndex: 0,
        reason: {
          en: '`Pseudomonas` carries out **Denitrification** (`p.264`), whereas `Rhizobium` fixes `N₂` and `Nitrosomonas/Nitrobacter` carry out Nitrification!',
          hi: '**स्यूडोमोनास (`Pseudomonas`)** विनाइट्रीकरण द्वारा नाइट्रेट से पुनः नाइट्रोजन गैस मुक्त करता है (`पृ. 264`)!',
        },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-13-bio-1',
      title: { en: 'Earth’s Five Spheres & Atmospheric Layer Profile (`NCERT Sec 13 & Table 13.2`, p.252–258)', hi: 'पृथ्वी के पाँच मंडल एवं वायुमंडल की मुख्य परतें (`NCERT तालिका 13.2`)' },
      headers: {
        en: ['Sphere / Layer (`Height`)', 'Core Constituents & Physical Nature', 'Temperature Gradient & Key Event', 'Inter-System & Indian Link'],
        hi: ['मंडल / परत (`ऊँचाई`)', 'मुख्य घटक व भौतिक स्वरूप', 'तापमान प्रवृत्ति व विशिष्ट परिघटना', 'पारस्परिक तंत्र व भारतीय संदर्भ'],
      },
      rows: [
        [
          { en: '**5 Earth Spheres (`Intro`)**', hi: '**पृथ्वी के 5 मंडल (`परिचय`)**' },
          { en: '**Geosphere** (`rock/soil`), **Hydrosphere**, **Cryosphere** (`ice`), **Atmosphere** (`78% N₂, 21% O₂`), **Biosphere**', hi: '**भूमंडल** (`चट्टान/मृदा`), **जलमंडल**, **हिममंडल** (`बर्फ`), **वायुमंडल**, **जैवमंडल**' },
          { en: 'Powered by Sun + Earth’s hot core; **disturbing ONE shifts ALL** (`Act 13.1`)!', hi: 'सौर ऊर्जा व आंतरिक ऊष्मा से संचालित; एक का विक्षोभ सभी को बदलता है' },
          { en: 'Deccan/Thar, Ganga-Brahmaputra, Himalayan Glaciers, Mangroves & Plankton', hi: 'दक्कन-थार, गंगा-ब्रह्मपुत्र, हिमालयी हिमानी, मैंग्रोव व प्रवाल' },
        ],
        [
          { en: '**Troposphere** (`0 – 12 km`)', hi: '**क्षोभमंडल (`0 – 12 km`)**' },
          { en: 'Densest lower air + clouds + dust + greenhouse `CO₂/CH₄/H₂O`; **thickest at Equator**', hi: 'सबसे सघन वायु, बादल, जलवाष्प व हरितगृह गैसें; **भूमध्य पर सर्वाधिक ऊँचा**' },
          { en: 'Heated from ground -> **Temp DROPS `~6.5°C/km`** upward; **ALL weather/storms**!', hi: 'सतह से गर्म होने से **ऊँचाई संग ताप घटता है (`~6.5°C/km`)**; समस्त मौसम/वर्षा!' },
          { en: 'Lower traffic **ground-level smog/ozone** here is toxic (`Ch 13.4`)!', hi: 'इस निचली परत में वाहनों का धूम्रकुहरा व भू-ओजोन हानिकारक है!' },
        ],
        [
          { en: '**Stratosphere** (`12 – 50 km`)', hi: '**समतापमंडल (`12 – 50 km`)**' },
          { en: 'Calm weather-free layer housing **Ozone (`O₃`) Shield**', hi: 'शांत व बादल-रहित परत जिसमें **रक्षक ओजोन (`O₃`) परत** स्थित है' },
          { en: 'Ozone absorbs **UV (`100–400 nm`)** -> **Temp INCREASES upward!** (`reversal at ~12 km`)', hi: 'ओजोन द्वारा **UV अवशोषण** से **ऊँचाई के साथ ताप बढ़ता है!** (`Shift 16`)' },
          { en: '**K.R. Ramanathan (`1934` Himalayas)** & **Montreal Protocol (`CFC` ban)**', hi: '**के.आर. रामनाथन (`1934`)** व **मॉन्ट्रियल प्रोटोकॉल (`CFC` रोक)**!' },
        ],
        [
          { en: '**Upper Atmosphere** (`>50–100 km`)', hi: '**मध्य, ताप व बहिर्मंडल (`>50 km`)**' },
          { en: '**Mesosphere -> Thermosphere -> Exosphere** (`Outer space >100 km`)', hi: '**मध्यमंडल → तापमंडल → बहिर्मंडल** (`~100 km` बाह्य अंतरिक्ष आरंभ)' },
          { en: 'Gamma & X-rays mostly filtered out here; **minor role in surface weather**', hi: 'गामा व X-किरणें यहीं छन जाती हैं; सतही मौसम में गौण भूमिका' },
          { en: 'Satellite communications interact here (`Solar radiation + cosmic rays`)', hi: 'सौर व ब्रह्मांडीय विकिरण संचार प्रणालियों को प्रभावित करते हैं' },
        ],
      ],
    },
    {
      id: 'tbl-13-bio-2',
      title: { en: 'Surface Albedo Comparison Scale (`NCERT Table 13.1` & Urban Heat Island, p.256–257)', hi: 'विभिन्न सतहों का एल्बिडो मापन (`NCERT तालिका 13.1`) व ऊष्मा अवशोषण दर' },
      headers: {
        en: ['Surface Material (`Table 13.1`)', 'Albedo Value (`Reflected Fraction`)', 'Thermal Response (`Day vs Night`)', 'Real-World & Climate Effect'],
        hi: ['सतह पदार्थ (`तालिका 13.1`)', 'एल्बिडो मान (`परावर्तित अंश`)', 'ऊष्मीय प्रभाव (`दिन-रात`)', 'जलवायु व स्थानीय उदाहरण'],
      },
      rows: [
        [
          { en: '**Fresh Snow (`हिम`)**', hi: '**ताज़ा हिम (`Snow`)**' },
          { en: '**`0.80 – 0.90`** (`80–90%` reflected!)', hi: '**`0.80 – 0.90`** (`80–90%` परावर्तन)' },
          { en: 'Stays **extremely cold** (`very little sunlight absorbed`)', hi: 'अत्यंत **ठंडा रहता है** (`न्यूनतम अवशोषण`)' },
          { en: 'Keeps **Polar caps & high Himalaya** cold year-round!', hi: 'ध्रुवीय प्रदेशों व ऊँचे हिमालय की शीतलता का मुख्य कारण' },
        ],
        [
          { en: '**Ice (`बर्फ`) & Light Soil / Crushed Rocks**', hi: '**बर्फ (`0.50–0.70`) व चट्टान / हल्की मृदा**' },
          { en: 'Ice **`0.50–0.70`**; Rocks **`0.25–0.30`**; Light soil **`0.25–0.45`**', hi: 'बर्फ **`0.50–0.70`**; चट्टान **`0.25–0.30`**; हल्की मृदा **`0.25–0.45`**' },
          { en: 'Moderately reflective -> warms steadily under midday sun', hi: 'मध्यम परावर्तन; काली मृदा से अधिक ठंडी रहती हैं' },
          { en: 'Glacier melting drops `0.7` albedo down to dark soil/water -> accelerates warming!', hi: 'बर्फ पिघलने पर गहरी सतह खुलने से तापन चक्र तेज होता है' },
        ],
        [
          { en: '**Black Soil (`काली मृदा`), Asphalt & Concrete Cities**', hi: '**काली मृदा (`0.08–0.15`), डामर व कंक्रीट**' },
          { en: 'Low **`~0.08 – 0.20`** (`80–92%` absorbed!)', hi: 'निम्न **`~0.08 – 0.20`** (`80–92%` अवशोषित)' },
          { en: 'Heats rapidly by day AND **re-radiates heat at night**', hi: 'दिन में शीघ्र गर्म व **रात में ऊष्मा पुनः विकिरण (`गर्म रातें`)**!' },
          { en: 'Creates **Urban Heat Island (`Fig 13.6`)** vs cool rural shaded trees & mud walls', hi: '**शहरी ऊष्मा द्वीप प्रभाव** (`ग्रामीण वाष्पोत्सर्जन से ठंडे रहते हैं`)' },
        ],
        [
          { en: '**Deep Ocean Water (`महासागरीय जल`)**', hi: '**महासागरीय जल (`Ocean Water`)**' },
          { en: 'Very Low **`~0.06 – 0.10`** (`~90%+` absorbed!)', hi: 'अत्यंत निम्न **`~0.06 – 0.10`** (`90%+` अवशोषण)' },
          { en: 'Huge thermal inertia (`warms slowly yet stores massive heat`)', hi: 'विशाल ऊष्मा भंडार (`धीरे गर्म पर विशाल ऊर्जा धारक`)' },
          { en: 'Tropical oceans export heat poleward via **Gulf Stream gyres** (`p.261`)', hi: 'भूमध्य से ध्रुवों तक **गल्फ स्ट्रीम व भंवरों** से ऊष्मा स्थानांतरण' },
        ],
      ],
    },
    {
      id: 'tbl-13-bio-3',
      title: { en: 'Winds, Pressure Belts & Global Ocean Current Mechanisms (`NCERT Sec 13.2`, p.259–261)', hi: 'स्थानीय पवन (`घाटी/पर्वत`), ग्रहीय दाब पट्टियाँ व महासागरीय धाराएँ (`NCERT 13.2`)' },
      headers: {
        en: ['Circulation Feature', 'Driving Pressure / Density Physics', 'Flow Direction & Hemisphere Rule', 'Real Geographic Example'],
        hi: ['परिसंचरण तंत्र', 'संचालक दाब / घनत्व कारण', 'प्रवाह दिशा व गोलार्ध नियम', 'प्रमुख भौगोलिक उदाहरण'],
      },
      rows: [
        [
          { en: '**Valley vs Mountain Breeze (`13.2.1`)**', hi: '**घाटी बनाम पर्वत समीर (`13.2.1`)**' },
          { en: 'Day: slope heats faster (`Low P`); Night: slope cools faster (`dense air`)', hi: 'दिन: ढलान शीघ्र गर्म; रात: ढलान शीघ्र ठंडी व वायु सघन' },
          { en: '**Day**: Valley -> **Upslope ↑**; **Night**: Mountain -> **Downslope ↓ (`Shift 20`)**', hi: '**दिन**: घाटी से ढलान **ऊपर ↑**; **रात**: ढलान से नीचे घाटी **↓**' },
          { en: '**Shimla, Dehradun & Himalayan Valleys** (`modulates crop humidity`)', hi: '**शिमला, देहरादून** की घाटियाँ (`फसलों हेतु लाभकारी` — `Think Q2`)' },
        ],
        [
          { en: '**Planetary Pressure Belts (`13.2.2`)**', hi: '**ग्रहीय वायुदाब पट्टियाँ (`13.2.2`)**' },
          { en: 'Uneven spherical heating from **`0°` Eq** to **`90°` Poles**', hi: 'गोलाकार पृथ्वी पर भूमध्य व ध्रुवों के मध्य तापमान अंतर' },
          { en: '`0° Low` -> `30° High` -> `60° Low` -> `90° High`; **Deflected R (`N`) / L (`S`)**', hi: '`0° निम्न`, `30° उच्च`, `60° निम्न`, `90° उच्च`; **उत्तर दाएँ / दक्षिण बाएँ विक्षेप**' },
          { en: 'Curved Trade Winds & **Differential India–Sea Heating (`SW Monsoon`)**', hi: 'व्यापारिक पवनें व **भारतीय दक्षिण-पश्चिम मानसून** (`Shift 31`)' },
        ],
        [
          { en: '**Surface & Deep Ocean Currents (`13.2.3`)**', hi: '**महासागरीय धाराएँ एवं भंवर (`13.2.3`)**' },
          { en: 'Planetary wind drag + **Temp (`warm top`)** + **Salinity (`dense sinks`)**', hi: 'पवन घर्षण + ताप अंतर + **लवणता घनत्व** (`सघन खारा जल नीचे`)' },
          { en: 'Huge **Gyres (`Clockwise N, Anti-clockwise S`)** steered by continents', hi: '**भंवर (`Gyres`)**: उत्तरी गोलार्ध में घड़ी दिशा (`CW`), दक्षिण में विपरीत' },
          { en: '**Gulf Stream -> North Atlantic Drift** keeps **NW Europe ports ice-free**!', hi: '**गल्फ स्ट्रीम / उत्तरी अटलांटिक प्रवाह** यूरोप बंदरगाह बर्फ-मुक्त रखता है!' },
        ],
      ],
    },
    {
      id: 'tbl-13-bio-4',
      title: { en: 'Nitrogen Cycle 5 Steps + Carbon Reservoirs & Keeling Benchmarks (`NCERT Sec 13.3`)', hi: 'नाइट्रोजन चक्र के 5 चरण व कार्बन भंडार (`कीलिंग वक्र 1960–2025` — `NCERT 13.3`)' },
      headers: {
        en: ['Cycle & Process Step', 'Key Microbe / Physical Catalyst', 'Chemical Transformation', 'Major Quantitative Fact (`NCERT`)'],
        hi: ['चक्र व प्रक्रिया चरण', 'प्रमुख जीवाणु / भौतिक कारक', 'रासायनिक रूपांतरण', 'मुख्य परीक्षा आँकड़ा (`NCERT`)'],
      },
      rows: [
        [
          { en: '**N-Cycle `1`: Fixation & Haber-Bosch**', hi: '**N-चक्र `1`: स्थिरीकरण व हाबर-बॉश**' },
          { en: '**Rhizobium** (`legume roots`), **Azotobacter** (`soil`), **Lightning**, Industrial **Haber-Bosch**', hi: '**राइजोबियम** (`फली जड़ें`), **एजोटोबैक्टर**, **तड़ित**, औद्योगिक **हाबर-बॉश**' },
          { en: 'Inert atmospheric **`N₂ -> Ammonia (NH₃)`** / `NOₓ`', hi: 'अक्रिय **`N₂ → अमोनिया (NH₃)`** (`घुलनशील रूप`)' },
          { en: 'Haber-Bosch uses **`1–2%` global energy** yet supplies **`>50%` N in humans**!', hi: 'हाबर-बॉश वैश्विक ऊर्जा का **`1–2%`** लेता है (`"वायु से अन्न"` — `p.264`)' },
        ],
        [
          { en: '**N-Cycle `2`: Nitrification (`2-Step`)**', hi: '**N-चक्र `2`: नाइट्रीकरण (`दो चरण`)**' },
          { en: '**`Nitrosomonas`** (`Step A`) -> **`Nitrobacter`** (`Step B`)', hi: '**`नाइट्रोसोमोनास`** (`चरण 1`) → **`नाइट्रोबैक्टर`** (`चरण 2`)' },
          { en: '`NH₃ -> Nitrite (NO₂⁻) -> Nitrate (NO₃⁻)`', hi: '`NH₃ → नाइट्राइट (NO₂⁻) → नाइट्रेट (NO₃⁻)`' },
          { en: 'Plants assimilate **`NO₃⁻`** to build **proteins & DNA/RNA**', hi: 'पौधे **`NO₃⁻` के स्वांगीकरण** से प्रोटीन व न्यूक्लिक अम्ल बनाते हैं' },
        ],
        [
          { en: '**N-Cycle `4–5`: Ammonification & Denitrification**', hi: '**N-चक्र `4–5`: अमोनीकरण व विनाइट्रीकरण**' },
          { en: 'Decomposers (`fungi/bacteria`) & **`Pseudomonas`** (`Denitrification`)', hi: 'अपघटक (`मृत अवशेष`) एवं **विनाइट्रीकरण जीवाणु `स्यूडोमोनास`**' },
          { en: 'Organic waste -> `NH₃`; Soil **`NO₃⁻ -> N₂` gas** (`returns to 78% air!`)', hi: 'मृत अपशिष्ट → `NH₃`; **`स्यूडोमोनास` `NO₃⁻ → N₂`** गैस मुक्त करता है!' },
          { en: 'Maintains **balanced `~78% N₂`** across biosphere & atmosphere', hi: 'वायुमंडल में **`78% N₂`** संतुलन व मृदा उर्वरा चक्र पूर्ण रखता है' },
        ],
        [
          { en: '**Carbon Cycle & Keeling Curve (`13.3.2`)**', hi: '**कार्बन चक्र व कीलिंग वक्र (`13.3.2`)**' },
          { en: 'Photosynthesis (`fast`), Phytoplankton shells & Fossil Coal/Oil (`slow`)', hi: 'प्रकाश संश्लेषण (`द्रुत चक्र`), पादपप्लवक व जीवाश्म ईंधन (`मंद चक्र`)' },
          { en: '`CO₂ + H₂O <-> Glucose + O₂` / Oceanic `CO₃²⁻ & HCO₃⁻`', hi: '`CO₂` ↔ ग्लूकोज / महासागरीय कार्बोनेट आयन' },
          { en: '**Oceans `71%` C | Living dry wt `49%` C | Air `~1%` C**; Keeling **`315->420 ppm` (`+35%`)**!', hi: '**महासागर `71%` | शुष्क भार `49%` | वायु `~1%`**; कीलिंग **`315 → 420 ppm` (`+35%`)**!' },
        ],
      ],
    },
    {
      id: 'tbl-13-bio-5',
      title: { en: 'Human Disruption Matrix & Global Treaties vs Mission LiFE (`NCERT Sec 13.4`, p.265–266)', hi: 'मानवीय प्रभाव (`अम्लीकरण, सुपोषण, धूम्रकुहरा`) बनाम अंतर्राष्ट्रीय समझौते व मिशन LiFE' },
      headers: {
        en: ['Impact / Accord', 'Root Cause & Affected Spheres', 'Ecological Mechanism / Outcome', 'Status & Railway CBT Trap'],
        hi: ['संकट / अंतर्राष्ट्रीय पहल', 'मूल कारण व प्रभावित मंडल', 'वैज्ञानिक क्रियाविधि व परिणाम', 'सफलता स्थिति व परीक्षा बिंदु'],
      },
      rows: [
        [
          { en: '**Ocean Acidification (`13.4`)**', hi: '**महासागरीय अम्लीकरण**' },
          { en: 'Excess fossil **`CO₂`** dissolving in warming seawater (`Atmo + Hydro + Bio`)', hi: 'वायुमंडल से अतिरिक्त `CO₂` का गर्म समुद्र में विघटन' },
          { en: 'Lowers seawater pH (`more acidic`) -> threatens **corals & plankton shells**', hi: 'समुद्री जल अधिक अम्लीय → **प्रवाल भित्ति व सूक्ष्म प्लवक को संकट**' },
          { en: '**Warm ocean water ALSO absorbs LESS `CO₂`** (`Group D Shifts 1, 4`)!', hi: 'गर्म समुद्र `CO₂` अवशोषण क्षमता घटा देता है (`दोहरा संकट!`)!' },
        ],
        [
          { en: '**Eutrophication (`Fig 13.17`)**', hi: '**सुपोषण (`चित्र 13.17`)**' },
          { en: 'Surplus farm **nitrate/fertiliser runoff** into lakes & rivers', hi: 'कृषि के अतिरिक्त **नाइट्रेट उर्वरक** का जल निकायों में बहना' },
          { en: 'Explosive **Algal Bloom -> decomposition drains dissolved `O₂` -> fish die**', hi: '**शैवाल प्रस्फुटन → `O₂` की भारी कमी → मछलियाँ व जलीय जीवन नष्ट**' },
          { en: 'Links **Haber-Bosch / agriculture excess** to aquatic biosphere loss', hi: 'तटीय मत्स्य संसाधनों के लिए गंभीर मानव-जनित खतरा' },
        ],
        [
          { en: '**Montreal vs Kyoto/Paris (`13.4`)**', hi: '**मॉन्ट्रियल बनाम क्योटो/पेरिस**' },
          { en: '**Montreal** targets **CFCs (`ozone`)**; **Kyoto & Paris** target **`CO₂` (`warming`)**', hi: '**मॉन्ट्रियल** = **CFCs (`ओजोन छिद्र`)**; **क्योटो/पेरिस** = **ग्रीनहाउस `CO₂`**' },
          { en: 'Montreal phased out fridge/aerosol CFCs cleanly -> **O₃ slowly recovering**', hi: 'CFCs घटने से **अंटार्कटिका ओजोन धीरे-धीरे पुनर्नर्मित हो रही है!**' },
          { en: '**Montreal succeeded globally** much more uniformly than Kyoto/Paris!', hi: '**मॉन्ट्रियल** अधिक सफल रहा (`NTPC Shift 16 & Tech 3 Shift 14`)!' },
        ],
        [
          { en: '**India’s Mission LiFE (`2021`)**', hi: '**भारत का मिशन LiFE (`2021`)**' },
          { en: 'Launched by India at **2021 UN Climate Summit** (`COP26`)', hi: 'भारत द्वारा **2021 संयुक्त राष्ट्र जलवायु सम्मेलन** में प्रस्तुत पहल' },
          { en: 'Promotes **mindful eco-friendly habits, solar/wind, afforestation & 3Rs**', hi: '**सजग जीवनशैली, सौर/पवन ऊर्जा, वृक्षारोपण, जल बचत व 3R** प्रोत्साहन' },
          { en: 'Treats Earth once more as ONE integrated sustainable system (`Ch 13 close`)!', hi: 'संपूर्ण मानव समुदाय द्वारा संसाधनों के विवेकपूर्ण उपयोग पर केंद्रित!' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'Think 1 (`PhET Greenhouse`)',
      q: { en: 'How does increasing **greenhouse gases (`CO₂, CH₄, H₂O vapour`)** alter Earth’s infrared balance and surface temperature?', hi: 'वायुमंडल में **हरितगृह गैसों (`CO₂, CH₄, जलवाष्प`)** की मात्रा बढ़ने पर पृथ्वी के सतही तापमान पर क्या प्रभाव पड़ता है?' },
      a: { en: 'Incoming shortwave sunlight passes straight through to warm Earth’s ground; re-radiated **outgoing longwave Infrared (`IR`) heat gets trapped by more greenhouse molecules**, steadily raising surface temperature (`like Venus’s runaway atmosphere`)!', hi: 'सूर्य से आने वाला दृश्य प्रकाश पृथ्वी को गर्म करता है; सतह से पुनः विकिरित **अवरक्त (`IR`) ऊष्मा को बढ़ी हुई हरितगृह गैसें अंतरिक्ष में जाने से रोक लेती हैं**, जिससे सतही तापमान बढ़ जाता है (`उदा. शुक्र ग्रह`)!' },
    },
    {
      num: 'Think 2 (`Mountain Breeze Crops`)',
      q: { en: 'How is a cool **mountain breeze (`nighttime`)** helpful for crops and soil in Himalayan valley agriculture?', hi: 'रात्रि में चलने वाली शीतल **पर्वतीय समीर** हिमालयी घाटी की फसलों और मृदा के लिए किस प्रकार लाभदायक होती है?' },
      a: { en: 'Descending cool air gently moderates extreme daytime heat stress, circulates **humidity evenly across slopes & valleys**, reduces daytime water evaporation loss, and mixes fresh `O₂/CO₂` around mountain crops (`p.259`)!', hi: 'ढलानों से नीचे उतरती शीतल हवा दिन की गर्मी संतुलित कर **ताप व आर्द्रता नियंत्रित करती है, वाष्पन क्षति घटाती है व मृदा-फसलों की गुणवत्ता बनाए रखती है**!' },
    },
    {
      num: 'Think 3 (`Equatorial Surface Current`)',
      q: { en: 'What happens to warm surface ocean water travelling from the **Equator toward the Poles** (`like Gulf Stream -> North Atlantic Drift`), and how does it alter coastal regions?', hi: 'भूमध्य रेखा से ध्रुवों की ओर जाने वाले **गर्म सतही महासागरीय जल (`जैसे गल्फ स्ट्रीम`)** का क्या होता है व तटीय क्षेत्र पर क्या प्रभाव पड़ता है?' },
      a: { en: 'Warm equatorial water loses heat gradually at higher latitudes -> **warms adjacent cold coasts (`keeping NW European winter ports ice-free!` for trade)** -> as it cools & gains density/salinity, it sinks to return slowly deep oceanward toward the equator (`Fig 13.10`)!', hi: 'भूमध्यरेखीय उष्ण जल ध्रुवों तक ऊष्मा ले जाकर तटीय जलवायु को सम बनाता है (**शीतकाल में भी उत्तरी अटलांटिक यूरोपीय बंदरगाह बर्फ-मुक्त रहते हैं!**); बाद में ठंडा व सघन होकर गहराई से पुनः भूमध्य की ओर लौटता है!' },
    },
    {
      num: 'Think 4 (`Acid Ocean Feedback`)',
      q: { en: 'Why is excess atmospheric **`CO₂` combined with rising global temperature** doubly dangerous for oceans and marine coral life?', hi: 'वैश्विक तापमान में वृद्धि के साथ महासागरों में अधिक **`CO₂` घुलने से संतुलन कैसे बिगड़ता है** व समुद्री जीवन पर क्या प्रभाव पड़ता है?' },
      a: { en: 'Two blows hit together (`Sec 13.4`, p.265): `(1)` Dissolved surplus `CO₂` increases **ocean acidity**, eroding calcium carbonate shells of **corals & plankton** (`Group D Shift 4`); `(2)` Warmer ocean water holds **LESS dissolved `CO₂`**, weakening Earth’s main carbon sink (`Shift 1`)!', hi: 'दोहरा संकट: `(1)` अधिक `CO₂` घुलने से **समुद्री जल अम्लीय** होकर **प्रवाल भित्ति व सूक्ष्म प्लवक** नष्ट करता है (`Shift 4`); `(2)` महासागर गर्म होने से उसकी **कार्बन भंडारण (`CO₂` सोखने) की क्षमता भी घट जाती है** (`Shift 1`)!' },
    },
    {
      num: 'Think 5 (`Halt of Cycles`)',
      q: { en: 'What would happen to plants and animals if **biogeochemical cycles (`Water, Carbon, Nitrogen, Oxygen`)** suddenly stopped?', hi: 'यदि पृथ्वी के **जैव-भूरासायनिक चक्र अचानक रुक जाएँ**, तो पादपों और जंतुओं पर क्या प्रभाव पड़ेगा? उदाहरण सहित समझाइए।' },
      a: { en: 'Nutrients are finite! Without **decomposers & cycles**: `(a)` dead plants/wastes would pile up un-decayed; `(b)` soil **nitrates/ammonia** would vanish -> plants couldn’t make **proteins or DNA**; `(c)` atmospheric `CO₂` & `O₂` would deplete rapidly, halting photosynthesis and respiration everywhere!', hi: 'पृथ्वी पर तत्व सीमित हैं! चक्र रुकने पर: `(1)` मृत अपशिष्टों का अपघटन रुक जाएगा; `(2)` **नाइट्रोजन चक्र** बंद होने से मृदा में नाइट्रेट समाप्त हो पौधे प्रोटीन व DNA नहीं बना पाएँगे; `(3)` **ऑक्सीजन व कार्बन डाइऑक्साइड** समाप्त हो जीवन नष्ट हो जाएगा!' },
    },
    {
      num: 'Think 6 (`Greenhouse Cut Action`)',
      q: { en: 'How do daily human activities elevate **greenhouse gases**, and list 3 actionable individual/community steps aligned with **Mission LiFE**?', hi: 'मानवीय गतिविधियाँ हरितगृह गैसों को कैसे बढ़ाती हैं व अपने स्तर पर आप इन्हें घटाने के 3 व्यावहारिक उपाय क्या करेंगे?' },
      a: { en: 'Burning coal/petrol (`CO₂↑`), clearing carbon-absorbing forests, rice/cattle/landfill emissions (`CH₄↑`), and fertiliser excesses raise greenhouse heat. **Action (`Mission LiFE`)**: `(1)` Adopt **solar rooftop / public EV transport**; `(2)` Plant & guard native trees; `(3)` Practice **Reduce-Reuse-Recycle & water/electricity conservation**!', hi: 'कोयला-पेट्रोल दहन, वनोन्मूलन व कचरे से `CO₂/CH₄` बढ़ती हैं। **मिशन LiFE उपाय**: `(1)` सौर ऊर्जा व साइकिल/सार्वजनिक वाहन उपयोग; `(2)` सघन वृक्षारोपण; `(3)` बिजली-जल बचत व अपशिष्ट में **`3R (Reduce, Reuse, Recycle)`**!' },
    },
  ],
  exercises: [
    {
      num: '1 (`ihsc1an Key Verified: (ii)`)',
      q: { en: 'NCERT Ex 1 (`ihsc1an Verified: (ii)`): Which option best describes the core role of **biogeochemical cycles** in ecosystems?', hi: 'अभ्यास 1 (`ihsc1an सत्यापित उत्तर: (ii)`): पारितंत्र में **जैव-भूरासायनिक चक्रों** की भूमिका का सर्वोत्तम वर्णन करने वाला विकल्प चुनिए।' },
      a: { en: '**(ii) ==Recycling essential nutrients (`C, N, O, Water`) between biotic and abiotic components==** (`life cannot create new chemical elements — cycles reuse finite Earth matter continuously!`).', hi: '**(ii) ==जैविक और अजैविक घटकों के मध्य आवश्यक पोषक तत्वों का निरंतर पुनर्चक्रण करना==** (`क्योंकि पृथ्वी नए तत्व नहीं बनाती, इन्हीं तत्वों का चक्रण जीवन बचाता है`)!' },
    },
    {
      num: '2 (`ihsc1an Key Verified: (iii)`)',
      q: { en: 'NCERT Ex 2 (`ihsc1an Verified: (iii)`): Which option accurately explains the primary mechanism **warming Earth’s atmosphere** (`Greenhouse Effect`)?', hi: 'अभ्यास 2 (`ihsc1an सत्यापित उत्तर: (iii)`): पृथ्वी के गर्म होने (`हरितगृह प्रभाव`) के मुख्य कारण वाला सही विकल्प चुनिए।' },
      a: { en: '**(iii) ==Earth’s surface absorbs solar radiation (`visible/UV`), re-radiates Infrared heat, and greenhouse gases (`CO₂, CH₄, H₂O`) trap that outgoing heat==**!', hi: '**(iii) ==पृथ्वी की सतह सौर विकिरण सोखती है, जो अवरक्त ऊष्मा के रूप में पुनः विकिरित होता है तथा हरितगृह गैसों द्वारा रोक लिया जाता है==**!' },
    },
    {
      num: '3',
      q: { en: 'Explain with two Indian/global examples how **climate change disrupts the Water Cycle**.', hi: 'उदाहरणों सहित स्पष्ट कीजिए कि **जलवायु परिवर्तन, जल चक्र (`Water Cycle`)** को किस प्रकार प्रभावित करता है?' },
      a: { en: '`(1)` Warmer air holds extra moisture -> **unequal erratic monsoons (`heavy floods in one region, droughts in another`)**; `(2)` Rapid flash rain accelerates soil erosion & **cuts groundwater infiltration**, while rapid **Himalayan glacier melt** threatens long-term sea-level rise at **Mumbai & Chennai**!', hi: '`(1)` गर्म वायु अधिक नमी धारण कर **असमान मानसून (`कहीं बाढ़, कहीं सूखा`)** लाती है; `(2)` तेज वर्षा से अपवाह बढ़ **भूजल पुनर्भरण घटता** व **हिमानी पिघलने** से तटीय **मुंबई-चेन्नई** में जल स्तर वृद्धि का संकट बनता है!' },
    },
    {
      num: '4',
      q: { en: 'Describe how **Albedo (`Snow 0.85` vs `Dark Soil/Ocean 0.08`)** regulates Earth’s surface temperature and regional climate.', hi: 'वर्णन कीजिए कि **एल्बिडो (`Albedo`)** पृथ्वी की सतह के ताप और इसकी जलवायु को कैसे प्रभावित करता है?' },
      a: { en: 'High-albedo surfaces (**Fresh Snow `0.80–0.90`, Ice `0.50–0.70`**) reflect most solar rays -> keeping **poles chilled**. Low-albedo dark surfaces (**Black soil, Ocean water, Urban Asphalt**) absorb `80–94%` -> warming fast & driving **Urban Heat Islands** and ice-melt feedbacks!', hi: 'उच्च एल्बिडो (`हिम 0.80–0.90`) अधिकांश धूप लौटाकर **ध्रुवों को ठंडा** रखता है, जबकि निम्न एल्बिडो (`काली मृदा, डामर, समुद्र`) `~90%` ऊर्जा सोख **शहरी ऊष्मा द्वीप** व तेज तापन उत्पन्न करता है!' },
    },
    {
      num: '5 (`Grass vs Barren Slope`)',
      q: { en: 'How do **Mountain & Valley Breezes** form? Suppose one mountain is covered in thick **grass** while another has **barren rocky slopes** — will their breezes differ in temperature?', hi: 'पर्वतीय व घाटी समीर कैसे बनती हैं? यदि एक पर्वत **घास से ढका** हो व दूसरा **बंजर चट्टानों** का, तो क्या दोनों की समीरों का ताप भिन्न होगा?' },
      a: { en: 'Daytime slopes heat air (**Valley Breeze up**); nighttime slopes cool air (**Mountain Breeze down**). **Yes — temperatures WILL differ!** Barren rock (`low specific heat, zero transpiration`) heats hotter by day & cools sharper at night -> **warmer daytime upslope & colder night downslope drafts** than the buffered grass mountain!', hi: '**हाँ, दोनों का ताप भिन्न होगा!** घास वाला पर्वत छाया व **वाष्पोत्सर्जन** से दिन में कम गर्म व रात में कम ठंडा होता है; जबकि **बंजर चट्टानी पर्वत** दिन में अधिक तपता व रात में अधिक ठंडा होकर **अधिक चरम ताप वाली समीर** उत्पन्न करेगा!' },
    },
    {
      num: '6',
      q: { en: 'Which atmospheric layer causes **winds, storms & rain**, and what is their primary driving cause?', hi: 'पवन, तूफान व वर्षा आदि मौसम परिघटनाएँ वायुमंडल की किस परत में घटती हैं और इनका प्रमुख कारण क्या है?' },
      a: { en: 'Almost all weather unfolds strictly inside the **Troposphere (`0–12 km`, calmed above by the warming O₃ Stratosphere`)**, driven primarily by **Sun’s uneven heating of Earth’s surface & pressure differences**!', hi: 'समस्त मौसमी परिघटनाएँ **क्षोभमंडल (`Troposphere, 0–12 km`)** में घटती हैं (`समतापमंडल की ओजोन ऊर्ध्वाधर मिश्रण रोक ऊपर शांत रखती है`) और इनका मुख्य कारण **सूर्य द्वारा पृथ्वी का असमान ऊष्मीकरण** है!' },
    },
    {
      num: '7',
      q: { en: 'Trace all 5 processes in the **Nitrogen Cycle (`Fixation -> Nitrification -> Assimilation -> Ammonification -> Denitrification`)** and explain why zero cycling threatens life.', hi: 'नाइट्रोजन चक्र की सभी 5 प्रक्रियाएँ समझाइए; यदि चक्रण बंद हो जाए तो जीवन कैसे प्रभावित होगा?' },
      a: { en: '`**Rhizobium / Azotobacter / Lightning**` (`N₂ -> NH₃`) -> **`Nitrosomonas` (`-> NO₂⁻`) + `Nitrobacter` (`-> NO₃⁻`)** -> Plant uptake -> Animal intake & decomposer **`NH₃` ammonification** -> **`Pseudomonas`** (`NO₃⁻ -> N₂`). Without cycling, usable soil nitrates vanish -> zero **proteins or DNA** synthesis!', hi: '**स्थिरीकरण (`राइजोबियम/एजोटोबैक्टर`) → नाइट्रीकरण (`नाइट्रोसोमोनास → नाइट्रोबैक्टर`) → स्वांगीकरण (`प्रोटीन/DNA`) → अमोनीकरण → विनाइट्रीकरण (`स्यूडोमोनास`)**! चक्रण न हो तो जीवन हेतु अनिवार्य **प्रोटीन व न्यूक्लिक अम्ल** नहीं बन पाएँगे!' },
    },
    {
      num: '8',
      q: { en: 'How does **deforestation** impact BOTH **Carbon & Oxygen cycles**, plus name 3 additional environmental consequences?', hi: 'वनोन्मूलन का पृथ्वी के **ऑक्सीजन व कार्बन चक्रों** पर क्या प्रभाव पड़ता है? इसके 3 अन्य परिणाम भी बताइए।' },
      a: { en: 'Fewer trees cut photosynthetic **`CO₂` absorption & `O₂` release** (`while burning/rotting wood releases extra CO₂!`). Other impacts: `(1)` Reduced transpiration -> lower **rainfall**; `(2)` Surface **albedo shift**; `(3)` **Soil erosion, flooding & habitat/biodiversity loss**!', hi: 'वन कटने से प्रकाश संश्लेषण घटता है जिससे **`O₂` उत्सर्जन घट व वायु में `CO₂` बढ़ जाती है**। अन्य प्रभाव: `(1)` वाष्पोत्सर्जन घटने से **वर्षा में कमी**, `(2)` जड़ें हटने से **मृदा अपरदन**, `(3)` **एल्बिडो परिवर्तन व जैव विविधता नाश**!' },
    },
    {
      num: '9 (`Carbon Return Paths`)',
      q: { en: 'Starting from **plants absorbing atmospheric `CO₂` by photosynthesis**, trace every natural & human path returning carbon back into the atmosphere.', hi: 'पादपों द्वारा वायुमंडलीय **`CO₂` के अवशोषण से आरंभ कर** वे सभी मार्ग समझाएँ जिनसे कार्बन पुनः वायुमंडल में लौटता है।' },
      a: { en: '`Atm CO₂` -> Plants (`glucose`) -> **(Path A)** Plant/Animal **respiration** releases `CO₂`; **(Path B)** Death -> soil/water **decomposers** release `CO₂`; **(Path C)** Deep burial over millions of years -> **Coal/Oil/Gas** (`burned by factories/vehicles -> rapid CO₂ burst!`) + Oceanic shell dissolution/exchange!', hi: '`CO₂` → पादप (`प्रकाश संश्लेषण`) → **(मार्ग 1) पादप व जंतु श्वसन** (`CO₂` मुक्त), **(मार्ग 2) मृत्यु बाद अपघटन**, **(मार्ग 3) लाखों वर्षों में कोयला-तेल बनने के बाद मानवीय दहन** द्वारा तुरंत `CO₂` वायु में लौटती है!' },
    },
    {
      num: '10',
      q: { en: 'Plants MUST need `CO₂` for photosynthesis — then why is **excess `CO₂` in the atmosphere (`315 -> 420 ppm`)** treated as harmful?', hi: 'जबकि पादपों को प्रकाश संश्लेषण हेतु **`CO₂` आवश्यक** है, फिर भी वायुमंडल में **`CO₂` की अधिकता** अवांछनीय क्यों मानी जाती है?' },
      a: { en: 'Natural balanced `CO₂` keeps Earth comfortably habitable; **EXCESS `CO₂`** traps excessive outgoing IR radiation -> **global warming, melting glaciers (`coastal threats`), ocean acidification (`coral bleaching`), erratic extreme monsoons**, and **natural forest/ocean sinks become saturated**!', hi: 'प्राकृतिक संतुलित `CO₂` जीवनदायी है, पर **अधिकता (`315→420 ppm`)** अनियंत्रित हरितगृह प्रभाव द्वारा **वैश्विक तापन, हिमानी पिघलन, महासागरीय अम्लीकरण व चरम मौसमी आपदाएँ** उत्पन्न करती है!' },
    },
    {
      num: '11',
      q: { en: 'How does **Earth’s surface lose absorbed solar heat**, and why is the speed of heat loss critical at night & across seasons?', hi: 'पृथ्वी की सतह से ऊष्मा का क्षय (`heat loss`) किस प्रकार होता है और इसकी क्या सार्थकता है?' },
      a: { en: 'Ground objects radiate absorbed daytime solar energy back outward as **longwave Infrared (`IR`) radiation**! Concrete/asphalt release stored heat slowly creating hot urban nights (**Urban Heat Island**), whereas rapid desert/slope IR cooling cools air downward (**Mountain Breeze**) keeping planetary energy in balance!', hi: 'दिन में अवशोषित सौर ऊष्मा को सतह रात्रि में **अवरक्त (`IR`) विकिरण** द्वारा पुनः अंतरिक्ष की ओर उत्सर्जित करती है! यही ऊर्जा संतुलन बनाए रखती है (`कंक्रीट देर तक गर्म रहती है जबकि ढलानों के तेज क्षय से पर्वतीय समीर चलती है`)।' },
    },
    {
      num: '12 (`Flat Disc Hypothetical`)',
      q: { en: 'If Earth were a **flat circular disc facing the Sun directly** instead of a tilted sphere (`Sec 13.1.2`), how would solar radiation & temperature patterns change?', hi: 'यदि पृथ्वी गोलाकार न होकर एक **तश्तरी (`चपटी डिस्क`)** समान होती, तो सौर विकिरण और ताप पैटर्न किस प्रकार भिन्न होते?' },
      a: { en: 'Sun rays would strike ALL parts of the flat disc at nearly the **same vertical angle** (`zero equator-to-pole insolation gradient`) -> eliminating equatorial-polar temperature differences, **collapsing planetary wind belts (`0°–90°`), halting ocean gyre heat redistribution**, and wiping out varied climate/habitat zones!', hi: 'सूर्य की किरणें पूरी चपटी सतह पर **लगभग एक समान कोण** से पड़तीं -> **भूमध्य से ध्रुव ताप अंतर समाप्त** हो जाता, **ग्रहीय पवन पट्टियाँ व महासागरीय धाराएँ रुक जातीं**, और विभिन्न जलवायु प्रदेश/ऋतु विविधता नष्ट हो जाती!' },
    },
    {
      num: '13',
      q: { en: 'Imagine atmospheric temperature rises sharply globally: explain cascading impacts on **Cryosphere, Hydrosphere & Biosphere**.', hi: 'कल्पना कीजिए कि पृथ्वी का वायुमंडलीय ताप बढ़ जाता है — यह **हिममंडल, जलमंडल व जैवमंडल** को कैसे प्रभावित करेगा?' },
      a: { en: '**Cryosphere**: Himalayan glaciers & Arctic ice melt faster (`albedo drops -> faster warming`); **Hydrosphere**: ocean thermal expansion + meltwater raise sea level (`flooding coastal cities`) + irregular intense monsoon floods/droughts + acidifying warmer sea; **Biosphere**: habitat loss for corals, plankton & coastal flora!', hi: '**हिममंडल**: हिमानियाँ/ध्रुवीय बर्फ तेजी से पिघलेगी; **जलमंडल**: समुद्र जल स्तर बढ़ **मुंबई-चेन्नई** डूबने का संकट व असमान मानसून बाढ़/सूखा; **जैवमंडल**: प्रवाल भित्ति, प्लवक व तटीय आवास नष्ट होंगे!' },
    },
    {
      num: '14',
      q: { en: 'Explain TWO opposite protective jobs of Earth’s **atmosphere** making Earth habitable for life (`UV block vs IR trap`).', hi: 'पृथ्वी का वायुमंडल जीवन योग्य तापमान और सुरक्षा बनाए रखने में कौन-सी **दो मुख्य भूमिकाएँ** निभाता है?' },
      a: { en: '`(1)` **Upper Shielding**: Filters lethal Gamma/X-rays, while **Stratospheric Ozone (`O₃`)** absorbs dangerous solar **UV radiation** (`Ch 13.1`); `(2)` **Thermal Blanket (`Natural Greenhouse`)**: `CO₂, CH₄ & water vapour` trap outgoing **IR heat**, stopping Earth from freezing lifeless like an airless rock (`yet Venus warns against runaway excess`)!', hi: '`(1)` **विकिरण कवच**: ऊपरी परत गामा/X-किरणें व **ओजोन परत घातक पराबैंगनी (`UV`) किरणें रोकती है**; `(2)` **ऊष्मा कंबल**: हरितगृह गैसें (`CO₂, CH₄, जलवाष्प`) बाहर जाती **अवरक्त ऊष्मा रोक** पृथ्वी को जीवन-योग्य गर्म रखती हैं!' },
    },
    {
      num: '15',
      q: { en: 'Trace ONE complete **5-Sphere System Chain** connecting **Geosphere -> Cryosphere -> Hydrosphere -> Atmosphere -> Biosphere** in India (`Monsoon & Agriculture`).', hi: 'पृथ्वी के पाँचों मंडलों (`भूमंडल, हिममंडल, जलमंडल, वायुमंडल, जैवमंडल`) के मध्य अंतःसंबंध का एक संपूर्ण भारतीय उदाहरण लिखिए।' },
      a: { en: 'Summer sun heats **Geosphere** landmass (`Thar/Plains Low P`) drawing moist **Atmosphere** SW Monsoon winds over warmer Arabian Sea (**Hydrosphere**) -> cools over **Cryosphere** (`Himalayan peaks` replenishing snow) -> meltwater + monsoon rain dissolve **Geosphere** minerals feeding Ganga/Brahmaputra -> thriving forests, farms, mangroves & **Biosphere** humans!', hi: 'ग्रीष्म सौर ऊष्मा भारतीय **भूमंडल (`निम्न दाब`)** गर्म कर अरब सागर (**जलमंडल**) से **वायुमंडल** की मानसूनी हवाएँ खींचती है -> पहाड़ों (**हिममंडल**) पर हिम/वर्षा से नदियाँ **भूमंडल** के खनिज घोल मैदानी फसल, मैंग्रोव व जीवों (**जैवमंडल**) का पोषण करती हैं!' },
    },
  ],
  flashcards: [
    { front: { en: 'India Solar Constant (`Top`) vs Clean Ground Insolation (`Ex 13.1` Joules)?', hi: 'सौर स्थिरांक (`शीर्ष`) बनाम सतह सूर्ययातप व उदा. `13.1` जूल ऊर्जा?' }, back: { en: '**Solar Constant = `1.4 kWm⁻²` (`1400 J s⁻¹m⁻²`)**; Clean Ground **`~1 kWm⁻²`** (`1 h × 1 m² = 3.6×10⁶ J = 1 kWh`). Pioneer: **Anna Mani (`1982` Atlas)**!', hi: '**सौर स्थिरांक = `1.4 kWm⁻²`**; धरातल **`~1 kWm⁻²`** (`1 घंटा × 1 m² = 3.6×10⁶ J = 1 यूनिट`)। **डॉ. अन्ना मणि (`1982` एटलस)**!' } },
    { front: { en: 'Albedo Ranking (`Table 13.1`): Snow, Ice, Rocks vs Black Soil & Ocean?', hi: 'एल्बिडो क्रम (`तालिका 13.1`): हिम, बर्फ, चट्टान बनाम काली मृदा व समुद्र?' }, back: { en: '**Fresh Snow `0.80–0.90` > Ice `0.50–0.70` > Light soil `0.25–0.45` > Crushed rock `0.25–0.30` >> Black Soil / Ocean (`0.06–0.15`)** (`drives Urban Heat Island`)!', hi: '**ताज़ा हिम `0.80–0.90` > बर्फ `0.50–0.70` > हल्की मृदा > चट्टान `0.25–0.30` >> काली मृदा/समुद्र (`0.06–0.15`)**!' } },
    { front: { en: 'Troposphere vs Stratosphere (`Temp Trend & Ozone Pioneer`)?', hi: 'क्षोभमंडल बनाम समतापमंडल (`तापमान दिशा व भारतीय वैज्ञानिक`)?' }, back: { en: '**Troposphere (`0–12 km`)**: temp **DROPS `-6.5°C/km`**, ALL weather; **Stratosphere (`12–50 km`)**: **O₃ absorbs UV -> temp RISES**, calm flight! **K.R. Ramanathan (`1934`)**.', hi: '**क्षोभमंडल (`0–12 km`)**: ताप घटता (`-6.5°C/km`), समस्त मौसम; **समताप (`12–50 km`)**: ओजोन UV सोखे -> **ताप बढ़े**! **रामनाथन (`1934`)**!' } },
    { front: { en: 'Venus vs Mercury Temperature Paradox & UV Wavelength Range?', hi: 'बुध की तुलना में शुक्र अधिक गर्म क्यों व पराबैंगनी (`UV`) तरंगदैर्ध्य?' }, back: { en: 'Venus’s dense `CO₂` traps IR (**runaway greenhouse**); **UV range = `100–400 nm`** (`filtered by Stratospheric O₃; 99% solar = UV+Visible+IR`)!', hi: 'शुक्र का घना `CO₂` वायुमंडल प्रबल **हरितगृह प्रभाव** बनाता है! **UV परास = `100–400 nm`** (`समताप ओजोन से अवरुद्ध`)!' } },
    { front: { en: 'Local Breezes (`Day vs Night`), Belts (`0°–90°`) & Gulf Stream Gyres?', hi: 'घाटी बनाम पर्वत समीर (`दिन/रात`), दाब पट्टियाँ व गल्फ स्ट्रीम भंवर?' }, back: { en: '**Day**: Valley Breeze **Upslope ↑**; **Night**: Mountain Breeze **Downslope ↓**! Belts: **`0°L, 30°H, 60°L, 90°H` (`R in N / L in S`)**; **Gulf Stream** keeps NW Europe ice-free; **IITM Pune**!', hi: '**दिन**: घाटी समीर ऊपर; **रात**: पर्वत समीर नीचे! पट्टियाँ: **`0°L–30°H–60°L–90°H`** (`उ. दाएँ/द. बाएँ`); **गल्फ स्ट्रीम** + **IITM पुणे**!' } },
    { front: { en: 'Global Carbon Fractions (`Ocean vs Atm vs Dry Biomass`) & Keeling Curve?', hi: 'कार्बन विभाजन (`महासागर बनाम वायुमंडल बनाम जीव`) व कीलिंग वक्र?' }, back: { en: '**`71%` Oceans | `~1%` Atmosphere | `49%` living dry weight**! **Keeling (`1960–2025`): `315 -> 420 ppm` (`+35%`)** with N. summer plant-uptake sawtooth dips!', hi: '**`71%` महासागर | `~1%` वायुमंडल | `49%` सजीव शुष्क भार**! **कीलिंग (`1960–2025`): `315 → 420 ppm` (`+35%`)**!' } },
    { front: { en: '4 Bacterial Genera Driving Nitrogen Cycle (`NH₃ -> NO₂⁻ -> NO₃⁻ -> N₂`)?', hi: 'नाइट्रोजन चक्र के `4` प्रमुख जीवाणु (`क्रम: स्थिरीकरण से विनाइट्रीकरण`)?' }, back: { en: '**Fix (`N₂→NH₃`)**: *Rhizobium / Azotobacter*; **Nitrification**: *Nitrosomonas* (`→NO₂⁻`) + *Nitrobacter* (`→NO₃⁻`); **Denitrification (`→N₂`)**: ***Pseudomonas***!', hi: '**स्थिरीकरण**: राइजोबियम/एजोटोबैक्टर; **नाइट्रीकरण**: **नाइट्रोसोमोनास** (`NO₂⁻`) + **नाइट्रोबैक्टर** (`NO₃⁻`); **विनाइट्रीकरण**: **स्यूडोमोनास** (`→N₂`)!' } },
    { front: { en: 'Haber-Bosch Process (`1900s`): Energy Share & Human Protein Fraction?', hi: 'हाबर-बॉश प्रक्रिया: वैश्विक ऊर्जा खपत व मानव देह नाइट्रोजन अंश?' }, back: { en: 'Industrial `N₂ -> NH₃` fertilisers ("**Bread from Air**") consume **`1–2%` global energy** and supply **`>50%` N atoms in human bodies today**!', hi: '"वायु से अन्न" अमोनिया उर्वरक प्रक्रिया **विश्व ऊर्जा का `1–2%`** खर्च कर **मानव शरीर के `50%+` नाइट्रोजन परमाणु** देती है!' } },
    { front: { en: 'Eutrophication vs Ocean Acidification Causes & Victims?', hi: 'सुपोषण (`चित्र 13.17`) बनाम महासागरीय अम्लीकरण: कारण व हानि?' }, back: { en: '**Eutrophication**: excess agricultural **nitrate runoff -> algal bloom -> `O₂` loss -> fish kill**; **Acidification**: excess dissolved **`CO₂` -> low pH harming corals/plankton**!', hi: '**सुपोषण**: उर्वरक नाइट्रेट → शैवाल प्रस्फुटन → `O₂` कमी → मछली मृत्यु; **अम्लीकरण**: अतिरिक्त `CO₂` → **प्रवाल भित्ति व प्लवक संकट**!' } },
    { front: { en: 'Montreal Protocol vs Kyoto/Paris vs India’s Mission LiFE (`2021`)?', hi: 'मॉन्ट्रियल बनाम क्योटो/पेरिस समझौता व भारत का मिशन LiFE (`2021`)?' }, back: { en: '**Montreal** cut **CFCs** (`Stratospheric O₃ healing — high success!`); **Kyoto/Paris** cut **`CO₂`**; **Mission LiFE (`2021`)** = India-led sustainable living, renewables & 3Rs!', hi: '**मॉन्ट्रियल** (`CFCs` रोक ओजोन रक्षक — सफल!), **क्योटो/पेरिस** (`CO₂` कटौती), **मिशन LiFE (`2021`)** = भारत की पर्यावरण-अनुकूल जीवनशैली पहल!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c9c13-1',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 1 Bilingual)',
      section: 'General Science',
      subject: 'Atmosphere & Chemistry',
      topic: 'NCERT Ch 13 (Sec 13.1.3): Atmospheric Composition by Volume',
      question: {
        en: 'Which component makes up the **largest proportion of Earth’s atmosphere (`~78%`) by volume**?',
        hi: 'आयतन के अनुसार **पृथ्वी के वायुमंडल का सबसे बड़ा हिस्सा (`~78%`)** किस घटक से बना है?',
      },
      options: {
        en: ['Oxygen (`21%`)', 'Argon', 'Carbon dioxide', 'Nitrogen (`78%`)'],
        hi: ['ऑक्सीजन (`21%`)', 'आर्गन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन (`78%`)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Earth’s gravity holds an atmosphere comprising **`78%` Nitrogen (`N₂`), `21%` Oxygen (`O₂`)**, Argon, `CO₂` & water vapour (`Ch 13.1.3`).',
        hi: 'वायुमंडल में सर्वाधिक मात्रा **`78%` नाइट्रोजन** तथा **`21%` ऑक्सीजन** व अल्प मात्रा में आर्गन/`CO₂` होते हैं (`भाग 13.1.3`)।',
      },
    },
    {
      id: 'pyq-c9c13-2',
      examTag: 'RRB ALP 2025 (Shift 4 Bilingual)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 13 (Sec 13.1 & Fig 13.2): Solar EM Band Driving Photosynthesis',
      question: {
        en: 'Which region of the **solar electromagnetic (`EM`) spectrum** reaching Earth’s surface is primarily responsible for **photosynthesis** (`primary food energy on Earth`)?',
        hi: 'पृथ्वी पर **प्रकाश-संश्लेषण (`Photosynthesis`)** के लिए विद्युत-चुंबकीय स्पेक्ट्रम का निम्नलिखित में से कौन-सा क्षेत्र मुख्य रूप से उत्तरदायी है?',
      },
      options: {
        en: ['Visible light', 'Microwaves', 'Ultraviolet radiation (`100–400 nm`)', 'Radio waves'],
        hi: ['दृश्य प्रकाश (`Visible light`)', 'सूक्ष्म तरंगें', 'पराबैंगनी विकिरण', 'रेडियो तरंगें'],
      },
      correctIndex: 0,
      solution: {
        en: 'Gamma/X-rays & most UV get filtered above; **Visible light** penetrates cleanly to green leaves and phytoplankton driving photosynthesis (`p.254`)!',
        hi: 'सूर्य का **दृश्य प्रकाश** धरातल तक पहुँचकर पौधों व पादपप्लवकों में प्रकाश संश्लेषण को ऊर्जा देता है (`पृ. 254`)!',
      },
    },
    {
      id: 'pyq-c9c13-3',
      examTag: 'RRB Group D 2025 (Shift 43)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.1): Meaning & Value of Solar Constant (1.4 kWm⁻²)',
      question: {
        en: 'A technician designs a solar power plant in central India (`Thar region`). Why is knowing the **solar constant (`~1.4 kWm⁻²`)** useful for capacity planning?',
        hi: 'एक तकनीशियन मध्य भारत में सौर ऊर्जा संयंत्र डिज़ाइन कर रहा है। योजना हेतु **सौर स्थिरांक (`~1.4 kWm⁻²`)** का मान समझना क्यों आवश्यक है?',
      },
      options: {
        en: [
          'It indicates total perpendicular solar energy available before atmospheric loss',
          'It measures only monsoon cloud duration',
          'It measures night heat loss from urban concrete',
          'It directly gives maximum subterranean rock temperature',
        ],
        hi: [
          'यह वायुमंडलीय हानि से पहले उपलब्ध कुल सौर ऊर्जा को इंगित करता है',
          'यह केवल सूर्य के प्रकाश की अवधि मापता है',
          'यह केवल शहरी कंक्रीट ऊष्मा दर्शाता है',
          'यह अधिकतम पृथ्वी केंद्र का तापमान देता है',
        ],
      },
      correctIndex: 0,
      solution: {
        en: '**Solar constant (`1.4 kWm⁻²` / `1400 J s⁻¹m⁻²`)** measures baseline incoming top-of-atmosphere radiation **prior to atmospheric scattering/absorption (`drops to ~1 kWm⁻²` clear ground)**!',
        hi: 'सौर स्थिरांक (`1.4 kWm⁻²`) वायुमंडल में अवशोषण व प्रकीर्णन से **पूर्व उपलब्ध अधिकतम सौर ऊर्जा** बताता है!',
      },
    },
    {
      id: 'pyq-c9c13-4',
      examTag: 'RRB Group D 2025 (Shift 36)',
      section: 'General Science',
      subject: 'Indian Science',
      topic: 'NCERT Ch 13 (p.255 Box): Dr. Anna Mani Solar Radiation Atlas',
      question: {
        en: 'A policymaker evaluates nationwide solar deployment across India (`Thar Desert` potential box). Whose historical work laid the **foundational measurements for India’s solar insolation mapping**?',
        hi: 'भारत में बड़े पैमाने पर सौर ऊर्जा परिनियोजन मूल्यांकन में किस भारतीय वैज्ञानिक के ऐतिहासिक कार्य ने **सौर सूर्ययातप मानचित्रण हेतु मूलभूत डेटा** प्रदान किया?',
      },
      options: {
        en: ['Government cricket weather reports', 'Municipal highway surveys', 'NASA deep-space telemetry', 'Anna Mani’s pioneering solar radiation measurements (`1950s–1982`)'],
        hi: ['सरकारी स्थानीय पूर्वानुमान', 'राजमार्ग यातायात सर्वेक्षण', 'नासा गहन अंतरिक्ष आँकड़े', 'डॉ. अन्ना मणि का सौर विकिरण मापन (`सोलर रेडिएशन ओवर इंडिया 1982`)'],
      },
      correctIndex: 3,
      solution: {
        en: '**Anna Mani** (`assisted by S. Rangarajan, 1982 Solar Radiation Over India atlas`) pioneered ground solar insolation mapping across India (`NCERT p.255`).',
        hi: '**डॉ. अन्ना मणि** (`एस. रंगराजन संग 1982 एटलस`) ने `1950` के दशक से संपूर्ण भारत के सौर विकिरण मापन का नेतृत्व किया!',
      },
    },
    {
      id: 'pyq-c9c13-5',
      examTag: 'RRB Group D 2025 (Shift 32)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.1): Wavelength Heating Earth & Greenhouse Retention',
      question: {
        en: 'Which electromagnetic radiation range is primarily responsible for **heating Earth’s surface & getting trapped in the Greenhouse Effect**?',
        hi: 'पृथ्वी की सतह को गर्म करने और **हरितगृह प्रभाव (`Greenhouse effect`)** में योगदान देने के लिए मुख्यतः कौन-सी विकिरण श्रेणी उत्तरदायी है?',
      },
      options: {
        en: ['Infrared (`IR`) radiation', 'Ultraviolet radiation (`absorbed by O₃`)', 'Radio waves', 'Gamma rays'],
        hi: ['अवरक्त विकिरण (`Infrared radiation`)', 'पराबैंगनी विकिरण', 'रेडियो तरंग', 'गामा किरणें'],
      },
      correctIndex: 0,
      solution: {
        en: 'Earth re-radiates absorbed warmth in the **Infrared (`IR`)** band, where `CO₂, CH₄ & H₂O` vapour trap it to keep Earth habitable (`p.254, 258`)!',
        hi: 'पृथ्वी की सतह द्वारा पुनः विकिरित **अवरक्त (`IR`) किरणों** को ही `CO₂, CH₄ व जलवाष्प` रोककर तापमान बनाए रखते हैं।',
      },
    },
    {
      id: 'pyq-c9c13-6',
      examTag: 'RRB Group D 2025 (Shift 10)',
      section: 'General Science',
      subject: 'Atmosphere',
      topic: 'NCERT Ch 13 (p.258): Venus Hotter Than Mercury Paradox',
      question: {
        en: '**Venus is hotter than Mercury**, even though Mercury orbits much closer to the Sun. Based on atmospheric science (`NCERT p.258`), why?',
        hi: 'बुध सूर्य के अधिक निकट है फिर भी **शुक्र ग्रह (`Venus`), बुध से अधिक गर्म** क्यों है?',
      },
      options: {
        en: [
          'Mercury has higher stratospheric ozone',
          'Venus’s thick CO₂ atmosphere creates a runaway greenhouse effect',
          'Mercury cools via dense polar oceans',
          'Venus emits nuclear sunlight internally',
        ],
        hi: [
          'बुध पर अधिक ओजोन परत है',
          'शुक्र के घने वायुमंडल में अनियंत्रित हरितगृह प्रभाव (`runaway greenhouse`) होता है',
          'बुध पर विशाल ध्रुवीय महासागर हैं',
          'शुक्र स्वयं नाभिकीय प्रकाश उत्सर्जित करता है',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Thick `CO₂`-rich **Venusian atmosphere** traps outgoing thermal IR relentlessly, whereas airless **Mercury** radiates heat directly back into space!',
        hi: 'शुक्र पर सघन **`CO₂` वायुमंडल** बाहर जाने वाली ऊष्मा को पूर्णतः कैद कर लेता है (`अभ्यास/NCERT पृष्ठ 258`)!',
      },
    },
    {
      id: 'pyq-c9c13-7',
      examTag: 'RRB Group D 2025 (Shift 38)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.1.2): Axial Tilt & Spherical Shape Uneven Insolation',
      question: {
        en: 'What causes **uneven sunlight distribution (`Equator vs Poles`)**, seasons, and months-long polar light/dark cycles?',
        hi: 'ध्रुवों पर लंबे समय तक अंधेरा/प्रकाश तथा भूमध्य बनाम ध्रुवों में **असमान सौर ताप वितरण (`13.1.2`)** मुख्यतः किस कारण होता है?',
      },
      options: {
        en: [
          'Ocean salinity currents change Sun luminosity',
          'Flat surface geometry across all latitudes',
          'Atmosphere blocks all visible light at equator',
          'Earth’s axial tilt and spherical shape affect sunlight angles & day length',
        ],
        hi: [
          'महासागरीय धाराएँ सूर्य का प्रकाश बदलती हैं',
          'पृथ्वी की तश्तरी जैसी चपटी आकृति',
          'भूमध्य रेखा पर वायुमंडल सूर्य रोकता है',
          'पृथ्वी का अक्षीय झुकाव (`tilt`) और गोलाकार आकृति सूर्य किरणों का वितरण बदलती है',
        ],
      },
      correctIndex: 3,
      solution: {
        en: '**Spherical curvature** concentrates sunlight at low latitudes (`spreads thinly at poles`), while **axial tilt (`~23.5°`)** drives seasons and extreme polar day-night swings (`13.1.2`).',
        hi: '**गोलाकार आकृति** से ध्रुवों पर किरणें तिरछी फैल जाती हैं, व **घूर्णन अक्ष का झुकाव** ऋतुओं एवं ध्रुवीय दिन-रात अवधि बदलता है!',
      },
    },
    {
      id: 'pyq-c9c13-8',
      examTag: 'RRB Group D 2025 (Shift 16)',
      section: 'General Science',
      subject: 'Atmosphere',
      topic: 'NCERT Ch 13 (Table 13.2): Troposphere Cooling vs Stratosphere Ozone Warming Reversal',
      question: {
        en: 'A weather balloon rises from sea level past `12–15 km` altitude (`troposphere -> stratosphere`). Where does temperature **reverse from decreasing to increasing**, and why?',
        hi: 'एक मौसम गुब्बारा समुद्र तल से `15 km` ऊँचाई तक उठता है। तापमान का ह्रासमान (`घटते`) से वर्धमान (`बढ़ते`) क्रम में **उत्क्रमण कहाँ व क्यों होता है**?',
      },
      options: {
        en: [
          'At top of exosphere due to ocean tides',
          'At sea level due to dense nitrogen',
          'Mid-troposphere due to rain clouds',
          'At start of the stratosphere (~12 km upward) because Ozone absorbs UV light',
        ],
        hi: [
          'बहिर्मंडल के शीर्ष पर समुद्री ज्वार के कारण',
          'समुद्र तल पर नाइट्रोजन घनत्व के कारण',
          'मध्य क्षोभमंडल में वर्षा बादलों के कारण',
          'समतापमंडल (`Stratosphere`) की शुरुआत में ओजोन द्वारा UV किरणों के अवशोषण के कारण',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Troposphere (`0–12 km`) cools `~6.5°C/km`, but in **Stratosphere (`12–50 km`)**, the **Ozone (`O₃`) layer absorbs solar UV**, warming upward and stabilizing weather below!',
        hi: 'क्षोभमंडल में ताप घटता है, परंतु **`12 km` पर समतापमंडल** शुरू होते ही **ओजोन परत UV सोखकर तापमान बढ़ाती है**!',
      },
    },
    {
      id: 'pyq-c9c13-9',
      examTag: 'RRB Group D 2025 (Shift 36 & 38)',
      section: 'General Science',
      subject: 'Atmosphere',
      topic: 'NCERT Ch 13 (p.259): Harmful UV Impact & CFC Ozone Depletion',
      question: {
        en: 'Why is depletion of the **Stratospheric Ozone Layer** by **chlorofluorocarbons (`CFCs`)** hazardous to living organisms?',
        hi: '**क्लोरोफ्लोरोकार्बन (`CFCs`)** द्वारा समतापमंडल की ओजोन परत का अवक्षय सजीवों के लिए खतरनाक क्यों है?',
      },
      options: {
        en: [
          'It immediately doubles Earth atmospheric oxygen',
          'It blocks all visible light needed by forests',
          'It allows harmful solar UV radiation (`100–400 nm`) to reach Earth (`causing skin cancer & eye damage`)',
          'It permanently freezes ocean currents',
        ],
        hi: [
          'इससे ऑक्सीजन तुरंत दुगनी हो जाती है',
          'यह पौधों का दृश्य प्रकाश बंद कर देता है',
          'यह सूर्य की हानिकारक पराबैंगनी (`UV`) किरणों को सतह तक आने देता है (`त्वचा कैंसर व आँख क्षति`)',
          'यह महासागरीय धाराएँ जमा देता है',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Thinned **ozone** lets energetic **`100–400 nm` UV rays** penetrate to ground — damaging crops, plankton, eyes & triggering **skin cancer** (`Shifts 36, 38`).',
        hi: 'ओजोन क्षरण से **`100–400 nm` की उच्च-ऊर्जा UV किरणें** पृथ्वी पर पहुँचकर त्वचा कैंसर, आँखों व पारिस्थितिकी को क्षति पहुँचाती हैं!',
      },
    },
    {
      id: 'pyq-c9c13-10',
      examTag: 'RRB NTPC UG 2025 (Shift 16) + Tech 3',
      section: 'General Science',
      subject: 'Global Agreements',
      topic: 'NCERT Ch 13 (Sec 13.1 & 13.4): Montreal Protocol Phase-Out of CFCs',
      question: {
        en: 'Which landmark **international treaty** successfully controlled emissions of ozone-depleting **CFCs (`refrigerants & aerosols`)** so the ozone layer could recover?',
        hi: 'ओजोन परत के क्षयकारी **CFC प्रशीतक पदार्थों** के उत्सर्जन को नियंत्रित कर ओजोन सुरक्षा दिलाने वाला अंतर्राष्ट्रीय समझौता कौन-सा है?',
      },
      options: {
        en: ['Basel Convention', 'Earth Summit `1992`', 'Montreal Protocol', 'Kyoto Protocol'],
        hi: ['बेसल कन्वेंशन', 'पृथ्वी सम्मेलन', 'मॉन्ट्रियल प्रोटोकॉल (`Montreal Protocol`)', 'क्योटो प्रोटोकॉल'],
      },
      correctIndex: 2,
      solution: {
        en: 'The **Montreal Protocol** phased down `1980s` CFC refrigerants globally — cited in NCERT Ch 13 as humanity’s strongest environmental success (`contrasted with Kyoto/Paris CO₂ efforts`)!',
        hi: '**मॉन्ट्रियल प्रोटोकॉल** ने रेफ्रिजरेटर/एरोसॉल की CFC गैसों पर नियंत्रण लगा ओजोन परत का क्रमिक पुनरुद्धार संभव बनाया!',
      },
    },
    {
      id: 'pyq-c9c13-11',
      examTag: 'RRB Group D 2025 (Shift 20)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Nighttime Mountain Breeze Cooling Valley Base',
      question: {
        en: 'A doctor in a Himalayan hill village (`like Shimla/Dehradun`) notices ground bedrooms at the **mountain base feel distinctly cooler at night**. Which wind process causes this?',
        hi: 'एक हिमालयी पहाड़ी गाँव में रात के समय पर्वत की तलहटी के कमरों में अतिरिक्त ठंडक महसूस होती है। कौन-सी प्रक्रिया इसका कारण है?',
      },
      options: {
        en: [
          'Dense chilled air descending down slopes as a Mountain Breeze',
          'Warm daytime valley breeze rising up slopes',
          'Ocean tidal sea breeze rushing inland',
          'Stratospheric ozone descending to ground level',
        ],
        hi: [
          'ठंडी सघन वायु का ढलान से नीचे घाटी की ओर अवरोहण (`पर्वत समीर / Mountain breeze`)',
          'दिन की गर्म हवा का ऊपर चढ़ना (`घाटी समीर`)',
          'समुद्री ज्वारीय समीर',
          'समताप ओजोन का नीचे उतरना',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'After sunset mountain slopes lose heat quickly; **dense cooled air drains downward as a Mountain Breeze** settling along valley floors (`NCERT Fig 13.8b`)!',
        hi: 'सूर्यास्त के बाद ढलान की ठंडी भारी हवा नीचे घाटी तल में उतरती है (`चित्र 13.8 ख — पर्वतीय समीर`)!',
      },
    },
    {
      id: 'pyq-c9c13-12',
      examTag: 'RRB Group D 2025 (Shift 47)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Daytime Valley Breeze Driven by Slope Heating',
      question: {
        en: 'Students on a field trip note air blowing consistently **upward from the valley floor toward mountain slopes every noon**. Why?',
        hi: 'क्षेत्रीय अध्ययन में छात्र प्रतिदिन दोपहर में हवा को **घाटी सतह से पहाड़ी ढलानों की ओर ऊपर बहते** देखते हैं। इसका क्या कारण है?',
      },
      options: {
        en: [
          'Uneven faster heating of sunlit mountain slopes creates Low Pressure (`Valley Breeze`)',
          'Uniform overnight cooling across snow valleys',
          'Magnetic pull from polar glaciers',
          'Ocean salinity sinking',
        ],
        hi: [
          'धूप में पहाड़ की ढलानों के अधिक तीव्र गर्म होने से निम्न दाब बनना (`घाटी समीर`)',
          'बर्फ़ में समान शीतलन',
          'ध्रुवीय चुंबकत्व',
          'महासागरीय लवणता',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Sun-facing mountain slopes heat faster than valley floor by midday -> rising slope air creates local low pressure -> **Valley Breeze blows upslope (`Fig 13.8a`)**!',
        hi: 'दिन में ढलानें घाटी से जल्दी गर्म होकर ऊपर वायु उठाती हैं, जिसका स्थान लेने **घाटी समीर (`Valley Breeze`)** ऊपर बहती है!',
      },
    },
    {
      id: 'pyq-c9c13-13',
      examTag: 'RRB Group D 2025 (Shift 46)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.2.2): Planetary Wind Mechanism & Pressure Gradients',
      question: {
        en: 'An ecologist explains **planetary winds** circulating between the Equator and the Poles. What physical principle primarily drives them?',
        hi: 'भूमध्य रेखा और ध्रुवों के मध्य बहने वाली **ग्रहीय पवनों (`Planetary winds`)** का अंतर्निहित भौतिक कारण क्या है?',
      },
      options: {
        en: [
          'Ocean tidal friction from Mars',
          'Earth’s geomagnetic pole alignment',
          'Air pressure gradients driven by uneven solar heating (`curves R in N, L in S`)',
          'Uniform atmospheric composition everywhere',
        ],
        hi: [
          'ज्वारीय बल',
          'पृथ्वी का चुंबकीय क्षेत्र',
          'असमान सौर ऊष्मण से उत्पन्न वायुदाब प्रवणता (`घूर्णन से वक्राकार विक्षेप`)',
          'सर्वत्र एकसमान सतही तापमान',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Uneven equatorial-to-polar solar heating builds persistent **pressure belts (`0°L, 30°H, 60°L, 90°H`)**, pushing planetary winds deflected by Earth’s rotation (`13.2.2`).',
        hi: 'सूर्य के असमान तापन से वैश्विक निम्न व उच्च दाब पट्टियाँ बनती हैं जो ग्रहीय पवनों को चलाती हैं!',
      },
    },
    {
      id: 'pyq-c9c13-14',
      examTag: 'RRB NTPC UG 2025 (Shifts 29 & 31)',
      section: 'General Science',
      subject: 'Indian Climate',
      topic: 'NCERT Ch 13 (Intro & 13.1–13.2): Differential Heating & India’s Southwest Monsoon',
      question: {
        en: 'What is the primary physical cause of India’s **Southwest Monsoon (`coupled with Arabian Sea insolation & Western Ghats barrier`)**?',
        hi: 'भारत में **दक्षिण-पश्चिम मानसून** का प्राथमिक भौतिक कारण क्या है?',
      },
      options: {
        en: [
          'Local frost winds from Arctic Circle only',
          'Lunar tidal waves in Indian Ocean',
          'Differential solar heating of Indian land and surrounding sea (`High Ocean P -> Low Land P`)',
          'Trade winds arriving strictly from polar Atlantic ice',
        ],
        hi: [
          'आर्कटिक से आने वाली पवनें',
          'चंद्रमा का ज्वारीय बल',
          'भारतीय स्थल और आसपास के समुद्र का विभेदी सौर तापन (`स्थल गर्म-निम्न दाब की ओर सागरीय आर्द्र पवन`)',
          'अटलांटिक महासागर से ध्रुवीय धारा',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Land (`lower specific heat`) warms far faster than sea in summer (`Ch 7 + Ch 13`), drawing moisture-laden **Southwest Monsoon winds** whose intense uplift over Western Ghats fuels India’s rains (`IITM Pune` model)!',
        hi: 'भूमि समुद्र से जल्दी गर्म होकर निम्न दाब बनाती है जिससे अरब सागर व हिंद महासागर से आर्द्र मानसूनी पवनें भारत की ओर खिंची आती हैं (`IITM पुणे`)!',
      },
    },
    {
      id: 'pyq-c9c13-15',
      examTag: 'RRB NTPC UG 2025 (Shift 41) + Group D Shift 2',
      section: 'General Science',
      subject: 'Water Cycle & Spheres',
      topic: 'NCERT Ch 13 (Intro & 13.3.1): Gangotri Cryosphere Source & Water Cycle Sequence',
      question: {
        en: 'Which major Himalayan river originates directly from **Gangotri Glacier (`cryosphere -> hydrosphere`, flowing via Water Cycle: Evaporation -> Condensation -> Precipitation -> Collection)**?',
        hi: 'उत्तराखंड के **गंगोत्री हिमनद (`हिममंडल → जलमंडल` व जल चक्र: वाष्पन → संघनन → वर्षण → संग्रह)** से कौन-सी प्रमुख नदी निकलती है?',
      },
      options: {
        en: ['Bhagirathi (`headstream of Ganga`)', 'Godavari river', 'Narmada river', 'Kaveri river'],
        hi: ['भागीरथी नदी (`गंगा का प्रमुख हिम-स्रोत`)', 'गोदावरी नदी', 'नर्मदा नदी', 'कावेरी नदी'],
      },
      correctIndex: 0,
      solution: {
        en: 'Meltwater from **Gangotri glacier (`Gaumukh`)** feeds the **Bhagirathi** (`joining Alaknanda to form Ganga`), uniting Himalaya’s Cryosphere directly to northern India’s Hydrosphere (`Shift 41`).',
        hi: 'गंगोत्री हिमनद से निकली **भागीरथी (`आगे चलकर गंगा`)** भारतीय हिममंडल व जलमंडल की जीवनरेखा है!',
      },
    },
    {
      id: 'pyq-c9c13-16',
      examTag: 'RRB Group D 2025 (Shift 14)',
      section: 'General Science',
      subject: 'Biogeochemical Cycles',
      topic: 'NCERT Ch 13 (Sec 13.3.2): Phytoplankton Carbon Capture in Marine Cycle',
      question: {
        en: 'Microscopic marine organisms like **phytoplankton (`biosphere`)** absorb dissolved carbonate/`CO₂` in ocean water primarily for the process of ________.',
        hi: 'महासागरीय पादपप्लवक (`phytoplankton`) जल में घुलित `CO₂` एवं कार्बोनेट आयनों का उपयोग मुख्यतः किस प्रक्रिया के लिए करते हैं?',
      },
      options: {
        en: ['Combustion', 'Aerobic respiration only', 'Photosynthesis (`fast marine carbon sink!`)', 'Volcanic weathering'],
        hi: ['दहन', 'केवल श्वसन', 'प्रकाश संश्लेषण (`सागरीय कार्बन अवशोषण`)', 'ज्वालामुखी क्षरण'],
      },
      correctIndex: 2,
      solution: {
        en: 'Marine **phytoplankton** run oceanic **photosynthesis (`NCERT Sec 13.3.2`)**, locking dissolved surface `CO₂` into biomass and feeding ocean food webs (`71%` global C resides in oceans)!',
        hi: 'समुद्री **पादपप्लवक (`Phytoplankton`)** घुली `CO₂` व कार्बोनेट से **प्रकाश संश्लेषण** कर सागरीय जीवन व कार्बन चक्र चलाते हैं (`पृ. 263`)!',
      },
    },
    {
      id: 'pyq-c9c13-17',
      examTag: 'RRB Group D 2025 (Shift 45) + NTPC Shift 32',
      section: 'General Science',
      subject: 'Biogeochemical Cycles',
      topic: 'NCERT Ch 13 (Sec 13.3.2): Carbon Cycle Return & Fossil Emission Driver',
      question: {
        en: 'Which process accurately represents carbon’s biological return to air inside the **Carbon Cycle** (`alongside fossil fuel combustion as top human CO₂ source`)?',
        hi: 'पर्यावरण विज्ञान व **कार्बन चक्र** में कार्बन के वायुमंडल में लौटने की जैविक प्रक्रिया कौन-सी है (`मानवीय स्तर पर जीवाश्म दहन संग`)?',
      },
      options: {
        en: [
          'Formation and release of carbon dioxide (`CO₂`) during cellular respiration & decay',
          'Direct precipitation of solid iron from ocean vents',
          'Conversion of solar visible photons into quartz rock',
          'Stratospheric UV reflection off polar snow',
        ],
        hi: [
          'जीवों के श्वसन और मृत अपघटन के दौरान कार्बन डाइऑक्साइड (`CO₂`) का निर्माण व विमुक्ति',
          'महासागर में लौह वर्षण',
          'सौर प्रकाश का चट्टान बनना',
          'हिम द्वारा परावर्तन',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'In the fast **Carbon Cycle**, **respiration & microbial decomposition** return organic glucose carbon to atmospheric **`CO₂`**, while fossil coal/oil combustion releases millions-year slow storage rapidly!',
        hi: 'द्रुत कार्बन चक्र में **श्वसन व अपघटन** से कार्बन `CO₂` रूप में लौटता है; मानवीय **जीवाश्म ईंधन दहन** ने वायुमंडलीय स्तर `315` से `420 ppm` पहुंचा दिया!',
      },
    },
    {
      id: 'pyq-c9c13-18',
      examTag: 'RRB Group D 2025 (Shift 4)',
      section: 'General Science',
      subject: 'Environment',
      topic: 'NCERT Ch 13 (Sec 13.4): CO₂ Dissolution Driving Ocean Acidification',
      question: {
        en: 'Excessive atmospheric carbon dioxide (`CO₂`) dissolves into surface ocean water. This makes seawater steadily more ________ (`threatening coral skeletons`).',
        hi: 'वायुमंडल में अत्यधिक `CO₂` बढ़ने से महासागरीय जल में इसका विघटन बढ़ता है। इससे समुद्री जल अधिक ________ हो जाता है (`प्रवालों हेतु संकट`)।',
      },
      options: {
        en: ['Alkaline / Basic', 'Acidic (`Ocean Acidification`)', 'Oxygen-saturated', 'Completely mineral-free'],
        hi: ['क्षारीय (`Basic`)', 'अम्लीय (`Acidic — महासागरीय अम्लीकरण`)', 'पूर्णतः ऑक्सीजनित', 'खनिज रहित'],
      },
      correctIndex: 1,
      solution: {
        en: 'Dissolved **`CO₂` forms carbonic ions lowering ocean pH**, making seawater **more Acidic** — harming calcifying **corals & plankton** (`NCERT Sec 13.4, p.265`)!',
        hi: 'वायुमंडल की अतिरिक्त **`CO₂` समुद्र में घुलकर जल को अम्लीय (`Acidic`)** बनाती है, जिससे प्लवक व प्रवाल भित्तियाँ नष्ट हो सकती हैं!',
      },
    },
    {
      id: 'pyq-c9c13-19',
      examTag: 'RRB Group D 2025 (Shift 1)',
      section: 'General Science',
      subject: 'Environment',
      topic: 'NCERT Ch 13 (Sec 13.4): Marine Warming + CO₂ Saturation Stressing Coral Reefs',
      question: {
        en: 'A tropical coast suffers severe **coral bleaching & marine stress** following unusually high ocean temperatures. Which coupled Earth-system interaction explains this?',
        hi: 'असामान्य रूप से उच्च वैश्विक तापमान के बाद एक तटीय प्रदेश में **प्रवाल विरंजन (`coral bleaching`)** व समुद्री संकट दिखता है। कौन-सी मंडल अंतःक्रिया इसे स्पष्ट करती है?',
      },
      options: {
        en: [
          'Ocean warming lowers `CO₂` uptake capacity while acidification & thermal stress harm reefs',
          'Higher water temperature makes coral reefs grow twice faster',
          'Mountain glaciers directly cool shallow equatorial bays',
          'Reduced atmospheric nitrogen boosts marine fish biomass',
        ],
        hi: [
          'महासागर तापन से `CO₂` अवशोषण क्षमता घटती है व अम्लीकरण से समुद्री जीवन तनावग्रस्त होता है',
          'गर्म जल से प्रवाल भित्तियाँ दुगनी तेज बढ़ती हैं',
          'हिमनद सीधे तटीय मूंगा चट्टानों को जमा देते हैं',
          'नाइट्रोजन घटने से मछलियाँ बढ़ती हैं',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Warmer seas absorb LESS `CO₂` (`leaving more heat-trapping gas in air`) while combined **warming + acidification (`13.4`)** bleach sensitive corals & micro-plankton!',
        hi: 'गर्म महासागर `CO₂` सोखने की क्षमता खोता है और तापन + अम्लीकरण **प्रवाल भित्तियों व समुद्री प्लवकों** को गंभीर नुकसान पहुँचाता है!',
      },
    },
    {
      id: 'pyq-c9c13-20',
      examTag: 'RRB Group D 2025 (Shifts 11 & 41)',
      section: 'General Science',
      subject: 'Ecology',
      topic: 'NCERT Ch 13 (Sec 13.3): Decomposers Recycling Carbon & Nitrogen Minerals',
      question: {
        en: 'Which statement correctly defines the indispensable role of **decomposers (`bacteria & fungi`)** across the Carbon & Nitrogen Cycles?',
        hi: 'पृथ्वी के जैव-भूरासायनिक चक्रों (`कार्बन व नाइट्रोजन`) में **अपघटकों (`जीवाणु व कवक`)** की अनिवार्य भूमिका क्या है?',
      },
      options: {
        en: [
          'They convert dead organic waste back into simple inorganic compounds (`CO₂, NH₃ & minerals`)',
          'They trap stratospheric UV radiation over poles',
          'They absorb `1.4 kWm⁻²` solar constant into diamonds',
          'They completely replace photosynthesis across forests',
        ],
        hi: [
          'ये मृत कार्बनिक पदार्थों को सरल अकार्बनिक यौगिकों (`CO₂, अमोनिया व खनिज`) में विघटित कर चक्र पूरा करते हैं',
          'ये समतापमंडल की UV किरणें परावर्तित करते हैं',
          'ये सूर्य से सीधे हीरा संश्लेषित करते हैं',
          'ये वनों में प्रकाश संश्लेषण की जगह लेते हैं',
        ],
      },
      correctIndex: 0,
      solution: {
        en: '**Decomposers** carry out **Ammonification** (`N-cycle`) and decay-release **`CO₂`** (`C-cycle`), returning soil minerals so plants can recycle finite elements forever!',
        hi: 'अपघटक मृत पादप-जंतुओं का विघटन कर अमोनीकरण व `CO₂` विमुक्ति द्वारा पोषक तत्व पुनः मृदा-वायु में लौटाते हैं (`Shifts 11, 41`)!',
      },
    },
    {
      id: 'pyq-c9c13-21',
      examTag: 'RRB Group D 2025 (Shift 8)',
      section: 'General Science',
      subject: 'Biogeochemical Cycles',
      topic: 'NCERT Ch 13 (Sec 13.3.4): Oxygen Restoration Exclusively via Photosynthesis',
      question: {
        en: 'All of the following processes consume free atmospheric **Oxygen (`21% O₂`)**, **EXCEPT**:',
        hi: 'निम्नलिखित में से किस एक को छोड़कर शेष सभी प्रक्रियाएँ वायुमंडलीय **ऑक्सीजन (`O₂`)** का उपभोग करती हैं?',
      },
      options: {
        en: [
          'Photosynthesis by green plants (`restores O₂!`)',
          'Combustion of fossil fuels & wood',
          'Cellular respiration by plants',
          'Cellular respiration by animals',
        ],
        hi: [
          'हरे पादपों में प्रकाश संश्लेषण (`यह O₂ मुक्त करता है!`)',
          'जीवाश्म ईंधनों का दहन',
          'पादपों में श्वसन',
          'जंतुओं में श्वसन',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Respiration (`both plants & animals`) + combustion + crustal oxide formation **consume `O₂`**, whereas **Photosynthesis** alone **releases fresh `O₂` (`p.265`)**!',
        hi: 'श्वसन व दहन `O₂` खर्च करते हैं, जबकि केवल **प्रकाश संश्लेषण** वायुमंडल में **`O₂` वापस लौटाता है (`भाग 13.3.4`)**!',
      },
    },
    {
      id: 'pyq-c9c13-22',
      examTag: 'RRB Group D 2025 (Shift 31)',
      section: 'General Science',
      subject: 'Earth Systems',
      topic: 'NCERT Ch 13 (Sec 13.3.4 & 13.4): Forest Loss Disrupting Inter-Sphere Oxygen/Carbon Balance',
      question: {
        en: 'A severe prolonged drought destroys widespread forest vegetation. Looking at **Earth’s interconnected spheres**, what is the most probable global cycle consequence?',
        hi: 'व्यापक सूखे व वन विनाश से वनस्पति नष्ट होने पर **पृथ्वी के अंतःसंबद्ध मंडलों** में सबसे संभावित परिणाम क्या होगा?',
      },
      options: {
        en: [
          'Disrupted oxygen & carbon balance across Biosphere & Atmosphere',
          'Sudden doubling of atmospheric `O₂` overnight',
          'Immediate surge in Haber-Bosch ocean bedrock nitrogen',
          'Zero effect on rainfall, transpiration, or soil erosion',
        ],
        hi: [
          'जैवमंडल व वायुमंडल के मध्य ऑक्सीजन तथा कार्बन संतुलन में गंभीर व्यवधान',
          'वायुमंडल में `O₂` का तुरंत दुगना होना',
          'चट्टानों में नाइट्रोजन उछाल',
          'वाष्पोत्सर्जन व मृदा अपरदन पर शून्य प्रभाव',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Losing green canopy removes primary photosynthetic `CO₂`-sinks & `O₂`-generators while slashing transpiration (`local rainfall drops`) and exposing soil (`Shift 31`).',
        hi: 'वनस्पतियों के नष्ट होने से प्रकाश संश्लेषण रुकता है, **ऑक्सीजन-कार्बन चक्र बाधित होता है** और वाष्पोत्सर्जन घटता है (`पृ. 265`)!',
      },
    },
    {
      id: 'pyq-c9c13-23',
      examTag: 'RRB Group D 2025 (Shift 41)',
      section: 'General Science',
      subject: 'Atmosphere & Biosphere',
      topic: 'NCERT Ch 13 (Sec 13.4): Vehicle Exhaust Smog & Ground-Level Ozone',
      question: {
        en: 'A metropolitan city strictly enforces vehicular exhaust norms, slashing urban **smog and harmful ground-level ozone** (`NCERT p.266`). Which two spheres benefit directly?',
        hi: 'एक शहर वाहनों के उत्सर्जन के कड़े नियम लागू कर **धूम्रकुहरा और हानिकारक भू-स्तरीय ओजोन** कम करता है। कौन-से दो मंडल सीधे प्रभावित होते हैं?',
      },
      options: {
        en: [
          'Geosphere core and Cryosphere',
          'Atmosphere and Biosphere (`cleaner breathable urban air & healthier plants/humans!`)',
          'Deep Earth crust and Ocean currents',
          'Exosphere and Moon orbits',
        ],
        hi: [
          'भूमंडल क्रोड और हिममंडल',
          'वायुमंडल (`स्वच्छ हवा`) और जैवमंडल (`मानव व पादप स्वास्थ्य`!)',
          'गहरी भू-पर्पटी और समुद्री धाराएँ',
          'बहिर्मंडल और चंद्रमा',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Vehicle exhaust reacts with sunlight forming lower-troposphere smog & toxic **ground-level ozone (`Atmospheric pollution`)** that damages lungs & plant stomata (**Biosphere**)!',
        hi: 'भू-स्तरीय ओजोन व धूम्रकुहरा घटने से सीधा लाभ **वायुमंडल व जैवमंडल** (`मानव-जंतु-वनस्पति`) को मिलता है (`पृ. 266`)!',
      },
    },
    {
      id: 'pyq-c9c13-24',
      examTag: 'RRB NTPC UG 2025 (Shift 57) + Tech 3',
      section: 'General Science',
      subject: 'Climate Action',
      topic: 'NCERT Ch 13 (Sec 13.4): Kyoto Protocol / Paris Agreement vs Global Warming Drivers',
      question: {
        en: 'Whereas **Montreal Protocol** curbed ozone-destroying `CFCs`, what is the core global goal of the **Kyoto Protocol & Paris Agreement** (`NCERT p.266`)?',
        hi: 'मॉन्ट्रियल प्रोटोकॉल (`CFC रोक`) के समानांतर, **क्योटो प्रोटोकॉल एवं पेरिस समझौता** मुख्यतः किस वैश्विक लक्ष्य से संबंधित हैं?',
      },
      options: {
        en: [
          'Promoting maximum thermal coal combustion',
          'Increasing chlorofluorocarbon refrigerants',
          'Expanding ocean nitrate fertilisation',
          'Reducing human greenhouse gas (`CO₂`) emissions driving global warming (`alongside Mission LiFE!`)',
        ],
        hi: [
          'तापीय कोयला बिजली उत्पादन को अधिकतम बढ़ाना',
          'CFC गैसों को पुनः चालू करना',
          'झीलों में नाइट्रेट बहाव बढ़ाना',
          'वैश्विक तापन बढ़ाने वाली ग्रीनहाउस गैसों (`CO₂`) के उत्सर्जन में कमी करना',
        ],
      },
      correctIndex: 3,
      solution: {
        en: '**Kyoto Protocol (`Shift 57`) & Paris Agreement** bind nations to cut fossil `CO₂` & greenhouse gases, reinforced in India by **Mission LiFE (`2021`)** & clean solar/wind energy!',
        hi: '**क्योटो प्रोटोकॉल (`NTPC Shift 57`) व पेरिस समझौता** ग्रीनहाउस गैसों (`CO₂`) में कटौती हेतु हैं, जिसे भारत **मिशन LiFE** व सौर ऊर्जा से सशक्त करता है!',
      },
    },
  ],
};
