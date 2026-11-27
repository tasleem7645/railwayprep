import React, { useState } from 'react';
import {
  Zap, Layers, Sparkles, AlertTriangle, CheckCircle2, Eye, Clock, BookOpen, Calculator
} from 'lucide-react';
import { MathText, RichFormatText } from './QuestionContentRenderer';

const TONE_CLASSES = {
  teal: {
    tabActive: 'bg-teal-500 text-slate-950 border-teal-300 shadow-sm shadow-teal-950/60',
    box: 'bg-teal-950/25 border-teal-500/35',
    badge: 'bg-teal-500/20 text-teal-300 border-teal-500/35',
    heading: 'text-teal-300',
  },
  amber: {
    tabActive: 'bg-amber-400 text-slate-950 border-amber-200 shadow-sm shadow-amber-950/60',
    box: 'bg-amber-950/20 border-amber-500/35',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/35',
    heading: 'text-amber-300',
  },
  emerald: {
    tabActive: 'bg-emerald-400 text-slate-950 border-emerald-200 shadow-sm shadow-emerald-950/60',
    box: 'bg-emerald-950/25 border-emerald-500/35',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/35',
    heading: 'text-emerald-300',
  },
  violet: {
    tabActive: 'bg-violet-400 text-slate-950 border-violet-200 shadow-sm shadow-violet-950/60',
    box: 'bg-violet-950/25 border-violet-500/35',
    badge: 'bg-violet-500/20 text-violet-300 border-violet-500/35',
    heading: 'text-violet-300',
  },
};

function getMethodIcon(id, idx) {
  if (id === 'basic' || idx === 0) return BookOpen;
  if (id === 'smart' || idx === 1) return Zap;
  return Calculator;
}

/**
 * Unified Multi-Method Solution Renderer for CBSE/RRB Maths & All Subjects.
 * Supports rich `methods[]` (Basic Step-by-Step, Smart Exam-Hall, Option Elimination / C9 / Unit Digit),
 * 5-Sec Elimination Hints, RRB Trap Alerts, AND falls back cleanly to legacy `{ approach, keyConcept, en, hi }`.
 */
