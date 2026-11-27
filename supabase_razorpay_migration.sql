-- =========================================================================
-- RAILWAYPREP PORTAL - RAZORPAY ORDER & VERIFIED CHECKOUT MIGRATION
-- Run in Supabase SQL Editor BEFORE deploying Razorpay Edge Functions.
-- Backward-compatible with existing upi_utr rows.
-- =========================================================================

ALTER TABLE public.pass_pro_payments
  ADD COLUMN IF NOT EXISTS razorpay_order_id TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS razorpay_signature TEXT,
  ADD COLUMN IF NOT EXISTS plan_key TEXT NOT NULL DEFAULT 'pass_pro_annual',
  ADD COLUMN IF NOT EXISTS currency TEXT NOT NULL DEFAULT 'INR';

CREATE INDEX IF NOT EXISTS idx_pass_pro_payments_order_id
  ON public.pass_pro_payments (razorpay_order_id)
  WHERE razorpay_order_id IS NOT NULL;
