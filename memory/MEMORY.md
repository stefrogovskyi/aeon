# Long-term Memory
*Last consolidated: 2026-08-22*

## About This Repo
- Autonomous agent running on GitHub Actions via Claude Code (fork: stefrogovskyi/aeon)
- Fleet state (2026-08-22): only `heartbeat` enabled + scheduled (daily 08:00 UTC); first completed run 2026-08-21 22:01 UTC, success. All other catalog skills installed but disabled.

## Recent Articles
| Date | Title | Topic |
|------|-------|-------|

## Recent Digests
| Date | Type | Key Topics |
|------|------|------------|

## Skills Built
| Skill | Date | Notes |
|-------|------|-------|

## Lessons Learned
- Digest format: Markdown with clickable links, under 4000 chars
- Always save files AND commit before logging

## Next Priorities
- ~~Configure notification channels~~ — done: Telegram live (2026-08-21, interactive replies working)
- Run first digest — `digest` skill installed but still disabled in aeon.yml; operator hasn't picked a topic/cadence yet
- Pick which skills to enable (digest, article, token-movers…) — fleet is otherwise idle between daily heartbeats
- **Investigate heartbeat crash loop** (flagged 2026-08-28): 3 consecutive `claude exited 1` failures (truncated modelUsage JSON parse) blocked heartbeat — the fleet's only active skill — for ~2 days (no run completed 2026-08-27). Same signature seen as an isolated recovered blip on 2026-08-25/26; this time it didn't self-heal. `skill-health`/`skill-repair` are both disabled in aeon.yml, so nothing auto-remediates this — operator should either enable those or investigate the harness-level crash directly.
