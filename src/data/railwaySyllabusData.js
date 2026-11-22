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
    name: 'RRB Group D (Level-1 Posts - CEN 09/2025)',
    shortName: 'Group D (Level-1 2025)',
    tag: '22,195 Official Vacancies',
    badgeColor: 'purple',
    notificationNo: 'CEN No. 09/2025 (Official Railway Board Notice)',
    totalVacancies: '22,195 Posts (Across 16 Railway Zones / RRCs)',
    payScale: 'Level-1 (7th CPC Pay Matrix) • Initial Pay ₹18,000/- + DA, HRA, Allowances',
    ageLimit: '18 – 33 Years (as on 01.01.2026) [+3 yrs OBC, +5 yrs SC/ST, +10 yrs PwBD]',
    qualification: '10th Pass OR ITI (NCVT/SCVT) OR National Apprenticeship Certificate (NAC) granted by NCVT. (Simple 10th Pass candidates are fully ELIGIBLE without ITI!)',
    meritFormula: '100% CBT Marks (Normalized) + 1/3rd (one-third) NCVT Examination Marks Weightage for Railway Act Apprentices (CCAA)',
    dates: {
      indicativeNotice: '27.12.2025',
      applyStart: '31.01.2026 (00:00 Hrs)',
      applyEnd: '02.03.2026 (23:59 Hrs)',
      feeLastDate: '04.03.2026 (23:59 Hrs)',
      editWindow: '05.03.2026 to 14.03.2026 (23:59 Hrs)',
      scribeWindow: '15.03.2026 to 19.03.2026'
    },
    medicalStandard: 'A-2 (Pointsman B), A-3 (Track Machine), B-1 (Track Maintainer, Bridge, C&W, Loco Shed, P.Way, S&T, TRD), C-1 (Workshop Operations)',
    medicalBreakdown: [
      { param: 'A-2 Standard (Pointsman B)', detail: 'Distant Vision: 6/9, 6/9 without glasses (no fogging test). Near Vision: Sn: 0.6, 0.6 without glasses. Full color vision, binocular, night & mesopic vision.' },
      { param: 'A-3 Standard (Asst Track Machine)', detail: 'Distant Vision: 6/9, 6/9 with or without glasses (power not exceeding 2D). Near Vision: Sn: 0.6, 0.6 with/without glasses.' },
      { param: 'B-1 Standard (Track Maintainer, Loco Shed, Bridge)', detail: 'Distant Vision: 6/9, 6/12 with or without glasses (power not exceeding 4D). Near Vision: Sn: 0.6, 0.6 when reading or close work.' },
      { param: 'C-1 Standard (Workshop Operations, Workshop S&T)', detail: 'Distant Vision: 6/12, 6/18 with or without glasses. Near Vision: Sn: 0.6 with/without glasses for reading.' }
    ],
    petDetails: {
      male: '1. Lift & carry 35 kg weight for 100 meters in 2 minutes in 1 chance without dropping sandbag. 2. Run 1,000 meters in 4 minutes 15 seconds in 1 chance.',
      female: '1. Lift & carry 20 kg weight for 100 meters in 2 minutes in 1 chance without dropping sandbag. 2. Run 1,000 meters in 5 minutes 40 seconds in 1 chance (same for Transgender).',
      exemptions: 'PwBD, Course Completed Act Apprentices (CCAA), and Ex-Servicemen (ExSM) are 100% EXEMPTED from PET.',
      ccaaBenefit: 'Course Completed Act Apprentices (CCAA) receive 1/3rd (one-third) weightage of NCVT marks directly in the final merit score after CBT.'
    },
    postsList: [
      { post: 'Track Maintainer Grade-IV', dept: 'Engineering (P.Way)', medStd: 'B-1' },
      { post: 'Pointsman B', dept: 'Traffic', medStd: 'A-2' },
      { post: 'Assistant Track Machine', dept: 'Engineering', medStd: 'A-3' },
      { post: 'Assistant Bridge', dept: 'Engineering', medStd: 'B-1' },
      { post: 'Assistant Carriage & Wagon', dept: 'Mechanical', medStd: 'B-1' },
      { post: 'Assistant Loco Shed (Electrical & Diesel)', dept: 'Electrical / Mech', medStd: 'B-1' },
      { post: 'Assistant P.Way', dept: 'Engineering', medStd: 'B-1' },
      { post: 'Assistant (S and T) - Signal', dept: 'Signal & Telecom', medStd: 'B-1' },
      { post: 'Assistant TRD (Traction Distribution)', dept: 'Electrical', medStd: 'B-1' },
      { post: 'Assistant TL & AC', dept: 'Electrical', medStd: 'B-1' },
      { post: 'Assistant Operations (Electrical) Workshop', dept: 'Electrical', medStd: 'C-1' },
      { post: 'Assistant (S and T) Workshop', dept: 'Signal & Telecom', medStd: 'C-1' }
    ],
    pipeline: [
      { step: '1', title: 'Single Stage CBT', type: 'Merit Decider', desc: '100 Qs / 90 Mins. Negative: -1/3. 3x candidates shortlisted for PET based on normalized marks.' },
      { step: '2', title: 'Physical Efficiency Test (PET)', type: 'Qualifying', desc: 'Male: 35 kg carry 100m (2 min) + 1000m run (4m 15s) | Female: 20 kg carry + 1000m run (5m 40s). PwBD/CCAA/ExSM Exempted.' },
      { step: '3', title: 'Document Verification (DV)', type: 'DV (1:1 Ratio)', desc: '1:1 ratio matching exact vacancies. Verification of 10th/ITI marksheet, NCVT certificate & Caste/EWS status.' },
      { step: '4', title: 'Medical Examination (ME)', type: 'Medical (A-2 to C-1)', desc: 'Railway Medical Board fitness test: A-2 (Pointsman), A-3 (Track Machine), B-1 (Trackman), C-1 (Workshop).' },
      { step: '5', title: 'Final Merit & Empanelment', type: 'Final Allotment', desc: '100% CBT score (+ 1/3rd NCVT weightage for CCAA) determines division and unit posting across 16 Railway Zones.' }
    ],
    stages: [
      {
        stageName: 'Computer Based Test - CBT (100 Questions / 90 Minutes)',
        duration: '90 Minutes (120 Mins for Scribes)',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative (3x Shortlisted for PET)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 30% (PwBD relaxed by 2% if shortage)',
        table: [
          { subject: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
          { subject: 'Mathematics (Arithmetic & Pure Maths)', questions: 25, marks: 25 },
          { subject: 'General Science (10th CBSE Physics, Chemistry, Biology)', questions: 25, marks: 25 },
          { subject: 'General Awareness on Current Affairs (Tech, Sports, Economics)', questions: 20, marks: 20 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'General Science (25 Marks - 10th CBSE NCERT Level)',
        topics: [
          'Physics: Newton’s Laws of Motion, Work, Energy & Power, Gravitation, Sound waves, Light (Reflection & Refraction, Lenses/Mirrors), Ohm’s Law, Resistance in Series/Parallel, Magnetic Effects of Electric Current',
          'Chemistry: Chemical Reactions & Equations, Acids, Bases & Salts, Metals and Non-Metals, Carbon & its Compounds, Modern Periodic Table, Chemical Bonding',
          'Life Sciences (Biology): Life Processes (Nutrition, Respiration, Circulation, Excretion), Control & Coordination (Nervous system & Hormones), Reproduction, Heredity & Evolution, Environment'
        ]
      },
      {
        subject: 'Mathematics (25 Marks)',
        topics: [
          'Number System, BODMAS, Decimals, Fractions, LCM & HCF, Ratio and Proportion, Percentages',
          'Mensuration (2D & 3D), Time and Work, Time and Distance, Simple & Compound Interest, Profit and Loss',
          'Algebra, Geometry, Trigonometry, Elementary Statistics (Mean, Median, Mode), Square Root, Age Calculations, Calendar & Clock, Pipes & Cistern'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (30 Marks - Highest Weightage!)',
        topics: [
          'Analogies, Alphabetical & Number Series, Coding and Decoding, Mathematical Operations, Relationships (Blood Relations)',
          'Syllogism, Jumbling, Venn Diagrams, Data Interpretation & Sufficiency',
          'Conclusions & Decision Making, Similarities & Differences, Analytical Reasoning, Classification, Direction Sense, Statement-Arguments & Assumptions'
        ]
      },
      {
        subject: 'General Awareness & Current Affairs (20 Marks)',
        topics: [
          'Science & Technology Developments, Space Missions (ISRO, Chandrayaan, Aditya L1)',
          'Sports & Games (Olympics, Cricket World Cup, National Games, Grand Slams)',
          'Culture, Indian History, National Movement, Indian Polity & Constitution',
          'Economics, Government Welfare Schemes, Important Personalities & Appointments'
        ]
      }
    ]
  }
];
