import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SEO_ROUTES,
  SITE_ORIGIN,
  LEGAL_PAGE_KEYS,
  routeKeyToLegalTab,
} from '../src/utils/seoConfig.js';
import {
  getLegalPolicySections,
  getPublicBusinessMeta,
} from '../src/data/legalPoliciesContent.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildStructuredData(route, meta) {
  const fullUrl = route.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: meta.brandName,
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/logo.jpg`,
      email: meta.supportEmail,
      sameAs: [meta.telegramChannelUrl, meta.telegramGroupUrl],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: meta.brandName,
      url: SITE_ORIGIN,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_ORIGIN}/pyq-explorer?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: route.title,
      description: route.description,
      url: fullUrl,
    },
  ];

  if (route.routeKey === 'pricing' || route.routeKey === 'home') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'RailwayPrep Pass Pro (1 Year Annual VIP)',
      description:
        'Unlimited access to 225+ bilingual RRB ALP, NTPC, Group D, Technician & ITI Trade CBT mock tests, 26 NCERT interactive science labs, and solved PDF exports.',
      brand: { '@type': 'Brand', name: meta.brandName },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: String(meta.passProPrice),
        availability: 'https://schema.org/InStock',
        url: `${SITE_ORIGIN}/pricing`,
      },
    });
  }

  if (route.routeKey === 'pricing') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the price and validity of RailwayPrep Pass Pro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Pass Pro costs ₹${meta.passProPrice} INR one-time for ${meta.passProValidityDays} days (1 full year) with zero auto-recurring charges.`,
          },
        },
        {
          '@type': 'Question',
          name: 'How is digital access delivered after payment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All products are 100% digital. Pass Pro unlocks on your registered portal account immediately upon payment confirmation (within seconds to 15 minutes).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the refund timeline for failed or duplicate transactions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Verified duplicate or unactivated failed debits receive a 100% refund within 5 to 7 business days.',
          },
        },
      ],
    });
  }

  return schemas
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n    ');
}

