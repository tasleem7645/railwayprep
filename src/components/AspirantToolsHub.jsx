import React, { useState, useEffect } from 'react';
import { 
  Calculator, Scale, GraduationCap, BookOpen, Brain, 
  Calendar, CheckCircle2, AlertCircle, ArrowRight, Share2, 
  Sparkles, RefreshCw, Trophy, Zap, Download, Copy, Check, Clock, Eye
} from 'lucide-react';
import { CHEATSHEETS_DATA } from '../data/cheatsheetsData';

export default function AspirantToolsHub({ onStartMock, onOpenPassPro }) {
  const [activeTool, setActiveTool] = useState('calculator'); // 'calculator' | 'normalization' | 'eligibility' | 'cheatsheets' | 'psycho' | 'calendar'

  // Tool 1: Score Calculator State
  const [examPreset, setExamPreset] = useState('alp'); // 'alp' | 'tech' | 'ntpc' | 'groupd'
  const [totalQuestions, setTotalQuestions] = useState(75);
  const [attempted, setAttempted] = useState(62);
  const [correct, setCorrect] = useState(52);
  const [category, setCategory] = useState('OBC'); // 'UR' | 'OBC' | 'EWS' | 'SC' | 'ST'

  // Handle Preset Changes
  const handlePresetChange = (preset) => {
    setExamPreset(preset);
    if (preset === 'alp') {
      setTotalQuestions(75);
      setAttempted(60);
      setCorrect(50);
    } else {
      setTotalQuestions(100);
      setAttempted(82);
      setCorrect(70);
    }
  };

  const incorrect = Math.max(0, attempted - correct);
  const unattempted = Math.max(0, totalQuestions - attempted);
  const positiveMarks = correct * 1.0;
  const negativePenalty = incorrect * 0.3333;
  const rawScore = Math.max(0, positiveMarks - negativePenalty).toFixed(2);
  const accuracy = attempted > 0 ? ((correct / attempted) * 100).toFixed(1) : 0;
  const percentage = totalQuestions > 0 ? ((rawScore / totalQuestions) * 100).toFixed(1) : 0;

  // Safe Score Status
  const getSafeScoreStatus = () => {
    const numScore = parseFloat(rawScore);
    const benchmark = examPreset === 'alp' ? 48 : 68;
    if (numScore >= benchmark) return { label: 'Safe Zone (CBT-2 की तैयारी शुरू करें)', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (numScore >= benchmark - 8) return { label: 'Borderline Zone (नॉर्मलाइजेशन पर निर्भर)', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    return { label: 'Need Improvement (मॉक टेस्ट प्रैक्टिस बढ़ाएं)', color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' };
  };

  // Tool 2: Normalization State
  const [normRaw, setNormRaw] = useState(48.5);
  const [shiftDiff, setShiftDiff] = useState('tough'); // 'tough' | 'moderate' | 'easy'
  const [selectedZone, setSelectedZone] = useState('Patna');

  const ZONES = [
    { name: 'Patna', expectedCutoff: 52, competition: 'High' },
    { name: 'Prayagraj (Allahabad)', expectedCutoff: 54, competition: 'Very High' },
    { name: 'Mumbai', expectedCutoff: 46, competition: 'Moderate' },
    { name: 'Kolkata', expectedCutoff: 50, competition: 'High' },
    { name: 'Secunderabad', expectedCutoff: 47, competition: 'Moderate' },
    { name: 'Bilaspur', expectedCutoff: 45, competition: 'Moderate' },
    { name: 'Chandigarh', expectedCutoff: 55, competition: 'Very High' },
    { name: 'Guwahati', expectedCutoff: 42, competition: 'Low' },
    { name: 'Bangalore', expectedCutoff: 44, competition: 'Moderate' }
  ];

  const calculateNormalizedScore = () => {
    let boost = 0;
    if (shiftDiff === 'tough') boost = 6.8;
    else if (shiftDiff === 'moderate') boost = 3.2;
    else boost = 0.5;
    return (parseFloat(normRaw || 0) + boost).toFixed(2);
  };

  // Tool 3: Eligibility State
  const [userEdu, setUserEdu] = useState('iti'); // 'iti' | 'diploma' | 'btech' | '12pcm' | 'graduate'
  const [userTrade, setUserTrade] = useState('electrician'); // 'electrician' | 'fitter' | 'mech' | 'elec_engg' | 'pcm' | 'other'

  // Tool 4: Cheatsheets State
  const [cheatSubject, setCheatSubject] = useState('physics');
  const [cheatSearch, setCheatSearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyFormula = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Tool 5: Psycho Test Mini-Game State
  const [psychoState, setPsychoState] = useState('start'); // 'start' | 'memorize' | 'test' | 'result'
  const [timer, setTimer] = useState(15);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  // 6 Station Signs with locations (Grid 3x3)
  const MEMORY_ITEMS = [
    { id: 1, name: '🚂 इंजन (Engine)', pos: 0 },
    { id: 2, name: '🚩 लाल झंडी (Flag)', pos: 2 },
    { id: 3, name: '🚦 सिग्नल (Signal)', pos: 4 },
    { id: 4, name: '⛽ ईंधन टैंक (Fuel)', pos: 5 },
    { id: 5, name: '🧰 टूलबॉक्स (Tools)', pos: 6 },
    { id: 6, name: '🔔 घंटी (Alarm Bell)', pos: 8 }
  ];

  useEffect(() => {
    let interval = null;
    if (psychoState === 'memorize') {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setPsychoState('test');
            return 30; // 30s to recall
          }
          return prev - 1;
        });
      }, 1000);
    } else if (psychoState === 'test') {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            calculatePsychoResult();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [psychoState]);

  const startPsychoTest = () => {
    setUserAnswers({});
    setTimer(15);
    setPsychoState('memorize');
  };

  const handlePsychoDrop = (gridIndex, itemId) => {
    setUserAnswers(prev => ({ ...prev, [gridIndex]: itemId }));
  };

  const calculatePsychoResult = () => {
    let correctCount = 0;
    MEMORY_ITEMS.forEach(item => {
      if (userAnswers[item.pos] === item.id) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
    setPsychoState('result');
  };

  // WhatsApp Share Result
  const handleShareOnWhatsApp = () => {
    const text = `🎯 *RailwayPrep Score Report*\nExam: ${examPreset.toUpperCase()}\nRaw Score: *${rawScore}* / ${totalQuestions}\nAccuracy: *${accuracy}%* (${correct} Correct, ${incorrect} Wrong)\nCheck your score here: https://railwayprep.com`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-extrabold text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>RRB Aspirant Smart Utilities Hub • 100% Free Tools</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          रेलवे अभ्यर्थी <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">स्मार्ट टूल्स एवं सुविधाएं</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          स्कोर कैलकुलेटर, नॉर्मलाइजेशन प्रिडिक्टर, ALP साइको टेस्ट सिम्युलेटर और त्वरित रिवीज़न फॉर्मूला शीट्स।
        </p>
      </div>

      {/* Nav Tabs for Tools */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {[
          { key: 'calculator', label: '🧮 स्कोर व निगेटिव मार्किंग', icon: Calculator },
          { key: 'normalization', label: '⚖️ नॉर्मलाइजेशन प्रिडिक्टर', icon: Scale },
          { key: 'eligibility', label: '🎓 ALP / टेक पोस्ट एलिजिबिलिटी', icon: GraduationCap },
          { key: 'cheatsheets', label: '⚡ फॉर्मूला व शॉर्टकट्स', icon: BookOpen },
          { key: 'psycho', label: '🧠 ALP साइको टेस्ट सिम्युलेटर', icon: Brain },
          { key: 'calendar', label: '📅 रेलवे परीक्षा कैलेंडर', icon: Calendar }
        ].map((t) => {
          const Icon = t.icon;
          const isActive = activeTool === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTool(t.key)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-lg shadow-teal-500/25 scale-102'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* TOOL 1: SCORE & NEGATIVE MARKING CALCULATOR */}
      {activeTool === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-teal-400" />
                  <span>Railway Raw Score Calculator</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">रेलवे भर्ती बोर्ड (-0.33) निगेटिव मार्किंग के साथ शुद्ध अंक निकालें</p>
              </div>
              <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                {['alp', 'tech', 'ntpc'].map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePresetChange(p)}
                    className={`px-2.5 py-1 rounded-lg font-bold uppercase transition-all ${
                      examPreset === p ? 'bg-teal-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">कुल प्रश्न (Total Questions)</span>
                  <span className="text-teal-400">{totalQuestions} Qs</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="120"
                  value={totalQuestions}
                  onChange={(e) => setTotalQuestions(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">हल किए गए सवाल (Attempted)</span>
                  <span className="text-sky-400">{attempted} / {totalQuestions}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={totalQuestions}
                  value={attempted}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setAttempted(val);
                    if (correct > val) setCorrect(val);
                  }}
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">सही उत्तर (Correct Answers - +1.00 Marks)</span>
                  <span className="text-emerald-400 font-extrabold">{correct}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={attempted}
                  value={correct}
                  onChange={(e) => setCorrect(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Number Inputs for Quick Type */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block mb-1">Attempted</span>
                  <input
                    type="number"
                    min="0"
                    max={totalQuestions}
                    value={attempted}
                    onChange={(e) => {
                      const v = Math.min(totalQuestions, Math.max(0, Number(e.target.value) || 0));
                      setAttempted(v);
                      if (correct > v) setCorrect(v);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-1 text-center font-bold text-white text-sm focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 text-center">
                  <span className="text-[11px] text-emerald-400 block mb-1">Correct</span>
                  <input
                    type="number"
                    min="0"
                    max={attempted}
                    value={correct}
                    onChange={(e) => {
                      const v = Math.min(attempted, Math.max(0, Number(e.target.value) || 0));
                      setCorrect(v);
                    }}
                    className="w-full bg-slate-900 border border-emerald-500/40 rounded-lg py-1 text-center font-bold text-emerald-300 text-sm focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 text-center">
                  <span className="text-[11px] text-rose-400 block mb-1">Wrong (-0.33)</span>
                  <div className="py-1 font-bold text-rose-400 text-sm">{incorrect}</div>
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <span className="text-xs text-slate-400 block mb-2 font-medium">आपकी श्रेणी (Category):</span>
                <div className="grid grid-cols-5 gap-2">
                  {['UR', 'OBC', 'EWS', 'SC', 'ST'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                        category === cat ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20' : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="text-center pb-6 border-b border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">Final Calculated Raw Score</span>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-200 mt-2">
                  {rawScore}
                </div>
                <span className="text-xs text-slate-400 mt-1 block">out of {totalQuestions} Marks ({percentage}%)</span>
                
                {/* Safe Status Badge */}
                <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${getSafeScoreStatus().color}`}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{getSafeScoreStatus().label}</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 my-6">
                <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Accuracy %</span>
                  <div className="text-xl font-bold text-teal-400 mt-1">{accuracy}%</div>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Negative Penalty</span>
                  <div className="text-xl font-bold text-rose-400 mt-1">-{negativePenalty.toFixed(2)}</div>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Correct Marks</span>
                  <div className="text-xl font-bold text-emerald-400 mt-1">+{positiveMarks}</div>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Unattempted</span>
                  <div className="text-xl font-bold text-slate-400 mt-1">{unattempted} Qs</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={handleShareOnWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 cursor-pointer transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Score Card on WhatsApp</span>
              </button>
              <button
                onClick={() => onStartMock()}
                className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Take Live Official CBT Mock Test Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: NORMALIZATION PREDICTOR */}
      {activeTool === 'normalization' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-black text-white flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-teal-400" />
              <span>RRB Percentile Normalization Predictor</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              रेलवे के आधिकारिक पर्सेंटाइल फॉर्मूले के आधार पर अपनी शिफ्ट की डिफ़िकल्टी के अनुसार अनुमानित नॉर्मलाइज्ड स्कोर जानें।
            </p>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2">आपका रॉ स्कोर (Raw Marks):</label>
                <input
                  type="number"
                  step="0.1"
                  value={normRaw}
                  onChange={(e) => setNormRaw(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 font-bold text-teal-400 text-lg focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2">आपकी शिफ्ट का स्तर (Shift Difficulty):</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'tough', label: 'कठिन (Tough)', boost: '+5 से +8 अंक' },
                    { id: 'moderate', label: 'मध्यम (Moderate)', boost: '+2 से +4 अंक' },
                    { id: 'easy', label: 'आसान (Easy)', boost: '+0 से +1 अंक' }
                  ].map(lvl => (
                    <button
                      key={lvl.id}
                      onClick={() => setShiftDiff(lvl.id)}
                      className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                        shiftDiff === lvl.id
                          ? 'bg-teal-500/10 border-teal-500 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{lvl.label}</div>
                      <div className="text-[10px] text-teal-400/80 mt-1">{lvl.boost}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2">चयनित रेलवे ज़ोन (Selected RRB Zone):</label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:border-teal-400 focus:outline-none cursor-pointer"
                >
                  {ZONES.map(z => (
                    <option key={z.name} value={z.name}>
                      RRB {z.name} (अनुमानित कट-ऑफ: ~{z.expectedCutoff} | प्रतिस्पर्धा: {z.competition})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-center">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">Estimated Normalized Score</span>
            <div className="text-5xl font-black text-amber-400 my-4">
              {calculateNormalizedScore()}
            </div>
            <p className="text-xs text-slate-400 mb-6">
              आपके रॉ स्कोर ({normRaw}) में शिफ्ट डिफ़िकल्टी के अनुसार ~{(calculateNormalizedScore() - normRaw).toFixed(1)} अंक की सामान्य वृद्धि अनुमानित है।
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Target Zone:</span>
                <span className="font-bold text-white">RRB {selectedZone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Zone Safe Cutoff:</span>
                <span className="font-bold text-teal-400">~{ZONES.find(z => z.name === selectedZone)?.expectedCutoff} Marks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">CBT-2 Selection Probability:</span>
                <span className={`font-bold ${calculateNormalizedScore() >= (ZONES.find(z => z.name === selectedZone)?.expectedCutoff || 50) ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {calculateNormalizedScore() >= (ZONES.find(z => z.name === selectedZone)?.expectedCutoff || 50) ? '🟢 High Chance (सुरक्षित)' : '🟡 Borderline (मेहनत जारी रखें)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 3: ELIGIBILITY & TRADE CHECKER */}
      {activeTool === 'eligibility' && (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-lg font-black text-white flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-teal-400" />
            <span>ALP एवं Technician पोस्ट व ट्रेड एलिजिबिलिटी विज़ार्ड</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            अपनी शैक्षणिक योग्यता और ट्रेड का चयन करें — जानें आप किन-किन रेलवे पदों और मेडिकल स्टैंडर्ड के लिए पात्र हैं।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2">आपकी उच्चतम योग्यता (Highest Qualification):</label>
              <div className="space-y-2">
                {[
                  { id: 'iti', label: '10th + ITI (NCVT / SCVT Recognized)' },
                  { id: 'diploma', label: '3-Year Polytechnic Engineering Diploma' },
                  { id: 'btech', label: 'B.E. / B.Tech in Engineering' },
                  { id: '12pcm', label: '12th (Physics & Mathematics)' },
                  { id: 'graduate', label: 'General Graduate (B.A / B.Sc / B.Com)' }
                ].map(edu => (
                  <button
                    key={edu.id}
                    onClick={() => setUserEdu(edu.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      userEdu === edu.id
                        ? 'bg-teal-500/15 border-teal-500 text-teal-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {edu.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2">ट्रेड / इंजीनियरिंग शाखा (Trade / Branch):</label>
              <div className="space-y-2">
                {[
                  { id: 'electrician', label: 'Electrician / Wireman / Electronics' },
                  { id: 'fitter', label: 'Fitter / Turner / Machinist' },
                  { id: 'diesel', label: 'Diesel Mechanic / Motor Vehicle' },
                  { id: 'mech', label: 'Mechanical / Automobile Engineering' },
                  { id: 'elec_engg', label: 'Electrical / Electronics Engineering' },
                  { id: 'pcm', label: 'Class 12 Physics & Maths Stream' }
                ].map(tr => (
                  <button
                    key={tr.id}
                    onClick={() => setUserTrade(tr.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      userTrade === tr.id
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {tr.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-950 to-slate-900 border border-teal-500/30">
            <h4 className="text-sm font-black text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>आपके लिए पात्र रेलवे पद (Eligible Railway Positions):</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-teal-300 block">🎯 Assistant Loco Pilot (RRB ALP)</span>
                <span className="text-slate-400 text-[11px] mt-1 block">
                  पात्रता: {userEdu !== '12pcm' && userEdu !== 'graduate' ? '✅ 100% Eligible' : '❌ Not Eligible (ITI/Diploma/B.Tech required)'}
                </span>
                <span className="text-[10px] text-amber-400 block mt-1">Medical Standard: A-1 (6/6 Distance Vision without glasses)</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-teal-300 block">⚡ Technician Grade-III (CEN 02/2026)</span>
                <span className="text-slate-400 text-[11px] mt-1 block">
                  {userEdu === '12pcm' ? '✅ Eligible for Signal & Telecom (S&T)' : '✅ Eligible for Trade-Specific Workshop/Diesel/Electrical Posts'}
                </span>
                <span className="text-[10px] text-amber-400 block mt-1">Medical Standard: B-1 / B-2</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-300">
                <span className="font-bold text-amber-300">CBT-2 Part-B Qualifying Trade: </span>
                {userTrade === 'electrician' ? 'Electrician (75 Qs, 35% Qualifying)' : 'Fitter / Relevant Trade'}
              </div>
              <button
                onClick={() => onStartMock()}
                className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs cursor-pointer"
              >
                Start ALP Mock Test →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 4: CHEATSHEETS & FORMULAS */}
      {activeTool === 'cheatsheets' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[
                { id: 'physics', label: 'भौतिक विज्ञान (Physics)' },
                { id: 'chemistry', label: 'रसायन विज्ञान (Chemistry)' },
                { id: 'maths', label: 'गणित शॉर्टकट (Maths)' },
                { id: 'reasoning', label: 'तर्कशक्ति नियम (Reasoning)' }
              ].map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setCheatSubject(sub.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    cheatSubject === sub.id
                      ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search formula, e.g. 'Ohm', 'Speed', 'Soda'..."
              value={cheatSearch}
              onChange={(e) => setCheatSearch(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:border-teal-400 focus:outline-none w-full sm:w-64"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(CHEATSHEETS_DATA[cheatSubject] || [])
              .filter(item => 
                item.topic.toLowerCase().includes(cheatSearch.toLowerCase()) ||
                item.formulas.some(f => f.name.toLowerCase().includes(cheatSearch.toLowerCase()) || f.formula.toLowerCase().includes(cheatSearch.toLowerCase()))
              )
              .map(item => (
                <div key={item.id} className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-white mb-4">{item.topic}</h4>

                    <div className="space-y-3">
                      {item.formulas.map((f, i) => (
                        <div key={i} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-200">{f.name}</span>
                            <button
                              onClick={() => handleCopyFormula(f.formula, `${item.id}-${i}`)}
                              className="text-[11px] text-slate-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
                            >
                              {copiedId === `${item.id}-${i}` ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="font-mono text-sm font-bold text-teal-300 mt-1.5">{f.formula}</div>
                          <div className="text-[11px] text-slate-400 mt-1">{f.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {item.examTip && (
                    <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Exam Pro-Tip: </span>
                        <span>{item.examTip}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TOOL 5: PSYCHO TEST (CBAT) MINI-SIMULATOR */}
      {activeTool === 'psycho' && (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase mb-2">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span>RDSO Lucknow Pattern • Memory Test Battery</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ALP Psycho (CBAT) मेमोरी टेस्ट सिम्युलेटर
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              रेलवे लोको पायलट भर्ती के साइको टेस्ट में प्रत्येक टेस्ट बैटरी में न्यूनतम T-Score 42 लाना अनिवार्य होता है।
            </p>
          </div>

          {/* Test Screen Phases */}
          {psychoState === 'start' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mx-auto text-2xl font-black">
                🧠
              </div>
              <h4 className="text-base font-bold text-white">नियम (Instructions):</h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                1. आपको 3x3 ग्रिड में 6 रेलवे प्रतीकों (इंजन, सिग्नल, झंडी आदि) की स्थिति याद रखने के लिए 15 सेकंड का समय मिलेगा।<br />
                2. इसके बाद ग्रिड खाली हो जाएगी और आपको प्रत्येक प्रतीक को उसकी सही स्थिति पर क्लिक करके चुनना होगा।
              </p>
              <button
                onClick={startPsychoTest}
                className="mt-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-950 cursor-pointer"
              >
                स्मृति टेस्ट प्रारंभ करें (Start 15s Study)
              </button>
            </div>
          )}

          {psychoState === 'memorize' && (
            <div>
              <div className="flex items-center justify-between mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>प्रतीकों की स्थिति ध्यानपूर्वक याद करें (Memorize Positions)</span>
                </span>
                <span className="text-xs font-mono font-black text-rose-400">Time Left: {timer}s</span>
              </div>

              {/* 3x3 Grid Display */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800 max-w-sm mx-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
                  const item = MEMORY_ITEMS.find(m => m.pos === idx);
                  return (
                    <div
                      key={idx}
                      className="h-24 rounded-xl border border-slate-800 bg-slate-900/90 flex flex-col items-center justify-center p-2 text-center"
                    >
                      {item ? (
                        <>
                          <span className="text-2xl">{item.name.split(' ')[0]}</span>
                          <span className="text-[10px] font-bold text-slate-200 mt-1">{item.name.split(' ')[1]}</span>
                        </>
                      ) : (
                        <span className="text-slate-700 text-xs">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {psychoState === 'test' && (
            <div>
              <div className="flex items-center justify-between mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>प्रत्येक बॉक्स पर क्लिक करके सही प्रतीक चुनें</span>
                </span>
                <span className="text-xs font-mono font-black text-rose-400">Recall Time: {timer}s</span>
              </div>

              {/* Recall Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800 max-w-sm mx-auto mb-6">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
                  const selectedId = userAnswers[idx];
                  const selectedItem = MEMORY_ITEMS.find(m => m.id === selectedId);
                  return (
                    <div
                      key={idx}
                      className="h-24 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center justify-center p-2 text-center relative"
                    >
                      {selectedItem ? (
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">{selectedItem.name.split(' ')[0]}</span>
                          <span className="text-[9px] font-bold text-teal-300 mt-1">{selectedItem.name.split(' ')[1]}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-600">खाली</span>
                      )}

                      <select
                        onChange={(e) => handlePsychoDrop(idx, Number(e.target.value))}
                        value={selectedId || ''}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      >
                        <option value="">Select Item</option>
                        {MEMORY_ITEMS.map(item => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <button
                  onClick={calculatePsychoResult}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-black text-xs cursor-pointer shadow-lg shadow-teal-950"
                >
                  सबमिट करें और T-Score देखें (Submit Test)
                </button>
              </div>
            </div>
          )}

          {psychoState === 'result' && (
            <div className="text-center py-6">
              <div className="text-4xl font-black text-teal-400 mb-2">
                {score} / 6 Correct
              </div>
              <div className="text-xs text-slate-400 mb-4">
                Estimated CBAT T-Score: <span className="font-bold text-amber-400 font-mono">{(score >= 5 ? 58 : score >= 4 ? 46 : 38).toFixed(1)}</span> (Min Qualifying: 42.0)
              </div>
              <div className={`inline-flex px-3 py-1.5 rounded-full text-xs font-bold mb-6 ${score >= 4 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'}`}>
                {score >= 4 ? '🎉 Congratulations! Qualified in Memory Test' : '⚠️ Need More Practice (T-Score below 42)'}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={startPsychoTest}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer border border-slate-700"
                >
                  Retry Test
                </button>
                <button
                  onClick={() => onStartMock()}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs cursor-pointer"
                >
                  Attempt Full Mock Test
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TOOL 6: EXAM CALENDAR */}
      {activeTool === 'calendar' && (
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-lg font-black text-white flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-teal-400" />
            <span>Railway Recruitment Board (RRB) 2025–2026 Exam Calendar</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            रेलवे भर्ती बोर्ड द्वारा जारी नवीनतम परीक्षा समय-सारणी, आवेदन तिथियां एवं आगामी शिफ्ट्स।
          </p>

          <div className="space-y-4">
            {[
              {
                exam: 'RRB ALP (Assistant Loco Pilot - CEN 01/2026)',
                stages: 'CBT-1 (Active Now) → CBT-2 → CBAT (Psycho) → DV',
                dates: 'CBT-1: Nov-Feb Live | CBT-2: June 2026',
                status: 'LIVE ALL-INDIA MOCK TESTS',
                statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
              },
              {
                exam: 'RRB Technician Grade-I & III (CEN 02/2026)',
                stages: 'Single Stage CBT → Document Verification & Medical',
                dates: 'Exam Date: Nov/Dec 2026 | Posts: 9,144',
                status: 'PREPARATION STAGE',
                statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
              },
              {
                exam: 'RRB Non-Technical Popular Categories (NTPC Graduate & UG)',
                stages: 'CBT-1 (100 Qs) → CBT-2 (120 Qs) → Typing/CBAT',
                dates: 'Notification Active | CBT-1: Late 2026',
                status: 'NOTIFICATION OUT',
                statusColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
              },
              {
                exam: 'RRB Level-1 (Group D Trackman / Pointsman)',
                stages: 'Computer Based Test (100 Qs) → PET (Physical Test)',
                dates: 'Upcoming CEN 08/2026 | Expected Posts: 30,000+',
                status: 'UPCOMING EXAM',
                statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
              }
            ].map((ev, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{ev.exam}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">चयन प्रक्रिया: {ev.stages}</div>
                  <div className="text-xs text-teal-300 font-mono mt-0.5">{ev.dates}</div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${ev.statusColor}`}>
                    {ev.status}
                  </span>
                  <button
                    onClick={() => onStartMock()}
                    className="px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs cursor-pointer"
                  >
                    Mocks →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
