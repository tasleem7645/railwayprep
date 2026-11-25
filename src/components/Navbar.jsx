import React, { useState } from 'react';
import { 
  Sparkles, Crown, Search, Globe, ChevronDown, 
  Menu, X, BookOpen, CheckSquare, Zap, Flame, User, FileText, ShoppingBag,
  Calculator, Bookmark, LogIn, Send
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenPassPro, 
  onStartMock, 
  onOpenMistakes,
  selectedLang, 
  setSelectedLang,
  selectedGoal = 'RRB ALP (Loco Pilot 2026)',
  onSelectGoal,
  user = null,
  profile = null,
  hasPassPro = false,
  studyStreak = null,
  onOpenAuth,
  onOpenDashboard
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false);

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
    'RPF SI & Constable'
  ];

  const handleNav = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoalSelect = (goal) => {
    if (onSelectGoal) {
      onSelectGoal(goal);
    }
    setGoalDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070B18]/95 backdrop-blur-md border-b border-slate-800/80">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-teal-900/60 via-emerald-950/60 to-slate-900 border-b border-teal-500/20 px-3 sm:px-4 py-1.5 text-xs text-center flex items-center justify-center gap-1.5 sm:gap-2">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-semibold text-emerald-400 truncate">RRB ALP Official CBT Tests Live:</span>
        <span className="text-slate-300 hidden md:inline truncate">Attempt authentic official bilingual papers with TCS CBT interface</span>
        <button 
          onClick={onStartMock}
          className="ml-1 sm:ml-2 font-bold text-teal-300 hover:text-white underline cursor-pointer shrink-0"
        >
          Attempt Now →
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Logo & Goal Selector */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <img
                src="/logo.jpg"
                alt="RailwayPrep PRO"
                className="w-10 h-10 rounded-xl object-cover border border-teal-500/40 shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-black tracking-tight text-white">RailwayPrep</span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">PRO</span>
                </div>
                <span className="text-[10px] text-teal-400/90 font-medium hidden sm:inline">Official Railway CBT Hub</span>
              </div>
            </div>

            {/* Goal Selector */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setGoalDropdownOpen(!goalDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-teal-500/50 text-xs text-slate-200 transition-colors cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                <span className="font-medium text-slate-400">Target:</span>
                <span className="font-semibold text-white truncate max-w-[140px]">{selectedGoal}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {goalDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Select Railway Exam</div>
                  {GOALS.map(goal => (
                    <button
                      key={goal}
                      onClick={() => handleGoalSelect(goal)}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors cursor-pointer ${selectedGoal === goal ? 'text-teal-400 font-semibold bg-slate-800/50' : 'text-slate-300'}`}
                    >
                      <span>{goal}</span>
                      {selectedGoal === goal && <span className="text-teal-400 text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeTab === 'home' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('mock-tests')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'mock-tests' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              Test Series
            </button>
            <button 
              onClick={() => handleNav('daily-quiz')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'daily-quiz' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              Daily Quiz
            </button>
            <button 
              onClick={() => handleNav('pyq-explorer')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'pyq-explorer' ? 'text-teal-400 bg-teal-500/10 font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <Search className="w-4 h-4 text-cyan-400" />
              PYQ Bank
            </button>
            <button 
              onClick={() => handleNav('super-coaching')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'super-coaching' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <BookOpen className="w-4 h-4 text-teal-400" />
              SuperCoaching
            </button>
            <button 
              onClick={() => handleNav('syllabus')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'syllabus' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <FileText className="w-4 h-4 text-sky-400" />
              Syllabus
            </button>
            <button 
              onClick={() => handleNav('tools')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'tools' ? 'text-teal-400 bg-teal-500/10 font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              Tools Hub
            </button>
            <button 
              onClick={() => handleNav('books')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${activeTab === 'books' ? 'text-amber-400 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              Books
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Study Streak Flame Pill */}
            <button
              onClick={() => (user ? onOpenDashboard() : handleNav('daily-quiz'))}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 text-xs font-extrabold text-amber-300 transition-colors cursor-pointer"
              title={`Daily Study Streak: ${studyStreak?.activeStreak || 0} Days (Best: ${studyStreak?.bestStreak || 0}d)`}
            >
              <Flame className={`w-3.5 h-3.5 ${(studyStreak?.activeStreak || 0) > 0 ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
              <span>{studyStreak?.activeStreak || 0}d</span>
            </button>

            {/* Telegram Channel Quick CTA */}
            <a
              href={MONETIZATION_CONFIG.community.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-sky-500/15 border border-sky-500/40 hover:bg-sky-500/25 text-xs font-bold text-sky-300 transition-colors"
              title="Join Official Telegram for Daily PYQ Polls, PDFs & RRB Alerts"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden xl:inline">Telegram</span>
            </a>

            {/* Mistake Notebook Shortcut */}
            <button
              onClick={onOpenMistakes}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-rose-500/30 hover:border-rose-500/60 text-xs font-bold text-rose-300 transition-colors cursor-pointer"
              title="My Mistake Notebook (गलती डायरी)"
            >
              <Bookmark className="w-3.5 h-3.5 fill-rose-500/20 text-rose-400" />
              <span>गलती डायरी</span>
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setSelectedLang(selectedLang === 'hi' ? 'en' : 'hi')}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Toggle Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>{selectedLang === 'hi' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Pass Pro Button */}
            <button
              onClick={onOpenPassPro}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 text-xs font-extrabold shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>{hasPassPro ? 'PRO ACTIVE' : 'PASS PRO'}</span>
              {!hasPassPro && (
                <span className="bg-slate-950/20 px-1 py-0.2 rounded text-[10px] hidden sm:inline">₹{MONETIZATION_CONFIG.payments.passProPrice}</span>
              )}
            </button>

            {/* User Login / Profile Account Button */}
            {user ? (
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-teal-500/40 hover:border-teal-400 text-xs font-bold text-white transition-all cursor-pointer"
                title={user.email}
              >
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 font-black flex items-center justify-center text-[10px] uppercase shrink-0">
                  {(profile?.full_name || user?.email || 'U').charAt(0)}
                </span>
                <span className="hidden md:inline max-w-[90px] truncate">
                  {profile?.full_name?.split(' ')[0] || user?.email?.split('@')[0]}
                </span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-teal-400 text-xs font-bold text-teal-300 hover:text-white transition-all cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer with backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(4rem+29px)] bottom-0 z-50 bg-[#070B18]/98 backdrop-blur-xl border-t border-slate-800 overflow-y-auto px-4 pt-3 pb-8 space-y-2 animate-in fade-in slide-in-from-top-4">
          
          {/* Target Exam Goal selector on Mobile */}
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 mb-3">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">🎯 Active Target Exam</div>
            <select
              value={selectedGoal}
              onChange={(e) => handleGoalSelect(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-teal-500/40 text-xs text-white font-bold focus:outline-none focus:border-teal-400 cursor-pointer"
            >
              {GOALS.map(goal => (
                <option key={goal} value={goal} className="bg-slate-900 text-white">
                  {goal}
                </option>
              ))}
            </select>
          </div>

          <button 
            onClick={() => handleNav('home')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'home' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-slate-200 hover:bg-slate-800/60'}`}
          >
            <span>🏠 Home</span>
          </button>

          <button 
            onClick={() => handleNav('mock-tests')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'mock-tests' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-emerald-400 hover:bg-slate-800/60'}`}
          >
            <span>📝 Test Series (86+ Full Mocks)</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">FREE LIVE</span>
          </button>

          <button 
            onClick={() => handleNav('daily-quiz')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'daily-quiz' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-amber-300 hover:bg-slate-800/60'}`}
          >
            <span>⚡ Daily Rapid Speed Quizzes</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">10 MINS</span>
          </button>

          <button 
            onClick={() => handleNav('pyq-explorer')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'pyq-explorer' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-cyan-300 hover:bg-slate-800/60'}`}
          >
            <span>🔍 Topic-Wise PYQ Explorer</span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">NEW</span>
          </button>

          <button 
            onClick={() => handleNav('super-coaching')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'super-coaching' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-teal-300 hover:bg-slate-800/60'}`}
          >
            <span>📚 SuperCoaching Study Notes</span>
          </button>

          <button 
            onClick={() => handleNav('syllabus')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'syllabus' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-sky-300 hover:bg-slate-800/60'}`}
          >
            <span>📋 Official Vacancy & Syllabus</span>
          </button>

          <button 
            onClick={() => handleNav('tools')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'tools' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-emerald-400 hover:bg-slate-800/60'}`}
          >
            <span>🧮 Smart Aspirant Tools Hub</span>
            <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-bold">HOT</span>
          </button>

          <button 
            onClick={() => { onOpenMistakes(); setMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-rose-300 hover:bg-slate-800/60 flex items-center gap-2 cursor-pointer"
          >
            <Bookmark className="w-4 h-4 fill-rose-500/20 text-rose-400" />
            <span>गलती डायरी (Mistake Notebook)</span>
          </button>

          <button 
            onClick={() => handleNav('books')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${activeTab === 'books' ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30' : 'text-amber-300 hover:bg-slate-800/60'}`}
          >
            <span>📖 Recommended Topper Books</span>
          </button>

          <div className="pt-4 space-y-2.5">
            {user ? (
              <button
                onClick={() => { onOpenDashboard(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-xl bg-slate-900 border border-teal-500/40 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4 text-teal-400" />
                <span>My Dashboard ({profile?.full_name || user?.email?.split('@')[0]})</span>
              </button>
            ) : (
              <button
                onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-xl bg-slate-900 border border-teal-500/40 text-teal-300 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Student Login / Free Sign Up</span>
              </button>
            )}
            <a
              href={MONETIZATION_CONFIG.community.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-sky-500/15 border border-sky-500/40 text-sky-300 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-sky-400" />
              <span>Join Telegram ({MONETIZATION_CONFIG.community.telegramChannelName})</span>
            </a>
            <button
              onClick={() => { onOpenPassPro(); setMobileMenuOpen(false); }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-sm text-center flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              <Crown className="w-4 h-4 fill-slate-950" />
              <span>{hasPassPro ? 'Pass Pro Active ✓' : `Upgrade to Pass Pro (₹${MONETIZATION_CONFIG.payments.passProPrice}/Year)`}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
