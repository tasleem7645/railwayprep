/**
 * Luxury A4 Coaching E-Book Print & Offline HTML Generator for NCERT Pro Notes.
 * Solves all raw-DOM print glitches: uses pure pitch-black ink on crisp white A4 pages,
 * light-adapted inline vector flowcharts, embedded PD microscopy photos, highlighted keywords,
 * zero website chrome/navbars, and supports Hindi / English / Bilingual export modes.
 */
import { parseMathSegments } from './mathParser.js';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatRichTextHtml(raw) {
  const str = String(raw ?? '');
  // Split around ==highlight==, **bold**, and `code`, then apply KaTeX per slice
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

function renderMathHtml(text) {
  return parseMathSegments(text)
    .map((seg) => (seg.type === 'text' ? escapeHtml(seg.val) : seg.html))
    .join('');
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

function buildLightFlowSvg(flowKey, langMode) {
  const hi = langMode !== 'en';
  if (flowKey === 'org-hierarchy') {
    return `
      <svg viewBox="0 0 640 96" class="flow-svg">
        <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488"/></marker></defs>
        ${[
          { x: 10, t: hi ? 'कोशिका (Cell)' : '1. Cell', c: '#dcfce7', b: '#16a34a' },
          { x: 138, t: hi ? 'ऊतक (Tissue)' : '2. Tissue', c: '#e0f2fe', b: '#0284c7' },
          { x: 266, t: hi ? 'अंग (Organ)' : '3. Organ', c: '#fef3c7', b: '#d97706' },
          { x: 394, t: hi ? 'अंग-तंत्र (System)' : '4. System', c: '#f3e8ff', b: '#9333ea' },
          { x: 522, t: hi ? 'जीव (Organism)' : '5. Organism', c: '#ffe4e6', b: '#e11d48' },
        ]
          .map(
            (n, i) => `
          <rect x="${n.x}" y="22" width="108" height="44" rx="8" fill="${n.c}" stroke="${n.b}" stroke-width="1.8"/>
          <text x="${n.x + 54}" y="49" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">${n.t}</text>
          ${i < 4 ? `<line x1="${n.x + 110}" y1="44" x2="${n.x + 125}" y2="44" stroke="#0d9488" stroke-width="2" marker-end="url(#arr)"/>` : ''}
        `
          )
          .join('')}
      </svg>`;
  }
  if (flowKey === 'cell-wall-permeability') {
    return `
      <svg viewBox="0 0 640 105" class="flow-svg">
        <rect x="14" y="12" width="295" height="82" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
        <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="800" fill="#065f46">${hi ? 'कोशिका भित्ति (Cell Wall)' : 'Cell Wall (Plants/Fungi/Bacteria)'}</text>
        <text x="160" y="54" text-anchor="middle" font-size="11" fill="#0f172a">${hi ? 'पूर्ण पारगम्य (जल व खनिज सभी पार)' : 'Freely Permeable • Rigid Armor'}</text>
        <text x="160" y="74" text-anchor="middle" font-size="10.5" font-weight="700" fill="#047857">${hi ? 'पदार्थ: सेल्युलोस (पादप) | काइटिन (कवक)' : 'Material: Cellulose (Plant) | Chitin (Fungi)'}</text>

        <rect x="331" y="12" width="295" height="82" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
        <text x="478" y="34" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">${hi ? 'प्लाज्मा झिल्ली (Cell Membrane)' : 'Plasma Membrane (ALL Cells)'}</text>
        <text x="478" y="54" text-anchor="middle" font-size="11" fill="#0f172a">${hi ? 'वरणात्मक / चुनिंदा पारगम्य (7–10 nm)' : 'Selectively Permeable (7–10 nm)'}</text>
        <text x="478" y="74" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">${hi ? 'पदार्थ: लिपिड + प्रोटीन (Fluid-Mosaic)' : 'Material: Lipid Bilayer + Protein Gatekeepers'}</text>
      </svg>`;
  }
  if (flowKey === 'endomembrane-highway') {
    return `
      <svg viewBox="0 0 640 100" class="flow-svg">
        <defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1 L 10 5 L 0 9 z" fill="#4f46e5"/></marker></defs>
        ${[
          { x: 10, t1: hi ? 'केंद्रक (DNA)' : 'Nucleus (DNA)', t2: hi ? 'मुख्य आदेश' : 'Master Code', c: '#f3e8ff', b: '#9333ea' },
          { x: 165, t1: hi ? 'RER + SER' : 'RER & SER', t2: hi ? 'प्रोटीन + वसा निर्माण' : 'Protein + Lipid', c: '#ffedd5', b: '#ea580c' },
          { x: 325, t1: hi ? 'गॉल्जीकाय (1898)' : 'Golgi Apparatus', t2: hi ? 'डाकघर पैकिंग' : 'Post Office Pack', c: '#fce7f3', b: '#db2777' },
          { x: 485, t1: hi ? 'लाइसोसोम / झिल्ली' : 'Lysosome / Exit', t2: hi ? 'सफाई या स्रवण' : 'Digestion / Ship', c: '#fee2e2', b: '#dc2626' },
        ]
          .map(
            (b, i) => `
          <rect x="${b.x}" y="18" width="142" height="62" rx="9" fill="${b.c}" stroke="${b.b}" stroke-width="1.8"/>
          <text x="${b.x + 71}" y="42" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">${b.t1}</text>
          <text x="${b.x + 71}" y="62" text-anchor="middle" font-size="10.5" fill="#334155">${b.t2}</text>
          ${i < 3 ? `<line x1="${b.x + 143}" y1="49" x2="${b.x + 153}" y2="49" stroke="#4f46e5" stroke-width="2" marker-end="url(#arr2)"/>` : ''}
        `
          )
          .join('')}
      </svg>`;
  }
  if (flowKey === 'mito-plastid-power') {
    return `
      <svg viewBox="0 0 640 104" class="flow-svg">
        <rect x="12" y="10" width="300" height="84" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="1.8"/>
        <text x="162" y="32" text-anchor="middle" font-size="12" font-weight="800" fill="#9a3412">${hi ? '⚡ माइटोकॉन्ड्रिया (Own DNA + 70S)' : '⚡ Mitochondria (Own DNA + 70S)'}</text>
        <text x="162" y="52" text-anchor="middle" font-size="10.8" fill="#0f172a">${hi ? 'ग्लूकोस -> श्वसन (Cristae) -> ATP ऊर्जा' : 'Glucose -> Respiration (Cristae) -> ATP Energy'}</text>
        <text x="162" y="72" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c2410c">${hi ? 'पादप व जंतु दोनों में' : 'Present in Plants & Animals'}</text>

        <rect x="328" y="10" width="300" height="84" rx="10" fill="#ecfdf5" stroke="#16a34a" stroke-width="1.8"/>
        <text x="478" y="32" text-anchor="middle" font-size="12" font-weight="800" fill="#14532d">${hi ? '🌿 लवक / Plastids (Own DNA + 70S)' : '🌿 3 Plastids (Plants Only • Own DNA)'}</text>
        <text x="478" y="52" text-anchor="middle" font-size="10.8" fill="#0f172a">${hi ? 'हरितलवक (भोजन) | वर्णीलवक (फूल/फल रंग)' : 'Chloro (Food) | Chromo (Flowers/Fruit)'}</text>
        <text x="478" y="72" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">${hi ? 'अवर्णी लवक (आलू/अरबी गोदाम)' : 'Leucoplast (Colourless Starch/Oil Vault)'}</text>
      </svg>`;
  }
  if (flowKey === 'cell-theory-cancer-pcd') {
    return `
      <svg viewBox="0 0 640 96" class="flow-svg">
        <rect x="12" y="12" width="300" height="72" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.8"/>
        <text x="162" y="34" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">${hi ? '✅ सामान्य कोशिका (Normal Cell)' : '✅ Normal Healthy Cell'}</text>
        <text x="162" y="54" text-anchor="middle" font-size="10.5" fill="#0f172a">${hi ? 'संपर्क अवरोध ✓ + प्रोग्राम्ड डेथ (PCD ✓)' : 'Contact Inhibition ✓ + Programmed Death (PCD) ✓'}</text>
        <text x="162" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">${hi ? 'भ्रूण में अँगुलियाँ अलग करने में सहायक!' : 'Prevents webbed fingers & uncontrolled tumours'}</text>

        <rect x="328" y="12" width="300" height="72" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="1.8"/>
        <text x="478" y="34" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9f1239">${hi ? '⚠️ कैंसर कोशिका (Cancer Cell)' : '⚠️ Cancer / Tumour Cell'}</text>
        <text x="478" y="54" text-anchor="middle" font-size="10.5" fill="#0f172a">${hi ? 'नियंत्रण खत्म -> अनियंत्रित विभाजन' : 'Loses Contact Inhibition -> Uncontrolled Division'}</text>
        <text x="478" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="#be123c">${hi ? 'सुदम्य (स्थिर) या दुर्दम (फैलने वाला) अर्बुद' : 'Forms Benign or Malignant Spreading Tumours'}</text>
      </svg>`;
  }
  return '';
}

export function buildPrintableNcertBookHtml(chapterData, options = {}) {
  const {
    langMode = 'hi', // 'hi' | 'en' | 'bilingual'
    origin = typeof window !== 'undefined' ? window.location.origin : 'https://railwayprep.com',
  } = options;

  const pyqMap = new Map((chapterData.pyqBank || []).map((q) => [q.id, q]));
  const docTitle = `RailwayPrep_NCERT_Class9_Ch2_Cell_${langMode.toUpperCase()}_Notes`;

  const secHtml = (chapterData.sections || [])
    .map((sec) => {
      const flowSvg = sec.flowDiagramKey ? buildLightFlowSvg(sec.flowDiagramKey, langMode) : '';
      const blocksHtml = (sec.blocks || [])
        .map((blk) => {
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

          const realImgHtml = blk.realImage
            ? `<div class="img-strip">
                <figure><img src="${origin}${blk.realImage.url}" alt="Figure" /></figure>
                ${blk.realImage.secondaryUrl ? `<figure><img src="${origin}${blk.realImage.secondaryUrl}" alt="Figure 2" /></figure>` : ''}
                <div class="img-cap"><strong>${renderSingleText(blk.realImage.title, langMode)}</strong><div>${renderSingleText(blk.realImage.caption, langMode)}</div></div>
              </div>`
            : '';

          return `
            <div class="block-card">
              <h3>${renderSingleText(blk.heading, langMode)}</h3>
              ${blk.desiIntuition ? `<div class="box-intuition"><span class="pill pill-green">${langMode === 'en' ? 'Simple Intuition' : 'सरल देसी समझ'}</span>${renderSingleText(blk.desiIntuition, langMode)}</div>` : ''}
              ${Array.isArray(blk.bullets) ? `<ul class="bullet-list">${blk.bullets.map((b) => `<li>${renderSingleText(b, langMode)}</li>`).join('')}</ul>` : ''}
              ${realImgHtml}
              ${blk.viralTrick ? `<div class="box-trick"><span class="pill pill-amber">${langMode === 'en' ? '💡 Viral Memory Hack' : '💡 याद रखने की ट्रिक'}</span>${renderSingleText(blk.viralTrick, langMode)}</div>` : ''}
              ${blk.topperEdge ? `<div class="box-topper"><span class="pill pill-purple">${langMode === 'en' ? '⭐ Ranker NCERT+ Booster' : '⭐ टॉपर + Nirman+ बूस्टर'}</span>${renderSingleText(blk.topperEdge, langMode)}</div>` : ''}
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
          ${blocksHtml}
        </section>`;
    })
    .join('');

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

  const activitiesHtml = `
    <section class="chapter-sec">
      <div class="sec-head"><span class="sec-num">LAB</span><h2>${langMode === 'en' ? 'All 5 NCERT Activities Summary' : 'सभी 5 NCERT क्रियाकलाप (प्रयोग सारांश)'}</h2></div>
      ${(chapterData.activities || [])
        .map(
          (a) => `
        <div class="block-card">
          <h3>Activity ${a.num}: ${renderSingleText(a.title, langMode)}</h3>
          <div class="act-meta"><strong>Materials:</strong> ${renderSingleText(a.materials, langMode)}</div>
          <div class="act-steps">${renderSingleText(a.steps, langMode)}</div>
          <div class="box-intuition"><span class="pill pill-green">🎯 Exam Takeaway</span>${renderSingleText(a.examTakeaway, langMode)}</div>
        </div>`
        )
        .join('')}
    </section>`;

  const exercisesHtml = `
    <section class="chapter-sec">
      <div class="sec-head"><span class="sec-num">EX</span><h2>${langMode === 'en' ? 'NCERT In-Text & All 16 Exercises Solved' : 'पाठ्यपुस्तक के प्रश्न एवं सभी 16 अभ्यास हल'}</h2></div>
      <div class="block-card">
        ${(chapterData.exercises || [])
          .map(
            (ex) => `
          <div class="ex-row">
            <div class="ex-q"><strong>Q${ex.num}.</strong> ${renderSingleText(ex.q, langMode)}</div>
            <div class="ex-a"><strong>Ans:</strong> ${renderSingleText(ex.a, langMode)}</div>
          </div>`
          )
          .join('')}
      </div>
    </section>`;

  return `<!DOCTYPE html>
<html lang="${langMode === 'en' ? 'en' : 'hi'}">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(docTitle)}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" />
  <style>
    @page { size: A4 portrait; margin: 12mm 12mm 14mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      background: #f1f5f9;
      color: #0f172a;
      font-family: 'Noto Sans Devanagari', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      font-size: 13px;
      line-height: 1.55;
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
    .book {
      max-width: 210mm;
      margin: 14px auto 32px;
      background: #ffffff;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
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
    .brand img { width: 42px; height: 42px; border-radius: 8px; object-fit: cover; }
    .brand-title { font-size: 15px; font-weight: 900; color: #0f172a; }
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
      padding: 10px 13px; margin-bottom: 10px; background: #ffffff;
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
    .box-intuition { background: #ecfdf5; border-left: 3.5px solid #10b981; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12.2px; color: #064e3b; }
    .box-trick { background: #fffbeb; border-left: 3.5px solid #f59e0b; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12px; color: #78350f; }
    .box-topper { background: #faf5ff; border-left: 3.5px solid #9333ea; border-radius: 6px; padding: 7px 10px; margin: 6px 0; font-size: 12px; color: #4c1d95; }
    .pyq-box { background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #0284c7; border-radius: 7px; padding: 7px 10px; margin-top: 7px; font-size: 11.8px; }
    .pyq-tag { font-size: 10px; font-weight: 900; color: #0369a1; text-transform: uppercase; margin-bottom: 2px; }
    .pyq-q { font-weight: 700; color: #0f172a; margin-bottom: 4px; }
    .pyq-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 4px; }
    .pyq-opt { font-size: 11px; padding: 2px 6px; border-radius: 4px; background: #fff; border: 1px solid #e2e8f0; }
    .pyq-ans { background: #dcfce7; border-color: #16a34a; font-weight: 800; color: #14532d; }
    .pyq-exp { font-size: 11px; color: #334155; }
    .flow-svg { width: 100%; height: auto; max-height: 110px; margin: 6px 0 10px; display: block; break-inside: avoid; }
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
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <div>
      <strong>RailwayPrep PRO • Luxury A4 Coaching Booklet Studio</strong>
      <div style="font-size:11px;color:#cbd5e1">Tap "Save as PDF / Print" — A4 layout with high-contrast black ink & real figures!</div>
    </div>
    <button class="btn-print" onclick="window.print()">🖨️ Save A4 PDF / Print</button>
  </div>

  <main class="book">
    <header class="cover-header">
      <div class="brand">
        <img src="${escapeHtml(origin)}/logo.jpg" alt="RailwayPrep PRO" onerror="this.style.display='none'" />
        <div>
          <div class="brand-title">RailwayPrep PRO • NCERT Science Gold Standard v2</div>
          <div class="brand-sub">${escapeHtml(chapterData.sourceCode)} | Print Mode: ${langMode.toUpperCase()}</div>
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

    ${secHtml}
    ${tablesHtml}
    ${activitiesHtml}
    ${exercisesHtml}

    <footer class="book-footer">
      RailwayPrep PRO Study Vault (${escapeHtml(origin.replace(/^https?:\/\//, ''))}) • Verified 2026–27 NCERT + RRB PYQs + Interactive Labs Online.
    </footer>
  </main>
</body>
</html>`;
}

export function renderPrintableNcertWindow(chapterData, options = {}, preOpenedWindow = null) {
  const html = buildPrintableNcertBookHtml(chapterData, options);
  const targetWin = preOpenedWindow || window.open('', '_blank');
  if (!targetWin) {
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RailwayPrep_${chapterData.id}_${options.langMode || 'hi'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    return false;
  }
  targetWin.document.open();
  targetWin.document.write(html);
  targetWin.document.close();
  return true;
}
