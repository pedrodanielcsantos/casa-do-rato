# Deployment

The site deploys to GitHub Pages from GitHub Actions.

## Production URL

```text
https://pedrodanielcsantos.github.io/casa-do-rato/
```

Localized routes:

```text
Portuguese: https://pedrodanielcsantos.github.io/casa-do-rato/
English:    https://pedrodanielcsantos.github.io/casa-do-rato/en/
```

## Workflow

The deployment workflow lives in:

```text
.github/workflows/deploy.yml
```

Pull request validation lives in:

```text
.github/workflows/build_and_validate.yml
```

On pushes to `main`, it:

1. Checks out the repo with Git LFS enabled.
2. Uses Node.js 22.
3. Installs Node dependencies with `npm ci`.
4. Validates formatting, content, translation sync, and builds the site with `npm run check`.
5. Uploads the `dist/` artifact.
6. Deploys the artifact to GitHub Pages.

## Base Path

Because this is currently a GitHub Pages project site, the production base path is:

```text
/casa-do-rato/
```

The workflow sets:

```text
SITE_BASE_PATH=/casa-do-rato
SITE_URL=https://pedrodanielcsantos.github.io
```

`astro.config.mjs` normalizes that base path so asset URLs work correctly.

## Local Development

Run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321/
```

## Local Production Preview

Run:

```bash
npm run check
npm run preview
```

To test the GitHub Pages base path locally:

```bash
SITE_BASE_PATH=/casa-do-rato SITE_URL=http://localhost:4321 npm run check
npm run preview
```

## Custom Domain Later

When a custom domain is configured:

1. Add the custom domain in GitHub Pages settings.
2. Add the required DNS records.
3. Update or remove `SITE_BASE_PATH` in `.github/workflows/deploy.yml`.
4. Verify generated URLs and assets no longer require `/casa-do-rato/`.
