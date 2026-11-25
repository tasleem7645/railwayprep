import React from 'react';
import {
  ArrowRight,
  Zap,
  Search,
  FileText,
  Bookmark,
  Calculator,
  CheckCircle2,
  Crown,
  BookOpen,
  Play,
  Layers,
  Send,
} from 'lucide-react';
import TestCard from './TestCard';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

const SUPER_NOTES_PREVIEW = [
  {
    id: 'science',
    subject: 'General Science (NCERT)',
    badge: '40+ Formulas',
    desc: "Ohm's Law, Optics, Periodic Table, Vitamins & Human Systems.",
    color: 'from-teal-500/15 to-emerald-500/5 border-teal-500/30 text-teal-300',
  },
  {
    id: 'maths',
    subject: '2-Second Maths Tricks',
    badge: 'Speed Shortcuts',
    desc: 'Ratio, Percentage, SI/CI Diff, Trains, Trigonometry & Mensuration.',
    color: 'from-amber-500/15 to-orange-500/5 border-amber-500/30 text-amber-300',
  },
  {
    id: 'reasoning',
    subject: 'Reasoning Mind Maps',
    badge: 'TCS Pattern',
    desc: 'Syllogism Venn rules, Coding-Decoding, Mirror & Clock tricks.',
    color: 'from-purple-500/15 to-indigo-500/5 border-purple-500/30 text-purple-300',
  },
  {
    id: 'gk',
    subject: 'Railway Static GK & CA',
    badge: 'High Yield',
    desc: '18 Railway Zones, Constitutional Articles, Budget & Summits.',
    color: 'from-sky-500/15 to-cyan-500/5 border-sky-500/30 text-sky-300',
  },
];

