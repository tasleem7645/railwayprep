import React, { useState } from 'react';
import { SUPER_COACHING_DATA } from '../data/superCoachingData';
import { 
  BookOpen, Sparkles, Zap, Award, Download, Clock, 
  ChevronRight, Filter, Search, CheckCircle2
} from 'lucide-react';

export default function SuperCoachingView({ onOpenPassPro }) {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNote, setActiveNote] = useState(SUPER_COACHING_DATA[0]);

  const filteredNotes = SUPER_COACHING_DATA.filter(note => {
    const matchSub = selectedSubject === 'All' || note.subject === selectedSubject;
    const matchSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        note.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSub && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>SuperCoaching Study Notes Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            High-Yield Exam Notes & Formulas
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Neeraj Sir Science, Aditya Ranjan Sir Maths, and Reasoning mind maps designed for 85+ score in RRB NTPC & ALP.
          </p>
        </div>

        <button
          onClick={onOpenPassPro}
          className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download All Notes in 1 PDF (Pass Pro)</span>
        </button>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-6">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {['All', 'General Science', 'Mathematics', 'Reasoning'].map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSubject === sub 
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-900/50' 
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search notes, formulas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      {/* 2-Column Layout: Notes List on Left, Active Note on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          {filteredNotes.map(note => {
            const isSelected = activeNote.id === note.id;
            return (
              <div
                key={note.id}
                onClick={() => setActiveNote(note)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-900 border-teal-500 shadow-lg shadow-teal-950 ring-1 ring-teal-500/50' 
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                    {note.teacher} • {note.role}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {note.readTime}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white line-clamp-1">{note.title}</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{note.overview}</p>
              </div>
            );
          })}
        </div>

        {/* Right Active Note Reader (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="pb-4 border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                {activeNote.subject} • {activeNote.category}
              </span>
              <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                {activeNote.badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-2">{activeNote.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">{activeNote.overview}</p>
          </div>

          {/* Points list */}
          <div className="mt-6 space-y-6">
            {activeNote.points.map((point, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <h4 className="text-sm font-bold text-teal-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{point.title}</span>
                </h4>

                {point.formula && (
                  <div className="my-3 p-3 rounded-xl bg-slate-900 border border-teal-500/30 font-mono text-sm text-teal-200">
                    <code>{point.formula}</code>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                  {point.content}
                </p>
              </div>
            ))}
          </div>

          {/* Quick PDF CTA Box */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-bold text-white">Want this chapter as a printable revision PDF?</h5>
              <p className="text-xs text-slate-400">Get complete formula handbook + 200 previous year numericals.</p>
            </div>
            <button
              onClick={onOpenPassPro}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold shrink-0 cursor-pointer"
            >
              Get PDF via Pass Pro (₹49)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
