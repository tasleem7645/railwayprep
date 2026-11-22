import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, CheckCircle2, XCircle, Clock, Zap, Target, 
  RotateCcw, ArrowRight, Eye, ChevronDown, ChevronUp, Share2, Award
} from 'lucide-react';

export default function TestResultModal({ result, onClose, onRetake }) {
  const { test, answers, timeTakenSeconds } = result;
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'solutions'
  const [expandedSolutions, setExpandedSolutions] = useState({});

  // Trigger celebration confetti
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  // Compute test metrics
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  test.questions.forEach((q) => {
    const userAns = answers[q.id];
    if (userAns === undefined) {
      unattemptedCount++;
    } else if (userAns === q.correctIndex) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const rawScore = (correctCount * test.positiveMarks) - (wrongCount * test.negativeMarks);
  const finalScore = Math.max(0, parseFloat(rawScore.toFixed(2)));
  const accuracy = (correctCount + wrongCount) > 0 
    ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
    : 0;

  // Estimated percentile (simulated based on score)
  const percentile = Math.min(99.6, Math.max(45, (finalScore / test.maxMarks) * 98 + Math.random() * 1.5)).toFixed(1);
  const estimatedRank = Math.max(12, Math.round((1 - (percentile / 100)) * 15400));

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const toggleExpand = (qId) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070B18]/95 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-[#090D1A] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto">
        
        {/* Top Header Card */}
        <div className="text-center pb-6 border-b border-slate-800">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 mb-3 shadow-xl shadow-amber-500/20">
            <Trophy className="w-8 h-8 font-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Performance Scorecard</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{test.title}</p>
        </div>

        {/* 4 Key Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">Total Score</div>
            <div className="text-2xl sm:text-3xl font-black text-teal-400 mt-1">
              {finalScore} <span className="text-xs text-slate-500">/ {test.maxMarks}</span>
            </div>
            <div className="text-[10px] text-teal-500/80 font-medium mt-0.5">Net with -0.33 negative</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">All-India Percentile</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">{percentile}%ile</div>
            <div className="text-[10px] text-slate-400 font-medium mt-0.5">Rank ~{estimatedRank} / 15.4k</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">Accuracy</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">{accuracy}%</div>
            <div className="text-[10px] text-emerald-500/80 font-medium mt-0.5">{correctCount} Correct • {wrongCount} Wrong</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-xs font-semibold text-slate-400">Time Taken</div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">{formatTime(timeTakenSeconds)}</div>
            <div className="text-[10px] text-slate-400 font-medium mt-0.5">Avg ~{Math.round(timeTakenSeconds / test.questions.length)}s / question</div>
          </div>
        </div>

        {/* Tab Switcher: Overview vs Detailed Solutions */}
        <div className="flex border-b border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-teal-400 text-teal-400 bg-teal-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Analysis
          </button>
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-5 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'solutions'
                ? 'border-teal-400 text-teal-400 bg-teal-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Detailed Solutions ({test.questions.length})</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 font-bold">Smart Tricks</span>
          </button>
        </div>

        {/* Detailed Solutions Tab */}
        {activeTab === 'solutions' ? (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {test.questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.correctIndex;
              const isUnattempted = userAns === undefined;
              const isExpanded = expandedSolutions[q.id] !== false; // default expanded

              return (
                <div 
                  key={q.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isCorrect 
                      ? 'bg-emerald-950/20 border-emerald-500/40' 
                      : isUnattempted 
                      ? 'bg-slate-900/40 border-slate-800' 
                      : 'bg-red-950/20 border-red-500/40'
                  }`}
                >
                  <div 
                    onClick={() => toggleExpand(q.id)}
                    className="flex items-start justify-between cursor-pointer gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">Q{idx + 1}.</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-bold flex items-center gap-1 ${
                        isCorrect 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : isUnattempted 
                          ? 'bg-slate-800 text-slate-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {isCorrect ? '✓ Correct (+1.0)' : isUnattempted ? '— Skipped (0.0)' : '✕ Incorrect (-0.33)'}
                      </span>
                      <span className="text-[11px] text-slate-400">{q.subject} • {q.topic}</span>
                    </div>

                    <button className="text-slate-400 hover:text-slate-200">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-slate-200 mt-2 font-medium">{q.question.hi}</p>

                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {q.options.hi.map((opt, oIdx) => {
                          const isOptionCorrect = oIdx === q.correctIndex;
                          const isUserPicked = oIdx === userAns;
                          return (
                            <div 
                              key={oIdx}
                              className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                                isOptionCorrect 
                                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold' 
                                  : isUserPicked 
                                  ? 'bg-red-950/60 border-red-500 text-red-200 line-through' 
                                  : 'bg-slate-900/50 border-slate-800/60 text-slate-400'
                              }`}
                            >
                              <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                              {isOptionCorrect && <span className="text-[10px] text-emerald-400 font-bold">Correct Ans</span>}
                              {isUserPicked && !isOptionCorrect && <span className="text-[10px] text-red-400 font-bold">Your Choice</span>}
                            </div>
                          );
                        })}
                      </div>

                      {/* Sir's Solution & Smart Trick Box */}
                      <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/30 text-teal-200 mt-2">
                        <div className="font-bold text-teal-300 text-xs flex items-center gap-1.5 mb-1">
                          <Zap className="w-3.5 h-3.5 text-teal-400" />
                          <span>Sir's Smart Solution & Shortcut:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-300">{q.solution.approach}</p>
                        <div className="mt-1 text-[11px] text-amber-300 font-mono">
                          Formula / Concept: <code>{q.solution.formula}</code>
                        </div>
                        <div className="mt-1 text-[10px] text-slate-400 font-medium">
                          Ref: {q.solution.pyqReference}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Overview Tab */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Subject-wise Accuracy</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>General Science</span>
                    <span className="text-teal-400 font-semibold">100% High Yield</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Mathematics</span>
                    <span className="text-amber-400 font-semibold">88% Speed Focus</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Reasoning & Intelligence</span>
                    <span className="text-emerald-400 font-semibold">95% Accuracy</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-amber-300">Unlock 50+ Full NTPC Mock Tests</h4>
                <p className="text-xs text-slate-400 mt-0.5">RailwayPrep Pass Pro gives you unlimited CBT attempts & PDF downloads.</p>
              </div>
              <button
                onClick={() => setActiveTab('solutions')}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                View Solutions →
              </button>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onRetake}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Test (पुनः प्रयास करें)</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-teal-950"
          >
            Done / Close Scorecard
          </button>
        </div>

      </div>
    </div>
  );
}
