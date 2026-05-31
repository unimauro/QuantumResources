# Changelog

All notable changes to Quantum Resources are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [2.0.0] — 2026-05-31 — The Learning Hub release

A major evolution from a curated link list into a full educational platform.

### Added
- **Docusaurus 3 documentation website** (`website/`) with dark/light mode,
  offline search, responsive design, SEO (sitemap, OpenGraph card) and PWA support.
- **Custom landing page** with animated quantum particle hero (Three.js), live
  statistics, feature grid and learning-path cards.
- **Four learning roadmaps**: Beginner, Intermediate, Advanced and Quantum AI.
- **Five hands-on labs**: Quantum RNG, Teleportation, Grover, Deutsch–Jozsa and a
  QML classifier — each with theory, runnable code and exercises.
- **Six framework guides**: Qiskit, Cirq, PennyLane, Q#, Braket, TensorFlow Quantum.
- **Three interactive tools**: Bloch sphere simulator, gate visualizer and a
  2-qubit circuit builder (real statevector simulation in the browser).
- **Searchable resource library** of 500+ books with category/year filters.
- **Career roadmaps** for four quantum roles, with skills, certs and projects.
- **Curated research paper reading list** and **course catalog**.
- **Updates blog** for release notes and announcements.
- `CONTRIBUTING.md`, issue templates, and a GitHub Actions workflow that builds
  and deploys the site to GitHub Pages.

### Changed
- `update-docs.yml` now only regenerates `docs/data.json` from `README.md`;
  deployment is handled by the new `deploy-website.yml`.
- README rewritten as a project overview with badges and navigation.

### Notes
- To go live, set the repository's **Pages → Source** to **GitHub Actions**.
- The legacy static page under `docs/` is preserved for reference.

## [1.x] — earlier
- Curated list of quantum computing books, courses, papers, videos and QML
  resources, with an auto-generated static GitHub Pages site.
