import React, { useState, useEffect, useMemo } from 'react';
import {
  Search, Play, Zap, Filter, Globe, BookOpen, Lock, Check, X,
  ChevronLeft, ChevronRight, Sparkles, Layers, Eye, EyeOff, RotateCcw
} from 'lucide-react';
import QuestionContentRenderer from './QuestionContentRenderer';
import { loadTestQuestions } from '../data/testQuestionLoader';
import {
  PYQ_EXAM_PACKS,
  HOT_PYQ_KEYWORDS,
  normalizeTopicName,
  getPyqOptions,
  getPyqCorrectIndex,
  buildCustomTopicQuiz,
} from '../utils/pyqHelper';

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
  const [selectedPackKey, setSelectedPackKey] = useState('alp2026');
  const [selectedTradeKey, setSelectedTradeKey] = useState('electrician');
  const [loadAllShifts, setLoadAllShifts] = useState(false);

  const [loadedQuestions, setLoadedQuestions] = useState([]);
  const [loadingPack, setLoadingPack] = useState(false);
  const [loadedShiftCount, setLoadedShiftCount] = useState(0);

  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [lang, setLang] = useState('hi');
  const [page, setPage] = useState(1);

  // Interactive Inline Answer & Solution state
  const [inlineAnswers, setInlineAnswers] = useState({});
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [quizSize, setQuizSize] = useState(10);

  const activePack = useMemo(
    () => PYQ_EXAM_PACKS.find((p) => p.key === selectedPackKey) || PYQ_EXAM_PACKS[0],
    [selectedPackKey]
  );

  // Tests belonging to active pack (filtered by trade if Trades pack selected)
  const packTests = useMemo(() => {
    let list = railwayTests.filter(activePack.filter);
    if (selectedPackKey === 'trades') {
      list = list.filter((t) => t.tradeKey === selectedTradeKey);
    }
    return list;
  }, [railwayTests, activePack, selectedPackKey, selectedTradeKey]);

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

  // Determine unlocked vs locked shifts in current pack
  const { unlockedTests, lockedTests } = useMemo(() => {
    const unlocked = [];
    const locked = [];
    packTests.forEach((t) => {
      if (getTestAccess(t) === 'open') unlocked.push(t);
      else locked.push(t);
    });
    return { unlockedTests: unlocked, lockedTests: locked };
  }, [packTests, getTestAccess]);

  // Progressive load of unlocked shift chunks for the active pack
  useEffect(() => {
    let cancelled = false;
    const targetTests = loadAllShifts
      ? unlockedTests
      : unlockedTests.slice(0, DEFAULT_BATCH_LIMIT);

    setLoadingPack(true);
    setSelectedSubject('All');
    setSelectedTopic('All');
    setPage(1);

    Promise.all(
      targetTests.map(async (test) => {
        const qs = await loadTestQuestions(test);
        return qs.map((q, idx) => ({
          ...q,
          _uid: `${test.id}_${q.id || idx}`,
          _shiftName: test.shiftName || test.badge || test.title,
          _examName: test.exam,
          _section: q.section || 'General',
          _cleanTopic: normalizeTopicName(q.topic, q.section || 'General'),
        }));
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
  }, [selectedPackKey, selectedTradeKey, loadAllShifts, unlockedTests.length]);

  // Reset batch limit when changing pack
  const handleSelectPack = (key) => {
    setSelectedPackKey(key);
    setLoadAllShifts(false);
    setSearchQuery('');
    setShowAllTopics(false);
  };

  // Extract Subjects dynamically
  const subjectsList = useMemo(() => {
    const counts = new Map();
    loadedQuestions.forEach((q) => {
      counts.set(q._section, (counts.get(q._section) || 0) + 1);
    });
    return [
      { name: 'All', count: loadedQuestions.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, [loadedQuestions]);

  // Extract Topics filtered by Subject
  const topicsList = useMemo(() => {
    const counts = new Map();
    loadedQuestions.forEach((q) => {
      if (selectedSubject !== 'All' && q._section !== selectedSubject) return;
      counts.set(q._cleanTopic, (counts.get(q._cleanTopic) || 0) + 1);
    });
    const sorted = Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
    return [{ name: 'All', count: sorted.reduce((acc, t) => acc + t.count, 0) }, ...sorted];
  }, [loadedQuestions, selectedSubject]);

  // Filter questions by Subject + Topic + Bilingual Keyword Search
  const filteredQuestions = useMemo(() => {
    const qText = searchQuery.trim().toLowerCase();
    return loadedQuestions.filter((q) => {
      if (selectedSubject !== 'All' && q._section !== selectedSubject) return false;
      if (selectedTopic !== 'All' && q._cleanTopic !== selectedTopic) return false;
      if (!qText) return true;

      const enText = String(q.question?.en || '').toLowerCase();
      const hiText = String(q.question?.hi || '').toLowerCase();
      const topicText = q._cleanTopic.toLowerCase();
      const enOpts = getPyqOptions(q, 'en').join(' ').toLowerCase();
      const hiOpts = getPyqOptions(q, 'hi').join(' ').toLowerCase();
      return (
        enText.includes(qText) ||
        hiText.includes(qText) ||
        topicText.includes(qText) ||
        enOpts.includes(qText) ||
        hiOpts.includes(qText)
      );
    });
  }, [loadedQuestions, selectedSubject, selectedTopic, searchQuery]);

  // Reset pagination whenever filters change
  useEffect(() => {
    setPage(1);
  }, [selectedSubject, selectedTopic, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE));
  const pagedQuestions = useMemo(() => {
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    return filteredQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [filteredQuestions, page]);

  const handleLaunchTopicQuiz = () => {
    if (filteredQuestions.length === 0 || !onStartTopicQuiz) return;
    const topicDisplay =
      selectedTopic !== 'All'
        ? selectedTopic
        : searchQuery.trim()
        ? `"${searchQuery.trim()}"`
        : selectedSubject !== 'All'
        ? selectedSubject
        : activePack.shortLabel;

    const customQuiz = buildCustomTopicQuiz({
      packLabel: activePack.label,
      topicLabel: topicDisplay,
      questions: filteredQuestions,
      maxQuestions: quizSize,
    });
    onStartTopicQuiz(customQuiz);
  };

  const visibleTopics = showAllTopics ? topicsList : topicsList.slice(0, 14);
  const hasMoreUnlockedToLoad = !loadAllShifts && unlockedTests.length > DEFAULT_BATCH_LIMIT;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
      {/* Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-teal-950/60 via-slate-900 to-indigo-950/40 border border-teal-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-black uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chapter & Keyword PYQ Explorer</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Topic-Wise Railway PYQ Bank & Instant Quiz
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Pura 90-min mock diye bina kisi bhi chapter (jaise <b>Trigonometry, Ohm&apos;s Law, Coding-Decoding, Periodic Table</b>) ke official Railway questions search karke Flashcards ya Instant CBT Mini-Quiz solve karein!
            </p>
          </div>

          {/* Instant Quiz Launch Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-teal-500/30 shrink-0 space-y-3 min-w-[260px]">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Filtered PYQs Ready:</span>
              <span className="font-black text-teal-300">{filteredQuestions.length} Questions</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[10, 15, 25].map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setQuizSize(cnt)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer border transition-all ${
                    quizSize === cnt
                      ? 'bg-amber-400 text-slate-950 border-amber-400'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cnt} Qs
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={filteredQuestions.length === 0 || loadingPack}
              onClick={handleLaunchTopicQuiz}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950 cursor-pointer disabled:opacity-50 transition-all"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Start {Math.min(quizSize, filteredQuestions.length || quizSize)}-Q Topic CBT Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Exam Pack Switcher */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {PYQ_EXAM_PACKS.map((pack) => (
            <button
              key={pack.key}
              type="button"
              onClick={() => handleSelectPack(pack.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedPackKey === pack.key
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {pack.label}
            </button>
          ))}
        </div>

        {/* Trade selector when Part B pack selected */}
        {selectedPackKey === 'trades' && (
          <div className="flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-slate-900/70 border border-slate-800">
            <span className="text-xs font-bold text-slate-400 mr-1">Select Trade:</span>
            {tradeOptions.map((tr) => (
              <button
                key={tr.key}
                type="button"
                onClick={() => setSelectedTradeKey(tr.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedTradeKey === tr.key
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:text-white'
                }`}
              >
                {tr.name}
              </button>
            ))}
          </div>
        )}

        {/* Pack Unlock / Load-More Status Strip */}
        <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-300">
            <Layers className="w-4 h-4 text-teal-400 shrink-0" />
            <span>
              Loaded <b className="text-white">{loadedShiftCount}</b> unlocked shifts ({loadedQuestions.length} PYQs)
            </span>
            {hasMoreUnlockedToLoad && (
              <button
                type="button"
                disabled={loadingPack}
                onClick={() => setLoadAllShifts(true)}
                className="px-3 py-1 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 font-bold cursor-pointer"
              >
                Load All {unlockedTests.length} Unlocked Shifts ({unlockedTests.length * 100}+ Qs)
              </button>
            )}
          </div>

          {lockedTests.length > 0 && (
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-amber-300 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>{lockedTests.length} more shifts locked in this pack</span>
              </span>
              {!session?.user ? (
                <button
                  type="button"
                  onClick={() => onOpenAuth('Login karke aur zyada Shifts ke PYQs free mein explore karein!')}
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

      {/* Search Bar & Bilingual Toggle */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic or keyword in English / हिंदी (e.g. Ohm, Trigonometry, प्रतिशत, Train)..."
              className="w-full pl-10 pr-9 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-teal-400 text-xs sm:text-sm text-white focus:outline-none"
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

          <button
            type="button"
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="px-4 py-3 rounded-xl bg-slate-950 border border-teal-500/40 text-teal-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Globe className="w-4 h-4 text-teal-400" />
            <span>Language: {lang === 'hi' ? 'हिंदी' : 'English'}</span>
          </button>
        </div>

        {/* Hot Keywords */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-400 font-bold mr-1">Hot Topics:</span>
          {HOT_PYQ_KEYWORDS.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setSearchQuery(searchQuery === kw ? '' : kw)}
              className={`px-2.5 py-1 rounded-lg border font-semibold cursor-pointer transition-colors ${
                searchQuery.toLowerCase() === kw.toLowerCase()
                  ? 'bg-teal-500 text-slate-950 border-teal-500'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-teal-500/40'
              }`}
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Subject Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-teal-400" />
            <span>Subject:</span>
          </span>
          {subjectsList.map((sub) => (
            <button
              key={sub.name}
              type="button"
              onClick={() => {
                setSelectedSubject(sub.name);
                setSelectedTopic('All');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                selectedSubject === sub.name
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {sub.name} ({sub.count})
            </button>
          ))}
        </div>

        {/* Chapter / Topic Pills */}
        {topicsList.length > 2 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 mr-1">Chapter:</span>
            {visibleTopics.map((tp) => (
              <button
                key={tp.name}
                type="button"
                onClick={() => setSelectedTopic(tp.name)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-all border ${
                  selectedTopic === tp.name
                    ? 'bg-amber-400 text-slate-950 border-amber-400'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {tp.name} ({tp.count})
              </button>
            ))}
            {topicsList.length > 14 && (
              <button
                type="button"
                onClick={() => setShowAllTopics(!showAllTopics)}
                className="text-[11px] font-bold text-teal-400 hover:underline px-2 cursor-pointer"
              >
                {showAllTopics ? 'Show Less ▲' : `+${topicsList.length - 14} More Chapters ▼`}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Inline Practice Question Feed */}
      {loadingPack ? (
        <div className="py-16 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
          <div className="w-7 h-7 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <div className="text-xs font-bold text-slate-300">Loading Official Railway PYQ Bank...</div>
        </div>
      ) : pagedQuestions.length === 0 ? (
        <div className="py-14 px-4 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
          <div className="text-sm font-bold text-white">No PYQs matched your filter</div>
          <p className="text-xs text-slate-400">
            Koi aur keyword search karein ya Reset Filters dabayein.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('All');
              setSelectedTopic('All');
            }}
            className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {pagedQuestions.map((q, idx) => {
            const qNum = (page - 1) * QUESTIONS_PER_PAGE + idx + 1;
            const opts = getPyqOptions(q, lang);
            const correctIdx = getPyqCorrectIndex(q, lang);
            const pickedIdx = inlineAnswers[q._uid];
            const hasAnswered = pickedIdx !== undefined;
            const isSolShown = Boolean(revealedSolutions[q._uid] || hasAnswered);

            return (
              <div
                key={q._uid}
                className="p-5 sm:p-6 rounded-3xl bg-slate-900/75 border border-slate-800 space-y-4 shadow-lg"
              >
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 font-black">
                      Q.{qNum}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-bold">
                      {q._section}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 font-semibold">
                      {q._cleanTopic}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {q._examName} • {q._shiftName} (Q.{q.shiftQuestionNo || q.id})
                  </span>
                </div>

                {/* Question Body */}
                <QuestionContentRenderer
                  text={q.question?.[lang] || q.question?.en || q.question?.hi}
                  image={q.image || q[`image_${lang}`]}
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
                        onClick={() =>
                          setInlineAnswers((prev) => ({ ...prev, [q._uid]: optIdx }))
                        }
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
                          <span className="break-words">{optText}</span>
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

                {/* Toggle Solution & Explanation */}
                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      setRevealedSolutions((prev) => ({ ...prev, [q._uid]: !isSolShown }))
                    }
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    {isSolShown ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{isSolShown ? 'Hide Solution' : 'View Official Solution'}</span>
                  </button>
                  {hasAnswered && (
                    <button
                      type="button"
                      onClick={() =>
                        setInlineAnswers((prev) => {
                          const next = { ...prev };
                          delete next[q._uid];
                          return next;
                        })
                      }
                      className="text-[11px] text-slate-400 hover:text-white cursor-pointer"
                    >
                      Clear Choice
                    </button>
                  )}
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

          {/* Pagination Controls */}
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
    </div>
  );
}
