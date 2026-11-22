import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, 
  RotateCcw, Bookmark, Send, Globe, HelpCircle, Shield, Award,
  FileText, Info, Layers, Check, AlertTriangle
} from 'lucide-react';

export default function CBTMockTestModal({ test, onClose, onSubmitTest, defaultLang = 'hi' }) {
  // Global language default (can be toggled for the whole test)
  const [globalLang, setGlobalLang] = useState(defaultLang);
  
  // Per-question language overrides: { [qId]: 'hi' | 'en' }
  const [questionLangOverrides, setQuestionLangOverrides] = useState({});

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSectionFilter, setActiveSectionFilter] = useState('All Sections');
  const [answers, setAnswers] = useState({}); // { [qId]: selectedOptionIndex }
  const [reviewStatus, setReviewStatus] = useState({}); // { [qId]: boolean }
  const [visitedStatus, setVisitedStatus] = useState({ 1: true });
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);
  
  // Modals inside CBT
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showQuestionPaper, setShowQuestionPaper] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

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

  const currentQ = test.questions[currentIndex] || test.questions[0];

  // Resolve active language for current question (per-question override takes precedence)
  const currentQLang = questionLangOverrides[currentQ.id] || globalLang;

  const toggleQuestionLang = () => {
    const nextLang = currentQLang === 'hi' ? 'en' : 'hi';
    setQuestionLangOverrides(prev => ({
      ...prev,
      [currentQ.id]: nextLang
    }));
  };

  const handleGlobalLangToggle = () => {
    const nextLang = globalLang === 'hi' ? 'en' : 'hi';
    setGlobalLang(nextLang);
    // When global language is toggled, also clear individual overrides so whole test follows new global setting
    setQuestionLangOverrides({});
  };

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

  const handleJumpToQuestion = (targetIdx) => {
    setCurrentIndex(targetIdx);
    setVisitedStatus(prev => ({ ...prev, [test.questions[targetIdx].id]: true }));
  };

  const handleSectionTabClick = (sectionName) => {
    setActiveSectionFilter(sectionName);
    if (sectionName !== 'All Sections') {
      const firstQIndex = test.questions.findIndex(q => q.section === sectionName);
      if (firstQIndex !== -1) {
        handleJumpToQuestion(firstQIndex);
      }
    }
  };

  const handleFinalSubmit = () => {
    onSubmitTest({
      test,
      answers,
      reviewStatus,
      timeTakenSeconds: (test.durationMinutes * 60) - timeLeft
    });
  };

  // Distinct Testbook / TCS Palette States
  const answeredCount = Object.keys(answers).length;
  const markedOnlyCount = Object.keys(reviewStatus).filter(k => reviewStatus[k] && answers[k] === undefined).length;
  const answeredAndMarkedCount = Object.keys(reviewStatus).filter(k => reviewStatus[k] && answers[k] !== undefined).length;
  const visitedCount = Object.keys(visitedStatus).length;
  const notVisitedCount = Math.max(0, test.questions.length - visitedCount);
  const notAnsweredCount = Math.max(0, visitedCount - answeredCount);

  // Styling for question palette buttons
  const getPaletteClass = (q, idx) => {
    const isCurrent = idx === currentIndex;
    const isAnswered = answers[q.id] !== undefined;
    const isMarked = reviewStatus[q.id];
    const isVisited = visitedStatus[q.id];

    let base = "w-8 h-8 sm:w-9 sm:h-9 rounded-md text-xs font-bold flex items-center justify-center transition-all cursor-pointer relative shadow-sm ";

    if (isAnswered && isMarked) {
      // Purple with small green indicator: Answered & Marked for Review
      base += "bg-purple-700 text-white border-2 border-purple-400";
    } else if (isMarked) {
      // Purple: Marked for Review
      base += "bg-purple-900/90 text-purple-200 border border-purple-500 rounded-full";
    } else if (isAnswered) {
      // Green: Answered
      base += "bg-emerald-600 text-white font-extrabold";
    } else if (isVisited) {
      // Red: Visited but Not Answered
      base += "bg-rose-600 text-white font-semibold";
    } else {
      // White/Gray: Not Visited
      base += "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700";
    }

    if (isCurrent) {
      base += " ring-2 ring-teal-400 ring-offset-2 ring-offset-[#090D1A] scale-110 z-10";
    }

    return base;
  };

  const availableSections = test.sections || ['All Sections'];

  return (
    <div className="fixed inset-0 z-50 bg-[#070B18] flex flex-col overflow-hidden text-slate-100 select-none">
      
      {/* 1. TOP HEADER: Exam Title, Sections, Global Language & Timer */}
      <header className="bg-[#0B1329] border-b border-slate-800 px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center font-black text-xs">
            CBT
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">{test.title}</h1>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="text-teal-400 font-semibold">{test.shiftDate || 'Official CBT Paper'}</span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">Mark: +{test.positiveMarks}</span>
              <span>•</span>
              <span className="text-rose-400 font-medium">Neg: -{test.negativeMarks}</span>
            </div>
          </div>
        </div>

        {/* Action Controls & Countdown Clock */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Question Paper Quick View Button */}
          <button
            onClick={() => setShowQuestionPaper(true)}
            title="View entire Question Paper"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Question Paper</span>
          </button>

          {/* Instructions Button */}
          <button
            onClick={() => setShowInstructions(true)}
            title="Exam Instructions"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Instructions</span>
          </button>

          {/* Global Language Toggle */}
          <button
            onClick={handleGlobalLangToggle}
            title="Toggle Default Language for Test"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-teal-400 text-xs font-semibold text-slate-200 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-[11px] text-slate-400 hidden sm:inline">Default:</span>
            <span className="text-teal-300 font-bold">{globalLang === 'hi' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* Test Countdown Timer (TCS iON Standard) */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs sm:text-sm border shadow-inner ${
            timeLeft < 300 
              ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse' 
              : timeLeft < 600
              ? 'bg-amber-950/70 border-amber-500/70 text-amber-300'
              : 'bg-slate-900 border-slate-700 text-teal-300'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {/* Submit Test Button in Header */}
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-950 transition-all flex items-center gap-1"
          >
            <Send className="w-3 h-3" />
            <span>Submit</span>
          </button>
        </div>
      </header>

      {/* 2. SECTION TABS BAR (Testbook Style) */}
      <nav className="bg-[#090D1E] border-b border-slate-800/90 px-3 sm:px-5 py-1.5 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold shrink-0 mr-1">
          <Layers className="w-3.5 h-3.5 text-teal-400" />
          <span>Sections:</span>
        </div>
        {availableSections.map((secName) => {
          const isActive = activeSectionFilter === secName;
          const isCurrentSec = currentQ.section === secName;
          return (
            <button
              key={secName}
              onClick={() => handleSectionTabClick(secName)}
              className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm shadow-teal-500/30'
                  : isCurrentSec
                  ? 'bg-slate-800 text-teal-300 border border-teal-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              <span>{secName}</span>
              {test.sectionDistribution && test.sectionDistribution[secName] && (
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-700/60 text-slate-300'}`}>
                  {test.sectionDistribution[secName]}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* 3. MAIN WORKSPACE: Split into Left Question Panel & Right Question Palette */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT COLUMN: Question Display, Options & Navigation */}
        <main className="flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-7 border-r border-slate-800 bg-[#070B18]">
          <div>
            {/* Question Subheader: Number, Section Badge, Marks & Per-Question Language Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-md bg-teal-500/20 border border-teal-500/40 text-teal-300 font-extrabold text-xs tracking-wide">
                  Question {currentIndex + 1} of {test.questions.length}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                  {currentQ.section}
                </span>
                {currentQ.topic && (
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    • {currentQ.topic}
                  </span>
                )}
              </div>

              {/* INDIVIDUAL PER-QUESTION LANGUAGE SWITCHER */}
              <div className="flex items-center gap-2">
                <div className="text-[11px] text-slate-400 font-medium">View in:</div>
                <button
                  onClick={toggleQuestionLang}
                  title="Switch language for THIS specific question without changing others"
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 border border-teal-500/50 hover:border-teal-400 text-teal-300 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-400" />
                  <span>{currentQLang === 'hi' ? 'हिंदी' : 'English'}</span>
                  <span className="text-[10px] text-teal-400/80 font-normal underline ml-0.5">Change</span>
                </button>
                {questionLangOverrides[currentQ.id] && (
                  <span className="text-[10px] bg-teal-950 border border-teal-800 text-teal-400 px-1.5 py-0.5 rounded">
                    Custom Lang
                  </span>
                )}
              </div>
            </div>

            {/* Question Statement */}
            <div className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed mb-6 font-sans">
              {currentQ.question[currentQLang] || currentQ.question['en']}
            </div>

            {/* 4 Options Radio Cards */}
            <div className="space-y-3 max-w-3xl">
              {(currentQ.options[currentQLang] || currentQ.options['en']).map((optText, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                const letter = String.fromCharCode(65 + optIdx);
                return (
                  <div
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 select-none ${
                      isSelected 
                        ? 'bg-teal-950/60 border-teal-500 text-white ring-1 ring-teal-500/60 shadow-lg shadow-teal-950/80'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                      isSelected 
                        ? 'border-teal-400 bg-teal-500 text-slate-950' 
                        : 'border-slate-600 bg-slate-800 text-slate-400'
                    }`}>
                      {isSelected ? '✓' : letter}
                    </div>
                    <span className="text-sm sm:text-base font-normal leading-relaxed">{optText}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM TEST NAVIGATION (TCS iON / Testbook Standard) */}
          <footer className="pt-6 border-t border-slate-800 mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleMarkForReviewAndNext}
                className="px-3.5 py-2 rounded-lg bg-purple-950/70 border border-purple-700/70 text-purple-200 text-xs font-semibold hover:bg-purple-900 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Bookmark className="w-3.5 h-3.5 text-purple-400" />
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
                className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
              <button
                onClick={handleSaveAndNext}
                className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-teal-900/60 flex items-center gap-1.5"
              >
                <span>{currentIndex === test.questions.length - 1 ? 'Save & Review' : 'Save & Next'}</span>
                <ChevronRight className="w-3.5 h-3.5 font-bold" />
              </button>
            </div>
          </footer>
        </main>

        {/* RIGHT COLUMN: Candidate Info, Palette Legend & 75-Question Grid */}
        <aside className="w-full lg:w-80 shrink-0 bg-[#090D1A] p-4 sm:p-5 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 border-slate-800">
          <div>
            {/* Candidate Info Card */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 font-black text-sm flex items-center justify-center">
                AP
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Railway Aspirant</div>
                <div className="text-slate-400 text-[11px]">Roll: {test.exam || 'ALP-2026'}</div>
              </div>
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Question Palette</span>
              <span className="text-teal-400 text-[11px] font-semibold">{test.questions.length} Questions</span>
            </h3>
            
            {/* 5 Testbook Palette Status Legends */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-md bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">✓</span>
                <span className="text-slate-300">Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-md bg-rose-600 flex items-center justify-center text-[10px] font-bold text-white">✕</span>
                <span className="text-slate-300">Not Answered ({notAnsweredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-purple-700 flex items-center justify-center text-[10px] text-white">●</span>
                <span className="text-slate-300">Review ({markedOnlyCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-purple-700 border border-purple-400 flex items-center justify-center relative">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-slate-300">Ans & Review ({answeredAndMarkedCount})</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span className="w-4 h-4 rounded-md bg-slate-800 border border-slate-700"></span>
                <span className="text-slate-400">Not Visited ({notVisitedCount})</span>
              </div>
            </div>

            {/* Question Numbers Grid (Filters by activeSectionFilter if selected) */}
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {test.questions.map((q, idx) => {
                const matchesSection = activeSectionFilter === 'All Sections' || q.section === activeSectionFilter;
                return (
                  <button
                    key={q.id}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`${getPaletteClass(q, idx)} ${!matchesSection ? 'opacity-30 hover:opacity-100' : ''}`}
                    title={`Q.${idx + 1} (${q.section})`}
                  >
                    {idx + 1}
                    {reviewStatus[q.id] && answers[q.id] !== undefined && (
                      <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Submit Button */}
          <div className="pt-4 border-t border-slate-800 mt-4">
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-950/80 transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Submit Entire Test</span>
            </button>
          </div>
        </aside>
      </div>

      {/* MODAL 1: SUBMIT CONFIRMATION SUMMARY */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#0B1329] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5" />
                <span>Confirm Test Submission</span>
              </div>
              <button 
                onClick={() => setShowConfirmSubmit(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Please review your test status summary below before final submission:
            </p>

            {/* Test Summary Table */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-slate-400 text-[11px]">Total Questions</div>
                <div className="text-lg font-black text-white mt-0.5">{test.questions.length}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60">
                <div className="text-emerald-400 text-[11px]">Answered</div>
                <div className="text-lg font-black text-emerald-300 mt-0.5">{answeredCount}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-800/60">
                <div className="text-rose-400 text-[11px]">Not Answered</div>
                <div className="text-lg font-black text-rose-300 mt-0.5">{notAnsweredCount}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-800/60">
                <div className="text-purple-400 text-[11px]">Marked Review</div>
                <div className="text-lg font-black text-purple-300 mt-0.5">{markedOnlyCount}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-800/60">
                <div className="text-purple-400 text-[11px]">Ans & Review</div>
                <div className="text-lg font-black text-purple-300 mt-0.5">{answeredAndMarkedCount}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-slate-400 text-[11px]">Not Visited</div>
                <div className="text-lg font-black text-slate-300 mt-0.5">{notVisitedCount}</div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Resume Test
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950 transition-colors"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: FULL QUESTION PAPER VIEW */}
      {showQuestionPaper && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-3xl max-h-[85vh] bg-[#090D1A] border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Complete Question Paper ({test.questions.length} Questions)</span>
              </div>
              <button onClick={() => setShowQuestionPaper(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {test.questions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-bold text-teal-400">Q.{idx + 1} • {q.section}</span>
                    <span>Single Choice (+1.0 / -0.33)</span>
                  </div>
                  <div className="text-sm text-slate-200 mb-3 font-medium">
                    {q.question[globalLang] || q.question['en']}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {(q.options[globalLang] || q.options['en']).map((opt, oIdx) => (
                      <div key={oIdx} className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center gap-2">
                        <span className="font-bold text-slate-400">{String.fromCharCode(65 + oIdx)}.</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-slate-800 text-right bg-[#0B1329]">
              <button
                onClick={() => setShowQuestionPaper(false)}
                className="px-4 py-1.5 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs"
              >
                Close Question Paper
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: EXAM INSTRUCTIONS */}
      {showInstructions && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[80vh] bg-[#090D1A] border border-slate-800 rounded-2xl p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                <span>Official Exam Instructions (RRB ALP CBT-1)</span>
              </div>
              <button onClick={() => setShowInstructions(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-teal-400 mb-1">1. Total Duration & Marking Scheme</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Total duration of CBT-1 is <strong>60 minutes</strong> (80 minutes for eligible PwBD candidates).</li>
                  <li>Total number of questions: <strong>75 questions</strong>.</li>
                  <li>Each correct answer carries <strong>+1.0 mark</strong>.</li>
                  <li>Negative marking: <strong>1/3rd (0.33 mark)</strong> will be deducted for each incorrect answer.</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-teal-400 mb-1">2. Bilingual Flexibility Feature</h4>
                <p className="text-slate-400">
                  You can set your default language as <strong>English</strong> or <strong>हिन्दी</strong> using the top bar. Moreover, you can switch language for <strong>any individual question</strong> instantly using the "View in" button on the question card without altering the rest of your test.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-teal-400 mb-1">3. Question Palette Color Codes</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li><span className="text-emerald-400 font-bold">Green:</span> Answered</li>
                  <li><span className="text-rose-400 font-bold">Red:</span> Visited but Not Answered</li>
                  <li><span className="text-purple-400 font-bold">Purple:</span> Marked for Review</li>
                  <li><span className="text-purple-300 font-bold">Purple with Green Dot:</span> Answered & Marked for Review</li>
                  <li><span className="text-slate-400 font-bold">Gray:</span> Not Visited yet</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setShowInstructions(false)}
                className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs"
              >
                Understood, Return to Test
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
