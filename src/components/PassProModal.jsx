import React, { useState } from 'react';
import { 
  X, Crown, CheckCircle2, Zap, ShieldCheck, Flame, 
  Clock, ArrowRight, Sparkles, QrCode, Copy, Check, Smartphone
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function PassProModal({ onClose, onUnlockSuccess }) {
  const { payments } = MONETIZATION_CONFIG;
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [utrInput, setUtrInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const upiIntentUrl = `upi://pay?pa=${payments.upiId}&pn=${encodeURIComponent(payments.payeeName)}&am=${payments.passProPrice}&cu=INR&tn=RailwayRankerPassPro`;

  const handleCopyUPI = () => {
    navigator.clipboard?.writeText(payments.upiId);
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2500);
  };

  const handleVerifyUTR = (e) => {
    e.preventDefault();
    const formInput = e.target.querySelector('input')?.value || '';
    const val = (utrInput || formInput).trim();
    if (!val) return;
    if (val.length >= 8 || val.toUpperCase() === payments.secretAdminCode.toUpperCase()) {
      setUnlocked(true);
      try {
        localStorage.setItem('railwayprep_pass_pro_active', 'true');
      } catch (e) {}
      if (onUnlockSuccess) onUnlockSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-lg w-full max-h-[92vh] bg-[#090D1A] border border-amber-500/40 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-y-auto custom-scrollbar">
        
        {/* Glow corner background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {unlocked ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">
              🎉 Pass Pro Activated!
            </h2>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Congratulations! All 86+ official CBT mock tests, pure sectionals, and detailed solutions are now unlocked on this device.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs shadow-lg cursor-pointer"
            >
              Start Practicing Now →
            </button>
          </div>
        ) : (
          <>
            {/* Header with VIP Badge */}
            <div className="text-center pb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase mb-3">
                <Crown className="w-3.5 h-3.5 fill-amber-300" />
                <span>Special 80% Discount • ₹{payments.passProPrice}/Yr</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                RailwayRanker <span className="text-amber-400">PASS PRO</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Crack RRB ALP, NTPC & Group D with Unlimited Authentic Test Series
              </p>
            </div>

            {/* Pricing Card (Testbook style) */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 my-4 text-center">
              <div className="text-xs font-bold text-slate-400 line-through">Regular Price: ₹499 / Year</div>
              <div className="text-3xl sm:text-4xl font-black text-white mt-1 flex items-center justify-center gap-2">
                <span className="text-amber-400">₹{payments.passProPrice}</span>
                <span className="text-xs text-slate-400 font-normal">/ Full 1 Year All-Access</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                ⚡ Less than ₹4 per month! 100% Genuine Railway Mock Tests
              </div>
            </div>

            {/* Included Features List */}
            <div className="space-y-2.5 my-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>86+ Full-Length & Pure Sectional Tests</strong> (ALP 2025, 2026 & CBT-2)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Authentic Testbook / TCS iON CBT Layout</strong> with Hindi/English toggle</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Pure Sectionals:</strong> Isolated Maths, Isolated Reasoning, Science & GK</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>All-India Rank, Percentile & Detailed Explanations</strong></span>
              </div>
            </div>

            {/* Payment / UPI Action */}
            <div className="pt-3 border-t border-slate-800 space-y-3">
              
              {/* Direct UPI Intent Button for Mobile */}
              <a
                href={upiIntentUrl}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>⚡ Pay ₹{payments.passProPrice} via UPI App (GPay/PhonePe/Paytm)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Show QR Toggle */}
              <button
                type="button"
                onClick={() => setShowQR(!showQR)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-800 cursor-pointer"
              >
                <QrCode className="w-4 h-4" />
                <span>{showQR ? 'Hide UPI QR Code' : 'Scan UPI QR Code Instead'}</span>
              </button>

              {/* UPI ID box */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <div className="text-[10px] text-slate-400">Direct Pay UPI ID:</div>
                  <div className="font-mono text-amber-300 font-bold">{payments.upiId}</div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyUPI}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copiedUPI ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedUPI ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {showQR && (
                <div className="p-4 rounded-2xl bg-white text-slate-950 text-center animate-in fade-in max-w-xs mx-auto shadow-xl">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiIntentUrl)}`}
                    alt="UPI QR Code" 
                    className="w-44 h-44 mx-auto"
                  />
                  <div className="text-xs font-black mt-2">Scan & Pay ₹{payments.passProPrice}</div>
                  <div className="text-[10px] text-slate-600">Supports GPay, PhonePe, Paytm, CRED & BHIM</div>
                </div>
              )}

              {/* UTR Verification form */}
              <form onSubmit={handleVerifyUTR} className="pt-2 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  value={utrInput}
                  onChange={(e) => setUtrInput(e.target.value)}
                  placeholder="Enter 12-digit UPI UTR / Ref No."
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 cursor-pointer transition-colors"
                >
                  Activate
                </button>
              </form>
              <div className="text-[10px] text-slate-500 text-center">
                *Click to auto-fill demo unlock code: <button type="button" onClick={() => setUtrInput('PASS2026')} className="text-amber-400 font-mono font-bold underline cursor-pointer">PASS2026</button>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
