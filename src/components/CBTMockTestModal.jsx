import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, 
  RotateCcw, Bookmark, Send, Globe, HelpCircle, Shield, Award,
  FileText, Info, Layers, Check, AlertTriangle, Menu, Pause, Play, AlertOctagon,
  Maximize, Minimize
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
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Time spent per question: { [qId]: seconds }
  const [questionTimes, setQuestionTimes] = useState({});

  // Flexible Collapsible Right Palette State (Testbook Standard - Screenshot 2 & 3)
  // Default: Open on very wide desktop screens (>= 1280px), collapsed on phones/tablets/landscape
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

  // Timer countdown
  useEffect(() => {
    if (isPaused) return;
    if (timeLeft <= 0) {
      handleFinalSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
      // increment time on current question
      setQuestionTimes(prev => ({
        ...prev,
        [currentQ.id]: (prev[currentQ.id] || 0) + 1
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isPaused, currentQ.id]);

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
  const currentQLang = questionLangOverrides[currentQ.id] || globalLang;

  const toggleQuestionLang = (newLang) => {
    setQuestionLangOverrides(prev => ({
      ...prev,
      [currentQ.id]: newLang
    }));
  };

  const handleGlobalLangToggle = (newLang) => {
    setGlobalLang(newLang);
    setQuestionLangOverrides({});
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
    // If screen is smaller than desktop (1024px), close palette after picking a question
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsPaletteOpen(false);
    }
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

  // Styling for question palette buttons (matching Testbook Screenshots 2 & 3)
  const getPaletteClass = (q, idx) => {
    const isCurrent = idx === currentIndex;
    const isAnswered = answers[q.id] !== undefined;
    const isMarked = reviewStatus[q.id];
    const isVisited = visitedStatus[q.id];

    let base = "h-8.5 sm:h-9 rounded-md text-xs font-bold flex items-center justify-center transition-all cursor-pointer relative shadow-sm ";

    if (isAnswered && isMarked) {
      base += "bg-purple-700 text-white border-2 border-purple-400";
    } else if (isMarked) {
      base += "bg-purple-800 text-purple-200 border border-purple-500 rounded-full";
    } else if (isAnswered) {
      base += "bg-emerald-500 text-white font-extrabold";
    } else if (isVisited) {
      base += "bg-rose-600 text-white font-semibold";
    } else {
      base += "bg-[#182338] text-slate-300 border border-slate-700 hover:bg-slate-700";
    }

    if (isCurrent) {
      base += " ring-2 ring-teal-400 ring-offset-2 ring-offset-[#0B1329] scale-105 z-10";
    }

    return base;
  };

  const availableSections = test.sections || ['All Sections'];

  // Palette Inner Content Component
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

        {/* 5 Testbook Status Badges (Pills) */}
        <div className="grid grid-cols-2 gap-1.5 text-[11px] mb-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="truncate">{answeredCount} Answered</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/80 text-purple-300">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
            <span className="truncate">{markedOnlyCount} Marked</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600 shrink-0"></span>
            <span className="truncate">{notVisitedCount} Not Visited</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/80 text-purple-300">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 relative shrink-0">
              <span className="absolute inset-0.5 rounded-full bg-emerald-400"></span>
            </div>
            <span className="truncate">{answeredAndMarkedCount} Marked & Ans</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-950/60 border border-rose-800/80 text-rose-300 col-span-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 shrink-0"></span>
            <span className="truncate">{notAnsweredCount} Not Answered</span>
          </div>
        </div>

        {/* Section Selector in Palette */}
        <div className="mb-2.5">
          <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span className="truncate">SECTION : {activeSectionFilter}</span>
            <span className="text-slate-400 font-normal shrink-0">({test.questions.length} Qs)</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {availableSections.map((sec) => (
              <button
                key={sec}
                onClick={() => handleSectionTabClick(sec)}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap transition-colors ${
                  activeSectionFilter === sec
                    ? 'bg-teal-500 text-slate-950 font-bold'
                    : 'bg-[#182338] text-slate-400 hover:text-white'
                }`}
              >
                {sec === 'All Sections' ? 'All' : sec.replace('General ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Column Question Numbers Grid */}
        <div className="grid grid-cols-5 gap-1.5 max-h-[46vh] lg:max-h-[380px] overflow-y-auto pr-1">
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
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Palette Bottom Actions: Question Paper + Instructions + Submit Test (Screenshot 2) */}
      <div className="pt-2.5 border-t border-slate-800/80 space-y-2 shrink-0">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="py-1.5 px-2 rounded-lg bg-[#18263E] hover:bg-[#203252] border border-cyan-800/60 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="truncate">Question Paper</span>
          </button>
          <button
            onClick={() => setShowInstructions(true)}
            className="py-1.5 px-2 rounded-lg bg-[#18263E] hover:bg-[#203252] border border-cyan-800/60 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="truncate">Instructions</span>
          </button>
        </div>

        <button
          onClick={() => setShowConfirmSubmit(true)}
          className="w-full py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-teal-950/80 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Check className="w-4 h-4" />
          <span>Submit Test</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#080D1A] flex flex-col overflow-hidden text-slate-100 select-none">
      
      {/* 1. TESTBOOK TOP BAR (Branding + Digital Timer + FullScreen + Pause Button) */}
      <header className="bg-[#0D1627] border-b border-slate-800 px-3 sm:px-5 py-2 flex items-center justify-between shrink-0 shadow-sm z-30">
        {/* Left: Testbook Style Branding */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 font-black text-sm sm:text-base tracking-tight">
            <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center text-slate-950 text-xs font-black">
              ⚡
            </div>
            <span>
              <span className="text-white font-extrabold">railway</span>
              <span className="text-teal-400 font-black">prep</span>
            </span>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-xs font-semibold text-slate-300 truncate max-w-xs">
            {test.exam || 'ALP CBT 1'}
          </span>
        </div>

        {/* Right: Digital Timer Box + FullScreen + Pause Button (Exact Screenshot 2) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Digital Timer Box */}
          <div className={`px-2.5 sm:px-3 py-1 rounded-lg border font-mono font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-inner ${
            timeLeft < 300 
              ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
              : 'bg-[#0A111F] border-slate-700 text-slate-200'
          }`}>
            <span className="text-[10px] text-slate-400 hidden sm:inline">Time Left:</span>
            <span>{formatOverallTime(timeLeft)}</span>
          </div>

          {/* Full Screen Toggle (Testbook Screenshot 2) */}
          <button
            onClick={toggleFullScreen}
            title={isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen'}
            className="hidden sm:flex px-2.5 py-1 rounded-lg bg-[#131F37] hover:bg-[#1A2A4A] border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold items-center gap-1 transition-colors"
          >
            {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isFullscreen ? 'Exit Screen' : 'Enter Full Screen'}</span>
          </button>

          {/* Pause Button (Testbook Screenshot 2) */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-2 sm:px-2.5 py-1 rounded-lg bg-[#131F37] hover:bg-[#1A2A4A] border border-slate-700 text-teal-300 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            {isPaused ? <Play className="w-3 h-3 fill-teal-400" /> : <Pause className="w-3 h-3" />}
            <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          {/* Quick Submit Button */}
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="px-2.5 sm:px-3 py-1 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950 transition-all flex items-center gap-1"
          >
            <Send className="w-3 h-3" />
            <span>Submit</span>
          </button>
        </div>
      </header>

      {/* 2. TESTBOOK SECTIONS BAR (Matches Testbook Screenshot 4) */}
      <div className="bg-[#091120] border-b border-slate-800/80 px-3 sm:px-5 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
            SECTIONS:
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {availableSections.map((sec) => {
              const count = sec === 'All Sections' 
                ? test.questions.length 
                : (test.sectionDistribution?.[sec] || test.questions.filter(q => q.section === sec).length);
              const isSelected = activeSectionFilter === sec;
              return (
                <button
                  key={sec}
                  onClick={() => handleSectionTabClick(sec)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-950/60'
                      : 'bg-[#101C33] hover:bg-[#182848] text-slate-300 hover:text-white border border-slate-700/80'
                  }`}
                >
                  <span>{sec === 'All Sections' ? 'All' : sec.replace('General ', '')}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isSelected ? 'bg-slate-950/25 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Header Links & Palette Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs shrink-0">
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="text-slate-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Paper</span>
          </button>
          <span className="text-slate-700 hidden md:inline">•</span>
          <button
            onClick={() => setShowInstructions(true)}
            className="text-slate-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Instructions</span>
          </button>
          {/* Quick Palette Toggle Button for Mobile / Tablets */}
          <button
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
            className={`lg:hidden px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border transition-colors cursor-pointer ${
              isPaletteOpen 
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/50' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-teal-500/50'
            }`}
          >
            <Menu className="w-3.5 h-3.5" />
            <span>{isPaletteOpen ? 'Close Grid' : 'Questions'}</span>
          </button>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE: Dynamic Full-Width Question View + Collapsible Right Palette */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* LEFT: QUESTION WORKSPACE (Auto-expands to 100% when palette is collapsed!) */}
        <main className="flex-1 flex flex-col justify-between overflow-y-auto p-3.5 sm:p-6 lg:p-7 bg-[#070B18] transition-all duration-300">
          <div>
            {/* QUESTION SUBHEADER (Question No. + Marks + Time + Language Dropdown - Screenshot 2 & 4) */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800/80 mb-4 sm:mb-5 text-xs">
              
              {/* Question Number */}
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black text-white">
                  Question No. {currentIndex + 1}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 font-medium text-[11px] hidden md:inline">
                  {currentQ.section}
                </span>
              </div>

              {/* Marks + Elapsed Question Timer + Language Switcher */}
              <div className="flex items-center gap-2 sm:gap-3">
                
                {/* Marks Badges (+1 in Green, -0.33 in Red) */}
                <div className="flex items-center gap-1 font-mono font-bold text-[11px]">
                  <span className="text-slate-400 text-[10px] hidden sm:inline mr-0.5">Marks</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black">
                    +{test.positiveMarks}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white font-bold">
                    -{test.negativeMarks}
                  </span>
                </div>

                {/* Per-Question Elapsed Timer ("Time: 00:13" in Testbook Screenshot 2) */}
                <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  <span className="hidden sm:inline text-slate-500 text-[10px]">Time</span>
                  <Clock className="w-3 h-3 text-teal-400" />
                  <span>{formatQuestionTime(questionTimes[currentQ.id])}</span>
                </div>

                {/* Bilingual Language Dropdown (Testbook Screenshot 2: "View in Hindi ▼") */}
                <div className="relative">
                  <select
                    value={currentQLang}
                    onChange={(e) => toggleQuestionLang(e.target.value)}
                    className="bg-[#101A2E] border border-slate-700 hover:border-teal-400 text-teal-300 text-xs font-bold rounded-lg px-2 py-0.5 pr-5 cursor-pointer outline-none transition-colors"
                  >
                    <option value="hi">Hindi</option>
                    <option value="en">English</option>
                  </select>
                </div>

                {/* Report icon */}
                <button
                  title="Report question"
                  onClick={() => alert('Question marked for review.')}
                  className="text-slate-500 hover:text-amber-400 transition-colors"
                >
                  <AlertOctagon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* QUESTION TEXT (Full Width, Crisp Typography) */}
            <div className="text-sm sm:text-base lg:text-lg font-normal text-slate-100 leading-relaxed mb-6 font-sans">
              {currentQ.question[currentQLang] || currentQ.question['en']}
            </div>

            {/* 4 OPTIONS (Radio Buttons - Testbook Screenshot 2 & 4) */}
            <div className="space-y-3 max-w-4xl mb-8">
              {getOptionsList(currentQ, currentQLang).map((optText, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                return (
                  <label
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 select-none ${
                      isSelected 
                        ? 'bg-[#0E2238] border-teal-400 text-white ring-1 ring-teal-400/50 shadow-md shadow-teal-950/60'
                        : 'bg-[#0B1325]/70 border-slate-800 text-slate-300 hover:bg-[#101B33] hover:border-slate-700'
                    }`}
                  >
                    {/* Circular Radio Icon (○) */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'border-teal-400 bg-teal-500' : 'border-slate-500 bg-transparent'
                    }`}>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed text-slate-200">
                      {optText}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* FIXED BOTTOM ACTION BAR (Screenshot 2: 3 buttons side-by-side) */}
          <footer className="pt-3.5 border-t border-slate-800 mt-4 flex items-center justify-between gap-2 shrink-0">
            {/* Mark for Review & Next */}
            <button
              onClick={handleMarkForReviewAndNext}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg border border-cyan-700/60 hover:bg-cyan-950/40 text-cyan-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">Mark for Review & Next</span>
            </button>

            {/* Clear Response */}
            <button
              onClick={handleClearResponse}
              disabled={answers[currentQ.id] === undefined}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-semibold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <span className="truncate">Clear Response</span>
            </button>

            {/* Previous button (Visible on sm+ screens) */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="hidden sm:flex px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-colors items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {/* Save & Next (Solid Teal Button - Testbook Standard) */}
            <button
              onClick={handleSaveAndNext}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-md shadow-teal-950 transition-all flex items-center justify-center gap-1"
            >
              <span className="truncate">{currentIndex === test.questions.length - 1 ? 'Save & Review' : 'Save & Next'}</span>
              <ChevronRight className="w-3.5 h-3.5 font-bold" />
            </button>
          </footer>
        </main>

        {/* RIGHT: COLLAPSIBLE QUESTION PALETTE (Testbook Screenshots 2 & 3) */}
        {/* On Desktop/Landscape: Collapsible Sidebar with Left Toggle Handle */}
        {/* On Mobile Portrait: Slides over as Drawer */}
        <aside 
          className={`fixed lg:relative inset-y-0 right-0 z-40 bg-[#0B1329] border-l border-slate-800 flex flex-col justify-between transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none ${
            isPaletteOpen 
              ? 'w-[85%] max-w-[320px] sm:w-80 p-3.5 sm:p-4 translate-x-0 opacity-100' 
              : 'w-0 p-0 translate-x-full lg:translate-x-0 lg:w-0 overflow-hidden border-none opacity-0 pointer-events-none'
          }`}
        >
          {/* COLLAPSE TOGGLE HANDLE (When Open: Attached to Left Border of Palette - Screenshot 2) */}
          {isPaletteOpen && (
            <button
              onClick={() => setIsPaletteOpen(false)}
              title="Collapse Palette (Hide Question Numbers)"
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-14 rounded-l-md bg-[#132238] hover:bg-teal-500 hover:text-slate-950 border-l border-y border-slate-700 text-slate-300 flex items-center justify-center transition-all z-50 cursor-pointer shadow-xl group"
            >
              <ChevronRight className="w-4 h-4 group-hover:scale-125 transition-transform stroke-[2.5]" />
            </button>
          )}

          {/* Palette Content */}
          {isPaletteOpen && renderPaletteContent()}
        </aside>

        {/* EXPAND TOGGLE HANDLE (When Collapsed: Attached to Far Right Edge of Screen - Exact Screenshot 3) */}
        {!isPaletteOpen && (
          <button
            onClick={() => setIsPaletteOpen(true)}
            title="Expand Palette (Show Question Numbers)"
            className="fixed right-0 top-1/2 -translate-y-1/2 w-6 h-16 rounded-l-lg bg-[#18263E] hover:bg-teal-500 hover:text-slate-950 border-l border-y border-slate-700 text-teal-300 flex items-center justify-center transition-all z-30 shadow-2xl cursor-pointer active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-125 transition-transform stroke-[2.5]" />
          </button>
        )}

        {/* Mobile Backdrop when Palette Drawer is open on narrow mobile */}
        {isPaletteOpen && (
          <div 
            onClick={() => setIsPaletteOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity"
          />
        )}

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
              <button onClick={() => setShowConfirmSubmit(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Please review your test status summary before final submission:
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
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black shadow-md shadow-teal-950 transition-colors cursor-pointer"
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
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
              {test.questions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl bg-[#0F1B2F] border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-bold text-teal-400">Q.{idx + 1} • {q.section}</span>
                    <span>Single Choice (+{test.positiveMarks} / -{test.negativeMarks})</span>
                  </div>
                  <div className="text-sm text-slate-200 mb-3 font-medium">
                    {q.question[globalLang] || q.question['en']}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {getOptionsList(q, globalLang).map((opt, oIdx) => (
                      <div key={oIdx} className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
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
                <span>Official Exam Instructions ({test.exam || 'RRB ALP CBT 1'})</span>
              </div>
              <button onClick={() => setShowInstructions(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-teal-400 mb-1">1. Duration & Marking Scheme</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Total duration is <strong>{test.durationMinutes} minutes</strong>.</li>
                  <li>Total number of questions: <strong>{test.questions.length} questions</strong>.</li>
                  <li>Each correct answer carries <strong>+{test.positiveMarks} mark</strong>.</li>
                  <li>Negative marking: <strong>-{test.negativeMarks} mark (1/3rd)</strong> for each incorrect answer.</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-teal-400 mb-1">2. Flexible Collapsible Question Palette</h4>
                <p className="text-slate-400">
                  You can click the <strong>&gt;</strong> handle on the divider to collapse the question palette anytime and view the question in 100% full-width, and click the <strong>&lt;</strong> handle on the right edge to expand it back!
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-teal-400 mb-1">3. Question Palette Colors</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li><span className="text-emerald-400 font-bold">Green:</span> Answered</li>
                  <li><span className="text-rose-400 font-bold">Red:</span> Visited but Not Answered</li>
                  <li><span className="text-purple-400 font-bold">Purple:</span> Marked for Review</li>
                  <li><span className="text-purple-300 font-bold">Purple with Green Dot:</span> Answered & Marked for Review</li>
                  <li><span className="text-slate-400 font-bold">Dark Slate:</span> Not Visited</li>
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

      {/* PAUSE OVERLAY */}
      {isPaused && (
        <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#0B1329] border border-slate-800 rounded-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 mx-auto flex items-center justify-center">
              <Pause className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Test Paused</h3>
            <p className="text-xs text-slate-400">
              The clock is stopped. You can resume your test anytime without losing your progress.
            </p>
            <button
              onClick={() => setIsPaused(false)}
              className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950"
            >
              Resume Test
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
