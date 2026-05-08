# Architecture

This is an Astro static site with React components used where they add value.

## Key Files

- `astro.config.mjs`: Astro configuration, including site/base path handling.
- `src/pages/`: file-based routes.
- `src/components/`: reusable React or Astro components.
- `src/data/`: current site data and starter content.
- `src/styles/global.css`: global styling.
- `public/`: static files served as-is.
- `public/brand/`: web-facing brand assets used by the site.
- `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow.
- `.gitattributes`: Git LFS tracking rules.

## Current Page Flow

`src/pages/index.astro` builds the current homepage. It imports:

- Site/event data from `src/data/site.js`.
- React components from `src/components/`.
- Global styles from `src/styles/global.css`.

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

Business copy should move toward centralized content files, especially as localization is added.

Recommended future shape:

```text
src/content/pt.js
src/content/en.js
src/lib/i18n.js
```

Reusable components should receive translated content through props.

## Styling Pattern

Keep styling readable and explicit. The site currently uses plain CSS in `src/styles/global.css`.

Before adding a CSS framework, evaluate whether the added abstraction is worth it for a small venue site. The current direction favors hand-authored CSS because it is easier to learn from and keeps the bundle simple.

## Generated Files

Do not edit or commit:

- `node_modules/`
- `dist/`
- `.astro/`

These are ignored by Git.
