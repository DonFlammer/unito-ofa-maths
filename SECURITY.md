# Local profiles and security

These are public static study sites, not a service for sensitive data. Use a made-up username and a unique code; never use your UniTo credentials or a password used elsewhere.

New profile codes have 12–128 characters and are case-sensitive. Profile archives and STUDIO2 transfers use AES-256-GCM and PBKDF2-SHA-256 with 600,000 iterations, a random salt and a fresh IV for every save. The code is not saved. The working progress and encryption key stay in the tab's sessionStorage while the profile is open; after 30 minutes without activity or explicit logout, the session is cleared. Anonymous progress stays in localStorage. Scripts on this same origin can access an open session, so encryption does not protect a compromised browser or site.

The animated background keeps only the position of its particles in the tab's sessionStorage (keys `sfondo:rete` and `sfondo:stelle`), so that it can continue from one page to the next: no personal data. The value is checked when read and ignored if it is not valid.

Old profiles and STUDIO1 transfers remain readable and migrate when you enter their code. Their old case-insensitive code is preserved: use “Change the profile code” to choose a new strong code. Older unencrypted archives cannot be encrypted without entering their code. Keep your code and an encrypted transfer backup; there is no server-side recovery. An old transfer remains valid with its old code even after you change the current profile code.

The first script hides the document inside frames. This is a client-side mitigation only: GitHub Pages does not support custom HTTP response headers, and a sandbox that disables JavaScript can bypass this mitigation. For header-based protection, serve these sites through hosting that supports `Content-Security-Policy: frame-ancestors 'none'` and `X-Content-Type-Options: nosniff`. A meta CSP cannot provide frame-ancestors. Full isolation of the four sites would also require separate origins and a different sharing mechanism.

The study planner accepts real calendar dates within five years, 1–40 hours per week, and at most 262 weeks. CI tests verify profile encryption, legacy migration, transfer integrity, session cleanup, input validation and page CSP hashes. Dependabot configuration covers build dependencies and GitHub Actions. Run `node --test tests/security.test.cjs` from the repository root. Header and GitHub account settings require separate verification; this code cannot enforce account 2FA.
