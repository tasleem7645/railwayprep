import React from 'react';

/**
 * QuestionContentRenderer
 * Renders question text, formatted tables (e.g. statistics frequency distributions),
 * mathematical expressions, and diagrams/figures with responsive styling.
 */
export default function QuestionContentRenderer({ text = '', image = null, className = '' }) {
  if (!text && !image) return null;

  // Helper to parse markdown-like table syntax or tabular data
  const renderFormattedContent = (content) => {
    if (!content) return null;

    // Check if content contains markdown table lines (e.g. | Class Interval | Frequency |)
    const lines = content.split('\n');
    const tableLineIndices = [];
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.split('|').length >= 3) {
        tableLineIndices.push(idx);
      }
    });

    // If markdown table detected
    if (tableLineIndices.length >= 2) {
      const startIdx = tableLineIndices[0];
      const endIdx = tableLineIndices[tableLineIndices.length - 1];
      const beforeText = lines.slice(0, startIdx).join('\n').trim();
      const tableLines = lines.slice(startIdx, endIdx + 1);
      const afterText = lines.slice(endIdx + 1).join('\n').trim();

      // Parse table rows
      const rows = tableLines
        .filter(l => !l.includes('---')) // Filter separator rows like |:---|:---|
        .map(l => l.split('|').map(c => c.trim()).filter((c, i, arr) => i > 0 && i < arr.length - 1));

      const headerRow = rows[0] || [];
      const bodyRows = rows.slice(1);

      return (
        <div className="space-y-3">
          {beforeText && <p className="leading-relaxed">{beforeText}</p>}
          
          <div className="my-3 overflow-x-auto rounded-xl border border-slate-700/80 bg-slate-900/90 shadow-md">
            <table className="min-w-full divide-y divide-slate-700/80 text-center text-xs sm:text-sm">
              <thead className="bg-[#121c31] font-bold text-teal-300">
                <tr>
                  {headerRow.map((th, i) => (
                    <th key={i} className="px-4 py-2.5 border-r last:border-r-0 border-slate-700/80 uppercase tracking-wider">
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {bodyRows.map((tr, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-slate-950/40' : 'bg-slate-900/60'}>
                    {tr.map((td, cIdx) => (
                      <td key={cIdx} className="px-4 py-2 border-r last:border-r-0 border-slate-800 font-mono">
                        {td}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {afterText && <p className="leading-relaxed">{afterText}</p>}
        </div>
      );
    }

    // Default: Regular text with preserved line breaks
    return (
      <div className="space-y-2 leading-relaxed">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    );
  };

  return (
    <div className={`question-content ${className}`}>
      {renderFormattedContent(text)}

      {image && (
        <div className="my-4 flex flex-col items-center sm:items-start">
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 inline-block shadow-lg">
            <img 
              src={image} 
              alt="Question Figure / Diagram" 
              className="max-h-64 sm:max-h-72 max-w-full rounded-lg object-contain"
              loading="lazy"
            />
          </div>
          <span className="text-[10px] text-slate-400 mt-1 italic">
            चित्र / आरेख (Official Railway Question Diagram)
          </span>
        </div>
      )}
    </div>
  );
}
