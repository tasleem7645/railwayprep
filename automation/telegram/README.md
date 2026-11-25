# RailwayPrep PRO — Telegram Automation & Privacy Architecture

This folder powers 24x7 automated bilingual PYQ quiz polls, official RRB exam notices, daily GK/Science capsules, formula cards, group anti-spam moderation, and optional Admin alerts for `@RailwayPrep_Official` and `@RailwayPrepDiscuss`.

## Setup Summary (Zero Secrets Committed)
- **Primary Channel:** `@RailwayPrep_Official` (`-1002047409648`)
- **Discussion Group:** `@RailwayPrepDiscuss` (`-1002815379745`)
- **Brand Bot:** `@RailwayPrepOfficialBot`

## Required GitHub Repository Secrets
Add these under **GitHub Repo → Settings → Secrets and variables → Actions**:
1. `TELEGRAM_BOT_TOKEN` — Token from `@BotFather` for `@RailwayPrepOfficialBot`
2. `TELEGRAM_ADMIN_CHAT_ID` — Your private numeric Telegram user ID (check via `@RailwayPrepOfficialBot` or `@userinfobot` after tapping `/start`)
3. *(Optional for Admin Payment/Error Queue Telegram alerts)*:
   - `SUPABASE_URL` — `https://xzzupkexiztaustarwff.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY` — Supabase Service Role key (kept strictly in Secrets!)

## Automation Schedule (IST)
- **07:30 AM:** Morning GK & Science Capsule (`daily_capsule_and_card.py --mode capsule`)
- **10:00 AM & 06:00 PM:** Non-repeating Bilingual Official PYQ Quiz Poll (`daily_pyq_poll.py`)
- **01:30 PM:** Branded 1080×1080 Formula Card PNG (`daily_capsule_and_card.py --mode card`)
- **Every 2 Hours:** Official RRB Exam Notices Radar + Group Anti-Spam & Command Sweep (`rrb_exam_notices.py`, `group_moderator_and_bot.py`)
- **Sunday 09:00 AM:** Live Weekly Shift Challenge (`daily_capsule_and_card.py --mode sunday`)

## Local Dry-Run Testing
```bash
python3 automation/telegram/daily_pyq_poll.py --dry-run
python3 automation/telegram/rrb_exam_notices.py --dry-run
python3 automation/telegram/daily_capsule_and_card.py --mode capsule --dry-run
```
