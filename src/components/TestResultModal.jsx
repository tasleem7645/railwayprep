import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, CheckCircle2, XCircle, Clock, Zap, Target, 
  RotateCcw, ArrowRight, Eye, ChevronDown, ChevronUp, Share2, Award,
  Globe, Check, X, HelpCircle, BookOpen, Layers, BarChart3, Filter,
  Printer, Bookmark, Flag, Send
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';
import AdBanner from './AdBanner';
import QuestionContentRenderer, { OptionContentRenderer, MathText } from './QuestionContentRenderer';
import MultiMethodSolutionBox from './MultiMethodSolutionBox';
import ExpectedCutoffCard from './ExpectedCutoffCard';
import ShiftLeaderboardTab from './ShiftLeaderboardTab';
import ShareScoreCardModal from './ShareScoreCardModal';
import ReportQuestionModal from './ReportQuestionModal';
import { getCutoffBenchmark, evaluateCutoffStatus } from '../utils/cutoffCalculator';
import { renderPrintableShiftWindow } from '../utils/shiftPdfGenerator';
import { getQuestionImage } from '../utils/pyqHelper';
import { supabase } from '../lib/supabaseClient';
import { notifyStudyStateChanged } from '../utils/studySyncEvents';
import {
  computeTestSpeedReport,
  classifyQuestionSpeed,
  formatShortSec,
} from '../utils/speedAnalytics';

