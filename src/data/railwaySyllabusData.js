export const RAILWAY_SYLLABUS = [
  {
    id: 'rrb-alp',
    name: 'RRB ALP (Assistant Loco Pilot - CEN 01/2026)',
    shortName: 'ALP (Loco Pilot 2026)',
    tag: '11,127 Official Vacancies',
    badgeColor: 'amber',
    notificationNo: 'CEN No. 01/2026 (Official Railway Board Notice)',
    totalVacancies: '11,127 Posts (UR: 4,860 | OBC: 2,598 | SC: 1,746 | EWS: 1,004 | ST: 919 | ExSM: 1,115)',
    payScale: 'Level-2 (7th CPC) • Initial Pay ₹19,900/-',
    ageLimit: '18 – 30 Years (as on 01-07-2026) [+3 yrs OBC, +5 yrs SC/ST]',
    qualification: 'Matric / SSLC + ITI (NCVT/SCVT) in eligible trades OR Course Completed Act Apprenticeship OR 3-Yr Diploma / Degree in Mechanical, Electrical, Electronics, Automobile Engg. (PwBD Not Suitable)',
    meritFormula: '50% CBT-2 Part-A + 50% CBAT (Psycho) Score (CEN 01/2026 Official Formula!)',
    dates: {
      indicativeNotice: '21.03.2026',
      applyStart: '15.05.2026 (00:00 Hrs)',
      applyEnd: '14.06.2026 (23:59 Hrs)',
      feeLastDate: '16.06.2026 (23:59 Hrs)',
      editWindow: '17.06.2026 to 26.06.2026 (₹250 Fee)'
    },
    medicalStandard: 'A-1 Standard (Strict 6/6 Unaided Vision, No Glasses, No LASIK/Surgery). Mandatory Self-Screening Medical Declaration (Annexure VIII-A & VIII-B) required on CBAT day.',
    medicalBreakdown: [
      { param: 'Distance Vision', detail: '6/6, 6/6 without glasses with fogging test (must not accept +2D)' },
      { param: 'Near Vision', detail: 'Sn: 0.6, 0.6 without glasses' },
      { param: 'Color & Night Vision', detail: 'Must pass tests for Colour Vision (Ishihara), Binocular, Field of Vision, Night Vision, Mesopic Vision' },
      { param: 'Refractive Surgery / LASIK', detail: 'STRICTLY DISQUALIFIED. Proforma declaration Annexure-VI mandatory.' },
      { param: 'Self Screening Declaration (New 2026)', detail: 'Annexure VIII-A (Eye Specialist) & VIII-B (General Physician) signed by Central/State Govt Hospital or Medical College doctor to be submitted on CBAT exam day.' }
    ],
    tradeMapping: [
      {
        discipline: 'Electrical Engg & Combinations',
        trades: 'Electrician, Instrument Mechanic, Wireman, Armature & Coil Winder, RAC Mechanic'
      },
      {
        discipline: 'Electronics Engg & Combinations',
        trades: 'Electronics Mechanic, Mechanic (Radio & TV)'
      },
      {
        discipline: 'Mechanical Engg & Combinations',
        trades: 'Fitter, Mechanic (Motor Vehicle), Tractor Mechanic, Mechanic (Diesel), Turner, Machinist, RAC Mechanic, Heat Engine, Millwright/Maintenance Mechanic'
      },
      {
        discipline: 'Automobile Engg & Combinations',
        trades: 'Mechanic (Motor Vehicle), Tractor Mechanic, Mechanic (Diesel), Heat Engine, RAC Mechanic'
      }
    ],
    pipeline: [
      { step: '1', title: 'CBT-1 Screening Exam', type: 'Screening', desc: '75 Qs / 60 Mins. 15 times RRB-wise vacancies shortlisted for CBT-2. Marks not added to final merit.' },
      { step: '2', title: 'CBT-2 (Part A + Part B)', type: 'Merit + Trade', desc: 'Part A (100 Qs / 90 Mins) decides merit. Part B (75 Qs / 60 Mins Trade) requires mandatory 35% pass mark for all categories!' },
      { step: '3', title: 'CBAT (Psycho Aptitude)', type: 'Aptitude (50% Weightage)', desc: '8 times candidates shortlisted. 5 Test Batteries (Min 42 T-score in each). Produce Annexure VIII-A & VIII-B Medical Reports.' },
      { step: '4', title: 'Document Verification (DV)', type: 'DV', desc: '1:1 ratio based on combined 50% CBT-2 Part A + 50% CBAT merit score. Age & alphabetical tie-breaking.' },
      { step: '5', title: 'Medical Examination (ME)', type: 'Medical (A-1)', desc: 'Railway Medical Board conducts strict A-1 fitness verification. Complete eye tests without glasses.' },
      { step: '6', title: 'Final Panel & ZRTI Training', type: 'Final', desc: 'Final appointment and zonal training at Railway Zonal Training Centers (ZRTI).' }
    ],
    stages: [
      {
        stageName: 'CBT-1 (Screening Test - 75 Qs / 60 Mins)',
        duration: '60 Minutes (1 Hour)',
        totalQuestions: 75,
        totalMarks: 75,
        marking: '+1.00 Correct, -0.33 Negative (15x Shortlisted for CBT-2)',
        passPercentage: 'UR & EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'Mental Ability (Reasoning & Analytical)', questions: 25, marks: 25 },
          { subject: 'Mathematics (Arithmetic & Advanced)', questions: 20, marks: 20 },
          { subject: 'General Science (10th CBSE Physics, Chemistry, Life Sciences)', questions: 20, marks: 20 },
          { subject: 'General Awareness & Current Affairs', questions: 10, marks: 10 },
        ]
      },
      {
        stageName: 'CBT-2 Part A (Merit Decider - 100 Qs / 90 Mins)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative (50% Final Selection Weightage)',
        passPercentage: 'UR & EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'Basic Science & Engineering (BSED - Drawing, Units, Levers, IT)', questions: 40, marks: 40 },
          { subject: 'Mathematics (BODMAS, Algebra, Mensuration, Statistics, CI/SI)', questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning (Syllogism, Analogy, Puzzles)', questions: 25, marks: 25 },
          { subject: 'General Awareness & Current Affairs', questions: 10, marks: 10 },
        ]
      },
      {
        stageName: 'CBT-2 Part B (Qualifying Trade Test - 75 Qs / 60 Mins)',
        duration: '60 Minutes',
        totalQuestions: 75,
        totalMarks: 75,
        marking: 'Mandatory 35% Qualifying Pass Mark (26.25 Marks out of 75 for ALL Communities)',
        passPercentage: '35% Mandatory for UR, OBC, SC, ST, EWS (No category relaxation!)',
        table: [
          { subject: 'Relevant Technical Trade (DGT Syllabus - Fitter/Electrician/Diesel/RAC/etc.)', questions: 75, marks: 75 }
        ]
      },
      {
        stageName: 'CBAT (Computer Based Aptitude Test / Psycho)',
        duration: 'Appx. 70-80 Minutes',
        totalQuestions: '5 Batteries',
        totalMarks: 'T-Score 42 min each',
        marking: 'No Negative Marking • Hindi & English Only (50% Final Selection Weightage)',
        passPercentage: 'Min T-Score 42 in each of 5 Batteries separately (Mandatory for all categories)',
        table: [
          { subject: 'Memory Test Battery', questions: 'Set Qs', marks: 'T ≥ 42' },
          { subject: 'Direction Ability Test Battery', questions: 'Set Qs', marks: 'T ≥ 42' },
          { subject: 'Depth Perception / Brick Test Battery', questions: 'Set Qs', marks: 'T ≥ 42' },
          { subject: 'Concentration / Observation Test Battery', questions: 'Set Qs', marks: 'T ≥ 42' },
          { subject: 'Perceptual Speed Test Battery', questions: 'Set Qs', marks: 'T ≥ 42' },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Basic Science & Engineering (BSED - 40 Marks Merit Decider in CBT-2 Part A)',
        topics: [
          'Engineering Drawing: Projections, Views, Drawing Instruments, Lines, Geometric figures, Symbolic Representation',
          'Units & Measurements, Mass, Weight & Density, Work Power and Energy',
          'Speed & Velocity, Heat & Temperature, Basic Electricity',
          'Levers & Simple Machines, Occupational Safety and Health, Environment Education, IT Literacy'
        ]
      },
      {
        subject: 'Mathematics (CBT-1: 20 Qs | CBT-2 Part A: 25 Qs)',
        topics: [
          'Number System, BODMAS, Decimals, Fractions, LCM & HCF, Ratio and Proportion, Percentages',
          'Mensuration, Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss',
          'Algebra, Geometry and Trigonometry, Elementary Statistics, Square Root, Age Calculations, Calendar & Clock, Pipes & Cistern'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (CBT-1: 25 Qs | CBT-2 Part A: 25 Qs)',
        topics: [
          'Analogies, Alphabetical and Number Series, Coding and Decoding, Mathematical Operations',
          'Relationships (Blood Relations), Syllogism, Jumbling, Venn Diagram, Data Interpretation & Sufficiency',
          'Conclusions & Decision Making, Similarities & Differences, Analytical Reasoning, Classification, Directions, Statement-Arguments & Assumptions'
        ]
      },
      {
        subject: 'General Science (CBT-1: 20 Qs - 10th Standard Level)',
        topics: [
          'Physics: Motion, Work-Energy, Sound, Light (Reflection & Refraction), Electricity, Magnetism',
          'Chemistry: Chemical Reactions, Periodic Table, Metals & Non-metals, Carbon Compounds, Acids & Bases',
          'Life Sciences: Cell Biology, Nutrition, Respiration, Circulation, Nervous System, Genetics, Ecology'
        ]
      }
    ]
  },
  {
    id: 'rrb-ntpc',
    name: 'RRB NTPC (CEN 05/2024 Graduate & CEN 06/2024 UG)',
    shortName: 'NTPC (Graduate & 12th)',
    tag: '11,558 Total Vacancies',
    badgeColor: 'teal',
    notificationNo: 'CEN 05/2024 (Graduate) & CEN 06/2024 (Undergraduate)',
    totalVacancies: '11,558 Posts (8,113 Graduate + 3,445 10+2 Level)',
    medicalStandard: 'A-2 for Station Master/Goods Guard; C-2 for Clerical Typist posts (Glasses Allowed)',
    pipeline: [
      { step: '1', title: 'CBT-1 Screening', type: 'Screening', desc: '100 Qs / 90 Mins. Common screening. 15x candidates shortlisted per post level.' },
      { step: '2', title: 'CBT-2 Merit Stage', type: 'Merit', desc: '120 Qs / 90 Mins. Level-wise separate CBT (Level 2, 3, 5, 6).' },
      { step: '3', title: 'Skill Test (CBAT/Typing)', type: 'Post-Wise', desc: 'CBAT (Psycho) for Station Master (30% weightage) | Typing Test (30 wpm Eng / 25 wpm Hindi) for Typists.' },
      { step: '4', title: 'Document Verification', type: 'DV', desc: '1:1 ratio merit verification with original degree and caste certificates.' },
      { step: '5', title: 'Medical Exam', type: 'Medical', desc: 'Station Master: A-2 (6/9 vision without glasses) | Typist: C-2 (Glasses permitted).' },
      { step: '6', title: 'Final Appointment', type: 'Final', desc: 'Merit list publication & Zonal Railway appointment letters.' }
    ],
    stages: [
      {
        stageName: 'CBT-1 (Screening Stage - 100 Qs / 90 Mins)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Awareness (Science + GK + Current Affairs)', questions: 40, marks: 40 },
          { subject: 'Mathematics (Arithmetic & Advanced)', questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        ]
      },
      {
        stageName: 'CBT-2 (Merit Selection Stage - 120 Qs / 90 Mins)',
        duration: '90 Minutes',
        totalQuestions: 120,
        totalMarks: 120,
        marking: '+1.00 Correct, -0.33 Negative (Main Merit Base)',
        table: [
          { subject: 'General Awareness', questions: 50, marks: 50 },
          { subject: 'Mathematics', questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning', questions: 35, marks: 35 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'General Science & General Awareness (40 Qs in CBT-1, 50 Qs in CBT-2)',
        topics: [
          'Physics: Optics, Electricity, Ohm\'s Law, Magnetism, Motion, Gravitation, Sound',
          'Chemistry: Periodic Classification, Acids Bases, Reactions, Metals, Carbon',
          'Biology: Cell Organelles, Human Digestive/Nervous Systems, Diseases, Genetics',
          'Current Affairs (Last 12 Months), History, Polity, Geography, Space (ISRO)'
        ]
      },
      {
        subject: 'Mathematics (30 Qs in CBT-1, 35 Qs in CBT-2)',
        topics: [
          'Number System, BODMAS, Decimals, Fractions, LCM & HCF, Ratio, Percentages',
          'Time & Work, Pipes, Time Speed Distance, CI/SI, Profit-Loss, Discount',
          'Elementary Algebra, Trigonometry, Geometry, Elementary Statistics'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (30 Qs in CBT-1, 35 Qs in CBT-2)',
        topics: [
          'Analogies, Coding-Decoding, Number & Alphabetical Series, Syllogism (100-50 concept)',
          'Blood Relations, Direction Sense, Clock & Calendar, Venn Diagrams, Puzzles'
        ]
      }
    ]
  },
  {
    id: 'rrb-technician',
    name: 'RRB Technician Grade 1 & 3 (CEN 02/2024)',
    shortName: 'Technician Grade 1 & 3',
    tag: '9,144 Posts • Single CBT (New Pattern)',
    badgeColor: 'emerald',
    notificationNo: 'CEN 02/2024 (SarkariResult Verified)',
    totalVacancies: '9,144 Posts (Grade 1 Signal: 1,092 + Grade 3: 8,052)',
    medicalStandard: 'A-3 for Signal / B-1 for Mechanical & Electrical Workshop',
    pipeline: [
      { step: '1', title: 'Single-Stage CBT (Pattern Changed!)', type: 'Merit Decider', desc: 'No CBT-2! Direct single CBT of 100 Qs / 90 Mins determines 100% merit.' },
      { step: '2', title: 'Document Verification (DV)', type: 'DV', desc: 'Shortlisted candidates in 1:1 ratio based on single CBT score.' },
      { step: '3', title: 'Medical Examination', type: 'Medical', desc: 'Grade 1: A-3 | Grade 3: B-1/B-2 standard as per specific trade requirement.' },
      { step: '4', title: 'Final Merit Panel', type: 'Final', desc: 'Final appointment directly from single CBT score.' }
    ],
    stages: [
      {
        stageName: 'Technician Grade 3 (10th + ITI) - 100 Qs / 90 Mins',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Science (10th CBSE Physics, Chemistry, Biology)', questions: 40, marks: 40 },
          { subject: 'Mathematics', questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning', questions: 25, marks: 25 },
          { subject: 'General Awareness', questions: 10, marks: 10 },
        ]
      },
      {
        stageName: 'Technician Grade 1 Signal (Diploma/Degree) - 100 Qs / 90 Mins',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'Basic Science & Engineering (Physics + Digital Electronics)', questions: 35, marks: 35 },
          { subject: 'Basics of Computers & IT Applications', questions: 20, marks: 20 },
          { subject: 'Mathematics', questions: 20, marks: 20 },
          { subject: 'General Intelligence & Reasoning', questions: 15, marks: 15 },
          { subject: 'General Awareness', questions: 10, marks: 10 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Technician Grade 3: General Science Dominance (40 Marks!)',
        topics: [
          '40% of the entire question paper is 10th CBSE Science.',
          'Physics numericals (Ohm\'s Law, Optics, Electric Power, Kinematics) are decisive.',
          'Chemical reactions, Periodic table trends, and Human physiology.'
        ]
      },
      {
        subject: 'Technician Grade 1: Computers (20 Marks) & Digital Electronics (35 Marks)',
        topics: [
          'Computer Architecture, OS (Windows/Linux), Networking, MS Office, Data representation.',
          'Logic Gates (AND, OR, NOT, NAND, NOR, XOR), Boolean Algebra, Measuring Instruments.'
        ]
      }
    ]
  },
  {
    id: 'rpf-si-constable',
    name: 'RPF SI & Constable (CEN 01/2024 & CEN 02/2024)',
    shortName: 'RPF SI & Constable',
    tag: '4,660 Posts • CBT + PET',
    badgeColor: 'sky',
    notificationNo: 'CEN 01/2024 (SI) & CEN 02/2024 (Constable)',
    totalVacancies: '4,660 Posts (Sub-Inspector: 452 + Constable: 4,208)',
    medicalStandard: 'B-1 Medical Standard (6/9, 6/12 with or without glasses, Color Vision Required)',
    pipeline: [
      { step: '1', title: 'Computer-Based Test (CBT)', type: 'Merit', desc: '120 Qs / 90 Mins. 10x candidates shortlisted for Physical Round (PET/PMT).' },
      { step: '2', title: 'Physical Measurement (PMT)', type: 'Qualifying', desc: 'Height: 165 cm (Male UR/OBC), 157 cm (Female). Chest: 80-85 cm (Male).' },
      { step: '3', title: 'Physical Efficiency Test (PET)', type: 'Endurance', desc: 'Constable: 1600m in 5m 45s (Male) | 800m in 3m 40s (Female). High Jump & Long Jump.' },
      { step: '4', title: 'Document Verification (DV)', type: 'DV', desc: '1:1 ratio matching vacancies.' },
      { step: '5', title: 'Medical Exam (B-1)', type: 'Medical', desc: 'B-1 standard medical checkup in Railway Hospitals.' },
      { step: '6', title: 'Final Merit & Academy Training', type: 'Final', desc: 'Final appointment and commando/policing training at RPF Training Centers.' }
    ],
    stages: [
      {
        stageName: 'Single Stage CBT (120 Questions / 90 Minutes)',
        duration: '90 Minutes',
        totalQuestions: 120,
        totalMarks: 120,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Awareness (GK, Science & Current Affairs)', questions: 50, marks: 50 },
          { subject: 'Arithmetic (Mathematics)', questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning', questions: 35, marks: 35 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'General Awareness (Massive 50 Marks out of 120!)',
        topics: [
          'Indian History, Freedom Movement, Art & Culture, Indian Constitution & Polity.',
          'Physical & Economic Geography, Sports tournaments, General Science (10th level).',
          'Current National and International Affairs.'
        ]
      },
      {
        subject: 'Arithmetic & Reasoning (70 Marks Combined)',
        topics: [
          'Arithmetic: Whole Numbers, Decimals, Ratio, Averages, Interest, Profit-Loss, Mensuration.',
          'Reasoning: Spatial Visualization, Analogies, Syllogisms, Coding, Number Series, Visual Memory.'
        ]
      }
    ]
  },
  {
    id: 'rrb-group-d',
    name: 'RRB Group D (RRC Level-1 Posts)',
    shortName: 'Group D (Trackman/Pointsman)',
    tag: 'Mega Drive • 100 Qs + PET',
    badgeColor: 'purple',
    notificationNo: 'RRC Level-1 Centralised Employment Notice',
    totalVacancies: 'Upcoming Central Mega Drive (Track Maintainer, Pointsman, Assistant Workshop)',
    medicalStandard: 'A-2, B-1, C-1 as per specific Level-1 post profile',
    pipeline: [
      { step: '1', title: 'Single Stage CBT', type: 'Merit', desc: '100 Qs / 90 Mins. 3x candidates shortlisted for PET.' },
      { step: '2', title: 'Physical Efficiency Test (PET)', type: 'Endurance', desc: 'Male: 35 kg weight carry 100m in 2 min + 1000m running in 4m 15s | Female: 20 kg carry + 1000m in 5m 40s.' },
      { step: '3', title: 'Document Verification (DV)', type: 'DV', desc: '1:1 ratio document validation.' },
      { step: '4', title: 'Medical Examination', type: 'Medical', desc: 'Detailed medical checkup (A-2 for Pointsman, B-1 for Workshop/Trackman).' },
      { step: '5', title: 'Final Appointment & Division Posting', type: 'Final', desc: 'Division allocation in respective Railway Zones.' }
    ],
    stages: [
      {
        stageName: 'Single Stage CBT (100 Questions / 90 Minutes)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
          { subject: 'Mathematics', questions: 25, marks: 25 },
          { subject: 'General Science (Strictly NCERT 10th Physics, Chemistry, Biology)', questions: 25, marks: 25 },
          { subject: 'General Awareness & Current Affairs', questions: 20, marks: 20 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Science (25 Marks) & Reasoning (30 Marks) Strategy',
        topics: [
          'General Science strictly follows NCERT Class 9th & 10th textbooks line by line.',
          'Reasoning: Linear and circular sitting arrangements, Syllogisms, and Statement-Conclusion dominate.'
        ]
      }
    ]
  }
];