export default function HomeShowcaseSections({
  railwayTests,
  onSelectExamTrack,
  onOpenTab,
  onStartMock,
  onResumeTest,
  onDiscardSavedSession,
  onOpenPassPro,
  onOpenPdfModal,
  onOpenMistakes,
  getTestAccess,
  isGuestDemoTest,
  savedSession,
  loadingTestId,
}) {
  const countByYear = (fn) => railwayTests.filter(fn).length;

  const examSeriesPacks = [
    {
      key: '2026',
      tag: 'TRENDING • SHIFT 1 FREE',
      title: 'RRB ALP 2026 CBT-1 Complete Test Series',
      totalTests: countByYear((t) => t.examYear !== '2025' && t.exam !== 'RRB ALP 2025' && !t.stage?.includes('CBT-2') && t.examYear !== 'groupd-2025'),
      accent: 'from-teal-500/20 via-slate-900 to-slate-950 border-teal-500/40',
      pillClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      bullets: ['9 Official Full Shifts (75 Qs)', 'Science, Maths & Reasoning Sectionals', 'English & हिंदी Toggle'],
    },
    {
      key: 'groupd-2025',
      tag: '48 OFFICIAL SHIFTS',
      title: 'RRB Group D Level-1 (CEN 09/2025) Series',
      totalTests: countByYear((t) => t.examYear === 'groupd-2025' || t.exam?.includes('Group D')),
      accent: 'from-emerald-500/20 via-slate-900 to-slate-950 border-emerald-500/40',
      pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      bullets: ['48 Official 100-Q Full Papers', '4 Subject Sectionals Free in Shift 1', 'Expected Cutoff + Live Rank'],
    },
    {
      key: '2025',
      tag: 'OFFICIAL PYQ PACK',
      title: 'RRB ALP 2025 CBT-1 Solved Papers',
      totalTests: countByYear((t) => (t.examYear === '2025' || t.exam === 'RRB ALP 2025') && !t.stage?.includes('CBT-2')),
      accent: 'from-indigo-500/20 via-slate-900 to-slate-950 border-indigo-500/40',
      pillClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      bullets: ['10 TCS Official Shift Papers', 'Pure Maths & Reasoning Boosters', 'Solved A4 PDF Export'],
    },
    {
      key: 'cbt2',
      tag: 'STAGE 2 • PART A',
      title: 'RRB ALP CBT-2 Part A Mock Series',
      totalTests: countByYear((t) => (t.examYear === 'cbt2' || t.stage === 'CBT-2') && t.stage !== 'CBT-2 Part B'),
      accent: 'from-amber-500/20 via-slate-900 to-slate-950 border-amber-500/40',
      pillClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      bullets: ['100 Qs • Basic Science & Engg Included', 'Merit Decider Full Mocks', 'Bilingual Explanations'],
    },
    {
      key: 'cbt2-part-b',
      tag: '15 TRADES • QUALIFYING',
      title: 'ALP CBT-2 Part B Technical Trades',
      totalTests: countByYear((t) => t.stage === 'CBT-2 Part B' || t.examYear === 'cbt2-part-b'),
      accent: 'from-cyan-500/20 via-slate-900 to-slate-950 border-cyan-500/40',
      pillClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      bullets: ['Electrician, Fitter, Mech & 12 More', '75 Technical Qs • 35% Qualifying Gauge', 'Official ITI Syllabus Match'],
    },
    {
      key: 'pyq-explorer',
      isTabNav: true,
      tag: 'NEW • 5-LEVEL DRILL',
      title: 'Topic-Wise PYQ Bank & Instant CBT',
      totalTests: '8,665+ Qs',
      accent: 'from-purple-500/20 via-slate-900 to-slate-950 border-purple-500/40',
      pillClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      bullets: ['Exam → Year → Subject → Chapter → Topic', 'Instant Custom 10/15/25 Q Mini CBT', 'Bookmark & Accuracy Tracking'],
    },
  ];

  // Pick 3 representative Free Demo Shift-1 cards for quick 1-click launch on Home
  const featuredDemos = [
    railwayTests.find((t) => t.id === 'rrb-alp-shift-1') || railwayTests[0],
    railwayTests.find((t) => (t.examYear === '2025' || t.exam === 'RRB ALP 2025') && t.category !== 'sectional' && isGuestDemoTest(t)),
    railwayTests.find((t) => t.examYear === 'groupd-2025' && t.category !== 'sectional' && isGuestDemoTest(t)),
  ].filter(Boolean);

  const quickActions = [
    { label: 'Free Quizzes', badge: 'FREE', icon: Zap, color: 'text-amber-400 bg-amber-500/15 border-amber-500/30', onClick: () => onOpenTab('daily-quiz') },
    { label: 'Topic PYQs', badge: 'NEW', icon: Search, color: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30', onClick: () => onOpenTab('pyq-explorer') },
    { label: 'Solved PDFs', badge: 'PDF', icon: FileText, color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30', onClick: onOpenPdfModal },
    { label: 'गलती डायरी', badge: 'CBT', icon: Bookmark, color: 'text-rose-400 bg-rose-500/15 border-rose-500/30', onClick: onOpenMistakes },
    { label: 'Rank Tools', badge: 'HOT', icon: Calculator, color: 'text-teal-400 bg-teal-500/15 border-teal-500/30', onClick: () => onOpenTab('tools') },
    {
      label: 'Telegram',
      badge: 'JOIN',
      icon: Send,
      color: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
      href: MONETIZATION_CONFIG.community.telegramChannelUrl,
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 py-6 sm:py-8">
      {/* 1. Testbook-Style Horizontal Exam Series Packs (Replaces 168-card scroll dump) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-4 rounded-full bg-teal-400" />
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                Popular Railway Test Series
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Select your exam track or swipe to browse all {railwayTests.length} official mock tests.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenTab('mock-tests')}
            className="text-xs font-extrabold text-teal-400 hover:text-teal-300 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View All ({railwayTests.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div
          className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory overscroll-x-contain pb-2 no-scrollbar touch-manipulation"
          role="region"
          aria-label="Railway Test Series Packs"
        >
          {examSeriesPacks.map((pack) => (
            <div
              key={pack.key}
              className={`min-w-[82vw] sm:min-w-[320px] lg:min-w-0 snap-start rounded-2xl sm:rounded-3xl bg-gradient-to-br ${pack.accent} border p-5 flex flex-col justify-between shadow-lg hover:border-teal-400/70 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${pack.pillClass}`}>
                    {pack.tag}
                  </span>
                  <span className="text-xs font-extrabold text-slate-200 bg-slate-950/60 px-2.5 py-0.5 rounded-lg border border-slate-800">
                    {typeof pack.totalTests === 'number' ? `${pack.totalTests} Tests` : pack.totalTests}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug mb-2">
                  {pack.title}
                </h3>

                <div className="inline-block text-[10px] font-bold text-teal-300 bg-teal-500/10 border border-teal-500/25 px-2 py-0.5 rounded mb-3">
                  English + हिंदी • TCS CBT Engine
                </div>

                <ul className="space-y-1.5 text-[11px] text-slate-300 mb-4">
                  {pack.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => (pack.isTabNav ? onOpenTab('pyq-explorer') : onSelectExamTrack(pack.key))}
                className="w-full py-2.5 rounded-xl bg-slate-950/80 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/40 font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{pack.isTabNav ? 'Explore Topic PYQs' : 'Open Test Series'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Testbook Circular Quick-Action Dock */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900/65 border border-slate-800/90 p-3 sm:p-5">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
            {quickActions.map((act) => {
              const Icon = act.icon;
              const inner = (
                <>
                  <span className="relative inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border transition-transform group-hover:scale-105 mb-1.5 bg-slate-950/80 border-slate-800">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${act.color}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 rounded bg-rose-500 text-white text-[8px] font-black tracking-wide">
                      {act.badge}
                    </span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-200 group-hover:text-teal-300 text-center leading-tight">
                    {act.label}
                  </span>
                </>
              );

              if (act.href) {
                return (
                  <a
                    key={act.label}
                    href={act.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center p-2 rounded-xl hover:bg-slate-800/50 transition-colors touch-manipulation"
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <button
                  key={act.label}
                  type="button"
                  onClick={act.onClick}
                  className="group flex flex-col items-center justify-center p-2 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer touch-manipulation"
                >
                  {inner}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Free Shift-1 Quick Launch Strip (Only 3 Demo Mocks — zero scroll bloat) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-4 rounded-full bg-emerald-400" />
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                Try Shift-1 Free Without Login
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Launch an authentic bilingual CBT paper in 1 click, or browse all shifts & sectionals.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenTab('mock-tests')}
            className="text-xs font-extrabold text-teal-400 hover:text-teal-300 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>All {railwayTests.length} Tests</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory overscroll-x-contain pb-2 no-scrollbar">
          {featuredDemos.map((test) => (
            <div key={test.id} className="min-w-[85vw] sm:min-w-[330px] md:min-w-0 snap-start">
              <TestCard
                test={test}
                compact
                accessStatus={getTestAccess(test)}
                isGuestDemo={isGuestDemoTest(test)}
                savedSession={savedSession}
                loadingTestId={loadingTestId}
                onStartMock={onStartMock}
                onResumeTest={onResumeTest}
                onDiscardSavedSession={onDiscardSavedSession}
                onOpenPassPro={onOpenPassPro}
              />
            </div>
          ))}
        </div>

        {/* Big Clean Catalog Action Bar */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/35 to-slate-900 border border-slate-800">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 hidden sm:flex">
              <Layers className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="text-sm font-black text-white">
                Explore All {railwayTests.length} Official Shifts, Sectionals & 15 ITI Trades
              </div>
              <div className="text-xs text-slate-400">
                Filter by Exam Cycle, Date Shift, Trade, or Search keyword on the dedicated Test Series page.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenTab('mock-tests')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-teal-950 cursor-pointer shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>Open Full Test Catalog →</span>
          </button>
        </div>
      </section>

      {/* 4. Compact Study Notes Strip (Replaces giant full SuperCoaching dump on Home) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-4 rounded-full bg-amber-400" />
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                High-Yield Study Notes & Formula Sheets
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Concise NCERT Science, 2-Second Maths & Reasoning notes built for fast revision.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenTab('super-coaching')}
            className="text-xs font-extrabold text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Open All Notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {SUPER_NOTES_PREVIEW.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => onOpenTab('super-coaching')}
              className={`p-4 rounded-2xl bg-gradient-to-br ${n.color} border text-left hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-950/70 text-slate-200 border border-slate-800">
                    {n.badge}
                  </span>
                </div>
                <div className="text-sm font-black text-white mb-1">{n.subject}</div>
                <p className="text-[11px] text-slate-300/90 leading-relaxed">{n.desc}</p>
              </div>
              <div className="mt-3 text-[11px] font-bold flex items-center gap-1">
                <span>Read Chapter Notes</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
