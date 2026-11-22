import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, 
  RotateCcw, Bookmark, Send, Globe, HelpCircle, Shield, Award,
  FileText, Info, Layers, Check, AlertTriangle, Menu, Pause, Play, AlertOctagon
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
  
  // Time spent per question: { [qId]: seconds }
  const [questionTimes, setQuestionTimes] = useState({});

  // Mobile Palette Drawer Toggle (Exact Testbook Mobile UX)
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);

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
    setIsMobilePaletteOpen(false); // Close drawer on mobile upon selection
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
    setIsMobilePaletteOpen(false);
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

  // Styling for question palette buttons (matching Testbook Screenshots 3 & 4)
  const getPaletteClass = (q, idx) => {
    const isCurrent = idx === currentIndex;
    const isAnswered = answers[q.id] !== undefined;
    const isMarked = reviewStatus[q.id];
    const isVisited = visitedStatus[q.id];

    let base = "h-9 rounded-md text-xs font-bold flex items-center justify-center transition-all cursor-pointer relative shadow-sm ";

    if (isAnswered && isMarked) {
      // Purple with small green indicator: Answered & Marked for Review
      base += "bg-purple-700 text-white border-2 border-purple-400";
    } else if (isMarked) {
      // Purple: Marked for Review
      base += "bg-purple-800 text-purple-200 border border-purple-500 rounded-full";
    } else if (isAnswered) {
      // Green: Answered (Testbook bright green)
      base += "bg-emerald-500 text-white font-extrabold";
    } else if (isVisited) {
      // Red: Visited but Not Answered
      base += "bg-rose-600 text-white font-semibold";
    } else {
      // Dark/Gray: Not Visited (Testbook dark slate)
      base += "bg-[#182338] text-slate-300 border border-slate-700 hover:bg-slate-700";
    }

    if (isCurrent) {
      base += " ring-2 ring-teal-400 ring-offset-2 ring-offset-[#0B1329] scale-105 z-10";
    }

    return base;
  };

  const availableSections = test.sections || ['All Sections'];

  // Palette Content Component (Used in both Desktop Right Panel & Mobile Drawer)
  const renderPaletteContent = () => (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* User Profile Header (Indian Flag + Aspirant Name - Testbook Style) */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#131F37] border border-slate-800 mb-3.5">
          <div className="text-xl shrink-0">🇮🇳</div>
          <div className="text-xs">
            <div className="font-bold text-white tracking-wide">Railway Aspirant</div>
            <div className="text-slate-400 text-[11px] truncate">{test.exam || 'RRB ALP 2026'}</div>
          </div>
        </div>

        {/* 5 Testbook Status Badges (Pills) */}
        <div className="grid grid-cols-2 gap-2 text-[11px] mb-4">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="truncate">{answeredCount} Answered</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/80 text-purple-300">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
            <span className="truncate">{markedOnlyCount} Marked</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600 shrink-0"></span>
            <span className="truncate">{notVisitedCount} Not Visited</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/80 text-purple-300">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 relative shrink-0">
              <span className="absolute inset-0.5 rounded-full bg-emerald-400"></span>
            </div>
            <span className="truncate">{answeredAndMarkedCount} Marked & Ans</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-950/60 border border-rose-800/80 text-rose-300 col-span-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 shrink-0"></span>
            <span className="truncate">{notAnsweredCount} Not Answered</span>
          </div>
        </div>

        {/* Section Selector in Drawer */}
        <div className="mb-3">
          <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>SECTION : {activeSectionFilter}</span>
            <span className="text-slate-400 font-normal">({test.questions.length} Qs)</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {availableSections.map((sec) => (
              <button
                key={sec}
                onClick={() => handleSectionTabClick(sec)}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold whitespace-nowrap transition-colors ${
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
        <div className="grid grid-cols-5 gap-2 max-h-[42vh] lg:max-h-[380px] overflow-y-auto pr-1">
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

      {/* Drawer Bottom Actions: Question Paper + Instructions + Submit Test (Screenshot 3) */}
      <div className="pt-3 border-t border-slate-800/80 space-y-2 shrink-0">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => { setShowQuestionPaper(true); setIsMobilePaletteOpen(false); }}
            className="py-2 px-2 rounded-lg bg-[#18263E] hover:bg-[#203252] border border-cyan-800/60 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Question Paper</span>
          </button>
          <button
            onClick={() => { setShowInstructions(true); setIsMobilePaletteOpen(false); }}
            className="py-2 px-2 rounded-lg bg-[#18263E] hover:bg-[#203252] border border-cyan-800/60 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Instructions</span>
          </button>
        </div>

        <button
          onClick={() => { setShowConfirmSubmit(true); setIsMobilePaletteOpen(false); }}
          className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-teal-950/80 transition-all flex items-center justify-center gap-1.5"
        >
          <Check className="w-4 h-4" />
          <span>Submit Test</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#080D1A] flex flex-col overflow-hidden text-slate-100 select-none">
      
      {/* 1. TESTBOOK TOP BAR (Testbook Logo + Digital Timer + Pause Button) */}
      <header className="bg-[#0D1627] border-b border-slate-800 px-3 sm:px-5 py-2.5 flex items-center justify-between shrink-0 shadow-sm">
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

        {/* Right: Digital Timer Box + Pause Button (Exact Screenshot 4) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Digital Timer Box */}
          <div className={`px-3 py-1.5 rounded-lg border font-mono font-bold text-xs sm:text-sm flex items-center gap-2 shadow-inner ${
            timeLeft < 300 
              ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
              : 'bg-[#0A111F] border-slate-700 text-slate-200'
          }`}>
            <span>{formatOverallTime(timeLeft)}</span>
          </div>

          {/* Pause Button (Testbook Style) */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-2.5 py-1.5 rounded-lg bg-[#131F37] hover:bg-[#1A2A4A] border border-slate-700 text-teal-300 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            {isPaused ? <Play className="w-3 h-3 fill-teal-400" /> : <Pause className="w-3 h-3" />}
            <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          {/* Quick Submit Button (Desktop Only) */}
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="hidden sm:flex px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950 transition-all items-center gap-1"
          >
            <Send className="w-3 h-3" />
            <span>Submit</span>
          </button>
        </div>
      </header>

      {/* 2. EXAM TITLE & SECTION TABS (Screenshot 4) */}
      <div className="bg-[#091120] border-b border-slate-800/80 px-3 sm:px-5 py-2 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-xs font-semibold text-slate-200 truncate max-w-[200px] sm:max-w-md">
            {test.title}
          </span>
          <span className="px-2 py-0.5 rounded bg-teal-500 text-slate-950 font-bold text-[11px] shrink-0">
            {currentQ.section ? currentQ.section.substring(0, 12) : 'CBT'}
          </span>
        </div>

        {/* Desktop Question Paper & Instructions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="text-xs text-slate-400 hover:text-teal-300 flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Paper</span>
          </button>
          <span className="text-slate-700">•</span>
          <button
            onClick={() => setShowInstructions(true)}
            className="text-xs text-slate-400 hover:text-teal-300 flex items-center gap-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Instructions</span>
          </button>
        </div>
      </div>

      {/* 3. MAIN BODY WORKSPACE (Full Width Question on Mobile; Split on Desktop) */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* LEFT / FULL-WIDTH QUESTION AREA (Full width on mobile - Screenshot 4) */}
        <main className="flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-7 bg-[#070B18]">
          <div>
            {/* SUBHEADER (Question No. + Marks + Time + Language Dropdown - Exact Screenshot 4) */}
            <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-800/80 mb-5 text-xs">
              
              {/* Question Number (Large bold like Testbook "3.") */}
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-white">
                  {currentIndex + 1}.
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 font-medium text-[11px] hidden sm:inline">
                  {currentQ.section}
                </span>
              </div>

              {/* Center/Right: Marks + Question Timer + Language Switcher (Screenshot 4) */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                
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

                {/* Per-Question Elapsed Timer ("Time: 00:06" in Screenshot 4) */}
                <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  <Clock className="w-3 h-3 text-teal-400" />
                  <span>{formatQuestionTime(questionTimes[currentQ.id])}</span>
                </div>

                {/* Per-Question Bilingual Language Dropdown (Screenshot 4) */}
                <div className="relative">
                  <select
                    value={currentQLang}
                    onChange={(e) => toggleQuestionLang(e.target.value)}
                    className="bg-[#101A2E] border border-slate-700 hover:border-teal-400 text-teal-300 text-xs font-bold rounded-lg px-2.5 py-1 pr-6 cursor-pointer outline-none transition-colors"
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

            {/* 4 OPTIONS (Radio Button List - Exact Screenshot 4) */}
            <div className="space-y-3 max-w-3xl mb-8">
              {(currentQ.options[currentQLang] || currentQ.options['en']).map((optText, optIdx) => {
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
                    {/* Radio Circle Icon (Matching Screenshot 4) */}
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

          {/* FIXED BOTTOM ACTION BAR (Screenshot 4: 3 buttons side-by-side) */}
          <footer className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between gap-2 shrink-0">
            {/* Mark for Review & Next */}
            <button
              onClick={handleMarkForReviewAndNext}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-lg border border-cyan-700/60 hover:bg-cyan-950/40 text-cyan-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">Mark for Review & Next</span>
            </button>

            {/* Clear Response */}
            <button
              onClick={handleClearResponse}
              disabled={answers[currentQ.id] === undefined}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-semibold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <span className="truncate">Clear Response</span>
            </button>

            {/* Previous button (Visible on sm+ screens) */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="hidden sm:flex px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-colors items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {/* Save & Next (Solid Teal Button - Testbook Standard) */}
            <button
              onClick={handleSaveAndNext}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-md shadow-teal-950 transition-all flex items-center justify-center gap-1"
            >
              <span className="truncate">{currentIndex === test.questions.length - 1 ? 'Save & Review' : 'Save & Next'}</span>
              <ChevronRight className="w-3.5 h-3.5 font-bold" />
            </button>
          </footer>
        </main>

        {/* DESKTOP PERMANENT RIGHT PALETTE (Hidden on mobile < 1024px; visible on lg:) */}
        <aside className="hidden lg:flex w-80 shrink-0 bg-[#0B1329] p-4 flex-col justify-between overflow-y-auto border-l border-slate-800">
          {renderPaletteContent()}
        </aside>

        {/* MOBILE FLOATING ACTION BUTTON (FAB) [ ☰ ] (Screenshot 4) */}
        <button
          onClick={() => setIsMobilePaletteOpen(true)}
          title="Open Question Palette"
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-xl shadow-teal-950/80 flex items-center justify-center transition-transform active:scale-95"
        >
          <Menu className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* MOBILE SLIDE-OVER PALETTE DRAWER (Screenshot 3) */}
        {isMobilePaletteOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Dark Backdrop (Tap to close) */}
            <div 
              onClick={() => setIsMobilePaletteOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            />

            {/* Sliding Drawer Container from the Right */}
            <div className="fixed inset-y-0 right-0 w-[86%] max-w-sm bg-[#0B1426] border-l border-slate-800 z-50 flex flex-col justify-between p-4 shadow-2xl animate-in slide-in-from-right duration-200">
              
              {/* Floating Close Button Attached to Left Edge (Exact Screenshot 3) */}
              <button
                onClick={() => setIsMobilePaletteOpen(false)}
                className="absolute -left-11 bottom-20 w-11 h-11 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-l-xl flex items-center justify-center shadow-lg active:scale-95"
                title="Close Palette"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Drawer Content */}
              {renderPaletteContent()}
            </div>
          </div>
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
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black shadow-md shadow-teal-950 transition-colors"
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
                    {(q.options[globalLang] || q.options['en']).map((opt, oIdx) => (
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
                <h4 className="font-bold text-teal-400 mb-1">2. Bilingual Flexibility</h4>
                <p className="text-slate-400">
                  You can set your default language using the top dropdown. In addition, you can toggle language for <strong>any individual question</strong> right from the subheader dropdown without affecting other questions.
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
