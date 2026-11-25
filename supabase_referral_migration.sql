-- =========================================================================
-- RAILWAYPREP PORTAL - REFERRAL + FIRST-500 CAP + AD-FREE TIER MIGRATION
-- Run this once in Supabase Dashboard -> SQL Editor -> Run
-- =========================================================================

-- 1. Add referral & tier columns to existing profiles table
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS referral_code TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS referred_by UUID REFERENCES public.profiles(id),
  ADD COLUMN IF NOT EXISTS referral_count INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS pass_pro_plan TEXT NOT NULL DEFAULT 'free', -- 'free' | 'referral_trial' | 'paid'
  ADD COLUMN IF NOT EXISTS won_referral_pro BOOLEAN NOT NULL DEFAULT false;

-- Backfill referral codes for any existing users who don't have one yet
UPDATE public.profiles
SET referral_code = UPPER(SUBSTRING(REPLACE(id::text, '-', ''), 1, 6))
WHERE referral_code IS NULL;

-- Protect new sensitive columns from direct client-side tampering
DROP POLICY IF EXISTS "Users can update own basic profile" ON public.profiles;
CREATE POLICY "Users can update own basic profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND is_pass_pro IS NOT DISTINCT FROM (SELECT p.is_pass_pro FROM public.profiles p WHERE p.id = auth.uid())
    AND is_admin IS NOT DISTINCT FROM (SELECT p.is_admin FROM public.profiles p WHERE p.id = auth.uid())
    AND pass_pro_plan IS NOT DISTINCT FROM (SELECT p.pass_pro_plan FROM public.profiles p WHERE p.id = auth.uid())
    AND referral_count IS NOT DISTINCT FROM (SELECT p.referral_count FROM public.profiles p WHERE p.id = auth.uid())
    AND won_referral_pro IS NOT DISTINCT FROM (SELECT p.won_referral_pro FROM public.profiles p WHERE p.id = auth.uid())
  );

