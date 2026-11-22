import React, { useState } from 'react';
import { RAILWAY_SYLLABUS } from '../data/railwaySyllabusData';
import { 
  FileText, Clock, Award, CheckCircle2, AlertTriangle, 
  Sparkles, Play, ChevronRight, BookOpen, Layers
} from 'lucide-react';

export default function SyllabusView({ onStartMock, onOpenPassPro }) {
  const [selectedExamId, setSelectedExamId] = useState(RAILWAY_SYLLABUS[0].id);

  const activeExam = RAILWAY_SYLLABUS.find(e => e.id === selectedExamId) || RAILWAY_SYLLABUS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Title Banner */}
      <div className="pb-6 border-b border-slate-800">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-bold uppercase mb-2">
          <FileText className="w-3.5 h-3.5" />
          <span>Official RRB Notification Blueprint 2026-27</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white">
          Complete Railway Exams Syllabus & Exam Pattern
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Detailed stage-wise pattern, negative marking rules, subject weightage tables, and topic checklists compiled directly from official Centralised Employment Notices (CEN).
        </p>
      </div>

      {/* Exam Selector Tabs (Testbook Style) */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
        {RAILWAY_SYLLABUS.map((exam) => {
          const isSelected = exam.id === selectedExamId;
          return (
            <button
              key={exam.id}
              onClick={() => setSelectedExamId(exam.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 border-teal-400 shadow-lg shadow-teal-950 font-black scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{exam.shortName}</span>
              {exam.tag && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isSelected ? 'bg-slate-950/25 text-slate-950' : 'bg-slate-800 text-teal-300'
                }`}>
                  {exam.tag}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Syllabus Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Stages & Tables (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <h3 className="text-xl font-black text-white">{activeExam.name}</h3>
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
              Neg: -1/3rd Mark
            </span>
          </div>

          {activeExam.stages.map((stage, sIdx) => (
            <div key={sIdx} className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <h4 className="text-base font-bold text-teal-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-400" />
                  <span>{stage.stageName}</span>
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-teal-400" /> {stage.duration}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-bold">{stage.totalQuestions} Questions ({stage.totalMarks} Marks)</span>
                </div>
              </div>

              {/* Table */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-2.5 font-bold uppercase tracking-wider">Subject / Section</th>
                      <th className="pb-2.5 font-bold uppercase tracking-wider text-center">Questions</th>
                      <th className="pb-2.5 font-bold uppercase tracking-wider text-right">Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {stage.table.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/30">
                        <td className="py-2.5 font-medium text-slate-200">{row.subject}</td>
                        <td className="py-2.5 text-center font-bold text-teal-400">{row.questions}</td>
                        <td className="py-2.5 text-right font-bold text-emerald-400">{row.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Quick Action to start mock test */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-slate-950 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-bold text-white">Ready to test your preparation on this syllabus?</h5>
              <p className="text-xs text-slate-400">Attempt live CBT mock test matching this exact pattern.</p>
            </div>
            <button
              onClick={() => onStartMock()}
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-teal-950 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Attempt Mock Test Now</span>
            </button>
          </div>
        </div>

        {/* Right Column: Topic Checklists (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 sticky top-24">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Subject-wise Syllabus Topics</span>
              </h4>
              <span className="text-[11px] text-teal-400 font-bold">100% CBSE / DGT Match</span>
            </div>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              {activeExam.subjectBreakdown.map((sb, sbIdx) => (
                <div key={sbIdx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <h5 className="text-xs font-bold text-teal-300 mb-2">{sb.subject}</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {sb.topics.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-teal-400 mt-0.5">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenPassPro}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs text-center shadow-lg shadow-amber-950 cursor-pointer"
            >
              Get Full Chapterwise PDF Notes (Pass Pro)
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
