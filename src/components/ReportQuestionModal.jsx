import React, { useState } from 'react';
import { X, Flag, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ISSUE_TYPES = [
  { id: 'Wrong Official Answer Key', labelHi: 'गलत उत्तर कुंजी / Option' },
  { id: 'Hindi Translation Error', labelHi: 'हिंदी अनुवाद में त्रुटि' },
  { id: 'Missing Diagram / Table', labelHi: 'चित्र / टेबल गायब है' },
  { id: 'Typo / Formatting Issue', labelHi: 'प्रश्न / विकल्प में टाइपिंग गलती' },
];

export default function ReportQuestionModal({ targetQuestion, onClose }) {
  const [issueType, setIssueType] = useState(ISSUE_TYPES[0].id);
  const [issueNote, setIssueNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!targetQuestion) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      let currentUser = null;
      try {
        const { data } = await supabase.auth.getUser();
        currentUser = data?.user || null;
      } catch (err) {}

      const cleanPreview = String(targetQuestion.previewText || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 220);

      const { error } = await supabase.from('question_reports').insert({
        reporter_id: currentUser?.id || null,
        reporter_email: currentUser?.email || 'Guest Student',
        question_uid: String(targetQuestion.uid || `q_${Date.now()}`),
        test_id: targetQuestion.testId ? String(targetQuestion.testId) : null,
        shift_title: targetQuestion.shiftTitle ? String(targetQuestion.shiftTitle).slice(0, 140) : null,
        question_no: Number.isFinite(Number(targetQuestion.questionNo))
          ? Number(targetQuestion.questionNo)
          : null,
        issue_type: issueType,
        issue_note: issueNote.trim() || null,
        question_preview: cleanPreview || null,
        status: 'open',
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err?.message ||
          'Report submit nahi ho payi. Kripya internet check karein ya thodi der baad try karein.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[130] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg glass-card rounded-3xl border border-amber-500/30 bg-slate-950 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-950/35 to-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Flag className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">Report Question Error</h3>
              <p className="text-[11px] text-amber-300/90">Admin Error Queue me seedha bhejein</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Question Context Box */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-teal-300 truncate max-w-[75%]">
                {targetQuestion.shiftTitle || 'Railway Official PYQ'}
              </span>
              {targetQuestion.questionNo != null && (
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                  Q.{targetQuestion.questionNo}
                </span>
              )}
            </div>
            {targetQuestion.previewText && (
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {targetQuestion.previewText}
              </p>
            )}
          </div>

          {submitted ? (
            <div className="py-5 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-emerald-300">Report Admin Queue Me Bhej Di Gayi!</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Aapki report verify karke jald hi question / answer key ko update kiya jayega. Thank you!
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs cursor-pointer"
              >
                Done & Back
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">
                  Kya Galti Mili? (Select Issue Type)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ISSUE_TYPES.map((t) => {
                    const active = issueType === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setIssueType(t.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'bg-amber-500/15 border-amber-400 text-white'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">{t.id}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{t.labelHi}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">
                  Details / Sahi Answer Batayein (Optional)
                </label>
                <textarea
                  rows={3}
                  value={issueNote}
                  onChange={(e) => setIssueNote(e.target.value)}
                  placeholder="Jaise: Option B sahi hona chahiye kyunki Ohm's Law V = I × R..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 text-xs text-white focus:outline-none resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Submitting...' : 'Submit Report'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
