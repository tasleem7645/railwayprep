-- =========================================================================
-- RAILWAYPREP PORTAL - REAL-TIME SHIFT LEADERBOARD MIGRATION
-- Run once in Supabase Dashboard -> SQL Editor -> Run
-- =========================================================================

CREATE INDEX IF NOT EXISTS idx_test_attempts_leaderboard
  ON public.test_attempts (test_id, score DESC, time_taken_seconds ASC);

CREATE OR REPLACE FUNCTION public.get_shift_leaderboard(
  p_test_id TEXT,
  p_user_score NUMERIC DEFAULT NULL
)
RETURNS JSONB AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_total INT := 0;
  v_avg NUMERIC := NULL;
  v_top NUMERIC := NULL;
  v_my_score NUMERIC := NULL;
  v_target_score NUMERIC := NULL;
  v_higher INT := 0;
  v_rank INT := NULL;
  v_percentile NUMERIC := NULL;
  v_toppers JSONB := '[]'::jsonb;
BEGIN
  CREATE TEMP TABLE IF NOT EXISTS _tmp_shift_best (
    user_id UUID,
    score NUMERIC,
    total_marks NUMERIC,
    accuracy NUMERIC,
    time_taken_seconds INT,
    created_at TIMESTAMPTZ,
    display_name TEXT
  ) ON COMMIT DROP;

  TRUNCATE TABLE _tmp_shift_best;

  INSERT INTO _tmp_shift_best
  SELECT DISTINCT ON (a.user_id)
    a.user_id,
    a.score,
    a.total_marks,
    a.accuracy,
    a.time_taken_seconds,
    a.created_at,
    CASE
      WHEN POSITION(' ' IN COALESCE(NULLIF(TRIM(p.full_name), ''), 'Aspirant')) > 0 THEN
        INITCAP(SPLIT_PART(TRIM(p.full_name), ' ', 1)) || ' ' ||
        UPPER(LEFT(SPLIT_PART(TRIM(p.full_name), ' ', 2), 1)) || '.'
      WHEN NULLIF(TRIM(p.full_name), '') IS NOT NULL THEN
        INITCAP(LEFT(TRIM(p.full_name), 10))
      ELSE 'Aspirant'
    END AS display_name
  FROM public.test_attempts a
  LEFT JOIN public.profiles p ON p.id = a.user_id
  WHERE a.test_id = p_test_id
  ORDER BY a.user_id, a.score DESC, a.time_taken_seconds ASC, a.created_at ASC;

  SELECT COUNT(*), ROUND(AVG(score), 2), MAX(score)
  INTO v_total, v_avg, v_top
  FROM _tmp_shift_best;

  IF v_uid IS NOT NULL THEN
    SELECT score INTO v_my_score FROM _tmp_shift_best WHERE user_id = v_uid LIMIT 1;
  END IF;

  v_target_score := COALESCE(p_user_score, v_my_score);

  IF v_total > 0 AND v_target_score IS NOT NULL THEN
    SELECT COUNT(*) INTO v_higher FROM _tmp_shift_best WHERE score > v_target_score;
    v_rank := v_higher + 1;
    v_percentile := ROUND(GREATEST(1, LEAST(100, ((v_total - v_higher)::numeric / v_total) * 100)), 1);
  END IF;

  SELECT COALESCE(jsonb_agg(row_to_json(t)), '[]'::jsonb)
  INTO v_toppers
  FROM (
    SELECT
      ROW_NUMBER() OVER (ORDER BY score DESC, time_taken_seconds ASC, created_at ASC) AS rank,
      display_name,
      score,
      total_marks,
      accuracy,
      time_taken_seconds,
      (v_uid IS NOT NULL AND user_id = v_uid) AS is_me
    FROM _tmp_shift_best
    ORDER BY score DESC, time_taken_seconds ASC, created_at ASC
    LIMIT 10
  ) t;

  RETURN jsonb_build_object(
    'test_id', p_test_id,
    'total_participants', v_total,
    'avg_score', v_avg,
    'top_score', v_top,
    'user_rank', v_rank,
    'user_percentile', v_percentile,
    'toppers', v_toppers
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.get_shift_leaderboard(TEXT, NUMERIC) TO anon, authenticated;
