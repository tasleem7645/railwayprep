export const SUPER_COACHING_DATA = [
  {
    id: 'neeraj-sir-physics',
    teacher: 'Neeraj Sir',
    role: 'Science Guru',
    subject: 'General Science',
    category: 'Physics',
    title: 'Light & Optics (प्रकाशिकी) - 100% Exam Trap Notes',
    badge: 'High Yield',
    readTime: '8 min read',
    overview: 'Complete Concave/Convex mirror and lens ray diagrams, sign conventions, and direct numerical shortcuts for RRB NTPC & ALP.',
    points: [
      {
        title: 'अवतल दर्पण (Concave Mirror) के 6 नियम:',
        content: 'अनंत पर रखी वस्तु का प्रतिबिंब F पर बनता है। C पर रखी वस्तु का प्रतिबिंब हमेशा C पर ही बनता है (m = -1)। P और F के बीच रखी वस्तु का प्रतिबिंब दर्पण के पीछे, सीधा व बड़ा बनता है (यही डेंटिस्ट व शेविंग मिरर में काम आता है)।'
      },
      {
        title: 'दर्पण सूत्र (Mirror Formula) & Sign Convention:',
        formula: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}, \\quad m = -\\frac{v}{u} = \\frac{h_i}{h_o}',
        content: 'Note: अवतल दर्पण की फोकस दूरी (f) हमेशा ऋणात्मक (-ve) होती है। उत्तल दर्पण की फोकस दूरी हमेशा धनात्मक (+ve) होती है।'
      },
      {
        title: 'लेंस क्षमता (Power of Lens):',
        formula: 'P = \\frac{1}{f \\text{ (in meters)}} \\text{ Dioptres (D)}',
        content: 'निकट दृष्टि दोष (Myopia) के निवारण के लिए अवतल लेंस (Concave Lens, -ve power) और दूर दृष्टि दोष (Hypermetropia) के लिए उत्तल लेंस (Convex Lens, +ve power) का उपयोग होता है।'
      }
    ]
  },
  {
    id: 'neeraj-sir-electricity',
    teacher: 'Neeraj Sir',
    role: 'Science Guru',
    subject: 'General Science',
    category: 'Physics',
    title: 'Electricity & Circuits (विद्युत एवं परिपथ)',
    badge: 'Formula Pack',
    readTime: '6 min read',
    overview: 'Ohm\'s Law, Series vs Parallel resistance combinations, and commercial electrical energy calculations.',
    points: [
      {
        title: 'ओम का नियम (Ohm\'s Law):',
        formula: 'V = I \\cdot R, \\quad R = \\rho \\frac{l}{A}',
        content: 'यदि किसी तार की लंबाई (l) को खींचकर दोगुना (2l) कर दिया जाए, तो उसका नया प्रतिरोध 4 गुना (4R) हो जाता है, क्योंकि आयतन नियत रहने से अनुप्रस्थ काट क्षेत्रफल आधा हो जाता है।'
      },
      {
        title: 'विद्युत शक्ति (Electric Power) के 3 सूत्र:',
        formula: 'P = V \\cdot I = I^2 R = \\frac{V^2}{R}',
        content: 'घरों के सभी उपकरण समानांतर क्रम (Parallel Connection) में जुड़े होते हैं ताकि सभी को समान 220V विभवांतर मिले।'
      }
    ]
  },
  {
    id: 'aditya-ranjan-maths',
    teacher: 'Aditya Ranjan Sir',
    role: 'Maths Wizard',
    subject: 'Mathematics',
    category: 'Arithmetic',
    title: 'Percentage & CI/SI 2-Second Rocket Tricks',
    badge: 'Shortcut King',
    readTime: '10 min read',
    overview: 'Fraction to percentage conversion table, successive discounts, and 2-year/3-year CI-SI difference tricks.',
    points: [
      {
        title: 'इंपॉर्टेंट फ्रैक्शन टेबल (Fraction to %):',
        content: '1/6 = 16.66% | 1/7 = 14.28% | 1/8 = 12.5% | 1/9 = 11.11% | 1/11 = 9.09% | 1/12 = 8.33% | 1/14 = 7.14%'
      },
      {
        title: '2 वर्ष एवं 3 वर्ष CI - SI अंतर सूत्र:',
        formula: 'D_{2\\text{yr}} = P \\left(\\frac{R}{100}\\right)^2, \\quad D_{3\\text{yr}} = P \\left(\\frac{R}{100}\\right)^2 \\left(\\frac{300 + R}{100}\\right)',
        content: 'Railway में सीधे formula आधारित सवाल हर शिफ्ट में 1 प्रश्न निश्चित रूप से पूछा जाता है।'
      }
    ]
  },
  {
    id: 'reasoning-clock-calendar',
    teacher: 'Reasoning Master',
    role: 'Logical Reasoning',
    subject: 'Reasoning',
    category: 'General Intelligence',
    title: 'Clock, Calendar & Syllogism 100-50 Concept',
    badge: '100% Accuracy',
    readTime: '7 min read',
    overview: 'Zero-mistake approaches for angle between clock hands, leap year odd days, and syllogism Venn diagram vs 100-50 rule.',
    points: [
      {
        title: 'घड़ी की सुइयों का संपाती होना (0° Overlap):',
        content: 'घड़ी की दोनों सुइयां 12 घंटे में 11 बार और 24 घंटे में 22 बार आपस में मिलती हैं (11 से 1 के बीच केवल 1 बार 12:00 पर मिलती हैं)।'
      },
      {
        title: 'विषम दिन (Odd Days) की गणना:',
        content: 'साधारण वर्ष (365 दिन) = 1 Odd day | लीप वर्ष (366 दिन) = 2 Odd days | 100 वर्ष = 5 Odd days | 200 वर्ष = 3 Odd days | 300 वर्ष = 1 Odd day | 400 वर्ष = 0 Odd days.'
      }
    ]
  }
];
