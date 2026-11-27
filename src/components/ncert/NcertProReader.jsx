import React, { useState, useMemo } from 'react';
import {
  ArrowLeft, Crown, Sparkles, BookOpen, FlaskConical, Table2,
  Lightbulb, Zap, CheckCircle2, Printer, Maximize2, X,
  Award, HelpCircle, RotateCcw, ChevronDown, ChevronUp, Play, Layers, Globe,
  GitBranch, Star, AlertTriangle, BarChart3, Bookmark, Check
} from 'lucide-react';
import { MathText } from '../QuestionContentRenderer';
import ProFeatureGate from './ProFeatureGate';
import {
  MicroscopeScaleExplorerSVG,
  OsmosisBilayerSimulatorSVG,
  InteractiveCellExplorerSVG,
  MitosisMeiosisAnimatorSVG,
  SectionFlowDiagramSVG,
} from './CellInteractiveLabs';
import { MotionSimulatorLabSVG } from './MotionInteractiveLabs';
import { EnergyMachinesLabSVG } from './EnergyMachinesLab';
import { AtomBuilderLabSVG } from './AtomBuilderLabSVG';
import { ForcesMotionLabSVG } from './ForcesMotionLabSVG';
import { AcidsBasesPhLabSVG } from './AcidsBasesPhLabSVG';
import { OpticsRayLensLabSVG } from './OpticsRayLensLabSVG';
import { buildCustomTopicQuiz } from '../../utils/pyqHelper';
import { renderPrintableNcertWindow } from '../../utils/ncertPdfGenerator';

const REVISION_STORAGE_KEY = 'railwayprep_ncert_revised_v1';
const MASTERY_STORAGE_KEY = 'railwayprep_ncert_mastery_v1';

function loadStorageMap(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
}

/**
 * Renders **bold**, ==highlighted== key terms, `chips`, and $KaTeX$ cleanly at comfortable font scale.
 */
function RichHighlightText({ text = '', className = '' }) {
  const raw = String(text ?? '');
  const parts = raw.split(/(==[^=]+==|\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (!part) return null;
        if (part.startsWith('==') && part.endsWith('==') && part.length > 4) {
          return (
            <mark
              key={idx}
              className="px-1.5 py-0.5 mx-0.5 rounded-md bg-amber-400/25 text-amber-200 border border-amber-400/40 font-bold"
            >
              <MathText text={part.slice(2, -2)} />
            </mark>
          );
        }
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return (
            <strong key={idx} className="font-extrabold text-white">
              <MathText text={part.slice(2, -2)} />
            </strong>
          );
        }
        if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
          return (
            <span
              key={idx}
              className="px-1.5 py-0.5 mx-0.5 rounded bg-slate-800 text-teal-300 border border-slate-700 font-bold text-[13px]"
            >
              <MathText text={part.slice(1, -1)} />
            </span>
          );
        }
        return <MathText key={idx} text={part} />;
      })}
    </span>
  );
}

