import React, { useState } from 'react';
import { RAILWAY_SYLLABUS } from '../data/railwaySyllabusData';
import { 
  FileText, Clock, Award, CheckCircle2, AlertTriangle, 
  Sparkles, Play, ChevronRight, BookOpen, Layers, ShieldCheck,
  Eye, Activity, Users, ArrowRight, BellRing
} from 'lucide-react';

export default function SyllabusView({ onStartMock, onOpenPassPro }) {
  const [selectedExamId, setSelectedExamId] = useState(RAILWAY_SYLLABUS[0].id);

  const activeExam = RAILWAY_SYLLABUS.find(e => e.id === selectedExamId) || RAILWAY_SYLLABUS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Title Banner */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SarkariResult & Official RRB CEN Notification 2024-2026</span>
          </div>
          <span className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-bold">
            Updated Vacancies & Pattern Changes Included
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white">
          Railway Recruitment: Vacancies, Selection Pipeline & Syllabus
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Complete roadmap for RRB ALP (18,799 posts), NTPC (11,558 posts), Technician (9,144 posts), Group D, and RPF with every single stage: CBT-1, CBT-2, CBAT/Psycho, Typing, PET, DV, and Medical standards.
        </p>
      </div>

      {/* Exam Selector Tabs */}
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

      {/* Active Exam Summary Card (Vacancies & Medical Specs) */}
      <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-teal-500/30 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs text-teal-400 font-bold uppercase tracking-wider">{activeExam.notificationNo}</div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">{activeExam.name}</h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-300">
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Vacancies</div>
              <div className="text-sm sm:text-base font-black text-teal-300">{activeExam.totalVacancies}</div>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <div className="text-[10px] uppercase font-bold text-slate-400">Marking Rule</div>
              <div className="text-sm sm:text-base font-black text-amber-400">-1/3rd Negative</div>
            </div>
          </div>
        </div>

        {/* Medical standard alert box */}
        <div className="mt-4 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 text-xs">
          <Eye className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-sky-300">Medical Fitness Standard: </span>
            <span className="text-slate-300">{activeExam.medicalStandard}</span>
          </div>
        </div>
      </div>

      {/* Step-by-Step Selection Pipeline Stepper (CBT1 -> CBT2 -> Psycho/Typing -> DV -> Medical -> Final) */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-teal-400" />
          <h3 className="text-lg font-black text-white">Official Selection Pipeline & Stages</h3>
          <span className="text-xs text-slate-400 font-medium">(Stage-by-stage qualifying criteria)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeExam.pipeline.map((p, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-teal-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    {p.step}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-teal-300">
                    {p.type}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Syllabus Workspace: Split into Exam Stages & Topic Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Stages & Tables (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="pb-3 border-b border-slate-800/80">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Exam Pattern & Subject Weightage Tables</span>
            </h3>
          </div>

          {activeExam.stages.map((stage, sIdx) => (
            <div key={sIdx} className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <h4 className="text-base font-bold text-teal-300">
                  {stage.stageName}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-teal-400" /> {stage.duration}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-bold">{stage.totalQuestions} Questions</span>
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
              <h5 className="text-sm font-bold text-white">Ready to test your preparation on this pattern?</h5>
              <p className="text-xs text-slate-400">Attempt live CBT mock test matching this exact official syllabus.</p>
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
