import React from 'react';
import { Zap, Clock, Users, ArrowRight, Award, Trophy, Sparkles } from 'lucide-react';

export default function DailyQuizCard({ onStartMock }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/60 border border-teal-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase mb-3">
              <Zap className="w-3.5 h-3.5 fill-amber-300" />
              <span>Daily Free Practice Streak</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Today's RRB NTPC Daily Rapid Quiz
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              10 handpicked questions covering Science numericals, Arithmetic shortcuts, and Railway GK. Solve in 10 minutes to maintain your daily study streak and see your All-India percentile rank!
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-teal-400" /> 10 Mins Duration
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-400" /> 10 Marks (+1, -0.33)
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-emerald-400" /> 12,450+ Aspirants Attempted
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={onStartMock}
              className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Attempt Daily Quiz Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
