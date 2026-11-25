import React, { useState, useEffect, useMemo } from 'react';
import {
  Search, Zap, Filter, Globe, BookOpen, Lock, Check, X,
  ChevronLeft, ChevronRight, Sparkles, Layers, Eye, EyeOff, RotateCcw,
  Star, FolderTree, Flag, CheckCircle2, Printer
} from 'lucide-react';
import QuestionContentRenderer, { OptionContentRenderer } from './QuestionContentRenderer';
import ReportQuestionModal from './ReportQuestionModal';
import { loadTestQuestions } from '../data/testQuestionLoader';
import { EXAM_HIERARCHY, classifyQuestionTaxonomy } from '../utils/pyqTaxonomy';
import {
  HOT_PYQ_KEYWORDS,
  getPyqOptions,
  getPyqCorrectIndex,
  buildCustomTopicQuiz,
} from '../utils/pyqHelper';
import { renderPrintableShiftWindow } from '../utils/shiftPdfGenerator';
import {
  loadPyqProgress,
  savePyqAttempt,
  clearPyqAttempt,
  togglePyqBookmark,
} from '../utils/pyqProgress';

const QUESTIONS_PER_PAGE = 15;
const DEFAULT_BATCH_LIMIT = 5;

export default function PYQExplorerView({
  railwayTests,
  getTestAccess,
  session,
  onOpenAuth,
  onOpenPassPro,
  onStartTopicQuiz,
}) {
  // Level 1: Exam ('alp' | 'groupd') & Level 2: Year / Stage
  const [selectedExamKey, setSelectedExamKey] = useState('alp');
  const [selectedYearKey, setSelectedYearKey] = useState('alp-2026');
  const [selectedTradeKey, setSelectedTradeKey] = useState('electrician');
  const [loadAllShifts, setLoadAllShifts] = useState(false);

  const [loadedQuestions, setLoadedQuestions] = useState([]);
  const [loadingPack, setLoadingPack] = useState(false);
  const [loadedShiftCount, setLoadedShiftCount] = useState(0);

  // Level 3: Subject -> Level 4: Chapter -> Level 5: Specific Topic + Status + Search
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'unattempted' | 'wrong' | 'solved' | 'starred'
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllChapters, setShowAllChapters] = useState(false);
  const [lang, setLang] = useState('hi');
  const [page, setPage] = useState(1);

  // Persistent Mastery & Bookmarks + Solution Toggle + Report Modal
  const [progress, setProgress] = useState(() => loadPyqProgress());
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [quizSize, setQuizSize] = useState(10);
  const [reportTarget, setReportTarget] = useState(null);

  const activeExam = useMemo(
    () => EXAM_HIERARCHY.find((e) => e.key === selectedExamKey) || EXAM_HIERARCHY[0],
    [selectedExamKey]
  );

  const activeYear = useMemo(
    () => activeExam.years.find((y) => y.key === selectedYearKey) || activeExam.years[0],
    [activeExam, selectedYearKey]
  );

  const tradeOptions = useMemo(() => {
    const tradeTests = railwayTests.filter((t) => t.stage === 'CBT-2 Part B');
    const seen = new Map();
    tradeTests.forEach((t) => {
      if (t.tradeKey && !seen.has(t.tradeKey)) {
        seen.set(t.tradeKey, t.trade || t.tradeKey);
      }
    });
    return Array.from(seen.entries()).map(([key, name]) => ({ key, name }));
  }, [railwayTests]);

  const packTests = useMemo(() => {
    let list = railwayTests.filter(activeYear.filter);
    if (activeYear.key === 'alp-cbt2-b') {
      list = list.filter((t) => t.tradeKey === selectedTradeKey);
    }
    return list;
  }, [railwayTests, activeYear, selectedTradeKey]);

  const { unlockedTests, lockedTests } = useMemo(() => {
    const unlocked = [];
    const locked = [];
    packTests.forEach((t) => {
      if (getTestAccess(t) === 'open') unlocked.push(t);
      else locked.push(t);
    });
    return { unlockedTests: unlocked, lockedTests: locked };
  }, [packTests, getTestAccess]);

  // Progressive lazy loading of unlocked shift chunks for selected Exam -> Year
  useEffect(() => {
    let cancelled = false;
    const targetTests = loadAllShifts
      ? unlockedTests
      : unlockedTests.slice(0, DEFAULT_BATCH_LIMIT);

    setLoadingPack(true);
    setSelectedSubject('All');
    setSelectedChapter('All');
    setSelectedTopic('All');
    setPage(1);

    Promise.all(
      targetTests.map(async (test) => {
        const qs = await loadTestQuestions(test);
        return qs.map((q, idx) => {
          const tax = classifyQuestionTaxonomy(q);
          return {
            ...q,
            _uid: `${test.id}_${q.id || idx}`,
            _shiftName: test.shiftName || test.badge || test.title,
            _examName: test.exam,
            _subject: tax.subject,
            _chapter: tax.chapter,
            _topic: tax.topic,
          };
        });
      })
    )
      .then((chunks) => {
        if (cancelled) return;
        setLoadedQuestions(chunks.flat());
        setLoadedShiftCount(targetTests.length);
      })
      .catch((err) => {
        console.warn('PYQ pack load warning:', err);
      })
      .finally(() => {
        if (!cancelled) setLoadingPack(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeYear.key, selectedTradeKey, loadAllShifts, unlockedTests.length]);

  const handleSelectExam = (examKey) => {
    const targetExam = EXAM_HIERARCHY.find((e) => e.key === examKey) || EXAM_HIERARCHY[0];
    setSelectedExamKey(targetExam.key);
    setSelectedYearKey(targetExam.years[0].key);
    setLoadAllShifts(false);
    setSearchQuery('');
    setShowAllChapters(false);
  };

  const handleSelectYear = (yearKey) => {
    setSelectedYearKey(yearKey);
    setLoadAllShifts(false);
    setSearchQuery('');
    setShowAllChapters(false);
  };

  // Level 3: Subjects inside selected Exam -> Year
  const subjectsList = useMemo(() => {
    const counts = new Map();
    loadedQuestions.forEach((q) => {
      counts.set(q._subject, (counts.get(q._subject) || 0) + 1);
    });
    return [
      { name: 'All', count: loadedQuestions.length },
      ...Array.from(counts.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
    ];
  }, [loadedQuestions]);

  // Level 4: Chapters inside selected Subject (+ live mastery progress)
  const chaptersList = useMemo(() => {
    const map = new Map();
    loadedQuestions.forEach((q) => {
      if (selectedSubject !== 'All' && q._subject !== selectedSubject) return;
      if (!map.has(q._chapter)) {
        map.set(q._chapter, { name: q._chapter, total: 0, solved: 0, correct: 0 });
      }
      const entry = map.get(q._chapter);
      entry.total++;
      const att = progress.attempts[q._uid];
      if (att) {
        entry.solved++;
        if (att.isCorrect) entry.correct++;
      }
    });
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [loadedQuestions, selectedSubject, progress.attempts]);

  // Level 5: Specific Topics inside selected Chapter
  const topicsList = useMemo(() => {
    const counts = new Map();
    loadedQuestions.forEach((q) => {
      if (selectedSubject !== 'All' && q._subject !== selectedSubject) return;
      if (selectedChapter !== 'All' && q._chapter !== selectedChapter) return;
      counts.set(q._topic, (counts.get(q._topic) || 0) + 1);
    });
    const sorted = Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
    return [{ name: 'All', count: sorted.reduce((acc, t) => acc + t.count, 0) }, ...sorted];
  }, [loadedQuestions, selectedSubject, selectedChapter]);

  // Filtered Questions before Status Filter (for mastery summary)
  const taxonomyAndSearchMatched = useMemo(() => {
    const qText = searchQuery.trim().toLowerCase();
    return loadedQuestions.filter((q) => {
      if (selectedSubject !== 'All' && q._subject !== selectedSubject) return false;
      if (selectedChapter !== 'All' && q._chapter !== selectedChapter) return false;
      if (selectedTopic !== 'All' && q._topic !== selectedTopic) return false;
      if (!qText) return true;

      const enText = String(q.question?.en || '').toLowerCase();
      const hiText = String(q.question?.hi || '').toLowerCase();
      const chapText = q._chapter.toLowerCase();
      const topText = q._topic.toLowerCase();
      const enOpts = getPyqOptions(q, 'en').join(' ').toLowerCase();
      const hiOpts = getPyqOptions(q, 'hi').join(' ').toLowerCase();
      return (
        enText.includes(qText) ||
        hiText.includes(qText) ||
        chapText.includes(qText) ||
        topText.includes(qText) ||
        enOpts.includes(qText) ||
        hiOpts.includes(qText)
      );
    });
  }, [loadedQuestions, selectedSubject, selectedChapter, selectedTopic, searchQuery]);

  // Apply Status Filter ('all' | 'unattempted' | 'wrong' | 'solved' | 'starred')
  const { filteredQuestions, scopeStats } = useMemo(() => {
    let solved = 0;
    let correct = 0;
    let wrong = 0;
    let starred = 0;

    const filtered = taxonomyAndSearchMatched.filter((q) => {
      const att = progress.attempts[q._uid];
      const isStar = Boolean(progress.bookmarks[q._uid]);
      if (att) {
        solved++;
        if (att.isCorrect) correct++;
        else wrong++;
      }
      if (isStar) starred++;

      if (statusFilter === 'unattempted') return !att;
      if (statusFilter === 'wrong') return Boolean(att && !att.isCorrect);
      if (statusFilter === 'solved') return Boolean(att);
      if (statusFilter === 'starred') return isStar;
      return true;
    });

    return {
      filteredQuestions: filtered,
      scopeStats: {
        total: taxonomyAndSearchMatched.length,
        solved,
        correct,
        wrong,
        unattempted: Math.max(0, taxonomyAndSearchMatched.length - solved),
        starred,
        accuracy: solved > 0 ? Math.round((correct / solved) * 100) : 0,
      },
    };
  }, [taxonomyAndSearchMatched, progress, statusFilter]);

  useEffect(() => {
    setPage(1);
  }, [selectedSubject, selectedChapter, selectedTopic, searchQuery, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE));
  const pagedQuestions = useMemo(() => {
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    return filteredQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [filteredQuestions, page]);

  const handleLaunchTopicQuiz = (overridePool = null) => {
    const pool = Array.isArray(overridePool) ? overridePool : filteredQuestions;
    if (pool.length === 0 || !onStartTopicQuiz) return;

    const effectiveSize = quizSize === 'all' ? Math.min(50, pool.length) : quizSize;
    const customQuiz = buildCustomTopicQuiz({
      examLabel: `${activeExam.shortLabel} • ${activeYear.shortLabel}`,
      subjectLabel: selectedSubject,
      chapterLabel: selectedChapter,
      topicLabel: selectedTopic !== 'All' ? selectedTopic : searchQuery.trim() || 'All',
      questions: pool,
      maxQuestions: effectiveSize,
    });
    onStartTopicQuiz(customQuiz);
  };

  const handleExportChapterPdf = () => {
    if (filteredQuestions.length === 0) return;
    const picked = filteredQuestions.slice(0, 50).map((q, idx) => ({
      ...q,
      id: idx + 1,
      shiftQuestionNo: idx + 1,
    }));
    const chapterHeading =
      selectedTopic !== 'All'
        ? selectedTopic
        : selectedChapter !== 'All'
        ? selectedChapter
        : selectedSubject !== 'All'
        ? selectedSubject
        : `${activeExam.shortLabel} (${activeYear.shortLabel})`;
    renderPrintableShiftWindow(
      {
        id: `pyq_${activeYear.key}_${chapterHeading}`,
        title: `Chapter PYQ Solved PDF: ${chapterHeading} (${picked.length} Qs)`,
        subTitle: `${activeExam.label} • ${activeYear.label} • Curated Bilingual PYQs`,
        maxMarks: picked.length,
        shiftTime: `${picked.length} Questions`,
        questions: picked,
      },
      { langMode: lang === 'hi' ? 'bilingual' : 'en', layoutMode: 'solved' }
    );
  };

  const handlePickOption = (q, optIdx) => {
    const correctIdx = getPyqCorrectIndex(q, lang);
    const updated = savePyqAttempt(q._uid, optIdx, optIdx === correctIdx, {
      subject: q._subject,
      chapter: q._chapter,
      topic: q._topic,
    });
    setProgress(updated);
  };

  const visibleChapters = showAllChapters ? chaptersList : chaptersList.slice(0, 12);
  const hasMoreUnlockedToLoad = !loadAllShifts && unlockedTests.length > DEFAULT_BATCH_LIMIT;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
      {/* Top Hero & Instant Quiz Box */}
      <div className="rounded-3xl bg-gradient-to-br from-teal-950/60 via-slate-900 to-indigo-950/40 border border-teal-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-black uppercase mb-3">
              <FolderTree className="w-3.5 h-3.5" />
              <span>5-Level Smart PYQ Drill: Exam → Year → Subject → Chapter → Topic</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Topic-Wise Railway PYQ Explorer & Quiz Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Apne target <b>Exam</b> aur <b>Year</b> ke andar kisi bhi <b>Subject → Chapter → Specific Topic</b> par click karke practice karein, chapter mastery track karein, ⭐ bookmark karein aur instant CBT Mock test lagayein!
            </p>
          </div>

          {/* Dynamic Instant Quiz Launch Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-teal-500/35 shrink-0 space-y-3 min-w-[270px]">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Selected Pool Ready:</span>
              <span className="font-black text-teal-300">{filteredQuestions.length} PYQs</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[10, 15, 25, 'all'].map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setQuizSize(cnt)}
                  className={`py-1.5 rounded-lg text-xs font-bold cursor-pointer border transition-all ${
                    quizSize === cnt
                      ? 'bg-amber-400 text-slate-950 border-amber-400'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cnt === 'all' ? 'Max 50' : `${cnt} Qs`}
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={filteredQuestions.length === 0 || loadingPack}
              onClick={() => handleLaunchTopicQuiz()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950 cursor-pointer disabled:opacity-50 transition-all"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>
                Start {quizSize === 'all' ? Math.min(50, filteredQuestions.length) : Math.min(quizSize, filteredQuestions.length || quizSize)}-Q Topic CBT Quiz
              </span>
            </button>
            <button
              type="button"
              disabled={filteredQuestions.length === 0 || loadingPack}
              onClick={handleExportChapterPdf}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/40 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export Chapter PDF (Up to 50 Qs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* LEVEL 1 & LEVEL 2: EXAM -> YEAR / STAGE NAVIGATOR */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/75 border border-slate-800 space-y-4">
        {/* Step 1: Exam Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
            1. Exam:
          </span>
          {EXAM_HIERARCHY.map((ex) => (
            <button
              key={ex.key}
              type="button"
              onClick={() => handleSelectExam(ex.key)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedExamKey === ex.key
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* Step 2: Year / Cycle Selector inside Selected Exam */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
            2. Year / Stage:
          </span>
          {activeExam.years.map((yr) => (
            <button
              key={yr.key}
              type="button"
              onClick={() => handleSelectYear(yr.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                activeYear.key === yr.key
                  ? 'bg-amber-400 text-slate-950 border-amber-400 font-black shadow-md'
                  : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {yr.label}
            </button>
          ))}
        </div>

        {/* Optional Trade Sub-Selector when CBT-2 Part B selected */}
        {activeYear.key === 'alp-cbt2-b' && (
          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/80">
            <span className="text-[11px] font-bold text-cyan-300 mr-1">Trade:</span>
            {tradeOptions.map((tr) => (
              <button
                key={tr.key}
                type="button"
                onClick={() => setSelectedTradeKey(tr.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer border ${
                  selectedTradeKey === tr.key
                    ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
                }`}
              >
                {tr.name}
              </button>
            ))}
          </div>
        )}

        {/* Shift Load / Unlock Status Bar */}
        <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-300">
            <Layers className="w-4 h-4 text-teal-400 shrink-0" />
            <span>
              Loaded <b className="text-white">{loadedShiftCount}</b> / {packTests.length} shifts ({loadedQuestions.length} official PYQs)
            </span>
            {hasMoreUnlockedToLoad && (
              <button
                type="button"
                disabled={loadingPack}
                onClick={() => setLoadAllShifts(true)}
                className="px-3 py-1 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 font-bold cursor-pointer"
              >
                Load All {unlockedTests.length} Unlocked Shifts ({unlockedTests.length * (activeExam.key === 'groupd' ? 100 : 75)} Qs)
              </button>
            )}
          </div>

          {lockedTests.length > 0 && (
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-amber-300 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>{lockedTests.length} more shifts locked</span>
              </span>
              {!session?.user ? (
                <button
                  type="button"
                  onClick={() => onOpenAuth('Login karke Shifts 2–3 ke PYQs free mein unlock karein!')}
                  className="px-2.5 py-1 rounded-lg bg-teal-500 text-slate-950 font-black cursor-pointer"
                >
                  Free Login
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onOpenPassPro}
                  className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-black cursor-pointer"
                >
                  Unlock All (₹49 / 4 Referrals)
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* LEVEL 3: SUBJECT -> LEVEL 4: CHAPTER GRID -> LEVEL 5: TOPIC DRILLDOWN */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
        {/* Live Breadcrumb Path */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-1.5 text-slate-300">
            <span className="font-bold text-teal-400">{activeExam.shortLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="font-bold text-amber-300">{activeYear.shortLabel}</span>
            {selectedSubject !== 'All' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <button
                  type="button"
                  onClick={() => { setSelectedChapter('All'); setSelectedTopic('All'); }}
                  className="font-bold text-white hover:text-teal-300 cursor-pointer"
                >
                  {selectedSubject}
                </button>
              </>
            )}
            {selectedChapter !== 'All' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <button
                  type="button"
                  onClick={() => setSelectedTopic('All')}
                  className="font-bold text-emerald-300 hover:underline cursor-pointer"
                >
                  {selectedChapter}
                </button>
              </>
            )}
            {selectedTopic !== 'All' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="font-black text-cyan-300">{selectedTopic}</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-teal-500/40 text-teal-300 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span>{lang === 'hi' ? 'हिंदी' : 'English'}</span>
          </button>
        </div>

        {/* Step 3: Subject Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
            3. Subject:
          </span>
          {subjectsList.map((sub) => (
            <button
              key={sub.name}
              type="button"
              onClick={() => {
                setSelectedSubject(sub.name);
                setSelectedChapter('All');
                setSelectedTopic('All');
                setShowAllChapters(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                selectedSubject === sub.name
                  ? 'bg-teal-500 text-slate-950 font-black'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {sub.name} ({sub.count})
            </button>
          ))}
        </div>

        {/* Step 4: Chapter Cards Grid with Mastery Progress */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              4. Choose Chapter ({chaptersList.length} Chapters):
            </span>
            <div className="flex items-center gap-2">
              {selectedChapter !== 'All' && (
                <button
                  type="button"
                  onClick={() => { setSelectedChapter('All'); setSelectedTopic('All'); }}
                  className="text-xs font-bold text-teal-400 hover:underline cursor-pointer"
                >
                  Show All Chapters
                </button>
              )}
              {chaptersList.length > 12 && (
                <button
                  type="button"
                  onClick={() => setShowAllChapters(!showAllChapters)}
                  className="text-xs font-bold text-amber-300 hover:underline cursor-pointer"
                >
                  {showAllChapters ? 'Collapse Chapters ▲' : `+${chaptersList.length - 12} More Chapters ▼`}
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {visibleChapters.map((ch) => {
              const isSelected = selectedChapter === ch.name;
              const pct = ch.total > 0 ? Math.round((ch.solved / ch.total) * 100) : 0;
              return (
                <button
                  key={ch.name}
                  type="button"
                  onClick={() => {
                    setSelectedChapter(isSelected ? 'All' : ch.name);
                    setSelectedTopic('All');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-teal-950/60 border-teal-400 shadow-md shadow-teal-950/50'
                      : 'bg-slate-950/65 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-xs font-bold line-clamp-2 ${isSelected ? 'text-teal-200' : 'text-white'}`}>
                      {ch.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-black text-amber-300 shrink-0">
                      {ch.total} Qs
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>{ch.solved}/{ch.total} Practiced</span>
                      {ch.solved > 0 && (
                        <span className="text-emerald-400 font-bold">
                          {Math.round((ch.correct / ch.solved) * 100)}% Acc
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 5: Specific Topic Pills inside Selected Chapter */}
        {selectedChapter !== 'All' && topicsList.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/80">
            <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 mr-1">
              5. Specific Topic:
            </span>
            {topicsList.map((tp) => (
              <button
                key={tp.name}
                type="button"
                onClick={() => setSelectedTopic(tp.name)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                  selectedTopic === tp.name
                    ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                    : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-cyan-500/40'
                }`}
              >
                {tp.name} ({tp.count})
              </button>
            ))}
          </div>
        )}

        {/* Keyword Search + Hot Keywords */}
        <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
          <div className="relative">
            <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keyword inside selected Exam / Chapter (e.g. Ohm, LCM, Train, प्रतिशत)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-teal-400 text-xs sm:text-sm text-white focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="text-slate-400 font-bold mr-1">Quick Search:</span>
            {HOT_PYQ_KEYWORDS.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => setSearchQuery(searchQuery === kw ? '' : kw)}
                className={`px-2.5 py-0.5 rounded-lg border font-semibold cursor-pointer transition-colors ${
                  searchQuery.toLowerCase() === kw.toLowerCase()
                    ? 'bg-teal-500 text-slate-950 border-teal-500'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-teal-500/40'
                }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SMART STATUS FILTER & MASTERY SUMMARY BAR */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/75 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { key: 'all', label: `All (${scopeStats.total})` },
            { key: 'unattempted', label: `Unattempted (${scopeStats.unattempted})` },
            { key: 'wrong', label: `Wrong (${scopeStats.wrong})` },
            { key: 'solved', label: `Solved (${scopeStats.solved})` },
            { key: 'starred', label: `Starred ⭐ (${scopeStats.starred})` },
          ].map((st) => (
            <button
              key={st.key}
              type="button"
              onClick={() => setStatusFilter(st.key)}
              className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer border transition-all ${
                statusFilter === st.key
                  ? 'bg-teal-500 text-slate-950 border-teal-500'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {scopeStats.solved > 0 && (
            <span className="text-emerald-300 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Scope Mastery: {scopeStats.accuracy}% ({scopeStats.correct}/{scopeStats.solved})</span>
            </span>
          )}
          {scopeStats.wrong > 0 && (
            <button
              type="button"
              onClick={() =>
                handleLaunchTopicQuiz(
                  taxonomyAndSearchMatched.filter((q) => progress.attempts[q._uid] && !progress.attempts[q._uid].isCorrect)
                )
              }
              className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold cursor-pointer"
            >
              Re-Test {scopeStats.wrong} Wrong Qs
            </button>
          )}
          {scopeStats.starred > 0 && (
            <button
              type="button"
              onClick={() =>
                handleLaunchTopicQuiz(
                  taxonomyAndSearchMatched.filter((q) => Boolean(progress.bookmarks[q._uid]))
                )
              }
              className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold cursor-pointer"
            >
              Quiz {scopeStats.starred} Starred ⭐
            </button>
          )}
        </div>
      </div>

      {/* INLINE QUESTION PRACTICE FEED */}
      {loadingPack ? (
        <div className="py-16 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
          <div className="w-7 h-7 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <div className="text-xs font-bold text-slate-300">
            Loading {activeExam.shortLabel} ({activeYear.shortLabel}) Official PYQs...
          </div>
        </div>
      ) : pagedQuestions.length === 0 ? (
        <div className="py-14 px-4 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
          <div className="text-sm font-bold text-white">Is filter ke liye koi PYQ nahi mila</div>
          <p className="text-xs text-slate-400">
            Koi aur Chapter/Topic ya Status filter select karein.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('All');
              setSelectedChapter('All');
              setSelectedTopic('All');
              setStatusFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {pagedQuestions.map((q, idx) => {
            const qNum = (page - 1) * QUESTIONS_PER_PAGE + idx + 1;
            const opts = getPyqOptions(q, lang);
            const correctIdx = getPyqCorrectIndex(q, lang);
            const attempt = progress.attempts[q._uid];
            const pickedIdx = attempt?.pickedOpt;
            const hasAnswered = pickedIdx !== undefined;
            const isStarred = Boolean(progress.bookmarks[q._uid]);
            const isSolShown = Boolean(revealedSolutions[q._uid] || hasAnswered);

            return (
              <div
                key={q._uid}
                className="p-5 sm:p-6 rounded-3xl bg-slate-900/75 border border-slate-800 space-y-4 shadow-lg"
              >
                {/* Header Badges + Bookmark Star + Provenance */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 font-black">
                      Q.{qNum}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-200 font-bold">
                      {q._subject}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 font-semibold">
                      {q._chapter}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 font-semibold">
                      {q._topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                      {q._examName} • {q._shiftName} (Q.{q.shiftQuestionNo || q.id})
                    </span>
                    <button
                      type="button"
                      onClick={() => setProgress(togglePyqBookmark(q._uid))}
                      title={isStarred ? 'Remove Bookmark' : 'Star for Revision'}
                      className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${
                        isStarred
                          ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-amber-300'
                      }`}
                    >
                      <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-300' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Mobile Shift Source */}
                <div className="text-[10px] text-slate-400 sm:hidden">
                  {q._examName} • {q._shiftName} (Q.{q.shiftQuestionNo || q.id})
                </div>

                {/* Question Body */}
                <QuestionContentRenderer
                  text={q.question?.[lang] || q.question?.en || q.question?.hi}
                  image={q[`image_${lang}`] || q.image}
                  className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed"
                />

                {/* 4 Clickable Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {opts.map((optText, optIdx) => {
                    const isCorrect = optIdx === correctIdx;
                    const isPicked = optIdx === pickedIdx;
                    const letter = String.fromCharCode(65 + optIdx);

                    let cls =
                      'p-3 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between gap-2 transition-all cursor-pointer ';
                    if (!hasAnswered) {
                      cls +=
                        'bg-slate-950/70 border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 text-slate-200';
                    } else if (isCorrect) {
                      cls += 'bg-emerald-950/60 border-emerald-500 text-white font-semibold';
                    } else if (isPicked) {
                      cls += 'bg-rose-950/60 border-rose-500 text-rose-200 font-semibold';
                    } else {
                      cls += 'bg-slate-950/40 border-slate-800/60 text-slate-500';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handlePickOption(q, optIdx)}
                        className={cls}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                              hasAnswered && isCorrect
                                ? 'bg-emerald-500 text-slate-950'
                                : hasAnswered && isPicked
                                ? 'bg-rose-500 text-white'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {letter}
                          </span>
                          <OptionContentRenderer value={optText} />
                        </div>
                        {hasAnswered && isCorrect && (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                        {hasAnswered && isPicked && !isCorrect && (
                          <X className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action Footer: View Solution / Clear / Report Issue */}
                <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() =>
                      setRevealedSolutions((prev) => ({ ...prev, [q._uid]: !isSolShown }))
                    }
                    className="font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    {isSolShown ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{isSolShown ? 'Hide Solution' : 'View Official Solution'}</span>
                  </button>

                  <div className="flex items-center gap-3 text-[11px]">
                    {hasAnswered && (
                      <button
                        type="button"
                        onClick={() => setProgress(clearPyqAttempt(q._uid))}
                        className="text-slate-400 hover:text-white cursor-pointer"
                      >
                        Reset Answer
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setReportTarget({
                          uid: q._uid,
                          testId: q._testId || null,
                          shiftTitle: `${q._examName || ''} - ${q._shiftName || ''}`,
                          questionNo: q.shiftQuestionNo || q.id,
                          previewText:
                            typeof q.question === 'object'
                              ? q.question?.[lang] || q.question?.en || q.question?.hi || ''
                              : String(q.question || ''),
                        })
                      }
                      className="text-slate-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Flag className="w-3 h-3" />
                      <span>Report Issue</span>
                    </button>
                  </div>
                </div>

                {isSolShown && q.solution && (
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-teal-500/30 text-xs text-slate-300 space-y-2 leading-relaxed">
                    {q.solution.approach && (
                      <div>
                        <strong className="text-teal-300">Verdict: </strong>
                        <span>{q.solution.approach}</span>
                      </div>
                    )}
                    {q.solution.keyConcept && (
                      <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 font-mono text-amber-300">
                        {q.solution.keyConcept}
                      </div>
                    )}
                    <p className="text-slate-400">
                      {lang === 'hi'
                        ? q.solution.hi || q.solution.en
                        : q.solution.en || q.solution.hi}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => {
                  setPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <span className="font-bold text-slate-300">
                Page <b className="text-teal-300">{page}</b> of {totalPages} ({filteredQuestions.length} PYQs)
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => {
                  setPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-black flex items-center gap-1 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {reportTarget && (
        <ReportQuestionModal
          targetQuestion={reportTarget}
          onClose={() => setReportTarget(null)}
        />
      )}
    </div>
  );
}
