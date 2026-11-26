import React from 'react';
import { Crown, Lock, Sparkles } from 'lucide-react';

/**
 * Reusable Pass Pro Feature Gate for premium interactive labs, HD visuals,
 * live PYQ CBT drills & printable PDF sheets while keeping NCERT text free to read.
 */
export default function ProFeatureGate({
  hasPassPro = false,
  onOpenPassPro,
  lang = 'hi',
  featureTitle,
  featureSubtitle,
  children,
}) {
  if (hasPassPro) {
    return <>{children}</>;
  }

  return (
    <div className="relative rounded-2xl border border-amber-500/35 bg-[#090E1E] overflow-hidden my-3">
      {/* Blurred Teaser Preview of the Interactive Component */}
      <div className="pointer-events-none select-none blur-[6px] opacity-40 max-h-72 overflow-hidden">
        {children}
      </div>

      {/* Crisp Pro Unlock Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-[#070B18]/85 to-[#070B18]/70 flex flex-col items-center justify-center p-5 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] font-black uppercase tracking-wider mb-2.5 shadow-lg shadow-amber-950/50">
          <Lock className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'Pass Pro एक्सक्लूसिव' : 'Pass Pro Exclusive'}</span>
        </div>

        <h4 className="text-base sm:text-lg font-black text-white max-w-md">
          {featureTitle?.[lang] || featureTitle?.en || (lang === 'hi' ? 'प्रीमियम इंटरैक्टिव लैब अनलॉक करें' : 'Unlock Interactive Pro Studio')}
        </h4>

        <p className="text-xs text-slate-300 max-w-md mt-1.5 leading-relaxed">
          {featureSubtitle?.[lang] ||
            featureSubtitle?.en ||
            (lang === 'hi'
              ? 'सभी 4K एनिमेटेड SVG सिम्युलेटर, जनरेटेड HD माइक्रोस्कोपी चित्र, अध्याय PYQ CBT टेस्ट और प्रिंट PDF अनलॉक करें।'
              : 'Unlock animated SVG simulators, HD generated microscopy visuals, live chapter RRB PYQ CBT drills & printable PDF.')}
        </p>

        <button
          onClick={onOpenPassPro}
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-105 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
        >
          <Crown className="w-4 h-4 fill-slate-950" />
          <span>
            {lang === 'hi'
              ? 'Pass Pro (₹49) या 4 Referrals से अनलॉक करें'
              : 'Unlock with Pass Pro (₹49) or 4 Referrals'}
          </span>
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
