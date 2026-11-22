export const RAILWAY_SYLLABUS = [
  {
    id: 'rrb-ntpc',
    name: 'RRB NTPC (CEN 05/2024 & CEN 06/2024)',
    shortName: 'NTPC (Graduate & 12th)',
    tag: 'Highest Vacancy',
    badgeColor: 'teal',
    stages: [
      {
        stageName: 'CBT-1 (Screening Stage)',
        duration: '90 Minutes (1.5 Hours)',
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
        stageName: 'CBT-2 (Merit Selection Stage - 15x Selected)',
        duration: '90 Minutes',
        totalQuestions: 120,
        totalMarks: 120,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Awareness', questions: 50, marks: 50 },
          { subject: 'Mathematics', questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning', questions: 35, marks: 35 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'General Science (CBSE 9th & 10th Level)',
        topics: [
          'Physics: Light & Optics, Electricity, Ohm\'s Law, Magnetism, Motion, Work Energy Power, Sound, Gravitation',
          'Chemistry: Periodic Table, Acids Bases & Salts, Chemical Reactions, Metals & Non-Metals, Carbon Compounds',
          'Biology: Cell Organelles, Plant & Animal Tissues, Human Digestive/Circulatory Systems, Genetics, Diseases & Vaccines'
        ]
      },
      {
        subject: 'Mathematics',
        topics: [
          'Number System, BODMAS, Decimals, Fractions, LCM & HCF',
          'Ratio & Proportion, Percentages, Mensuration (2D & 3D Area/Volume)',
          'Time & Work, Pipes & Cistern, Time Speed & Distance, Trains & Boats',
          'Simple Interest, Compound Interest, Profit Loss & Discount',
          'Elementary Algebra, Trigonometry, Geometry, Elementary Statistics'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning',
        topics: [
          'Analogies, Alphabetical & Number Series, Coding-Decoding',
          'Syllogism (100-50 & Venn Diagram), Blood Relations, Direction Sense',
          'Clock & Calendar, Dice & Cubes, Ranking & Order, Sitting Arrangement',
          'Data Sufficiency, Statement-Conclusion, Decision Making, Non-Verbal'
        ]
      },
      {
        subject: 'General Awareness & GK',
        topics: [
          'Current Affairs (Last 12 Months National & International)',
          'Indian Freedom Movement & Modern History, Indian Polity & Constitution',
          'Physical & Economic Geography, Indian Railways Facts & Heritage',
          'Space Tech (ISRO), Nuclear Energy, Environment, Computer Basics'
        ]
      }
    ]
  },
  {
    id: 'rrb-alp',
    name: 'RRB ALP (Assistant Loco Pilot - CEN 01/2024)',
    shortName: 'ALP (Loco Pilot)',
    tag: 'Technical + Psycho',
    badgeColor: 'amber',
    stages: [
      {
        stageName: 'CBT-1 (Screening Test - 75 Qs / 60 Mins)',
        duration: '60 Minutes (1 Hour)',
        totalQuestions: 75,
        totalMarks: 75,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Intelligence & Reasoning', questions: 25, marks: 25 },
          { subject: 'Mathematics', questions: 20, marks: 20 },
          { subject: 'General Science (Class 10 CBSE)', questions: 20, marks: 20 },
          { subject: 'General Awareness & Current Affairs', questions: 10, marks: 10 },
        ]
      },
      {
        stageName: 'CBT-2 Part A (Merit Decider - 100 Qs / 90 Mins)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'Basic Science & Engineering Drawing (BSED)', questions: 40, marks: 40 },
          { subject: 'Mathematics', questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning', questions: 25, marks: 25 },
          { subject: 'General Awareness', questions: 10, marks: 10 },
        ]
      },
      {
        stageName: 'CBT-2 Part B (Qualifying Trade Test - 35% Passing Mandatory)',
        duration: '60 Minutes',
        totalQuestions: 75,
        totalMarks: 75,
        marking: 'Trade Syllabus (Electrician, Fitter, Mechanical, Electronics, Wireman)',
        table: [
          { subject: 'Relevant Technical Trade Questions (DGT Syllabus)', questions: 75, marks: 75 }
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Basic Science & Engineering (BSED - 40 Marks)',
        topics: [
          'Engineering Drawing: Projections, Views, Drawing Instruments, Lines, Geometric Figures',
          'Units & Measurements, Mass, Weight & Density, Work Power & Energy',
          'Speed & Velocity, Heat & Temperature, Basic Electricity & Magnetism',
          'Levers & Simple Machines, Occupational Safety & Health, IT Literacy'
        ]
      },
      {
        subject: 'Mathematics & Reasoning',
        topics: [
          'Arithmetic: Percentage, Profit Loss, Ratio, Time & Work, Speed, CI/SI',
          'Pure Maths: Square Root, Age, Pipes, Algebra, Trigonometry',
          'Reasoning: Syllogism, Series, Coding, Direction, Analogies, Puzzles'
        ]
      }
    ]
  },
  {
    id: 'rrb-technician',
    name: 'RRB Technician Grade 1 & 3 (CEN 02/2024)',
    shortName: 'Technician Grade 1 & 3',
    tag: 'Single Stage CBT',
    badgeColor: 'emerald',
    stages: [
      {
        stageName: 'Grade 3 (Level 2 - 10th + ITI): 100 Qs / 90 Mins',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Science (Physics, Chemistry, Biology)', questions: 40, marks: 40 },
          { subject: 'Mathematics', questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning', questions: 25, marks: 25 },
          { subject: 'General Awareness', questions: 10, marks: 10 },
        ]
      },
      {
        stageName: 'Grade 1 Signal (Level 5 - Diploma/Degree): 100 Qs / 90 Mins',
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
        subject: 'Grade 3 Science Focus (40 Marks!)',
        topics: [
          '10th CBSE Science dominates with 40 full marks out of 100.',
          'Special focus on Physics numericals (Ohm\'s Law, Optics, Kinematics) and Chemistry reactions.'
        ]
      }
    ]
  },
  {
    id: 'rrb-group-d',
    name: 'RRB Group D (RRC Level-1 Posts)',
    shortName: 'Group D (Trackman/Pointsman)',
    tag: '100 Qs Single CBT',
    badgeColor: 'purple',
    stages: [
      {
        stageName: 'Single Stage CBT (100 Questions / 90 Minutes)',
        duration: '90 Minutes',
        totalQuestions: 100,
        totalMarks: 100,
        marking: '+1.00 Correct, -0.33 Negative',
        table: [
          { subject: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
          { subject: 'General Science (Physics, Chemistry, Biology)', questions: 25, marks: 25 },
          { subject: 'Mathematics', questions: 25, marks: 25 },
          { subject: 'General Awareness & Current Affairs', questions: 20, marks: 20 },
        ]
      }
    ],
    subjectBreakdown: [
      {
        subject: 'Core Focus Areas',
        topics: [
          'Science (25 Qs): Strictly NCERT Class 9 & 10 textbooks line by line.',
          'Reasoning (30 Qs): High weightage to Syllogism, Linear Sitting Arrangement, and Venn diagrams.',
          'Mathematics (25 Qs): Time & Work, Percentage, Profit & Loss, Trigonometry.',
          'Post-CBT: Physical Efficiency Test (PET).'
        ]
      }
    ]
  },
  {
    id: 'rpf-si-constable',
    name: 'RPF SI & Constable (CEN 01/2024 & CEN 02/2024)',
    shortName: 'RPF SI & Constable',
    tag: '120 Qs Rapid CBT',
    badgeColor: 'sky',
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
        subject: 'Highlights',
        topics: [
          'General Awareness carries massive 50 marks out of 120!',
          'Arithmetic focuses heavily on Speed, Distance, Percentage, Profit-Loss, and Mensuration.',
          'Subsequent Stage: Physical Measurement & Endurance Test (PMT / PET).'
        ]
      }
    ]
  }
];
