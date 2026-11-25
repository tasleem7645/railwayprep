import React, { useState, useEffect, useMemo } from 'react';
import {
  X, User, Crown, LogOut, Trophy, Clock, CheckCircle2, XCircle,
  ShieldCheck, RefreshCw, Sparkles, Calendar, AlertCircle,
  Copy, Check, Share2, Send, Gift, Users, Flame, Flag, Trash2,
  BarChart3, Target, Cloud, TrendingUp, Eye, Zap
} from 'lucide-react';
import { supabase, isUserAdmin } from '../lib/supabaseClient';
import { STREAK_BADGES, getStudyStreak } from '../utils/studyStreak';
import { RAILWAY_TESTS } from '../data/mockTestData';
import { analyzeWeakTopics, readTopicStats } from '../utils/topicPerformance';
import { loadPyqProgress } from '../utils/pyqProgress';
import { pushStudyStateToCloud, getLocalCloudPayload } from '../utils/cloudStudySync';

const OFFICIAL_TEST_IDS = new Set(RAILWAY_TESTS.map((t) => t.id));

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
  studyStreak = null,
  cloudSyncState = null,
  onCloudSyncUpdated,
  onReopenAttempt,
  reopeningAttemptId = null,
  onLaunchWeakTopicDrill,
  onClose,
  onLogout,
  onOpenPassPro,
  onRefreshProfile
}) {
  const streakInfo = studyStreak || getStudyStreak();
  const isAdmin = isUserAdmin(user);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'analytics' | 'history' | 'admin'
  const [attempts, setAttempts] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [syncingCloudNow, setSyncingCloudNow] = useState(false);

  const analyticsReport = useMemo(() => {
    let mistakes = [];
    try {
      const parsed = JSON.parse(localStorage.getItem('railwayprep_mistake_notebook') || '[]');
      mistakes = Array.isArray(parsed) ? parsed : [];
    } catch (e) {}
    return analyzeWeakTopics({
      topicStats: readTopicStats(),
      mistakes,
      pyqProgress: loadPyqProgress(),
      testAttempts: attempts,
    });
  }, [attempts, activeTab, cloudSyncState?.syncedAt]);

  // Referral link & friends list state
  const [copiedLink, setCopiedLink] = useState(false);
  const [referralsList, setReferralsList] = useState([]);
  const [loadingReferrals, setLoadingReferrals] = useState(false);

  // Admin state
  const [adminSubTab, setAdminSubTab] = useState('payments'); // 'payments' | 'reports'
  const [payments, setPayments] = useState([]);
  const [loadingPayments, setLoadingPayments] = useState(false);
  const [questionReports, setQuestionReports] = useState([]);
  const [loadingReports, setLoadingReports] = useState(false);
  const [reportFilter, setReportFilter] = useState('open'); // 'open' | 'all'
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [adminMsg, setAdminMsg] = useState('');

  useEffect(() => {
    if (activeTab === 'profile' && user?.id) {
      fetchMyReferrals();
    }
    if ((activeTab === 'history' || activeTab === 'analytics') && user?.id) {
      fetchTestHistory();
    }
    if (activeTab === 'admin' && isAdmin) {
      fetchAdminPayments();
      fetchAdminReports();
    }
  }, [activeTab, user?.id, isAdmin]);

  const handleManualCloudSync = async () => {
    if (!user?.id || syncingCloudNow) return;
    setSyncingCloudNow(true);
    try {
      const ok = await pushStudyStateToCloud(user.id);
      if (onCloudSyncUpdated) {
        onCloudSyncUpdated({ status: ok ? 'synced' : 'error', syncedAt: ok ? Date.now() : cloudSyncState?.syncedAt || null });
      }
    } finally {
      setSyncingCloudNow(false);
    }
  };

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

  const fetchAdminReports = async () => {
    setLoadingReports(true);
    try {
      const { data, error } = await supabase
        .from('question_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(80);
      if (!error && data) {
        setQuestionReports(data);
      }
    } catch (e) {
      console.warn('Error fetching question reports:', e);
    } finally {
      setLoadingReports(false);
    }
  };

  const handleUpdateReportStatus = async (reportId, nextStatus) => {
    setActionLoadingId(reportId);
    setAdminMsg('');
    try {
      const { error } = await supabase
        .from('question_reports')
        .update({
          status: nextStatus,
          resolved_at: nextStatus === 'open' ? null : new Date().toISOString(),
        })
        .eq('id', reportId);
      if (error) throw error;
      setAdminMsg(
        nextStatus === 'resolved'
          ? '✅ Question report marked Resolved.'
          : nextStatus === 'dismissed'
          ? 'Report dismissed.'
          : 'Report reopened.'
      );
      await fetchAdminReports();
    } catch (err) {
      setAdminMsg(`Report Error: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDeleteReport = async (reportId) => {
    setActionLoadingId(reportId);
    setAdminMsg('');
    try {
      const { error } = await supabase.from('question_reports').delete().eq('id', reportId);
      if (error) throw error;
      setQuestionReports((prev) => prev.filter((r) => r.id !== reportId));
      setAdminMsg('🗑️ Report deleted from queue.');
    } catch (err) {
      setAdminMsg(`Delete Error: ${err.message}`);
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
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-indigo-500 to-teal-400 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Weak Topic Radar</span>
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
              <span>Admin Queue</span>
              {questionReports.filter((r) => r.status === 'open').length > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black leading-none">
                  {questionReports.filter((r) => r.status === 'open').length}
                </span>
              )}
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

              {/* Study Streak & Aspirant Milestone Badges */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-amber-500/25 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-4 h-4 ${streakInfo.activeStreak > 0 ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
                    <span className="text-xs font-black text-white uppercase tracking-wide">Daily Study Streak & Badges</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold">
                    <span className="text-amber-300">🔥 Current: {streakInfo.activeStreak}d</span>
                    <span className="text-slate-400">Best: {streakInfo.bestStreak}d</span>
                    <span className="text-teal-300">Sets: {streakInfo.totalSessions}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {STREAK_BADGES.map((b) => {
                    const earned = streakInfo.unlockedBadges?.includes(b.id);
                    return (
                      <div
                        key={b.id}
                        title={b.desc}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          earned
                            ? 'bg-amber-500/15 border-amber-500/40 text-white shadow-sm'
                            : 'bg-slate-950/60 border-slate-800/80 text-slate-500 opacity-65'
                        }`}
                      >
                        <div className="text-lg">{b.icon}</div>
                        <div className="text-[10px] font-black mt-0.5 truncate">{b.title}</div>
                        <div className="text-[9px] leading-tight mt-0.5">{earned ? 'Unlocked ✓' : b.desc}</div>
                      </div>
                    );
                  })}
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

              {/* Multi-Device Cloud Study Sync Card */}
              {(() => {
                const payload = getLocalCloudPayload();
                const realMistakesCount = (payload.mistakes_json || []).filter(
                  (m) => m && !String(m.id || '').startsWith('sample_')
                ).length;
                const pyqSolvedCount = Object.keys(payload.pyq_progress_json?.attempts || {}).length;
                const pyqSavedCount = Object.keys(payload.pyq_progress_json?.bookmarks || {}).length;
                const topicsCount = Object.keys(payload.streak_json?.topicStats || {}).length;
                const syncStatus = cloudSyncState?.status || 'ready';
                const syncedTimeText = cloudSyncState?.syncedAt
                  ? new Date(cloudSyncState.syncedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
                  : null;

                return (
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Cloud className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-black text-white uppercase tracking-wide">
                          Multi-Device Cloud Study Sync
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            syncStatus === 'syncing'
                              ? 'bg-amber-500/20 text-amber-300'
                              : syncStatus === 'error'
                              ? 'bg-rose-500/20 text-rose-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          {syncStatus === 'syncing'
                            ? 'Syncing...'
                            : syncStatus === 'error'
                            ? 'Offline / Pending'
                            : syncedTimeText
                            ? `Synced ✓ ${syncedTimeText}`
                            : 'Cloud Ready'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Mistakes ({realMistakesCount}) • PYQs ({pyqSolvedCount} solved, {pyqSavedCount} ★) • Topics ({topicsCount}) • Streak ({streakInfo.activeStreak}d) kisi bhi phone/laptop par login karte hi auto-sync honge.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleManualCloudSync}
                      disabled={syncingCloudNow}
                      className="px-3.5 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/35 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shrink-0 disabled:opacity-60"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${syncingCloudNow ? 'animate-spin' : ''}`} />
                      <span>{syncingCloudNow ? 'Syncing...' : 'Sync Now'}</span>
                    </button>
                  </div>
                );
              })()}

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

          {/* ANALYTICS & WEAK TOPIC RADAR TAB */}
          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-black text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-teal-400" />
                    <span>Smart Weak-Topic Radar & Performance Analytics</span>
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Mock Tests + PYQ Explorer + गलती डायरी se automatic kamzor topics ki pehchan
                  </p>
                </div>
                <button
                  type="button"
                  onClick={fetchTestHistory}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className={`w-3 h-3 ${loadingHistory ? 'animate-spin' : ''}`} />
                  <span>Refresh Radar</span>
                </button>
              </div>

              {/* Top KPI Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-semibold">Mocks Attempted</div>
                  <div className="text-lg font-black text-white mt-0.5">{analyticsReport.summary.totalMocks}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-semibold">Avg Accuracy</div>
                  <div className="text-lg font-black text-teal-300 mt-0.5">{analyticsReport.summary.avgAccuracy}%</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-semibold">Best Mock Score</div>
                  <div className="text-lg font-black text-amber-300 mt-0.5">{analyticsReport.summary.bestScoreText}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-semibold">PYQs / Mistakes</div>
                  <div className="text-lg font-black text-sky-300 mt-0.5">
                    {analyticsReport.summary.pyqsPracticed}{' '}
                    <span className="text-xs font-bold text-rose-300">/ {analyticsReport.summary.activeMistakesCount} ✗</span>
                  </div>
                </div>
              </div>

              {/* Last 6 Mock Tests Accuracy Trend */}
              {analyticsReport.recentTrend.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-black text-white flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Recent Mock Tests Accuracy Trend</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Last {analyticsReport.recentTrend.length} attempts</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 items-end pt-1">
                    {analyticsReport.recentTrend.map((t) => {
                      const barColor =
                        t.accuracy >= 75 ? 'bg-emerald-500' : t.accuracy >= 50 ? 'bg-amber-500' : 'bg-rose-500';
                      return (
                        <div key={t.id} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] font-black">
                            <span className="text-white">{t.accuracy}%</span>
                            <span className="text-[10px] text-slate-400 font-semibold">{t.score}/{t.totalMarks}</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${barColor}`}
                              style={{ width: `${Math.max(8, Math.min(100, t.accuracy))}%` }}
                            />
                          </div>
                          <div className="text-[10px] text-slate-400 truncate" title={t.label}>{t.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Subject-Wise Mastery Breakdown */}
              {analyticsReport.subjectStats.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-black text-white">Subject-Wise Mastery Breakdown</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {analyticsReport.subjectStats.map((s) => {
                      const badgeCls =
                        s.status === 'strong'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : s.status === 'average'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-300 border-rose-500/30';
                      const barCls =
                        s.status === 'strong'
                          ? 'bg-emerald-500'
                          : s.status === 'average'
                          ? 'bg-amber-500'
                          : 'bg-rose-500';
                      return (
                        <div key={s.subject} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-white truncate">{s.subject}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase ${badgeCls}`}>
                              {s.total > 0 ? `${s.accuracy}% (${s.status})` : `${s.mistakeBacklog} Mistakes`}
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${barCls}`}
                              style={{ width: `${s.total > 0 ? Math.max(8, s.accuracy) : 15}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400">
                            <span>✓ {s.correct} Right • ✗ {s.wrong} Wrong</span>
                            {s.mistakeBacklog > 0 && (
                              <span className="text-rose-300 font-semibold">{s.mistakeBacklog} in डायरी</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Actionable Weak Topics Radar */}
              {analyticsReport.weakTopics.length > 0 ? (
                <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/30 via-slate-900 to-slate-900 border border-rose-500/30 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span className="text-xs font-black text-white uppercase tracking-wide">
                        Priority Weak Topics ({analyticsReport.weakTopics.length}) — Turant Sudharein
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {analyticsReport.weakTopics.map((w) => (
                      <div
                        key={`${w.subject}-${w.topic}`}
                        className="p-3 rounded-xl bg-slate-950/75 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="min-w-0 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                              {w.subject}
                            </span>
                            <span className="text-xs font-bold text-white truncate">{w.topic}</span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Accuracy: <b className="text-rose-300">{w.accuracy}%</b>
                            {w.total > 0 && ` (${w.correct}/${w.total} right)`}
                            {w.mistakeCount > 0 && ` • ${w.mistakeCount} saved mistakes`}
                          </div>
                        </div>
                        {onLaunchWeakTopicDrill && (
                          <button
                            type="button"
                            onClick={() => onLaunchWeakTopicDrill(w)}
                            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-[11px] font-black flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-md"
                          >
                            <Zap className="w-3.5 h-3.5" />
                            <span>Practice Weak Topic</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center space-y-2">
                  <Target className="w-7 h-7 text-teal-400 mx-auto opacity-80" />
                  <div className="text-xs font-bold text-white">Weak-Topic Radar Taiyar Ho Raha Hai</div>
                  <p className="text-[11px] text-slate-400 max-w-md mx-auto">
                    Jaise hi aap 1 Mock Test ya 5-10 PYQs solve karenge, aapke kamzor chapters aur subject accuracy bars yahan automatically dikhne lagenge.
                  </p>
                </div>
              )}

              {/* Strong Topics Badges */}
              {analyticsReport.strongTopics.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-emerald-500/25 space-y-2.5">
                  <div className="text-xs font-black text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Strong Topics Mastery (75%+ Accuracy)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {analyticsReport.strongTopics.map((st) => (
                      <div
                        key={`${st.subject}-${st.topic}`}
                        className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-200 font-bold"
                      >
                        {st.topic} <span className="text-emerald-400 ml-1">({st.accuracy}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                  {attempts.map((a) => {
                    const canReopen = Boolean(onReopenAttempt && OFFICIAL_TEST_IDS.has(a.test_id) && a.answers_json);
                    const isOpeningThis = reopeningAttemptId === a.id;
                    return (
                      <div key={a.id} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">{a.test_title}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {new Date(a.created_at).toLocaleString('en-IN')} • Accuracy: <b className="text-teal-300">{a.accuracy}%</b>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5 text-xs shrink-0">
                          <div className="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                            Score: {a.score} / {a.total_marks}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            ✓{a.correct_count} • ✗{a.wrong_count}
                          </div>
                          {canReopen && (
                            <button
                              type="button"
                              onClick={() => onReopenAttempt(a)}
                              disabled={Boolean(reopeningAttemptId)}
                              className="px-3 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border border-teal-500/35 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-60 transition-colors"
                            >
                              {isOpeningThis ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Eye className="w-3.5 h-3.5" />
                              )}
                              <span>{isOpeningThis ? 'Loading...' : 'View Solutions & Rank'}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ADMIN TAB */}
          {activeTab === 'admin' && isAdmin && (
            <div className="space-y-4">
              {/* Admin Sub-Tabs: Payment Approvals vs Question Error Queue */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAdminSubTab('payments')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                      adminSubTab === 'payments'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    UPI Approvals ({payments.filter((p) => p.status === 'pending').length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminSubTab('reports')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                      adminSubTab === 'reports'
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>
                      Question Error Queue ({questionReports.filter((r) => r.status === 'open').length} Open)
                    </span>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => (adminSubTab === 'payments' ? fetchAdminPayments() : fetchAdminReports())}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${
                      adminSubTab === 'payments'
                        ? loadingPayments
                          ? 'animate-spin'
                          : ''
                        : loadingReports
                        ? 'animate-spin'
                        : ''
                    }`}
                  />
                </button>
              </div>

              {adminMsg && (
                <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-bold">
                  {adminMsg}
                </div>
              )}

              {adminSubTab === 'payments' ? (
                <>
                  <div>
                    <h3 className="text-sm font-bold text-white">UPI / Payment Requests</h3>
                    <p className="text-[11px] text-slate-400">
                      Verify 12-digit UTR in your bank/UPI app and click Approve to unlock Pass Pro for that user.
                    </p>
                  </div>

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
                </>
              ) : (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-white">Reported Question Error Queue</h3>
                      <p className="text-[11px] text-slate-400">
                        Students dwara report ki gayi answer key, Hindi translation, aur diagram errors verify karein.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[
                        { id: 'open', label: `Open (${questionReports.filter((r) => r.status === 'open').length})` },
                        { id: 'all', label: `All (${questionReports.length})` },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setReportFilter(f.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer ${
                            reportFilter === f.id
                              ? 'bg-teal-500 text-slate-950'
                              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {loadingReports ? (
                    <div className="py-10 text-center text-xs text-slate-400">Loading question reports...</div>
                  ) : questionReports.filter((r) => reportFilter === 'all' || r.status === 'open').length === 0 ? (
                    <div className="py-10 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
                      Koi {reportFilter === 'open' ? 'open ' : ''}question error report nahi hai. Sab clean hai!
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {questionReports
                        .filter((r) => reportFilter === 'all' || r.status === 'open')
                        .map((r) => (
                          <div
                            key={r.id}
                            className="p-4 rounded-2xl bg-slate-900/75 border border-slate-800 space-y-2.5"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/35 text-amber-300 text-[10px] font-bold">
                                  {r.issue_type}
                                </span>
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                    r.status === 'resolved'
                                      ? 'bg-emerald-500/20 text-emerald-300'
                                      : r.status === 'dismissed'
                                      ? 'bg-slate-800 text-slate-400'
                                      : 'bg-rose-500/20 text-rose-300'
                                  }`}
                                >
                                  {r.status}
                                </span>
                                {r.question_no != null && (
                                  <span className="text-[11px] font-mono text-teal-300">Q.{r.question_no}</span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-500 font-mono">
                                UID: {r.question_uid}
                              </span>
                            </div>

                            {r.shift_title && (
                              <div className="text-xs font-bold text-white">{r.shift_title}</div>
                            )}

                            {r.question_preview && (
                              <p className="text-[11px] text-slate-300 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 line-clamp-2">
                                {r.question_preview}
                              </p>
                            )}

                            {r.issue_note && (
                              <div className="text-xs text-amber-200/90 bg-amber-950/25 px-3 py-2 rounded-xl border border-amber-500/20">
                                <strong className="text-amber-300">Note: </strong>
                                {r.issue_note}
                              </div>
                            )}

                            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[10px] text-slate-400">
                              <span>
                                By: <b className="text-slate-300">{r.reporter_email || 'Guest'}</b> •{' '}
                                {new Date(r.created_at).toLocaleString('en-IN')}
                              </span>

                              <div className="flex items-center gap-1.5">
                                {r.status === 'open' ? (
                                  <>
                                    <button
                                      type="button"
                                      disabled={actionLoadingId === r.id}
                                      onClick={() => handleUpdateReportStatus(r.id, 'resolved')}
                                      className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black cursor-pointer disabled:opacity-50"
                                    >
                                      Resolve ✓
                                    </button>
                                    <button
                                      type="button"
                                      disabled={actionLoadingId === r.id}
                                      onClick={() => handleUpdateReportStatus(r.id, 'dismissed')}
                                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold cursor-pointer disabled:opacity-50"
                                    >
                                      Dismiss
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    type="button"
                                    disabled={actionLoadingId === r.id}
                                    onClick={() => handleUpdateReportStatus(r.id, 'open')}
                                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold cursor-pointer disabled:opacity-50"
                                  >
                                    Reopen
                                  </button>
                                )}
                                <button
                                  type="button"
                                  disabled={actionLoadingId === r.id}
                                  onClick={() => handleDeleteReport(r.id)}
                                  className="p-1 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/30 cursor-pointer disabled:opacity-50"
                                  title="Delete Report"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
