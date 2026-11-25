import React from 'react';
import { Zap, Clock, Users, ArrowRight, Award, Flame } from 'lucide-react';

export default function DailyQuizCard({ onStartMock, studyStreak = null }) {
  const activeStreak = studyStreak?.activeStreak || 0;
  const totalSessions = studyStreak?.totalSessions || 0;
  const weeklyGoalPct = Math.min(100, Math.round(((totalSessions % 3) / 3) * 100) || (activeStreak > 0 ? 33 : 0));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
      <div className="rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/60 border border-teal-500/40 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          
          <div className="max-w-2xl w-full">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase">
                <Zap className="w-3.5 h-3.5 fill-amber-300" />
                <span>Daily Free Practice Streak</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-slate-800 text-xs font-bold text-slate-200">
                <Flame className={`w-3.5 h-3.5 ${activeStreak > 0 ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
                <span>{activeStreak} Day Streak • {totalSessions} Tests Done</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              Today&apos;s RRB ALP CBT-1 Daily Rapid Quiz
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              10 handpicked questions covering Science numericals, Arithmetic shortcuts, and Railway GK. Solve in 10 minutes to maintain your daily study streak and see your All-India percentile rank!
            </p>

            {/* Testbook-style compact streak bar */}
            <div className="mt-4 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 max-w-md">
              <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                <span className="text-amber-300">Toppers Consistency Progress</span>
                <span className="text-slate-400">{totalSessions} / {Math.max(3, totalSessions + 1)} Sessions</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all"
                  style={{ width: `${Math.max(12, weeklyGoalPct)}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-teal-400" /> 10 Mins Duration
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-400" /> 10 Marks (+1, -0.33)
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-emerald-400" /> Bilingual Instant Rank
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={onStartMock}
              className="w-full lg:w-auto px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
