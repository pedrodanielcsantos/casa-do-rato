# Agent Instructions

This repository contains the website for Casa do Rato Eventos, a small private event venue for gatherings of up to 35 people.

The project is both a serious side business website and a learning playground for web technologies. Treat production quality and clarity as equally important.

## Read First

Before making changes, read the relevant docs:

- `docs/project-brief.md` for business context, audience, and goals.
- `docs/architecture.md` for file structure and where code/content should live.
- `docs/design-direction.md` for visual and UX direction.
- `docs/design-tokens.md` for the current brand color tokens.
- `docs/localization.md` for the planned PT/EN structure.
- `docs/content-model.md` for validated content structure.
- `docs/assets.md` for media and brand asset handling.
- `docs/development-workflow.md` for branch, PR, validation, and agent workflow.
- `docs/deployment.md` for GitHub Pages and local build details.

## Current Stack

- Astro static site.
- React components where interactivity or component reuse helps.
- GitHub Pages deployment.
- Git LFS for binary brand/media assets.
- No CMS, backend, booking engine, analytics, or form provider yet.

Do not add frameworks, UI libraries, CMS tooling, booking systems, analytics, payment tools, deployment providers, or major infrastructure without discussing the tradeoff with Pedro first.

## Commands

Install dependencies:

```bash
npm install
```

Run local development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Check content model and translation sync:

```bash
npm run check-translations
```

Run the default validation command:

```bash
npm run check
```

Format files:

```bash
npm run format
```

Preview the production build:

```bash
npm run preview
```

Test the GitHub Pages base path locally:

```bash
SITE_BASE_PATH=/casa-do-rato SITE_URL=http://localhost:4321 npm run check
npm run preview
```

Run `npm run check` after code changes. Documentation-only edits do not require a build.

Do not run multiple Astro build/check commands in parallel because they write to the same `dist/` and `.astro/` paths.

## Git Workflow

- Do not push directly to `main`.
- Use short-lived branches for changes. Agent branches should use the `codex/` prefix.
- Open a pull request for meaningful changes.
- Run `npm run check` before pushing code changes.
- Keep generated output out of Git.

## Code Guidelines

- Keep the site mostly static and simple.
- Prefer Astro pages/layouts for page structure.
- Use React for focused components, not for turning the whole site into a client app.
- Keep business copy and localized text centralized instead of scattering strings through components.
- Use Prettier for formatting. Do not introduce TypeScript, linting, testing, routing, or state-management tools without a clear reason and owner approval.
- Keep CSS readable and close to the current design system until a stronger design system exists.

## Asset Guidelines

- Website brand assets live in `public/brand/`.
- Other public website assets should live in a clear folder under `public/`.
- The original downloaded logo package is intentionally not kept in the repo. Add only the source/export files the website actually needs.
- Binary media and brand files are tracked with Git LFS through `.gitattributes`.
- Keep SVGs in normal Git unless there is a strong reason to move them to LFS.
- Do not commit generated output from `dist/`, `.astro/`, or `node_modules/`.

## Design Guidelines

- This is a real venue website, not a generic startup landing page.
- Use `#C99853` for accents and primary action surfaces, `#545454` for primary text, and `#FDFCF7` for main backgrounds.
- Prioritize trust, warmth, clarity, and ease of contact.
- Show the venue and the practical event experience as soon as real photos are available.
- Avoid overbuilt animations, abstract illustrations, decorative gradients, and generic marketing copy.
- Keep layouts responsive and easy to scan on mobile.

## Localization Direction

Portuguese and English are supported. Portuguese is the source language and default locale. The root URL serves Portuguese, and English is served from `/en/`.

By default, user-facing copy should be written in Portuguese. Culturally adopted expressions that are commonly used by the target audience, such as "baby showers", are acceptable and should not be mechanically translated.

When adding user-facing copy, edit `src/content/pt.js` first. Do not manually edit English copy unless explicitly asked; use the repo-local `update-translations` skill at `.agents/skills/update-translations` to regenerate `src/content/en.js` from the Portuguese source.

Keep reusable components language-agnostic. Pass translated strings from the content files into templates/components instead of hardcoding copy deep inside reusable components.

## Deployment Notes

The current public URL is:

```text
https://pedrodanielcsantos.github.io/casa-do-rato/
```

GitHub Pages uses the `/casa-do-rato/` base path until a custom domain is configured. Be careful with absolute URLs and asset paths.

## Communication

When making technical changes, explain the learning-relevant parts briefly. Pedro wants to understand the stack while building the business site.
