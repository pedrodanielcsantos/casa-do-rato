# Development Workflow

This repo is optimized for small, validated iterations.

## Branches

- `main` is the production branch and deploys to GitHub Pages.
- Work should happen on short-lived branches.
- Agent-created branches should use the `codex/` prefix, for example `codex/update-homepage-copy`.
- Do not push directly to `main`.

## Pull Requests

Open a PR for every meaningful change. The PR template asks for:

- A short summary.
- Local validation with `npm run check`.
- Visual review when the UI changed.
- Translation sync when Portuguese copy changed.

The repository should require the `Validate` check from the `Build and validate` workflow before merging. Reviews are optional while this is a solo-owner repo because GitHub does not allow authors to approve their own PRs.

## Local Validation

Use Node.js 22 or newer. The CI workflows also use Node 22.

Run this before pushing code changes:

```bash
npm run check
```

That command checks formatting, validates content and translation sync, then runs an Astro production build.

For documentation-only changes, a build is usually unnecessary.

## Formatting

Use Prettier for formatting:

```bash
npm run format
npm run format:check
```

Prettier formats Astro, JavaScript, CSS, Markdown, JSON, and YAML files. Generated folders and `package-lock.json` are ignored.

## Local Development

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:4321/
```

Astro refreshes the browser automatically when files change.

## Local Production Preview

Create and preview a production build:

```bash
npm run check
npm run preview
```

Test the production domain root locally:

```bash
SITE_BASE_PATH=/ SITE_URL=http://localhost:4321 npm run check
npm run preview
```

Do not run multiple Astro build/check commands in parallel because they write to the same `dist/` and `.astro/` paths.

## Agent Workflow

Agents should:

- Read `AGENTS.md` and the relevant files in `docs/` first.
- Keep user-facing copy in Portuguese by default.
- Edit `src/content/pt.js` first when copy changes.
- Use the repo-local `update-translations` skill to sync English.
- Keep code artifacts English-named.
- Reuse existing Astro layouts, React components, and CSS tokens before adding new patterns.
- Ask Pedro before introducing new major infrastructure, providers, libraries, analytics, forms, bookings, or payment systems.
