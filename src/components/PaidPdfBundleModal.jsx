import React, { useState, useMemo } from 'react';
import {
  X, Download, FileText, Printer, Lock, Crown, LogIn,
  Globe, BookOpen, CheckCircle2, Sparkles
} from 'lucide-react';
import { EXAM_HIERARCHY } from '../utils/pyqTaxonomy';
import { hydrateTest } from '../data/testQuestionLoader';
import {
  renderPrintableShiftWindow,
  downloadOfflineSolvedSheet,
} from '../utils/shiftPdfGenerator';

export default function PaidPdfBundleModal({
  onClose,
  railwayTests = [],
  getTestAccess,
  hasPassPro = false,
  user = null,
  onOpenPassPro,
  onOpenAuth,
}) {
  const [selectedExamKey, setSelectedExamKey] = useState('alp');
  const [selectedYearKey, setSelectedYearKey] = useState('alp-2026');
  const [selectedTestId, setSelectedTestId] = useState('');
  const [langMode, setLangMode] = useState('bilingual'); // 'bilingual' | 'hi' | 'en'
  const [layoutMode, setLayoutMode] = useState('solved'); // 'solved' | 'practice'
  const [generating, setGenerating] = useState(false);

  const activeExam = useMemo(
    () => EXAM_HIERARCHY.find((e) => e.key === selectedExamKey) || EXAM_HIERARCHY[0],
    [selectedExamKey]
  );

  const activeYear = useMemo(
    () => activeExam.years.find((y) => y.key === selectedYearKey) || activeExam.years[0],
    [activeExam, selectedYearKey]
  );

  const shiftsList = useMemo(
    () => railwayTests.filter(activeYear.filter),
    [railwayTests, activeYear]
  );

  const selectedTest = useMemo(
    () => shiftsList.find((t) => t.id === selectedTestId) || shiftsList[0] || null,
    [shiftsList, selectedTestId]
  );

  const accessStatus = selectedTest && getTestAccess ? getTestAccess(selectedTest) : 'open';

  const handleSelectExam = (exKey) => {
    const ex = EXAM_HIERARCHY.find((e) => e.key === exKey) || EXAM_HIERARCHY[0];
    setSelectedExamKey(ex.key);
    setSelectedYearKey(ex.years[0].key);
    setSelectedTestId('');
  };

  const handleSelectYear = (yrKey) => {
    setSelectedYearKey(yrKey);
    setSelectedTestId('');
  };

  const handleExportPdf = async (mode = 'print') => {
    if (!selectedTest || generating) return;
    if (accessStatus === 'login_required') {
      if (onOpenAuth) onOpenAuth('Login karke Shifts 2–3 ke Solved PDFs free download karein!');
      return;
    }
    if (accessStatus === 'pass_pro_required') {
      if (onOpenPassPro) onOpenPassPro();
      return;
    }

    // Open blank window synchronously during click gesture to bypass mobile popup blockers
    const preWin = mode === 'print' ? window.open('', '_blank') : null;
    if (preWin) {
      preWin.document.write(
        '<body style="background:#070B18;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><p>Generating Bilingual Solved PDF Sheet...</p></body>'
      );
    }

    setGenerating(true);
    try {
      const hydrated = await hydrateTest(selectedTest);
      if (mode === 'print') {
        renderPrintableShiftWindow(hydrated, { langMode, layoutMode }, preWin);
      } else {
        downloadOfflineSolvedSheet(hydrated, { langMode, layoutMode });
      }
    } catch (err) {
      console.error('PDF generation failed:', err);
      if (preWin) preWin.close();
      alert('PDF generate karne mein problem aayi. Please dobara try karein.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-2xl w-full max-h-[90vh] bg-[#090D1A] border border-teal-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative flex flex-col overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-slate-800 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/35 text-teal-300 font-extrabold text-[11px] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Built-In Bilingual Solved Shift PDF Studio</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Download Printable <span className="text-teal-400">Solved Question PDFs</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Apni pasand ki shift chunein, Hindi/English mode select karein aur A4 Print-Ready Solved PDF turant save karein!
          </p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4 custom-scrollbar">
          {/* Exam & Year Selectors */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-slate-400 mr-1">1. Exam:</span>
              {EXAM_HIERARCHY.map((ex) => (
                <button
                  key={ex.key}
                  type="button"
                  onClick={() => handleSelectExam(ex.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer transition-all ${
                    selectedExamKey === ex.key
                      ? 'bg-teal-500 text-slate-950'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-400 mr-1">2. Year / Stage:</span>
              {activeExam.years.map((yr) => (
                <button
                  key={yr.key}
                  type="button"
                  onClick={() => handleSelectYear(yr.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer border ${
                    activeYear.key === yr.key
                      ? 'bg-amber-400 text-slate-950 border-amber-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
                  }`}
                >
                  {yr.shortLabel}
                </button>
              ))}
            </div>

            {/* Shift Picker */}
            <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
              <label className="block text-[11px] font-bold text-slate-400">
                3. Select Official Shift ({shiftsList.length} Available):
              </label>
              <select
                value={selectedTest?.id || ''}
                onChange={(e) => setSelectedTestId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-teal-400 cursor-pointer"
              >
                {shiftsList.map((t) => {
                  const st = getTestAccess ? getTestAccess(t) : 'open';
                  const tag = st === 'open' ? '✅ UNLOCKED' : st === 'login_required' ? '🔐 LOGIN FREE' : '👑 PASS PRO';
                  return (
                    <option key={t.id} value={t.id} className="bg-slate-900">
                      {tag} — {t.title} ({t.totalQuestions} Qs)
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* PDF Language & Layout Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                <span>PDF Language Mode</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { key: 'bilingual', label: 'EN + हिंदी' },
                  { key: 'hi', label: 'हिंदी Only' },
                  { key: 'en', label: 'English' },
                ].map((l) => (
                  <button
                    key={l.key}
                    type="button"
                    onClick={() => setLangMode(l.key)}
                    className={`py-2 rounded-lg text-[11px] font-bold cursor-pointer border ${
                      langMode === l.key
                        ? 'bg-teal-500 text-slate-950 border-teal-500'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Paper Format</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { key: 'solved', label: 'Solved + Solutions' },
                  { key: 'practice', label: 'Practice + Key' },
                ].map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setLayoutMode(m.key)}
                    className={`py-2 rounded-lg text-[11px] font-bold cursor-pointer border ${
                      layoutMode === m.key
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Shift Summary & Action Buttons */}
          {selectedTest && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-black text-white">{selectedTest.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Includes diagrams, tables, highlighted official keys & bilingual solutions.
                  </div>
                </div>
                {accessStatus === 'open' && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black shrink-0 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> READY
                  </span>
                )}
              </div>

              {accessStatus === 'open' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    disabled={generating}
                    onClick={() => handleExportPdf('print')}
                    className="py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-60"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{generating ? 'Preparing PDF...' : 'Save A4 PDF / Print'}</span>
                  </button>

                  <button
                    type="button"
                    disabled={generating}
                    onClick={() => handleExportPdf('offline')}
                    className="py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/40 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Offline Sheet</span>
                  </button>
                </div>
              ) : accessStatus === 'login_required' ? (
                <button
                  type="button"
                  onClick={() => handleExportPdf('print')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 hover:from-teal-500 hover:to-emerald-500 text-teal-300 hover:text-slate-950 border border-teal-500/50 font-black text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Free Login to Unlock Shifts 2–3 PDFs</span>
                </button>
              ) : (
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200">
                    Shift 1 har exam ka PDF **100% Free** hai! Is Shift ka Solved PDF (aur sabhi 99 Official Shift PDFs + Tests) unlock karne ke liye **Pass Pro (₹49)** ya **4 Verified Referrals** complete karein.
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenPassPro && onOpenPassPro()}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Crown className="w-4 h-4 fill-slate-950" />
                    <span>Unlock All 99 Shift PDFs + Pass Pro (₹49 / Free Refer)</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {!hasPassPro && (
            <div className="text-[11px] text-slate-400 text-center">
              Tip: Free demo check karne ke liye kisi bhi exam ka <b className="text-emerald-400">Shift 1</b> select karke PDF download karke dekhein!
              {!user && ' (Login par Shifts 2 & 3 bhi free milte hain)'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
