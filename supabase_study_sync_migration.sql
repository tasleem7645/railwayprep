-- =========================================================================
-- Migration: Cloud Study State Sync (Mistake Notebook, PYQ Progress, Streak & Topic Stats)
-- Project: RailwayPrep Portal (Supabase)
-- Purpose: Sync railwayprep_mistake_notebook, PYQ attempts/bookmarks,
--          study streaks, and per-topic performance safely across devices.
-- Run this once in Supabase Dashboard -> SQL Editor.
-- =========================================================================

CREATE TABLE IF NOT EXISTS public.user_study_state (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  mistakes_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  pyq_progress_json JSONB NOT NULL DEFAULT '{"attempts":{},"bookmarks":{}}'::jsonb,
  streak_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.user_study_state ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own study state" ON public.user_study_state;
CREATE POLICY "Users can read own study state"
  ON public.user_study_state
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own study state" ON public.user_study_state;
CREATE POLICY "Users can insert own study state"
  ON public.user_study_state
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own study state" ON public.user_study_state;
CREATE POLICY "Users can update own study state"
  ON public.user_study_state
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
