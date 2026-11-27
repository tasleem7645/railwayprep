import React, { useState } from 'react';
import {
  Crown,
  CheckCircle2,
  Gift,
  Sparkles,
  ShieldCheck,
  Lock,
  ArrowRight,
  ChevronDown,
  Truck,
  FileText,
  Zap,
} from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

const FEATURE_MATRIX = [
  { name: 'Shift 1 Full Papers & NCERT Science Text Notes', free: 'Included Free', pro: 'Included Forever' },
  { name: 'Shifts 2 & 3 Practice Papers (Cloud Account)', free: 'Free After Login', pro: 'Unlocked Instantly' },
  { name: '225+ Full Shifts, Sectionals & 15 ITI Trades', free: 'Shift 1–3 Only', pro: 'All 225+ Tests Unlocked' },
  { name: '8,665+ Topic-Wise PYQ Bank & Mini CBTs', free: 'Demo Access', pro: 'Unlimited Custom Drills' },
  { name: '26 NCERT Class 9–10 Animated Pro Science Labs', free: 'Text Only', pro: 'All Interactive Labs + Visuals' },
  { name: 'A4 Bilingual Solved PDF Exports (Offline Study)', free: 'Shift 1 Only', pro: 'Unlimited Downloads' },
  { name: 'Mistake Notebook SRS & Speed Radar Analytics', free: 'Basic Track', pro: 'Full SRS + Priority Support' },
  { name: 'Ad-Free Distraction-Free Interface', free: 'Ad-Supported', pro: '100% Ad-Free (Paid VIP)' },
];

const PRICING_FAQS = [
  {
    q: 'What is the total cost and validity of RailwayPrep Pass Pro?',
    a: `Pass Pro costs a transparent one-time fee of ₹${MONETIZATION_CONFIG.payments.passProPrice} (INR) for ${MONETIZATION_CONFIG.payments.passProValidityDays} days (1 full year). There are zero hidden charges or auto-recurring mandates.`,
  },
  {
    q: 'How is Pass Pro delivered after payment?',
    a: 'All RailwayPrep products are 100% digital. Access to mock tests, interactive science labs, and printable solved PDFs unlocks directly on your logged-in portal account immediately upon payment confirmation (within seconds to max 15 minutes).',
  },
  {
    q: 'Can I unlock Pass Pro without paying?',
    a: `Yes! Shift 1 of every exam and complete NCERT Science chapter text notes are permanently free. During our launch campaign, inviting ${MONETIZATION_CONFIG.referral.requiredCount} verified friends unlocks a 90-day Pass Pro trial free (first ${MONETIZATION_CONFIG.referral.maxSeats} aspirants).`,
  },
  {
    q: 'What happens if money is deducted and Pass Pro is not activated?',
    a: 'If a duplicate or failed transaction occurs without account activation within 24 hours, email support@railwayprep.com with your Payment ID / Order ID for a 100% refund processed within 5–7 business days.',
  },
];

