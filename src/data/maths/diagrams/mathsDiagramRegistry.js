/**
 * Central Maths Smart-Board SVG Diagram Router
 * Delegates `ch1-*` diagrams to Chapter 1 and `ch2-*` diagrams to Chapter 2 cleanly.
 */
import { renderMathsCh1DiagramSvg } from './ch1NumberSystemDiagrams.js';
import { renderMathsCh2DiagramSvg } from './ch2PercentageDiagrams.js';

export function renderMathsDiagramSvg(key, options = {}) {
  if (!key) return '';
  if (key.startsWith('ch2-')) {
    return renderMathsCh2DiagramSvg(key, options);
  }
  return renderMathsCh1DiagramSvg(key, options);
}
