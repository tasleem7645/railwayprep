import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const INLINE_IMG_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;

/**
 * Renders an option value that may contain plain text, inline figure/fraction PNGs (`![alt](url)`), or both.
 */
export function OptionContentRenderer({ value = '' }) {
  const str = value == null ? '' : String(value);
  if (!str.includes('![')) {
    return <span className="break-words">{str}</span>;
  }

  const parts = [];
  let lastIdx = 0;
  let match;
  const re = new RegExp(INLINE_IMG_RE.source, 'g');
  while ((match = re.exec(str)) !== null) {
    if (match.index > lastIdx) {
      parts.push({ type: 'text', val: str.slice(lastIdx, match.index) });
    }
    parts.push({ type: 'img', alt: match[1] || 'Option Figure', src: match[2] });
    lastIdx = re.lastIndex;
  }
  if (lastIdx < str.length) {
    parts.push({ type: 'text', val: str.slice(lastIdx) });
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-2 break-words">
      {parts.map((p, idx) =>
        p.type === 'text' ? (
          <span key={idx}>{p.val}</span>
        ) : (
          <img
            key={idx}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="inline-block max-h-14 sm:max-h-16 max-w-full bg-white px-2 py-1 rounded-lg border border-slate-300/70 shadow-sm object-contain align-middle"
          />
        )
      )}
    </span>
  );
}

/**
 * Renders question text, markdown tables, inline math/figure PNGs, and standalone diagrams with click-to-zoom.
 */
export default function QuestionContentRenderer({ text = '', image = null, className = '' }) {
  const [zoomSrc, setZoomSrc] = useState(null);

  if (!text && !image) return null;

  const renderLineWithInlineImages = (lineStr, keyPrefix) => {
    if (!lineStr.includes('![')) {
      return <p key={keyPrefix}>{lineStr}</p>;
    }
    const parts = [];
    let lastIdx = 0;
    let match;
    const re = new RegExp(INLINE_IMG_RE.source, 'g');
    while ((match = re.exec(lineStr)) !== null) {
      if (match.index > lastIdx) {
        parts.push({ type: 'text', val: lineStr.slice(lastIdx, match.index) });
      }
      parts.push({ type: 'img', alt: match[1] || 'Equation / Figure', src: match[2] });
      lastIdx = re.lastIndex;
    }
    if (lastIdx < lineStr.length) {
      parts.push({ type: 'text', val: lineStr.slice(lastIdx) });
    }
    return (
      <div key={keyPrefix} className="flex flex-wrap items-center gap-2 leading-relaxed">
        {parts.map((p, idx) =>
          p.type === 'text' ? (
            <span key={idx}>{p.val}</span>
          ) : (
            <button
              key={idx}
              type="button"
              onClick={() => setZoomSrc(p.src)}
              title="Tap to zoom diagram/equation"
              className="inline-flex items-center bg-white px-2.5 py-1.5 rounded-xl border border-slate-300 shadow-sm hover:ring-2 hover:ring-teal-400 cursor-zoom-in"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="max-h-40 max-w-full object-contain"
              />
            </button>
          )
        )}
      </div>
    );
  };

  const renderFormattedContent = (content) => {
    if (!content) return null;

    const lines = content.split('\n');
    const tableLineIndices = [];
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.split('|').length >= 3) {
        tableLineIndices.push(idx);
      }
    });

    if (tableLineIndices.length >= 2) {
      const startIdx = tableLineIndices[0];
      const endIdx = tableLineIndices[tableLineIndices.length - 1];
      const beforeText = lines.slice(0, startIdx).join('\n').trim();
      const tableLines = lines.slice(startIdx, endIdx + 1);
      const afterText = lines.slice(endIdx + 1).join('\n').trim();

      const rows = tableLines
        .filter((l) => !l.includes('---'))
        .map((l) => l.split('|').map((c) => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1));

      const headerRow = rows[0] || [];
      const bodyRows = rows.slice(1);

      return (
        <div className="space-y-3">
          {beforeText && <div className="space-y-2">{beforeText.split('\n').map((l, i) => renderLineWithInlineImages(l, `b_${i}`))}</div>}

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

          {afterText && <div className="space-y-2">{afterText.split('\n').map((l, i) => renderLineWithInlineImages(l, `a_${i}`))}</div>}
        </div>
      );
    }

    return (
      <div className="space-y-2 leading-relaxed">
        {lines.map((l, i) => renderLineWithInlineImages(l, `l_${i}`))}
      </div>
    );
  };

  return (
    <div className={`question-content ${className}`}>
      {renderFormattedContent(text)}

      {image && (
        <div className="my-4 flex flex-col items-center sm:items-start">
          <button
            type="button"
            onClick={() => setZoomSrc(image)}
            className="group relative p-2.5 rounded-xl bg-white border border-slate-300 inline-block shadow-lg hover:ring-2 hover:ring-teal-400 cursor-zoom-in transition-all"
            title="Tap to zoom"
          >
            <img
              src={image}
              alt="Question Figure / Diagram"
              className="max-h-64 sm:max-h-72 max-w-full rounded-lg object-contain"
              loading="lazy"
            />
            <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-slate-900/80 text-white text-[9px] font-bold opacity-80 group-hover:opacity-100 flex items-center gap-1">
              <ZoomIn className="w-2.5 h-2.5" />
              <span>Zoom</span>
            </span>
          </button>
          <span className="text-[10px] text-slate-400 mt-1 italic">
            चित्र / आरेख (Official Railway Question Figure • Tap to zoom)
          </span>
        </div>
      )}

      {zoomSrc && (
        <div
          onClick={() => setZoomSrc(null)}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-300 text-center"
          >
            <button
              type="button"
              onClick={() => setZoomSrc(null)}
              className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center cursor-pointer hover:bg-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={zoomSrc}
              alt="Enlarged Equation or Diagram"
              className="max-h-[80vh] max-w-full mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
