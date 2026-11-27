import React from 'react';
import { Play, Lock, CheckCircle2, Globe, BarChart3, RotateCcw } from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function TestCard({
  test,
  accessStatus,
  isGuestDemo,
  savedSession,
  attemptSummary = null,
  loadingTestId,
  onStartMock,
  onResumeTest,
  onDiscardSavedSession,
  onViewAttemptResult,
  onOpenPassPro,
  compact = false,
}) {
  const isResumable = savedSession?.testId === test.id;
  const hasAttempt = Boolean(attemptSummary && !isResumable);
  const accuracyPct = hasAttempt
    ? Math.max(0, Math.min(100, Number(attemptSummary.accuracy || 0)))
    : 0;

  return (
    <div
      className={`p-5 sm:p-6 rounded-3xl bg-slate-900/80 border transition-all shadow-xl flex flex-col justify-between group ${
        accessStatus === 'pass_pro_required'
          ? 'border-amber-500/20 hover:border-amber-500/50'
          : hasAttempt
          ? 'border-emerald-500/35 hover:border-teal-400/60 hover:bg-slate-900'
          : 'border-slate-800 hover:border-teal-500/50 hover:bg-slate-900'
      }`}
    >
      <div>
        <div className="flex justify-between items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                test.badgeColor === 'teal'
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                  : test.badgeColor === 'indigo'
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                  : test.badgeColor === 'purple'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              }`}
            >
              {test.badge}
            </span>
            {accessStatus === 'open' ? (
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                {isGuestDemo ? 'FREE' : 'UNLOCKED'}
              </span>
            ) : accessStatus === 'login_required' ? (
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/40 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>FREE W/ LOGIN</span>
              </span>
            ) : (
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>PASS PRO</span>
              </span>
            )}
          </div>
          <span className="text-[11px] font-semibold text-slate-400 shrink-0">
            {test.shiftTime || 'CBT Pattern'}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-2 mb-1.5">
          {test.title}
        </h3>
        {!compact && test.subTitle && (
          <p className="text-xs text-slate-400 mb-3 line-clamp-2">{test.subTitle}</p>
        )}

        {/* Stats Grid or Attempted Score Strip (Testbook Card Style) */}
        {hasAttempt ? (
          <div className="p-3 rounded-2xl bg-slate-950/75 border border-emerald-500/30 my-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-emerald-300">
                Score: {attemptSummary.score} / {attemptSummary.totalMarks || test.maxMarks}
              </span>
              <span className="text-[11px] font-bold text-teal-300">
                {accuracyPct.toFixed(0)}% Accuracy
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all"
                style={{ width: `${Math.max(4, accuracyPct)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>
                ✓ {attemptSummary.correctCount} • ✕ {attemptSummary.wrongCount}
              </span>
              {attemptSummary.timestamp && (
                <span>
                  Attempted {new Date(attemptSummary.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center text-xs my-3">
            <div>
              <div className="text-slate-400 text-[10px]">Questions</div>
              <div className="font-extrabold text-white mt-0.5">{test.totalQuestions} Qs</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">Max Marks</div>
              <div className="font-extrabold text-teal-400 mt-0.5">{test.maxMarks} Marks</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">Duration</div>
              <div className="font-extrabold text-amber-400 mt-0.5">{test.durationMinutes} Mins</div>
            </div>
          </div>
        )}

        {/* Features list */}
        <div className="text-[11px] text-slate-400 space-y-1.5 mb-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="text-teal-300 font-semibold line-clamp-1">
              {test.sectionSummary || 'Real-Exam Railway CBT Pattern'}
            </span>
          </div>
          {!compact && (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>English &amp; हिंदी Toggle • Negative -{test.negativeMarks}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {accessStatus === 'login_required' ? (
        <div className="pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => onStartMock(test)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 hover:from-teal-500 hover:to-emerald-500 text-teal-300 hover:text-slate-950 font-black text-xs border border-teal-500/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Free Unlock with Login (Launch Offer)</span>
          </button>
        </div>
      ) : accessStatus === 'pass_pro_required' ? (
        <div className="pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={onOpenPassPro}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Unlock with Pass Pro (₹{MONETIZATION_CONFIG.payments.passProPrice})</span>
          </button>
        </div>
      ) : isResumable ? (
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <button
            type="button"
            disabled={Boolean(loadingTestId)}
            onClick={() => onResumeTest(test.id)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-950/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer animate-pulse disabled:opacity-60"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>
              {loadingTestId === test.id
                ? 'Loading Questions...'
                : `Resume Test (Q.${(savedSession.currentIndex || 0) + 1} से जारी रखें)`}
            </span>
          </button>
          {onDiscardSavedSession && (
            <div className="flex items-center justify-between text-[10px] px-1 text-slate-400">
              <span>प्रगति सुरक्षित • {Object.keys(savedSession.answers || {}).length} हल</span>
              <button type="button" onClick={onDiscardSavedSession} className="text-rose-400 hover:underline cursor-pointer">
                Restart (शुरू से)
              </button>
            </div>
          )}
        </div>
      ) : hasAttempt ? (
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
          <button
            type="button"
            disabled={Boolean(loadingTestId)}
            onClick={() =>
              onViewAttemptResult
                ? onViewAttemptResult(test, attemptSummary)
                : onStartMock(test)
            }
            className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 hover:text-white font-bold text-xs border border-emerald-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{loadingTestId === test.id ? 'Loading...' : 'View Results'}</span>
          </button>
          <button
            type="button"
            disabled={Boolean(loadingTestId)}
            onClick={() => onStartMock(test)}
            className="py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-md shadow-teal-950/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reattempt →</span>
          </button>
        </div>
      ) : compact ? (
        <div className="pt-2 border-t border-slate-800">
          <button
            type="button"
            disabled={Boolean(loadingTestId)}
            onClick={() => onStartMock(test)}
            className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-md shadow-teal-950/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>{loadingTestId === test.id ? 'Loading Shift...' : 'Attempt Free Shift-1 Mock'}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
          <button
            type="button"
            disabled={Boolean(loadingTestId)}
            onClick={() => onStartMock(test, 'hi')}
            className="py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>{loadingTestId === test.id ? 'Loading...' : 'हिंदी में दें'}</span>
          </button>
          <button
            type="button"
            disabled={Boolean(loadingTestId)}
            onClick={() => onStartMock(test, 'en')}
            className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{loadingTestId === test.id ? 'Loading...' : 'In English'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
