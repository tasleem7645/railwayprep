// Normalized 5-Level Nested Test Series Hierarchy:
// Exam -> Year / Cycle -> CBT Stage -> Mode (Full / Sectional / Subject -> Chapter -> Topic / Study Notes)

export const SECTION_LABELS = {
  maths: { label: 'Mathematics', icon: '📐', short: 'Maths' },
  reasoning: { label: 'Reasoning & Intelligence', icon: '🧠', short: 'Reasoning' },
  science: { label: 'General Science (NCERT)', icon: '🔬', short: 'Science' },
  bse: { label: 'Basic Science & Engineering', icon: '⚙️', short: 'BSE & Drawing' },
  gk: { label: 'GK & General Science', icon: '🏛️', short: 'GK & Science' },
  ga: { label: 'General Awareness', icon: '🌍', short: 'General Awareness' },
  ca: { label: 'Current Affairs Express', icon: '📰', short: 'Current Affairs' },
  general: { label: 'Subject Sectional', icon: '📚', short: 'Sectional' },
};

export const EXAM_CATALOG_DEFS = [
  {
    key: 'alp',
    title: 'RRB ALP (Assistant Loco Pilot)',
    shortTitle: 'RRB ALP',
    badge: 'CBT-1 + CBT-2 + 15 Trades + CBAT',
    accent: 'from-teal-500/20 via-slate-900 to-slate-950 border-teal-500/40',
    pillClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    icon: '🚆',
    ncertRecommended: true,
    years: [
      {
        key: '2026',
        label: '2026 Exam Cycle',
        shortLabel: 'Year 2026',
        subtitle: 'Latest CBT-1 Shifts, Sectionals & Stage-3 CBAT',
        cbts: [
          {
            key: 'cbt1',
            label: 'CBT-1 (Stage 1)',
            shortLabel: 'CBT-1',
            patternInfo: '75 Qs • 60 Mins • -1/3 Negative Marking (Qualifying)',
          },
          {
            key: 'cbat',
            label: 'CBAT / Psycho (Stage 3)',
            shortLabel: 'CBAT Psycho',
            patternInfo: '5 RDSO Psychometric Batteries • T-Score >= 42 in Each',
            isCbatSimulator: true,
          },
        ],
      },
      {
        key: '2025',
        label: '2025 Exam Cycle',
        shortLabel: 'Year 2025',
        subtitle: 'Previous CBT-1, CBT-2 Part A Merit & Part B 15 ITI Trades',
        cbts: [
          {
            key: 'cbt1',
            label: 'CBT-1 (Stage 1)',
            shortLabel: 'CBT-1',
            patternInfo: '75 Qs • 60 Mins • Bilingual Full Shifts + Sectionals',
          },
          {
            key: 'cbt2-a',
            label: 'CBT-2 Part A (Merit Decider)',
            shortLabel: 'CBT-2 Part A',
            patternInfo: '100 Qs • 90 Mins • Basic Science & Engg + Maths + Reasoning + GA',
          },
          {
            key: 'cbt2-b',
            label: 'CBT-2 Part B (15 ITI Trades)',
            shortLabel: 'CBT-2 Trades',
            patternInfo: '75 Technical Qs • 60 Mins • 35% Qualifying Marks',
            isTradeStage: true,
          },
        ],
      },
    ],
  },
  {
    key: 'ntpc-ug',
    title: 'RRB NTPC Undergraduate (CEN 06/2024)',
    shortTitle: 'RRB NTPC UG',
    badge: '57 Full Shifts + 311 Sectionals',
    accent: 'from-sky-500/20 via-slate-900 to-slate-950 border-sky-500/40',
    pillClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    icon: '🎓',
    ncertRecommended: true,
    years: [
      {
        key: '2024',
        label: '2024–25 CEN 06/2024 Cycle',
        shortLabel: 'Year 2024–25',
        subtitle: 'GA 40 • Maths 30 • Reasoning 30 Bilingual Shift Bank',
        cbts: [
          {
            key: 'cbt1',
            label: 'CBT-1 (Prelims)',
            shortLabel: 'CBT-1',
            patternInfo: '100 Qs • 90 Mins • 57 Full Shifts + Subject Sectionals',
          },
        ],
      },
    ],
  },
  {
    key: 'tech3',
    title: 'RRB Technician Grade III (CEN 02/2024)',
    shortTitle: 'RRB Tech Gr-III',
    badge: '23 Full Shifts + 92 Sectionals',
    accent: 'from-cyan-500/20 via-slate-900 to-slate-950 border-cyan-500/40',
    pillClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    icon: '🔧',
    ncertRecommended: true,
    years: [
      {
        key: '2024',
        label: '2024 CEN 02/2024 Cycle',
        shortLabel: 'Year 2024',
        subtitle: 'Science 40 • Maths 25 • Reasoning 25 • GA 10',
        cbts: [
          {
            key: 'gr3-cbt',
            label: 'Technician Grade-III CBT',
            shortLabel: 'Single CBT',
            patternInfo: '100 Qs • 90 Mins • Heavy 40-Q NCERT Science Weightage',
          },
        ],
      },
    ],
  },
  {
    key: 'groupd',
    title: 'RRB Group D (Level-1 CEN 09/2025)',
    shortTitle: 'RRB Group D',
    badge: '48 Full Shifts + Sectionals',
    accent: 'from-emerald-500/20 via-slate-900 to-slate-950 border-emerald-500/40',
    pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    icon: '🛠️',
    ncertRecommended: true,
    years: [
      {
        key: '2025',
        label: '2025 Level-1 Cycle',
        shortLabel: 'Year 2025',
        subtitle: '48 Bilingual 100-Q Shifts (Science 25 • Maths 25 • Reas 30 • GA 20)',
        cbts: [
          {
            key: 'level1',
            label: 'Level-1 Single Stage CBT',
            shortLabel: 'Level-1 CBT',
            patternInfo: '100 Qs • 90 Mins • NCERT Class 9–10 Science Core',
          },
        ],
      },
    ],
  },
];

