/**
 * Built-In Bilingual A4 "Solved Shift PDF" & Offline Printable Sheet Generator.
 * Supports full Unicode Hindi (Devanagari) + English, Markdown frequency tables,
 * and cropped official diagrams with clean @media print A4 pagination.
 */

import { getPyqOptions, getPyqCorrectIndex, getQuestionImage } from './pyqHelper.js';
import { parseMathSegments } from './mathParser.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderMathTextHtml(str) {
  return parseMathSegments(str)
    .map((seg) => (seg.type === 'text' ? escapeHtml(seg.val) : seg.html))
    .join('');
}

function renderInlineMarkdownImagesHtml(str, origin = '') {
  const txt = String(str ?? '');
  if (!txt.includes('![')) return renderMathTextHtml(txt);
  const re = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let out = '';
  let lastIdx = 0;
  let m;
  while ((m = re.exec(txt)) !== null) {
    if (m.index > lastIdx) out += renderMathTextHtml(txt.slice(lastIdx, m.index));
    const rawUrl = m[2];
    const absUrl = rawUrl.startsWith('http')
      ? rawUrl
      : `${origin}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;
    out += `<img src="${escapeHtml(absUrl)}" alt="${escapeHtml(m[1] || 'Figure')}" style="max-height:48px;vertical-align:middle;background:#fff;padding:2px 4px;border-radius:4px;border:1px solid #cbd5e1;" />`;
    lastIdx = re.lastIndex;
  }
  if (lastIdx < txt.length) out += renderMathTextHtml(txt.slice(lastIdx));
  return out;
}

function formatTextWithTablesHtml(content, origin = '') {
  if (!content) return '';
  const lines = String(content).split('\n');
  const tableIndices = [];
  lines.forEach((line, idx) => {
    const t = line.trim();
    if (t.startsWith('|') && t.endsWith('|') && t.split('|').length >= 3) {
      tableIndices.push(idx);
    }
  });

  if (tableIndices.length >= 2) {
    const startIdx = tableIndices[0];
    const endIdx = tableIndices[tableIndices.length - 1];
    const before = lines.slice(0, startIdx).join('\n').trim();
    const tableLines = lines.slice(startIdx, endIdx + 1);
    const after = lines.slice(endIdx + 1).join('\n').trim();

    const rows = tableLines
      .filter((l) => !l.includes('---'))
      .map((l) =>
        l
          .split('|')
          .map((c) => c.trim())
          .filter((_, i, arr) => i > 0 && i < arr.length - 1)
      );
    const head = rows[0] || [];
    const body = rows.slice(1);

    const tableHtml = `
      <table class="q-table">
        <thead><tr>${head.map((c) => `<th>${renderMathTextHtml(c)}</th>`).join('')}</tr></thead>
        <tbody>${body
          .map((r) => `<tr>${r.map((c) => `<td>${renderMathTextHtml(c)}</td>`).join('')}</tr>`)
          .join('')}</tbody>
      </table>
    `;

    return `
      ${before ? `<p>${renderInlineMarkdownImagesHtml(before, origin).replace(/\n/g, '<br/>')}</p>` : ''}
      ${tableHtml}
      ${after ? `<p>${renderInlineMarkdownImagesHtml(after, origin).replace(/\n/g, '<br/>')}</p>` : ''}
    `;
  }

  return `<p>${renderInlineMarkdownImagesHtml(content, origin).replace(/\n/g, '<br/>')}</p>`;
}

export function buildPrintableShiftHtml(test, options = {}) {
  const {
    langMode = 'bilingual', // 'bilingual' | 'hi' | 'en'
    layoutMode = 'solved', // 'solved' | 'practice'
    origin = typeof window !== 'undefined' ? window.location.origin : 'https://railwayprep.com',
  } = options;

  const questions = Array.isArray(test?.questions) ? test.questions : [];
  const answerKeyItems = [];

  const questionsHtml = questions
    .map((q, idx) => {
      const qNo = q.shiftQuestionNo || q.id || idx + 1;
      const enQ = q.question?.en || '';
      const hiQ = q.question?.hi || '';
      const rawImg = getQuestionImage(q, langMode === 'hi' ? 'hi' : 'en') || '';
      const imgSrc = rawImg
        ? rawImg.startsWith('http')
          ? rawImg
          : `${origin}${rawImg.startsWith('/') ? '' : '/'}${rawImg}`
        : '';

      const enOpts = getPyqOptions(q, 'en');
      const hiOpts = getPyqOptions(q, 'hi');
      const correctEn = getPyqCorrectIndex(q, 'en');
      const correctHi = getPyqCorrectIndex(q, 'hi');
      const correctLetter = String.fromCharCode(
        65 + (langMode === 'hi' ? correctHi : correctEn)
      );
      answerKeyItems.push({ qNo, letter: correctLetter });

      let bodyHtml = '';
      if (langMode === 'bilingual') {
        bodyHtml = `
          ${enQ ? `<div class="q-text-en">${formatTextWithTablesHtml(enQ, origin)}</div>` : ''}
          ${hiQ ? `<div class="q-text-hi">${formatTextWithTablesHtml(hiQ, origin)}</div>` : ''}
        `;
      } else if (langMode === 'hi') {
        bodyHtml = `<div class="q-text-hi">${formatTextWithTablesHtml(hiQ || enQ, origin)}</div>`;
      } else {
        bodyHtml = `<div class="q-text-en">${formatTextWithTablesHtml(enQ || hiQ, origin)}</div>`;
      }

      const optsList = langMode === 'hi' ? hiOpts : enOpts;
      const optionsHtml = optsList
        .map((optText, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          const isCorr = oIdx === (langMode === 'hi' ? correctHi : correctEn);
          const extraHi =
            langMode === 'bilingual' && hiOpts[oIdx] && hiOpts[oIdx] !== optText
              ? ` <span class="opt-hi">/ ${renderInlineMarkdownImagesHtml(hiOpts[oIdx], origin)}</span>`
              : '';
          const markClass = layoutMode === 'solved' && isCorr ? 'opt-box opt-correct' : 'opt-box';
          const tick = layoutMode === 'solved' && isCorr ? ' <span class="tick">✓ Official Answer</span>' : '';
          return `
            <div class="${markClass}">
              <span class="opt-letter">${letter}.</span>
              <span class="opt-val">${renderInlineMarkdownImagesHtml(optText, origin)}${extraHi}${tick}</span>
            </div>
          `;
        })
        .join('');

      let solHtml = '';
      if (layoutMode === 'solved' && q.solution) {
        const approach = q.solution.approach ? `<div><b>Verdict:</b> ${renderMathTextHtml(q.solution.approach)}</div>` : '';
        const concept = q.solution.keyConcept ? `<div class="sol-formula">${renderMathTextHtml(q.solution.keyConcept)}</div>` : '';
        const expEn = q.solution.en || '';
        const expHi = q.solution.hi || '';
        let expText = '';
        if (langMode === 'bilingual') {
          expText = `${expHi ? `<div><b>व्याख्या:</b> ${renderMathTextHtml(expHi)}</div>` : ''}${expEn ? `<div><b>Explanation:</b> ${renderMathTextHtml(expEn)}</div>` : ''}`;
        } else if (langMode === 'hi') {
          expText = renderMathTextHtml(expHi || expEn);
        } else {
          expText = renderMathTextHtml(expEn || expHi);
        }
        solHtml = `
          <div class="sol-box">
            <div class="sol-title">Solution & Explanation (Ans: Option ${correctLetter})</div>
            ${approach}
            ${concept}
            ${expText}
          </div>
        `;
      }

      return `
        <article class="q-card">
          <div class="q-meta">
            <span class="q-num">Q.${qNo}</span>
            <span class="q-sec">${escapeHtml(q.section || 'General')}</span>
            ${q.topic ? `<span class="q-topic">${escapeHtml(String(q.topic).split('•')[0].trim())}</span>` : ''}
          </div>
          ${bodyHtml}
          ${imgSrc ? `<div class="q-img-wrap"><img src="${escapeHtml(imgSrc)}" alt="Diagram Q.${qNo}" /></div>` : ''}
          <div class="opts-grid">${optionsHtml}</div>
          ${solHtml}
        </article>
      `;
    })
    .join('\n');

  const answerKeySection =
    layoutMode === 'practice'
      ? `
      <section class="ans-key-page">
        <h2>Official Answer Key — ${escapeHtml(test?.title || 'RailwayPrep Test')}</h2>
        <div class="ans-grid">
          ${answerKeyItems
            .map((a) => `<div class="ans-cell"><b>${a.qNo}.</b> ${a.letter}</div>`)
            .join('')}
        </div>
      </section>
    `
      : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(test?.title || 'RailwayPrep Solved Paper')} - RailwayPrep.com</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" />
  <style>
    @page { size: A4; margin: 14mm 12mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans', 'Noto Sans Devanagari', system-ui, sans-serif;
      color: #0f172a;
      background: #f1f5f9;
      font-size: 12.5px;
      line-height: 1.5;
    }
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #070B18;
      color: #fff;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .toolbar-title { font-weight: 800; font-size: 13px; color: #5eead4; }
    .toolbar-sub { font-size: 11px; color: #cbd5e1; }
    .btn-print {
      background: #14b8a6;
      color: #042f2e;
      border: none;
      padding: 9px 18px;
      border-radius: 10px;
      font-weight: 800;
      font-size: 13px;
      cursor: pointer;
    }
    .sheet {
      max-width: 210mm;
      margin: 16px auto 40px;
      background: #ffffff;
      padding: 18px 22px;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
    }
    .paper-header {
      border-bottom: 2px solid #0d9488;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .brand-row { display: flex; align-items: center; gap: 10px; }
    .brand-row img { width: 42px; height: 42px; border-radius: 8px; object-fit: cover; }
    .brand-name { font-size: 16px; font-weight: 800; color: #0f172a; }
    .brand-url { font-size: 11px; font-weight: 700; color: #0d9488; }
    .paper-meta { text-align: right; font-size: 11px; color: #475569; }
    .paper-title { font-size: 16px; font-weight: 800; color: #0f172a; margin: 10px 0 4px; }
    .paper-sub { font-size: 11.5px; color: #475569; margin: 0 0 14px; }
    .q-card {
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 12px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .q-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; align-items: center; }
    .q-num { background: #0d9488; color: #fff; font-weight: 800; font-size: 11px; padding: 2px 8px; border-radius: 5px; }
    .q-sec { background: #f1f5f9; color: #334155; font-weight: 700; font-size: 10.5px; padding: 2px 8px; border-radius: 5px; }
    .q-topic { background: #fef3c7; color: #92400e; font-weight: 600; font-size: 10.5px; padding: 2px 8px; border-radius: 5px; }
    .q-text-en p, .q-text-hi p { margin: 4px 0; }
    .q-text-hi { color: #1e293b; font-weight: 500; }
    .q-table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 11px; }
    .q-table th, .q-table td { border: 1px solid #cbd5e1; padding: 4px 6px; text-align: center; }
    .q-table th { background: #f1f5f9; font-weight: 700; }
    .q-img-wrap { margin: 8px 0; text-align: left; }
    .q-img-wrap img { max-height: 180px; max-width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 3px; }
    .opts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
    .opt-box {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 5px 8px;
      font-size: 11.5px;
      background: #f8fafc;
      display: flex;
      gap: 6px;
    }
    .opt-correct { background: #ecfdf5; border-color: #10b981; font-weight: 700; color: #065f46; }
    .opt-letter { font-weight: 800; }
    .opt-hi { color: #475569; font-weight: 500; }
    .tick { color: #059669; font-weight: 800; font-size: 10.5px; }
    .sol-box {
      margin-top: 9px;
      padding: 8px 10px;
      background: #f0fdfa;
      border-left: 3px solid #0d9488;
      border-radius: 6px;
      font-size: 11px;
      color: #1e293b;
    }
    .sol-title { font-weight: 800; color: #0f766e; margin-bottom: 3px; }
    .sol-formula { font-family: monospace; background: #fff; border: 1px solid #ccfbf1; padding: 3px 6px; border-radius: 4px; margin: 4px 0; font-weight: 700; }
    .ans-key-page { page-break-before: always; break-before: page; padding-top: 10px; }
    .ans-key-page h2 { font-size: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 6px; }
    .ans-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin-top: 12px; }
    .ans-cell { border: 1px solid #cbd5e1; padding: 5px 8px; border-radius: 5px; font-size: 11.5px; text-align: center; }
    .sheet-footer {
      margin-top: 18px;
      padding-top: 10px;
      border-top: 1px solid #cbd5e1;
      text-align: center;
      font-size: 10.5px;
      color: #64748b;
    }
    @media (max-width: 640px) {
      .opts-grid { grid-template-columns: 1fr; }
      .paper-header { flex-direction: column; align-items: flex-start; }
      .paper-meta { text-align: left; }
    }
    @media print {
      body { background: #fff; }
      .no-print { display: none !important; }
      .sheet { margin: 0; padding: 0; box-shadow: none; max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="toolbar no-print">
    <div>
      <div class="toolbar-title">RailwayPrep PRO • A4 Solved Paper Studio</div>
      <div class="toolbar-sub">Chrome menu / Button se "Save as PDF" select karke phone me save karein!</div>
    </div>
    <button class="btn-print" onclick="window.print()">🖨️ Save as PDF / Print</button>
  </div>

  <main class="sheet">
    <header class="paper-header">
      <div class="brand-row">
        <img src="${escapeHtml(origin)}/logo.jpg" alt="RailwayPrep" onerror="this.style.display='none'" />
        <div>
          <div class="brand-name">RailwayPrep PRO</div>
          <div class="brand-url">${escapeHtml(origin.replace(/^https?:\/\//, ''))} • Official Railway CBT Portal</div>
        </div>
      </div>
      <div class="paper-meta">
        <div><b>Questions:</b> ${questions.length} Qs | <b>Max Marks:</b> ${escapeHtml(test?.maxMarks || questions.length)}</div>
        <div><b>Mode:</b> ${langMode === 'bilingual' ? 'Bilingual (EN + HI)' : langMode === 'hi' ? 'Hindi' : 'English'} • ${layoutMode === 'solved' ? 'Solved Solutions' : 'Practice + Answer Key'}</div>
      </div>
    </header>

    <h1 class="paper-title">${escapeHtml(test?.title || 'Railway Official Solved Paper')}</h1>
    <p class="paper-sub">${escapeHtml(test?.subTitle || 'Authentic Railway Exam Shift Paper with Official Answer Key & Explanations')} | ${escapeHtml(test?.shiftTime || '')}</p>

    ${questionsHtml}
    ${answerKeySection}

    <footer class="sheet-footer">
      Generated on <b>${escapeHtml(origin)}</b> • Practice 225+ Official Railway Mock Tests & Chapter PYQs Online.
    </footer>
  </main>
</body>
</html>`;
}

export function downloadOfflineSolvedSheet(hydratedTest, options = {}) {
  const html = buildPrintableShiftHtml(hydratedTest, options);
  const slug = String(hydratedTest?.id || 'railwayprep_shift')
    .replace(/[^a-z0-9_-]+/gi, '_')
    .toLowerCase();
  const filename = `RailwayPrep_${slug}_${options.langMode || 'bilingual'}.html`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/**
 * Accepts an optional preOpenedWindow created synchronously on click to bypass mobile popup blockers.
 */
export function renderPrintableShiftWindow(hydratedTest, options = {}, preOpenedWindow = null) {
  const html = buildPrintableShiftHtml(hydratedTest, options);
  const targetWin = preOpenedWindow || window.open('', '_blank');
  if (!targetWin) {
    // Graceful fallback if browser blocks popups completely
    downloadOfflineSolvedSheet(hydratedTest, options);
    return false;
  }
  targetWin.document.open();
  targetWin.document.write(html);
  targetWin.document.close();
  return true;
}
