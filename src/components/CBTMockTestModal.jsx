import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, 
  RotateCcw, Bookmark, Send, Globe, HelpCircle, Shield, Award
} from 'lucide-react';

export default function CBTMockTestModal({ test, onClose, onSubmitTest, defaultLang = 'hi' }) {
  const [lang, setLang] = useState(defaultLang);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [qId]: selectedOptionIndex }
  const [reviewStatus, setReviewStatus] = useState({}); // { [qId]: boolean }
  const [visitedStatus, setVisitedStatus] = useState({ 1: true });
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinalSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const currentQ = test.questions[currentIndex];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = (optIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: optIndex
    }));
  };

  const handleClearResponse = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleMarkForReviewAndNext = () => {
    setReviewStatus(prev => ({
      ...prev,
      [currentQ.id]: true
    }));
    handleNext();
  };

  const handleSaveAndNext = () => {
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setVisitedStatus(prev => ({ ...prev, [test.questions[nextIdx].id]: true }));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleJumpToQuestion = (idx) => {
    setCurrentIndex(idx);
    setVisitedStatus(prev => ({ ...prev, [test.questions[idx].id]: true }));
  };

  const handleFinalSubmit = () => {
    onSubmitTest({
      test,
      answers,
      reviewStatus,
      timeTakenSeconds: (test.durationMinutes * 60) - timeLeft
    });
  };

  // Color logic for question palette (Testbook / TCS Standard)
  const getPaletteClass = (q, idx) => {
    const isCurrent = idx === currentIndex;
    const isAnswered = answers[q.id] !== undefined;
    const isMarked = reviewStatus[q.id];
    const isVisited = visitedStatus[q.id];

    let base = "w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer relative ";

    if (isAnswered && isMarked) {
      // Purple with small green dot
      base += "bg-purple-700 text-white border-2 border-purple-400";
    } else if (isMarked) {
      // Purple: Marked for Review
      base += "bg-purple-900/80 text-purple-200 border border-purple-500";
    } else if (isAnswered) {
      // Green: Answered
      base += "bg-emerald-600 text-white font-black shadow-sm shadow-emerald-900/50";
    } else if (isVisited) {
      // Red/Orange: Not Answered
      base += "bg-red-900/60 text-red-200 border border-red-700/60";
    } else {
      // Gray: Not Visited
      base += "bg-slate-800 text-slate-400 border border-slate-700/60";
    }

    if (isCurrent) {
      base += " ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900 scale-105";
    }

    return base;
  };

  const answeredCount = Object.keys(answers).length;
  const markedCount = Object.keys(reviewStatus).filter(k => reviewStatus[k]).length;
  const notVisitedCount = test.questions.length - Object.keys(visitedStatus).length;
  const notAnsweredCount = test.questions.length - answeredCount;

  return (
    <div className="fixed inset-0 z-50 bg-[#090D1A] flex flex-col overflow-hidden text-slate-100 select-none">
      
      {/* Top TCS / Testbook CBT Header */}
      <div className="bg-[#0B1329] border-b border-slate-800 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-black text-sm">
            CBT
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1">{test.title}</h2>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Section: <strong className="text-teal-400">{currentQ.section}</strong></span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Mark: +{test.positiveMarks}</span>
              <span>•</span>
              <span className="text-red-400 font-semibold">Neg: -{test.negativeMarks}</span>
            </div>
          </div>
        </div>

        {/* Right side: Timer & Language toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold hover:border-teal-400 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span>{lang === 'hi' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* Test Timer */}
          <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono font-bold text-sm sm:text-base border ${timeLeft < 180 ? 'bg-red-950/80 border-red-500 text-red-400 animate-pulse' : 'bg-slate-900 border-slate-700 text-teal-300'}`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {/* Close button with confirmation */}
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main CBT Workspace: Split into Question Area & Palette */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left: Question View & Options */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-8 border-r border-slate-800 bg-[#070B18]">
          <div>
            {/* Question Header & Subject */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 font-extrabold text-xs">
                  Question {currentIndex + 1} of {test.questions.length}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {currentQ.subject} • {currentQ.topic}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Single Choice
              </div>
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed mb-6">
              {currentQ.question[lang]}
            </div>

            {/* 4 Options Grid */}
            <div className="space-y-3 max-w-3xl">
              {currentQ.options[lang].map((optionText, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                return (
                  <div
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                      isSelected 
                        ? 'bg-teal-950/50 border-teal-500 text-white ring-1 ring-teal-500/50 shadow-md shadow-teal-950'
                        : 'bg-slate-900/60 border-slate-800/90 text-slate-300 hover:bg-slate-800/70 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-teal-400 bg-teal-500 text-slate-950 font-bold' : 'border-slate-600'
                    }`}>
                      {isSelected ? '✓' : String.fromCharCode(65 + optIdx)}
                    </div>
                    <span className="text-sm sm:text-base font-normal leading-normal">{optionText}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Test Navigation Bar (TCS iON Standard) */}
          <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleMarkForReviewAndNext}
                className="px-3.5 py-2 rounded-lg bg-purple-950/60 border border-purple-700/60 text-purple-300 text-xs font-semibold hover:bg-purple-900 transition-colors flex items-center gap-1.5"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Mark for Review & Next</span>
              </button>
              <button
                onClick={handleClearResponse}
                disabled={answers[currentQ.id] === undefined}
                className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Clear Response
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={handleSaveAndNext}
                className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-teal-900"
              >
                {currentIndex === test.questions.length - 1 ? 'Save & Review' : 'Save & Next →'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Question Palette & Status Summary */}
        <div className="w-full lg:w-80 shrink-0 bg-[#090D1A] p-4 sm:p-5 flex flex-col justify-between overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Question Palette</h3>
            
            {/* Color Legend (Testbook Style) */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-slate-300">Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <span className="text-slate-300">Not Answered ({notAnsweredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                <span className="text-slate-300">Review ({markedCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                <span className="text-slate-300">Not Visited ({notVisitedCount})</span>
              </div>
            </div>

            {/* Question Numbers Grid */}
            <div className="grid grid-cols-5 gap-2">
              {test.questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => handleJumpToQuestion(idx)}
                  className={getPaletteClass(q, idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Test Button */}
          <div className="pt-4 mt-4 border-t border-slate-800">
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Test (जमा करें)</span>
            </button>
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Kya aap test submit karna chahte hain?</h3>
            <p className="text-xs text-slate-400 mb-4">
              Aapne {test.questions.length} me se <strong>{answeredCount}</strong> questions attempt kiye hain.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div>Answered: <strong className="text-emerald-400">{answeredCount}</strong></div>
              <div>Marked for Review: <strong className="text-purple-400">{markedCount}</strong></div>
              <div>Unanswered: <strong className="text-red-400">{notAnsweredCount}</strong></div>
              <div>Time Left: <strong className="text-teal-400">{formatTime(timeLeft)}</strong></div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Resume Test (वापस जाएं)
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black shadow-lg"
              >
                Yes, Submit Test Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
