import React, { useState, useEffect } from 'react';
import {
  X, Crown, CheckCircle2, QrCode, Copy, Check, Smartphone,
  ArrowRight, Lock, Clock, AlertCircle, ShieldCheck, LogIn
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';
import { supabase } from '../lib/supabaseClient';

export default function PassProModal({ user, hasPassPro, onClose, onOpenAuth, onUnlockSuccess }) {
  const { payments } = MONETIZATION_CONFIG;
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [utrInput, setUtrInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [pendingPayment, setPendingPayment] = useState(null);

  const upiIntentUrl = `upi://pay?pa=${payments.upiId}&pn=${encodeURIComponent(payments.payeeName)}&am=${payments.passProPrice}&cu=INR&tn=RailwayPrepPassPro`;

  // Check if user already has a pending or approved payment
  useEffect(() => {
    if (!user?.id) return;
    let isMounted = true;
    supabase
      .from('pass_pro_payments')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .then(({ data }) => {
        if (isMounted && data && data.length > 0) {
          setPendingPayment(data[0]);
        }
      });
    return () => { isMounted = false; };
  }, [user?.id]);

  const handleCopyUPI = () => {
    navigator.clipboard?.writeText(payments.upiId);
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2500);
  };

  const handleRazorpayCheckout = () => {
    if (!user) {
      if (onOpenAuth) onOpenAuth('Pass Pro unlock karne ke liye pehle apna free account login karein.');
      return;
    }
    if (!payments.razorpayKeyId) {
      setErrorMsg('Razorpay gateway integration ready hai — KYC approval ke baad active ho jayega. Tab tak neeche UPI se Pay karein!');
      return;
    }
    // Razorpay Checkout hook once script & Key ID are configured
    if (window.Razorpay) {
      const options = {
        key: payments.razorpayKeyId,
        amount: payments.passProPrice * 100,
        currency: 'INR',
        name: 'RailwayPrep PRO',
        description: '1 Year Pass Pro (All 86+ CBT Mock Tests)',
        prefill: {
          email: user.email,
        },
        handler: async function (response) {
          if (response?.razorpay_payment_id) {
            await supabase.from('pass_pro_payments').insert({
              user_id: user.id,
              user_email: user.email,
              amount: payments.passProPrice,
              payment_method: 'razorpay',
              utr_or_payment_id: response.razorpay_payment_id,
              status: 'pending',
            });
            if (onUnlockSuccess) onUnlockSuccess();
          }
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  };

  const handleVerifyUTR = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!user) {
      if (onOpenAuth) onOpenAuth('Payment verify karne se pehle apna free account login karein.');
      return;
    }

    const cleanUTR = utrInput.trim();
    if (cleanUTR.length < 10) {
      setErrorMsg('Kripya sahi 12-digit UPI UTR / Transaction Reference Number daalein.');
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from('pass_pro_payments')
        .insert({
          user_id: user.id,
          user_email: user.email,
          amount: payments.passProPrice,
          payment_method: 'upi_utr',
          utr_or_payment_id: cleanUTR,
          status: 'pending',
        })
        .select()
        .single();

      if (error) {
        if (error.code === '23505') {
          throw new Error('Yeh UTR number pehle hi submit ho chuka hai.');
        }
        throw error;
      }

      setPendingPayment(data);
      setUtrInput('');
    } catch (err) {
      setErrorMsg(err.message || 'UTR submit karne mein samasya aayi. Dobara try karein.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-lg w-full max-h-[92vh] bg-[#090D1A] border border-amber-500/40 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {hasPassPro ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">🎉 Pass Pro Activated!</h2>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Aapke account ({user?.email}) par sabhi 86+ official CBT mock tests, sectionals aur solutions unlock hain!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs shadow-lg cursor-pointer"
            >
              Start Practicing Now →
            </button>
          </div>
        ) : pendingPayment?.status === 'pending' ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto">
              <Clock className="w-7 h-7 animate-pulse" />
            </div>
            <h2 className="text-xl font-black text-white">Payment Verification Pending</h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Aapka UTR <b className="text-amber-300 font-mono">{pendingPayment.utr_or_payment_id}</b> safely submit ho gaya hai. Admin verification ke baad 5–15 minute mein aapka Pass Pro automatically unlock ho jayega!
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              Account: <span className="text-white font-semibold">{user?.email}</span> • Support: <span className="text-teal-300">{MONETIZATION_CONFIG.community.emailContact}</span>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
            >
              Close & Practice Free Shift 1
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
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

            {/* Pricing Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 my-4 text-center">
              <div className="text-xs font-bold text-slate-400 line-through">Regular Price: ₹499 / Year</div>
              <div className="text-3xl sm:text-4xl font-black text-white mt-1 flex items-center justify-center gap-2">
                <span className="text-amber-400">₹{payments.passProPrice}</span>
                <span className="text-xs text-slate-400 font-normal">/ Full 1 Year All-Access</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                ⚡ Less than ₹4 per month! Synced across Phone & Laptop
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 my-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>86+ Full-Length & Pure Sectional Tests</strong> (ALP, CBT-2 & Group D)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Authentic TCS iON CBT Layout</strong> with Hindi/English toggle</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>All-India Rank, Percentile & Cloud Test History</strong></span>
              </div>
            </div>

            {/* Login Prompt if not logged in */}
            {!user ? (
              <div className="pt-4 border-t border-slate-800 space-y-3 text-center">
                <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs text-teal-200">
                  <ShieldCheck className="w-4 h-4 inline mr-1.5 text-teal-400" />
                  Pass Pro ko permanently apne account par save karne ke liye pehle 1-click Login karein:
                </div>
                <button
                  onClick={() => onOpenAuth && onOpenAuth('Pass Pro lene ke liye pehle login karein')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login / Create Free Account First</span>
                </button>
              </div>
            ) : (
              <div className="pt-3 border-t border-slate-800 space-y-3">
                {errorMsg && (
                  <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {payments.razorpayKeyId && (
                  <button
                    type="button"
                    onClick={handleRazorpayCheckout}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <span>💳 Instant Pay ₹{payments.passProPrice} (Card / UPI / NetBanking)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {/* Direct UPI Intent */}
                <a
                  href={upiIntentUrl}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>⚡ Pay ₹{payments.passProPrice} via UPI App (GPay/PhonePe/Paytm)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowQR(!showQR)}
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-800 cursor-pointer"
                >
                  <QrCode className="w-4 h-4" />
                  <span>{showQR ? 'Hide UPI QR Code' : 'Scan UPI QR Code Instead'}</span>
                </button>

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
                  <div className="p-4 rounded-2xl bg-white text-slate-950 text-center max-w-xs mx-auto shadow-xl">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiIntentUrl)}`}
                      alt="UPI QR Code"
                      className="w-44 h-44 mx-auto"
                    />
                    <div className="text-xs font-black mt-2">Scan & Pay ₹{payments.passProPrice}</div>
                    <div className="text-[10px] text-slate-600">Supports GPay, PhonePe, Paytm, CRED & BHIM</div>
                  </div>
                )}

                <form onSubmit={handleVerifyUTR} className="pt-2 border-t border-slate-800 flex gap-2">
                  <input
                    type="text"
                    value={utrInput}
                    onChange={(e) => setUtrInput(e.target.value)}
                    placeholder="Enter 12-digit UPI UTR / Ref No."
                    required
                    minLength={10}
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 cursor-pointer transition-colors disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Submit UTR'}
                  </button>
                </form>
                <div className="text-[10px] text-slate-400 text-center">
                  Payment ke baad 12-digit UTR number submit karein — 5–15 min mein Pass Pro active ho jayega.
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