export default function MultiMethodSolutionBox({
  solution,
  lang = 'hi',
  compact = false,
  defaultShowAll = false,
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showAllMethods, setShowAllMethods] = useState(defaultShowAll);
  const [showHintOnly, setShowHintOnly] = useState(false);

  if (!solution) return null;

  const isHi = lang === 'hi';
  const hasMethods = Array.isArray(solution.methods) && solution.methods.length > 0;
  const pickLang = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return isHi ? obj.hi || obj.en || '' : obj.en || obj.hi || '';
  };

  if (!hasMethods) {
    return (
      <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
        {solution.approach && (
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
            <strong className="text-teal-300">
              {isHi ? 'उत्तर सारांश: ' : 'Answer Key Verdict: '}
            </strong>
            <MathText text={solution.approach} />
          </div>
        )}
        {solution.keyConcept && (
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-amber-400 font-bold">
            <MathText text={solution.keyConcept} />
          </div>
        )}
        {(solution.hi || solution.en) && (
          <div className="pt-0.5 text-slate-300">
            {!compact && (
              <p className="font-semibold text-slate-200 mb-1">
                {isHi ? 'विस्तृत व्याख्या:' : 'Step-by-Step Explanation:'}
              </p>
            )}
            <div className="text-slate-300 whitespace-pre-line">
              <MathText text={isHi ? solution.hi || solution.en : solution.en || solution.hi} />
            </div>
          </div>
        )}
      </div>
    );
  }

  const methods = solution.methods;
  const safeIdx = Math.min(activeIdx, methods.length - 1);

  return (
    <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
      {/* Top Meta Row: PYQ Type Badge + Key Concept + Multi-Method Count */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {solution.pyqType && (
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 text-[10px] font-black uppercase tracking-wide">
              <MathText text={pickLang(solution.pyqType)} />
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[10px] font-black inline-flex items-center gap-1">
            <Layers className="w-3 h-3" />
            <span>
              {methods.length} {isHi ? 'विधियाँ (Basic + Smart)' : 'Solving Methods'}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {solution.optionTrick && (
            <button
              type="button"
              onClick={() => setShowHintOnly((v) => !v)}
              className={`px-2.5 py-1 rounded-lg border text-[10px] font-black cursor-pointer transition-all inline-flex items-center gap-1 ${
                showHintOnly
                  ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                  : 'bg-slate-900 border-emerald-500/35 text-emerald-300 hover:bg-emerald-500/10'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{isHi ? '5-Sec ट्रिक हिंट' : '5-Sec Trick Hint'}</span>
            </button>
          )}
          {methods.length > 1 && (
            <button
              type="button"
              onClick={() => setShowAllMethods((v) => !v)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 hover:border-teal-500/50 text-slate-200 text-[10px] font-bold cursor-pointer inline-flex items-center gap-1"
            >
              <Eye className="w-3 h-3 text-teal-400" />
              <span>
                {showAllMethods
                  ? isHi
                    ? 'टैब मोड'
                    : 'Tab View'
                  : isHi
                  ? 'सभी विधियाँ साथ देखें'
                  : 'Compare All Methods'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Verdict & Key Formula */}
      {solution.approach && (
        <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs flex flex-wrap items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <RichFormatText text={solution.approach} />
        </div>
      )}

      {solution.keyConcept && (
        <div className="px-3 py-2 rounded-xl bg-slate-900/70 border border-amber-500/30 text-amber-300 font-semibold text-xs">
          <strong className="text-amber-200 mr-1.5">{isHi ? 'Key Rule:' : 'Core Rule:'}</strong>
          <RichFormatText text={solution.keyConcept} />
        </div>
      )}

      {/* Optional 5-Sec Elimination Quick Hint */}
      {showHintOnly && solution.optionTrick && (
        <div className="p-3 rounded-xl bg-emerald-950/35 border border-emerald-400/45 text-emerald-100 text-xs space-y-1">
          <div className="font-black text-emerald-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isHi ? 'Exam-Hall 3–5 Sec Elimination Trick:' : 'Exam-Hall 3–5 Sec Option Elimination:'}</span>
          </div>
          <div className="whitespace-pre-line leading-relaxed">
            <RichFormatText text={pickLang(solution.optionTrick)} />
          </div>
        </div>
      )}

      {/* Method Selector Tabs (when not in Compare-All mode) */}
      {!showAllMethods && (
        <div className="flex flex-wrap gap-1.5">
          {methods.map((m, idx) => {
            const tone = TONE_CLASSES[m.tone] || TONE_CLASSES.teal;
            const active = idx === safeIdx;
            const Icon = getMethodIcon(m.id, idx);
            return (
              <button
                key={m.id || idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3 py-1.5 rounded-xl border text-[11px] font-black cursor-pointer transition-all inline-flex items-center gap-1.5 ${
                  active
                    ? tone.tabActive
                    : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span><MathText text={pickLang(m.title).replace(/`([^`]+)`/g, '$1')} /></span>
                {m.timeTag && !pickLang(m.title).includes(m.timeTag) && (
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${active ? 'bg-black/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    {m.timeTag}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Method Card(s) */}
      <div className="space-y-2.5">
        {(showAllMethods ? methods : [methods[safeIdx]]).map((m, idx) => {
          const tone = TONE_CLASSES[m.tone] || TONE_CLASSES.teal;
          const Icon = getMethodIcon(m.id, idx);
          return (
            <div key={m.id || idx} className={`p-3.5 sm:p-4 rounded-2xl border space-y-2 ${tone.box}`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className={`text-xs sm:text-[13px] font-black flex items-center gap-1.5 ${tone.heading}`}>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span><RichFormatText text={pickLang(m.title)} /></span>
                </div>
                <div className="flex items-center gap-1.5">
                  {m.audience && (
                    <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${tone.badge}`}>
                      {pickLang(m.audience)}
                    </span>
                  )}
                  {m.timeTag && !pickLang(m.title).includes(m.timeTag) && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/70 border border-slate-700 text-[10px] font-bold text-slate-300">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{m.timeTag}</span>
                    </span>
                  )}
                </div>
              </div>

              {m.formula && (
                <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-cyan-200 overflow-x-auto">
                  <MathText text={m.formula} />
                </div>
              )}

              <div className="text-[13px] sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                <RichFormatText text={pickLang(m.steps)} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Common Silly Mistake / RRB Trap Warning */}
      {solution.trapAlert && (
        <div className="p-3 rounded-xl bg-rose-950/25 border border-rose-500/35 text-xs text-rose-100 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-black text-rose-300 block text-[11px] uppercase">
              {isHi ? '⚠️ RRB Common Trap Alert' : '⚠️ RRB Common Trap Alert'}
            </span>
            <span className="leading-relaxed">
              <RichFormatText text={pickLang(solution.trapAlert)} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