export const UPCOMING_SYLLABUS_EXAMS = [
  { examId: 'je_dms_04_2026', title: 'RRB JE & DMS (CEN 04/2026)', tag: 'Syllabus & Practice Quizzes' },
  { examId: 'station_master_08_2026', title: 'RRB Station Master (CEN 08/2026)', tag: 'Syllabus + CBAT Prep' },
  { examId: 'rpf_si_constable', title: 'RPF SI & Constable', tag: 'Syllabus & Physical Norms' },
];

export function resolveSectionKey(test) {
  if (!test) return 'general';
  if (test.sectionalSubject && SECTION_LABELS[test.sectionalSubject]) {
    return test.sectionalSubject;
  }
  const sec0 = String(test.sections?.[0] || test.title || '').toLowerCase();
  if (sec0.includes('basic science') || sec0.includes('engineering')) return 'bse';
  if (sec0.includes('current affairs')) return 'ca';
  if (sec0.includes('general science') || sec0.includes('science')) return 'science';
  if (sec0.includes('mathematics') || sec0.includes('maths')) return 'maths';
  if (sec0.includes('reasoning') || sec0.includes('intelligence')) return 'reasoning';
  if (sec0.includes('general awareness') || sec0.includes('ga')) return 'ga';
  return 'general';
}

export function classifyCatalogTest(test) {
  if (!test) return null;

  if (test.examYear === 'ntpc-ug-2025' || test.exam?.includes('NTPC')) {
    return {
      examKey: 'ntpc-ug',
      yearKey: '2024',
      cbtKey: 'cbt1',
      modeKey: test.category === 'sectional' ? 'sectional' : 'full',
      sectionKey: resolveSectionKey(test),
    };
  }

  if (test.examYear === 'tech3-2024' || test.exam?.includes('Technician')) {
    return {
      examKey: 'tech3',
      yearKey: '2024',
      cbtKey: 'gr3-cbt',
      modeKey: test.category === 'sectional' ? 'sectional' : 'full',
      sectionKey: resolveSectionKey(test),
    };
  }

  if (test.examYear === 'groupd-2025' || test.exam?.includes('Group D')) {
    return {
      examKey: 'groupd',
      yearKey: '2025',
      cbtKey: 'level1',
      modeKey: test.category === 'sectional' ? 'sectional' : 'full',
      sectionKey: resolveSectionKey(test),
    };
  }

  if (test.stage === 'CBT-2 Part B' || test.examYear === 'cbt2-part-b') {
    return {
      examKey: 'alp',
      yearKey: '2025',
      cbtKey: 'cbt2-b',
      modeKey: 'full',
      sectionKey: test.tradeKey || 'trade',
    };
  }

  if (test.stage === 'CBT-2' || test.examYear === 'cbt2') {
    return {
      examKey: 'alp',
      yearKey: '2025',
      cbtKey: 'cbt2-a',
      modeKey: test.category === 'sectional' ? 'sectional' : 'full',
      sectionKey: resolveSectionKey(test),
    };
  }

  if (test.exam === 'RRB ALP 2025' || test.examYear === '2025') {
    return {
      examKey: 'alp',
      yearKey: '2025',
      cbtKey: 'cbt1',
      modeKey: test.category === 'sectional' ? 'sectional' : 'full',
      sectionKey: resolveSectionKey(test),
    };
  }

  return {
    examKey: 'alp',
    yearKey: '2026',
    cbtKey: 'cbt1',
    modeKey: test.category === 'sectional' ? 'sectional' : 'full',
    sectionKey: resolveSectionKey(test),
  };
}

