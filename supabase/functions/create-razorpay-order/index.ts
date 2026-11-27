// Supabase Edge Function: Create authoritative Razorpay Order server-side
// Deploy: supabase functions deploy create-razorpay-order
// Required Secrets: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_ANON_KEY

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const PLAN_CATALOG: Record<string, { amountInr: number; description: string }> = {
  pass_pro_annual: {
    amountInr: 49,
    description: 'RailwayPrep Pass Pro (1 Year Unlimited Access)',
  },
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const RAZORPAY_KEY_ID = Deno.env.get('RAZORPAY_KEY_ID') || '';
    const RAZORPAY_KEY_SECRET = Deno.env.get('RAZORPAY_KEY_SECRET') || '';
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: 'Payment gateway server secrets are not configured yet.' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const authHeader = req.headers.get('Authorization') || '';
    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const {
      data: { user },
      error: authError,
    } = await userClient.auth.getUser();

    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json().catch(() => ({}));
    const planKey = typeof body.planKey === 'string' && PLAN_CATALOG[body.planKey]
      ? body.planKey
      : 'pass_pro_annual';

    const plan = PLAN_CATALOG[planKey];
    const amountPaise = Math.round(plan.amountInr * 100);
    const receipt = `rprep_${user.id.replace(/-/g, '').slice(0, 12)}_${Date.now()}`;

    const basicAuth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
    const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amountPaise,
        currency: 'INR',
        receipt,
        notes: {
          user_id: user.id,
          user_email: user.email || '',
          plan_key: planKey,
        },
      }),
    });

    const orderData = await orderRes.json();
    if (!orderRes.ok || !orderData?.id) {
      return new Response(
        JSON.stringify({ error: orderData?.error?.description || 'Failed to create Razorpay order' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const adminClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    await adminClient.from('pass_pro_payments').insert({
      user_id: user.id,
      user_email: user.email || '',
      amount: plan.amountInr,
      currency: 'INR',
      plan_key: planKey,
      payment_method: 'razorpay',
      razorpay_order_id: orderData.id,
      utr_or_payment_id: `order_${orderData.id}`,
      status: 'pending',
    });

    return new Response(
      JSON.stringify({
        order_id: orderData.id,
        amount: amountPaise,
        currency: 'INR',
        key_id: RAZORPAY_KEY_ID,
        description: plan.description,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
