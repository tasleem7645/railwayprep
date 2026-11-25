-- =========================================================================
-- RAILWAYPREP PORTAL - PRODUCTION SUPABASE SCHEMA
-- =========================================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  target_exam TEXT DEFAULT 'RRB ALP (Loco Pilot 2026)',
  is_pass_pro BOOLEAN DEFAULT false,
  pass_pro_expires_at TIMESTAMPTZ,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own basic profile" ON public.profiles;
CREATE POLICY "Users can update own basic profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND is_pass_pro IS NOT DISTINCT FROM (SELECT p.is_pass_pro FROM public.profiles p WHERE p.id = auth.uid())
    AND is_admin IS NOT DISTINCT FROM (SELECT p.is_admin FROM public.profiles p WHERE p.id = auth.uid())
  );

DROP POLICY IF EXISTS "Admin can view all profiles" ON public.profiles;
CREATE POLICY "Admin can view all profiles"
  ON public.profiles FOR SELECT
  USING ((auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com');

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, is_admin)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', split_part(NEW.email, '@', 1)),
    CASE WHEN NEW.email = 'mdtasleem7645@gmail.com' THEN true ELSE false END
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 2. TEST ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS public.test_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  test_id TEXT NOT NULL,
  test_title TEXT NOT NULL,
  score NUMERIC(6,2) NOT NULL DEFAULT 0,
  total_marks NUMERIC(6,2) NOT NULL DEFAULT 100,
  correct_count INT NOT NULL DEFAULT 0,
  wrong_count INT NOT NULL DEFAULT 0,
  unattempted_count INT NOT NULL DEFAULT 0,
  accuracy NUMERIC(5,2) NOT NULL DEFAULT 0,
  time_taken_seconds INT NOT NULL DEFAULT 0,
  answers_json JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.test_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own test attempts" ON public.test_attempts;
CREATE POLICY "Users can read own test attempts"
  ON public.test_attempts FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own test attempts" ON public.test_attempts;
CREATE POLICY "Users can insert own test attempts"
  ON public.test_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 3. SAVED SESSIONS TABLE
CREATE TABLE IF NOT EXISTS public.saved_sessions (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  test_id TEXT NOT NULL,
  session_data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.saved_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own saved sessions" ON public.saved_sessions;
CREATE POLICY "Users can manage own saved sessions"
  ON public.saved_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 4. PASS PRO PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.pass_pro_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  amount NUMERIC(10,2) NOT NULL DEFAULT 49,
  payment_method TEXT NOT NULL DEFAULT 'upi_utr',
  utr_or_payment_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  verified_at TIMESTAMPTZ
);

ALTER TABLE public.pass_pro_payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own payments" ON public.pass_pro_payments;
CREATE POLICY "Users can read own payments"
  ON public.pass_pro_payments FOR SELECT
  USING (auth.uid() = user_id OR (auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com');

DROP POLICY IF EXISTS "Users can submit payment UTR" ON public.pass_pro_payments;
CREATE POLICY "Users can submit payment UTR"
  ON public.pass_pro_payments FOR INSERT
  WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- 5. SECURE ADMIN APPROVAL FUNCTION
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
