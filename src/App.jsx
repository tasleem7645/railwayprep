import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DailyQuizCard from './components/DailyQuizCard';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import HomeShowcaseSections from './components/HomeShowcaseSections';
import MobileBottomNav from './components/MobileBottomNav';
import LiveMegaBanner from './components/LiveMegaBanner';
import { supabase } from './lib/supabaseClient';
import { MONETIZATION_CONFIG } from './config/monetizationConfig';
import { RAILWAY_TESTS } from './data/mockTestData';
import { hydrateTest } from './data/testQuestionLoader';
import { getStudyStreak, recordStudyActivity } from './utils/studyStreak';
import { isEphemeralQuizId, normalizeMistakeCategory } from './utils/mistakeTestBuilder';
import { STUDY_SYNC_EVENT, notifyStudyStateChanged } from './utils/studySyncEvents';
import { recordMockTopicStats } from './utils/topicPerformance';
import { syncStudyStateOnLogin, pushStudyStateToCloud } from './utils/cloudStudySync';
import { saveTestSpeedProfile, getTestSpeedProfile } from './utils/speedAnalytics';
import { buildWeakTopicMiniTest } from './utils/weakTopicQuizBuilder';
import { applySrsBatchFromReTest } from './utils/mistakeSpacedRepetition';
import { saveLiveMegaAttemptLocal } from './utils/liveMegaMock';
import { mapTrackKeyToNestedState } from './utils/testSeriesHierarchy';
import {
  loadAttemptSummaries,
  saveAttemptSummary,
  hydrateAttemptSummariesFromCloud,
} from './utils/testAttemptTracker';
import { applyDocumentSeo, LEGAL_PAGE_KEYS, resolveRouteFromLocation, routeKeyToLegalTab } from './utils/seoConfig';
import { lazyWithRetry, forceFreshReload, isChunkLoadError, triggerOneTimeChunkReload } from './utils/chunkRecovery';
import { Play, Zap } from 'lucide-react';

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
const LegalCompliancePage = lazyWithRetry(() => import('./components/LegalCompliancePage'), lazy);
const PricingPageView = lazyWithRetry(() => import('./components/PricingPageView'), lazy);
const TestSeriesExplorer = lazyWithRetry(() => import('./components/TestSeriesExplorer'), lazy);
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
  const [_activeTab, _setActiveTab] = useState(() =>
    typeof window !== 'undefined'
      ? resolveRouteFromLocation(window.location.pathname, window.location.hash)
      : 'home'
  );
  const activeTab = _activeTab;

  const setActiveTab = (tab, customSearch = undefined) => {
    const cleanTab = tab || 'home';
    _setActiveTab(cleanTab);
    applyDocumentSeo(cleanTab);
    if (typeof window !== 'undefined') {
      const targetPath = cleanTab === 'home' ? '/' : `/${cleanTab}`;
      const nextSearch =
        customSearch !== undefined
          ? customSearch
          : cleanTab === 'mock-tests'
          ? window.location.search || ''
          : '';
      if (window.location.pathname !== targetPath || window.location.hash || (customSearch !== undefined && window.location.search !== nextSearch)) {
        window.history.pushState({ tab: cleanTab }, '', `${targetPath}${nextSearch}`);
      }
    }
  };

  const [selectedGoal, setSelectedGoal] = useState('RRB ALP (Loco Pilot 2025–26)');
  const [activeExamId, setActiveExamId] = useState(null);
  const [notesInitialHubMode, setNotesInitialHubMode] = useState('maths');

  const [nestedTestSelection, setNestedTestSelection] = useState(() => {
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const ex = sp.get('exam');
      if (ex) {
        return {
          examKey: ex,
          yearKey: sp.get('year') || null,
          cbtKey: sp.get('cbt') || null,
          modeKey: sp.get('mode') || null,
          sectionKey: sp.get('sec') || null,
          tradeKey: sp.get('trade') || null,
        };
      }
    }
    return mapTrackKeyToNestedState(null);
  });

  const handleNestedSelectionChange = (nextSel) => {
    setNestedTestSelection(nextSel);
    if (typeof window !== 'undefined' && activeTab === 'mock-tests') {
      const sp = new URLSearchParams();
      if (nextSel?.examKey) sp.set('exam', nextSel.examKey);
      if (nextSel?.yearKey) sp.set('year', nextSel.yearKey);
      if (nextSel?.cbtKey) sp.set('cbt', nextSel.cbtKey);
      if (nextSel?.modeKey) sp.set('mode', nextSel.modeKey);
      if (nextSel?.sectionKey) sp.set('sec', nextSel.sectionKey);
      if (nextSel?.tradeKey) sp.set('trade', nextSel.tradeKey);
      const qStr = sp.toString();
      const targetUrl = qStr ? `/mock-tests?${qStr}` : '/mock-tests';
      const currentUrl = `${window.location.pathname}${window.location.search || ''}`;
      if (currentUrl !== targetUrl) {
        window.history.pushState({ tab: 'mock-tests' }, '', targetUrl);
      }
    }
  };

  // Sync Clean Path Routing + Legacy Hash Compatibility + Dynamic Document SEO
  useEffect(() => {
    const syncFromBrowserLocation = () => {
      const resolved = resolveRouteFromLocation(window.location.pathname, window.location.hash);
      _setActiveTab(resolved);
      applyDocumentSeo(resolved);
      if (resolved === 'mock-tests') {
        const sp = new URLSearchParams(window.location.search);
        const ex = sp.get('exam');
        if (ex) {
          setNestedTestSelection({
            examKey: ex,
            yearKey: sp.get('year') || null,
            cbtKey: sp.get('cbt') || null,
            modeKey: sp.get('mode') || null,
            sectionKey: sp.get('sec') || null,
            tradeKey: sp.get('trade') || null,
          });
        } else {
          setNestedTestSelection(mapTrackKeyToNestedState(null));
        }
      }
    };

    syncFromBrowserLocation();
    window.addEventListener('popstate', syncFromBrowserLocation);
    window.addEventListener('hashchange', syncFromBrowserLocation);
    return () => {
      window.removeEventListener('popstate', syncFromBrowserLocation);
      window.removeEventListener('hashchange', syncFromBrowserLocation);
    };
  }, []);

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    if (goal.includes('ALP')) {
      setNestedTestSelection(mapTrackKeyToNestedState('alp'));
      setActiveTab('mock-tests', '?exam=alp');
    } else if (goal.includes('Technician')) {
      setNestedTestSelection(mapTrackKeyToNestedState('tech3'));
      setActiveExamId('tech_02_2026');
      setActiveTab('mock-tests', '?exam=tech3');
    } else if (goal.includes('NTPC')) {
      setNestedTestSelection(mapTrackKeyToNestedState('ntpc-ug'));
      setActiveExamId('ntpc_ug_07_2026');
      setActiveTab('mock-tests', '?exam=ntpc-ug');
    } else if (goal.includes('Group D')) {
      setNestedTestSelection(mapTrackKeyToNestedState('groupd'));
      setActiveExamId('groupd_09_2025');
      setActiveTab('mock-tests', '?exam=groupd');
    } else if (goal.includes('RPF')) {
      setActiveExamId('rpf_si_constable');
      setActiveTab('syllabus', '');
    } else if (goal.includes('Station Master')) {
      setActiveExamId('station_master_08_2026');
      setActiveTab('syllabus', '');
    } else if (goal.includes('JE')) {
      setActiveExamId('je_dms_04_2026');
      setActiveTab('syllabus', '');
    }
  };

  const handleNavigateFromFooter = (tab, opts = {}) => {
    if (opts.examId) {
      setActiveExamId(opts.examId);
    }
    if (tab === 'mock-tests') {
      const nextSel = opts.year ? mapTrackKeyToNestedState(opts.year) : mapTrackKeyToNestedState(null);
      if (opts.filter === 'sectional' && nextSel.cbtKey) {
        nextSel.modeKey = 'sectional';
      }
      setNestedTestSelection(nextSel);
      const sp = new URLSearchParams();
      if (nextSel.examKey) sp.set('exam', nextSel.examKey);
      if (nextSel.yearKey) sp.set('year', nextSel.yearKey);
      if (nextSel.cbtKey) sp.set('cbt', nextSel.cbtKey);
      if (nextSel.modeKey) sp.set('mode', nextSel.modeKey);
      setActiveTab('mock-tests', sp.toString() ? `?${sp.toString()}` : '');
      return;
    }
    setActiveTab(tab);
  };

  const [selectedLang, setSelectedLang] = useState('hi');
  const [attemptSummaries, setAttemptSummaries] = useState(() => loadAttemptSummaries());
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
  const [launchingWeakTopicKey, setLaunchingWeakTopicKey] = useState(null);
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

      // Hydrate attempted test scores/accuracies for instant TestCard status pills
      try {
        const { data: attemptRows } = await supabase
          .from('test_attempts')
          .select('id, test_id, score, total_marks, correct_count, wrong_count, accuracy, time_taken_seconds, answers_json, created_at')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
          .limit(80);
        if (attemptRows && attemptRows.length > 0) {
          setAttemptSummaries(hydrateAttemptSummariesFromCloud(attemptRows));
        }
      } catch (attErr) {
        console.warn('Attempt summary sync notice:', attErr);
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

  // Shift 1 / Demo test of EVERY exam & EVERY section is open without login
  const isGuestDemoTest = (test) => {
    if (!test) return false;
    if (test.isFreeDemo) return true;
    if (test.examYear === 'tech3-2024' || test.exam?.includes('Technician')) {
      return test.tech3ShiftNo === 1 || test.id?.includes('shift1') || test.id?.includes('-s1-');
    }
    if (test.examYear === 'ntpc-ug-2025' || test.exam?.includes('NTPC')) {
      return test.ntpcUgShiftNo === 1 || test.id?.includes('shift1') || test.id?.includes('s1-');
    }
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
    if (test.examYear === 'tech3-2024' || test.exam?.includes('Technician')) {
      return test.tech3ShiftNo === 2 || test.tech3ShiftNo === 3;
    }
    if (test.examYear === 'ntpc-ug-2025' || test.exam?.includes('NTPC')) {
      return test.ntpcUgShiftNo === 2 || test.ntpcUgShiftNo === 3;
    }
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
    if (test?.isLiveMegaMock || isGuestDemoTest(test) || hasPassPro) return 'open';
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
        const isCorrect = userAns === q.correctIndex;
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

    // Save per-question time analytics profile for Speed Radar & historical review
    if (!test.isCustomTopicQuiz && resultData.questionTimes) {
      saveTestSpeedProfile(test.id, resultData.questionTimes);
    }

    // Save attempted score & accuracy locally so TestCards update immediately
    if (!test.isCustomTopicQuiz && !test.isMistakeReTest) {
      setAttemptSummaries(
        saveAttemptSummary({
          testId: test.id,
          score: rawScore,
          totalMarks: test.totalMarks || test.maxMarks || test.questions.length * pos,
          correctCount,
          wrongCount,
          accuracy,
          timeTakenSeconds: timeTakenSeconds || 0,
          answers,
        })
      );
    }

    // Track All-India Live Weekend Mega Mock submission locally for instant rank review
    if (test.isLiveMegaMock) {
      saveLiveMegaAttemptLocal(test.id, {
        score: rawScore,
        timeTakenSeconds: timeTakenSeconds || 0,
        answers,
        questionTimes: resultData.questionTimes || {},
      });
    }

    // Update SM-2 Spaced Repetition progress if finishing a Mistake Notebook CBT Re-Test
    if (test.isMistakeReTest) {
      try {
        const parsed = JSON.parse(localStorage.getItem('railwayprep_mistake_notebook') || '[]');
        if (Array.isArray(parsed) && parsed.length > 0) {
          const updatedSrs = applySrsBatchFromReTest(parsed, test.questions, answers);
          localStorage.setItem('railwayprep_mistake_notebook', JSON.stringify(updatedSrs));
          notifyStudyStateChanged();
        }
      } catch (e) {}
    }

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
    const isMegaAttempt = String(attempt.test_id).startsWith('live_mega_');
    const baseTest =
      RAILWAY_TESTS.find((t) => t.id === attempt.test_id) ||
      (isMegaAttempt
        ? RAILWAY_TESTS.find((t) => attempt.test_title && attempt.test_title.includes(t.title))
        : null);
    if (!baseTest) {
      alert('Is attempt ka question paper catalog mein available nahi hai.');
      return;
    }
    setReopeningAttemptId(attempt.id);
    try {
      const rawHydrated = await hydrateTest(baseTest);
      const hydrated = isMegaAttempt
        ? {
            ...rawHydrated,
            id: attempt.test_id,
            title: attempt.test_title || rawHydrated.title,
            isLiveMegaMock: true,
          }
        : rawHydrated;
      const speedProfile = getTestSpeedProfile(attempt.test_id) || getTestSpeedProfile(baseTest.id);
      setIsDashboardOpen(false);
      setTestResult({
        test: hydrated,
        answers: attempt.answers_json || {},
        timeTakenSeconds: attempt.time_taken_seconds || 0,
        questionTimes: speedProfile?.questionTimes || {},
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

  const handleViewAttemptResult = async (test, summary) => {
    if (!test || reopeningAttemptId) return;
    if (summary?.answers) {
      await handleReopenAttempt({
        id: summary.attemptId || `local_${test.id}`,
        test_id: test.id,
        test_title: test.title,
        answers_json: summary.answers,
        time_taken_seconds: summary.timeTakenSeconds || 0,
        created_at: summary.timestamp || Date.now(),
      });
      return;
    }
    if (session?.user?.id) {
      try {
        const { data } = await supabase
          .from('test_attempts')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('test_id', test.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        if (data?.answers_json) {
          await handleReopenAttempt(data);
          return;
        }
      } catch (e) {}
    }
    handleStartMock(test);
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

  const handleLaunchWeakMiniMock = async (weakItem) => {
    if (!weakItem || launchingWeakTopicKey) return;
    const topicKey = `${weakItem.subject}::${weakItem.topic}`;
    setLaunchingWeakTopicKey(topicKey);
    try {
      const miniTest = await buildWeakTopicMiniTest({
        weakItem,
        railwayTests: RAILWAY_TESTS,
        getTestAccess,
        maxQuestions: 15,
      });
      if (!miniTest) {
        alert('Is weak topic ke liye abhi questions load nahi ho paaye. Dobara try karein.');
        return;
      }
      setIsDashboardOpen(false);
      setSavedSession(null);
      setActiveTest(miniTest);
    } catch (err) {
      console.error('Failed to build weak-topic mini mock:', err);
      alert('15-Q Mini CBT generate karne mein samasya aayi.');
    } finally {
      setLaunchingWeakTopicKey(null);
    }
  };

  const handleOpenMegaResult = async (megaPayload, attemptSummary) => {
    if (!megaPayload || reopeningAttemptId) return;
    setReopeningAttemptId(megaPayload.id);
    try {
      const hydrated = await hydrateTest(megaPayload);
      setTestResult({
        test: hydrated,
        answers: attemptSummary?.answers || {},
        timeTakenSeconds: attemptSummary?.timeTakenSeconds || 0,
        questionTimes: attemptSummary?.questionTimes || {},
        attemptSyncedAt: attemptSummary?.submittedAt || Date.now(),
        isHistoricalReview: true,
      });
    } catch (err) {
      console.error('Failed to open live mega result:', err);
      alert('Weekend Mega Test scorecard load karne mein problem aayi.');
    } finally {
      setReopeningAttemptId(null);
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
              onExploreNotes={() => {
                setNotesInitialHubMode('maths');
                setActiveTab('super-coaching');
              }}
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

            {/* All-India Weekend Live Mega Mock + Countdown & AIR Ranklist */}
            <LiveMegaBanner
              railwayTests={RAILWAY_TESTS}
              onStartLiveMega={(payload) => handleStartMock(payload)}
              onOpenMegaResult={handleOpenMegaResult}
              loadingTestId={loadingTestId}
            />

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
                const nextSel = mapTrackKeyToNestedState(yearKey);
                setNestedTestSelection(nextSel);
                const sp = new URLSearchParams();
                if (nextSel.examKey) sp.set('exam', nextSel.examKey);
                if (nextSel.yearKey) sp.set('year', nextSel.yearKey);
                if (nextSel.cbtKey) sp.set('cbt', nextSel.cbtKey);
                if (nextSel.modeKey) sp.set('mode', nextSel.modeKey);
                setActiveTab('mock-tests', sp.toString() ? `?${sp.toString()}` : '');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenTab={(tab, hubHint) => {
                if (tab === 'mock-tests') {
                  setNestedTestSelection(mapTrackKeyToNestedState(null));
                }
                if (tab === 'super-coaching') {
                  setNotesInitialHubMode(hubHint || 'maths');
                }
                setActiveTab(tab, '');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartMock={handleStartMock}
              onResumeTest={handleResumeTest}
              onDiscardSavedSession={handleDiscardSavedSession}
              onViewAttemptResult={handleViewAttemptResult}
              onOpenPassPro={() => setIsPassProOpen(true)}
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
              onOpenMistakes={() => setIsMistakeModalOpen(true)}
              getTestAccess={getTestAccess}
              isGuestDemoTest={isGuestDemoTest}
              savedSession={savedSession}
              attemptSummaries={attemptSummaries}
              loadingTestId={loadingTestId}
            />

            {/* Daily Quiz Streak Section */}
            <DailyQuizCard onStartMock={() => setActiveTab('daily-quiz')} studyStreak={studyStreak} />
          </>
        )}

        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs text-slate-400">
              Loading module...
            </div>
          }
        >
          {activeTab === 'mock-tests' && (
            <TestSeriesExplorer
              railwayTests={RAILWAY_TESTS}
              selection={nestedTestSelection}
              onChangeSelection={handleNestedSelectionChange}
              getTestAccess={getTestAccess}
              isGuestDemoTest={isGuestDemoTest}
              savedSession={savedSession}
              attemptSummaries={attemptSummaries}
              loadingTestId={loadingTestId}
              onStartMock={handleStartMock}
              onResumeTest={handleResumeTest}
              onDiscardSavedSession={handleDiscardSavedSession}
              onViewAttemptResult={handleViewAttemptResult}
              onOpenPassPro={() => setIsPassProOpen(true)}
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
              onOpenCbatSimulator={() => {
                setActiveTab('tools', '');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenNcertNotes={(targetHub = 'ncert') => {
                setNotesInitialHubMode(targetHub === 'maths' ? 'maths' : 'ncert');
                setActiveTab('super-coaching', '');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenSyllabus={(exId) => {
                if (exId) setActiveExamId(exId);
                setActiveTab('syllabus', '');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartTopicQuiz={(customQuiz) => {
                setSavedSession(null);
                setActiveTest(customQuiz);
              }}
              isPaidPro={isPaidPro}
              lang={selectedLang}
            />
          )}

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
              initialHubMode={notesInitialHubMode}
              onStartChapterQuiz={(quiz, quizLang) => handleStartMock(quiz, quizLang)}
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

          {activeTab === 'pricing' && (
            <PricingPageView
              hasPassPro={hasPassPro}
              onOpenPassPro={() => setIsPassProOpen(true)}
              onStartFreeTest={() => handleStartMock(RAILWAY_TESTS[0])}
              onNavigateRoute={setActiveTab}
            />
          )}

          {LEGAL_PAGE_KEYS.includes(activeTab) && (
            <LegalCompliancePage
              activeKey={routeKeyToLegalTab(activeTab)}
              onNavigateRoute={setActiveTab}
              onOpenPassPro={() => setIsPassProOpen(true)}
            />
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
        onSelectTab={(tab) => {
          if (tab === 'super-coaching') setNotesInitialHubMode('maths');
          setActiveTab(tab);
        }}
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
            onNavigateRoute={setActiveTab}
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
            onLaunchWeakMiniMock={handleLaunchWeakMiniMock}
            launchingWeakTopicKey={launchingWeakTopicKey}
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

        {/* Legal & Compliance Modal */}
        {legalModalTab && (
          <LegalModal 
            initialTab={legalModalTab} 
            onClose={() => setLegalModalTab(null)} 
            onNavigateRoute={setActiveTab}
          />
        )}
      </Suspense>
    </div>
    </ErrorBoundary>
  );
}
