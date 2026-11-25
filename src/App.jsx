import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DailyQuizCard from './components/DailyQuizCard';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import { supabase } from './lib/supabaseClient';
import { MONETIZATION_CONFIG } from './config/monetizationConfig';
import { RAILWAY_TESTS } from './data/mockTestData';
import { CBT2_PART_B_TRADES } from './data/tradeTestsData';
import { hydrateTest } from './data/testQuestionLoader';
import { getStudyStreak, recordStudyActivity } from './utils/studyStreak';
import { isEphemeralQuizId } from './utils/mistakeTestBuilder';
import { 
  Play, CheckCircle2, Clock, Award, Users, BookOpen, 
  ArrowRight, ShieldCheck, Zap, Crown, Flame, Filter, Sparkles, FileText, Lock, Globe, Wrench, Train
} from 'lucide-react';

// Lazy-loaded heavy views & modals for fast initial bundle (<350 KB vs 16 MB)
const CBTMockTestModal = lazy(() => import('./components/CBTMockTestModal'));
const TestResultModal = lazy(() => import('./components/TestResultModal'));
const PassProModal = lazy(() => import('./components/PassProModal'));
const SuperCoachingView = lazy(() => import('./components/SuperCoachingView'));
const DailyQuizView = lazy(() => import('./components/DailyQuizView'));
const SyllabusView = lazy(() => import('./components/SyllabusView'));
const AffiliateBooksSection = lazy(() => import('./components/AffiliateBooksSection'));
const PaidPdfBundleModal = lazy(() => import('./components/PaidPdfBundleModal'));
const AspirantToolsHub = lazy(() => import('./components/AspirantToolsHub'));
const MistakeNotebookModal = lazy(() => import('./components/MistakeNotebookModal'));
const AuthModal = lazy(() => import('./components/AuthModal'));
const UserDashboardModal = lazy(() => import('./components/UserDashboardModal'));
const LegalModal = lazy(() => import('./components/LegalModal'));
const PYQExplorerView = lazy(() => import('./components/PYQExplorerView'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Application Crash Caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4 text-2xl font-black">
            !
          </div>
          <h1 className="text-xl font-bold">कुछ समस्या आई (Something went wrong)</h1>
          <p className="text-xs text-slate-400 mt-2 max-w-md">
            कृपया पेज को रीलोड करें या सुरक्षित रूप से टेस्ट पुनः प्रारंभ करें।
          </p>
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => { localStorage.removeItem('cbt_active_session'); window.location.reload(); }}
              className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-teal-950"
            >
              Reload Application
            </button>
            <button 
              onClick={() => { localStorage.clear(); window.location.reload(); }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 cursor-pointer"
            >
              Clear Cache & Reset
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [_activeTab, _setActiveTab] = useState('home'); // 'home' | 'mock-tests' | 'super-coaching' | 'syllabus' | 'daily-quiz' | 'books' | 'tools'
  const activeTab = _activeTab;

  const setActiveTab = (tab) => {
    _setActiveTab(tab);
    if (window.location.hash !== `#${tab}`) {
      window.location.hash = tab;
    }
  };

  const [selectedGoal, setSelectedGoal] = useState('RRB ALP (Loco Pilot 2026)');
  const [activeExamId, setActiveExamId] = useState(null);

  // Dynamic Hash Routing
  useEffect(() => {
    const validTabs = ['home', 'mock-tests', 'pyq-explorer', 'super-coaching', 'syllabus', 'daily-quiz', 'books', 'tools'];
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (validTabs.includes(hash)) {
        _setActiveTab(hash);
      }
    };

    const initialHash = window.location.hash.replace('#', '').trim();
    if (validTabs.includes(initialHash)) {
      _setActiveTab(initialHash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    if (goal.includes('Part B')) {
      setYearFilter('cbt2-part-b');
      setShiftFilter('all');
      setTradeFilter('all');
      setActiveTab('mock-tests');
    } else if (goal.includes('2025 (CBT-1)')) {
      setYearFilter('2025');
      setShiftFilter('all');
      setActiveTab('mock-tests');
    } else if (goal.includes('CBT-2')) {
      setYearFilter('cbt2');
      setShiftFilter('all');
      setActiveTab('mock-tests');
    } else if (goal.includes('ALP') && goal.includes('2026')) {
      setYearFilter('2026');
      setShiftFilter('all');
      setActiveTab('mock-tests');
    } else if (goal.includes('Technician')) {
      setActiveExamId('tech_02_2026');
      setActiveTab('syllabus');
    } else if (goal.includes('NTPC')) {
      setActiveExamId('ntpc_grad_06_2026');
      setActiveTab('syllabus');
    } else if (goal.includes('Group D')) {
      setYearFilter('groupd-2025');
      setShiftFilter('all');
      setTradeFilter('all');
      setActiveExamId('groupd_09_2025');
      setActiveTab('mock-tests');
    } else if (goal.includes('RPF')) {
      setActiveExamId('rpf_si_constable');
      setActiveTab('syllabus');
    } else if (goal.includes('Station Master')) {
      setActiveExamId('station_master_08_2026');
      setActiveTab('syllabus');
    } else if (goal.includes('JE')) {
      setActiveExamId('je_dms_04_2026');
      setActiveTab('syllabus');
    }
  };

  const handleNavigateFromFooter = (tab, opts = {}) => {
    if (opts.year) {
      setYearFilter(opts.year);
      setShiftFilter('all');
    }
    if (opts.filter) {
      setTestFilter(opts.filter);
    }
    if (opts.examId) {
      setActiveExamId(opts.examId);
    }
    setActiveTab(tab);
  };

  const [selectedLang, setSelectedLang] = useState('hi');
  const [yearFilter, setYearFilter] = useState('all'); // 'all' | '2026' | '2025' | 'cbt2' | 'cbt2-part-b'
  const [tradeFilter, setTradeFilter] = useState('all'); // 'all' | tradeKey
  const [testFilter, setTestFilter] = useState('all'); // 'all' | 'official' | 'sectional'
  const [shiftFilter, setShiftFilter] = useState('all'); // 'all' | specific shift
  const [isPassProOpen, setIsPassProOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isMistakeModalOpen, setIsMistakeModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMessage, setAuthModalMessage] = useState('');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [hasPassPro, setHasPassPro] = useState(false);
  const [campaignStatus, setCampaignStatus] = useState({ max_seats: 500, seats_claimed: 0, seats_left: 500, is_active: true });
  const [activeTest, setActiveTest] = useState(null);
  const [loadingTestId, setLoadingTestId] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [savedSession, setSavedSession] = useState(null);
  const [pendingRefCode, setPendingRefCode] = useState('');
  const [studyStreak, setStudyStreak] = useState(() => getStudyStreak());

  const isPaidPro = Boolean(hasPassPro && profile?.pass_pro_plan === 'paid');

  const openAuthPrompt = (msg = '') => {
    setAuthModalMessage(msg);
    setIsAuthModalOpen(true);
  };

  // Capture ?ref=CODE referral links on initial visit
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      if (ref && ref.trim().length >= 4) {
        const cleanRef = ref.trim().toUpperCase();
        localStorage.setItem('railwayprep_pending_ref', cleanRef);
        setPendingRefCode(cleanRef);
      } else {
        const existingRef = localStorage.getItem('railwayprep_pending_ref');
        if (existingRef) setPendingRefCode(existingRef);
      }
      // Fetch live First-500 referral seat counter
      supabase.rpc('get_referral_campaign_status').then(({ data }) => {
        if (data && typeof data.seats_left === 'number') {
          setCampaignStatus(data);
        }
      });
    } catch (e) {}
  }, []);

  const fetchUserProfile = async (userId) => {
    if (!userId) {
      setProfile(null);
      setHasPassPro(false);
      return;
    }
    try {
      const pendingRef = localStorage.getItem('railwayprep_pending_ref');
      let profileData = null;

      // Prefer atomic self-healing RPC (creates missing OAuth profile & syncs referral/admin flags)
      try {
        const { data: ensured, error: rpcErr } = await supabase.rpc('ensure_my_profile', {
          p_ref_code: pendingRef || null,
        });
        if (!rpcErr && ensured && ensured.id) {
          profileData = ensured;
          if (pendingRef && ensured.referred_by) {
            localStorage.removeItem('railwayprep_pending_ref');
            setPendingRefCode('');
          }
        }
      } catch (e) {}

      // Fallback if ensure_my_profile RPC isn't deployed yet
      if (!profileData) {
        if (pendingRef) {
          try {
            await supabase.rpc('claim_referral', { p_ref_code: pendingRef });
            localStorage.removeItem('railwayprep_pending_ref');
            setPendingRefCode('');
          } catch (e) {}
        }
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();
        profileData = data;
      }

      if (profileData) {
        setProfile(profileData);
        const notExpired = !profileData.pass_pro_expires_at || new Date(profileData.pass_pro_expires_at) > new Date();
        setHasPassPro(Boolean(profileData.is_pass_pro && notExpired));
      }
      // Also restore cloud saved incomplete test session if none locally
      const { data: cloudSess } = await supabase
        .from('saved_sessions')
        .select('*')
        .eq('user_id', userId)
        .single();
      if (cloudSess?.session_data && !isEphemeralQuizId(cloudSess.session_data.testId) && !localStorage.getItem('railwayprep_active_test_session')) {
        localStorage.setItem('railwayprep_active_test_session', JSON.stringify(cloudSess.session_data));
        setSavedSession(cloudSess.session_data);
      }
    } catch (e) {
      console.warn('Profile sync notice:', e);
    }
  };

  // Listen to Supabase Auth State
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: curSession } }) => {
      setSession(curSession);
      if (curSession?.user?.id) {
        fetchUserProfile(curSession.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession?.user?.id) {
        fetchUserProfile(newSession.user.id);
      } else {
        setProfile(null);
        setHasPassPro(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
    setHasPassPro(false);
    setIsDashboardOpen(false);
  };

  // Restore test session if user refreshes or returns
  useEffect(() => {
    try {
      const saved = localStorage.getItem('railwayprep_active_test_session');
      if (saved) {
        const parsedSession = JSON.parse(saved);
        if (parsedSession && parsedSession.testId && !isEphemeralQuizId(parsedSession.testId)) {
          setSavedSession(parsedSession);
        }
      }
    } catch (e) {
      console.warn('Failed to restore active test session:', e);
    }
  }, []);

  const handlePauseAndExit = async (sessionData) => {
    setActiveTest(null);
    if (!sessionData?.testId || isEphemeralQuizId(sessionData.testId)) {
      try {
        localStorage.removeItem('railwayprep_active_test_session');
      } catch (e) {}
      return;
    }
    setSavedSession(sessionData);
    if (session?.user?.id && sessionData?.testId) {
      try {
        await supabase.from('saved_sessions').upsert({
          user_id: session.user.id,
          test_id: sessionData.testId,
          session_data: sessionData,
          updated_at: new Date().toISOString(),
        });
      } catch (e) {}
    }
  };

  const handleResumeTest = async (testId) => {
    if (loadingTestId) return;
    const tId = testId || savedSession?.testId;
    const matchingTest = RAILWAY_TESTS.find(t => t.id === tId);
    if (matchingTest) {
      if (!isTestFree(matchingTest)) {
        setIsPassProOpen(true);
        return;
      }
      setLoadingTestId(matchingTest.id);
      try {
        const hydrated = await hydrateTest(matchingTest);
        setActiveTest(hydrated);
      } catch (err) {
        console.error('Failed to load test questions:', err);
        alert('Test load karne mein problem aayi. Please internet check karke dobara try karein.');
      } finally {
        setLoadingTestId(null);
      }
    }
  };

  const handleDiscardSavedSession = async () => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setSavedSession(null);
    if (session?.user?.id) {
      try {
        await supabase.from('saved_sessions').delete().eq('user_id', session.user.id);
      } catch (e) {}
    }
  };

  const yearTests = RAILWAY_TESTS.filter(test => {
    if (yearFilter === 'groupd-2025') return test.examYear === 'groupd-2025' || test.exam?.includes('Group D');
    if (yearFilter === 'cbt2-part-b') return test.examYear === 'cbt2-part-b' || test.stage === 'CBT-2 Part B';
    if (yearFilter === 'cbt2') return (test.examYear === 'cbt2' || test.stage === 'CBT-2') && test.stage !== 'CBT-2 Part B';
    if (yearFilter === '2025') return (test.examYear === '2025' || test.exam === 'RRB ALP 2025') && !test.stage?.includes('CBT-2') && test.examYear !== 'groupd-2025';
    if (yearFilter === '2026') return test.examYear !== '2025' && test.exam !== 'RRB ALP 2025' && !test.stage?.includes('CBT-2') && test.examYear !== 'groupd-2025';
    return true; // 'all'
  });

  const uniqueShifts = Array.from(new Set(yearTests.map(t => t.shiftName).filter(Boolean)));
  const availableShifts = [
    { key: 'all', label: `All Shifts (${yearTests.length})` },
    ...uniqueShifts.map(s => ({
      key: s,
      label: `${s} (${yearTests.filter(t => t.shiftName === s).length})`
    }))
  ];

  const filteredTests = yearTests.filter(test => {
    const matchesCategory = testFilter === 'all' || test.category === testFilter;
    const matchesShift = shiftFilter === 'all' || test.shiftName === shiftFilter;
    const matchesTrade = tradeFilter === 'all' || test.tradeKey === tradeFilter;
    return matchesCategory && matchesShift && matchesTrade;
  });

  // Shift 1 / Demo test of EVERY exam & EVERY section is open without login
  const isGuestDemoTest = (test) => {
    if (!test) return false;
    if (test.isFreeDemo) return true;
    if (test.examYear === 'groupd-2025' || test.exam?.includes('Group D')) {
      return test.groupDShiftNo === 1 || test.id?.includes('shift1') || test.id?.includes('s1-');
    }
    if (test.category === 'cbt2-part-b' || test.stage === 'CBT-2 Part B') {
      return test.shiftName?.includes('Shift 1') || test.title?.includes('Shift 1');
    }
    return (
      test.shiftName === '03 Nov Shift 1' ||
      test.shiftName === '13 Feb Shift 1' ||
      test.shiftName === '28 Jul Shift 1' ||
      test.id === 'rrb-alp-2025-cbt2-mock-01' ||
      test.id?.includes('shift-1') ||
      test.id?.includes('shift1') ||
      test.id?.includes('-s1')
    );
  };

  // Tier 2: Shifts 2 & 3 of every exam are FREE after login (Lead Capture)
  const isLoginFreeTest = (test) => {
    if (!test) return false;
    if (test.examYear === 'groupd-2025' || test.exam?.includes('Group D')) {
      return test.groupDShiftNo === 2 || test.groupDShiftNo === 3;
    }
    return (
      test.shiftName?.includes('Shift 2') ||
      test.shiftName?.includes('Shift 3') ||
      test.id?.includes('shift2') ||
      test.id?.includes('shift-2') ||
      test.id?.includes('shift3') ||
      test.id?.includes('shift-3')
    );
  };

  // Returns: 'open' | 'login_required' | 'pass_pro_required'
  const getTestAccess = (test) => {
    if (isGuestDemoTest(test) || hasPassPro) return 'open';
    if (isLoginFreeTest(test)) {
      return session?.user ? 'open' : 'login_required';
    }
    if (MONETIZATION_CONFIG.payments.enablePaywall) {
      return 'pass_pro_required';
    }
    if (MONETIZATION_CONFIG.payments.requireLoginForRemaining && !session?.user) {
      return 'login_required';
    }
    return 'open';
  };

  const isTestFree = (test) => getTestAccess(test) === 'open';

  const handleStartMock = async (test = RAILWAY_TESTS[0], lang = selectedLang) => {
    if (loadingTestId) return;
    const access = getTestAccess(test);
    if (access === 'login_required') {
      openAuthPrompt('🎁 Launch Offer: Sabhi 86+ Official Shifts & Solutions FREE unlock karne ke liye 10 sec mein Student Account Login karein!');
      return;
    }
    if (access === 'pass_pro_required') {
      setIsPassProOpen(true);
      return;
    }
    setLoadingTestId(test.id);
    try {
      const hydrated = await hydrateTest(test);
      try {
        localStorage.removeItem('railwayprep_active_test_session');
      } catch (e) {}
      setSavedSession(null);
      setSelectedLang(lang);
      setActiveTest(hydrated);
    } catch (err) {
      console.error('Failed to load test questions:', err);
      alert('Test load karne mein problem aayi. Please internet check karke dobara try karein.');
    } finally {
      setLoadingTestId(null);
    }
  };

  const handleCloseActiveTest = () => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setSavedSession(null);
    setActiveTest(null);
  };

  const handleSubmitTest = async (resultData) => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setSavedSession(null);
    setActiveTest(null);
    setTestResult(resultData);

    if (!resultData?.test) return;

    const { test, answers, timeTakenSeconds } = resultData;
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    test.questions.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns === undefined) {
        unattemptedCount++;
      } else {
        const isCorrect =
          userAns === q.correctIndex ||
          (q.correctIndexHi !== undefined && userAns === q.correctIndexHi);
        if (isCorrect) correctCount++;
        else wrongCount++;
      }
    });
    const pos = test.positiveMarks || 1;
    const neg = test.negativeMarks || 0.33;
    const rawScore = Number(Math.max(0, correctCount * pos - wrongCount * neg).toFixed(2));
    const attempted = correctCount + wrongCount;
    const accuracy = attempted > 0 ? Number(((correctCount / attempted) * 100).toFixed(2)) : 0;

    // Record daily consecutive study streak locally for both guests and logged-in students
    setStudyStreak(recordStudyActivity({ questionsCount: test.questions.length, accuracy }));

    // Sync test attempt to Supabase Cloud if logged in
    if (session?.user?.id) {
      try {
        if (!test.isCustomTopicQuiz) {
          await supabase.from('saved_sessions').delete().eq('user_id', session.user.id);
        }
        await supabase.from('test_attempts').insert({
          user_id: session.user.id,
          test_id: test.id,
          test_title: test.title,
          score: rawScore,
          total_marks: test.totalMarks || test.questions.length * pos,
          correct_count: correctCount,
          wrong_count: wrongCount,
          unattempted_count: unattemptedCount,
          accuracy,
          time_taken_seconds: timeTakenSeconds || 0,
          answers_json: answers,
        });
        setTestResult((prev) => (prev ? { ...prev, attemptSyncedAt: Date.now() } : prev));
      } catch (e) {
        console.warn('Cloud test attempt sync notice:', e);
      }
    }
  };

  const handleRetakeTest = async () => {
    if (loadingTestId) return;
    const baseTest = testResult?.test || RAILWAY_TESTS[0];
    setLoadingTestId(baseTest.id);
    try {
      const hydrated =
        baseTest.isCustomTopicQuiz && Array.isArray(baseTest.questions)
          ? baseTest
          : await hydrateTest(baseTest);
      try {
        localStorage.removeItem('railwayprep_active_test_session');
      } catch (e) {}
      setSavedSession(null);
      setTestResult(null);
      setActiveTest(hydrated);
    } catch (err) {
      console.error('Failed to reload test:', err);
      alert('Test reload karne mein problem aayi.');
    } finally {
      setLoadingTestId(null);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPassPro={() => setIsPassProOpen(true)}
        onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
        onOpenMistakes={() => setIsMistakeModalOpen(true)}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        selectedGoal={selectedGoal}
        onSelectGoal={handleSelectGoal}
        user={session?.user || null}
        profile={profile}
        hasPassPro={hasPassPro}
        studyStreak={studyStreak}
        onOpenAuth={() => openAuthPrompt('')}
        onOpenDashboard={() => setIsDashboardOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {!session?.user && pendingRefCode && (
          <div className="bg-gradient-to-r from-emerald-950/90 via-teal-950/90 to-slate-900 border-b border-emerald-500/30 px-4 py-2.5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-200 font-semibold text-center sm:text-left">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-black">
                  REF: {pendingRefCode}
                </span>
                <span>🎁 Friend Invite Applied! Free Account Login par Shifts 2 & 3 turant unlock honge.</span>
              </div>
              <button
                onClick={() => openAuthPrompt(`🎁 Invite Code ${pendingRefCode} Applied! 1-Click Google Login se Shifts 2 & 3 Free Unlock karein:`)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shrink-0 cursor-pointer transition-all"
              >
                Claim Free Account →
              </button>
            </div>
          </div>
        )}
        {activeTab === 'home' && (
          <>
            <HeroSection
              onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
              onExploreNotes={() => setActiveTab('super-coaching')}
              onOpenPassPro={() => setIsPassProOpen(true)}
            />

            {/* Ongoing / Incomplete Test Resume Banner (Testbook Style UX) */}
            {savedSession && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-amber-950/50 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 text-center sm:text-left">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xl font-black animate-pulse">
                      ⏸
                    </div>
                    <div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                          Incomplete Test / प्रगति सुरक्षित
                        </span>
                        <span className="text-xs text-slate-400 hidden sm:inline">
                          Q.{savedSession.currentIndex + 1} • हल किए: {Object.keys(savedSession.answers || {}).length} प्रश्न
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                        {RAILWAY_TESTS.find(t => t.id === savedSession.testId)?.title || 'Railway Mock Test'}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                    <button
                      onClick={handleDiscardSavedSession}
                      className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                    >
                      रद्द करें (Discard)
                    </button>
                    <button
                      onClick={() => handleResumeTest(savedSession.testId)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 text-xs font-black shadow-lg shadow-teal-950 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>Resume Test (रीज़्यूम करें)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* High-Converting Ad & Study Material Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AdBanner 
                slot="header" 
                onOpenPassPro={() => setIsPassProOpen(true)} 
                onOpenPdfModal={() => setIsPdfModalOpen(true)}
                hideAds={isPaidPro}
              />
            </div>

            {/* Test Series Section on Home */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live All-India Test Series</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    Trending Railway Mock Tests
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Authentic TCS iON CBT software interface with detailed Hindi/English solutions.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('syllabus')}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Exam Syllabus</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('mock-tests')}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View All Tests</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Exam Cycle / Year Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Exam Cycle:</span>
                </span>
                <button
                  onClick={() => { setYearFilter('all'); setShiftFilter('all'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    yearFilter === 'all'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-md shadow-teal-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  All Exams ({RAILWAY_TESTS.length})
                </button>
                <button
                  onClick={() => { setYearFilter('2026'); setShiftFilter('all'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    yearFilter === '2026'
                      ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🎯 RRB ALP 2026 CBT-1 ({RAILWAY_TESTS.filter(t => t.examYear !== '2025' && t.exam !== 'RRB ALP 2025').length} Tests • 9 Shifts)
                </button>
                <button
                  onClick={() => { setYearFilter('2025'); setShiftFilter('all'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    yearFilter === '2025'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-black shadow-md shadow-indigo-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚡ RRB ALP 2025 CBT-1 ({RAILWAY_TESTS.filter(t => (t.examYear === '2025' || t.exam === 'RRB ALP 2025') && t.stage !== 'CBT-2').length} Tests • 10 Shifts)
                </button>
                <button
                  onClick={() => { setYearFilter('cbt2'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    yearFilter === 'cbt2'
                      ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-slate-950 font-black shadow-md shadow-rose-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🚀 RRB ALP CBT-2 Part A ({RAILWAY_TESTS.filter(t => (t.examYear === 'cbt2' || t.stage === 'CBT-2') && t.stage !== 'CBT-2 Part B').length} Tests • 2 Shifts • 100 Qs)
                </button>
                <button
                  onClick={() => { setYearFilter('cbt2-part-b'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    yearFilter === 'cbt2-part-b'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-black shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚙️ ALP CBT-2 Part B Trades ({RAILWAY_TESTS.filter(t => t.stage === 'CBT-2 Part B').length} Tests • 15 Trades • 75 Qs)
                </button>
                <button
                  onClick={() => { setYearFilter('groupd-2025'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    yearFilter === 'groupd-2025'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🚆 RRB Group D 2025 ({RAILWAY_TESTS.filter(t => t.examYear === 'groupd-2025').length} Tests • 48 Shifts • 100 Qs)
                </button>
              </div>

              {/* Trade Selector Filter Tabs when Part B is selected or in All */}
              {(yearFilter === 'cbt2-part-b' || (yearFilter === 'all' && tradeFilter !== 'all')) && (
                <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-900/80 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-cyan-400" />
                      <span>Select Technical Trade (Qualifying Paper • 35% Qualifying Marks):</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {tradeFilter === 'all' ? 'All 15 Trades' : CBT2_PART_B_TRADES.find(t => t.key === tradeFilter)?.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setTradeFilter('all')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        tradeFilter === 'all'
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      All Trades (30)
                    </button>
                    {CBT2_PART_B_TRADES.map(t => {
                      const count = RAILWAY_TESTS.filter(test => test.tradeKey === t.key).length;
                      return (
                        <button
                          key={t.key}
                          onClick={() => setTradeFilter(t.key)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            tradeFilter === t.key
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                              : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          <span>{t.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                            tradeFilter === t.key ? 'bg-slate-950/60 text-white font-extrabold' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Group D Sub-filter Tabs when groupd-2025 is selected */}
              {yearFilter === 'groupd-2025' && (
                <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-slate-900/80 border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <Train className="w-4 h-4 text-emerald-400" />
                      <span>RRB Group D 2025 Level-1 (CEN 09/2025): 48 Shifts • 100 Qs • Section Switching Flexibility</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      ⚡ Shift 1 is 100% Free Demo (Full + 4 Sectionals)
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => { setTestFilter('all'); setShiftFilter('all'); }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'all' && shiftFilter === 'all'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      All Group D Tests ({RAILWAY_TESTS.filter(t => t.examYear === 'groupd-2025').length})
                    </button>
                    <button
                      onClick={() => { setTestFilter('full-mock'); setShiftFilter('all'); }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'full-mock'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Full Papers (48 Shifts • 100 Qs)
                    </button>
                    <button
                      onClick={() => { setTestFilter('sectional'); setShiftFilter('all'); }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'sectional'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Shift 1 Sectionals (Science, Maths, Reasoning, GA)
                    </button>
                  </div>
                </div>
              )}

              {/* Shift Selector Filter Tabs on Home */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-teal-400" />
                  <span>Filter by Shift:</span>
                </span>
                {availableShifts.map(s => (
                  <button
                    key={s.key}
                    onClick={() => setShiftFilter(s.key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      shiftFilter === s.key
                        ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Test Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map((test) => {
                  const free = isTestFree(test);
                  return (
                    <div
                      key={test.id}
                      className={`p-6 rounded-3xl bg-slate-900/70 border transition-all shadow-xl group flex flex-col justify-between ${
                        !free && !hasPassPro ? 'border-amber-500/20 hover:border-amber-500/50' : 'border-slate-800 hover:border-teal-500/50 hover:bg-slate-900'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                              test.badgeColor === 'teal' 
                                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                                : test.badgeColor === 'indigo'
                                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                                : test.badgeColor === 'purple'
                                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            }`}>
                              {test.badge}
                            </span>
                            {getTestAccess(test) === 'open' ? (
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                                {isGuestDemoTest(test) ? 'FREE DEMO' : 'FREE UNLOCKED'}
                              </span>
                            ) : getTestAccess(test) === 'login_required' ? (
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/40 flex items-center gap-1">
                                <Lock className="w-3 h-3" />
                                <span>FREE WITH LOGIN</span>
                              </span>
                            ) : (
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                                <Lock className="w-3 h-3" />
                                <span>PASS PRO</span>
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400 font-semibold">
                            {test.shiftTime || 'CBT MOCK'}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-2">
                          {test.title}
                        </h3>

                        <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-slate-800/80 text-center text-xs">
                          <div>
                            <div className="text-slate-400 text-[10px]">Questions</div>
                            <div className="font-bold text-white mt-0.5">{test.totalQuestions} Qs</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">Max Marks</div>
                            <div className="font-bold text-teal-400 mt-0.5">{test.maxMarks} Marks</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">Time</div>
                            <div className="font-bold text-amber-400 mt-0.5">{test.durationMinutes} Mins</div>
                          </div>
                        </div>

                        <div className="text-[11px] text-slate-400 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                            <span className="text-teal-300 font-medium">{test.sectionSummary || 'Official Railway CBT Pattern'}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                            <span>Marking: +1.00 / Negative: -0.33</span>
                          </div>
                        </div>
                      </div>

                      {getTestAccess(test) === 'login_required' ? (
                        <button
                          onClick={() => handleStartMock(test)}
                          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 hover:from-teal-500 hover:to-emerald-500 text-teal-300 hover:text-slate-950 border border-teal-500/50 font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <Lock className="w-4 h-4" />
                          <span>Free Unlock with Login (Launch Offer)</span>
                        </button>
                      ) : getTestAccess(test) === 'pass_pro_required' ? (
                        <button
                          onClick={() => setIsPassProOpen(true)}
                          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all cursor-pointer"
                        >
                          <Lock className="w-4 h-4" />
                          <span>Unlock with Pass Pro (₹{MONETIZATION_CONFIG.payments.passProPrice})</span>
                        </button>
                      ) : savedSession?.testId === test.id ? (
                        <button
                          disabled={Boolean(loadingTestId)}
                          onClick={() => handleResumeTest(test.id)}
                          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all cursor-pointer animate-pulse disabled:opacity-60"
                        >
                          <Play className="w-4 h-4 fill-slate-950" />
                          <span>
                            {loadingTestId === test.id
                              ? 'Loading Questions...'
                              : `Resume Test (Q.${savedSession.currentIndex + 1} से जारी रखें)`}
                          </span>
                        </button>
                      ) : (
                        <button
                          disabled={Boolean(loadingTestId)}
                          onClick={() => handleStartMock(test)}
                          className="mt-6 w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950 transition-all cursor-pointer disabled:opacity-60"
                        >
                          <Play className="w-4 h-4 fill-slate-950" />
                          <span>{loadingTestId === test.id ? 'Loading Shift...' : 'Attempt CBT Mock Test Now'}</span>
                        </button>
                      )}
                    </div>
                  );
                })}

                {/* Card 2: Pass Pro Upgrade Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/40 shadow-xl flex flex-col justify-between text-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 mx-auto mb-3">
                      <Crown className="w-6 h-6 fill-amber-300" />
                    </div>
                    <h3 className="text-lg font-black text-white">Unlock 50+ Full Mock Tests</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Get full CBT access for RRB NTPC, ALP CBT-2, Group D with All-India Rank.
                    </p>
                    <div className="my-4 text-2xl font-black text-amber-400">
                      ₹49 <span className="text-xs text-slate-400 font-normal">/ Full Year</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPassProOpen(true)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950 cursor-pointer"
                  >
                    <span>Upgrade to Pass Pro</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Daily Quiz Streak Section */}
            <DailyQuizCard onStartMock={() => setActiveTab('daily-quiz')} />

            {/* SuperCoaching Highlights */}
            <Suspense fallback={null}>
              <SuperCoachingView onOpenPassPro={() => setIsPassProOpen(true)} hasPassPro={hasPassPro} />
            </Suspense>
          </>
        )}

        {activeTab === 'mock-tests' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-extrabold text-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Testbook & TCS iON CBT Engine • Bilingual Bilingual Tests</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Railway Exam All-India CBT Test Series</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Simulated on authentic TCS iON software layout with bilingual per-question toggle, 1/3rd negative marking, and detailed solutions.
              </p>

              {/* Exam Cycle Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => { setYearFilter('all'); setShiftFilter('all'); }}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    yearFilter === 'all'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md shadow-teal-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  All Exams ({RAILWAY_TESTS.length})
                </button>
                <button
                  onClick={() => { setYearFilter('2026'); setShiftFilter('all'); }}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    yearFilter === '2026'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🎯 RRB ALP 2026 CBT-1 ({RAILWAY_TESTS.filter(t => t.examYear !== '2025' && t.exam !== 'RRB ALP 2025').length} Tests • 9 Shifts)
                </button>
                <button
                  onClick={() => { setYearFilter('2025'); setShiftFilter('all'); }}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    yearFilter === '2025'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚡ RRB ALP 2025 CBT-1 ({RAILWAY_TESTS.filter(t => (t.examYear === '2025' || t.exam === 'RRB ALP 2025') && t.stage !== 'CBT-2').length} Tests • 10 Shifts)
                </button>
                <button
                  onClick={() => { setYearFilter('cbt2'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    yearFilter === 'cbt2'
                      ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-slate-950 shadow-md shadow-rose-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🚀 RRB ALP CBT-2 Part A ({RAILWAY_TESTS.filter(t => (t.examYear === 'cbt2' || t.stage === 'CBT-2') && t.stage !== 'CBT-2 Part B').length} Tests • 2 Shifts • 100 Qs)
                </button>
                <button
                  onClick={() => { setYearFilter('cbt2-part-b'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    yearFilter === 'cbt2-part-b'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚙️ ALP CBT-2 Part B Trades ({RAILWAY_TESTS.filter(t => t.stage === 'CBT-2 Part B').length} Tests • 15 Trades • 75 Qs)
                </button>
                <button
                  onClick={() => { setYearFilter('groupd-2025'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    yearFilter === 'groupd-2025'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🚆 RRB Group D 2025 ({RAILWAY_TESTS.filter(t => t.examYear === 'groupd-2025').length} Tests • 48 Shifts • 100 Qs)
                </button>
              </div>

              {/* Trade Selector Filter on Mock Tests View */}
              {(yearFilter === 'cbt2-part-b' || (yearFilter === 'all' && tradeFilter !== 'all')) && (
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-900/80 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-cyan-400" />
                      <span>Select Technical Trade (Qualifying Paper • 35% Qualifying Marks):</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {tradeFilter === 'all' ? 'All 15 Trades' : CBT2_PART_B_TRADES.find(t => t.key === tradeFilter)?.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={() => setTradeFilter('all')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        tradeFilter === 'all'
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      All Trades (30)
                    </button>
                    {CBT2_PART_B_TRADES.map(t => {
                      const count = RAILWAY_TESTS.filter(test => test.tradeKey === t.key).length;
                      return (
                        <button
                          key={t.key}
                          onClick={() => setTradeFilter(t.key)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            tradeFilter === t.key
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                              : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          <span>{t.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                            tradeFilter === t.key ? 'bg-slate-950/60 text-white font-extrabold' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Group D Sub-filter Tabs on Mock Tests View */}
              {yearFilter === 'groupd-2025' && (
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-slate-900/80 border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <Train className="w-4 h-4 text-emerald-400" />
                      <span>RRB Group D 2025 Level-1 (CEN 09/2025): 48 Shifts • 100 Qs • Section Switching Flexibility</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      ⚡ Shift 1 is 100% Free Demo (Full + 4 Sectionals)
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={() => { setTestFilter('all'); setShiftFilter('all'); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'all' && shiftFilter === 'all'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      All Group D Tests ({RAILWAY_TESTS.filter(t => t.examYear === 'groupd-2025').length})
                    </button>
                    <button
                      onClick={() => { setTestFilter('full-mock'); setShiftFilter('all'); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'full-mock'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Full Papers (48 Shifts • 100 Qs)
                    </button>
                    <button
                      onClick={() => { setTestFilter('sectional'); setShiftFilter('all'); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'sectional'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Shift 1 Sectionals (Science, Maths, Reasoning, GA)
                    </button>
                  </div>
                </div>
              )}

              {/* Shift Filter Tabs */}
              <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto no-scrollbar">
                {availableShifts.map(s => (
                  <button
                    key={s.key}
                    onClick={() => setShiftFilter(s.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      shiftFilter === s.key
                        ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center justify-center gap-2 mt-3 overflow-x-auto no-scrollbar">
                {[
                  { key: 'all', label: `All Test Types (${shiftFilter === 'all' ? yearTests.length : yearTests.filter(t => t.shiftName === shiftFilter).length})` },
                  { key: 'full-shift', label: `Full Shift Official Papers (${shiftFilter === 'all' ? yearTests.filter(t => t.category === 'full-shift').length : yearTests.filter(t => t.shiftName === shiftFilter && t.category === 'full-shift').length})` },
                  { key: 'sectional', label: `Sectional Tests (${shiftFilter === 'all' ? yearTests.filter(t => t.category === 'sectional').length : yearTests.filter(t => t.shiftName === shiftFilter && t.category === 'sectional').length})` }
                ].map(f => (
                  <button
                    key={f.key}
                    onClick={() => setTestFilter(f.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      testFilter === f.key
                        ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High-Impact Monetization Banner */}
            <AdBanner 
              slot="header" 
              onOpenPassPro={() => setIsPassProOpen(true)} 
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
              hideAds={isPaidPro}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map(test => {
                const free = isTestFree(test);
                return (
                  <div 
                    key={test.id} 
                    className={`p-6 rounded-3xl bg-slate-900/80 border transition-all shadow-xl flex flex-col justify-between group ${
                      !free && !hasPassPro ? 'border-amber-500/20 hover:border-amber-500/50' : 'border-slate-800 hover:border-teal-500/50 hover:bg-slate-900'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                            test.badgeColor === 'teal' 
                              ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                              : test.badgeColor === 'indigo'
                              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                              : test.badgeColor === 'purple'
                              ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          }`}>
                            {test.badge}
                          </span>
                          {getTestAccess(test) === 'open' ? (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                              {isGuestDemoTest(test) ? 'FREE DEMO' : 'FREE UNLOCKED'}
                            </span>
                          ) : getTestAccess(test) === 'login_required' ? (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/40 flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              <span>FREE W/ LOGIN</span>
                            </span>
                          ) : (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              <span>PASS PRO</span>
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-slate-400">
                          {test.shiftTime || 'TCS iON CBT'}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-1.5">
                        {test.title}
                      </h3>
                      <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                        {test.subTitle}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center text-xs mb-4">
                        <div>
                          <div className="text-slate-400 text-[10px]">Questions</div>
                          <div className="font-extrabold text-white mt-0.5">{test.totalQuestions} Qs</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-[10px]">Max Marks</div>
                          <div className="font-extrabold text-teal-400 mt-0.5">{test.maxMarks} Marks</div>
                        </div>
                        <div>
                          <div className="text-slate-400 text-[10px]">Duration</div>
                          <div className="font-extrabold text-amber-400 mt-0.5">{test.durationMinutes} Mins</div>
                        </div>
                      </div>

                      {/* Features list */}
                      <div className="text-[11px] text-slate-400 space-y-1.5 mb-5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span className="text-teal-300 font-semibold">{test.sectionSummary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>Bilingual (English & हिन्दी with per-question toggle)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>Negative: -{test.negativeMarks} mark • Positive: +{test.positiveMarks}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Open vs Login Required vs Locked with Pass Pro */}
                    {getTestAccess(test) === 'login_required' ? (
                      <div className="pt-2 border-t border-slate-800">
                        <button
                          onClick={() => handleStartMock(test)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 hover:from-teal-500 hover:to-emerald-500 text-teal-300 hover:text-slate-950 font-black text-xs border border-teal-500/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Free Unlock with Login (Launch Offer)</span>
                        </button>
                      </div>
                    ) : getTestAccess(test) === 'pass_pro_required' ? (
                      <div className="pt-2 border-t border-slate-800">
                        <button
                          onClick={() => setIsPassProOpen(true)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Unlock with Pass Pro (₹{MONETIZATION_CONFIG.payments.passProPrice})</span>
                        </button>
                      </div>
                    ) : savedSession?.testId === test.id ? (
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <button
                          disabled={Boolean(loadingTestId)}
                          onClick={() => handleResumeTest(test.id)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-950/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer animate-pulse disabled:opacity-60"
                        >
                          <Play className="w-3.5 h-3.5 fill-slate-950" />
                          <span>
                            {loadingTestId === test.id
                              ? 'Loading Questions...'
                              : `Resume Test (Q.${savedSession.currentIndex + 1} से जारी रखें)`}
                          </span>
                        </button>
                        <div className="flex items-center justify-between text-[10px] px-1 text-slate-400">
                          <span>प्रगति सुरक्षित • {Object.keys(savedSession.answers || {}).length} हल</span>
                          <button onClick={handleDiscardSavedSession} className="text-rose-400 hover:underline">Restart (शुरू से)</button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                        <button
                          disabled={Boolean(loadingTestId)}
                          onClick={() => handleStartMock(test, 'hi')}
                          className="py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                        >
                          <Play className="w-3.5 h-3.5 fill-slate-950" />
                          <span>{loadingTestId === test.id ? 'Loading...' : 'हिंदी में दें'}</span>
                        </button>
                        <button
                          disabled={Boolean(loadingTestId)}
                          onClick={() => handleStartMock(test, 'en')}
                          className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{loadingTestId === test.id ? 'Loading...' : 'In English'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs text-slate-400">
              Loading module...
            </div>
          }
        >
          {activeTab === 'pyq-explorer' && (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <AdBanner slot="inFeedNative" onOpenPassPro={() => setIsPassProOpen(true)} onOpenPdfModal={() => setIsPdfModalOpen(true)} hideAds={isPaidPro} />
              </div>
              <PYQExplorerView
                railwayTests={RAILWAY_TESTS}
                getTestAccess={getTestAccess}
                session={session}
                onOpenAuth={openAuthPrompt}
                onOpenPassPro={() => setIsPassProOpen(true)}
                onStartTopicQuiz={(customQuiz) => {
                  setSavedSession(null);
                  setActiveTest(customQuiz);
                }}
              />
            </>
          )}

          {activeTab === 'super-coaching' && (
            <SuperCoachingView 
              onOpenPassPro={() => setIsPassProOpen(true)} 
              hasPassPro={hasPassPro}
              hideAds={isPaidPro}
              user={session?.user || null}
              onOpenAuth={openAuthPrompt}
            />
          )}

          {activeTab === 'syllabus' && (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <AdBanner slot="inFeedNative" onOpenPassPro={() => setIsPassProOpen(true)} onOpenPdfModal={() => setIsPdfModalOpen(true)} hideAds={isPaidPro} />
              </div>
              <SyllabusView
                onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
                onOpenPassPro={() => setIsPassProOpen(true)}
                activeExamId={activeExamId}
              />
            </>
          )}

          {activeTab === 'daily-quiz' && (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <AdBanner slot="inFeedNative" onOpenPassPro={() => setIsPassProOpen(true)} onOpenPdfModal={() => setIsPdfModalOpen(true)} hideAds={isPaidPro} />
              </div>
              <DailyQuizView 
                onOpenPassPro={() => setIsPassProOpen(true)} 
                onOpenMistakes={() => setIsMistakeModalOpen(true)}
                onRecordStudy={(payload) => setStudyStreak(recordStudyActivity(payload))}
                studyStreak={studyStreak}
              />
            </>
          )}

          {activeTab === 'books' && (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <AdBanner slot="inFeedNative" onOpenPassPro={() => setIsPassProOpen(true)} onOpenPdfModal={() => setIsPdfModalOpen(true)} hideAds={isPaidPro} />
              </div>
              <AffiliateBooksSection />
            </>
          )}

          {activeTab === 'tools' && (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <AdBanner slot="inFeedNative" onOpenPassPro={() => setIsPassProOpen(true)} onOpenPdfModal={() => setIsPdfModalOpen(true)} hideAds={isPaidPro} />
              </div>
              <AspirantToolsHub 
                onStartMock={() => handleStartMock(RAILWAY_TESTS[0])} 
                onOpenPassPro={() => setIsPassProOpen(true)} 
              />
            </>
          )}
        </Suspense>
      </main>

      {/* Footer with Legal & Compliance */}
      <Footer 
        onOpenPassPro={() => setIsPassProOpen(true)} 
        onOpenLegalModal={(tab) => setLegalModalTab(tab)}
        onOpenMistakes={() => setIsMistakeModalOpen(true)}
        onNavigateTab={handleNavigateFromFooter}
      />

      {/* Instant non-blocking CBT shift loader toast */}
      {loadingTestId && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="px-6 py-4 rounded-2xl bg-slate-900 border border-teal-500/40 shadow-2xl flex items-center gap-3 text-sm font-bold text-white">
            <span className="w-4 h-4 rounded-full border-2 border-teal-400 border-t-transparent animate-spin" />
            <span>Loading TCS iON CBT Exam Paper...</span>
          </div>
        </div>
      )}

      <Suspense fallback={null}>
        {/* CBT Mock Test Simulator Modal (with session persistence & refresh protection) */}
        {activeTest && (
          <CBTMockTestModal
            test={activeTest}
            defaultLang={selectedLang}
            savedSession={savedSession}
            onClose={handleCloseActiveTest}
            onSubmitTest={handleSubmitTest}
            onPauseAndExit={handlePauseAndExit}
          />
        )}

        {/* Test Result Scorecard Modal with AdSlot */}
        {testResult && (
          <TestResultModal
            result={testResult}
            user={session?.user || null}
            profile={profile}
            studyStreak={studyStreak}
            onClose={() => setTestResult(null)}
            onRetake={handleRetakeTest}
            onOpenPassPro={() => setIsPassProOpen(true)}
            onOpenMistakes={() => setIsMistakeModalOpen(true)}
            onOpenAuth={(msg) => { setTestResult(null); openAuthPrompt(msg); }}
            hideAds={isPaidPro}
          />
        )}

        {/* Mistake Notebook Modal */}
        {isMistakeModalOpen && (
          <MistakeNotebookModal 
            onClose={() => setIsMistakeModalOpen(false)} 
            onStartCustomTest={(customQuiz) => {
              setIsMistakeModalOpen(false);
              setSavedSession(null);
              setActiveTest(customQuiz);
            }}
          />
        )}

        {/* Pass Pro Subscription Modal */}
        {isPassProOpen && (
          <PassProModal 
            user={session?.user || null}
            profile={profile}
            hasPassPro={hasPassPro}
            campaignStatus={campaignStatus}
            onClose={() => setIsPassProOpen(false)} 
            onOpenAuth={(msg) => { setIsPassProOpen(false); openAuthPrompt(msg); }}
            onUnlockSuccess={() => session?.user?.id && fetchUserProfile(session.user.id)}
          />
        )}

        {/* Auth Login / Sign Up Modal */}
        {isAuthModalOpen && (
          <AuthModal
            initialMessage={authModalMessage}
            onClose={() => setIsAuthModalOpen(false)}
            onAuthSuccess={(newSession) => {
              setSession(newSession);
              if (newSession?.user?.id) fetchUserProfile(newSession.user.id);
            }}
          />
        )}

        {/* Student Dashboard & Admin Payment Verification Modal */}
        {isDashboardOpen && session?.user && (
          <UserDashboardModal
            user={session.user}
            profile={profile}
            hasPassPro={hasPassPro}
            studyStreak={studyStreak}
            onClose={() => setIsDashboardOpen(false)}
            onLogout={handleLogout}
            onOpenPassPro={() => setIsPassProOpen(true)}
            onRefreshProfile={() => fetchUserProfile(session.user.id)}
          />
        )}

        {/* Paid PDF Bundle Modal */}
        {isPdfModalOpen && (
          <PaidPdfBundleModal
            railwayTests={RAILWAY_TESTS}
            getTestAccess={getTestAccess}
            hasPassPro={hasPassPro}
            user={session?.user || null}
            onClose={() => setIsPdfModalOpen(false)}
            onOpenPassPro={() => {
              setIsPdfModalOpen(false);
              setIsPassProOpen(true);
            }}
            onOpenAuth={(msg) => {
              setIsPdfModalOpen(false);
              openAuthPrompt(msg);
            }}
          />
        )}

        {/* Legal & Compliance Modal (AdSense Required) */}
        {legalModalTab && (
          <LegalModal 
            initialTab={legalModalTab} 
            onClose={() => setLegalModalTab(null)} 
          />
        )}
      </Suspense>
    </div>
    </ErrorBoundary>
  );
}
