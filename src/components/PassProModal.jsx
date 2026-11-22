import React, { useState } from 'react';
import { 
  X, Crown, CheckCircle2, Zap, ShieldCheck, Flame, 
  Clock, ArrowRight, Sparkles, QrCode
} from 'lucide-react';

export default function PassProModal({ onClose }) {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const UPI_ID = 'railwayprep@upi';

  const handleCopyUPI = () => {
    navigator.clipboard?.writeText(UPI_ID);
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-[#090D1A] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow corner background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with VIP Badge */}
        <div className="text-center pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase mb-3">
            <Crown className="w-3.5 h-3.5 fill-amber-300" />
            <span>Limited Period 80% Discount</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            RailwayPrep <span className="text-amber-400">PASS PRO</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Crack RRB NTPC, ALP & Group D with Unlimited Test Series
          </p>
        </div>

        {/* Pricing Card (Testbook style) */}
        <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 my-4 text-center">
          <div className="text-xs font-bold text-slate-400 line-through">Regular Price: ₹499 / Year</div>
          <div className="text-3xl sm:text-4xl font-black text-white mt-1 flex items-center justify-center gap-2">
            <span className="text-amber-400">₹49</span>
            <span className="text-xs text-slate-400 font-normal">/ Full 1 Year Access</span>
          </div>
          <div className="text-[11px] text-emerald-400 font-semibold mt-1">
            ⚡ Less than ₹4 per month! 100% Genuine Railway Mock Tests
          </div>
        </div>

        {/* Included Features List */}
        <div className="space-y-2.5 my-5 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>50+ Full-Length Mock Tests</strong> (RRB NTPC, ALP & Group D)</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Unlimited Re-attempts</strong> with TCS iON CBT timer</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>All-India Rank & Percentile Leaderboard</strong></span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Downloadable Handwritten PDF Notes</strong> & Formula Sheets</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>100% Ad-Free Experience</strong> for focused study</span>
          </div>
        </div>

        {/* Payment / UPI Action */}
        <div className="pt-3 border-t border-slate-800 space-y-3">
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
          >
            <Crown className="w-4 h-4 fill-slate-950" />
            <span>Buy Pass Pro for ₹49 via UPI</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {showQR && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center animate-in fade-in zoom-in-95">
              <div className="text-xs text-slate-300 font-semibold mb-2">Scan & Pay ₹49 using any UPI App (GPay / PhonePe / Paytm)</div>
              
              {/* UPI ID Copy box */}
              <div className="flex items-center justify-center gap-2 my-2">
                <code className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-teal-300 text-xs font-mono font-bold">
                  {UPI_ID}
                </code>
                <button
                  onClick={handleCopyUPI}
                  className="px-3 py-1.5 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs"
                >
                  {copiedUPI ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2">
                After payment, send screenshot on WhatsApp / Telegram for instant VIP activation.
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Instant Activation
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> 1-Year Validity
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
