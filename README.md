# Trapp Tutoring

Custom-coded site for [trapptutoring.com](https://trapptutoring.com). Built with [Astro](https://astro.build/) and TypeScript. This replaces the Google Sites site.

Planning and copy records live in [`docs/`](docs/README.md).

## Run locally

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:4321/`).

```bash
npm run build      # production build to dist/
npm run preview    # serve the production build
npm run check      # TypeScript / Astro check
```

## Deploy

This repo deploys from GitHub Actions to **GitHub Pages** (preview URL first). The custom domain is a later step.

1. Push `main` to GitHub.
2. In the GitHub repo: **Settings → Pages → Source: GitHub Actions**.
3. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds the site and publishes it.
4. The first successful run prints a preview URL, typically `https://<owner>.github.io/trapp-tutoring/`.

The workflow sets `SITE` and `BASE` for a project Pages URL. Local builds use `/` as the base path. When the custom domain is connected later, those deploy env vars should become `SITE=https://trapptutoring.com` and `BASE=/`.

Cloudflare Pages is also compatible (build command `npm run build`, output directory `dist`) if you prefer that host later.
