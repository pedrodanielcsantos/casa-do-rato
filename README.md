# Casa do Rato

Website for Casa do Rato Eventos, a small event venue for private gatherings of up to 35 people.

## Stack

- Astro static site
- React components where useful
- GitHub Pages deployment
- Git LFS for binary brand and media files

## Agent Context

Agents should read [AGENTS.md](AGENTS.md) before changing the repo. The `docs/` folder contains the project brief, architecture notes, design direction, localization plan, deployment notes, backlog, and decision records.

## Development

Install dependencies once:

```bash
npm install
```

Start the local Astro development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:4321/
```

Astro watches for file changes and refreshes the browser automatically while the dev server is running.

## Build

Create a production build in `dist/`:

```bash
npm run build
```

Run this before pushing changes.

Run the default validation command:

```bash
npm run check
```

Preview the production build locally:

```bash
npm run preview
```

To test the GitHub Pages base path locally:

```bash
SITE_BASE_PATH=/casa-do-rato SITE_URL=http://localhost:4321 npm run build
npm run preview
```

The GitHub Pages workflow builds with `SITE_BASE_PATH=/casa-do-rato`, which matches the repository URL. When the site moves to a custom domain, remove that base path from `.github/workflows/deploy.yml`.

The deploy job is skipped while the repository is private unless the repository variable `ENABLE_GITHUB_PAGES` is set to `true`. GitHub Pages must also be enabled in the repository settings before the deploy job can publish the site.

## Brand Assets

The original logo package is preserved in `logo/`. Web-facing copies live in `public/brand/` and can be referenced by pages and components.
