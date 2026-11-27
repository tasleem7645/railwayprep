// Supabase Edge Function: Asynchronous Razorpay Webhook fallback (order.paid / payment.captured)
// Deploy: supabase functions deploy razorpay-webhook --no-verify-jwt
// Required Secrets: RAZORPAY_WEBHOOK_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

async function computeHmacHex(secret: string, rawBody: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(rawBody));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

Deno.serve(async (req) => {
  try {
    const WEBHOOK_SECRET = Deno.env.get('RAZORPAY_WEBHOOK_SECRET') || '';
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

    if (!WEBHOOK_SECRET || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return new Response('Webhook not configured', { status: 503 });
    }

    const rawBody = await req.text();
    const signature = req.headers.get('X-Razorpay-Signature') || '';
    const expected = await computeHmacHex(WEBHOOK_SECRET, rawBody);

    if (!signature || expected !== signature) {
      return new Response('Invalid webhook signature', { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const eventName = event?.event;
    if (eventName !== 'payment.captured' && eventName !== 'order.paid') {
      return new Response(JSON.stringify({ ok: true, ignored: eventName }), { status: 200 });
    }

    const payment = event?.payload?.payment?.entity;
    const orderId = payment?.order_id;
    const paymentId = payment?.id;
    const userId = payment?.notes?.user_id;

    if (!orderId || !paymentId) {
      return new Response(JSON.stringify({ ok: true, skipped: 'Missing order/payment ID' }), { status: 200 });
    }

    const adminClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const nowIso = new Date().toISOString();
    const expiryIso = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();

    const { data: orderRow } = await adminClient
      .from('pass_pro_payments')
      .update({
        utr_or_payment_id: paymentId,
        status: 'approved',
        verified_at: nowIso,
      })
      .eq('razorpay_order_id', orderId)
      .select('user_id')
      .maybeSingle();

    const targetUserId = orderRow?.user_id || userId;
    if (targetUserId) {
      await adminClient
        .from('profiles')
        .update({
          is_pass_pro: true,
          pass_pro_plan: 'paid',
          pass_pro_expires_at: expiryIso,
          updated_at: nowIso,
        })
        .eq('id', targetUserId);
    }

    return new Response(JSON.stringify({ ok: true, activated: Boolean(targetUserId) }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
});
