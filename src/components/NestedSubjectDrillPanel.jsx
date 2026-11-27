import React, { useState, useEffect, useMemo } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Play,
  Layers,
  AlertTriangle,
  Lock,
  Sparkles,
  CheckCircle2,
  Eye,
  EyeOff,
  Check,
  X,
  RotateCcw,
} from 'lucide-react';
import { loadTestQuestions } from '../data/testQuestionLoader';
import { classifyQuestionTaxonomy } from '../utils/pyqTaxonomy';
import { buildCustomTopicQuiz, getPyqOptions, getPyqCorrectIndex, getQuestionImage } from '../utils/pyqHelper';
import { loadPyqProgress, savePyqAttempt, clearPyqAttempt } from '../utils/pyqProgress';
import QuestionContentRenderer, { OptionContentRenderer, MathText } from './QuestionContentRenderer';

const SUBJECT_ICON_MAP = {
  Mathematics: '📐',
  'Reasoning & Intelligence': '🧠',
  'General Science': '🔬',
  'General Awareness & GK': '🌍',
  'Basic Science & Engineering': '⚙️',
};

const MAX_PROGRESSIVE_SHIFTS = 6;

export default function NestedSubjectDrillPanel({
  cbtTests = [],
  getTestAccess,
  examTitle = '',
  yearLabel = '',
  cbtLabel = '',
  onStartTopicQuiz,
  onOpenNcertNotes,
  onOpenPassPro,
  onOpenAuth,
  lang = 'hi',
}) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [quizSize, setQuizSize] = useState(15);
  const [showInlineFeed, setShowInlineFeed] = useState(false);
  const [loadAllShifts, setLoadAllShifts] = useState(false);

  const [loadedQuestions, setLoadedQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedShiftCount, setLoadedShiftCount] = useState(0);
  const [progress, setProgress] = useState(() => loadPyqProgress());
  const [revealedSolutions, setRevealedSolutions] = useState({});

  const scopeKey = cbtTests.map((t) => t.id).slice(0, 3).join('|') + `::${cbtTests.length}`;

  const { unlockedTests, lockedTests } = useMemo(() => {
    const unlocked = [];
    const locked = [];
    for (const t of cbtTests) {
      if (!getTestAccess || getTestAccess(t) === 'open') unlocked.push(t);
      else locked.push(t);
    }
    return { unlockedTests: unlocked, lockedTests: locked };
  }, [cbtTests, getTestAccess]);

  useEffect(() => {
    setSelectedSubject(null);
    setSelectedChapter(null);
    setSelectedTopic('All');
    setShowInlineFeed(false);
    setLoadAllShifts(false);
  }, [scopeKey]);

  useEffect(() => {
    let cancelled = false;
    const targets = loadAllShifts ? unlockedTests : unlockedTests.slice(0, MAX_PROGRESSIVE_SHIFTS);
    if (targets.length === 0) {
      setLoadedQuestions([]);
      setLoadedShiftCount(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    Promise.all(
      targets.map(async (test) => {
        const qs = await loadTestQuestions(test);
        return qs.map((q, idx) => {
          const tax = classifyQuestionTaxonomy(q);
          return {
            ...q,
            _uid: `${test.id}_${q.id || idx}`,
            _testId: test.id,
            _shiftName: test.shiftName || test.badge || test.title,
            _examName: test.exam || examTitle,
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
        setLoadedShiftCount(targets.length);
      })
      .catch((err) => console.warn('NestedSubjectDrillPanel load notice:', err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [scopeKey, loadAllShifts, unlockedTests.length]);

  // Step 3A: Subjects inside selected Exam -> Year -> CBT
  const subjectsList = useMemo(() => {
    const map = new Map();
    for (const q of loadedQuestions) {
      if (!map.has(q._subject)) {
        map.set(q._subject, {
          name: q._subject,
          total: 0,
          solved: 0,
          correct: 0,
          chapters: new Set(),
        });
      }
      const entry = map.get(q._subject);
      entry.total++;
      entry.chapters.add(q._chapter);
      const att = progress.attempts[q._uid];
      if (att) {
        entry.solved++;
        if (att.isCorrect) entry.correct++;
      }
    }
    return Array.from(map.values())
      .map((item) => ({ ...item, chapterCount: item.chapters.size }))
      .sort((a, b) => b.total - a.total);
  }, [loadedQuestions, progress.attempts]);

  // Step 3B: Chapters inside Selected Subject
  const chaptersList = useMemo(() => {
    if (!selectedSubject) return [];
    const map = new Map();
    for (const q of loadedQuestions) {
      if (q._subject !== selectedSubject) continue;
      if (!map.has(q._chapter)) {
        map.set(q._chapter, {
          name: q._chapter,
          total: 0,
          solved: 0,
          correct: 0,
          topics: new Set(),
        });
      }
      const entry = map.get(q._chapter);
      entry.total++;
      entry.topics.add(q._topic);
      const att = progress.attempts[q._uid];
      if (att) {
        entry.solved++;
        if (att.isCorrect) entry.correct++;
      }
    }
    return Array.from(map.values())
      .map((item) => ({
        ...item,
        topicCount: item.topics.size,
        accuracy: item.solved > 0 ? Math.round((item.correct / item.solved) * 100) : null,
      }))
      .sort((a, b) => b.total - a.total);
  }, [loadedQuestions, selectedSubject, progress.attempts]);

  // Step 3C: Topics inside Selected Chapter
  const topicsList = useMemo(() => {
    if (!selectedSubject || !selectedChapter) return [];
    const map = new Map();
    for (const q of loadedQuestions) {
      if (q._subject !== selectedSubject || q._chapter !== selectedChapter) continue;
      map.set(q._topic, (map.get(q._topic) || 0) + 1);
    }
    const items = Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
    return [{ name: 'All', count: items.reduce((acc, i) => acc + i.count, 0) }, ...items];
  }, [loadedQuestions, selectedSubject, selectedChapter]);

  const scopedTopicQuestions = useMemo(() => {
    return loadedQuestions.filter((q) => {
      if (selectedSubject && q._subject !== selectedSubject) return false;
      if (selectedChapter && q._chapter !== selectedChapter) return false;
      if (selectedTopic !== 'All' && q._topic !== selectedTopic) return false;
      return true;
    });
  }, [loadedQuestions, selectedSubject, selectedChapter, selectedTopic]);

  const launchCbtFromPool = (pool, titleLabel) => {
    if (!pool || pool.length === 0 || !onStartTopicQuiz) return;
    const count = Math.min(quizSize, pool.length);
    const quiz = buildCustomTopicQuiz({
      questions: pool,
      limit: count,
      title: `${examTitle} (${yearLabel} • ${cbtLabel}): ${titleLabel}`,
      subTitle: `${count} Qs Custom Timed CBT • -0.33 Negative Marking`,
    });
    if (quiz) onStartTopicQuiz(quiz);
  };

  const handlePickOption = (q, optIdx) => {
    const correctIdx = getPyqCorrectIndex(q, lang);
    const nextProg = savePyqAttempt(q._uid, optIdx, correctIdx);
    setProgress({ ...nextProg });
  };

  if (loading) {
    return (
      <div className="py-12 px-4 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
        <div className="w-7 h-7 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto" />
        <div className="text-xs font-bold text-slate-300">
          Organizing {examTitle} ({yearLabel} • {cbtLabel}) by Subject → Chapter → Topic...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Scope Status & Progressive Load Strip */}
      <div className="p-3.5 rounded-2xl bg-slate-900/75 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30 font-bold">
            {loadedQuestions.length} Questions Indexed
          </span>
          <span className="text-slate-400">
            from {loadedShiftCount} unlocked {cbtLabel} paper{loadedShiftCount === 1 ? '' : 's'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!loadAllShifts && unlockedTests.length > MAX_PROGRESSIVE_SHIFTS && (
            <button
              type="button"
              onClick={() => setLoadAllShifts(true)}
              className="px-3 py-1 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/40 text-teal-300 font-bold cursor-pointer"
            >
              Load All {unlockedTests.length} Unlocked Shifts +
            </button>
          )}
          {lockedTests.length > 0 && (
            <button
              type="button"
              onClick={() => (onOpenPassPro ? onOpenPassPro() : onOpenAuth?.())}
              className="px-3 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Unlock +{lockedTests.length} More Shifts</span>
            </button>
          )}
        </div>
      </div>

      {/* Nested Drill Breadcrumb */}
      {(selectedSubject || selectedChapter) && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => {
              if (selectedChapter) {
                setSelectedChapter(null);
                setSelectedTopic('All');
                setShowInlineFeed(false);
              } else {
                setSelectedSubject(null);
              }
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-teal-300 font-bold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{selectedChapter ? 'All Chapters' : 'All Subjects'}</span>
          </button>

          <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
            <button
              type="button"
              onClick={() => {
                setSelectedSubject(null);
                setSelectedChapter(null);
                setSelectedTopic('All');
              }}
              className="hover:text-white cursor-pointer"
            >
              Subjects
            </button>
            {selectedSubject && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <button
                  type="button"
                  onClick={() => {
                    setSelectedChapter(null);
                    setSelectedTopic('All');
                  }}
                  className={`cursor-pointer ${selectedChapter ? 'hover:text-white' : 'text-teal-300 font-bold'}`}
                >
                  {selectedSubject}
                </button>
              </>
            )}
            {selectedChapter && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-amber-300 font-bold">{selectedChapter}</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* LEVEL 3A: SUBJECT CARDS GRID */}
      {!selectedSubject && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectsList.map((sub) => {
            const pct = sub.solved > 0 ? Math.round((sub.correct / sub.solved) * 100) : null;
            const icon = SUBJECT_ICON_MAP[sub.name] || (sub.name.startsWith('Part B:') ? '🔧' : '📚');
            return (
              <div
                key={sub.name}
                className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 transition-all shadow-lg flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xl">{icon}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/35 text-teal-300 text-[11px] font-black">
                      {sub.total} Qs
                    </span>
                  </div>
                  <h4 className="text-base font-black text-white">{sub.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {sub.chapterCount} Chapters • {sub.solved} Solved{pct !== null ? ` • ${pct}% Accuracy` : ''}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedSubject(sub.name)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Open Chapters ({sub.chapterCount})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      launchCbtFromPool(
                        loadedQuestions.filter((q) => q._subject === sub.name),
                        sub.name
                      )
                    }
                    title="Launch 15-Q Subject CBT"
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 font-bold text-xs flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <Play className="w-3 h-3 fill-amber-300" />
                    <span>CBT</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* LEVEL 3B: CHAPTER LIST INSIDE CHOSEN SUBJECT */}
      {selectedSubject && !selectedChapter && (
        <div className="space-y-3">
          {selectedSubject.toLowerCase().includes('science') && onOpenNcertNotes && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/50 border border-emerald-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-200 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Revise concepts visually? Complete NCERT Class 9 &amp; 10 Science Pro Notes &amp; Animated SVG Labs are ready!</span>
              </div>
              <button
                type="button"
                onClick={onOpenNcertNotes}
                className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shrink-0 cursor-pointer"
              >
                Open NCERT Pro Notes →
              </button>
            </div>
          )}

          <div className="divide-y divide-slate-800/80 rounded-3xl bg-slate-900/75 border border-slate-800 overflow-hidden">
            {chaptersList.map((chap) => {
              const isWeak = chap.accuracy !== null && chap.solved >= 3 && chap.accuracy < 60;
              return (
                <div
                  key={chap.name}
                  className="p-4 hover:bg-slate-900 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedChapter(chap.name);
                      setSelectedTopic('All');
                      setShowInlineFeed(false);
                    }}
                    className="flex-1 text-left cursor-pointer group"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-extrabold text-white group-hover:text-teal-300 transition-colors">
                        {chap.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 text-[10px] font-black">
                        {chap.total} Qs • {chap.topicCount} Topic{chap.topicCount === 1 ? '' : 's'}
                      </span>
                      {isWeak && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-black">
                          <AlertTriangle className="w-3 h-3" /> Weak ({chap.accuracy}%)
                        </span>
                      )}
                      {!isWeak && chap.accuracy !== null && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3" /> {chap.accuracy}% Accuracy
                        </span>
                      )}
                    </div>
                    <div className="mt-2 max-w-xs w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        style={{ width: `${Math.min(100, Math.round((chap.solved / Math.max(1, chap.total)) * 100))}%` }}
                      />
                    </div>
                  </button>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        launchCbtFromPool(
                          loadedQuestions.filter(
                            (q) => q._subject === selectedSubject && q._chapter === chap.name
                          ),
                          chap.name
                        )
                      }
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1 cursor-pointer shadow"
                    >
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>{Math.min(quizSize, chap.total)}-Q CBT</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedChapter(chap.name);
                        setSelectedTopic('All');
                      }}
                      className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-teal-300 font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <span>Topics</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LEVEL 3C: TOPIC FILTER + CUSTOM TIMED CBT + OPTIONAL PRACTICE FEED */}
      {selectedSubject && selectedChapter && (
        <div className="space-y-4">
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                  Topic-Wise Drill ({selectedSubject})
                </div>
                <h4 className="text-lg font-black text-white">{selectedChapter}</h4>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center rounded-xl bg-slate-950 border border-slate-800 p-1 text-xs">
                  {[10, 15, 25].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setQuizSize(sz)}
                      className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                        quizSize === sz
                          ? 'bg-teal-500 text-slate-950 font-black'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {sz} Qs
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={scopedTopicQuestions.length === 0}
                  onClick={() =>
                    launchCbtFromPool(
                      scopedTopicQuestions,
                      selectedTopic === 'All' ? selectedChapter : selectedTopic
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-105 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>
                    Start {Math.min(quizSize, scopedTopicQuestions.length)}-Q Timed CBT →
                  </span>
                </button>
              </div>
            </div>

            {/* Topics Filter Chips */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {topicsList.map((tp) => {
                const active = selectedTopic === tp.name;
                return (
                  <button
                    key={tp.name}
                    type="button"
                    onClick={() => setSelectedTopic(tp.name)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      active
                        ? 'bg-teal-500 text-slate-950 font-black shadow'
                        : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-teal-500/40'
                    }`}
                  >
                    <Layers className="w-3 h-3 shrink-0" />
                    <span>{tp.name === 'All' ? 'All Chapter Topics' : tp.name}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        active ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {tp.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400">
                Showing <b className="text-white">{scopedTopicQuestions.length}</b> matching bilingual questions
              </span>
              <button
                type="button"
                onClick={() => setShowInlineFeed((s) => !s)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-teal-300 font-bold cursor-pointer flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{showInlineFeed ? 'Hide Practice Feed' : 'Solve Questions Inline →'}</span>
              </button>
            </div>
          </div>

          {/* Optional Inline Practice Questions Feed */}
          {showInlineFeed && (
            <div className="space-y-3">
              {scopedTopicQuestions.slice(0, 20).map((q, idx) => {
                const opts = getPyqOptions(q, lang);
                const correctIdx = getPyqCorrectIndex(q, lang);
                const att = progress.attempts[q._uid];
                const pickedIdx = att?.pickedOpt;
                const hasAnswered = pickedIdx !== undefined;
                const isSolShown = Boolean(revealedSolutions[q._uid] || hasAnswered);

                return (
                  <div
                    key={q._uid}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-900/75 border border-slate-800 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-black">
                          Q.{idx + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-semibold">
                          {q._topic}
                        </span>
                      </div>
                      <span className="text-slate-400">{q._shiftName}</span>
                    </div>

                    <QuestionContentRenderer
                      text={q.question?.[lang] || q.question?.en || q.question?.hi}
                      image={getQuestionImage(q, lang)}
                      className="text-sm font-medium text-slate-100 leading-relaxed"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {opts.map((optText, optIdx) => {
                        const isCorr = optIdx === correctIdx;
                        const isPick = optIdx === pickedIdx;
                        let cls =
                          'p-2.5 rounded-xl border text-left text-xs flex items-center justify-between gap-2 cursor-pointer transition-all ';
                        if (!hasAnswered) {
                          cls += 'bg-slate-950 border-slate-800 hover:border-teal-500/50 text-slate-200';
                        } else if (isCorr) {
                          cls += 'bg-emerald-950/60 border-emerald-500 text-white font-semibold';
                        } else if (isPick) {
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
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 font-bold text-[10px] flex items-center justify-center shrink-0">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <OptionContentRenderer value={optText} />
                            </div>
                            {hasAnswered && isCorr && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                            {hasAnswered && isPick && !isCorr && <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <button
                        type="button"
                        onClick={() =>
                          setRevealedSolutions((prev) => ({ ...prev, [q._uid]: !isSolShown }))
                        }
                        className="text-teal-400 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {isSolShown ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isSolShown ? 'Hide Solution' : 'View Solution'}</span>
                      </button>
                      {hasAnswered && (
                        <button
                          type="button"
                          onClick={() => setProgress(clearPyqAttempt(q._uid))}
                          className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                      )}
                    </div>

                    {isSolShown && q.solution && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-teal-500/30 text-xs text-slate-300">
                        <MathText
                          text={
                            lang === 'hi'
                              ? q.solution.hi || q.solution.en || q.solution.approach
                              : q.solution.en || q.solution.hi || q.solution.approach
                          }
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              {scopedTopicQuestions.length > 20 && (
                <div className="text-center text-xs text-slate-400 py-2">
                  Start Timed CBT above to practice all {scopedTopicQuestions.length} questions under exam timer.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
