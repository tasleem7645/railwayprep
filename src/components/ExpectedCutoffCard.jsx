import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, AlertTriangle, TrendingUp, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import {
  CUTOFF_CATEGORIES,
  RRB_ZONES,
  SHIFT_DIFFICULTY_LEVELS,
  getCutoffBenchmark,
  estimateNormalizedScore,
  evaluateCutoffStatus,
} from '../utils/cutoffCalculator';

export default function ExpectedCutoffCard({ test, finalScore }) {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    try {
      const saved = localStorage.getItem('railwayprep_user_category');
      return CUTOFF_CATEGORIES.includes(saved) ? saved : 'UR';
    } catch {
      return 'UR';
    }
  });

  const [selectedZoneCode, setSelectedZoneCode] = useState(() => {
    try {
      const saved = localStorage.getItem('railwayprep_user_rrb_zone');
      return RRB_ZONES.some((z) => z.code === saved) ? saved : 'ALL';
    } catch {
      return 'ALL';
    }
  });

  const [useNormalized, setUseNormalized] = useState(false);
  const [difficultyId, setDifficultyId] = useState('moderate');

  useEffect(() => {
    try {
      localStorage.setItem('railwayprep_user_category', selectedCategory);
    } catch {}
  }, [selectedCategory]);

  useEffect(() => {
    try {
      localStorage.setItem('railwayprep_user_rrb_zone', selectedZoneCode);
    } catch {}
  }, [selectedZoneCode]);

  const benchmark = getCutoffBenchmark(test, selectedZoneCode);
  const normEst = estimateNormalizedScore(finalScore, benchmark.maxMarks, difficultyId);
  const evaluatedScore = useNormalized && benchmark.mode !== 'qualifying'
    ? normEst.normalizedScore
    : finalScore;

  const threshold = benchmark.cutoffs[selectedCategory];
  const { status, delta, scorePct, cutoffPct } = evaluateCutoffStatus(
    evaluatedScore,
    threshold,
    benchmark.maxMarks
  );

  const statusConfig = {
    safe: {
      badge: benchmark.mode === 'qualifying' ? 'QUALIFIED (35%+) ✓' : 'SAFE ZONE ✓',
      text: `+${delta} marks above RRB ${benchmark.zone.name} (${selectedCategory}) cutoff`,
      boxClass: 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/35 via-slate-900/90 to-slate-900',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      barClass: 'bg-gradient-to-r from-teal-500 to-emerald-400',
      deltaClass: 'text-emerald-400',
    },
    borderline: {
      badge: 'BORDERLINE',
      text: `${delta} marks short of RRB ${benchmark.zone.name} (${selectedCategory}) cutoff`,
      boxClass: 'border-amber-500/40 bg-gradient-to-br from-amber-950/30 via-slate-900/90 to-slate-900',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      barClass: 'bg-gradient-to-r from-amber-500 to-yellow-400',
      deltaClass: 'text-amber-400',
    },
    below: {
      badge: 'NEEDS BOOST',
      text: `${delta} marks below RRB ${benchmark.zone.name} (${selectedCategory}) cutoff`,
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
            <h3 className="text-sm font-black text-white">RRB Zone Selection & Cutoff Predictor</h3>
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

      {/* Zone Dropdown & Normalization Toggle */}
      {benchmark.mode !== 'qualifying' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="text-slate-400 text-[11px] shrink-0">Target Zone:</span>
            <select
              value={selectedZoneCode}
              onChange={(e) => setSelectedZoneCode(e.target.value)}
              className="bg-transparent text-white font-bold text-xs flex-1 outline-none cursor-pointer"
            >
              {RRB_ZONES.map((z) => (
                <option key={z.code} value={z.code} className="bg-slate-900">
                  {z.code === 'ALL' ? z.name : `RRB ${z.name} (${z.competition})`}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800">
            <label className="flex items-center gap-2 cursor-pointer text-[11px] font-bold text-slate-200">
              <input
                type="checkbox"
                checked={useNormalized}
                onChange={(e) => setUseNormalized(e.target.checked)}
                className="accent-teal-400 cursor-pointer"
              />
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Normalized Est. (+{normEst.boost})
              </span>
            </label>
            {useNormalized && (
              <div className="flex items-center gap-1">
                {SHIFT_DIFFICULTY_LEVELS.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setDifficultyId(lvl.id)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                      difficultyId === lvl.id
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lvl.id.charAt(0).toUpperCase() + lvl.id.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Progress Meter Gauge */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-300">
            {useNormalized && benchmark.mode !== 'qualifying' ? 'Normalized Score' : 'Your Score'}:{' '}
            <span className="text-white font-black">{evaluatedScore}</span> / {benchmark.maxMarks}
            {useNormalized && benchmark.mode !== 'qualifying' && (
              <span className="text-[10px] text-slate-400 ml-1.5">(Raw {finalScore})</span>
            )}
          </span>
          <span className="text-slate-300">
            {benchmark.zone.code === 'ALL' ? selectedCategory : `${benchmark.zone.code} • ${selectedCategory}`} Target:{' '}
            <span className="text-amber-300 font-black">{threshold}</span>
          </span>
        </div>

        <div className="relative h-4 rounded-full bg-slate-950 border border-slate-800 overflow-visible">
          <div
            className={`h-full rounded-full transition-all duration-500 ${statusConfig.barClass}`}
            style={{ width: `${scorePct}%` }}
          />
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
          const passed = evaluatedScore >= catTarget;
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
