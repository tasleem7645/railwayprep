import React, { useState, useEffect, useMemo } from 'react';
import { Trophy, Clock, Users, Zap, Crown, ArrowRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import {
  getWeeklyMegaMockStatus,
  createLiveMegaTestPayload,
  formatCountdownParts,
  getLiveMegaAttemptLocal,
} from '../utils/liveMegaMock';

export default function LiveMegaBanner({
  railwayTests = [],
  onStartLiveMega,
  onOpenMegaResult,
  loadingTestId = null,
}) {
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [liveStats, setLiveStats] = useState(null);
  const [showToppers, setShowToppers] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const megaStatus = useMemo(
    () => getWeeklyMegaMockStatus(railwayTests, nowMs),
    [railwayTests, Math.floor(nowMs / 60000)]
  );

  const countdown = formatCountdownParts(
    megaStatus.isWeekendLive
      ? Math.max(0, megaStatus.endsAtMs - nowMs)
      : Math.max(0, megaStatus.startsAtMs - nowMs)
  );

  const activeLeaderboardId = megaStatus.isWeekendLive
    ? megaStatus.liveTestId
    : megaStatus.prevLiveTestId;
  const activeShift = megaStatus.isWeekendLive
    ? megaStatus.baseShift
    : megaStatus.prevBaseShift;
  const localAttempt = getLiveMegaAttemptLocal(megaStatus.liveTestId);
  const prevLocalAttempt = getLiveMegaAttemptLocal(megaStatus.prevLiveTestId);

  useEffect(() => {
    if (!activeLeaderboardId) return;
    let cancelled = false;
    supabase
      .rpc('get_shift_leaderboard', { p_test_id: activeLeaderboardId, p_user_score: null })
      .then(({ data }) => {
        if (!cancelled && data) setLiveStats(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [activeLeaderboardId]);

  if (!megaStatus.baseShift) return null;

  const handleLaunchWeekendMock = () => {
    const targetShift = megaStatus.isWeekendLive ? megaStatus.baseShift : megaStatus.baseShift;
    const targetEventId = megaStatus.isWeekendLive ? megaStatus.liveTestId : megaStatus.liveTestId;
    const payload = createLiveMegaTestPayload(targetShift, targetEventId, megaStatus.weekKey);
    if (payload && onStartLiveMega) {
      onStartLiveMega(payload);
    }
  };

  const handleOpenRanklistView = () => {
    const attemptToOpen = megaStatus.isWeekendLive ? localAttempt : prevLocalAttempt;
    if (attemptToOpen && onOpenMegaResult && activeShift) {
      const payload = createLiveMegaTestPayload(
        activeShift,
        activeLeaderboardId,
        megaStatus.isWeekendLive ? megaStatus.weekKey : megaStatus.prevWeekKey
      );
      onOpenMegaResult(payload, attemptToOpen);
    } else {
      setShowToppers((prev) => !prev);
    }
  };

  const participantsCount = liveStats?.total_participants ?? 0;
  const toppers = liveStats?.toppers || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div
        className={`rounded-3xl border p-4 sm:p-6 shadow-xl transition-all ${
          megaStatus.isWeekendLive
            ? 'bg-gradient-to-r from-amber-950/55 via-slate-900 to-rose-950/40 border-amber-500/45'
            : 'bg-gradient-to-r from-indigo-950/45 via-slate-900 to-teal-950/35 border-indigo-500/35'
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border ${
                  megaStatus.isWeekendLive
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/45 animate-pulse'
                    : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                }`}
              >
                <Crown className="w-3 h-3" />
                <span>
                  {megaStatus.isWeekendLive
                    ? 'ALL-INDIA WEEKEND MEGA LIVE NOW'
                    : 'NEXT SAT–SUN ALL-INDIA LIVE MOCK'}
                </span>
              </span>

              {participantsCount > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-[11px] font-bold text-teal-300 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>{participantsCount} Aspirants Joined</span>
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-xl font-black text-white">
              {megaStatus.baseShift.title}
            </h3>
            <p className="text-xs text-slate-300">
              {megaStatus.isWeekendLive
                ? '100% Free for All Aspirants (Sat–Sun Window) • Submit karke turant All-India Rank, Percentile & Zone Cutoff check karein!'
                : 'Har Saturday–Sunday All-India Level Mega Test live hota hai — pichhle weekend ka topper ranklist dekhein ya practice shuru karein.'}
            </p>
          </div>

          {/* Right Countdown + CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className="px-3.5 py-2 rounded-2xl bg-slate-950/90 border border-slate-800 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase flex items-center justify-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>{megaStatus.isWeekendLive ? 'Window Closes In' : 'Live Starts In'}</span>
              </div>
              <div className="text-sm sm:text-base font-black font-mono text-amber-300 mt-0.5">
                {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {megaStatus.isWeekendLive && !localAttempt && (
                <button
                  type="button"
                  onClick={handleLaunchWeekendMock}
                  disabled={Boolean(loadingTestId)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-lg cursor-pointer flex items-center gap-1.5"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Join Live Mega Test</span>
                </button>
              )}

              {megaStatus.isWeekendLive && localAttempt && (
                <button
                  type="button"
                  onClick={handleOpenRanklistView}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Trophy className="w-4 h-4" />
                  <span>My AIR & Solutions ({localAttempt.score})</span>
                </button>
              )}

              {!megaStatus.isWeekendLive && (
                <button
                  type="button"
                  onClick={handleLaunchWeekendMock}
                  disabled={Boolean(loadingTestId)}
                  className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Early Practice Shift</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowToppers((prev) => !prev)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs cursor-pointer flex items-center gap-1"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>AIR Toppers</span>
                {showToppers ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Live AIR Ranklist Preview */}
        {showToppers && (
          <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-black text-amber-300 flex items-center gap-1.5">
                <Trophy className="w-4 h-4" />
                <span>
                  {megaStatus.isWeekendLive ? 'Current Weekend Live Toppers' : 'Last Weekend AIR Toppers'}
                </span>
              </span>
              {liveStats?.avg_score != null && (
                <span className="text-[11px] text-slate-400">
                  Avg Score: <b className="text-white">{liveStats.avg_score}</b> • Top:{' '}
                  <b className="text-amber-300">{liveStats.top_score}</b>
                </span>
              )}
            </div>

            {toppers.length === 0 ? (
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                Abhi tak is weekend window me submissions record ho rahe hain — pehla Live Rank #1 claim karne ke liye test submit karein!
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                {toppers.slice(0, 5).map((t) => (
                  <div
                    key={t.rank}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                      t.is_me
                        ? 'bg-teal-500/15 border-teal-500/50 text-teal-200'
                        : 'bg-slate-950/70 border-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="font-black text-amber-300 mr-1.5">#{t.rank}</span>
                      <span className="font-bold truncate">{t.display_name}</span>
                    </div>
                    <div className="font-black text-emerald-300 shrink-0 ml-2">
                      {t.score}/{t.total_marks}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
