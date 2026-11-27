import React from 'react';
import { 
  CheckCircle2, Sparkles, Play, ShieldCheck, Flame, 
  Users, Award, BarChart3, Clock, ArrowRight, Zap, Target
} from 'lucide-react';

export default function HeroSection({ onStartMock, onExploreNotes, onOpenPassPro }) {
  return (
    <div className="relative overflow-hidden pt-5 pb-9 sm:pt-8 sm:pb-12 border-b border-slate-800/60">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-teal-500/15 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Target Badge */}
        <div className="flex justify-center lg:justify-start mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-[11px] sm:text-xs font-semibold shadow-lg shadow-teal-900/30">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse shrink-0" />
            <span>Target Exam: RRB ALP 2026 (CBT-1 & 2) • Group D • NTPC</span>
            <span className="bg-teal-500/30 text-teal-200 text-[10px] px-1.5 py-0.5 rounded-full font-bold hidden sm:inline">Live 2026</span>
          </div>
        </div>

        {/* Two-column Branded Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Copy & Primary CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-[3.15rem] font-black text-white tracking-tight leading-[1.15]">
              India&apos;s #1 Dedicated <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Railway CBT Simulator
              </span> &amp; Revision Hub
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Real-exam pattern CBT simulation, negative marking analysis, high-yield NCERT science visual notes, and 2-second maths shortcuts — built for Railway aspirants.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onStartMock}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-teal-500/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer glow-teal"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 text-slate-950" />
                <span>Start Free Live Mock Test</span>
                <span className="text-[10px] bg-slate-950/20 text-slate-950 font-bold px-2 py-0.5 rounded-full">FREE</span>
              </button>

              <button
                onClick={onExploreNotes}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/50 hover:border-teal-400 text-emerald-200 font-bold text-sm sm:text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Maths Mastery &amp; Pro Notes (Ch 1 LIVE)</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Micro trust checkmarks */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Shift 1 Free Without Login
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Authentic Bilingual (Hindi & English)
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Instant Rank & Solutions
              </span>
            </div>
          </div>

          {/* Right Branded Showcase Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 bg-[#070B18] shadow-2xl shadow-teal-950/50 group">
              <img
                src="/hero-cbt-visual.jpg"
                alt="RailwayPrep PRO Computer-Based Test Exam Simulator"
                className="w-full h-auto object-cover aspect-video group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 bg-slate-950/80 backdrop-blur-md border border-slate-800/90 rounded-2xl px-3.5 py-2.5">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.jpg" alt="RailwayPrep" className="w-8 h-8 rounded-lg object-cover border border-teal-500/40" />
                  <div>
                    <div className="text-xs font-black text-white">RailwayPrep Engine v2.0</div>
                    <div className="text-[10px] text-teal-300 font-semibold">651+ Mocks, Sectionals &amp; Trades</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black uppercase">
                  LIVE 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Social Proof Stats Cards (Testbook style) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">50,000+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Active Railway Aspirants</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black text-teal-400">99.2%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">ALP CBT Match Ratio</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Student Rating ★★★★★</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">₹0 Free</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Daily CBT Access</div>
          </div>
        </div>

      </div>
    </div>
  );
}
