import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChevronLeft, ChevronRight, ChevronDown, CheckCircle, AlertCircle, 
  RotateCcw, Bookmark, Send, Globe, HelpCircle, Shield, Award,
  FileText, Info, Layers, Check, AlertTriangle, Menu, Pause, Play, AlertOctagon,
  Maximize, Minimize, Star
} from 'lucide-react';
import QuestionContentRenderer from './QuestionContentRenderer';

export default function CBTMockTestModal({ 
  test, 
  onClose, 
  onSubmitTest, 
  onPauseAndExit,
  defaultLang = 'hi', 
  savedSession = null 
}) {
  // Global language default (can be toggled for the whole test)
  const [globalLang, setGlobalLang] = useState(() => savedSession?.globalLang ?? defaultLang);
  
  // Per-question language overrides: { [qId]: 'hi' | 'en' }
  const [questionLangOverrides, setQuestionLangOverrides] = useState(() => savedSession?.questionLangOverrides ?? {});

  const [currentIndex, setCurrentIndex] = useState(() => savedSession?.currentIndex ?? 0);
  const [activeSectionFilter, setActiveSectionFilter] = useState(() => savedSession?.activeSectionFilter ?? 'All Sections');
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const [answers, setAnswers] = useState(() => savedSession?.answers ?? {}); // { [qId]: selectedOptionIndex }
  const [reviewStatus, setReviewStatus] = useState(() => savedSession?.reviewStatus ?? {}); // { [qId]: boolean }
  const [visitedStatus, setVisitedStatus] = useState(() => savedSession?.visitedStatus ?? { [test.questions[0]?.id || 1]: true });
  const [hasStarted, setHasStarted] = useState(() => savedSession?.hasStarted ?? false);
  const [timeLeft, setTimeLeft] = useState(() => savedSession?.timeLeft ?? (test.durationMinutes * 60));
  const [isPaused, setIsPaused] = useState(false);
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Time spent per question: { [qId]: seconds }
  const [questionTimes, setQuestionTimes] = useState(() => savedSession?.questionTimes ?? {});

  // Flexible Collapsible Right Palette State (Testbook Standard - Screenshot 2 & 3)
  const [isPaletteOpen, setIsPaletteOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1280;
    }
    return false;
  });

  // Modals inside CBT
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showQuestionPaper, setShowQuestionPaper] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const currentQ = test.questions[currentIndex] || test.questions[0];

  // Helper to construct current session object
  const getSessionPayload = () => ({
    testId: test.id,
    hasStarted: true,
    globalLang,
    questionLangOverrides,
    currentIndex,
    activeSectionFilter,
    answers,
    reviewStatus,
    visitedStatus,
    timeLeft,
    questionTimes,
    savedAt: Date.now()
  });

  // Auto-save test session to localStorage on any state change
  useEffect(() => {
    if (!test?.id || !hasStarted) return;
    try {
      localStorage.setItem('railwayprep_active_test_session', JSON.stringify(getSessionPayload()));
    } catch (e) {
      console.warn('Failed to save test session:', e);
    }
  }, [test.id, hasStarted, globalLang, questionLangOverrides, currentIndex, activeSectionFilter, answers, reviewStatus, visitedStatus, timeLeft, questionTimes]);

  // Timer countdown
  useEffect(() => {
    if (!hasStarted || isPaused || showPauseModal) return;
    if (timeLeft <= 0) {
      handleFinalSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
      if (currentQ?.id) {
        setQuestionTimes(prev => ({
          ...prev,
          [currentQ.id]: (prev[currentQ.id] || 0) + 1
        }));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hasStarted, timeLeft, isPaused, showPauseModal, currentQ?.id]);

  // Track fullscreen changes
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Resolve active language for current question (per-question override takes precedence)
  const currentQLang = questionLangOverrides[currentQ?.id] || globalLang;

  const toggleQuestionLang = (newLang) => {
    if (!currentQ?.id) return;
    setQuestionLangOverrides(prev => ({
      ...prev,
      [currentQ.id]: newLang
    }));
  };

  const handleGlobalLangToggle = (newLang) => {
    setGlobalLang(newLang);
    setQuestionLangOverrides({});
  };

  const handleTriggerPause = () => {
    setIsPaused(true);
    setShowPauseModal(true);
  };

  const handleConfirmSaveAndExit = () => {
    const session = getSessionPayload();
    try {
      localStorage.setItem('railwayprep_active_test_session', JSON.stringify(session));
    } catch (e) {}
    if (onPauseAndExit) {
      onPauseAndExit(session);
    } else {
      onClose();
    }
  };

  const formatOverallTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')} : ${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`;
  };

  const getOptionsList = (q, lang) => {
    if (!q || !q.options) return [];
    if (Array.isArray(q.options)) {
      return q.options.map(o => (typeof o === 'object' && o !== null ? (o[lang] || o['en'] || '') : String(o)));
    }
    return q.options[lang] || q.options['en'] || q.options['hi'] || [];
  };

  const formatQuestionTime = (seconds = 0) => {
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
      const updated = { ...prev };
      delete updated[currentQ.id];
      return updated;
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
    setReviewStatus(prev => {
      const updated = { ...prev };
      delete updated[currentQ.id];
      return updated;
    });
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
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsPaletteOpen(false);
    }
  };

  const handleSectionTabClick = (sectionName) => {
    setActiveSectionFilter(sectionName);
    if (sectionName !== 'All Sections') {
      const sectionIndices = test.questions
        .map((q, idx) => ({ q, idx }))
        .filter(item => item.q.section === sectionName);
      
      if (sectionIndices.length > 0) {
        const firstUnattempted = sectionIndices.find(item => answers[item.q.id] === undefined);
        const targetIdx = firstUnattempted ? firstUnattempted.idx : sectionIndices[0].idx;
        handleJumpToQuestion(targetIdx);
      }
    }
  };

  // Auto-sync active section tab with currently viewed question
  useEffect(() => {
    if (currentQ?.section) {
      if (activeSectionFilter !== 'All Sections' && activeSectionFilter !== currentQ.section) {
        setActiveSectionFilter(currentQ.section);
      }
    }
  }, [currentIndex, currentQ?.section]);

  const handleFinalSubmit = () => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setIsPaletteOpen(false);
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

  // Styling for question palette buttons (Testbook & TCS iON standard)
  const getPaletteClass = (q, idx) => {
    const isCurrent = idx === currentIndex;
    const isAnswered = answers[q.id] !== undefined;
    const isMarked = reviewStatus[q.id];
    const isVisited = visitedStatus[q.id];

    let base = "h-8.5 sm:h-9 text-xs font-bold flex items-center justify-center transition-all cursor-pointer relative shadow-sm ";

    if (isAnswered && isMarked) {
      base += "rounded-full bg-purple-700 text-white border-2 border-emerald-400 font-black";
    } else if (isMarked) {
      base += "rounded-full bg-purple-600 text-white border border-purple-400 font-bold";
    } else if (isAnswered) {
      base += "rounded-md bg-emerald-600 text-white font-extrabold shadow-sm";
    } else if (isVisited) {
      base += "rounded-md bg-rose-600 text-white font-bold shadow-sm";
    } else {
      base += "rounded-md bg-[#131B2A] text-slate-300 border border-slate-700 hover:bg-slate-700";
    }

    if (isCurrent) {
      base += " ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#0B1329] scale-105 z-10";
    }

    return base;
  };

  const availableSections = test.sections || ['All Sections'];

  // Palette Inner Content Component (Matches Testbook Drawer Screenshot 3)
  const renderPaletteContent = () => (
    <div className="flex flex-col h-full justify-between select-none">
      <div>
        {/* User Profile Header (Indian Flag + Aspirant Name - Testbook Style) */}
        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#131F37] border border-slate-800 mb-3">
          <div className="text-xl shrink-0">🇮🇳</div>
          <div className="text-xs min-w-0">
            <div className="font-bold text-white tracking-wide truncate">Railway Aspirant</div>
            <div className="text-slate-400 text-[11px] truncate">Roll: {test.exam || 'RRB ALP 2026'}</div>
          </div>
        </div>

        {/* 5 Distinct Status Legend Pills (Exact Testbook Screenshot 3) */}
        <div className="grid grid-cols-2 gap-1.5 text-[11px] mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/70 border border-emerald-700/80 text-emerald-300 font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 shrink-0"></span>
            <span className="truncate">{answeredCount} Answered</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/70 border border-purple-700/80 text-purple-300 font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
            <span className="truncate">{markedOnlyCount} Marked</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-700 shrink-0"></span>
            <span className="truncate">{notVisitedCount} Not Visited</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/70 border border-emerald-500/80 text-purple-200 font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-1 ring-emerald-400 shrink-0"></span>
            <span className="truncate">{answeredAndMarkedCount} Marked & Ans</span>
          </div>

          <div className="col-span-2 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-950/70 border border-rose-700/80 text-rose-300 font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 shrink-0"></span>
            <span className="truncate">{notAnsweredCount} Not Answered</span>
          </div>
        </div>

        {/* Section Title Banner in Palette */}
        <div className="px-2.5 py-1 rounded-md bg-[#0F1B30] border border-slate-800 text-[11px] font-bold text-teal-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>SECTION : {activeSectionFilter}</span>
          <span className="text-slate-400 font-normal">
            ({activeSectionFilter === 'All Sections' ? test.questions.length : test.questions.filter(q => q.section === activeSectionFilter).length} Qs)
          </span>
        </div>

        {/* 5-Column Question Grid */}
        <div className="grid grid-cols-5 gap-1.5 max-h-[46vh] sm:max-h-[50vh] overflow-y-auto pr-1 no-scrollbar p-1 rounded-xl bg-slate-950/60 border border-slate-900">
          {test.questions.map((q, idx) => {
            if (activeSectionFilter !== 'All Sections' && q.section !== activeSectionFilter) {
              return null;
            }
            return (
              <button
                key={q.id}
                onClick={() => handleJumpToQuestion(idx)}
                className={getPaletteClass(q, idx)}
                title={`Question ${idx + 1} (${q.section})`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Drawer Action Buttons: Paper + Instructions + Submit Test (Exact Testbook Drawer Screenshot 3) */}
      <div className="pt-3 border-t border-slate-800/90 mt-2 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="py-2 px-2 rounded-lg bg-[#111C33] hover:bg-[#192A4D] border border-cyan-500/40 text-cyan-300 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Question Paper</span>
          </button>
          <button
            onClick={() => setShowInstructions(true)}
            className="py-2 px-2 rounded-lg bg-[#111C33] hover:bg-[#192A4D] border border-cyan-500/40 text-cyan-300 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Instructions</span>
          </button>
        </div>

        {/* Big Submit Test Button inside Palette Drawer */}
        <button
          onClick={() => setShowConfirmSubmit(true)}
          className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-teal-950/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Submit Test</span>
        </button>
      </div>
    </div>
  );

  // -------------------------------------------------------------
  // PRE-TEST INSTRUCTIONS SCREEN (Exact Testbook Screenshot 10)
  // -------------------------------------------------------------
  if (!hasStarted) {
    const totalQuestions = test.questions?.length || 75;
    const maxMarks = test.maxMarks || 75.0;
    const posMarks = test.positiveMarks || 1.0;
    const negMarks = test.negativeMarks || 0.33;

    return (
      <div className="fixed inset-0 z-50 bg-[#121620] flex flex-col justify-between text-slate-100 overflow-y-auto">
        {/* Header Bar */}
        <header className="bg-[#181D27] border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between shrink-0 shadow-md">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400" />
            <span>Your Tests</span>
          </button>
          <div className="text-xs font-semibold text-slate-400 hidden sm:block">
            Official Examination Pattern
          </div>
        </header>

        {/* Main Instructions Card */}
        <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-8 flex flex-col justify-center">
          <div className="bg-[#18202F]/90 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-sm">
            <h1 className="text-base sm:text-xl font-black text-white mb-2 leading-snug">
              {test.title}
            </h1>

            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 pb-4 border-b border-slate-700/60 mb-6">
              <span>Duration: <strong className="text-slate-200">{test.durationMinutes} Mins.</strong></span>
              <span>Maximum Marks: <strong className="text-slate-200">{maxMarks}</strong></span>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <div className="flex items-start gap-2.5">
                <span className="text-teal-400 text-lg leading-none shrink-0">•</span>
                <span>The test contains <strong>{totalQuestions} total questions</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-teal-400 text-lg leading-none shrink-0">•</span>
                <span>Each question has <strong>4 options</strong> out of which only one is correct.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-teal-400 text-lg leading-none shrink-0">•</span>
                <span>You have to finish the test in <strong>{test.durationMinutes} minutes</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-teal-400 text-lg leading-none shrink-0">•</span>
                <span>
                  You will be awarded <strong className="text-emerald-400">+{posMarks} mark</strong> for each correct answer and{' '}
                  <strong className="text-rose-400">-{negMarks}</strong> will be deducted for each wrong answer.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-teal-400 text-lg leading-none shrink-0">•</span>
                <span>There is no negative marking for the questions that you have not attempted.</span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800 text-slate-400 text-[11px] sm:text-xs">
                <span className="text-teal-400 text-lg leading-none shrink-0">•</span>
                <span>
                  I have read all the instructions carefully and have understood them. I agree not to cheat or use unfair means in this examination. I understand that using unfair means of any sort for my own or someone else's advantage will lead to my immediate disqualification. The decision of RailwayPrep will be final in these matters and cannot be appealed.
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Sticky Action Bar */}
        <footer className="bg-[#181D27] border-t border-slate-800 px-4 sm:px-8 py-4 shrink-0 shadow-lg">
          <div className="max-w-3xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="w-full sm:w-auto flex-1 max-w-sm">
              <label className="text-[10px] text-slate-400 font-bold block mb-1 uppercase tracking-wider">
                Choose your Default Language:
              </label>
              <div className="relative">
                <select
                  value={globalLang}
                  onChange={(e) => handleGlobalLangToggle(e.target.value)}
                  className="w-full bg-[#0F1522] border border-slate-700 hover:border-teal-400 text-teal-300 font-bold text-xs sm:text-sm rounded-xl px-3.5 py-2.5 cursor-pointer outline-none transition-colors appearance-none pr-8"
                >
                  <option value="hi">हिन्दी (Hindi)</option>
                  <option value="en">English</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                  ▼
                </div>
              </div>
            </div>

            <button
              onClick={() => setHasStarted(true)}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-900/50 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1 sm:mt-4"
            >
              <span>Agree and Continue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ACTIVE CBT EXAM INTERFACE (Matches Testbook Screenshot 2)
  // -------------------------------------------------------------
  return (
    <div className="fixed inset-0 z-50 bg-[#080D1A] flex flex-col overflow-hidden text-slate-100 select-none">
      
      {/* 1. TESTBOOK TOP BAR (Exact Testbook Screenshot 2: Pause Icon + Timer + Title + Lang + Menu) */}
      <header className="bg-[#16181f] border-b border-slate-800 px-3 sm:px-5 py-2 flex items-center justify-between shrink-0 shadow-md z-30">
        
        {/* Left: Pause Icon + Overall Timer + Exam/Section Subtitle */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          {/* Pause Button / Circle */}
          <button
            onClick={handleTriggerPause}
            className="w-8 h-8 rounded-full border border-slate-600 hover:border-teal-400 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
            title="Pause & Save Test"
          >
            <Pause className="w-3.5 h-3.5 fill-current" />
          </button>

          {/* Bold Digital Countdown Timer + Test Title Underneath */}
          <div className="min-w-0">
            <div className="font-mono font-black text-sm sm:text-base text-white tracking-wide">
              {formatOverallTime(timeLeft)}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 truncate max-w-[170px] sm:max-w-md">
              {test.title}
            </div>
          </div>
        </div>

        {/* Right: Language Switcher [E | अ] + Palette Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Toggle Button [E | अ] */}
          <button
            onClick={() => handleGlobalLangToggle(globalLang === 'hi' ? 'en' : 'hi')}
            className="px-2.5 py-1 rounded-lg bg-[#202531] hover:bg-[#282e3d] border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer text-slate-200"
            title="Toggle Test Language"
          >
            <span className={globalLang === 'en' ? 'text-blue-400 font-extrabold' : 'text-slate-400'}>E</span>
            <span className="text-slate-600">|</span>
            <span className={globalLang === 'hi' ? 'text-blue-400 font-extrabold' : 'text-slate-400'}>अ</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullScreen}
            title={isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen'}
            className="hidden sm:flex p-1.5 rounded-lg bg-[#202531] hover:bg-[#282e3d] border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu ≡ to open Question Palette Drawer */}
          <button
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border transition-all flex items-center gap-1 cursor-pointer ${
              isPaletteOpen
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/40'
                : 'bg-[#202531] text-slate-200 border-slate-700 hover:border-slate-500'
            }`}
            title="Toggle Question Palette"
          >
            <Menu className="w-4 h-4" />
            <span className="text-xs font-bold hidden sm:inline">{isPaletteOpen ? 'Close Grid' : 'Questions'}</span>
          </button>
        </div>
      </header>

      {/* 2. TESTBOOK SECTIONS BAR (Matches Testbook Section Switching) */}
      <div className="bg-[#0e1118] border-b border-slate-800/80 px-3 sm:px-5 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
            SECTIONS:
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {availableSections.map((sec) => {
              const totalSec = sec === 'All Sections' 
                ? test.questions.length 
                : (test.sectionDistribution?.[sec] || test.questions.filter(q => q.section === sec).length);
              const ansSec = sec === 'All Sections'
                ? answeredCount
                : test.questions.filter(q => q.section === sec && answers[q.id] !== undefined).length;
              const isSelected = activeSectionFilter === sec;
              const isCurrentActive = currentQ?.section === sec;
              return (
                <button
                  key={sec}
                  onClick={() => handleSectionTabClick(sec)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-950/60 ring-2 ring-blue-400/50'
                      : isCurrentActive
                      ? 'bg-[#182848] text-blue-300 border border-blue-500/50'
                      : 'bg-[#151922] hover:bg-[#1e2430] text-slate-300 hover:text-white border border-slate-700/80'
                  }`}
                  title={`Click to switch to ${sec}`}
                >
                  <span>{sec === 'All Sections' ? 'All' : sec.replace('General ', '')}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isSelected ? 'bg-slate-950/40 text-white' : 'bg-slate-800 text-blue-300'
                  }`}>
                    {ansSec}/{totalSec}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Header Links */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs shrink-0">
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="text-slate-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Paper</span>
          </button>
          <span className="text-slate-700 hidden md:inline">•</span>
          <button
            onClick={() => setShowInstructions(true)}
            className="text-slate-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Instructions</span>
          </button>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE: Dynamic Full-Width Question View + Collapsible Right Palette */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* LEFT: QUESTION WORKSPACE (Auto-expands to 100% when palette is collapsed) */}
        <main className="flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#12141a] transition-all duration-300">
          <div>
            {/* SUBHEADER (Exact Testbook Screenshot 2: [1] | ⏱ 00:06  +1.0  -0.33  ⚠  Bookmark) */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800 mb-5 text-xs">
              
              {/* Question Number Pill + Vertical Separator + Per-Question Timer + Marks Pills */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Question Number Pill [1] */}
                <div className="w-7 h-7 rounded-md bg-[#222836] border border-slate-700 text-white font-black flex items-center justify-center text-xs">
                  {currentIndex + 1}
                </div>

                <span className="text-slate-600">|</span>

                {/* Per-Question Elapsed Timer */}
                <div className="flex items-center gap-1 text-slate-300 font-mono text-xs">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{formatQuestionTime(questionTimes[currentQ.id])}</span>
                </div>

                {/* Marks Pills: +1.0 in Green, -0.33 in Maroon (Exact Testbook Screenshot 2) */}
                <div className="flex items-center gap-1.5 font-mono font-bold text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-[#16382b] text-[#34d399] border border-emerald-500/30">
                    +{test.positiveMarks}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#3b1c24] text-[#f87171] border border-rose-500/30">
                    -{test.negativeMarks}
                  </span>
                </div>
              </div>

              {/* Right Icons: Report Triangle + Bookmark Ribbon + Star (Exact Testbook Screenshot 2) */}
              <div className="flex items-center gap-2.5 text-slate-400">
                {/* Per-question Language Toggle */}
                <div className="relative">
                  <select
                    value={currentQLang}
                    onChange={(e) => toggleQuestionLang(e.target.value)}
                    className="bg-[#202531] border border-slate-700 hover:border-blue-400 text-slate-200 text-xs font-bold rounded-lg px-2 py-0.5 pr-5 cursor-pointer outline-none transition-colors"
                  >
                    <option value="hi">हिन्दी</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <button
                  title="Report question"
                  onClick={() => alert('Question marked for reporting/verification.')}
                  className="hover:text-amber-400 transition-colors p-1"
                >
                  <AlertTriangle className="w-4 h-4" />
                </button>
                <button
                  title="Bookmark question"
                  onClick={() => setReviewStatus(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                  className={`transition-colors p-1 ${reviewStatus[currentQ.id] ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>

            {/* QUESTION CONTENT (Renderer with Tables, KaTeX Math & Figures/Diagrams) */}
            <div className="mb-6">
              <QuestionContentRenderer
                text={currentQ.question[currentQLang] || currentQ.question['en']}
                image={currentQ.image || currentQ[`image_${currentQLang}`]}
                className="text-sm sm:text-base lg:text-lg font-normal text-slate-100 leading-relaxed font-sans"
              />
            </div>

            {/* 4 NUMBERED OPTIONS CARDS (Exact Testbook Screenshot 2: 1.  2.  3.  4. with clean border, NO radio bullets) */}
            <div className="space-y-3 max-w-4xl mb-8">
              {getOptionsList(currentQ, currentQLang).map((optText, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                return (
                  <div
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 select-none ${
                      isSelected 
                        ? 'bg-[#182848]/60 border-blue-500 text-white ring-1 ring-blue-500/50 shadow-md shadow-blue-950/50'
                        : 'bg-[#1a1d26]/80 border-slate-700/70 text-slate-200 hover:bg-[#202531] hover:border-slate-600'
                    }`}
                  >
                    {/* Option Serial Number: 1., 2., 3., 4. (Muted gray or vibrant blue when selected) */}
                    <span className={`text-sm sm:text-base font-bold min-w-[20px] transition-colors shrink-0 ${
                      isSelected ? 'text-blue-400 font-black' : 'text-slate-400'
                    }`}>
                      {optIdx + 1}.
                    </span>

                    {/* Option Text Statement */}
                    <span className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed text-slate-100">
                      {optText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FIXED BOTTOM ACTION BAR (Exact Testbook Screenshot 2: Mark & Next | Clear | Save & Next) */}
          <footer className="pt-3 border-t border-slate-800 mt-4 flex items-center justify-between gap-2 shrink-0 bg-[#12141a]">
            {/* 1. Mark & Next Button (Outlined) */}
            <button
              onClick={handleMarkForReviewAndNext}
              className="px-3 sm:px-5 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Mark & Next
            </button>

            {/* Center: Previous Navigation (for desktop/tablet convenience) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="hidden sm:flex px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-40 text-xs font-semibold items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              {/* 2. Clear Response Button (Outlined) */}
              <button
                onClick={handleClearResponse}
                className="px-3 sm:px-5 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>

            {/* 3. Save & Next Button (Solid Vibrant Blue #2563eb - Exact Testbook Screenshot 2) */}
            <button
              onClick={handleSaveAndNext}
              className="px-5 sm:px-8 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/50 transition-all cursor-pointer"
            >
              Save & Next
            </button>
          </footer>
        </main>

        {/* RIGHT PALETTE DRAWER (Testbook Drawer Screenshot 3) */}
        {/* On Mobile: Slide-over backdrop drawer. On Desktop: Seamless collapsible column */}
        <aside
          className={`
            fixed lg:static top-0 right-0 bottom-0 z-40 
            w-80 sm:w-88 lg:w-80 shrink-0
            bg-[#10131a] border-l border-slate-800 p-4 
            flex flex-col justify-between 
            transition-transform duration-300 ease-in-out shadow-2xl
            ${isPaletteOpen ? 'translate-x-0' : 'translate-x-full lg:hidden'}
          `}
        >
          {/* Mobile Close Button for Palette */}
          <div className="lg:hidden flex justify-between items-center pb-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-300">Question Palette</span>
            <button
              onClick={() => setIsPaletteOpen(false)}
              className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {renderPaletteContent()}
        </aside>

        {/* Mobile Backdrop Overlay when Palette is open */}
        {isPaletteOpen && (
          <div 
            onClick={() => setIsPaletteOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 lg:hidden"
          />
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* PAUSE & EXIT CONFIRMATION MODAL (Testbook & Student Flexibility) */}
      {/* ------------------------------------------------------------- */}
      {showPauseModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161a24] border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              ⏸
            </div>
            <h3 className="text-lg font-black text-white">Test Paused / प्रगति सुरक्षित</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              आपकी परीक्षा प्रगति और बचा हुआ समय सुरक्षित कर लिया गया है। आप पोर्टल पर वापस आकर कभी भी प्रश्न {currentIndex + 1} से इस टेस्ट को रीज़्यूम कर सकते हैं।
            </p>

            <div className="grid grid-cols-2 gap-3 my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-center">
              <div>
                <div className="text-slate-400 text-[11px]">हल किए गए सवाल</div>
                <div className="text-emerald-400 font-bold mt-0.5">{answeredCount} / {test.questions.length}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">शेष समय</div>
                <div className="text-amber-400 font-bold font-mono mt-0.5">{formatOverallTime(timeLeft)}</div>
              </div>
            </div>

            <div className="space-y-2 mt-5">
              <button
                onClick={() => {
                  setIsPaused(false);
                  setShowPauseModal(false);
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-900 transition-all cursor-pointer"
              >
                टेस्ट जारी रखें (Resume Test Now)
              </button>
              <button
                onClick={handleConfirmSaveAndExit}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all cursor-pointer"
              >
                डैशबोर्ड पर जाएँ (Save & Exit to Dashboard)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* FINAL SUBMIT CONFIRMATION MODAL */}
      {/* ------------------------------------------------------------- */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161a24] border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Submit CBT Mock Test?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Are you sure you want to finalize and submit your test?
            </p>

            {/* Quick summary grid */}
            <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <div>
                <div className="text-slate-400 text-[10px]">Attempted</div>
                <div className="text-teal-400 font-bold mt-0.5">{answeredCount} Qs</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px]">Unattempted</div>
                <div className="text-rose-400 font-bold mt-0.5">{test.questions.length - answeredCount} Qs</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px]">Marked for Review</div>
                <div className="text-purple-400 font-bold mt-0.5">{markedOnlyCount + answeredAndMarkedCount} Qs</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px]">Time Left</div>
                <div className="text-amber-400 font-bold mt-0.5">{formatOverallTime(timeLeft)}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700"
              >
                No, Continue Test
              </button>
              <button
                onClick={handleFinalSubmit}
                className="flex-1 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-md shadow-teal-950"
              >
                Yes, Submit Final
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* QUESTION PAPER FULL MODAL */}
      {/* ------------------------------------------------------------- */}
      {showQuestionPaper && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col p-4 sm:p-6 overflow-hidden">
          <div className="max-w-4xl w-full mx-auto bg-[#10141e] border border-slate-800 rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>Question Paper View • {test.title}</span>
                </h3>
                <p className="text-[11px] text-slate-400">Total {test.questions.length} Questions</p>
              </div>
              <button
                onClick={() => setShowQuestionPaper(false)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {test.questions.map((q, idx) => (
                <div key={q.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-teal-400">Q.{idx + 1} ({q.section})</span>
                    <span className="text-[10px] text-slate-400">+1.0 / -0.33</span>
                  </div>
                  <QuestionContentRenderer
                    text={q.question[globalLang] || q.question['en']}
                    image={q.image || q[`image_${globalLang}`]}
                    className="text-slate-200 mb-2"
                  />
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pl-2">
                    {getOptionsList(q, globalLang).map((opt, oIdx) => (
                      <div key={oIdx}>
                        <span className="font-bold text-slate-500 mr-1">{oIdx + 1}.</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-800 text-right">
              <button
                onClick={() => setShowQuestionPaper(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* INSTRUCTIONS MODAL */}
      {/* ------------------------------------------------------------- */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-xl w-full bg-[#10141e] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-400" />
                <span>Test Instructions & Rules</span>
              </h3>
              <button
                onClick={() => setShowInstructions(false)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
              <p>• <strong>Bilingual Toggle:</strong> You can toggle individual question language anytime using the dropdown or toggle the entire test from the top bar.</p>
              <p>• <strong>Marking Scheme:</strong> +{test.positiveMarks} mark for each correct answer; -{test.negativeMarks} mark for each wrong answer.</p>
              <p>• <strong>Color Palette:</strong> Green = Answered, Red = Not Answered, Purple = Marked for Review, Dark = Not Visited.</p>
              <p>• <strong>Save & Exit:</strong> You can pause and exit anytime using the Pause icon; all your answers and remaining time are preserved.</p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowInstructions(false)}
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs"
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
