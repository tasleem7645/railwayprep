/**
 * RailwayPrep PRO — Printable A4 & Direct-Save Maths Mastery PDF Engine.
 * Works reliably on BOTH Android Chrome (via hidden iframe native Save-as-PDF dialog
 * + real Blob E-Book download — NEVER stuck on about:blank!) and Desktop browsers.
 */
import { parseMathSegments } from './mathParser.js';
import { renderMathsCh1DiagramSvg } from '../data/maths/diagrams/ch1NumberSystemDiagrams.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderMathHtml(text) {
  return parseMathSegments(text)
    .map((seg) => (seg.type === 'text' ? escapeHtml(seg.val) : seg.html))
    .join('');
}

function formatRichHtml(raw) {
  const str = String(raw ?? '');
  const tokens = str.split(/(==[^=]+==|\*\*[^*]+\*\*|`[^`]+`)/g);
  return tokens
    .map((tok) => {
      if (!tok) return '';
      if (tok.startsWith('==') && tok.endsWith('==') && tok.length > 4) {
        return `<mark class="hl">${formatRichHtml(tok.slice(2, -2))}</mark>`;
      }
      if (tok.startsWith('**') && tok.endsWith('**') && tok.length > 4) {
        return `<strong>${formatRichHtml(tok.slice(2, -2))}</strong>`;
      }
      if (tok.startsWith('`') && tok.endsWith('`') && tok.length > 2) {
        return `<span class="chip">${renderMathHtml(tok.slice(1, -1))}</span>`;
      }
      return renderMathHtml(tok);
    })
    .join('')
    .replace(/\n/g, '<br/>');
}

function pickStr(obj, lang = 'hi') {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return lang === 'hi' ? obj.hi || obj.en || '' : obj.en || obj.hi || '';
}

export function buildPrintableMathsBookHtml(chapterData, options = {}) {
  const {
    langMode = 'hi',
    origin = typeof window !== 'undefined' ? window.location.origin : 'https://railwayprep.com',
  } = options;
  const cleanHost = origin.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const isHi = langMode !== 'en';

  const blueprintSvg = chapterData.blueprintSvgKey
    ? `<div class="svg-wrap">${renderMathsCh1DiagramSvg(chapterData.blueprintSvgKey, { lang: langMode, theme: 'light' })}</div>`
    : '';

  const sectionsHtml = (chapterData.sections || [])
    .map((sec) => {
      const svgPlate = sec.diagramKey
        ? `<div class="svg-wrap">${renderMathsCh1DiagramSvg(sec.diagramKey, { lang: langMode, theme: 'light' })}</div>`
        : '';

      const cards = sec.boardCards || sec.blocks || [];
      const cardsHtml = cards
        .map((card) => {
          const title = card.title || card.heading;
          const formulaHtml = card.formula
            ? `<div class="formula-box">${renderMathHtml(card.formula)}</div>`
            : '';
          const pointsHtml = Array.isArray(card.points)
            ? `<ul class="pts">${card.points
                .map((pt) => `<li>${formatRichHtml(pickStr(pt, langMode))}</li>`)
                .join('')}</ul>`
            : `<div class="body-txt">${formatRichHtml(pickStr(card.body, langMode))}</div>`;
          const exObj = card.example || card.illustration;
          const exHtml = exObj
            ? `<div class="ex-box">
                <div class="ex-title">⚡ ${formatRichHtml(pickStr(exObj.title, langMode))}</div>
                <div class="two-col">
                  <div class="col-box"><b>${isHi ? 'Basic Method' : 'Basic Method'}:</b><br/>${formatRichHtml(pickStr(exObj.basic, langMode))}</div>
                  <div class="col-box smart"><b>${isHi ? 'Smart 5-Sec Trick' : 'Smart Trick'}:</b><br/>${formatRichHtml(pickStr(exObj.smart, langMode))}</div>
                </div>
              </div>`
            : '';
          const trapHtml = card.trap
            ? `<div class="trap-line">⚠️ ${formatRichHtml(pickStr(card.trap, langMode))}</div>`
            : '';

          return `
            <div class="block-card">
              <h4>${formatRichHtml(pickStr(title, langMode))}</h4>
              ${formulaHtml}
              ${pointsHtml}
              ${exHtml}
              ${trapHtml}
            </div>`;
        })
        .join('');

      return `
        <section class="mod-sec">
          <div class="mod-head">MODULE ${escapeHtml(sec.number)} • ${escapeHtml(pickStr(sec.title, langMode))}</div>
          ${svgPlate}
          ${cardsHtml}
        </section>`;
    })
    .join('');

  const tablesHtml = (chapterData.tables || [])
    .map(
      (tbl) => `
      <div class="tbl-wrap">
        <h3>${escapeHtml(pickStr(tbl.title, langMode))}</h3>
        <table>
          <thead><tr>${(tbl.headers?.[langMode] || tbl.headers?.en || []).map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
          <tbody>
            ${(tbl.rows || [])
              .map(
                (r) =>
                  `<tr>${r.map((cell) => `<td>${formatRichHtml(pickStr(cell, langMode))}</td>`).join('')}</tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>`
    )
    .join('');

  const pyqMap = new Map((chapterData.pyqBank || []).map((q) => [q.id, q]));
  const pyqsHtml = (chapterData.typeWiseGroups || [])
    .map((tg) => {
      const itemsHtml = tg.questionIds
        .map((id) => pyqMap.get(id))
        .filter(Boolean)
        .map((pq, idx) => {
          const opts = (pq.options?.[langMode] || pq.options?.en || [])
            .map((o, i) => `<span class="opt ${i === pq.correctIndex ? 'opt-ok' : ''}"><b>${String.fromCharCode(65 + i)}.</b> ${renderMathHtml(o)}</span>`)
            .join('');
          const methodsHtml = (pq.solution?.methods || [])
            .map((m) => {
              const titleText = pickStr(m.title, langMode);
              const needsTimeTag = m.timeTag && !titleText.includes(m.timeTag);
              return `
              <div class="m-box">
                <div class="m-head">${formatRichHtml(titleText)}${needsTimeTag ? ` (${escapeHtml(m.timeTag)})` : ''}</div>
                <div>${formatRichHtml(pickStr(m.steps, langMode))}</div>
              </div>`;
            })
            .join('');
          return `
            <div class="pyq-card">
              <div class="pyq-meta">PYQ #${idx + 1} • ${escapeHtml(pq.examTag)}</div>
              <div class="pyq-q">${renderMathHtml(pickStr(pq.question, langMode))}</div>
              <div class="opts-row">${opts}</div>
              <div class="sol-wrap">${methodsHtml}</div>
            </div>`;
        })
        .join('');
      return `
        <section class="type-sec">
          <h3>Type ${tg.typeNumber}: ${escapeHtml(pickStr(tg.title, langMode))}</h3>
          ${itemsHtml}
        </section>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="${isHi ? 'hi' : 'en'}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(pickStr(chapterData.title, langMode))} — RailwayPrep PRO</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" />
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 14px; font-family: "Plus Jakarta Sans", "Noto Sans Devanagari", system-ui, -apple-system, sans-serif; color: #0f172a; background: #fff; font-size: 11.5px; line-height: 1.5; }
    .topbar { display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #0d9488; padding-bottom:8px; margin-bottom:12px; gap:10px; flex-wrap:wrap; }
    .brand { font-size: 13px; font-weight: 900; color: #0f766e; }
    .print-btn { padding: 8px 14px; background:#0d9488; color:#fff; border:none; border-radius:8px; font-weight:800; cursor:pointer; }
    @media print { body { padding: 0; } .print-btn { display:none; } }
    h1 { font-size: 18px; margin: 6px 0 4px; color: #0f172a; }
    .sub { color: #475569; font-size: 11px; margin-bottom: 10px; }
    .svg-wrap { margin: 8px 0 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
    .mod-sec, .type-sec { margin-top: 14px; }
    .mod-head { background: #ecfdf5; border-left: 4px solid #0d9488; padding: 6px 10px; font-weight: 900; font-size: 12.5px; color: #065f46; margin-bottom: 8px; page-break-after: avoid; }
    .block-card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 9px 11px; margin-bottom: 9px; page-break-inside: avoid; }
    .block-card h4 { margin: 0 0 6px; font-size: 12.2px; color: #0f766e; }
    .formula-box { background:#f0fdf4; border:1px solid #86efac; border-radius:6px; padding:6px 10px; margin-bottom:6px; font-weight:700; color:#065f46; }
    .pts { margin: 4px 0 6px 16px; padding: 0; }
    .pts li { margin-bottom: 3px; }
    .hl { background: #fef08a; padding: 0 3px; font-weight: 700; }
    .chip { background: #f1f5f9; border: 1px solid #cbd5e1; padding: 0 4px; border-radius: 4px; font-family: monospace; font-size: 10.5px; }
    .trap-line { margin-top:5px; padding:4px 7px; background:#fff1f2; border-left:3px solid #e11d48; color:#881337; font-size:10.5px; font-weight:700; }
    .ex-box { margin-top: 6px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 8px; }
    .ex-title { font-weight: 800; color: #b45309; margin-bottom: 4px; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .col-box { background: #fff; border: 1px solid #e2e8f0; border-radius: 5px; padding: 5px 7px; font-size: 10.5px; }
    .col-box.smart { border-color: #10b981; background: #ecfdf5; }
    .tbl-wrap { margin-top: 12px; page-break-inside: avoid; }
    table { width: 100%; border-collapse: collapse; font-size: 10.5px; }
    th, td { border: 1px solid #cbd5e1; padding: 5px 7px; text-align: left; }
    th { background: #f1f5f9; font-weight: 800; }
    .pyq-card { border: 1px solid #cbd5e1; border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; page-break-inside: avoid; }
    .pyq-meta { font-size: 10px; font-weight: 800; color: #b45309; text-transform: uppercase; }
    .pyq-q { font-weight: 700; margin: 4px 0 6px; font-size: 11.5px; }
    .opts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 6px; }
    .opt { border: 1px solid #e2e8f0; padding: 3px 6px; border-radius: 4px; font-size: 10.5px; }
    .opt-ok { border-color: #10b981; background: #ecfdf5; font-weight: 800; }
    .m-box { border-left: 3px solid #0d9488; background: #f8fafc; padding: 4px 8px; margin-top: 4px; font-size: 10.5px; }
    .m-head { font-weight: 800; color: #0f766e; }
    .footer { margin-top: 14px; border-top: 1px solid #cbd5e1; padding-top: 6px; font-size: 10px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="topbar">
    <div>
      <div class="brand">RailwayPrep PRO (${escapeHtml(cleanHost)}) • Maths Mastery Booklet</div>
      <div style="font-size:10px;color:#64748b;">${escapeHtml(chapterData.sourceCode)}</div>
    </div>
    <button class="print-btn" onclick="window.print()">🖨️ Save as PDF / Print</button>
  </div>
  <h1>${renderMathHtml(pickStr(chapterData.title, langMode))}</h1>
  <div class="sub">${renderMathHtml(pickStr(chapterData.subtitle, langMode))}</div>
  ${blueprintSvg}
  ${sectionsHtml}
  ${tablesHtml}
  ${pyqsHtml}
  <div class="footer">RailwayPrep PRO • Interactive SVG Labs &amp; Chapter CBT Online at ${escapeHtml(cleanHost)}</div>
</body>
</html>`;
}

/**
 * Triggers native system "Save as PDF" dialog using a same-page hidden iframe
 * (works on Android Chrome, iOS Safari & Desktop without broken about:blank tabs!).
 */
export function triggerMathsSavePdfDialog(chapterData, options = {}) {
  const html = buildPrintableMathsBookHtml(chapterData, options);
  const frame = document.createElement('iframe');
  frame.style.position = 'fixed';
  frame.style.right = '0';
  frame.style.bottom = '0';
  frame.style.width = '1px';
  frame.style.height = '1px';
  frame.style.opacity = '0';
  frame.style.border = '0';
  frame.setAttribute('aria-hidden', 'true');
  document.body.appendChild(frame);

  const cleanup = () => {
    setTimeout(() => {
      try {
        if (frame.parentNode) frame.parentNode.removeChild(frame);
      } catch {}
    }, 3000);
  };

  frame.onload = () => {
    setTimeout(() => {
      try {
        frame.contentWindow?.focus();
        frame.contentWindow?.print();
      } catch {}
      cleanup();
    }, 450);
  };

  const doc = frame.contentDocument || frame.contentWindow?.document;
  if (doc) {
    doc.open();
    doc.write(html);
    doc.close();
  } else {
    frame.srcdoc = html;
  }
}

/**
 * Directly downloads standalone Offline E-Book HTML file to Android Downloads folder.
 */
export function downloadOfflineMathsBooklet(chapterData, options = {}) {
  const html = buildPrintableMathsBookHtml(chapterData, options);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `RailwayPrep_${chapterData.id}_${options.langMode || 'hi'}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/**
 * Opens Blob URL preview tab (NEVER about:blank!) if user prefers full browser tab preview.
 */
export function openMathsBlobPreviewTab(chapterData, options = {}) {
  const html = buildPrintableMathsBookHtml(chapterData, options);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (!win) {
    downloadOfflineMathsBooklet(chapterData, options);
    return false;
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  return true;
}