export default function TestResultModal({
  result,
  user = null,
  profile = null,
  studyStreak = null,
  onClose,
  onRetake,
  onOpenPassPro,
  onOpenMistakes,
  onOpenAuth,
  hideAds = false,
}) {
  const {
    test,
    answers,
    timeTakenSeconds,
    attemptSyncedAt,
    isHistoricalReview = false,
    questionTimes = {},
  } = result;
  
  // Tabs: 'overview' | 'leaderboard' | 'solutions'
  const [activeTab, setActiveTab] = useState('overview');
  const [isShareCardOpen, setIsShareCardOpen] = useState(false);

  // Real-Time Shift Leaderboard State
  const [leaderboard, setLeaderboard] = useState(null);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);
  const [leaderboardError, setLeaderboardError] = useState(false);
  
  // Solutions Review Filters: 'all' | 'correct' | 'incorrect' | 'unattempted' | 'marked'
  const [solutionFilter, setSolutionFilter] = useState('all');
  const [selectedSection, setSelectedSection] = useState('All');
  
  // Currently inspected question in detailed review
  const [reviewIndex, setReviewIndex] = useState(0);
  
  // Language in review mode: 'hi' | 'en'
  const [reviewLang, setReviewLang] = useState('hi');
  const [reportTarget, setReportTarget] = useState(null);

  // Trigger celebration confetti for fresh submissions only
  useEffect(() => {
    if (isHistoricalReview) return;
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, [isHistoricalReview]);

  // Auto-save incorrect questions to Mistake Notebook (skip when reviewing past history)
  useEffect(() => {
    if (isHistoricalReview) return;
    try {
      const wrongQuestions = test.questions
        .filter((q) => {
          const userAns = answers[q.id];
          const isCorrectAns = userAns === q.correctIndex;
          return userAns !== undefined && !isCorrectAns;
        })
        .map((q) => ({
          id: q.mistakeId || `${test.id}_${q.id}`,
          shiftQuestionNo: q.shiftQuestionNo || q.id,
          subject: q.subject || q.section || 'General Science',
          topic: q.topic || 'Official Question',
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          ...(q.correctIndexHi !== undefined ? { correctIndexHi: q.correctIndexHi } : {}),
          ...(q.image ? { image: q.image } : {}),
          ...(q.image_hi ? { image_hi: q.image_hi } : {}),
          userAnswerIndex: answers[q.id],
          solution: q.solution
        }));

      if (wrongQuestions.length > 0) {
        const parsed = JSON.parse(localStorage.getItem('railwayprep_mistake_notebook') || '[]');
        const existing = Array.isArray(parsed) ? parsed : [];
        const existingIds = new Set(existing.map((m) => m.id));
        const toAdd = wrongQuestions.filter((w) => !existingIds.has(w.id));
        if (toAdd.length > 0) {
          localStorage.setItem('railwayprep_mistake_notebook', JSON.stringify([...existing, ...toAdd]));
          notifyStudyStateChanged();
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [test, answers, isHistoricalReview]);

  // Compute test metrics
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  // Section-wise metrics accumulator
  const sectionStats = {};

  test.questions.forEach((q) => {
    const userAns = answers[q.id];
    const sec = q.section || 'General';

    if (!sectionStats[sec]) {
      sectionStats[sec] = { total: 0, correct: 0, wrong: 0, unattempted: 0 };
    }
    sectionStats[sec].total++;

    const isCorrect = userAns !== undefined && userAns === q.correctIndex;

    if (userAns === undefined) {
      unattemptedCount++;
      sectionStats[sec].unattempted++;
    } else if (isCorrect) {
      correctCount++;
      sectionStats[sec].correct++;
    } else {
      wrongCount++;
      sectionStats[sec].wrong++;
    }
  });

  const rawScore = (correctCount * test.positiveMarks) - (wrongCount * test.negativeMarks);
  const finalScore = Math.max(0, parseFloat(rawScore.toFixed(2)));
  const accuracy = (correctCount + wrongCount) > 0 
    ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
    : 0;
  const speedReport = computeTestSpeedReport(test.questions, answers, questionTimes);

  const jumpToQuestionInSolutions = (questionId) => {
    setSolutionFilter('all');
    setSelectedSection('All');
    const targetIdx = test.questions.findIndex((q) => q.id === questionId);
    setReviewIndex(targetIdx >= 0 ? targetIdx : 0);
    setActiveTab('solutions');
  };

  // Deterministic fallback estimate when leaderboard has < 1 recorded attempt
  const estPercentile = Math.min(99.6, Math.max(15, (finalScore / Math.max(1, test.maxMarks)) * 98)).toFixed(1);
  const estRank = Math.max(1, Math.round((1 - (parseFloat(estPercentile) / 100)) * 15400));

  const fetchLeaderboard = async () => {
    setLoadingLeaderboard(true);
    setLeaderboardError(false);
    try {
      const { data, error } = await supabase.rpc('get_shift_leaderboard', {
        p_test_id: test.id,
        p_user_score: finalScore,
      });
      if (error) throw error;
      if (data) setLeaderboard(data);
    } catch (e) {
      console.warn('Leaderboard fetch notice:', e);
      setLeaderboardError(true);
    } finally {
      setLoadingLeaderboard(false);
    }
  };

  useEffect(() => {
    if (!test.isCustomTopicQuiz) {
      fetchLeaderboard();
    }
  }, [test.id, finalScore, attemptSyncedAt, test.isCustomTopicQuiz]);

  const hasLiveLeaderboard = Boolean(leaderboard && leaderboard.total_participants >= 1);
  const displayPercentile = hasLiveLeaderboard && leaderboard.user_percentile !== null
    ? Number(leaderboard.user_percentile).toFixed(1)
    : estPercentile;

  const getOptionsList = (q, lang) => {
    if (!q || !q.options) return [];
    if (Array.isArray(q.options)) {
      return q.options.map(o => (typeof o === 'object' && o !== null ? (o[lang] || o['en'] || '') : String(o)));
    }
    return q.options[lang] || q.options['en'] || q.options['hi'] || [];
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  // Filter questions for the solutions review list
  const filteredQuestions = test.questions.filter((q) => {
    const userAns = answers[q.id];
    const isCorrect = userAns === q.correctIndex;
    const isAttempted = userAns !== undefined;

    if (selectedSection !== 'All' && q.section !== selectedSection) {
      return false;
    }

    if (solutionFilter === 'correct') return isCorrect;
    if (solutionFilter === 'incorrect') return isAttempted && !isCorrect;
    if (solutionFilter === 'unattempted') return !isAttempted;
    return true; // 'all'
  });

  const activeReviewQ = filteredQuestions[reviewIndex] || filteredQuestions[0] || test.questions[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#070B18]/95 backdrop-blur-md overflow-y-auto p-3 sm:p-6 flex justify-center select-none">
      <div className="w-full max-w-5xl bg-[#090D1A] border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl my-auto">
        
        {/* Top Header Card */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/20 shrink-0">
              <Trophy className="w-7 h-7 font-black" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2 py-0.5 rounded font-extrabold text-[11px] ${
                  isHistoricalReview
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'bg-teal-500/20 text-teal-300'
                }`}>
                  {isHistoricalReview ? 'SAVED ATTEMPT REVIEW' : 'TEST COMPLETED'}
                </span>
                <span className="text-xs text-slate-400">{test.shiftDate || 'Official Paper'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">{test.title}</h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsShareCardOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-emerald-950/50"
              title="Create Score Card for WhatsApp Status"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Score Card</span>
            </button>
            <button
              onClick={() =>
                renderPrintableShiftWindow(test, {
                  langMode: reviewLang === 'hi' ? 'bilingual' : 'en',
                  layoutMode: 'solved',
                })
              }
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              title="Generate A4 Bilingual Solved Paper PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Solved Paper PDF</span>
            </button>
            {onOpenMistakes && (
              <button
                onClick={onOpenMistakes}
                className="px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-rose-500/30"
                title="Open Saved Mistake Notebook"
              >
                <Bookmark className="w-3.5 h-3.5 fill-rose-500/20" />
                <span>गलती डायरी ({wrongCount})</span>
              </button>
            )}
            <a
              href={MONETIZATION_CONFIG.community.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-sky-500/30"
              title="Join Official Telegram for Daily PYQ Polls & Shift PDFs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
            <button
              onClick={onRetake}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-teal-950"
            >
              Exit to Tests
            </button>
          </div>
        </div>

        {/* 4 Key Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">Total Score</div>
            <div className="text-2xl sm:text-3xl font-black text-teal-400 mt-1">
              {finalScore} <span className="text-xs text-slate-500 font-normal">/ {test.maxMarks}</span>
            </div>
            <div className="text-[10px] text-teal-500/80 font-medium mt-0.5">With -0.33 negative marking</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">Accuracy</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">{accuracy}%</div>
            <div className="text-[10px] text-emerald-500/80 font-medium mt-0.5">{correctCount} Correct • {wrongCount} Wrong</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400 flex items-center justify-center gap-1.5">
              <span>{hasLiveLeaderboard ? 'Live Percentile' : 'All-India Percentile'}</span>
              {hasLiveLeaderboard && (
                <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase">
                  LIVE
                </span>
              )}
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">{displayPercentile}%ile</div>
            <div className="text-[10px] text-slate-400 font-medium mt-0.5">
              {hasLiveLeaderboard && leaderboard.user_rank
                ? `Live Rank #${leaderboard.user_rank} of ${leaderboard.total_participants}`
                : `Est. Rank ~${estRank}`}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">Time Taken</div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">{formatTime(timeTakenSeconds)}</div>
            <div className="text-[10px] text-slate-400 font-medium mt-0.5">Avg ~{Math.round(timeTakenSeconds / test.questions.length)}s / question</div>
          </div>
        </div>

        {/* High-Converting Monetization / AdSlot */}
        <AdBanner slot="result" onOpenPassPro={onOpenPassPro} hideAds={hideAds} />

        {/* Tab Switcher: Overview vs Live Leaderboard vs Detailed Solutions */}
        <div className="flex border-b border-slate-800 mb-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-teal-400 text-teal-400 bg-teal-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Scorecard & Cutoff</span>
          </button>
          {!test.isCustomTopicQuiz && (
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-4 sm:px-5 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'leaderboard'
                  ? 'border-amber-400 text-amber-400 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Live Leaderboard</span>
              {hasLiveLeaderboard && (
                <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black">
                  {leaderboard.total_participants}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'solutions'
                ? 'border-teal-400 text-teal-400 bg-teal-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Detailed Solutions & Review ({test.questions.length})</span>
          </button>
        </div>

        {/* TAB CONTENT 1: OVERVIEW, CUTOFF METER & SECTION BREAKDOWN */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Expected Cutoff Meter */}
            <ExpectedCutoffCard test={test} finalScore={finalScore} />

            {/* Section Breakdown Table */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>Section-Wise Performance Breakdown</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-2.5 font-semibold">Section</th>
                      <th className="pb-2.5 font-semibold text-center">Questions</th>
                      <th className="pb-2.5 font-semibold text-center text-emerald-400">Correct</th>
                      <th className="pb-2.5 font-semibold text-center text-rose-400">Incorrect</th>
                      <th className="pb-2.5 font-semibold text-center text-slate-400">Unattempted</th>
                      <th className="pb-2.5 font-semibold text-center">Accuracy</th>
                      <th className="pb-2.5 font-semibold text-right text-teal-400">Net Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {Object.entries(sectionStats).map(([sec, stats]) => {
                      const secMarks = Math.max(0, (stats.correct * test.positiveMarks) - (stats.wrong * test.negativeMarks)).toFixed(2);
                      const secAcc = (stats.correct + stats.wrong) > 0 ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100) : 0;
                      return (
                        <tr key={sec} className="hover:bg-slate-800/30">
                          <td className="py-3 font-semibold text-white">{sec}</td>
                          <td className="py-3 text-center text-slate-300">{stats.total}</td>
                          <td className="py-3 text-center text-emerald-400 font-bold">{stats.correct}</td>
                          <td className="py-3 text-center text-rose-400 font-bold">{stats.wrong}</td>
                          <td className="py-3 text-center text-slate-400">{stats.unattempted}</td>
                          <td className="py-3 text-center font-bold text-slate-200">{secAcc}%</td>
                          <td className="py-3 text-right font-black text-teal-400">+{secMarks}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Speed & Silly-Mistake Analytics ("You vs Ideal Benchmark") */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-indigo-500/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-black text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>Per-Question Speed & Silly-Mistake Radar (You vs Ideal Pace)</span>
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Target benchmark: Math/Reasoning ~54s • Science/GA/Trade ~36s
                  </p>
                </div>
                {speedReport.hasRealTiming && (
                  <div className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                    Tracked: <span className="text-teal-300">{formatShortSec(speedReport.totalTrackedSec)}</span>
                  </div>
                )}
              </div>

              {!speedReport.hasRealTiming ? (
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                  Is purane saved attempt mein per-question timing record nahi thi — naye CBT mocks submit karne par har sawal ka speed aur silly-mistake breakdown yahan automatic dikhega.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-semibold">Avg Speed (Right Qs)</div>
                      <div className="text-lg font-black text-emerald-300 mt-0.5">{formatShortSec(speedReport.avgCorrectSec)}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-semibold">Avg Speed (Wrong Qs)</div>
                      <div className="text-lg font-black text-rose-300 mt-0.5">{formatShortSec(speedReport.avgWrongSec)}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-semibold">Time Wasted (Wrong/Skip)</div>
                      <div className="text-lg font-black text-amber-300 mt-0.5">{formatShortSec(speedReport.wastedTimeSec)}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-semibold">Superfast Right</div>
                      <div className="text-lg font-black text-teal-300 mt-0.5">{speedReport.buckets.superfastRight.length} Qs</div>
                    </div>
                  </div>

                  {/* Clickable Speed Buckets (Jump straight to Question Solution) */}
                  {(speedReport.buckets.rushMistakes.length > 0 ||
                    speedReport.buckets.overtimeTraps.length > 0 ||
                    speedReport.buckets.sunkCostSkips.length > 0 ||
                    speedReport.buckets.superfastRight.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {speedReport.buckets.rushMistakes.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-rose-950/25 border border-rose-500/30 space-y-2">
                          <div className="font-bold text-rose-300 flex items-center justify-between">
                            <span>⚡ Speed / Silly Mistakes (&le;12s Wrong)</span>
                            <span>{speedReport.buckets.rushMistakes.length} Qs</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {speedReport.buckets.rushMistakes.slice(0, 8).map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => jumpToQuestionInSolutions(item.id)}
                                className="px-2 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/30 text-rose-200 border border-rose-500/35 text-[11px] font-bold cursor-pointer"
                              >
                                Q.{item.qNo} ({item.seconds}s)
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {speedReport.buckets.overtimeTraps.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-amber-950/25 border border-amber-500/30 space-y-2">
                          <div className="font-bold text-amber-300 flex items-center justify-between">
                            <span>⏳ Time-Waster Traps (Slow Wrong)</span>
                            <span>{speedReport.buckets.overtimeTraps.length} Qs</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {speedReport.buckets.overtimeTraps.slice(0, 8).map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => jumpToQuestionInSolutions(item.id)}
                                className="px-2 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 text-amber-200 border border-amber-500/35 text-[11px] font-bold cursor-pointer"
                              >
                                Q.{item.qNo} ({formatShortSec(item.seconds)})
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {speedReport.buckets.sunkCostSkips.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-700 space-y-2">
                          <div className="font-bold text-slate-300 flex items-center justify-between">
                            <span>🛑 Sunk-Cost Skips (&ge;45s Skipped)</span>
                            <span>{speedReport.buckets.sunkCostSkips.length} Qs</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {speedReport.buckets.sunkCostSkips.slice(0, 8).map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => jumpToQuestionInSolutions(item.id)}
                                className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-bold cursor-pointer"
                              >
                                Q.{item.qNo} ({formatShortSec(item.seconds)})
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {speedReport.buckets.superfastRight.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-500/30 space-y-2">
                          <div className="font-bold text-emerald-300 flex items-center justify-between">
                            <span>🚀 Superfast Accuracy Wins</span>
                            <span>{speedReport.buckets.superfastRight.length} Qs</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {speedReport.buckets.superfastRight.slice(0, 8).map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => jumpToQuestionInSolutions(item.id)}
                                className="px-2 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/35 text-[11px] font-bold cursor-pointer"
                              >
                                Q.{item.qNo} ({item.seconds}s)
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Section-Wise Time Share Bars */}
                  {speedReport.sectionSpeed.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                        Section-Wise Time Spent vs Ideal Pace
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {speedReport.sectionSpeed.map((s) => {
                          const barCls =
                            s.paceStatus === 'slow'
                              ? 'bg-amber-500'
                              : s.paceStatus === 'fast'
                              ? 'bg-emerald-500'
                              : 'bg-indigo-400';
                          return (
                            <div key={s.section} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5 text-[11px]">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-white truncate">{s.section}</span>
                                <span className="text-slate-300 font-semibold shrink-0">
                                  {formatShortSec(s.totalSec)} ({s.sharePct}%) • ~{s.avgSec}s/Q
                                </span>
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${barCls}`}
                                  style={{ width: `${Math.max(8, Math.min(100, s.sharePct))}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Quick Action to jump to Solutions */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-purple-950/40 border border-teal-500/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Review All Questions with Step-by-Step Solutions</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Check official RRB answer key, your chosen answers, and bilingual explanations for all {test.questions.length} questions.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('solutions')}
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950 transition-all flex items-center gap-1.5"
              >
                <span>Open Detailed Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB CONTENT 2: LIVE SHIFT LEADERBOARD */}
        {activeTab === 'leaderboard' && (
          <ShiftLeaderboardTab
            test={test}
            finalScore={finalScore}
            user={user}
            leaderboard={leaderboard}
            loading={loadingLeaderboard}
            error={leaderboardError}
            onRefresh={fetchLeaderboard}
            onOpenAuth={onOpenAuth}
          />
        )}

        {/* TAB CONTENT 3: DETAILED SOLUTIONS & REVIEW MODE */}
        {activeTab === 'solutions' && (
          <div className="space-y-5">
            
            {/* Top Review Controls: Filters & Review Language Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
              
              {/* Status Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filter:</span>
                </span>
                {[
                  { key: 'all', label: `All (${test.questions.length})` },
                  { key: 'correct', label: `Correct (${correctCount})`, color: 'text-emerald-400' },
                  { key: 'incorrect', label: `Incorrect (${wrongCount})`, color: 'text-rose-400' },
                  { key: 'unattempted', label: `Unattempted (${unattemptedCount})`, color: 'text-slate-400' }
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => { setSolutionFilter(f.key); setReviewIndex(0); }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      solutionFilter === f.key
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className={solutionFilter !== f.key ? f.color : ''}>{f.label}</span>
                  </button>
                ))}
              </div>

              {/* Review Language Switcher (Bilingual on the fly) */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">View Solution in:</span>
                <button
                  onClick={() => setReviewLang(reviewLang === 'hi' ? 'en' : 'hi')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-teal-500/50 text-teal-300 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-400" />
                  <span>{reviewLang === 'hi' ? 'हिंदी' : 'English'}</span>
                </button>
              </div>
            </div>

            {/* Horizontal Question Quick Jump Bar */}
            <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {filteredQuestions.map((q, idx) => {
                  const userAns = answers[q.id];
                  const isCorrect =
                    userAns !== undefined && userAns === q.correctIndex;
                  const isAttempted = userAns !== undefined;
                  const isSelected = idx === reviewIndex;

                  let colorClass = 'bg-slate-800 text-slate-400 border-slate-700';
                  if (isCorrect) colorClass = 'bg-emerald-600/90 text-white border-emerald-500';
                  else if (isAttempted) colorClass = 'bg-rose-600/90 text-white border-rose-500';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setReviewIndex(idx)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold shrink-0 border transition-all ${colorClass} ${
                        isSelected ? 'ring-2 ring-teal-400 scale-110' : 'opacity-80 hover:opacity-100'
                      }`}
                      title={`Q.${q.shiftQuestionNo || q.id} - ${isCorrect ? 'Correct' : isAttempted ? 'Incorrect' : 'Unattempted'}`}
                    >
                      {q.shiftQuestionNo || q.id}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE QUESTION SOLUTION CARD */}
            {activeReviewQ && (() => {
              const userAns = answers[activeReviewQ.id];
              const isCorrect =
                userAns !== undefined && userAns === activeReviewQ.correctIndex;
              const isAttempted = userAns !== undefined;

              return (
                <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
                  
                  {/* Question Header & Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 font-bold text-xs">
                        Question {activeReviewQ.shiftQuestionNo || activeReviewQ.id}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                        {activeReviewQ.section}
                      </span>
                      {activeReviewQ.topic && (
                        <span className="text-xs text-slate-400 hidden sm:inline">
                          • {activeReviewQ.topic}
                        </span>
                      )}
                      {speedReport.hasRealTiming && (() => {
                        const qSpeed = classifyQuestionSpeed(
                          activeReviewQ,
                          questionTimes?.[activeReviewQ.id] || 0,
                          userAns
                        );
                        const toneCls =
                          qSpeed.tone === 'emerald'
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/35'
                            : qSpeed.tone === 'rose'
                            ? 'bg-rose-500/15 text-rose-300 border-rose-500/35'
                            : qSpeed.tone === 'orange' || qSpeed.tone === 'amber'
                            ? 'bg-amber-500/15 text-amber-300 border-amber-500/35'
                            : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/35';
                        return (
                          <span className={`px-2.5 py-1 rounded-md border text-[11px] font-bold flex items-center gap-1 ${toneCls}`}>
                            <Clock className="w-3 h-3" />
                            <span>
                              {formatShortSec(qSpeed.seconds)} / {formatShortSec(qSpeed.idealSeconds)} • {qSpeed.label}
                            </span>
                          </span>
                        );
                      })()}
                    </div>

                    {/* Result Badge + Report Error Button */}
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 font-bold" />
                          <span>Correct (+{test.positiveMarks} Mark)</span>
                        </span>
                      ) : isAttempted ? (
                        <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/60 text-rose-300 text-xs font-bold flex items-center gap-1.5">
                          <X className="w-3.5 h-3.5 font-bold" />
                          <span>Incorrect (-{test.negativeMarks} Mark)</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium flex items-center gap-1.5">
                          <span>Not Attempted (0.0 Marks)</span>
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          setReportTarget({
                            uid: activeReviewQ.mistakeId || `${test.id}_${activeReviewQ.id}`,
                            testId: test.id,
                            shiftTitle: test.title,
                            questionNo: activeReviewQ.shiftQuestionNo || activeReviewQ.id,
                            previewText:
                              typeof activeReviewQ.question === 'object'
                                ? activeReviewQ.question?.[reviewLang] ||
                                  activeReviewQ.question?.en ||
                                  activeReviewQ.question?.hi ||
                                  ''
                                : String(activeReviewQ.question || ''),
                          })
                        }
                        className="px-2.5 py-1 rounded-full bg-slate-800/90 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                        title="Report answer key / diagram / typo issue"
                      >
                        <Flag className="w-3 h-3" />
                        <span>Report</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Statement (Tables, Math & Figures Support) */}
                  <div className="mb-4">
                    <QuestionContentRenderer
                      text={activeReviewQ.question[reviewLang] || activeReviewQ.question['en']}
                      image={getQuestionImage(activeReviewQ, reviewLang)}
                      className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed font-sans"
                    />
                  </div>

                  {/* 4 Options with User Response vs Official Answer Highlighting */}
                  <div className="space-y-3">
                    {getOptionsList(activeReviewQ, reviewLang).map((optText, optIdx) => {
                      const isOfficialCorrect = optIdx === activeReviewQ.correctIndex;
                      const isUserSelected = userAns === optIdx;
                      const letter = String.fromCharCode(65 + optIdx);

                      let containerClass = "p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-3 text-sm ";

                      if (isOfficialCorrect) {
                        // Official Correct Answer: Vibrant Emerald
                        containerClass += "bg-emerald-950/50 border-emerald-500 text-white font-medium ring-1 ring-emerald-500/50";
                      } else if (isUserSelected && !isOfficialCorrect) {
                        // User selected wrong option: Rose Red
                        containerClass += "bg-rose-950/50 border-rose-500 text-rose-200 font-medium";
                      } else {
                        // Other neutral options
                        containerClass += "bg-slate-900/40 border-slate-800/80 text-slate-400";
                      }

                      return (
                        <div key={optIdx} className={containerClass}>
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                              isOfficialCorrect 
                                ? 'bg-emerald-500 text-slate-950' 
                                : isUserSelected 
                                ? 'bg-rose-500 text-white' 
                                : 'bg-slate-800 text-slate-400'
                            }`}>
                              {letter}
                            </span>
                            <OptionContentRenderer value={optText} />
                          </div>

                          {/* Status Tag */}
                          <div className="shrink-0 flex items-center gap-2 text-xs">
                            {isOfficialCorrect && (
                              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                <span>Official Answer</span>
                              </span>
                            )}
                            {isUserSelected && (
                              <span className={`px-2.5 py-0.5 rounded font-bold ${
                                isOfficialCorrect 
                                  ? 'bg-emerald-500/20 text-emerald-300' 
                                  : 'bg-rose-500/20 text-rose-300'
                              }`}>
                                Your Choice
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* DETAILED SOLUTION & EXPLANATION BOX (Prepared for user add-ons) */}
                  <div className="p-5 rounded-2xl bg-[#0B1329] border border-teal-500/30 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                        <Zap className="w-4 h-4" />
                        <span>Detailed Solution & Explanation</span>
                      </div>
                      <a
                        href={MONETIZATION_CONFIG.community.telegramGroupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-[11px] font-bold transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Discuss Doubt in Group</span>
                      </a>
                    </div>

                    {activeReviewQ.solution && (
                      <MultiMethodSolutionBox solution={activeReviewQ.solution} lang={reviewLang} />
                    )}
                  </div>

                  {/* Previous / Next Review Question Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))}
                      disabled={reviewIndex === 0}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-slate-200 transition-colors"
                    >
                      ← Previous Question
                    </button>
                    <span className="text-xs text-slate-400">
                      {reviewIndex + 1} of {filteredQuestions.length}
                    </span>
                    <button
                      onClick={() => setReviewIndex(Math.min(filteredQuestions.length - 1, reviewIndex + 1))}
                      disabled={reviewIndex === filteredQuestions.length - 1}
                      className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-950 transition-colors"
                    >
                      Next Question →
                    </button>
                  </div>

                </div>
              );
            })()}

          </div>
        )}

      </div>

      {/* Shareable WhatsApp Status Score Card Modal */}
      {isShareCardOpen && (() => {
        const savedCat = (() => {
          try {
            return localStorage.getItem('railwayprep_user_category') || 'UR';
          } catch {
            return 'UR';
          }
        })();
        const bench = getCutoffBenchmark(test);
        const catTarget = bench.cutoffs[savedCat] ?? bench.cutoffs.UR;
        const evalRes = evaluateCutoffStatus(finalScore, catTarget, bench.maxMarks);
        const cutoffBadge =
          evalRes.status === 'safe'
            ? bench.mode === 'qualifying'
              ? 'QUALIFIED (35%+) ✓'
              : `${savedCat} SAFE ZONE ✓`
            : evalRes.status === 'borderline'
            ? `${savedCat} BORDERLINE`
            : `${savedCat} NEEDS BOOST`;
        const cutoffShort =
          evalRes.status === 'safe'
            ? `+${evalRes.delta} above ${catTarget}`
            : `${evalRes.delta} vs ${catTarget}`;

        return (
          <ShareScoreCardModal
            test={test}
            score={finalScore}
            accuracy={accuracy}
            correctCount={correctCount}
            wrongCount={wrongCount}
            timeTakenText={formatTime(timeTakenSeconds)}
            percentile={displayPercentile}
            rankLabel={
              hasLiveLeaderboard && leaderboard.user_rank
                ? `Live Rank #${leaderboard.user_rank} / ${leaderboard.total_participants}`
                : `Est. Rank ~${estRank}`
            }
            cutoffInfo={{
              badge: cutoffBadge,
              shortText: cutoffShort,
              status: evalRes.status,
            }}
            user={user}
            profile={profile}
            studyStreak={studyStreak}
            onClose={() => setIsShareCardOpen(false)}
          />
        );
      })()}

      {reportTarget && (
        <ReportQuestionModal
          targetQuestion={reportTarget}
          onClose={() => setReportTarget(null)}
        />
      )}
    </div>
  );
}
