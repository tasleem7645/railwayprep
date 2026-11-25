// Optional Supabase Edge Function for instant 0-second Telegram Admin alerts
// Deploy via: supabase functions deploy telegram-notify
// Secrets: TELEGRAM_BOT_TOKEN, TELEGRAM_ADMIN_CHAT_ID

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN') || '';
const ADMIN_CHAT_ID = Deno.env.get('TELEGRAM_ADMIN_CHAT_ID') || '';

Deno.serve(async (req) => {
  if (!BOT_TOKEN || !ADMIN_CHAT_ID) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing secrets' }), { status: 500 });
  }

  try {
    const payload = await req.json();
    const table = payload?.table || '';
    const record = payload?.record || {};
    let text = '';

    if (table === 'pass_pro_payments') {
      text =
        `💳 <b>Pass Pro Payment Alert</b>\n` +
        `• User: <code>${record.user_email || 'Unknown'}</code>\n` +
        `• UTR: <code>${record.utr_or_payment_id || '-'}</code>\n` +
        `• Amount: ₹${record.amount || '-'}\n` +
        `👉 Review in Admin Queue: https://railwayprep.com`;
    } else if (table === 'question_reports') {
      text =
        `🚩 <b>Question Error Report</b>\n` +
        `• Issue: <b>${record.issue_type || 'Error'}</b>\n` +
        `• Shift: ${record.shift_title || 'PYQ'} (Q.${record.question_no ?? '-'})\n` +
        `• Note: ${record.issue_note || '-'}\n` +
        `• Reporter: ${record.reporter_email || 'Guest'}`;
    } else {
      return new Response(JSON.stringify({ ok: true, ignored: true }), { status: 200 });
    }

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: ADMIN_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 400 });
  }
});
