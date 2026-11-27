/**
 * RailwayPrep PRO — Printable A4 Coaching Booklet Generator for NCERT Science Notes.
 * Preserves clean 1-column A4 e-book card layout while adding:
 * - Repeating top brand header & bottom brand footer on every printed page (Logo + RailwayPrep PRO)
 * - Subtle centered diagonal brand watermark across printed PDF pages
 * - Full light-mode labeled Vector SVG Diagrams & Venn charts inside every concept block
 * - Professional classroom coaching labels, inline English science terms & zero 3rd-party mentions
 */
import { parseMathSegments } from './mathParser.js';
import { renderNcertDiagramSvg } from '../data/ncert/diagrams/chapterVectorDiagrams.js';

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

function formatRichTextHtml(raw) {
  const str = String(raw ?? '');
  const tokens = str.split(/(==[^=]+==|\*\*[^*]+\*\*|`[^`]+`)/g);
  return tokens
    .map((tok) => {
      if (!tok) return '';
      if (tok.startsWith('==') && tok.endsWith('==') && tok.length > 4) {
        return `<mark class="hl">${renderMathHtml(tok.slice(2, -2))}</mark>`;
      }
      if (tok.startsWith('**') && tok.endsWith('**') && tok.length > 4) {
        return `<strong class="b-key">${renderMathHtml(tok.slice(2, -2))}</strong>`;
      }
      if (tok.startsWith('`') && tok.endsWith('`') && tok.length > 2) {
        return `<span class="chip">${renderMathHtml(tok.slice(1, -1))}</span>`;
      }
      return renderMathHtml(tok);
    })
    .join('')
    .replace(/\n/g, '<br/>');
}

function getBi(obj, langMode) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  if (langMode === 'hi') return obj.hi || obj.en || '';
  if (langMode === 'en') return obj.en || obj.hi || '';
  if (obj.hi && obj.en && obj.hi !== obj.en) {
    return `<div class="bi-hi">${formatRichTextHtml(obj.hi)}</div><div class="bi-en">${formatRichTextHtml(obj.en)}</div>`;
  }
  return obj.hi || obj.en || '';
}

function renderSingleText(obj, langMode) {
  if (!obj) return '';
  if (typeof obj === 'string') return formatRichTextHtml(obj);
  if (langMode === 'bilingual') return getBi(obj, 'bilingual');
  return formatRichTextHtml(obj[langMode] || obj.hi || obj.en || '');
}

export function buildPrintableNcertBookHtml(chapterData, options = {}) {
  const {
    langMode = 'hi', // 'hi' | 'en' | 'bilingual'
    origin = typeof window !== 'undefined' ? window.location.origin : 'https://railwayprep.com',
  } = options;

  const svgLang = langMode === 'en' ? 'en' : 'hi';
  const pyqMap = new Map((chapterData.pyqBank || []).map((q) => [q.id, q]));
  const docTitle = `RailwayPrep_PRO_${chapterData.id}_${langMode.toUpperCase()}_Notes`;
  const cleanHost = escapeHtml(origin.replace(/^https?:\/\//, ''));
  const chapterShortTitle = escapeHtml(
    chapterData.title?.[svgLang] || chapterData.title?.en || chapterData.id
  );

  const blueprintSvg = chapterData.blueprintSvgKey
    ? `<div class="svg-wrap">${renderNcertDiagramSvg(chapterData.blueprintSvgKey, { lang: svgLang, theme: 'light' })}</div>`
    : '';

  const renderRealImageHtml = (img) => {
    if (!img || (!img.url && !img.imageUrl)) return '';
    const src = escapeHtml(origin) + (img.url || img.imageUrl);
    return `<div class="img-strip">
      <figure><img src="${src}" alt="Figure" /></figure>
      ${img.secondaryUrl ? `<figure><img src="${escapeHtml(origin)}${img.secondaryUrl}" alt="Figure 2" /></figure>` : ''}
      <div class="img-cap">${img.title ? `<strong>${renderSingleText(img.title, langMode)}</strong>` : ''}<div>${renderSingleText(img.caption, langMode)}</div></div>
    </div>`;
  };

  const secHtml = (chapterData.sections || [])
    .map((sec) => {
      const flowSvg = sec.flowDiagramKey
        ? `<div class="svg-wrap">${renderNcertDiagramSvg(sec.flowDiagramKey, { lang: svgLang, theme: 'light' })}</div>`
        : '';
      const secImgHtml = renderRealImageHtml(sec.realImage);

      const blocksHtml = (sec.blocks || [])
        .map((blk) => {
          const blkHeading = blk.heading || blk.title || '';
          const isMnemonicBlk = blk.type === 'mnemonic' || blk.type === 'viralTrick';
          const conceptBody = !isMnemonicBlk ? (blk.conceptStory || blk.desiIntuition || blk.content) : null;
          const mnemonicBody = blk.viralTrick || (isMnemonicBlk ? (blk.content || blk.conceptStory || blk.desiIntuition) : null);
          const blkSvg = blk.diagramKey
            ? `<div class="svg-wrap">${renderNcertDiagramSvg(blk.diagramKey, { lang: svgLang, theme: 'light' })}</div>`
            : '';

          const pyqsHtml = (blk.inlinePyqIds || [])
            .map((pid) => pyqMap.get(pid))
            .filter(Boolean)
            .map((pq) => {
              const opts = pq.options[langMode === 'en' ? 'en' : 'hi'] || pq.options.en;
              const ansChar = String.fromCharCode(65 + (pq.correctIndex || 0));
              return `
                <div class="pyq-box">
                  <div class="pyq-tag">⚡ ${escapeHtml(pq.examTag)}</div>
                  <div class="pyq-q">${renderSingleText(pq.question, langMode)}</div>
                  <div class="pyq-opts">${opts.map((o, idx) => `<span class="pyq-opt ${idx === pq.correctIndex ? 'pyq-ans' : ''}">${String.fromCharCode(65 + idx)}) ${escapeHtml(o)}</span>`).join('')}</div>
                  <div class="pyq-exp"><strong>Ans ${ansChar}:</strong> ${renderSingleText(pq.solution, langMode)}</div>
                </div>`;
            })
            .join('');

          const realImgHtml = renderRealImageHtml(blk.realImage);

          return `
            <div class="block-card">
              <h3>${renderSingleText(blkHeading, langMode)}</h3>
              ${conceptBody ? `<div class="box-intuition"><span class="pill pill-green">${langMode === 'en' ? 'Concept Explanation' : '📘 शिक्षक व्याख्या'}</span>${renderSingleText(conceptBody, langMode)}</div>` : ''}
              ${Array.isArray(blk.bullets) ? `<ul class="bullet-list">${blk.bullets.map((b) => `<li>${renderSingleText(b, langMode)}</li>`).join('')}</ul>` : ''}
              ${blkSvg}
              ${realImgHtml}
              ${mnemonicBody ? `<div class="box-trick"><span class="pill pill-amber">${langMode === 'en' ? '🧠 Memory Key / Mnemonic' : '🧠 परीक्षा स्मृति सूत्र'}</span>${renderSingleText(mnemonicBody, langMode)}</div>` : ''}
              ${blk.topperEdge ? `<div class="box-topper"><span class="pill pill-purple">${langMode === 'en' ? '🎯 NCERT+ CBT Exam Edge' : '🎯 NCERT+ एवं CBT उच्च बिंदु'}</span>${renderSingleText(blk.topperEdge, langMode)}</div>` : ''}
              ${blk.trapAlert ? `<div class="box-trap"><span class="pill pill-rose">${langMode === 'en' ? '⚠️ Exam Trap (-0.33)' : '⚠️ -0.33 Trap Alert'}</span>${renderSingleText(blk.trapAlert, langMode)}</div>` : ''}
              ${pyqsHtml}
            </div>`;
        })
        .join('');

      return `
        <section class="chapter-sec">
          <div class="sec-head">
            <span class="sec-num">${escapeHtml(sec.number)}</span>
            <h2>${renderSingleText(sec.title, langMode)}</h2>
          </div>
          ${flowSvg}
          ${secImgHtml}
          ${blocksHtml}
        </section>`;
    })
    .join('');

  const confusionHtml = Array.isArray(chapterData.confusionBreakers) && chapterData.confusionBreakers.length > 0
    ? `<section class="chapter-sec">
        <div class="sec-head"><span class="sec-num">VS</span><h2>${langMode === 'en' ? 'High-Frequency Confusion Breakers (Save -0.33 Marks)' : 'अक्सर गलत होने वाले तुलनात्मक युग्म (-0.33 Marks बचाएं)'}</h2></div>
        <div class="block-card">
          <div class="cheat-grid">
            ${chapterData.confusionBreakers
              .map(
                (cb) => `
              <div class="cheat-item">
                <div style="font-weight:800;color:#9f1239;margin-bottom:3px">${renderSingleText(cb.pair, langMode)}</div>
                <div><strong>1)</strong> ${renderSingleText(cb.left, langMode)}</div>
                <div style="margin-top:2px"><strong>2)</strong> ${renderSingleText(cb.right, langMode)}</div>
              </div>`
              )
              .join('')}
          </div>
        </div>
      </section>`
    : '';

  const tablesHtml = (chapterData.tables || [])
    .map(
      (tbl) => `
      <div class="block-card">
        <h3>📊 ${renderSingleText(tbl.title, langMode)}</h3>
        <table class="data-table">
          <thead><tr>${(tbl.headers[langMode === 'en' ? 'en' : 'hi'] || tbl.headers.en).map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
          <tbody>
            ${tbl.rows.map((r) => `<tr>${r.map((c) => `<td>${typeof c === 'object' ? renderSingleText(c, langMode) : escapeHtml(c)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>`
    )
    .join('');

  const actCount = (chapterData.activities || []).length;
  const activitiesHtml = actCount > 0
    ? `<section class="chapter-sec">
        <div class="sec-head"><span class="sec-num">LAB</span><h2>${langMode === 'en' ? `All ${actCount} NCERT Activities Summary` : `सभी ${actCount} NCERT क्रियाकलाप (प्रयोग सारांश)`}</h2></div>
        ${chapterData.activities
          .map((a, idx) => {
            const aNum = a.num ?? (typeof a.id === 'string' ? a.id.replace(/^act-/i, '').replace(/-/g, '.') : String(idx + 1));
            const aSteps = a.steps || a.setup;
            const aTakeaway = a.examTakeaway || a.observation;
            return `
          <div class="block-card">
            <h3>Activity ${escapeHtml(String(aNum))}: ${renderSingleText(a.title, langMode)}</h3>
            ${a.materials ? `<div class="act-meta"><strong>Materials:</strong> ${renderSingleText(a.materials, langMode)}</div>` : ''}
            ${aSteps ? `<div class="act-steps">${renderSingleText(aSteps, langMode)}</div>` : ''}
            ${aTakeaway ? `<div class="box-intuition"><span class="pill pill-green">🎯 Exam Takeaway</span>${renderSingleText(aTakeaway, langMode)}</div>` : ''}
          </div>`;
          })
          .join('')}
      </section>`
    : '';

  const inTextHtml = Array.isArray(chapterData.inTextQuestions) && chapterData.inTextQuestions.length > 0
    ? `<section class="chapter-sec">
        <div class="sec-head"><span class="sec-num">IN</span><h2>${langMode === 'en' ? 'NCERT In-Text Think & Answer Solutions' : 'पाठ्यपुस्तक "सोचिए और बताइए" संपूर्ण हल'}</h2></div>
        <div class="block-card">
          ${chapterData.inTextQuestions
            .map(
              (item) => `
            <div class="ex-row">
              <div class="ex-q"><strong>[${escapeHtml(item.num)}]</strong> ${renderSingleText(item.q, langMode)}</div>
              <div class="ex-a"><strong>Ans:</strong> ${renderSingleText(item.a, langMode)}</div>
            </div>`
            )
            .join('')}
        </div>
      </section>`
    : '';

  const exCount = (chapterData.exercises || []).length;
  const exercisesHtml = exCount > 0
    ? `<section class="chapter-sec">
        <div class="sec-head"><span class="sec-num">EX</span><h2>${langMode === 'en' ? `Complete ${exCount} NCERT Solved Exercises` : `सभी ${exCount} NCERT अभ्यास प्रश्न हल`}</h2></div>
        <div class="block-card">
          ${chapterData.exercises
            .map(
              (ex) => `
            <div class="ex-row">
              <div class="ex-q"><strong>Q${ex.num}.</strong> ${renderSingleText(ex.q, langMode)}</div>
              <div class="ex-a"><strong>Ans:</strong> ${renderSingleText(ex.a, langMode)}</div>
            </div>`
            )
            .join('')}
        </div>
      </section>`
    : '';

  return `<!DOCTYPE html>
<html lang="${langMode === 'en' ? 'en' : 'hi'}">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(docTitle)}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" />
  <style>
    @page { size: A4 portrait; margin: 11mm 11mm 13mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      background: #f1f5f9;
      color: #0f172a;
      font-family: 'Noto Sans Devanagari', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      font-size: 13px;
      line-height: 1.56;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .toolbar {
      position: sticky; top: 0; z-index: 99;
      background: #0f172a; color: #fff;
      padding: 10px 18px;
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .btn-print {
      background: linear-gradient(90deg, #10b981, #0d9488);
      color: #042f2e; font-weight: 900; font-size: 13px;
      border: none; padding: 9px 18px; border-radius: 10px; cursor: pointer;
    }
    .pdf-watermark {
      display: none;
    }
    .print-shell {
      width: 100%;
      border-collapse: collapse;
    }
    .print-shell > thead,
    .print-shell > tfoot {
      display: none;
    }
    .running-bar {
      display: flex; align-items: center; justify-content: space-between; gap: 10px;
      border-bottom: 1.5px solid #cbd5e1;
      padding: 4px 2px 6px;
      margin-bottom: 8px;
      font-size: 10.5px; font-weight: 800; color: #334155;
    }
    .running-brand {
      display: flex; align-items: center; gap: 6px; color: #0f172a; font-weight: 900;
    }
    .running-brand img {
      width: 18px; height: 18px; border-radius: 4px; object-fit: cover;
    }
    .running-foot {
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid #cbd5e1;
      padding: 5px 2px 2px;
      margin-top: 8px;
      font-size: 10px; font-weight: 700; color: #475569;
    }
    .book {
      max-width: 210mm;
      margin: 14px auto 32px;
      background: #ffffff;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
      position: relative;
      z-index: 1;
    }
    .cover-header {
      border: 2px solid #0d9488;
      border-radius: 12px;
      background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 60%, #fefce8 100%);
      padding: 14px 16px;
      margin-bottom: 14px;
      display: flex; align-items: center; justify-content: space-between; gap: 14px;
    }
    .brand { display: flex; align-items: center; gap: 10px; }
    .brand img { width: 44px; height: 44px; border-radius: 9px; object-fit: cover; border: 1.5px solid #0d9488; }
    .brand-title { font-size: 15.5px; font-weight: 900; color: #0f172a; }
    .brand-sub { font-size: 11px; font-weight: 700; color: #0d9488; }
    .doc-h1 { font-size: 20px; font-weight: 900; color: #0f172a; margin: 4px 0 4px; }
    .doc-sub { font-size: 12px; color: #334155; margin: 0; }
    .cheat-box {
      border: 1.5px solid #0d9488; background: #f0fdfa;
      border-radius: 10px; padding: 10px 12px; margin-bottom: 14px;
      break-inside: avoid;
    }
    .cheat-title { font-size: 13px; font-weight: 900; color: #0f766e; margin-bottom: 6px; }
    .cheat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .cheat-item { background: #fff; border: 1px solid #ccfbf1; border-radius: 6px; padding: 6px 8px; font-size: 11.5px; }
    .sec-head {
      background: #0f172a; color: #ffffff;
      border-radius: 8px; padding: 7px 12px; margin: 14px 0 10px;
      display: flex; align-items: center; gap: 8px;
      break-after: avoid; page-break-after: avoid;
    }
    .sec-head h2 { margin: 0; font-size: 14.5px; font-weight: 800; color: #ffffff; }
    .sec-num { background: #14b8a6; color: #042f2e; font-weight: 900; font-size: 11px; padding: 2px 7px; border-radius: 5px; }
    .block-card {
      border: 1px solid #cbd5e1; border-radius: 10px;
      padding: 10px 13px; margin-bottom: 10px; background: rgba(255,255,255,0.92);
      break-inside: avoid; page-break-inside: avoid;
    }
    .block-card h3 { margin: 0 0 7px; font-size: 14px; font-weight: 800; color: #0f766e; border-bottom: 1px dashed #cbd5e1; padding-bottom: 4px; }
    .bullet-list { margin: 6px 0; padding-left: 18px; }
    .bullet-list li { margin-bottom: 5px; color: #0f172a; }
    .hl { background: #fef08a; color: #0f172a; padding: 0 3px; border-radius: 3px; font-weight: 700; }
    .b-key { font-weight: 800; color: #0f172a; }
    .chip { background: #e2e8f0; color: #0f172a; padding: 0 4px; border-radius: 4px; font-weight: 700; font-size: 11.5px; }
    .pill { display: inline-block; font-size: 10px; font-weight: 900; text-transform: uppercase; padding: 1px 7px; border-radius: 99px; margin-right: 6px; }
    .pill-green { background: #bbf7d0; color: #14532d; }
    .pill-amber { background: #fde68a; color: #78350f; }
    .pill-purple { background: #e9d5ff; color: #581c87; }
    .pill-rose { background: #fecdd3; color: #9f1239; }
    .box-intuition { background: #ecfdf5; border-left: 3.5px solid #10b981; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12.2px; color: #064e3b; }
    .box-trick { background: #fffbeb; border-left: 3.5px solid #f59e0b; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12px; color: #78350f; }
    .box-topper { background: #faf5ff; border-left: 3.5px solid #9333ea; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12px; color: #4c1d95; }
    .box-trap { background: #fff1f2; border-left: 3.5px solid #e11d48; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12px; color: #881337; }
    .pyq-box { background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #0284c7; border-radius: 7px; padding: 7px 10px; margin-top: 7px; font-size: 11.8px; }
    .pyq-tag { font-size: 10px; font-weight: 900; color: #0369a1; text-transform: uppercase; margin-bottom: 2px; }
    .pyq-q { font-weight: 700; color: #0f172a; margin-bottom: 4px; }
    .pyq-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 4px; }
    .pyq-opt { font-size: 11px; padding: 2px 6px; border-radius: 4px; background: #fff; border: 1px solid #e2e8f0; }
    .pyq-ans { background: #dcfce7; border-color: #16a34a; font-weight: 800; color: #14532d; }
    .pyq-exp { font-size: 11px; color: #334155; }
    .svg-wrap { margin: 8px 0; break-inside: avoid; page-break-inside: avoid; }
    .img-strip { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 8px 0; padding: 8px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc; break-inside: avoid; }
    .img-strip figure { margin: 0; }
    .img-strip img { max-height: 115px; max-width: 170px; border-radius: 6px; border: 1px solid #cbd5e1; object-fit: cover; background: #fff; }
    .img-cap { flex: 1; min-width: 180px; font-size: 11.2px; color: #334155; }
    .data-table { width: 100%; border-collapse: collapse; font-size: 11.5px; margin-top: 5px; }
    .data-table th, .data-table td { border: 1px solid #cbd5e1; padding: 5px 7px; text-align: left; }
    .data-table th { background: #0f172a; color: #fff; font-weight: 800; }
    .data-table tr:nth-child(even) td { background: #f8fafc; }
    .bi-hi { font-weight: 600; color: #0f172a; }
    .bi-en { font-size: 11.5px; color: #475569; margin-top: 2px; }
    .ex-row { border-bottom: 1px dashed #e2e8f0; padding: 6px 0; break-inside: avoid; }
    .ex-row:last-child { border-bottom: none; }
    .ex-q { font-size: 12px; color: #0f172a; }
    .ex-a { font-size: 11.5px; color: #065f46; margin-top: 2px; }
    .book-footer { margin-top: 16px; padding-top: 10px; border-top: 1.5px solid #cbd5e1; text-align: center; font-size: 11px; color: #475569; font-weight: 600; }
    @media print {
      body { background: #ffffff !important; }
      .toolbar { display: none !important; }
      .book { margin: 0; padding: 0; box-shadow: none; max-width: 100%; }
      .print-shell > thead { display: table-header-group; }
      .print-shell > tfoot { display: table-footer-group; }
      .pdf-watermark {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-32deg);
        opacity: 0.055;
        pointer-events: none;
        z-index: 0;
        text-align: center;
      }
      .pdf-watermark img { width: 96px; height: 96px; border-radius: 18px; object-fit: cover; margin-bottom: 6px; }
      .pdf-watermark .wm-title { font-size: 36px; font-weight: 900; letter-spacing: 2px; color: #0f172a; }
      .pdf-watermark .wm-sub { font-size: 14px; font-weight: 800; color: #0d9488; letter-spacing: 1px; }
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <div>
      <strong>RailwayPrep PRO • A4 Coaching E-Book Studio</strong>
      <div style="font-size:11px;color:#cbd5e1">Tap "Save as PDF / Print" — Branded A4 layout with repeating header, logo watermark & labeled vector plates!</div>
    </div>
    <button class="btn-print" onclick="window.print()">🖨️ Save A4 PDF / Print</button>
  </div>

  <!-- Subtle Centered Diagonal Brand Watermark (repeats cleanly on every printed PDF page) -->
  <div class="pdf-watermark" aria-hidden="true">
    <img src="${escapeHtml(origin)}/logo.jpg" alt="" onerror="this.style.display='none'" />
    <div class="wm-title">RailwayPrep PRO</div>
    <div class="wm-sub">${cleanHost} • VERIFIED CBT NOTES</div>
  </div>

  <main class="book">
    <table class="print-shell">
      <thead>
        <tr>
          <td>
            <div class="running-bar">
              <div class="running-brand">
                <img src="${escapeHtml(origin)}/logo.jpg" alt="RailwayPrep PRO" onerror="this.style.display='none'" />
                <span>RailwayPrep PRO • Official Study Vault</span>
              </div>
              <span>${chapterShortTitle}</span>
            </div>
          </td>
        </tr>
      </thead>

      <tfoot>
        <tr>
          <td>
            <div class="running-foot">
              <span>RailwayPrep PRO (${cleanHost})</span>
              <span>NCERT Science Gold Standard • Printed Offline Study Edition</span>
            </div>
          </td>
        </tr>
      </tfoot>

      <tbody>
        <tr>
          <td>
            <header class="cover-header">
              <div class="brand">
                <img src="${escapeHtml(origin)}/logo.jpg" alt="RailwayPrep PRO" onerror="this.style.display='none'" />
                <div>
                  <div class="brand-title">RailwayPrep PRO • NCERT Science Deep-Dive Series</div>
                  <div class="brand-sub">${escapeHtml(chapterData.sourceCode)} | Mode: ${langMode.toUpperCase()}</div>
                </div>
              </div>
              <div style="text-align:right;font-size:11px;font-weight:700;color:#334155">
                <div>${chapterData.metrics.activities} Activities • ${chapterData.metrics.exercisesSolved} Exercises</div>
                <div>${chapterData.metrics.pyqsMatched}+ Dated RRB PYQs Included</div>
              </div>
            </header>

            <h1 class="doc-h1">${renderSingleText(chapterData.title, langMode)}</h1>
            <p class="doc-sub">${renderSingleText(chapterData.subtitle, langMode)}</p>

            <div class="cheat-box" style="margin-top:10px">
              <div class="cheat-title">⚡ ${langMode === 'en' ? '60-Second Rapid Revision Bullets' : '60-सेकंड परीक्षा सुपर-रिवीजन'}</div>
              <div class="cheat-grid">
                ${(chapterData.quickRevision60Sec || []).map((b, i) => `<div class="cheat-item"><strong>${i + 1}.</strong> ${renderSingleText(b, langMode)}</div>`).join('')}
              </div>
            </div>

            ${blueprintSvg}
            ${secHtml}
            ${confusionHtml}
            ${tablesHtml}
            ${activitiesHtml}
            ${inTextHtml}
            ${exercisesHtml}

            <footer class="book-footer">
              RailwayPrep PRO (${cleanHost}) • Verified 2026–27 NCERT + RRB CBT PYQs + Interactive Web Labs Available Online.
            </footer>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</body>
</html>`;
}

export function renderPrintableNcertWindow(chapterData, options = {}, preOpenedWindow = null) {
  const html = buildPrintableNcertBookHtml(chapterData, options);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const blobUrl = URL.createObjectURL(blob);

  // If caller opened a window (`about:blank`), redirect it to real Blob URL so browser Download works,
  // AND trigger direct offline download + iframe print sheet cleanly!
  if (preOpenedWindow) {
    try {
      preOpenedWindow.location.replace(blobUrl);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
      return true;
    } catch {}
  }

  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = `RailwayPrep_${chapterData.id}_${options.langMode || 'hi'}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 4000);
  return false;
}
