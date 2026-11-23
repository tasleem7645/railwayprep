import React, { useState } from 'react';
import { BookOpen, Star, ExternalLink, ShoppingCart, Sparkles, CheckCircle2 } from 'lucide-react';
import { MONETIZATION_CONFIG } from '../config/monetizationConfig';

export default function AffiliateBooksSection() {
  const { affiliate } = MONETIZATION_CONFIG;
  const [selectedSubject, setSelectedSubject] = useState('all');

  const filteredBooks = affiliate.recommendedBooks.filter(book => {
    if (selectedSubject === 'all') return true;
    if (selectedSubject === 'maths') return book.id.includes('maths');
    if (selectedSubject === 'science') return book.id.includes('science');
    if (selectedSubject === 'reasoning') return book.id.includes('reasoning');
    if (selectedSubject === 'practice') return book.id.includes('alp') || book.id.includes('practice');
    return true;
  });

  return (
    <section className="py-12 border-t border-slate-800/80 bg-[#070B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-extrabold text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Top Toppers Choice • Recommended Study Books</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Best RRB ALP & Technician Preparation Books
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Carefully curated chapterwise TCS previous year question books with detailed bilingual explanations.
          </p>

          {/* Subject Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-5 overflow-x-auto no-scrollbar">
            {[
              { key: 'all', label: 'All Books' },
              { key: 'maths', label: 'Mathematics' },
              { key: 'science', label: 'General Science' },
              { key: 'reasoning', label: 'Reasoning' }
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setSelectedSubject(f.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSubject === f.key
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <div 
              key={book.id}
              className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Book Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {book.badge}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    {book.discount}
                  </span>
                </div>

                {/* Book Image Cover Thumbnail */}
                <div className="h-36 rounded-2xl overflow-hidden mb-4 relative group-hover:scale-[1.02] transition-transform bg-slate-950 flex items-center justify-center">
                  <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-[11px] font-bold text-white truncate drop-shadow">
                    {book.publisher}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                  {book.title}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold text-white text-xs">{book.rating}</span>
                  </div>
                  <span className="text-slate-500">•</span>
                  <span>({book.reviewsCount.toLocaleString()} ratings)</span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-black text-white">₹{book.offerPrice}</span>
                  <span className="text-xs text-slate-500 line-through">₹{book.regularPrice}</span>
                </div>
              </div>

              {/* Buy on Amazon Button */}
              <a
                href={book.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-98 transition-all"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Buy on Amazon</span>
                <ExternalLink className="w-3 h-3 text-slate-950/70" />
              </a>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="text-center text-[11px] text-slate-500 mt-8">
          *Disclosure: As an Amazon Associate, we earn from qualifying purchases at no additional cost to you.
        </div>

      </div>
    </section>
  );
}
