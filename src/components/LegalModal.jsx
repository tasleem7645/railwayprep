import React, { useState } from 'react';
import { X, ShieldCheck, FileText, AlertTriangle, Mail, Send, CheckCircle2 } from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function LegalModal({ initialTab = 'privacy', onClose }) {
  const [activeLegalTab, setActiveLegalTab] = useState(initialTab);
  const { community } = MONETIZATION_CONFIG;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-3xl w-full max-h-[90vh] bg-[#090D1A] border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Legal Compliance & Policy Center
              </h2>
              <p className="text-[11px] text-slate-400">
                RailwayPrep PRO • Educational Exam Portal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 py-3 border-b border-slate-800/80 overflow-x-auto no-scrollbar shrink-0">
          {[
            { key: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
            { key: 'terms', label: 'Terms of Service', icon: FileText },
            { key: 'refund', label: 'Refund Policy', icon: CheckCircle2 },
            { key: 'disclaimer', label: 'Government Disclaimer', icon: AlertTriangle },
            { key: 'contact', label: 'Contact & Grievance', icon: Mail }
          ].map(t => {
            const Icon = t.icon;
            const isActive = activeLegalTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveLegalTab(t.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-5 px-1 space-y-4 text-xs text-slate-300 leading-relaxed custom-scrollbar">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeLegalTab === 'privacy' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-sm font-bold text-white">Privacy Policy for RailwayPrep PRO</h3>
              <p>Last updated: November 2026</p>
              <p>
                At <strong>RailwayPrep PRO</strong> (accessible from <span className="text-teal-400">https://railwayprep.com</span>), your privacy is one of our main priorities. This Privacy Policy document outlines the types of information collected and how it is used.
              </p>
              
              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">1. Information We Collect</h4>
              <p>
                We collect minimal personal data. When you attempt mock tests, your local test progress, answers, and scores are stored locally in your browser storage (localStorage) to allow session recovery. We do not store your confidential banking details or passwords on our servers.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">2. Google AdSense & Third-Party Cookies</h4>
              <p>
                Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve advertisements to visitors on our site based on their visits to our site and other internet platforms. Users may opt out of personalized advertising by visiting Google Ads Settings.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">3. Log Files & Analytics</h4>
              <p>
                Like most standard website servers, we utilize log files to analyze trends, administer the platform, track user movements in the aggregate, and gather demographic information for site optimization. IP addresses are not linked to personally identifiable information.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">4. Data Security</h4>
              <p>
                We implement industry-standard encryption protocols (HTTPS/SSL) to protect all interactions on the portal. Payments for optional Pass Pro access are handled securely via encrypted UPI or authorized banking gateways.
              </p>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeLegalTab === 'terms' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-sm font-bold text-white">Terms and Conditions</h3>
              <p>
                By accessing and using <strong>RailwayPrep PRO</strong>, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">1. Educational Purpose & Fair Use</h4>
              <p>
                RailwayPrep PRO provides mock examination simulations, previous year question paper analyses, and smart revision notes solely for personal educational and preparation use by candidates preparing for Indian competitive exams.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">2. User Conduct & Exam Simulation</h4>
              <p>
                The scores and percentiles displayed on the platform are simulated estimates based on official answer keys and statistical algorithms. They do not guarantee actual selection or qualification in government recruitment examinations.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">3. Pass Pro & Digital Purchases</h4>
              <p>
                Pass Pro and PDF study material purchases provide digital access to educational features. If you experience any technical issues in accessing paid content, our grievance support team will resolve it within 24–48 hours via email or Telegram.
              </p>
            </div>
          )}

          {/* TAB: REFUND & CANCELLATION POLICY (Razorpay / Cashfree KYC Compliant) */}
          {activeLegalTab === 'refund' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-sm font-bold text-white">Refund & Cancellation Policy</h3>
              <p>Last updated: November 2026</p>
              <p>
                Thank you for choosing <strong>RailwayPrep PRO (https://railwayprep.com)</strong> for your competitive exam preparation.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">1. Digital Subscription & Mock Tests</h4>
              <p>
                Pass Pro memberships and PDF study bundles are instant digital educational services. Since access to all mock tests and study materials is unlocked digitally upon payment, standard cancellations after activation are generally not applicable.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">2. Duplicate / Failed Transactions</h4>
              <p>
                If money was deducted from your bank/UPI account due to a network error or duplicate transaction and Pass Pro was not activated within 24 hours, you are eligible for a <strong>100% full refund</strong>. Refunds are processed within 5–7 business days to your original payment method.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">3. How to Request a Refund or Activation Help</h4>
              <p>
                Email your transaction ID / UTR number and registered account email to <strong className="text-teal-300">{community.emailContact}</strong>. Our support team responds within 24 hours.
              </p>
            </div>
          )}

          {/* TAB 3: GOVERNMENT DISCLAIMER */}
          {activeLegalTab === 'disclaimer' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Important Non-Affiliation Notice</span>
                </div>
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  <strong>RailwayPrep PRO is an independent private educational website. It is NOT an official website of the Indian Railways, Railway Recruitment Boards (RRBs), Railway Recruitment Cells (RRCs), or the Government of India.</strong>
                </p>
              </div>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">1. Public Domain Question Papers & Answer Keys</h4>
              <p>
                Official RRB ALP question papers and provisional/final answer keys are publicly released by Railway Recruitment Boards for candidates' objections and review. RailwayPrep PRO compiles and organizes these public examination questions under fair-use educational principles to help aspirants practice in a simulated computer-based test environment.
              </p>

              <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">2. Official Information Sources</h4>
              <p>
                For official notifications, application forms, results, and official recruitment updates, candidates must always visit the official Railway Recruitment Board portals (e.g., <a href="https://indianrailways.gov.in" target="_blank" rel="noreferrer" className="text-teal-400 underline">indianrailways.gov.in</a> or regional RRB websites such as rrbcdg.gov.in, rrbpatna.gov.in, etc.).
              </p>
            </div>
          )}

          {/* TAB 4: CONTACT US */}
          {activeLegalTab === 'contact' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-sm font-bold text-white">Contact & Student Support</h3>
              <p>
                Have questions regarding mock test series, Pass Pro activation, or study materials? Reach out to us directly:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-teal-400 font-bold">
                    <Mail className="w-4 h-4" />
                    <span>Email Support</span>
                  </div>
                  <div className="text-slate-200 font-mono text-xs">{community.emailContact}</div>
                  <p className="text-[10px] text-slate-400">Response time: Within 24 hours</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-sky-400 font-bold">
                    <Send className="w-4 h-4" />
                    <span>Telegram Community</span>
                  </div>
                  <div className="text-slate-200 font-mono text-xs">{community.telegramChannelName}</div>
                  <a
                    href={community.telegramChannelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-[11px] text-sky-400 hover:underline font-bold mt-1"
                  >
                    Join Telegram Group →
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400">
                <span className="font-bold text-slate-300">Grievance Officer:</span> Academic Support & Content Redressal Cell, RailwayPrep PRO. All copyright notices or inquiry emails are reviewed within 48 business hours.
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
