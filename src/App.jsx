import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DailyQuizCard from './components/DailyQuizCard';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import TestCard from './components/TestCard';
import HomeShowcaseSections from './components/HomeShowcaseSections';
import MobileBottomNav from './components/MobileBottomNav';
import { supabase } from './lib/supabaseClient';
import { MONETIZATION_CONFIG } from './config/monetizationConfig';
import { RAILWAY_TESTS } from './data/mockTestData';
import { CBT2_PART_B_TRADES } from './data/tradeTestsData';
import { hydrateTest } from './data/testQuestionLoader';
import { getStudyStreak, recordStudyActivity } from './utils/studyStreak';
import { isEphemeralQuizId, normalizeMistakeCategory } from './utils/mistakeTestBuilder';
import { STUDY_SYNC_EVENT } from './utils/studySyncEvents';
import { recordMockTopicStats } from './utils/topicPerformance';
import { syncStudyStateOnLogin, pushStudyStateToCloud } from './utils/cloudStudySync';
import { lazyWithRetry, forceFreshReload, isChunkLoadError, triggerOneTimeChunkReload } from './utils/chunkRecovery';
import { 
  Play, CheckCircle2, Clock, Award, Users, BookOpen, 
  ArrowRight, ShieldCheck, Zap, Crown, Flame, Filter, Sparkles, FileText, Lock, Globe, Wrench, Train, Search, X
} from 'lucide-react';

