import React from 'react';
import { Train, Heart, Shield, FileText, Send, Mail } from 'lucide-react';

export default function Footer({ onOpenPassPro }) {
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
              <span className="text-base font-black text-white">RailwayPrep PRO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's dedicated computer-based exam simulator and smart revision notes platform for RRB NTPC, ALP, Group D, and RPF aspirants.
            </p>
            <div className="text-[11px] text-teal-400 font-semibold">
              Target 85+ Marks in CBT-1 & 2
            </div>
          </div>

          {/* Col 2: Exams Covered */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Exams Covered</h4>
            <ul className="space-y-2">
              <li className="hover:text-teal-300 cursor-pointer">RRB NTPC (Graduate & 12th Level)</li>
              <li className="hover:text-teal-300 cursor-pointer">RRB Assistant Loco Pilot (ALP)</li>
              <li className="hover:text-teal-300 cursor-pointer">RRB Technician Grade I & III</li>
              <li className="hover:text-teal-300 cursor-pointer">RRB Group D (Trackman/Pointsman)</li>
              <li className="hover:text-teal-300 cursor-pointer">RPF Sub-Inspector & Constable</li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Earning */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Study Features</h4>
            <ul className="space-y-2">
              <li className="hover:text-teal-300 cursor-pointer">Full CBT Mock Test Simulator</li>
              <li className="hover:text-teal-300 cursor-pointer">Neeraj Sir Science Mind Maps</li>
              <li className="hover:text-teal-300 cursor-pointer">Aditya Ranjan Sir 2s Tricks</li>
              <li className="hover:text-teal-300 cursor-pointer">NCERT 9th & 10th Science Crux</li>
              <li onClick={onOpenPassPro} className="text-amber-400 font-bold hover:underline cursor-pointer">
                RailwayPrep Pass Pro (₹49/Yr)
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Support */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Community & Telegram</h4>
            <p className="text-xs text-slate-400 mb-3">
              Join 25,000+ railway aspirants for daily free PDFs, quiz notifications, and official exam updates.
            </p>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md shadow-sky-950 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join Official Telegram Channel</span>
            </a>
          </div>

        </div>

        {/* Legal & AdSense Compliant Footer */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026-2027 RailwayPrep PRO. All Rights Reserved. Built for Indian Railway Aspirants.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Disclaimer</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Contact Us</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
