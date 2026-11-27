// Shared SEO metadata & route definitions (used by BOTH App.jsx runtime and scripts/generate-seo-pages.mjs)

export const SITE_ORIGIN = 'https://railwayprep.com';

export const SEO_ROUTES = [
  {
    routeKey: 'home',
    path: '/',
    title: 'RailwayPrep PRO | Railway Exam CBT Mock Test Simulator & Revision Portal',
    description:
      'Practice 650+ bilingual RRB ALP, NTPC, Group D, Technician & ITI Trade CBT mock tests with negative marking analytics, topic PYQs, and NCERT Class 9-10 Science visual notes.',
    keywords:
      'RRB ALP mock test, RRB Group D CBT test, Railway CBT simulator, RRB NTPC test series, ALP CBT 2 Part B trade mock test, NCERT science notes railway',
    changefreq: 'daily',
    priority: '1.0',
    ogType: 'website',
  },
  {
    routeKey: 'mock-tests',
    path: '/mock-tests',
    title: 'Railway CBT Test Series (650+ Mocks) | ALP, NTPC, Group D & ITI Trades | RailwayPrep PRO',
    description:
      'Attempt 650+ bilingual full-length shift pattern papers, pure subject sectionals, chapter drills, and 15 ITI Trade CBT mock tests for RRB ALP, Technician, NTPC UG & Group D.',
    keywords: 'RRB ALP test series, RRB Group D mock test online, RRB Technician mock test, ALP CBT 2 trades',
    changefreq: 'daily',
    priority: '0.95',
    ogType: 'website',
  },
  {
    routeKey: 'pyq-explorer',
    path: '/pyq-explorer',
    title: 'Railway Topic-Wise PYQ Bank & Custom CBT Drill | RailwayPrep PRO',
    description:
      'Explore 8,665+ bilingual Railway previous year questions sorted by Exam, Year, Subject, Chapter & Topic with instant custom 10/15/25-question CBT practice drills.',
    keywords: 'Railway PYQ topic wise, RRB ALP previous year questions, Group D science PYQ bank',
    changefreq: 'daily',
    priority: '0.9',
    ogType: 'website',
  },
  {
    routeKey: 'super-coaching',
    path: '/super-coaching',
    title: 'NCERT Class 9 & 10 Science Visual Pro Notes & Formula Hub | RailwayPrep PRO',
    description:
      'Master Physics, Chemistry & Biology with 26 bilingual NCERT Class 9 & 10 science chapters, interactive animated SVG labs, railway hotspot PYQs, and maths shortcuts.',
    keywords: 'NCERT class 9 10 science notes Hindi English, Railway science visual notes, RRB ALP science',
    changefreq: 'weekly',
    priority: '0.9',
    ogType: 'website',
  },
  {
    routeKey: 'syllabus',
    path: '/syllabus',
    title: 'Railway Exams Syllabus, Selection Stages & CEN Notifications | RailwayPrep PRO',
    description:
      'Complete updated syllabus, negative marking pattern, medical vision standards (A1/A2/B1), and selection pipeline for RRB ALP, Technician, NTPC, Group D, JE & RPF.',
    keywords: 'RRB ALP syllabus 2026, RRB Group D syllabus, RRB Technician exam pattern, Railway medical standard A1',
    changefreq: 'weekly',
    priority: '0.85',
    ogType: 'article',
  },
  {
    routeKey: 'daily-quiz',
    path: '/daily-quiz',
    title: 'Daily Rapid Railway CBT Quiz & Study Streak | RailwayPrep PRO',
    description:
      'Build your daily revision habit with quick high-yield bilingual Science, Mathematics, Reasoning & Static GK quizzes designed for RRB aspirants.',
    keywords: 'Daily railway quiz Hindi English, RRB ALP daily rapid quiz',
    changefreq: 'daily',
    priority: '0.8',
    ogType: 'website',
  },
  {
    routeKey: 'tools',
    path: '/tools',
    title: 'RRB Score Calculator, Expected Cutoff & ALP CBAT Psycho Tools | RailwayPrep PRO',
    description:
      'Calculate negative-marked raw CBT score, check category-wise RRB expected cutoff gauges, and practice Stage-3 ALP CBAT psychometric batteries.',
    keywords: 'RRB ALP score calculator, Railway normalized cutoff predictor, ALP CBAT psycho test practice',
    changefreq: 'weekly',
    priority: '0.8',
    ogType: 'website',
  },
  {
    routeKey: 'books',
    path: '/books',
    title: 'Recommended RRB ALP, Group D & NTPC Preparation Books | RailwayPrep PRO',
    description:
      'Curated bestseller chapterwise Railway Mathematics, NCERT Science, Reasoning & previous year practice sets for RRB aspirants.',
    keywords: 'Best books for RRB ALP, Railway science book Hindi English',
    changefreq: 'monthly',
    priority: '0.7',
    ogType: 'website',
  },
  {
    routeKey: 'pricing',
    path: '/pricing',
    title: 'Pass Pro Pricing & Plans (₹49/Year INR) | RailwayPrep PRO',
    description:
      'Compare Free Aspirant access vs RailwayPrep Pass Pro (₹49/year INR): unlock 225+ CBT mock tests, 26 interactive NCERT Pro Science Labs, solved A4 PDFs & ad-free study.',
    keywords: 'RailwayPrep Pass Pro price, affordable RRB test series pass 49',
    changefreq: 'weekly',
    priority: '0.9',
    ogType: 'website',
  },
  {
    routeKey: 'about-us',
    path: '/about-us',
    title: 'About Us | RailwayPrep PRO Independent Exam Practice Portal',
    description:
      'Learn about RailwayPrep PRO, our independent bilingual CBT simulation technology, NCERT science labs, and commitment to affordable Railway exam preparation.',
    keywords: 'About RailwayPrep PRO, RailwayPrep educational portal',
    changefreq: 'monthly',
    priority: '0.6',
    ogType: 'website',
  },
  {
    routeKey: 'contact-us',
    path: '/contact-us',
    title: 'Contact Us & Grievance Redressal | RailwayPrep PRO',
    description:
      'Reach RailwayPrep PRO Student Support & Grievance Cell at support@railwayprep.com for Pass Pro activation help, refund queries, or content feedback.',
    keywords: 'RailwayPrep contact email, RailwayPrep grievance redressal',
    changefreq: 'monthly',
    priority: '0.6',
    ogType: 'website',
  },
  {
    routeKey: 'privacy-policy',
    path: '/privacy-policy',
    title: 'Privacy Policy | RailwayPrep PRO',
    description:
      'Privacy Policy detailing how RailwayPrep PRO protects student data, Supabase account syncing, browser cookies, and PCI-DSS Razorpay checkout processing.',
    keywords: 'RailwayPrep privacy policy',
    changefreq: 'monthly',
    priority: '0.5',
    ogType: 'article',
  },
  {
    routeKey: 'terms-and-conditions',
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | RailwayPrep PRO',
    description:
      'Terms of service governing mock test usage, INR Pass Pro subscriptions, educational fair use, and intellectual property on RailwayPrep PRO.',
    keywords: 'RailwayPrep terms and conditions',
    changefreq: 'monthly',
    priority: '0.5',
    ogType: 'article',
  },
  {
    routeKey: 'refund-policy',
    path: '/refund-policy',
    title: 'Refund & Cancellation Policy | RailwayPrep PRO',
    description:
      'Transparent digital subscription cancellation rules, 100% failed/duplicate transaction refund eligibility, and 5-7 business day refund timelines.',
    keywords: 'RailwayPrep refund cancellation policy',
    changefreq: 'monthly',
    priority: '0.5',
    ogType: 'article',
  },
  {
    routeKey: 'shipping-policy',
    path: '/shipping-policy',
    title: 'Shipping & Digital Delivery Policy | RailwayPrep PRO',
    description:
      'Digital access delivery policy for RailwayPrep PRO: 100% online mock tests & printable PDFs with instant portal activation and zero physical courier fees.',
    keywords: 'RailwayPrep shipping digital delivery policy',
    changefreq: 'monthly',
    priority: '0.5',
    ogType: 'article',
  },
  {
    routeKey: 'disclaimer',
    path: '/disclaimer',
    title: 'Government & Trademark Disclaimer | RailwayPrep PRO',
    description:
      'Important non-affiliation notice confirming RailwayPrep PRO is an independent private educational portal unrelated to Indian Railways, RRBs, or TCS iON.',
    keywords: 'RailwayPrep disclaimer non affiliation',
    changefreq: 'monthly',
    priority: '0.5',
    ogType: 'article',
  },
];

