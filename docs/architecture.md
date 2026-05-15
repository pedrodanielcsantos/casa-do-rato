# Architecture

This is an Astro static site with React components used where they add value.

## Key Files

- `astro.config.mjs`: Astro configuration, including site/base path handling.
- `src/pages/`: file-based routes.
- `src/layouts/`: shared page layout, document metadata, and site shell.
- `src/components/`: reusable React or Astro components.
- `src/content/`: localized content files and locale metadata.
- `src/styles/global.css`: global styling.
- `public/`: static files served as-is.
- `public/brand/`: web-facing brand assets used by the site.
- `.github/workflows/build_and_validate.yml`: pull request and main branch validation.
- `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow.
- `.gitattributes`: Git LFS tracking rules.

## Current Page Flow

The homepage is rendered through a shared localized template:

- `src/pages/index.astro` renders Portuguese from `src/content/pt.js`.
- `src/pages/en/index.astro` renders English from `src/content/en.js`.
- Both pages use `src/components/HomePage.astro`.
- `HomePage.astro` renders the homepage sections.
- `src/pages/eventos/[slug].astro` and `src/pages/en/events/[slug].astro`
  render localized occasion landing pages from `content.occasionPages`.
- `src/components/OccasionPage.astro` renders the shared occasion page template.
- `src/layouts/BaseLayout.astro` owns the document shell, navigation, language links, metadata, and global CSS import.

## Component Pattern

Use Astro for page-level structure and static HTML.

Use React for components that benefit from props, repeated data, or future interactivity. Keep React components focused and small.

Good React candidates:

- Contact link groups.
- Event type cards.
- Image gallery controls.
- FAQ accordion.
- Language switcher.

Avoid making the entire page a client-side React app unless there is a concrete reason.

## Content Pattern

Business copy lives in centralized content files.

Current shape:

```text
src/content/pt.js
src/content/en.js
src/content/locales.js
```

`src/content/pt.js` is the source of truth. `src/content/en.js` is maintained by the repo-local `update-translations` skill and validated by `npm run check-translations`.

The validated content model is documented in `docs/content-model.md`.

Reusable templates/components should receive translated content through props.

## Styling Pattern

Keep styling readable and explicit. The site currently uses plain CSS in `src/styles/global.css`.

The current brand tokens are documented in `docs/design-tokens.md`.

Before adding a CSS framework, evaluate whether the added abstraction is worth it for a small venue site. The current direction favors hand-authored CSS because it is easier to learn from and keeps the bundle simple.

## Generated Files

Do not edit or commit:

- `node_modules/`
- `dist/`
- `.astro/`

These are ignored by Git.
