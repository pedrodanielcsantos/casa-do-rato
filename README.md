# Casa do Rato

Website for Casa do Rato Eventos, a small event venue for private gatherings of up to 35 people.

## Stack

- Astro static site
- React components where useful
- GitHub Pages deployment
- Git LFS for binary brand and media files

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The GitHub Pages workflow builds with `SITE_BASE_PATH=/casa-do-rato`, which matches the repository URL. When the site moves to a custom domain, remove that base path from `.github/workflows/deploy.yml`.

The deploy job is skipped while the repository is private unless the repository variable `ENABLE_GITHUB_PAGES` is set to `true`. GitHub Pages must also be enabled in the repository settings before the deploy job can publish the site.

## Brand Assets

The original logo package is preserved in `logo/`. Web-facing copies live in `public/brand/` and can be referenced by pages and components.
