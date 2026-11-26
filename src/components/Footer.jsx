import React from 'react';
import { Heart, Shield, FileText, Send, Mail, AlertCircle, Bookmark, CheckSquare, Crown } from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function Footer({ 
  onOpenPassPro, 
  onOpenLegalModal, 
  onOpenMistakes,
  onNavigateTab
}) {
  const { community } = MONETIZATION_CONFIG;

  const handleNav = (tab, filter = null) => {
    if (onNavigateTab) {
      onNavigateTab(tab, filter);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="print:hidden bg-[#050811] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <img
                src="/logo.jpg"
                alt="RailwayPrep PRO"
                className="w-9 h-9 rounded-lg object-cover border border-teal-500/40 shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-base font-black text-white group-hover:text-teal-400 transition-colors">RailwayPrep PRO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's dedicated computer-based exam simulator and smart revision notes platform for RRB ALP, Technician, NTPC, and Group D aspirants.
            </p>
            <div className="text-[11px] text-teal-400 font-semibold">
              Authentic TCS iON CBT Test Simulator
            </div>
          </div>

          {/* Col 2: Exams Covered (Interactive Working Links) */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Exams Covered</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('mock-tests', { year: 'all' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB Assistant Loco Pilot (ALP 2026/2025)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('syllabus', { examId: 'tech_02_2026' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB Technician Grade I & III (CEN 02/2026)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('syllabus', { examId: 'ntpc_grad_06_2026' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB NTPC (Graduate & 12th Level)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('syllabus', { examId: 'groupd_09_2025' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RRB Group D (Level-1 Trackman)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('syllabus', { examId: 'rpf_si_constable' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>RPF Sub-Inspector & Constable</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Study Features */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Study Features</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('mock-tests', { filter: 'all' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-teal-400" />
                  <span>86+ CBT Mock Tests (Bilingual)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mock-tests', { filter: 'sectional' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pure Mathematics Sectionals</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mock-tests', { filter: 'sectional' })}
                  className="hover:text-teal-300 text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-purple-400" />
                  <span>Pure Reasoning Sectionals</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenMistakes && onOpenMistakes()}
                  className="hover:text-rose-300 text-left transition-colors cursor-pointer flex items-center gap-1.5 font-semibold text-rose-400"
                >
                  <Bookmark className="w-3.5 h-3.5 fill-rose-500/20" />
                  <span>गलती डायरी (Mistake Notebook)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPassPro}
                  className="text-amber-400 font-bold hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <Crown className="w-3.5 h-3.5 fill-amber-400" />
                  <span>RailwayPrep Pass Pro (₹{MONETIZATION_CONFIG.payments.passProPrice}/Yr)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Support */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Community & Telegram</h4>
            <p className="text-xs text-slate-400 mb-3">
              Join {community.membersCount} for daily free PDFs, quiz notifications, and official exam keys.
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
                href={community.telegramGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-sky-500/30 text-sky-300 font-bold text-xs transition-colors"
              >
                <span>💬 Doubt Group ({community.telegramGroupName})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Banner for Google AdSense & Government Policy */}
        <div className="my-8 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> RailwayPrep PRO is an independent private educational portal. We are <strong>not affiliated with, associated with, or endorsed by</strong> the Ministry of Railways, Railway Recruitment Boards (RRBs), or any government organization. Official notices and recruitment forms should always be verified on official government websites (indianrailways.gov.in).
          </p>
        </div>

        {/* Legal & AdSense Compliant Footer Links */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026-2027 RailwayPrep PRO. All Rights Reserved. Built for Indian Railway Aspirants.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button 
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('refund')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegalModal('contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
