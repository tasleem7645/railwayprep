/**
 * Shared Pure-SVG Vector Diagram Engine for NCERT Pro Notes.
 * Renders crisp, watermark-free labeled anatomy diagrams, Venn comparisons,
 * Zoom ladders & flowcharts that work identically on Dark Web UI and Light A4 PDF!
 */

import { renderCh3TissueDiagramSvg } from './ch3TissueDiagrams.js';
import { renderCh4MotionDiagramSvg } from './ch4MotionDiagrams.js';
import { renderCh7WorkDiagramSvg } from './ch7WorkDiagrams.js';
import { renderCh8AtomDiagramSvg } from './ch8AtomDiagrams.js';
import { renderCh6ForcesDiagramSvg } from './ch6ForcesDiagrams.js';
import { renderC10Ch2AcidsDiagramSvg } from './c10Ch2AcidsDiagrams.js';
import { renderC10Ch9LightDiagramSvg } from './c10Ch9LightDiagrams.js';
import { renderC10Ch11ElecDiagramSvg } from './c10Ch11ElecDiagrams.js';
import { renderCh5MixDiagramSvg } from './ch5MixturesDiagrams.js';
import { renderC10Ch4CarbonDiagramSvg } from './c10Ch4CarbonDiagrams.js';
import { renderC10Ch13EnvDiagramSvg } from './c10Ch13EnvDiagrams.js';
import { renderC10Ch1RxnDiagramSvg } from './c10Ch1RxnDiagrams.js';

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getPalette(theme = 'dark') {
  const dark = theme === 'dark';
  return {
    bg: dark ? '#070D1B' : '#ffffff',
    card: dark ? '#0F172A' : '#f8fafc',
    ink: dark ? '#F8FAFC' : '#0f172a',
    muted: dark ? '#CBD5E1' : '#334155',
    border: dark ? '#334155' : '#cbd5e1',
    teal: { fill: dark ? '#064E3B' : '#ecfdf5', stroke: dark ? '#14B8A6' : '#0d9488', text: dark ? '#5EEAD4' : '#0f766e' },
    blue: { fill: dark ? '#0C4A6E' : '#eff6ff', stroke: dark ? '#38BDF8' : '#2563eb', text: dark ? '#7DD3FC' : '#1d4ed8' },
    amber: { fill: dark ? '#78350F' : '#fffbeb', stroke: dark ? '#F59E0B' : '#d97706', text: dark ? '#FDE68A' : '#92400e' },
    purple: { fill: dark ? '#4C1D95' : '#faf5ff', stroke: dark ? '#A855F7' : '#9333ea', text: dark ? '#E9D5FF' : '#6b21a8' },
    rose: { fill: dark ? '#881337' : '#fff1f2', stroke: dark ? '#FB7185' : '#e11d48', text: dark ? '#FECDD3' : '#9f1239' },
    orange: { fill: dark ? '#7C2D12' : '#fff7ed', stroke: dark ? '#FB923C' : '#ea580c', text: dark ? '#FDBA74' : '#9a3412' },
    green: { fill: dark ? '#14532D' : '#f0fdf4', stroke: dark ? '#22C55E' : '#16a34a', text: dark ? '#86EFAC' : '#166534' },
    fillAlpha: dark ? '0.45' : '1',
  };
}

