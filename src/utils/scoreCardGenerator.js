/**
 * Pure HTML5 Canvas PNG Score Card Generator (1080x1350 - ideal 4:5 ratio for WhatsApp Status & Telegram).
 */

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = String(text || '').split(/\s+/);
  let line = '';
  let currentY = y;
  let lineCount = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lineCount++;
      if (lineCount >= maxLines) {
        ctx.fillText(`${line}...`, x, currentY);
        return currentY + lineHeight;
      }
      ctx.fillText(line, x, currentY);
      line = words[i];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
    currentY += lineHeight;
  }
  return currentY;
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function generateScoreCardImage({
  testTitle,
  score,
  maxMarks,
  accuracy,
  correctCount,
  wrongCount,
  timeTakenText,
  percentile,
  rankLabel,
  cutoffBadge,
  cutoffText,
  cutoffStatus,
  studentName = 'Railway Aspirant',
  streakDays = 0,
  inviteUrl = 'https://railwayprep.com',
}) {
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // 1. Deep Midnight Navy Background + Ambient Glows
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#070B18');
  bgGrad.addColorStop(0.5, '#091124');
  bgGrad.addColorStop(1, '#050811');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  const glow1 = ctx.createRadialGradient(180, 180, 20, 180, 180, 420);
  glow1.addColorStop(0, 'rgba(20, 184, 166, 0.22)');
  glow1.addColorStop(1, 'rgba(20, 184, 166, 0)');
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, W, H);

  const glow2 = ctx.createRadialGradient(900, 1100, 20, 900, 1100, 460);
  glow2.addColorStop(0, 'rgba(245, 158, 11, 0.16)');
  glow2.addColorStop(1, 'rgba(245, 158, 11, 0)');
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, W, H);

  // Subtle card border frame
  drawRoundedRect(ctx, 36, 36, W - 72, H - 72, 42);
  ctx.strokeStyle = 'rgba(20, 184, 166, 0.28)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // 2. Top Brand Row (Logo + Name + Streak Badge)
  const logoImg = await loadImage('/logo.jpg');
  if (logoImg) {
    ctx.save();
    drawRoundedRect(ctx, 76, 78, 86, 86, 20);
    ctx.clip();
    ctx.drawImage(logoImg, 76, 78, 86, 86);
    ctx.restore();
  } else {
    drawRoundedRect(ctx, 76, 78, 86, 86, 20);
    ctx.fillStyle = '#14B8A6';
    ctx.fill();
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 38px sans-serif';
  ctx.fillText('RailwayPrep', 184, 118);

  // PRO pill next to title
  const nameWidth = ctx.measureText('RailwayPrep').width;
  drawRoundedRect(ctx, 184 + nameWidth + 14, 88, 76, 34, 8);
  ctx.fillStyle = 'rgba(245, 158, 11, 0.22)';
  ctx.fill();
  ctx.fillStyle = '#FCD34D';
  ctx.font = '800 20px sans-serif';
  ctx.fillText('PRO', 184 + nameWidth + 30, 112);

  ctx.fillStyle = '#2DD4BF';
  ctx.font = '600 22px sans-serif';
  ctx.fillText('Official TCS iON CBT Simulator', 184, 152);

  // Streak Pill top-right
  if (streakDays >= 1) {
    const streakLabel = `🔥 ${streakDays} Day Streak`;
    ctx.font = '800 24px sans-serif';
    const sw = ctx.measureText(streakLabel).width + 44;
    drawRoundedRect(ctx, W - 76 - sw, 92, sw, 52, 26);
    ctx.fillStyle = 'rgba(245, 158, 11, 0.16)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#FCD34D';
    ctx.fillText(streakLabel, W - 76 - sw + 22, 126);
  }

  // 3. Test Title & Aspirant Name Card
  drawRoundedRect(ctx, 76, 200, W - 152, 175, 28);
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#2DD4BF';
  ctx.font = '800 20px sans-serif';
  ctx.fillText(`CANDIDATE: ${String(studentName).toUpperCase().slice(0, 28)}`, 112, 246);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 32px sans-serif';
  wrapText(ctx, testTitle, 112, 296, W - 224, 42, 2);

  // 4. Giant Hero Score Card
  drawRoundedRect(ctx, 76, 405, W - 152, 275, 34);
  const scoreCardGrad = ctx.createLinearGradient(76, 405, W - 76, 680);
  scoreCardGrad.addColorStop(0, 'rgba(13, 148, 136, 0.22)');
  scoreCardGrad.addColorStop(1, 'rgba(16, 185, 129, 0.10)');
  ctx.fillStyle = scoreCardGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(45, 212, 191, 0.45)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#94A3B8';
  ctx.font = '700 24px sans-serif';
  ctx.fillText('TOTAL CBT SCORE', W / 2, 462);

  ctx.fillStyle = '#5EEAD4';
  ctx.font = '900 112px sans-serif';
  ctx.fillText(`${score}`, W / 2 - 75, 578);

  const scoreWidth = ctx.measureText(`${score}`).width;
  ctx.fillStyle = '#94A3B8';
  ctx.font = '700 44px sans-serif';
  ctx.fillText(`/ ${maxMarks}`, W / 2 + scoreWidth / 2 + 12, 576);

  // Cutoff Status Pill inside Score Card
  const pillColor =
    cutoffStatus === 'safe'
      ? { bg: 'rgba(16, 185, 129, 0.25)', border: '#10B981', text: '#6EE7B7' }
      : cutoffStatus === 'borderline'
      ? { bg: 'rgba(245, 158, 11, 0.22)', border: '#F59E0B', text: '#FCD34D' }
      : { bg: 'rgba(244, 63, 94, 0.22)', border: '#F43F5E', text: '#FDA4AF' };

  const verdictLabel = `${cutoffBadge || 'SCORECARD'}  •  ${cutoffText || ''}`.slice(0, 52);
  ctx.font = '800 24px sans-serif';
  const vw = Math.min(W - 220, ctx.measureText(verdictLabel).width + 56);
  drawRoundedRect(ctx, W / 2 - vw / 2, 608, vw, 48, 24);
  ctx.fillStyle = pillColor.bg;
  ctx.fill();
  ctx.strokeStyle = pillColor.border;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = pillColor.text;
  ctx.fillText(verdictLabel, W / 2, 640);

  // 5. 2x2 Metrics Grid
  const boxW = (W - 152 - 28) / 2;
  const boxH = 165;
  const metrics = [
    {
      label: 'ACCURACY',
      val: `${accuracy}%`,
      sub: `${correctCount} Correct • ${wrongCount} Wrong`,
      color: '#34D399',
      x: 76,
      y: 710,
    },
    {
      label: 'PERCENTILE & RANK',
      val: `${percentile}%ile`,
      sub: rankLabel || 'All-India CBT Engine',
      color: '#FBBF24',
      x: 76 + boxW + 28,
      y: 710,
    },
    {
      label: 'TIME TAKEN',
      val: `${timeTakenText}`,
      sub: 'Official TCS Negative (-0.33)',
      color: '#C084FC',
      x: 76,
      y: 710 + boxH + 24,
    },
    {
      label: 'EXAM LEVEL',
      val: 'OFFICIAL PYQ',
      sub: 'Bilingual Hindi & English CBT',
      color: '#38BDF8',
      x: 76 + boxW + 28,
      y: 710 + boxH + 24,
    },
  ];

  metrics.forEach((m) => {
    drawRoundedRect(ctx, m.x, m.y, boxW, boxH, 26);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#94A3B8';
    ctx.font = '700 20px sans-serif';
    ctx.fillText(m.label, m.x + 28, m.y + 44);

    ctx.fillStyle = m.color;
    ctx.font = '900 46px sans-serif';
    ctx.fillText(m.val, m.x + 28, m.y + 102);

    ctx.fillStyle = '#CBD5E1';
    ctx.font = '600 20px sans-serif';
    ctx.fillText(m.sub, m.x + 28, m.y + 138);
  });

  // 6. Viral Footer Challenge Bar
  drawRoundedRect(ctx, 76, 1098, W - 152, 176, 30);
  const footGrad = ctx.createLinearGradient(76, 1098, W - 76, 1274);
  footGrad.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
  footGrad.addColorStop(1, 'rgba(20, 184, 166, 0.14)');
  ctx.fillStyle = footGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 30px sans-serif';
  ctx.fillText('🚂 Can You Beat My Score in This Railway Shift?', W / 2, 1152);

  ctx.fillStyle = '#CBD5E1';
  ctx.font = '600 22px sans-serif';
  ctx.fillText('Practice 168+ Official ALP, Group D & Trade CBT Mock Tests FREE:', W / 2, 1192);

  ctx.fillStyle = '#5EEAD4';
  ctx.font = '800 28px monospace';
  ctx.fillText(inviteUrl.replace(/^https?:\/\//, ''), W / 2, 1244);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Could not generate image blob'));
          return;
        }
        resolve({
          blob,
          dataUrl: canvas.toDataURL('image/png'),
          fileName: 'RailwayPrep_ScoreCard.png',
        });
      },
      'image/png',
      0.95
    );
  });
}
