import React, { useState, useMemo } from 'react';
import { SUPER_COACHING_DATA } from '../data/superCoachingData';
import {
  NCERT_CLASSES,
  SUBJECT_SECTIONS,
  NCERT_CHAPTER_CATALOG,
} from '../data/ncert/ncertCatalog';
import NcertProReader from './ncert/NcertProReader';
import { MathText } from './QuestionContentRenderer';
import AdBanner from './AdBanner';
import {
  BookOpen, Sparkles, Zap, Download, Clock, Search,
  CheckCircle2, Printer, Copy, Check, Crown, X, Lock,
  Atom, FlaskConical, Dna, ChevronRight, Layers, Globe
} from 'lucide-react';

const SUBJECT_ICONS = {
  biology: Dna,
  physics: Atom,
  chemistry: FlaskConical,
};

const SUBJECT_STYLES = {
  emerald: {
    border: 'border-emerald-500/35',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/35',
    iconBg: 'bg-emerald-500/15 text-emerald-300',
  },
  cyan: {
    border: 'border-cyan-500/35',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/35',
    iconBg: 'bg-cyan-500/15 text-cyan-300',
  },
  amber: {
    border: 'border-amber-500/35',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/35',
    iconBg: 'bg-amber-500/15 text-amber-300',
  },
};

