import React, { useState, useMemo } from 'react';
import {
  ArrowLeft, Crown, Sparkles, BookOpen, FlaskConical, Table2,
  Lightbulb, AlertTriangle, Zap, CheckCircle2, Printer, Maximize2, X,
  Award, HelpCircle, RotateCcw, ChevronDown, ChevronUp, Play, Layers, Globe
} from 'lucide-react';
import { MathText } from '../QuestionContentRenderer';
import ProFeatureGate from './ProFeatureGate';
import {
  MicroscopeScaleExplorerSVG,
  OsmosisBilayerSimulatorSVG,
  InteractiveCellExplorerSVG,
  MitosisMeiosisAnimatorSVG,
} from './CellInteractiveLabs';
import { buildCustomTopicQuiz } from '../../utils/pyqHelper';

const REVISION_STORAGE_KEY = 'railwayprep_ncert_revised_v1';

function loadRevisedMap() {
  try {
    return JSON.parse(localStorage.getItem(REVISION_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export default function NcertProReader({
  chapterData,
  onBack,
  hasPassPro = false,
  onOpenPassPro,
  onStartChapterQuiz,
}) {
  const [lang, setLang] = useState('hi'); // 'hi' | 'en'
  const [activeSubTab, setActiveSubTab] = useState('all'); // 'all' | 'concepts' | 'activities' | 'visuals' | 'exercises' | 'pyqs'
  const [zoomedVisual, setZoomedVisual] = useState(null);
  const [expandedInText, setExpandedInText] = useState({});
  const [expandedEx, setExpandedEx] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [pyqAnswers, setPyqAnswers] = useState({});
  const [revisedMap, setRevisedMap] = useState(() => loadRevisedMap());

  const isRevised = Boolean(revisedMap[chapterData.id]);

  const toggleRevised = () => {
    const next = { ...revisedMap, [chapterData.id]: !isRevised };
    setRevisedMap(next);
    try {
      localStorage.setItem(REVISION_STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const renderSvgLab = (labKey, titleObj) => {
    let comp = null;
    if (labKey === 'microscope-scale') comp = <MicroscopeScaleExplorerSVG lang={lang} />;
    else if (labKey === 'osmosis-bilayer') comp = <OsmosisBilayerSimulatorSVG lang={lang} />;
    else if (labKey === 'cell-explorer') comp = <InteractiveCellExplorerSVG lang={lang} />;
    else if (labKey === 'mitosis-meiosis') comp = <MitosisMeiosisAnimatorSVG lang={lang} />;
    if (!comp) return null;

    return (
      <div className="my-4">
        <ProFeatureGate
          hasPassPro={hasPassPro}
          onOpenPassPro={onOpenPassPro}
          lang={lang}
          featureTitle={titleObj}
          featureSubtitle={{
            en: 'Interactive Pass Pro SVG Simulator: tap organelles, adjust tonicity/magnification & inspect NCERT facts.',
            hi: 'Pass Pro इंटरैक्टिव एनिमेटेड लैब: कोशिकांग पर टैप करें, परासरण/आवर्धन बदलें व लाइव परीक्षा तथ्य देखें।',
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
      subjectLabel: 'Biology',
      chapterLabel: chapterData.title[lang],
      topicLabel: chapterData.title.en,
      questions: chapterData.pyqBank,
      maxQuestions: chapterData.pyqBank.length,
    });
    onStartChapterQuiz(quiz, lang);
  };

  const highlightStyles = {
    pyq: {
      wrap: 'bg-amber-500/10 border-amber-500/35 text-amber-100',
      badge: 'bg-amber-500/20 text-amber-300',
      icon: Zap,
      tag: { en: 'RRB PYQ Hot Spot', hi: 'रेलवे परीक्षा हॉटस्पॉट' },
    },
    trap: {
      wrap: 'bg-rose-500/10 border-rose-500/35 text-rose-100',
      badge: 'bg-rose-500/20 text-rose-300',
      icon: AlertTriangle,
      tag: { en: '-0.33 Trap Alert', hi: 'Exam Trap / अपवाद' },
    },
    hook: {
      wrap: 'bg-teal-500/10 border-teal-500/35 text-teal-100',
      badge: 'bg-teal-500/20 text-teal-300',
      icon: Lightbulb,
      tag: { en: 'Smart Memory Hook', hi: 'याद रखने का तरीका' },
    },
    formula: {
      wrap: 'bg-cyan-500/10 border-cyan-500/35 text-cyan-100',
      badge: 'bg-cyan-500/20 text-cyan-300',
      icon: Sparkles,
      tag: { en: 'Exact Data / Formula', hi: 'सटीक मान / सूत्र' },
    },
  };

  const showConcepts = activeSubTab === 'all' || activeSubTab === 'concepts';
  const showActivitiesAndTables = activeSubTab === 'all' || activeSubTab === 'activities';
  const showVisualsAndScientists = activeSubTab === 'all' || activeSubTab === 'visuals';
  const showExercisesAndCards = activeSubTab === 'all' || activeSubTab === 'exercises';
  const showPyqs = activeSubTab === 'all' || activeSubTab === 'pyqs';

  const pyqStats = useMemo(() => {
    const answered = Object.keys(pyqAnswers).length;
    const correct = Object.entries(pyqAnswers).filter(
      ([idx, optIdx]) => chapterData.pyqBank?.[Number(idx)]?.correctIndex === optIdx
    ).length;
    return { answered, correct };
  }, [pyqAnswers, chapterData.pyqBank]);

  return (
    <div className="space-y-6 pb-12">
      {/* Sticky Bilingual & Study Action Bar */}
      <div className="sticky top-14 sm:top-16 z-30 -mx-2 px-3 sm:px-4 py-3 rounded-2xl bg-[#070B18]/95 backdrop-blur-md border border-slate-800/90 shadow-xl flex flex-wrap items-center justify-between gap-2.5 print:hidden">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'अध्याय सूची' : 'Chapters'}</span>
          </button>
          <span className="text-xs sm:text-sm font-black text-white truncate">
            {chapterData.title[lang]}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Bilingual E | अ Switcher */}
          <button
            onClick={() => setLang((l) => (l === 'hi' ? 'en' : 'hi'))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/40 text-teal-300 text-xs font-black cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'अ → English' : 'EN → हिन्दी'}</span>
          </button>

          {/* Revised Progress Toggle */}
          <button
            onClick={toggleRevised}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
              isRevised
                ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500/50'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isRevised ? (lang === 'hi' ? 'रिवाइज़्ड ✓' : 'Revised ✓') : lang === 'hi' ? 'मार्क रिवाइज़्ड' : 'Mark Revised'}</span>
          </button>

          {/* Pro Print / Save PDF */}
          <button
            onClick={() => (hasPassPro ? window.print() : onOpenPassPro())}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-black cursor-pointer shadow-md shadow-amber-950/30"
          >
            {hasPassPro ? <Printer className="w-3.5 h-3.5" /> : <Crown className="w-3.5 h-3.5" />}
            <span>{hasPassPro ? (lang === 'hi' ? 'PDF / प्रिंट' : 'Print PDF') : lang === 'hi' ? 'Pro PDF' : 'Unlock PDF'}</span>
          </button>
        </div>
      </div>

      {/* Hero Editorial Card */}
      <div className="rounded-3xl border border-emerald-500/30 bg-[#0A1022] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/35 text-emerald-300 text-[10px] font-black uppercase tracking-wider">
                  {chapterData.sourceCode}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/35 text-amber-300 text-[10px] font-black uppercase">
                  {chapterData.metrics.pyqsMatched}+ {lang === 'hi' ? 'RRB PYQs मैप्ड' : 'RRB PYQs Mapped'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {chapterData.title[lang]}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {chapterData.subtitle[lang]}
              </p>
            </div>

            {/* NCERT Coverage Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
              {[
                { val: chapterData.metrics.pages, en: 'Pages', hi: 'पृष्ठ' },
                { val: chapterData.metrics.activities, en: 'Activities', hi: 'क्रियाकलाप' },
                { val: chapterData.metrics.tables, en: 'Tables', hi: 'तालिकाएँ' },
                { val: chapterData.metrics.svgLabs, en: 'SVG Labs', hi: 'SVG लैब' },
                { val: chapterData.metrics.exercisesSolved, en: 'Exercises', hi: 'अभ्यास' },
                { val: chapterData.metrics.pyqsMatched, en: 'RRB PYQs', hi: 'रेलवे PYQ' },
              ].map((stat, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-sm font-black text-teal-300">{stat.val}</div>
                  <div className="text-[10px] text-slate-400 font-semibold">{stat[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative bg-[#070B18] min-h-[220px]">
            <img
              src={chapterData.hero.imageUrl}
              alt={chapterData.title[lang]}
              className="w-full h-full object-cover max-h-80 lg:max-h-full"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#070B18] via-[#070B18]/80 to-transparent">
              <p className="text-[11px] text-slate-300 leading-snug">{chapterData.hero.caption[lang]}</p>
            </div>
          </div>
        </div>

        {/* Highlight Legend + 60-Second Master Revision Strip */}
        <div className="border-t border-slate-800/80 p-4 sm:p-5 bg-slate-950/60 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-black text-slate-400 uppercase mr-1">
              {lang === 'hi' ? 'हाइलाइट गाइड:' : 'Highlight Guide:'}
            </span>
            {chapterData.highlightLegend.map((item) => (
              <span
                key={item.key}
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                  item.color === 'amber'
                    ? 'bg-amber-500/15 border-amber-500/35 text-amber-300'
                    : item.color === 'rose'
                    ? 'bg-rose-500/15 border-rose-500/35 text-rose-300'
                    : item.color === 'teal'
                    ? 'bg-teal-500/15 border-teal-500/35 text-teal-300'
                    : 'bg-cyan-500/15 border-cyan-500/35 text-cyan-300'
                }`}
              >
                {item.label[lang]}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-900 border border-teal-500/30 p-4">
            <div className="text-xs font-black text-teal-300 flex items-center gap-1.5 mb-2.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? '60-सेकंड परीक्षा सुपर-रिवीजन बुलेट्स' : '60-Second High-Yield Cheat Sheet'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {chapterData.quickRevision60Sec.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="text-teal-400 font-black shrink-0">{i + 1}.</span>
                  <MathText text={bullet[lang]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Filter Navigation Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 py-1 print:hidden">
        {[
          { id: 'all', en: 'All Content (Complete NCERT)', hi: 'संपूर्ण अध्याय (100% क्रमवार)' },
          { id: 'concepts', en: 'Concepts + SVG Labs', hi: 'सिद्धांत + एनिमेटेड लैब' },
          { id: 'activities', en: `Activities (${chapterData.activities.length}) & Tables (${chapterData.tables.length})`, hi: `क्रियाकलाप (${chapterData.activities.length}) व तालिकाएँ (${chapterData.tables.length})` },
          { id: 'visuals', en: 'HD Microscopy & Scientists', hi: 'HD चित्र एवं वैज्ञानिक' },
          { id: 'exercises', en: 'Solved Exercises (16) & Cards', hi: 'अभ्यास प्रश्न (16) व फ्लैशकार्ड' },
          { id: 'pyqs', en: `Real RRB PYQs (${chapterData.pyqBank.length})`, hi: `रेलवे PYQs (${chapterData.pyqBank.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer border transition-all ${
              activeSubTab === tab.id
                ? 'bg-teal-500 text-slate-950 border-teal-300 shadow-md shadow-teal-900/40'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600'
            }`}
          >
            {tab[lang]}
          </button>
        ))}
      </div>

      {/* 1. CONCEPTS & INTERACTIVE SVG LABS */}
      {showConcepts && (
        <div className="space-y-6">
          {chapterData.sections.map((sec) => (
            <section key={sec.id} className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/35 text-xs font-black">
                    {sec.number}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-white">{sec.title[lang]}</h2>
                </div>
                <span className="text-[11px] font-bold text-slate-400">{sec.summaryTag[lang]}</span>
              </div>

              <div className="space-y-4">
                {sec.blocks.map((blk, bIdx) => (
                  <div key={bIdx} className="p-4 sm:p-5 rounded-2xl bg-[#080D1B] border border-slate-800/90 space-y-3">
                    <h3 className="text-sm sm:text-base font-black text-emerald-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      <span>{blk.heading[lang]}</span>
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-200 leading-7 whitespace-pre-line">
                      <MathText text={blk.body[lang]} />
                    </div>

                    {Array.isArray(blk.highlights) && blk.highlights.length > 0 && (
                      <div className="space-y-2 pt-1">
                        {blk.highlights.map((hl, hIdx) => {
                          const st = highlightStyles[hl.kind] || highlightStyles.pyq;
                          const Icon = st.icon;
                          return (
                            <div key={hIdx} className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${st.wrap}`}>
                              <Icon className="w-4 h-4 shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <span className={`inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${st.badge}`}>
                                  {st.tag[lang]}
                                </span>
                                <div>
                                  <MathText text={hl.text[lang]} />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {sec.svgLab && renderSvgLab(sec.svgLab, sec.svgLabTitle)}
            </section>
          ))}
        </div>
      )}

      {/* 2. ALL 5 NCERT ACTIVITIES + ALL DATA TABLES */}
      {showActivitiesAndTables && (
        <div className="space-y-6">
          {/* Activities Grid */}
          <div className="rounded-3xl bg-slate-900/65 border border-emerald-500/30 p-5 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 font-black text-base sm:text-lg">
              <FlaskConical className="w-5 h-5" />
              <span>
                {lang === 'hi'
                  ? 'सभी NCERT क्रियाकलाप (Activities 2.1 – 2.5) — 100% कवर'
                  : 'Complete NCERT Activities Lab Manual (2.1 – 2.5)'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {chapterData.activities.map((act) => (
                <div key={act.num} className="p-4 rounded-2xl bg-[#080F1D] border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase">
                      {lang === 'hi' ? `क्रियाकलाप ${act.num}` : `Activity ${act.num}`}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-white">{act.title[lang]}</h3>
                  <div className="text-[11px] text-amber-300/90 font-semibold">
                    {lang === 'hi' ? 'सामग्री: ' : 'Materials: '}
                    {act.materials[lang]}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                    <MathText text={act.steps[lang]} />
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-100 leading-relaxed">
                    <span className="font-black text-emerald-300 block text-[10px] uppercase mb-0.5">
                      {lang === 'hi' ? '🎯 परीक्षा निष्कर्ष / ट्रिक' : '🎯 Exam Takeaway'}
                    </span>
                    <MathText text={act.examTakeaway[lang]} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complete NCERT & Master Tables */}
          <div className="rounded-3xl bg-slate-900/65 border border-cyan-500/30 p-5 sm:p-7 space-y-5">
            <div className="flex items-center gap-2 text-cyan-300 font-black text-base sm:text-lg">
              <Table2 className="w-5 h-5" />
              <span>
                {lang === 'hi'
                  ? 'पूर्ण NCERT तालिकाएँ (2.1, 2.2) एवं मास्टर कोशिकांग सारणी'
                  : 'Complete NCERT Tables (2.1, 2.2) & Master Cheat Tables'}
              </span>
            </div>

            {chapterData.tables.map((tbl) => (
              <div key={tbl.id} className="space-y-2">
                <h3 className="text-sm font-black text-white">{tbl.title[lang]}</h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 border-b border-slate-800">
                        {tbl.headers[lang].map((h, i) => (
                          <th key={i} className="px-3.5 py-3 font-black text-cyan-300 whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-[#080D1A]">
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/60">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`px-3.5 py-2.5 leading-relaxed ${cIdx === 0 ? 'font-bold text-white' : 'text-slate-300'}`}>
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

      {/* 3. GENERATED HD STUDIO VISUALS + SCIENTISTS PIONEERS */}
      {showVisualsAndScientists && (
        <div className="space-y-6">
          {/* Generated HD Studio Visuals (Pro Gated!) */}
          <div className="rounded-3xl bg-slate-900/65 border border-amber-500/30 p-5 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base sm:text-lg font-black text-amber-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>
                  {lang === 'hi'
                    ? 'HD स्टूडियो माइक्रोस्कोपी एवं प्रयोग चित्र (Zero Text-Blur, Zoomable)'
                    : 'HD Generated Studio Microscopy & Activity Visuals (Zoomable)'}
                </span>
              </h2>
            </div>

            <ProFeatureGate
              hasPassPro={hasPassPro}
              onOpenPassPro={onOpenPassPro}
              lang={lang}
              featureTitle={{
                en: 'High-Resolution Microscopy & Staining Lab Visuals',
                hi: 'हाई-रिज़ॉल्यूशन माइक्रोस्कोपी एवं प्रयोगशाला चित्र अनलॉक करें',
              }}
              featureSubtitle={{
                en: 'Inspect crisp SEM leaf stomata, Safranin vs Methylene Blue cells, Plasmolysis & Onion Root-Tip Mitosis stages.',
                hi: 'SEM कोलोकेशिया रंध्र, प्याज व कपोल स्लाइड, जीवद्रव्य कुंचन व मूलाग्र समसूत्री विभाजन चित्र ज़ूम करके देखें।',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {chapterData.visualGallery.map((vis) => (
                  <div key={vis.id} className="rounded-2xl bg-[#080D1B] border border-slate-800 overflow-hidden flex flex-col">
                    <div
                      onClick={() => setZoomedVisual(vis)}
                      className="relative group cursor-pointer aspect-video bg-slate-950 overflow-hidden"
                    >
                      <img src={vis.imageUrl} alt={vis.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 border border-slate-700 text-[10px] font-black text-amber-300">
                        {vis.figRef[lang]}
                      </div>
                      <button
                        type="button"
                        className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-black/75 text-white border border-slate-700 opacity-90 group-hover:opacity-100"
                        aria-label="Zoom Visual"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-3.5 space-y-2 flex-1">
                      <h3 className="text-xs font-black text-white leading-snug">{vis.title[lang]}</h3>
                      <div className="space-y-1.5">
                        {vis.hotspots.map((hs, i) => (
                          <div key={i} className="text-[11px] text-slate-300 leading-relaxed flex items-start gap-1.5">
                            <span className="text-teal-400 font-black">•</span>
                            <MathText text={hs[lang]} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ProFeatureGate>
          </div>

          {/* Scientist Portraits & Milestones */}
          <div className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-4">
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>{lang === 'hi' ? 'वैज्ञानिक-परिचय एवं ऐतिहासिक खोजें (100% कवर)' : 'Scientists & Landmark Discoveries'}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {chapterData.pioneers.map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#080D1B] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {p.badge[lang]}
                    </span>
                    <span className="text-[10px] text-slate-400">{p.country[lang]}</span>
                  </div>
                  <h3 className="text-sm font-black text-white">{p.name[lang]}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <MathText text={p.fact[lang]} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. SOLVED IN-TEXT + ALL 16 END-OF-CHAPTER EXERCISES + FLIP FLASHCARDS */}
      {showExercisesAndCards && (
        <div className="space-y-6">
          {/* Active Recall Flashcards */}
          <div className="rounded-3xl bg-slate-900/65 border border-violet-500/30 p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-base sm:text-lg font-black text-violet-300 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                <span>{lang === 'hi' ? 'एक्टिव रिकॉल फ्लैशकार्ड्स (टैप करके उत्तर जांचें)' : 'Active Recall Flip Flashcards (Tap to Flip)'}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {chapterData.flashcards.map((card, i) => {
                const flipped = Boolean(flippedCards[i]);
                return (
                  <button
                    key={i}
                    onClick={() => setFlippedCards((prev) => ({ ...prev, [i]: !prev[i] }))}
                    className={`text-left p-4 rounded-2xl border min-h-[125px] flex flex-col justify-between transition-all cursor-pointer ${
                      flipped
                        ? 'bg-emerald-950/35 border-emerald-500/50 text-emerald-100'
                        : 'bg-[#080D1B] border-slate-800 hover:border-violet-400/50 text-white'
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase text-violet-300">
                      {flipped ? (lang === 'hi' ? 'उत्तर ✓' : 'Answer ✓') : lang === 'hi' ? `कार्ड #${i + 1} • टैप करें` : `Card #${i + 1} • Tap to Flip`}
                    </span>
                    <div className="text-xs font-bold leading-relaxed my-1">
                      <MathText text={flipped ? card.back[lang] : card.front[lang]} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* In-Text Think & Answer */}
          <div className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-3">
            <h2 className="text-base sm:text-lg font-black text-teal-300 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              <span>{lang === 'hi' ? 'पाठ्यपुस्तक "सोचिए और बताइए" (सभी 7 हल सहित)' : 'NCERT In-Text "Think & Answer" (All 7 Solved)'}</span>
            </h2>
            <div className="space-y-2.5">
              {chapterData.inTextQuestions.map((item, i) => {
                const open = expandedInText[i] ?? true;
                return (
                  <div key={i} className="rounded-2xl bg-[#080D1B] border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setExpandedInText((p) => ({ ...p, [i]: !open }))}
                      className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left cursor-pointer"
                    >
                      <div className="text-xs sm:text-sm font-bold text-white">
                        <span className="text-teal-400 mr-2">[{item.num}]</span>
                        <MathText text={item.q[lang]} />
                      </div>
                      {open ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {open && (
                      <div className="px-4 pb-3 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70">
                        <MathText text={item.a[lang]} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* All 16 Solved End-of-Chapter NCERT Exercises */}
          <div className="rounded-3xl bg-slate-900/65 border border-slate-800 p-5 sm:p-7 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>
                  {lang === 'hi'
                    ? 'अध्याय अभ्यास प्रश्न (प्रश्न 1 से 16 तक — उत्तरमाला सत्यापित हल)'
                    : 'All 16 NCERT End-of-Chapter Exercises (Verified Solutions)'}
                </span>
              </h2>
            </div>

            <div className="space-y-2.5">
              {chapterData.exercises.map((ex) => {
                const open = expandedEx[ex.num] ?? ex.num <= 4;
                return (
                  <div key={ex.num} className="rounded-2xl bg-[#080D1B] border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setExpandedEx((p) => ({ ...p, [ex.num]: !open }))}
                      className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left cursor-pointer hover:bg-slate-900/50"
                    >
                      <div className="text-xs sm:text-sm font-bold text-white">
                        <span className="text-emerald-400 font-black mr-2">Q{ex.num}.</span>
                        <MathText text={ex.q[lang]} />
                      </div>
                      {open ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {open && (
                      <div className="px-4 pb-3.5 pt-2 text-xs text-emerald-100/90 leading-relaxed border-t border-slate-800/70 bg-emerald-950/15">
                        <MathText text={ex.a[lang]} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 5. REAL RAILWAY PYQs + LAUNCH LIVE CBT CHAPTER TEST (Pro Feature) */}
      {showPyqs && (
        <div className="rounded-3xl bg-slate-900/65 border border-amber-500/35 p-5 sm:p-7 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <h2 className="text-base sm:text-xl font-black text-amber-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>
                  {lang === 'hi'
                    ? `अध्याय से जुड़े वास्तविक RRB PYQs (${chapterData.pyqBank.length} प्रश्न)`
                    : `Verified Railway Exam PYQs from This Chapter (${chapterData.pyqBank.length} Qs)`}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'hi'
                  ? 'RRB Group D 2025, ALP 2025 व Technician Gr-III 2024 की असली शिफ्ट्स से चयनित प्रश्न'
                  : 'Curated directly from RRB Group D 2025, ALP 2025 & Technician Gr-III 2024 official answer keys'}
              </p>
            </div>

            <button
              onClick={handleLaunchChapterPyqCbt}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:brightness-105 text-slate-950 font-black text-xs shadow-lg shadow-emerald-900/40 cursor-pointer"
            >
              {hasPassPro ? <Play className="w-4 h-4 fill-slate-950" /> : <Crown className="w-4 h-4 fill-slate-950" />}
              <span>
                {lang === 'hi'
                  ? `लाइव ${chapterData.pyqBank.length}-Q Chapter CBT टेस्ट दें`
                  : `Launch ${chapterData.pyqBank.length}-Q Chapter CBT Mock`}
              </span>
            </button>
          </div>

          <ProFeatureGate
            hasPassPro={hasPassPro}
            onOpenPassPro={onOpenPassPro}
            lang={lang}
            featureTitle={{
              en: 'Chapter PYQ Interactive Quiz & Live CBT Simulator',
              hi: 'अध्याय PYQ प्रैक्टिस सेट एवं लाइव CBT टेस्ट अनलॉक करें',
            }}
            featureSubtitle={{
              en: 'Practice 15 official RRB Group D, ALP & Tech Gr-III Cell Biology PYQs with instant explanations or launch full CBT timer mode.',
              hi: '15 असली RRB Group D, ALP व Tech Gr-III प्रश्न तुरंत व्याख्या सहित हल करें या लाइव टाइमर CBT टेस्ट दें।',
            }}
          >
            {pyqStats.answered > 0 && (
              <div className="mb-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">
                  {lang === 'hi'
                    ? `स्कोर: ${pyqStats.correct} / ${pyqStats.answered} सही`
                    : `Score: ${pyqStats.correct} / ${pyqStats.answered} Correct`}
                </span>
                <button
                  onClick={() => setPyqAnswers({})}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white font-bold cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'रीसेट करें' : 'Reset'}</span>
                </button>
              </div>
            )}

            <div className="space-y-4">
              {chapterData.pyqBank.map((pq, idx) => {
                const picked = pyqAnswers[idx];
                const isAnswered = picked !== undefined;
                return (
                  <div key={pq.id} className="p-4 rounded-2xl bg-[#080D1B] border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {pq.examTag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">PYQ #{idx + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                      <MathText text={pq.question[lang]} />
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pq.options[lang].map((opt, oIdx) => {
                        const isCorrect = oIdx === pq.correctIndex;
                        const isPicked = picked === oIdx;
                        let cls = 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-600';
                        if (isAnswered) {
                          if (isCorrect) cls = 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold';
                          else if (isPicked) cls = 'bg-rose-500/20 border-rose-400 text-rose-200';
                          else cls = 'bg-slate-900/40 border-slate-800/60 text-slate-400';
                        }
                        return (
                          <button
                            key={oIdx}
                            onClick={() => setPyqAnswers((prev) => ({ ...prev, [idx]: oIdx }))}
                            className={`px-3 py-2 rounded-xl border text-left text-xs transition-all cursor-pointer ${cls}`}
                          >
                            <span className="font-black mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                    {isAnswered && (
                      <div className="p-2.5 rounded-xl bg-teal-950/35 border border-teal-500/30 text-xs text-teal-100 leading-relaxed">
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

      {/* HD Image Zoom Lightbox */}
      {zoomedVisual && (
        <div
          onClick={() => setZoomedVisual(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full rounded-3xl bg-[#090D1A] border border-slate-700 overflow-hidden shadow-2xl"
          >
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-300 uppercase">{zoomedVisual.figRef[lang]}</span>
                <h4 className="text-sm font-black text-white">{zoomedVisual.title[lang]}</h4>
              </div>
              <button
                onClick={() => setZoomedVisual(null)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img src={zoomedVisual.imageUrl} alt={zoomedVisual.title[lang]} className="w-full max-h-[70vh] object-contain bg-black" />
            <div className="p-4 space-y-1.5 bg-slate-950">
              {zoomedVisual.hotspots.map((hs, i) => (
                <div key={i} className="text-xs text-slate-200 flex items-start gap-2">
                  <span className="text-teal-400 font-black">•</span>
                  <MathText text={hs[lang]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