// Lazy-loaded heavy views & modals with automatic stale-chunk retry
const CBTMockTestModal = lazyWithRetry(() => import('./components/CBTMockTestModal'), lazy);
const TestResultModal = lazyWithRetry(() => import('./components/TestResultModal'), lazy);
const PassProModal = lazyWithRetry(() => import('./components/PassProModal'), lazy);
const SuperCoachingView = lazyWithRetry(() => import('./components/SuperCoachingView'), lazy);
const DailyQuizView = lazyWithRetry(() => import('./components/DailyQuizView'), lazy);
const SyllabusView = lazyWithRetry(() => import('./components/SyllabusView'), lazy);
const AffiliateBooksSection = lazyWithRetry(() => import('./components/AffiliateBooksSection'), lazy);
const PaidPdfBundleModal = lazyWithRetry(() => import('./components/PaidPdfBundleModal'), lazy);
const AspirantToolsHub = lazyWithRetry(() => import('./components/AspirantToolsHub'), lazy);
const MistakeNotebookModal = lazyWithRetry(() => import('./components/MistakeNotebookModal'), lazy);
const AuthModal = lazyWithRetry(() => import('./components/AuthModal'), lazy);
const UserDashboardModal = lazyWithRetry(() => import('./components/UserDashboardModal'), lazy);
const LegalModal = lazyWithRetry(() => import('./components/LegalModal'), lazy);
const PYQExplorerView = lazyWithRetry(() => import('./components/PYQExplorerView'), lazy);

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
    if (isChunkLoadError(error)) {
      triggerOneTimeChunkReload();
    }
  }
  render() {
    if (this.state.hasError) {
      const errDetail = this.state.error?.message || '';
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4 text-2xl font-black">
            !
          </div>
          <h1 className="text-xl font-bold">कुछ समस्या आई (Something went wrong)</h1>
          <p className="text-xs text-slate-400 mt-2 max-w-md">
            कृपया पेज को रीलोड करें या सुरक्षित रूप से टेस्ट पुनः प्रारंभ करें।
          </p>
          {errDetail && (
            <div className="mt-3 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-rose-300/90 max-w-md break-words">
              {errDetail.slice(0, 180)}
            </div>
          )}
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => forceFreshReload({ clearSessionKey: true })}
              className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-teal-950"
            >
              Reload Application
            </button>
            <button 
              onClick={() => forceFreshReload({ clearAllStorage: true })}
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
  const [mockSearchQuery, setMockSearchQuery] = useState('');
  const [visibleCatalogCount, setVisibleCatalogCount] = useState(12);
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
  const [cloudSyncState, setCloudSyncState] = useState({ status: 'idle', syncedAt: null });
  const [reopeningAttemptId, setReopeningAttemptId] = useState(null);
  const [mistakeInitialSubject, setMistakeInitialSubject] = useState('all');

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

      // Bidirectional Cloud Sync for Mistakes, PYQ Progress, Streaks & Topic Stats
      setCloudSyncState((prev) => ({ ...prev, status: 'syncing' }));
      const synced = await syncStudyStateOnLogin(userId);
      if (synced) {
        setStudyStreak(getStudyStreak());
        setCloudSyncState({ status: 'synced', syncedAt: synced.syncedAt });
      } else {
        setCloudSyncState((prev) => ({ ...prev, status: 'ready' }));
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
        setCloudSyncState({ status: 'idle', syncedAt: null });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Auto-push Mistake Notebook, PYQ Progress, Streaks & Topic Stats to Cloud on change
  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) return undefined;
    let timer = null;
    const handleStudyChange = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(async () => {
        setCloudSyncState((prev) => ({ ...prev, status: 'syncing' }));
        const ok = await pushStudyStateToCloud(userId);
        setCloudSyncState((prev) => ({
          status: ok ? 'synced' : 'error',
          syncedAt: ok ? Date.now() : prev.syncedAt,
        }));
      }, 900);
    };
    window.addEventListener(STUDY_SYNC_EVENT, handleStudyChange);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener(STUDY_SYNC_EVENT, handleStudyChange);
    };
  }, [session?.user?.id]);

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
    const matchesCategory =
      testFilter === 'all' ||
      (testFilter === 'full-shift' ? test.category !== 'sectional' : test.category === testFilter);
    const matchesShift = shiftFilter === 'all' || test.shiftName === shiftFilter;
    const matchesTrade = tradeFilter === 'all' || test.tradeKey === tradeFilter;
    const q = mockSearchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      [test.title, test.subTitle, test.shiftName, test.trade, test.exam, test.badge]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    return matchesCategory && matchesShift && matchesTrade && matchesSearch;
  });

  useEffect(() => {
    setVisibleCatalogCount(12);
  }, [yearFilter, tradeFilter, testFilter, shiftFilter, mockSearchQuery]);

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

    // Record per-topic accuracy for Smart Weak-Topic Radar & Cloud Sync
    recordMockTopicStats(test.questions, answers);

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

  const handleReopenAttempt = async (attempt) => {
    if (!attempt?.test_id || reopeningAttemptId) return;
    const baseTest = RAILWAY_TESTS.find((t) => t.id === attempt.test_id);
    if (!baseTest) {
      alert('Is attempt ka question paper catalog mein available nahi hai.');
      return;
    }
    setReopeningAttemptId(attempt.id);
    try {
      const hydrated = await hydrateTest(baseTest);
      setIsDashboardOpen(false);
      setTestResult({
        test: hydrated,
        answers: attempt.answers_json || {},
        timeTakenSeconds: attempt.time_taken_seconds || 0,
        attemptSyncedAt: attempt.created_at ? new Date(attempt.created_at).getTime() : Date.now(),
        isHistoricalReview: true,
      });
    } catch (err) {
      console.error('Failed to reopen historical attempt:', err);
      alert('Purane test ka solution load karne mein samasya aayi. Dobara try karein.');
    } finally {
      setReopeningAttemptId(null);
    }
  };

  const handleLaunchWeakTopicDrill = (weakItem) => {
    setIsDashboardOpen(false);
    const category = normalizeMistakeCategory(weakItem?.subject || '');
    let matchingMistakes = [];
    try {
      const parsed = JSON.parse(localStorage.getItem('railwayprep_mistake_notebook') || '[]');
      const realMistakes = Array.isArray(parsed)
        ? parsed.filter((m) => m && !String(m.id || '').startsWith('sample_'))
        : [];
      matchingMistakes = realMistakes.filter(
        (m) => normalizeMistakeCategory(m.subject) === category
      );
    } catch (e) {}

    if (matchingMistakes.length > 0) {
      setMistakeInitialSubject(category);
      setIsMistakeModalOpen(true);
    } else {
      setActiveTab('pyq-explorer');
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] overflow-x-clip">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPassPro={() => setIsPassProOpen(true)}
        onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
        onOpenMistakes={() => setIsMistakeModalOpen(true)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
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

            {/* Compact Testbook-style Home Sections (Series Carousel, Quick Dock, 3 Free Demos, Notes Strip) */}
            <HomeShowcaseSections
              railwayTests={RAILWAY_TESTS}
              onSelectExamTrack={(yearKey) => {
                setYearFilter(yearKey);
                setShiftFilter('all');
                setTradeFilter('all');
                setTestFilter('all');
                setActiveTab('mock-tests');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartMock={handleStartMock}
              onResumeTest={handleResumeTest}
              onDiscardSavedSession={handleDiscardSavedSession}
              onOpenPassPro={() => setIsPassProOpen(true)}
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
              onOpenMistakes={() => setIsMistakeModalOpen(true)}
              getTestAccess={getTestAccess}
              isGuestDemoTest={isGuestDemoTest}
              savedSession={savedSession}
              loadingTestId={loadingTestId}
            />

            {/* Daily Quiz Streak Section */}
            <DailyQuizCard onStartMock={() => setActiveTab('daily-quiz')} studyStreak={studyStreak} />
          </>
        )}

        {activeTab === 'mock-tests' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-extrabold text-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>TCS iON CBT Engine • {RAILWAY_TESTS.length} Bilingual Mock Tests</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Railway Exam All-India CBT Test Series</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Simulated on authentic TCS iON software layout with bilingual per-question toggle, 1/3rd negative marking, and detailed solutions.
              </p>

              {/* Search Box inside Catalog */}
              <div className="relative max-w-xl mx-auto mt-5">
                <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={mockSearchQuery}
                  onChange={(e) => setMockSearchQuery(e.target.value)}
                  placeholder="Search exam, shift date, trade (e.g. 03 Nov, Group D, Electrician)..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 text-xs sm:text-sm text-white focus:outline-none"
                />
                {mockSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setMockSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Exam Cycle Filter Tabs */}
              <div className="flex items-center justify-start sm:justify-center gap-2 mt-5 overflow-x-auto pb-1 no-scrollbar">
                <button
                  onClick={() => { setYearFilter('all'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                    yearFilter === 'all'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md shadow-teal-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  All Exams ({RAILWAY_TESTS.length})
                </button>
                <button
                  onClick={() => { setYearFilter('2026'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                    yearFilter === '2026'
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🎯 RRB ALP 2026 ({RAILWAY_TESTS.filter(t => t.examYear !== '2025' && t.exam !== 'RRB ALP 2025' && !t.stage?.includes('CBT-2') && t.examYear !== 'groupd-2025').length})
                </button>
                <button
                  onClick={() => { setYearFilter('2025'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                    yearFilter === '2025'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚡ ALP 2025 ({RAILWAY_TESTS.filter(t => (t.examYear === '2025' || t.exam === 'RRB ALP 2025') && !t.stage?.includes('CBT-2')).length})
                </button>
                <button
                  onClick={() => { setYearFilter('cbt2'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                    yearFilter === 'cbt2'
                      ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-slate-950 shadow-md shadow-rose-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🚀 CBT-2 Part A ({RAILWAY_TESTS.filter(t => (t.examYear === 'cbt2' || t.stage === 'CBT-2') && t.stage !== 'CBT-2 Part B').length})
                </button>
                <button
                  onClick={() => { setYearFilter('cbt2-part-b'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                    yearFilter === 'cbt2-part-b'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚙️ Part B Trades ({RAILWAY_TESTS.filter(t => t.stage === 'CBT-2 Part B').length})
                </button>
                <button
                  onClick={() => { setYearFilter('groupd-2025'); setShiftFilter('all'); setTradeFilter('all'); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                    yearFilter === 'groupd-2025'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🚆 Group D ({RAILWAY_TESTS.filter(t => t.examYear === 'groupd-2025').length})
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
                  <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    <button
                      onClick={() => setTradeFilter('all')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
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
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
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
                      <span>RRB Group D 2025 Level-1: 48 Shifts • 100 Qs</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      ⚡ Shift 1 is Free Demo
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
                      All Group D ({RAILWAY_TESTS.filter(t => t.examYear === 'groupd-2025').length})
                    </button>
                    <button
                      onClick={() => { setTestFilter('full-shift'); setShiftFilter('all'); }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        testFilter === 'full-shift'
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
                      Shift 1 Sectionals
                    </button>
                  </div>
                </div>
              )}

              {/* Shift Filter Tabs */}
              <div className="flex items-center justify-start sm:justify-center gap-2 mt-4 overflow-x-auto pb-1 no-scrollbar">
                {availableShifts.map(s => (
                  <button
                    key={s.key}
                    onClick={() => setShiftFilter(s.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
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
              <div className="flex items-center justify-start sm:justify-center gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { key: 'all', label: `All Test Types (${shiftFilter === 'all' ? yearTests.length : yearTests.filter(t => t.shiftName === shiftFilter).length})` },
                  { key: 'full-shift', label: `Full Shift Papers (${shiftFilter === 'all' ? yearTests.filter(t => t.category !== 'sectional').length : yearTests.filter(t => t.shiftName === shiftFilter && t.category !== 'sectional').length})` },
                  { key: 'sectional', label: `Sectional Tests (${shiftFilter === 'all' ? yearTests.filter(t => t.category === 'sectional').length : yearTests.filter(t => t.shiftName === shiftFilter && t.category === 'sectional').length})` }
                ].map(f => (
                  <button
                    key={f.key}
                    onClick={() => setTestFilter(f.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
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

            {filteredTests.length === 0 ? (
              <div className="text-center py-12 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
                <div className="text-base font-bold text-white">No mock tests matched your search / filter.</div>
                <button
                  type="button"
                  onClick={() => {
                    setYearFilter('all');
                    setShiftFilter('all');
                    setTradeFilter('all');
                    setTestFilter('all');
                    setMockSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-black text-xs cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {filteredTests.slice(0, visibleCatalogCount).map((test) => (
                    <TestCard
                      key={test.id}
                      test={test}
                      accessStatus={getTestAccess(test)}
                      isGuestDemo={isGuestDemoTest(test)}
                      savedSession={savedSession}
                      loadingTestId={loadingTestId}
                      onStartMock={handleStartMock}
                      onResumeTest={handleResumeTest}
                      onDiscardSavedSession={handleDiscardSavedSession}
                      onOpenPassPro={() => setIsPassProOpen(true)}
                    />
                  ))}
                </div>

                {visibleCatalogCount < filteredTests.length && (
                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCatalogCount((c) => c + 12)}
                      className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-teal-500/40 text-teal-300 font-black text-xs cursor-pointer shadow-lg transition-all"
                    >
                      Show More Tests ({filteredTests.length - visibleCatalogCount} Remaining) ↓
                    </button>
                  </div>
                )}
              </>
            )}
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

      {/* Testbook-style Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenPassPro={() => setIsPassProOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenAuth={() => openAuthPrompt('')}
        user={session?.user || null}
        hasPassPro={hasPassPro}
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
            initialSubject={mistakeInitialSubject}
            onClose={() => {
              setIsMistakeModalOpen(false);
              setMistakeInitialSubject('all');
            }} 
            onStartCustomTest={(customQuiz) => {
              setIsMistakeModalOpen(false);
              setMistakeInitialSubject('all');
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
            cloudSyncState={cloudSyncState}
            onCloudSyncUpdated={(nextState) => {
              setCloudSyncState(nextState);
              setStudyStreak(getStudyStreak());
            }}
            onReopenAttempt={handleReopenAttempt}
            reopeningAttemptId={reopeningAttemptId}
            onLaunchWeakTopicDrill={handleLaunchWeakTopicDrill}
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
