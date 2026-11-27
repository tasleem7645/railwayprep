// ==========================================
// RAILWAYPREP PORTAL - CENTRAL MONETIZATION, KYC & BRAND CONFIG
// Fill business.legalEntityName, business.registeredAddress, business.supportPhone,
// and payments.razorpayKeyId / payments.upiId right before final Razorpay KYC submission.
// ==========================================

const envRazorpayKey =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_RAZORPAY_KEY_ID
    ? import.meta.env.VITE_RAZORPAY_KEY_ID
    : '';

const envAdSensePubId =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADSENSE_PUB_ID
    ? import.meta.env.VITE_ADSENSE_PUB_ID
    : '';

export const MONETIZATION_CONFIG = {
  // 0. BRAND & COMPLIANCE PROFILE (Privacy-safe defaults until ready for KYC filing)
  business: {
    brandName: 'RailwayPrep PRO',
    websiteUrl: 'https://railwayprep.com',
    legalEntityName: '', // Optional until KYC filing: e.g., PAN / Proprietor / Firm Name
    registeredAddress: '', // Optional until KYC filing: Operating Indian address + PIN code
    supportPhone: '', // Optional until KYC filing: Verified working support number
    supportEmail: 'support@railwayprep.com',
    grievanceOfficerName: 'Compliance & Grievance Redressal Cell, RailwayPrep PRO',
    supportHours: 'Monday – Saturday, 10:00 AM – 6:00 PM IST',
    responseSla: 'Within 24–48 business hours',
    jurisdiction: 'India',
  },

  // 1. PAYMENTS & PASS PRO SUBSCRIPTION (INR)
  payments: {
    upiId: '', // Optional: Set your verified Merchant UPI ID only when live
    payeeName: 'RailwayPrep PRO',
    enableManualUpiFallback: false, // Keep false so unconfigured QR/UPI IDs never display
    passProPrice: 49, // In INR (₹49 for 1 Year Pass Pro — all mock tests, NCERT Pro labs & solved PDFs)
    passProRegularPrice: 499, // Strikethrough comparison price in INR
    passProValidityDays: 365,
    whatsappSupportNumber: '', // Optional verified support WhatsApp number (digits with country code)
    enablePaywall: true, // Shift 1 Open; Shifts 2-3 Free w/ Login; Shifts 4+ Pass Pro OR 4 Referrals
    requireLoginForRemaining: true,
    razorpayKeyId: envRazorpayKey, // Set via VITE_RAZORPAY_KEY_ID or replace with 'rzp_live_XXXX'
  },

  // 1B. VIRAL REFERRAL ENGINE (First-Come-First-Serve 500 Winners)
  referral: {
    enabled: true,
    requiredCount: 4,
    maxSeats: 500,
    rewardMonths: 3,
    mode: 'first_come_free_pro', // Later switch to 'paid_commission' when 500 seats fill
    commissionPerPaidInvite: 10,
  },

  // 2. GOOGLE ADSENSE & HOUSE RESOURCE SLOTS
  adsense: {
    enabled: true,
    publisherId: envAdSensePubId, // Set via VITE_ADSENSE_PUB_ID once AdSense approves railwayprep.com
    slots: {
      headerBanner: '',
      resultPageBanner: '',
      inFeedNative: '',
    },
    fallbackPromo: {
      showFallback: true,
      sponsorContactEmail: 'support@railwayprep.com',
    },
  },

  // 3. AFFILIATE MARKETING (Amazon Associates — Disclosed in AffiliateBooksSection)
  affiliate: {
    amazonTag: 'railwayprep-21',
    recommendedBooks: [
      {
        id: 'yct-alp-maths',
        title: 'YCT RRB ALP / Technician Chapterwise Maths (Bilingual)',
        publisher: 'Youth Competition Times',
        rating: 4.8,
        reviewsCount: 3420,
        regularPrice: 495,
        offerPrice: 295,
        discount: '40% OFF',
        badge: 'Bestseller for Maths',
        coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
        buyUrl: 'https://www.amazon.in/s?k=YCT+RRB+ALP+Maths&tag=railwayprep-21',
      },
      {
        id: 'yct-alp-science',
        title: 'YCT NCERT General Science Chapterwise 14,000+ Solved MCQs',
        publisher: 'Youth Competition Times',
        rating: 4.9,
        reviewsCount: 5210,
        regularPrice: 550,
        offerPrice: 349,
        discount: '36% OFF',
        badge: 'Essential for Science',
        coverUrl: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&q=80&w=400',
        buyUrl: 'https://www.amazon.in/s?k=YCT+General+Science+Railway&tag=railwayprep-21',
      },
      {
        id: 'rukmini-alp-cbt1',
        title: 'Platform Rukmini RRB ALP CBT-1 30 Practice Sets + PYQ',
        publisher: 'Rukmini Prakashan (Platform)',
        rating: 4.7,
        reviewsCount: 2890,
        regularPrice: 320,
        offerPrice: 199,
        discount: '38% OFF',
        badge: 'Top Practice Sets',
        coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
        buyUrl: 'https://www.amazon.in/s?k=Platform+Rukmini+ALP+CBT1&tag=railwayprep-21',
      },
      {
        id: 'kiran-railway-reasoning',
        title: 'Kiran Railway Reasoning Chapterwise 8700+ Previous Year Questions',
        publisher: 'Kiran Institute of Career Excellence',
        rating: 4.8,
        reviewsCount: 4180,
        regularPrice: 460,
        offerPrice: 285,
        discount: '38% OFF',
        badge: 'Master Reasoning',
        coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400',
        buyUrl: 'https://www.amazon.in/s?k=Kiran+Railway+Reasoning&tag=railwayprep-21',
      },
    ],
  },

  // 4. COMMUNITY & SUPPORT CHANNELS
  community: {
    telegramChannelUrl: 'https://t.me/RailwayPrep_Official',
    telegramChannelName: '@RailwayPrep_Official',
    telegramGroupUrl: 'https://t.me/RailwayPrepDiscuss',
    telegramGroupName: '@RailwayPrepDiscuss',
    telegramBotUrl: 'https://t.me/RailwayPrepOfficialBot',
    telegramBotName: '@RailwayPrepOfficialBot',
    membersCount: 'RailwayPrep Community',
    emailContact: 'support@railwayprep.com',
  },
};

export const isPlaceholderValue = (val = '') => {
  const clean = String(val || '').trim();
  if (!clean) return true;
  const upper = clean.toUpperCase();
  return (
    upper.includes('XXXX') ||
    clean === 'railwayprep@upi' ||
    clean.includes('9876543210')
  );
};
