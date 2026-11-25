# RailwayPrep Portal — Project Handoff & Context Guide

> **Purpose:** Quick onboarding context file for starting a fresh AI session after quota resets, session compactions, or switching conversations. Read this file first before planning or editing code.

---

## 1. Repository & Environment
- **Workspace Path:** `/data/user/0/ai.antigem/files/home/projects/railwayprep-portal`
- **GitHub Repo:** `tasleem7645/railwayprep` (default branch: `main`, deployed on Cloudflare Pages)
- **Stack:** React 19, Vite 6 (`vite.config.js`), Tailwind CSS v4 (`@tailwindcss/vite`), Supabase (`@supabase/supabase-js`), `lucide-react`, `canvas-confetti`, `katex`
- **Package Manager:** Always use `pnpm` (`pnpm dev`, `pnpm build`)
- **Host Constraints (Termux / Android):**
  - Never install system packages (`pkg`, `apt`) or npm dependencies automatically without explicit user permission.
  - Never commit `.env`, `bot_secret.json`, API keys, or tokens.
  - Maintain zero third-party coaching names anywhere in UI, copy, or code.
  - Verify code changes with Node ESM unit assertions + `pnpm build` before committing and pushing.
- **User Communication Style:** Concise Hinglish with clickable `file://` links for referenced files. If the user asks questions or asks about roadmap/options, answer clearly first before editing code.

---

## 2. Recent Git History (`origin/main`)
- `9e89ddb` — Per-question speed analytics radar, weak-topic 15-Q mini CBT generator, and SM-2 mistake spaced repetition
- `6dc7f11` — Multi-device cloud study state sync (`user_study_state`), historical attempt solutions re-opener, and smart weak-topic radar
- `bd6c272` / `5995b76` — Testbook-style responsive single-row header, left slide-over drawer, mobile bottom nav, home showcase carousels, Group D catalog fix
- `aa2b889` — Stale-chunk auto-recovery (`chunkRecovery.js`), `public/_headers`, `public/404.html`
- `d62590e` — Telegram official community links + 24×7 GitHub Actions autopilot (`.github/workflows/telegram-autopilot.yml`)
- `44520b9` — Mistake Notebook CBT Re-Test + Question Error Reporting + Admin Error Queue

---

## 3. Supabase Database Migrations (All Executed & Live)
All SQL migration files in repo root have been run in Supabase SQL Editor:
1. `supabase_schema.sql` — `profiles`, `test_attempts` (stores `answers_json`), `saved_sessions`
2. `supabase_leaderboard_migration.sql` — `get_shift_leaderboard` RPC (live percentile & shift toppers)
3. `supabase_referral_migration.sql` — 4-friend referral invite tracking & Pass Pro campaign status
4. `supabase_reports_migration.sql` — question error reporting queue for Admin moderation
5. `supabase_study_sync_migration.sql` — `public.user_study_state` table + RLS (`mistakes_json`, `pyq_progress_json`, `streak_json` holding `topicStats` + `speedProfiles`)

---

## 4. Current Implemented Architecture Map

### Core CBT Engine & Result Analytics
- `src/components/CBTMockTestModal.jsx`: TCS iON CBT layout, per-question & global Hi/En language toggle, pause/resume persistence, `questionTimes` timer per question, passed to `onSubmitTest`.
- `src/utils/speedAnalytics.js`: Section-aware pace benchmarks (Math/Reasoning `54s`, Science/GA/Trade `36s`), buckets (**Superfast Right**, **Speed/Silly Mistakes `<=12s`**, **Time-Waster Traps**, **Sunk-Cost Skips `>=45s`**), `computeTestSpeedReport`, and 20-test `speedProfiles` persistence (`railwayprep_speed_profiles_v1`).
- `src/components/TestResultModal.jsx`: Scorecard, `ExpectedCutoffCard.jsx`, `ShiftLeaderboardTab.jsx`, **Per-Question Speed & Silly-Mistake Radar** (with clickable jump to question in Solutions tab + per-question time pill), printable solved PDF (`src/utils/shiftPdfGenerator.js`), Share Score Card (`ShareScoreCardModal.jsx`), Question Error Report (`ReportQuestionModal.jsx`), and historical review mode (`isHistoricalReview` skips repeat confetti/duplicate mistake save).