export function buildAnnotatedCatalog(railwayTests = []) {
  return railwayTests.map((t) => ({
    test: t,
    meta: classifyCatalogTest(t),
  }));
}

export function getExamCatalogStats(annotatedCatalog = [], isGuestDemoTest) {
  return EXAM_CATALOG_DEFS.map((examDef) => {
    const items = annotatedCatalog.filter((x) => x.meta?.examKey === examDef.key);
    const fullCount = items.filter((x) => x.meta.modeKey === 'full').length;
    const sectionalCount = items.filter((x) => x.meta.modeKey === 'sectional').length;
    const freeCount = items.filter((x) => isGuestDemoTest?.(x.test)).length;

    const years = examDef.years.map((yr) => {
      const yrItems = items.filter((x) => x.meta.yearKey === yr.key);
      const cbts = yr.cbts.map((cbt) => {
        const cbtItems = yrItems.filter((x) => x.meta.cbtKey === cbt.key);
        return {
          ...cbt,
          totalCount: cbtItems.length,
          fullCount: cbtItems.filter((x) => x.meta.modeKey === 'full').length,
          sectionalCount: cbtItems.filter((x) => x.meta.modeKey === 'sectional').length,
          freeCount: cbtItems.filter((x) => isGuestDemoTest?.(x.test)).length,
        };
      });
      return {
        ...yr,
        totalCount: yrItems.length,
        cbts,
      };
    });

    return {
      ...examDef,
      totalCount: items.length,
      fullCount,
      sectionalCount,
      freeCount,
      years,
    };
  });
}

export function mapTrackKeyToNestedState(trackKey) {
  switch (trackKey) {
    case '2026':
    case 'alp-2026':
      return { examKey: 'alp', yearKey: '2026', cbtKey: 'cbt1', modeKey: null, sectionKey: null, tradeKey: null };
    case '2025':
    case 'alp-2025':
      return { examKey: 'alp', yearKey: '2025', cbtKey: 'cbt1', modeKey: null, sectionKey: null, tradeKey: null };
    case 'cbt2':
      return { examKey: 'alp', yearKey: '2025', cbtKey: 'cbt2-a', modeKey: null, sectionKey: null, tradeKey: null };
    case 'cbt2-part-b':
      return { examKey: 'alp', yearKey: '2025', cbtKey: 'cbt2-b', modeKey: 'full', sectionKey: null, tradeKey: null };
    case 'alp-cbat':
      return { examKey: 'alp', yearKey: '2026', cbtKey: 'cbat', modeKey: 'cbat', sectionKey: null, tradeKey: null };
    case 'ntpc-ug-2025':
      return { examKey: 'ntpc-ug', yearKey: '2024', cbtKey: 'cbt1', modeKey: null, sectionKey: null, tradeKey: null };
    case 'groupd-2025':
      return { examKey: 'groupd', yearKey: '2025', cbtKey: 'level1', modeKey: null, sectionKey: null, tradeKey: null };
    case 'tech3-2024':
      return { examKey: 'tech3', yearKey: '2024', cbtKey: 'gr3-cbt', modeKey: null, sectionKey: null, tradeKey: null };
    case 'alp':
    case 'ntpc-ug':
    case 'groupd':
    case 'tech3':
      return getInitialSelectionForExam(trackKey);
    default:
      return { examKey: null, yearKey: null, cbtKey: null, modeKey: null, sectionKey: null, tradeKey: null };
  }
}

export function getInitialSelectionForExam(examKey) {
  const def = EXAM_CATALOG_DEFS.find((e) => e.key === examKey);
  if (!def) {
    return { examKey: null, yearKey: null, cbtKey: null, modeKey: null, sectionKey: null, tradeKey: null };
  }
  return {
    examKey: def.key,
    yearKey: null,
    cbtKey: null,
    modeKey: null,
    sectionKey: null,
    tradeKey: null,
  };
}
