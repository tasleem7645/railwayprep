import React, { useState, useEffect } from 'react';
import { X, Share2, Download, Copy, Check, Send, Sparkles, Flame } from 'lucide-react';
import { generateScoreCardImage } from '../utils/scoreCardGenerator';

export default function ShareScoreCardModal({
  test,
  score,
  accuracy,
  correctCount,
  wrongCount,
  timeTakenText,
  percentile,
  rankLabel,
  cutoffInfo,
  user,
  profile,
  studyStreak,
  onClose,
}) {
  const [cardAsset, setCardAsset] = useState(null);
  const [generating, setGenerating] = useState(true);
  const [copiedCaption, setCopiedCaption] = useState(false);

  const refCode = profile?.referral_code || '';
  const inviteUrl = refCode
    ? `${window.location.origin}/?ref=${refCode}`
    : `${window.location.origin}/`;

  const studentName =
    profile?.full_name ||
    user?.user_metadata?.full_name ||
    user?.email?.split('@')[0] ||
    'Railway Aspirant';

  const shareCaption = `🚂 Maine abhi RailwayPrep par "${test.title}" mein ${score}/${test.maxMarks} (${accuracy}% Accuracy${rankLabel ? `, ${rankLabel}` : ''}) score kiya! 🔥\n\nKya tum mujhe beat kar sakte ho? Free Official Railway CBT Mock Test try karo 👇\n${inviteUrl}`;

  useEffect(() => {
    let active = true;
    setGenerating(true);
    generateScoreCardImage({
      testTitle: test.title,
      score,
      maxMarks: test.maxMarks,
      accuracy,
      correctCount,
      wrongCount,
      timeTakenText,
      percentile,
      rankLabel,
      cutoffBadge: cutoffInfo?.badge,
      cutoffText: cutoffInfo?.shortText,
      cutoffStatus: cutoffInfo?.status,
      studentName,
      streakDays: studyStreak?.activeStreak || 0,
      inviteUrl,
    })
      .then((res) => {
        if (active) {
          setCardAsset(res);
          setGenerating(false);
        }
      })
      .catch(() => {
        if (active) setGenerating(false);
      });
    return () => {
      active = false;
    };
  }, [test.id, score, accuracy, rankLabel, cutoffInfo?.badge]);

  const handleDownload = () => {
    if (!cardAsset?.dataUrl) return;
    const a = document.createElement('a');
    a.href = cardAsset.dataUrl;
    a.download = cardAsset.fileName || 'RailwayPrep_ScoreCard.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleNativeImageShare = async () => {
    if (!cardAsset?.blob) return;
    try {
      const file = new File([cardAsset.blob], 'RailwayPrep_ScoreCard.png', {
        type: 'image/png',
      });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `My RailwayPrep Score: ${score}/${test.maxMarks}`,
          text: shareCaption,
          files: [file],
        });
        return;
      }
    } catch (err) {
      if (err?.name === 'AbortError') return;
    }
    // Fallback for desktop browsers: open WhatsApp text share + trigger download
    handleDownload();
    window.open(`https://wa.me/?text=${encodeURIComponent(shareCaption)}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyCaption = () => {
    navigator.clipboard?.writeText(shareCaption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="max-w-lg w-full bg-[#090D1A] border border-teal-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase mb-1.5">
            <Sparkles className="w-3 h-3" />
            <span>WhatsApp Status & Telegram Ready</span>
          </div>
          <h3 className="text-lg font-black text-white">Share Your Official Score Card</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {refCode
              ? `Aapka Invite Link (?ref=${refCode}) card me auto-attached hai — friends join karenge toh 4 Referrals count badhega!`
              : 'Apne WhatsApp Status ya Telegram group me image share karke doston ko challenge karein!'}
          </p>
        </div>

        {/* Live Image Card Preview */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-2.5 mb-4 flex items-center justify-center">
          {generating ? (
            <div className="py-24 text-xs text-slate-400 flex flex-col items-center gap-2">
              <span className="w-5 h-5 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
              <span>Designing HD Score Card...</span>
            </div>
          ) : cardAsset?.dataUrl ? (
            <img
              src={cardAsset.dataUrl}
              alt="RailwayPrep Score Card Preview"
              className="max-h-[46vh] w-auto rounded-xl shadow-xl object-contain"
            />
          ) : (
            <div className="py-12 text-xs text-slate-400">Preview unavailable — use WhatsApp Share below!</div>
          )}
        </div>

        {/* Share Action Buttons */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={handleNativeImageShare}
            disabled={generating}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 cursor-pointer disabled:opacity-60 transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Image on WhatsApp Status / Apps</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleDownload}
              disabled={!cardAsset?.dataUrl}
              className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PNG Card</span>
            </button>

            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${encodeURIComponent(shareCaption)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/40 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Share on Telegram</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopyCaption}
            className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCaption ? 'Result Caption & Link Copied!' : 'Copy Result Message & Invite Link'}</span>
          </button>
        </div>

        {studyStreak?.activeStreak >= 1 && (
          <div className="mt-3 text-center text-[11px] text-amber-300 font-bold flex items-center justify-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>{studyStreak.activeStreak}-Day Study Streak Saved Today!</span>
          </div>
        )}
      </div>
    </div>
  );
}
