import { renderMathsCh1DiagramSvg } from './ch1NumberSystemDiagrams.js';
import { renderMathsCh2DiagramSvg } from './ch2PercentageDiagrams.js';
import { renderMathsCh3DiagramSvg } from './ch3ProfitLossDiagrams.js';

export function renderMathsDiagramSvg(key, opts = {}) {
  if (!key) return '';
  if (key.startsWith('ch3-')) {
    return renderMathsCh3DiagramSvg(key, opts);
  }
  if (key.startsWith('ch2-')) {
    return renderMathsCh2DiagramSvg(key, opts);
  }
  return renderMathsCh1DiagramSvg(key, opts);
}
