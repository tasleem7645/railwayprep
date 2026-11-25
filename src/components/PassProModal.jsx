import React, { useState, useEffect } from 'react';
import {
  X, Crown, CheckCircle2, QrCode, Copy, Check, Smartphone,
  ArrowRight, Clock, AlertCircle, ShieldCheck, LogIn, Gift,
  Share2, Send, Users, Flame, Sparkles, ShieldOff
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';
import { supabase } from '../lib/supabaseClient';

export default function PassProModal({
  user,
  profile,
  hasPassPro,
  campaignStatus,
  onClose,
  onOpenAuth,
  onUnlockSuccess
}) {
  const { payments, referral } = MONETIZATION_CONFIG;
  const isPaidPro = Boolean(hasPassPro && profile?.pass_pro_plan === 'paid');
  const [activeTab, setActiveTab] = useState(
    campaignStatus?.is_active !== false ? 'referral' : 'paid'
  ); // 'referral' | 'paid'
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [utrInput, setUtrInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [pendingPayment, setPendingPayment] = useState(null);

  const upiIntentUrl = `upi://pay?pa=${payments.upiId}&pn=${encodeURIComponent(payments.payeeName)}&am=${payments.passProPrice}&cu=INR&tn=RailwayPrepVIP`;

  const refCode = profile?.referral_code || '';
  const refLink = refCode ? `${window.location.origin}/?ref=${refCode}` : window.location.origin;
  const refCount = profile?.referral_count || 0;
  const seatsLeft = campaignStatus?.seats_left ?? referral.maxSeats;
  const maxSeats = campaignStatus?.max_seats ?? referral.maxSeats;
  const campaignActive = campaignStatus?.is_active !== false && seatsLeft > 0;

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

  const handleCopyRef = () => {
    navigator.clipboard?.writeText(refLink);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2500);
  };

  const shareText = `🚂 Bhai Railway ALP / Group D / CBT-2 ke 86+ Official Shifts bilkul real TCS iON CBT interface mein FREE practice karne ke liye mere link se join karo 👇\n${refLink}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(refLink)}&text=${encodeURIComponent('🚂 Railway ALP / Group D 86+ Official CBT Mock Tests Free Practice 👇')}`;

  const handleRazorpayCheckout = () => {
    if (!user) {
      if (onOpenAuth) onOpenAuth('Pass Pro unlock karne ke liye pehle apna free account login karein.');
      return;
    }
    if (!payments.razorpayKeyId) {
      setErrorMsg('Razorpay gateway ready hai — tab tak neeche UPI QR se ₹49 pay karke UTR submit karein!');
      return;
    }
    if (window.Razorpay) {
      const options = {
        key: payments.razorpayKeyId,
        amount: payments.passProPrice * 100,
        currency: 'INR',
        name: 'RailwayPrep VIP PRO',
        description: '1 Year Ad-Free VIP Pass Pro',
        prefill: { email: user.email },
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
      <div className="max-w-lg w-full max-h-[92vh] bg-[#090D1A] border border-amber-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isPaidPro ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <Crown className="w-8 h-8 fill-emerald-400" />
            </div>
            <h2 className="text-2xl font-black text-white">👑 Ad-Free VIP Pass Pro Active!</h2>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Aapke account ({user?.email}) par sabhi 86+ official CBT mock tests unlocked hain — aur 100% Ad-Free VIP mode chalu hai!
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
              Aapka UTR <b className="text-amber-300 font-mono">{pendingPayment.utr_or_payment_id}</b> submit ho gaya hai. Verify hote hi 5–15 min mein aapka 1-Year Ad-Free VIP Pass activate ho jayega!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center pb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase mb-2.5">
                <Crown className="w-3.5 h-3.5 fill-amber-300" />
                <span>Unlock All 86+ Official Tests</span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                RailwayPrep <span className="text-amber-400">PASS PRO</span>
              </h2>
              {hasPassPro && profile?.pass_pro_plan === 'referral_trial' && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>90-Day Referral Pass Active • Upgrade to ₹49 for Ad-Free 1 Year!</span>
                </div>
              )}
            </div>

            {/* Dual Mode Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('referral')}
                className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all flex flex-col items-center cursor-pointer ${
                  activeTab === 'referral'
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5" />
                  <span>Refer 4 = FREE</span>
                </span>
                <span className={`text-[10px] font-bold ${activeTab === 'referral' ? 'text-slate-900' : 'text-teal-400'}`}>
                  3 Months (First {maxSeats})
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('paid')}
                className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all flex flex-col items-center cursor-pointer ${
                  activeTab === 'paid'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5" />
                  <span>Instant VIP ₹{payments.passProPrice}</span>
                </span>
                <span className={`text-[10px] font-bold ${activeTab === 'paid' ? 'text-slate-900' : 'text-amber-400'}`}>
                  1 Year • 100% Ad-Free
                </span>
              </button>
            </div>

            {/* TAB 1: FIRST-COME-FIRST-SERVE REFERRAL ENGINE */}
            {activeTab === 'referral' && (
              <div className="space-y-4">
                {/* Live Scarcity Counter Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/60 via-amber-950/40 to-slate-900 border border-amber-500/40">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-amber-300 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
                      <span>First-Come-First-Serve Launch Offer</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-black text-[10px] border border-rose-500/40">
                      {campaignActive ? `${seatsLeft} / ${maxSeats} Seats Left` : 'SLOTS FULL'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                    {campaignActive
                      ? `Apne 4 doston ko invite karein (unke email verify hote hi count hoga) aur 3 Mahine (90 Days) ka Full Pass Pro bilkul FREE paayein!`
                      : `Pehle ${maxSeats} Free Referral slots full ho chuke hain! Ab ₹49 VIP Pass Pro se instant sab unlock karein.`}
                  </p>
                </div>

                {!user ? (
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center space-y-3">
                    <p className="text-xs text-slate-300">
                      Apna unique Referral Link paane ke liye pehle 10 second mein apna free Student Account banayein:
                    </p>
                    <button
                      onClick={() => onOpenAuth && onOpenAuth('Apna Referral Link pane ke liye Login / Sign Up karein!')}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login & Get My Referral Link</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Referral Progress Tracker */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-2.5">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-teal-400" />
                          <span>Your Verified Referrals</span>
                        </span>
                        <span className="font-black text-teal-400">{Math.min(4, refCount)} / 4 Completed</span>
                      </div>

                      <div className="grid grid-cols-4 gap-2 mb-2">
                        {[1, 2, 3, 4].map((step) => {
                          const done = refCount >= step;
                          return (
                            <div
                              key={step}
                              className={`py-2 rounded-xl text-center text-xs font-black border transition-all ${
                                done
                                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                                  : 'bg-slate-950 border-slate-800 text-slate-500'
                              }`}
                            >
                              {done ? '✓ Done' : `Friend ${step}`}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-slate-400 text-center">
                        Note: Sirf verified email wale naye signups count honge. {refCount >= 4 ? '🎉 Target Complete!' : `${4 - refCount} aur invite baki hain!`}
                      </p>
                    </div>

                    {/* Copy Referral Link */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <div className="min-w-0 pr-2">
                        <div className="text-[10px] text-slate-400">Your Personal Invite Link (Code: <b className="text-teal-300">{refCode}</b>):</div>
                        <div className="font-mono text-teal-300 font-bold truncate">{refLink}</div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyRef}
                        className="px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 text-xs font-bold flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedRef ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedRef ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Direct WhatsApp & Telegram Share */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share on WhatsApp</span>
                      </a>
                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Share on Telegram</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: PAID VIP AD-FREE PASS PRO (₹49 / 1 YEAR) */}
            {activeTab === 'paid' && (
              <div className="space-y-3">
                {/* Pricing & Ad-Free VIP Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 text-center">
                  <div className="text-xs font-bold text-slate-400 line-through">Regular Price: ₹499 / Year</div>
                  <div className="text-3xl font-black text-white mt-0.5 flex items-center justify-center gap-2">
                    <span className="text-amber-400">₹{payments.passProPrice}</span>
                    <span className="text-xs text-slate-400 font-normal">/ Full 1 Year VIP Access</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                    <ShieldOff className="w-3.5 h-3.5" />
                    <span>100% Zero Ads (Ad-Free VIP) + All 86+ Tests</span>
                  </div>
                </div>

                {!user ? (
                  <button
                    onClick={() => onOpenAuth && onOpenAuth('Pass Pro buy karne ke liye pehle Login karein')}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login / Create Free Account First</span>
                  </button>
                ) : (
                  <div className="space-y-3">
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
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                      >
                        <span>💳 Instant Pay ₹{payments.passProPrice} (Card / UPI)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}

                    <a
                      href={upiIntentUrl}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 cursor-pointer"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>⚡ Pay ₹{payments.passProPrice} via UPI App</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setShowQR(!showQR)}
                      className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-800 cursor-pointer"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>{showQR ? 'Hide UPI QR Code' : 'Scan UPI QR Code'}</span>
                    </button>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <div>
                        <div className="text-[10px] text-slate-400">Direct Pay UPI ID:</div>
                        <div className="font-mono text-amber-300 font-bold">{payments.upiId}</div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyUPI}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1 cursor-pointer"
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
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 cursor-pointer disabled:opacity-60"
                      >
                        {submitting ? 'Sending...' : 'Submit UTR'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
