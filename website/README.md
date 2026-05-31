# Quantum Resources — Learning Hub (website)

This directory contains the [Docusaurus 3](https://docusaurus.io/) site that
powers the **[Quantum Resources Learning Hub](https://unimauro.github.io/QuantumResources/)**.

## Develop

Requires **Node.js 20+**.

```bash
npm install
npm start        # dev server at http://localhost:3000/QuantumResources/
npm run build    # production build into ./build
npm run serve    # preview the production build
```

## Structure

- `docs/` — all learning content (roadmaps, labs, frameworks, resources, career, interactive)
- `src/components/` — React interactive components (Bloch sphere, gate visualizer, circuit builder, books explorer, hero particles)
- `src/pages/index.js` — the landing page
- `src/data/quantum-data.json` — synced copy of the curated resource database (`../docs/data.json`)
- `docusaurus.config.js` — site config (theme, navbar, SEO, PWA, search, math, mermaid)

## Deployment

The site is built and deployed to GitHub Pages by
`.github/workflows/deploy-website.yml`. For it to go live, set the repository's
**Settings → Pages → Source** to **GitHub Actions**.

See the root [CONTRIBUTING.md](../CONTRIBUTING.md) for content guidelines.
