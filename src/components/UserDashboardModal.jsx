import React, { useState, useEffect } from 'react';
import {
  X, User, Crown, LogOut, Trophy, Clock, CheckCircle2, XCircle,
  ShieldCheck, RefreshCw, Sparkles, Calendar, AlertCircle,
  Copy, Check, Share2, Send, Gift, Users
} from 'lucide-react';
import { supabase, isUserAdmin } from '../lib/supabaseClient';

const maskEmail = (email) => {
  if (!email || !email.includes('@')) return 'aspirant@***';
  const [name, domain] = email.split('@');
  const visible = name.slice(0, 2);
  return `${visible}${'*'.repeat(Math.max(2, Math.min(4, name.length - 2)))}@${domain}`;
};

export default function UserDashboardModal({
  user,
  profile,
  hasPassPro,
  onClose,
  onLogout,
  onOpenPassPro,
  onRefreshProfile
}) {
  const isAdmin = isUserAdmin(user);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'history' | 'admin'
  const [attempts, setAttempts] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Referral link & friends list state
  const [copiedLink, setCopiedLink] = useState(false);
  const [referralsList, setReferralsList] = useState([]);
  const [loadingReferrals, setLoadingReferrals] = useState(false);

  // Admin state
  const [payments, setPayments] = useState([]);
  const [loadingPayments, setLoadingPayments] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [adminMsg, setAdminMsg] = useState('');

  useEffect(() => {
    if (activeTab === 'profile' && user?.id) {
      fetchMyReferrals();
    }
    if (activeTab === 'history' && user?.id) {
      fetchTestHistory();
    }
    if (activeTab === 'admin' && isAdmin) {
      fetchAdminPayments();
    }
  }, [activeTab, user?.id, isAdmin]);

  const fetchMyReferrals = async () => {
    setLoadingReferrals(true);
    try {
      const { data, error } = await supabase
        .from('referrals')
        .select('id, referred_email, status, created_at, verified_at')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20);
      if (!error && data) {
        setReferralsList(data);
      }
    } catch (e) {
      console.warn('Error fetching referrals:', e);
    } finally {
      setLoadingReferrals(false);
    }
  };

  const fetchTestHistory = async () => {
    setLoadingHistory(true);
    try {
      const { data, error } = await supabase
        .from('test_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(30);
      if (!error && data) {
        setAttempts(data);
      }
    } catch (e) {
      console.warn('Error fetching history:', e);
    } finally {
      setLoadingHistory(false);
    }
  };

  const fetchAdminPayments = async () => {
    setLoadingPayments(true);
    try {
      const { data, error } = await supabase
        .from('pass_pro_payments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      if (!error && data) {
        setPayments(data);
      }
    } catch (e) {
      console.warn('Error fetching admin payments:', e);
    } finally {
      setLoadingPayments(false);
    }
  };

  const handleVerifyPayment = async (paymentId, approve) => {
    setActionLoadingId(paymentId);
    setAdminMsg('');
    try {
      const { error } = await supabase.rpc('admin_verify_payment', {
        p_payment_id: paymentId,
        p_approve: approve,
      });
      if (error) throw error;
      setAdminMsg(approve ? '✅ Pass Pro Approved & Activated for 1 Year!' : '❌ Payment Marked Rejected.');
      await fetchAdminPayments();
      if (onRefreshProfile) onRefreshProfile();
    } catch (err) {
      setAdminMsg(`Error: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Aspirant';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-3xl w-full max-h-[90vh] bg-[#090D1A] border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl relative flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 font-black flex items-center justify-center text-base uppercase">
              {displayName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white">{displayName}</h2>
                {hasPassPro && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-amber-300" /> PASS PRO
                  </span>
                )}
                {isAdmin && (
                  <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-black">
                    ADMIN
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 py-3 border-b border-slate-800/80 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'profile' ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>My Account</span>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'history' ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Test History</span>
          </button>
          {isAdmin && (
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'admin' ? 'bg-amber-500 text-slate-950' : 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Payment Approvals</span>
            </button>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 custom-scrollbar">
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className={`p-5 rounded-2xl border ${hasPassPro ? 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/30 border-amber-500/40' : 'bg-slate-900/70 border-slate-800'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Membership Status</div>
                    <div className="text-lg font-black text-white mt-1 flex items-center gap-2">
                      {hasPassPro ? (
                        <>
                          <Crown className="w-5 h-5 text-amber-400 fill-amber-400" />
                          <span>
                            {profile?.pass_pro_plan === 'paid'
                              ? 'Ad-Free VIP Pass Pro Active (1 Year)'
                              : 'Launch Referral Pro Active (90 Days)'}
                          </span>
                        </>
                      ) : (
                        <span>Free Plan (Shifts 1–3 Unlocked)</span>
                      )}
                    </div>
                    {hasPassPro && profile?.pass_pro_expires_at && (
                      <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Valid until: {new Date(profile.pass_pro_expires_at).toLocaleDateString('en-IN')}</span>
                      </div>
                    )}
                  </div>

                  {!hasPassPro && (
                    <button
                      onClick={() => { onClose(); onOpenPassPro(); }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs shadow-lg cursor-pointer shrink-0"
                    >
                      Upgrade to Pass Pro (₹49)
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Your Referral Code</span>
                    {!profile?.referral_code && onRefreshProfile && (
                      <button
                        onClick={onRefreshProfile}
                        title="Refresh Profile"
                        className="text-teal-400 hover:text-teal-300 cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <div className="text-teal-300 font-mono font-black text-sm mt-1">
                    {profile?.referral_code || 'SYNC PENDING'}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-slate-400">Verified Referrals</div>
                  <div className="text-amber-300 font-black text-sm mt-1">
                    {profile?.referral_count || 0} / 4 Friends
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-slate-400">Ads Status</div>
                  <div className={`font-bold mt-1 ${profile?.pass_pro_plan === 'paid' ? 'text-emerald-400' : 'text-slate-300'}`}>
                    {profile?.pass_pro_plan === 'paid' ? '100% Ad-Free VIP ✓' : 'Ad-Supported (Upgrade ₹49)'}
                  </div>
                </div>
              </div>

              {/* Direct Referral Link Generator & Share Section */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-emerald-950/30 border border-teal-500/30 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-black text-teal-300 uppercase tracking-wide">
                      <Gift className="w-4 h-4 text-teal-400" />
                      <span>Direct Referral Invite Link (Refer 4 Friends = 90 Days Free Pro)</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Is direct link ko friends ke saath share karein — link se signup + verify hote hi automatically count judega!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={fetchMyReferrals}
                    title="Refresh Referrals"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer shrink-0"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingReferrals ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                {profile?.referral_code ? (
                  <>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="flex-1 px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-teal-300 truncate select-all">
                        {`${window.location.origin}/?ref=${profile.referral_code}`}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const url = `${window.location.origin}/?ref=${profile.referral_code}`;
                          navigator.clipboard?.writeText(url);
                          setCopiedLink(true);
                          setTimeout(() => setCopiedLink(false), 2500);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-all"
                      >
                        {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedLink ? 'Link Copied!' : 'Copy Invite Link'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`🚂 Bhai Railway ALP / Group D / CBT-2 ke 86+ Official Shifts bilkul real TCS iON CBT interface mein FREE practice karne ke liye mere invite link se join karo 👇\n${window.location.origin}/?ref=${profile.referral_code}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share on WhatsApp</span>
                      </a>
                      <a
                        href={`https://t.me/share/url?url=${encodeURIComponent(`${window.location.origin}/?ref=${profile.referral_code}`)}&text=${encodeURIComponent('🚂 Railway ALP / Group D 86+ Official CBT Mock Tests Free Practice 👇')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/40 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Share on Telegram</span>
                      </a>
                    </div>

                    {referralsList.length > 0 && (
                      <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                        <div className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-teal-400" />
                          <span>Friends Joined via Your Link ({referralsList.length})</span>
                        </div>
                        <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
                          {referralsList.map((r) => (
                            <div
                              key={r.id}
                              className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px]"
                            >
                              <span className="text-slate-300 font-mono">{maskEmail(r.referred_email)}</span>
                              <span
                                className={`px-2 py-0.5 rounded font-bold text-[10px] uppercase ${
                                  r.status === 'verified'
                                    ? 'bg-emerald-500/20 text-emerald-300'
                                    : 'bg-amber-500/20 text-amber-300'
                                }`}
                              >
                                {r.status === 'verified' ? 'Verified ✓' : 'Pending Verify'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-xs text-slate-400">
                    Referral link generate ho raha hai — upar refresh icon dabakar reload karein.
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end">
                <button
                  onClick={onLogout}
                  className="px-4 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}

          {/* HISTORY TAB */}
          {activeTab === 'history' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">Completed Mock Tests ({attempts.length})</h3>
                <button
                  onClick={fetchTestHistory}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingHistory ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {loadingHistory ? (
                <div className="py-10 text-center text-xs text-slate-400">Loading your test history...</div>
              ) : attempts.length === 0 ? (
                <div className="py-10 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
                  Abhi tak aapne koi mock test submit nahi kiya hai. Pehla mock test attempt karein!
                </div>
              ) : (
                <div className="space-y-2.5">
                  {attempts.map((a) => (
                    <div key={a.id} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold text-white">{a.test_title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {new Date(a.created_at).toLocaleString('en-IN')} • Accuracy: <b className="text-teal-300">{a.accuracy}%</b>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs shrink-0">
                        <div className="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                          Score: {a.score} / {a.total_marks}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          ✓{a.correct_count} • ✗{a.wrong_count}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ADMIN TAB */}
          {activeTab === 'admin' && isAdmin && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">UPI / Payment Requests</h3>
                  <p className="text-[11px] text-slate-400">Verify 12-digit UTR in your bank/UPI app and click Approve to unlock Pass Pro for that user.</p>
                </div>
                <button
                  onClick={fetchAdminPayments}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingPayments ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {adminMsg && (
                <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-bold">
                  {adminMsg}
                </div>
              )}

              {loadingPayments ? (
                <div className="py-10 text-center text-xs text-slate-400">Loading payment requests...</div>
              ) : payments.length === 0 ? (
                <div className="py-10 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
                  No payment requests yet.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {payments.map((p) => (
                    <div key={p.id} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{p.user_email}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            p.status === 'approved'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : p.status === 'rejected'
                              ? 'bg-rose-500/20 text-rose-300'
                              : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {p.status}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 font-mono">
                          UTR/Ref: <b className="text-amber-300">{p.utr_or_payment_id}</b> • ₹{p.amount}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {new Date(p.created_at).toLocaleString('en-IN')}
                        </div>
                      </div>

                      {p.status === 'pending' && (
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            disabled={actionLoadingId === p.id}
                            onClick={() => handleVerifyPayment(p.id, true)}
                            className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs cursor-pointer disabled:opacity-50"
                          >
                            Approve ✓
                          </button>
                          <button
                            disabled={actionLoadingId === p.id}
                            onClick={() => handleVerifyPayment(p.id, false)}
                            className="px-3 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/30 font-bold text-xs cursor-pointer disabled:opacity-50"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
