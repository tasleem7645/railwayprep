import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Truck,
  Info,
  AlertTriangle,
  Mail,
  Send,
  Clock,
  ArrowLeft,
  Crown,
  ExternalLink,
  Building2,
  MapPin,
  Phone,
} from 'lucide-react';
import { getLegalPolicySections, getPublicBusinessMeta } from '../data/legalPoliciesContent';

const NAV_ITEMS = [
  { key: 'about', href: '/about-us', label: 'About Us', icon: Info },
  { key: 'privacy', href: '/privacy-policy', label: 'Privacy Policy', icon: ShieldCheck },
  { key: 'terms', href: '/terms-and-conditions', label: 'Terms & Conditions', icon: FileText },
  { key: 'refund', href: '/refund-policy', label: 'Refund & Cancellation', icon: CheckCircle2 },
  { key: 'shipping', href: '/shipping-policy', label: 'Digital Delivery', icon: Truck },
  { key: 'contact', href: '/contact-us', label: 'Contact & Grievance', icon: Mail },
  { key: 'disclaimer', href: '/disclaimer', label: 'Disclaimer', icon: AlertTriangle },
];

export default function LegalCompliancePage({
  activeKey = 'privacy',
  onNavigateRoute,
  onOpenPassPro,
}) {
  const policies = getLegalPolicySections();
  const meta = getPublicBusinessMeta();
  const policy = policies[activeKey] || policies.privacy;

  const [ticketTopic, setTicketTopic] = useState('Pass Pro Activation / Payment Query');
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketRef, setTicketRef] = useState('');
  const [ticketMsg, setTicketMsg] = useState('');

  const handleLinkClick = (e, routeKey) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && onNavigateRoute) {
      e.preventDefault();
      onNavigateRoute(routeKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[RailwayPrep Support] ${ticketTopic}`);
    const body = encodeURIComponent(
      `Registered Email: ${ticketEmail || '-'}\nPayment / Order ID (if any): ${ticketRef || '-'}\n\nMessage:\n${ticketMsg || ''}`
    );
    window.location.href = `mailto:${meta.supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
      {/* Top Breadcrumb & Back */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-teal-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </a>

        <a
          href="/pricing"
          onClick={(e) => handleLinkClick(e, 'pricing')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold hover:bg-amber-500/25 transition-colors"
        >
          <Crown className="w-3.5 h-3.5" />
          <span>View Plans & Pricing (₹{meta.passProPrice}/Yr)</span>
        </a>
      </div>

      {/* Policy Navigation Tabs (Real Crawlable Anchor Links) */}
      <nav
        aria-label="Compliance and Policy Pages"
        className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-slate-900/80 border border-slate-800"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = policy.key === item.key;
          const targetRoute = item.href.replace(/^\//, '');
          return (
            <a
              key={item.key}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              onClick={(e) => handleLinkClick(e, targetRoute)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Main Policy Document Card */}
      <article className="rounded-3xl bg-[#0B1120] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
        <header className="pb-5 border-b border-slate-800/80 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{meta.brandName} Compliance Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {policy.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">{policy.subtitle}</p>
        </header>

        {policy.alertBanner && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/35 text-amber-200 space-y-1.5">
            <div className="flex items-center gap-2 font-black text-sm text-amber-300">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{policy.alertBanner.title}</span>
            </div>
            <p className="text-xs leading-relaxed text-amber-100/90">
              {policy.alertBanner.body}
            </p>
          </div>
        )}

        <div className="space-y-6">
          {policy.sections.map((sec) => (
            <section key={sec.heading} className="space-y-2">
              <h2 className="text-sm sm:text-base font-extrabold text-teal-300">
                {sec.heading}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Rich Support & Grievance Cards on Contact Page */}
        {policy.key === 'contact' && (
          <div className="pt-4 border-t border-slate-800 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                  <Mail className="w-4 h-4" />
                  <span>Official Support Email</span>
                </div>
                <a
                  href={`mailto:${meta.supportEmail}`}
                  className="block text-sm font-mono font-bold text-white hover:text-teal-300 break-all"
                >
                  {meta.supportEmail}
                </a>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {meta.responseSla}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                  <Send className="w-4 h-4" />
                  <span>Telegram Updates & Help</span>
                </div>
                <div className="text-sm font-mono font-bold text-white">
                  {meta.telegramChannelName}
                </div>
                <div className="flex flex-wrap gap-3 pt-0.5 text-[11px]">
                  <a
                    href={meta.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-bold inline-flex items-center gap-1"
                  >
                    Channel <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={meta.telegramGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:underline font-bold inline-flex items-center gap-1"
                  >
                    Doubt Group <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>Grievance & Operating Hours</span>
                </div>
                <div className="text-xs font-semibold text-white">
                  {meta.grievanceOfficerName}
                </div>
                <p className="text-[11px] text-slate-400">{meta.supportHours}</p>
                {meta.supportPhone && (
                  <p className="text-[11px] text-slate-200 flex items-center gap-1 font-mono">
                    <Phone className="w-3 h-3 text-teal-400" /> {meta.supportPhone}
                  </p>
                )}
                {meta.registeredAddress && (
                  <p className="text-[11px] text-slate-300 flex items-start gap-1">
                    <MapPin className="w-3 h-3 text-teal-400 shrink-0 mt-0.5" />{' '}
                    <span>{meta.registeredAddress}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Direct Support Ticket Composer */}
            <form
              onSubmit={handleContactMailto}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
            >
              <h3 className="text-sm font-black text-white">
                Send a Support / Payment Query
              </h3>
              <p className="text-xs text-slate-400">
                Fill your query details below to launch your email client addressed to{' '}
                <span className="text-teal-300 font-mono">{meta.supportEmail}</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Topic
                  </label>
                  <select
                    value={ticketTopic}
                    onChange={(e) => setTicketTopic(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-400"
                  >
                    <option value="Pass Pro Activation / Payment Query">Pass Pro Activation / Payment</option>
                    <option value="Refund Request">Refund / Duplicate Debit</option>
                    <option value="Account or Data Deletion">Account / Data Deletion</option>
                    <option value="Mock Test / Question Correction">Question Correction</option>
                    <option value="General Feedback">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Registered Account Email
                  </label>
                  <input
                    type="email"
                    required
                    value={ticketEmail}
                    onChange={(e) => setTicketEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Payment / Order ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={ticketRef}
                    onChange={(e) => setTicketRef(e.target.value)}
                    placeholder="pay_... or order_..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">
                  Describe Your Issue
                </label>
                <textarea
                  rows={3}
                  required
                  value={ticketMsg}
                  onChange={(e) => setTicketMsg(e.target.value)}
                  placeholder="Share details of your query so we can resolve it quickly..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Support Email</span>
              </button>
            </form>
          </div>
        )}

        {/* Helpful Action Bar */}
        <footer className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">
            Questions about our policies? Email{' '}
            <a href={`mailto:${meta.supportEmail}`} className="text-teal-300 hover:underline font-mono">
              {meta.supportEmail}
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/mock-tests"
              onClick={(e) => handleLinkClick(e, 'mock-tests')}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold"
            >
              Browse Mock Tests
            </a>
            {onOpenPassPro && (
              <button
                type="button"
                onClick={onOpenPassPro}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs font-black inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Crown className="w-3.5 h-3.5 fill-slate-950" />
                <span>Explore Pass Pro (₹{meta.passProPrice})</span>
              </button>
            )}
          </div>
        </footer>
      </article>
    </div>
  );
}
