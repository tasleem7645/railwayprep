import React from 'react';
import { Train, Heart, Shield, FileText, Send, Mail, AlertCircle } from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function Footer({ onOpenPassPro, onOpenLegalModal }) {
  const { community } = MONETIZATION_CONFIG;

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-black">
                <Train className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-white">RailwayRanker PRO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's dedicated computer-based exam simulator and smart revision notes platform for RRB ALP, Technician, NTPC, and Group D aspirants.
            </p>
            <div className="text-[11px] text-teal-400 font-semibold">
              Authentic TCS iON CBT Test Simulator
            </div>
          </div>

          {/* Col 2: Exams Covered */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Exams Covered</h4>
            <ul className="space-y-2">
              <li className="hover:text-teal-300 transition-colors">RRB Assistant Loco Pilot (ALP 2026/2025)</li>
              <li className="hover:text-teal-300 transition-colors">RRB Technician Grade I & III</li>
              <li className="hover:text-teal-300 transition-colors">RRB NTPC (Graduate & 12th Level)</li>
              <li className="hover:text-teal-300 transition-colors">RRB Group D (Level-1 Trackman)</li>
              <li className="hover:text-teal-300 transition-colors">RPF Sub-Inspector & Constable</li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Earning */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Study Features</h4>
            <ul className="space-y-2">
              <li className="hover:text-teal-300 transition-colors">76+ CBT Mock Tests (Bilingual)</li>
              <li className="hover:text-teal-300 transition-colors">Pure Mathematics Sectionals</li>
              <li className="hover:text-teal-300 transition-colors">Pure Reasoning Sectionals</li>
              <li className="hover:text-teal-300 transition-colors">General Science & GK Sectionals</li>
              <li onClick={onOpenPassPro} className="text-amber-400 font-bold hover:underline cursor-pointer">
                RailwayRanker Pass Pro (₹49/Yr)
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Support */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Community & Telegram</h4>
            <p className="text-xs text-slate-400 mb-3">
              Join {community.membersCount} for daily free PDFs, quiz notifications, and official exam keys.
            </p>
            <a
              href={community.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md shadow-sky-950 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join Official Telegram Channel</span>
            </a>
          </div>

        </div>

        {/* Disclaimer Banner for Google AdSense & Government Policy */}
        <div className="my-8 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> RailwayRanker PRO is an independent private educational portal. We are <strong>not affiliated with, associated with, or endorsed by</strong> the Ministry of Railways, Railway Recruitment Boards (RRBs), or any government organization. Official notices and recruitment forms should always be verified on official government websites (indianrailways.gov.in).
          </p>
        </div>

        {/* Legal & AdSense Compliant Footer Links */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026-2027 RailwayRanker PRO. All Rights Reserved. Built for Indian Railway Aspirants.
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