export default function SuperCoachingView({
  onOpenPassPro,
  hasPassPro = false,
  hideAds = false,
  onStartChapterQuiz,
}) {
  const [hubMode, setHubMode] = useState('ncert'); // 'ncert' | 'shortcuts'
  const [selectedClass, setSelectedClass] = useState('class9'); // 'class9' | 'class10'
  const [subjectFilter, setSubjectFilter] = useState('all'); // 'all' | 'biology' | 'physics' | 'chemistry'
  const [catalogLang, setCatalogLang] = useState('hi'); // 'hi' | 'en'

  // Active NCERT Chapter Reader State
  const [activeChapterData, setActiveChapterData] = useState(null);
  const [loadingChapterId, setLoadingChapterId] = useState(null);

  // Classic Formula / Shortcut Notes State
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNote, setActiveNote] = useState(SUPER_COACHING_DATA[0]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const isPdfUnlocked = hasPassPro;

  const handleOpenNcertChapter = async (chapter) => {
    if (chapter.status !== 'live' || !chapter.loader) return;
    setLoadingChapterId(chapter.id);
    try {
      const mod = await chapter.loader();
      const loaded =
        (mod && mod.sections ? mod : null) ||
        mod?.CH2_CELL_DATA ||
        mod?.default ||
        Object.values(mod || {}).find((v) => v && typeof v === 'object' && Array.isArray(v.sections)) ||
        Object.values(mod || {})[0];
      setActiveChapterData(loaded);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Failed to load NCERT chapter:', err);
    } finally {
      setLoadingChapterId(null);
    }
  };

  const handleDownloadClick = () => {
    if (isPdfUnlocked) {
      setShowExportModal(true);
    } else {
      onOpenPassPro();
    }
  };

  const handleCopyFormulas = () => {
    const text = activeNote.points
      .map((p) => `${p.title}\nFormula: ${p.formula || 'N/A'}\n${p.content}\n`)
      .join('\n---\n\n');
    navigator.clipboard?.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const revisedMap = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('railwayprep_ncert_revised_v1') || '{}');
    } catch {
      return {};
    }
  }, [activeChapterData]);

  // If a full NCERT Chapter Reader is open, render the immersive reader workspace
  if (hubMode === 'ncert' && activeChapterData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <NcertProReader
          chapterData={activeChapterData}
          onBack={() => setActiveChapterData(null)}
          hasPassPro={hasPassPro}
          onOpenPassPro={onOpenPassPro}
          onStartChapterQuiz={onStartChapterQuiz}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>RailwayPrep Pro Study Vault</span>
            </div>
            {hasPassPro && (
              <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                <Crown className="w-3 h-3 fill-amber-300" />
                <span>Pass Pro Active • Pro Labs & PDFs Unlocked</span>
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {hubMode === 'ncert'
              ? catalogLang === 'hi'
                ? 'NCERT कक्षा 9 व 10 विज्ञान — Pro Notes'
                : 'NCERT Class 9 & 10 Science — Pro Notes'
              : 'High-Yield Formula & Shortcut Hub'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {hubMode === 'ncert'
              ? catalogLang === 'hi'
                ? 'नया 2026–27 पाठ्यक्रम: भौतिकी, रसायन और जीव विज्ञान में प्रत्येक टॉपिक, क्रियाकलाप, तालिका, एनिमेटेड SVG लैब और रेलवे PYQ।'
                : 'New 2026–27 Syllabus organized cleanly into Biology, Physics & Chemistry with Activities, Tables, SVG Labs & RRB PYQs.'
              : '2-Second Maths Shortcuts, Reasoning rules and quick revision formula packs for NTPC, Group D & ALP.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setCatalogLang((l) => (l === 'hi' ? 'en' : 'hi'))}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-teal-500/40 text-teal-300 font-black text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{catalogLang === 'hi' ? 'अ | EN' : 'EN | अ'}</span>
          </button>

          {!hasPassPro && (
            <button
              onClick={onOpenPassPro}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Crown className="w-4 h-4 fill-slate-950" />
              <span>Unlock Pass Pro (₹49)</span>
            </button>
          )}
        </div>
      </div>

      {/* Primary Workspace Mode Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 my-5">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setHubMode('ncert')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 border cursor-pointer transition-all ${
              hubMode === 'ncert'
                ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 border-teal-300 shadow-lg shadow-emerald-950/50'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>
              {catalogLang === 'hi'
                ? '📚 NCERT कक्षा 9 एवं 10 विज्ञान (2026–27)'
                : '📚 NCERT Class 9 & 10 Science (2026–27)'}
            </span>
          </button>

          <button
            onClick={() => setHubMode('shortcuts')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 border cursor-pointer transition-all ${
              hubMode === 'shortcuts'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 border-amber-300 shadow-lg shadow-amber-950/50'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>
              {catalogLang === 'hi'
                ? '⚡ शॉर्टकट फॉर्मूला (Maths / Reasoning / Quick Science)'
                : '⚡ Formula & Shortcut Vault'}
            </span>
          </button>
        </div>
      </div>

      <AdBanner slot="inFeedNative" onOpenPassPro={onOpenPassPro} hideAds={hideAds} />

      {/* ================= MODE 1: NCERT CLASS 9 & 10 PRO HUB ================= */}
      {hubMode === 'ncert' && (
        <div className="space-y-6 mt-5">
          {/* Class 9th vs Class 10th Cards + Subject Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NCERT_CLASSES.map((cls) => {
              const active = selectedClass === cls.id;
              const liveCount = NCERT_CHAPTER_CATALOG.filter(
                (c) => c.classId === cls.id && c.status === 'live'
              ).length;
              return (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClass(cls.id)}
                  className={`p-5 rounded-3xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-gradient-to-br from-slate-900 via-[#0C162D] to-teal-950/35 border-teal-400 shadow-xl shadow-teal-950/40 ring-1 ring-teal-400/40'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/35 text-teal-300 text-[10px] font-black uppercase">
                      {cls.badge[catalogLang]}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300">
                      {liveCount > 0 ? `${liveCount} Live Now` : catalogLang === 'hi' ? 'जल्द आ रहा है' : 'Next Queue'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white">{cls.label[catalogLang]}</h3>
                  <p className="text-xs text-slate-400 mt-1">{cls.bookTitle[catalogLang]}</p>
                </button>
              );
            })}
          </div>

          {/* Subject Pills & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setSubjectFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer border transition-colors ${
                  subjectFilter === 'all'
                    ? 'bg-white text-slate-950 border-white'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                }`}
              >
                {catalogLang === 'hi' ? 'सभी विषय (Bio • Phy • Chem)' : 'All Subjects'}
              </button>
              {SUBJECT_SECTIONS.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSubjectFilter(sub.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer border transition-colors ${
                    subjectFilter === sub.id
                      ? 'bg-teal-500 text-slate-950 border-teal-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {sub.shortLabel[catalogLang]}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={catalogLang === 'hi' ? 'अध्याय या टॉपिक खोजें...' : 'Search chapter or topic...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Strict Subject Sections (Biology -> Physics -> Chemistry) */}
          <div className="space-y-6">
            {SUBJECT_SECTIONS.filter((sub) => subjectFilter === 'all' || subjectFilter === sub.id).map(
              (sub) => {
                const SubIcon = SUBJECT_ICONS[sub.id] || BookOpen;
                const sty = SUBJECT_STYLES[sub.accent] || SUBJECT_STYLES.emerald;
                const chapters = NCERT_CHAPTER_CATALOG.filter((ch) => {
                  if (ch.classId !== selectedClass || ch.subjectId !== sub.id) return false;
                  if (!searchQuery.trim()) return true;
                  const q = searchQuery.toLowerCase();
                  return (
                    ch.title.en.toLowerCase().includes(q) ||
                    ch.title.hi.toLowerCase().includes(q) ||
                    ch.tagline.en.toLowerCase().includes(q) ||
                    ch.tagline.hi.toLowerCase().includes(q)
                  );
                });

                if (chapters.length === 0) return null;

                return (
                  <div
                    key={sub.id}
                    className={`rounded-3xl bg-slate-900/55 border ${sty.border} p-5 sm:p-6 space-y-4`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/90">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${sty.iconBg}`}>
                          <SubIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-black text-white">
                            {sub.label[catalogLang]}
                          </h3>
                          <p className="text-xs text-slate-400">{sub.description[catalogLang]}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full border text-[11px] font-black ${sty.badge}`}>
                        {chapters.length} {catalogLang === 'hi' ? 'अध्याय' : 'Chapters'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {chapters.map((ch) => {
                        const isLive = ch.status === 'live';
                        const isRev = Boolean(revisedMap[ch.id]);
                        return (
                          <div
                            key={ch.id}
                            onClick={() => isLive && handleOpenNcertChapter(ch)}
                            className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                              isLive
                                ? 'bg-[#080E1E] border-emerald-400/60 hover:border-emerald-300 shadow-lg shadow-emerald-950/30 cursor-pointer hover:scale-[1.01]'
                                : 'bg-slate-950/45 border-slate-800/80 opacity-80'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center justify-between gap-1.5">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="px-2 py-0.5 rounded-lg bg-slate-800 text-slate-200 text-[10px] font-black">
                                    Ch {ch.chapterNumber}
                                  </span>
                                  {isLive ? (
                                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase animate-pulse">
                                      ● LIVE • PRO LABS
                                    </span>
                                  ) : (
                                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold">
                                      {catalogLang === 'hi' ? 'अगले अपडेट में' : 'Up Next'}
                                    </span>
                                  )}
                                  {ch.isNew2026Topic && (
                                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[9px] font-black">
                                      2026-27 NEW
                                    </span>
                                  )}
                                  {isRev && (
                                    <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[9px] font-black">
                                      ✓ Revised
                                    </span>
                                  )}
                                </div>

                                <span className="text-[10px] font-bold text-amber-300">
                                  🔥 {ch.pyqHits}+ PYQs
                                </span>
                              </div>

                              <h4 className="text-sm sm:text-base font-black text-white">
                                {ch.title[catalogLang]}
                              </h4>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                {ch.tagline[catalogLang]}
                              </p>
                            </div>

                            {isLive ? (
                              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                                <span className="text-[11px] font-bold text-teal-300 flex items-center gap-1.5">
                                  <Layers className="w-3.5 h-3.5" />
                                  <span>
                                    {ch.activitiesCount} Activities • {ch.figuresCount} Figs Mapped • {ch.pages}p
                                  </span>
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-black">
                                  <span>
                                    {loadingChapterId === ch.id
                                      ? 'Loading...'
                                      : catalogLang === 'hi'
                                      ? 'नोट्स खोलें'
                                      : 'Open Studio'}
                                  </span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            ) : (
                              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                                <span>{ch.pages} NCERT Pages</span>
                                <span className="inline-flex items-center gap-1">
                                  <Lock className="w-3 h-3" />
                                  {catalogLang === 'hi' ? 'शीघ्र अपलोड होगा' : 'Queued Next'}
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}

      {/* ================= MODE 2: CLASSIC SHORTCUT & FORMULA HUB ================= */}
      {hubMode === 'shortcuts' && (
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-6">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {['All', 'General Science', 'Mathematics', 'Reasoning'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedSubject === sub
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-900/50'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search notes, formulas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-3">
              {SUPER_COACHING_DATA.filter((note) => {
                const matchSub = selectedSubject === 'All' || note.subject === selectedSubject;
                const matchSearch =
                  note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  note.teacher.toLowerCase().includes(searchQuery.toLowerCase());
                return matchSub && matchSearch;
              }).map((note) => {
                const isSelected = activeNote.id === note.id;
                return (
                  <div
                    key={note.id}
                    onClick={() => setActiveNote(note)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-teal-500 shadow-lg shadow-teal-950 ring-1 ring-teal-500/50'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                        {note.teacher} • {note.role}
                      </span>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {note.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white line-clamp-1">{note.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{note.overview}</p>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
              <div className="pb-4 border-b border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                    {activeNote.subject} • {activeNote.category}
                  </span>
                  <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {activeNote.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">{activeNote.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{activeNote.overview}</p>
              </div>

              <div className="mt-6 space-y-6">
                {activeNote.points.map((point, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                    <h4 className="text-sm font-bold text-teal-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point.title}</span>
                    </h4>

                    {point.formula && (
                      <div className="my-3 p-3 rounded-xl bg-slate-900 border border-teal-500/30 text-sm text-teal-200 overflow-x-auto">
                        <MathText text={`$$${point.formula}$$`} />
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                      {point.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-white">Need printable PDF for quick revision?</h5>
                  <p className="text-xs text-slate-400">
                    Complete formula sheets + short notes ready for print & offline study.
                  </p>
                </div>
                <button
                  onClick={handleDownloadClick}
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold shrink-0 cursor-pointer shadow-md"
                >
                  {hasPassPro ? '🖨️ Print / Save as PDF' : 'Get PDF via Pass Pro (₹49)'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#090D1A] border border-teal-500/40 rounded-3xl p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setShowExportModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pt-2">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-3">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Print / Export Notes PDF</h3>
              <p className="text-xs text-slate-400 mt-1">
                Pass Pro Active! You have full access to print and copy all formula sheets.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Printer className="w-4 h-4" />
                <span>Print or Save as PDF (Chrome / Android)</span>
              </button>

              <button
                onClick={handleCopyFormulas}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                {copiedAll ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedAll ? 'All Formulas Copied!' : 'Copy All Formulas to Clipboard'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