export default function NcertProReader({
  chapterData,
  onBack,
  hasPassPro = false,
  onOpenPassPro,
  onStartChapterQuiz,
}) {
  const [lang, setLang] = useState('hi'); // 'hi' | 'en'
  const [depthMode, setDepthMode] = useState('all'); // 'all' | 'easy' | 'ranker' | 'traps_only'
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [zoomedVisual, setZoomedVisual] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [expandedInText, setExpandedInText] = useState({});
  const [expandedEx, setExpandedEx] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [pyqAnswers, setPyqAnswers] = useState({});
  const [activityPredictions, setActivityPredictions] = useState({});
  const [revisedMap, setRevisedMap] = useState(() => loadStorageMap(REVISION_STORAGE_KEY));
  const [masteryMap, setMasteryMap] = useState(() => loadStorageMap(MASTERY_STORAGE_KEY));

  const pyqLookup = useMemo(() => new Map((chapterData.pyqBank || []).map((q) => [q.id, q])), [chapterData.pyqBank]);
  const isRevised = Boolean(revisedMap[chapterData.id]);

  const totalBlocks = useMemo(
    () => (chapterData.sections || []).reduce((acc, s) => acc + (s.blocks?.length || 0), 0),
    [chapterData.sections]
  );

  const chapterMastery = masteryMap[chapterData.id] || { done: {}, pinned: {} };
  const doneCount = Object.values(chapterMastery.done || {}).filter(Boolean).length;
  const pinnedCount = Object.values(chapterMastery.pinned || {}).filter(Boolean).length;

  const toggleBlockFlag = (blockId, field) => {
    setMasteryMap((prev) => {
      const cur = prev[chapterData.id] || { done: {}, pinned: {} };
      const nextGroup = { ...(cur[field] || {}), [blockId]: !cur[field]?.[blockId] };
      const next = { ...prev, [chapterData.id]: { ...cur, [field]: nextGroup } };
      try {
        localStorage.setItem(MASTERY_STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const toggleRevised = () => {
    const next = { ...revisedMap, [chapterData.id]: !isRevised };
    setRevisedMap(next);
    try {
      localStorage.setItem(REVISION_STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const handleOpenPdfOption = (pdfLangMode) => {
    const win = window.open('', '_blank');
    renderPrintableNcertWindow(chapterData, { langMode: pdfLangMode }, win);
    setShowPdfModal(false);
  };

  const renderSvgLab = (labKey, titleObj) => {
    let comp = null;
    if (labKey === 'microscope-scale') comp = <MicroscopeScaleExplorerSVG lang={lang} />;
    else if (labKey === 'osmosis-bilayer') comp = <OsmosisBilayerSimulatorSVG lang={lang} />;
    else if (labKey === 'cell-explorer') comp = <InteractiveCellExplorerSVG lang={lang} />;
    else if (labKey === 'mitosis-meiosis') comp = <MitosisMeiosisAnimatorSVG lang={lang} />;
    else if (labKey === 'motion-graph-lab') comp = <MotionSimulatorLabSVG lang={lang} />;
    else if (labKey === 'energy-machines-lab') comp = <EnergyMachinesLabSVG lang={lang} />;
    else if (labKey === 'atom-builder-lab') comp = <AtomBuilderLabSVG lang={lang} />;
    else if (labKey === 'forces-motion-lab') comp = <ForcesMotionLabSVG lang={lang} />;
    else if (labKey === 'acids-bases-ph-lab') comp = <AcidsBasesPhLabSVG lang={lang} />;
    else if (labKey === 'optics-ray-lens-lab') comp = <OpticsRayLensLabSVG lang={lang} />;
    if (!comp) return null;

    return (
      <div className="my-5">
        <ProFeatureGate
          hasPassPro={hasPassPro}
          onOpenPassPro={onOpenPassPro}
          lang={lang}
          featureTitle={titleObj}
          featureSubtitle={{
            en: 'Interactive Pass Pro SVG Lab: tap parts, toggle solutions & master NCERT concepts visually.',
            hi: 'Pass Pro इंटरैक्टिव लैब: किसी भी भाग को टच करें, एनिमेशन चलाएं और 100% कॉन्सेप्ट पक्का करें।',
          }}
        >
          {comp}
        </ProFeatureGate>
      </div>
    );
  };

  const handleLaunchChapterPyqCbt = () => {
    if (!hasPassPro) {
      onOpenPassPro();
      return;
    }
    if (!onStartChapterQuiz || !Array.isArray(chapterData.pyqBank) || chapterData.pyqBank.length === 0) return;
    const quiz = buildCustomTopicQuiz({
      examLabel: 'NCERT Pro Chapter Drill',
      subjectLabel: chapterData.subjectLabel?.[lang] || 'General Science',
      chapterLabel: chapterData.title[lang],
      topicLabel: chapterData.title.en,
      questions: chapterData.pyqBank,
      maxQuestions: chapterData.pyqBank.length,
    });
    onStartChapterQuiz(quiz, lang);
  };

  const showConcepts = activeSubTab === 'all' || activeSubTab === 'concepts';
  const showActivitiesAndTables = activeSubTab === 'all' || activeSubTab === 'activities';
  const showVisualsAndScientists = activeSubTab === 'all' || activeSubTab === 'visuals';
  const showExercisesAndCards = activeSubTab === 'all' || activeSubTab === 'exercises';
  const showPyqs = activeSubTab === 'all' || activeSubTab === 'pyqs';

  const pyqStats = useMemo(() => {
    const answered = Object.keys(pyqAnswers).length;
    const correct = Object.entries(pyqAnswers).filter(
      ([qid, optIdx]) => pyqLookup.get(Number(qid))?.correctIndex === optIdx
    ).length;
    return { answered, correct };
  }, [pyqAnswers, pyqLookup]);

  return (
    <div className="space-y-6 pb-14 print:hidden">
      {/* Sticky Toolbar: Language + Read Depth + Revision + Pro A4 Booklet Export */}
      <div className="sticky top-14 sm:top-16 z-30 -mx-2 px-3 sm:px-4 py-3 rounded-2xl bg-[#070B18]/95 backdrop-blur-md border border-slate-800/90 shadow-xl space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'अध्याय' : 'Chapters'}</span>
            </button>
            <span className="text-sm sm:text-base font-black text-white truncate">
              {chapterData.title[lang]}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setLang((l) => (l === 'hi' ? 'en' : 'hi'))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/40 text-teal-300 text-xs font-black cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'अ -> English' : 'EN -> हिन्दी'}</span>
            </button>

            <button
              onClick={toggleRevised}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer ${
                isRevised
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isRevised ? (lang === 'hi' ? 'रिवाइज़्ड ✓' : 'Revised ✓') : lang === 'hi' ? 'रिवाइज़' : 'Mark Done'}</span>
            </button>

            <button
              onClick={() => (hasPassPro ? setShowPdfModal(true) : onOpenPassPro())}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-black cursor-pointer shadow-md shadow-amber-950/30"
            >
              {hasPassPro ? <Printer className="w-3.5 h-3.5" /> : <Crown className="w-3.5 h-3.5" />}
              <span>{hasPassPro ? (lang === 'hi' ? 'A4 E-Book PDF' : 'A4 PDF Studio') : lang === 'hi' ? 'Pro PDF' : 'Unlock PDF'}</span>
            </button>
          </div>
        </div>

        {/* Depth Selector & Live Topic Progress */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 mr-1">
              {lang === 'hi' ? 'अध्ययन मोड:' : 'Study Depth:'}
            </span>
            {[
              { id: 'all', en: '✨ Complete Lecture', hi: '✨ संपूर्ण क्लास नोट्स' },
              { id: 'easy', en: '📘 Concepts + Memory Keys', hi: '📘 शिक्षक व्याख्या + ट्रिक्स' },
              { id: 'ranker', en: '🎯 NCERT+ CBT Ranker', hi: '🎯 उच्च-स्तरीय CBT + Traps' },
              { id: 'traps_only', en: '⚡ Last-Night PYQ & Diagrams', hi: '⚡ लास्ट-नाइट चित्र व PYQ' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setDepthMode(m.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                  depthMode === m.id
                    ? 'bg-teal-500 text-slate-950 border-teal-300'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {m[lang]}
              </button>
            ))}
          </div>

          {totalBlocks > 0 && (
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                ✓ {doneCount}/{totalBlocks} {lang === 'hi' ? 'पूर्ण' : 'Done'}
              </span>
              {pinnedCount > 0 && (
                <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  ⭐ {pinnedCount} Imp
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="rounded-3xl border border-emerald-500/30 bg-[#0A1022] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/35 text-emerald-300 text-[11px] font-black">
                {chapterData.sourceCode}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {chapterData.title[lang]}
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {chapterData.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
              {[
                { val: chapterData.metrics.pages, en: 'Pages', hi: 'पृष्ठ' },
                { val: chapterData.activities.length, en: 'Activities', hi: 'क्रियाकलाप' },
                { val: chapterData.tables.length, en: 'Tables', hi: 'तालिकाएँ' },
                { val: chapterData.metrics.svgLabs, en: 'SVG Labs', hi: 'SVG लैब' },
                { val: chapterData.exercises.length, en: 'Exercises', hi: 'अभ्यास' },
                { val: chapterData.pyqBank.length, en: 'RRB PYQs', hi: 'रेलवे PYQ' },
              ].map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-base font-black text-teal-300">{stat.val}</div>
                  <div className="text-[11px] text-slate-300 font-bold">{stat[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative bg-[#070B18] min-h-[220px]">
            <img src={chapterData.hero.imageUrl} alt={chapterData.title[lang]} className="w-full h-full object-cover max-h-80 lg:max-h-full" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#070B18] via-[#070B18]/85 to-transparent">
              <p className="text-xs text-slate-200 leading-snug">{chapterData.hero.caption[lang]}</p>
            </div>
          </div>
        </div>

        {/* 60-Second Rapid Cheat Sheet */}
        <div className="border-t border-slate-800/80 p-4 sm:p-6 bg-slate-950/60">
          <div className="rounded-2xl bg-gradient-to-br from-teal-950/45 via-slate-900 to-slate-900 border border-teal-500/35 p-4 sm:p-5">
            <div className="text-sm font-black text-teal-300 flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? '60-सेकंड परीक्षा सुपर-रिवीजन (पूरा निचोड़)' : '60-Second Rapid Exam Summary'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {chapterData.quickRevision60Sec.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-slate-100 leading-relaxed bg-slate-950/75 p-3 rounded-xl border border-slate-800">
                  <span className="text-teal-400 font-black shrink-0">{i + 1}.</span>
                  <RichHighlightText text={bullet[lang]} />
                </div>
              ))}
            </div>
          </div>

          {/* Chapter Blueprint Mind-Map & RRB Sub-Topic Weightage Radar */}
          {(chapterData.blueprintSvgKey || Array.isArray(chapterData.weightageBars)) && (
            <div className="mt-4 space-y-3">
              {chapterData.blueprintSvgKey && (
                <SectionFlowDiagramSVG flowKey={chapterData.blueprintSvgKey} lang={lang} />
              )}
              {Array.isArray(chapterData.weightageBars) && (
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                  <div className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'RRB CBT परीक्षा भार विश्लेषण (पिछले प्रश्न-पत्रों पर आधारित)' : 'RRB CBT Weightage Radar (Based on Shift PYQs)'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {chapterData.weightageBars.map((w, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span className="truncate pr-2">{w.label[lang]}</span>
                          <span className="text-teal-300 font-black shrink-0">{w.pct}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" style={{ width: `${w.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Section Filter Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 py-1">
        {[
          { id: 'all', en: 'All Content (Complete NCERT+)', hi: 'संपूर्ण नोट्स (100% क्रमवार)' },
          { id: 'concepts', en: 'Concepts + Diagrams + Tricks', hi: 'संपूर्ण व्याख्या + चित्र + सूत्र' },
          { id: 'activities', en: `Activities (${chapterData.activities.length}) & Tables`, hi: `क्रियाकलाप (${chapterData.activities.length}) व तालिकाएँ` },
          { id: 'visuals', en: 'Microscopy & Scientists', hi: 'असली चित्र व वैज्ञानिक' },
          { id: 'exercises', en: `Exercises (${chapterData.exercises.length}) & Flashcards`, hi: `अभ्यास (${chapterData.exercises.length}) व फ्लैशकार्ड` },
          { id: 'pyqs', en: `All ${chapterData.pyqBank.length} RRB PYQs`, hi: `सभी ${chapterData.pyqBank.length} रेलवे PYQ` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer border transition-all ${
              activeSubTab === tab.id
                ? 'bg-teal-500 text-slate-950 border-teal-300 shadow-md'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600'
            }`}
          >
            {tab[lang]}
          </button>
        ))}
      </div>

      {/* 1. CONCEPTS, DESI INTUITION, FLOWCHARTS, REAL IMAGES, MNEMONICS & INLINE PYQs */}
      {showConcepts && (
        <div className="space-y-7">
          {chapterData.sections.map((sec) => (
            <section key={sec.id} className="rounded-3xl bg-slate-900/65 border border-slate-800 p-4 sm:p-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-teal-500 text-slate-950 text-xs font-black">
                    {sec.number}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-white">{sec.title[lang]}</h2>
                </div>
                <span className="text-xs font-bold text-slate-400">{sec.summaryTag[lang]}</span>
              </div>

              {sec.flowDiagramKey && <SectionFlowDiagramSVG flowKey={sec.flowDiagramKey} lang={lang} />}

              <div className="space-y-6">
                {sec.blocks.map((blk, bIdx) => {
                  const blockId = `${sec.id}_${bIdx}`;
                  const isBlkDone = Boolean(chapterMastery.done?.[blockId]);
                  const isBlkPinned = Boolean(chapterMastery.pinned?.[blockId]);
                  const conceptBody = blk.conceptStory || blk.desiIntuition;

                  return (
                    <div
                      key={bIdx}
                      className={`p-4 sm:p-6 rounded-2xl bg-[#080D1B] border space-y-4 transition-colors ${
                        isBlkPinned ? 'border-amber-400/50 shadow-lg shadow-amber-950/20' : 'border-slate-800/90'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-black text-emerald-300 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 shrink-0" />
                          <span>{blk.heading[lang]}</span>
                        </h3>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => toggleBlockFlag(blockId, 'pinned')}
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold border cursor-pointer ${
                              isBlkPinned
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-amber-300'
                            }`}
                          >
                            <Bookmark className="w-3 h-3" />
                            <span>{isBlkPinned ? (lang === 'hi' ? 'महत्वपूर्ण ★' : 'Pinned ★') : 'Imp'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleBlockFlag(blockId, 'done')}
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold border cursor-pointer ${
                              isBlkDone
                                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-emerald-300'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                            <span>{isBlkDone ? (lang === 'hi' ? 'पूर्ण' : 'Done') : lang === 'hi' ? 'पढ़ा' : 'Mark'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Layer 1: Full Classroom Teacher Explanation */}
                      {conceptBody && depthMode !== 'ranker' && depthMode !== 'traps_only' && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 text-[15px] sm:text-base text-emerald-100 leading-relaxed whitespace-pre-line">
                          <span className="inline-block text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-1.5">
                            {lang === 'hi' ? '📘 शिक्षक व्याख्या (Concept Clarity)' : '📘 Teacher Explanation (Mechanism & Why)'}
                          </span>
                          <div>
                            <RichHighlightText text={conceptBody[lang]} />
                          </div>
                        </div>
                      )}

                      {/* Layer 2: Structured Highlighted Facts + Bilingual Terms */}
                      {Array.isArray(blk.bullets) && depthMode !== 'traps_only' && (
                        <ul className="space-y-3 pl-1">
                          {blk.bullets.map((bullet, k) => (
                            <li key={k} className="flex items-start gap-2.5 text-[15px] sm:text-base text-slate-100 leading-7">
                              <span className="mt-2.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                              <div>
                                <RichHighlightText text={bullet[lang]} />
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Block-Level Crisp Labeled Vector Plate (Synced with Light PDF Print!) */}
                      {blk.diagramKey && <SectionFlowDiagramSVG flowKey={blk.diagramKey} lang={lang} />}

                      {/* Contextual Real Public-Domain / CC0 Microscope & Historical Images */}
                      {blk.realImage && (
                        <ProFeatureGate
                          hasPassPro={hasPassPro}
                          onOpenPassPro={onOpenPassPro}
                          lang={lang}
                          featureTitle={blk.realImage.title}
                          featureSubtitle={{
                            en: 'Unlock crisp authentic laboratory micrographs & scientific archival visual plates.',
                            hi: 'असली प्रयोगशाला माइक्रोस्कोप चित्र और ऐतिहासिक वैज्ञानिक फोटो अनलॉक करें।',
                          }}
                        >
                          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-2.5">
                            <div className="text-xs sm:text-sm font-black text-amber-300">{blk.realImage.title[lang]}</div>
                            <div className={`grid gap-3 ${blk.realImage.secondaryUrl ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                              <img
                                src={blk.realImage.url}
                                alt={blk.realImage.title[lang]}
                                onClick={() => setZoomedVisual({ imageUrl: blk.realImage.url, title: blk.realImage.title, figRef: { en: 'Real Microscopy / Historical Asset', hi: 'असली प्रयोगशाला चित्र' }, hotspots: [{ en: blk.realImage.caption.en, hi: blk.realImage.caption.hi }] })}
                                className="w-full max-h-64 object-contain rounded-xl bg-black/50 border border-slate-800 cursor-pointer hover:brightness-110"
                              />
                              {blk.realImage.secondaryUrl && (
                                <img
                                  src={blk.realImage.secondaryUrl}
                                  alt="Comparison view"
                                  onClick={() => setZoomedVisual({ imageUrl: blk.realImage.secondaryUrl, title: blk.realImage.title, figRef: { en: 'Real Comparison Image', hi: 'तुलनात्मक चित्र' }, hotspots: [{ en: blk.realImage.caption.en, hi: blk.realImage.caption.hi }] })}
                                  className="w-full max-h-64 object-contain rounded-xl bg-black/50 border border-slate-800 cursor-pointer hover:brightness-110"
                                />
                              )}
                            </div>
                            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">{blk.realImage.caption[lang]}</p>
                          </div>
                        </ProFeatureGate>
                      )}

                      {/* Exam Memory Key Card */}
                      {blk.viralTrick && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-[14.5px] sm:text-[15px] text-amber-100 leading-relaxed whitespace-pre-line">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 mb-1.5">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>{lang === 'hi' ? '🧠 परीक्षा स्मृति सूत्र (Exam Memory Key)' : '🧠 Exam Memory Key / Mnemonic'}</span>
                          </span>
                          <div>
                            <RichHighlightText text={blk.viralTrick[lang]} />
                          </div>
                        </div>
                      )}

                      {/* Layer 3: NCERT+ CBT Edge */}
                      {blk.topperEdge && depthMode !== 'easy' && depthMode !== 'traps_only' && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-violet-500/10 border border-violet-400/40 text-[14.5px] sm:text-[15px] text-violet-100 leading-relaxed whitespace-pre-line">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 mb-1.5">
                            <Star className="w-3.5 h-3.5" />
                            <span>{lang === 'hi' ? '🎯 NCERT+ एवं CBT उच्च-स्तरीय बिंदु' : '🎯 NCERT+ & Railway CBT Edge'}</span>
                          </span>
                          <div>
                            <RichHighlightText text={blk.topperEdge[lang]} />
                          </div>
                        </div>
                      )}

                      {/* Layer 4: Common Negative Marking Trap Alert (-0.33 Trap) */}
                      {blk.trapAlert && depthMode !== 'easy' && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-500/10 border border-rose-400/40 text-[14.5px] sm:text-[15px] text-rose-100 leading-relaxed">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 mb-1.5">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{lang === 'hi' ? '⚠️ -0.33 Trap Alert (परीक्षा में सावधानी)' : '⚠️ -0.33 Exam Trap Alert'}</span>
                          </span>
                          <div>
                            <RichHighlightText text={blk.trapAlert[lang]} />
                          </div>
                        </div>
                      )}

                      {/* Concept -> Immediate Inline Dated RRB PYQ(s) */}
                    {Array.isArray(blk.inlinePyqIds) && blk.inlinePyqIds.length > 0 && (
                      <div className="space-y-3 pt-1">
                        {blk.inlinePyqIds.map((pid) => {
                          const pq = pyqLookup.get(pid);
                          if (!pq) return null;
                          const picked = pyqAnswers[pq.id];
                          const isAns = picked !== undefined;
                          return (
                            <div key={pq.id} className="p-3.5 sm:p-4 rounded-2xl bg-cyan-950/25 border border-cyan-500/35 space-y-2.5">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/35">
                                  <Zap className="w-3 h-3 text-amber-300" />
                                  <span>{lang === 'hi' ? `सीधा परीक्षा प्रश्न • ${pq.examTag}` : `Instant PYQ • ${pq.examTag}`}</span>
                                </span>
                              </div>
                              <p className="text-sm sm:text-[15px] font-bold text-white leading-relaxed">
                                <MathText text={pq.question[lang]} />
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {pq.options[lang].map((opt, oIdx) => {
                                  const isCorr = oIdx === pq.correctIndex;
                                  const isPick = picked === oIdx;
                                  let cls = 'bg-slate-900/90 border-slate-700 text-slate-200 hover:border-cyan-400';
                                  if (isAns) {
                                    if (isCorr) cls = 'bg-emerald-500/25 border-emerald-400 text-emerald-200 font-bold';
                                    else if (isPick) cls = 'bg-rose-500/25 border-rose-400 text-rose-200';
                                    else cls = 'bg-slate-900/40 border-slate-800 text-slate-400';
                                  }
                                  return (
                                    <button
                                      key={oIdx}
                                      onClick={() => setPyqAnswers((prev) => ({ ...prev, [pq.id]: oIdx }))}
                                      className={`px-3 py-2 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${cls}`}
                                    >
                                      <span className="font-black mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                                      <span>{opt}</span>
                                    </button>
                                  );
                                })}
                              </div>
                              {isAns && (
                                <div className="p-2.5 rounded-xl bg-emerald-950/35 border border-emerald-500/30 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                                  <MathText text={pq.solution[lang]} />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
                })}
              </div>

              {sec.svgLab && renderSvgLab(sec.svgLab, sec.svgLabTitle)}
            </section>
          ))}

          {/* Confusion Breaker VS Cards */}
          {Array.isArray(chapterData.confusionBreakers) && (
            <div className="rounded-3xl bg-slate-900/70 border border-rose-500/35 p-5 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-rose-300 font-black text-base sm:text-lg">
                <GitBranch className="w-5 h-5" />
                <span>{lang === 'hi' ? 'अक्सर ग़लत होने वाले जोड़े (-0.33 Marks बचाएं!)' : 'High-Frequency Confusion Breakers (Save -0.33 Marks!)'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {chapterData.confusionBreakers.map((cb, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#080D1B] border border-slate-800 space-y-2.5">
                    <div className="text-sm font-black text-amber-300">{cb.pair[lang]}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-slate-100 leading-relaxed">
                        {cb.left[lang]}
                      </div>
                      <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-slate-100 leading-relaxed">
                        {cb.right[lang]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. ACTIVITIES & DATA TABLES */}
      {showActivitiesAndTables && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-900/65 border border-emerald-500/30 p-5 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 font-black text-base sm:text-lg">
              <FlaskConical className="w-5 h-5" />
              <span>{lang === 'hi' ? 'सभी NCERT क्रियाकलाप (Activities 2.1 – 2.5)' : 'All 5 NCERT Activities Lab Manual'}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {chapterData.activities.map((act) => (
                <div key={act.num} className="p-4 sm:p-5 rounded-2xl bg-[#080F1D] border border-slate-800 space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black">
                    {lang === 'hi' ? `क्रियाकलाप ${act.num}` : `Activity ${act.num}`}
                  </span>
                  <h3 className="text-base font-black text-white">{act.title[lang]}</h3>
                  <div className="text-xs sm:text-sm text-amber-300 font-semibold">
                    {lang === 'hi' ? 'सामग्री: ' : 'Materials: '}
                    {act.materials[lang]}
                  </div>
                  <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                    <RichHighlightText text={act.steps[lang]} />
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-100 leading-relaxed">
                    <span className="font-black text-emerald-300 block text-xs uppercase mb-0.5">
                      {lang === 'hi' ? '🎯 परीक्षा निष्कर्ष' : '🎯 Exam Takeaway'}
                    </span>
                    <RichHighlightText text={act.examTakeaway[lang]} />
                  </div>

                  {/* Interactive 1-Tap Activity Observation Predictor */}
                  {act.predictQuestion && (
                    <div className="p-3 rounded-xl bg-cyan-950/25 border border-cyan-500/30 space-y-2">
                      <div className="text-[11px] font-black text-cyan-300 uppercase">
                        {lang === 'hi' ? '🔬 प्रयोग पूर्वानुमान (बताइए आगे क्या होगा?)' : '🔬 Lab Observation Predictor'}
                      </div>
                      <div className="text-xs font-bold text-white">{act.predictQuestion.prompt[lang]}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {act.predictQuestion.options[lang].map((opt, oIdx) => {
                          const picked = activityPredictions[act.num];
                          const isDone = picked !== undefined;
                          const isCorr = oIdx === act.predictQuestion.correctIndex;
                          let bCls = 'bg-slate-900 border-slate-700 text-slate-300 hover:border-cyan-400';
                          if (isDone) {
                            if (isCorr) bCls = 'bg-emerald-500/25 border-emerald-400 text-emerald-200 font-bold';
                            else if (picked === oIdx) bCls = 'bg-rose-500/25 border-rose-400 text-rose-200';
                          }
                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => setActivityPredictions((p) => ({ ...p, [act.num]: oIdx }))}
                              className={`px-2.5 py-1 rounded-lg border text-[11px] cursor-pointer transition-all ${bCls}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {activityPredictions[act.num] !== undefined && (
                        <p className="text-[11px] text-emerald-200 leading-snug pt-0.5">
                          <RichHighlightText text={act.predictQuestion.reason[lang]} />
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/65 border border-cyan-500/30 p-5 sm:p-7 space-y-5">
            <div className="flex items-center gap-2 text-cyan-300 font-black text-base sm:text-lg">
              <Table2 className="w-5 h-5" />
              <span>{lang === 'hi' ? 'पूर्ण NCERT तालिकाएँ & मास्टर तुलना सारणी' : 'Complete NCERT & Master Tables'}</span>
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
                            <td key={cIdx} className={`px-3.5 py-3 leading-relaxed ${cIdx === 0 ? 'font-bold text-white' : 'text-slate-200'}`}>
                              <MathText text={typeof cell === 'object' ? cell[lang] : String(cell)} />
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
        </div>
      )}

      {/* 3. GENERATED HD STUDIO VISUALS + REAL SCIENTIFIC PORTRAITS */}
      {showVisualsAndScientists && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-900/65 border border-amber-500/30 p-5 sm:p-7 space-y-4">
            <h2 className="text-base sm:text-lg font-black text-amber-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>{lang === 'hi' ? 'HD स्टूडियो प्रयोग चित्र (ज़ूम करने के लिए टैप करें)' : 'HD Generated Studio Visuals (Tap to Zoom)'}</span>
            </h2>

            <ProFeatureGate
              hasPassPro={hasPassPro}
              onOpenPassPro={onOpenPassPro}
              lang={lang}
              featureTitle={{ en: 'HD Microscopy & Lab Gallery', hi: 'HD माइक्रोस्कोपी गैलरी अनलॉक करें' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {chapterData.visualGallery.map((vis) => (
                  <div key={vis.id} className="rounded-2xl bg-[#080D1B] border border-slate-800 overflow-hidden flex flex-col">
                    <div onClick={() => setZoomedVisual(vis)} className="relative group cursor-pointer aspect-video bg-slate-950 overflow-hidden">
                      <img src={vis.imageUrl} alt={vis.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 border border-slate-700 text-[10px] font-black text-amber-300">
                        {vis.figRef[lang]}
                      </div>
                      <button type="button" className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-black/75 text-white border border-slate-700">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-4 space-y-2 flex-1">
                      <h3 className="text-sm font-black text-white leading-snug">{vis.title[lang]}</h3>
                      <div className="space-y-1.5">
                        {vis.hotspots.map((hs, i) => (
                          <div key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-1.5">
                            <span className="text-teal-400 font-black">•</span>
                            <RichHighlightText text={hs[lang]} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ProFeatureGate>
          </div>

          <div className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-4">
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>{lang === 'hi' ? 'महान वैज्ञानिक एवं खोजें (असली ऐतिहासिक पोर्ट्रेट)' : 'Landmark Pioneers & Discoveries'}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapterData.pioneers.map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#080D1B] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    {p.photoUrl && (
                      <img src={p.photoUrl} alt={p.name[lang]} className="w-14 h-14 rounded-2xl object-cover border border-amber-500/40 shrink-0 bg-slate-900" />
                    )}
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {p.badge[lang]}
                      </span>
                      <h3 className="text-sm font-black text-white mt-1 leading-snug">{p.name[lang]}</h3>
                      <div className="text-[11px] text-slate-400">{p.country[lang]}</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <RichHighlightText text={p.fact[lang]} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. EXERCISES & FLASHCARDS */}
      {showExercisesAndCards && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-900/65 border border-violet-500/30 p-5 sm:p-7 space-y-4">
            <h2 className="text-base sm:text-lg font-black text-violet-300 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>{lang === 'hi' ? 'एक्टिव रिकॉल फ्लैशकार्ड्स (टैप करके उत्तर देखें)' : 'Active Recall Flip Flashcards'}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {chapterData.flashcards.map((card, i) => {
                const flipped = Boolean(flippedCards[i]);
                return (
                  <button
                    key={i}
                    onClick={() => setFlippedCards((prev) => ({ ...prev, [i]: !prev[i] }))}
                    className={`text-left p-4 rounded-2xl border min-h-[130px] flex flex-col justify-between transition-all cursor-pointer ${
                      flipped ? 'bg-emerald-950/35 border-emerald-500/50 text-emerald-100' : 'bg-[#080D1B] border-slate-800 hover:border-violet-400/50 text-white'
                    }`}
                  >
                    <span className="text-[11px] font-black uppercase text-violet-300">
                      {flipped ? (lang === 'hi' ? 'उत्तर ✓' : 'Answer ✓') : lang === 'hi' ? `कार्ड #${i + 1} • टैप करें` : `Card #${i + 1} • Flip`}
                    </span>
                    <div className="text-sm font-bold leading-relaxed my-1">
                      <MathText text={flipped ? card.back[lang] : card.front[lang]} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-3">
            <h2 className="text-base sm:text-lg font-black text-teal-300 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              <span>{lang === 'hi' ? `पाठ्यपुस्तक "सोचिए और बताइए" (${chapterData.inTextQuestions.length} हल सहित)` : `NCERT In-Text Think & Answer (All ${chapterData.inTextQuestions.length})`}</span>
            </h2>
            <div className="space-y-2.5">
              {chapterData.inTextQuestions.map((item, i) => {
                const open = expandedInText[i] ?? true;
                return (
                  <div key={i} className="rounded-2xl bg-[#080D1B] border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setExpandedInText((p) => ({ ...p, [i]: !open }))}
                      className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left cursor-pointer"
                    >
                      <div className="text-sm sm:text-base font-bold text-white">
                        <span className="text-teal-400 mr-2">[{item.num}]</span>
                        <MathText text={item.q[lang]} />
                      </div>
                      {open ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {open && (
                      <div className="px-4 pb-3.5 pt-2 text-sm text-slate-200 leading-relaxed border-t border-slate-800/70">
                        <RichHighlightText text={item.a[lang]} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-3">
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{lang === 'hi' ? `सभी ${chapterData.exercises.length} NCERT अभ्यास प्रश्न (संपूर्ण सरल हल)` : `All ${chapterData.exercises.length} Solved NCERT Exercises`}</span>
            </h2>
            <div className="space-y-2.5">
              {chapterData.exercises.map((ex) => {
                const open = expandedEx[ex.num] ?? ex.num <= 4;
                return (
                  <div key={ex.num} className="rounded-2xl bg-[#080D1B] border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setExpandedEx((p) => ({ ...p, [ex.num]: !open }))}
                      className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left cursor-pointer hover:bg-slate-900/50"
                    >
                      <div className="text-sm sm:text-base font-bold text-white">
                        <span className="text-emerald-400 font-black mr-2">Q{ex.num}.</span>
                        <MathText text={ex.q[lang]} />
                      </div>
                      {open ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {open && (
                      <div className="px-4 pb-4 pt-2 text-sm text-emerald-100 leading-relaxed border-t border-slate-800/70 bg-emerald-950/15">
                        <RichHighlightText text={ex.a[lang]} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 5. COMPLETE 18-Q RRB PYQ DRILL & LIVE CBT LAUNCHER */}
      {showPyqs && (
        <div className="rounded-3xl bg-slate-900/65 border border-amber-500/35 p-5 sm:p-7 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <h2 className="text-base sm:text-xl font-black text-amber-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>{lang === 'hi' ? `अध्याय के सभी ${chapterData.pyqBank.length} रेलवे PYQs (CBT टेस्ट मोड)` : `All ${chapterData.pyqBank.length} Verified Railway PYQs`}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {lang === 'hi' ? 'RRB Group D, ALP, Technician Gr-III व NTPC से सत्यापित प्रश्न' : 'Verified from RRB Group D, ALP, Tech Gr-III & NTPC CBT shifts'}
              </p>
            </div>

            <button
              onClick={handleLaunchChapterPyqCbt}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:brightness-105 text-slate-950 font-black text-xs sm:text-sm shadow-lg cursor-pointer"
            >
              {hasPassPro ? <Play className="w-4 h-4 fill-slate-950" /> : <Crown className="w-4 h-4 fill-slate-950" />}
              <span>{lang === 'hi' ? `लाइव ${chapterData.pyqBank.length}-Q Chapter CBT दें` : `Launch ${chapterData.pyqBank.length}-Q Chapter CBT`}</span>
            </button>
          </div>

          <ProFeatureGate
            hasPassPro={hasPassPro}
            onOpenPassPro={onOpenPassPro}
            lang={lang}
            featureTitle={{ en: `All ${chapterData.pyqBank.length} Chapter PYQ CBT Practice Set`, hi: `अध्याय के सभी ${chapterData.pyqBank.length} रेलवे PYQs अनलॉक करें` }}
          >
            {pyqStats.answered > 0 && (
              <div className="mb-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-sm">
                <span className="font-bold text-white">
                  {lang === 'hi' ? `स्कोर: ${pyqStats.correct} / ${pyqStats.answered} सही` : `Score: ${pyqStats.correct} / ${pyqStats.answered} Correct`}
                </span>
                <button onClick={() => setPyqAnswers({})} className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-bold cursor-pointer">
                  <RotateCcw className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'रीसेट' : 'Reset'}</span>
                </button>
              </div>
            )}

            <div className="space-y-4">
              {chapterData.pyqBank.map((pq, idx) => {
                const picked = pyqAnswers[pq.id];
                const isAnswered = picked !== undefined;
                return (
                  <div key={pq.id} className="p-4 sm:p-5 rounded-2xl bg-[#080D1B] border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {pq.examTag}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">PYQ #{idx + 1}</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                      <MathText text={pq.question[lang]} />
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pq.options[lang].map((opt, oIdx) => {
                        const isCorrect = oIdx === pq.correctIndex;
                        const isPicked = picked === oIdx;
                        let cls = 'bg-slate-900/90 border-slate-700 text-slate-200 hover:border-slate-500';
                        if (isAnswered) {
                          if (isCorrect) cls = 'bg-emerald-500/25 border-emerald-400 text-emerald-200 font-bold';
                          else if (isPicked) cls = 'bg-rose-500/25 border-rose-400 text-rose-200';
                          else cls = 'bg-slate-900/40 border-slate-800 text-slate-400';
                        }
                        return (
                          <button
                            key={oIdx}
                            onClick={() => setPyqAnswers((prev) => ({ ...prev, [pq.id]: oIdx }))}
                            className={`px-3.5 py-2.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${cls}`}
                          >
                            <span className="font-black mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                    {isAnswered && (
                      <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs sm:text-sm text-teal-100 leading-relaxed">
                        <MathText text={pq.solution[lang]} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ProFeatureGate>
        </div>
      )}

      {/* Pro A4 Coaching Booklet Print/Download Modal */}
      {showPdfModal && (
        <div onClick={() => setShowPdfModal(false)} className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div onClick={(e) => e.stopPropagation()} className="max-w-md w-full rounded-3xl bg-[#090D1A] border border-teal-500/40 p-6 shadow-2xl space-y-4 relative">
            <button onClick={() => setShowPdfModal(false)} className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-white cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-3 pt-1">
              <div className="text-center pt-1">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto mb-3">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white">RailwayPrep PRO • A4 E-Book PDF</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Clean white A4 study booklet with RailwayPrep PRO header/footer & watermark, sharp typography, light-mode vector plates, real micrographs & solved PYQs.
                </p>
              </div>
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => handleOpenPdfOption('hi')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm cursor-pointer shadow-lg"
                >
                  🇮🇳 हिन्दी Pro A4 Booklet डाउनलोड / प्रिंट करें
                </button>
                <button
                  onClick={() => handleOpenPdfOption('en')}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm cursor-pointer"
                >
                  🇬🇧 English Pro A4 Booklet Print / Save PDF
                </button>
                <button
                  onClick={() => handleOpenPdfOption('bilingual')}
                  className="w-full py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm cursor-pointer"
                >
                  🌐 Bilingual (हिन्दी + English Together) A4 Booklet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HD Visual Zoom Lightbox */}
      {zoomedVisual && (
        <div onClick={() => setZoomedVisual(null)} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full rounded-3xl bg-[#090D1A] border border-slate-700 overflow-hidden shadow-2xl">
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-300 uppercase">{zoomedVisual.figRef[lang]}</span>
                <h4 className="text-sm font-black text-white">{zoomedVisual.title[lang]}</h4>
              </div>
              <button onClick={() => setZoomedVisual(null)} className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <img src={zoomedVisual.imageUrl} alt={zoomedVisual.title[lang]} className="w-full max-h-[70vh] object-contain bg-black" />
            <div className="p-4 space-y-1.5 bg-slate-950">
              {zoomedVisual.hotspots.map((hs, i) => (
                <div key={i} className="text-sm text-slate-200 flex items-start gap-2">
                  <span className="text-teal-400 font-black">•</span>
                  <RichHighlightText text={hs[lang]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
