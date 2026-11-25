import React from 'react';
import { Trophy, Users, TrendingUp, Award, RefreshCw, LogIn, Share2, Crown } from 'lucide-react';

export default function ShiftLeaderboardTab({
  test,
  finalScore,
  user,
  leaderboard,
  loading,
  error,
  onRefresh,
  onOpenAuth,
}) {
  const formatTime = (secs = 0) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const toppers = leaderboard?.toppers || [];
  const totalParticipants = leaderboard?.total_participants ?? 0;

  const challengeText = `🚂 Maine abhi RailwayPrep par "${test.title}" mein ${finalScore}/${test.maxMarks} score kiya! Tumhara kitna score aata hai check karo 👇\n${window.location.origin}/`;

  return (
    <div className="space-y-5">
      {/* Header Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <Users className="w-3.5 h-3.5 text-teal-400" />
            <span>Total Aspirants</span>
          </div>
          <div className="text-xl font-black text-white mt-1">
            {loading && !leaderboard ? '...' : totalParticipants}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Shift Topper</span>
          </div>
          <div className="text-xl font-black text-amber-400 mt-1">
            {leaderboard?.top_score !== null && leaderboard?.top_score !== undefined
              ? `${leaderboard.top_score}`
              : `${finalScore}`}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Average Score</span>
          </div>
          <div className="text-xl font-black text-emerald-400 mt-1">
            {leaderboard?.avg_score !== null && leaderboard?.avg_score !== undefined
              ? `${leaderboard.avg_score}`
              : '—'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>Your Live Rank</span>
          </div>
          <div className="text-xl font-black text-teal-300 mt-1">
            {leaderboard?.user_rank ? `#${leaderboard.user_rank}` : '#1'}
          </div>
        </div>
      </div>

      {/* Guest Save Prompt */}
      {!user && onOpenAuth && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/40 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-200 text-center sm:text-left">
            <strong className="text-teal-300">Guest Mode:</strong> Aapka score <b className="text-white">{finalScore}/{test.maxMarks}</b> abhi Leaderboard par save nahi hua hai. Apna naam Toppers list me laane ke liye free Login karein!
          </div>
          <button
            type="button"
            onClick={() => onOpenAuth('Apna Test Score & Rank All-India Leaderboard par save karne ke liye 1-Click Google Login karein:')}
            className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Save Score on Leaderboard</span>
          </button>
        </div>
      )}

      {/* Leaderboard List Card */}
      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-black text-white">Live Shift Toppers (Top 10)</h3>
          </div>
          <button
            type="button"
            onClick={onRefresh}
            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {error ? (
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
            Live leaderboard abhi database sync hone ke baad active hoga. Tab tak apna Score, Cutoff Meter aur Solutions review karein!
          </div>
        ) : loading && toppers.length === 0 ? (
          <div className="py-10 text-center text-xs text-slate-400">Loading live shift toppers...</div>
        ) : toppers.length === 0 ? (
          <div className="py-8 px-4 text-center rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="text-sm font-bold text-white">
              Is shift par aap pehle toppers me se ek hain! 🏆
            </div>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Apne Telegram/WhatsApp study group me doston ko challenge karein taaki is shift ka Live All-India competition aur tez ho!
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {toppers.map((entry) => {
              const rankBadge =
                entry.rank === 1
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : entry.rank === 2
                  ? 'bg-slate-300/15 text-slate-200 border-slate-400/40'
                  : entry.rank === 3
                  ? 'bg-orange-500/20 text-orange-300 border-orange-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700';

              const medal =
                entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`;

              return (
                <div
                  key={`${entry.rank}-${entry.display_name}-${entry.score}`}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                    entry.is_me
                      ? 'bg-teal-950/50 border-teal-500/60 shadow-md shadow-teal-950/40'
                      : 'bg-slate-950/60 border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-9 h-8 rounded-lg border font-black flex items-center justify-center shrink-0 ${rankBadge}`}>
                      {medal}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white truncate">{entry.display_name}</span>
                        {entry.is_me && (
                          <span className="px-1.5 py-0.5 rounded bg-teal-500 text-slate-950 text-[10px] font-black uppercase">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Accuracy: <b className="text-emerald-400">{entry.accuracy}%</b> • Time: {formatTime(entry.time_taken_seconds)}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-black text-teal-300">{entry.score}</div>
                    <div className="text-[10px] text-slate-500">/ {entry.total_marks || test.maxMarks}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* WhatsApp Challenge Friends CTA */}
        <div className="pt-2 flex justify-end">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(challengeText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Challenge Friends on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
