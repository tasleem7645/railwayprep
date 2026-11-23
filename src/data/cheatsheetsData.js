// High-yield formula cheatsheets, tables, and shortcut rules for Railway Aspirants (RRB ALP, Tech, NTPC, Group D)

export const CHEATSHEETS_DATA = {
  physics: [
    {
      id: 'p1',
      topic: 'गति के समीकरण (Equations of Motion)',
      category: 'Mechanics',
      formulas: [
        { name: 'First Equation', formula: 'v = u + at', desc: 'u = प्रारंभिक वेग, v = अंतिम वेग, a = त्वरण, t = समय' },
        { name: 'Second Equation', formula: 's = ut + (1/2)at²', desc: 's = विस्थापन (दूरी)' },
        { name: 'Third Equation', formula: 'v² = u² + 2as', desc: 'बिना समय (t) के वेग और दूरी संबंध' },
        { name: 'गुरुत्वाकर्षण के अधीन (Freely Falling)', formula: 'v = gt, h = (1/2)gt², v² = 2gh', desc: 'ऊपर फेंकने पर a = -g' }
      ],
      examTip: 'ALP न्यूमेरिकल में यदि वस्तु "विराम अवस्था (rest)" से शुरू हो तो u = 0 लें। यदि "रुक जाए (stops)" तो v = 0 लें।'
    },
    {
      id: 'p2',
      topic: 'कार्य, ऊर्जा और शक्ति (Work, Energy & Power)',
      category: 'Mechanics',
      formulas: [
        { name: 'कार्य (Work Done)', formula: 'W = F · s · cos(θ)', desc: 'जब बल और विस्थापन के बीच कोण θ = 90° हो (जैसे कुली सिर पर बोझ ले जा रहा हो), तो W = 0' },
        { name: 'गतिज ऊर्जा (Kinetic Energy)', formula: 'KE = (1/2)mv² = p² / (2m)', desc: 'p = संवेग (Momentum)। संवेग दोगुना करने पर KE चार गुनी हो जाती है।' },
        { name: 'स्थितिज ऊर्जा (Potential Energy)', formula: 'PE = mgh', desc: 'm = द्रव्यमान, g = 9.8 m/s², h = ऊँचाई' },
        { name: 'शक्ति (Power)', formula: 'P = W / t = F · v', desc: '1 Horsepower (1 HP) = 746 Watts' },
        { name: 'व्यावसायिक विद्युत इकाई (Commercial Unit)', formula: '1 kWh = 1 Unit = 3.6 × 10⁶ Joules', desc: 'बिजली बिल न्यूमेरिकल का मुख्य सूत्र' }
      ],
      examTip: 'रेलवे में पूछा जाता है: यदि किसी वस्तु का द्रव्यमान आधा और वेग दोगुना कर दिया जाए, तो KE = 1/2*(m/2)*(2v)^2 = 2 गुना हो जाएगी।'
    },
    {
      id: 'p3',
      topic: 'विद्युत धारा एवं परिपथ (Electricity & Circuits)',
      category: 'Electricity',
      formulas: [
        { name: 'ओम का नियम (Ohm’s Law)', formula: 'V = I · R', desc: 'V = विभवांतर (Volts), I = धारा (Amperes), R = प्रतिरोध (Ohms)' },
        { name: 'विद्युत धारा (Current)', formula: 'I = Q / t = (n · e) / t', desc: 'e = 1.6 × 10⁻¹⁹ C (इलेक्ट्रॉन आवेश)' },
        { name: 'प्रतिरोधकता सूत्र (Resistivity)', formula: 'R = ρ · (l / A)', desc: 'तार को खींचकर लंबाई दुगुनी करने पर नया प्रतिरोध R\' = n² · R = 4R' },
        { name: 'श्रेणी क्रम (Series Resistance)', formula: 'R_eq = R₁ + R₂ + R₃', desc: 'धारा (I) समान रहती है, वोल्टेज बंटता है' },
        { name: 'समानांतर क्रम (Parallel Resistance)', formula: '1/R_eq = 1/R₁ + 1/R₂', desc: 'वोल्टेज (V) समान रहता है, धारा बंटती है' },
        { name: 'जूल का तापन नियम (Heating Effect)', formula: 'H = I² · R · t = V · I · t = (V² / R) · t', desc: 'हीटर, प्रेस और बल्ब के न्यूमेरिकल में उपयोगी' }
      ],
      examTip: 'प्रतिरोधकता (Resistivity ρ) केवल पदार्थ की प्रकृति और तापमान पर निर्भर करती है, लंबाई या मोटाई पर नहीं।'
    },
    {
      id: 'p4',
      topic: 'प्रकाशिकी: दर्पण एवं लेंस सूत्र (Optics)',
      category: 'Optics',
      formulas: [
        { name: 'दर्पण सूत्र (Mirror Formula)', formula: '1/f = 1/v + 1/u', desc: 'अवतल दर्पण (Concave) का f हमेशा ऋणात्मक (-) होता है' },
        { name: 'दर्पण का आवर्धन (Mirror Magnification)', formula: 'm = -v / u = h_i / h_o', desc: 'यदि m ऋणात्मक है, तो प्रतिबिंब वास्तविक और उल्टा है' },
        { name: 'लेंस सूत्र (Lens Formula)', formula: '1/f = 1/v - 1/u', desc: 'उत्तल लेंस (Convex) का f हमेशा धनात्मक (+) होता है' },
        { name: 'लेंस की क्षमता (Power of Lens)', formula: 'P = 1 / f (meters) = 100 / f (cm)', desc: 'इकाई: डायोप्टर (Dioptre - D)' }
      ],
      examTip: 'निकट दृष्टि दोष (Myopia) के लिए अवतल लेंस (-) तथा दूर दृष्टि दोष (Hypermetropia) के लिए उत्तल लेंस (+) का उपयोग होता है।'
    }
  ],

  chemistry: [
    {
      id: 'c1',
      topic: 'प्रमुख रासायनिक यौगिक एवं सामान्य नाम (Important Chemical Compounds)',
      category: 'Inorganic',
      formulas: [
        { name: 'वाशिंग सोडा (धोने का सोडा)', formula: 'Na₂CO₃ · 10H₂O', desc: 'सोडियम कार्बोनेट डेकाहाइड्रेट (कांच, साबुन, जल की कठोरता दूर करने में)' },
        { name: 'बेकिंग सोडा (खाने का सोडा)', formula: 'NaHCO₃', desc: 'सोडियम बाइकार्बोनेट / हाइड्रोजन कार्बोनेट (एंटासिड, अग्निशामक)' },
        { name: 'ब्लीचिंग पाउडर (विरंजक चूर्ण)', formula: 'CaOCl₂', desc: 'कैल्शियम ऑक्सीक्लोराइड (शुष्क बुझे चूने Ca(OH)₂ पर Cl₂ की क्रिया से)' },
        { name: 'प्लास्टर ऑफ पेरिस (POP)', formula: 'CaSO₄ · 1/2 H₂O', desc: 'कैल्शियम सल्फेट हेमीहाइड्रेट (373 K पर जिप्सम गर्म करके)' },
        { name: 'जिप्सम (Gypsum)', formula: 'CaSO₄ · 2H₂O', desc: 'सीमेंट के जमने की दर को धीमा करने के लिए मिलाया जाता है' },
        { name: 'कास्टिक सोडा (Caustic Soda)', formula: 'NaOH', desc: 'सोडियम हाइड्रॉक्साइड (क्लोरो-क्षार प्रक्रिया द्वारा निर्मित)' }
      ],
      examTip: 'POP में 1/2 जल अणु होता है, जबकि जिप्सम में 2 जल अणु होते हैं।'
    },
    {
      id: 'c2',
      topic: 'pH मान तालिका (Important pH Values Chart)',
      category: 'Acids & Bases',
      formulas: [
        { name: 'जठर रस (Gastric Juice / HCl)', formula: 'pH ≈ 1.2', desc: 'आमाशय में भोजन पाचन के लिए अत्यधिक अम्लीय' },
        { name: 'नींबू का रस (Lemon Juice)', formula: 'pH ≈ 2.2', desc: 'साइट्रिक अम्ल की उपस्थिति' },
        { name: 'शुद्ध जल (Pure Distilled Water)', formula: 'pH = 7.0', desc: 'पूर्णतः उदासीन (Neutral)' },
        { name: 'मानव रक्त (Human Blood)', formula: 'pH = 7.35 - 7.45', desc: 'हल्का क्षारीय (Slightly Basic)' },
        { name: 'मिल्क ऑफ मैग्नीशिया [Mg(OH)₂]', formula: 'pH ≈ 10.5', desc: 'पेट की अम्लता दूर करने वाला एंटासिड' },
        { name: 'अम्लीय वर्षा (Acid Rain)', formula: 'pH < 5.6', desc: 'SO₂ और NO₂ गैसों के जल में घुलने से' }
      ],
      examTip: 'मुँह का pH मान 5.5 से कम होने पर दाँतों का इनेमल (कैल्शियम हाइड्रॉक्सीपैटाइट) संक्षारित होने लगता है।'
    },
    {
      id: 'c3',
      topic: 'सक्रियता श्रेणी (Reactivity Series of Metals)',
      category: 'Metals',
      formulas: [
        { name: 'ट्रिक: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au', formula: 'केदार नाथ का माली आलू जरा फीके पकाता है', desc: 'पोटैशियम (K) सबसे अधिक सक्रिय, सोना (Au) सबसे कम' },
        { name: 'विस्थापन अभिक्रिया (Displacement)', formula: 'Fe + CuSO₄ → FeSO₄ + Cu', desc: 'अधिक सक्रिय धातु कम सक्रिय धातु को उसके विलयन से विस्थापित कर देती है' }
      ],
      examTip: 'सोडियम (Na) और पोटैशियम (K) इतने सक्रिय और मुलायम होते हैं कि इन्हें चाकू से काटा जा सकता है और केरोसिन में रखा जाता है।'
    }
  ],

  maths: [
    {
      id: 'm1',
      topic: 'चाल, समय और रेलगाड़ी (Speed, Time & Trains)',
      category: 'Arithmetic',
      formulas: [
        { name: 'इकाई रूपांतरण (Conversion)', formula: 'km/h × (5/18) = m/s | m/s × (18/5) = km/h', desc: '72 km/h = 72 × 5/18 = 20 m/s' },
        { name: 'रेलगाड़ी द्वारा खंभा पार करना', formula: 'समय = L_train / Speed', desc: 'खंभा, व्यक्ति या पेड़ की कोई लंबाई नहीं मानी जाती' },
        { name: 'रेलगाड़ी द्वारा पुल / प्लेटफार्म पार करना', formula: 'समय = (L_train + L_platform) / Speed', desc: 'कुल दूरी दोनों की लंबाइयों का योग होती है' },
        { name: 'सापेक्ष चाल (विपरीत दिशा)', formula: 'S_rel = S₁ + S₂', desc: 'दूरी = L₁ + L₂' },
        { name: 'सापेक्ष चाल (समान दिशा)', formula: 'S_rel = S₁ - S₂', desc: 'दूरी = L₁ + L₂' },
        { name: 'औसत चाल (समान दूरी पर)', formula: 'Avg Speed = (2 · x · y) / (x + y)', desc: 'यदि x से जाकर y से वापस लौटे' }
      ],
      examTip: 'प्लेटफार्म पार करने वाले सवालों में समय हमेशा (L_train + L_platform) से ही निकलता है।'
    },
    {
      id: 'm2',
      topic: 'चक्रवृद्धि एवं साधारण ब्याज (CI & SI Shortcuts)',
      category: 'Commercial Maths',
      formulas: [
        { name: '2 वर्ष का CI और SI का अंतर', formula: 'D₂ = P · (R / 100)²', desc: 'P = मूलधन, R = दर%' },
        { name: '3 वर्ष का CI और SI का अंतर', formula: 'D₃ = P · (R / 100)² · [ (300 + R) / 100 ]', desc: 'रेलवे परीक्षा का सबसे पसंदीदा सवाल' },
        { name: 'धन n गुना होना (SI में)', formula: 'R = [ (n - 1) / T ] × 100', desc: 'यदि कोई धन T वर्ष में n गुना हो जाए' }
      ],
      examTip: 'अर्धवार्षिक (Half-Yearly) होने पर दर आधी (R/2) और समय दोगुना (2T) हो जाता है।'
    },
    {
      id: 'm3',
      topic: 'त्रिकोणमिति मान तालिका (Trigonometric Values Table)',
      category: 'Trigonometry',
      formulas: [
        { name: 'sin θ', formula: '0°: 0 | 30°: 1/2 | 45°: 1/√2 | 60°: √3/2 | 90°: 1', desc: 'मूल अनुपात' },
        { name: 'cos θ', formula: '0°: 1 | 30°: √3/2 | 45°: 1/√2 | 60°: 1/2 | 90°: 0', desc: 'sin का उल्टा क्रम' },
        { name: 'tan θ', formula: '0°: 0 | 30°: 1/√3 | 45°: 1 | 60°: √3 | 90°: ∞ (ND)', desc: 'sin θ / cos θ' },
        { name: 'मुख्य सर्वसमिकाएं', formula: 'sin²θ + cos²θ = 1 | 1 + tan²θ = sec²θ | 1 + cot²θ = cosec²θ', desc: 'sec²θ - tan²θ = 1' }
      ],
      examTip: 'यदि A + B = 90° हो, तो sin A = cos B, tan A · tan B = 1, और sin²A + sin²B = 1।'
    },
    {
      id: 'm4',
      topic: 'क्षेत्रमिति एवं आयतन (Mensuration 2D & 3D)',
      category: 'Mensuration',
      formulas: [
        { name: 'समबाहु त्रिभुज (Equilateral Triangle)', formula: 'क्षेत्रफल = (√3 / 4) · a² | ऊँचाई = (√3 / 2) · a', desc: 'a = भुजा' },
        { name: 'समषट्भुज (Regular Hexagon)', formula: 'क्षेत्रफल = 6 × (√3 / 4) · a² = (3√3 / 2) · a²', desc: '6 समबाहु त्रिभुजों का समूह' },
        { name: 'बेलन (Cylinder)', formula: 'वक्र पृष्ठ = 2πrh | संपूर्ण पृष्ठ = 2πr(r + h) | आयतन = πr²h', desc: 'r = त्रिज्या, h = ऊँचाई' },
        { name: 'शंकु (Cone)', formula: 'तिर्यक ऊँचाई l = √(r² + h²) | वक्र पृष्ठ = πrl | आयतन = (1/3)πr²h', desc: 'बेलन के आयतन का एक तिहाई' },
        { name: 'गोला (Sphere)', formula: 'पृष्ठीय क्षेत्रफल = 4πr² | आयतन = (4/3)πr³', desc: 'अर्धगोले का संपूर्ण पृष्ठ = 3πr²' }
      ],
      examTip: 'जब किसी ठोस (जैसे गोले) को पिघलाकर तार या छोटे गोलों में ढाला जाता है, तो दोनों स्थितियों में "आयतन (Volume)" हमेशा समान रहता है।'
    }
  ],

  reasoning: [
    {
      id: 'r1',
      topic: 'घड़ी और कैलेंडर (Clock & Calendar Tricks)',
      category: 'Analytical',
      formulas: [
        { name: 'सुइयों के बीच का कोण (Angle between hands)', formula: 'कोण θ = | (60H - 11M) / 2 |', desc: 'H = घंटा, M = मिनट। उदाहरण: 3:30 पर θ = |(180 - 330)/2| = 75°' },
        { name: 'घड़ी का दर्पण प्रतिबिंब (Mirror Image)', formula: '11:60 में से दिया गया समय घटाएं', desc: 'यदि समय 11 से 1 के बीच हो तो 23:60 में से घटाएं' },
        { name: 'घड़ी का जल प्रतिबिंब (Water Image)', formula: '18:30 (या 17:90) में से दिया गया समय घटाएं', desc: 'ऊपर-नीचे का परिवर्तन' },
        { name: 'विषम दिन (Odd Days)', formula: 'साधारण वर्ष = 1 विषम दिन | लीप वर्ष = 2 विषम दिन', desc: '100 वर्षों में 5, 200 में 3, 300 में 1, 400 में 0 विषम दिन' }
      ],
      examTip: 'लीप वर्ष वह वर्ष होता है जो 4 से विभाज्य हो, लेकिन शताब्दी वर्ष (जैसे 1900, 2000) तभी लीप वर्ष होगा जब वह 400 से विभाज्य हो।'
    },
    {
      id: 'r2',
      topic: 'पासा एवं विपरीत सतह (Dice Rules)',
      category: 'Visual Reasoning',
      formulas: [
        { name: 'नियम 1: एक सतह समान होने पर (One Common Face)', formula: 'समान सतह से घड़ी की दिशा (Clockwise) में घूमें', desc: 'पहला-पहला और दूसरा-दूसरा आमने-सामने होंगे' },
        { name: 'नियम 2: दो सतहें समान होने पर (Two Common Faces)', formula: 'तीसरी शेष बची दोनों सतहें परस्पर एक-दूसरे के विपरीत होंगी', desc: 'जैसे A और B समान हैं, तो C का विपरीत D होगा' }
      ],
      examTip: 'मानक पासे (Standard Dice) की किन्हीं भी दो विपरीत सतहों का योग हमेशा 7 होता है (1↔6, 2↔5, 3↔4)।'
    }
  ]
};
