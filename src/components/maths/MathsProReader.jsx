import React, { useState, useMemo, useRef } from 'react';
import {
  ArrowLeft, Crown, Sparkles, BookOpen, Table2,
  Zap, CheckCircle2, Printer, Layers, Globe, AlertTriangle, Play,
  RotateCcw, ChevronDown, ChevronUp, Compass, Filter, Target, Download, ExternalLink, ArrowUpRight
} from 'lucide-react';
import { MathText, RichFormatText } from '../QuestionContentRenderer';
import MultiMethodSolutionBox from '../MultiMethodSolutionBox';
import NumberSystemLabSVG from './NumberSystemLabSVG';
import ProFeatureGate from '../ncert/ProFeatureGate';
import { renderMathsCh1DiagramSvg } from '../../data/maths/diagrams/ch1NumberSystemDiagrams';
import { buildCustomTopicQuiz } from '../../utils/pyqHelper';
import {
  triggerMathsSavePdfDialog,
  downloadOfflineMathsBooklet,
  openMathsBlobPreviewTab,
} from '../../utils/mathsPdfGenerator';

const STORAGE_KEY_REVISED = 'railwayprep_maths_revised_v1';

const MODULE_QUICK_PILLS = [
  { id: 'mod-1-classification', label: '1.1 Number Tree', typeId: 'type-1-primes-parity' },
  { id: 'mod-2-divisibility', label: '1.2 Divisibility', typeId: 'type-2-composite-divisibility' },
  { id: 'mod-3-unit-c9', label: '1.3 Unit Digit & C9', typeId: 'type-7-unit-digit-perfect-sq' },
  { id: 'mod-4-factors-remainders', label: '1.4 Factors & Rem', typeId: 'type-8-remainder-consecutive' },
  { id: 'mod-5-hcf-lcm', label: '1.5 HCF & LCM', typeId: 'type-3-hcf-lcm-basics-decimals' },
  { id: 'mod-6-vbodmas-simplification', label: '1.6 VBODMAS & 4ab', typeId: 'type-9-vbodmas-brackets' },
  { id: 'mod-7-recurring-surds-indices', label: '1.7 Bar p/q & Surds', typeId: 'type-11-recurring-decimals' },
];

function loadRevisedMap() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_REVISED) || '{}');
  } catch {
    return {};
  }
}

