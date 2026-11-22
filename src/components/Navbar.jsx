import React, { useState } from 'react';
import { 
  Train, Sparkles, Crown, Search, Globe, ChevronDown, 
  Menu, X, BookOpen, CheckSquare, Zap, Flame, User
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenPassPro, 
  onStartMock, 
  selectedLang, 
  setSelectedLang 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('RRB NTPC 2026-27');
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false);

  const GOALS = [
    'RRB NTPC 2026-27 (CBT 1 & 2)',
    'RRB ALP (Technician & CBT-2)',
    'RRB Group D (CBT)',
    'RPF SI & Constable'
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#070B18]/95 backdrop-blur-md border-b border-slate-800/80">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-teal-900/60 via-emerald-950/60 to-slate-900 border-b border-teal-500/20 px-4 py-1.5 text-xs text-center flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-semibold text-emerald-400">RRB NTPC 2026 Free All-India Live Mock Test Series:</span>
        <span className="text-slate-300 hidden sm:inline">Attempt authentic TCS CBT interface & get instant All-India Rank</span>
        <button 
          onClick={onStartMock}
          className="ml-2 font-bold text-teal-300 hover:text-white underline cursor-pointer"
        >
          Attempt Now →
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Logo & Goal Selector */}
          <div className="flex items-center gap-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform">
                <Train className="w-5 h-5 text-slate-950 font-black" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-white">RailwayRanker</span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">PRO</span>
                </div>
                <span className="text-[10px] text-teal-400/90 font-medium">India's Dedicated CBT Hub</span>
              </div>
            </div>

            {/* Goal Selector (Testbook style) */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setGoalDropdownOpen(!goalDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-teal-500/50 text-xs text-slate-200 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                <span className="font-medium text-slate-400">Target:</span>
                <span className="font-semibold text-white">{selectedGoal.split(' ')[0]} {selectedGoal.split(' ')[1]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {goalDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Select Railway Exam</div>
                  {GOALS.map(goal => (
                    <button
                      key={goal}
                      onClick={() => {
                        setSelectedGoal(goal);
                        setGoalDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${selectedGoal === goal ? 'text-teal-400 font-semibold bg-slate-800/50' : 'text-slate-300'}`}
                    >
                      {goal}
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
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'home' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('mock-tests')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'mock-tests' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              Test Series
            </button>
            <button 
              onClick={() => setActiveTab('super-coaching')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'super-coaching' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <BookOpen className="w-4 h-4 text-teal-400" />
              SuperCoaching Notes
            </button>
            <button 
              onClick={() => setActiveTab('daily-quiz')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'daily-quiz' ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              Daily Quiz
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Language toggle (English / Hindi) */}
            <button
              onClick={() => setSelectedLang(selectedLang === 'hi' ? 'en' : 'hi')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              title="Toggle Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>{selectedLang === 'hi' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Testbook Style Pass Pro Gold Button */}
            <button
              onClick={onOpenPassPro}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 text-xs font-extrabold shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>PASS PRO</span>
              <span className="bg-slate-950/20 px-1 py-0.2 rounded text-[10px]">₹49</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090D1A] px-4 pt-2 pb-4 space-y-1">
          <button 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            🏠 Home
          </button>
          <button 
            onClick={() => { setActiveTab('mock-tests'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-emerald-400 hover:bg-slate-800 flex items-center justify-between"
          >
            <span>📝 Test Series (Full CBT Mocks)</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">FREE LIVE</span>
          </button>
          <button 
            onClick={() => { setActiveTab('super-coaching'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-teal-300 hover:bg-slate-800"
          >
            📚 SuperCoaching (Neeraj Sir & Maths Notes)
          </button>
          <button 
            onClick={() => { setActiveTab('daily-quiz'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-amber-300 hover:bg-slate-800"
          >
            ⚡ Daily Speed Quizzes
          </button>
          <div className="pt-2">
            <button
              onClick={() => { onOpenPassPro(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Crown className="w-4 h-4 fill-slate-950" />
              Upgrade to Pass Pro (80% Off - ₹49)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
