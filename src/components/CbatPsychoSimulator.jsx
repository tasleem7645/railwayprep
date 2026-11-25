import React, { useState, useEffect, useMemo } from 'react';
import {
  Brain, Clock, Eye, CheckCircle2, AlertTriangle, Play,
  RotateCcw, Trophy, ArrowRight, Layers, Sparkles, Check, X
} from 'lucide-react';
import {
  CBAT_BATTERIES,
  CBAT_MIN_TSCORE,
  generateMemoryPuzzle,
  generateBrickPuzzles,
  generateDirectionPuzzles,
  generateConcentrationPairs,
  generateSimilarityPuzzles,
  computeCbatTScore,
  evaluateFullCbatResult,
} from '../utils/cbatEngine';

function IsometricBrickCluster({ blocks, highlightLabel }) {
  // Painter's algorithm sort: lowest z first, then back-to-front along isometric view
  const sorted = useMemo(() => {
    return [...blocks].sort((a, b) => {
      if (a.z !== b.z) return a.z - b.z;
      const depthA = a.x + a.y;
      const depthB = b.x + b.y;
      if (depthA !== depthB) return depthA - depthB;
      return a.x - b.x;
    });
  }, [blocks]);

  const uX = 32;
  const uY = 16;
  const uZ = 28;
  const originX = 140;
  const originY = 128;

  const iso = (x, y, z) => [
    originX + (x - y) * uX,
    originY + (x + y) * uY - z * uZ,
  ];

  const ptsStr = (arr) => arr.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

  return (
    <svg
      viewBox="0 0 280 200"
      className="w-full max-w-[270px] mx-auto bg-slate-950/90 rounded-2xl border border-slate-800 p-2"
    >
      {sorted.map((b) => {
        const w = b.w || 1;
        const d = b.d || 1;
        const h = b.h || 1;
        const isTarget = Boolean(b.label && b.label === highlightLabel);

        const p001 = iso(b.x, b.y, b.z + h);
        const p101 = iso(b.x + w, b.y, b.z + h);
        const p111 = iso(b.x + w, b.y + d, b.z + h);
        const p011 = iso(b.x, b.y + d, b.z + h);
        const p010 = iso(b.x, b.y + d, b.z);
        const p110 = iso(b.x + w, b.y + d, b.z);
        const p100 = iso(b.x + w, b.y, b.z);

        const topFill = isTarget ? '#2dd4bf' : '#64748b';
        const leftFill = isTarget ? '#0d9488' : '#475569';
        const rightFill = isTarget ? '#115e59' : '#334155';
        const stroke = isTarget ? '#f8fafc' : '#0f172a';

        const cx = (p001[0] + p111[0]) / 2;
        const cy = (p001[1] + p111[1]) / 2;

        return (
          <g key={b.id}>
            <polygon points={ptsStr([p011, p111, p110, p010])} fill={leftFill} stroke={stroke} strokeWidth="1.5" />
            <polygon points={ptsStr([p101, p111, p110, p100])} fill={rightFill} stroke={stroke} strokeWidth="1.5" />
            <polygon points={ptsStr([p001, p101, p111, p011])} fill={topFill} stroke={stroke} strokeWidth="1.5" />
            {b.label && (
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                fontSize="13"
                fontWeight="900"
                fill={isTarget ? '#042f2e' : '#f8fafc'}
              >
                {b.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function SimilarityGlyphSvg({ glyph, size = 76 }) {
  const cx = 50;
  const cy = 50;
  const r = 36;
  const hexPts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });

  const dotAngle = (Math.PI / 3) * glyph.dot - Math.PI / 2;
  const dx = cx + 27 * Math.cos(dotAngle);
  const dy = cy + 27 * Math.sin(dotAngle);

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="mx-auto">
      <polygon
        points={hexPts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}
        fill="#0f172a"
        stroke="#38bdf8"
        strokeWidth="2.5"
      />
      {(glyph.spokes || []).map((sIdx) => (
        <line
          key={sIdx}
          x1={cx}
          y1={cy}
          x2={hexPts[sIdx][0]}
          y2={hexPts[sIdx][1]}
          stroke="#e2e8f0"
          strokeWidth="2.5"
        />
      ))}
      <circle cx={dx} cy={dy} r="5" fill="#fbbf24" />
      {glyph.inner === 'circle' && <circle cx={cx} cy={cy} r="9" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2.5" />}
      {glyph.inner === 'square' && <rect x={cx - 8} y={cy - 8} width="16" height="16" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2.5" />}
      {glyph.inner === 'triangle' && (
        <polygon points={`${cx},${cy - 10} ${cx + 9},${cy + 8} ${cx - 9},${cy + 8}`} fill="#0f172a" stroke="#2dd4bf" strokeWidth="2.5" />
      )}
      {glyph.inner === 'diamond' && (
        <polygon points={`${cx},${cy - 10} ${cx + 9},${cy} ${cx},${cy + 10} ${cx - 9},${cy}`} fill="#0f172a" stroke="#2dd4bf" strokeWidth="2.5" />
      )}
    </svg>
  );
}

export default function CbatPsychoSimulator({ onStartMock }) {
  // 'hub' | 'briefing' | 'running' | 'battery_result' | 'final_result'
  const [stage, setStage] = useState('hub');
  const [isFullExam, setIsFullExam] = useState(false);
  const [batteryIdx, setBatteryIdx] = useState(0);
  const [batteryScores, setBatteryScores] = useState({});
  const [timer, setTimer] = useState(0);

  // Per-battery active state
  const [memoryPhase, setMemoryPhase] = useState('memorize'); // 'memorize' | 'recall'
  const [memoryPuzzle, setMemoryPuzzle] = useState(() => generateMemoryPuzzle());
  const [memoryAnswers, setMemoryAnswers] = useState({});

  const [brickPuzzles, setBrickPuzzles] = useState(() => generateBrickPuzzles());
  const [brickAnswers, setBrickAnswers] = useState({});

  const [dirPuzzle, setDirPuzzle] = useState(() => generateDirectionPuzzles());
  const [dirAnswers, setDirAnswers] = useState({});

  const [concPairs, setConcPairs] = useState(() => generateConcentrationPairs(10));
  const [concAnswers, setConcAnswers] = useState({});

  const [simPuzzles, setSimPuzzles] = useState(() => generateSimilarityPuzzles());
  const [simAnswers, setSimAnswers] = useState({});

  const activeBattery = CBAT_BATTERIES[batteryIdx] || CBAT_BATTERIES[0];

  const initBatteryState = (bId) => {
    if (bId === 'memory') {
      setMemoryPuzzle(generateMemoryPuzzle());
      setMemoryAnswers({});
      setMemoryPhase('memorize');
      setTimer(15);
    } else if (bId === 'brick') {
      setBrickPuzzles(generateBrickPuzzles());
      setBrickAnswers({});
      setTimer(45);
    } else if (bId === 'directions') {
      setDirPuzzle(generateDirectionPuzzles());
      setDirAnswers({});
      setTimer(50);
    } else if (bId === 'concentration') {
      setConcPairs(generateConcentrationPairs(10));
      setConcAnswers({});
      setTimer(35);
    } else if (bId === 'similarity') {
      setSimPuzzles(generateSimilarityPuzzles());
      setSimAnswers({});
      setTimer(40);
    }
  };

  const launchSingleBattery = (idx) => {
    setIsFullExam(false);
    setBatteryIdx(idx);
    setBatteryScores({});
    initBatteryState(CBAT_BATTERIES[idx].id);
    setStage('running');
  };

  const launchFullExam = () => {
    setIsFullExam(true);
    setBatteryIdx(0);
    setBatteryScores({});
    setStage('briefing');
  };

  const startBriefedBattery = () => {
    initBatteryState(activeBattery.id);
    setStage('running');
  };

  const gradeCurrentBattery = () => {
    const bId = activeBattery.id;
    let raw = 0;

    if (bId === 'memory') {
      memoryPuzzle.items.forEach((it) => {
        if (Number(memoryAnswers[it.pos]) === it.id) raw += 1;
      });
    } else if (bId === 'brick') {
      brickPuzzles.forEach((p) => {
        if (Number(brickAnswers[p.id]) === p.correctCount) raw += 1;
      });
    } else if (bId === 'directions') {
      dirPuzzle.questions.forEach((q) => {
        if (dirAnswers[q.id] === q.answer) raw += 1;
      });
    } else if (bId === 'concentration') {
      concPairs.forEach((p) => {
        if (concAnswers[p.id] === p.isSame) raw += 1;
      });
    } else if (bId === 'similarity') {
      simPuzzles.forEach((p) => {
        const pickedIdx = simAnswers[p.id];
        if (pickedIdx !== undefined && p.options[pickedIdx]?.isCorrect) raw += 1;
      });
    }

    const updatedScores = { ...batteryScores, [bId]: raw };
    setBatteryScores(updatedScores);

    if (isFullExam) {
      if (batteryIdx < CBAT_BATTERIES.length - 1) {
        setBatteryIdx((prev) => prev + 1);
        setStage('briefing');
      } else {
        setStage('final_result');
      }
    } else {
      setStage('battery_result');
    }
  };

  // Countdown ticker when running
  useEffect(() => {
    if (stage !== 'running') return undefined;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (activeBattery.id === 'memory' && memoryPhase === 'memorize') {
            setMemoryPhase('recall');
            return activeBattery.durationSec;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [stage, activeBattery.id, activeBattery.durationSec, memoryPhase]);

  useEffect(() => {
    if (stage === 'running' && timer === 0) {
      if (!(activeBattery.id === 'memory' && memoryPhase === 'memorize')) {
        gradeCurrentBattery();
      }
    }
  }, [timer, stage]);

  if (stage === 'hub') {
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xl max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/35 text-purple-300 text-xs font-black uppercase mb-2">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span>RDSO ALP Stage-3 CBAT Psychometric Lab • All 5 Batteries</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Full 5-Battery ALP Psycho (CBAT) Simulator
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Har ek battery me kam se kam <b className="text-amber-300">T-Score 42.0</b> laana compulsory hai • Merit me 30% weightage judta hai.
            </p>
          </div>
          <button
            type="button"
            onClick={launchFullExam}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-black text-xs uppercase tracking-wide shadow-lg shadow-purple-950/60 flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Full 5-Battery CBAT</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CBAT_BATTERIES.map((b, idx) => (
            <div key={b.id} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300">
                    Battery {b.order}
                  </span>
                  <span className="text-slate-400 font-mono">{b.durationSec}s • {b.totalItems} Qs</span>
                </div>
                <h4 className="text-sm font-black text-white mt-2">{b.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{b.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => launchSingleBattery(idx)}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700 hover:border-teal-500/40 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Practice {b.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (stage === 'briefing') {
    return (
      <div className="bg-slate-900/70 border border-purple-500/35 rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto text-center space-y-5">
        <div className="inline-flex px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-black">
          Full CBAT Exam • Battery {batteryIdx + 1} of 5
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white">{activeBattery.name}</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
          {activeBattery.desc}
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-mono">
          {activeBattery.memorizeSec && <span>Memorize: {activeBattery.memorizeSec}s</span>}
          <span>Solve Time: {activeBattery.durationSec}s</span>
          <span>Questions: {activeBattery.totalItems}</span>
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setStage('hub')}
            className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
          >
            Exit to Lab
          </button>
          <button
            type="button"
            onClick={startBriefedBattery}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-teal-500 text-slate-950 font-black text-xs cursor-pointer shadow-lg flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Begin Battery {batteryIdx + 1} Now</span>
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'battery_result') {
    const raw = Number(batteryScores[activeBattery.id] ?? 0);
    const tScore = computeCbatTScore(raw, activeBattery.id);
    const qualified = tScore >= CBAT_MIN_TSCORE;
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-xl mx-auto text-center space-y-5">
        <div className="text-xs font-bold text-slate-400 uppercase">{activeBattery.name}</div>
        <div className="text-4xl font-black text-teal-300">
          {raw} / {activeBattery.totalItems} Correct
        </div>
        <div className="text-sm text-slate-300">
          Estimated Battery T-Score:{' '}
          <span className={`font-black font-mono text-lg ${qualified ? 'text-emerald-400' : 'text-rose-400'}`}>
            {tScore.toFixed(1)}
          </span>{' '}
          <span className="text-xs text-slate-400">(Min Required: 42.0)</span>
        </div>
        <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black border ${
          qualified
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
            : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
        }`}>
          {qualified ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
          <span>{qualified ? 'QUALIFIED (T >= 42)' : 'BELOW QUALIFYING MARK (42)'}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => launchSingleBattery(batteryIdx)}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry Battery</span>
          </button>
          <button
            type="button"
            onClick={() => setStage('hub')}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black cursor-pointer"
          >
            All 5 Batteries
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'final_result') {
    const report = evaluateFullCbatResult(batteryScores);
    return (
      <div className="bg-slate-900/70 border border-purple-500/35 rounded-3xl p-5 sm:p-8 shadow-xl max-w-3xl mx-auto space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold text-purple-300 uppercase">Stage-3 ALP CBAT Composite Scorecard</div>
            <h3 className="text-2xl font-black text-white mt-0.5">
              {report.allQualified ? '🎉 ALL 5 BATTERIES QUALIFIED!' : '⚠️ Re-Attempt Needed (1+ Battery < 42)'}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400">Avg T-Score</div>
              <div className="text-xl font-black text-amber-300 font-mono">{report.averageTScore}</div>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400">Merit Weight (30%)</div>
              <div className="text-xl font-black text-teal-300 font-mono">{report.meritContributionOutOf30}/30</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {report.batteryResults.map((b) => {
            const pct = Math.min(100, Math.max(10, (b.tScore / 80) * 100));
            return (
              <div key={b.id} className="p-3.5 rounded-2xl bg-slate-950/75 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-white">{b.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-slate-400 font-mono">{b.rawScore}/{b.totalItems}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                      b.qualified
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/35'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/35'
                    }`}>
                      T: {b.tScore.toFixed(1)} {b.qualified ? '✓' : '< 42'}
                    </span>
                  </div>
                </div>
                <div className="relative h-2.5 rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full ${b.qualified ? 'bg-emerald-500' : 'bg-rose-500'}`}
                    style={{ width: `${pct}%` }}
                  />
                  <div
                    className="absolute -top-1 -bottom-1 w-0.5 bg-amber-300"
                    style={{ left: `${(CBAT_MIN_TSCORE / 80) * 100}%` }}
                    title="Qualifying T-Score: 42"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => setStage('hub')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold cursor-pointer"
          >
            Practice Weak Battery
          </button>
          <button
            type="button"
            onClick={launchFullExam}
            className="px-5 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white text-xs font-black cursor-pointer"
          >
            Retake Full CBAT Exam
          </button>
          {onStartMock && (
            <button
              type="button"
              onClick={() => onStartMock()}
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black cursor-pointer"
            >
              CBT-2 Part A Mock →
            </button>
          )}
        </div>
      </div>
    );
  }

  // RUNNING BATTERY UI
  return (
    <div className="bg-slate-900/75 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-xl max-w-4xl mx-auto space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold text-purple-300 uppercase">
            {isFullExam ? `Full CBAT (${batteryIdx + 1}/5) • ` : ''}
            {activeBattery.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-xl font-mono text-xs font-black border ${
            timer <= 8 ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' : 'bg-slate-950 text-teal-300 border-slate-800'
          }`}>
            <Clock className="w-3.5 h-3.5 inline mr-1" />
            {activeBattery.id === 'memory' && memoryPhase === 'memorize' ? `Memorize: ${timer}s` : `${timer}s`}
          </span>
          <button
            type="button"
            onClick={() => setStage('hub')}
            className="px-3 py-1 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
          >
            Quit
          </button>
        </div>
      </div>

      {/* BATTERY 1: MEMORY */}
      {activeBattery.id === 'memory' && (
        <div className="space-y-5">
          {memoryPhase === 'memorize' ? (
            <>
              <div className="text-center text-xs text-amber-300 font-bold flex items-center justify-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>In 6 Railway Symbols ki position yaad karein — grid thodi der me empty ho jayegi!</span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800 max-w-sm mx-auto">
                {Array.from({ length: 9 }, (_, idx) => {
                  const item = memoryPuzzle.items.find((m) => m.pos === idx);
                  return (
                    <div key={idx} className="h-24 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center justify-center p-2">
                      {item ? (
                        <>
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-[10px] font-bold text-slate-200 mt-1">{item.label}</span>
                        </>
                      ) : (
                        <span className="text-slate-700 text-xs">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setMemoryPhase('recall');
                    setTimer(activeBattery.durationSec);
                  }}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold cursor-pointer"
                >
                  Skip Wait → Start Recall Now
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center text-xs text-teal-300 font-bold">
                Har box par tap karke yaad kiye huye symbols select karein:
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800 max-w-sm mx-auto">
                {Array.from({ length: 9 }, (_, idx) => {
                  const pickedId = Number(memoryAnswers[idx] || 0);
                  const picked = memoryPuzzle.items.find((m) => m.id === pickedId);
                  return (
                    <div key={idx} className="h-24 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center justify-center p-2 relative">
                      {picked ? (
                        <>
                          <span className="text-2xl">{picked.icon}</span>
                          <span className="text-[10px] font-bold text-teal-300 mt-1">{picked.label}</span>
                        </>
                      ) : (
                        <span className="text-xs text-slate-600">Select</span>
                      )}
                      <select
                        value={pickedId || ''}
                        onChange={(e) => setMemoryAnswers((p) => ({ ...p, [idx]: Number(e.target.value) }))}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      >
                        <option value="">Empty</option>
                        {memoryPuzzle.items.map((it) => (
                          <option key={it.id} value={it.id}>
                            {it.icon} {it.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* BATTERY 2: DEPTH PERCEPTION (BRICK TEST) */}
      {activeBattery.id === 'brick' && (
        <div className="space-y-4">
          {brickPuzzles.map((p) => (
            <div key={p.id} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-center gap-5">
              <IsometricBrickCluster blocks={p.blocks} highlightLabel={p.askLabel} />
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div className="text-xs font-black text-white">
                  Q.{p.qNo}: Highlighted Brick <span className="px-2 py-0.5 rounded bg-teal-500 text-slate-950">{p.askLabel}</span> kul kitne dusre bricks ko touch kar rahi hai?
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {p.options.map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setBrickAnswers((prev) => ({ ...prev, [p.id]: cnt }))}
                      className={`w-11 h-11 rounded-xl font-black text-sm border cursor-pointer transition-all ${
                        Number(brickAnswers[p.id]) === cnt
                          ? 'bg-teal-500 text-slate-950 border-teal-400'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-teal-500/40'
                      }`}
                    >
                      {cnt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BATTERY 3: FOLLOWING DIRECTIONS (5x5 MATRIX) */}
      {activeBattery.id === 'directions' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          <div className="md:col-span-5 p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 mb-2 text-center">Row 1–5 × Col 1–5 Reference Matrix</div>
            <div className="grid grid-cols-6 gap-1.5 text-center text-xs font-mono">
              <div />
              {[1, 2, 3, 4, 5].map((c) => (
                <div key={c} className="text-[10px] font-bold text-teal-400">C{c}</div>
              ))}
              {dirPuzzle.grid.map((row, rIdx) => (
                <React.Fragment key={rIdx}>
                  <div className="text-[10px] font-bold text-amber-400 flex items-center justify-center">R{rIdx + 1}</div>
                  {row.map((val, cIdx) => (
                    <div key={cIdx} className="py-2 rounded-lg bg-slate-900 border border-slate-800 font-black text-white">
                      {val}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 space-y-3">
            {dirPuzzle.questions.map((q, idx) => (
              <div key={q.id} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div className="text-xs font-bold text-white">
                  Q.{idx + 1}: {q.prompt}
                </div>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDirAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                      className={`px-4 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                        dirAnswers[q.id] === opt
                          ? 'bg-teal-500 text-slate-950 border-teal-400'
                          : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BATTERY 4: CONCENTRATION TEST (SAME / DIFFERENT DIGITS) */}
      {activeBattery.id === 'concentration' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {concPairs.map((pair, idx) => {
            const ans = concAnswers[pair.id];
            return (
              <div key={pair.id} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black">
                  <span className="text-slate-500 text-[11px]">{idx + 1}.</span>
                  <span className="text-white tracking-wider">{pair.left}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-sky-300 tracking-wider">{pair.right}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setConcAnswers((p) => ({ ...p, [pair.id]: true }))}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-black border cursor-pointer ${
                      ans === true
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-slate-900 text-slate-300 border-slate-700'
                    }`}
                  >
                    Same (Y)
                  </button>
                  <button
                    type="button"
                    onClick={() => setConcAnswers((p) => ({ ...p, [pair.id]: false }))}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-black border cursor-pointer ${
                      ans === false
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-900 text-slate-300 border-slate-700'
                    }`}
                  >
                    Diff (N)
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* BATTERY 5: PERCEPTUAL SPEED / SIMILARITY */}
      {activeBattery.id === 'similarity' && (
        <div className="space-y-4">
          {simPuzzles.map((p, idx) => (
            <div key={p.id} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row items-center gap-4">
              <div className="p-2.5 rounded-2xl bg-slate-900 border border-teal-500/40 text-center shrink-0">
                <div className="text-[10px] font-black text-teal-300 uppercase mb-1">Q.{idx + 1} Target</div>
                <SimilarityGlyphSvg glyph={p.target} size={74} />
              </div>
              <div className="grid grid-cols-5 gap-2 flex-1 w-full">
                {p.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => setSimAnswers((prev) => ({ ...prev, [p.id]: optIdx }))}
                    className={`p-2 rounded-xl border text-center cursor-pointer transition-all ${
                      simAnswers[p.id] === optIdx
                        ? 'border-teal-400 bg-teal-500/15 ring-2 ring-teal-400/50'
                        : 'border-slate-800 bg-slate-900 hover:border-slate-600'
                    }`}
                  >
                    <SimilarityGlyphSvg glyph={opt} size={58} />
                    <div className="text-[10px] font-black text-slate-300 mt-1">{String.fromCharCode(65 + optIdx)}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!(activeBattery.id === 'memory' && memoryPhase === 'memorize') && (
        <div className="flex justify-end pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={gradeCurrentBattery}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg"
          >
            {isFullExam && batteryIdx < CBAT_BATTERIES.length - 1
              ? `Submit Battery ${batteryIdx + 1} & Next →`
              : 'Submit & View CBAT T-Score'}
          </button>
        </div>
      )}
    </div>
  );
}
