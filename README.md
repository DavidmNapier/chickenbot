# ChickenBot

A parody AI chat interface built with Next.js 14. Looks like a premium AI research assistant. Every response is an absurdly warm, over-the-top supportive joke answer — the complete opposite of the dismissive AI assistant it clones.

Powered by Chicken Treat. Running on 11 herbs and algorithms. Not a hotdog.

---

## What it is

ChickenBot is a static single-page joke app styled as a dark-mode AI chat interface. It has:

- 28 pre-written joke responses (chicken-themed and Not Hotdog / Silicon Valley-themed)
- A rotating model selector: `chickenbot-3.9-nugget`, `chickenbot-4.0-tendercrisp`, `chickenbot-apex-drumstick`
- Clickable sidebar history entries that fire pre-made Q&A pairs
- Functional toast notifications for broken/joke buttons
- A barely-visible `🌭` watermark (opacity 4%) in the bottom-right corner
- A `🌭 not hotdog` indicator in the sidebar footer
- Mobile-responsive with a slide-in sidebar

---

## Tech stack

- **Next.js 14** (App Router, fully static output)
- **TypeScript**
- **CSS** (global variables, no framework)
- **`next/font`** — Manrope, JetBrains Mono, Syne self-hosted at build time

No backend. No database. No API routes. No service worker.

---

## Project structure

```
chickenbot/
├── app/
│   ├── layout.tsx       # Root layout — fonts, metadata
│   ├── page.tsx         # Main page — all app state
│   └── globals.css      # Theme variables, component styles
├── components/
│   ├── Sidebar.tsx      # Nav, history, user footer, chicken SVG
│   ├── Topbar.tsx       # Model selector, status pulse
│   ├── ChatArea.tsx     # Welcome screen, input bar, chips
│   ├── MessageBubble.tsx# User / AI / thinking bubble variants
│   └── Toast.tsx        # Auto-dismissing toast (3s)
├── lib/
│   └── responses.ts     # All joke responses + sidebar history items
├── next.config.js       # Security headers
├── vercel.json          # .git path blocking
└── .gitignore
```

---

## Security

Built with findings from two pentest reports in mind.

| Fix | Implementation |
|---|---|
| `.git` exposure | `vercel.json` rewrite → 404 |
| Security headers | `next.config.js` — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP |
| XSS | React JSX rendering for all user input — no `dangerouslySetInnerHTML` on user content |
| Third-party font leakage | `next/font` self-hosts at build time — zero runtime requests to Google Fonts |
| No API routes | Nothing to auth-gate — fully static |
| No service worker | No cache poisoning surface |
| No secrets in client bundle | Nothing server-side to leak |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect the repo in the Vercel dashboard. The `vercel.json` and security headers in `next.config.js` apply automatically.

---

## Adding responses

Edit `lib/responses.ts`. Each entry follows this shape:

```ts
{
  open: string;   // Lead-in paragraph (HTML allowed — pre-written content only)
  core: string;   // The punchline — displayed large in orange
  close: string;  // Closing line
  tokens: string; // e.g. "8,888"
  latency: string;// e.g. "1.1s"
  conf: string;   // e.g. "99.99%"
}
```

To add sidebar history items, append to the `HISTORY` array in the same file.

---

## Origin

Cloned and rebranded from `clawninjr` — an internal joke AI assistant. The original had a mean/dismissive tone, a ninja theme, and several security issues found in a static site pentest (exposed `.git`, no security headers, Google Fonts privacy leak, weak XSS escaping). ChickenBot fixes all of them and inverts the tone entirely.