function buildStaticNavAndFooterHtml(meta) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/mock-tests', label: 'Test Series' },
    { href: '/pyq-explorer', label: 'PYQ Bank' },
    { href: '/super-coaching', label: 'NCERT Science Notes' },
    { href: '/syllabus', label: 'Syllabus' },
    { href: '/daily-quiz', label: 'Daily Quiz' },
    { href: '/pricing', label: `Pricing (₹${meta.passProPrice})` },
    { href: '/tools', label: 'Tools' },
    { href: '/books', label: 'Books' },
  ];

  const footerLinks = [
    { href: '/about-us', label: 'About Us' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/shipping-policy', label: 'Digital Delivery Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return {
    header: `<header style="padding:16px 20px;border-bottom:1px solid #1e293b;background:#070B18;">
      <a href="/" style="color:#fff;font-weight:800;text-decoration:none;font-size:18px;">${escapeHtml(meta.brandName)}</a>
      <nav aria-label="Main navigation" style="margin-top:10px;display:flex;flex-wrap:wrap;gap:12px;">
        ${navLinks.map((l) => `<a href="${l.href}" style="color:#5eead4;font-size:13px;text-decoration:none;">${escapeHtml(l.label)}</a>`).join('')}
      </nav>
    </header>`,
    footer: `<footer style="padding:24px 20px;border-top:1px solid #1e293b;background:#050811;color:#94a3b8;font-size:12px;">
      <p>${escapeHtml(meta.brandName)} is an independent educational portal not affiliated with Ministry of Railways, RRBs, RDSO, or TCS iON.</p>
      <p>Support: <a href="mailto:${escapeHtml(meta.supportEmail)}" style="color:#5eead4;">${escapeHtml(meta.supportEmail)}</a></p>
      <nav aria-label="Legal &amp; Support Links" style="margin-top:10px;display:flex;flex-wrap:wrap;gap:12px;">
        ${footerLinks.map((l) => `<a href="${l.href}" style="color:#cbd5e1;">${escapeHtml(l.label)}</a>`).join('')}
      </nav>
    </footer>`,
  };
}

function buildStaticBodyHtml(route, policies, meta) {
  const { header, footer } = buildStaticNavAndFooterHtml(meta);
  let mainInner = '';

  if (LEGAL_PAGE_KEYS.includes(route.routeKey)) {
    const policyKey = routeKeyToLegalTab(route.routeKey);
    const p = policies[policyKey] || policies.privacy;
    mainInner = `
      <article>
        <h1>${escapeHtml(p.title)}</h1>
        <p>${escapeHtml(p.subtitle)}</p>
        ${p.alertBanner ? `<div><strong>${escapeHtml(p.alertBanner.title)}:</strong> ${escapeHtml(p.alertBanner.body)}</div>` : ''}
        ${p.sections
          .map(
            (s) => `
          <section style="margin-top:18px;">
            <h2>${escapeHtml(s.heading)}</h2>
            ${s.paragraphs.map((para) => `<p>${escapeHtml(para)}</p>`).join('\n')}
          </section>`
          )
          .join('\n')}
      </article>`;
  } else if (route.routeKey === 'pricing') {
    mainInner = `
      <section>
        <h1>RailwayPrep PRO Pricing &amp; Plans (INR)</h1>
        <p>${escapeHtml(route.description)}</p>
        <h2>Free Plan — ₹0 Forever</h2>
        <p>Shift 1 full papers open without login; Shifts 2 &amp; 3 free with account login; full NCERT Class 9 &amp; 10 science text notes and daily quizzes.</p>
        <h2>Pass Pro Annual VIP — ₹${meta.passProPrice} INR / ${meta.passProValidityDays} Days (Regular ₹${meta.passProRegularPrice})</h2>
        <p>Instant digital access to 225+ bilingual CBT mock tests, 15 ITI trade tests, 8,665+ topic PYQs, 26 interactive NCERT Pro labs, unlimited A4 solved PDFs, and 100% ad-free study mode.</p>
        <h2>Free Referral Unlock — ₹0 (90 Days)</h2>
        <p>Invite 4 verified friends during launch campaign (first 500 aspirants) for a 90-day Pass Pro pass.</p>
        <p>Digital delivery activated immediately online with zero shipping fees. See <a href="/shipping-policy">Digital Delivery Policy</a> and <a href="/refund-policy">Refund Policy</a>.</p>
      </section>`;
  } else {
    mainInner = `
      <section>
        <h1>${escapeHtml(route.title)}</h1>
        <p>${escapeHtml(route.description)}</p>
        <p>Built for RRB ALP (CBT-1, CBT-2 Part A &amp; 15 ITI Trades, Stage-3 CBAT), RRB NTPC, RRB Group D Level-1, RRB Technician Grade I &amp; III, RRB JE &amp; RPF aspirants.</p>
        <ul>
          <li><a href="/mock-tests">225+ Bilingual Railway CBT Mock Tests</a></li>
          <li><a href="/pyq-explorer">8,665+ Topic-Wise Railway PYQ Bank</a></li>
          <li><a href="/super-coaching">NCERT Class 9 &amp; 10 Science Visual Pro Notes</a></li>
          <li><a href="/pricing">Pass Pro Plans (₹${meta.passProPrice}/Year INR)</a></li>
        </ul>
      </section>`;
  }

  return `${header}
  <main style="max-width:960px;margin:0 auto;padding:32px 20px;color:#e2e8f0;line-height:1.6;">
    ${mainInner}
  </main>
  ${footer}`;
}

function replaceOrInsertHeadMeta(html, route, structuredDataHtml) {
  const canonicalUrl = route.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
  let out = html;

  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );
  out = out.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="keywords" content="${escapeHtml(route.keywords)}" />`
  );
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${escapeHtml(route.ogType || 'website')}" />`
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

  out = out.replace(/<\/head>/i, `    ${structuredDataHtml}\n  </head>`);
  return out;
}

function generateSitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const items = SEO_ROUTES.map((r) => {
    const loc = r.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${r.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>
`;
}

function main() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const policies = getLegalPolicySections();
  const meta = getPublicBusinessMeta();

  let generatedCount = 0;
  for (const route of SEO_ROUTES) {
    const schemaHtml = buildStructuredData(route, meta);
    const bodyFallback = buildStaticBodyHtml(route, policies, meta);
    let pageHtml = replaceOrInsertHeadMeta(baseHtml, route, schemaHtml);
    pageHtml = pageHtml.replace(
      /<div id="root"><\/div>/i,
      `<div id="root">${bodyFallback}</div>`
    );

    const outPath =
      route.path === '/'
        ? indexHtmlPath
        : path.join(DIST_DIR, `${route.routeKey}.html`);

    fs.writeFileSync(outPath, pageHtml, 'utf8');
    generatedCount++;
  }

  const sitemapXml = generateSitemapXml();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  console.log(`✅ SEO Generator: Wrote ${generatedCount} static crawlable route HTML files + sitemap.xml`);
}

main();
