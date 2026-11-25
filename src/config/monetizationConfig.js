// ==========================================
// RAILWAYPREP PORTAL: MONETIZATION CONFIGURATION
// ==========================================
// Update your credentials, payment IDs, and affiliate links here.
// Everything will update across the entire portal automatically!

export const MONETIZATION_CONFIG = {
  // 1. UPI & PAYMENT DETAILS (For Pass Pro & PDF Sales)
  payments: {
    upiId: 'railwayprep@upi', // Replace with your Google Pay / PhonePe / Paytm UPI ID (e.g., 'yourname@oksbi' or '9876543210@paytm')
    payeeName: 'RailwayPrep PRO',
    passProPrice: 49, // In INR (₹49 for 1 Year Pass Pro)
    pdfBundlePrice: 29, // In INR (₹29 per PDF bundle)
    superComboPrice: 69, // In INR (Pass Pro + All PDFs)
    whatsappSupportNumber: '+919876543210', // Optional WhatsApp support number
    enablePaywall: true, // Tier 1 (Shift 1 Demos + Notes) Open; Tier 2 (Shifts 2-3) Free w/ Login; Tier 3 (Shifts 4-48) Pass Pro OR 4 Referrals!
    requireLoginForRemaining: true, // Tier 2 requires Free Student Login
    razorpayKeyId: '', // Add your Razorpay Live Key ID (e.g., 'rzp_live_XXXX') once KYC is approved
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

  // 2. GOOGLE ADSENSE & AD NETWORKS
  adsense: {
    enabled: true, // Shows Ad slots across the portal
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with your AdSense Pub ID when approved
    slots: {
      headerBanner: '1234567890',
      resultPageBanner: '2345678901',
      inFeedNative: '3456789012',
    },
    // If AdSense is not yet approved, it displays high-converting sponsorship & PDF promotion banners
    fallbackPromo: {
      showFallback: true,
      sponsorContactEmail: 'support@railwayprep.com',
    }
  },

  // 3. AFFILIATE MARKETING (Amazon & Coaching Partners)
  affiliate: {
    amazonTag: 'railwayprep-21', // Replace with your Amazon Associate Tag (e.g. 'yourtag-21')
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
        buyUrl: 'https://www.amazon.in/s?k=YCT+RRB+ALP+Maths&tag=railwayprep-21'
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
        buyUrl: 'https://www.amazon.in/s?k=YCT+General+Science+Railway&tag=railwayprep-21'
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
        buyUrl: 'https://www.amazon.in/s?k=Platform+Rukmini+ALP+CBT1&tag=railwayprep-21'
      },
      {
        id: 'kiran-railway-reasoning',
        title: 'Kiran Railway Reasoning Chapterwise 8700+ TCS Questions',
        publisher: 'Kiran Institute of Career Excellence',
        rating: 4.8,
        reviewsCount: 4180,
        regularPrice: 460,
        offerPrice: 285,
        discount: '38% OFF',
        badge: 'Master Reasoning',
        coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400',
        buyUrl: 'https://www.amazon.in/s?k=Kiran+Railway+Reasoning&tag=railwayprep-21'
      }
    ]
  },

  // 4. TELEGRAM COMMUNITY & SOCIALS
  community: {
    telegramChannelUrl: 'https://t.me/railwayprep_official',
    telegramChannelName: '@RailwayPrep_Official',
    membersCount: '34,500+ Aspirants',
    emailContact: 'support@railwayprep.com',
  }
};
