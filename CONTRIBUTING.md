# Contributing to Quantum Resources

Thanks for helping make Quantum Resources the best open quantum computing
learning hub! 💜 Every contribution counts — from fixing a typo to writing a new
hands-on lab.

## Ways to contribute

| I want to… | How |
| --- | --- |
| **Add or fix a resource** (book, course, paper, video) | Edit `README.md` (the canonical list). It's automatically parsed into `docs/data.json`. |
| **Improve a learning page** (roadmap, lab, framework, career) | Edit the Markdown in `website/docs/**`. |
| **Build an interactive tool** | Add a React component in `website/src/components/` and embed it in an `.mdx` page. |
| **Report a bug or broken link** | Open an [issue](https://github.com/unimauro/QuantumResources/issues). |
| **Suggest an idea** | Open a [discussion or issue](https://github.com/unimauro/QuantumResources/issues). |

## Project structure

```
QuantumResources/
├── README.md              # Canonical curated resource list (parsed into data.json)
├── docs/                  # Legacy static page + generated data.json (resource DB)
├── update_docs.py         # Parser: README.md -> docs/data.json
└── website/               # Docusaurus 3 Learning Hub
    ├── docs/              # All learning content (Markdown / MDX)
    │   ├── roadmaps/      # Beginner / Intermediate / Advanced / Quantum AI
    │   ├── labs/          # Hands-on labs
    │   ├── frameworks/    # Qiskit, Cirq, PennyLane, Q#, Braket, TFQ
    │   ├── resources/     # Courses, Books (interactive), Papers
    │   ├── career/        # Career roadmaps
    │   └── interactive/   # Bloch sphere, gate visualizer, circuit builder
    ├── src/components/    # React interactive components (Three.js, etc.)
    ├── src/pages/         # Landing page
    └── docusaurus.config.js
```

## Local development

Requires **Node.js 20+**.

```bash
cd website
npm install
npm start          # dev server with hot reload at http://localhost:3000/QuantumResources/
npm run build      # production build (run this before opening a PR)
```

## Writing content guidelines

- Start each Markdown file with frontmatter: `title`, `sidebar_position`, `description`.
- **Don't** add an `# H1` that duplicates the frontmatter `title`.
- Math uses **KaTeX**: inline `$...$`, block `$$...$$`. Write Dirac kets as
  `$\lvert 0 \rangle$` (avoid bare `<` / `>` in prose).
- Diagrams use **Mermaid** in a ```` ```mermaid ```` code fence.
- Code examples should be **complete and runnable**. Prefer modern Qiskit (1.x)
  or PennyLane. Show the `pip install` line.
- Be **honest about hype** — distinguish what's proven from what's expected,
  especially for quantum machine learning.

## Pull request checklist

- [ ] `npm run build` passes with no new warnings.
- [ ] New pages have correct frontmatter and appear in the sidebar.
- [ ] Links are valid (no 404s) — internal links use relative paths.
- [ ] New resources go in `README.md`, not directly in `data.json`.

## Good first issues

New here? Look for issues labeled
[`good first issue`](https://github.com/unimauro/QuantumResources/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
Great starting points: add a recent paper, fix a broken book link, or add an
exercise to a lab.

## Code of conduct

Be kind, be constructive, assume good faith. This is a learning community for
everyone, at every level. 🌱
