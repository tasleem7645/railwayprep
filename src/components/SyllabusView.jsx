import React, { useState } from 'react';
import { RAILWAY_SYLLABUS } from '../data/railwaySyllabusData';
import { 
  FileText, Clock, Award, CheckCircle2, AlertTriangle, 
  Sparkles, Play, ChevronRight, BookOpen, Layers, ShieldCheck,
  Eye, Activity, Users, ArrowRight, BellRing, Calendar, Wrench,
  GraduationCap, Scale, Stethoscope, BrainCircuit
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
            <span>Official Railway Board CEN Notifications 2024-2026</span>
          </div>
          <span className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-bold">
            CEN 01/2026 (ALP) • CEN 04/2026 (JE) • CEN 06/2026 (NTPC Grad) • CEN 07/2026 (NTPC UG) • CEN 08/2026 (Station Master) • CEN 09/2025 (Group D)
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white">
          Railway Recruitment: Vacancies, Selection Pipeline & Official Syllabus
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Complete verified roadmap for RRB Station Master (1,215/1,265 posts CEN 08/2026), RRB ALP (11,127 posts CEN 01/2026), RRB JE (3,993 posts CEN 04/2026), NTPC Graduate (3,548 posts CEN 06/2026), NTPC UG (1,688 posts CEN 07/2026), Group D (22,195 posts CEN 09/2025), Technician, and RPF.
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

      {/* Active Exam Summary Card (Vacancies & Official Specs) */}
      <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-teal-500/30 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs text-teal-400 font-bold uppercase tracking-wider">{activeExam.notificationNo}</div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">{activeExam.name}</h3>
            {activeExam.payScale && (
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Pay Scale: <span className="text-slate-200 font-bold">{activeExam.payScale}</span> • Age Limit: <span className="text-slate-200 font-bold">{activeExam.ageLimit}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-300">
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Vacancies</div>
              <div className="text-sm sm:text-base font-black text-teal-300">{activeExam.totalVacancies}</div>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <div className="text-[10px] uppercase font-bold text-slate-400">Marking Scheme</div>
              <div className="text-sm sm:text-base font-black text-amber-400">-1/3rd Negative</div>
            </div>
          </div>
        </div>

        {/* 2026 Key Highlights Grid (Dates, Merit Formula, Eligibility) */}
        {activeExam.dates && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-teal-400" /> Apply Opening
              </div>
              <div className="font-bold text-white mt-0.5">{activeExam.dates.applyStart}</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-rose-400" /> Apply Closing
              </div>
              <div className="font-bold text-rose-300 mt-0.5">{activeExam.dates.applyEnd}</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-400" /> Modify Form
              </div>
              <div className="font-bold text-amber-300 mt-0.5">{activeExam.dates.editWindow}</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Scale className="w-3 h-3 text-emerald-400" /> Merit Ratio
              </div>
              <div className="font-bold text-emerald-300 mt-0.5">{activeExam.meritRatio || activeExam.meritFormula || 'As per CEN Rules'}</div>
            </div>
          </div>
        )}

        {/* Eligibility & Merit Formula */}
        {activeExam.qualification && (
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 text-xs">
            <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-300">Prescribed Qualification: </span>
              <span className="text-slate-300">{activeExam.qualification}</span>
            </div>
          </div>
        )}

        {/* Medical standard summary banner */}
        <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 text-xs">
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
                <div>
                  <h4 className="text-base font-bold text-teal-300">
                    {stage.stageName}
                  </h4>
                  {stage.passPercentage && (
                    <div className="text-[11px] text-amber-400 font-semibold mt-0.5">
                      Min Pass: {stage.passPercentage}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
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
                      <th className="pb-2.5 font-bold uppercase tracking-wider text-right">Marks / Criteria</th>
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

          {/* Trade Mapping for CBT-2 Part-B if available */}
          {activeExam.tradeMapping && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Wrench className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  CBT-2 Part-B: Trade / Subject Mapping by Engineering Discipline
                </h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 mb-3">
                Diploma & Degree candidates must choose one trade from the relevant grouping below. ITI candidates appear in their own trade. Mandatory 35% pass required.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-2 font-bold uppercase">Discipline</th>
                      <th className="pb-2 font-bold uppercase">Eligible Trades for Part-B Test</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {activeExam.tradeMapping.map((tm, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="py-2.5 font-bold text-teal-300 align-top">{tm.discipline}</td>
                        <td className="py-2.5 text-slate-300">{tm.trades}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Detailed Medical Fitness Breakdown if available */}
          {activeExam.medicalBreakdown && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Stethoscope className="w-4 h-4 text-sky-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Official Medical Fitness Standards & Vision Parameters
                </h4>
              </div>
              <div className="space-y-3 mt-3 text-xs">
                {activeExam.medicalBreakdown.map((mb, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="font-bold text-sky-300 sm:w-48 shrink-0">{mb.param}:</span>
                    <span className="text-slate-300">{mb.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CBAT (Computer Based Aptitude Test / Psycho) Criteria if available */}
          {activeExam.cbatDetails && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Computer Based Aptitude Test (CBAT / Psycho) — 5 Battery Tests
                  </h4>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/30">
                  {activeExam.cbatDetails.ratio}
                </span>
              </div>

              <div className="space-y-3 mt-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-300">Qualifying Cut-off: </span>
                      <span className="text-slate-300">{activeExam.cbatDetails.qualifyingCriteria}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-teal-300">Merit Contribution: </span>
                      <span className="text-slate-300">{activeExam.cbatDetails.meritContribution}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-sky-300">Mandatory Vision Document: </span>
                      <span className="text-slate-300">{activeExam.cbatDetails.visionDocRequired}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {activeExam.cbatDetails.batteries.map((b, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
                      <div className="font-bold text-teal-300 text-xs mb-1">{b.name}</div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PET (Physical Efficiency Test) Criteria if available */}
          {activeExam.petDetails && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-purple-500/30 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Physical Efficiency Test (PET) — Stage 2 Qualifying
                  </h4>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 font-bold border border-purple-500/30">
                  3x Shortlisted Candidates
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
                {/* Male */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="font-bold text-teal-300 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    <span>Male Candidates</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeExam.petDetails.male}</p>
                </div>

                {/* Female */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="font-bold text-pink-300 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                    <span>Female & Transgender Candidates</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeExam.petDetails.female}</p>
                </div>
              </div>

              {/* PET Exemptions & CCAA 1/3 Weightage */}
              <div className="mt-4 p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-purple-300">PET Exemptions: </span>
                    <span className="text-slate-300">{activeExam.petDetails.exemptions}</span>
                  </div>
                </div>
                {activeExam.petDetails.ccaaBenefit && (
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300">Railway Act Apprentices (CCAA) 1/3rd Weightage: </span>
                      <span className="text-slate-300">{activeExam.petDetails.ccaaBenefit}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Posts List & Parameters Table if available */}
          {activeExam.postsList && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {activeExam.shortName} Post Parameters & Classification (Annexure-A)
                </h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 mb-3">
                {activeExam.qualification}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-2 font-bold uppercase">Post / Designation</th>
                      <th className="pb-2 font-bold uppercase">Department</th>
                      {activeExam.postsList[0]?.level && <th className="pb-2 font-bold uppercase">Pay Level</th>}
                      {activeExam.postsList[0]?.vacancies && <th className="pb-2 font-bold uppercase text-center">Vacancies</th>}
                      <th className="pb-2 font-bold uppercase text-right">Medical Std.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {activeExam.postsList.map((p, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="py-2.5 font-bold text-slate-200">{p.post}</td>
                        <td className="py-2.5 text-slate-400">{p.dept}</td>
                        {p.level && <td className="py-2.5 text-slate-300 font-semibold">{p.level}</td>}
                        {p.vacancies && <td className="py-2.5 text-center font-bold text-teal-300">{p.vacancies}</td>}
                        <td className="py-2.5 text-right font-black text-emerald-400">{p.medStd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

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
