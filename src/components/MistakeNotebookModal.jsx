import React, { useState, useEffect } from 'react';
import { 
  X, Bookmark, CheckCircle2, AlertCircle, Trash2, 
  RefreshCw, BookOpen, ChevronRight, Sparkles, Filter, Check
} from 'lucide-react';

export default function MistakeNotebookModal({ onClose, onStartCustomTest }) {
  const [mistakes, setMistakes] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [reattemptChoice, setReattemptChoice] = useState({});
  const [lang, setLang] = useState('hi');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('railwayprep_mistake_notebook');
      if (stored) {
        setMistakes(JSON.parse(stored));
      } else {
        // Provide sample high-yield common railway pitfalls if completely fresh
        const initialSample = [
          {
            id: 'sample_1',
            shiftQuestionNo: 2,
            subject: 'General Science',
            topic: 'Acids, Bases & Salts',
            question: {
              hi: 'वाशिंग सोडा (Washing Soda) को इसकी विरचन प्रक्रिया में प्राप्‍त करने के लिए किस यौगिक को जल के साथ उपचारित (treated) किया जाता है?',
              en: 'Which compound is treated with water to obtain washing soda in its preparation process?'
            },
            options: {
              hi: [
                'सोडियम कार्बोनेट को जल के साथ पुनःक्रिस्टलीकरण किया जाता है',
                'सोडियम बाइकार्बोनेट को जल के साथ उपचारित किया जाता है',
                'सोडियम हाइड्रॉक्साइड को जल के साथ उपचारित किया जाता है',
                'सोडियम क्लोराइड को जल के साथ उपचारित किया जाता है'
              ],
              en: [
                'Sodium carbonate is recrystallized with water',
                'Sodium bicarbonate is treated with water',
                'Sodium hydroxide is treated with water',
                'Sodium chloride is treated with water'
              ]
            },
            userAnswerIndex: 1,
            correctIndex: 0,
            solution: {
              hi: 'वाशिंग सोडा (Na₂CO₃·10H₂O) प्राप्त करने के लिए निर्जल सोडियम कार्बोनेट (Soda Ash) का जल में पुनःक्रिस्टलीकरण (Recrystallization) किया जाता है।',
              en: 'Recrystallization of sodium carbonate gives washing soda: Na₂CO₃ + 10H₂O → Na₂CO₃·10H₂O'
            }
          },
          {
            id: 'sample_2',
            shiftQuestionNo: 8,
            subject: 'Mathematics',
            topic: 'Speed, Time & Distance',
            question: {
              hi: '180 मीटर लंबी एक रेलगाड़ी 54 km/h की चाल से चल रही है। यह एक बिजली के खंभे को कितने सेकंड में पार करेगी?',
              en: 'A train 180 m long is moving at a speed of 54 km/h. In how many seconds will it cross an electric pole?'
            },
            options: {
              hi: ['10 सेकंड', '12 सेकंड', '15 सेकंड', '18 सेकंड'],
              en: ['10 seconds', '12 seconds', '15 seconds', '18 seconds']
            },
            userAnswerIndex: 0,
            correctIndex: 1,
            solution: {
              hi: 'चाल = 54 × (5/18) = 15 m/s। समय = दूरी / चाल = 180 / 15 = 12 सेकंड।',
              en: 'Speed = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 180 / 15 = 12 seconds.'
            }
          }
        ];
        setMistakes(initialSample);
        localStorage.setItem('railwayprep_mistake_notebook', JSON.stringify(initialSample));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleRemoveMistake = (id) => {
    const updated = mistakes.filter(m => m.id !== id);
    setMistakes(updated);
    try {
      localStorage.setItem('railwayprep_mistake_notebook', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleClearAll = () => {
    if (window.confirm('क्या आप सचमुच सभी सेव किए गए सवाल हटाना चाहते हैं?')) {
      setMistakes([]);
      try {
        localStorage.removeItem('railwayprep_mistake_notebook');
      } catch (e) {}
    }
  };

  const filteredMistakes = mistakes.filter(m => {
    if (selectedSubject === 'all') return true;
    return m.subject?.toLowerCase().includes(selectedSubject.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center shadow-lg">
              <Bookmark className="w-5 h-5 fill-rose-500/20" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">Smart Mistake Notebook</h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  {mistakes.length} Saved Questions
                </span>
              </div>
              <p className="text-xs text-slate-400">मॉक टेस्ट में आपके गलत हुए सवाल — केवल अपनी कमजोरियों का 1-क्लिक अभ्यास करें</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 cursor-pointer"
            >
              {lang === 'hi' ? 'English' : 'हिंदी'}
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-6 py-3 border-b border-slate-800/80 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'सभी सवाल (All)' },
              { id: 'science', label: 'General Science' },
              { id: 'math', label: 'Mathematics' },
              { id: 'reasoning', label: 'Reasoning' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedSubject(f.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSubject === f.id
                    ? 'bg-teal-500 text-slate-950 font-black'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {mistakes.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer font-medium"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* Question Cards List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {filteredMistakes.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3 opacity-60" />
              <h4 className="text-base font-bold text-white">कोई गलत सवाल नहीं बचा!</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                जब भी आप कोई नया मॉक टेस्ट देंगे, जो सवाल गलत होंगे वे अपने-आप यहाँ अभ्यास के लिए जुड़ जाएंगे।
              </p>
            </div>
          ) : (
            filteredMistakes.map((q, idx) => {
              const qText = q.question?.[lang] || q.question?.hi || q.question?.en;
              const opts = q.options?.[lang] || q.options?.hi || q.options?.en || [];
              const sol = q.solution?.[lang] || q.solution?.hi || q.solution?.en;
              const userAttempt = reattemptChoice[q.id];

              return (
                <div key={q.id || idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                        Q.{idx + 1}
                      </span>
                      <span className="font-bold text-teal-400">{q.subject}</span>
                      {q.topic && <span className="text-slate-500">• {q.topic}</span>}
                    </div>

                    <button
                      onClick={() => handleRemoveMistake(q.id)}
                      className="text-slate-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>

                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {qText}
                  </p>

                  {/* Options with Re-attempt selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {opts.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctIndex;
                      const isUserPrevWrong = optIdx === q.userAnswerIndex;
                      const isUserReattempt = userAttempt === optIdx;

                      let borderClass = 'border-slate-800 bg-slate-900/60 hover:border-slate-700';
                      if (userAttempt !== undefined) {
                        if (isCorrect) borderClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-bold';
                        else if (isUserReattempt) borderClass = 'border-rose-500 bg-rose-500/10 text-rose-300 font-bold';
                      } else {
                        if (isCorrect) borderClass = 'border-emerald-500/40 bg-emerald-500/5 text-emerald-300';
                        else if (isUserPrevWrong) borderClass = 'border-rose-500/40 bg-rose-500/5 text-rose-300';
                      }

                      return (
                        <div
                          key={optIdx}
                          onClick={() => setReattemptChoice(prev => ({ ...prev, [q.id]: optIdx }))}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${borderClass}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-[10px] font-bold flex items-center justify-center text-slate-300">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>

                          {isCorrect && (
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                              Correct Ans
                            </span>
                          )}
                          {!isCorrect && isUserPrevWrong && userAttempt === undefined && (
                            <span className="text-[10px] font-bold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-full">
                              Your Mistake
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Solution Box */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <span className="font-bold text-amber-300 block mb-1">💡 सही समाधान व व्याख्या (Explanation):</span>
                    <p className="text-slate-300 leading-relaxed">{sol || 'Official Railway Answer Key solution.'}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            दैनिक अभ्यास टिप: रोज़ाना केवल 10 गलत प्रश्नों को री-अटेम्प्ट करने से परीक्षा में 8–12 अंक बढ़ते हैं।
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-teal-950"
          >
            Done & Close
          </button>
        </div>

      </div>
    </div>
  );
}
