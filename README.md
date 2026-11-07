# Michael Muuo John — Portfolio

A Vite + React portfolio site. Design concept: the hero renders a live
`traceroute` to the site, where each "hop" is a real milestone (university,
internship, certifications) — a nod to a networking career, ending at
"connection established."

## Before you ship

Open `src/data/content.js` and fill in the two `TODO` fields:

- `profile.email` — currently `your.email@example.com`
- `profile.linkedin` / `profile.github` — currently placeholder URLs
- `profile.resumeUrl` — link to a hosted PDF resume, if you have one

Everything else on the site (bio, certifications, experience, skills) is
pulled from that one file, so you can update content there without touching
any component code.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy

`dist/` is a static site — deploy it anywhere that serves static files:

- **Vercel**: `npx vercel` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo
  (build command `npm run build`, publish directory `dist`)
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the
  `gh-pages` npm package

## Structure

```
src/
  data/content.js       ← all editable text content
  components/           ← one component per section
  App.jsx                ← assembles the page
  App.css / index.css    ← styles and design tokens
```

## Accessibility notes already handled

- Respects `prefers-reduced-motion` (terminal animation skips straight to
  the final state)
- Visible keyboard focus states on all links and buttons

