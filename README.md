# Tixonic Electronics — Website

A modern, responsive marketing website for **Tixonic Electronics** — Android Smart LED TVs (24"–65") and home electronics.

Built as a fast, static site (plain HTML/CSS/JS — no build step, no dependencies), ready to host free on **GitHub Pages**.

## Files
- `index.html` — page content
- `styles.css` — all styling
- `script.js` — nav, scroll animations, contact form
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Preview locally
Just double-click `index.html`, or run a tiny local server:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages (free hosting)

### Option A — with the GitHub CLI (easiest)
```bash
gh auth login                       # one-time: sign in to GitHub
gh repo create tixonic --public --source=. --remote=origin --push
```
Then on github.com open the repo → **Settings → Pages** → under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main / (root)** → Save.

Your site goes live at:
```
https://<your-username>.github.io/tixonic/
```

### Option B — manual (via github.com)
1. Create a new **public** repo on github.com named `tixonic`.
2. In this folder run:
   ```bash
   git remote add origin https://github.com/<your-username>/tixonic.git
   git branch -M main
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / root → Save.

### Want it at `username.github.io` (no `/tixonic` path)?
Name the repo exactly `<your-username>.github.io` instead of `tixonic`.

## Customising
- **Phone / email / address:** edit the Contact section in `index.html`.
- **TV models & specs:** edit the cards under `<!-- TV RANGE -->`.
- **Colours:** change the `--brand` / `--brand-2` variables at the top of `styles.css`.
- **Contact form:** currently a front-end demo (shows a thank-you message). To receive real emails, connect it to a free service like Formspree.
