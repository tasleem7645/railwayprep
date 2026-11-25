-- =========================================================================
-- Migration: Admin Question Error Queue (User Question Reports)
-- Project: RailwayPrep Portal (Supabase)
-- Purpose: Allow students & guests to report question typos, wrong official
--          answer keys, missing diagrams/tables, or Hindi translation bugs,
--          and let Admin (mdtasleem7645@gmail.com) review & resolve them.
-- Run this once in Supabase Dashboard -> SQL Editor.
-- =========================================================================

CREATE TABLE IF NOT EXISTS public.question_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reporter_email TEXT,
  question_uid TEXT NOT NULL,
  test_id TEXT,
  shift_title TEXT,
  question_no INT,
  issue_type TEXT NOT NULL,
  issue_note TEXT,
  question_preview TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved', 'dismissed')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_question_reports_status_created
  ON public.question_reports (status, created_at DESC);

ALTER TABLE public.question_reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit question reports" ON public.question_reports;
CREATE POLICY "Anyone can submit question reports"
  ON public.question_reports
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    LENGTH(TRIM(question_uid)) > 0
    AND LENGTH(TRIM(issue_type)) > 0
    AND status = 'open'
    AND (
      reporter_id IS NULL
      OR auth.uid() = reporter_id
    )
  );

DROP POLICY IF EXISTS "Admin or reporter can read question reports" ON public.question_reports;
CREATE POLICY "Admin or reporter can read question reports"
  ON public.question_reports
  FOR SELECT
  TO authenticated
  USING (
    (auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com'
    OR auth.uid() = reporter_id
  );

DROP POLICY IF EXISTS "Admin can update question reports" ON public.question_reports;
CREATE POLICY "Admin can update question reports"
  ON public.question_reports
  FOR UPDATE
  TO authenticated
  USING ((auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com')
  WITH CHECK ((auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com');

DROP POLICY IF EXISTS "Admin can delete question reports" ON public.question_reports;
CREATE POLICY "Admin can delete question reports"
  ON public.question_reports
  FOR DELETE
  TO authenticated
  USING ((auth.jwt() ->> 'email') = 'mdtasleem7645@gmail.com');
