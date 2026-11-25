import React from 'react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';
import { Crown, Sparkles, Send, Download, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AdBanner({ 
  slot = 'header', 
  onOpenPassPro, 
  onOpenPdfModal,
  hideAds = false,
  className = '' 
}) {
  const { adsense, payments, community } = MONETIZATION_CONFIG;

  if (!adsense.enabled || hideAds) return null;

  const isRealAdSenseActive = adsense.publisherId && !adsense.publisherId.includes('XXXX');

  // If real AdSense publisher ID is provided, render Google AdSense Tag
  if (isRealAdSenseActive) {
    return (
      <div className={`w-full overflow-hidden my-4 text-center ${className}`}>
        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Sponsored Advertisement</div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adsense.publisherId}
          data-ad-slot={adsense.slots[slot] || adsense.slots.headerBanner}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Fallback high-converting native sponsor/promo units (Custom Monetization)
  if (slot === 'result') {
    return (
      <div className={`p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-teal-950/40 border border-amber-500/30 my-4 shadow-xl ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Recommended For You
                </span>
                <span className="text-xs text-slate-400 font-semibold">Special Aspirant Discount</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">
                Targeting 80+ in CBT-1? Get RailwayRanker <span className="text-amber-400">PASS PRO</span>
              </h4>
              <p className="text-xs text-slate-400">
                Unlock all 76+ official shift papers, pure subject sectionals & all-India rank for just ₹{payments.passProPrice}/Yr.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenPassPro}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>Unlock Pass Pro (₹{payments.passProPrice})</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Header / In-feed Banner
  return (
    <div className={`w-full p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-teal-500/20 my-4 shadow-lg ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                Ad / Study Resource
              </span>
              <span className="text-xs text-teal-400 font-bold">RRB ALP 2025 & 2026 Bilingual Solved PDFs</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Download complete printable question bank PDFs with step-by-step solutions for rapid offline revision.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
          {onOpenPdfModal && (
            <button
              onClick={onOpenPdfModal}
              className="px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-teal-950/50 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Solved PDFs (₹{payments.pdfBundlePrice})</span>
            </button>
          )}
          <a
            href={community.telegramChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Free Telegram PDFs</span>
          </a>
        </div>
      </div>
    </div>
  );
}
