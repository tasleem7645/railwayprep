import katex from 'katex';

const MATH_TOKEN_RE = /(\$\$[\s\S]+?\$\$|\$(?!\s)([^$\n]*?\S)\$)/g;
const LATEX_SIGNAL_RE =
  /\\(?:frac|dfrac|tfrac|sqrt|times|div|theta|pi|alpha|beta|gamma|delta|sin|cos|tan|sec|csc|cosec|cot|text|textbf|mathrm|mathbf|mathbb|cdot|pm|mp|le|ge|leq|geq|neq|approx|angle|triangle|circ|infty|degree|overline|underline|binom|lfloor|rfloor|lceil|rceil|bmod|pmod|equiv|dots|cdots|ldots|implies|Rightarrow|leftrightarrow|to|rightarrow|leftarrow|gcd)|[\^_{}]/;
const CURRENCY_OR_SERIES_WORD_RE =
  /\b(billion|million|trillion|lakh|crore|thousand|usd|means|coded)\b|[@#&©£€'‘’]/i;

/**
 * Splits plain text into literal text segments and verified KaTeX HTML segments
 * (`$$...$$` or math-like `$...$`), leaving currency and symbol-series `$` untouched.
 */
export function parseMathSegments(str) {
  const txt = str == null ? '' : String(str);
  if (!txt.includes('$')) {
    return [{ type: 'text', val: txt }];
  }

  const segments = [];
  let lastIdx = 0;
  let match;
  const re = new RegExp(MATH_TOKEN_RE.source, 'g');
  while ((match = re.exec(txt)) !== null) {
    const raw = match[0];
    const isBlock = raw.startsWith('$$') && raw.endsWith('$$');
    const inner = isBlock ? raw.slice(2, -2).trim() : (match[2] || '').trim();

    let isMath = isBlock;
    if (!isBlock && inner) {
      if (LATEX_SIGNAL_RE.test(inner)) {
        isMath = true;
      } else if (/^[a-zA-Z][0-9']*!?$/.test(inner)) {
        // Matches single variables or factorial symbols like $x$, $n$, $n!$, $p$, $q$, $k$
        isMath = true;
      } else if (
        inner.length <= 80 &&
        !CURRENCY_OR_SERIES_WORD_RE.test(inner) &&
        /^[0-9a-zA-Z+\-*/=<>().,!?\s%°|]+$/.test(inner) &&
        /[+\-*/=<>!|]/.test(inner)
      ) {
        isMath = true;
      }
    }

    if (!isMath) continue;

    let html = null;
    try {
      html = katex.renderToString(inner, {
        displayMode: isBlock,
        throwOnError: false,
        strict: false,
        output: 'htmlAndMathml',
      });
    } catch {
      html = null;
    }
    if (!html) continue;

    if (match.index > lastIdx) {
      segments.push({ type: 'text', val: txt.slice(lastIdx, match.index) });
    }
    segments.push({ type: 'math', html, isBlock });
    lastIdx = re.lastIndex;
  }

  if (segments.length === 0) {
    return [{ type: 'text', val: txt }];
  }
  if (lastIdx < txt.length) {
    segments.push({ type: 'text', val: txt.slice(lastIdx) });
  }
  return segments;
}
