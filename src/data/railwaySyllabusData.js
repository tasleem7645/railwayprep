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
    meritRatio: '50% CBT-2 + 50% CBAT',
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
    cbatDetails: {
      ratio: '8 Times the number of vacancies (RRB-wise & community-wise)',
      qualifyingCriteria: 'Minimum T-Score of 42 marks in each of the 5 test batteries separately (No relaxation for any category)',
      languages: 'English and Hindi only',
      negativeMarking: 'NO negative marking in CBAT',
      meritContribution: '50% weightage towards final merit list (50% CBT-2 Part-A + 50% CBAT)',
      visionDocRequired: 'Annexure VIII-A (Eye Specialist) & VIII-B (General Physician) Self-Screening Certificates',
      batteries: [
        { name: '1. Memory Test', desc: 'Track memory, building memory, picture-number association under rapid recall timing.' },
        { name: '2. Direction Test', desc: 'Table test, compass direction determination, and clock-face navigation.' },
        { name: '3. Depth Perception Test', desc: 'Brick test, hidden block counting, and 3D spatial alignment.' },
        { name: '4. Concentration Test', desc: 'Yes/No comparison, digit matching, finding pairs with identical configurations.' },
        { name: '5. Perceptual Speed Test', desc: 'Similarity test, hex-dot test, identifying identical shapes at high speed.' }
      ]
    },
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
    id: 'rrb-ntpc-ug',
    name: 'RRB NTPC Under-Graduate (10+2 Level - CEN 07/2026)',
    shortName: 'NTPC 12th (CEN 07/2026)',
    tag: '1,688 Posts • Typing Removed!',
    badgeColor: 'teal',
    notificationNo: 'CEN No. 07/2026 (Official Railway Board Notice)',
    totalVacancies: '1,688 Posts (Commercial Ticket Clerk: 700 | Jr Clerk: 600 | Accounts Clerk: 200 | Trains Clerk: 188)',
    payScale: 'Level-2 (₹19,900/-) & Level-3 (₹21,700/-) in 7th CPC',
    ageLimit: '18 – 30 Years (as on 01.01.2027) [+3 yrs OBC, +5 yrs SC/ST, +10 yrs PwBD]',
    qualification: '12th (+2 Stage) or equivalent with minimum 50% marks in aggregate. (50% marks is NOT required for SC/ST/PwBD/ExSM or candidates possessing higher qualification like Graduation/Degree!).',
    meritFormula: '100% 2nd Stage CBT Normalized Score (Typing Skill Test has been COMPLETELY DISPENSED WITH for CEN 07/2026!)',
    meritRatio: '100% 2nd Stage CBT',
    dates: {
      indicativeNotice: '26.09.2026',
      applyStart: '15.10.2026',
      applyEnd: '13.11.2026 (23:59 Hrs)',
      feeLastDate: '15.11.2026',
      editWindow: '16.11.2026 to 25.11.2026 (₹250 Fee)'
    },
    medicalStandard: 'A-3 (Trains Clerk), B-2 (Commercial Ticket Clerk), C-2 (Junior Clerk & Accounts Clerk)',
    medicalBreakdown: [
      { param: 'A-3 Standard (Trains Clerk - Level 2)', detail: 'Distant Vision: 6/9, 6/9 with or without glasses (power of lenses not to exceed 2D). Near Vision: Sn: 0.6, 0.6 with/without glasses. Pass tests for Color Vision, Binocular, Night & Mesopic Vision.' },
      { param: 'B-2 Standard (Commercial Ticket Clerk - Level 3)', detail: 'Distant Vision: 6/9, 6/12 with or without glasses (power not to exceed 4D). Near Vision: Sn: 0.6, 0.6 with/without glasses when reading or close work. Color vision & Binocular pass.' },
      { param: 'C-2 Standard (Junior Clerk & Accounts Clerk - Level 2)', detail: 'Distant Vision: 6/12 with or without glasses. Near Vision: Sn: 0.6 with or without glasses for reading/close work.' }
    ],
    postsList: [
      { post: 'Commercial Cum Ticket Clerk', dept: 'Commercial', level: 'Level-3 (₹21,700)', medStd: 'B-2', vacancies: '700 Posts' },
      { post: 'Junior Clerk Cum Typist', dept: 'Various Departments', level: 'Level-2 (₹19,900)', medStd: 'C-2', vacancies: '600 Posts' },
      { post: 'Accounts Clerk Cum Typist', dept: 'Accounts', level: 'Level-2 (₹19,900)', medStd: 'C-2', vacancies: '200 Posts' },
      { post: 'Trains Clerk', dept: 'Operating / Traffic', level: 'Level-2 (₹19,900)', medStd: 'A-3', vacancies: '188 Posts' }
    ],
    pipeline: [
      { step: '1', title: '1st Stage CBT (Screening)', type: 'Screening', desc: '100 Qs / 90 Mins. Common screening test for Level 2 & 3. 15 times candidates shortlisted per post level.' },
      { step: '2', title: '2nd Stage CBT (Merit Decider)', type: 'Merit', desc: '120 Qs / 90 Mins. Separate CBT for Level 2 and Level 3. Decides 100% final merit score.' },
      { step: '3', title: 'Typing Test Dispensed!', type: 'Relief', desc: 'Typing Test (CBTST) has been completely removed for CEN 07/2026! Basic typing tested only on-the-job after joining.' },
      { step: '4', title: 'Document Verification (DV)', type: 'DV (1:1)', desc: '1:1 ratio merit verification directly from 2nd Stage CBT normalized marks.' },
      { step: '5', title: 'Medical Examination', type: 'Medical', desc: 'A-3 for Trains Clerk | B-2 for Commercial Ticket Clerk | C-2 for Clerical posts.' },
      { step: '6', title: 'Final Empanelment & Appointment', type: 'Final', desc: 'Zonal allotment and appointment letters issued by respective RRBs.' }
    ],
    stages: [
      {
        stageName: '1st Stage CBT (Screening Test - Common for Level 2 & 3)',
        duration: '90 Minutes (120 Mins for Scribes)',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative (15x Shortlisted for 2nd Stage)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'General Awareness (GK, Science & Current Affairs)', questions: 40, marks: 40 },
          { subject: 'Mathematics (Arithmetic & Advanced)', questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        ]
      },
      {
        stageName: '2nd Stage CBT (Final Merit Decider - Level-wise Separate)',
        duration: '90 Minutes (120 Mins for Scribes)',
        totalQuestions: 120,
        totalMarks: 120,
        marking: '+1.00 Correct, -0.33 Negative (100% Final Selection Basis)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'General Awareness (Science, History, Polity, Geography, Current Affairs)', questions: 50, marks: 50 },
          { subject: 'Mathematics (Arithmetic, Algebra, Mensuration, Statistics, Geometry)', questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning (Puzzles, Syllogisms, Analogies, Series)', questions: 35, marks: 35 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'General Awareness (CBT-1: 40 Qs | CBT-2: 50 Qs)',
        topics: [
          'Current Events of National and International Importance, Games and Sports, Art and Culture of India',
          'Indian Literature, Monuments and Places of India, General Science and Life Science (up to 10th CBSE)',
          'History of India and Freedom Struggle, Physical, Social and Economic Geography of India and World',
          'Indian Polity and Governance - Constitution and Political System, General Scientific and Technological Developments (ISRO, DRDO)',
          'Environmental Issues concerning India and World at Large, Basics of Computers and Computer Applications'
        ]
      },
      {
        subject: 'Mathematics (CBT-1: 30 Qs | CBT-2: 35 Qs)',
        topics: [
          'Number System, Decimals, Fractions, LCM, HCF, Ratio and Proportions, Percentage, Mensuration',
          'Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss',
          'Elementary Algebra, Geometry and Trigonometry, Elementary Statistics'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (CBT-1: 30 Qs | CBT-2: 35 Qs)',
        topics: [
          'Analogies, Completion of Number and Alphabetical Series, Coding and Decoding, Mathematical Operations',
          'Similarities and Differences, Relationships, Analytical Reasoning, Syllogism, Jumbling, Venn Diagrams',
          'Puzzle, Data Sufficiency, Statement-Conclusion, Statement-Courses of Action, Decision Making, Maps, Interpretation of Graphs'
        ]
      }
    ]
  },
  {
    id: 'rrb-ntpc-grad',
    name: 'RRB NTPC Graduate Level (Level 5 & 6 - CEN 06/2026)',
    shortName: 'NTPC Graduate 2026',
    tag: '3,548 Posts • Goods Manager',
    badgeColor: 'sky',
    notificationNo: 'CEN No. 06/2026 (Official Railway Board Notice)',
    totalVacancies: '3,548 Posts (Goods Train Manager: 2,750 | Senior Clerk: 371 | Jr Accounts Asst: 300 | Chief Commercial: 127)',
    payScale: 'Level-5 (₹29,200/-) & Level-6 (₹35,400/-) in 7th CPC',
    ageLimit: '18 – 33 Years (as on 01.01.2027) [+3 yrs OBC, +5 yrs SC/ST, +10 yrs PwBD]',
    qualification: 'Degree from recognized University or its equivalent.',
    meritFormula: '100% 2nd Stage CBT Normalized Score (Typing Skill Test has been COMPLETELY DISPENSED WITH for CEN 06/2026!)',
    meritRatio: '100% 2nd Stage CBT',
    dates: {
      indicativeNotice: '26.09.2026',
      applyStart: '08.10.2026',
      applyEnd: '06.11.2026 (23:59 Hrs)',
      feeLastDate: '08.11.2026',
      editWindow: '09.11.2026 to 18.11.2026 (₹250 Fee)'
    },
    medicalStandard: 'A-2 (Goods Train Manager), B-2 (Chief Commercial Supervisor), C-2 (Senior Clerk & Jr Accounts Assistant)',
    medicalBreakdown: [
      { param: 'A-2 Standard (Goods Train Manager - Level 5)', detail: 'Distant Vision: 6/9, 6/9 without glasses (no fogging test). Near Vision: Sn: 0.6, 0.6 without glasses. Must pass tests for Colour Vision, Binocular Vision, Night Vision, Mesopic vision etc.' },
      { param: 'B-2 Standard (Chief Commercial Supervisor - Level 6)', detail: 'Distant Vision: 6/9, 6/12 with or without glasses (power not to exceed 4D). Near Vision: Sn: 0.6, 0.6 with/without glasses when reading. Colour vision & Binocular pass.' },
      { param: 'C-2 Standard (Senior Clerk & Jr Accounts Asst - Level 5)', detail: 'Distant Vision: 6/12 with or without glasses. Near Vision: Sn: 0.6 with or without glasses for reading/close work.' }
    ],
    postsList: [
      { post: 'Goods Train Manager', dept: 'Operating / Traffic', level: 'Level-5 (₹29,200)', medStd: 'A-2', vacancies: '2,750 Posts' },
      { post: 'Senior Clerk Cum Typist', dept: 'Various Departments', level: 'Level-5 (₹29,200)', medStd: 'C-2', vacancies: '371 Posts' },
      { post: 'Junior Accounts Assistant Cum Typist', dept: 'Accounts', level: 'Level-5 (₹29,200)', medStd: 'C-2', vacancies: '300 Posts' },
      { post: 'Chief Commercial Cum Ticket Supervisor', dept: 'Commercial', level: 'Level-6 (₹35,400)', medStd: 'B-2', vacancies: '127 Posts' }
    ],
    pipeline: [
      { step: '1', title: '1st Stage CBT (Screening)', type: 'Screening', desc: '100 Qs / 90 Mins. Common screening test for Level 5 & 6. 15 times candidates shortlisted per post level.' },
      { step: '2', title: '2nd Stage CBT (Merit Decider)', type: 'Merit', desc: '120 Qs / 90 Mins. Level-wise separate CBT for Level 5 and Level 6. Decides 100% final merit score.' },
      { step: '3', title: 'Typing Test Dispensed!', type: 'Relief', desc: 'Typing Test (CBTST) has been completely removed for CEN 06/2026! Basic typing tested only on-the-job after joining.' },
      { step: '4', title: 'Document Verification (DV)', type: 'DV (1:1)', desc: '1:1 ratio merit verification directly from 2nd Stage CBT normalized marks.' },
      { step: '5', title: 'Medical Examination', type: 'Medical', desc: 'A-2 for Goods Train Manager (no glasses) | B-2 for Supervisor | C-2 for Clerks.' },
      { step: '6', title: 'Final Empanelment & Appointment', type: 'Final', desc: 'Zonal allotment and appointment letters issued by respective RRBs.' }
    ],
    stages: [
      {
        stageName: '1st Stage CBT (Screening Test - Common for Level 5 & 6)',
        duration: '90 Minutes (120 Mins for Scribes)',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative (15x Shortlisted for 2nd Stage)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'General Awareness (GK, Science & Current Affairs)', questions: 40, marks: 40 },
          { subject: 'Mathematics (Arithmetic & Advanced)', questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        ]
      },
      {
        stageName: '2nd Stage CBT (Final Merit Decider - Level-wise Separate)',
        duration: '90 Minutes (120 Mins for Scribes)',
        totalQuestions: 120,
        totalMarks: 120,
        marking: '+1.00 Correct, -0.33 Negative (100% Final Selection Basis)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'General Awareness (Science, History, Polity, Geography, Current Affairs)', questions: 50, marks: 50 },
          { subject: 'Mathematics (Arithmetic, Algebra, Mensuration, Statistics, Geometry)', questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning (Puzzles, Syllogisms, Analogies, Series)', questions: 35, marks: 35 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'General Awareness (CBT-1: 40 Qs | CBT-2: 50 Qs)',
        topics: [
          'Current Events of National and International Importance, Games and Sports, Art and Culture of India',
          'Indian Literature, Monuments and Places of India, General Science and Life Science (up to 10th CBSE)',
          'History of India and Freedom Struggle, Physical, Social and Economic Geography of India and World',
          'Indian Polity and Governance - Constitution and Political System, General Scientific and Technological Developments (ISRO, DRDO)',
          'Environmental Issues concerning India and World at Large, Basics of Computers and Computer Applications'
        ]
      },
      {
        subject: 'Mathematics (CBT-1: 30 Qs | CBT-2: 35 Qs)',
        topics: [
          'Number System, Decimals, Fractions, LCM, HCF, Ratio and Proportions, Percentage, Mensuration',
          'Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss',
          'Elementary Algebra, Geometry and Trigonometry, Elementary Statistics'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (CBT-1: 30 Qs | CBT-2: 35 Qs)',
        topics: [
          'Analogies, Completion of Number and Alphabetical Series, Coding and Decoding, Mathematical Operations',
          'Similarities and Differences, Relationships, Analytical Reasoning, Syllogism, Jumbling, Venn Diagrams',
          'Puzzle, Data Sufficiency, Statement-Conclusion, Statement-Courses of Action, Decision Making, Maps, Interpretation of Graphs'
        ]
      }
    ]
  },
  {
    id: 'rrb-station-master',
    name: 'RRB Station Master (CEN 08/2026)',
    shortName: 'Station Master 2026',
    tag: '1,215 / 1,265 Posts • Level-6',
    badgeColor: 'emerald',
    notificationNo: 'CEN No. 08/2026 (Official Railway Board Notice)',
    totalVacancies: '1,215 Posts (Indicative Notice) / 1,265 Posts (Annexure-B: UR: 542 | OBC: 296 | SC: 176 | EWS: 147 | ST: 104 | ExSM: 133)',
    payScale: 'Level-6 in 7th CPC (Initial Pay: ₹35,400/- + DA, Running/Night Duty Allowances)',
    ageLimit: '20 – 33 Years (as on 01.01.2027) [+3 yrs OBC, +5 yrs SC/ST, +ExSM]',
    qualification: 'Graduate Degree from a recognized University or its equivalent. (PwBD: Not Suitable for Station Master)',
    meritFormula: '70% CBT + 30% CBAT (Psycho) Score (CEN 08/2026 Official Combined Merit)',
    meritRatio: '70% CBT + 30% CBAT',
    dates: {
      indicativeNotice: '24.10.2026',
      applyStart: '27.10.2026',
      applyEnd: '25.11.2026 (23:59 Hrs)',
      feeLastDate: '27.11.2026',
      editWindow: '28.11.2026 to 07.12.2026 (₹250 Fee)'
    },
    medicalStandard: 'A-2 Standard (Strict 6/9, 6/9 without glasses, near vision Sn 0.6, complete color vision pass, no LASIK/refractive surgery)',
    medicalBreakdown: [
      { param: 'Distance Vision', detail: '6/9, 6/9 without glasses (no fogging test). Eye sight must be sharp and unaided.' },
      { param: 'Near Vision', detail: 'Sn: 0.6, 0.6 without glasses when reading or close signal monitoring.' },
      { param: 'Color & Field Vision', detail: 'Must pass tests for Colour Vision (Ishihara / lantern), Binocular Vision, Field of Vision, Night Vision, and Mesopic Vision.' },
      { param: 'Refractive Surgery / LASIK', detail: 'STRICTLY DISQUALIFIED. Candidates with history of LASIK / corrective eye surgery are not eligible for A-2 (Annexure VI-B & VI-C).' },
      { param: 'Vision Certificate (Annexure-VI)', detail: 'Shortlisted candidates must produce original Vision Certificate issued by Eye Specialist (Annexure VI / VIA) on the day of CBAT, failing which entry is denied.' }
    ],
    postsList: [
      { post: 'Station Master', dept: 'Operating / Traffic Department', level: 'Level-6 (₹35,400)', medStd: 'A-2', vacancies: '1,215 / 1,265 Posts' }
    ],
    pipeline: [
      { step: '1', title: 'Single Computer Based Test (CBT)', type: 'Screening to CBAT', desc: '100 Qs / 120 Mins. Basic Science & Maths (30) + Data Analysis (30) + Logical Capability (20) + Mental Reasoning (20). -1/3rd negative marking.' },
      { step: '2', title: 'Computer Based Aptitude Test (CBAT)', type: '8x Shortlist', desc: 'Psycho Aptitude test with 5 batteries. Minimum 42 T-score required in EVERY battery without any relaxation. Carries 30% final merit weightage!' },
      { step: '3', title: 'Document Verification (DV)', type: 'DV (1:1 Ratio)', desc: '1:1 ratio matching vacancies based on combined merit (70% CBT + 30% CBAT). Age and alphabetical tie-breakers.' },
      { step: '4', title: 'Medical Examination (ME)', type: 'Medical (A-2)', desc: 'Rigorous A-2 medical fitness examination conducted by Railway Medical Board. No glasses, no LASIK.' },
      { step: '5', title: 'Final Panel & Station Posting', type: 'Final', desc: 'Empanelment and training as Station Master across railway divisions and operating zones.' }
    ],
    cbatDetails: {
      ratio: '8 Times the number of vacancies (RRB-wise & community-wise)',
      qualifyingCriteria: 'Minimum T-Score of 42 marks in each of the 5 test batteries separately (No relaxation for SC/ST/OBC/EWS/ExSM)',
      languages: 'English and Hindi only',
      negativeMarking: 'NO negative marking in CBAT',
      meritContribution: '30% weightage towards final merit list (70% CBT + 30% CBAT)',
      visionDocRequired: 'Original Medical Vision Certificate from Eye Specialist (Annexure-VI / Annexure-VIA)',
      batteries: [
        { name: '1. Intelligence / Classification Test', desc: 'Tests analytical ability, quick pattern recognition, and odd-one-out shape matching under time pressure.' },
        { name: '2. Selective Attention Test', desc: 'Addition of odd digits while ignoring evens, rapid visual focus, and sustained vigilance.' },
        { name: '3. Spatial Scanning Test', desc: 'Shortest route finding on station track grid layouts avoiding blocked intersections without lifting pencil/cursor.' },
        { name: '4. Information Ordering Test', desc: 'Simulated station switch/signal operations following coded sequence rules and machine status logic.' },
        { name: '5. Personality / Attitude Test', desc: 'Evaluates safety orientation, emotional stability, high-stress decision making, and team coordination.' }
      ]
    },
    stages: [
      {
        stageName: 'Single Computer Based Test (CBT - 100 Qs / 120 Mins)',
        duration: '120 Minutes (160 Mins for eligible PwBD scribes)',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative (8x Shortlisted for CBAT)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'Basic Science, Mathematical and Analytical Capability (Science & Maths: 30 | Data Analysis: 30)', questions: 60, marks: 60 },
          { subject: 'Logical Capability (Logical Reasoning & English Reading Comprehension)', questions: 20, marks: 20 },
          { subject: 'Mental Reasoning (Analogy, Series, Coding-Decoding, Ranking & Arrangements)', questions: 20, marks: 20 },
        ]
      },
      {
        stageName: 'Computer Based Aptitude Test (CBAT / Psycho - 5 Batteries)',
        duration: 'Approx. 84 Minutes (5 Battery Tests)',
        totalQuestions: 'Variable per Battery (~165-200 Qs)',
        totalMarks: 'T-Score Scale (Min 42 in each battery)',
        marking: 'No Negative Marking (30% Merit Weightage)',
        passPercentage: '42 T-Score in ALL 5 Batteries (Mandatory for ALL categories)',
        table: [
          { subject: 'Battery 1: Intelligence / Classification Test', questions: 35, marks: 'T-Score >= 42' },
          { subject: 'Battery 2: Selective Attention Test (Odd Number Sum)', questions: 30, marks: 'T-Score >= 42' },
          { subject: 'Battery 3: Spatial Scanning Test (Shortest Route)', questions: 40, marks: 'T-Score >= 42' },
          { subject: 'Battery 4: Information Ordering Test', questions: 25, marks: 'T-Score >= 42' },
          { subject: 'Battery 5: Personality / Attitude Test', questions: 35, marks: 'T-Score >= 42' },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Basic Science & Mathematics (30 Marks in Section 1)',
        topics: [
          'Mathematics: Number System, Ratio & Proportions, Averages, Percentages, Profit, Loss & Discounts',
          'Time, Speed & Distance, Power & Work, Algebra, Linear Equations, Arithmetic Progression (AP)',
          'LCM & HCF, Geometry and Trigonometry, Area & Volumes, Elementary Probability & Statistics (Basic Level)',
          'Basic Science & Engineering Physics: Units and Measurements, Mass, Weight and Density',
          'Work, Power and Energy, Kinetic Energy, Friction, Speed and Velocity, Relative Velocity',
          'Heat and Temperature, Basic Electricity, Levers and Simple Machines'
        ]
      },
      {
        subject: 'Data Analysis & Interpretation (30 Marks in Section 1)',
        topics: [
          'Multi-source Data Analysis: Examination, analysis and inference drawing from text and tabular data',
          'Data represented graphically: Charts, Bar Graphs, Line Graphs, Scatter Plots',
          'Pie Charts, Statistical Curve Distributions, Frequency Histograms',
          'Venn Diagrams (2-set and 3-set logical overlapping sets)',
          'Data Sufficiency (determining if given statements are sufficient to answer)',
          'Data Arrangement (matrix arrangement, linear seating, circular tables, scheduling)'
        ]
      },
      {
        subject: 'Logical Capability (20 Marks in Section 2)',
        topics: [
          'Logical Reasoning: Binary Logic (truth-tellers and liars), Syllogism (deductive conclusions), Clocks & Calendars',
          'Assumptions, Course of Action, Statement & Arguments, Blood Relations, Family Tree',
          'Solving complex logic-based puzzles and conditional matrix puzzles',
          'Reading Comprehension (Passages in English language): History, Society, Literature, Science, Environment, Abstract, Mythology, Technology & Culture',
          'Reading Comprehension Skills: Main Idea extraction, Supporting Details, Contextual Application, Logical Structure & Author Style'
        ]
      },
      {
        subject: 'Mental Reasoning (20 Marks in Section 3)',
        topics: [
          'Analogy: Identifying relationships between two items and applying the same rule to another pair',
          'Series Completion: Identifying subtle numerical, alphabetic and mixed patterns, predicting next term',
          'Coding-Decoding: Letter coding, number coding, symbol substitution, matrix deciphering',
          'Ranking & Order: Linear ranking, vertical comparisons, position swapping',
          'Direction Sense & Spatial Arrangements'
        ]
      }
    ]
  },
  {
    id: 'rrb-je',
    name: 'RRB Junior Engineer & DMS (CEN 04/2026)',
    shortName: 'RRB JE (Engineering 2026)',
    tag: '3,993 Official Vacancies',
    badgeColor: 'indigo',
    notificationNo: 'CEN No. 04/2026 (Official Railway Board Notice)',
    totalVacancies: '3,993 Posts (UR: 1,699 | OBC: 913 | SC: 624 | EWS: 394 | ST: 363 | ExSM: 387)',
    payScale: 'Level-6 in 7th CPC (Initial Pay: ₹35,400/- + DA, HRA, Allowances)',
    ageLimit: '18 – 33 Years (as on 01.01.2027) [+3 yrs OBC, +5 yrs SC/ST, +10 yrs PwBD]',
    qualification: 'Three years Diploma in Engineering OR Bachelor\'s Degree in Engineering (B.E./B.Tech) in Civil, Mechanical, Electrical, Electronics, CS, IT, or allied disciplines. (DMS accepts Diploma in ANY Engineering discipline).',
    meritFormula: '100% 2nd Stage CBT Normalized Score (150 Qs / 120 Mins including 100 Technical Qs)',
    meritRatio: '100% 2nd Stage CBT',
    dates: {
      indicativeNotice: '25.07.2026',
      applyStart: '14.08.2026',
      applyEnd: '13.09.2026 (23:59 Hrs)',
      feeLastDate: '15.09.2026',
      editWindow: '16.09.2026 to 25.09.2026 (₹250 Fee)',
      scribeWindow: '26.09.2026 to 30.09.2026'
    },
    medicalStandard: 'A-3 (Bridge, P.Way, TRD, TRS, EMU), B-1 (General Services, Loco Shed), B-2 (Design, Works, DMS), C-1 (Workshop & Drawing)',
    medicalBreakdown: [
      { param: 'A-3 Standard (JE Bridge, P.Way, TRD, TRS, EMU)', detail: 'Distant Vision: 6/9, 6/9 with or without glasses (power not exceeding 2D). Near Vision: Sn: 0.6, 0.6 with/without glasses. Color Vision, Binocular, Night & Mesopic Vision mandatory.' },
      { param: 'B-1 Standard (JE General Services, Loco Shed, Civil R&D)', detail: 'Distant Vision: 6/9, 6/12 with or without glasses (power not exceeding 4D). Near Vision: Sn: 0.6, 0.6 when reading. Color vision pass.' },
      { param: 'B-2 Standard (JE Design / Electrical, JE Works, DMS)', detail: 'Distant Vision: 6/9, 6/12 with or without glasses (power not exceeding 4D). Near Vision: Sn: 0.6 with/without glasses.' },
      { param: 'C-1 Standard (JE Workshop, Design Drawing & Estimation)', detail: 'Distant Vision: 6/12, 6/18 with or without glasses. Near Vision: Sn: 0.6 with/without glasses for reading/close work.' }
    ],
    tradeMapping: [
      {
        discipline: 'Mechanical & Allied Engineering Exam Group',
        trades: 'Mechanical, Production, Automobile, Manufacturing, Mechatronics, Industrial, Machining, Welding, Tool & Die'
      },
      {
        discipline: 'Electrical & Allied Engineering Exam Group',
        trades: 'Electrical Engineering, Electrical & Electronics, Power Systems, Electrical Machines & Drives'
      },
      {
        discipline: 'Electronics & Allied Engineering Exam Group',
        trades: 'Electronics, Electronics & Comm, Telecommunication, Applied Electronics, Instrumentation & Control, Microprocessor'
      },
      {
        discipline: 'Civil & Allied Engineering Exam Group',
        trades: 'Civil Engineering, Construction Technology, Civil Engineering & Planning, Structural Engineering'
      }
    ],
    postsList: [
      { post: 'Junior Engineer (Civil - Bridge, P.Way, Track Machine)', dept: 'Civil Engineering', level: 'Level-6 (₹35,400)', medStd: 'A-3', vacancies: 'Core Engineering' },
      { post: 'Junior Engineer (Electrical - TRD, TRS, EMU, Gen Services)', dept: 'Electrical Engineering', level: 'Level-6 (₹35,400)', medStd: 'A-3 / B-1', vacancies: 'Core Engineering' },
      { post: 'Junior Engineer (Mechanical - Workshop, Carriage & Wagon, Diesel)', dept: 'Mechanical Engineering', level: 'Level-6 (₹35,400)', medStd: 'B-1 / C-1', vacancies: 'Core Engineering' },
      { post: 'Junior Engineer (S&T - Signal & Telecommunication)', dept: 'Signal & Telecom', level: 'Level-6 (₹35,400)', medStd: 'A-3', vacancies: 'Core Engineering' },
      { post: 'Depot Material Superintendent (DMS)', dept: 'Stores Department', level: 'Level-6 (₹35,400)', medStd: 'B-2', vacancies: 'Any Engg Diploma' },
      { post: 'Junior Engineer (Design, Drawing & Estimation)', dept: 'Engineering / Electrical / Mech', level: 'Level-6 (₹35,400)', medStd: 'C-1', vacancies: 'Drawing & Design' }
    ],
    pipeline: [
      { step: '1', title: '1st Stage CBT (Screening Test)', type: 'Screening', desc: '100 Qs / 90 Mins (Maths 30, Science 30, Reasoning 25, GA 15). 15 times candidates shortlisted for 2nd Stage CBT.' },
      { step: '2', title: '2nd Stage CBT (Merit Decider)', type: '100% Final Merit', desc: '150 Qs / 120 Mins. 100 Technical Qs + 50 Non-Tech Qs. On-screen Virtual Calculator enabled. 100% merit weightage!' },
      { step: '3', title: 'Document Verification (DV)', type: 'DV (1:1 Ratio)', desc: '1:1 ratio matching vacancies directly from normalized score of 2nd Stage CBT. Original Diploma/B.Tech certificates.' },
      { step: '4', title: 'Medical Examination (ME)', type: 'Medical (A-3 to C-1)', desc: 'Railway Medical Board conducts fitness check: A-3 for Running/P.Way/TRD, B-1 for Sheds, C-1 for Workshops.' },
      { step: '5', title: 'Final Panel & Allotment', type: 'Final', desc: 'Division and zonal posting across Indian Railways as Junior Engineer.' }
    ],
    stages: [
      {
        stageName: '1st Stage CBT (Screening Test - 100 Qs / 90 Mins)',
        duration: '90 Minutes (120 Mins for Scribes)',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative (15x Shortlisted for CBT-2)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'Mathematics (Arithmetic & Advanced)', questions: 30, marks: 30 },
          { subject: 'General Science (10th CBSE Physics, Chemistry, Life Sciences)', questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', questions: 25, marks: 25 },
          { subject: 'General Awareness & Current Affairs', questions: 15, marks: 15 },
        ]
      },
      {
        stageName: '2nd Stage CBT (Final Selection Merit Decider - 150 Qs / 120 Mins)',
        duration: '120 Minutes (160 Mins for Scribes)',
        totalQuestions: 150,
        totalMarks: 150,
        marking: '+1.00 Correct, -0.33 Negative (Virtual Calculator Available)',
        passPercentage: 'UR: 40%, EWS: 40%, OBC(NCL): 30%, SC: 30%, ST: 25%',
        table: [
          { subject: 'Technical Abilities (Core Engineering Syllabus: Civil / Mech / Elect / Electronics)', questions: 100, marks: 100 },
          { subject: 'General Awareness (Current Affairs, History, Polity, Geography, Economy)', questions: 15, marks: 15 },
          { subject: 'Physics & Chemistry (10th Standard CBSE Level)', questions: 15, marks: 15 },
          { subject: 'Basics of Computers and Applications (OS, Networks, MS Office, Viruses)', questions: 10, marks: 10 },
          { subject: 'Basics of Environment and Pollution Control (Pollution, Waste, Ozone, Acid Rain)', questions: 10, marks: 10 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Technical Abilities (100 Marks in CBT-2 - Core Merit Decider!)',
        topics: [
          'Mechanical: Engineering Mechanics, Material Science, Thermodynamics, RAC, Fluid Mechanics, Industrial Engg, Machining & Machine Tool Operations.',
          'Electrical: Basic concepts, Circuit law, Magnetic Circuit, AC Fundamentals, Measurement & measuring instruments, Electrical Machines, Synchronous Machines, Transmission & Distribution.',
          'Civil: Engineering Mechanics, Building Construction & Materials, Surveying, Concrete Technology, RCC Structures, Steel Structures, Hydraulics, Soil Mechanics, Highway Engineering.',
          'Electronics: Electronic Devices & Circuits, Digital Electronics, Linear Integrated Circuits, Microprocessor & Microcontroller, Electronic Measurements, Communication Engineering.'
        ]
      },
      {
        subject: 'Basics of Computers & Environment (20 Marks in CBT-2)',
        topics: [
          'Computers: Architecture of Computers, Input/Output Devices, Storage, Networking, OS (Windows/Unix/Linux), MS Office, Data representation, Web Browsers, Security & Viruses.',
          'Environment: Ecosystems, Air, Water & Noise Pollution and control strategies, Waste Management, Global Warming, Acid Rain, Ozone Layer Depletion.'
        ]
      },
      {
        subject: '1st Stage CBT Subjects (Maths: 30 | Science: 30 | Reasoning: 25 | GA: 15)',
        topics: [
          'Mathematics: Number System, BODMAS, Decimals, Fractions, LCM-HCF, Ratio, Percentages, Mensuration, Time & Work, Speed, CI/SI, Algebra, Geometry, Trigonometry, Statistics.',
          'General Science: Physics, Chemistry and Life Sciences up to 10th Standard CBSE syllabus line by line.',
          'Reasoning: Syllogisms, Analogies, Series, Coding-Decoding, Venn Diagrams, Puzzles, Blood Relations, Direction Sense.'
        ]
      }
    ]
  },
  {
    id: 'rrb-technician',
    meritRatio: '100% Single CBT Score',
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
    meritRatio: '100% CBT Score (PET/PMT Qualifying)',
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
    meritRatio: '100% CBT Score (PET Qualifying)',
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
