import React from 'react';
import { FileText, Send, AlertCircle, Bookmark, CheckSquare, Crown, ShieldCheck, Truck, Mail, Info, Tag } from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function Footer({
  onOpenPassPro,
  onOpenLegalModal,
  onOpenMistakes,
  onNavigateTab,
}) {
  const { community, payments } = MONETIZATION_CONFIG;

  const handleNav = (tab, filter = null) => {
    if (onNavigateTab) {
      onNavigateTab(tab, filter);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnchorNav = (e, tab, filter = null) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      handleNav(tab, filter);
    }
  };

  return (
    <footer className="print:hidden bg-[#050811] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <a
              href="/"
              onClick={(e) => handleAnchorNav(e, 'home')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <img
                src="/logo.jpg"
                alt="RailwayPrep PRO"
                className="w-9 h-9 rounded-lg object-cover border border-teal-500/40 shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-base font-black text-white group-hover:text-teal-400 transition-colors">
                RailwayPrep PRO
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              India&apos;s dedicated computer-based exam simulator and bilingual NCERT Science revision portal for RRB ALP, Technician, NTPC, and Group D aspirants.
            </p>
            <div className="text-[11px] text-teal-400 font-semibold">
              Real-Exam CBT Pattern Test Simulator
            </div>
            <div className="pt-1">
              <a
                href="/about-us"
                onClick={(e) => handleAnchorNav(e, 'about-us')}
                className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-teal-300 font-bold transition-colors"
              >
                <Info className="w-3.5 h-3.5 text-teal-400" />
                <span>About RailwayPrep PRO →</span>
              </a>
            </div>
          </div>

          {/* Col 2: Exams Covered (Crawlable Anchor Links) */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Exams Covered</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/mock-tests"
                  onClick={(e) => handleAnchorNav(e, 'mock-tests', { year: 'all' })}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB Assistant Loco Pilot (ALP 2026/2025)</span>
                </a>
              </li>
              <li>
                <a
                  href="/syllabus"
                  onClick={(e) => handleAnchorNav(e, 'syllabus', { examId: 'tech_02_2026' })}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB Technician Grade I &amp; III (CEN 02/2026)</span>
                </a>
              </li>
              <li>
                <a
                  href="/syllabus"
                  onClick={(e) => handleAnchorNav(e, 'syllabus', { examId: 'ntpc_grad_06_2026' })}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB NTPC (Graduate &amp; 12th Level)</span>
                </a>
              </li>
              <li>
                <a
                  href="/syllabus"
                  onClick={(e) => handleAnchorNav(e, 'syllabus', { examId: 'groupd_09_2025' })}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB Group D (Level-1 Trackman)</span>
                </a>
              </li>
              <li>
                <a
                  href="/syllabus"
                  onClick={(e) => handleAnchorNav(e, 'syllabus', { examId: 'rpf_si_constable' })}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RPF Sub-Inspector &amp; Constable</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links, Plans & Study Features */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Study Features &amp; Plans</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/mock-tests"
                  onClick={(e) => handleAnchorNav(e, 'mock-tests', { filter: 'all' })}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-teal-400" />
                  <span>650+ Bilingual CBT Mock Tests</span>
                </a>
              </li>
              <li>
                <a
                  href="/super-coaching"
                  onClick={(e) => handleAnchorNav(e, 'super-coaching')}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NCERT Class 9 &amp; 10 Visual Science Notes</span>
                </a>
              </li>
              <li>
                <a
                  href="/pyq-explorer"
                  onClick={(e) => handleAnchorNav(e, 'pyq-explorer')}
                  className="hover:text-teal-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-purple-400" />
                  <span>8,665+ Topic-Wise PYQ Bank</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenMistakes && onOpenMistakes()}
                  className="hover:text-rose-300 text-left transition-colors cursor-pointer flex items-center gap-1.5 font-semibold text-rose-400"
                >
                  <Bookmark className="w-3.5 h-3.5 fill-rose-500/20" />
                  <span>गलती डायरी (Mistake Notebook)</span>
                </button>
              </li>
              <li>
                <a
                  href="/pricing"
                  onClick={(e) => handleAnchorNav(e, 'pricing')}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5"
                >
                  <Crown className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Pass Pro Pricing (₹{payments.passProPrice}/Yr)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Support */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Support &amp; Community</h4>
            <p className="text-xs text-slate-400 mb-3">
              Join {community.membersCount} for daily revision quizzes, exam updates, and support at{' '}
              <a href={`mailto:${community.emailContact}`} className="text-teal-300 hover:underline font-mono">
                {community.emailContact}
              </a>.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={community.telegramChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md shadow-sky-950 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Channel ({community.telegramChannelName})</span>
              </a>
              <a
                href="/contact-us"
                onClick={(e) => handleAnchorNav(e, 'contact-us')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-teal-500/30 text-teal-300 font-bold text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact &amp; Grievance Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Banner for Compliance & Trademark Clarity */}
        <div className="my-8 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> RailwayPrep PRO is an independent private educational portal. We are{' '}
            <strong>not affiliated with, associated with, or endorsed by</strong> the Ministry of Railways, Railway Recruitment Boards (RRBs), RDSO, any government organization, or Tata Consultancy Services (TCS / TCS iON). Official notices and recruitment forms should always be verified on government websites (indianrailways.gov.in).
          </p>
        </div>

        {/* Crawlable Trust, Pricing & Compliance Footer Links */}
        <div className="pt-6 border-t border-slate-900 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026-2027 RailwayPrep PRO. All Rights Reserved. Independent Educational Portal for Indian Railway Aspirants.
          </div>
          <nav aria-label="Footer legal and support links" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <a
              href="/about-us"
              onClick={(e) => handleAnchorNav(e, 'about-us')}
              className="hover:text-teal-300 transition-colors"
            >
              About Us
            </a>
            <span>•</span>
            <a
              href="/pricing"
              onClick={(e) => handleAnchorNav(e, 'pricing')}
              className="hover:text-amber-300 transition-colors font-semibold text-slate-300"
            >
              Pricing (₹{payments.passProPrice})
            </a>
            <span>•</span>
            <a
              href="/privacy-policy"
              onClick={(e) => handleAnchorNav(e, 'privacy-policy')}
              className="hover:text-teal-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleAnchorNav(e, 'terms-and-conditions')}
              className="hover:text-teal-300 transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span>•</span>
            <a
              href="/refund-policy"
              onClick={(e) => handleAnchorNav(e, 'refund-policy')}
              className="hover:text-teal-300 transition-colors"
            >
              Refund Policy
            </a>
            <span>•</span>
            <a
              href="/shipping-policy"
              onClick={(e) => handleAnchorNav(e, 'shipping-policy')}
              className="hover:text-teal-300 transition-colors"
            >
              Digital Delivery
            </a>
            <span>•</span>
            <a
              href="/disclaimer"
              onClick={(e) => handleAnchorNav(e, 'disclaimer')}
              className="hover:text-teal-300 transition-colors"
            >
              Disclaimer
            </a>
            <span>•</span>
            <a
              href="/contact-us"
              onClick={(e) => handleAnchorNav(e, 'contact-us')}
              className="hover:text-teal-300 transition-colors"
            >
              Contact Us
            </a>
            {onOpenLegalModal && (
              <>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('privacy')}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-slate-400"
                >
                  Quick Policy Viewer
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
