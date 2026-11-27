import { MONETIZATION_CONFIG, isPlaceholderValue } from '../config/monetizationConfig.js';

export const POLICY_LAST_UPDATED = 'November 27, 2026';

export function getPublicBusinessMeta() {
  const { business, community, payments } = MONETIZATION_CONFIG;
  return {
    brandName: business?.brandName || 'RailwayPrep PRO',
    websiteUrl: business?.websiteUrl || 'https://railwayprep.com',
    legalEntityName: !isPlaceholderValue(business?.legalEntityName) ? business.legalEntityName.trim() : '',
    registeredAddress: !isPlaceholderValue(business?.registeredAddress) ? business.registeredAddress.trim() : '',
    supportPhone: !isPlaceholderValue(business?.supportPhone) ? business.supportPhone.trim() : '',
    supportEmail: business?.supportEmail || community?.emailContact || 'support@railwayprep.com',
    grievanceOfficerName: business?.grievanceOfficerName || 'Compliance & Grievance Redressal Cell, RailwayPrep PRO',
    supportHours: business?.supportHours || 'Monday – Saturday, 10:00 AM – 6:00 PM IST',
    responseSla: business?.responseSla || 'Within 24–48 business hours',
    telegramChannelName: community?.telegramChannelName || '@RailwayPrep_Official',
    telegramChannelUrl: community?.telegramChannelUrl || 'https://t.me/RailwayPrep_Official',
    telegramGroupName: community?.telegramGroupName || '@RailwayPrepDiscuss',
    telegramGroupUrl: community?.telegramGroupUrl || 'https://t.me/RailwayPrepDiscuss',
    passProPrice: payments?.passProPrice || 49,
    passProRegularPrice: payments?.passProRegularPrice || 499,
    passProValidityDays: payments?.passProValidityDays || 365,
  };
}

