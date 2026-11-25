import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, AlertTriangle, TrendingUp, ShieldCheck } from 'lucide-react';
import { CUTOFF_CATEGORIES, getCutoffBenchmark, evaluateCutoffStatus } from '../utils/cutoffCalculator';

export default function ExpectedCutoffCard({ test, finalScore }) {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    try {
      const saved = localStorage.getItem('railwayprep_user_category');
      return CUTOFF_CATEGORIES.includes(saved) ? saved : 'UR';
    } catch {
      return 'UR';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('railwayprep_user_category', selectedCategory);
    } catch {}
  }, [selectedCategory]);

  const benchmark = getCutoffBenchmark(test);
  const threshold = benchmark.cutoffs[selectedCategory];
  const { status, delta, scorePct, cutoffPct } = evaluateCutoffStatus(
    finalScore,
    threshold,
    benchmark.maxMarks
  );

  const statusConfig = {
    safe: {
      badge: benchmark.mode === 'qualifying' ? 'QUALIFIED (35%+) ✓' : 'SAFE ZONE ✓',
      text: `+${delta} marks above ${selectedCategory} cutoff`,
      boxClass: 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/35 via-slate-900/90 to-slate-900',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      barClass: 'bg-gradient-to-r from-teal-500 to-emerald-400',
      deltaClass: 'text-emerald-400',
    },
    borderline: {
      badge: 'BORDERLINE',
      text: `${delta} marks short of ${selectedCategory} cutoff — almost there!`,
      boxClass: 'border-amber-500/40 bg-gradient-to-br from-amber-950/30 via-slate-900/90 to-slate-900',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      barClass: 'bg-gradient-to-r from-amber-500 to-yellow-400',
      deltaClass: 'text-amber-400',
    },
    below: {
      badge: 'NEEDS BOOST',
      text: `${delta} marks below ${selectedCategory} cutoff — practice weak topics!`,
      boxClass: 'border-rose-500/35 bg-gradient-to-br from-rose-950/25 via-slate-900/90 to-slate-900',
      badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      barClass: 'bg-gradient-to-r from-rose-500 to-amber-500',
      deltaClass: 'text-rose-400',
    },
  }[status];

  return (
    <div className={`p-5 rounded-2xl border ${statusConfig.boxClass} space-y-4`}>
      {/* Header + Category Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <Target className="w-4 h-4 text-teal-400" />
            <h3 className="text-sm font-black text-white">Expected Cutoff Meter</h3>
            <span className={`px-2 py-0.5 rounded-full border text-[10px] font-black uppercase ${statusConfig.badgeClass}`}>
              {statusConfig.badge}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">{benchmark.label}</p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 w-fit">
          {CUTOFF_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Meter Gauge */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-300">
            Your Score: <span className="text-white font-black">{finalScore}</span> / {benchmark.maxMarks}
          </span>
          <span className="text-slate-300">
            {selectedCategory} Cutoff Target: <span className="text-amber-300 font-black">{threshold}</span>
          </span>
        </div>

        <div className="relative h-4 rounded-full bg-slate-950 border border-slate-800 overflow-visible">
          <div
            className={`h-full rounded-full transition-all duration-500 ${statusConfig.barClass}`}
            style={{ width: `${scorePct}%` }}
          />
          {/* Target Cutoff Vertical Marker */}
          <div
            className="absolute -top-1.5 -bottom-1.5 w-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]"
            style={{ left: `calc(${cutoffPct}% - 2px)` }}
            title={`${selectedCategory} Cutoff: ${threshold}`}
          />
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className={`font-bold flex items-center gap-1 ${statusConfig.deltaClass}`}>
            {status === 'safe' ? (
              <CheckCircle2 className="w-3.5 h-3.5" />
            ) : status === 'borderline' ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <AlertTriangle className="w-3.5 h-3.5" />
            )}
            <span>{statusConfig.text}</span>
          </span>
          <span className="text-slate-500 hidden sm:inline">White bar = Target Cutoff</span>
        </div>
      </div>

      {/* Compact All-Category Snapshot */}
      <div className="grid grid-cols-5 gap-2 pt-2 border-t border-slate-800/70">
        {CUTOFF_CATEGORIES.map((cat) => {
          const catTarget = benchmark.cutoffs[cat];
          const passed = finalScore >= catTarget;
          const isSelected = cat === selectedCategory;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                isSelected
                  ? 'border-teal-500/60 bg-slate-900'
                  : 'border-slate-800/80 bg-slate-950/50 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] font-bold text-slate-400">{cat}</div>
              <div className="text-xs font-black text-white mt-0.5">{catTarget}</div>
              <div className={`text-[10px] font-bold mt-0.5 ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passed ? 'Pass ✓' : 'Low'}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
        <ShieldCheck className="w-3.5 h-3.5 text-teal-500/70 shrink-0" />
        <span>{benchmark.note}</span>
      </div>
    </div>
  );
}
