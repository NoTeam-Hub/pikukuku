# Piku & Kuku Pickles — pikukuku.store

Static site for GitHub Pages. No build step.

## Files
| File | Purpose |
|---|---|
| `index.html` | The whole site (English + Hindi) |
| `config.js` | **Launch settings** — the only file you edit at launch |
| `CNAME` | Tells GitHub Pages the domain is `pikukuku.store` |
| `.nojekyll` | Stops GitHub from processing the files |
| `404.html`, `robots.txt`, `sitemap.xml` | Error page + search-engine files |
| `favicon.svg`, `apple-touch-icon.png`, `og-image.png` | Tab icon + link-preview image |

## Deploy (one time)
1. Create a GitHub repo (e.g. `pikukuku-site`), upload everything in this folder to the `main` branch.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
3. Same page → **Custom domain** → `pikukuku.store` → Save (the `CNAME` file is already included).
4. At your domain registrar (DNS), add:

| Type | Host | Value |
|---|---|---|
| A | `@` | 185.199.108.153 |
| A | `@` | 185.199.109.153 |
| A | `@` | 185.199.110.153 |
| A | `@` | 185.199.111.153 |
| AAAA (optional) | `@` | 2606:50c0:8000::153 · 2606:50c0:8001::153 · 2606:50c0:8002::153 · 2606:50c0:8003::153 |
| CNAME | `www` | `<your-github-username>.github.io` |

5. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.

## Launch control (`config.js`)
- `mode: 'auto'` — everything below the "Launching Soon" banner stays hidden and ordering stays
  disabled; at **1 April 2027, 00:00 IST** the site unlocks by itself, no redeploy.
- `mode: 'locked'` — keep it locked (launch postponed). `mode: 'open'` — go live early.
- `launchDate` — change here if the date moves (the countdown follows it).
- `previewKey` — visit `https://pikukuku.store/?preview=<previewKey>` to see the full site before launch.
- `showBanner: false` — remove the banner after launch.

## Before launch checklist
- Fill in the real FSSAI licence number (footer) — it is hidden while locked, but visible after launch.
- Confirm the email address in the footer.
- Have a native Hindi speaker proof-read the Hindi text.

## Note on "masked"
The lock hides the sections and removes the order links in the browser. The hidden text is still in the
page source for anyone who views source. That is fine for a "coming soon" teaser; if the content must be
truly secret, deploy a banner-only `index.html` now and swap in the full one at launch.