export default function PricingPageView({
  hasPassPro = false,
  onOpenPassPro,
  onStartFreeTest,
  onNavigateRoute,
}) {
  const { payments, referral } = MONETIZATION_CONFIG;
  const [openFaq, setOpenFaq] = useState(0);

  const handleLink = (e, routeKey) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && onNavigateRoute) {
      e.preventDefault();
      onNavigateRoute(routeKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-black uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent INR Pricing • No Auto-Renewal Traps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Affordable Access Built for{' '}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
            Indian Railway Aspirants
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Start free without credit cards. Upgrade to Pass Pro anytime for{' '}
          <strong className="text-white">₹{payments.passProPrice}/Year</strong> (less than ₹1/week) to unlock all 650+ bilingual CBT mock tests, NCERT interactive science labs, and printable solved PDFs.
        </p>
      </header>

      {/* 3 Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {/* Plan 1: Free Forever */}
        <div className="rounded-3xl bg-slate-900/75 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-teal-400">Starter Plan</div>
            <h2 className="text-xl font-black text-white mt-1">Free Aspirant Access</h2>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-white">₹0</span>
              <span className="text-xs text-slate-400">/ Forever Free</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Ideal for trying our bilingual CBT engine, daily rapid quizzes, and full NCERT Class 9–10 science text notes.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-slate-200">
              {[
                'Shift 1 Full Paper of every exam (No Login Needed)',
                'Shifts 2 & 3 unlocked free after Google/Email Login',
                'Complete NCERT Science Bilingual Notes (Free Text)',
                'Daily Rapid Quizzes, Syllabus & Score Calculators',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={onStartFreeTest}
            className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs cursor-pointer transition-colors"
          >
            Start Free Mock Test →
          </button>
        </div>

        {/* Plan 2: Pass Pro VIP (Featured) */}
        <div className="rounded-3xl bg-gradient-to-b from-amber-950/40 via-[#0C1224] to-slate-950 border-2 border-amber-400/70 p-6 flex flex-col justify-between shadow-2xl shadow-amber-950/30 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow">
            Most Popular • 90% Launch Discount
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 fill-amber-400" />
              <span>Annual All-Access</span>
            </div>
            <h2 className="text-xl font-black text-white mt-1">RailwayPrep Pass Pro</h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black text-amber-300">₹{payments.passProPrice}</span>
              <span className="text-sm text-slate-500 line-through">₹{payments.passProRegularPrice}</span>
              <span className="text-xs text-slate-300 font-semibold">/ {payments.passProValidityDays} Days (1 Year)</span>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              Complete bilingual CBT & NCERT Science Vault with zero ads and unlimited A4 PDF downloads.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-slate-100">
              {[
                'All 225+ Full-Length Mocks, Pure Sectionals & 15 ITI Trades',
                '8,665+ Topic-Wise PYQs + Unlimited Custom Mini CBTs',
                'All 26 NCERT Class 9–10 Animated SVG Science Labs',
                'Unlimited A4 Bilingual Solved PDF Exports',
                '100% Ad-Free VIP Reading & Test Mode',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={onOpenPassPro}
            className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-105 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-xl shadow-amber-500/20 cursor-pointer transition-all"
          >
            <Crown className="w-4 h-4 fill-slate-950" />
            <span>{hasPassPro ? 'Pass Pro Active ✓ Manage Plan' : `Get Pass Pro — ₹${payments.passProPrice} / Year`}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Plan 3: Free Referral Trial */}
        <div className="rounded-3xl bg-slate-900/75 border border-teal-500/35 p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5" />
              <span>Community Reward</span>
            </div>
            <h2 className="text-xl font-black text-white mt-1">Earn Free Pass Pro</h2>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-emerald-300">₹0</span>
              <span className="text-xs text-slate-400">/ 90 Days (4 Invites)</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Invite {referral.requiredCount} aspirants using your referral link (limited to first {referral.maxSeats} claimers) to unlock full test series & science labs free for 3 months.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-slate-200">
              {[
                'Unlocks All 225+ Mock Shifts & Trades',
                'Unlocks All NCERT Interactive Pro Labs',
                'Unlocks Solved Shift & Chapter PDF Exports',
                'Instant auto-activation on 4th verified signup',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={onOpenPassPro}
            className="mt-6 w-full py-3 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/40 text-teal-300 font-black text-xs cursor-pointer transition-colors"
          >
            Open Referral Tracker →
          </button>
        </div>
      </div>

      {/* Trust & Billing Compliance Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
        <div className="flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white">Secure Online Checkout</div>
            <div className="text-[11px] text-slate-400">
              UPI, Debit/Credit Cards & NetBanking processed via PCI-DSS compliant Razorpay gateway.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white">Instant Digital Delivery</div>
            <div className="text-[11px] text-slate-400">
              100% online service; zero shipping charges. Read{' '}
              <a href="/shipping-policy" onClick={(e) => handleLink(e, 'shipping-policy')} className="text-teal-300 underline">
                Digital Delivery Policy
              </a>.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white">Clear Refund Protection</div>
            <div className="text-[11px] text-slate-400">
              Duplicate or failed debits refunded within 5–7 business days.{' '}
              <a href="/refund-policy" onClick={(e) => handleLink(e, 'refund-policy')} className="text-teal-300 underline">
                Refund Policy
              </a>.
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <section className="rounded-3xl bg-[#0B1120] border border-slate-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-white">Free vs Pass Pro Feature Breakdown</h2>
          <span className="text-[11px] font-bold text-slate-400">Currency: INR (₹)</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800">
                <th className="py-3 px-5 font-bold">Portal Capability</th>
                <th className="py-3 px-5 font-bold">Free Account (₹0)</th>
                <th className="py-3 px-5 font-black text-amber-300">Pass Pro (₹{payments.passProPrice}/Yr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {FEATURE_MATRIX.map((row) => (
                <tr key={row.name} className="hover:bg-slate-900/40">
                  <td className="py-3 px-5 font-semibold text-white">{row.name}</td>
                  <td className="py-3 px-5 text-slate-400">{row.free}</td>
                  <td className="py-3 px-5 font-bold text-emerald-300">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-black text-white">Billing & Subscription FAQs</h2>
        <div className="space-y-2.5">
          {PRICING_FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={item.q} className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-2.5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
