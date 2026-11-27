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
    if (!selectedExam || !selection?.yearKey) return null;
    return selectedExam.years.find((y) => y.key === selection.yearKey) || null;
  }, [selectedExam, selection?.yearKey]);

  const selectedCbt = useMemo(() => {
    if (!selectedYear || !selection?.cbtKey) return null;
    return selectedYear.cbts.find((c) => c.key === selection.cbtKey) || null;
  }, [selectedYear, selection?.cbtKey]);

  // All tests strictly inside selected Exam -> Year -> CBT
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

  const availableSectionals = useMemo(() => {
    const counts = new Map();
    for (const item of cbtSectionalItems) {
      const k = item.meta.sectionKey || 'general';
      counts.set(k, (counts.get(k) || 0) + 1);
    }
    return Array.from(counts.entries()).map(([key, count]) => ({
      key,
      count,
      freeCount: cbtSectionalItems.filter(
        (i) => i.meta.sectionKey === key && isGuestDemoTest(i.test)
      ).length,
      ...(SECTION_LABELS[key] || { label: key, icon: '📘', short: key }),
    }));
  }, [cbtSectionalItems, isGuestDemoTest]);

  const activeMode = selectedCbt?.isCbatSimulator
    ? 'cbat'
    : selection?.modeKey || null;

  const activeSectionKey =
    activeMode === 'sectional' && selection?.sectionKey && availableSectionals.some((s) => s.key === selection.sectionKey)
      ? selection.sectionKey
      : null;

  const activeTradeKey =
    activeMode === 'full' && selectedCbt?.isTradeStage && selection?.tradeKey && selection.tradeKey !== 'all'
      ? selection.tradeKey
      : selection?.tradeKey === 'all'
      ? 'all'
      : null;

  useEffect(() => {
    setVisibleCount(12);
    setStatusFilter('all');
  }, [selectedExam?.key, selectedYear?.key, selectedCbt?.key, activeMode, activeSectionKey, activeTradeKey, searchQuery]);

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

  const displayedTests = useMemo(() => {
    if (!activeMode || !['full', 'sectional'].includes(activeMode)) return [];
    if (activeMode === 'sectional' && !activeSectionKey) return [];
    if (activeMode === 'full' && selectedCbt?.isTradeStage && !activeTradeKey) return [];

    let base = activeMode === 'sectional' ? cbtSectionalItems : cbtFullItems;
    if (activeMode === 'sectional' && activeSectionKey) {
      base = base.filter((i) => i.meta.sectionKey === activeSectionKey);
    }
    if (selectedCbt?.isTradeStage && activeTradeKey && activeTradeKey !== 'all') {
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
    activeSectionKey,
    activeTradeKey,
    selectedCbt,
    cbtSectionalItems,
    cbtFullItems,
    statusFilter,
    getTestAccess,
    attemptSummaries,
  ]);

  const suggestedTest = useMemo(() => {
    if (savedSession?.testId) {
      const found = railwayTests.find((t) => t.id === savedSession.testId);
      if (found) return { kind: 'resume', test: found };
    }
    const pool = railwayTests;
    const unattemptedFree =
      pool.find((t) => getTestAccess(t) === 'open' && !attemptSummaries[t.id]) ||
      pool.find((t) => getTestAccess(t) === 'open') ||
      railwayTests[0];
    return unattemptedFree ? { kind: 'suggested', test: unattemptedFree } : null;
  }, [savedSession, railwayTests, getTestAccess, attemptSummaries]);

  // Step Up (One Folder Level Back)
  const handleBackOneStep = () => {
    if (activeSectionKey) {
      onChangeSelection({ ...selection, sectionKey: null });
    } else if (activeTradeKey) {
      onChangeSelection({ ...selection, tradeKey: null });
    } else if (activeMode && !selectedCbt?.isCbatSimulator) {
      onChangeSelection({ ...selection, modeKey: null, sectionKey: null, tradeKey: null });
    } else if (selectedCbt) {
      onChangeSelection({ examKey: selectedExam.key, yearKey: selectedYear.key, cbtKey: null, modeKey: null, sectionKey: null, tradeKey: null });
    } else if (selectedYear) {
      onChangeSelection({ examKey: selectedExam.key, yearKey: null, cbtKey: null, modeKey: null, sectionKey: null, tradeKey: null });
    } else {
      onChangeSelection({ examKey: null, yearKey: null, cbtKey: null, modeKey: null, sectionKey: null, tradeKey: null });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getBackLabel = () => {
    if (activeSectionKey) return 'Sectionals';
    if (activeTradeKey) return 'All 15 Trades';
    if (activeMode && !selectedCbt?.isCbatSimulator) return selectedCbt?.shortLabel || 'Categories';
    if (selectedCbt) return selectedYear?.shortLabel || 'CBT Stages';
    if (selectedYear) return selectedExam?.shortTitle || 'Year Cycles';
    return 'All Exams';
  };

  const renderStickyNavHeader = () => (
    <div className="sticky top-14 sm:top-16 z-20 p-3 sm:p-3.5 rounded-2xl bg-[#070B18]/95 backdrop-blur-md border border-slate-800 shadow-lg flex flex-wrap items-center justify-between gap-2 text-xs">
      <div className="flex flex-wrap items-center gap-2 min-w-0">
        <button
          type="button"
          onClick={handleBackOneStep}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-teal-300 font-bold cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{getBackLabel()}</span>
        </button>

        {/* Clickable Trail */}
        <div className="flex flex-wrap items-center gap-1 text-slate-400 text-[11px] sm:text-xs">
          <button
            type="button"
            onClick={() => onChangeSelection(getInitialSelectionForExam(selectedExam.key))}
            className="hover:text-white font-bold text-slate-200 cursor-pointer"
          >
            {selectedExam.shortTitle}
          </button>
          {selectedYear && (
            <>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <button
                type="button"
                onClick={() =>
                  onChangeSelection({
                    examKey: selectedExam.key,
                    yearKey: selectedYear.key,
                    cbtKey: null,
                    modeKey: null,
                    sectionKey: null,
                    tradeKey: null,
                  })
                }
                className="hover:text-white font-bold text-teal-300 cursor-pointer"
              >
                {selectedYear.shortLabel}
              </button>
            </>
          )}
          {selectedCbt && (
            <>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <button
                type="button"
                onClick={() =>
                  onChangeSelection({
                    examKey: selectedExam.key,
                    yearKey: selectedYear.key,
                    cbtKey: selectedCbt.key,
                    modeKey: selectedCbt.isCbatSimulator ? 'cbat' : null,
                    sectionKey: null,
                    tradeKey: null,
                  })
                }
                className="hover:text-white font-bold text-amber-300 cursor-pointer"
              >
                {selectedCbt.shortLabel}
              </button>
            </>
          )}
          {activeMode && !selectedCbt?.isCbatSimulator && (
            <>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold text-slate-200 capitalize">
                {activeMode === 'subject' ? 'Subject → Chapter → Topic' : `${activeMode}`}
              </span>
            </>
          )}
          {activeSectionKey && (
            <>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold text-cyan-300">
                {SECTION_LABELS[activeSectionKey]?.short || activeSectionKey}
              </span>
            </>
          )}
          {activeTradeKey && activeTradeKey !== 'all' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold text-cyan-300">
                {CBT2_PART_B_TRADES.find((tr) => tr.key === activeTradeKey)?.name || activeTradeKey}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 space-y-5">
      {/* Compact Header + Global Search */}
      <div className="text-center space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-extrabold text-xs">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>{railwayTests.length} Bilingual Railway CBT Tests</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Railway Online Test Series
        </h1>
        <div className="relative max-w-xl mx-auto pt-1">
          <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search exam, shift date, trade or subject (e.g. 03 Nov, NTPC, Electrician)..."
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

      {/* SEARCH OVERRIDE */}
      {searchQuery.trim() ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            <span className="font-bold text-white">
              Results for <span className="text-teal-300">&ldquo;{searchQuery.trim()}&rdquo;</span> ({globalSearchMatches.length})
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-3 py-1 rounded-lg bg-slate-800 text-teal-300 font-bold cursor-pointer"
            >
              Clear
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      ) : !selectedExam ? (
        /* =========================================================
           LEVEL 0: EXAMS VERTICAL LIST HUB
           ========================================================= */
        <div className="space-y-5">
          {suggestedTest && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/40 border border-teal-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase">
                  {suggestedTest.kind === 'resume' ? '⏸ Continue Test' : '⚡ Suggested Free Test'}
                </span>
                <div className="text-sm font-black text-white">{suggestedTest.test.title}</div>
                <div className="text-[11px] text-slate-400">
                  {suggestedTest.test.totalQuestions} Qs • {suggestedTest.test.durationMinutes} Mins
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  suggestedTest.kind === 'resume'
                    ? onResumeTest(suggestedTest.test.id)
                    : onStartMock(suggestedTest.test)
                }
                className="px-4 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>{suggestedTest.kind === 'resume' ? 'Resume' : 'Start Free'}</span>
              </button>
            </div>
          )}

          {/* Clean Clickable Exam List Rows (>) */}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-900/75 text-[11px] font-black uppercase tracking-wider text-teal-400">
              Select Exam Series ({examStats.length})
            </div>
            {examStats.map((exam) => {
              const examItems = annotatedCatalog.filter((x) => x.meta?.examKey === exam.key);
              const attemptedCount = examItems.filter((x) => Boolean(attemptSummaries[x.test.id])).length;

              return (
                <button
                  key={exam.key}
                  type="button"
                  onClick={() => onChangeSelection(getInitialSelectionForExam(exam.key))}
                  className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-11 h-11 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl shrink-0">
                      {exam.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-white group-hover:text-teal-300 transition-colors">
                        {exam.title}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-slate-400 mt-1">
                        <span className="font-bold text-slate-200">{exam.totalCount} Tests</span>
                        <span>•</span>
                        <span className="font-bold text-emerald-400">{exam.freeCount} Free</span>
                        <span>•</span>
                        <span>{exam.years.length} Year Cycle{exam.years.length > 1 ? 's' : ''}</span>
                        {attemptedCount > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-teal-300 font-semibold">{attemptedCount} Done</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Syllabus & Prep List Rows */}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden">
            <div className="px-5 py-3 bg-slate-900/60 text-[11px] font-black uppercase tracking-wider text-slate-400">
              Syllabus &amp; Other Railway Exams
            </div>
            {UPCOMING_SYLLABUS_EXAMS.map((u) => (
              <button
                key={u.examId}
                type="button"
                onClick={() => onOpenSyllabus?.(u.examId)}
                className="w-full px-5 py-3.5 hover:bg-slate-900/70 flex items-center justify-between gap-3 text-left cursor-pointer group"
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-teal-300">
                    {u.title}
                  </div>
                  <div className="text-[11px] text-teal-400">{u.tag}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ) : !selectedYear ? (
        /* =========================================================
           LEVEL 1: CHOOSE YEAR FIRST (VERTICAL LIST ROWS >)
           ========================================================= */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-900/75 flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-teal-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Step 1: Choose Exam Year ({selectedExam.shortTitle})
              </span>
              <span className="text-slate-400">{selectedExam.totalCount} Tests</span>
            </div>
            {selectedExam.years.map((yr) => (
              <button
                key={yr.key}
                type="button"
                onClick={() =>
                  onChangeSelection({
                    examKey: selectedExam.key,
                    yearKey: yr.key,
                    cbtKey: null,
                    modeKey: null,
                    sectionKey: null,
                    tradeKey: null,
                  })
                }
                className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
              >
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-teal-300 transition-colors">
                    {yr.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{yr.subtitle}</div>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-teal-300 text-xs font-black">
                    {yr.totalCount} Tests
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-teal-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : !selectedCbt ? (
        /* =========================================================
           LEVEL 2: CHOOSE CBT STAGE INSIDE CHOSEN YEAR
           ========================================================= */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-900/75 flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-amber-400">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Step 2: Choose CBT Stage ({selectedYear.shortLabel})
              </span>
              <span className="text-slate-400">{selectedYear.totalCount} Tests</span>
            </div>
            {selectedYear.cbts.map((cbt) => (
              <button
                key={cbt.key}
                type="button"
                onClick={() =>
                  onChangeSelection({
                    examKey: selectedExam.key,
                    yearKey: selectedYear.key,
                    cbtKey: cbt.key,
                    modeKey: cbt.isCbatSimulator ? 'cbat' : null,
                    sectionKey: null,
                    tradeKey: null,
                  })
                }
                className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
              >
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-amber-300 transition-colors">
                    {cbt.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{cbt.patternInfo}</div>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  {cbt.isCbatSimulator ? (
                    <span className="px-2.5 py-1 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-black">
                      5 Batteries
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-amber-300 text-xs font-black">
                      {cbt.totalCount} Tests
                    </span>
                  )}
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : !activeMode ? (
        /* =========================================================
           LEVEL 3: CHOOSE MODE / CATEGORY LIST INSIDE CBT (TESTBOOK STYLE >)
           ========================================================= */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-900/75 flex flex-wrap items-center justify-between gap-2 text-[11px] font-black uppercase tracking-wider text-teal-300">
              <span>{selectedExam.shortTitle} • {selectedYear.shortLabel} • {selectedCbt.shortLabel}</span>
              <span className="text-slate-400 font-semibold normal-case">{selectedCbt.patternInfo}</span>
            </div>

            {/* Folder 1: Full Tests / ITI Trades */}
            <button
              type="button"
              onClick={() =>
                onChangeSelection({
                  ...selection,
                  modeKey: 'full',
                  sectionKey: null,
                  tradeKey: null,
                })
              }
              className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/35 text-teal-400 flex items-center justify-center shrink-0">
                  {selectedCbt.isTradeStage ? <Wrench className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                </span>
                <div>
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-teal-300">
                    {selectedCbt.isTradeStage ? 'ITI Trade Papers (15 Trades)' : 'Full Length Mock Tests'}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {cbtFullItems.length} Full Papers • {selectedCbt.freeCount} Free
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-teal-300 shrink-0" />
            </button>

            {/* Folder 2: Sectional Tests */}
            {availableSectionals.length > 0 && (
              <button
                type="button"
                onClick={() =>
                  onChangeSelection({
                    ...selection,
                    modeKey: 'sectional',
                    sectionKey: null,
                    tradeKey: null,
                  })
                }
                className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/35 text-amber-400 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm sm:text-base font-black text-white group-hover:text-amber-300">
                      Sectional Tests ({cbtSectionalItems.length})
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {availableSectionals.map((s) => s.short).join(' • ')}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-300 shrink-0" />
              </button>
            )}

            {/* Folder 3: Subject -> Chapter -> Topic Tests */}
            <button
              type="button"
              onClick={() =>
                onChangeSelection({
                  ...selection,
                  modeKey: 'subject',
                  sectionKey: null,
                  tradeKey: null,
                })
              }
              className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/35 text-purple-300 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-purple-300">
                    Subject-Wise → Chapter → Topic Tests
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Pick Subject → Chapter → Topic Custom Timed CBT &amp; Practice
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-purple-300 shrink-0" />
            </button>

            {/* Folder 4: Study Notes & PDFs */}
            <button
              type="button"
              onClick={() =>
                onChangeSelection({
                  ...selection,
                  modeKey: 'notes',
                  sectionKey: null,
                  tradeKey: null,
                })
              }
              className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-emerald-300">
                    Study Notes &amp; Printable Solved PDFs
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    NCERT Class 9–10 Visual Science Notes &amp; Shift PDF Studio
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-300 shrink-0" />
            </button>
          </div>

          <AdBanner slot="header" onOpenPassPro={onOpenPassPro} onOpenPdfModal={onOpenPdfModal} hideAds={isPaidPro} />
        </div>
      ) : activeMode === 'cbat' ? (
        /* CBAT PSYCHOMETRIC SIMULATOR */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900 to-teal-950/40 border border-purple-500/40 space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white">RRB ALP Stage-3 CBAT Psychometric Simulator</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              All 5 RDSO timed psychometric batteries (Memory, Following Directions, Depth Perception, Concentration, Perceptual Speed) with normalized T-Score cutoff gauge.
            </p>
            <button
              type="button"
              onClick={onOpenCbatSimulator}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-black text-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Launch CBAT Batteries →</span>
            </button>
          </div>
        </div>
      ) : activeMode === 'subject' ? (
        /* SUBJECT -> CHAPTER -> TOPIC VERTICAL DRILL */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <NestedSubjectDrillPanel
            cbtTests={cbtFullItems.map((i) => i.test)}
            getTestAccess={getTestAccess}
            examTitle={selectedExam.shortTitle}
            yearLabel={selectedYear.shortLabel}
            cbtLabel={selectedCbt.shortLabel}
            onBackToCategories={handleBackOneStep}
            onStartTopicQuiz={onStartTopicQuiz}
            onOpenNcertNotes={onOpenNcertNotes}
            onOpenPassPro={onOpenPassPro}
            lang={lang}
          />
        </div>
      ) : activeMode === 'notes' ? (
        /* STUDY NOTES & PDF STUDIO */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-xl">
            <button
              type="button"
              onClick={() => onOpenNcertNotes('maths')}
              className="w-full p-5 hover:bg-slate-900/75 flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <div>
                <div className="text-xs font-black uppercase text-amber-400">Maths Mastery Pro (Zero-to-Topper)</div>
                <div className="text-base font-black text-white mt-0.5 group-hover:text-amber-300">
                  Visual Maths Deep-Dive, 5 SVG Labs &amp; 2–4 Method PYQs (Ch 1 Live!)
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Number System, Divisibility, HCF–LCM, VBODMAS, Recurring Decimals &amp; Surds.
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-300 shrink-0" />
            </button>
            <button
              type="button"
              onClick={() => onOpenNcertNotes('ncert')}
              className="w-full p-5 hover:bg-slate-900/75 flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <div>
                <div className="text-xs font-black uppercase text-emerald-400">NCERT Class 9 &amp; 10 Pro Vault</div>
                <div className="text-base font-black text-white mt-0.5 group-hover:text-emerald-300">
                  Visual Science Notes &amp; Animated SVG Labs (26 Chapters)
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Physics, Chemistry &amp; Biology complete railway exam hotspot notes.
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-300 shrink-0" />
            </button>
            <button
              type="button"
              onClick={onOpenPdfModal}
              className="w-full p-5 hover:bg-slate-900/75 flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <div>
                <div className="text-xs font-black uppercase text-amber-400">A4 Bilingual Shift PDF Studio</div>
                <div className="text-base font-black text-white mt-0.5 group-hover:text-amber-300">
                  Export Printable {selectedExam.shortTitle} Question &amp; Solution PDFs
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Download solved papers in English, हिंदी, or Bilingual layout.
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-300 shrink-0" />
            </button>
          </div>
        </div>
      ) : activeMode === 'sectional' && !activeSectionKey ? (
        /* SECTIONAL LEVEL 4A: VERTICAL SUBJECT LIST ROWS */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-900/75 text-[11px] font-black uppercase tracking-wider text-amber-400">
              Select Sectional Subject ({availableSectionals.length})
            </div>
            {availableSectionals.map((sec) => (
              <button
                key={sec.key}
                type="button"
                onClick={() => onChangeSelection({ ...selection, sectionKey: sec.key })}
                className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl shrink-0">{sec.icon}</span>
                  <div>
                    <div className="text-sm sm:text-base font-black text-white group-hover:text-teal-300">
                      {sec.label}
                    </div>
                    <div className="text-xs text-slate-400">
                      {sec.count} Tests{sec.freeCount > 0 ? ` • ${sec.freeCount} Free` : ''}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-teal-300 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ) : activeMode === 'full' && selectedCbt.isTradeStage && !activeTradeKey ? (
        /* CBT-2 PART B LEVEL 4B: 15 ITI TRADES VERTICAL LIST ROWS */
        <div className="space-y-4">
          {renderStickyNavHeader()}
          <div className="rounded-3xl bg-[#0B1120] border border-slate-800 divide-y divide-slate-800/80 overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-slate-900/75 text-[11px] font-black uppercase tracking-wider text-cyan-400">
              Select Your Technical Trade (15 Trades • 35% Qualifying)
            </div>
            {CBT2_PART_B_TRADES.map((tr) => {
              const cnt = cbtFullItems.filter((i) => i.test.tradeKey === tr.key).length;
              if (!cnt) return null;
              return (
                <button
                  key={tr.key}
                  type="button"
                  onClick={() => onChangeSelection({ ...selection, tradeKey: tr.key })}
                  className="w-full p-4 sm:px-6 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div>
                    <div className="text-sm font-black text-white group-hover:text-cyan-300">
                      {tr.name} <span className="text-xs font-normal text-slate-400">({tr.nameHi})</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{cnt} Mock Shifts • Shift 1 Free</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-300 shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* LEAF LEVEL: TEST CARDS INSIDE CHOSEN FOLDER */
        <div className="space-y-4">
          {renderStickyNavHeader()}

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { key: 'all', label: 'All' },
                { key: 'free', label: 'Free Unlocked' },
                { key: 'unattempted', label: 'Unattempted' },
                { key: 'attempted', label: 'Attempted' },
              ].map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setStatusFilter(f.key)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold cursor-pointer border transition-colors ${
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="mt-4 text-center">
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
    </div>
  );
}
