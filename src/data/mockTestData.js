export const RAILWAY_TESTS = [
  {
    id: 'rrb-ntpc-live-cbt-1',
    title: 'RRB NTPC 2026: Live All-India Free CBT-1 Full Mock Test',
    badge: 'Trending Live',
    badgeColor: 'emerald',
    durationMinutes: 20, // 20 mins for interactive demo, standard 90 mins
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science', 'Mathematics', 'Reasoning & Intelligence', 'General Awareness'],
    questions: [
      {
        id: 1,
        section: 'General Science',
        subject: 'Physics',
        topic: 'Optics & Light',
        question: {
          en: 'An object is placed at the Centre of Curvature (C) of a concave mirror. Where will the image be formed, and what will be its nature?',
          hi: 'किसी वस्तु को अवतल दर्पण (Concave Mirror) के वक्रता केंद्र (C) पर रखा जाता है। उसका प्रतिबिंब कहाँ और किस प्रकृति का बनेगा?'
        },
        options: {
          en: [
            'At Focus (F), Real and Inverted, Highly Diminished',
            'At Centre of Curvature (C), Real and Inverted, Same Size',
            'Between C and F, Virtual and Erect, Enlarged',
            'Behind the mirror, Virtual and Erect, Magnified'
          ],
          hi: [
            'फोकस (F) पर, वास्तविक व उल्टा, अत्यधिक छोटा',
            'वक्रता केंद्र (C) पर, वास्तविक व उल्टा, वस्तु के बराबर आकार',
            'C और F के बीच, आभासी व सीधा, बड़ा',
            'दर्पण के पीछे, आभासी व सीधा, आवर्धित'
          ]
        },
        correctIndex: 1,
        solution: {
          approach: 'Neeraj Sir Direct Ray Trick: C पर रखी वस्तु का प्रतिबिंब हमेशा C पर ही बनता है, वास्तविक (Real), उल्टा (Inverted) और आवर्धन m = -1 (समान आकार) होता है।',
          formula: 'm = -v/u = -h_i/h_o',
          pyqReference: 'RRB NTPC CBT-1 (Shift 2, 2021) Repeated'
        }
      },
      {
        id: 2,
        section: 'General Science',
        subject: 'Physics',
        topic: 'Electricity',
        question: {
          en: 'A 100 W electric bulb is used for 10 hours daily. How many units of commercial electrical energy will be consumed in 30 days?',
          hi: '100 W का एक विद्युत बल्ब प्रतिदिन 10 घंटे उपयोग किया जाता है। 30 दिनों में कितने यूनिट (कमर्शियल विद्युत ऊर्जा) की खपत होगी?'
        },
        options: {
          en: ['15 Units', '30 Units', '45 Units', '300 Units'],
          hi: ['15 यूनिट', '30 यूनिट', '45 यूनिट', '300 यूनिट']
        },
        correctIndex: 1,
        solution: {
          approach: 'विद्युत ऊर्जा (Units / kWh) = (Power in Watts × Hours × Days) / 1000 = (100 × 10 × 30) / 1000 = 30,000 / 1000 = 30 kWh (Units).',
          formula: 'E = (P \\times t) / 1000 \\text{ kWh}',
          pyqReference: 'RRB Group D 2022 / ALP CBT-1 2018'
        }
      },
      {
        id: 3,
        section: 'General Science',
        subject: 'Chemistry',
        topic: 'Acids, Bases & Salts',
        question: {
          en: 'What is the chemical formula of Plaster of Paris (POP), and how is it prepared from Gypsum?',
          hi: 'प्लास्टर ऑफ पेरिस (POP) का रासायनिक सूत्र क्या है, और इसे जिप्सम से कैसे तैयार किया जाता है?'
        },
        options: {
          en: [
            'CaSO4 · 2H2O (Gypsum heated at 373 K)',
            'CaSO4 · 1/2 H2O (Gypsum heated at 373 K / 100°C)',
            'CaSO4 · 5H2O (Blue Vitriol)',
            'CaOCl2 (Bleaching Powder)'
          ],
          hi: [
            'CaSO4 · 2H2O (जिप्सम को 373 K पर गर्म करके)',
            'CaSO4 · 1/2 H2O (जिप्सम को 373 K / 100°C पर गर्म करके)',
            'CaSO4 · 5H2O (नीला थोथा)',
            'CaOCl2 (ब्लीचिंग पाउडर)'
          ]
        },
        correctIndex: 1,
        solution: {
          approach: 'जिप्सम (CaSO4 · 2H2O) को 373 K (100°C) पर गर्म करने पर यह डेढ़ अणु जल खोकर कैल्शियम सल्फेट हेमीहाइड्रेट (CaSO4 · 1/2 H2O) बनाता है जिसे POP कहते हैं।',
          formula: 'CaSO_4 \\cdot 2H_2O \\xrightarrow{373\\text{ K}} CaSO_4 \\cdot \\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O',
          pyqReference: 'RRB NTPC 2021 / RPF SI 2019'
        }
      },
      {
        id: 4,
        section: 'Mathematics',
        subject: 'Arithmetic',
        topic: 'Percentage & Profit-Loss',
        question: {
          en: 'A shopkeeper marks his goods 40% above the cost price and allows a discount of 20% on the marked price. What is his net profit percentage?',
          hi: 'एक दुकानदार अपनी वस्तुओं पर क्रय मूल्य (CP) से 40% अधिक अंकित करता है और अंकित मूल्य (MP) पर 20% की छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?'
        },
        options: {
          en: ['12%', '15%', '20%', '8%'],
          hi: ['12%', '15%', '20%', '8%']
        },
        correctIndex: 0,
        solution: {
          approach: 'Aditya Ranjan Sir Successive Formula: Net % = a + b + (ab/100). Yahan a = +40%, b = -20%. Net = 40 - 20 - (40 × 20 / 100) = 20 - 8 = +12% Profit!',
          formula: '\\text{Net} = a + b + \\frac{ab}{100}',
          pyqReference: 'RRB NTPC CBT-2 2022'
        }
      },
      {
        id: 5,
        section: 'Mathematics',
        subject: 'Arithmetic',
        topic: 'Compound Interest',
        question: {
          en: 'The difference between Compound Interest and Simple Interest on a sum of ₹15,000 for 2 years is ₹96. What is the annual rate of interest?',
          hi: '₹15,000 की धनराशि पर 2 वर्ष के चक्रवृद्धि ब्याज (CI) और साधारण ब्याज (SI) का अंतर ₹96 है। वार्षिक ब्याज दर क्या है?'
        },
        options: {
          en: ['6%', '8%', '10%', '12%'],
          hi: ['6%', '8%', '10%', '12%']
        },
        correctIndex: 1,
        solution: {
          approach: 'Direct Railway 2-Year Formula: Diff = P × (R / 100)². So, 96 = 15000 × (R² / 10000) ⇒ R² = (96 × 10000) / 15000 = 64 ⇒ R = 8% per annum.',
          formula: 'D_{2\\text{yr}} = P \\left(\\frac{R}{100}\\right)^2',
          pyqReference: 'RRB ALP CBT-1 2018'
        }
      },
      {
        id: 6,
        section: 'Reasoning & Intelligence',
        subject: 'Reasoning',
        topic: 'Clock Angle',
        question: {
          en: 'What is the angle between the hour hand and the minute hand of a clock at 8:20?',
          hi: 'घड़ी में 8 बजकर 20 मिनट (8:20) पर घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनेगा?'
        },
        options: {
          en: ['120°', '130°', '140°', '110°'],
          hi: ['120°', '130°', '140°', '110°']
        },
        correctIndex: 1,
        solution: {
          approach: 'Direct Master Formula: Angle = |30H - (11/2)M| = |30(8) - (11/2)(20)| = |240 - 110| = 130°.',
          formula: '\\theta = \\left|30H - \\frac{11}{2}M\\right|',
          pyqReference: 'RRB Group D 2022 Shift 1'
        }
      },
      {
        id: 7,
        section: 'Reasoning & Intelligence',
        subject: 'Reasoning',
        topic: 'Calendar Day',
        question: {
          en: 'If 15 August 2024 was a Thursday, then what day of the week was 15 August 2025?',
          hi: 'यदि 15 अगस्त 2024 को गुरुवार (Thursday) था, तो 15 अगस्त 2025 को सप्ताह का कौन सा दिन होगा?'
        },
        options: {
          en: ['Friday', 'Saturday', 'Sunday', 'Thursday'],
          hi: ['शुक्रवार (Friday)', 'शनिवार (Saturday)', 'रविवार (Sunday)', 'गुरुवार (Thursday)']
        },
        correctIndex: 0,
        solution: {
          approach: '15 Aug 2024 se 15 Aug 2025 ke beech 2024 ka Leap year (Feb 2024) pehle hi beet chuka hai. Isliye 365 days ka normal year count hoga. 365 / 7 = 52 weeks + 1 Odd Day. Thursday + 1 = Friday!',
          formula: '\\text{Next Year Day} = \\text{Current Day} + 1 \\text{ (Non-leap)}',
          pyqReference: 'RRB NTPC CBT-1 2021'
        }
      },
      {
        id: 8,
        section: 'General Awareness',
        subject: 'Railway GK',
        topic: 'Indian Railways Heritage',
        question: {
          en: 'Between which two stations did the first passenger train in India run on 16 April 1853, covering a distance of 34 km?',
          hi: 'भारत में 16 अप्रैल 1853 को पहली यात्री ट्रेन किन दो स्टेशनों के बीच 34 किमी की दूरी तय करते हुए चली थी?'
        },
        options: {
          en: ['Bori Bunder (Mumbai) to Thane', 'Howrah to Hooghly', 'Royapuram to Walajah Road', 'Delhi to Agra'],
          hi: ['बोरी बंदर (मुंबई) से ठाणे', 'हावड़ा से हुगली', 'रोयापुरम से वालाजाह रोड', 'दिल्ली से आगरा']
        },
        correctIndex: 0,
        solution: {
          approach: '16 अप्रैल 1853 को लॉर्ड डलहौजी के काल में बोरी बंदर (अब छत्रपति शिवाजी महाराज टर्मिनस) से ठाणे तक 34 किमी की पहली रेल चली थी जिसमें 3 इंजन: सुल्तान, सिंध और साहिब लगे थे।',
          formula: 'Date: 16 April 1853 (34 km)',
          pyqReference: 'RRB NTPC 2021 / Group D 2018'
        }
      },
      {
        id: 9,
        section: 'General Awareness',
        subject: 'Current Affairs & Science Tech',
        topic: 'Indian Space Tech',
        question: {
          en: 'What is the official name given to the lunar landing site of Chandrayaan-3 where Vikram Lander touched down on the Moon South Pole?',
          hi: 'चंद्रयान-3 के विक्रम लैंडर द्वारा चंद्रमा के दक्षिणी ध्रुव पर उतरने वाले ऐतिहासिक बिंदु का आधिकारिक नाम क्या रखा गया है?'
        },
        options: {
          en: ['Tiranga Point', 'Shiv Shakti Point', 'Jawahar Point', 'Atal Point'],
          hi: ['तिरंगा पॉइंट (Tiranga Point)', 'शिव शक्ति पॉइंट (Shiv Shakti Point)', 'जवाहर पॉइंट (Jawahar Point)', 'अटल पॉइंट (Atal Point)']
        },
        correctIndex: 1,
        solution: {
          approach: '23 अगस्त 2023 को चंद्रयान-3 के टचडाउन पॉइंट को प्रधानमंत्री द्वारा "शिव शक्ति पॉइंट" नाम दिया गया, जबकि चंद्रयान-2 के क्रैश पॉइंट को "तिरंगा पॉइंट" नाम दिया गया है। 23 अगस्त को राष्ट्रीय अंतरिक्ष दिवस (National Space Day) घोषित किया गया।',
          formula: 'National Space Day: 23 August',
          pyqReference: 'RRB NTPC 2024 Expected High-Yield'
        }
      },
      {
        id: 10,
        section: 'General Science',
        subject: 'Biology',
        topic: 'Cell Biology',
        question: {
          en: 'Which cell organelle is known as the "Suicide Bag" of the cell due to its hydrolytic digestive enzymes?',
          hi: 'कोशिका के किस अंगक (Cell Organelle) को अपने पाचक एंजाइमों के कारण "आत्मघाती थैली" (Suicide Bag) कहा जाता है?'
        },
        options: {
          en: ['Mitochondria', 'Ribosome', 'Lysosome', 'Golgi Apparatus'],
          hi: ['माइटोकॉन्ड्रिया (Mitochondria)', 'राइबोसोम (Ribosome)', 'लाइसोसोम (Lysosome)', 'गॉल्जी काय (Golgi Body)']
        },
        correctIndex: 2,
        solution: {
          approach: 'लाइसोसोम में शक्तिशाली पाचक हाइड्रोलाइटिक एंजाइम होते हैं। जब कोशिका क्षतिग्रस्त होती है, तो लाइसोसोम फट जाते हैं और अपनी ही कोशिका का पाचन कर लेते हैं। खोजकर्ता: क्रिश्चियन डी डुवे (1955)।',
          formula: 'Mitochondria = Powerhouse, Ribosome = Protein Factory, Lysosome = Suicide Bag',
          pyqReference: 'NCERT 9th Chapter 5 / RRB NTPC'
        }
      }
    ]
  }
];
