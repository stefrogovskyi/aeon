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
- ~~Investigate heartbeat crash loop~~ — self-recovered: the 3-consecutive-failure streak (flagged 2026-08-28 06:50 UTC, `claude exited 1` truncated modelUsage JSON parse) ended with a success at 2026-08-28 07:38:35Z; cron-state now shows `last_status: success`, `consecutive_failures: 0`, success_rate 64% (7/11). No fix was applied — it cleared on its own, same as the 2026-08-25/26 blip. Residual risk: `skill-health`/`skill-repair` remain disabled in aeon.yml, so a future recurrence still won't auto-remediate — worth enabling if this signature repeats.
