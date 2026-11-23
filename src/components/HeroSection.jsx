import React from 'react';
import { 
  CheckCircle2, Sparkles, Play, ShieldCheck, Flame, 
  Users, Award, BarChart3, Clock, ArrowRight, Zap, Target
} from 'lucide-react';

export default function HeroSection({ onStartMock, onExploreNotes, onOpenPassPro }) {
  return (
    <div className="relative overflow-hidden pt-8 pb-14 border-b border-slate-800/60">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-teal-500/15 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Target Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-semibold shadow-lg shadow-teal-900/30">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>Target Exam: RRB ALP 2026 (CBT-1) • Technician • JE • NTPC</span>
            <span className="bg-teal-500/30 text-teal-200 text-[10px] px-1.5 py-0.5 rounded-full font-bold">New Exam Pattern</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            India's #1 Dedicated <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Railway CBT Simulator
            </span> & Revision Hub
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real TCS iON exam simulation, negative marking analysis, Neeraj Sir high-yield science notes, and Aditya Ranjan Sir 2-second maths shortcuts — all in one platform.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartMock}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 text-slate-950 font-black text-base shadow-xl shadow-teal-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer glow-teal"
            >
              <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>Start Free All-India Live Mock Test</span>
              <span className="text-[10px] bg-slate-950/20 text-slate-950 font-bold px-2 py-0.5 rounded-full">FREE</span>
            </button>

            <button
              onClick={onExploreNotes}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-teal-500/60 text-slate-200 font-bold text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore SuperCoaching Notes</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

          {/* Micro trust checkmarks */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-400" /> 100% Free Live CBT-1 Test
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-400" /> Authentic Bilingual (Hindi & English)
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-400" /> Instant All-India Rank & Solutions
            </span>
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
