import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Layers,
  FileText,
  Zap,
  BookOpen,
  Wrench,
  Sparkles,
  Brain,
  CheckCircle2,
  Play,
  Crown,
} from 'lucide-react';
import TestCard from './TestCard';
import AdBanner from './AdBanner';
import NestedSubjectDrillPanel from './NestedSubjectDrillPanel';
import { CBT2_PART_B_TRADES } from '../data/tradeTestsData';
import {
  SECTION_LABELS,
  UPCOMING_SYLLABUS_EXAMS,
  buildAnnotatedCatalog,
  getExamCatalogStats,
  getInitialSelectionForExam,
} from '../utils/testSeriesHierarchy';

export default function TestSeriesExplorer({
  railwayTests = [],
  selection,
  onChangeSelection,
  getTestAccess,
  isGuestDemoTest,
  savedSession,
  attemptSummaries = {},
  loadingTestId,
  onStartMock,
  onResumeTest,
  onDiscardSavedSession,
  onViewAttemptResult,
  onOpenPassPro,
  onOpenPdfModal,
  onOpenCbatSimulator,
  onOpenNcertNotes,
  onOpenSyllabus,
  onStartTopicQuiz,
  isPaidPro = false,
  lang = 'hi',
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'free' | 'unattempted' | 'attempted'
  const [visibleCount, setVisibleCount] = useState(12);

  const annotatedCatalog = useMemo(() => buildAnnotatedCatalog(railwayTests), [railwayTests]);
  const examStats = useMemo(
    () => getExamCatalogStats(annotatedCatalog, isGuestDemoTest),
    [annotatedCatalog, isGuestDemoTest]
  );

  const selectedExam = useMemo(
    () => examStats.find((e) => e.key === selection?.examKey) || null,
    [examStats, selection?.examKey]
  );

  const selectedYear = useMemo(() => {
    if (!selectedExam) return null;
    return selectedExam.years.find((y) => y.key === selection?.yearKey) || selectedExam.years[0] || null;
  }, [selectedExam, selection?.yearKey]);

  const selectedCbt = useMemo(() => {
    if (!selectedYear) return null;
    return selectedYear.cbts.find((c) => c.key === selection?.cbtKey) || selectedYear.cbts[0] || null;
  }, [selectedYear, selection?.cbtKey]);

  // All tests inside selected Exam -> Year -> CBT
  const cbtScopedItems = useMemo(() => {
    if (!selectedExam || !selectedYear || !selectedCbt) return [];
    return annotatedCatalog.filter(
      (item) =>
        item.meta?.examKey === selectedExam.key &&
        item.meta?.yearKey === selectedYear.key &&
        item.meta?.cbtKey === selectedCbt.key
    );
  }, [annotatedCatalog, selectedExam, selectedYear, selectedCbt]);

  const cbtFullItems = useMemo(
    () => cbtScopedItems.filter((item) => item.meta.modeKey === 'full'),
    [cbtScopedItems]
  );
  const cbtSectionalItems = useMemo(
    () => cbtScopedItems.filter((item) => item.meta.modeKey === 'sectional'),
    [cbtScopedItems]
  );

  // Available Sectional Subjects inside selected Exam -> Year -> CBT
  const availableSectionals = useMemo(() => {
    const counts = new Map();
    for (const item of cbtSectionalItems) {
      const k = item.meta.sectionKey || 'general';
      counts.set(k, (counts.get(k) || 0) + 1);
    }
    return Array.from(counts.entries()).map(([key, count]) => ({
      key,
      count,
      ...(SECTION_LABELS[key] || { label: key, icon: '📘', short: key }),
    }));
  }, [cbtSectionalItems]);

  const activeMode = useMemo(() => {
    if (selectedCbt?.isCbatSimulator) return 'cbat';
    const raw = selection?.modeKey || 'full';
    if (raw === 'sectional' && availableSectionals.length === 0) return 'full';
    return raw;
  }, [selection?.modeKey, selectedCbt, availableSectionals.length]);

  const activeSectionKey = useMemo(() => {
    if (activeMode !== 'sectional') return 'all';
    if (selection?.sectionKey && availableSectionals.some((s) => s.key === selection.sectionKey)) {
      return selection.sectionKey;
    }
    return availableSectionals[0]?.key || 'all';
  }, [activeMode, selection?.sectionKey, availableSectionals]);

  const activeTradeKey = selection?.tradeKey || 'all';

  // Reset pagination on drill change
  useEffect(() => {
    setVisibleCount(12);
    setStatusFilter('all');
  }, [selectedExam?.key, selectedYear?.key, selectedCbt?.key, activeMode, activeSectionKey, activeTradeKey, searchQuery]);

  // Global search across ALL 651 tests when searchQuery non-empty
  const globalSearchMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return annotatedCatalog
      .filter((item) => {
        const t = item.test;
        return [t.title, t.subTitle, t.shiftName, t.trade, t.exam, t.badge]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q));
      })
      .map((item) => item.test);
  }, [annotatedCatalog, searchQuery]);

  // Displayed TestCards for Full / Sectional mode
  const displayedTests = useMemo(() => {
    let base = activeMode === 'sectional' ? cbtSectionalItems : cbtFullItems;

    if (activeMode === 'sectional' && activeSectionKey !== 'all') {
      base = base.filter((i) => i.meta.sectionKey === activeSectionKey);
    }

    if (selectedCbt?.isTradeStage && activeTradeKey !== 'all') {
      base = base.filter((i) => i.test.tradeKey === activeTradeKey);
    }

    let list = base.map((i) => i.test);

    if (statusFilter === 'free') {
      list = list.filter((t) => getTestAccess(t) === 'open');
    } else if (statusFilter === 'attempted') {
      list = list.filter((t) => Boolean(attemptSummaries[t.id]));
    } else if (statusFilter === 'unattempted') {
      list = list.filter((t) => !attemptSummaries[t.id]);
    }

    return list;
  }, [
    activeMode,
    cbtSectionalItems,
    cbtFullItems,
    activeSectionKey,
    selectedCbt,
    activeTradeKey,
    statusFilter,
    getTestAccess,
    attemptSummaries,
  ]);

  // Suggested Next Test (Continue Paused or First Unattempted Free Test)
  const suggestedTest = useMemo(() => {
    if (savedSession?.testId) {
      const found = railwayTests.find((t) => t.id === savedSession.testId);
      if (found) return { kind: 'resume', test: found };
    }
    const pool = selectedExam ? cbtFullItems.map((i) => i.test) : railwayTests;
    const unattemptedFree =
      pool.find((t) => getTestAccess(t) === 'open' && !attemptSummaries[t.id]) ||
      pool.find((t) => getTestAccess(t) === 'open') ||
      railwayTests[0];
    return unattemptedFree ? { kind: 'suggested', test: unattemptedFree } : null;
  }, [savedSession, railwayTests, selectedExam, cbtFullItems, getTestAccess, attemptSummaries]);

  const selectExam = (examKey) => {
    if (!examKey) {
      onChangeSelection({
        examKey: null,
        yearKey: null,
        cbtKey: null,
        modeKey: 'full',
        sectionKey: 'all',
        tradeKey: 'all',
      });
      return;
    }
    onChangeSelection(getInitialSelectionForExam(examKey));
  };

  const selectYear = (yrKey) => {
    if (!selectedExam) return;
    const yr = selectedExam.years.find((y) => y.key === yrKey);
    const firstCbt = yr?.cbts[0];
    onChangeSelection({
      examKey: selectedExam.key,
      yearKey: yrKey,
      cbtKey: firstCbt?.key || null,
      modeKey: firstCbt?.isCbatSimulator ? 'cbat' : 'full',
      sectionKey: 'all',
      tradeKey: 'all',
    });
  };

  const selectCbt = (cbtKey) => {
    if (!selectedExam || !selectedYear) return;
    const cbt = selectedYear.cbts.find((c) => c.key === cbtKey);
    onChangeSelection({
      examKey: selectedExam.key,
      yearKey: selectedYear.key,
      cbtKey,
      modeKey: cbt?.isCbatSimulator ? 'cbat' : 'full',
      sectionKey: 'all',
      tradeKey: 'all',
    });
  };

  const selectMode = (modeKey) => {
    onChangeSelection({
      ...selection,
      modeKey,
      sectionKey: 'all',
      tradeKey: 'all',
    });
  };

  const selectSection = (secKey) => {
    onChangeSelection({
      ...selection,
      modeKey: 'sectional',
      sectionKey: secKey,
    });
  };

  const selectTrade = (tradeKey) => {
    onChangeSelection({
      ...selection,
      tradeKey,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">
      {/* Header + Global Instant Search */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-extrabold text-xs">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Structured Exam Engine • {railwayTests.length} Bilingual Mock Tests</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Railway CBT Structured Test Series
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Exam → Year → CBT Stage → Full Papers / Subject Sectionals / Chapter &amp; Topic Drills — zero clutter, instant bilingual switch &amp; negative marking analytics.
        </p>

        {/* Global Search Input */}
        <div className="relative max-w-xl mx-auto pt-1">
          <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any exam, shift date, trade or subject (e.g. 03 Nov, NTPC UG, Electrician, Group D)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 text-xs sm:text-sm text-white focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Monetization Strip */}
      <AdBanner
        slot="header"
        onOpenPassPro={onOpenPassPro}
        onOpenPdfModal={onOpenPdfModal}
        hideAds={isPaidPro}
      />

      {/* SEARCH RESULTS OVERRIDE WHEN SEARCH ACTIVE */}
      {searchQuery.trim() ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
            <span className="font-bold text-white">
              Search Results for <span className="text-teal-300">&ldquo;{searchQuery.trim()}&rdquo;</span> ({globalSearchMatches.length} Tests)
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold cursor-pointer"
            >
              Clear Search
            </button>
          </div>
          {globalSearchMatches.length === 0 ? (
            <div className="py-12 text-center rounded-3xl bg-slate-900/50 border border-slate-800 text-sm text-slate-400">
              No tests matched your search keyword.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {globalSearchMatches.slice(0, visibleCount).map((test) => (
                <TestCard
                  key={test.id}
                  test={test}
                  accessStatus={getTestAccess(test)}
                  isGuestDemo={isGuestDemoTest(test)}
                  savedSession={savedSession}
                  attemptSummary={attemptSummaries[test.id]}
                  loadingTestId={loadingTestId}
                  onStartMock={onStartMock}
                  onResumeTest={onResumeTest}
                  onDiscardSavedSession={onDiscardSavedSession}
                  onViewAttemptResult={onViewAttemptResult}
                  onOpenPassPro={onOpenPassPro}
                />
              ))}
            </div>
          )}
        </div>
      ) : !selectedExam ? (
        /* =========================================================
           LEVEL 0: EXAM HUB (TESTBOOK /online-test-series STYLE)
           ========================================================= */
        <div className="space-y-8">
          {/* Continue / Suggested Next Test Strip */}
          {suggestedTest && (
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/40 border border-teal-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black uppercase">
                  {suggestedTest.kind === 'resume' ? '⏸ Continue Your Test' : '⚡ Suggested Next Free Test'}
                </span>
                <h2 className="text-sm sm:text-base font-black text-white">
                  {suggestedTest.test.title}
                </h2>
                <p className="text-xs text-slate-400">
                  {suggestedTest.test.totalQuestions} Qs • {suggestedTest.test.maxMarks} Marks • {suggestedTest.test.durationMinutes} Mins
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  suggestedTest.kind === 'resume'
                    ? onResumeTest(suggestedTest.test.id)
                    : onStartMock(suggestedTest.test)
                }
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:brightness-105 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg cursor-pointer shrink-0"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{suggestedTest.kind === 'resume' ? 'Resume Test Now' : 'Start Now (Free)'}</span>
              </button>
            </div>
          )}

          {/* Exam Pack Directory Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-xl font-black text-white">
                Step 1: Choose Your Target Railway Exam
              </h2>
              <span className="text-xs text-slate-400 font-semibold">
                {examStats.length} Active Exam Series
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {examStats.map((exam) => {
                const examItems = annotatedCatalog.filter((x) => x.meta?.examKey === exam.key);
                const attemptedCount = examItems.filter((x) => Boolean(attemptSummaries[x.test.id])).length;
                const progressPct =
                  exam.totalCount > 0 ? Math.round((attemptedCount / exam.totalCount) * 100) : 0;

                return (
                  <div
                    key={exam.key}
                    onClick={() => selectExam(exam.key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') selectExam(exam.key);
                    }}
                    className={`p-5 sm:p-6 rounded-3xl bg-gradient-to-br ${exam.accent} border hover:border-teal-400 transition-all shadow-xl cursor-pointer flex flex-col justify-between gap-4 group`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-11 h-11 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-2xl shrink-0">
                            {exam.icon}
                          </span>
                          <div>
                            <h3 className="text-base sm:text-lg font-black text-white group-hover:text-teal-300 transition-colors">
                              {exam.title}
                            </h3>
                            <div className="text-xs text-slate-300 mt-0.5 flex flex-wrap items-center gap-2">
                              <span className="font-bold text-white">{exam.totalCount} Total Tests</span>
                              <span>•</span>
                              <span className="font-bold text-emerald-300">{exam.freeCount} Free Tests</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>

                      {/* Nested Structure Preview Inside Exam */}
                      <div className="flex flex-wrap gap-1.5">
                        {exam.years.map((yr) => (
                          <span
                            key={yr.key}
                            className="px-2.5 py-1 rounded-lg bg-slate-950/75 border border-slate-800 text-[11px] font-bold text-slate-200"
                          >
                            📅 {yr.shortLabel} ({yr.totalCount})
                          </span>
                        ))}
                        {exam.sectionalCount > 0 && (
                          <span className="px-2.5 py-1 rounded-lg bg-slate-950/75 border border-slate-800 text-[11px] font-bold text-teal-300">
                            ⚡ {exam.sectionalCount} Sectionals
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-lg bg-slate-950/75 border border-slate-800 text-[11px] font-bold text-amber-300">
                          📚 Subject → Chapter → Topic
                        </span>
                      </div>

                      {/* Attempted Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>Your Progress</span>
                          <span className="font-bold text-slate-200">
                            {attemptedCount} / {exam.totalCount} ({progressPct}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                            style={{ width: `${Math.max(attemptedCount > 0 ? 4 : 0, progressPct)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between text-xs font-black text-teal-300">
                      <span>Choose Year &amp; CBT Stage</span>
                      <span className="group-hover:translate-x-1 transition-transform">Open Test Series →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming / Syllabus-First Exam Tracks */}
          <div className="p-5 rounded-3xl bg-slate-900/55 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                Syllabus, Vacancy Norms &amp; Prep Guides
              </div>
              <span className="text-[11px] text-slate-500">CEN 2026 Tracks</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {UPCOMING_SYLLABUS_EXAMS.map((u) => (
                <button
                  key={u.examId}
                  type="button"
                  onClick={() => onOpenSyllabus?.(u.examId)}
                  className="p-3.5 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-left flex items-center justify-between gap-2 cursor-pointer transition-all"
                >
                  <div>
                    <div className="text-xs font-bold text-white">{u.title}</div>
                    <div className="text-[10px] text-teal-400 mt-0.5">{u.tag}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================
           INSIDE CHOSEN EXAM: YEAR FIRST -> CBT -> NESTED MODES
           ========================================================= */
        <div className="space-y-5">
          {/* Top Sticky Breadcrumb + Back */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => selectExam(null)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-teal-300 font-bold cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Exams</span>
              </button>

              <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
                <span className="font-black text-white">{selectedExam.shortTitle}</span>
                {selectedYear && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="font-bold text-teal-300">{selectedYear.shortLabel}</span>
                  </>
                )}
                {selectedCbt && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="font-bold text-amber-300">{selectedCbt.shortLabel}</span>
                  </>
                )}
                {activeMode === 'sectional' && activeSectionKey !== 'all' && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="font-bold text-cyan-300">
                      {SECTION_LABELS[activeSectionKey]?.short || activeSectionKey}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Quick Exam Switcher Pill Strip */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {examStats.map((ex) => (
                <button
                  key={ex.key}
                  type="button"
                  onClick={() => selectExam(ex.key)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer shrink-0 transition-colors ${
                    ex.key === selectedExam.key
                      ? 'bg-teal-500 text-slate-950 font-black'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {ex.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 1: YEAR / CYCLE SELECTOR FIRST */}
          <section className="p-4 sm:p-5 rounded-3xl bg-[#0B1120] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-teal-400">
                <Calendar className="w-4 h-4" />
                <span>Step 1: Select Exam Year / Cycle</span>
              </div>
              <span className="text-[11px] text-slate-400">
                {selectedExam.totalCount} Tests across {selectedExam.years.length} Cycle{selectedExam.years.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedExam.years.map((yr) => {
                const active = selectedYear?.key === yr.key;
                return (
                  <button
                    key={yr.key}
                    type="button"
                    onClick={() => selectYear(yr.key)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      active
                        ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/10 border-teal-400 shadow-lg shadow-teal-950/40'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-black ${active ? 'text-teal-300' : 'text-white'}`}>
                        {yr.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{yr.subtitle}</div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-xl text-xs font-black shrink-0 ${
                        active ? 'bg-teal-400 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      {yr.totalCount} Tests
                    </span>
                  </button>
                );
              })}
            </div>

            {/* STEP 2: CBT / STAGE SELECTOR INSIDE CHOSEN YEAR */}
            {selectedYear && (
              <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                    <Layers className="w-4 h-4" />
                    <span>Step 2: Choose CBT Stage ({selectedYear.shortLabel})</span>
                  </div>
                  {selectedCbt?.patternInfo && (
                    <span className="text-[11px] font-semibold text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      {selectedCbt.patternInfo}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedYear.cbts.map((cbt) => {
                    const active = selectedCbt?.key === cbt.key;
                    return (
                      <button
                        key={cbt.key}
                        type="button"
                        onClick={() => selectCbt(cbt.key)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 border ${
                          active
                            ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/20'
                            : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-amber-400/50'
                        }`}
                      >
                        <span>{cbt.label}</span>
                        {!cbt.isCbatSimulator && (
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                              active ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-amber-300'
                            }`}
                          >
                            {cbt.totalCount}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* STAGE-3 CBAT SIMULATOR SPECIAL PANEL WHEN SELECTED */}
          {selectedCbt?.isCbatSimulator ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900 to-teal-950/40 border border-purple-500/40 space-y-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                RRB ALP Stage-3 CBAT Psychometric Simulator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Practice all 5 timed RDSO-pattern psycho test batteries (Memory Test, Following Directions, Brick/Depth Perception, Number Concentration Yes/No, and Perceptual Speed) with normalized T-Score qualification feedback.
              </p>
              <button
                type="button"
                onClick={onOpenCbatSimulator}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-black text-xs inline-flex items-center gap-2 shadow-xl cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Launch Stage-3 CBAT Batteries →</span>
              </button>
            </div>
          ) : (
            <>
              {/* STEP 3: NESTED MODE FOLDERS INSIDE CHOSEN YEAR + CBT */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  {
                    key: 'full',
                    label: selectedCbt?.isTradeStage ? 'ITI Trade Papers' : 'Full Mock Tests',
                    sub: `${cbtFullItems.length} Full Papers`,
                    icon: FileText,
                    visible: true,
                  },
                  {
                    key: 'sectional',
                    label: 'Sectional Tests',
                    sub: `${cbtSectionalItems.length} Across ${availableSectionals.length} Sec`,
                    icon: Zap,
                    visible: availableSectionals.length > 0,
                  },
                  {
                    key: 'subject',
                    label: 'Subject → Chapter → Topic',
                    sub: 'Chapter & Topic CBTs',
                    icon: Layers,
                    visible: true,
                  },
                  {
                    key: 'notes',
                    label: 'Study Notes & PDFs',
                    sub: 'NCERT Science & Solved PDF',
                    icon: BookOpen,
                    visible: true,
                  },
                ]
                  .filter((tab) => tab.visible)
                  .map((tab) => {
                    const Icon = tab.icon;
                    const active = activeMode === tab.key;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => selectMode(tab.key)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                          active
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 border-teal-300 shadow-lg shadow-teal-950/50'
                            : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-teal-500/40'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 text-xs font-black">
                            <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-slate-950' : 'text-teal-400'}`} />
                            <span className="truncate">{tab.label}</span>
                          </div>
                          <div className={`text-[10px] mt-0.5 truncate ${active ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                            {tab.sub}
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 ${active ? 'text-slate-950' : 'text-slate-500'}`} />
                      </button>
                    );
                  })}
              </div>

              {/* MODE CONTENT */}
              {activeMode === 'subject' ? (
                <NestedSubjectDrillPanel
                  cbtTests={cbtFullItems.map((i) => i.test)}
                  getTestAccess={getTestAccess}
                  examTitle={selectedExam.shortTitle}
                  yearLabel={selectedYear?.shortLabel || ''}
                  cbtLabel={selectedCbt?.shortLabel || ''}
                  onStartTopicQuiz={onStartTopicQuiz}
                  onOpenNcertNotes={onOpenNcertNotes}
                  onOpenPassPro={onOpenPassPro}
                  lang={lang}
                />
              ) : activeMode === 'notes' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-950 border border-emerald-500/35 space-y-3">
                    <div className="text-xs font-black uppercase text-emerald-400">
                      NCERT Class 9 &amp; 10 Pro Notes
                    </div>
                    <h3 className="text-lg font-black text-white">
                      Complete Physics, Chemistry &amp; Biology Visual Vault
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Recommended for <b>{selectedExam.shortTitle}</b>: interactive animated SVG simulators, railway exam hotspot callouts, bilingual formulas, and memory hacks.
                    </p>
                    <button
                      type="button"
                      onClick={onOpenNcertNotes}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs cursor-pointer"
                    >
                      Open Science Pro Notes →
                    </button>
                  </div>

                  <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/35 space-y-3">
                    <div className="text-xs font-black uppercase text-amber-400">
                      A4 Bilingual Solved Shift PDFs
                    </div>
                    <h3 className="text-lg font-black text-white">
                      Download Printable {selectedExam.shortTitle} PDF Sheets
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Export question papers in English, हिंदी, or Bilingual mode with solved answer keys and offline practice formatting.
                    </p>
                    <button
                      type="button"
                      onClick={onOpenPdfModal}
                      className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs cursor-pointer"
                    >
                      Open Solved PDF Studio →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* SECTIONAL SUBJECT SELECTOR INSIDE CHOSEN CBT */}
                  {activeMode === 'sectional' && availableSectionals.length > 0 && (
                    <div className="p-4 rounded-2xl bg-slate-900/75 border border-slate-800 space-y-2.5">
                      <div className="text-[11px] font-black uppercase tracking-wider text-teal-300">
                        Select Subject Sectional ({selectedExam.shortTitle} • {selectedYear?.shortLabel} • {selectedCbt?.shortLabel})
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {availableSectionals.map((sec) => {
                          const active = activeSectionKey === sec.key;
                          return (
                            <button
                              key={sec.key}
                              type="button"
                              onClick={() => selectSection(sec.key)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                                active
                                  ? 'bg-teal-500 text-slate-950 border-teal-300 font-black shadow'
                                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-teal-500/40'
                              }`}
                            >
                              <span>{sec.icon}</span>
                              <span>{sec.label}</span>
                              <span
                                className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                                  active ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-teal-300'
                                }`}
                              >
                                {sec.count}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TRADE FOLDER GRID INSIDE CBT-2 PART B */}
                  {selectedCbt?.isTradeStage && (
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/30 space-y-2.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                          <Wrench className="w-4 h-4 text-cyan-400" />
                          <span>Select Technical ITI Trade (35% Qualifying):</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                        <button
                          type="button"
                          onClick={() => selectTrade('all')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer shrink-0 ${
                            activeTradeKey === 'all'
                              ? 'bg-cyan-400 text-slate-950 font-black'
                              : 'bg-slate-950 border border-slate-800 text-slate-300'
                          }`}
                        >
                          All Trades ({cbtFullItems.length})
                        </button>
                        {CBT2_PART_B_TRADES.map((tr) => {
                          const cnt = cbtFullItems.filter((i) => i.test.tradeKey === tr.key).length;
                          if (!cnt) return null;
                          const active = activeTradeKey === tr.key;
                          return (
                            <button
                              key={tr.key}
                              type="button"
                              onClick={() => selectTrade(tr.key)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer shrink-0 flex items-center gap-1.5 ${
                                active
                                  ? 'bg-cyan-400 text-slate-950 font-black'
                                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                              }`}
                            >
                              <span>{tr.name}</span>
                              <span className="text-[10px] opacity-80">({cnt})</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Quick Status Filter Bar (All / Free Only / Unattempted / Attempted) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { key: 'all', label: 'All Shifts' },
                        { key: 'free', label: 'Free Unlocked Only' },
                        { key: 'unattempted', label: 'Unattempted' },
                        { key: 'attempted', label: 'Attempted' },
                      ].map((f) => (
                        <button
                          key={f.key}
                          type="button"
                          onClick={() => setStatusFilter(f.key)}
                          className={`px-3 py-1.5 rounded-xl text-[11px] font-bold cursor-pointer transition-colors border ${
                            statusFilter === f.key
                              ? 'bg-amber-400 text-slate-950 border-amber-300 font-black'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-semibold">
                      Showing {Math.min(visibleCount, displayedTests.length)} of {displayedTests.length} Tests
                    </span>
                  </div>

                  {/* TEST CARDS GRID */}
                  {displayedTests.length === 0 ? (
                    <div className="py-12 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
                      <CheckCircle2 className="w-7 h-7 text-slate-500 mx-auto" />
                      <div className="text-sm font-bold text-white">No tests match this filter yet.</div>
                      <button
                        type="button"
                        onClick={() => setStatusFilter('all')}
                        className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-black text-xs cursor-pointer"
                      >
                        Show All Tests
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {displayedTests.slice(0, visibleCount).map((test) => (
                          <TestCard
                            key={test.id}
                            test={test}
                            accessStatus={getTestAccess(test)}
                            isGuestDemo={isGuestDemoTest(test)}
                            savedSession={savedSession}
                            attemptSummary={attemptSummaries[test.id]}
                            loadingTestId={loadingTestId}
                            onStartMock={onStartMock}
                            onResumeTest={onResumeTest}
                            onDiscardSavedSession={onDiscardSavedSession}
                            onViewAttemptResult={onViewAttemptResult}
                            onOpenPassPro={onOpenPassPro}
                          />
                        ))}
                      </div>

                      {visibleCount < displayedTests.length && (
                        <div className="mt-6 text-center">
                          <button
                            type="button"
                            onClick={() => setVisibleCount((c) => c + 12)}
                            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-teal-500/40 text-teal-300 font-black text-xs cursor-pointer shadow-lg transition-all"
                          >
                            Show More Tests ({displayedTests.length - visibleCount} Remaining) ↓
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
