import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Mail,
  Send,
  CheckCircle2,
  Truck,
  Info,
  ExternalLink,
} from 'lucide-react';
import { getLegalPolicySections, getPublicBusinessMeta } from '../data/legalPoliciesContent';
import { legalTabToRouteKey } from '../utils/seoConfig';

const TAB_LIST = [
  { key: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
  { key: 'terms', label: 'Terms of Service', icon: FileText },
  { key: 'refund', label: 'Refund & Cancellation', icon: CheckCircle2 },
  { key: 'shipping', label: 'Digital Delivery', icon: Truck },
  { key: 'about', label: 'About Us', icon: Info },
  { key: 'disclaimer', label: 'Disclaimer', icon: AlertTriangle },
  { key: 'contact', label: 'Contact & Grievance', icon: Mail },
];

export default function LegalModal({ initialTab = 'privacy', onClose, onNavigateRoute }) {
  const [activeLegalTab, setActiveLegalTab] = useState(initialTab);
  const policies = getLegalPolicySections();
  const meta = getPublicBusinessMeta();
  const activePolicy = policies[activeLegalTab] || policies.privacy;

  const handleOpenDedicatedPage = (e) => {
    const routeKey = legalTabToRouteKey(activePolicy.key);
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && onNavigateRoute) {
      e.preventDefault();
      onClose();
      onNavigateRoute(routeKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
                Legal Compliance &amp; Policy Center
              </h2>
              <p className="text-[11px] text-slate-400">
                {meta.brandName} • Educational Exam Portal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={activePolicy.slug}
              onClick={handleOpenDedicatedPage}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] font-bold text-teal-300 hover:border-teal-400 transition-colors"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 py-3 border-b border-slate-800/80 overflow-x-auto no-scrollbar shrink-0">
          {TAB_LIST.map((t) => {
            const Icon = t.icon;
            const isActive = activeLegalTab === t.key;
            return (
              <button
                key={t.key}
                type="button"
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
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">{activePolicy.title}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{activePolicy.subtitle}</p>
            </div>

            {activePolicy.alertBanner && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{activePolicy.alertBanner.title}</span>
                </div>
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  {activePolicy.alertBanner.body}
                </p>
              </div>
            )}

            {activePolicy.sections.map((sec) => (
              <div key={sec.heading} className="space-y-1.5">
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wide">
                  {sec.heading}
                </h4>
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            ))}

            {activePolicy.key === 'contact' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-teal-400 font-bold">
                    <Mail className="w-4 h-4" />
                    <span>Email Support</span>
                  </div>
                  <div className="text-slate-200 font-mono text-xs">{meta.supportEmail}</div>
                  <p className="text-[10px] text-slate-400">{meta.responseSla}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-sky-400 font-bold">
                    <Send className="w-4 h-4" />
                    <span>Telegram Community</span>
                  </div>
                  <div className="text-slate-200 font-mono text-xs">{meta.telegramChannelName}</div>
                  <a
                    href={meta.telegramChannelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-[11px] text-sky-400 hover:underline font-bold mt-1"
                  >
                    Join Telegram Channel →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <a
            href={activePolicy.slug}
            onClick={handleOpenDedicatedPage}
            className="text-xs font-bold text-teal-400 hover:underline flex items-center gap-1"
          >
            <span>Open {activePolicy.slug}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
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