export function renderNcertDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.fillAlpha;

  if (key === 'ch2-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '2.0 जीवन की उत्पत्ति' : '2.0 Life Origin', s: hi ? 'पुगा घाटी + BSIP' : 'Puga Springs + BSIP', c: p.teal },
      { x: 145, t: hi ? '2.1 सूक्ष्मदर्शी व खोज' : '2.1 Microscope & Pioneers', s: hi ? 'हुक-ल्यूवेनहॉक-ब्राउन' : 'Hooke -> Purkinje', c: p.blue },
      { x: 280, t: hi ? '2.2 झिल्ली व परासरण' : '2.2 Membrane & Osmosis', s: hi ? 'Hypo / Iso / Hyper + भित्ति' : 'Fluid-Mosaic + Wall', c: p.green },
      { x: 415, t: hi ? '2.3 कोशिकांग व DNA' : '2.3 Organelles & DNA', s: hi ? 'केंद्रक, Mito, ER, Golgi, Lytic' : 'N-M-P + Endomembrane', c: p.amber },
      { x: 550, t: hi ? '2.4–2.5 विभाजन' : '2.4–2.5 Division', s: hi ? 'Mitosis, Meiosis, PCD' : 'Mitosis, Meiosis, PCD', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bmArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="116" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'संपूर्ण अध्याय मानचित्र (Chapter 2 Learning Blueprint)' : 'Complete Chapter 2 Study Blueprint'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="120" height="68" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 60}" y="58" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="77" text-anchor="middle" font-size="9" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="68" x2="${n.x + 133}" y2="68" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bmArr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'org-hierarchy') {
    const nodes = [
      { x: 10, t: hi ? 'कोशिका (Cell)' : '1. Cell', s: hi ? 'मूल इकाई' : 'Basic Unit', c: p.teal },
      { x: 140, t: hi ? 'ऊतक (Tissue)' : '2. Tissue', s: hi ? 'समान कोशिकाएँ' : 'Similar Cells', c: p.blue },
      { x: 270, t: hi ? 'अंग (Organ)' : '3. Organ', s: hi ? 'उदा. फेफड़े' : 'e.g., Lungs', c: p.amber },
      { x: 400, t: hi ? 'अंग-तंत्र' : '4. Organ System', s: hi ? 'श्वसन तंत्र' : 'Respiratory Sys.', c: p.purple },
      { x: 530, t: hi ? 'जीव (Organism)' : '5. Organism', s: hi ? 'संपूर्ण जीव' : 'Complete Living', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 660 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ohArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="656" height="96" rx="10" fill="${p.bg}" stroke="${p.border}"/>
        <text x="330" y="19" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.teal.text}">${hi ? 'जीवों के शरीर का संगठन स्तर (Levels of Organization)' : 'Structural Organization Hierarchy'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="29" width="116" height="58" rx="9" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 58}" y="52" text-anchor="middle" font-size="10.8" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 58}" y="71" text-anchor="middle" font-size="9.2" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 117}" y1="58" x2="${n.x + 128}" y2="58" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#ohArr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'pioneer-timeline') {
    const items = [
      { y: '1665', n: hi ? 'रॉबर्ट हुक' : 'Robert Hooke', w: hi ? 'मृत कॉर्क (Cell)' : 'Dead Cork Cell', c: p.amber },
      { y: '1674', n: hi ? 'ल्यूवेनहॉक' : 'Leeuwenhoek', w: hi ? 'प्रथम जीवित कोशिका' : 'First Living Cell', c: p.green },
      { y: '1831', n: hi ? 'रॉबर्ट ब्राउन' : 'Robert Brown', w: hi ? 'केंद्रक (Nucleus)' : 'Nucleus Found', c: p.purple },
      { y: '1838–39', n: hi ? 'श्लीडेन-श्वान' : 'Schleiden & Schwann', w: hi ? 'कोशिका सिद्धांत' : 'Cell Theory', c: p.blue },
      { y: '1839', n: hi ? 'जे. ई. पुरकिंजे' : 'J. E. Purkinje', w: hi ? 'जीवद्रव्य नाम' : 'Coined Protoplasm', c: p.teal },
      { y: '1855', n: hi ? 'रुडोल्फ विरचो' : 'Rudolf Virchow', w: hi ? 'पूर्व कोशिका से नई' : 'Omnis cellula...', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 112" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="108" rx="10" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'कोशिका विज्ञान की प्रमुख ऐतिहासिक खोजें (1665 – 1855)' : 'Landmark Cell Discoveries Timeline (1665 – 1855)'}</text>
        <line x1="25" y1="32" x2="655" y2="32" stroke="${p.border}" stroke-width="2"/>
        ${items.map((it, i) => {
          const x = 12 + i * 110;
          return `
            <circle cx="${x + 52}" cy="32" r="5" fill="${it.c.stroke}"/>
            <rect x="${x}" y="42" width="104" height="58" rx="8" fill="${it.c.fill}" fill-opacity="${a}" stroke="${it.c.stroke}" stroke-width="1.4"/>
            <text x="${x + 52}" y="57" text-anchor="middle" font-size="10" font-weight="900" fill="${it.c.text}">${it.y}</text>
            <text x="${x + 52}" y="73" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">${it.n}</text>
            <text x="${x + 52}" y="89" text-anchor="middle" font-size="8.8" fill="${p.muted}">${it.w}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'cell-wall-permeability') {
    return `
      <svg viewBox="0 0 680 135" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="131" rx="10" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.green.text}">${hi ? 'कोशिका आवरण: भित्ति बनाम झिल्ली तथा जगतवार रासायनिक अंतर' : 'Cell Envelopes: Wall vs Membrane & Kingdom Chemistry'}</text>
        <rect x="14" y="30" width="318" height="92" rx="10" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.7"/>
        <text x="173" y="49" text-anchor="middle" font-size="11.2" font-weight="800" fill="${p.green.text}">${hi ? 'कोशिका भित्ति (Cell Wall — मृत व दृढ़)' : 'Cell Wall (Non-Living Rigid Shield)'}</text>
        <text x="173" y="67" text-anchor="middle" font-size="10" font-weight="700" fill="${p.ink}">${hi ? 'पारगम्यता: पूर्ण पारगम्य (Freely Permeable)' : 'Permeability: Freely Permeable'}</text>
        <text x="173" y="85" text-anchor="middle" font-size="9.6" fill="${p.muted}">${hi ? 'पादप = सेल्युलोस | कवक = काइटिन | जीवाणु = पेप्टिडोग्लाइकन' : 'Plant = Cellulose | Fungi = Chitin | Bacteria = Peptidoglycan'}</text>
        <text x="173" y="104" text-anchor="middle" font-size="9.4" font-weight="700" fill="${p.rose.text}">${hi ? 'अपवाद: जंतु व माइकोप्लाज्मा में अनुपस्थित!' : 'Absent in: Animals & Mycoplasma!'}</text>

        <rect x="348" y="30" width="318" height="92" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.7"/>
        <text x="507" y="49" text-anchor="middle" font-size="11.2" font-weight="800" fill="${p.blue.text}">${hi ? 'प्लाज्मा झिल्ली (Plasma Membrane — जीवित)' : 'Plasma Membrane (Universal & Living)'}</text>
        <text x="507" y="67" text-anchor="middle" font-size="10" font-weight="700" fill="${p.ink}">${hi ? 'पारगम्यता: वरणात्मक पारगम्य (Selectively)' : 'Permeability: Selectively Permeable (7-10 nm)'}</text>
        <text x="507" y="85" text-anchor="middle" font-size="9.6" fill="${p.muted}">${hi ? 'संरचना: फॉस्फोलिपिड द्विपरत + प्रोटीन (तरल-मोजेक)' : 'Structure: Phospholipid Bilayer + Protein Channels'}</text>
        <text x="507" y="104" text-anchor="middle" font-size="9.4" font-weight="700" fill="${p.teal.text}">${hi ? 'लचीलेपन से अमीबा एंडोसाइटोसिस करता है ✓' : 'Flexibility enables Amoeba Endocytosis ✓'}</text>
      </svg>`;
  }

  if (key === 'prok-euk-venn') {
    return `
      <svg viewBox="0 0 680 215" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="211" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'वेन आरेख (Venn Diagram): पूर्वकेंद्रकी बनाम सुकेंद्रकी कोशिका' : 'Venn Diagram: Prokaryotic vs Eukaryotic Cell'}</text>

        <circle cx="245" cy="118" r="88" fill="${p.amber.fill}" fill-opacity="${theme === 'dark' ? '0.35' : '0.7'}" stroke="${p.amber.stroke}" stroke-width="2.2"/>
        <circle cx="435" cy="118" r="88" fill="${p.blue.fill}" fill-opacity="${theme === 'dark' ? '0.35' : '0.7'}" stroke="${p.blue.stroke}" stroke-width="2.2"/>

        <text x="158" y="64" text-anchor="middle" font-size="11" font-weight="900" fill="${p.amber.text}">${hi ? 'पूर्वकेंद्रकी (Prokaryote)' : 'Prokaryotic Cell'}</text>
        <text x="148" y="85" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'आकार छोटा (1–10 µm)' : 'Small size (1–10 µm)'}</text>
        <text x="148" y="103" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'केंद्रक झिल्ली नहीं (Nucleoid)' : 'No Nuclear Envelope'}</text>
        <text x="148" y="121" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'केवल 1 गोल गुणसूत्र' : 'Single Circular DNA'}</text>
        <text x="148" y="139" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? '70S राइबोसोम (50S+30S)' : '70S Ribosome (50+30)'}</text>
        <text x="148" y="157" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'झिल्ली-आबद्ध कोशिकांग नहीं' : 'No Membrane Organelles'}</text>
        <text x="152" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="${p.amber.text}">${hi ? 'उदा: जीवाणु, सायनोजीवाणु' : 'Bacteria, Cyanobacteria'}</text>

        <text x="340" y="76" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.teal.text}">${hi ? 'समान भाग' : 'COMMON'}</text>
        <text x="340" y="96" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'प्लाज्मा झिल्ली' : 'Plasma Membrane'}</text>
        <text x="340" y="114" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'कोशिकाद्रव्य' : 'Cytoplasm'}</text>
        <text x="340" y="132" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">DNA / RNA</text>
        <text x="340" y="150" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'राइबोसोम ✓' : 'Ribosomes ✓'}</text>
        <text x="340" y="168" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.muted}">${hi ? 'कोशिका विभाजन' : 'Cell Division'}</text>

        <text x="522" y="64" text-anchor="middle" font-size="11" font-weight="900" fill="${p.blue.text}">${hi ? 'सुकेंद्रकी (Eukaryote)' : 'Eukaryotic Cell'}</text>
        <text x="532" y="85" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'आकार बड़ा (10–100 µm)' : 'Large (10–100 µm)'}</text>
        <text x="532" y="103" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'दोहरी झिल्ली वाला केंद्रक' : 'True Nucleus + Pores'}</text>
        <text x="532" y="121" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? '1 से अधिक रैखिक गुणसूत्र' : 'Multiple Linear DNA'}</text>
        <text x="532" y="139" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? '80S राइबोसोम (60S+40S)' : '80S Ribosome (60+40)'}</text>
        <text x="532" y="157" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'Mito, ER, Golgi उपस्थित' : 'All Organelles Present'}</text>
        <text x="528" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="${p.blue.text}">${hi ? 'पादप, जंतु, कवक, प्रजीव' : 'Plants, Animals, Fungi'}</text>
      </svg>`;
  }

  if (key === 'plant-animal-venn') {
    return `
      <svg viewBox="0 0 680 215" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="211" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.green.text}">${hi ? 'वेन आरेख (Venn Diagram): पादप कोशिका बनाम जंतु कोशिका' : 'Venn Diagram: Plant Cell vs Animal Cell'}</text>

        <circle cx="245" cy="118" r="88" fill="${p.green.fill}" fill-opacity="${theme === 'dark' ? '0.35' : '0.7'}" stroke="${p.green.stroke}" stroke-width="2.2"/>
        <circle cx="435" cy="118" r="88" fill="${p.rose.fill}" fill-opacity="${theme === 'dark' ? '0.35' : '0.7'}" stroke="${p.rose.stroke}" stroke-width="2.2"/>

        <text x="155" y="64" text-anchor="middle" font-size="11" font-weight="900" fill="${p.green.text}">${hi ? 'पादप कोशिका (Plant)' : 'Plant Cell Only'}</text>
        <text x="148" y="86" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'निश्चित चौकोर/षट्कोणीय रूप' : 'Fixed Polygonal Shape'}</text>
        <text x="148" y="105" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'सेल्युलोस कोशिका भित्ति ✓' : 'Cellulose Cell Wall ✓'}</text>
        <text x="148" y="124" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'लवक / हरितलवक ✓' : 'Plastids & Chloroplasts ✓'}</text>
        <text x="148" y="143" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'विशाल केंद्रीय रसधानी (50–90%)' : 'Giant Central Vacuole'}</text>
        <text x="148" y="162" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'विभाजन: Cell Plate द्वारा' : 'Divides via Cell Plate'}</text>
        <text x="148" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="${p.green.text}">${hi ? 'केंद्रक किनारे (परिधि) पर' : 'Nucleus pushed to edge'}</text>

        <text x="340" y="75" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.teal.text}">${hi ? 'दोनों में उपस्थित' : 'SHARED'}</text>
        <text x="340" y="95" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'प्लाज्मा झिल्ली' : 'Plasma Membrane'}</text>
        <text x="340" y="113" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'केंद्रक व केंद्रिका' : 'Nucleus & Nucleolus'}</text>
        <text x="340" y="131" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'माइटोकॉन्ड्रिया (ATP)' : 'Mitochondria (ATP)'}</text>
        <text x="340" y="149" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'ER, गॉल्जी, 80S' : 'ER, Golgi, 80S'}</text>
        <text x="340" y="167" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${hi ? 'कोशिका-पंजर' : 'Cytoskeleton'}</text>

        <text x="525" y="64" text-anchor="middle" font-size="11" font-weight="900" fill="${p.rose.text}">${hi ? 'जंतु कोशिका (Animal)' : 'Animal Cell Only'}</text>
        <text x="532" y="86" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'गोलाकार / लचीला आकार' : 'Round / Flexible Shape'}</text>
        <text x="532" y="105" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'कोशिका भित्ति अनुपस्थित ✗' : 'No Cell Wall ✗'}</text>
        <text x="532" y="124" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'लवक अनुपस्थित ✗' : 'No Plastids ✗'}</text>
        <text x="532" y="143" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'बहुत छोटी अस्थायी रसधानी' : 'Tiny / Temporary Vacuoles'}</text>
        <text x="532" y="162" text-anchor="middle" font-size="9.5" fill="${p.ink}">• ${hi ? 'तारककाय (Centrosome) ✓' : 'Centrosome (2 Centrioles) ✓'}</text>
        <text x="532" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="${p.rose.text}">${hi ? 'लाइसोसोम प्रमुख + केंद्रक बीच में' : 'Central Nucleus & Lysosomes'}</text>
      </svg>`;
  }

  if (key === 'nucleus-chromosome-dna') {
    return `
      <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ncArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.purple.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'केंद्रक की संरचना, गुणसूत्र (Waldeyer), DNA डबल हेलिक्स व केंद्रीय सिद्धांत (Central Dogma)' : 'Nucleus Cutaway -> Chromosome -> DNA Double Helix & Central Dogma'}</text>

        <!-- 1. Nucleus Cutaway -->
        <circle cx="88" cy="95" r="50" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="2.5" stroke-dasharray="14 4"/>
        <circle cx="88" cy="92" r="15" fill="${p.rose.stroke}" fill-opacity="0.7"/>
        <path d="M62 85 Q80 65 100 88 T115 112 M65 115 Q90 95 108 118" fill="none" stroke="${p.amber.stroke}" stroke-width="2"/>
        <text x="88" y="39" text-anchor="middle" font-size="9" font-weight="800" fill="${p.purple.text}">${hi ? 'दोहरी झिल्ली + छिद्र' : 'Nuclear Envelope+Pores'}</text>
        <text x="88" y="160" text-anchor="middle" font-size="9" font-weight="700" fill="${p.ink}">${hi ? 'केंद्रिका (rRNA) + क्रोमेटिन' : 'Nucleolus + Chromatin'}</text>

        <line x1="142" y1="95" x2="176" y2="95" stroke="${p.purple.stroke}" stroke-width="2" marker-end="url(#ncArr_${theme})"/>

        <!-- 2. X-Shaped Chromosome -->
        <g transform="translate(185, 42)">
          <rect x="0" y="0" width="128" height="110" rx="10" fill="${p.card}" stroke="${p.border}"/>
          <path d="M46 22 Q62 52 46 84 M82 22 Q66 52 82 84" fill="none" stroke="${p.blue.stroke}" stroke-width="8" stroke-linecap="round"/>
          <circle cx="64" cy="52" r="6" fill="${p.amber.stroke}"/>
          <text x="100" y="25" font-size="8.2" font-weight="700" fill="${p.muted}">Telomere</text>
          <text x="96" y="55" font-size="8.2" font-weight="800" fill="${p.amber.text}">Centromere</text>
          <text x="64" y="102" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">${hi ? 'गुणसूत्र (DNA+हिस्टोन)' : 'Chromosome (46 Human)'}</text>
        </g>

        <line x1="316" y1="95" x2="344" y2="95" stroke="${p.purple.stroke}" stroke-width="2" marker-end="url(#ncArr_${theme})"/>

        <!-- 3. DNA Base Pairing Box + Central Dogma -->
        <rect x="348" y="34" width="318" height="136" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.6"/>
        <text x="507" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.blue.text}">${hi ? 'DNA (Deoxyribose) vs RNA (Ribose) युग्मन' : 'DNA Double Helix & RNA Base Pairing'}</text>
        <text x="507" y="71" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.ink}">Nucleotide = Pentose Sugar + Phosphate + N-Base</text>
        <text x="507" y="89" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.teal.text}">DNA: A = T (2 H-bond)  |  G ≡ C (3 H-bond)  • Watson-Crick</text>
        <text x="507" y="107" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.rose.text}">${hi ? 'RNA (एक-रज्जु): Thymine (T) की जगह Uracil (U)!' : 'RNA (Single Strand): Uracil (U) replaces Thymine (T)!'}</text>
        <rect x="362" y="118" width="290" height="42" rx="7" fill="${p.bg}" stroke="${p.teal.stroke}" stroke-width="1.3"/>
        <text x="507" y="135" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.ink}">DNA ──Transcription──▶ m-RNA ──Translation──▶ Protein</text>
        <text x="507" y="151" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.muted}">DNA → DNA (Replication)  |  RNA → DNA (Reverse Transcription)</text>
      </svg>`;
  }

  if (key === 'endomembrane-highway') {
    const boxes = [
      { x: 10, t: hi ? '1. केंद्रक झिल्ली से जुड़ी ER' : '1. RER & SER Workshop', l1: hi ? '• RER (+राइबोसोम) → प्रोटीन' : '• RER (+Ribosome) -> Protein', l2: hi ? '• SER (चिकनी) → वसा + Detox' : '• SER (No Ribo) -> Lipid + Detox', c: p.orange },
      { x: 235, t: hi ? '2. गॉल्जी उपकरण (1898)' : '2. Golgi Apparatus (Post Office)', l1: hi ? '• Cis (आना) -> Trans (भेजना)' : '• Modifies, sorts & ships ER cargo', l2: hi ? '• जटिल शर्करा + लाइसोसोम निर्माण' : '• Synthesizes lysosomes & vesicles', c: p.purple },
      { x: 460, t: hi ? '3. लाइसोसोम व झिल्ली' : '3. Lysosome & Membrane', l1: hi ? '• लाइसोसोम: pH~5 पाचक एंजाइम' : '• Lysosome: Hydrolytic digestion', l2: hi ? '• RBC बिना लयनकाय -> प्लीहा कब्र' : '• No RBC Lysosome -> Spleen Grave', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 125" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ehArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.purple.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="121" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.orange.text}">${hi ? 'अंतःझिल्लिका तंत्र (Endomembrane Pipeline): निर्माण -> पैकिंग -> पाचन' : 'Endomembrane System: Make (ER) -> Pack (Golgi) -> Recycle (Lysosome)'}</text>
        ${boxes.map((b, i) => `
          <rect x="${b.x}" y="31" width="210" height="80" rx="10" fill="${b.c.fill}" fill-opacity="${a}" stroke="${b.c.stroke}" stroke-width="1.6"/>
          <text x="${b.x + 105}" y="50" text-anchor="middle" font-size="10.2" font-weight="900" fill="${b.c.text}">${b.t}</text>
          <text x="${b.x + 105}" y="72" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.ink}">${b.l1}</text>
          <text x="${b.x + 105}" y="92" text-anchor="middle" font-size="9.1" fill="${p.muted}">${b.l2}</text>
          ${i < 2 ? `<line x1="${b.x + 211}" y1="71" x2="${b.x + 223}" y2="71" stroke="${p.purple.stroke}" stroke-width="2" marker-end="url(#ehArr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'mitochondria-cutaway') {
    return `
      <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.orange.text}">${hi ? 'माइटोकॉन्ड्रिया की आंतरिक संरचना (Labeled Cutaway — ATP पावरहाउस)' : 'Mitochondrion Labeled Cutaway (Aerobic ATP Powerhouse)'}</text>

        <!-- Outer capsule -->
        <ellipse cx="220" cy="103" rx="165" ry="62" fill="${p.orange.fill}" fill-opacity="${a}" stroke="${p.orange.stroke}" stroke-width="3"/>
        <!-- Inner folded Cristae path -->
        <path d="M72 103 C72 62 110 56 130 62 L130 92 C130 100 144 100 144 92 L144 58 Q166 56 172 64 L172 95 C172 103 186 103 186 95 L186 58 Q210 55 218 62 L218 90 C218 98 232 98 232 90 L232 58 Q265 57 278 66 L278 96 C278 104 292 104 292 96 L292 66 Q335 72 345 103 Q338 142 292 142 L292 118 C292 110 278 110 278 118 L278 144 Q245 148 228 144 L228 116 C228 108 214 108 214 116 L214 146 Q180 148 164 144 L164 116 C164 108 150 108 150 116 L150 142 Q90 140 72 103 Z"
          fill="${p.amber.fill}" stroke="${p.amber.stroke}" stroke-width="2.2"/>
        <!-- Circular mtDNA & 70S Ribosomes inside Matrix -->
        <circle cx="110" cy="108" r="11" fill="none" stroke="${p.purple.stroke}" stroke-width="2.2"/>
        <circle cx="255" cy="112" r="4" fill="${p.teal.stroke}"/>
        <circle cx="268" cy="122" r="4" fill="${p.teal.stroke}"/>
        <circle cx="315" cy="104" r="5" fill="${p.rose.stroke}"/>

        <!-- Clean Callout Labels -->
        <text x="155" y="106" font-size="8.6" font-weight="800" fill="${p.ink}">${hi ? 'मैट्रिक्स' : 'Matrix'}</text>
        <text x="200" y="135" font-size="8.6" font-weight="800" fill="${p.orange.text}">${hi ? 'अंतःकटक (Cristae)' : 'Cristae folds'}</text>
        <text x="110" y="130" text-anchor="middle" font-size="8" font-weight="700" fill="${p.purple.text}">mtDNA</text>
        <text x="260" y="103" font-size="8" font-weight="700" fill="${p.teal.text}">70S Ribo</text>
        <text x="315" y="94" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.rose.text}">ATP</text>

        <!-- Side Fact Summary Panel -->
        <rect x="400" y="34" width="268" height="138" rx="10" fill="${p.card}" stroke="${p.border}"/>
        <text x="534" y="54" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.orange.text}">${hi ? 'मुख्य परीक्षा बिंदु (ATP चक्र)' : 'High-Yield Facts'}</text>
        <text x="412" y="75" font-size="9.2" fill="${p.ink}">• ${hi ? 'खोज: अल्टमैन (1894) | नाम: सी. बेंडा' : 'Altmann (1894); Named by Benda'}</text>
        <text x="412" y="94" font-size="9.2" fill="${p.ink}">• ${hi ? 'बाहरी झिल्ली चिकनी-छिद्रित, भीतरी मुड़ी' : 'Porous Outer + Folded Inner (Cristae)'}</text>
        <text x="412" y="113" font-size="9.2" fill="${p.ink}">• ${hi ? 'मैट्रिक्स में क्रेब्स चक्र (Krebs Cycle)' : 'Krebs Cycle occurs inside Matrix'}</text>
        <text x="412" y="132" font-size="9.2" fill="${p.ink}">• ${hi ? 'ऑक्सी श्वसन -> 36/38 ATP ऊर्जा' : 'Aerobic: Pyruvate -> CO₂ + H₂O + ATP'}</text>
        <text x="412" y="152" font-size="9.2" font-weight="800" fill="${p.purple.text}">• ${hi ? 'खुद का DNA + 70S राइबोसोम (अर्ध-स्वायत्त)' : 'Semi-autonomous: Own DNA + 70S'}</text>
      </svg>`;
  }

  if (key === 'plastid-chloroplast-tree') {
    return `
      <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.green.text}">${hi ? 'हरितलवक संरचना (Chloroplast Cutaway) एवं लवक के 3 प्रकार (केवल पादप)' : 'Chloroplast Cutaway & 3 Plastid Classes (Plants Only)'}</text>

        <!-- Left: Chloroplast Cutaway -->
        <ellipse cx="165" cy="104" rx="145" ry="60" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="2.8"/>
        <ellipse cx="165" cy="104" rx="135" ry="50" fill="none" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <!-- Thylakoid Grana Stacks -->
        ${[105, 165, 225].map((gx) => `
          <rect x="${gx - 18}" y="78" width="36" height="8" rx="3" fill="${p.green.stroke}"/>
          <rect x="${gx - 18}" y="89" width="36" height="8" rx="3" fill="${p.green.stroke}"/>
          <rect x="${gx - 18}" y="100" width="36" height="8" rx="3" fill="${p.green.stroke}"/>
          <rect x="${gx - 18}" y="111" width="36" height="8" rx="3" fill="${p.green.stroke}"/>
        `).join('')}
        <line x1="123" y1="95" x2="207" y2="95" stroke="${p.green.stroke}" stroke-width="2.5"/>
        <text x="165" y="70" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.ink}">${hi ? 'पीठिका (Stroma — अर्धतरल)' : 'Stroma (Fluid + Starch)'}</text>
        <text x="165" y="135" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.green.text}">${hi ? 'थाइलेकॉइड / ग्रेना (पर्णहरित चक्रिकाएँ)' : 'Thylakoid Discs / Grana (Chlorophyll)'}</text>
        <circle cx="80" cy="108" r="8" fill="none" stroke="${p.purple.stroke}" stroke-width="2"/>
        <text x="80" y="127" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.purple.text}">cpDNA+70S</text>

        <!-- Right: 3 Plastids + Pigments -->
        <rect x="328" y="32" width="338" height="44" rx="8" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.5"/>
        <text x="497" y="50" text-anchor="middle" font-size="10" font-weight="900" fill="${p.green.text}">1. ${hi ? 'हरितलवक (Chloroplast — पर्णहरित + Mg धातु)' : 'Chloroplast (Chlorophyll — Photosynthesis)'}</text>
        <text x="497" y="67" text-anchor="middle" font-size="9" fill="${p.ink}">${hi ? 'पत्तियों व हरे तने में भोजन (ग्लूकोस/स्टार्च) निर्माण' : 'Solar kitchen inside leaves -> glucose & starch'}</text>

        <rect x="328" y="83" width="338" height="48" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="497" y="100" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">2. ${hi ? 'वर्णीलवक (Chromoplast — फूल/फल रंग, परागण)' : 'Chromoplast (Bright Pigments for Pollination)'}</text>
        <text x="497" y="119" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'टमाटर: लाइकोपीन | गाजर: कैरोटीन | चुकंदर: बीटानिन | पीला: ज़ैंथोफिल' : 'Tomato: Lycopene | Carrot: Carotene | Beet: Betanin | Yellow: Xanthophyll'}</text>

        <rect x="328" y="137" width="338" height="38" rx="8" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
        <text x="497" y="153" text-anchor="middle" font-size="9.8" font-weight="900" fill="${p.ink}">3. ${hi ? 'अवर्णी लवक (Leucoplast — रंगहीन भंडार)' : 'Leucoplast (Colourless Storage — Roots/Seeds)'}</text>
        <text x="497" y="168" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'स्टार्च (आलू-अरबी) | तेल (मूंगफली) | प्रोटीन संचय' : 'Amyloplast (Starch) • Elaioplast (Oil) • Aleuroplast (Protein)'}</text>
      </svg>`;
  }

  if (key === 'centrosome-division-flow') {
    return `
      <svg viewBox="0 0 680 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="161" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'तारककाय (Centrosome) एवं कोशिका विभाजन के 3 प्रकार' : 'Centrosome (Animal Division) & 3 Modes of Cell Division'}</text>

        <!-- Centrosome Box -->
        <rect x="12" y="30" width="195" height="122" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <text x="109" y="48" text-anchor="middle" font-size="9.8" font-weight="900" fill="${p.teal.text}">${hi ? 'तारककाय (Centrosome)' : 'Centrosome (90° Centrioles)'}</text>
        <rect x="78" y="60" width="24" height="12" rx="3" fill="${p.teal.stroke}"/>
        <rect x="112" y="54" width="12" height="24" rx="3" fill="${p.amber.stroke}"/>
        <text x="109" y="96" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'खोज: बोवेरी (जंतुओं में ✓)' : 'Boveri • Animal Cells Only'}</text>
        <text x="109" y="114" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'मस्तिष्क तंत्रिका में नहीं -> विभाजन नहीं' : 'Absent in Neurons & Plants'}</text>
        <text x="109" y="132" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.green.text}">${hi ? 'पादपों में विभाजन = Cell Plate' : 'Plants use Cell Plate instead'}</text>

        <!-- Division 3 Columns -->
        <rect x="218" y="30" width="144" height="122" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="290" y="48" text-anchor="middle" font-size="9.8" font-weight="900" fill="${p.amber.text}">1. ${hi ? 'असूत्री (Amitosis)' : '1. Amitosis'}</text>
        <text x="290" y="72" text-anchor="middle" font-size="8.8" fill="${p.ink}">${hi ? 'सीधा संकुचन विभाजन' : 'Direct Constriction'}</text>
        <text x="290" y="92" text-anchor="middle" font-size="8.8" fill="${p.ink}">${hi ? 'जीवाणु व एककोशिकीय' : 'Prokaryotes / Bacteria'}</text>
        <text x="290" y="114" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.muted}">${hi ? 'तर्कु तंतु नहीं बनते' : 'No spindle fibres'}</text>

        <rect x="370" y="30" width="144" height="122" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="442" y="48" text-anchor="middle" font-size="9.8" font-weight="900" fill="${p.blue.text}">2. ${hi ? 'समसूत्री (Mitosis)' : '2. Mitosis'}</text>
        <text x="442" y="70" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">2n → 2 × (2n)</text>
        <text x="442" y="90" text-anchor="middle" font-size="8.8" fill="${p.ink}">${hi ? 'कायिक (Somatic) कोशिका' : 'Body cells (1 step)'}</text>
        <text x="442" y="110" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'वृद्धि, घाव भरना, पुनरुद्भवन' : 'Growth & Wound repair'}</text>
        <text x="442" y="132" text-anchor="middle" font-size="8.4" font-weight="700" fill="${p.blue.text}">PMAT Phases</text>

        <rect x="522" y="30" width="144" height="122" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="594" y="48" text-anchor="middle" font-size="9.8" font-weight="900" fill="${p.purple.text}">3. ${hi ? 'अर्धसूत्री (Meiosis)' : '3. Meiosis'}</text>
        <text x="594" y="70" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">2n → 4 × (n) ${hi ? 'युग्मक' : 'Gametes'}</text>
        <text x="594" y="90" text-anchor="middle" font-size="8.8" fill="${p.ink}">${hi ? 'केवल जनन कोशिका (2 चरण)' : 'Germ cells (2 steps)'}</text>
        <text x="594" y="110" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'Prophase-I में Crossing Over' : 'Crossing Over -> Variation'}</text>
        <text x="594" y="132" text-anchor="middle" font-size="8.4" font-weight="700" fill="${p.purple.text}">${hi ? 'संपूर्ण DNA व गुणसूत्र आधे' : 'Halves Chromosome #s'}</text>
      </svg>`;
  }

  if (key === 'cell-theory-cancer-pcd') {
    return `
      <svg viewBox="0 0 680 112" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="108" rx="10" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="10.8" font-weight="800" fill="${p.rose.text}">${hi ? 'कोशिका नियंत्रण नियम: सामान्य कोशिका (PCD ✓) बनाम कैंसर कोशिका (नियंत्रण समाप्त)' : 'Division Regulation: Normal Cell (PCD ✓) vs Cancer Cell'}</text>

        <rect x="14" y="30" width="318" height="72" rx="9" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.6"/>
        <text x="173" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.green.text}">${hi ? 'सामान्य कोशिका (निश्चित जीवनकाल)' : 'Normal Healthy Cell'}</text>
        <text x="173" y="68" text-anchor="middle" font-size="9.4" fill="${p.ink}">${hi ? 'संपर्क अवरोध ✓ + क्रमादेशित मृत्यु (PCD / Apoptosis) ✓' : 'Contact Inhibition ✓ + Programmed Cell Death ✓'}</text>
        <text x="173" y="87" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.muted}">${hi ? 'भ्रूण में जालीदार उँगलियाँ हटाने में सहायक' : 'Shapes separate embryo fingers; prevents tumours'}</text>

        <rect x="348" y="30" width="318" height="72" rx="9" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.6"/>
        <text x="507" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.rose.text}">${hi ? 'कैंसर कोशिका (संपर्क अवरोध समाप्त)' : 'Cancer / Tumour Cell'}</text>
        <text x="507" y="68" text-anchor="middle" font-size="9.4" fill="${p.ink}">${hi ? 'अनियंत्रित समसूत्री विभाजन -> अर्बुद (Tumour)' : 'Uncontrolled Mitosis -> Forms Tumour Masses'}</text>
        <text x="507" y="87" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.rose.text}">${hi ? 'सुदम्य (Benign/स्थिर) vs दुर्दम (Malignant/फैलने वाला)' : 'Benign (Localized) vs Malignant (Metastasis)'}</text>
      </svg>`;
  }

  const ch3Svg = renderCh3TissueDiagramSvg(key, { hi, p, a, theme });
  if (ch3Svg) return ch3Svg;

  const ch4Svg = renderCh4MotionDiagramSvg(key, { lang, theme });
  if (ch4Svg) return ch4Svg;

  const ch7Svg = renderCh7WorkDiagramSvg(key, { lang, theme });
  if (ch7Svg) return ch7Svg;

  const ch8Svg = renderCh8AtomDiagramSvg(key, { lang, theme });
  if (ch8Svg) return ch8Svg;

  const ch6Svg = renderCh6ForcesDiagramSvg(key, { lang, theme });
  if (ch6Svg) return ch6Svg;

  const c10Ch2Svg = renderC10Ch2AcidsDiagramSvg(key, { lang, theme });
  if (c10Ch2Svg) return c10Ch2Svg;

  const c10Ch9Svg = renderC10Ch9LightDiagramSvg(key, { lang, theme });
  if (c10Ch9Svg) return c10Ch9Svg;

  const c10Ch11Svg = renderC10Ch11ElecDiagramSvg(key, { lang, theme });
  if (c10Ch11Svg) return c10Ch11Svg;

  const ch5Svg = renderCh5MixDiagramSvg(key, { lang, theme });
  if (ch5Svg) return ch5Svg;

  const c10Ch4Svg = renderC10Ch4CarbonDiagramSvg(key, { lang, theme });
  if (c10Ch4Svg) return c10Ch4Svg;

  const c10Ch13Svg = renderC10Ch13EnvDiagramSvg(key, { lang, theme });
  if (c10Ch13Svg) return c10Ch13Svg;

  const c10Ch1Svg = renderC10Ch1RxnDiagramSvg(key, { lang, theme });
  if (c10Ch1Svg) return c10Ch1Svg;

  return '';
}

export { esc };