### Weak-Topic Radar, Cloud Sync & Mistake Spaced Repetition
- `src/utils/studySyncEvents.js`: Event bus (`STUDY_SYNC_EVENT`, `notifyStudyStateChanged`) triggering debounced cloud pushes.
- `src/utils/studyStateMerge.js`: Pure bidirectional merge (`mergeMistakes` with SM-2 recency priority, `mergePyqProgress`, `mergeStreakState` with `topicStats` & `speedProfiles`).
- `src/utils/cloudStudySync.js`: `syncStudyStateOnLogin`, `pushStudyStateToCloud`, `getLocalCloudPayload` synced to `public.user_study_state`.
- `src/utils/topicPerformance.js`: Aggregates mock stats, PYQ Explorer attempts (`subject`/`chapter`/`topic`), and mistakes (`analyzeWeakTopics`, `recordMockTopicStats`).
- `src/utils/weakTopicQuizBuilder.js`: `selectWeakTopicQuestions` + `buildWeakTopicMiniTest` — builds a 15-Q timed CBT drill targeting any weak topic directly from unlocked official shifts + `classifyQuestionTaxonomy`.
- `src/utils/mistakeSpacedRepetition.js`: SM-2 scheduler (`Day 1 → Day 3 → Day 7 → Day 21`); 2 consecutive right answers promote a mistake to `Mastered ✓`.
- `src/utils/mistakeTestBuilder.js` & `src/components/MistakeNotebookModal.jsx`: Mistake filters (`Due Today`, subjects, `✓ Mastered`), inline SRS grading, and `Revise Due Queue CBT` / filtered CBT launcher.
- `src/components/UserDashboardModal.jsx`: Tabs for `My Account` (Streak Badges, Referrals, Cloud Sync Status + Sync Now), `Weak Topic Radar` (`15-Q Mini CBT` + `Mistakes / PYQ`), `Test History` (`View Solutions & Rank` historical re-opener), and `Admin Queue`.
- `src/App.jsx`: Auth/session lifecycle, `STUDY_SYNC_EVENT` 900ms debounced cloud sync, `handleReopenAttempt`, `handleLaunchWeakTopicDrill`, `handleLaunchWeakMiniMock`, and SM-2 batch grading when `test.isMistakeReTest` finishes.

### PYQ Explorer, Catalog, UI Shell & Telegram Automation
- `src/components/PYQExplorerView.jsx`, `src/utils/pyqTaxonomy.js`, `src/utils/pyqHelper.js`, `src/utils/pyqProgress.js`
- `src/data/mockTestData.js`, `src/data/groupDTestsData.js`, `src/data/tradeTestsData.js`, `src/data/testQuestionLoader.js`
- `src/components/Navbar.jsx`, `src/components/MobileBottomNav.jsx`, `src/components/HomeShowcaseSections.jsx`, `src/components/TestCard.jsx`, `src/components/DailyQuizView.jsx`, `src/components/SyllabusView.jsx`, `src/components/AspirantToolsHub.jsx`, `src/components/SuperCoachingView.jsx`
- `src/utils/chunkRecovery.js` + `public/_headers` + `public/404.html`
- `.github/workflows/telegram-autopilot.yml` (`@RailwayPrep_Official`, `@RailwayPrepDiscuss`, `@RailwayPrepOfficialBot`)

---

## 5. Pending Roadmap Options (Ready to Build Next)

### Option B — Live Competition & Unique ALP CBAT USP
1. **All-India Weekend Live Mega Mock:** Scheduled `Sat–Sun` test window with countdown, Monday rank/percentile/cutoff reveal, and Telegram channel auto-digest.
2. **Interactive Stage-3 ALP CBAT Psychometric Simulator:** 5 timed batteries (Memory Test, Following Directions, Depth Perception / Brick Test, Concentration Yes/No Number Match, Perceptual Speed) inside Portal / Pass Pro.

### Option C — App-Grade Offline Experience & Quick Revision
1. **Full Installable Offline PWA:** Web App Manifest + Service Worker caching visited shifts, PYQs, and Mistake Notebook offline, syncing via `cloudStudySync` once back online.
2. **Swipeable Formula & Science Flashcard Shorts:** Interactive revision deck built over `src/data/cheatsheetsData.js` (`Known ✓` / `Revise Again ↻`).

### Later Backlog
- 1-vs-1 "Beat My Score" friend challenge links
- Hinglish AI Short-Trick Explainer on Solutions view (Supabase Edge Function)
- RRB NTPC / Technician Grade I & III / RPF shift expansions
- Razorpay / Cashfree automated Pass Pro UPI webhook

---

## 6. How to Resume in a New Session
Tell the AI in any new chat:
> `"HANDOFF.md padho aur [Option B / Option C / specific feature] start karo"`
