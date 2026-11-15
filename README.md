# TacoSprint.org

The TacoSprint website, built with Astro and static HTML, CSS, and a small script
for sponsorship email drafts. Fonts and site images are served locally.

## Development

Use Node.js 22.23.4 or newer. `.node-version` selects Node.js 24 for local tools
and Cloudflare builds.

```sh
npm ci
npm run dev
```

Open http://localhost:4321. Changes reload automatically.

Alternatively, use the Nix development environment:

```sh
nix profile install --accept-flake-config nixpkgs#devenv
devenv up
```

## Contributing

- The upcoming edition is in `src/pages/index.astro`.
- The 2026 archive is in `src/pages/2026.astro`, served at `/2026/`.
- Shared layout and styles are in `src/layouts/` and `src/styles/`.
- Sponsorship tiers and the email draft form are in `src/components/Sponsorship.astro`.
- Images and other static files are in `public/`.
- Keep dates and registration status tentative until confirmed.
- Run `npm run build` before proposing changes. This checks Astro/TypeScript
  and generates the static site in `dist/`.

## Preview and deployment

```sh
npm run build
npm run preview
```

Cloudflare Workers builds with `npm ci && npm run build` and serves `dist/`,
as configured in `wrangler.toml`. Deployment retains the existing custom domain.
The sponsorship form opens a local email draft; it does not submit to a server.
