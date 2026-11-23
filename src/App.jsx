import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CBTMockTestModal from './components/CBTMockTestModal';
import TestResultModal from './components/TestResultModal';
import PassProModal from './components/PassProModal';
import SuperCoachingView from './components/SuperCoachingView';
import DailyQuizCard from './components/DailyQuizCard';
import SyllabusView from './components/SyllabusView';
import Footer from './components/Footer';
import { RAILWAY_TESTS } from './data/mockTestData';
import { 
  Play, CheckCircle2, Clock, Award, Users, BookOpen, 
  ArrowRight, ShieldCheck, Zap, Crown, Flame, Filter, Sparkles, FileText
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'mock-tests' | 'super-coaching' | 'syllabus' | 'daily-quiz'
  const [selectedLang, setSelectedLang] = useState('hi');
  const [testFilter, setTestFilter] = useState('all'); // 'all' | 'full-shift' | 'sectional'
  const [shiftFilter, setShiftFilter] = useState('all'); // 'all' | '03 Nov Shift 1' | '03 Nov Shift 2' | '03 Nov Shift 3'
  const [isPassProOpen, setIsPassProOpen] = useState(false);
  const [activeTest, setActiveTest] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [savedSession, setSavedSession] = useState(null);

  // Restore test session if user refreshes or toggles mobile/desktop mode
  useEffect(() => {
    try {
      const saved = localStorage.getItem('railwayprep_active_test_session');
      if (saved) {
        const session = JSON.parse(saved);
        if (session && session.testId) {
          const matchingTest = RAILWAY_TESTS.find(t => t.id === session.testId);
          if (matchingTest) {
            setSavedSession(session);
            setActiveTest(matchingTest);
          }
        }
      }
    } catch (e) {
      console.warn('Failed to restore active test session:', e);
    }
  }, []);

  const availableShifts = [
    { key: 'all', label: `All Shifts (${RAILWAY_TESTS.length})` },
    { key: '03 Nov Shift 1', label: `03 Nov Shift 1 (${RAILWAY_TESTS.filter(t => t.shiftName === '03 Nov Shift 1').length})` },
    { key: '03 Nov Shift 2', label: `03 Nov Shift 2 (${RAILWAY_TESTS.filter(t => t.shiftName === '03 Nov Shift 2').length})` },
    { key: '03 Nov Shift 3', label: `03 Nov Shift 3 (${RAILWAY_TESTS.filter(t => t.shiftName === '03 Nov Shift 3').length})` },
    { key: '04 Nov Shift 4', label: `04 Nov Shift 4 (${RAILWAY_TESTS.filter(t => t.shiftName === '04 Nov Shift 4').length})` },
    { key: '04 Nov Shift 5', label: `04 Nov Shift 5 (${RAILWAY_TESTS.filter(t => t.shiftName === '04 Nov Shift 5').length})` },
  ];

  const filteredTests = RAILWAY_TESTS.filter(test => {
    const matchesCategory = testFilter === 'all' || test.category === testFilter;
    const matchesShift = shiftFilter === 'all' || test.shiftName === shiftFilter;
    return matchesCategory && matchesShift;
  });

  const handleStartMock = (test = RAILWAY_TESTS[0], lang = selectedLang) => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setSavedSession(null);
    setSelectedLang(lang);
    setActiveTest(test);
  };

  const handleCloseActiveTest = () => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setSavedSession(null);
    setActiveTest(null);
  };

  const handleSubmitTest = (resultData) => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    setSavedSession(null);
    setActiveTest(null);
    setTestResult(resultData);
  };

  const handleRetakeTest = () => {
    try {
      localStorage.removeItem('railwayprep_active_test_session');
    } catch (e) {}
    const t = testResult?.test || RAILWAY_TESTS[0];
    setSavedSession(null);
    setTestResult(null);
    setActiveTest(t);
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPassPro={() => setIsPassProOpen(true)}
        onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
              onExploreNotes={() => setActiveTab('super-coaching')}
              onOpenPassPro={() => setIsPassProOpen(true)}
            />

            {/* Test Series Section on Home */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Exam Syllabus</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('mock-tests')}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5"
                  >
                    <span>View All Tests</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

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
                {filteredTests.map((test) => (
                  <div
                    key={test.id}
                    className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all shadow-xl group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
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
                        <span className="text-xs text-slate-400 font-semibold">
                          {test.shiftTime || 'Free CBT'}
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

                    <button
                      onClick={() => handleStartMock(test)}
                      className="mt-6 w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950 transition-all cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>Attempt Free CBT Mock Test Now</span>
                    </button>
                  </div>
                ))}

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
            <DailyQuizCard onStartMock={() => handleStartMock(RAILWAY_TESTS[0])} />

            {/* SuperCoaching Highlights */}
            <SuperCoachingView onOpenPassPro={() => setIsPassProOpen(true)} />
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

              {/* Shift Filter Tabs */}
              <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto no-scrollbar">
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
                  { key: 'all', label: `All Test Types (${shiftFilter === 'all' ? RAILWAY_TESTS.length : RAILWAY_TESTS.filter(t => t.shiftName === shiftFilter).length})` },
                  { key: 'full-shift', label: `Full Shift Official Papers (${shiftFilter === 'all' ? RAILWAY_TESTS.filter(t => t.category === 'full-shift').length : RAILWAY_TESTS.filter(t => t.shiftName === shiftFilter && t.category === 'full-shift').length})` },
                  { key: 'sectional', label: `Sectional Tests (${shiftFilter === 'all' ? RAILWAY_TESTS.filter(t => t.category === 'sectional').length : RAILWAY_TESTS.filter(t => t.shiftName === shiftFilter && t.category === 'sectional').length})` }
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map(test => (
                <div 
                  key={test.id} 
                  className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
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

                  {/* Dual Start Buttons: Hindi vs English default */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                    <button
                      onClick={() => handleStartMock(test, 'hi')}
                      className="py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-950/50 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>हिंदी में दें</span>
                    </button>
                    <button
                      onClick={() => handleStartMock(test, 'en')}
                      className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>In English</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'super-coaching' && (
          <SuperCoachingView onOpenPassPro={() => setIsPassProOpen(true)} />
        )}

        {activeTab === 'syllabus' && (
          <SyllabusView
            onStartMock={() => handleStartMock(RAILWAY_TESTS[0])}
            onOpenPassPro={() => setIsPassProOpen(true)}
          />
        )}

        {activeTab === 'daily-quiz' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <DailyQuizCard onStartMock={() => handleStartMock(RAILWAY_TESTS[0])} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenPassPro={() => setIsPassProOpen(true)} />

      {/* CBT Mock Test Simulator Modal (with session persistence & refresh protection) */}
      {activeTest && (
        <CBTMockTestModal
          test={activeTest}
          defaultLang={selectedLang}
          savedSession={savedSession}
          onClose={handleCloseActiveTest}
          onSubmitTest={handleSubmitTest}
        />
      )}

      {/* Test Result Scorecard Modal */}
      {testResult && (
        <TestResultModal
          result={testResult}
          onClose={() => setTestResult(null)}
          onRetake={handleRetakeTest}
        />
      )}

      {/* Pass Pro Subscription Modal */}
      {isPassProOpen && (
        <PassProModal onClose={() => setIsPassProOpen(false)} />
      )}
    </div>
  );
}