export function getLegalPolicySections() {
  const meta = getPublicBusinessMeta();

  return {
    about: {
      key: 'about',
      slug: '/about-us',
      tabLabel: 'About Us',
      title: `About ${meta.brandName}`,
      subtitle: 'Independent Computer-Based Test (CBT) Practice & Bilingual Science Revision Portal for Railway Aspirants',
      alertBanner: null,
      sections: [
        {
          heading: '1. Who We Are',
          paragraphs: [
            `${meta.brandName} (${meta.websiteUrl}) is an independent online educational and exam-preparation platform built specifically for candidates preparing for Indian Railway competitive examinations, including RRB Assistant Loco Pilot (ALP CBT-1, CBT-2 Part A & 15 ITI Trades, Stage-3 CBAT), RRB Technician Grade I & III, RRB NTPC (Graduate & Undergraduate), RRB Group D (Level-1), RRB JE, and RPF SI/Constable.`,
            ...(meta.legalEntityName
              ? [`This portal is operated by ${meta.legalEntityName}.`]
              : []),
          ],
        },
        {
          heading: '2. What We Provide',
          paragraphs: [
            '• Realistic CBT Exam Simulation: Bilingual (English & हिंदी) timed mock test interface with real-exam question palettes, section navigation, negative marking (-1/3), per-question speed radar analytics, and mistake tracking.',
            '• Topic-Wise PYQ Bank & Solved Papers: Structured previous year questions filterable by exam, year, subject, chapter, and topic, plus printable A4 bilingual practice & solved PDF sheets.',
            '• Complete NCERT Class 9 & 10 Bilingual Pro Science Notes: Chapter-wise Physics, Chemistry & Biology notes featuring animated SVG interactive labs, visual diagrams, railway hotspot callouts, and memory tricks.',
          ],
        },
        {
          heading: '3. Accessible & Affordable Learning Model',
          paragraphs: [
            `Shift 1 of every exam series and full NCERT Science text notes remain open for free student access. Students seeking full test series coverage across 225+ mocks, interactive labs, and printable solved PDFs can unlock Pass Pro via our ₹${meta.passProPrice}/year plan or earn a 90-day trial by inviting verified friends during launch promotions.`,
          ],
        },
        {
          heading: '4. Independent Status',
          paragraphs: [
            `${meta.brandName} is a private educational initiative and is NOT affiliated with the Ministry of Railways, any Railway Recruitment Board (RRB/RRC), RDSO, or Tata Consultancy Services (TCS / TCS iON).`,
          ],
        },
      ],
    },

    privacy: {
      key: 'privacy',
      slug: '/privacy-policy',
      tabLabel: 'Privacy Policy',
      title: `Privacy Policy — ${meta.brandName}`,
      subtitle: `Last updated: ${POLICY_LAST_UPDATED}`,
      alertBanner: null,
      sections: [
        {
          heading: '1. Overview & Scope',
          paragraphs: [
            `At ${meta.brandName} (${meta.websiteUrl}), protecting student privacy and account security is a core priority. This Privacy Policy describes what information we collect, how we use and protect it, and your rights over your personal data under applicable Indian law including the Digital Personal Data Protection (DPDP) framework.`,
          ],
        },
        {
          heading: '2. Information We Collect',
          paragraphs: [
            '• Account Information: When you register or sign in using Google OAuth or email authentication (powered by Supabase Auth), we store your full name, email address, target exam preference, and optional referral code.',
            '• Study & Performance Telemetry: Test scores, answer logs, per-question time profiles, study streaks, and Mistake Notebook items are stored in browser localStorage and synced to your cloud account so you can resume tests and review solutions across devices.',
            '• Support Communications: Emails sent to our support desk along with transaction reference numbers needed to resolve activation or refund queries.',
          ],
        },
        {
          heading: '3. Payment Processing & Security (Razorpay)',
          paragraphs: [
            `All online payments for Pass Pro memberships (INR ₹${meta.passProPrice}) are processed securely through Razorpay (an RBI-authorized, PCI-DSS compliant payment aggregator) using TLS/HTTPS encryption.`,
            `${meta.brandName} does NOT collect, process, or store your debit/credit card numbers, CVV, net-banking passwords, or UPI PINs on our servers. We only store payment confirmation metadata (order ID, payment ID, transaction status, plan amount, and activation timestamp) to unlock your subscription and generate support records.`,
          ],
        },
        {
          heading: '4. Cookies, Local Storage & Advertising Partners',
          paragraphs: [
            'We use browser storage (localStorage and session cookies) strictly required for login persistence, saved exam sessions, language preferences, and progress sync.',
            'If advertising networks such as Google AdSense are enabled on free-tier pages, third-party vendors may use cookies (including Google advertising cookies) in accordance with Google policies to display relevant ads and measure performance. Paid Pass Pro members receive an ad-free learning environment. You can manage personalized ad preferences via Google Ad Settings.',
          ],
        },
        {
          heading: '5. Data Sharing, Retention & Account Deletion',
          paragraphs: [
            'We do NOT sell, rent, or trade student personal information to third-party telemarketers or data brokers. Data is shared strictly with essential infrastructure providers (Supabase for authentication/database hosting, Cloudflare for edge security/delivery, and Razorpay for checkout processing).',
            `You may request permanent deletion of your ${meta.brandName} account and associated cloud test history at any time by emailing ${meta.supportEmail} from your registered email address. Verified deletion requests are completed within 7 business days.`,
          ],
        },
      ],
    },

    terms: {
      key: 'terms',
      slug: '/terms-and-conditions',
      tabLabel: 'Terms & Conditions',
      title: 'Terms and Conditions',
      subtitle: `Last updated: ${POLICY_LAST_UPDATED}`,
      alertBanner: null,
      sections: [
        {
          heading: '1. Acceptance of Terms',
          paragraphs: [
            `By accessing, browsing, creating an account, or purchasing Pass Pro on ${meta.brandName} (${meta.websiteUrl}), you agree to be bound by these Terms and Conditions and all applicable policies published on this website.`,
          ],
        },
        {
          heading: '2. Educational Use & Content License',
          paragraphs: [
            `${meta.brandName} provides computer-based exam simulations, solved shift papers, NCERT Science visuals, and revision notes strictly for individual, non-commercial educational preparation. Automated scraping, bulk downloading for commercial redistribution, or reselling paid study PDFs and mock test banks is strictly prohibited and may result in immediate account suspension.`,
          ],
        },
        {
          heading: '3. Account Integrity & Pricing (INR)',
          paragraphs: [
            `Accounts are licensed for single-student personal usage. Pass Pro pricing is listed clearly in Indian Rupees (INR ₹) at ₹${meta.passProPrice} per ${meta.passProValidityDays}-day annual term (promotional rate compared against standard ₹${meta.passProRegularPrice} annual tier). Final payable amounts are displayed transparently prior to checkout confirmation.`,
          ],
        },
        {
          heading: '4. Simulated Scores & Examination Results',
          paragraphs: [
            'All-India ranks, expected cutoffs, score predictors, and percentile metrics displayed on the portal are statistical estimates derived from user submissions and historical exam trends. They are provided purely for practice analytics and do not represent or guarantee selection in official Railway Recruitment Board (RRB) examinations.',
          ],
        },
        {
          heading: '5. Intellectual Property & Third-Party Trademarks',
          paragraphs: [
            `All platform UI designs, original bilingual explanations, animated SVG science simulators, and software workflows are the intellectual property of ${meta.brandName}. References to RRB, Railway Recruitment Boards, Indian Railways, or TCS / TCS iON are strictly descriptive of exam syllabi and CBT interface familiarity and imply zero endorsement or affiliation.`,
          ],
        },
        {
          heading: '6. Governing Law & Disputes',
          paragraphs: [
            'These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from use of this portal or digital subscriptions shall first be addressed through our Grievance Officer before invoking competent courts in India.',
          ],
        },
      ],
    },

    refund: {
      key: 'refund',
      slug: '/refund-policy',
      tabLabel: 'Refund & Cancellation',
      title: 'Refund & Cancellation Policy',
      subtitle: `Last updated: ${POLICY_LAST_UPDATED}`,
      alertBanner: null,
      sections: [
        {
          heading: '1. Cancellation Policy (Digital Subscriptions)',
          paragraphs: [
            `${meta.brandName} Pass Pro memberships (₹${meta.passProPrice} / Year) and downloadable/printable PDF libraries are 100% digital educational services unlocked immediately upon payment confirmation. Because instant digital access to all mock tests, interactive labs, and PDF downloads begins upon activation, standard order cancellations after digital delivery/activation are not applicable.`,
          ],
        },
        {
          heading: '2. Eligible Refund Cases (100% Full Refund)',
          paragraphs: [
            'You are eligible for a full refund in the following verified situations:',
            '• Duplicate Payment: Amount was debited more than once for the same Pass Pro order.',
            '• Failed / Pending Debit Without Activation: Payment was deducted from your bank account/UPI/card, and Pass Pro access was neither automatically activated nor manually restored by our team within 24 hours of reporting.',
            '• Unresolved Service Outage: Verified technical inability to access paid Pass Pro features reported within 48 hours of purchase that our support engineers cannot resolve.',
          ],
        },
        {
          heading: '3. Refund Processing Timeline',
          paragraphs: [
            'Approved refunds are initiated within 48 hours of verification and credited to your original payment method (UPI, Debit/Credit Card, Wallet, or NetBanking) within 5–7 business days, subject to your issuing bank or payment gateway settlement schedule.',
          ],
        },
        {
          heading: '4. How to Request Activation Support or a Refund',
          paragraphs: [
            `Write to ${meta.supportEmail} with your registered account email, Razorpay Payment ID / Order ID / Transaction Ref, payment date, and brief issue note. Our team verifies and responds within 24 business hours.`,
          ],
        },
      ],
    },

    shipping: {
      key: 'shipping',
      slug: '/shipping-policy',
      tabLabel: 'Digital Delivery Policy',
      title: 'Shipping & Digital Delivery Policy',
      subtitle: `Last updated: ${POLICY_LAST_UPDATED}`,
      alertBanner: null,
      sections: [
        {
          heading: '1. 100% Digital Educational Platform (Zero Physical Shipping)',
          paragraphs: [
            `${meta.brandName} offers exclusively digital educational products and online SaaS services—namely CBT Mock Test Series access, Interactive NCERT Science Labs, Topic-Wise PYQ Drills, and A4 Printable Study PDFs. We do NOT sell or ship physical books, printed courier packages, or hardware goods directly (third-party bookstore links on our Books page redirect to Amazon.in, whose own shipping terms apply).`,
            'Consequently, there are zero courier charges, zero packaging fees, and zero physical shipping timelines on any purchase made on RailwayPrep PRO.',
          ],
        },
        {
          heading: '2. Delivery Method & Activation Timeline',
          paragraphs: [
            '• Automated Instant Delivery: Upon successful checkout via Razorpay, Pass Pro access is provisioned digitally onto your registered RailwayPrep PRO account immediately (typically within seconds, and no later than 15 minutes during payment webhook retries).',
            '• Access Location: Once activated, you receive instant online dashboard access to all unlocked mock tests, pro visual science chapters, and browser-generated A4 PDF exports—accessible 24×7 from mobile, tablet, or desktop browsers.',
          ],
        },
        {
          heading: '3. Non-Delivery Troubleshooting',
          paragraphs: [
            `If your account still shows Free status more than 15 minutes after successful payment deduction, sign out and log back in to refresh your profile, or email your Payment ID and registered email to ${meta.supportEmail} for priority manual verification within 24 hours.`,
          ],
        },
      ],
    },

    disclaimer: {
      key: 'disclaimer',
      slug: '/disclaimer',
      tabLabel: 'Disclaimer',
      title: 'Government & Trademark Disclaimer',
      subtitle: `Last updated: ${POLICY_LAST_UPDATED}`,
      alertBanner: {
        title: 'Important Non-Affiliation Notice',
        body: `${meta.brandName} is an independent private educational portal. It is NOT an official website of, nor affiliated with, endorsed by, or connected to the Ministry of Railways, Railway Recruitment Boards (RRBs), Railway Recruitment Cells (RRCs), RDSO, Government of India, or Tata Consultancy Services (TCS / TCS iON).`,
      },
      sections: [
        {
          heading: '1. Previous Year Question Papers & Fair Educational Use',
          paragraphs: [
            'Past RRB ALP, Technician, NTPC, and Group D question papers and answer keys referenced on this platform were originally released in the public domain for candidate response sheets and objection review. RailwayPrep PRO compiles, translates, and enriches them with original step-by-step explanations and visual simulations strictly for educational exam practice.',
          ],
        },
        {
          heading: '2. Always Verify Official Recruitment Notices',
          paragraphs: [
            'For authentic CEN recruitment notifications, exam dates, admit cards, city intimation slips, fee rules, and official results, candidates must always rely solely on government portals such as indianrailways.gov.in and regional RRB websites (e.g., rrbcdg.gov.in, rrbapply.gov.in).',
          ],
        },
      ],
    },

    contact: {
      key: 'contact',
      slug: '/contact-us',
      tabLabel: 'Contact & Grievance',
      title: 'Contact Us & Grievance Redressal',
      subtitle: `${meta.brandName} • Student Support & Compliance Desk`,
      alertBanner: null,
      sections: [
        {
          heading: '1. Student Support & Payment Helpdesk',
          paragraphs: [
            `For Pass Pro activation support, refund inquiries, account deletion requests, error reports, or copyright queries, contact us at ${meta.supportEmail}. Please include your registered account email and any relevant Transaction / Payment ID so we can assist swiftly.`,
          ],
        },
        {
          heading: '2. Operating Hours & SLA',
          paragraphs: [
            `Support Hours: ${meta.supportHours}`,
            `Target Response Time: ${meta.responseSla}`,
            ...(meta.supportPhone ? [`Support Helpline: ${meta.supportPhone}`] : []),
            ...(meta.registeredAddress ? [`Operating Address: ${meta.registeredAddress}`] : []),
          ],
        },
        {
          heading: '3. Grievance Redressal Officer',
          paragraphs: [
            `Designated Desk: ${meta.grievanceOfficerName}`,
            ...(meta.legalEntityName ? [`Entity: ${meta.legalEntityName}`] : []),
            `Grievance Email: ${meta.supportEmail}`,
            'All formal payment, consumer, and content takedown grievances are acknowledged within 48 business hours and resolved within applicable statutory timelines.',
          ],
        },
      ],
    },
  };
}
