# Deployment

The site deploys to GitHub Pages from GitHub Actions.

## Production URL

```text
https://casadorato.pt/
```

Localized routes:

```text
Portuguese: https://casadorato.pt/
English:    https://casadorato.pt/en/
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

Because the site uses a custom domain, the production base path is the domain root:

```text
/
```

The workflow sets:

```text
SITE_BASE_PATH=/
SITE_URL=https://casadorato.pt
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

To test the production domain root locally:

```bash
SITE_BASE_PATH=/ SITE_URL=http://localhost:4321 npm run check
npm run preview
```

## Custom Domain

GitHub Pages is configured with:

```text
casadorato.pt
```

DNS should point the apex domain to GitHub Pages with `A` records, and the `www`
subdomain should use a `CNAME` record pointing to:

```text
pedrodanielcsantos.github.io
```

This project deploys from a custom GitHub Actions workflow, so a repository
`CNAME` file is not required.
