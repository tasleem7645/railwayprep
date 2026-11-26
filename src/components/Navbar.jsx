import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles, Crown, Search, Globe, ChevronDown,
  Menu, X, BookOpen, CheckSquare, Zap, Flame, User, FileText, ShoppingBag,
  Calculator, Bookmark, LogIn, Send, Home, ChevronRight
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenPassPro,
  onStartMock,
  onOpenMistakes,
  onOpenPdfModal,
  selectedLang,
  setSelectedLang,
  selectedGoal = 'RRB ALP (Loco Pilot 2026)',
  onSelectGoal,
  user = null,
  profile = null,
  hasPassPro = false,
  studyStreak = null,
  onOpenAuth,
  onOpenDashboard,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false);
  const closeBtnRef = useRef(null);

  const GOALS = [
    'RRB ALP (Loco Pilot 2026)',
    'RRB ALP 2025 (CBT-1)',
    'RRB ALP CBT-2 (Part A)',
    'RRB ALP CBT-2 (Part B Trades)',
    'RRB Technician (CEN 02/2026)',
    'RRB JE & DMS (CEN 04/2026)',
    'RRB Station Master (CEN 08/2026)',
    'RRB NTPC Graduate & UG (2026)',
    'RRB Group D (Level-1)',
    'RPF SI & Constable',
  ];

  useEffect(() => {
    if (!drawerOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => closeBtnRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [drawerOpen]);

  const handleNav = (tab) => {
    setActiveTab(tab);
    setDrawerOpen(false);
    setGoalDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoalSelect = (goal) => {
    if (onSelectGoal) onSelectGoal(goal);
    setGoalDropdownOpen(false);
  };

  const drawerSections = [
    {
      heading: 'LEARN',
      items: [
        { label: 'Home', icon: Home, onClick: () => handleNav('home'), active: activeTab === 'home' },
        { label: 'SuperCoaching Notes', badge: 'FREE', badgeColor: 'bg-emerald-500/20 text-emerald-300', icon: BookOpen, onClick: () => handleNav('super-coaching'), active: activeTab === 'super-coaching' },
        { label: 'Syllabus & Vacancies', icon: FileText, onClick: () => handleNav('syllabus'), active: activeTab === 'syllabus' },
        { label: 'Recommended Books', icon: ShoppingBag, onClick: () => handleNav('books'), active: activeTab === 'books' },
      ],
    },
    {
      heading: 'TESTS & PRACTICE',
      items: [
        { label: 'Test Series (225+ Mocks)', badge: 'LIVE', badgeColor: 'bg-teal-500/20 text-teal-300', icon: CheckSquare, onClick: () => handleNav('mock-tests'), active: activeTab === 'mock-tests' },
        { label: 'Topic-Wise PYQ Bank', badge: 'NEW', badgeColor: 'bg-cyan-500/20 text-cyan-300', icon: Search, onClick: () => handleNav('pyq-explorer'), active: activeTab === 'pyq-explorer' },
        { label: 'Daily Rapid Quiz', badge: 'STREAK', badgeColor: 'bg-amber-500/20 text-amber-300', icon: Zap, onClick: () => handleNav('daily-quiz'), active: activeTab === 'daily-quiz' },
        { label: 'गलती डायरी (Mistake CBT)', icon: Bookmark, onClick: () => { setDrawerOpen(false); onOpenMistakes?.(); } },
        { label: 'Solved Shift PDFs', icon: FileText, onClick: () => { setDrawerOpen(false); onOpenPdfModal?.(); } },
      ],
    },
    {
      heading: 'TOOLS & COMMUNITY',
      items: [
        { label: 'Score & Cutoff Predictor', badge: 'HOT', badgeColor: 'bg-rose-500/20 text-rose-300', icon: Calculator, onClick: () => handleNav('tools'), active: activeTab === 'tools' },
        { label: 'Pass Pro Membership', badge: hasPassPro ? 'ACTIVE' : `₹${MONETIZATION_CONFIG.payments.passProPrice}`, badgeColor: 'bg-amber-500/20 text-amber-300', icon: Crown, onClick: () => { setDrawerOpen(false); onOpenPassPro(); } },
        { label: `Telegram (${MONETIZATION_CONFIG.community.telegramChannelName})`, icon: Send, href: MONETIZATION_CONFIG.community.telegramChannelUrl },
        { label: `Doubt Group (${MONETIZATION_CONFIG.community.telegramGroupName})`, icon: Sparkles, href: MONETIZATION_CONFIG.community.telegramGroupUrl },
      ],
    },
  ];

  const desktopLinks = [
    { id: 'home', label: 'Home' },
    { id: 'mock-tests', label: 'Test Series' },
    { id: 'pyq-explorer', label: 'PYQ Bank' },
    { id: 'daily-quiz', label: 'Daily Quiz' },
    { id: 'super-coaching', label: 'Notes' },
    { id: 'tools', label: 'Tools' },
    { id: 'books', label: 'Books' },
  ];

  return (
    <>
      {/* Compact Single-Row Sticky Header (<= 64px height on all screens) */}
      <header className="sticky top-0 z-40 print:hidden bg-[#070B18]/95 backdrop-blur-md border-b border-slate-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 h-14 sm:h-16">
            {/* Left: Menu Trigger (Mobile/Tablet) + Brand Logo + Desktop Exam Goal Pill */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                aria-controls="railwayprep-drawer"
                className="lg:hidden p-2 -ml-1 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer touch-manipulation shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => handleNav('home')}
                className="flex items-center gap-2 cursor-pointer group shrink-0 text-left"
              >
                <img
                  src="/logo.jpg"
                  alt="RailwayPrep PRO"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover border border-teal-500/40 shadow-md shadow-teal-500/20 shrink-0"
                />
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-sm sm:text-base font-black tracking-tight text-white">
                    RailwayPrep
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 leading-none shrink-0">
                    PRO
                  </span>
                </div>
              </button>

              {/* Desktop Wide Exam Switcher (shown where ample width exists, also in Drawer & Home) */}
              <div className="relative hidden 2xl:block ml-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setGoalDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-xs text-slate-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  <span className="font-bold text-white truncate max-w-[125px]">{selectedGoal}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>

                {goalDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl py-1.5 z-50">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Target Railway Exam
                    </div>
                    {GOALS.map((goal) => (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => handleGoalSelect(goal)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors cursor-pointer ${
                          selectedGoal === goal ? 'text-teal-400 font-bold bg-slate-800/60' : 'text-slate-300'
                        }`}
                      >
                        <span>{goal}</span>
                        {selectedGoal === goal && <span className="text-teal-400">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Center: Desktop Primary Nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {desktopLinks.map((lnk) => {
                const isActive = activeTab === lnk.id;
                return (
                  <button
                    key={lnk.id}
                    type="button"
                    onClick={() => handleNav(lnk.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-teal-300 bg-teal-500/15 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {lnk.label}
                  </button>
                );
              })}
            </nav>

            {/* Right: Crisp Always-Visible Utilities + High-Contrast Login/Profile Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Language compact toggle */}
              <button
                type="button"
                onClick={() => setSelectedLang(selectedLang === 'hi' ? 'en' : 'hi')}
                className="flex items-center gap-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-[11px] font-bold text-slate-200 hover:border-teal-500/50 transition-colors cursor-pointer"
                title="Switch Language (हिंदी / English)"
              >
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                <span>{selectedLang === 'hi' ? 'हिं' : 'EN'}</span>
              </button>

              {/* Streak Pill (Desktop & Tablet) */}
              <button
                type="button"
                onClick={() => (user ? onOpenDashboard() : handleNav('daily-quiz'))}
                className="hidden sm:flex items-center gap-1 px-2 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 text-[11px] font-extrabold text-amber-300 transition-colors cursor-pointer"
                title={`Daily Study Streak: ${studyStreak?.activeStreak || 0} Days`}
              >
                <Flame
                  className={`w-3.5 h-3.5 ${
                    (studyStreak?.activeStreak || 0) > 0 ? 'fill-amber-400 text-amber-400' : 'text-slate-400'
                  }`}
                />
                <span>{studyStreak?.activeStreak || 0}d</span>
              </button>

              {/* Telegram Quick Icon (Desktop) */}
              <a
                href={MONETIZATION_CONFIG.community.telegramChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-sky-500/15 border border-sky-500/40 hover:bg-sky-500/25 text-xs font-bold text-sky-300 transition-colors"
                title="Join @RailwayPrep_Official on Telegram"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden 2xl:inline">Telegram</span>
              </a>

              {/* Pass Pro Pill */}
              <button
                type="button"
                onClick={onOpenPassPro}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[11px] sm:text-xs font-black shadow-md shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer shrink-0"
              >
                <Crown className="w-3.5 h-3.5 fill-slate-950" />
                <span className="hidden xs:inline sm:inline">{hasPassPro ? 'PRO' : 'PASS PRO'}</span>
                <span className="sm:hidden">{hasPassPro ? 'PRO' : 'PRO'}</span>
              </button>

              {/* High-Contrast Prominent Login / Student Account CTA */}
              {user ? (
                <button
                  type="button"
                  onClick={onOpenDashboard}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-teal-400/60 hover:border-teal-300 text-xs font-bold text-white transition-all cursor-pointer shrink-0"
                  title={user.email}
                >
                  <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-400 text-slate-950 font-black flex items-center justify-center text-[10px] uppercase shrink-0">
                    {(profile?.full_name || user?.email || 'U').charAt(0)}
                  </span>
                  <span className="hidden sm:inline max-w-[85px] truncate">
                    {profile?.full_name?.split(' ')[0] || user?.email?.split('@')[0]}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 text-xs font-black shadow-lg shadow-teal-500/25 transition-all cursor-pointer shrink-0"
                >
                  <LogIn className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Testbook-Style Categorized Left Slide-Over Drawer (Mobile/Tablet) */}
      {drawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
          aria-label="RailwayPrep Navigation Menu"
          id="railwayprep-drawer"
        >
          {/* Dimmed backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Slide-over drawer sheet */}
          <aside className="relative z-10 w-[82vw] max-w-[310px] h-[100svh] bg-[#0B1020] border-r border-slate-800 shadow-2xl flex flex-col overflow-y-auto overscroll-contain no-scrollbar">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800/80 sticky top-0 bg-[#0B1020]/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.jpg"
                  alt="RailwayPrep PRO"
                  className="w-8 h-8 rounded-lg object-cover border border-teal-500/40"
                />
                <span className="text-base font-black text-white">RailwayPrep PRO</span>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation menu"
                className="p-1.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Prominent Login / Profile Card inside Drawer */}
            <div className="p-4 border-b border-slate-800/80 space-y-3 bg-slate-950/40">
              {user ? (
                <button
                  type="button"
                  onClick={() => { setDrawerOpen(false); onOpenDashboard(); }}
                  className="w-full p-3 rounded-2xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/40 flex items-center justify-between gap-2 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-400 text-slate-950 font-black flex items-center justify-center uppercase shrink-0">
                      {(profile?.full_name || user?.email || 'U').charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-black text-white truncate">
                        {profile?.full_name || user?.email?.split('@')[0]}
                      </div>
                      <div className="text-[10px] text-teal-300 font-semibold">
                        {hasPassPro ? 'Pass Pro Active ✓' : 'Free Member'} • 🔥 {studyStreak?.activeStreak || 0}d
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setDrawerOpen(false); onOpenAuth(); }}
                  className="w-full p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-400 text-slate-950 font-black text-xs flex items-center justify-between shadow-lg shadow-teal-950/50 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <LogIn className="w-4 h-4 stroke-[2.5]" />
                    <span>Login / Free Sign Up (Unlock Shifts 2 & 3)</span>
                  </div>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              )}

              {/* Exam Goal Selector inside Drawer */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Target Railway Exam
                </label>
                <select
                  value={selectedGoal}
                  onChange={(e) => handleGoalSelect(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-teal-400 text-xs text-white font-bold focus:outline-none cursor-pointer"
                >
                  {GOALS.map((goal) => (
                    <option key={goal} value={goal} className="bg-slate-900 text-white">
                      {goal}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grouped Testbook-Style Navigation List */}
            <div className="p-3 space-y-5 flex-1">
              {drawerSections.map((section) => (
                <div key={section.heading}>
                  <div className="px-3 mb-1.5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    {section.heading}
                  </div>
                  <div className="space-y-0.5">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const baseCls = `w-full px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 transition-colors ${
                        item.active
                          ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30'
                          : 'text-slate-200 hover:bg-slate-800/70'
                      }`;
                      if (item.href) {
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setDrawerOpen(false)}
                            className={baseCls}
                          >
                            <span className="flex items-center gap-2.5">
                              <Icon className="w-4 h-4 text-sky-400 shrink-0" />
                              <span>{item.label}</span>
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                          </a>
                        );
                      }
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={item.onClick}
                          className={`${baseCls} cursor-pointer text-left`}
                        >
                          <span className="flex items-center gap-2.5">
                            <Icon className={`w-4 h-4 shrink-0 ${item.active ? 'text-teal-400' : 'text-slate-400'}`} />
                            <span>{item.label}</span>
                          </span>
                          {item.badge && (
                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