export const VALID_ROUTE_KEYS = SEO_ROUTES.map((r) => r.routeKey);

export const LEGAL_PAGE_KEYS = [
  'about-us',
  'contact-us',
  'privacy-policy',
  'terms-and-conditions',
  'refund-policy',
  'shipping-policy',
  'disclaimer',
];

export function routeKeyToLegalTab(routeKey) {
  const map = {
    'about-us': 'about',
    'contact-us': 'contact',
    'privacy-policy': 'privacy',
    'terms-and-conditions': 'terms',
    'refund-policy': 'refund',
    'shipping-policy': 'shipping',
    disclaimer: 'disclaimer',
  };
  return map[routeKey] || null;
}

export function legalTabToRouteKey(tabKey) {
  const map = {
    about: 'about-us',
    contact: 'contact-us',
    privacy: 'privacy-policy',
    terms: 'terms-and-conditions',
    refund: 'refund-policy',
    shipping: 'shipping-policy',
    disclaimer: 'disclaimer',
  };
  return map[tabKey] || 'privacy-policy';
}

export function resolveRouteFromLocation(pathname = '/', hash = '') {
  const cleanPath = String(pathname || '/')
    .replace(/\.html$/i, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();

  if (cleanPath && VALID_ROUTE_KEYS.includes(cleanPath)) {
    return cleanPath;
  }

  const cleanHash = String(hash || '')
    .replace(/^#\/?/, '')
    .trim()
    .toLowerCase();

  if (cleanHash && VALID_ROUTE_KEYS.includes(cleanHash)) {
    return cleanHash;
  }

  return 'home';
}

export function getSeoMetaForRoute(routeKey) {
  return SEO_ROUTES.find((r) => r.routeKey === routeKey) || SEO_ROUTES[0];
}

export function applyDocumentSeo(routeKey) {
  if (typeof document === 'undefined') return;
  const meta = getSeoMetaForRoute(routeKey);
  const fullUrl = meta.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${meta.path}`;

  document.title = meta.title;

  const setMeta = (selector, attr, val) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      if (selector.includes('name="')) {
        el.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
      } else if (selector.includes('property="')) {
        el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
      }
      document.head.appendChild(el);
    }
    el.setAttribute(attr, val);
  };

  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('meta[name="keywords"]', 'content', meta.keywords);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', fullUrl);
  setMeta('meta[property="og:type"]', 'content', meta.ogType || 'website');
  setMeta('meta[name="twitter:title"]', 'content', meta.title);
  setMeta('meta[name="twitter:description"]', 'content', meta.description);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', fullUrl);
}
