import React, { useState, useEffect } from 'react';
import { 
  Zap, Clock, Users, ArrowRight, Award, Trophy, Sparkles, 
  CheckCircle2, XCircle, RotateCcw, ChevronRight, Bookmark, 
  Check, X, HelpCircle, Flame, Calendar, Share2, Globe, Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DAILY_QUIZZES } from '../data/dailyQuizzesData';

export default function DailyQuizView({ onOpenPassPro, onOpenMistakes }) {
  const [activeTab, setActiveTab] = useState('today'); // 'today' | 'archive' | 'leaderboard'
  const [activeQuiz, setActiveQuiz] = useState(null);
  
  // Streak & Stats state
  const [streakData, setStreakData] = useState(() => {
    try {
      const stored = localStorage.getItem('railwayprep_quiz_stats');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { streak: 3, totalSolved: 18, accuracy: 84.5, lastAttemptDate: null };
  });

  const saveStats = (newCorrect, total) => {
    try {
      const today = new Date().toDateString();
      const isNewDay = streakData.lastAttemptDate !== today;
      const updatedStreak = isNewDay ? streakData.streak + 1 : streakData.streak;
      const updatedTotal = streakData.totalSolved + total;
      const newAcc = (((streakData.accuracy * streakData.totalSolved) + (newCorrect / total * 100 * total)) / updatedTotal).toFixed(1);
      
      const updated = {
        streak: updatedStreak,
        totalSolved: updatedTotal,
        accuracy: parseFloat(newAcc) || 85.0,
        lastAttemptDate: today
      };
      setStreakData(updated);
      localStorage.setItem('railwayprep_quiz_stats', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save quiz stats:', e);
    }
  };

  const todayQuizzes = DAILY_QUIZZES.filter(q => q.tag === 'TODAY LIVE' || q.tag === 'CBT-2 SPECIAL');
  const archiveQuizzes = DAILY_QUIZZES.filter(q => q.tag === 'ARCHIVE');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      
      {/* Top Header Banner with Streak Counter */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-950/70 via-slate-900 to-emerald-950/70 border border-teal-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase mb-3">
              <Zap className="w-3.5 h-3.5 fill-amber-300" />
              <span>Free Daily Practice Streak</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Daily Rapid Speed Quizzes
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              10 handpicked questions covering Science numericals, Arithmetic shortcuts, and Railway GK. Solve in 10 minutes to maintain your daily study streak and see your All-India percentile rank!
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-4">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                <Clock className="w-4 h-4 text-teal-400" /> 10 Mins Duration
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                <Award className="w-4 h-4 text-amber-400" /> 10 Marks (+1.0, -0.33)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                <Users className="w-4 h-4 text-emerald-400" /> 15,000+ Daily Aspirants
              </span>
            </div>
          </div>

          {/* Streak Box */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 sm:p-5 shrink-0 shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Flame className="w-8 h-8 fill-amber-400 animate-bounce" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Your Daily Streak</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300">
                {streakData.streak} Days 🔥
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                {streakData.totalSolved} Questions Solved • {streakData.accuracy}% Acc.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('today')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'today'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-lg shadow-teal-950'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Today's Live Quizzes ({todayQuizzes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('archive')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'archive'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-lg shadow-teal-950'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Previous Days Archive ({archiveQuizzes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'leaderboard'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-lg shadow-teal-950'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Daily Hall of Fame</span>
        </button>
      </div>

      {/* Tab 1: Today's Quizzes */}
      {activeTab === 'today' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todayQuizzes.map(quiz => (
            <div
              key={quiz.id}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                    quiz.tagColor === 'rose'
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      : quiz.tagColor === 'teal'
                      ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                      : quiz.tagColor === 'purple'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  }`}>
                    {quiz.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    {quiz.attemptsCount} attempts
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                  {quiz.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  {quiz.subTitle}
                </p>

                <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center text-xs mb-4">
                  <div>
                    <div className="text-slate-400 text-[10px]">Questions</div>
                    <div className="font-extrabold text-white mt-0.5">{quiz.questionsCount} Qs</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Marks</div>
                    <div className="font-extrabold text-teal-400 mt-0.5">{quiz.maxMarks} Marks</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Time</div>
                    <div className="font-extrabold text-amber-400 mt-0.5">{quiz.durationMins} Mins</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1 mb-5">
                  <div className="flex items-center gap-1.5 text-teal-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Bilingual (English & हिन्दी)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Instant Scorecard + Solution Review</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveQuiz(quiz)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Start Rapid Quiz (Free)</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Archive */}
      {activeTab === 'archive' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveQuizzes.map(quiz => (
            <div
              key={quiz.id}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    {quiz.tag}
                  </span>
                  <span className="text-xs text-slate-400">
                    {quiz.attemptsCount} attempts
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {quiz.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  {quiz.subTitle}
                </p>

                <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-slate-950/60 border border-slate-800 text-center text-xs mb-4">
                  <div>
                    <div className="text-slate-400 text-[10px]">Questions</div>
                    <div className="font-bold text-white mt-0.5">{quiz.questionsCount} Qs</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Marks</div>
                    <div className="font-bold text-teal-400 mt-0.5">{quiz.maxMarks} Marks</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Time</div>
                    <div className="font-bold text-amber-400 mt-0.5">{quiz.durationMins} Mins</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveQuiz(quiz)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Re-attempt Past Quiz</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Daily Hall of Fame Leaderboard */}
      {activeTab === 'leaderboard' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>Today's All-India Daily Rapid Quiz Leaderboard</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Real-time toppers based on accuracy and speed</p>
            </div>
            <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/40">
              LIVE TODAY
            </span>
          </div>

          <div className="space-y-3">
            {[
              { rank: 1, name: 'Ankit Sharma', city: 'Patna, Bihar', score: '10.0 / 10', time: '4m 12s', streak: '14 Days' },
              { rank: 2, name: 'Pooja Verma', city: 'Prayagraj, UP', score: '10.0 / 10', time: '4m 45s', streak: '19 Days' },
              { rank: 3, name: 'Rahul Meena', city: 'Jaipur, Rajasthan', score: '9.67 / 10', time: '5m 02s', streak: '11 Days' },
              { rank: 4, name: 'Deepak Kumar', city: 'Kolkata, WB', score: '9.67 / 10', time: '5m 20s', streak: '8 Days' },
              { rank: 5, name: 'Vikram Yadav', city: 'Bhopal, MP', score: '9.33 / 10', time: '5m 35s', streak: '6 Days' }
            ].map((topper) => (
              <div 
                key={topper.rank} 
                className={`p-4 rounded-2xl flex items-center justify-between gap-4 border transition-all ${
                  topper.rank === 1 
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' 
                    : topper.rank === 2 
                    ? 'bg-slate-800/80 border-slate-700 text-slate-200' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                    topper.rank === 1 ? 'bg-amber-400 text-slate-950' : topper.rank === 2 ? 'bg-slate-300 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    #{topper.rank}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{topper.name}</div>
                    <div className="text-[11px] text-slate-400">{topper.city} • 🔥 {topper.streak}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-black text-teal-400">{topper.score}</div>
                  <div className="text-[10px] text-slate-400">{topper.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
            💡 Attempt today's rapid quizzes with high accuracy to rank in the Top 10!
          </div>
        </div>
      )}

      {/* Interactive Rapid Quiz Engine Modal */}
      {activeQuiz && (
        <RapidQuizRunnerModal
          quiz={activeQuiz}
          onClose={() => setActiveQuiz(null)}
          onFinishQuiz={(correctCount, total) => {
            saveStats(correctCount, total);
          }}
          onOpenMistakes={onOpenMistakes}
        />
      )}

    </div>
  );
}

// Subcomponent: Dedicated In-built 10-Question Quiz Runner Modal
function RapidQuizRunnerModal({ quiz, onClose, onFinishQuiz, onOpenMistakes }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(quiz.durationMins * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lang, setLang] = useState('hi');
  const [showReview, setShowReview] = useState(false);

  // Timer
  useEffect(() => {
    if (isSubmitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const questions = quiz.questions || [];
  const currentQ = questions[currentIndex] || questions[0];

  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: idx
    }));
  };

  const handleClear = () => {
    if (isSubmitted) return;
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    
    // Calculate stats
    let correct = 0;
    let wrong = 0;
    const wrongList = [];

    questions.forEach(q => {
      const userAns = answers[q.id];
      if (userAns !== undefined) {
        if (userAns === q.correctIndex) {
          correct++;
        } else {
          wrong++;
          wrongList.push({
            id: `quiz_${q.id}_${Date.now()}`,
            shiftQuestionNo: q.shiftQuestionNo || q.id,
            subject: quiz.subject,
            topic: 'Daily Rapid Quiz',
            question: q.question,
            options: q.options,
            correctIndex: q.correctIndex,
            userAnswerIndex: userAns,
            solution: q.solution
          });
        }
      }
    });

    if (onFinishQuiz) {
      onFinishQuiz(correct, questions.length);
    }

    // Auto-save wrong questions to Mistake Notebook
    if (wrongList.length > 0) {
      try {
        const stored = JSON.parse(localStorage.getItem('railwayprep_mistake_notebook') || '[]');
        const existingIds = new Set(stored.map(m => m.shiftQuestionNo));
        const toAdd = wrongList.filter(w => !existingIds.has(w.shiftQuestionNo));
        localStorage.setItem('railwayprep_mistake_notebook', JSON.stringify([...stored, ...toAdd]));
      } catch (e) {}
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Metrics for result
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  questions.forEach(q => {
    const userAns = answers[q.id];
    if (userAns === undefined) unattemptedCount++;
    else if (userAns === q.correctIndex) correctCount++;
    else wrongCount++;
  });
  const score = Math.max(0, (correctCount * 1.0) - (wrongCount * 0.33)).toFixed(2);
  const accuracy = (correctCount + wrongCount) > 0 ? ((correctCount / (correctCount + wrongCount)) * 100).toFixed(1) : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-2xl w-full max-h-[92vh] bg-[#090D1A] border border-teal-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
              {quiz.subject}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white mt-1 line-clamp-1">{quiz.title}</h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>{lang === 'hi' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Timer */}
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(timeLeft)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar py-4 space-y-4">
          
          {/* Result view if submitted */}
          {isSubmitted && !showReview ? (
            <div className="text-center py-4 space-y-5 animate-in fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 flex items-center justify-center mx-auto shadow-xl shadow-teal-500/30">
                <Trophy className="w-8 h-8 fill-slate-950" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-black text-white">Quiz Completed! 🎉</h4>
                <p className="text-xs text-slate-400 mt-1">Your response has been evaluated with +1.00 / -0.33 marking.</p>
              </div>

              {/* Scorecard */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Score</div>
                  <div className="text-xl font-black text-teal-400 mt-0.5">{score} <span className="text-xs text-slate-500">/ 10</span></div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Accuracy</div>
                  <div className="text-xl font-black text-amber-400 mt-0.5">{accuracy}%</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Time Taken</div>
                  <div className="text-xl font-black text-emerald-400 mt-0.5">{formatTimer(quiz.durationMins * 60 - timeLeft)}</div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="flex items-center justify-center gap-6 text-xs font-semibold">
                <span className="text-emerald-400">✓ {correctCount} Correct</span>
                <span className="text-rose-400">✗ {wrongCount} Incorrect</span>
                <span className="text-slate-400">○ {unattemptedCount} Skipped</span>
              </div>

              {wrongCount > 0 && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300">
                  📌 {wrongCount} गलत सवाल आपकी <strong>'गलती डायरी (Mistake Notebook)'</strong> में ऑटो-सेव हो चुके हैं!
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowReview(true)}
                  className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg"
                >
                  Review All Questions & Solutions
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer border border-slate-700"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Question numbers strip */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = answers[q.id] !== undefined;
                  const isCorrect = isSubmitted && answers[q.id] === q.correctIndex;
                  const isWrong = isSubmitted && isAnswered && answers[q.id] !== q.correctIndex;

                  let btnBg = 'bg-slate-900 border-slate-800 text-slate-400';
                  if (isCurrent) btnBg = 'bg-teal-500 text-slate-950 border-teal-400 font-black scale-105';
                  else if (isCorrect) btnBg = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold';
                  else if (isWrong) btnBg = 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold';
                  else if (isAnswered) btnBg = 'bg-slate-800 text-teal-300 border-teal-500/40 font-bold';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-8 h-8 rounded-lg text-xs border shrink-0 transition-all cursor-pointer flex items-center justify-center ${btnBg}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Question Text */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-bold text-teal-400">Question {currentIndex + 1} of {questions.length}</span>
                  <span>+1.00 / -0.33</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                  {lang === 'hi' ? currentQ.question?.hi : currentQ.question?.en}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {(lang === 'hi' ? currentQ.options?.hi : currentQ.options?.en)?.map((opt, optIdx) => {
                  const isSelected = answers[currentQ.id] === optIdx;
                  const isCorrectOpt = optIdx === currentQ.correctIndex;
                  
                  let optStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700';
                  if (isSubmitted) {
                    if (isCorrectOpt) optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                    else if (isSelected && !isCorrectOpt) optStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                  } else if (isSelected) {
                    optStyle = 'bg-teal-500/20 border-teal-500 text-teal-200 font-bold';
                  }

                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer ${optStyle}`}
                    >
                      <div className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border ${
                        isSelected 
                          ? 'bg-teal-500 text-slate-950 border-teal-400' 
                          : 'bg-slate-950 border-slate-700 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className="flex-1 leading-relaxed">{opt}</span>
                      {isSubmitted && isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                      {isSubmitted && isSelected && !isCorrectOpt && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                    </div>
                  );
                })}
              </div>

              {/* Solution box in review mode */}
              {isSubmitted && currentQ.solution && (
                <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/30 text-xs space-y-1">
                  <div className="font-bold text-teal-400">💡 विस्तृत समाधान (Solution):</div>
                  <p className="text-slate-300 leading-relaxed">
                    {lang === 'hi' ? currentQ.solution?.hi : currentQ.solution?.en}
                  </p>
                </div>
              )}
            </>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          {!isSubmitted ? (
            <>
              <button
                onClick={handleClear}
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs cursor-pointer border border-slate-800"
              >
                Clear
              </button>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-3 py-2 rounded-xl bg-slate-900 disabled:opacity-40 text-slate-300 text-xs font-bold cursor-pointer border border-slate-800"
                >
                  Prev
                </button>
                {currentIndex < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black cursor-pointer shadow"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-black cursor-pointer shadow-lg"
                  >
                    Submit Quiz
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 disabled:opacity-40 text-xs font-bold text-slate-300 border border-slate-800 cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  disabled={currentIndex === questions.length - 1}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 disabled:opacity-40 text-xs font-bold text-slate-300 border border-slate-800 cursor-pointer"
                >
                  Next →
                </button>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs cursor-pointer"
              >
                Close Review
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