-- 2. Referrals Tracking Table
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  referred_user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  referred_email TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending' | 'verified'
  created_at TIMESTAMPTZ DEFAULT now(),
  verified_at TIMESTAMPTZ
);

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their referrals" ON public.referrals;
CREATE POLICY "Users can view their referrals"
  ON public.referrals FOR SELECT
  USING (auth.uid() = referrer_id OR auth.uid() = referred_user_id OR (auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com');

-- 3. Internal helper to verify a referral & award 3-Month Pro to First 500 Winners
CREATE OR REPLACE FUNCTION public._process_referral_verification(p_referred_user_id UUID)
RETURNS VOID AS $$
DECLARE
  v_ref_row RECORD;
  v_referrer RECORD;
  v_total_winners INT;
  v_max_seats CONSTANT INT := 500;
BEGIN
  -- Serialize seat checks to prevent race conditions past 500
  PERFORM pg_advisory_xact_lock(99887766);

  SELECT * INTO v_ref_row
  FROM public.referrals
  WHERE referred_user_id = p_referred_user_id AND status = 'pending';

  IF NOT FOUND THEN
    RETURN;
  END IF;

  -- Mark referral verified
  UPDATE public.referrals
  SET status = 'verified', verified_at = now()
  WHERE id = v_ref_row.id;

  -- Increment referrer's verified referral count
  UPDATE public.profiles
  SET referral_count = referral_count + 1, updated_at = now()
  WHERE id = v_ref_row.referrer_id
  RETURNING * INTO v_referrer;

  -- Check if referrer reached 4 verified referrals and hasn't won yet
  IF v_referrer.referral_count >= 4 AND NOT v_referrer.won_referral_pro AND v_referrer.pass_pro_plan = 'free' THEN
    SELECT COUNT(*) INTO v_total_winners FROM public.profiles WHERE won_referral_pro = true;

    IF v_total_winners < v_max_seats THEN
      UPDATE public.profiles
      SET is_pass_pro = true,
          pass_pro_plan = 'referral_trial',
          won_referral_pro = true,
          pass_pro_expires_at = now() + INTERVAL '90 days',
          updated_at = now()
      WHERE id = v_referrer.id;
    END IF;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Updated Signup Trigger (generates referral_code & captures referred_by_code)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  v_ref_code TEXT;
  v_referrer_id UUID;
  v_is_admin BOOLEAN;
BEGIN
  v_ref_code := UPPER(SUBSTRING(REPLACE(NEW.id::text, '-', ''), 1, 6));
  v_is_admin := LOWER(COALESCE(NEW.email, '')) = 'mdtasleem7645@gmail.com';

  -- Lookup referrer if code provided at signup
  IF NEW.raw_user_meta_data ->> 'referred_by_code' IS NOT NULL THEN
    SELECT id INTO v_referrer_id
    FROM public.profiles
    WHERE referral_code = UPPER(TRIM(NEW.raw_user_meta_data ->> 'referred_by_code'))
      AND id <> NEW.id
    LIMIT 1;
  END IF;

  INSERT INTO public.profiles (id, email, full_name, is_admin, is_pass_pro, referral_code, referred_by, pass_pro_plan)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', split_part(NEW.email, '@', 1)),
    v_is_admin,
    v_is_admin,
    v_ref_code,
    v_referrer_id,
    CASE WHEN v_is_admin THEN 'paid' ELSE 'free' END
  )
  ON CONFLICT (id) DO NOTHING;

  -- Record referral if referrer found
  IF v_referrer_id IS NOT NULL THEN
    INSERT INTO public.referrals (referrer_id, referred_user_id, referred_email, status)
    VALUES (v_referrer_id, NEW.id, NEW.email, 'pending')
    ON CONFLICT (referred_user_id) DO NOTHING;

    -- If email is already confirmed (e.g. Google OAuth), verify immediately
    IF NEW.email_confirmed_at IS NOT NULL THEN
      PERFORM public._process_referral_verification(NEW.id);
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5. Email Confirmation Trigger (Verifies pending referral when user clicks verification email)
CREATE OR REPLACE FUNCTION public.handle_user_email_confirmed()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.email_confirmed_at IS NULL AND NEW.email_confirmed_at IS NOT NULL THEN
    PERFORM public._process_referral_verification(NEW.id);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_confirmed ON auth.users;
CREATE TRIGGER on_auth_user_confirmed
  AFTER UPDATE OF email_confirmed_at ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_user_email_confirmed();

-- 6. Post-Login Referral Claim RPC (supports Google OAuth / late claim)
CREATE OR REPLACE FUNCTION public.claim_referral(p_ref_code TEXT)
RETURNS JSONB AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_user_email TEXT := auth.jwt() ->> 'email';
  v_referrer_id UUID;
  v_already_referred UUID;
  v_email_confirmed BOOLEAN;
BEGIN
  IF v_uid IS NULL THEN
    RETURN jsonb_build_object('claimed', false, 'reason', 'not_authenticated');
  END IF;

  SELECT referred_by INTO v_already_referred FROM public.profiles WHERE id = v_uid;
  IF v_already_referred IS NOT NULL THEN
    RETURN jsonb_build_object('claimed', false, 'reason', 'already_claimed');
  END IF;

  SELECT id INTO v_referrer_id
  FROM public.profiles
  WHERE referral_code = UPPER(TRIM(p_ref_code)) AND id <> v_uid
  LIMIT 1;

  IF v_referrer_id IS NULL THEN
    RETURN jsonb_build_object('claimed', false, 'reason', 'invalid_code');
  END IF;

  UPDATE public.profiles SET referred_by = v_referrer_id WHERE id = v_uid;

  INSERT INTO public.referrals (referrer_id, referred_user_id, referred_email, status)
  VALUES (v_referrer_id, v_uid, v_user_email, 'pending')
  ON CONFLICT (referred_user_id) DO NOTHING;

  SELECT (email_confirmed_at IS NOT NULL) INTO v_email_confirmed FROM auth.users WHERE id = v_uid;
  IF v_email_confirmed THEN
    PERFORM public._process_referral_verification(v_uid);
  END IF;

  RETURN jsonb_build_object('claimed', true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Public Campaign Stats RPC (Live First-500 Seat Counter)
CREATE OR REPLACE FUNCTION public.get_referral_campaign_status()
RETURNS JSONB AS $$
DECLARE
  v_max_seats CONSTANT INT := 500;
  v_claimed INT;
BEGIN
  SELECT COUNT(*) INTO v_claimed FROM public.profiles WHERE won_referral_pro = true;
  RETURN jsonb_build_object(
    'max_seats', v_max_seats,
    'seats_claimed', v_claimed,
    'seats_left', GREATEST(0, v_max_seats - v_claimed),
    'is_active', v_claimed < v_max_seats,
    'reward_days', 90,
    'required_referrals', 4
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 8. Update Admin Payment Verification to mark as 'paid' (1-Year Ad-Free VIP)
CREATE OR REPLACE FUNCTION public.admin_verify_payment(p_payment_id UUID, p_approve BOOLEAN)
RETURNS JSONB AS $$
DECLARE
  v_payment RECORD;
BEGIN
  IF (auth.jwt() ->> 'email') IS DISTINCT FROM 'mdtasleem7645@gmail.com' THEN
    RAISE EXCEPTION 'Unauthorized: Admin access required';
  END IF;

  SELECT * INTO v_payment FROM public.pass_pro_payments WHERE id = p_payment_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Payment record not found';
  END IF;

  IF p_approve THEN
    UPDATE public.pass_pro_payments
    SET status = 'approved', verified_at = now()
    WHERE id = p_payment_id;

    UPDATE public.profiles
    SET is_pass_pro = true,
        pass_pro_plan = 'paid',
        pass_pro_expires_at = now() + INTERVAL '365 days',
        updated_at = now()
    WHERE id = v_payment.user_id;
  ELSE
    UPDATE public.pass_pro_payments
    SET status = 'rejected', verified_at = now()
    WHERE id = p_payment_id;
  END IF;

  RETURN jsonb_build_object('success', true, 'status', CASE WHEN p_approve THEN 'approved' ELSE 'rejected' END);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 9. Self-healing Profile Sync RPC (Creates missing profile / referral code & syncs Admin VIP)
CREATE OR REPLACE FUNCTION public.ensure_my_profile(p_ref_code TEXT DEFAULT NULL)
RETURNS JSONB AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_user RECORD;
  v_profile public.profiles%ROWTYPE;
  v_ref_code TEXT;
  v_referrer_id UUID;
  v_is_admin BOOLEAN;
BEGIN
  IF v_uid IS NULL THEN
    RETURN NULL;
  END IF;

  SELECT id, email, raw_user_meta_data, email_confirmed_at
  INTO v_user
  FROM auth.users
  WHERE id = v_uid;

  IF NOT FOUND THEN
    RETURN NULL;
  END IF;

  v_ref_code := UPPER(SUBSTRING(REPLACE(v_uid::text, '-', ''), 1, 6));
  v_is_admin := LOWER(COALESCE(v_user.email, '')) = 'mdtasleem7645@gmail.com';

  INSERT INTO public.profiles (id, email, full_name, is_admin, is_pass_pro, referral_code, pass_pro_plan)
  VALUES (
    v_uid,
    v_user.email,
    COALESCE(v_user.raw_user_meta_data ->> 'full_name', split_part(v_user.email, '@', 1)),
    v_is_admin,
    v_is_admin,
    v_ref_code,
    CASE WHEN v_is_admin THEN 'paid' ELSE 'free' END
  )
  ON CONFLICT (id) DO NOTHING;

  -- Ensure existing profile also has referral_code & admin VIP flags synced
  UPDATE public.profiles
  SET
    referral_code = COALESCE(referral_code, v_ref_code),
    full_name = COALESCE(NULLIF(full_name, ''), v_user.raw_user_meta_data ->> 'full_name', split_part(v_user.email, '@', 1)),
    email = COALESCE(email, v_user.email),
    is_admin = CASE WHEN v_is_admin THEN true ELSE is_admin END,
    is_pass_pro = CASE WHEN v_is_admin THEN true ELSE is_pass_pro END,
    pass_pro_plan = CASE WHEN v_is_admin THEN 'paid' ELSE pass_pro_plan END,
    updated_at = now()
  WHERE id = v_uid
    AND (
      referral_code IS NULL
      OR (v_is_admin AND (NOT COALESCE(is_admin, false) OR NOT COALESCE(is_pass_pro, false) OR COALESCE(pass_pro_plan, 'free') <> 'paid'))
      OR NULLIF(full_name, '') IS NULL
      OR email IS NULL
    );

  -- Claim referral code if provided and not yet referred
  IF p_ref_code IS NOT NULL AND LENGTH(TRIM(p_ref_code)) >= 4 THEN
    SELECT * INTO v_profile FROM public.profiles WHERE id = v_uid;
    IF v_profile.referred_by IS NULL THEN
      SELECT id INTO v_referrer_id
      FROM public.profiles
      WHERE referral_code = UPPER(TRIM(p_ref_code)) AND id <> v_uid
      LIMIT 1;

      IF v_referrer_id IS NOT NULL THEN
        UPDATE public.profiles SET referred_by = v_referrer_id WHERE id = v_uid;

        INSERT INTO public.referrals (referrer_id, referred_user_id, referred_email, status)
        VALUES (v_referrer_id, v_uid, v_user.email, 'pending')
        ON CONFLICT (referred_user_id) DO NOTHING;

        IF v_user.email_confirmed_at IS NOT NULL THEN
          PERFORM public._process_referral_verification(v_uid);
        END IF;
      END IF;
    END IF;
  END IF;

  SELECT * INTO v_profile FROM public.profiles WHERE id = v_uid;
  RETURN to_jsonb(v_profile);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 10. Immediate Backfill for any existing users & Admin account
INSERT INTO public.profiles (id, email, full_name, is_admin, is_pass_pro, referral_code, pass_pro_plan)
SELECT
  u.id,
  u.email,
  COALESCE(u.raw_user_meta_data ->> 'full_name', split_part(u.email, '@', 1)),
  LOWER(COALESCE(u.email, '')) = 'mdtasleem7645@gmail.com',
  LOWER(COALESCE(u.email, '')) = 'mdtasleem7645@gmail.com',
  UPPER(SUBSTRING(REPLACE(u.id::text, '-', ''), 1, 6)),
  CASE WHEN LOWER(COALESCE(u.email, '')) = 'mdtasleem7645@gmail.com' THEN 'paid' ELSE 'free' END
FROM auth.users u
ON CONFLICT (id) DO NOTHING;

UPDATE public.profiles
SET
  referral_code = UPPER(SUBSTRING(REPLACE(id::text, '-', ''), 1, 6)),
  updated_at = now()
WHERE referral_code IS NULL;

UPDATE public.profiles
SET
  is_admin = true,
  is_pass_pro = true,
  pass_pro_plan = 'paid',
  updated_at = now()
WHERE LOWER(COALESCE(email, '')) = 'mdtasleem7645@gmail.com';