export default function MathsProReader({
  chapterData,
  onBack,
  hasPassPro = false,
  onOpenPassPro,
  onStartChapterQuiz,
}) {
  const [lang, setLang] = useState('hi'); // 'hi' = Smart Board Hinglish (Eng terms + Hindi logic) | 'en' = Pure English
  const [studentMode, setStudentMode] = useState('all'); // 'all' | 'basic' | 'topper' | 'traps'
  const [activeSubTab, setActiveSubTab] = useState('all'); // 'all' | 'concepts' | 'labs' | 'pyqs' | 'tables'
  const [levelFilter, setLevelFilter] = useState('all');
  const [selectedTypeId, setSelectedTypeId] = useState('all');
  const [highlightedId, setHighlightedId] = useState(null);
  const [pyqAnswers, setPyqAnswers] = useState({});
  const [openSolutions, setOpenSolutions] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfLangChoice, setPdfLangChoice] = useState('hi');
  const [revisedMap, setRevisedMap] = useState(loadRevisedMap);
  const containerRef = useRef(null);

  const isHi = lang !== 'en';
  const isRevised = Boolean(revisedMap[chapterData.id]);

  const pyqMap = useMemo(
    () => new Map((chapterData.pyqBank || []).map((q) => [q.id, q])),
    [chapterData.pyqBank]
  );

  const pyqStats = useMemo(() => {
    const answered = Object.keys(pyqAnswers).length;
    const correct = Object.entries(pyqAnswers).filter(
      ([qid, optIdx]) => pyqMap.get(qid)?.correctIndex === optIdx
    ).length;
    return { answered, correct };
  }, [pyqAnswers, pyqMap]);

  const jumpToElement = (elId, { switchTab, pyqType } = {}) => {
    if (switchTab) setActiveSubTab(switchTab);
    if (pyqType) setSelectedTypeId(pyqType);
    setHighlightedId(elId);
    setTimeout(() => {
      const target = document.getElementById(elId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 90);
    setTimeout(() => setHighlightedId(null), 2200);
  };

  const toggleRevised = () => {
    const next = { ...revisedMap, [chapterData.id]: !isRevised };
    setRevisedMap(next);
    try {
      localStorage.setItem(STORAGE_KEY_REVISED, JSON.stringify(next));
    } catch {}
  };

  const handleLaunchChapterPyqCbt = () => {
    if (!hasPassPro) {
      onOpenPassPro();
      return;
    }
    if (!onStartChapterQuiz || !chapterData.pyqBank?.length) return;
    const formattedQuestions = chapterData.pyqBank.map((pq, idx) => ({
      id: idx + 1,
      shiftQuestionNo: idx + 1,
      section: 'Mathematics',
      subject: 'Mathematics',
      topic: `${chapterData.taxonomyChapterName || chapterData.title.en} • ${pq.examTag}`,
      question: pq.question,
      options: pq.options,
      correctIndex: pq.correctIndex,
      correctIndexHi: pq.correctIndex,
      solution: pq.solution,
    }));

    const quiz = buildCustomTopicQuiz({
      examLabel: 'Maths Mastery Pro CBT',
      subjectLabel: 'Mathematics',
      chapterLabel: chapterData.title[lang],
      topicLabel: `Ch ${chapterData.chapterNumber}: All ${formattedQuestions.length} Type-Wise PYQs`,
      questions: formattedQuestions,
      maxQuestions: formattedQuestions.length,
    });
    onStartChapterQuiz(quiz, lang);
  };

  const showConcepts = activeSubTab === 'all' || activeSubTab === 'concepts';
  const showLabs = activeSubTab === 'all' || activeSubTab === 'labs';
  const showPyqs = activeSubTab === 'all' || activeSubTab === 'pyqs';
  const showTables = activeSubTab === 'all' || activeSubTab === 'tables';

  const blueprintSvgHtml = useMemo(
    () =>
      chapterData.blueprintSvgKey
        ? renderMathsCh1DiagramSvg(chapterData.blueprintSvgKey, { lang, theme: 'dark' })
        : '',
    [chapterData.blueprintSvgKey, lang]
  );

  return (
    <div ref={containerRef} className="space-y-5 pb-16 print:hidden">
      {/* Compact 1-Row Sticky Toolbar (Zero Screen Clutter on Mobile!) */}
      <div className="sticky top-14 sm:top-16 z-30 -mx-2 px-3 py-2.5 rounded-2xl bg-[#070B18]/95 backdrop-blur-md border border-slate-800/90 shadow-lg flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isHi ? 'Chapters' : 'Chapters'}</span>
          </button>
          <span className="text-xs sm:text-sm font-black text-white truncate">
            {chapterData.title[lang]}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setLang((l) => (l === 'hi' ? 'en' : 'hi'))}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-teal-500/40 text-[11px] font-black text-teal-300 cursor-pointer"
            title="Switch Hinglish / English"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isHi ? 'Hinglish' : 'English'}</span>
          </button>

          <button
            type="button"
            onClick={toggleRevised}
            className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-[11px] font-black cursor-pointer ${
              isRevised
                ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                : 'bg-slate-900 border-slate-700 text-slate-300'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isRevised ? 'Revised ✓' : 'Mark Done'}</span>
          </button>

          <button
            type="button"
            onClick={() => (hasPassPro ? setShowPdfModal(true) : onOpenPassPro())}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-[11px] font-black cursor-pointer shadow"
          >
            {hasPassPro ? <Download className="w-3.5 h-3.5" /> : <Crown className="w-3.5 h-3.5" />}
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Scrollable Sub-Tabs + Mode Strip (Non-Sticky so Content Breathes Freely!) */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', hi: '📋 Full Class Board', en: '📋 Full Board' },
            { id: 'concepts', hi: '1. Smart Board Rules', en: '1. Rules Board' },
            { id: 'labs', hi: '2. 5 Interactive Labs', en: '2. SVG Labs' },
            { id: 'pyqs', hi: `3. Type PYQs (${chapterData.pyqBank.length})`, en: `3. Type PYQs (${chapterData.pyqBank.length})` },
            { id: 'tables', hi: '4. Tables & Flashcards', en: '4. Tables & Cards' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border whitespace-nowrap cursor-pointer transition-all shrink-0 ${
                activeSubTab === tab.id
                  ? 'bg-teal-500 text-slate-950 border-teal-300 shadow'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600'
              }`}
            >
              {tab[lang]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
          {[
            { id: 'all', label: '🎯 All (Basic + Tricks)' },
            { id: 'basic', label: '🌱 Basic Mode' },
            { id: 'topper', label: '⚡ Smart Tricks' },
            { id: 'traps', label: '⚠️ RRB Traps' },
          ].map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setStudentMode(m.id)}
              className={`px-3 py-1 rounded-lg font-black border whitespace-nowrap cursor-pointer shrink-0 ${
                studentMode === m.id
                  ? 'bg-amber-400 text-slate-950 border-amber-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* HERO BANNER WITH CLICKABLE WEIGHTAGE BARS */}
      <div className="rounded-3xl bg-gradient-to-br from-[#091224] via-[#0B162C] to-[#081F26] border border-teal-500/35 overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-5 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-black">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                CHAPTER {chapterData.chapterNumber} • SMART BOARD PRO
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300">
                Tap any weightage bar below to jump directly!
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {chapterData.title[lang]}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {chapterData.subtitle[lang]}
            </p>

            {/* CLICKABLE RRB Weightage Bars */}
            <div className="space-y-2 pt-1">
              {chapterData.weightageBars.map((wb, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() =>
                    jumpToElement(activeSubTab === 'pyqs' ? 'pyq-section-anchor' : wb.targetSectionId, {
                      switchTab: activeSubTab === 'labs' || activeSubTab === 'tables' ? 'concepts' : activeSubTab,
                      pyqType: wb.targetPyqTypeId,
                    })
                  }
                  className="w-full text-left p-2.5 -mx-2 rounded-xl hover:bg-slate-800/70 transition-all cursor-pointer group border border-transparent hover:border-teal-500/40 space-y-1.5"
                >
                  <div className="flex justify-between items-center text-xs font-bold text-slate-200 group-hover:text-teal-300 gap-2">
                    <span className="flex items-center gap-1.5">
                      <span>{wb.label[lang]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-teal-400 opacity-75 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-teal-300 font-black shrink-0">{wb.pct}% →</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:brightness-110"
                      style={{ width: `${wb.pct}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {chapterData.hero?.imageUrl && (
            <div className="lg:col-span-5 relative bg-slate-950 min-h-[190px]">
              <img
                src={chapterData.hero.imageUrl}
                alt={chapterData.title[lang]}
                className="w-full h-full object-cover max-h-72 lg:max-h-full"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <p className="text-[11px] text-slate-200 leading-snug">{chapterData.hero.caption[lang]}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CLICKABLE SMART BOARD ROADMAP & 60-SEC REVISION */}
      <div className="rounded-3xl bg-slate-900/65 border border-teal-500/30 p-4 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-teal-300 font-black text-sm sm:text-base">
            <Zap className="w-5 h-5" />
            <span>{isHi ? 'Quick Revision Board (Tap Any Card to Jump)' : '60-Second Formula Board (Tap to Jump)'}</span>
          </div>
          <span className="text-[11px] text-slate-400 font-semibold">1-Tap Direct Module Navigation</span>
        </div>

        {/* Clickable Quick Jump Chips */}
        <div className="flex flex-wrap gap-1.5">
          {MODULE_QUICK_PILLS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => jumpToElement(m.id, { switchTab: 'all', pyqType: m.typeId })}
              className="px-3 py-1.5 rounded-xl bg-[#070E1D] hover:bg-teal-500/20 border border-slate-700 hover:border-teal-400 text-xs font-extrabold text-teal-200 cursor-pointer transition-all flex items-center gap-1"
            >
              <span>{m.label}</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {chapterData.quickRevision60Sec.map((card, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => jumpToElement(card.targetSectionId, { switchTab: 'concepts' })}
              className="text-left p-4 rounded-2xl bg-[#070E1D] hover:bg-[#0B162B] border border-slate-800 hover:border-teal-400/60 transition-all cursor-pointer space-y-2 group"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-black text-emerald-300">
                <span>{card.title[lang]}</span>
                <span className="text-[11px] text-teal-400 group-hover:translate-x-0.5 transition-transform">Open →</span>
              </div>
              <div className="text-[13px] sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                <RichFormatText text={card.points[lang]} />
              </div>
            </button>
          ))}
        </div>

        {blueprintSvgHtml && (
          <div
            className="pt-1 overflow-hidden rounded-2xl border border-slate-800"
            dangerouslySetInnerHTML={{ __html: blueprintSvgHtml }}
          />
        )}
      </div>

      {/* EXAM-HALL DECISION MATRIX + TRAP ALERTS */}
      {(studentMode === 'all' || studentMode === 'topper' || studentMode === 'traps') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/65 border border-cyan-500/30 p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-black text-cyan-300 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>{chapterData.decisionMatrix.title[lang]}</span>
            </h2>
            <div className="space-y-2.5">
              {chapterData.decisionMatrix.rows.map((row, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#070E1D] border border-slate-800 space-y-1 text-xs sm:text-[13px]">
                  <div className="font-black text-white">
                    <RichFormatText text={row.trigger[lang]} />
                  </div>
                  <div className="text-emerald-300 font-bold">
                    ✓ <RichFormatText text={row.firstCheck[lang]} />
                  </div>
                  <div className="text-rose-300/90 text-xs">
                    ✕ <RichFormatText text={row.avoid[lang]} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-rose-950/15 border border-rose-500/35 p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-black text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{isHi ? '6 Common RRB Silly-Mistake Traps' : '6 Negative-Marking Traps'}</span>
            </h2>
            <div className="space-y-2.5">
              {chapterData.trapAlerts.map((tr, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950/90 border border-rose-500/25 text-xs sm:text-[13px] space-y-1">
                  <div className="font-black text-rose-200">{tr.title[lang]}</div>
                  <div className="text-slate-300 leading-relaxed">
                    <RichFormatText text={tr.detail[lang]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 1. SMART BOARD MODULES */}
      {showConcepts && studentMode !== 'traps' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-emerald-300 font-black text-lg">
            <BookOpen className="w-5 h-5" />
            <span>
              {isHi
                ? `Smart Board Concept Slides (${chapterData.sections.length} Modules)`
                : `Smart Board Classroom Modules (${chapterData.sections.length})`}
            </span>
          </div>

          {chapterData.sections.map((sec, sIdx) => {
            const plateHtml = sec.diagramKey
              ? renderMathsCh1DiagramSvg(sec.diagramKey, { lang, theme: 'dark' })
              : '';
            const matchingPill = MODULE_QUICK_PILLS[sIdx];
            const isHiLight = highlightedId === sec.id;

            return (
              <section
                id={sec.id}
                key={sec.id}
                className={`scroll-mt-24 rounded-3xl bg-slate-900/70 border p-4 sm:p-7 space-y-5 transition-all ${
                  isHiLight
                    ? 'border-emerald-400 ring-2 ring-emerald-400/50 shadow-2xl shadow-emerald-950/60'
                    : 'border-slate-800'
                }`}
              >
                <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/35 text-teal-300 text-[11px] font-black">
                      SLIDE {sec.number}
                    </span>
                    <h3 className="text-base sm:text-xl font-black text-white mt-2">
                      <RichFormatText text={sec.title[lang]} />
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-400 mt-1">{sec.summaryTag[lang]}</p>
                  </div>

                  {matchingPill && (
                    <button
                      type="button"
                      onClick={() =>
                        jumpToElement('pyq-section-anchor', {
                          switchTab: 'pyqs',
                          pyqType: matchingPill.typeId,
                        })
                      }
                      className="px-3.5 py-2 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 text-xs font-black cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      <Target className="w-3.5 h-3.5" />
                      <span>Solve PYQs →</span>
                    </button>
                  )}
                </div>

                {plateHtml && (
                  <div
                    className="rounded-2xl overflow-hidden border border-slate-800"
                    dangerouslySetInnerHTML={{ __html: plateHtml }}
                  />
                )}

                <div className="space-y-4">
                  {(sec.boardCards || []).map((card) => (
                    <div
                      key={card.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#070E1D] border border-slate-800/90 space-y-3.5"
                    >
                      <h4 className="text-[15px] sm:text-base font-black text-teal-300">
                        <RichFormatText text={card.title[lang]} />
                      </h4>

                      {/* Prominent Chalkboard Formula Strip */}
                      {card.formula && (
                        <div className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A1F2C] to-[#081526] border border-teal-400/35 text-sm sm:text-[15px] text-emerald-200 overflow-x-auto">
                          <MathText text={card.formula} />
                        </div>
                      )}

                      {/* Crisp Smart-Board Short Bullets (15px airy readability) */}
                      <ul className="space-y-2 text-[14px] sm:text-[15px] text-slate-100 leading-relaxed">
                        {(card.points || []).map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                            <span>
                              <RichFormatText text={pt[lang]} />
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Trap Pill */}
                      {card.trap && (
                        <div className="px-3.5 py-2 rounded-xl bg-rose-950/30 border border-rose-500/35 text-xs sm:text-[13px] font-bold text-rose-200 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                          <RichFormatText text={card.trap[lang]} />
                        </div>
                      )}

                      {/* Side-by-Side Board Example */}
                      {card.example && (
                        <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 space-y-2.5">
                          <div className="text-xs sm:text-sm font-black text-amber-300">
                            💡 <RichFormatText text={card.example.title[lang]} />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] sm:text-sm">
                            {(studentMode === 'all' || studentMode === 'basic') && (
                              <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/30 space-y-1">
                                <div className="font-black text-teal-300 text-xs">
                                  Method 1: Basic Step-by-Step
                                </div>
                                <div className="text-slate-200 leading-relaxed whitespace-pre-line">
                                  <RichFormatText text={card.example.basic[lang]} />
                                </div>
                              </div>
                            )}
                            {(studentMode === 'all' || studentMode === 'topper') && (
                              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                                <div className="font-black text-emerald-300 text-xs">
                                  Method 2: Smart 5-Sec Trick
                                </div>
                                <div className="text-slate-200 leading-relaxed whitespace-pre-line">
                                  <RichFormatText text={card.example.smart[lang]} />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* 2. INTERACTIVE ANIMATED SVG CONCEPTS LABS */}
      {showLabs && (
        <ProFeatureGate
          hasPassPro={hasPassPro}
          onOpenPassPro={onOpenPassPro}
          lang={lang}
          featureTitle={{
            en: '5-in-1 Interactive Animated Maths Lab',
            hi: '5-in-1 Interactive Animated Maths Simulator Lab',
          }}
          featureSubtitle={{
            en: 'Divisibility/C9 X-Ray, Unit Digit Wheel, Bell LCM Animator, VBODMAS Step Peeler & Bar Decimal Converter.',
            hi: 'Divisibility/C9 X-Ray, Unit Digit Wheel, Bell LCM Animator, VBODMAS Step Peeler & Bar Converter.',
          }}
        >
          <NumberSystemLabSVG lang={lang} />
        </ProFeatureGate>
      )}

      {/* 3. TYPE-WISE SOLVED RAILWAY PYQs */}
      {showPyqs && (
        <div id="pyq-section-anchor" className="scroll-mt-24 rounded-3xl bg-slate-900/65 border border-amber-500/35 p-4 sm:p-7 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <h2 className="text-base sm:text-xl font-black text-amber-300 flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>
                  {isHi
                    ? `Type-Wise Real Railway PYQs (${chapterData.pyqBank.length} Solved • 2–4 Methods)`
                    : `Type-Wise Real Railway PYQs (${chapterData.pyqBank.length} Questions)`}
                </span>
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 mt-0.5">
                ALP, CBT-2 Part A, NTPC UG, Group D &amp; Tech Gr-III • Basic + Smart + 3-Sec Elimination Tricks
              </p>
            </div>

            <button
              type="button"
              onClick={handleLaunchChapterPyqCbt}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:brightness-105 text-slate-950 font-black text-xs sm:text-sm shadow-lg cursor-pointer"
            >
              {hasPassPro ? <Play className="w-4 h-4 fill-slate-950" /> : <Crown className="w-4 h-4 fill-slate-950" />}
              <span>Launch {chapterData.pyqBank.length}-Q Chapter CBT</span>
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="font-black text-slate-400 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Level:
              </span>
              {[
                { id: 'all', label: 'All Levels' },
                { id: 'level1_basic', label: 'Level 1: Basic' },
                { id: 'level2_mod', label: 'Level 2: Moderate' },
                { id: 'level3_hard', label: 'Level 3: Hard / CBT-2' },
              ].map((lv) => (
                <button
                  key={lv.id}
                  type="button"
                  onClick={() => setLevelFilter(lv.id)}
                  className={`px-2.5 py-1 rounded-lg border font-bold cursor-pointer ${
                    levelFilter === lv.id
                      ? 'bg-teal-500 text-slate-950 border-teal-300'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  {lv.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedTypeId('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer ${
                  selectedTypeId === 'all'
                    ? 'bg-amber-400 text-slate-950 border-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}
              >
                All {chapterData.typeWiseGroups.length} Types
              </button>
              {chapterData.typeWiseGroups.map((tg) => (
                <button
                  key={tg.typeId}
                  type="button"
                  onClick={() => setSelectedTypeId(tg.typeId)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer ${
                    selectedTypeId === tg.typeId
                      ? 'bg-amber-400 text-slate-950 border-amber-200'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500/40'
                  }`}
                >
                  Type {tg.typeNumber}
                </button>
              ))}
            </div>
          </div>

          {pyqStats.answered > 0 && (
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-white">
                Live Score: {pyqStats.correct} / {pyqStats.answered} Correct
              </span>
              <button
                type="button"
                onClick={() => setPyqAnswers({})}
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          )}

          <div className="space-y-6">
            {chapterData.typeWiseGroups
              .filter((tg) => selectedTypeId === 'all' || selectedTypeId === tg.typeId)
              .map((tg) => {
                const items = tg.questionIds
                  .map((qid) => pyqMap.get(qid))
                  .filter((pq) => pq && (levelFilter === 'all' || pq.level === levelFilter));
                if (items.length === 0) return null;

                return (
                  <div key={tg.typeId} className="rounded-2xl bg-[#070D1C] border border-slate-800 p-4 sm:p-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                      <div>
                        <span className="text-[10px] font-black uppercase text-amber-300 bg-amber-500/15 border border-amber-500/35 px-2.5 py-0.5 rounded-full">
                          TYPE {tg.typeNumber} • {items.length} PYQs
                        </span>
                        <h3 className="text-sm sm:text-base font-black text-white mt-1.5">
                          <RichFormatText text={tg.title[lang]} />
                        </h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-teal-950/30 border border-teal-500/30 text-xs font-bold text-teal-200 max-w-md">
                        💡 <RichFormatText text={tg.conceptHint[lang]} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      {items.map((pq) => {
                        const picked = pyqAnswers[pq.id];
                        const isAnswered = picked !== undefined;
                        const solOpen = openSolutions[pq.id] ?? isAnswered;
                        const levelBadge =
                          pq.level === 'level1_basic'
                            ? { cls: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', txt: 'Level 1 Basic' }
                            : pq.level === 'level2_mod'
                            ? { cls: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30', txt: 'Level 2 Moderate' }
                            : { cls: 'bg-rose-500/15 text-rose-300 border-rose-500/30', txt: 'Level 3 Hard' };

                        return (
                          <div key={pq.id} className="p-4 rounded-2xl bg-slate-900/75 border border-slate-800 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                {pq.examTag}
                              </span>
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${levelBadge.cls}`}>
                                {levelBadge.txt}
                              </span>
                            </div>

                            <div className="text-[15px] sm:text-base font-bold text-white leading-relaxed">
                              <MathText text={pq.question[lang]} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {pq.options[lang].map((opt, oIdx) => {
                                const isCorr = oIdx === pq.correctIndex;
                                const isPicked = picked === oIdx;
                                let cls = 'bg-slate-950 border-slate-700 text-slate-200 hover:border-teal-400/60';
                                if (isAnswered) {
                                  if (isCorr) cls = 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold';
                                  else if (isPicked) cls = 'bg-rose-500/20 border-rose-400 text-rose-200';
                                  else cls = 'bg-slate-950/40 border-slate-800 text-slate-400';
                                }
                                return (
                                  <button
                                    key={oIdx}
                                    type="button"
                                    onClick={() => setPyqAnswers((prev) => ({ ...prev, [pq.id]: oIdx }))}
                                    className={`px-3.5 py-2.5 rounded-xl border text-left text-sm transition-all cursor-pointer ${cls}`}
                                  >
                                    <span className="font-black mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                                    <MathText text={opt} />
                                  </button>
                                );
                              })}
                            </div>

                            <div className="flex items-center justify-between pt-1">
                              <button
                                type="button"
                                onClick={() => setOpenSolutions((p) => ({ ...p, [pq.id]: !solOpen }))}
                                className="inline-flex items-center gap-1.5 text-xs font-black text-teal-300 hover:text-teal-200 cursor-pointer"
                              >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>
                                  {solOpen
                                    ? 'Hide Multi-Method Solution'
                                    : `View ${pq.solution.methods.length} Methods (Basic + Smart Trick)`}
                                </span>
                                {solOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                              </button>
                            </div>

                            {solOpen && (
                              <div className="pt-2 border-t border-slate-800">
                                <MultiMethodSolutionBox
                                  solution={pq.solution}
                                  lang={lang}
                                  defaultShowAll={studentMode === 'basic' || studentMode === 'topper'}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* 4. MASTER CHEAT TABLES & FLASHCARDS */}
      {showTables && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-900/65 border border-cyan-500/30 p-4 sm:p-7 space-y-5">
            <div className="flex items-center gap-2 text-cyan-300 font-black text-base sm:text-lg">
              <Table2 className="w-5 h-5" />
              <span>{isHi ? 'Master Cheat Tables (5 Reference Charts)' : 'Master Formula & Cheat Tables'}</span>
            </div>
            {chapterData.tables.map((tbl) => (
              <div key={tbl.id} className="space-y-2">
                <h3 className="text-sm sm:text-base font-black text-white">{tbl.title[lang]}</h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 border-b border-slate-800">
                        {tbl.headers[lang].map((h, i) => (
                          <th key={i} className="px-3.5 py-3 font-black text-cyan-300 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-[#080D1A]">
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/60">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-3.5 py-3 leading-relaxed ${
                                cIdx === 0 ? 'font-bold text-white' : 'text-slate-200'
                              }`}
                            >
                              <RichFormatText text={typeof cell === 'object' ? cell[lang] : String(cell)} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-900/65 border border-violet-500/30 p-4 sm:p-7 space-y-4">
            <h2 className="text-base sm:text-lg font-black text-violet-300 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Active Recall Flashcards (Tap Card to Flip)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {chapterData.flashcards.map((card, i) => {
                const flipped = Boolean(flippedCards[i]);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFlippedCards((prev) => ({ ...prev, [i]: !prev[i] }))}
                    className={`text-left p-4 rounded-2xl border min-h-[116px] flex flex-col justify-between transition-all cursor-pointer ${
                      flipped
                        ? 'bg-emerald-950/35 border-emerald-500/50 text-emerald-100'
                        : 'bg-[#080D1B] border-slate-800 hover:border-violet-400/50 text-white'
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase text-violet-300">
                      {flipped ? 'Answer ✓' : `Card #${i + 1} • Tap`}
                    </span>
                    <div className="text-xs sm:text-sm font-bold leading-relaxed my-1">
                      <RichFormatText text={flipped ? card.back[lang] : card.front[lang]} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* FIXED 3-WAY ANDROID & DESKTOP PDF DOWNLOAD MODAL */}
      {showPdfModal && (
        <div onClick={() => setShowPdfModal(false)} className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full rounded-3xl bg-[#090D1A] border border-teal-500/40 p-6 shadow-2xl space-y-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Save Chapter 1 Study Booklet</h3>
              <p className="text-xs text-slate-300 mt-1">
                Android Chrome par seedhe <b>Save as PDF</b> ya direct Offline File download karein (no about:blank trap!).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'hi', label: '🇮🇳 Hinglish Mode' },
                { id: 'en', label: '🇬🇧 English Mode' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPdfLangChoice(opt.id)}
                  className={`py-2 rounded-xl font-black border cursor-pointer ${
                    pdfLangChoice === opt.id
                      ? 'bg-teal-500 text-slate-950 border-teal-300'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  triggerMathsSavePdfDialog(chapterData, { langMode: pdfLangChoice });
                  setShowPdfModal(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Save as PDF (Android / Desktop Print Dialog)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  downloadOfflineMathsBooklet(chapterData, { langMode: pdfLangChoice });
                  setShowPdfModal(false);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>1-Tap Direct Download (.html Offline Booklet)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  openMathsBlobPreviewTab(chapterData, { langMode: pdfLangChoice });
                  setShowPdfModal(false);
                }}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Preview in Browser Tab</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
