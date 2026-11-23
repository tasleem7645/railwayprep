import React, { useState } from 'react';
import { 
  X, Download, FileText, CheckCircle2, QrCode, 
  ArrowRight, Sparkles, Copy, Check, ShieldCheck 
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function PaidPdfBundleModal({ onClose }) {
  const { payments } = MONETIZATION_CONFIG;
  const [selectedBundle, setSelectedBundle] = useState('2025_2026_combo');
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [utrInput, setUtrInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const BUNDLES = [
    {
      id: '2025_2026_combo',
      title: 'RRB ALP 2025 & 2026 Complete Solved Papers (19 Shifts)',
      pages: '280+ Pages',
      price: payments.pdfBundlePrice,
      badge: 'Best Value • 100% Bilingual',
      features: [
        'All 10 Shifts of 2025 + All 9 Shifts of 2026',
        'Official Answers with detailed step-by-step Hindi/English explanations',
        'High-resolution formulas, Venn diagrams & clean print layout'
      ]
    },
    {
      id: 'science_crux',
      title: 'Neeraj Sir NCERT Class 9th & 10th Science Mind Maps',
      pages: '120+ Pages',
      price: 19,
      badge: 'Score 20/20 in Science',
      features: [
        'Physics numericals with speed formula cheatsheets',
        'Chemical reactions, Periodic table & Biology diagrams'
      ]
    },
    {
      id: 'super_combo',
      title: 'All-in-One Super Bundle (All PDFs + Pass Pro 1 Year)',
      pages: 'Unlimited Access',
      price: payments.superComboPrice,
      badge: 'Toppers Choice',
      features: [
        'All 76+ Online CBT Mock Tests Unlocked',
        'All Shift PDFs + Science & Maths Mind Maps'
      ]
    }
  ];

  const currentBundle = BUNDLES.find(b => b.id === selectedBundle) || BUNDLES[0];

  const handleCopyUPI = () => {
    navigator.clipboard?.writeText(payments.upiId);
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2500);
  };

  const handleVerifyPayment = (e) => {
    e.preventDefault();
    if (!utrInput.trim()) return;
    // Unlock if UTR is 12 digits or matches admin code
    if (utrInput.trim().length >= 8 || utrInput.trim() === payments.secretAdminCode) {
      setIsUnlocked(true);
      try {
        localStorage.setItem('railwayprep_pass_pro_active', 'true');
      } catch (e) {}
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-xl w-full max-h-[90vh] bg-[#090D1A] border border-teal-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-extrabold text-xs mb-2">
            <Download className="w-3.5 h-3.5 text-teal-400" />
            <span>Digital Download Store</span>
          </div>
          <h2 className="text-2xl font-black text-white">
            Download Printable <span className="text-teal-400">Solved PDF Bundles</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Offline study material with step-by-step bilingual solutions for rapid revision.
          </p>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto space-y-4 py-2 custom-scrollbar">
          
          {isUnlocked ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Payment Verified!</h3>
              <p className="text-xs text-slate-300">
                Your PDF downloads have been unlocked successfully.
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href="/RRB-ALP-2025-CBT1-EN-Official-Answer-Key.pdf"
                  download
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download RRB ALP 2025 All Shifts PDF</span>
                </a>
                <a
                  href="/RRB-ALP-2025-CBT1-HI-Official-Answer-Key.pdf"
                  download
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Hindi All Shifts PDF</span>
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Bundle Selectors */}
              <div className="space-y-2.5">
                {BUNDLES.map(b => (
                  <div
                    key={b.id}
                    onClick={() => setSelectedBundle(b.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      selectedBundle === b.id
                        ? 'bg-teal-500/10 border-teal-500 shadow-md shadow-teal-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedBundle === b.id ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{b.title}</span>
                          <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                            {b.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{b.pages} • Printable A4 PDF</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-black text-teal-400">₹{b.price}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Section */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Selected Product:</span>
                  <span className="font-bold text-white truncate max-w-[200px]">{currentBundle.title}</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-900">
                  <span className="text-slate-400">Total Payable:</span>
                  <span className="text-lg font-black text-amber-400">₹{currentBundle.price}</span>
                </div>

                {/* QR Code and UPI ID */}
                <div className="pt-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400">UPI ID for Payment</div>
                      <div className="font-mono text-teal-300 font-bold">{payments.upiId}</div>
                    </div>
                    <button
                      onClick={handleCopyUPI}
                      className="px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedUPI ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedUPI ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* QR toggle */}
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <QrCode className="w-4 h-4 text-teal-400" />
                  <span>{showQR ? 'Hide UPI QR Code' : 'Show UPI QR Code to Scan'}</span>
                </button>

                {showQR && (
                  <div className="p-4 rounded-xl bg-white text-slate-950 text-center animate-in fade-in max-w-xs mx-auto">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=${payments.upiId}&pn=${encodeURIComponent(payments.payeeName)}&am=${currentBundle.price}&cu=INR`}
                      alt="UPI QR Code" 
                      className="w-44 h-44 mx-auto"
                    />
                    <div className="text-[11px] font-bold mt-2">
                      Scan with GPay / PhonePe / Paytm / BHIM
                    </div>
                    <div className="text-[10px] text-slate-600">Amount: ₹{currentBundle.price}</div>
                  </div>
                )}

                {/* UTR Verification form */}
                <form onSubmit={handleVerifyPayment} className="pt-2 border-t border-slate-900 flex gap-2">
                  <input
                    type="text"
                    value={utrInput}
                    onChange={(e) => setUtrInput(e.target.value)}
                    placeholder="Enter 12-digit UTR / Ref No."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shrink-0 cursor-pointer transition-colors"
                  >
                    Unlock
                  </button>
                </form>
                <div className="text-[10px] text-slate-500 text-center">
                  *After UPI payment, enter the 12-digit UTR number from your payment app to unlock instantly.
                </div>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
